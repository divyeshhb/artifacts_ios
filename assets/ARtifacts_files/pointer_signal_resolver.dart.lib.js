define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/gestures/events.dart'], (function load__packages__flutter__src__gestures__pointer_signal_resolver_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__gestures__events$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  var pointer_signal_resolver = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var DiagnosticsPropertyOfPointerSignalEvent = () => (DiagnosticsPropertyOfPointerSignalEvent = dart.constFn(diagnostics.DiagnosticsProperty$(events.PointerSignalEvent)))();
  var SyncIterableOfDiagnosticsNode = () => (SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(diagnostics.DiagnosticsNode)))();
  var IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics.DiagnosticsNode)))();
  var VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/gestures/pointer_signal_resolver.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/gestures/pointer_signal_resolver.dart";
  var _firstRegisteredCallback = dart.privateName(pointer_signal_resolver, "_firstRegisteredCallback");
  var _currentEvent = dart.privateName(pointer_signal_resolver, "_currentEvent");
  pointer_signal_resolver.PointerSignalResolver = class PointerSignalResolver extends core.Object {
    register(event, callback) {
      if (event == null) dart.nullFailed(L0, 34, 36, "event");
      if (callback == null) dart.nullFailed(L0, 34, 73, "callback");
      if (!(event != null)) dart.assertFailed(null, L0, 35, 12, "event != null");
      if (!(callback != null)) dart.assertFailed(null, L0, 36, 12, "callback != null");
      if (!(this[_currentEvent] == null || dart.test(pointer_signal_resolver._isSameEvent(dart.nullCheck(this[_currentEvent]), event)))) dart.assertFailed(null, L0, 37, 12, "_currentEvent == null || _isSameEvent(_currentEvent!, event)");
      if (this[_firstRegisteredCallback] != null) {
        return;
      }
      this[_currentEvent] = event;
      this[_firstRegisteredCallback] = callback;
    }
    resolve(event) {
      if (event == null) dart.nullFailed(L0, 50, 35, "event");
      if (this[_firstRegisteredCallback] == null) {
        if (!(this[_currentEvent] == null)) dart.assertFailed(null, L0, 52, 14, "_currentEvent == null");
        return;
      }
      if (!dart.test(pointer_signal_resolver._isSameEvent(dart.nullCheck(this[_currentEvent]), event))) dart.assertFailed(null, L0, 55, 12, "_isSameEvent(_currentEvent!, event)");
      try {
        dart.nullCheck(this[_firstRegisteredCallback])(dart.nullCheck(this[_currentEvent]));
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        if (core.Object.is(exception)) {
          let collector = null;
          if (!dart.test(dart.fn(() => {
            collector = dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new(function*() {
              yield new (DiagnosticsPropertyOfPointerSignalEvent()).new("Event", event, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
            }), VoidToIterableOfDiagnosticsNode());
            return true;
          }, VoidTobool())())) dart.assertFailed(null, L0, 60, 14, "() {\n        collector = () sync* {\n          yield DiagnosticsProperty<PointerSignalEvent>('Event', event, style: DiagnosticsTreeStyle.errorProperty);\n        };\n        return true;\n      }()");
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "gesture library", context: new assertions.ErrorDescription.new("while resolving a PointerSignalEvent"), informationCollector: collector}));
        } else
          throw e;
      }
      this[_firstRegisteredCallback] = null;
      this[_currentEvent] = null;
    }
  };
  (pointer_signal_resolver.PointerSignalResolver.new = function() {
    this[_firstRegisteredCallback] = null;
    this[_currentEvent] = null;
    ;
  }).prototype = pointer_signal_resolver.PointerSignalResolver.prototype;
  dart.addTypeTests(pointer_signal_resolver.PointerSignalResolver);
  dart.addTypeCaches(pointer_signal_resolver.PointerSignalResolver);
  dart.setMethodSignature(pointer_signal_resolver.PointerSignalResolver, () => ({
    __proto__: dart.getMethods(pointer_signal_resolver.PointerSignalResolver.__proto__),
    register: dart.fnType(dart.void, [events.PointerSignalEvent, dart.fnType(dart.void, [events.PointerSignalEvent])]),
    resolve: dart.fnType(dart.void, [events.PointerSignalEvent])
  }));
  dart.setLibraryUri(pointer_signal_resolver.PointerSignalResolver, L1);
  dart.setFieldSignature(pointer_signal_resolver.PointerSignalResolver, () => ({
    __proto__: dart.getFields(pointer_signal_resolver.PointerSignalResolver.__proto__),
    [_firstRegisteredCallback]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [events.PointerSignalEvent]))),
    [_currentEvent]: dart.fieldType(dart.nullable(events.PointerSignalEvent))
  }));
  pointer_signal_resolver._isSameEvent = function _isSameEvent(event1, event2) {
    let t1, t1$;
    if (event1 == null) dart.nullFailed(L0, 14, 38, "event1");
    if (event2 == null) dart.nullFailed(L0, 14, 65, "event2");
    return dart.equals((t1 = event1.original, t1 == null ? event1 : t1), (t1$ = event2.original, t1$ == null ? event2 : t1$));
  };
  dart.trackLibraries("packages/flutter/src/gestures/pointer_signal_resolver.dart", {
    "package:flutter/src/gestures/pointer_signal_resolver.dart": pointer_signal_resolver
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["pointer_signal_resolver.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;aAiCmC,OAAqC;UAArC;UAAqC;AACpE,YAAO,AAAM,KAAD,IAAI;AAChB,YAAO,AAAS,QAAD,IAAI;AACnB,YAAO,AAAc,AAAQ,uBAAL,kBAAQ,qCAA0B,eAAb,sBAAgB,KAAK;AAClE,UAAI,kCAA4B;AAC9B;;AAEmB,MAArB,sBAAgB,KAAK;AACc,MAAnC,iCAA2B,QAAQ;IACrC;;UAOgC;AAC9B,UAAI,AAAyB,kCAAG;AAC9B,cAAO,AAAc,uBAAG;AACxB;;AAEF,qBAAO,qCAA0B,eAAb,sBAAgB,KAAK;AACzC;AAC2C,QAAjB,AAAC,eAAzB,gCAAuC,eAAb;;YACnB;YAAW;AAAlB;AACsB;AACtB,yBAAO,AAKN;AAFE,YAFD,YAAY;AACV,oBAAM,oDAAwC,SAAS,KAAK,UAA8B;YAC3F;AACD,kBAAO;;AAQP,UANW,oCAAY,mDACZ,SAAS,SACb,KAAK,WACH,4BACA,oCAAiB,+DACJ,SAAS;;;;AAGJ,MAA/B,iCAA2B;AACP,MAApB,sBAAgB;IAClB;;;IA/C+B;IAEX;;EA8CtB;;;;;;;;;;;;;;+DA/DqC,QAA2B;;QAA3B;QAA2B;AAC9D,UAAmC,cAAX,KAAhB,AAAO,MAAD,iBAAC,OAAY,MAAM,SAAsB,MAAhB,AAAO,MAAD,kBAAC,OAAY,MAAM;EAClE","file":"../../../../../../../../../../packages/flutter/src/gestures/pointer_signal_resolver.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__pointer_signal_resolver: pointer_signal_resolver
  };
}));

//# sourceMappingURL=pointer_signal_resolver.dart.lib.js.map
