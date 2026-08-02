# CaptureGuard

지정한 창(프로세스/제목)을 **화면 캡처에서 "애초에 열리지 않았던 것처럼"** 보이게 만들고,
동시에 **작업표시줄(Taskbar) / Alt+Tab 에서도 숨기는** 도구.

> 본인 소유의 시스템에서 프라이버시 보호 목적으로만 사용하세요.

---

## 목표와 한계 (반드시 읽을 것)

두 가지를 만족하도록 설계됨:

1. **검은 사각형(black rect)이 남지 않는다** — 캡처 결과에서 보호 창 자리는 **바탕화면**으로 채워짐.
2. **작업표시줄/Alt+Tab 에서 사라진다** — 앱이 실행 중이라는 흔적도 스크린샷에 안 남음.

### 왜 "모든 프로그램 + 검은색 없음"을 동시에 100% 보장 못 하나

Windows 기본 API `WDA_EXCLUDEFROMCAPTURE` 는 **모든** 캡처 프로그램을 한 번에
막지만 결과가 무조건 **검은색**이다. "검은색 절대 금지"를 택했으므로 그 API를 못 쓴다.

그래서 이 도구는 **캡처하는 프로그램 안으로 들어가 캡처 함수를 가로채고, 그 자리를
바탕화면으로 그려넣는** 방식을 쓴다. 그 결과 다음 제약이 따른다:

- **`config.ini` 의 `[capture_targets]` 에 등록한 프로그램에만 적용된다.**
  등록 안 된(=후킹 안 한) 캡처 프로그램은 창을 그대로 찍는다. 새 캡처 프로그램을
  알게 되면 exe 이름을 추가하라.
- 현재 후킹 경로는 **GDI (`BitBlt` / `StretchBlt`)** — 즉 `Graphics.CopyFromScreen` 계열.
  대상이 **DXGI Desktop Duplication / Windows.Graphics.Capture** 를 쓰면 안 통한다
  (그쪽 후킹은 별도 확장 필요 — 아래 "확장").
- **커널 미러 드라이버 / HDMI 캡처카드 / 물리 카메라**는 어떤 소프트웨어로도 못 막는다.

---

## 구성 요소

| 구성물 | 주입 대상 | 하는 일 |
|---|---|---|
| `capguard-hook.dll` | **캡처하는 프로그램** | `BitBlt`/`StretchBlt` 후킹 → 보호 창을 바탕화면으로 덧칠 (black 제거) |
| `taskbar-guard.dll` | **보호 대상 프로그램** | 자기 창을 Taskbar / Alt+Tab 에서 제거 |
| `guard.exe` | (실행 파일) | 프로세스 감시하며 위 DLL을 알맞은 프로세스에 주입 |

`guard.exe`, 두 DLL, `config.ini` 는 **같은 폴더**(빌드 후 `build\bin\Release`)에 있어야 한다.
DLL은 자기 옆의 `config.ini` 를 읽는다. `build.bat` 이 `config.ini` 를 자동 복사한다.

---

## 빌드

요구사항: Visual Studio 2022 (C++ 데스크톱 워크로드), CMake 3.20+, 인터넷(최초 1회 MinHook 자동 다운로드).

```bat
build.bat
```

수동:

```bat
cmake -S . -B build -A x64
cmake --build build --config Release
```

> **반드시 x64**로 빌드하고, 대상 프로그램들도 **x64** 여야 한다 (비트수 일치 필수).
> 32비트 대상을 다루려면 `-A Win32` 로 따로 빌드해서 32비트 대상에 32비트 DLL을 주입해야 한다.

---

## 사용법

1. `config.ini` 편집:
   - `[capture_targets]` — 캡처하는(막고 싶은) 프로그램의 exe 이름
   - `[protected_processes]` — 통째로 숨길 프로그램의 exe 이름
   - `[protected_titles]` — 제목에 이 문자열이 포함된 창을 숨김(부분 일치)
2. `guard.exe` 를 **관리자 권한**으로 실행 (다른 프로세스에 주입하려면 필요).
3. 켜두면 대상 프로세스가 뜰 때마다 자동 처리. 콘솔 창을 닫으면 종료.
   (이미 주입된 후킹은 대상 프로세스가 끝날 때까지 유지됨)

### config.ini 예시

```ini
[capture_targets]
Monitor.exe

[protected_processes]
KakaoTalk.exe

[protected_titles]
비밀
Private
```

---

## 동작 원리 요약

- **black 제거**: 캡처 프로그램이 `BitBlt(screenDC ...)` 로 화면을 긁는 순간,
  후킹이 원본 복사를 그대로 실행시킨 뒤 보호 창 사각형만 바탕화면 픽셀로 덮어쓴다.
  실제 모니터에는 창이 정상적으로 보이고, 저장/전송되는 이미지에만 안 보인다.
- **taskbar 제거**: 보호 프로세스 안에서 `ITaskbarList::DeleteTab` 로 버튼을 지우고,
  `WS_EX_TOOLWINDOW` 로 Alt+Tab 목록에서도 뺀다. (전체화면 캡처에 찍히는 작업표시줄에
  버튼이 남지 않게 하려는 목적)

---

## 확장

- **DXGI / Windows.Graphics.Capture 대응**: `capguard-hook.dll` 에
  `IDXGIOutputDuplication::AcquireNextFrame` 또는 WGC 프레임 콜백 후킹을 추가.
- **바탕화면 대신 주변색/블러 채우기**: `src/hook/wallpaper.cpp` 채우기 로직 교체.
- **멀티모니터별 다른 배경**: 현재는 바탕화면을 가상 화면 크기로 stretch (근사).

---

## 주의

- DLL 인젝션 + API 후킹은 백신이 오탐할 수 있다. 본인 PC에서 예외 등록해 사용하라.
- 이 도구는 **스크린 캡처만** 다룬다. 대상 프로그램이 키 입력·활성 창 제목 등을
  별도로 서버에 보낸다면 그건 이 도구로 막히지 않는다 — 그건 프로그램 제거로 대응해야 한다.
