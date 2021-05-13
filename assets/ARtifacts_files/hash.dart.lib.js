define(['dart_sdk'], (function load__packages__quiver__src__core__hash_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var hash = Object.create(dart.library);
  var $hashCode = dartx.hashCode;
  var $fold = dartx.fold;
  var $rightShift = dartx['>>'];
  dart._checkModuleNullSafetyMode(false);
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var intLAnddynamicTointL = () => (intLAnddynamicTointL = dart.constFn(dart.fnType(intL(), [intL(), dart.dynamic])))();
  const CT = Object.create(null);
  hash.hashObjects = function hashObjects(objects) {
    return hash._finish(objects[$fold](intL(), 0, dart.fn((h, i) => hash._combine(h, dart.hashCode(i)), intLAnddynamicTointL())));
  };
  hash.hash2 = function hash2(a, b) {
    return hash._finish(hash._combine(hash._combine(0, dart.hashCode(a)), dart.hashCode(b)));
  };
  hash.hash3 = function hash3(a, b, c) {
    return hash._finish(hash._combine(hash._combine(hash._combine(0, dart.hashCode(a)), dart.hashCode(b)), dart.hashCode(c)));
  };
  hash.hash4 = function hash4(a, b, c, d) {
    return hash._finish(hash._combine(hash._combine(hash._combine(hash._combine(0, dart.hashCode(a)), dart.hashCode(b)), dart.hashCode(c)), dart.hashCode(d)));
  };
  hash._combine = function _combine(hash, value) {
    hash = 536870911 & dart.notNull(hash) + dart.notNull(value);
    hash = 536870911 & dart.notNull(hash) + ((524287 & dart.notNull(hash)) << 10);
    return (dart.notNull(hash) ^ hash[$rightShift](6)) >>> 0;
  };
  hash._finish = function _finish(hash) {
    hash = 536870911 & dart.notNull(hash) + ((67108863 & dart.notNull(hash)) << 3);
    hash = (dart.notNull(hash) ^ hash[$rightShift](11)) >>> 0;
    return 536870911 & dart.notNull(hash) + ((16383 & dart.notNull(hash)) << 15);
  };
  dart.trackLibraries("packages/quiver/src/core/hash.dart", {
    "package:quiver/src/core/hash.dart": hash
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hash.dart"],"names":[],"mappings":";;;;;;;;;;;;;0CAeyB;AACrB,wBAAQ,AAAQ,OAAD,gBAAM,GAAG,SAAC,GAAG,MAAM,cAAS,CAAC,EAAI,cAAF,CAAC;EAAY;8BAGrD,GAAG;AAAM,wBAAQ,cAAS,cAAS,GAAK,cAAF,CAAC,IAAc,cAAF,CAAC;EAAW;8BAG/D,GAAG,GAAG;AAAM,wBAClB,cAAS,cAAS,cAAS,GAAK,cAAF,CAAC,IAAc,cAAF,CAAC,IAAc,cAAF,CAAC;EAAW;8BAG9D,GAAG,GAAG,GAAG;AAAM,wBAAQ,cAC7B,cAAS,cAAS,cAAS,GAAK,cAAF,CAAC,IAAc,cAAF,CAAC,IAAc,cAAF,CAAC,IACvD,cAAF,CAAC;EAAW;oCAIC,MAAU;AACS,IAAlC,OAAO,AAAW,YAAQ,aAAL,IAAI,iBAAG,KAAK;AACuB,IAAxD,OAAO,AAAW,YAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,sBAAE,IAAI,MAAK;AACpD,UAAY,eAAL,IAAI,IAAI,AAAK,IAAD,cAAI;EACzB;kCAEgB;AACyC,IAAvD,OAAO,AAAW,YAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,wBAAE,IAAI,MAAK;AAC1B,IAA1B,OAAY,cAAL,IAAI,IAAI,AAAK,IAAD,cAAI;AACvB,UAAO,AAAW,aAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,qBAAE,IAAI,MAAK;EACtD","file":"../../../../../../../../../../../../packages/quiver/src/core/hash.dart.lib.js"}');
  // Exports:
  return {
    src__core__hash: hash
  };
}));

//# sourceMappingURL=hash.dart.lib.js.map
