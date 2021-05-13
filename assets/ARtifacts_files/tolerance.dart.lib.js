define(['dart_sdk'], (function load__packages__flutter__src__physics__tolerance_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var tolerance = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L1 = "package:flutter/src/physics/tolerance.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/physics/tolerance.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: tolerance.Tolerance.prototype,
        [velocity$]: 0.001,
        [time$]: 0.001,
        [distance$]: 0.001
      });
    }
  }, false);
  var distance$ = dart.privateName(tolerance, "Tolerance.distance");
  var time$ = dart.privateName(tolerance, "Tolerance.time");
  var velocity$ = dart.privateName(tolerance, "Tolerance.velocity");
  var C0;
  tolerance.Tolerance = class Tolerance extends core.Object {
    get distance() {
      return this[distance$];
    }
    set distance(value) {
      super.distance = value;
    }
    get time() {
      return this[time$];
    }
    set time(value) {
      super.time = value;
    }
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
    toString() {
      return "Tolerance(distance: ±" + dart.str(this.distance) + ", time: ±" + dart.str(this.time) + ", velocity: ±" + dart.str(this.velocity) + ")";
    }
  };
  (tolerance.Tolerance.new = function(opts) {
    let distance = opts && 'distance' in opts ? opts.distance : 0.001;
    if (distance == null) dart.nullFailed(L0, 13, 10, "distance");
    let time = opts && 'time' in opts ? opts.time : 0.001;
    if (time == null) dart.nullFailed(L0, 14, 10, "time");
    let velocity = opts && 'velocity' in opts ? opts.velocity : 0.001;
    if (velocity == null) dart.nullFailed(L0, 15, 10, "velocity");
    this[distance$] = distance;
    this[time$] = time;
    this[velocity$] = velocity;
    ;
  }).prototype = tolerance.Tolerance.prototype;
  dart.addTypeTests(tolerance.Tolerance);
  dart.addTypeCaches(tolerance.Tolerance);
  dart.setLibraryUri(tolerance.Tolerance, L1);
  dart.setFieldSignature(tolerance.Tolerance, () => ({
    __proto__: dart.getFields(tolerance.Tolerance.__proto__),
    distance: dart.finalFieldType(core.double),
    time: dart.finalFieldType(core.double),
    velocity: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(tolerance.Tolerance, ['toString']);
  dart.defineLazy(tolerance.Tolerance, {
    /*tolerance.Tolerance._epsilonDefault*/get _epsilonDefault() {
      return 0.001;
    },
    /*tolerance.Tolerance.defaultTolerance*/get defaultTolerance() {
      return C0 || CT.C0;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/physics/tolerance.dart", {
    "package:flutter/src/physics/tolerance.dart": tolerance
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tolerance.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;IA2Be;;;;;;IAOA;;;;;;IAOA;;;;;;;AAGQ,YAAA,AAAqE,oCAA9C,iBAAQ,uBAAU,aAAI,2BAAc,iBAAQ;IAAE;;;QAhCnF;;QACA;;QACA;;IAFA;IACA;IACA;;EACL;;;;;;;;;;;;MAEkB,mCAAe;;;MAGZ,oCAAgB","file":"../../../../../../../../../../packages/flutter/src/physics/tolerance.dart.lib.js"}');
  // Exports:
  return {
    src__physics__tolerance: tolerance
  };
}));

//# sourceMappingURL=tolerance.dart.lib.js.map
