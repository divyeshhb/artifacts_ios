define(['dart_sdk', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/stack.dart', 'packages/flutter/src/painting/strut_style.dart'], (function load__packages__flutter__src__rendering__debug_overflow_indicator_dart(dart_sdk, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__stack$46dart, packages__flutter__src__painting__strut_style$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const text_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_span;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const stack = packages__flutter__src__rendering__stack$46dart.src__rendering__stack;
  const text_style = packages__flutter__src__painting__strut_style$46dart.src__painting__text_style;
  var debug_overflow_indicator = Object.create(dart.library);
  var $length = dartx.length;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $toStringAsPrecision = dartx.toStringAsPrecision;
  var $add = dartx.add;
  var $isEmpty = dartx.isEmpty;
  var $runtimeType = dartx.runtimeType;
  var $isNotEmpty = dartx.isNotEmpty;
  var $first = dartx.first;
  var $last = dartx.last;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $join = dartx.join;
  var $times = dartx['*'];
  var $truncate = dartx.truncate;
  dart._checkModuleNullSafetyMode(false);
  var _OverflowSideL = () => (_OverflowSideL = dart.constFn(dart.legacy(debug_overflow_indicator._OverflowSide)))();
  var ListOfTextPainter = () => (ListOfTextPainter = dart.constFn(core.List$(text_painter.TextPainter)))();
  var JSArrayOf_OverflowRegionData = () => (JSArrayOf_OverflowRegionData = dart.constFn(_interceptors.JSArray$(debug_overflow_indicator._OverflowRegionData)))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var SyncIterableOfDiagnosticsNode = () => (SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(diagnostics.DiagnosticsNode)))();
  var IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics.DiagnosticsNode)))();
  var VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  var TextSpanN = () => (TextSpanN = dart.constFn(dart.nullable(text_span.TextSpan)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var JSArrayOfColor = () => (JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))();
  var JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/debug_overflow_indicator.dart";
  var L1 = "package:flutter/src/rendering/debug_overflow_indicator.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: debug_overflow_indicator._OverflowSide.prototype,
        [_name$]: "_OverflowSide.left",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: debug_overflow_indicator._OverflowSide.prototype,
        [_name$]: "_OverflowSide.top",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: debug_overflow_indicator._OverflowSide.prototype,
        [_name$]: "_OverflowSide.bottom",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: debug_overflow_indicator._OverflowSide.prototype,
        [_name$]: "_OverflowSide.right",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], _OverflowSideL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 8.5
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 1,
        [OffsetBase__dx]: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 8.5,
        [OffsetBase__dx]: 0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3204448256.0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3221225216.0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 7
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4287627264.0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C12 || CT.C12,
        [TextStyle_fontSize]: 7.5,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C13 || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 10,
        [OffsetBase__dx]: 10
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    }
  }, false);
  var _name$ = dart.privateName(debug_overflow_indicator, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  debug_overflow_indicator._OverflowSide = class _OverflowSide extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (debug_overflow_indicator._OverflowSide.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 15, 6, "index");
    if (_name == null) dart.nullFailed(L0, 15, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = debug_overflow_indicator._OverflowSide.prototype;
  dart.addTypeTests(debug_overflow_indicator._OverflowSide);
  dart.addTypeCaches(debug_overflow_indicator._OverflowSide);
  dart.setLibraryUri(debug_overflow_indicator._OverflowSide, L1);
  dart.setFieldSignature(debug_overflow_indicator._OverflowSide, () => ({
    __proto__: dart.getFields(debug_overflow_indicator._OverflowSide.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(debug_overflow_indicator._OverflowSide, ['toString']);
  debug_overflow_indicator._OverflowSide.left = C0 || CT.C0;
  debug_overflow_indicator._OverflowSide.top = C1 || CT.C1;
  debug_overflow_indicator._OverflowSide.bottom = C2 || CT.C2;
  debug_overflow_indicator._OverflowSide.right = C3 || CT.C3;
  debug_overflow_indicator._OverflowSide.values = C4 || CT.C4;
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C5;
  var rect$ = dart.privateName(debug_overflow_indicator, "_OverflowRegionData.rect");
  var label$ = dart.privateName(debug_overflow_indicator, "_OverflowRegionData.label");
  var labelOffset$ = dart.privateName(debug_overflow_indicator, "_OverflowRegionData.labelOffset");
  var rotation$ = dart.privateName(debug_overflow_indicator, "_OverflowRegionData.rotation");
  var side$ = dart.privateName(debug_overflow_indicator, "_OverflowRegionData.side");
  debug_overflow_indicator._OverflowRegionData = class _OverflowRegionData extends core.Object {
    get rect() {
      return this[rect$];
    }
    set rect(value) {
      super.rect = value;
    }
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get labelOffset() {
      return this[labelOffset$];
    }
    set labelOffset(value) {
      super.labelOffset = value;
    }
    get rotation() {
      return this[rotation$];
    }
    set rotation(value) {
      super.rotation = value;
    }
    get side() {
      return this[side$];
    }
    set side(value) {
      super.side = value;
    }
  };
  (debug_overflow_indicator._OverflowRegionData.new = function(opts) {
    let rect = opts && 'rect' in opts ? opts.rect : null;
    if (rect == null) dart.nullFailed(L0, 26, 19, "rect");
    let label = opts && 'label' in opts ? opts.label : "";
    if (label == null) dart.nullFailed(L0, 27, 10, "label");
    let labelOffset = opts && 'labelOffset' in opts ? opts.labelOffset : C5 || CT.C5;
    if (labelOffset == null) dart.nullFailed(L0, 28, 10, "labelOffset");
    let rotation = opts && 'rotation' in opts ? opts.rotation : 0;
    if (rotation == null) dart.nullFailed(L0, 29, 10, "rotation");
    let side = opts && 'side' in opts ? opts.side : null;
    if (side == null) dart.nullFailed(L0, 30, 19, "side");
    this[rect$] = rect;
    this[label$] = label;
    this[labelOffset$] = labelOffset;
    this[rotation$] = rotation;
    this[side$] = side;
    ;
  }).prototype = debug_overflow_indicator._OverflowRegionData.prototype;
  dart.addTypeTests(debug_overflow_indicator._OverflowRegionData);
  dart.addTypeCaches(debug_overflow_indicator._OverflowRegionData);
  dart.setLibraryUri(debug_overflow_indicator._OverflowRegionData, L1);
  dart.setFieldSignature(debug_overflow_indicator._OverflowRegionData, () => ({
    __proto__: dart.getFields(debug_overflow_indicator._OverflowRegionData.__proto__),
    rect: dart.finalFieldType(ui.Rect),
    label: dart.finalFieldType(core.String),
    labelOffset: dart.finalFieldType(ui.Offset),
    rotation: dart.finalFieldType(core.double),
    side: dart.finalFieldType(debug_overflow_indicator._OverflowSide)
  }));
  var _indicatorLabel = dart.privateName(debug_overflow_indicator, "_indicatorLabel");
  var _overflowReportNeeded = dart.privateName(debug_overflow_indicator, "_overflowReportNeeded");
  var _formatPixels = dart.privateName(debug_overflow_indicator, "_formatPixels");
  var C6;
  var C7;
  var C8;
  var _calculateOverflowRegions = dart.privateName(debug_overflow_indicator, "_calculateOverflowRegions");
  var _reportOverflow = dart.privateName(debug_overflow_indicator, "_reportOverflow");
  var Color_value = dart.privateName(ui, "Color.value");
  var C9;
  var C10;
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  var TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  var TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  var TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  var TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  var TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  var TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  var TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  var TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  var FontWeight_index = dart.privateName(ui, "FontWeight.index");
  var C12;
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var C13;
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var C11;
  var C14;
  var C15;
  debug_overflow_indicator.DebugOverflowIndicatorMixin = class DebugOverflowIndicatorMixin extends object.RenderObject {};
  debug_overflow_indicator.DebugOverflowIndicatorMixin[dart.mixinOn] = RenderObject => class DebugOverflowIndicatorMixin extends RenderObject {
    [_formatPixels](value) {
      if (value == null) dart.nullFailed(L0, 121, 31, "value");
      if (!(dart.notNull(value) > 0.0)) dart.assertFailed(null, L0, 122, 12, "value > 0.0");
      let pixels = null;
      if (dart.notNull(value) > 10.0) {
        pixels = value[$toStringAsFixed](0);
      } else if (dart.notNull(value) > 1.0) {
        pixels = value[$toStringAsFixed](1);
      } else {
        pixels = value[$toStringAsPrecision](3);
      }
      return pixels;
    }
    [_calculateOverflowRegions](overflow, containerRect) {
      if (overflow == null) dart.nullFailed(L0, 134, 68, "overflow");
      if (containerRect == null) dart.nullFailed(L0, 134, 83, "containerRect");
      let regions = JSArrayOf_OverflowRegionData().of([]);
      if (dart.notNull(overflow.left) > 0.0) {
        let markerRect = new ui.Rect.fromLTWH(0.0, 0.0, dart.notNull(containerRect.width) * 0.1, containerRect.height);
        regions[$add](new debug_overflow_indicator._OverflowRegionData.new({rect: markerRect, label: "LEFT OVERFLOWED BY " + dart.str(this[_formatPixels](overflow.left)) + " PIXELS", labelOffset: markerRect.centerLeft['+'](C6 || CT.C6), rotation: 3.141592653589793 / 2.0, side: debug_overflow_indicator._OverflowSide.left}));
      }
      if (dart.notNull(overflow.right) > 0.0) {
        let markerRect = new ui.Rect.fromLTWH(dart.notNull(containerRect.width) * (1.0 - 0.1), 0.0, dart.notNull(containerRect.width) * 0.1, containerRect.height);
        regions[$add](new debug_overflow_indicator._OverflowRegionData.new({rect: markerRect, label: "RIGHT OVERFLOWED BY " + dart.str(this[_formatPixels](overflow.right)) + " PIXELS", labelOffset: markerRect.centerRight['-'](C6 || CT.C6), rotation: -3.141592653589793 / 2.0, side: debug_overflow_indicator._OverflowSide.right}));
      }
      if (dart.notNull(overflow.top) > 0.0) {
        let markerRect = new ui.Rect.fromLTWH(0.0, 0.0, containerRect.width, dart.notNull(containerRect.height) * 0.1);
        regions[$add](new debug_overflow_indicator._OverflowRegionData.new({rect: markerRect, label: "TOP OVERFLOWED BY " + dart.str(this[_formatPixels](overflow.top)) + " PIXELS", labelOffset: markerRect.topCenter['+'](C7 || CT.C7), rotation: 0.0, side: debug_overflow_indicator._OverflowSide.top}));
      }
      if (dart.notNull(overflow.bottom) > 0.0) {
        let markerRect = new ui.Rect.fromLTWH(0.0, dart.notNull(containerRect.height) * (1.0 - 0.1), containerRect.width, dart.notNull(containerRect.height) * 0.1);
        regions[$add](new debug_overflow_indicator._OverflowRegionData.new({rect: markerRect, label: "BOTTOM OVERFLOWED BY " + dart.str(this[_formatPixels](overflow.bottom)) + " PIXELS", labelOffset: markerRect.bottomCenter['-'](C8 || CT.C8), rotation: 0.0, side: debug_overflow_indicator._OverflowSide.bottom}));
      }
      return regions;
    }
    [_reportOverflow](overflow, overflowHints) {
      if (overflow == null) dart.nullFailed(L0, 202, 37, "overflow");
      overflowHints == null ? overflowHints = JSArrayOfDiagnosticsNode().of([]) : null;
      if (dart.test(overflowHints[$isEmpty])) {
        overflowHints[$add](new assertions.ErrorDescription.new("The edge of the " + dart.str(this[$runtimeType]) + " that is " + "overflowing has been marked in the rendering with a yellow and black " + "striped pattern. This is usually caused by the contents being too big " + "for the " + dart.str(this[$runtimeType]) + "."));
        overflowHints[$add](new assertions.ErrorHint.new("This is considered an error condition because it indicates that there " + "is content that cannot be seen. If the content is legitimately bigger " + "than the available space, consider clipping it with a ClipRect widget " + "before putting it in the " + dart.str(this[$runtimeType]) + ", or using a scrollable " + "container, like a ListView."));
      }
      let overflows = (() => {
        let t0 = JSArrayOfString().of([]);
        if (dart.notNull(overflow.left) > 0.0) t0.push(dart.str(this[_formatPixels](overflow.left)) + " pixels on the left");
        if (dart.notNull(overflow.top) > 0.0) t0.push(dart.str(this[_formatPixels](overflow.top)) + " pixels on the top");
        if (dart.notNull(overflow.bottom) > 0.0) t0.push(dart.str(this[_formatPixels](overflow.bottom)) + " pixels on the bottom");
        if (dart.notNull(overflow.right) > 0.0) t0.push(dart.str(this[_formatPixels](overflow.right)) + " pixels on the right");
        return t0;
      })();
      let overflowText = "";
      if (!dart.test(overflows[$isNotEmpty])) dart.assertFailed("Somehow " + dart.str(this[$runtimeType]) + " didn't actually overflow like it thought it did.", L0, 227, 12, "overflows.isNotEmpty");
      switch (overflows[$length]) {
        case 1:
        {
          overflowText = overflows[$first];
          break;
        }
        case 2:
        {
          overflowText = dart.str(overflows[$first]) + " and " + dart.str(overflows[$last]);
          break;
        }
        default:
        {
          overflows[$_set](dart.notNull(overflows[$length]) - 1, "and " + dart.str(overflows[$_get](dart.notNull(overflows[$length]) - 1)));
          overflowText = overflows[$join](", ");
        }
      }
      assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: assertions.FlutterError.new("A " + dart.str(this[$runtimeType]) + " overflowed by " + dart.str(overflowText) + "."), library: "rendering library", context: new assertions.ErrorDescription.new("during layout"), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
          if (this.debugCreator != null) yield new object.DiagnosticsDebugCreator.new(dart.nullCheck(this.debugCreator));
          yield* dart.nullCheck(overflowHints);
          yield this.describeForError("The specific " + dart.str(this[$runtimeType]) + " in question is");
          yield diagnostics.DiagnosticsNode.message("??????"[$times]((100 / 2)[$truncate]()), {allowWrap: false});
        }).bind(this)), VoidToIterableOfDiagnosticsNode())}));
    }
    paintOverflowIndicator(context, offset, containerRect, childRect, opts) {
      let t1;
      if (context == null) dart.nullFailed(L0, 268, 21, "context");
      if (offset == null) dart.nullFailed(L0, 269, 12, "offset");
      if (containerRect == null) dart.nullFailed(L0, 270, 10, "containerRect");
      if (childRect == null) dart.nullFailed(L0, 271, 10, "childRect");
      let overflowHints = opts && 'overflowHints' in opts ? opts.overflowHints : null;
      let overflow = stack.RelativeRect.fromRect(containerRect, childRect);
      if (dart.notNull(overflow.left) <= 0.0 && dart.notNull(overflow.right) <= 0.0 && dart.notNull(overflow.top) <= 0.0 && dart.notNull(overflow.bottom) <= 0.0) {
        return;
      }
      let overflowRegions = this[_calculateOverflowRegions](overflow, containerRect);
      for (let region of overflowRegions) {
        context.canvas.drawRect(region.rect.shift(offset), debug_overflow_indicator.DebugOverflowIndicatorMixin._indicatorPaint);
        let textSpan = TextSpanN().as(this[_indicatorLabel][$_get](region.side.index).text);
        if ((t1 = textSpan, t1 == null ? null : t1.text) != region.label) {
          this[_indicatorLabel][$_get](region.side.index).text = new text_span.TextSpan.new({text: region.label, style: debug_overflow_indicator.DebugOverflowIndicatorMixin._indicatorTextStyle});
          this[_indicatorLabel][$_get](region.side.index).layout();
        }
        let labelOffset = region.labelOffset['+'](offset);
        let centerOffset = new ui.Offset.new(-dart.notNull(this[_indicatorLabel][$_get](region.side.index).width) / 2.0, 0.0);
        let textBackgroundRect = centerOffset['&'](this[_indicatorLabel][$_get](region.side.index).size);
        context.canvas.save();
        context.canvas.translate(labelOffset.dx, labelOffset.dy);
        context.canvas.rotate(region.rotation);
        context.canvas.drawRect(textBackgroundRect, debug_overflow_indicator.DebugOverflowIndicatorMixin._labelBackgroundPaint);
        this[_indicatorLabel][$_get](region.side.index).paint(context.canvas, centerOffset);
        context.canvas.restore();
      }
      if (dart.test(this[_overflowReportNeeded])) {
        this[_overflowReportNeeded] = false;
        this[_reportOverflow](overflow, overflowHints);
      }
    }
    reassemble() {
      super.reassemble();
      if (!dart.test(dart.fn(() => {
        this[_overflowReportNeeded] = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 316, 12, "() {\n      _overflowReportNeeded = true;\n      return true;\n    }()");
    }
  };
  (debug_overflow_indicator.DebugOverflowIndicatorMixin[dart.mixinNew] = function() {
    this[_indicatorLabel] = ListOfTextPainter().filled(debug_overflow_indicator._OverflowSide.values[$length], new text_painter.TextPainter.new({textDirection: ui.TextDirection.ltr}));
    this[_overflowReportNeeded] = true;
  }).prototype = debug_overflow_indicator.DebugOverflowIndicatorMixin.prototype;
  dart.addTypeTests(debug_overflow_indicator.DebugOverflowIndicatorMixin);
  dart.addTypeCaches(debug_overflow_indicator.DebugOverflowIndicatorMixin);
  debug_overflow_indicator.DebugOverflowIndicatorMixin[dart.implements] = () => [object.RenderObject];
  dart.setMethodSignature(debug_overflow_indicator.DebugOverflowIndicatorMixin, () => ({
    __proto__: dart.getMethods(debug_overflow_indicator.DebugOverflowIndicatorMixin.__proto__),
    [_formatPixels]: dart.fnType(core.String, [core.double]),
    [_calculateOverflowRegions]: dart.fnType(core.List$(debug_overflow_indicator._OverflowRegionData), [stack.RelativeRect, ui.Rect]),
    [_reportOverflow]: dart.fnType(dart.void, [stack.RelativeRect, dart.nullable(core.List$(diagnostics.DiagnosticsNode))]),
    paintOverflowIndicator: dart.fnType(dart.void, [object.PaintingContext, ui.Offset, ui.Rect, ui.Rect], {overflowHints: dart.nullable(core.List$(diagnostics.DiagnosticsNode))}, {})
  }));
  dart.setLibraryUri(debug_overflow_indicator.DebugOverflowIndicatorMixin, L1);
  dart.setFieldSignature(debug_overflow_indicator.DebugOverflowIndicatorMixin, () => ({
    __proto__: dart.getFields(debug_overflow_indicator.DebugOverflowIndicatorMixin.__proto__),
    [_indicatorLabel]: dart.finalFieldType(core.List$(text_painter.TextPainter)),
    [_overflowReportNeeded]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(debug_overflow_indicator.DebugOverflowIndicatorMixin, {
    /*debug_overflow_indicator.DebugOverflowIndicatorMixin._black*/get _black() {
      return C9 || CT.C9;
    },
    /*debug_overflow_indicator.DebugOverflowIndicatorMixin._yellow*/get _yellow() {
      return C10 || CT.C10;
    },
    /*debug_overflow_indicator.DebugOverflowIndicatorMixin._indicatorFraction*/get _indicatorFraction() {
      return 0.1;
    },
    /*debug_overflow_indicator.DebugOverflowIndicatorMixin._indicatorFontSizePixels*/get _indicatorFontSizePixels() {
      return 7.5;
    },
    /*debug_overflow_indicator.DebugOverflowIndicatorMixin._indicatorLabelPaddingPixels*/get _indicatorLabelPaddingPixels() {
      return 1;
    },
    /*debug_overflow_indicator.DebugOverflowIndicatorMixin._indicatorTextStyle*/get _indicatorTextStyle() {
      return C11 || CT.C11;
    },
    /*debug_overflow_indicator.DebugOverflowIndicatorMixin._indicatorPaint*/get _indicatorPaint() {
      let t1;
      return t1 = ui.Paint.new(), (() => {
        t1.shader = ui.Gradient.linear(C5 || CT.C5, C14 || CT.C14, JSArrayOfColor().of([debug_overflow_indicator.DebugOverflowIndicatorMixin._black, debug_overflow_indicator.DebugOverflowIndicatorMixin._yellow, debug_overflow_indicator.DebugOverflowIndicatorMixin._yellow, debug_overflow_indicator.DebugOverflowIndicatorMixin._black]), JSArrayOfdouble().of([0.25, 0.25, 0.75, 0.75]), ui.TileMode.repeated);
        return t1;
      })();
    },
    /*debug_overflow_indicator.DebugOverflowIndicatorMixin._labelBackgroundPaint*/get _labelBackgroundPaint() {
      let t1;
      return t1 = ui.Paint.new(), (() => {
        t1.color = C15 || CT.C15;
        return t1;
      })();
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/rendering/debug_overflow_indicator.dart", {
    "package:flutter/src/rendering/debug_overflow_indicator.dart": debug_overflow_indicator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["debug_overflow_indicator.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/debug_overflow_indicator.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__debug_overflow_indicator: debug_overflow_indicator
  };
}));

//# sourceMappingURL=debug_overflow_indicator.dart.lib.js.map
