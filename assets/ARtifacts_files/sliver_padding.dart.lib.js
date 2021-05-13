define(['dart_sdk', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/edge_insets.dart'], (function load__packages__flutter__src__rendering__sliver_padding_dart(dart_sdk, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__edge_insets$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const sliver = packages__flutter__src__rendering__sliver$46dart.src__rendering__sliver;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const debug = packages__flutter__src__rendering__layer$46dart.src__rendering__debug;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  var sliver_padding = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var DiagnosticsPropertyOfEdgeInsetsGeometry = () => (DiagnosticsPropertyOfEdgeInsetsGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(edge_insets.EdgeInsetsGeometry)))();
  var EnumPropertyOfTextDirection = () => (EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/rendering/sliver_padding.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/sliver_padding.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.up",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.right",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.down",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.left",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.horizontal",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.vertical",
        index: 1
      });
    }
  }, false);
  var _name = dart.privateName(basic_types, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  const RenderSliver_RenderObjectWithChildMixin$36 = class RenderSliver_RenderObjectWithChildMixin extends sliver.RenderSliver {};
  (RenderSliver_RenderObjectWithChildMixin$36.new = function() {
    object.RenderObjectWithChildMixin$(sliver.RenderSliver)[dart.mixinNew].call(this);
    RenderSliver_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderSliver_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderSliver_RenderObjectWithChildMixin$36, object.RenderObjectWithChildMixin$(sliver.RenderSliver));
  sliver_padding.RenderSliverEdgeInsetsPadding = class RenderSliverEdgeInsetsPadding extends RenderSliver_RenderObjectWithChildMixin$36 {
    get beforePadding() {
      if (!(this.constraints != null)) dart.assertFailed(null, L0, 40, 12, "constraints != null");
      if (!(this.constraints.axisDirection != null)) dart.assertFailed(null, L0, 41, 12, "constraints.axisDirection != null");
      if (!(this.constraints.growthDirection != null)) dart.assertFailed(null, L0, 42, 12, "constraints.growthDirection != null");
      if (!(this.resolvedPadding != null)) dart.assertFailed(null, L0, 43, 12, "resolvedPadding != null");
      switch (sliver.applyGrowthDirectionToAxisDirection(this.constraints.axisDirection, this.constraints.growthDirection)) {
        case C0 || CT.C0:
        {
          return dart.nullCheck(this.resolvedPadding).bottom;
        }
        case C1 || CT.C1:
        {
          return dart.nullCheck(this.resolvedPadding).left;
        }
        case C2 || CT.C2:
        {
          return dart.nullCheck(this.resolvedPadding).top;
        }
        case C3 || CT.C3:
        {
          return dart.nullCheck(this.resolvedPadding).right;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    get afterPadding() {
      if (!(this.constraints != null)) dart.assertFailed(null, L0, 61, 12, "constraints != null");
      if (!(this.constraints.axisDirection != null)) dart.assertFailed(null, L0, 62, 12, "constraints.axisDirection != null");
      if (!(this.constraints.growthDirection != null)) dart.assertFailed(null, L0, 63, 12, "constraints.growthDirection != null");
      if (!(this.resolvedPadding != null)) dart.assertFailed(null, L0, 64, 12, "resolvedPadding != null");
      switch (sliver.applyGrowthDirectionToAxisDirection(this.constraints.axisDirection, this.constraints.growthDirection)) {
        case C0 || CT.C0:
        {
          return dart.nullCheck(this.resolvedPadding).top;
        }
        case C1 || CT.C1:
        {
          return dart.nullCheck(this.resolvedPadding).right;
        }
        case C2 || CT.C2:
        {
          return dart.nullCheck(this.resolvedPadding).bottom;
        }
        case C3 || CT.C3:
        {
          return dart.nullCheck(this.resolvedPadding).left;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    get mainAxisPadding() {
      if (!(this.constraints != null)) dart.assertFailed(null, L0, 84, 12, "constraints != null");
      if (!(this.constraints.axis != null)) dart.assertFailed(null, L0, 85, 12, "constraints.axis != null");
      if (!(this.resolvedPadding != null)) dart.assertFailed(null, L0, 86, 12, "resolvedPadding != null");
      return dart.nullCheck(this.resolvedPadding).along(this.constraints.axis);
    }
    get crossAxisPadding() {
      if (!(this.constraints != null)) dart.assertFailed(null, L0, 97, 12, "constraints != null");
      if (!(this.constraints.axis != null)) dart.assertFailed(null, L0, 98, 12, "constraints.axis != null");
      if (!(this.resolvedPadding != null)) dart.assertFailed(null, L0, 99, 12, "resolvedPadding != null");
      switch (this.constraints.axis) {
        case C4 || CT.C4:
        {
          return dart.nullCheck(this.resolvedPadding).vertical;
        }
        case C5 || CT.C5:
        {
          return dart.nullCheck(this.resolvedPadding).horizontal;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    setupParentData(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 109, 37, "child");
      if (!sliver.SliverPhysicalParentData.is(child.parentData)) child.parentData = new sliver.SliverPhysicalParentData.new();
    }
    performLayout() {
      let constraints = this.constraints;
      if (!(this.resolvedPadding != null)) dart.assertFailed(null, L0, 117, 12, "resolvedPadding != null");
      let beforePadding = this.beforePadding;
      let afterPadding = this.afterPadding;
      let mainAxisPadding = this.mainAxisPadding;
      let crossAxisPadding = this.crossAxisPadding;
      if (this.child == null) {
        this.geometry = new sliver.SliverGeometry.new({scrollExtent: mainAxisPadding, paintExtent: math.min(core.double, mainAxisPadding, constraints.remainingPaintExtent), maxPaintExtent: mainAxisPadding});
        return;
      }
      let beforePaddingPaintExtent = this.calculatePaintOffset(constraints, {from: 0.0, to: beforePadding});
      let overlap = constraints.overlap;
      if (dart.notNull(overlap) > 0) {
        overlap = math.max(core.double, 0.0, dart.notNull(constraints.overlap) - dart.notNull(beforePaddingPaintExtent));
      }
      dart.nullCheck(this.child).layout(constraints.copyWith({scrollOffset: math.max(core.double, 0.0, dart.notNull(constraints.scrollOffset) - dart.notNull(beforePadding)), cacheOrigin: math.min(core.double, 0.0, dart.notNull(constraints.cacheOrigin) + dart.notNull(beforePadding)), overlap: overlap, remainingPaintExtent: dart.notNull(constraints.remainingPaintExtent) - dart.notNull(this.calculatePaintOffset(constraints, {from: 0.0, to: beforePadding})), remainingCacheExtent: dart.notNull(constraints.remainingCacheExtent) - dart.notNull(this.calculateCacheOffset(constraints, {from: 0.0, to: beforePadding})), crossAxisExtent: math.max(core.double, 0.0, dart.notNull(constraints.crossAxisExtent) - dart.notNull(crossAxisPadding)), precedingScrollExtent: dart.notNull(beforePadding) + dart.notNull(constraints.precedingScrollExtent)}), {parentUsesSize: true});
      let childLayoutGeometry = dart.nullCheck(dart.nullCheck(this.child).geometry);
      if (childLayoutGeometry.scrollOffsetCorrection != null) {
        this.geometry = new sliver.SliverGeometry.new({scrollOffsetCorrection: childLayoutGeometry.scrollOffsetCorrection});
        return;
      }
      let afterPaddingPaintExtent = this.calculatePaintOffset(constraints, {from: dart.notNull(beforePadding) + dart.notNull(childLayoutGeometry.scrollExtent), to: dart.notNull(mainAxisPadding) + dart.notNull(childLayoutGeometry.scrollExtent)});
      let mainAxisPaddingPaintExtent = dart.notNull(beforePaddingPaintExtent) + dart.notNull(afterPaddingPaintExtent);
      let beforePaddingCacheExtent = this.calculateCacheOffset(constraints, {from: 0.0, to: beforePadding});
      let afterPaddingCacheExtent = this.calculateCacheOffset(constraints, {from: dart.notNull(beforePadding) + dart.notNull(childLayoutGeometry.scrollExtent), to: dart.notNull(mainAxisPadding) + dart.notNull(childLayoutGeometry.scrollExtent)});
      let mainAxisPaddingCacheExtent = dart.notNull(afterPaddingCacheExtent) + dart.notNull(beforePaddingCacheExtent);
      let paintExtent = math.min(core.double, dart.notNull(beforePaddingPaintExtent) + math.max(core.num, childLayoutGeometry.paintExtent, dart.notNull(childLayoutGeometry.layoutExtent) + dart.notNull(afterPaddingPaintExtent)), constraints.remainingPaintExtent);
      this.geometry = new sliver.SliverGeometry.new({paintOrigin: childLayoutGeometry.paintOrigin, scrollExtent: dart.notNull(mainAxisPadding) + dart.notNull(childLayoutGeometry.scrollExtent), paintExtent: paintExtent, layoutExtent: math.min(core.double, mainAxisPaddingPaintExtent + dart.notNull(childLayoutGeometry.layoutExtent), paintExtent), cacheExtent: math.min(core.double, mainAxisPaddingCacheExtent + dart.notNull(childLayoutGeometry.cacheExtent), constraints.remainingCacheExtent), maxPaintExtent: dart.notNull(mainAxisPadding) + dart.notNull(childLayoutGeometry.maxPaintExtent), hitTestExtent: math.max(core.double, mainAxisPaddingPaintExtent + dart.notNull(childLayoutGeometry.paintExtent), dart.notNull(beforePaddingPaintExtent) + dart.notNull(childLayoutGeometry.hitTestExtent)), hasVisualOverflow: childLayoutGeometry.hasVisualOverflow});
      let childParentData = sliver.SliverPhysicalParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
      if (!(constraints.axisDirection != null)) dart.assertFailed(null, L0, 194, 12, "constraints.axisDirection != null");
      if (!(constraints.growthDirection != null)) dart.assertFailed(null, L0, 195, 12, "constraints.growthDirection != null");
      switch (sliver.applyGrowthDirectionToAxisDirection(constraints.axisDirection, constraints.growthDirection)) {
        case C0 || CT.C0:
        {
          childParentData.paintOffset = new ui.Offset.new(dart.nullCheck(this.resolvedPadding).left, this.calculatePaintOffset(constraints, {from: dart.notNull(dart.nullCheck(this.resolvedPadding).bottom) + dart.notNull(childLayoutGeometry.scrollExtent), to: dart.notNull(dart.nullCheck(this.resolvedPadding).bottom) + dart.notNull(childLayoutGeometry.scrollExtent) + dart.notNull(dart.nullCheck(this.resolvedPadding).top)}));
          break;
        }
        case C1 || CT.C1:
        {
          childParentData.paintOffset = new ui.Offset.new(this.calculatePaintOffset(constraints, {from: 0.0, to: dart.nullCheck(this.resolvedPadding).left}), dart.nullCheck(this.resolvedPadding).top);
          break;
        }
        case C2 || CT.C2:
        {
          childParentData.paintOffset = new ui.Offset.new(dart.nullCheck(this.resolvedPadding).left, this.calculatePaintOffset(constraints, {from: 0.0, to: dart.nullCheck(this.resolvedPadding).top}));
          break;
        }
        case C3 || CT.C3:
        {
          childParentData.paintOffset = new ui.Offset.new(this.calculatePaintOffset(constraints, {from: dart.notNull(dart.nullCheck(this.resolvedPadding).right) + dart.notNull(childLayoutGeometry.scrollExtent), to: dart.notNull(dart.nullCheck(this.resolvedPadding).right) + dart.notNull(childLayoutGeometry.scrollExtent) + dart.notNull(dart.nullCheck(this.resolvedPadding).left)}), dart.nullCheck(this.resolvedPadding).top);
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      if (!(childParentData.paintOffset != null)) dart.assertFailed(null, L0, 210, 12, "childParentData.paintOffset != null");
      if (!(beforePadding == this.beforePadding)) dart.assertFailed(null, L0, 211, 12, "beforePadding == this.beforePadding");
      if (!(afterPadding == this.afterPadding)) dart.assertFailed(null, L0, 212, 12, "afterPadding == this.afterPadding");
      if (!(mainAxisPadding == this.mainAxisPadding)) dart.assertFailed(null, L0, 213, 12, "mainAxisPadding == this.mainAxisPadding");
      if (!(crossAxisPadding == this.crossAxisPadding)) dart.assertFailed(null, L0, 214, 12, "crossAxisPadding == this.crossAxisPadding");
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L0, 218, 44, "result");
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      if (mainAxisPosition == null) dart.nullFailed(L0, 218, 70, "mainAxisPosition");
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      if (crossAxisPosition == null) dart.nullFailed(L0, 218, 104, "crossAxisPosition");
      if (this.child != null && dart.notNull(dart.nullCheck(dart.nullCheck(this.child).geometry).hitTestExtent) > 0.0) {
        let childParentData = sliver.SliverPhysicalParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
        result.addWithAxisOffset({mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition, mainAxisOffset: this.childMainAxisPosition(dart.nullCheck(this.child)), crossAxisOffset: this.childCrossAxisPosition(dart.nullCheck(this.child)), paintOffset: childParentData.paintOffset, hitTest: dart.bind(dart.nullCheck(this.child), 'hitTest')});
      }
      return false;
    }
    childMainAxisPosition(child) {
      sliver.RenderSliver.as(child);
      if (child == null) dart.nullFailed(L0, 234, 45, "child");
      if (!(child != null)) dart.assertFailed(null, L0, 235, 12, "child != null");
      if (!dart.equals(child, this.child)) dart.assertFailed(null, L0, 236, 12, "child == this.child");
      return this.calculatePaintOffset(this.constraints, {from: 0.0, to: this.beforePadding});
    }
    childCrossAxisPosition(child) {
      sliver.RenderSliver.as(child);
      if (child == null) dart.nullFailed(L0, 241, 46, "child");
      if (!(child != null)) dart.assertFailed(null, L0, 242, 12, "child != null");
      if (!dart.equals(child, this.child)) dart.assertFailed(null, L0, 243, 12, "child == this.child");
      if (!(this.constraints != null)) dart.assertFailed(null, L0, 244, 12, "constraints != null");
      if (!(this.constraints.axisDirection != null)) dart.assertFailed(null, L0, 245, 12, "constraints.axisDirection != null");
      if (!(this.constraints.growthDirection != null)) dart.assertFailed(null, L0, 246, 12, "constraints.growthDirection != null");
      if (!(this.resolvedPadding != null)) dart.assertFailed(null, L0, 247, 12, "resolvedPadding != null");
      switch (sliver.applyGrowthDirectionToAxisDirection(this.constraints.axisDirection, this.constraints.growthDirection)) {
        case C0 || CT.C0:
        case C2 || CT.C2:
        {
          return dart.nullCheck(this.resolvedPadding).left;
        }
        case C3 || CT.C3:
        case C1 || CT.C1:
        {
          return dart.nullCheck(this.resolvedPadding).top;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    childScrollOffset(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 259, 42, "child");
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, L0, 260, 12, "child.parent == this");
      return this.beforePadding;
    }
    applyPaintTransform(child, transform) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 265, 41, "child");
      if (transform == null) dart.nullFailed(L0, 265, 56, "transform");
      if (!(child != null)) dart.assertFailed(null, L0, 266, 12, "child != null");
      if (!dart.equals(child, this.child)) dart.assertFailed(null, L0, 267, 12, "child == this.child");
      let childParentData = sliver.SliverPhysicalParentData.as(dart.nullCheck(child.parentData));
      childParentData.applyPaintTransform(transform);
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 273, 30, "context");
      if (offset == null) dart.nullFailed(L0, 273, 46, "offset");
      if (this.child != null && dart.test(dart.nullCheck(dart.nullCheck(this.child).geometry).visible)) {
        let childParentData = sliver.SliverPhysicalParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
        context.paintChild(dart.nullCheck(this.child), offset['+'](childParentData.paintOffset));
      }
    }
    debugPaint(context, offset) {
      if (context == null) dart.nullFailed(L0, 281, 35, "context");
      if (offset == null) dart.nullFailed(L0, 281, 51, "offset");
      super.debugPaint(context, offset);
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug.debugPaintSizeEnabled)) {
          let parentSize = this.getAbsoluteSize();
          let outerRect = offset['&'](parentSize);
          let innerRect = null;
          if (this.child != null) {
            let childSize = dart.nullCheck(this.child).getAbsoluteSize();
            let childParentData = sliver.SliverPhysicalParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
            innerRect = offset['+'](childParentData.paintOffset)['&'](childSize);
            if (!(dart.notNull(innerRect.top) >= dart.notNull(outerRect.top))) dart.assertFailed(null, L0, 292, 18, "innerRect.top >= outerRect.top");
            if (!(dart.notNull(innerRect.left) >= dart.notNull(outerRect.left))) dart.assertFailed(null, L0, 293, 18, "innerRect.left >= outerRect.left");
            if (!(dart.notNull(innerRect.right) <= dart.notNull(outerRect.right))) dart.assertFailed(null, L0, 294, 18, "innerRect.right <= outerRect.right");
            if (!(dart.notNull(innerRect.bottom) <= dart.notNull(outerRect.bottom))) dart.assertFailed(null, L0, 295, 18, "innerRect.bottom <= outerRect.bottom");
          }
          debug.debugPaintPadding(context.canvas, outerRect, innerRect);
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 283, 12, "() {\n      if (debugPaintSizeEnabled) {\n        final Size parentSize = getAbsoluteSize();\n        final Rect outerRect = offset & parentSize;\n        Rect? innerRect;\n        if (child != null) {\n          final Size childSize = child!.getAbsoluteSize();\n          final SliverPhysicalParentData childParentData = child!.parentData! as SliverPhysicalParentData;\n          innerRect = (offset + childParentData.paintOffset) & childSize;\n          assert(innerRect.top >= outerRect.top);\n          assert(innerRect.left >= outerRect.left);\n          assert(innerRect.right <= outerRect.right);\n          assert(innerRect.bottom <= outerRect.bottom);\n        }\n        debugPaintPadding(context.canvas, outerRect, innerRect);\n      }\n      return true;\n    }()");
    }
  };
  (sliver_padding.RenderSliverEdgeInsetsPadding.new = function() {
    sliver_padding.RenderSliverEdgeInsetsPadding.__proto__.new.call(this);
    ;
  }).prototype = sliver_padding.RenderSliverEdgeInsetsPadding.prototype;
  dart.addTypeTests(sliver_padding.RenderSliverEdgeInsetsPadding);
  dart.addTypeCaches(sliver_padding.RenderSliverEdgeInsetsPadding);
  dart.setMethodSignature(sliver_padding.RenderSliverEdgeInsetsPadding, () => ({
    __proto__: dart.getMethods(sliver_padding.RenderSliverEdgeInsetsPadding.__proto__),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(sliver_padding.RenderSliverEdgeInsetsPadding, () => ({
    __proto__: dart.getGetters(sliver_padding.RenderSliverEdgeInsetsPadding.__proto__),
    beforePadding: core.double,
    afterPadding: core.double,
    mainAxisPadding: core.double,
    crossAxisPadding: core.double
  }));
  dart.setLibraryUri(sliver_padding.RenderSliverEdgeInsetsPadding, L1);
  var _resolvedPadding = dart.privateName(sliver_padding, "_resolvedPadding");
  var _padding = dart.privateName(sliver_padding, "_padding");
  var _textDirection = dart.privateName(sliver_padding, "_textDirection");
  var _resolve = dart.privateName(sliver_padding, "_resolve");
  var _markNeedsResolution = dart.privateName(sliver_padding, "_markNeedsResolution");
  sliver_padding.RenderSliverPadding = class RenderSliverPadding extends sliver_padding.RenderSliverEdgeInsetsPadding {
    get resolvedPadding() {
      return this[_resolvedPadding];
    }
    [_resolve]() {
      if (this.resolvedPadding != null) return;
      this[_resolvedPadding] = this.padding.resolve(this.textDirection);
      if (!dart.test(dart.nullCheck(this.resolvedPadding).isNonNegative)) dart.assertFailed(null, L0, 334, 12, "resolvedPadding!.isNonNegative");
    }
    [_markNeedsResolution]() {
      this[_resolvedPadding] = null;
      this.markNeedsLayout();
    }
    get padding() {
      return this[_padding];
    }
    set padding(value) {
      if (value == null) dart.nullFailed(L0, 348, 34, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 349, 12, "value != null");
      if (!dart.test(this.padding.isNonNegative)) dart.assertFailed(null, L0, 350, 12, "padding.isNonNegative");
      if (dart.equals(this[_padding], value)) return;
      this[_padding] = value;
      this[_markNeedsResolution]();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (dart.equals(this[_textDirection], value)) return;
      this[_textDirection] = value;
      this[_markNeedsResolution]();
    }
    performLayout() {
      this[_resolve]();
      super.performLayout();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 377, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfEdgeInsetsGeometry()).new("padding", this.padding));
      properties.add(new (EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
    }
  };
  (sliver_padding.RenderSliverPadding.new = function(opts) {
    let padding = opts && 'padding' in opts ? opts.padding : null;
    if (padding == null) dart.nullFailed(L0, 316, 33, "padding");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let child = opts && 'child' in opts ? opts.child : null;
    this[_resolvedPadding] = null;
    if (!(padding != null)) dart.assertFailed(null, L0, 319, 15, "padding != null");
    if (!dart.test(padding.isNonNegative)) dart.assertFailed(null, L0, 320, 15, "padding.isNonNegative");
    this[_padding] = padding;
    this[_textDirection] = textDirection;
    sliver_padding.RenderSliverPadding.__proto__.new.call(this);
    this.child = child;
  }).prototype = sliver_padding.RenderSliverPadding.prototype;
  dart.addTypeTests(sliver_padding.RenderSliverPadding);
  dart.addTypeCaches(sliver_padding.RenderSliverPadding);
  dart.setMethodSignature(sliver_padding.RenderSliverPadding, () => ({
    __proto__: dart.getMethods(sliver_padding.RenderSliverPadding.__proto__),
    [_resolve]: dart.fnType(dart.void, []),
    [_markNeedsResolution]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(sliver_padding.RenderSliverPadding, () => ({
    __proto__: dart.getGetters(sliver_padding.RenderSliverPadding.__proto__),
    resolvedPadding: dart.nullable(edge_insets.EdgeInsets),
    padding: edge_insets.EdgeInsetsGeometry,
    textDirection: dart.nullable(ui.TextDirection)
  }));
  dart.setSetterSignature(sliver_padding.RenderSliverPadding, () => ({
    __proto__: dart.getSetters(sliver_padding.RenderSliverPadding.__proto__),
    padding: edge_insets.EdgeInsetsGeometry,
    textDirection: dart.nullable(ui.TextDirection)
  }));
  dart.setLibraryUri(sliver_padding.RenderSliverPadding, L1);
  dart.setFieldSignature(sliver_padding.RenderSliverPadding, () => ({
    __proto__: dart.getFields(sliver_padding.RenderSliverPadding.__proto__),
    [_resolvedPadding]: dart.fieldType(dart.nullable(edge_insets.EdgeInsets)),
    [_padding]: dart.fieldType(edge_insets.EdgeInsetsGeometry),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection))
  }));
  dart.trackLibraries("packages/flutter/src/rendering/sliver_padding.dart", {
    "package:flutter/src/rendering/sliver_padding.dart": sliver_padding
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sliver_padding.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/sliver_padding.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__sliver_padding: sliver_padding
  };
}));

//# sourceMappingURL=sliver_padding.dart.lib.js.map
