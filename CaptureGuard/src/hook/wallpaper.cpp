#include "wallpaper.h"
#include <gdiplus.h>
#pragma comment(lib, "gdiplus.lib")

using namespace Gdiplus;

static HDC        g_dc  = nullptr;
static HBITMAP    g_bmp = nullptr;
static int        g_vx = 0, g_vy = 0, g_vw = 0, g_vh = 0;
static ULONG_PTR  g_gdiplusToken = 0;

int VirtualOriginX() { return g_vx; }
int VirtualOriginY() { return g_vy; }
HDC GetWallpaperDC() { return g_dc; }

bool InitWallpaperDC() {
    g_vx = GetSystemMetrics(SM_XVIRTUALSCREEN);
    g_vy = GetSystemMetrics(SM_YVIRTUALSCREEN);
    g_vw = GetSystemMetrics(SM_CXVIRTUALSCREEN);
    g_vh = GetSystemMetrics(SM_CYVIRTUALSCREEN);
    if (g_vw <= 0 || g_vh <= 0) return false;

    GdiplusStartupInput gsi;
    GdiplusStartup(&g_gdiplusToken, &gsi, nullptr);

    HDC screen = GetDC(nullptr);
    g_dc  = CreateCompatibleDC(screen);
    g_bmp = CreateCompatibleBitmap(screen, g_vw, g_vh);
    SelectObject(g_dc, g_bmp);

    // Base fill with the desktop background color (covers slideshow / no-wallpaper).
    RECT full = {0, 0, g_vw, g_vh};
    HBRUSH br = CreateSolidBrush(GetSysColor(COLOR_DESKTOP));
    FillRect(g_dc, &full, br);
    DeleteObject(br);

    wchar_t path[MAX_PATH] = {0};
    if (SystemParametersInfoW(SPI_GETDESKWALLPAPER, MAX_PATH, path, 0) && path[0]) {
        Image img(path);
        if (img.GetLastStatus() == Ok) {
            Graphics g(g_dc);
            g.SetInterpolationMode(InterpolationModeHighQualityBicubic);
            // Stretch-to-fill: an approximation of the "Fill/Span" wallpaper styles.
            g.DrawImage(&img, 0, 0, g_vw, g_vh);
        }
    }

    ReleaseDC(nullptr, screen);
    return true;
}
