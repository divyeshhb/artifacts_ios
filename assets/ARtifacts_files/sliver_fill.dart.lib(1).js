define(['dart_sdk', 'packages/flutter/src/rendering/sliver_fixed_extent_list.dart', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/painting/basic_types.dart'], (function load__packages__flutter__src__rendering__sliver_fill_dart(dart_sdk, packages__flutter__src__rendering__sliver_fixed_extent_list$46dart, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__painting__basic_types$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const sliver_fixed_extent_list = packages__flutter__src__rendering__sliver_fixed_extent_list$46dart.src__rendering__sliver_fixed_extent_list;
  const sliver = packages__flutter__src__rendering__sliver$46dart.src__rendering__sliver;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  var sliver_fill = Object.create(dart.library);
  var $isFinite = dartx.isFinite;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L1 = "package:flutter/src/rendering/sliver_fill.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/sliver_fill.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.horizontal",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.vertical",
        index: 1
      });
    }
  }, false);
  var _viewportFraction = dart.privateName(sliver_fill, "_viewportFraction");
  sliver_fill.RenderSliverFillViewport = class RenderSliverFillViewport extends sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor {
    get itemExtent() {
      return dart.notNull(this.constraints.viewportMainAxisExtent) * dart.notNull(this.viewportFraction);
    }
    get viewportFraction() {
      return this[_viewportFraction];
    }
    set viewportFraction(value) {
      if (value == null) dart.nullFailed(L0, 51, 31, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 52, 12, "value != null");
      if (this[_viewportFraction] == value) return;
      this[_viewportFraction] = value;
      this.markNeedsLayout();
    }
  };
  (sliver_fill.RenderSliverFillViewport.new = function(opts) {
    let childManager = opts && 'childManager' in opts ? opts.childManager : null;
    if (childManager == null) dart.nullFailed(L0, 34, 42, "childManager");
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1;
    if (viewportFraction == null) dart.nullFailed(L0, 35, 12, "viewportFraction");
    if (!(viewportFraction != null)) dart.assertFailed(null, L0, 36, 15, "viewportFraction != null");
    if (!(dart.notNull(viewportFraction) > 0.0)) dart.assertFailed(null, L0, 37, 15, "viewportFraction > 0.0");
    this[_viewportFraction] = viewportFraction;
    sliver_fill.RenderSliverFillViewport.__proto__.new.call(this, {childManager: childManager});
    ;
  }).prototype = sliver_fill.RenderSliverFillViewport.prototype;
  dart.addTypeTests(sliver_fill.RenderSliverFillViewport);
  dart.addTypeCaches(sliver_fill.RenderSliverFillViewport);
  dart.setGetterSignature(sliver_fill.RenderSliverFillViewport, () => ({
    __proto__: dart.getGetters(sliver_fill.RenderSliverFillViewport.__proto__),
    itemExtent: core.double,
    viewportFraction: core.double
  }));
  dart.setSetterSignature(sliver_fill.RenderSliverFillViewport, () => ({
    __proto__: dart.getSetters(sliver_fill.RenderSliverFillViewport.__proto__),
    viewportFraction: core.double
  }));
  dart.setLibraryUri(sliver_fill.RenderSliverFillViewport, L1);
  dart.setFieldSignature(sliver_fill.RenderSliverFillViewport, () => ({
    __proto__: dart.getFields(sliver_fill.RenderSliverFillViewport.__proto__),
    [_viewportFraction]: dart.fieldType(core.double)
  }));
  sliver_fill.RenderSliverFillRemainingWithScrollable = class RenderSliverFillRemainingWithScrollable extends sliver.RenderSliverSingleBoxAdapter {
    performLayout() {
      let constraints = this.constraints;
      let extent = dart.notNull(constraints.remainingPaintExtent) - math.min(core.num, constraints.overlap, 0.0);
      if (this.child != null) dart.nullCheck(this.child).layout(constraints.asBoxConstraints({minExtent: extent, maxExtent: extent}));
      let paintedChildSize = this.calculatePaintOffset(constraints, {from: 0.0, to: extent});
      if (!paintedChildSize[$isFinite]) dart.assertFailed(null, L0, 98, 12, "paintedChildSize.isFinite");
      if (!(dart.notNull(paintedChildSize) >= 0.0)) dart.assertFailed(null, L0, 99, 12, "paintedChildSize >= 0.0");
      this.geometry = new sliver.SliverGeometry.new({scrollExtent: constraints.viewportMainAxisExtent, paintExtent: paintedChildSize, maxPaintExtent: paintedChildSize, hasVisualOverflow: extent > dart.notNull(constraints.remainingPaintExtent) || dart.notNull(constraints.scrollOffset) > 0.0});
      if (this.child != null) this.setChildParentData(dart.nullCheck(this.child), constraints, dart.nullCheck(this.geometry));
    }
  };
  (sliver_fill.RenderSliverFillRemainingWithScrollable.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    sliver_fill.RenderSliverFillRemainingWithScrollable.__proto__.new.call(this, {child: child});
    ;
  }).prototype = sliver_fill.RenderSliverFillRemainingWithScrollable.prototype;
  dart.addTypeTests(sliver_fill.RenderSliverFillRemainingWithScrollable);
  dart.addTypeCaches(sliver_fill.RenderSliverFillRemainingWithScrollable);
  dart.setMethodSignature(sliver_fill.RenderSliverFillRemainingWithScrollable, () => ({
    __proto__: dart.getMethods(sliver_fill.RenderSliverFillRemainingWithScrollable.__proto__),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(sliver_fill.RenderSliverFillRemainingWithScrollable, L1);
  var _name = dart.privateName(basic_types, "_name");
  var C0;
  var C1;
  sliver_fill.RenderSliverFillRemaining = class RenderSliverFillRemaining extends sliver.RenderSliverSingleBoxAdapter {
    performLayout() {
      let constraints = this.constraints;
      let extent = dart.notNull(constraints.viewportMainAxisExtent) - dart.notNull(constraints.precedingScrollExtent);
      if (this.child != null) {
        let childExtent = null;
        switch (constraints.axis) {
          case C0 || CT.C0:
          {
            childExtent = dart.nullCheck(this.child).getMaxIntrinsicWidth(constraints.crossAxisExtent);
            break;
          }
          case C1 || CT.C1:
          {
            childExtent = dart.nullCheck(this.child).getMaxIntrinsicHeight(constraints.crossAxisExtent);
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        extent = math.max(core.double, extent, childExtent);
        dart.nullCheck(this.child).layout(constraints.asBoxConstraints({minExtent: extent, maxExtent: extent}));
      }
      if (!extent[$isFinite]) dart.assertFailed("The calculated extent for the child of SliverFillRemaining is not finite. " + "This can happen if the child is a scrollable, in which case, the " + "hasScrollBody property of SliverFillRemaining should not be set to " + "false.", L0, 164, 12, "extent.isFinite");
      let paintedChildSize = this.calculatePaintOffset(constraints, {from: 0.0, to: extent});
      if (!paintedChildSize[$isFinite]) dart.assertFailed(null, L0, 171, 12, "paintedChildSize.isFinite");
      if (!(dart.notNull(paintedChildSize) >= 0.0)) dart.assertFailed(null, L0, 172, 12, "paintedChildSize >= 0.0");
      this.geometry = new sliver.SliverGeometry.new({scrollExtent: extent, paintExtent: paintedChildSize, maxPaintExtent: paintedChildSize, hasVisualOverflow: extent > dart.notNull(constraints.remainingPaintExtent) || dart.notNull(constraints.scrollOffset) > 0.0});
      if (this.child != null) this.setChildParentData(dart.nullCheck(this.child), constraints, dart.nullCheck(this.geometry));
    }
  };
  (sliver_fill.RenderSliverFillRemaining.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    sliver_fill.RenderSliverFillRemaining.__proto__.new.call(this, {child: child});
    ;
  }).prototype = sliver_fill.RenderSliverFillRemaining.prototype;
  dart.addTypeTests(sliver_fill.RenderSliverFillRemaining);
  dart.addTypeCaches(sliver_fill.RenderSliverFillRemaining);
  dart.setMethodSignature(sliver_fill.RenderSliverFillRemaining, () => ({
    __proto__: dart.getMethods(sliver_fill.RenderSliverFillRemaining.__proto__),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(sliver_fill.RenderSliverFillRemaining, L1);
  sliver_fill.RenderSliverFillRemainingAndOverscroll = class RenderSliverFillRemainingAndOverscroll extends sliver.RenderSliverSingleBoxAdapter {
    performLayout() {
      let constraints = this.constraints;
      let extent = dart.notNull(constraints.viewportMainAxisExtent) - dart.notNull(constraints.precedingScrollExtent);
      let maxExtent = dart.notNull(constraints.remainingPaintExtent) - math.min(core.num, constraints.overlap, 0.0);
      if (this.child != null) {
        let childExtent = null;
        switch (constraints.axis) {
          case C0 || CT.C0:
          {
            childExtent = dart.nullCheck(this.child).getMaxIntrinsicWidth(constraints.crossAxisExtent);
            break;
          }
          case C1 || CT.C1:
          {
            childExtent = dart.nullCheck(this.child).getMaxIntrinsicHeight(constraints.crossAxisExtent);
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        extent = math.max(core.double, extent, childExtent);
        maxExtent = math.max(core.double, extent, maxExtent);
        dart.nullCheck(this.child).layout(constraints.asBoxConstraints({minExtent: extent, maxExtent: maxExtent}));
      }
      if (!extent[$isFinite]) dart.assertFailed("The calculated extent for the child of SliverFillRemaining is not finite. " + "This can happen if the child is a scrollable, in which case, the " + "hasScrollBody property of SliverFillRemaining should not be set to " + "false.", L0, 241, 12, "extent.isFinite");
      let paintedChildSize = this.calculatePaintOffset(constraints, {from: 0.0, to: extent});
      if (!paintedChildSize[$isFinite]) dart.assertFailed(null, L0, 248, 12, "paintedChildSize.isFinite");
      if (!(dart.notNull(paintedChildSize) >= 0.0)) dart.assertFailed(null, L0, 249, 12, "paintedChildSize >= 0.0");
      this.geometry = new sliver.SliverGeometry.new({scrollExtent: extent, paintExtent: math.min(core.double, maxExtent, constraints.remainingPaintExtent), maxPaintExtent: maxExtent, hasVisualOverflow: extent > dart.notNull(constraints.remainingPaintExtent) || dart.notNull(constraints.scrollOffset) > 0.0});
      if (this.child != null) this.setChildParentData(dart.nullCheck(this.child), constraints, dart.nullCheck(this.geometry));
    }
  };
  (sliver_fill.RenderSliverFillRemainingAndOverscroll.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    sliver_fill.RenderSliverFillRemainingAndOverscroll.__proto__.new.call(this, {child: child});
    ;
  }).prototype = sliver_fill.RenderSliverFillRemainingAndOverscroll.prototype;
  dart.addTypeTests(sliver_fill.RenderSliverFillRemainingAndOverscroll);
  dart.addTypeCaches(sliver_fill.RenderSliverFillRemainingAndOverscroll);
  dart.setMethodSignature(sliver_fill.RenderSliverFillRemainingAndOverscroll, () => ({
    __proto__: dart.getMethods(sliver_fill.RenderSliverFillRemainingAndOverscroll.__proto__),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(sliver_fill.RenderSliverFillRemainingAndOverscroll, L1);
  dart.trackLibraries("packages/flutter/src/rendering/sliver_fill.dart", {
    "package:flutter/src/rendering/sliver_fill.dart": sliver_fill
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sliver_fill.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/sliver_fill.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__sliver_fill: sliver_fill
  };
}));

//# sourceMappingURL=sliver_fill.dart.lib.js.map
