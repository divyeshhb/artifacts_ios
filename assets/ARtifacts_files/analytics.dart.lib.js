define(['dart_sdk', 'packages/firebase/src/storage.dart', 'packages/firebase/src/js.dart'], (function load__packages__firebase__src__analytics_dart(dart_sdk, packages__firebase__src__storage$46dart, packages__firebase__src__js$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils = packages__firebase__src__storage$46dart.src__utils;
  const js = packages__firebase__src__js$46dart.src__js;
  var analytics = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var AnalyticsL = () => (AnalyticsL = dart.constFn(dart.legacy(analytics.Analytics)))();
  var ExpandoOfAnalyticsL = () => (ExpandoOfAnalyticsL = dart.constFn(core.Expando$(AnalyticsL())))();
  const CT = Object.create(null);
  var L0 = "package:firebase/src/analytics.dart";
  analytics.Analytics = class Analytics extends js.JsObjectWrapper$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.analytics.Analytics, "firebase.analytics.Analytics"))) {
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = analytics.Analytics._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new analytics.Analytics._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    logEvent(eventName, eventParams, options = null) {
      if (options != null) {
        this.jsObject.logEvent(eventName, utils.jsify(eventParams), options.jsObject);
      } else {
        this.jsObject.logEvent(eventName, utils.jsify(eventParams));
      }
    }
    setAnalyticsCollectionEnabled(enabled) {
      this.jsObject.setAnalyticsCollectionEnabled(enabled);
    }
    setCurrentScreen(screenName, options = null) {
      if (options != null) {
        this.jsObject.setCurrentScreen(screenName, options.jsObject);
      } else {
        this.jsObject.setCurrentScreen(screenName);
      }
    }
    setUserId(id, options = null) {
      if (options != null) {
        this.jsObject.setUserId(id, options.jsObject);
      } else {
        this.jsObject.setUserId(id);
      }
    }
    setUserProperties(properties, options = null) {
      if (options != null) {
        this.jsObject.setUserProperties(utils.jsify(properties), options.jsObject);
      } else {
        this.jsObject.setUserProperties(utils.jsify(properties));
      }
    }
  };
  (analytics.Analytics._fromJsObject = function(jsObject) {
    analytics.Analytics.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = analytics.Analytics.prototype;
  dart.addTypeTests(analytics.Analytics);
  dart.addTypeCaches(analytics.Analytics);
  dart.setMethodSignature(analytics.Analytics, () => ({
    __proto__: dart.getMethods(analytics.Analytics.__proto__),
    logEvent: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.Map)], [dart.legacy(analytics.AnalyticsCallOptions)]),
    setAnalyticsCollectionEnabled: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    setCurrentScreen: dart.fnType(dart.void, [dart.legacy(core.String)], [dart.legacy(analytics.AnalyticsCallOptions)]),
    setUserId: dart.fnType(dart.void, [dart.legacy(core.String)], [dart.legacy(analytics.AnalyticsCallOptions)]),
    setUserProperties: dart.fnType(dart.void, [dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))], [dart.legacy(analytics.AnalyticsCallOptions)])
  }));
  dart.setLibraryUri(analytics.Analytics, L0);
  dart.defineLazy(analytics.Analytics, {
    /*analytics.Analytics._expando*/get _expando() {
      return new (ExpandoOfAnalyticsL()).new();
    }
  }, true);
  analytics.AnalyticsCallOptions = class AnalyticsCallOptions extends js.JsObjectWrapper$(dart.legacy(dart.anonymousJSType("AnalyticsCallOptionsJsImpl"))) {
    get global() {
      return this.jsObject.global;
    }
    set global(t) {
      this.jsObject.global = t;
    }
  };
  (analytics.AnalyticsCallOptions._fromJsObject = function(jsObject) {
    analytics.AnalyticsCallOptions.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = analytics.AnalyticsCallOptions.prototype;
  dart.addTypeTests(analytics.AnalyticsCallOptions);
  dart.addTypeCaches(analytics.AnalyticsCallOptions);
  dart.setGetterSignature(analytics.AnalyticsCallOptions, () => ({
    __proto__: dart.getGetters(analytics.AnalyticsCallOptions.__proto__),
    global: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(analytics.AnalyticsCallOptions, () => ({
    __proto__: dart.getSetters(analytics.AnalyticsCallOptions.__proto__),
    global: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(analytics.AnalyticsCallOptions, L0);
  dart.trackLibraries("packages/firebase/src/analytics.dart", {
    "package:firebase/src/analytics.dart": analytics
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["analytics.dart"],"names":[],"mappings":";;;;;;;;;;;;;;uBAOiE;;AAC7D,UAAI,AAAS,QAAD,IAAI;AACd,cAAO;;AAET,WAAO;WAAS,QAAQ;WAAT;mBAAW,aAAc,sCAAc,QAAQ,GAA/C;IACjB;aAKqB,WAAiC,aAC5B;AACxB,UAAI,OAAO,IAAI;AACqD,QAAlE,AAAS,uBAAS,SAAS,EAAE,YAAM,WAAW,GAAG,AAAQ,OAAD;;AAER,QAAhD,AAAS,uBAAS,SAAS,EAAE,YAAM,WAAW;;IAElD;kCAEwC;AACS,MAA/C,AAAS,4CAA8B,OAAO;IAChD;qBAE6B,YAAkC;AAC7D,UAAI,OAAO,IAAI;AAC0C,QAAvD,AAAS,+BAAiB,UAAU,EAAE,AAAQ,OAAD;;AAER,QAArC,AAAS,+BAAiB,UAAU;;IAExC;cAEsB,IAA0B;AAC9C,UAAI,OAAO,IAAI;AAC2B,QAAxC,AAAS,wBAAU,EAAE,EAAE,AAAQ,OAAD;;AAER,QAAtB,AAAS,wBAAU,EAAE;;IAEzB;sBAE2C,YACjB;AACxB,UAAI,OAAO,IAAI;AACkD,QAA/D,AAAS,gCAAkB,YAAM,UAAU,GAAG,AAAQ,OAAD;;AAER,QAA7C,AAAS,gCAAkB,YAAM,UAAU;;IAE/C;;gDAvC0D;AAC9C,0DAAa,QAAQ;;EAAC;;;;;;;;;;;;;MAVrB,4BAAQ;YAAG;;;;;AAyDL,YAAA,AAAS;IAAM;eAClB;AACK,MAAnB,AAAS,uBAAS,CAAC;IACrB;;2DANiD;AACrC,qEAAa,QAAQ;;EAAC","file":"../../../../../../../../../../../packages/firebase/src/analytics.dart.lib.js"}');
  // Exports:
  return {
    src__analytics: analytics
  };
}));

//# sourceMappingURL=analytics.dart.lib.js.map
