@echo off
REM Build CaptureGuard (x64, Release). Requires Visual Studio 2022 + CMake + internet (MinHook).
setlocal
cd /d "%~dp0"

cmake -S . -B build -A x64
if errorlevel 1 goto :fail

cmake --build build --config Release
if errorlevel 1 goto :fail

echo.
echo ============================================================
echo  Build OK. Output: build\bin\Release\
echo    guard.exe, capguard-hook.dll, taskbar-guard.dll, config.ini
echo  Run guard.exe as Administrator.
echo ============================================================
exit /b 0

:fail
echo.
echo Build FAILED. See messages above.
exit /b 1
