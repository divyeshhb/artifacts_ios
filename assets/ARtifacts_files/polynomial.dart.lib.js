define(['dart_sdk', 'packages/qr/src/math.dart'], (function load__packages__qr__src__polynomial_dart(dart_sdk, packages__qr__src__math$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const math = packages__qr__src__math$46dart.src__math;
  var polynomial = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "package:qr/src/polynomial.dart";
  var _values$ = dart.privateName(polynomial, "_values");
  polynomial.QrPolynomial = class QrPolynomial extends core.Object {
    static new(thing, shift) {
      let offset = 0;
      while (offset < dart.notNull(thing[$length]) && thing[$_get](offset) === 0) {
        offset = offset + 1;
      }
      let values = _native_typed_data.NativeUint8List.new(dart.notNull(thing[$length]) - offset + dart.notNull(shift));
      for (let i = 0; i < dart.notNull(thing[$length]) - offset; i = i + 1) {
        values[$_set](i, thing[$_get](i + offset));
      }
      return new polynomial.QrPolynomial._internal(values);
    }
    _get(index) {
      return this[_values$][$_get](index);
    }
    get length() {
      return this[_values$][$length];
    }
    multiply(e) {
      let t1, t0;
      let foo = _native_typed_data.NativeUint8List.new(dart.notNull(this.length) + dart.notNull(e.length) - 1);
      for (let i = 0; i < dart.notNull(this.length); i = i + 1) {
        for (let j = 0; j < dart.notNull(e.length); j = j + 1) {
          t0 = foo;
          t1 = i + j;
          t0[$_set](t1, (dart.notNull(t0[$_get](t1)) ^ dart.notNull(math.gexp(dart.notNull(math.glog(this._get(i))) + dart.notNull(math.glog(e._get(j)))))) >>> 0);
        }
      }
      return polynomial.QrPolynomial.new(foo, 0);
    }
    mod(e) {
      let t1, t0;
      if (dart.notNull(this.length) - dart.notNull(e.length) < 0) {
        return this;
      }
      let ratio = dart.notNull(math.glog(this._get(0))) - dart.notNull(math.glog(e._get(0)));
      let value = _native_typed_data.NativeUint8List.new(this.length);
      for (let i = 0; i < dart.notNull(this.length); i = i + 1) {
        value[$_set](i, this._get(i));
      }
      for (let i = 0; i < dart.notNull(e.length); i = i + 1) {
        t0 = value;
        t1 = i;
        t0[$_set](t1, (dart.notNull(t0[$_get](t1)) ^ dart.notNull(math.gexp(dart.notNull(math.glog(e._get(i))) + ratio))) >>> 0);
      }
      return polynomial.QrPolynomial.new(value, 0).mod(e);
    }
  };
  (polynomial.QrPolynomial._internal = function(_values) {
    this[_values$] = _values;
    ;
  }).prototype = polynomial.QrPolynomial.prototype;
  dart.addTypeTests(polynomial.QrPolynomial);
  dart.addTypeCaches(polynomial.QrPolynomial);
  dart.setMethodSignature(polynomial.QrPolynomial, () => ({
    __proto__: dart.getMethods(polynomial.QrPolynomial.__proto__),
    _get: dart.fnType(dart.legacy(core.int), [dart.legacy(core.int)]),
    multiply: dart.fnType(dart.legacy(polynomial.QrPolynomial), [dart.legacy(polynomial.QrPolynomial)]),
    mod: dart.fnType(dart.legacy(polynomial.QrPolynomial), [dart.legacy(polynomial.QrPolynomial)])
  }));
  dart.setGetterSignature(polynomial.QrPolynomial, () => ({
    __proto__: dart.getGetters(polynomial.QrPolynomial.__proto__),
    length: dart.legacy(core.int)
  }));
  dart.setLibraryUri(polynomial.QrPolynomial, L0);
  dart.setFieldSignature(polynomial.QrPolynomial, () => ({
    __proto__: dart.getFields(polynomial.QrPolynomial.__proto__),
    [_values$]: dart.finalFieldType(dart.legacy(typed_data.Uint8List))
  }));
  dart.trackLibraries("packages/qr/src/polynomial.dart", {
    "package:qr/src/polynomial.dart": polynomial
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["polynomial.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;eAOiC,OAAW;AACpC,mBAAS;AAEb,aAAO,AAAO,MAAD,gBAAG,AAAM,KAAD,cAAW,AAAK,AAAS,KAAT,QAAC,MAAM,MAAK;AACvC,QAAR,SAAA,AAAM,MAAA;;AAGF,mBAAS,uCAAuB,AAAS,aAAtB,AAAM,KAAD,aAAU,MAAM,gBAAG,KAAK;AAEtD,eAAS,IAAI,GAAG,AAAE,CAAD,GAAgB,aAAb,AAAM,KAAD,aAAU,MAAM,EAAE,IAAA,AAAC,CAAA;AACb,QAA7B,AAAM,MAAA,QAAC,CAAC,EAAI,AAAK,KAAA,QAAC,AAAE,CAAD,GAAG,MAAM;;AAG9B,YAAoB,uCAAU,MAAM;IACtC;SAIoB;AAAU,YAAA,AAAO,uBAAC,KAAK;IAAC;;AAE1B,YAAA,AAAQ;IAAM;aAEG;;AACjB,gBAAM,uCAAiB,AAAW,aAAlB,4BAAS,AAAE,CAAD,WAAU;AAEpD,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,cAAQ,IAAA,AAAC,CAAA;AAC3B,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAE,CAAD,UAAS,IAAA,AAAC,CAAA;AACyC,eAAtE,GAAG;eAAC,AAAE,CAAD,GAAG,CAAC;UAAN,cAAQ,cAAR,8BAAW,UAAmC,aAAtB,UAAiB,UAAC,CAAC,mBAAK,UAAa,AAAC,CAAA,MAAC,CAAC;;;AAIvE,YAAO,6BAAa,GAAG,EAAE;IAC3B;QAE8B;;AAC5B,UAAW,AAAW,aAAlB,4BAAS,AAAE,CAAD,WAAU;AACtB,cAAO;;AAGH,kBAA8B,aAAtB,UAAiB,UAAC,oBAAM,UAAa,AAAC,CAAA,MAAC;AAE/C,kBAAQ,uCAAU;AAExB,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,cAAQ,IAAA,AAAC,CAAA;AACT,QAAlB,AAAK,KAAA,QAAC,CAAC,EAAQ,UAAC,CAAC;;AAGnB,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAE,CAAD,UAAS,IAAA,AAAC,CAAA;AACuB,aAApD,KAAK;aAAC,CAAC;QAAF,cAAI,cAAJ,8BAAO,UAAgC,aAAnB,UAAa,AAAC,CAAA,MAAC,CAAC,MAAK,KAAK;;AAIrD,YAAO,AAAuB,6BAAV,KAAK,EAAE,OAAO,CAAC;IACrC;;;IArC4B;;EAAQ","file":"../../../../../../../../../../../packages/qr/src/polynomial.dart.lib.js"}');
  // Exports:
  return {
    src__polynomial: polynomial
  };
}));

//# sourceMappingURL=polynomial.dart.lib.js.map
