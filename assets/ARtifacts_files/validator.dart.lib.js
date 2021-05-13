define(['dart_sdk', 'packages/qr/src/qr_code.dart', 'packages/qr/src/input_too_long_exception.dart'], (function load__packages__qr_flutter__src__validator_dart(dart_sdk, packages__qr__src__qr_code$46dart, packages__qr__src__input_too_long_exception$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const qr_code = packages__qr__src__qr_code$46dart.src__qr_code;
  const input_too_long_exception = packages__qr__src__input_too_long_exception$46dart.src__input_too_long_exception;
  var validator = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  var ExceptionL = () => (ExceptionL = dart.constFn(dart.legacy(core.Exception)))();
  var InputTooLongExceptionL = () => (InputTooLongExceptionL = dart.constFn(dart.legacy(input_too_long_exception.InputTooLongException)))();
  var QrValidationStatusL = () => (QrValidationStatusL = dart.constFn(dart.legacy(validator.QrValidationStatus)))();
  const CT = Object.create(null);
  var L0 = "package:qr_flutter/src/validator.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: validator.QrValidationStatus.prototype,
        [_name$]: "QrValidationStatus.valid",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: validator.QrValidationStatus.prototype,
        [_name$]: "QrValidationStatus.contentTooLong",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: validator.QrValidationStatus.prototype,
        [_name$]: "QrValidationStatus.error",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], QrValidationStatusL());
    }
  }, false);
  validator.QrValidator = class QrValidator extends core.Object {
    static validate(opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let version = opts && 'version' in opts ? opts.version : -1;
      let errorCorrectionLevel = opts && 'errorCorrectionLevel' in opts ? opts.errorCorrectionLevel : 1;
      let qrCode = null;
      try {
        if (version !== -1) {
          qrCode = new qr_code.QrCode.new(version, errorCorrectionLevel);
          qrCode.addData(data);
        } else {
          qrCode = qr_code.QrCode.fromData({data: data, errorCorrectLevel: errorCorrectionLevel});
        }
        qrCode.make();
        return new validator.QrValidationResult.new({status: validator.QrValidationStatus.valid, qrCode: qrCode});
      } catch (e) {
        let ex$ = dart.getThrown(e);
        if (InputTooLongExceptionL().is(ex$)) {
          let itle = ex$;
          return new validator.QrValidationResult.new({status: validator.QrValidationStatus.contentTooLong, error: itle});
        } else if (ExceptionL().is(ex$)) {
          let ex = ex$;
          return new validator.QrValidationResult.new({status: validator.QrValidationStatus.error, error: ex});
        } else
          throw e;
      }
    }
  };
  (validator.QrValidator.new = function() {
    ;
  }).prototype = validator.QrValidator.prototype;
  dart.addTypeTests(validator.QrValidator);
  dart.addTypeCaches(validator.QrValidator);
  dart.setLibraryUri(validator.QrValidator, L0);
  var status$ = dart.privateName(validator, "QrValidationResult.status");
  var qrCode$ = dart.privateName(validator, "QrValidationResult.qrCode");
  var error$ = dart.privateName(validator, "QrValidationResult.error");
  validator.QrValidationResult = class QrValidationResult extends core.Object {
    get status() {
      return this[status$];
    }
    set status(value) {
      this[status$] = value;
    }
    get qrCode() {
      return this[qrCode$];
    }
    set qrCode(value) {
      this[qrCode$] = value;
    }
    get error() {
      return this[error$];
    }
    set error(value) {
      this[error$] = value;
    }
    get isValid() {
      return this.status == validator.QrValidationStatus.valid;
    }
  };
  (validator.QrValidationResult.new = function(opts) {
    let status = opts && 'status' in opts ? opts.status : null;
    let qrCode = opts && 'qrCode' in opts ? opts.qrCode : null;
    let error = opts && 'error' in opts ? opts.error : null;
    this[status$] = status;
    this[qrCode$] = qrCode;
    this[error$] = error;
    ;
  }).prototype = validator.QrValidationResult.prototype;
  dart.addTypeTests(validator.QrValidationResult);
  dart.addTypeCaches(validator.QrValidationResult);
  dart.setGetterSignature(validator.QrValidationResult, () => ({
    __proto__: dart.getGetters(validator.QrValidationResult.__proto__),
    isValid: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(validator.QrValidationResult, L0);
  dart.setFieldSignature(validator.QrValidationResult, () => ({
    __proto__: dart.getFields(validator.QrValidationResult.__proto__),
    status: dart.fieldType(dart.legacy(validator.QrValidationStatus)),
    qrCode: dart.fieldType(dart.legacy(qr_code.QrCode)),
    error: dart.fieldType(dart.legacy(core.Exception))
  }));
  var _name$ = dart.privateName(validator, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  validator.QrValidationStatus = class QrValidationStatus extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (validator.QrValidationStatus.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = validator.QrValidationStatus.prototype;
  dart.addTypeTests(validator.QrValidationStatus);
  dart.addTypeCaches(validator.QrValidationStatus);
  dart.setMethodSignature(validator.QrValidationStatus, () => ({
    __proto__: dart.getMethods(validator.QrValidationStatus.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(validator.QrValidationStatus, L0);
  dart.setFieldSignature(validator.QrValidationStatus, () => ({
    __proto__: dart.getFields(validator.QrValidationStatus.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(validator.QrValidationStatus, ['toString']);
  validator.QrValidationStatus.valid = C0 || CT.C0;
  validator.QrValidationStatus.contentTooLong = C1 || CT.C1;
  validator.QrValidationStatus.error = C2 || CT.C2;
  validator.QrValidationStatus.values = C3 || CT.C3;
  dart.trackLibraries("packages/qr_flutter/src/validator.dart", {
    "package:qr_flutter/src/validator.dart": validator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["validator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAiBqB;UACb;UACA;AAEG;AACP;AACE,YAAI,OAAO;AACqC,UAA9C,SAAS,uBAAO,OAAO,EAAE,oBAAoB;AACzB,UAApB,AAAO,MAAD,SAAS,IAAI;;AAKlB,UAHD,SAAgB,+BACR,IAAI,qBACS,oBAAoB;;AAG9B,QAAb,AAAO,MAAD;AACN,cAAO,+CACwB,4CAAe,MAAM;;;AACpD;cAAgC;AAChC,gBAAO,+CACwB,oDAAuB,IAAI;cAC1D;cAAoB;AACpB,gBAAO,+CAA8C,2CAAc,EAAE;;;;IAEzE;;;;EACF;;;;;;;;IAWqB;;;;;;IAGZ;;;;;;IAGG;;;;;;;AAGU,YAAA,AAAO,gBAAsB;IAAK;;;QAZnB;QAAa;QAAa;IAA1B;IAAa;IAAa;;EAAO;;;;;;;;;;;;;;;;;;;;;;IA2BtE;;sDAXK;;;;EAWL","file":"../../../../../../../../../../../packages/qr_flutter/src/validator.dart.lib.js"}');
  // Exports:
  return {
    src__validator: validator
  };
}));

//# sourceMappingURL=validator.dart.lib.js.map
