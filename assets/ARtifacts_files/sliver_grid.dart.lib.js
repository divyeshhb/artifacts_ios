define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/rendering/sliver_multi_box_adaptor.dart'], (function load__packages__flutter__src__rendering__sliver_grid_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__rendering__sliver_multi_box_adaptor$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const sliver = packages__flutter__src__rendering__sliver$46dart.src__rendering__sliver;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const sliver_multi_box_adaptor = packages__flutter__src__rendering__sliver_multi_box_adaptor$46dart.src__rendering__sliver_multi_box_adaptor;
  var sliver_grid = Object.create(dart.library);
  var $join = dartx.join;
  var $truncate = dartx.truncate;
  var $ceil = dartx.ceil;
  var $modulo = dartx['%'];
  var $runtimeType = dartx.runtimeType;
  var $isFinite = dartx.isFinite;
  var $clamp = dartx.clamp;
  dart._checkModuleNullSafetyMode(false);
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/rendering/sliver_grid.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/sliver_grid.dart";
  var scrollOffset$ = dart.privateName(sliver_grid, "SliverGridGeometry.scrollOffset");
  var crossAxisOffset$ = dart.privateName(sliver_grid, "SliverGridGeometry.crossAxisOffset");
  var mainAxisExtent$ = dart.privateName(sliver_grid, "SliverGridGeometry.mainAxisExtent");
  var crossAxisExtent$ = dart.privateName(sliver_grid, "SliverGridGeometry.crossAxisExtent");
  sliver_grid.SliverGridGeometry = class SliverGridGeometry extends core.Object {
    get scrollOffset() {
      return this[scrollOffset$];
    }
    set scrollOffset(value) {
      super.scrollOffset = value;
    }
    get crossAxisOffset() {
      return this[crossAxisOffset$];
    }
    set crossAxisOffset(value) {
      super.crossAxisOffset = value;
    }
    get mainAxisExtent() {
      return this[mainAxisExtent$];
    }
    set mainAxisExtent(value) {
      super.mainAxisExtent = value;
    }
    get crossAxisExtent() {
      return this[crossAxisExtent$];
    }
    set crossAxisExtent(value) {
      super.crossAxisExtent = value;
    }
    get trailingScrollOffset() {
      return dart.notNull(this.scrollOffset) + dart.notNull(this.mainAxisExtent);
    }
    getBoxConstraints(constraints) {
      if (constraints == null) dart.nullFailed(L0, 64, 54, "constraints");
      return constraints.asBoxConstraints({minExtent: this.mainAxisExtent, maxExtent: this.mainAxisExtent, crossAxisExtent: this.crossAxisExtent});
    }
    toString() {
      let properties = JSArrayOfString().of(["scrollOffset: " + dart.str(this.scrollOffset), "crossAxisOffset: " + dart.str(this.crossAxisOffset), "mainAxisExtent: " + dart.str(this.mainAxisExtent), "crossAxisExtent: " + dart.str(this.crossAxisExtent)]);
      return "SliverGridGeometry(" + dart.str(properties[$join](", ")) + ")";
    }
  };
  (sliver_grid.SliverGridGeometry.new = function(opts) {
    let scrollOffset = opts && 'scrollOffset' in opts ? opts.scrollOffset : null;
    if (scrollOffset == null) dart.nullFailed(L0, 28, 19, "scrollOffset");
    let crossAxisOffset = opts && 'crossAxisOffset' in opts ? opts.crossAxisOffset : null;
    if (crossAxisOffset == null) dart.nullFailed(L0, 29, 19, "crossAxisOffset");
    let mainAxisExtent = opts && 'mainAxisExtent' in opts ? opts.mainAxisExtent : null;
    if (mainAxisExtent == null) dart.nullFailed(L0, 30, 19, "mainAxisExtent");
    let crossAxisExtent = opts && 'crossAxisExtent' in opts ? opts.crossAxisExtent : null;
    if (crossAxisExtent == null) dart.nullFailed(L0, 31, 19, "crossAxisExtent");
    this[scrollOffset$] = scrollOffset;
    this[crossAxisOffset$] = crossAxisOffset;
    this[mainAxisExtent$] = mainAxisExtent;
    this[crossAxisExtent$] = crossAxisExtent;
    ;
  }).prototype = sliver_grid.SliverGridGeometry.prototype;
  dart.addTypeTests(sliver_grid.SliverGridGeometry);
  dart.addTypeCaches(sliver_grid.SliverGridGeometry);
  dart.setMethodSignature(sliver_grid.SliverGridGeometry, () => ({
    __proto__: dart.getMethods(sliver_grid.SliverGridGeometry.__proto__),
    getBoxConstraints: dart.fnType(box.BoxConstraints, [sliver.SliverConstraints])
  }));
  dart.setGetterSignature(sliver_grid.SliverGridGeometry, () => ({
    __proto__: dart.getGetters(sliver_grid.SliverGridGeometry.__proto__),
    trailingScrollOffset: core.double
  }));
  dart.setLibraryUri(sliver_grid.SliverGridGeometry, L1);
  dart.setFieldSignature(sliver_grid.SliverGridGeometry, () => ({
    __proto__: dart.getFields(sliver_grid.SliverGridGeometry.__proto__),
    scrollOffset: dart.finalFieldType(core.double),
    crossAxisOffset: dart.finalFieldType(core.double),
    mainAxisExtent: dart.finalFieldType(core.double),
    crossAxisExtent: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(sliver_grid.SliverGridGeometry, ['toString']);
  sliver_grid.SliverGridLayout = class SliverGridLayout extends core.Object {};
  (sliver_grid.SliverGridLayout.new = function() {
    ;
  }).prototype = sliver_grid.SliverGridLayout.prototype;
  dart.addTypeTests(sliver_grid.SliverGridLayout);
  dart.addTypeCaches(sliver_grid.SliverGridLayout);
  dart.setLibraryUri(sliver_grid.SliverGridLayout, L1);
  var _getOffsetFromStartInCrossAxis = dart.privateName(sliver_grid, "_getOffsetFromStartInCrossAxis");
  var crossAxisCount$ = dart.privateName(sliver_grid, "SliverGridRegularTileLayout.crossAxisCount");
  var mainAxisStride$ = dart.privateName(sliver_grid, "SliverGridRegularTileLayout.mainAxisStride");
  var crossAxisStride$ = dart.privateName(sliver_grid, "SliverGridRegularTileLayout.crossAxisStride");
  var childMainAxisExtent$ = dart.privateName(sliver_grid, "SliverGridRegularTileLayout.childMainAxisExtent");
  var childCrossAxisExtent$ = dart.privateName(sliver_grid, "SliverGridRegularTileLayout.childCrossAxisExtent");
  var reverseCrossAxis$ = dart.privateName(sliver_grid, "SliverGridRegularTileLayout.reverseCrossAxis");
  sliver_grid.SliverGridRegularTileLayout = class SliverGridRegularTileLayout extends sliver_grid.SliverGridLayout {
    get crossAxisCount() {
      return this[crossAxisCount$];
    }
    set crossAxisCount(value) {
      super.crossAxisCount = value;
    }
    get mainAxisStride() {
      return this[mainAxisStride$];
    }
    set mainAxisStride(value) {
      super.mainAxisStride = value;
    }
    get crossAxisStride() {
      return this[crossAxisStride$];
    }
    set crossAxisStride(value) {
      super.crossAxisStride = value;
    }
    get childMainAxisExtent() {
      return this[childMainAxisExtent$];
    }
    set childMainAxisExtent(value) {
      super.childMainAxisExtent = value;
    }
    get childCrossAxisExtent() {
      return this[childCrossAxisExtent$];
    }
    set childCrossAxisExtent(value) {
      super.childCrossAxisExtent = value;
    }
    get reverseCrossAxis() {
      return this[reverseCrossAxis$];
    }
    set reverseCrossAxis(value) {
      super.reverseCrossAxis = value;
    }
    getMinChildIndexForScrollOffset(scrollOffset) {
      if (scrollOffset == null) dart.nullFailed(L0, 196, 46, "scrollOffset");
      return dart.notNull(this.mainAxisStride) > 0.0 ? dart.notNull(this.crossAxisCount) * (dart.notNull(scrollOffset) / dart.notNull(this.mainAxisStride))[$truncate]() : 0;
    }
    getMaxChildIndexForScrollOffset(scrollOffset) {
      if (scrollOffset == null) dart.nullFailed(L0, 201, 46, "scrollOffset");
      if (dart.notNull(this.mainAxisStride) > 0.0) {
        let mainAxisCount = (dart.notNull(scrollOffset) / dart.notNull(this.mainAxisStride))[$ceil]();
        return math.max(core.int, 0, dart.notNull(this.crossAxisCount) * mainAxisCount - 1);
      }
      return 0;
    }
    [_getOffsetFromStartInCrossAxis](crossAxisStart) {
      if (crossAxisStart == null) dart.nullFailed(L0, 209, 48, "crossAxisStart");
      if (dart.test(this.reverseCrossAxis)) return dart.notNull(this.crossAxisCount) * dart.notNull(this.crossAxisStride) - dart.notNull(crossAxisStart) - dart.notNull(this.childCrossAxisExtent) - (dart.notNull(this.crossAxisStride) - dart.notNull(this.childCrossAxisExtent));
      return crossAxisStart;
    }
    getGeometryForChildIndex(index) {
      if (index == null) dart.nullFailed(L0, 216, 51, "index");
      let crossAxisStart = index[$modulo](this.crossAxisCount) * dart.notNull(this.crossAxisStride);
      return new sliver_grid.SliverGridGeometry.new({scrollOffset: (dart.notNull(index) / dart.notNull(this.crossAxisCount))[$truncate]() * dart.notNull(this.mainAxisStride), crossAxisOffset: this[_getOffsetFromStartInCrossAxis](crossAxisStart), mainAxisExtent: this.childMainAxisExtent, crossAxisExtent: this.childCrossAxisExtent});
    }
    computeMaxScrollOffset(childCount) {
      if (childCount == null) dart.nullFailed(L0, 227, 37, "childCount");
      if (!(childCount != null)) dart.assertFailed(null, L0, 228, 12, "childCount != null");
      let mainAxisCount = ((dart.notNull(childCount) - 1) / dart.notNull(this.crossAxisCount))[$truncate]() + 1;
      let mainAxisSpacing = dart.notNull(this.mainAxisStride) - dart.notNull(this.childMainAxisExtent);
      return dart.notNull(this.mainAxisStride) * mainAxisCount - mainAxisSpacing;
    }
  };
  (sliver_grid.SliverGridRegularTileLayout.new = function(opts) {
    let crossAxisCount = opts && 'crossAxisCount' in opts ? opts.crossAxisCount : null;
    if (crossAxisCount == null) dart.nullFailed(L0, 152, 19, "crossAxisCount");
    let mainAxisStride = opts && 'mainAxisStride' in opts ? opts.mainAxisStride : null;
    if (mainAxisStride == null) dart.nullFailed(L0, 153, 19, "mainAxisStride");
    let crossAxisStride = opts && 'crossAxisStride' in opts ? opts.crossAxisStride : null;
    if (crossAxisStride == null) dart.nullFailed(L0, 154, 19, "crossAxisStride");
    let childMainAxisExtent = opts && 'childMainAxisExtent' in opts ? opts.childMainAxisExtent : null;
    if (childMainAxisExtent == null) dart.nullFailed(L0, 155, 19, "childMainAxisExtent");
    let childCrossAxisExtent = opts && 'childCrossAxisExtent' in opts ? opts.childCrossAxisExtent : null;
    if (childCrossAxisExtent == null) dart.nullFailed(L0, 156, 19, "childCrossAxisExtent");
    let reverseCrossAxis = opts && 'reverseCrossAxis' in opts ? opts.reverseCrossAxis : null;
    if (reverseCrossAxis == null) dart.nullFailed(L0, 157, 19, "reverseCrossAxis");
    this[crossAxisCount$] = crossAxisCount;
    this[mainAxisStride$] = mainAxisStride;
    this[crossAxisStride$] = crossAxisStride;
    this[childMainAxisExtent$] = childMainAxisExtent;
    this[childCrossAxisExtent$] = childCrossAxisExtent;
    this[reverseCrossAxis$] = reverseCrossAxis;
    if (!(crossAxisCount != null && dart.notNull(crossAxisCount) > 0)) dart.assertFailed(null, L0, 158, 15, "crossAxisCount != null && crossAxisCount > 0");
    if (!(mainAxisStride != null && dart.notNull(mainAxisStride) >= 0)) dart.assertFailed(null, L0, 159, 15, "mainAxisStride != null && mainAxisStride >= 0");
    if (!(crossAxisStride != null && dart.notNull(crossAxisStride) >= 0)) dart.assertFailed(null, L0, 160, 15, "crossAxisStride != null && crossAxisStride >= 0");
    if (!(childMainAxisExtent != null && dart.notNull(childMainAxisExtent) >= 0)) dart.assertFailed(null, L0, 161, 15, "childMainAxisExtent != null && childMainAxisExtent >= 0");
    if (!(childCrossAxisExtent != null && dart.notNull(childCrossAxisExtent) >= 0)) dart.assertFailed(null, L0, 162, 15, "childCrossAxisExtent != null && childCrossAxisExtent >= 0");
    if (!(reverseCrossAxis != null)) dart.assertFailed(null, L0, 163, 15, "reverseCrossAxis != null");
    sliver_grid.SliverGridRegularTileLayout.__proto__.new.call(this);
    ;
  }).prototype = sliver_grid.SliverGridRegularTileLayout.prototype;
  dart.addTypeTests(sliver_grid.SliverGridRegularTileLayout);
  dart.addTypeCaches(sliver_grid.SliverGridRegularTileLayout);
  dart.setMethodSignature(sliver_grid.SliverGridRegularTileLayout, () => ({
    __proto__: dart.getMethods(sliver_grid.SliverGridRegularTileLayout.__proto__),
    getMinChildIndexForScrollOffset: dart.fnType(core.int, [core.double]),
    getMaxChildIndexForScrollOffset: dart.fnType(core.int, [core.double]),
    [_getOffsetFromStartInCrossAxis]: dart.fnType(core.double, [core.double]),
    getGeometryForChildIndex: dart.fnType(sliver_grid.SliverGridGeometry, [core.int]),
    computeMaxScrollOffset: dart.fnType(core.double, [core.int])
  }));
  dart.setLibraryUri(sliver_grid.SliverGridRegularTileLayout, L1);
  dart.setFieldSignature(sliver_grid.SliverGridRegularTileLayout, () => ({
    __proto__: dart.getFields(sliver_grid.SliverGridRegularTileLayout.__proto__),
    crossAxisCount: dart.finalFieldType(core.int),
    mainAxisStride: dart.finalFieldType(core.double),
    crossAxisStride: dart.finalFieldType(core.double),
    childMainAxisExtent: dart.finalFieldType(core.double),
    childCrossAxisExtent: dart.finalFieldType(core.double),
    reverseCrossAxis: dart.finalFieldType(core.bool)
  }));
  sliver_grid.SliverGridDelegate = class SliverGridDelegate extends core.Object {};
  (sliver_grid.SliverGridDelegate.new = function() {
    ;
  }).prototype = sliver_grid.SliverGridDelegate.prototype;
  dart.addTypeTests(sliver_grid.SliverGridDelegate);
  dart.addTypeCaches(sliver_grid.SliverGridDelegate);
  dart.setLibraryUri(sliver_grid.SliverGridDelegate, L1);
  var _debugAssertIsValid = dart.privateName(sliver_grid, "_debugAssertIsValid");
  var crossAxisCount$0 = dart.privateName(sliver_grid, "SliverGridDelegateWithFixedCrossAxisCount.crossAxisCount");
  var mainAxisSpacing$ = dart.privateName(sliver_grid, "SliverGridDelegateWithFixedCrossAxisCount.mainAxisSpacing");
  var crossAxisSpacing$ = dart.privateName(sliver_grid, "SliverGridDelegateWithFixedCrossAxisCount.crossAxisSpacing");
  var childAspectRatio$ = dart.privateName(sliver_grid, "SliverGridDelegateWithFixedCrossAxisCount.childAspectRatio");
  sliver_grid.SliverGridDelegateWithFixedCrossAxisCount = class SliverGridDelegateWithFixedCrossAxisCount extends sliver_grid.SliverGridDelegate {
    get crossAxisCount() {
      return this[crossAxisCount$0];
    }
    set crossAxisCount(value) {
      super.crossAxisCount = value;
    }
    get mainAxisSpacing() {
      return this[mainAxisSpacing$];
    }
    set mainAxisSpacing(value) {
      super.mainAxisSpacing = value;
    }
    get crossAxisSpacing() {
      return this[crossAxisSpacing$];
    }
    set crossAxisSpacing(value) {
      super.crossAxisSpacing = value;
    }
    get childAspectRatio() {
      return this[childAspectRatio$];
    }
    set childAspectRatio(value) {
      super.childAspectRatio = value;
    }
    [_debugAssertIsValid]() {
      if (!(dart.notNull(this.crossAxisCount) > 0)) dart.assertFailed(null, L0, 319, 12, "crossAxisCount > 0");
      if (!(dart.notNull(this.mainAxisSpacing) >= 0.0)) dart.assertFailed(null, L0, 320, 12, "mainAxisSpacing >= 0.0");
      if (!(dart.notNull(this.crossAxisSpacing) >= 0.0)) dart.assertFailed(null, L0, 321, 12, "crossAxisSpacing >= 0.0");
      if (!(dart.notNull(this.childAspectRatio) > 0.0)) dart.assertFailed(null, L0, 322, 12, "childAspectRatio > 0.0");
      return true;
    }
    getLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 327, 48, "constraints");
      if (!dart.test(this[_debugAssertIsValid]())) dart.assertFailed(null, L0, 328, 12, "_debugAssertIsValid()");
      let usableCrossAxisExtent = math.max(core.double, 0.0, dart.notNull(constraints.crossAxisExtent) - dart.notNull(this.crossAxisSpacing) * (dart.notNull(this.crossAxisCount) - 1));
      let childCrossAxisExtent = usableCrossAxisExtent / dart.notNull(this.crossAxisCount);
      let childMainAxisExtent = childCrossAxisExtent / dart.notNull(this.childAspectRatio);
      return new sliver_grid.SliverGridRegularTileLayout.new({crossAxisCount: this.crossAxisCount, mainAxisStride: childMainAxisExtent + dart.notNull(this.mainAxisSpacing), crossAxisStride: childCrossAxisExtent + dart.notNull(this.crossAxisSpacing), childMainAxisExtent: childMainAxisExtent, childCrossAxisExtent: childCrossAxisExtent, reverseCrossAxis: basic_types.axisDirectionIsReversed(constraints.crossAxisDirection)});
    }
    shouldRelayout(oldDelegate) {
      sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.as(oldDelegate);
      if (oldDelegate == null) dart.nullFailed(L0, 344, 65, "oldDelegate");
      return oldDelegate.crossAxisCount != this.crossAxisCount || oldDelegate.mainAxisSpacing != this.mainAxisSpacing || oldDelegate.crossAxisSpacing != this.crossAxisSpacing || oldDelegate.childAspectRatio != this.childAspectRatio;
    }
  };
  (sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.new = function(opts) {
    let crossAxisCount = opts && 'crossAxisCount' in opts ? opts.crossAxisCount : null;
    if (crossAxisCount == null) dart.nullFailed(L0, 297, 19, "crossAxisCount");
    let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
    if (mainAxisSpacing == null) dart.nullFailed(L0, 298, 10, "mainAxisSpacing");
    let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
    if (crossAxisSpacing == null) dart.nullFailed(L0, 299, 10, "crossAxisSpacing");
    let childAspectRatio = opts && 'childAspectRatio' in opts ? opts.childAspectRatio : 1;
    if (childAspectRatio == null) dart.nullFailed(L0, 300, 10, "childAspectRatio");
    this[crossAxisCount$0] = crossAxisCount;
    this[mainAxisSpacing$] = mainAxisSpacing;
    this[crossAxisSpacing$] = crossAxisSpacing;
    this[childAspectRatio$] = childAspectRatio;
    if (!(crossAxisCount != null && dart.notNull(crossAxisCount) > 0)) dart.assertFailed(null, L0, 301, 15, "crossAxisCount != null && crossAxisCount > 0");
    if (!(mainAxisSpacing != null && dart.notNull(mainAxisSpacing) >= 0)) dart.assertFailed(null, L0, 302, 15, "mainAxisSpacing != null && mainAxisSpacing >= 0");
    if (!(crossAxisSpacing != null && dart.notNull(crossAxisSpacing) >= 0)) dart.assertFailed(null, L0, 303, 15, "crossAxisSpacing != null && crossAxisSpacing >= 0");
    if (!(childAspectRatio != null && dart.notNull(childAspectRatio) > 0)) dart.assertFailed(null, L0, 304, 15, "childAspectRatio != null && childAspectRatio > 0");
    sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.__proto__.new.call(this);
    ;
  }).prototype = sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.prototype;
  dart.addTypeTests(sliver_grid.SliverGridDelegateWithFixedCrossAxisCount);
  dart.addTypeCaches(sliver_grid.SliverGridDelegateWithFixedCrossAxisCount);
  dart.setMethodSignature(sliver_grid.SliverGridDelegateWithFixedCrossAxisCount, () => ({
    __proto__: dart.getMethods(sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.__proto__),
    [_debugAssertIsValid]: dart.fnType(core.bool, []),
    getLayout: dart.fnType(sliver_grid.SliverGridLayout, [sliver.SliverConstraints]),
    shouldRelayout: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(sliver_grid.SliverGridDelegateWithFixedCrossAxisCount, L1);
  dart.setFieldSignature(sliver_grid.SliverGridDelegateWithFixedCrossAxisCount, () => ({
    __proto__: dart.getFields(sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.__proto__),
    crossAxisCount: dart.finalFieldType(core.int),
    mainAxisSpacing: dart.finalFieldType(core.double),
    crossAxisSpacing: dart.finalFieldType(core.double),
    childAspectRatio: dart.finalFieldType(core.double)
  }));
  var maxCrossAxisExtent$ = dart.privateName(sliver_grid, "SliverGridDelegateWithMaxCrossAxisExtent.maxCrossAxisExtent");
  var mainAxisSpacing$0 = dart.privateName(sliver_grid, "SliverGridDelegateWithMaxCrossAxisExtent.mainAxisSpacing");
  var crossAxisSpacing$0 = dart.privateName(sliver_grid, "SliverGridDelegateWithMaxCrossAxisExtent.crossAxisSpacing");
  var childAspectRatio$0 = dart.privateName(sliver_grid, "SliverGridDelegateWithMaxCrossAxisExtent.childAspectRatio");
  sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent = class SliverGridDelegateWithMaxCrossAxisExtent extends sliver_grid.SliverGridDelegate {
    get maxCrossAxisExtent() {
      return this[maxCrossAxisExtent$];
    }
    set maxCrossAxisExtent(value) {
      super.maxCrossAxisExtent = value;
    }
    get mainAxisSpacing() {
      return this[mainAxisSpacing$0];
    }
    set mainAxisSpacing(value) {
      super.mainAxisSpacing = value;
    }
    get crossAxisSpacing() {
      return this[crossAxisSpacing$0];
    }
    set crossAxisSpacing(value) {
      super.crossAxisSpacing = value;
    }
    get childAspectRatio() {
      return this[childAspectRatio$0];
    }
    set childAspectRatio(value) {
      super.childAspectRatio = value;
    }
    [_debugAssertIsValid](crossAxisExtent) {
      if (crossAxisExtent == null) dart.nullFailed(L0, 416, 35, "crossAxisExtent");
      if (!(dart.notNull(crossAxisExtent) > 0.0)) dart.assertFailed(null, L0, 417, 12, "crossAxisExtent > 0.0");
      if (!(dart.notNull(this.maxCrossAxisExtent) > 0.0)) dart.assertFailed(null, L0, 418, 12, "maxCrossAxisExtent > 0.0");
      if (!(dart.notNull(this.mainAxisSpacing) >= 0.0)) dart.assertFailed(null, L0, 419, 12, "mainAxisSpacing >= 0.0");
      if (!(dart.notNull(this.crossAxisSpacing) >= 0.0)) dart.assertFailed(null, L0, 420, 12, "crossAxisSpacing >= 0.0");
      if (!(dart.notNull(this.childAspectRatio) > 0.0)) dart.assertFailed(null, L0, 421, 12, "childAspectRatio > 0.0");
      return true;
    }
    getLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 426, 48, "constraints");
      if (!dart.test(this[_debugAssertIsValid](constraints.crossAxisExtent))) dart.assertFailed(null, L0, 427, 12, "_debugAssertIsValid(constraints.crossAxisExtent)");
      let crossAxisCount = (dart.notNull(constraints.crossAxisExtent) / (dart.notNull(this.maxCrossAxisExtent) + dart.notNull(this.crossAxisSpacing)))[$ceil]();
      let usableCrossAxisExtent = math.max(core.double, 0.0, dart.notNull(constraints.crossAxisExtent) - dart.notNull(this.crossAxisSpacing) * (crossAxisCount - 1));
      let childCrossAxisExtent = usableCrossAxisExtent / crossAxisCount;
      let childMainAxisExtent = childCrossAxisExtent / dart.notNull(this.childAspectRatio);
      return new sliver_grid.SliverGridRegularTileLayout.new({crossAxisCount: crossAxisCount, mainAxisStride: childMainAxisExtent + dart.notNull(this.mainAxisSpacing), crossAxisStride: childCrossAxisExtent + dart.notNull(this.crossAxisSpacing), childMainAxisExtent: childMainAxisExtent, childCrossAxisExtent: childCrossAxisExtent, reverseCrossAxis: basic_types.axisDirectionIsReversed(constraints.crossAxisDirection)});
    }
    shouldRelayout(oldDelegate) {
      sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent.as(oldDelegate);
      if (oldDelegate == null) dart.nullFailed(L0, 444, 64, "oldDelegate");
      return oldDelegate.maxCrossAxisExtent != this.maxCrossAxisExtent || oldDelegate.mainAxisSpacing != this.mainAxisSpacing || oldDelegate.crossAxisSpacing != this.crossAxisSpacing || oldDelegate.childAspectRatio != this.childAspectRatio;
    }
  };
  (sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent.new = function(opts) {
    let maxCrossAxisExtent = opts && 'maxCrossAxisExtent' in opts ? opts.maxCrossAxisExtent : null;
    if (maxCrossAxisExtent == null) dart.nullFailed(L0, 385, 19, "maxCrossAxisExtent");
    let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
    if (mainAxisSpacing == null) dart.nullFailed(L0, 386, 10, "mainAxisSpacing");
    let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
    if (crossAxisSpacing == null) dart.nullFailed(L0, 387, 10, "crossAxisSpacing");
    let childAspectRatio = opts && 'childAspectRatio' in opts ? opts.childAspectRatio : 1;
    if (childAspectRatio == null) dart.nullFailed(L0, 388, 10, "childAspectRatio");
    this[maxCrossAxisExtent$] = maxCrossAxisExtent;
    this[mainAxisSpacing$0] = mainAxisSpacing;
    this[crossAxisSpacing$0] = crossAxisSpacing;
    this[childAspectRatio$0] = childAspectRatio;
    if (!(maxCrossAxisExtent != null && dart.notNull(maxCrossAxisExtent) >= 0)) dart.assertFailed(null, L0, 389, 15, "maxCrossAxisExtent != null && maxCrossAxisExtent >= 0");
    if (!(mainAxisSpacing != null && dart.notNull(mainAxisSpacing) >= 0)) dart.assertFailed(null, L0, 390, 15, "mainAxisSpacing != null && mainAxisSpacing >= 0");
    if (!(crossAxisSpacing != null && dart.notNull(crossAxisSpacing) >= 0)) dart.assertFailed(null, L0, 391, 15, "crossAxisSpacing != null && crossAxisSpacing >= 0");
    if (!(childAspectRatio != null && dart.notNull(childAspectRatio) > 0)) dart.assertFailed(null, L0, 392, 15, "childAspectRatio != null && childAspectRatio > 0");
    sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent.__proto__.new.call(this);
    ;
  }).prototype = sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent.prototype;
  dart.addTypeTests(sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent);
  dart.addTypeCaches(sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent);
  dart.setMethodSignature(sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent, () => ({
    __proto__: dart.getMethods(sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent.__proto__),
    [_debugAssertIsValid]: dart.fnType(core.bool, [core.double]),
    getLayout: dart.fnType(sliver_grid.SliverGridLayout, [sliver.SliverConstraints]),
    shouldRelayout: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent, L1);
  dart.setFieldSignature(sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent, () => ({
    __proto__: dart.getFields(sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent.__proto__),
    maxCrossAxisExtent: dart.finalFieldType(core.double),
    mainAxisSpacing: dart.finalFieldType(core.double),
    crossAxisSpacing: dart.finalFieldType(core.double),
    childAspectRatio: dart.finalFieldType(core.double)
  }));
  var crossAxisOffset = dart.privateName(sliver_grid, "SliverGridParentData.crossAxisOffset");
  sliver_grid.SliverGridParentData = class SliverGridParentData extends sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData {
    get crossAxisOffset() {
      return this[crossAxisOffset];
    }
    set crossAxisOffset(value) {
      this[crossAxisOffset] = value;
    }
    toString() {
      return "crossAxisOffset=" + dart.str(this.crossAxisOffset) + "; " + dart.str(super.toString());
    }
  };
  (sliver_grid.SliverGridParentData.new = function() {
    this[crossAxisOffset] = null;
    sliver_grid.SliverGridParentData.__proto__.new.call(this);
    ;
  }).prototype = sliver_grid.SliverGridParentData.prototype;
  dart.addTypeTests(sliver_grid.SliverGridParentData);
  dart.addTypeCaches(sliver_grid.SliverGridParentData);
  dart.setLibraryUri(sliver_grid.SliverGridParentData, L1);
  dart.setFieldSignature(sliver_grid.SliverGridParentData, () => ({
    __proto__: dart.getFields(sliver_grid.SliverGridParentData.__proto__),
    crossAxisOffset: dart.fieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(sliver_grid.SliverGridParentData, ['toString']);
  var _gridDelegate = dart.privateName(sliver_grid, "_gridDelegate");
  sliver_grid.RenderSliverGrid = class RenderSliverGrid extends sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor {
    setupParentData(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 491, 37, "child");
      if (!sliver_grid.SliverGridParentData.is(child.parentData)) child.parentData = new sliver_grid.SliverGridParentData.new();
    }
    get gridDelegate() {
      return this[_gridDelegate];
    }
    set gridDelegate(value) {
      if (value == null) dart.nullFailed(L0, 499, 39, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 500, 12, "value != null");
      if (dart.equals(this[_gridDelegate], value)) return;
      if (!dart.equals(dart.runtimeType(value), dart.runtimeType(this[_gridDelegate])) || dart.test(value.shouldRelayout(this[_gridDelegate]))) this.markNeedsLayout();
      this[_gridDelegate] = value;
    }
    childCrossAxisPosition(child) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L0, 510, 43, "child");
      let childParentData = sliver_grid.SliverGridParentData.as(dart.nullCheck(child.parentData));
      return dart.nullCheck(childParentData.crossAxisOffset);
    }
    performLayout() {
      let constraints = this.constraints;
      this.childManager.didStartLayout();
      this.childManager.setDidUnderflow(false);
      let scrollOffset = dart.notNull(constraints.scrollOffset) + dart.notNull(constraints.cacheOrigin);
      if (!(scrollOffset >= 0.0)) dart.assertFailed(null, L0, 522, 12, "scrollOffset >= 0.0");
      let remainingExtent = constraints.remainingCacheExtent;
      if (!(dart.notNull(remainingExtent) >= 0.0)) dart.assertFailed(null, L0, 524, 12, "remainingExtent >= 0.0");
      let targetEndScrollOffset = scrollOffset + dart.notNull(remainingExtent);
      let layout = this[_gridDelegate].getLayout(constraints);
      let firstIndex = layout.getMinChildIndexForScrollOffset(scrollOffset);
      let targetLastIndex = targetEndScrollOffset[$isFinite] ? layout.getMaxChildIndexForScrollOffset(targetEndScrollOffset) : null;
      if (this.firstChild != null) {
        let oldFirstIndex = this.indexOf(dart.nullCheck(this.firstChild));
        let oldLastIndex = this.indexOf(dart.nullCheck(this.lastChild));
        let leadingGarbage = (dart.notNull(firstIndex) - dart.notNull(oldFirstIndex))[$clamp](0, this.childCount);
        let trailingGarbage = targetLastIndex == null ? 0 : (dart.notNull(oldLastIndex) - dart.notNull(targetLastIndex))[$clamp](0, this.childCount);
        this.collectGarbage(leadingGarbage, trailingGarbage);
      } else {
        this.collectGarbage(0, 0);
      }
      let firstChildGridGeometry = layout.getGeometryForChildIndex(firstIndex);
      let leadingScrollOffset = firstChildGridGeometry.scrollOffset;
      let trailingScrollOffset = firstChildGridGeometry.trailingScrollOffset;
      if (this.firstChild == null) {
        if (!dart.test(this.addInitialChild({index: firstIndex, layoutOffset: firstChildGridGeometry.scrollOffset}))) {
          let max = layout.computeMaxScrollOffset(this.childManager.childCount);
          this.geometry = new sliver.SliverGeometry.new({scrollExtent: max, maxPaintExtent: max});
          this.childManager.didFinishLayout();
          return;
        }
      }
      let trailingChildWithLayout = null;
      for (let index = dart.notNull(this.indexOf(dart.nullCheck(this.firstChild))) - 1; index >= dart.notNull(firstIndex); index = index - 1) {
        let gridGeometry = layout.getGeometryForChildIndex(index);
        let child = dart.nullCheck(this.insertAndLayoutLeadingChild(gridGeometry.getBoxConstraints(constraints)));
        let childParentData = sliver_grid.SliverGridParentData.as(dart.nullCheck(child.parentData));
        childParentData.layoutOffset = gridGeometry.scrollOffset;
        childParentData.crossAxisOffset = gridGeometry.crossAxisOffset;
        if (!(childParentData.index === index)) dart.assertFailed(null, L0, 572, 14, "childParentData.index == index");
        trailingChildWithLayout == null ? trailingChildWithLayout = child : null;
        trailingScrollOffset = math.max(core.double, trailingScrollOffset, gridGeometry.trailingScrollOffset);
      }
      if (trailingChildWithLayout == null) {
        dart.nullCheck(this.firstChild).layout(firstChildGridGeometry.getBoxConstraints(constraints));
        let childParentData = sliver_grid.SliverGridParentData.as(dart.nullCheck(dart.nullCheck(this.firstChild).parentData));
        childParentData.layoutOffset = firstChildGridGeometry.scrollOffset;
        childParentData.crossAxisOffset = firstChildGridGeometry.crossAxisOffset;
        trailingChildWithLayout = this.firstChild;
      }
      for (let index = dart.notNull(this.indexOf(dart.nullCheck(trailingChildWithLayout))) + 1; targetLastIndex == null || index <= dart.notNull(targetLastIndex); index = index + 1) {
        let gridGeometry = layout.getGeometryForChildIndex(index);
        let childConstraints = gridGeometry.getBoxConstraints(constraints);
        let child = this.childAfter(dart.nullCheck(trailingChildWithLayout));
        if (child == null || this.indexOf(child) !== index) {
          child = this.insertAndLayoutChild(childConstraints, {after: trailingChildWithLayout});
          if (child == null) {
            break;
          }
        } else {
          child.layout(childConstraints);
        }
        trailingChildWithLayout = child;
        if (!(child != null)) dart.assertFailed(null, L0, 599, 14, "child != null");
        let childParentData = sliver_grid.SliverGridParentData.as(dart.nullCheck(child.parentData));
        childParentData.layoutOffset = gridGeometry.scrollOffset;
        childParentData.crossAxisOffset = gridGeometry.crossAxisOffset;
        if (!(childParentData.index === index)) dart.assertFailed(null, L0, 603, 14, "childParentData.index == index");
        trailingScrollOffset = math.max(core.double, trailingScrollOffset, gridGeometry.trailingScrollOffset);
      }
      let lastIndex = this.indexOf(dart.nullCheck(this.lastChild));
      if (!dart.test(this.debugAssertChildListIsNonEmptyAndContiguous())) dart.assertFailed(null, L0, 609, 12, "debugAssertChildListIsNonEmptyAndContiguous()");
      if (!(this.indexOf(dart.nullCheck(this.firstChild)) == firstIndex)) dart.assertFailed(null, L0, 610, 12, "indexOf(firstChild!) == firstIndex");
      if (!(targetLastIndex == null || dart.notNull(lastIndex) <= dart.notNull(targetLastIndex))) dart.assertFailed(null, L0, 611, 12, "targetLastIndex == null || lastIndex <= targetLastIndex");
      let estimatedTotalExtent = this.childManager.estimateMaxScrollOffset(constraints, {firstIndex: firstIndex, lastIndex: lastIndex, leadingScrollOffset: leadingScrollOffset, trailingScrollOffset: trailingScrollOffset});
      let paintExtent = this.calculatePaintOffset(constraints, {from: math.min(core.double, constraints.scrollOffset, leadingScrollOffset), to: trailingScrollOffset});
      let cacheExtent = this.calculateCacheOffset(constraints, {from: leadingScrollOffset, to: trailingScrollOffset});
      this.geometry = new sliver.SliverGeometry.new({scrollExtent: estimatedTotalExtent, paintExtent: paintExtent, maxPaintExtent: estimatedTotalExtent, cacheExtent: cacheExtent, hasVisualOverflow: true});
      if (estimatedTotalExtent == trailingScrollOffset) this.childManager.setDidUnderflow(true);
      this.childManager.didFinishLayout();
    }
  };
  (sliver_grid.RenderSliverGrid.new = function(opts) {
    let childManager = opts && 'childManager' in opts ? opts.childManager : null;
    if (childManager == null) dart.nullFailed(L0, 484, 42, "childManager");
    let gridDelegate = opts && 'gridDelegate' in opts ? opts.gridDelegate : null;
    if (gridDelegate == null) dart.nullFailed(L0, 485, 33, "gridDelegate");
    if (!(gridDelegate != null)) dart.assertFailed(null, L0, 486, 15, "gridDelegate != null");
    this[_gridDelegate] = gridDelegate;
    sliver_grid.RenderSliverGrid.__proto__.new.call(this, {childManager: childManager});
    ;
  }).prototype = sliver_grid.RenderSliverGrid.prototype;
  dart.addTypeTests(sliver_grid.RenderSliverGrid);
  dart.addTypeCaches(sliver_grid.RenderSliverGrid);
  dart.setMethodSignature(sliver_grid.RenderSliverGrid, () => ({
    __proto__: dart.getMethods(sliver_grid.RenderSliverGrid.__proto__),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(sliver_grid.RenderSliverGrid, () => ({
    __proto__: dart.getGetters(sliver_grid.RenderSliverGrid.__proto__),
    gridDelegate: sliver_grid.SliverGridDelegate
  }));
  dart.setSetterSignature(sliver_grid.RenderSliverGrid, () => ({
    __proto__: dart.getSetters(sliver_grid.RenderSliverGrid.__proto__),
    gridDelegate: sliver_grid.SliverGridDelegate
  }));
  dart.setLibraryUri(sliver_grid.RenderSliverGrid, L1);
  dart.setFieldSignature(sliver_grid.RenderSliverGrid, () => ({
    __proto__: dart.getFields(sliver_grid.RenderSliverGrid.__proto__),
    [_gridDelegate]: dart.fieldType(sliver_grid.SliverGridDelegate)
  }));
  dart.trackLibraries("packages/flutter/src/rendering/sliver_grid.dart", {
    "package:flutter/src/rendering/sliver_grid.dart": sliver_grid
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sliver_grid.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/sliver_grid.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__sliver_grid: sliver_grid
  };
}));

//# sourceMappingURL=sliver_grid.dart.lib.js.map
