// capguard-hook.dll
// Injected INTO a screen-capturing process. Hooks the GDI capture path
// (BitBlt / StretchBlt) and, whenever a full-screen grab happens, overpaints
// every protected window's rectangle with the desktop wallpaper.
// Result: the protected window is absent from the capture (no black rect),
// while remaining fully visible on the real monitor.

#include <windows.h>
#include "MinHook.h"
#include "wallpaper.h"
#include "config.h"

typedef BOOL(WINAPI* BitBlt_t)(HDC, int, int, int, int, HDC, int, int, DWORD);
typedef BOOL(WINAPI* StretchBlt_t)(HDC, int, int, int, int, HDC, int, int, int, int, DWORD);

static BitBlt_t     oBitBlt     = nullptr;
static StretchBlt_t oStretchBlt = nullptr;
static Config       g_cfg;

// Heuristic: a source DC that belongs to no window and covers most of the screen
// is a whole-desktop grab (as CopyFromScreen / BitBlt(screenDC) produce).
static bool IsScreenGrab(HDC src, int w, int h, DWORD rop) {
    return rop == SRCCOPY
        && WindowFromDC(src) == nullptr
        && w >= GetSystemMetrics(SM_CXSCREEN) / 2
        && h >= GetSystemMetrics(SM_CYSCREEN) / 2;
}

// dest was just filled with the real screen. Paint wallpaper over protected windows.
// (xSrc,ySrc) is the capture origin in screen coordinates, so dest(0,0) == screen(xSrc,ySrc).
static void RepaintProtected(HDC dest, int xSrc, int ySrc) {
    HDC wall = GetWallpaperDC();
    if (!wall) return;

    for (HWND h = GetTopWindow(nullptr); h; h = GetWindow(h, GW_HWNDNEXT)) {
        if (!IsWindowVisible(h) || IsIconic(h)) continue;
        if (!MatchProtected(h, g_cfg)) continue;

        RECT r;
        if (!GetWindowRect(h, &r)) continue;
        int w = r.right - r.left;
        int hgt = r.bottom - r.top;
        if (w <= 0 || hgt <= 0) continue;

        oBitBlt(dest, r.left - xSrc, r.top - ySrc, w, hgt,
                wall, r.left - VirtualOriginX(), r.top - VirtualOriginY(), SRCCOPY);
    }
}

static BOOL WINAPI hkBitBlt(HDC d, int dx, int dy, int w, int h,
                            HDC s, int sx, int sy, DWORD rop) {
    BOOL ret = oBitBlt(d, dx, dy, w, h, s, sx, sy, rop);
    if (IsScreenGrab(s, w, h, rop))
        RepaintProtected(d, sx, sy);
    return ret;
}

static BOOL WINAPI hkStretchBlt(HDC d, int dx, int dy, int dw, int dh,
                                HDC s, int sx, int sy, int sw, int sh, DWORD rop) {
    BOOL ret = oStretchBlt(d, dx, dy, dw, dh, s, sx, sy, sw, sh, rop);
    // Only handle unscaled full grabs; scaled repaint would need coordinate mapping.
    if (IsScreenGrab(s, sw, sh, rop) && dw == sw && dh == sh)
        RepaintProtected(d, sx, sy);
    return ret;
}

BOOL APIENTRY DllMain(HMODULE mod, DWORD reason, LPVOID) {
    if (reason == DLL_PROCESS_ATTACH) {
        DisableThreadLibraryCalls(mod);
        g_cfg = LoadConfig(ModuleDir(mod) + L"\\config.ini");
        InitWallpaperDC();

        if (MH_Initialize() != MH_OK) return TRUE;
        MH_CreateHook(&BitBlt,     &hkBitBlt,     reinterpret_cast<LPVOID*>(&oBitBlt));
        MH_CreateHook(&StretchBlt, &hkStretchBlt, reinterpret_cast<LPVOID*>(&oStretchBlt));
        MH_EnableHook(MH_ALL_HOOKS);
    } else if (reason == DLL_PROCESS_DETACH) {
        MH_DisableHook(MH_ALL_HOOKS);
        MH_Uninitialize();
    }
    return TRUE;
}
