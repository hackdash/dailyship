// node --require ~/scripts/calc.js
for(const p of [
  'E',
  'PI',
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
global.pr = (d, x) => x.toPrecision(d)
// pr1 through pr16
Array(16).fill().forEach((_,i) =>
  global[`pr${i+1}`] = pr.bind(null, i+1)
)

/*
https://en.wikipedia.org/wiki/United_States_customary_units
gnu units a b -v
*/
global.acre = 4046.8564224
global.atto = global.am = 1e-18
global.bbl = global.barrel = global.l_per_bbl = 119.240471196
global.bin = (x) => x.toString(2)
global.Btu = 1055
global.C = global.Celsius = 273.15
global.centi = global.cm = 1e-2
global.cf = (x) => x * 9/5 + 32
global.cf3 = (x) => pr3(cf(x))
global.ch = global.chain = 20.1168
global.ck = (x) => x + C
global.clamp = (x, a, b) => max(a, min(x, b))
global.clear = console.clear
global.cup = global.l_per_cup = .2365882365
global.deca = global.dm = 10
global.deci = global.dm = .1
global.drml = global.dramml = global.ml_per_dr = 3.6966911953125
global.exa = global.Em = 1e18
global.fathom = 1.8288
global.fc = (x) => (x - 32) * 5/9
global.fc3 = (x) => pr3(fc(x))
global.femto = global.fm = 1e-15
global.fk = (x) => fc(x) + C
global.flozml = global.ml_per_floz = 29.5735295625
global.ft = global.feet = global.foot = global.m_per_ft = 0.3048
global.ftmi = global.ft_per_mi = 5280
global.fur = global.furlong = 201.168
global.gal = global.l_per_gal = 3.785411784
global.giga = global.Gm = 1e9
global.h = global.hecto = global.hm = 1e2
global.ha = global.hectare = 1e4
global.help = global // see global values
global.hp = global.horsepower = 745.7
global.inch = global.in_per_m = 2.54e-2
global.inHg = 3386.39
global.kilo = global.km = 1e3
global.l = global.liter = 1e-3
global.lb = global.kg_per_lb = 0.45359237
global.lbft = 1.356
global.league = 4828.032
global.len = (x) => x.length ?? (x+'').length
global.lfloz = global.floz_per_l = 33.814023
global.lgal = global.l_per_gal = 3.785411784
global.li = global.link = 0.201168
global.ln = Math.log
global.log = console.log
global.logb = (b, x) => ln(x) / ln(b)
global.m = global.meter = 1
global.maxint = Number.MAX_SAFE_INTEGER
global.maxval = Number.MAX_VALUE
global.mega = global.Mm = 1e6
global.mi = global.m_per_mi = 1609.344
global.micro = global.cc = global.cucm = global.mum = 1e-6
global.milli = global.mm = 1e-3
global.minint = Number.MIN_SAFE_INTEGER
global.minval = Number.MIN_VALUE
global.nano = global.nm = 1e-9
global.nmi = 1852
global.peta = global.Pm = 1e15
global.pf = Number.parseFloat // string to number
global.pi = Math.PI
global.pico = global.pm = 1e-12
global.psi = 6895
global.pt = global.l_per_pt = 0.473176473
global.qt = global.l_per_qt = 0.946352946
global.rd = global.rod = 5.0292
global.sci = (x) => pf(x).toExponential() // scientific notation
global.sindeg = (a) => sin(tau * a / 360)
global.sqcm = 1e-4
global.tau = 2 * Math.PI
global.tbspml = global.ml_per_tbsp = 14.78676478125
global.tera = global.Tm = 1e12
global.ton = 907.18474
global.tonne = 1016.0469088
global.tspml = global.ml_per_tsp = 4.92892159375
global.yd = global.yard = global.m_per_yd = 0.9144
global.ydmi = global.yd_per_mi = 1760
global.U = global.rack = .04445

// unit conversions
global.bu  = global.bushel = gal * 8
global.cable = 120 * fathom
global.cmft = cm / ft
global.cmin = cm / inch
global.cuft = ft**3
global.cuin = inch**3
global.cuyd = yd**3
global.dr = global.dram = global.ml_per_dr = drml*kilo
global.flozl = global.l_per_floz = 1 / lfloz
global.ftcm = global.cm_per_ft = ft / cm
global.gr = global.grain = lb / 7e3
global.hand = 4 * inch
global.incm = global.cm_per_in = inch / cm
global.inmm = global.mm_per_in = inch / mm
global.kglb = global.lb_per_kg = 1 / lb
global.mft = global.ft_per_m = 1 / ft
global.mlfloz = 1 / flozml
global.oz = global.kg_per_oz = lb / 16
global.ozt = 3.11034768e-2
global.pk  = global.peck = gal * 2
global.point = inch / 72
global.sqft = ft**2
global.sqin = inch**2
global.sqmi = mi**2
global.sqyd = yd**2
global.tbsp = global.l_per_tbsp = tbspml*kilo
global.tsp = global.l_per_tsp = tspml*kilo
