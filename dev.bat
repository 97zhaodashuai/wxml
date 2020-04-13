@echo off
call nodemon  compile.js
copy  ".\src\wxml.js" ".\dist\script\wxml.js"   /y

