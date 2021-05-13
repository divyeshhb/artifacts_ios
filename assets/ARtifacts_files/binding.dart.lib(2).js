define(['dart_sdk', 'packages/flutter/src/gestures/resampler.dart', 'packages/flutter/src/scheduler/binding.dart', 'packages/flutter/src/gestures/debug.dart', 'packages/flutter/src/foundation/print.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/gestures/pointer_router.dart', 'packages/flutter/src/gestures/arena.dart', 'packages/flutter/src/gestures/pointer_signal_resolver.dart', 'packages/flutter/src/gestures/hit_test.dart', 'packages/flutter/src/gestures/converter.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/binding.dart'], (function load__packages__flutter__src__gestures__binding_dart(dart_sdk, packages__flutter__src__gestures__resampler$46dart, packages__flutter__src__scheduler__binding$46dart, packages__flutter__src__gestures__debug$46dart, packages__flutter__src__foundation__print$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__gestures__pointer_router$46dart, packages__flutter__src__gestures__arena$46dart, packages__flutter__src__gestures__pointer_signal_resolver$46dart, packages__flutter__src__gestures__hit_test$46dart, packages__flutter__src__gestures__converter$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__binding$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const resampler$ = packages__flutter__src__gestures__resampler$46dart.src__gestures__resampler;
  const binding = packages__flutter__src__scheduler__binding$46dart.src__scheduler__binding;
  const debug = packages__flutter__src__gestures__debug$46dart.src__gestures__debug;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const pointer_router = packages__flutter__src__gestures__pointer_router$46dart.src__gestures__pointer_router;
  const arena = packages__flutter__src__gestures__arena$46dart.src__gestures__arena;
  const pointer_signal_resolver = packages__flutter__src__gestures__pointer_signal_resolver$46dart.src__gestures__pointer_signal_resolver;
  const hit_test = packages__flutter__src__gestures__hit_test$46dart.src__gestures__hit_test;
  const converter = packages__flutter__src__gestures__converter$46dart.src__gestures__converter;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const binding$ = packages__flutter__src__foundation__binding$46dart.src__foundation__binding;
  var binding$0 = Object.create(dart.library);
  var $putIfAbsent = dartx.putIfAbsent;
  var $values = dartx.values;
  var $removeWhere = dartx.removeWhere;
  var $isNotEmpty = dartx.isNotEmpty;
  var $clear = dartx.clear;
  var $isEmpty = dartx.isEmpty;
  var $containsKey = dartx.containsKey;
  var $_set = dartx._set;
  var $remove = dartx.remove;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var IdentityMapOfint$PointerEventResampler = () => (IdentityMapOfint$PointerEventResampler = dart.constFn(_js_helper.IdentityMap$(core.int, resampler$.PointerEventResampler)))();
  var VoidToPointerEventResampler = () => (VoidToPointerEventResampler = dart.constFn(dart.fnType(resampler$.PointerEventResampler, [])))();
  var intAndPointerEventResamplerTobool = () => (intAndPointerEventResamplerTobool = dart.constFn(dart.fnType(core.bool, [core.int, resampler$.PointerEventResampler])))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var DurationTovoid = () => (DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))();
  var ListQueueOfPointerEvent = () => (ListQueueOfPointerEvent = dart.constFn(collection.ListQueue$(events.PointerEvent)))();
  var IdentityMapOfint$HitTestResult = () => (IdentityMapOfint$HitTestResult = dart.constFn(_js_helper.IdentityMap$(core.int, hit_test.HitTestResult)))();
  var DiagnosticsPropertyOfPointerEvent = () => (DiagnosticsPropertyOfPointerEvent = dart.constFn(diagnostics.DiagnosticsProperty$(events.PointerEvent)))();
  var SyncIterableOfDiagnosticsNode = () => (SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(diagnostics.DiagnosticsNode)))();
  var IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics.DiagnosticsNode)))();
  var VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  var DiagnosticsPropertyOfHitTestTarget = () => (DiagnosticsPropertyOfHitTestTarget = dart.constFn(diagnostics.DiagnosticsProperty$(hit_test.HitTestTarget)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/gestures/binding.dart";
  var L1 = "package:flutter/src/gestures/binding.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: -38000
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 16667
      });
    }
  }, false);
  var _resamplers = dart.privateName(binding$0, "_resamplers");
  var _frameCallbackScheduled = dart.privateName(binding$0, "_frameCallbackScheduled");
  var _frameTime = dart.privateName(binding$0, "_frameTime");
  var _lastSampleTime = dart.privateName(binding$0, "_lastSampleTime");
  var _lastEventTime = dart.privateName(binding$0, "_lastEventTime");
  var _handlePointerEvent$ = dart.privateName(binding$0, "_handlePointerEvent");
  var _handleSampleTimeChanged$ = dart.privateName(binding$0, "_handleSampleTimeChanged");
  binding$0._Resampler = class _Resampler extends core.Object {
    addOrDispatch(event) {
      let t0;
      if (event == null) dart.nullFailed(L0, 55, 35, "event");
      let scheduler = binding.SchedulerBinding.instance;
      if (!(scheduler != null)) dart.assertFailed(null, L0, 57, 12, "scheduler != null");
      if (dart.equals(event.kind, ui.PointerDeviceKind.touch)) {
        this[_lastEventTime] = event.timeStamp;
        let resampler = this[_resamplers][$putIfAbsent](event.device, dart.fn(() => new resampler$.PointerEventResampler.new(), VoidToPointerEventResampler()));
        resampler.addEvent(event);
      } else {
        t0 = event;
        this[_handlePointerEvent$](t0);
      }
    }
    sample(samplingOffset, samplingInterval) {
      let t0;
      if (samplingOffset == null) dart.nullFailed(L0, 81, 24, "samplingOffset");
      if (samplingInterval == null) dart.nullFailed(L0, 81, 49, "samplingInterval");
      let scheduler = binding.SchedulerBinding.instance;
      if (!(scheduler != null)) dart.assertFailed(null, L0, 83, 12, "scheduler != null");
      let sampleTime = this[_frameTime]['+'](samplingOffset);
      let nextSampleTime = sampleTime['+'](samplingInterval);
      for (let resampler of this[_resamplers][$values]) {
        resampler.sample(sampleTime, nextSampleTime, this[_handlePointerEvent$]);
      }
      this[_resamplers][$removeWhere](dart.fn((key, resampler) => {
        if (key == null) dart.nullFailed(L0, 102, 34, "key");
        if (resampler == null) dart.nullFailed(L0, 102, 61, "resampler");
        return !dart.test(resampler.hasPendingEvents) && !dart.test(resampler.isDown);
      }, intAndPointerEventResamplerTobool()));
      this[_lastSampleTime] = sampleTime;
      if (!dart.test(this[_frameCallbackScheduled]) && dart.test(this[_resamplers][$isNotEmpty])) {
        this[_frameCallbackScheduled] = true;
        t0 = scheduler;
        t0 == null ? null : t0.scheduleFrameCallback(dart.fn(_ => {
          if (_ == null) dart.nullFailed(L0, 112, 41, "_");
          this[_frameCallbackScheduled] = false;
          this[_frameTime] = scheduler.currentSystemFrameTimeStamp;
          if (!dart.test(dart.fn(() => {
            if (dart.test(debug.debugPrintResamplingMargin)) {
              let resamplingMargin = this[_lastEventTime]['-'](this[_lastSampleTime]);
              print.debugPrint(dart.str(resamplingMargin));
            }
            return true;
          }, VoidTobool())())) dart.assertFailed(null, L0, 118, 16, "() {\n          if (debugPrintResamplingMargin) {\n            final Duration resamplingMargin = _lastEventTime - _lastSampleTime;\n              debugPrint('$resamplingMargin');\n          }\n          return true;\n        }()");
          this[_handleSampleTimeChanged$]();
        }, DurationTovoid()));
      }
    }
    stop() {
      for (let resampler of this[_resamplers][$values]) {
        resampler.stop(this[_handlePointerEvent$]);
      }
      this[_resamplers][$clear]();
    }
  };
  (binding$0._Resampler.new = function(_handlePointerEvent, _handleSampleTimeChanged) {
    if (_handlePointerEvent == null) dart.nullFailed(L0, 30, 19, "_handlePointerEvent");
    if (_handleSampleTimeChanged == null) dart.nullFailed(L0, 30, 45, "_handleSampleTimeChanged");
    this[_resamplers] = new (IdentityMapOfint$PointerEventResampler()).new();
    this[_frameCallbackScheduled] = false;
    this[_frameTime] = core.Duration.zero;
    this[_lastSampleTime] = core.Duration.zero;
    this[_lastEventTime] = core.Duration.zero;
    this[_handlePointerEvent$] = _handlePointerEvent;
    this[_handleSampleTimeChanged$] = _handleSampleTimeChanged;
    ;
  }).prototype = binding$0._Resampler.prototype;
  dart.addTypeTests(binding$0._Resampler);
  dart.addTypeCaches(binding$0._Resampler);
  dart.setMethodSignature(binding$0._Resampler, () => ({
    __proto__: dart.getMethods(binding$0._Resampler.__proto__),
    addOrDispatch: dart.fnType(dart.void, [events.PointerEvent]),
    sample: dart.fnType(dart.void, [core.Duration, core.Duration]),
    stop: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(binding$0._Resampler, L1);
  dart.setFieldSignature(binding$0._Resampler, () => ({
    __proto__: dart.getFields(binding$0._Resampler.__proto__),
    [_resamplers]: dart.finalFieldType(core.Map$(core.int, resampler$.PointerEventResampler)),
    [_frameCallbackScheduled]: dart.fieldType(core.bool),
    [_frameTime]: dart.fieldType(core.Duration),
    [_lastSampleTime]: dart.fieldType(core.Duration),
    [_lastEventTime]: dart.fieldType(core.Duration),
    [_handlePointerEvent$]: dart.finalFieldType(dart.fnType(dart.void, [events.PointerEvent])),
    [_handleSampleTimeChanged$]: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  var _pendingPointerEvents = dart.privateName(binding$0, "_pendingPointerEvents");
  var _hitTests = dart.privateName(binding$0, "_hitTests");
  var __GestureBinding__resampler = dart.privateName(binding$0, "_#GestureBinding#_resampler");
  var __GestureBinding__resampler_isSet = dart.privateName(binding$0, "_#GestureBinding#_resampler#isSet");
  var _handlePointerDataPacket = dart.privateName(binding$0, "_handlePointerDataPacket");
  var _flushPointerEventQueue = dart.privateName(binding$0, "_flushPointerEventQueue");
  var _resampler = dart.privateName(binding$0, "_resampler");
  var _handlePointerEventImmediately = dart.privateName(binding$0, "_handlePointerEventImmediately");
  var pointerRouter = dart.privateName(binding$0, "GestureBinding.pointerRouter");
  var gestureArena = dart.privateName(binding$0, "GestureBinding.gestureArena");
  var pointerSignalResolver = dart.privateName(binding$0, "GestureBinding.pointerSignalResolver");
  var resamplingEnabled = dart.privateName(binding$0, "GestureBinding.resamplingEnabled");
  var samplingOffset = dart.privateName(binding$0, "GestureBinding.samplingOffset");
  binding$0.GestureBinding = class GestureBinding extends binding$.BindingBase {
    static get instance() {
      return binding$0.GestureBinding._instance;
    }
  };
  binding$0.GestureBinding[dart.mixinOn] = BindingBase => class GestureBinding extends BindingBase {
    get pointerRouter() {
      return this[pointerRouter];
    }
    set pointerRouter(value) {
      super.pointerRouter = value;
    }
    get gestureArena() {
      return this[gestureArena];
    }
    set gestureArena(value) {
      super.gestureArena = value;
    }
    get pointerSignalResolver() {
      return this[pointerSignalResolver];
    }
    set pointerSignalResolver(value) {
      super.pointerSignalResolver = value;
    }
    get resamplingEnabled() {
      return this[resamplingEnabled];
    }
    set resamplingEnabled(value) {
      this[resamplingEnabled] = value;
    }
    get samplingOffset() {
      return this[samplingOffset];
    }
    set samplingOffset(value) {
      this[samplingOffset] = value;
    }
    initInstances() {
      super.initInstances();
      binding$0.GestureBinding._instance = this;
      this.window.onPointerDataPacket = dart.bind(this, _handlePointerDataPacket);
    }
    unlocked() {
      super.unlocked();
      this[_flushPointerEventQueue]();
    }
    [_handlePointerDataPacket](packet) {
      if (packet == null) dart.nullFailed(L0, 216, 54, "packet");
      this[_pendingPointerEvents].addAll(converter.PointerEventConverter.expand(packet.data, this.window.devicePixelRatio));
      if (!dart.test(this.locked)) this[_flushPointerEventQueue]();
    }
    cancelPointer(pointer) {
      if (pointer == null) dart.nullFailed(L0, 228, 26, "pointer");
      if (dart.test(this[_pendingPointerEvents][$isEmpty]) && !dart.test(this.locked)) async.scheduleMicrotask(dart.bind(this, _flushPointerEventQueue));
      this[_pendingPointerEvents].addFirst(new events.PointerCancelEvent.new({pointer: pointer}));
    }
    [_flushPointerEventQueue]() {
      if (!!dart.test(this.locked)) dart.assertFailed(null, L0, 235, 12, "!locked");
      while (dart.test(this[_pendingPointerEvents][$isNotEmpty]))
        this.handlePointerEvent(this[_pendingPointerEvents].removeFirst());
    }
    handlePointerEvent(event) {
      if (event == null) dart.nullFailed(L0, 268, 40, "event");
      if (!!dart.test(this.locked)) dart.assertFailed(null, L0, 269, 12, "!locked");
      if (dart.test(this.resamplingEnabled)) {
        this[_resampler].addOrDispatch(event);
        this[_resampler].sample(this.samplingOffset, binding$0._samplingInterval);
        return;
      }
      this[_resampler].stop();
      this[_handlePointerEventImmediately](event);
    }
    [_handlePointerEventImmediately](event) {
      if (event == null) dart.nullFailed(L0, 283, 52, "event");
      let hitTestResult = null;
      if (events.PointerDownEvent.is(event) || events.PointerSignalEvent.is(event) || events.PointerHoverEvent.is(event)) {
        if (!!dart.test(this[_hitTests][$containsKey](event.pointer))) dart.assertFailed(null, L0, 286, 14, "!_hitTests.containsKey(event.pointer)");
        hitTestResult = new hit_test.HitTestResult.new();
        this.hitTest(hitTestResult, event.position);
        if (events.PointerDownEvent.is(event)) {
          this[_hitTests][$_set](event.pointer, hitTestResult);
        }
        if (!dart.test(dart.fn(() => {
          if (dart.test(debug.debugPrintHitTestResults)) print.debugPrint(dart.str(event) + ": " + dart.str(hitTestResult));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 292, 14, "() {\n        if (debugPrintHitTestResults)\n          debugPrint('$event: $hitTestResult');\n        return true;\n      }()");
      } else if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) {
        hitTestResult = this[_hitTests][$remove](event.pointer);
      } else if (dart.test(event.down)) {
        hitTestResult = this[_hitTests][$_get](event.pointer);
      }
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug.debugPrintMouseHoverEvents) && events.PointerHoverEvent.is(event)) print.debugPrint(dart.str(event));
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 307, 12, "() {\n      if (debugPrintMouseHoverEvents && event is PointerHoverEvent)\n        debugPrint('$event');\n      return true;\n    }()");
      if (hitTestResult != null || events.PointerAddedEvent.is(event) || events.PointerRemovedEvent.is(event)) {
        if (!(event.position != null)) dart.assertFailed(null, L0, 315, 14, "event.position != null");
        this.dispatchEvent(event, hitTestResult);
      }
    }
    hitTest(result, position) {
      if (result == null) dart.nullFailed(L0, 322, 30, "result");
      if (position == null) dart.nullFailed(L0, 322, 45, "position");
      result.add(new hit_test.HitTestEntry.new(this));
    }
    dispatchEvent(event, hitTestResult) {
      if (event == null) dart.nullFailed(L0, 335, 35, "event");
      if (!!dart.test(this.locked)) dart.assertFailed(null, L0, 336, 12, "!locked");
      if (hitTestResult == null) {
        if (!(events.PointerAddedEvent.is(event) || events.PointerRemovedEvent.is(event))) dart.assertFailed(null, L0, 341, 14, "event is PointerAddedEvent || event is PointerRemovedEvent");
        try {
          this.pointerRouter.route(event);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            assertions.FlutterError.reportError(new binding$0.FlutterErrorDetailsForPointerEventDispatcher.new({exception: exception, stack: stack, library: "gesture library", context: new assertions.ErrorDescription.new("while dispatching a non-hit-tested pointer event"), event: event, hitTestEntry: null, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new(function*() {
                yield new (DiagnosticsPropertyOfPointerEvent()).new("Event", event, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
              }), VoidToIterableOfDiagnosticsNode())}));
          } else
            throw e;
        }
        return;
      }
      for (let entry of hitTestResult.path) {
        try {
          entry.target.handleEvent(event.transformed(entry.transform), entry);
        } catch (e$) {
          let exception = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          if (core.Object.is(exception)) {
            assertions.FlutterError.reportError(new binding$0.FlutterErrorDetailsForPointerEventDispatcher.new({exception: exception, stack: stack, library: "gesture library", context: new assertions.ErrorDescription.new("while dispatching a pointer event"), event: event, hitTestEntry: entry, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new(function*() {
                yield new (DiagnosticsPropertyOfPointerEvent()).new("Event", event, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
                yield new (DiagnosticsPropertyOfHitTestTarget()).new("Target", entry.target, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
              }), VoidToIterableOfDiagnosticsNode())}));
          } else
            throw e$;
        }
      }
    }
    handleEvent(event, entry) {
      if (event == null) dart.nullFailed(L0, 380, 33, "event");
      if (entry == null) dart.nullFailed(L0, 380, 53, "entry");
      this.pointerRouter.route(event);
      if (events.PointerDownEvent.is(event)) {
        this.gestureArena.close(event.pointer);
      } else if (events.PointerUpEvent.is(event)) {
        this.gestureArena.sweep(event.pointer);
      } else if (events.PointerSignalEvent.is(event)) {
        this.pointerSignalResolver.resolve(event);
      }
    }
    resetGestureBinding() {
      this[_hitTests][$clear]();
    }
    [_handleSampleTimeChanged$]() {
      if (!dart.test(this.locked)) {
        if (dart.test(this.resamplingEnabled)) {
          this[_resampler].sample(this.samplingOffset, binding$0._samplingInterval);
        } else {
          this[_resampler].stop();
        }
      }
    }
    get [_resampler]() {
      let t3;
      if (!dart.test(this[__GestureBinding__resampler_isSet])) {
        let t2 = new binding$0._Resampler.new(dart.bind(this, _handlePointerEventImmediately), dart.bind(this, _handleSampleTimeChanged$));
        if (dart.test(this[__GestureBinding__resampler_isSet])) dart.throw(new _internal.LateError.fieldADI("_resampler"));
        this[__GestureBinding__resampler] = t2;
        this[__GestureBinding__resampler_isSet] = true;
      }
      t3 = this[__GestureBinding__resampler];
      return t3;
    }
  };
  (binding$0.GestureBinding[dart.mixinNew] = function() {
    this[_pendingPointerEvents] = new (ListQueueOfPointerEvent()).new();
    this[pointerRouter] = new pointer_router.PointerRouter.new();
    this[gestureArena] = new arena.GestureArenaManager.new();
    this[pointerSignalResolver] = new pointer_signal_resolver.PointerSignalResolver.new();
    this[_hitTests] = new (IdentityMapOfint$HitTestResult()).new();
    this[__GestureBinding__resampler] = null;
    this[__GestureBinding__resampler_isSet] = false;
    this[resamplingEnabled] = false;
    this[samplingOffset] = binding$0._defaultSamplingOffset;
  }).prototype = binding$0.GestureBinding.prototype;
  dart.addTypeTests(binding$0.GestureBinding);
  dart.addTypeCaches(binding$0.GestureBinding);
  binding$0.GestureBinding[dart.implements] = () => [hit_test.HitTestable, hit_test.HitTestDispatcher, hit_test.HitTestTarget, binding$.BindingBase];
  dart.setMethodSignature(binding$0.GestureBinding, () => ({
    __proto__: dart.getMethods(binding$0.GestureBinding.__proto__),
    [_handlePointerDataPacket]: dart.fnType(dart.void, [ui.PointerDataPacket]),
    cancelPointer: dart.fnType(dart.void, [core.int]),
    [_flushPointerEventQueue]: dart.fnType(dart.void, []),
    handlePointerEvent: dart.fnType(dart.void, [events.PointerEvent]),
    [_handlePointerEventImmediately]: dart.fnType(dart.void, [events.PointerEvent]),
    hitTest: dart.fnType(dart.void, [hit_test.HitTestResult, ui.Offset]),
    dispatchEvent: dart.fnType(dart.void, [events.PointerEvent, dart.nullable(hit_test.HitTestResult)]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent, hit_test.HitTestEntry]),
    resetGestureBinding: dart.fnType(dart.void, []),
    [_handleSampleTimeChanged$]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(binding$0.GestureBinding, () => ({
    __proto__: dart.getGetters(binding$0.GestureBinding.__proto__),
    [_resampler]: binding$0._Resampler
  }));
  dart.setLibraryUri(binding$0.GestureBinding, L1);
  dart.setFieldSignature(binding$0.GestureBinding, () => ({
    __proto__: dart.getFields(binding$0.GestureBinding.__proto__),
    [_pendingPointerEvents]: dart.finalFieldType(collection.Queue$(events.PointerEvent)),
    pointerRouter: dart.finalFieldType(pointer_router.PointerRouter),
    gestureArena: dart.finalFieldType(arena.GestureArenaManager),
    pointerSignalResolver: dart.finalFieldType(pointer_signal_resolver.PointerSignalResolver),
    [_hitTests]: dart.finalFieldType(core.Map$(core.int, hit_test.HitTestResult)),
    [__GestureBinding__resampler]: dart.fieldType(dart.nullable(binding$0._Resampler)),
    [__GestureBinding__resampler_isSet]: dart.fieldType(core.bool),
    resamplingEnabled: dart.fieldType(core.bool),
    samplingOffset: dart.fieldType(core.Duration)
  }));
  dart.defineLazy(binding$0.GestureBinding, {
    /*binding$0.GestureBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  }, false);
  var event$ = dart.privateName(binding$0, "FlutterErrorDetailsForPointerEventDispatcher.event");
  var hitTestEntry$ = dart.privateName(binding$0, "FlutterErrorDetailsForPointerEventDispatcher.hitTestEntry");
  binding$0.FlutterErrorDetailsForPointerEventDispatcher = class FlutterErrorDetailsForPointerEventDispatcher extends assertions.FlutterErrorDetails {
    get event() {
      return this[event$];
    }
    set event(value) {
      super.event = value;
    }
    get hitTestEntry() {
      return this[hitTestEntry$];
    }
    set hitTestEntry(value) {
      super.hitTestEntry = value;
    }
  };
  (binding$0.FlutterErrorDetailsForPointerEventDispatcher.new = function(opts) {
    let exception = opts && 'exception' in opts ? opts.exception : null;
    if (exception == null) dart.nullFailed(L0, 448, 21, "exception");
    let stack = opts && 'stack' in opts ? opts.stack : null;
    let library = opts && 'library' in opts ? opts.library : null;
    let context = opts && 'context' in opts ? opts.context : null;
    let event = opts && 'event' in opts ? opts.event : null;
    let hitTestEntry = opts && 'hitTestEntry' in opts ? opts.hitTestEntry : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let silent = opts && 'silent' in opts ? opts.silent : false;
    if (silent == null) dart.nullFailed(L0, 455, 10, "silent");
    this[event$] = event;
    this[hitTestEntry$] = hitTestEntry;
    binding$0.FlutterErrorDetailsForPointerEventDispatcher.__proto__.new.call(this, {exception: exception, stack: stack, library: library, context: context, informationCollector: informationCollector, silent: silent});
    ;
  }).prototype = binding$0.FlutterErrorDetailsForPointerEventDispatcher.prototype;
  dart.addTypeTests(binding$0.FlutterErrorDetailsForPointerEventDispatcher);
  dart.addTypeCaches(binding$0.FlutterErrorDetailsForPointerEventDispatcher);
  dart.setLibraryUri(binding$0.FlutterErrorDetailsForPointerEventDispatcher, L1);
  dart.setFieldSignature(binding$0.FlutterErrorDetailsForPointerEventDispatcher, () => ({
    __proto__: dart.getFields(binding$0.FlutterErrorDetailsForPointerEventDispatcher.__proto__),
    event: dart.finalFieldType(dart.nullable(events.PointerEvent)),
    hitTestEntry: dart.finalFieldType(dart.nullable(hit_test.HitTestEntry))
  }));
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  var C1;
  dart.defineLazy(binding$0, {
    /*binding$0._defaultSamplingOffset*/get _defaultSamplingOffset() {
      return C0 || CT.C0;
    },
    /*binding$0._samplingInterval*/get _samplingInterval() {
      return C1 || CT.C1;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/gestures/binding.dart", {
    "package:flutter/src/gestures/binding.dart": binding$0
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["binding.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/gestures/binding.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__binding: binding$0
  };
}));

//# sourceMappingURL=binding.dart.lib.js.map
