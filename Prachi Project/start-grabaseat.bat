@echo off
REM GrabASeat Movie Booking System - Start Script
echo ================================================
echo  🎬 GrabASeat Movie Booking System
echo  🚀 Starting Development Server
echo ================================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js detected
echo 🔧 Installing dependencies...

REM Install dependencies
npm install

if %ERRORLEVEL% EQU 0 (
    echo ✅ Dependencies installed successfully!
    echo.
    echo 🚀 Starting GrabASeat development server...
    echo 🌐 The application will be available at: http://localhost:5173
    echo 📱 Open your browser and navigate to the URL above
    echo ⏹️  Press Ctrl+C to stop the server
    echo.

    REM Start the development server
    npm run dev
) else (
    echo ❌ Failed to install dependencies!
    echo Please check the error messages above and try again.
    pause
) 