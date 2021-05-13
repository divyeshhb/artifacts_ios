define(['dart_sdk'], (function load__packages__firebase_auth_platform_interface__src__auth_provider_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var auth_provider = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "package:firebase_auth_platform_interface/src/auth_provider.dart";
  var providerId$ = dart.privateName(auth_provider, "AuthProvider.providerId");
  auth_provider.AuthProvider = class AuthProvider extends core.Object {
    get providerId() {
      return this[providerId$];
    }
    set providerId(value) {
      super.providerId = value;
    }
    toString() {
      return "AuthProvider(providerId: " + dart.str(this.providerId) + ")";
    }
  };
  (auth_provider.AuthProvider.new = function(providerId) {
    this[providerId$] = providerId;
    ;
  }).prototype = auth_provider.AuthProvider.prototype;
  dart.addTypeTests(auth_provider.AuthProvider);
  dart.addTypeCaches(auth_provider.AuthProvider);
  dart.setMethodSignature(auth_provider.AuthProvider, () => ({
    __proto__: dart.getMethods(auth_provider.AuthProvider.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(auth_provider.AuthProvider, L0);
  dart.setFieldSignature(auth_provider.AuthProvider, () => ({
    __proto__: dart.getFields(auth_provider.AuthProvider.__proto__),
    providerId: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(auth_provider.AuthProvider, ['toString']);
  dart.trackLibraries("packages/firebase_auth_platform_interface/src/auth_provider.dart", {
    "package:firebase_auth_platform_interface/src/auth_provider.dart": auth_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auth_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;IAUe;;;;;;;AAIX,YAAO,AAAuC,wCAAZ,mBAAU;IAC9C;;;IARkB;;EAAW","file":"../../../../../../../../../../../packages/firebase_auth_platform_interface/src/auth_provider.dart.lib.js"}');
  // Exports:
  return {
    src__auth_provider: auth_provider
  };
}));

//# sourceMappingURL=auth_provider.dart.lib.js.map
