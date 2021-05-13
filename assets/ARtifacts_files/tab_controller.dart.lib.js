define(['dart_sdk', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/widgets/widget_span.dart'], (function load__packages__flutter__src__material__tab_controller_dart(dart_sdk, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__widgets__widget_span$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const ticker_provider = packages__flutter__src__widgets__widget_span$46dart.src__widgets__ticker_provider;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  var tab_controller = Object.create(dart.library);
  var $toDouble = dartx.toDouble;
  dart._checkModuleNullSafetyMode(false);
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/material/tab_controller.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/tab_controller.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.25,
        [Cubic_b]: 0.1,
        [Cubic_a]: 0.25
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 7,
        [_Location_line]: 441,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enabled",
        [_Location_column]: 7,
        [_Location_line]: 442,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 443,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], _LocationL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 440,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/tab_controller.dart"
      });
    }
  }, false);
  var _indexIsChangingCount = dart.privateName(tab_controller, "_indexIsChangingCount");
  var _index = dart.privateName(tab_controller, "_index");
  var _previousIndex = dart.privateName(tab_controller, "_previousIndex");
  var _animationController = dart.privateName(tab_controller, "_animationController");
  var _copyWith = dart.privateName(tab_controller, "_copyWith");
  var _changeIndex = dart.privateName(tab_controller, "_changeIndex");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  var C1;
  var length$ = dart.privateName(tab_controller, "TabController.length");
  tab_controller.TabController = class TabController extends change_notifier.ChangeNotifier {
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    [_copyWith](opts) {
      let t0, t0$, t0$0;
      let index = opts && 'index' in opts ? opts.index : null;
      let length = opts && 'length' in opts ? opts.length : null;
      let previousIndex = opts && 'previousIndex' in opts ? opts.previousIndex : null;
      return new tab_controller.TabController.__({index: (t0 = index, t0 == null ? this[_index] : t0), length: (t0$ = length, t0$ == null ? this.length : t0$), animationController: this[_animationController], previousIndex: (t0$0 = previousIndex, t0$0 == null ? this[_previousIndex] : t0$0)});
    }
    get animation() {
      let t0;
      t0 = this[_animationController];
      return t0 == null ? null : t0.view;
    }
    [_changeIndex](value, opts) {
      if (value == null) dart.nullFailed(L0, 210, 25, "value");
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : null;
      if (!(value != null)) dart.assertFailed(null, L0, 211, 12, "value != null");
      if (!(dart.notNull(value) >= 0 && (dart.notNull(value) < dart.notNull(this.length) || this.length === 0))) dart.assertFailed(null, L0, 212, 12, "value >= 0 && (value < length || length == 0)");
      if (!(duration != null || curve == null)) dart.assertFailed(null, L0, 213, 12, "duration != null || curve == null");
      if (!(dart.notNull(this[_indexIsChangingCount]) >= 0)) dart.assertFailed(null, L0, 214, 12, "_indexIsChangingCount >= 0");
      if (value == this[_index] || dart.notNull(this.length) < 2) return;
      this[_previousIndex] = this.index;
      this[_index] = value;
      if (duration != null) {
        this[_indexIsChangingCount] = dart.notNull(this[_indexIsChangingCount]) + 1;
        this.notifyListeners();
        dart.nullCheck(this[_animationController]).animateTo(this[_index][$toDouble](), {duration: duration, curve: dart.nullCheck(curve)}).whenCompleteOrCancel(dart.fn(() => {
          if (this[_animationController] != null) {
            this[_indexIsChangingCount] = dart.notNull(this[_indexIsChangingCount]) - 1;
            this.notifyListeners();
          }
        }, VoidTovoid()));
      } else {
        this[_indexIsChangingCount] = dart.notNull(this[_indexIsChangingCount]) + 1;
        dart.nullCheck(this[_animationController]).value = this[_index][$toDouble]();
        this[_indexIsChangingCount] = dart.notNull(this[_indexIsChangingCount]) - 1;
        this.notifyListeners();
      }
    }
    get index() {
      return this[_index];
    }
    set index(value) {
      if (value == null) dart.nullFailed(L0, 249, 17, "value");
      this[_changeIndex](value);
    }
    get previousIndex() {
      return this[_previousIndex];
    }
    get indexIsChanging() {
      return this[_indexIsChangingCount] !== 0;
    }
    animateTo(value, opts) {
      if (value == null) dart.nullFailed(L0, 273, 22, "value");
      let duration = opts && 'duration' in opts ? opts.duration : C0 || CT.C0;
      if (duration == null) dart.nullFailed(L0, 273, 40, "duration");
      let curve = opts && 'curve' in opts ? opts.curve : C1 || CT.C1;
      if (curve == null) dart.nullFailed(L0, 273, 77, "curve");
      this[_changeIndex](value, {duration: duration, curve: curve});
    }
    get offset() {
      return dart.notNull(dart.nullCheck(this[_animationController]).value) - this[_index][$toDouble]();
    }
    set offset(value) {
      if (value == null) dart.nullFailed(L0, 286, 21, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 287, 12, "value != null");
      if (!(dart.notNull(value) >= -1.0 && dart.notNull(value) <= 1.0)) dart.assertFailed(null, L0, 288, 12, "value >= -1.0 && value <= 1.0");
      if (!!dart.test(this.indexIsChanging)) dart.assertFailed(null, L0, 289, 12, "!indexIsChanging");
      if (value == this.offset) return;
      dart.nullCheck(this[_animationController]).value = dart.notNull(value) + this[_index][$toDouble]();
    }
    dispose() {
      let t0;
      t0 = this[_animationController];
      t0 == null ? null : t0.dispose();
      this[_animationController] = null;
      super.dispose();
    }
  };
  (tab_controller.TabController.new = function(opts) {
    let initialIndex = opts && 'initialIndex' in opts ? opts.initialIndex : 0;
    if (initialIndex == null) dart.nullFailed(L0, 149, 23, "initialIndex");
    let length = opts && 'length' in opts ? opts.length : null;
    if (length == null) dart.nullFailed(L0, 149, 55, "length");
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    if (vsync == null) dart.nullFailed(L0, 149, 87, "vsync");
    this[_indexIsChangingCount] = 0;
    this[length$] = length;
    if (!(length != null && dart.notNull(length) >= 0)) dart.assertFailed(null, L0, 150, 14, "length != null && length >= 0");
    if (!(initialIndex != null && dart.notNull(initialIndex) >= 0 && (length === 0 || dart.notNull(initialIndex) < dart.notNull(length)))) dart.assertFailed(null, L0, 151, 14, "initialIndex != null && initialIndex >= 0 && (length == 0 || initialIndex < length)");
    this[_index] = initialIndex;
    this[_previousIndex] = initialIndex;
    this[_animationController] = new animation_controller.AnimationController.unbounded({value: initialIndex[$toDouble](), vsync: vsync});
    tab_controller.TabController.__proto__.new.call(this);
    ;
  }).prototype = tab_controller.TabController.prototype;
  (tab_controller.TabController.__ = function(opts) {
    let index = opts && 'index' in opts ? opts.index : null;
    if (index == null) dart.nullFailed(L0, 162, 18, "index");
    let previousIndex = opts && 'previousIndex' in opts ? opts.previousIndex : null;
    if (previousIndex == null) dart.nullFailed(L0, 163, 18, "previousIndex");
    let animationController = opts && 'animationController' in opts ? opts.animationController : null;
    let length = opts && 'length' in opts ? opts.length : null;
    if (length == null) dart.nullFailed(L0, 165, 19, "length");
    this[_indexIsChangingCount] = 0;
    this[length$] = length;
    this[_index] = index;
    this[_previousIndex] = previousIndex;
    this[_animationController] = animationController;
    tab_controller.TabController.__proto__.new.call(this);
    ;
  }).prototype = tab_controller.TabController.prototype;
  dart.addTypeTests(tab_controller.TabController);
  dart.addTypeCaches(tab_controller.TabController);
  dart.setMethodSignature(tab_controller.TabController, () => ({
    __proto__: dart.getMethods(tab_controller.TabController.__proto__),
    [_copyWith]: dart.fnType(tab_controller.TabController, [], {}, {index: dart.nullable(core.int), length: dart.nullable(core.int), previousIndex: dart.nullable(core.int)}),
    [_changeIndex]: dart.fnType(dart.void, [core.int], {curve: dart.nullable(curves.Curve), duration: dart.nullable(core.Duration)}, {}),
    animateTo: dart.fnType(dart.void, [core.int], {curve: curves.Curve, duration: core.Duration}, {})
  }));
  dart.setGetterSignature(tab_controller.TabController, () => ({
    __proto__: dart.getGetters(tab_controller.TabController.__proto__),
    animation: dart.nullable(animation.Animation$(core.double)),
    index: core.int,
    previousIndex: core.int,
    indexIsChanging: core.bool,
    offset: core.double
  }));
  dart.setSetterSignature(tab_controller.TabController, () => ({
    __proto__: dart.getSetters(tab_controller.TabController.__proto__),
    index: core.int,
    offset: core.double
  }));
  dart.setLibraryUri(tab_controller.TabController, L1);
  dart.setFieldSignature(tab_controller.TabController, () => ({
    __proto__: dart.getFields(tab_controller.TabController.__proto__),
    [_animationController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    length: dart.finalFieldType(core.int),
    [_index]: dart.fieldType(core.int),
    [_previousIndex]: dart.fieldType(core.int),
    [_indexIsChangingCount]: dart.fieldType(core.int)
  }));
  var controller$ = dart.privateName(tab_controller, "_TabControllerScope.controller");
  var enabled$ = dart.privateName(tab_controller, "_TabControllerScope.enabled");
  tab_controller._TabControllerScope = class _TabControllerScope extends framework.InheritedWidget {
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get enabled() {
      return this[enabled$];
    }
    set enabled(value) {
      super.enabled = value;
    }
    updateShouldNotify(old) {
      tab_controller._TabControllerScope.as(old);
      if (old == null) dart.nullFailed(L0, 315, 47, "old");
      return !dart.equals(this.enabled, old.enabled) || !dart.equals(this.controller, old.controller);
    }
  };
  (tab_controller._TabControllerScope.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    if (controller == null) dart.nullFailed(L0, 306, 19, "controller");
    let enabled = opts && 'enabled' in opts ? opts.enabled : null;
    if (enabled == null) dart.nullFailed(L0, 307, 19, "enabled");
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L0, 308, 21, "child");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$] = controller;
    this[enabled$] = enabled;
    tab_controller._TabControllerScope.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = tab_controller._TabControllerScope.prototype;
  dart.addTypeTests(tab_controller._TabControllerScope);
  dart.addTypeCaches(tab_controller._TabControllerScope);
  dart.setMethodSignature(tab_controller._TabControllerScope, () => ({
    __proto__: dart.getMethods(tab_controller._TabControllerScope.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(tab_controller._TabControllerScope, L1);
  dart.setFieldSignature(tab_controller._TabControllerScope, () => ({
    __proto__: dart.getFields(tab_controller._TabControllerScope.__proto__),
    controller: dart.finalFieldType(tab_controller.TabController),
    enabled: dart.finalFieldType(core.bool)
  }));
  var length$0 = dart.privateName(tab_controller, "DefaultTabController.length");
  var initialIndex$ = dart.privateName(tab_controller, "DefaultTabController.initialIndex");
  var child$ = dart.privateName(tab_controller, "DefaultTabController.child");
  tab_controller.DefaultTabController = class DefaultTabController extends framework.StatefulWidget {
    get length() {
      return this[length$0];
    }
    set length(value) {
      super.length = value;
    }
    get initialIndex() {
      return this[initialIndex$];
    }
    set initialIndex(value) {
      super.initialIndex = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    static of(context) {
      let t0;
      if (context == null) dart.nullFailed(L0, 410, 41, "context");
      let scope = context.dependOnInheritedWidgetOfExactType(tab_controller._TabControllerScope);
      t0 = scope;
      return t0 == null ? null : t0.controller;
    }
    createState() {
      return new tab_controller._DefaultTabControllerState.new();
    }
  };
  (tab_controller.DefaultTabController.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let length = opts && 'length' in opts ? opts.length : null;
    if (length == null) dart.nullFailed(L0, 375, 19, "length");
    let initialIndex = opts && 'initialIndex' in opts ? opts.initialIndex : 0;
    if (initialIndex == null) dart.nullFailed(L0, 376, 10, "initialIndex");
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L0, 377, 19, "child");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[length$0] = length;
    this[initialIndex$] = initialIndex;
    this[child$] = child;
    if (!(initialIndex != null)) dart.assertFailed(null, L0, 378, 15, "initialIndex != null");
    if (!(dart.notNull(length) >= 0)) dart.assertFailed(null, L0, 379, 15, "length >= 0");
    if (!(length === 0 || dart.notNull(initialIndex) >= 0 && dart.notNull(initialIndex) < dart.notNull(length))) dart.assertFailed(null, L0, 380, 15, "length == 0 || (initialIndex >= 0 && initialIndex < length)");
    tab_controller.DefaultTabController.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = tab_controller.DefaultTabController.prototype;
  dart.addTypeTests(tab_controller.DefaultTabController);
  dart.addTypeCaches(tab_controller.DefaultTabController);
  dart.setMethodSignature(tab_controller.DefaultTabController, () => ({
    __proto__: dart.getMethods(tab_controller.DefaultTabController.__proto__),
    createState: dart.fnType(tab_controller._DefaultTabControllerState, [])
  }));
  dart.setLibraryUri(tab_controller.DefaultTabController, L1);
  dart.setFieldSignature(tab_controller.DefaultTabController, () => ({
    __proto__: dart.getFields(tab_controller.DefaultTabController.__proto__),
    length: dart.finalFieldType(core.int),
    initialIndex: dart.finalFieldType(core.int),
    child: dart.finalFieldType(framework.Widget)
  }));
  var ___DefaultTabControllerState__controller = dart.privateName(tab_controller, "_#_DefaultTabControllerState#_controller");
  var ___DefaultTabControllerState__controller_isSet = dart.privateName(tab_controller, "_#_DefaultTabControllerState#_controller#isSet");
  var _controller = dart.privateName(tab_controller, "_controller");
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C4;
  var C5;
  var C6;
  var C3;
  var C2;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(tab_controller.DefaultTabController) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(tab_controller.DefaultTabController)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(tab_controller.DefaultTabController));
  tab_controller._DefaultTabControllerState = class _DefaultTabControllerState extends State_SingleTickerProviderStateMixin$36 {
    get [_controller]() {
      let t0;
      return dart.test(this[___DefaultTabControllerState__controller_isSet]) ? (t0 = this[___DefaultTabControllerState__controller], t0) : dart.throw(new _internal.LateError.fieldNI("_controller"));
    }
    set [_controller](t0) {
      if (t0 == null) dart.nullFailed(L0, 420, 22, "null");
      this[___DefaultTabControllerState__controller_isSet] = true;
      this[___DefaultTabControllerState__controller] = t0;
    }
    initState() {
      super.initState();
      this[_controller] = new tab_controller.TabController.new({vsync: this, length: this.widget.length, initialIndex: this.widget.initialIndex});
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 439, 29, "context");
      return new tab_controller._TabControllerScope.new({controller: this[_controller], enabled: ticker_provider.TickerMode.of(context), child: this.widget.child, $creationLocationd_0dea112b090073317d4: C2 || CT.C2});
    }
    didUpdateWidget(oldWidget) {
      tab_controller.DefaultTabController.as(oldWidget);
      if (oldWidget == null) dart.nullFailed(L0, 448, 45, "oldWidget");
      super.didUpdateWidget(oldWidget);
      if (oldWidget.length != this.widget.length) {
        let newIndex = null;
        let previousIndex = this[_controller].previousIndex;
        if (dart.notNull(this[_controller].index) >= dart.notNull(this.widget.length)) {
          newIndex = math.max(core.int, 0, dart.notNull(this.widget.length) - 1);
          previousIndex = this[_controller].index;
        }
        this[_controller] = this[_controller][_copyWith]({length: this.widget.length, index: newIndex, previousIndex: previousIndex});
      }
    }
  };
  (tab_controller._DefaultTabControllerState.new = function() {
    this[___DefaultTabControllerState__controller] = null;
    this[___DefaultTabControllerState__controller_isSet] = false;
    tab_controller._DefaultTabControllerState.__proto__.new.call(this);
    ;
  }).prototype = tab_controller._DefaultTabControllerState.prototype;
  dart.addTypeTests(tab_controller._DefaultTabControllerState);
  dart.addTypeCaches(tab_controller._DefaultTabControllerState);
  dart.setMethodSignature(tab_controller._DefaultTabControllerState, () => ({
    __proto__: dart.getMethods(tab_controller._DefaultTabControllerState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(tab_controller._DefaultTabControllerState, () => ({
    __proto__: dart.getGetters(tab_controller._DefaultTabControllerState.__proto__),
    [_controller]: tab_controller.TabController
  }));
  dart.setSetterSignature(tab_controller._DefaultTabControllerState, () => ({
    __proto__: dart.getSetters(tab_controller._DefaultTabControllerState.__proto__),
    [_controller]: tab_controller.TabController
  }));
  dart.setLibraryUri(tab_controller._DefaultTabControllerState, L1);
  dart.setFieldSignature(tab_controller._DefaultTabControllerState, () => ({
    __proto__: dart.getFields(tab_controller._DefaultTabControllerState.__proto__),
    [___DefaultTabControllerState__controller]: dart.fieldType(dart.nullable(tab_controller.TabController)),
    [___DefaultTabControllerState__controller_isSet]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter/src/material/tab_controller.dart", {
    "package:flutter/src/material/tab_controller.dart": tab_controller
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tab_controller.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/tab_controller.dart.lib.js"}');
  // Exports:
  return {
    src__material__tab_controller: tab_controller
  };
}));

//# sourceMappingURL=tab_controller.dart.lib.js.map
