define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart', 'packages/intl/src/intl_helpers.dart', 'packages/flutter/src/widgets/async.dart', 'packages/cloud_firestore/cloud_firestore.dart', 'packages/flutter/src/material/progress_indicator.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/strut_style.dart', 'packages/flutter/src/widgets/scroll_view.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/border_radius.dart'], (function load__packages__artif__widgets__product_right_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart, packages__intl__src__intl_helpers$46dart, packages__flutter__src__widgets__async$46dart, packages__cloud_firestore__cloud_firestore$46dart, packages__flutter__src__material__progress_indicator$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__strut_style$46dart, packages__flutter__src__widgets__scroll_view$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__border_radius$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__widget_span$46dart.src__widgets__text;
  const container = packages__flutter__src__widgets__widget_span$46dart.src__widgets__container;
  const intl = packages__intl__src__intl_helpers$46dart.intl;
  const async = packages__flutter__src__widgets__async$46dart.src__widgets__async;
  const cloud_firestore = packages__cloud_firestore__cloud_firestore$46dart.cloud_firestore;
  const progress_indicator = packages__flutter__src__material__progress_indicator$46dart.src__material__progress_indicator;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting__strut_style$46dart.src__painting__text_style;
  const scroll_view = packages__flutter__src__widgets__scroll_view$46dart.src__widgets__scroll_view;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const material_button = packages__flutter__src__material__icon_button$46dart.src__material__material_button;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  var product_right = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var DocumentSnapshotL = () => (DocumentSnapshotL = dart.constFn(dart.legacy(cloud_firestore.DocumentSnapshot)))();
  var StreamBuilderOfDocumentSnapshotL = () => (StreamBuilderOfDocumentSnapshotL = dart.constFn(async.StreamBuilder$(DocumentSnapshotL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var intN = () => (intN = dart.constFn(dart.nullable(core.int)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var PaddingL = () => (PaddingL = dart.constFn(dart.legacy(basic.Padding)))();
  var BuildContextL = () => (BuildContextL = dart.constFn(dart.legacy(framework.BuildContext)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var BuildContextLAndintLToPaddingL = () => (BuildContextLAndintLToPaddingL = dart.constFn(dart.fnType(PaddingL(), [BuildContextL(), intL()])))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(framework.Widget)))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  var RenderObjectWidgetL = () => (RenderObjectWidgetL = dart.constFn(dart.legacy(framework.RenderObjectWidget)))();
  var AsyncSnapshotL = () => (AsyncSnapshotL = dart.constFn(dart.legacy(async.AsyncSnapshot)))();
  var BuildContextLAndAsyncSnapshotLToRenderObjectWidgetL = () => (BuildContextLAndAsyncSnapshotLToRenderObjectWidgetL = dart.constFn(dart.fnType(RenderObjectWidgetL(), [BuildContextL(), AsyncSnapshotL()])))();
  const CT = Object.create(null);
  var L0 = "package:artif/widgets/product_right.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], _LocationL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 24,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/product_right.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4], _LocationL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 23,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/product_right.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 5,
        [EdgeInsets_right]: 30,
        [EdgeInsets_top]: 25,
        [EdgeInsets_left]: 30
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 38,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], _LocationL());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 45,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/product_right.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], _LocationL());
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 38,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/product_right.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 74,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 39,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], _LocationL());
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 78,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/product_right.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 37,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], _LocationL());
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 77,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/product_right.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24], _LocationL());
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 76,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/product_right.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 33,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 33,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverColor",
        [_Location_column]: 33,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 33,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 33,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32], _LocationL());
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 68,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/product_right.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], _LocationL());
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 66,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/product_right.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 27,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkWrap",
        [_Location_column]: 27,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 27,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 27,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40, C41 || CT.C41, C42 || CT.C42], _LocationL());
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 61,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/product_right.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46, C47 || CT.C47], _LocationL());
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 55,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/product_right.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 15,
        [EdgeInsets_right]: 30,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 30
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 99,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52], _LocationL());
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 99,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/product_right.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56], _LocationL());
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 92,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/product_right.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 30
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 101,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60, C61 || CT.C61], _LocationL());
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 113,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/product_right.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64], _LocationL());
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 112,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/product_right.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 23,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68, C69 || CT.C69], _LocationL());
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 109,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/product_right.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73], _LocationL());
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 35,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/product_right.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 17,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 35,
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
        [_Location_column]: 15,
        [_Location_line]: 33,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/product_right.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80, C81 || CT.C81], _LocationL());
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 27,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/product_right.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "stream",
        [_Location_column]: 9,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84, C85 || CT.C85], _LocationL());
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 16,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/product_right.dart"
      });
    }
  }, false);
  var productId$ = dart.privateName(product_right, "ProductRight.productId");
  product_right.ProductRight = class ProductRight extends framework.StatefulWidget {
    get productId() {
      return this[productId$];
    }
    set productId(value) {
      super.productId = value;
    }
    createState() {
      return new product_right._ProductRightState.new();
    }
  };
  (product_right.ProductRight.new = function(opts) {
    let productId = opts && 'productId' in opts ? opts.productId : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[productId$] = productId;
    product_right.ProductRight.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = product_right.ProductRight.prototype;
  dart.addTypeTests(product_right.ProductRight);
  dart.addTypeCaches(product_right.ProductRight);
  dart.setMethodSignature(product_right.ProductRight, () => ({
    __proto__: dart.getMethods(product_right.ProductRight.__proto__),
    createState: dart.fnType(dart.legacy(product_right._ProductRightState), [])
  }));
  dart.setLibraryUri(product_right.ProductRight, L0);
  dart.setFieldSignature(product_right.ProductRight, () => ({
    __proto__: dart.getFields(product_right.ProductRight.__proto__),
    productId: dart.finalFieldType(dart.dynamic)
  }));
  var C1;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C0;
  var C4;
  var C3;
  var C2;
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C5;
  var C8;
  var C9;
  var C7;
  var C6;
  var C12;
  var C13;
  var C11;
  var C10;
  var C14;
  var C17;
  var C18;
  var C16;
  var C15;
  var C21;
  var C20;
  var C19;
  var C24;
  var C23;
  var C22;
  var C27;
  var C28;
  var C29;
  var C30;
  var C31;
  var C32;
  var C26;
  var C25;
  var C35;
  var C36;
  var C34;
  var C33;
  var C39;
  var C40;
  var C41;
  var C42;
  var C38;
  var C37;
  var C45;
  var C46;
  var C47;
  var C44;
  var C43;
  var C48;
  var C51;
  var C52;
  var C50;
  var C49;
  var C55;
  var C56;
  var C54;
  var C53;
  var C57;
  var C60;
  var C61;
  var C59;
  var C58;
  var C64;
  var C63;
  var C62;
  var C67;
  var C68;
  var C69;
  var C66;
  var C65;
  var C72;
  var C73;
  var C71;
  var C70;
  var C76;
  var C77;
  var C75;
  var C74;
  var C80;
  var C81;
  var C79;
  var C78;
  var C84;
  var C85;
  var C83;
  var C82;
  product_right._ProductRightState = class _ProductRightState extends framework.State$(dart.legacy(product_right.ProductRight)) {
    build(context) {
      return new (StreamBuilderOfDocumentSnapshotL()).new({stream: cloud_firestore.FirebaseFirestore.instance.collection("Product").doc(StringL().as(this.widget.productId)).snapshots(), builder: dart.fn((context, snapshot) => {
          if (!dart.test(snapshot.hasData)) {
            return new basic.Center.new({child: new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C2 || CT.C2});
          }
          return new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidgetL().of([new basic.Expanded.new({flex: 5, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidgetL().of([new basic.Padding.new({padding: C5 || CT.C5, child: new text.Text.new(core.String.as(dart.dsend(snapshot.data, '_get', ["productName"])), {style: new text_style.TextStyle.new({fontSize: 34.0, color: new ui.Color.new(4281545523), fontFamily: "Montserrat", fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), new container.Container.new({height: 40.0, padding: new edge_insets.EdgeInsets.only({left: 30.0, bottom: 15.0}), child: new scroll_view.ListView.builder({scrollDirection: basic_types.Axis.horizontal, shrinkWrap: true, itemCount: intN().as(dart.dload(dart.dsend(snapshot.data, '_get', ["tags"]), 'length')), itemBuilder: dart.fn((context, index) => new basic.Padding.new({padding: C14 || CT.C14, child: new material_button.MaterialButton.new({onPressed: dart.fn(() => {
                            }, VoidToNull()), color: colors.Colors.blueGrey, hoverColor: colors.Colors.blueGrey._get(700), highlightColor: colors.Colors.blueGrey._get(800), shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(15.0)}), child: new container.Container.new({child: new basic.Center.new({child: new text.Text.new("# " + dart.str(dart.dsend(dart.dsend(snapshot.data, '_get', ["tags"]), '_get', [index])), {style: new text_style.TextStyle.new({fontFamily: "Montserrat", fontSize: 12.0, color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), BuildContextLAndintLToPaddingL()), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), new basic.Padding.new({padding: C48 || CT.C48, child: new text.Text.new("INR " + dart.str(this.currencyFormat.format(core.double.parse(core.String.as(dart.dsend(snapshot.data, '_get', ["basePrice"]))))), {style: new text_style.TextStyle.new({fontSize: 24.0, color: new ui.Color.new(4281545523), fontFamily: "Montserrat", fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), new container.Container.new({width: 700.0, padding: C57 || CT.C57, child: new container.Container.new({child: new text.Text.new(dart.str(dart.dsend(snapshot.data, '_get', ["shortDesc"])) + " \n\nDetails-\n" + dart.str(dart.dsend(snapshot.data, '_get', ["longDesc"])), {style: new text_style.TextStyle.new({fontSize: 15.0, color: new ui.Color.new(4281545523), fontFamily: "Montserrat"}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C65 || CT.C65})]), $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74})]), $creationLocationd_0dea112b090073317d4: C78 || CT.C78});
        }, BuildContextLAndAsyncSnapshotLToRenderObjectWidgetL()), $creationLocationd_0dea112b090073317d4: C82 || CT.C82});
    }
  };
  (product_right._ProductRightState.new = function() {
    this.currencyFormat = intl.NumberFormat.new("#,##0.00", "en_US");
    product_right._ProductRightState.__proto__.new.call(this);
    ;
  }).prototype = product_right._ProductRightState.prototype;
  dart.addTypeTests(product_right._ProductRightState);
  dart.addTypeCaches(product_right._ProductRightState);
  dart.setMethodSignature(product_right._ProductRightState, () => ({
    __proto__: dart.getMethods(product_right._ProductRightState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(product_right._ProductRightState, L0);
  dart.setFieldSignature(product_right._ProductRightState, () => ({
    __proto__: dart.getFields(product_right._ProductRightState.__proto__),
    currencyFormat: dart.finalFieldType(dart.legacy(intl.NumberFormat))
  }));
  dart.trackLibraries("packages/artif/widgets/product_right.dart", {
    "package:artif/widgets/product_right.dart": product_right
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["product_right.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKgB;;;;;;;AAGsB;IAAoB;;;QAFrC;;;AAAnB;;EAA8B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAQJ;AACxB,YAAO,uDACuB,AACrB,AACA,AACA,sDAFW,4BACP,AAAO,8CAEP,SAAC,SAAS;AACjB,yBAAK,AAAS,QAAD;AACX,kBAAO,8BACE;;AAGX,gBAAO,2CACkC,yCACrB,uBAIhB,8BACQ,UACC,0CACkC,yCACrB,uBAChB,oDAOS,iCACQ,WAAb,AAAS,QAAD,gBAAM,0BACP,wCACK,aACH,iBAAM,yBACD,0BACW,sIAI7B,qCACU,eACY,uCACZ,cACE,eAEM,mDACU,yCACV,2BACqB,WAAT,WAAb,AAAS,QAAD,gBAAM,mCACZ,SAAC,SAAS,UACd,sDAEE,mDACM;qDACG,oCACK,AAAQ,4BAAC,sBACL,AAAQ,4BAAC,aACzB,uEACsB,wCAAS,gBAE/B,oCACE,6BACE,kBACL,AAAmC,gBAAT,WAAR,WAAb,AAAS,QAAD,gBAAM,mBAAQ,KAAK,aACzB,0CACO,wBACF,aACI,ycASlC,sDAOS,kBACL,AAA0E,kBAAnE,AAAe,2BAAc,iCAAoB,WAAb,AAAS,QAAD,gBAAM,2BAClD,wCACK,aACH,iBAAM,yBACD,0BACW,wIAI7B,oCACS,sCAEA,oCACE,kBACqE,SAA1D,WAAb,AAAS,QAAD,gBAAM,iBAAa,6BAA8B,WAAb,AAAS,QAAD,gBAAM,uBACtD,wCACK,aACH,iBAAM,yBACD;;IAetC;;;IAxHM,sBAAiB,sBAAa,YAAY;;;EAyHlD","file":"../../../../../../../packages/artif/widgets/product_right.dart.lib.js"}');
  // Exports:
  return {
    widgets__product_right: product_right
  };
}));

//# sourceMappingURL=product_right.dart.lib.js.map
