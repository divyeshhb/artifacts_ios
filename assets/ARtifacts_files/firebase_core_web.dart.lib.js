define(['dart_sdk', 'packages/firebase/src/top_level.dart', 'packages/firebase_core_platform_interface/firebase_core_platform_interface.dart', 'packages/firebase/src/storage.dart'], (function load__packages__firebase_core_web__firebase_core_web_dart(dart_sdk, packages__firebase__src__top_level$46dart, packages__firebase_core_platform_interface__firebase_core_platform_interface$46dart, packages__firebase__src__storage$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const js_util = dart_sdk.js_util;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const top_level = packages__firebase__src__top_level$46dart.src__top_level;
  const firebase_core_platform_interface = packages__firebase_core_platform_interface__firebase_core_platform_interface$46dart.firebase_core_platform_interface;
  const app = packages__firebase__src__storage$46dart.src__app;
  var firebase_core_web = Object.create(dart.library);
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $toString = dartx.toString;
  var $contains = dartx.contains;
  var $split = dartx.split;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $replaceAll = dartx.replaceAll;
  dart._checkModuleNullSafetyMode(false);
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var FirebaseAppPlatformL = () => (FirebaseAppPlatformL = dart.constFn(dart.legacy(firebase_core_platform_interface.FirebaseAppPlatform)))();
  var AppL = () => (AppL = dart.constFn(dart.legacy(app.App)))();
  var AppLToFirebaseAppPlatformL = () => (AppLToFirebaseAppPlatformL = dart.constFn(dart.fnType(FirebaseAppPlatformL(), [AppL()])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  const CT = Object.create(null);
  var L0 = "package:firebase_core_web/firebase_core_web.dart";
  var L1 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_core_web-0.2.0/lib/src/firebase_core_web.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(firebase_core_web._createFromJsApp, AppLToFirebaseAppPlatformL());
    }
  }, false);
  var _isAutomaticDataCollectionEnabled = dart.privateName(firebase_core_web, "_isAutomaticDataCollectionEnabled");
  firebase_core_web.FirebaseAppWeb = class FirebaseAppWeb extends firebase_core_platform_interface.FirebaseAppPlatform {
    delete() {
      return async.async(dart.void, (function* $delete() {
        yield top_level.app(this.name).delete();
      }).bind(this));
    }
    get isAutomaticDataCollectionEnabled() {
      return this[_isAutomaticDataCollectionEnabled];
    }
    setAutomaticDataCollectionEnabled(enabled) {
      this[_isAutomaticDataCollectionEnabled] = enabled;
      return FutureOfvoid().value();
    }
    setAutomaticResourceManagementEnabled(enabled) {
      return FutureOfvoid().value();
    }
  };
  (firebase_core_web.FirebaseAppWeb.__ = function(name, options) {
    this[_isAutomaticDataCollectionEnabled] = false;
    firebase_core_web.FirebaseAppWeb.__proto__.new.call(this, name, options);
    ;
  }).prototype = firebase_core_web.FirebaseAppWeb.prototype;
  dart.addTypeTests(firebase_core_web.FirebaseAppWeb);
  dart.addTypeCaches(firebase_core_web.FirebaseAppWeb);
  dart.setLibraryUri(firebase_core_web.FirebaseAppWeb, L0);
  dart.setFieldSignature(firebase_core_web.FirebaseAppWeb, () => ({
    __proto__: dart.getFields(firebase_core_web.FirebaseAppWeb.__proto__),
    [_isAutomaticDataCollectionEnabled]: dart.fieldType(dart.legacy(core.bool))
  }));
  var C0;
  firebase_core_web.FirebaseCoreWeb = class FirebaseCoreWeb extends firebase_core_platform_interface.FirebasePlatform {
    static registerWith(registrar) {
      firebase_core_platform_interface.FirebasePlatform.instance = new firebase_core_web.FirebaseCoreWeb.new();
    }
    get apps() {
      return top_level.apps[$map](FirebaseAppPlatformL(), C0 || CT.C0)[$toList]({growable: false});
    }
    initializeApp(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let options = opts && 'options' in opts ? opts.options : null;
      return async.async(FirebaseAppPlatformL(), function* initializeApp() {
        let app = null;
        if (name === "[DEFAULT]") {
          dart.throw(firebase_core_platform_interface.noDefaultAppInitialization());
        }
        if (name == null) {
          try {
            app = top_level.app();
          } catch (e$) {
            let e = dart.getThrown(e$);
            if (dart.toString(e)[$contains]("Cannot read property 'app' of undefined")) {
              dart.throw(firebase_core_platform_interface.coreNotInitialized());
            }
            dart.rethrow(e$);
          }
          if (app == null) {
            dart.throw(firebase_core_platform_interface.coreNotInitialized());
          }
        } else {
          if (!(options != null)) dart.assertFailed("FirebaseOptions cannot be null when creating a secondary Firebase app.", L1, 53, 14, "options != null");
          try {
            app = top_level.initializeApp({name: name, apiKey: options.apiKey, authDomain: options.authDomain, databaseURL: options.databaseURL, projectId: options.projectId, storageBucket: options.storageBucket, messagingSenderId: options.messagingSenderId, appId: options.appId, measurementId: options.measurementId});
          } catch (e$0) {
            let e = dart.getThrown(e$0);
            if (dart.toString(e)[$contains]("Cannot read property 'initializeApp' of undefined")) {
              dart.throw(firebase_core_platform_interface.coreNotInitialized());
            }
            if (firebase_core_web._getJSErrorCode(e) === "app/duplicate-app") {
              dart.throw(firebase_core_platform_interface.duplicateApp(name));
            }
            dart.throw(firebase_core_web._catchJSError(e));
          }
        }
        return firebase_core_web._createFromJsApp(app);
      });
    }
    app(name = "[DEFAULT]") {
      let app = null;
      try {
        app = top_level.app(name);
      } catch (e$) {
        let e = dart.getThrown(e$);
        if (dart.toString(e)[$contains]("Cannot read property 'app' of undefined")) {
          dart.throw(firebase_core_platform_interface.coreNotInitialized());
        }
        if (firebase_core_web._getJSErrorCode(e) === "app/no-app") {
          dart.throw(firebase_core_platform_interface.noAppExists(name));
        }
        dart.throw(firebase_core_web._catchJSError(e));
      }
      return firebase_core_web._createFromJsApp(app);
    }
  };
  (firebase_core_web.FirebaseCoreWeb.new = function() {
    firebase_core_web.FirebaseCoreWeb.__proto__.new.call(this);
    ;
  }).prototype = firebase_core_web.FirebaseCoreWeb.prototype;
  dart.addTypeTests(firebase_core_web.FirebaseCoreWeb);
  dart.addTypeCaches(firebase_core_web.FirebaseCoreWeb);
  dart.setLibraryUri(firebase_core_web.FirebaseCoreWeb, L0);
  firebase_core_web._createFromJsApp = function _createFromJsApp(jsApp) {
    return new firebase_core_web.FirebaseAppWeb.__(jsApp.name, firebase_core_web._createFromJsOptions(jsApp.options));
  };
  firebase_core_web._createFromJsOptions = function _createFromJsOptions(options) {
    return new firebase_core_platform_interface.FirebaseOptions.new({apiKey: options.apiKey, authDomain: options.authDomain, databaseURL: options.databaseURL, projectId: options.projectId, storageBucket: options.storageBucket, messagingSenderId: options.messagingSenderId, appId: options.appId, measurementId: options.measurementId});
  };
  firebase_core_web._getJSErrorCode = function _getJSErrorCode(e) {
    let t3;
    if (dart.equals(js_util.getProperty(e, "name"), "FirebaseError")) {
      return StringL().as((t3 = js_util.getProperty(e, "code"), t3 == null ? "" : t3));
    }
    return "";
  };
  firebase_core_web._catchJSError = function _catchJSError(e) {
    let t3;
    if (dart.equals(js_util.getProperty(e, "name"), "FirebaseError")) {
      let rawCode = StringL().as(js_util.getProperty(e, "code"));
      let code = rawCode;
      let message = StringL().as((t3 = js_util.getProperty(e, "message"), t3 == null ? "" : t3));
      if (code[$contains]("/")) {
        let chunks = code[$split]("/");
        code = chunks[$_get](dart.notNull(chunks[$length]) - 1);
      }
      return new firebase_core_platform_interface.FirebaseException.new({plugin: "core", code: code, message: message[$replaceAll](" (" + dart.str(rawCode) + ")", "")});
    }
    dart.throw(e);
  };
  dart.trackLibraries("packages/firebase_core_web/firebase_core_web.dart", {
    "package:firebase_core_web/firebase_core_web.dart": firebase_core_web
  }, {
    "package:firebase_core_web/firebase_core_web.dart": ["src/firebase_app_web.dart", "src/firebase_core_web.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/firebase_app_web.dart","src/firebase_core_web.dart","firebase_core_web.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyBqB;AACgB,QAAjC,MAAM,AAAmB,cAAN;MACrB;;;AAMI;IAAiC;sCAKe;AACP,MAA3C,0CAAoC,OAAO;AAC3C,YAAc;IAChB;0CAKwD;AACtD,YAAc;IAChB;;kDAjCwB,MAAsB;IAGzC,0CAAoC;AAHgB,8DAAM,IAAI,EAAE,OAAO;;EAAC;;;;;;;;;;wBCJ1C;AACY,MAA5B,6DAAW;IAC9B;;AAKE,YAAgB,AAAK,AAAsB,+EAAiB;IAC9D;;UASY;UAAsB;AADO;AAE1B;AAEb,YAAI,AAAK,IAAD;AAC4B,UAAlC,WAAM;;AAGR,YAAI,AAAK,IAAD,IAAI;AACV;AACsB,YAApB,MAAM;;gBACC;AAGP,gBAAM,AAAW,cAAb,CAAC,aAAqB;AACE,cAA1B,WAAM;;AAGD,YAAP;;AAGF,cAAI,AAAI,GAAD,IAAI;AACiB,YAA1B,WAAM;;;AAGR,gBAAO,AAAQ,OAAD,IAAI,yBACd;AAEJ;AAWG,YAVD,MAAM,+BACE,IAAI,UACF,AAAQ,OAAD,qBACH,AAAQ,OAAD,0BACN,AAAQ,OAAD,yBACT,AAAQ,OAAD,2BACH,AAAQ,OAAD,mCACH,AAAQ,OAAD,2BACnB,AAAQ,OAAD,uBACC,AAAQ,OAAD;;gBAEjB;AAGP,gBACK,AACA,cAFD,CAAC,aAES;AACc,cAA1B,WAAM;;AAGR,gBAAI,AAAmB,kCAAH,CAAC,MAAK;AACA,cAAxB,WAAM,8CAAa,IAAI;;AAGH,YAAtB,WAAM,gCAAc,CAAC;;;AAIzB,cAAO,oCAAiB,GAAG;MAC7B;;QAOgC;AACjB;AAEb;AAC0B,QAAxB,MAAM,cAAa,IAAI;;YAChB;AAIP,YAAM,AAAW,cAAb,CAAC,aAAqB;AACE,UAA1B,WAAM;;AAGR,YAAI,AAAmB,kCAAH,CAAC,MAAK;AACD,UAAvB,WAAM,6CAAY,IAAI;;AAGF,QAAtB,WAAM,gCAAc,CAAC;;AAGvB,YAAO,oCAAiB,GAAG;IAC7B;;;;;EACF;;;;iECjGkD;AAChD,UAAsB,yCAAE,AAAM,KAAD,OAAO,uCAAqB,AAAM,KAAD;EAChE;yEAG8D;AAC5D,UAAO,mEACG,AAAQ,OAAD,qBACH,AAAQ,OAAD,0BACN,AAAQ,OAAD,yBACT,AAAQ,OAAD,2BACH,AAAQ,OAAD,mCACH,AAAQ,OAAD,2BACnB,AAAQ,OAAD,uBACC,AAAQ,OAAD;EAE1B;+DAO+B;;AAC7B,QAAmC,YAA/B,oBAAoB,CAAC,EAAE,SAAW;AACpC,2BAAsC,KAA/B,oBAAoB,CAAC,EAAE,eAAvB,OAAkC;;AAG3C,UAAO;EACT;2DAOwC;;AACtC,QAAmC,YAA/B,oBAAoB,CAAC,EAAE,SAAW;AAC7B,iCAAU,oBAAoB,CAAC,EAAE;AACjC,iBAAO,OAAO;AACd,kCAA4C,KAAlC,oBAAoB,CAAC,EAAE,kBAAvB,OAAqC;AAEtD,UAAI,AAAK,IAAD,YAAU;AACH,qBAAS,AAAK,IAAD,SAAO;AACD,QAAhC,OAAO,AAAM,MAAA,QAAe,aAAd,AAAO,MAAD,aAAU;;AAGhC,YAAO,qEACG,cACF,IAAI,WACD,AAAQ,OAAD,cAAY,AAAa,gBAAT,OAAO,SAAI;;AAIxC,IAAP,WAAM,CAAC;EACT","file":"../../../../../../../../../../packages/firebase_core_web/firebase_core_web.dart.lib.js"}');
  // Exports:
  return {
    firebase_core_web: firebase_core_web
  };
}));

//# sourceMappingURL=firebase_core_web.dart.lib.js.map
