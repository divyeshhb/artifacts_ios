define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/widgets/animated_size.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/material/icons.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/proxy_box.dart', 'packages/flutter/src/rendering/shifted_box.dart', 'packages/flutter/src/rendering/custom_paint.dart', 'packages/flutter/src/rendering/editable.dart', 'packages/flutter/src/services/text_input.dart'], (function load__packages__flutter__src__material__text_selection_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__widgets__animated_size$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__material__icons$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__proxy_box$46dart, packages__flutter__src__rendering__shifted_box$46dart, packages__flutter__src__rendering__custom_paint$46dart, packages__flutter__src__rendering__editable$46dart, packages__flutter__src__services__text_input$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const text_selection = packages__flutter__src__widgets__widget_span$46dart.src__widgets__text_selection;
  const text = packages__flutter__src__widgets__widget_span$46dart.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const ticker_provider = packages__flutter__src__widgets__widget_span$46dart.src__widgets__ticker_provider;
  const debug = packages__flutter__src__widgets__widget_span$46dart.src__widgets__debug;
  const media_query = packages__flutter__src__widgets__widget_span$46dart.src__widgets__media_query;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const text_button = packages__flutter__src__material__icon_button$46dart.src__material__text_button;
  const material_localizations = packages__flutter__src__material__icon_button$46dart.src__material__material_localizations;
  const material = packages__flutter__src__material__icon_button$46dart.src__material__material;
  const icon_button = packages__flutter__src__material__icon_button$46dart.src__material__icon_button;
  const debug$ = packages__flutter__src__material__icon_button$46dart.src__material__debug;
  const text_selection_theme = packages__flutter__src__material__icon_button$46dart.src__material__text_selection_theme;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const animated_size = packages__flutter__src__widgets__animated_size$46dart.src__widgets__animated_size;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  const shifted_box = packages__flutter__src__rendering__shifted_box$46dart.src__rendering__shifted_box;
  const custom_paint = packages__flutter__src__rendering__custom_paint$46dart.src__rendering__custom_paint;
  const editable = packages__flutter__src__rendering__editable$46dart.src__rendering__editable;
  const text_input = packages__flutter__src__services__text_input$46dart.src__services__text_input;
  var text_selection$ = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $isEmpty = dartx.isEmpty;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $where = dartx.where;
  var $forEach = dartx.forEach;
  var $isNotEmpty = dartx.isNotEmpty;
  dart._checkModuleNullSafetyMode(false);
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var JSArrayOf_ItemData = () => (JSArrayOf_ItemData = dart.constFn(_interceptors.JSArray$(text_selection$._ItemData)))();
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var BoxHitTestResultAndOffsetTobool = () => (BoxHitTestResultAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset])))();
  var ElementTobool = () => (ElementTobool = dart.constFn(dart.fnType(core.bool, [framework.Element])))();
  var RenderObjectTovoid = () => (RenderObjectTovoid = dart.constFn(dart.fnType(dart.void, [object.RenderObject])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_selection.dart";
  var L1 = "package:flutter/src/material/text_selection.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.none",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C2 || CT.C2,
        [BorderSide_width]: 0,
        [BorderSide_color]: C3 || CT.C3
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C5 || CT.C5,
        [BorderRadius_bottomLeft]: C5 || CT.C5,
        [BorderRadius_topRight]: C5 || CT.C5,
        [BorderRadius_topLeft]: C5 || CT.C5
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: rounded_rectangle_border.RoundedRectangleBorder.prototype,
        [OutlinedBorder_side]: C1 || CT.C1,
        [RoundedRectangleBorder_borderRadius]: C4 || CT.C4
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 48,
        [OffsetBase__dx]: 48
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 28,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], _LocationL());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 103,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 7,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 7,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], _LocationL());
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 90,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 29,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 41,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19], _LocationL());
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 183,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C16 || CT.C16,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 0,
        [SizedBox_width]: 0
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 29,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 41,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], _LocationL());
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 201,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C21 || CT.C21,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 0,
        [SizedBox_width]: 0
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 140000
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 7,
        [Radius_x]: 7
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C27 || CT.C27,
        [BorderRadius_bottomLeft]: C27 || CT.C27,
        [BorderRadius_topRight]: C27 || CT.C27,
        [BorderRadius_topLeft]: C27 || CT.C27
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 44,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30], _LocationL());
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 231,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 19,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34, C35 || CT.C35], _LocationL());
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 227,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "type",
        [_Location_column]: 17,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 227,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39], _LocationL());
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 225,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isAbove",
        [_Location_column]: 13,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflowOpen",
        [_Location_column]: 13,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43, C44 || CT.C44], _LocationL());
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 219,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 11,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipBehavior",
        [_Location_column]: 11,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "type",
        [_Location_column]: 11,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48, C49 || CT.C49, C50 || CT.C50, C51 || CT.C51], _LocationL());
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 212,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "vsync",
        [_Location_column]: 9,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 9,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55, C56 || CT.C56], _LocationL());
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 207,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflowOpen",
        [_Location_column]: 7,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60, C61 || CT.C61], _LocationL());
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 204,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C62() {
      return C62 = dart.fn(text_selection$._TextSelectionToolbarItemsElement._shouldPaint, ElementTobool());
    },
    get C63() {
      return C63 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 22,
        [OffsetBase__dx]: 22
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipboardStatus",
        [_Location_column]: 13,
        [_Location_line]: 785,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "handleCut",
        [_Location_column]: 13,
        [_Location_line]: 786,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "handleCopy",
        [_Location_column]: 13,
        [_Location_line]: 787,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "handlePaste",
        [_Location_column]: 13,
        [_Location_line]: 788,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "handleSelectAll",
        [_Location_column]: 13,
        [_Location_line]: 789,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isAbove",
        [_Location_column]: 13,
        [_Location_line]: 790,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71, C72 || CT.C72], _LocationL());
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 784,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 11,
        [_Location_line]: 779,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 784,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76], _LocationL());
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 778,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 777,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79], _LocationL());
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 776,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 9,
        [_Location_line]: 806,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82], _LocationL());
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 805,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 803,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 804,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 805,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86, C87 || CT.C87], _LocationL());
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 802,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 11,
        [_Location_line]: 818,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 819,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90, C91 || CT.C91], _LocationL());
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 817,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: text_selection.TextSelectionHandleType.prototype,
        [_name$]: "TextSelectionHandleType.left",
        index: 0
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: text_selection.TextSelectionHandleType.prototype,
        [_name$]: "TextSelectionHandleType.right",
        index: 1
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 11,
        [_Location_line]: 825,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 826,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96, C97 || CT.C97], _LocationL());
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 824,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: text_selection.TextSelectionHandleType.prototype,
        [_name$]: "TextSelectionHandleType.collapsed",
        index: 2
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 22
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: -4,
        [OffsetBase__dx]: 11
      });
    }
  }, false);
  var clipboardStatus$ = dart.privateName(text_selection$, "_TextSelectionToolbar.clipboardStatus");
  var handleCut$ = dart.privateName(text_selection$, "_TextSelectionToolbar.handleCut");
  var handleCopy$ = dart.privateName(text_selection$, "_TextSelectionToolbar.handleCopy");
  var handlePaste$ = dart.privateName(text_selection$, "_TextSelectionToolbar.handlePaste");
  var handleSelectAll$ = dart.privateName(text_selection$, "_TextSelectionToolbar.handleSelectAll");
  var isAbove$ = dart.privateName(text_selection$, "_TextSelectionToolbar.isAbove");
  text_selection$._TextSelectionToolbar = class _TextSelectionToolbar extends framework.StatefulWidget {
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
    get isAbove() {
      return this[isAbove$];
    }
    set isAbove(value) {
      super.isAbove = value;
    }
    createState() {
      return new text_selection$._TextSelectionToolbarState.new();
    }
  };
  (text_selection$._TextSelectionToolbar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let clipboardStatus = opts && 'clipboardStatus' in opts ? opts.clipboardStatus : null;
    let handleCut = opts && 'handleCut' in opts ? opts.handleCut : null;
    let handleCopy = opts && 'handleCopy' in opts ? opts.handleCopy : null;
    let handlePaste = opts && 'handlePaste' in opts ? opts.handlePaste : null;
    let handleSelectAll = opts && 'handleSelectAll' in opts ? opts.handleSelectAll : null;
    let isAbove = opts && 'isAbove' in opts ? opts.isAbove : null;
    if (isAbove == null) dart.nullFailed(L0, 42, 19, "isAbove");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[clipboardStatus$] = clipboardStatus;
    this[handleCut$] = handleCut;
    this[handleCopy$] = handleCopy;
    this[handlePaste$] = handlePaste;
    this[handleSelectAll$] = handleSelectAll;
    this[isAbove$] = isAbove;
    text_selection$._TextSelectionToolbar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection$._TextSelectionToolbar.prototype;
  dart.addTypeTests(text_selection$._TextSelectionToolbar);
  dart.addTypeCaches(text_selection$._TextSelectionToolbar);
  dart.setMethodSignature(text_selection$._TextSelectionToolbar, () => ({
    __proto__: dart.getMethods(text_selection$._TextSelectionToolbar.__proto__),
    createState: dart.fnType(text_selection$._TextSelectionToolbarState, [])
  }));
  dart.setLibraryUri(text_selection$._TextSelectionToolbar, L1);
  dart.setFieldSignature(text_selection$._TextSelectionToolbar, () => ({
    __proto__: dart.getFields(text_selection$._TextSelectionToolbar.__proto__),
    clipboardStatus: dart.finalFieldType(dart.nullable(text_selection.ClipboardStatusNotifier)),
    handleCut: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    handleCopy: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    handlePaste: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    handleSelectAll: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    isAbove: dart.finalFieldType(core.bool)
  }));
  var onPressed$ = dart.privateName(text_selection$, "_ItemData.onPressed");
  var label$ = dart.privateName(text_selection$, "_ItemData.label");
  text_selection$._ItemData = class _ItemData extends core.Object {
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
  };
  (text_selection$._ItemData.new = function(onPressed, label) {
    if (onPressed == null) dart.nullFailed(L0, 61, 10, "onPressed");
    if (label == null) dart.nullFailed(L0, 62, 10, "label");
    this[onPressed$] = onPressed;
    this[label$] = label;
    if (!(onPressed != null)) dart.assertFailed(null, L0, 63, 14, "onPressed != null");
    if (!(label != null)) dart.assertFailed(null, L0, 64, 14, "label != null");
    ;
  }).prototype = text_selection$._ItemData.prototype;
  dart.addTypeTests(text_selection$._ItemData);
  dart.addTypeCaches(text_selection$._ItemData);
  dart.setLibraryUri(text_selection$._ItemData, L1);
  dart.setFieldSignature(text_selection$._ItemData, () => ({
    __proto__: dart.getFields(text_selection$._ItemData.__proto__),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, [])),
    label: dart.finalFieldType(core.String)
  }));
  var ___TextSelectionToolbarState__clipboardStatus = dart.privateName(text_selection$, "_#_TextSelectionToolbarState#_clipboardStatus");
  var ___TextSelectionToolbarState__clipboardStatus_isSet = dart.privateName(text_selection$, "_#_TextSelectionToolbarState#_clipboardStatus#isSet");
  var _overflowOpen = dart.privateName(text_selection$, "_overflowOpen");
  var _containerKey = dart.privateName(text_selection$, "_containerKey");
  var _clipboardStatus = dart.privateName(text_selection$, "_clipboardStatus");
  var _name = dart.privateName(borders, "_name");
  var C2;
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var C3;
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var C1;
  var OutlinedBorder_side = dart.privateName(borders, "OutlinedBorder.side");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var C5;
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var C4;
  var RoundedRectangleBorder_borderRadius = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.borderRadius");
  var C0;
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C6;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C9;
  var C8;
  var C7;
  var C12;
  var C13;
  var C14;
  var C11;
  var C10;
  var _getItem = dart.privateName(text_selection$, "_getItem");
  var _reset = dart.privateName(text_selection$, "_reset");
  var _onChangedClipboardStatus = dart.privateName(text_selection$, "_onChangedClipboardStatus");
  var C18;
  var C19;
  var C17;
  var C16;
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  var C15;
  var C23;
  var C24;
  var C22;
  var C21;
  var C20;
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C25;
  var C27;
  var C26;
  var C30;
  var C29;
  var C28;
  var C33;
  var C34;
  var C35;
  var C32;
  var C31;
  var C38;
  var C39;
  var C37;
  var C36;
  var C42;
  var C43;
  var C44;
  var C41;
  var C40;
  var C47;
  var C48;
  var C49;
  var C50;
  var C51;
  var C46;
  var C45;
  var C54;
  var C55;
  var C56;
  var C53;
  var C52;
  var C59;
  var C60;
  var C61;
  var C58;
  var C57;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(text_selection$._TextSelectionToolbar) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(text_selection$._TextSelectionToolbar)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(text_selection$._TextSelectionToolbar));
  text_selection$._TextSelectionToolbarState = class _TextSelectionToolbarState extends State_TickerProviderStateMixin$36 {
    get [_clipboardStatus]() {
      let t0;
      return dart.test(this[___TextSelectionToolbarState__clipboardStatus_isSet]) ? (t0 = this[___TextSelectionToolbarState__clipboardStatus], t0) : dart.throw(new _internal.LateError.fieldNI("_clipboardStatus"));
    }
    set [_clipboardStatus](t0) {
      if (t0 == null) dart.nullFailed(L0, 71, 32, "null");
      this[___TextSelectionToolbarState__clipboardStatus_isSet] = true;
      this[___TextSelectionToolbarState__clipboardStatus] = t0;
    }
    [_getItem](itemData, isFirst, isLast) {
      if (itemData == null) dart.nullFailed(L0, 81, 29, "itemData");
      if (isFirst == null) dart.nullFailed(L0, 81, 44, "isFirst");
      if (isLast == null) dart.nullFailed(L0, 81, 58, "isLast");
      if (!(isFirst != null)) dart.assertFailed(null, L0, 82, 12, "isFirst != null");
      if (!(isLast != null)) dart.assertFailed(null, L0, 83, 12, "isLast != null");
      let theme = theme$.Theme.of(this.context);
      let isDark = dart.equals(theme.colorScheme.brightness, ui.Brightness.dark);
      let primary = isDark ? colors.Colors.white : colors.Colors.black87;
      return new text_button.TextButton.new({style: text_button.TextButton.styleFrom({primary: primary, shape: C0 || CT.C0, minimumSize: C6 || CT.C6, padding: new edge_insets.EdgeInsets.only({left: 9.5 + (dart.test(isFirst) ? 5.0 : 0.0), right: 9.5 + (dart.test(isLast) ? 5.0 : 0.0)})}), onPressed: itemData.onPressed, child: new text.Text.new(itemData.label, {$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10});
    }
    [_reset]() {
      this[_containerKey] = new framework.UniqueKey.new();
      this[_overflowOpen] = false;
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
      text_selection$._TextSelectionToolbar.as(oldWidget);
      if (oldWidget == null) dart.nullFailed(L0, 136, 46, "oldWidget");
      super.didUpdateWidget(oldWidget);
      if (!(this.widget.handleCut == null)[$_equals](oldWidget.handleCut == null) || !(this.widget.handleCopy == null)[$_equals](oldWidget.handleCopy == null) || !(this.widget.handlePaste == null)[$_equals](oldWidget.handlePaste == null) || !(this.widget.handleSelectAll == null)[$_equals](oldWidget.handleSelectAll == null)) {
        this[_reset]();
      }
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
      if (context == null) dart.nullFailed(L0, 179, 29, "context");
      if (this.widget.handlePaste != null && dart.equals(this[_clipboardStatus].value, text_selection.ClipboardStatus.unknown)) {
        return C15 || CT.C15;
      }
      let localizations = material_localizations.MaterialLocalizations.of(context);
      let itemDatas = (() => {
        let t1 = JSArrayOf_ItemData().of([]);
        if (this.widget.handleCut != null) t1.push(new text_selection$._ItemData.new(dart.nullCheck(this.widget.handleCut), localizations.cutButtonLabel));
        if (this.widget.handleCopy != null) t1.push(new text_selection$._ItemData.new(dart.nullCheck(this.widget.handleCopy), localizations.copyButtonLabel));
        if (this.widget.handlePaste != null && dart.equals(this[_clipboardStatus].value, text_selection.ClipboardStatus.pasteable)) t1.push(new text_selection$._ItemData.new(dart.nullCheck(this.widget.handlePaste), localizations.pasteButtonLabel));
        if (this.widget.handleSelectAll != null) t1.push(new text_selection$._ItemData.new(dart.nullCheck(this.widget.handleSelectAll), localizations.selectAllButtonLabel));
        return t1;
      })();
      if (dart.test(itemDatas[$isEmpty])) {
        return C20 || CT.C20;
      }
      return new text_selection$._TextSelectionToolbarContainer.new({key: this[_containerKey], overflowOpen: this[_overflowOpen], child: new animated_size.AnimatedSize.new({vsync: this, duration: C25 || CT.C25, child: new material.Material.new({borderRadius: C26 || CT.C26, clipBehavior: ui.Clip.antiAlias, elevation: 1.0, type: material.MaterialType.card, child: new text_selection$._TextSelectionToolbarItems.new({isAbove: this.widget.isAbove, overflowOpen: this[_overflowOpen], children: (() => {
                let t2 = JSArrayOfWidget().of([new material.Material.new({type: material.MaterialType.card, child: new icon_button.IconButton.new({icon: new icon.Icon.new(dart.test(this[_overflowOpen]) ? icons.Icons.arrow_back : icons.Icons.more_vert, {$creationLocationd_0dea112b090073317d4: C28 || CT.C28}), onPressed: dart.fn(() => {
                        this.setState(dart.fn(() => {
                          this[_overflowOpen] = !dart.test(this[_overflowOpen]);
                        }, VoidTovoid()));
                      }, VoidTovoid()), tooltip: dart.test(this[_overflowOpen]) ? localizations.backButtonTooltip : localizations.moreButtonTooltip, $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36})]);
                for (let i = 0; i < dart.notNull(itemDatas[$length]); i = i + 1)
                  t2.push(this[_getItem](itemDatas[$_get](i), i === 0, i === dart.notNull(itemDatas[$length]) - 1));
                return t2;
              })(), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57});
    }
  };
  (text_selection$._TextSelectionToolbarState.new = function() {
    this[___TextSelectionToolbarState__clipboardStatus] = null;
    this[___TextSelectionToolbarState__clipboardStatus_isSet] = false;
    this[_overflowOpen] = false;
    this[_containerKey] = new framework.UniqueKey.new();
    text_selection$._TextSelectionToolbarState.__proto__.new.call(this);
    ;
  }).prototype = text_selection$._TextSelectionToolbarState.prototype;
  dart.addTypeTests(text_selection$._TextSelectionToolbarState);
  dart.addTypeCaches(text_selection$._TextSelectionToolbarState);
  dart.setMethodSignature(text_selection$._TextSelectionToolbarState, () => ({
    __proto__: dart.getMethods(text_selection$._TextSelectionToolbarState.__proto__),
    [_getItem]: dart.fnType(framework.Widget, [text_selection$._ItemData, core.bool, core.bool]),
    [_reset]: dart.fnType(dart.void, []),
    [_onChangedClipboardStatus]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(text_selection$._TextSelectionToolbarState, () => ({
    __proto__: dart.getGetters(text_selection$._TextSelectionToolbarState.__proto__),
    [_clipboardStatus]: text_selection.ClipboardStatusNotifier
  }));
  dart.setSetterSignature(text_selection$._TextSelectionToolbarState, () => ({
    __proto__: dart.getSetters(text_selection$._TextSelectionToolbarState.__proto__),
    [_clipboardStatus]: text_selection.ClipboardStatusNotifier
  }));
  dart.setLibraryUri(text_selection$._TextSelectionToolbarState, L1);
  dart.setFieldSignature(text_selection$._TextSelectionToolbarState, () => ({
    __proto__: dart.getFields(text_selection$._TextSelectionToolbarState.__proto__),
    [___TextSelectionToolbarState__clipboardStatus]: dart.fieldType(dart.nullable(text_selection.ClipboardStatusNotifier)),
    [___TextSelectionToolbarState__clipboardStatus_isSet]: dart.fieldType(core.bool),
    [_overflowOpen]: dart.fieldType(core.bool),
    [_containerKey]: dart.fieldType(framework.UniqueKey)
  }));
  var overflowOpen$ = dart.privateName(text_selection$, "_TextSelectionToolbarContainer.overflowOpen");
  text_selection$._TextSelectionToolbarContainer = class _TextSelectionToolbarContainer extends framework.SingleChildRenderObjectWidget {
    get overflowOpen() {
      return this[overflowOpen$];
    }
    set overflowOpen(value) {
      super.overflowOpen = value;
    }
    createRenderObject(context) {
      if (context == null) dart.nullFailed(L0, 267, 75, "context");
      return new text_selection$._TextSelectionToolbarContainerRenderBox.new({overflowOpen: this.overflowOpen});
    }
    updateRenderObject(context, renderObject) {
      if (context == null) dart.nullFailed(L0, 272, 40, "context");
      text_selection$._TextSelectionToolbarContainerRenderBox.as(renderObject);
      if (renderObject == null) dart.nullFailed(L0, 272, 89, "renderObject");
      renderObject.overflowOpen = this.overflowOpen;
    }
  };
  (text_selection$._TextSelectionToolbarContainer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L0, 258, 21, "child");
    let overflowOpen = opts && 'overflowOpen' in opts ? opts.overflowOpen : null;
    if (overflowOpen == null) dart.nullFailed(L0, 259, 19, "overflowOpen");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[overflowOpen$] = overflowOpen;
    if (!(child != null)) dart.assertFailed(null, L0, 260, 15, "child != null");
    if (!(overflowOpen != null)) dart.assertFailed(null, L0, 261, 15, "overflowOpen != null");
    text_selection$._TextSelectionToolbarContainer.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection$._TextSelectionToolbarContainer.prototype;
  dart.addTypeTests(text_selection$._TextSelectionToolbarContainer);
  dart.addTypeCaches(text_selection$._TextSelectionToolbarContainer);
  dart.setMethodSignature(text_selection$._TextSelectionToolbarContainer, () => ({
    __proto__: dart.getMethods(text_selection$._TextSelectionToolbarContainer.__proto__),
    createRenderObject: dart.fnType(text_selection$._TextSelectionToolbarContainerRenderBox, [framework.BuildContext])
  }));
  dart.setLibraryUri(text_selection$._TextSelectionToolbarContainer, L1);
  dart.setFieldSignature(text_selection$._TextSelectionToolbarContainer, () => ({
    __proto__: dart.getFields(text_selection$._TextSelectionToolbarContainer.__proto__),
    overflowOpen: dart.finalFieldType(core.bool)
  }));
  var _closedWidth = dart.privateName(text_selection$, "_closedWidth");
  text_selection$._TextSelectionToolbarContainerRenderBox = class _TextSelectionToolbarContainerRenderBox extends proxy_box.RenderProxyBox {
    get overflowOpen() {
      return this[_overflowOpen];
    }
    set overflowOpen(value) {
      if (value == null) dart.nullFailed(L0, 291, 25, "value");
      if (dart.equals(value, this.overflowOpen)) {
        return;
      }
      this[_overflowOpen] = value;
      this.markNeedsLayout();
    }
    performLayout() {
      dart.nullCheck(this.child).layout(this.constraints.loosen(), {parentUsesSize: true});
      if (!dart.test(this.overflowOpen) && this[_closedWidth] == null) {
        this[_closedWidth] = dart.nullCheck(this.child).size.width;
      }
      this.size = this.constraints.constrain(new ui.Size.new(this[_closedWidth] == null || dart.notNull(dart.nullCheck(this.child).size.width) > dart.nullCheck(this[_closedWidth]) ? dart.nullCheck(this.child).size.width : dart.nullCheck(this[_closedWidth]), dart.nullCheck(this.child).size.height));
      let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
      childParentData.offset = new ui.Offset.new(dart.notNull(this.size.width) - dart.notNull(dart.nullCheck(this.child).size.width), 0.0);
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 329, 30, "context");
      if (offset == null) dart.nullFailed(L0, 329, 46, "offset");
      let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
      context.paintChild(dart.nullCheck(this.child), childParentData.offset['+'](offset));
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L0, 336, 41, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 336, 67, "position");
      let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
      return result.addWithPaintOffset({offset: childParentData.offset, position: position, hitTest: dart.fn((result, transformed) => {
          if (result == null) dart.nullFailed(L0, 342, 34, "result");
          if (transformed == null) dart.nullFailed(L0, 342, 49, "transformed");
          if (!dart.equals(transformed, position['-'](childParentData.offset))) dart.assertFailed(null, L0, 343, 16, "transformed == position - childParentData.offset");
          return dart.nullCheck(this.child).hitTest(result, {position: transformed});
        }, BoxHitTestResultAndOffsetTobool())});
    }
    setupParentData(child) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L0, 350, 34, "child");
      if (!text_selection.ToolbarItemsParentData.is(child.parentData)) {
        child.parentData = new text_selection.ToolbarItemsParentData.new();
      }
    }
    applyPaintTransform(child, transform) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 357, 41, "child");
      if (transform == null) dart.nullFailed(L0, 357, 56, "transform");
      let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(child.parentData));
      transform.translate(childParentData.offset.dx, childParentData.offset.dy);
      super.applyPaintTransform(child, transform);
    }
  };
  (text_selection$._TextSelectionToolbarContainerRenderBox.new = function(opts) {
    let overflowOpen = opts && 'overflowOpen' in opts ? opts.overflowOpen : null;
    if (overflowOpen == null) dart.nullFailed(L0, 279, 19, "overflowOpen");
    this[_closedWidth] = null;
    if (!(overflowOpen != null)) dart.assertFailed(null, L0, 280, 15, "overflowOpen != null");
    this[_overflowOpen] = overflowOpen;
    text_selection$._TextSelectionToolbarContainerRenderBox.__proto__.new.call(this);
    ;
  }).prototype = text_selection$._TextSelectionToolbarContainerRenderBox.prototype;
  dart.addTypeTests(text_selection$._TextSelectionToolbarContainerRenderBox);
  dart.addTypeCaches(text_selection$._TextSelectionToolbarContainerRenderBox);
  dart.setGetterSignature(text_selection$._TextSelectionToolbarContainerRenderBox, () => ({
    __proto__: dart.getGetters(text_selection$._TextSelectionToolbarContainerRenderBox.__proto__),
    overflowOpen: core.bool
  }));
  dart.setSetterSignature(text_selection$._TextSelectionToolbarContainerRenderBox, () => ({
    __proto__: dart.getSetters(text_selection$._TextSelectionToolbarContainerRenderBox.__proto__),
    overflowOpen: core.bool
  }));
  dart.setLibraryUri(text_selection$._TextSelectionToolbarContainerRenderBox, L1);
  dart.setFieldSignature(text_selection$._TextSelectionToolbarContainerRenderBox, () => ({
    __proto__: dart.getFields(text_selection$._TextSelectionToolbarContainerRenderBox.__proto__),
    [_closedWidth]: dart.fieldType(dart.nullable(core.double)),
    [_overflowOpen]: dart.fieldType(core.bool)
  }));
  text_selection$._TextSelectionToolbarItems = class _TextSelectionToolbarItems extends framework.MultiChildRenderObjectWidget {
    createRenderObject(context) {
      if (context == null) dart.nullFailed(L0, 381, 71, "context");
      return new text_selection$._TextSelectionToolbarItemsRenderBox.new({isAbove: this.isAbove, overflowOpen: this.overflowOpen});
    }
    updateRenderObject(context, renderObject) {
      let t3;
      if (context == null) dart.nullFailed(L0, 389, 40, "context");
      text_selection$._TextSelectionToolbarItemsRenderBox.as(renderObject);
      if (renderObject == null) dart.nullFailed(L0, 389, 85, "renderObject");
      t3 = renderObject;
      (() => {
        t3.isAbove = this.isAbove;
        t3.overflowOpen = this.overflowOpen;
        return t3;
      })();
    }
    createElement() {
      return new text_selection$._TextSelectionToolbarItemsElement.new(this);
    }
  };
  (text_selection$._TextSelectionToolbarItems.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let isAbove = opts && 'isAbove' in opts ? opts.isAbove : null;
    if (isAbove == null) dart.nullFailed(L0, 369, 19, "isAbove");
    let overflowOpen = opts && 'overflowOpen' in opts ? opts.overflowOpen : null;
    if (overflowOpen == null) dart.nullFailed(L0, 370, 19, "overflowOpen");
    let children = opts && 'children' in opts ? opts.children : null;
    if (children == null) dart.nullFailed(L0, 371, 27, "children");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.isAbove = isAbove;
    this.overflowOpen = overflowOpen;
    if (!(children != null)) dart.assertFailed(null, L0, 372, 15, "children != null");
    if (!(isAbove != null)) dart.assertFailed(null, L0, 373, 15, "isAbove != null");
    if (!(overflowOpen != null)) dart.assertFailed(null, L0, 374, 15, "overflowOpen != null");
    text_selection$._TextSelectionToolbarItems.__proto__.new.call(this, {key: key, children: children, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection$._TextSelectionToolbarItems.prototype;
  dart.addTypeTests(text_selection$._TextSelectionToolbarItems);
  dart.addTypeCaches(text_selection$._TextSelectionToolbarItems);
  dart.setMethodSignature(text_selection$._TextSelectionToolbarItems, () => ({
    __proto__: dart.getMethods(text_selection$._TextSelectionToolbarItems.__proto__),
    createRenderObject: dart.fnType(text_selection$._TextSelectionToolbarItemsRenderBox, [framework.BuildContext]),
    createElement: dart.fnType(text_selection$._TextSelectionToolbarItemsElement, [])
  }));
  dart.setLibraryUri(text_selection$._TextSelectionToolbarItems, L1);
  dart.setFieldSignature(text_selection$._TextSelectionToolbarItems, () => ({
    __proto__: dart.getFields(text_selection$._TextSelectionToolbarItems.__proto__),
    isAbove: dart.finalFieldType(core.bool),
    overflowOpen: dart.finalFieldType(core.bool)
  }));
  var C62;
  text_selection$._TextSelectionToolbarItemsElement = class _TextSelectionToolbarItemsElement extends framework.MultiChildRenderObjectElement {
    static _shouldPaint(child) {
      if (child == null) dart.nullFailed(L0, 404, 36, "child");
      return text_selection.ToolbarItemsParentData.as(dart.nullCheck(dart.nullCheck(child.renderObject).parentData)).shouldPaint;
    }
    debugVisitOnstageChildren(visitor) {
      if (visitor == null) dart.nullFailed(L0, 409, 49, "visitor");
      this.children[$where](C62 || CT.C62)[$forEach](visitor);
    }
  };
  (text_selection$._TextSelectionToolbarItemsElement.new = function(widget) {
    if (widget == null) dart.nullFailed(L0, 401, 34, "widget");
    text_selection$._TextSelectionToolbarItemsElement.__proto__.new.call(this, widget);
    ;
  }).prototype = text_selection$._TextSelectionToolbarItemsElement.prototype;
  dart.addTypeTests(text_selection$._TextSelectionToolbarItemsElement);
  dart.addTypeCaches(text_selection$._TextSelectionToolbarItemsElement);
  dart.setLibraryUri(text_selection$._TextSelectionToolbarItemsElement, L1);
  var _lastIndexThatFits = dart.privateName(text_selection$, "_lastIndexThatFits");
  var _isAbove = dart.privateName(text_selection$, "_isAbove");
  var _layoutChildren = dart.privateName(text_selection$, "_layoutChildren");
  var _shouldPaintChild = dart.privateName(text_selection$, "_shouldPaintChild");
  var C63;
  var _placeChildren = dart.privateName(text_selection$, "_placeChildren");
  const RenderBox_ContainerRenderObjectMixin$36 = class RenderBox_ContainerRenderObjectMixin extends box.RenderBox {};
  (RenderBox_ContainerRenderObjectMixin$36.new = function() {
    object.ContainerRenderObjectMixin$(box.RenderBox, text_selection.ToolbarItemsParentData)[dart.mixinNew].call(this);
    RenderBox_ContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_ContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderBox_ContainerRenderObjectMixin$36, object.ContainerRenderObjectMixin$(box.RenderBox, text_selection.ToolbarItemsParentData));
  text_selection$._TextSelectionToolbarItemsRenderBox = class _TextSelectionToolbarItemsRenderBox extends RenderBox_ContainerRenderObjectMixin$36 {
    get isAbove() {
      return this[_isAbove];
    }
    set isAbove(value) {
      if (value == null) dart.nullFailed(L0, 429, 20, "value");
      if (dart.equals(value, this.isAbove)) {
        return;
      }
      this[_isAbove] = value;
      this.markNeedsLayout();
    }
    get overflowOpen() {
      return this[_overflowOpen];
    }
    set overflowOpen(value) {
      if (value == null) dart.nullFailed(L0, 439, 25, "value");
      if (dart.equals(value, this.overflowOpen)) {
        return;
      }
      this[_overflowOpen] = value;
      this.markNeedsLayout();
    }
    [_layoutChildren]() {
      let sizedConstraints = dart.test(this[_overflowOpen]) ? this.constraints : new box.BoxConstraints.loose(new ui.Size.new(this.constraints.maxWidth, 44));
      let i = -1;
      let width = 0.0;
      this.visitChildren(dart.fn(renderObjectChild => {
        if (renderObjectChild == null) dart.nullFailed(L0, 460, 33, "renderObjectChild");
        i = i + 1;
        if (this[_lastIndexThatFits] !== -1 && !dart.test(this.overflowOpen)) {
          return;
        }
        let child = box.RenderBox.as(renderObjectChild);
        child.layout(sizedConstraints.loosen(), {parentUsesSize: true});
        width = width + dart.notNull(child.size.width);
        if (width > dart.notNull(sizedConstraints.maxWidth) && this[_lastIndexThatFits] === -1) {
          this[_lastIndexThatFits] = i - 1;
        }
      }, RenderObjectTovoid()));
      let navButton = dart.nullCheck(this.firstChild);
      if (this[_lastIndexThatFits] !== -1 && this[_lastIndexThatFits] === dart.notNull(this.childCount) - 2 && width - dart.notNull(navButton.size.width) <= dart.notNull(sizedConstraints.maxWidth)) {
        this[_lastIndexThatFits] = -1;
      }
    }
    [_shouldPaintChild](renderObjectChild, index) {
      if (renderObjectChild == null) dart.nullFailed(L0, 491, 39, "renderObjectChild");
      if (index == null) dart.nullFailed(L0, 491, 62, "index");
      if (dart.equals(renderObjectChild, this.firstChild)) {
        return this[_lastIndexThatFits] !== -1;
      }
      if (this[_lastIndexThatFits] === -1) {
        return true;
      }
      return (dart.notNull(index) > dart.notNull(this[_lastIndexThatFits]))[$_equals](this.overflowOpen);
    }
    [_placeChildren]() {
      let i = -1;
      let nextSize = C63 || CT.C63;
      let fitWidth = 0.0;
      let navButton = dart.nullCheck(this.firstChild);
      let overflowHeight = dart.test(this.overflowOpen) && !dart.test(this.isAbove) ? navButton.size.height : 0.0;
      this.visitChildren(dart.fn(renderObjectChild => {
        if (renderObjectChild == null) dart.nullFailed(L0, 517, 33, "renderObjectChild");
        i = i + 1;
        let child = box.RenderBox.as(renderObjectChild);
        let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(child.parentData));
        if (dart.equals(renderObjectChild, navButton)) {
          return;
        }
        if (!dart.test(this[_shouldPaintChild](renderObjectChild, i))) {
          childParentData.shouldPaint = false;
          return;
        }
        childParentData.shouldPaint = true;
        if (!dart.test(this.overflowOpen)) {
          childParentData.offset = new ui.Offset.new(fitWidth, 0.0);
          fitWidth = fitWidth + dart.notNull(child.size.width);
          nextSize = new ui.Size.new(fitWidth, math.max(core.double, child.size.height, nextSize.height));
        } else {
          childParentData.offset = new ui.Offset.new(0.0, overflowHeight);
          overflowHeight = dart.notNull(overflowHeight) + dart.notNull(child.size.height);
          nextSize = new ui.Size.new(math.max(core.double, child.size.width, nextSize.width), overflowHeight);
        }
      }, RenderObjectTovoid()));
      let navButtonParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(navButton.parentData));
      if (dart.test(this[_shouldPaintChild](dart.nullCheck(this.firstChild), 0))) {
        navButtonParentData.shouldPaint = true;
        if (dart.test(this.overflowOpen)) {
          navButtonParentData.offset = dart.test(this.isAbove) ? new ui.Offset.new(0.0, overflowHeight) : ui.Offset.zero;
          nextSize = new ui.Size.new(nextSize.width, dart.test(this.isAbove) ? dart.notNull(nextSize.height) + dart.notNull(navButton.size.height) : nextSize.height);
        } else {
          navButtonParentData.offset = new ui.Offset.new(fitWidth, 0.0);
          nextSize = new ui.Size.new(dart.notNull(nextSize.width) + dart.notNull(navButton.size.width), nextSize.height);
        }
      } else {
        navButtonParentData.shouldPaint = false;
      }
      this.size = nextSize;
    }
    performLayout() {
      this[_lastIndexThatFits] = -1;
      if (this.firstChild == null) {
        this.size = this.constraints.smallest;
        return;
      }
      this[_layoutChildren]();
      this[_placeChildren]();
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 588, 30, "context");
      if (offset == null) dart.nullFailed(L0, 588, 46, "offset");
      this.visitChildren(dart.fn(renderObjectChild => {
        if (renderObjectChild == null) dart.nullFailed(L0, 589, 33, "renderObjectChild");
        let child = box.RenderBox.as(renderObjectChild);
        let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(child.parentData));
        if (!dart.test(childParentData.shouldPaint)) {
          return;
        }
        context.paintChild(child, childParentData.offset['+'](offset));
      }, RenderObjectTovoid()));
    }
    setupParentData(child) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L0, 601, 34, "child");
      if (!text_selection.ToolbarItemsParentData.is(child.parentData)) {
        child.parentData = new text_selection.ToolbarItemsParentData.new();
      }
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L0, 608, 41, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 608, 67, "position");
      let child = this.lastChild;
      while (child != null) {
        let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(child.parentData));
        if (!dart.test(childParentData.shouldPaint)) {
          child = childParentData.previousSibling;
          continue;
        }
        let isHit = result.addWithPaintOffset({offset: childParentData.offset, position: position, hitTest: dart.fn((result, transformed) => {
            if (result == null) dart.nullFailed(L0, 623, 36, "result");
            if (transformed == null) dart.nullFailed(L0, 623, 51, "transformed");
            if (!dart.equals(transformed, position['-'](childParentData.offset))) dart.assertFailed(null, L0, 624, 18, "transformed == position - childParentData.offset");
            return dart.nullCheck(child).hitTest(result, {position: transformed});
          }, BoxHitTestResultAndOffsetTobool())});
        if (dart.test(isHit)) return true;
        child = childParentData.previousSibling;
      }
      return false;
    }
    visitChildrenForSemantics(visitor) {
      if (visitor == null) dart.nullFailed(L0, 637, 54, "visitor");
      this.visitChildren(dart.fn(renderObjectChild => {
        if (renderObjectChild == null) dart.nullFailed(L0, 638, 33, "renderObjectChild");
        let child = box.RenderBox.as(renderObjectChild);
        let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(child.parentData));
        if (dart.test(childParentData.shouldPaint)) {
          visitor(renderObjectChild);
        }
      }, RenderObjectTovoid()));
    }
  };
  (text_selection$._TextSelectionToolbarItemsRenderBox.new = function(opts) {
    let isAbove = opts && 'isAbove' in opts ? opts.isAbove : null;
    if (isAbove == null) dart.nullFailed(L0, 416, 19, "isAbove");
    let overflowOpen = opts && 'overflowOpen' in opts ? opts.overflowOpen : null;
    if (overflowOpen == null) dart.nullFailed(L0, 417, 19, "overflowOpen");
    this[_lastIndexThatFits] = -1;
    if (!(overflowOpen != null)) dart.assertFailed(null, L0, 418, 15, "overflowOpen != null");
    if (!(isAbove != null)) dart.assertFailed(null, L0, 419, 15, "isAbove != null");
    this[_isAbove] = isAbove;
    this[_overflowOpen] = overflowOpen;
    text_selection$._TextSelectionToolbarItemsRenderBox.__proto__.new.call(this);
    ;
  }).prototype = text_selection$._TextSelectionToolbarItemsRenderBox.prototype;
  dart.addTypeTests(text_selection$._TextSelectionToolbarItemsRenderBox);
  dart.addTypeCaches(text_selection$._TextSelectionToolbarItemsRenderBox);
  dart.setMethodSignature(text_selection$._TextSelectionToolbarItemsRenderBox, () => ({
    __proto__: dart.getMethods(text_selection$._TextSelectionToolbarItemsRenderBox.__proto__),
    [_layoutChildren]: dart.fnType(dart.void, []),
    [_shouldPaintChild]: dart.fnType(core.bool, [object.RenderObject, core.int]),
    [_placeChildren]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(text_selection$._TextSelectionToolbarItemsRenderBox, () => ({
    __proto__: dart.getGetters(text_selection$._TextSelectionToolbarItemsRenderBox.__proto__),
    isAbove: core.bool,
    overflowOpen: core.bool
  }));
  dart.setSetterSignature(text_selection$._TextSelectionToolbarItemsRenderBox, () => ({
    __proto__: dart.getSetters(text_selection$._TextSelectionToolbarItemsRenderBox.__proto__),
    isAbove: core.bool,
    overflowOpen: core.bool
  }));
  dart.setLibraryUri(text_selection$._TextSelectionToolbarItemsRenderBox, L1);
  dart.setFieldSignature(text_selection$._TextSelectionToolbarItemsRenderBox, () => ({
    __proto__: dart.getFields(text_selection$._TextSelectionToolbarItemsRenderBox.__proto__),
    [_lastIndexThatFits]: dart.fieldType(core.int),
    [_isAbove]: dart.fieldType(core.bool),
    [_overflowOpen]: dart.fieldType(core.bool)
  }));
  text_selection$._TextSelectionToolbarLayout = class _TextSelectionToolbarLayout extends shifted_box.SingleChildLayoutDelegate {
    static _centerOn(position, width, min, max) {
      if (position == null) dart.nullFailed(L0, 672, 34, "position");
      if (width == null) dart.nullFailed(L0, 672, 51, "width");
      if (min == null) dart.nullFailed(L0, 672, 65, "min");
      if (max == null) dart.nullFailed(L0, 672, 77, "max");
      if (dart.notNull(position) - dart.notNull(width) / 2.0 < dart.notNull(min)) {
        return min;
      }
      if (dart.notNull(position) + dart.notNull(width) / 2.0 > dart.notNull(max)) {
        return dart.notNull(max) - dart.notNull(width);
      }
      return dart.notNull(position) - dart.notNull(width) / 2.0;
    }
    getConstraintsForChild(constraints) {
      if (constraints == null) dart.nullFailed(L0, 688, 56, "constraints");
      return constraints.loosen();
    }
    getPositionForChild(size, childSize) {
      if (size == null) dart.nullFailed(L0, 693, 35, "size");
      if (childSize == null) dart.nullFailed(L0, 693, 46, "childSize");
      return new ui.Offset.new(text_selection$._TextSelectionToolbarLayout._centerOn(this.anchor.dx, childSize.width, 8, dart.notNull(size.width) - 8), dart.test(this.fitsAbove) ? math.max(core.double, this.upperBounds, dart.notNull(this.anchor.dy) - dart.notNull(childSize.height)) : this.anchor.dy);
    }
    shouldRelayout(oldDelegate) {
      text_selection$._TextSelectionToolbarLayout.as(oldDelegate);
      if (oldDelegate == null) dart.nullFailed(L0, 708, 51, "oldDelegate");
      return !dart.equals(this.anchor, oldDelegate.anchor);
    }
  };
  (text_selection$._TextSelectionToolbarLayout.new = function(anchor, upperBounds, fitsAbove) {
    if (anchor == null) dart.nullFailed(L0, 651, 36, "anchor");
    if (upperBounds == null) dart.nullFailed(L0, 651, 49, "upperBounds");
    if (fitsAbove == null) dart.nullFailed(L0, 651, 67, "fitsAbove");
    this.anchor = anchor;
    this.upperBounds = upperBounds;
    this.fitsAbove = fitsAbove;
    text_selection$._TextSelectionToolbarLayout.__proto__.new.call(this);
    ;
  }).prototype = text_selection$._TextSelectionToolbarLayout.prototype;
  dart.addTypeTests(text_selection$._TextSelectionToolbarLayout);
  dart.addTypeCaches(text_selection$._TextSelectionToolbarLayout);
  dart.setMethodSignature(text_selection$._TextSelectionToolbarLayout, () => ({
    __proto__: dart.getMethods(text_selection$._TextSelectionToolbarLayout.__proto__),
    shouldRelayout: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(text_selection$._TextSelectionToolbarLayout, L1);
  dart.setFieldSignature(text_selection$._TextSelectionToolbarLayout, () => ({
    __proto__: dart.getFields(text_selection$._TextSelectionToolbarLayout.__proto__),
    anchor: dart.finalFieldType(ui.Offset),
    upperBounds: dart.finalFieldType(core.double),
    fitsAbove: dart.finalFieldType(core.bool)
  }));
  text_selection$._TextSelectionHandlePainter = class _TextSelectionHandlePainter extends custom_paint.CustomPainter {
    paint(canvas, size) {
      let t3, t3$;
      if (canvas == null) dart.nullFailed(L0, 720, 21, "canvas");
      if (size == null) dart.nullFailed(L0, 720, 34, "size");
      let paint = (t3 = ui.Paint.new(), (() => {
        t3.color = this.color;
        return t3;
      })());
      let radius = dart.notNull(size.width) / 2.0;
      let circle = new ui.Rect.fromCircle({center: new ui.Offset.new(radius, radius), radius: radius});
      let point = new ui.Rect.fromLTWH(0.0, 0.0, radius, radius);
      let path = (t3$ = ui.Path.new(), (() => {
        t3$.addOval(circle);
        t3$.addRect(point);
        return t3$;
      })());
      canvas.drawPath(path, paint);
    }
    shouldRepaint(oldPainter) {
      text_selection$._TextSelectionHandlePainter.as(oldPainter);
      if (oldPainter == null) dart.nullFailed(L0, 730, 50, "oldPainter");
      return !dart.equals(this.color, oldPainter.color);
    }
  };
  (text_selection$._TextSelectionHandlePainter.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    if (color == null) dart.nullFailed(L0, 715, 47, "color");
    this.color = color;
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
  var C64;
  var C67;
  var C68;
  var C69;
  var C70;
  var C71;
  var C72;
  var C66;
  var C65;
  var C75;
  var C76;
  var C74;
  var C73;
  var C79;
  var C78;
  var C77;
  var C82;
  var C81;
  var C80;
  var C85;
  var C86;
  var C87;
  var C84;
  var C83;
  var C90;
  var C91;
  var C89;
  var C88;
  var _name$ = dart.privateName(text_selection, "_name");
  var C92;
  var C93;
  var C96;
  var C97;
  var C95;
  var C94;
  var C98;
  var C99;
  var C100;
  text_selection$._MaterialTextSelectionControls = class _MaterialTextSelectionControls extends text_selection.TextSelectionControls {
    getHandleSize(textLineHeight) {
      if (textLineHeight == null) dart.nullFailed(L0, 738, 29, "textLineHeight");
      return C64 || CT.C64;
    }
    buildToolbar(context, globalEditableRegion, textLineHeight, selectionMidpoint, endpoints, delegate, clipboardStatus) {
      if (context == null) dart.nullFailed(L0, 743, 18, "context");
      if (globalEditableRegion == null) dart.nullFailed(L0, 744, 10, "globalEditableRegion");
      if (textLineHeight == null) dart.nullFailed(L0, 745, 12, "textLineHeight");
      if (selectionMidpoint == null) dart.nullFailed(L0, 746, 12, "selectionMidpoint");
      if (endpoints == null) dart.nullFailed(L0, 747, 30, "endpoints");
      if (delegate == null) dart.nullFailed(L0, 748, 27, "delegate");
      if (clipboardStatus == null) dart.nullFailed(L0, 749, 29, "clipboardStatus");
      if (!dart.test(debug.debugCheckHasMediaQuery(context))) dart.assertFailed(null, L0, 751, 12, "debugCheckHasMediaQuery(context)");
      if (!dart.test(debug$.debugCheckHasMaterialLocalizations(context))) dart.assertFailed(null, L0, 752, 12, "debugCheckHasMaterialLocalizations(context)");
      let startTextSelectionPoint = endpoints[$_get](0);
      let endTextSelectionPoint = dart.notNull(endpoints[$length]) > 1 ? endpoints[$_get](1) : endpoints[$_get](0);
      let paddingTop = media_query.MediaQuery.of(context).padding.top;
      let availableHeight = dart.notNull(globalEditableRegion.top) + dart.notNull(startTextSelectionPoint.point.dy) - dart.notNull(textLineHeight) - dart.notNull(paddingTop);
      let fitsAbove = 60 <= availableHeight;
      let anchor = new ui.Offset.new(dart.notNull(globalEditableRegion.left) + dart.notNull(selectionMidpoint.dx), fitsAbove ? dart.notNull(globalEditableRegion.top) + dart.notNull(startTextSelectionPoint.point.dy) - dart.notNull(textLineHeight) - 8 : dart.notNull(globalEditableRegion.top) + dart.notNull(endTextSelectionPoint.point.dy) + 20);
      return new basic.Stack.new({children: JSArrayOfWidget().of([new basic.CustomSingleChildLayout.new({delegate: new text_selection$._TextSelectionToolbarLayout.new(anchor, 8 + dart.notNull(paddingTop), fitsAbove), child: new text_selection$._TextSelectionToolbar.new({clipboardStatus: clipboardStatus, handleCut: dart.test(this.canCut(delegate)) ? dart.fn(() => this.handleCut(delegate), VoidTovoid()) : null, handleCopy: dart.test(this.canCopy(delegate)) ? dart.fn(() => this.handleCopy(delegate, clipboardStatus), VoidTovoid()) : null, handlePaste: dart.test(this.canPaste(delegate)) ? dart.fn(() => this.handlePaste(delegate), VoidTovoid()) : null, handleSelectAll: dart.test(this.canSelectAll(delegate)) ? dart.fn(() => this.handleSelectAll(delegate), VoidTovoid()) : null, isAbove: fitsAbove, $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), $creationLocationd_0dea112b090073317d4: C73 || CT.C73})]), $creationLocationd_0dea112b090073317d4: C77 || CT.C77});
    }
    buildHandle(context, type, textHeight) {
      let t3;
      if (context == null) dart.nullFailed(L0, 799, 35, "context");
      if (type == null) dart.nullFailed(L0, 799, 68, "type");
      if (textHeight == null) dart.nullFailed(L0, 799, 81, "textHeight");
      let theme = theme$.Theme.of(context);
      let handleColor = (t3 = text_selection_theme.TextSelectionTheme.of(context).selectionHandleColor, t3 == null ? theme.colorScheme.primary : t3);
      let handle = new basic.SizedBox.new({width: 22, height: 22, child: new basic.CustomPaint.new({painter: new text_selection$._TextSelectionHandlePainter.new({color: handleColor}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80}), $creationLocationd_0dea112b090073317d4: C83 || CT.C83});
      switch (type) {
        case C92 || CT.C92:
        {
          return new basic.Transform.rotate({angle: 3.141592653589793 / 2.0, child: handle, $creationLocationd_0dea112b090073317d4: C88 || CT.C88});
        }
        case C93 || CT.C93:
        {
          return handle;
        }
        case C98 || CT.C98:
        {
          return new basic.Transform.rotate({angle: 3.141592653589793 / 4.0, child: handle, $creationLocationd_0dea112b090073317d4: C94 || CT.C94});
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    getHandleAnchor(type, textLineHeight) {
      if (type == null) dart.nullFailed(L0, 835, 50, "type");
      if (textLineHeight == null) dart.nullFailed(L0, 835, 63, "textLineHeight");
      switch (type) {
        case C92 || CT.C92:
        {
          return C99 || CT.C99;
        }
        case C93 || CT.C93:
        {
          return ui.Offset.zero;
        }
        default:
        {
          return C100 || CT.C100;
        }
      }
    }
    canSelectAll(delegate) {
      if (delegate == null) dart.nullFailed(L0, 847, 43, "delegate");
      let value = delegate.textEditingValue;
      return dart.test(delegate.selectAllEnabled) && value.text[$isNotEmpty] && !(value.selection.start === 0 && value.selection.end === value.text.length);
    }
  };
  (text_selection$._MaterialTextSelectionControls.new = function() {
    ;
  }).prototype = text_selection$._MaterialTextSelectionControls.prototype;
  dart.addTypeTests(text_selection$._MaterialTextSelectionControls);
  dart.addTypeCaches(text_selection$._MaterialTextSelectionControls);
  dart.setMethodSignature(text_selection$._MaterialTextSelectionControls, () => ({
    __proto__: dart.getMethods(text_selection$._MaterialTextSelectionControls.__proto__),
    getHandleSize: dart.fnType(ui.Size, [core.double]),
    buildToolbar: dart.fnType(framework.Widget, [framework.BuildContext, ui.Rect, core.double, ui.Offset, core.List$(editable.TextSelectionPoint), text_input.TextSelectionDelegate, text_selection.ClipboardStatusNotifier]),
    buildHandle: dart.fnType(framework.Widget, [framework.BuildContext, text_selection.TextSelectionHandleType, core.double]),
    getHandleAnchor: dart.fnType(ui.Offset, [text_selection.TextSelectionHandleType, core.double])
  }));
  dart.setLibraryUri(text_selection$._MaterialTextSelectionControls, L1);
  dart.defineLazy(text_selection$, {
    /*text_selection$._kHandleSize*/get _kHandleSize() {
      return 22;
    },
    /*text_selection$._kToolbarScreenPadding*/get _kToolbarScreenPadding() {
      return 8;
    },
    /*text_selection$._kToolbarHeight*/get _kToolbarHeight() {
      return 44;
    },
    /*text_selection$._kToolbarContentDistanceBelow*/get _kToolbarContentDistanceBelow() {
      return 20;
    },
    /*text_selection$._kToolbarContentDistance*/get _kToolbarContentDistance() {
      return 8;
    },
    /*text_selection$.materialTextSelectionControls*/get materialTextSelectionControls() {
      return new text_selection$._MaterialTextSelectionControls.new();
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/text_selection.dart", {
    "package:flutter/src/material/text_selection.dart": text_selection$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_selection.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/text_selection.dart.lib.js"}');
  // Exports:
  return {
    src__material__text_selection: text_selection$
  };
}));

//# sourceMappingURL=text_selection.dart.lib.js.map
