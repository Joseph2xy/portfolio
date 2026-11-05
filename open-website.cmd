@echo off
cd /d "%~dp0"
if errorlevel 1 exit /b 1
call npm run dev -- --open
pause
