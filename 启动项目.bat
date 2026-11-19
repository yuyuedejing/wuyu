@echo off
REM Name: Wu Yu | ID: 24001010921 | Date: 2026-11-19 | Model: Tencent Hunyuan Hy
chcp 65001 >nul
title WuYu Fullstack Portal - Backend 8325
echo ============================================
echo   Tech News Portal  /  Backend starting...
echo   Open browser: http://localhost:8325
echo ============================================
cd /d %~dp0\backend
node app.js
pause
