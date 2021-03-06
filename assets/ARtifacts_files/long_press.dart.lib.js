define(['dart_sdk', 'packages/flutter/src/gestures/velocity_tracker.dart', 'packages/flutter/src/gestures/constants.dart', 'packages/flutter/src/gestures/arena.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/gestures/recognizer.dart'], (function load__packages__flutter__src__gestures__long_press_dart(dart_sdk, packages__flutter__src__gestures__velocity_tracker$46dart, packages__flutter__src__gestures__constants$46dart, packages__flutter__src__gestures__arena$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__gestures__recognizer$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const velocity_tracker = packages__flutter__src__gestures__velocity_tracker$46dart.src__gestures__velocity_tracker;
  const constants = packages__flutter__src__gestures__constants$46dart.src__gestures__constants;
  const arena = packages__flutter__src__gestures__arena$46dart.src__gestures__arena;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  var long_press = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/gestures/long_press.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/gestures/long_press.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: velocity_tracker.Velocity.prototype,
        [Velocity_pixelsPerSecond]: C0 || CT.C0
      });
    }
  }, false);
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C0;
  var globalPosition$ = dart.privateName(long_press, "LongPressStartDetails.globalPosition");
  var localPosition$ = dart.privateName(long_press, "LongPressStartDetails.localPosition");
  long_press.LongPressStartDetails = class LongPressStartDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
  };
  (long_press.LongPressStartDetails.new = function(opts) {
    let t0;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C0 || CT.C0;
    if (globalPosition == null) dart.nullFailed(L0, 57, 10, "globalPosition");
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    this[globalPosition$] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, L0, 59, 15, "globalPosition != null");
    this[localPosition$] = (t0 = localPosition, t0 == null ? globalPosition : t0);
    ;
  }).prototype = long_press.LongPressStartDetails.prototype;
  dart.addTypeTests(long_press.LongPressStartDetails);
  dart.addTypeCaches(long_press.LongPressStartDetails);
  dart.setLibraryUri(long_press.LongPressStartDetails, L1);
  dart.setFieldSignature(long_press.LongPressStartDetails, () => ({
    __proto__: dart.getFields(long_press.LongPressStartDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  var globalPosition$0 = dart.privateName(long_press, "LongPressMoveUpdateDetails.globalPosition");
  var localPosition$0 = dart.privateName(long_press, "LongPressMoveUpdateDetails.localPosition");
  var offsetFromOrigin$ = dart.privateName(long_press, "LongPressMoveUpdateDetails.offsetFromOrigin");
  var localOffsetFromOrigin$ = dart.privateName(long_press, "LongPressMoveUpdateDetails.localOffsetFromOrigin");
  long_press.LongPressMoveUpdateDetails = class LongPressMoveUpdateDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$0];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$0];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    get offsetFromOrigin() {
      return this[offsetFromOrigin$];
    }
    set offsetFromOrigin(value) {
      super.offsetFromOrigin = value;
    }
    get localOffsetFromOrigin() {
      return this[localOffsetFromOrigin$];
    }
    set localOffsetFromOrigin(value) {
      super.localOffsetFromOrigin = value;
    }
  };
  (long_press.LongPressMoveUpdateDetails.new = function(opts) {
    let t0, t0$;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C0 || CT.C0;
    if (globalPosition == null) dart.nullFailed(L0, 81, 10, "globalPosition");
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let offsetFromOrigin = opts && 'offsetFromOrigin' in opts ? opts.offsetFromOrigin : C0 || CT.C0;
    if (offsetFromOrigin == null) dart.nullFailed(L0, 83, 10, "offsetFromOrigin");
    let localOffsetFromOrigin = opts && 'localOffsetFromOrigin' in opts ? opts.localOffsetFromOrigin : null;
    this[globalPosition$0] = globalPosition;
    this[offsetFromOrigin$] = offsetFromOrigin;
    if (!(globalPosition != null)) dart.assertFailed(null, L0, 85, 15, "globalPosition != null");
    if (!(offsetFromOrigin != null)) dart.assertFailed(null, L0, 86, 15, "offsetFromOrigin != null");
    this[localPosition$0] = (t0 = localPosition, t0 == null ? globalPosition : t0);
    this[localOffsetFromOrigin$] = (t0$ = localOffsetFromOrigin, t0$ == null ? offsetFromOrigin : t0$);
    ;
  }).prototype = long_press.LongPressMoveUpdateDetails.prototype;
  dart.addTypeTests(long_press.LongPressMoveUpdateDetails);
  dart.addTypeCaches(long_press.LongPressMoveUpdateDetails);
  dart.setLibraryUri(long_press.LongPressMoveUpdateDetails, L1);
  dart.setFieldSignature(long_press.LongPressMoveUpdateDetails, () => ({
    __proto__: dart.getFields(long_press.LongPressMoveUpdateDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset),
    offsetFromOrigin: dart.finalFieldType(ui.Offset),
    localOffsetFromOrigin: dart.finalFieldType(ui.Offset)
  }));
  var Velocity_pixelsPerSecond = dart.privateName(velocity_tracker, "Velocity.pixelsPerSecond");
  var C1;
  var globalPosition$1 = dart.privateName(long_press, "LongPressEndDetails.globalPosition");
  var localPosition$1 = dart.privateName(long_press, "LongPressEndDetails.localPosition");
  var velocity$ = dart.privateName(long_press, "LongPressEndDetails.velocity");
  long_press.LongPressEndDetails = class LongPressEndDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$1];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$1];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
  };
  (long_press.LongPressEndDetails.new = function(opts) {
    let t0;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C0 || CT.C0;
    if (globalPosition == null) dart.nullFailed(L0, 119, 10, "globalPosition");
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let velocity = opts && 'velocity' in opts ? opts.velocity : C1 || CT.C1;
    if (velocity == null) dart.nullFailed(L0, 121, 10, "velocity");
    this[globalPosition$1] = globalPosition;
    this[velocity$] = velocity;
    if (!(globalPosition != null)) dart.assertFailed(null, L0, 122, 15, "globalPosition != null");
    this[localPosition$1] = (t0 = localPosition, t0 == null ? globalPosition : t0);
    ;
  }).prototype = long_press.LongPressEndDetails.prototype;
  dart.addTypeTests(long_press.LongPressEndDetails);
  dart.addTypeCaches(long_press.LongPressEndDetails);
  dart.setLibraryUri(long_press.LongPressEndDetails, L1);
  dart.setFieldSignature(long_press.LongPressEndDetails, () => ({
    __proto__: dart.getFields(long_press.LongPressEndDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset),
    velocity: dart.finalFieldType(velocity_tracker.Velocity)
  }));
  var _longPressAccepted = dart.privateName(long_press, "_longPressAccepted");
  var _longPressOrigin = dart.privateName(long_press, "_longPressOrigin");
  var _initialButtons = dart.privateName(long_press, "_initialButtons");
  var _velocityTracker = dart.privateName(long_press, "_velocityTracker");
  var _checkLongPressStart = dart.privateName(long_press, "_checkLongPressStart");
  var _checkLongPressEnd = dart.privateName(long_press, "_checkLongPressEnd");
  var _reset = dart.privateName(long_press, "_reset");
  var _checkLongPressMoveUpdate = dart.privateName(long_press, "_checkLongPressMoveUpdate");
  var onLongPress = dart.privateName(long_press, "LongPressGestureRecognizer.onLongPress");
  var onLongPressStart = dart.privateName(long_press, "LongPressGestureRecognizer.onLongPressStart");
  var onLongPressMoveUpdate = dart.privateName(long_press, "LongPressGestureRecognizer.onLongPressMoveUpdate");
  var onLongPressUp = dart.privateName(long_press, "LongPressGestureRecognizer.onLongPressUp");
  var onLongPressEnd = dart.privateName(long_press, "LongPressGestureRecognizer.onLongPressEnd");
  var onSecondaryLongPress = dart.privateName(long_press, "LongPressGestureRecognizer.onSecondaryLongPress");
  var onSecondaryLongPressStart = dart.privateName(long_press, "LongPressGestureRecognizer.onSecondaryLongPressStart");
  var onSecondaryLongPressMoveUpdate = dart.privateName(long_press, "LongPressGestureRecognizer.onSecondaryLongPressMoveUpdate");
  var onSecondaryLongPressUp = dart.privateName(long_press, "LongPressGestureRecognizer.onSecondaryLongPressUp");
  var onSecondaryLongPressEnd = dart.privateName(long_press, "LongPressGestureRecognizer.onSecondaryLongPressEnd");
  var onTertiaryLongPress = dart.privateName(long_press, "LongPressGestureRecognizer.onTertiaryLongPress");
  var onTertiaryLongPressStart = dart.privateName(long_press, "LongPressGestureRecognizer.onTertiaryLongPressStart");
  var onTertiaryLongPressMoveUpdate = dart.privateName(long_press, "LongPressGestureRecognizer.onTertiaryLongPressMoveUpdate");
  var onTertiaryLongPressUp = dart.privateName(long_press, "LongPressGestureRecognizer.onTertiaryLongPressUp");
  var onTertiaryLongPressEnd = dart.privateName(long_press, "LongPressGestureRecognizer.onTertiaryLongPressEnd");
  long_press.LongPressGestureRecognizer = class LongPressGestureRecognizer extends recognizer.PrimaryPointerGestureRecognizer {
    get onLongPress() {
      return this[onLongPress];
    }
    set onLongPress(value) {
      this[onLongPress] = value;
    }
    get onLongPressStart() {
      return this[onLongPressStart];
    }
    set onLongPressStart(value) {
      this[onLongPressStart] = value;
    }
    get onLongPressMoveUpdate() {
      return this[onLongPressMoveUpdate];
    }
    set onLongPressMoveUpdate(value) {
      this[onLongPressMoveUpdate] = value;
    }
    get onLongPressUp() {
      return this[onLongPressUp];
    }
    set onLongPressUp(value) {
      this[onLongPressUp] = value;
    }
    get onLongPressEnd() {
      return this[onLongPressEnd];
    }
    set onLongPressEnd(value) {
      this[onLongPressEnd] = value;
    }
    get onSecondaryLongPress() {
      return this[onSecondaryLongPress];
    }
    set onSecondaryLongPress(value) {
      this[onSecondaryLongPress] = value;
    }
    get onSecondaryLongPressStart() {
      return this[onSecondaryLongPressStart];
    }
    set onSecondaryLongPressStart(value) {
      this[onSecondaryLongPressStart] = value;
    }
    get onSecondaryLongPressMoveUpdate() {
      return this[onSecondaryLongPressMoveUpdate];
    }
    set onSecondaryLongPressMoveUpdate(value) {
      this[onSecondaryLongPressMoveUpdate] = value;
    }
    get onSecondaryLongPressUp() {
      return this[onSecondaryLongPressUp];
    }
    set onSecondaryLongPressUp(value) {
      this[onSecondaryLongPressUp] = value;
    }
    get onSecondaryLongPressEnd() {
      return this[onSecondaryLongPressEnd];
    }
    set onSecondaryLongPressEnd(value) {
      this[onSecondaryLongPressEnd] = value;
    }
    get onTertiaryLongPress() {
      return this[onTertiaryLongPress];
    }
    set onTertiaryLongPress(value) {
      this[onTertiaryLongPress] = value;
    }
    get onTertiaryLongPressStart() {
      return this[onTertiaryLongPressStart];
    }
    set onTertiaryLongPressStart(value) {
      this[onTertiaryLongPressStart] = value;
    }
    get onTertiaryLongPressMoveUpdate() {
      return this[onTertiaryLongPressMoveUpdate];
    }
    set onTertiaryLongPressMoveUpdate(value) {
      this[onTertiaryLongPressMoveUpdate] = value;
    }
    get onTertiaryLongPressUp() {
      return this[onTertiaryLongPressUp];
    }
    set onTertiaryLongPressUp(value) {
      this[onTertiaryLongPressUp] = value;
    }
    get onTertiaryLongPressEnd() {
      return this[onTertiaryLongPressEnd];
    }
    set onTertiaryLongPressEnd(value) {
      this[onTertiaryLongPressEnd] = value;
    }
    isPointerAllowed(event) {
      if (event == null) dart.nullFailed(L0, 334, 42, "event");
      switch (event.buttons) {
        case 1:
        {
          if (this.onLongPressStart == null && this.onLongPress == null && this.onLongPressMoveUpdate == null && this.onLongPressEnd == null && this.onLongPressUp == null) return false;
          break;
        }
        case 2:
        {
          if (this.onSecondaryLongPressStart == null && this.onSecondaryLongPress == null && this.onSecondaryLongPressMoveUpdate == null && this.onSecondaryLongPressEnd == null && this.onSecondaryLongPressUp == null) return false;
          break;
        }
        case 4:
        {
          if (this.onTertiaryLongPressStart == null && this.onTertiaryLongPress == null && this.onTertiaryLongPressMoveUpdate == null && this.onTertiaryLongPressEnd == null && this.onTertiaryLongPressUp == null) return false;
          break;
        }
        default:
        {
          return false;
        }
      }
      return super.isPointerAllowed(event);
    }
    didExceedDeadline() {
      this.resolve(arena.GestureDisposition.accepted);
      this[_longPressAccepted] = true;
      super.acceptGesture(dart.nullCheck(this.primaryPointer));
      this[_checkLongPressStart]();
    }
    handlePrimaryPointer(event) {
      if (event == null) dart.nullFailed(L0, 376, 42, "event");
      if (!dart.test(event.synthesized)) {
        if (events.PointerDownEvent.is(event)) {
          this[_velocityTracker] = new velocity_tracker.VelocityTracker.withKind(event.kind);
          dart.nullCheck(this[_velocityTracker]).addPosition(event.timeStamp, event.localPosition);
        }
        if (events.PointerMoveEvent.is(event)) {
          if (!(this[_velocityTracker] != null)) dart.assertFailed(null, L0, 383, 16, "_velocityTracker != null");
          dart.nullCheck(this[_velocityTracker]).addPosition(event.timeStamp, event.localPosition);
        }
      }
      if (events.PointerUpEvent.is(event)) {
        if (dart.equals(this[_longPressAccepted], true)) {
          this[_checkLongPressEnd](event);
        } else {
          this.resolve(arena.GestureDisposition.rejected);
        }
        this[_reset]();
      } else if (events.PointerCancelEvent.is(event)) {
        this[_reset]();
      } else if (events.PointerDownEvent.is(event)) {
        this[_longPressOrigin] = recognizer.OffsetPair.fromEventPosition(event);
        this[_initialButtons] = event.buttons;
      } else if (events.PointerMoveEvent.is(event)) {
        if (event.buttons != this[_initialButtons]) {
          this.resolve(arena.GestureDisposition.rejected);
          this.stopTrackingPointer(dart.nullCheck(this.primaryPointer));
        } else if (dart.test(this[_longPressAccepted])) {
          this[_checkLongPressMoveUpdate](event);
        }
      }
    }
    [_checkLongPressStart]() {
      switch (this[_initialButtons]) {
        case 1:
        {
          if (this.onLongPressStart != null) {
            let details = new long_press.LongPressStartDetails.new({globalPosition: dart.nullCheck(this[_longPressOrigin]).global, localPosition: dart.nullCheck(this[_longPressOrigin]).local});
            this.invokeCallback(dart.void, "onLongPressStart", dart.fn(() => dart.nullCheck(this.onLongPressStart)(details), VoidTovoid()));
          }
          if (this.onLongPress != null) {
            this.invokeCallback(dart.void, "onLongPress", dart.nullCheck(this.onLongPress));
          }
          break;
        }
        case 2:
        {
          if (this.onSecondaryLongPressStart != null) {
            let details = new long_press.LongPressStartDetails.new({globalPosition: dart.nullCheck(this[_longPressOrigin]).global, localPosition: dart.nullCheck(this[_longPressOrigin]).local});
            this.invokeCallback(dart.void, "onSecondaryLongPressStart", dart.fn(() => dart.nullCheck(this.onSecondaryLongPressStart)(details), VoidTovoid()));
          }
          if (this.onSecondaryLongPress != null) {
            this.invokeCallback(dart.void, "onSecondaryLongPress", dart.nullCheck(this.onSecondaryLongPress));
          }
          break;
        }
        case 4:
        {
          if (this.onTertiaryLongPressStart != null) {
            let details = new long_press.LongPressStartDetails.new({globalPosition: dart.nullCheck(this[_longPressOrigin]).global, localPosition: dart.nullCheck(this[_longPressOrigin]).local});
            this.invokeCallback(dart.void, "onTertiaryLongPressStart", dart.fn(() => dart.nullCheck(this.onTertiaryLongPressStart)(details), VoidTovoid()));
          }
          if (this.onTertiaryLongPress != null) {
            this.invokeCallback(dart.void, "onTertiaryLongPress", dart.nullCheck(this.onTertiaryLongPress));
          }
          break;
        }
        default:
        {
          if (!false) dart.assertFailed("Unhandled button " + dart.str(this[_initialButtons]), L0, 453, 16, "false");
        }
      }
    }
    [_checkLongPressMoveUpdate](event) {
      if (event == null) dart.nullFailed(L0, 457, 47, "event");
      let details = new long_press.LongPressMoveUpdateDetails.new({globalPosition: event.position, localPosition: event.localPosition, offsetFromOrigin: event.position['-'](dart.nullCheck(this[_longPressOrigin]).global), localOffsetFromOrigin: event.localPosition['-'](dart.nullCheck(this[_longPressOrigin]).local)});
      switch (this[_initialButtons]) {
        case 1:
        {
          if (this.onLongPressMoveUpdate != null) {
            this.invokeCallback(dart.void, "onLongPressMoveUpdate", dart.fn(() => dart.nullCheck(this.onLongPressMoveUpdate)(details), VoidTovoid()));
          }
          break;
        }
        case 2:
        {
          if (this.onSecondaryLongPressMoveUpdate != null) {
            this.invokeCallback(dart.void, "onSecondaryLongPressMoveUpdate", dart.fn(() => dart.nullCheck(this.onSecondaryLongPressMoveUpdate)(details), VoidTovoid()));
          }
          break;
        }
        case 4:
        {
          if (this.onTertiaryLongPressMoveUpdate != null) {
            this.invokeCallback(dart.void, "onTertiaryLongPressMoveUpdate", dart.fn(() => dart.nullCheck(this.onTertiaryLongPressMoveUpdate)(details), VoidTovoid()));
          }
          break;
        }
        default:
        {
          if (!false) dart.assertFailed("Unhandled button " + dart.str(this[_initialButtons]), L0, 484, 16, "false");
        }
      }
    }
    [_checkLongPressEnd](event) {
      if (event == null) dart.nullFailed(L0, 488, 40, "event");
      let estimate = dart.nullCheck(this[_velocityTracker]).getVelocityEstimate();
      let velocity = estimate == null ? velocity_tracker.Velocity.zero : new velocity_tracker.Velocity.new({pixelsPerSecond: estimate.pixelsPerSecond});
      let details = new long_press.LongPressEndDetails.new({globalPosition: event.position, localPosition: event.localPosition, velocity: velocity});
      this[_velocityTracker] = null;
      switch (this[_initialButtons]) {
        case 1:
        {
          if (this.onLongPressEnd != null) {
            this.invokeCallback(dart.void, "onLongPressEnd", dart.fn(() => dart.nullCheck(this.onLongPressEnd)(details), VoidTovoid()));
          }
          if (this.onLongPressUp != null) {
            this.invokeCallback(dart.void, "onLongPressUp", dart.nullCheck(this.onLongPressUp));
          }
          break;
        }
        case 2:
        {
          if (this.onSecondaryLongPressEnd != null) {
            this.invokeCallback(dart.void, "onSecondaryLongPressEnd", dart.fn(() => dart.nullCheck(this.onSecondaryLongPressEnd)(details), VoidTovoid()));
          }
          if (this.onSecondaryLongPressUp != null) {
            this.invokeCallback(dart.void, "onSecondaryLongPressUp", dart.nullCheck(this.onSecondaryLongPressUp));
          }
          break;
        }
        case 4:
        {
          if (this.onTertiaryLongPressEnd != null) {
            this.invokeCallback(dart.void, "onTertiaryLongPressEnd", dart.fn(() => dart.nullCheck(this.onTertiaryLongPressEnd)(details), VoidTovoid()));
          }
          if (this.onTertiaryLongPressUp != null) {
            this.invokeCallback(dart.void, "onTertiaryLongPressUp", dart.nullCheck(this.onTertiaryLongPressUp));
          }
          break;
        }
        default:
        {
          if (!false) dart.assertFailed("Unhandled button " + dart.str(this[_initialButtons]), L0, 526, 16, "false");
        }
      }
    }
    [_reset]() {
      this[_longPressAccepted] = false;
      this[_longPressOrigin] = null;
      this[_initialButtons] = null;
      this[_velocityTracker] = null;
    }
    resolve(disposition) {
      if (disposition == null) dart.nullFailed(L0, 538, 35, "disposition");
      if (dart.test(this[_longPressAccepted]) && dart.equals(disposition, arena.GestureDisposition.rejected)) {
        this[_reset]();
      }
      super.resolve(disposition);
    }
    acceptGesture(pointer) {
      if (pointer == null) dart.nullFailed(L0, 548, 26, "pointer");
    }
    get debugDescription() {
      return "long press";
    }
  };
  (long_press.LongPressGestureRecognizer.new = function(opts) {
    let t0;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let postAcceptSlopTolerance = opts && 'postAcceptSlopTolerance' in opts ? opts.postAcceptSlopTolerance : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[_longPressAccepted] = false;
    this[_longPressOrigin] = null;
    this[_initialButtons] = null;
    this[onLongPress] = null;
    this[onLongPressStart] = null;
    this[onLongPressMoveUpdate] = null;
    this[onLongPressUp] = null;
    this[onLongPressEnd] = null;
    this[onSecondaryLongPress] = null;
    this[onSecondaryLongPressStart] = null;
    this[onSecondaryLongPressMoveUpdate] = null;
    this[onSecondaryLongPressUp] = null;
    this[onSecondaryLongPressEnd] = null;
    this[onTertiaryLongPress] = null;
    this[onTertiaryLongPressStart] = null;
    this[onTertiaryLongPressMoveUpdate] = null;
    this[onTertiaryLongPressUp] = null;
    this[onTertiaryLongPressEnd] = null;
    this[_velocityTracker] = null;
    long_press.LongPressGestureRecognizer.__proto__.new.call(this, {deadline: (t0 = duration, t0 == null ? constants.kLongPressTimeout : t0), postAcceptSlopTolerance: postAcceptSlopTolerance, kind: kind, debugOwner: debugOwner});
    ;
  }).prototype = long_press.LongPressGestureRecognizer.prototype;
  dart.addTypeTests(long_press.LongPressGestureRecognizer);
  dart.addTypeCaches(long_press.LongPressGestureRecognizer);
  dart.setMethodSignature(long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getMethods(long_press.LongPressGestureRecognizer.__proto__),
    handlePrimaryPointer: dart.fnType(dart.void, [events.PointerEvent]),
    [_checkLongPressStart]: dart.fnType(dart.void, []),
    [_checkLongPressMoveUpdate]: dart.fnType(dart.void, [events.PointerEvent]),
    [_checkLongPressEnd]: dart.fnType(dart.void, [events.PointerEvent]),
    [_reset]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getGetters(long_press.LongPressGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(long_press.LongPressGestureRecognizer, L1);
  dart.setFieldSignature(long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getFields(long_press.LongPressGestureRecognizer.__proto__),
    [_longPressAccepted]: dart.fieldType(core.bool),
    [_longPressOrigin]: dart.fieldType(dart.nullable(recognizer.OffsetPair)),
    [_initialButtons]: dart.fieldType(dart.nullable(core.int)),
    onLongPress: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onLongPressStart: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressStartDetails]))),
    onLongPressMoveUpdate: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressMoveUpdateDetails]))),
    onLongPressUp: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onLongPressEnd: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressEndDetails]))),
    onSecondaryLongPress: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onSecondaryLongPressStart: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressStartDetails]))),
    onSecondaryLongPressMoveUpdate: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressMoveUpdateDetails]))),
    onSecondaryLongPressUp: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onSecondaryLongPressEnd: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressEndDetails]))),
    onTertiaryLongPress: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onTertiaryLongPressStart: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressStartDetails]))),
    onTertiaryLongPressMoveUpdate: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressMoveUpdateDetails]))),
    onTertiaryLongPressUp: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onTertiaryLongPressEnd: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressEndDetails]))),
    [_velocityTracker]: dart.fieldType(dart.nullable(velocity_tracker.VelocityTracker))
  }));
  dart.trackLibraries("packages/flutter/src/gestures/long_press.dart", {
    "package:flutter/src/gestures/long_press.dart": long_press
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["long_press.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/gestures/long_press.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__long_press: long_press
  };
}));

//# sourceMappingURL=long_press.dart.lib.js.map
