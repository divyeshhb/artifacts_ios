define(['dart_sdk', 'packages/google_sign_in_web/src/load_gapi.dart', 'packages/google_sign_in_platform_interface/src/utils.dart', 'packages/google_sign_in_platform_interface/src/types.dart', 'packages/flutter/src/services/system_channels.dart', 'packages/google_sign_in_web/src/utils.dart', 'packages/google_sign_in_web/src/generated/gapiauth2.dart'], (function load__packages__google_sign_in_web__google_sign_in_web_dart(dart_sdk, packages__google_sign_in_web__src__load_gapi$46dart, packages__google_sign_in_platform_interface__src__utils$46dart, packages__google_sign_in_platform_interface__src__types$46dart, packages__flutter__src__services__system_channels$46dart, packages__google_sign_in_web__src__utils$46dart, packages__google_sign_in_web__src__generated__gapiauth2$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const load_gapi = packages__google_sign_in_web__src__load_gapi$46dart.src__load_gapi;
  const google_sign_in_platform_interface = packages__google_sign_in_platform_interface__src__utils$46dart.google_sign_in_platform_interface;
  const types = packages__google_sign_in_platform_interface__src__types$46dart.src__types;
  const message_codec = packages__flutter__src__services__system_channels$46dart.src__services__message_codec;
  const utils = packages__google_sign_in_web__src__utils$46dart.src__utils;
  const gapiauth2 = packages__google_sign_in_web__src__generated__gapiauth2$46dart.src__generated__gapiauth2;
  var google_sign_in_web = Object.create(dart.library);
  var $getAttribute = dartx.getAttribute;
  var $contains = dartx.contains;
  var $any = dartx.any;
  var $join = dartx.join;
  var $where = dartx.where;
  var $isEmpty = dartx.isEmpty;
  dart._checkModuleNullSafetyMode(false);
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var FutureLOfvoid = () => (FutureLOfvoid = dart.constFn(dart.legacy(FutureOfvoid())))();
  var voidToFutureLOfvoid = () => (voidToFutureLOfvoid = dart.constFn(dart.fnType(FutureLOfvoid(), [dart.void])))();
  var JSArrayOfFutureLOfvoid = () => (JSArrayOfFutureLOfvoid = dart.constFn(_interceptors.JSArray$(FutureLOfvoid())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StringLToboolL = () => (StringLToboolL = dart.constFn(dart.fnType(boolL(), [StringL()])))();
  var CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  var GoogleAuthLTodynamic = () => (GoogleAuthLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.legacy(dart.lazyJSType(() => dart.global.gapi.auth2.GoogleAuth, "gapi.auth2.GoogleAuth"))])))();
  var GoogleAuthLToLdynamic = () => (GoogleAuthLToLdynamic = dart.constFn(dart.legacy(GoogleAuthLTodynamic())))();
  var GoogleAuthLToNull = () => (GoogleAuthLToNull = dart.constFn(dart.fnType(core.Null, [dart.legacy(dart.lazyJSType(() => dart.global.gapi.auth2.GoogleAuth, "gapi.auth2.GoogleAuth"))])))();
  var GoogleAuthInitFailureErrorLTodynamic = () => (GoogleAuthInitFailureErrorLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.legacy(dart.anonymousJSType("GoogleAuthInitFailureError"))])))();
  var GoogleAuthInitFailureErrorLToLdynamic = () => (GoogleAuthInitFailureErrorLToLdynamic = dart.constFn(dart.legacy(GoogleAuthInitFailureErrorLTodynamic())))();
  var GoogleAuthInitFailureErrorLToNull = () => (GoogleAuthInitFailureErrorLToNull = dart.constFn(dart.fnType(core.Null, [dart.legacy(dart.anonymousJSType("GoogleAuthInitFailureError"))])))();
  var GoogleSignInUserDataL = () => (GoogleSignInUserDataL = dart.constFn(dart.legacy(types.GoogleSignInUserData)))();
  var GoogleSignInTokenDataL = () => (GoogleSignInTokenDataL = dart.constFn(dart.legacy(types.GoogleSignInTokenData)))();
  var FutureOrOfboolL = () => (FutureOrOfboolL = dart.constFn(async.FutureOr$(boolL())))();
  var FutureOrLOfboolL = () => (FutureOrLOfboolL = dart.constFn(dart.legacy(FutureOrOfboolL())))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/google_sign_in_web-0.9.2/lib/google_sign_in_web.dart";
  var L1 = "package:google_sign_in_web/google_sign_in_web.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], StringL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: types.SignInOption.prototype,
        [_name]: "SignInOption.standard",
        index: 0
      });
    }
  }, false);
  var _isGapiInitialized = dart.privateName(google_sign_in_web, "_isGapiInitialized");
  var _isAuthInitialized = dart.privateName(google_sign_in_web, "_isAuthInitialized");
  var _isInitCalled = dart.privateName(google_sign_in_web, "_isInitCalled");
  var _autoDetectedClientId = dart.privateName(google_sign_in_web, "_autoDetectedClientId");
  var _assertIsInitCalled = dart.privateName(google_sign_in_web, "_assertIsInitCalled");
  var C0;
  var _name = dart.privateName(types, "_name");
  var C1;
  google_sign_in_web.GoogleSignInPlugin = class GoogleSignInPlugin extends google_sign_in_platform_interface.GoogleSignInPlatform {
    [_assertIsInitCalled]() {
      if (!dart.test(this[_isInitCalled])) {
        dart.throw(new core.StateError.new("GoogleSignInPlugin::init() must be called before any other method in this plugin."));
      }
    }
    get initialized() {
      this[_assertIsInitCalled]();
      return async.Future.wait(dart.void, JSArrayOfFutureLOfvoid().of([this[_isGapiInitialized], this[_isAuthInitialized]]));
    }
    static registerWith(registrar) {
      google_sign_in_platform_interface.GoogleSignInPlatform.instance = new google_sign_in_web.GoogleSignInPlugin.new();
    }
    init(opts) {
      let hostedDomain = opts && 'hostedDomain' in opts ? opts.hostedDomain : null;
      let scopes = opts && 'scopes' in opts ? opts.scopes : C0 || CT.C0;
      let signInOption = opts && 'signInOption' in opts ? opts.signInOption : C1 || CT.C1;
      let clientId = opts && 'clientId' in opts ? opts.clientId : null;
      return async.async(dart.void, (function* init() {
        let t0;
        let appClientId = (t0 = clientId, t0 == null ? this[_autoDetectedClientId] : t0);
        if (!(appClientId != null)) dart.assertFailed("ClientID not set. Either set it on a " + "<meta name=\"google-signin-client_id\" content=\"CLIENT_ID\" /> tag," + " or pass clientId when calling init()", L0, 76, 9, "appClientId != null");
        if (!!dart.test(scopes[$any](dart.fn(scope => scope[$contains](" "), StringLToboolL())))) dart.assertFailed("OAuth 2.0 Scopes for Google APIs can't contain spaces." + "Check https://developers.google.com/identity/protocols/googlescopes " + "for a list of valid OAuth 2.0 scopes.", L0, 82, 9, "!scopes.any((String scope) => scope.contains(' '))");
        yield this[_isGapiInitialized];
        let auth = dart.global.gapi.auth2.init({hosted_domain: hostedDomain, scope: scopes[$join](" "), client_id: appClientId});
        let isAuthInitialized = CompleterOfvoid().new();
        this[_isAuthInitialized] = isAuthInitialized.future;
        this[_isInitCalled] = true;
        auth.then(js.allowInterop(GoogleAuthLToLdynamic(), dart.fn(initializedAuth => {
          isAuthInitialized.complete();
        }, GoogleAuthLToNull())), js.allowInterop(GoogleAuthInitFailureErrorLToLdynamic(), dart.fn(reason => {
          isAuthInitialized.completeError(new message_codec.PlatformException.new({code: reason.error, message: reason.details, details: "https://developers.google.com/identity/sign-in/web/reference#error_codes"}));
        }, GoogleAuthInitFailureErrorLToNull())));
        return this[_isAuthInitialized];
      }).bind(this));
    }
    signInSilently() {
      return async.async(GoogleSignInUserDataL(), (function* signInSilently() {
        yield this.initialized;
        return utils.gapiUserToPluginUserData(yield dart.global.gapi.auth2.getAuthInstance().currentUser.get());
      }).bind(this));
    }
    signIn() {
      return async.async(GoogleSignInUserDataL(), (function* signIn() {
        yield this.initialized;
        try {
          return utils.gapiUserToPluginUserData(yield gapiauth2['GoogleAuthExtensions|signIn'](dart.global.gapi.auth2.getAuthInstance()));
        } catch (e) {
          let reason = dart.getThrown(e);
          if (dart.legacy(dart.anonymousJSType("GoogleAuthSignInError")).is(reason)) {
            dart.throw(new message_codec.PlatformException.new({code: reason.error, message: "Exception raised from GoogleAuth.signIn()", details: "https://developers.google.com/identity/sign-in/web/reference#error_codes_2"}));
          } else
            throw e;
        }
      }).bind(this));
    }
    getTokens(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let shouldRecoverAuth = opts && 'shouldRecoverAuth' in opts ? opts.shouldRecoverAuth : null;
      return async.async(GoogleSignInTokenDataL(), (function* getTokens() {
        let t1, t1$;
        yield this.initialized;
        let currentUser = (t1$ = (t1 = dart.global.gapi.auth2.getAuthInstance(), t1 == null ? null : t1.currentUser), t1$ == null ? null : t1$.get());
        let response = currentUser.getAuthResponse();
        return new types.GoogleSignInTokenData.new({idToken: response.id_token, accessToken: response.access_token});
      }).bind(this));
    }
    signOut() {
      return async.async(dart.void, (function* signOut() {
        yield this.initialized;
        return dart.global.gapi.auth2.getAuthInstance().signOut();
      }).bind(this));
    }
    disconnect() {
      return async.async(dart.void, (function* disconnect() {
        let t1, t1$;
        yield this.initialized;
        let currentUser = (t1$ = (t1 = dart.global.gapi.auth2.getAuthInstance(), t1 == null ? null : t1.currentUser), t1$ == null ? null : t1$.get());
        return currentUser.disconnect();
      }).bind(this));
    }
    isSignedIn() {
      return async.async(boolL(), (function* isSignedIn() {
        let t1, t1$;
        yield this.initialized;
        let currentUser = (t1$ = (t1 = dart.global.gapi.auth2.getAuthInstance(), t1 == null ? null : t1.currentUser), t1$ == null ? null : t1$.get());
        return currentUser.isSignedIn();
      }).bind(this));
    }
    clearAuthCache(opts) {
      let token = opts && 'token' in opts ? opts.token : null;
      return async.async(dart.void, (function* clearAuthCache() {
        yield this.initialized;
        return dart.global.gapi.auth2.getAuthInstance().disconnect();
      }).bind(this));
    }
    requestScopes(scopes) {
      return async.async(boolL(), (function* requestScopes() {
        let t1, t1$, t1$0;
        yield this.initialized;
        let currentUser = (t1$ = (t1 = dart.global.gapi.auth2.getAuthInstance(), t1 == null ? null : t1.currentUser), t1$ == null ? null : t1$.get());
        if (currentUser == null) return false;
        let grantedScopes = currentUser.getGrantedScopes();
        let missingScopes = scopes[$where](dart.fn(scope => !grantedScopes[$contains](scope), StringLToboolL()));
        if (dart.test(missingScopes[$isEmpty])) return true;
        return FutureOrLOfboolL().as((t1$0 = currentUser.grant({scope: missingScopes[$join](" ")}), t1$0 == null ? false : t1$0));
      }).bind(this));
    }
  };
  (google_sign_in_web.GoogleSignInPlugin.new = function() {
    let t0;
    this[_isGapiInitialized] = null;
    this[_isAuthInitialized] = null;
    this[_isInitCalled] = false;
    this[_autoDetectedClientId] = null;
    this[_autoDetectedClientId] = (t0 = html.querySelector(google_sign_in_web._kClientIdMetaSelector), t0 == null ? null : t0[$getAttribute]("content"));
    this[_isGapiInitialized] = load_gapi.inject(google_sign_in_web.gapiUrl).then(dart.void, dart.fn(_ => load_gapi.init(), voidToFutureLOfvoid()));
  }).prototype = google_sign_in_web.GoogleSignInPlugin.prototype;
  dart.addTypeTests(google_sign_in_web.GoogleSignInPlugin);
  dart.addTypeCaches(google_sign_in_web.GoogleSignInPlugin);
  dart.setMethodSignature(google_sign_in_web.GoogleSignInPlugin, () => ({
    __proto__: dart.getMethods(google_sign_in_web.GoogleSignInPlugin.__proto__),
    [_assertIsInitCalled]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(google_sign_in_web.GoogleSignInPlugin, () => ({
    __proto__: dart.getGetters(google_sign_in_web.GoogleSignInPlugin.__proto__),
    initialized: dart.legacy(async.Future$(dart.void))
  }));
  dart.setLibraryUri(google_sign_in_web.GoogleSignInPlugin, L1);
  dart.setFieldSignature(google_sign_in_web.GoogleSignInPlugin, () => ({
    __proto__: dart.getFields(google_sign_in_web.GoogleSignInPlugin.__proto__),
    [_isGapiInitialized]: dart.fieldType(dart.legacy(async.Future$(dart.void))),
    [_isAuthInitialized]: dart.fieldType(dart.legacy(async.Future$(dart.void))),
    [_isInitCalled]: dart.fieldType(dart.legacy(core.bool)),
    [_autoDetectedClientId]: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(google_sign_in_web, {
    /*google_sign_in_web._kClientIdMetaSelector*/get _kClientIdMetaSelector() {
      return "meta[name=google-signin-client_id]";
    },
    /*google_sign_in_web._kClientIdAttributeName*/get _kClientIdAttributeName() {
      return "content";
    },
    /*google_sign_in_web.gapiUrl*/get gapiUrl() {
      return "https://apis.google.com/js/platform.js";
    },
    set gapiUrl(_) {}
  }, true);
  dart.trackLibraries("packages/google_sign_in_web/google_sign_in_web.dart", {
    "package:google_sign_in_web/google_sign_in_web.dart": google_sign_in_web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["google_sign_in_web.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+CI,qBAAK;AAEqF,QADxF,WAAM,wBACF;;IAER;;AAKuB,MAArB;AACA,YAAc,8BAAK,6BAAC,0BAAoB;IAC1C;wBAKmC;AACmB,MAA/B,kEAAW;IAClC;;UAIsB;UACL;UACA;UACN;AAJM;;AAKF,2BAAuB,KAAT,QAAQ,QAAR,OAAY;AACvC,cACI,AAAY,WAAD,IAAI,yBAAI,AACnB,0CACA,yEACA;AAEJ,aACI,WAAC,AAAO,MAAD,OAAK,QAAQ,SAAU,AAAM,KAAD,YAAU,6CAAK,AAClD,2DACA,yEACA;AAEoB,QAAxB,MAAM;AAEiB,mBAAO,4BAAiB,gBAC9B,YAAY,SAEpB,AAAO,MAAD,QAAM,iBACR,WAAW;AAGR,gCAAoB;AACS,QAA7C,2BAAqB,AAAkB,iBAAD;AAClB,QAApB,sBAAgB;AAkBb,QAhBH,AAAK,IAAD,MAAM,yCAAa,QAAkB;AAOX,UAA5B,AAAkB,iBAAD;kCACf,yDAAa,QAAkC;AAO/C,UALF,AAAkB,iBAAD,eAAe,+CACxB,AAAO,MAAD,iBACH,AAAO,MAAD,mBAEX;;AAIR,cAAO;MACT;;;AAG2C;AACxB,QAAjB,MAAM;AAEN,cAAO,gCACH,MAAM,AAAwB,AAAY;MAChD;;;AAGmC;AAChB,QAAjB,MAAM;AACN;AACE,gBAAO,gCAAyB,MAA8B,yCAAxB;;cACA;AAAtC;AAMC,YALD,WAAM,+CACE,AAAO,MAAD,iBACH,sDAEL;;;;MAGV;;;UAIsB;UAAY;AADK;;AAEpB,QAAjB,MAAM;AAEiB,8FACnB,OAAyB,+BAAzB,OAAsC;AACjB,uBAAW,AAAY,WAAD;AAE/C,cAAO,+CACM,AAAS,QAAD,wBAAwB,AAAS,QAAD;MACvD;;;AAGoB;AACD,QAAjB,MAAM;AAEN,cAAO,AAAwB;MACjC;;;AAGuB;;AACJ,QAAjB,MAAM;AAEiB,8FACnB,OAAyB,+BAAzB,OAAsC;AAC1C,cAAO,AAAY,YAAD;MACpB;;;AAGuB;;AACJ,QAAjB,MAAM;AAEiB,8FACnB,OAAyB,+BAAzB,OAAsC;AAC1C,cAAO,AAAY,YAAD;MACpB;;;UAGoC;AAAT;AACR,QAAjB,MAAM;AAEN,cAAO,AAAwB;MACjC;;kBAGwC;AAAd;;AACP,QAAjB,MAAM;AAEA,8FAAc,OAAyB,+BAAzB,OAAsC;AAE1D,YAAI,AAAY,WAAD,IAAI,MAAM,MAAO;AAE1B,4BAAgB,AAAY,WAAD;AAC3B,4BACF,AAAO,MAAD,SAAO,QAAC,SAAU,CAAC,AAAc,aAAD,YAAU,KAAK;AAEzD,sBAAI,AAAc,aAAD,aAAU,MAAO;AAElC,sCACoE,OAD7D,AACE,WADS,OACG,QAAqB,AAAc,aAAD,QAAM,gBAApD,OACL;MACN;;;;;IAtKa;IACA;IACR,sBAAgB;IAmBd;AA1BsC,IAF3C,oCAAwB,mBACL,yDADK,OAElB;AAE4D,IAAlE,2BAAqB,AAAqB,iBAAT,4CAAc,QAAC,KAAM;EACxD;;;;;;;;;;;;;;;;;;;;MApBW,yCAAsB;;;MACtB,0CAAuB;;;MAK7B,0BAAO;YAAG","file":"../../../../../../../../../../packages/google_sign_in_web/google_sign_in_web.dart.lib.js"}');
  // Exports:
  return {
    google_sign_in_web: google_sign_in_web
  };
}));

//# sourceMappingURL=google_sign_in_web.dart.lib.js.map
