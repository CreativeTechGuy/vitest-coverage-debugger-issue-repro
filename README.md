Reproduction for: https://github.com/vitest-dev/vitest/issues/5380

Steps:

* Open project in VS Code
* Run `npm ci`
* Open a new "JavaScript Debug Terminal" in VS Code
* Set breakpoints in `index.ts` on lines 8
* In the debug terminal run `npm run test`
    * It should break on line 8, but if you look at the variables in the debugger, `matches` hasn't been defined yet despite it should have.
    * If you "Step Over" a few times in the debugger, you'll see that it's actually stepping over the first few lines of the function (based on the changes to the variables being set in the debugger)
    * If you disconnect the debugger, the vitest terminal process stalls and never completes and you'll have to kill it, if instead you hit "Continue" in the debugger, it'll run to the end (when it crashes on line 10 for reading `.get` of undefined)
        * Note that the terminal will point to line 14 as the source of the error?

Note:

* A surprising amount of seemingly irrelevant things in this code are relevant. For example, simply removing line 5 (the comment) will result in the breakpoint (now on line 7) never getting hit
* I don't think that the fact that this code has a ton of runtime errors is relevant. But given the point above, it's too hard to simplify it much further without changing the behavior in unexpected ways.
* The problem only occurs if the file is `.ts`, if you rename the exact same source file to `.js` it'll work. So somehow TS is relevant.

Environment:

* Node: 20.7.0
* Npm: 10.1.0
* OS: Windows 10
* VS Code's internal TS version: 5.3.2
* VS Code Versions:
    Version: 1.87.2 (user setup)
    Commit: 863d2581ecda6849923a2118d93a088b0745d9d6
    Date: 2024-03-08T15:20:17.278Z
    Electron: 27.3.2
    ElectronBuildId: 26836302
    Chromium: 118.0.5993.159
    Node.js: 18.17.1
    V8: 11.8.172.18-electron.0
    OS: Windows_NT x64 10.0.19045