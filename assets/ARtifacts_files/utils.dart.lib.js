define(['dart_sdk', 'packages/firebase_auth_platform_interface/src/firebase_auth_exception.dart', 'packages/firebase_auth_platform_interface/src/action_code_info.dart', 'packages/firebase_auth_platform_interface/src/additional_user_info.dart', 'packages/firebase_auth_platform_interface/src/id_token_result.dart', 'packages/firebase_auth_platform_interface/src/providers/twitter_auth.dart', 'packages/firebase/src/storage.dart'], (function load__packages__firebase_auth_web__utils_dart(dart_sdk, packages__firebase_auth_platform_interface__src__firebase_auth_exception$46dart, packages__firebase_auth_platform_interface__src__action_code_info$46dart, packages__firebase_auth_platform_interface__src__additional_user_info$46dart, packages__firebase_auth_platform_interface__src__id_token_result$46dart, packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart, packages__firebase__src__storage$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const firebase_auth_exception = packages__firebase_auth_platform_interface__src__firebase_auth_exception$46dart.src__firebase_auth_exception;
  const action_code_info = packages__firebase_auth_platform_interface__src__action_code_info$46dart.src__action_code_info;
  const additional_user_info = packages__firebase_auth_platform_interface__src__additional_user_info$46dart.src__additional_user_info;
  const id_token_result = packages__firebase_auth_platform_interface__src__id_token_result$46dart.src__id_token_result;
  const types = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__types;
  const email_auth = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__providers__email_auth;
  const facebook_auth = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__providers__facebook_auth;
  const github_auth = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__providers__github_auth;
  const google_auth = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__providers__google_auth;
  const twitter_auth = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__providers__twitter_auth;
  const phone_auth = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__providers__phone_auth;
  const oauth = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__providers__oauth;
  const platform_interface_recaptcha_verifier_factory = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__platform_interface__platform_interface_recaptcha_verifier_factory;
  const auth = packages__firebase__src__storage$46dart.src__auth;
  var utils = Object.create(dart.library);
  var $replaceFirst = dartx.replaceFirst;
  var $_get = dartx._get;
  var $forEach = dartx.forEach;
  dart._checkModuleNullSafetyMode(false);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var EmailAuthProviderL = () => (EmailAuthProviderL = dart.constFn(dart.legacy(email_auth.EmailAuthProvider)))();
  var FacebookAuthProviderL = () => (FacebookAuthProviderL = dart.constFn(dart.legacy(facebook_auth.FacebookAuthProvider)))();
  var FacebookAuthProviderL$ = () => (FacebookAuthProviderL$ = dart.constFn(dart.legacy(auth.FacebookAuthProvider)))();
  var StringLToFacebookAuthProviderL = () => (StringLToFacebookAuthProviderL = dart.constFn(dart.fnType(FacebookAuthProviderL$(), [StringL()])))();
  var LinkedHashMapOfStringL$dynamic = () => (LinkedHashMapOfStringL$dynamic = dart.constFn(collection.LinkedHashMap$(StringL(), dart.dynamic)))();
  var GithubAuthProviderL = () => (GithubAuthProviderL = dart.constFn(dart.legacy(github_auth.GithubAuthProvider)))();
  var GithubAuthProviderL$ = () => (GithubAuthProviderL$ = dart.constFn(dart.legacy(auth.GithubAuthProvider)))();
  var StringLToGithubAuthProviderL = () => (StringLToGithubAuthProviderL = dart.constFn(dart.fnType(GithubAuthProviderL$(), [StringL()])))();
  var GoogleAuthProviderL = () => (GoogleAuthProviderL = dart.constFn(dart.legacy(google_auth.GoogleAuthProvider)))();
  var GoogleAuthProviderL$ = () => (GoogleAuthProviderL$ = dart.constFn(dart.legacy(auth.GoogleAuthProvider)))();
  var StringLToGoogleAuthProviderL = () => (StringLToGoogleAuthProviderL = dart.constFn(dart.fnType(GoogleAuthProviderL$(), [StringL()])))();
  var TwitterAuthProviderL = () => (TwitterAuthProviderL = dart.constFn(dart.legacy(twitter_auth.TwitterAuthProvider)))();
  var PhoneAuthProviderL = () => (PhoneAuthProviderL = dart.constFn(dart.legacy(phone_auth.PhoneAuthProvider)))();
  var OAuthProviderL = () => (OAuthProviderL = dart.constFn(dart.legacy(oauth.OAuthProvider)))();
  var OAuthProviderL$ = () => (OAuthProviderL$ = dart.constFn(dart.legacy(auth.OAuthProvider)))();
  var StringLToOAuthProviderL = () => (StringLToOAuthProviderL = dart.constFn(dart.fnType(OAuthProviderL$(), [StringL()])))();
  var EmailAuthCredentialL = () => (EmailAuthCredentialL = dart.constFn(dart.legacy(email_auth.EmailAuthCredential)))();
  var FacebookAuthCredentialL = () => (FacebookAuthCredentialL = dart.constFn(dart.legacy(facebook_auth.FacebookAuthCredential)))();
  var GithubAuthCredentialL = () => (GithubAuthCredentialL = dart.constFn(dart.legacy(github_auth.GithubAuthCredential)))();
  var GoogleAuthCredentialL = () => (GoogleAuthCredentialL = dart.constFn(dart.legacy(google_auth.GoogleAuthCredential)))();
  var OAuthCredentialL = () => (OAuthCredentialL = dart.constFn(dart.legacy(oauth.OAuthCredential)))();
  var TwitterAuthCredentialL = () => (TwitterAuthCredentialL = dart.constFn(dart.legacy(twitter_auth.TwitterAuthCredential)))();
  var PhoneAuthCredentialL = () => (PhoneAuthCredentialL = dart.constFn(dart.legacy(phone_auth.PhoneAuthCredential)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: types.Persistence.prototype,
        [_name]: "Persistence.SESSION",
        index: 2
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: types.Persistence.prototype,
        [_name]: "Persistence.NONE",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: types.Persistence.prototype,
        [_name]: "Persistence.LOCAL",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize.prototype,
        [_name$]: "RecaptchaVerifierSize.compact",
        index: 1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize.prototype,
        [_name$]: "RecaptchaVerifierSize.normal",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme.prototype,
        [_name$]: "RecaptchaVerifierTheme.dark",
        index: 1
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme.prototype,
        [_name$]: "RecaptchaVerifierTheme.light",
        index: 0
      });
    }
  }, false);
  var _name = dart.privateName(types, "_name");
  var C0;
  var C1;
  var C2;
  var _name$ = dart.privateName(platform_interface_recaptcha_verifier_factory, "_name");
  var C3;
  var C4;
  var C5;
  var C6;
  utils.throwFirebaseAuthException = function throwFirebaseAuthException(exception) {
    if (!dart.legacy(dart.anonymousJSType("FirebaseError")).is(exception)) {
      return new firebase_auth_exception.FirebaseAuthException.new({code: "unknown", message: "An unknown error occurred: " + dart.str(exception)});
    }
    let firebaseError = dart.legacy(dart.anonymousJSType("FirebaseError")).as(exception);
    let code = firebaseError.code[$replaceFirst]("auth/", "");
    let message = firebaseError.message[$replaceFirst]("(" + dart.str(firebaseError.code) + ")", "");
    return new firebase_auth_exception.FirebaseAuthException.new({code: code, message: message});
  };
  utils.convertWebActionCodeInfo = function convertWebActionCodeInfo(webActionCodeInfo) {
    if (webActionCodeInfo == null) {
      return null;
    }
    return new action_code_info.ActionCodeInfo.new({operation: 0, data: new (IdentityMapOfStringL$dynamic()).from(["email", webActionCodeInfo.data.email])});
  };
  utils.convertWebAdditionalUserInfo = function convertWebAdditionalUserInfo(webAdditionalUserInfo) {
    if (webAdditionalUserInfo == null) {
      return null;
    }
    return new additional_user_info.AdditionalUserInfo.new({isNewUser: webAdditionalUserInfo.isNewUser, profile: webAdditionalUserInfo.profile, providerId: webAdditionalUserInfo.providerId, username: webAdditionalUserInfo.username});
  };
  utils.convertWebIdTokenResult = function convertWebIdTokenResult(webIdTokenResult) {
    return new id_token_result.IdTokenResult.new(new (IdentityMapOfStringL$dynamic()).from(["claims", webIdTokenResult.claims, "expirationTimestamp", webIdTokenResult.expirationTime.millisecondsSinceEpoch, "issuedAtTimestamp", webIdTokenResult.issuedAtTime.millisecondsSinceEpoch, "authTimestamp", webIdTokenResult.authTime.millisecondsSinceEpoch, "signInProvider", webIdTokenResult.signInProvider, "signInSecondFactor", null, "token", webIdTokenResult.token]));
  };
  utils.convertPlatformActionCodeSettings = function convertPlatformActionCodeSettings(actionCodeSettings) {
    if (actionCodeSettings == null) {
      return null;
    }
    let actionCodeSettingsMap = actionCodeSettings.asMap();
    let android = null;
    let iOS = null;
    if (actionCodeSettingsMap[$_get]("android") != null) {
      android = {packageName: StringL().as(dart.dsend(actionCodeSettingsMap[$_get]("android"), '_get', ["packageName"])), minimumVersion: StringL().as(dart.dsend(actionCodeSettingsMap[$_get]("android"), '_get', ["minimumVersion"])), installApp: boolL().as(dart.dsend(actionCodeSettingsMap[$_get]("android"), '_get', ["installApp"]))};
    }
    if (actionCodeSettingsMap[$_get]("iOS") != null) {
      iOS = {bundleId: StringL().as(dart.dsend(actionCodeSettingsMap[$_get]("iOS"), '_get', ["bundleId"]))};
    }
    return {url: actionCodeSettings.url, handleCodeInApp: actionCodeSettings.handleCodeInApp, android: android, iOS: iOS};
  };
  utils.convertPlatformPersistence = function convertPlatformPersistence(persistence) {
    switch (persistence) {
      case C0 || CT.C0:
      {
        return "session";
      }
      case C1 || CT.C1:
      {
        return "none";
      }
      case C2 || CT.C2:
      default:
      {
        return "local";
      }
    }
  };
  utils.convertPlatformAuthProvider = function convertPlatformAuthProvider(authProvider) {
    if (EmailAuthProviderL().is(authProvider)) {
      return auth.EmailAuthProvider.new();
    }
    if (FacebookAuthProviderL().is(authProvider)) {
      let facebookAuthProvider = auth.FacebookAuthProvider.new();
      authProvider.scopes[$forEach](dart.fn(scope => facebookAuthProvider.addScope(scope), StringLToFacebookAuthProviderL()));
      facebookAuthProvider.setCustomParameters(LinkedHashMapOfStringL$dynamic().from(authProvider.parameters));
      return facebookAuthProvider;
    }
    if (GithubAuthProviderL().is(authProvider)) {
      let githubAuthProvider = auth.GithubAuthProvider.new();
      authProvider.scopes[$forEach](dart.fn(scope => githubAuthProvider.addScope(scope), StringLToGithubAuthProviderL()));
      githubAuthProvider.setCustomParameters(LinkedHashMapOfStringL$dynamic().from(authProvider.parameters));
      return githubAuthProvider;
    }
    if (GoogleAuthProviderL().is(authProvider)) {
      let googleAuthProvider = auth.GoogleAuthProvider.new();
      authProvider.scopes[$forEach](dart.fn(scope => googleAuthProvider.addScope(scope), StringLToGoogleAuthProviderL()));
      googleAuthProvider.setCustomParameters(LinkedHashMapOfStringL$dynamic().from(authProvider.parameters));
      return googleAuthProvider;
    }
    if (TwitterAuthProviderL().is(authProvider)) {
      let twitterAuthProvider = auth.TwitterAuthProvider.new();
      twitterAuthProvider.setCustomParameters(LinkedHashMapOfStringL$dynamic().from(authProvider.parameters));
      return twitterAuthProvider;
    }
    if (PhoneAuthProviderL().is(authProvider)) {
      return auth.PhoneAuthProvider.new();
    }
    if (OAuthProviderL().is(authProvider)) {
      let oAuthProvider = auth.OAuthProvider.new(authProvider.providerId);
      authProvider.scopes[$forEach](dart.fn(scope => oAuthProvider.addScope(scope), StringLToOAuthProviderL()));
      oAuthProvider.setCustomParameters(LinkedHashMapOfStringL$dynamic().from(authProvider.parameters));
      return oAuthProvider;
    }
    return null;
  };
  utils.convertWebOAuthCredential = function convertWebOAuthCredential(oAuthCredential) {
    if (oAuthCredential == null) {
      return null;
    }
    return new oauth.OAuthProvider.new(oAuthCredential.providerId).credential({accessToken: oAuthCredential.accessToken, idToken: oAuthCredential.idToken});
  };
  utils.convertPlatformCredential = function convertPlatformCredential(credential) {
    if (EmailAuthCredentialL().is(credential)) {
      if (credential.emailLink != null) {
        dart.throw(new core.UnimplementedError.new("EmailAuthProvider.credentialWithLink() is not supported on web"));
      }
      return auth.EmailAuthProvider.credential(credential.email, credential.password);
    }
    if (FacebookAuthCredentialL().is(credential)) {
      return auth.FacebookAuthProvider.credential(credential.accessToken);
    }
    if (GithubAuthCredentialL().is(credential)) {
      return auth.GithubAuthProvider.credential(credential.accessToken);
    }
    if (GoogleAuthCredentialL().is(credential)) {
      return auth.GoogleAuthProvider.credential(credential.idToken, credential.accessToken);
    }
    if (OAuthCredentialL().is(credential)) {
      return auth.OAuthProvider.new(credential.providerId).credential(credential.idToken, credential.accessToken);
    }
    if (TwitterAuthCredentialL().is(credential)) {
      return auth.TwitterAuthProvider.credential(credential.accessToken, credential.secret);
    }
    if (PhoneAuthCredentialL().is(credential)) {
      return auth.PhoneAuthProvider.credential(credential.verificationId, credential.smsCode);
    }
    if (OAuthCredentialL().is(credential)) {
      return auth.OAuthProvider.new(credential.providerId).credential(credential.idToken, credential.accessToken);
    }
    return null;
  };
  utils.convertRecaptchaVerifierSize = function convertRecaptchaVerifierSize(size) {
    switch (size) {
      case C3 || CT.C3:
      {
        return "compact";
      }
      case C4 || CT.C4:
      default:
      {
        return "normal";
      }
    }
  };
  utils.convertRecaptchaVerifierTheme = function convertRecaptchaVerifierTheme(theme) {
    switch (theme) {
      case C5 || CT.C5:
      {
        return "dark";
      }
      case C6 || CT.C6:
      default:
      {
        return "light";
      }
    }
  };
  dart.trackLibraries("packages/firebase_auth_web/utils.dart", {
    "package:firebase_auth_web/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/firebase_auth_web/utils.dart.lib.js"}');
  // Exports:
  return {
    utils: utils
  };
}));

//# sourceMappingURL=utils.dart.lib.js.map
