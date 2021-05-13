define(['dart_sdk', 'packages/firebase_core_platform_interface/firebase_core_platform_interface.dart', 'packages/quiver/src/core/hash.dart'], (function load__packages__firebase_core__firebase_core_dart(dart_sdk, packages__firebase_core_platform_interface__firebase_core_platform_interface$46dart, packages__quiver__src__core__hash$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const firebase_core_platform_interface = packages__firebase_core_platform_interface__firebase_core_platform_interface$46dart.firebase_core_platform_interface;
  const hash = packages__quiver__src__core__hash$46dart.src__core__hash;
  var firebase_core = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $hashCode = dartx.hashCode;
  var $toString = dartx.toString;
  var $map = dartx.map;
  var $toList = dartx.toList;
  dart._checkModuleNullSafetyMode(false);
  var FirebaseAppL = () => (FirebaseAppL = dart.constFn(dart.legacy(firebase_core.FirebaseApp)))();
  var ListOfFirebaseAppL = () => (ListOfFirebaseAppL = dart.constFn(core.List$(FirebaseAppL())))();
  var ListLOfFirebaseAppL = () => (ListLOfFirebaseAppL = dart.constFn(dart.legacy(ListOfFirebaseAppL())))();
  var FirebaseAppPlatformL = () => (FirebaseAppPlatformL = dart.constFn(dart.legacy(firebase_core_platform_interface.FirebaseAppPlatform)))();
  var FirebaseAppPlatformLToFirebaseAppL = () => (FirebaseAppPlatformLToFirebaseAppL = dart.constFn(dart.fnType(FirebaseAppL(), [FirebaseAppPlatformL()])))();
  var FirebaseL = () => (FirebaseL = dart.constFn(dart.legacy(firebase_core.Firebase)))();
  const CT = Object.create(null);
  var L0 = "package:firebase_core/firebase_core.dart";
  var _delegate$ = dart.privateName(firebase_core, "_delegate");
  firebase_core.FirebaseApp = class FirebaseApp extends core.Object {
    delete() {
      return async.async(dart.void, (function* $delete() {
        yield this[_delegate$].delete();
      }).bind(this));
    }
    static appNamed(name) {
      return firebase_core.Firebase.app(name);
    }
    static allApps() {
      return async.async(ListLOfFirebaseAppL(), function* allApps() {
        return firebase_core.Firebase.apps;
      });
    }
    static configure(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let options = opts && 'options' in opts ? opts.options : null;
      return firebase_core.Firebase.initializeApp({name: name, options: options});
    }
    static get instance() {
      return firebase_core.Firebase.app();
    }
    static get defaultAppName() {
      return "[DEFAULT]";
    }
    get name() {
      return this[_delegate$].name;
    }
    get options() {
      return this[_delegate$].options;
    }
    get isAutomaticDataCollectionEnabled() {
      return this[_delegate$].isAutomaticDataCollectionEnabled;
    }
    setAutomaticDataCollectionEnabled(enabled) {
      return this[_delegate$].setAutomaticDataCollectionEnabled(enabled);
    }
    setAutomaticResourceManagementEnabled(enabled) {
      return this[_delegate$].setAutomaticResourceManagementEnabled(enabled);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!FirebaseAppL().is(other)) return false;
      return dart.equals(dart.dload(other, 'name'), this.name) && dart.equals(dart.dload(other, 'options'), this.options);
    }
    get hashCode() {
      return hash.hash2(this.name, this.options);
    }
    toString() {
      return dart.str(dart.wrapType(FirebaseAppL())) + "(" + dart.str(this.name) + ")";
    }
  };
  (firebase_core.FirebaseApp.__ = function(_delegate) {
    this[_delegate$] = _delegate;
    firebase_core_platform_interface.FirebaseAppPlatform.verifyExtends(this[_delegate$]);
  }).prototype = firebase_core.FirebaseApp.prototype;
  dart.addTypeTests(firebase_core.FirebaseApp);
  dart.addTypeCaches(firebase_core.FirebaseApp);
  dart.setMethodSignature(firebase_core.FirebaseApp, () => ({
    __proto__: dart.getMethods(firebase_core.FirebaseApp.__proto__),
    delete: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    setAutomaticDataCollectionEnabled: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.bool)]),
    setAutomaticResourceManagementEnabled: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.bool)]),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(firebase_core.FirebaseApp, () => ({
    __proto__: dart.getGetters(firebase_core.FirebaseApp.__proto__),
    name: dart.legacy(core.String),
    options: dart.legacy(firebase_core_platform_interface.FirebaseOptions),
    isAutomaticDataCollectionEnabled: dart.legacy(core.bool),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(firebase_core.FirebaseApp, L0);
  dart.setFieldSignature(firebase_core.FirebaseApp, () => ({
    __proto__: dart.getFields(firebase_core.FirebaseApp.__proto__),
    [_delegate$]: dart.fieldType(dart.legacy(firebase_core_platform_interface.FirebaseAppPlatform))
  }));
  dart.defineExtensionMethods(firebase_core.FirebaseApp, ['_equals', 'toString']);
  dart.defineExtensionAccessors(firebase_core.FirebaseApp, ['hashCode']);
  firebase_core.Firebase = class Firebase extends core.Object {
    static get _delegate() {
      if (firebase_core.Firebase.delegatePackingProperty == null) {
        firebase_core.Firebase.delegatePackingProperty = firebase_core_platform_interface.FirebasePlatform.instance;
      }
      return firebase_core.Firebase.delegatePackingProperty;
    }
    static get apps() {
      return firebase_core.Firebase._delegate.apps[$map](FirebaseAppL(), dart.fn(app => new firebase_core.FirebaseApp.__(app), FirebaseAppPlatformLToFirebaseAppL()))[$toList]({growable: false});
    }
    static initializeApp(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let options = opts && 'options' in opts ? opts.options : null;
      return async.async(FirebaseAppL(), function* initializeApp() {
        let app = (yield firebase_core.Firebase._delegate.initializeApp({name: name, options: options}));
        return new firebase_core.FirebaseApp.__(app);
      });
    }
    static app(name = "[DEFAULT]") {
      let app = firebase_core.Firebase._delegate.app(name);
      return app == null ? null : new firebase_core.FirebaseApp.__(app);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!FirebaseL().is(other)) return false;
      return dart.hashCode(other) == this.hashCode;
    }
    get hashCode() {
      return dart.hashCode(this.toString());
    }
    toString() {
      return dart.str(dart.wrapType(FirebaseL()));
    }
  };
  (firebase_core.Firebase.__ = function() {
    ;
  }).prototype = firebase_core.Firebase.prototype;
  dart.addTypeTests(firebase_core.Firebase);
  dart.addTypeCaches(firebase_core.Firebase);
  dart.setMethodSignature(firebase_core.Firebase, () => ({
    __proto__: dart.getMethods(firebase_core.Firebase.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(firebase_core.Firebase, () => ({
    __proto__: dart.getGetters(firebase_core.Firebase.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(firebase_core.Firebase, L0);
  dart.defineExtensionMethods(firebase_core.Firebase, ['_equals', 'toString']);
  dart.defineExtensionAccessors(firebase_core.Firebase, ['hashCode']);
  dart.defineLazy(firebase_core.Firebase, {
    /*firebase_core.Firebase.delegatePackingProperty*/get delegatePackingProperty() {
      return null;
    },
    set delegatePackingProperty(_) {}
  }, true);
  dart.trackLibraries("packages/firebase_core/firebase_core.dart", {
    "package:firebase_core/firebase_core.dart": firebase_core
  }, {
    "package:firebase_core/firebase_core.dart": ["src/firebase_app.dart", "src/firebase.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/firebase_app.dart","src/firebase.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;AAyBqB;AACO,QAAxB,MAAM,AAAU;MAClB;;oBAImC;AACjC,YAAgB,4BAAI,IAAI;IAC1B;;AAIwC;AACtC,cAAgB;MAClB;;;UAKmB;UACS;AAE1B,YAAgB,6CAAoB,IAAI,WAAW,OAAO;IAC5D;;AAKE,YAAgB;IAClB;;AAKE;IACF;;AAGmB,YAAA,AAAU;IAAI;;AAGF,YAAA,AAAU;IAAO;;AAO5C,YAAA,AAAU;IAAgC;sCAMM;AAClD,YAAO,AAAU,oDAAkC,OAAO;IAC5D;0CAIwD;AACtD,YAAO,AAAU,wDAAsC,OAAO;IAChE;;UAGyB;AACvB,UAAI,AAAU,SAAM,KAAK,EAAG,MAAO;AACnC,WAAU,kBAAN,KAAK,GAAkB,MAAO;AAClC,YAAkB,AAAQ,aAAb,WAAN,KAAK,WAAS,cAAsB,YAAR,WAAN,KAAK,cAAY;IAChD;;AAGoB,wBAAM,WAAM;IAAQ;;AAGnB,YAAqB,UAAnB,iCAAW,eAAE,aAAI;IAAE;;;IAnFvB;AAC2B,IAAxB,mEAAc;EACpC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ACDE,UAAI,AAAwB,kDAAG;AACsB,QAAnD,iDAA2C;;AAE7C,YAAO;IACT;;AAOE,YAAO,AAAU,AACZ,AACA,6DADI,QAAC,OAAoB,iCAAE,GAAG,8DACb;IACxB;;UAQY;UAAsB;AADM;AAElB,mBAChB,MAAM,AAAU,sDAAoB,IAAI,WAAW,OAAO;AAC9D,cAAmB,kCAAE,GAAG;MAC1B;;eAM+B;AACT,gBAAM,AAAU,qCAAI,IAAI;AAC5C,YAAO,AAAI,IAAD,IAAI,OAAO,OAAmB,iCAAE,GAAG;IAC/C;;UAGyB;AACvB,UAAI,AAAU,SAAM,KAAK,EAAG,MAAO;AACnC,WAAU,eAAN,KAAK,GAAe,MAAO;AAC/B,YAAa,AAAS,eAAf,KAAK,KAAa;IAC3B;;AAGoB,YAAgB,eAAhB,AAAK;IAAmB;;AAGvB,YAAW,UAAT;IAAS;;;;EAzCpB;;;;;;;;;;;;;;;;;;;MAVY,8CAAuB","file":"../../../../../../../../../../packages/firebase_core/firebase_core.dart.lib.js"}');
  // Exports:
  return {
    firebase_core: firebase_core
  };
}));

//# sourceMappingURL=firebase_core.dart.lib.js.map
