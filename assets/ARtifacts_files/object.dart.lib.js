define(['dart_sdk'], (function load__packages__flutter__src__foundation__object_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var object = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(false);
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/foundation/object.dart";
  object.objectRuntimeType = function objectRuntimeType(object, optimizedValue) {
    if (optimizedValue == null) dart.nullFailed(L0, 12, 49, "optimizedValue");
    if (!dart.test(dart.fn(() => {
      optimizedValue = dart.toString(dart.runtimeType(object));
      return true;
    }, VoidTobool())())) dart.assertFailed(null, L0, 13, 10, "() {\n    optimizedValue = object.runtimeType.toString();\n    return true;\n  }()");
    return optimizedValue;
  };
  dart.trackLibraries("packages/flutter/src/foundation/object.dart", {
    "package:flutter/src/foundation/object.dart": object
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["object.dart"],"names":[],"mappings":";;;;;;;;;;;wDAWiC;QAAe;AAC9C,mBAAO,AAGN;AAF+C,MAA9C,iBAAoC,cAAZ,iBAAP,MAAM;AACvB,YAAO;;AAET,UAAO,eAAc;EACvB","file":"../../../../../../../../../../packages/flutter/src/foundation/object.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__object: object
  };
}));

//# sourceMappingURL=object.dart.lib.js.map
