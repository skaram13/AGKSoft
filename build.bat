@echo off
setlocal

set "REBUILD_LOG=C:\temp\rebuild.log"

if not exist "C:\temp" mkdir "C:\temp"

echo Creating ReBuild Log on %REBUILD_LOG%
echo %DATE% %TIME% >"%REBUILD_LOG%"

cd /d "%~dp0front-end" || goto FolderError

copy /Y "C:\tony\stn32\versions.json" "src\assets\JSON\versions.json" >>"%REBUILD_LOG%" 2>&1
if errorlevel 1 goto VersionCopyError

call npm.cmd run build >>"%REBUILD_LOG%" 2>&1
if errorlevel 1 goto BuildError

if not exist "build\index.html" goto BuildOutputError

cd build
echo.
echo Finished Building Static Web-Site...
echo.
echo Copying Part 1 to \\agk-web1\wwwroot
copy *.* \\agk-web1\wwwroot /Y >>"%REBUILD_LOG%" 2>&1
if errorlevel 1 goto DeployError

cd static

echo Copying Part 2 to \\agk-web1\wwwroot (static CSS)
cd css
copy *.* \\agk-web1\wwwroot\static\css /Y >>"%REBUILD_LOG%" 2>&1
if errorlevel 1 goto DeployError
cd..

echo Copying Part 3 to \\agk-web1\wwwroot (static JS)
cd js
copy *.* \\agk-web1\wwwroot\static\js /Y >>"%REBUILD_LOG%" 2>&1
if errorlevel 1 goto DeployError
cd..

echo Copying Part 4 to \\agk-web1\wwwroot (static MEDIA)
cd media
copy *.* \\agk-web1\wwwroot\static\media /Y >>"%REBUILD_LOG%" 2>&1
if errorlevel 1 goto DeployError
cd..

echo Back to static folder...
cd..

echo Back to build folder...
cd..

cd..

echo Website build and deployment completed successfully. >>"%REBUILD_LOG%"
goto ShowLog

:FolderError
echo ERROR: Could not open the front-end folder. >>"%REBUILD_LOG%"
goto Failed

:VersionCopyError
echo ERROR: Could not copy versions.json into the front-end source. >>"%REBUILD_LOG%"
goto Failed

:BuildError
echo ERROR: The React build failed. Nothing was deployed. >>"%REBUILD_LOG%"
goto Failed

:BuildOutputError
echo ERROR: The React build did not create build\index.html. Nothing was deployed. >>"%REBUILD_LOG%"
goto Failed

:DeployError
echo ERROR: A file copy to \\agk-web1\wwwroot failed. >>"%REBUILD_LOG%"
goto Failed

:Failed
start "" np "%REBUILD_LOG%"
endlocal
exit /b 1

:ShowLog
start "" np "%REBUILD_LOG%"
endlocal
exit /b 0
