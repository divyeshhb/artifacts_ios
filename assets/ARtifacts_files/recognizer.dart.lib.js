define(['dart_sdk', 'packages/flutter/src/gestures/debug.dart', 'packages/flutter/src/foundation/print.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/gestures/arena.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/gestures/binding.dart', 'packages/flutter/src/gestures/team.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__gestures__recognizer_dart(dart_sdk, packages__flutter__src__gestures__debug$46dart, packages__flutter__src__foundation__print$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__gestures__arena$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__gestures__binding$46dart, packages__flutter__src__gestures__team$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const debug = packages__flutter__src__gestures__debug$46dart.src__gestures__debug;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const arena = packages__flutter__src__gestures__arena$46dart.src__gestures__arena;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const binding = packages__flutter__src__gestures__binding$46dart.src__gestures__binding;
  const team = packages__flutter__src__gestures__team$46dart.src__gestures__team;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var recognizer = Object.create(dart.library);
  var $_set = dartx._set;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $times = dartx['*'];
  var $isNotEmpty = dartx.isNotEmpty;
  var $values = dartx.values;
  var $clear = dartx.clear;
  var $remove = dartx.remove;
  var $isEmpty = dartx.isEmpty;
  var $containsValue = dartx.containsValue;
  dart._checkModuleNullSafetyMode(false);
  var DragStartBehaviorL = () => (DragStartBehaviorL = dart.constFn(dart.legacy(recognizer.DragStartBehavior)))();
  var IdentityMapOfint$PointerDeviceKind = () => (IdentityMapOfint$PointerDeviceKind = dart.constFn(_js_helper.IdentityMap$(core.int, ui.PointerDeviceKind)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var DiagnosticsPropertyOfGestureRecognizer = () => (DiagnosticsPropertyOfGestureRecognizer = dart.constFn(diagnostics.DiagnosticsProperty$(recognizer.GestureRecognizer)))();
  var SyncIterableOfDiagnosticsNode = () => (SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(diagnostics.DiagnosticsNode)))();
  var IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics.DiagnosticsNode)))();
  var VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  var DiagnosticsPropertyOfObject = () => (DiagnosticsPropertyOfObject = dart.constFn(diagnostics.DiagnosticsProperty$(core.Object)))();
  var IdentityMapOfint$GestureArenaEntry = () => (IdentityMapOfint$GestureArenaEntry = dart.constFn(_js_helper.IdentityMap$(core.int, arena.GestureArenaEntry)))();
  var _IdentityHashSetOfint = () => (_IdentityHashSetOfint = dart.constFn(collection._IdentityHashSet$(core.int)))();
  var ListOfGestureArenaEntry = () => (ListOfGestureArenaEntry = dart.constFn(core.List$(arena.GestureArenaEntry)))();
  var GestureRecognizerStateL = () => (GestureRecognizerStateL = dart.constFn(dart.legacy(recognizer.GestureRecognizerState)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var EnumPropertyOfGestureRecognizerState = () => (EnumPropertyOfGestureRecognizerState = dart.constFn(diagnostics.EnumProperty$(recognizer.GestureRecognizerState)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/gestures/recognizer.dart";
  var L1 = "package:flutter/src/gestures/recognizer.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name$]: "DragStartBehavior.down",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name$]: "DragStartBehavior.start",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], DragStartBehaviorL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: recognizer.GestureRecognizerState.prototype,
        [_name$]: "GestureRecognizerState.ready",
        index: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: recognizer.GestureRecognizerState.prototype,
        [_name$]: "GestureRecognizerState.possible",
        index: 1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: recognizer.GestureRecognizerState.prototype,
        [_name$]: "GestureRecognizerState.defunct",
        index: 2
      });
    },
    get C6() {
      return C6 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], GestureRecognizerStateL());
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: recognizer.OffsetPair.prototype,
        [global$]: C8 || CT.C8,
        [local$]: C8 || CT.C8
      });
    }
  }, false);
  var _name$ = dart.privateName(recognizer, "_name");
  var C0;
  var C1;
  var C2;
  recognizer.DragStartBehavior = class DragStartBehavior extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (recognizer.DragStartBehavior.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 37, 6, "index");
    if (_name == null) dart.nullFailed(L0, 37, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = recognizer.DragStartBehavior.prototype;
  dart.addTypeTests(recognizer.DragStartBehavior);
  dart.addTypeCaches(recognizer.DragStartBehavior);
  dart.setLibraryUri(recognizer.DragStartBehavior, L1);
  dart.setFieldSignature(recognizer.DragStartBehavior, () => ({
    __proto__: dart.getFields(recognizer.DragStartBehavior.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(recognizer.DragStartBehavior, ['toString']);
  recognizer.DragStartBehavior.down = C0 || CT.C0;
  recognizer.DragStartBehavior.start = C1 || CT.C1;
  recognizer.DragStartBehavior.values = C2 || CT.C2;
  var _pointerToKind = dart.privateName(recognizer, "_pointerToKind");
  var _kindFilter = dart.privateName(recognizer, "_kindFilter");
  var debugOwner$ = dart.privateName(recognizer, "GestureRecognizer.debugOwner");
  const GestureArenaMember_DiagnosticableTreeMixin$36 = class GestureArenaMember_DiagnosticableTreeMixin extends arena.GestureArenaMember {};
  (GestureArenaMember_DiagnosticableTreeMixin$36.new = function() {
  }).prototype = GestureArenaMember_DiagnosticableTreeMixin$36.prototype;
  dart.applyMixin(GestureArenaMember_DiagnosticableTreeMixin$36, diagnostics.DiagnosticableTreeMixin);
  recognizer.GestureRecognizer = class GestureRecognizer extends GestureArenaMember_DiagnosticableTreeMixin$36 {
    get debugOwner() {
      return this[debugOwner$];
    }
    set debugOwner(value) {
      super.debugOwner = value;
    }
    addPointer(event) {
      if (event == null) dart.nullFailed(L0, 100, 36, "event");
      this[_pointerToKind][$_set](event.pointer, event.kind);
      if (dart.test(this.isPointerAllowed(event))) {
        this.addAllowedPointer(event);
      } else {
        this.handleNonAllowedPointer(event);
      }
    }
    addAllowedPointer(event) {
      if (event == null) dart.nullFailed(L0, 117, 43, "event");
    }
    handleNonAllowedPointer(event) {
      if (event == null) dart.nullFailed(L0, 126, 49, "event");
    }
    isPointerAllowed(event) {
      if (event == null) dart.nullFailed(L0, 130, 42, "event");
      return this[_kindFilter] == null || dart.equals(this[_kindFilter], event.kind);
    }
    getKindForPointer(pointer) {
      if (pointer == null) dart.nullFailed(L0, 141, 43, "pointer");
      if (!dart.test(this[_pointerToKind][$containsKey](pointer))) dart.assertFailed(null, L0, 142, 12, "_pointerToKind.containsKey(pointer)");
      return dart.nullCheck(this[_pointerToKind][$_get](pointer));
    }
    dispose() {
    }
    invokeCallback(T, name, callback, opts) {
      if (name == null) dart.nullFailed(L0, 169, 31, "name");
      if (callback == null) dart.nullFailed(L0, 169, 59, "callback");
      let debugReport = opts && 'debugReport' in opts ? opts.debugReport : null;
      if (!(callback != null)) dart.assertFailed(null, L0, 170, 12, "callback != null");
      let result = null;
      try {
        if (!dart.test(dart.fn(() => {
          let t0;
          if (dart.test(debug.debugPrintRecognizerCallbacksTrace)) {
            let report = debugReport != null ? debugReport() : null;
            let prefix = dart.test(debug.debugPrintGestureArenaDiagnostics) ? " "[$times](19) + "??? " : "";
            print.debugPrint(prefix + dart.str(this) + " calling " + dart.str(name) + " callback." + (dart.equals((t0 = report, t0 == null ? null : t0[$isNotEmpty]), true) ? " " + dart.str(report) : ""));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 173, 14, "() {\n        if (debugPrintRecognizerCallbacksTrace) {\n          final String? report = debugReport != null ? debugReport() : null;\n          // The 19 in the line below is the width of the prefix used by\n          // _debugLogDiagnostic in arena.dart.\n          final String prefix = debugPrintGestureArenaDiagnostics ? ' ' * 19 + '??? ' : '';\n          debugPrint('$prefix$this calling $name callback.${ report?.isNotEmpty == true ? \" $report\" : \"\" }');\n        }\n        return true;\n      }()");
        result = callback();
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        if (core.Object.is(exception)) {
          let collector = null;
          if (!dart.test(dart.fn(() => {
            collector = dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
              yield new diagnostics.StringProperty.new("Handler", name);
              yield new (DiagnosticsPropertyOfGestureRecognizer()).new("Recognizer", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
            }).bind(this)), VoidToIterableOfDiagnosticsNode());
            return true;
          }, VoidTobool())())) dart.assertFailed(null, L0, 186, 14, "() {\n        collector = () sync* {\n          yield StringProperty('Handler', name);\n          yield DiagnosticsProperty<GestureRecognizer>('Recognizer', this, style: DiagnosticsTreeStyle.errorProperty);\n        };\n        return true;\n      }()");
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "gesture", context: new assertions.ErrorDescription.new("while handling a gesture"), informationCollector: collector}));
        } else
          throw e;
      }
      return result;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 205, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfObject()).new("debugOwner", this.debugOwner, {defaultValue: null}));
    }
  };
  (recognizer.GestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[_pointerToKind] = new (IdentityMapOfint$PointerDeviceKind()).new();
    this[debugOwner$] = debugOwner;
    this[_kindFilter] = kind;
    ;
  }).prototype = recognizer.GestureRecognizer.prototype;
  dart.addTypeTests(recognizer.GestureRecognizer);
  dart.addTypeCaches(recognizer.GestureRecognizer);
  dart.setMethodSignature(recognizer.GestureRecognizer, () => ({
    __proto__: dart.getMethods(recognizer.GestureRecognizer.__proto__),
    addPointer: dart.fnType(dart.void, [events.PointerDownEvent]),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerDownEvent]),
    handleNonAllowedPointer: dart.fnType(dart.void, [events.PointerDownEvent]),
    isPointerAllowed: dart.fnType(core.bool, [events.PointerDownEvent]),
    getKindForPointer: dart.fnType(ui.PointerDeviceKind, [core.int]),
    dispose: dart.fnType(dart.void, []),
    invokeCallback: dart.gFnType(T => [dart.nullable(T), [core.String, dart.fnType(T, [])], {debugReport: dart.nullable(dart.fnType(core.String, []))}, {}], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(recognizer.GestureRecognizer, L1);
  dart.setFieldSignature(recognizer.GestureRecognizer, () => ({
    __proto__: dart.getFields(recognizer.GestureRecognizer.__proto__),
    debugOwner: dart.finalFieldType(dart.nullable(core.Object)),
    [_kindFilter]: dart.finalFieldType(dart.nullable(ui.PointerDeviceKind)),
    [_pointerToKind]: dart.finalFieldType(core.Map$(core.int, ui.PointerDeviceKind))
  }));
  var _entries = dart.privateName(recognizer, "_entries");
  var _trackedPointers = dart.privateName(recognizer, "_trackedPointers");
  var _team = dart.privateName(recognizer, "_team");
  var _addPointerToArena = dart.privateName(recognizer, "_addPointerToArena");
  recognizer.OneSequenceGestureRecognizer = class OneSequenceGestureRecognizer extends recognizer.GestureRecognizer {
    handleNonAllowedPointer(event) {
      if (event == null) dart.nullFailed(L0, 232, 49, "event");
      this.resolve(arena.GestureDisposition.rejected);
    }
    acceptGesture(pointer) {
      if (pointer == null) dart.nullFailed(L0, 241, 26, "pointer");
    }
    rejectGesture(pointer) {
      if (pointer == null) dart.nullFailed(L0, 244, 26, "pointer");
    }
    resolve(disposition) {
      if (disposition == null) dart.nullFailed(L0, 257, 35, "disposition");
      let localEntries = ListOfGestureArenaEntry().from(this[_entries][$values]);
      this[_entries][$clear]();
      for (let entry of localEntries)
        entry.resolve(disposition);
    }
    resolvePointer(pointer, disposition) {
      if (pointer == null) dart.nullFailed(L0, 268, 27, "pointer");
      if (disposition == null) dart.nullFailed(L0, 268, 55, "disposition");
      let entry = this[_entries][$_get](pointer);
      if (entry != null) {
        this[_entries][$remove](pointer);
        entry.resolve(disposition);
      }
    }
    dispose() {
      this.resolve(arena.GestureDisposition.rejected);
      for (let pointer of this[_trackedPointers])
        dart.nullCheck(binding.GestureBinding.instance).pointerRouter.removeRoute(pointer, dart.bind(this, 'handleEvent'));
      this[_trackedPointers].clear();
      if (!dart.test(this[_entries][$isEmpty])) dart.assertFailed(null, L0, 282, 12, "_entries.isEmpty");
      super.dispose();
    }
    get team() {
      return this[_team];
    }
    set team(value) {
      if (!(value != null)) dart.assertFailed(null, L0, 300, 12, "value != null");
      if (!dart.test(this[_entries][$isEmpty])) dart.assertFailed(null, L0, 301, 12, "_entries.isEmpty");
      if (!dart.test(this[_trackedPointers][$isEmpty])) dart.assertFailed(null, L0, 302, 12, "_trackedPointers.isEmpty");
      if (!(this[_team] == null)) dart.assertFailed(null, L0, 303, 12, "_team == null");
      this[_team] = value;
    }
    [_addPointerToArena](pointer) {
      if (pointer == null) dart.nullFailed(L0, 307, 44, "pointer");
      if (this[_team] != null) return dart.nullCheck(this[_team]).add(pointer, this);
      return dart.nullCheck(binding.GestureBinding.instance).gestureArena.add(pointer, this);
    }
    startTrackingPointer(pointer, transform = null) {
      if (pointer == null) dart.nullFailed(L0, 323, 33, "pointer");
      dart.nullCheck(binding.GestureBinding.instance).pointerRouter.addRoute(pointer, dart.bind(this, 'handleEvent'), transform);
      this[_trackedPointers].add(pointer);
      if (!!dart.test(this[_entries][$containsValue](pointer))) dart.assertFailed(null, L0, 326, 12, "!_entries.containsValue(pointer)");
      this[_entries][$_set](pointer, this[_addPointerToArena](pointer));
    }
    stopTrackingPointer(pointer) {
      if (pointer == null) dart.nullFailed(L0, 337, 32, "pointer");
      if (dart.test(this[_trackedPointers].contains(pointer))) {
        dart.nullCheck(binding.GestureBinding.instance).pointerRouter.removeRoute(pointer, dart.bind(this, 'handleEvent'));
        this[_trackedPointers].remove(pointer);
        if (dart.test(this[_trackedPointers][$isEmpty])) this.didStopTrackingLastPointer(pointer);
      }
    }
    stopTrackingIfPointerNoLongerDown(event) {
      if (event == null) dart.nullFailed(L0, 349, 55, "event");
      if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) this.stopTrackingPointer(event.pointer);
    }
  };
  (recognizer.OneSequenceGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[_entries] = new (IdentityMapOfint$GestureArenaEntry()).new();
    this[_trackedPointers] = new (_IdentityHashSetOfint()).new();
    this[_team] = null;
    recognizer.OneSequenceGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = recognizer.OneSequenceGestureRecognizer.prototype;
  dart.addTypeTests(recognizer.OneSequenceGestureRecognizer);
  dart.addTypeCaches(recognizer.OneSequenceGestureRecognizer);
  dart.setMethodSignature(recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getMethods(recognizer.OneSequenceGestureRecognizer.__proto__),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    resolve: dart.fnType(dart.void, [arena.GestureDisposition]),
    resolvePointer: dart.fnType(dart.void, [core.int, arena.GestureDisposition]),
    [_addPointerToArena]: dart.fnType(arena.GestureArenaEntry, [core.int]),
    startTrackingPointer: dart.fnType(dart.void, [core.int], [dart.nullable(vector_math_64.Matrix4)]),
    stopTrackingPointer: dart.fnType(dart.void, [core.int]),
    stopTrackingIfPointerNoLongerDown: dart.fnType(dart.void, [events.PointerEvent])
  }));
  dart.setGetterSignature(recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getGetters(recognizer.OneSequenceGestureRecognizer.__proto__),
    team: dart.nullable(team.GestureArenaTeam)
  }));
  dart.setSetterSignature(recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getSetters(recognizer.OneSequenceGestureRecognizer.__proto__),
    team: dart.nullable(team.GestureArenaTeam)
  }));
  dart.setLibraryUri(recognizer.OneSequenceGestureRecognizer, L1);
  dart.setFieldSignature(recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getFields(recognizer.OneSequenceGestureRecognizer.__proto__),
    [_entries]: dart.finalFieldType(core.Map$(core.int, arena.GestureArenaEntry)),
    [_trackedPointers]: dart.finalFieldType(core.Set$(core.int)),
    [_team]: dart.fieldType(dart.nullable(team.GestureArenaTeam))
  }));
  var C3;
  var C4;
  var C5;
  var C6;
  recognizer.GestureRecognizerState = class GestureRecognizerState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (recognizer.GestureRecognizerState.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 362, 6, "index");
    if (_name == null) dart.nullFailed(L0, 362, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = recognizer.GestureRecognizerState.prototype;
  dart.addTypeTests(recognizer.GestureRecognizerState);
  dart.addTypeCaches(recognizer.GestureRecognizerState);
  dart.setLibraryUri(recognizer.GestureRecognizerState, L1);
  dart.setFieldSignature(recognizer.GestureRecognizerState, () => ({
    __proto__: dart.getFields(recognizer.GestureRecognizerState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(recognizer.GestureRecognizerState, ['toString']);
  recognizer.GestureRecognizerState.ready = C3 || CT.C3;
  recognizer.GestureRecognizerState.possible = C4 || CT.C4;
  recognizer.GestureRecognizerState.defunct = C5 || CT.C5;
  recognizer.GestureRecognizerState.values = C6 || CT.C6;
  var _gestureAccepted = dart.privateName(recognizer, "_gestureAccepted");
  var _timer = dart.privateName(recognizer, "_timer");
  var _getGlobalDistance = dart.privateName(recognizer, "_getGlobalDistance");
  var _stopTimer = dart.privateName(recognizer, "_stopTimer");
  var deadline$ = dart.privateName(recognizer, "PrimaryPointerGestureRecognizer.deadline");
  var preAcceptSlopTolerance$ = dart.privateName(recognizer, "PrimaryPointerGestureRecognizer.preAcceptSlopTolerance");
  var postAcceptSlopTolerance$ = dart.privateName(recognizer, "PrimaryPointerGestureRecognizer.postAcceptSlopTolerance");
  var state = dart.privateName(recognizer, "PrimaryPointerGestureRecognizer.state");
  var primaryPointer = dart.privateName(recognizer, "PrimaryPointerGestureRecognizer.primaryPointer");
  var initialPosition = dart.privateName(recognizer, "PrimaryPointerGestureRecognizer.initialPosition");
  recognizer.PrimaryPointerGestureRecognizer = class PrimaryPointerGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    get deadline() {
      return this[deadline$];
    }
    set deadline(value) {
      super.deadline = value;
    }
    get preAcceptSlopTolerance() {
      return this[preAcceptSlopTolerance$];
    }
    set preAcceptSlopTolerance(value) {
      super.preAcceptSlopTolerance = value;
    }
    get postAcceptSlopTolerance() {
      return this[postAcceptSlopTolerance$];
    }
    set postAcceptSlopTolerance(value) {
      super.postAcceptSlopTolerance = value;
    }
    get state() {
      return this[state];
    }
    set state(value) {
      this[state] = value;
    }
    get primaryPointer() {
      return this[primaryPointer];
    }
    set primaryPointer(value) {
      this[primaryPointer] = value;
    }
    get initialPosition() {
      return this[initialPosition];
    }
    set initialPosition(value) {
      this[initialPosition] = value;
    }
    addAllowedPointer(event) {
      if (event == null) dart.nullFailed(L0, 448, 43, "event");
      this.startTrackingPointer(event.pointer, event.transform);
      if (dart.equals(this.state, recognizer.GestureRecognizerState.ready)) {
        this.state = recognizer.GestureRecognizerState.possible;
        this.primaryPointer = event.pointer;
        this.initialPosition = new recognizer.OffsetPair.new({local: event.localPosition, global: event.position});
        if (this.deadline != null) this[_timer] = async.Timer.new(dart.nullCheck(this.deadline), dart.fn(() => this.didExceedDeadlineWithEvent(event), VoidTovoid()));
      }
    }
    handleEvent(event) {
      if (event == null) dart.nullFailed(L0, 460, 33, "event");
      if (!!dart.equals(this.state, recognizer.GestureRecognizerState.ready)) dart.assertFailed(null, L0, 461, 12, "state != GestureRecognizerState.ready");
      if (dart.equals(this.state, recognizer.GestureRecognizerState.possible) && event.pointer == this.primaryPointer) {
        let isPreAcceptSlopPastTolerance = !dart.test(this[_gestureAccepted]) && this.preAcceptSlopTolerance != null && dart.notNull(this[_getGlobalDistance](event)) > dart.nullCheck(this.preAcceptSlopTolerance);
        let isPostAcceptSlopPastTolerance = dart.test(this[_gestureAccepted]) && this.postAcceptSlopTolerance != null && dart.notNull(this[_getGlobalDistance](event)) > dart.nullCheck(this.postAcceptSlopTolerance);
        if (events.PointerMoveEvent.is(event) && (isPreAcceptSlopPastTolerance || isPostAcceptSlopPastTolerance)) {
          this.resolve(arena.GestureDisposition.rejected);
          this.stopTrackingPointer(dart.nullCheck(this.primaryPointer));
        } else {
          this.handlePrimaryPointer(event);
        }
      }
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    didExceedDeadline() {
      if (!(this.deadline == null)) dart.assertFailed(null, L0, 492, 12, "deadline == null");
    }
    didExceedDeadlineWithEvent(event) {
      if (event == null) dart.nullFailed(L0, 501, 52, "event");
      this.didExceedDeadline();
    }
    acceptGesture(pointer) {
      if (pointer == null) dart.nullFailed(L0, 506, 26, "pointer");
      if (pointer == this.primaryPointer) {
        this[_stopTimer]();
        this[_gestureAccepted] = true;
      }
    }
    rejectGesture(pointer) {
      if (pointer == null) dart.nullFailed(L0, 514, 26, "pointer");
      if (pointer == this.primaryPointer && dart.equals(this.state, recognizer.GestureRecognizerState.possible)) {
        this[_stopTimer]();
        this.state = recognizer.GestureRecognizerState.defunct;
      }
    }
    didStopTrackingLastPointer(pointer) {
      if (pointer == null) dart.nullFailed(L0, 522, 39, "pointer");
      if (!!dart.equals(this.state, recognizer.GestureRecognizerState.ready)) dart.assertFailed(null, L0, 523, 12, "state != GestureRecognizerState.ready");
      this[_stopTimer]();
      this.state = recognizer.GestureRecognizerState.ready;
    }
    dispose() {
      this[_stopTimer]();
      super.dispose();
    }
    [_stopTimer]() {
      if (this[_timer] != null) {
        dart.nullCheck(this[_timer]).cancel();
        this[_timer] = null;
      }
    }
    [_getGlobalDistance](event) {
      if (event == null) dart.nullFailed(L0, 541, 42, "event");
      let offset = event.position['-'](dart.nullCheck(this.initialPosition).global);
      return offset.distance;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 547, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfGestureRecognizerState()).new("state", this.state));
    }
  };
  (recognizer.PrimaryPointerGestureRecognizer.new = function(opts) {
    let deadline = opts && 'deadline' in opts ? opts.deadline : null;
    let preAcceptSlopTolerance = opts && 'preAcceptSlopTolerance' in opts ? opts.preAcceptSlopTolerance : 18;
    let postAcceptSlopTolerance = opts && 'postAcceptSlopTolerance' in opts ? opts.postAcceptSlopTolerance : 18;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[state] = recognizer.GestureRecognizerState.ready;
    this[primaryPointer] = null;
    this[initialPosition] = null;
    this[_gestureAccepted] = false;
    this[_timer] = null;
    this[deadline$] = deadline;
    this[preAcceptSlopTolerance$] = preAcceptSlopTolerance;
    this[postAcceptSlopTolerance$] = postAcceptSlopTolerance;
    if (!(preAcceptSlopTolerance == null || dart.notNull(preAcceptSlopTolerance) >= 0)) dart.assertFailed("The preAcceptSlopTolerance must be positive or null", L0, 396, 10, "preAcceptSlopTolerance == null || preAcceptSlopTolerance >= 0");
    if (!(postAcceptSlopTolerance == null || dart.notNull(postAcceptSlopTolerance) >= 0)) dart.assertFailed("The postAcceptSlopTolerance must be positive or null", L0, 400, 10, "postAcceptSlopTolerance == null || postAcceptSlopTolerance >= 0");
    recognizer.PrimaryPointerGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = recognizer.PrimaryPointerGestureRecognizer.prototype;
  dart.addTypeTests(recognizer.PrimaryPointerGestureRecognizer);
  dart.addTypeCaches(recognizer.PrimaryPointerGestureRecognizer);
  dart.setMethodSignature(recognizer.PrimaryPointerGestureRecognizer, () => ({
    __proto__: dart.getMethods(recognizer.PrimaryPointerGestureRecognizer.__proto__),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    didExceedDeadline: dart.fnType(dart.void, []),
    didExceedDeadlineWithEvent: dart.fnType(dart.void, [events.PointerDownEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    [_stopTimer]: dart.fnType(dart.void, []),
    [_getGlobalDistance]: dart.fnType(core.double, [events.PointerEvent])
  }));
  dart.setLibraryUri(recognizer.PrimaryPointerGestureRecognizer, L1);
  dart.setFieldSignature(recognizer.PrimaryPointerGestureRecognizer, () => ({
    __proto__: dart.getFields(recognizer.PrimaryPointerGestureRecognizer.__proto__),
    deadline: dart.finalFieldType(dart.nullable(core.Duration)),
    preAcceptSlopTolerance: dart.finalFieldType(dart.nullable(core.double)),
    postAcceptSlopTolerance: dart.finalFieldType(dart.nullable(core.double)),
    state: dart.fieldType(recognizer.GestureRecognizerState),
    primaryPointer: dart.fieldType(dart.nullable(core.int)),
    initialPosition: dart.fieldType(dart.nullable(recognizer.OffsetPair)),
    [_gestureAccepted]: dart.fieldType(core.bool),
    [_timer]: dart.fieldType(dart.nullable(async.Timer))
  }));
  var local$ = dart.privateName(recognizer, "OffsetPair.local");
  var global$ = dart.privateName(recognizer, "OffsetPair.global");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C8;
  var C7;
  recognizer.OffsetPair = class OffsetPair extends core.Object {
    get local() {
      return this[local$];
    }
    set local(value) {
      super.local = value;
    }
    get global() {
      return this[global$];
    }
    set global(value) {
      super.global = value;
    }
    static fromEventPosition(event) {
      if (event == null) dart.nullFailed(L0, 567, 53, "event");
      return new recognizer.OffsetPair.new({local: event.localPosition, global: event.position});
    }
    static fromEventDelta(event) {
      if (event == null) dart.nullFailed(L0, 573, 50, "event");
      return new recognizer.OffsetPair.new({local: event.localDelta, global: event.delta});
    }
    ['+'](other) {
      if (other == null) dart.nullFailed(L0, 588, 35, "other");
      return new recognizer.OffsetPair.new({local: this.local['+'](other.local), global: this.global['+'](other.global)});
    }
    ['-'](other) {
      if (other == null) dart.nullFailed(L0, 596, 35, "other");
      return new recognizer.OffsetPair.new({local: this.local['-'](other.local), global: this.global['-'](other.global)});
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "OffsetPair")) + "(local: " + dart.str(this.local) + ", global: " + dart.str(this.global) + ")";
    }
  };
  (recognizer.OffsetPair.new = function(opts) {
    let local = opts && 'local' in opts ? opts.local : null;
    if (local == null) dart.nullFailed(L0, 561, 19, "local");
    let global = opts && 'global' in opts ? opts.global : null;
    if (global == null) dart.nullFailed(L0, 562, 19, "global");
    this[local$] = local;
    this[global$] = global;
    ;
  }).prototype = recognizer.OffsetPair.prototype;
  dart.addTypeTests(recognizer.OffsetPair);
  dart.addTypeCaches(recognizer.OffsetPair);
  dart.setMethodSignature(recognizer.OffsetPair, () => ({
    __proto__: dart.getMethods(recognizer.OffsetPair.__proto__),
    '+': dart.fnType(recognizer.OffsetPair, [recognizer.OffsetPair]),
    '-': dart.fnType(recognizer.OffsetPair, [recognizer.OffsetPair])
  }));
  dart.setLibraryUri(recognizer.OffsetPair, L1);
  dart.setFieldSignature(recognizer.OffsetPair, () => ({
    __proto__: dart.getFields(recognizer.OffsetPair.__proto__),
    local: dart.finalFieldType(ui.Offset),
    global: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(recognizer.OffsetPair, ['toString']);
  dart.defineLazy(recognizer.OffsetPair, {
    /*recognizer.OffsetPair.zero*/get zero() {
      return C7 || CT.C7;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/gestures/recognizer.dart", {
    "package:flutter/src/gestures/recognizer.dart": recognizer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["recognizer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4CA;;;QARK;;;;;EAQL;;;;;;;;;;;;;;;;;;;;;IA8BgB;;;;;;;UAyBmB;AACW,MAA1C,AAAc,4BAAC,AAAM,KAAD,UAAY,AAAM,KAAD;AACrC,oBAAI,sBAAiB,KAAK;AACA,QAAxB,uBAAkB,KAAK;;AAEO,QAA9B,6BAAwB,KAAK;;IAEjC;;UAUwC;IAAS;;UASH;IAAS;;UAIhB;AAGrC,YAAO,AAAY,AAAQ,sBAAL,QAAoB,YAAZ,mBAAe,AAAM,KAAD;IACpD;;UAOwC;AACtC,qBAAO,AAAe,mCAAY,OAAO;AACzC,YAA8B,gBAAvB,AAAc,4BAAC,OAAO;IAC/B;;IASiB;sBAgBW,MAA4B;UAA5B;UAA4B;UAA+B;AACrF,YAAO,AAAS,QAAD,IAAI;AAChB;AACH;AACE,uBAAO,AASN;;AARC,wBAAI;AACY,yBAAS,AAAY,WAAD,IAAI,OAAO,AAAW,WAAA,KAAK;AAGhD,mCAAS,2CAAoC,AAAI,AAAK,YAAH,MAAK,OAAO;AACuB,YAAnG,AAAU,iBAAG,AAAqF,MAA/E,YAAC,QAAI,uBAAU,IAAI,oBAAgC,kBAAnB,MAAM,eAAN,OAAQ,kBAAc,QAAO,AAAW,eAAR,MAAM,IAAI;;AAE/F,gBAAO;;AAEU,QAAnB,SAAS,AAAQ,QAAA;;YACV;YAAW;AAAlB;AACsB;AACtB,yBAAO,AAMN;AAFE,YAHD,YAAY;AACV,oBAAM,mCAAe,WAAW,IAAI;AACpC,oBAAM,mDAAuC,cAAc,cAAkC;YAC9F;AACD,kBAAO;;AAQP,UANW,oCAAY,mDACZ,SAAS,SACb,KAAK,WACH,oBACA,oCAAiB,mDACJ,SAAS;;;;AAGnC,YAAO,OAAM;IACf;;UAGqD;AACd,MAA/B,0BAAoB,UAAU;AACqD,MAAzF,AAAW,UAAD,KAAK,wCAA4B,cAAc,gCAA0B;IACrF;;;QA3IyB;QAA+B;IActB,uBAAyC;IAdlD;IAAqD,oBAAE,IAAI;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAmKtC;AACR,MAApC,aAA2B;IAC7B;;UAOuB;IAAW;;UAGX;IAAW;;UAaF;AACA,yBAAe,+BAA6B,AAAS;AACnE,MAAhB,AAAS;AACT,eAA6B,QAAS,aAAY;AACtB,QAA1B,AAAM,KAAD,SAAS,WAAW;IAC7B;mBAMwB,SAA4B;UAA5B;UAA4B;AACzB,kBAAQ,AAAQ,sBAAC,OAAO;AACjD,UAAI,KAAK,IAAI;AACa,QAAxB,AAAS,wBAAO,OAAO;AACG,QAA1B,AAAM,KAAD,SAAS,WAAW;;IAE7B;;AAIsC,MAApC,aAA2B;AAC3B,eAAe,UAAW;AACgD,QAAjD,AAAE,AAAc,eAAxB,2DAAoC,OAAO,YAAE;AACtC,MAAxB,AAAiB;AACjB,qBAAO,AAAS;AACD,MAAT;IACR;;AAY8B;IAAK;aAGR;AACzB,YAAO,AAAM,KAAD,IAAI;AAChB,qBAAO,AAAS;AAChB,qBAAO,AAAiB;AACxB,YAAO,AAAM,eAAG;AACH,MAAb,cAAQ,KAAK;IACf;;UAEyC;AACvC,UAAI,eAAS,MACX,MAAY,AAAE,gBAAP,iBAAW,OAAO,EAAE;AAC7B,YAA8B,AAAE,AAAa,gBAAvB,kDAA2B,OAAO,EAAE;IAC5D;yBAY8B,SAAmB;UAAnB;AACoD,MAAzD,AAAE,AAAc,eAAxB,wDAAiC,OAAO,YAAE,sBAAa,SAAS;AAClD,MAA7B,AAAiB,2BAAI,OAAO;AAC5B,WAAO,WAAC,AAAS,+BAAc,OAAO;AACS,MAA/C,AAAQ,sBAAC,OAAO,EAAI,yBAAmB,OAAO;IAChD;;UAS6B;AAC3B,oBAAI,AAAiB,gCAAS,OAAO;AACqC,QAAjD,AAAE,AAAc,eAAxB,2DAAoC,OAAO,YAAE;AAC5B,QAAhC,AAAiB,8BAAO,OAAO;AAC/B,sBAAI,AAAiB,mCACnB,AAAmC,gCAAR,OAAO;;IAExC;;UAKoD;AAClD,UAAU,yBAAN,KAAK,KAA4B,6BAAN,KAAK,GAClC,AAAkC,yBAAd,AAAM,KAAD;IAC7B;;;QAhIU;QACW;IAGa,iBAAmC;IACtD,yBAAmB;IAoEhB;AAvEb,kFAAkB,UAAU,QAAQ,IAAI;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqJhD;;;QAbK;;;;;EAaL;;;;;;;;;;;;;;;;;;;;;;;;;IAmCkB;;;;;;IASF;;;;;;IAUA;;;;;;IAKS;;;;;;IAGlB;;;;;;IAGO;;;;;;;UAQ4B;AACc,MAApD,0BAAqB,AAAM,KAAD,UAAU,AAAM,KAAD;AACzC,UAAU,YAAN,YAAgC;AACK,QAAvC,aAA+B;AACD,QAA9B,sBAAiB,AAAM,KAAD;AAC0D,QAAhF,uBAAkB,sCAAkB,AAAM,KAAD,wBAAwB,AAAM,KAAD;AACtE,YAAI,iBAAY,MACd,AAAkE,eAAzD,gBAAc,eAAR,gBAAW,cAAM,gCAA2B,KAAK;;IAEtE;;UAG8B;AAC5B,WAAa,aAAN,YAAgC;AACvC,UAAU,YAAN,YAAgC,+CAAY,AAAM,AAAQ,KAAT,YAAY;AACpD,2CAEwB,WAD9B,2BACD,+BAA0B,QACA,aAA1B,yBAAmB,KAAK,KAA0B,eAAtB;AACrB,4CAEyB,UADhC,2BACA,gCAA2B,QACD,aAA1B,yBAAmB,KAAK,KAA2B,eAAvB;AAEhC,YAAU,2BAAN,KAAK,MAAyB,4BAA4B,IAAI,6BAA6B;AACzD,UAApC,aAA2B;AACS,UAApC,yBAAkC,eAAd;;AAEO,UAA3B,0BAAqB,KAAK;;;AAGU,MAAxC,uCAAkC,KAAK;IACzC;;AAYE,YAAO,AAAS,iBAAG;IACrB;;UAQiD;AAC5B,MAAnB;IACF;;UAGuB;AACrB,UAAI,AAAQ,OAAD,IAAI;AACD,QAAZ;AACuB,QAAvB,yBAAmB;;IAEvB;;UAGuB;AACrB,UAAI,AAAQ,OAAD,IAAI,uBAAwB,YAAN,YAAgC;AACnD,QAAZ;AACsC,QAAtC,aAA+B;;IAEnC;;UAGoC;AAClC,WAAa,aAAN,YAAgC;AAC3B,MAAZ;AACoC,MAApC,aAA+B;IACjC;;AAIc,MAAZ;AACe,MAAT;IACR;;AAGE,UAAI,gBAAU;AACI,QAAV,AAAE,eAAR;AACa,QAAb,eAAS;;IAEb;;UAEuC;AACxB,mBAAS,AAAM,AAAS,KAAV,eAA2B,AAAE,eAAjB;AACvC,YAAO,AAAO,OAAD;IACf;;UAGqD;AACd,MAA/B,0BAAoB,UAAU;AACgC,MAApE,AAAW,UAAD,KAAK,iDAAqC,SAAS;IAC/D;;;QAhKO;QACA;QACA;QACG;QACW;IAwCE,cAA+B;IAGjD;IAGO;IAIP,yBAAmB;IACjB;IAvDA;IACA;IACA;UAIA,AAAuB,AAAQ,sBAAT,IAAI,QAA+B,aAAvB,sBAAsB,KAAI,sBAC5D;UAGA,AAAwB,AAAQ,uBAAT,IAAI,QAAgC,aAAxB,uBAAuB,KAAI,sBAC9D;AAEF,qFAAkB,UAAU,QAAQ,IAAI;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkLjC;;;;;;IAIA;;;;;;;UAlBqC;AAChD,YAAO,uCAAkB,AAAM,KAAD,wBAAwB,AAAM,KAAD;IAC7D;;UAI+C;AAC7C,YAAO,uCAAkB,AAAM,KAAD,qBAAqB,AAAM,KAAD;IAC1D;;UAagC;AAC9B,YAAO,uCACE,AAAM,gBAAE,AAAM,KAAD,iBACZ,AAAO,iBAAE,AAAM,KAAD;IAE1B;;UAGgC;AAC9B,YAAO,uCACE,AAAM,gBAAE,AAAM,KAAD,iBACZ,AAAO,iBAAE,AAAM,KAAD;IAE1B;;AAGqB,YAA0E,UAAvE,yBAAkB,MAAM,iBAAc,sBAAS,cAAK,wBAAW,eAAM;IAAE;;;QA3C/E;;QACA;;IADA;IACA;;EACd;;;;;;;;;;;;;;;;MAesB,0BAAI","file":"../../../../../../../../../../packages/flutter/src/gestures/recognizer.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__recognizer: recognizer
  };
}));

//# sourceMappingURL=recognizer.dart.lib.js.map
