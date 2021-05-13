define(['dart_sdk', 'packages/firebase_auth_web/utils.dart', 'packages/firebase_auth_platform_interface/src/providers/twitter_auth.dart', 'packages/firebase/src/storage.dart', 'packages/firebase_auth_platform_interface/src/id_token_result.dart', 'packages/intl/src/intl_helpers.dart'], (function load__packages__firebase_auth_web__firebase_auth_web_confirmation_result_dart(dart_sdk, packages__firebase_auth_web__utils$46dart, packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart, packages__firebase__src__storage$46dart, packages__firebase_auth_platform_interface__src__id_token_result$46dart, packages__intl__src__intl_helpers$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils = packages__firebase_auth_web__utils$46dart.utils;
  const platform_interface_user_credential = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__platform_interface__platform_interface_user_credential;
  const platform_interface_confirmation_result = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__platform_interface__platform_interface_confirmation_result;
  const platform_interface_firebase_auth = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__platform_interface__platform_interface_firebase_auth;
  const platform_interface_user = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__platform_interface__platform_interface_user;
  const auth = packages__firebase__src__storage$46dart.src__auth;
  const id_token_result = packages__firebase_auth_platform_interface__src__id_token_result$46dart.src__id_token_result;
  const intl = packages__intl__src__intl_helpers$46dart.intl;
  var firebase_auth_web_confirmation_result = Object.create(dart.library);
  var firebase_auth_web_user_credential = Object.create(dart.library);
  var firebase_auth_web_user = Object.create(dart.library);
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var UserCredentialPlatformL = () => (UserCredentialPlatformL = dart.constFn(dart.legacy(platform_interface_user_credential.UserCredentialPlatform)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var IdentityMapOfStringL$intL = () => (IdentityMapOfStringL$intL = dart.constFn(_js_helper.IdentityMap$(StringL(), intL())))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(StringL(), dart.dynamic)))();
  var MapLOfStringL$dynamic = () => (MapLOfStringL$dynamic = dart.constFn(dart.legacy(MapOfStringL$dynamic())))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var UserInfoOfUserInfoJsImplL = () => (UserInfoOfUserInfoJsImplL = dart.constFn(auth.UserInfo$(dart.legacy(dart.anonymousJSType("UserInfoJsImpl")))))();
  var UserInfoLOfUserInfoJsImplL = () => (UserInfoLOfUserInfoJsImplL = dart.constFn(dart.legacy(UserInfoOfUserInfoJsImplL())))();
  var UserInfoLOfUserInfoJsImplLToMapLOfStringL$dynamic = () => (UserInfoLOfUserInfoJsImplLToMapLOfStringL$dynamic = dart.constFn(dart.fnType(MapLOfStringL$dynamic(), [UserInfoLOfUserInfoJsImplL()])))();
  var IdTokenResultL = () => (IdTokenResultL = dart.constFn(dart.legacy(id_token_result.IdTokenResult)))();
  var RecaptchaVerifierL = () => (RecaptchaVerifierL = dart.constFn(dart.legacy(auth.RecaptchaVerifier)))();
  var ConfirmationResultPlatformL = () => (ConfirmationResultPlatformL = dart.constFn(dart.legacy(platform_interface_confirmation_result.ConfirmationResultPlatform)))();
  var UserPlatformL = () => (UserPlatformL = dart.constFn(dart.legacy(platform_interface_user.UserPlatform)))();
  const CT = Object.create(null);
  var L2 = "package:firebase_auth_web/firebase_auth_web_user.dart";
  var L0 = "package:firebase_auth_web/firebase_auth_web_confirmation_result.dart";
  var L1 = "package:firebase_auth_web/firebase_auth_web_user_credential.dart";
  var _auth$ = dart.privateName(firebase_auth_web_confirmation_result, "_auth");
  var _webConfirmationResult$ = dart.privateName(firebase_auth_web_confirmation_result, "_webConfirmationResult");
  firebase_auth_web_confirmation_result.ConfirmationResultWeb = class ConfirmationResultWeb extends platform_interface_confirmation_result.ConfirmationResultPlatform {
    confirm(verificationCode) {
      return async.async(UserCredentialPlatformL(), (function* confirm() {
        try {
          return new firebase_auth_web_user_credential.UserCredentialWeb.new(this[_auth$], yield this[_webConfirmationResult$].confirm(verificationCode));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
  };
  (firebase_auth_web_confirmation_result.ConfirmationResultWeb.new = function(_auth, _webConfirmationResult) {
    this[_auth$] = _auth;
    this[_webConfirmationResult$] = _webConfirmationResult;
    firebase_auth_web_confirmation_result.ConfirmationResultWeb.__proto__.new.call(this, _webConfirmationResult.verificationId);
    ;
  }).prototype = firebase_auth_web_confirmation_result.ConfirmationResultWeb.prototype;
  dart.addTypeTests(firebase_auth_web_confirmation_result.ConfirmationResultWeb);
  dart.addTypeCaches(firebase_auth_web_confirmation_result.ConfirmationResultWeb);
  dart.setLibraryUri(firebase_auth_web_confirmation_result.ConfirmationResultWeb, L0);
  dart.setFieldSignature(firebase_auth_web_confirmation_result.ConfirmationResultWeb, () => ({
    __proto__: dart.getFields(firebase_auth_web_confirmation_result.ConfirmationResultWeb.__proto__),
    [_auth$]: dart.finalFieldType(dart.legacy(platform_interface_firebase_auth.FirebaseAuthPlatform)),
    [_webConfirmationResult$]: dart.finalFieldType(dart.legacy(auth.ConfirmationResult))
  }));
  firebase_auth_web_user_credential.UserCredentialWeb = class UserCredentialWeb extends platform_interface_user_credential.UserCredentialPlatform {};
  (firebase_auth_web_user_credential.UserCredentialWeb.new = function(auth, webUserCredential) {
    firebase_auth_web_user_credential.UserCredentialWeb.__proto__.new.call(this, {auth: auth, additionalUserInfo: utils.convertWebAdditionalUserInfo(webUserCredential.additionalUserInfo), credential: utils.convertWebOAuthCredential(webUserCredential.credential), user: new firebase_auth_web_user.UserWeb.new(auth, webUserCredential.user)});
    ;
  }).prototype = firebase_auth_web_user_credential.UserCredentialWeb.prototype;
  dart.addTypeTests(firebase_auth_web_user_credential.UserCredentialWeb);
  dart.addTypeCaches(firebase_auth_web_user_credential.UserCredentialWeb);
  dart.setLibraryUri(firebase_auth_web_user_credential.UserCredentialWeb, L1);
  var _webUser$ = dart.privateName(firebase_auth_web_user, "_webUser");
  firebase_auth_web_user.UserWeb = class UserWeb extends platform_interface_user.UserPlatform {
    delete() {
      try {
        return this[_webUser$].delete();
      } catch (e$) {
        let e = dart.getThrown(e$);
        dart.throw(utils.throwFirebaseAuthException(e));
      }
    }
    getIdToken(forceRefresh) {
      try {
        return this[_webUser$].getIdToken(forceRefresh);
      } catch (e$) {
        let e = dart.getThrown(e$);
        dart.throw(utils.throwFirebaseAuthException(e));
      }
    }
    getIdTokenResult(forceRefresh) {
      return async.async(IdTokenResultL(), (function* getIdTokenResult() {
        return utils.convertWebIdTokenResult(yield this[_webUser$].getIdTokenResult(forceRefresh));
      }).bind(this));
    }
    linkWithCredential(credential) {
      return async.async(UserCredentialPlatformL(), (function* linkWithCredential() {
        try {
          return new firebase_auth_web_user_credential.UserCredentialWeb.new(this.auth, yield this[_webUser$].linkWithCredential(utils.convertPlatformCredential(credential)));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    linkWithPhoneNumber(phoneNumber, applicationVerifier) {
      return async.async(ConfirmationResultPlatformL(), (function* linkWithPhoneNumber() {
        try {
          let verifier = RecaptchaVerifierL().as(applicationVerifier.delegate);
          return new firebase_auth_web_confirmation_result.ConfirmationResultWeb.new(this.auth, yield this[_webUser$].linkWithPhoneNumber(phoneNumber, verifier));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    reauthenticateWithCredential(credential) {
      return async.async(UserCredentialPlatformL(), (function* reauthenticateWithCredential() {
        try {
          return new firebase_auth_web_user_credential.UserCredentialWeb.new(this.auth, yield this[_webUser$].reauthenticateWithCredential(utils.convertPlatformCredential(credential)));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    reload() {
      return async.async(dart.void, (function* reload() {
        try {
          yield this[_webUser$].reload();
          this.auth.sendAuthChangesEvent(this.auth.app.name, this.auth.currentUser);
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    sendEmailVerification(actionCodeSettings) {
      try {
        return this[_webUser$].sendEmailVerification(utils.convertPlatformActionCodeSettings(actionCodeSettings));
      } catch (e$) {
        let e = dart.getThrown(e$);
        dart.throw(utils.throwFirebaseAuthException(e));
      }
    }
    unlink(providerId) {
      return async.async(UserPlatformL(), (function* unlink() {
        try {
          return new firebase_auth_web_user.UserWeb.new(this.auth, yield this[_webUser$].unlink(providerId));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    updateEmail(newEmail) {
      return async.async(dart.void, (function* updateEmail() {
        try {
          yield this[_webUser$].updateEmail(newEmail);
          yield this[_webUser$].reload();
          this.auth.sendAuthChangesEvent(this.auth.app.name, this.auth.currentUser);
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    updatePassword(newPassword) {
      return async.async(dart.void, (function* updatePassword() {
        try {
          yield this[_webUser$].updatePassword(newPassword);
          yield this[_webUser$].reload();
          this.auth.sendAuthChangesEvent(this.auth.app.name, this.auth.currentUser);
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    updatePhoneNumber(phoneCredential) {
      return async.async(dart.void, (function* updatePhoneNumber() {
        try {
          yield this[_webUser$].updatePhoneNumber(utils.convertPlatformCredential(phoneCredential));
          yield this[_webUser$].reload();
          this.auth.sendAuthChangesEvent(this.auth.app.name, this.auth.currentUser);
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    updateProfile(profile) {
      return async.async(dart.void, (function* updateProfile() {
        try {
          yield this[_webUser$].updateProfile({displayName: profile[$_get]("displayName"), photoURL: profile[$_get]("photoURL")});
          yield this[_webUser$].reload();
          this.auth.sendAuthChangesEvent(this.auth.app.name, this.auth.currentUser);
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
  };
  (firebase_auth_web_user.UserWeb.new = function(auth, _webUser) {
    this[_webUser$] = _webUser;
    firebase_auth_web_user.UserWeb.__proto__.new.call(this, auth, new (IdentityMapOfStringL$dynamic()).from(["displayName", _webUser.displayName, "email", _webUser.email, "emailVerified", _webUser.emailVerified, "isAnonymous", _webUser.isAnonymous, "metadata", new (IdentityMapOfStringL$intL()).from(["creationTime", firebase_auth_web_user._dateFormat.parse(_webUser.metadata.creationTime).millisecondsSinceEpoch, "lastSignInTime", firebase_auth_web_user._dateFormat.parse(_webUser.metadata.lastSignInTime).millisecondsSinceEpoch]), "phoneNumber", _webUser.phoneNumber, "photoURL", _webUser.photoURL, "providerData", _webUser.providerData[$map](MapLOfStringL$dynamic(), dart.fn(webUserInfo => new (IdentityMapOfStringL$dynamic()).from(["displayName", webUserInfo.displayName, "email", webUserInfo.email, "phoneNumber", webUserInfo.phoneNumber, "providerId", webUserInfo.providerId, "photoURL", webUserInfo.photoURL, "uid", webUserInfo.uid]), UserInfoLOfUserInfoJsImplLToMapLOfStringL$dynamic()))[$toList](), "refreshToken", _webUser.refreshToken, "tenantId", null, "uid", _webUser.uid]));
    ;
  }).prototype = firebase_auth_web_user.UserWeb.prototype;
  dart.addTypeTests(firebase_auth_web_user.UserWeb);
  dart.addTypeCaches(firebase_auth_web_user.UserWeb);
  dart.setLibraryUri(firebase_auth_web_user.UserWeb, L2);
  dart.setFieldSignature(firebase_auth_web_user.UserWeb, () => ({
    __proto__: dart.getFields(firebase_auth_web_user.UserWeb.__proto__),
    [_webUser$]: dart.finalFieldType(dart.legacy(auth.User))
  }));
  dart.defineLazy(firebase_auth_web_user, {
    /*firebase_auth_web_user._dateFormat*/get _dateFormat() {
      return new intl.DateFormat.new("EEE, d MMM yyyy HH:mm:ss", "en_US");
    }
  }, true);
  dart.trackLibraries("packages/firebase_auth_web/firebase_auth_web_confirmation_result.dart", {
    "package:firebase_auth_web/firebase_auth_web_confirmation_result.dart": firebase_auth_web_confirmation_result,
    "package:firebase_auth_web/firebase_auth_web_user_credential.dart": firebase_auth_web_user_credential,
    "package:firebase_auth_web/firebase_auth_web_user.dart": firebase_auth_web_user
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["firebase_auth_web_confirmation_result.dart","firebase_auth_web_user_credential.dart","firebase_auth_web_user.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/firebase_auth_web/firebase_auth_web_confirmation_result.dart.lib.js"}');
  // Exports:
  return {
    firebase_auth_web_confirmation_result: firebase_auth_web_confirmation_result,
    firebase_auth_web_user_credential: firebase_auth_web_user_credential,
    firebase_auth_web_user: firebase_auth_web_user
  };
}));

//# sourceMappingURL=firebase_auth_web_confirmation_result.dart.lib.js.map
