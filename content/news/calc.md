---
title: Calculator in your terminal
date: 2025-08-15
---

Save the [calculator source code](/demo/calc/calc.js).

The idea here is to use NodeJS as a predictable calculator. You may just use `node` and leave it at that. But to cut down on keystrokes, we can globalize useful properties of the Math object and anything else desired. There will always be a clear history of what happened in the scrollback, especially if we avoid mutating variables. You won't quite have the convenience of the last answer, e.g. `* 2`, but you can quickly retrieve previous expressions with the up arrow or store values with `const` or `let`.

Trigonometry is a good use for a calculator. Here we've created a convenience function to use the popular 360-degree system:
```
global.sin = Math.sin
global.sindeg = (a) => sin(tau * a / 360)
global.tau = 2 * Math.PI
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
