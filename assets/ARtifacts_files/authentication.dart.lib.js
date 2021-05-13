define(['dart_sdk', 'packages/firebase_core/firebase_core.dart', 'packages/shared_preferences/shared_preferences.dart', 'packages/firebase_auth_platform_interface/src/providers/twitter_auth.dart', 'packages/cloud_firestore/cloud_firestore.dart', 'packages/firebase_auth/firebase_auth.dart', 'packages/google_sign_in/google_sign_in.dart'], (function load__packages__artif__utils__authentication_dart(dart_sdk, packages__firebase_core__firebase_core$46dart, packages__shared_preferences__shared_preferences$46dart, packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart, packages__cloud_firestore__cloud_firestore$46dart, packages__firebase_auth__firebase_auth$46dart, packages__google_sign_in__google_sign_in$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const firebase_core = packages__firebase_core__firebase_core$46dart.firebase_core;
  const shared_preferences = packages__shared_preferences__shared_preferences$46dart.shared_preferences;
  const google_auth = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__providers__google_auth;
  const cloud_firestore = packages__cloud_firestore__cloud_firestore$46dart.cloud_firestore;
  const firebase_auth = packages__firebase_auth__firebase_auth$46dart.firebase_auth;
  const google_sign_in = packages__google_sign_in__google_sign_in$46dart.google_sign_in;
  var authentication = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/utils/authentication.dart";
  authentication.getUser = function getUser() {
    return async.async(dart.dynamic, function* getUser() {
      let t0;
      yield firebase_core.Firebase.initializeApp();
      let prefs = (yield shared_preferences.SharedPreferences.getInstance());
      let authSignedIn = (t0 = prefs.getBool("auth"), t0 == null ? false : t0);
      let user = authentication._auth.currentUser;
      if (dart.equals(authSignedIn, true)) {
        if (user != null) {
          authentication.uid = user.uid;
          authentication.name = user.displayName;
          authentication.userEmail = user.email;
          authentication.imageUrl = user.photoURL;
        }
      }
    });
  };
  authentication.signInWithGoogle = function signInWithGoogle() {
    return async.async(StringL(), function* signInWithGoogle() {
      yield firebase_core.Firebase.initializeApp();
      let googleSignInAccount = (yield authentication.googleSignIn.signIn());
      let googleSignInAuthentication = (yield googleSignInAccount.authentication);
      let credential = google_auth.GoogleAuthProvider.credential({accessToken: googleSignInAuthentication.accessToken, idToken: googleSignInAuthentication.idToken});
      let userCredential = (yield authentication._auth.signInWithCredential(credential));
      let user = userCredential.user;
      if (user != null) {
        if (!(user.uid != null)) dart.assertFailed(null, L0, 59, 12, "user.uid != null");
        if (!(user.email != null)) dart.assertFailed(null, L0, 60, 12, "user.email != null");
        if (!(user.displayName != null)) dart.assertFailed(null, L0, 61, 12, "user.displayName != null");
        if (!(user.photoURL != null)) dart.assertFailed(null, L0, 62, 12, "user.photoURL != null");
        authentication.uid = user.uid;
        authentication.name = user.displayName;
        authentication.userEmail = user.email;
        authentication.imageUrl = user.photoURL;
        let userData = new (IdentityMapOfStringL$StringL()).from(["name", authentication.name, "email", authentication.userEmail, "profilePicUrl", authentication.imageUrl]);
        if (!!dart.test(user.isAnonymous)) dart.assertFailed(null, L0, 75, 12, "!user.isAnonymous");
        if (!((yield user.getIdToken()) != null)) dart.assertFailed(null, L0, 76, 12, "await user.getIdToken() != null");
        let currentUser = authentication._auth.currentUser;
        if (!(user.uid == currentUser.uid)) dart.assertFailed(null, L0, 79, 12, "user.uid == currentUser.uid");
        let _fireStore = cloud_firestore.FirebaseFirestore.instance;
        let snapShot = (yield _fireStore.collection("users").doc(currentUser.uid).get());
        if (snapShot == null || !dart.test(snapShot.exists)) {
          core.print("FireStoreUser nOt present");
          _fireStore.collection("User").doc(dart.toString(user.uid)).set(userData);
        }
        let prefs = (yield shared_preferences.SharedPreferences.getInstance());
        prefs.setBool("auth", true);
        return "Google sign in successful, User UID: " + dart.str(user.uid);
      }
      return null;
    });
  };
  authentication.registerWithEmailPassword = function registerWithEmailPassword(email, password) {
    return async.async(StringL(), function* registerWithEmailPassword() {
      yield firebase_core.Firebase.initializeApp();
      let userCredential = (yield authentication._auth.createUserWithEmailAndPassword({email: email, password: password}));
      let user = userCredential.user;
      if (user != null) {
        if (!(user.uid != null)) dart.assertFailed(null, L0, 113, 12, "user.uid != null");
        if (!(user.email != null)) dart.assertFailed(null, L0, 114, 12, "user.email != null");
        authentication.uid = user.uid;
        authentication.userEmail = user.email;
        let userData = new (IdentityMapOfStringL$StringL()).from(["name", "", "email", authentication.userEmail, "profilePicUrl", ""]);
        if (!!dart.test(user.isAnonymous)) dart.assertFailed(null, L0, 125, 12, "!user.isAnonymous");
        if (!((yield user.getIdToken()) != null)) dart.assertFailed(null, L0, 126, 12, "await user.getIdToken() != null");
        let _fireStore = cloud_firestore.FirebaseFirestore.instance;
        let snapShot = (yield _fireStore.collection("users").doc(user.uid).get());
        if (snapShot == null || !dart.test(snapShot.exists)) {
          core.print("FireStoreUser nOt present");
          _fireStore.collection("User").doc(dart.toString(user.uid)).set(userData);
        }
        return "Successfully registered, User UID: " + dart.str(user.uid);
      }
      return null;
    });
  };
  authentication.signInWithEmailPassword = function signInWithEmailPassword(email, password) {
    return async.async(StringL(), function* signInWithEmailPassword() {
      yield firebase_core.Firebase.initializeApp();
      let userCredential = (yield authentication._auth.signInWithEmailAndPassword({email: email, password: password}));
      let user = userCredential.user;
      if (user != null) {
        if (!(user.uid != null)) dart.assertFailed(null, L0, 155, 12, "user.uid != null");
        if (!(user.email != null)) dart.assertFailed(null, L0, 156, 12, "user.email != null");
        authentication.uid = user.uid;
        authentication.userEmail = user.email;
        if (!!dart.test(user.isAnonymous)) dart.assertFailed(null, L0, 161, 12, "!user.isAnonymous");
        if (!((yield user.getIdToken()) != null)) dart.assertFailed(null, L0, 162, 12, "await user.getIdToken() != null");
        let currentUser = authentication._auth.currentUser;
        if (!(user.uid == currentUser.uid)) dart.assertFailed(null, L0, 165, 12, "user.uid == currentUser.uid");
        let prefs = (yield shared_preferences.SharedPreferences.getInstance());
        prefs.setBool("auth", true);
        return "Successfully logged in, User UID: " + dart.str(user.uid);
      }
      return null;
    });
  };
  authentication.signOut = function signOut() {
    return async.async(StringL(), function* signOut() {
      yield authentication._auth.signOut();
      let prefs = (yield shared_preferences.SharedPreferences.getInstance());
      prefs.setBool("auth", false);
      authentication.uid = null;
      authentication.userEmail = null;
      return "User signed out";
    });
  };
  authentication.signOutGoogle = function signOutGoogle() {
    return async.async(dart.void, function* signOutGoogle() {
      yield authentication.googleSignIn.signOut();
      yield authentication._auth.signOut();
      let prefs = (yield shared_preferences.SharedPreferences.getInstance());
      prefs.setBool("auth", false);
      authentication.uid = null;
      authentication.name = null;
      authentication.userEmail = null;
      authentication.imageUrl = null;
      core.print("User signed out of Google account");
    });
  };
  dart.defineLazy(authentication, {
    /*authentication._auth*/get _auth() {
      return firebase_auth.FirebaseAuth.instance;
    },
    /*authentication.googleSignIn*/get googleSignIn() {
      return new google_sign_in.GoogleSignIn.new();
    },
    /*authentication.uid*/get uid() {
      return null;
    },
    set uid(_) {},
    /*authentication.name*/get name() {
      return null;
    },
    set name(_) {},
    /*authentication.userEmail*/get userEmail() {
      return null;
    },
    set userEmail(_) {},
    /*authentication.imageUrl*/get imageUrl() {
      return null;
    },
    set imageUrl(_) {}
  }, true);
  dart.trackLibraries("packages/artif/utils/authentication.dart", {
    "package:artif/utils/authentication.dart": authentication
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["authentication.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;AAiBc;;AACkB,MAA9B,MAAe;AAEG,mBAAQ,MAAwB;AAC7C,0BAAqC,KAAtB,AAAM,KAAD,SAAS,eAAR,OAAmB;AAElC,iBAAO,AAAM;AAExB,UAAiB,YAAb,YAAY,EAAI;AAClB,YAAI,IAAI,IAAI;AACI,UAAd,qBAAM,AAAK,IAAD;AACa,UAAvB,sBAAO,AAAK,IAAD;AACW,UAAtB,2BAAY,AAAK,IAAD;AACQ,UAAxB,0BAAW,AAAK,IAAD;;;IAGrB;;;AAO+B;AACC,MAA9B,MAAe;AAEW,iCAAsB,MAAM,AAAa;AAClC,wCAC7B,MAAM,AAAoB,mBAAD;AAER,uBAAgC,wDACtC,AAA2B,0BAAD,uBAC9B,AAA2B,0BAAD;AAGhB,4BACjB,MAAM,AAAM,0CAAqB,UAAU;AACpC,iBAAO,AAAe,cAAD;AAEhC,UAAI,IAAI,IAAI;AAEV,cAAO,AAAK,AAAI,IAAL,QAAQ;AACnB,cAAO,AAAK,AAAM,IAAP,UAAU;AACrB,cAAO,AAAK,AAAY,IAAb,gBAAgB;AAC3B,cAAO,AAAK,AAAS,IAAV,aAAa;AAEV,QAAd,qBAAM,AAAK,IAAD;AACa,QAAvB,sBAAO,AAAK,IAAD;AACW,QAAtB,2BAAY,AAAK,IAAD;AACQ,QAAxB,0BAAW,AAAK,IAAD;AAEX,uBAAW,2CACb,QAAQ,qBACR,SAAS,0BACT,iBAAiB;AAGnB,aAAO,WAAC,AAAK,IAAD;AACZ,cAA+B,CAAxB,MAAM,AAAK,IAAD,kBAAiB;AAEvB,0BAAc,AAAM;AAC/B,cAAO,AAAK,AAAI,IAAL,QAAQ,AAAY,WAAD;AAEN,yBAA+B;AACjD,wBACF,MAAM,AAAW,AAAoB,AAAqB,UAA1C,YAAY,aAAa,AAAY,WAAD;AAExD,YAAI,AAAS,QAAD,IAAI,mBAAS,AAAS,QAAD;AAEG,UAAlC,WAAM;AAC8D,UAApE,AAAW,AAAmB,AAAyB,UAA7C,YAAY,YAAqB,cAAT,AAAK,IAAD,WAAqB,QAAQ;;AAGnD,qBAAQ,MAAwB;AACvB,QAA3B,AAAM,KAAD,SAAS,QAAQ;AAEtB,cAAO,AAAkD,oDAAV,AAAK,IAAD;;AAGrD,YAAO;IACT;;gFAEgD,OAAc;AAAtB;AACR,MAA9B,MAAe;AAEM,4BACjB,MAAM,AAAM,4DACP,KAAK,YACF,QAAQ;AAGT,iBAAO,AAAe,cAAD;AAEhC,UAAI,IAAI,IAAI;AAEV,cAAO,AAAK,AAAI,IAAL,QAAQ;AACnB,cAAO,AAAK,AAAM,IAAP,UAAU;AAEP,QAAd,qBAAM,AAAK,IAAD;AACY,QAAtB,2BAAY,AAAK,IAAD;AAEZ,uBAAW,2CACb,QAAQ,IACR,SAAS,0BACT,iBAAiB;AAGnB,aAAO,WAAC,AAAK,IAAD;AACZ,cAA+B,CAAxB,MAAM,AAAK,IAAD,kBAAiB;AAEV,yBAA+B;AACjD,wBAAW,MAAM,AAAW,AAAoB,AAAc,UAAnC,YAAY,aAAa,AAAK,IAAD;AAE9D,YAAI,AAAS,QAAD,IAAI,mBAAS,AAAS,QAAD;AAEG,UAAlC,WAAM;AAC8D,UAApE,AAAW,AAAmB,AAAyB,UAA7C,YAAY,YAAqB,cAAT,AAAK,IAAD,WAAqB,QAAQ;;AAGrE,cAAO,AAAgD,kDAAV,AAAK,IAAD;;AAGnD,YAAO;IACT;;4EAE8C,OAAc;AAAtB;AACN,MAA9B,MAAe;AAEM,4BAAiB,MAAM,AAAM,wDACzC,KAAK,YACF,QAAQ;AAGT,iBAAO,AAAe,cAAD;AAEhC,UAAI,IAAI,IAAI;AAEV,cAAO,AAAK,AAAI,IAAL,QAAQ;AACnB,cAAO,AAAK,AAAM,IAAP,UAAU;AAEP,QAAd,qBAAM,AAAK,IAAD;AACY,QAAtB,2BAAY,AAAK,IAAD;AAEhB,aAAO,WAAC,AAAK,IAAD;AACZ,cAA+B,CAAxB,MAAM,AAAK,IAAD,kBAAiB;AAEvB,0BAAc,AAAM;AAC/B,cAAO,AAAK,AAAI,IAAL,QAAQ,AAAY,WAAD;AAEZ,qBAAQ,MAAwB;AACvB,QAA3B,AAAM,KAAD,SAAS,QAAQ;AAEtB,cAAO,AAA+C,iDAAV,AAAK,IAAD;;AAGlD,YAAO;IACT;;;AAEsB;AACC,MAArB,MAAM,AAAM;AAEM,mBAAQ,MAAwB;AACtB,MAA5B,AAAM,KAAD,SAAS,QAAQ;AAEZ,MAAV,qBAAM;AACU,MAAhB,2BAAY;AAEZ,YAAO;IACT;;;AAGkB;AACY,MAA5B,MAAM,AAAa;AACE,MAArB,MAAM,AAAM;AAEM,mBAAQ,MAAwB;AACtB,MAA5B,AAAM,KAAD,SAAS,QAAQ;AAEZ,MAAV,qBAAM;AACK,MAAX,sBAAO;AACS,MAAhB,2BAAY;AACG,MAAf,0BAAW;AAE+B,MAA1C,WAAM;IACR;;;MAlMmB,oBAAK;YAAgB;;MACrB,2BAAY;YAAG;;MAE3B,kBAAG;;;;MACH,mBAAI;;;;MACJ,wBAAS;;;;MACT,uBAAQ","file":"../../../../../../../packages/artif/utils/authentication.dart.lib.js"}');
  // Exports:
  return {
    utils__authentication: authentication
  };
}));

//# sourceMappingURL=authentication.dart.lib.js.map
