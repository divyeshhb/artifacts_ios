define(['dart_sdk'], (function load__packages__path__src__utils_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var utils = Object.create(dart.library);
  var $codeUnitAt = dartx.codeUnitAt;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/path-1.8.0-nullsafety.3/lib/src/utils.dart";
  utils.isAlphabetic = function isAlphabetic(char) {
    if (char == null) dart.nullFailed(L0, 9, 23, "char");
    return dart.notNull(char) >= 65 && dart.notNull(char) <= 90 || dart.notNull(char) >= 97 && dart.notNull(char) <= 122;
  };
  utils.isNumeric = function isNumeric(char) {
    if (char == null) dart.nullFailed(L0, 14, 20, "char");
    return dart.notNull(char) >= 48 && dart.notNull(char) <= 57;
  };
  utils.isDriveLetter = function isDriveLetter(path, index) {
    if (path == null) dart.nullFailed(L0, 18, 27, "path");
    if (index == null) dart.nullFailed(L0, 18, 37, "index");
    if (path.length < dart.notNull(index) + 2) return false;
    if (!dart.test(utils.isAlphabetic(path[$codeUnitAt](index)))) return false;
    if (path[$codeUnitAt](dart.notNull(index) + 1) !== 58) return false;
    if (path.length === dart.notNull(index) + 2) return true;
    return path[$codeUnitAt](dart.notNull(index) + 2) === 47;
  };
  dart.trackLibraries("packages/path/src/utils.dart", {
    "package:path/src/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;QAQsB;AAClB,UAAM,AAAyC,cAA9C,IAAI,WAAyB,aAAL,IAAI,WACvB,aAAL,IAAI,WAAyB,aAAL,IAAI;EAAiB;;QAG/B;AAAS,UAAK,AAAc,cAAnB,IAAI,WAAuB,aAAL,IAAI;EAAc;+CAI1C,MAAU;QAAV;QAAU;AAClC,QAAI,AAAK,AAAO,IAAR,UAAgB,aAAN,KAAK,IAAG,GAAG,MAAO;AACpC,mBAAK,mBAAa,AAAK,IAAD,cAAY,KAAK,KAAI,MAAO;AAClD,QAAI,AAAK,IAAD,cAAkB,aAAN,KAAK,IAAG,WAAmB,MAAO;AACtD,QAAI,AAAK,AAAO,IAAR,YAAiB,aAAN,KAAK,IAAG,GAAG,MAAO;AACrC,UAAO,AAAK,AAAsB,KAAvB,cAAkB,aAAN,KAAK,IAAG;EACjC","file":"../../../../../../../../../../../packages/path/src/utils.dart.lib.js"}');
  // Exports:
  return {
    src__utils: utils
  };
}));

//# sourceMappingURL=utils.dart.lib.js.map
