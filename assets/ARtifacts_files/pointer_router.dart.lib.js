define(['dart_sdk', 'packages/flutter/src/gestures/events.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__gestures__pointer_router_dart(dart_sdk, packages__flutter__src__gestures__events$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  var pointer_router = Object.create(dart.library);
  var $putIfAbsent = dartx.putIfAbsent;
  var $containsKey = dartx.containsKey;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $isEmpty = dartx.isEmpty;
  var $length = dartx.length;
  var $forEach = dartx.forEach;
  dart._checkModuleNullSafetyMode(false);
  var PointerEventTovoid = () => (PointerEventTovoid = dart.constFn(dart.fnType(dart.void, [events.PointerEvent])))();
  var Matrix4N = () => (Matrix4N = dart.constFn(dart.nullable(vector_math_64.Matrix4)))();
  var MapOfPointerEventTovoid$Matrix4N = () => (MapOfPointerEventTovoid$Matrix4N = dart.constFn(core.Map$(PointerEventTovoid(), Matrix4N())))();
  var IdentityMapOfint$MapOfPointerEventTovoid$Matrix4N = () => (IdentityMapOfint$MapOfPointerEventTovoid$Matrix4N = dart.constFn(_js_helper.IdentityMap$(core.int, MapOfPointerEventTovoid$Matrix4N())))();
  var LinkedMapOfPointerEventTovoid$Matrix4N = () => (LinkedMapOfPointerEventTovoid$Matrix4N = dart.constFn(_js_helper.LinkedMap$(PointerEventTovoid(), Matrix4N())))();
  var VoidToMapOfPointerEventTovoid$Matrix4N = () => (VoidToMapOfPointerEventTovoid$Matrix4N = dart.constFn(dart.fnType(MapOfPointerEventTovoid$Matrix4N(), [])))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var DiagnosticsPropertyOfPointerRouter = () => (DiagnosticsPropertyOfPointerRouter = dart.constFn(diagnostics.DiagnosticsProperty$(pointer_router.PointerRouter)))();
  var DiagnosticsPropertyOfPointerEventTovoid = () => (DiagnosticsPropertyOfPointerEventTovoid = dart.constFn(diagnostics.DiagnosticsProperty$(PointerEventTovoid())))();
  var DiagnosticsPropertyOfPointerEvent = () => (DiagnosticsPropertyOfPointerEvent = dart.constFn(diagnostics.DiagnosticsProperty$(events.PointerEvent)))();
  var SyncIterableOfDiagnosticsNode = () => (SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(diagnostics.DiagnosticsNode)))();
  var IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics.DiagnosticsNode)))();
  var VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  var LinkedHashMapOfPointerEventTovoid$Matrix4N = () => (LinkedHashMapOfPointerEventTovoid$Matrix4N = dart.constFn(collection.LinkedHashMap$(PointerEventTovoid(), Matrix4N())))();
  var FnAndMatrix4NTovoid = () => (FnAndMatrix4NTovoid = dart.constFn(dart.fnType(dart.void, [PointerEventTovoid(), Matrix4N()])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/gestures/pointer_router.dart";
  var L1 = "package:flutter/src/gestures/pointer_router.dart";
  var _routeMap = dart.privateName(pointer_router, "_routeMap");
  var _globalRoutes = dart.privateName(pointer_router, "_globalRoutes");
  var _dispatch = dart.privateName(pointer_router, "_dispatch");
  var _dispatchEventToRoutes = dart.privateName(pointer_router, "_dispatchEventToRoutes");
  pointer_router.PointerRouter = class PointerRouter extends core.Object {
    addRoute(pointer, route, transform = null) {
      if (pointer == null) dart.nullFailed(L0, 26, 21, "pointer");
      if (route == null) dart.nullFailed(L0, 26, 43, "route");
      let routes = this[_routeMap][$putIfAbsent](pointer, dart.fn(() => new (LinkedMapOfPointerEventTovoid$Matrix4N()).new(), VoidToMapOfPointerEventTovoid$Matrix4N()));
      if (!!dart.test(routes[$containsKey](route))) dart.assertFailed(null, L0, 31, 12, "!routes.containsKey(route)");
      routes[$_set](route, transform);
    }
    removeRoute(pointer, route) {
      if (pointer == null) dart.nullFailed(L0, 42, 24, "pointer");
      if (route == null) dart.nullFailed(L0, 42, 46, "route");
      if (!dart.test(this[_routeMap][$containsKey](pointer))) dart.assertFailed(null, L0, 43, 12, "_routeMap.containsKey(pointer)");
      let routes = dart.nullCheck(this[_routeMap][$_get](pointer));
      if (!dart.test(routes[$containsKey](route))) dart.assertFailed(null, L0, 45, 12, "routes.containsKey(route)");
      routes[$remove](route);
      if (dart.test(routes[$isEmpty])) this[_routeMap][$remove](pointer);
    }
    addGlobalRoute(route, transform = null) {
      if (route == null) dart.nullFailed(L0, 57, 36, "route");
      if (!!dart.test(this[_globalRoutes][$containsKey](route))) dart.assertFailed(null, L0, 58, 12, "!_globalRoutes.containsKey(route)");
      this[_globalRoutes][$_set](route, transform);
    }
    removeGlobalRoute(route) {
      if (route == null) dart.nullFailed(L0, 69, 39, "route");
      if (!dart.test(this[_globalRoutes][$containsKey](route))) dart.assertFailed(null, L0, 70, 12, "_globalRoutes.containsKey(route)");
      this[_globalRoutes][$remove](route);
    }
    get debugGlobalRouteCount() {
      let count = null;
      if (!dart.test(dart.fn(() => {
        count = this[_globalRoutes][$length];
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 80, 12, "() {\n      count = _globalRoutes.length;\n      return true;\n    }()");
      if (count != null) {
        return dart.nullCheck(count);
      }
      dart.throw(new core.UnsupportedError.new("debugGlobalRouteCount is not supported in release builds"));
    }
    [_dispatch](event, route, transform) {
      if (event == null) dart.nullFailed(L0, 90, 31, "event");
      if (route == null) dart.nullFailed(L0, 90, 51, "route");
      try {
        event = event.transformed(transform);
        route(event);
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        if (core.Object.is(exception)) {
          let collector = null;
          if (!dart.test(dart.fn(() => {
            collector = dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
              yield new (DiagnosticsPropertyOfPointerRouter()).new("router", this, {level: diagnostics.DiagnosticLevel.debug});
              yield new (DiagnosticsPropertyOfPointerEventTovoid()).new("route", route, {level: diagnostics.DiagnosticLevel.debug});
              yield new (DiagnosticsPropertyOfPointerEvent()).new("event", event, {level: diagnostics.DiagnosticLevel.debug});
            }).bind(this)), VoidToIterableOfDiagnosticsNode());
            return true;
          }, VoidTobool())())) dart.assertFailed(null, L0, 96, 14, "() {\n        collector = () sync* {\n          yield DiagnosticsProperty<PointerRouter>('router', this, level: DiagnosticLevel.debug);\n          yield DiagnosticsProperty<PointerRoute>('route', route, level: DiagnosticLevel.debug);\n          yield DiagnosticsProperty<PointerEvent>('event', event, level: DiagnosticLevel.debug);\n        };\n        return true;\n      }()");
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "gesture library", context: new assertions.ErrorDescription.new("while routing a pointer event"), informationCollector: collector}));
        } else
          throw e;
      }
    }
    route(event) {
      if (event == null) dart.nullFailed(L0, 118, 27, "event");
      let routes = this[_routeMap][$_get](event.pointer);
      let copiedGlobalRoutes = LinkedHashMapOfPointerEventTovoid$Matrix4N().from(this[_globalRoutes]);
      if (routes != null) {
        this[_dispatchEventToRoutes](event, routes, LinkedHashMapOfPointerEventTovoid$Matrix4N().from(routes));
      }
      this[_dispatchEventToRoutes](event, this[_globalRoutes], copiedGlobalRoutes);
    }
    [_dispatchEventToRoutes](event, referenceRoutes, copiedRoutes) {
      if (event == null) dart.nullFailed(L0, 132, 18, "event");
      if (referenceRoutes == null) dart.nullFailed(L0, 133, 33, "referenceRoutes");
      if (copiedRoutes == null) dart.nullFailed(L0, 134, 33, "copiedRoutes");
      copiedRoutes[$forEach](dart.fn((route, transform) => {
        if (route == null) dart.nullFailed(L0, 136, 40, "route");
        if (dart.test(referenceRoutes[$containsKey](route))) {
          this[_dispatch](event, route, transform);
        }
      }, FnAndMatrix4NTovoid()));
    }
  };
  (pointer_router.PointerRouter.new = function() {
    this[_routeMap] = new (IdentityMapOfint$MapOfPointerEventTovoid$Matrix4N()).new();
    this[_globalRoutes] = new (LinkedMapOfPointerEventTovoid$Matrix4N()).new();
    ;
  }).prototype = pointer_router.PointerRouter.prototype;
  dart.addTypeTests(pointer_router.PointerRouter);
  dart.addTypeCaches(pointer_router.PointerRouter);
  dart.setMethodSignature(pointer_router.PointerRouter, () => ({
    __proto__: dart.getMethods(pointer_router.PointerRouter.__proto__),
    addRoute: dart.fnType(dart.void, [core.int, dart.fnType(dart.void, [events.PointerEvent])], [dart.nullable(vector_math_64.Matrix4)]),
    removeRoute: dart.fnType(dart.void, [core.int, dart.fnType(dart.void, [events.PointerEvent])]),
    addGlobalRoute: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent])], [dart.nullable(vector_math_64.Matrix4)]),
    removeGlobalRoute: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent])]),
    [_dispatch]: dart.fnType(dart.void, [events.PointerEvent, dart.fnType(dart.void, [events.PointerEvent]), dart.nullable(vector_math_64.Matrix4)]),
    route: dart.fnType(dart.void, [events.PointerEvent]),
    [_dispatchEventToRoutes]: dart.fnType(dart.void, [events.PointerEvent, core.Map$(dart.fnType(dart.void, [events.PointerEvent]), dart.nullable(vector_math_64.Matrix4)), core.Map$(dart.fnType(dart.void, [events.PointerEvent]), dart.nullable(vector_math_64.Matrix4))])
  }));
  dart.setGetterSignature(pointer_router.PointerRouter, () => ({
    __proto__: dart.getGetters(pointer_router.PointerRouter.__proto__),
    debugGlobalRouteCount: core.int
  }));
  dart.setLibraryUri(pointer_router.PointerRouter, L1);
  dart.setFieldSignature(pointer_router.PointerRouter, () => ({
    __proto__: dart.getFields(pointer_router.PointerRouter.__proto__),
    [_routeMap]: dart.finalFieldType(core.Map$(core.int, core.Map$(dart.fnType(dart.void, [events.PointerEvent]), dart.nullable(vector_math_64.Matrix4)))),
    [_globalRoutes]: dart.finalFieldType(core.Map$(dart.fnType(dart.void, [events.PointerEvent]), dart.nullable(vector_math_64.Matrix4)))
  }));
  dart.trackLibraries("packages/flutter/src/gestures/pointer_router.dart", {
    "package:flutter/src/gestures/pointer_router.dart": pointer_router
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["pointer_router.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;aAyBoB,SAAsB,OAAiB;UAAvC;UAAsB;AACJ,mBAAS,AAAU,8BACnD,OAAO,EACP,cAA8B;AAEhC,WAAO,WAAC,AAAO,MAAD,eAAa,KAAK;AACP,MAAzB,AAAM,MAAA,QAAC,KAAK,EAAI,SAAS;IAC3B;gBASqB,SAAsB;UAAtB;UAAsB;AACzC,qBAAO,AAAU,8BAAY,OAAO;AACF,mBAA2B,eAAlB,AAAS,uBAAC,OAAO;AAC5D,qBAAO,AAAO,MAAD,eAAa,KAAK;AACX,MAApB,AAAO,MAAD,UAAQ,KAAK;AACnB,oBAAI,AAAO,MAAD,aACR,AAAU,AAAe,yBAAR,OAAO;IAC5B;mBAQiC,OAAiB;UAAjB;AAC/B,WAAO,WAAC,AAAc,kCAAY,KAAK;AACP,MAAhC,AAAa,2BAAC,KAAK,EAAI,SAAS;IAClC;;UASoC;AAClC,qBAAO,AAAc,kCAAY,KAAK;AACX,MAA3B,AAAc,6BAAO,KAAK;IAC5B;;AAOO;AACL,qBAAO,AAGN;AAF6B,QAA5B,QAAQ,AAAc;AACtB,cAAO;;AAET,UAAI,KAAK,IAAI;AACX,cAAY,gBAAL,KAAK;;AAEoE,MAAlF,WAAM,8BAAiB;IACzB;gBAE4B,OAAoB,OAAgB;UAApC;UAAoB;AAC9C;AACsC,QAApC,QAAQ,AAAM,KAAD,aAAa,SAAS;AACvB,QAAZ,AAAK,KAAA,CAAC,KAAK;;YACJ;YAAW;AAAlB;AACsB;AACtB,yBAAO,AAON;AAFE,YAJD,YAAY;AACV,oBAAM,+CAAmC,UAAU,cAA6B;AAChF,oBAAM,oDAAkC,SAAS,KAAK,UAAyB;AAC/E,oBAAM,8CAAkC,SAAS,KAAK,UAAyB;YAChF;AACD,kBAAO;;AAQP,UANW,oCAAY,mDACZ,SAAS,SACb,KAAK,WACH,4BACA,oCAAiB,wDACJ,SAAS;;;;IAGrC;;UAMwB;AACa,mBAAS,AAAS,uBAAC,AAAM,KAAD;AACzB,+BAAqB,kDAAiC;AACxF,UAAI,MAAM,IAAI;AAKX,QAJD,6BACE,KAAK,EACL,MAAM,EACN,kDAAiC,MAAM;;AAGqB,MAAhE,6BAAuB,KAAK,EAAE,qBAAe,kBAAkB;IACjE;6BAGe,OACe,iBACA;UAFf;UACe;UACA;AAM1B,MAJF,AAAa,YAAD,WAAS,SAAc,OAAgB;YAAhB;AACjC,sBAAI,AAAgB,eAAD,eAAa,KAAK;AACD,UAAlC,gBAAU,KAAK,EAAE,KAAK,EAAE,SAAS;;;IAGvC;;;IA7H4C,kBAA8C;IACxD,sBAAwC;;EA6H5E","file":"../../../../../../../../../../packages/flutter/src/gestures/pointer_router.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__pointer_router: pointer_router
  };
}));

//# sourceMappingURL=pointer_router.dart.lib.js.map
