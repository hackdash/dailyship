---
title: Calculator in your terminal
date: 2025-08-15
---

Save the [calculator source code](/demo/calc/calc.js). And start a NodeJS REPL:
```
node --require ./calc.js
```
Your path may end up different, but your folder structure is obviously up to you. `~/scripts/` would be reasonable.

The idea here is to use NodeJS as a predictable calculator. You may just use `node` and leave it at that. But to cut down on keystrokes, we can include a script with useful global properties, mainly from the Math object. There will always be a clear history of what happened in the scrollback, especially if we avoid mutating variables. You won't quite have the convenience of the last answer, e.g. `* 2`, but you can quickly retrieve previous expressions with the up arrow or store values with `const` or `let`. We can also rename things, like `Math.log()` might be more familiar as `ln()` to be clear that it is the natural logarithm and to reserve `log()` for console printing.

Trigonometry is a good use for a calculator. Here is a function to use the popular 360-degree system:
```
global.sin = Math.sin
global.sindeg = (a) => sin(tau * a / 360)
global.tau = 2 * Math.PI
```

What about floating point issues? You can of course choose to ignore them, or you may make use of `toPrecision`, which we can define as something shorter like `pr()` or `pr1()`:
```
global.pr = (d, x) => x.toPrecision(d)
global.pr1 = pr.bind(null, 1)
```
I tend to do the raw calculation first, and then adjust for significant figures (or any other desired precision) if the result turns out ugly.
```
> .1+.2
0.30000000000000004
> (.1+.2).toPrecision(1)
'0.3'
> pr(1, .1+.2)
'0.3'
> pr1(.1+.2)
'0.3'
```

# Alias approach: ~/.bashrc
To avoid having to retype the command, create an alias for it.
```
alias calc="node --require ~/scripts/calc.js"
```

# File approach
If you're curious how other commands work, they are stored in files without an extension in a directory listed in the PATH environment variable. The Free Desktop standard recommends using a hidden folder in your home directory. I had higher hopes for `/usr/bin`, but the permissions really discouraged me.

## ~/.local/bin/calc
```
node --require ~/scripts/calc.js
```
# ~/.bashrc
```
export PATH=$HOME/.local/bin:$PATH
```
