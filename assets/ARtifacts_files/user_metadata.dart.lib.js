define(['dart_sdk'], (function load__packages__firebase_auth_platform_interface__src__user_metadata_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var user_metadata = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "package:firebase_auth_platform_interface/src/user_metadata.dart";
  var _creationTimestamp$ = dart.privateName(user_metadata, "_creationTimestamp");
  var _lastSignInTime$ = dart.privateName(user_metadata, "_lastSignInTime");
  user_metadata.UserMetadata = class UserMetadata extends core.Object {
    get creationTime() {
      return this[_creationTimestamp$] == null ? null : new core.DateTime.fromMillisecondsSinceEpoch(this[_creationTimestamp$]);
    }
    get lastSignInTime() {
      return this[_lastSignInTime$] == null ? null : new core.DateTime.fromMillisecondsSinceEpoch(this[_lastSignInTime$]);
    }
    toString() {
      return "UserMetadata(creationTime: " + dart.str(dart.toString(this.creationTime)) + ", lastSignInTime: " + dart.str(dart.toString(this.lastSignInTime)) + ")";
    }
  };
  (user_metadata.UserMetadata.new = function(_creationTimestamp, _lastSignInTime) {
    this[_creationTimestamp$] = _creationTimestamp;
    this[_lastSignInTime$] = _lastSignInTime;
    ;
  }).prototype = user_metadata.UserMetadata.prototype;
  dart.addTypeTests(user_metadata.UserMetadata);
  dart.addTypeCaches(user_metadata.UserMetadata);
  dart.setMethodSignature(user_metadata.UserMetadata, () => ({
    __proto__: dart.getMethods(user_metadata.UserMetadata.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(user_metadata.UserMetadata, () => ({
    __proto__: dart.getGetters(user_metadata.UserMetadata.__proto__),
    creationTime: dart.legacy(core.DateTime),
    lastSignInTime: dart.legacy(core.DateTime)
  }));
  dart.setLibraryUri(user_metadata.UserMetadata, L0);
  dart.setFieldSignature(user_metadata.UserMetadata, () => ({
    __proto__: dart.getFields(user_metadata.UserMetadata.__proto__),
    [_creationTimestamp$]: dart.finalFieldType(dart.legacy(core.int)),
    [_lastSignInTime$]: dart.finalFieldType(dart.legacy(core.int))
  }));
  dart.defineExtensionMethods(user_metadata.UserMetadata, ['toString']);
  dart.trackLibraries("packages/firebase_auth_platform_interface/src/user_metadata.dart", {
    "package:firebase_auth_platform_interface/src/user_metadata.dart": user_metadata
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["user_metadata.dart"],"names":[],"mappings":";;;;;;;;;;;;;;AAgB+B,YAAA,AAAmB,8BAAG,OAC7C,OACS,6CAA2B;IAAmB;;AAM9B,YAAA,AAAgB,2BAAG,OAC5C,OACS,6CAA2B;IAAgB;;AAIxD,YAAO,AAAsG,0CAA3D,cAAb,sBAAwB,gCAAmC,cAAf,wBAA0B;IAC7G;;6CArBkB,oBAAyB;IAAzB;IAAyB;;EAAgB","file":"../../../../../../../../../../../packages/firebase_auth_platform_interface/src/user_metadata.dart.lib.js"}');
  // Exports:
  return {
    src__user_metadata: user_metadata
  };
}));

//# sourceMappingURL=user_metadata.dart.lib.js.map
