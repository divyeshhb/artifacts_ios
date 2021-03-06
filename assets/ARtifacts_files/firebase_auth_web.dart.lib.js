define(['dart_sdk', 'packages/firebase/src/top_level.dart', 'packages/firebase_auth_platform_interface/src/providers/twitter_auth.dart', 'packages/firebase_auth_web/firebase_auth_web_confirmation_result.dart', 'packages/firebase/src/storage.dart', 'packages/firebase_auth_web/firebase_auth_web_recaptcha_verifier_factory.dart', 'packages/firebase_auth_web/utils.dart', 'packages/firebase_auth_platform_interface/src/action_code_info.dart', 'packages/firebase_auth_platform_interface/src/action_code_settings.dart'], (function load__packages__firebase_auth_web__firebase_auth_web_dart(dart_sdk, packages__firebase__src__top_level$46dart, packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart, packages__firebase_auth_web__firebase_auth_web_confirmation_result$46dart, packages__firebase__src__storage$46dart, packages__firebase_auth_web__firebase_auth_web_recaptcha_verifier_factory$46dart, packages__firebase_auth_web__utils$46dart, packages__firebase_auth_platform_interface__src__action_code_info$46dart, packages__firebase_auth_platform_interface__src__action_code_settings$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const top_level = packages__firebase__src__top_level$46dart.src__top_level;
  const platform_interface_user = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__platform_interface__platform_interface_user;
  const platform_interface_firebase_auth = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__platform_interface__platform_interface_firebase_auth;
  const platform_interface_recaptcha_verifier_factory = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__platform_interface__platform_interface_recaptcha_verifier_factory;
  const platform_interface_user_credential = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__platform_interface__platform_interface_user_credential;
  const platform_interface_confirmation_result = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__platform_interface__platform_interface_confirmation_result;
  const firebase_auth_web_user = packages__firebase_auth_web__firebase_auth_web_confirmation_result$46dart.firebase_auth_web_user;
  const firebase_auth_web_user_credential = packages__firebase_auth_web__firebase_auth_web_confirmation_result$46dart.firebase_auth_web_user_credential;
  const firebase_auth_web_confirmation_result = packages__firebase_auth_web__firebase_auth_web_confirmation_result$46dart.firebase_auth_web_confirmation_result;
  const auth = packages__firebase__src__storage$46dart.src__auth;
  const firebase_auth_web_recaptcha_verifier_factory = packages__firebase_auth_web__firebase_auth_web_recaptcha_verifier_factory$46dart.firebase_auth_web_recaptcha_verifier_factory;
  const utils = packages__firebase_auth_web__utils$46dart.utils;
  const action_code_info = packages__firebase_auth_platform_interface__src__action_code_info$46dart.src__action_code_info;
  const action_code_settings = packages__firebase_auth_platform_interface__src__action_code_settings$46dart.src__action_code_settings;
  var firebase_auth_web = Object.create(dart.library);
  var $_set = dartx._set;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var UserPlatformL = () => (UserPlatformL = dart.constFn(dart.legacy(platform_interface_user.UserPlatform)))();
  var StreamControllerOfUserPlatformL = () => (StreamControllerOfUserPlatformL = dart.constFn(async.StreamController$(UserPlatformL())))();
  var UserWebL = () => (UserWebL = dart.constFn(dart.legacy(firebase_auth_web_user.UserWeb)))();
  var UserL = () => (UserL = dart.constFn(dart.legacy(auth.User)))();
  var UserLToUserWebL = () => (UserLToUserWebL = dart.constFn(dart.fnType(UserWebL(), [UserL()])))();
  var UserWebLToNull = () => (UserWebLToNull = dart.constFn(dart.fnType(core.Null, [UserWebL()])))();
  var ActionCodeInfoL = () => (ActionCodeInfoL = dart.constFn(dart.legacy(action_code_info.ActionCodeInfo)))();
  var UserCredentialPlatformL = () => (UserCredentialPlatformL = dart.constFn(dart.legacy(platform_interface_user_credential.UserCredentialPlatform)))();
  var RecaptchaVerifierL = () => (RecaptchaVerifierL = dart.constFn(dart.legacy(auth.RecaptchaVerifier)))();
  var ConfirmationResultPlatformL = () => (ConfirmationResultPlatformL = dart.constFn(dart.legacy(platform_interface_confirmation_result.ConfirmationResultPlatform)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var StreamControllerLOfUserPlatformL = () => (StreamControllerLOfUserPlatformL = dart.constFn(dart.legacy(StreamControllerOfUserPlatformL())))();
  var IdentityMapOfStringL$StreamControllerLOfUserPlatformL = () => (IdentityMapOfStringL$StreamControllerLOfUserPlatformL = dart.constFn(_js_helper.IdentityMap$(StringL(), StreamControllerLOfUserPlatformL())))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth_web-0.3.1+2/lib/firebase_auth_web.dart";
  var L1 = "package:firebase_auth_web/firebase_auth_web.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 30000000
      });
    }
  }, false);
  var _webAuth = dart.privateName(firebase_auth_web, "_webAuth");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  firebase_auth_web.FirebaseAuthWeb = class FirebaseAuthWeb extends platform_interface_firebase_auth.FirebaseAuthPlatform {
    static registerWith(registrar) {
      platform_interface_firebase_auth.FirebaseAuthPlatform.instance = firebase_auth_web.FirebaseAuthWeb.instance;
      platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform.instance = firebase_auth_web_recaptcha_verifier_factory.RecaptchaVerifierFactoryWeb.instance;
    }
    static get instance() {
      return new firebase_auth_web.FirebaseAuthWeb.__();
    }
    delegateFor(opts) {
      let app = opts && 'app' in opts ? opts.app : null;
      return new firebase_auth_web.FirebaseAuthWeb.new({app: app});
    }
    setInitialValues(opts) {
      let currentUser = opts && 'currentUser' in opts ? opts.currentUser : null;
      let languageCode = opts && 'languageCode' in opts ? opts.languageCode : null;
      return this;
    }
    get currentUser() {
      let webCurrentUser = this[_webAuth].currentUser;
      if (webCurrentUser == null) {
        return null;
      }
      return new firebase_auth_web_user.UserWeb.new(this, this[_webAuth].currentUser);
    }
    set currentUser(value) {
      super.currentUser = value;
    }
    sendAuthChangesEvent(appName, userPlatform) {
      if (!(appName != null)) dart.assertFailed(null, L0, 116, 12, "appName != null");
      if (!(firebase_auth_web.FirebaseAuthWeb._userChangesListeners[$_get](appName) != null)) dart.assertFailed(null, L0, 117, 12, "_userChangesListeners[appName] != null");
      firebase_auth_web.FirebaseAuthWeb._userChangesListeners[$_get](appName).add(userPlatform);
    }
    applyActionCode(code) {
      try {
        return this[_webAuth].applyActionCode(code);
      } catch (e$) {
        let e = dart.getThrown(e$);
        dart.throw(utils.throwFirebaseAuthException(e));
      }
    }
    checkActionCode(code) {
      return async.async(ActionCodeInfoL(), (function* checkActionCode() {
        try {
          return utils.convertWebActionCodeInfo(yield this[_webAuth].checkActionCode(code));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    confirmPasswordReset(code, newPassword) {
      return async.async(dart.void, (function* confirmPasswordReset() {
        try {
          yield this[_webAuth].confirmPasswordReset(code, newPassword);
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    createUserWithEmailAndPassword(email, password) {
      return async.async(UserCredentialPlatformL(), (function* createUserWithEmailAndPassword() {
        try {
          return new firebase_auth_web_user_credential.UserCredentialWeb.new(this, yield this[_webAuth].createUserWithEmailAndPassword(email, password));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    fetchSignInMethodsForEmail(email) {
      try {
        return this[_webAuth].fetchSignInMethodsForEmail(email);
      } catch (e$) {
        let e = dart.getThrown(e$);
        dart.throw(utils.throwFirebaseAuthException(e));
      }
    }
    getRedirectResult() {
      return async.async(UserCredentialPlatformL(), (function* getRedirectResult() {
        try {
          return new firebase_auth_web_user_credential.UserCredentialWeb.new(this, yield this[_webAuth].getRedirectResult());
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    authStateChanges() {
      return firebase_auth_web.FirebaseAuthWeb._authStateChangesListeners[$_get](this.app.name).stream;
    }
    idTokenChanges() {
      return firebase_auth_web.FirebaseAuthWeb._idTokenChangesListeners[$_get](this.app.name).stream;
    }
    userChanges() {
      return firebase_auth_web.FirebaseAuthWeb._userChangesListeners[$_get](this.app.name).stream;
    }
    sendPasswordResetEmail(email, actionCodeSettings = null) {
      try {
        return this[_webAuth].sendPasswordResetEmail(email, utils.convertPlatformActionCodeSettings(actionCodeSettings));
      } catch (e$) {
        let e = dart.getThrown(e$);
        dart.throw(utils.throwFirebaseAuthException(e));
      }
    }
    sendSignInLinkToEmail(email, actionCodeSettings = null) {
      try {
        return this[_webAuth].sendSignInLinkToEmail(email, utils.convertPlatformActionCodeSettings(actionCodeSettings));
      } catch (e$) {
        let e = dart.getThrown(e$);
        dart.throw(utils.throwFirebaseAuthException(e));
      }
    }
    setLanguageCode(languageCode) {
      return async.async(dart.void, (function* setLanguageCode() {
        this[_webAuth].languageCode = languageCode;
      }).bind(this));
    }
    setPersistence(persistence) {
      return async.async(dart.void, (function* setPersistence() {
        try {
          return this[_webAuth].setPersistence(utils.convertPlatformPersistence(persistence));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    signInAnonymously() {
      return async.async(UserCredentialPlatformL(), (function* signInAnonymously() {
        try {
          return new firebase_auth_web_user_credential.UserCredentialWeb.new(this, yield this[_webAuth].signInAnonymously());
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    signInWithCredential(credential) {
      return async.async(UserCredentialPlatformL(), (function* signInWithCredential() {
        try {
          return new firebase_auth_web_user_credential.UserCredentialWeb.new(this, yield this[_webAuth].signInWithCredential(utils.convertPlatformCredential(credential)));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    signInWithCustomToken(token) {
      return async.async(UserCredentialPlatformL(), (function* signInWithCustomToken() {
        try {
          return new firebase_auth_web_user_credential.UserCredentialWeb.new(this, yield this[_webAuth].signInWithCustomToken(token));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    signInWithEmailAndPassword(email, password) {
      return async.async(UserCredentialPlatformL(), (function* signInWithEmailAndPassword() {
        try {
          return new firebase_auth_web_user_credential.UserCredentialWeb.new(this, yield this[_webAuth].signInWithEmailAndPassword(email, password));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    signInWithEmailLink(email, emailLink) {
      return async.async(UserCredentialPlatformL(), (function* signInWithEmailLink() {
        try {
          return new firebase_auth_web_user_credential.UserCredentialWeb.new(this, yield this[_webAuth].signInWithEmailLink(email, emailLink));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    signInWithPhoneNumber(phoneNumber, applicationVerifier) {
      return async.async(ConfirmationResultPlatformL(), (function* signInWithPhoneNumber() {
        try {
          let verifier = RecaptchaVerifierL().as(applicationVerifier.delegate);
          return new firebase_auth_web_confirmation_result.ConfirmationResultWeb.new(this, yield this[_webAuth].signInWithPhoneNumber(phoneNumber, verifier));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    signInWithPopup(provider) {
      return async.async(UserCredentialPlatformL(), (function* signInWithPopup() {
        try {
          return new firebase_auth_web_user_credential.UserCredentialWeb.new(this, yield this[_webAuth].signInWithPopup(utils.convertPlatformAuthProvider(provider)));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    signInWithRedirect(provider) {
      return async.async(dart.void, (function* signInWithRedirect() {
        try {
          return this[_webAuth].signInWithRedirect(utils.convertPlatformAuthProvider(provider));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
    signOut() {
      try {
        return this[_webAuth].signOut();
      } catch (e$) {
        let e = dart.getThrown(e$);
        dart.throw(utils.throwFirebaseAuthException(e));
      }
    }
    verifyPasswordResetCode(code) {
      try {
        return this[_webAuth].verifyPasswordResetCode(code);
      } catch (e$) {
        let e = dart.getThrown(e$);
        dart.throw(utils.throwFirebaseAuthException(e));
      }
    }
    verifyPhoneNumber(opts) {
      let phoneNumber = opts && 'phoneNumber' in opts ? opts.phoneNumber : null;
      let verificationCompleted = opts && 'verificationCompleted' in opts ? opts.verificationCompleted : null;
      let verificationFailed = opts && 'verificationFailed' in opts ? opts.verificationFailed : null;
      let codeSent = opts && 'codeSent' in opts ? opts.codeSent : null;
      let codeAutoRetrievalTimeout = opts && 'codeAutoRetrievalTimeout' in opts ? opts.codeAutoRetrievalTimeout : null;
      let autoRetrievedSmsCodeForTesting = opts && 'autoRetrievedSmsCodeForTesting' in opts ? opts.autoRetrievedSmsCodeForTesting : null;
      let timeout = opts && 'timeout' in opts ? opts.timeout : C0 || CT.C0;
      let forceResendingToken = opts && 'forceResendingToken' in opts ? opts.forceResendingToken : null;
      dart.throw(new core.UnimplementedError.new("verifyPhoneNumber() is not supported on the web. Please use `signInWithPhoneNumber` instead."));
    }
  };
  (firebase_auth_web.FirebaseAuthWeb.__ = function() {
    this[_webAuth] = null;
    firebase_auth_web.FirebaseAuthWeb.__proto__.new.call(this, {appInstance: null});
    ;
  }).prototype = firebase_auth_web.FirebaseAuthWeb.prototype;
  (firebase_auth_web.FirebaseAuthWeb.new = function(opts) {
    let t0;
    let app = opts && 'app' in opts ? opts.app : null;
    this[_webAuth] = top_level.auth(top_level.app((t0 = app, t0 == null ? null : t0.name)));
    firebase_auth_web.FirebaseAuthWeb.__proto__.new.call(this, {appInstance: app});
    if (app != null) {
      firebase_auth_web.FirebaseAuthWeb._userChangesListeners[$_set](app.name, StreamControllerOfUserPlatformL().broadcast());
      firebase_auth_web.FirebaseAuthWeb._authStateChangesListeners[$_set](app.name, StreamControllerOfUserPlatformL().broadcast());
      firebase_auth_web.FirebaseAuthWeb._idTokenChangesListeners[$_set](app.name, StreamControllerOfUserPlatformL().broadcast());
      this[_webAuth].onAuthStateChanged.map(UserWebL(), dart.fn(webUser => {
        if (webUser == null) {
          return null;
        } else {
          return new firebase_auth_web_user.UserWeb.new(this, webUser);
        }
      }, UserLToUserWebL())).listen(dart.fn(webUser => {
        firebase_auth_web.FirebaseAuthWeb._authStateChangesListeners[$_get](app.name).add(webUser);
      }, UserWebLToNull()));
      this[_webAuth].onIdTokenChanged.map(UserWebL(), dart.fn(webUser => {
        if (webUser == null) {
          return null;
        } else {
          return new firebase_auth_web_user.UserWeb.new(this, webUser);
        }
      }, UserLToUserWebL())).listen(dart.fn(webUser => {
        firebase_auth_web.FirebaseAuthWeb._idTokenChangesListeners[$_get](app.name).add(webUser);
        firebase_auth_web.FirebaseAuthWeb._userChangesListeners[$_get](app.name).add(webUser);
      }, UserWebLToNull()));
    }
  }).prototype = firebase_auth_web.FirebaseAuthWeb.prototype;
  dart.addTypeTests(firebase_auth_web.FirebaseAuthWeb);
  dart.addTypeCaches(firebase_auth_web.FirebaseAuthWeb);
  dart.setMethodSignature(firebase_auth_web.FirebaseAuthWeb, () => ({
    __proto__: dart.getMethods(firebase_auth_web.FirebaseAuthWeb.__proto__),
    setInitialValues: dart.fnType(dart.legacy(firebase_auth_web.FirebaseAuthWeb), [], {currentUser: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), languageCode: dart.legacy(core.String)}, {}),
    sendSignInLinkToEmail: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String)], [dart.legacy(action_code_settings.ActionCodeSettings)])
  }));
  dart.setLibraryUri(firebase_auth_web.FirebaseAuthWeb, L1);
  dart.setFieldSignature(firebase_auth_web.FirebaseAuthWeb, () => ({
    __proto__: dart.getFields(firebase_auth_web.FirebaseAuthWeb.__proto__),
    [_webAuth]: dart.finalFieldType(dart.legacy(auth.Auth))
  }));
  dart.defineLazy(firebase_auth_web.FirebaseAuthWeb, {
    /*firebase_auth_web.FirebaseAuthWeb._authStateChangesListeners*/get _authStateChangesListeners() {
      return new (IdentityMapOfStringL$StreamControllerLOfUserPlatformL()).new();
    },
    set _authStateChangesListeners(_) {},
    /*firebase_auth_web.FirebaseAuthWeb._idTokenChangesListeners*/get _idTokenChangesListeners() {
      return new (IdentityMapOfStringL$StreamControllerLOfUserPlatformL()).new();
    },
    set _idTokenChangesListeners(_) {},
    /*firebase_auth_web.FirebaseAuthWeb._userChangesListeners*/get _userChangesListeners() {
      return new (IdentityMapOfStringL$StreamControllerLOfUserPlatformL()).new();
    },
    set _userChangesListeners(_) {}
  }, true);
  dart.trackLibraries("packages/firebase_auth_web/firebase_auth_web.dart", {
    "package:firebase_auth_web/firebase_auth_web.dart": firebase_auth_web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["firebase_auth_web.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/firebase_auth_web/firebase_auth_web.dart.lib.js"}');
  // Exports:
  return {
    firebase_auth_web: firebase_auth_web
  };
}));

//# sourceMappingURL=firebase_auth_web.dart.lib.js.map
