define(['dart_sdk'], (function load__packages__qr__src__bit_buffer_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var bit_buffer = Object.create(dart.library);
  var $truncate = dartx.truncate;
  var $rightShift = dartx['>>'];
  var $_get = dartx._get;
  var $modulo = dartx['%'];
  var $length = dartx.length;
  var $add = dartx.add;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(false);
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var JSArrayOfintL = () => (JSArrayOfintL = dart.constFn(_interceptors.JSArray$(intL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  const CT = Object.create(null);
  var L0 = "package:qr/src/bit_buffer.dart";
  var _length = dart.privateName(bit_buffer, "_length");
  var _buffer = dart.privateName(bit_buffer, "_buffer");
  const Object_ListMixin$36 = class Object_ListMixin extends core.Object {};
  (Object_ListMixin$36.new = function() {
  }).prototype = Object_ListMixin$36.prototype;
  dart.applyMixin(Object_ListMixin$36, collection.ListMixin$(dart.legacy(core.bool)));
  bit_buffer.QrBitBuffer = class QrBitBuffer extends Object_ListMixin$36 {
    _set(index, value$) {
      let value = value$;
      boolL().as(value);
      dart.throw(new core.UnsupportedError.new("cannot change"));
      return value$;
    }
    _get(index) {
      let bufIndex = (dart.notNull(index) / 8)[$truncate]();
      return (this[_buffer][$_get](bufIndex)[$rightShift](7 - index[$modulo](8)) & 1) === 1;
    }
    get length() {
      return this[_length];
    }
    set length(value) {
      return dart.throw(new core.UnsupportedError.new("Cannot change"));
    }
    getByte(index) {
      return this[_buffer][$_get](index);
    }
    put(number, length) {
      for (let i = 0; i < dart.notNull(length); i = i + 1) {
        let bit = (number[$rightShift](dart.notNull(length) - i - 1) & 1) === 1;
        this.putBit(bit);
      }
    }
    putBit(bit) {
      let t1, t0;
      let bufIndex = (dart.notNull(this[_length]) / 8)[$truncate]();
      if (dart.notNull(this[_buffer][$length]) <= bufIndex) {
        this[_buffer][$add](0);
      }
      if (dart.test(bit)) {
        t0 = this[_buffer];
        t1 = bufIndex;
        t0[$_set](t1, (dart.notNull(t0[$_get](t1)) | (128)[$rightShift](this[_length][$modulo](8))) >>> 0);
      }
      this[_length] = dart.notNull(this[_length]) + 1;
    }
  };
  (bit_buffer.QrBitBuffer.new = function() {
    this[_length] = 0;
    this[_buffer] = JSArrayOfintL().of([]);
    ;
  }).prototype = bit_buffer.QrBitBuffer.prototype;
  dart.addTypeTests(bit_buffer.QrBitBuffer);
  dart.addTypeCaches(bit_buffer.QrBitBuffer);
  dart.setMethodSignature(bit_buffer.QrBitBuffer, () => ({
    __proto__: dart.getMethods(bit_buffer.QrBitBuffer.__proto__),
    _set: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
    [$_set]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
    _get: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.int)]),
    [$_get]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.int)]),
    getByte: dart.fnType(dart.legacy(core.int), [dart.legacy(core.int)]),
    put: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)]),
    putBit: dart.fnType(dart.void, [dart.legacy(core.bool)])
  }));
  dart.setGetterSignature(bit_buffer.QrBitBuffer, () => ({
    __proto__: dart.getGetters(bit_buffer.QrBitBuffer.__proto__),
    length: dart.legacy(core.int),
    [$length]: dart.legacy(core.int)
  }));
  dart.setSetterSignature(bit_buffer.QrBitBuffer, () => ({
    __proto__: dart.getSetters(bit_buffer.QrBitBuffer.__proto__),
    length: dart.legacy(core.int),
    [$length]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(bit_buffer.QrBitBuffer, L0);
  dart.setFieldSignature(bit_buffer.QrBitBuffer, () => ({
    __proto__: dart.getFields(bit_buffer.QrBitBuffer.__proto__),
    [_buffer]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.int)))),
    [_length]: dart.fieldType(dart.legacy(core.int))
  }));
  dart.defineExtensionMethods(bit_buffer.QrBitBuffer, ['_set', '_get']);
  dart.defineExtensionAccessors(bit_buffer.QrBitBuffer, ['length']);
  dart.trackLibraries("packages/qr/src/bit_buffer.dart", {
    "package:qr/src/bit_buffer.dart": bit_buffer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["bit_buffer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;SASwB;UAAY;;AAC9B,iBAAM,8BAAiB;;IAAgB;SAGtB;AACb,qBAAiB,cAAN,KAAK,IAAI;AAC1B,YAAoD,EAA3C,AAAO,AAAW,AAAoB,qBAA9B,QAAQ,eAAM,AAAE,IAAE,AAAM,KAAD,UAAG,MAAM,OAAM;IACzD;;AAGkB;IAAO;eAGV;AAAU,wBAAM,8BAAiB;IAAgB;YAEhD;AAAU,YAAA,AAAO,sBAAC,KAAK;IAAC;QAE3B,QAAY;AACvB,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,MAAM,GAAE,IAAA,AAAC,CAAA;AACrB,kBAAyC,CAAjC,AAAO,AAAqB,MAAtB,cAAY,AAAI,aAAX,MAAM,IAAG,CAAC,GAAG,KAAM,OAAM;AACvC,QAAX,YAAO,GAAG;;IAEd;WAEiB;;AACT,qBAAmB,cAAR,iBAAW;AAC5B,UAAmB,aAAf,AAAQ,2BAAU,QAAQ;AACd,QAAd,AAAQ,oBAAI;;AAGd,oBAAI,GAAG;AACqC,aAA1C;aAAQ,QAAQ;QAAT,cAAW,cAAX,iBAAmB,CAAL,kBAAS,AAAQ,uBAAE;;AAGjC,MAAT,gBAAO,aAAP,iBAAO;IACT;;;IAxCI,gBAAU;IAEU,gBAAO;;EAAE","file":"../../../../../../../../../../../packages/qr/src/bit_buffer.dart.lib.js"}');
  // Exports:
  return {
    src__bit_buffer: bit_buffer
  };
}));

//# sourceMappingURL=bit_buffer.dart.lib.js.map
