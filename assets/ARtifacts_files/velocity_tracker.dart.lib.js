define(['dart_sdk', 'packages/flutter/src/gestures/lsq_solver.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__gestures__velocity_tracker_dart(dart_sdk, packages__flutter__src__gestures__lsq_solver$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const lsq_solver = packages__flutter__src__gestures__lsq_solver$46dart.src__gestures__lsq_solver;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  var velocity_tracker = Object.create(dart.library);
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $toDouble = dartx.toDouble;
  var $abs = dartx.abs;
  var $add = dartx.add;
  var $modulo = dartx['%'];
  dart._checkModuleNullSafetyMode(false);
  var _PointAtTimeN = () => (_PointAtTimeN = dart.constFn(dart.nullable(velocity_tracker._PointAtTime)))();
  var ListOf_PointAtTimeN = () => (ListOf_PointAtTimeN = dart.constFn(core.List$(_PointAtTimeN())))();
  var JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/gestures/velocity_tracker.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/gestures/velocity_tracker.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: velocity_tracker.Velocity.prototype,
        [pixelsPerSecond$]: C1 || CT.C1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.touch",
        index: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: velocity_tracker.VelocityEstimate.prototype,
        [offset$]: C1 || CT.C1,
        [duration$]: C4 || CT.C4,
        [confidence$]: 0,
        [pixelsPerSecond$0]: C1 || CT.C1
      });
    }
  }, false);
  var pixelsPerSecond$ = dart.privateName(velocity_tracker, "Velocity.pixelsPerSecond");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C1;
  var C0;
  velocity_tracker.Velocity = class Velocity extends core.Object {
    get pixelsPerSecond() {
      return this[pixelsPerSecond$];
    }
    set pixelsPerSecond(value) {
      super.pixelsPerSecond = value;
    }
    _negate() {
      return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond._negate()});
    }
    ['-'](other) {
      if (other == null) dart.nullFailed(L0, 35, 32, "other");
      return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['-'](other.pixelsPerSecond)});
    }
    ['+'](other) {
      if (other == null) dart.nullFailed(L0, 41, 32, "other");
      return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['+'](other.pixelsPerSecond)});
    }
    clampMagnitude(minValue, maxValue) {
      if (minValue == null) dart.nullFailed(L0, 56, 34, "minValue");
      if (maxValue == null) dart.nullFailed(L0, 56, 51, "maxValue");
      if (!(minValue != null && dart.notNull(minValue) >= 0.0)) dart.assertFailed(null, L0, 57, 12, "minValue != null && minValue >= 0.0");
      if (!(maxValue != null && dart.notNull(maxValue) >= 0.0 && dart.notNull(maxValue) >= dart.notNull(minValue))) dart.assertFailed(null, L0, 58, 12, "maxValue != null && maxValue >= 0.0 && maxValue >= minValue");
      let valueSquared = this.pixelsPerSecond.distanceSquared;
      if (dart.notNull(valueSquared) > dart.notNull(maxValue) * dart.notNull(maxValue)) return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['/'](this.pixelsPerSecond.distance)['*'](maxValue)});
      if (dart.notNull(valueSquared) < dart.notNull(minValue) * dart.notNull(minValue)) return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['/'](this.pixelsPerSecond.distance)['*'](minValue)});
      return this;
    }
    _equals(other) {
      if (other == null) return false;
      return velocity_tracker.Velocity.is(other) && dart.equals(other.pixelsPerSecond, this.pixelsPerSecond);
    }
    get hashCode() {
      return dart.hashCode(this.pixelsPerSecond);
    }
    toString() {
      return "Velocity(" + this.pixelsPerSecond.dx[$toStringAsFixed](1) + ", " + this.pixelsPerSecond.dy[$toStringAsFixed](1) + ")";
    }
  };
  (velocity_tracker.Velocity.new = function(opts) {
    let pixelsPerSecond = opts && 'pixelsPerSecond' in opts ? opts.pixelsPerSecond : null;
    if (pixelsPerSecond == null) dart.nullFailed(L0, 22, 19, "pixelsPerSecond");
    this[pixelsPerSecond$] = pixelsPerSecond;
    if (!(pixelsPerSecond != null)) dart.assertFailed(null, L0, 23, 15, "pixelsPerSecond != null");
    ;
  }).prototype = velocity_tracker.Velocity.prototype;
  dart.addTypeTests(velocity_tracker.Velocity);
  dart.addTypeCaches(velocity_tracker.Velocity);
  dart.setMethodSignature(velocity_tracker.Velocity, () => ({
    __proto__: dart.getMethods(velocity_tracker.Velocity.__proto__),
    _negate: dart.fnType(velocity_tracker.Velocity, []),
    '-': dart.fnType(velocity_tracker.Velocity, [velocity_tracker.Velocity]),
    '+': dart.fnType(velocity_tracker.Velocity, [velocity_tracker.Velocity]),
    clampMagnitude: dart.fnType(velocity_tracker.Velocity, [core.double, core.double])
  }));
  dart.setLibraryUri(velocity_tracker.Velocity, L1);
  dart.setFieldSignature(velocity_tracker.Velocity, () => ({
    __proto__: dart.getFields(velocity_tracker.Velocity.__proto__),
    pixelsPerSecond: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(velocity_tracker.Velocity, ['_equals', 'toString']);
  dart.defineExtensionAccessors(velocity_tracker.Velocity, ['hashCode']);
  dart.defineLazy(velocity_tracker.Velocity, {
    /*velocity_tracker.Velocity.zero*/get zero() {
      return C0 || CT.C0;
    }
  }, false);
  var pixelsPerSecond$0 = dart.privateName(velocity_tracker, "VelocityEstimate.pixelsPerSecond");
  var confidence$ = dart.privateName(velocity_tracker, "VelocityEstimate.confidence");
  var duration$ = dart.privateName(velocity_tracker, "VelocityEstimate.duration");
  var offset$ = dart.privateName(velocity_tracker, "VelocityEstimate.offset");
  velocity_tracker.VelocityEstimate = class VelocityEstimate extends core.Object {
    get pixelsPerSecond() {
      return this[pixelsPerSecond$0];
    }
    set pixelsPerSecond(value) {
      super.pixelsPerSecond = value;
    }
    get confidence() {
      return this[confidence$];
    }
    set confidence(value) {
      super.confidence = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    toString() {
      return "VelocityEstimate(" + this.pixelsPerSecond.dx[$toStringAsFixed](1) + ", " + this.pixelsPerSecond.dy[$toStringAsFixed](1) + "; offset: " + dart.str(this.offset) + ", duration: " + dart.str(this.duration) + ", confidence: " + this.confidence[$toStringAsFixed](1) + ")";
    }
  };
  (velocity_tracker.VelocityEstimate.new = function(opts) {
    let pixelsPerSecond = opts && 'pixelsPerSecond' in opts ? opts.pixelsPerSecond : null;
    if (pixelsPerSecond == null) dart.nullFailed(L0, 98, 19, "pixelsPerSecond");
    let confidence = opts && 'confidence' in opts ? opts.confidence : null;
    if (confidence == null) dart.nullFailed(L0, 99, 19, "confidence");
    let duration = opts && 'duration' in opts ? opts.duration : null;
    if (duration == null) dart.nullFailed(L0, 100, 19, "duration");
    let offset = opts && 'offset' in opts ? opts.offset : null;
    if (offset == null) dart.nullFailed(L0, 101, 19, "offset");
    this[pixelsPerSecond$0] = pixelsPerSecond;
    this[confidence$] = confidence;
    this[duration$] = duration;
    this[offset$] = offset;
    if (!(pixelsPerSecond != null)) dart.assertFailed(null, L0, 102, 15, "pixelsPerSecond != null");
    if (!(confidence != null)) dart.assertFailed(null, L0, 103, 15, "confidence != null");
    if (!(duration != null)) dart.assertFailed(null, L0, 104, 15, "duration != null");
    if (!(offset != null)) dart.assertFailed(null, L0, 105, 15, "offset != null");
    ;
  }).prototype = velocity_tracker.VelocityEstimate.prototype;
  dart.addTypeTests(velocity_tracker.VelocityEstimate);
  dart.addTypeCaches(velocity_tracker.VelocityEstimate);
  dart.setLibraryUri(velocity_tracker.VelocityEstimate, L1);
  dart.setFieldSignature(velocity_tracker.VelocityEstimate, () => ({
    __proto__: dart.getFields(velocity_tracker.VelocityEstimate.__proto__),
    pixelsPerSecond: dart.finalFieldType(ui.Offset),
    confidence: dart.finalFieldType(core.double),
    duration: dart.finalFieldType(core.Duration),
    offset: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(velocity_tracker.VelocityEstimate, ['toString']);
  var time$ = dart.privateName(velocity_tracker, "_PointAtTime.time");
  var point$ = dart.privateName(velocity_tracker, "_PointAtTime.point");
  velocity_tracker._PointAtTime = class _PointAtTime extends core.Object {
    get time() {
      return this[time$];
    }
    set time(value) {
      super.time = value;
    }
    get point() {
      return this[point$];
    }
    set point(value) {
      super.point = value;
    }
    toString() {
      return "_PointAtTime(" + dart.str(this.point) + " at " + dart.str(this.time) + ")";
    }
  };
  (velocity_tracker._PointAtTime.new = function(point, time) {
    if (point == null) dart.nullFailed(L0, 129, 27, "point");
    if (time == null) dart.nullFailed(L0, 129, 39, "time");
    this[point$] = point;
    this[time$] = time;
    if (!(point != null)) dart.assertFailed(null, L0, 130, 14, "point != null");
    if (!(time != null)) dart.assertFailed(null, L0, 131, 14, "time != null");
    ;
  }).prototype = velocity_tracker._PointAtTime.prototype;
  dart.addTypeTests(velocity_tracker._PointAtTime);
  dart.addTypeCaches(velocity_tracker._PointAtTime);
  dart.setLibraryUri(velocity_tracker._PointAtTime, L1);
  dart.setFieldSignature(velocity_tracker._PointAtTime, () => ({
    __proto__: dart.getFields(velocity_tracker._PointAtTime.__proto__),
    time: dart.finalFieldType(core.Duration),
    point: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(velocity_tracker._PointAtTime, ['toString']);
  var _name = dart.privateName(ui, "_name");
  var C2;
  var _samples = dart.privateName(velocity_tracker, "_samples");
  var _index = dart.privateName(velocity_tracker, "_index");
  var kind$ = dart.privateName(velocity_tracker, "VelocityTracker.kind");
  velocity_tracker.VelocityTracker = class VelocityTracker extends core.Object {
    get kind() {
      return this[kind$];
    }
    set kind(value) {
      super.kind = value;
    }
    addPosition(time, position) {
      if (time == null) dart.nullFailed(L0, 174, 29, "time");
      if (position == null) dart.nullFailed(L0, 174, 42, "position");
      this[_index] = dart.notNull(this[_index]) + 1;
      if (this[_index] === 20) this[_index] = 0;
      this[_samples][$_set](this[_index], new velocity_tracker._PointAtTime.new(position, time));
    }
    getVelocityEstimate() {
      let x = JSArrayOfdouble().of([]);
      let y = JSArrayOfdouble().of([]);
      let w = JSArrayOfdouble().of([]);
      let time = JSArrayOfdouble().of([]);
      let sampleCount = 0;
      let index = this[_index];
      let newestSample = this[_samples][$_get](index);
      if (newestSample == null) return null;
      let previousSample = newestSample;
      let oldestSample = newestSample;
      do {
        let sample = this[_samples][$_get](index);
        if (sample == null) break;
        let age = newestSample.time['-'](sample.time).inMicroseconds[$toDouble]() / 1000;
        let delta = sample.time['-'](previousSample.time).inMicroseconds[$abs]()[$toDouble]() / 1000;
        previousSample = sample;
        if (age > 100 || delta > 40) break;
        oldestSample = sample;
        let position = sample.point;
        x[$add](position.dx);
        y[$add](position.dy);
        w[$add](1.0);
        time[$add](-age);
        index = dart.notNull(index === 0 ? 20 : index) - 1;
        sampleCount = sampleCount + 1;
      } while (sampleCount < 20);
      if (sampleCount >= 3) {
        let xSolver = new lsq_solver.LeastSquaresSolver.new(time, x, w);
        let xFit = xSolver.solve(2);
        if (xFit != null) {
          let ySolver = new lsq_solver.LeastSquaresSolver.new(time, y, w);
          let yFit = ySolver.solve(2);
          if (yFit != null) {
            return new velocity_tracker.VelocityEstimate.new({pixelsPerSecond: new ui.Offset.new(dart.notNull(xFit.coefficients[$_get](1)) * 1000, dart.notNull(yFit.coefficients[$_get](1)) * 1000), confidence: dart.notNull(xFit.confidence) * dart.notNull(yFit.confidence), duration: newestSample.time['-'](oldestSample.time), offset: newestSample.point['-'](oldestSample.point)});
          }
        }
      }
      return new velocity_tracker.VelocityEstimate.new({pixelsPerSecond: ui.Offset.zero, confidence: 1.0, duration: newestSample.time['-'](oldestSample.time), offset: newestSample.point['-'](oldestSample.point)});
    }
    getVelocity() {
      let estimate = this.getVelocityEstimate();
      if (estimate == null || dart.equals(estimate.pixelsPerSecond, ui.Offset.zero)) return velocity_tracker.Velocity.zero;
      return new velocity_tracker.Velocity.new({pixelsPerSecond: estimate.pixelsPerSecond});
    }
  };
  (velocity_tracker.VelocityTracker.new = function(kind = C2 || CT.C2) {
    if (kind == null) dart.nullFailed(L0, 156, 25, "kind");
    this[_samples] = ListOf_PointAtTimeN().filled(20, null, {growable: false});
    this[_index] = 0;
    this[kind$] = kind;
    ;
  }).prototype = velocity_tracker.VelocityTracker.prototype;
  (velocity_tracker.VelocityTracker.withKind = function(kind) {
    if (kind == null) dart.nullFailed(L0, 159, 33, "kind");
    this[_samples] = ListOf_PointAtTimeN().filled(20, null, {growable: false});
    this[_index] = 0;
    this[kind$] = kind;
    ;
  }).prototype = velocity_tracker.VelocityTracker.prototype;
  dart.addTypeTests(velocity_tracker.VelocityTracker);
  dart.addTypeCaches(velocity_tracker.VelocityTracker);
  dart.setMethodSignature(velocity_tracker.VelocityTracker, () => ({
    __proto__: dart.getMethods(velocity_tracker.VelocityTracker.__proto__),
    addPosition: dart.fnType(dart.void, [core.Duration, ui.Offset]),
    getVelocityEstimate: dart.fnType(dart.nullable(velocity_tracker.VelocityEstimate), []),
    getVelocity: dart.fnType(velocity_tracker.Velocity, [])
  }));
  dart.setLibraryUri(velocity_tracker.VelocityTracker, L1);
  dart.setFieldSignature(velocity_tracker.VelocityTracker, () => ({
    __proto__: dart.getFields(velocity_tracker.VelocityTracker.__proto__),
    kind: dart.finalFieldType(ui.PointerDeviceKind),
    [_samples]: dart.finalFieldType(core.List$(dart.nullable(velocity_tracker._PointAtTime))),
    [_index]: dart.fieldType(core.int)
  }));
  dart.defineLazy(velocity_tracker.VelocityTracker, {
    /*velocity_tracker.VelocityTracker._assumePointerMoveStoppedMilliseconds*/get _assumePointerMoveStoppedMilliseconds() {
      return 40;
    },
    /*velocity_tracker.VelocityTracker._historySize*/get _historySize() {
      return 20;
    },
    /*velocity_tracker.VelocityTracker._horizonMilliseconds*/get _horizonMilliseconds() {
      return 100;
    },
    /*velocity_tracker.VelocityTracker._minSampleSize*/get _minSampleSize() {
      return 3;
    }
  }, false);
  var _touchSamples = dart.privateName(velocity_tracker, "_touchSamples");
  var _previousVelocityAt = dart.privateName(velocity_tracker, "_previousVelocityAt");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C4;
  var C3;
  velocity_tracker.IOSScrollViewFlingVelocityTracker = class IOSScrollViewFlingVelocityTracker extends velocity_tracker.VelocityTracker {
    addPosition(time, position) {
      if (time == null) dart.nullFailed(L0, 302, 29, "time");
      if (position == null) dart.nullFailed(L0, 302, 42, "position");
      if (!dart.test(dart.fn(() => {
        let previousPoint = this[_touchSamples][$_get](this[_index]);
        if (previousPoint == null || dart.test(previousPoint.time['<='](time))) return true;
        dart.throw(assertions.FlutterError.new("The position being added (" + dart.str(position) + ") has a smaller timestamp (" + dart.str(time) + ")" + "than its predecessor: " + dart.str(previousPoint) + "."));
      }, VoidTobool())())) dart.assertFailed(null, L0, 303, 12, "() {\n      final _PointAtTime? previousPoint = _touchSamples[_index];\n      if (previousPoint == null || previousPoint.time <= time)\n        return true;\n      throw FlutterError(\n        'The position being added ($position) has a smaller timestamp ($time)'\n        'than its predecessor: $previousPoint.'\n      );\n    }()");
      this[_index] = (dart.notNull(this[_index]) + 1)[$modulo](20);
      this[_touchSamples][$_set](this[_index], new velocity_tracker._PointAtTime.new(position, time));
    }
    [_previousVelocityAt](index) {
      if (index == null) dart.nullFailed(L0, 319, 34, "index");
      let endIndex = (dart.notNull(this[_index]) + dart.notNull(index))[$modulo](20);
      let startIndex = (dart.notNull(this[_index]) + dart.notNull(index) - 1)[$modulo](20);
      let end = this[_touchSamples][$_get](endIndex);
      let start = this[_touchSamples][$_get](startIndex);
      if (end == null || start == null) {
        return ui.Offset.zero;
      }
      let dt = end.time['-'](start.time).inMicroseconds;
      if (!(dart.notNull(dt) >= 0)) dart.assertFailed(null, L0, 330, 12, "dt >= 0");
      return dart.notNull(dt) > 0 ? end.point['-'](start.point)['*'](1000.0)['/'](dt[$toDouble]() / 1000) : ui.Offset.zero;
    }
    getVelocityEstimate() {
      let estimatedVelocity = this[_previousVelocityAt](-2)['*'](0.6)['+'](this[_previousVelocityAt](-1)['*'](0.35))['+'](this[_previousVelocityAt](0)['*'](0.05));
      let newestSample = this[_touchSamples][$_get](this[_index]);
      let oldestNonNullSample = null;
      for (let i = 1; i <= 20; i = i + 1) {
        oldestNonNullSample = this[_touchSamples][$_get]((dart.notNull(this[_index]) + i)[$modulo](20));
        if (oldestNonNullSample != null) break;
      }
      if (oldestNonNullSample == null || newestSample == null) {
        if (!false) dart.assertFailed("There must be at least 1 point in _touchSamples: " + dart.str(this[_touchSamples]), L0, 360, 14, "false");
        return C3 || CT.C3;
      } else {
        return new velocity_tracker.VelocityEstimate.new({pixelsPerSecond: estimatedVelocity, confidence: 1.0, duration: newestSample.time['-'](oldestNonNullSample.time), offset: newestSample.point['-'](oldestNonNullSample.point)});
      }
    }
  };
  (velocity_tracker.IOSScrollViewFlingVelocityTracker.new = function(kind) {
    if (kind == null) dart.nullFailed(L0, 291, 55, "kind");
    this[_touchSamples] = ListOf_PointAtTimeN().filled(20, null, {growable: false});
    velocity_tracker.IOSScrollViewFlingVelocityTracker.__proto__.withKind.call(this, kind);
    ;
  }).prototype = velocity_tracker.IOSScrollViewFlingVelocityTracker.prototype;
  dart.addTypeTests(velocity_tracker.IOSScrollViewFlingVelocityTracker);
  dart.addTypeCaches(velocity_tracker.IOSScrollViewFlingVelocityTracker);
  dart.setMethodSignature(velocity_tracker.IOSScrollViewFlingVelocityTracker, () => ({
    __proto__: dart.getMethods(velocity_tracker.IOSScrollViewFlingVelocityTracker.__proto__),
    [_previousVelocityAt]: dart.fnType(ui.Offset, [core.int]),
    getVelocityEstimate: dart.fnType(velocity_tracker.VelocityEstimate, [])
  }));
  dart.setLibraryUri(velocity_tracker.IOSScrollViewFlingVelocityTracker, L1);
  dart.setFieldSignature(velocity_tracker.IOSScrollViewFlingVelocityTracker, () => ({
    __proto__: dart.getFields(velocity_tracker.IOSScrollViewFlingVelocityTracker.__proto__),
    [_touchSamples]: dart.finalFieldType(core.List$(dart.nullable(velocity_tracker._PointAtTime)))
  }));
  dart.defineLazy(velocity_tracker.IOSScrollViewFlingVelocityTracker, {
    /*velocity_tracker.IOSScrollViewFlingVelocityTracker._sampleSize*/get _sampleSize() {
      return 20;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/gestures/velocity_tracker.dart", {
    "package:flutter/src/gestures/velocity_tracker.dart": velocity_tracker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["velocity_tracker.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/gestures/velocity_tracker.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__velocity_tracker: velocity_tracker
  };
}));

//# sourceMappingURL=velocity_tracker.dart.lib.js.map
