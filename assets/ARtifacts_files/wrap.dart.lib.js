define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/rendering/layout_helper.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__rendering__wrap_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__rendering__layout_helper$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const layout_helper = packages__flutter__src__rendering__layout_helper$46dart.src__rendering__layout_helper;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var wrap = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $isNotEmpty = dartx.isNotEmpty;
  var $add = dartx.add;
  var $length = dartx.length;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var WrapAlignmentL = () => (WrapAlignmentL = dart.constFn(dart.legacy(wrap.WrapAlignment)))();
  var WrapCrossAlignmentL = () => (WrapCrossAlignmentL = dart.constFn(dart.legacy(wrap.WrapCrossAlignment)))();
  var RenderBoxAndBoxConstraintsToSize = () => (RenderBoxAndBoxConstraintsToSize = dart.constFn(dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])))();
  var JSArrayOf_RunMetrics = () => (JSArrayOf_RunMetrics = dart.constFn(_interceptors.JSArray$(wrap._RunMetrics)))();
  var EnumPropertyOfAxis = () => (EnumPropertyOfAxis = dart.constFn(diagnostics.EnumProperty$(basic_types.Axis)))();
  var EnumPropertyOfWrapAlignment = () => (EnumPropertyOfWrapAlignment = dart.constFn(diagnostics.EnumProperty$(wrap.WrapAlignment)))();
  var EnumPropertyOfTextDirection = () => (EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))();
  var EnumPropertyOfVerticalDirection = () => (EnumPropertyOfVerticalDirection = dart.constFn(diagnostics.EnumProperty$(basic_types.VerticalDirection)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/wrap.dart";
  var L1 = "package:flutter/src/rendering/wrap.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: wrap.WrapAlignment.prototype,
        [_name$]: "WrapAlignment.start",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: wrap.WrapAlignment.prototype,
        [_name$]: "WrapAlignment.end",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: wrap.WrapAlignment.prototype,
        [_name$]: "WrapAlignment.center",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: wrap.WrapAlignment.prototype,
        [_name$]: "WrapAlignment.spaceBetween",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: wrap.WrapAlignment.prototype,
        [_name$]: "WrapAlignment.spaceAround",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: wrap.WrapAlignment.prototype,
        [_name$]: "WrapAlignment.spaceEvenly",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], WrapAlignmentL());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: wrap.WrapCrossAlignment.prototype,
        [_name$]: "WrapCrossAlignment.start",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: wrap.WrapCrossAlignment.prototype,
        [_name$]: "WrapCrossAlignment.end",
        index: 1
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: wrap.WrapCrossAlignment.prototype,
        [_name$]: "WrapCrossAlignment.center",
        index: 2
      });
    },
    get C10() {
      return C10 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], WrapCrossAlignmentL());
    },
    get C11() {
      return C11 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.horizontal",
        index: 0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: basic_types.VerticalDirection.prototype,
        [_name]: "VerticalDirection.down",
        index: 1
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name$0]: "Clip.none",
        index: 0
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.vertical",
        index: 1
      });
    },
    get C15() {
      return C15 = dart.fn(layout_helper.ChildLayoutHelper.dryLayoutChild, RenderBoxAndBoxConstraintsToSize());
    }
  }, false);
  var _name$ = dart.privateName(wrap, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  wrap.WrapAlignment = class WrapAlignment extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (wrap.WrapAlignment.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 16, 6, "index");
    if (_name == null) dart.nullFailed(L0, 16, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = wrap.WrapAlignment.prototype;
  dart.addTypeTests(wrap.WrapAlignment);
  dart.addTypeCaches(wrap.WrapAlignment);
  dart.setLibraryUri(wrap.WrapAlignment, L1);
  dart.setFieldSignature(wrap.WrapAlignment, () => ({
    __proto__: dart.getFields(wrap.WrapAlignment.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(wrap.WrapAlignment, ['toString']);
  wrap.WrapAlignment.start = C0 || CT.C0;
  wrap.WrapAlignment.end = C1 || CT.C1;
  wrap.WrapAlignment.center = C2 || CT.C2;
  wrap.WrapAlignment.spaceBetween = C3 || CT.C3;
  wrap.WrapAlignment.spaceAround = C4 || CT.C4;
  wrap.WrapAlignment.spaceEvenly = C5 || CT.C5;
  wrap.WrapAlignment.values = C6 || CT.C6;
  var C7;
  var C8;
  var C9;
  var C10;
  wrap.WrapCrossAlignment = class WrapCrossAlignment extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (wrap.WrapCrossAlignment.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 51, 6, "index");
    if (_name == null) dart.nullFailed(L0, 51, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = wrap.WrapCrossAlignment.prototype;
  dart.addTypeTests(wrap.WrapCrossAlignment);
  dart.addTypeCaches(wrap.WrapCrossAlignment);
  dart.setLibraryUri(wrap.WrapCrossAlignment, L1);
  dart.setFieldSignature(wrap.WrapCrossAlignment, () => ({
    __proto__: dart.getFields(wrap.WrapCrossAlignment.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(wrap.WrapCrossAlignment, ['toString']);
  wrap.WrapCrossAlignment.start = C7 || CT.C7;
  wrap.WrapCrossAlignment.end = C8 || CT.C8;
  wrap.WrapCrossAlignment.center = C9 || CT.C9;
  wrap.WrapCrossAlignment.values = C10 || CT.C10;
  wrap._RunMetrics = class _RunMetrics extends core.Object {};
  (wrap._RunMetrics.new = function(mainAxisExtent, crossAxisExtent, childCount) {
    if (mainAxisExtent == null) dart.nullFailed(L0, 80, 20, "mainAxisExtent");
    if (crossAxisExtent == null) dart.nullFailed(L0, 80, 41, "crossAxisExtent");
    if (childCount == null) dart.nullFailed(L0, 80, 63, "childCount");
    this.mainAxisExtent = mainAxisExtent;
    this.crossAxisExtent = crossAxisExtent;
    this.childCount = childCount;
    ;
  }).prototype = wrap._RunMetrics.prototype;
  dart.addTypeTests(wrap._RunMetrics);
  dart.addTypeCaches(wrap._RunMetrics);
  dart.setLibraryUri(wrap._RunMetrics, L1);
  dart.setFieldSignature(wrap._RunMetrics, () => ({
    __proto__: dart.getFields(wrap._RunMetrics.__proto__),
    mainAxisExtent: dart.finalFieldType(core.double),
    crossAxisExtent: dart.finalFieldType(core.double),
    childCount: dart.finalFieldType(core.int)
  }));
  var _runIndex = dart.privateName(wrap, "_runIndex");
  wrap.WrapParentData = class WrapParentData extends box.ContainerBoxParentData$(box.RenderBox) {};
  (wrap.WrapParentData.new = function() {
    this[_runIndex] = 0;
    wrap.WrapParentData.__proto__.new.call(this);
    ;
  }).prototype = wrap.WrapParentData.prototype;
  dart.addTypeTests(wrap.WrapParentData);
  dart.addTypeCaches(wrap.WrapParentData);
  dart.setLibraryUri(wrap.WrapParentData, L1);
  dart.setFieldSignature(wrap.WrapParentData, () => ({
    __proto__: dart.getFields(wrap.WrapParentData.__proto__),
    [_runIndex]: dart.fieldType(core.int)
  }));
  var _name = dart.privateName(basic_types, "_name");
  var C11;
  var C12;
  var _name$0 = dart.privateName(ui, "_name");
  var C13;
  var _clipBehavior = dart.privateName(wrap, "_clipBehavior");
  var _hasVisualOverflow = dart.privateName(wrap, "_hasVisualOverflow");
  var _clipRectLayer = dart.privateName(wrap, "_clipRectLayer");
  var _direction = dart.privateName(wrap, "_direction");
  var _alignment = dart.privateName(wrap, "_alignment");
  var _spacing = dart.privateName(wrap, "_spacing");
  var _runAlignment = dart.privateName(wrap, "_runAlignment");
  var _runSpacing = dart.privateName(wrap, "_runSpacing");
  var _crossAxisAlignment = dart.privateName(wrap, "_crossAxisAlignment");
  var _textDirection = dart.privateName(wrap, "_textDirection");
  var _verticalDirection = dart.privateName(wrap, "_verticalDirection");
  var C14;
  var _debugHasNecessaryDirections = dart.privateName(wrap, "_debugHasNecessaryDirections");
  var _getMainAxisExtent = dart.privateName(wrap, "_getMainAxisExtent");
  var _getCrossAxisExtent = dart.privateName(wrap, "_getCrossAxisExtent");
  var _getOffset = dart.privateName(wrap, "_getOffset");
  var _getChildCrossAxisOffset = dart.privateName(wrap, "_getChildCrossAxisOffset");
  var _computeDryLayout = dart.privateName(wrap, "_computeDryLayout");
  var C15;
  const RenderBox_ContainerRenderObjectMixin$36 = class RenderBox_ContainerRenderObjectMixin extends box.RenderBox {};
  (RenderBox_ContainerRenderObjectMixin$36.new = function() {
    object.ContainerRenderObjectMixin$(box.RenderBox, wrap.WrapParentData)[dart.mixinNew].call(this);
    RenderBox_ContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_ContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderBox_ContainerRenderObjectMixin$36, object.ContainerRenderObjectMixin$(box.RenderBox, wrap.WrapParentData));
  const RenderBox_RenderBoxContainerDefaultsMixin$36 = class RenderBox_RenderBoxContainerDefaultsMixin extends RenderBox_ContainerRenderObjectMixin$36 {};
  (RenderBox_RenderBoxContainerDefaultsMixin$36.new = function() {
    RenderBox_RenderBoxContainerDefaultsMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderBoxContainerDefaultsMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderBoxContainerDefaultsMixin$36, box.RenderBoxContainerDefaultsMixin$(box.RenderBox, wrap.WrapParentData));
  wrap.RenderWrap = class RenderWrap extends RenderBox_RenderBoxContainerDefaultsMixin$36 {
    get direction() {
      return this[_direction];
    }
    set direction(value) {
      if (value == null) dart.nullFailed(L0, 151, 23, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 152, 12, "value != null");
      if (dart.equals(this[_direction], value)) return;
      this[_direction] = value;
      this.markNeedsLayout();
    }
    get alignment() {
      return this[_alignment];
    }
    set alignment(value) {
      if (value == null) dart.nullFailed(L0, 174, 32, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 175, 12, "value != null");
      if (dart.equals(this[_alignment], value)) return;
      this[_alignment] = value;
      this.markNeedsLayout();
    }
    get spacing() {
      return this[_spacing];
    }
    set spacing(value) {
      if (value == null) dart.nullFailed(L0, 195, 23, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 196, 12, "value != null");
      if (this[_spacing] == value) return;
      this[_spacing] = value;
      this.markNeedsLayout();
    }
    get runAlignment() {
      return this[_runAlignment];
    }
    set runAlignment(value) {
      if (value == null) dart.nullFailed(L0, 219, 35, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 220, 12, "value != null");
      if (dart.equals(this[_runAlignment], value)) return;
      this[_runAlignment] = value;
      this.markNeedsLayout();
    }
    get runSpacing() {
      return this[_runSpacing];
    }
    set runSpacing(value) {
      if (value == null) dart.nullFailed(L0, 239, 26, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 240, 12, "value != null");
      if (this[_runSpacing] == value) return;
      this[_runSpacing] = value;
      this.markNeedsLayout();
    }
    get crossAxisAlignment() {
      return this[_crossAxisAlignment];
    }
    set crossAxisAlignment(value) {
      if (value == null) dart.nullFailed(L0, 264, 46, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 265, 12, "value != null");
      if (dart.equals(this[_crossAxisAlignment], value)) return;
      this[_crossAxisAlignment] = value;
      this.markNeedsLayout();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (!dart.equals(this[_textDirection], value)) {
        this[_textDirection] = value;
        this.markNeedsLayout();
      }
    }
    get verticalDirection() {
      return this[_verticalDirection];
    }
    set verticalDirection(value) {
      if (value == null) dart.nullFailed(L0, 328, 43, "value");
      if (!dart.equals(this[_verticalDirection], value)) {
        this[_verticalDirection] = value;
        this.markNeedsLayout();
      }
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (value == null) dart.nullFailed(L0, 340, 25, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 341, 12, "value != null");
      if (!dart.equals(value, this[_clipBehavior])) {
        this[_clipBehavior] = value;
        this.markNeedsPaint();
        this.markNeedsSemanticsUpdate();
      }
    }
    get [_debugHasNecessaryDirections]() {
      if (!(this.direction != null)) dart.assertFailed(null, L0, 350, 12, "direction != null");
      if (!(this.alignment != null)) dart.assertFailed(null, L0, 351, 12, "alignment != null");
      if (!(this.runAlignment != null)) dart.assertFailed(null, L0, 352, 12, "runAlignment != null");
      if (!(this.crossAxisAlignment != null)) dart.assertFailed(null, L0, 353, 12, "crossAxisAlignment != null");
      if (this.firstChild != null && !dart.equals(this.lastChild, this.firstChild)) {
        switch (this.direction) {
          case C11 || CT.C11:
          {
            if (!(this.textDirection != null)) dart.assertFailed("Horizontal " + dart.str(this[$runtimeType]) + " with multiple children has a null textDirection, so the layout order is undefined.", L0, 358, 18, "textDirection != null");
            break;
          }
          case C14 || CT.C14:
          {
            if (!(this.verticalDirection != null)) dart.assertFailed("Vertical " + dart.str(this[$runtimeType]) + " with multiple children has a null verticalDirection, so the layout order is undefined.", L0, 361, 18, "verticalDirection != null");
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      if (dart.equals(this.alignment, wrap.WrapAlignment.start) || dart.equals(this.alignment, wrap.WrapAlignment.end)) {
        switch (this.direction) {
          case C11 || CT.C11:
          {
            if (!(this.textDirection != null)) dart.assertFailed("Horizontal " + dart.str(this[$runtimeType]) + " with alignment " + dart.str(this.alignment) + " has a null textDirection, so the alignment cannot be resolved.", L0, 368, 18, "textDirection != null");
            break;
          }
          case C14 || CT.C14:
          {
            if (!(this.verticalDirection != null)) dart.assertFailed("Vertical " + dart.str(this[$runtimeType]) + " with alignment " + dart.str(this.alignment) + " has a null verticalDirection, so the alignment cannot be resolved.", L0, 371, 18, "verticalDirection != null");
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      if (dart.equals(this.runAlignment, wrap.WrapAlignment.start) || dart.equals(this.runAlignment, wrap.WrapAlignment.end)) {
        switch (this.direction) {
          case C11 || CT.C11:
          {
            if (!(this.verticalDirection != null)) dart.assertFailed("Horizontal " + dart.str(this[$runtimeType]) + " with runAlignment " + dart.str(this.runAlignment) + " has a null verticalDirection, so the alignment cannot be resolved.", L0, 378, 18, "verticalDirection != null");
            break;
          }
          case C14 || CT.C14:
          {
            if (!(this.textDirection != null)) dart.assertFailed("Vertical " + dart.str(this[$runtimeType]) + " with runAlignment " + dart.str(this.runAlignment) + " has a null textDirection, so the alignment cannot be resolved.", L0, 381, 18, "textDirection != null");
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      if (dart.equals(this.crossAxisAlignment, wrap.WrapCrossAlignment.start) || dart.equals(this.crossAxisAlignment, wrap.WrapCrossAlignment.end)) {
        switch (this.direction) {
          case C11 || CT.C11:
          {
            if (!(this.verticalDirection != null)) dart.assertFailed("Horizontal " + dart.str(this[$runtimeType]) + " with crossAxisAlignment " + dart.str(this.crossAxisAlignment) + " has a null verticalDirection, so the alignment cannot be resolved.", L0, 388, 18, "verticalDirection != null");
            break;
          }
          case C14 || CT.C14:
          {
            if (!(this.textDirection != null)) dart.assertFailed("Vertical " + dart.str(this[$runtimeType]) + " with crossAxisAlignment " + dart.str(this.crossAxisAlignment) + " has a null textDirection, so the alignment cannot be resolved.", L0, 391, 18, "textDirection != null");
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      return true;
    }
    setupParentData(child) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L0, 399, 34, "child");
      if (!wrap.WrapParentData.is(child.parentData)) child.parentData = new wrap.WrapParentData.new();
    }
    computeMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 405, 42, "height");
      switch (this.direction) {
        case C11 || CT.C11:
        {
          let width = 0.0;
          let child = this.firstChild;
          while (child != null) {
            width = math.max(core.double, width, child.getMinIntrinsicWidth(1 / 0));
            child = this.childAfter(child);
          }
          return width;
        }
        case C14 || CT.C14:
        {
          return this.computeDryLayout(new box.BoxConstraints.new({maxHeight: height})).width;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 421, 42, "height");
      switch (this.direction) {
        case C11 || CT.C11:
        {
          let width = 0.0;
          let child = this.firstChild;
          while (child != null) {
            width = width + dart.notNull(child.getMaxIntrinsicWidth(1 / 0));
            child = this.childAfter(child);
          }
          return width;
        }
        case C14 || CT.C14:
        {
          return this.computeDryLayout(new box.BoxConstraints.new({maxHeight: height})).width;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 437, 43, "width");
      switch (this.direction) {
        case C11 || CT.C11:
        {
          return this.computeDryLayout(new box.BoxConstraints.new({maxWidth: width})).height;
        }
        case C14 || CT.C14:
        {
          let height = 0.0;
          let child = this.firstChild;
          while (child != null) {
            height = math.max(core.double, height, child.getMinIntrinsicHeight(1 / 0));
            child = this.childAfter(child);
          }
          return height;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 453, 43, "width");
      switch (this.direction) {
        case C11 || CT.C11:
        {
          return this.computeDryLayout(new box.BoxConstraints.new({maxWidth: width})).height;
        }
        case C14 || CT.C14:
        {
          let height = 0.0;
          let child = this.firstChild;
          while (child != null) {
            height = height + dart.notNull(child.getMaxIntrinsicHeight(1 / 0));
            child = this.childAfter(child);
          }
          return height;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    computeDistanceToActualBaseline(baseline) {
      if (baseline == null) dart.nullFailed(L0, 469, 56, "baseline");
      return this.defaultComputeDistanceToHighestActualBaseline(baseline);
    }
    [_getMainAxisExtent](childSize) {
      if (childSize == null) dart.nullFailed(L0, 473, 34, "childSize");
      switch (this.direction) {
        case C11 || CT.C11:
        {
          return childSize.width;
        }
        case C14 || CT.C14:
        {
          return childSize.height;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    [_getCrossAxisExtent](childSize) {
      if (childSize == null) dart.nullFailed(L0, 482, 35, "childSize");
      switch (this.direction) {
        case C11 || CT.C11:
        {
          return childSize.height;
        }
        case C14 || CT.C14:
        {
          return childSize.width;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    [_getOffset](mainAxisOffset, crossAxisOffset) {
      if (mainAxisOffset == null) dart.nullFailed(L0, 491, 28, "mainAxisOffset");
      if (crossAxisOffset == null) dart.nullFailed(L0, 491, 51, "crossAxisOffset");
      switch (this.direction) {
        case C11 || CT.C11:
        {
          return new ui.Offset.new(mainAxisOffset, crossAxisOffset);
        }
        case C14 || CT.C14:
        {
          return new ui.Offset.new(crossAxisOffset, mainAxisOffset);
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    [_getChildCrossAxisOffset](flipCrossAxis, runCrossAxisExtent, childCrossAxisExtent) {
      if (flipCrossAxis == null) dart.nullFailed(L0, 500, 40, "flipCrossAxis");
      if (runCrossAxisExtent == null) dart.nullFailed(L0, 500, 62, "runCrossAxisExtent");
      if (childCrossAxisExtent == null) dart.nullFailed(L0, 500, 89, "childCrossAxisExtent");
      let freeSpace = dart.notNull(runCrossAxisExtent) - dart.notNull(childCrossAxisExtent);
      switch (this.crossAxisAlignment) {
        case C7 || CT.C7:
        {
          return dart.test(flipCrossAxis) ? freeSpace : 0.0;
        }
        case C8 || CT.C8:
        {
          return dart.test(flipCrossAxis) ? 0.0 : freeSpace;
        }
        case C9 || CT.C9:
        {
          return freeSpace / 2.0;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 515, 40, "constraints");
      return this[_computeDryLayout](constraints);
    }
    [_computeDryLayout](constraints, layoutChild = C15 || CT.C15) {
      if (constraints == null) dart.nullFailed(L0, 519, 41, "constraints");
      if (layoutChild == null) dart.nullFailed(L0, 519, 69, "layoutChild");
      let childConstraints = null;
      let mainAxisLimit = 0.0;
      switch (this.direction) {
        case C11 || CT.C11:
        {
          childConstraints = new box.BoxConstraints.new({maxWidth: constraints.maxWidth});
          mainAxisLimit = constraints.maxWidth;
          break;
        }
        case C14 || CT.C14:
        {
          childConstraints = new box.BoxConstraints.new({maxHeight: constraints.maxHeight});
          mainAxisLimit = constraints.maxHeight;
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      let mainAxisExtent = 0.0;
      let crossAxisExtent = 0.0;
      let runMainAxisExtent = 0.0;
      let runCrossAxisExtent = 0.0;
      let childCount = 0;
      let child = this.firstChild;
      while (child != null) {
        let childSize = layoutChild(child, childConstraints);
        let childMainAxisExtent = this[_getMainAxisExtent](childSize);
        let childCrossAxisExtent = this[_getCrossAxisExtent](childSize);
        if (childCount > 0 && runMainAxisExtent + dart.notNull(childMainAxisExtent) + dart.notNull(this.spacing) > dart.notNull(mainAxisLimit)) {
          mainAxisExtent = math.max(core.double, mainAxisExtent, runMainAxisExtent);
          crossAxisExtent = crossAxisExtent + (runCrossAxisExtent + dart.notNull(this.runSpacing));
          runMainAxisExtent = 0.0;
          runCrossAxisExtent = 0.0;
          childCount = 0;
        }
        runMainAxisExtent = runMainAxisExtent + dart.notNull(childMainAxisExtent);
        runCrossAxisExtent = math.max(core.double, runCrossAxisExtent, childCrossAxisExtent);
        if (childCount > 0) runMainAxisExtent = runMainAxisExtent + dart.notNull(this.spacing);
        childCount = childCount + 1;
        child = this.childAfter(child);
      }
      crossAxisExtent = crossAxisExtent + runCrossAxisExtent;
      mainAxisExtent = math.max(core.double, mainAxisExtent, runMainAxisExtent);
      switch (this.direction) {
        case C11 || CT.C11:
        {
          return constraints.constrain(new ui.Size.new(mainAxisExtent, crossAxisExtent));
        }
        case C14 || CT.C14:
        {
          return constraints.constrain(new ui.Size.new(crossAxisExtent, mainAxisExtent));
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    performLayout() {
      let constraints = this.constraints;
      if (!dart.test(this[_debugHasNecessaryDirections])) dart.assertFailed(null, L0, 572, 12, "_debugHasNecessaryDirections");
      this[_hasVisualOverflow] = false;
      let child = this.firstChild;
      if (child == null) {
        this.size = constraints.smallest;
        return;
      }
      let childConstraints = null;
      let mainAxisLimit = 0.0;
      let flipMainAxis = false;
      let flipCrossAxis = false;
      switch (this.direction) {
        case C11 || CT.C11:
        {
          childConstraints = new box.BoxConstraints.new({maxWidth: constraints.maxWidth});
          mainAxisLimit = constraints.maxWidth;
          if (dart.equals(this.textDirection, ui.TextDirection.rtl)) flipMainAxis = true;
          if (dart.equals(this.verticalDirection, basic_types.VerticalDirection.up)) flipCrossAxis = true;
          break;
        }
        case C14 || CT.C14:
        {
          childConstraints = new box.BoxConstraints.new({maxHeight: constraints.maxHeight});
          mainAxisLimit = constraints.maxHeight;
          if (dart.equals(this.verticalDirection, basic_types.VerticalDirection.up)) flipMainAxis = true;
          if (dart.equals(this.textDirection, ui.TextDirection.rtl)) flipCrossAxis = true;
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      if (!(childConstraints != null)) dart.assertFailed(null, L0, 601, 12, "childConstraints != null");
      if (!(mainAxisLimit != null)) dart.assertFailed(null, L0, 602, 12, "mainAxisLimit != null");
      let spacing = this.spacing;
      let runSpacing = this.runSpacing;
      let runMetrics = JSArrayOf_RunMetrics().of([]);
      let mainAxisExtent = 0.0;
      let crossAxisExtent = 0.0;
      let runMainAxisExtent = 0.0;
      let runCrossAxisExtent = 0.0;
      let childCount = 0;
      while (child != null) {
        child.layout(childConstraints, {parentUsesSize: true});
        let childMainAxisExtent = this[_getMainAxisExtent](child.size);
        let childCrossAxisExtent = this[_getCrossAxisExtent](child.size);
        if (childCount > 0 && runMainAxisExtent + dart.notNull(spacing) + dart.notNull(childMainAxisExtent) > dart.notNull(mainAxisLimit)) {
          mainAxisExtent = math.max(core.double, mainAxisExtent, runMainAxisExtent);
          crossAxisExtent = crossAxisExtent + runCrossAxisExtent;
          if (dart.test(runMetrics[$isNotEmpty])) crossAxisExtent = crossAxisExtent + dart.notNull(runSpacing);
          runMetrics[$add](new wrap._RunMetrics.new(runMainAxisExtent, runCrossAxisExtent, childCount));
          runMainAxisExtent = 0.0;
          runCrossAxisExtent = 0.0;
          childCount = 0;
        }
        runMainAxisExtent = runMainAxisExtent + dart.notNull(childMainAxisExtent);
        if (childCount > 0) runMainAxisExtent = runMainAxisExtent + dart.notNull(spacing);
        runCrossAxisExtent = math.max(core.double, runCrossAxisExtent, childCrossAxisExtent);
        childCount = childCount + 1;
        let childParentData = wrap.WrapParentData.as(dart.nullCheck(child.parentData));
        childParentData[_runIndex] = runMetrics[$length];
        child = childParentData.nextSibling;
      }
      if (childCount > 0) {
        mainAxisExtent = math.max(core.double, mainAxisExtent, runMainAxisExtent);
        crossAxisExtent = crossAxisExtent + runCrossAxisExtent;
        if (dart.test(runMetrics[$isNotEmpty])) crossAxisExtent = crossAxisExtent + dart.notNull(runSpacing);
        runMetrics[$add](new wrap._RunMetrics.new(runMainAxisExtent, runCrossAxisExtent, childCount));
      }
      let runCount = runMetrics[$length];
      if (!(dart.notNull(runCount) > 0)) dart.assertFailed(null, L0, 643, 12, "runCount > 0");
      let containerMainAxisExtent = 0.0;
      let containerCrossAxisExtent = 0.0;
      switch (this.direction) {
        case C11 || CT.C11:
        {
          this.size = constraints.constrain(new ui.Size.new(mainAxisExtent, crossAxisExtent));
          containerMainAxisExtent = this.size.width;
          containerCrossAxisExtent = this.size.height;
          break;
        }
        case C14 || CT.C14:
        {
          this.size = constraints.constrain(new ui.Size.new(crossAxisExtent, mainAxisExtent));
          containerMainAxisExtent = this.size.height;
          containerCrossAxisExtent = this.size.width;
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      this[_hasVisualOverflow] = dart.notNull(containerMainAxisExtent) < mainAxisExtent || dart.notNull(containerCrossAxisExtent) < crossAxisExtent;
      let crossAxisFreeSpace = math.max(core.double, 0.0, dart.notNull(containerCrossAxisExtent) - crossAxisExtent);
      let runLeadingSpace = 0.0;
      let runBetweenSpace = 0.0;
      switch (this.runAlignment) {
        case C0 || CT.C0:
        {
          break;
        }
        case C1 || CT.C1:
        {
          runLeadingSpace = crossAxisFreeSpace;
          break;
        }
        case C2 || CT.C2:
        {
          runLeadingSpace = crossAxisFreeSpace / 2.0;
          break;
        }
        case C3 || CT.C3:
        {
          runBetweenSpace = dart.notNull(runCount) > 1 ? crossAxisFreeSpace / (dart.notNull(runCount) - 1) : 0.0;
          break;
        }
        case C4 || CT.C4:
        {
          runBetweenSpace = crossAxisFreeSpace / dart.notNull(runCount);
          runLeadingSpace = runBetweenSpace / 2.0;
          break;
        }
        case C5 || CT.C5:
        {
          runBetweenSpace = crossAxisFreeSpace / (dart.notNull(runCount) + 1);
          runLeadingSpace = runBetweenSpace;
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      runBetweenSpace = runBetweenSpace + dart.notNull(runSpacing);
      let crossAxisOffset = flipCrossAxis ? dart.notNull(containerCrossAxisExtent) - runLeadingSpace : runLeadingSpace;
      child = this.firstChild;
      for (let i = 0; i < dart.notNull(runCount); i = i + 1) {
        let metrics = runMetrics[$_get](i);
        let runMainAxisExtent = metrics.mainAxisExtent;
        let runCrossAxisExtent = metrics.crossAxisExtent;
        let childCount = metrics.childCount;
        let mainAxisFreeSpace = math.max(core.double, 0.0, dart.notNull(containerMainAxisExtent) - dart.notNull(runMainAxisExtent));
        let childLeadingSpace = 0.0;
        let childBetweenSpace = 0.0;
        switch (this.alignment) {
          case C0 || CT.C0:
          {
            break;
          }
          case C1 || CT.C1:
          {
            childLeadingSpace = mainAxisFreeSpace;
            break;
          }
          case C2 || CT.C2:
          {
            childLeadingSpace = mainAxisFreeSpace / 2.0;
            break;
          }
          case C3 || CT.C3:
          {
            childBetweenSpace = dart.notNull(childCount) > 1 ? mainAxisFreeSpace / (dart.notNull(childCount) - 1) : 0.0;
            break;
          }
          case C4 || CT.C4:
          {
            childBetweenSpace = mainAxisFreeSpace / dart.notNull(childCount);
            childLeadingSpace = childBetweenSpace / 2.0;
            break;
          }
          case C5 || CT.C5:
          {
            childBetweenSpace = mainAxisFreeSpace / (dart.notNull(childCount) + 1);
            childLeadingSpace = childBetweenSpace;
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        childBetweenSpace = childBetweenSpace + dart.notNull(spacing);
        let childMainPosition = flipMainAxis ? dart.notNull(containerMainAxisExtent) - childLeadingSpace : childLeadingSpace;
        if (flipCrossAxis) crossAxisOffset = crossAxisOffset - dart.notNull(runCrossAxisExtent);
        while (child != null) {
          let childParentData = wrap.WrapParentData.as(dart.nullCheck(child.parentData));
          if (childParentData[_runIndex] !== i) break;
          let childMainAxisExtent = this[_getMainAxisExtent](child.size);
          let childCrossAxisExtent = this[_getCrossAxisExtent](child.size);
          let childCrossAxisOffset = this[_getChildCrossAxisOffset](flipCrossAxis, runCrossAxisExtent, childCrossAxisExtent);
          if (flipMainAxis) childMainPosition = childMainPosition - dart.notNull(childMainAxisExtent);
          childParentData.offset = this[_getOffset](childMainPosition, crossAxisOffset + dart.notNull(childCrossAxisOffset));
          if (flipMainAxis)
            childMainPosition = childMainPosition - childBetweenSpace;
          else
            childMainPosition = childMainPosition + (dart.notNull(childMainAxisExtent) + childBetweenSpace);
          child = childParentData.nextSibling;
        }
        if (flipCrossAxis)
          crossAxisOffset = crossAxisOffset - runBetweenSpace;
        else
          crossAxisOffset = crossAxisOffset + (dart.notNull(runCrossAxisExtent) + runBetweenSpace);
      }
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L0, 755, 41, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 755, 67, "position");
      return this.defaultHitTestChildren(result, {position: position});
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 760, 30, "context");
      if (offset == null) dart.nullFailed(L0, 760, 46, "offset");
      if (dart.test(this[_hasVisualOverflow]) && !dart.equals(this.clipBehavior, ui.Clip.none)) {
        this[_clipRectLayer] = context.pushClipRect(this.needsCompositing, offset, ui.Offset.zero['&'](this.size), dart.bind(this, 'defaultPaint'), {clipBehavior: this.clipBehavior, oldLayer: this[_clipRectLayer]});
      } else {
        this[_clipRectLayer] = null;
        this.defaultPaint(context, offset);
      }
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 775, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfAxis()).new("direction", this.direction));
      properties.add(new (EnumPropertyOfWrapAlignment()).new("alignment", this.alignment));
      properties.add(new diagnostics.DoubleProperty.new("spacing", this.spacing));
      properties.add(new (EnumPropertyOfWrapAlignment()).new("runAlignment", this.runAlignment));
      properties.add(new diagnostics.DoubleProperty.new("runSpacing", this.runSpacing));
      properties.add(new diagnostics.DoubleProperty.new("crossAxisAlignment", this.runSpacing));
      properties.add(new (EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
      properties.add(new (EnumPropertyOfVerticalDirection()).new("verticalDirection", this.verticalDirection, {defaultValue: basic_types.VerticalDirection.down}));
    }
  };
  (wrap.RenderWrap.new = function(opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let direction = opts && 'direction' in opts ? opts.direction : C11 || CT.C11;
    if (direction == null) dart.nullFailed(L0, 115, 10, "direction");
    let alignment = opts && 'alignment' in opts ? opts.alignment : C0 || CT.C0;
    if (alignment == null) dart.nullFailed(L0, 116, 19, "alignment");
    let spacing = opts && 'spacing' in opts ? opts.spacing : 0;
    if (spacing == null) dart.nullFailed(L0, 117, 12, "spacing");
    let runAlignment = opts && 'runAlignment' in opts ? opts.runAlignment : C0 || CT.C0;
    if (runAlignment == null) dart.nullFailed(L0, 118, 19, "runAlignment");
    let runSpacing = opts && 'runSpacing' in opts ? opts.runSpacing : 0;
    if (runSpacing == null) dart.nullFailed(L0, 119, 12, "runSpacing");
    let crossAxisAlignment = opts && 'crossAxisAlignment' in opts ? opts.crossAxisAlignment : C7 || CT.C7;
    if (crossAxisAlignment == null) dart.nullFailed(L0, 120, 24, "crossAxisAlignment");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let verticalDirection = opts && 'verticalDirection' in opts ? opts.verticalDirection : C12 || CT.C12;
    if (verticalDirection == null) dart.nullFailed(L0, 122, 23, "verticalDirection");
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C13 || CT.C13;
    if (clipBehavior == null) dart.nullFailed(L0, 123, 10, "clipBehavior");
    this[_clipBehavior] = ui.Clip.none;
    this[_hasVisualOverflow] = false;
    this[_clipRectLayer] = null;
    if (!(direction != null)) dart.assertFailed(null, L0, 124, 15, "direction != null");
    if (!(alignment != null)) dart.assertFailed(null, L0, 125, 15, "alignment != null");
    if (!(spacing != null)) dart.assertFailed(null, L0, 126, 15, "spacing != null");
    if (!(runAlignment != null)) dart.assertFailed(null, L0, 127, 15, "runAlignment != null");
    if (!(runSpacing != null)) dart.assertFailed(null, L0, 128, 15, "runSpacing != null");
    if (!(crossAxisAlignment != null)) dart.assertFailed(null, L0, 129, 15, "crossAxisAlignment != null");
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 130, 15, "clipBehavior != null");
    this[_direction] = direction;
    this[_alignment] = alignment;
    this[_spacing] = spacing;
    this[_runAlignment] = runAlignment;
    this[_runSpacing] = runSpacing;
    this[_crossAxisAlignment] = crossAxisAlignment;
    this[_textDirection] = textDirection;
    this[_verticalDirection] = verticalDirection;
    this[_clipBehavior] = clipBehavior;
    wrap.RenderWrap.__proto__.new.call(this);
    this.addAll(children);
  }).prototype = wrap.RenderWrap.prototype;
  dart.addTypeTests(wrap.RenderWrap);
  dart.addTypeCaches(wrap.RenderWrap);
  dart.setMethodSignature(wrap.RenderWrap, () => ({
    __proto__: dart.getMethods(wrap.RenderWrap.__proto__),
    [_getMainAxisExtent]: dart.fnType(core.double, [ui.Size]),
    [_getCrossAxisExtent]: dart.fnType(core.double, [ui.Size]),
    [_getOffset]: dart.fnType(ui.Offset, [core.double, core.double]),
    [_getChildCrossAxisOffset]: dart.fnType(core.double, [core.bool, core.double, core.double]),
    [_computeDryLayout]: dart.fnType(ui.Size, [box.BoxConstraints], [dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])])
  }));
  dart.setGetterSignature(wrap.RenderWrap, () => ({
    __proto__: dart.getGetters(wrap.RenderWrap.__proto__),
    direction: basic_types.Axis,
    alignment: wrap.WrapAlignment,
    spacing: core.double,
    runAlignment: wrap.WrapAlignment,
    runSpacing: core.double,
    crossAxisAlignment: wrap.WrapCrossAlignment,
    textDirection: dart.nullable(ui.TextDirection),
    verticalDirection: basic_types.VerticalDirection,
    clipBehavior: ui.Clip,
    [_debugHasNecessaryDirections]: core.bool
  }));
  dart.setSetterSignature(wrap.RenderWrap, () => ({
    __proto__: dart.getSetters(wrap.RenderWrap.__proto__),
    direction: basic_types.Axis,
    alignment: wrap.WrapAlignment,
    spacing: core.double,
    runAlignment: wrap.WrapAlignment,
    runSpacing: core.double,
    crossAxisAlignment: wrap.WrapCrossAlignment,
    textDirection: dart.nullable(ui.TextDirection),
    verticalDirection: basic_types.VerticalDirection,
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(wrap.RenderWrap, L1);
  dart.setFieldSignature(wrap.RenderWrap, () => ({
    __proto__: dart.getFields(wrap.RenderWrap.__proto__),
    [_direction]: dart.fieldType(basic_types.Axis),
    [_alignment]: dart.fieldType(wrap.WrapAlignment),
    [_spacing]: dart.fieldType(core.double),
    [_runAlignment]: dart.fieldType(wrap.WrapAlignment),
    [_runSpacing]: dart.fieldType(core.double),
    [_crossAxisAlignment]: dart.fieldType(wrap.WrapCrossAlignment),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [_verticalDirection]: dart.fieldType(basic_types.VerticalDirection),
    [_clipBehavior]: dart.fieldType(ui.Clip),
    [_hasVisualOverflow]: dart.fieldType(core.bool),
    [_clipRectLayer]: dart.fieldType(dart.nullable(layer.ClipRectLayer))
  }));
  dart.trackLibraries("packages/flutter/src/rendering/wrap.dart", {
    "package:flutter/src/rendering/wrap.dart": wrap
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["wrap.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/wrap.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__wrap: wrap
  };
}));

//# sourceMappingURL=wrap.dart.lib.js.map
