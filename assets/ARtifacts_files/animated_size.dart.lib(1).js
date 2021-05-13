define(['dart_sdk', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/rendering/shifted_box.dart', 'packages/flutter/src/scheduler/ticker.dart', 'packages/flutter/src/rendering/layer.dart'], (function load__packages__flutter__src__rendering__animated_size_dart(dart_sdk, packages__flutter__src__animation__curves$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__rendering__shifted_box$46dart, packages__flutter__src__scheduler__ticker$46dart, packages__flutter__src__rendering__layer$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  const animations = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animations;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const shifted_box = packages__flutter__src__rendering__shifted_box$46dart.src__rendering__shifted_box;
  const ticker = packages__flutter__src__scheduler__ticker$46dart.src__scheduler__ticker;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  var animated_size = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var RenderAnimatedSizeStateL = () => (RenderAnimatedSizeStateL = dart.constFn(dart.legacy(animated_size.RenderAnimatedSizeState)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/rendering/animated_size.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/animated_size.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: animated_size.RenderAnimatedSizeState.prototype,
        [_name$]: "RenderAnimatedSizeState.start",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: animated_size.RenderAnimatedSizeState.prototype,
        [_name$]: "RenderAnimatedSizeState.stable",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: animated_size.RenderAnimatedSizeState.prototype,
        [_name$]: "RenderAnimatedSizeState.changed",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: animated_size.RenderAnimatedSizeState.prototype,
        [_name$]: "RenderAnimatedSizeState.unstable",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], RenderAnimatedSizeStateL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name]: "Clip.hardEdge",
        index: 1
      });
    }
  }, false);
  var _name$ = dart.privateName(animated_size, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  animated_size.RenderAnimatedSizeState = class RenderAnimatedSizeState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (animated_size.RenderAnimatedSizeState.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 16, 6, "index");
    if (_name == null) dart.nullFailed(L0, 16, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = animated_size.RenderAnimatedSizeState.prototype;
  dart.addTypeTests(animated_size.RenderAnimatedSizeState);
  dart.addTypeCaches(animated_size.RenderAnimatedSizeState);
  dart.setLibraryUri(animated_size.RenderAnimatedSizeState, L1);
  dart.setFieldSignature(animated_size.RenderAnimatedSizeState, () => ({
    __proto__: dart.getFields(animated_size.RenderAnimatedSizeState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(animated_size.RenderAnimatedSizeState, ['toString']);
  animated_size.RenderAnimatedSizeState.start = C0 || CT.C0;
  animated_size.RenderAnimatedSizeState.stable = C1 || CT.C1;
  animated_size.RenderAnimatedSizeState.changed = C2 || CT.C2;
  animated_size.RenderAnimatedSizeState.unstable = C3 || CT.C3;
  animated_size.RenderAnimatedSizeState.values = C4 || CT.C4;
  var C5;
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var C6;
  var _name = dart.privateName(ui, "_name");
  var C7;
  var __RenderAnimatedSize__controller = dart.privateName(animated_size, "_#RenderAnimatedSize#_controller");
  var __RenderAnimatedSize__controller_isSet = dart.privateName(animated_size, "_#RenderAnimatedSize#_controller#isSet");
  var __RenderAnimatedSize__animation = dart.privateName(animated_size, "_#RenderAnimatedSize#_animation");
  var __RenderAnimatedSize__animation_isSet = dart.privateName(animated_size, "_#RenderAnimatedSize#_animation#isSet");
  var _sizeTween = dart.privateName(animated_size, "_sizeTween");
  var __RenderAnimatedSize__hasVisualOverflow = dart.privateName(animated_size, "_#RenderAnimatedSize#_hasVisualOverflow");
  var __RenderAnimatedSize__hasVisualOverflow_isSet = dart.privateName(animated_size, "_#RenderAnimatedSize#_hasVisualOverflow#isSet");
  var _lastValue = dart.privateName(animated_size, "_lastValue");
  var _state = dart.privateName(animated_size, "_state");
  var _clipBehavior = dart.privateName(animated_size, "_clipBehavior");
  var _clipRectLayer = dart.privateName(animated_size, "_clipRectLayer");
  var _vsync = dart.privateName(animated_size, "_vsync");
  var _controller = dart.privateName(animated_size, "_controller");
  var _animation = dart.privateName(animated_size, "_animation");
  var _hasVisualOverflow = dart.privateName(animated_size, "_hasVisualOverflow");
  var _animatedSize = dart.privateName(animated_size, "_animatedSize");
  var _layoutStart = dart.privateName(animated_size, "_layoutStart");
  var _layoutStable = dart.privateName(animated_size, "_layoutStable");
  var _layoutChanged = dart.privateName(animated_size, "_layoutChanged");
  var _layoutUnstable = dart.privateName(animated_size, "_layoutUnstable");
  var _restartAnimation = dart.privateName(animated_size, "_restartAnimation");
  animated_size.RenderAnimatedSize = class RenderAnimatedSize extends shifted_box.RenderAligningShiftedBox {
    get [_controller]() {
      let t0;
      return dart.test(this[__RenderAnimatedSize__controller_isSet]) ? (t0 = this[__RenderAnimatedSize__controller], t0) : dart.throw(new _internal.LateError.fieldNI("_controller"));
    }
    set [_controller](t0) {
      if (t0 == null) dart.nullFailed(L0, 107, 34, "null");
      if (dart.test(this[__RenderAnimatedSize__controller_isSet]))
        dart.throw(new _internal.LateError.fieldAI("_controller"));
      else {
        this[__RenderAnimatedSize__controller_isSet] = true;
        this[__RenderAnimatedSize__controller] = t0;
      }
    }
    get [_animation]() {
      let t1;
      return dart.test(this[__RenderAnimatedSize__animation_isSet]) ? (t1 = this[__RenderAnimatedSize__animation], t1) : dart.throw(new _internal.LateError.fieldNI("_animation"));
    }
    set [_animation](t1) {
      if (t1 == null) dart.nullFailed(L0, 108, 30, "null");
      if (dart.test(this[__RenderAnimatedSize__animation_isSet]))
        dart.throw(new _internal.LateError.fieldAI("_animation"));
      else {
        this[__RenderAnimatedSize__animation_isSet] = true;
        this[__RenderAnimatedSize__animation] = t1;
      }
    }
    get [_hasVisualOverflow]() {
      let t2;
      return dart.test(this[__RenderAnimatedSize__hasVisualOverflow_isSet]) ? (t2 = this[__RenderAnimatedSize__hasVisualOverflow], t2) : dart.throw(new _internal.LateError.fieldNI("_hasVisualOverflow"));
    }
    set [_hasVisualOverflow](t2) {
      if (t2 == null) dart.nullFailed(L0, 110, 13, "null");
      this[__RenderAnimatedSize__hasVisualOverflow_isSet] = true;
      this[__RenderAnimatedSize__hasVisualOverflow] = t2;
    }
    get state() {
      return this[_state];
    }
    get duration() {
      return dart.nullCheck(this[_controller].duration);
    }
    set duration(value) {
      if (value == null) dart.nullFailed(L0, 122, 25, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 123, 12, "value != null");
      if (dart.equals(value, this[_controller].duration)) return;
      this[_controller].duration = value;
    }
    get reverseDuration() {
      return this[_controller].reverseDuration;
    }
    set reverseDuration(value) {
      if (dart.equals(value, this[_controller].reverseDuration)) return;
      this[_controller].reverseDuration = value;
    }
    get curve() {
      return this[_animation].curve;
    }
    set curve(value) {
      if (value == null) dart.nullFailed(L0, 139, 19, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 140, 12, "value != null");
      if (dart.equals(value, this[_animation].curve)) return;
      this[_animation].curve = value;
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (value == null) dart.nullFailed(L0, 151, 25, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 152, 12, "value != null");
      if (!dart.equals(value, this[_clipBehavior])) {
        this[_clipBehavior] = value;
        this.markNeedsPaint();
        this.markNeedsSemanticsUpdate();
      }
    }
    get isAnimating() {
      return this[_controller].isAnimating;
    }
    get vsync() {
      return this[_vsync];
    }
    set vsync(value) {
      if (value == null) dart.nullFailed(L0, 169, 28, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 170, 12, "value != null");
      if (dart.equals(value, this[_vsync])) return;
      this[_vsync] = value;
      this[_controller].resync(this.vsync);
    }
    detach() {
      this[_controller].stop();
      super.detach();
    }
    get [_animatedSize]() {
      return this[_sizeTween].evaluate(this[_animation]);
    }
    performLayout() {
      let t3;
      this[_lastValue] = this[_controller].value;
      this[_hasVisualOverflow] = false;
      let constraints = this.constraints;
      if (this.child == null || dart.test(constraints.isTight)) {
        this[_controller].stop();
        this.size = this[_sizeTween].begin = this[_sizeTween].end = constraints.smallest;
        this[_state] = animated_size.RenderAnimatedSizeState.start;
        t3 = this.child;
        t3 == null ? null : t3.layout(constraints);
        return;
      }
      dart.nullCheck(this.child).layout(constraints, {parentUsesSize: true});
      if (!(this[_state] != null)) dart.assertFailed(null, L0, 202, 12, "_state != null");
      switch (this[_state]) {
        case C0 || CT.C0:
        {
          this[_layoutStart]();
          break;
        }
        case C1 || CT.C1:
        {
          this[_layoutStable]();
          break;
        }
        case C2 || CT.C2:
        {
          this[_layoutChanged]();
          break;
        }
        case C3 || CT.C3:
        {
          this[_layoutUnstable]();
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      this.size = constraints.constrain(dart.nullCheck(this[_animatedSize]));
      this.alignChild();
      if (dart.notNull(this.size.width) < dart.notNull(dart.nullCheck(this[_sizeTween].end).width) || dart.notNull(this.size.height) < dart.notNull(dart.nullCheck(this[_sizeTween].end).height)) this[_hasVisualOverflow] = true;
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 227, 40, "constraints");
      if (this.child == null || dart.test(constraints.isTight)) {
        return constraints.smallest;
      }
      let childSize = dart.nullCheck(this.child).getDryLayout(constraints);
      if (!(this[_state] != null)) dart.assertFailed(null, L0, 236, 12, "_state != null");
      switch (this[_state]) {
        case C0 || CT.C0:
        {
          return constraints.constrain(childSize);
        }
        case C1 || CT.C1:
        {
          if (!dart.equals(this[_sizeTween].end, childSize)) {
            return constraints.constrain(this.size);
          } else if (this[_controller].value == this[_controller].upperBound) {
            return constraints.constrain(childSize);
          }
          break;
        }
        case C3 || CT.C3:
        case C2 || CT.C2:
        {
          if (!dart.equals(this[_sizeTween].end, childSize)) {
            return constraints.constrain(childSize);
          }
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      return constraints.constrain(dart.nullCheck(this[_animatedSize]));
    }
    [_restartAnimation]() {
      this[_lastValue] = 0.0;
      this[_controller].forward({from: 0.0});
    }
    [_layoutStart]() {
      this[_sizeTween].begin = this[_sizeTween].end = this.debugAdoptSize(dart.nullCheck(this.child).size);
      this[_state] = animated_size.RenderAnimatedSizeState.stable;
    }
    [_layoutStable]() {
      if (!dart.equals(this[_sizeTween].end, dart.nullCheck(this.child).size)) {
        this[_sizeTween].begin = this.size;
        this[_sizeTween].end = this.debugAdoptSize(dart.nullCheck(this.child).size);
        this[_restartAnimation]();
        this[_state] = animated_size.RenderAnimatedSizeState.changed;
      } else if (this[_controller].value == this[_controller].upperBound) {
        this[_sizeTween].begin = this[_sizeTween].end = this.debugAdoptSize(dart.nullCheck(this.child).size);
      } else if (!dart.test(this[_controller].isAnimating)) {
        this[_controller].forward();
      }
    }
    [_layoutChanged]() {
      if (!dart.equals(this[_sizeTween].end, dart.nullCheck(this.child).size)) {
        this[_sizeTween].begin = this[_sizeTween].end = this.debugAdoptSize(dart.nullCheck(this.child).size);
        this[_restartAnimation]();
        this[_state] = animated_size.RenderAnimatedSizeState.unstable;
      } else {
        this[_state] = animated_size.RenderAnimatedSizeState.stable;
        if (!dart.test(this[_controller].isAnimating)) this[_controller].forward();
      }
    }
    [_layoutUnstable]() {
      if (!dart.equals(this[_sizeTween].end, dart.nullCheck(this.child).size)) {
        this[_sizeTween].begin = this[_sizeTween].end = this.debugAdoptSize(dart.nullCheck(this.child).size);
        this[_restartAnimation]();
      } else {
        this[_controller].stop();
        this[_state] = animated_size.RenderAnimatedSizeState.stable;
      }
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 327, 30, "context");
      if (offset == null) dart.nullFailed(L0, 327, 46, "offset");
      if (this.child != null && dart.test(this[_hasVisualOverflow]) && !dart.equals(this.clipBehavior, ui.Clip.none)) {
        let rect = ui.Offset.zero['&'](this.size);
        this[_clipRectLayer] = context.pushClipRect(this.needsCompositing, offset, rect, dart.bind(this, 'paint', super.paint), {clipBehavior: this.clipBehavior, oldLayer: this[_clipRectLayer]});
      } else {
        this[_clipRectLayer] = null;
        super.paint(context, offset);
      }
    }
  };
  (animated_size.RenderAnimatedSize.new = function(opts) {
    let t0;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    if (vsync == null) dart.nullFailed(L0, 78, 29, "vsync");
    let duration = opts && 'duration' in opts ? opts.duration : null;
    if (duration == null) dart.nullFailed(L0, 79, 23, "duration");
    let reverseDuration = opts && 'reverseDuration' in opts ? opts.reverseDuration : null;
    let curve = opts && 'curve' in opts ? opts.curve : C5 || CT.C5;
    if (curve == null) dart.nullFailed(L0, 81, 11, "curve");
    let alignment = opts && 'alignment' in opts ? opts.alignment : C6 || CT.C6;
    if (alignment == null) dart.nullFailed(L0, 82, 23, "alignment");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C7 || CT.C7;
    if (clipBehavior == null) dart.nullFailed(L0, 85, 10, "clipBehavior");
    this[__RenderAnimatedSize__controller] = null;
    this[__RenderAnimatedSize__controller_isSet] = false;
    this[__RenderAnimatedSize__animation] = null;
    this[__RenderAnimatedSize__animation_isSet] = false;
    this[_sizeTween] = new tween.SizeTween.new();
    this[__RenderAnimatedSize__hasVisualOverflow] = null;
    this[__RenderAnimatedSize__hasVisualOverflow_isSet] = false;
    this[_lastValue] = null;
    this[_state] = animated_size.RenderAnimatedSizeState.start;
    this[_clipBehavior] = ui.Clip.hardEdge;
    this[_clipRectLayer] = null;
    if (!(vsync != null)) dart.assertFailed(null, L0, 86, 15, "vsync != null");
    if (!(duration != null)) dart.assertFailed(null, L0, 87, 15, "duration != null");
    if (!(curve != null)) dart.assertFailed(null, L0, 88, 15, "curve != null");
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 89, 15, "clipBehavior != null");
    this[_vsync] = vsync;
    this[_clipBehavior] = clipBehavior;
    animated_size.RenderAnimatedSize.__proto__.new.call(this, {child: child, alignment: alignment, textDirection: textDirection});
    this[_controller] = (t0 = new animation_controller.AnimationController.new({vsync: vsync, duration: duration, reverseDuration: reverseDuration}), (() => {
      t0.addListener(dart.fn(() => {
        if (this[_controller].value != this[_lastValue]) this.markNeedsLayout();
      }, VoidTovoid()));
      return t0;
    })());
    this[_animation] = new animations.CurvedAnimation.new({parent: this[_controller], curve: curve});
  }).prototype = animated_size.RenderAnimatedSize.prototype;
  dart.addTypeTests(animated_size.RenderAnimatedSize);
  dart.addTypeCaches(animated_size.RenderAnimatedSize);
  dart.setMethodSignature(animated_size.RenderAnimatedSize, () => ({
    __proto__: dart.getMethods(animated_size.RenderAnimatedSize.__proto__),
    [_restartAnimation]: dart.fnType(dart.void, []),
    [_layoutStart]: dart.fnType(dart.void, []),
    [_layoutStable]: dart.fnType(dart.void, []),
    [_layoutChanged]: dart.fnType(dart.void, []),
    [_layoutUnstable]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(animated_size.RenderAnimatedSize, () => ({
    __proto__: dart.getGetters(animated_size.RenderAnimatedSize.__proto__),
    [_controller]: animation_controller.AnimationController,
    [_animation]: animations.CurvedAnimation,
    [_hasVisualOverflow]: core.bool,
    state: animated_size.RenderAnimatedSizeState,
    duration: core.Duration,
    reverseDuration: dart.nullable(core.Duration),
    curve: curves.Curve,
    clipBehavior: ui.Clip,
    isAnimating: core.bool,
    vsync: ticker.TickerProvider,
    [_animatedSize]: dart.nullable(ui.Size)
  }));
  dart.setSetterSignature(animated_size.RenderAnimatedSize, () => ({
    __proto__: dart.getSetters(animated_size.RenderAnimatedSize.__proto__),
    [_controller]: animation_controller.AnimationController,
    [_animation]: animations.CurvedAnimation,
    [_hasVisualOverflow]: core.bool,
    duration: core.Duration,
    reverseDuration: dart.nullable(core.Duration),
    curve: curves.Curve,
    clipBehavior: ui.Clip,
    vsync: ticker.TickerProvider
  }));
  dart.setLibraryUri(animated_size.RenderAnimatedSize, L1);
  dart.setFieldSignature(animated_size.RenderAnimatedSize, () => ({
    __proto__: dart.getFields(animated_size.RenderAnimatedSize.__proto__),
    [__RenderAnimatedSize__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [__RenderAnimatedSize__controller_isSet]: dart.fieldType(core.bool),
    [__RenderAnimatedSize__animation]: dart.fieldType(dart.nullable(animations.CurvedAnimation)),
    [__RenderAnimatedSize__animation_isSet]: dart.fieldType(core.bool),
    [_sizeTween]: dart.finalFieldType(tween.SizeTween),
    [__RenderAnimatedSize__hasVisualOverflow]: dart.fieldType(dart.nullable(core.bool)),
    [__RenderAnimatedSize__hasVisualOverflow_isSet]: dart.fieldType(core.bool),
    [_lastValue]: dart.fieldType(dart.nullable(core.double)),
    [_state]: dart.fieldType(animated_size.RenderAnimatedSizeState),
    [_clipBehavior]: dart.fieldType(ui.Clip),
    [_vsync]: dart.fieldType(ticker.TickerProvider),
    [_clipRectLayer]: dart.fieldType(dart.nullable(layer.ClipRectLayer))
  }));
  dart.trackLibraries("packages/flutter/src/rendering/animated_size.dart", {
    "package:flutter/src/rendering/animated_size.dart": animated_size
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["animated_size.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/animated_size.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__animated_size: animated_size
  };
}));

//# sourceMappingURL=animated_size.dart.lib.js.map
