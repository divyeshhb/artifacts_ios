define(['dart_sdk', 'packages/flutter/src/physics/tolerance.dart', 'packages/flutter/src/physics/simulation.dart'], (function load__packages__flutter__src__physics__friction_simulation_dart(dart_sdk, packages__flutter__src__physics__tolerance$46dart, packages__flutter__src__physics__simulation$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const tolerance = packages__flutter__src__physics__tolerance$46dart.src__physics__tolerance;
  const simulation = packages__flutter__src__physics__simulation$46dart.src__physics__simulation;
  var friction_simulation = Object.create(dart.library);
  var $sign = dartx.sign;
  var $abs = dartx.abs;
  var $clamp = dartx.clamp;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/physics/friction_simulation.dart";
  var L1 = "package:flutter/src/physics/friction_simulation.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: tolerance.Tolerance.prototype,
        [Tolerance_velocity]: 0.001,
        [Tolerance_time]: 0.001,
        [Tolerance_distance]: 0.001
      });
    }
  }, false);
  var Tolerance_velocity = dart.privateName(tolerance, "Tolerance.velocity");
  var Tolerance_time = dart.privateName(tolerance, "Tolerance.time");
  var Tolerance_distance = dart.privateName(tolerance, "Tolerance.distance");
  var C0;
  var _drag = dart.privateName(friction_simulation, "_drag");
  var _dragLog = dart.privateName(friction_simulation, "_dragLog");
  var _x = dart.privateName(friction_simulation, "_x");
  var _v = dart.privateName(friction_simulation, "_v");
  friction_simulation.FrictionSimulation = class FrictionSimulation extends simulation.Simulation {
    static through(startPosition, endPosition, startVelocity, endVelocity) {
      if (startPosition == null) dart.nullFailed(L0, 43, 45, "startPosition");
      if (endPosition == null) dart.nullFailed(L0, 43, 67, "endPosition");
      if (startVelocity == null) dart.nullFailed(L0, 43, 87, "startVelocity");
      if (endVelocity == null) dart.nullFailed(L0, 43, 109, "endVelocity");
      if (!(startVelocity === 0.0 || endVelocity === 0.0 || startVelocity[$sign] === endVelocity[$sign])) dart.assertFailed(null, L0, 44, 12, "startVelocity == 0.0 || endVelocity == 0.0 || startVelocity.sign == endVelocity.sign");
      if (!(startVelocity[$abs]() >= endVelocity[$abs]())) dart.assertFailed(null, L0, 45, 12, "startVelocity.abs() >= endVelocity.abs()");
      if (!((dart.notNull(endPosition) - dart.notNull(startPosition))[$sign] === startVelocity[$sign])) dart.assertFailed(null, L0, 46, 12, "(endPosition - startPosition).sign == startVelocity.sign");
      return new friction_simulation.FrictionSimulation.new(friction_simulation.FrictionSimulation._dragFor(startPosition, endPosition, startVelocity, endVelocity), startPosition, startVelocity, {tolerance: new tolerance.Tolerance.new({velocity: endVelocity[$abs]()})});
    }
    static _dragFor(startPosition, endPosition, startVelocity, endVelocity) {
      if (startPosition == null) dart.nullFailed(L0, 67, 33, "startPosition");
      if (endPosition == null) dart.nullFailed(L0, 67, 55, "endPosition");
      if (startVelocity == null) dart.nullFailed(L0, 67, 75, "startVelocity");
      if (endVelocity == null) dart.nullFailed(L0, 67, 97, "endVelocity");
      return math.pow(2.718281828459045, (dart.notNull(startVelocity) - dart.notNull(endVelocity)) / (dart.notNull(startPosition) - dart.notNull(endPosition)));
    }
    x(time) {
      if (time == null) dart.nullFailed(L0, 72, 19, "time");
      return dart.notNull(this[_x]) + dart.notNull(this[_v]) * math.pow(this[_drag], time) / dart.notNull(this[_dragLog]) - dart.notNull(this[_v]) / dart.notNull(this[_dragLog]);
    }
    dx(time) {
      if (time == null) dart.nullFailed(L0, 75, 20, "time");
      return dart.notNull(this[_v]) * math.pow(this[_drag], time);
    }
    get finalX() {
      return dart.notNull(this[_x]) - dart.notNull(this[_v]) / dart.notNull(this[_dragLog]);
    }
    timeAtX(x) {
      if (x == null) dart.nullFailed(L0, 83, 25, "x");
      if (x == this[_x]) return 0.0;
      if (this[_v] === 0.0 || (dart.notNull(this[_v]) > 0 ? dart.notNull(x) < dart.notNull(this[_x]) || dart.notNull(x) > dart.notNull(this.finalX) : dart.notNull(x) > dart.notNull(this[_x]) || dart.notNull(x) < dart.notNull(this.finalX))) return 1 / 0;
      return math.log(dart.notNull(this[_dragLog]) * (dart.notNull(x) - dart.notNull(this[_x])) / dart.notNull(this[_v]) + 1.0) / dart.notNull(this[_dragLog]);
    }
    isDone(time) {
      if (time == null) dart.nullFailed(L0, 92, 22, "time");
      return this.dx(time)[$abs]() < dart.notNull(this.tolerance.velocity);
    }
  };
  (friction_simulation.FrictionSimulation.new = function(drag, position, velocity, opts) {
    if (drag == null) dart.nullFailed(L0, 22, 12, "drag");
    if (position == null) dart.nullFailed(L0, 23, 12, "position");
    if (velocity == null) dart.nullFailed(L0, 24, 12, "velocity");
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : C0 || CT.C0;
    if (tolerance == null) dart.nullFailed(L0, 25, 15, "tolerance");
    this[_drag] = drag;
    this[_dragLog] = math.log(drag);
    this[_x] = position;
    this[_v] = velocity;
    friction_simulation.FrictionSimulation.__proto__.new.call(this, {tolerance: tolerance});
    ;
  }).prototype = friction_simulation.FrictionSimulation.prototype;
  dart.addTypeTests(friction_simulation.FrictionSimulation);
  dart.addTypeCaches(friction_simulation.FrictionSimulation);
  dart.setMethodSignature(friction_simulation.FrictionSimulation, () => ({
    __proto__: dart.getMethods(friction_simulation.FrictionSimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    timeAtX: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setGetterSignature(friction_simulation.FrictionSimulation, () => ({
    __proto__: dart.getGetters(friction_simulation.FrictionSimulation.__proto__),
    finalX: core.double
  }));
  dart.setLibraryUri(friction_simulation.FrictionSimulation, L1);
  dart.setFieldSignature(friction_simulation.FrictionSimulation, () => ({
    __proto__: dart.getFields(friction_simulation.FrictionSimulation.__proto__),
    [_drag]: dart.finalFieldType(core.double),
    [_dragLog]: dart.finalFieldType(core.double),
    [_x]: dart.finalFieldType(core.double),
    [_v]: dart.finalFieldType(core.double)
  }));
  var _minX$ = dart.privateName(friction_simulation, "_minX");
  var _maxX$ = dart.privateName(friction_simulation, "_maxX");
  friction_simulation.BoundedFrictionSimulation = class BoundedFrictionSimulation extends friction_simulation.FrictionSimulation {
    x(time) {
      if (time == null) dart.nullFailed(L0, 118, 19, "time");
      return super.x(time)[$clamp](this[_minX$], this[_maxX$]);
    }
    isDone(time) {
      if (time == null) dart.nullFailed(L0, 123, 22, "time");
      return dart.test(super.isDone(time)) || (dart.notNull(this.x(time)) - dart.notNull(this[_minX$]))[$abs]() < dart.notNull(this.tolerance.distance) || (dart.notNull(this.x(time)) - dart.notNull(this[_maxX$]))[$abs]() < dart.notNull(this.tolerance.distance);
    }
  };
  (friction_simulation.BoundedFrictionSimulation.new = function(drag, position, velocity, _minX, _maxX) {
    if (drag == null) dart.nullFailed(L0, 106, 12, "drag");
    if (position == null) dart.nullFailed(L0, 107, 12, "position");
    if (velocity == null) dart.nullFailed(L0, 108, 12, "velocity");
    if (_minX == null) dart.nullFailed(L0, 109, 10, "_minX");
    if (_maxX == null) dart.nullFailed(L0, 110, 10, "_maxX");
    this[_minX$] = _minX;
    this[_maxX$] = _maxX;
    if (!(position[$clamp](_minX, _maxX) === position)) dart.assertFailed(null, L0, 111, 14, "position.clamp(_minX, _maxX) == position");
    friction_simulation.BoundedFrictionSimulation.__proto__.new.call(this, drag, position, velocity);
    ;
  }).prototype = friction_simulation.BoundedFrictionSimulation.prototype;
  dart.addTypeTests(friction_simulation.BoundedFrictionSimulation);
  dart.addTypeCaches(friction_simulation.BoundedFrictionSimulation);
  dart.setLibraryUri(friction_simulation.BoundedFrictionSimulation, L1);
  dart.setFieldSignature(friction_simulation.BoundedFrictionSimulation, () => ({
    __proto__: dart.getFields(friction_simulation.BoundedFrictionSimulation.__proto__),
    [_minX$]: dart.finalFieldType(core.double),
    [_maxX$]: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/flutter/src/physics/friction_simulation.dart", {
    "package:flutter/src/physics/friction_simulation.dart": friction_simulation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["friction_simulation.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mBA0C4C,eAAsB,aAAoB,eAAsB;UAAhE;UAAsB;UAAoB;UAAsB;AACxG,YAAO,AAAc,AAA6B,aAA9B,KAAI,OAAO,AAAY,WAAD,KAAI,OAAO,AAAc,AAAK,aAAN,YAAS,AAAY,WAAD;AACtF,YAAO,AAAc,AAAM,aAAP,YAAU,AAAY,WAAD;AACzC,YAAqC,AAAK,CAAtB,aAAZ,WAAW,iBAAG,aAAa,cAAU,AAAc,aAAD;AAC1D,YAAO,gDACL,gDAAS,aAAa,EAAE,WAAW,EAAE,aAAa,EAAE,WAAW,GAC/D,aAAa,EACb,aAAa,cACF,uCAAoB,AAAY,WAAD;IAE9C;oBAc8B,eAAsB,aAAoB,eAAsB;UAAhE;UAAsB;UAAoB;UAAsB;AAC5F,YAAO,6BAA+C,CAAf,aAAd,aAAa,iBAAG,WAAW,MAAmB,aAAd,aAAa,iBAAG,WAAW;IACtF;;UAGgB;AAAS,YAAG,AAAwC,cAA3C,YAAQ,AAAwB,aAA3B,YAAK,SAAS,aAAO,IAAI,iBAAI,kBAAc,aAAH,yBAAK;IAAQ;;UAGlE;AAAS,YAAG,cAAH,YAAK,SAAS,aAAO,IAAI;IAAC;;AAG/B,YAAG,cAAH,YAAQ,aAAH,yBAAK;IAAQ;;UAKjB;AACpB,UAAI,AAAE,CAAD,IAAI,UACP,MAAO;AACT,UAAI,AAAG,aAAG,QAAW,aAAH,YAAK,IAAO,AAAK,aAAP,CAAC,iBAAG,aAAQ,aAAF,CAAC,iBAAG,eAAa,AAAK,aAAP,CAAC,iBAAG,aAAQ,aAAF,CAAC,iBAAG,eACjE;AACF,YAAO,AAAyC,UAAvB,AAAW,AAAK,aAAzB,mBAAc,aAAF,CAAC,iBAAG,0BAAM,YAAK,oBAAO;IACpD;;UAGmB;AAAS,YAAA,AAAS,AAAM,SAAZ,IAAI,yBAAU,AAAU;IAAQ;;yDAtEtD,MACA,UACA;QAFA;QACA;QACA;QACG;;IACD,cAAE,IAAI;IACH,iBAAE,SAAS,IAAI;IACrB,WAAE,QAAQ;IACV,WAAE,QAAQ;AACb,gFAAiB,SAAS;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;UAwFhB;AACd,YAAa,AAAQ,SAAN,IAAI,UAAQ,cAAO;IACpC;;UAGmB;AACjB,YAC+C,WADlC,aAAO,IAAI,MACJ,AAAM,CAAf,aAAR,OAAE,IAAI,kBAAI,sCAAe,AAAU,4BAClB,AAAM,CAAf,aAAR,OAAE,IAAI,kBAAI,sCAAe,AAAU;IACxC;;gEArBS,MACA,UACA,UACF,OACA;QAJE;QACA;QACA;QACF;QACA;IADA;IACA;UACI,AAAS,AAAoB,QAArB,SAAO,KAAK,EAAE,KAAK,MAAK,QAAQ;AAC/C,2EAAM,IAAI,EAAE,QAAQ,EAAE,QAAQ;;EAAC","file":"../../../../../../../../../../packages/flutter/src/physics/friction_simulation.dart.lib.js"}');
  // Exports:
  return {
    src__physics__friction_simulation: friction_simulation
  };
}));

//# sourceMappingURL=friction_simulation.dart.lib.js.map
