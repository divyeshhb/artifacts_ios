define(['dart_sdk', 'packages/google_sign_in_platform_interface/src/types.dart', 'packages/google_sign_in_platform_interface/src/utils.dart', 'packages/google_sign_in/src/common.dart', 'packages/flutter/src/services/system_channels.dart'], (function load__packages__google_sign_in__google_sign_in_dart(dart_sdk, packages__google_sign_in_platform_interface__src__types$46dart, packages__google_sign_in_platform_interface__src__utils$46dart, packages__google_sign_in__src__common$46dart, packages__flutter__src__services__system_channels$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const types = packages__google_sign_in_platform_interface__src__types$46dart.src__types;
  const google_sign_in_platform_interface = packages__google_sign_in_platform_interface__src__utils$46dart.google_sign_in_platform_interface;
  const common = packages__google_sign_in__src__common$46dart.src__common;
  const message_codec = packages__flutter__src__services__system_channels$46dart.src__services__message_codec;
  var google_sign_in = Object.create(dart.library);
  var $toString = dartx.toString;
  var $_equals = dartx._equals;
  var $hashCode = dartx.hashCode;
  dart._checkModuleNullSafetyMode(false);
  var GoogleSignInAuthenticationL = () => (GoogleSignInAuthenticationL = dart.constFn(dart.legacy(google_sign_in.GoogleSignInAuthentication)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var MapOfStringL$StringL = () => (MapOfStringL$StringL = dart.constFn(core.Map$(StringL(), StringL())))();
  var MapLOfStringL$StringL = () => (MapLOfStringL$StringL = dart.constFn(dart.legacy(MapOfStringL$StringL())))();
  var GoogleSignInAccountL = () => (GoogleSignInAccountL = dart.constFn(dart.legacy(google_sign_in.GoogleSignInAccount)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var StreamControllerOfGoogleSignInAccountL = () => (StreamControllerOfGoogleSignInAccountL = dart.constFn(async.StreamController$(GoogleSignInAccountL())))();
  var GoogleSignInUserDataL = () => (GoogleSignInUserDataL = dart.constFn(dart.legacy(types.GoogleSignInUserData)))();
  var dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  var FutureOrOfGoogleSignInAccountL = () => (FutureOrOfGoogleSignInAccountL = dart.constFn(async.FutureOr$(GoogleSignInAccountL())))();
  var FutureOrLOfGoogleSignInAccountL = () => (FutureOrLOfGoogleSignInAccountL = dart.constFn(dart.legacy(FutureOrOfGoogleSignInAccountL())))();
  var voidToFutureOrLOfGoogleSignInAccountL = () => (voidToFutureOrLOfGoogleSignInAccountL = dart.constFn(dart.fnType(FutureOrLOfGoogleSignInAccountL(), [dart.void])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var PlatformExceptionL = () => (PlatformExceptionL = dart.constFn(dart.legacy(message_codec.PlatformException)))();
  var dynamicToboolL = () => (dynamicToboolL = dart.constFn(dart.fnType(boolL(), [dart.dynamic])))();
  const CT = Object.create(null);
  var L0 = "package:google_sign_in/google_sign_in.dart";
  var L1 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/google_sign_in-4.5.5/lib/google_sign_in.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: types.SignInOption.prototype,
        [_name]: "SignInOption.standard",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.constList([], StringL());
    }
  }, false);
  var _data$ = dart.privateName(google_sign_in, "_data");
  google_sign_in.GoogleSignInAuthentication = class GoogleSignInAuthentication extends core.Object {
    get idToken() {
      return this[_data$].idToken;
    }
    get accessToken() {
      return this[_data$].accessToken;
    }
    get serverAuthCode() {
      return this[_data$].serverAuthCode;
    }
    toString() {
      return "GoogleSignInAuthentication:" + dart.str(this[_data$]);
    }
  };
  (google_sign_in.GoogleSignInAuthentication.__ = function(_data) {
    this[_data$] = _data;
    ;
  }).prototype = google_sign_in.GoogleSignInAuthentication.prototype;
  dart.addTypeTests(google_sign_in.GoogleSignInAuthentication);
  dart.addTypeCaches(google_sign_in.GoogleSignInAuthentication);
  dart.setMethodSignature(google_sign_in.GoogleSignInAuthentication, () => ({
    __proto__: dart.getMethods(google_sign_in.GoogleSignInAuthentication.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(google_sign_in.GoogleSignInAuthentication, () => ({
    __proto__: dart.getGetters(google_sign_in.GoogleSignInAuthentication.__proto__),
    idToken: dart.legacy(core.String),
    accessToken: dart.legacy(core.String),
    serverAuthCode: dart.legacy(core.String)
  }));
  dart.setLibraryUri(google_sign_in.GoogleSignInAuthentication, L0);
  dart.setFieldSignature(google_sign_in.GoogleSignInAuthentication, () => ({
    __proto__: dart.getFields(google_sign_in.GoogleSignInAuthentication.__proto__),
    [_data$]: dart.finalFieldType(dart.legacy(types.GoogleSignInTokenData))
  }));
  dart.defineExtensionMethods(google_sign_in.GoogleSignInAuthentication, ['toString']);
  var _googleSignIn$ = dart.privateName(google_sign_in, "_googleSignIn");
  var _idToken = dart.privateName(google_sign_in, "_idToken");
  var displayName = dart.privateName(google_sign_in, "GoogleSignInAccount.displayName");
  var email = dart.privateName(google_sign_in, "GoogleSignInAccount.email");
  var id = dart.privateName(google_sign_in, "GoogleSignInAccount.id");
  var photoUrl = dart.privateName(google_sign_in, "GoogleSignInAccount.photoUrl");
  google_sign_in.GoogleSignInAccount = class GoogleSignInAccount extends core.Object {
    get displayName() {
      return this[displayName];
    }
    set displayName(value) {
      super.displayName = value;
    }
    get email() {
      return this[email];
    }
    set email(value) {
      super.email = value;
    }
    get id() {
      return this[id];
    }
    set id(value) {
      super.id = value;
    }
    get photoUrl() {
      return this[photoUrl];
    }
    set photoUrl(value) {
      super.photoUrl = value;
    }
    get authentication() {
      return async.async(GoogleSignInAuthenticationL(), (function* authentication() {
        if (!dart.equals(this[_googleSignIn$].currentUser, this)) {
          dart.throw(new core.StateError.new("User is no longer signed in."));
        }
        let response = (yield google_sign_in_platform_interface.GoogleSignInPlatform.instance.getTokens({email: this.email, shouldRecoverAuth: true}));
        if (response.idToken == null) {
          response.idToken = this[_idToken];
        }
        return new google_sign_in.GoogleSignInAuthentication.__(response);
      }).bind(this));
    }
    get authHeaders() {
      return async.async(MapLOfStringL$StringL(), (function* authHeaders() {
        let token = (yield this.authentication).accessToken;
        return new (IdentityMapOfStringL$StringL()).from(["Authorization", "Bearer " + dart.str(token), "X-Goog-AuthUser", "0"]);
      }).bind(this));
    }
    clearAuthCache() {
      return async.async(dart.void, (function* clearAuthCache() {
        let token = (yield this.authentication).accessToken;
        yield google_sign_in_platform_interface.GoogleSignInPlatform.instance.clearAuthCache({token: token});
      }).bind(this));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!GoogleSignInAccountL().is(other)) return false;
      let otherAccount = GoogleSignInAccountL().as(other);
      return this.displayName == otherAccount.displayName && this.email == otherAccount.email && this.id == otherAccount.id && this.photoUrl == otherAccount.photoUrl && this[_idToken] == otherAccount[_idToken];
    }
    get hashCode() {
      return ui.hashValues(this.displayName, this.email, this.id, this.photoUrl, this[_idToken]);
    }
    toString() {
      let data = new (IdentityMapOfStringL$dynamic()).from(["displayName", this.displayName, "email", this.email, "id", this.id, "photoUrl", this.photoUrl]);
      return "GoogleSignInAccount:" + dart.str(data);
    }
  };
  (google_sign_in.GoogleSignInAccount.__ = function(_googleSignIn, data) {
    this[_googleSignIn$] = _googleSignIn;
    this[displayName] = data.displayName;
    this[email] = data.email;
    this[id] = data.id;
    this[photoUrl] = data.photoUrl;
    this[_idToken] = data.idToken;
    if (!(this.id != null)) dart.assertFailed(null, L1, 48, 12, "id != null");
  }).prototype = google_sign_in.GoogleSignInAccount.prototype;
  dart.addTypeTests(google_sign_in.GoogleSignInAccount);
  dart.addTypeCaches(google_sign_in.GoogleSignInAccount);
  google_sign_in.GoogleSignInAccount[dart.implements] = () => [common.GoogleIdentity];
  dart.setMethodSignature(google_sign_in.GoogleSignInAccount, () => ({
    __proto__: dart.getMethods(google_sign_in.GoogleSignInAccount.__proto__),
    clearAuthCache: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(google_sign_in.GoogleSignInAccount, () => ({
    __proto__: dart.getGetters(google_sign_in.GoogleSignInAccount.__proto__),
    authentication: dart.legacy(async.Future$(dart.legacy(google_sign_in.GoogleSignInAuthentication))),
    authHeaders: dart.legacy(async.Future$(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))))),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(google_sign_in.GoogleSignInAccount, L0);
  dart.setFieldSignature(google_sign_in.GoogleSignInAccount, () => ({
    __proto__: dart.getFields(google_sign_in.GoogleSignInAccount.__proto__),
    displayName: dart.finalFieldType(dart.legacy(core.String)),
    email: dart.finalFieldType(dart.legacy(core.String)),
    id: dart.finalFieldType(dart.legacy(core.String)),
    photoUrl: dart.finalFieldType(dart.legacy(core.String)),
    [_idToken]: dart.finalFieldType(dart.legacy(core.String)),
    [_googleSignIn$]: dart.finalFieldType(dart.legacy(google_sign_in.GoogleSignIn))
  }));
  dart.defineExtensionMethods(google_sign_in.GoogleSignInAccount, ['_equals', 'toString']);
  dart.defineExtensionAccessors(google_sign_in.GoogleSignInAccount, ['hashCode']);
  dart.defineLazy(google_sign_in.GoogleSignInAccount, {
    /*google_sign_in.GoogleSignInAccount.kFailedToRecoverAuthError*/get kFailedToRecoverAuthError() {
      return "failed_to_recover_auth";
    },
    /*google_sign_in.GoogleSignInAccount.kUserRecoverableAuthError*/get kUserRecoverableAuthError() {
      return "user_recoverable_auth";
    }
  }, true);
  var _name = dart.privateName(types, "_name");
  var C0;
  var C1;
  var _currentUserController = dart.privateName(google_sign_in, "_currentUserController");
  var _initialization = dart.privateName(google_sign_in, "_initialization");
  var _lastMethodCall = dart.privateName(google_sign_in, "_lastMethodCall");
  var _currentUser = dart.privateName(google_sign_in, "_currentUser");
  var _ensureInitialized = dart.privateName(google_sign_in, "_ensureInitialized");
  var _setCurrentUser = dart.privateName(google_sign_in, "_setCurrentUser");
  var _callMethod = dart.privateName(google_sign_in, "_callMethod");
  var _addMethodCall = dart.privateName(google_sign_in, "_addMethodCall");
  var signInOption$ = dart.privateName(google_sign_in, "GoogleSignIn.signInOption");
  var scopes$ = dart.privateName(google_sign_in, "GoogleSignIn.scopes");
  var hostedDomain$ = dart.privateName(google_sign_in, "GoogleSignIn.hostedDomain");
  var clientId$ = dart.privateName(google_sign_in, "GoogleSignIn.clientId");
  google_sign_in.GoogleSignIn = class GoogleSignIn extends core.Object {
    get signInOption() {
      return this[signInOption$];
    }
    set signInOption(value) {
      super.signInOption = value;
    }
    get scopes() {
      return this[scopes$];
    }
    set scopes(value) {
      super.scopes = value;
    }
    get hostedDomain() {
      return this[hostedDomain$];
    }
    set hostedDomain(value) {
      super.hostedDomain = value;
    }
    get clientId() {
      return this[clientId$];
    }
    set clientId(value) {
      super.clientId = value;
    }
    static standard(opts) {
      let scopes = opts && 'scopes' in opts ? opts.scopes : C1 || CT.C1;
      let hostedDomain = opts && 'hostedDomain' in opts ? opts.hostedDomain : null;
      return new google_sign_in.GoogleSignIn.new({signInOption: types.SignInOption.standard, scopes: scopes, hostedDomain: hostedDomain});
    }
    static games() {
      return new google_sign_in.GoogleSignIn.new({signInOption: types.SignInOption.games});
    }
    get onCurrentUserChanged() {
      return this[_currentUserController].stream;
    }
    [_callMethod](method) {
      return async.async(GoogleSignInAccountL(), (function* _callMethod() {
        yield this[_ensureInitialized]();
        let response = (yield dart.dcall(method, []));
        return this[_setCurrentUser](response != null && GoogleSignInUserDataL().is(response) ? new google_sign_in.GoogleSignInAccount.__(this, response) : null);
      }).bind(this));
    }
    [_setCurrentUser](currentUser) {
      if (!dart.equals(currentUser, this[_currentUser])) {
        this[_currentUser] = currentUser;
        this[_currentUserController].add(this[_currentUser]);
      }
      return this[_currentUser];
    }
    [_ensureInitialized]() {
      let t1, t0;
      t0 = this[_initialization];
      return t0 == null ? this[_initialization] = (t1 = google_sign_in_platform_interface.GoogleSignInPlatform.instance.init({signInOption: this.signInOption, scopes: this.scopes, hostedDomain: this.hostedDomain, clientId: this.clientId}), (() => {
        t1.catchError(dart.fn(_ => {
          this[_initialization] = null;
        }, dynamicToNull()));
        return t1;
      })()) : t0;
    }
    static _waitFor(future) {
      let completer = CompleterOfvoid().new();
      future.whenComplete(dart.bind(completer, 'complete')).catchError(dart.fn(_ => {
      }, dynamicToNull()));
      return completer.future;
    }
    [_addMethodCall](method, opts) {
      let canSkipCall = opts && 'canSkipCall' in opts ? opts.canSkipCall : false;
      return async.async(GoogleSignInAccountL(), (function* _addMethodCall() {
        let response = null;
        if (this[_lastMethodCall] == null) {
          response = this[_callMethod](method);
        } else {
          response = this[_lastMethodCall].then(GoogleSignInAccountL(), dart.fn(_ => {
            if (dart.test(canSkipCall) && this[_currentUser] != null) {
              return this[_currentUser];
            }
            return this[_callMethod](method);
          }, voidToFutureOrLOfGoogleSignInAccountL()));
        }
        this[_lastMethodCall] = google_sign_in.GoogleSignIn._waitFor(response);
        return response;
      }).bind(this));
    }
    get currentUser() {
      return this[_currentUser];
    }
    signInSilently(opts) {
      let suppressErrors = opts && 'suppressErrors' in opts ? opts.suppressErrors : true;
      return async.async(GoogleSignInAccountL(), (function* signInSilently() {
        try {
          return yield this[_addMethodCall](dart.bind(google_sign_in_platform_interface.GoogleSignInPlatform.instance, 'signInSilently'), {canSkipCall: true});
        } catch (e) {
          let _ = dart.getThrown(e);
          if (dart.test(suppressErrors)) {
            return null;
          } else {
            dart.rethrow(e);
          }
        }
      }).bind(this));
    }
    isSignedIn() {
      return async.async(boolL(), (function* isSignedIn() {
        yield this[_ensureInitialized]();
        return google_sign_in_platform_interface.GoogleSignInPlatform.instance.isSignedIn();
      }).bind(this));
    }
    signIn() {
      let result = this[_addMethodCall](dart.bind(google_sign_in_platform_interface.GoogleSignInPlatform.instance, 'signIn'), {canSkipCall: true});
      function isCanceled(error) {
        return PlatformExceptionL().is(error) && error.code === "sign_in_canceled";
      }
      dart.fn(isCanceled, dynamicToboolL());
      return result.catchError(dart.fn(_ => null, dynamicToNull()), {test: isCanceled});
    }
    signOut() {
      return this[_addMethodCall](dart.bind(google_sign_in_platform_interface.GoogleSignInPlatform.instance, 'signOut'));
    }
    disconnect() {
      return this[_addMethodCall](dart.bind(google_sign_in_platform_interface.GoogleSignInPlatform.instance, 'disconnect'));
    }
    requestScopes(scopes) {
      return async.async(boolL(), (function* requestScopes() {
        yield this[_ensureInitialized]();
        return google_sign_in_platform_interface.GoogleSignInPlatform.instance.requestScopes(scopes);
      }).bind(this));
    }
  };
  (google_sign_in.GoogleSignIn.new = function(opts) {
    let signInOption = opts && 'signInOption' in opts ? opts.signInOption : C0 || CT.C0;
    let scopes = opts && 'scopes' in opts ? opts.scopes : C1 || CT.C1;
    let hostedDomain = opts && 'hostedDomain' in opts ? opts.hostedDomain : null;
    let clientId = opts && 'clientId' in opts ? opts.clientId : null;
    this[_currentUserController] = StreamControllerOfGoogleSignInAccountL().broadcast();
    this[_initialization] = null;
    this[_lastMethodCall] = null;
    this[_currentUser] = null;
    this[signInOption$] = signInOption;
    this[scopes$] = scopes;
    this[hostedDomain$] = hostedDomain;
    this[clientId$] = clientId;
    ;
  }).prototype = google_sign_in.GoogleSignIn.prototype;
  dart.addTypeTests(google_sign_in.GoogleSignIn);
  dart.addTypeCaches(google_sign_in.GoogleSignIn);
  dart.setMethodSignature(google_sign_in.GoogleSignIn, () => ({
    __proto__: dart.getMethods(google_sign_in.GoogleSignIn.__proto__),
    [_callMethod]: dart.fnType(dart.legacy(async.Future$(dart.legacy(google_sign_in.GoogleSignInAccount))), [dart.legacy(core.Function)]),
    [_setCurrentUser]: dart.fnType(dart.legacy(google_sign_in.GoogleSignInAccount), [dart.legacy(google_sign_in.GoogleSignInAccount)]),
    [_ensureInitialized]: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    [_addMethodCall]: dart.fnType(dart.legacy(async.Future$(dart.legacy(google_sign_in.GoogleSignInAccount))), [dart.legacy(core.Function)], {canSkipCall: dart.legacy(core.bool)}, {}),
    signInSilently: dart.fnType(dart.legacy(async.Future$(dart.legacy(google_sign_in.GoogleSignInAccount))), [], {suppressErrors: dart.legacy(core.bool)}, {}),
    isSignedIn: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), []),
    signIn: dart.fnType(dart.legacy(async.Future$(dart.legacy(google_sign_in.GoogleSignInAccount))), []),
    signOut: dart.fnType(dart.legacy(async.Future$(dart.legacy(google_sign_in.GoogleSignInAccount))), []),
    disconnect: dart.fnType(dart.legacy(async.Future$(dart.legacy(google_sign_in.GoogleSignInAccount))), []),
    requestScopes: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.List$(dart.legacy(core.String)))])
  }));
  dart.setGetterSignature(google_sign_in.GoogleSignIn, () => ({
    __proto__: dart.getGetters(google_sign_in.GoogleSignIn.__proto__),
    onCurrentUserChanged: dart.legacy(async.Stream$(dart.legacy(google_sign_in.GoogleSignInAccount))),
    currentUser: dart.legacy(google_sign_in.GoogleSignInAccount)
  }));
  dart.setLibraryUri(google_sign_in.GoogleSignIn, L0);
  dart.setFieldSignature(google_sign_in.GoogleSignIn, () => ({
    __proto__: dart.getFields(google_sign_in.GoogleSignIn.__proto__),
    signInOption: dart.finalFieldType(dart.legacy(types.SignInOption)),
    scopes: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    hostedDomain: dart.finalFieldType(dart.legacy(core.String)),
    clientId: dart.finalFieldType(dart.legacy(core.String)),
    [_currentUserController]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(google_sign_in.GoogleSignInAccount)))),
    [_initialization]: dart.fieldType(dart.legacy(async.Future$(dart.void))),
    [_lastMethodCall]: dart.fieldType(dart.legacy(async.Future$(dart.void))),
    [_currentUser]: dart.fieldType(dart.legacy(google_sign_in.GoogleSignInAccount))
  }));
  dart.defineLazy(google_sign_in.GoogleSignIn, {
    /*google_sign_in.GoogleSignIn.kSignInRequiredError*/get kSignInRequiredError() {
      return "sign_in_required";
    },
    /*google_sign_in.GoogleSignIn.kSignInCanceledError*/get kSignInCanceledError() {
      return "sign_in_canceled";
    },
    /*google_sign_in.GoogleSignIn.kNetworkError*/get kNetworkError() {
      return "network_error";
    },
    /*google_sign_in.GoogleSignIn.kSignInFailedError*/get kSignInFailedError() {
      return "sign_in_failed";
    }
  }, true);
  dart.trackLibraries("packages/google_sign_in/google_sign_in.dart", {
    "package:google_sign_in/google_sign_in.dart": google_sign_in
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["google_sign_in.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/google_sign_in/google_sign_in.dart.lib.js"}');
  // Exports:
  return {
    google_sign_in: google_sign_in
  };
}));

//# sourceMappingURL=google_sign_in.dart.lib.js.map
