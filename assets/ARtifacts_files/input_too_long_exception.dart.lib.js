define(['dart_sdk'], (function load__packages__qr__src__input_too_long_exception_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var input_too_long_exception = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "package:qr/src/input_too_long_exception.dart";
  var providedInput$ = dart.privateName(input_too_long_exception, "InputTooLongException.providedInput");
  var inputLimit$ = dart.privateName(input_too_long_exception, "InputTooLongException.inputLimit");
  var message$ = dart.privateName(input_too_long_exception, "InputTooLongException.message");
  input_too_long_exception.InputTooLongException = class InputTooLongException extends core.Object {
    get providedInput() {
      return this[providedInput$];
    }
    set providedInput(value) {
      super.providedInput = value;
    }
    get inputLimit() {
      return this[inputLimit$];
    }
    set inputLimit(value) {
      super.inputLimit = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    static new(providedInput, inputLimit) {
      let message = "Input too long. " + dart.str(providedInput) + " > " + dart.str(inputLimit);
      return new input_too_long_exception.InputTooLongException._internal(providedInput, inputLimit, message);
    }
    toString() {
      return "QrInputTooLongException: " + dart.str(this.message);
    }
  };
  (input_too_long_exception.InputTooLongException._internal = function(providedInput, inputLimit, message) {
    this[providedInput$] = providedInput;
    this[inputLimit$] = inputLimit;
    this[message$] = message;
    ;
  }).prototype = input_too_long_exception.InputTooLongException.prototype;
  dart.addTypeTests(input_too_long_exception.InputTooLongException);
  dart.addTypeCaches(input_too_long_exception.InputTooLongException);
  input_too_long_exception.InputTooLongException[dart.implements] = () => [core.Exception];
  dart.setMethodSignature(input_too_long_exception.InputTooLongException, () => ({
    __proto__: dart.getMethods(input_too_long_exception.InputTooLongException.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(input_too_long_exception.InputTooLongException, L0);
  dart.setFieldSignature(input_too_long_exception.InputTooLongException, () => ({
    __proto__: dart.getFields(input_too_long_exception.InputTooLongException.__proto__),
    providedInput: dart.finalFieldType(dart.legacy(core.int)),
    inputLimit: dart.finalFieldType(dart.legacy(core.int)),
    message: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(input_too_long_exception.InputTooLongException, ['toString']);
  dart.trackLibraries("packages/qr/src/input_too_long_exception.dart", {
    "package:qr/src/input_too_long_exception.dart": input_too_long_exception
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["input_too_long_exception.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IACY;;;;;;IACA;;;;;;IACG;;;;;;eAEqB,eAAmB;AAC7C,oBAAU,AAA8C,8BAA5B,aAAa,qBAAI,UAAU;AAE7D,YAA6B,8DAAU,aAAa,EAAE,UAAU,EAAE,OAAO;IAC3E;;AAMqB,YAAA,AAAmC,wCAAR;IAAQ;;uEAH/C,eAAoB,YAAiB;IAArC;IAAoB;IAAiB;;EAAQ","file":"../../../../../../../../../../../packages/qr/src/input_too_long_exception.dart.lib.js"}');
  // Exports:
  return {
    src__input_too_long_exception: input_too_long_exception
  };
}));

//# sourceMappingURL=input_too_long_exception.dart.lib.js.map
