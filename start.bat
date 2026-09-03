@echo off
echo Starting Naatile Malayalam App...
start http://localhost:3000/
powershell -ExecutionPolicy Bypass -Command "npm run dev"
