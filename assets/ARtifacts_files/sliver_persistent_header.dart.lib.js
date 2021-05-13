define(['dart_sdk', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/painting/matrix_utils.dart', 'packages/flutter/src/scheduler/ticker.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/rendering/viewport_offset.dart'], (function load__packages__flutter__src__rendering__sliver_persistent_header_dart(dart_sdk, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__painting__matrix_utils$46dart, packages__flutter__src__scheduler__ticker$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__rendering__viewport_offset$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const sliver = packages__flutter__src__rendering__sliver$46dart.src__rendering__sliver;
  const viewport = packages__flutter__src__rendering__sliver$46dart.src__rendering__viewport;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const matrix_utils = packages__flutter__src__painting__matrix_utils$46dart.src__painting__matrix_utils;
  const ticker = packages__flutter__src__scheduler__ticker$46dart.src__scheduler__ticker;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const viewport_offset = packages__flutter__src__rendering__viewport_offset$46dart.src__rendering__viewport_offset;
  var sliver_persistent_header = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $abs = dartx.abs;
  var $clamp = dartx.clamp;
  dart._checkModuleNullSafetyMode(false);
  var SliverConstraintsTovoid = () => (SliverConstraintsTovoid = dart.constFn(dart.fnType(dart.void, [sliver.SliverConstraints])))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var VoidTodouble = () => (VoidTodouble = dart.constFn(dart.fnType(core.double, [])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/sliver_persistent_header.dart";
  var L1 = "package:flutter/src/rendering/sliver_persistent_header.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.vertical",
        index: 1
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.horizontal",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.up",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.down",
        index: 2
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.left",
        index: 3
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.right",
        index: 1
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration.prototype,
        [maxShowOnScreenExtent$]: 1 / 0,
        [minShowOnScreenExtent$]: -1 / 0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.25,
        [Cubic_b]: 0.1,
        [Cubic_a]: 0.25
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    }
  }, false);
  var stretchTriggerOffset$ = dart.privateName(sliver_persistent_header, "OverScrollHeaderStretchConfiguration.stretchTriggerOffset");
  var onStretchTrigger$ = dart.privateName(sliver_persistent_header, "OverScrollHeaderStretchConfiguration.onStretchTrigger");
  sliver_persistent_header.OverScrollHeaderStretchConfiguration = class OverScrollHeaderStretchConfiguration extends core.Object {
    get stretchTriggerOffset() {
      return this[stretchTriggerOffset$];
    }
    set stretchTriggerOffset(value) {
      super.stretchTriggerOffset = value;
    }
    get onStretchTrigger() {
      return this[onStretchTrigger$];
    }
    set onStretchTrigger(value) {
      super.onStretchTrigger = value;
    }
  };
  (sliver_persistent_header.OverScrollHeaderStretchConfiguration.new = function(opts) {
    let stretchTriggerOffset = opts && 'stretchTriggerOffset' in opts ? opts.stretchTriggerOffset : 100;
    if (stretchTriggerOffset == null) dart.nullFailed(L0, 39, 10, "stretchTriggerOffset");
    let onStretchTrigger = opts && 'onStretchTrigger' in opts ? opts.onStretchTrigger : null;
    this[stretchTriggerOffset$] = stretchTriggerOffset;
    this[onStretchTrigger$] = onStretchTrigger;
    if (!(stretchTriggerOffset != null)) dart.assertFailed(null, L0, 41, 15, "stretchTriggerOffset != null");
    ;
  }).prototype = sliver_persistent_header.OverScrollHeaderStretchConfiguration.prototype;
  dart.addTypeTests(sliver_persistent_header.OverScrollHeaderStretchConfiguration);
  dart.addTypeCaches(sliver_persistent_header.OverScrollHeaderStretchConfiguration);
  dart.setLibraryUri(sliver_persistent_header.OverScrollHeaderStretchConfiguration, L1);
  dart.setFieldSignature(sliver_persistent_header.OverScrollHeaderStretchConfiguration, () => ({
    __proto__: dart.getFields(sliver_persistent_header.OverScrollHeaderStretchConfiguration.__proto__),
    stretchTriggerOffset: dart.finalFieldType(core.double),
    onStretchTrigger: dart.finalFieldType(dart.nullable(dart.fnType(async.Future$(dart.void), [])))
  }));
  var minShowOnScreenExtent$ = dart.privateName(sliver_persistent_header, "PersistentHeaderShowOnScreenConfiguration.minShowOnScreenExtent");
  var maxShowOnScreenExtent$ = dart.privateName(sliver_persistent_header, "PersistentHeaderShowOnScreenConfiguration.maxShowOnScreenExtent");
  sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration = class PersistentHeaderShowOnScreenConfiguration extends core.Object {
    get minShowOnScreenExtent() {
      return this[minShowOnScreenExtent$];
    }
    set minShowOnScreenExtent(value) {
      super.minShowOnScreenExtent = value;
    }
    get maxShowOnScreenExtent() {
      return this[maxShowOnScreenExtent$];
    }
    set maxShowOnScreenExtent(value) {
      super.maxShowOnScreenExtent = value;
    }
  };
  (sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration.new = function(opts) {
    let minShowOnScreenExtent = opts && 'minShowOnScreenExtent' in opts ? opts.minShowOnScreenExtent : -1 / 0;
    if (minShowOnScreenExtent == null) dart.nullFailed(L0, 60, 10, "minShowOnScreenExtent");
    let maxShowOnScreenExtent = opts && 'maxShowOnScreenExtent' in opts ? opts.maxShowOnScreenExtent : 1 / 0;
    if (maxShowOnScreenExtent == null) dart.nullFailed(L0, 61, 10, "maxShowOnScreenExtent");
    this[minShowOnScreenExtent$] = minShowOnScreenExtent;
    this[maxShowOnScreenExtent$] = maxShowOnScreenExtent;
    if (!(dart.notNull(minShowOnScreenExtent) <= dart.notNull(maxShowOnScreenExtent))) dart.assertFailed(null, L0, 62, 15, "minShowOnScreenExtent <= maxShowOnScreenExtent");
    ;
  }).prototype = sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration.prototype;
  dart.addTypeTests(sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration);
  dart.addTypeCaches(sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration);
  dart.setLibraryUri(sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration, L1);
  dart.setFieldSignature(sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration, () => ({
    __proto__: dart.getFields(sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration.__proto__),
    minShowOnScreenExtent: dart.finalFieldType(core.double),
    maxShowOnScreenExtent: dart.finalFieldType(core.double)
  }));
  var __RenderSliverPersistentHeader__lastStretchOffset = dart.privateName(sliver_persistent_header, "_#RenderSliverPersistentHeader#_lastStretchOffset");
  var __RenderSliverPersistentHeader__lastStretchOffset_isSet = dart.privateName(sliver_persistent_header, "_#RenderSliverPersistentHeader#_lastStretchOffset#isSet");
  var _needsUpdateChild = dart.privateName(sliver_persistent_header, "_needsUpdateChild");
  var _lastShrinkOffset = dart.privateName(sliver_persistent_header, "_lastShrinkOffset");
  var _lastOverlapsContent = dart.privateName(sliver_persistent_header, "_lastOverlapsContent");
  var _lastStretchOffset = dart.privateName(sliver_persistent_header, "_lastStretchOffset");
  var _name = dart.privateName(basic_types, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var stretchConfiguration$ = dart.privateName(sliver_persistent_header, "RenderSliverPersistentHeader.stretchConfiguration");
  const RenderSliver_RenderObjectWithChildMixin$36 = class RenderSliver_RenderObjectWithChildMixin extends sliver.RenderSliver {};
  (RenderSliver_RenderObjectWithChildMixin$36.new = function() {
    object.RenderObjectWithChildMixin$(box.RenderBox)[dart.mixinNew].call(this);
    RenderSliver_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderSliver_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderSliver_RenderObjectWithChildMixin$36, object.RenderObjectWithChildMixin$(box.RenderBox));
  const RenderSliver_RenderSliverHelpers$36 = class RenderSliver_RenderSliverHelpers extends RenderSliver_RenderObjectWithChildMixin$36 {};
  (RenderSliver_RenderSliverHelpers$36.new = function() {
    RenderSliver_RenderSliverHelpers$36.__proto__.new.call(this);
  }).prototype = RenderSliver_RenderSliverHelpers$36.prototype;
  dart.applyMixin(RenderSliver_RenderSliverHelpers$36, sliver.RenderSliverHelpers);
  sliver_persistent_header.RenderSliverPersistentHeader = class RenderSliverPersistentHeader extends RenderSliver_RenderSliverHelpers$36 {
    get stretchConfiguration() {
      return this[stretchConfiguration$];
    }
    set stretchConfiguration(value) {
      this[stretchConfiguration$] = value;
    }
    get [_lastStretchOffset]() {
      let t0;
      return dart.test(this[__RenderSliverPersistentHeader__lastStretchOffset_isSet]) ? (t0 = this[__RenderSliverPersistentHeader__lastStretchOffset], t0) : dart.throw(new _internal.LateError.fieldNI("_lastStretchOffset"));
    }
    set [_lastStretchOffset](t0) {
      if (t0 == null) dart.nullFailed(L0, 133, 15, "null");
      this[__RenderSliverPersistentHeader__lastStretchOffset_isSet] = true;
      this[__RenderSliverPersistentHeader__lastStretchOffset] = t0;
    }
    get childExtent() {
      if (this.child == null) return 0.0;
      if (!dart.test(dart.nullCheck(this.child).hasSize)) dart.assertFailed(null, L0, 154, 12, "child!.hasSize");
      if (!(this.constraints.axis != null)) dart.assertFailed(null, L0, 155, 12, "constraints.axis != null");
      switch (this.constraints.axis) {
        case C0 || CT.C0:
        {
          return dart.nullCheck(this.child).size.height;
        }
        case C1 || CT.C1:
        {
          return dart.nullCheck(this.child).size.width;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    updateChild(shrinkOffset, overlapsContent) {
      if (shrinkOffset == null) dart.nullFailed(L0, 200, 27, "shrinkOffset");
      if (overlapsContent == null) dart.nullFailed(L0, 200, 46, "overlapsContent");
    }
    markNeedsLayout() {
      this[_needsUpdateChild] = true;
      super.markNeedsLayout();
    }
    layoutChild(scrollOffset, maxExtent, opts) {
      let t1;
      if (scrollOffset == null) dart.nullFailed(L0, 219, 27, "scrollOffset");
      if (maxExtent == null) dart.nullFailed(L0, 219, 48, "maxExtent");
      let overlapsContent = opts && 'overlapsContent' in opts ? opts.overlapsContent : false;
      if (overlapsContent == null) dart.nullFailed(L0, 219, 66, "overlapsContent");
      if (!(maxExtent != null)) dart.assertFailed(null, L0, 220, 12, "maxExtent != null");
      let shrinkOffset = math.min(core.double, scrollOffset, maxExtent);
      if (dart.test(this[_needsUpdateChild]) || this[_lastShrinkOffset] !== shrinkOffset || !dart.equals(this[_lastOverlapsContent], overlapsContent)) {
        this.invokeLayoutCallback(sliver.SliverConstraints, dart.fn(constraints => {
          if (constraints == null) dart.nullFailed(L0, 223, 66, "constraints");
          if (!dart.equals(constraints, this.constraints)) dart.assertFailed(null, L0, 224, 16, "constraints == this.constraints");
          this.updateChild(shrinkOffset, overlapsContent);
        }, SliverConstraintsTovoid()));
        this[_lastShrinkOffset] = shrinkOffset;
        this[_lastOverlapsContent] = overlapsContent;
        this[_needsUpdateChild] = false;
      }
      if (!(this.minExtent != null)) dart.assertFailed(null, L0, 231, 12, "minExtent != null");
      if (!dart.test(dart.fn(() => {
        if (dart.notNull(this.minExtent) <= dart.notNull(maxExtent)) return true;
        dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The maxExtent for this " + dart.str(this[$runtimeType]) + " is less than its minExtent."), new diagnostics.DoubleProperty.new("The specified maxExtent was", maxExtent), new diagnostics.DoubleProperty.new("The specified minExtent was", this.minExtent)])));
      }, VoidTobool())())) dart.assertFailed(null, L0, 232, 12, "() {\n      if (minExtent <= maxExtent)\n        return true;\n      throw FlutterError.fromParts(<DiagnosticsNode>[\n        ErrorSummary('The maxExtent for this $runtimeType is less than its minExtent.'),\n        DoubleProperty('The specified maxExtent was', maxExtent),\n        DoubleProperty('The specified minExtent was', minExtent),\n      ]);\n    }()");
      let stretchOffset = 0.0;
      if (this.stretchConfiguration != null && this.constraints.scrollOffset === 0.0) {
        stretchOffset = stretchOffset + this.constraints.overlap[$abs]();
      }
      t1 = this.child;
      t1 == null ? null : t1.layout(this.constraints.asBoxConstraints({maxExtent: math.max(core.double, this.minExtent, dart.notNull(maxExtent) - shrinkOffset) + stretchOffset}), {parentUsesSize: true});
      if (this.stretchConfiguration != null && dart.nullCheck(this.stretchConfiguration).onStretchTrigger != null && stretchOffset >= dart.notNull(dart.nullCheck(this.stretchConfiguration).stretchTriggerOffset) && dart.notNull(this[_lastStretchOffset]) <= dart.notNull(dart.nullCheck(this.stretchConfiguration).stretchTriggerOffset)) {
        dart.nullCheck(dart.nullCheck(this.stretchConfiguration).onStretchTrigger)();
      }
      this[_lastStretchOffset] = stretchOffset;
    }
    childMainAxisPosition(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 283, 55, "child");
      return super.childMainAxisPosition(child);
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L0, 286, 44, "result");
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      if (mainAxisPosition == null) dart.nullFailed(L0, 286, 70, "mainAxisPosition");
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      if (crossAxisPosition == null) dart.nullFailed(L0, 286, 104, "crossAxisPosition");
      if (!(dart.notNull(dart.nullCheck(this.geometry).hitTestExtent) > 0.0)) dart.assertFailed(null, L0, 287, 12, "geometry!.hitTestExtent > 0.0");
      if (this.child != null) return this.hitTestBoxChild(new box.BoxHitTestResult.wrap(result), dart.nullCheck(this.child), {mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition});
      return false;
    }
    applyPaintTransform(child, transform) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 294, 41, "child");
      if (transform == null) dart.nullFailed(L0, 294, 56, "transform");
      if (!(child != null)) dart.assertFailed(null, L0, 295, 12, "child != null");
      if (!dart.equals(child, this.child)) dart.assertFailed(null, L0, 296, 12, "child == this.child");
      this.applyPaintTransformForBoxChild(box.RenderBox.as(child), transform);
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 301, 30, "context");
      if (offset == null) dart.nullFailed(L0, 301, 46, "offset");
      if (this.child != null && dart.test(dart.nullCheck(this.geometry).visible)) {
        if (!(this.constraints.axisDirection != null)) dart.assertFailed(null, L0, 303, 14, "constraints.axisDirection != null");
        switch (sliver.applyGrowthDirectionToAxisDirection(this.constraints.axisDirection, this.constraints.growthDirection)) {
          case C2 || CT.C2:
          {
            offset = offset['+'](new ui.Offset.new(0.0, dart.notNull(dart.nullCheck(this.geometry).paintExtent) - dart.notNull(this.childMainAxisPosition(dart.nullCheck(this.child))) - dart.notNull(this.childExtent)));
            break;
          }
          case C3 || CT.C3:
          {
            offset = offset['+'](new ui.Offset.new(0.0, this.childMainAxisPosition(dart.nullCheck(this.child))));
            break;
          }
          case C4 || CT.C4:
          {
            offset = offset['+'](new ui.Offset.new(dart.notNull(dart.nullCheck(this.geometry).paintExtent) - dart.notNull(this.childMainAxisPosition(dart.nullCheck(this.child))) - dart.notNull(this.childExtent), 0.0));
            break;
          }
          case C5 || CT.C5:
          {
            offset = offset['+'](new ui.Offset.new(this.childMainAxisPosition(dart.nullCheck(this.child)), 0.0));
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        context.paintChild(dart.nullCheck(this.child), offset);
      }
    }
    describeSemanticsConfiguration(config) {
      if (config == null) dart.nullFailed(L0, 323, 62, "config");
      super.describeSemanticsConfiguration(config);
      config.addTagForChildren(viewport.RenderViewport.excludeFromScrolling);
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 329, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.lazy("maxExtent", dart.fn(() => this.maxExtent, VoidTodouble())));
      properties.add(new diagnostics.DoubleProperty.lazy("child position", dart.fn(() => this.childMainAxisPosition(dart.nullCheck(this.child)), VoidTodouble())));
    }
  };
  (sliver_persistent_header.RenderSliverPersistentHeader.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
    this[__RenderSliverPersistentHeader__lastStretchOffset] = null;
    this[__RenderSliverPersistentHeader__lastStretchOffset_isSet] = false;
    this[_needsUpdateChild] = true;
    this[_lastShrinkOffset] = 0.0;
    this[_lastOverlapsContent] = false;
    this[stretchConfiguration$] = stretchConfiguration;
    sliver_persistent_header.RenderSliverPersistentHeader.__proto__.new.call(this);
    this.child = child;
  }).prototype = sliver_persistent_header.RenderSliverPersistentHeader.prototype;
  dart.addTypeTests(sliver_persistent_header.RenderSliverPersistentHeader);
  dart.addTypeCaches(sliver_persistent_header.RenderSliverPersistentHeader);
  dart.setMethodSignature(sliver_persistent_header.RenderSliverPersistentHeader, () => ({
    __proto__: dart.getMethods(sliver_persistent_header.RenderSliverPersistentHeader.__proto__),
    updateChild: dart.fnType(dart.void, [core.double, core.bool]),
    layoutChild: dart.fnType(dart.void, [core.double, core.double], {overlapsContent: core.bool}, {})
  }));
  dart.setGetterSignature(sliver_persistent_header.RenderSliverPersistentHeader, () => ({
    __proto__: dart.getGetters(sliver_persistent_header.RenderSliverPersistentHeader.__proto__),
    [_lastStretchOffset]: core.double,
    childExtent: core.double
  }));
  dart.setSetterSignature(sliver_persistent_header.RenderSliverPersistentHeader, () => ({
    __proto__: dart.getSetters(sliver_persistent_header.RenderSliverPersistentHeader.__proto__),
    [_lastStretchOffset]: core.double
  }));
  dart.setLibraryUri(sliver_persistent_header.RenderSliverPersistentHeader, L1);
  dart.setFieldSignature(sliver_persistent_header.RenderSliverPersistentHeader, () => ({
    __proto__: dart.getFields(sliver_persistent_header.RenderSliverPersistentHeader.__proto__),
    [__RenderSliverPersistentHeader__lastStretchOffset]: dart.fieldType(dart.nullable(core.double)),
    [__RenderSliverPersistentHeader__lastStretchOffset_isSet]: dart.fieldType(core.bool),
    [_needsUpdateChild]: dart.fieldType(core.bool),
    [_lastShrinkOffset]: dart.fieldType(core.double),
    [_lastOverlapsContent]: dart.fieldType(core.bool),
    stretchConfiguration: dart.fieldType(dart.nullable(sliver_persistent_header.OverScrollHeaderStretchConfiguration))
  }));
  var _childPosition = dart.privateName(sliver_persistent_header, "_childPosition");
  sliver_persistent_header.RenderSliverScrollingPersistentHeader = class RenderSliverScrollingPersistentHeader extends sliver_persistent_header.RenderSliverPersistentHeader {
    updateGeometry() {
      let stretchOffset = 0.0;
      if (this.stretchConfiguration != null && this[_childPosition] === 0.0) {
        stretchOffset = stretchOffset + this.constraints.overlap[$abs]();
      }
      let maxExtent = this.maxExtent;
      let paintExtent = dart.notNull(maxExtent) - dart.notNull(this.constraints.scrollOffset);
      this.geometry = new sliver.SliverGeometry.new({scrollExtent: maxExtent, paintOrigin: math.min(core.double, this.constraints.overlap, 0.0), paintExtent: paintExtent[$clamp](0.0, this.constraints.remainingPaintExtent), maxPaintExtent: dart.notNull(maxExtent) + stretchOffset, hasVisualOverflow: true});
      return stretchOffset > 0 ? 0.0 : math.min(core.double, 0.0, paintExtent - dart.notNull(this.childExtent));
    }
    performLayout() {
      let constraints = this.constraints;
      let maxExtent = this.maxExtent;
      this.layoutChild(constraints.scrollOffset, maxExtent);
      let paintExtent = dart.notNull(maxExtent) - dart.notNull(constraints.scrollOffset);
      this.geometry = new sliver.SliverGeometry.new({scrollExtent: maxExtent, paintOrigin: math.min(core.double, constraints.overlap, 0.0), paintExtent: paintExtent[$clamp](0.0, constraints.remainingPaintExtent), maxPaintExtent: maxExtent, hasVisualOverflow: true});
      this[_childPosition] = this.updateGeometry();
    }
    childMainAxisPosition(child) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L0, 395, 42, "child");
      if (!dart.equals(child, this.child)) dart.assertFailed(null, L0, 396, 12, "child == this.child");
      if (!(this[_childPosition] != null)) dart.assertFailed(null, L0, 397, 12, "_childPosition != null");
      return dart.nullCheck(this[_childPosition]);
    }
  };
  (sliver_persistent_header.RenderSliverScrollingPersistentHeader.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
    this[_childPosition] = null;
    sliver_persistent_header.RenderSliverScrollingPersistentHeader.__proto__.new.call(this, {child: child, stretchConfiguration: stretchConfiguration});
    ;
  }).prototype = sliver_persistent_header.RenderSliverScrollingPersistentHeader.prototype;
  dart.addTypeTests(sliver_persistent_header.RenderSliverScrollingPersistentHeader);
  dart.addTypeCaches(sliver_persistent_header.RenderSliverScrollingPersistentHeader);
  dart.setMethodSignature(sliver_persistent_header.RenderSliverScrollingPersistentHeader, () => ({
    __proto__: dart.getMethods(sliver_persistent_header.RenderSliverScrollingPersistentHeader.__proto__),
    updateGeometry: dart.fnType(core.double, []),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(sliver_persistent_header.RenderSliverScrollingPersistentHeader, L1);
  dart.setFieldSignature(sliver_persistent_header.RenderSliverScrollingPersistentHeader, () => ({
    __proto__: dart.getFields(sliver_persistent_header.RenderSliverScrollingPersistentHeader.__proto__),
    [_childPosition]: dart.fieldType(dart.nullable(core.double))
  }));
  var C6;
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C7;
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  var C8;
  var showOnScreenConfiguration$ = dart.privateName(sliver_persistent_header, "RenderSliverPinnedPersistentHeader.showOnScreenConfiguration");
  sliver_persistent_header.RenderSliverPinnedPersistentHeader = class RenderSliverPinnedPersistentHeader extends sliver_persistent_header.RenderSliverPersistentHeader {
    get showOnScreenConfiguration() {
      return this[showOnScreenConfiguration$];
    }
    set showOnScreenConfiguration(value) {
      this[showOnScreenConfiguration$] = value;
    }
    performLayout() {
      let constraints = this.constraints;
      let maxExtent = this.maxExtent;
      let overlapsContent = dart.notNull(constraints.overlap) > 0.0;
      this.layoutChild(constraints.scrollOffset, maxExtent, {overlapsContent: overlapsContent});
      let effectiveRemainingPaintExtent = math.max(core.double, 0.0, dart.notNull(constraints.remainingPaintExtent) - dart.notNull(constraints.overlap));
      let layoutExtent = (dart.notNull(maxExtent) - dart.notNull(constraints.scrollOffset))[$clamp](0.0, effectiveRemainingPaintExtent);
      let stretchOffset = this.stretchConfiguration != null ? constraints.overlap[$abs]() : 0.0;
      this.geometry = new sliver.SliverGeometry.new({scrollExtent: maxExtent, paintOrigin: constraints.overlap, paintExtent: math.min(core.double, this.childExtent, effectiveRemainingPaintExtent), layoutExtent: layoutExtent, maxPaintExtent: dart.notNull(maxExtent) + stretchOffset, maxScrollObstructionExtent: this.minExtent, cacheExtent: layoutExtent > 0.0 ? -dart.notNull(constraints.cacheOrigin) + layoutExtent : layoutExtent, hasVisualOverflow: true});
    }
    childMainAxisPosition(child) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L0, 449, 42, "child");
      return 0.0;
    }
    showOnScreen(opts) {
      let t1;
      let descendant = opts && 'descendant' in opts ? opts.descendant : null;
      let rect = opts && 'rect' in opts ? opts.rect : null;
      let duration = opts && 'duration' in opts ? opts.duration : C7 || CT.C7;
      if (duration == null) dart.nullFailed(L0, 455, 14, "duration");
      let curve = opts && 'curve' in opts ? opts.curve : C8 || CT.C8;
      if (curve == null) dart.nullFailed(L0, 456, 11, "curve");
      let localBounds = descendant != null ? matrix_utils.MatrixUtils.transformRect(descendant.getTransformTo(this), (t1 = rect, t1 == null ? descendant.paintBounds : t1)) : rect;
      let newRect = null;
      switch (sliver.applyGrowthDirectionToAxisDirection(this.constraints.axisDirection, this.constraints.growthDirection)) {
        case C2 || CT.C2:
        {
          newRect = sliver_persistent_header._trim(localBounds, {bottom: this.childExtent});
          break;
        }
        case C5 || CT.C5:
        {
          newRect = sliver_persistent_header._trim(localBounds, {left: 0.0});
          break;
        }
        case C3 || CT.C3:
        {
          newRect = sliver_persistent_header._trim(localBounds, {top: 0.0});
          break;
        }
        case C4 || CT.C4:
        {
          newRect = sliver_persistent_header._trim(localBounds, {right: this.childExtent});
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      super.showOnScreen({descendant: this, rect: newRect, duration: duration, curve: curve});
    }
  };
  (sliver_persistent_header.RenderSliverPinnedPersistentHeader.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
    let showOnScreenConfiguration = opts && 'showOnScreenConfiguration' in opts ? opts.showOnScreenConfiguration : C6 || CT.C6;
    this[showOnScreenConfiguration$] = showOnScreenConfiguration;
    sliver_persistent_header.RenderSliverPinnedPersistentHeader.__proto__.new.call(this, {child: child, stretchConfiguration: stretchConfiguration});
    ;
  }).prototype = sliver_persistent_header.RenderSliverPinnedPersistentHeader.prototype;
  dart.addTypeTests(sliver_persistent_header.RenderSliverPinnedPersistentHeader);
  dart.addTypeCaches(sliver_persistent_header.RenderSliverPinnedPersistentHeader);
  dart.setMethodSignature(sliver_persistent_header.RenderSliverPinnedPersistentHeader, () => ({
    __proto__: dart.getMethods(sliver_persistent_header.RenderSliverPinnedPersistentHeader.__proto__),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(sliver_persistent_header.RenderSliverPinnedPersistentHeader, L1);
  dart.setFieldSignature(sliver_persistent_header.RenderSliverPinnedPersistentHeader, () => ({
    __proto__: dart.getFields(sliver_persistent_header.RenderSliverPinnedPersistentHeader.__proto__),
    showOnScreenConfiguration: dart.fieldType(dart.nullable(sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration))
  }));
  var C9;
  var vsync$ = dart.privateName(sliver_persistent_header, "FloatingHeaderSnapConfiguration.vsync");
  var curve$ = dart.privateName(sliver_persistent_header, "FloatingHeaderSnapConfiguration.curve");
  var duration$ = dart.privateName(sliver_persistent_header, "FloatingHeaderSnapConfiguration.duration");
  sliver_persistent_header.FloatingHeaderSnapConfiguration = class FloatingHeaderSnapConfiguration extends core.Object {
    get vsync() {
      return this[vsync$];
    }
    set vsync(value) {
      super.vsync = value;
    }
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      super.curve = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
  };
  (sliver_persistent_header.FloatingHeaderSnapConfiguration.new = function(opts) {
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    let curve = opts && 'curve' in opts ? opts.curve : C8 || CT.C8;
    if (curve == null) dart.nullFailed(L0, 506, 10, "curve");
    let duration = opts && 'duration' in opts ? opts.duration : C9 || CT.C9;
    if (duration == null) dart.nullFailed(L0, 507, 10, "duration");
    this[vsync$] = vsync;
    this[curve$] = curve;
    this[duration$] = duration;
    if (!(curve != null)) dart.assertFailed(null, L0, 508, 15, "curve != null");
    if (!(duration != null)) dart.assertFailed(null, L0, 509, 15, "duration != null");
    ;
  }).prototype = sliver_persistent_header.FloatingHeaderSnapConfiguration.prototype;
  dart.addTypeTests(sliver_persistent_header.FloatingHeaderSnapConfiguration);
  dart.addTypeCaches(sliver_persistent_header.FloatingHeaderSnapConfiguration);
  dart.setLibraryUri(sliver_persistent_header.FloatingHeaderSnapConfiguration, L1);
  dart.setFieldSignature(sliver_persistent_header.FloatingHeaderSnapConfiguration, () => ({
    __proto__: dart.getFields(sliver_persistent_header.FloatingHeaderSnapConfiguration.__proto__),
    vsync: dart.finalFieldType(dart.nullable(ticker.TickerProvider)),
    curve: dart.finalFieldType(curves.Curve),
    duration: dart.finalFieldType(core.Duration)
  }));
  var _controller = dart.privateName(sliver_persistent_header, "_controller");
  var __RenderSliverFloatingPersistentHeader__animation = dart.privateName(sliver_persistent_header, "_#RenderSliverFloatingPersistentHeader#_animation");
  var __RenderSliverFloatingPersistentHeader__animation_isSet = dart.privateName(sliver_persistent_header, "_#RenderSliverFloatingPersistentHeader#_animation#isSet");
  var _lastActualScrollOffset = dart.privateName(sliver_persistent_header, "_lastActualScrollOffset");
  var _effectiveScrollOffset = dart.privateName(sliver_persistent_header, "_effectiveScrollOffset");
  var _vsync = dart.privateName(sliver_persistent_header, "_vsync");
  var _animation = dart.privateName(sliver_persistent_header, "_animation");
  var _updateAnimation = dart.privateName(sliver_persistent_header, "_updateAnimation");
  var snapConfiguration$ = dart.privateName(sliver_persistent_header, "RenderSliverFloatingPersistentHeader.snapConfiguration");
  var showOnScreenConfiguration$0 = dart.privateName(sliver_persistent_header, "RenderSliverFloatingPersistentHeader.showOnScreenConfiguration");
  sliver_persistent_header.RenderSliverFloatingPersistentHeader = class RenderSliverFloatingPersistentHeader extends sliver_persistent_header.RenderSliverPersistentHeader {
    get snapConfiguration() {
      return this[snapConfiguration$];
    }
    set snapConfiguration(value) {
      this[snapConfiguration$] = value;
    }
    get showOnScreenConfiguration() {
      return this[showOnScreenConfiguration$0];
    }
    set showOnScreenConfiguration(value) {
      this[showOnScreenConfiguration$0] = value;
    }
    get [_animation]() {
      let t1;
      return dart.test(this[__RenderSliverFloatingPersistentHeader__animation_isSet]) ? (t1 = this[__RenderSliverFloatingPersistentHeader__animation], t1) : dart.throw(new _internal.LateError.fieldNI("_animation"));
    }
    set [_animation](t1) {
      if (t1 == null) dart.nullFailed(L0, 551, 26, "null");
      this[__RenderSliverFloatingPersistentHeader__animation_isSet] = true;
      this[__RenderSliverFloatingPersistentHeader__animation] = t1;
    }
    detach() {
      let t2;
      t2 = this[_controller];
      t2 == null ? null : t2.dispose();
      this[_controller] = null;
      super.detach();
    }
    get vsync() {
      return this[_vsync];
    }
    set vsync(value) {
      let t2, t2$;
      if (dart.equals(value, this[_vsync])) return;
      this[_vsync] = value;
      if (value == null) {
        t2 = this[_controller];
        t2 == null ? null : t2.dispose();
        this[_controller] = null;
      } else {
        t2$ = this[_controller];
        t2$ == null ? null : t2$.resync(value);
      }
    }
    updateGeometry() {
      let stretchOffset = 0.0;
      if (this.stretchConfiguration != null && this[_childPosition] === 0.0) {
        stretchOffset = stretchOffset + this.constraints.overlap[$abs]();
      }
      let maxExtent = this.maxExtent;
      let paintExtent = dart.notNull(maxExtent) - dart.nullCheck(this[_effectiveScrollOffset]);
      let layoutExtent = dart.notNull(maxExtent) - dart.notNull(this.constraints.scrollOffset);
      this.geometry = new sliver.SliverGeometry.new({scrollExtent: maxExtent, paintOrigin: math.min(core.double, this.constraints.overlap, 0.0), paintExtent: paintExtent[$clamp](0.0, this.constraints.remainingPaintExtent), layoutExtent: layoutExtent[$clamp](0.0, this.constraints.remainingPaintExtent), maxPaintExtent: dart.notNull(maxExtent) + stretchOffset, hasVisualOverflow: true});
      return stretchOffset > 0 ? 0.0 : math.min(core.double, 0.0, paintExtent - dart.notNull(this.childExtent));
    }
    [_updateAnimation](duration, endValue, curve) {
      let t3, t2;
      if (duration == null) dart.nullFailed(L0, 625, 34, "duration");
      if (endValue == null) dart.nullFailed(L0, 625, 51, "endValue");
      if (curve == null) dart.nullFailed(L0, 625, 67, "curve");
      if (!(duration != null)) dart.assertFailed(null, L0, 626, 12, "duration != null");
      if (!(endValue != null)) dart.assertFailed(null, L0, 627, 12, "endValue != null");
      if (!(curve != null)) dart.assertFailed(null, L0, 628, 12, "curve != null");
      if (!(this.vsync != null)) dart.assertFailed("vsync must not be null if the floating header changes size animatedly.", L0, 630, 7, "vsync != null");
      let effectiveController = (t2 = this[_controller], t2 == null ? this[_controller] = (t3 = new animation_controller.AnimationController.new({vsync: dart.nullCheck(this.vsync), duration: duration}), (() => {
        t3.addListener(dart.fn(() => {
          if (this[_effectiveScrollOffset] == this[_animation].value) return;
          this[_effectiveScrollOffset] = this[_animation].value;
          this.markNeedsLayout();
        }, VoidTovoid()));
        return t3;
      })()) : t2);
      this[_animation] = effectiveController.drive(core.double, new (TweenOfdouble()).new({begin: this[_effectiveScrollOffset], end: endValue}).chain(new tween.CurveTween.new({curve: curve})));
    }
    maybeStartSnapAnimation(direction) {
      let t2;
      if (direction == null) dart.nullFailed(L0, 652, 48, "direction");
      let snap = this.snapConfiguration;
      if (snap == null) return;
      if (dart.equals(direction, viewport_offset.ScrollDirection.forward) && dart.nullCheck(this[_effectiveScrollOffset]) <= 0.0) return;
      if (dart.equals(direction, viewport_offset.ScrollDirection.reverse) && dart.nullCheck(this[_effectiveScrollOffset]) >= dart.notNull(this.maxExtent)) return;
      this[_updateAnimation](snap.duration, dart.equals(direction, viewport_offset.ScrollDirection.forward) ? 0.0 : this.maxExtent, snap.curve);
      t2 = this[_controller];
      t2 == null ? null : t2.forward({from: 0.0});
    }
    maybeStopSnapAnimation(direction) {
      let t2;
      if (direction == null) dart.nullFailed(L0, 671, 47, "direction");
      t2 = this[_controller];
      t2 == null ? null : t2.stop();
    }
    performLayout() {
      let constraints = this.constraints;
      let maxExtent = this.maxExtent;
      if (this[_lastActualScrollOffset] != null && (dart.notNull(constraints.scrollOffset) < dart.nullCheck(this[_lastActualScrollOffset]) || dart.nullCheck(this[_effectiveScrollOffset]) < dart.notNull(maxExtent))) {
        let delta = dart.nullCheck(this[_lastActualScrollOffset]) - dart.notNull(constraints.scrollOffset);
        let allowFloatingExpansion = dart.equals(constraints.userScrollDirection, viewport_offset.ScrollDirection.forward);
        if (allowFloatingExpansion) {
          if (dart.nullCheck(this[_effectiveScrollOffset]) > dart.notNull(maxExtent)) this[_effectiveScrollOffset] = maxExtent;
        } else {
          if (delta > 0.0) delta = 0.0;
        }
        this[_effectiveScrollOffset] = (dart.nullCheck(this[_effectiveScrollOffset]) - delta)[$clamp](0.0, constraints.scrollOffset);
      } else {
        this[_effectiveScrollOffset] = constraints.scrollOffset;
      }
      let overlapsContent = dart.nullCheck(this[_effectiveScrollOffset]) < dart.notNull(constraints.scrollOffset);
      this.layoutChild(dart.nullCheck(this[_effectiveScrollOffset]), maxExtent, {overlapsContent: overlapsContent});
      this[_childPosition] = this.updateGeometry();
      this[_lastActualScrollOffset] = constraints.scrollOffset;
    }
    showOnScreen(opts) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7;
      let descendant = opts && 'descendant' in opts ? opts.descendant : null;
      let rect = opts && 'rect' in opts ? opts.rect : null;
      let duration = opts && 'duration' in opts ? opts.duration : C7 || CT.C7;
      if (duration == null) dart.nullFailed(L0, 711, 14, "duration");
      let curve = opts && 'curve' in opts ? opts.curve : C8 || CT.C8;
      if (curve == null) dart.nullFailed(L0, 712, 11, "curve");
      let showOnScreen = this.showOnScreenConfiguration;
      if (showOnScreen == null) return super.showOnScreen({descendant: descendant, rect: rect, duration: duration, curve: curve});
      if (!(this.child != null || descendant == null)) dart.assertFailed(null, L0, 718, 12, "child != null || descendant == null");
      let childBounds = descendant != null ? matrix_utils.MatrixUtils.transformRect(descendant.getTransformTo(this.child), (t2 = rect, t2 == null ? descendant.paintBounds : t2)) : rect;
      let targetExtent = null;
      let targetRect = null;
      switch (sliver.applyGrowthDirectionToAxisDirection(this.constraints.axisDirection, this.constraints.growthDirection)) {
        case C2 || CT.C2:
        {
          targetExtent = dart.notNull(this.childExtent) - dart.notNull((t2$0 = (t2$ = childBounds, t2$ == null ? null : t2$.top), t2$0 == null ? 0 : t2$0));
          targetRect = sliver_persistent_header._trim(childBounds, {bottom: this.childExtent});
          break;
        }
        case C5 || CT.C5:
        {
          targetExtent = (t2$2 = (t2$1 = childBounds, t2$1 == null ? null : t2$1.right), t2$2 == null ? this.childExtent : t2$2);
          targetRect = sliver_persistent_header._trim(childBounds, {left: 0.0});
          break;
        }
        case C3 || CT.C3:
        {
          targetExtent = (t2$4 = (t2$3 = childBounds, t2$3 == null ? null : t2$3.bottom), t2$4 == null ? this.childExtent : t2$4);
          targetRect = sliver_persistent_header._trim(childBounds, {top: 0.0});
          break;
        }
        case C4 || CT.C4:
        {
          targetExtent = dart.notNull(this.childExtent) - dart.notNull((t2$6 = (t2$5 = childBounds, t2$5 == null ? null : t2$5.left), t2$6 == null ? 0 : t2$6));
          targetRect = sliver_persistent_header._trim(childBounds, {right: this.childExtent});
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      let effectiveMaxExtent = math.max(core.double, this.childExtent, this.maxExtent);
      targetExtent = targetExtent[$clamp](showOnScreen.minShowOnScreenExtent, showOnScreen.maxShowOnScreenExtent)[$clamp](this.childExtent, effectiveMaxExtent);
      if (dart.notNull(targetExtent) > dart.notNull(this.childExtent)) {
        let targetScrollOffset = dart.notNull(this.maxExtent) - dart.notNull(targetExtent);
        if (!(this.vsync != null)) dart.assertFailed("vsync must not be null if the floating header changes size animatedly.", L0, 765, 9, "vsync != null");
        this[_updateAnimation](duration, targetScrollOffset, curve);
        t2$7 = this[_controller];
        t2$7 == null ? null : t2$7.forward({from: 0.0});
      }
      super.showOnScreen({descendant: descendant == null ? this : this.child, rect: targetRect, duration: duration, curve: curve});
    }
    childMainAxisPosition(child) {
      let t2;
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L0, 781, 42, "child");
      if (!dart.equals(child, this.child)) dart.assertFailed(null, L0, 782, 12, "child == this.child");
      t2 = this[_childPosition];
      return t2 == null ? 0.0 : t2;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 787, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("effective scroll offset", this[_effectiveScrollOffset]));
    }
  };
  (sliver_persistent_header.RenderSliverFloatingPersistentHeader.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    let snapConfiguration = opts && 'snapConfiguration' in opts ? opts.snapConfiguration : null;
    let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
    let showOnScreenConfiguration = opts && 'showOnScreenConfiguration' in opts ? opts.showOnScreenConfiguration : null;
    this[_controller] = null;
    this[__RenderSliverFloatingPersistentHeader__animation] = null;
    this[__RenderSliverFloatingPersistentHeader__animation_isSet] = false;
    this[_lastActualScrollOffset] = null;
    this[_effectiveScrollOffset] = null;
    this[_childPosition] = null;
    this[snapConfiguration$] = snapConfiguration;
    this[showOnScreenConfiguration$0] = showOnScreenConfiguration;
    this[_vsync] = vsync;
    sliver_persistent_header.RenderSliverFloatingPersistentHeader.__proto__.new.call(this, {child: child, stretchConfiguration: stretchConfiguration});
    ;
  }).prototype = sliver_persistent_header.RenderSliverFloatingPersistentHeader.prototype;
  dart.addTypeTests(sliver_persistent_header.RenderSliverFloatingPersistentHeader);
  dart.addTypeCaches(sliver_persistent_header.RenderSliverFloatingPersistentHeader);
  dart.setMethodSignature(sliver_persistent_header.RenderSliverFloatingPersistentHeader, () => ({
    __proto__: dart.getMethods(sliver_persistent_header.RenderSliverFloatingPersistentHeader.__proto__),
    updateGeometry: dart.fnType(core.double, []),
    [_updateAnimation]: dart.fnType(dart.void, [core.Duration, core.double, curves.Curve]),
    maybeStartSnapAnimation: dart.fnType(dart.void, [viewport_offset.ScrollDirection]),
    maybeStopSnapAnimation: dart.fnType(dart.void, [viewport_offset.ScrollDirection]),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(sliver_persistent_header.RenderSliverFloatingPersistentHeader, () => ({
    __proto__: dart.getGetters(sliver_persistent_header.RenderSliverFloatingPersistentHeader.__proto__),
    [_animation]: animation.Animation$(core.double),
    vsync: dart.nullable(ticker.TickerProvider)
  }));
  dart.setSetterSignature(sliver_persistent_header.RenderSliverFloatingPersistentHeader, () => ({
    __proto__: dart.getSetters(sliver_persistent_header.RenderSliverFloatingPersistentHeader.__proto__),
    [_animation]: animation.Animation$(core.double),
    vsync: dart.nullable(ticker.TickerProvider)
  }));
  dart.setLibraryUri(sliver_persistent_header.RenderSliverFloatingPersistentHeader, L1);
  dart.setFieldSignature(sliver_persistent_header.RenderSliverFloatingPersistentHeader, () => ({
    __proto__: dart.getFields(sliver_persistent_header.RenderSliverFloatingPersistentHeader.__proto__),
    [_controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [__RenderSliverFloatingPersistentHeader__animation]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [__RenderSliverFloatingPersistentHeader__animation_isSet]: dart.fieldType(core.bool),
    [_lastActualScrollOffset]: dart.fieldType(dart.nullable(core.double)),
    [_effectiveScrollOffset]: dart.fieldType(dart.nullable(core.double)),
    [_childPosition]: dart.fieldType(dart.nullable(core.double)),
    [_vsync]: dart.fieldType(dart.nullable(ticker.TickerProvider)),
    snapConfiguration: dart.fieldType(dart.nullable(sliver_persistent_header.FloatingHeaderSnapConfiguration)),
    showOnScreenConfiguration: dart.fieldType(dart.nullable(sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration))
  }));
  sliver_persistent_header.RenderSliverFloatingPinnedPersistentHeader = class RenderSliverFloatingPinnedPersistentHeader extends sliver_persistent_header.RenderSliverFloatingPersistentHeader {
    updateGeometry() {
      let minExtent = this.minExtent;
      let minAllowedExtent = dart.notNull(this.constraints.remainingPaintExtent) > dart.notNull(minExtent) ? minExtent : this.constraints.remainingPaintExtent;
      let maxExtent = this.maxExtent;
      let paintExtent = dart.notNull(maxExtent) - dart.nullCheck(this[_effectiveScrollOffset]);
      let clampedPaintExtent = paintExtent[$clamp](minAllowedExtent, this.constraints.remainingPaintExtent);
      let layoutExtent = dart.notNull(maxExtent) - dart.notNull(this.constraints.scrollOffset);
      let stretchOffset = this.stretchConfiguration != null ? this.constraints.overlap[$abs]() : 0.0;
      this.geometry = new sliver.SliverGeometry.new({scrollExtent: maxExtent, paintOrigin: math.min(core.double, this.constraints.overlap, 0.0), paintExtent: clampedPaintExtent, layoutExtent: layoutExtent[$clamp](0.0, clampedPaintExtent), maxPaintExtent: dart.notNull(maxExtent) + stretchOffset, maxScrollObstructionExtent: minExtent, hasVisualOverflow: true});
      return 0.0;
    }
  };
  (sliver_persistent_header.RenderSliverFloatingPinnedPersistentHeader.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    let snapConfiguration = opts && 'snapConfiguration' in opts ? opts.snapConfiguration : null;
    let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
    let showOnScreenConfiguration = opts && 'showOnScreenConfiguration' in opts ? opts.showOnScreenConfiguration : null;
    sliver_persistent_header.RenderSliverFloatingPinnedPersistentHeader.__proto__.new.call(this, {child: child, vsync: vsync, snapConfiguration: snapConfiguration, stretchConfiguration: stretchConfiguration, showOnScreenConfiguration: showOnScreenConfiguration});
    ;
  }).prototype = sliver_persistent_header.RenderSliverFloatingPinnedPersistentHeader.prototype;
  dart.addTypeTests(sliver_persistent_header.RenderSliverFloatingPinnedPersistentHeader);
  dart.addTypeCaches(sliver_persistent_header.RenderSliverFloatingPinnedPersistentHeader);
  dart.setLibraryUri(sliver_persistent_header.RenderSliverFloatingPinnedPersistentHeader, L1);
  sliver_persistent_header._trim = function _trim(original, opts) {
    let t2;
    let top = opts && 'top' in opts ? opts.top : -1 / 0;
    if (top == null) dart.nullFailed(L0, 23, 10, "top");
    let right = opts && 'right' in opts ? opts.right : 1 / 0;
    if (right == null) dart.nullFailed(L0, 24, 10, "right");
    let bottom = opts && 'bottom' in opts ? opts.bottom : 1 / 0;
    if (bottom == null) dart.nullFailed(L0, 25, 10, "bottom");
    let left = opts && 'left' in opts ? opts.left : -1 / 0;
    if (left == null) dart.nullFailed(L0, 26, 10, "left");
    t2 = original;
    return t2 == null ? null : t2.intersect(new ui.Rect.fromLTRB(left, top, right, bottom));
  };
  dart.trackLibraries("packages/flutter/src/rendering/sliver_persistent_header.dart", {
    "package:flutter/src/rendering/sliver_persistent_header.dart": sliver_persistent_header
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sliver_persistent_header.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/sliver_persistent_header.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__sliver_persistent_header: sliver_persistent_header
  };
}));

//# sourceMappingURL=sliver_persistent_header.dart.lib.js.map
