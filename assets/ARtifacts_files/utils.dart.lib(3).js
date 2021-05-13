define(['dart_sdk'], (function load__packages__flutter__src__physics__utils_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var utils = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/physics/utils.dart";
  utils.nearEqual = function nearEqual(a, b, epsilon) {
    if (epsilon == null) dart.nullFailed(L0, 10, 45, "epsilon");
    if (!(epsilon != null)) dart.assertFailed(null, L0, 11, 10, "epsilon != null");
    if (!(dart.notNull(epsilon) >= 0.0)) dart.assertFailed(null, L0, 12, 10, "epsilon >= 0.0");
    if (a == null || b == null) return a == b;
    return dart.notNull(a) > dart.notNull(b) - dart.notNull(epsilon) && dart.notNull(a) < dart.notNull(b) + dart.notNull(epsilon) || a == b;
  };
  utils.nearZero = function nearZero(a, epsilon) {
    if (a == null) dart.nullFailed(L0, 21, 22, "a");
    if (epsilon == null) dart.nullFailed(L0, 21, 32, "epsilon");
    return utils.nearEqual(a, 0.0, epsilon);
  };
  dart.trackLibraries("packages/flutter/src/physics/utils.dart", {
    "package:flutter/src/physics/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;uCASuB,GAAW;QAAU;AAC1C,UAAO,AAAQ,OAAD,IAAI;AAClB,UAAe,aAAR,OAAO,KAAI;AAClB,QAAI,AAAE,CAAD,IAAI,QAAQ,AAAE,CAAD,IAAI,MACpB,MAAO,AAAE,EAAD,IAAI,CAAC;AACf,UAAU,AAAwC,cAA1C,CAAC,IAAM,aAAF,CAAC,iBAAG,OAAO,KAAS,aAAF,CAAC,IAAM,aAAF,CAAC,iBAAG,OAAO,KAAM,AAAE,CAAD,IAAI,CAAC;EAC7D;qCAKqB,GAAU;QAAV;QAAU;AAAY,2BAAU,CAAC,EAAE,KAAK,OAAO;EAAC","file":"../../../../../../../../../../packages/flutter/src/physics/utils.dart.lib.js"}');
  // Exports:
  return {
    src__physics__utils: utils
  };
}));

//# sourceMappingURL=utils.dart.lib.js.map
