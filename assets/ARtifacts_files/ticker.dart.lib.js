define(['dart_sdk', 'packages/flutter/src/scheduler/binding.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__scheduler__ticker_dart(dart_sdk, packages__flutter__src__scheduler__binding$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const binding = packages__flutter__src__scheduler__binding$46dart.src__scheduler__binding;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var ticker$ = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $runtimeType = dartx.runtimeType;
  var $trimRight = dartx.trimRight;
  var $split = dartx.split;
  var $forEach = dartx.forEach;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var DiagnosticsPropertyOfTicker = () => (DiagnosticsPropertyOfTicker = dart.constFn(diagnostics.DiagnosticsProperty$(ticker$.Ticker)))();
  var CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  var dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  var VoidToFutureOrOfvoid = () => (VoidToFutureOrOfvoid = dart.constFn(dart.fnType(dart.void, [])))();
  var VoidToNFutureOrOfvoid = () => (VoidToNFutureOrOfvoid = dart.constFn(dart.nullable(VoidToFutureOrOfvoid())))();
  const CT = Object.create(null);
  var L1 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/scheduler/ticker.dart";
  var L0 = "package:flutter/src/scheduler/ticker.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ticker$.TickerCanceled.prototype,
        [TickerCanceled_ticker]: null
      });
    }
  }, false);
  ticker$.TickerProvider = class TickerProvider extends core.Object {};
  (ticker$.TickerProvider.new = function() {
    ;
  }).prototype = ticker$.TickerProvider.prototype;
  dart.addTypeTests(ticker$.TickerProvider);
  dart.addTypeCaches(ticker$.TickerProvider);
  dart.setLibraryUri(ticker$.TickerProvider, L0);
  var _future = dart.privateName(ticker$, "_future");
  var _muted = dart.privateName(ticker$, "_muted");
  var _startTime = dart.privateName(ticker$, "_startTime");
  var _animationId = dart.privateName(ticker$, "_animationId");
  var __Ticker__debugCreationStack = dart.privateName(ticker$, "_#Ticker#_debugCreationStack");
  var __Ticker__debugCreationStack_isSet = dart.privateName(ticker$, "_#Ticker#_debugCreationStack#isSet");
  var _onTick$ = dart.privateName(ticker$, "_onTick");
  var _debugCreationStack = dart.privateName(ticker$, "_debugCreationStack");
  var _cancel = dart.privateName(ticker$, "_cancel");
  var _complete = dart.privateName(ticker$, "_complete");
  var _tick = dart.privateName(ticker$, "_tick");
  var debugLabel$ = dart.privateName(ticker$, "Ticker.debugLabel");
  ticker$.Ticker = class Ticker extends core.Object {
    get debugLabel() {
      return this[debugLabel$];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    get muted() {
      return this[_muted];
    }
    set muted(value) {
      if (value == null) dart.nullFailed(L1, 90, 18, "value");
      if (dart.equals(value, this.muted)) return;
      this[_muted] = value;
      if (dart.test(value)) {
        this.unscheduleTick();
      } else if (dart.test(this.shouldScheduleTick)) {
        this.scheduleTick();
      }
    }
    get isTicking() {
      if (this[_future] == null) return false;
      if (dart.test(this.muted)) return false;
      if (dart.test(dart.nullCheck(binding.SchedulerBinding.instance).framesEnabled)) return true;
      if (!dart.equals(dart.nullCheck(binding.SchedulerBinding.instance).schedulerPhase, binding.SchedulerPhase.idle)) return true;
      return false;
    }
    get isActive() {
      return this[_future] != null;
    }
    start() {
      if (!dart.test(dart.fn(() => {
        if (dart.test(this.isActive)) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A ticker was started twice."), new assertions.ErrorDescription.new("A ticker that is already active cannot be started again without first stopping it."), this.describeForError("The affected ticker was")])));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L1, 149, 12, "() {\n      if (isActive) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('A ticker was started twice.'),\n          ErrorDescription('A ticker that is already active cannot be started again without first stopping it.'),\n          describeForError('The affected ticker was'),\n        ]);\n      }\n      return true;\n    }()");
      if (!(this[_startTime] == null)) dart.assertFailed(null, L1, 159, 12, "_startTime == null");
      this[_future] = new ticker$.TickerFuture.__();
      if (dart.test(this.shouldScheduleTick)) {
        this.scheduleTick();
      }
      if (dart.notNull(dart.nullCheck(binding.SchedulerBinding.instance).schedulerPhase.index) > dart.notNull(binding.SchedulerPhase.idle.index) && dart.notNull(dart.nullCheck(binding.SchedulerBinding.instance).schedulerPhase.index) < dart.notNull(binding.SchedulerPhase.postFrameCallbacks.index)) this[_startTime] = dart.nullCheck(binding.SchedulerBinding.instance).currentFrameTimeStamp;
      return dart.nullCheck(this[_future]);
    }
    describeForError(name) {
      if (name == null) dart.nullFailed(L1, 172, 43, "name");
      return new (DiagnosticsPropertyOfTicker()).new(name, this, {description: this.toString({debugIncludeStack: true})});
    }
    stop(opts) {
      let canceled = opts && 'canceled' in opts ? opts.canceled : false;
      if (canceled == null) dart.nullFailed(L1, 191, 20, "canceled");
      if (!dart.test(this.isActive)) return;
      let localFuture = dart.nullCheck(this[_future]);
      this[_future] = null;
      this[_startTime] = null;
      if (!!dart.test(this.isActive)) dart.assertFailed(null, L1, 201, 12, "!isActive");
      this.unscheduleTick();
      if (dart.test(canceled)) {
        localFuture[_cancel](this);
      } else {
        localFuture[_complete]();
      }
    }
    get scheduled() {
      return this[_animationId] != null;
    }
    get shouldScheduleTick() {
      return !dart.test(this.muted) && dart.test(this.isActive) && !dart.test(this.scheduled);
    }
    [_tick](timeStamp) {
      let t0;
      if (timeStamp == null) dart.nullFailed(L1, 232, 23, "timeStamp");
      if (!dart.test(this.isTicking)) dart.assertFailed(null, L1, 233, 12, "isTicking");
      if (!dart.test(this.scheduled)) dart.assertFailed(null, L1, 234, 12, "scheduled");
      this[_animationId] = null;
      this[_startTime] == null ? this[_startTime] = timeStamp : null;
      t0 = timeStamp['-'](dart.nullCheck(this[_startTime]));
      this[_onTick$](t0);
      if (dart.test(this.shouldScheduleTick)) this.scheduleTick({rescheduling: true});
    }
    scheduleTick(opts) {
      let rescheduling = opts && 'rescheduling' in opts ? opts.rescheduling : false;
      if (rescheduling == null) dart.nullFailed(L1, 250, 28, "rescheduling");
      if (!!dart.test(this.scheduled)) dart.assertFailed(null, L1, 251, 12, "!scheduled");
      if (!dart.test(this.shouldScheduleTick)) dart.assertFailed(null, L1, 252, 12, "shouldScheduleTick");
      this[_animationId] = dart.nullCheck(binding.SchedulerBinding.instance).scheduleFrameCallback(dart.bind(this, _tick), {rescheduling: rescheduling});
    }
    unscheduleTick() {
      if (dart.test(this.scheduled)) {
        dart.nullCheck(binding.SchedulerBinding.instance).cancelFrameCallbackWithId(dart.nullCheck(this[_animationId]));
        this[_animationId] = null;
      }
      if (!!dart.test(this.shouldScheduleTick)) dart.assertFailed(null, L1, 268, 12, "!shouldScheduleTick");
    }
    absorbTicker(originalTicker) {
      if (originalTicker == null) dart.nullFailed(L1, 280, 28, "originalTicker");
      if (!!dart.test(this.isActive)) dart.assertFailed(null, L1, 281, 12, "!isActive");
      if (!(this[_future] == null)) dart.assertFailed(null, L1, 282, 12, "_future == null");
      if (!(this[_startTime] == null)) dart.assertFailed(null, L1, 283, 12, "_startTime == null");
      if (!(this[_animationId] == null)) dart.assertFailed(null, L1, 284, 12, "_animationId == null");
      if (!(originalTicker[_future] == null)[$_equals](originalTicker[_startTime] == null)) dart.assertFailed("Cannot absorb Ticker after it has been disposed.", L1, 285, 12, "(originalTicker._future == null) == (originalTicker._startTime == null)");
      if (originalTicker[_future] != null) {
        this[_future] = originalTicker[_future];
        this[_startTime] = originalTicker[_startTime];
        if (dart.test(this.shouldScheduleTick)) this.scheduleTick();
        originalTicker[_future] = null;
        originalTicker.unscheduleTick();
      }
      originalTicker.dispose();
    }
    dispose() {
      if (this[_future] != null) {
        let localFuture = dart.nullCheck(this[_future]);
        this[_future] = null;
        if (!!dart.test(this.isActive)) dart.assertFailed(null, L1, 304, 14, "!isActive");
        this.unscheduleTick();
        localFuture[_cancel](this);
      }
      if (!dart.test(dart.fn(() => {
        this[_startTime] = core.Duration.zero;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L1, 308, 12, "() {\n      // We intentionally don't null out _startTime. This means that if start()\n      // was ever called, the object is now in a bogus state. This weakly helps\n      // catch cases of use-after-dispose.\n      _startTime = Duration.zero;\n      return true;\n    }()");
    }
    get [_debugCreationStack]() {
      let t0;
      return dart.test(this[__Ticker__debugCreationStack_isSet]) ? (t0 = this[__Ticker__debugCreationStack], t0) : dart.throw(new _internal.LateError.fieldNI("_debugCreationStack"));
    }
    set [_debugCreationStack](t0) {
      if (t0 == null) dart.nullFailed(L1, 321, 19, "null");
      this[__Ticker__debugCreationStack_isSet] = true;
      this[__Ticker__debugCreationStack] = t0;
    }
    toString(opts) {
      let debugIncludeStack = opts && 'debugIncludeStack' in opts ? opts.debugIncludeStack : false;
      if (debugIncludeStack == null) dart.nullFailed(L1, 324, 26, "debugIncludeStack");
      let buffer = new core.StringBuffer.new();
      buffer.write(dart.str(object.objectRuntimeType(this, "Ticker")) + "(");
      if (!dart.test(dart.fn(() => {
        let t1;
        buffer.write((t1 = this.debugLabel, t1 == null ? "" : t1));
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L1, 327, 12, "() {\n      buffer.write(debugLabel ?? '');\n      return true;\n    }()");
      buffer.write(")");
      if (!dart.test(dart.fn(() => {
        if (dart.test(debugIncludeStack)) {
          buffer.writeln();
          buffer.writeln("The stack trace when the " + dart.str(this[$runtimeType]) + " was actually created was:");
          assertions.FlutterError.defaultStackFilter(dart.toString(this[_debugCreationStack])[$trimRight]()[$split]("\n"))[$forEach](dart.bind(buffer, 'writeln'));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L1, 332, 12, "() {\n      if (debugIncludeStack) {\n        buffer.writeln();\n        buffer.writeln('The stack trace when the $runtimeType was actually created was:');\n        FlutterError.defaultStackFilter(_debugCreationStack.toString().trimRight().split('\\n')).forEach(buffer.writeln);\n      }\n      return true;\n    }()");
      return buffer.toString();
    }
  };
  (ticker$.Ticker.new = function(_onTick, opts) {
    if (_onTick == null) dart.nullFailed(L1, 65, 15, "_onTick");
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    this[_future] = null;
    this[_muted] = false;
    this[_startTime] = null;
    this[_animationId] = null;
    this[__Ticker__debugCreationStack] = null;
    this[__Ticker__debugCreationStack_isSet] = false;
    this[_onTick$] = _onTick;
    this[debugLabel$] = debugLabel;
    if (!dart.test(dart.fn(() => {
      this[_debugCreationStack] = core.StackTrace.current;
      return true;
    }, VoidTobool())())) dart.assertFailed(null, L1, 66, 12, "() {\n      _debugCreationStack = StackTrace.current;\n      return true;\n    }()");
  }).prototype = ticker$.Ticker.prototype;
  dart.addTypeTests(ticker$.Ticker);
  dart.addTypeCaches(ticker$.Ticker);
  dart.setMethodSignature(ticker$.Ticker, () => ({
    __proto__: dart.getMethods(ticker$.Ticker.__proto__),
    start: dart.fnType(ticker$.TickerFuture, []),
    describeForError: dart.fnType(diagnostics.DiagnosticsNode, [core.String]),
    stop: dart.fnType(dart.void, [], {canceled: core.bool}, {}),
    [_tick]: dart.fnType(dart.void, [core.Duration]),
    scheduleTick: dart.fnType(dart.void, [], {rescheduling: core.bool}, {}),
    unscheduleTick: dart.fnType(dart.void, []),
    absorbTicker: dart.fnType(dart.void, [ticker$.Ticker]),
    dispose: dart.fnType(dart.void, []),
    toString: dart.fnType(core.String, [], {debugIncludeStack: core.bool}, {}),
    [$toString]: dart.fnType(core.String, [], {debugIncludeStack: core.bool}, {})
  }));
  dart.setGetterSignature(ticker$.Ticker, () => ({
    __proto__: dart.getGetters(ticker$.Ticker.__proto__),
    muted: core.bool,
    isTicking: core.bool,
    isActive: core.bool,
    scheduled: core.bool,
    shouldScheduleTick: core.bool,
    [_debugCreationStack]: core.StackTrace
  }));
  dart.setSetterSignature(ticker$.Ticker, () => ({
    __proto__: dart.getSetters(ticker$.Ticker.__proto__),
    muted: core.bool,
    [_debugCreationStack]: core.StackTrace
  }));
  dart.setLibraryUri(ticker$.Ticker, L0);
  dart.setFieldSignature(ticker$.Ticker, () => ({
    __proto__: dart.getFields(ticker$.Ticker.__proto__),
    [_future]: dart.fieldType(dart.nullable(ticker$.TickerFuture)),
    [_muted]: dart.fieldType(core.bool),
    [_startTime]: dart.fieldType(dart.nullable(core.Duration)),
    [_onTick$]: dart.finalFieldType(dart.fnType(dart.void, [core.Duration])),
    [_animationId]: dart.fieldType(dart.nullable(core.int)),
    debugLabel: dart.finalFieldType(dart.nullable(core.String)),
    [__Ticker__debugCreationStack]: dart.fieldType(dart.nullable(core.StackTrace)),
    [__Ticker__debugCreationStack_isSet]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(ticker$.Ticker, ['toString']);
  var _primaryCompleter = dart.privateName(ticker$, "_primaryCompleter");
  var _secondaryCompleter = dart.privateName(ticker$, "_secondaryCompleter");
  var _completed = dart.privateName(ticker$, "_completed");
  var TickerCanceled_ticker = dart.privateName(ticker$, "TickerCanceled.ticker");
  var C0;
  ticker$.TickerFuture = class TickerFuture extends core.Object {
    [_complete]() {
      let t1;
      if (!(this[_completed] == null)) dart.assertFailed(null, L1, 379, 12, "_completed == null");
      this[_completed] = true;
      this[_primaryCompleter].complete();
      t1 = this[_secondaryCompleter];
      t1 == null ? null : t1.complete();
    }
    [_cancel](ticker) {
      let t1;
      if (ticker == null) dart.nullFailed(L1, 385, 23, "ticker");
      if (!(this[_completed] == null)) dart.assertFailed(null, L1, 386, 12, "_completed == null");
      this[_completed] = false;
      t1 = this[_secondaryCompleter];
      t1 == null ? null : t1.completeError(new ticker$.TickerCanceled.new(ticker));
    }
    whenCompleteOrCancel(callback) {
      if (callback == null) dart.nullFailed(L1, 397, 42, "callback");
      function thunk(value) {
        callback();
      }
      dart.fn(thunk, dynamicTovoid());
      this.orCancel.then(dart.void, thunk, {onError: thunk});
    }
    get orCancel() {
      if (this[_secondaryCompleter] == null) {
        this[_secondaryCompleter] = CompleterOfvoid().new();
        if (this[_completed] != null) {
          if (dart.nullCheck(this[_completed])) {
            dart.nullCheck(this[_secondaryCompleter]).complete();
          } else {
            dart.nullCheck(this[_secondaryCompleter]).completeError(C0 || CT.C0);
          }
        }
      }
      return dart.nullCheck(this[_secondaryCompleter]).future;
    }
    asStream() {
      return this[_primaryCompleter].future.asStream();
    }
    catchError(onError, opts) {
      if (onError == null) dart.nullFailed(L1, 432, 36, "onError");
      let test = opts && 'test' in opts ? opts.test : null;
      return this[_primaryCompleter].future.catchError(onError, {test: test});
    }
    then(R, onValue, opts) {
      if (onValue == null) dart.nullFailed(L1, 437, 33, "onValue");
      let onError = opts && 'onError' in opts ? opts.onError : null;
      return this[_primaryCompleter].future.then(R, onValue, {onError: onError});
    }
    timeout(timeLimit, opts) {
      if (timeLimit == null) dart.nullFailed(L1, 442, 33, "timeLimit");
      let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
      VoidToNFutureOrOfvoid().as(onTimeout);
      return this[_primaryCompleter].future.timeout(timeLimit, {onTimeout: onTimeout});
    }
    whenComplete(action) {
      if (action == null) dart.nullFailed(L1, 447, 37, "action");
      return this[_primaryCompleter].future.whenComplete(action);
    }
    toString() {
      return dart.str(diagnostics.describeIdentity(this)) + "(" + (this[_completed] == null ? "active" : dart.nullCheck(this[_completed]) ? "complete" : "canceled") + ")";
    }
  };
  (ticker$.TickerFuture.__ = function() {
    this[_primaryCompleter] = CompleterOfvoid().new();
    this[_secondaryCompleter] = null;
    this[_completed] = null;
    ;
  }).prototype = ticker$.TickerFuture.prototype;
  (ticker$.TickerFuture.complete = function() {
    this[_primaryCompleter] = CompleterOfvoid().new();
    this[_secondaryCompleter] = null;
    this[_completed] = null;
    this[_complete]();
  }).prototype = ticker$.TickerFuture.prototype;
  ticker$.TickerFuture.prototype[dart.isFuture] = true;
  dart.addTypeTests(ticker$.TickerFuture);
  dart.addTypeCaches(ticker$.TickerFuture);
  ticker$.TickerFuture[dart.implements] = () => [async.Future$(dart.void)];
  dart.setMethodSignature(ticker$.TickerFuture, () => ({
    __proto__: dart.getMethods(ticker$.TickerFuture.__proto__),
    [_complete]: dart.fnType(dart.void, []),
    [_cancel]: dart.fnType(dart.void, [ticker$.Ticker]),
    whenCompleteOrCancel: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    asStream: dart.fnType(async.Stream$(dart.void), []),
    catchError: dart.fnType(async.Future$(dart.void), [core.Function], {test: dart.nullable(dart.fnType(core.bool, [core.Object]))}, {}),
    then: dart.gFnType(R => [async.Future$(R), [dart.fnType(async.FutureOr$(R), [dart.void])], {onError: dart.nullable(core.Function)}, {}], R => [dart.nullable(core.Object)]),
    timeout: dart.fnType(async.Future$(dart.void), [core.Duration], {onTimeout: dart.nullable(core.Object)}, {}),
    whenComplete: dart.fnType(async.Future$(dart.void), [dart.fnType(dart.dynamic, [])])
  }));
  dart.setGetterSignature(ticker$.TickerFuture, () => ({
    __proto__: dart.getGetters(ticker$.TickerFuture.__proto__),
    orCancel: async.Future$(dart.void)
  }));
  dart.setLibraryUri(ticker$.TickerFuture, L0);
  dart.setFieldSignature(ticker$.TickerFuture, () => ({
    __proto__: dart.getFields(ticker$.TickerFuture.__proto__),
    [_primaryCompleter]: dart.finalFieldType(async.Completer$(dart.void)),
    [_secondaryCompleter]: dart.fieldType(dart.nullable(async.Completer$(dart.void))),
    [_completed]: dart.fieldType(dart.nullable(core.bool))
  }));
  dart.defineExtensionMethods(ticker$.TickerFuture, ['toString']);
  ticker$.TickerCanceled = class TickerCanceled extends core.Object {
    get ticker() {
      return this[ticker$0];
    }
    set ticker(value) {
      super.ticker = value;
    }
    toString() {
      if (this.ticker != null) return "This ticker was canceled: " + dart.str(this.ticker);
      return "The ticker was canceled before the \"orCancel\" property was first used.";
    }
  };
  (ticker$.TickerCanceled.new = function(ticker = null) {
    this[ticker$0] = ticker;
    ;
  }).prototype = ticker$.TickerCanceled.prototype;
  dart.addTypeTests(ticker$.TickerCanceled);
  dart.addTypeCaches(ticker$.TickerCanceled);
  const ticker$0 = TickerCanceled_ticker;
  ticker$.TickerCanceled[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(ticker$.TickerCanceled, L0);
  dart.setFieldSignature(ticker$.TickerCanceled, () => ({
    __proto__: dart.getFields(ticker$.TickerCanceled.__proto__),
    ticker: dart.finalFieldType(dart.nullable(ticker$.Ticker))
  }));
  dart.defineExtensionMethods(ticker$.TickerCanceled, ['toString']);
  dart.trackLibraries("packages/flutter/src/scheduler/ticker.dart", {
    "package:flutter/src/scheduler/ticker.dart": ticker$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["ticker.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/scheduler/ticker.dart.lib.js"}');
  // Exports:
  return {
    src__scheduler__ticker: ticker$
  };
}));

//# sourceMappingURL=ticker.dart.lib.js.map
