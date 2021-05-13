define(['dart_sdk'], (function load__packages__google_sign_in_web__src__generated__gapiauth2_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const js_util = dart_sdk.js_util;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var gapiauth2 = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var FutureOfGoogleUserL = () => (FutureOfGoogleUserL = dart.constFn(async.Future$(dart.legacy(dart.anonymousJSType("GoogleUser")))))();
  var FutureLOfGoogleUserL = () => (FutureLOfGoogleUserL = dart.constFn(dart.legacy(FutureOfGoogleUserL())))();
  var dynamicToFutureLOfGoogleUserL = () => (dynamicToFutureLOfGoogleUserL = dart.constFn(dart.fnType(FutureLOfGoogleUserL(), [], [dart.dynamic])))();
  var FutureL = () => (FutureL = dart.constFn(dart.legacy(async.Future)))();
  var OfflineAccessOptionsLToFutureL = () => (OfflineAccessOptionsLToFutureL = dart.constFn(dart.fnType(FutureL(), [], [dart.legacy(dart.anonymousJSType("OfflineAccessOptions"))])))();
  var FutureOfAuthResponseL = () => (FutureOfAuthResponseL = dart.constFn(async.Future$(dart.legacy(dart.anonymousJSType("AuthResponse")))))();
  var FutureLOfAuthResponseL = () => (FutureLOfAuthResponseL = dart.constFn(dart.legacy(FutureOfAuthResponseL())))();
  var VoidToFutureLOfAuthResponseL = () => (VoidToFutureLOfAuthResponseL = dart.constFn(dart.fnType(FutureLOfAuthResponseL(), [])))();
  const CT = Object.create(null);
  gapiauth2['GoogleAuthExtensions|signIn'] = function GoogleAuthExtensions$124signIn($this, options = null) {
    let t = $this;
    let tt = dart.legacy(dart.anonymousJSType("_GoogleAuth")).as(t);
    return js_util.promiseToFuture(dart.legacy(dart.anonymousJSType("GoogleUser")), tt.signIn(options));
  };
  gapiauth2['GoogleAuthExtensions|get#signIn'] = function GoogleAuthExtensions$124get$35signIn($this) {
    return dart.fn((options = null) => gapiauth2['GoogleAuthExtensions|signIn']($this, options), dynamicToFutureLOfGoogleUserL());
  };
  gapiauth2['GoogleAuthExtensions|grantOfflineAccess'] = function GoogleAuthExtensions$124grantOfflineAccess($this, options = null) {
    let t = $this;
    let tt = dart.legacy(dart.anonymousJSType("_GoogleAuth")).as(t);
    return js_util.promiseToFuture(dart.dynamic, tt.grantOfflineAccess(options));
  };
  gapiauth2['GoogleAuthExtensions|get#grantOfflineAccess'] = function GoogleAuthExtensions$124get$35grantOfflineAccess($this) {
    return dart.fn((options = null) => gapiauth2['GoogleAuthExtensions|grantOfflineAccess']($this, options), OfflineAccessOptionsLToFutureL());
  };
  gapiauth2['GoogleUserExtensions|reloadAuthResponse'] = function GoogleUserExtensions$124reloadAuthResponse($this) {
    let t = $this;
    let tt = dart.legacy(dart.anonymousJSType("_GoogleUser")).as(t);
    return js_util.promiseToFuture(dart.legacy(dart.anonymousJSType("AuthResponse")), tt.reloadAuthResponse());
  };
  gapiauth2['GoogleUserExtensions|get#reloadAuthResponse'] = function GoogleUserExtensions$124get$35reloadAuthResponse($this) {
    return dart.fn(() => gapiauth2['GoogleUserExtensions|reloadAuthResponse']($this), VoidToFutureLOfAuthResponseL());
  };
  dart.trackLibraries("packages/google_sign_in_web/src/generated/gapiauth2.dart", {
    "package:google_sign_in_web/src/generated/gapiauth2.dart": gapiauth2
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gapiauth2.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;4FA4EsD;AACrC;AACK,iEAAK,CAAC;AACxB,UAAO,0EAAgB,AAAG,EAAD,QAAQ,OAAO;EAC1C;;AALmB,oBACiC,mEADjC,OAAO;EAK1B;oHAG0B;AACX;AACK,iEAAK,CAAC;AACxB,UAAO,uCAAgB,AAAG,EAAD,oBAAoB,OAAO;EACtD;;AALoC,oBACV,+EADU,OAAO;EAK3C;;AAuTe;AACK,iEAAK,CAAC;AACxB,UAAO,4EAAgB,AAAG,EAAD;EAC3B;;AAJqB;EAIrB","file":"../../../../../../../../../../../../packages/google_sign_in_web/src/generated/gapiauth2.dart.lib.js"}');
  // Exports:
  return {
    src__generated__gapiauth2: gapiauth2
  };
}));

//# sourceMappingURL=gapiauth2.dart.lib.js.map
