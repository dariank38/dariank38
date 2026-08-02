// taskbar-guard.dll
// Injected INTO a protected process (e.g. the app you want hidden).
// Removes that process's matching top-level windows from the Taskbar and from
// the Alt+Tab list, so the screenshot (which includes the taskbar) shows no
// trace that the app is running.

#include <windows.h>
#include <shobjidl.h>
#include <objbase.h>
#include "config.h"

#pragma comment(lib, "ole32.lib")

static Config g_cfg;

static bool IsOwnTopLevel(HWND h) {
    if (GetWindow(h, GW_OWNER) != nullptr) return false;  // top-level only
    DWORD pid = 0;
    GetWindowThreadProcessId(h, &pid);
    return pid == GetCurrentProcessId();
}

static void Hide(HWND h) {
    if (!IsWindow(h)) return;

    // 1) Remove the taskbar button (a shell request; no window flicker).
    ITaskbarList* tb = nullptr;
    if (SUCCEEDED(CoCreateInstance(CLSID_TaskbarList, nullptr, CLSCTX_INPROC_SERVER,
                                   IID_ITaskbarList, reinterpret_cast<void**>(&tb)))) {
        tb->HrInit();
        tb->DeleteTab(h);
        tb->Release();
    }

    // 2) Remove from Alt+Tab by marking it a tool window.
    LONG ex = GetWindowLong(h, GWL_EXSTYLE);
    if (!(ex & WS_EX_TOOLWINDOW)) {
        SetWindowLong(h, GWL_EXSTYLE, (ex | WS_EX_TOOLWINDOW) & ~WS_EX_APPWINDOW);
        SetWindowPos(h, nullptr, 0, 0, 0, 0,
                     SWP_NOMOVE | SWP_NOSIZE | SWP_NOZORDER | SWP_NOACTIVATE | SWP_FRAMECHANGED);
    }
}

static BOOL CALLBACK EnumCb(HWND h, LPARAM) {
    if (IsOwnTopLevel(h) && MatchProtected(h, g_cfg)) Hide(h);
    return TRUE;
}

static void CALLBACK OnWinEvent(HWINEVENTHOOK, DWORD, HWND h,
                                LONG idObject, LONG, DWORD, DWORD) {
    if (idObject != OBJID_WINDOW || !h) return;
    if (IsOwnTopLevel(h) && MatchProtected(h, g_cfg)) Hide(h);
}

static DWORD WINAPI Worker(LPVOID) {
    CoInitializeEx(nullptr, COINIT_APARTMENTTHREADED);

    EnumWindows(EnumCb, 0);  // existing windows

    // New/shown windows of this process.
    HWINEVENTHOOK hook = SetWinEventHook(
        EVENT_OBJECT_SHOW, EVENT_OBJECT_SHOW, nullptr, OnWinEvent,
        GetCurrentProcessId(), 0, WINEVENT_OUTOFCONTEXT);

    MSG msg;
    while (GetMessage(&msg, nullptr, 0, 0) > 0) {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
    }

    if (hook) UnhookWinEvent(hook);
    CoUninitialize();
    return 0;
}

BOOL APIENTRY DllMain(HMODULE mod, DWORD reason, LPVOID) {
    if (reason == DLL_PROCESS_ATTACH) {
        DisableThreadLibraryCalls(mod);
        g_cfg = LoadConfig(ModuleDir(mod) + L"\\config.ini");
        CreateThread(nullptr, 0, Worker, nullptr, 0, nullptr);
    }
    return TRUE;
}
