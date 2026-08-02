#pragma once
#include <windows.h>
#include <string>
#include <vector>

struct Config {
    std::vector<std::wstring> captureTargets;   // exe names to inject the hook DLL into
    std::vector<std::wstring> protectedProcs;   // exe names to hide
    std::vector<std::wstring> protectedTitles;  // window title substrings to hide
};

// Parse a simple INI ([section] + one value per line, ';' comments).
Config LoadConfig(const std::wstring& iniPath);

// Directory that contains the given module (DLL/EXE), no trailing backslash.
std::wstring ModuleDir(HMODULE mod);

// Lowercase exe name of a PID, e.g. "monitor.exe". Empty on failure.
std::wstring ProcessNameOfPid(DWORD pid);

std::wstring ToLower(std::wstring s);
bool IEquals(const std::wstring& a, const std::wstring& b);
bool IContains(const std::wstring& hay, const std::wstring& needle);
bool NameInList(const std::wstring& name, const std::vector<std::wstring>& list);

// True if this window matches the protected process/title rules.
bool MatchProtected(HWND h, const Config& c);
