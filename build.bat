@echo off

rem This must run from the F:\website\agksoft\front-end folder using a Command Prompt

echo Creating ReBuild Log on c:\temp\rebuild.log
echo %DATE% >c:\temp\rebuild.log

cd front-end 
call npm.cmd run -script build
cd build
echo.
echo Finished Building Static Web-Site...
echo.
echo Copying Part 1 to w:
copy *.* w: /Y >>c:\temp\rebuild.log

cd static

echo Copying Part 2 to w: (static CSS)
cd css
copy *.* w:\static\css /Y >>c:\temp\rebuild.log
cd..

echo Copying Part 3 to w: (static JS)
cd js
copy *.* w:\static\js /Y >>c:\temp\rebuild.log
cd..

echo Copying Part 4 to w: (static MEDIA)
cd media
copy *.* w:\static\media /Y >>c:\temp\rebuild.log
cd..

echo Back to static folder...
cd..

echo Back to build folder...
cd..

cd..

C:

np c:\temp\rebuild.log