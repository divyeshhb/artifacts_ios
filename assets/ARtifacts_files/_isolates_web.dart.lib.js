define(['dart_sdk'], (function load__packages__flutter__src__foundation___isolates_web_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var _isolates_web = Object.create(dart.library);
  var isolates = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var StringN = () => (StringN = dart.constFn(dart.nullable(core.String)))();
  var ObjectN = () => (ObjectN = dart.constFn(dart.nullable(core.Object)))();
  var FnAndQ__ToFutureOfR = () => (FnAndQ__ToFutureOfR = dart.constFn(dart.gFnType((Q, R) => [async.Future$(R), [dart.fnType(async.FutureOr$(R), [Q]), Q], {debugLabel: StringN()}, {}], (Q, R) => [ObjectN(), ObjectN()])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/foundation/_isolates_web.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(_isolates_web.compute, FnAndQ__ToFutureOfR());
    }
  }, false);
  _isolates_web.compute = function compute(Q, R, callback, message, opts) {
    if (callback == null) dart.nullFailed(L0, 8, 56, "callback");
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    return async.async(R, function* compute() {
      yield null;
      return callback(message);
    });
  };
  var C0;
  dart.defineLazy(isolates, {
    /*isolates.compute*/get compute() {
      return C0 || CT.C0;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/foundation/_isolates_web.dart", {
    "package:flutter/src/foundation/_isolates_web.dart": _isolates_web,
    "package:flutter/src/foundation/isolates.dart": isolates
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["_isolates_web.dart","isolates.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;iDAOuD,UAAY;QAAZ;QAA+B;AAA/D;AAIX,MAAV,MAAM;AACN,YAAO,AAAQ,SAAA,CAAC,OAAO;IACzB;;;;MCmCmB,gBAAO","file":"../../../../../../../../../../packages/flutter/src/foundation/_isolates_web.dart.lib.js"}');
  // Exports:
  return {
    src__foundation___isolates_web: _isolates_web,
    src__foundation__isolates: isolates
  };
}));

//# sourceMappingURL=_isolates_web.dart.lib.js.map
