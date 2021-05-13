define(['dart_sdk'], (function load__packages__vector_math__hash_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var hash = Object.create(dart.library);
  var $hashCode = dartx.hashCode;
  var $fold = dartx.fold;
  var $rightShift = dartx['>>'];
  dart._checkModuleNullSafetyMode(false);
  var intAndObjectToint = () => (intAndObjectToint = dart.constFn(dart.fnType(core.int, [core.int, core.Object])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/vector_math-2.1.0-nullsafety.5/lib/hash.dart";
  hash.hashObjects = function hashObjects(objects) {
    if (objects == null) dart.nullFailed(L0, 8, 34, "objects");
    return hash._finish(objects[$fold](core.int, 0, dart.fn((h, i) => {
      if (h == null) dart.nullFailed(L0, 9, 39, "h");
      if (i == null) dart.nullFailed(L0, 9, 49, "i");
      return hash._combine(h, dart.hashCode(i));
    }, intAndObjectToint())));
  };
  hash._combine = function _combine(hash, value) {
    if (hash == null) dart.nullFailed(L0, 12, 18, "hash");
    if (value == null) dart.nullFailed(L0, 12, 28, "value");
    hash = 536870911 & dart.notNull(hash) + dart.notNull(value);
    hash = 536870911 & dart.notNull(hash) + ((524287 & dart.notNull(hash)) << 10);
    return (dart.notNull(hash) ^ hash[$rightShift](6)) >>> 0;
  };
  hash._finish = function _finish(hash) {
    if (hash == null) dart.nullFailed(L0, 18, 17, "hash");
    hash = 536870911 & dart.notNull(hash) + ((67108863 & dart.notNull(hash)) << 3);
    hash = (dart.notNull(hash) ^ hash[$rightShift](11)) >>> 0;
    return 536870911 & dart.notNull(hash) + ((16383 & dart.notNull(hash)) << 15);
  };
  dart.trackLibraries("packages/vector_math/hash.dart", {
    "package:vector_math/hash.dart": hash
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hash.dart"],"names":[],"mappings":";;;;;;;;;;;;;;QAOiC;AAC7B,wBAAQ,AAAQ,OAAD,kBAAW,GAAG,SAAK,GAAU;UAAV;UAAU;AAAM,2BAAS,CAAC,EAAI,cAAF,CAAC;;EAAY;oCAG9D,MAAU;QAAV;QAAU;AACS,IAAlC,OAAO,AAAW,YAAQ,aAAL,IAAI,iBAAG,KAAK;AACuB,IAAxD,OAAO,AAAW,YAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,sBAAE,IAAI,MAAK;AACpD,UAAY,eAAL,IAAI,IAAI,AAAK,IAAD,cAAI;EACzB;;QAEgB;AACyC,IAAvD,OAAO,AAAW,YAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,wBAAE,IAAI,MAAK;AAC1B,IAA1B,OAAY,cAAL,IAAI,IAAI,AAAK,IAAD,cAAI;AACvB,UAAO,AAAW,aAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,qBAAE,IAAI,MAAK;EACtD","file":"../../../../../../../../../../packages/vector_math/hash.dart.lib.js"}');
  // Exports:
  return {
    hash: hash
  };
}));

//# sourceMappingURL=hash.dart.lib.js.map
