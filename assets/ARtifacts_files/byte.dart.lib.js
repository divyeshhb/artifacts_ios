define(['dart_sdk', 'packages/qr/src/bit_buffer.dart'], (function load__packages__qr__src__byte_dart(dart_sdk, packages__qr__src__bit_buffer$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const bit_buffer = packages__qr__src__bit_buffer$46dart.src__bit_buffer;
  var byte = Object.create(dart.library);
  var $buffer = dartx.buffer;
  var $asUint8List = dartx.asUint8List;
  var $length = dartx.length;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "package:qr/src/byte.dart";
  var _data = dart.privateName(byte, "_data");
  var mode = dart.privateName(byte, "QrByte.mode");
  byte.QrByte = class QrByte extends core.Object {
    get mode() {
      return this[mode];
    }
    set mode(value) {
      super.mode = value;
    }
    static new(input) {
      return new byte.QrByte.fromUint8List(convert.utf8.encoder.convert(input));
    }
    static fromByteData(input) {
      return new byte.QrByte.fromUint8List(input[$buffer][$asUint8List]());
    }
    get length() {
      return this[_data][$length];
    }
    write(buffer) {
      for (let v of this[_data]) {
        buffer.put(v, 8);
      }
    }
  };
  (byte.QrByte.fromUint8List = function(input) {
    this[mode] = 4;
    this[_data] = input;
    ;
  }).prototype = byte.QrByte.prototype;
  dart.addTypeTests(byte.QrByte);
  dart.addTypeCaches(byte.QrByte);
  dart.setMethodSignature(byte.QrByte, () => ({
    __proto__: dart.getMethods(byte.QrByte.__proto__),
    write: dart.fnType(dart.void, [dart.legacy(bit_buffer.QrBitBuffer)])
  }));
  dart.setGetterSignature(byte.QrByte, () => ({
    __proto__: dart.getGetters(byte.QrByte.__proto__),
    length: dart.legacy(core.int)
  }));
  dart.setLibraryUri(byte.QrByte, L0);
  dart.setFieldSignature(byte.QrByte, () => ({
    __proto__: dart.getFields(byte.QrByte.__proto__),
    mode: dart.finalFieldType(dart.legacy(core.int)),
    [_data]: dart.finalFieldType(dart.legacy(typed_data.Uint8List))
  }));
  dart.trackLibraries("packages/qr/src/byte.dart", {
    "package:qr/src/byte.dart": byte
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["byte.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;IAOY;;;;;;eAGY;AAClB,YAAO,+BAAc,AAAK,AAAQ,6BAAQ,KAAK;IAAE;wBAIhB;AACjC,YAAO,+BAAc,AAAM,AAAO,KAAR;IAAsB;;AAElC,YAAA,AAAM;IAAM;UAEP;AACrB,eAAW,IAAK;AACE,QAAhB,AAAO,MAAD,KAAK,CAAC,EAAE;;IAElB;;wCAX+B;IANrB;IAMoC,cAAE,KAAK","file":"../../../../../../../../../../../packages/qr/src/byte.dart.lib.js"}');
  // Exports:
  return {
    src__byte: byte
  };
}));

//# sourceMappingURL=byte.dart.lib.js.map
