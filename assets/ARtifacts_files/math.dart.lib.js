define(['dart_sdk'], (function load__packages__qr__src__math_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var math = Object.create(dart.library);
  var $_get = dartx._get;
  var $leftShift = dartx['<<'];
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  math.glog = function glog(n) {
    if (dart.notNull(n) < 1) {
      dart.throw(new core.ArgumentError.new("glog(" + dart.str(n) + ")"));
    }
    return math._logTable[$_get](n);
  };
  math.gexp = function gexp(n) {
    while (dart.notNull(n) < 0) {
      n = dart.notNull(n) + 255;
    }
    while (dart.notNull(n) >= 256) {
      n = dart.notNull(n) - 255;
    }
    return math._expTable[$_get](n);
  };
  math._createExpTable = function _createExpTable() {
    let list = _native_typed_data.NativeUint8List.new(256);
    for (let i = 0; i < 8; i = i + 1) {
      list[$_set](i, (1)[$leftShift](i));
    }
    for (let i = 8; i < 256; i = i + 1) {
      list[$_set](i, (dart.notNull(list[$_get](i - 4)) ^ dart.notNull(list[$_get](i - 5)) ^ dart.notNull(list[$_get](i - 6)) ^ dart.notNull(list[$_get](i - 8))) >>> 0);
    }
    return list;
  };
  math._createLogTable = function _createLogTable() {
    let list = _native_typed_data.NativeUint8List.new(256);
    for (let i = 0; i < 255; i = i + 1) {
      list[$_set](math._expTable[$_get](i), i);
    }
    return list;
  };
  dart.defineLazy(math, {
    /*math._logTable*/get _logTable() {
      return math._createLogTable();
    },
    /*math._expTable*/get _expTable() {
      return math._createExpTable();
    }
  }, true);
  dart.trackLibraries("packages/qr/src/math.dart", {
    "package:qr/src/math.dart": math
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["math.dart"],"names":[],"mappings":";;;;;;;;;;;;4BAKa;AACX,QAAM,aAAF,CAAC,IAAG;AACyB,MAA/B,WAAM,2BAAc,AAAU,mBAAH,CAAC;;AAG9B,UAAO,AAAS,uBAAC,CAAC;EACpB;4BAEa;AACX,WAAS,aAAF,CAAC,IAAG;AACD,MAAR,IAAE,aAAF,CAAC,IAAI;;AAGP,WAAS,aAAF,CAAC,KAAI;AACF,MAAR,IAAE,aAAF,CAAC,IAAI;;AAGP,UAAO,AAAS,uBAAC,CAAC;EACpB;;AAGQ,eAAO,uCAAU;AACvB,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,GAAG,IAAA,AAAC,CAAA;AACN,MAAhB,AAAI,IAAA,QAAC,CAAC,EAAM,CAAF,eAAK,CAAC;;AAElB,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,KAAK,IAAA,AAAC,CAAA;AACuC,MAA/D,AAAI,IAAA,QAAC,CAAC,EAA4C,CAA5B,AAAc,aAA1B,AAAI,IAAA,QAAC,AAAE,CAAD,GAAG,mBAAK,AAAI,IAAA,QAAC,AAAE,CAAD,GAAG,mBAAK,AAAI,IAAA,QAAC,AAAE,CAAD,GAAG,mBAAK,AAAI,IAAA,QAAC,AAAE,CAAD,GAAG;;AAE/D,UAAO,KAAI;EACb;;AAGQ,eAAO,uCAAU;AACvB,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,KAAK,IAAA,AAAC,CAAA;AACF,MAAtB,AAAI,IAAA,QAAC,AAAS,sBAAC,CAAC,GAAK,CAAC;;AAExB,UAAO,KAAI;EACb;;MAxCgB,cAAS;YAAG;;MACZ,cAAS;YAAG","file":"../../../../../../../../../../../packages/qr/src/math.dart.lib.js"}');
  // Exports:
  return {
    src__math: math
  };
}));

//# sourceMappingURL=math.dart.lib.js.map
