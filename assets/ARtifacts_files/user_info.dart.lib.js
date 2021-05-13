define(['dart_sdk'], (function load__packages__firebase_auth_platform_interface__src__user_info_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var user_info = Object.create(dart.library);
  var $_get = dartx._get;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var UserInfoL = () => (UserInfoL = dart.constFn(dart.legacy(user_info.UserInfo)))();
  const CT = Object.create(null);
  var L0 = "package:firebase_auth_platform_interface/src/user_info.dart";
  var _data$ = dart.privateName(user_info, "_data");
  user_info.UserInfo = class UserInfo extends core.Object {
    get displayName() {
      return StringL().as(this[_data$][$_get]("displayName"));
    }
    get email() {
      return StringL().as(this[_data$][$_get]("email"));
    }
    get phoneNumber() {
      return StringL().as(this[_data$][$_get]("phoneNumber"));
    }
    get photoURL() {
      return StringL().as(this[_data$][$_get]("photoURL"));
    }
    get providerId() {
      return StringL().as(this[_data$][$_get]("providerId"));
    }
    get uid() {
      return StringL().as(this[_data$][$_get]("uid"));
    }
    toString() {
      return dart.str(dart.wrapType(UserInfoL())) + "(displayName: " + dart.str(this.displayName) + ", email: " + dart.str(this.email) + ", phoneNumber: " + dart.str(this.phoneNumber) + ", photoURL: " + dart.str(this.photoURL) + ", providerId: " + dart.str(this.providerId) + ", uid: " + dart.str(this.uid) + ")";
    }
  };
  (user_info.UserInfo.new = function(_data) {
    this[_data$] = _data;
    ;
  }).prototype = user_info.UserInfo.prototype;
  dart.addTypeTests(user_info.UserInfo);
  dart.addTypeCaches(user_info.UserInfo);
  dart.setMethodSignature(user_info.UserInfo, () => ({
    __proto__: dart.getMethods(user_info.UserInfo.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(user_info.UserInfo, () => ({
    __proto__: dart.getGetters(user_info.UserInfo.__proto__),
    displayName: dart.legacy(core.String),
    email: dart.legacy(core.String),
    phoneNumber: dart.legacy(core.String),
    photoURL: dart.legacy(core.String),
    providerId: dart.legacy(core.String),
    uid: dart.legacy(core.String)
  }));
  dart.setLibraryUri(user_info.UserInfo, L0);
  dart.setFieldSignature(user_info.UserInfo, () => ({
    __proto__: dart.getFields(user_info.UserInfo.__proto__),
    [_data$]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)))
  }));
  dart.defineExtensionMethods(user_info.UserInfo, ['toString']);
  dart.trackLibraries("packages/firebase_auth_platform_interface/src/user_info.dart", {
    "package:firebase_auth_platform_interface/src/user_info.dart": user_info
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["user_info.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;AAkBI,0BAAO,AAAK,oBAAC;IACf;;AAME,0BAAO,AAAK,oBAAC;IACf;;AAOE,0BAAO,AAAK,oBAAC;IACf;;AAOE,0BAAO,AAAK,oBAAC;IACf;;AAIE,0BAAO,AAAK,oBAAC;IACf;;AAIE,0BAAO,AAAK,oBAAC;IACf;;AAIE,YAAgJ,UAAvI,8BAAQ,4BAAe,oBAAW,uBAAU,cAAK,6BAAgB,oBAAW,0BAAa,iBAAQ,4BAAe,mBAAU,qBAAQ,YAAG;IAChJ;;;IA/Cc;;EAAM","file":"../../../../../../../../../../../packages/firebase_auth_platform_interface/src/user_info.dart.lib.js"}');
  // Exports:
  return {
    src__user_info: user_info
  };
}));

//# sourceMappingURL=user_info.dart.lib.js.map
