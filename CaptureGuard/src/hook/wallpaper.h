#pragma once
#include <windows.h>

// Loads the current desktop wallpaper (jpg/png/bmp) into a memory DC sized to the
// full virtual screen. Pixel (0,0) of that DC corresponds to screen point
// (SM_XVIRTUALSCREEN, SM_YVIRTUALSCREEN). Call once at startup.
bool InitWallpaperDC();

// Memory DC holding the wallpaper, or NULL if not initialized.
HDC GetWallpaperDC();

// Virtual-screen origin in screen coordinates (can be negative on multi-monitor).
int VirtualOriginX();
int VirtualOriginY();
