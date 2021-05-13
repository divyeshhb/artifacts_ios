define(['dart_sdk'], (function load__packages__firebase_auth_platform_interface__src__action_code_info_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var action_code_info = Object.create(dart.library);
  var $toString = dartx.toString;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var ActionCodeInfoOperationL = () => (ActionCodeInfoOperationL = dart.constFn(dart.legacy(action_code_info.ActionCodeInfoOperation)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  const CT = Object.create(null);
  var L1 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth_platform_interface-2.1.2/lib/src/action_code_info.dart";
  var L0 = "package:firebase_auth_platform_interface/src/action_code_info.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: action_code_info.ActionCodeInfoOperation.prototype,
        [_name$]: "ActionCodeInfoOperation.unknown",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: action_code_info.ActionCodeInfoOperation.prototype,
        [_name$]: "ActionCodeInfoOperation.passwordReset",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: action_code_info.ActionCodeInfoOperation.prototype,
        [_name$]: "ActionCodeInfoOperation.verifyEmail",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: action_code_info.ActionCodeInfoOperation.prototype,
        [_name$]: "ActionCodeInfoOperation.recoverEmail",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: action_code_info.ActionCodeInfoOperation.prototype,
        [_name$]: "ActionCodeInfoOperation.emailSignIn",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: action_code_info.ActionCodeInfoOperation.prototype,
        [_name$]: "ActionCodeInfoOperation.verifyAndChangeEmail",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: action_code_info.ActionCodeInfoOperation.prototype,
        [_name$]: "ActionCodeInfoOperation.revertSecondFactorAddition",
        index: 6
      });
    },
    get C7() {
      return C7 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], ActionCodeInfoOperationL());
    }
  }, false);
  var _name$ = dart.privateName(action_code_info, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  action_code_info.ActionCodeInfoOperation = class ActionCodeInfoOperation extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (action_code_info.ActionCodeInfoOperation.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = action_code_info.ActionCodeInfoOperation.prototype;
  dart.addTypeTests(action_code_info.ActionCodeInfoOperation);
  dart.addTypeCaches(action_code_info.ActionCodeInfoOperation);
  dart.setMethodSignature(action_code_info.ActionCodeInfoOperation, () => ({
    __proto__: dart.getMethods(action_code_info.ActionCodeInfoOperation.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(action_code_info.ActionCodeInfoOperation, L0);
  dart.setFieldSignature(action_code_info.ActionCodeInfoOperation, () => ({
    __proto__: dart.getFields(action_code_info.ActionCodeInfoOperation.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(action_code_info.ActionCodeInfoOperation, ['toString']);
  action_code_info.ActionCodeInfoOperation.unknown = C0 || CT.C0;
  action_code_info.ActionCodeInfoOperation.passwordReset = C1 || CT.C1;
  action_code_info.ActionCodeInfoOperation.verifyEmail = C2 || CT.C2;
  action_code_info.ActionCodeInfoOperation.recoverEmail = C3 || CT.C3;
  action_code_info.ActionCodeInfoOperation.emailSignIn = C4 || CT.C4;
  action_code_info.ActionCodeInfoOperation.verifyAndChangeEmail = C5 || CT.C5;
  action_code_info.ActionCodeInfoOperation.revertSecondFactorAddition = C6 || CT.C6;
  action_code_info.ActionCodeInfoOperation.values = C7 || CT.C7;
  var _operation = dart.privateName(action_code_info, "_operation");
  var _data = dart.privateName(action_code_info, "_data");
  action_code_info.ActionCodeInfo = class ActionCodeInfo extends core.Object {
    get operation() {
      switch (this[_operation]) {
        case 0:
        {
          return action_code_info.ActionCodeInfoOperation.unknown;
        }
        case 1:
        {
          return action_code_info.ActionCodeInfoOperation.passwordReset;
        }
        case 2:
        {
          return action_code_info.ActionCodeInfoOperation.verifyEmail;
        }
        case 3:
        {
          return action_code_info.ActionCodeInfoOperation.recoverEmail;
        }
        case 4:
        {
          return action_code_info.ActionCodeInfoOperation.emailSignIn;
        }
        case 5:
        {
          return action_code_info.ActionCodeInfoOperation.verifyAndChangeEmail;
        }
        case 6:
        {
          return action_code_info.ActionCodeInfoOperation.revertSecondFactorAddition;
        }
        default:
        {
          dart.throw(new core.FallThroughError.new());
        }
      }
    }
    get data() {
      return new (IdentityMapOfStringL$dynamic()).from(["email", this[_data][$_get]("email"), "previousEmail", this[_data][$_get]("previousEmail")]);
    }
  };
  (action_code_info.ActionCodeInfo.new = function(opts) {
    let operation = opts && 'operation' in opts ? opts.operation : null;
    let data = opts && 'data' in opts ? opts.data : null;
    if (!(data != null)) dart.assertFailed(null, L1, 39, 16, "data != null");
    this[_operation] = operation;
    this[_data] = data;
    ;
  }).prototype = action_code_info.ActionCodeInfo.prototype;
  dart.addTypeTests(action_code_info.ActionCodeInfo);
  dart.addTypeCaches(action_code_info.ActionCodeInfo);
  dart.setGetterSignature(action_code_info.ActionCodeInfo, () => ({
    __proto__: dart.getGetters(action_code_info.ActionCodeInfo.__proto__),
    operation: dart.legacy(action_code_info.ActionCodeInfoOperation),
    data: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))
  }));
  dart.setLibraryUri(action_code_info.ActionCodeInfo, L0);
  dart.setFieldSignature(action_code_info.ActionCodeInfo, () => ({
    __proto__: dart.getFields(action_code_info.ActionCodeInfo.__proto__),
    [_operation]: dart.fieldType(dart.legacy(core.int)),
    [_data]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)))
  }));
  dart.trackLibraries("packages/firebase_auth_platform_interface/src/action_code_info.dart", {
    "package:firebase_auth_platform_interface/src/action_code_info.dart": action_code_info
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["action_code_info.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA6BA;;kEArBK;;;;EAqBL;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmBI,cAAQ;;;AAEJ,gBAA+B;;;;AAE/B,gBAA+B;;;;AAE/B,gBAA+B;;;;AAE/B,gBAA+B;;;;AAE/B,gBAA+B;;;;AAE/B,gBAA+B;;;;AAE/B,gBAA+B;;;;AAEP,UAAxB,WAAM;;;IAEZ;;AAOE,YAAwB,4CACtB,SAAS,AAAK,mBAAC,UACf,iBAAiB,AAAK,mBAAC;IAE3B;;;QAzCM;QAC2B;UACpB,AAAK,IAAD,IAAI;IACJ,mBAAE,SAAS;IAChB,cAAE,IAAI","file":"../../../../../../../../../../../packages/firebase_auth_platform_interface/src/action_code_info.dart.lib.js"}');
  // Exports:
  return {
    src__action_code_info: action_code_info
  };
}));

//# sourceMappingURL=action_code_info.dart.lib.js.map
