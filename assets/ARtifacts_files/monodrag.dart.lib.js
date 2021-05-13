define(['dart_sdk', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/gestures/velocity_tracker.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/gestures/arena.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/gestures/drag_details.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__gestures__monodrag_dart(dart_sdk, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__gestures__velocity_tracker$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__gestures__arena$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__gestures__drag_details$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _internal = dart_sdk._internal;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const velocity_tracker = packages__flutter__src__gestures__velocity_tracker$46dart.src__gestures__velocity_tracker;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const arena = packages__flutter__src__gestures__arena$46dart.src__gestures__arena;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const drag_details = packages__flutter__src__gestures__drag_details$46dart.src__gestures__drag_details;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var monodrag = Object.create(dart.library);
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $sign = dartx.sign;
  var $clear = dartx.clear;
  var $abs = dartx.abs;
  dart._checkModuleNullSafetyMode(false);
  var _DragStateL = () => (_DragStateL = dart.constFn(dart.legacy(monodrag._DragState)))();
  var PointerEventToVelocityTracker = () => (PointerEventToVelocityTracker = dart.constFn(dart.fnType(velocity_tracker.VelocityTracker, [events.PointerEvent])))();
  var IdentityMapOfint$VelocityTracker = () => (IdentityMapOfint$VelocityTracker = dart.constFn(_js_helper.IdentityMap$(core.int, velocity_tracker.VelocityTracker)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  var EnumPropertyOfDragStartBehavior = () => (EnumPropertyOfDragStartBehavior = dart.constFn(diagnostics.EnumProperty$(recognizer.DragStartBehavior)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/gestures/monodrag.dart";
  var L1 = "package:flutter/src/gestures/monodrag.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: monodrag._DragState.prototype,
        [_name$]: "_DragState.ready",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: monodrag._DragState.prototype,
        [_name$]: "_DragState.possible",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: monodrag._DragState.prototype,
        [_name$]: "_DragState.accepted",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], _DragStateL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name]: "DragStartBehavior.start",
        index: 1
      });
    },
    get C5() {
      return C5 = dart.fn(monodrag.DragGestureRecognizer._defaultBuilder, PointerEventToVelocityTracker());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name]: "DragStartBehavior.down",
        index: 0
      });
    }
  }, false);
  var _name$ = dart.privateName(monodrag, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  monodrag._DragState = class _DragState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (monodrag._DragState.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 15, 6, "index");
    if (_name == null) dart.nullFailed(L0, 15, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = monodrag._DragState.prototype;
  dart.addTypeTests(monodrag._DragState);
  dart.addTypeCaches(monodrag._DragState);
  dart.setLibraryUri(monodrag._DragState, L1);
  dart.setFieldSignature(monodrag._DragState, () => ({
    __proto__: dart.getFields(monodrag._DragState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(monodrag._DragState, ['toString']);
  monodrag._DragState.ready = C0 || CT.C0;
  monodrag._DragState.possible = C1 || CT.C1;
  monodrag._DragState.accepted = C2 || CT.C2;
  monodrag._DragState.values = C3 || CT.C3;
  var _name = dart.privateName(recognizer, "_name");
  var C4;
  var C5;
  var _state = dart.privateName(monodrag, "_state");
  var __DragGestureRecognizer__initialPosition = dart.privateName(monodrag, "_#DragGestureRecognizer#_initialPosition");
  var __DragGestureRecognizer__initialPosition_isSet = dart.privateName(monodrag, "_#DragGestureRecognizer#_initialPosition#isSet");
  var __DragGestureRecognizer__pendingDragOffset = dart.privateName(monodrag, "_#DragGestureRecognizer#_pendingDragOffset");
  var __DragGestureRecognizer__pendingDragOffset_isSet = dart.privateName(monodrag, "_#DragGestureRecognizer#_pendingDragOffset#isSet");
  var _lastPendingEventTimestamp = dart.privateName(monodrag, "_lastPendingEventTimestamp");
  var _initialButtons = dart.privateName(monodrag, "_initialButtons");
  var _lastTransform = dart.privateName(monodrag, "_lastTransform");
  var __DragGestureRecognizer__globalDistanceMoved = dart.privateName(monodrag, "_#DragGestureRecognizer#_globalDistanceMoved");
  var __DragGestureRecognizer__globalDistanceMoved_isSet = dart.privateName(monodrag, "_#DragGestureRecognizer#_globalDistanceMoved#isSet");
  var _velocityTrackers = dart.privateName(monodrag, "_velocityTrackers");
  var _initialPosition = dart.privateName(monodrag, "_initialPosition");
  var _pendingDragOffset = dart.privateName(monodrag, "_pendingDragOffset");
  var _globalDistanceMoved = dart.privateName(monodrag, "_globalDistanceMoved");
  var _checkDown = dart.privateName(monodrag, "_checkDown");
  var _giveUpPointer = dart.privateName(monodrag, "_giveUpPointer");
  var _getDeltaForDetails = dart.privateName(monodrag, "_getDeltaForDetails");
  var _getPrimaryValueFromOffset = dart.privateName(monodrag, "_getPrimaryValueFromOffset");
  var _checkUpdate = dart.privateName(monodrag, "_checkUpdate");
  var _hasSufficientGlobalDistanceToAccept = dart.privateName(monodrag, "_hasSufficientGlobalDistanceToAccept");
  var C6;
  var _checkStart = dart.privateName(monodrag, "_checkStart");
  var _checkCancel = dart.privateName(monodrag, "_checkCancel");
  var _checkEnd = dart.privateName(monodrag, "_checkEnd");
  var dragStartBehavior$ = dart.privateName(monodrag, "DragGestureRecognizer.dragStartBehavior");
  var onDown = dart.privateName(monodrag, "DragGestureRecognizer.onDown");
  var onStart = dart.privateName(monodrag, "DragGestureRecognizer.onStart");
  var onUpdate = dart.privateName(monodrag, "DragGestureRecognizer.onUpdate");
  var onEnd = dart.privateName(monodrag, "DragGestureRecognizer.onEnd");
  var onCancel = dart.privateName(monodrag, "DragGestureRecognizer.onCancel");
  var minFlingDistance = dart.privateName(monodrag, "DragGestureRecognizer.minFlingDistance");
  var minFlingVelocity = dart.privateName(monodrag, "DragGestureRecognizer.minFlingVelocity");
  var maxFlingVelocity = dart.privateName(monodrag, "DragGestureRecognizer.maxFlingVelocity");
  var velocityTrackerBuilder$ = dart.privateName(monodrag, "DragGestureRecognizer.velocityTrackerBuilder");
  monodrag.DragGestureRecognizer = class DragGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      this[dragStartBehavior$] = value;
    }
    get onDown() {
      return this[onDown];
    }
    set onDown(value) {
      this[onDown] = value;
    }
    get onStart() {
      return this[onStart];
    }
    set onStart(value) {
      this[onStart] = value;
    }
    get onUpdate() {
      return this[onUpdate];
    }
    set onUpdate(value) {
      this[onUpdate] = value;
    }
    get onEnd() {
      return this[onEnd];
    }
    set onEnd(value) {
      this[onEnd] = value;
    }
    get onCancel() {
      return this[onCancel];
    }
    set onCancel(value) {
      this[onCancel] = value;
    }
    get minFlingDistance() {
      return this[minFlingDistance];
    }
    set minFlingDistance(value) {
      this[minFlingDistance] = value;
    }
    get minFlingVelocity() {
      return this[minFlingVelocity];
    }
    set minFlingVelocity(value) {
      this[minFlingVelocity] = value;
    }
    get maxFlingVelocity() {
      return this[maxFlingVelocity];
    }
    set maxFlingVelocity(value) {
      this[maxFlingVelocity] = value;
    }
    get velocityTrackerBuilder() {
      return this[velocityTrackerBuilder$];
    }
    set velocityTrackerBuilder(value) {
      this[velocityTrackerBuilder$] = value;
    }
    static _defaultBuilder(event) {
      if (event == null) dart.nullFailed(L0, 75, 55, "event");
      return new velocity_tracker.VelocityTracker.withKind(event.kind);
    }
    get [_initialPosition]() {
      let t0;
      return dart.test(this[__DragGestureRecognizer__initialPosition_isSet]) ? (t0 = this[__DragGestureRecognizer__initialPosition], t0) : dart.throw(new _internal.LateError.fieldNI("_initialPosition"));
    }
    set [_initialPosition](t0) {
      if (t0 == null) dart.nullFailed(L0, 204, 19, "null");
      this[__DragGestureRecognizer__initialPosition_isSet] = true;
      this[__DragGestureRecognizer__initialPosition] = t0;
    }
    get [_pendingDragOffset]() {
      let t1;
      return dart.test(this[__DragGestureRecognizer__pendingDragOffset_isSet]) ? (t1 = this[__DragGestureRecognizer__pendingDragOffset], t1) : dart.throw(new _internal.LateError.fieldNI("_pendingDragOffset"));
    }
    set [_pendingDragOffset](t1) {
      if (t1 == null) dart.nullFailed(L0, 205, 19, "null");
      this[__DragGestureRecognizer__pendingDragOffset_isSet] = true;
      this[__DragGestureRecognizer__pendingDragOffset] = t1;
    }
    get [_globalDistanceMoved]() {
      let t2;
      return dart.test(this[__DragGestureRecognizer__globalDistanceMoved_isSet]) ? (t2 = this[__DragGestureRecognizer__globalDistanceMoved], t2) : dart.throw(new _internal.LateError.fieldNI("_globalDistanceMoved"));
    }
    set [_globalDistanceMoved](t2) {
      if (t2 == null) dart.nullFailed(L0, 216, 15, "null");
      this[__DragGestureRecognizer__globalDistanceMoved_isSet] = true;
      this[__DragGestureRecognizer__globalDistanceMoved] = t2;
    }
    isPointerAllowed(event) {
      if (event == null) dart.nullFailed(L0, 232, 38, "event");
      if (this[_initialButtons] == null) {
        switch (event.buttons) {
          case 1:
          {
            if (this.onDown == null && this.onStart == null && this.onUpdate == null && this.onEnd == null && this.onCancel == null) return false;
            break;
          }
          default:
          {
            return false;
          }
        }
      } else {
        if (event.buttons != this[_initialButtons]) {
          return false;
        }
      }
      return super.isPointerAllowed(events.PointerDownEvent.as(event));
    }
    addAllowedPointer(event) {
      let t3;
      if (event == null) dart.nullFailed(L0, 256, 39, "event");
      this.startTrackingPointer(event.pointer, event.transform);
      this[_velocityTrackers][$_set](event.pointer, (t3 = event, this.velocityTrackerBuilder(t3)));
      if (dart.equals(this[_state], monodrag._DragState.ready)) {
        this[_state] = monodrag._DragState.possible;
        this[_initialPosition] = new recognizer.OffsetPair.new({global: event.position, local: event.localPosition});
        this[_initialButtons] = event.buttons;
        this[_pendingDragOffset] = recognizer.OffsetPair.zero;
        this[_globalDistanceMoved] = 0.0;
        this[_lastPendingEventTimestamp] = event.timeStamp;
        this[_lastTransform] = event.transform;
        this[_checkDown]();
      } else if (dart.equals(this[_state], monodrag._DragState.accepted)) {
        this.resolve(arena.GestureDisposition.accepted);
      }
    }
    handleEvent(event) {
      let t3;
      if (event == null) dart.nullFailed(L0, 274, 33, "event");
      if (!!dart.equals(this[_state], monodrag._DragState.ready)) dart.assertFailed(null, L0, 275, 12, "_state != _DragState.ready");
      if (!dart.test(event.synthesized) && (events.PointerDownEvent.is(event) || events.PointerMoveEvent.is(event))) {
        let tracker = dart.nullCheck(this[_velocityTrackers][$_get](event.pointer));
        if (!(tracker !== null)) dart.assertFailed(null, L0, 279, 14, "tracker != null");
        tracker.addPosition(event.timeStamp, event.localPosition);
      }
      if (events.PointerMoveEvent.is(event)) {
        if (event.buttons != this[_initialButtons]) {
          this[_giveUpPointer](event.pointer);
          return;
        }
        if (dart.equals(this[_state], monodrag._DragState.accepted)) {
          this[_checkUpdate]({sourceTimeStamp: event.timeStamp, delta: this[_getDeltaForDetails](event.localDelta), primaryDelta: this[_getPrimaryValueFromOffset](event.localDelta), globalPosition: event.position, localPosition: event.localPosition});
        } else {
          this[_pendingDragOffset] = this[_pendingDragOffset]['+'](new recognizer.OffsetPair.new({local: event.localDelta, global: event.delta}));
          this[_lastPendingEventTimestamp] = event.timeStamp;
          this[_lastTransform] = event.transform;
          let movedLocally = this[_getDeltaForDetails](event.localDelta);
          let localToGlobalTransform = event.transform == null ? null : vector_math_64.Matrix4.tryInvert(dart.nullCheck(event.transform));
          this[_globalDistanceMoved] = dart.notNull(this[_globalDistanceMoved]) + dart.notNull(events.PointerEvent.transformDeltaViaPositions({transform: localToGlobalTransform, untransformedDelta: movedLocally, untransformedEndPosition: event.localPosition}).distance) * (t3 = this[_getPrimaryValueFromOffset](movedLocally), t3 == null ? 1.0 : t3)[$sign];
          if (dart.test(this[_hasSufficientGlobalDistanceToAccept](event.kind))) this.resolve(arena.GestureDisposition.accepted);
        }
      }
      if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) {
        this[_giveUpPointer](event.pointer, {reject: events.PointerCancelEvent.is(event) || dart.equals(this[_state], monodrag._DragState.possible)});
      }
    }
    acceptGesture(pointer) {
      if (pointer == null) dart.nullFailed(L0, 320, 26, "pointer");
      if (!dart.equals(this[_state], monodrag._DragState.accepted)) {
        this[_state] = monodrag._DragState.accepted;
        let delta = this[_pendingDragOffset];
        let timestamp = dart.nullCheck(this[_lastPendingEventTimestamp]);
        let transform = this[_lastTransform];
        let localUpdateDelta = null;
        switch (this.dragStartBehavior) {
          case C4 || CT.C4:
          {
            this[_initialPosition] = this[_initialPosition]['+'](delta);
            localUpdateDelta = ui.Offset.zero;
            break;
          }
          case C6 || CT.C6:
          {
            localUpdateDelta = this[_getDeltaForDetails](delta.local);
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        this[_pendingDragOffset] = recognizer.OffsetPair.zero;
        this[_lastPendingEventTimestamp] = null;
        this[_lastTransform] = null;
        this[_checkStart](timestamp, pointer);
        if (!dart.equals(localUpdateDelta, ui.Offset.zero) && this.onUpdate != null) {
          let localToGlobal = transform != null ? vector_math_64.Matrix4.tryInvert(transform) : null;
          let correctedLocalPosition = this[_initialPosition].local['+'](localUpdateDelta);
          let globalUpdateDelta = events.PointerEvent.transformDeltaViaPositions({untransformedEndPosition: correctedLocalPosition, untransformedDelta: localUpdateDelta, transform: localToGlobal});
          let updateDelta = new recognizer.OffsetPair.new({local: localUpdateDelta, global: globalUpdateDelta});
          let correctedPosition = this[_initialPosition]['+'](updateDelta);
          this[_checkUpdate]({sourceTimeStamp: timestamp, delta: localUpdateDelta, primaryDelta: this[_getPrimaryValueFromOffset](localUpdateDelta), globalPosition: correctedPosition.global, localPosition: correctedPosition.local});
        }
      }
    }
    rejectGesture(pointer) {
      if (pointer == null) dart.nullFailed(L0, 362, 26, "pointer");
      this[_giveUpPointer](pointer);
    }
    didStopTrackingLastPointer(pointer) {
      if (pointer == null) dart.nullFailed(L0, 367, 39, "pointer");
      if (!!dart.equals(this[_state], monodrag._DragState.ready)) dart.assertFailed(null, L0, 368, 12, "_state != _DragState.ready");
      switch (this[_state]) {
        case C0 || CT.C0:
        {
          break;
        }
        case C1 || CT.C1:
        {
          this.resolve(arena.GestureDisposition.rejected);
          this[_checkCancel]();
          break;
        }
        case C2 || CT.C2:
        {
          this[_checkEnd](pointer);
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      this[_velocityTrackers][$clear]();
      this[_initialButtons] = null;
      this[_state] = monodrag._DragState.ready;
    }
    [_giveUpPointer](pointer, opts) {
      if (pointer == null) dart.nullFailed(L0, 387, 27, "pointer");
      let reject = opts && 'reject' in opts ? opts.reject : true;
      if (reject == null) dart.nullFailed(L0, 387, 42, "reject");
      this.stopTrackingPointer(pointer);
      if (dart.test(reject)) this.resolvePointer(pointer, arena.GestureDisposition.rejected);
    }
    [_checkDown]() {
      if (!(this[_initialButtons] === 1)) dart.assertFailed(null, L0, 394, 12, "_initialButtons == kPrimaryButton");
      let details = new drag_details.DragDownDetails.new({globalPosition: this[_initialPosition].global, localPosition: this[_initialPosition].local});
      if (this.onDown != null) this.invokeCallback(dart.void, "onDown", dart.fn(() => dart.nullCheck(this.onDown)(details), VoidTovoid()));
    }
    [_checkStart](timestamp, pointer) {
      if (timestamp == null) dart.nullFailed(L0, 403, 29, "timestamp");
      if (pointer == null) dart.nullFailed(L0, 403, 44, "pointer");
      if (!(this[_initialButtons] === 1)) dart.assertFailed(null, L0, 404, 12, "_initialButtons == kPrimaryButton");
      let details = new drag_details.DragStartDetails.new({sourceTimeStamp: timestamp, globalPosition: this[_initialPosition].global, localPosition: this[_initialPosition].local, kind: this.getKindForPointer(pointer)});
      if (this.onStart != null) this.invokeCallback(dart.void, "onStart", dart.fn(() => dart.nullCheck(this.onStart)(details), VoidTovoid()));
    }
    [_checkUpdate](opts) {
      let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
      let delta = opts && 'delta' in opts ? opts.delta : null;
      if (delta == null) dart.nullFailed(L0, 417, 21, "delta");
      let primaryDelta = opts && 'primaryDelta' in opts ? opts.primaryDelta : null;
      let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
      if (globalPosition == null) dart.nullFailed(L0, 419, 21, "globalPosition");
      let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
      if (!(this[_initialButtons] === 1)) dart.assertFailed(null, L0, 422, 12, "_initialButtons == kPrimaryButton");
      let details = new drag_details.DragUpdateDetails.new({sourceTimeStamp: sourceTimeStamp, delta: delta, primaryDelta: primaryDelta, globalPosition: globalPosition, localPosition: localPosition});
      if (this.onUpdate != null) this.invokeCallback(dart.void, "onUpdate", dart.fn(() => dart.nullCheck(this.onUpdate)(details), VoidTovoid()));
    }
    [_checkEnd](pointer) {
      let t3, t3$;
      if (pointer == null) dart.nullFailed(L0, 434, 22, "pointer");
      if (!(this[_initialButtons] === 1)) dart.assertFailed(null, L0, 435, 12, "_initialButtons == kPrimaryButton");
      if (this.onEnd == null) return;
      let tracker = dart.nullCheck(this[_velocityTrackers][$_get](pointer));
      if (!(tracker !== null)) dart.assertFailed(null, L0, 440, 12, "tracker != null");
      let details = null;
      let debugReport = null;
      let estimate = tracker.getVelocityEstimate();
      if (estimate != null && dart.test(this.isFlingGesture(estimate, tracker.kind))) {
        let velocity = new velocity_tracker.Velocity.new({pixelsPerSecond: estimate.pixelsPerSecond}).clampMagnitude((t3 = this.minFlingVelocity, t3 == null ? 50 : t3), (t3$ = this.maxFlingVelocity, t3$ == null ? 8000 : t3$));
        details = new drag_details.DragEndDetails.new({velocity: velocity, primaryVelocity: this[_getPrimaryValueFromOffset](velocity.pixelsPerSecond)});
        debugReport = dart.fn(() => dart.str(estimate) + "; fling at " + dart.str(velocity) + ".", VoidToString());
      } else {
        details = new drag_details.DragEndDetails.new({velocity: velocity_tracker.Velocity.zero, primaryVelocity: 0.0});
        debugReport = dart.fn(() => {
          if (estimate == null) return "Could not estimate velocity.";
          return dart.str(estimate) + "; judged to not be a fling.";
        }, VoidToString());
      }
      this.invokeCallback(dart.void, "onEnd", dart.fn(() => dart.nullCheck(this.onEnd)(details), VoidTovoid()), {debugReport: debugReport});
    }
    [_checkCancel]() {
      if (!(this[_initialButtons] === 1)) dart.assertFailed(null, L0, 471, 12, "_initialButtons == kPrimaryButton");
      if (this.onCancel != null) this.invokeCallback(dart.void, "onCancel", dart.nullCheck(this.onCancel));
    }
    dispose() {
      this[_velocityTrackers][$clear]();
      super.dispose();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 482, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfDragStartBehavior()).new("start behavior", this.dragStartBehavior));
    }
  };
  (monodrag.DragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C4 || CT.C4;
    if (dragStartBehavior == null) dart.nullFailed(L0, 70, 10, "dragStartBehavior");
    let velocityTrackerBuilder = opts && 'velocityTrackerBuilder' in opts ? opts.velocityTrackerBuilder : C5 || CT.C5;
    if (velocityTrackerBuilder == null) dart.nullFailed(L0, 71, 10, "velocityTrackerBuilder");
    this[onDown] = null;
    this[onStart] = null;
    this[onUpdate] = null;
    this[onEnd] = null;
    this[onCancel] = null;
    this[minFlingDistance] = null;
    this[minFlingVelocity] = null;
    this[maxFlingVelocity] = null;
    this[_state] = monodrag._DragState.ready;
    this[__DragGestureRecognizer__initialPosition] = null;
    this[__DragGestureRecognizer__initialPosition_isSet] = false;
    this[__DragGestureRecognizer__pendingDragOffset] = null;
    this[__DragGestureRecognizer__pendingDragOffset_isSet] = false;
    this[_lastPendingEventTimestamp] = null;
    this[_initialButtons] = null;
    this[_lastTransform] = null;
    this[__DragGestureRecognizer__globalDistanceMoved] = null;
    this[__DragGestureRecognizer__globalDistanceMoved_isSet] = false;
    this[_velocityTrackers] = new (IdentityMapOfint$VelocityTracker()).new();
    this[dragStartBehavior$] = dragStartBehavior;
    this[velocityTrackerBuilder$] = velocityTrackerBuilder;
    if (!(dragStartBehavior != null)) dart.assertFailed(null, L0, 72, 15, "dragStartBehavior != null");
    monodrag.DragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = monodrag.DragGestureRecognizer.prototype;
  dart.addTypeTests(monodrag.DragGestureRecognizer);
  dart.addTypeCaches(monodrag.DragGestureRecognizer);
  dart.setMethodSignature(monodrag.DragGestureRecognizer, () => ({
    __proto__: dart.getMethods(monodrag.DragGestureRecognizer.__proto__),
    isPointerAllowed: dart.fnType(core.bool, [events.PointerEvent]),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerEvent]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    [_giveUpPointer]: dart.fnType(dart.void, [core.int], {reject: core.bool}, {}),
    [_checkDown]: dart.fnType(dart.void, []),
    [_checkStart]: dart.fnType(dart.void, [core.Duration, core.int]),
    [_checkUpdate]: dart.fnType(dart.void, [], {localPosition: dart.nullable(ui.Offset), primaryDelta: dart.nullable(core.double), sourceTimeStamp: dart.nullable(core.Duration)}, {delta: ui.Offset, globalPosition: ui.Offset}),
    [_checkEnd]: dart.fnType(dart.void, [core.int]),
    [_checkCancel]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(monodrag.DragGestureRecognizer, () => ({
    __proto__: dart.getGetters(monodrag.DragGestureRecognizer.__proto__),
    [_initialPosition]: recognizer.OffsetPair,
    [_pendingDragOffset]: recognizer.OffsetPair,
    [_globalDistanceMoved]: core.double
  }));
  dart.setSetterSignature(monodrag.DragGestureRecognizer, () => ({
    __proto__: dart.getSetters(monodrag.DragGestureRecognizer.__proto__),
    [_initialPosition]: recognizer.OffsetPair,
    [_pendingDragOffset]: recognizer.OffsetPair,
    [_globalDistanceMoved]: core.double
  }));
  dart.setLibraryUri(monodrag.DragGestureRecognizer, L1);
  dart.setFieldSignature(monodrag.DragGestureRecognizer, () => ({
    __proto__: dart.getFields(monodrag.DragGestureRecognizer.__proto__),
    dragStartBehavior: dart.fieldType(recognizer.DragStartBehavior),
    onDown: dart.fieldType(dart.nullable(dart.fnType(dart.void, [drag_details.DragDownDetails]))),
    onStart: dart.fieldType(dart.nullable(dart.fnType(dart.void, [drag_details.DragStartDetails]))),
    onUpdate: dart.fieldType(dart.nullable(dart.fnType(dart.void, [drag_details.DragUpdateDetails]))),
    onEnd: dart.fieldType(dart.nullable(dart.fnType(dart.void, [drag_details.DragEndDetails]))),
    onCancel: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    minFlingDistance: dart.fieldType(dart.nullable(core.double)),
    minFlingVelocity: dart.fieldType(dart.nullable(core.double)),
    maxFlingVelocity: dart.fieldType(dart.nullable(core.double)),
    velocityTrackerBuilder: dart.fieldType(dart.fnType(velocity_tracker.VelocityTracker, [events.PointerEvent])),
    [_state]: dart.fieldType(monodrag._DragState),
    [__DragGestureRecognizer__initialPosition]: dart.fieldType(dart.nullable(recognizer.OffsetPair)),
    [__DragGestureRecognizer__initialPosition_isSet]: dart.fieldType(core.bool),
    [__DragGestureRecognizer__pendingDragOffset]: dart.fieldType(dart.nullable(recognizer.OffsetPair)),
    [__DragGestureRecognizer__pendingDragOffset_isSet]: dart.fieldType(core.bool),
    [_lastPendingEventTimestamp]: dart.fieldType(dart.nullable(core.Duration)),
    [_initialButtons]: dart.fieldType(dart.nullable(core.int)),
    [_lastTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [__DragGestureRecognizer__globalDistanceMoved]: dart.fieldType(dart.nullable(core.double)),
    [__DragGestureRecognizer__globalDistanceMoved_isSet]: dart.fieldType(core.bool),
    [_velocityTrackers]: dart.finalFieldType(core.Map$(core.int, velocity_tracker.VelocityTracker))
  }));
  monodrag.VerticalDragGestureRecognizer = class VerticalDragGestureRecognizer extends monodrag.DragGestureRecognizer {
    isFlingGesture(estimate, kind) {
      let t3, t3$;
      if (estimate == null) dart.nullFailed(L0, 508, 40, "estimate");
      if (kind == null) dart.nullFailed(L0, 508, 68, "kind");
      let minVelocity = (t3 = this.minFlingVelocity, t3 == null ? 50 : t3);
      let minDistance = (t3$ = this.minFlingDistance, t3$ == null ? events.computeHitSlop(kind) : t3$);
      return estimate.pixelsPerSecond.dy[$abs]() > dart.notNull(minVelocity) && estimate.offset.dy[$abs]() > dart.notNull(minDistance);
    }
    [_hasSufficientGlobalDistanceToAccept](pointerDeviceKind) {
      if (pointerDeviceKind == null) dart.nullFailed(L0, 515, 63, "pointerDeviceKind");
      return this[_globalDistanceMoved][$abs]() > dart.notNull(events.computeHitSlop(pointerDeviceKind));
    }
    [_getDeltaForDetails](delta) {
      if (delta == null) dart.nullFailed(L0, 520, 37, "delta");
      return new ui.Offset.new(0.0, delta.dy);
    }
    [_getPrimaryValueFromOffset](value) {
      if (value == null) dart.nullFailed(L0, 523, 44, "value");
      return value.dy;
    }
    get debugDescription() {
      return "vertical drag";
    }
  };
  (monodrag.VerticalDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    monodrag.VerticalDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = monodrag.VerticalDragGestureRecognizer.prototype;
  dart.addTypeTests(monodrag.VerticalDragGestureRecognizer);
  dart.addTypeCaches(monodrag.VerticalDragGestureRecognizer);
  dart.setMethodSignature(monodrag.VerticalDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(monodrag.VerticalDragGestureRecognizer.__proto__),
    isFlingGesture: dart.fnType(core.bool, [velocity_tracker.VelocityEstimate, ui.PointerDeviceKind]),
    [_hasSufficientGlobalDistanceToAccept]: dart.fnType(core.bool, [ui.PointerDeviceKind]),
    [_getDeltaForDetails]: dart.fnType(ui.Offset, [ui.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(core.double, [ui.Offset])
  }));
  dart.setGetterSignature(monodrag.VerticalDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(monodrag.VerticalDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(monodrag.VerticalDragGestureRecognizer, L1);
  monodrag.HorizontalDragGestureRecognizer = class HorizontalDragGestureRecognizer extends monodrag.DragGestureRecognizer {
    isFlingGesture(estimate, kind) {
      let t3, t3$;
      if (estimate == null) dart.nullFailed(L0, 549, 40, "estimate");
      if (kind == null) dart.nullFailed(L0, 549, 68, "kind");
      let minVelocity = (t3 = this.minFlingVelocity, t3 == null ? 50 : t3);
      let minDistance = (t3$ = this.minFlingDistance, t3$ == null ? events.computeHitSlop(kind) : t3$);
      return estimate.pixelsPerSecond.dx[$abs]() > dart.notNull(minVelocity) && estimate.offset.dx[$abs]() > dart.notNull(minDistance);
    }
    [_hasSufficientGlobalDistanceToAccept](pointerDeviceKind) {
      if (pointerDeviceKind == null) dart.nullFailed(L0, 556, 63, "pointerDeviceKind");
      return this[_globalDistanceMoved][$abs]() > dart.notNull(events.computeHitSlop(pointerDeviceKind));
    }
    [_getDeltaForDetails](delta) {
      if (delta == null) dart.nullFailed(L0, 561, 37, "delta");
      return new ui.Offset.new(delta.dx, 0.0);
    }
    [_getPrimaryValueFromOffset](value) {
      if (value == null) dart.nullFailed(L0, 564, 44, "value");
      return value.dx;
    }
    get debugDescription() {
      return "horizontal drag";
    }
  };
  (monodrag.HorizontalDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    monodrag.HorizontalDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = monodrag.HorizontalDragGestureRecognizer.prototype;
  dart.addTypeTests(monodrag.HorizontalDragGestureRecognizer);
  dart.addTypeCaches(monodrag.HorizontalDragGestureRecognizer);
  dart.setMethodSignature(monodrag.HorizontalDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(monodrag.HorizontalDragGestureRecognizer.__proto__),
    isFlingGesture: dart.fnType(core.bool, [velocity_tracker.VelocityEstimate, ui.PointerDeviceKind]),
    [_hasSufficientGlobalDistanceToAccept]: dart.fnType(core.bool, [ui.PointerDeviceKind]),
    [_getDeltaForDetails]: dart.fnType(ui.Offset, [ui.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(core.double, [ui.Offset])
  }));
  dart.setGetterSignature(monodrag.HorizontalDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(monodrag.HorizontalDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(monodrag.HorizontalDragGestureRecognizer, L1);
  monodrag.PanGestureRecognizer = class PanGestureRecognizer extends monodrag.DragGestureRecognizer {
    isFlingGesture(estimate, kind) {
      let t3, t3$;
      if (estimate == null) dart.nullFailed(L0, 584, 40, "estimate");
      if (kind == null) dart.nullFailed(L0, 584, 68, "kind");
      let minVelocity = (t3 = this.minFlingVelocity, t3 == null ? 50 : t3);
      let minDistance = (t3$ = this.minFlingDistance, t3$ == null ? events.computeHitSlop(kind) : t3$);
      return dart.notNull(estimate.pixelsPerSecond.distanceSquared) > dart.notNull(minVelocity) * dart.notNull(minVelocity) && dart.notNull(estimate.offset.distanceSquared) > dart.notNull(minDistance) * dart.notNull(minDistance);
    }
    [_hasSufficientGlobalDistanceToAccept](pointerDeviceKind) {
      if (pointerDeviceKind == null) dart.nullFailed(L0, 592, 63, "pointerDeviceKind");
      return this[_globalDistanceMoved][$abs]() > dart.notNull(events.computePanSlop(pointerDeviceKind));
    }
    [_getDeltaForDetails](delta) {
      if (delta == null) dart.nullFailed(L0, 597, 37, "delta");
      return delta;
    }
    [_getPrimaryValueFromOffset](value) {
      if (value == null) dart.nullFailed(L0, 600, 45, "value");
      return null;
    }
    get debugDescription() {
      return "pan";
    }
  };
  (monodrag.PanGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    monodrag.PanGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner});
    ;
  }).prototype = monodrag.PanGestureRecognizer.prototype;
  dart.addTypeTests(monodrag.PanGestureRecognizer);
  dart.addTypeCaches(monodrag.PanGestureRecognizer);
  dart.setMethodSignature(monodrag.PanGestureRecognizer, () => ({
    __proto__: dart.getMethods(monodrag.PanGestureRecognizer.__proto__),
    isFlingGesture: dart.fnType(core.bool, [velocity_tracker.VelocityEstimate, ui.PointerDeviceKind]),
    [_hasSufficientGlobalDistanceToAccept]: dart.fnType(core.bool, [ui.PointerDeviceKind]),
    [_getDeltaForDetails]: dart.fnType(ui.Offset, [ui.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(dart.nullable(core.double), [ui.Offset])
  }));
  dart.setGetterSignature(monodrag.PanGestureRecognizer, () => ({
    __proto__: dart.getGetters(monodrag.PanGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(monodrag.PanGestureRecognizer, L1);
  dart.trackLibraries("packages/flutter/src/gestures/monodrag.dart", {
    "package:flutter/src/gestures/monodrag.dart": monodrag
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["monodrag.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkBA;;;QAJK;;;;;EAIL;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA8EoB;;;;;;IAYO;;;;;;IAiBC;;;;;;IAYC;;;;;;IAaH;;;;;;IAOG;;;;;;IAOnB;;;;;;IAOA;;;;;;IAKA;;;;;;IAwBsB;;;;;;;UA9HsB;AAAU,YAAgB,+CAAS,AAAM,KAAD;IAAM;;;AAiIlF;IAAgB;;;AAAhB;;IAAgB;;;AAChB;IAAkB;;;AAAlB;;IAAkB;;;AAWtB;IAAoB;;;AAApB;;IAAoB;;UAgBG;AACjC,UAAI,AAAgB,yBAAG;AACrB,gBAAQ,AAAM,KAAD;;;AAET,gBAAI,AAAO,eAAG,QACV,AAAQ,gBAAG,QACX,AAAS,iBAAG,QACZ,AAAM,cAAG,QACT,AAAS,iBAAG,MACd,MAAO;AACT;;;;AAEA,kBAAO;;;;AAIX,YAAI,AAAM,KAAD,YAAY;AACnB,gBAAO;;;AAGX,YAAa,wBAAuB,2BAAN,KAAK;IACrC;sBAGoC;;;AACkB,MAApD,0BAAqB,AAAM,KAAD,UAAU,AAAM,KAAD;AACuB,MAAhE,AAAiB,+BAAC,AAAM,KAAD,gBAAmC,KAAK,EAA5B,AAAsB;AACzD,UAAW,YAAP,cAAqB;AACK,QAA5B,eAAoB;AAC6D,QAAjF,yBAAmB,uCAAmB,AAAM,KAAD,kBAAkB,AAAM,KAAD;AACnC,QAA/B,wBAAkB,AAAM,KAAD;AACa,QAApC,2BAAgC;AACN,QAA1B,6BAAuB;AACqB,QAA5C,mCAA6B,AAAM,KAAD;AACF,QAAhC,uBAAiB,AAAM,KAAD;AACV,QAAZ;YACK,KAAW,YAAP,cAAqB;AACM,QAApC,aAA2B;;IAE/B;gBAG8B;;;AAC5B,WAAc,aAAP,cAAqB;AAC5B,qBAAK,AAAM,KAAD,kBACI,2BAAN,KAAK,KAA8B,2BAAN,KAAK;AAClB,sBAA0C,eAAhC,AAAiB,+BAAC,AAAM,KAAD;AACvD,cAAO,AAAQ,OAAD,KAAI;AACuC,QAAzD,AAAQ,OAAD,aAAa,AAAM,KAAD,YAAY,AAAM,KAAD;;AAG5C,UAAU,2BAAN,KAAK;AACP,YAAI,AAAM,KAAD,YAAY;AACU,UAA7B,qBAAe,AAAM,KAAD;AACpB;;AAEF,YAAW,YAAP,cAAqB;AAOtB,UAND,qCACmB,AAAM,KAAD,mBACf,0BAAoB,AAAM,KAAD,4BAClB,iCAA2B,AAAM,KAAD,8BAC9B,AAAM,KAAD,0BACN,AAAM,KAAD;;AAGwD,UAA9E,2BAAA,AAAmB,8BAAG,sCAAkB,AAAM,KAAD,qBAAqB,AAAM,KAAD;AAC3B,UAA5C,mCAA6B,AAAM,KAAD;AACF,UAAhC,uBAAiB,AAAM,KAAD;AACT,6BAAe,0BAAoB,AAAM,KAAD;AACtC,uCAAyB,AAAM,AAAU,KAAX,cAAc,OAAO,OAAe,iCAAyB,eAAf,AAAM,KAAD;AAK/B,UAJjE,6BAAqB,aAArB,8BAIW,aAJ0B,AAInC,2DAHW,sBAAsB,sBACb,YAAY,4BACN,AAAM,KAAD,6BAC4B,CAAN,KAAzC,iCAA2B,YAAY,SAAvC,OAA4C;AAC1D,wBAAI,2CAAqC,AAAM,KAAD,SAC5C,AAAoC,aAAT;;;AAGjC,UAAU,yBAAN,KAAK,KAA4B,6BAAN,KAAK;AAIjC,QAHD,qBACE,AAAM,KAAD,mBACS,AAAsB,6BAA5B,KAAK,KAAiC,YAAP,cAAoB;;IAGjE;;UAGuB;AACrB,uBAAI,cAAqB;AACK,QAA5B,eAAoB;AACH,oBAAQ;AACV,wBAAsC,eAA1B;AACZ,wBAAY;AACd;AACb,gBAAQ;;;AAEuC,YAA3C,yBAAmB,AAAiB,4BAAE,KAAK;AACb,YAA9B,mBAA0B;AAC1B;;;;AAEmD,YAAnD,mBAAmB,0BAAoB,AAAM,KAAD;AAC5C;;;;AAPJ;;;AASoC,QAApC,2BAAgC;AACC,QAAjC,mCAA6B;AACR,QAArB,uBAAiB;AACc,QAA/B,kBAAY,SAAS,EAAE,OAAO;AAC9B,yBAAI,gBAAgB,EAAW,mBAAQ,iBAAY;AAClC,8BAAgB,AAAU,SAAD,IAAI,OAAe,iCAAU,SAAS,IAAI;AACrE,uCAAyB,AAAiB,AAAM,kCAAE,gBAAgB;AAClE,kCAAiC,0EAClB,sBAAsB,sBAC5B,gBAAgB,aACzB,aAAa;AAET,4BAAc,sCAAkB,gBAAgB,UAAU,iBAAiB;AAC3E,kCAAoB,AAAiB,4BAAE,WAAW;AAOlE,UAND,qCACmB,SAAS,SACnB,gBAAgB,gBACT,iCAA2B,gBAAgB,mBACzC,AAAkB,iBAAD,wBAClB,AAAkB,iBAAD;;;IAIxC;;UAGuB;AACE,MAAvB,qBAAe,OAAO;IACxB;;UAGoC;AAClC,WAAc,aAAP,cAAqB;AAC5B,cAAO;;;AAEH;;;;AAGoC,UAApC,aAA2B;AACb,UAAd;AACA;;;;AAGkB,UAAlB,gBAAU,OAAO;AACjB;;;;AAXJ;;;AAayB,MAAzB,AAAkB;AACI,MAAtB,wBAAkB;AACO,MAAzB,eAAoB;IACtB;;UAEwB;UAAe;;AACT,MAA5B,yBAAoB,OAAO;AAC3B,oBAAI,MAAM,GACR,AAAoD,oBAArC,OAAO,EAAqB;IAC/C;;AAGE,YAAO,AAAgB;AACD,oBAAU,sDACd,AAAiB,8CAClB,AAAiB;AAElC,UAAI,eAAU,MACZ,AAAsD,+BAAjC,UAAU,cAAY,AAAC,eAAP,aAAQ,OAAO;IACxD;kBAE0B,WAAe;UAAf;UAAe;AACvC,YAAO,AAAgB;AACA,oBAAU,wDACd,SAAS,kBACV,AAAiB,8CAClB,AAAiB,oCAC1B,uBAAkB,OAAO;AAEjC,UAAI,gBAAW,MACb,AAAwD,+BAAnC,WAAW,cAAa,AAAC,eAAR,cAAS,OAAO;IAC1D;;UAGY;UACM;;UACR;UACQ;;UACR;AAER,YAAO,AAAgB;AACC,oBAAU,yDACf,eAAe,SACzB,KAAK,gBACE,YAAY,kBACV,cAAc,iBACf,aAAa;AAE9B,UAAI,iBAAY,MACd,AAA0D,+BAArC,YAAY,cAAc,AAAC,eAAT,eAAU,OAAO;IAC5D;gBAEmB;;;AACjB,YAAO,AAAgB;AACvB,UAAI,AAAM,cAAG,MACX;AAEoB,oBAAoC,eAA1B,AAAiB,+BAAC,OAAO;AACzD,YAAO,AAAQ,OAAD,KAAI;AAEG;AACG;AAEA,qBAAW,AAAQ,OAAD;AAC1C,UAAI,QAAQ,IAAI,kBAAQ,oBAAe,QAAQ,EAAE,AAAQ,OAAD;AACvC,uBAAW,AACvB,oDADiD,AAAS,QAAD,mCACzB,kCAAjB,kBAAwD,oCAAjB;AAIxD,QAHD,UAAU,+CACE,QAAQ,mBACD,iCAA2B,AAAS,QAAD;AAIrD,QAFD,cAAc,cAC2B,SAA9B,QAAQ,6BAAY,QAAQ;;AAMtC,QAHD,UAAU,+CACW,iDACF;AAMlB,QAJD,cAAc;AACZ,cAAI,AAAS,QAAD,IAAI,MACd,MAAO;AACT,gBAA6C,UAApC,QAAQ;;;AAGyD,MAA9E,+BAAqB,SAAS,cAAW,AAAC,eAAN,YAAO,OAAO,gCAAgB,WAAW;IAC/E;;AAGE,YAAO,AAAgB;AACvB,UAAI,iBAAY,MACd,AAA2C,+BAAtB,YAAoB,eAAR;IACrC;;AAI2B,MAAzB,AAAkB;AACH,MAAT;IACR;;UAEqD;AACd,MAA/B,0BAAoB,UAAU;AACgD,MAApF,AAAW,UAAD,KAAK,4CAAgC,kBAAkB;IACnE;;;QAjaU;QACW;QACd;;QACA;;IAsCkB;IAiBC;IAYC;IAaH;IAOG;IAOnB;IAOA;IAKA;IA0BG,eAAoB;qDACf;;uDACA;;IACN;IAGL;IACI;yDAMG;;IAaoB,0BAA0C;IA/JnE;IACA;UACK,AAAkB,iBAAD,IAAI;AAC5B,yEAAkB,UAAU,QAAQ,IAAI;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mBAmbT,UAA4B;;UAA5B;UAA4B;AAClD,yBAA+B,kCAAjB;AACd,yBAA+B,oCAAjB,OAAoB,sBAAe,IAAI;AAClE,YAAO,AAAS,AAAgB,AAAG,AAAM,AAAc,SAAxC,2CAA4B,WAAW,KAAI,AAAS,AAAO,AAAG,AAAM,QAAjB,kCAAmB,WAAW;IAClG;;UAG4D;AAC1D,YAAO,AAAqB,AAAM,mDAAE,sBAAe,iBAAiB;IACtE;;UAGkC;AAAU,+BAAO,KAAK,AAAM,KAAD;IAAI;;UAGxB;AAAU,YAAA,AAAM,MAAD;IAAG;;AAG5B;IAAe;;;QAvBpC;QACW;AAChB,iFAAkB,UAAU,QAAQ,IAAI;;EAAC;;;;;;;;;;;;;;;;mBA4CT,UAA4B;;UAA5B;UAA4B;AAClD,yBAA+B,kCAAjB;AACd,yBAA+B,oCAAjB,OAAoB,sBAAe,IAAI;AAClE,YAAO,AAAS,AAAgB,AAAG,AAAM,AAAc,SAAxC,2CAA4B,WAAW,KAAI,AAAS,AAAO,AAAG,AAAM,QAAjB,kCAAmB,WAAW;IAClG;;UAG4D;AAC1D,YAAO,AAAqB,AAAM,mDAAE,sBAAe,iBAAiB;IACtE;;UAGkC;AAAU,+BAAO,AAAM,KAAD,KAAK;IAAI;;UAGxB;AAAU,YAAA,AAAM,MAAD;IAAG;;AAG5B;IAAiB;;;QAvBtC;QACW;AAChB,mFAAkB,UAAU,QAAQ,IAAI;;EAAC;;;;;;;;;;;;;;;;mBAsCT,UAA4B;;UAA5B;UAA4B;AAClD,yBAA+B,kCAAjB;AACd,yBAA+B,oCAAjB,OAAoB,sBAAe,IAAI;AAClE,YAAgD,AAC5C,cADG,AAAS,AAAgB,QAAjB,oCAA+C,aAAZ,WAAW,iBAAG,WAAW,KACpC,aAAhC,AAAS,AAAO,QAAR,2BAAsC,aAAZ,WAAW,iBAAG,WAAW;IACpE;;UAG4D;AAC1D,YAAO,AAAqB,AAAM,mDAAE,sBAAe,iBAAiB;IACtE;;UAGkC;AAAU,kBAAK;;;UAGP;AAAU;IAAI;;AAGzB;IAAK;;;QAtBL;AAAgB,wEAAkB,UAAU;;EAAC","file":"../../../../../../../../../../packages/flutter/src/gestures/monodrag.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__monodrag: monodrag
  };
}));

//# sourceMappingURL=monodrag.dart.lib.js.map
