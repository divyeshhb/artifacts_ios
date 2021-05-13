define(['dart_sdk', 'packages/flutter/src/physics/tolerance.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__physics__simulation_dart(dart_sdk, packages__flutter__src__physics__tolerance$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const tolerance = packages__flutter__src__physics__tolerance$46dart.src__physics__tolerance;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var simulation = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/physics/simulation.dart";
  var L1 = "package:flutter/src/physics/simulation.dart";
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
  var tolerance$ = dart.privateName(simulation, "Simulation.tolerance");
  simulation.Simulation = class Simulation extends core.Object {
    get tolerance() {
      return this[tolerance$];
    }
    set tolerance(value) {
      this[tolerance$] = value;
    }
    toString() {
      return object.objectRuntimeType(this, "Simulation");
    }
  };
  (simulation.Simulation.new = function(opts) {
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : C0 || CT.C0;
    if (tolerance == null) dart.nullFailed(L0, 36, 21, "tolerance");
    this[tolerance$] = tolerance;
    ;
  }).prototype = simulation.Simulation.prototype;
  dart.addTypeTests(simulation.Simulation);
  dart.addTypeCaches(simulation.Simulation);
  dart.setLibraryUri(simulation.Simulation, L1);
  dart.setFieldSignature(simulation.Simulation, () => ({
    __proto__: dart.getFields(simulation.Simulation.__proto__),
    tolerance: dart.fieldType(tolerance.Tolerance)
  }));
  dart.defineExtensionMethods(simulation.Simulation, ['toString']);
  dart.trackLibraries("packages/flutter/src/physics/simulation.dart", {
    "package:flutter/src/physics/simulation.dart": simulation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["simulation.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqDY;;;;;;;AAGW,sCAAkB,MAAM;IAAa;;;QArBxC;;;;EAAyC","file":"../../../../../../../../../../packages/flutter/src/physics/simulation.dart.lib.js"}');
  // Exports:
  return {
    src__physics__simulation: simulation
  };
}));

//# sourceMappingURL=simulation.dart.lib.js.map
