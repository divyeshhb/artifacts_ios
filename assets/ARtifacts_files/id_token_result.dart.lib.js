define(['dart_sdk'], (function load__packages__firebase_auth_platform_interface__src__id_token_result_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var id_token_result = Object.create(dart.library);
  var $_get = dartx._get;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var LinkedHashMapOfStringL$dynamic = () => (LinkedHashMapOfStringL$dynamic = dart.constFn(collection.LinkedHashMap$(StringL(), dart.dynamic)))();
  var IdTokenResultL = () => (IdTokenResultL = dart.constFn(dart.legacy(id_token_result.IdTokenResult)))();
  const CT = Object.create(null);
  var L0 = "package:firebase_auth_platform_interface/src/id_token_result.dart";
  var _data$ = dart.privateName(id_token_result, "_data");
  id_token_result.IdTokenResult = class IdTokenResult extends core.Object {
    get authTime() {
      return this[_data$][$_get]("authTimestamp") == null ? null : new core.DateTime.fromMillisecondsSinceEpoch(core.int.as(this[_data$][$_get]("authTimestamp")));
    }
    get claims() {
      return this[_data$][$_get]("claims") == null ? null : LinkedHashMapOfStringL$dynamic().from(core.Map.as(this[_data$][$_get]("claims")));
    }
    get expirationTime() {
      return this[_data$][$_get]("expirationTimestamp") == null ? null : new core.DateTime.fromMillisecondsSinceEpoch(core.int.as(this[_data$][$_get]("expirationTimestamp")));
    }
    get issuedAtTime() {
      return this[_data$][$_get]("issuedAtTimestamp") == null ? null : new core.DateTime.fromMillisecondsSinceEpoch(core.int.as(this[_data$][$_get]("issuedAtTimestamp")));
    }
    get signInProvider() {
      return StringL().as(this[_data$][$_get]("signInProvider"));
    }
    get token() {
      return StringL().as(this[_data$][$_get]("token"));
    }
    toString() {
      return dart.str(dart.wrapType(IdTokenResultL())) + "(authTime: " + dart.str(this.authTime) + ", claims: " + dart.str(dart.toString(this.claims)) + ", expirationTime: " + dart.str(this.expirationTime) + ", issuedAtTime: " + dart.str(this.issuedAtTime) + ", signInProvider: " + dart.str(this.signInProvider) + ", token: " + dart.str(this.token) + ")";
    }
  };
  (id_token_result.IdTokenResult.new = function(_data) {
    this[_data$] = _data;
    ;
  }).prototype = id_token_result.IdTokenResult.prototype;
  dart.addTypeTests(id_token_result.IdTokenResult);
  dart.addTypeCaches(id_token_result.IdTokenResult);
  dart.setMethodSignature(id_token_result.IdTokenResult, () => ({
    __proto__: dart.getMethods(id_token_result.IdTokenResult.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(id_token_result.IdTokenResult, () => ({
    __proto__: dart.getGetters(id_token_result.IdTokenResult.__proto__),
    authTime: dart.legacy(core.DateTime),
    claims: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)),
    expirationTime: dart.legacy(core.DateTime),
    issuedAtTime: dart.legacy(core.DateTime),
    signInProvider: dart.legacy(core.String),
    token: dart.legacy(core.String)
  }));
  dart.setLibraryUri(id_token_result.IdTokenResult, L0);
  dart.setFieldSignature(id_token_result.IdTokenResult, () => ({
    __proto__: dart.getFields(id_token_result.IdTokenResult.__proto__),
    [_data$]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)))
  }));
  dart.defineExtensionMethods(id_token_result.IdTokenResult, ['toString']);
  dart.trackLibraries("packages/firebase_auth_platform_interface/src/id_token_result.dart", {
    "package:firebase_auth_platform_interface/src/id_token_result.dart": id_token_result
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["id_token_result.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;AAuB2B,YAAA,AAAK,AAAkB,qBAAjB,oBAAoB,OAC7C,OACS,yDAA2B,AAAK,oBAAC;IAAiB;;AAI9B,YAAA,AAAK,AAAW,qBAAV,aAAa,OAChD,OACA,kDAA0B,AAAK,oBAAC;IAAU;;AAGjB,YAAA,AAAK,AAAwB,qBAAvB,0BAA0B,OACzD,OACS,yDAA2B,AAAK,oBAAC;IAAuB;;AAG1C,YAAA,AAAK,AAAsB,qBAArB,wBAAwB,OACrD,OACS,yDAA2B,AAAK,oBAAC;IAAqB;;AAIxC,0BAAA,AAAK,oBAAC;IAAiB;;AAGhC,0BAAA,AAAK,oBAAC;IAAQ;;AAIhC,YAAwL,UAA/K,mCAAa,yBAAY,iBAAQ,wBAAmB,cAAP,gBAAkB,gCAAmB,uBAAc,8BAAiB,qBAAY,gCAAmB,uBAAc,uBAAU,cAAK;IACxL;;;IApCmB;;EAAM","file":"../../../../../../../../../../../packages/firebase_auth_platform_interface/src/id_token_result.dart.lib.js"}');
  // Exports:
  return {
    src__id_token_result: id_token_result
  };
}));

//# sourceMappingURL=id_token_result.dart.lib.js.map
