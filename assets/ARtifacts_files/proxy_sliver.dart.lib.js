define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/proxy_box.dart'], (function load__packages__flutter__src__rendering__proxy_sliver_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__proxy_box$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const sliver = packages__flutter__src__rendering__sliver$46dart.src__rendering__sliver;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  var proxy_sliver = Object.create(dart.library);
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(false);
  var OpacityLayerN = () => (OpacityLayerN = dart.constFn(dart.nullable(layer.OpacityLayer)))();
  var DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/proxy_sliver.dart";
  var L1 = "package:flutter/src/rendering/proxy_sliver.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: sliver.SliverGeometry.prototype,
        [SliverGeometry_cacheExtent]: 0,
        [SliverGeometry_scrollOffsetCorrection]: null,
        [SliverGeometry_hasVisualOverflow]: false,
        [SliverGeometry_visible]: false,
        [SliverGeometry_hitTestExtent]: 0,
        [SliverGeometry_maxScrollObstructionExtent]: 0,
        [SliverGeometry_maxPaintExtent]: 0,
        [SliverGeometry_layoutExtent]: 0,
        [SliverGeometry_paintExtent]: 0,
        [SliverGeometry_paintOrigin]: 0,
        [SliverGeometry_scrollExtent]: 0
      });
    }
  }, false);
  const RenderSliver_RenderObjectWithChildMixin$36 = class RenderSliver_RenderObjectWithChildMixin extends sliver.RenderSliver {};
  (RenderSliver_RenderObjectWithChildMixin$36.new = function() {
    object.RenderObjectWithChildMixin$(sliver.RenderSliver)[dart.mixinNew].call(this);
    RenderSliver_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderSliver_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderSliver_RenderObjectWithChildMixin$36, object.RenderObjectWithChildMixin$(sliver.RenderSliver));
  proxy_sliver.RenderProxySliver = class RenderProxySliver extends RenderSliver_RenderObjectWithChildMixin$36 {
    setupParentData(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 44, 37, "child");
      if (!sliver.SliverPhysicalParentData.is(child.parentData)) child.parentData = new sliver.SliverPhysicalParentData.new();
    }
    performLayout() {
      if (!(this.child != null)) dart.assertFailed(null, L0, 51, 12, "child != null");
      dart.nullCheck(this.child).layout(this.constraints, {parentUsesSize: true});
      this.geometry = dart.nullCheck(this.child).geometry;
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 57, 30, "context");
      if (offset == null) dart.nullFailed(L0, 57, 46, "offset");
      if (this.child != null) context.paintChild(dart.nullCheck(this.child), offset);
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L0, 63, 44, "result");
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      if (mainAxisPosition == null) dart.nullFailed(L0, 63, 69, "mainAxisPosition");
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      if (crossAxisPosition == null) dart.nullFailed(L0, 63, 103, "crossAxisPosition");
      return this.child != null && dart.notNull(dart.nullCheck(dart.nullCheck(this.child).geometry).hitTestExtent) > 0 && dart.test(dart.nullCheck(this.child).hitTest(result, {mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition}));
    }
    childMainAxisPosition(child) {
      sliver.RenderSliver.as(child);
      if (child == null) dart.nullFailed(L0, 74, 45, "child");
      if (!(child != null)) dart.assertFailed(null, L0, 75, 12, "child != null");
      if (!dart.equals(child, this.child)) dart.assertFailed(null, L0, 76, 12, "child == this.child");
      return 0.0;
    }
    applyPaintTransform(child, transform) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 81, 41, "child");
      if (transform == null) dart.nullFailed(L0, 81, 56, "transform");
      if (!(child != null)) dart.assertFailed(null, L0, 82, 12, "child != null");
      let childParentData = sliver.SliverPhysicalParentData.as(dart.nullCheck(child.parentData));
      childParentData.applyPaintTransform(transform);
    }
  };
  (proxy_sliver.RenderProxySliver.new = function(child = null) {
    proxy_sliver.RenderProxySliver.__proto__.new.call(this);
    this.child = child;
  }).prototype = proxy_sliver.RenderProxySliver.prototype;
  dart.addTypeTests(proxy_sliver.RenderProxySliver);
  dart.addTypeCaches(proxy_sliver.RenderProxySliver);
  dart.setMethodSignature(proxy_sliver.RenderProxySliver, () => ({
    __proto__: dart.getMethods(proxy_sliver.RenderProxySliver.__proto__),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(proxy_sliver.RenderProxySliver, L1);
  var _opacity = dart.privateName(proxy_sliver, "_opacity");
  var _alwaysIncludeSemantics = dart.privateName(proxy_sliver, "_alwaysIncludeSemantics");
  var _alpha = dart.privateName(proxy_sliver, "_alpha");
  proxy_sliver.RenderSliverOpacity = class RenderSliverOpacity extends proxy_sliver.RenderProxySliver {
    get alwaysNeedsCompositing() {
      return this.child != null && this[_alpha] !== 0 && this[_alpha] !== 255;
    }
    get opacity() {
      return this[_opacity];
    }
    set opacity(value) {
      if (value == null) dart.nullFailed(L0, 131, 22, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 132, 12, "value != null");
      if (!(dart.notNull(value) >= 0.0 && dart.notNull(value) <= 1.0)) dart.assertFailed(null, L0, 133, 12, "value >= 0.0 && value <= 1.0");
      if (this[_opacity] == value) return;
      let didNeedCompositing = this.alwaysNeedsCompositing;
      let wasVisible = this[_alpha] !== 0;
      this[_opacity] = value;
      this[_alpha] = ui.Color.getAlphaFromOpacity(this[_opacity]);
      if (!dart.equals(didNeedCompositing, this.alwaysNeedsCompositing)) this.markNeedsCompositingBitsUpdate();
      this.markNeedsPaint();
      if (!wasVisible[$_equals](this[_alpha] !== 0) && !dart.test(this.alwaysIncludeSemantics)) this.markNeedsSemanticsUpdate();
    }
    get alwaysIncludeSemantics() {
      return this[_alwaysIncludeSemantics];
    }
    set alwaysIncludeSemantics(value) {
      if (value == null) dart.nullFailed(L0, 154, 35, "value");
      if (dart.equals(value, this[_alwaysIncludeSemantics])) return;
      this[_alwaysIncludeSemantics] = value;
      this.markNeedsSemanticsUpdate();
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 162, 30, "context");
      if (offset == null) dart.nullFailed(L0, 162, 46, "offset");
      if (this.child != null && dart.test(dart.nullCheck(dart.nullCheck(this.child).geometry).visible)) {
        if (this[_alpha] === 0) {
          this.layer = null;
          return;
        }
        if (this[_alpha] === 255) {
          this.layer = null;
          context.paintChild(dart.nullCheck(this.child), offset);
          return;
        }
        if (!dart.test(this.needsCompositing)) dart.assertFailed(null, L0, 175, 14, "needsCompositing");
        this.layer = context.pushOpacity(offset, this[_alpha], dart.bind(this, 'paint', super.paint), {oldLayer: OpacityLayerN().as(this.layer)});
      }
    }
    visitChildrenForSemantics(visitor) {
      if (visitor == null) dart.nullFailed(L0, 186, 54, "visitor");
      if (this.child != null && (this[_alpha] !== 0 || dart.test(this.alwaysIncludeSemantics))) visitor(dart.nullCheck(this.child));
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 192, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("opacity", this.opacity));
      properties.add(new diagnostics.FlagProperty.new("alwaysIncludeSemantics", {value: this.alwaysIncludeSemantics, ifTrue: "alwaysIncludeSemantics"}));
    }
  };
  (proxy_sliver.RenderSliverOpacity.new = function(opts) {
    let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
    if (opacity == null) dart.nullFailed(L0, 103, 12, "opacity");
    let alwaysIncludeSemantics = opts && 'alwaysIncludeSemantics' in opts ? opts.alwaysIncludeSemantics : false;
    if (alwaysIncludeSemantics == null) dart.nullFailed(L0, 104, 10, "alwaysIncludeSemantics");
    let sliver = opts && 'sliver' in opts ? opts.sliver : null;
    if (!(opacity != null && dart.notNull(opacity) >= 0.0 && dart.notNull(opacity) <= 1.0)) dart.assertFailed(null, L0, 106, 15, "opacity != null && opacity >= 0.0 && opacity <= 1.0");
    if (!(alwaysIncludeSemantics != null)) dart.assertFailed(null, L0, 107, 15, "alwaysIncludeSemantics != null");
    this[_opacity] = opacity;
    this[_alwaysIncludeSemantics] = alwaysIncludeSemantics;
    this[_alpha] = ui.Color.getAlphaFromOpacity(opacity);
    proxy_sliver.RenderSliverOpacity.__proto__.new.call(this);
    this.child = sliver;
  }).prototype = proxy_sliver.RenderSliverOpacity.prototype;
  dart.addTypeTests(proxy_sliver.RenderSliverOpacity);
  dart.addTypeCaches(proxy_sliver.RenderSliverOpacity);
  dart.setGetterSignature(proxy_sliver.RenderSliverOpacity, () => ({
    __proto__: dart.getGetters(proxy_sliver.RenderSliverOpacity.__proto__),
    opacity: core.double,
    alwaysIncludeSemantics: core.bool
  }));
  dart.setSetterSignature(proxy_sliver.RenderSliverOpacity, () => ({
    __proto__: dart.getSetters(proxy_sliver.RenderSliverOpacity.__proto__),
    opacity: core.double,
    alwaysIncludeSemantics: core.bool
  }));
  dart.setLibraryUri(proxy_sliver.RenderSliverOpacity, L1);
  dart.setFieldSignature(proxy_sliver.RenderSliverOpacity, () => ({
    __proto__: dart.getFields(proxy_sliver.RenderSliverOpacity.__proto__),
    [_alpha]: dart.fieldType(core.int),
    [_opacity]: dart.fieldType(core.double),
    [_alwaysIncludeSemantics]: dart.fieldType(core.bool)
  }));
  var _ignoring = dart.privateName(proxy_sliver, "_ignoring");
  var _ignoringSemantics = dart.privateName(proxy_sliver, "_ignoringSemantics");
  var _effectiveIgnoringSemantics = dart.privateName(proxy_sliver, "_effectiveIgnoringSemantics");
  proxy_sliver.RenderSliverIgnorePointer = class RenderSliverIgnorePointer extends proxy_sliver.RenderProxySliver {
    get ignoring() {
      return this[_ignoring];
    }
    set ignoring(value) {
      if (value == null) dart.nullFailed(L0, 230, 21, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 231, 12, "value != null");
      if (dart.equals(value, this[_ignoring])) return;
      this[_ignoring] = value;
      if (this[_ignoringSemantics] == null || !dart.nullCheck(this[_ignoringSemantics])) this.markNeedsSemanticsUpdate();
    }
    get ignoringSemantics() {
      return this[_ignoringSemantics];
    }
    set ignoringSemantics(value) {
      if (dart.equals(value, this[_ignoringSemantics])) return;
      let oldEffectiveValue = this[_effectiveIgnoringSemantics];
      this[_ignoringSemantics] = value;
      if (!dart.equals(oldEffectiveValue, this[_effectiveIgnoringSemantics])) this.markNeedsSemanticsUpdate();
    }
    get [_effectiveIgnoringSemantics]() {
      let t0;
      t0 = this.ignoringSemantics;
      return t0 == null ? this.ignoring : t0;
    }
    hitTest(result, opts) {
      if (result == null) dart.nullFailed(L0, 259, 36, "result");
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      if (mainAxisPosition == null) dart.nullFailed(L0, 259, 61, "mainAxisPosition");
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      if (crossAxisPosition == null) dart.nullFailed(L0, 259, 95, "crossAxisPosition");
      return !dart.test(this.ignoring) && dart.test(super.hitTest(result, {mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition}));
    }
    visitChildrenForSemantics(visitor) {
      if (visitor == null) dart.nullFailed(L0, 269, 54, "visitor");
      if (this.child != null && !dart.test(this[_effectiveIgnoringSemantics])) visitor(dart.nullCheck(this.child));
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 275, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfbool()).new("ignoring", this.ignoring));
      properties.add(new (DiagnosticsPropertyOfbool()).new("ignoringSemantics", this[_effectiveIgnoringSemantics], {description: this.ignoringSemantics == null ? "implicitly " + dart.str(this[_effectiveIgnoringSemantics]) : null}));
    }
  };
  (proxy_sliver.RenderSliverIgnorePointer.new = function(opts) {
    let sliver = opts && 'sliver' in opts ? opts.sliver : null;
    let ignoring = opts && 'ignoring' in opts ? opts.ignoring : true;
    if (ignoring == null) dart.nullFailed(L0, 216, 10, "ignoring");
    let ignoringSemantics = opts && 'ignoringSemantics' in opts ? opts.ignoringSemantics : null;
    if (!(ignoring != null)) dart.assertFailed(null, L0, 218, 15, "ignoring != null");
    this[_ignoring] = ignoring;
    this[_ignoringSemantics] = ignoringSemantics;
    proxy_sliver.RenderSliverIgnorePointer.__proto__.new.call(this);
    this.child = sliver;
  }).prototype = proxy_sliver.RenderSliverIgnorePointer.prototype;
  dart.addTypeTests(proxy_sliver.RenderSliverIgnorePointer);
  dart.addTypeCaches(proxy_sliver.RenderSliverIgnorePointer);
  dart.setGetterSignature(proxy_sliver.RenderSliverIgnorePointer, () => ({
    __proto__: dart.getGetters(proxy_sliver.RenderSliverIgnorePointer.__proto__),
    ignoring: core.bool,
    ignoringSemantics: dart.nullable(core.bool),
    [_effectiveIgnoringSemantics]: core.bool
  }));
  dart.setSetterSignature(proxy_sliver.RenderSliverIgnorePointer, () => ({
    __proto__: dart.getSetters(proxy_sliver.RenderSliverIgnorePointer.__proto__),
    ignoring: core.bool,
    ignoringSemantics: dart.nullable(core.bool)
  }));
  dart.setLibraryUri(proxy_sliver.RenderSliverIgnorePointer, L1);
  dart.setFieldSignature(proxy_sliver.RenderSliverIgnorePointer, () => ({
    __proto__: dart.getFields(proxy_sliver.RenderSliverIgnorePointer.__proto__),
    [_ignoring]: dart.fieldType(core.bool),
    [_ignoringSemantics]: dart.fieldType(dart.nullable(core.bool))
  }));
  var _offstage = dart.privateName(proxy_sliver, "_offstage");
  var SliverGeometry_cacheExtent = dart.privateName(sliver, "SliverGeometry.cacheExtent");
  var SliverGeometry_scrollOffsetCorrection = dart.privateName(sliver, "SliverGeometry.scrollOffsetCorrection");
  var SliverGeometry_hasVisualOverflow = dart.privateName(sliver, "SliverGeometry.hasVisualOverflow");
  var SliverGeometry_visible = dart.privateName(sliver, "SliverGeometry.visible");
  var SliverGeometry_hitTestExtent = dart.privateName(sliver, "SliverGeometry.hitTestExtent");
  var SliverGeometry_maxScrollObstructionExtent = dart.privateName(sliver, "SliverGeometry.maxScrollObstructionExtent");
  var SliverGeometry_maxPaintExtent = dart.privateName(sliver, "SliverGeometry.maxPaintExtent");
  var SliverGeometry_layoutExtent = dart.privateName(sliver, "SliverGeometry.layoutExtent");
  var SliverGeometry_paintExtent = dart.privateName(sliver, "SliverGeometry.paintExtent");
  var SliverGeometry_paintOrigin = dart.privateName(sliver, "SliverGeometry.paintOrigin");
  var SliverGeometry_scrollExtent = dart.privateName(sliver, "SliverGeometry.scrollExtent");
  var C0;
  proxy_sliver.RenderSliverOffstage = class RenderSliverOffstage extends proxy_sliver.RenderProxySliver {
    get offstage() {
      return this[_offstage];
    }
    set offstage(value) {
      if (value == null) dart.nullFailed(L0, 305, 21, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 306, 12, "value != null");
      if (dart.equals(value, this[_offstage])) return;
      this[_offstage] = value;
      this.markNeedsLayoutForSizedByParentChange();
    }
    performLayout() {
      if (!(this.child != null)) dart.assertFailed(null, L0, 315, 12, "child != null");
      dart.nullCheck(this.child).layout(this.constraints, {parentUsesSize: true});
      if (!dart.test(this.offstage))
        this.geometry = dart.nullCheck(this.child).geometry;
      else
        this.geometry = C0 || CT.C0;
    }
    hitTest(result, opts) {
      if (result == null) dart.nullFailed(L0, 328, 36, "result");
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      if (mainAxisPosition == null) dart.nullFailed(L0, 328, 61, "mainAxisPosition");
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      if (crossAxisPosition == null) dart.nullFailed(L0, 328, 95, "crossAxisPosition");
      return !dart.test(this.offstage) && dart.test(super.hitTest(result, {mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition}));
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L0, 337, 44, "result");
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      if (mainAxisPosition == null) dart.nullFailed(L0, 337, 69, "mainAxisPosition");
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      if (crossAxisPosition == null) dart.nullFailed(L0, 337, 103, "crossAxisPosition");
      return !dart.test(this.offstage) && this.child != null && dart.notNull(dart.nullCheck(dart.nullCheck(this.child).geometry).hitTestExtent) > 0 && dart.test(dart.nullCheck(this.child).hitTest(result, {mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition}));
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 349, 30, "context");
      if (offset == null) dart.nullFailed(L0, 349, 46, "offset");
      if (dart.test(this.offstage)) return;
      context.paintChild(dart.nullCheck(this.child), offset);
    }
    visitChildrenForSemantics(visitor) {
      if (visitor == null) dart.nullFailed(L0, 356, 54, "visitor");
      if (dart.test(this.offstage)) return;
      super.visitChildrenForSemantics(visitor);
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 363, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfbool()).new("offstage", this.offstage));
    }
    debugDescribeChildren() {
      if (this.child == null) return JSArrayOfDiagnosticsNode().of([]);
      return JSArrayOfDiagnosticsNode().of([dart.nullCheck(this.child).toDiagnosticsNode({name: "child", style: dart.test(this.offstage) ? diagnostics.DiagnosticsTreeStyle.offstage : diagnostics.DiagnosticsTreeStyle.sparse})]);
    }
  };
  (proxy_sliver.RenderSliverOffstage.new = function(opts) {
    let offstage = opts && 'offstage' in opts ? opts.offstage : true;
    if (offstage == null) dart.nullFailed(L0, 288, 10, "offstage");
    let sliver = opts && 'sliver' in opts ? opts.sliver : null;
    if (!(offstage != null)) dart.assertFailed(null, L0, 290, 15, "offstage != null");
    this[_offstage] = offstage;
    proxy_sliver.RenderSliverOffstage.__proto__.new.call(this);
    this.child = sliver;
  }).prototype = proxy_sliver.RenderSliverOffstage.prototype;
  dart.addTypeTests(proxy_sliver.RenderSliverOffstage);
  dart.addTypeCaches(proxy_sliver.RenderSliverOffstage);
  dart.setGetterSignature(proxy_sliver.RenderSliverOffstage, () => ({
    __proto__: dart.getGetters(proxy_sliver.RenderSliverOffstage.__proto__),
    offstage: core.bool
  }));
  dart.setSetterSignature(proxy_sliver.RenderSliverOffstage, () => ({
    __proto__: dart.getSetters(proxy_sliver.RenderSliverOffstage.__proto__),
    offstage: core.bool
  }));
  dart.setLibraryUri(proxy_sliver.RenderSliverOffstage, L1);
  dart.setFieldSignature(proxy_sliver.RenderSliverOffstage, () => ({
    __proto__: dart.getFields(proxy_sliver.RenderSliverOffstage.__proto__),
    [_offstage]: dart.fieldType(core.bool)
  }));
  const RenderProxySliver_RenderAnimatedOpacityMixin$36 = class RenderProxySliver_RenderAnimatedOpacityMixin extends proxy_sliver.RenderProxySliver {};
  (RenderProxySliver_RenderAnimatedOpacityMixin$36.new = function(child) {
    proxy_box.RenderAnimatedOpacityMixin$(sliver.RenderSliver)[dart.mixinNew].call(this);
    RenderProxySliver_RenderAnimatedOpacityMixin$36.__proto__.new.call(this, child);
  }).prototype = RenderProxySliver_RenderAnimatedOpacityMixin$36.prototype;
  dart.applyMixin(RenderProxySliver_RenderAnimatedOpacityMixin$36, proxy_box.RenderAnimatedOpacityMixin$(sliver.RenderSliver));
  proxy_sliver.RenderSliverAnimatedOpacity = class RenderSliverAnimatedOpacity extends RenderProxySliver_RenderAnimatedOpacityMixin$36 {};
  (proxy_sliver.RenderSliverAnimatedOpacity.new = function(opts) {
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    if (opacity == null) dart.nullFailed(L0, 390, 32, "opacity");
    let alwaysIncludeSemantics = opts && 'alwaysIncludeSemantics' in opts ? opts.alwaysIncludeSemantics : false;
    if (alwaysIncludeSemantics == null) dart.nullFailed(L0, 391, 10, "alwaysIncludeSemantics");
    let sliver = opts && 'sliver' in opts ? opts.sliver : null;
    if (!(opacity != null)) dart.assertFailed(null, L0, 393, 15, "opacity != null");
    if (!(alwaysIncludeSemantics != null)) dart.assertFailed(null, L0, 394, 15, "alwaysIncludeSemantics != null");
    proxy_sliver.RenderSliverAnimatedOpacity.__proto__.new.call(this);
    this.opacity = opacity;
    this.alwaysIncludeSemantics = alwaysIncludeSemantics;
    this.child = sliver;
  }).prototype = proxy_sliver.RenderSliverAnimatedOpacity.prototype;
  dart.addTypeTests(proxy_sliver.RenderSliverAnimatedOpacity);
  dart.addTypeCaches(proxy_sliver.RenderSliverAnimatedOpacity);
  dart.setLibraryUri(proxy_sliver.RenderSliverAnimatedOpacity, L1);
  dart.trackLibraries("packages/flutter/src/rendering/proxy_sliver.dart", {
    "package:flutter/src/rendering/proxy_sliver.dart": proxy_sliver
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["proxy_sliver.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/proxy_sliver.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__proxy_sliver: proxy_sliver
  };
}));

//# sourceMappingURL=proxy_sliver.dart.lib.js.map
