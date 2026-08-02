#include "config.h"
#include <fstream>
#include <algorithm>
#include <cwctype>

std::wstring ToLower(std::wstring s) {
    std::transform(s.begin(), s.end(), s.begin(),
                   [](wchar_t c) { return (wchar_t)std::towlower(c); });
    return s;
}

bool IEquals(const std::wstring& a, const std::wstring& b) {
    return ToLower(a) == ToLower(b);
}

bool IContains(const std::wstring& hay, const std::wstring& needle) {
    if (needle.empty()) return false;
    return ToLower(hay).find(ToLower(needle)) != std::wstring::npos;
}

bool NameInList(const std::wstring& name, const std::vector<std::wstring>& list) {
    for (const auto& e : list)
        if (IEquals(name, e)) return true;
    return false;
}

static std::wstring Trim(const std::wstring& s) {
    size_t a = s.find_first_not_of(L" \t\r\n");
    if (a == std::wstring::npos) return L"";
    size_t b = s.find_last_not_of(L" \t\r\n");
    return s.substr(a, b - a + 1);
}

Config LoadConfig(const std::wstring& iniPath) {
    Config c;
    std::wifstream in(iniPath);
    if (!in.is_open()) return c;

    std::wstring line, section;
    while (std::getline(in, line)) {
        std::wstring t = Trim(line);
        if (t.empty() || t[0] == L';' || t[0] == L'#') continue;
        if (t.front() == L'[' && t.back() == L']') {
            section = ToLower(t.substr(1, t.size() - 2));
            continue;
        }
        if (section == L"capture_targets")        c.captureTargets.push_back(t);
        else if (section == L"protected_processes") c.protectedProcs.push_back(t);
        else if (section == L"protected_titles")    c.protectedTitles.push_back(t);
    }
    return c;
}

std::wstring ModuleDir(HMODULE mod) {
    wchar_t path[MAX_PATH] = {0};
    GetModuleFileNameW(mod, path, MAX_PATH);
    std::wstring p = path;
    size_t slash = p.find_last_of(L"\\/");
    return (slash == std::wstring::npos) ? L"." : p.substr(0, slash);
}

std::wstring ProcessNameOfPid(DWORD pid) {
    HANDLE h = OpenProcess(PROCESS_QUERY_LIMITED_INFORMATION, FALSE, pid);
    if (!h) return L"";
    wchar_t buf[MAX_PATH] = {0};
    DWORD sz = MAX_PATH;
    std::wstring name;
    if (QueryFullProcessImageNameW(h, 0, buf, &sz)) {
        std::wstring full = buf;
        size_t slash = full.find_last_of(L"\\/");
        name = (slash == std::wstring::npos) ? full : full.substr(slash + 1);
    }
    CloseHandle(h);
    return ToLower(name);
}

bool MatchProtected(HWND h, const Config& c) {
    DWORD pid = 0;
    GetWindowThreadProcessId(h, &pid);
    if (!c.protectedProcs.empty() && NameInList(ProcessNameOfPid(pid), c.protectedProcs))
        return true;

    wchar_t title[512] = {0};
    GetWindowTextW(h, title, 512);
    std::wstring t = title;
    for (const auto& s : c.protectedTitles)
        if (IContains(t, s)) return true;

    return false;
}
