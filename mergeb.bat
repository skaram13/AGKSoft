@ECHO OFF
cls
echo Ex: merge LeftPath RightPath
echo.
rem c:\merge\WinMergeU /xq /s /f "%1" %2 %3 %4 %5 %6
c:\merge\WinMergeU.exe /e /u /f "*.bat" "%1" "%2"