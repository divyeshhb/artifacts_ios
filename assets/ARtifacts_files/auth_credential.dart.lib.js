define(['dart_sdk'], (function load__packages__firebase_auth_platform_interface__src__auth_credential_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var auth_credential = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth_platform_interface-2.1.2/lib/src/auth_credential.dart";
  var L1 = "package:firebase_auth_platform_interface/src/auth_credential.dart";
  var providerId$ = dart.privateName(auth_credential, "AuthCredential.providerId");
  var signInMethod$ = dart.privateName(auth_credential, "AuthCredential.signInMethod");
  var token$ = dart.privateName(auth_credential, "AuthCredential.token");
  auth_credential.AuthCredential = class AuthCredential extends core.Object {
    get providerId() {
      return this[providerId$];
    }
    set providerId(value) {
      super.providerId = value;
    }
    get signInMethod() {
      return this[signInMethod$];
    }
    set signInMethod(value) {
      super.signInMethod = value;
    }
    get token() {
      return this[token$];
    }
    set token(value) {
      super.token = value;
    }
    asMap() {
      return new (IdentityMapOfStringL$dynamic()).from(["providerId", this.providerId, "signInMethod", this.signInMethod, "token", this.token]);
    }
    toString() {
      return "AuthCredential(providerId: " + dart.str(this.providerId) + ", signInMethod: " + dart.str(this.signInMethod) + ", token: " + dart.str(this.token) + ")";
    }
  };
  (auth_credential.AuthCredential.new = function(opts) {
    let providerId = opts && 'providerId' in opts ? opts.providerId : null;
    let signInMethod = opts && 'signInMethod' in opts ? opts.signInMethod : null;
    let token = opts && 'token' in opts ? opts.token : null;
    this[providerId$] = providerId;
    this[signInMethod$] = signInMethod;
    this[token$] = token;
    if (!(providerId != null)) dart.assertFailed(null, L0, 17, 16, "providerId != null");
    if (!(signInMethod != null)) dart.assertFailed(null, L0, 18, 16, "signInMethod != null");
    ;
  }).prototype = auth_credential.AuthCredential.prototype;
  dart.addTypeTests(auth_credential.AuthCredential);
  dart.addTypeCaches(auth_credential.AuthCredential);
  dart.setMethodSignature(auth_credential.AuthCredential, () => ({
    __proto__: dart.getMethods(auth_credential.AuthCredential.__proto__),
    asMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(auth_credential.AuthCredential, L1);
  dart.setFieldSignature(auth_credential.AuthCredential, () => ({
    __proto__: dart.getFields(auth_credential.AuthCredential.__proto__),
    providerId: dart.finalFieldType(dart.legacy(core.String)),
    signInMethod: dart.finalFieldType(dart.legacy(core.String)),
    token: dart.finalFieldType(dart.legacy(core.int))
  }));
  dart.defineExtensionMethods(auth_credential.AuthCredential, ['toString']);
  dart.trackLibraries("packages/firebase_auth_platform_interface/src/auth_credential.dart", {
    "package:firebase_auth_platform_interface/src/auth_credential.dart": auth_credential
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auth_credential.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;IAqBe;;;;;;IAKA;;;;;;IAGH;;;;;;;AAIR,YAAwB,4CACtB,cAAc,iBACd,gBAAgB,mBAChB,SAAS;IAEb;;AAII,YAAA,AAAqF,0CAAxD,mBAAU,8BAAiB,qBAAY,uBAAU,cAAK;IAAE;;;QA7BxE;QACA;QACV;IAFU;IACA;IACV;UACM,AAAW,UAAD,IAAI;UACd,AAAa,YAAD,IAAI;;EAAK","file":"../../../../../../../../../../../packages/firebase_auth_platform_interface/src/auth_credential.dart.lib.js"}');
  // Exports:
  return {
    src__auth_credential: auth_credential
  };
}));

//# sourceMappingURL=auth_credential.dart.lib.js.map
