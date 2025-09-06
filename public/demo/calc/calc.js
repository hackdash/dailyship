// node --require ~/scripts/calc.js

for(const p of [
  'E',
  'abs',
  'ceil',
  'cos',
  'floor',
  'log2',
  'log10',
  'max',
  'min',
  'random',
  'round',
  'sin',
  'tan',
]){
  global[p] = Math[p]
}
global.bin = (x) => x.toString(2)
global.clamp = (x, a, b) => max(a, min(x, b))
global.clear = console.clear
global.ln = Math.log
global.log = console.log
global.pi = Math.PI
global.pr = (d, x) => x.toPrecision(d)
global.pr1 = pr.bind(null, 1)
global.sindeg = (a) => sin(tau * a / 360)
global.tau = 2 * Math.PI
