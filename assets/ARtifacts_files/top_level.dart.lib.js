define(['dart_sdk', 'packages/firebase/src/storage.dart', 'packages/firebase/src/messaging.dart', 'packages/firebase/src/remote_config.dart', 'packages/firebase/src/analytics.dart', 'packages/firebase/src/performance.dart'], (function load__packages__firebase__src__top_level_dart(dart_sdk, packages__firebase__src__storage$46dart, packages__firebase__src__messaging$46dart, packages__firebase__src__remote_config$46dart, packages__firebase__src__analytics$46dart, packages__firebase__src__performance$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const js_util = dart_sdk.js_util;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = packages__firebase__src__storage$46dart.src__app;
  const auth = packages__firebase__src__storage$46dart.src__auth;
  const database = packages__firebase__src__storage$46dart.src__database;
  const storage = packages__firebase__src__storage$46dart.src__storage;
  const firestore = packages__firebase__src__storage$46dart.src__firestore;
  const functions = packages__firebase__src__storage$46dart.src__functions;
  const messaging = packages__firebase__src__messaging$46dart.src__messaging;
  const remote_config = packages__firebase__src__remote_config$46dart.src__remote_config;
  const analytics = packages__firebase__src__analytics$46dart.src__analytics;
  const performance = packages__firebase__src__performance$46dart.src__performance;
  var top_level = Object.create(dart.library);
  var $toString = dartx.toString;
  var $map = dartx.map;
  var $toList = dartx.toList;
  dart._checkModuleNullSafetyMode(false);
  var NoSuchMethodErrorL = () => (NoSuchMethodErrorL = dart.constFn(dart.legacy(core.NoSuchMethodError)))();
  var AppL = () => (AppL = dart.constFn(dart.legacy(app.App)))();
  var dynamicToAppL = () => (dynamicToAppL = dart.constFn(dart.fnType(AppL(), [dart.dynamic])))();
  const CT = Object.create(null);
  var L0 = "package:firebase/src/top_level.dart";
  var message$ = dart.privateName(top_level, "FirebaseJsNotLoadedException.message");
  top_level.FirebaseJsNotLoadedException = class FirebaseJsNotLoadedException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return "FirebaseJsNotLoadedException: " + dart.str(this.message);
    }
  };
  (top_level.FirebaseJsNotLoadedException.new = function(message) {
    this[message$] = message;
    ;
  }).prototype = top_level.FirebaseJsNotLoadedException.prototype;
  dart.addTypeTests(top_level.FirebaseJsNotLoadedException);
  dart.addTypeCaches(top_level.FirebaseJsNotLoadedException);
  top_level.FirebaseJsNotLoadedException[dart.implements] = () => [core.Exception];
  dart.setMethodSignature(top_level.FirebaseJsNotLoadedException, () => ({
    __proto__: dart.getMethods(top_level.FirebaseJsNotLoadedException.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(top_level.FirebaseJsNotLoadedException, L0);
  dart.setFieldSignature(top_level.FirebaseJsNotLoadedException, () => ({
    __proto__: dart.getFields(top_level.FirebaseJsNotLoadedException.__proto__),
    message: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(top_level.FirebaseJsNotLoadedException, ['toString']);
  top_level.initializeApp = function initializeApp(opts) {
    let apiKey = opts && 'apiKey' in opts ? opts.apiKey : null;
    let authDomain = opts && 'authDomain' in opts ? opts.authDomain : null;
    let databaseURL = opts && 'databaseURL' in opts ? opts.databaseURL : null;
    let projectId = opts && 'projectId' in opts ? opts.projectId : null;
    let storageBucket = opts && 'storageBucket' in opts ? opts.storageBucket : null;
    let messagingSenderId = opts && 'messagingSenderId' in opts ? opts.messagingSenderId : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let measurementId = opts && 'measurementId' in opts ? opts.measurementId : null;
    let appId = opts && 'appId' in opts ? opts.appId : null;
    name == null ? name = "[DEFAULT]" : null;
    try {
      return app.App.getInstance(dart.global.firebase.initializeApp({apiKey: apiKey, authDomain: authDomain, databaseURL: databaseURL, projectId: projectId, storageBucket: storageBucket, messagingSenderId: messagingSenderId, measurementId: measurementId, appId: appId}, name));
    } catch (e$) {
      let e = dart.getThrown(e$);
      if (dart.test(top_level._firebaseNotLoaded(e))) {
        dart.throw(new top_level.FirebaseJsNotLoadedException.new("firebase.js must be loaded."));
      }
      dart.rethrow(e$);
    }
  };
  top_level.app = function app$(name = null) {
    let jsObject = name != null ? dart.global.firebase.app(name) : dart.global.firebase.app();
    return app.App.getInstance(jsObject);
  };
  top_level.auth = function auth$(app = null) {
    let jsObject = app != null ? dart.global.firebase.auth(app.jsObject) : dart.global.firebase.auth();
    return auth.Auth.getInstance(jsObject);
  };
  top_level.database = function database$(app = null) {
    let jsObject = app != null ? dart.global.firebase.database(app.jsObject) : dart.global.firebase.database();
    return database.Database.getInstance(jsObject);
  };
  top_level.storage = function storage$(app = null) {
    let jsObject = app != null ? dart.global.firebase.storage(app.jsObject) : dart.global.firebase.storage();
    return storage.Storage.getInstance(jsObject);
  };
  top_level.firestore = function firestore$(app = null) {
    let jsObject = app != null ? dart.global.firebase.firestore(app.jsObject) : dart.global.firebase.firestore();
    return firestore.Firestore.getInstance(jsObject);
  };
  top_level.functions = function functions$(app = null) {
    let jsObject = app != null ? dart.global.firebase.functions(app.jsObject) : dart.global.firebase.functions();
    return functions.Functions.getInstance(jsObject);
  };
  top_level.messaging = function messaging$(app = null) {
    let jsObject = app != null ? dart.global.firebase.messaging(app.jsObject) : dart.global.firebase.messaging();
    return messaging.Messaging.getInstance(jsObject);
  };
  top_level.remoteConfig = function remoteConfig(app = null) {
    let jsObject = app != null ? dart.global.firebase.remoteConfig(app.jsObject) : dart.global.firebase.remoteConfig();
    return remote_config.RemoteConfig.getInstance(jsObject);
  };
  top_level.analytics = function analytics$(app = null) {
    let jsObject = app != null ? dart.global.firebase.analytics(app.jsObject) : dart.global.firebase.analytics();
    return analytics.Analytics.getInstance(jsObject);
  };
  top_level.performance = function performance$(app = null) {
    let jsObject = app != null ? dart.global.firebase.performance(app.jsObject) : dart.global.firebase.performance();
    return performance.Performance.getInstance(jsObject);
  };
  top_level._firebaseNotLoaded = function _firebaseNotLoaded(error) {
    if (NoSuchMethodErrorL().is(error)) {
      return true;
    }
    if (dart.test(js_util.hasProperty(error, "message"))) {
      let message = js_util.getProperty(error, "message");
      return dart.equals(message, "firebase is not defined") || dart.equals(message, "Can't find variable: firebase");
    }
    return false;
  };
  dart.copyProperties(top_level, {
    get apps() {
      return dart.global.firebase.apps[$map](AppL(), dart.fn(e => app.App.getInstance(dart.legacy(dart.lazyJSType(() => dart.global.firebase.app.App, "firebase.app.App")).as(e)), dynamicToAppL()))[$toList]();
    }
  });
  dart.defineLazy(top_level, {
    /*top_level._defaultAppName*/get _defaultAppName() {
      return "[DEFAULT]";
    }
  }, true);
  dart.trackLibraries("packages/firebase/src/top_level.dart", {
    "package:firebase/src/top_level.dart": top_level
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["top_level.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsLe;;;;;;;AAKQ,YAAA,AAAwC,6CAAR;IAAQ;;;IAH3B;;EAAQ;;;;;;;;;;;;;;;;QArJnC;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;AAEiB,IAAxB,AAAK,IAAD,IAAC,OAAL,qBAAK;AAEL;AACE,YAAW,qBAAY,mCACV,SACG,MAAM,cACF,UAAU,eACT,WAAW,aACb,SAAS,iBACL,aAAa,qBACT,iBAAiB,iBACrB,aAAa,SACrB,KAAK,GAChB,IAAI;;UACD;AACP,oBAAI,6BAAmB,CAAC;AAC2C,QAAjE,WAAM,+CAA6B;;AAG9B,MAAP;;EAEJ;gCAWgB;AACV,mBAAY,AAAK,IAAD,IAAI,OAAQ,yBAAa,IAAI,IAAI;AAErD,UAAW,qBAAY,QAAQ;EACjC;kCAKe;AACT,mBAAY,AAAI,GAAD,IAAI,OAAQ,0BAAc,AAAI,GAAD,aAAa;AAE7D,UAAY,uBAAY,QAAQ;EAClC;0CAQuB;AACjB,mBACC,AAAI,GAAD,IAAI,OAAQ,8BAAkB,AAAI,GAAD,aAAa;AAEtD,UAAgB,+BAAY,QAAQ;EACtC;wCAQqB;AACf,mBACC,AAAI,GAAD,IAAI,OAAQ,6BAAiB,AAAI,GAAD,aAAa;AAErD,UAAe,6BAAY,QAAQ;EACrC;4CAKyB;AACnB,mBACC,AAAI,GAAD,IAAI,OAAQ,+BAAmB,AAAI,GAAD,aAAa;AAEvD,UAAiB,iCAAY,QAAQ;EACvC;4CAKyB;AACnB,mBACC,AAAI,GAAD,IAAI,OAAQ,+BAAmB,AAAI,GAAD,aAAa;AAEvD,UAAiB,iCAAY,QAAQ;EACvC;4CAKyB;AACnB,mBACC,AAAI,GAAD,IAAI,OAAQ,+BAAmB,AAAI,GAAD,aAAa;AAEvD,UAAiB,iCAAY,QAAQ;EACvC;iDAK+B;AACzB,mBAAY,AAAI,GAAD,IAAI,OACjB,kCAAsB,AAAI,GAAD,aACzB;AAEN,UAAoB,wCAAY,QAAQ;EAC1C;4CAKyB;AACnB,mBACC,AAAI,GAAD,IAAI,OAAQ,+BAAmB,AAAI,GAAD,aAAa;AAEvD,UAAiB,iCAAY,QAAQ;EACvC;gDAK6B;AACvB,mBAAY,AAAI,GAAD,IAAI,OACjB,iCAAqB,AAAI,GAAD,aACxB;AAEN,UAAmB,qCAAY,QAAQ;EACzC;6DAYwB;AACtB,QAAU,wBAAN,KAAK;AACP,YAAO;;AAGT,kBAAI,oBAAe,KAAK,EAAE;AACpB,oBAAU,oBAAe,KAAK,EAAE;AACpC,YAAe,AAA6B,aAArC,OAAO,EAAI,8BACN,YAAR,OAAO,EAAI;;AAGjB,UAAO;EACT;;;AArLsB,YAAS,AAI1B,AACA,yCADI,QAAS,KAAU,4GAAY,CAAC;IAC5B;;;MAEA,yBAAe","file":"../../../../../../../../../../../packages/firebase/src/top_level.dart.lib.js"}');
  // Exports:
  return {
    src__top_level: top_level
  };
}));

//# sourceMappingURL=top_level.dart.lib.js.map
