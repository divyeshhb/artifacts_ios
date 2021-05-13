define(['dart_sdk'], (function load__packages__flutter__src__foundation__synchronous_future_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var synchronous_future = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/foundation/synchronous_future.dart";
  var L1 = "package:flutter/src/foundation/synchronous_future.dart";
  var _value$ = dart.privateName(synchronous_future, "_value");
  const _is_SynchronousFuture_default = Symbol('_is_SynchronousFuture_default');
  synchronous_future.SynchronousFuture$ = dart.generic(T => {
    var StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    var CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    var FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    var VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    var VoidToNFutureOrOfT = () => (VoidToNFutureOrOfT = dart.constFn(dart.nullable(VoidToFutureOrOfT())))();
    var FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    var dynamicToT = () => (dynamicToT = dart.constFn(dart.fnType(T, [dart.dynamic])))();
    class SynchronousFuture extends core.Object {
      asStream() {
        let controller = StreamControllerOfT().new();
        controller.add(this[_value$]);
        controller.close();
        return controller.stream;
      }
      catchError(onError, opts) {
        if (onError == null) dart.nullFailed(L0, 37, 33, "onError");
        let test = opts && 'test' in opts ? opts.test : null;
        return CompleterOfT().new().future;
      }
      then(R, onValue, opts) {
        if (onValue == null) dart.nullFailed(L0, 40, 33, "onValue");
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let result = onValue(this[_value$]);
        if (async.Future$(R).is(result)) return result;
        return new (synchronous_future.SynchronousFuture$(R)).new(R.as(result));
      }
      timeout(timeLimit, opts) {
        if (timeLimit == null) dart.nullFailed(L0, 48, 30, "timeLimit");
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        VoidToNFutureOrOfT().as(onTimeout);
        return FutureOfT().value(this[_value$]).timeout(timeLimit, {onTimeout: onTimeout});
      }
      whenComplete(action) {
        if (action == null) dart.nullFailed(L0, 53, 44, "action");
        try {
          let result = action();
          if (async.Future.is(result)) return result.then(T, dart.fn(value => this[_value$], dynamicToT()));
          return this;
        } catch (e$) {
          let e = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          if (core.Object.is(e)) {
            return FutureOfT().error(e, stack);
          } else
            throw e$;
        }
      }
    }
    (SynchronousFuture.new = function(_value) {
      this[_value$] = _value;
      ;
    }).prototype = SynchronousFuture.prototype;
    SynchronousFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(SynchronousFuture);
    SynchronousFuture.prototype[_is_SynchronousFuture_default] = true;
    dart.addTypeCaches(SynchronousFuture);
    SynchronousFuture[dart.implements] = () => [async.Future$(T)];
    dart.setMethodSignature(SynchronousFuture, () => ({
      __proto__: dart.getMethods(SynchronousFuture.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      catchError: dart.fnType(async.Future$(T), [core.Function], {test: dart.nullable(dart.fnType(core.bool, [core.Object]))}, {}),
      then: dart.gFnType(R => [async.Future$(R), [dart.fnType(async.FutureOr$(R), [T])], {onError: dart.nullable(core.Function)}, {}], R => [dart.nullable(core.Object)]),
      timeout: dart.fnType(async.Future$(T), [core.Duration], {onTimeout: dart.nullable(core.Object)}, {}),
      whenComplete: dart.fnType(async.Future$(T), [dart.fnType(dart.dynamic, [])])
    }));
    dart.setLibraryUri(SynchronousFuture, L1);
    dart.setFieldSignature(SynchronousFuture, () => ({
      __proto__: dart.getFields(SynchronousFuture.__proto__),
      [_value$]: dart.finalFieldType(T)
    }));
    return SynchronousFuture;
  });
  synchronous_future.SynchronousFuture = synchronous_future.SynchronousFuture$();
  dart.addTypeTests(synchronous_future.SynchronousFuture, _is_SynchronousFuture_default);
  dart.trackLibraries("packages/flutter/src/foundation/synchronous_future.dart", {
    "package:flutter/src/foundation/synchronous_future.dart": synchronous_future
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["synchronous_future.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;AA6B8B,yBAAa;AACjB,QAAtB,AAAW,UAAD,KAAK;AACG,QAAlB,AAAW,UAAD;AACV,cAAO,AAAW,WAAD;MACnB;;YAG8B;YAAgB;AAA0B,cAAA,AAAe;MAAM;;YAG/D;YAA8B;AAC5C,qBAAS,AAAO,OAAA,CAAC;AAC/B,YAAW,oBAAP,MAAM,GACR,MAAO,OAAM;AACf,cAAO,oDAA4B,KAAP,MAAM;MACpC;;YAG2B;YAAyB;;AAClD,cAAO,AAAwB,mBAAR,uBAAgB,SAAS,cAAa,SAAS;MACxE;;YAGyC;AACvC;AAC0B,uBAAS,AAAM,MAAA;AACvC,cAAW,gBAAP,MAAM,GACR,MAAO,AAAO,OAAD,SAAS,QAAS,SAAU;AAC3C,gBAAO;;cACA;cAAG;AAAV;AACA,kBAAO,mBAAgB,CAAC,EAAE,KAAK;;;;MAEnC;;;MAtCuB;;IAAO","file":"../../../../../../../../../../packages/flutter/src/foundation/synchronous_future.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__synchronous_future: synchronous_future
  };
}));

//# sourceMappingURL=synchronous_future.dart.lib.js.map
