define(['dart_sdk', 'packages/firebase_auth_platform_interface/src/providers/twitter_auth.dart', 'packages/firebase_core/firebase_core.dart', 'packages/firebase_core_platform_interface/firebase_core_platform_interface.dart', 'packages/firebase_auth_platform_interface/src/action_code_info.dart', 'packages/firebase_auth_platform_interface/src/action_code_settings.dart', 'packages/firebase_auth_platform_interface/src/auth_credential.dart', 'packages/firebase_auth_platform_interface/src/auth_provider.dart', 'packages/firebase_auth_platform_interface/src/firebase_auth_exception.dart', 'packages/firebase_auth_platform_interface/src/additional_user_info.dart', 'packages/firebase_auth_platform_interface/src/user_metadata.dart', 'packages/firebase_auth_platform_interface/src/user_info.dart', 'packages/firebase_auth_platform_interface/src/id_token_result.dart'], (function load__packages__firebase_auth__firebase_auth_dart(dart_sdk, packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart, packages__firebase_core__firebase_core$46dart, packages__firebase_core_platform_interface__firebase_core_platform_interface$46dart, packages__firebase_auth_platform_interface__src__action_code_info$46dart, packages__firebase_auth_platform_interface__src__action_code_settings$46dart, packages__firebase_auth_platform_interface__src__auth_credential$46dart, packages__firebase_auth_platform_interface__src__auth_provider$46dart, packages__firebase_auth_platform_interface__src__firebase_auth_exception$46dart, packages__firebase_auth_platform_interface__src__additional_user_info$46dart, packages__firebase_auth_platform_interface__src__user_metadata$46dart, packages__firebase_auth_platform_interface__src__user_info$46dart, packages__firebase_auth_platform_interface__src__id_token_result$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform_interface_firebase_auth = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__platform_interface__platform_interface_firebase_auth;
  const platform_interface_user = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__platform_interface__platform_interface_user;
  const types = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__types;
  const phone_auth = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__providers__phone_auth;
  const platform_interface_user_credential = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__platform_interface__platform_interface_user_credential;
  const platform_interface_confirmation_result = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__platform_interface__platform_interface_confirmation_result;
  const platform_interface_recaptcha_verifier_factory = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__platform_interface__platform_interface_recaptcha_verifier_factory;
  const firebase_core = packages__firebase_core__firebase_core$46dart.firebase_core;
  const firebase_core_platform_interface = packages__firebase_core_platform_interface__firebase_core_platform_interface$46dart.firebase_core_platform_interface;
  const action_code_info = packages__firebase_auth_platform_interface__src__action_code_info$46dart.src__action_code_info;
  const action_code_settings = packages__firebase_auth_platform_interface__src__action_code_settings$46dart.src__action_code_settings;
  const auth_credential = packages__firebase_auth_platform_interface__src__auth_credential$46dart.src__auth_credential;
  const auth_provider = packages__firebase_auth_platform_interface__src__auth_provider$46dart.src__auth_provider;
  const firebase_auth_exception = packages__firebase_auth_platform_interface__src__firebase_auth_exception$46dart.src__firebase_auth_exception;
  const additional_user_info = packages__firebase_auth_platform_interface__src__additional_user_info$46dart.src__additional_user_info;
  const user_metadata = packages__firebase_auth_platform_interface__src__user_metadata$46dart.src__user_metadata;
  const user_info = packages__firebase_auth_platform_interface__src__user_info$46dart.src__user_info;
  const id_token_result = packages__firebase_auth_platform_interface__src__id_token_result$46dart.src__id_token_result;
  var firebase_auth = Object.create(dart.library);
  var $containsKey = dartx.containsKey;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $isNotEmpty = dartx.isNotEmpty;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  var UserCredentialL = () => (UserCredentialL = dart.constFn(dart.legacy(firebase_auth.UserCredential)))();
  var UserL = () => (UserL = dart.constFn(dart.legacy(firebase_auth.User)))();
  var UserPlatformL = () => (UserPlatformL = dart.constFn(dart.legacy(platform_interface_user.UserPlatform)))();
  var UserPlatformLToUserL = () => (UserPlatformLToUserL = dart.constFn(dart.fnType(UserL(), [UserPlatformL()])))();
  var StreamControllerOfUserL = () => (StreamControllerOfUserL = dart.constFn(async.StreamController$(UserL())))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var ConfirmationResultL = () => (ConfirmationResultL = dart.constFn(dart.legacy(firebase_auth.ConfirmationResult)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var FirebaseAuthL = () => (FirebaseAuthL = dart.constFn(dart.legacy(firebase_auth.FirebaseAuth)))();
  var IdentityMapOfStringL$FirebaseAuthL = () => (IdentityMapOfStringL$FirebaseAuthL = dart.constFn(_js_helper.IdentityMap$(StringL(), FirebaseAuthL())))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  const CT = Object.create(null);
  var L2 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth-0.18.2/lib/src/user.dart";
  var L3 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth-0.18.2/lib/src/confirmation_result.dart";
  var L4 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth-0.18.2/lib/src/recaptcha_verifier.dart";
  var L1 = "package:firebase_auth/firebase_auth.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth-0.18.2/lib/src/firebase_auth.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 30000000
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize.prototype,
        [_name]: "RecaptchaVerifierSize.normal",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme.prototype,
        [_name]: "RecaptchaVerifierTheme.light",
        index: 0
      });
    }
  }, false);
  var _delegatePackingProperty = dart.privateName(firebase_auth, "_delegatePackingProperty");
  var _delegate$ = dart.privateName(firebase_auth, "_delegate");
  var _pipeStreamChanges = dart.privateName(firebase_auth, "_pipeStreamChanges");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  var app$ = dart.privateName(firebase_auth, "FirebaseAuth.app");
  firebase_auth.FirebaseAuth = class FirebaseAuth extends firebase_core_platform_interface.FirebasePluginPlatform {
    get app() {
      return this[app$];
    }
    set app(value) {
      this[app$] = value;
    }
    get [_delegate$]() {
      if (this[_delegatePackingProperty] == null) {
        this[_delegatePackingProperty] = platform_interface_firebase_auth.FirebaseAuthPlatform.instanceFor({app: this.app, pluginConstants: this.pluginConstants});
      }
      return this[_delegatePackingProperty];
    }
    static get instance() {
      let defaultAppInstance = firebase_core.Firebase.app();
      if (!dart.test(firebase_auth.FirebaseAuth._firebaseAuthInstances[$containsKey](defaultAppInstance.name))) {
        firebase_auth.FirebaseAuth._firebaseAuthInstances[$_set](defaultAppInstance.name, new firebase_auth.FirebaseAuth.__({app: firebase_core.Firebase.app()}));
      }
      return firebase_auth.FirebaseAuth._firebaseAuthInstances[$_get](defaultAppInstance.name);
    }
    static instanceFor(opts) {
      let app = opts && 'app' in opts ? opts.app : null;
      if (!(app != null)) dart.assertFailed(null, L0, 50, 12, "app != null");
      if (!dart.test(firebase_auth.FirebaseAuth._firebaseAuthInstances[$containsKey](app.name))) {
        firebase_auth.FirebaseAuth._firebaseAuthInstances[$_set](app.name, new firebase_auth.FirebaseAuth.__({app: app}));
      }
      return firebase_auth.FirebaseAuth._firebaseAuthInstances[$_get](app.name);
    }
    static fromApp(app) {
      return firebase_auth.FirebaseAuth.instanceFor({app: app});
    }
    get onAuthStateChanged() {
      return this.authStateChanges();
    }
    get currentUser() {
      if (this[_delegate$].currentUser != null) {
        return new firebase_auth.User.__(this, this[_delegate$].currentUser);
      }
      return null;
    }
    get languageCode() {
      if (this[_delegate$].languageCode != null) {
        return this[_delegate$].languageCode;
      }
      return null;
    }
    applyActionCode(code) {
      return async.async(dart.void, (function* applyActionCode() {
        if (!(code != null)) dart.assertFailed(null, L0, 115, 12, "code != null");
        yield this[_delegate$].applyActionCode(code);
      }).bind(this));
    }
    checkActionCode(code) {
      if (!(code != null)) dart.assertFailed(null, L0, 138, 12, "code != null");
      return this[_delegate$].checkActionCode(code);
    }
    confirmPasswordReset(opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let newPassword = opts && 'newPassword' in opts ? opts.newPassword : null;
      return async.async(dart.void, (function* confirmPasswordReset() {
        if (!(code != null)) dart.assertFailed(null, L0, 161, 12, "code != null");
        if (!(newPassword != null)) dart.assertFailed(null, L0, 162, 12, "newPassword != null");
        yield this[_delegate$].confirmPasswordReset(code, newPassword);
      }).bind(this));
    }
    createUserWithEmailAndPassword(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let password = opts && 'password' in opts ? opts.password : null;
      return async.async(UserCredentialL(), (function* createUserWithEmailAndPassword() {
        if (!(email != null)) dart.assertFailed(null, L0, 183, 12, "email != null");
        if (!(password != null)) dart.assertFailed(null, L0, 184, 12, "password != null");
        return new firebase_auth.UserCredential.__(this, yield this[_delegate$].createUserWithEmailAndPassword(email, password));
      }).bind(this));
    }
    fetchSignInMethodsForEmail(email) {
      if (!(email != null)) dart.assertFailed(null, L0, 201, 12, "email != null");
      return this[_delegate$].fetchSignInMethodsForEmail(email);
    }
    getRedirectResult() {
      return async.async(UserCredentialL(), (function* getRedirectResult() {
        return new firebase_auth.UserCredential.__(this, yield this[_delegate$].getRedirectResult());
      }).bind(this));
    }
    isSignInWithEmailLink(emailLink) {
      if (!(emailLink != null)) dart.assertFailed(null, L0, 218, 12, "emailLink != null");
      return this[_delegate$].isSignInWithEmailLink(emailLink);
    }
    [_pipeStreamChanges](stream) {
      let streamSync = stream.map(UserL(), dart.fn(delegateUser => {
        if (delegateUser == null) {
          return null;
        }
        return new firebase_auth.User.__(this, delegateUser);
      }, UserPlatformLToUserL()));
      let streamController = null;
      streamController = StreamControllerOfUserL().broadcast({onListen: dart.fn(() => {
          streamController.add(this.currentUser);
          streamSync.pipe(streamController);
        }, VoidToNull())});
      return streamController.stream;
    }
    authStateChanges() {
      return this[_pipeStreamChanges](this[_delegate$].authStateChanges());
    }
    idTokenChanges() {
      return this[_pipeStreamChanges](this[_delegate$].idTokenChanges());
    }
    userChanges() {
      return this[_pipeStreamChanges](this[_delegate$].userChanges());
    }
    sendPasswordResetEmail(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let actionCodeSettings = opts && 'actionCodeSettings' in opts ? opts.actionCodeSettings : null;
      if (!(email != null)) dart.assertFailed(null, L0, 271, 12, "email != null");
      return this[_delegate$].sendPasswordResetEmail(email, actionCodeSettings);
    }
    sendSignInLinkToEmail(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let actionCodeSettings = opts && 'actionCodeSettings' in opts ? opts.actionCodeSettings : null;
      return async.async(dart.void, (function* sendSignInLinkToEmail() {
        if (!(email != null)) dart.assertFailed(null, L0, 293, 12, "email != null");
        if (!(actionCodeSettings != null)) dart.assertFailed(null, L0, 294, 12, "actionCodeSettings != null");
        if (!dart.equals(actionCodeSettings.handleCodeInApp, true)) {
          dart.throw(new core.ArgumentError.new("The [handleCodeInApp] value of [ActionCodeSettings] must be `true`."));
        }
        yield this[_delegate$].sendSignInLinkToEmail(email, actionCodeSettings);
      }).bind(this));
    }
    setLanguageCode(languageCode) {
      return this[_delegate$].setLanguageCode(languageCode);
    }
    setSettings(opts) {
      let appVerificationDisabledForTesting = opts && 'appVerificationDisabledForTesting' in opts ? opts.appVerificationDisabledForTesting : null;
      let userAccessGroup = opts && 'userAccessGroup' in opts ? opts.userAccessGroup : null;
      return this[_delegate$].setSettings({appVerificationDisabledForTesting: appVerificationDisabledForTesting, userAccessGroup: userAccessGroup});
    }
    setPersistence(persistence) {
      return async.async(dart.void, (function* setPersistence() {
        if (!(persistence != null)) dart.assertFailed(null, L0, 368, 12, "persistence != null");
        return this[_delegate$].setPersistence(persistence);
      }).bind(this));
    }
    signInAnonymously() {
      return async.async(UserCredentialL(), (function* signInAnonymously() {
        return new firebase_auth.UserCredential.__(this, yield this[_delegate$].signInAnonymously());
      }).bind(this));
    }
    signInWithCredential(credential) {
      return async.async(UserCredentialL(), (function* signInWithCredential() {
        if (!(credential != null)) dart.assertFailed(null, L0, 434, 12, "credential != null");
        return new firebase_auth.UserCredential.__(this, yield this[_delegate$].signInWithCredential(credential));
      }).bind(this));
    }
    signInWithCustomToken(token) {
      return async.async(UserCredentialL(), (function* signInWithCustomToken() {
        if (!(token != null)) dart.assertFailed(null, L0, 460, 12, "token != null");
        return new firebase_auth.UserCredential.__(this, yield this[_delegate$].signInWithCustomToken(token));
      }).bind(this));
    }
    signInWithEmailAndPassword(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let password = opts && 'password' in opts ? opts.password : null;
      return async.async(UserCredentialL(), (function* signInWithEmailAndPassword() {
        if (!(email != null)) dart.assertFailed(null, L0, 487, 12, "email != null");
        if (!(password != null)) dart.assertFailed(null, L0, 488, 12, "password != null");
        return new firebase_auth.UserCredential.__(this, yield this[_delegate$].signInWithEmailAndPassword(email, password));
      }).bind(this));
    }
    signInWithEmailLink(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let emailLink = opts && 'emailLink' in opts ? opts.emailLink : null;
      return async.async(UserCredentialL(), (function* signInWithEmailLink() {
        if (!(email != null)) dart.assertFailed(null, L0, 511, 12, "email != null");
        if (!(emailLink != null)) dart.assertFailed(null, L0, 512, 12, "emailLink != null");
        return new firebase_auth.UserCredential.__(this, yield this[_delegate$].signInWithEmailLink(email, emailLink));
      }).bind(this));
    }
    signInWithPhoneNumber(phoneNumber, verifier = null) {
      return async.async(ConfirmationResultL(), (function* signInWithPhoneNumber() {
        if (!(phoneNumber != null)) dart.assertFailed(null, L0, 529, 12, "phoneNumber != null");
        if (!phoneNumber[$isNotEmpty]) dart.assertFailed(null, L0, 530, 12, "phoneNumber.isNotEmpty");
        verifier == null ? verifier = firebase_auth.RecaptchaVerifier.new() : null;
        return new firebase_auth.ConfirmationResult.__(this, yield this[_delegate$].signInWithPhoneNumber(phoneNumber, verifier.delegate));
      }).bind(this));
    }
    signInWithPopup(provider) {
      return async.async(UserCredentialL(), (function* signInWithPopup() {
        return new firebase_auth.UserCredential.__(this, yield this[_delegate$].signInWithPopup(provider));
      }).bind(this));
    }
    signInWithRedirect(provider) {
      return this[_delegate$].signInWithRedirect(provider);
    }
    signOut() {
      return async.async(dart.void, (function* signOut() {
        yield this[_delegate$].signOut();
      }).bind(this));
    }
    verifyPasswordResetCode(code) {
      if (!(code != null)) dart.assertFailed(null, L0, 582, 12, "code != null");
      return this[_delegate$].verifyPasswordResetCode(code);
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
      if (!(phoneNumber != null)) dart.assertFailed(null, L0, 637, 12, "phoneNumber != null");
      if (!(timeout != null)) dart.assertFailed(null, L0, 638, 12, "timeout != null");
      if (!(verificationCompleted != null)) dart.assertFailed(null, L0, 639, 12, "verificationCompleted != null");
      if (!(verificationFailed != null)) dart.assertFailed(null, L0, 640, 12, "verificationFailed != null");
      if (!(codeSent != null)) dart.assertFailed(null, L0, 641, 12, "codeSent != null");
      if (!(codeAutoRetrievalTimeout != null)) dart.assertFailed(null, L0, 642, 12, "codeAutoRetrievalTimeout != null");
      return this[_delegate$].verifyPhoneNumber({phoneNumber: phoneNumber, timeout: timeout, forceResendingToken: forceResendingToken, verificationCompleted: verificationCompleted, verificationFailed: verificationFailed, codeSent: codeSent, codeAutoRetrievalTimeout: codeAutoRetrievalTimeout, autoRetrievedSmsCodeForTesting: autoRetrievedSmsCodeForTesting});
    }
    toString() {
      return "FirebaseAuth(app: " + dart.str(this.app.name) + ")";
    }
  };
  (firebase_auth.FirebaseAuth.__ = function(opts) {
    let app = opts && 'app' in opts ? opts.app : null;
    this[_delegatePackingProperty] = null;
    this[app$] = app;
    firebase_auth.FirebaseAuth.__proto__.new.call(this, app.name, "plugins.flutter.io/firebase_auth");
    ;
  }).prototype = firebase_auth.FirebaseAuth.prototype;
  dart.addTypeTests(firebase_auth.FirebaseAuth);
  dart.addTypeCaches(firebase_auth.FirebaseAuth);
  dart.setMethodSignature(firebase_auth.FirebaseAuth, () => ({
    __proto__: dart.getMethods(firebase_auth.FirebaseAuth.__proto__),
    applyActionCode: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String)]),
    checkActionCode: dart.fnType(dart.legacy(async.Future$(dart.legacy(action_code_info.ActionCodeInfo))), [dart.legacy(core.String)]),
    confirmPasswordReset: dart.fnType(dart.legacy(async.Future$(dart.void)), [], {code: dart.legacy(core.String), newPassword: dart.legacy(core.String)}, {}),
    createUserWithEmailAndPassword: dart.fnType(dart.legacy(async.Future$(dart.legacy(firebase_auth.UserCredential))), [], {email: dart.legacy(core.String), password: dart.legacy(core.String)}, {}),
    fetchSignInMethodsForEmail: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.List$(dart.legacy(core.String))))), [dart.legacy(core.String)]),
    getRedirectResult: dart.fnType(dart.legacy(async.Future$(dart.legacy(firebase_auth.UserCredential))), []),
    isSignInWithEmailLink: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    [_pipeStreamChanges]: dart.fnType(dart.legacy(async.Stream$(dart.legacy(firebase_auth.User))), [dart.legacy(async.Stream$(dart.legacy(platform_interface_user.UserPlatform)))]),
    authStateChanges: dart.fnType(dart.legacy(async.Stream$(dart.legacy(firebase_auth.User))), []),
    idTokenChanges: dart.fnType(dart.legacy(async.Stream$(dart.legacy(firebase_auth.User))), []),
    userChanges: dart.fnType(dart.legacy(async.Stream$(dart.legacy(firebase_auth.User))), []),
    sendPasswordResetEmail: dart.fnType(dart.legacy(async.Future$(dart.void)), [], {actionCodeSettings: dart.legacy(action_code_settings.ActionCodeSettings), email: dart.legacy(core.String)}, {}),
    sendSignInLinkToEmail: dart.fnType(dart.legacy(async.Future$(dart.void)), [], {actionCodeSettings: dart.legacy(action_code_settings.ActionCodeSettings), email: dart.legacy(core.String)}, {}),
    setLanguageCode: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String)]),
    setSettings: dart.fnType(dart.legacy(async.Future$(dart.void)), [], {appVerificationDisabledForTesting: dart.legacy(core.bool), userAccessGroup: dart.legacy(core.String)}, {}),
    setPersistence: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(types.Persistence)]),
    signInAnonymously: dart.fnType(dart.legacy(async.Future$(dart.legacy(firebase_auth.UserCredential))), []),
    signInWithCredential: dart.fnType(dart.legacy(async.Future$(dart.legacy(firebase_auth.UserCredential))), [dart.legacy(auth_credential.AuthCredential)]),
    signInWithCustomToken: dart.fnType(dart.legacy(async.Future$(dart.legacy(firebase_auth.UserCredential))), [dart.legacy(core.String)]),
    signInWithEmailAndPassword: dart.fnType(dart.legacy(async.Future$(dart.legacy(firebase_auth.UserCredential))), [], {email: dart.legacy(core.String), password: dart.legacy(core.String)}, {}),
    signInWithEmailLink: dart.fnType(dart.legacy(async.Future$(dart.legacy(firebase_auth.UserCredential))), [], {email: dart.legacy(core.String), emailLink: dart.legacy(core.String)}, {}),
    signInWithPhoneNumber: dart.fnType(dart.legacy(async.Future$(dart.legacy(firebase_auth.ConfirmationResult))), [dart.legacy(core.String)], [dart.legacy(firebase_auth.RecaptchaVerifier)]),
    signInWithPopup: dart.fnType(dart.legacy(async.Future$(dart.legacy(firebase_auth.UserCredential))), [dart.legacy(auth_provider.AuthProvider)]),
    signInWithRedirect: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(auth_provider.AuthProvider)]),
    signOut: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    verifyPasswordResetCode: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), [dart.legacy(core.String)]),
    verifyPhoneNumber: dart.fnType(dart.legacy(async.Future$(dart.void)), [], {autoRetrievedSmsCodeForTesting: dart.legacy(core.String), codeAutoRetrievalTimeout: dart.legacy(dart.fnType(dart.void, [dart.legacy(core.String)])), codeSent: dart.legacy(dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.int)])), forceResendingToken: dart.legacy(core.int), phoneNumber: dart.legacy(core.String), timeout: dart.legacy(core.Duration), verificationCompleted: dart.legacy(dart.fnType(dart.void, [dart.legacy(phone_auth.PhoneAuthCredential)])), verificationFailed: dart.legacy(dart.fnType(dart.void, [dart.legacy(firebase_auth_exception.FirebaseAuthException)]))}, {}),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(firebase_auth.FirebaseAuth, () => ({
    __proto__: dart.getGetters(firebase_auth.FirebaseAuth.__proto__),
    [_delegate$]: dart.legacy(platform_interface_firebase_auth.FirebaseAuthPlatform),
    onAuthStateChanged: dart.legacy(async.Stream$(dart.legacy(firebase_auth.User))),
    currentUser: dart.legacy(firebase_auth.User),
    languageCode: dart.legacy(core.String)
  }));
  dart.setLibraryUri(firebase_auth.FirebaseAuth, L1);
  dart.setFieldSignature(firebase_auth.FirebaseAuth, () => ({
    __proto__: dart.getFields(firebase_auth.FirebaseAuth.__proto__),
    [_delegatePackingProperty]: dart.fieldType(dart.legacy(platform_interface_firebase_auth.FirebaseAuthPlatform)),
    app: dart.fieldType(dart.legacy(firebase_core.FirebaseApp))
  }));
  dart.defineExtensionMethods(firebase_auth.FirebaseAuth, ['toString']);
  dart.defineLazy(firebase_auth.FirebaseAuth, {
    /*firebase_auth.FirebaseAuth._firebaseAuthInstances*/get _firebaseAuthInstances() {
      return new (IdentityMapOfStringL$FirebaseAuthL()).new();
    },
    set _firebaseAuthInstances(_) {}
  }, true);
  var _auth$ = dart.privateName(firebase_auth, "_auth");
  firebase_auth.UserCredential = class UserCredential extends core.Object {
    get additionalUserInfo() {
      return this[_delegate$].additionalUserInfo;
    }
    get credential() {
      return this[_delegate$].credential;
    }
    get user() {
      return this[_delegate$].user == null ? null : new firebase_auth.User.__(this[_auth$], this[_delegate$].user);
    }
    toString() {
      return "UserCredential(additionalUserInfo: " + dart.str(dart.toString(this.additionalUserInfo)) + ", credential: " + dart.str(dart.toString(this.credential)) + ", user: " + dart.str(this.user) + ")";
    }
  };
  (firebase_auth.UserCredential.__ = function(_auth, _delegate) {
    this[_auth$] = _auth;
    this[_delegate$] = _delegate;
    platform_interface_user_credential.UserCredentialPlatform.verifyExtends(this[_delegate$]);
  }).prototype = firebase_auth.UserCredential.prototype;
  dart.addTypeTests(firebase_auth.UserCredential);
  dart.addTypeCaches(firebase_auth.UserCredential);
  dart.setMethodSignature(firebase_auth.UserCredential, () => ({
    __proto__: dart.getMethods(firebase_auth.UserCredential.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(firebase_auth.UserCredential, () => ({
    __proto__: dart.getGetters(firebase_auth.UserCredential.__proto__),
    additionalUserInfo: dart.legacy(additional_user_info.AdditionalUserInfo),
    credential: dart.legacy(auth_credential.AuthCredential),
    user: dart.legacy(firebase_auth.User)
  }));
  dart.setLibraryUri(firebase_auth.UserCredential, L1);
  dart.setFieldSignature(firebase_auth.UserCredential, () => ({
    __proto__: dart.getFields(firebase_auth.UserCredential.__proto__),
    [_delegate$]: dart.fieldType(dart.legacy(platform_interface_user_credential.UserCredentialPlatform)),
    [_auth$]: dart.finalFieldType(dart.legacy(firebase_auth.FirebaseAuth))
  }));
  dart.defineExtensionMethods(firebase_auth.UserCredential, ['toString']);
  firebase_auth.User = class User extends core.Object {
    get displayName() {
      return this[_delegate$].displayName;
    }
    get email() {
      return this[_delegate$].email;
    }
    get emailVerified() {
      return this[_delegate$].emailVerified;
    }
    get isAnonymous() {
      return this[_delegate$].isAnonymous;
    }
    get metadata() {
      return this[_delegate$].metadata;
    }
    get phoneNumber() {
      return this[_delegate$].phoneNumber;
    }
    get photoURL() {
      return this[_delegate$].photoURL;
    }
    get photoUrl() {
      return this[_delegate$].photoURL;
    }
    get providerData() {
      return this[_delegate$].providerData;
    }
    get refreshToken() {
      return this[_delegate$].refreshToken;
    }
    get tenantId() {
      return this[_delegate$].tenantId;
    }
    get uid() {
      return this[_delegate$].uid;
    }
    delete() {
      return this[_delegate$].delete();
    }
    getIdToken(forceRefresh = false) {
      return this[_delegate$].getIdToken(forceRefresh);
    }
    getIdTokenResult(forceRefresh = false) {
      return this[_delegate$].getIdTokenResult(forceRefresh);
    }
    linkWithCredential(credential) {
      return async.async(UserCredentialL(), (function* linkWithCredential() {
        if (!(credential != null)) dart.assertFailed(null, L2, 188, 12, "credential != null");
        return new firebase_auth.UserCredential.__(this[_auth$], yield this[_delegate$].linkWithCredential(credential));
      }).bind(this));
    }
    linkWithPhoneNumber(phoneNumber, verifier = null) {
      return async.async(ConfirmationResultL(), (function* linkWithPhoneNumber() {
        if (!(phoneNumber != null)) dart.assertFailed(null, L2, 221, 12, "phoneNumber != null");
        if (!phoneNumber[$isNotEmpty]) dart.assertFailed(null, L2, 222, 12, "phoneNumber.isNotEmpty");
        verifier == null ? verifier = firebase_auth.RecaptchaVerifier.new() : null;
        return new firebase_auth.ConfirmationResult.__(this[_auth$], yield this[_delegate$].linkWithPhoneNumber(phoneNumber, verifier.delegate));
      }).bind(this));
    }
    reauthenticateWithCredential(credential) {
      return async.async(UserCredentialL(), (function* reauthenticateWithCredential() {
        if (!(credential != null)) dart.assertFailed(null, L2, 259, 12, "credential != null");
        return new firebase_auth.UserCredential.__(this[_auth$], yield this[_delegate$].reauthenticateWithCredential(credential));
      }).bind(this));
    }
    reload() {
      return async.async(dart.void, (function* reload() {
        yield this[_delegate$].reload();
      }).bind(this));
    }
    sendEmailVerification(actionCodeSettings = null) {
      return async.async(dart.void, (function* sendEmailVerification() {
        yield this[_delegate$].sendEmailVerification(actionCodeSettings);
      }).bind(this));
    }
    unlink(providerId) {
      return async.async(UserL(), (function* unlink() {
        if (!(providerId != null)) dart.assertFailed(null, L2, 284, 12, "providerId != null");
        return new firebase_auth.User.__(this[_auth$], yield this[_delegate$].unlink(providerId));
      }).bind(this));
    }
    updateEmail(newEmail) {
      return async.async(dart.void, (function* updateEmail() {
        if (!(newEmail != null)) dart.assertFailed(null, L2, 308, 12, "newEmail != null");
        yield this[_delegate$].updateEmail(newEmail);
      }).bind(this));
    }
    updatePassword(newPassword) {
      return async.async(dart.void, (function* updatePassword() {
        if (!(newPassword != null)) dart.assertFailed(null, L2, 326, 12, "newPassword != null");
        yield this[_delegate$].updatePassword(newPassword);
      }).bind(this));
    }
    updatePhoneNumber(phoneCredential) {
      return async.async(dart.void, (function* updatePhoneNumber() {
        if (!(phoneCredential != null)) dart.assertFailed(null, L2, 340, 12, "phoneCredential != null");
        yield this[_delegate$].updatePhoneNumber(phoneCredential);
      }).bind(this));
    }
    updateProfile(opts) {
      let displayName = opts && 'displayName' in opts ? opts.displayName : null;
      let photoURL = opts && 'photoURL' in opts ? opts.photoURL : null;
      return async.async(dart.void, (function* updateProfile() {
        yield this[_delegate$].updateProfile(new (IdentityMapOfStringL$StringL()).from(["displayName", displayName, "photoURL", photoURL]));
      }).bind(this));
    }
    verifyBeforeUpdateEmail(newEmail, actionCodeSettings = null) {
      return async.async(dart.void, (function* verifyBeforeUpdateEmail() {
        if (!(newEmail != null)) dart.assertFailed(null, L2, 359, 12, "newEmail != null");
        yield this[_delegate$].verifyBeforeUpdateEmail(newEmail, actionCodeSettings);
      }).bind(this));
    }
    toString() {
      return dart.str(dart.wrapType(UserL())) + "(displayName: " + dart.str(this.displayName) + ", email: " + dart.str(this.email) + ", emailVerified: " + dart.str(this.emailVerified) + ", isAnonymous: " + dart.str(this.isAnonymous) + ", metadata: " + dart.str(dart.toString(this.metadata)) + ", phoneNumber: " + dart.str(this.phoneNumber) + ", photoURL: " + dart.str(this.photoURL) + ", providerData, " + dart.str(dart.toString(this.providerData)) + ", refreshToken: " + dart.str(this.refreshToken) + ", tenantId: " + dart.str(this.tenantId) + ", uid: " + dart.str(this.uid) + ")";
    }
  };
  (firebase_auth.User.__ = function(_auth, _delegate) {
    this[_auth$] = _auth;
    this[_delegate$] = _delegate;
    platform_interface_user.UserPlatform.verifyExtends(this[_delegate$]);
  }).prototype = firebase_auth.User.prototype;
  dart.addTypeTests(firebase_auth.User);
  dart.addTypeCaches(firebase_auth.User);
  dart.setMethodSignature(firebase_auth.User, () => ({
    __proto__: dart.getMethods(firebase_auth.User.__proto__),
    delete: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    getIdToken: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), [], [dart.legacy(core.bool)]),
    getIdTokenResult: dart.fnType(dart.legacy(async.Future$(dart.legacy(id_token_result.IdTokenResult))), [], [dart.legacy(core.bool)]),
    linkWithCredential: dart.fnType(dart.legacy(async.Future$(dart.legacy(firebase_auth.UserCredential))), [dart.legacy(auth_credential.AuthCredential)]),
    linkWithPhoneNumber: dart.fnType(dart.legacy(async.Future$(dart.legacy(firebase_auth.ConfirmationResult))), [dart.legacy(core.String)], [dart.legacy(firebase_auth.RecaptchaVerifier)]),
    reauthenticateWithCredential: dart.fnType(dart.legacy(async.Future$(dart.legacy(firebase_auth.UserCredential))), [dart.legacy(auth_credential.AuthCredential)]),
    reload: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    sendEmailVerification: dart.fnType(dart.legacy(async.Future$(dart.void)), [], [dart.legacy(action_code_settings.ActionCodeSettings)]),
    unlink: dart.fnType(dart.legacy(async.Future$(dart.legacy(firebase_auth.User))), [dart.legacy(core.String)]),
    updateEmail: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String)]),
    updatePassword: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String)]),
    updatePhoneNumber: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(phone_auth.PhoneAuthCredential)]),
    updateProfile: dart.fnType(dart.legacy(async.Future$(dart.void)), [], {displayName: dart.legacy(core.String), photoURL: dart.legacy(core.String)}, {}),
    verifyBeforeUpdateEmail: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String)], [dart.legacy(action_code_settings.ActionCodeSettings)]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(firebase_auth.User, () => ({
    __proto__: dart.getGetters(firebase_auth.User.__proto__),
    displayName: dart.legacy(core.String),
    email: dart.legacy(core.String),
    emailVerified: dart.legacy(core.bool),
    isAnonymous: dart.legacy(core.bool),
    metadata: dart.legacy(user_metadata.UserMetadata),
    phoneNumber: dart.legacy(core.String),
    photoURL: dart.legacy(core.String),
    photoUrl: dart.legacy(core.String),
    providerData: dart.legacy(core.List$(dart.legacy(user_info.UserInfo))),
    refreshToken: dart.legacy(core.String),
    tenantId: dart.legacy(core.String),
    uid: dart.legacy(core.String)
  }));
  dart.setLibraryUri(firebase_auth.User, L1);
  dart.setFieldSignature(firebase_auth.User, () => ({
    __proto__: dart.getFields(firebase_auth.User.__proto__),
    [_delegate$]: dart.fieldType(dart.legacy(platform_interface_user.UserPlatform)),
    [_auth$]: dart.finalFieldType(dart.legacy(firebase_auth.FirebaseAuth))
  }));
  dart.defineExtensionMethods(firebase_auth.User, ['toString']);
  firebase_auth.FirebaseUser = class FirebaseUser extends firebase_auth.User {};
  (firebase_auth.FirebaseUser.__ = function(auth, user) {
    firebase_auth.FirebaseUser.__proto__.__.call(this, auth, user);
    ;
  }).prototype = firebase_auth.FirebaseUser.prototype;
  dart.addTypeTests(firebase_auth.FirebaseUser);
  dart.addTypeCaches(firebase_auth.FirebaseUser);
  dart.setLibraryUri(firebase_auth.FirebaseUser, L1);
  firebase_auth.ConfirmationResult = class ConfirmationResult extends core.Object {
    get verificationId() {
      return this[_delegate$].verificationId;
    }
    confirm(verificationCode) {
      return async.async(UserCredentialL(), (function* confirm() {
        if (!(verificationCode != null)) dart.assertFailed(null, L3, 30, 12, "verificationCode != null");
        return new firebase_auth.UserCredential.__(this[_auth$], yield this[_delegate$].confirm(verificationCode));
      }).bind(this));
    }
  };
  (firebase_auth.ConfirmationResult.__ = function(_auth, _delegate) {
    this[_auth$] = _auth;
    this[_delegate$] = _delegate;
    platform_interface_confirmation_result.ConfirmationResultPlatform.verifyExtends(this[_delegate$]);
  }).prototype = firebase_auth.ConfirmationResult.prototype;
  dart.addTypeTests(firebase_auth.ConfirmationResult);
  dart.addTypeCaches(firebase_auth.ConfirmationResult);
  dart.setMethodSignature(firebase_auth.ConfirmationResult, () => ({
    __proto__: dart.getMethods(firebase_auth.ConfirmationResult.__proto__),
    confirm: dart.fnType(dart.legacy(async.Future$(dart.legacy(firebase_auth.UserCredential))), [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(firebase_auth.ConfirmationResult, () => ({
    __proto__: dart.getGetters(firebase_auth.ConfirmationResult.__proto__),
    verificationId: dart.legacy(core.String)
  }));
  dart.setLibraryUri(firebase_auth.ConfirmationResult, L1);
  dart.setFieldSignature(firebase_auth.ConfirmationResult, () => ({
    __proto__: dart.getFields(firebase_auth.ConfirmationResult.__proto__),
    [_delegate$]: dart.fieldType(dart.legacy(platform_interface_confirmation_result.ConfirmationResultPlatform)),
    [_auth$]: dart.finalFieldType(dart.legacy(firebase_auth.FirebaseAuth))
  }));
  var _name = dart.privateName(platform_interface_recaptcha_verifier_factory, "_name");
  var C1;
  var C2;
  firebase_auth.RecaptchaVerifier = class RecaptchaVerifier extends core.Object {
    static new(opts) {
      let container = opts && 'container' in opts ? opts.container : null;
      let size = opts && 'size' in opts ? opts.size : C1 || CT.C1;
      let theme = opts && 'theme' in opts ? opts.theme : C2 || CT.C2;
      let onSuccess = opts && 'onSuccess' in opts ? opts.onSuccess : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onExpired = opts && 'onExpired' in opts ? opts.onExpired : null;
      if (!(size != null)) dart.assertFailed(null, L4, 55, 12, "size != null");
      if (!(theme != null)) dart.assertFailed(null, L4, 56, 12, "theme != null");
      return new firebase_auth.RecaptchaVerifier.__(firebase_auth.RecaptchaVerifier._factory.delegateFor({container: container, size: size, theme: theme, onSuccess: onSuccess, onError: onError, onExpired: onExpired}));
    }
    get delegate() {
      return this[_delegate$];
    }
    get type() {
      return this[_delegate$].type;
    }
    clear() {
      return this[_delegate$].clear();
    }
    render() {
      return async.async(intL(), (function* render() {
        return this[_delegate$].render();
      }).bind(this));
    }
    verify() {
      return async.async(StringL(), (function* verify() {
        return this[_delegate$].verify();
      }).bind(this));
    }
  };
  (firebase_auth.RecaptchaVerifier.__ = function(_delegate) {
    this[_delegate$] = _delegate;
    ;
  }).prototype = firebase_auth.RecaptchaVerifier.prototype;
  dart.addTypeTests(firebase_auth.RecaptchaVerifier);
  dart.addTypeCaches(firebase_auth.RecaptchaVerifier);
  dart.setMethodSignature(firebase_auth.RecaptchaVerifier, () => ({
    __proto__: dart.getMethods(firebase_auth.RecaptchaVerifier.__proto__),
    clear: dart.fnType(dart.void, []),
    render: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.int))), []),
    verify: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), [])
  }));
  dart.setGetterSignature(firebase_auth.RecaptchaVerifier, () => ({
    __proto__: dart.getGetters(firebase_auth.RecaptchaVerifier.__proto__),
    delegate: dart.legacy(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform),
    type: dart.legacy(core.String)
  }));
  dart.setLibraryUri(firebase_auth.RecaptchaVerifier, L1);
  dart.setFieldSignature(firebase_auth.RecaptchaVerifier, () => ({
    __proto__: dart.getFields(firebase_auth.RecaptchaVerifier.__proto__),
    [_delegate$]: dart.fieldType(dart.legacy(platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform))
  }));
  dart.defineLazy(firebase_auth.RecaptchaVerifier, {
    /*firebase_auth.RecaptchaVerifier._factory*/get _factory() {
      return platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform.instance;
    }
  }, true);
  dart.trackLibraries("packages/firebase_auth/firebase_auth.dart", {
    "package:firebase_auth/firebase_auth.dart": firebase_auth
  }, {
    "package:firebase_auth/firebase_auth.dart": ["src/firebase_auth.dart", "src/user_credential.dart", "src/user.dart", "src/confirmation_result.dart", "src/recaptcha_verifier.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/firebase_auth.dart","src/user_credential.dart","src/user.dart","src/confirmation_result.dart","src/recaptcha_verifier.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/firebase_auth/firebase_auth.dart.lib.js"}');
  // Exports:
  return {
    firebase_auth: firebase_auth
  };
}));

//# sourceMappingURL=firebase_auth.dart.lib.js.map
