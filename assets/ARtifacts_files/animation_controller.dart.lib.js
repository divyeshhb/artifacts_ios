define(['dart_sdk', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/semantics/binding.dart', 'packages/flutter/src/scheduler/ticker.dart', 'packages/flutter/src/physics/spring_simulation.dart', 'packages/flutter/src/physics/simulation.dart', 'packages/flutter/src/physics/tolerance.dart'], (function load__packages__flutter__src__animation__animation_controller_dart(dart_sdk, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__semantics__binding$46dart, packages__flutter__src__scheduler__ticker$46dart, packages__flutter__src__physics__spring_simulation$46dart, packages__flutter__src__physics__simulation$46dart, packages__flutter__src__physics__tolerance$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const listener_helpers = packages__flutter__src__animation__listener_helpers$46dart.src__animation__listener_helpers;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const binding = packages__flutter__src__semantics__binding$46dart.src__semantics__binding;
  const ticker = packages__flutter__src__scheduler__ticker$46dart.src__scheduler__ticker;
  const spring_simulation = packages__flutter__src__physics__spring_simulation$46dart.src__physics__spring_simulation;
  const simulation = packages__flutter__src__physics__simulation$46dart.src__physics__simulation;
  const tolerance = packages__flutter__src__physics__tolerance$46dart.src__physics__tolerance;
  var animation_controller = Object.create(dart.library);
  var $toDouble = dartx.toDouble;
  var $clamp = dartx.clamp;
  var $isFinite = dartx.isFinite;
  var $abs = dartx.abs;
  var $runtimeType = dartx.runtimeType;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $modulo = dartx['%'];
  var $isOdd = dartx.isOdd;
  var $truncate = dartx.truncate;
  dart._checkModuleNullSafetyMode(false);
  var _AnimationDirectionL = () => (_AnimationDirectionL = dart.constFn(dart.legacy(animation_controller._AnimationDirection)))();
  var AnimationBehaviorL = () => (AnimationBehaviorL = dart.constFn(dart.legacy(animation_controller.AnimationBehavior)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var DiagnosticsPropertyOfAnimationController = () => (DiagnosticsPropertyOfAnimationController = dart.constFn(diagnostics.DiagnosticsProperty$(animation_controller.AnimationController)))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/animation/animation_controller.dart";
  var L1 = "package:flutter/src/animation/animation_controller.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: animation_controller._AnimationDirection.prototype,
        [_name$]: "_AnimationDirection.forward",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: animation_controller._AnimationDirection.prototype,
        [_name$]: "_AnimationDirection.reverse",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], _AnimationDirectionL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: animation_controller.AnimationBehavior.prototype,
        [_name$]: "AnimationBehavior.normal",
        index: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: animation_controller.AnimationBehavior.prototype,
        [_name$]: "AnimationBehavior.preserve",
        index: 1
      });
    },
    get C5() {
      return C5 = dart.constList([C3 || CT.C3, C4 || CT.C4], AnimationBehaviorL());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: tolerance.Tolerance.prototype,
        [Tolerance_velocity]: 1 / 0,
        [Tolerance_time]: 0.001,
        [Tolerance_distance]: 0.01
      });
    }
  }, false);
  var _name$ = dart.privateName(animation_controller, "_name");
  var C0;
  var C1;
  var C2;
  animation_controller._AnimationDirection = class _AnimationDirection extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (animation_controller._AnimationDirection.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 25, 6, "index");
    if (_name == null) dart.nullFailed(L0, 25, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = animation_controller._AnimationDirection.prototype;
  dart.addTypeTests(animation_controller._AnimationDirection);
  dart.addTypeCaches(animation_controller._AnimationDirection);
  dart.setLibraryUri(animation_controller._AnimationDirection, L1);
  dart.setFieldSignature(animation_controller._AnimationDirection, () => ({
    __proto__: dart.getFields(animation_controller._AnimationDirection.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(animation_controller._AnimationDirection, ['toString']);
  animation_controller._AnimationDirection.forward = C0 || CT.C0;
  animation_controller._AnimationDirection.reverse = C1 || CT.C1;
  animation_controller._AnimationDirection.values = C2 || CT.C2;
  var C3;
  var C4;
  var C5;
  animation_controller.AnimationBehavior = class AnimationBehavior extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (animation_controller.AnimationBehavior.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 56, 6, "index");
    if (_name == null) dart.nullFailed(L0, 56, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = animation_controller.AnimationBehavior.prototype;
  dart.addTypeTests(animation_controller.AnimationBehavior);
  dart.addTypeCaches(animation_controller.AnimationBehavior);
  dart.setLibraryUri(animation_controller.AnimationBehavior, L1);
  dart.setFieldSignature(animation_controller.AnimationBehavior, () => ({
    __proto__: dart.getFields(animation_controller.AnimationBehavior.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(animation_controller.AnimationBehavior, ['toString']);
  animation_controller.AnimationBehavior.normal = C3 || CT.C3;
  animation_controller.AnimationBehavior.preserve = C4 || CT.C4;
  animation_controller.AnimationBehavior.values = C5 || CT.C5;
  var _ticker = dart.privateName(animation_controller, "_ticker");
  var _simulation = dart.privateName(animation_controller, "_simulation");
  var __AnimationController__value = dart.privateName(animation_controller, "_#AnimationController#_value");
  var __AnimationController__value_isSet = dart.privateName(animation_controller, "_#AnimationController#_value#isSet");
  var _lastElapsedDuration = dart.privateName(animation_controller, "_lastElapsedDuration");
  var __AnimationController__status = dart.privateName(animation_controller, "_#AnimationController#_status");
  var __AnimationController__status_isSet = dart.privateName(animation_controller, "_#AnimationController#_status#isSet");
  var _lastReportedStatus = dart.privateName(animation_controller, "_lastReportedStatus");
  var _direction = dart.privateName(animation_controller, "_direction");
  var _tick = dart.privateName(animation_controller, "_tick");
  var _internalSetValue = dart.privateName(animation_controller, "_internalSetValue");
  var _value = dart.privateName(animation_controller, "_value");
  var _checkStatusChanged = dart.privateName(animation_controller, "_checkStatusChanged");
  var _status = dart.privateName(animation_controller, "_status");
  var _animateToInternal = dart.privateName(animation_controller, "_animateToInternal");
  var C6;
  var _startSimulation = dart.privateName(animation_controller, "_startSimulation");
  var _directionSetter = dart.privateName(animation_controller, "_directionSetter");
  var lowerBound$ = dart.privateName(animation_controller, "AnimationController.lowerBound");
  var upperBound$ = dart.privateName(animation_controller, "AnimationController.upperBound");
  var debugLabel$ = dart.privateName(animation_controller, "AnimationController.debugLabel");
  var animationBehavior$ = dart.privateName(animation_controller, "AnimationController.animationBehavior");
  var duration$ = dart.privateName(animation_controller, "AnimationController.duration");
  var reverseDuration$ = dart.privateName(animation_controller, "AnimationController.reverseDuration");
  const Animation_AnimationEagerListenerMixin$36 = class Animation_AnimationEagerListenerMixin extends animation.Animation$(core.double) {};
  (Animation_AnimationEagerListenerMixin$36.new = function() {
    Animation_AnimationEagerListenerMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationEagerListenerMixin$36.prototype;
  dart.applyMixin(Animation_AnimationEagerListenerMixin$36, listener_helpers.AnimationEagerListenerMixin);
  const Animation_AnimationLocalListenersMixin$36 = class Animation_AnimationLocalListenersMixin extends Animation_AnimationEagerListenerMixin$36 {};
  (Animation_AnimationLocalListenersMixin$36.new = function() {
    listener_helpers.AnimationLocalListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalListenersMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalListenersMixin$36.prototype;
  dart.applyMixin(Animation_AnimationLocalListenersMixin$36, listener_helpers.AnimationLocalListenersMixin);
  const Animation_AnimationLocalStatusListenersMixin$36 = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLocalListenersMixin$36 {};
  (Animation_AnimationLocalStatusListenersMixin$36.new = function() {
    listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalStatusListenersMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$36.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$36, listener_helpers.AnimationLocalStatusListenersMixin);
  animation_controller.AnimationController = class AnimationController extends Animation_AnimationLocalStatusListenersMixin$36 {
    get lowerBound() {
      return this[lowerBound$];
    }
    set lowerBound(value) {
      super.lowerBound = value;
    }
    get upperBound() {
      return this[upperBound$];
    }
    set upperBound(value) {
      super.upperBound = value;
    }
    get debugLabel() {
      return this[debugLabel$];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    get animationBehavior() {
      return this[animationBehavior$];
    }
    set animationBehavior(value) {
      super.animationBehavior = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      this[duration$] = value;
    }
    get reverseDuration() {
      return this[reverseDuration$];
    }
    set reverseDuration(value) {
      this[reverseDuration$] = value;
    }
    get view() {
      return this;
    }
    resync(vsync) {
      if (vsync == null) dart.nullFailed(L0, 322, 30, "vsync");
      let oldTicker = dart.nullCheck(this[_ticker]);
      this[_ticker] = vsync.createTicker(dart.bind(this, _tick));
      dart.nullCheck(this[_ticker]).absorbTicker(oldTicker);
    }
    get value() {
      return this[_value];
    }
    get [_value]() {
      let t0;
      return dart.test(this[__AnimationController__value_isSet]) ? (t0 = this[__AnimationController__value], t0) : dart.throw(new _internal.LateError.fieldNI("_value"));
    }
    set [_value](t0) {
      if (t0 == null) dart.nullFailed(L0, 340, 15, "null");
      this[__AnimationController__value_isSet] = true;
      this[__AnimationController__value] = t0;
    }
    set value(newValue) {
      if (newValue == null) dart.nullFailed(L0, 362, 20, "newValue");
      if (!(newValue != null)) dart.assertFailed(null, L0, 363, 12, "newValue != null");
      this.stop();
      this[_internalSetValue](newValue);
      this.notifyListeners();
      this[_checkStatusChanged]();
    }
    reset() {
      this.value = this.lowerBound;
    }
    get velocity() {
      if (!dart.test(this.isAnimating)) return 0.0;
      return dart.nullCheck(this[_simulation]).dx(dart.nullCheck(this.lastElapsedDuration).inMicroseconds[$toDouble]() / 1000000);
    }
    [_internalSetValue](newValue) {
      if (newValue == null) dart.nullFailed(L0, 398, 33, "newValue");
      this[_value] = newValue[$clamp](this.lowerBound, this.upperBound);
      if (this[_value] == this.lowerBound) {
        this[_status] = animation.AnimationStatus.dismissed;
      } else if (this[_value] == this.upperBound) {
        this[_status] = animation.AnimationStatus.completed;
      } else {
        this[_status] = dart.equals(this[_direction], animation_controller._AnimationDirection.forward) ? animation.AnimationStatus.forward : animation.AnimationStatus.reverse;
      }
    }
    get lastElapsedDuration() {
      return this[_lastElapsedDuration];
    }
    get isAnimating() {
      return this[_ticker] != null && dart.test(dart.nullCheck(this[_ticker]).isActive);
    }
    get status() {
      return this[_status];
    }
    get [_status]() {
      let t1;
      return dart.test(this[__AnimationController__status_isSet]) ? (t1 = this[__AnimationController__status], t1) : dart.throw(new _internal.LateError.fieldNI("_status"));
    }
    set [_status](t1) {
      if (t1 == null) dart.nullFailed(L0, 430, 24, "null");
      this[__AnimationController__status_isSet] = true;
      this[__AnimationController__status] = t1;
    }
    forward(opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      if (!dart.test(dart.fn(() => {
        if (this.duration == null) {
          dart.throw(assertions.FlutterError.new("AnimationController.forward() called with no default duration.\n" + "The \"duration\" property should be set, either in the constructor or later, before " + "calling the forward() function."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 444, 12, "() {\n      if (duration == null) {\n        throw FlutterError(\n          'AnimationController.forward() called with no default duration.\\n'\n          'The \"duration\" property should be set, either in the constructor or later, before '\n          'calling the forward() function.'\n        );\n      }\n      return true;\n    }()");
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.forward() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", L0, 455, 7, "_ticker != null");
      this[_direction] = animation_controller._AnimationDirection.forward;
      if (from != null) this.value = from;
      return this[_animateToInternal](this.upperBound);
    }
    reverse(opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      if (!dart.test(dart.fn(() => {
        if (this.duration == null && this.reverseDuration == null) {
          dart.throw(assertions.FlutterError.new("AnimationController.reverse() called with no default duration or reverseDuration.\n" + "The \"duration\" or \"reverseDuration\" property should be set, either in the constructor or later, before " + "calling the reverse() function."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 477, 12, "() {\n      if (duration == null && reverseDuration == null) {\n        throw FlutterError(\n          'AnimationController.reverse() called with no default duration or reverseDuration.\\n'\n          'The \"duration\" or \"reverseDuration\" property should be set, either in the constructor or later, before '\n          'calling the reverse() function.'\n        );\n      }\n      return true;\n    }()");
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.reverse() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", L0, 488, 7, "_ticker != null");
      this[_direction] = animation_controller._AnimationDirection.reverse;
      if (from != null) this.value = from;
      return this[_animateToInternal](this.lowerBound);
    }
    animateTo(target, opts) {
      if (target == null) dart.nullFailed(L0, 510, 33, "target");
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : C6 || CT.C6;
      if (curve == null) dart.nullFailed(L0, 510, 69, "curve");
      if (!dart.test(dart.fn(() => {
        if (this.duration == null && duration == null) {
          dart.throw(assertions.FlutterError.new("AnimationController.animateTo() called with no explicit duration and no default duration.\n" + "Either the \"duration\" argument to the animateTo() method should be provided, or the " + "\"duration\" property should be set, either in the constructor or later, before " + "calling the animateTo() function."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 511, 12, "() {\n      if (this.duration == null && duration == null) {\n        throw FlutterError(\n          'AnimationController.animateTo() called with no explicit duration and no default duration.\\n'\n          'Either the \"duration\" argument to the animateTo() method should be provided, or the '\n          '\"duration\" property should be set, either in the constructor or later, before '\n          'calling the animateTo() function.'\n        );\n      }\n      return true;\n    }()");
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.animateTo() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", L0, 523, 7, "_ticker != null");
      this[_direction] = animation_controller._AnimationDirection.forward;
      return this[_animateToInternal](target, {duration: duration, curve: curve});
    }
    animateBack(target, opts) {
      if (target == null) dart.nullFailed(L0, 543, 35, "target");
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : C6 || CT.C6;
      if (curve == null) dart.nullFailed(L0, 543, 71, "curve");
      if (!dart.test(dart.fn(() => {
        if (this.duration == null && this.reverseDuration == null && duration == null) {
          dart.throw(assertions.FlutterError.new("AnimationController.animateBack() called with no explicit duration and no default duration or reverseDuration.\n" + "Either the \"duration\" argument to the animateBack() method should be provided, or the " + "\"duration\" or \"reverseDuration\" property should be set, either in the constructor or later, before " + "calling the animateBack() function."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 544, 12, "() {\n      if (this.duration == null && reverseDuration == null && duration == null) {\n        throw FlutterError(\n          'AnimationController.animateBack() called with no explicit duration and no default duration or reverseDuration.\\n'\n          'Either the \"duration\" argument to the animateBack() method should be provided, or the '\n          '\"duration\" or \"reverseDuration\" property should be set, either in the constructor or later, before '\n          'calling the animateBack() function.'\n        );\n      }\n      return true;\n    }()");
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.animateBack() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", L0, 556, 7, "_ticker != null");
      this[_direction] = animation_controller._AnimationDirection.reverse;
      return this[_animateToInternal](target, {duration: duration, curve: curve});
    }
    [_animateToInternal](target, opts) {
      if (target == null) dart.nullFailed(L0, 564, 42, "target");
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : C6 || CT.C6;
      if (curve == null) dart.nullFailed(L0, 564, 78, "curve");
      let scale = 1.0;
      if (dart.test(dart.nullCheck(binding.SemanticsBinding.instance).disableAnimations)) {
        switch (this.animationBehavior) {
          case C3 || CT.C3:
          {
            scale = 0.05;
            break;
          }
          case C4 || CT.C4:
          {
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      let simulationDuration = duration;
      if (simulationDuration == null) {
        if (!!(this.duration == null && dart.equals(this[_direction], animation_controller._AnimationDirection.forward))) dart.assertFailed(null, L0, 580, 14, "!(this.duration == null && _direction == _AnimationDirection.forward)");
        if (!!(this.duration == null && dart.equals(this[_direction], animation_controller._AnimationDirection.reverse) && this.reverseDuration == null)) dart.assertFailed(null, L0, 581, 14, "!(this.duration == null && _direction == _AnimationDirection.reverse && reverseDuration == null)");
        let range = dart.notNull(this.upperBound) - dart.notNull(this.lowerBound);
        let remainingFraction = range[$isFinite] ? (dart.notNull(target) - dart.notNull(this[_value]))[$abs]() / range : 1.0;
        let directionDuration = dart.equals(this[_direction], animation_controller._AnimationDirection.reverse) && this.reverseDuration != null ? dart.nullCheck(this.reverseDuration) : dart.nullCheck(this.duration);
        simulationDuration = directionDuration['*'](remainingFraction);
      } else if (target == this.value) {
        simulationDuration = core.Duration.zero;
      }
      this.stop();
      if (dart.equals(simulationDuration, core.Duration.zero)) {
        if (this.value != target) {
          this[_value] = target[$clamp](this.lowerBound, this.upperBound);
          this.notifyListeners();
        }
        this[_status] = dart.equals(this[_direction], animation_controller._AnimationDirection.forward) ? animation.AnimationStatus.completed : animation.AnimationStatus.dismissed;
        this[_checkStatusChanged]();
        return new ticker.TickerFuture.complete();
      }
      if (!dart.test(simulationDuration['>'](core.Duration.zero))) dart.assertFailed(null, L0, 605, 12, "simulationDuration > Duration.zero");
      if (!!dart.test(this.isAnimating)) dart.assertFailed(null, L0, 606, 12, "!isAnimating");
      return this[_startSimulation](new animation_controller._InterpolationSimulation.new(this[_value], target, simulationDuration, curve, scale));
    }
    repeat(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : false;
      if (reverse == null) dart.nullFailed(L0, 631, 56, "reverse");
      let period = opts && 'period' in opts ? opts.period : null;
      min == null ? min = this.lowerBound : null;
      max == null ? max = this.upperBound : null;
      period == null ? period = this.duration : null;
      if (!dart.test(dart.fn(() => {
        if (period == null) {
          dart.throw(assertions.FlutterError.new("AnimationController.repeat() called without an explicit period and with no default Duration.\n" + "Either the \"period\" argument to the repeat() method should be provided, or the " + "\"duration\" property should be set, either in the constructor or later, before " + "calling the repeat() function."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 635, 12, "() {\n      if (period == null) {\n        throw FlutterError(\n          'AnimationController.repeat() called without an explicit period and with no default Duration.\\n'\n          'Either the \"period\" argument to the repeat() method should be provided, or the '\n          '\"duration\" property should be set, either in the constructor or later, before '\n          'calling the repeat() function.'\n        );\n      }\n      return true;\n    }()");
      if (!(dart.notNull(max) >= dart.notNull(min))) dart.assertFailed(null, L0, 646, 12, "max >= min");
      if (!(dart.notNull(max) <= dart.notNull(this.upperBound) && dart.notNull(min) >= dart.notNull(this.lowerBound))) dart.assertFailed(null, L0, 647, 12, "max <= upperBound && min >= lowerBound");
      if (!(reverse != null)) dart.assertFailed(null, L0, 648, 12, "reverse != null");
      this.stop();
      return this[_startSimulation](new animation_controller._RepeatingSimulation.new(this[_value], min, max, reverse, dart.nullCheck(period), dart.bind(this, _directionSetter)));
    }
    [_directionSetter](direction) {
      if (direction == null) dart.nullFailed(L0, 653, 45, "direction");
      this[_direction] = direction;
      this[_status] = dart.equals(this[_direction], animation_controller._AnimationDirection.forward) ? animation.AnimationStatus.forward : animation.AnimationStatus.reverse;
      this[_checkStatusChanged]();
    }
    fling(opts) {
      let t2, t2$;
      let velocity = opts && 'velocity' in opts ? opts.velocity : 1;
      if (velocity == null) dart.nullFailed(L0, 680, 31, "velocity");
      let springDescription = opts && 'springDescription' in opts ? opts.springDescription : null;
      let animationBehavior = opts && 'animationBehavior' in opts ? opts.animationBehavior : null;
      springDescription == null ? springDescription = animation_controller._kFlingSpringDescription : null;
      this[_direction] = dart.notNull(velocity) < 0.0 ? animation_controller._AnimationDirection.reverse : animation_controller._AnimationDirection.forward;
      let target = dart.notNull(velocity) < 0.0 ? dart.notNull(this.lowerBound) - dart.notNull(animation_controller._kFlingTolerance.distance) : dart.notNull(this.upperBound) + dart.notNull(animation_controller._kFlingTolerance.distance);
      let scale = 1.0;
      let behavior = (t2 = animationBehavior, t2 == null ? this.animationBehavior : t2);
      if (dart.test(dart.nullCheck(binding.SemanticsBinding.instance).disableAnimations)) {
        switch (behavior) {
          case C3 || CT.C3:
          {
            scale = 200.0;
            break;
          }
          case C4 || CT.C4:
          {
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      let simulation = (t2$ = new spring_simulation.SpringSimulation.new(springDescription, this.value, target, dart.notNull(velocity) * scale), (() => {
        t2$.tolerance = animation_controller._kFlingTolerance;
        return t2$;
      })());
      if (!!dart.equals(simulation.type, spring_simulation.SpringType.underDamped)) dart.assertFailed("The resulting spring simulation is of type SpringType.underDamped.\n" + "This can lead to unexpected look of the animation, please adjust the springDescription parameter", L0, 701, 7, "simulation.type != SpringType.underDamped");
      this.stop();
      return this[_startSimulation](simulation);
    }
    animateWith(simulation) {
      if (simulation == null) dart.nullFailed(L0, 723, 39, "simulation");
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.animateWith() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", L0, 725, 7, "_ticker != null");
      this.stop();
      this[_direction] = animation_controller._AnimationDirection.forward;
      return this[_startSimulation](simulation);
    }
    [_startSimulation](simulation) {
      if (simulation == null) dart.nullFailed(L0, 734, 44, "simulation");
      if (!(simulation != null)) dart.assertFailed(null, L0, 735, 12, "simulation != null");
      if (!!dart.test(this.isAnimating)) dart.assertFailed(null, L0, 736, 12, "!isAnimating");
      this[_simulation] = simulation;
      this[_lastElapsedDuration] = core.Duration.zero;
      this[_value] = simulation.x(0.0)[$clamp](this.lowerBound, this.upperBound);
      let result = dart.nullCheck(this[_ticker]).start();
      this[_status] = dart.equals(this[_direction], animation_controller._AnimationDirection.forward) ? animation.AnimationStatus.forward : animation.AnimationStatus.reverse;
      this[_checkStatusChanged]();
      return result;
    }
    stop(opts) {
      let canceled = opts && 'canceled' in opts ? opts.canceled : true;
      if (canceled == null) dart.nullFailed(L0, 765, 20, "canceled");
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.stop() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", L0, 767, 7, "_ticker != null");
      this[_simulation] = null;
      this[_lastElapsedDuration] = null;
      dart.nullCheck(this[_ticker]).stop({canceled: canceled});
    }
    dispose() {
      if (!dart.test(dart.fn(() => {
        if (this[_ticker] == null) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("AnimationController.dispose() called more than once."), new assertions.ErrorDescription.new("A given " + dart.str(this[$runtimeType]) + " cannot be disposed more than once.\n"), new (DiagnosticsPropertyOfAnimationController()).new("The following " + dart.str(this[$runtimeType]) + " object was disposed multiple times", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 784, 12, "() {\n      if (_ticker == null) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('AnimationController.dispose() called more than once.'),\n          ErrorDescription('A given $runtimeType cannot be disposed more than once.\\n'),\n          DiagnosticsProperty<AnimationController>(\n            'The following $runtimeType object was disposed multiple times',\n            this,\n            style: DiagnosticsTreeStyle.errorProperty,\n          ),\n        ]);\n      }\n      return true;\n    }()");
      dart.nullCheck(this[_ticker]).dispose();
      this[_ticker] = null;
      super.dispose();
    }
    [_checkStatusChanged]() {
      let newStatus = this.status;
      if (!dart.equals(this[_lastReportedStatus], newStatus)) {
        this[_lastReportedStatus] = newStatus;
        this.notifyStatusListeners(newStatus);
      }
    }
    [_tick](elapsed) {
      if (elapsed == null) dart.nullFailed(L0, 812, 23, "elapsed");
      this[_lastElapsedDuration] = elapsed;
      let elapsedInSeconds = elapsed.inMicroseconds[$toDouble]() / 1000000;
      if (!(elapsedInSeconds >= 0.0)) dart.assertFailed(null, L0, 815, 12, "elapsedInSeconds >= 0.0");
      this[_value] = dart.nullCheck(this[_simulation]).x(elapsedInSeconds)[$clamp](this.lowerBound, this.upperBound);
      if (dart.test(dart.nullCheck(this[_simulation]).isDone(elapsedInSeconds))) {
        this[_status] = dart.equals(this[_direction], animation_controller._AnimationDirection.forward) ? animation.AnimationStatus.completed : animation.AnimationStatus.dismissed;
        this.stop({canceled: false});
      }
      this.notifyListeners();
      this[_checkStatusChanged]();
    }
    toStringDetails() {
      let paused = dart.test(this.isAnimating) ? "" : "; paused";
      let ticker = this[_ticker] == null ? "; DISPOSED" : dart.test(dart.nullCheck(this[_ticker]).muted) ? "; silenced" : "";
      let label = this.debugLabel == null ? "" : "; for " + dart.str(this.debugLabel);
      let more = dart.str(super.toStringDetails()) + " " + this.value[$toStringAsFixed](3);
      return more + paused + ticker + label;
    }
  };
  (animation_controller.AnimationController.new = function(opts) {
    let t0;
    let value = opts && 'value' in opts ? opts.value : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let reverseDuration = opts && 'reverseDuration' in opts ? opts.reverseDuration : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let lowerBound = opts && 'lowerBound' in opts ? opts.lowerBound : 0;
    if (lowerBound == null) dart.nullFailed(L0, 238, 10, "lowerBound");
    let upperBound = opts && 'upperBound' in opts ? opts.upperBound : 1;
    if (upperBound == null) dart.nullFailed(L0, 239, 10, "upperBound");
    let animationBehavior = opts && 'animationBehavior' in opts ? opts.animationBehavior : C3 || CT.C3;
    if (animationBehavior == null) dart.nullFailed(L0, 240, 10, "animationBehavior");
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    if (vsync == null) dart.nullFailed(L0, 241, 29, "vsync");
    this[_ticker] = null;
    this[_simulation] = null;
    this[__AnimationController__value] = null;
    this[__AnimationController__value_isSet] = false;
    this[_lastElapsedDuration] = null;
    this[__AnimationController__status] = null;
    this[__AnimationController__status_isSet] = false;
    this[_lastReportedStatus] = animation.AnimationStatus.dismissed;
    this[duration$] = duration;
    this[reverseDuration$] = reverseDuration;
    this[debugLabel$] = debugLabel;
    this[lowerBound$] = lowerBound;
    this[upperBound$] = upperBound;
    this[animationBehavior$] = animationBehavior;
    if (!(lowerBound != null)) dart.assertFailed(null, L0, 242, 15, "lowerBound != null");
    if (!(upperBound != null)) dart.assertFailed(null, L0, 243, 15, "upperBound != null");
    if (!(dart.notNull(upperBound) >= dart.notNull(lowerBound))) dart.assertFailed(null, L0, 244, 15, "upperBound >= lowerBound");
    if (!(vsync != null)) dart.assertFailed(null, L0, 245, 15, "vsync != null");
    this[_direction] = animation_controller._AnimationDirection.forward;
    animation_controller.AnimationController.__proto__.new.call(this);
    this[_ticker] = vsync.createTicker(dart.bind(this, _tick));
    this[_internalSetValue]((t0 = value, t0 == null ? this.lowerBound : t0));
  }).prototype = animation_controller.AnimationController.prototype;
  (animation_controller.AnimationController.unbounded = function(opts) {
    let value = opts && 'value' in opts ? opts.value : 0;
    if (value == null) dart.nullFailed(L0, 269, 12, "value");
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let reverseDuration = opts && 'reverseDuration' in opts ? opts.reverseDuration : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    if (vsync == null) dart.nullFailed(L0, 273, 29, "vsync");
    let animationBehavior = opts && 'animationBehavior' in opts ? opts.animationBehavior : C4 || CT.C4;
    if (animationBehavior == null) dart.nullFailed(L0, 274, 10, "animationBehavior");
    this[_ticker] = null;
    this[_simulation] = null;
    this[__AnimationController__value] = null;
    this[__AnimationController__value_isSet] = false;
    this[_lastElapsedDuration] = null;
    this[__AnimationController__status] = null;
    this[__AnimationController__status_isSet] = false;
    this[_lastReportedStatus] = animation.AnimationStatus.dismissed;
    this[duration$] = duration;
    this[reverseDuration$] = reverseDuration;
    this[debugLabel$] = debugLabel;
    this[animationBehavior$] = animationBehavior;
    if (!(value != null)) dart.assertFailed(null, L0, 275, 15, "value != null");
    if (!(vsync != null)) dart.assertFailed(null, L0, 276, 15, "vsync != null");
    this[lowerBound$] = -1 / 0;
    this[upperBound$] = 1 / 0;
    this[_direction] = animation_controller._AnimationDirection.forward;
    animation_controller.AnimationController.__proto__.new.call(this);
    this[_ticker] = vsync.createTicker(dart.bind(this, _tick));
    this[_internalSetValue](value);
  }).prototype = animation_controller.AnimationController.prototype;
  dart.addTypeTests(animation_controller.AnimationController);
  dart.addTypeCaches(animation_controller.AnimationController);
  dart.setMethodSignature(animation_controller.AnimationController, () => ({
    __proto__: dart.getMethods(animation_controller.AnimationController.__proto__),
    resync: dart.fnType(dart.void, [ticker.TickerProvider]),
    reset: dart.fnType(dart.void, []),
    [_internalSetValue]: dart.fnType(dart.void, [core.double]),
    forward: dart.fnType(ticker.TickerFuture, [], {from: dart.nullable(core.double)}, {}),
    reverse: dart.fnType(ticker.TickerFuture, [], {from: dart.nullable(core.double)}, {}),
    animateTo: dart.fnType(ticker.TickerFuture, [core.double], {curve: curves.Curve, duration: dart.nullable(core.Duration)}, {}),
    animateBack: dart.fnType(ticker.TickerFuture, [core.double], {curve: curves.Curve, duration: dart.nullable(core.Duration)}, {}),
    [_animateToInternal]: dart.fnType(ticker.TickerFuture, [core.double], {curve: curves.Curve, duration: dart.nullable(core.Duration)}, {}),
    repeat: dart.fnType(ticker.TickerFuture, [], {max: dart.nullable(core.double), min: dart.nullable(core.double), period: dart.nullable(core.Duration), reverse: core.bool}, {}),
    [_directionSetter]: dart.fnType(dart.void, [animation_controller._AnimationDirection]),
    fling: dart.fnType(ticker.TickerFuture, [], {animationBehavior: dart.nullable(animation_controller.AnimationBehavior), springDescription: dart.nullable(spring_simulation.SpringDescription), velocity: core.double}, {}),
    animateWith: dart.fnType(ticker.TickerFuture, [simulation.Simulation]),
    [_startSimulation]: dart.fnType(ticker.TickerFuture, [simulation.Simulation]),
    stop: dart.fnType(dart.void, [], {canceled: core.bool}, {}),
    [_checkStatusChanged]: dart.fnType(dart.void, []),
    [_tick]: dart.fnType(dart.void, [core.Duration])
  }));
  dart.setGetterSignature(animation_controller.AnimationController, () => ({
    __proto__: dart.getGetters(animation_controller.AnimationController.__proto__),
    view: animation.Animation$(core.double),
    value: core.double,
    [_value]: core.double,
    velocity: core.double,
    lastElapsedDuration: dart.nullable(core.Duration),
    isAnimating: core.bool,
    status: animation.AnimationStatus,
    [_status]: animation.AnimationStatus
  }));
  dart.setSetterSignature(animation_controller.AnimationController, () => ({
    __proto__: dart.getSetters(animation_controller.AnimationController.__proto__),
    [_value]: core.double,
    value: core.double,
    [_status]: animation.AnimationStatus
  }));
  dart.setLibraryUri(animation_controller.AnimationController, L1);
  dart.setFieldSignature(animation_controller.AnimationController, () => ({
    __proto__: dart.getFields(animation_controller.AnimationController.__proto__),
    lowerBound: dart.finalFieldType(core.double),
    upperBound: dart.finalFieldType(core.double),
    debugLabel: dart.finalFieldType(dart.nullable(core.String)),
    animationBehavior: dart.finalFieldType(animation_controller.AnimationBehavior),
    duration: dart.fieldType(dart.nullable(core.Duration)),
    reverseDuration: dart.fieldType(dart.nullable(core.Duration)),
    [_ticker]: dart.fieldType(dart.nullable(ticker.Ticker)),
    [_simulation]: dart.fieldType(dart.nullable(simulation.Simulation)),
    [__AnimationController__value]: dart.fieldType(dart.nullable(core.double)),
    [__AnimationController__value_isSet]: dart.fieldType(core.bool),
    [_lastElapsedDuration]: dart.fieldType(dart.nullable(core.Duration)),
    [_direction]: dart.fieldType(animation_controller._AnimationDirection),
    [__AnimationController__status]: dart.fieldType(dart.nullable(animation.AnimationStatus)),
    [__AnimationController__status_isSet]: dart.fieldType(core.bool),
    [_lastReportedStatus]: dart.fieldType(animation.AnimationStatus)
  }));
  var _begin$ = dart.privateName(animation_controller, "_begin");
  var _end$ = dart.privateName(animation_controller, "_end");
  var _curve$ = dart.privateName(animation_controller, "_curve");
  var _durationInSeconds = dart.privateName(animation_controller, "_durationInSeconds");
  animation_controller._InterpolationSimulation = class _InterpolationSimulation extends simulation.Simulation {
    x(timeInSeconds) {
      if (timeInSeconds == null) dart.nullFailed(L0, 850, 19, "timeInSeconds");
      let t = (dart.notNull(timeInSeconds) / dart.notNull(this[_durationInSeconds]))[$clamp](0.0, 1.0);
      if (t === 0.0)
        return this[_begin$];
      else if (t === 1.0)
        return this[_end$];
      else
        return dart.notNull(this[_begin$]) + (dart.notNull(this[_end$]) - dart.notNull(this[_begin$])) * dart.notNull(this[_curve$].transform(t));
    }
    dx(timeInSeconds) {
      if (timeInSeconds == null) dart.nullFailed(L0, 861, 20, "timeInSeconds");
      let epsilon = this.tolerance.time;
      return (dart.notNull(this.x(dart.notNull(timeInSeconds) + dart.notNull(epsilon))) - dart.notNull(this.x(dart.notNull(timeInSeconds) - dart.notNull(epsilon)))) / (2 * dart.notNull(epsilon));
    }
    isDone(timeInSeconds) {
      if (timeInSeconds == null) dart.nullFailed(L0, 867, 22, "timeInSeconds");
      return dart.notNull(timeInSeconds) > dart.notNull(this[_durationInSeconds]);
    }
  };
  (animation_controller._InterpolationSimulation.new = function(_begin, _end, duration, _curve, scale) {
    if (_begin == null) dart.nullFailed(L0, 838, 33, "_begin");
    if (_end == null) dart.nullFailed(L0, 838, 46, "_end");
    if (duration == null) dart.nullFailed(L0, 838, 61, "duration");
    if (_curve == null) dart.nullFailed(L0, 838, 76, "_curve");
    if (scale == null) dart.nullFailed(L0, 838, 91, "scale");
    this[_begin$] = _begin;
    this[_end$] = _end;
    this[_curve$] = _curve;
    if (!(_begin != null)) dart.assertFailed(null, L0, 839, 14, "_begin != null");
    if (!(_end != null)) dart.assertFailed(null, L0, 840, 14, "_end != null");
    if (!(duration != null && dart.notNull(duration.inMicroseconds) > 0)) dart.assertFailed(null, L0, 841, 14, "duration != null && duration.inMicroseconds > 0");
    this[_durationInSeconds] = dart.notNull(duration.inMicroseconds) * dart.notNull(scale) / 1000000;
    animation_controller._InterpolationSimulation.__proto__.new.call(this);
    ;
  }).prototype = animation_controller._InterpolationSimulation.prototype;
  dart.addTypeTests(animation_controller._InterpolationSimulation);
  dart.addTypeCaches(animation_controller._InterpolationSimulation);
  dart.setMethodSignature(animation_controller._InterpolationSimulation, () => ({
    __proto__: dart.getMethods(animation_controller._InterpolationSimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setLibraryUri(animation_controller._InterpolationSimulation, L1);
  dart.setFieldSignature(animation_controller._InterpolationSimulation, () => ({
    __proto__: dart.getFields(animation_controller._InterpolationSimulation.__proto__),
    [_durationInSeconds]: dart.finalFieldType(core.double),
    [_begin$]: dart.finalFieldType(core.double),
    [_end$]: dart.finalFieldType(core.double),
    [_curve$]: dart.finalFieldType(curves.Curve)
  }));
  var _periodInSeconds = dart.privateName(animation_controller, "_periodInSeconds");
  var _initialT = dart.privateName(animation_controller, "_initialT");
  animation_controller._RepeatingSimulation = class _RepeatingSimulation extends simulation.Simulation {
    x(timeInSeconds) {
      let t2, t2$;
      if (timeInSeconds == null) dart.nullFailed(L0, 889, 19, "timeInSeconds");
      if (!(dart.notNull(timeInSeconds) >= 0.0)) dart.assertFailed(null, L0, 890, 12, "timeInSeconds >= 0.0");
      let totalTimeInSeconds = dart.notNull(timeInSeconds) + dart.notNull(this[_initialT]);
      let t = (totalTimeInSeconds / dart.notNull(this[_periodInSeconds]))[$modulo](1.0);
      let _isPlayingReverse = (totalTimeInSeconds / dart.notNull(this[_periodInSeconds]))[$truncate]()[$isOdd];
      if (dart.test(this.reverse) && _isPlayingReverse) {
        t2 = animation_controller._AnimationDirection.reverse;
        this.directionSetter(t2);
        return dart.nullCheck(ui.lerpDouble(this.max, this.min, t));
      } else {
        t2$ = animation_controller._AnimationDirection.forward;
        this.directionSetter(t2$);
        return dart.nullCheck(ui.lerpDouble(this.min, this.max, t));
      }
    }
    dx(timeInSeconds) {
      if (timeInSeconds == null) dart.nullFailed(L0, 906, 20, "timeInSeconds");
      return (dart.notNull(this.max) - dart.notNull(this.min)) / dart.notNull(this[_periodInSeconds]);
    }
    isDone(timeInSeconds) {
      if (timeInSeconds == null) dart.nullFailed(L0, 909, 22, "timeInSeconds");
      return false;
    }
  };
  (animation_controller._RepeatingSimulation.new = function(initialValue, min, max, reverse, period, directionSetter) {
    if (initialValue == null) dart.nullFailed(L0, 873, 31, "initialValue");
    if (min == null) dart.nullFailed(L0, 873, 50, "min");
    if (max == null) dart.nullFailed(L0, 873, 60, "max");
    if (reverse == null) dart.nullFailed(L0, 873, 70, "reverse");
    if (period == null) dart.nullFailed(L0, 873, 88, "period");
    if (directionSetter == null) dart.nullFailed(L0, 873, 101, "directionSetter");
    this.min = min;
    this.max = max;
    this.reverse = reverse;
    this.directionSetter = directionSetter;
    this[_periodInSeconds] = dart.notNull(period.inMicroseconds) / 1000000;
    this[_initialT] = max == min ? 0.0 : dart.notNull(initialValue) / (dart.notNull(max) - dart.notNull(min)) * (dart.notNull(period.inMicroseconds) / 1000000);
    animation_controller._RepeatingSimulation.__proto__.new.call(this);
    if (!(dart.notNull(this[_periodInSeconds]) > 0.0)) dart.assertFailed(null, L0, 876, 12, "_periodInSeconds > 0.0");
    if (!(dart.notNull(this[_initialT]) >= 0.0)) dart.assertFailed(null, L0, 877, 12, "_initialT >= 0.0");
  }).prototype = animation_controller._RepeatingSimulation.prototype;
  dart.addTypeTests(animation_controller._RepeatingSimulation);
  dart.addTypeCaches(animation_controller._RepeatingSimulation);
  dart.setMethodSignature(animation_controller._RepeatingSimulation, () => ({
    __proto__: dart.getMethods(animation_controller._RepeatingSimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setLibraryUri(animation_controller._RepeatingSimulation, L1);
  dart.setFieldSignature(animation_controller._RepeatingSimulation, () => ({
    __proto__: dart.getFields(animation_controller._RepeatingSimulation.__proto__),
    min: dart.finalFieldType(core.double),
    max: dart.finalFieldType(core.double),
    reverse: dart.finalFieldType(core.bool),
    directionSetter: dart.finalFieldType(dart.fnType(dart.void, [animation_controller._AnimationDirection])),
    [_periodInSeconds]: dart.finalFieldType(core.double),
    [_initialT]: dart.finalFieldType(core.double)
  }));
  var Tolerance_velocity = dart.privateName(tolerance, "Tolerance.velocity");
  var Tolerance_time = dart.privateName(tolerance, "Tolerance.time");
  var Tolerance_distance = dart.privateName(tolerance, "Tolerance.distance");
  var C7;
  dart.defineLazy(animation_controller, {
    /*animation_controller._kFlingSpringDescription*/get _kFlingSpringDescription() {
      return new spring_simulation.SpringDescription.withDampingRatio({mass: 1.0, stiffness: 500.0, ratio: 1.0});
    },
    /*animation_controller._kFlingTolerance*/get _kFlingTolerance() {
      return C7 || CT.C7;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/animation/animation_controller.dart", {
    "package:flutter/src/animation/animation_controller.dart": animation_controller
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["animation_controller.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA8BA;;;QANK;;;;;EAML;;;;;;;;;;;;;;;;;;;IAoCA;;;QAXK;;;;;EAWL;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0Ne;;;;;;IAGA;;;;;;IAIC;;;;;;IAQU;;;;;;IAWd;;;;;;IAMA;;;;;;;AAZoB;IAAI;;UAiBP;AACZ,sBAAmB,eAAP;AACU,MAAnC,gBAAU,AAAM,KAAD,wBAAc;AACG,MAAzB,AAAE,eAAT,4BAAsB,SAAS;IACjC;;AAaoB;IAAM;;;AACd;IAAM;;;AAAN;;IAAM;;UAsBD;AACf,YAAO,AAAS,QAAD,IAAI;AACb,MAAN;AAC2B,MAA3B,wBAAkB,QAAQ;AACT,MAAjB;AACqB,MAArB;IACF;;AAiBoB,MAAlB,aAAQ;IACV;;AAOE,qBAAK,mBACH,MAAO;AACT,YAAkB,AAAE,gBAAb,sBAAmC,AAAE,AAAe,AAAW,eAA/C;IACzB;;UAE8B;AACmB,MAA/C,eAAS,AAAS,QAAD,SAAO,iBAAY;AACpC,UAAI,AAAO,gBAAG;AACuB,QAAnC,gBAA0B;YACrB,KAAI,AAAO,gBAAG;AACgB,QAAnC,gBAA0B;;AAID,QAFzB,gBAAsB,YAAX,kBAAkC,oDAC3B,oCACA;;IAEtB;;AAMqC;IAAoB;;AASjC,YAAA,AAAgB,kBAAL,kBAAe,AAAE,eAAT;IAAiB;;AAK9B;IAAO;;;AAChB;IAAO;;;AAAP;;IAAO;;UAaG;AAC7B,qBAAO,AASN;AARC,YAAI,AAAS,iBAAG;AAKb,UAJD,WAAM,4BAAY,AAChB,qEACA,yFACA;;AAGJ,cAAO;;AAET,YACE,AAAQ,iBAAG,yBAAI,AACf,+EACA;AAEsC,MAAxC,mBAAiC;AACjC,UAAI,IAAI,IAAI,MACV,AAAY,aAAJ,IAAI;AACd,YAAO,0BAAmB;IAC5B;;UAa+B;AAC7B,qBAAO,AASN;AARC,YAAI,AAAS,iBAAG,QAAQ,AAAgB,wBAAG;AAKxC,UAJD,WAAM,4BAAY,AAChB,wFACA,gHACA;;AAGJ,cAAO;;AAET,YACE,AAAQ,iBAAG,yBAAI,AACf,+EACA;AAEsC,MAAxC,mBAAiC;AACjC,UAAI,IAAI,IAAI,MACV,AAAY,aAAJ,IAAI;AACd,YAAO,0BAAmB;IAC5B;;UAc8B;UAAoB;UAAgB;;AAChE,qBAAO,AAUN;AATC,YAAS,AAAS,iBAAG,QAAQ,AAAS,QAAD,IAAI;AAMtC,UALD,WAAM,4BAAY,AAChB,gGACA,2FACA,qFACA;;AAGJ,cAAO;;AAET,YACE,AAAQ,iBAAG,yBAAI,AACf,iFACA;AAEsC,MAAxC,mBAAiC;AACjC,YAAO,0BAAmB,MAAM,aAAY,QAAQ,SAAS,KAAK;IACpE;;UAcgC;UAAoB;UAAgB;;AAClE,qBAAO,AAUN;AATC,YAAS,AAAS,iBAAG,QAAQ,AAAgB,wBAAG,QAAQ,AAAS,QAAD,IAAI;AAMjE,UALD,WAAM,4BAAY,AAChB,qHACA,6FACA,4GACA;;AAGJ,cAAO;;AAET,YACE,AAAQ,iBAAG,yBAAI,AACf,mFACA;AAEsC,MAAxC,mBAAiC;AACjC,YAAO,0BAAmB,MAAM,aAAY,QAAQ,SAAS,KAAK;IACpE;;UAEuC;UAAoB;UAAgB;;AAClE,kBAAQ;AACf,oBAA6B,AAAE,eAAV;AACnB,gBAAQ;;;AAKQ,YAAZ,QAAQ;AACR;;;;AAEA;;;;AARJ;;;;AAWQ,+BAAqB,QAAQ;AACvC,UAAI,AAAmB,kBAAD,IAAI;AACxB,aAAO,EAAO,AAAS,iBAAG,QAAmB,YAAX,kBAAkC;AACpE,aAAO,EAAO,AAAS,iBAAG,QAAmB,YAAX,kBAAkC,qDAAW,AAAgB,wBAAG;AACrF,oBAAmB,aAAX,gCAAa;AACrB,gCAAoB,AAAM,KAAD,cAA8B,AAAM,CAAhB,aAAP,MAAM,iBAAG,yBAAgB,KAAK,GAAG;AACrE,gCACD,AAA+B,YAA1C,kBAAkC,qDAAW,wBAAmB,OAChD,eAAf,wBACa,eAAR;AACiD,QAA1D,qBAAqB,AAAkB,iBAAD,MAAG,iBAAiB;YACrD,KAAI,AAAO,MAAD,IAAI;AAEe,QAAlC,qBAA8B;;AAE1B,MAAN;AACA,UAAuB,YAAnB,kBAAkB,EAAa;AACjC,YAAI,cAAS,MAAM;AAC4B,UAA7C,eAAS,AAAO,MAAD,SAAO,iBAAY;AACjB,UAAjB;;AAIyB,QAF3B,gBAAsB,YAAX,kBAAkC,oDAC3B,sCACA;AACG,QAArB;AACA,cAAoB;;AAEtB,qBAAO,AAAmB,kBAAD,MAAY;AACrC,WAAO,WAAC;AACR,YAAO,wBAAiB,sDAAyB,cAAQ,MAAM,EAAE,kBAAkB,EAAE,KAAK,EAAE,KAAK;IACnG;;UAuB8B;UAAa;UAAU;;UAA2B;AAC5D,MAAlB,AAAI,GAAD,IAAC,OAAJ,MAAQ,kBAAJ;AACc,MAAlB,AAAI,GAAD,IAAC,OAAJ,MAAQ,kBAAJ;AACe,MAAnB,AAAO,MAAD,IAAC,OAAP,SAAW,gBAAJ;AACP,qBAAO,AAUN;AATC,YAAI,AAAO,MAAD,IAAI;AAMX,UALD,WAAM,4BAAY,AAChB,mGACA,sFACA,qFACA;;AAGJ,cAAO;;AAET,YAAW,aAAJ,GAAG,kBAAI,GAAG;AACjB,YAAW,AAAc,aAAlB,GAAG,kBAAI,oBAAkB,aAAJ,GAAG,kBAAI;AACnC,YAAO,AAAQ,OAAD,IAAI;AACZ,MAAN;AACA,YAAO,wBAAiB,kDAAqB,cAAQ,GAAG,EAAE,GAAG,EAAE,OAAO,EAAQ,eAAN,MAAM,aAAG;IACnF;;UAE0C;AAClB,MAAtB,mBAAa,SAAS;AAGG,MAFzB,gBAAsB,YAAX,kBAAkC,oDAC3B,oCACA;AACG,MAArB;IACF;;;UAqB4B;;UAAmC;UAAsC;AACrD,MAA9C,AAAkB,iBAAD,IAAC,OAAlB,oBAAsB,gDAAJ;AACqE,MAAvF,mBAAsB,aAAT,QAAQ,IAAG,MAA0B,mDAA8B;AACnE,mBAAkB,aAAT,QAAQ,IAAG,MAAiB,aAAX,gCAAa,AAAiB,kDACnB,aAAX,gCAAa,AAAiB;AAC9D,kBAAQ;AACS,sBAA6B,KAAlB,iBAAiB,QAAjB,OAA0B;AAC7D,oBAA6B,AAAE,eAAV;AACnB,gBAAQ,QAAQ;;;AAIC,YAAb,QAAQ;AACR;;;;AAEA;;;;AAPJ;;;;AAUqB,8BAAa,2CAAiB,iBAAiB,EAAE,YAAO,MAAM,EAAW,aAAT,QAAQ,IAAG,KAAK,GAAnE;AAChC,wBAAY;;;AAChB,WACkB,aAAhB,AAAW,UAAD,OAAoB,6DAAW,AACzC,yEACA;AAEI,MAAN;AACA,YAAO,wBAAiB,UAAU;IACpC;;UAgBoC;AAClC,YACE,AAAQ,iBAAG,yBAAI,AACf,mFACA;AAEI,MAAN;AACwC,MAAxC,mBAAiC;AACjC,YAAO,wBAAiB,UAAU;IACpC;;UAEyC;AACvC,YAAO,AAAW,UAAD,IAAI;AACrB,WAAO,WAAC;AACgB,MAAxB,oBAAc,UAAU;AACY,MAApC,6BAAgC;AACwB,MAAxD,eAAS,AAAW,AAAO,UAAR,GAAG,aAAW,iBAAY;AAC1B,mBAAgB,AAAE,eAAT;AAGH,MAFzB,gBAAsB,YAAX,kBAAkC,oDAC3B,oCACA;AACG,MAArB;AACA,YAAO,OAAM;IACf;;UAmBiB;;AACf,YACE,AAAQ,iBAAG,yBAAI,AACf,4EACA;AAEgB,MAAlB,oBAAc;AACa,MAA3B,6BAAuB;AACU,MAA1B,AAAE,eAAT,+BAAwB,QAAQ;IAClC;;AAUE,qBAAO,AAaN;AAZC,YAAI,AAAQ,iBAAG;AASX,UARF,WAAmB,sCAA2B,+BAC5C,gCAAa,yDACb,oCAAiB,AAA2D,sBAAjD,sBAAW,0CACtC,qDACE,AAA+D,4BAA/C,sBAAW,uCAC3B,cAC4B;;AAIlC,cAAO;;AAES,MAAX,AAAE,eAAT;AACc,MAAd,gBAAU;AACK,MAAT;IACR;;AAIwB,sBAAY;AAClC,uBAAI,2BAAuB,SAAS;AACH,QAA/B,4BAAsB,SAAS;AACC,QAAhC,2BAAsB,SAAS;;IAEnC;;UAEoB;AACY,MAA9B,6BAAuB,OAAO;AACjB,6BAAmB,AAAQ,AAAe,AAAW,OAA3B;AACvC,YAAO,AAAiB,gBAAD,IAAI;AAC4C,MAAvE,eAAoB,AAAE,AAAoB,eAAjC,qBAAe,gBAAgB,UAAQ,iBAAY;AAC5D,oBAAe,AAAE,eAAb,0BAAoB,gBAAgB;AAGX,QAF3B,gBAAsB,YAAX,kBAAkC,oDAC3B,sCACA;AACG,QAArB,qBAAe;;AAEA,MAAjB;AACqB,MAArB;IACF;;AAIe,6BAAS,oBAAc,KAAK;AAC5B,mBAAS,AAAQ,iBAAG,OAAO,yBAAuB,AAAE,eAAT,wBAAiB,eAAe;AAC3E,kBAAQ,AAAW,mBAAG,OAAO,KAAK,AAAmB,oBAAX;AAC1C,iBAA+D,SAA/C,2BAAkB,MAAG,AAAM,6BAAgB;AACxE,YAAS,AAAyB,KAArB,GAAC,MAAM,GAAC,MAAM,GAAC,KAAK;IACnC;;;;QAxlBU;QACH;QACA;QACA;QACA;;QACA;;QACA;;QACmB;;IA8ElB;IASI;yCAYA;;IA4EF;0CAcW;;IAqXL,4BAAsC;IAxjB/C;IACA;IACA;IACA;IACA;IACA;UAEK,AAAW,UAAD,IAAI;UACd,AAAW,UAAD,IAAI;UACH,aAAX,UAAU,kBAAI,UAAU;UACxB,AAAM,KAAD,IAAI;IACL,mBAAsB;AAbtC;AAcqC,IAAnC,gBAAU,AAAM,KAAD,wBAAc;AACS,IAAtC,yBAAwB,KAAN,KAAK,QAAL,OAAS;EAC7B;;QAoBS;;QACF;QACA;QACA;QACmB;;QACnB;;IA6CC;IASI;yCAYA;;IA4EF;0CAcW;;IAqXL,4BAAsC;IArhB/C;IACA;IACA;IAEA;UACK,AAAM,KAAD,IAAI;UACT,AAAM,KAAD,IAAI;IACL;IACA;IACA,mBAAsB;AAXtC;AAYqC,IAAnC,gBAAU,AAAM,KAAD,wBAAc;AACL,IAAxB,wBAAkB,KAAK;EACzB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAwjBgB;AACD,cAAyC,CAAtB,aAAd,aAAa,iBAAG,mCAA0B,KAAK;AACjE,UAAI,AAAE,CAAD,KAAI;AACP,cAAO;UACJ,KAAI,AAAE,CAAD,KAAI;AACZ,cAAO;;AAEP,cAAc,cAAP,iBAAyB,CAAV,aAAL,4BAAO,+BAAU,AAAO,wBAAU,CAAC;IACxD;;UAGiB;AACF,oBAAU,AAAU;AACjC,YAAiE,EAA9B,aAA3B,OAAgB,aAAd,aAAa,iBAAG,OAAO,mBAAI,OAAgB,aAAd,aAAa,iBAAG,OAAO,QAAM,AAAE,iBAAE,OAAO;IACjF;;UAGmB;AAAkB,YAAc,cAAd,aAAa,iBAAG;IAAkB;;gEA7BzC,QAAa,MAAe,UAAe,QAAe;QAA1D;QAAa;QAAe;QAAe;QAAe;IAA1D;IAAa;IAA8B;UAC9D,AAAO,MAAD,IAAI;UACV,AAAK,IAAD,IAAI;UACR,AAAiB,QAAT,IAAI,QAAgC,aAAxB,AAAS,QAAD,mBAAkB;IAClC,2BAA2B,AAAS,aAAjC,AAAS,QAAD,gCAAkB,KAAK;AAJzD;;EAI2F;;;;;;;;;;;;;;;;;;;;MA+C3E;;;AACd,YAAqB,aAAd,aAAa,KAAI;AAEX,+BAAmC,aAAd,aAAa,iBAAG;AACrC,cAA4C,CAAvC,AAAmB,kBAAD,gBAAG,kCAAoB;AAChD,8BAAwC,AAAqB,CAAxC,kBAAkB,gBAAI;AAEtD,oBAAI,iBAAW,iBAAiB;AACc,aAAR;QAApC,AAAe;AACf,cAAiC,gBAA1B,cAAc,UAAK,UAAK,CAAC;;AAEY,cAAR;QAApC,AAAe;AACf,cAAiC,gBAA1B,cAAc,UAAK,UAAK,CAAC;;IAEpC;;UAGiB;AAAkB,YAAY,EAAP,aAAJ,yBAAM,0BAAO;IAAgB;;UAG9C;AAAkB;IAAK;;4DApCd,cAAmB,KAAU,KAAU,SAAkB,QAAa;QAAtE;QAAmB;QAAU;QAAU;QAAkB;QAAa;IAAnD;IAAU;IAAU;IAA+B;IAC3E,yBAAwB,aAAtB,AAAO,MAAD;IACf,kBAAG,AAAI,GAAD,IAAI,GAAG,GAAI,MAAoB,AAAe,aAA5B,YAAY,KAAQ,aAAJ,GAAG,iBAAG,GAAG,MAA4B,aAAtB,AAAO,MAAD;AAF7E;AAGE,UAAwB,aAAjB,0BAAmB;AAC1B,UAAiB,aAAV,oBAAa;EACtB;;;;;;;;;;;;;;;;;;;;;;;;MA70BsB,6CAAwB;YAAqB,iEAC7D,gBACK,cACJ;;MAGO,qCAAgB","file":"../../../../../../../../../../packages/flutter/src/animation/animation_controller.dart.lib.js"}');
  // Exports:
  return {
    src__animation__animation_controller: animation_controller
  };
}));

//# sourceMappingURL=animation_controller.dart.lib.js.map
