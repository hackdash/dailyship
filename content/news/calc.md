---
title: Calculator in your terminal
date: 2025-08-15
updated: 2025-10-12
---

Save the [calculator source code](/demo/calc/calc.js).
And start a NodeJS REPL:
```
node --require ./calc.js
```
# Shortcut
To avoid having to retype the command, create an alias for it in your POSIX terminal profile.
Use a full path so that the command works from any working directory.
## ~/.bashrc
```
alias calc="node --require ~/scripts/calc.js"
```
# Rationale
The idea here is to use NodeJS as a predictable calculator.
You may just use `node` and leave it at that.
But to cut down on keystrokes, we can include a script with useful global properties, such as `Math` functions or conversion factors.
There will always be a clear history of what happened in the scrollback, especially if we avoid mutating variables.
You won't quite have the convenience of the last answer, e.g.
`* 2`, but you can quickly retrieve previous expressions with the up arrow or store values with `const` or `let`.
We can also rename things, e.g.
`Math.log()` might be more familiar as `ln()` to be clear that it is the natural logarithm and to reserve `log()` for console printing.

To inspect your global values at runtime, you may enter `global` or `help`.
To just see names, tab-tab.

# Uses

Trigonometry is a good use for a calculator.
Here is a function to use the popular 360-degree system:
```
global.sin = Math.sin
global.sindeg = (a) => sin(tau * a / 360)
global.tau = 2 * Math.PI
```

What about floating point issues? You can of course choose to ignore them, or you may make use of `toPrecision`, which we can define as something shorter like `pr()` or `pr1()`.
In fact, we might as well define 16 at once.
```
global.pf = Number.parseFloat // string to number
global.pr = (d, x) => x.toPrecision(d)
global.pr1 = pr.bind(null, 1)
Array(16).fill().forEach((_,i) =>
  global[`pr${i+1}`] = pr.bind(null, i+1)
)
global.sci = x => x.toExponential() // scientific notation
```
I tend to do the raw calculation first, and then adjust for significant figures (or any other desired precision) if the result turns out ugly.
Furthermore, we may render a number in scientific notation with `sci()` or convert a string back to a number with `pf()`.
```
> .1+.2
0.30000000000000004
> (.1+.2).toPrecision(1)
'0.3'
> pr(1, .1+.2)
'0.3'
> pr1(.1+.2)
'0.3'
> sci(pr1(.1+.2))
'3e-1'
> pf(pr1(.1+.2))
0.3
```

Convert temperatures between Fahrenheit and Celsius with a precision of 3:
```
global.fc = (x) => (x - 32) * 5/9
global.fc3 = (x) => pr3(fc(x))
```
```
> fc(70.5)
21.38888888888889
> fc3(70.5)
'21.4'
```
# Unit conversion
Factors are stored for unit conversion, especially from [U.S. units](https://en.wikipedia.org/wiki/United_States_customary_units) to metric, however you can go in reverse.
[GNU Units](https://www.gnu.org/software/units/manual/units.html) also helps to double check.
The environment variable ensures that US units are used instead of the GB imperial counterparts. Be aware that many units of volume are converted to liters `l` or milliliters `ml`,  but a liter is only `1e-3 m**3`. Due to the lossy nature floating point numbers, I've chosen to focus on values closer to zero when possible to retain precision.
```
UNITS_ENGLISH=US units floz ml --verbose
```
Since multiplication is one character, `*`, it is easier to use than function calls, since you don't have to type parentheses.
Division might be apropos for dimensional analysis, but I am biased toward multiplication and putting numbers next to their units.
I have provided some shorter forms for frequent typing and longer forms that make it more clear what values represent.
```
global.lfloz = global.floz_per_l = 33.814023
> 2*lfloz
67.628046
> 2 * floz_per_l
67.628046
> 2 / l_per_floz
67.628046
> pr3(2 * floz_per_l)
'67.6'

> (67.5 * l_per_floz)
1.9962132278670301
> (67.5 / floz_per_l)
1.9962132278670304
> pr3(67.5 * flozl)
'2.00'
> pf(pr3(67.5 * flozl))
2
```

# File approach
If you're curious how other commands work, they are stored in files without an extension in a directory listed in the PATH environment variable.
The Free Desktop standard recommends using a hidden folder in your home directory.
## ~/.local/bin/calc
```
node --require ~/scripts/calc.js
```
## ~/.bashrc
```
export PATH=$HOME/.local/bin:$PATH
```

# Alternatives
- [PARI GP](https://pari.math.u-bordeaux.fr/) interactive shell: factorization, algebraic numbers and theory, elliptic curves, modular forms, L functions, matrices, polynomials, power series, transcendentals, numerical summation, and integration.
  - This has line numbers, and you can reuse results with `%`.
- [Python](https://www.python.org/downloads/) interactive shell:
  - [math](https://docs.python.org/3/library/math.html)
  - [Numeric types: int, float, complex](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex)
  - [Standard library](https://docs.python.org/3/library)
  - [NumPy](https://numpy.org/doc/stable) for scientific computing with multidimensional arrays and operations for Fourier transforms, input/output, linear algebra, logic, maths, shaping, sorting, selection, random simulation, and statistics.
  - Import any other Python package.
  - *Note that indentation and upfront looops are not ideal for terminal sessions.*
- [Jupyter Notebook](https://jupyter-notebook.readthedocs.io/) & [SageMath](https://www.sagemath.org/)
  - Another Python-based option with web interface and folder structure to save and organize every input you ever made.
  - There are different ways of installing Jupyter Notebook, but I found a container bundled with SageMath, which provides yet another option.
  (You get a choice of Python or Sagemath for each notebook file.)
  - [SageMath containers repo](https://github.com/sagemath/docker-images)
    - Note that containers are harder to run than normal programs, but Podman works well if you don't use Docker.
    - [Pods](https://flathub.org/en/apps/com.github.marhkb.Pods) graphical Podman app.
    - [Podman](https://docs.podman.io/en/latest/) container tool.
    - Download the image:
    - `podman pull docker.io/sagemath/sagemath`
    - Instantiate a container as local web server:
    `podman run --name=sagemathone -p 127.0.0.1:8888:8888 sagemath/sagemath sage -notebook=jupyter --no-browser --ip='*' --port=8888`
    - Start container:
    - `alias sage="podman start --filter name=sagemathone"`
    - Retrieve the login token URL from the log in Pods and bookmark it in your web browser.
