cmake_minimum_required(VERSION 3.20)
project(CaptureGuard CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

if(NOT WIN32)
  message(FATAL_ERROR "CaptureGuard is Windows-only.")
endif()

# ---- MinHook (fetched from GitHub on first configure) ----
include(FetchContent)
FetchContent_Declare(
  minhook
  GIT_REPOSITORY https://github.com/TsudaKageyu/minhook.git
  GIT_TAG        master
)
FetchContent_MakeAvailable(minhook)

# ---- shared code ----
add_library(common STATIC src/common/config.cpp)
target_include_directories(common PUBLIC src/common)

# ---- hook DLL (injected into capture programs) ----
add_library(capguard-hook SHARED src/hook/dllmain.cpp src/hook/wallpaper.cpp)
target_include_directories(capguard-hook PRIVATE src/common src/hook)
target_link_libraries(capguard-hook PRIVATE common minhook gdiplus)

# ---- taskbar DLL (injected into protected programs) ----
add_library(taskbar-guard SHARED src/taskbar/dllmain.cpp)
target_include_directories(taskbar-guard PRIVATE src/common)
target_link_libraries(taskbar-guard PRIVATE common ole32)

# ---- controller exe ----
add_executable(guard src/injector/main.cpp)
target_include_directories(guard PRIVATE src/common)
target_link_libraries(guard PRIVATE common)

# Put everything (+ config.ini) into one output folder.
set(OUT ${CMAKE_BINARY_DIR}/bin)
set_target_properties(capguard-hook taskbar-guard guard PROPERTIES
  RUNTIME_OUTPUT_DIRECTORY ${OUT}
  LIBRARY_OUTPUT_DIRECTORY ${OUT})

add_custom_command(TARGET guard POST_BUILD
  COMMAND ${CMAKE_COMMAND} -E copy_if_different
          ${CMAKE_SOURCE_DIR}/config.ini ${OUT}/config.ini)
