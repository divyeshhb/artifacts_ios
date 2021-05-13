define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/rendering/layout_helper.dart', 'packages/flutter/src/rendering/stack.dart', 'packages/flutter/src/rendering/debug_overflow_indicator.dart', 'packages/flutter/src/foundation/change_notifier.dart'], (function load__packages__flutter__src__rendering__shifted_box_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__rendering__layout_helper$46dart, packages__flutter__src__rendering__stack$46dart, packages__flutter__src__rendering__debug_overflow_indicator$46dart, packages__flutter__src__foundation__change_notifier$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const debug = packages__flutter__src__rendering__layer$46dart.src__rendering__debug;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const layout_helper = packages__flutter__src__rendering__layout_helper$46dart.src__rendering__layout_helper;
  const stack = packages__flutter__src__rendering__stack$46dart.src__rendering__stack;
  const debug_overflow_indicator = packages__flutter__src__rendering__debug_overflow_indicator$46dart.src__rendering__debug_overflow_indicator;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  var shifted_box = Object.create(dart.library);
  var $isFinite = dartx.isFinite;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(false);
  var OffsetN = () => (OffsetN = dart.constFn(dart.nullable(ui.Offset)))();
  var BoxHitTestResultAndOffsetNTobool = () => (BoxHitTestResultAndOffsetNTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, OffsetN()])))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var DiagnosticsPropertyOfEdgeInsetsGeometry = () => (DiagnosticsPropertyOfEdgeInsetsGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(edge_insets.EdgeInsetsGeometry)))();
  var EnumPropertyOfTextDirection = () => (EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))();
  var DiagnosticsPropertyOfAlignmentGeometry = () => (DiagnosticsPropertyOfAlignmentGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(alignment.AlignmentGeometry)))();
  var RenderBoxAndBoxConstraintsToSize = () => (RenderBoxAndBoxConstraintsToSize = dart.constFn(dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])))();
  var EnumPropertyOfTextBaseline = () => (EnumPropertyOfTextBaseline = dart.constFn(diagnostics.EnumProperty$(ui.TextBaseline)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/rendering/shifted_box.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/shifted_box.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967040.0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2425393296.0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name]: "Clip.none",
        index: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name$]: "Axis.horizontal",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name$]: "Axis.vertical",
        index: 1
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 1 / 0,
        [BoxConstraints_minHeight]: 0,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 0
      });
    },
    get C7() {
      return C7 = dart.fn(layout_helper.ChildLayoutHelper.dryLayoutChild, RenderBoxAndBoxConstraintsToSize());
    },
    get C8() {
      return C8 = dart.fn(layout_helper.ChildLayoutHelper.layoutChild, RenderBoxAndBoxConstraintsToSize());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    }
  }, false);
  const RenderBox_RenderObjectWithChildMixin$36 = class RenderBox_RenderObjectWithChildMixin extends box.RenderBox {};
  (RenderBox_RenderObjectWithChildMixin$36.new = function() {
    object.RenderObjectWithChildMixin$(box.RenderBox)[dart.mixinNew].call(this);
    RenderBox_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderObjectWithChildMixin$36, object.RenderObjectWithChildMixin$(box.RenderBox));
  shifted_box.RenderShiftedBox = class RenderShiftedBox extends RenderBox_RenderObjectWithChildMixin$36 {
    computeMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 26, 42, "height");
      if (this.child != null) return dart.nullCheck(this.child).getMinIntrinsicWidth(height);
      return 0.0;
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 33, 42, "height");
      if (this.child != null) return dart.nullCheck(this.child).getMaxIntrinsicWidth(height);
      return 0.0;
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 40, 43, "width");
      if (this.child != null) return dart.nullCheck(this.child).getMinIntrinsicHeight(width);
      return 0.0;
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 47, 43, "width");
      if (this.child != null) return dart.nullCheck(this.child).getMaxIntrinsicHeight(width);
      return 0.0;
    }
    computeDistanceToActualBaseline(baseline) {
      if (baseline == null) dart.nullFailed(L0, 54, 56, "baseline");
      let result = null;
      if (this.child != null) {
        if (!!dart.test(this.debugNeedsLayout)) dart.assertFailed(null, L0, 57, 14, "!debugNeedsLayout");
        result = dart.nullCheck(this.child).getDistanceToActualBaseline(baseline);
        let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
        if (result != null) result = dart.notNull(result) + dart.notNull(childParentData.offset.dy);
      } else {
        result = super.computeDistanceToActualBaseline(baseline);
      }
      return result;
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 69, 30, "context");
      if (offset == null) dart.nullFailed(L0, 69, 46, "offset");
      if (this.child != null) {
        let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
        context.paintChild(dart.nullCheck(this.child), childParentData.offset['+'](offset));
      }
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L0, 77, 41, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 77, 67, "position");
      if (this.child != null) {
        let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
        return result.addWithPaintOffset({offset: childParentData.offset, position: position, hitTest: dart.fn((result, transformed) => {
            if (result == null) dart.nullFailed(L0, 83, 36, "result");
            if (!dart.equals(transformed, position['-'](childParentData.offset))) dart.assertFailed(null, L0, 84, 18, "transformed == position - childParentData.offset");
            return dart.nullCheck(this.child).hitTest(result, {position: dart.nullCheck(transformed)});
          }, BoxHitTestResultAndOffsetNTobool())});
      }
      return false;
    }
  };
  (shifted_box.RenderShiftedBox.new = function(child) {
    shifted_box.RenderShiftedBox.__proto__.new.call(this);
    this.child = child;
  }).prototype = shifted_box.RenderShiftedBox.prototype;
  dart.addTypeTests(shifted_box.RenderShiftedBox);
  dart.addTypeCaches(shifted_box.RenderShiftedBox);
  dart.setLibraryUri(shifted_box.RenderShiftedBox, L1);
  var _resolvedPadding = dart.privateName(shifted_box, "_resolvedPadding");
  var _textDirection = dart.privateName(shifted_box, "_textDirection");
  var _padding = dart.privateName(shifted_box, "_padding");
  var _resolve = dart.privateName(shifted_box, "_resolve");
  var _markNeedResolution = dart.privateName(shifted_box, "_markNeedResolution");
  shifted_box.RenderPadding = class RenderPadding extends shifted_box.RenderShiftedBox {
    [_resolve]() {
      if (this[_resolvedPadding] != null) return;
      this[_resolvedPadding] = this.padding.resolve(this.textDirection);
      if (!dart.test(dart.nullCheck(this[_resolvedPadding]).isNonNegative)) dart.assertFailed(null, L0, 119, 12, "_resolvedPadding!.isNonNegative");
    }
    [_markNeedResolution]() {
      this[_resolvedPadding] = null;
      this.markNeedsLayout();
    }
    get padding() {
      return this[_padding];
    }
    set padding(value) {
      if (value == null) dart.nullFailed(L0, 133, 34, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 134, 12, "value != null");
      if (!dart.test(value.isNonNegative)) dart.assertFailed(null, L0, 135, 12, "value.isNonNegative");
      if (dart.equals(this[_padding], value)) return;
      this[_padding] = value;
      this[_markNeedResolution]();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (dart.equals(this[_textDirection], value)) return;
      this[_textDirection] = value;
      this[_markNeedResolution]();
    }
    computeMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 156, 42, "height");
      this[_resolve]();
      let totalHorizontalPadding = dart.notNull(dart.nullCheck(this[_resolvedPadding]).left) + dart.notNull(dart.nullCheck(this[_resolvedPadding]).right);
      let totalVerticalPadding = dart.notNull(dart.nullCheck(this[_resolvedPadding]).top) + dart.notNull(dart.nullCheck(this[_resolvedPadding]).bottom);
      if (this.child != null) return dart.notNull(dart.nullCheck(this.child).getMinIntrinsicWidth(math.max(core.double, 0.0, dart.notNull(height) - totalVerticalPadding))) + totalHorizontalPadding;
      return totalHorizontalPadding;
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 166, 42, "height");
      this[_resolve]();
      let totalHorizontalPadding = dart.notNull(dart.nullCheck(this[_resolvedPadding]).left) + dart.notNull(dart.nullCheck(this[_resolvedPadding]).right);
      let totalVerticalPadding = dart.notNull(dart.nullCheck(this[_resolvedPadding]).top) + dart.notNull(dart.nullCheck(this[_resolvedPadding]).bottom);
      if (this.child != null) return dart.notNull(dart.nullCheck(this.child).getMaxIntrinsicWidth(math.max(core.double, 0.0, dart.notNull(height) - totalVerticalPadding))) + totalHorizontalPadding;
      return totalHorizontalPadding;
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 176, 43, "width");
      this[_resolve]();
      let totalHorizontalPadding = dart.notNull(dart.nullCheck(this[_resolvedPadding]).left) + dart.notNull(dart.nullCheck(this[_resolvedPadding]).right);
      let totalVerticalPadding = dart.notNull(dart.nullCheck(this[_resolvedPadding]).top) + dart.notNull(dart.nullCheck(this[_resolvedPadding]).bottom);
      if (this.child != null) return dart.notNull(dart.nullCheck(this.child).getMinIntrinsicHeight(math.max(core.double, 0.0, dart.notNull(width) - totalHorizontalPadding))) + totalVerticalPadding;
      return totalVerticalPadding;
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 186, 43, "width");
      this[_resolve]();
      let totalHorizontalPadding = dart.notNull(dart.nullCheck(this[_resolvedPadding]).left) + dart.notNull(dart.nullCheck(this[_resolvedPadding]).right);
      let totalVerticalPadding = dart.notNull(dart.nullCheck(this[_resolvedPadding]).top) + dart.notNull(dart.nullCheck(this[_resolvedPadding]).bottom);
      if (this.child != null) return dart.notNull(dart.nullCheck(this.child).getMaxIntrinsicHeight(math.max(core.double, 0.0, dart.notNull(width) - totalHorizontalPadding))) + totalVerticalPadding;
      return totalVerticalPadding;
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 196, 40, "constraints");
      this[_resolve]();
      if (!(this[_resolvedPadding] != null)) dart.assertFailed(null, L0, 198, 12, "_resolvedPadding != null");
      if (this.child == null) {
        return constraints.constrain(new ui.Size.new(dart.notNull(dart.nullCheck(this[_resolvedPadding]).left) + dart.notNull(dart.nullCheck(this[_resolvedPadding]).right), dart.notNull(dart.nullCheck(this[_resolvedPadding]).top) + dart.notNull(dart.nullCheck(this[_resolvedPadding]).bottom)));
      }
      let innerConstraints = constraints.deflate(dart.nullCheck(this[_resolvedPadding]));
      let childSize = dart.nullCheck(this.child).getDryLayout(innerConstraints);
      return constraints.constrain(new ui.Size.new(dart.notNull(dart.nullCheck(this[_resolvedPadding]).left) + dart.notNull(childSize.width) + dart.notNull(dart.nullCheck(this[_resolvedPadding]).right), dart.notNull(dart.nullCheck(this[_resolvedPadding]).top) + dart.notNull(childSize.height) + dart.notNull(dart.nullCheck(this[_resolvedPadding]).bottom)));
    }
    performLayout() {
      let constraints = this.constraints;
      this[_resolve]();
      if (!(this[_resolvedPadding] != null)) dart.assertFailed(null, L0, 217, 12, "_resolvedPadding != null");
      if (this.child == null) {
        this.size = constraints.constrain(new ui.Size.new(dart.notNull(dart.nullCheck(this[_resolvedPadding]).left) + dart.notNull(dart.nullCheck(this[_resolvedPadding]).right), dart.notNull(dart.nullCheck(this[_resolvedPadding]).top) + dart.notNull(dart.nullCheck(this[_resolvedPadding]).bottom)));
        return;
      }
      let innerConstraints = constraints.deflate(dart.nullCheck(this[_resolvedPadding]));
      dart.nullCheck(this.child).layout(innerConstraints, {parentUsesSize: true});
      let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
      childParentData.offset = new ui.Offset.new(dart.nullCheck(this[_resolvedPadding]).left, dart.nullCheck(this[_resolvedPadding]).top);
      this.size = constraints.constrain(new ui.Size.new(dart.notNull(dart.nullCheck(this[_resolvedPadding]).left) + dart.notNull(dart.nullCheck(this.child).size.width) + dart.notNull(dart.nullCheck(this[_resolvedPadding]).right), dart.notNull(dart.nullCheck(this[_resolvedPadding]).top) + dart.notNull(dart.nullCheck(this.child).size.height) + dart.notNull(dart.nullCheck(this[_resolvedPadding]).bottom)));
    }
    debugPaintSize(context, offset) {
      if (context == null) dart.nullFailed(L0, 236, 39, "context");
      if (offset == null) dart.nullFailed(L0, 236, 55, "offset");
      super.debugPaintSize(context, offset);
      if (!dart.test(dart.fn(() => {
        let outerRect = offset['&'](this.size);
        debug.debugPaintPadding(context.canvas, outerRect, this.child != null ? dart.nullCheck(this[_resolvedPadding]).deflateRect(outerRect) : null);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 238, 12, "() {\n      final Rect outerRect = offset & size;\n      debugPaintPadding(context.canvas, outerRect, child != null ? _resolvedPadding!.deflateRect(outerRect) : null);\n      return true;\n    }()");
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 246, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfEdgeInsetsGeometry()).new("padding", this.padding));
      properties.add(new (EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
    }
  };
  (shifted_box.RenderPadding.new = function(opts) {
    let padding = opts && 'padding' in opts ? opts.padding : null;
    if (padding == null) dart.nullFailed(L0, 104, 33, "padding");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let child = opts && 'child' in opts ? opts.child : null;
    this[_resolvedPadding] = null;
    if (!(padding != null)) dart.assertFailed(null, L0, 107, 15, "padding != null");
    if (!dart.test(padding.isNonNegative)) dart.assertFailed(null, L0, 108, 15, "padding.isNonNegative");
    this[_textDirection] = textDirection;
    this[_padding] = padding;
    shifted_box.RenderPadding.__proto__.new.call(this, child);
    ;
  }).prototype = shifted_box.RenderPadding.prototype;
  dart.addTypeTests(shifted_box.RenderPadding);
  dart.addTypeCaches(shifted_box.RenderPadding);
  dart.setMethodSignature(shifted_box.RenderPadding, () => ({
    __proto__: dart.getMethods(shifted_box.RenderPadding.__proto__),
    [_resolve]: dart.fnType(dart.void, []),
    [_markNeedResolution]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(shifted_box.RenderPadding, () => ({
    __proto__: dart.getGetters(shifted_box.RenderPadding.__proto__),
    padding: edge_insets.EdgeInsetsGeometry,
    textDirection: dart.nullable(ui.TextDirection)
  }));
  dart.setSetterSignature(shifted_box.RenderPadding, () => ({
    __proto__: dart.getSetters(shifted_box.RenderPadding.__proto__),
    padding: edge_insets.EdgeInsetsGeometry,
    textDirection: dart.nullable(ui.TextDirection)
  }));
  dart.setLibraryUri(shifted_box.RenderPadding, L1);
  dart.setFieldSignature(shifted_box.RenderPadding, () => ({
    __proto__: dart.getFields(shifted_box.RenderPadding.__proto__),
    [_resolvedPadding]: dart.fieldType(dart.nullable(edge_insets.EdgeInsets)),
    [_padding]: dart.fieldType(edge_insets.EdgeInsetsGeometry),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection))
  }));
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var C0;
  var _resolvedAlignment = dart.privateName(shifted_box, "_resolvedAlignment");
  var _alignment = dart.privateName(shifted_box, "_alignment");
  shifted_box.RenderAligningShiftedBox = class RenderAligningShiftedBox extends shifted_box.RenderShiftedBox {
    [_resolve]() {
      if (this[_resolvedAlignment] != null) return;
      this[_resolvedAlignment] = this.alignment.resolve(this.textDirection);
    }
    [_markNeedResolution]() {
      this[_resolvedAlignment] = null;
      this.markNeedsLayout();
    }
    get alignment() {
      return this[_alignment];
    }
    set alignment(value) {
      if (value == null) dart.nullFailed(L0, 307, 35, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 308, 12, "value != null");
      if (dart.equals(this[_alignment], value)) return;
      this[_alignment] = value;
      this[_markNeedResolution]();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (dart.equals(this[_textDirection], value)) return;
      this[_textDirection] = value;
      this[_markNeedResolution]();
    }
    alignChild() {
      this[_resolve]();
      if (!(this.child != null)) dart.assertFailed(null, L0, 339, 12, "child != null");
      if (!!dart.test(dart.nullCheck(this.child).debugNeedsLayout)) dart.assertFailed(null, L0, 340, 12, "!child!.debugNeedsLayout");
      if (!dart.test(dart.nullCheck(this.child).hasSize)) dart.assertFailed(null, L0, 341, 12, "child!.hasSize");
      if (!dart.test(this.hasSize)) dart.assertFailed(null, L0, 342, 12, "hasSize");
      if (!(this[_resolvedAlignment] != null)) dart.assertFailed(null, L0, 343, 12, "_resolvedAlignment != null");
      let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
      childParentData.offset = dart.nullCheck(this[_resolvedAlignment]).alongOffset(ui.Offset.as(this.size['-'](dart.nullCheck(this.child).size)));
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 349, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfAlignmentGeometry()).new("alignment", this.alignment));
      properties.add(new (EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
    }
  };
  (shifted_box.RenderAligningShiftedBox.new = function(opts) {
    let alignment = opts && 'alignment' in opts ? opts.alignment : C0 || CT.C0;
    if (alignment == null) dart.nullFailed(L0, 263, 23, "alignment");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let child = opts && 'child' in opts ? opts.child : null;
    this[_resolvedAlignment] = null;
    if (!(alignment != null)) dart.assertFailed(null, L0, 266, 15, "alignment != null");
    this[_alignment] = alignment;
    this[_textDirection] = textDirection;
    shifted_box.RenderAligningShiftedBox.__proto__.new.call(this, child);
    ;
  }).prototype = shifted_box.RenderAligningShiftedBox.prototype;
  (shifted_box.RenderAligningShiftedBox.mixin = function(alignment, textDirection, child) {
    if (alignment == null) dart.nullFailed(L0, 274, 52, "alignment");
    shifted_box.RenderAligningShiftedBox.new.call(this, {alignment: alignment, textDirection: textDirection, child: child});
  }).prototype = shifted_box.RenderAligningShiftedBox.prototype;
  dart.addTypeTests(shifted_box.RenderAligningShiftedBox);
  dart.addTypeCaches(shifted_box.RenderAligningShiftedBox);
  dart.setMethodSignature(shifted_box.RenderAligningShiftedBox, () => ({
    __proto__: dart.getMethods(shifted_box.RenderAligningShiftedBox.__proto__),
    [_resolve]: dart.fnType(dart.void, []),
    [_markNeedResolution]: dart.fnType(dart.void, []),
    alignChild: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(shifted_box.RenderAligningShiftedBox, () => ({
    __proto__: dart.getGetters(shifted_box.RenderAligningShiftedBox.__proto__),
    alignment: alignment.AlignmentGeometry,
    textDirection: dart.nullable(ui.TextDirection)
  }));
  dart.setSetterSignature(shifted_box.RenderAligningShiftedBox, () => ({
    __proto__: dart.getSetters(shifted_box.RenderAligningShiftedBox.__proto__),
    alignment: alignment.AlignmentGeometry,
    textDirection: dart.nullable(ui.TextDirection)
  }));
  dart.setLibraryUri(shifted_box.RenderAligningShiftedBox, L1);
  dart.setFieldSignature(shifted_box.RenderAligningShiftedBox, () => ({
    __proto__: dart.getFields(shifted_box.RenderAligningShiftedBox.__proto__),
    [_resolvedAlignment]: dart.fieldType(dart.nullable(alignment.Alignment)),
    [_alignment]: dart.fieldType(alignment.AlignmentGeometry),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection))
  }));
  var _widthFactor = dart.privateName(shifted_box, "_widthFactor");
  var _heightFactor = dart.privateName(shifted_box, "_heightFactor");
  var Color_value = dart.privateName(ui, "Color.value");
  var C1;
  var C2;
  shifted_box.RenderPositionedBox = class RenderPositionedBox extends shifted_box.RenderAligningShiftedBox {
    get widthFactor() {
      return this[_widthFactor];
    }
    set widthFactor(value) {
      if (!(value == null || dart.notNull(value) >= 0.0)) dart.assertFailed(null, L0, 386, 12, "value == null || value >= 0.0");
      if (this[_widthFactor] == value) return;
      this[_widthFactor] = value;
      this.markNeedsLayout();
    }
    get heightFactor() {
      return this[_heightFactor];
    }
    set heightFactor(value) {
      if (!(value == null || dart.notNull(value) >= 0.0)) dart.assertFailed(null, L0, 399, 12, "value == null || value >= 0.0");
      if (this[_heightFactor] == value) return;
      this[_heightFactor] = value;
      this.markNeedsLayout();
    }
    computeDryLayout(constraints) {
      let t0, t0$;
      if (constraints == null) dart.nullFailed(L0, 407, 40, "constraints");
      let shrinkWrapWidth = this[_widthFactor] != null || constraints.maxWidth === 1 / 0;
      let shrinkWrapHeight = this[_heightFactor] != null || constraints.maxHeight === 1 / 0;
      if (this.child != null) {
        let childSize = dart.nullCheck(this.child).getDryLayout(constraints.loosen());
        return constraints.constrain(new ui.Size.new(shrinkWrapWidth ? dart.notNull(childSize.width) * dart.notNull((t0 = this[_widthFactor], t0 == null ? 1.0 : t0)) : 1 / 0, shrinkWrapHeight ? dart.notNull(childSize.height) * dart.notNull((t0$ = this[_heightFactor], t0$ == null ? 1.0 : t0$)) : 1 / 0));
      }
      return constraints.constrain(new ui.Size.new(shrinkWrapWidth ? 0.0 : 1 / 0, shrinkWrapHeight ? 0.0 : 1 / 0));
    }
    performLayout() {
      let t0, t0$;
      let constraints = this.constraints;
      let shrinkWrapWidth = this[_widthFactor] != null || constraints.maxWidth === 1 / 0;
      let shrinkWrapHeight = this[_heightFactor] != null || constraints.maxHeight === 1 / 0;
      if (this.child != null) {
        dart.nullCheck(this.child).layout(constraints.loosen(), {parentUsesSize: true});
        this.size = constraints.constrain(new ui.Size.new(shrinkWrapWidth ? dart.notNull(dart.nullCheck(this.child).size.width) * dart.notNull((t0 = this[_widthFactor], t0 == null ? 1.0 : t0)) : 1 / 0, shrinkWrapHeight ? dart.notNull(dart.nullCheck(this.child).size.height) * dart.notNull((t0$ = this[_heightFactor], t0$ == null ? 1.0 : t0$)) : 1 / 0));
        this.alignChild();
      } else {
        this.size = constraints.constrain(new ui.Size.new(shrinkWrapWidth ? 0.0 : 1 / 0, shrinkWrapHeight ? 0.0 : 1 / 0));
      }
    }
    debugPaintSize(context, offset) {
      if (context == null) dart.nullFailed(L0, 441, 39, "context");
      if (offset == null) dart.nullFailed(L0, 441, 55, "offset");
      super.debugPaintSize(context, offset);
      if (!dart.test(dart.fn(() => {
        let t0, t0$, t0$0, t0$1;
        let paint = null;
        if (this.child != null && !dart.test(dart.nullCheck(this.child).size.isEmpty)) {
          let path = null;
          paint = (t0 = ui.Paint.new(), (() => {
            t0.style = ui.PaintingStyle.stroke;
            t0.strokeWidth = 1.0;
            t0.color = C1 || CT.C1;
            return t0;
          })());
          path = ui.Path.new();
          let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
          if (dart.notNull(childParentData.offset.dy) > 0.0) {
            let headSize = math.min(core.double, dart.notNull(childParentData.offset.dy) * 0.2, 10.0);
            t0$ = path;
            (() => {
              t0$.moveTo(dart.notNull(offset.dx) + dart.notNull(this.size.width) / 2.0, offset.dy);
              t0$.relativeLineTo(0.0, dart.notNull(childParentData.offset.dy) - headSize);
              t0$.relativeLineTo(headSize, 0.0);
              t0$.relativeLineTo(-headSize, headSize);
              t0$.relativeLineTo(-headSize, -headSize);
              t0$.relativeLineTo(headSize, 0.0);
              t0$.moveTo(dart.notNull(offset.dx) + dart.notNull(this.size.width) / 2.0, dart.notNull(offset.dy) + dart.notNull(this.size.height));
              t0$.relativeLineTo(0.0, -dart.notNull(childParentData.offset.dy) + headSize);
              t0$.relativeLineTo(headSize, 0.0);
              t0$.relativeLineTo(-headSize, -headSize);
              t0$.relativeLineTo(-headSize, headSize);
              t0$.relativeLineTo(headSize, 0.0);
              return t0$;
            })();
            context.canvas.drawPath(path, paint);
          }
          if (dart.notNull(childParentData.offset.dx) > 0.0) {
            let headSize = math.min(core.double, dart.notNull(childParentData.offset.dx) * 0.2, 10.0);
            t0$0 = path;
            (() => {
              t0$0.moveTo(offset.dx, dart.notNull(offset.dy) + dart.notNull(this.size.height) / 2.0);
              t0$0.relativeLineTo(dart.notNull(childParentData.offset.dx) - headSize, 0.0);
              t0$0.relativeLineTo(0.0, headSize);
              t0$0.relativeLineTo(headSize, -headSize);
              t0$0.relativeLineTo(-headSize, -headSize);
              t0$0.relativeLineTo(0.0, headSize);
              t0$0.moveTo(dart.notNull(offset.dx) + dart.notNull(this.size.width), dart.notNull(offset.dy) + dart.notNull(this.size.height) / 2.0);
              t0$0.relativeLineTo(-dart.notNull(childParentData.offset.dx) + headSize, 0.0);
              t0$0.relativeLineTo(0.0, headSize);
              t0$0.relativeLineTo(-headSize, -headSize);
              t0$0.relativeLineTo(headSize, -headSize);
              t0$0.relativeLineTo(0.0, headSize);
              return t0$0;
            })();
            context.canvas.drawPath(path, paint);
          }
        } else {
          paint = (t0$1 = ui.Paint.new(), (() => {
            t0$1.color = C2 || CT.C2;
            return t0$1;
          })());
          context.canvas.drawRect(offset['&'](this.size), paint);
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 443, 12, "() {\n      final Paint paint;\n      if (child != null && !child!.size.isEmpty) {\n        final Path path;\n        paint = Paint()\n          ..style = PaintingStyle.stroke\n          ..strokeWidth = 1.0\n          ..color = const Color(0xFFFFFF00);\n        path = Path();\n        final BoxParentData childParentData = child!.parentData! as BoxParentData;\n        if (childParentData.offset.dy > 0.0) {\n          // vertical alignment arrows\n          final double headSize = math.min(childParentData.offset.dy * 0.2, 10.0);\n          path\n            ..moveTo(offset.dx + size.width / 2.0, offset.dy)\n            ..relativeLineTo(0.0, childParentData.offset.dy - headSize)\n            ..relativeLineTo(headSize, 0.0)\n            ..relativeLineTo(-headSize, headSize)\n            ..relativeLineTo(-headSize, -headSize)\n            ..relativeLineTo(headSize, 0.0)\n            ..moveTo(offset.dx + size.width / 2.0, offset.dy + size.height)\n            ..relativeLineTo(0.0, -childParentData.offset.dy + headSize)\n            ..relativeLineTo(headSize, 0.0)\n            ..relativeLineTo(-headSize, -headSize)\n            ..relativeLineTo(-headSize, headSize)\n            ..relativeLineTo(headSize, 0.0);\n          context.canvas.drawPath(path, paint);\n        }\n        if (childParentData.offset.dx > 0.0) {\n          // horizontal alignment arrows\n          final double headSize = math.min(childParentData.offset.dx * 0.2, 10.0);\n          path\n            ..moveTo(offset.dx, offset.dy + size.height / 2.0)\n            ..relativeLineTo(childParentData.offset.dx - headSize, 0.0)\n            ..relativeLineTo(0.0, headSize)\n            ..relativeLineTo(headSize, -headSize)\n            ..relativeLineTo(-headSize, -headSize)\n            ..relativeLineTo(0.0, headSize)\n            ..moveTo(offset.dx + size.width, offset.dy + size.height / 2.0)\n            ..relativeLineTo(-childParentData.offset.dx + headSize, 0.0)\n            ..relativeLineTo(0.0, headSize)\n            ..relativeLineTo(-headSize, -headSize)\n            ..relativeLineTo(headSize, -headSize)\n            ..relativeLineTo(0.0, headSize);\n          context.canvas.drawPath(path, paint);\n        }\n      } else {\n        paint = Paint()\n          ..color = const Color(0x90909090);\n        context.canvas.drawRect(offset & size, paint);\n      }\n      return true;\n    }()");
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 499, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("widthFactor", this[_widthFactor], {ifNull: "expand"}));
      properties.add(new diagnostics.DoubleProperty.new("heightFactor", this[_heightFactor], {ifNull: "expand"}));
    }
  };
  (shifted_box.RenderPositionedBox.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let widthFactor = opts && 'widthFactor' in opts ? opts.widthFactor : null;
    let heightFactor = opts && 'heightFactor' in opts ? opts.heightFactor : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C0 || CT.C0;
    if (alignment == null) dart.nullFailed(L0, 372, 23, "alignment");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    if (!(widthFactor == null || dart.notNull(widthFactor) >= 0.0)) dart.assertFailed(null, L0, 374, 15, "widthFactor == null || widthFactor >= 0.0");
    if (!(heightFactor == null || dart.notNull(heightFactor) >= 0.0)) dart.assertFailed(null, L0, 375, 15, "heightFactor == null || heightFactor >= 0.0");
    this[_widthFactor] = widthFactor;
    this[_heightFactor] = heightFactor;
    shifted_box.RenderPositionedBox.__proto__.new.call(this, {child: child, alignment: alignment, textDirection: textDirection});
    ;
  }).prototype = shifted_box.RenderPositionedBox.prototype;
  dart.addTypeTests(shifted_box.RenderPositionedBox);
  dart.addTypeCaches(shifted_box.RenderPositionedBox);
  dart.setGetterSignature(shifted_box.RenderPositionedBox, () => ({
    __proto__: dart.getGetters(shifted_box.RenderPositionedBox.__proto__),
    widthFactor: dart.nullable(core.double),
    heightFactor: dart.nullable(core.double)
  }));
  dart.setSetterSignature(shifted_box.RenderPositionedBox, () => ({
    __proto__: dart.getSetters(shifted_box.RenderPositionedBox.__proto__),
    widthFactor: dart.nullable(core.double),
    heightFactor: dart.nullable(core.double)
  }));
  dart.setLibraryUri(shifted_box.RenderPositionedBox, L1);
  dart.setFieldSignature(shifted_box.RenderPositionedBox, () => ({
    __proto__: dart.getFields(shifted_box.RenderPositionedBox.__proto__),
    [_widthFactor]: dart.fieldType(dart.nullable(core.double)),
    [_heightFactor]: dart.fieldType(dart.nullable(core.double))
  }));
  var _minWidth = dart.privateName(shifted_box, "_minWidth");
  var _maxWidth = dart.privateName(shifted_box, "_maxWidth");
  var _minHeight = dart.privateName(shifted_box, "_minHeight");
  var _maxHeight = dart.privateName(shifted_box, "_maxHeight");
  var _getInnerConstraints = dart.privateName(shifted_box, "_getInnerConstraints");
  shifted_box.RenderConstrainedOverflowBox = class RenderConstrainedOverflowBox extends shifted_box.RenderAligningShiftedBox {
    get minWidth() {
      return this[_minWidth];
    }
    set minWidth(value) {
      if (this[_minWidth] == value) return;
      this[_minWidth] = value;
      this.markNeedsLayout();
    }
    get maxWidth() {
      return this[_maxWidth];
    }
    set maxWidth(value) {
      if (this[_maxWidth] == value) return;
      this[_maxWidth] = value;
      this.markNeedsLayout();
    }
    get minHeight() {
      return this[_minHeight];
    }
    set minHeight(value) {
      if (this[_minHeight] == value) return;
      this[_minHeight] = value;
      this.markNeedsLayout();
    }
    get maxHeight() {
      return this[_maxHeight];
    }
    set maxHeight(value) {
      if (this[_maxHeight] == value) return;
      this[_maxHeight] = value;
      this.markNeedsLayout();
    }
    [_getInnerConstraints](constraints) {
      let t0, t0$, t0$0, t0$1;
      if (constraints == null) dart.nullFailed(L0, 596, 54, "constraints");
      return new box.BoxConstraints.new({minWidth: (t0 = this[_minWidth], t0 == null ? constraints.minWidth : t0), maxWidth: (t0$ = this[_maxWidth], t0$ == null ? constraints.maxWidth : t0$), minHeight: (t0$0 = this[_minHeight], t0$0 == null ? constraints.minHeight : t0$0), maxHeight: (t0$1 = this[_maxHeight], t0$1 == null ? constraints.maxHeight : t0$1)});
    }
    get sizedByParent() {
      return true;
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 609, 40, "constraints");
      return constraints.biggest;
    }
    performLayout() {
      let t0;
      if (this.child != null) {
        t0 = this.child;
        t0 == null ? null : t0.layout(this[_getInnerConstraints](this.constraints), {parentUsesSize: true});
        this.alignChild();
      }
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 622, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("minWidth", this.minWidth, {ifNull: "use parent minWidth constraint"}));
      properties.add(new diagnostics.DoubleProperty.new("maxWidth", this.maxWidth, {ifNull: "use parent maxWidth constraint"}));
      properties.add(new diagnostics.DoubleProperty.new("minHeight", this.minHeight, {ifNull: "use parent minHeight constraint"}));
      properties.add(new diagnostics.DoubleProperty.new("maxHeight", this.maxHeight, {ifNull: "use parent maxHeight constraint"}));
    }
  };
  (shifted_box.RenderConstrainedOverflowBox.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let minWidth = opts && 'minWidth' in opts ? opts.minWidth : null;
    let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : null;
    let minHeight = opts && 'minHeight' in opts ? opts.minHeight : null;
    let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C0 || CT.C0;
    if (alignment == null) dart.nullFailed(L0, 544, 23, "alignment");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    this[_minWidth] = minWidth;
    this[_maxWidth] = maxWidth;
    this[_minHeight] = minHeight;
    this[_maxHeight] = maxHeight;
    shifted_box.RenderConstrainedOverflowBox.__proto__.new.call(this, {child: child, alignment: alignment, textDirection: textDirection});
    ;
  }).prototype = shifted_box.RenderConstrainedOverflowBox.prototype;
  dart.addTypeTests(shifted_box.RenderConstrainedOverflowBox);
  dart.addTypeCaches(shifted_box.RenderConstrainedOverflowBox);
  dart.setMethodSignature(shifted_box.RenderConstrainedOverflowBox, () => ({
    __proto__: dart.getMethods(shifted_box.RenderConstrainedOverflowBox.__proto__),
    [_getInnerConstraints]: dart.fnType(box.BoxConstraints, [box.BoxConstraints])
  }));
  dart.setGetterSignature(shifted_box.RenderConstrainedOverflowBox, () => ({
    __proto__: dart.getGetters(shifted_box.RenderConstrainedOverflowBox.__proto__),
    minWidth: dart.nullable(core.double),
    maxWidth: dart.nullable(core.double),
    minHeight: dart.nullable(core.double),
    maxHeight: dart.nullable(core.double)
  }));
  dart.setSetterSignature(shifted_box.RenderConstrainedOverflowBox, () => ({
    __proto__: dart.getSetters(shifted_box.RenderConstrainedOverflowBox.__proto__),
    minWidth: dart.nullable(core.double),
    maxWidth: dart.nullable(core.double),
    minHeight: dart.nullable(core.double),
    maxHeight: dart.nullable(core.double)
  }));
  dart.setLibraryUri(shifted_box.RenderConstrainedOverflowBox, L1);
  dart.setFieldSignature(shifted_box.RenderConstrainedOverflowBox, () => ({
    __proto__: dart.getFields(shifted_box.RenderConstrainedOverflowBox.__proto__),
    [_minWidth]: dart.fieldType(dart.nullable(core.double)),
    [_maxWidth]: dart.fieldType(dart.nullable(core.double)),
    [_minHeight]: dart.fieldType(dart.nullable(core.double)),
    [_maxHeight]: dart.fieldType(dart.nullable(core.double))
  }));
  var _name = dart.privateName(ui, "_name");
  var C3;
  var _overflowContainerRect = dart.privateName(shifted_box, "_overflowContainerRect");
  var _overflowChildRect = dart.privateName(shifted_box, "_overflowChildRect");
  var _isOverflowing = dart.privateName(shifted_box, "_isOverflowing");
  var _clipBehavior = dart.privateName(shifted_box, "_clipBehavior");
  var _clipRectLayer = dart.privateName(shifted_box, "_clipRectLayer");
  var _constrainedAxis = dart.privateName(shifted_box, "_constrainedAxis");
  var _name$ = dart.privateName(basic_types, "_name");
  var C4;
  var C5;
  var BoxConstraints_maxHeight = dart.privateName(box, "BoxConstraints.maxHeight");
  var BoxConstraints_minHeight = dart.privateName(box, "BoxConstraints.minHeight");
  var BoxConstraints_maxWidth = dart.privateName(box, "BoxConstraints.maxWidth");
  var BoxConstraints_minWidth = dart.privateName(box, "BoxConstraints.minWidth");
  var C6;
  var _calculateSizeWithChild = dart.privateName(shifted_box, "_calculateSizeWithChild");
  var C7;
  var C8;
  const RenderAligningShiftedBox_DebugOverflowIndicatorMixin$36 = class RenderAligningShiftedBox_DebugOverflowIndicatorMixin extends shifted_box.RenderAligningShiftedBox {};
  (RenderAligningShiftedBox_DebugOverflowIndicatorMixin$36.new = function(opts) {
    debug_overflow_indicator.DebugOverflowIndicatorMixin[dart.mixinNew].call(this);
    RenderAligningShiftedBox_DebugOverflowIndicatorMixin$36.__proto__.new.call(this, opts);
  }).prototype = RenderAligningShiftedBox_DebugOverflowIndicatorMixin$36.prototype;
  (RenderAligningShiftedBox_DebugOverflowIndicatorMixin$36.mixin = function(alignment, textDirection, child) {
    debug_overflow_indicator.DebugOverflowIndicatorMixin[dart.mixinNew].call(this);
    RenderAligningShiftedBox_DebugOverflowIndicatorMixin$36.__proto__.mixin.call(this, alignment, textDirection, child);
  }).prototype = RenderAligningShiftedBox_DebugOverflowIndicatorMixin$36.prototype;
  dart.applyMixin(RenderAligningShiftedBox_DebugOverflowIndicatorMixin$36, debug_overflow_indicator.DebugOverflowIndicatorMixin);
  shifted_box.RenderUnconstrainedBox = class RenderUnconstrainedBox extends RenderAligningShiftedBox_DebugOverflowIndicatorMixin$36 {
    get constrainedAxis() {
      return this[_constrainedAxis];
    }
    set constrainedAxis(value) {
      if (dart.equals(this[_constrainedAxis], value)) return;
      this[_constrainedAxis] = value;
      this.markNeedsLayout();
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (value == null) dart.nullFailed(L0, 696, 25, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 697, 12, "value != null");
      if (!dart.equals(value, this[_clipBehavior])) {
        this[_clipBehavior] = value;
        this.markNeedsPaint();
        this.markNeedsSemanticsUpdate();
      }
    }
    [_calculateSizeWithChild](opts) {
      let constraints = opts && 'constraints' in opts ? opts.constraints : null;
      if (constraints == null) dart.nullFailed(L0, 705, 57, "constraints");
      let layoutChild = opts && 'layoutChild' in opts ? opts.layoutChild : null;
      if (layoutChild == null) dart.nullFailed(L0, 705, 93, "layoutChild");
      if (!(this.child != null)) dart.assertFailed(null, L0, 706, 12, "child != null");
      let childConstraints = null;
      if (this.constrainedAxis != null) {
        switch (dart.nullCheck(this.constrainedAxis)) {
          case C4 || CT.C4:
          {
            childConstraints = new box.BoxConstraints.new({maxWidth: constraints.maxWidth, minWidth: constraints.minWidth});
            break;
          }
          case C5 || CT.C5:
          {
            childConstraints = new box.BoxConstraints.new({maxHeight: constraints.maxHeight, minHeight: constraints.minHeight});
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      } else {
        childConstraints = C6 || CT.C6;
      }
      return constraints.constrain(layoutChild(dart.nullCheck(this.child), childConstraints));
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 726, 40, "constraints");
      if (this.child == null) {
        return constraints.smallest;
      }
      return this[_calculateSizeWithChild]({constraints: constraints, layoutChild: C7 || CT.C7});
    }
    performLayout() {
      let constraints = this.constraints;
      if (this.child != null) {
        this.size = this[_calculateSizeWithChild]({constraints: constraints, layoutChild: C8 || CT.C8});
        this.alignChild();
        let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
        this[_overflowContainerRect] = ui.Offset.zero['&'](this.size);
        this[_overflowChildRect] = childParentData.offset['&'](dart.nullCheck(this.child).size);
      } else {
        this.size = constraints.smallest;
        this[_overflowContainerRect] = ui.Rect.zero;
        this[_overflowChildRect] = ui.Rect.zero;
      }
      this[_isOverflowing] = stack.RelativeRect.fromRect(this[_overflowContainerRect], this[_overflowChildRect]).hasInsets;
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 757, 30, "context");
      if (offset == null) dart.nullFailed(L0, 757, 46, "offset");
      if (this.child == null || dart.test(this.size.isEmpty)) return;
      if (!dart.test(this[_isOverflowing])) {
        super.paint(context, offset);
        return;
      }
      if (dart.equals(this.clipBehavior, ui.Clip.none)) {
        this[_clipRectLayer] = null;
        super.paint(context, offset);
      } else {
        this[_clipRectLayer] = context.pushClipRect(this.needsCompositing, offset, ui.Offset.zero['&'](this.size), dart.bind(this, 'paint', super.paint), {clipBehavior: this.clipBehavior, oldLayer: this[_clipRectLayer]});
      }
      if (!dart.test(dart.fn(() => {
        this.paintOverflowIndicator(context, offset, this[_overflowContainerRect], this[_overflowChildRect]);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 778, 12, "() {\n      paintOverflowIndicator(context, offset, _overflowContainerRect, _overflowChildRect);\n      return true;\n    }()");
    }
    describeApproximatePaintClip(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 787, 51, "child");
      return dart.test(this[_isOverflowing]) ? ui.Offset.zero['&'](this.size) : null;
    }
    toStringShort() {
      let header = super.toStringShort();
      if (dart.test(this[_isOverflowing])) header = dart.notNull(header) + " OVERFLOWING";
      return header;
    }
  };
  (shifted_box.RenderUnconstrainedBox.new = function(opts) {
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    if (alignment == null) dart.nullFailed(L0, 661, 32, "alignment");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let constrainedAxis = opts && 'constrainedAxis' in opts ? opts.constrainedAxis : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C3 || CT.C3;
    if (clipBehavior == null) dart.nullFailed(L0, 665, 10, "clipBehavior");
    this[_overflowContainerRect] = ui.Rect.zero;
    this[_overflowChildRect] = ui.Rect.zero;
    this[_isOverflowing] = false;
    this[_clipBehavior] = ui.Clip.none;
    this[_clipRectLayer] = null;
    if (!(alignment != null)) dart.assertFailed(null, L0, 666, 15, "alignment != null");
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 667, 15, "clipBehavior != null");
    this[_constrainedAxis] = constrainedAxis;
    this[_clipBehavior] = clipBehavior;
    shifted_box.RenderUnconstrainedBox.__proto__.mixin.call(this, alignment, textDirection, child);
    ;
  }).prototype = shifted_box.RenderUnconstrainedBox.prototype;
  dart.addTypeTests(shifted_box.RenderUnconstrainedBox);
  dart.addTypeCaches(shifted_box.RenderUnconstrainedBox);
  dart.setMethodSignature(shifted_box.RenderUnconstrainedBox, () => ({
    __proto__: dart.getMethods(shifted_box.RenderUnconstrainedBox.__proto__),
    [_calculateSizeWithChild]: dart.fnType(ui.Size, [], {}, {constraints: box.BoxConstraints, layoutChild: dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])})
  }));
  dart.setGetterSignature(shifted_box.RenderUnconstrainedBox, () => ({
    __proto__: dart.getGetters(shifted_box.RenderUnconstrainedBox.__proto__),
    constrainedAxis: dart.nullable(basic_types.Axis),
    clipBehavior: ui.Clip
  }));
  dart.setSetterSignature(shifted_box.RenderUnconstrainedBox, () => ({
    __proto__: dart.getSetters(shifted_box.RenderUnconstrainedBox.__proto__),
    constrainedAxis: dart.nullable(basic_types.Axis),
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(shifted_box.RenderUnconstrainedBox, L1);
  dart.setFieldSignature(shifted_box.RenderUnconstrainedBox, () => ({
    __proto__: dart.getFields(shifted_box.RenderUnconstrainedBox.__proto__),
    [_constrainedAxis]: dart.fieldType(dart.nullable(basic_types.Axis)),
    [_overflowContainerRect]: dart.fieldType(ui.Rect),
    [_overflowChildRect]: dart.fieldType(ui.Rect),
    [_isOverflowing]: dart.fieldType(core.bool),
    [_clipBehavior]: dart.fieldType(ui.Clip),
    [_clipRectLayer]: dart.fieldType(dart.nullable(layer.ClipRectLayer))
  }));
  var _requestedSize = dart.privateName(shifted_box, "_requestedSize");
  shifted_box.RenderSizedOverflowBox = class RenderSizedOverflowBox extends shifted_box.RenderAligningShiftedBox {
    get requestedSize() {
      return this[_requestedSize];
    }
    set requestedSize(value) {
      if (value == null) dart.nullFailed(L0, 833, 26, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 834, 12, "value != null");
      if (dart.equals(this[_requestedSize], value)) return;
      this[_requestedSize] = value;
      this.markNeedsLayout();
    }
    computeMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 842, 42, "height");
      return this[_requestedSize].width;
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 847, 42, "height");
      return this[_requestedSize].width;
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 852, 43, "width");
      return this[_requestedSize].height;
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 857, 43, "width");
      return this[_requestedSize].height;
    }
    computeDistanceToActualBaseline(baseline) {
      if (baseline == null) dart.nullFailed(L0, 862, 56, "baseline");
      if (this.child != null) return dart.nullCheck(this.child).getDistanceToActualBaseline(baseline);
      return super.computeDistanceToActualBaseline(baseline);
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 869, 40, "constraints");
      return constraints.constrain(this[_requestedSize]);
    }
    performLayout() {
      this.size = this.constraints.constrain(this[_requestedSize]);
      if (this.child != null) {
        dart.nullCheck(this.child).layout(this.constraints, {parentUsesSize: true});
        this.alignChild();
      }
    }
  };
  (shifted_box.RenderSizedOverflowBox.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let requestedSize = opts && 'requestedSize' in opts ? opts.requestedSize : null;
    if (requestedSize == null) dart.nullFailed(L0, 823, 19, "requestedSize");
    let alignment = opts && 'alignment' in opts ? opts.alignment : C0 || CT.C0;
    if (alignment == null) dart.nullFailed(L0, 824, 23, "alignment");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    if (!(requestedSize != null)) dart.assertFailed(null, L0, 826, 15, "requestedSize != null");
    this[_requestedSize] = requestedSize;
    shifted_box.RenderSizedOverflowBox.__proto__.new.call(this, {child: child, alignment: alignment, textDirection: textDirection});
    ;
  }).prototype = shifted_box.RenderSizedOverflowBox.prototype;
  dart.addTypeTests(shifted_box.RenderSizedOverflowBox);
  dart.addTypeCaches(shifted_box.RenderSizedOverflowBox);
  dart.setGetterSignature(shifted_box.RenderSizedOverflowBox, () => ({
    __proto__: dart.getGetters(shifted_box.RenderSizedOverflowBox.__proto__),
    requestedSize: ui.Size
  }));
  dart.setSetterSignature(shifted_box.RenderSizedOverflowBox, () => ({
    __proto__: dart.getSetters(shifted_box.RenderSizedOverflowBox.__proto__),
    requestedSize: ui.Size
  }));
  dart.setLibraryUri(shifted_box.RenderSizedOverflowBox, L1);
  dart.setFieldSignature(shifted_box.RenderSizedOverflowBox, () => ({
    __proto__: dart.getFields(shifted_box.RenderSizedOverflowBox.__proto__),
    [_requestedSize]: dart.fieldType(ui.Size)
  }));
  shifted_box.RenderFractionallySizedOverflowBox = class RenderFractionallySizedOverflowBox extends shifted_box.RenderAligningShiftedBox {
    get widthFactor() {
      return this[_widthFactor];
    }
    set widthFactor(value) {
      if (!(value == null || dart.notNull(value) >= 0.0)) dart.assertFailed(null, L0, 925, 12, "value == null || value >= 0.0");
      if (this[_widthFactor] == value) return;
      this[_widthFactor] = value;
      this.markNeedsLayout();
    }
    get heightFactor() {
      return this[_heightFactor];
    }
    set heightFactor(value) {
      if (!(value == null || dart.notNull(value) >= 0.0)) dart.assertFailed(null, L0, 940, 12, "value == null || value >= 0.0");
      if (this[_heightFactor] == value) return;
      this[_heightFactor] = value;
      this.markNeedsLayout();
    }
    [_getInnerConstraints](constraints) {
      if (constraints == null) dart.nullFailed(L0, 947, 54, "constraints");
      let minWidth = constraints.minWidth;
      let maxWidth = constraints.maxWidth;
      if (this[_widthFactor] != null) {
        let width = dart.notNull(maxWidth) * dart.nullCheck(this[_widthFactor]);
        minWidth = width;
        maxWidth = width;
      }
      let minHeight = constraints.minHeight;
      let maxHeight = constraints.maxHeight;
      if (this[_heightFactor] != null) {
        let height = dart.notNull(maxHeight) * dart.nullCheck(this[_heightFactor]);
        minHeight = height;
        maxHeight = height;
      }
      return new box.BoxConstraints.new({minWidth: minWidth, maxWidth: maxWidth, minHeight: minHeight, maxHeight: maxHeight});
    }
    computeMinIntrinsicWidth(height) {
      let t0, t0$;
      if (height == null) dart.nullFailed(L0, 971, 42, "height");
      let result = null;
      if (this.child == null) {
        result = super.computeMinIntrinsicWidth(height);
      } else {
        result = dart.nullCheck(this.child).getMinIntrinsicWidth(dart.notNull(height) * dart.notNull((t0 = this[_heightFactor], t0 == null ? 1.0 : t0)));
      }
      if (!result[$isFinite]) dart.assertFailed(null, L0, 978, 12, "result.isFinite");
      return dart.notNull(result) / dart.notNull((t0$ = this[_widthFactor], t0$ == null ? 1.0 : t0$));
    }
    computeMaxIntrinsicWidth(height) {
      let t0, t0$;
      if (height == null) dart.nullFailed(L0, 983, 42, "height");
      let result = null;
      if (this.child == null) {
        result = super.computeMaxIntrinsicWidth(height);
      } else {
        result = dart.nullCheck(this.child).getMaxIntrinsicWidth(dart.notNull(height) * dart.notNull((t0 = this[_heightFactor], t0 == null ? 1.0 : t0)));
      }
      if (!result[$isFinite]) dart.assertFailed(null, L0, 990, 12, "result.isFinite");
      return dart.notNull(result) / dart.notNull((t0$ = this[_widthFactor], t0$ == null ? 1.0 : t0$));
    }
    computeMinIntrinsicHeight(width) {
      let t0, t0$;
      if (width == null) dart.nullFailed(L0, 995, 43, "width");
      let result = null;
      if (this.child == null) {
        result = super.computeMinIntrinsicHeight(width);
      } else {
        result = dart.nullCheck(this.child).getMinIntrinsicHeight(dart.notNull(width) * dart.notNull((t0 = this[_widthFactor], t0 == null ? 1.0 : t0)));
      }
      if (!result[$isFinite]) dart.assertFailed(null, L0, 1002, 12, "result.isFinite");
      return dart.notNull(result) / dart.notNull((t0$ = this[_heightFactor], t0$ == null ? 1.0 : t0$));
    }
    computeMaxIntrinsicHeight(width) {
      let t0, t0$;
      if (width == null) dart.nullFailed(L0, 1007, 43, "width");
      let result = null;
      if (this.child == null) {
        result = super.computeMaxIntrinsicHeight(width);
      } else {
        result = dart.nullCheck(this.child).getMaxIntrinsicHeight(dart.notNull(width) * dart.notNull((t0 = this[_widthFactor], t0 == null ? 1.0 : t0)));
      }
      if (!result[$isFinite]) dart.assertFailed(null, L0, 1014, 12, "result.isFinite");
      return dart.notNull(result) / dart.notNull((t0$ = this[_heightFactor], t0$ == null ? 1.0 : t0$));
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 1019, 40, "constraints");
      if (this.child != null) {
        let childSize = dart.nullCheck(this.child).getDryLayout(this[_getInnerConstraints](constraints));
        return constraints.constrain(childSize);
      }
      return constraints.constrain(this[_getInnerConstraints](constraints).constrain(ui.Size.zero));
    }
    performLayout() {
      if (this.child != null) {
        dart.nullCheck(this.child).layout(this[_getInnerConstraints](this.constraints), {parentUsesSize: true});
        this.size = this.constraints.constrain(dart.nullCheck(this.child).size);
        this.alignChild();
      } else {
        this.size = this.constraints.constrain(this[_getInnerConstraints](this.constraints).constrain(ui.Size.zero));
      }
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1039, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("widthFactor", this[_widthFactor], {ifNull: "pass-through"}));
      properties.add(new diagnostics.DoubleProperty.new("heightFactor", this[_heightFactor], {ifNull: "pass-through"}));
    }
  };
  (shifted_box.RenderFractionallySizedOverflowBox.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let widthFactor = opts && 'widthFactor' in opts ? opts.widthFactor : null;
    let heightFactor = opts && 'heightFactor' in opts ? opts.heightFactor : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C0 || CT.C0;
    if (alignment == null) dart.nullFailed(L0, 908, 23, "alignment");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    this[_widthFactor] = widthFactor;
    this[_heightFactor] = heightFactor;
    shifted_box.RenderFractionallySizedOverflowBox.__proto__.new.call(this, {child: child, alignment: alignment, textDirection: textDirection});
    if (!(this[_widthFactor] == null || dart.nullCheck(this[_widthFactor]) >= 0.0)) dart.assertFailed(null, L0, 913, 12, "_widthFactor == null || _widthFactor! >= 0.0");
    if (!(this[_heightFactor] == null || dart.nullCheck(this[_heightFactor]) >= 0.0)) dart.assertFailed(null, L0, 914, 12, "_heightFactor == null || _heightFactor! >= 0.0");
  }).prototype = shifted_box.RenderFractionallySizedOverflowBox.prototype;
  dart.addTypeTests(shifted_box.RenderFractionallySizedOverflowBox);
  dart.addTypeCaches(shifted_box.RenderFractionallySizedOverflowBox);
  dart.setMethodSignature(shifted_box.RenderFractionallySizedOverflowBox, () => ({
    __proto__: dart.getMethods(shifted_box.RenderFractionallySizedOverflowBox.__proto__),
    [_getInnerConstraints]: dart.fnType(box.BoxConstraints, [box.BoxConstraints])
  }));
  dart.setGetterSignature(shifted_box.RenderFractionallySizedOverflowBox, () => ({
    __proto__: dart.getGetters(shifted_box.RenderFractionallySizedOverflowBox.__proto__),
    widthFactor: dart.nullable(core.double),
    heightFactor: dart.nullable(core.double)
  }));
  dart.setSetterSignature(shifted_box.RenderFractionallySizedOverflowBox, () => ({
    __proto__: dart.getSetters(shifted_box.RenderFractionallySizedOverflowBox.__proto__),
    widthFactor: dart.nullable(core.double),
    heightFactor: dart.nullable(core.double)
  }));
  dart.setLibraryUri(shifted_box.RenderFractionallySizedOverflowBox, L1);
  dart.setFieldSignature(shifted_box.RenderFractionallySizedOverflowBox, () => ({
    __proto__: dart.getFields(shifted_box.RenderFractionallySizedOverflowBox.__proto__),
    [_widthFactor]: dart.fieldType(dart.nullable(core.double)),
    [_heightFactor]: dart.fieldType(dart.nullable(core.double))
  }));
  var _relayout = dart.privateName(shifted_box, "_relayout");
  var _relayout$ = dart.privateName(shifted_box, "SingleChildLayoutDelegate._relayout");
  shifted_box.SingleChildLayoutDelegate = class SingleChildLayoutDelegate extends core.Object {
    get [_relayout]() {
      return this[_relayout$];
    }
    set [_relayout](value) {
      super[_relayout] = value;
    }
    getSize(constraints) {
      if (constraints == null) dart.nullFailed(L0, 1083, 31, "constraints");
      return constraints.biggest;
    }
    getConstraintsForChild(constraints) {
      if (constraints == null) dart.nullFailed(L0, 1092, 56, "constraints");
      return constraints;
    }
    getPositionForChild(size, childSize) {
      if (size == null) dart.nullFailed(L0, 1103, 35, "size");
      if (childSize == null) dart.nullFailed(L0, 1103, 46, "childSize");
      return ui.Offset.zero;
    }
  };
  (shifted_box.SingleChildLayoutDelegate.new = function(opts) {
    let relayout = opts && 'relayout' in opts ? opts.relayout : null;
    this[_relayout$] = relayout;
    ;
  }).prototype = shifted_box.SingleChildLayoutDelegate.prototype;
  dart.addTypeTests(shifted_box.SingleChildLayoutDelegate);
  dart.addTypeCaches(shifted_box.SingleChildLayoutDelegate);
  dart.setMethodSignature(shifted_box.SingleChildLayoutDelegate, () => ({
    __proto__: dart.getMethods(shifted_box.SingleChildLayoutDelegate.__proto__),
    getSize: dart.fnType(ui.Size, [box.BoxConstraints]),
    getConstraintsForChild: dart.fnType(box.BoxConstraints, [box.BoxConstraints]),
    getPositionForChild: dart.fnType(ui.Offset, [ui.Size, ui.Size])
  }));
  dart.setLibraryUri(shifted_box.SingleChildLayoutDelegate, L1);
  dart.setFieldSignature(shifted_box.SingleChildLayoutDelegate, () => ({
    __proto__: dart.getFields(shifted_box.SingleChildLayoutDelegate.__proto__),
    [_relayout]: dart.finalFieldType(dart.nullable(change_notifier.Listenable))
  }));
  var _delegate = dart.privateName(shifted_box, "_delegate");
  var _getSize = dart.privateName(shifted_box, "_getSize");
  shifted_box.RenderCustomSingleChildLayoutBox = class RenderCustomSingleChildLayoutBox extends shifted_box.RenderShiftedBox {
    get delegate() {
      return this[_delegate];
    }
    set delegate(newDelegate) {
      let t0, t0$;
      if (newDelegate == null) dart.nullFailed(L0, 1147, 42, "newDelegate");
      if (!(newDelegate != null)) dart.assertFailed(null, L0, 1148, 12, "newDelegate != null");
      if (dart.equals(this[_delegate], newDelegate)) return;
      let oldDelegate = this[_delegate];
      if (!dart.equals(dart.runtimeType(newDelegate), dart.runtimeType(oldDelegate)) || dart.test(newDelegate.shouldRelayout(oldDelegate))) this.markNeedsLayout();
      this[_delegate] = newDelegate;
      if (dart.test(this.attached)) {
        t0 = oldDelegate[_relayout];
        t0 == null ? null : t0.removeListener(dart.bind(this, 'markNeedsLayout'));
        t0$ = newDelegate[_relayout];
        t0$ == null ? null : t0$.addListener(dart.bind(this, 'markNeedsLayout'));
      }
    }
    attach(owner) {
      let t0;
      object.PipelineOwner.as(owner);
      if (owner == null) dart.nullFailed(L0, 1162, 29, "owner");
      super.attach(owner);
      t0 = this[_delegate][_relayout];
      t0 == null ? null : t0.addListener(dart.bind(this, 'markNeedsLayout'));
    }
    detach() {
      let t0;
      t0 = this[_delegate][_relayout];
      t0 == null ? null : t0.removeListener(dart.bind(this, 'markNeedsLayout'));
      super.detach();
    }
    [_getSize](constraints) {
      if (constraints == null) dart.nullFailed(L0, 1173, 32, "constraints");
      return constraints.constrain(this[_delegate].getSize(constraints));
    }
    computeMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 1182, 42, "height");
      let width = this[_getSize](new box.BoxConstraints.tightForFinite({height: height})).width;
      if (width[$isFinite]) return width;
      return 0.0;
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 1190, 42, "height");
      let width = this[_getSize](new box.BoxConstraints.tightForFinite({height: height})).width;
      if (width[$isFinite]) return width;
      return 0.0;
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 1198, 43, "width");
      let height = this[_getSize](new box.BoxConstraints.tightForFinite({width: width})).height;
      if (height[$isFinite]) return height;
      return 0.0;
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 1206, 43, "width");
      let height = this[_getSize](new box.BoxConstraints.tightForFinite({width: width})).height;
      if (height[$isFinite]) return height;
      return 0.0;
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 1214, 40, "constraints");
      return this[_getSize](constraints);
    }
    performLayout() {
      this.size = this[_getSize](this.constraints);
      if (this.child != null) {
        let childConstraints = this.delegate.getConstraintsForChild(this.constraints);
        if (!dart.test(childConstraints.debugAssertIsValid({isAppliedConstraint: true}))) dart.assertFailed(null, L0, 1223, 14, "childConstraints.debugAssertIsValid(isAppliedConstraint: true)");
        dart.nullCheck(this.child).layout(childConstraints, {parentUsesSize: !dart.test(childConstraints.isTight)});
        let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
        childParentData.offset = this.delegate.getPositionForChild(this.size, dart.test(childConstraints.isTight) ? childConstraints.smallest : dart.nullCheck(this.child).size);
      }
    }
  };
  (shifted_box.RenderCustomSingleChildLayoutBox.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    if (delegate == null) dart.nullFailed(L0, 1139, 40, "delegate");
    if (!(delegate != null)) dart.assertFailed(null, L0, 1140, 15, "delegate != null");
    this[_delegate] = delegate;
    shifted_box.RenderCustomSingleChildLayoutBox.__proto__.new.call(this, child);
    ;
  }).prototype = shifted_box.RenderCustomSingleChildLayoutBox.prototype;
  dart.addTypeTests(shifted_box.RenderCustomSingleChildLayoutBox);
  dart.addTypeCaches(shifted_box.RenderCustomSingleChildLayoutBox);
  dart.setMethodSignature(shifted_box.RenderCustomSingleChildLayoutBox, () => ({
    __proto__: dart.getMethods(shifted_box.RenderCustomSingleChildLayoutBox.__proto__),
    [_getSize]: dart.fnType(ui.Size, [box.BoxConstraints])
  }));
  dart.setGetterSignature(shifted_box.RenderCustomSingleChildLayoutBox, () => ({
    __proto__: dart.getGetters(shifted_box.RenderCustomSingleChildLayoutBox.__proto__),
    delegate: shifted_box.SingleChildLayoutDelegate
  }));
  dart.setSetterSignature(shifted_box.RenderCustomSingleChildLayoutBox, () => ({
    __proto__: dart.getSetters(shifted_box.RenderCustomSingleChildLayoutBox.__proto__),
    delegate: shifted_box.SingleChildLayoutDelegate
  }));
  dart.setLibraryUri(shifted_box.RenderCustomSingleChildLayoutBox, L1);
  dart.setFieldSignature(shifted_box.RenderCustomSingleChildLayoutBox, () => ({
    __proto__: dart.getFields(shifted_box.RenderCustomSingleChildLayoutBox.__proto__),
    [_delegate]: dart.fieldType(shifted_box.SingleChildLayoutDelegate)
  }));
  var _baseline = dart.privateName(shifted_box, "_baseline");
  var _baselineType = dart.privateName(shifted_box, "_baselineType");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C9;
  shifted_box.RenderBaseline = class RenderBaseline extends shifted_box.RenderShiftedBox {
    get baseline() {
      return this[_baseline];
    }
    set baseline(value) {
      if (value == null) dart.nullFailed(L0, 1265, 23, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 1266, 12, "value != null");
      if (this[_baseline] == value) return;
      this[_baseline] = value;
      this.markNeedsLayout();
    }
    get baselineType() {
      return this[_baselineType];
    }
    set baselineType(value) {
      if (value == null) dart.nullFailed(L0, 1276, 33, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 1277, 12, "value != null");
      if (dart.equals(this[_baselineType], value)) return;
      this[_baselineType] = value;
      this.markNeedsLayout();
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 1285, 40, "constraints");
      if (this.child != null) {
        if (!dart.test(this.debugCannotComputeDryLayout({reason: "Baseline metrics are only available after a full layout."}))) dart.assertFailed(null, L0, 1287, 14, "debugCannotComputeDryLayout(\n        reason: 'Baseline metrics are only available after a full layout.',\n      )");
        return C9 || CT.C9;
      }
      return constraints.smallest;
    }
    performLayout() {
      if (this.child != null) {
        let constraints = this.constraints;
        dart.nullCheck(this.child).layout(constraints.loosen(), {parentUsesSize: true});
        let childBaseline = dart.nullCheck(dart.nullCheck(this.child).getDistanceToBaseline(this.baselineType));
        let actualBaseline = this.baseline;
        let top = dart.notNull(actualBaseline) - childBaseline;
        let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
        childParentData.offset = new ui.Offset.new(0.0, top);
        let childSize = dart.nullCheck(this.child).size;
        this.size = constraints.constrain(new ui.Size.new(childSize.width, top + dart.notNull(childSize.height)));
      } else {
        this.size = this.constraints.smallest;
      }
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1313, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("baseline", this.baseline));
      properties.add(new (EnumPropertyOfTextBaseline()).new("baselineType", this.baselineType));
    }
  };
  (shifted_box.RenderBaseline.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let baseline = opts && 'baseline' in opts ? opts.baseline : null;
    if (baseline == null) dart.nullFailed(L0, 1253, 21, "baseline");
    let baselineType = opts && 'baselineType' in opts ? opts.baselineType : null;
    if (baselineType == null) dart.nullFailed(L0, 1254, 27, "baselineType");
    if (!(baseline != null)) dart.assertFailed(null, L0, 1255, 15, "baseline != null");
    if (!(baselineType != null)) dart.assertFailed(null, L0, 1256, 15, "baselineType != null");
    this[_baseline] = baseline;
    this[_baselineType] = baselineType;
    shifted_box.RenderBaseline.__proto__.new.call(this, child);
    ;
  }).prototype = shifted_box.RenderBaseline.prototype;
  dart.addTypeTests(shifted_box.RenderBaseline);
  dart.addTypeCaches(shifted_box.RenderBaseline);
  dart.setGetterSignature(shifted_box.RenderBaseline, () => ({
    __proto__: dart.getGetters(shifted_box.RenderBaseline.__proto__),
    baseline: core.double,
    baselineType: ui.TextBaseline
  }));
  dart.setSetterSignature(shifted_box.RenderBaseline, () => ({
    __proto__: dart.getSetters(shifted_box.RenderBaseline.__proto__),
    baseline: core.double,
    baselineType: ui.TextBaseline
  }));
  dart.setLibraryUri(shifted_box.RenderBaseline, L1);
  dart.setFieldSignature(shifted_box.RenderBaseline, () => ({
    __proto__: dart.getFields(shifted_box.RenderBaseline.__proto__),
    [_baseline]: dart.fieldType(core.double),
    [_baselineType]: dart.fieldType(ui.TextBaseline)
  }));
  dart.trackLibraries("packages/flutter/src/rendering/shifted_box.dart", {
    "package:flutter/src/rendering/shifted_box.dart": shifted_box
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shifted_box.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/shifted_box.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__shifted_box: shifted_box
  };
}));

//# sourceMappingURL=shifted_box.dart.lib.js.map
