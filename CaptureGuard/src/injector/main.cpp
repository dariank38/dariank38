// guard.exe
// Controller. Watches running processes and injects the right DLL:
//   - capture_targets  -> capguard-hook.dll   (repaints protected windows -> no black rect)
//   - protected procs / windows with protected titles -> taskbar-guard.dll (hide from taskbar)
// Run as Administrator so it can open and write to other processes.

#include <windows.h>
#include <tlhelp32.h>
#include <set>
#include <string>
#include <vector>
#include <cstdio>
#include "config.h"

static std::wstring g_dir;          // folder of guard.exe (also holds the DLLs + config.ini)
static std::wstring g_hookDll;      // capguard-hook.dll
static std::wstring g_taskbarDll;   // taskbar-guard.dll

// pid + which-dll pairs already injected, so we don't inject twice.
static std::set<std::pair<DWORD, int>> g_done;  // int: 0 = hook, 1 = taskbar

static bool InjectDll(DWORD pid, const std::wstring& dllPath) {
    HANDLE proc = OpenProcess(
        PROCESS_CREATE_THREAD | PROCESS_VM_OPERATION | PROCESS_VM_WRITE |
        PROCESS_VM_READ | PROCESS_QUERY_INFORMATION,
        FALSE, pid);
    if (!proc) return false;

    bool ok = false;
    SIZE_T bytes = (dllPath.size() + 1) * sizeof(wchar_t);
    void* remote = VirtualAllocEx(proc, nullptr, bytes, MEM_COMMIT | MEM_RESERVE, PAGE_READWRITE);
    if (remote) {
        if (WriteProcessMemory(proc, remote, dllPath.c_str(), bytes, nullptr)) {
            auto loadLib = reinterpret_cast<LPTHREAD_START_ROUTINE>(
                GetProcAddress(GetModuleHandleW(L"kernel32.dll"), "LoadLibraryW"));
            HANDLE thread = CreateRemoteThread(proc, nullptr, 0, loadLib, remote, 0, nullptr);
            if (thread) {
                WaitForSingleObject(thread, 5000);
                DWORD code = 0;
                GetExitCodeThread(thread, &code);  // non-zero HMODULE = loaded
                ok = (code != 0);
                CloseHandle(thread);
            }
        }
        VirtualFreeEx(proc, remote, 0, MEM_RELEASE);
    }
    CloseHandle(proc);
    return ok;
}

// PIDs whose exe matches any of `names`.
static std::vector<std::pair<DWORD, std::wstring>> SnapshotProcs() {
    std::vector<std::pair<DWORD, std::wstring>> out;
    HANDLE snap = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);
    if (snap == INVALID_HANDLE_VALUE) return out;
    PROCESSENTRY32W e{sizeof(e)};
    for (BOOL ok = Process32FirstW(snap, &e); ok; ok = Process32NextW(snap, &e))
        out.emplace_back(e.th32ProcessID, ToLower(e.szExeFile));
    CloseHandle(snap);
    return out;
}

// PIDs that own a visible top-level window whose title matches protected titles.
static std::set<DWORD> PidsByProtectedTitle(const Config& cfg) {
    std::set<DWORD> pids;
    if (cfg.protectedTitles.empty()) return pids;
    struct Ctx { const Config* c; std::set<DWORD>* out; } ctx{&cfg, &pids};
    EnumWindows([](HWND h, LPARAM lp) -> BOOL {
        auto* x = reinterpret_cast<Ctx*>(lp);
        if (IsWindowVisible(h) && MatchProtected(h, *x->c)) {
            DWORD pid = 0; GetWindowThreadProcessId(h, &pid);
            x->out->insert(pid);
        }
        return TRUE;
    }, reinterpret_cast<LPARAM>(&ctx));
    return pids;
}

static void Tick(const Config& cfg) {
    auto procs = SnapshotProcs();

    // 1) capture targets -> hook DLL
    for (auto& [pid, name] : procs) {
        if (!NameInList(name, cfg.captureTargets)) continue;
        if (g_done.count({pid, 0})) continue;
        if (InjectDll(pid, g_hookDll)) {
            g_done.insert({pid, 0});
            wprintf(L"[hook]    injected into %s (pid %lu)\n", name.c_str(), pid);
        }
    }

    // 2) protected processes -> taskbar DLL
    for (auto& [pid, name] : procs) {
        if (!NameInList(name, cfg.protectedProcs)) continue;
        if (g_done.count({pid, 1})) continue;
        if (InjectDll(pid, g_taskbarDll)) {
            g_done.insert({pid, 1});
            wprintf(L"[taskbar] injected into %s (pid %lu)\n", name.c_str(), pid);
        }
    }

    // 3) processes matched only by window title -> taskbar DLL
    for (DWORD pid : PidsByProtectedTitle(cfg)) {
        if (g_done.count({pid, 1})) continue;
        if (InjectDll(pid, g_taskbarDll)) {
            g_done.insert({pid, 1});
            wprintf(L"[taskbar] injected into pid %lu (title match)\n", pid);
        }
    }
}

int wmain() {
    g_dir        = ModuleDir(nullptr);  // nullptr -> this exe
    g_hookDll    = g_dir + L"\\capguard-hook.dll";
    g_taskbarDll = g_dir + L"\\taskbar-guard.dll";

    Config cfg = LoadConfig(g_dir + L"\\config.ini");
    wprintf(L"CaptureGuard running. capture=%zu protected=%zu titles=%zu\n",
            cfg.captureTargets.size(), cfg.protectedProcs.size(), cfg.protectedTitles.size());
    wprintf(L"Close this window to stop. (Injected hooks persist until targets exit.)\n\n");

    for (;;) {
        Tick(cfg);
        Sleep(2000);
    }
    return 0;
}
