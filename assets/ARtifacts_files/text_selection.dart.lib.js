define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/cupertino/debug.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/cupertino/button.dart', 'packages/flutter/src/rendering/paragraph.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/shifted_box.dart', 'packages/flutter/src/rendering/custom_paint.dart', 'packages/flutter/src/cupertino/text_theme.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/rendering/editable.dart', 'packages/flutter/src/services/text_input.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/flutter/src/painting/strut_style.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__cupertino__text_selection_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__cupertino__debug$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__cupertino__button$46dart, packages__flutter__src__rendering__paragraph$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__shifted_box$46dart, packages__flutter__src__rendering__custom_paint$46dart, packages__flutter__src__cupertino__text_theme$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__rendering__editable$46dart, packages__flutter__src__services__text_input$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__box_border$46dart, packages__flutter__src__painting__strut_style$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const text_selection = packages__flutter__src__widgets__widget_span$46dart.src__widgets__text_selection;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const media_query = packages__flutter__src__widgets__widget_span$46dart.src__widgets__media_query;
  const text$ = packages__flutter__src__widgets__widget_span$46dart.src__widgets__text;
  const debug = packages__flutter__src__widgets__widget_span$46dart.src__widgets__debug;
  const container = packages__flutter__src__widgets__widget_span$46dart.src__widgets__container;
  const transitions = packages__flutter__src__widgets__widget_span$46dart.src__widgets__transitions;
  const ticker_provider = packages__flutter__src__widgets__widget_span$46dart.src__widgets__ticker_provider;
  const localizations$ = packages__flutter__src__cupertino__debug$46dart.src__cupertino__localizations;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const button = packages__flutter__src__cupertino__button$46dart.src__cupertino__button;
  const paragraph = packages__flutter__src__rendering__paragraph$46dart.src__rendering__paragraph;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const shifted_box = packages__flutter__src__rendering__shifted_box$46dart.src__rendering__shifted_box;
  const custom_paint = packages__flutter__src__rendering__custom_paint$46dart.src__rendering__custom_paint;
  const theme = packages__flutter__src__cupertino__text_theme$46dart.src__cupertino__theme;
  const colors = packages__flutter__src__cupertino__text_theme$46dart.src__cupertino__colors;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const editable = packages__flutter__src__rendering__editable$46dart.src__rendering__editable;
  const text_input = packages__flutter__src__services__text_input$46dart.src__services__text_input;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const text_style = packages__flutter__src__painting__strut_style$46dart.src__painting__text_style;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var text_selection$ = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $add = dartx.add;
  var $isEmpty = dartx.isEmpty;
  var $clamp = dartx.clamp;
  var $first = dartx.first;
  var $last = dartx.last;
  var $length = dartx.length;
  var $containsKey = dartx.containsKey;
  var $values = dartx.values;
  var $forEach = dartx.forEach;
  var $containsValue = dartx.containsValue;
  var $contains = dartx.contains;
  var $remove = dartx.remove;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $where = dartx.where;
  dart._checkModuleNullSafetyMode(false);
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var StringAndFnTovoid = () => (StringAndFnTovoid = dart.constFn(dart.fnType(dart.void, [core.String, VoidTovoid()])))();
  var PaintingContextAndOffsetTovoid = () => (PaintingContextAndOffsetTovoid = dart.constFn(dart.fnType(dart.void, [object.PaintingContext, ui.Offset])))();
  var ColorL = () => (ColorL = dart.constFn(dart.legacy(ui.Color)))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var LinkedMapOf_CupertinoTextSelectionToolbarItemsSlot$Element = () => (LinkedMapOf_CupertinoTextSelectionToolbarItemsSlot$Element = dart.constFn(_js_helper.LinkedMap$(text_selection$._CupertinoTextSelectionToolbarItemsSlot, framework.Element)))();
  var _HashSetOfElement = () => (_HashSetOfElement = dart.constFn(collection._HashSet$(framework.Element)))();
  var RenderBoxN = () => (RenderBoxN = dart.constFn(dart.nullable(box.RenderBox)))();
  var IndexedSlotOfElement = () => (IndexedSlotOfElement = dart.constFn(framework.IndexedSlot$(framework.Element)))();
  var ListOfElement = () => (ListOfElement = dart.constFn(core.List$(framework.Element)))();
  var ElementN = () => (ElementN = dart.constFn(dart.nullable(framework.Element)))();
  var IndexedSlotOfElementN = () => (IndexedSlotOfElementN = dart.constFn(framework.IndexedSlot$(ElementN())))();
  var ElementTobool = () => (ElementTobool = dart.constFn(dart.fnType(core.bool, [framework.Element])))();
  var LinkedMapOf_CupertinoTextSelectionToolbarItemsSlot$RenderBox = () => (LinkedMapOf_CupertinoTextSelectionToolbarItemsSlot$RenderBox = dart.constFn(_js_helper.LinkedMap$(text_selection$._CupertinoTextSelectionToolbarItemsSlot, box.RenderBox)))();
  var VoidTodouble = () => (VoidTodouble = dart.constFn(dart.fnType(core.double, [])))();
  var doubleTodynamic = () => (doubleTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.double])))();
  var RenderObjectTovoid = () => (RenderObjectTovoid = dart.constFn(dart.fnType(dart.void, [object.RenderObject])))();
  var BoxHitTestResultAndOffsetTobool = () => (BoxHitTestResultAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset])))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var _CupertinoTextSelectionToolbarItemsSlotL = () => (_CupertinoTextSelectionToolbarItemsSlotL = dart.constFn(dart.legacy(text_selection$._CupertinoTextSelectionToolbarItemsSlot)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/cupertino/text_selection.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart";
  dart.defineLazy(CT, {
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 29,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 41,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4], _LocationL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 151,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C1 || CT.C1,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 0,
        [SizedBox_width]: 0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 18,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], _LocationL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 160,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 11,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 11,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11, C12 || CT.C12], _LocationL());
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 171,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 9,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "minSize",
        [_Location_column]: 9,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pressedOpacity",
        [_Location_column]: 9,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21], _LocationL());
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 170,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isArrowPointingDown",
        [_Location_column]: 9,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], _LocationL());
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 203,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "barTopY",
        [_Location_column]: 7,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "arrowTipX",
        [_Location_column]: 7,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isArrowPointingDown",
        [_Location_column]: 7,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31], _LocationL());
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 199,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 43,
        [BoxConstraints_minHeight]: 43,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 0
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 8
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 10,
        [OffsetBase__dx]: 10
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294902015.0
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38, C38 || CT.C38, C37 || CT.C37], ColorL());
    },
    get C39() {
      return C39 = dart.constList([0.25, 0.25, 0.75, 0.75], doubleL());
    },
    get C40() {
      return C40 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 6,
        [OffsetBase__dx]: 6
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 10.5,
        [OffsetBase__dx]: 5
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "arrowTipX",
        [_Location_column]: 7,
        [_Location_line]: 496,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "barTopY",
        [_Location_column]: 7,
        [_Location_line]: 497,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipboardStatus",
        [_Location_column]: 7,
        [_Location_line]: 498,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "handleCut",
        [_Location_column]: 7,
        [_Location_line]: 499,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "handleCopy",
        [_Location_column]: 7,
        [_Location_line]: 500,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "handlePaste",
        [_Location_column]: 7,
        [_Location_line]: 501,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "handleSelectAll",
        [_Location_column]: 7,
        [_Location_line]: 502,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isArrowPointingDown",
        [_Location_column]: 7,
        [_Location_line]: 503,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45, C46 || CT.C46, C47 || CT.C47, C48 || CT.C48, C49 || CT.C49, C50 || CT.C50, C51 || CT.C51], _LocationL());
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 495,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 9,
        [_Location_line]: 517,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54], _LocationL());
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 516,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 7,
        [_Location_line]: 515,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 516,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58], _LocationL());
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 514,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: text_selection.TextSelectionHandleType.prototype,
        [_name]: "TextSelectionHandleType.left",
        index: 0
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 11,
        [_Location_line]: 530,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 534,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62, C63 || CT.C63], _LocationL());
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 529,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: text_selection.TextSelectionHandleType.prototype,
        [_name]: "TextSelectionHandleType.right",
        index: 1
      });
    },
    get C67() {
      return C67 = dart.constList([], _LocationL());
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 538,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C66 || CT.C66,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: text_selection.TextSelectionHandleType.prototype,
        [_name]: "TextSelectionHandleType.collapsed",
        index: 2
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 150000
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name$]: "BoxShape.rectangle",
        index: 0
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4286611584.0
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: box_decoration.BoxDecoration.prototype,
        [BoxDecoration_shape]: C71 || CT.C71,
        [BoxDecoration_backgroundBlendMode]: null,
        [BoxDecoration_gradient]: null,
        [BoxDecoration_boxShadow]: null,
        [BoxDecoration_borderRadius]: null,
        [BoxDecoration_border]: null,
        [BoxDecoration_image]: null,
        [BoxDecoration_color]: C72 || CT.C72
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 670,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 36,
        [_Location_line]: 670,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77], _LocationL());
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 670,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 3
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C78() {
      return C78 = dart.const({
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
        [TextStyle_letterSpacing]: -0.15,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C79 || CT.C79,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C80 || CT.C80,
        [TextStyle_inherit]: false
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: text$.Text.prototype,
        [Widget__location]: C74 || CT.C74,
        [Widget_key]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: C78 || CT.C78,
        [Text_textSpan]: null,
        [Text_data]: "???"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 13,
        [_Location_line]: 664,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 665,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "minSize",
        [_Location_column]: 13,
        [_Location_line]: 666,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 667,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 668,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pressedOpacity",
        [_Location_column]: 13,
        [_Location_line]: 669,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 670,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84, C85 || CT.C85, C86 || CT.C86, C87 || CT.C87, C88 || CT.C88, C89 || CT.C89], _LocationL());
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 663,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 680,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 36,
        [_Location_line]: 680,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93, C94 || CT.C94], _LocationL());
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 680,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: text$.Text.prototype,
        [Widget__location]: C91 || CT.C91,
        [Widget_key]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: C78 || CT.C78,
        [Text_textSpan]: null,
        [Text_data]: "???"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 13,
        [_Location_line]: 674,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 675,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "minSize",
        [_Location_column]: 13,
        [_Location_line]: 676,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 677,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 678,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pressedOpacity",
        [_Location_column]: 13,
        [_Location_line]: 679,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 680,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98, C99 || CT.C99, C100 || CT.C100, C101 || CT.C101, C102 || CT.C102, C103 || CT.C103], _LocationL());
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 673,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 690,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 36,
        [_Location_line]: 690,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107, C108 || CT.C108], _LocationL());
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C106 || CT.C106,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 690,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4285887861.0
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4288256409.0
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: colors.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C111 || CT.C111,
        [CupertinoDynamicColor_highContrastElevatedColor]: C112 || CT.C112,
        [CupertinoDynamicColor_darkElevatedColor]: C111 || CT.C111,
        [CupertinoDynamicColor_elevatedColor]: C112 || CT.C112,
        [CupertinoDynamicColor_darkHighContrastColor]: C111 || CT.C111,
        [CupertinoDynamicColor_highContrastColor]: C112 || CT.C112,
        [CupertinoDynamicColor_darkColor]: C111 || CT.C111,
        [CupertinoDynamicColor_color]: C112 || CT.C112,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "inactiveGray",
        [CupertinoDynamicColor__effectiveColor]: C112 || CT.C112
      });
    },
    get C109() {
      return C109 = dart.const({
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
        [TextStyle_letterSpacing]: -0.15,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C79 || CT.C79,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C110 || CT.C110,
        [TextStyle_inherit]: false
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: text$.Text.prototype,
        [Widget__location]: C105 || CT.C105,
        [Widget_key]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: C109 || CT.C109,
        [Text_textSpan]: null,
        [Text_data]: "???"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 13,
        [_Location_line]: 683,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 684,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledColor",
        [_Location_column]: 13,
        [_Location_line]: 685,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "minSize",
        [_Location_column]: 13,
        [_Location_line]: 686,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 687,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 688,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pressedOpacity",
        [_Location_column]: 13,
        [_Location_line]: 689,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 690,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.constList([C115 || CT.C115, C116 || CT.C116, C117 || CT.C117, C118 || CT.C118, C119 || CT.C119, C120 || CT.C120, C121 || CT.C121, C122 || CT.C122], _LocationL());
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C114 || CT.C114,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 682,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "page",
        [_Location_column]: 11,
        [_Location_line]: 662,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backButton",
        [_Location_column]: 11,
        [_Location_line]: 663,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dividerWidth",
        [_Location_column]: 11,
        [_Location_line]: 672,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "nextButton",
        [_Location_column]: 11,
        [_Location_line]: 673,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "nextButtonDisabled",
        [_Location_column]: 11,
        [_Location_line]: 682,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 692,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.constList([C125 || CT.C125, C126 || CT.C126, C127 || CT.C127, C128 || CT.C128, C129 || CT.C129, C130 || CT.C130], _LocationL());
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C124 || CT.C124,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 661,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 9,
        [_Location_line]: 660,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 661,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.constList([C133 || CT.C133, C134 || CT.C134], _LocationL());
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C132 || CT.C132,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 659,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 658,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 659,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137, C138 || CT.C138], _LocationL());
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C136 || CT.C136,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 657,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: text_selection$._CupertinoTextSelectionToolbarItemsSlot.prototype,
        [_name$0]: "_CupertinoTextSelectionToolbarItemsSlot.backButton",
        index: 0
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: text_selection$._CupertinoTextSelectionToolbarItemsSlot.prototype,
        [_name$0]: "_CupertinoTextSelectionToolbarItemsSlot.nextButton",
        index: 1
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: text_selection$._CupertinoTextSelectionToolbarItemsSlot.prototype,
        [_name$0]: "_CupertinoTextSelectionToolbarItemsSlot.nextButtonDisabled",
        index: 2
      });
    },
    get C142() {
      return C142 = dart.constList([C139 || CT.C139, C140 || CT.C140, C141 || CT.C141], _CupertinoTextSelectionToolbarItemsSlotL());
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 1249,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 7,
        [OffsetBase__dx]: 14
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 8,
        [Radius_x]: 8
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3944751136.0
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 18,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 18
      });
    }
  }, false);
  var arrowTipX$ = dart.privateName(text_selection$, "_CupertinoTextSelectionToolbarWrapper.arrowTipX");
  var barTopY$ = dart.privateName(text_selection$, "_CupertinoTextSelectionToolbarWrapper.barTopY");
  var clipboardStatus$ = dart.privateName(text_selection$, "_CupertinoTextSelectionToolbarWrapper.clipboardStatus");
  var handleCut$ = dart.privateName(text_selection$, "_CupertinoTextSelectionToolbarWrapper.handleCut");
  var handleCopy$ = dart.privateName(text_selection$, "_CupertinoTextSelectionToolbarWrapper.handleCopy");
  var handlePaste$ = dart.privateName(text_selection$, "_CupertinoTextSelectionToolbarWrapper.handlePaste");
  var handleSelectAll$ = dart.privateName(text_selection$, "_CupertinoTextSelectionToolbarWrapper.handleSelectAll");
  var isArrowPointingDown$ = dart.privateName(text_selection$, "_CupertinoTextSelectionToolbarWrapper.isArrowPointingDown");
  text_selection$._CupertinoTextSelectionToolbarWrapper = class _CupertinoTextSelectionToolbarWrapper extends framework.StatefulWidget {
    get arrowTipX() {
      return this[arrowTipX$];
    }
    set arrowTipX(value) {
      super.arrowTipX = value;
    }
    get barTopY() {
      return this[barTopY$];
    }
    set barTopY(value) {
      super.barTopY = value;
    }
    get clipboardStatus() {
      return this[clipboardStatus$];
    }
    set clipboardStatus(value) {
      super.clipboardStatus = value;
    }
    get handleCut() {
      return this[handleCut$];
    }
    set handleCut(value) {
      super.handleCut = value;
    }
    get handleCopy() {
      return this[handleCopy$];
    }
    set handleCopy(value) {
      super.handleCopy = value;
    }
    get handlePaste() {
      return this[handlePaste$];
    }
    set handlePaste(value) {
      super.handlePaste = value;
    }
    get handleSelectAll() {
      return this[handleSelectAll$];
    }
    set handleSelectAll(value) {
      super.handleSelectAll = value;
    }
    get isArrowPointingDown() {
      return this[isArrowPointingDown$];
    }
    set isArrowPointingDown(value) {
      super.isArrowPointingDown = value;
    }
    createState() {
      return new text_selection$._CupertinoTextSelectionToolbarWrapperState.new();
    }
  };
  (text_selection$._CupertinoTextSelectionToolbarWrapper.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let arrowTipX = opts && 'arrowTipX' in opts ? opts.arrowTipX : null;
    if (arrowTipX == null) dart.nullFailed(L0, 70, 19, "arrowTipX");
    let barTopY = opts && 'barTopY' in opts ? opts.barTopY : null;
    if (barTopY == null) dart.nullFailed(L0, 71, 19, "barTopY");
    let clipboardStatus = opts && 'clipboardStatus' in opts ? opts.clipboardStatus : null;
    let handleCut = opts && 'handleCut' in opts ? opts.handleCut : null;
    let handleCopy = opts && 'handleCopy' in opts ? opts.handleCopy : null;
    let handlePaste = opts && 'handlePaste' in opts ? opts.handlePaste : null;
    let handleSelectAll = opts && 'handleSelectAll' in opts ? opts.handleSelectAll : null;
    let isArrowPointingDown = opts && 'isArrowPointingDown' in opts ? opts.isArrowPointingDown : null;
    if (isArrowPointingDown == null) dart.nullFailed(L0, 77, 19, "isArrowPointingDown");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[arrowTipX$] = arrowTipX;
    this[barTopY$] = barTopY;
    this[clipboardStatus$] = clipboardStatus;
    this[handleCut$] = handleCut;
    this[handleCopy$] = handleCopy;
    this[handlePaste$] = handlePaste;
    this[handleSelectAll$] = handleSelectAll;
    this[isArrowPointingDown$] = isArrowPointingDown;
    text_selection$._CupertinoTextSelectionToolbarWrapper.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection$._CupertinoTextSelectionToolbarWrapper.prototype;
  dart.addTypeTests(text_selection$._CupertinoTextSelectionToolbarWrapper);
  dart.addTypeCaches(text_selection$._CupertinoTextSelectionToolbarWrapper);
  dart.setMethodSignature(text_selection$._CupertinoTextSelectionToolbarWrapper, () => ({
    __proto__: dart.getMethods(text_selection$._CupertinoTextSelectionToolbarWrapper.__proto__),
    createState: dart.fnType(text_selection$._CupertinoTextSelectionToolbarWrapperState, [])
  }));
  dart.setLibraryUri(text_selection$._CupertinoTextSelectionToolbarWrapper, L1);
  dart.setFieldSignature(text_selection$._CupertinoTextSelectionToolbarWrapper, () => ({
    __proto__: dart.getFields(text_selection$._CupertinoTextSelectionToolbarWrapper.__proto__),
    arrowTipX: dart.finalFieldType(core.double),
    barTopY: dart.finalFieldType(core.double),
    clipboardStatus: dart.finalFieldType(dart.nullable(text_selection.ClipboardStatusNotifier)),
    handleCut: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    handleCopy: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    handlePaste: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    handleSelectAll: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    isArrowPointingDown: dart.finalFieldType(core.bool)
  }));
  var ___CupertinoTextSelectionToolbarWrapperState__clipboardStatus = dart.privateName(text_selection$, "_#_CupertinoTextSelectionToolbarWrapperState#_clipboardStatus");
  var ___CupertinoTextSelectionToolbarWrapperState__clipboardStatus_isSet = dart.privateName(text_selection$, "_#_CupertinoTextSelectionToolbarWrapperState#_clipboardStatus#isSet");
  var _clipboardStatus = dart.privateName(text_selection$, "_clipboardStatus");
  var _onChangedClipboardStatus = dart.privateName(text_selection$, "_onChangedClipboardStatus");
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C3;
  var C4;
  var C2;
  var C1;
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  var C0;
  var C7;
  var C6;
  var C5;
  var C10;
  var C11;
  var C12;
  var C9;
  var C8;
  var C15;
  var C16;
  var C17;
  var C18;
  var C19;
  var C20;
  var C21;
  var C14;
  var C13;
  var C24;
  var C25;
  var C23;
  var C22;
  var C28;
  var C29;
  var C30;
  var C31;
  var C27;
  var C26;
  text_selection$._CupertinoTextSelectionToolbarWrapperState = class _CupertinoTextSelectionToolbarWrapperState extends framework.State$(text_selection$._CupertinoTextSelectionToolbarWrapper) {
    get [_clipboardStatus]() {
      let t0;
      return dart.test(this[___CupertinoTextSelectionToolbarWrapperState__clipboardStatus_isSet]) ? (t0 = this[___CupertinoTextSelectionToolbarWrapperState__clipboardStatus], t0) : dart.throw(new _internal.LateError.fieldNI("_clipboardStatus"));
    }
    set [_clipboardStatus](t0) {
      if (t0 == null) dart.nullFailed(L0, 94, 32, "null");
      this[___CupertinoTextSelectionToolbarWrapperState__clipboardStatus_isSet] = true;
      this[___CupertinoTextSelectionToolbarWrapperState__clipboardStatus] = t0;
    }
    [_onChangedClipboardStatus]() {
      this.setState(dart.fn(() => {
      }, VoidTovoid()));
    }
    initState() {
      let t1;
      super.initState();
      this[_clipboardStatus] = (t1 = this.widget.clipboardStatus, t1 == null ? new text_selection.ClipboardStatusNotifier.new() : t1);
      this[_clipboardStatus].addListener(dart.bind(this, _onChangedClipboardStatus));
      this[_clipboardStatus].update();
    }
    didUpdateWidget(oldWidget) {
      text_selection$._CupertinoTextSelectionToolbarWrapper.as(oldWidget);
      if (oldWidget == null) dart.nullFailed(L0, 111, 62, "oldWidget");
      super.didUpdateWidget(oldWidget);
      if (oldWidget.clipboardStatus == null && this.widget.clipboardStatus != null) {
        this[_clipboardStatus].removeListener(dart.bind(this, _onChangedClipboardStatus));
        this[_clipboardStatus].dispose();
        this[_clipboardStatus] = dart.nullCheck(this.widget.clipboardStatus);
      } else if (oldWidget.clipboardStatus != null) {
        if (this.widget.clipboardStatus == null) {
          this[_clipboardStatus] = new text_selection.ClipboardStatusNotifier.new();
          this[_clipboardStatus].addListener(dart.bind(this, _onChangedClipboardStatus));
          dart.nullCheck(oldWidget.clipboardStatus).removeListener(dart.bind(this, _onChangedClipboardStatus));
        } else if (!dart.equals(this.widget.clipboardStatus, oldWidget.clipboardStatus)) {
          this[_clipboardStatus] = dart.nullCheck(this.widget.clipboardStatus);
          this[_clipboardStatus].addListener(dart.bind(this, _onChangedClipboardStatus));
          dart.nullCheck(oldWidget.clipboardStatus).removeListener(dart.bind(this, _onChangedClipboardStatus));
        }
      }
      if (this.widget.handlePaste != null) {
        this[_clipboardStatus].update();
      }
    }
    dispose() {
      super.dispose();
      if (!dart.test(this[_clipboardStatus].disposed)) {
        this[_clipboardStatus].removeListener(dart.bind(this, _onChangedClipboardStatus));
        if (this.widget.clipboardStatus == null) {
          this[_clipboardStatus].dispose();
        }
      }
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 147, 29, "context");
      if (this.widget.handlePaste != null && dart.equals(this[_clipboardStatus].value, text_selection.ClipboardStatus.unknown)) {
        return C0 || CT.C0;
      }
      let items = JSArrayOfWidget().of([]);
      let localizations = localizations$.CupertinoLocalizations.of(context);
      let arrowPadding = dart.test(this.widget.isArrowPointingDown) ? new edge_insets.EdgeInsets.only({bottom: text_selection$._kToolbarArrowSize.height}) : new edge_insets.EdgeInsets.only({top: text_selection$._kToolbarArrowSize.height});
      let onePhysicalPixelVerticalDivider = new basic.SizedBox.new({width: 1.0 / dart.notNull(media_query.MediaQuery.of(context).devicePixelRatio), $creationLocationd_0dea112b090073317d4: C5 || CT.C5});
      function addToolbarButton(text, onPressed) {
        if (text == null) dart.nullFailed(L0, 163, 14, "text");
        if (onPressed == null) dart.nullFailed(L0, 164, 20, "onPressed");
        if (dart.test(items[$isNotEmpty])) {
          items[$add](onePhysicalPixelVerticalDivider);
        }
        items[$add](new button.CupertinoButton.new({child: new text$.Text.new(text, {overflow: paragraph.TextOverflow.ellipsis, style: text_selection$._kToolbarButtonFontStyle, $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), borderRadius: null, color: text_selection$._kToolbarBackgroundColor, minSize: 43, onPressed: onPressed, padding: text_selection$._kToolbarButtonPadding.add(arrowPadding), pressedOpacity: 0.7, $creationLocationd_0dea112b090073317d4: C13 || CT.C13}));
      }
      dart.fn(addToolbarButton, StringAndFnTovoid());
      if (this.widget.handleCut != null) {
        addToolbarButton(localizations.cutButtonLabel, dart.nullCheck(this.widget.handleCut));
      }
      if (this.widget.handleCopy != null) {
        addToolbarButton(localizations.copyButtonLabel, dart.nullCheck(this.widget.handleCopy));
      }
      if (this.widget.handlePaste != null && dart.equals(this[_clipboardStatus].value, text_selection.ClipboardStatus.pasteable)) {
        addToolbarButton(localizations.pasteButtonLabel, dart.nullCheck(this.widget.handlePaste));
      }
      if (this.widget.handleSelectAll != null) {
        addToolbarButton(localizations.selectAllButtonLabel, dart.nullCheck(this.widget.handleSelectAll));
      }
      return new text_selection$.CupertinoTextSelectionToolbar.__({barTopY: this.widget.barTopY, arrowTipX: this.widget.arrowTipX, isArrowPointingDown: this.widget.isArrowPointingDown, child: dart.test(items[$isEmpty]) ? null : new text_selection$._CupertinoTextSelectionToolbarContent.new({isArrowPointingDown: this.widget.isArrowPointingDown, children: items, $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C26 || CT.C26});
    }
  };
  (text_selection$._CupertinoTextSelectionToolbarWrapperState.new = function() {
    this[___CupertinoTextSelectionToolbarWrapperState__clipboardStatus] = null;
    this[___CupertinoTextSelectionToolbarWrapperState__clipboardStatus_isSet] = false;
    text_selection$._CupertinoTextSelectionToolbarWrapperState.__proto__.new.call(this);
    ;
  }).prototype = text_selection$._CupertinoTextSelectionToolbarWrapperState.prototype;
  dart.addTypeTests(text_selection$._CupertinoTextSelectionToolbarWrapperState);
  dart.addTypeCaches(text_selection$._CupertinoTextSelectionToolbarWrapperState);
  dart.setMethodSignature(text_selection$._CupertinoTextSelectionToolbarWrapperState, () => ({
    __proto__: dart.getMethods(text_selection$._CupertinoTextSelectionToolbarWrapperState.__proto__),
    [_onChangedClipboardStatus]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(text_selection$._CupertinoTextSelectionToolbarWrapperState, () => ({
    __proto__: dart.getGetters(text_selection$._CupertinoTextSelectionToolbarWrapperState.__proto__),
    [_clipboardStatus]: text_selection.ClipboardStatusNotifier
  }));
  dart.setSetterSignature(text_selection$._CupertinoTextSelectionToolbarWrapperState, () => ({
    __proto__: dart.getSetters(text_selection$._CupertinoTextSelectionToolbarWrapperState.__proto__),
    [_clipboardStatus]: text_selection.ClipboardStatusNotifier
  }));
  dart.setLibraryUri(text_selection$._CupertinoTextSelectionToolbarWrapperState, L1);
  dart.setFieldSignature(text_selection$._CupertinoTextSelectionToolbarWrapperState, () => ({
    __proto__: dart.getFields(text_selection$._CupertinoTextSelectionToolbarWrapperState.__proto__),
    [___CupertinoTextSelectionToolbarWrapperState__clipboardStatus]: dart.fieldType(dart.nullable(text_selection.ClipboardStatusNotifier)),
    [___CupertinoTextSelectionToolbarWrapperState__clipboardStatus_isSet]: dart.fieldType(core.bool)
  }));
  var _barTopY$ = dart.privateName(text_selection$, "_barTopY");
  var _arrowTipX$ = dart.privateName(text_selection$, "_arrowTipX");
  var _isArrowPointingDown$ = dart.privateName(text_selection$, "_isArrowPointingDown");
  var _barTopY = dart.privateName(text_selection$, "CupertinoTextSelectionToolbar._barTopY");
  var _arrowTipX = dart.privateName(text_selection$, "CupertinoTextSelectionToolbar._arrowTipX");
  var _isArrowPointingDown = dart.privateName(text_selection$, "CupertinoTextSelectionToolbar._isArrowPointingDown");
  text_selection$.CupertinoTextSelectionToolbar = class CupertinoTextSelectionToolbar extends framework.SingleChildRenderObjectWidget {
    get [_barTopY$]() {
      return this[_barTopY];
    }
    set [_barTopY$](value) {
      super[_barTopY$] = value;
    }
    get [_arrowTipX$]() {
      return this[_arrowTipX];
    }
    set [_arrowTipX$](value) {
      super[_arrowTipX$] = value;
    }
    get [_isArrowPointingDown$]() {
      return this[_isArrowPointingDown];
    }
    set [_isArrowPointingDown$](value) {
      super[_isArrowPointingDown$] = value;
    }
    createRenderObject(context) {
      if (context == null) dart.nullFailed(L0, 243, 53, "context");
      return new text_selection$._ToolbarRenderBox.new(this[_barTopY$], this[_arrowTipX$], this[_isArrowPointingDown$], null);
    }
    updateRenderObject(context, renderObject) {
      let t1;
      if (context == null) dart.nullFailed(L0, 246, 40, "context");
      text_selection$._ToolbarRenderBox.as(renderObject);
      if (renderObject == null) dart.nullFailed(L0, 246, 67, "renderObject");
      t1 = renderObject;
      (() => {
        t1.barTopY = this[_barTopY$];
        t1.arrowTipX = this[_arrowTipX$];
        t1.isArrowPointingDown = this[_isArrowPointingDown$];
        return t1;
      })();
    }
  };
  (text_selection$.CupertinoTextSelectionToolbar.__ = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let barTopY = opts && 'barTopY' in opts ? opts.barTopY : null;
    if (barTopY == null) dart.nullFailed(L0, 223, 21, "barTopY");
    let arrowTipX = opts && 'arrowTipX' in opts ? opts.arrowTipX : null;
    if (arrowTipX == null) dart.nullFailed(L0, 224, 21, "arrowTipX");
    let isArrowPointingDown = opts && 'isArrowPointingDown' in opts ? opts.isArrowPointingDown : null;
    if (isArrowPointingDown == null) dart.nullFailed(L0, 225, 19, "isArrowPointingDown");
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_barTopY] = barTopY;
    this[_arrowTipX] = arrowTipX;
    this[_isArrowPointingDown] = isArrowPointingDown;
    text_selection$.CupertinoTextSelectionToolbar.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection$.CupertinoTextSelectionToolbar.prototype;
  dart.addTypeTests(text_selection$.CupertinoTextSelectionToolbar);
  dart.addTypeCaches(text_selection$.CupertinoTextSelectionToolbar);
  dart.setMethodSignature(text_selection$.CupertinoTextSelectionToolbar, () => ({
    __proto__: dart.getMethods(text_selection$.CupertinoTextSelectionToolbar.__proto__),
    createRenderObject: dart.fnType(text_selection$._ToolbarRenderBox, [framework.BuildContext])
  }));
  dart.setLibraryUri(text_selection$.CupertinoTextSelectionToolbar, L1);
  dart.setFieldSignature(text_selection$.CupertinoTextSelectionToolbar, () => ({
    __proto__: dart.getFields(text_selection$.CupertinoTextSelectionToolbar.__proto__),
    [_barTopY$]: dart.finalFieldType(core.double),
    [_arrowTipX$]: dart.finalFieldType(core.double),
    [_isArrowPointingDown$]: dart.finalFieldType(core.bool)
  }));
  text_selection$._ToolbarParentData = class _ToolbarParentData extends box.BoxParentData {
    toString() {
      return "offset=" + dart.str(this.offset) + ", arrowXOffsetFromCenter=" + dart.str(this.arrowXOffsetFromCenter);
    }
  };
  (text_selection$._ToolbarParentData.new = function() {
    this.arrowXOffsetFromCenter = null;
    text_selection$._ToolbarParentData.__proto__.new.call(this);
    ;
  }).prototype = text_selection$._ToolbarParentData.prototype;
  dart.addTypeTests(text_selection$._ToolbarParentData);
  dart.addTypeCaches(text_selection$._ToolbarParentData);
  dart.setLibraryUri(text_selection$._ToolbarParentData, L1);
  dart.setFieldSignature(text_selection$._ToolbarParentData, () => ({
    __proto__: dart.getFields(text_selection$._ToolbarParentData.__proto__),
    arrowXOffsetFromCenter: dart.fieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(text_selection$._ToolbarParentData, ['toString']);
  var BoxConstraints_maxHeight = dart.privateName(box, "BoxConstraints.maxHeight");
  var BoxConstraints_minHeight = dart.privateName(box, "BoxConstraints.minHeight");
  var BoxConstraints_maxWidth = dart.privateName(box, "BoxConstraints.maxWidth");
  var BoxConstraints_minWidth = dart.privateName(box, "BoxConstraints.minWidth");
  var C32;
  var _clipPathLayer = dart.privateName(text_selection$, "_clipPathLayer");
  var _debugPaint = dart.privateName(text_selection$, "_debugPaint");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C33;
  var _clipPath = dart.privateName(text_selection$, "_clipPath");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C34;
  var C35;
  var Color_value = dart.privateName(ui, "Color.value");
  var C37;
  var C38;
  var C36;
  var C39;
  text_selection$._ToolbarRenderBox = class _ToolbarRenderBox extends shifted_box.RenderShiftedBox {
    get isRepaintBoundary() {
      return true;
    }
    set barTopY(value) {
      if (value == null) dart.nullFailed(L0, 276, 22, "value");
      if (this[_barTopY$] == value) {
        return;
      }
      this[_barTopY$] = value;
      this.markNeedsLayout();
      this.markNeedsSemanticsUpdate();
    }
    set arrowTipX(value) {
      if (value == null) dart.nullFailed(L0, 286, 24, "value");
      if (this[_arrowTipX$] == value) {
        return;
      }
      this[_arrowTipX$] = value;
      this.markNeedsLayout();
      this.markNeedsSemanticsUpdate();
    }
    set isArrowPointingDown(value) {
      if (value == null) dart.nullFailed(L0, 296, 32, "value");
      if (dart.equals(this[_isArrowPointingDown$], value)) {
        return;
      }
      this[_isArrowPointingDown$] = value;
      this.markNeedsLayout();
      this.markNeedsSemanticsUpdate();
    }
    setupParentData(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 308, 37, "child");
      if (!text_selection$._ToolbarParentData.is(child.parentData)) {
        child.parentData = new text_selection$._ToolbarParentData.new();
      }
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 315, 40, "constraints");
      return constraints.biggest;
    }
    performLayout() {
      let constraints = this.constraints;
      this.size = constraints.biggest;
      if (this.child == null) {
        return;
      }
      let enforcedConstraint = constraints.deflate(C33 || CT.C33).loosen();
      dart.nullCheck(this.child).layout(this.heightConstraint.enforce(enforcedConstraint), {parentUsesSize: true});
      let childParentData = text_selection$._ToolbarParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
      let lowerBound = dart.notNull(dart.nullCheck(this.child).size.width) / 2 + 8;
      let upperBound = dart.notNull(this.size.width) - dart.notNull(dart.nullCheck(this.child).size.width) / 2 - 8;
      let adjustedCenterX = this[_arrowTipX$][$clamp](lowerBound, upperBound);
      childParentData.offset = new ui.Offset.new(adjustedCenterX - dart.notNull(dart.nullCheck(this.child).size.width) / 2, this[_barTopY$]);
      childParentData.arrowXOffsetFromCenter = dart.notNull(this[_arrowTipX$]) - adjustedCenterX;
    }
    [_clipPath]() {
      let t1, t1$;
      let childParentData = text_selection$._ToolbarParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
      let rrect = (t1 = ui.Path.new(), (() => {
        t1.addRRect(new ui.RRect.fromRectAndRadius(new ui.Offset.new(0.0, dart.test(this[_isArrowPointingDown$]) ? 0.0 : text_selection$._kToolbarArrowSize.height)['&'](new ui.Size.new(dart.nullCheck(this.child).size.width, dart.notNull(dart.nullCheck(this.child).size.height) - dart.notNull(text_selection$._kToolbarArrowSize.height))), text_selection$._kToolbarBorderRadius));
        return t1;
      })());
      let arrowTipX = dart.notNull(dart.nullCheck(this.child).size.width) / 2 + dart.nullCheck(childParentData.arrowXOffsetFromCenter);
      let arrowBottomY = dart.test(this[_isArrowPointingDown$]) ? dart.notNull(dart.nullCheck(this.child).size.height) - dart.notNull(text_selection$._kToolbarArrowSize.height) : text_selection$._kToolbarArrowSize.height;
      let arrowTipY = dart.test(this[_isArrowPointingDown$]) ? dart.nullCheck(this.child).size.height : 0.0;
      let arrow = (t1$ = ui.Path.new(), (() => {
        t1$.moveTo(arrowTipX, arrowTipY);
        t1$.lineTo(arrowTipX - dart.notNull(text_selection$._kToolbarArrowSize.width) / 2, arrowBottomY);
        t1$.lineTo(arrowTipX + dart.notNull(text_selection$._kToolbarArrowSize.width) / 2, arrowBottomY);
        t1$.close();
        return t1$;
      })());
      return ui.Path.combine(ui.PathOperation.union, rrect, arrow);
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 373, 30, "context");
      if (offset == null) dart.nullFailed(L0, 373, 46, "offset");
      if (this.child == null) {
        return;
      }
      let childParentData = text_selection$._ToolbarParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
      this[_clipPathLayer] = context.pushClipPath(this.needsCompositing, offset['+'](childParentData.offset), ui.Offset.zero['&'](dart.nullCheck(this.child).size), this[_clipPath](), dart.fn((innerContext, innerOffset) => {
        if (innerContext == null) dart.nullFailed(L0, 384, 24, "innerContext");
        if (innerOffset == null) dart.nullFailed(L0, 384, 45, "innerOffset");
        return innerContext.paintChild(dart.nullCheck(this.child), innerOffset);
      }, PaintingContextAndOffsetTovoid()), {oldLayer: this[_clipPathLayer]});
    }
    debugPaintSize(context, offset) {
      if (context == null) dart.nullFailed(L0, 393, 39, "context");
      if (offset == null) dart.nullFailed(L0, 393, 55, "offset");
      if (!dart.test(dart.fn(() => {
        let t1;
        if (this.child == null) {
          return true;
        }
        this[_debugPaint] == null ? this[_debugPaint] = (t1 = ui.Paint.new(), (() => {
          t1.shader = ui.Gradient.linear(C34 || CT.C34, C35 || CT.C35, C36 || CT.C36, C39 || CT.C39, ui.TileMode.repeated);
          t1.strokeWidth = 2.0;
          t1.style = ui.PaintingStyle.stroke;
          return t1;
        })()) : null;
        let childParentData = text_selection$._ToolbarParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
        context.canvas.drawPath(this[_clipPath]().shift(offset['+'](childParentData.offset)), dart.nullCheck(this[_debugPaint]));
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 394, 12, "() {\n      if (child == null) {\n        return true;\n      }\n\n      _debugPaint ??= Paint()\n        ..shader = ui.Gradient.linear(\n          const Offset(0.0, 0.0),\n          const Offset(10.0, 10.0),\n          const <Color>[Color(0x00000000), Color(0xFFFF00FF), Color(0xFFFF00FF), Color(0x00000000)],\n          const <double>[0.25, 0.25, 0.75, 0.75],\n          TileMode.repeated,\n        )\n        ..strokeWidth = 2.0\n        ..style = PaintingStyle.stroke;\n\n      final _ToolbarParentData childParentData = child!.parentData! as _ToolbarParentData;\n      context.canvas.drawPath(_clipPath().shift(offset + childParentData.offset), _debugPaint!);\n      return true;\n    }()");
    }
  };
  (text_selection$._ToolbarRenderBox.new = function(_barTopY, _arrowTipX, _isArrowPointingDown, child) {
    if (_barTopY == null) dart.nullFailed(L0, 265, 10, "_barTopY");
    if (_arrowTipX == null) dart.nullFailed(L0, 266, 10, "_arrowTipX");
    if (_isArrowPointingDown == null) dart.nullFailed(L0, 267, 10, "_isArrowPointingDown");
    this.heightConstraint = C32 || CT.C32;
    this[_clipPathLayer] = null;
    this[_debugPaint] = null;
    this[_barTopY$] = _barTopY;
    this[_arrowTipX$] = _arrowTipX;
    this[_isArrowPointingDown$] = _isArrowPointingDown;
    text_selection$._ToolbarRenderBox.__proto__.new.call(this, child);
    ;
  }).prototype = text_selection$._ToolbarRenderBox.prototype;
  dart.addTypeTests(text_selection$._ToolbarRenderBox);
  dart.addTypeCaches(text_selection$._ToolbarRenderBox);
  dart.setMethodSignature(text_selection$._ToolbarRenderBox, () => ({
    __proto__: dart.getMethods(text_selection$._ToolbarRenderBox.__proto__),
    [_clipPath]: dart.fnType(ui.Path, [])
  }));
  dart.setSetterSignature(text_selection$._ToolbarRenderBox, () => ({
    __proto__: dart.getSetters(text_selection$._ToolbarRenderBox.__proto__),
    barTopY: core.double,
    arrowTipX: core.double,
    isArrowPointingDown: core.bool
  }));
  dart.setLibraryUri(text_selection$._ToolbarRenderBox, L1);
  dart.setFieldSignature(text_selection$._ToolbarRenderBox, () => ({
    __proto__: dart.getFields(text_selection$._ToolbarRenderBox.__proto__),
    [_barTopY$]: dart.fieldType(core.double),
    [_arrowTipX$]: dart.fieldType(core.double),
    [_isArrowPointingDown$]: dart.fieldType(core.bool),
    heightConstraint: dart.finalFieldType(box.BoxConstraints),
    [_clipPathLayer]: dart.fieldType(dart.nullable(layer.ClipPathLayer)),
    [_debugPaint]: dart.fieldType(dart.nullable(ui.Paint))
  }));
  var C40;
  var C41;
  var color$ = dart.privateName(text_selection$, "_TextSelectionHandlePainter.color");
  text_selection$._TextSelectionHandlePainter = class _TextSelectionHandlePainter extends custom_paint.CustomPainter {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    paint(canvas, size) {
      let t1, t1$;
      if (canvas == null) dart.nullFailed(L0, 424, 21, "canvas");
      if (size == null) dart.nullFailed(L0, 424, 34, "size");
      let paint = (t1 = ui.Paint.new(), (() => {
        t1.color = this.color;
        return t1;
      })());
      let circle = new ui.Rect.fromCircle({center: C40 || CT.C40, radius: 6});
      let line = new ui.Rect.fromPoints(C41 || CT.C41, new ui.Offset.new(6 + 1, size.height));
      let path = (t1$ = ui.Path.new(), (() => {
        t1$.addOval(circle);
        t1$.addRect(line);
        return t1$;
      })());
      canvas.drawPath(path, paint);
    }
    shouldRepaint(oldPainter) {
      text_selection$._TextSelectionHandlePainter.as(oldPainter);
      if (oldPainter == null) dart.nullFailed(L0, 446, 50, "oldPainter");
      return !dart.equals(this.color, oldPainter.color);
    }
  };
  (text_selection$._TextSelectionHandlePainter.new = function(color) {
    if (color == null) dart.nullFailed(L0, 419, 42, "color");
    this[color$] = color;
    text_selection$._TextSelectionHandlePainter.__proto__.new.call(this);
    ;
  }).prototype = text_selection$._TextSelectionHandlePainter.prototype;
  dart.addTypeTests(text_selection$._TextSelectionHandlePainter);
  dart.addTypeCaches(text_selection$._TextSelectionHandlePainter);
  dart.setMethodSignature(text_selection$._TextSelectionHandlePainter, () => ({
    __proto__: dart.getMethods(text_selection$._TextSelectionHandlePainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(text_selection$._TextSelectionHandlePainter, L1);
  dart.setFieldSignature(text_selection$._TextSelectionHandlePainter, () => ({
    __proto__: dart.getFields(text_selection$._TextSelectionHandlePainter.__proto__),
    color: dart.finalFieldType(ui.Color)
  }));
  var C44;
  var C45;
  var C46;
  var C47;
  var C48;
  var C49;
  var C50;
  var C51;
  var C43;
  var C42;
  var C54;
  var C53;
  var C52;
  var C57;
  var C58;
  var C56;
  var C55;
  var _name = dart.privateName(text_selection, "_name");
  var C59;
  var C62;
  var C63;
  var C61;
  var C60;
  var C64;
  var C67;
  var C66;
  var C65;
  var C68;
  text_selection$._CupertinoTextSelectionControls = class _CupertinoTextSelectionControls extends text_selection.TextSelectionControls {
    getHandleSize(textLineHeight) {
      if (textLineHeight == null) dart.nullFailed(L0, 452, 29, "textLineHeight");
      return new ui.Size.new(6 * 2, dart.notNull(textLineHeight) + 6 * 2 - 1.5);
    }
    buildToolbar(context, globalEditableRegion, textLineHeight, position, endpoints, delegate, clipboardStatus) {
      if (context == null) dart.nullFailed(L0, 462, 18, "context");
      if (globalEditableRegion == null) dart.nullFailed(L0, 463, 10, "globalEditableRegion");
      if (textLineHeight == null) dart.nullFailed(L0, 464, 12, "textLineHeight");
      if (position == null) dart.nullFailed(L0, 465, 12, "position");
      if (endpoints == null) dart.nullFailed(L0, 466, 30, "endpoints");
      if (delegate == null) dart.nullFailed(L0, 467, 27, "delegate");
      if (clipboardStatus == null) dart.nullFailed(L0, 468, 29, "clipboardStatus");
      if (!dart.test(debug.debugCheckHasMediaQuery(context))) dart.assertFailed(null, L0, 470, 12, "debugCheckHasMediaQuery(context)");
      let mediaQuery = media_query.MediaQuery.of(context);
      let toolbarHeightNeeded = dart.notNull(mediaQuery.padding.top) + 8 + 43 + 8;
      let availableHeight = dart.notNull(globalEditableRegion.top) + dart.notNull(endpoints[$first].point.dy) - dart.notNull(textLineHeight);
      let isArrowPointingDown = toolbarHeightNeeded <= availableHeight;
      let arrowTipX = (dart.notNull(position.dx) + dart.notNull(globalEditableRegion.left))[$clamp](26 + dart.notNull(mediaQuery.padding.left), dart.notNull(mediaQuery.size.width) - dart.notNull(mediaQuery.padding.right) - 26);
      let localBarTopY = isArrowPointingDown ? dart.notNull(endpoints[$first].point.dy) - dart.notNull(textLineHeight) - 8 - 43 : dart.notNull(endpoints[$last].point.dy) + 8;
      return new text_selection$._CupertinoTextSelectionToolbarWrapper.new({arrowTipX: arrowTipX, barTopY: localBarTopY + dart.notNull(globalEditableRegion.top), clipboardStatus: clipboardStatus, handleCut: dart.test(this.canCut(delegate)) ? dart.fn(() => this.handleCut(delegate), VoidTovoid()) : null, handleCopy: dart.test(this.canCopy(delegate)) ? dart.fn(() => this.handleCopy(delegate, clipboardStatus), VoidTovoid()) : null, handlePaste: dart.test(this.canPaste(delegate)) ? dart.fn(() => this.handlePaste(delegate), VoidTovoid()) : null, handleSelectAll: dart.test(this.canSelectAll(delegate)) ? dart.fn(() => this.handleSelectAll(delegate), VoidTovoid()) : null, isArrowPointingDown: isArrowPointingDown, $creationLocationd_0dea112b090073317d4: C42 || CT.C42});
    }
    buildHandle(context, type, textLineHeight) {
      let t1;
      if (context == null) dart.nullFailed(L0, 509, 35, "context");
      if (type == null) dart.nullFailed(L0, 509, 68, "type");
      if (textLineHeight == null) dart.nullFailed(L0, 509, 81, "textLineHeight");
      let desiredSize = this.getHandleSize(textLineHeight);
      let handle = new basic.SizedBox.fromSize({size: desiredSize, child: new basic.CustomPaint.new({painter: new text_selection$._TextSelectionHandlePainter.new(theme.CupertinoTheme.of(context).primaryColor), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C55 || CT.C55});
      switch (type) {
        case C59 || CT.C59:
        {
          return handle;
        }
        case C64 || CT.C64:
        {
          return new basic.Transform.new({transform: (t1 = vector_math_64.Matrix4.identity(), (() => {
              t1.translate(dart.notNull(desiredSize.width) / 2, dart.notNull(desiredSize.height) / 2);
              t1.rotateZ(3.141592653589793);
              t1.translate(-dart.notNull(desiredSize.width) / 2, -dart.notNull(desiredSize.height) / 2);
              return t1;
            })()), child: handle, $creationLocationd_0dea112b090073317d4: C60 || CT.C60});
        }
        case C68 || CT.C68:
        {
          return C65 || CT.C65;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    getHandleAnchor(type, textLineHeight) {
      if (type == null) dart.nullFailed(L0, 546, 50, "type");
      if (textLineHeight == null) dart.nullFailed(L0, 546, 63, "textLineHeight");
      let handleSize = this.getHandleSize(textLineHeight);
      switch (type) {
        case C59 || CT.C59:
        {
          return new ui.Offset.new(dart.notNull(handleSize.width) / 2, handleSize.height);
        }
        case C64 || CT.C64:
        {
          return new ui.Offset.new(dart.notNull(handleSize.width) / 2, dart.notNull(handleSize.height) - 2 * 6 + 1.5);
        }
        case C68 || CT.C68:
        {
          return new ui.Offset.new(dart.notNull(handleSize.width) / 2, dart.notNull(textLineHeight) + (dart.notNull(handleSize.height) - dart.notNull(textLineHeight)) / 2);
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
  };
  (text_selection$._CupertinoTextSelectionControls.new = function() {
    ;
  }).prototype = text_selection$._CupertinoTextSelectionControls.prototype;
  dart.addTypeTests(text_selection$._CupertinoTextSelectionControls);
  dart.addTypeCaches(text_selection$._CupertinoTextSelectionControls);
  dart.setMethodSignature(text_selection$._CupertinoTextSelectionControls, () => ({
    __proto__: dart.getMethods(text_selection$._CupertinoTextSelectionControls.__proto__),
    getHandleSize: dart.fnType(ui.Size, [core.double]),
    buildToolbar: dart.fnType(framework.Widget, [framework.BuildContext, ui.Rect, core.double, ui.Offset, core.List$(editable.TextSelectionPoint), text_input.TextSelectionDelegate, text_selection.ClipboardStatusNotifier]),
    buildHandle: dart.fnType(framework.Widget, [framework.BuildContext, text_selection.TextSelectionHandleType, core.double]),
    getHandleAnchor: dart.fnType(ui.Offset, [text_selection.TextSelectionHandleType, core.double])
  }));
  dart.setLibraryUri(text_selection$._CupertinoTextSelectionControls, L1);
  var children$ = dart.privateName(text_selection$, "_CupertinoTextSelectionToolbarContent.children");
  var isArrowPointingDown$0 = dart.privateName(text_selection$, "_CupertinoTextSelectionToolbarContent.isArrowPointingDown");
  text_selection$._CupertinoTextSelectionToolbarContent = class _CupertinoTextSelectionToolbarContent extends framework.StatefulWidget {
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    get isArrowPointingDown() {
      return this[isArrowPointingDown$0];
    }
    set isArrowPointingDown(value) {
      super.isArrowPointingDown = value;
    }
    createState() {
      return new text_selection$._CupertinoTextSelectionToolbarContentState.new();
    }
  };
  (text_selection$._CupertinoTextSelectionToolbarContent.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let children = opts && 'children' in opts ? opts.children : null;
    if (children == null) dart.nullFailed(L0, 577, 19, "children");
    let isArrowPointingDown = opts && 'isArrowPointingDown' in opts ? opts.isArrowPointingDown : null;
    if (isArrowPointingDown == null) dart.nullFailed(L0, 578, 19, "isArrowPointingDown");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[children$] = children;
    this[isArrowPointingDown$0] = isArrowPointingDown;
    if (!(children != null)) dart.assertFailed(null, L0, 579, 15, "children != null");
    if (!(dart.notNull(children[$length]) > 0)) dart.assertFailed(null, L0, 581, 15, "children.length > 0");
    text_selection$._CupertinoTextSelectionToolbarContent.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection$._CupertinoTextSelectionToolbarContent.prototype;
  dart.addTypeTests(text_selection$._CupertinoTextSelectionToolbarContent);
  dart.addTypeCaches(text_selection$._CupertinoTextSelectionToolbarContent);
  dart.setMethodSignature(text_selection$._CupertinoTextSelectionToolbarContent, () => ({
    __proto__: dart.getMethods(text_selection$._CupertinoTextSelectionToolbarContent.__proto__),
    createState: dart.fnType(text_selection$._CupertinoTextSelectionToolbarContentState, [])
  }));
  dart.setLibraryUri(text_selection$._CupertinoTextSelectionToolbarContent, L1);
  dart.setFieldSignature(text_selection$._CupertinoTextSelectionToolbarContent, () => ({
    __proto__: dart.getFields(text_selection$._CupertinoTextSelectionToolbarContent.__proto__),
    children: dart.finalFieldType(core.List$(framework.Widget)),
    isArrowPointingDown: dart.finalFieldType(core.bool)
  }));
  var ___CupertinoTextSelectionToolbarContentState__controller = dart.privateName(text_selection$, "_#_CupertinoTextSelectionToolbarContentState#_controller");
  var ___CupertinoTextSelectionToolbarContentState__controller_isSet = dart.privateName(text_selection$, "_#_CupertinoTextSelectionToolbarContentState#_controller#isSet");
  var _page = dart.privateName(text_selection$, "_page");
  var _nextPage = dart.privateName(text_selection$, "_nextPage");
  var _controller = dart.privateName(text_selection$, "_controller");
  var _statusListener = dart.privateName(text_selection$, "_statusListener");
  var _handleNextPage = dart.privateName(text_selection$, "_handleNextPage");
  var _handlePreviousPage = dart.privateName(text_selection$, "_handlePreviousPage");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C69;
  var _name$ = dart.privateName(box_border, "_name");
  var C71;
  var BoxDecoration_shape = dart.privateName(box_decoration, "BoxDecoration.shape");
  var BoxDecoration_backgroundBlendMode = dart.privateName(box_decoration, "BoxDecoration.backgroundBlendMode");
  var BoxDecoration_gradient = dart.privateName(box_decoration, "BoxDecoration.gradient");
  var BoxDecoration_boxShadow = dart.privateName(box_decoration, "BoxDecoration.boxShadow");
  var BoxDecoration_borderRadius = dart.privateName(box_decoration, "BoxDecoration.borderRadius");
  var BoxDecoration_border = dart.privateName(box_decoration, "BoxDecoration.border");
  var BoxDecoration_image = dart.privateName(box_decoration, "BoxDecoration.image");
  var C72;
  var BoxDecoration_color = dart.privateName(box_decoration, "BoxDecoration.color");
  var C70;
  var C76;
  var C77;
  var C75;
  var C74;
  var Text_textHeightBehavior = dart.privateName(text$, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text$, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text$, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text$, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text$, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text$, "Text.overflow");
  var Text_softWrap = dart.privateName(text$, "Text.softWrap");
  var Text_locale = dart.privateName(text$, "Text.locale");
  var Text_textDirection = dart.privateName(text$, "Text.textDirection");
  var Text_textAlign = dart.privateName(text$, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text$, "Text.strutStyle");
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
  var C79;
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var C80;
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var C78;
  var Text_style = dart.privateName(text$, "Text.style");
  var Text_textSpan = dart.privateName(text$, "Text.textSpan");
  var Text_data = dart.privateName(text$, "Text.data");
  var C73;
  var C83;
  var C84;
  var C85;
  var C86;
  var C87;
  var C88;
  var C89;
  var C82;
  var C81;
  var C93;
  var C94;
  var C92;
  var C91;
  var C90;
  var C97;
  var C98;
  var C99;
  var C100;
  var C101;
  var C102;
  var C103;
  var C96;
  var C95;
  var C107;
  var C108;
  var C106;
  var C105;
  var C111;
  var CupertinoDynamicColor_darkHighContrastElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.darkHighContrastElevatedColor");
  var C112;
  var CupertinoDynamicColor_highContrastElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.highContrastElevatedColor");
  var CupertinoDynamicColor_darkElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.darkElevatedColor");
  var CupertinoDynamicColor_elevatedColor = dart.privateName(colors, "CupertinoDynamicColor.elevatedColor");
  var CupertinoDynamicColor_darkHighContrastColor = dart.privateName(colors, "CupertinoDynamicColor.darkHighContrastColor");
  var CupertinoDynamicColor_highContrastColor = dart.privateName(colors, "CupertinoDynamicColor.highContrastColor");
  var CupertinoDynamicColor_darkColor = dart.privateName(colors, "CupertinoDynamicColor.darkColor");
  var CupertinoDynamicColor_color = dart.privateName(colors, "CupertinoDynamicColor.color");
  var CupertinoDynamicColor__debugResolveContext = dart.privateName(colors, "CupertinoDynamicColor._debugResolveContext");
  var CupertinoDynamicColor__debugLabel = dart.privateName(colors, "CupertinoDynamicColor._debugLabel");
  var CupertinoDynamicColor__effectiveColor = dart.privateName(colors, "CupertinoDynamicColor._effectiveColor");
  var C110;
  var C109;
  var C104;
  var C115;
  var C116;
  var C117;
  var C118;
  var C119;
  var C120;
  var C121;
  var C122;
  var C114;
  var C113;
  var C125;
  var C126;
  var C127;
  var C128;
  var C129;
  var C130;
  var C124;
  var C123;
  var C133;
  var C134;
  var C132;
  var C131;
  var C137;
  var C138;
  var C136;
  var C135;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(text_selection$._CupertinoTextSelectionToolbarContent) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(text_selection$._CupertinoTextSelectionToolbarContent)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(text_selection$._CupertinoTextSelectionToolbarContent));
  text_selection$._CupertinoTextSelectionToolbarContentState = class _CupertinoTextSelectionToolbarContentState extends State_TickerProviderStateMixin$36 {
    get [_controller]() {
      let t1;
      return dart.test(this[___CupertinoTextSelectionToolbarContentState__controller_isSet]) ? (t1 = this[___CupertinoTextSelectionToolbarContentState__controller], t1) : dart.throw(new _internal.LateError.fieldNI("_controller"));
    }
    set [_controller](t1) {
      if (t1 == null) dart.nullFailed(L0, 593, 28, "null");
      this[___CupertinoTextSelectionToolbarContentState__controller_isSet] = true;
      this[___CupertinoTextSelectionToolbarContentState__controller] = t1;
    }
    [_handleNextPage]() {
      this[_controller].reverse();
      this[_controller].addStatusListener(dart.bind(this, _statusListener));
      this[_nextPage] = dart.notNull(this[_page]) + 1;
    }
    [_handlePreviousPage]() {
      this[_controller].reverse();
      this[_controller].addStatusListener(dart.bind(this, _statusListener));
      this[_nextPage] = dart.notNull(this[_page]) - 1;
    }
    [_statusListener](status) {
      if (status == null) dart.nullFailed(L0, 609, 40, "status");
      if (!dart.equals(status, animation.AnimationStatus.dismissed)) {
        return;
      }
      this.setState(dart.fn(() => {
        this[_page] = dart.nullCheck(this[_nextPage]);
        this[_nextPage] = null;
      }, VoidTovoid()));
      this[_controller].forward();
      this[_controller].removeStatusListener(dart.bind(this, _statusListener));
    }
    initState() {
      super.initState();
      this[_controller] = new animation_controller.AnimationController.new({value: 1.0, vsync: this, duration: C69 || CT.C69});
    }
    didUpdateWidget(oldWidget) {
      text_selection$._CupertinoTextSelectionToolbarContent.as(oldWidget);
      if (oldWidget == null) dart.nullFailed(L0, 634, 62, "oldWidget");
      if (!dart.equals(this.widget.children, oldWidget.children)) {
        this[_page] = 0;
        this[_nextPage] = null;
        this[_controller].forward();
        this[_controller].removeStatusListener(dart.bind(this, _statusListener));
      }
      super.didUpdateWidget(oldWidget);
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 652, 29, "context");
      let arrowPadding = dart.test(this.widget.isArrowPointingDown) ? new edge_insets.EdgeInsets.only({bottom: text_selection$._kToolbarArrowSize.height}) : new edge_insets.EdgeInsets.only({top: text_selection$._kToolbarArrowSize.height});
      return new container.DecoratedBox.new({decoration: C70 || CT.C70, child: new transitions.FadeTransition.new({opacity: this[_controller], child: new text_selection$._CupertinoTextSelectionToolbarItems.new({page: this[_page], backButton: new button.CupertinoButton.new({borderRadius: null, color: text_selection$._kToolbarBackgroundColor, minSize: 43, onPressed: dart.bind(this, _handlePreviousPage), padding: arrowPadding, pressedOpacity: 0.7, child: C73 || CT.C73, $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), dividerWidth: 1.0 / dart.notNull(media_query.MediaQuery.of(context).devicePixelRatio), nextButton: new button.CupertinoButton.new({borderRadius: null, color: text_selection$._kToolbarBackgroundColor, minSize: 43, onPressed: dart.bind(this, _handleNextPage), padding: arrowPadding, pressedOpacity: 0.7, child: C90 || CT.C90, $creationLocationd_0dea112b090073317d4: C95 || CT.C95}), nextButtonDisabled: new button.CupertinoButton.new({borderRadius: null, color: text_selection$._kToolbarBackgroundColor, disabledColor: text_selection$._kToolbarBackgroundColor, minSize: 43, onPressed: null, padding: arrowPadding, pressedOpacity: 1.0, child: C104 || CT.C104, $creationLocationd_0dea112b090073317d4: C113 || CT.C113}), children: this.widget.children, $creationLocationd_0dea112b090073317d4: C123 || CT.C123}), $creationLocationd_0dea112b090073317d4: C131 || CT.C131}), $creationLocationd_0dea112b090073317d4: C135 || CT.C135});
    }
  };
  (text_selection$._CupertinoTextSelectionToolbarContentState.new = function() {
    this[___CupertinoTextSelectionToolbarContentState__controller] = null;
    this[___CupertinoTextSelectionToolbarContentState__controller_isSet] = false;
    this[_page] = 0;
    this[_nextPage] = null;
    text_selection$._CupertinoTextSelectionToolbarContentState.__proto__.new.call(this);
    ;
  }).prototype = text_selection$._CupertinoTextSelectionToolbarContentState.prototype;
  dart.addTypeTests(text_selection$._CupertinoTextSelectionToolbarContentState);
  dart.addTypeCaches(text_selection$._CupertinoTextSelectionToolbarContentState);
  dart.setMethodSignature(text_selection$._CupertinoTextSelectionToolbarContentState, () => ({
    __proto__: dart.getMethods(text_selection$._CupertinoTextSelectionToolbarContentState.__proto__),
    [_handleNextPage]: dart.fnType(dart.void, []),
    [_handlePreviousPage]: dart.fnType(dart.void, []),
    [_statusListener]: dart.fnType(dart.void, [animation.AnimationStatus]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(text_selection$._CupertinoTextSelectionToolbarContentState, () => ({
    __proto__: dart.getGetters(text_selection$._CupertinoTextSelectionToolbarContentState.__proto__),
    [_controller]: animation_controller.AnimationController
  }));
  dart.setSetterSignature(text_selection$._CupertinoTextSelectionToolbarContentState, () => ({
    __proto__: dart.getSetters(text_selection$._CupertinoTextSelectionToolbarContentState.__proto__),
    [_controller]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(text_selection$._CupertinoTextSelectionToolbarContentState, L1);
  dart.setFieldSignature(text_selection$._CupertinoTextSelectionToolbarContentState, () => ({
    __proto__: dart.getFields(text_selection$._CupertinoTextSelectionToolbarContentState.__proto__),
    [___CupertinoTextSelectionToolbarContentState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___CupertinoTextSelectionToolbarContentState__controller_isSet]: dart.fieldType(core.bool),
    [_page]: dart.fieldType(core.int),
    [_nextPage]: dart.fieldType(dart.nullable(core.int))
  }));
  text_selection$._CupertinoTextSelectionToolbarItems = class _CupertinoTextSelectionToolbarItems extends framework.RenderObjectWidget {
    createRenderObject(context) {
      if (context == null) dart.nullFailed(L0, 728, 80, "context");
      return new text_selection$._CupertinoTextSelectionToolbarItemsRenderBox.new({dividerWidth: this.dividerWidth, page: this.page});
    }
    updateRenderObject(context, renderObject) {
      let t2;
      if (context == null) dart.nullFailed(L0, 736, 40, "context");
      text_selection$._CupertinoTextSelectionToolbarItemsRenderBox.as(renderObject);
      if (renderObject == null) dart.nullFailed(L0, 736, 94, "renderObject");
      t2 = renderObject;
      (() => {
        t2.page = this.page;
        t2.dividerWidth = this.dividerWidth;
        return t2;
      })();
    }
    createElement() {
      return new text_selection$._CupertinoTextSelectionToolbarItemsElement.new(this);
    }
  };
  (text_selection$._CupertinoTextSelectionToolbarItems.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let page = opts && 'page' in opts ? opts.page : null;
    if (page == null) dart.nullFailed(L0, 705, 19, "page");
    let children = opts && 'children' in opts ? opts.children : null;
    if (children == null) dart.nullFailed(L0, 706, 19, "children");
    let backButton = opts && 'backButton' in opts ? opts.backButton : null;
    if (backButton == null) dart.nullFailed(L0, 707, 19, "backButton");
    let dividerWidth = opts && 'dividerWidth' in opts ? opts.dividerWidth : null;
    if (dividerWidth == null) dart.nullFailed(L0, 708, 19, "dividerWidth");
    let nextButton = opts && 'nextButton' in opts ? opts.nextButton : null;
    if (nextButton == null) dart.nullFailed(L0, 709, 19, "nextButton");
    let nextButtonDisabled = opts && 'nextButtonDisabled' in opts ? opts.nextButtonDisabled : null;
    if (nextButtonDisabled == null) dart.nullFailed(L0, 710, 19, "nextButtonDisabled");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.page = page;
    this.children = children;
    this.backButton = backButton;
    this.dividerWidth = dividerWidth;
    this.nextButton = nextButton;
    this.nextButtonDisabled = nextButtonDisabled;
    if (!(children != null)) dart.assertFailed(null, L0, 711, 15, "children != null");
    if (!dart.test(children[$isNotEmpty])) dart.assertFailed(null, L0, 712, 15, "children.isNotEmpty");
    if (!(backButton != null)) dart.assertFailed(null, L0, 713, 15, "backButton != null");
    if (!(dividerWidth != null)) dart.assertFailed(null, L0, 714, 15, "dividerWidth != null");
    if (!(nextButton != null)) dart.assertFailed(null, L0, 715, 15, "nextButton != null");
    if (!(nextButtonDisabled != null)) dart.assertFailed(null, L0, 716, 15, "nextButtonDisabled != null");
    if (!(page != null)) dart.assertFailed(null, L0, 717, 15, "page != null");
    text_selection$._CupertinoTextSelectionToolbarItems.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection$._CupertinoTextSelectionToolbarItems.prototype;
  dart.addTypeTests(text_selection$._CupertinoTextSelectionToolbarItems);
  dart.addTypeCaches(text_selection$._CupertinoTextSelectionToolbarItems);
  dart.setMethodSignature(text_selection$._CupertinoTextSelectionToolbarItems, () => ({
    __proto__: dart.getMethods(text_selection$._CupertinoTextSelectionToolbarItems.__proto__),
    createRenderObject: dart.fnType(text_selection$._CupertinoTextSelectionToolbarItemsRenderBox, [framework.BuildContext]),
    createElement: dart.fnType(text_selection$._CupertinoTextSelectionToolbarItemsElement, [])
  }));
  dart.setLibraryUri(text_selection$._CupertinoTextSelectionToolbarItems, L1);
  dart.setFieldSignature(text_selection$._CupertinoTextSelectionToolbarItems, () => ({
    __proto__: dart.getFields(text_selection$._CupertinoTextSelectionToolbarItems.__proto__),
    backButton: dart.finalFieldType(framework.Widget),
    children: dart.finalFieldType(core.List$(framework.Widget)),
    dividerWidth: dart.finalFieldType(core.double),
    nextButton: dart.finalFieldType(framework.Widget),
    nextButtonDisabled: dart.finalFieldType(framework.Widget),
    page: dart.finalFieldType(core.int)
  }));
  var ___CupertinoTextSelectionToolbarItemsElement__children = dart.privateName(text_selection$, "_#_CupertinoTextSelectionToolbarItemsElement#_children");
  var ___CupertinoTextSelectionToolbarItemsElement__children_isSet = dart.privateName(text_selection$, "_#_CupertinoTextSelectionToolbarItemsElement#_children#isSet");
  var _forgottenChildren = dart.privateName(text_selection$, "_forgottenChildren");
  var _children = dart.privateName(text_selection$, "_children");
  var _name$0 = dart.privateName(text_selection$, "_name");
  var C139;
  var C140;
  var C141;
  var _updateRenderObject = dart.privateName(text_selection$, "_updateRenderObject");
  var _mountChild = dart.privateName(text_selection$, "_mountChild");
  text_selection$._CupertinoTextSelectionToolbarItemsElement = class _CupertinoTextSelectionToolbarItemsElement extends framework.RenderObjectElement {
    get [_children]() {
      let t2;
      return dart.test(this[___CupertinoTextSelectionToolbarItemsElement__children_isSet]) ? (t2 = this[___CupertinoTextSelectionToolbarItemsElement__children], t2) : dart.throw(new _internal.LateError.fieldNI("_children"));
    }
    set [_children](t2) {
      if (t2 == null) dart.nullFailed(L0, 752, 22, "null");
      this[___CupertinoTextSelectionToolbarItemsElement__children_isSet] = true;
      this[___CupertinoTextSelectionToolbarItemsElement__children] = t2;
    }
    get widget() {
      return text_selection$._CupertinoTextSelectionToolbarItems.as(super.widget);
    }
    get renderObject() {
      return text_selection$._CupertinoTextSelectionToolbarItemsRenderBox.as(super.renderObject);
    }
    [_updateRenderObject](child, slot) {
      if (slot == null) dart.nullFailed(L0, 765, 86, "slot");
      switch (slot) {
        case C139 || CT.C139:
        {
          this.renderObject.backButton = child;
          break;
        }
        case C140 || CT.C140:
        {
          this.renderObject.nextButton = child;
          break;
        }
        case C141 || CT.C141:
        {
          this.renderObject.nextButtonDisabled = child;
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    insertRenderObjectChild(child, slot) {
      let t3;
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 780, 45, "child");
      if (text_selection$._CupertinoTextSelectionToolbarItemsSlot.is(slot)) {
        if (!box.RenderBox.is(child)) dart.assertFailed(null, L0, 782, 14, "child is RenderBox");
        this[_updateRenderObject](box.RenderBox.as(child), slot);
        if (!dart.test(this.renderObject.slottedChildren[$containsKey](slot))) dart.assertFailed(null, L0, 784, 14, "renderObject.slottedChildren.containsKey(slot)");
        return;
      }
      if (framework.IndexedSlot.is(slot)) {
        if (!dart.test(this.renderObject.debugValidateChild(child))) dart.assertFailed(null, L0, 788, 14, "renderObject.debugValidateChild(child)");
        this.renderObject.insert(box.RenderBox.as(child), {after: RenderBoxN().as((t3 = slot.value, t3 == null ? null : dart.dload(t3, 'renderObject')))});
        return;
      }
      if (!false) dart.assertFailed("slot must be _CupertinoTextSelectionToolbarItemsSlot or IndexedSlot", L0, 792, 12, "false");
    }
    moveRenderObjectChild(child, oldSlot, newSlot) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 797, 43, "child");
      IndexedSlotOfElement().as(oldSlot);
      if (oldSlot == null) dart.nullFailed(L0, 797, 71, "oldSlot");
      IndexedSlotOfElement().as(newSlot);
      if (newSlot == null) dart.nullFailed(L0, 797, 101, "newSlot");
      if (!dart.equals(child.parent, this.renderObject)) dart.assertFailed(null, L0, 798, 12, "child.parent == renderObject");
      this.renderObject.move(box.RenderBox.as(child), {after: RenderBoxN().as(newSlot.value.renderObject)});
    }
    static _shouldPaint(child) {
      if (child == null) dart.nullFailed(L0, 802, 36, "child");
      return text_selection.ToolbarItemsParentData.as(dart.nullCheck(dart.nullCheck(child.renderObject).parentData)).shouldPaint;
    }
    removeRenderObjectChild(child, slot) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 807, 45, "child");
      if (text_selection$._CupertinoTextSelectionToolbarItemsSlot.is(slot)) {
        if (!box.RenderBox.is(child)) dart.assertFailed(null, L0, 810, 14, "child is RenderBox");
        if (!dart.test(this.renderObject.slottedChildren[$containsKey](slot))) dart.assertFailed(null, L0, 811, 14, "renderObject.slottedChildren.containsKey(slot)");
        this[_updateRenderObject](null, slot);
        if (!!dart.test(this.renderObject.slottedChildren[$containsKey](slot))) dart.assertFailed(null, L0, 813, 14, "!renderObject.slottedChildren.containsKey(slot)");
        return;
      }
      if (!framework.IndexedSlot.is(slot)) dart.assertFailed(null, L0, 818, 12, "slot is IndexedSlot");
      if (!dart.equals(child.parent, this.renderObject)) dart.assertFailed(null, L0, 819, 12, "child.parent == renderObject");
      this.renderObject.remove(box.RenderBox.as(child));
    }
    visitChildren(visitor) {
      if (visitor == null) dart.nullFailed(L0, 824, 37, "visitor");
      this.slotToChild[$values][$forEach](visitor);
      for (let child of this[_children]) {
        if (!dart.test(this[_forgottenChildren].contains(child))) visitor(child);
      }
    }
    forgetChild(child) {
      if (child == null) dart.nullFailed(L0, 833, 28, "child");
      if (!(dart.test(this.slotToChild[$containsValue](child)) || dart.test(this[_children][$contains](child)))) dart.assertFailed(null, L0, 834, 12, "slotToChild.containsValue(child) || _children.contains(child)");
      if (!!dart.test(this[_forgottenChildren].contains(child))) dart.assertFailed(null, L0, 835, 12, "!_forgottenChildren.contains(child)");
      if (dart.test(this.slotToChild[$containsKey](child.slot))) {
        let slot = text_selection$._CupertinoTextSelectionToolbarItemsSlot.as(child.slot);
        this.slotToChild[$remove](slot);
      } else {
        this[_forgottenChildren].add(child);
      }
      super.forgetChild(child);
    }
    [_mountChild](widget, slot) {
      if (widget == null) dart.nullFailed(L0, 847, 27, "widget");
      if (slot == null) dart.nullFailed(L0, 847, 75, "slot");
      let oldChild = this.slotToChild[$_get](slot);
      let newChild = this.updateChild(oldChild, widget, slot);
      if (oldChild != null) {
        this.slotToChild[$remove](slot);
      }
      if (newChild != null) {
        this.slotToChild[$_set](slot, newChild);
      }
    }
    mount(parent, newSlot) {
      super.mount(parent, newSlot);
      this[_mountChild](this.widget.backButton, text_selection$._CupertinoTextSelectionToolbarItemsSlot.backButton);
      this[_mountChild](this.widget.nextButton, text_selection$._CupertinoTextSelectionToolbarItemsSlot.nextButton);
      this[_mountChild](this.widget.nextButtonDisabled, text_selection$._CupertinoTextSelectionToolbarItemsSlot.nextButtonDisabled);
      this[_children] = ListOfElement().filled(this.widget.children[$length], text_selection$._NullElement.instance);
      let previousChild = null;
      for (let i = 0; i < dart.notNull(this[_children][$length]); i = i + 1) {
        let newChild = this.inflateWidget(this.widget.children[$_get](i), new (IndexedSlotOfElementN()).new(i, previousChild));
        this[_children][$_set](i, newChild);
        previousChild = newChild;
      }
    }
    debugVisitOnstageChildren(visitor) {
      if (visitor == null) dart.nullFailed(L0, 877, 49, "visitor");
      for (let child of this.slotToChild[$values]) {
        if (dart.test(text_selection$._CupertinoTextSelectionToolbarItemsElement._shouldPaint(child)) && !dart.test(this[_forgottenChildren].contains(child))) {
          visitor(child);
        }
      }
      this[_children][$where](dart.fn(child => {
        if (child == null) dart.nullFailed(L0, 886, 25, "child");
        return !dart.test(this[_forgottenChildren].contains(child)) && dart.test(text_selection$._CupertinoTextSelectionToolbarItemsElement._shouldPaint(child));
      }, ElementTobool()))[$forEach](visitor);
    }
    update(newWidget) {
      text_selection$._CupertinoTextSelectionToolbarItems.as(newWidget);
      if (newWidget == null) dart.nullFailed(L0, 891, 51, "newWidget");
      super.update(newWidget);
      if (!dart.equals(this.widget, newWidget)) dart.assertFailed(null, L0, 893, 12, "widget == newWidget");
      this[_mountChild](this.widget.backButton, text_selection$._CupertinoTextSelectionToolbarItemsSlot.backButton);
      this[_mountChild](this.widget.nextButton, text_selection$._CupertinoTextSelectionToolbarItemsSlot.nextButton);
      this[_mountChild](this.widget.nextButtonDisabled, text_selection$._CupertinoTextSelectionToolbarItemsSlot.nextButtonDisabled);
      this[_children] = this.updateChildren(this[_children], this.widget.children, {forgottenChildren: this[_forgottenChildren]});
      this[_forgottenChildren].clear();
    }
  };
  (text_selection$._CupertinoTextSelectionToolbarItemsElement.new = function(widget) {
    if (widget == null) dart.nullFailed(L0, 749, 41, "widget");
    this[___CupertinoTextSelectionToolbarItemsElement__children] = null;
    this[___CupertinoTextSelectionToolbarItemsElement__children_isSet] = false;
    this.slotToChild = new (LinkedMapOf_CupertinoTextSelectionToolbarItemsSlot$Element()).new();
    this[_forgottenChildren] = new (_HashSetOfElement()).new();
    text_selection$._CupertinoTextSelectionToolbarItemsElement.__proto__.new.call(this, widget);
    ;
  }).prototype = text_selection$._CupertinoTextSelectionToolbarItemsElement.prototype;
  dart.addTypeTests(text_selection$._CupertinoTextSelectionToolbarItemsElement);
  dart.addTypeCaches(text_selection$._CupertinoTextSelectionToolbarItemsElement);
  dart.setMethodSignature(text_selection$._CupertinoTextSelectionToolbarItemsElement, () => ({
    __proto__: dart.getMethods(text_selection$._CupertinoTextSelectionToolbarItemsElement.__proto__),
    [_updateRenderObject]: dart.fnType(dart.void, [dart.nullable(box.RenderBox), text_selection$._CupertinoTextSelectionToolbarItemsSlot]),
    [_mountChild]: dart.fnType(dart.void, [framework.Widget, text_selection$._CupertinoTextSelectionToolbarItemsSlot])
  }));
  dart.setGetterSignature(text_selection$._CupertinoTextSelectionToolbarItemsElement, () => ({
    __proto__: dart.getGetters(text_selection$._CupertinoTextSelectionToolbarItemsElement.__proto__),
    [_children]: core.List$(framework.Element),
    widget: text_selection$._CupertinoTextSelectionToolbarItems,
    renderObject: text_selection$._CupertinoTextSelectionToolbarItemsRenderBox
  }));
  dart.setSetterSignature(text_selection$._CupertinoTextSelectionToolbarItemsElement, () => ({
    __proto__: dart.getSetters(text_selection$._CupertinoTextSelectionToolbarItemsElement.__proto__),
    [_children]: core.List$(framework.Element)
  }));
  dart.setLibraryUri(text_selection$._CupertinoTextSelectionToolbarItemsElement, L1);
  dart.setFieldSignature(text_selection$._CupertinoTextSelectionToolbarItemsElement, () => ({
    __proto__: dart.getFields(text_selection$._CupertinoTextSelectionToolbarItemsElement.__proto__),
    [___CupertinoTextSelectionToolbarItemsElement__children]: dart.fieldType(dart.nullable(core.List$(framework.Element))),
    [___CupertinoTextSelectionToolbarItemsElement__children_isSet]: dart.fieldType(core.bool),
    slotToChild: dart.finalFieldType(core.Map$(text_selection$._CupertinoTextSelectionToolbarItemsSlot, framework.Element)),
    [_forgottenChildren]: dart.finalFieldType(core.Set$(framework.Element))
  }));
  var _backButton = dart.privateName(text_selection$, "_backButton");
  var _nextButton = dart.privateName(text_selection$, "_nextButton");
  var _nextButtonDisabled = dart.privateName(text_selection$, "_nextButtonDisabled");
  var _dividerWidth = dart.privateName(text_selection$, "_dividerWidth");
  var _updateChild = dart.privateName(text_selection$, "_updateChild");
  var _isSlottedChild = dart.privateName(text_selection$, "_isSlottedChild");
  const RenderBox_ContainerRenderObjectMixin$36 = class RenderBox_ContainerRenderObjectMixin extends box.RenderBox {};
  (RenderBox_ContainerRenderObjectMixin$36.new = function() {
    object.ContainerRenderObjectMixin$(box.RenderBox, text_selection.ToolbarItemsParentData)[dart.mixinNew].call(this);
    RenderBox_ContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_ContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderBox_ContainerRenderObjectMixin$36, object.ContainerRenderObjectMixin$(box.RenderBox, text_selection.ToolbarItemsParentData));
  const RenderBox_RenderBoxContainerDefaultsMixin$36 = class RenderBox_RenderBoxContainerDefaultsMixin extends RenderBox_ContainerRenderObjectMixin$36 {};
  (RenderBox_RenderBoxContainerDefaultsMixin$36.new = function() {
    RenderBox_RenderBoxContainerDefaultsMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderBoxContainerDefaultsMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderBoxContainerDefaultsMixin$36, box.RenderBoxContainerDefaultsMixin$(box.RenderBox, text_selection.ToolbarItemsParentData));
  text_selection$._CupertinoTextSelectionToolbarItemsRenderBox = class _CupertinoTextSelectionToolbarItemsRenderBox extends RenderBox_RenderBoxContainerDefaultsMixin$36 {
    [_updateChild](oldChild, newChild, slot) {
      if (slot == null) dart.nullFailed(L0, 919, 109, "slot");
      if (oldChild != null) {
        this.dropChild(oldChild);
        this.slottedChildren[$remove](slot);
      }
      if (newChild != null) {
        this.slottedChildren[$_set](slot, newChild);
        this.adoptChild(newChild);
      }
      return newChild;
    }
    [_isSlottedChild](child) {
      if (child == null) dart.nullFailed(L0, 931, 34, "child");
      return dart.equals(child, this[_backButton]) || dart.equals(child, this[_nextButton]) || dart.equals(child, this[_nextButtonDisabled]);
    }
    get page() {
      return this[_page];
    }
    set page(value) {
      if (value == null) dart.nullFailed(L0, 937, 16, "value");
      if (value == this[_page]) {
        return;
      }
      this[_page] = value;
      this.markNeedsLayout();
    }
    get dividerWidth() {
      return this[_dividerWidth];
    }
    set dividerWidth(value) {
      if (value == null) dart.nullFailed(L0, 947, 27, "value");
      if (value == this[_dividerWidth]) {
        return;
      }
      this[_dividerWidth] = value;
      this.markNeedsLayout();
    }
    get backButton() {
      return this[_backButton];
    }
    set backButton(value) {
      this[_backButton] = this[_updateChild](this[_backButton], value, text_selection$._CupertinoTextSelectionToolbarItemsSlot.backButton);
    }
    get nextButton() {
      return this[_nextButton];
    }
    set nextButton(value) {
      this[_nextButton] = this[_updateChild](this[_nextButton], value, text_selection$._CupertinoTextSelectionToolbarItemsSlot.nextButton);
    }
    get nextButtonDisabled() {
      return this[_nextButtonDisabled];
    }
    set nextButtonDisabled(value) {
      this[_nextButtonDisabled] = this[_updateChild](this[_nextButtonDisabled], value, text_selection$._CupertinoTextSelectionToolbarItemsSlot.nextButtonDisabled);
    }
    performLayout() {
      if (this.firstChild == null) {
        this.size = this.constraints.smallest;
        return;
      }
      dart.nullCheck(this[_backButton]).layout(this.constraints.loosen(), {parentUsesSize: true});
      dart.nullCheck(this[_nextButton]).layout(this.constraints.loosen(), {parentUsesSize: true});
      dart.nullCheck(this[_nextButtonDisabled]).layout(this.constraints.loosen(), {parentUsesSize: true});
      let subsequentPageButtonsWidth = dart.notNull(dart.nullCheck(this[_backButton]).size.width) + dart.notNull(dart.nullCheck(this[_nextButton]).size.width);
      let currentButtonPosition = 0.0;
      let toolbarWidth = null;
      let toolbarWidth$35isSet = false;
      function toolbarWidth$35get() {
        return toolbarWidth$35isSet ? toolbarWidth : dart.throw(new _internal.LateError.localNI("toolbarWidth"));
      }
      dart.fn(toolbarWidth$35get, VoidTodouble());
      function toolbarWidth$35set(t6) {
        if (t6 == null) dart.nullFailed(L0, 988, 17, "null");
        toolbarWidth$35isSet = true;
        return toolbarWidth = t6;
      }
      dart.fn(toolbarWidth$35set, doubleTodynamic());
      let firstPageWidth = null;
      let firstPageWidth$35isSet = false;
      function firstPageWidth$35get() {
        return firstPageWidth$35isSet ? firstPageWidth : dart.throw(new _internal.LateError.localNI("firstPageWidth"));
      }
      dart.fn(firstPageWidth$35get, VoidTodouble());
      function firstPageWidth$35set(t11) {
        if (t11 == null) dart.nullFailed(L0, 989, 17, "null");
        firstPageWidth$35isSet = true;
        return firstPageWidth = t11;
      }
      dart.fn(firstPageWidth$35set, doubleTodynamic());
      let currentPage = 0;
      let i = -1;
      this.visitChildren(dart.fn(renderObjectChild => {
        if (renderObjectChild == null) dart.nullFailed(L0, 992, 33, "renderObjectChild");
        i = i + 1;
        let child = box.RenderBox.as(renderObjectChild);
        let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(child.parentData));
        childParentData.shouldPaint = false;
        if (dart.test(this[_isSlottedChild](child)) || currentPage > dart.notNull(this[_page])) {
          return;
        }
        let paginationButtonsWidth = 0.0;
        if (currentPage === 0) {
          paginationButtonsWidth = i === dart.notNull(this.childCount) - 1 ? 0.0 : dart.nullCheck(this[_nextButton]).size.width;
        } else {
          paginationButtonsWidth = subsequentPageButtonsWidth;
        }
        child.layout(new box.BoxConstraints.loose(new ui.Size.new(dart.notNull(currentPage === 0 ? this.constraints.maxWidth : firstPageWidth$35get()) - dart.notNull(paginationButtonsWidth), this.constraints.maxHeight)), {parentUsesSize: true});
        let currentWidth = currentButtonPosition + dart.notNull(paginationButtonsWidth) + dart.notNull(child.size.width);
        if (currentWidth > dart.notNull(this.constraints.maxWidth)) {
          currentPage = currentPage + 1;
          currentButtonPosition = dart.notNull(dart.nullCheck(this[_backButton]).size.width) + dart.notNull(this.dividerWidth);
          paginationButtonsWidth = dart.notNull(dart.nullCheck(this[_backButton]).size.width) + dart.notNull(dart.nullCheck(this[_nextButton]).size.width);
          child.layout(new box.BoxConstraints.loose(new ui.Size.new(dart.notNull(firstPageWidth$35get()) - dart.notNull(paginationButtonsWidth), this.constraints.maxHeight)), {parentUsesSize: true});
        }
        childParentData.offset = new ui.Offset.new(currentButtonPosition, 0.0);
        currentButtonPosition = currentButtonPosition + (dart.notNull(child.size.width) + dart.notNull(this.dividerWidth));
        childParentData.shouldPaint = currentPage === this.page;
        if (currentPage === 0) {
          firstPageWidth$35set(currentButtonPosition + dart.notNull(dart.nullCheck(this[_nextButton]).size.width));
        }
        if (currentPage === this.page) {
          toolbarWidth$35set(currentButtonPosition);
        }
      }, RenderObjectTovoid()));
      if (!(dart.notNull(this.page) <= currentPage)) dart.assertFailed(null, L0, 1051, 12, "page <= currentPage");
      if (currentPage > 0) {
        let nextButtonParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(dart.nullCheck(this[_nextButton]).parentData));
        let nextButtonDisabledParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(dart.nullCheck(this[_nextButtonDisabled]).parentData));
        let backButtonParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(dart.nullCheck(this[_backButton]).parentData));
        if (this.page === currentPage) {
          nextButtonDisabledParentData.offset = new ui.Offset.new(toolbarWidth$35get(), 0.0);
          nextButtonDisabledParentData.shouldPaint = true;
          toolbarWidth$35set(dart.notNull(toolbarWidth$35get()) + dart.notNull(dart.nullCheck(this.nextButtonDisabled).size.width));
        } else {
          nextButtonParentData.offset = new ui.Offset.new(toolbarWidth$35get(), 0.0);
          nextButtonParentData.shouldPaint = true;
          toolbarWidth$35set(dart.notNull(toolbarWidth$35get()) + dart.notNull(dart.nullCheck(this.nextButton).size.width));
        }
        if (dart.notNull(this.page) > 0) {
          backButtonParentData.offset = ui.Offset.zero;
          backButtonParentData.shouldPaint = true;
        }
      } else {
        toolbarWidth$35set(dart.notNull(toolbarWidth$35get()) - dart.notNull(this.dividerWidth));
      }
      this.size = this.constraints.constrain(new ui.Size.new(toolbarWidth$35get(), 43));
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 1088, 30, "context");
      if (offset == null) dart.nullFailed(L0, 1088, 46, "offset");
      this.visitChildren(dart.fn(renderObjectChild => {
        if (renderObjectChild == null) dart.nullFailed(L0, 1089, 33, "renderObjectChild");
        let child = box.RenderBox.as(renderObjectChild);
        let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(child.parentData));
        if (dart.test(childParentData.shouldPaint)) {
          let childOffset = childParentData.offset['+'](offset);
          context.paintChild(child, childOffset);
        }
      }, RenderObjectTovoid()));
    }
    setupParentData(child) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L0, 1101, 34, "child");
      if (!text_selection.ToolbarItemsParentData.is(child.parentData)) {
        child.parentData = new text_selection.ToolbarItemsParentData.new();
      }
    }
    static hitTestChild(child, result, opts) {
      if (result == null) dart.nullFailed(L0, 1108, 63, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 1108, 89, "position");
      if (child == null) {
        return false;
      }
      let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(child.parentData));
      return result.addWithPaintOffset({offset: childParentData.offset, position: position, hitTest: dart.fn((result, transformed) => {
          if (result == null) dart.nullFailed(L0, 1117, 34, "result");
          if (transformed == null) dart.nullFailed(L0, 1117, 49, "transformed");
          if (!dart.equals(transformed, position['-'](childParentData.offset))) dart.assertFailed(null, L0, 1118, 16, "transformed == position - childParentData.offset");
          return child.hitTest(result, {position: transformed});
        }, BoxHitTestResultAndOffsetTobool())});
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L0, 1125, 41, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 1125, 67, "position");
      let child = this.lastChild;
      while (child != null) {
        let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(child.parentData));
        if (!dart.test(childParentData.shouldPaint)) {
          child = childParentData.previousSibling;
          continue;
        }
        if (dart.test(text_selection$._CupertinoTextSelectionToolbarItemsRenderBox.hitTestChild(child, result, {position: position}))) {
          return true;
        }
        child = childParentData.previousSibling;
      }
      if (dart.test(text_selection$._CupertinoTextSelectionToolbarItemsRenderBox.hitTestChild(this.backButton, result, {position: position}))) {
        return true;
      }
      if (dart.test(text_selection$._CupertinoTextSelectionToolbarItemsRenderBox.hitTestChild(this.nextButton, result, {position: position}))) {
        return true;
      }
      if (dart.test(text_selection$._CupertinoTextSelectionToolbarItemsRenderBox.hitTestChild(this.nextButtonDisabled, result, {position: position}))) {
        return true;
      }
      return false;
    }
    attach(owner) {
      object.PipelineOwner.as(owner);
      if (owner == null) dart.nullFailed(L0, 1159, 29, "owner");
      super.attach(owner);
      for (let child of this.slottedChildren[$values]) {
        child.attach(owner);
      }
    }
    detach() {
      super.detach();
      for (let child of this.slottedChildren[$values]) {
        child.detach();
      }
    }
    redepthChildren() {
      this.visitChildren(dart.fn(renderObjectChild => {
        if (renderObjectChild == null) dart.nullFailed(L0, 1182, 33, "renderObjectChild");
        let child = box.RenderBox.as(renderObjectChild);
        this.redepthChild(child);
      }, RenderObjectTovoid()));
    }
    visitChildren(visitor) {
      if (visitor == null) dart.nullFailed(L0, 1189, 42, "visitor");
      if (this[_backButton] != null) {
        visitor(dart.nullCheck(this[_backButton]));
      }
      if (this[_nextButton] != null) {
        visitor(dart.nullCheck(this[_nextButton]));
      }
      if (this[_nextButtonDisabled] != null) {
        visitor(dart.nullCheck(this[_nextButtonDisabled]));
      }
      super.visitChildren(visitor);
    }
    visitChildrenForSemantics(visitor) {
      if (visitor == null) dart.nullFailed(L0, 1206, 54, "visitor");
      this.visitChildren(dart.fn(renderObjectChild => {
        if (renderObjectChild == null) dart.nullFailed(L0, 1207, 33, "renderObjectChild");
        let child = box.RenderBox.as(renderObjectChild);
        let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(child.parentData));
        if (dart.test(childParentData.shouldPaint)) {
          visitor(renderObjectChild);
        }
      }, RenderObjectTovoid()));
    }
    debugDescribeChildren() {
      let value = JSArrayOfDiagnosticsNode().of([]);
      this.visitChildren(dart.fn(renderObjectChild => {
        if (renderObjectChild == null) dart.nullFailed(L0, 1219, 33, "renderObjectChild");
        let child = box.RenderBox.as(renderObjectChild);
        if (dart.equals(child, this.backButton)) {
          value[$add](child.toDiagnosticsNode({name: "back button"}));
        } else if (dart.equals(child, this.nextButton)) {
          value[$add](child.toDiagnosticsNode({name: "next button"}));
        } else if (dart.equals(child, this.nextButtonDisabled)) {
          value[$add](child.toDiagnosticsNode({name: "next button disabled"}));
        } else {
          value[$add](child.toDiagnosticsNode({name: "menu item"}));
        }
      }, RenderObjectTovoid()));
      return value;
    }
  };
  (text_selection$._CupertinoTextSelectionToolbarItemsRenderBox.new = function(opts) {
    let dividerWidth = opts && 'dividerWidth' in opts ? opts.dividerWidth : null;
    if (dividerWidth == null) dart.nullFailed(L0, 909, 21, "dividerWidth");
    let page = opts && 'page' in opts ? opts.page : null;
    if (page == null) dart.nullFailed(L0, 910, 18, "page");
    this.slottedChildren = new (LinkedMapOf_CupertinoTextSelectionToolbarItemsSlot$RenderBox()).new();
    this[_backButton] = null;
    this[_nextButton] = null;
    this[_nextButtonDisabled] = null;
    if (!(dividerWidth != null)) dart.assertFailed(null, L0, 911, 15, "dividerWidth != null");
    if (!(page != null)) dart.assertFailed(null, L0, 912, 15, "page != null");
    this[_dividerWidth] = dividerWidth;
    this[_page] = page;
    text_selection$._CupertinoTextSelectionToolbarItemsRenderBox.__proto__.new.call(this);
    ;
  }).prototype = text_selection$._CupertinoTextSelectionToolbarItemsRenderBox.prototype;
  dart.addTypeTests(text_selection$._CupertinoTextSelectionToolbarItemsRenderBox);
  dart.addTypeCaches(text_selection$._CupertinoTextSelectionToolbarItemsRenderBox);
  dart.setMethodSignature(text_selection$._CupertinoTextSelectionToolbarItemsRenderBox, () => ({
    __proto__: dart.getMethods(text_selection$._CupertinoTextSelectionToolbarItemsRenderBox.__proto__),
    [_updateChild]: dart.fnType(dart.nullable(box.RenderBox), [dart.nullable(box.RenderBox), dart.nullable(box.RenderBox), text_selection$._CupertinoTextSelectionToolbarItemsSlot]),
    [_isSlottedChild]: dart.fnType(core.bool, [box.RenderBox])
  }));
  dart.setGetterSignature(text_selection$._CupertinoTextSelectionToolbarItemsRenderBox, () => ({
    __proto__: dart.getGetters(text_selection$._CupertinoTextSelectionToolbarItemsRenderBox.__proto__),
    page: core.int,
    dividerWidth: core.double,
    backButton: dart.nullable(box.RenderBox),
    nextButton: dart.nullable(box.RenderBox),
    nextButtonDisabled: dart.nullable(box.RenderBox)
  }));
  dart.setSetterSignature(text_selection$._CupertinoTextSelectionToolbarItemsRenderBox, () => ({
    __proto__: dart.getSetters(text_selection$._CupertinoTextSelectionToolbarItemsRenderBox.__proto__),
    page: core.int,
    dividerWidth: core.double,
    backButton: dart.nullable(box.RenderBox),
    nextButton: dart.nullable(box.RenderBox),
    nextButtonDisabled: dart.nullable(box.RenderBox)
  }));
  dart.setLibraryUri(text_selection$._CupertinoTextSelectionToolbarItemsRenderBox, L1);
  dart.setFieldSignature(text_selection$._CupertinoTextSelectionToolbarItemsRenderBox, () => ({
    __proto__: dart.getFields(text_selection$._CupertinoTextSelectionToolbarItemsRenderBox.__proto__),
    slottedChildren: dart.finalFieldType(core.Map$(text_selection$._CupertinoTextSelectionToolbarItemsSlot, box.RenderBox)),
    [_page]: dart.fieldType(core.int),
    [_dividerWidth]: dart.fieldType(core.double),
    [_backButton]: dart.fieldType(dart.nullable(box.RenderBox)),
    [_nextButton]: dart.fieldType(dart.nullable(box.RenderBox)),
    [_nextButtonDisabled]: dart.fieldType(dart.nullable(box.RenderBox))
  }));
  var C142;
  text_selection$._CupertinoTextSelectionToolbarItemsSlot = class _CupertinoTextSelectionToolbarItemsSlot extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (text_selection$._CupertinoTextSelectionToolbarItemsSlot.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 1239, 6, "index");
    if (_name == null) dart.nullFailed(L0, 1239, 6, "_name");
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = text_selection$._CupertinoTextSelectionToolbarItemsSlot.prototype;
  dart.addTypeTests(text_selection$._CupertinoTextSelectionToolbarItemsSlot);
  dart.addTypeCaches(text_selection$._CupertinoTextSelectionToolbarItemsSlot);
  dart.setLibraryUri(text_selection$._CupertinoTextSelectionToolbarItemsSlot, L1);
  dart.setFieldSignature(text_selection$._CupertinoTextSelectionToolbarItemsSlot, () => ({
    __proto__: dart.getFields(text_selection$._CupertinoTextSelectionToolbarItemsSlot.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(text_selection$._CupertinoTextSelectionToolbarItemsSlot, ['toString']);
  text_selection$._CupertinoTextSelectionToolbarItemsSlot.backButton = C139 || CT.C139;
  text_selection$._CupertinoTextSelectionToolbarItemsSlot.nextButton = C140 || CT.C140;
  text_selection$._CupertinoTextSelectionToolbarItemsSlot.nextButtonDisabled = C141 || CT.C141;
  text_selection$._CupertinoTextSelectionToolbarItemsSlot.values = C142 || CT.C142;
  var C143;
  text_selection$._NullElement = class _NullElement extends framework.Element {
    get debugDoingBuild() {
      return dart.throw(new core.UnimplementedError.new());
    }
    performRebuild() {
    }
  };
  (text_selection$._NullElement.new = function() {
    text_selection$._NullElement.__proto__.new.call(this, new text_selection$._NullWidget.new({$creationLocationd_0dea112b090073317d4: C143 || CT.C143}));
    ;
  }).prototype = text_selection$._NullElement.prototype;
  dart.addTypeTests(text_selection$._NullElement);
  dart.addTypeCaches(text_selection$._NullElement);
  dart.setMethodSignature(text_selection$._NullElement, () => ({
    __proto__: dart.getMethods(text_selection$._NullElement.__proto__),
    performRebuild: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(text_selection$._NullElement, () => ({
    __proto__: dart.getGetters(text_selection$._NullElement.__proto__),
    debugDoingBuild: core.bool
  }));
  dart.setLibraryUri(text_selection$._NullElement, L1);
  dart.defineLazy(text_selection$._NullElement, {
    /*text_selection$._NullElement.instance*/get instance() {
      return new text_selection$._NullElement.new();
    },
    set instance(_) {}
  }, false);
  text_selection$._NullWidget = class _NullWidget extends framework.Widget {
    createElement() {
      return dart.throw(new core.UnimplementedError.new());
    }
  };
  (text_selection$._NullWidget.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    text_selection$._NullWidget.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection$._NullWidget.prototype;
  dart.addTypeTests(text_selection$._NullWidget);
  dart.addTypeCaches(text_selection$._NullWidget);
  dart.setMethodSignature(text_selection$._NullWidget, () => ({
    __proto__: dart.getMethods(text_selection$._NullWidget.__proto__),
    createElement: dart.fnType(framework.Element, [])
  }));
  dart.setLibraryUri(text_selection$._NullWidget, L1);
  var C144;
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var C145;
  var C146;
  var C147;
  dart.defineLazy(text_selection$, {
    /*text_selection$._kSelectionHandleOverlap*/get _kSelectionHandleOverlap() {
      return 1.5;
    },
    /*text_selection$._kSelectionHandleRadius*/get _kSelectionHandleRadius() {
      return 6;
    },
    /*text_selection$._kToolbarScreenPadding*/get _kToolbarScreenPadding() {
      return 8;
    },
    /*text_selection$._kArrowScreenPadding*/get _kArrowScreenPadding() {
      return 26;
    },
    /*text_selection$._kToolbarContentDistance*/get _kToolbarContentDistance() {
      return 8;
    },
    /*text_selection$._kToolbarHeight*/get _kToolbarHeight() {
      return 43;
    },
    /*text_selection$._kToolbarArrowSize*/get _kToolbarArrowSize() {
      return C144 || CT.C144;
    },
    /*text_selection$._kToolbarBorderRadius*/get _kToolbarBorderRadius() {
      return C145 || CT.C145;
    },
    /*text_selection$._kToolbarBackgroundColor*/get _kToolbarBackgroundColor() {
      return C146 || CT.C146;
    },
    /*text_selection$._kToolbarDividerColor*/get _kToolbarDividerColor() {
      return C72 || CT.C72;
    },
    /*text_selection$._kToolbarButtonFontStyle*/get _kToolbarButtonFontStyle() {
      return C78 || CT.C78;
    },
    /*text_selection$._kToolbarButtonDisabledFontStyle*/get _kToolbarButtonDisabledFontStyle() {
      return C109 || CT.C109;
    },
    /*text_selection$._kToolbarButtonPadding*/get _kToolbarButtonPadding() {
      return C147 || CT.C147;
    },
    /*text_selection$.cupertinoTextSelectionControls*/get cupertinoTextSelectionControls() {
      return new text_selection$._CupertinoTextSelectionControls.new();
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/cupertino/text_selection.dart", {
    "package:flutter/src/cupertino/text_selection.dart": text_selection$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_selection.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"../../../../../../../../../../packages/flutter/src/cupertino/text_selection.dart.lib.js"}');
  // Exports:
  return {
    src__cupertino__text_selection: text_selection$
  };
}));

//# sourceMappingURL=text_selection.dart.lib.js.map
