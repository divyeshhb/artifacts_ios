define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/collection/src/priority_queue.dart', 'packages/flutter/src/foundation/print.dart', 'packages/flutter/src/scheduler/debug.dart', 'packages/flutter/src/foundation/binding.dart', 'packages/flutter/src/scheduler/priority.dart'], (function load__packages__flutter__src__scheduler__binding_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__collection__src__priority_queue$46dart, packages__flutter__src__foundation__print$46dart, packages__flutter__src__scheduler__debug$46dart, packages__flutter__src__foundation__binding$46dart, packages__flutter__src__scheduler__priority$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const developer = dart_sdk.developer;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const debug = packages__flutter__src__foundation__debug$46dart.src__foundation__debug;
  const priority_queue = packages__collection__src__priority_queue$46dart.src__priority_queue;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  const debug$ = packages__flutter__src__scheduler__debug$46dart.src__scheduler__debug;
  const binding = packages__flutter__src__foundation__binding$46dart.src__foundation__binding;
  const priority$ = packages__flutter__src__scheduler__priority$46dart.src__scheduler__priority;
  var binding$ = Object.create(dart.library);
  var $add = dartx.add;
  var $length = dartx.length;
  var $contains = dartx.contains;
  var $remove = dartx.remove;
  var $isEmpty = dartx.isEmpty;
  var $compareTo = dartx.compareTo;
  var $_set = dartx._set;
  var $keys = dartx.keys;
  var $_get = dartx._get;
  var $trimRight = dartx.trimRight;
  var $split = dartx.split;
  var $join = dartx.join;
  var $round = dartx.round;
  var $toString = dartx.toString;
  var $padRight = dartx.padRight;
  var $padLeft = dartx.padLeft;
  var $forEach = dartx.forEach;
  var $clear = dartx.clear;
  var $times = dartx['*'];
  dart._checkModuleNullSafetyMode(false);
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var SchedulerPhaseL = () => (SchedulerPhaseL = dart.constFn(dart.legacy(binding$.SchedulerPhase)))();
  var ListOfFrameTiming = () => (ListOfFrameTiming = dart.constFn(core.List$(ui.FrameTiming)))();
  var ListOfFrameTimingTovoid = () => (ListOfFrameTimingTovoid = dart.constFn(dart.fnType(dart.void, [ListOfFrameTiming()])))();
  var JSArrayOfListOfFrameTimingTovoid = () => (JSArrayOfListOfFrameTimingTovoid = dart.constFn(_interceptors.JSArray$(ListOfFrameTimingTovoid())))();
  var __Tobool = () => (__Tobool = dart.constFn(dart.fnType(core.bool, [], {}, {priority: core.int, scheduler: binding$.SchedulerBinding})))();
  var HeapPriorityQueueOf_TaskEntry = () => (HeapPriorityQueueOf_TaskEntry = dart.constFn(priority_queue.HeapPriorityQueue$(binding$._TaskEntry)))();
  var _TaskEntryAnd_TaskEntryToint = () => (_TaskEntryAnd_TaskEntryToint = dart.constFn(dart.fnType(core.int, [binding$._TaskEntry, binding$._TaskEntry])))();
  var IdentityMapOfint$_FrameCallbackEntry = () => (IdentityMapOfint$_FrameCallbackEntry = dart.constFn(_js_helper.IdentityMap$(core.int, binding$._FrameCallbackEntry)))();
  var _IdentityHashSetOfint = () => (_IdentityHashSetOfint = dart.constFn(collection._IdentityHashSet$(core.int)))();
  var DurationTovoid = () => (DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))();
  var JSArrayOfDurationTovoid = () => (JSArrayOfDurationTovoid = dart.constFn(_interceptors.JSArray$(DurationTovoid())))();
  var ListOfListOfFrameTimingTovoid = () => (ListOfListOfFrameTimingTovoid = dart.constFn(core.List$(ListOfFrameTimingTovoid())))();
  var DiagnosticsPropertyOfListOfFrameTimingTovoid = () => (DiagnosticsPropertyOfListOfFrameTimingTovoid = dart.constFn(diagnostics.DiagnosticsProperty$(ListOfFrameTimingTovoid())))();
  var SyncIterableOfDiagnosticsNode = () => (SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(diagnostics.DiagnosticsNode)))();
  var IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics.DiagnosticsNode)))();
  var VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  var FutureOfdouble = () => (FutureOfdouble = dart.constFn(async.Future$(core.double)))();
  var VoidToFutureOfdouble = () => (VoidToFutureOfdouble = dart.constFn(dart.fnType(FutureOfdouble(), [])))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var doubleToFutureOfvoid = () => (doubleToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [core.double])))();
  var LinkedHashMapOfint$_FrameCallbackEntry = () => (LinkedHashMapOfint$_FrameCallbackEntry = dart.constFn(collection.LinkedHashMap$(core.int, binding$._FrameCallbackEntry)))();
  var CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  var intAnd_FrameCallbackEntryTovoid = () => (intAnd_FrameCallbackEntryTovoid = dart.constFn(dart.fnType(dart.void, [core.int, binding$._FrameCallbackEntry])))();
  var ListOfDurationTovoid = () => (ListOfDurationTovoid = dart.constFn(core.List$(DurationTovoid())))();
  var IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/scheduler/binding.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/scheduler/binding.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: binding$.SchedulerPhase.prototype,
        [_name$]: "SchedulerPhase.idle",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: binding$.SchedulerPhase.prototype,
        [_name$]: "SchedulerPhase.transientCallbacks",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: binding$.SchedulerPhase.prototype,
        [_name$]: "SchedulerPhase.midFrameMicrotasks",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: binding$.SchedulerPhase.prototype,
        [_name$]: "SchedulerPhase.persistentCallbacks",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: binding$.SchedulerPhase.prototype,
        [_name$]: "SchedulerPhase.postFrameCallbacks",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], SchedulerPhaseL());
    },
    get C6() {
      return C6 = dart.fn(binding$.defaultSchedulingStrategy, __Tobool());
    },
    get C7() {
      return C7 = dart.fn(binding$.SchedulerBinding._taskSorter, _TaskEntryAnd_TaskEntryToint());
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.AppLifecycleState.prototype,
        [_name]: "AppLifecycleState.resumed",
        index: 0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.AppLifecycleState.prototype,
        [_name]: "AppLifecycleState.inactive",
        index: 1
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.AppLifecycleState.prototype,
        [_name]: "AppLifecycleState.paused",
        index: 2
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.AppLifecycleState.prototype,
        [_name]: "AppLifecycleState.detached",
        index: 3
      });
    }
  }, false);
  var ___TaskEntry_debugStack = dart.privateName(binding$, "_#_TaskEntry#debugStack");
  var ___TaskEntry_debugStack_isSet = dart.privateName(binding$, "_#_TaskEntry#debugStack#isSet");
  const _is__TaskEntry_default = Symbol('_is__TaskEntry_default');
  binding$._TaskEntry$ = dart.generic(T => {
    var CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    class _TaskEntry extends core.Object {
      get debugStack() {
        let t0;
        return dart.test(this[___TaskEntry_debugStack_isSet]) ? (t0 = this[___TaskEntry_debugStack], t0) : dart.throw(new _internal.LateError.fieldNI("debugStack"));
      }
      set debugStack(t0) {
        if (t0 == null) dart.nullFailed(L0, 72, 19, "null");
        this[___TaskEntry_debugStack_isSet] = true;
        this[___TaskEntry_debugStack] = t0;
      }
      run() {
        let t1;
        if (!false) {
          developer.Timeline.timeSync(core.Null, (t1 = this.debugLabel, t1 == null ? "Scheduled Task" : t1), dart.fn(() => {
            this.completer.complete(this.task());
          }, VoidToNull()), {flow: this.flow != null ? developer.Flow.step(dart.nullCheck(this.flow).id) : null});
        } else {
          this.completer.complete(this.task());
        }
      }
    }
    (_TaskEntry.new = function(task, priority, debugLabel, flow) {
      if (task == null) dart.nullFailed(L0, 61, 19, "task");
      if (priority == null) dart.nullFailed(L0, 61, 30, "priority");
      this[___TaskEntry_debugStack] = null;
      this[___TaskEntry_debugStack_isSet] = false;
      this.completer = CompleterOfT().new();
      this.task = task;
      this.priority = priority;
      this.debugLabel = debugLabel;
      this.flow = flow;
      if (!dart.test(dart.fn(() => {
        this.debugStack = core.StackTrace.current;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 62, 12, "() {\n      debugStack = StackTrace.current;\n      return true;\n    }()");
    }).prototype = _TaskEntry.prototype;
    dart.addTypeTests(_TaskEntry);
    _TaskEntry.prototype[_is__TaskEntry_default] = true;
    dart.addTypeCaches(_TaskEntry);
    dart.setMethodSignature(_TaskEntry, () => ({
      __proto__: dart.getMethods(_TaskEntry.__proto__),
      run: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_TaskEntry, () => ({
      __proto__: dart.getGetters(_TaskEntry.__proto__),
      debugStack: core.StackTrace
    }));
    dart.setSetterSignature(_TaskEntry, () => ({
      __proto__: dart.getSetters(_TaskEntry.__proto__),
      debugStack: core.StackTrace
    }));
    dart.setLibraryUri(_TaskEntry, L1);
    dart.setFieldSignature(_TaskEntry, () => ({
      __proto__: dart.getFields(_TaskEntry.__proto__),
      task: dart.finalFieldType(dart.fnType(T, [])),
      priority: dart.finalFieldType(core.int),
      debugLabel: dart.finalFieldType(dart.nullable(core.String)),
      flow: dart.finalFieldType(dart.nullable(developer.Flow)),
      [___TaskEntry_debugStack]: dart.fieldType(dart.nullable(core.StackTrace)),
      [___TaskEntry_debugStack_isSet]: dart.fieldType(core.bool),
      completer: dart.finalFieldType(async.Completer$(T))
    }));
    return _TaskEntry;
  });
  binding$._TaskEntry = binding$._TaskEntry$();
  dart.addTypeTests(binding$._TaskEntry, _is__TaskEntry_default);
  binding$._FrameCallbackEntry = class _FrameCallbackEntry extends core.Object {};
  (binding$._FrameCallbackEntry.new = function(callback, opts) {
    if (callback == null) dart.nullFailed(L0, 91, 28, "callback");
    let rescheduling = opts && 'rescheduling' in opts ? opts.rescheduling : false;
    if (rescheduling == null) dart.nullFailed(L0, 91, 45, "rescheduling");
    this.debugStack = null;
    this.callback = callback;
    if (!dart.test(dart.fn(() => {
      if (dart.test(rescheduling)) {
        if (!dart.test(dart.fn(() => {
          if (binding$._FrameCallbackEntry.debugCurrentCallbackStack == null) {
            dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("scheduleFrameCallback called with rescheduling true, but no callback is in scope."), new assertions.ErrorDescription.new("The \"rescheduling\" argument should only be set to true if the " + "callback is being reregistered from within the callback itself, " + "and only then if the callback itself is entirely synchronous."), new assertions.ErrorHint.new("If this is the initial registration of the callback, or if the " + "callback is asynchronous, then do not use the \"rescheduling\" " + "argument.")])));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 94, 16, "() {\n          if (debugCurrentCallbackStack == null) {\n            throw FlutterError.fromParts(<DiagnosticsNode>[\n              ErrorSummary('scheduleFrameCallback called with rescheduling true, but no callback is in scope.'),\n              ErrorDescription(\n                'The \"rescheduling\" argument should only be set to true if the '\n                'callback is being reregistered from within the callback itself, '\n                'and only then if the callback itself is entirely synchronous.'\n              ),\n              ErrorHint(\n                'If this is the initial registration of the callback, or if the '\n                'callback is asynchronous, then do not use the \"rescheduling\" '\n                'argument.'\n              )\n            ]);\n          }\n          return true;\n        }()");
        this.debugStack = binding$._FrameCallbackEntry.debugCurrentCallbackStack;
      } else {
        this.debugStack = core.StackTrace.current;
      }
      return true;
    }, VoidTobool())())) dart.assertFailed(null, L0, 92, 12, "() {\n      if (rescheduling) {\n        assert(() {\n          if (debugCurrentCallbackStack == null) {\n            throw FlutterError.fromParts(<DiagnosticsNode>[\n              ErrorSummary('scheduleFrameCallback called with rescheduling true, but no callback is in scope.'),\n              ErrorDescription(\n                'The \"rescheduling\" argument should only be set to true if the '\n                'callback is being reregistered from within the callback itself, '\n                'and only then if the callback itself is entirely synchronous.'\n              ),\n              ErrorHint(\n                'If this is the initial registration of the callback, or if the '\n                'callback is asynchronous, then do not use the \"rescheduling\" '\n                'argument.'\n              )\n            ]);\n          }\n          return true;\n        }());\n        debugStack = debugCurrentCallbackStack;\n      } else {\n        // TODO(ianh): trim the frames from this library, so that the call to scheduleFrameCallback is the top one\n        debugStack = StackTrace.current;\n      }\n      return true;\n    }()");
  }).prototype = binding$._FrameCallbackEntry.prototype;
  dart.addTypeTests(binding$._FrameCallbackEntry);
  dart.addTypeCaches(binding$._FrameCallbackEntry);
  dart.setLibraryUri(binding$._FrameCallbackEntry, L1);
  dart.setFieldSignature(binding$._FrameCallbackEntry, () => ({
    __proto__: dart.getFields(binding$._FrameCallbackEntry.__proto__),
    callback: dart.finalFieldType(dart.fnType(dart.void, [core.Duration])),
    debugStack: dart.fieldType(dart.nullable(core.StackTrace))
  }));
  dart.defineLazy(binding$._FrameCallbackEntry, {
    /*binding$._FrameCallbackEntry.debugCurrentCallbackStack*/get debugCurrentCallbackStack() {
      return null;
    },
    set debugCurrentCallbackStack(_) {}
  }, false);
  var _name$ = dart.privateName(binding$, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  binding$.SchedulerPhase = class SchedulerPhase extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (binding$.SchedulerPhase.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 139, 6, "index");
    if (_name == null) dart.nullFailed(L0, 139, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = binding$.SchedulerPhase.prototype;
  dart.addTypeTests(binding$.SchedulerPhase);
  dart.addTypeCaches(binding$.SchedulerPhase);
  dart.setLibraryUri(binding$.SchedulerPhase, L1);
  dart.setFieldSignature(binding$.SchedulerPhase, () => ({
    __proto__: dart.getFields(binding$.SchedulerPhase.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(binding$.SchedulerPhase, ['toString']);
  binding$.SchedulerPhase.idle = C0 || CT.C0;
  binding$.SchedulerPhase.transientCallbacks = C1 || CT.C1;
  binding$.SchedulerPhase.midFrameMicrotasks = C2 || CT.C2;
  binding$.SchedulerPhase.persistentCallbacks = C3 || CT.C3;
  binding$.SchedulerPhase.postFrameCallbacks = C4 || CT.C4;
  binding$.SchedulerPhase.values = C5 || CT.C5;
  var _timingsCallbacks = dart.privateName(binding$, "_timingsCallbacks");
  var _lifecycleState = dart.privateName(binding$, "_lifecycleState");
  var C6;
  var _taskQueue = dart.privateName(binding$, "_taskQueue");
  var C7;
  var _hasRequestedAnEventLoopCallback = dart.privateName(binding$, "_hasRequestedAnEventLoopCallback");
  var _nextFrameCallbackId = dart.privateName(binding$, "_nextFrameCallbackId");
  var _transientCallbacks = dart.privateName(binding$, "_transientCallbacks");
  var _removedIds = dart.privateName(binding$, "_removedIds");
  var _persistentCallbacks = dart.privateName(binding$, "_persistentCallbacks");
  var _postFrameCallbacks = dart.privateName(binding$, "_postFrameCallbacks");
  var _nextFrameCompleter = dart.privateName(binding$, "_nextFrameCompleter");
  var _hasScheduledFrame = dart.privateName(binding$, "_hasScheduledFrame");
  var _schedulerPhase = dart.privateName(binding$, "_schedulerPhase");
  var _framesEnabled = dart.privateName(binding$, "_framesEnabled");
  var _warmUpFrame = dart.privateName(binding$, "_warmUpFrame");
  var _firstRawTimeStampInEpoch = dart.privateName(binding$, "_firstRawTimeStampInEpoch");
  var _epochStart = dart.privateName(binding$, "_epochStart");
  var _lastRawTimeStamp = dart.privateName(binding$, "_lastRawTimeStamp");
  var _currentFrameTimeStamp = dart.privateName(binding$, "_currentFrameTimeStamp");
  var _debugFrameNumber = dart.privateName(binding$, "_debugFrameNumber");
  var _debugBanner = dart.privateName(binding$, "_debugBanner");
  var _ignoreNextEngineDrawFrame = dart.privateName(binding$, "_ignoreNextEngineDrawFrame");
  var _profileFramePostEvent = dart.privateName(binding$, "_profileFramePostEvent");
  var _executeTimingsCallbacks = dart.privateName(binding$, "_executeTimingsCallbacks");
  var _setFramesEnabledState = dart.privateName(binding$, "_setFramesEnabledState");
  var _name = dart.privateName(ui, "_name");
  var C8;
  var C9;
  var C10;
  var C11;
  var _ensureEventLoopCallback = dart.privateName(binding$, "_ensureEventLoopCallback");
  var _runTasks = dart.privateName(binding$, "_runTasks");
  var _handleBeginFrame = dart.privateName(binding$, "_handleBeginFrame");
  var _handleDrawFrame = dart.privateName(binding$, "_handleDrawFrame");
  var _adjustForEpoch = dart.privateName(binding$, "_adjustForEpoch");
  var _invokeFrameCallback = dart.privateName(binding$, "_invokeFrameCallback");
  var schedulingStrategy = dart.privateName(binding$, "SchedulerBinding.schedulingStrategy");
  binding$.SchedulerBinding = class SchedulerBinding extends binding.BindingBase {
    static get instance() {
      return binding$.SchedulerBinding._instance;
    }
    static _taskSorter(e1, e2) {
      if (e1 == null) dart.nullFailed(L0, 371, 47, "e1");
      if (e2 == null) dart.nullFailed(L0, 371, 71, "e2");
      return -e1.priority[$compareTo](e2.priority);
    }
    static debugPrintTransientCallbackRegistrationStack() {
      if (!dart.test(dart.fn(() => {
        if (binding$._FrameCallbackEntry.debugCurrentCallbackStack != null) {
          print.debugPrint("When the current transient callback was registered, this was the stack:");
          print.debugPrint(assertions.FlutterError.defaultStackFilter(dart.toString(assertions.FlutterError.demangleStackTrace(dart.nullCheck(binding$._FrameCallbackEntry.debugCurrentCallbackStack)))[$trimRight]()[$split]("\n"))[$join]("\n"));
        } else {
          print.debugPrint("No transient callback is currently executing.");
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 616, 12, "() {\n      if (_FrameCallbackEntry.debugCurrentCallbackStack != null) {\n        debugPrint('When the current transient callback was registered, this was the stack:');\n        debugPrint(\n          FlutterError.defaultStackFilter(\n            FlutterError.demangleStackTrace(\n              _FrameCallbackEntry.debugCurrentCallbackStack!,\n            ).toString().trimRight().split('\\n')\n          ).join('\\n')\n        );\n      } else {\n        debugPrint('No transient callback is currently executing.');\n      }\n      return true;\n    }()");
    }
    static _debugDescribeTimeStamp(timeStamp, buffer) {
      if (timeStamp == null) dart.nullFailed(L0, 1090, 48, "timeStamp");
      if (buffer == null) dart.nullFailed(L0, 1090, 72, "buffer");
      if (dart.notNull(timeStamp.inDays) > 0) buffer.write(dart.str(timeStamp.inDays) + "d ");
      if (dart.notNull(timeStamp.inHours) > 0) buffer.write(dart.str(dart.notNull(timeStamp.inHours) - dart.notNull(timeStamp.inDays) * 24) + "h ");
      if (dart.notNull(timeStamp.inMinutes) > 0) buffer.write(dart.str(dart.notNull(timeStamp.inMinutes) - dart.notNull(timeStamp.inHours) * 60) + "m ");
      if (dart.notNull(timeStamp.inSeconds) > 0) buffer.write(dart.str(dart.notNull(timeStamp.inSeconds) - dart.notNull(timeStamp.inMinutes) * 60) + "s ");
      buffer.write(dart.str(dart.notNull(timeStamp.inMilliseconds) - dart.notNull(timeStamp.inSeconds) * 1000));
      let microseconds = dart.notNull(timeStamp.inMicroseconds) - dart.notNull(timeStamp.inMilliseconds) * 1000;
      if (microseconds > 0) buffer.write("." + microseconds[$toString]()[$padLeft](3, "0"));
      buffer.write("ms");
    }
  };
  binding$.SchedulerBinding[dart.mixinOn] = BindingBase => class SchedulerBinding extends BindingBase {
    get schedulingStrategy() {
      return this[schedulingStrategy];
    }
    set schedulingStrategy(value) {
      this[schedulingStrategy] = value;
    }
    initInstances() {
      super.initInstances();
      binding$.SchedulerBinding._instance = this;
      if (!false) {
        let frameNumber = 0;
        this.addTimingsCallback(dart.fn(timings => {
          if (timings == null) dart.nullFailed(L0, 206, 45, "timings");
          for (let frameTiming of timings) {
            frameNumber = frameNumber + 1;
            this[_profileFramePostEvent](frameNumber, frameTiming);
          }
        }, ListOfFrameTimingTovoid()));
      }
    }
    addTimingsCallback(callback) {
      if (callback == null) dart.nullFailed(L0, 265, 43, "callback");
      this[_timingsCallbacks][$add](callback);
      if (this[_timingsCallbacks][$length] === 1) {
        if (!(this.window.onReportTimings == null)) dart.assertFailed(null, L0, 268, 14, "window.onReportTimings == null");
        this.window.onReportTimings = dart.bind(this, _executeTimingsCallbacks);
      }
      if (!dart.equals(this.window.onReportTimings, dart.bind(this, _executeTimingsCallbacks))) dart.assertFailed(null, L0, 271, 12, "window.onReportTimings == _executeTimingsCallbacks");
    }
    removeTimingsCallback(callback) {
      if (callback == null) dart.nullFailed(L0, 275, 46, "callback");
      if (!dart.test(this[_timingsCallbacks][$contains](callback))) dart.assertFailed(null, L0, 276, 12, "_timingsCallbacks.contains(callback)");
      this[_timingsCallbacks][$remove](callback);
      if (dart.test(this[_timingsCallbacks][$isEmpty])) {
        this.window.onReportTimings = null;
      }
    }
    [_executeTimingsCallbacks](timings) {
      if (timings == null) dart.nullFailed(L0, 283, 51, "timings");
      let clonedCallbacks = ListOfListOfFrameTimingTovoid().from(this[_timingsCallbacks]);
      for (let callback of clonedCallbacks) {
        try {
          if (dart.test(this[_timingsCallbacks][$contains](callback))) {
            callback(timings);
          }
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            let collector = null;
            if (!dart.test(dart.fn(() => {
              collector = dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new(function*() {
                yield new (DiagnosticsPropertyOfListOfFrameTimingTovoid()).new("The TimingsCallback that gets executed was", callback, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
              }), VoidToIterableOfDiagnosticsNode());
              return true;
            }, VoidTobool())())) dart.assertFailed(null, L0, 293, 16, "() {\n          collector = () sync* {\n            yield DiagnosticsProperty<TimingsCallback>(\n              'The TimingsCallback that gets executed was',\n              callback,\n              style: DiagnosticsTreeStyle.errorProperty,\n            );\n          };\n          return true;\n        }()");
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, context: new assertions.ErrorDescription.new("while executing callbacks for FrameTiming"), informationCollector: collector}));
          } else
            throw e;
        }
      }
    }
    initServiceExtensions() {
      super.initServiceExtensions();
      if (!false) {
        this.registerNumericServiceExtension({name: "timeDilation", getter: dart.fn(() => async.async(core.double, function*() {
            return binding$.timeDilation;
          }), VoidToFutureOfdouble()), setter: dart.fn(value => {
            if (value == null) dart.nullFailed(L0, 325, 25, "value");
            return async.async(dart.void, function*() {
              binding$.timeDilation = value;
            });
          }, doubleToFutureOfvoid())});
      }
    }
    get lifecycleState() {
      return this[_lifecycleState];
    }
    handleAppLifecycleStateChanged(state) {
      if (state == null) dart.nullFailed(L0, 351, 57, "state");
      if (!(state != null)) dart.assertFailed(null, L0, 352, 12, "state != null");
      this[_lifecycleState] = state;
      switch (state) {
        case C8 || CT.C8:
        case C9 || CT.C9:
        {
          this[_setFramesEnabledState](true);
          break;
        }
        case C10 || CT.C10:
        case C11 || CT.C11:
        {
          this[_setFramesEnabledState](false);
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    scheduleTask(T, task, priority, opts) {
      if (task == null) dart.nullFailed(L0, 396, 21, "task");
      if (priority == null) dart.nullFailed(L0, 397, 14, "priority");
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      let flow = opts && 'flow' in opts ? opts.flow : null;
      let isFirstTask = this[_taskQueue].isEmpty;
      let entry = new (binding$._TaskEntry$(T)).new(task, priority.value, debugLabel, flow);
      this[_taskQueue].add(entry);
      if (dart.test(isFirstTask) && !dart.test(this.locked)) this[_ensureEventLoopCallback]();
      return entry.completer.future;
    }
    unlocked() {
      super.unlocked();
      if (dart.test(this[_taskQueue].isNotEmpty)) this[_ensureEventLoopCallback]();
    }
    [_ensureEventLoopCallback]() {
      if (!!dart.test(this.locked)) dart.assertFailed(null, L0, 427, 12, "!locked");
      if (!dart.test(this[_taskQueue].isNotEmpty)) dart.assertFailed(null, L0, 428, 12, "_taskQueue.isNotEmpty");
      if (dart.test(this[_hasRequestedAnEventLoopCallback])) return;
      this[_hasRequestedAnEventLoopCallback] = true;
      async.Timer.run(dart.bind(this, _runTasks));
    }
    [_runTasks]() {
      this[_hasRequestedAnEventLoopCallback] = false;
      if (dart.test(this.handleEventLoopCallback())) this[_ensureEventLoopCallback]();
    }
    handleEventLoopCallback() {
      let t2;
      if (dart.test(this[_taskQueue].isEmpty) || dart.test(this.locked)) return false;
      let entry = this[_taskQueue].first;
      if (dart.test((t2 = entry.priority, this.schedulingStrategy({priority: t2, scheduler: this})))) {
        try {
          this[_taskQueue].removeFirst();
          entry.run();
        } catch (e) {
          let exception = dart.getThrown(e);
          let exceptionStack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            let callbackStack = null;
            if (!dart.test(dart.fn(() => {
              callbackStack = entry.debugStack;
              return true;
            }, VoidTobool())())) dart.assertFailed(null, L0, 463, 16, "() {\n          callbackStack = entry.debugStack;\n          return true;\n        }()");
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: exceptionStack, library: "scheduler library", context: new assertions.ErrorDescription.new("during a task callback"), informationCollector: callbackStack == null ? null : dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new(function*() {
                yield new assertions.DiagnosticsStackTrace.new("\nThis exception was thrown in the context of a scheduler callback. " + "When the scheduler callback was _registered_ (as opposed to when the " + "exception was thrown), this was the stack", callbackStack);
              }), VoidToIterableOfDiagnosticsNode())}));
          } else
            throw e;
        }
        return this[_taskQueue].isNotEmpty;
      }
      return false;
    }
    get transientCallbackCount() {
      return this[_transientCallbacks][$length];
    }
    scheduleFrameCallback(callback, opts) {
      if (callback == null) dart.nullFailed(L0, 520, 43, "callback");
      let rescheduling = opts && 'rescheduling' in opts ? opts.rescheduling : false;
      if (rescheduling == null) dart.nullFailed(L0, 520, 60, "rescheduling");
      this.scheduleFrame();
      this[_nextFrameCallbackId] = dart.notNull(this[_nextFrameCallbackId]) + 1;
      this[_transientCallbacks][$_set](this[_nextFrameCallbackId], new binding$._FrameCallbackEntry.new(callback, {rescheduling: rescheduling}));
      return this[_nextFrameCallbackId];
    }
    cancelFrameCallbackWithId(id) {
      if (id == null) dart.nullFailed(L0, 534, 38, "id");
      if (!(dart.notNull(id) > 0)) dart.assertFailed(null, L0, 535, 12, "id > 0");
      this[_transientCallbacks][$remove](id);
      this[_removedIds].add(id);
    }
    debugAssertNoTransientCallbacks(reason) {
      if (reason == null) dart.nullFailed(L0, 560, 47, "reason");
      if (!dart.test(dart.fn(() => {
        if (dart.notNull(this.transientCallbackCount) > 0) {
          let count = this.transientCallbackCount;
          let callbacks = LinkedHashMapOfint$_FrameCallbackEntry().from(this[_transientCallbacks]);
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: reason, library: "scheduler library", informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new(function*() {
              if (count === 1) {
                yield new assertions.ErrorDescription.new("There was one transient callback left. " + "The stack trace for when it was registered is as follows:");
              } else {
                yield new assertions.ErrorDescription.new("There were " + dart.str(count) + " transient callbacks left. " + "The stack traces for when they were registered are as follows:");
              }
              for (let id of callbacks[$keys]) {
                let entry = dart.nullCheck(callbacks[$_get](id));
                yield new assertions.DiagnosticsStackTrace.new("?????? callback " + dart.str(id) + " ??????", entry.debugStack, {showSeparator: false});
              }
            }), VoidToIterableOfDiagnosticsNode())}));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 561, 12, "() {\n      if (transientCallbackCount > 0) {\n        // We cache the values so that we can produce them later\n        // even if the information collector is called after\n        // the problem has been resolved.\n        final int count = transientCallbackCount;\n        final Map<int, _FrameCallbackEntry> callbacks = Map<int, _FrameCallbackEntry>.from(_transientCallbacks);\n        FlutterError.reportError(FlutterErrorDetails(\n          exception: reason,\n          library: 'scheduler library',\n          informationCollector: () sync* {\n            if (count == 1) {\n              // TODO(jacobr): I have added an extra line break in this case.\n              yield ErrorDescription(\n                'There was one transient callback left. '\n                'The stack trace for when it was registered is as follows:'\n              );\n            } else {\n              yield ErrorDescription(\n                'There were $count transient callbacks left. '\n                'The stack traces for when they were registered are as follows:'\n              );\n            }\n            for (final int id in callbacks.keys) {\n              final _FrameCallbackEntry entry = callbacks[id]!;\n              yield DiagnosticsStackTrace('?????? callback $id ??????', entry.debugStack, showSeparator: false);\n            }\n          },\n        ));\n      }\n      return true;\n    }()");
      return true;
    }
    addPersistentFrameCallback(callback) {
      if (callback == null) dart.nullFailed(L0, 647, 49, "callback");
      this[_persistentCallbacks][$add](callback);
    }
    addPostFrameCallback(callback) {
      if (callback == null) dart.nullFailed(L0, 673, 43, "callback");
      this[_postFrameCallbacks][$add](callback);
    }
    get endOfFrame() {
      if (this[_nextFrameCompleter] == null) {
        if (dart.equals(this.schedulerPhase, binding$.SchedulerPhase.idle)) this.scheduleFrame();
        this[_nextFrameCompleter] = CompleterOfvoid().new();
        this.addPostFrameCallback(dart.fn(timeStamp => {
          if (timeStamp == null) dart.nullFailed(L0, 693, 38, "timeStamp");
          dart.nullCheck(this[_nextFrameCompleter]).complete();
          this[_nextFrameCompleter] = null;
        }, DurationTovoid()));
      }
      return dart.nullCheck(this[_nextFrameCompleter]).future;
    }
    get hasScheduledFrame() {
      return this[_hasScheduledFrame];
    }
    get schedulerPhase() {
      return this[_schedulerPhase];
    }
    get framesEnabled() {
      return this[_framesEnabled];
    }
    [_setFramesEnabledState](enabled) {
      if (enabled == null) dart.nullFailed(L0, 715, 36, "enabled");
      if (dart.equals(this[_framesEnabled], enabled)) return;
      this[_framesEnabled] = enabled;
      if (dart.test(enabled)) this.scheduleFrame();
    }
    ensureFrameCallbacksRegistered() {
      let t3, t3$;
      t3 = this.window;
      t3.onBeginFrame == null ? t3.onBeginFrame = dart.bind(this, _handleBeginFrame) : null;
      t3$ = this.window;
      t3$.onDrawFrame == null ? t3$.onDrawFrame = dart.bind(this, _handleDrawFrame) : null;
    }
    ensureVisualUpdate() {
      switch (this.schedulerPhase) {
        case C0 || CT.C0:
        case C4 || CT.C4:
        {
          this.scheduleFrame();
          return;
        }
        case C1 || CT.C1:
        case C2 || CT.C2:
        case C3 || CT.C3:
        {
          return;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    scheduleFrame() {
      if (dart.test(this[_hasScheduledFrame]) || !dart.test(this.framesEnabled)) return;
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug$.debugPrintScheduleFrameStacks)) assertions.debugPrintStack({label: "scheduleFrame() called. Current phase is " + dart.str(this.schedulerPhase) + "."});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 787, 12, "() {\n      if (debugPrintScheduleFrameStacks)\n        debugPrintStack(label: 'scheduleFrame() called. Current phase is $schedulerPhase.');\n      return true;\n    }()");
      this.ensureFrameCallbacksRegistered();
      this.window.scheduleFrame();
      this[_hasScheduledFrame] = true;
    }
    scheduleForcedFrame() {
      if (!dart.test(this.framesEnabled)) return;
      if (dart.test(this[_hasScheduledFrame])) return;
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug$.debugPrintScheduleFrameStacks)) assertions.debugPrintStack({label: "scheduleForcedFrame() called. Current phase is " + dart.str(this.schedulerPhase) + "."});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 825, 12, "() {\n      if (debugPrintScheduleFrameStacks)\n        debugPrintStack(label: 'scheduleForcedFrame() called. Current phase is $schedulerPhase.');\n      return true;\n    }()");
      this.window.scheduleFrame();
      this[_hasScheduledFrame] = true;
    }
    scheduleWarmUpFrame() {
      if (dart.test(this[_warmUpFrame]) || !dart.equals(this.schedulerPhase, binding$.SchedulerPhase.idle)) return;
      this[_warmUpFrame] = true;
      developer.Timeline.startSync("Warm-up frame");
      let hadScheduledFrame = this[_hasScheduledFrame];
      async.Timer.run(dart.fn(() => {
        if (!dart.test(this[_warmUpFrame])) dart.assertFailed(null, L0, 860, 14, "_warmUpFrame");
        this.handleBeginFrame(null);
      }, VoidTovoid()));
      async.Timer.run(dart.fn(() => {
        if (!dart.test(this[_warmUpFrame])) dart.assertFailed(null, L0, 864, 14, "_warmUpFrame");
        this.handleDrawFrame();
        this.resetEpoch();
        this[_warmUpFrame] = false;
        if (dart.test(hadScheduledFrame)) this.scheduleFrame();
      }, VoidTovoid()));
      this.lockEvents(dart.fn(() => async.async(dart.void, (function*() {
        yield this.endOfFrame;
        developer.Timeline.finishSync();
      }).bind(this)), VoidToFutureOfvoid()));
    }
    resetEpoch() {
      this[_epochStart] = this[_adjustForEpoch](this[_lastRawTimeStamp]);
      this[_firstRawTimeStampInEpoch] = null;
    }
    [_adjustForEpoch](rawTimeStamp) {
      if (rawTimeStamp == null) dart.nullFailed(L0, 922, 37, "rawTimeStamp");
      let rawDurationSinceEpoch = this[_firstRawTimeStampInEpoch] == null ? core.Duration.zero : rawTimeStamp['-'](dart.nullCheck(this[_firstRawTimeStampInEpoch]));
      return new core.Duration.new({microseconds: (dart.notNull(rawDurationSinceEpoch.inMicroseconds) / dart.notNull(binding$.timeDilation))[$round]() + dart.notNull(this[_epochStart].inMicroseconds)});
    }
    get currentFrameTimeStamp() {
      if (!(this[_currentFrameTimeStamp] != null)) dart.assertFailed(null, L0, 933, 12, "_currentFrameTimeStamp != null");
      return dart.nullCheck(this[_currentFrameTimeStamp]);
    }
    get currentSystemFrameTimeStamp() {
      if (!(this[_lastRawTimeStamp] != null)) dart.assertFailed(null, L0, 951, 12, "_lastRawTimeStamp != null");
      return this[_lastRawTimeStamp];
    }
    [_handleBeginFrame](rawTimeStamp) {
      if (rawTimeStamp == null) dart.nullFailed(L0, 959, 35, "rawTimeStamp");
      if (dart.test(this[_warmUpFrame])) {
        if (!!dart.test(this[_ignoreNextEngineDrawFrame])) dart.assertFailed(null, L0, 961, 14, "!_ignoreNextEngineDrawFrame");
        this[_ignoreNextEngineDrawFrame] = true;
        return;
      }
      this.handleBeginFrame(rawTimeStamp);
    }
    [_handleDrawFrame]() {
      if (dart.test(this[_ignoreNextEngineDrawFrame])) {
        this[_ignoreNextEngineDrawFrame] = false;
        return;
      }
      this.handleDrawFrame();
    }
    handleBeginFrame(rawTimeStamp) {
      let t3;
      developer.Timeline.startSync("Frame", {arguments: debug.timelineArgumentsIndicatingLandmarkEvent});
      this[_firstRawTimeStampInEpoch] == null ? this[_firstRawTimeStampInEpoch] = rawTimeStamp : null;
      this[_currentFrameTimeStamp] = this[_adjustForEpoch]((t3 = rawTimeStamp, t3 == null ? this[_lastRawTimeStamp] : t3));
      if (rawTimeStamp != null) this[_lastRawTimeStamp] = rawTimeStamp;
      if (!dart.test(dart.fn(() => {
        this[_debugFrameNumber] = dart.notNull(this[_debugFrameNumber]) + 1;
        if (dart.test(debug$.debugPrintBeginFrameBanner) || dart.test(debug$.debugPrintEndFrameBanner)) {
          let frameTimeStampDescription = new core.StringBuffer.new();
          if (rawTimeStamp != null) {
            binding$.SchedulerBinding._debugDescribeTimeStamp(dart.nullCheck(this[_currentFrameTimeStamp]), frameTimeStampDescription);
          } else {
            frameTimeStampDescription.write("(warm-up frame)");
          }
          this[_debugBanner] = "???????????????????????? Frame " + dart.toString(this[_debugFrameNumber])[$padRight](7) + "   " + frameTimeStampDescription.toString()[$padLeft](18) + " ????????????????????????";
          if (dart.test(debug$.debugPrintBeginFrameBanner)) print.debugPrint(this[_debugBanner]);
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 1006, 12, "() {\n      _debugFrameNumber += 1;\n\n      if (debugPrintBeginFrameBanner || debugPrintEndFrameBanner) {\n        final StringBuffer frameTimeStampDescription = StringBuffer();\n        if (rawTimeStamp != null) {\n          _debugDescribeTimeStamp(_currentFrameTimeStamp!, frameTimeStampDescription);\n        } else {\n          frameTimeStampDescription.write('(warm-up frame)');\n        }\n        _debugBanner = '???????????????????????? Frame ${_debugFrameNumber.toString().padRight(7)}   ${frameTimeStampDescription.toString().padLeft(18)} ????????????????????????';\n        if (debugPrintBeginFrameBanner)\n          debugPrint(_debugBanner);\n      }\n      return true;\n    }()");
      if (!dart.equals(this.schedulerPhase, binding$.SchedulerPhase.idle)) dart.assertFailed(null, L0, 1023, 12, "schedulerPhase == SchedulerPhase.idle");
      this[_hasScheduledFrame] = false;
      try {
        developer.Timeline.startSync("Animate", {arguments: debug.timelineArgumentsIndicatingLandmarkEvent});
        this[_schedulerPhase] = binding$.SchedulerPhase.transientCallbacks;
        let callbacks = this[_transientCallbacks];
        this[_transientCallbacks] = new (IdentityMapOfint$_FrameCallbackEntry()).new();
        callbacks[$forEach](dart.fn((id, callbackEntry) => {
          if (id == null) dart.nullFailed(L0, 1031, 30, "id");
          if (callbackEntry == null) dart.nullFailed(L0, 1031, 54, "callbackEntry");
          if (!dart.test(this[_removedIds].contains(id))) this[_invokeFrameCallback](callbackEntry.callback, dart.nullCheck(this[_currentFrameTimeStamp]), callbackEntry.debugStack);
        }, intAnd_FrameCallbackEntryTovoid()));
        this[_removedIds].clear();
      } finally {
        this[_schedulerPhase] = binding$.SchedulerPhase.midFrameMicrotasks;
      }
    }
    handleDrawFrame() {
      if (!dart.equals(this[_schedulerPhase], binding$.SchedulerPhase.midFrameMicrotasks)) dart.assertFailed(null, L0, 1051, 12, "_schedulerPhase == SchedulerPhase.midFrameMicrotasks");
      developer.Timeline.finishSync();
      try {
        this[_schedulerPhase] = binding$.SchedulerPhase.persistentCallbacks;
        for (let callback of this[_persistentCallbacks])
          this[_invokeFrameCallback](callback, dart.nullCheck(this[_currentFrameTimeStamp]));
        this[_schedulerPhase] = binding$.SchedulerPhase.postFrameCallbacks;
        let localPostFrameCallbacks = ListOfDurationTovoid().from(this[_postFrameCallbacks]);
        this[_postFrameCallbacks][$clear]();
        for (let callback of localPostFrameCallbacks)
          this[_invokeFrameCallback](callback, dart.nullCheck(this[_currentFrameTimeStamp]));
      } finally {
        this[_schedulerPhase] = binding$.SchedulerPhase.idle;
        developer.Timeline.finishSync();
        if (!dart.test(dart.fn(() => {
          if (dart.test(debug$.debugPrintEndFrameBanner)) print.debugPrint("???"[$times](dart.nullCheck(this[_debugBanner]).length));
          this[_debugBanner] = null;
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 1069, 14, "() {\n        if (debugPrintEndFrameBanner)\n          debugPrint('???' * _debugBanner!.length);\n        _debugBanner = null;\n        return true;\n      }()");
        this[_currentFrameTimeStamp] = null;
      }
    }
    [_profileFramePostEvent](frameNumber, frameTiming) {
      if (frameNumber == null) dart.nullFailed(L0, 1079, 35, "frameNumber");
      if (frameTiming == null) dart.nullFailed(L0, 1079, 60, "frameTiming");
      this.postEvent("Flutter.Frame", new (IdentityMapOfString$dynamic()).from(["number", frameNumber, "startTime", frameTiming.timestampInMicroseconds(ui.FramePhase.buildStart), "elapsed", frameTiming.totalSpan.inMicroseconds, "build", frameTiming.buildDuration.inMicroseconds, "raster", frameTiming.rasterDuration.inMicroseconds, "vsyncOverhead", frameTiming.vsyncOverhead.inMicroseconds]));
    }
    [_invokeFrameCallback](callback, timeStamp, callbackStack = null) {
      if (callback == null) dart.nullFailed(L0, 1111, 43, "callback");
      if (timeStamp == null) dart.nullFailed(L0, 1111, 62, "timeStamp");
      if (!(callback != null)) dart.assertFailed(null, L0, 1112, 12, "callback != null");
      if (!(binding$._FrameCallbackEntry.debugCurrentCallbackStack == null)) dart.assertFailed(null, L0, 1113, 12, "_FrameCallbackEntry.debugCurrentCallbackStack == null");
      if (!dart.test(dart.fn(() => {
        binding$._FrameCallbackEntry.debugCurrentCallbackStack = callbackStack;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 1114, 12, "() {\n      _FrameCallbackEntry.debugCurrentCallbackStack = callbackStack;\n      return true;\n    }()");
      try {
        callback(timeStamp);
      } catch (e) {
        let exception = dart.getThrown(e);
        let exceptionStack = dart.stackTrace(e);
        if (core.Object.is(exception)) {
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: exceptionStack, library: "scheduler library", context: new assertions.ErrorDescription.new("during a scheduler callback"), informationCollector: callbackStack == null ? null : dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new(function*() {
              yield new assertions.DiagnosticsStackTrace.new("\nThis exception was thrown in the context of a scheduler callback. " + "When the scheduler callback was _registered_ (as opposed to when the " + "exception was thrown), this was the stack", callbackStack);
            }), VoidToIterableOfDiagnosticsNode())}));
        } else
          throw e;
      }
      if (!dart.test(dart.fn(() => {
        binding$._FrameCallbackEntry.debugCurrentCallbackStack = null;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 1136, 12, "() {\n      _FrameCallbackEntry.debugCurrentCallbackStack = null;\n      return true;\n    }()");
    }
  };
  (binding$.SchedulerBinding[dart.mixinNew] = function() {
    this[_timingsCallbacks] = JSArrayOfListOfFrameTimingTovoid().of([]);
    this[_lifecycleState] = null;
    this[schedulingStrategy] = C6 || CT.C6;
    this[_taskQueue] = new (HeapPriorityQueueOf_TaskEntry()).new(C7 || CT.C7);
    this[_hasRequestedAnEventLoopCallback] = false;
    this[_nextFrameCallbackId] = 0;
    this[_transientCallbacks] = new (IdentityMapOfint$_FrameCallbackEntry()).new();
    this[_removedIds] = new (_IdentityHashSetOfint()).new();
    this[_persistentCallbacks] = JSArrayOfDurationTovoid().of([]);
    this[_postFrameCallbacks] = JSArrayOfDurationTovoid().of([]);
    this[_nextFrameCompleter] = null;
    this[_hasScheduledFrame] = false;
    this[_schedulerPhase] = binding$.SchedulerPhase.idle;
    this[_framesEnabled] = true;
    this[_warmUpFrame] = false;
    this[_firstRawTimeStampInEpoch] = null;
    this[_epochStart] = core.Duration.zero;
    this[_lastRawTimeStamp] = core.Duration.zero;
    this[_currentFrameTimeStamp] = null;
    this[_debugFrameNumber] = 0;
    this[_debugBanner] = null;
    this[_ignoreNextEngineDrawFrame] = false;
  }).prototype = binding$.SchedulerBinding.prototype;
  dart.addTypeTests(binding$.SchedulerBinding);
  dart.addTypeCaches(binding$.SchedulerBinding);
  binding$.SchedulerBinding[dart.implements] = () => [binding.BindingBase];
  dart.setMethodSignature(binding$.SchedulerBinding, () => ({
    __proto__: dart.getMethods(binding$.SchedulerBinding.__proto__),
    addTimingsCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [core.List$(ui.FrameTiming)])]),
    removeTimingsCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [core.List$(ui.FrameTiming)])]),
    [_executeTimingsCallbacks]: dart.fnType(dart.void, [core.List$(ui.FrameTiming)]),
    handleAppLifecycleStateChanged: dart.fnType(dart.void, [ui.AppLifecycleState]),
    scheduleTask: dart.gFnType(T => [async.Future$(T), [dart.fnType(T, []), priority$.Priority], {debugLabel: dart.nullable(core.String), flow: dart.nullable(developer.Flow)}, {}], T => [dart.nullable(core.Object)]),
    [_ensureEventLoopCallback]: dart.fnType(dart.void, []),
    [_runTasks]: dart.fnType(dart.void, []),
    handleEventLoopCallback: dart.fnType(core.bool, []),
    scheduleFrameCallback: dart.fnType(core.int, [dart.fnType(dart.void, [core.Duration])], {rescheduling: core.bool}, {}),
    cancelFrameCallbackWithId: dart.fnType(dart.void, [core.int]),
    debugAssertNoTransientCallbacks: dart.fnType(core.bool, [core.String]),
    addPersistentFrameCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [core.Duration])]),
    addPostFrameCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [core.Duration])]),
    [_setFramesEnabledState]: dart.fnType(dart.void, [core.bool]),
    ensureFrameCallbacksRegistered: dart.fnType(dart.void, []),
    ensureVisualUpdate: dart.fnType(dart.void, []),
    scheduleFrame: dart.fnType(dart.void, []),
    scheduleForcedFrame: dart.fnType(dart.void, []),
    scheduleWarmUpFrame: dart.fnType(dart.void, []),
    resetEpoch: dart.fnType(dart.void, []),
    [_adjustForEpoch]: dart.fnType(core.Duration, [core.Duration]),
    [_handleBeginFrame]: dart.fnType(dart.void, [core.Duration]),
    [_handleDrawFrame]: dart.fnType(dart.void, []),
    handleBeginFrame: dart.fnType(dart.void, [dart.nullable(core.Duration)]),
    handleDrawFrame: dart.fnType(dart.void, []),
    [_profileFramePostEvent]: dart.fnType(dart.void, [core.int, ui.FrameTiming]),
    [_invokeFrameCallback]: dart.fnType(dart.void, [dart.fnType(dart.void, [core.Duration]), core.Duration], [dart.nullable(core.StackTrace)])
  }));
  dart.setGetterSignature(binding$.SchedulerBinding, () => ({
    __proto__: dart.getGetters(binding$.SchedulerBinding.__proto__),
    lifecycleState: dart.nullable(ui.AppLifecycleState),
    transientCallbackCount: core.int,
    endOfFrame: async.Future$(dart.void),
    hasScheduledFrame: core.bool,
    schedulerPhase: binding$.SchedulerPhase,
    framesEnabled: core.bool,
    currentFrameTimeStamp: core.Duration,
    currentSystemFrameTimeStamp: core.Duration
  }));
  dart.setLibraryUri(binding$.SchedulerBinding, L1);
  dart.setFieldSignature(binding$.SchedulerBinding, () => ({
    __proto__: dart.getFields(binding$.SchedulerBinding.__proto__),
    [_timingsCallbacks]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [core.List$(ui.FrameTiming)]))),
    [_lifecycleState]: dart.fieldType(dart.nullable(ui.AppLifecycleState)),
    schedulingStrategy: dart.fieldType(dart.fnType(core.bool, [], {}, {priority: core.int, scheduler: binding$.SchedulerBinding})),
    [_taskQueue]: dart.finalFieldType(priority_queue.PriorityQueue$(binding$._TaskEntry)),
    [_hasRequestedAnEventLoopCallback]: dart.fieldType(core.bool),
    [_nextFrameCallbackId]: dart.fieldType(core.int),
    [_transientCallbacks]: dart.fieldType(core.Map$(core.int, binding$._FrameCallbackEntry)),
    [_removedIds]: dart.finalFieldType(core.Set$(core.int)),
    [_persistentCallbacks]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [core.Duration]))),
    [_postFrameCallbacks]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [core.Duration]))),
    [_nextFrameCompleter]: dart.fieldType(dart.nullable(async.Completer$(dart.void))),
    [_hasScheduledFrame]: dart.fieldType(core.bool),
    [_schedulerPhase]: dart.fieldType(binding$.SchedulerPhase),
    [_framesEnabled]: dart.fieldType(core.bool),
    [_warmUpFrame]: dart.fieldType(core.bool),
    [_firstRawTimeStampInEpoch]: dart.fieldType(dart.nullable(core.Duration)),
    [_epochStart]: dart.fieldType(core.Duration),
    [_lastRawTimeStamp]: dart.fieldType(core.Duration),
    [_currentFrameTimeStamp]: dart.fieldType(dart.nullable(core.Duration)),
    [_debugFrameNumber]: dart.fieldType(core.int),
    [_debugBanner]: dart.fieldType(dart.nullable(core.String)),
    [_ignoreNextEngineDrawFrame]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(binding$.SchedulerBinding, {
    /*binding$.SchedulerBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  }, false);
  binding$.defaultSchedulingStrategy = function defaultSchedulingStrategy(opts) {
    let priority = opts && 'priority' in opts ? opts.priority : null;
    if (priority == null) dart.nullFailed(L0, 1148, 47, "priority");
    let scheduler = opts && 'scheduler' in opts ? opts.scheduler : null;
    if (scheduler == null) dart.nullFailed(L0, 1148, 83, "scheduler");
    if (dart.notNull(scheduler.transientCallbackCount) > 0) return dart.notNull(priority) >= dart.notNull(priority$.Priority.animation.value);
    return true;
  };
  dart.copyProperties(binding$, {
    get timeDilation() {
      return binding$._timeDilation;
    },
    set timeDilation(value) {
      let t4;
      if (value == null) dart.nullFailed(L0, 24, 25, "value");
      if (!(dart.notNull(value) > 0.0)) dart.assertFailed(null, L0, 25, 10, "value > 0.0");
      if (binding$._timeDilation == value) return;
      t4 = binding$.SchedulerBinding.instance;
      t4 == null ? null : t4.resetEpoch();
      binding$._timeDilation = value;
    }
  });
  dart.defineLazy(binding$, {
    /*binding$._timeDilation*/get _timeDilation() {
      return 1.0;
    },
    set _timeDilation(_) {}
  }, false);
  dart.trackLibraries("packages/flutter/src/scheduler/binding.dart", {
    "package:flutter/src/scheduler/binding.dart": binding$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["binding.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAuEkB;MAAU;;;AAAV;;MAAU;;;AAIxB;AAOG,UANQ,wCACI,4BAAX,OAAc,wBACd;AAC4B,YAA1B,AAAU,wBAAS,AAAI;mCAEnB,AAAK,aAAG,OAAY,oBAAS,AAAE,eAAN,iBAAY;;AAGnB,UAA1B,AAAU,wBAAS,AAAI;;MAE3B;;+BA1BgB,MAAW,UAAe,YAAiB;UAA3C;UAAW;sCAWX;;MACG,iBAAY;MAZf;MAAW;MAAe;MAAiB;AACzD,qBAAO,AAGN;AAFgC,QAA/B,kBAAwB;AACxB,cAAO;;IAEX;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;QAyByB;QAAiB;;IAiC9B;IAjCa;AACvB,mBAAO,AA0BN;AAzBC,oBAAI,YAAY;AACd,uBAAO,AAiBN;AAhBC,cAAI,AAA0B,0DAAG;AAa7B,YAZF,WAAmB,sCAA2B,+BAC5C,gCAAa,sFACb,oCAAgB,AACd,qEACA,qEACA,kEAEF,6BAAS,AACP,oEACA,oEACA;;AAIN,gBAAO;;AAE6B,QAAtC,kBAAa;;AAGkB,QAA/B,kBAAwB;;AAE1B,YAAO;;EAEX;;;;;;;;;;MAImB,sDAAyB;;;;;;;;;;;;;;;IAuD9C;;;QAvCK;;;;;EAuCL;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwI2C;IAAS;uBAyDN,IAAwB;UAAxB;UAAwB;AAClE,YAAO,EAAC,AAAG,AAAS,EAAV,sBAAoB,AAAG,EAAD;IAClC;;AAmPE,qBAAO,AAcN;AAbC,YAAwB,0DAA6B;AACkC,UAArF,AAAU,iBAAC;AAOV,UAND,AAAU,iBACK,AAIX,2CADE,AAAW,AAAY,cAFZ,AAAkB,2CACgB,eAAzB,gFACS,cAC1B;;AAGkD,UAA3D,AAAU,iBAAC;;AAEb,cAAO;;IAEX;mCA2c6C,WAAwB;UAAxB;UAAwB;AACnE,UAAqB,aAAjB,AAAU,SAAD,WAAU,GACrB,AAAO,AAA8B,MAA/B,OAA8B,SAApB,AAAU,SAAD,WAAQ;AACnC,UAAsB,aAAlB,AAAU,SAAD,YAAW,GACtB,AAAO,AAAyE,MAA1E,OAAyE,SAA7C,aAAlB,AAAU,SAAD,YAA4B,aAAjB,AAAU,SAAD,iBAA+B;AAC9E,UAAwB,aAApB,AAAU,SAAD,cAAa,GACxB,AAAO,AAA+E,MAAhF,OAA+E,SAAjD,aAApB,AAAU,SAAD,cAA+B,aAAlB,AAAU,SAAD,kBAAmC;AACpF,UAAwB,aAApB,AAAU,SAAD,cAAa,GACxB,AAAO,AAAmF,MAApF,OAAmF,SAArD,aAApB,AAAU,SAAD,cAAiC,aAApB,AAAU,SAAD,oBAAuC;AACU,MAAlG,AAAO,MAAD,OAA2F,SAAxD,aAAzB,AAAU,SAAD,mBAAsC,aAApB,AAAU,SAAD;AAC1C,yBAAwC,aAAzB,AAAU,SAAD,mBAA2C,aAAzB,AAAU,SAAD;AAC7D,UAAI,AAAa,YAAD,GAAG,GACjB,AAAO,AAAoD,MAArD,OAAO,AAA6C,MAAzC,AAAa,AAAW,YAAZ,wBAAoB,GAAG;AACpC,MAAlB,AAAO,MAAD,OAAO;IACf;;;IA/tBmB;;;;;;;AAxKI,MAAf;AACU,MAAhB,sCAAY;AAEZ;AACM,0BAAc;AAMhB,QALF,wBAAmB;cAAmB;AACpC,mBAAuB,cAAe,QAAO;AAC3B,YAAhB,cAAA,AAAY,WAAD,GAAI;AACiC,YAAhD,6BAAuB,WAAW,EAAE,WAAW;;;;IAIvD;;UAoDwC;AACP,MAA/B,AAAkB,8BAAI,QAAQ;AAC9B,UAAI,AAAkB,AAAO,qCAAG;AAC9B,cAAO,AAAO,AAAgB,+BAAG;AACgB,QAAjD,AAAO,wCAAkB;;AAE3B,WAA8B,YAAvB,AAAO,uCAAmB;IACnC;;UAG2C;AACzC,qBAAO,AAAkB,mCAAS,QAAQ;AACR,MAAlC,AAAkB,iCAAO,QAAQ;AACjC,oBAAI,AAAkB;AACS,QAA7B,AAAO,8BAAkB;;IAE7B;;UAEgD;AAClB,4BACxB,qCAA2B;AAC/B,eAA2B,WAAY,gBAAe;AACpD;AACE,wBAAI,AAAkB,mCAAS,QAAQ;AACpB,YAAjB,AAAQ,QAAA,CAAC,OAAO;;;cAEX;cAAW;AAAlB;AACsB;AACtB,2BAAO,AASN;AAFE,cAND,YAAY;AACV,sBAAM,yDACJ,8CACA,QAAQ,UACoB;cAE/B;AACD,oBAAO;;AAOP,YALW,oCAAY,mDACZ,SAAS,SACb,KAAK,WACH,oCAAiB,oEACJ,SAAS;;;;;IAIvC;;AAQ+B,MAAvB;AAEN;AAOG,QAND,4CACQ,wBACE;AAAY;UAAY,qCACxB;gBAAQ;AAAR;AACc,cAApB,wBAAe,KAAK;YACrB;;;IAGP;;AAUyC;IAAe;;UAWF;AACpD,YAAO,AAAM,KAAD,IAAI;AACO,MAAvB,wBAAkB,KAAK;AACvB,cAAQ,KAAK;;;;AAGmB,UAA5B,6BAAuB;AACvB;;;;;AAG6B,UAA7B,6BAAuB;AACvB;;;;AARJ;;;IAUF;oBAgCkB,MACP;UADO;UACP;UACD;UACF;AAEK,wBAAc,AAAW;AAChB,kBAAQ,kCAC1B,IAAI,EACJ,AAAS,QAAD,QACR,UAAU,EACV,IAAI;AAEe,MAArB,AAAW,qBAAI,KAAK;AACpB,oBAAI,WAAW,gBAAK,cAClB,AAA0B;AAC5B,YAAO,AAAM,AAAU,MAAX;IACd;;AAIkB,MAAV;AACN,oBAAI,AAAW,8BACb,AAA0B;IAC9B;;AAQE,WAAO,WAAC;AACR,qBAAO,AAAW;AAClB,oBAAI,yCACF;AACqC,MAAvC,yCAAmC;AACf,MAAd,0BAAI;IACZ;;AAI0C,MAAxC,yCAAmC;AACnC,oBAAI,iCACF,AAA0B;IAC9B;;;AAcE,oBAAI,AAAW,uCAAW,cACxB,MAAO;AACiB,kBAAQ,AAAW;AAC7C,0BAAiC,AAAM,KAAD,WAAlC,AAAkB,kDAAsC;AAC1D;AAC0B,UAAxB,AAAW;AACA,UAAX,AAAM,KAAD;;cACE;cAAW;AAAlB;AACY;AACZ,2BAAO,AAGN;AAFiC,cAAhC,gBAAgB,AAAM,KAAD;AACrB,oBAAO;;AAeP,YAbW,oCAAY,mDACZ,SAAS,SACb,cAAc,WACZ,8BACA,oCAAiB,iDACH,AAAc,aAAD,IAAI,OAAQ,OAAO;AACrD,sBAAM,yCAAqB,AACzB,yEACA,0EACA,6CACA,aAAa;cAEhB;;;;AAGL,cAAO,AAAW;;AAEpB,YAAO;IACT;;AAckC,YAAA,AAAoB;IAAM;;UAqBpB;UAAiB;;AACxC,MAAf;AACyB,MAAzB,6BAAqB,aAArB,8BAAwB;AAC6E,MAArG,AAAmB,iCAAC,4BAAwB,qCAAoB,QAAQ,iBAAgB,YAAY;AACpG,YAAO;IACT;;UASmC;AACjC,YAAU,aAAH,EAAE,IAAG;AACkB,MAA9B,AAAoB,mCAAO,EAAE;AACV,MAAnB,AAAY,sBAAI,EAAE;IACpB;;UAsB4C;AAC1C,qBAAO,AA+BN;AA9BC,YAA2B,aAAvB,+BAAyB;AAIjB,sBAAQ;AACkB,0BAAY,8CAAmC;AAsBjF,UArBW,oCAAY,mDACZ,MAAM,WACR,2CACa;AACpB,kBAAI,AAAM,KAAD,KAAI;AAEX,sBAAM,oCAAgB,AACpB,4CACA;;AAGF,sBAAM,oCAAgB,AACpB,yBAAa,KAAK,oCAClB;;AAGJ,uBAAe,KAAM,AAAU,UAAD;AACF,4BAAqB,eAAb,AAAS,SAAA,QAAC,EAAE;AAC9C,sBAAM,yCAAsB,AAAoB,0BAAN,EAAE,WAAM,AAAM,KAAD,6BAA4B;;YAEtF;;AAGL,cAAO;;AAET,YAAO;IACT;;UAqD8C;AACV,MAAlC,AAAqB,iCAAI,QAAQ;IACnC;;UAwBwC;AACL,MAAjC,AAAoB,gCAAI,QAAQ;IAClC;;AAcE,UAAI,AAAoB,6BAAG;AACzB,YAAmB,YAAf,qBAAiC,+BACnC,AAAe;AACsB,QAAvC,4BAAsB;AAIpB,QAHF,0BAAqB;cAAU;AACE,UAAZ,AAAE,eAArB;AAC0B,UAA1B,4BAAsB;;;AAG1B,YAA0B,AAAE,gBAArB;IACT;;AAG8B;IAAkB;;AAIX;IAAe;;AAM1B;IAAc;;UAGP;AAC/B,UAAmB,YAAf,sBAAkB,OAAO,GAC3B;AACsB,MAAxB,uBAAiB,OAAO;AACxB,oBAAI,OAAO,GACT,AAAe;IACnB;;;AAM2C,WAAzC;MAAO,AAAa,mBAAA,OAAb,4BAAiB,2BAAJ;AACmB,YAAvC;MAAO,AAAY,mBAAA,OAAZ,4BAAgB,0BAAJ;IACrB;;AAgBE,cAAQ;;;;AAGW,UAAf;AACA;;;;;;AAIA;;;;AARJ;;;IAUF;;AA8BE,oBAAI,wCAAuB,qBACzB;AACF,qBAAO,AAIN;AAHC,sBAAI,uCACF,AAAmF,mCAA5D,AAA2D,uDAAhB,uBAAc;AAClF,cAAO;;AAEuB,MAAhC;AACsB,MAAtB,AAAO;AACkB,MAAzB,2BAAqB;IACvB;;AAyBE,qBAAK,qBACH;AAEF,oBAAI,2BACF;AACF,qBAAO,AAIN;AAHC,sBAAI,uCACF,AAAyF,mCAAlE,AAAiE,6DAAhB,uBAAc;AACxF,cAAO;;AAEa,MAAtB,AAAO;AACkB,MAAzB,2BAAqB;IACvB;;AAoBE,oBAAI,oCAAgB,qBAAiC,+BACnD;AAEiB,MAAnB,qBAAe;AACoB,MAA1B,6BAAU;AACR,8BAAoB;AAK7B,MAHI,gBAAI;AACR,uBAAO;AACe,QAAtB,sBAAiB;;AAiBjB,MAfI,gBAAI;AACR,uBAAO;AACU,QAAjB;AASY,QAAZ;AACoB,QAApB,qBAAe;AACf,sBAAI,iBAAiB,GACnB,AAAe;;AAQjB,MAHF,gBAAW;AACO,QAAhB,MAAM;AACe,QAAZ;MACV;IACH;;AAwBkD,MAAhD,oBAAc,sBAAgB;AACE,MAAhC,kCAA4B;IAC9B;;UAUkC;AACjB,kCAAwB,AAA0B,mCAAG,OAAgB,qBAAO,AAAa,YAAD,MAA4B,eAAzB;AAC1G,YAAO,sCAA6E,AAAQ,CAAxB,aAArC,AAAsB,qBAAD,gCAAkB,iDAAwB,AAAY;IAC5G;;AAQE,YAAO,AAAuB,gCAAG;AACjC,YAA6B,gBAAtB;IACT;;AAgBE,YAAO,AAAkB,2BAAG;AAC5B,YAAO;IACT;;UAMgC;AAC9B,oBAAI;AACF,aAAO,WAAC;AACyB,QAAjC,mCAA6B;AAC7B;;AAE4B,MAA9B,sBAAiB,YAAY;IAC/B;;AAGE,oBAAI;AACgC,QAAlC,mCAA6B;AAC7B;;AAEe,MAAjB;IACF;qBAyBgC;;AACkD,MAAvE,6BAAU,qBAAoB;AACG,MAA1C,AAA0B,mCAAA,OAA1B,kCAA8B,YAAY,GAAhB;AACiD,MAA3E,+BAAyB,uBAA6B,KAAb,YAAY,QAAZ,OAAgB;AACzD,UAAI,YAAY,IAAI,MAClB,AAAgC,0BAAZ,YAAY;AAElC,qBAAO,AAeN;AAduB,QAAtB,0BAAkB,aAAlB,2BAAqB;AAErB,sBAAI,gDAA8B;AACb,0CAA4B;AAC/C,cAAI,YAAY,IAAI;AACyD,YAA3E,kDAA8C,eAAtB,+BAAyB,yBAAyB;;AAExB,YAAlD,AAA0B,yBAAD,OAAO;;AAEwG,UAA1I,qBAAe,AAA2H,oBAAvF,AAAW,cAA7B,oCAAsC,KAAG,QAAK,AAA0B,AAAW,yBAAZ,sBAAoB,MAAI;AAChI,wBAAI,oCACF,AAAU,AAAc,iBAAb;;AAEf,cAAO;;AAGT,WAAsB,YAAf,qBAAiC;AACd,MAA1B,2BAAqB;AACrB;AAEoF,QAAzE,6BAAU,uBAAsB;AACU,QAAnD,wBAAiC;AACG,wBAAY;AACE,QAAlD,4BAAgD;AAI9C,QAHF,AAAU,SAAD,WAAS,SAAK,IAAwB;cAAxB;cAAwB;AAC7C,yBAAK,AAAY,2BAAS,EAAE,IAC1B,AAA+F,2BAA1E,AAAc,aAAD,WAAiC,eAAtB,+BAAyB,AAAc,aAAD;;AAEpE,QAAnB,AAAY;;AAEuC,QAAnD,wBAAiC;;IAErC;;AAYE,WAAuB,YAAhB,uBAAkC;AACpB,MAAZ;AACT;AAEsD,QAApD,wBAAiC;AACjC,iBAAyB,WAAY;AACoB,UAAvD,2BAAqB,QAAQ,EAAwB,eAAtB;AAGkB,QAAnD,wBAAiC;AACP,sCACtB,4BAAyB;AACF,QAA3B,AAAoB;AACpB,iBAAyB,WAAY,wBAAuB;AACH,UAAvD,2BAAqB,QAAQ,EAAwB,eAAtB;;AAEI,QAArC,wBAAiC;AACZ,QAAZ;AACT,uBAAO,AAKN;AAJC,wBAAI,kCACF,AAAU,AAA4B,iBAA3B,AAAI,YAAc,AAAE,eAAd;AACA,UAAnB,qBAAe;AACf,gBAAO;;AAEoB,QAA7B,+BAAyB;;IAE7B;6BAEgC,aAAyB;UAAzB;UAAyB;AAQrD,MAPF,eAAU,iBAAkC,0CAC1C,UAAU,WAAW,EACrB,aAAa,AAAY,WAAD,yBAAoC,2BAC5D,WAAW,AAAY,AAAU,WAAX,2BACtB,SAAS,AAAY,AAAc,WAAf,+BACpB,UAAU,AAAY,AAAe,WAAhB,gCACrB,iBAAiB,AAAY,AAAc,WAAf;IAEhC;2BAuBwC,UAAmB,WAAyB;UAA5C;UAAmB;AACzD,YAAO,AAAS,QAAD,IAAI;AACnB,YAA2B,AAA0B,0DAAG;AACxD,qBAAO,AAGN;AAF8D,QAAzC,yDAA4B,aAAa;AAC7D,cAAO;;AAET;AACqB,QAAnB,AAAQ,QAAA,CAAC,SAAS;;YACX;YAAW;AAAlB;AAcE,UAbW,oCAAY,mDACZ,SAAS,SACb,cAAc,WACZ,8BACA,oCAAiB,sDACH,AAAc,aAAD,IAAI,OAAQ,OAAO;AACrD,oBAAM,yCAAqB,AACzB,yEACA,0EACA,6CACA,aAAa;YAEhB;;;;AAGL,qBAAO,AAGN;AAFqD,QAAhC,yDAA4B;AAChD,cAAO;;IAEX;;;IA75B4B,0BAAqC;IA8H9C;IA4BA;IAKsB,mBAAa;IAgDjD,yCAAmC;IAiEpC,6BAAuB;IACG,4BAAgD;IAC/D,oBAAc;IAgJH,6BAAsC;IAkBtC,4BAAqC;IA0B9C;IA0BZ,2BAAqB;IAIX,wBAAiC;IAO3C,uBAAiB;IAwHjB,qBAAe;IAsDV;IACD,oBAAuB;IACvB,0BAA6B;IA8C5B;IAmBN,0BAAoB;IAChB;IACH,mCAA6B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAloBT,mCAAS;;;;;;QAi0BU;;QAAoC;;AAChF,QAAqC,aAAjC,AAAU,SAAD,2BAA0B,GACrC,MAAgB,cAAT,QAAQ,kBAAa,AAAU;AACxC,UAAO;EACT;;;AA7mC2B;IAAa;qBAKhB;;;AACtB,YAAa,aAAN,KAAK,IAAG;AACf,UAAI,AAAc,0BAAG,KAAK,EACxB;AAGqC,WAAtB;0BAAU;AACN,MAArB,yBAAgB,KAAK;IACvB;;;MAZO,sBAAa;YAAG","file":"../../../../../../../../../../packages/flutter/src/scheduler/binding.dart.lib.js"}');
  // Exports:
  return {
    src__scheduler__binding: binding$
  };
}));

//# sourceMappingURL=binding.dart.lib.js.map
