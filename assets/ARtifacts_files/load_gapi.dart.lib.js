define(['dart_sdk', 'packages/google_sign_in_web/src/utils.dart'], (function load__packages__google_sign_in_web__src__load_gapi_dart(dart_sdk, packages__google_sign_in_web__src__utils$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const js = dart_sdk.js;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils = packages__google_sign_in_web__src__utils$46dart.src__utils;
  var load_gapi = Object.create(dart.library);
  var $startsWith = dartx.startsWith;
  var $addAll = dartx.addAll;
  dart._checkModuleNullSafetyMode(false);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  var FunctionL = () => (FunctionL = dart.constFn(dart.legacy(core.Function)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var FutureLOfvoid = () => (FutureLOfvoid = dart.constFn(dart.legacy(FutureOfvoid())))();
  var JSArrayOfFutureLOfvoid = () => (JSArrayOfFutureLOfvoid = dart.constFn(_interceptors.JSArray$(FutureLOfvoid())))();
  var VoidToLNull = () => (VoidToLNull = dart.constFn(dart.legacy(VoidToNull())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], StringL());
    }
  }, false);
  var C0;
  load_gapi._addOnloadToScript = function _addOnloadToScript(url) {
    return url[$startsWith]("data:") ? url : dart.str(url) + "?onload=" + "gapiOnloadCallback";
  };
  load_gapi.inject = function inject(url, opts) {
    let t0;
    let libraries = opts && 'libraries' in opts ? opts.libraries : C0 || CT.C0;
    let gapiOnLoad = CompleterOfvoid().new();
    dart.global.gapiOnloadCallback = js.allowInterop(FunctionL(), dart.fn(() => {
      gapiOnLoad.complete();
    }, VoidToNull()));
    let allLibraries = (t0 = JSArrayOfStringL().of([load_gapi._addOnloadToScript(url)]), (() => {
      t0[$addAll](libraries);
      return t0;
    })());
    return async.Future.wait(dart.void, JSArrayOfFutureLOfvoid().of([utils.injectJSLibraries(allLibraries), gapiOnLoad.future]));
  };
  load_gapi.init = function init() {
    let gapiLoadCompleter = CompleterOfvoid().new();
    dart.global.gapi.load("auth2", js.allowInterop(VoidToLNull(), dart.fn(() => {
      gapiLoadCompleter.complete();
    }, VoidToNull())));
    return gapiLoadCompleter.future;
  };
  dart.defineLazy(load_gapi, {
    /*load_gapi.kGapiOnloadCallbackFunctionName*/get kGapiOnloadCallbackFunctionName() {
      return "gapiOnloadCallback";
    }
  }, true);
  dart.trackLibraries("packages/google_sign_in_web/src/load_gapi.dart", {
    "package:google_sign_in_web/src/load_gapi.dart": load_gapi
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["load_gapi.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;6DAuBiC;AAAQ,UAAA,AAAI,IAAD,cAAY,WAClD,GAAG,GAC2C,SAA5C,GAAG;EAAyC;qCAKzB;;QAAmB;AAEtB,qBAAa;AAIjC,IAHF,iCAAqB,6BAAa;AAEX,MAArB,AAAW,UAAD;;AAIO,6BAAuB,uBAAC,6BAAmB,GAAG,KAAvB;AACtC,kBAAO,SAAS;;;AAEpB,UAAc,8BACI,6BAAC,wBAAkB,YAAY,GAAG,AAAW,UAAD;EAChE;;AAKwB,4BAAoB;AAGvC,IAFH,sBAAU,SAAS,+BAAa;AACF,MAA5B,AAAkB,iBAAD;;AAInB,UAAO,AAAkB,kBAAD;EAC1B;;MAlCa,yCAA+B","file":"../../../../../../../../../../../packages/google_sign_in_web/src/load_gapi.dart.lib.js"}');
  // Exports:
  return {
    src__load_gapi: load_gapi
  };
}));

//# sourceMappingURL=load_gapi.dart.lib.js.map
