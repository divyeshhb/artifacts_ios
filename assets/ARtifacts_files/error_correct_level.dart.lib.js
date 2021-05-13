define(['dart_sdk'], (function load__packages__qr__src__error_correct_level_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var error_correct_level = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  const CT = Object.create(null);
  var L0 = "package:qr/src/error_correct_level.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([1, 0, 3, 2], intL());
    }
  }, false);
  var C0;
  error_correct_level.QrErrorCorrectLevel = class QrErrorCorrectLevel extends core.Object {
    static getName(level) {
      switch (level) {
        case 1:
        {
          return "Low";
        }
        case 0:
        {
          return "Medium";
        }
        case 3:
        {
          return "Quality";
        }
        case 2:
        {
          return "High";
        }
        default:
        {
          dart.throw(new core.ArgumentError.new("level " + dart.str(level) + " not supported"));
        }
      }
    }
  };
  (error_correct_level.QrErrorCorrectLevel.new = function() {
    ;
  }).prototype = error_correct_level.QrErrorCorrectLevel.prototype;
  dart.addTypeTests(error_correct_level.QrErrorCorrectLevel);
  dart.addTypeCaches(error_correct_level.QrErrorCorrectLevel);
  dart.setLibraryUri(error_correct_level.QrErrorCorrectLevel, L0);
  dart.defineLazy(error_correct_level.QrErrorCorrectLevel, {
    /*error_correct_level.QrErrorCorrectLevel.L*/get L() {
      return 1;
    },
    /*error_correct_level.QrErrorCorrectLevel.M*/get M() {
      return 0;
    },
    /*error_correct_level.QrErrorCorrectLevel.Q*/get Q() {
      return 3;
    },
    /*error_correct_level.QrErrorCorrectLevel.H*/get H() {
      return 2;
    },
    /*error_correct_level.QrErrorCorrectLevel.levels*/get levels() {
      return C0 || CT.C0;
    }
  }, true);
  dart.trackLibraries("packages/qr/src/error_correct_level.dart", {
    "package:qr/src/error_correct_level.dart": error_correct_level
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["error_correct_level.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;mBAW4B;AACxB,cAAQ,KAAK;;;AAET,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAE0C,UAAjD,WAAM,2BAAc,AAA4B,oBAApB,KAAK;;;IAEvC;;;;EACF;;;;;MAxBmB,yCAAC;;;MACD,yCAAC;;;MACD,yCAAC;;;MACD,yCAAC;;;MAKK,8CAAM","file":"../../../../../../../../../../../packages/qr/src/error_correct_level.dart.lib.js"}');
  // Exports:
  return {
    src__error_correct_level: error_correct_level
  };
}));

//# sourceMappingURL=error_correct_level.dart.lib.js.map
