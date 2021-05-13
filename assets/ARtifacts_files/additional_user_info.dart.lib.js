define(['dart_sdk'], (function load__packages__firebase_auth_platform_interface__src__additional_user_info_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var additional_user_info = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  var AdditionalUserInfoL = () => (AdditionalUserInfoL = dart.constFn(dart.legacy(additional_user_info.AdditionalUserInfo)))();
  const CT = Object.create(null);
  var L0 = "package:firebase_auth_platform_interface/src/additional_user_info.dart";
  var isNewUser$ = dart.privateName(additional_user_info, "AdditionalUserInfo.isNewUser");
  var profile$ = dart.privateName(additional_user_info, "AdditionalUserInfo.profile");
  var providerId$ = dart.privateName(additional_user_info, "AdditionalUserInfo.providerId");
  var username$ = dart.privateName(additional_user_info, "AdditionalUserInfo.username");
  additional_user_info.AdditionalUserInfo = class AdditionalUserInfo extends core.Object {
    get isNewUser() {
      return this[isNewUser$];
    }
    set isNewUser(value) {
      super.isNewUser = value;
    }
    get profile() {
      return this[profile$];
    }
    set profile(value) {
      super.profile = value;
    }
    get providerId() {
      return this[providerId$];
    }
    set providerId(value) {
      super.providerId = value;
    }
    get username() {
      return this[username$];
    }
    set username(value) {
      super.username = value;
    }
    toString() {
      return dart.str(dart.wrapType(AdditionalUserInfoL())) + "(isNewUser: " + dart.str(this.isNewUser) + ", profile: " + dart.str(dart.toString(this.profile)) + ", providerId: " + dart.str(this.providerId) + ", username: " + dart.str(this.username) + ")";
    }
  };
  (additional_user_info.AdditionalUserInfo.new = function(opts) {
    let isNewUser = opts && 'isNewUser' in opts ? opts.isNewUser : null;
    let profile = opts && 'profile' in opts ? opts.profile : null;
    let providerId = opts && 'providerId' in opts ? opts.providerId : null;
    let username = opts && 'username' in opts ? opts.username : null;
    this[isNewUser$] = isNewUser;
    this[profile$] = profile;
    this[providerId$] = providerId;
    this[username$] = username;
    ;
  }).prototype = additional_user_info.AdditionalUserInfo.prototype;
  dart.addTypeTests(additional_user_info.AdditionalUserInfo);
  dart.addTypeCaches(additional_user_info.AdditionalUserInfo);
  dart.setMethodSignature(additional_user_info.AdditionalUserInfo, () => ({
    __proto__: dart.getMethods(additional_user_info.AdditionalUserInfo.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(additional_user_info.AdditionalUserInfo, L0);
  dart.setFieldSignature(additional_user_info.AdditionalUserInfo, () => ({
    __proto__: dart.getFields(additional_user_info.AdditionalUserInfo.__proto__),
    isNewUser: dart.finalFieldType(dart.legacy(core.bool)),
    profile: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))),
    providerId: dart.finalFieldType(dart.legacy(core.String)),
    username: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(additional_user_info.AdditionalUserInfo, ['toString']);
  dart.trackLibraries("packages/firebase_auth_platform_interface/src/additional_user_info.dart", {
    "package:firebase_auth_platform_interface/src/additional_user_info.dart": additional_user_info
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["additional_user_info.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAea;;;;;;IAIgB;;;;;;IAGd;;;;;;IAGA;;;;;;;AAIX,YAAiI,UAAxH,wCAAkB,0BAAa,kBAAS,yBAAqB,cAAR,iBAAmB,4BAAe,mBAAU,0BAAa,iBAAQ;IACjI;;;QAlBU;QAAgB;QAAc;QAAiB;IAA/C;IAAgB;IAAc;IAAiB;;EAAU","file":"../../../../../../../../../../../packages/firebase_auth_platform_interface/src/additional_user_info.dart.lib.js"}');
  // Exports:
  return {
    src__additional_user_info: additional_user_info
  };
}));

//# sourceMappingURL=additional_user_info.dart.lib.js.map
