define(['dart_sdk', 'packages/flutter/src/foundation/observer_list.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/animation/curves.dart'], (function load__packages__flutter__src__animation__listener_helpers_dart(dart_sdk, packages__flutter__src__foundation__observer_list$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__animation__curves$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const observer_list = packages__flutter__src__foundation__observer_list$46dart.src__foundation__observer_list;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  var listener_helpers = Object.create(dart.library);
  var animations = Object.create(dart.library);
  var tween = Object.create(dart.library);
  var animation$ = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $round = dartx.round;
  var $toDouble = dartx.toDouble;
  var $floor = dartx.floor;
  dart._checkModuleNullSafetyMode(false);
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ObserverListOfVoidTovoid = () => (ObserverListOfVoidTovoid = dart.constFn(observer_list.ObserverList$(VoidTovoid())))();
  var ListOfVoidTovoid = () => (ListOfVoidTovoid = dart.constFn(core.List$(VoidTovoid())))();
  var DiagnosticsPropertyOfAnimationLocalListenersMixin = () => (DiagnosticsPropertyOfAnimationLocalListenersMixin = dart.constFn(diagnostics.DiagnosticsProperty$(listener_helpers.AnimationLocalListenersMixin)))();
  var SyncIterableOfDiagnosticsNode = () => (SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(diagnostics.DiagnosticsNode)))();
  var IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics.DiagnosticsNode)))();
  var VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var AnimationStatusTovoid = () => (AnimationStatusTovoid = dart.constFn(dart.fnType(dart.void, [animation$.AnimationStatus])))();
  var ObserverListOfAnimationStatusTovoid = () => (ObserverListOfAnimationStatusTovoid = dart.constFn(observer_list.ObserverList$(AnimationStatusTovoid())))();
  var ListOfAnimationStatusTovoid = () => (ListOfAnimationStatusTovoid = dart.constFn(core.List$(AnimationStatusTovoid())))();
  var DiagnosticsPropertyOfAnimationLocalStatusListenersMixin = () => (DiagnosticsPropertyOfAnimationLocalStatusListenersMixin = dart.constFn(diagnostics.DiagnosticsProperty$(listener_helpers.AnimationLocalStatusListenersMixin)))();
  var AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation$.Animation$(core.double)))();
  var _TrainHoppingModeL = () => (_TrainHoppingModeL = dart.constFn(dart.legacy(animations._TrainHoppingMode)))();
  var AnimationStatusL = () => (AnimationStatusL = dart.constFn(dart.legacy(animation$.AnimationStatus)))();
  const CT = Object.create(null);
  var L2 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/animation/animations.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/animation/listener_helpers.dart";
  var L5 = "package:flutter/src/animation/animations.dart";
  var L1 = "package:flutter/src/animation/listener_helpers.dart";
  var L7 = "package:flutter/src/animation/tween.dart";
  var L6 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/animation/tween.dart";
  var L3 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/animation/animation.dart";
  var L4 = "package:flutter/src/animation/animation.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: animation$.AnimationStatus.prototype,
        [_name$]: "AnimationStatus.forward",
        index: 1
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: animation$.AnimationStatus.prototype,
        [_name$]: "AnimationStatus.reverse",
        index: 2
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: animation$.AnimationStatus.prototype,
        [_name$]: "AnimationStatus.completed",
        index: 3
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: animation$.AnimationStatus.prototype,
        [_name$]: "AnimationStatus.dismissed",
        index: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: animations._TrainHoppingMode.prototype,
        [_name$0]: "_TrainHoppingMode.minimize",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: animations._TrainHoppingMode.prototype,
        [_name$0]: "_TrainHoppingMode.maximize",
        index: 1
      });
    },
    get C6() {
      return C6 = dart.constList([C4 || CT.C4, C5 || CT.C5], _TrainHoppingModeL());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: animations._AlwaysCompleteAnimation.prototype
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: animations._AlwaysDismissedAnimation.prototype
      });
    },
    get C9() {
      return C9 = dart.constList([C3 || CT.C3, C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], AnimationStatusL());
    }
  }, false);
  var _listenerCounter = dart.privateName(listener_helpers, "_listenerCounter");
  listener_helpers.AnimationLazyListenerMixin = class AnimationLazyListenerMixin extends core.Object {};
  listener_helpers.AnimationLazyListenerMixin[dart.mixinOn] = Object => class AnimationLazyListenerMixin extends Object {
    didRegisterListener() {
      if (!(dart.notNull(this[_listenerCounter]) >= 0)) dart.assertFailed(null, L0, 27, 12, "_listenerCounter >= 0");
      if (this[_listenerCounter] === 0) this.didStartListening();
      this[_listenerCounter] = dart.notNull(this[_listenerCounter]) + 1;
    }
    didUnregisterListener() {
      if (!(dart.notNull(this[_listenerCounter]) >= 1)) dart.assertFailed(null, L0, 40, 12, "_listenerCounter >= 1");
      this[_listenerCounter] = dart.notNull(this[_listenerCounter]) - 1;
      if (this[_listenerCounter] === 0) this.didStopListening();
    }
    get isListening() {
      return dart.notNull(this[_listenerCounter]) > 0;
    }
  };
  (listener_helpers.AnimationLazyListenerMixin[dart.mixinNew] = function() {
    this[_listenerCounter] = 0;
  }).prototype = listener_helpers.AnimationLazyListenerMixin.prototype;
  dart.addTypeTests(listener_helpers.AnimationLazyListenerMixin);
  dart.addTypeCaches(listener_helpers.AnimationLazyListenerMixin);
  listener_helpers.AnimationLazyListenerMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(listener_helpers.AnimationLazyListenerMixin, () => ({
    __proto__: dart.getMethods(listener_helpers.AnimationLazyListenerMixin.__proto__),
    didRegisterListener: dart.fnType(dart.void, []),
    didUnregisterListener: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(listener_helpers.AnimationLazyListenerMixin, () => ({
    __proto__: dart.getGetters(listener_helpers.AnimationLazyListenerMixin.__proto__),
    isListening: core.bool
  }));
  dart.setLibraryUri(listener_helpers.AnimationLazyListenerMixin, L1);
  dart.setFieldSignature(listener_helpers.AnimationLazyListenerMixin, () => ({
    __proto__: dart.getFields(listener_helpers.AnimationLazyListenerMixin.__proto__),
    [_listenerCounter]: dart.fieldType(core.int)
  }));
  listener_helpers.AnimationEagerListenerMixin = class AnimationEagerListenerMixin extends core.Object {};
  listener_helpers.AnimationEagerListenerMixin[dart.mixinOn] = Object => class AnimationEagerListenerMixin extends Object {
    didRegisterListener() {
    }
    didUnregisterListener() {
    }
    dispose() {
    }
  };
  (listener_helpers.AnimationEagerListenerMixin[dart.mixinNew] = function() {
  }).prototype = listener_helpers.AnimationEagerListenerMixin.prototype;
  dart.addTypeTests(listener_helpers.AnimationEagerListenerMixin);
  dart.addTypeCaches(listener_helpers.AnimationEagerListenerMixin);
  listener_helpers.AnimationEagerListenerMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(listener_helpers.AnimationEagerListenerMixin, () => ({
    __proto__: dart.getMethods(listener_helpers.AnimationEagerListenerMixin.__proto__),
    didRegisterListener: dart.fnType(dart.void, []),
    didUnregisterListener: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(listener_helpers.AnimationEagerListenerMixin, L1);
  var _listeners = dart.privateName(listener_helpers, "_listeners");
  listener_helpers.AnimationLocalListenersMixin = class AnimationLocalListenersMixin extends core.Object {};
  listener_helpers.AnimationLocalListenersMixin[dart.mixinOn] = Object => class AnimationLocalListenersMixin extends Object {
    addListener(listener) {
      if (listener == null) dart.nullFailed(L0, 101, 33, "listener");
      this.didRegisterListener();
      this[_listeners].add(listener);
    }
    removeListener(listener) {
      if (listener == null) dart.nullFailed(L0, 109, 36, "listener");
      let removed = this[_listeners].remove(listener);
      if (dart.test(removed)) {
        this.didUnregisterListener();
      }
    }
    notifyListeners() {
      let localListeners = ListOfVoidTovoid().from(this[_listeners]);
      for (let listener of localListeners) {
        let collector = null;
        if (!dart.test(dart.fn(() => {
          collector = dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
            yield new (DiagnosticsPropertyOfAnimationLocalListenersMixin()).new("The " + dart.str(this[$runtimeType]) + " notifying listeners was", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
          }).bind(this)), VoidToIterableOfDiagnosticsNode());
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 124, 14, "() {\n        collector = () sync* {\n          yield DiagnosticsProperty<AnimationLocalListenersMixin>(\n            'The $runtimeType notifying listeners was',\n            this,\n            style: DiagnosticsTreeStyle.errorProperty,\n          );\n        };\n        return true;\n      }()");
        try {
          if (dart.test(this[_listeners].contains(listener))) listener();
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "animation library", context: new assertions.ErrorDescription.new("while notifying listeners for " + dart.str(this[$runtimeType])), informationCollector: collector}));
          } else
            throw e;
        }
      }
    }
  };
  (listener_helpers.AnimationLocalListenersMixin[dart.mixinNew] = function() {
    this[_listeners] = new (ObserverListOfVoidTovoid()).new();
  }).prototype = listener_helpers.AnimationLocalListenersMixin.prototype;
  dart.addTypeTests(listener_helpers.AnimationLocalListenersMixin);
  dart.addTypeCaches(listener_helpers.AnimationLocalListenersMixin);
  listener_helpers.AnimationLocalListenersMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(listener_helpers.AnimationLocalListenersMixin, () => ({
    __proto__: dart.getMethods(listener_helpers.AnimationLocalListenersMixin.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    notifyListeners: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(listener_helpers.AnimationLocalListenersMixin, L1);
  dart.setFieldSignature(listener_helpers.AnimationLocalListenersMixin, () => ({
    __proto__: dart.getFields(listener_helpers.AnimationLocalListenersMixin.__proto__),
    [_listeners]: dart.finalFieldType(observer_list.ObserverList$(dart.fnType(dart.void, [])))
  }));
  var _statusListeners = dart.privateName(listener_helpers, "_statusListeners");
  listener_helpers.AnimationLocalStatusListenersMixin = class AnimationLocalStatusListenersMixin extends core.Object {};
  listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinOn] = Object => class AnimationLocalStatusListenersMixin extends Object {
    addStatusListener(listener) {
      if (listener == null) dart.nullFailed(L0, 175, 50, "listener");
      this.didRegisterListener();
      this[_statusListeners].add(listener);
    }
    removeStatusListener(listener) {
      if (listener == null) dart.nullFailed(L0, 183, 53, "listener");
      let removed = this[_statusListeners].remove(listener);
      if (dart.test(removed)) {
        this.didUnregisterListener();
      }
    }
    notifyStatusListeners(status) {
      if (status == null) dart.nullFailed(L0, 194, 46, "status");
      let localListeners = ListOfAnimationStatusTovoid().from(this[_statusListeners]);
      for (let listener of localListeners) {
        try {
          if (dart.test(this[_statusListeners].contains(listener))) listener(status);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            let collector = null;
            if (!dart.test(dart.fn(() => {
              collector = dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
                yield new (DiagnosticsPropertyOfAnimationLocalStatusListenersMixin()).new("The " + dart.str(this[$runtimeType]) + " notifying status listeners was", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
              }).bind(this)), VoidToIterableOfDiagnosticsNode());
              return true;
            }, VoidTobool())())) dart.assertFailed(null, L0, 202, 16, "() {\n          collector = () sync* {\n            yield DiagnosticsProperty<AnimationLocalStatusListenersMixin>(\n              'The $runtimeType notifying status listeners was',\n              this,\n              style: DiagnosticsTreeStyle.errorProperty,\n            );\n          };\n          return true;\n        }()");
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "animation library", context: new assertions.ErrorDescription.new("while notifying status listeners for " + dart.str(this[$runtimeType])), informationCollector: collector}));
          } else
            throw e;
        }
      }
    }
  };
  (listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew] = function() {
    this[_statusListeners] = new (ObserverListOfAnimationStatusTovoid()).new();
  }).prototype = listener_helpers.AnimationLocalStatusListenersMixin.prototype;
  dart.addTypeTests(listener_helpers.AnimationLocalStatusListenersMixin);
  dart.addTypeCaches(listener_helpers.AnimationLocalStatusListenersMixin);
  listener_helpers.AnimationLocalStatusListenersMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(listener_helpers.AnimationLocalStatusListenersMixin, () => ({
    __proto__: dart.getMethods(listener_helpers.AnimationLocalStatusListenersMixin.__proto__),
    addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
    removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
    notifyStatusListeners: dart.fnType(dart.void, [animation$.AnimationStatus])
  }));
  dart.setLibraryUri(listener_helpers.AnimationLocalStatusListenersMixin, L1);
  dart.setFieldSignature(listener_helpers.AnimationLocalStatusListenersMixin, () => ({
    __proto__: dart.getFields(listener_helpers.AnimationLocalStatusListenersMixin.__proto__),
    [_statusListeners]: dart.finalFieldType(observer_list.ObserverList$(dart.fnType(dart.void, [animation$.AnimationStatus])))
  }));
  var _name$ = dart.privateName(animation$, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  const _is_Animation_default = Symbol('_is_Animation_default');
  animation$.Animation$ = dart.generic(T => {
    class Animation extends change_notifier.Listenable {
      get isDismissed() {
        return dart.equals(this.status, animation$.AnimationStatus.dismissed);
      }
      get isCompleted() {
        return dart.equals(this.status, animation$.AnimationStatus.completed);
      }
      drive(U, child) {
        if (child == null) dart.nullFailed(L3, 168, 39, "child");
        if (!AnimationOfdouble().is(this)) dart.assertFailed(null, L3, 169, 12, "this is Animation<double>");
        return child.animate(AnimationOfdouble().as(this));
      }
      toString() {
        return dart.str(diagnostics.describeIdentity(this)) + "(" + dart.str(this.toStringDetails()) + ")";
      }
      toStringDetails() {
        if (!(this.status != null)) dart.assertFailed(null, L3, 193, 12, "status != null");
        switch (this.status) {
          case C0 || CT.C0:
          {
            return "▶";
          }
          case C1 || CT.C1:
          {
            return "◀";
          }
          case C2 || CT.C2:
          {
            return "⏭";
          }
          case C3 || CT.C3:
          {
            return "⏮";
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
    }
    (Animation.new = function() {
      Animation.__proto__.new.call(this);
      ;
    }).prototype = Animation.prototype;
    dart.addTypeTests(Animation);
    Animation.prototype[_is_Animation_default] = true;
    dart.addTypeCaches(Animation);
    Animation[dart.implements] = () => [change_notifier.ValueListenable$(T)];
    dart.setMethodSignature(Animation, () => ({
      __proto__: dart.getMethods(Animation.__proto__),
      drive: dart.gFnType(U => [animation$.Animation$(U), [tween.Animatable$(U)]], U => [dart.nullable(core.Object)]),
      toStringDetails: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(Animation, () => ({
      __proto__: dart.getGetters(Animation.__proto__),
      isDismissed: core.bool,
      isCompleted: core.bool
    }));
    dart.setLibraryUri(Animation, L4);
    dart.defineExtensionMethods(Animation, ['toString']);
    return Animation;
  });
  animation$.Animation = animation$.Animation$();
  dart.addTypeTests(animation$.Animation, _is_Animation_default);
  animations._AlwaysCompleteAnimation = class _AlwaysCompleteAnimation extends animation$.Animation$(core.double) {
    addListener(listener) {
      if (listener == null) dart.nullFailed(L2, 21, 33, "listener");
    }
    removeListener(listener) {
      if (listener == null) dart.nullFailed(L2, 24, 36, "listener");
    }
    addStatusListener(listener) {
      if (listener == null) dart.nullFailed(L2, 27, 50, "listener");
    }
    removeStatusListener(listener) {
      if (listener == null) dart.nullFailed(L2, 30, 53, "listener");
    }
    get status() {
      return animation$.AnimationStatus.completed;
    }
    get value() {
      return 1.0;
    }
    toString() {
      return "kAlwaysCompleteAnimation";
    }
  };
  (animations._AlwaysCompleteAnimation.new = function() {
    animations._AlwaysCompleteAnimation.__proto__.new.call(this);
    ;
  }).prototype = animations._AlwaysCompleteAnimation.prototype;
  dart.addTypeTests(animations._AlwaysCompleteAnimation);
  dart.addTypeCaches(animations._AlwaysCompleteAnimation);
  dart.setMethodSignature(animations._AlwaysCompleteAnimation, () => ({
    __proto__: dart.getMethods(animations._AlwaysCompleteAnimation.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
    removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])])
  }));
  dart.setGetterSignature(animations._AlwaysCompleteAnimation, () => ({
    __proto__: dart.getGetters(animations._AlwaysCompleteAnimation.__proto__),
    status: animation$.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(animations._AlwaysCompleteAnimation, L5);
  dart.defineExtensionMethods(animations._AlwaysCompleteAnimation, ['toString']);
  animations._AlwaysDismissedAnimation = class _AlwaysDismissedAnimation extends animation$.Animation$(core.double) {
    addListener(listener) {
      if (listener == null) dart.nullFailed(L2, 53, 33, "listener");
    }
    removeListener(listener) {
      if (listener == null) dart.nullFailed(L2, 56, 36, "listener");
    }
    addStatusListener(listener) {
      if (listener == null) dart.nullFailed(L2, 59, 50, "listener");
    }
    removeStatusListener(listener) {
      if (listener == null) dart.nullFailed(L2, 62, 53, "listener");
    }
    get status() {
      return animation$.AnimationStatus.dismissed;
    }
    get value() {
      return 0.0;
    }
    toString() {
      return "kAlwaysDismissedAnimation";
    }
  };
  (animations._AlwaysDismissedAnimation.new = function() {
    animations._AlwaysDismissedAnimation.__proto__.new.call(this);
    ;
  }).prototype = animations._AlwaysDismissedAnimation.prototype;
  dart.addTypeTests(animations._AlwaysDismissedAnimation);
  dart.addTypeCaches(animations._AlwaysDismissedAnimation);
  dart.setMethodSignature(animations._AlwaysDismissedAnimation, () => ({
    __proto__: dart.getMethods(animations._AlwaysDismissedAnimation.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
    removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])])
  }));
  dart.setGetterSignature(animations._AlwaysDismissedAnimation, () => ({
    __proto__: dart.getGetters(animations._AlwaysDismissedAnimation.__proto__),
    status: animation$.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(animations._AlwaysDismissedAnimation, L5);
  dart.defineExtensionMethods(animations._AlwaysDismissedAnimation, ['toString']);
  const _is_AlwaysStoppedAnimation_default = Symbol('_is_AlwaysStoppedAnimation_default');
  var value$ = dart.privateName(animations, "AlwaysStoppedAnimation.value");
  animations.AlwaysStoppedAnimation$ = dart.generic(T => {
    class AlwaysStoppedAnimation extends animation$.Animation$(T) {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      addListener(listener) {
        if (listener == null) dart.nullFailed(L2, 98, 33, "listener");
      }
      removeListener(listener) {
        if (listener == null) dart.nullFailed(L2, 101, 36, "listener");
      }
      addStatusListener(listener) {
        if (listener == null) dart.nullFailed(L2, 104, 50, "listener");
      }
      removeStatusListener(listener) {
        if (listener == null) dart.nullFailed(L2, 107, 53, "listener");
      }
      get status() {
        return animation$.AnimationStatus.forward;
      }
      toStringDetails() {
        return dart.str(super.toStringDetails()) + " " + dart.str(this.value) + "; paused";
      }
    }
    (AlwaysStoppedAnimation.new = function(value) {
      this[value$] = value;
      AlwaysStoppedAnimation.__proto__.new.call(this);
      ;
    }).prototype = AlwaysStoppedAnimation.prototype;
    dart.addTypeTests(AlwaysStoppedAnimation);
    AlwaysStoppedAnimation.prototype[_is_AlwaysStoppedAnimation_default] = true;
    dart.addTypeCaches(AlwaysStoppedAnimation);
    dart.setMethodSignature(AlwaysStoppedAnimation, () => ({
      __proto__: dart.getMethods(AlwaysStoppedAnimation.__proto__),
      addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
      removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])])
    }));
    dart.setGetterSignature(AlwaysStoppedAnimation, () => ({
      __proto__: dart.getGetters(AlwaysStoppedAnimation.__proto__),
      status: animation$.AnimationStatus
    }));
    dart.setLibraryUri(AlwaysStoppedAnimation, L5);
    dart.setFieldSignature(AlwaysStoppedAnimation, () => ({
      __proto__: dart.getFields(AlwaysStoppedAnimation.__proto__),
      value: dart.finalFieldType(T)
    }));
    return AlwaysStoppedAnimation;
  });
  animations.AlwaysStoppedAnimation = animations.AlwaysStoppedAnimation$();
  dart.addTypeTests(animations.AlwaysStoppedAnimation, _is_AlwaysStoppedAnimation_default);
  const _is_AnimationWithParentMixin_default = Symbol('_is_AnimationWithParentMixin_default');
  animations.AnimationWithParentMixin$ = dart.generic(T => {
    class AnimationWithParentMixin extends core.Object {}
    AnimationWithParentMixin[dart.mixinOn] = Object => class AnimationWithParentMixin extends Object {
      addListener(listener) {
        if (listener == null) dart.nullFailed(L2, 139, 33, "listener");
        return this.parent.addListener(listener);
      }
      removeListener(listener) {
        if (listener == null) dart.nullFailed(L2, 144, 36, "listener");
        return this.parent.removeListener(listener);
      }
      addStatusListener(listener) {
        if (listener == null) dart.nullFailed(L2, 149, 50, "listener");
        return this.parent.addStatusListener(listener);
      }
      removeStatusListener(listener) {
        if (listener == null) dart.nullFailed(L2, 154, 53, "listener");
        return this.parent.removeStatusListener(listener);
      }
      get status() {
        return this.parent.status;
      }
    };
    (AnimationWithParentMixin[dart.mixinNew] = function() {
    }).prototype = AnimationWithParentMixin.prototype;
    dart.addTypeTests(AnimationWithParentMixin);
    AnimationWithParentMixin.prototype[_is_AnimationWithParentMixin_default] = true;
    dart.addTypeCaches(AnimationWithParentMixin);
    AnimationWithParentMixin[dart.implements] = () => [core.Object];
    dart.setMethodSignature(AnimationWithParentMixin, () => ({
      __proto__: dart.getMethods(AnimationWithParentMixin.__proto__),
      addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
      removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])])
    }));
    dart.setGetterSignature(AnimationWithParentMixin, () => ({
      __proto__: dart.getGetters(AnimationWithParentMixin.__proto__),
      status: animation$.AnimationStatus
    }));
    dart.setLibraryUri(AnimationWithParentMixin, L5);
    return AnimationWithParentMixin;
  });
  animations.AnimationWithParentMixin = animations.AnimationWithParentMixin$();
  dart.addTypeTests(animations.AnimationWithParentMixin, _is_AnimationWithParentMixin_default);
  var _status = dart.privateName(animations, "_status");
  var _value = dart.privateName(animations, "_value");
  var _parent = dart.privateName(animations, "_parent");
  const Animation_AnimationLazyListenerMixin$36 = class Animation_AnimationLazyListenerMixin extends animation$.Animation$(core.double) {};
  (Animation_AnimationLazyListenerMixin$36.new = function() {
    listener_helpers.AnimationLazyListenerMixin[dart.mixinNew].call(this);
    Animation_AnimationLazyListenerMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationLazyListenerMixin$36.prototype;
  dart.applyMixin(Animation_AnimationLazyListenerMixin$36, listener_helpers.AnimationLazyListenerMixin);
  const Animation_AnimationLocalListenersMixin$36 = class Animation_AnimationLocalListenersMixin extends Animation_AnimationLazyListenerMixin$36 {};
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
  animations.ProxyAnimation = class ProxyAnimation extends Animation_AnimationLocalStatusListenersMixin$36 {
    get parent() {
      return this[_parent];
    }
    set parent(value) {
      if (dart.equals(value, this[_parent])) return;
      if (this[_parent] != null) {
        this[_status] = dart.nullCheck(this[_parent]).status;
        this[_value] = dart.nullCheck(this[_parent]).value;
        if (dart.test(this.isListening)) this.didStopListening();
      }
      this[_parent] = value;
      if (this[_parent] != null) {
        if (dart.test(this.isListening)) this.didStartListening();
        if (this[_value] != dart.nullCheck(this[_parent]).value) this.notifyListeners();
        if (!dart.equals(this[_status], dart.nullCheck(this[_parent]).status)) this.notifyStatusListeners(dart.nullCheck(this[_parent]).status);
        this[_status] = null;
        this[_value] = null;
      }
    }
    didStartListening() {
      if (this[_parent] != null) {
        dart.nullCheck(this[_parent]).addListener(dart.bind(this, 'notifyListeners'));
        dart.nullCheck(this[_parent]).addStatusListener(dart.bind(this, 'notifyStatusListeners'));
      }
    }
    didStopListening() {
      if (this[_parent] != null) {
        dart.nullCheck(this[_parent]).removeListener(dart.bind(this, 'notifyListeners'));
        dart.nullCheck(this[_parent]).removeStatusListener(dart.bind(this, 'notifyStatusListeners'));
      }
    }
    get status() {
      return this[_parent] != null ? dart.nullCheck(this[_parent]).status : dart.nullCheck(this[_status]);
    }
    get value() {
      return this[_parent] != null ? dart.nullCheck(this[_parent]).value : dart.nullCheck(this[_value]);
    }
    toString() {
      if (this.parent == null) return dart.str(object.objectRuntimeType(this, "ProxyAnimation")) + "(null; " + dart.str(super.toStringDetails()) + " " + this.value[$toStringAsFixed](3) + ")";
      return dart.str(this.parent) + "➩" + dart.str(object.objectRuntimeType(this, "ProxyAnimation"));
    }
  };
  (animations.ProxyAnimation.new = function(animation = null) {
    this[_status] = null;
    this[_value] = null;
    this[_parent] = null;
    animations.ProxyAnimation.__proto__.new.call(this);
    this[_parent] = animation;
    if (this[_parent] == null) {
      this[_status] = animation$.AnimationStatus.dismissed;
      this[_value] = 0.0;
    }
  }).prototype = animations.ProxyAnimation.prototype;
  dart.addTypeTests(animations.ProxyAnimation);
  dart.addTypeCaches(animations.ProxyAnimation);
  dart.setMethodSignature(animations.ProxyAnimation, () => ({
    __proto__: dart.getMethods(animations.ProxyAnimation.__proto__),
    didStartListening: dart.fnType(dart.void, []),
    didStopListening: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(animations.ProxyAnimation, () => ({
    __proto__: dart.getGetters(animations.ProxyAnimation.__proto__),
    parent: dart.nullable(animation$.Animation$(core.double)),
    status: animation$.AnimationStatus,
    value: core.double
  }));
  dart.setSetterSignature(animations.ProxyAnimation, () => ({
    __proto__: dart.getSetters(animations.ProxyAnimation.__proto__),
    parent: dart.nullable(animation$.Animation$(core.double))
  }));
  dart.setLibraryUri(animations.ProxyAnimation, L5);
  dart.setFieldSignature(animations.ProxyAnimation, () => ({
    __proto__: dart.getFields(animations.ProxyAnimation.__proto__),
    [_status]: dart.fieldType(dart.nullable(animation$.AnimationStatus)),
    [_value]: dart.fieldType(dart.nullable(core.double)),
    [_parent]: dart.fieldType(dart.nullable(animation$.Animation$(core.double)))
  }));
  dart.defineExtensionMethods(animations.ProxyAnimation, ['toString']);
  var _statusChangeHandler = dart.privateName(animations, "_statusChangeHandler");
  var _reverseStatus = dart.privateName(animations, "_reverseStatus");
  var parent$ = dart.privateName(animations, "ReverseAnimation.parent");
  const Animation_AnimationLazyListenerMixin$36$ = class Animation_AnimationLazyListenerMixin extends animation$.Animation$(core.double) {};
  (Animation_AnimationLazyListenerMixin$36$.new = function() {
    listener_helpers.AnimationLazyListenerMixin[dart.mixinNew].call(this);
    Animation_AnimationLazyListenerMixin$36$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLazyListenerMixin$36$.prototype;
  dart.applyMixin(Animation_AnimationLazyListenerMixin$36$, listener_helpers.AnimationLazyListenerMixin);
  const Animation_AnimationLocalStatusListenersMixin$36$ = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLazyListenerMixin$36$ {};
  (Animation_AnimationLocalStatusListenersMixin$36$.new = function() {
    listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalStatusListenersMixin$36$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$36$.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$36$, listener_helpers.AnimationLocalStatusListenersMixin);
  animations.ReverseAnimation = class ReverseAnimation extends Animation_AnimationLocalStatusListenersMixin$36$ {
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    addListener(listener) {
      if (listener == null) dart.nullFailed(L2, 270, 33, "listener");
      this.didRegisterListener();
      this.parent.addListener(listener);
    }
    removeListener(listener) {
      if (listener == null) dart.nullFailed(L2, 276, 36, "listener");
      this.parent.removeListener(listener);
      this.didUnregisterListener();
    }
    didStartListening() {
      this.parent.addStatusListener(dart.bind(this, _statusChangeHandler));
    }
    didStopListening() {
      this.parent.removeStatusListener(dart.bind(this, _statusChangeHandler));
    }
    [_statusChangeHandler](status) {
      if (status == null) dart.nullFailed(L2, 291, 45, "status");
      this.notifyStatusListeners(this[_reverseStatus](status));
    }
    get status() {
      return this[_reverseStatus](this.parent.status);
    }
    get value() {
      return 1.0 - dart.notNull(this.parent.value);
    }
    [_reverseStatus](status) {
      if (status == null) dart.nullFailed(L2, 301, 50, "status");
      if (!(status != null)) dart.assertFailed(null, L2, 302, 12, "status != null");
      switch (status) {
        case C0 || CT.C0:
        {
          return animation$.AnimationStatus.reverse;
        }
        case C1 || CT.C1:
        {
          return animation$.AnimationStatus.forward;
        }
        case C2 || CT.C2:
        {
          return animation$.AnimationStatus.dismissed;
        }
        case C3 || CT.C3:
        {
          return animation$.AnimationStatus.completed;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    toString() {
      return dart.str(this.parent) + "➪" + dart.str(object.objectRuntimeType(this, "ReverseAnimation"));
    }
  };
  (animations.ReverseAnimation.new = function(parent) {
    if (parent == null) dart.nullFailed(L2, 263, 25, "parent");
    this[parent$] = parent;
    if (!(parent != null)) dart.assertFailed(null, L2, 264, 14, "parent != null");
    animations.ReverseAnimation.__proto__.new.call(this);
    ;
  }).prototype = animations.ReverseAnimation.prototype;
  dart.addTypeTests(animations.ReverseAnimation);
  dart.addTypeCaches(animations.ReverseAnimation);
  dart.setMethodSignature(animations.ReverseAnimation, () => ({
    __proto__: dart.getMethods(animations.ReverseAnimation.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    didStartListening: dart.fnType(dart.void, []),
    didStopListening: dart.fnType(dart.void, []),
    [_statusChangeHandler]: dart.fnType(dart.void, [animation$.AnimationStatus]),
    [_reverseStatus]: dart.fnType(animation$.AnimationStatus, [animation$.AnimationStatus])
  }));
  dart.setGetterSignature(animations.ReverseAnimation, () => ({
    __proto__: dart.getGetters(animations.ReverseAnimation.__proto__),
    status: animation$.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(animations.ReverseAnimation, L5);
  dart.setFieldSignature(animations.ReverseAnimation, () => ({
    __proto__: dart.getFields(animations.ReverseAnimation.__proto__),
    parent: dart.finalFieldType(animation$.Animation$(core.double))
  }));
  dart.defineExtensionMethods(animations.ReverseAnimation, ['toString']);
  var _curveDirection = dart.privateName(animations, "_curveDirection");
  var _updateCurveDirection = dart.privateName(animations, "_updateCurveDirection");
  var _useForwardCurve = dart.privateName(animations, "_useForwardCurve");
  var parent$0 = dart.privateName(animations, "CurvedAnimation.parent");
  var curve$ = dart.privateName(animations, "CurvedAnimation.curve");
  var reverseCurve$ = dart.privateName(animations, "CurvedAnimation.reverseCurve");
  const Animation_AnimationWithParentMixin$36 = class Animation_AnimationWithParentMixin extends animation$.Animation$(core.double) {};
  (Animation_AnimationWithParentMixin$36.new = function() {
    Animation_AnimationWithParentMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationWithParentMixin$36.prototype;
  dart.applyMixin(Animation_AnimationWithParentMixin$36, animations.AnimationWithParentMixin$(core.double));
  animations.CurvedAnimation = class CurvedAnimation extends Animation_AnimationWithParentMixin$36 {
    get parent() {
      return this[parent$0];
    }
    set parent(value) {
      super.parent = value;
    }
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      this[curve$] = value;
    }
    get reverseCurve() {
      return this[reverseCurve$];
    }
    set reverseCurve(value) {
      this[reverseCurve$] = value;
    }
    [_updateCurveDirection](status) {
      if (status == null) dart.nullFailed(L2, 411, 46, "status");
      switch (status) {
        case C3 || CT.C3:
        case C2 || CT.C2:
        {
          this[_curveDirection] = null;
          break;
        }
        case C0 || CT.C0:
        {
          this[_curveDirection] == null ? this[_curveDirection] = animation$.AnimationStatus.forward : null;
          break;
        }
        case C1 || CT.C1:
        {
          this[_curveDirection] == null ? this[_curveDirection] = animation$.AnimationStatus.reverse : null;
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    get [_useForwardCurve]() {
      let t2;
      return this.reverseCurve == null || !dart.equals((t2 = this[_curveDirection], t2 == null ? this.parent.status : t2), animation$.AnimationStatus.reverse);
    }
    get value() {
      let activeCurve = dart.test(this[_useForwardCurve]) ? this.curve : this.reverseCurve;
      let t = this.parent.value;
      if (activeCurve == null) return t;
      if (t === 0.0 || t === 1.0) {
        if (!dart.test(dart.fn(() => {
          let transformedValue = activeCurve.transform(t);
          let roundedTransformedValue = transformedValue[$round]()[$toDouble]();
          if (roundedTransformedValue !== t) {
            dart.throw(assertions.FlutterError.new("Invalid curve endpoint at " + dart.str(t) + ".\n" + "Curves must map 0.0 to near zero and 1.0 to near one but " + dart.str(dart.runtimeType(activeCurve)) + " mapped " + dart.str(t) + " to " + dart.str(transformedValue) + ", which " + "is near " + dart.str(roundedTransformedValue) + "."));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L2, 438, 14, "() {\n        final double transformedValue = activeCurve.transform(t);\n        final double roundedTransformedValue = transformedValue.round().toDouble();\n        if (roundedTransformedValue != t) {\n          throw FlutterError(\n            'Invalid curve endpoint at $t.\\n'\n            'Curves must map 0.0 to near zero and 1.0 to near one but '\n            '${activeCurve.runtimeType} mapped $t to $transformedValue, which '\n            'is near $roundedTransformedValue.'\n          );\n        }\n        return true;\n      }()");
        return t;
      }
      return activeCurve.transform(t);
    }
    toString() {
      if (this.reverseCurve == null) return dart.str(this.parent) + "➩" + dart.str(this.curve);
      if (dart.test(this[_useForwardCurve])) return dart.str(this.parent) + "➩" + dart.str(this.curve) + "ₒₙ/" + dart.str(this.reverseCurve);
      return dart.str(this.parent) + "➩" + dart.str(this.curve) + "/" + dart.str(this.reverseCurve) + "ₒₙ";
    }
  };
  (animations.CurvedAnimation.new = function(opts) {
    let parent = opts && 'parent' in opts ? opts.parent : null;
    if (parent == null) dart.nullFailed(L2, 373, 19, "parent");
    let curve = opts && 'curve' in opts ? opts.curve : null;
    if (curve == null) dart.nullFailed(L2, 374, 19, "curve");
    let reverseCurve = opts && 'reverseCurve' in opts ? opts.reverseCurve : null;
    this[_curveDirection] = null;
    this[parent$0] = parent;
    this[curve$] = curve;
    this[reverseCurve$] = reverseCurve;
    if (!(parent != null)) dart.assertFailed(null, L2, 376, 15, "parent != null");
    if (!(curve != null)) dart.assertFailed(null, L2, 377, 15, "curve != null");
    animations.CurvedAnimation.__proto__.new.call(this);
    this[_updateCurveDirection](this.parent.status);
    this.parent.addStatusListener(dart.bind(this, _updateCurveDirection));
  }).prototype = animations.CurvedAnimation.prototype;
  dart.addTypeTests(animations.CurvedAnimation);
  dart.addTypeCaches(animations.CurvedAnimation);
  dart.setMethodSignature(animations.CurvedAnimation, () => ({
    __proto__: dart.getMethods(animations.CurvedAnimation.__proto__),
    [_updateCurveDirection]: dart.fnType(dart.void, [animation$.AnimationStatus])
  }));
  dart.setGetterSignature(animations.CurvedAnimation, () => ({
    __proto__: dart.getGetters(animations.CurvedAnimation.__proto__),
    [_useForwardCurve]: core.bool,
    value: core.double
  }));
  dart.setLibraryUri(animations.CurvedAnimation, L5);
  dart.setFieldSignature(animations.CurvedAnimation, () => ({
    __proto__: dart.getFields(animations.CurvedAnimation.__proto__),
    parent: dart.finalFieldType(animation$.Animation$(core.double)),
    curve: dart.fieldType(curves.Curve),
    reverseCurve: dart.fieldType(dart.nullable(curves.Curve)),
    [_curveDirection]: dart.fieldType(dart.nullable(animation$.AnimationStatus))
  }));
  dart.defineExtensionMethods(animations.CurvedAnimation, ['toString']);
  var _name$0 = dart.privateName(animations, "_name");
  var C4;
  var C5;
  var C6;
  animations._TrainHoppingMode = class _TrainHoppingMode extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (animations._TrainHoppingMode.new = function(index, _name) {
    if (index == null) dart.nullFailed(L2, 466, 6, "index");
    if (_name == null) dart.nullFailed(L2, 466, 6, "_name");
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = animations._TrainHoppingMode.prototype;
  dart.addTypeTests(animations._TrainHoppingMode);
  dart.addTypeCaches(animations._TrainHoppingMode);
  dart.setLibraryUri(animations._TrainHoppingMode, L5);
  dart.setFieldSignature(animations._TrainHoppingMode, () => ({
    __proto__: dart.getFields(animations._TrainHoppingMode.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(animations._TrainHoppingMode, ['toString']);
  animations._TrainHoppingMode.minimize = C4 || CT.C4;
  animations._TrainHoppingMode.maximize = C5 || CT.C5;
  animations._TrainHoppingMode.values = C6 || CT.C6;
  var _mode = dart.privateName(animations, "_mode");
  var _lastStatus = dart.privateName(animations, "_lastStatus");
  var _lastValue = dart.privateName(animations, "_lastValue");
  var _currentTrain$ = dart.privateName(animations, "_currentTrain");
  var _nextTrain$ = dart.privateName(animations, "_nextTrain");
  var _valueChangeHandler = dart.privateName(animations, "_valueChangeHandler");
  var onSwitchedTrain$ = dart.privateName(animations, "TrainHoppingAnimation.onSwitchedTrain");
  const Animation_AnimationEagerListenerMixin$36 = class Animation_AnimationEagerListenerMixin extends animation$.Animation$(core.double) {};
  (Animation_AnimationEagerListenerMixin$36.new = function() {
    Animation_AnimationEagerListenerMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationEagerListenerMixin$36.prototype;
  dart.applyMixin(Animation_AnimationEagerListenerMixin$36, listener_helpers.AnimationEagerListenerMixin);
  const Animation_AnimationLocalListenersMixin$36$ = class Animation_AnimationLocalListenersMixin extends Animation_AnimationEagerListenerMixin$36 {};
  (Animation_AnimationLocalListenersMixin$36$.new = function() {
    listener_helpers.AnimationLocalListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalListenersMixin$36$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalListenersMixin$36$.prototype;
  dart.applyMixin(Animation_AnimationLocalListenersMixin$36$, listener_helpers.AnimationLocalListenersMixin);
  const Animation_AnimationLocalStatusListenersMixin$36$0 = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLocalListenersMixin$36$ {};
  (Animation_AnimationLocalStatusListenersMixin$36$0.new = function() {
    listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalStatusListenersMixin$36$0.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$36$0.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$36$0, listener_helpers.AnimationLocalStatusListenersMixin);
  animations.TrainHoppingAnimation = class TrainHoppingAnimation extends Animation_AnimationLocalStatusListenersMixin$36$0 {
    get onSwitchedTrain() {
      return this[onSwitchedTrain$];
    }
    set onSwitchedTrain(value) {
      this[onSwitchedTrain$] = value;
    }
    get currentTrain() {
      return this[_currentTrain$];
    }
    [_statusChangeHandler](status) {
      if (status == null) dart.nullFailed(L2, 533, 45, "status");
      if (!(this[_currentTrain$] != null)) dart.assertFailed(null, L2, 534, 12, "_currentTrain != null");
      if (!dart.equals(status, this[_lastStatus])) {
        this.notifyListeners();
        this[_lastStatus] = status;
      }
      if (!(this[_lastStatus] != null)) dart.assertFailed(null, L2, 539, 12, "_lastStatus != null");
    }
    get status() {
      return dart.nullCheck(this[_currentTrain$]).status;
    }
    [_valueChangeHandler]() {
      let t2;
      if (!(this[_currentTrain$] != null)) dart.assertFailed(null, L2, 547, 12, "_currentTrain != null");
      let hop = false;
      if (this[_nextTrain$] != null) {
        if (!(this[_mode] != null)) dart.assertFailed(null, L2, 550, 14, "_mode != null");
        switch (dart.nullCheck(this[_mode])) {
          case C4 || CT.C4:
          {
            hop = dart.notNull(dart.nullCheck(this[_nextTrain$]).value) <= dart.notNull(dart.nullCheck(this[_currentTrain$]).value);
            break;
          }
          case C5 || CT.C5:
          {
            hop = dart.notNull(dart.nullCheck(this[_nextTrain$]).value) >= dart.notNull(dart.nullCheck(this[_currentTrain$]).value);
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        if (hop) {
          t2 = dart.nullCheck(this[_currentTrain$]);
          (() => {
            t2.removeStatusListener(dart.bind(this, _statusChangeHandler));
            t2.removeListener(dart.bind(this, _valueChangeHandler));
            return t2;
          })();
          this[_currentTrain$] = this[_nextTrain$];
          this[_nextTrain$] = null;
          dart.nullCheck(this[_currentTrain$]).addStatusListener(dart.bind(this, _statusChangeHandler));
          this[_statusChangeHandler](dart.nullCheck(this[_currentTrain$]).status);
        }
      }
      let newValue = this.value;
      if (newValue != this[_lastValue]) {
        this.notifyListeners();
        this[_lastValue] = newValue;
      }
      if (!(this[_lastValue] != null)) dart.assertFailed(null, L2, 574, 12, "_lastValue != null");
      if (hop && this.onSwitchedTrain != null) dart.nullCheck(this.onSwitchedTrain)();
    }
    get value() {
      return dart.nullCheck(this[_currentTrain$]).value;
    }
    dispose() {
      let t2;
      if (!(this[_currentTrain$] != null)) dart.assertFailed(null, L2, 586, 12, "_currentTrain != null");
      dart.nullCheck(this[_currentTrain$]).removeStatusListener(dart.bind(this, _statusChangeHandler));
      dart.nullCheck(this[_currentTrain$]).removeListener(dart.bind(this, _valueChangeHandler));
      this[_currentTrain$] = null;
      t2 = this[_nextTrain$];
      t2 == null ? null : t2.removeListener(dart.bind(this, _valueChangeHandler));
      this[_nextTrain$] = null;
      super.dispose();
    }
    toString() {
      if (this[_nextTrain$] != null) return dart.str(this.currentTrain) + "➩" + dart.str(object.objectRuntimeType(this, "TrainHoppingAnimation")) + "(next: " + dart.str(this[_nextTrain$]) + ")";
      return dart.str(this.currentTrain) + "➩" + dart.str(object.objectRuntimeType(this, "TrainHoppingAnimation")) + "(no next)";
    }
  };
  (animations.TrainHoppingAnimation.new = function(_currentTrain, _nextTrain, opts) {
    let t2;
    if (_currentTrain == null) dart.nullFailed(L2, 495, 28, "_currentTrain");
    let onSwitchedTrain = opts && 'onSwitchedTrain' in opts ? opts.onSwitchedTrain : null;
    this[_mode] = null;
    this[_lastStatus] = null;
    this[_lastValue] = null;
    this[_currentTrain$] = _currentTrain;
    this[_nextTrain$] = _nextTrain;
    this[onSwitchedTrain$] = onSwitchedTrain;
    if (!(_currentTrain != null)) dart.assertFailed(null, L2, 498, 15, "_currentTrain != null");
    animations.TrainHoppingAnimation.__proto__.new.call(this);
    if (this[_nextTrain$] != null) {
      if (dart.nullCheck(this[_currentTrain$]).value == dart.nullCheck(this[_nextTrain$]).value) {
        this[_currentTrain$] = this[_nextTrain$];
        this[_nextTrain$] = null;
      } else if (dart.notNull(dart.nullCheck(this[_currentTrain$]).value) > dart.notNull(dart.nullCheck(this[_nextTrain$]).value)) {
        this[_mode] = animations._TrainHoppingMode.maximize;
      } else {
        if (!(dart.notNull(dart.nullCheck(this[_currentTrain$]).value) < dart.notNull(dart.nullCheck(this[_nextTrain$]).value))) dart.assertFailed(null, L2, 506, 16, "_currentTrain!.value < _nextTrain!.value");
        this[_mode] = animations._TrainHoppingMode.minimize;
      }
    }
    dart.nullCheck(this[_currentTrain$]).addStatusListener(dart.bind(this, _statusChangeHandler));
    dart.nullCheck(this[_currentTrain$]).addListener(dart.bind(this, _valueChangeHandler));
    t2 = this[_nextTrain$];
    t2 == null ? null : t2.addListener(dart.bind(this, _valueChangeHandler));
    if (!(this[_mode] != null || this[_nextTrain$] == null)) dart.assertFailed(null, L2, 513, 12, "_mode != null || _nextTrain == null");
  }).prototype = animations.TrainHoppingAnimation.prototype;
  dart.addTypeTests(animations.TrainHoppingAnimation);
  dart.addTypeCaches(animations.TrainHoppingAnimation);
  dart.setMethodSignature(animations.TrainHoppingAnimation, () => ({
    __proto__: dart.getMethods(animations.TrainHoppingAnimation.__proto__),
    [_statusChangeHandler]: dart.fnType(dart.void, [animation$.AnimationStatus]),
    [_valueChangeHandler]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(animations.TrainHoppingAnimation, () => ({
    __proto__: dart.getGetters(animations.TrainHoppingAnimation.__proto__),
    currentTrain: dart.nullable(animation$.Animation$(core.double)),
    status: animation$.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(animations.TrainHoppingAnimation, L5);
  dart.setFieldSignature(animations.TrainHoppingAnimation, () => ({
    __proto__: dart.getFields(animations.TrainHoppingAnimation.__proto__),
    [_currentTrain$]: dart.fieldType(dart.nullable(animation$.Animation$(core.double))),
    [_nextTrain$]: dart.fieldType(dart.nullable(animation$.Animation$(core.double))),
    [_mode]: dart.fieldType(dart.nullable(animations._TrainHoppingMode)),
    onSwitchedTrain: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_lastStatus]: dart.fieldType(dart.nullable(animation$.AnimationStatus)),
    [_lastValue]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(animations.TrainHoppingAnimation, ['toString']);
  var _maybeNotifyListeners = dart.privateName(animations, "_maybeNotifyListeners");
  var _maybeNotifyStatusListeners = dart.privateName(animations, "_maybeNotifyStatusListeners");
  const _is_CompoundAnimation_default = Symbol('_is_CompoundAnimation_default');
  var first$ = dart.privateName(animations, "CompoundAnimation.first");
  var next$ = dart.privateName(animations, "CompoundAnimation.next");
  animations.CompoundAnimation$ = dart.generic(T => {
    const Animation_AnimationLazyListenerMixin$36 = class Animation_AnimationLazyListenerMixin extends animation$.Animation$(T) {};
    (Animation_AnimationLazyListenerMixin$36.new = function() {
      listener_helpers.AnimationLazyListenerMixin[dart.mixinNew].call(this);
      Animation_AnimationLazyListenerMixin$36.__proto__.new.call(this);
    }).prototype = Animation_AnimationLazyListenerMixin$36.prototype;
    dart.applyMixin(Animation_AnimationLazyListenerMixin$36, listener_helpers.AnimationLazyListenerMixin);
    const Animation_AnimationLocalListenersMixin$36 = class Animation_AnimationLocalListenersMixin extends Animation_AnimationLazyListenerMixin$36 {};
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
    class CompoundAnimation extends Animation_AnimationLocalStatusListenersMixin$36 {
      get first() {
        return this[first$];
      }
      set first(value) {
        super.first = value;
      }
      get next() {
        return this[next$];
      }
      set next(value) {
        super.next = value;
      }
      didStartListening() {
        this.first.addListener(dart.bind(this, _maybeNotifyListeners));
        this.first.addStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
        this.next.addListener(dart.bind(this, _maybeNotifyListeners));
        this.next.addStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
      }
      didStopListening() {
        this.first.removeListener(dart.bind(this, _maybeNotifyListeners));
        this.first.removeStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
        this.next.removeListener(dart.bind(this, _maybeNotifyListeners));
        this.next.removeStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
      }
      get status() {
        if (dart.equals(this.next.status, animation$.AnimationStatus.forward) || dart.equals(this.next.status, animation$.AnimationStatus.reverse)) return this.next.status;
        return this.first.status;
      }
      toString() {
        return dart.str(object.objectRuntimeType(this, "CompoundAnimation")) + "(" + dart.str(this.first) + ", " + dart.str(this.next) + ")";
      }
      [_maybeNotifyStatusListeners](_) {
        if (_ == null) dart.nullFailed(L2, 663, 52, "_");
        if (!dart.equals(this.status, this[_lastStatus])) {
          this[_lastStatus] = this.status;
          this.notifyStatusListeners(this.status);
        }
      }
      [_maybeNotifyListeners]() {
        if (!dart.equals(this.value, this[_lastValue])) {
          this[_lastValue] = this.value;
          this.notifyListeners();
        }
      }
    }
    (CompoundAnimation.new = function(opts) {
      let first = opts && 'first' in opts ? opts.first : null;
      if (first == null) dart.nullFailed(L2, 618, 19, "first");
      let next = opts && 'next' in opts ? opts.next : null;
      if (next == null) dart.nullFailed(L2, 619, 19, "next");
      this[_lastStatus] = null;
      this[_lastValue] = null;
      this[first$] = first;
      this[next$] = next;
      if (!(first != null)) dart.assertFailed(null, L2, 620, 15, "first != null");
      if (!(next != null)) dart.assertFailed(null, L2, 621, 15, "next != null");
      CompoundAnimation.__proto__.new.call(this);
      ;
    }).prototype = CompoundAnimation.prototype;
    dart.addTypeTests(CompoundAnimation);
    CompoundAnimation.prototype[_is_CompoundAnimation_default] = true;
    dart.addTypeCaches(CompoundAnimation);
    dart.setMethodSignature(CompoundAnimation, () => ({
      __proto__: dart.getMethods(CompoundAnimation.__proto__),
      didStartListening: dart.fnType(dart.void, []),
      didStopListening: dart.fnType(dart.void, []),
      [_maybeNotifyStatusListeners]: dart.fnType(dart.void, [animation$.AnimationStatus]),
      [_maybeNotifyListeners]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CompoundAnimation, () => ({
      __proto__: dart.getGetters(CompoundAnimation.__proto__),
      status: animation$.AnimationStatus
    }));
    dart.setLibraryUri(CompoundAnimation, L5);
    dart.setFieldSignature(CompoundAnimation, () => ({
      __proto__: dart.getFields(CompoundAnimation.__proto__),
      first: dart.finalFieldType(animation$.Animation$(T)),
      next: dart.finalFieldType(animation$.Animation$(T)),
      [_lastStatus]: dart.fieldType(dart.nullable(animation$.AnimationStatus)),
      [_lastValue]: dart.fieldType(dart.nullable(T))
    }));
    dart.defineExtensionMethods(CompoundAnimation, ['toString']);
    return CompoundAnimation;
  });
  animations.CompoundAnimation = animations.CompoundAnimation$();
  dart.addTypeTests(animations.CompoundAnimation, _is_CompoundAnimation_default);
  animations.AnimationMean = class AnimationMean extends animations.CompoundAnimation$(core.double) {
    get value() {
      return (dart.notNull(this.first.value) + dart.notNull(this.next.value)) / 2.0;
    }
  };
  (animations.AnimationMean.new = function(opts) {
    let left = opts && 'left' in opts ? opts.left : null;
    if (left == null) dart.nullFailed(L2, 689, 32, "left");
    let right = opts && 'right' in opts ? opts.right : null;
    if (right == null) dart.nullFailed(L2, 690, 32, "right");
    animations.AnimationMean.__proto__.new.call(this, {first: left, next: right});
    ;
  }).prototype = animations.AnimationMean.prototype;
  dart.addTypeTests(animations.AnimationMean);
  dart.addTypeCaches(animations.AnimationMean);
  dart.setGetterSignature(animations.AnimationMean, () => ({
    __proto__: dart.getGetters(animations.AnimationMean.__proto__),
    value: core.double
  }));
  dart.setLibraryUri(animations.AnimationMean, L5);
  const _is_AnimationMax_default = Symbol('_is_AnimationMax_default');
  animations.AnimationMax$ = dart.generic(T => {
    class AnimationMax extends animations.CompoundAnimation$(T) {
      get value() {
        return math.max(T, this.first.value, this.next.value);
      }
    }
    (AnimationMax.new = function(first, next) {
      if (first == null) dart.nullFailed(L2, 706, 29, "first");
      if (next == null) dart.nullFailed(L2, 706, 49, "next");
      AnimationMax.__proto__.new.call(this, {first: first, next: next});
      ;
    }).prototype = AnimationMax.prototype;
    dart.addTypeTests(AnimationMax);
    AnimationMax.prototype[_is_AnimationMax_default] = true;
    dart.addTypeCaches(AnimationMax);
    dart.setGetterSignature(AnimationMax, () => ({
      __proto__: dart.getGetters(AnimationMax.__proto__),
      value: T
    }));
    dart.setLibraryUri(AnimationMax, L5);
    return AnimationMax;
  });
  animations.AnimationMax = animations.AnimationMax$();
  dart.addTypeTests(animations.AnimationMax, _is_AnimationMax_default);
  const _is_AnimationMin_default = Symbol('_is_AnimationMin_default');
  animations.AnimationMin$ = dart.generic(T => {
    class AnimationMin extends animations.CompoundAnimation$(T) {
      get value() {
        return math.min(T, this.first.value, this.next.value);
      }
    }
    (AnimationMin.new = function(first, next) {
      if (first == null) dart.nullFailed(L2, 721, 29, "first");
      if (next == null) dart.nullFailed(L2, 721, 49, "next");
      AnimationMin.__proto__.new.call(this, {first: first, next: next});
      ;
    }).prototype = AnimationMin.prototype;
    dart.addTypeTests(AnimationMin);
    AnimationMin.prototype[_is_AnimationMin_default] = true;
    dart.addTypeCaches(AnimationMin);
    dart.setGetterSignature(AnimationMin, () => ({
      __proto__: dart.getGetters(AnimationMin.__proto__),
      value: T
    }));
    dart.setLibraryUri(AnimationMin, L5);
    return AnimationMin;
  });
  animations.AnimationMin = animations.AnimationMin$();
  dart.addTypeTests(animations.AnimationMin, _is_AnimationMin_default);
  var C7;
  var C8;
  dart.defineLazy(animations, {
    /*animations.kAlwaysCompleteAnimation*/get kAlwaysCompleteAnimation() {
      return C7 || CT.C7;
    },
    /*animations.kAlwaysDismissedAnimation*/get kAlwaysDismissedAnimation() {
      return C8 || CT.C8;
    }
  }, false);
  const _is_Animatable_default = Symbol('_is_Animatable_default');
  tween.Animatable$ = dart.generic(T => {
    var _AnimatedEvaluationOfT = () => (_AnimatedEvaluationOfT = dart.constFn(tween._AnimatedEvaluation$(T)))();
    var _ChainedEvaluationOfT = () => (_ChainedEvaluationOfT = dart.constFn(tween._ChainedEvaluation$(T)))();
    class Animatable extends core.Object {
      evaluate(animation) {
        if (animation == null) dart.nullFailed(L6, 54, 32, "animation");
        return this.transform(animation.value);
      }
      animate(parent) {
        if (parent == null) dart.nullFailed(L6, 66, 42, "parent");
        return new (_AnimatedEvaluationOfT()).new(parent, this);
      }
      chain(parent) {
        if (parent == null) dart.nullFailed(L6, 74, 42, "parent");
        return new (_ChainedEvaluationOfT()).new(parent, this);
      }
    }
    (Animatable.new = function() {
      ;
    }).prototype = Animatable.prototype;
    dart.addTypeTests(Animatable);
    Animatable.prototype[_is_Animatable_default] = true;
    dart.addTypeCaches(Animatable);
    dart.setMethodSignature(Animatable, () => ({
      __proto__: dart.getMethods(Animatable.__proto__),
      evaluate: dart.fnType(T, [animation$.Animation$(core.double)]),
      animate: dart.fnType(animation$.Animation$(T), [animation$.Animation$(core.double)]),
      chain: dart.fnType(tween.Animatable$(T), [tween.Animatable$(core.double)])
    }));
    dart.setLibraryUri(Animatable, L7);
    return Animatable;
  });
  tween.Animatable = tween.Animatable$();
  dart.addTypeTests(tween.Animatable, _is_Animatable_default);
  var _evaluatable$ = dart.privateName(tween, "_evaluatable");
  const _is__AnimatedEvaluation_default = Symbol('_is__AnimatedEvaluation_default');
  var parent$1 = dart.privateName(tween, "_AnimatedEvaluation.parent");
  tween._AnimatedEvaluation$ = dart.generic(T => {
    const Animation_AnimationWithParentMixin$36 = class Animation_AnimationWithParentMixin extends animation$.Animation$(T) {};
    (Animation_AnimationWithParentMixin$36.new = function() {
      Animation_AnimationWithParentMixin$36.__proto__.new.call(this);
    }).prototype = Animation_AnimationWithParentMixin$36.prototype;
    dart.applyMixin(Animation_AnimationWithParentMixin$36, animations.AnimationWithParentMixin$(core.double));
    class _AnimatedEvaluation extends Animation_AnimationWithParentMixin$36 {
      get parent() {
        return this[parent$1];
      }
      set parent(value) {
        super.parent = value;
      }
      get value() {
        return this[_evaluatable$].evaluate(this.parent);
      }
      toString() {
        return dart.str(this.parent) + "➩" + dart.str(this[_evaluatable$]) + "➩" + dart.str(this.value);
      }
      toStringDetails() {
        return dart.str(super.toStringDetails()) + " " + dart.str(this[_evaluatable$]);
      }
    }
    (_AnimatedEvaluation.new = function(parent, _evaluatable) {
      if (parent == null) dart.nullFailed(L6, 80, 28, "parent");
      if (_evaluatable == null) dart.nullFailed(L6, 80, 41, "_evaluatable");
      this[parent$1] = parent;
      this[_evaluatable$] = _evaluatable;
      _AnimatedEvaluation.__proto__.new.call(this);
      ;
    }).prototype = _AnimatedEvaluation.prototype;
    dart.addTypeTests(_AnimatedEvaluation);
    _AnimatedEvaluation.prototype[_is__AnimatedEvaluation_default] = true;
    dart.addTypeCaches(_AnimatedEvaluation);
    dart.setGetterSignature(_AnimatedEvaluation, () => ({
      __proto__: dart.getGetters(_AnimatedEvaluation.__proto__),
      value: T
    }));
    dart.setLibraryUri(_AnimatedEvaluation, L7);
    dart.setFieldSignature(_AnimatedEvaluation, () => ({
      __proto__: dart.getFields(_AnimatedEvaluation.__proto__),
      parent: dart.finalFieldType(animation$.Animation$(core.double)),
      [_evaluatable$]: dart.finalFieldType(tween.Animatable$(T))
    }));
    dart.defineExtensionMethods(_AnimatedEvaluation, ['toString']);
    return _AnimatedEvaluation;
  });
  tween._AnimatedEvaluation = tween._AnimatedEvaluation$();
  dart.addTypeTests(tween._AnimatedEvaluation, _is__AnimatedEvaluation_default);
  var _parent$ = dart.privateName(tween, "_parent");
  const _is__ChainedEvaluation_default = Symbol('_is__ChainedEvaluation_default');
  tween._ChainedEvaluation$ = dart.generic(T => {
    class _ChainedEvaluation extends tween.Animatable$(T) {
      transform(t) {
        if (t == null) dart.nullFailed(L6, 108, 22, "t");
        return this[_evaluatable$].transform(this[_parent$].transform(t));
      }
      toString() {
        return dart.str(this[_parent$]) + "➩" + dart.str(this[_evaluatable$]);
      }
    }
    (_ChainedEvaluation.new = function(_parent, _evaluatable) {
      if (_parent == null) dart.nullFailed(L6, 102, 27, "_parent");
      if (_evaluatable == null) dart.nullFailed(L6, 102, 41, "_evaluatable");
      this[_parent$] = _parent;
      this[_evaluatable$] = _evaluatable;
      _ChainedEvaluation.__proto__.new.call(this);
      ;
    }).prototype = _ChainedEvaluation.prototype;
    dart.addTypeTests(_ChainedEvaluation);
    _ChainedEvaluation.prototype[_is__ChainedEvaluation_default] = true;
    dart.addTypeCaches(_ChainedEvaluation);
    dart.setMethodSignature(_ChainedEvaluation, () => ({
      __proto__: dart.getMethods(_ChainedEvaluation.__proto__),
      transform: dart.fnType(T, [core.double])
    }));
    dart.setLibraryUri(_ChainedEvaluation, L7);
    dart.setFieldSignature(_ChainedEvaluation, () => ({
      __proto__: dart.getFields(_ChainedEvaluation.__proto__),
      [_parent$]: dart.finalFieldType(tween.Animatable$(core.double)),
      [_evaluatable$]: dart.finalFieldType(tween.Animatable$(T))
    }));
    dart.defineExtensionMethods(_ChainedEvaluation, ['toString']);
    return _ChainedEvaluation;
  });
  tween._ChainedEvaluation = tween._ChainedEvaluation$();
  dart.addTypeTests(tween._ChainedEvaluation, _is__ChainedEvaluation_default);
  const _is_Tween_default = Symbol('_is_Tween_default');
  var begin$ = dart.privateName(tween, "Tween.begin");
  var end$ = dart.privateName(tween, "Tween.end");
  tween.Tween$ = dart.generic(T => {
    var TN = () => (TN = dart.constFn(dart.nullable(T)))();
    class Tween extends tween.Animatable$(T) {
      get begin() {
        return this[begin$];
      }
      set begin(value) {
        this[begin$] = TN().as(value);
      }
      get end() {
        return this[end$];
      }
      set end(value) {
        this[end$] = TN().as(value);
      }
      lerp(t) {
        if (t == null) dart.nullFailed(L6, 257, 17, "t");
        if (!(this.begin != null)) dart.assertFailed(null, L6, 258, 12, "begin != null");
        if (!(this.end != null)) dart.assertFailed(null, L6, 259, 12, "end != null");
        return T.as(dart.dsend(this.begin, '+', [dart.dsend(dart.dsend(this.end, '-', [this.begin]), '*', [t])]));
      }
      transform(t) {
        if (t == null) dart.nullFailed(L6, 276, 22, "t");
        if (t === 0.0) return T.as(this.begin);
        if (t === 1.0) return T.as(this.end);
        return this.lerp(t);
      }
      toString() {
        return dart.str(object.objectRuntimeType(this, "Animatable")) + "(" + dart.str(this.begin) + " → " + dart.str(this.end) + ")";
      }
    }
    (Tween.new = function(opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      this[begin$] = begin;
      this[end$] = end;
      Tween.__proto__.new.call(this);
      ;
    }).prototype = Tween.prototype;
    dart.addTypeTests(Tween);
    Tween.prototype[_is_Tween_default] = true;
    dart.addTypeCaches(Tween);
    dart.setMethodSignature(Tween, () => ({
      __proto__: dart.getMethods(Tween.__proto__),
      lerp: dart.fnType(T, [core.double]),
      transform: dart.fnType(T, [core.double])
    }));
    dart.setLibraryUri(Tween, L7);
    dart.setFieldSignature(Tween, () => ({
      __proto__: dart.getFields(Tween.__proto__),
      begin: dart.fieldType(dart.nullable(T)),
      end: dart.fieldType(dart.nullable(T))
    }));
    dart.defineExtensionMethods(Tween, ['toString']);
    return Tween;
  });
  tween.Tween = tween.Tween$();
  dart.addTypeTests(tween.Tween, _is_Tween_default);
  const _is_ReverseTween_default = Symbol('_is_ReverseTween_default');
  var parent$2 = dart.privateName(tween, "ReverseTween.parent");
  tween.ReverseTween$ = dart.generic(T => {
    class ReverseTween extends tween.Tween$(T) {
      get parent() {
        return this[parent$2];
      }
      set parent(value) {
        super.parent = value;
      }
      lerp(t) {
        if (t == null) dart.nullFailed(L6, 303, 17, "t");
        return this.parent.lerp(1.0 - dart.notNull(t));
      }
    }
    (ReverseTween.new = function(parent) {
      if (parent == null) dart.nullFailed(L6, 291, 21, "parent");
      this[parent$2] = parent;
      if (!(parent != null)) dart.assertFailed(null, L6, 292, 14, "parent != null");
      ReverseTween.__proto__.new.call(this, {begin: parent.end, end: parent.begin});
      ;
    }).prototype = ReverseTween.prototype;
    dart.addTypeTests(ReverseTween);
    ReverseTween.prototype[_is_ReverseTween_default] = true;
    dart.addTypeCaches(ReverseTween);
    dart.setLibraryUri(ReverseTween, L7);
    dart.setFieldSignature(ReverseTween, () => ({
      __proto__: dart.getFields(ReverseTween.__proto__),
      parent: dart.finalFieldType(tween.Tween$(T))
    }));
    return ReverseTween;
  });
  tween.ReverseTween = tween.ReverseTween$();
  dart.addTypeTests(tween.ReverseTween, _is_ReverseTween_default);
  tween.ColorTween = class ColorTween extends tween.Tween$(dart.nullable(ui.Color)) {
    lerp(t) {
      if (t == null) dart.nullFailed(L6, 329, 22, "t");
      return ui.Color.lerp(this.begin, this.end, t);
    }
  };
  (tween.ColorTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tween.ColorTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tween.ColorTween.prototype;
  dart.addTypeTests(tween.ColorTween);
  dart.addTypeCaches(tween.ColorTween);
  dart.setLibraryUri(tween.ColorTween, L7);
  tween.SizeTween = class SizeTween extends tween.Tween$(dart.nullable(ui.Size)) {
    lerp(t) {
      if (t == null) dart.nullFailed(L6, 349, 21, "t");
      return ui.Size.lerp(this.begin, this.end, t);
    }
  };
  (tween.SizeTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tween.SizeTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tween.SizeTween.prototype;
  dart.addTypeTests(tween.SizeTween);
  dart.addTypeCaches(tween.SizeTween);
  dart.setLibraryUri(tween.SizeTween, L7);
  tween.RectTween = class RectTween extends tween.Tween$(dart.nullable(ui.Rect)) {
    lerp(t) {
      if (t == null) dart.nullFailed(L6, 370, 21, "t");
      return ui.Rect.lerp(this.begin, this.end, t);
    }
  };
  (tween.RectTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tween.RectTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tween.RectTween.prototype;
  dart.addTypeTests(tween.RectTween);
  dart.addTypeCaches(tween.RectTween);
  dart.setLibraryUri(tween.RectTween, L7);
  tween.IntTween = class IntTween extends tween.Tween$(core.int) {
    lerp(t) {
      if (t == null) dart.nullFailed(L6, 398, 19, "t");
      return (dart.nullCheck(this.begin) + (dart.nullCheck(this.end) - dart.nullCheck(this.begin)) * dart.notNull(t))[$round]();
    }
  };
  (tween.IntTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tween.IntTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tween.IntTween.prototype;
  dart.addTypeTests(tween.IntTween);
  dart.addTypeCaches(tween.IntTween);
  dart.setLibraryUri(tween.IntTween, L7);
  tween.StepTween = class StepTween extends tween.Tween$(core.int) {
    lerp(t) {
      if (t == null) dart.nullFailed(L6, 426, 19, "t");
      return (dart.nullCheck(this.begin) + (dart.nullCheck(this.end) - dart.nullCheck(this.begin)) * dart.notNull(t))[$floor]();
    }
  };
  (tween.StepTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tween.StepTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tween.StepTween.prototype;
  dart.addTypeTests(tween.StepTween);
  dart.addTypeCaches(tween.StepTween);
  dart.setLibraryUri(tween.StepTween, L7);
  const _is_ConstantTween_default = Symbol('_is_ConstantTween_default');
  tween.ConstantTween$ = dart.generic(T => {
    class ConstantTween extends tween.Tween$(T) {
      lerp(t) {
        if (t == null) dart.nullFailed(L6, 436, 17, "t");
        return T.as(this.begin);
      }
      toString() {
        return dart.str(object.objectRuntimeType(this, "ReverseTween")) + "(value: " + dart.str(this.begin) + ")";
      }
    }
    (ConstantTween.new = function(value) {
      ConstantTween.__proto__.new.call(this, {begin: value, end: value});
      ;
    }).prototype = ConstantTween.prototype;
    dart.addTypeTests(ConstantTween);
    ConstantTween.prototype[_is_ConstantTween_default] = true;
    dart.addTypeCaches(ConstantTween);
    dart.setLibraryUri(ConstantTween, L7);
    dart.defineExtensionMethods(ConstantTween, ['toString']);
    return ConstantTween;
  });
  tween.ConstantTween = tween.ConstantTween$();
  dart.addTypeTests(tween.ConstantTween, _is_ConstantTween_default);
  var curve$0 = dart.privateName(tween, "CurveTween.curve");
  tween.CurveTween = class CurveTween extends tween.Animatable$(core.double) {
    get curve() {
      return this[curve$0];
    }
    set curve(value) {
      this[curve$0] = value;
    }
    transform(t) {
      if (t == null) dart.nullFailed(L6, 479, 27, "t");
      if (t === 0.0 || t === 1.0) {
        if (!(this.curve.transform(t)[$round]() === t)) dart.assertFailed(null, L6, 481, 14, "curve.transform(t).round() == t");
        return t;
      }
      return this.curve.transform(t);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "CurveTween")) + "(curve: " + dart.str(this.curve) + ")";
    }
  };
  (tween.CurveTween.new = function(opts) {
    let curve = opts && 'curve' in opts ? opts.curve : null;
    if (curve == null) dart.nullFailed(L6, 472, 30, "curve");
    this[curve$0] = curve;
    if (!(curve != null)) dart.assertFailed(null, L6, 473, 14, "curve != null");
    tween.CurveTween.__proto__.new.call(this);
    ;
  }).prototype = tween.CurveTween.prototype;
  dart.addTypeTests(tween.CurveTween);
  dart.addTypeCaches(tween.CurveTween);
  dart.setMethodSignature(tween.CurveTween, () => ({
    __proto__: dart.getMethods(tween.CurveTween.__proto__),
    transform: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(tween.CurveTween, L7);
  dart.setFieldSignature(tween.CurveTween, () => ({
    __proto__: dart.getFields(tween.CurveTween.__proto__),
    curve: dart.fieldType(curves.Curve)
  }));
  dart.defineExtensionMethods(tween.CurveTween, ['toString']);
  var C9;
  animation$.AnimationStatus = class AnimationStatus extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (animation$.AnimationStatus.new = function(index, _name) {
    if (index == null) dart.nullFailed(L3, 14, 6, "index");
    if (_name == null) dart.nullFailed(L3, 14, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = animation$.AnimationStatus.prototype;
  dart.addTypeTests(animation$.AnimationStatus);
  dart.addTypeCaches(animation$.AnimationStatus);
  dart.setLibraryUri(animation$.AnimationStatus, L4);
  dart.setFieldSignature(animation$.AnimationStatus, () => ({
    __proto__: dart.getFields(animation$.AnimationStatus.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(animation$.AnimationStatus, ['toString']);
  animation$.AnimationStatus.dismissed = C3 || CT.C3;
  animation$.AnimationStatus.forward = C0 || CT.C0;
  animation$.AnimationStatus.reverse = C1 || CT.C1;
  animation$.AnimationStatus.completed = C2 || CT.C2;
  animation$.AnimationStatus.values = C9 || CT.C9;
  dart.trackLibraries("packages/flutter/src/animation/listener_helpers.dart", {
    "package:flutter/src/animation/listener_helpers.dart": listener_helpers,
    "package:flutter/src/animation/animations.dart": animations,
    "package:flutter/src/animation/tween.dart": tween,
    "package:flutter/src/animation/animation.dart": animation$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["listener_helpers.dart","animation.dart","animations.dart","tween.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/animation/listener_helpers.dart.lib.js"}');
  // Exports:
  return {
    src__animation__listener_helpers: listener_helpers,
    src__animation__animations: animations,
    src__animation__tween: tween,
    src__animation__animation: animation$
  };
}));

//# sourceMappingURL=listener_helpers.dart.lib.js.map
