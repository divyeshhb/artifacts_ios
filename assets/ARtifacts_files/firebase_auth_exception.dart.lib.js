define(['dart_sdk', 'packages/firebase_core_platform_interface/firebase_core_platform_interface.dart', 'packages/firebase_auth_platform_interface/src/auth_credential.dart'], (function load__packages__firebase_auth_platform_interface__src__firebase_auth_exception_dart(dart_sdk, packages__firebase_core_platform_interface__firebase_core_platform_interface$46dart, packages__firebase_auth_platform_interface__src__auth_credential$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const firebase_core_platform_interface = packages__firebase_core_platform_interface__firebase_core_platform_interface$46dart.firebase_core_platform_interface;
  const auth_credential = packages__firebase_auth_platform_interface__src__auth_credential$46dart.src__auth_credential;
  var firebase_auth_exception = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "package:firebase_auth_platform_interface/src/firebase_auth_exception.dart";
  var code$ = dart.privateName(firebase_auth_exception, "FirebaseAuthException.code");
  var message$ = dart.privateName(firebase_auth_exception, "FirebaseAuthException.message");
  var email$ = dart.privateName(firebase_auth_exception, "FirebaseAuthException.email");
  var credential$ = dart.privateName(firebase_auth_exception, "FirebaseAuthException.credential");
  var phoneNumber$ = dart.privateName(firebase_auth_exception, "FirebaseAuthException.phoneNumber");
  var tenantId$ = dart.privateName(firebase_auth_exception, "FirebaseAuthException.tenantId");
  firebase_auth_exception.FirebaseAuthException = class FirebaseAuthException extends firebase_core_platform_interface.FirebaseException {
    get code() {
      return this[code$];
    }
    set code(value) {
      super.code = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get email() {
      return this[email$];
    }
    set email(value) {
      super.email = value;
    }
    get credential() {
      return this[credential$];
    }
    set credential(value) {
      super.credential = value;
    }
    get phoneNumber() {
      return this[phoneNumber$];
    }
    set phoneNumber(value) {
      super.phoneNumber = value;
    }
    get tenantId() {
      return this[tenantId$];
    }
    set tenantId(value) {
      super.tenantId = value;
    }
  };
  (firebase_auth_exception.FirebaseAuthException.new = function(opts) {
    let message = opts && 'message' in opts ? opts.message : null;
    let code = opts && 'code' in opts ? opts.code : null;
    let email = opts && 'email' in opts ? opts.email : null;
    let credential = opts && 'credential' in opts ? opts.credential : null;
    let phoneNumber = opts && 'phoneNumber' in opts ? opts.phoneNumber : null;
    let tenantId = opts && 'tenantId' in opts ? opts.tenantId : null;
    this[message$] = message;
    this[code$] = code;
    this[email$] = email;
    this[credential$] = credential;
    this[phoneNumber$] = phoneNumber;
    this[tenantId$] = tenantId;
    firebase_auth_exception.FirebaseAuthException.__proto__.new.call(this, {plugin: "firebase_auth", message: message, code: code});
    ;
  }).prototype = firebase_auth_exception.FirebaseAuthException.prototype;
  dart.addTypeTests(firebase_auth_exception.FirebaseAuthException);
  dart.addTypeCaches(firebase_auth_exception.FirebaseAuthException);
  firebase_auth_exception.FirebaseAuthException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(firebase_auth_exception.FirebaseAuthException, L0);
  dart.setFieldSignature(firebase_auth_exception.FirebaseAuthException, () => ({
    __proto__: dart.getFields(firebase_auth_exception.FirebaseAuthException.__proto__),
    code: dart.finalFieldType(dart.legacy(core.String)),
    message: dart.finalFieldType(dart.legacy(core.String)),
    email: dart.finalFieldType(dart.legacy(core.String)),
    credential: dart.finalFieldType(dart.legacy(auth_credential.AuthCredential)),
    phoneNumber: dart.finalFieldType(dart.legacy(core.String)),
    tenantId: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.trackLibraries("packages/firebase_auth_platform_interface/src/firebase_auth_exception.dart", {
    "package:firebase_auth_platform_interface/src/firebase_auth_exception.dart": firebase_auth_exception
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["firebase_auth_exception.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;IAuBe;;;;;;IAGA;;;;;;IAGA;;;;;;IAGQ;;;;;;IAGR;;;;;;IAGA;;;;;;;;QAxBO;QACX;QACA;QACA;QACA;QACA;IALW;IACX;IACA;IACA;IACA;IACA;AACH,oFAAc,0BAA0B,OAAO,QAAQ,IAAI;;EAAC","file":"../../../../../../../../../../../packages/firebase_auth_platform_interface/src/firebase_auth_exception.dart.lib.js"}');
  // Exports:
  return {
    src__firebase_auth_exception: firebase_auth_exception
  };
}));

//# sourceMappingURL=firebase_auth_exception.dart.lib.js.map
