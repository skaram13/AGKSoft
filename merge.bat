@echo off

if "%1"=="" goto invalid

rem Should show me what I changed.
git status
pause

rem Now it turns Green and ready
git add .
pause

git commit -m "%1 %2 %3 %4 %5 %6 %7 %8 %9"
pause 

rem 			Pushes it on inet
git push

echo all done
goto done

:invalid
cls
echo Invalid Merge Format...
echo      Merge "your changes"
echo.

:done
