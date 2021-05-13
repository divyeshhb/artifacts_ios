define(['dart_sdk'], (function load__packages__collection__src__utils_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var utils = Object.create(dart.library);
  var $compareTo = dartx.compareTo;
  dart._checkModuleNullSafetyMode(false);
  var ObjectN = () => (ObjectN = dart.constFn(dart.nullable(core.Object)))();
  var ComparableOfObjectN = () => (ComparableOfObjectN = dart.constFn(core.Comparable$(ObjectN())))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/collection-1.15.0-nullsafety.5/lib/src/utils.dart";
  utils.defaultCompare = function defaultCompare(value1, value2) {
    return ComparableOfObjectN().as(value1)[$compareTo](value2);
  };
  utils.identity = function identity(T, value) {
    return value;
  };
  utils.compareComparable = function compareComparable(T, a, b) {
    if (a == null) dart.nullFailed(L0, 20, 50, "a");
    if (b == null) dart.nullFailed(L0, 20, 55, "b");
    return a[$compareTo](b);
  };
  dart.trackLibraries("packages/collection/src/utils.dart", {
    "package:collection/src/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;;iDAY2B,QAAgB;AACvC,UAAQ,AAAwB,0BAA/B,MAAM,cAAmC,MAAM;EAAC;wCAGrC;AAAU,gBAAK;;0DAGkB,GAAK;QAAL;QAAK;AAAM,UAAA,AAAE,EAAD,aAAW,CAAC;EAAC","file":"../../../../../../../../../../../packages/collection/src/utils.dart.lib.js"}');
  // Exports:
  return {
    src__utils: utils
  };
}));

//# sourceMappingURL=utils.dart.lib.js.map
