define(['dart_sdk', 'packages/flutter/src/gestures/velocity_tracker.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/gestures/arena.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/vector_math/vector_math_64.dart'], (function load__packages__flutter__src__gestures__scale_dart(dart_sdk, packages__flutter__src__gestures__velocity_tracker$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__gestures__arena$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__vector_math__vector_math_64$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const velocity_tracker = packages__flutter__src__gestures__velocity_tracker$46dart.src__gestures__velocity_tracker;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const arena = packages__flutter__src__gestures__arena$46dart.src__gestures__arena;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  var scale = Object.create(dart.library);
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $remove = dartx.remove;
  var $length = dartx.length;
  var $keys = dartx.keys;
  var $toDouble = dartx.toDouble;
  var $abs = dartx.abs;
  var $clear = dartx.clear;
  dart._checkModuleNullSafetyMode(false);
  var _ScaleStateL = () => (_ScaleStateL = dart.constFn(dart.legacy(scale._ScaleState)))();
  var IdentityMapOfint$VelocityTracker = () => (IdentityMapOfint$VelocityTracker = dart.constFn(_js_helper.IdentityMap$(core.int, velocity_tracker.VelocityTracker)))();
  var IdentityMapOfint$Offset = () => (IdentityMapOfint$Offset = dart.constFn(_js_helper.IdentityMap$(core.int, ui.Offset)))();
  var JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/gestures/scale.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/gestures/scale.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: scale._ScaleState.prototype,
        [_name$]: "_ScaleState.ready",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: scale._ScaleState.prototype,
        [_name$]: "_ScaleState.possible",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: scale._ScaleState.prototype,
        [_name$]: "_ScaleState.accepted",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: scale._ScaleState.prototype,
        [_name$]: "_ScaleState.started",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], _ScaleStateL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: velocity_tracker.Velocity.prototype,
        [Velocity_pixelsPerSecond]: C5 || CT.C5
      });
    }
  }, false);
  var _name$ = dart.privateName(scale, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  scale._ScaleState = class _ScaleState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (scale._ScaleState.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 17, 6, "index");
    if (_name == null) dart.nullFailed(L0, 17, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = scale._ScaleState.prototype;
  dart.addTypeTests(scale._ScaleState);
  dart.addTypeCaches(scale._ScaleState);
  dart.setLibraryUri(scale._ScaleState, L1);
  dart.setFieldSignature(scale._ScaleState, () => ({
    __proto__: dart.getFields(scale._ScaleState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(scale._ScaleState, ['toString']);
  scale._ScaleState.ready = C0 || CT.C0;
  scale._ScaleState.possible = C1 || CT.C1;
  scale._ScaleState.accepted = C2 || CT.C2;
  scale._ScaleState.started = C3 || CT.C3;
  scale._ScaleState.values = C4 || CT.C4;
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C5;
  var focalPoint$ = dart.privateName(scale, "ScaleStartDetails.focalPoint");
  var localFocalPoint$ = dart.privateName(scale, "ScaleStartDetails.localFocalPoint");
  scale.ScaleStartDetails = class ScaleStartDetails extends core.Object {
    get focalPoint() {
      return this[focalPoint$];
    }
    set focalPoint(value) {
      super.focalPoint = value;
    }
    get localFocalPoint() {
      return this[localFocalPoint$];
    }
    set localFocalPoint(value) {
      super.localFocalPoint = value;
    }
    toString() {
      return "ScaleStartDetails(focalPoint: " + dart.str(this.focalPoint) + ", localFocalPoint: " + dart.str(this.localFocalPoint) + ")";
    }
  };
  (scale.ScaleStartDetails.new = function(opts) {
    let t0;
    let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : C5 || CT.C5;
    if (focalPoint == null) dart.nullFailed(L0, 40, 28, "focalPoint");
    let localFocalPoint = opts && 'localFocalPoint' in opts ? opts.localFocalPoint : null;
    this[focalPoint$] = focalPoint;
    if (!(focalPoint != null)) dart.assertFailed(null, L0, 41, 14, "focalPoint != null");
    this[localFocalPoint$] = (t0 = localFocalPoint, t0 == null ? focalPoint : t0);
    ;
  }).prototype = scale.ScaleStartDetails.prototype;
  dart.addTypeTests(scale.ScaleStartDetails);
  dart.addTypeCaches(scale.ScaleStartDetails);
  dart.setLibraryUri(scale.ScaleStartDetails, L1);
  dart.setFieldSignature(scale.ScaleStartDetails, () => ({
    __proto__: dart.getFields(scale.ScaleStartDetails.__proto__),
    focalPoint: dart.finalFieldType(ui.Offset),
    localFocalPoint: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(scale.ScaleStartDetails, ['toString']);
  var focalPoint$0 = dart.privateName(scale, "ScaleUpdateDetails.focalPoint");
  var localFocalPoint$0 = dart.privateName(scale, "ScaleUpdateDetails.localFocalPoint");
  var scale$ = dart.privateName(scale, "ScaleUpdateDetails.scale");
  var horizontalScale$ = dart.privateName(scale, "ScaleUpdateDetails.horizontalScale");
  var verticalScale$ = dart.privateName(scale, "ScaleUpdateDetails.verticalScale");
  var rotation$ = dart.privateName(scale, "ScaleUpdateDetails.rotation");
  scale.ScaleUpdateDetails = class ScaleUpdateDetails extends core.Object {
    get focalPoint() {
      return this[focalPoint$0];
    }
    set focalPoint(value) {
      super.focalPoint = value;
    }
    get localFocalPoint() {
      return this[localFocalPoint$0];
    }
    set localFocalPoint(value) {
      super.localFocalPoint = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    get horizontalScale() {
      return this[horizontalScale$];
    }
    set horizontalScale(value) {
      super.horizontalScale = value;
    }
    get verticalScale() {
      return this[verticalScale$];
    }
    set verticalScale(value) {
      super.verticalScale = value;
    }
    get rotation() {
      return this[rotation$];
    }
    set rotation(value) {
      super.rotation = value;
    }
    toString() {
      return "ScaleUpdateDetails(focalPoint: " + dart.str(this.focalPoint) + ", localFocalPoint: " + dart.str(this.localFocalPoint) + ", scale: " + dart.str(this.scale) + ", horizontalScale: " + dart.str(this.horizontalScale) + ", verticalScale: " + dart.str(this.verticalScale) + ", rotation: " + dart.str(this.rotation) + ")";
    }
  };
  (scale.ScaleUpdateDetails.new = function(opts) {
    let t0;
    let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : C5 || CT.C5;
    if (focalPoint == null) dart.nullFailed(L0, 76, 10, "focalPoint");
    let localFocalPoint = opts && 'localFocalPoint' in opts ? opts.localFocalPoint : null;
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    if (scale == null) dart.nullFailed(L0, 78, 10, "scale");
    let horizontalScale = opts && 'horizontalScale' in opts ? opts.horizontalScale : 1;
    if (horizontalScale == null) dart.nullFailed(L0, 79, 10, "horizontalScale");
    let verticalScale = opts && 'verticalScale' in opts ? opts.verticalScale : 1;
    if (verticalScale == null) dart.nullFailed(L0, 80, 10, "verticalScale");
    let rotation = opts && 'rotation' in opts ? opts.rotation : 0;
    if (rotation == null) dart.nullFailed(L0, 81, 10, "rotation");
    this[focalPoint$0] = focalPoint;
    this[scale$] = scale;
    this[horizontalScale$] = horizontalScale;
    this[verticalScale$] = verticalScale;
    this[rotation$] = rotation;
    if (!(focalPoint != null)) dart.assertFailed(null, L0, 82, 15, "focalPoint != null");
    if (!(scale != null && dart.notNull(scale) >= 0.0)) dart.assertFailed(null, L0, 83, 15, "scale != null && scale >= 0.0");
    if (!(horizontalScale != null && dart.notNull(horizontalScale) >= 0.0)) dart.assertFailed(null, L0, 84, 15, "horizontalScale != null && horizontalScale >= 0.0");
    if (!(verticalScale != null && dart.notNull(verticalScale) >= 0.0)) dart.assertFailed(null, L0, 85, 15, "verticalScale != null && verticalScale >= 0.0");
    if (!(rotation != null)) dart.assertFailed(null, L0, 86, 15, "rotation != null");
    this[localFocalPoint$0] = (t0 = localFocalPoint, t0 == null ? focalPoint : t0);
    ;
  }).prototype = scale.ScaleUpdateDetails.prototype;
  dart.addTypeTests(scale.ScaleUpdateDetails);
  dart.addTypeCaches(scale.ScaleUpdateDetails);
  dart.setLibraryUri(scale.ScaleUpdateDetails, L1);
  dart.setFieldSignature(scale.ScaleUpdateDetails, () => ({
    __proto__: dart.getFields(scale.ScaleUpdateDetails.__proto__),
    focalPoint: dart.finalFieldType(ui.Offset),
    localFocalPoint: dart.finalFieldType(ui.Offset),
    scale: dart.finalFieldType(core.double),
    horizontalScale: dart.finalFieldType(core.double),
    verticalScale: dart.finalFieldType(core.double),
    rotation: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(scale.ScaleUpdateDetails, ['toString']);
  var Velocity_pixelsPerSecond = dart.privateName(velocity_tracker, "Velocity.pixelsPerSecond");
  var C6;
  var velocity$ = dart.privateName(scale, "ScaleEndDetails.velocity");
  scale.ScaleEndDetails = class ScaleEndDetails extends core.Object {
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
    toString() {
      return "ScaleEndDetails(velocity: " + dart.str(this.velocity) + ")";
    }
  };
  (scale.ScaleEndDetails.new = function(opts) {
    let velocity = opts && 'velocity' in opts ? opts.velocity : C6 || CT.C6;
    if (velocity == null) dart.nullFailed(L0, 158, 26, "velocity");
    this[velocity$] = velocity;
    if (!(velocity != null)) dart.assertFailed(null, L0, 159, 14, "velocity != null");
    ;
  }).prototype = scale.ScaleEndDetails.prototype;
  dart.addTypeTests(scale.ScaleEndDetails);
  dart.addTypeCaches(scale.ScaleEndDetails);
  dart.setLibraryUri(scale.ScaleEndDetails, L1);
  dart.setFieldSignature(scale.ScaleEndDetails, () => ({
    __proto__: dart.getFields(scale.ScaleEndDetails.__proto__),
    velocity: dart.finalFieldType(velocity_tracker.Velocity)
  }));
  dart.defineExtensionMethods(scale.ScaleEndDetails, ['toString']);
  scale._LineBetweenPointers = class _LineBetweenPointers extends core.Object {};
  (scale._LineBetweenPointers.new = function(opts) {
    let pointerStartLocation = opts && 'pointerStartLocation' in opts ? opts.pointerStartLocation : C5 || CT.C5;
    if (pointerStartLocation == null) dart.nullFailed(L0, 196, 10, "pointerStartLocation");
    let pointerStartId = opts && 'pointerStartId' in opts ? opts.pointerStartId : 0;
    if (pointerStartId == null) dart.nullFailed(L0, 197, 10, "pointerStartId");
    let pointerEndLocation = opts && 'pointerEndLocation' in opts ? opts.pointerEndLocation : C5 || CT.C5;
    if (pointerEndLocation == null) dart.nullFailed(L0, 198, 10, "pointerEndLocation");
    let pointerEndId = opts && 'pointerEndId' in opts ? opts.pointerEndId : 1;
    if (pointerEndId == null) dart.nullFailed(L0, 199, 10, "pointerEndId");
    this.pointerStartLocation = pointerStartLocation;
    this.pointerStartId = pointerStartId;
    this.pointerEndLocation = pointerEndLocation;
    this.pointerEndId = pointerEndId;
    if (!(pointerStartLocation != null && pointerEndLocation != null)) dart.assertFailed(null, L0, 200, 15, "pointerStartLocation != null && pointerEndLocation != null");
    if (!(pointerStartId != null && pointerEndId != null)) dart.assertFailed(null, L0, 201, 15, "pointerStartId != null && pointerEndId != null");
    if (!(pointerStartId != pointerEndId)) dart.assertFailed(null, L0, 202, 15, "pointerStartId != pointerEndId");
    ;
  }).prototype = scale._LineBetweenPointers.prototype;
  dart.addTypeTests(scale._LineBetweenPointers);
  dart.addTypeCaches(scale._LineBetweenPointers);
  dart.setLibraryUri(scale._LineBetweenPointers, L1);
  dart.setFieldSignature(scale._LineBetweenPointers, () => ({
    __proto__: dart.getFields(scale._LineBetweenPointers.__proto__),
    pointerStartLocation: dart.finalFieldType(ui.Offset),
    pointerStartId: dart.finalFieldType(core.int),
    pointerEndLocation: dart.finalFieldType(ui.Offset),
    pointerEndId: dart.finalFieldType(core.int)
  }));
  var _state = dart.privateName(scale, "_state");
  var _lastTransform = dart.privateName(scale, "_lastTransform");
  var __ScaleGestureRecognizer__initialFocalPoint = dart.privateName(scale, "_#ScaleGestureRecognizer#_initialFocalPoint");
  var __ScaleGestureRecognizer__initialFocalPoint_isSet = dart.privateName(scale, "_#ScaleGestureRecognizer#_initialFocalPoint#isSet");
  var __ScaleGestureRecognizer__currentFocalPoint = dart.privateName(scale, "_#ScaleGestureRecognizer#_currentFocalPoint");
  var __ScaleGestureRecognizer__currentFocalPoint_isSet = dart.privateName(scale, "_#ScaleGestureRecognizer#_currentFocalPoint#isSet");
  var __ScaleGestureRecognizer__initialSpan = dart.privateName(scale, "_#ScaleGestureRecognizer#_initialSpan");
  var __ScaleGestureRecognizer__initialSpan_isSet = dart.privateName(scale, "_#ScaleGestureRecognizer#_initialSpan#isSet");
  var __ScaleGestureRecognizer__currentSpan = dart.privateName(scale, "_#ScaleGestureRecognizer#_currentSpan");
  var __ScaleGestureRecognizer__currentSpan_isSet = dart.privateName(scale, "_#ScaleGestureRecognizer#_currentSpan#isSet");
  var __ScaleGestureRecognizer__initialHorizontalSpan = dart.privateName(scale, "_#ScaleGestureRecognizer#_initialHorizontalSpan");
  var __ScaleGestureRecognizer__initialHorizontalSpan_isSet = dart.privateName(scale, "_#ScaleGestureRecognizer#_initialHorizontalSpan#isSet");
  var __ScaleGestureRecognizer__currentHorizontalSpan = dart.privateName(scale, "_#ScaleGestureRecognizer#_currentHorizontalSpan");
  var __ScaleGestureRecognizer__currentHorizontalSpan_isSet = dart.privateName(scale, "_#ScaleGestureRecognizer#_currentHorizontalSpan#isSet");
  var __ScaleGestureRecognizer__initialVerticalSpan = dart.privateName(scale, "_#ScaleGestureRecognizer#_initialVerticalSpan");
  var __ScaleGestureRecognizer__initialVerticalSpan_isSet = dart.privateName(scale, "_#ScaleGestureRecognizer#_initialVerticalSpan#isSet");
  var __ScaleGestureRecognizer__currentVerticalSpan = dart.privateName(scale, "_#ScaleGestureRecognizer#_currentVerticalSpan");
  var __ScaleGestureRecognizer__currentVerticalSpan_isSet = dart.privateName(scale, "_#ScaleGestureRecognizer#_currentVerticalSpan#isSet");
  var _initialLine = dart.privateName(scale, "_initialLine");
  var _currentLine = dart.privateName(scale, "_currentLine");
  var __ScaleGestureRecognizer__pointerLocations = dart.privateName(scale, "_#ScaleGestureRecognizer#_pointerLocations");
  var __ScaleGestureRecognizer__pointerLocations_isSet = dart.privateName(scale, "_#ScaleGestureRecognizer#_pointerLocations#isSet");
  var __ScaleGestureRecognizer__pointerQueue = dart.privateName(scale, "_#ScaleGestureRecognizer#_pointerQueue");
  var __ScaleGestureRecognizer__pointerQueue_isSet = dart.privateName(scale, "_#ScaleGestureRecognizer#_pointerQueue#isSet");
  var _velocityTrackers = dart.privateName(scale, "_velocityTrackers");
  var _initialFocalPoint = dart.privateName(scale, "_initialFocalPoint");
  var _currentFocalPoint = dart.privateName(scale, "_currentFocalPoint");
  var _initialSpan = dart.privateName(scale, "_initialSpan");
  var _currentSpan = dart.privateName(scale, "_currentSpan");
  var _initialHorizontalSpan = dart.privateName(scale, "_initialHorizontalSpan");
  var _currentHorizontalSpan = dart.privateName(scale, "_currentHorizontalSpan");
  var _initialVerticalSpan = dart.privateName(scale, "_initialVerticalSpan");
  var _currentVerticalSpan = dart.privateName(scale, "_currentVerticalSpan");
  var _pointerLocations = dart.privateName(scale, "_pointerLocations");
  var _pointerQueue = dart.privateName(scale, "_pointerQueue");
  var _scaleFactor = dart.privateName(scale, "_scaleFactor");
  var _horizontalScaleFactor = dart.privateName(scale, "_horizontalScaleFactor");
  var _verticalScaleFactor = dart.privateName(scale, "_verticalScaleFactor");
  var _computeRotationFactor = dart.privateName(scale, "_computeRotationFactor");
  var _updateLines = dart.privateName(scale, "_updateLines");
  var _update = dart.privateName(scale, "_update");
  var _reconfigure = dart.privateName(scale, "_reconfigure");
  var _advanceStateMachine = dart.privateName(scale, "_advanceStateMachine");
  var _dispatchOnStartCallbackIfNeeded = dart.privateName(scale, "_dispatchOnStartCallbackIfNeeded");
  var onStart = dart.privateName(scale, "ScaleGestureRecognizer.onStart");
  var onUpdate = dart.privateName(scale, "ScaleGestureRecognizer.onUpdate");
  var onEnd = dart.privateName(scale, "ScaleGestureRecognizer.onEnd");
  scale.ScaleGestureRecognizer = class ScaleGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
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
    get [_initialFocalPoint]() {
      let t0;
      return dart.test(this[__ScaleGestureRecognizer__initialFocalPoint_isSet]) ? (t0 = this[__ScaleGestureRecognizer__initialFocalPoint], t0) : dart.throw(new _internal.LateError.fieldNI("_initialFocalPoint"));
    }
    set [_initialFocalPoint](t0) {
      if (t0 == null) dart.nullFailed(L0, 246, 15, "null");
      this[__ScaleGestureRecognizer__initialFocalPoint_isSet] = true;
      this[__ScaleGestureRecognizer__initialFocalPoint] = t0;
    }
    get [_currentFocalPoint]() {
      let t1;
      return dart.test(this[__ScaleGestureRecognizer__currentFocalPoint_isSet]) ? (t1 = this[__ScaleGestureRecognizer__currentFocalPoint], t1) : dart.throw(new _internal.LateError.fieldNI("_currentFocalPoint"));
    }
    set [_currentFocalPoint](t1) {
      if (t1 == null) dart.nullFailed(L0, 247, 15, "null");
      this[__ScaleGestureRecognizer__currentFocalPoint_isSet] = true;
      this[__ScaleGestureRecognizer__currentFocalPoint] = t1;
    }
    get [_initialSpan]() {
      let t2;
      return dart.test(this[__ScaleGestureRecognizer__initialSpan_isSet]) ? (t2 = this[__ScaleGestureRecognizer__initialSpan], t2) : dart.throw(new _internal.LateError.fieldNI("_initialSpan"));
    }
    set [_initialSpan](t2) {
      if (t2 == null) dart.nullFailed(L0, 248, 15, "null");
      this[__ScaleGestureRecognizer__initialSpan_isSet] = true;
      this[__ScaleGestureRecognizer__initialSpan] = t2;
    }
    get [_currentSpan]() {
      let t3;
      return dart.test(this[__ScaleGestureRecognizer__currentSpan_isSet]) ? (t3 = this[__ScaleGestureRecognizer__currentSpan], t3) : dart.throw(new _internal.LateError.fieldNI("_currentSpan"));
    }
    set [_currentSpan](t3) {
      if (t3 == null) dart.nullFailed(L0, 249, 15, "null");
      this[__ScaleGestureRecognizer__currentSpan_isSet] = true;
      this[__ScaleGestureRecognizer__currentSpan] = t3;
    }
    get [_initialHorizontalSpan]() {
      let t4;
      return dart.test(this[__ScaleGestureRecognizer__initialHorizontalSpan_isSet]) ? (t4 = this[__ScaleGestureRecognizer__initialHorizontalSpan], t4) : dart.throw(new _internal.LateError.fieldNI("_initialHorizontalSpan"));
    }
    set [_initialHorizontalSpan](t4) {
      if (t4 == null) dart.nullFailed(L0, 250, 15, "null");
      this[__ScaleGestureRecognizer__initialHorizontalSpan_isSet] = true;
      this[__ScaleGestureRecognizer__initialHorizontalSpan] = t4;
    }
    set [_currentHorizontalSpan](t5) {
      if (t5 == null) dart.nullFailed(L0, 251, 15, "null");
      this[__ScaleGestureRecognizer__currentHorizontalSpan_isSet] = true;
      this[__ScaleGestureRecognizer__currentHorizontalSpan] = t5;
    }
    get [_currentHorizontalSpan]() {
      let t6;
      return dart.test(this[__ScaleGestureRecognizer__currentHorizontalSpan_isSet]) ? (t6 = this[__ScaleGestureRecognizer__currentHorizontalSpan], t6) : dart.throw(new _internal.LateError.fieldNI("_currentHorizontalSpan"));
    }
    get [_initialVerticalSpan]() {
      let t6;
      return dart.test(this[__ScaleGestureRecognizer__initialVerticalSpan_isSet]) ? (t6 = this[__ScaleGestureRecognizer__initialVerticalSpan], t6) : dart.throw(new _internal.LateError.fieldNI("_initialVerticalSpan"));
    }
    set [_initialVerticalSpan](t6) {
      if (t6 == null) dart.nullFailed(L0, 252, 15, "null");
      this[__ScaleGestureRecognizer__initialVerticalSpan_isSet] = true;
      this[__ScaleGestureRecognizer__initialVerticalSpan] = t6;
    }
    get [_currentVerticalSpan]() {
      let t7;
      return dart.test(this[__ScaleGestureRecognizer__currentVerticalSpan_isSet]) ? (t7 = this[__ScaleGestureRecognizer__currentVerticalSpan], t7) : dart.throw(new _internal.LateError.fieldNI("_currentVerticalSpan"));
    }
    set [_currentVerticalSpan](t7) {
      if (t7 == null) dart.nullFailed(L0, 253, 15, "null");
      this[__ScaleGestureRecognizer__currentVerticalSpan_isSet] = true;
      this[__ScaleGestureRecognizer__currentVerticalSpan] = t7;
    }
    get [_pointerLocations]() {
      let t8;
      return dart.test(this[__ScaleGestureRecognizer__pointerLocations_isSet]) ? (t8 = this[__ScaleGestureRecognizer__pointerLocations], t8) : dart.throw(new _internal.LateError.fieldNI("_pointerLocations"));
    }
    set [_pointerLocations](t8) {
      if (t8 == null) dart.nullFailed(L0, 256, 25, "null");
      this[__ScaleGestureRecognizer__pointerLocations_isSet] = true;
      this[__ScaleGestureRecognizer__pointerLocations] = t8;
    }
    get [_pointerQueue]() {
      let t9;
      return dart.test(this[__ScaleGestureRecognizer__pointerQueue_isSet]) ? (t9 = this[__ScaleGestureRecognizer__pointerQueue], t9) : dart.throw(new _internal.LateError.fieldNI("_pointerQueue"));
    }
    set [_pointerQueue](t9) {
      if (t9 == null) dart.nullFailed(L0, 257, 18, "null");
      this[__ScaleGestureRecognizer__pointerQueue_isSet] = true;
      this[__ScaleGestureRecognizer__pointerQueue] = t9;
    }
    get [_scaleFactor]() {
      return dart.notNull(this[_initialSpan]) > 0.0 ? dart.notNull(this[_currentSpan]) / dart.notNull(this[_initialSpan]) : 1.0;
    }
    get [_horizontalScaleFactor]() {
      return dart.notNull(this[_initialHorizontalSpan]) > 0.0 ? dart.notNull(this[_currentHorizontalSpan]) / dart.notNull(this[_initialHorizontalSpan]) : 1.0;
    }
    get [_verticalScaleFactor]() {
      return dart.notNull(this[_initialVerticalSpan]) > 0.0 ? dart.notNull(this[_currentVerticalSpan]) / dart.notNull(this[_initialVerticalSpan]) : 1.0;
    }
    [_computeRotationFactor]() {
      if (this[_initialLine] == null || this[_currentLine] == null) {
        return 0.0;
      }
      let fx = dart.nullCheck(this[_initialLine]).pointerStartLocation.dx;
      let fy = dart.nullCheck(this[_initialLine]).pointerStartLocation.dy;
      let sx = dart.nullCheck(this[_initialLine]).pointerEndLocation.dx;
      let sy = dart.nullCheck(this[_initialLine]).pointerEndLocation.dy;
      let nfx = dart.nullCheck(this[_currentLine]).pointerStartLocation.dx;
      let nfy = dart.nullCheck(this[_currentLine]).pointerStartLocation.dy;
      let nsx = dart.nullCheck(this[_currentLine]).pointerEndLocation.dx;
      let nsy = dart.nullCheck(this[_currentLine]).pointerEndLocation.dy;
      let angle1 = math.atan2(dart.notNull(fy) - dart.notNull(sy), dart.notNull(fx) - dart.notNull(sx));
      let angle2 = math.atan2(dart.notNull(nfy) - dart.notNull(nsy), dart.notNull(nfx) - dart.notNull(nsx));
      return angle2 - angle1;
    }
    addAllowedPointer(event) {
      if (event == null) dart.nullFailed(L0, 287, 39, "event");
      this.startTrackingPointer(event.pointer, event.transform);
      this[_velocityTrackers][$_set](event.pointer, new velocity_tracker.VelocityTracker.withKind(event.kind));
      if (dart.equals(this[_state], scale._ScaleState.ready)) {
        this[_state] = scale._ScaleState.possible;
        this[_initialSpan] = 0.0;
        this[_currentSpan] = 0.0;
        this[_initialHorizontalSpan] = 0.0;
        this[_currentHorizontalSpan] = 0.0;
        this[_initialVerticalSpan] = 0.0;
        this[_currentVerticalSpan] = 0.0;
        this[_pointerLocations] = new (IdentityMapOfint$Offset()).new();
        this[_pointerQueue] = JSArrayOfint().of([]);
      }
    }
    handleEvent(event) {
      if (event == null) dart.nullFailed(L0, 304, 33, "event");
      if (!!dart.equals(this[_state], scale._ScaleState.ready)) dart.assertFailed(null, L0, 305, 12, "_state != _ScaleState.ready");
      let didChangeConfiguration = false;
      let shouldStartIfAccepted = false;
      if (events.PointerMoveEvent.is(event)) {
        let tracker = dart.nullCheck(this[_velocityTrackers][$_get](event.pointer));
        if (!dart.test(event.synthesized)) tracker.addPosition(event.timeStamp, event.position);
        this[_pointerLocations][$_set](event.pointer, event.position);
        shouldStartIfAccepted = true;
        this[_lastTransform] = event.transform;
      } else if (events.PointerDownEvent.is(event)) {
        this[_pointerLocations][$_set](event.pointer, event.position);
        this[_pointerQueue][$add](event.pointer);
        didChangeConfiguration = true;
        shouldStartIfAccepted = true;
        this[_lastTransform] = event.transform;
      } else if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) {
        this[_pointerLocations][$remove](event.pointer);
        this[_pointerQueue][$remove](event.pointer);
        didChangeConfiguration = true;
        this[_lastTransform] = event.transform;
      }
      this[_updateLines]();
      this[_update]();
      if (!didChangeConfiguration || dart.test(this[_reconfigure](event.pointer))) this[_advanceStateMachine](shouldStartIfAccepted, event.kind);
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    [_update]() {
      let count = this[_pointerLocations][$keys][$length];
      let focalPoint = ui.Offset.zero;
      for (let pointer of this[_pointerLocations][$keys])
        focalPoint = focalPoint['+'](dart.nullCheck(this[_pointerLocations][$_get](pointer)));
      this[_currentFocalPoint] = dart.notNull(count) > 0 ? focalPoint['/'](count[$toDouble]()) : ui.Offset.zero;
      let totalDeviation = 0.0;
      let totalHorizontalDeviation = 0.0;
      let totalVerticalDeviation = 0.0;
      for (let pointer of this[_pointerLocations][$keys]) {
        totalDeviation = totalDeviation + dart.notNull(this[_currentFocalPoint]['-'](dart.nullCheck(this[_pointerLocations][$_get](pointer))).distance);
        totalHorizontalDeviation = totalHorizontalDeviation + (dart.notNull(this[_currentFocalPoint].dx) - dart.notNull(dart.nullCheck(this[_pointerLocations][$_get](pointer)).dx))[$abs]();
        totalVerticalDeviation = totalVerticalDeviation + (dart.notNull(this[_currentFocalPoint].dy) - dart.notNull(dart.nullCheck(this[_pointerLocations][$_get](pointer)).dy))[$abs]();
      }
      this[_currentSpan] = dart.notNull(count) > 0 ? totalDeviation / dart.notNull(count) : 0.0;
      this[_currentHorizontalSpan] = dart.notNull(count) > 0 ? totalHorizontalDeviation / dart.notNull(count) : 0.0;
      this[_currentVerticalSpan] = dart.notNull(count) > 0 ? totalVerticalDeviation / dart.notNull(count) : 0.0;
    }
    [_updateLines]() {
      let count = this[_pointerLocations][$keys][$length];
      if (!(dart.notNull(this[_pointerQueue][$length]) >= dart.notNull(count))) dart.assertFailed(null, L0, 365, 12, "_pointerQueue.length >= count");
      if (dart.notNull(count) < 2) {
        this[_initialLine] = this[_currentLine];
      } else if (this[_initialLine] != null && dart.nullCheck(this[_initialLine]).pointerStartId == this[_pointerQueue][$_get](0) && dart.nullCheck(this[_initialLine]).pointerEndId == this[_pointerQueue][$_get](1)) {
        this[_currentLine] = new scale._LineBetweenPointers.new({pointerStartId: this[_pointerQueue][$_get](0), pointerStartLocation: dart.nullCheck(this[_pointerLocations][$_get](this[_pointerQueue][$_get](0))), pointerEndId: this[_pointerQueue][$_get](1), pointerEndLocation: dart.nullCheck(this[_pointerLocations][$_get](this[_pointerQueue][$_get](1)))});
      } else {
        this[_initialLine] = new scale._LineBetweenPointers.new({pointerStartId: this[_pointerQueue][$_get](0), pointerStartLocation: dart.nullCheck(this[_pointerLocations][$_get](this[_pointerQueue][$_get](0))), pointerEndId: this[_pointerQueue][$_get](1), pointerEndLocation: dart.nullCheck(this[_pointerLocations][$_get](this[_pointerQueue][$_get](1)))});
        this[_currentLine] = null;
      }
    }
    [_reconfigure](pointer) {
      if (pointer == null) dart.nullFailed(L0, 391, 25, "pointer");
      this[_initialFocalPoint] = this[_currentFocalPoint];
      this[_initialSpan] = this[_currentSpan];
      this[_initialLine] = this[_currentLine];
      this[_initialHorizontalSpan] = this[_currentHorizontalSpan];
      this[_initialVerticalSpan] = this[_currentVerticalSpan];
      if (dart.equals(this[_state], scale._ScaleState.started)) {
        if (this.onEnd != null) {
          let tracker = dart.nullCheck(this[_velocityTrackers][$_get](pointer));
          let velocity = tracker.getVelocity();
          if (dart.test(scale._isFlingGesture(velocity))) {
            let pixelsPerSecond = velocity.pixelsPerSecond;
            if (dart.notNull(pixelsPerSecond.distanceSquared) > 8000 * 8000) velocity = new velocity_tracker.Velocity.new({pixelsPerSecond: pixelsPerSecond['/'](pixelsPerSecond.distance)['*'](8000)});
            this.invokeCallback(dart.void, "onEnd", dart.fn(() => dart.nullCheck(this.onEnd)(new scale.ScaleEndDetails.new({velocity: velocity})), VoidTovoid()));
          } else {
            this.invokeCallback(dart.void, "onEnd", dart.fn(() => dart.nullCheck(this.onEnd)(new scale.ScaleEndDetails.new({velocity: velocity_tracker.Velocity.zero})), VoidTovoid()));
          }
        }
        this[_state] = scale._ScaleState.accepted;
        return false;
      }
      return true;
    }
    [_advanceStateMachine](shouldStartIfAccepted, pointerDeviceKind) {
      if (shouldStartIfAccepted == null) dart.nullFailed(L0, 417, 34, "shouldStartIfAccepted");
      if (pointerDeviceKind == null) dart.nullFailed(L0, 417, 75, "pointerDeviceKind");
      if (dart.equals(this[_state], scale._ScaleState.ready)) this[_state] = scale._ScaleState.possible;
      if (dart.equals(this[_state], scale._ScaleState.possible)) {
        let spanDelta = (dart.notNull(this[_currentSpan]) - dart.notNull(this[_initialSpan]))[$abs]();
        let focalPointDelta = this[_currentFocalPoint]['-'](this[_initialFocalPoint]).distance;
        if (spanDelta > dart.notNull(events.computeScaleSlop(pointerDeviceKind)) || dart.notNull(focalPointDelta) > dart.notNull(events.computePanSlop(pointerDeviceKind))) this.resolve(arena.GestureDisposition.accepted);
      } else if (dart.notNull(this[_state].index) >= dart.notNull(scale._ScaleState.accepted.index)) {
        this.resolve(arena.GestureDisposition.accepted);
      }
      if (dart.equals(this[_state], scale._ScaleState.accepted) && dart.test(shouldStartIfAccepted)) {
        this[_state] = scale._ScaleState.started;
        this[_dispatchOnStartCallbackIfNeeded]();
      }
      if (dart.equals(this[_state], scale._ScaleState.started) && this.onUpdate != null) this.invokeCallback(dart.void, "onUpdate", dart.fn(() => {
        dart.nullCheck(this.onUpdate)(new scale.ScaleUpdateDetails.new({scale: this[_scaleFactor], horizontalScale: this[_horizontalScaleFactor], verticalScale: this[_verticalScaleFactor], focalPoint: this[_currentFocalPoint], localFocalPoint: events.PointerEvent.transformPosition(this[_lastTransform], this[_currentFocalPoint]), rotation: this[_computeRotationFactor]()}));
      }, VoidTovoid()));
    }
    [_dispatchOnStartCallbackIfNeeded]() {
      if (!dart.equals(this[_state], scale._ScaleState.started)) dart.assertFailed(null, L0, 449, 12, "_state == _ScaleState.started");
      if (this.onStart != null) this.invokeCallback(dart.void, "onStart", dart.fn(() => {
        dart.nullCheck(this.onStart)(new scale.ScaleStartDetails.new({focalPoint: this[_currentFocalPoint], localFocalPoint: events.PointerEvent.transformPosition(this[_lastTransform], this[_currentFocalPoint])}));
      }, VoidTovoid()));
    }
    acceptGesture(pointer) {
      if (pointer == null) dart.nullFailed(L0, 460, 26, "pointer");
      if (dart.equals(this[_state], scale._ScaleState.possible)) {
        this[_state] = scale._ScaleState.started;
        this[_dispatchOnStartCallbackIfNeeded]();
      }
    }
    rejectGesture(pointer) {
      if (pointer == null) dart.nullFailed(L0, 468, 26, "pointer");
      this.stopTrackingPointer(pointer);
    }
    didStopTrackingLastPointer(pointer) {
      if (pointer == null) dart.nullFailed(L0, 473, 39, "pointer");
      switch (this[_state]) {
        case C1 || CT.C1:
        {
          this.resolve(arena.GestureDisposition.rejected);
          break;
        }
        case C0 || CT.C0:
        {
          if (!false) dart.assertFailed(null, L0, 479, 16, "false");
          break;
        }
        case C2 || CT.C2:
        {
          break;
        }
        case C3 || CT.C3:
        {
          if (!false) dart.assertFailed(null, L0, 484, 16, "false");
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      this[_state] = scale._ScaleState.ready;
    }
    dispose() {
      this[_velocityTrackers][$clear]();
      super.dispose();
    }
    get debugDescription() {
      return "scale";
    }
  };
  (scale.ScaleGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onStart] = null;
    this[onUpdate] = null;
    this[onEnd] = null;
    this[_state] = scale._ScaleState.ready;
    this[_lastTransform] = null;
    this[__ScaleGestureRecognizer__initialFocalPoint] = null;
    this[__ScaleGestureRecognizer__initialFocalPoint_isSet] = false;
    this[__ScaleGestureRecognizer__currentFocalPoint] = null;
    this[__ScaleGestureRecognizer__currentFocalPoint_isSet] = false;
    this[__ScaleGestureRecognizer__initialSpan] = null;
    this[__ScaleGestureRecognizer__initialSpan_isSet] = false;
    this[__ScaleGestureRecognizer__currentSpan] = null;
    this[__ScaleGestureRecognizer__currentSpan_isSet] = false;
    this[__ScaleGestureRecognizer__initialHorizontalSpan] = null;
    this[__ScaleGestureRecognizer__initialHorizontalSpan_isSet] = false;
    this[__ScaleGestureRecognizer__currentHorizontalSpan] = null;
    this[__ScaleGestureRecognizer__currentHorizontalSpan_isSet] = false;
    this[__ScaleGestureRecognizer__initialVerticalSpan] = null;
    this[__ScaleGestureRecognizer__initialVerticalSpan_isSet] = false;
    this[__ScaleGestureRecognizer__currentVerticalSpan] = null;
    this[__ScaleGestureRecognizer__currentVerticalSpan_isSet] = false;
    this[_initialLine] = null;
    this[_currentLine] = null;
    this[__ScaleGestureRecognizer__pointerLocations] = null;
    this[__ScaleGestureRecognizer__pointerLocations_isSet] = false;
    this[__ScaleGestureRecognizer__pointerQueue] = null;
    this[__ScaleGestureRecognizer__pointerQueue_isSet] = false;
    this[_velocityTrackers] = new (IdentityMapOfint$VelocityTracker()).new();
    scale.ScaleGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = scale.ScaleGestureRecognizer.prototype;
  dart.addTypeTests(scale.ScaleGestureRecognizer);
  dart.addTypeCaches(scale.ScaleGestureRecognizer);
  dart.setMethodSignature(scale.ScaleGestureRecognizer, () => ({
    __proto__: dart.getMethods(scale.ScaleGestureRecognizer.__proto__),
    [_computeRotationFactor]: dart.fnType(core.double, []),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerEvent]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    [_update]: dart.fnType(dart.void, []),
    [_updateLines]: dart.fnType(dart.void, []),
    [_reconfigure]: dart.fnType(core.bool, [core.int]),
    [_advanceStateMachine]: dart.fnType(dart.void, [core.bool, ui.PointerDeviceKind]),
    [_dispatchOnStartCallbackIfNeeded]: dart.fnType(dart.void, []),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(scale.ScaleGestureRecognizer, () => ({
    __proto__: dart.getGetters(scale.ScaleGestureRecognizer.__proto__),
    [_initialFocalPoint]: ui.Offset,
    [_currentFocalPoint]: ui.Offset,
    [_initialSpan]: core.double,
    [_currentSpan]: core.double,
    [_initialHorizontalSpan]: core.double,
    [_currentHorizontalSpan]: core.double,
    [_initialVerticalSpan]: core.double,
    [_currentVerticalSpan]: core.double,
    [_pointerLocations]: core.Map$(core.int, ui.Offset),
    [_pointerQueue]: core.List$(core.int),
    [_scaleFactor]: core.double,
    [_horizontalScaleFactor]: core.double,
    [_verticalScaleFactor]: core.double,
    debugDescription: core.String
  }));
  dart.setSetterSignature(scale.ScaleGestureRecognizer, () => ({
    __proto__: dart.getSetters(scale.ScaleGestureRecognizer.__proto__),
    [_initialFocalPoint]: ui.Offset,
    [_currentFocalPoint]: ui.Offset,
    [_initialSpan]: core.double,
    [_currentSpan]: core.double,
    [_initialHorizontalSpan]: core.double,
    [_currentHorizontalSpan]: core.double,
    [_initialVerticalSpan]: core.double,
    [_currentVerticalSpan]: core.double,
    [_pointerLocations]: core.Map$(core.int, ui.Offset),
    [_pointerQueue]: core.List$(core.int)
  }));
  dart.setLibraryUri(scale.ScaleGestureRecognizer, L1);
  dart.setFieldSignature(scale.ScaleGestureRecognizer, () => ({
    __proto__: dart.getFields(scale.ScaleGestureRecognizer.__proto__),
    onStart: dart.fieldType(dart.nullable(dart.fnType(dart.void, [scale.ScaleStartDetails]))),
    onUpdate: dart.fieldType(dart.nullable(dart.fnType(dart.void, [scale.ScaleUpdateDetails]))),
    onEnd: dart.fieldType(dart.nullable(dart.fnType(dart.void, [scale.ScaleEndDetails]))),
    [_state]: dart.fieldType(scale._ScaleState),
    [_lastTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [__ScaleGestureRecognizer__initialFocalPoint]: dart.fieldType(dart.nullable(ui.Offset)),
    [__ScaleGestureRecognizer__initialFocalPoint_isSet]: dart.fieldType(core.bool),
    [__ScaleGestureRecognizer__currentFocalPoint]: dart.fieldType(dart.nullable(ui.Offset)),
    [__ScaleGestureRecognizer__currentFocalPoint_isSet]: dart.fieldType(core.bool),
    [__ScaleGestureRecognizer__initialSpan]: dart.fieldType(dart.nullable(core.double)),
    [__ScaleGestureRecognizer__initialSpan_isSet]: dart.fieldType(core.bool),
    [__ScaleGestureRecognizer__currentSpan]: dart.fieldType(dart.nullable(core.double)),
    [__ScaleGestureRecognizer__currentSpan_isSet]: dart.fieldType(core.bool),
    [__ScaleGestureRecognizer__initialHorizontalSpan]: dart.fieldType(dart.nullable(core.double)),
    [__ScaleGestureRecognizer__initialHorizontalSpan_isSet]: dart.fieldType(core.bool),
    [__ScaleGestureRecognizer__currentHorizontalSpan]: dart.fieldType(dart.nullable(core.double)),
    [__ScaleGestureRecognizer__currentHorizontalSpan_isSet]: dart.fieldType(core.bool),
    [__ScaleGestureRecognizer__initialVerticalSpan]: dart.fieldType(dart.nullable(core.double)),
    [__ScaleGestureRecognizer__initialVerticalSpan_isSet]: dart.fieldType(core.bool),
    [__ScaleGestureRecognizer__currentVerticalSpan]: dart.fieldType(dart.nullable(core.double)),
    [__ScaleGestureRecognizer__currentVerticalSpan_isSet]: dart.fieldType(core.bool),
    [_initialLine]: dart.fieldType(dart.nullable(scale._LineBetweenPointers)),
    [_currentLine]: dart.fieldType(dart.nullable(scale._LineBetweenPointers)),
    [__ScaleGestureRecognizer__pointerLocations]: dart.fieldType(dart.nullable(core.Map$(core.int, ui.Offset))),
    [__ScaleGestureRecognizer__pointerLocations_isSet]: dart.fieldType(core.bool),
    [__ScaleGestureRecognizer__pointerQueue]: dart.fieldType(dart.nullable(core.List$(core.int))),
    [__ScaleGestureRecognizer__pointerQueue_isSet]: dart.fieldType(core.bool),
    [_velocityTrackers]: dart.finalFieldType(core.Map$(core.int, velocity_tracker.VelocityTracker))
  }));
  scale._isFlingGesture = function _isFlingGesture(velocity) {
    if (velocity == null) dart.nullFailed(L0, 179, 31, "velocity");
    if (!(velocity != null)) dart.assertFailed(null, L0, 180, 10, "velocity != null");
    let speedSquared = velocity.pixelsPerSecond.distanceSquared;
    return dart.notNull(speedSquared) > 50 * 50;
  };
  dart.trackLibraries("packages/flutter/src/gestures/scale.dart", {
    "package:flutter/src/gestures/scale.dart": scale
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scale.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/gestures/scale.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__scale: scale
  };
}));

//# sourceMappingURL=scale.dart.lib.js.map
