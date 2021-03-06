define(['dart_sdk', 'packages/firebase_auth_platform_interface/src/auth_provider.dart', 'packages/firebase_auth_platform_interface/src/auth_credential.dart', 'packages/plugin_platform_interface/plugin_platform_interface.dart', 'packages/firebase_auth_platform_interface/src/firebase_auth_exception.dart', 'packages/flutter/src/services/system_channels.dart', 'packages/firebase_auth_platform_interface/src/user_metadata.dart', 'packages/firebase_auth_platform_interface/src/user_info.dart', 'packages/firebase_auth_platform_interface/src/id_token_result.dart', 'packages/firebase_auth_platform_interface/src/action_code_settings.dart', 'packages/firebase_auth_platform_interface/src/additional_user_info.dart', 'packages/firebase_auth_platform_interface/src/action_code_info.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/firebase_core/firebase_core.dart'], (function load__packages__firebase_auth_platform_interface__src__providers__twitter_auth_dart(dart_sdk, packages__firebase_auth_platform_interface__src__auth_provider$46dart, packages__firebase_auth_platform_interface__src__auth_credential$46dart, packages__plugin_platform_interface__plugin_platform_interface$46dart, packages__firebase_auth_platform_interface__src__firebase_auth_exception$46dart, packages__flutter__src__services__system_channels$46dart, packages__firebase_auth_platform_interface__src__user_metadata$46dart, packages__firebase_auth_platform_interface__src__user_info$46dart, packages__firebase_auth_platform_interface__src__id_token_result$46dart, packages__firebase_auth_platform_interface__src__action_code_settings$46dart, packages__firebase_auth_platform_interface__src__additional_user_info$46dart, packages__firebase_auth_platform_interface__src__action_code_info$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__firebase_core__firebase_core$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const auth_provider = packages__firebase_auth_platform_interface__src__auth_provider$46dart.src__auth_provider;
  const auth_credential = packages__firebase_auth_platform_interface__src__auth_credential$46dart.src__auth_credential;
  const plugin_platform_interface = packages__plugin_platform_interface__plugin_platform_interface$46dart.plugin_platform_interface;
  const firebase_auth_exception = packages__firebase_auth_platform_interface__src__firebase_auth_exception$46dart.src__firebase_auth_exception;
  const message_codec = packages__flutter__src__services__system_channels$46dart.src__services__message_codec;
  const platform_channel = packages__flutter__src__services__system_channels$46dart.src__services__platform_channel;
  const message_codecs = packages__flutter__src__services__system_channels$46dart.src__services__message_codecs;
  const user_metadata = packages__firebase_auth_platform_interface__src__user_metadata$46dart.src__user_metadata;
  const user_info = packages__firebase_auth_platform_interface__src__user_info$46dart.src__user_info;
  const id_token_result = packages__firebase_auth_platform_interface__src__id_token_result$46dart.src__id_token_result;
  const action_code_settings = packages__firebase_auth_platform_interface__src__action_code_settings$46dart.src__action_code_settings;
  const additional_user_info = packages__firebase_auth_platform_interface__src__additional_user_info$46dart.src__additional_user_info;
  const action_code_info = packages__firebase_auth_platform_interface__src__action_code_info$46dart.src__action_code_info;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const firebase_core = packages__firebase_core__firebase_core$46dart.firebase_core;
  var twitter_auth = Object.create(dart.library);
  var oauth = Object.create(dart.library);
  var google_auth = Object.create(dart.library);
  var github_auth = Object.create(dart.library);
  var facebook_auth = Object.create(dart.library);
  var email_auth = Object.create(dart.library);
  var phone_auth = Object.create(dart.library);
  var types = Object.create(dart.library);
  var platform_interface_recaptcha_verifier_factory = Object.create(dart.library);
  var platform_interface_confirmation_result = Object.create(dart.library);
  var phone_auth_callbacks = Object.create(dart.library);
  var exception$ = Object.create(dart.library);
  var platform_interface_user = Object.create(dart.library);
  var platform_interface_user_credential = Object.create(dart.library);
  var method_channel_user_credential = Object.create(dart.library);
  var method_channel_user = Object.create(dart.library);
  var method_channel_firebase_auth = Object.create(dart.library);
  var platform_interface_firebase_auth = Object.create(dart.library);
  var firebase_auth_platform_interface = Object.create(dart.library);
  var $add = dartx.add;
  var $toString = dartx.toString;
  var $_get = dartx._get;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $_set = dartx._set;
  var $containsKey = dartx.containsKey;
  var $contains = dartx.contains;
  dart._checkModuleNullSafetyMode(false);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var PersistenceL = () => (PersistenceL = dart.constFn(dart.legacy(types.Persistence)))();
  var RecaptchaVerifierSizeL = () => (RecaptchaVerifierSizeL = dart.constFn(dart.legacy(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize)))();
  var RecaptchaVerifierThemeL = () => (RecaptchaVerifierThemeL = dart.constFn(dart.legacy(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var UserCredentialPlatformL = () => (UserCredentialPlatformL = dart.constFn(dart.legacy(platform_interface_user_credential.UserCredentialPlatform)))();
  var ExceptionL = () => (ExceptionL = dart.constFn(dart.legacy(core.Exception)))();
  var PlatformExceptionL = () => (PlatformExceptionL = dart.constFn(dart.legacy(message_codec.PlatformException)))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(StringL(), dart.dynamic)))();
  var MapLOfStringL$dynamic = () => (MapLOfStringL$dynamic = dart.constFn(dart.legacy(MapOfStringL$dynamic())))();
  var LinkedHashMapOfStringL$dynamic = () => (LinkedHashMapOfStringL$dynamic = dart.constFn(collection.LinkedHashMap$(StringL(), dart.dynamic)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var UserInfoL = () => (UserInfoL = dart.constFn(dart.legacy(user_info.UserInfo)))();
  var dynamicToUserInfoL = () => (dynamicToUserInfoL = dart.constFn(dart.fnType(UserInfoL(), [dart.dynamic])))();
  var UserPlatformL = () => (UserPlatformL = dart.constFn(dart.legacy(platform_interface_user.UserPlatform)))();
  var FutureOrOfMapLOfStringL$dynamic = () => (FutureOrOfMapLOfStringL$dynamic = dart.constFn(async.FutureOr$(MapLOfStringL$dynamic())))();
  var FutureOrLOfMapLOfStringL$dynamic = () => (FutureOrLOfMapLOfStringL$dynamic = dart.constFn(dart.legacy(FutureOrOfMapLOfStringL$dynamic())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ObjectLToFutureOrLOfMapLOfStringL$dynamic = () => (ObjectLToFutureOrLOfMapLOfStringL$dynamic = dart.constFn(dart.fnType(FutureOrLOfMapLOfStringL$dynamic(), [ObjectL()])))();
  var FutureOrOfStringL = () => (FutureOrOfStringL = dart.constFn(async.FutureOr$(StringL())))();
  var FutureOrLOfStringL = () => (FutureOrLOfStringL = dart.constFn(dart.legacy(FutureOrOfStringL())))();
  var IdTokenResultL = () => (IdTokenResultL = dart.constFn(dart.legacy(id_token_result.IdTokenResult)))();
  var MethodChannelUserL = () => (MethodChannelUserL = dart.constFn(dart.legacy(method_channel_user.MethodChannelUser)))();
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var FutureLOfvoid = () => (FutureLOfvoid = dart.constFn(dart.legacy(FutureOfvoid())))();
  var MethodCallL = () => (MethodCallL = dart.constFn(dart.legacy(message_codec.MethodCall)))();
  var MethodCallLToFutureLOfvoid = () => (MethodCallLToFutureLOfvoid = dart.constFn(dart.fnType(FutureLOfvoid(), [MethodCallL()])))();
  var PhoneAuthCredentialL = () => (PhoneAuthCredentialL = dart.constFn(dart.legacy(phone_auth.PhoneAuthCredential)))();
  var ActionCodeInfoL = () => (ActionCodeInfoL = dart.constFn(dart.legacy(action_code_info.ActionCodeInfo)))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(StringL())))();
  var ListLOfStringL = () => (ListLOfStringL = dart.constFn(dart.legacy(ListOfStringL())))();
  var ConfirmationResultPlatformL = () => (ConfirmationResultPlatformL = dart.constFn(dart.legacy(platform_interface_confirmation_result.ConfirmationResultPlatform)))();
  var MethodChannelFirebaseAuthL = () => (MethodChannelFirebaseAuthL = dart.constFn(dart.legacy(method_channel_firebase_auth.MethodChannelFirebaseAuth)))();
  var IdentityMapOfStringL$MethodChannelFirebaseAuthL = () => (IdentityMapOfStringL$MethodChannelFirebaseAuthL = dart.constFn(_js_helper.IdentityMap$(StringL(), MethodChannelFirebaseAuthL())))();
  var StreamControllerOfUserPlatformL = () => (StreamControllerOfUserPlatformL = dart.constFn(async.StreamController$(UserPlatformL())))();
  var StreamControllerLOfUserPlatformL = () => (StreamControllerLOfUserPlatformL = dart.constFn(dart.legacy(StreamControllerOfUserPlatformL())))();
  var IdentityMapOfStringL$StreamControllerLOfUserPlatformL = () => (IdentityMapOfStringL$StreamControllerLOfUserPlatformL = dart.constFn(_js_helper.IdentityMap$(StringL(), StreamControllerLOfUserPlatformL())))();
  var PhoneAuthCallbacksL = () => (PhoneAuthCallbacksL = dart.constFn(dart.legacy(phone_auth_callbacks.PhoneAuthCallbacks)))();
  var IdentityMapOfintL$PhoneAuthCallbacksL = () => (IdentityMapOfintL$PhoneAuthCallbacksL = dart.constFn(_js_helper.IdentityMap$(intL(), PhoneAuthCallbacksL())))();
  const CT = Object.create(null);
  var L16 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth_platform_interface-2.1.2/lib/src/platform_interface/platform_interface_recaptcha_verifier_factory.dart";
  var L25 = "package:firebase_auth_platform_interface/src/method_channel/method_channel_user_credential.dart";
  var L11 = "package:firebase_auth_platform_interface/src/providers/email_auth.dart";
  var L31 = "package:firebase_auth_platform_interface/src/method_channel/method_channel_firebase_auth.dart";
  var L12 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth_platform_interface-2.1.2/lib/src/providers/phone_auth.dart";
  var L28 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth_platform_interface-2.1.2/lib/src/method_channel/method_channel_firebase_auth.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth_platform_interface-2.1.2/lib/src/providers/twitter_auth.dart";
  var L7 = "package:firebase_auth_platform_interface/src/providers/github_auth.dart";
  var L30 = "package:firebase_auth_platform_interface/src/platform_interface/platform_interface_firebase_auth.dart";
  var L5 = "package:firebase_auth_platform_interface/src/providers/google_auth.dart";
  var L8 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth_platform_interface-2.1.2/lib/src/providers/facebook_auth.dart";
  var L3 = "package:firebase_auth_platform_interface/src/providers/oauth.dart";
  var L18 = "package:firebase_auth_platform_interface/src/platform_interface/platform_interface_confirmation_result.dart";
  var L29 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth_platform_interface-2.1.2/lib/src/platform_interface/platform_interface_firebase_auth.dart";
  var L10 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth_platform_interface-2.1.2/lib/src/providers/email_auth.dart";
  var L4 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth_platform_interface-2.1.2/lib/src/providers/google_auth.dart";
  var L1 = "package:firebase_auth_platform_interface/src/providers/twitter_auth.dart";
  var L13 = "package:firebase_auth_platform_interface/src/providers/phone_auth.dart";
  var L22 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth_platform_interface-2.1.2/lib/src/platform_interface/platform_interface_user_credential.dart";
  var L9 = "package:firebase_auth_platform_interface/src/providers/facebook_auth.dart";
  var L21 = "package:firebase_auth_platform_interface/src/platform_interface/platform_interface_user.dart";
  var L15 = "package:firebase_auth_platform_interface/src/platform_interface/platform_interface_recaptcha_verifier_factory.dart";
  var L26 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth_platform_interface-2.1.2/lib/src/method_channel/method_channel_user.dart";
  var L24 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth_platform_interface-2.1.2/lib/src/method_channel/method_channel_user_credential.dart";
  var L20 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth_platform_interface-2.1.2/lib/src/platform_interface/platform_interface_user.dart";
  var L6 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth_platform_interface-2.1.2/lib/src/providers/github_auth.dart";
  var L14 = "package:firebase_auth_platform_interface/src/types.dart";
  var L17 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth_platform_interface-2.1.2/lib/src/platform_interface/platform_interface_confirmation_result.dart";
  var L27 = "package:firebase_auth_platform_interface/src/method_channel/method_channel_user.dart";
  var L23 = "package:firebase_auth_platform_interface/src/platform_interface/platform_interface_user_credential.dart";
  var L19 = "package:firebase_auth_platform_interface/src/method_channel/utils/phone_auth_callbacks.dart";
  var L2 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth_platform_interface-2.1.2/lib/src/providers/oauth.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: types.Persistence.prototype,
        [_name$]: "Persistence.LOCAL",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: types.Persistence.prototype,
        [_name$]: "Persistence.NONE",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: types.Persistence.prototype,
        [_name$]: "Persistence.SESSION",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], PersistenceL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize.prototype,
        [_name$0]: "RecaptchaVerifierSize.normal",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize.prototype,
        [_name$0]: "RecaptchaVerifierSize.compact",
        index: 1
      });
    },
    get C6() {
      return C6 = dart.constList([C4 || CT.C4, C5 || CT.C5], RecaptchaVerifierSizeL());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme.prototype,
        [_name$0]: "RecaptchaVerifierTheme.light",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme.prototype,
        [_name$0]: "RecaptchaVerifierTheme.dark",
        index: 1
      });
    },
    get C9() {
      return C9 = dart.constList([C7 || CT.C7, C8 || CT.C8], RecaptchaVerifierThemeL());
    },
    get C10() {
      return C10 = dart.fn(exception$.catchPlatformException, ObjectLToFutureOrLOfMapLOfStringL$dynamic());
    },
    get C11() {
      return C11 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 30000000
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C14 || CT.C14
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C13 || CT.C13,
        [MethodChannel_name]: "plugins.flutter.io/firebase_auth"
      });
    }
  }, false);
  var _parameters = dart.privateName(twitter_auth, "_parameters");
  twitter_auth.TwitterAuthProvider = class TwitterAuthProvider extends auth_provider.AuthProvider {
    static get TWITTER_SIGN_IN_METHOD() {
      return "twitter.com";
    }
    static get PROVIDER_ID() {
      return "twitter.com";
    }
    get parameters() {
      return this[_parameters];
    }
    setCustomParameters(customOAuthParameters) {
      if (!(customOAuthParameters != null)) dart.assertFailed(null, L0, 64, 12, "customOAuthParameters != null");
      this[_parameters] = customOAuthParameters;
      return this;
    }
    static credential(opts) {
      let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
      let secret = opts && 'secret' in opts ? opts.secret : null;
      if (!(accessToken != null)) dart.assertFailed(null, L0, 73, 12, "accessToken != null");
      if (!(secret != null)) dart.assertFailed(null, L0, 74, 12, "secret != null");
      return twitter_auth.TwitterAuthCredential._credential({accessToken: accessToken, secret: secret});
    }
    static getCredential(opts) {
      let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
      let secret = opts && 'secret' in opts ? opts.secret : null;
      return twitter_auth.TwitterAuthProvider.credential({accessToken: accessToken, secret: secret});
    }
  };
  (twitter_auth.TwitterAuthProvider.new = function() {
    this[_parameters] = new _js_helper.LinkedMap.new();
    twitter_auth.TwitterAuthProvider.__proto__.new.call(this, "twitter.com");
    ;
  }).prototype = twitter_auth.TwitterAuthProvider.prototype;
  dart.addTypeTests(twitter_auth.TwitterAuthProvider);
  dart.addTypeCaches(twitter_auth.TwitterAuthProvider);
  dart.setMethodSignature(twitter_auth.TwitterAuthProvider, () => ({
    __proto__: dart.getMethods(twitter_auth.TwitterAuthProvider.__proto__),
    setCustomParameters: dart.fnType(dart.legacy(twitter_auth.TwitterAuthProvider), [dart.legacy(core.Map)])
  }));
  dart.setGetterSignature(twitter_auth.TwitterAuthProvider, () => ({
    __proto__: dart.getGetters(twitter_auth.TwitterAuthProvider.__proto__),
    parameters: dart.legacy(core.Map)
  }));
  dart.setLibraryUri(twitter_auth.TwitterAuthProvider, L1);
  dart.setFieldSignature(twitter_auth.TwitterAuthProvider, () => ({
    __proto__: dart.getFields(twitter_auth.TwitterAuthProvider.__proto__),
    [_parameters]: dart.fieldType(dart.legacy(core.Map))
  }));
  var accessToken$ = dart.privateName(oauth, "OAuthCredential.accessToken");
  var idToken$ = dart.privateName(oauth, "OAuthCredential.idToken");
  var secret$ = dart.privateName(oauth, "OAuthCredential.secret");
  var rawNonce$ = dart.privateName(oauth, "OAuthCredential.rawNonce");
  oauth.OAuthCredential = class OAuthCredential extends auth_credential.AuthCredential {
    get accessToken() {
      return this[accessToken$];
    }
    set accessToken(value) {
      super.accessToken = value;
    }
    get idToken() {
      return this[idToken$];
    }
    set idToken(value) {
      super.idToken = value;
    }
    get secret() {
      return this[secret$];
    }
    set secret(value) {
      super.secret = value;
    }
    get rawNonce() {
      return this[rawNonce$];
    }
    set rawNonce(value) {
      super.rawNonce = value;
    }
    asMap() {
      return new (IdentityMapOfStringL$dynamic()).from(["providerId", this.providerId, "signInMethod", this.signInMethod, "idToken", this.idToken, "accessToken", this.accessToken, "secret", this.secret, "rawNonce", this.rawNonce]);
    }
  };
  (oauth.OAuthCredential.new = function(opts) {
    let providerId = opts && 'providerId' in opts ? opts.providerId : null;
    let signInMethod = opts && 'signInMethod' in opts ? opts.signInMethod : null;
    let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
    let idToken = opts && 'idToken' in opts ? opts.idToken : null;
    let secret = opts && 'secret' in opts ? opts.secret : null;
    let rawNonce = opts && 'rawNonce' in opts ? opts.rawNonce : null;
    this[accessToken$] = accessToken;
    this[idToken$] = idToken;
    this[secret$] = secret;
    this[rawNonce$] = rawNonce;
    if (!(providerId != null)) dart.assertFailed(null, L2, 89, 16, "providerId != null");
    if (!(signInMethod != null)) dart.assertFailed(null, L2, 90, 16, "signInMethod != null");
    oauth.OAuthCredential.__proto__.new.call(this, {providerId: providerId, signInMethod: signInMethod});
    ;
  }).prototype = oauth.OAuthCredential.prototype;
  dart.addTypeTests(oauth.OAuthCredential);
  dart.addTypeCaches(oauth.OAuthCredential);
  dart.setLibraryUri(oauth.OAuthCredential, L3);
  dart.setFieldSignature(oauth.OAuthCredential, () => ({
    __proto__: dart.getFields(oauth.OAuthCredential.__proto__),
    accessToken: dart.finalFieldType(dart.legacy(core.String)),
    idToken: dart.finalFieldType(dart.legacy(core.String)),
    secret: dart.finalFieldType(dart.legacy(core.String)),
    rawNonce: dart.finalFieldType(dart.legacy(core.String))
  }));
  twitter_auth.TwitterAuthCredential = class TwitterAuthCredential extends oauth.OAuthCredential {
    static _credential(opts) {
      let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
      let secret = opts && 'secret' in opts ? opts.secret : null;
      return new twitter_auth.TwitterAuthCredential.__({accessToken: accessToken, secret: secret});
    }
  };
  (twitter_auth.TwitterAuthCredential.__ = function(opts) {
    let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
    let secret = opts && 'secret' in opts ? opts.secret : null;
    twitter_auth.TwitterAuthCredential.__proto__.new.call(this, {providerId: "twitter.com", signInMethod: "twitter.com", accessToken: accessToken, secret: secret});
    ;
  }).prototype = twitter_auth.TwitterAuthCredential.prototype;
  dart.addTypeTests(twitter_auth.TwitterAuthCredential);
  dart.addTypeCaches(twitter_auth.TwitterAuthCredential);
  dart.setLibraryUri(twitter_auth.TwitterAuthCredential, L1);
  dart.defineLazy(twitter_auth, {
    /*twitter_auth._kProviderId*/get _kProviderId() {
      return "twitter.com";
    }
  }, true);
  var _scopes = dart.privateName(oauth, "_scopes");
  var _parameters$ = dart.privateName(oauth, "_parameters");
  var providerId$ = dart.privateName(oauth, "OAuthProvider.providerId");
  oauth.OAuthProvider = class OAuthProvider extends auth_provider.AuthProvider {
    get providerId() {
      return this[providerId$];
    }
    set providerId(value) {
      super.providerId = value;
    }
    get scopes() {
      return this[_scopes];
    }
    get parameters() {
      return this[_parameters$];
    }
    addScope(scope) {
      if (!(scope != null)) dart.assertFailed(null, L2, 39, 12, "scope != null");
      this[_scopes][$add](scope);
      return this;
    }
    setCustomParameters(customOAuthParameters) {
      if (!(customOAuthParameters != null)) dart.assertFailed(null, L2, 49, 12, "customOAuthParameters != null");
      this[_parameters$] = customOAuthParameters;
      return this;
    }
    credential(opts) {
      let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
      let idToken = opts && 'idToken' in opts ? opts.idToken : null;
      let rawNonce = opts && 'rawNonce' in opts ? opts.rawNonce : null;
      return new oauth.OAuthCredential.new({providerId: this.providerId, signInMethod: "oauth", accessToken: accessToken, idToken: idToken, rawNonce: rawNonce});
    }
    getCredential(opts) {
      let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
      let idToken = opts && 'idToken' in opts ? opts.idToken : null;
      let rawNonce = opts && 'rawNonce' in opts ? opts.rawNonce : null;
      return this.credential({accessToken: accessToken, idToken: idToken, rawNonce: rawNonce});
    }
  };
  (oauth.OAuthProvider.new = function(providerId) {
    this[_scopes] = JSArrayOfStringL().of([]);
    this[_parameters$] = null;
    this[providerId$] = providerId;
    if (!(providerId != null)) dart.assertFailed(null, L2, 16, 16, "providerId != null");
    oauth.OAuthProvider.__proto__.new.call(this, providerId);
    ;
  }).prototype = oauth.OAuthProvider.prototype;
  dart.addTypeTests(oauth.OAuthProvider);
  dart.addTypeCaches(oauth.OAuthProvider);
  dart.setMethodSignature(oauth.OAuthProvider, () => ({
    __proto__: dart.getMethods(oauth.OAuthProvider.__proto__),
    addScope: dart.fnType(dart.legacy(oauth.OAuthProvider), [dart.legacy(core.String)]),
    setCustomParameters: dart.fnType(dart.legacy(oauth.OAuthProvider), [dart.legacy(core.Map)]),
    credential: dart.fnType(dart.legacy(oauth.OAuthCredential), [], {accessToken: dart.legacy(core.String), idToken: dart.legacy(core.String), rawNonce: dart.legacy(core.String)}, {}),
    getCredential: dart.fnType(dart.legacy(oauth.OAuthCredential), [], {accessToken: dart.legacy(core.String), idToken: dart.legacy(core.String), rawNonce: dart.legacy(core.String)}, {})
  }));
  dart.setGetterSignature(oauth.OAuthProvider, () => ({
    __proto__: dart.getGetters(oauth.OAuthProvider.__proto__),
    scopes: dart.legacy(core.List$(dart.legacy(core.String))),
    parameters: dart.legacy(core.Map)
  }));
  dart.setLibraryUri(oauth.OAuthProvider, L3);
  dart.setFieldSignature(oauth.OAuthProvider, () => ({
    __proto__: dart.getFields(oauth.OAuthProvider.__proto__),
    providerId: dart.finalFieldType(dart.legacy(core.String)),
    [_scopes]: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    [_parameters$]: dart.fieldType(dart.legacy(core.Map))
  }));
  var _scopes$ = dart.privateName(google_auth, "_scopes");
  var _parameters$0 = dart.privateName(google_auth, "_parameters");
  google_auth.GoogleAuthProvider = class GoogleAuthProvider extends auth_provider.AuthProvider {
    static get GOOGLE_SIGN_IN_METHOD() {
      return "google.com";
    }
    static get PROVIDER_ID() {
      return "google.com";
    }
    get scopes() {
      return this[_scopes$];
    }
    get parameters() {
      return this[_parameters$0];
    }
    addScope(scope) {
      if (!(scope != null)) dart.assertFailed(null, L4, 65, 12, "scope != null");
      this[_scopes$][$add](scope);
      return this;
    }
    setCustomParameters(customOAuthParameters) {
      if (!(customOAuthParameters != null)) dart.assertFailed(null, L4, 74, 12, "customOAuthParameters != null");
      this[_parameters$0] = customOAuthParameters;
      return this;
    }
    static credential(opts) {
      let idToken = opts && 'idToken' in opts ? opts.idToken : null;
      let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
      if (!(accessToken != null || idToken != null)) dart.assertFailed("At least one of ID token and access token is required", L4, 81, 12, "accessToken != null || idToken != null");
      return google_auth.GoogleAuthCredential._credential({idToken: idToken, accessToken: accessToken});
    }
    static getCredential(opts) {
      let idToken = opts && 'idToken' in opts ? opts.idToken : null;
      let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
      return google_auth.GoogleAuthProvider.credential({idToken: idToken, accessToken: accessToken});
    }
  };
  (google_auth.GoogleAuthProvider.new = function() {
    this[_scopes$] = JSArrayOfStringL().of([]);
    this[_parameters$0] = new _js_helper.LinkedMap.new();
    google_auth.GoogleAuthProvider.__proto__.new.call(this, "google.com");
    ;
  }).prototype = google_auth.GoogleAuthProvider.prototype;
  dart.addTypeTests(google_auth.GoogleAuthProvider);
  dart.addTypeCaches(google_auth.GoogleAuthProvider);
  dart.setMethodSignature(google_auth.GoogleAuthProvider, () => ({
    __proto__: dart.getMethods(google_auth.GoogleAuthProvider.__proto__),
    addScope: dart.fnType(dart.legacy(google_auth.GoogleAuthProvider), [dart.legacy(core.String)]),
    setCustomParameters: dart.fnType(dart.legacy(google_auth.GoogleAuthProvider), [dart.legacy(core.Map)])
  }));
  dart.setGetterSignature(google_auth.GoogleAuthProvider, () => ({
    __proto__: dart.getGetters(google_auth.GoogleAuthProvider.__proto__),
    scopes: dart.legacy(core.List$(dart.legacy(core.String))),
    parameters: dart.legacy(core.Map)
  }));
  dart.setLibraryUri(google_auth.GoogleAuthProvider, L5);
  dart.setFieldSignature(google_auth.GoogleAuthProvider, () => ({
    __proto__: dart.getFields(google_auth.GoogleAuthProvider.__proto__),
    [_scopes$]: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    [_parameters$0]: dart.fieldType(dart.legacy(core.Map))
  }));
  google_auth.GoogleAuthCredential = class GoogleAuthCredential extends oauth.OAuthCredential {
    static _credential(opts) {
      let idToken = opts && 'idToken' in opts ? opts.idToken : null;
      let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
      return new google_auth.GoogleAuthCredential.__({accessToken: accessToken, idToken: idToken});
    }
  };
  (google_auth.GoogleAuthCredential.__ = function(opts) {
    let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
    let idToken = opts && 'idToken' in opts ? opts.idToken : null;
    google_auth.GoogleAuthCredential.__proto__.new.call(this, {providerId: "google.com", signInMethod: "google.com", accessToken: accessToken, idToken: idToken});
    ;
  }).prototype = google_auth.GoogleAuthCredential.prototype;
  dart.addTypeTests(google_auth.GoogleAuthCredential);
  dart.addTypeCaches(google_auth.GoogleAuthCredential);
  dart.setLibraryUri(google_auth.GoogleAuthCredential, L5);
  dart.defineLazy(google_auth, {
    /*google_auth._kProviderId*/get _kProviderId() {
      return "google.com";
    }
  }, true);
  var _scopes$0 = dart.privateName(github_auth, "_scopes");
  var _parameters$1 = dart.privateName(github_auth, "_parameters");
  github_auth.GithubAuthProvider = class GithubAuthProvider extends auth_provider.AuthProvider {
    static get GITHUB_SIGN_IN_METHOD() {
      return "github.com";
    }
    static get PROVIDER_ID() {
      return "github.com";
    }
    get scopes() {
      return this[_scopes$0];
    }
    get parameters() {
      return this[_parameters$1];
    }
    addScope(scope) {
      if (!(scope != null)) dart.assertFailed(null, L6, 68, 12, "scope != null");
      this[_scopes$0][$add](scope);
      return this;
    }
    setCustomParameters(customOAuthParameters) {
      if (!(customOAuthParameters != null)) dart.assertFailed(null, L6, 77, 12, "customOAuthParameters != null");
      this[_parameters$1] = customOAuthParameters;
      return this;
    }
    static credential(accessToken) {
      if (!(accessToken != null)) dart.assertFailed(null, L6, 84, 12, "accessToken != null");
      return github_auth.GithubAuthCredential._credential(accessToken);
    }
    static getCredential(token) {
      return github_auth.GithubAuthProvider.credential(token);
    }
  };
  (github_auth.GithubAuthProvider.new = function() {
    this[_scopes$0] = JSArrayOfStringL().of([]);
    this[_parameters$1] = new _js_helper.LinkedMap.new();
    github_auth.GithubAuthProvider.__proto__.new.call(this, "github.com");
    ;
  }).prototype = github_auth.GithubAuthProvider.prototype;
  dart.addTypeTests(github_auth.GithubAuthProvider);
  dart.addTypeCaches(github_auth.GithubAuthProvider);
  dart.setMethodSignature(github_auth.GithubAuthProvider, () => ({
    __proto__: dart.getMethods(github_auth.GithubAuthProvider.__proto__),
    addScope: dart.fnType(dart.legacy(github_auth.GithubAuthProvider), [dart.legacy(core.String)]),
    setCustomParameters: dart.fnType(dart.legacy(github_auth.GithubAuthProvider), [dart.legacy(core.Map)])
  }));
  dart.setGetterSignature(github_auth.GithubAuthProvider, () => ({
    __proto__: dart.getGetters(github_auth.GithubAuthProvider.__proto__),
    scopes: dart.legacy(core.List$(dart.legacy(core.String))),
    parameters: dart.legacy(core.Map)
  }));
  dart.setLibraryUri(github_auth.GithubAuthProvider, L7);
  dart.setFieldSignature(github_auth.GithubAuthProvider, () => ({
    __proto__: dart.getFields(github_auth.GithubAuthProvider.__proto__),
    [_scopes$0]: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    [_parameters$1]: dart.fieldType(dart.legacy(core.Map))
  }));
  github_auth.GithubAuthCredential = class GithubAuthCredential extends oauth.OAuthCredential {
    static _credential(accessToken) {
      return new github_auth.GithubAuthCredential.__({accessToken: accessToken});
    }
  };
  (github_auth.GithubAuthCredential.__ = function(opts) {
    let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
    github_auth.GithubAuthCredential.__proto__.new.call(this, {providerId: "github.com", signInMethod: "github.com", accessToken: accessToken});
    ;
  }).prototype = github_auth.GithubAuthCredential.prototype;
  dart.addTypeTests(github_auth.GithubAuthCredential);
  dart.addTypeCaches(github_auth.GithubAuthCredential);
  dart.setLibraryUri(github_auth.GithubAuthCredential, L7);
  dart.defineLazy(github_auth, {
    /*github_auth._kProviderId*/get _kProviderId() {
      return "github.com";
    }
  }, true);
  var _scopes$1 = dart.privateName(facebook_auth, "_scopes");
  var _parameters$2 = dart.privateName(facebook_auth, "_parameters");
  facebook_auth.FacebookAuthProvider = class FacebookAuthProvider extends auth_provider.AuthProvider {
    static get FACEBOOK_SIGN_IN_METHOD() {
      return "facebook.com";
    }
    static get PROVIDER_ID() {
      return "facebook.com";
    }
    get scopes() {
      return this[_scopes$1];
    }
    get parameters() {
      return this[_parameters$2];
    }
    addScope(scope) {
      if (!(scope != null)) dart.assertFailed(null, L8, 68, 12, "scope != null");
      this[_scopes$1][$add](scope);
      return this;
    }
    setCustomParameters(customOAuthParameters) {
      if (!(customOAuthParameters != null)) dart.assertFailed(null, L8, 77, 12, "customOAuthParameters != null");
      this[_parameters$2] = customOAuthParameters;
      return this;
    }
    static credential(accessToken) {
      if (!(accessToken != null)) dart.assertFailed(null, L8, 84, 12, "accessToken != null");
      return facebook_auth.FacebookAuthCredential._credential(accessToken);
    }
    static getCredential(token) {
      return facebook_auth.FacebookAuthProvider.credential(token);
    }
  };
  (facebook_auth.FacebookAuthProvider.new = function() {
    this[_scopes$1] = JSArrayOfStringL().of([]);
    this[_parameters$2] = new _js_helper.LinkedMap.new();
    facebook_auth.FacebookAuthProvider.__proto__.new.call(this, "facebook.com");
    ;
  }).prototype = facebook_auth.FacebookAuthProvider.prototype;
  dart.addTypeTests(facebook_auth.FacebookAuthProvider);
  dart.addTypeCaches(facebook_auth.FacebookAuthProvider);
  dart.setMethodSignature(facebook_auth.FacebookAuthProvider, () => ({
    __proto__: dart.getMethods(facebook_auth.FacebookAuthProvider.__proto__),
    addScope: dart.fnType(dart.legacy(facebook_auth.FacebookAuthProvider), [dart.legacy(core.String)]),
    setCustomParameters: dart.fnType(dart.legacy(facebook_auth.FacebookAuthProvider), [dart.legacy(core.Map)])
  }));
  dart.setGetterSignature(facebook_auth.FacebookAuthProvider, () => ({
    __proto__: dart.getGetters(facebook_auth.FacebookAuthProvider.__proto__),
    scopes: dart.legacy(core.List$(dart.legacy(core.String))),
    parameters: dart.legacy(core.Map)
  }));
  dart.setLibraryUri(facebook_auth.FacebookAuthProvider, L9);
  dart.setFieldSignature(facebook_auth.FacebookAuthProvider, () => ({
    __proto__: dart.getFields(facebook_auth.FacebookAuthProvider.__proto__),
    [_scopes$1]: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    [_parameters$2]: dart.fieldType(dart.legacy(core.Map))
  }));
  facebook_auth.FacebookAuthCredential = class FacebookAuthCredential extends oauth.OAuthCredential {
    static _credential(accessToken) {
      return new facebook_auth.FacebookAuthCredential.__({accessToken: accessToken});
    }
  };
  (facebook_auth.FacebookAuthCredential.__ = function(opts) {
    let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
    facebook_auth.FacebookAuthCredential.__proto__.new.call(this, {providerId: "facebook.com", signInMethod: "facebook.com", accessToken: accessToken});
    ;
  }).prototype = facebook_auth.FacebookAuthCredential.prototype;
  dart.addTypeTests(facebook_auth.FacebookAuthCredential);
  dart.addTypeCaches(facebook_auth.FacebookAuthCredential);
  dart.setLibraryUri(facebook_auth.FacebookAuthCredential, L9);
  dart.defineLazy(facebook_auth, {
    /*facebook_auth._kProviderId*/get _kProviderId() {
      return "facebook.com";
    }
  }, true);
  email_auth.EmailAuthProvider = class EmailAuthProvider extends auth_provider.AuthProvider {
    static get EMAIL_LINK_SIGN_IN_METHOD() {
      return "emailLink";
    }
    static get EMAIL_PASSWORD_SIGN_IN_METHOD() {
      return "password";
    }
    static get PROVIDER_ID() {
      return "password";
    }
    static credential(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let password = opts && 'password' in opts ? opts.password : null;
      if (!(email != null)) dart.assertFailed(null, L10, 40, 12, "email != null");
      if (!(password != null)) dart.assertFailed(null, L10, 41, 12, "password != null");
      return email_auth.EmailAuthCredential._credential(email, password);
    }
    static credentialWithLink(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let emailLink = opts && 'emailLink' in opts ? opts.emailLink : null;
      if (!(email != null)) dart.assertFailed(null, L10, 48, 12, "email != null");
      if (!(emailLink != null)) dart.assertFailed(null, L10, 49, 12, "emailLink != null");
      return email_auth.EmailAuthCredential._credentialWithLink(email, emailLink);
    }
    static getCredential(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let password = opts && 'password' in opts ? opts.password : null;
      return email_auth.EmailAuthProvider.credential({email: email, password: password});
    }
    static getCredentialWithLink(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let link = opts && 'link' in opts ? opts.link : null;
      return email_auth.EmailAuthProvider.credentialWithLink({email: email, emailLink: link});
    }
  };
  (email_auth.EmailAuthProvider.new = function() {
    email_auth.EmailAuthProvider.__proto__.new.call(this, "password");
    ;
  }).prototype = email_auth.EmailAuthProvider.prototype;
  dart.addTypeTests(email_auth.EmailAuthProvider);
  dart.addTypeCaches(email_auth.EmailAuthProvider);
  dart.setLibraryUri(email_auth.EmailAuthProvider, L11);
  var email$ = dart.privateName(email_auth, "EmailAuthCredential.email");
  var password$ = dart.privateName(email_auth, "EmailAuthCredential.password");
  var emailLink$ = dart.privateName(email_auth, "EmailAuthCredential.emailLink");
  email_auth.EmailAuthCredential = class EmailAuthCredential extends auth_credential.AuthCredential {
    get email() {
      return this[email$];
    }
    set email(value) {
      super.email = value;
    }
    get password() {
      return this[password$];
    }
    set password(value) {
      super.password = value;
    }
    get emailLink() {
      return this[emailLink$];
    }
    set emailLink(value) {
      super.emailLink = value;
    }
    static _credential(email, password) {
      return new email_auth.EmailAuthCredential.__("password", {email: email, password: password});
    }
    static _credentialWithLink(email, emailLink) {
      return new email_auth.EmailAuthCredential.__("emailLink", {email: email, emailLink: emailLink});
    }
    asMap() {
      return new (IdentityMapOfStringL$StringL()).from(["providerId", this.providerId, "signInMethod", this.signInMethod, "email", this.email, "emailLink", this.emailLink, "secret", this.password]);
    }
  };
  (email_auth.EmailAuthCredential.__ = function(_signInMethod, opts) {
    let email = opts && 'email' in opts ? opts.email : null;
    let password = opts && 'password' in opts ? opts.password : null;
    let emailLink = opts && 'emailLink' in opts ? opts.emailLink : null;
    this[email$] = email;
    this[password$] = password;
    this[emailLink$] = emailLink;
    email_auth.EmailAuthCredential.__proto__.new.call(this, {providerId: "password", signInMethod: _signInMethod});
    ;
  }).prototype = email_auth.EmailAuthCredential.prototype;
  dart.addTypeTests(email_auth.EmailAuthCredential);
  dart.addTypeCaches(email_auth.EmailAuthCredential);
  dart.setMethodSignature(email_auth.EmailAuthCredential, () => ({
    __proto__: dart.getMethods(email_auth.EmailAuthCredential.__proto__),
    asMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))), [])
  }));
  dart.setLibraryUri(email_auth.EmailAuthCredential, L11);
  dart.setFieldSignature(email_auth.EmailAuthCredential, () => ({
    __proto__: dart.getFields(email_auth.EmailAuthCredential.__proto__),
    email: dart.finalFieldType(dart.legacy(core.String)),
    password: dart.finalFieldType(dart.legacy(core.String)),
    emailLink: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(email_auth, {
    /*email_auth._kLinkProviderId*/get _kLinkProviderId() {
      return "emailLink";
    },
    /*email_auth._kProviderId*/get _kProviderId() {
      return "password";
    }
  }, true);
  phone_auth.PhoneAuthProvider = class PhoneAuthProvider extends auth_provider.AuthProvider {
    static get PHONE_SIGN_IN_METHOD() {
      return "phone";
    }
    static get PROVIDER_ID() {
      return "phone";
    }
    static credential(opts) {
      let verificationId = opts && 'verificationId' in opts ? opts.verificationId : null;
      let smsCode = opts && 'smsCode' in opts ? opts.smsCode : null;
      if (!(verificationId != null)) dart.assertFailed(null, L12, 33, 12, "verificationId != null");
      if (!(smsCode != null)) dart.assertFailed(null, L12, 34, 12, "smsCode != null");
      return phone_auth.PhoneAuthCredential._credential(verificationId, smsCode);
    }
    static credentialFromToken(token, opts) {
      let smsCode = opts && 'smsCode' in opts ? opts.smsCode : null;
      if (!(token != null)) dart.assertFailed(null, L12, 41, 12, "token != null");
      return phone_auth.PhoneAuthCredential._credentialFromToken(token, {smsCode: smsCode});
    }
    static getCredential(opts) {
      let verificationId = opts && 'verificationId' in opts ? opts.verificationId : null;
      let smsCode = opts && 'smsCode' in opts ? opts.smsCode : null;
      return phone_auth.PhoneAuthProvider.credential({verificationId: verificationId, smsCode: smsCode});
    }
  };
  (phone_auth.PhoneAuthProvider.new = function() {
    phone_auth.PhoneAuthProvider.__proto__.new.call(this, "phone");
    ;
  }).prototype = phone_auth.PhoneAuthProvider.prototype;
  dart.addTypeTests(phone_auth.PhoneAuthProvider);
  dart.addTypeCaches(phone_auth.PhoneAuthProvider);
  dart.setLibraryUri(phone_auth.PhoneAuthProvider, L13);
  var verificationId$ = dart.privateName(phone_auth, "PhoneAuthCredential.verificationId");
  var smsCode$ = dart.privateName(phone_auth, "PhoneAuthCredential.smsCode");
  var token$ = dart.privateName(phone_auth, "PhoneAuthCredential.token");
  phone_auth.PhoneAuthCredential = class PhoneAuthCredential extends auth_credential.AuthCredential {
    get verificationId() {
      return this[verificationId$];
    }
    set verificationId(value) {
      super.verificationId = value;
    }
    get smsCode() {
      return this[smsCode$];
    }
    set smsCode(value) {
      super.smsCode = value;
    }
    get token() {
      return this[token$];
    }
    set token(value) {
      super.token = value;
    }
    static _credential(verificationId, smsCode) {
      return new phone_auth.PhoneAuthCredential.__({verificationId: verificationId, smsCode: smsCode});
    }
    static _credentialFromToken(token, opts) {
      let smsCode = opts && 'smsCode' in opts ? opts.smsCode : null;
      return new phone_auth.PhoneAuthCredential.__({token: token, smsCode: smsCode});
    }
    asMap() {
      return new (IdentityMapOfStringL$dynamic()).from(["providerId", this.providerId, "signInMethod", this.signInMethod, "verificationId", this.verificationId, "smsCode", this.smsCode, "token", this.token]);
    }
  };
  (phone_auth.PhoneAuthCredential.__ = function(opts) {
    let verificationId = opts && 'verificationId' in opts ? opts.verificationId : null;
    let smsCode = opts && 'smsCode' in opts ? opts.smsCode : null;
    let token = opts && 'token' in opts ? opts.token : null;
    this[verificationId$] = verificationId;
    this[smsCode$] = smsCode;
    this[token$] = token;
    phone_auth.PhoneAuthCredential.__proto__.new.call(this, {providerId: "phone", signInMethod: "phone", token: token});
    ;
  }).prototype = phone_auth.PhoneAuthCredential.prototype;
  dart.addTypeTests(phone_auth.PhoneAuthCredential);
  dart.addTypeCaches(phone_auth.PhoneAuthCredential);
  dart.setLibraryUri(phone_auth.PhoneAuthCredential, L13);
  dart.setFieldSignature(phone_auth.PhoneAuthCredential, () => ({
    __proto__: dart.getFields(phone_auth.PhoneAuthCredential.__proto__),
    verificationId: dart.finalFieldType(dart.legacy(core.String)),
    smsCode: dart.finalFieldType(dart.legacy(core.String)),
    token: dart.finalFieldType(dart.legacy(core.int))
  }));
  dart.defineLazy(phone_auth, {
    /*phone_auth._kProviderId*/get _kProviderId() {
      return "phone";
    }
  }, true);
  var _name$ = dart.privateName(types, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  types.Persistence = class Persistence extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (types.Persistence.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = types.Persistence.prototype;
  dart.addTypeTests(types.Persistence);
  dart.addTypeCaches(types.Persistence);
  dart.setMethodSignature(types.Persistence, () => ({
    __proto__: dart.getMethods(types.Persistence.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(types.Persistence, L14);
  dart.setFieldSignature(types.Persistence, () => ({
    __proto__: dart.getFields(types.Persistence.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(types.Persistence, ['toString']);
  types.Persistence.LOCAL = C0 || CT.C0;
  types.Persistence.NONE = C1 || CT.C1;
  types.Persistence.SESSION = C2 || CT.C2;
  types.Persistence.values = C3 || CT.C3;
  var _name$0 = dart.privateName(platform_interface_recaptcha_verifier_factory, "_name");
  var C4;
  var C5;
  var C6;
  platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize = class RecaptchaVerifierSize extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize.prototype;
  dart.addTypeTests(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize);
  dart.addTypeCaches(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize);
  dart.setMethodSignature(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize, () => ({
    __proto__: dart.getMethods(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize, L15);
  dart.setFieldSignature(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize, () => ({
    __proto__: dart.getFields(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$0]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize, ['toString']);
  platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize.normal = C4 || CT.C4;
  platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize.compact = C5 || CT.C5;
  platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize.values = C6 || CT.C6;
  var C7;
  var C8;
  var C9;
  platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme = class RecaptchaVerifierTheme extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme.prototype;
  dart.addTypeTests(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme);
  dart.addTypeCaches(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme);
  dart.setMethodSignature(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme, () => ({
    __proto__: dart.getMethods(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme, L15);
  dart.setFieldSignature(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme, () => ({
    __proto__: dart.getFields(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$0]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme, ['toString']);
  platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme.light = C7 || CT.C7;
  platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme.dark = C8 || CT.C8;
  platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme.values = C9 || CT.C9;
  platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform = class RecaptchaVerifierFactoryPlatform extends plugin_platform_interface.PlatformInterface {
    static get instance() {
      if (platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform._instance == null) {
        dart.throw(new core.UnimplementedError.new("RecaptchaVerifier is not implemented"));
      }
      return platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform._instance;
    }
    static set instance(instance) {
      if (!(instance != null)) dart.assertFailed(null, L16, 61, 12, "instance != null");
      plugin_platform_interface.PlatformInterface.verifyToken(instance, platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform._token);
      platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform._instance = instance;
    }
    static verifyExtends(instance) {
      if (!(instance != null)) dart.assertFailed(null, L16, 69, 12, "instance != null");
      plugin_platform_interface.PlatformInterface.verifyToken(instance, platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform._token);
    }
    get delegate() {
      dart.throw(new core.UnimplementedError.new("delegate is not implemented"));
    }
    delegateFor(opts) {
      let container = opts && 'container' in opts ? opts.container : null;
      let size = opts && 'size' in opts ? opts.size : C4 || CT.C4;
      let theme = opts && 'theme' in opts ? opts.theme : C7 || CT.C7;
      let onSuccess = opts && 'onSuccess' in opts ? opts.onSuccess : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onExpired = opts && 'onExpired' in opts ? opts.onExpired : null;
      dart.throw(new core.UnimplementedError.new("delegateFor() is not implemented"));
    }
    get type() {
      dart.throw(new core.UnimplementedError.new("type is not implemented"));
    }
    clear() {
      dart.throw(new core.UnimplementedError.new("clear() is not implemented"));
    }
    render() {
      return async.async(intL(), function* render() {
        dart.throw(new core.UnimplementedError.new("render() is not implemented"));
      });
    }
    verify() {
      return async.async(StringL(), function* verify() {
        dart.throw(new core.UnimplementedError.new("verify() is not implemented"));
      });
    }
  };
  (platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform.new = function() {
    platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform.__proto__.new.call(this, {token: platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform._token});
    ;
  }).prototype = platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform.prototype;
  dart.addTypeTests(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform);
  dart.addTypeCaches(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform);
  dart.setMethodSignature(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform, () => ({
    __proto__: dart.getMethods(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform.__proto__),
    delegateFor: dart.fnType(dart.legacy(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform), [], {container: dart.legacy(core.String), onError: dart.legacy(dart.fnType(dart.void, [dart.legacy(firebase_auth_exception.FirebaseAuthException)])), onExpired: dart.legacy(dart.fnType(dart.void, [])), onSuccess: dart.legacy(dart.fnType(dart.void, [])), size: dart.legacy(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize), theme: dart.legacy(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme)}, {}),
    clear: dart.fnType(dart.void, []),
    render: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.int))), []),
    verify: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), [])
  }));
  dart.setGetterSignature(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform, () => ({
    __proto__: dart.getGetters(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform.__proto__),
    delegate: dart.dynamic,
    type: dart.legacy(core.String)
  }));
  dart.setLibraryUri(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform, L15);
  dart.defineLazy(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform, {
    /*platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform._instance*/get _instance() {
      return null;
    },
    set _instance(_) {},
    /*platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform._token*/get _token() {
      return new core.Object.new();
    }
  }, true);
  var verificationId$0 = dart.privateName(platform_interface_confirmation_result, "ConfirmationResultPlatform.verificationId");
  platform_interface_confirmation_result.ConfirmationResultPlatform = class ConfirmationResultPlatform extends plugin_platform_interface.PlatformInterface {
    get verificationId() {
      return this[verificationId$0];
    }
    set verificationId(value) {
      super.verificationId = value;
    }
    static verifyExtends(instance) {
      if (!(instance != null)) dart.assertFailed(null, L17, 21, 12, "instance != null");
      plugin_platform_interface.PlatformInterface.verifyToken(instance, platform_interface_confirmation_result.ConfirmationResultPlatform._token);
    }
    confirm(verificationCode) {
      return async.async(UserCredentialPlatformL(), function* confirm() {
        dart.throw(new core.UnimplementedError.new("confirm() is not implemented"));
      });
    }
  };
  (platform_interface_confirmation_result.ConfirmationResultPlatform.new = function(verificationId) {
    this[verificationId$0] = verificationId;
    platform_interface_confirmation_result.ConfirmationResultPlatform.__proto__.new.call(this, {token: platform_interface_confirmation_result.ConfirmationResultPlatform._token});
    ;
  }).prototype = platform_interface_confirmation_result.ConfirmationResultPlatform.prototype;
  dart.addTypeTests(platform_interface_confirmation_result.ConfirmationResultPlatform);
  dart.addTypeCaches(platform_interface_confirmation_result.ConfirmationResultPlatform);
  dart.setMethodSignature(platform_interface_confirmation_result.ConfirmationResultPlatform, () => ({
    __proto__: dart.getMethods(platform_interface_confirmation_result.ConfirmationResultPlatform.__proto__),
    confirm: dart.fnType(dart.legacy(async.Future$(dart.legacy(platform_interface_user_credential.UserCredentialPlatform))), [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(platform_interface_confirmation_result.ConfirmationResultPlatform, L18);
  dart.setFieldSignature(platform_interface_confirmation_result.ConfirmationResultPlatform, () => ({
    __proto__: dart.getFields(platform_interface_confirmation_result.ConfirmationResultPlatform.__proto__),
    verificationId: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(platform_interface_confirmation_result.ConfirmationResultPlatform, {
    /*platform_interface_confirmation_result.ConfirmationResultPlatform._token*/get _token() {
      return new core.Object.new();
    }
  }, true);
  var verificationCompleted$ = dart.privateName(phone_auth_callbacks, "PhoneAuthCallbacks.verificationCompleted");
  var verificationFailed$ = dart.privateName(phone_auth_callbacks, "PhoneAuthCallbacks.verificationFailed");
  var codeSent$ = dart.privateName(phone_auth_callbacks, "PhoneAuthCallbacks.codeSent");
  var codeAutoRetrievalTimeout$ = dart.privateName(phone_auth_callbacks, "PhoneAuthCallbacks.codeAutoRetrievalTimeout");
  phone_auth_callbacks.PhoneAuthCallbacks = class PhoneAuthCallbacks extends core.Object {
    get verificationCompleted() {
      return this[verificationCompleted$];
    }
    set verificationCompleted(value) {
      super.verificationCompleted = value;
    }
    get verificationFailed() {
      return this[verificationFailed$];
    }
    set verificationFailed(value) {
      super.verificationFailed = value;
    }
    get codeSent() {
      return this[codeSent$];
    }
    set codeSent(value) {
      super.codeSent = value;
    }
    get codeAutoRetrievalTimeout() {
      return this[codeAutoRetrievalTimeout$];
    }
    set codeAutoRetrievalTimeout(value) {
      super.codeAutoRetrievalTimeout = value;
    }
  };
  (phone_auth_callbacks.PhoneAuthCallbacks.new = function(verificationCompleted, verificationFailed, codeSent, codeAutoRetrievalTimeout) {
    this[verificationCompleted$] = verificationCompleted;
    this[verificationFailed$] = verificationFailed;
    this[codeSent$] = codeSent;
    this[codeAutoRetrievalTimeout$] = codeAutoRetrievalTimeout;
    ;
  }).prototype = phone_auth_callbacks.PhoneAuthCallbacks.prototype;
  dart.addTypeTests(phone_auth_callbacks.PhoneAuthCallbacks);
  dart.addTypeCaches(phone_auth_callbacks.PhoneAuthCallbacks);
  dart.setLibraryUri(phone_auth_callbacks.PhoneAuthCallbacks, L19);
  dart.setFieldSignature(phone_auth_callbacks.PhoneAuthCallbacks, () => ({
    __proto__: dart.getFields(phone_auth_callbacks.PhoneAuthCallbacks.__proto__),
    verificationCompleted: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(phone_auth.PhoneAuthCredential)]))),
    verificationFailed: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(firebase_auth_exception.FirebaseAuthException)]))),
    codeSent: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.int)]))),
    codeAutoRetrievalTimeout: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(core.String)])))
  }));
  exception$.catchPlatformException = function catchPlatformException(exception) {
    return async.async(MapLOfStringL$dynamic(), function* catchPlatformException() {
      if (!ExceptionL().is(exception) || !PlatformExceptionL().is(exception)) {
        dart.throw(exception);
      }
      dart.throw(exception$.platformExceptionToFirebaseAuthException(PlatformExceptionL().as(exception)));
    });
  };
  exception$.platformExceptionToFirebaseAuthException = function platformExceptionToFirebaseAuthException(platformException) {
    let t0, t0$;
    let details = platformException.details != null ? LinkedHashMapOfStringL$dynamic().from(core.Map.as(platformException.details)) : null;
    let code = "unknown";
    let message = platformException.message;
    let email = null;
    let credential = null;
    if (details != null) {
      code = StringL().as((t0 = details[$_get]("code"), t0 == null ? code : t0));
      message = StringL().as((t0$ = details[$_get]("message"), t0$ == null ? message : t0$));
      if (details[$_get]("additionalData") != null) {
        if (dart.dsend(details[$_get]("additionalData"), '_get', ["authCredential"]) != null) {
          credential = new auth_credential.AuthCredential.new({providerId: StringL().as(dart.dsend(dart.dsend(details[$_get]("additionalData"), '_get', ["authCredential"]), '_get', ["providerId"])), signInMethod: StringL().as(dart.dsend(dart.dsend(details[$_get]("additionalData"), '_get', ["authCredential"]), '_get', ["signInMethod"])), token: intL().as(dart.dsend(dart.dsend(details[$_get]("additionalData"), '_get', ["authCredential"]), '_get', ["token"]))});
        }
        if (dart.dsend(details[$_get]("additionalData"), '_get', ["email"]) != null) {
          email = StringL().as(dart.dsend(details[$_get]("additionalData"), '_get', ["email"]));
        }
      }
    }
    return new firebase_auth_exception.FirebaseAuthException.new({code: code, message: message, email: email, credential: credential});
  };
  var _user = dart.privateName(platform_interface_user, "_user");
  var auth$ = dart.privateName(platform_interface_user, "UserPlatform.auth");
  platform_interface_user.UserPlatform = class UserPlatform extends plugin_platform_interface.PlatformInterface {
    get auth() {
      return this[auth$];
    }
    set auth(value) {
      super.auth = value;
    }
    static verifyExtends(instance) {
      if (!(instance != null)) dart.assertFailed(null, L20, 24, 12, "instance != null");
      plugin_platform_interface.PlatformInterface.verifyToken(instance, platform_interface_user.UserPlatform._token);
    }
    get displayName() {
      return StringL().as(this[_user][$_get]("displayName"));
    }
    get email() {
      return StringL().as(this[_user][$_get]("email"));
    }
    get emailVerified() {
      return boolL().as(this[_user][$_get]("emailVerified"));
    }
    get isAnonymous() {
      return boolL().as(this[_user][$_get]("isAnonymous"));
    }
    get metadata() {
      return new user_metadata.UserMetadata.new(intL().as(dart.dsend(this[_user][$_get]("metadata"), '_get', ["creationTime"])), intL().as(dart.dsend(this[_user][$_get]("metadata"), '_get', ["lastSignInTime"])));
    }
    get phoneNumber() {
      return StringL().as(this[_user][$_get]("phoneNumber"));
    }
    get photoURL() {
      return StringL().as(this[_user][$_get]("photoURL"));
    }
    get providerData() {
      return core.List.from(core.Iterable.as(this[_user][$_get]("providerData")))[$map](UserInfoL(), dart.fn(data => new user_info.UserInfo.new(LinkedHashMapOfStringL$dynamic().from(core.Map.as(data))), dynamicToUserInfoL()))[$toList]();
    }
    get refreshToken() {
      return StringL().as(this[_user][$_get]("refreshToken"));
    }
    get tenantId() {
      return StringL().as(this[_user][$_get]("tenantId"));
    }
    get uid() {
      return StringL().as(this[_user][$_get]("uid"));
    }
    delete() {
      return async.async(dart.void, function* $delete() {
        dart.throw(new core.UnimplementedError.new("delete() is not implemented"));
      });
    }
    getIdToken(forceRefresh) {
      dart.throw(new core.UnimplementedError.new("getIdToken() is not implemented"));
    }
    getIdTokenResult(forceRefresh) {
      dart.throw(new core.UnimplementedError.new("getIdTokenResult() is not implemented"));
    }
    linkWithCredential(credential) {
      dart.throw(new core.UnimplementedError.new("linkWithCredential() is not implemented"));
    }
    linkWithPhoneNumber(phoneNumber, applicationVerifier) {
      dart.throw(new core.UnimplementedError.new("linkWithPhoneNumber() is not implemented"));
    }
    reauthenticateWithCredential(credential) {
      dart.throw(new core.UnimplementedError.new("reauthenticateWithCredential() is not implemented"));
    }
    reload() {
      return async.async(dart.void, function* reload() {
        dart.throw(new core.UnimplementedError.new("reload() is not implemented"));
      });
    }
    sendEmailVerification(actionCodeSettings) {
      return async.async(dart.void, function* sendEmailVerification() {
        dart.throw(new core.UnimplementedError.new("sendEmailVerification() is not implemented"));
      });
    }
    unlink(providerId) {
      return async.async(UserPlatformL(), function* unlink() {
        dart.throw(new core.UnimplementedError.new("unlink() is not implemented"));
      });
    }
    updateEmail(newEmail) {
      return async.async(dart.void, function* updateEmail() {
        dart.throw(new core.UnimplementedError.new("updateEmail() is not implemented"));
      });
    }
    updatePassword(newPassword) {
      return async.async(dart.void, function* updatePassword() {
        dart.throw(new core.UnimplementedError.new("updatePassword() is not implemented"));
      });
    }
    updatePhoneNumber(phoneCredential) {
      return async.async(dart.void, function* updatePhoneNumber() {
        dart.throw(new core.UnimplementedError.new("updatePhoneNumber() is not implemented"));
      });
    }
    updateProfile(profile) {
      return async.async(dart.void, function* updateProfile() {
        dart.throw(new core.UnimplementedError.new("updateProfile() is not implemented"));
      });
    }
    verifyBeforeUpdateEmail(newEmail, actionCodeSettings = null) {
      return async.async(dart.void, function* verifyBeforeUpdateEmail() {
        dart.throw(new core.UnimplementedError.new("verifyBeforeUpdateEmail() is not implemented"));
      });
    }
  };
  (platform_interface_user.UserPlatform.new = function(auth, user) {
    this[auth$] = auth;
    if (!(user != null)) dart.assertFailed(null, L20, 16, 16, "user != null");
    this[_user] = user;
    platform_interface_user.UserPlatform.__proto__.new.call(this, {token: platform_interface_user.UserPlatform._token});
    ;
  }).prototype = platform_interface_user.UserPlatform.prototype;
  dart.addTypeTests(platform_interface_user.UserPlatform);
  dart.addTypeCaches(platform_interface_user.UserPlatform);
  dart.setMethodSignature(platform_interface_user.UserPlatform, () => ({
    __proto__: dart.getMethods(platform_interface_user.UserPlatform.__proto__),
    delete: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    getIdToken: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), [dart.legacy(core.bool)]),
    getIdTokenResult: dart.fnType(dart.legacy(async.Future$(dart.legacy(id_token_result.IdTokenResult))), [dart.legacy(core.bool)]),
    linkWithCredential: dart.fnType(dart.legacy(async.Future$(dart.legacy(platform_interface_user_credential.UserCredentialPlatform))), [dart.legacy(auth_credential.AuthCredential)]),
    linkWithPhoneNumber: dart.fnType(dart.legacy(async.Future$(dart.legacy(platform_interface_confirmation_result.ConfirmationResultPlatform))), [dart.legacy(core.String), dart.legacy(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform)]),
    reauthenticateWithCredential: dart.fnType(dart.legacy(async.Future$(dart.legacy(platform_interface_user_credential.UserCredentialPlatform))), [dart.legacy(auth_credential.AuthCredential)]),
    reload: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    sendEmailVerification: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(action_code_settings.ActionCodeSettings)]),
    unlink: dart.fnType(dart.legacy(async.Future$(dart.legacy(platform_interface_user.UserPlatform))), [dart.legacy(core.String)]),
    updateEmail: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String)]),
    updatePassword: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String)]),
    updatePhoneNumber: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(phone_auth.PhoneAuthCredential)]),
    updateProfile: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))]),
    verifyBeforeUpdateEmail: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String)], [dart.legacy(action_code_settings.ActionCodeSettings)])
  }));
  dart.setGetterSignature(platform_interface_user.UserPlatform, () => ({
    __proto__: dart.getGetters(platform_interface_user.UserPlatform.__proto__),
    displayName: dart.legacy(core.String),
    email: dart.legacy(core.String),
    emailVerified: dart.legacy(core.bool),
    isAnonymous: dart.legacy(core.bool),
    metadata: dart.legacy(user_metadata.UserMetadata),
    phoneNumber: dart.legacy(core.String),
    photoURL: dart.legacy(core.String),
    providerData: dart.legacy(core.List$(dart.legacy(user_info.UserInfo))),
    refreshToken: dart.legacy(core.String),
    tenantId: dart.legacy(core.String),
    uid: dart.legacy(core.String)
  }));
  dart.setLibraryUri(platform_interface_user.UserPlatform, L21);
  dart.setFieldSignature(platform_interface_user.UserPlatform, () => ({
    __proto__: dart.getFields(platform_interface_user.UserPlatform.__proto__),
    auth: dart.finalFieldType(dart.legacy(platform_interface_firebase_auth.FirebaseAuthPlatform)),
    [_user]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)))
  }));
  dart.defineLazy(platform_interface_user.UserPlatform, {
    /*platform_interface_user.UserPlatform._token*/get _token() {
      return new core.Object.new();
    }
  }, true);
  var auth$0 = dart.privateName(platform_interface_user_credential, "UserCredentialPlatform.auth");
  var additionalUserInfo$ = dart.privateName(platform_interface_user_credential, "UserCredentialPlatform.additionalUserInfo");
  var credential$ = dart.privateName(platform_interface_user_credential, "UserCredentialPlatform.credential");
  var user$ = dart.privateName(platform_interface_user_credential, "UserCredentialPlatform.user");
  platform_interface_user_credential.UserCredentialPlatform = class UserCredentialPlatform extends plugin_platform_interface.PlatformInterface {
    get auth() {
      return this[auth$0];
    }
    set auth(value) {
      super.auth = value;
    }
    get additionalUserInfo() {
      return this[additionalUserInfo$];
    }
    set additionalUserInfo(value) {
      super.additionalUserInfo = value;
    }
    get credential() {
      return this[credential$];
    }
    set credential(value) {
      super.credential = value;
    }
    get user() {
      return this[user$];
    }
    set user(value) {
      super.user = value;
    }
    static verifyExtends(instance) {
      if (!(instance != null)) dart.assertFailed(null, L22, 22, 12, "instance != null");
      plugin_platform_interface.PlatformInterface.verifyToken(instance, platform_interface_user_credential.UserCredentialPlatform._token);
    }
  };
  (platform_interface_user_credential.UserCredentialPlatform.new = function(opts) {
    let auth = opts && 'auth' in opts ? opts.auth : null;
    let additionalUserInfo = opts && 'additionalUserInfo' in opts ? opts.additionalUserInfo : null;
    let credential = opts && 'credential' in opts ? opts.credential : null;
    let user = opts && 'user' in opts ? opts.user : null;
    this[auth$0] = auth;
    this[additionalUserInfo$] = additionalUserInfo;
    this[credential$] = credential;
    this[user$] = user;
    platform_interface_user_credential.UserCredentialPlatform.__proto__.new.call(this, {token: platform_interface_user_credential.UserCredentialPlatform._token});
    ;
  }).prototype = platform_interface_user_credential.UserCredentialPlatform.prototype;
  dart.addTypeTests(platform_interface_user_credential.UserCredentialPlatform);
  dart.addTypeCaches(platform_interface_user_credential.UserCredentialPlatform);
  dart.setLibraryUri(platform_interface_user_credential.UserCredentialPlatform, L23);
  dart.setFieldSignature(platform_interface_user_credential.UserCredentialPlatform, () => ({
    __proto__: dart.getFields(platform_interface_user_credential.UserCredentialPlatform.__proto__),
    auth: dart.finalFieldType(dart.legacy(platform_interface_firebase_auth.FirebaseAuthPlatform)),
    additionalUserInfo: dart.finalFieldType(dart.legacy(additional_user_info.AdditionalUserInfo)),
    credential: dart.finalFieldType(dart.legacy(auth_credential.AuthCredential)),
    user: dart.finalFieldType(dart.legacy(platform_interface_user.UserPlatform))
  }));
  dart.defineLazy(platform_interface_user_credential.UserCredentialPlatform, {
    /*platform_interface_user_credential.UserCredentialPlatform._token*/get _token() {
      return new core.Object.new();
    }
  }, true);
  method_channel_user_credential.MethodChannelUserCredential = class MethodChannelUserCredential extends platform_interface_user_credential.UserCredentialPlatform {};
  (method_channel_user_credential.MethodChannelUserCredential.new = function(auth, data) {
    let t0;
    if (!(data != null)) dart.assertFailed(null, L24, 14, 16, "data != null");
    method_channel_user_credential.MethodChannelUserCredential.__proto__.new.call(this, {auth: auth, additionalUserInfo: data[$_get]("additionalUserInfo") == null ? null : new additional_user_info.AdditionalUserInfo.new({isNewUser: boolL().as(dart.dsend(data[$_get]("additionalUserInfo"), '_get', ["isNewUser"])), profile: LinkedHashMapOfStringL$dynamic().from(core.Map.as((t0 = dart.dsend(data[$_get]("additionalUserInfo"), '_get', ["profile"]), t0 == null ? new _js_helper.LinkedMap.new() : t0))), providerId: StringL().as(dart.dsend(data[$_get]("additionalUserInfo"), '_get', ["providerId"])), username: StringL().as(dart.dsend(data[$_get]("additionalUserInfo"), '_get', ["username"]))}), credential: data[$_get]("authCredential") == null ? null : new auth_credential.AuthCredential.new({providerId: StringL().as(dart.dsend(data[$_get]("authCredential"), '_get', ["providerId"])), signInMethod: StringL().as(dart.dsend(data[$_get]("authCredential"), '_get', ["signInMethod"]))}), user: data[$_get]("user") == null ? null : new method_channel_user.MethodChannelUser.new(auth, LinkedHashMapOfStringL$dynamic().from(core.Map.as(data[$_get]("user"))))});
    ;
  }).prototype = method_channel_user_credential.MethodChannelUserCredential.prototype;
  dart.addTypeTests(method_channel_user_credential.MethodChannelUserCredential);
  dart.addTypeCaches(method_channel_user_credential.MethodChannelUserCredential);
  dart.setLibraryUri(method_channel_user_credential.MethodChannelUserCredential, L25);
  var C10;
  method_channel_user.MethodChannelUser = class MethodChannelUser extends platform_interface_user.UserPlatform {
    delete() {
      return async.async(dart.void, (function* $delete() {
        return method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMethod(dart.void, "User#delete", new (IdentityMapOfStringL$dynamic()).from(["appName", this.auth.app.name])).catchError(C10 || CT.C10);
      }).bind(this));
    }
    getIdToken(forceRefresh) {
      return async.async(StringL(), (function* getIdToken() {
        let data = (yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMapMethod(StringL(), dart.dynamic, "User#getIdToken", new (IdentityMapOfStringL$dynamic()).from(["appName", this.auth.app.name, "forceRefresh", forceRefresh, "tokenOnly", true])).catchError(C10 || CT.C10));
        return FutureOrLOfStringL().as(data[$_get]("token"));
      }).bind(this));
    }
    getIdTokenResult(forceRefresh) {
      return async.async(IdTokenResultL(), (function* getIdTokenResult() {
        let data = (yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMapMethod(StringL(), dart.dynamic, "User#getIdToken", new (IdentityMapOfStringL$dynamic()).from(["appName", this.auth.app.name, "forceRefresh", forceRefresh, "tokenOnly", false])).catchError(C10 || CT.C10));
        return new id_token_result.IdTokenResult.new(data);
      }).bind(this));
    }
    linkWithCredential(credential) {
      return async.async(UserCredentialPlatformL(), (function* linkWithCredential() {
        let data = (yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMapMethod(StringL(), dart.dynamic, "User#linkWithCredential", new (IdentityMapOfStringL$dynamic()).from(["appName", this.auth.app.name, "credential", credential.asMap()])).catchError(C10 || CT.C10));
        let userCredential = new method_channel_user_credential.MethodChannelUserCredential.new(this.auth, data);
        this.auth.currentUser = userCredential.user;
        return userCredential;
      }).bind(this));
    }
    reauthenticateWithCredential(credential) {
      return async.async(UserCredentialPlatformL(), (function* reauthenticateWithCredential() {
        let data = (yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMapMethod(StringL(), dart.dynamic, "User#reauthenticateUserWithCredential", new (IdentityMapOfStringL$dynamic()).from(["appName", this.auth.app.name, "credential", credential.asMap()])).catchError(C10 || CT.C10));
        let userCredential = new method_channel_user_credential.MethodChannelUserCredential.new(this.auth, data);
        this.auth.currentUser = userCredential.user;
        return userCredential;
      }).bind(this));
    }
    reload() {
      return async.async(dart.void, (function* reload() {
        let data = (yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMapMethod(StringL(), dart.dynamic, "User#reload", new (IdentityMapOfStringL$dynamic()).from(["appName", this.auth.app.name])).catchError(C10 || CT.C10));
        let user = new method_channel_user.MethodChannelUser.new(this.auth, data);
        this.auth.currentUser = user;
        this.auth.sendAuthChangesEvent(this.auth.app.name, user);
      }).bind(this));
    }
    sendEmailVerification(actionCodeSettings) {
      return async.async(dart.void, (function* sendEmailVerification() {
        let t0;
        return method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMethod(dart.void, "User#sendEmailVerification", new (IdentityMapOfStringL$dynamic()).from(["appName", this.auth.app.name, "actionCodeSettings", (t0 = actionCodeSettings, t0 == null ? null : t0.asMap())])).catchError(C10 || CT.C10);
      }).bind(this));
    }
    unlink(providerId) {
      return async.async(UserPlatformL(), (function* unlink() {
        let data = (yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMapMethod(StringL(), dart.dynamic, "User#unlink", new (IdentityMapOfStringL$dynamic()).from(["appName", this.auth.app.name, "providerId", providerId])).catchError(C10 || CT.C10));
        let userCredential = new method_channel_user_credential.MethodChannelUserCredential.new(this.auth, data);
        let user = MethodChannelUserL().as(userCredential.user);
        this.auth.currentUser = user;
        this.auth.sendAuthChangesEvent(this.auth.app.name, user);
        return user;
      }).bind(this));
    }
    updateEmail(newEmail) {
      return async.async(dart.void, (function* updateEmail() {
        let data = (yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMapMethod(StringL(), dart.dynamic, "User#updateEmail", new (IdentityMapOfStringL$dynamic()).from(["appName", this.auth.app.name, "newEmail", newEmail])).catchError(C10 || CT.C10));
        let user = new method_channel_user.MethodChannelUser.new(this.auth, data);
        this.auth.currentUser = user;
        this.auth.sendAuthChangesEvent(this.auth.app.name, user);
      }).bind(this));
    }
    updatePassword(newPassword) {
      return async.async(dart.void, (function* updatePassword() {
        let data = (yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMapMethod(StringL(), dart.dynamic, "User#updatePassword", new (IdentityMapOfStringL$dynamic()).from(["appName", this.auth.app.name, "newPassword", newPassword])).catchError(C10 || CT.C10));
        let user = new method_channel_user.MethodChannelUser.new(this.auth, data);
        this.auth.currentUser = user;
        this.auth.sendAuthChangesEvent(this.auth.app.name, user);
      }).bind(this));
    }
    updatePhoneNumber(phoneCredential) {
      return async.async(dart.void, (function* updatePhoneNumber() {
        let data = (yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMapMethod(StringL(), dart.dynamic, "User#updatePhoneNumber", new (IdentityMapOfStringL$dynamic()).from(["appName", this.auth.app.name, "credential", phoneCredential.asMap()])).catchError(C10 || CT.C10));
        let user = new method_channel_user.MethodChannelUser.new(this.auth, data);
        this.auth.currentUser = user;
        this.auth.sendAuthChangesEvent(this.auth.app.name, user);
      }).bind(this));
    }
    updateProfile(profile) {
      return async.async(dart.void, (function* updateProfile() {
        let data = (yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMapMethod(StringL(), dart.dynamic, "User#updateProfile", new (IdentityMapOfStringL$dynamic()).from(["appName", this.auth.app.name, "profile", profile])).catchError(C10 || CT.C10));
        let user = new method_channel_user.MethodChannelUser.new(this.auth, data);
        this.auth.currentUser = user;
        this.auth.sendAuthChangesEvent(this.auth.app.name, user);
      }).bind(this));
    }
    verifyBeforeUpdateEmail(newEmail, actionCodeSettings = null) {
      return async.async(dart.void, (function* verifyBeforeUpdateEmail() {
        let t0;
        return method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMethod(dart.void, "User#verifyBeforeUpdateEmail", new (IdentityMapOfStringL$dynamic()).from(["appName", this.auth.app.name, "newEmail", newEmail, "actionCodeSettings", (t0 = actionCodeSettings, t0 == null ? null : t0.asMap())])).catchError(C10 || CT.C10);
      }).bind(this));
    }
  };
  (method_channel_user.MethodChannelUser.new = function(auth, data) {
    if (!(data != null)) dart.assertFailed(null, L26, 18, 16, "data != null");
    method_channel_user.MethodChannelUser.__proto__.new.call(this, auth, data);
    ;
  }).prototype = method_channel_user.MethodChannelUser.prototype;
  dart.addTypeTests(method_channel_user.MethodChannelUser);
  dart.addTypeCaches(method_channel_user.MethodChannelUser);
  dart.setLibraryUri(method_channel_user.MethodChannelUser, L27);
  var _currentUser = dart.privateName(method_channel_firebase_auth, "_currentUser");
  var _createBroadcastStream = dart.privateName(method_channel_firebase_auth, "_createBroadcastStream");
  var _handleAuthStateChangesListener = dart.privateName(method_channel_firebase_auth, "_handleAuthStateChangesListener");
  var _handleIdTokenChangesListener = dart.privateName(method_channel_firebase_auth, "_handleIdTokenChangesListener");
  var _handlePhoneVerificationCompleted = dart.privateName(method_channel_firebase_auth, "_handlePhoneVerificationCompleted");
  var _handlePhoneVerificationFailed = dart.privateName(method_channel_firebase_auth, "_handlePhoneVerificationFailed");
  var _handlePhoneCodeSent = dart.privateName(method_channel_firebase_auth, "_handlePhoneCodeSent");
  var _handlePhoneCodeAutoRetrievalTimeout = dart.privateName(method_channel_firebase_auth, "_handlePhoneCodeAutoRetrievalTimeout");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C11;
  var appInstance$ = dart.privateName(platform_interface_firebase_auth, "FirebaseAuthPlatform.appInstance");
  platform_interface_firebase_auth.FirebaseAuthPlatform = class FirebaseAuthPlatform extends plugin_platform_interface.PlatformInterface {
    get appInstance() {
      return this[appInstance$];
    }
    set appInstance(value) {
      super.appInstance = value;
    }
    get app() {
      if (this.appInstance == null) {
        return firebase_core.Firebase.app();
      }
      return this.appInstance;
    }
    static instanceFor(opts) {
      let app = opts && 'app' in opts ? opts.app : null;
      let pluginConstants = opts && 'pluginConstants' in opts ? opts.pluginConstants : null;
      return platform_interface_firebase_auth.FirebaseAuthPlatform.instance.delegateFor({app: app}).setInitialValues({languageCode: StringL().as(pluginConstants[$_get]("APP_LANGUAGE_CODE")), currentUser: pluginConstants[$_get]("APP_CURRENT_USER") == null ? null : LinkedHashMapOfStringL$dynamic().from(core.Map.as(pluginConstants[$_get]("APP_CURRENT_USER")))});
    }
    static get instance() {
      if (platform_interface_firebase_auth.FirebaseAuthPlatform._instance == null) {
        platform_interface_firebase_auth.FirebaseAuthPlatform._instance = method_channel_firebase_auth.MethodChannelFirebaseAuth.instance;
      }
      return platform_interface_firebase_auth.FirebaseAuthPlatform._instance;
    }
    static set instance(instance) {
      if (!(instance != null)) dart.assertFailed(null, L29, 66, 12, "instance != null");
      plugin_platform_interface.PlatformInterface.verifyToken(instance, platform_interface_firebase_auth.FirebaseAuthPlatform._token);
      platform_interface_firebase_auth.FirebaseAuthPlatform._instance = instance;
    }
    delegateFor(opts) {
      let app = opts && 'app' in opts ? opts.app : null;
      dart.throw(new core.UnimplementedError.new("delegateFor() is not implemented"));
    }
    setInitialValues(opts) {
      let currentUser = opts && 'currentUser' in opts ? opts.currentUser : null;
      let languageCode = opts && 'languageCode' in opts ? opts.languageCode : null;
      dart.throw(new core.UnimplementedError.new("setInitialValues() is not implemented"));
    }
    get currentUser() {
      dart.throw(new core.UnimplementedError.new("get.currentUser is not implemented"));
    }
    set currentUser(userPlatform) {
      dart.throw(new core.UnimplementedError.new("set.currentUser is not implemented"));
    }
    get languageCode() {
      dart.throw(new core.UnimplementedError.new("languageCode is not implemented"));
    }
    sendAuthChangesEvent(appName, userPlatform) {
      dart.throw(new core.UnimplementedError.new("sendAuthChangesEvent() is not implemented"));
    }
    applyActionCode(code) {
      dart.throw(new core.UnimplementedError.new("applyActionCode() is not implemented"));
    }
    checkActionCode(code) {
      dart.throw(new core.UnimplementedError.new("checkActionCode() is not implemented"));
    }
    confirmPasswordReset(code, newPassword) {
      dart.throw(new core.UnimplementedError.new("confirmPasswordReset() is not implemented"));
    }
    createUserWithEmailAndPassword(email, password) {
      dart.throw(new core.UnimplementedError.new("createUserWithEmailAndPassword() is not implemented"));
    }
    fetchSignInMethodsForEmail(email) {
      dart.throw(new core.UnimplementedError.new("fetchSignInMethodsForEmail() is not implemented"));
    }
    getRedirectResult() {
      dart.throw(new core.UnimplementedError.new("getRedirectResult() is not implemented"));
    }
    isSignInWithEmailLink(emailLink) {
      if (!(emailLink != null)) dart.assertFailed(null, L29, 229, 12, "emailLink != null");
      return (emailLink[$contains]("mode=signIn") || emailLink[$contains]("mode%3DsignIn")) && (emailLink[$contains]("oobCode=") || emailLink[$contains]("oobCode%3D"));
    }
    authStateChanges() {
      dart.throw(new core.UnimplementedError.new("authStateChanges() is not implemented"));
    }
    idTokenChanges() {
      dart.throw(new core.UnimplementedError.new("idTokenChanges() is not implemented"));
    }
    userChanges() {
      dart.throw(new core.UnimplementedError.new("userChanges() is not implemented"));
    }
    sendPasswordResetEmail(email, actionCodeSettings = null) {
      dart.throw(new core.UnimplementedError.new("sendPasswordResetEmail() is not implemented"));
    }
    sendSignInLinkToEmail(email, actionCodeSettings) {
      dart.throw(new core.UnimplementedError.new("sendSignInLinkToEmail() is not implemented"));
    }
    setLanguageCode(languageCode) {
      dart.throw(new core.UnimplementedError.new("setLanguageCode() is not implemented"));
    }
    setSettings(opts) {
      let appVerificationDisabledForTesting = opts && 'appVerificationDisabledForTesting' in opts ? opts.appVerificationDisabledForTesting : null;
      let userAccessGroup = opts && 'userAccessGroup' in opts ? opts.userAccessGroup : null;
      dart.throw(new core.UnimplementedError.new("setSettings() is not implemented"));
    }
    setPersistence(persistence) {
      return async.async(dart.void, function* setPersistence() {
        dart.throw(new core.UnimplementedError.new("setPersistence() is not implemented"));
      });
    }
    signInAnonymously() {
      return async.async(UserCredentialPlatformL(), function* signInAnonymously() {
        dart.throw(new core.UnimplementedError.new("signInAnonymously() is not implemented"));
      });
    }
    signInWithCredential(credential) {
      return async.async(UserCredentialPlatformL(), function* signInWithCredential() {
        dart.throw(new core.UnimplementedError.new("signInWithCredential() is not implemented"));
      });
    }
    signInWithCustomToken(token) {
      return async.async(UserCredentialPlatformL(), function* signInWithCustomToken() {
        dart.throw(new core.UnimplementedError.new("signInWithCustomToken() is not implemented"));
      });
    }
    signInWithEmailAndPassword(email, password) {
      return async.async(UserCredentialPlatformL(), function* signInWithEmailAndPassword() {
        dart.throw(new core.UnimplementedError.new("signInWithEmailAndPassword() is not implemented"));
      });
    }
    signInWithEmailLink(email, emailLink) {
      return async.async(UserCredentialPlatformL(), function* signInWithEmailLink() {
        dart.throw(new core.UnimplementedError.new("signInWithEmailLink() is not implemented"));
      });
    }
    signInWithPhoneNumber(phoneNumber, applicationVerifier) {
      return async.async(ConfirmationResultPlatformL(), function* signInWithPhoneNumber() {
        dart.throw(new core.UnimplementedError.new("signInWithPhoneNumber() is not implemented"));
      });
    }
    signInWithPopup(provider) {
      dart.throw(new core.UnimplementedError.new("signInWithPopup() is not implemented"));
    }
    signInWithRedirect(provider) {
      dart.throw(new core.UnimplementedError.new("signInWithRedirect() is not implemented"));
    }
    signOut() {
      return async.async(dart.void, function* signOut() {
        dart.throw(new core.UnimplementedError.new("signOut() is not implemented"));
      });
    }
    verifyPasswordResetCode(code) {
      dart.throw(new core.UnimplementedError.new("verifyPasswordResetCode() is not implemented"));
    }
    verifyPhoneNumber(opts) {
      let phoneNumber = opts && 'phoneNumber' in opts ? opts.phoneNumber : null;
      let verificationCompleted = opts && 'verificationCompleted' in opts ? opts.verificationCompleted : null;
      let verificationFailed = opts && 'verificationFailed' in opts ? opts.verificationFailed : null;
      let codeSent = opts && 'codeSent' in opts ? opts.codeSent : null;
      let codeAutoRetrievalTimeout = opts && 'codeAutoRetrievalTimeout' in opts ? opts.codeAutoRetrievalTimeout : null;
      let autoRetrievedSmsCodeForTesting = opts && 'autoRetrievedSmsCodeForTesting' in opts ? opts.autoRetrievedSmsCodeForTesting : null;
      let timeout = opts && 'timeout' in opts ? opts.timeout : C11 || CT.C11;
      let forceResendingToken = opts && 'forceResendingToken' in opts ? opts.forceResendingToken : null;
      dart.throw(new core.UnimplementedError.new("verifyPhoneNumber() is not implemented"));
    }
  };
  (platform_interface_firebase_auth.FirebaseAuthPlatform.new = function(opts) {
    let appInstance = opts && 'appInstance' in opts ? opts.appInstance : null;
    this[appInstance$] = appInstance;
    platform_interface_firebase_auth.FirebaseAuthPlatform.__proto__.new.call(this, {token: platform_interface_firebase_auth.FirebaseAuthPlatform._token});
    ;
  }).prototype = platform_interface_firebase_auth.FirebaseAuthPlatform.prototype;
  dart.addTypeTests(platform_interface_firebase_auth.FirebaseAuthPlatform);
  dart.addTypeCaches(platform_interface_firebase_auth.FirebaseAuthPlatform);
  dart.setMethodSignature(platform_interface_firebase_auth.FirebaseAuthPlatform, () => ({
    __proto__: dart.getMethods(platform_interface_firebase_auth.FirebaseAuthPlatform.__proto__),
    delegateFor: dart.fnType(dart.legacy(platform_interface_firebase_auth.FirebaseAuthPlatform), [], {app: dart.legacy(firebase_core.FirebaseApp)}, {}),
    setInitialValues: dart.fnType(dart.legacy(platform_interface_firebase_auth.FirebaseAuthPlatform), [], {currentUser: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), languageCode: dart.legacy(core.String)}, {}),
    sendAuthChangesEvent: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(platform_interface_user.UserPlatform)]),
    applyActionCode: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String)]),
    checkActionCode: dart.fnType(dart.legacy(async.Future$(dart.legacy(action_code_info.ActionCodeInfo))), [dart.legacy(core.String)]),
    confirmPasswordReset: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String), dart.legacy(core.String)]),
    createUserWithEmailAndPassword: dart.fnType(dart.legacy(async.Future$(dart.legacy(platform_interface_user_credential.UserCredentialPlatform))), [dart.legacy(core.String), dart.legacy(core.String)]),
    fetchSignInMethodsForEmail: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.List$(dart.legacy(core.String))))), [dart.legacy(core.String)]),
    getRedirectResult: dart.fnType(dart.legacy(async.Future$(dart.legacy(platform_interface_user_credential.UserCredentialPlatform))), []),
    isSignInWithEmailLink: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    authStateChanges: dart.fnType(dart.legacy(async.Stream$(dart.legacy(platform_interface_user.UserPlatform))), []),
    idTokenChanges: dart.fnType(dart.legacy(async.Stream$(dart.legacy(platform_interface_user.UserPlatform))), []),
    userChanges: dart.fnType(dart.legacy(async.Stream$(dart.legacy(platform_interface_user.UserPlatform))), []),
    sendPasswordResetEmail: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String)], [dart.legacy(action_code_settings.ActionCodeSettings)]),
    sendSignInLinkToEmail: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String), dart.legacy(action_code_settings.ActionCodeSettings)]),
    setLanguageCode: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String)]),
    setSettings: dart.fnType(dart.legacy(async.Future$(dart.void)), [], {appVerificationDisabledForTesting: dart.legacy(core.bool), userAccessGroup: dart.legacy(core.String)}, {}),
    setPersistence: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(types.Persistence)]),
    signInAnonymously: dart.fnType(dart.legacy(async.Future$(dart.legacy(platform_interface_user_credential.UserCredentialPlatform))), []),
    signInWithCredential: dart.fnType(dart.legacy(async.Future$(dart.legacy(platform_interface_user_credential.UserCredentialPlatform))), [dart.legacy(auth_credential.AuthCredential)]),
    signInWithCustomToken: dart.fnType(dart.legacy(async.Future$(dart.legacy(platform_interface_user_credential.UserCredentialPlatform))), [dart.legacy(core.String)]),
    signInWithEmailAndPassword: dart.fnType(dart.legacy(async.Future$(dart.legacy(platform_interface_user_credential.UserCredentialPlatform))), [dart.legacy(core.String), dart.legacy(core.String)]),
    signInWithEmailLink: dart.fnType(dart.legacy(async.Future$(dart.legacy(platform_interface_user_credential.UserCredentialPlatform))), [dart.legacy(core.String), dart.legacy(core.String)]),
    signInWithPhoneNumber: dart.fnType(dart.legacy(async.Future$(dart.legacy(platform_interface_confirmation_result.ConfirmationResultPlatform))), [dart.legacy(core.String), dart.legacy(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform)]),
    signInWithPopup: dart.fnType(dart.legacy(async.Future$(dart.legacy(platform_interface_user_credential.UserCredentialPlatform))), [dart.legacy(auth_provider.AuthProvider)]),
    signInWithRedirect: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(auth_provider.AuthProvider)]),
    signOut: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    verifyPasswordResetCode: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), [dart.legacy(core.String)]),
    verifyPhoneNumber: dart.fnType(dart.legacy(async.Future$(dart.void)), [], {autoRetrievedSmsCodeForTesting: dart.legacy(core.String), codeAutoRetrievalTimeout: dart.legacy(dart.fnType(dart.void, [dart.legacy(core.String)])), codeSent: dart.legacy(dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.int)])), forceResendingToken: dart.legacy(core.int), phoneNumber: dart.legacy(core.String), timeout: dart.legacy(core.Duration), verificationCompleted: dart.legacy(dart.fnType(dart.void, [dart.legacy(phone_auth.PhoneAuthCredential)])), verificationFailed: dart.legacy(dart.fnType(dart.void, [dart.legacy(firebase_auth_exception.FirebaseAuthException)]))}, {})
  }));
  dart.setGetterSignature(platform_interface_firebase_auth.FirebaseAuthPlatform, () => ({
    __proto__: dart.getGetters(platform_interface_firebase_auth.FirebaseAuthPlatform.__proto__),
    app: dart.legacy(firebase_core.FirebaseApp),
    currentUser: dart.legacy(platform_interface_user.UserPlatform),
    languageCode: dart.legacy(core.String)
  }));
  dart.setSetterSignature(platform_interface_firebase_auth.FirebaseAuthPlatform, () => ({
    __proto__: dart.getSetters(platform_interface_firebase_auth.FirebaseAuthPlatform.__proto__),
    currentUser: dart.legacy(platform_interface_user.UserPlatform)
  }));
  dart.setLibraryUri(platform_interface_firebase_auth.FirebaseAuthPlatform, L30);
  dart.setFieldSignature(platform_interface_firebase_auth.FirebaseAuthPlatform, () => ({
    __proto__: dart.getFields(platform_interface_firebase_auth.FirebaseAuthPlatform.__proto__),
    appInstance: dart.finalFieldType(dart.legacy(firebase_core.FirebaseApp))
  }));
  dart.defineLazy(platform_interface_firebase_auth.FirebaseAuthPlatform, {
    /*platform_interface_firebase_auth.FirebaseAuthPlatform._token*/get _token() {
      return new core.Object.new();
    },
    /*platform_interface_firebase_auth.FirebaseAuthPlatform._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  }, true);
  var languageCode = dart.privateName(method_channel_firebase_auth, "MethodChannelFirebaseAuth.languageCode");
  var MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  var C14;
  var StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  var C13;
  var MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  var MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  var C12;
  method_channel_firebase_auth.MethodChannelFirebaseAuth = class MethodChannelFirebaseAuth extends platform_interface_firebase_auth.FirebaseAuthPlatform {
    get languageCode() {
      return this[languageCode];
    }
    set languageCode(value) {
      this[languageCode] = value;
    }
    static get nextMethodChannelHandleId() {
      let t0;
      t0 = method_channel_firebase_auth.MethodChannelFirebaseAuth._methodChannelHandleId;
      method_channel_firebase_auth.MethodChannelFirebaseAuth._methodChannelHandleId = dart.notNull(t0) + 1;
      return t0;
    }
    [_createBroadcastStream](T) {
      return async.StreamController$(dart.legacy(T)).broadcast();
    }
    static get instance() {
      return new method_channel_firebase_auth.MethodChannelFirebaseAuth.__();
    }
    get currentUser() {
      return this[_currentUser];
    }
    set currentUser(userPlatform) {
      this[_currentUser] = userPlatform;
    }
    sendAuthChangesEvent(appName, userPlatform) {
      if (!(appName != null)) dart.assertFailed(null, L28, 126, 12, "appName != null");
      if (!(method_channel_firebase_auth.MethodChannelFirebaseAuth._userChangesListeners[$_get](appName) != null)) dart.assertFailed(null, L28, 127, 12, "_userChangesListeners[appName] != null");
      method_channel_firebase_auth.MethodChannelFirebaseAuth._userChangesListeners[$_get](appName).add(userPlatform);
    }
    [_handleAuthStateChangesListener]($arguments) {
      return async.async(dart.void, function* _handleAuthStateChangesListener() {
        let appName = StringL().as($arguments[$_get]("appName"));
        let streamController = method_channel_firebase_auth.MethodChannelFirebaseAuth._authStateChangesListeners[$_get](appName);
        let instance = method_channel_firebase_auth.MethodChannelFirebaseAuth._methodChannelFirebaseAuthInstances[$_get](appName);
        if ($arguments[$_get]("user") == null) {
          instance.currentUser = null;
          streamController.add(null);
        } else {
          let userMap = LinkedHashMapOfStringL$dynamic().from(core.Map.as($arguments[$_get]("user")));
          let user = new method_channel_user.MethodChannelUser.new(instance, userMap);
          instance.currentUser = user;
          streamController.add(new method_channel_user.MethodChannelUser.new(instance, userMap));
        }
      });
    }
    [_handleIdTokenChangesListener]($arguments) {
      return async.async(dart.void, function* _handleIdTokenChangesListener() {
        let appName = StringL().as($arguments[$_get]("appName"));
        let idTokenStreamController = method_channel_firebase_auth.MethodChannelFirebaseAuth._idTokenChangesListeners[$_get](appName);
        let userChangesStreamController = method_channel_firebase_auth.MethodChannelFirebaseAuth._userChangesListeners[$_get](appName);
        let instance = method_channel_firebase_auth.MethodChannelFirebaseAuth._methodChannelFirebaseAuthInstances[$_get](appName);
        if ($arguments[$_get]("user") == null) {
          instance.currentUser = null;
          idTokenStreamController.add(null);
          userChangesStreamController.add(null);
        } else {
          let userMap = LinkedHashMapOfStringL$dynamic().from(core.Map.as($arguments[$_get]("user")));
          let user = new method_channel_user.MethodChannelUser.new(instance, userMap);
          instance.currentUser = user;
          idTokenStreamController.add(user);
          userChangesStreamController.add(user);
        }
      });
    }
    [_handlePhoneVerificationCompleted]($arguments) {
      return async.async(dart.void, function* _handlePhoneVerificationCompleted() {
        let t1, t0;
        let handle = intL().as($arguments[$_get]("handle"));
        let token = intL().as($arguments[$_get]("token"));
        let smsCode = StringL().as($arguments[$_get]("smsCode"));
        let phoneAuthCredential = PhoneAuthCredentialL().as(phone_auth.PhoneAuthProvider.credentialFromToken(token, {smsCode: smsCode}));
        let callbacks = method_channel_firebase_auth.MethodChannelFirebaseAuth._phoneAuthCallbacks[$_get](handle);
        t0 = callbacks;
        t1 = phoneAuthCredential;
        t0.verificationCompleted(t1);
      });
    }
    [_handlePhoneVerificationFailed]($arguments) {
      return async.async(dart.void, function* _handlePhoneVerificationFailed() {
        let t1, t0;
        let handle = intL().as($arguments[$_get]("handle"));
        let error = MapL().as($arguments[$_get]("error"));
        let details = MapL().as(error[$_get]("details"));
        let callbacks = method_channel_firebase_auth.MethodChannelFirebaseAuth._phoneAuthCallbacks[$_get](handle);
        let exception = new firebase_auth_exception.FirebaseAuthException.new({message: StringL().as(details != null ? details[$_get]("message") : error[$_get]("message")), code: StringL().as(details != null ? details[$_get]("code") : "unknown")});
        t0 = callbacks;
        t1 = exception;
        t0.verificationFailed(t1);
      });
    }
    [_handlePhoneCodeSent]($arguments) {
      return async.async(dart.void, function* _handlePhoneCodeSent() {
        let t2, t1, t0;
        let handle = intL().as($arguments[$_get]("handle"));
        let verificationId = StringL().as($arguments[$_get]("verificationId"));
        let forceResendingToken = intL().as($arguments[$_get]("forceResendingToken"));
        let callbacks = method_channel_firebase_auth.MethodChannelFirebaseAuth._phoneAuthCallbacks[$_get](handle);
        t0 = callbacks;
        t1 = verificationId;
        t2 = forceResendingToken;
        t0.codeSent(t1, t2);
      });
    }
    [_handlePhoneCodeAutoRetrievalTimeout]($arguments) {
      return async.async(dart.void, function* _handlePhoneCodeAutoRetrievalTimeout() {
        let t1, t0;
        let handle = intL().as($arguments[$_get]("handle"));
        let verificationId = StringL().as($arguments[$_get]("verificationId"));
        let callbacks = method_channel_firebase_auth.MethodChannelFirebaseAuth._phoneAuthCallbacks[$_get](handle);
        t0 = callbacks;
        t1 = verificationId;
        t0.codeAutoRetrievalTimeout(t1);
      });
    }
    delegateFor(opts) {
      let app = opts && 'app' in opts ? opts.app : null;
      if (!dart.test(method_channel_firebase_auth.MethodChannelFirebaseAuth._methodChannelFirebaseAuthInstances[$containsKey](app.name))) {
        method_channel_firebase_auth.MethodChannelFirebaseAuth._methodChannelFirebaseAuthInstances[$_set](app.name, new method_channel_firebase_auth.MethodChannelFirebaseAuth.new({app: app}));
      }
      return method_channel_firebase_auth.MethodChannelFirebaseAuth._methodChannelFirebaseAuthInstances[$_get](app.name);
    }
    setInitialValues(opts) {
      let currentUser = opts && 'currentUser' in opts ? opts.currentUser : null;
      let languageCode = opts && 'languageCode' in opts ? opts.languageCode : null;
      if (currentUser != null) {
        this.currentUser = new method_channel_user.MethodChannelUser.new(this, currentUser);
      }
      this.languageCode = languageCode;
      return this;
    }
    applyActionCode(code) {
      return async.async(dart.void, (function* applyActionCode() {
        yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMethod(dart.void, "Auth#applyActionCode", new (IdentityMapOfStringL$dynamic()).from(["appName", this.app.name, "code", code])).catchError(C10 || CT.C10);
      }).bind(this));
    }
    checkActionCode(code) {
      return async.async(ActionCodeInfoL(), (function* checkActionCode() {
        let result = (yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMapMethod(StringL(), dart.dynamic, "Auth#checkActionCode", new (IdentityMapOfStringL$dynamic()).from(["appName", this.app.name, "code", code])).catchError(C10 || CT.C10));
        return new action_code_info.ActionCodeInfo.new({operation: intL().as(result[$_get]("operation")), data: LinkedHashMapOfStringL$dynamic().from(core.Map.as(result[$_get]("data")))});
      }).bind(this));
    }
    confirmPasswordReset(code, newPassword) {
      return async.async(dart.void, (function* confirmPasswordReset() {
        yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMethod(dart.void, "Auth#confirmPasswordReset", new (IdentityMapOfStringL$dynamic()).from(["appName", this.app.name, "code", code, "newPassword", newPassword])).catchError(C10 || CT.C10);
      }).bind(this));
    }
    createUserWithEmailAndPassword(email, password) {
      return async.async(UserCredentialPlatformL(), (function* createUserWithEmailAndPassword() {
        let data = (yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMapMethod(StringL(), dart.dynamic, "Auth#createUserWithEmailAndPassword", new (IdentityMapOfStringL$dynamic()).from(["appName", this.app.name, "email", email, "password", password])).catchError(C10 || CT.C10));
        let userCredential = new method_channel_user_credential.MethodChannelUserCredential.new(this, data);
        this.currentUser = userCredential.user;
        return userCredential;
      }).bind(this));
    }
    fetchSignInMethodsForEmail(email) {
      return async.async(ListLOfStringL(), (function* fetchSignInMethodsForEmail() {
        let data = (yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMapMethod(StringL(), dart.dynamic, "Auth#fetchSignInMethodsForEmail", new (IdentityMapOfStringL$dynamic()).from(["appName", this.app.name, "email", email])).catchError(C10 || CT.C10));
        return ListOfStringL().from(core.Iterable.as(data[$_get]("providers")));
      }).bind(this));
    }
    authStateChanges() {
      return method_channel_firebase_auth.MethodChannelFirebaseAuth._authStateChangesListeners[$_get](this.app.name).stream;
    }
    idTokenChanges() {
      return method_channel_firebase_auth.MethodChannelFirebaseAuth._idTokenChangesListeners[$_get](this.app.name).stream;
    }
    userChanges() {
      return method_channel_firebase_auth.MethodChannelFirebaseAuth._userChangesListeners[$_get](this.app.name).stream;
    }
    sendPasswordResetEmail(email, actionCodeSettings = null) {
      let t0;
      return method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMethod(dart.void, "Auth#sendPasswordResetEmail", new (IdentityMapOfStringL$dynamic()).from(["appName", this.app.name, "email", email, "actionCodeSettings", (t0 = actionCodeSettings, t0 == null ? null : t0.asMap())])).catchError(C10 || CT.C10);
    }
    sendSignInLinkToEmail(email, actionCodeSettings) {
      return method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMethod(dart.void, "Auth#sendSignInLinkToEmail", new (IdentityMapOfStringL$dynamic()).from(["appName", this.app.name, "email", email, "actionCodeSettings", actionCodeSettings.asMap()])).catchError(C10 || CT.C10);
    }
    setLanguageCode(languageCode) {
      return async.async(dart.void, (function* setLanguageCode() {
        let data = (yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMapMethod(StringL(), dart.dynamic, "Auth#setLanguageCode", new (IdentityMapOfStringL$dynamic()).from(["appName", this.app.name, "languageCode", languageCode])).catchError(C10 || CT.C10));
        this.languageCode = StringL().as(data[$_get]("languageCode"));
      }).bind(this));
    }
    setSettings(opts) {
      let appVerificationDisabledForTesting = opts && 'appVerificationDisabledForTesting' in opts ? opts.appVerificationDisabledForTesting : null;
      let userAccessGroup = opts && 'userAccessGroup' in opts ? opts.userAccessGroup : null;
      return async.async(dart.void, (function* setSettings() {
        yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMethod(dart.dynamic, "Auth#setSettings", new (IdentityMapOfStringL$dynamic()).from(["appName", this.app.name, "appVerificationDisabledForTesting", appVerificationDisabledForTesting, "userAccessGroup", userAccessGroup])).catchError(C10 || CT.C10);
      }).bind(this));
    }
    setPersistence(persistence) {
      dart.throw(new core.UnimplementedError.new("setPersistence() is only supported on web based platforms"));
    }
    signInAnonymously() {
      return async.async(UserCredentialPlatformL(), (function* signInAnonymously() {
        let data = (yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMapMethod(StringL(), dart.dynamic, "Auth#signInAnonymously", new (IdentityMapOfStringL$dynamic()).from(["appName", this.app.name])).catchError(C10 || CT.C10));
        let userCredential = new method_channel_user_credential.MethodChannelUserCredential.new(this, data);
        this.currentUser = userCredential.user;
        return userCredential;
      }).bind(this));
    }
    signInWithCredential(credential) {
      return async.async(UserCredentialPlatformL(), (function* signInWithCredential() {
        let data = (yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMapMethod(StringL(), dart.dynamic, "Auth#signInWithCredential", new (IdentityMapOfStringL$dynamic()).from(["appName", this.app.name, "credential", credential.asMap()])).catchError(C10 || CT.C10));
        let userCredential = new method_channel_user_credential.MethodChannelUserCredential.new(this, data);
        this.currentUser = userCredential.user;
        return userCredential;
      }).bind(this));
    }
    signInWithCustomToken(token) {
      return async.async(UserCredentialPlatformL(), (function* signInWithCustomToken() {
        let data = (yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMapMethod(StringL(), dart.dynamic, "Auth#signInWithCustomToken", new (IdentityMapOfStringL$dynamic()).from(["appName", this.app.name, "token", token])).catchError(C10 || CT.C10));
        let userCredential = new method_channel_user_credential.MethodChannelUserCredential.new(this, data);
        this.currentUser = userCredential.user;
        return userCredential;
      }).bind(this));
    }
    signInWithEmailAndPassword(email, password) {
      return async.async(UserCredentialPlatformL(), (function* signInWithEmailAndPassword() {
        let data = (yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMapMethod(StringL(), dart.dynamic, "Auth#signInWithEmailAndPassword", new (IdentityMapOfStringL$dynamic()).from(["appName", this.app.name, "email", email, "password", password])).catchError(C10 || CT.C10));
        let userCredential = new method_channel_user_credential.MethodChannelUserCredential.new(this, data);
        this.currentUser = userCredential.user;
        return userCredential;
      }).bind(this));
    }
    signInWithEmailLink(email, emailLink) {
      return async.async(UserCredentialPlatformL(), (function* signInWithEmailLink() {
        let data = (yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMapMethod(StringL(), dart.dynamic, "Auth#signInWithEmailLink", new (IdentityMapOfStringL$dynamic()).from(["appName", this.app.name, "email", email, "emailLink", emailLink])).catchError(C10 || CT.C10));
        let userCredential = new method_channel_user_credential.MethodChannelUserCredential.new(this, data);
        this.currentUser = userCredential.user;
        return userCredential;
      }).bind(this));
    }
    signInWithPopup(provider) {
      dart.throw(new core.UnimplementedError.new("signInWithPopup() is only supported on web based platforms"));
    }
    signInWithRedirect(provider) {
      dart.throw(new core.UnimplementedError.new("signInWithRedirect() is only supported on web based platforms"));
    }
    signOut() {
      return async.async(dart.void, (function* signOut() {
        yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMethod(dart.void, "Auth#signOut", new (IdentityMapOfStringL$dynamic()).from(["appName", this.app.name])).catchError(C10 || CT.C10);
        this.currentUser = null;
      }).bind(this));
    }
    verifyPasswordResetCode(code) {
      return async.async(StringL(), (function* verifyPasswordResetCode() {
        let data = (yield method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMapMethod(StringL(), dart.dynamic, "Auth#verifyPasswordResetCode", new (IdentityMapOfStringL$dynamic()).from(["appName", this.app.name, "code", code])).catchError(C10 || CT.C10));
        return FutureOrLOfStringL().as(data[$_get]("email"));
      }).bind(this));
    }
    verifyPhoneNumber(opts) {
      let phoneNumber = opts && 'phoneNumber' in opts ? opts.phoneNumber : null;
      let verificationCompleted = opts && 'verificationCompleted' in opts ? opts.verificationCompleted : null;
      let verificationFailed = opts && 'verificationFailed' in opts ? opts.verificationFailed : null;
      let codeSent = opts && 'codeSent' in opts ? opts.codeSent : null;
      let codeAutoRetrievalTimeout = opts && 'codeAutoRetrievalTimeout' in opts ? opts.codeAutoRetrievalTimeout : null;
      let autoRetrievedSmsCodeForTesting = opts && 'autoRetrievedSmsCodeForTesting' in opts ? opts.autoRetrievedSmsCodeForTesting : null;
      let timeout = opts && 'timeout' in opts ? opts.timeout : C11 || CT.C11;
      let forceResendingToken = opts && 'forceResendingToken' in opts ? opts.forceResendingToken : null;
      if (dart.equals(platform.defaultTargetPlatform, platform.TargetPlatform.macOS)) {
        dart.throw(new core.UnimplementedError.new("verifyPhoneNumber() is not available on MacOS platforms."));
      }
      let handle = method_channel_firebase_auth.MethodChannelFirebaseAuth.nextMethodChannelHandleId;
      method_channel_firebase_auth.MethodChannelFirebaseAuth._phoneAuthCallbacks[$_set](handle, new phone_auth_callbacks.PhoneAuthCallbacks.new(verificationCompleted, verificationFailed, codeSent, codeAutoRetrievalTimeout));
      return method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMethod(dart.void, "Auth#verifyPhoneNumber", new (IdentityMapOfStringL$dynamic()).from(["appName", this.app.name, "handle", handle, "phoneNumber", phoneNumber, "timeout", timeout.inMilliseconds, "forceResendingToken", forceResendingToken, "autoRetrievedSmsCodeForTesting", autoRetrievedSmsCodeForTesting])).catchError(C10 || CT.C10);
    }
  };
  (method_channel_firebase_auth.MethodChannelFirebaseAuth.__ = function() {
    this[_currentUser] = null;
    this[languageCode] = null;
    method_channel_firebase_auth.MethodChannelFirebaseAuth.__proto__.new.call(this, {appInstance: null});
    ;
  }).prototype = method_channel_firebase_auth.MethodChannelFirebaseAuth.prototype;
  (method_channel_firebase_auth.MethodChannelFirebaseAuth.new = function(opts) {
    let app = opts && 'app' in opts ? opts.app : null;
    this[_currentUser] = null;
    this[languageCode] = null;
    method_channel_firebase_auth.MethodChannelFirebaseAuth.__proto__.new.call(this, {appInstance: app});
    method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.invokeMethod(dart.void, "Auth#registerChangeListeners", new (IdentityMapOfStringL$dynamic()).from(["appName", app.name]));
    method_channel_firebase_auth.MethodChannelFirebaseAuth._authStateChangesListeners[$_set](app.name, this[_createBroadcastStream](UserPlatformL()));
    method_channel_firebase_auth.MethodChannelFirebaseAuth._idTokenChangesListeners[$_set](app.name, this[_createBroadcastStream](UserPlatformL()));
    method_channel_firebase_auth.MethodChannelFirebaseAuth._userChangesListeners[$_set](app.name, this[_createBroadcastStream](UserPlatformL()));
    if (dart.test(method_channel_firebase_auth.MethodChannelFirebaseAuth._initialized)) return;
    method_channel_firebase_auth.MethodChannelFirebaseAuth.channel.setMethodCallHandler(dart.fn(call => async.async(dart.void, (function*() {
      let $arguments = MapL().as(call.arguments);
      switch (call.method) {
        case "Auth#authStateChanges":
        {
          return this[_handleAuthStateChangesListener]($arguments);
        }
        case "Auth#idTokenChanges":
        {
          return this[_handleIdTokenChangesListener]($arguments);
        }
        case "Auth#phoneVerificationCompleted":
        {
          return this[_handlePhoneVerificationCompleted]($arguments);
        }
        case "Auth#phoneVerificationFailed":
        {
          return this[_handlePhoneVerificationFailed]($arguments);
        }
        case "Auth#phoneCodeSent":
        {
          return this[_handlePhoneCodeSent]($arguments);
        }
        case "Auth#phoneCodeAutoRetrievalTimeout":
        {
          return this[_handlePhoneCodeAutoRetrievalTimeout]($arguments);
        }
        default:
        {
          dart.throw(new core.UnimplementedError.new(dart.str(call.method) + " has not been implemented"));
        }
      }
    }).bind(this)), MethodCallLToFutureLOfvoid()));
    method_channel_firebase_auth.MethodChannelFirebaseAuth._initialized = true;
  }).prototype = method_channel_firebase_auth.MethodChannelFirebaseAuth.prototype;
  dart.addTypeTests(method_channel_firebase_auth.MethodChannelFirebaseAuth);
  dart.addTypeCaches(method_channel_firebase_auth.MethodChannelFirebaseAuth);
  dart.setMethodSignature(method_channel_firebase_auth.MethodChannelFirebaseAuth, () => ({
    __proto__: dart.getMethods(method_channel_firebase_auth.MethodChannelFirebaseAuth.__proto__),
    [_createBroadcastStream]: dart.gFnType(T => [dart.legacy(async.StreamController$(dart.legacy(T))), []]),
    [_handleAuthStateChangesListener]: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.Map)]),
    [_handleIdTokenChangesListener]: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.Map)]),
    [_handlePhoneVerificationCompleted]: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.Map)]),
    [_handlePhoneVerificationFailed]: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.Map)]),
    [_handlePhoneCodeSent]: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.Map)]),
    [_handlePhoneCodeAutoRetrievalTimeout]: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.Map)]),
    setInitialValues: dart.fnType(dart.legacy(method_channel_firebase_auth.MethodChannelFirebaseAuth), [], {currentUser: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), languageCode: dart.legacy(core.String)}, {})
  }));
  dart.setLibraryUri(method_channel_firebase_auth.MethodChannelFirebaseAuth, L31);
  dart.setFieldSignature(method_channel_firebase_auth.MethodChannelFirebaseAuth, () => ({
    __proto__: dart.getFields(method_channel_firebase_auth.MethodChannelFirebaseAuth.__proto__),
    [_currentUser]: dart.fieldType(dart.legacy(platform_interface_user.UserPlatform)),
    languageCode: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(method_channel_firebase_auth.MethodChannelFirebaseAuth, {
    /*method_channel_firebase_auth.MethodChannelFirebaseAuth._initialized*/get _initialized() {
      return false;
    },
    set _initialized(_) {},
    /*method_channel_firebase_auth.MethodChannelFirebaseAuth._methodChannelHandleId*/get _methodChannelHandleId() {
      return 0;
    },
    set _methodChannelHandleId(_) {},
    /*method_channel_firebase_auth.MethodChannelFirebaseAuth.channel*/get channel() {
      return C12 || CT.C12;
    },
    /*method_channel_firebase_auth.MethodChannelFirebaseAuth._methodChannelFirebaseAuthInstances*/get _methodChannelFirebaseAuthInstances() {
      return new (IdentityMapOfStringL$MethodChannelFirebaseAuthL()).new();
    },
    set _methodChannelFirebaseAuthInstances(_) {},
    /*method_channel_firebase_auth.MethodChannelFirebaseAuth._authStateChangesListeners*/get _authStateChangesListeners() {
      return new (IdentityMapOfStringL$StreamControllerLOfUserPlatformL()).new();
    },
    set _authStateChangesListeners(_) {},
    /*method_channel_firebase_auth.MethodChannelFirebaseAuth._idTokenChangesListeners*/get _idTokenChangesListeners() {
      return new (IdentityMapOfStringL$StreamControllerLOfUserPlatformL()).new();
    },
    set _idTokenChangesListeners(_) {},
    /*method_channel_firebase_auth.MethodChannelFirebaseAuth._userChangesListeners*/get _userChangesListeners() {
      return new (IdentityMapOfStringL$StreamControllerLOfUserPlatformL()).new();
    },
    set _userChangesListeners(_) {},
    /*method_channel_firebase_auth.MethodChannelFirebaseAuth._phoneAuthCallbacks*/get _phoneAuthCallbacks() {
      return new (IdentityMapOfintL$PhoneAuthCallbacksL()).new();
    },
    set _phoneAuthCallbacks(_) {}
  }, true);
  dart.trackLibraries("packages/firebase_auth_platform_interface/src/providers/twitter_auth.dart", {
    "package:firebase_auth_platform_interface/src/providers/twitter_auth.dart": twitter_auth,
    "package:firebase_auth_platform_interface/src/providers/oauth.dart": oauth,
    "package:firebase_auth_platform_interface/src/providers/google_auth.dart": google_auth,
    "package:firebase_auth_platform_interface/src/providers/github_auth.dart": github_auth,
    "package:firebase_auth_platform_interface/src/providers/facebook_auth.dart": facebook_auth,
    "package:firebase_auth_platform_interface/src/providers/email_auth.dart": email_auth,
    "package:firebase_auth_platform_interface/src/providers/phone_auth.dart": phone_auth,
    "package:firebase_auth_platform_interface/src/types.dart": types,
    "package:firebase_auth_platform_interface/src/platform_interface/platform_interface_recaptcha_verifier_factory.dart": platform_interface_recaptcha_verifier_factory,
    "package:firebase_auth_platform_interface/src/platform_interface/platform_interface_confirmation_result.dart": platform_interface_confirmation_result,
    "package:firebase_auth_platform_interface/src/method_channel/utils/phone_auth_callbacks.dart": phone_auth_callbacks,
    "package:firebase_auth_platform_interface/src/method_channel/utils/exception.dart": exception$,
    "package:firebase_auth_platform_interface/src/platform_interface/platform_interface_user.dart": platform_interface_user,
    "package:firebase_auth_platform_interface/src/platform_interface/platform_interface_user_credential.dart": platform_interface_user_credential,
    "package:firebase_auth_platform_interface/src/method_channel/method_channel_user_credential.dart": method_channel_user_credential,
    "package:firebase_auth_platform_interface/src/method_channel/method_channel_user.dart": method_channel_user,
    "package:firebase_auth_platform_interface/src/method_channel/method_channel_firebase_auth.dart": method_channel_firebase_auth,
    "package:firebase_auth_platform_interface/src/platform_interface/platform_interface_firebase_auth.dart": platform_interface_firebase_auth,
    "package:firebase_auth_platform_interface/firebase_auth_platform_interface.dart": firebase_auth_platform_interface
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["twitter_auth.dart","oauth.dart","google_auth.dart","github_auth.dart","facebook_auth.dart","email_auth.dart","phone_auth.dart","../types.dart","../platform_interface/platform_interface_recaptcha_verifier_factory.dart","../platform_interface/platform_interface_confirmation_result.dart","../method_channel/utils/phone_auth_callbacks.dart","../method_channel/utils/exception.dart","../platform_interface/platform_interface_user.dart","../platform_interface/platform_interface_user_credential.dart","../method_channel/method_channel_user_credential.dart","../method_channel/method_channel_user.dart","../platform_interface/platform_interface_firebase_auth.dart","../method_channel/method_channel_firebase_auth.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4CI;IACF;;AAIE;IACF;;AAME,YAAO;IACT;wBAK0B;AACxB,YAAO,AAAsB,qBAAD,IAAI;AACG,MAAnC,oBAAc,qBAAqB;AACnC,YAAO;IACT;;UAKsB;UAA8B;AAClD,YAAO,AAAY,WAAD,IAAI;AACtB,YAAO,AAAO,MAAD,IAAI;AACjB,YAA6B,8DACd,WAAW,UAChB,MAAM;IAElB;;UAKsB;UAA8B;AAClD,YAA2B,2DACV,WAAW,UAAU,MAAM;IAC9C;;;IAlCsB,oBAAc;AAZZ;;EAAmB;;;;;;;;;;;;;;;;;;;;;ICsD9B;;;;;;IAIA;;;;;;IAIA;;;;;;IAKA;;;;;;;AAIX,YAAwB,4CACtB,cAAc,iBACd,gBAAgB,mBAChB,WAAW,cACX,eAAe,kBACf,UAAU,aACV,YAAY;IAEhB;;;QArCmB;QACA;QACZ;QACA;QACA;QACA;IAHA;IACA;IACA;IACA;UACM,AAAW,UAAD,IAAI;UACd,AAAa,YAAD,IAAI;AACvB,gEAAkB,UAAU,gBAAgB,YAAY;;EAAC;;;;;;;;;;;;;UDYzC;UAA8B;AAClD,YAA6B,yDAAe,WAAW,UAAU,MAAM;IACzE;;;QAXS;QACA;AACJ,sIAGkB,WAAW,UAChB,MAAM;;EAAC;;;;;MA3FrB,yBAAY;;;;;;;;ICUH;;;;;;;AAQX,YAAO;IACT;;AAKE,YAAO;IACT;aAI8B;AAC5B,YAAO,AAAM,KAAD,IAAI;AACE,MAAlB,AAAQ,oBAAI,KAAK;AACjB,YAAO;IACT;wBAM0B;AACxB,YAAO,AAAsB,qBAAD,IAAI;AACG,MAAnC,qBAAc,qBAAqB;AACnC,YAAO;IACT;;UAIY;UAAoB;UAAgB;AAC9C,YAAO,4CACO,+BACE,sBACD,WAAW,WACf,OAAO,YACN,QAAQ;IAEtB;;UAKsB;UAAoB;UAAgB;AACxD,YAAO,+BACU,WAAW,WAAW,OAAO,YAAY,QAAQ;IACpE;;sCAzDmB;IAMN,gBAAU;IACD;IAPH;UACN,AAAW,UAAD,IAAI;AACrB,iDAAM,UAAU;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;ACyBrB;IACF;;AAIE;IACF;;AAOE,YAAO;IACT;;AAIE,YAAO;IACT;aAGmC;AACjC,YAAO,AAAM,KAAD,IAAI;AACE,MAAlB,AAAQ,qBAAI,KAAK;AACjB,YAAO;IACT;wBAK0B;AACxB,YAAO,AAAsB,qBAAD,IAAI;AACG,MAAnC,sBAAc,qBAAqB;AACnC,YAAO;IACT;;UAG0C;UAAgB;AACxD,YAAO,AAAoB,WAAT,IAAI,QAAQ,OAAO,IAAI,yBACrC;AACJ,YAA4B,wDACjB,OAAO,eACH,WAAW;IAE5B;;UAI4C;UAAgB;AAC1D,YAA0B,qDACb,OAAO,eAAe,WAAW;IAChD;;;IA5Ca,iBAAU;IACD,sBAAc;AAbb;;EAAmB;;;;;;;;;;;;;;;;;;;;;UAwE9B;UAAgB;AAC1B,YAA4B,uDAAe,WAAW,WAAW,OAAO;IAC1E;;;QAXS;QACA;AACJ,kIAGkB,WAAW,WACf,OAAO;;EAAC;;;;;MApGvB,wBAAY;;;;;;;;ACsCd;IACF;;AAIE;IACF;;AAOE,YAAO;IACT;;AAIE,YAAO;IACT;aAGmC;AACjC,YAAO,AAAM,KAAD,IAAI;AACE,MAAlB,AAAQ,sBAAI,KAAK;AACjB,YAAO;IACT;wBAK0B;AACxB,YAAO,AAAsB,qBAAD,IAAI;AACG,MAAnC,sBAAc,qBAAqB;AACnC,YAAO;IACT;sBAGyC;AACvC,YAAO,AAAY,WAAD,IAAI;AACtB,YAA4B,8CAC1B,WAAW;IAEf;yBAI2C;AACzC,YAA0B,2CAAW,KAAK;IAC5C;;;IAzCa,kBAAU;IACD,sBAAc;AAbb;;EAAmB;;;;;;;;;;;;;;;;;;;;uBAkEM;AAC9C,YAA4B,uDAAe,WAAW;IACxD;;;QARmB;AACd,kIAGkB,WAAW;;EAAC;;;;;MAhG/B,wBAAY;;;;;;;;ACoCd;IACF;;AAIE;IACF;;AAOE,YAAO;IACT;;AAIE,YAAO;IACT;aAGqC;AACnC,YAAO,AAAM,KAAD,IAAI;AACE,MAAlB,AAAQ,sBAAI,KAAK;AACjB,YAAO;IACT;wBAK0B;AACxB,YAAO,AAAsB,qBAAD,IAAI;AACG,MAAnC,sBAAc,qBAAqB;AACnC,YAAO;IACT;sBAGyC;AACvC,YAAO,AAAY,WAAD,IAAI;AACtB,YAA8B,kDAC5B,WAAW;IAEf;yBAI2C;AACzC,YAA4B,+CAAW,KAAK;IAC9C;;;IAzCa,kBAAU;IACD,sBAAc;AAbX;;EAAmB;;;;;;;;;;;;;;;;;;;;uBAkEM;AAChD,YAA8B,2DAAe,WAAW;IAC1D;;;QARmB;AACd,0IAGkB,WAAW;;EAAC;;;;;MAhG/B,0BAAY;;;;;;ACcd;IACF;;AAKE;IACF;;AAIE;IACF;;UAIsB;UAAwB;AAC5C,YAAO,AAAM,KAAD,IAAI;AAChB,YAAO,AAAS,QAAD,IAAI;AACnB,YAA2B,4CAAY,KAAK,EAAE,QAAQ;IACxD;;UAIsB;UAAwB;AAC5C,YAAO,AAAM,KAAD,IAAI;AAChB,YAAO,AAAU,SAAD,IAAI;AACpB,YAA2B,oDAAoB,KAAK,EAAE,SAAS;IACjE;;UAKmB;UACA;AAEjB,YAAyB,iDAAkB,KAAK,YAAY,QAAQ;IACtE;;UAKmB;UACA;AAEjB,YAAyB,yDAA0B,KAAK,aAAa,IAAI;IAC3E;;;AAlDsB;;EAAmB;;;;;;;;IA2E5B;;;;;;IAGA;;;;;;IAGA;;;;;;uBAlBkC,OAAc;AAC3D,YAA2B,2DAChB,KAAK,YAAY,QAAQ;IACtC;+BAGW,OAAc;AACvB,YAA2B,4DAChB,KAAK,aAAa,SAAS;IACxC;;AAaE,YAAuB,4CACrB,cAAc,iBACd,gBAAgB,mBAChB,SAAS,YACT,aAAa,gBACb,UAAU;IAEd;;gDAnCS;QACQ;QACV;QACA;IAFU;IACV;IACA;AACF,mGAA8C,aAAa;;EAAC;;;;;;;;;;;;;;;MAvE7D,2BAAgB;;;MAChB,uBAAY;;;;;;ACWd;IACF;;AAIE;IACF;;UAKsB;UAAiC;AACrD,YAAO,AAAe,cAAD,IAAI;AACzB,YAAO,AAAQ,OAAD,IAAI;AAClB,YAA2B,4CAAY,cAAc,EAAE,OAAO;IAChE;+BAI8C;UAAe;AAC3D,YAAO,AAAM,KAAD,IAAI;AAChB,YAA2B,qDAAqB,KAAK,YAAW,OAAO;IACzE;;UAKmB;UACA;AAEjB,YAAyB,0DACL,cAAc,WAAW,OAAO;IACtD;;;AApCsB;;EAAmB;;;;;;;;IA6D5B;;;;;;IAGA;;;;;;IAGH;;;;;;uBAjBC,gBAAuB;AAChC,YAA2B,wDACP,cAAc,WAAW,OAAO;IACtD;gCAEqD;UACzC;AACV,YAA2B,+CAAS,KAAK,WAAW,OAAO;IAC7D;;AAcE,YAAwB,4CACtB,cAAc,iBACd,gBAAgB,mBAChB,kBAAkB,qBAClB,WAAW,cACX,SAAS;IAEb;;;QArC4B;QAAqB;QAAc;IAAnC;IAAqB;IAAc;AACzD,gHAGS,KAAK;;EACb;;;;;;;;;;;MAxDH,uBAAY;;;;;;;;;;;;ICgClB;;2CAZK;;;;EAYL;;;;;;;;;;;;;;;;;;;;;;;;;;ICvBA;;6FANK;;;;EAML;;;;;;;;;;;;;;;;;;;;;;;;IASA;;8FANK;;;;EAML;;;;;;;;;;;;;;;;;;;;AAyBI,UAAI,AAAU,4FAAG;AACiD,QAAhE,WAAM,gCAAmB;;AAG3B,YAAO;IACT;wBAIqD;AACnD,YAAO,AAAS,QAAD,IAAI;AAE4B,MAA7B,wDAAY,QAAQ,EAAE;AACpB,MAApB,2FAAY,QAAQ;IACtB;yBAGsD;AACpD,YAAO,AAAS,QAAD,IAAI;AAE4B,MAA7B,wDAAY,QAAQ,EAAE;IAC1C;;AAIyD,MAAvD,WAAM,gCAAmB;IAC3B;;UAOS;UACe;UACC;UACI;UACF;UACE;AAEiC,MAA5D,WAAM,gCAAmB;IAC3B;;AAKqD,MAAnD,WAAM,gCAAmB;IAC3B;;AAKwD,MAAtD,WAAM,gCAAmB;IAC3B;;AASkB;AACuC,QAAvD,WAAM,gCAAmB;MAC3B;;;AAIqB;AACoC,QAAvD,WAAM,gCAAmB;MAC3B;;;;AAjFqC,oHAAa;;EAAO;;;;;;;;;;;;;;;;;MAEjB,wFAAS;;;;MAE7B,qFAAM;YAAG;;;;;ICdhB;;;;;;yBAVmC;AAC9C,YAAO,AAAS,QAAD,IAAI;AAE4B,MAA7B,wDAAY,QAAQ,EAAE;IAC1C;YAU8C;AAAR;AACoB,QAAxD,WAAM,gCAAmB;MAC3B;;;;IApBgC;AAAkB,uGAAa;;EAAO;;;;;;;;;;;;;MAClD,wEAAM;YAAG;;;;;;;;ICCI;;;;;;IAGH;;;;;;IAGV;;;;;;IAGgB;;;;;;;0DAhB7B,uBACA,oBACA,UACA;IAHA;IACA;IACA;IACA;;EACN;;;;;;;;;;;sECA0D;AAAR;AACnD,WAAc,gBAAV,SAAS,MAA4B,wBAAV,SAAS;AACvB,QAAf,WAAM,SAAS;;AAIkB,MADnC,WAAM,oDACQ,wBAAV,SAAS;IACf;;0GAQsB;;AACC,kBAAU,AAAkB,AAAQ,iBAAT,YAAY,OACtD,kDAA0B,AAAkB,iBAAD,aAC3C;AAEC,eAAO;AACP,kBAAU,AAAkB,iBAAD;AAC3B;AACQ;AAEf,QAAI,OAAO,IAAI;AACiB,aAA9B,cAAuB,KAAhB,AAAO,OAAA,QAAC,eAAD,OAAY,IAAI;AACS,gBAAvC,cAA6B,MAAnB,AAAO,OAAA,QAAC,mBAAD,OAAe,OAAO;AAEvC,UAAI,AAAO,OAAA,QAAC,qBAAqB;AAC/B,YAA6B,WAAzB,AAAO,OAAA,QAAC,4BAAkB,sBAAqB;AAMhD,UALD,aAAa,iEAC4C,WAAlB,WAAzB,AAAO,OAAA,QAAC,4BAAkB,6BAAkB,4CAEpD,WADmC,WAAzB,AAAO,OAAA,QAAC,4BAAkB,6BACnC,oCAC6C,WAAlB,WAAzB,AAAO,OAAA,QAAC,4BAAkB,6BAAkB;;AAIvD,YAA6B,WAAzB,AAAO,OAAA,QAAC,4BAAkB,aAAY;AACE,kBAA1C,aAAiC,WAAzB,AAAO,OAAA,QAAC,4BAAkB;;;;AAIxC,UAAO,8DACG,IAAI,WAAW,OAAO,SAAS,KAAK,cAAc,UAAU;EACxE;;;;IC/B6B;;;;;;yBAPO;AAChC,YAAO,AAAS,QAAD,IAAI;AAE4B,MAA7B,wDAAY,QAAQ,EAAE;IAC1C;;AAWE,0BAAO,AAAK,mBAAC;IACf;;AAME,0BAAO,AAAK,mBAAC;IACf;;AASE,wBAAO,AAAK,mBAAC;IACf;;AAIE,wBAAO,AAAK,mBAAC;IACf;;AAIE,YAAO,8CACc,WAAjB,AAAK,mBAAC,sBAAY,6BAAkC,WAAjB,AAAK,mBAAC,sBAAY;IAC3D;;AAOE,0BAAO,AAAK,mBAAC;IACf;;AAOE,0BAAO,AAAK,mBAAC;IACf;;AAIE,YAAY,AACP,AACA,iCAFY,AAAK,mBAAC,qCACd,QAAC,QAAS,2BAAS,kDAA0B,IAAI;IAE5D;;AAOE,0BAAO,AAAK,mBAAC;IACf;;AAQE,0BAAO,AAAK,mBAAC;IACf;;AAIE,0BAAO,AAAK,mBAAC;IACf;;AAamB;AACsC,QAAvD,WAAM,gCAAmB;MAC3B;;eAU+B;AAC8B,MAA3D,WAAM,gCAAmB;IAC3B;qBAO4C;AACuB,MAAjE,WAAM,gCAAmB;IAC3B;uBA2CiE;AACI,MAAnE,WAAM,gCAAmB;IAC3B;wBAyB8D,aACzB;AACiC,MAApE,WAAM,gCAAmB;IAC3B;iCAgCmB;AAEuC,MADxD,WAAM,gCACF;IACN;;AAGmB;AACsC,QAAvD,WAAM,gCAAmB;MAC3B;;0BAMuB;AADW;AAEsC,QAAtE,WAAM,gCAAmB;MAC3B;;WAQmC;AAAR;AAC8B,QAAvD,WAAM,gCAAmB;MAC3B;;gBAqBgC;AAAR;AACsC,QAA5D,WAAM,gCAAmB;MAC3B;;mBAemC;AAAR;AACsC,QAA/D,WAAM,gCAAmB;MAC3B;;sBAYmD;AAArB;AACsC,QAAlE,WAAM,gCAAmB;MAC3B;;kBAG+C;AAArB;AACsC,QAA9D,WAAM,gCAAmB;MAC3B;;4BAO4C,UACpB;AADY;AAEsC,QAAxE,WAAM,gCAAmB;MAC3B;;;uDA7UkB,MAA2B;IAA3B;UACL,AAAK,IAAD,IAAI;IACT,cAAE,IAAI;AACZ,0EAAa;;EAAO;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAEN,2CAAM;YAAG;;;;;;;;ICQF;;;;;;IAIF;;;;;;IAGJ;;;;;;IAIF;;;;;;yBAlByB;AAC1C,YAAO,AAAS,QAAD,IAAI;AAE4B,MAA7B,wDAAY,QAAQ,EAAE;IAC1C;;;QAVU;QAAW;QAAyB;QAAiB;IAArD;IAAW;IAAyB;IAAiB;AACzD,+FAAa;;EAAO;;;;;;;;;;;;MAEN,gEAAM;YAAG;;;;6ECLJ,MAA2B;;UACvC,AAAK,IAAD,IAAI;AACf,+FACQ,IAAI,sBACU,AAAI,AAAuB,IAAvB,QAAC,yBAAyB,OAC5C,OACA,uEACuC,WAA1B,AAAI,IAAA,QAAC,gCAAsB,yBAC7B,mDACiC,KAAZ,WAA1B,AAAI,IAAA,QAAC,gCAAsB,mBAAD,OAAe,iEACP,WAA1B,AAAI,IAAA,QAAC,gCAAsB,wCACH,WAA1B,AAAI,IAAA,QAAC,gCAAsB,6BAEjC,AAAI,AAAmB,IAAnB,QAAC,qBAAqB,OAChC,OACA,iEACoC,WAAtB,AAAI,IAAA,QAAC,4BAAkB,4CACC,WAAtB,AAAI,IAAA,QAAC,4BAAkB,2BAEvC,AAAI,AAAS,IAAT,QAAC,WAAW,OAChB,OACA,8CACE,IAAI,EAAE,kDAA0B,AAAI,IAAA,QAAC;;EAC9C;;;;;;;ACdY;AACjB,cAAiC,AAC5B,AAEF,wFAFqB,eAAgC,2CACtD,WAAW,AAAK,AAAI;MAExB;;eAG+B;AAAN;AACF,oBAAO,MAAgC,AACvD,AAIF,wGAJmC,mBAAoC,2CACxE,WAAW,AAAK,AAAI,oBACpB,gBAAgB,YAAY,EAC5B,aAAa;AAGf,uCAAO,AAAI,IAAA,QAAC;MACd;;qBAG4C;AAAN;AACf,oBAAO,MAAgC,AACvD,AAIF,wGAJmC,mBAAoC,2CACxE,WAAW,AAAK,AAAI,oBACpB,gBAAgB,YAAY,EAC5B,aAAa;AAGf,cAAO,uCAAc,IAAI;MAC3B;;uBAImB;AAD8B;AAE1B,oBAAO,MAAgC,AACvD,AAIF,wGAHK,2BAA4C,2CAClD,WAAW,AAAK,AAAI,oBACpB,cAAc,AAAW,UAAD;AAGE,6BACxB,mEAA4B,WAAM,IAAI;AAEJ,QAAtC,AAAK,wBAAc,AAAe,cAAD;AACjC,cAAO,eAAc;MACvB;;iCAImB;AADwC;AAEpC,oBAAO,MAAgC,AACvD,AAIF,wGAHK,yCAA0D,2CAChE,WAAW,AAAK,AAAI,oBACpB,cAAc,AAAW,UAAD;AAGE,6BACxB,mEAA4B,WAAM,IAAI;AAEJ,QAAtC,AAAK,wBAAc,AAAe,cAAD;AACjC,cAAO,eAAc;MACvB;;;AAGmB;AACI,oBAAO,MAAgC,AACvD,AAEF,wGAFmC,eAAgC,2CACpE,WAAW,AAAK,AAAI;AAGJ,mBAAO,8CAAkB,WAAM,IAAI;AAC9B,QAAvB,AAAK,wBAAc,IAAI;AACuB,QAA9C,AAAK,+BAAqB,AAAK,AAAI,oBAAM,IAAI;MAC/C;;0BAIuB;AADW;;AAEhC,cAAiC,AAAQ,AAItC,wFAHC,8BAA+C,2CACjD,WAAW,AAAK,AAAI,oBACpB,4BAAsB,kBAAkB,eAAlB,OAAoB;MAE9C;;WAGmC;AAAR;AACJ,oBAAO,MAAgC,AACvD,AAGF,wGAHmC,eAAgC,2CACpE,WAAW,AAAK,AAAI,oBACpB,cAAc,UAAU;AAIE,6BACxB,mEAA4B,WAAM,IAAI;AACxB,2CAAO,AAAe,cAAD;AAEhB,QAAvB,AAAK,wBAAc,IAAI;AACuB,QAA9C,AAAK,+BAAqB,AAAK,AAAI,oBAAM,IAAI;AAC7C,cAAO,KAAI;MACb;;gBAGgC;AAAR;AACD,oBAAO,MAAgC,AACvD,AAGF,wGAHmC,oBAAqC,2CACzE,WAAW,AAAK,AAAI,oBACpB,YAAY,QAAQ;AAGJ,mBAAO,8CAAkB,WAAM,IAAI;AAC9B,QAAvB,AAAK,wBAAc,IAAI;AACuB,QAA9C,AAAK,+BAAqB,AAAK,AAAI,oBAAM,IAAI;MAC/C;;mBAGmC;AAAR;AACJ,oBAAO,MAAgC,AACvD,AAIF,wGAHK,uBAAwC,2CAC9C,WAAW,AAAK,AAAI,oBACpB,eAAe,WAAW;AAGV,mBAAO,8CAAkB,WAAM,IAAI;AAC9B,QAAvB,AAAK,wBAAc,IAAI;AACuB,QAA9C,AAAK,+BAAqB,AAAK,AAAI,oBAAM,IAAI;MAC/C;;sBAGmD;AAArB;AACP,oBAAO,MAAgC,AACvD,AAIF,wGAHK,0BAA2C,2CACjD,WAAW,AAAK,AAAI,oBACpB,cAAc,AAAgB,eAAD;AAGb,mBAAO,8CAAkB,WAAM,IAAI;AAC9B,QAAvB,AAAK,wBAAc,IAAI;AACuB,QAA9C,AAAK,+BAAqB,AAAK,AAAI,oBAAM,IAAI;MAC/C;;kBAG+C;AAArB;AACH,oBAAO,MAAgC,AACvD,AAIF,wGAHK,sBAAuC,2CAC7C,WAAW,AAAK,AAAI,oBACpB,WAAW,OAAO;AAGF,mBAAO,8CAAkB,WAAM,IAAI;AAC9B,QAAvB,AAAK,wBAAc,IAAI;AACuB,QAA9C,AAAK,+BAAqB,AAAK,AAAI,oBAAM,IAAI;MAC/C;;4BAG4C,UACpB;AADY;;AAElC,cAAiC,AAC5B,AAIF,wFAJqB,gCAAiD,2CACvE,WAAW,AAAK,AAAI,oBACpB,YAAY,QAAQ,EACpB,4BAAsB,kBAAkB,eAAlB,OAAoB;MAE9C;;;wDA9KuC,MAA2B;UACrD,AAAK,IAAD,IAAI;AACf,mEAAM,IAAI,EAAE,IAAI;;EAAC;;;;;;;;;;;;;;;;ICKL;;;;;;;AAOhB,UAAI,AAAY,oBAAG;AACjB,cAAgB;;AAGlB,YAAO;IACT;;UAMiB;UAA2B;AAC1C,YAA4B,AAAS,AAAsB,kFAAL,GAAG,gDACvC,AAAe,eAAA,QAAC,oCACjB,AAAe,AAAqB,eAArB,QAAC,uBAAuB,OAC9C,OACA,kDAA0B,AAAe,eAAA,QAAC;IACtD;;AAOE,UAAI,AAAU,mEAAG;AAC+B,QAA9C,kEAAsC;;AAGxC,YAAO;IACT;wBAKyC;AACvC,YAAO,AAAS,QAAD,IAAI;AAC4B,MAA7B,wDAAY,QAAQ,EAAE;AACpB,MAApB,kEAAY,QAAQ;IACtB;;UAK8C;AACgB,MAA5D,WAAM,gCAAmB;IAC3B;;UASuB;UACd;AAE0D,MAAjE,WAAM,gCAAmB;IAC3B;;AASgE,MAA9D,WAAM,gCAAmB;IAC3B;oBAG6B;AACmC,MAA9D,WAAM,gCAAmB;IAC3B;;AAM6D,MAA3D,WAAM,gCAAmB;IAC3B;yBAGiC,SAAsB;AACgB,MAArE,WAAM,gCAAmB;IAC3B;oBAkBoC;AAC8B,MAAhE,WAAM,gCAAmB;IAC3B;oBAoB8C;AACoB,MAAhE,WAAM,gCAAmB;IAC3B;yBAoByC,MAAa;AACiB,MAArE,WAAM,gCAAmB;IAC3B;mCAgBW,OAAc;AAEmC,MAD1D,WAAM,gCACF;IACN;+BAauD;AACsB,MAA3E,WAAM,gCAAmB;IAC3B;;AAUoE,MAAlE,WAAM,gCAAmB;IAC3B;0BAGkC;AAChC,YAAO,AAAU,SAAD,IAAI;AACpB,YAC6C,EADrC,AAAU,SAAD,YAAU,kBACnB,AAAU,SAAD,YAAU,sBACtB,AAAU,SAAD,YAAU,eAAe,AAAU,SAAD,YAAU;IAC5D;;AAKmE,MAAjE,WAAM,gCAAmB;IAC3B;;AAMiE,MAA/D,WAAM,gCAAmB;IAC3B;;AAW8D,MAA5D,WAAM,gCAAmB;IAC3B;2BAK2C,OACnB;AACiD,MAAvE,WAAM,gCAAmB;IAC3B;0BAcW,OAA0B;AACmC,MAAtE,WAAM,gCAAmB;IAC3B;oBAcoC;AAC8B,MAAhE,WAAM,gCAAmB;IAC3B;;UA2BU;UAA0C;AACU,MAA5D,WAAM,gCAAmB;IAC3B;mBAgBwC;AAAb;AACsC,QAA/D,WAAM,gCAAmB;MAC3B;;;AAegD;AACoB,QAAlE,WAAM,gCAAmB;MAC3B;;yBA8CmB;AADgC;AAEoB,QAArE,WAAM,gCAAmB;MAC3B;;0BAe4D;AAAR;AACoB,QAAtE,WAAM,gCAAmB;MAC3B;;+BAsBW,OAAc;AADgC;AAEoB,QAA3E,WAAM,gCAAmB;MAC3B;;wBAkBW,OAAc;AADyB;AAEoB,QAApE,WAAM,gCAAmB;MAC3B;;0BAWgE,aAC3B;AADmB;AAEgB,QAAtE,WAAM,gCAAmB;MAC3B;;oBAS4D;AACM,MAAhE,WAAM,gCAAmB;IAC3B;uBAM6C;AACwB,MAAnE,WAAM,gCAAmB;IAC3B;;AAOoB;AACsC,QAAxD,WAAM,gCAAmB;MAC3B;;4BAmB8C;AAC4B,MAAxE,WAAM,gCAAmB;IAC3B;;UA4CsB;UACmB;UACH;UACV;UACgB;UACd;UACjB;UACL;AAC4D,MAAlE,WAAM,gCAAmB;IAC3B;;;QAhjB2B;;AAAgB,2FAAa;;EAAO;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAW3C,4DAAM;YAAG;;MAwBD,+DAAS;;;;;;;;;;;;;;IC4D9B;;;;;;;;AA5FqC;yGAAsB;;IAAE;;AAuBlE,YAAO;IACT;;AAKE,YAAiC;IACnC;;AAsDE,YAAO;IACT;oBAG6B;AACA,MAA3B,qBAAe,YAAY;IAC7B;yBAKiC,SAAsB;AACrD,YAAO,AAAQ,OAAD,IAAI;AAClB,YAAO,AAAqB,AAAU,oFAAT,OAAO,KAAK;AAEO,MAAhD,AAAqB,AAAU,oFAAT,OAAO,MAAM,YAAY;IACjD;sCAM0B;AADkB;AAEnC,mCAAU,AAAS,kBAAC;AACI,+BAC3B,AAA0B,yFAAC,OAAO;AACZ,uBACtB,AAAmC,kGAAC,OAAO;AAE/C,YAAI,AAAS,AAAS,kBAAR,WAAW;AACI,UAA3B,AAAS,QAAD,eAAe;AACG,UAA1B,AAAiB,gBAAD,KAAK;;AAEM,wBACvB,kDAA0B,AAAS,kBAAC;AACtB,qBAAO,8CAAkB,QAAQ,EAAE,OAAO;AACjC,UAA3B,AAAS,QAAD,eAAe,IAAI;AAC+B,UAA1D,AAAiB,gBAAD,KAAK,8CAAkB,QAAQ,EAAE,OAAO;;MAE5D;;oCAO0B;AADgB;AAEjC,mCAAU,AAAS,kBAAC;AACI,sCAC3B,AAAwB,uFAAC,OAAO;AACL,0CAC3B,AAAqB,oFAAC,OAAO;AACP,uBACtB,AAAmC,kGAAC,OAAO;AAE/C,YAAI,AAAS,AAAS,kBAAR,WAAW;AACI,UAA3B,AAAS,QAAD,eAAe;AACU,UAAjC,AAAwB,uBAAD,KAAK;AACS,UAArC,AAA4B,2BAAD,KAAK;;AAEL,wBACvB,kDAA0B,AAAS,kBAAC;AAEtB,qBAAO,8CAAkB,QAAQ,EAAE,OAAO;AACjC,UAA3B,AAAS,QAAD,eAAe,IAAI;AACM,UAAjC,AAAwB,uBAAD,KAAK,IAAI;AACK,UAArC,AAA4B,2BAAD,KAAK,IAAI;;MAExC;;wCAG0B;AADoB;;AAElC,+BAAS,AAAS,kBAAC;AACnB,8BAAQ,AAAS,kBAAC;AACf,mCAAU,AAAS,kBAAC;AAEb,4DACE,iDAAoB,KAAK,YAAW,OAAO;AAC9C,wBAAY,AAAmB,kFAAC,MAAM;AACL,aAApD,SAAS;aAAuB,mBAAmB;QAApB;MACjC;;qCAG0B;AADiB;;AAE/B,+BAAS,AAAS,kBAAC;AACD,8BAAQ,AAAS,kBAAC;AAClB,gCAAU,AAAK,KAAA,QAAC;AAEzB,wBAAY,AAAmB,kFAAC,MAAM;AAEnC,wBAAY,gEACP,aAAhB,AAAQ,OAAD,IAAI,OAAO,AAAO,OAAA,QAAC,aAAa,AAAK,KAAA,QAAC,mBAChC,aAAhB,AAAQ,OAAD,IAAI,OAAO,AAAO,OAAA,QAAC,UAAU;AAGL,aAAvC,SAAS;aAAoB,SAAS;QAAV;MAC9B;;2BAEwD;AAAvB;;AACrB,+BAAS,AAAS,kBAAC;AAChB,0CAAiB,AAAS,kBAAC;AAC9B,4CAAsB,AAAS,kBAAC;AAEvB,wBAAY,AAAmB,kFAAC,MAAM;AACF,aAAvD,SAAS;aAAU,cAAc;aAAE,mBAAmB;QAApC;MACpB;;2CAG0B;AADuB;;AAErC,+BAAS,AAAS,kBAAC;AAChB,0CAAiB,AAAS,kBAAC;AAErB,wBAAY,AAAmB,kFAAC,MAAM;AACP,aAAlD,SAAS;aAA0B,cAAc;QAAf;MACpC;;;UAO8C;AAC5C,qBAAK,AAAoC,yGAAY,AAAI,GAAD;AAEf,QADvC,AAAmC,kGAAC,AAAI,GAAD,OACnC,qEAA+B,GAAG;;AAGxC,YAAO,AAAmC,mGAAC,AAAI,GAAD;IAChD;;UAIuB;UACd;AAEP,UAAI,WAAW,IAAI;AACsC,QAAlD,mBAAc,8CAAkB,MAAM,WAAW;;AAGxB,MAA3B,oBAAe,YAAY;AAChC,YAAO;IACT;oBAGoC;AAAR;AAIW,QAHrC,MAAM,AAAQ,AAGX,uFAH8B,wBAAyC,2CACxE,WAAW,AAAI,eACf,QAAQ,IAAI;MAEhB;;oBAG8C;AAAR;AACf,sBAAS,MAAM,AAC/B,AAIF,wGAHK,wBAAyC,2CAC/C,WAAW,AAAI,eACf,QAAQ,IAAI;AAGd,cAAO,+DACM,AAAM,MAAA,QAAC,qBACZ,kDAA0B,AAAM,MAAA,QAAC;MAE3C;;yBAGyC,MAAa;AAArB;AAMM,QALrC,MAAM,AACD,AAIF,uFAJqB,6BAA8C,2CACpE,WAAW,AAAI,eACf,QAAQ,IAAI,EACZ,eAAe,WAAW;MAE9B;;mCAIW,OAAc;AADoC;AAEtC,oBAAO,MAAM,AAAQ,AAKvC,wGAJC,uCAAwD,2CAC1D,WAAW,AAAI,eACf,SAAS,KAAK,EACd,YAAY,QAAQ;AAGM,6BACxB,mEAA4B,MAAM,IAAI;AAET,QAAjC,mBAAc,AAAe,cAAD;AAC5B,cAAO,eAAc;MACvB;;+BAGuD;AAAR;AACxB,oBAAO,MAAM,AAAQ,AAIvC,wGAHC,mCAAoD,2CACtD,WAAW,AAAI,eACf,SAAS,KAAK;AAGhB,cAAO,uCAAkB,AAAI,IAAA,QAAC;MAChC;;;AAII,YAAA,AAA0B,AAAW,0FAAV,AAAI;IAAY;;AAI3C,YAAA,AAAwB,AAAW,wFAAV,AAAI;IAAY;;AAGP,YAAA,AAAqB,AAAW,qFAAV,AAAI;IAAY;2BAGjC,OACnB;;AACtB,YAAO,AACF,AAIF,wFAJqB,+BAAgD,2CACtE,WAAW,AAAI,eACf,SAAS,KAAK,EACd,4BAAsB,kBAAkB,eAAlB,OAAoB;IAE9C;0BAIW,OAA0B;AACnC,YAAO,AACF,AAIF,wFAJqB,8BAA+C,2CACrE,WAAW,AAAI,eACf,SAAS,KAAK,EACd,sBAAsB,AAAmB,kBAAD;IAE5C;oBAGoC;AAAR;AACL,oBAAO,MAAM,AAAQ,AAIvC,wGAHC,wBAAyC,2CAC3C,WAAW,AAAI,eACf,gBAAgB,YAAY;AAGU,4BAAnC,aAAe,AAAI,IAAA,QAAC;MAC3B;;;UAIU;UAA0C;AAD5B;AAMe,QAJrC,MAAM,AAAQ,AAIX,0FAJwB,oBAAqC,2CAC9D,WAAW,AAAI,eACf,qCAAqC,iCAAiC,EACtE,mBAAmB,eAAe;MAEtC;;mBAGwC;AAE0B,MADhE,WAAM,gCACF;IACN;;AAGgD;AACzB,oBAAO,MAAM,AAAQ,AAGvC,wGAFC,0BAA2C,2CAC7C,WAAW,AAAI;AAGW,6BACxB,mEAA4B,MAAM,IAAI;AAET,QAAjC,mBAAc,AAAe,cAAD;AAC5B,cAAO,eAAc;MACvB;;yBAImB;AADgC;AAE5B,oBAAO,MAAM,AAAQ,AAIvC,wGAHC,6BAA8C,2CAChD,WAAW,AAAI,eACf,cAAc,AAAW,UAAD;AAGE,6BACxB,mEAA4B,MAAM,IAAI;AAET,QAAjC,mBAAc,AAAe,cAAD;AAC5B,cAAO,eAAc;MACvB;;0BAG4D;AAAR;AAC7B,oBAAO,MAAM,AAAQ,AAIvC,wGAHC,8BAA+C,2CACjD,WAAW,AAAI,eACf,SAAS,KAAK;AAGY,6BACxB,mEAA4B,MAAM,IAAI;AAET,QAAjC,mBAAc,AAAe,cAAD;AAC5B,cAAO,eAAc;MACvB;;+BAIW,OAAc;AADgC;AAElC,oBAAO,MAAM,AAAQ,AAKvC,wGAJC,mCAAoD,2CACtD,WAAW,AAAI,eACf,SAAS,KAAK,EACd,YAAY,QAAQ;AAGM,6BACxB,mEAA4B,MAAM,IAAI;AAET,QAAjC,mBAAc,AAAe,cAAD;AAC5B,cAAO,eAAc;MACvB;;wBAIW,OAAc;AADyB;AAE3B,oBAAO,MAAM,AAAQ,AAKvC,wGAJC,4BAA6C,2CAC/C,WAAW,AAAI,eACf,SAAS,KAAK,EACd,aAAa,SAAS;AAGI,6BACxB,mEAA4B,MAAM,IAAI;AAET,QAAjC,mBAAc,AAAe,cAAD;AAC5B,cAAO,eAAc;MACvB;;oBAG4D;AAEO,MADjE,WAAM,gCACF;IACN;uBAG6C;AAEyB,MADpE,WAAM,gCACF;IACN;;AAEoB;AAGmB,QAFrC,MAAM,AAAQ,AAEX,uFAF8B,gBAAiC,2CAChE,WAAW,AAAI;AAGC,QAAlB,mBAAc;MAChB;;4BAE8C;AAAR;AACf,oBAAO,MAAM,AAAQ,AAIvC,wGAHC,gCAAiD,2CACnD,WAAW,AAAI,eACf,QAAQ,IAAI;AAGd,uCAAO,AAAI,IAAA,QAAC;MACd;;;UAGS;UACoB;UACH;UACV;UACgB;UACvB;UACE;UACL;AAEJ,UAA0B,YAAtB,gCAAwC;AAEqB,QAD/D,WAAM,gCACF;;AAGF,mBAAmC;AAGoB,MAD3D,AAAmB,kFAAC,MAAM,EAAI,gDAAmB,qBAAqB,EAClE,kBAAkB,EAAE,QAAQ,EAAE,wBAAwB;AAE1D,YAAO,AACF,AAOF,wFAPqB,0BAA2C,2CACjE,WAAW,AAAI,eACf,UAAU,MAAM,EAChB,eAAe,WAAW,EAC1B,WAAW,AAAQ,OAAD,iBAClB,uBAAuB,mBAAmB,EAC1C,kCAAkC,8BAA8B;IAEpE;;;IAtZa;IAYN;AAxDyB,kGAAmB;;EAAK;;QAGjB;IAyC1B;IAYN;AArDwC,kGAAmB,GAAG;AAKjE,IAHF,AACK,uFAAmB,gCAAiD,2CACvE,WAAW,AAAI,GAAD;AAK0B,IAD1C,AAA0B,yFAAC,AAAI,GAAD,OAC1B;AACuE,IAA3E,AAAwB,uFAAC,AAAI,GAAD,OAAS;AACmC,IAAxE,AAAqB,oFAAC,AAAI,GAAD,OAAS;AAIlC,kBAAI,sEAAc;AAqBhB,IAnBF,AAAQ,oFAAqB,QAAY;AACjB,iCAAY,AAAK,IAAD;AAEtC,cAAQ,AAAK,IAAD;;;AAER,gBAAO,uCAAgC;;;;AAEvC,gBAAO,qCAA8B;;;;AAErC,gBAAO,yCAAkC;;;;AAEzC,gBAAO,sCAA+B;;;;AAEtC,gBAAO,4BAAqB;;;;AAE5B,gBAAO,4CAAqC;;;;AAEuB,UAAnE,WAAM,gCAA4D,SAAtC,AAAK,IAAD,WAAQ;;;IAE7C;AAEkB,IAAnB,sEAAe;EACjB;;;;;;;;;;;;;;;;;;;;;MApFY,mEAAY;YAAG;;;MAGhB,6EAAsB;YAAG;;;MAMT,8DAAO;;;MAK9B,0FAAmC;YACA;;;MAGnC,iFAA0B;YAA2C;;;MAEtB,+EAAwB;YAC/B;;;MAEO,4EAAqB;YAC5B;;;MAER,0EAAmB;YAAG","file":"../../../../../../../../../../../../packages/firebase_auth_platform_interface/src/providers/twitter_auth.dart.lib.js"}');
  // Exports:
  return {
    src__providers__twitter_auth: twitter_auth,
    src__providers__oauth: oauth,
    src__providers__google_auth: google_auth,
    src__providers__github_auth: github_auth,
    src__providers__facebook_auth: facebook_auth,
    src__providers__email_auth: email_auth,
    src__providers__phone_auth: phone_auth,
    src__types: types,
    src__platform_interface__platform_interface_recaptcha_verifier_factory: platform_interface_recaptcha_verifier_factory,
    src__platform_interface__platform_interface_confirmation_result: platform_interface_confirmation_result,
    src__method_channel__utils__phone_auth_callbacks: phone_auth_callbacks,
    src__method_channel__utils__exception: exception$,
    src__platform_interface__platform_interface_user: platform_interface_user,
    src__platform_interface__platform_interface_user_credential: platform_interface_user_credential,
    src__method_channel__method_channel_user_credential: method_channel_user_credential,
    src__method_channel__method_channel_user: method_channel_user,
    src__method_channel__method_channel_firebase_auth: method_channel_firebase_auth,
    src__platform_interface__platform_interface_firebase_auth: platform_interface_firebase_auth,
    firebase_auth_platform_interface: firebase_auth_platform_interface
  };
}));

//# sourceMappingURL=twitter_auth.dart.lib.js.map
