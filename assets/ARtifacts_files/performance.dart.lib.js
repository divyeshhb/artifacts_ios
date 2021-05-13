define(['dart_sdk', 'packages/firebase/src/js.dart', 'packages/firebase/src/storage.dart'], (function load__packages__firebase__src__performance_dart(dart_sdk, packages__firebase__src__js$46dart, packages__firebase__src__storage$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const js = packages__firebase__src__js$46dart.src__js;
  const utils = packages__firebase__src__storage$46dart.src__utils;
  var performance = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var PerformanceL = () => (PerformanceL = dart.constFn(dart.legacy(performance.Performance)))();
  var ExpandoOfPerformanceL = () => (ExpandoOfPerformanceL = dart.constFn(core.Expando$(PerformanceL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(StringL(), dart.dynamic)))();
  var MapLOfStringL$dynamic = () => (MapLOfStringL$dynamic = dart.constFn(dart.legacy(MapOfStringL$dynamic())))();
  const CT = Object.create(null);
  var L0 = "package:firebase/src/performance.dart";
  performance.Performance = class Performance extends js.JsObjectWrapper$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.analytics.Performance, "firebase.analytics.Performance"))) {
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = performance.Performance._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new performance.Performance._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    trace(traceName) {
      return new performance.Trace.fromJsObject(this.jsObject.trace(traceName));
    }
  };
  (performance.Performance._fromJsObject = function(jsObject) {
    performance.Performance.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = performance.Performance.prototype;
  dart.addTypeTests(performance.Performance);
  dart.addTypeCaches(performance.Performance);
  dart.setMethodSignature(performance.Performance, () => ({
    __proto__: dart.getMethods(performance.Performance.__proto__),
    trace: dart.fnType(dart.legacy(performance.Trace), [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(performance.Performance, L0);
  dart.defineLazy(performance.Performance, {
    /*performance.Performance._expando*/get _expando() {
      return new (ExpandoOfPerformanceL()).new();
    }
  }, true);
  performance.Trace = class Trace extends js.JsObjectWrapper$(dart.legacy(dart.anonymousJSType("TraceJsImpl"))) {
    getAttribute(attr) {
      return this.jsObject.getAttribute(attr);
    }
    getAttributes() {
      return MapLOfStringL$dynamic().as(utils.dartify(this.jsObject.getAttributes()));
    }
    getMetric(metricName) {
      return this.jsObject.getMetric(metricName);
    }
    incrementMetric(metricName, num = null) {
      if (num != null) {
        this.jsObject.incrementMetric(metricName, num);
      } else {
        this.jsObject.incrementMetric(metricName);
      }
    }
    putAttribute(attr, value) {
      this.jsObject.putAttribute(attr, value);
    }
    removeAttribute(attr) {
      this.jsObject.removeAttribute(attr);
    }
    start() {
      this.jsObject.start();
    }
    stop() {
      this.jsObject.stop();
    }
  };
  (performance.Trace.fromJsObject = function(jsObject) {
    performance.Trace.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = performance.Trace.prototype;
  dart.addTypeTests(performance.Trace);
  dart.addTypeCaches(performance.Trace);
  dart.setMethodSignature(performance.Trace, () => ({
    __proto__: dart.getMethods(performance.Trace.__proto__),
    getAttribute: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    getAttributes: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), []),
    getMetric: dart.fnType(dart.legacy(core.int), [dart.legacy(core.String)]),
    incrementMetric: dart.fnType(dart.void, [dart.legacy(core.String)], [dart.legacy(core.int)]),
    putAttribute: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.String)]),
    removeAttribute: dart.fnType(dart.void, [dart.legacy(core.String)]),
    start: dart.fnType(dart.void, []),
    stop: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(performance.Trace, L0);
  dart.trackLibraries("packages/firebase/src/performance.dart", {
    "package:firebase/src/performance.dart": performance
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["performance.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;uBAS4C;;AACxC,UAAI,AAAS,QAAD,IAAI;AACd,cAAO;;AAET,WAAO;WAAS,QAAQ;WAAT;mBAAW,aAAgB,0CAAc,QAAQ,GAAjD;IACjB;UAKmB;AACjB,YAAa,oCAAa,AAAS,oBAAM,SAAS;IACpD;;oDALgE;AACpD,8DAAa,QAAQ;;EAAC;;;;;;;;;MAXrB,gCAAQ;YAAG;;;;iBAqBG;AACzB,YAAO,AAAS,4BAAa,IAAI;IACnC;;AAGE,wCAAO,cAAQ,AAAS;IAC1B;cAEqB;AACnB,YAAO,AAAS,yBAAU,UAAU;IACtC;oBAE4B,YAAiB;AAC3C,UAAI,GAAG,IAAI;AACgC,QAAzC,AAAS,8BAAgB,UAAU,EAAE,GAAG;;AAEJ,QAApC,AAAS,8BAAgB,UAAU;;IAEvC;iBAEyB,MAAa;AACF,MAAlC,AAAS,2BAAa,IAAI,EAAE,KAAK;IACnC;oBAE4B;AACI,MAA9B,AAAS,8BAAgB,IAAI;IAC/B;;AAGkB,MAAhB,AAAS;IACX;;AAGiB,MAAf,AAAS;IACX;;6CApCmD;AACvC,wDAAa,QAAQ;;EAAC","file":"../../../../../../../../../../../packages/firebase/src/performance.dart.lib.js"}');
  // Exports:
  return {
    src__performance: performance
  };
}));

//# sourceMappingURL=performance.dart.lib.js.map
