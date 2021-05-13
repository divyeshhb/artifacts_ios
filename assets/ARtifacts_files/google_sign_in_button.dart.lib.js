define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/painting/shape_decoration.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/artif/utils/authentication.dart', 'packages/flutter/src/material/page.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/material/progress_indicator.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/painting/image_resolution.dart', 'packages/flutter/src/painting/strut_style.dart', 'packages/flutter/src/widgets/single_child_scroll_view.dart', 'packages/flutter/src/material/text_field.dart', 'packages/flutter/src/services/text_input.dart', 'packages/flutter/src/material/input_border.dart', 'packages/flutter/src/widgets/preferred_size.dart', 'packages/flutter/src/material/circle_avatar.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/material/icons.dart', 'packages/intl/src/intl_helpers.dart', 'packages/cloud_firestore_platform_interface/src/timestamp.dart', 'packages/firebase_dynamic_links/firebase_dynamic_links.dart', 'packages/flutter/src/material/card.dart', 'packages/qr_flutter/src/qr_image.dart', 'packages/flutter/src/widgets/async.dart', 'packages/cloud_firestore/cloud_firestore.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/decoration_image.dart', 'packages/flutter/src/painting/box_fit.dart', 'packages/flutter/src/painting/box_shadow.dart', 'packages/artif/widgets/time_formatter.dart', 'packages/artif/widgets/my_button.dart', 'packages/artif/widgets/product_right.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/widgets/implicit_animations.dart', 'packages/flutter/src/widgets/scroll_view.dart', 'packages/flutter/src/rendering/sliver_grid.dart', 'packages/artif/widgets/heading_main.dart', 'packages/artif/widgets/floating_quick_access_bar.dart'], (function load__packages__artif__widgets__google_sign_in_button_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__painting__shape_decoration$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__material__icon_button$46dart, packages__artif__utils__authentication$46dart, packages__flutter__src__material__page$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__material__progress_indicator$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__painting__image_resolution$46dart, packages__flutter__src__painting__strut_style$46dart, packages__flutter__src__widgets__single_child_scroll_view$46dart, packages__flutter__src__material__text_field$46dart, packages__flutter__src__services__text_input$46dart, packages__flutter__src__material__input_border$46dart, packages__flutter__src__widgets__preferred_size$46dart, packages__flutter__src__material__circle_avatar$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__material__icons$46dart, packages__intl__src__intl_helpers$46dart, packages__cloud_firestore_platform_interface__src__timestamp$46dart, packages__firebase_dynamic_links__firebase_dynamic_links$46dart, packages__flutter__src__material__card$46dart, packages__qr_flutter__src__qr_image$46dart, packages__flutter__src__widgets__async$46dart, packages__cloud_firestore__cloud_firestore$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__decoration_image$46dart, packages__flutter__src__painting__box_fit$46dart, packages__flutter__src__painting__box_shadow$46dart, packages__artif__widgets__time_formatter$46dart, packages__artif__widgets__my_button$46dart, packages__artif__widgets__product_right$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__widgets__implicit_animations$46dart, packages__flutter__src__widgets__scroll_view$46dart, packages__flutter__src__rendering__sliver_grid$46dart, packages__artif__widgets__heading_main$46dart, packages__artif__widgets__floating_quick_access_bar$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const container = packages__flutter__src__widgets__widget_span$46dart.src__widgets__container;
  const navigator = packages__flutter__src__widgets__widget_span$46dart.src__widgets__navigator;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const image = packages__flutter__src__widgets__widget_span$46dart.src__widgets__image;
  const text = packages__flutter__src__widgets__widget_span$46dart.src__widgets__text;
  const editable_text = packages__flutter__src__widgets__widget_span$46dart.src__widgets__editable_text;
  const focus_manager = packages__flutter__src__widgets__widget_span$46dart.src__widgets__focus_manager;
  const focus_scope = packages__flutter__src__widgets__widget_span$46dart.src__widgets__focus_scope;
  const media_query = packages__flutter__src__widgets__widget_span$46dart.src__widgets__media_query;
  const scroll_physics = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scroll_physics;
  const shape_decoration = packages__flutter__src__painting__shape_decoration$46dart.src__painting__shape_decoration;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const material_button = packages__flutter__src__material__icon_button$46dart.src__material__material_button;
  const dialog = packages__flutter__src__material__icon_button$46dart.src__material__dialog;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const input_decorator = packages__flutter__src__material__icon_button$46dart.src__material__input_decorator;
  const ink_well = packages__flutter__src__material__icon_button$46dart.src__material__ink_well;
  const text_button = packages__flutter__src__material__icon_button$46dart.src__material__text_button;
  const scaffold = packages__flutter__src__material__icon_button$46dart.src__material__scaffold;
  const authentication = packages__artif__utils__authentication$46dart.utils__authentication;
  const page = packages__flutter__src__material__page$46dart.src__material__page;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const progress_indicator = packages__flutter__src__material__progress_indicator$46dart.src__material__progress_indicator;
  const animations = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animations;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const image_resolution = packages__flutter__src__painting__image_resolution$46dart.src__painting__image_resolution;
  const text_style = packages__flutter__src__painting__strut_style$46dart.src__painting__text_style;
  const single_child_scroll_view = packages__flutter__src__widgets__single_child_scroll_view$46dart.src__widgets__single_child_scroll_view;
  const text_field = packages__flutter__src__material__text_field$46dart.src__material__text_field;
  const text_input = packages__flutter__src__services__text_input$46dart.src__services__text_input;
  const input_border = packages__flutter__src__material__input_border$46dart.src__material__input_border;
  const preferred_size = packages__flutter__src__widgets__preferred_size$46dart.src__widgets__preferred_size;
  const circle_avatar = packages__flutter__src__material__circle_avatar$46dart.src__material__circle_avatar;
  const _network_image_web = packages__flutter__src__painting___network_image_web$46dart.src__painting___network_image_web;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const intl = packages__intl__src__intl_helpers$46dart.intl;
  const timestamp = packages__cloud_firestore_platform_interface__src__timestamp$46dart.src__timestamp;
  const firebase_dynamic_links = packages__firebase_dynamic_links__firebase_dynamic_links$46dart.firebase_dynamic_links;
  const card = packages__flutter__src__material__card$46dart.src__material__card;
  const qr_image = packages__qr_flutter__src__qr_image$46dart.src__qr_image;
  const async$ = packages__flutter__src__widgets__async$46dart.src__widgets__async;
  const cloud_firestore = packages__cloud_firestore__cloud_firestore$46dart.cloud_firestore;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const decoration_image = packages__flutter__src__painting__decoration_image$46dart.src__painting__decoration_image;
  const box_fit = packages__flutter__src__painting__box_fit$46dart.src__painting__box_fit;
  const box_shadow = packages__flutter__src__painting__box_shadow$46dart.src__painting__box_shadow;
  const time_formatter = packages__artif__widgets__time_formatter$46dart.widgets__time_formatter;
  const my_button = packages__artif__widgets__my_button$46dart.widgets__my_button;
  const product_right = packages__artif__widgets__product_right$46dart.widgets__product_right;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const implicit_animations = packages__flutter__src__widgets__implicit_animations$46dart.src__widgets__implicit_animations;
  const scroll_view = packages__flutter__src__widgets__scroll_view$46dart.src__widgets__scroll_view;
  const sliver_grid = packages__flutter__src__rendering__sliver_grid$46dart.src__rendering__sliver_grid;
  const heading_main = packages__artif__widgets__heading_main$46dart.widgets__heading_main;
  const floating_quick_access_bar = packages__artif__widgets__floating_quick_access_bar$46dart.widgets__floating_quick_access_bar;
  var google_sign_in_button = Object.create(dart.library);
  var auth_dialog = Object.create(dart.library);
  var top_bar_contents = Object.create(dart.library);
  var product_page = Object.create(dart.library);
  var tile_card = Object.create(dart.library);
  var tiles_main = Object.create(dart.library);
  var product_catalog = Object.create(dart.library);
  var home_page = Object.create(dart.library);
  var $trim = dartx.trim;
  var $isEmpty = dartx.isEmpty;
  var $contains = dartx.contains;
  var $toString = dartx.toString;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $length = dartx.length;
  dart._checkModuleNullSafetyMode(false);
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var HomePageL = () => (HomePageL = dart.constFn(dart.legacy(home_page.HomePage)))();
  var BuildContextL = () => (BuildContextL = dart.constFn(dart.legacy(framework.BuildContext)))();
  var BuildContextLToHomePageL = () => (BuildContextLToHomePageL = dart.constFn(dart.fnType(HomePageL(), [BuildContextL()])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var StringLToNull = () => (StringLToNull = dart.constFn(dart.fnType(core.Null, [StringL()])))();
  var dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  var FutureLOfNull = () => (FutureLOfNull = dart.constFn(dart.legacy(FutureOfNull())))();
  var VoidToFutureLOfNull = () => (VoidToFutureLOfNull = dart.constFn(dart.fnType(FutureLOfNull(), [])))();
  var ColorL = () => (ColorL = dart.constFn(dart.legacy(ui.Color)))();
  var AlwaysStoppedAnimationOfColorL = () => (AlwaysStoppedAnimationOfColorL = dart.constFn(animations.AlwaysStoppedAnimation$(ColorL())))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(framework.Widget)))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var boolLToNull = () => (boolLToNull = dart.constFn(dart.fnType(core.Null, [boolL()])))();
  var ProductCatalogL = () => (ProductCatalogL = dart.constFn(dart.legacy(product_catalog.ProductCatalog)))();
  var BuildContextLToProductCatalogL = () => (BuildContextLToProductCatalogL = dart.constFn(dart.fnType(ProductCatalogL(), [BuildContextL()])))();
  var AuthDialogL = () => (AuthDialogL = dart.constFn(dart.legacy(auth_dialog.AuthDialog)))();
  var BuildContextLToAuthDialogL = () => (BuildContextLToAuthDialogL = dart.constFn(dart.fnType(AuthDialogL(), [BuildContextL()])))();
  var TimestampL = () => (TimestampL = dart.constFn(dart.legacy(timestamp.Timestamp)))();
  var AlertDialogL = () => (AlertDialogL = dart.constFn(dart.legacy(dialog.AlertDialog)))();
  var BuildContextLToAlertDialogL = () => (BuildContextLToAlertDialogL = dart.constFn(dart.fnType(AlertDialogL(), [BuildContextL()])))();
  var DocumentSnapshotL = () => (DocumentSnapshotL = dart.constFn(dart.legacy(cloud_firestore.DocumentSnapshot)))();
  var StreamBuilderOfDocumentSnapshotL = () => (StreamBuilderOfDocumentSnapshotL = dart.constFn(async$.StreamBuilder$(DocumentSnapshotL())))();
  var BoxShadowL = () => (BoxShadowL = dart.constFn(dart.legacy(box_shadow.BoxShadow)))();
  var JSArrayOfBoxShadowL = () => (JSArrayOfBoxShadowL = dart.constFn(_interceptors.JSArray$(BoxShadowL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AsyncSnapshotL = () => (AsyncSnapshotL = dart.constFn(dart.legacy(async$.AsyncSnapshot)))();
  var BuildContextLAndAsyncSnapshotLToWidgetL = () => (BuildContextLAndAsyncSnapshotLToWidgetL = dart.constFn(dart.fnType(WidgetL(), [BuildContextL(), AsyncSnapshotL()])))();
  var ProductPageL = () => (ProductPageL = dart.constFn(dart.legacy(product_page.ProductPage)))();
  var BuildContextLToProductPageL = () => (BuildContextLToProductPageL = dart.constFn(dart.fnType(ProductPageL(), [BuildContextL()])))();
  var QuerySnapshotL = () => (QuerySnapshotL = dart.constFn(dart.legacy(cloud_firestore.QuerySnapshot)))();
  var StreamBuilderOfQuerySnapshotL = () => (StreamBuilderOfQuerySnapshotL = dart.constFn(async$.StreamBuilder$(QuerySnapshotL())))();
  var TileCardL = () => (TileCardL = dart.constFn(dart.legacy(tile_card.TileCard)))();
  var BuildContextLAndintLToTileCardL = () => (BuildContextLAndintLToTileCardL = dart.constFn(dart.fnType(TileCardL(), [BuildContextL(), intL()])))();
  var SingleChildRenderObjectWidgetL = () => (SingleChildRenderObjectWidgetL = dart.constFn(dart.legacy(framework.SingleChildRenderObjectWidget)))();
  var AsyncSnapshotOfQuerySnapshotL = () => (AsyncSnapshotOfQuerySnapshotL = dart.constFn(async$.AsyncSnapshot$(QuerySnapshotL())))();
  var AsyncSnapshotLOfQuerySnapshotL = () => (AsyncSnapshotLOfQuerySnapshotL = dart.constFn(dart.legacy(AsyncSnapshotOfQuerySnapshotL())))();
  var BuildContextLAndAsyncSnapshotLOfQuerySnapshotLToSingleChildRenderObjectWidgetL = () => (BuildContextLAndAsyncSnapshotLOfQuerySnapshotLToSingleChildRenderObjectWidgetL = dart.constFn(dart.fnType(SingleChildRenderObjectWidgetL(), [BuildContextL(), AsyncSnapshotLOfQuerySnapshotL()])))();
  const CT = Object.create(null);
  var L5 = "package:artif/widgets/tiles_main.dart";
  var L0 = "package:artif/widgets/google_sign_in_button.dart";
  var L3 = "package:artif/screens/product_page.dart";
  var L2 = "package:artif/widgets/top_bar_contents.dart";
  var L4 = "package:artif/widgets/tile_card.dart";
  var L7 = "package:artif/screens/home_page.dart";
  var L1 = "package:artif/widgets/auth_dialog.dart";
  var L6 = "package:artif/screens/product_catalog.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], _LocationL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 37,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/google_sign_in_button.dart"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "valueColor",
        [_Location_column]: 19,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], _LocationL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 57,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/google_sign_in_button.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "image",
        [_Location_column]: 23,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 68,
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
        [_Location_column]: 21,
        [_Location_line]: 66,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/google_sign_in_button.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 20
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14], _LocationL());
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 72,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/google_sign_in_button.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 72,
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
        [_Location_column]: 21,
        [_Location_line]: 70,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/google_sign_in_button.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 19,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], _LocationL());
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 62,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/google_sign_in_button.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27], _LocationL());
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 54,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/google_sign_in_button.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 9,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 9,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 9,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightElevation",
        [_Location_column]: 9,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35], _LocationL());
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 23,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/google_sign_in_button.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 23,
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
        [_Location_column]: 12,
        [_Location_line]: 15,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/google_sign_in_button.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 16
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44], _LocationL());
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 85,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47], _LocationL());
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 84,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 26,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50], _LocationL());
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 95,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 20
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 21,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 104,
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
        [_Location_column]: 26,
        [_Location_line]: 101,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60], _LocationL());
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 96,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 20
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusNode",
        [_Location_column]: 21,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 21,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textInputAction",
        [_Location_column]: 21,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 21,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 21,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 21,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSubmitted",
        [_Location_column]: 21,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 21,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65, C66 || CT.C66, C67 || CT.C67, C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71, C72 || CT.C72], _LocationL());
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 118,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 118,
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
        [_Location_column]: 17,
        [_Location_line]: 113,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 26,
        [_Location_line]: 159,
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
        [_Location_column]: 17,
        [_Location_line]: 159,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 21,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83, C84 || CT.C84], _LocationL());
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 165,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87, C88 || CT.C88], _LocationL());
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 160,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusNode",
        [_Location_column]: 21,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 21,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textInputAction",
        [_Location_column]: 21,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 21,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 21,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 21,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 21,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSubmitted",
        [_Location_column]: 21,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 21,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91, C92 || CT.C92, C93 || CT.C93, C94 || CT.C94, C95 || CT.C95, C96 || CT.C96, C97 || CT.C97, C98 || CT.C98, C99 || CT.C99, C100 || CT.C100], _LocationL());
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 181,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103, C104 || CT.C104], _LocationL());
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C102 || CT.C102,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 176,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 20
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 63,
        [_Location_line]: 265,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "strokeWidth",
        [_Location_column]: 41,
        [_Location_line]: 303,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "valueColor",
        [_Location_column]: 41,
        [_Location_line]: 304,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110], _LocationL());
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 46,
        [_Location_line]: 302,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 39,
        [_Location_line]: 300,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 39,
        [_Location_line]: 301,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 39,
        [_Location_line]: 302,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113, C114 || CT.C114, C115 || CT.C115], _LocationL());
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 299,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 311,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 39,
        [_Location_line]: 312,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.constList([C118 || CT.C118, C119 || CT.C119], _LocationL());
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 310,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 294,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 298,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.constList([C122 || CT.C122, C123 || CT.C123], _LocationL());
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C121 || CT.C121,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 293,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 29,
        [_Location_line]: 234,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverColor",
        [_Location_column]: 29,
        [_Location_line]: 235,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 29,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 29,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 29,
        [_Location_line]: 290,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 293,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.constList([C126 || CT.C126, C127 || CT.C127, C128 || CT.C128, C129 || CT.C129, C130 || CT.C130, C131 || CT.C131], _LocationL());
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C125 || CT.C125,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 233,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 27,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 233,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.constList([C134 || CT.C134, C135 || CT.C135], _LocationL());
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C133 || CT.C133,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 231,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 25,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138, C139 || CT.C139], _LocationL());
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C137 || CT.C137,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 229,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 32,
        [_Location_line]: 321,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.constList([C142 || CT.C142], _LocationL());
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 321,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "strokeWidth",
        [_Location_column]: 41,
        [_Location_line]: 391,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "valueColor",
        [_Location_column]: 41,
        [_Location_line]: 392,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.constList([C145 || CT.C145, C146 || CT.C146], _LocationL());
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C144 || CT.C144,
        [_Location_name]: null,
        [_Location_column]: 46,
        [_Location_line]: 390,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 39,
        [_Location_line]: 388,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 39,
        [_Location_line]: 389,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 39,
        [_Location_line]: 390,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.constList([C149 || CT.C149, C150 || CT.C150, C151 || CT.C151], _LocationL());
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C148 || CT.C148,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 387,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 399,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 39,
        [_Location_line]: 400,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.constList([C154 || CT.C154, C155 || CT.C155], _LocationL());
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C153 || CT.C153,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 398,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 382,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 386,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.constList([C158 || CT.C158, C159 || CT.C159], _LocationL());
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C157 || CT.C157,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 381,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 29,
        [_Location_line]: 327,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverColor",
        [_Location_column]: 29,
        [_Location_line]: 328,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 29,
        [_Location_line]: 329,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 29,
        [_Location_line]: 330,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 29,
        [_Location_line]: 378,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 381,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.constList([C162 || CT.C162, C163 || CT.C163, C164 || CT.C164, C165 || CT.C165, C166 || CT.C166, C167 || CT.C167], _LocationL());
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C161 || CT.C161,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 326,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 27,
        [_Location_line]: 325,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 326,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.constList([C170 || CT.C170, C171 || CT.C171], _LocationL());
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C169 || CT.C169,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 324,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 25,
        [_Location_line]: 323,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 324,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.constList([C174 || CT.C174, C175 || CT.C175], _LocationL());
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C173 || CT.C173,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 322,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 21,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 21,
        [_Location_line]: 227,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 228,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.constList([C178 || CT.C178, C179 || CT.C179, C180 || CT.C180], _LocationL());
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C177 || CT.C177,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 225,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C182() {
      return C182 = dart.constList([C183 || CT.C183, C184 || CT.C184], _LocationL());
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C182 || CT.C182,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 223,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 419,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 420,
        [_Location_file]: null
      });
    },
    get C187() {
      return C187 = dart.constList([C188 || CT.C188, C189 || CT.C189], _LocationL());
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C187 || CT.C187,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 418,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 27,
        [_Location_line]: 415,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 418,
        [_Location_file]: null
      });
    },
    get C191() {
      return C191 = dart.constList([C192 || CT.C192, C193 || CT.C193], _LocationL());
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C191 || CT.C191,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 414,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 414,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.constList([C196 || CT.C196], _LocationL());
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C195 || CT.C195,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 413,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 428,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 40,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 40
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 21,
        [_Location_line]: 435,
        [_Location_file]: null
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 436,
        [_Location_file]: null
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 21,
        [_Location_line]: 437,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.constList([C201 || CT.C201, C202 || CT.C202, C203 || CT.C203], _LocationL());
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C200 || CT.C200,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 434,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 430,
        [_Location_file]: null
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 434,
        [_Location_file]: null
      });
    },
    get C205() {
      return C205 = dart.constList([C206 || CT.C206, C207 || CT.C207], _LocationL());
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C205 || CT.C205,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 429,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 26,
        [_Location_line]: 440,
        [_Location_file]: null
      });
    },
    get C209() {
      return C209 = dart.constList([C210 || CT.C210], _LocationL());
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C209 || CT.C209,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 440,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 441,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 24,
        [_Location_line]: 441,
        [_Location_file]: null
      });
    },
    get C213() {
      return C213 = dart.constList([C214 || CT.C214], _LocationL());
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C213 || CT.C213,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 441,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 26,
        [_Location_line]: 442,
        [_Location_file]: null
      });
    },
    get C216() {
      return C216 = dart.constList([C217 || CT.C217], _LocationL());
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C216 || CT.C216,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 442,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 446,
        [_Location_file]: null
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 21,
        [_Location_line]: 447,
        [_Location_file]: null
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 448,
        [_Location_file]: null
      });
    },
    get C220() {
      return C220 = dart.constList([C221 || CT.C221, C222 || CT.C222, C223 || CT.C223], _LocationL());
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C220 || CT.C220,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 445,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 444,
        [_Location_file]: null
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 445,
        [_Location_file]: null
      });
    },
    get C225() {
      return C225 = dart.constList([C226 || CT.C226, C227 || CT.C227], _LocationL());
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C225 || CT.C225,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 443,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 15,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C229() {
      return C229 = dart.constList([C230 || CT.C230, C231 || CT.C231, C232 || CT.C232], _LocationL());
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C229 || CT.C229,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 80,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C234() {
      return C234 = dart.constList([C235 || CT.C235, C236 || CT.C236, C237 || CT.C237], _LocationL());
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C234 || CT.C234,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 77,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C239() {
      return C239 = dart.constList([C240 || CT.C240, C241 || CT.C241], _LocationL());
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C239 || CT.C239,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 75,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C243() {
      return C243 = dart.constList([C244 || CT.C244], _LocationL());
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C243 || CT.C243,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 74,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 7,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C246() {
      return C246 = dart.constList([C247 || CT.C247, C248 || CT.C248, C249 || CT.C249], _LocationL());
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C246 || CT.C246,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 69,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/auth_dialog.dart"
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C251() {
      return C251 = dart.constList([C252 || CT.C252, C253 || CT.C253], _LocationL());
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C251 || CT.C251,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 44,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 57,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C256() {
      return C256 = dart.constList([C257 || CT.C257, C258 || CT.C258], _LocationL());
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C256 || CT.C256,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 43,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 30,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C260() {
      return C260 = dart.constList([C261 || CT.C261], _LocationL());
    },
    get C259() {
      return C259 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C260 || CT.C260,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 66,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 51,
        [_Location_line]: 78,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C264() {
      return C264 = dart.constList([C265 || CT.C265, C266 || CT.C266], _LocationL());
    },
    get C263() {
      return C263 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C264 || CT.C264,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 85,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 25,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C268() {
      return C268 = dart.constList([C269 || CT.C269, C270 || CT.C270], _LocationL());
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C268 || CT.C268,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 82,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C273() {
      return C273 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHover",
        [_Location_column]: 23,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C274() {
      return C274 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 23,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C272() {
      return C272 = dart.constList([C273 || CT.C273, C274 || CT.C274, C275 || CT.C275], _LocationL());
    },
    get C271() {
      return C271 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C272 || CT.C272,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 67,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 30,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C277() {
      return C277 = dart.constList([C278 || CT.C278], _LocationL());
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C277 || CT.C277,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 98,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C279() {
      return C279 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 51,
        [_Location_line]: 110,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C281() {
      return C281 = dart.constList([C282 || CT.C282, C283 || CT.C283], _LocationL());
    },
    get C280() {
      return C280 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C281 || CT.C281,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 117,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 25,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C285() {
      return C285 = dart.constList([C286 || CT.C286, C287 || CT.C287], _LocationL());
    },
    get C284() {
      return C284 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C285 || CT.C285,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 114,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C290() {
      return C290 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHover",
        [_Location_column]: 23,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 23,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C289() {
      return C289 = dart.constList([C290 || CT.C290, C291 || CT.C291, C292 || CT.C292], _LocationL());
    },
    get C288() {
      return C288 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C289 || CT.C289,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 99,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 30,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C294() {
      return C294 = dart.constList([C295 || CT.C295], _LocationL());
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C294 || CT.C294,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 130,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C297() {
      return C297 = dart.constList([C298 || CT.C298, C299 || CT.C299], _LocationL());
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C297 || CT.C297,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 143,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C302() {
      return C302 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 25,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C303() {
      return C303 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C301() {
      return C301 = dart.constList([C302 || CT.C302, C303 || CT.C303], _LocationL());
    },
    get C300() {
      return C300 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C301 || CT.C301,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 140,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C306() {
      return C306 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHover",
        [_Location_column]: 23,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C307() {
      return C307 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 23,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C308() {
      return C308 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C305() {
      return C305 = dart.constList([C306 || CT.C306, C307 || CT.C307, C308 || CT.C308], _LocationL());
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C305 || CT.C305,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 131,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C310() {
      return C310 = dart.constList([C22 || CT.C22, C23 || CT.C23], _LocationL());
    },
    get C309() {
      return C309 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C310 || CT.C310,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 63,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C312() {
      return C312 = dart.constList([C313 || CT.C313], _LocationL());
    },
    get C311() {
      return C311 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C312 || CT.C312,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 62,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C316() {
      return C316 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C315() {
      return C315 = dart.constList([C316 || CT.C316], _LocationL());
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C315 || CT.C315,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 171,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 49,
        [_Location_line]: 184,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C319() {
      return C319 = dart.constList([C320 || CT.C320, C321 || CT.C321], _LocationL());
    },
    get C318() {
      return C318 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C319 || CT.C319,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 189,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C324() {
      return C324 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 43,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 37,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C323() {
      return C323 = dart.constList([C324 || CT.C324, C325 || CT.C325], _LocationL());
    },
    get C322() {
      return C322 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C323 || CT.C323,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 204,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C326() {
      return C326 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 208,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C329() {
      return C329 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "radius",
        [_Location_column]: 29,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundImage",
        [_Location_column]: 29,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C331() {
      return C331 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C328() {
      return C328 = dart.constList([C329 || CT.C329, C330 || CT.C330, C331 || CT.C331], _LocationL());
    },
    get C327() {
      return C327 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C328 || CT.C328,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 198,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C333() {
      return C333 = dart.constList([C334 || CT.C334], _LocationL());
    },
    get C332() {
      return C332 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C333 || CT.C333,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 210,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C337() {
      return C337 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 34,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C336() {
      return C336 = dart.constList([C337 || CT.C337, C338 || CT.C338], _LocationL());
    },
    get C335() {
      return C335 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C336 || CT.C336,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 211,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C341() {
      return C341 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C340() {
      return C340 = dart.constList([C341 || CT.C341], _LocationL());
    },
    get C339() {
      return C339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C340 || CT.C340,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 220,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C342() {
      return C342 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 65,
        [_Location_line]: 236,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C343() {
      return C343 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 255,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C346() {
      return C346 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C347() {
      return C347 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 39,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C345() {
      return C345 = dart.constList([C346 || CT.C346, C347 || CT.C347], _LocationL());
    },
    get C344() {
      return C344 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C345 || CT.C345,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 256,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C350() {
      return C350 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 250,
        [_Location_file]: null
      });
    },
    get C351() {
      return C351 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C349() {
      return C349 = dart.constList([C350 || CT.C350, C351 || CT.C351], _LocationL());
    },
    get C348() {
      return C348 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C349 || CT.C349,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 249,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C354() {
      return C354 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 29,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C355() {
      return C355 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverColor",
        [_Location_column]: 29,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C356() {
      return C356 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 29,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C357() {
      return C357 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 29,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C358() {
      return C358 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 29,
        [_Location_line]: 246,
        [_Location_file]: null
      });
    },
    get C359() {
      return C359 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 249,
        [_Location_file]: null
      });
    },
    get C353() {
      return C353 = dart.constList([C354 || CT.C354, C355 || CT.C355, C356 || CT.C356, C357 || CT.C357, C358 || CT.C358, C359 || CT.C359], _LocationL());
    },
    get C352() {
      return C352 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C353 || CT.C353,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 221,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C362() {
      return C362 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C361() {
      return C361 = dart.constList([C362 || CT.C362], _LocationL());
    },
    get C360() {
      return C360 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C361 || CT.C361,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 196,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C365() {
      return C365 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHover",
        [_Location_column]: 17,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C366() {
      return C366 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 17,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C367() {
      return C367 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C364() {
      return C364 = dart.constList([C365 || CT.C365, C366 || CT.C366, C367 || CT.C367], _LocationL());
    },
    get C363() {
      return C363 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C364 || CT.C364,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 174,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C370() {
      return C370 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C371() {
      return C371 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C369() {
      return C369 = dart.constList([C370 || CT.C370, C371 || CT.C371], _LocationL());
    },
    get C368() {
      return C368 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C369 || CT.C369,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 40,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C374() {
      return C374 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C375() {
      return C375 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C373() {
      return C373 = dart.constList([C374 || CT.C374, C375 || CT.C375], _LocationL());
    },
    get C372() {
      return C372 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C373 || CT.C373,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 38,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C378() {
      return C378 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C379() {
      return C379 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C377() {
      return C377 = dart.constList([C378 || CT.C378, C379 || CT.C379], _LocationL());
    },
    get C376() {
      return C376 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C377 || CT.C377,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 36,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C382() {
      return C382 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "preferredSize",
        [_Location_column]: 7,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C383() {
      return C383 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C381() {
      return C381 = dart.constList([C382 || CT.C382, C383 || CT.C383], _LocationL());
    },
    get C380() {
      return C380 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C381 || CT.C381,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 34,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/top_bar_contents.dart"
      });
    },
    get C386() {
      return C386 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C387() {
      return C387 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C385() {
      return C385 = dart.constList([C386 || CT.C386, C387 || CT.C387], _LocationL());
    },
    get C384() {
      return C384 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C385 || CT.C385,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 66,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C390() {
      return C390 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C389() {
      return C389 = dart.constList([C390 || CT.C390], _LocationL());
    },
    get C388() {
      return C388 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C389 || CT.C389,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 79,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C393() {
      return C393 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C394() {
      return C394 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C392() {
      return C392 = dart.constList([C393 || CT.C393, C394 || CT.C394], _LocationL());
    },
    get C391() {
      return C391 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C392 || CT.C392,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 75,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C397() {
      return C397 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C398() {
      return C398 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "version",
        [_Location_column]: 27,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C399() {
      return C399 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 27,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C396() {
      return C396 = dart.constList([C397 || CT.C397, C398 || CT.C398, C399 || CT.C399], _LocationL());
    },
    get C395() {
      return C395 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C396 || CT.C396,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 96,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C402() {
      return C402 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 25,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C403() {
      return C403 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 25,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C404() {
      return C404 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C401() {
      return C401 = dart.constList([C402 || CT.C402, C403 || CT.C403, C404 || CT.C404], _LocationL());
    },
    get C400() {
      return C400 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C401 || CT.C401,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 93,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C407() {
      return C407 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C408() {
      return C408 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C406() {
      return C406 = dart.constList([C407 || CT.C407, C408 || CT.C408], _LocationL());
    },
    get C405() {
      return C405 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C406 || CT.C406,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 91,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C411() {
      return C411 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 21,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C412() {
      return C412 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C410() {
      return C410 = dart.constList([C411 || CT.C411, C412 || CT.C412], _LocationL());
    },
    get C409() {
      return C409 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C410 || CT.C410,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 89,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C415() {
      return C415 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 21,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C414() {
      return C414 = dart.constList([C415 || CT.C415], _LocationL());
    },
    get C413() {
      return C413 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C414 || CT.C414,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 104,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C418() {
      return C418 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C419() {
      return C419 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C417() {
      return C417 = dart.constList([C418 || CT.C418, C419 || CT.C419], _LocationL());
    },
    get C416() {
      return C416 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C417 || CT.C417,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 107,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C422() {
      return C422 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C423() {
      return C423 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C421() {
      return C421 = dart.constList([C422 || CT.C422, C423 || CT.C423], _LocationL());
    },
    get C420() {
      return C420 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C421 || CT.C421,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 86,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C426() {
      return C426 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C427() {
      return C427 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C428() {
      return C428 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C425() {
      return C425 = dart.constList([C426 || CT.C426, C427 || CT.C427, C428 || CT.C428], _LocationL());
    },
    get C424() {
      return C424 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C425 || CT.C425,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 83,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C431() {
      return C431 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C432() {
      return C432 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 13,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C433() {
      return C433 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actionsPadding",
        [_Location_column]: 13,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C434() {
      return C434 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 13,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C430() {
      return C430 = dart.constList([C431 || CT.C431, C432 || CT.C432, C433 || CT.C433, C434 || CT.C434], _LocationL());
    },
    get C429() {
      return C429 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C430 || CT.C430,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 65,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C437() {
      return C437 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 31,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C436() {
      return C436 = dart.constList([C437 || CT.C437], _LocationL());
    },
    get C435() {
      return C435 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C436 || CT.C436,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 132,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C440() {
      return C440 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "preferredSize",
        [_Location_column]: 9,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C441() {
      return C441 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C439() {
      return C439 = dart.constList([C440 || CT.C440, C441 || CT.C441], _LocationL());
    },
    get C438() {
      return C438 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C439 || CT.C439,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 130,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C442() {
      return C442 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 142,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C445() {
      return C445 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C444() {
      return C444 = dart.constList([C445 || CT.C445], _LocationL());
    },
    get C443() {
      return C443 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C444 || CT.C444,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 141,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C446() {
      return C446 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 18,
        [EdgeInsets_right]: 18,
        [EdgeInsets_top]: 18,
        [EdgeInsets_left]: 18
      });
    },
    get C449() {
      return C449 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 41,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C448() {
      return C448 = dart.constList([C449 || CT.C449], _LocationL());
    },
    get C447() {
      return C447 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C448 || CT.C448,
        [_Location_name]: null,
        [_Location_column]: 46,
        [_Location_line]: 173,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C452() {
      return C452 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 39,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C453() {
      return C453 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 39,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C451() {
      return C451 = dart.constList([C452 || CT.C452, C453 || CT.C453], _LocationL());
    },
    get C450() {
      return C450 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C451 || CT.C451,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 171,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C456() {
      return C456 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 37,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C457() {
      return C457 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 37,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C455() {
      return C455 = dart.constList([C456 || CT.C456, C457 || CT.C457], _LocationL());
    },
    get C454() {
      return C454 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C455 || CT.C455,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 169,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C460() {
      return C460 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 35,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C461() {
      return C461 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C459() {
      return C459 = dart.constList([C460 || CT.C460, C461 || CT.C461], _LocationL());
    },
    get C458() {
      return C458 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C459 || CT.C459,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 167,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C464() {
      return C464 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 57,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C465() {
      return C465 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 53,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C463() {
      return C463 = dart.constList([C464 || CT.C464, C465 || CT.C465], _LocationL());
    },
    get C462() {
      return C462 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C463 || CT.C463,
        [_Location_name]: null,
        [_Location_column]: 51,
        [_Location_line]: 218,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C468() {
      return C468 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 57,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C469() {
      return C469 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 53,
        [_Location_line]: 242,
        [_Location_file]: null
      });
    },
    get C467() {
      return C467 = dart.constList([C468 || CT.C468, C469 || CT.C469], _LocationL());
    },
    get C466() {
      return C466 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C467 || CT.C467,
        [_Location_name]: null,
        [_Location_column]: 51,
        [_Location_line]: 233,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C472() {
      return C472 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 49,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C473() {
      return C473 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 49,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C471() {
      return C471 = dart.constList([C472 || CT.C472, C473 || CT.C473], _LocationL());
    },
    get C470() {
      return C470 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C471 || CT.C471,
        [_Location_name]: null,
        [_Location_column]: 47,
        [_Location_line]: 214,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C476() {
      return C476 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 57,
        [_Location_line]: 259,
        [_Location_file]: null
      });
    },
    get C477() {
      return C477 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 53,
        [_Location_line]: 264,
        [_Location_file]: null
      });
    },
    get C475() {
      return C475 = dart.constList([C476 || CT.C476, C477 || CT.C477], _LocationL());
    },
    get C474() {
      return C474 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C475 || CT.C475,
        [_Location_name]: null,
        [_Location_column]: 51,
        [_Location_line]: 256,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C480() {
      return C480 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 59,
        [_Location_line]: 273,
        [_Location_file]: null
      });
    },
    get C481() {
      return C481 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 59,
        [_Location_line]: 274,
        [_Location_file]: null
      });
    },
    get C479() {
      return C479 = dart.constList([C480 || CT.C480, C481 || CT.C481], _LocationL());
    },
    get C478() {
      return C478 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C479 || CT.C479,
        [_Location_name]: null,
        [_Location_column]: 57,
        [_Location_line]: 272,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C484() {
      return C484 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "secondsRemaining",
        [_Location_column]: 59,
        [_Location_line]: 284,
        [_Location_file]: null
      });
    },
    get C485() {
      return C485 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "whenTimeExpires",
        [_Location_column]: 59,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C486() {
      return C486 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "countDownTimerStyle",
        [_Location_column]: 59,
        [_Location_line]: 294,
        [_Location_file]: null
      });
    },
    get C483() {
      return C483 = dart.constList([C484 || CT.C484, C485 || CT.C485, C486 || CT.C486], _LocationL());
    },
    get C482() {
      return C482 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C483 || CT.C483,
        [_Location_name]: null,
        [_Location_column]: 57,
        [_Location_line]: 283,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C489() {
      return C489 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 49,
        [_Location_line]: 253,
        [_Location_file]: null
      });
    },
    get C490() {
      return C490 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 49,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C488() {
      return C488 = dart.constList([C489 || CT.C489, C490 || CT.C490], _LocationL());
    },
    get C487() {
      return C487 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C488 || CT.C488,
        [_Location_name]: null,
        [_Location_column]: 47,
        [_Location_line]: 252,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C493() {
      return C493 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 45,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C494() {
      return C494 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 45,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C495() {
      return C495 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 45,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C492() {
      return C492 = dart.constList([C493 || CT.C493, C494 || CT.C494, C495 || CT.C495], _LocationL());
    },
    get C491() {
      return C491 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C492 || CT.C492,
        [_Location_name]: null,
        [_Location_column]: 50,
        [_Location_line]: 208,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C498() {
      return C498 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 43,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C499() {
      return C499 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 43,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C497() {
      return C497 = dart.constList([C498 || CT.C498, C499 || CT.C499], _LocationL());
    },
    get C496() {
      return C496 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C497 || CT.C497,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 202,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C502() {
      return C502 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 43,
        [_Location_line]: 310,
        [_Location_file]: null
      });
    },
    get C501() {
      return C501 = dart.constList([C502 || CT.C502], _LocationL());
    },
    get C500() {
      return C500 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C501 || CT.C501,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 309,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C505() {
      return C505 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 53,
        [_Location_line]: 316,
        [_Location_file]: null
      });
    },
    get C506() {
      return C506 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 53,
        [_Location_line]: 317,
        [_Location_file]: null
      });
    },
    get C507() {
      return C507 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 53,
        [_Location_line]: 318,
        [_Location_file]: null
      });
    },
    get C504() {
      return C504 = dart.constList([C505 || CT.C505, C506 || CT.C506, C507 || CT.C507], _LocationL());
    },
    get C503() {
      return C503 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C504 || CT.C504,
        [_Location_name]: null,
        [_Location_column]: 51,
        [_Location_line]: 315,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C510() {
      return C510 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 57,
        [_Location_line]: 324,
        [_Location_file]: null
      });
    },
    get C511() {
      return C511 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 57,
        [_Location_line]: 325,
        [_Location_file]: null
      });
    },
    get C512() {
      return C512 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 57,
        [_Location_line]: 327,
        [_Location_file]: null
      });
    },
    get C509() {
      return C509 = dart.constList([C510 || CT.C510, C511 || CT.C511, C512 || CT.C512], _LocationL());
    },
    get C508() {
      return C508 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C509 || CT.C509,
        [_Location_name]: null,
        [_Location_column]: 55,
        [_Location_line]: 323,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C513() {
      return C513 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 67,
        [_Location_line]: 340,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C516() {
      return C516 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 57,
        [_Location_line]: 332,
        [_Location_file]: null
      });
    },
    get C517() {
      return C517 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 57,
        [_Location_line]: 333,
        [_Location_file]: null
      });
    },
    get C518() {
      return C518 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 57,
        [_Location_line]: 335,
        [_Location_file]: null
      });
    },
    get C515() {
      return C515 = dart.constList([C516 || CT.C516, C517 || CT.C517, C518 || CT.C518], _LocationL());
    },
    get C514() {
      return C514 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C515 || CT.C515,
        [_Location_name]: null,
        [_Location_column]: 55,
        [_Location_line]: 331,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C521() {
      return C521 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 47,
        [_Location_line]: 346,
        [_Location_file]: null
      });
    },
    get C520() {
      return C520 = dart.constList([C521 || CT.C521], _LocationL());
    },
    get C519() {
      return C519 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C520 || CT.C520,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 345,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C524() {
      return C524 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 47,
        [_Location_line]: 349,
        [_Location_file]: null
      });
    },
    get C525() {
      return C525 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 47,
        [_Location_line]: 350,
        [_Location_file]: null
      });
    },
    get C526() {
      return C526 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 47,
        [_Location_line]: 352,
        [_Location_file]: null
      });
    },
    get C523() {
      return C523 = dart.constList([C524 || CT.C524, C525 || CT.C525, C526 || CT.C526], _LocationL());
    },
    get C522() {
      return C522 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C523 || CT.C523,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 348,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C529() {
      return C529 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 43,
        [_Location_line]: 313,
        [_Location_file]: null
      });
    },
    get C528() {
      return C528 = dart.constList([C529 || CT.C529], _LocationL());
    },
    get C527() {
      return C527 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C528 || CT.C528,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 312,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C532() {
      return C532 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 39,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C533() {
      return C533 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 39,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C534() {
      return C534 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 39,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C531() {
      return C531 = dart.constList([C532 || CT.C532, C533 || CT.C533, C534 || CT.C534], _LocationL());
    },
    get C530() {
      return C530 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C531 || CT.C531,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 196,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C537() {
      return C537 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 37,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C538() {
      return C538 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 37,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C536() {
      return C536 = dart.constList([C537 || CT.C537, C538 || CT.C538], _LocationL());
    },
    get C535() {
      return C535 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C536 || CT.C536,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 194,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C541() {
      return C541 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 31,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C542() {
      return C542 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 31,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C543() {
      return C543 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 31,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C540() {
      return C540 = dart.constList([C541 || CT.C541, C542 || CT.C542, C543 || CT.C543], _LocationL());
    },
    get C539() {
      return C539 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C540 || CT.C540,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 162,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C546() {
      return C546 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 29,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C547() {
      return C547 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C545() {
      return C545 = dart.constList([C546 || CT.C546, C547 || CT.C547], _LocationL());
    },
    get C544() {
      return C544 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C545 || CT.C545,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 160,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C550() {
      return C550 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 27,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C551() {
      return C551 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C549() {
      return C549 = dart.constList([C550 || CT.C550, C551 || CT.C551], _LocationL());
    },
    get C548() {
      return C548 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C549 || CT.C549,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 156,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C554() {
      return C554 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C555() {
      return C555 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C553() {
      return C553 = dart.constList([C554 || CT.C554, C555 || CT.C555], _LocationL());
    },
    get C552() {
      return C552 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C553 || CT.C553,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 154,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C558() {
      return C558 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 23,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C559() {
      return C559 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C557() {
      return C557 = dart.constList([C558 || CT.C558, C559 || CT.C559], _LocationL());
    },
    get C556() {
      return C556 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C557 || CT.C557,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 152,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C562() {
      return C562 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "productId",
        [_Location_column]: 33,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C561() {
      return C561 = dart.constList([C562 || CT.C562], _LocationL());
    },
    get C560() {
      return C560 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C561 || CT.C561,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 374,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C565() {
      return C565 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 31,
        [_Location_line]: 371,
        [_Location_file]: null
      });
    },
    get C566() {
      return C566 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 374,
        [_Location_file]: null
      });
    },
    get C564() {
      return C564 = dart.constList([C565 || CT.C565, C566 || CT.C566], _LocationL());
    },
    get C563() {
      return C563 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C564 || CT.C564,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 370,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C569() {
      return C569 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 27,
        [_Location_line]: 369,
        [_Location_file]: null
      });
    },
    get C570() {
      return C570 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 370,
        [_Location_file]: null
      });
    },
    get C568() {
      return C568 = dart.constList([C569 || CT.C569, C570 || CT.C570], _LocationL());
    },
    get C567() {
      return C567 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C568 || CT.C568,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 368,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C573() {
      return C573 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 25,
        [_Location_line]: 367,
        [_Location_file]: null
      });
    },
    get C574() {
      return C574 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 368,
        [_Location_file]: null
      });
    },
    get C572() {
      return C572 = dart.constList([C573 || CT.C573, C574 || CT.C574], _LocationL());
    },
    get C571() {
      return C571 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C572 || CT.C572,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 366,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C577() {
      return C577 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C576() {
      return C576 = dart.constList([C577 || CT.C577], _LocationL());
    },
    get C575() {
      return C575 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C576 || CT.C576,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 150,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C580() {
      return C580 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C581() {
      return C581 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C579() {
      return C579 = dart.constList([C580 || CT.C580, C581 || CT.C581], _LocationL());
    },
    get C578() {
      return C578 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C579 || CT.C579,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 148,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C584() {
      return C584 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C585() {
      return C585 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C583() {
      return C583 = dart.constList([C584 || CT.C584, C585 || CT.C585], _LocationL());
    },
    get C582() {
      return C582 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C583 || CT.C583,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 146,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C588() {
      return C588 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "stream",
        [_Location_column]: 11,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C589() {
      return C589 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 11,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C587() {
      return C587 = dart.constList([C588 || CT.C588, C589 || CT.C589], _LocationL());
    },
    get C586() {
      return C586 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C587 || CT.C587,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 134,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C592() {
      return C592 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C593() {
      return C593 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "extendBodyBehindAppBar",
        [_Location_column]: 7,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C594() {
      return C594 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C595() {
      return C595 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C591() {
      return C591 = dart.constList([C592 || CT.C592, C593 || CT.C593, C594 || CT.C594, C595 || CT.C595], _LocationL());
    },
    get C590() {
      return C590 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C591 || CT.C591,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 127,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_page.dart"
      });
    },
    get C598() {
      return C598 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C597() {
      return C597 = dart.constList([C598 || CT.C598], _LocationL());
    },
    get C596() {
      return C596 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C597 || CT.C597,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C601() {
      return C601 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "productId",
        [_Location_column]: 61,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C602() {
      return C602 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "status",
        [_Location_column]: 21,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C603() {
      return C603 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "snap",
        [_Location_column]: 28,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C604() {
      return C604 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "index",
        [_Location_column]: 28,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C600() {
      return C600 = dart.constList([C601 || CT.C601, C602 || CT.C602, C603 || CT.C603, C604 || CT.C604], _LocationL());
    },
    get C599() {
      return C599 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C600 || CT.C600,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 70,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C605() {
      return C605 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 100000
      });
    },
    get C608() {
      return C608 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 29,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C609() {
      return C609 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 25,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C607() {
      return C607 = dart.constList([C608 || CT.C608, C609 || CT.C609], _LocationL());
    },
    get C606() {
      return C606 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C607 || CT.C607,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 101,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C612() {
      return C612 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 23,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C613() {
      return C613 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C611() {
      return C611 = dart.constList([C612 || CT.C612, C613 || CT.C613], _LocationL());
    },
    get C610() {
      return C610 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C611 || CT.C611,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 97,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C616() {
      return C616 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 21,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C617() {
      return C617 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C618() {
      return C618 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C615() {
      return C615 = dart.constList([C616 || CT.C616, C617 || CT.C617, C618 || CT.C618], _LocationL());
    },
    get C614() {
      return C614 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C615 || CT.C615,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 94,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C621() {
      return C621 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C622() {
      return C622 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C620() {
      return C620 = dart.constList([C621 || CT.C621, C622 || CT.C622], _LocationL());
    },
    get C619() {
      return C619 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C620 || CT.C620,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 122,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C625() {
      return C625 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 27,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C624() {
      return C624 = dart.constList([C625 || CT.C625], _LocationL());
    },
    get C623() {
      return C623 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C624 || CT.C624,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 135,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C628() {
      return C628 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 66,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C629() {
      return C629 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C627() {
      return C627 = dart.constList([C628 || CT.C628, C629 || CT.C629], _LocationL());
    },
    get C626() {
      return C626 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C627 || CT.C627,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 138,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C632() {
      return C632 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C633() {
      return C633 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C634() {
      return C634 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C631() {
      return C631 = dart.constList([C632 || CT.C632, C633 || CT.C633, C634 || CT.C634], _LocationL());
    },
    get C630() {
      return C630 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C631 || CT.C631,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 118,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C637() {
      return C637 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 21,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C638() {
      return C638 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C639() {
      return C639 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C640() {
      return C640 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 21,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C641() {
      return C641 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C636() {
      return C636 = dart.constList([C637 || CT.C637, C638 || CT.C638, C639 || CT.C639, C640 || CT.C640, C641 || CT.C641], _LocationL());
    },
    get C635() {
      return C635 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C636 || CT.C636,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 108,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C644() {
      return C644 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C645() {
      return C645 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C643() {
      return C643 = dart.constList([C644 || CT.C644, C645 || CT.C645], _LocationL());
    },
    get C642() {
      return C642 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C643 || CT.C643,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 169,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C648() {
      return C648 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C649() {
      return C649 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C647() {
      return C647 = dart.constList([C648 || CT.C648, C649 || CT.C649], _LocationL());
    },
    get C646() {
      return C646 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C647 || CT.C647,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 182,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C652() {
      return C652 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 29,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C653() {
      return C653 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 29,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C651() {
      return C651 = dart.constList([C652 || CT.C652, C653 || CT.C653], _LocationL());
    },
    get C650() {
      return C650 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C651 || CT.C651,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 166,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C656() {
      return C656 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C657() {
      return C657 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C655() {
      return C655 = dart.constList([C656 || CT.C656, C657 || CT.C657], _LocationL());
    },
    get C654() {
      return C654 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C655 || CT.C655,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 201,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C660() {
      return C660 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C661() {
      return C661 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 39,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C659() {
      return C659 = dart.constList([C660 || CT.C660, C661 || CT.C661], _LocationL());
    },
    get C658() {
      return C658 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C659 || CT.C659,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 215,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C664() {
      return C664 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "secondsRemaining",
        [_Location_column]: 39,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C665() {
      return C665 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "whenTimeExpires",
        [_Location_column]: 39,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C666() {
      return C666 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "countDownTimerStyle",
        [_Location_column]: 39,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C663() {
      return C663 = dart.constList([C664 || CT.C664, C665 || CT.C665, C666 || CT.C666], _LocationL());
    },
    get C662() {
      return C662 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C663 || CT.C663,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 224,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C669() {
      return C669 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 29,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C670() {
      return C670 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 29,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C668() {
      return C668 = dart.constList([C669 || CT.C669, C670 || CT.C670], _LocationL());
    },
    get C667() {
      return C667 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C668 || CT.C668,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 198,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C673() {
      return C673 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C674() {
      return C674 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C672() {
      return C672 = dart.constList([C673 || CT.C673, C674 || CT.C674], _LocationL());
    },
    get C671() {
      return C671 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C672 || CT.C672,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 163,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C677() {
      return C677 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C678() {
      return C678 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C679() {
      return C679 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C680() {
      return C680 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 23,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C681() {
      return C681 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C676() {
      return C676 = dart.constList([C677 || CT.C677, C678 || CT.C678, C679 || CT.C679, C680 || CT.C680, C681 || CT.C681], _LocationL());
    },
    get C675() {
      return C675 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C676 || CT.C676,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 153,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C684() {
      return C684 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 21,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C685() {
      return C685 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C683() {
      return C683 = dart.constList([C684 || CT.C684, C685 || CT.C685], _LocationL());
    },
    get C682() {
      return C682 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C683 || CT.C683,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 149,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C688() {
      return C688 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C689() {
      return C689 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C687() {
      return C687 = dart.constList([C688 || CT.C688, C689 || CT.C689], _LocationL());
    },
    get C686() {
      return C686 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C687 || CT.C687,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 91,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C692() {
      return C692 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C693() {
      return C693 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 15,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C694() {
      return C694 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 15,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C695() {
      return C695 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C691() {
      return C691 = dart.constList([C692 || CT.C692, C693 || CT.C693, C694 || CT.C694, C695 || CT.C695], _LocationL());
    },
    get C690() {
      return C690 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C691 || CT.C691,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 78,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C698() {
      return C698 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHover",
        [_Location_column]: 11,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C699() {
      return C699 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverColor",
        [_Location_column]: 11,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C700() {
      return C700 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C701() {
      return C701 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C697() {
      return C697 = dart.constList([C698 || CT.C698, C699 || CT.C699, C700 || CT.C700, C701 || CT.C701], _LocationL());
    },
    get C696() {
      return C696 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C697 || CT.C697,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 60,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C704() {
      return C704 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C703() {
      return C703 = dart.constList([C704 || CT.C704], _LocationL());
    },
    get C702() {
      return C702 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C703 || CT.C703,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 55,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tile_card.dart"
      });
    },
    get C705() {
      return C705 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 29,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tiles_main.dart"
      });
    },
    get C708() {
      return C708 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C707() {
      return C707 = dart.constList([C708 || CT.C708], _LocationL());
    },
    get C706() {
      return C706 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C707 || CT.C707,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 28,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tiles_main.dart"
      });
    },
    get C711() {
      return C711 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 15,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C712() {
      return C712 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkWrap",
        [_Location_column]: 15,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C713() {
      return C713 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 15,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C714() {
      return C714 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "gridDelegate",
        [_Location_column]: 15,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C715() {
      return C715 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 15,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C710() {
      return C710 = dart.constList([C711 || CT.C711, C712 || CT.C712, C713 || CT.C713, C714 || CT.C714, C715 || CT.C715], _LocationL());
    },
    get C709() {
      return C709 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C710 || CT.C710,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 38,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tiles_main.dart"
      });
    },
    get C718() {
      return C718 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C719() {
      return C719 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C717() {
      return C717 = dart.constList([C718 || CT.C718, C719 || CT.C719], _LocationL());
    },
    get C716() {
      return C716 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C717 || CT.C717,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 32,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tiles_main.dart"
      });
    },
    get C722() {
      return C722 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "stream",
        [_Location_column]: 9,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C723() {
      return C723 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C721() {
      return C721 = dart.constList([C722 || CT.C722, C723 || CT.C723], _LocationL());
    },
    get C720() {
      return C720 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C721 || CT.C721,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 19,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/tiles_main.dart"
      });
    },
    get C726() {
      return C726 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 31,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C725() {
      return C725 = dart.constList([C726 || CT.C726], _LocationL());
    },
    get C724() {
      return C724 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C725 || CT.C725,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 31,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_catalog.dart"
      });
    },
    get C729() {
      return C729 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "preferredSize",
        [_Location_column]: 9,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C730() {
      return C730 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C728() {
      return C728 = dart.constList([C729 || CT.C729, C730 || CT.C730], _LocationL());
    },
    get C727() {
      return C727 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C728 || CT.C728,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 29,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_catalog.dart"
      });
    },
    get C733() {
      return C733 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 23,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C734() {
      return C734 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 23,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C732() {
      return C732 = dart.constList([C733 || CT.C733, C734 || CT.C734], _LocationL());
    },
    get C731() {
      return C731 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C732 || CT.C732,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 43,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_catalog.dart"
      });
    },
    get C737() {
      return C737 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 21,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C738() {
      return C738 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C739() {
      return C739 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C736() {
      return C736 = dart.constList([C737 || CT.C737, C738 || CT.C738, C739 || CT.C739], _LocationL());
    },
    get C735() {
      return C735 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C736 || CT.C736,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 40,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_catalog.dart"
      });
    },
    get C742() {
      return C742 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C741() {
      return C741 = dart.constList([C742 || CT.C742], _LocationL());
    },
    get C740() {
      return C740 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C741 || CT.C741,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 39,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_catalog.dart"
      });
    },
    get C743() {
      return C743 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 55,
        [_Location_line]: 60,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_catalog.dart"
      });
    },
    get C746() {
      return C746 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "screenSize",
        [_Location_column]: 27,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C747() {
      return C747 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title1",
        [_Location_column]: 27,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C748() {
      return C748 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title2",
        [_Location_column]: 27,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C749() {
      return C749 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title3",
        [_Location_column]: 27,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C750() {
      return C750 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap1",
        [_Location_column]: 27,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C745() {
      return C745 = dart.constList([C746 || CT.C746, C747 || CT.C747, C748 || CT.C748, C749 || CT.C749, C750 || CT.C750], _LocationL());
    },
    get C744() {
      return C744 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C745 || CT.C745,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 52,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_catalog.dart"
      });
    },
    get C753() {
      return C753 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 25,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C752() {
      return C752 = dart.constList([C753 || CT.C753], _LocationL());
    },
    get C751() {
      return C751 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C752 || CT.C752,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 64,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_catalog.dart"
      });
    },
    get C756() {
      return C756 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "screenSize",
        [_Location_column]: 33,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C757() {
      return C757 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isFeatured",
        [_Location_column]: 57,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C755() {
      return C755 = dart.constList([C756 || CT.C756, C757 || CT.C757], _LocationL());
    },
    get C754() {
      return C754 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C755 || CT.C755,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 67,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_catalog.dart"
      });
    },
    get C760() {
      return C760 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C759() {
      return C759 = dart.constList([C760 || CT.C760], _LocationL());
    },
    get C758() {
      return C758 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C759 || CT.C759,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 50,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_catalog.dart"
      });
    },
    get C763() {
      return C763 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C762() {
      return C762 = dart.constList([C763 || CT.C763], _LocationL());
    },
    get C761() {
      return C761 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C762 || CT.C762,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 49,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_catalog.dart"
      });
    },
    get C766() {
      return C766 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C765() {
      return C765 = dart.constList([C766 || CT.C766], _LocationL());
    },
    get C764() {
      return C764 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C765 || CT.C765,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 37,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_catalog.dart"
      });
    },
    get C769() {
      return C769 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C768() {
      return C768 = dart.constList([C769 || CT.C769], _LocationL());
    },
    get C767() {
      return C767 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C768 || CT.C768,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 74,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_catalog.dart"
      });
    },
    get C772() {
      return C772 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C771() {
      return C771 = dart.constList([C772 || CT.C772], _LocationL());
    },
    get C770() {
      return C770 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C771 || CT.C771,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 35,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_catalog.dart"
      });
    },
    get C775() {
      return C775 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 9,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C776() {
      return C776 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C774() {
      return C774 = dart.constList([C775 || CT.C775, C776 || CT.C776], _LocationL());
    },
    get C773() {
      return C773 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C774 || CT.C774,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 33,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_catalog.dart"
      });
    },
    get C779() {
      return C779 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C780() {
      return C780 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "extendBodyBehindAppBar",
        [_Location_column]: 7,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C781() {
      return C781 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C782() {
      return C782 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C778() {
      return C778 = dart.constList([C779 || CT.C779, C780 || CT.C780, C781 || CT.C781, C782 || CT.C782], _LocationL());
    },
    get C777() {
      return C777 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C778 || CT.C778,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 26,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/product_catalog.dart"
      });
    },
    get C785() {
      return C785 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 31,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C784() {
      return C784 = dart.constList([C785 || CT.C785], _LocationL());
    },
    get C783() {
      return C783 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C784 || CT.C784,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 30,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/home_page.dart"
      });
    },
    get C788() {
      return C788 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "preferredSize",
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C789() {
      return C789 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C787() {
      return C787 = dart.constList([C788 || CT.C788, C789 || CT.C789], _LocationL());
    },
    get C786() {
      return C786 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C787 || CT.C787,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 28,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/home_page.dart"
      });
    },
    get C792() {
      return C792 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 23,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C793() {
      return C793 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 23,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C791() {
      return C791 = dart.constList([C792 || CT.C792, C793 || CT.C793], _LocationL());
    },
    get C790() {
      return C790 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C791 || CT.C791,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 42,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/home_page.dart"
      });
    },
    get C796() {
      return C796 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 21,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C797() {
      return C797 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C798() {
      return C798 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C795() {
      return C795 = dart.constList([C796 || CT.C796, C797 || CT.C797, C798 || CT.C798], _LocationL());
    },
    get C794() {
      return C794 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C795 || CT.C795,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 39,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/home_page.dart"
      });
    },
    get C801() {
      return C801 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C800() {
      return C800 = dart.constList([C801 || CT.C801], _LocationL());
    },
    get C799() {
      return C799 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C800 || CT.C800,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 38,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/home_page.dart"
      });
    },
    get C804() {
      return C804 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "screenSize",
        [_Location_column]: 44,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C803() {
      return C803 = dart.constList([C804 || CT.C804], _LocationL());
    },
    get C802() {
      return C802 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C803 || CT.C803,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 50,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/home_page.dart"
      });
    },
    get C805() {
      return C805 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 59,
        [_Location_line]: 62,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/home_page.dart"
      });
    },
    get C808() {
      return C808 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "screenSize",
        [_Location_column]: 31,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C809() {
      return C809 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title1",
        [_Location_column]: 31,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C810() {
      return C810 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title2",
        [_Location_column]: 31,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C811() {
      return C811 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title3",
        [_Location_column]: 31,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C812() {
      return C812 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap1",
        [_Location_column]: 31,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C807() {
      return C807 = dart.constList([C808 || CT.C808, C809 || CT.C809, C810 || CT.C810, C811 || CT.C811, C812 || CT.C812], _LocationL());
    },
    get C806() {
      return C806 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C807 || CT.C807,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 54,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/home_page.dart"
      });
    },
    get C815() {
      return C815 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 29,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C814() {
      return C814 = dart.constList([C815 || CT.C815], _LocationL());
    },
    get C813() {
      return C813 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C814 || CT.C814,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 66,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/home_page.dart"
      });
    },
    get C818() {
      return C818 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "screenSize",
        [_Location_column]: 37,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C819() {
      return C819 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isFeatured",
        [_Location_column]: 61,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C817() {
      return C817 = dart.constList([C818 || CT.C818, C819 || CT.C819], _LocationL());
    },
    get C816() {
      return C816 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C817 || CT.C817,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 69,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/home_page.dart"
      });
    },
    get C822() {
      return C822 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C821() {
      return C821 = dart.constList([C822 || CT.C822], _LocationL());
    },
    get C820() {
      return C820 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C821 || CT.C821,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 52,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/home_page.dart"
      });
    },
    get C825() {
      return C825 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C824() {
      return C824 = dart.constList([C825 || CT.C825], _LocationL());
    },
    get C823() {
      return C823 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C824 || CT.C824,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 51,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/home_page.dart"
      });
    },
    get C828() {
      return C828 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C827() {
      return C827 = dart.constList([C828 || CT.C828], _LocationL());
    },
    get C826() {
      return C826 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C827 || CT.C827,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 48,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/home_page.dart"
      });
    },
    get C831() {
      return C831 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C830() {
      return C830 = dart.constList([C831 || CT.C831], _LocationL());
    },
    get C829() {
      return C829 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C830 || CT.C830,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 36,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/home_page.dart"
      });
    },
    get C834() {
      return C834 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C833() {
      return C833 = dart.constList([C834 || CT.C834], _LocationL());
    },
    get C832() {
      return C832 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C833 || CT.C833,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 78,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/home_page.dart"
      });
    },
    get C837() {
      return C837 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C836() {
      return C836 = dart.constList([C837 || CT.C837], _LocationL());
    },
    get C835() {
      return C835 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C836 || CT.C836,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 34,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/home_page.dart"
      });
    },
    get C840() {
      return C840 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C839() {
      return C839 = dart.constList([C840 || CT.C840], _LocationL());
    },
    get C838() {
      return C838 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C839 || CT.C839,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 32,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/home_page.dart"
      });
    },
    get C843() {
      return C843 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C844() {
      return C844 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "extendBodyBehindAppBar",
        [_Location_column]: 7,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C845() {
      return C845 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C846() {
      return C846 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C842() {
      return C842 = dart.constList([C843 || CT.C843, C844 || CT.C844, C845 || CT.C845, C846 || CT.C846], _LocationL());
    },
    get C841() {
      return C841 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C842 || CT.C842,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 25,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/screens/home_page.dart"
      });
    }
  }, false);
  google_sign_in_button.GoogleButton = class GoogleButton extends framework.StatefulWidget {
    createState() {
      return new google_sign_in_button._GoogleButtonState.new();
    }
  };
  (google_sign_in_button.GoogleButton.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    google_sign_in_button.GoogleButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = google_sign_in_button.GoogleButton.prototype;
  dart.addTypeTests(google_sign_in_button.GoogleButton);
  dart.addTypeCaches(google_sign_in_button.GoogleButton);
  dart.setMethodSignature(google_sign_in_button.GoogleButton, () => ({
    __proto__: dart.getMethods(google_sign_in_button.GoogleButton.__proto__),
    createState: dart.fnType(dart.legacy(google_sign_in_button._GoogleButtonState), [])
  }));
  dart.setLibraryUri(google_sign_in_button.GoogleButton, L0);
  var _isProcessing = dart.privateName(google_sign_in_button, "_isProcessing");
  var C1;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C0;
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C2;
  var C5;
  var C4;
  var C3;
  var C8;
  var C9;
  var C7;
  var C6;
  var C10;
  var C13;
  var C14;
  var C12;
  var C11;
  var C17;
  var C18;
  var C16;
  var C15;
  var C21;
  var C22;
  var C23;
  var C20;
  var C19;
  var C26;
  var C27;
  var C25;
  var C24;
  var C30;
  var C31;
  var C32;
  var C33;
  var C34;
  var C35;
  var C29;
  var C28;
  var C38;
  var C39;
  var C37;
  var C36;
  google_sign_in_button._GoogleButtonState = class _GoogleButtonState extends framework.State$(dart.legacy(google_sign_in_button.GoogleButton)) {
    build(context) {
      return new container.DecoratedBox.new({decoration: new shape_decoration.ShapeDecoration.new({shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(20.0), side: new borders.BorderSide.new({color: colors.Colors.blueGrey, width: 3.0})}), color: colors.Colors.white}), child: new material_button.MaterialButton.new({highlightColor: colors.Colors.blueGrey._get(100), splashColor: colors.Colors.blueGrey._get(200), onPressed: dart.fn(() => async.async(core.Null, (function*() {
            this.setState(dart.fn(() => {
              this[_isProcessing] = true;
            }, VoidToNull()));
            yield authentication.signInWithGoogle().then(core.Null, dart.fn(result => {
              core.print(result);
              if (result != null) {
                navigator.Navigator.of(context).pop(ObjectL());
                navigator.Navigator.of(context).pushReplacement(dart.dynamic, ObjectL(), new page.MaterialPageRoute.new({fullscreenDialog: true, builder: dart.fn(context => new home_page.HomePage.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextLToHomePageL())}));
              }
            }, StringLToNull())).catchError(dart.fn(error => {
              core.print("Registration Error: " + dart.str(error));
            }, dynamicToNull()));
            this.setState(dart.fn(() => {
              this[_isProcessing] = false;
            }, VoidToNull()));
          }).bind(this)), VoidToFutureLOfNull()), shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(20.0), side: new borders.BorderSide.new({color: colors.Colors.blueGrey, width: 3.0})}), highlightElevation: 0.0, child: new basic.Padding.new({padding: C2 || CT.C2, child: dart.test(this[_isProcessing]) ? new progress_indicator.CircularProgressIndicator.new({valueColor: new (AlwaysStoppedAnimationOfColorL()).new(colors.Colors.blueGrey), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}) : new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidgetL().of([new image.Image.new({image: new image_resolution.AssetImage.new("assets/google_logo.png"), height: 30.0, $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), new basic.Padding.new({padding: C10 || CT.C10, child: new text.Text.new("Continue with Google", {style: new text_style.TextStyle.new({fontSize: 20.0, color: colors.Colors.blueGrey}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15})]), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36});
    }
  };
  (google_sign_in_button._GoogleButtonState.new = function() {
    this[_isProcessing] = false;
    google_sign_in_button._GoogleButtonState.__proto__.new.call(this);
    ;
  }).prototype = google_sign_in_button._GoogleButtonState.prototype;
  dart.addTypeTests(google_sign_in_button._GoogleButtonState);
  dart.addTypeCaches(google_sign_in_button._GoogleButtonState);
  dart.setMethodSignature(google_sign_in_button._GoogleButtonState, () => ({
    __proto__: dart.getMethods(google_sign_in_button._GoogleButtonState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(google_sign_in_button._GoogleButtonState, L0);
  dart.setFieldSignature(google_sign_in_button._GoogleButtonState, () => ({
    __proto__: dart.getFields(google_sign_in_button._GoogleButtonState.__proto__),
    [_isProcessing]: dart.fieldType(dart.legacy(core.bool))
  }));
  auth_dialog.AuthDialog = class AuthDialog extends framework.StatefulWidget {
    createState() {
      return new auth_dialog._AuthDialogState.new();
    }
  };
  (auth_dialog.AuthDialog.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    auth_dialog.AuthDialog.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = auth_dialog.AuthDialog.prototype;
  dart.addTypeTests(auth_dialog.AuthDialog);
  dart.addTypeCaches(auth_dialog.AuthDialog);
  dart.setMethodSignature(auth_dialog.AuthDialog, () => ({
    __proto__: dart.getMethods(auth_dialog.AuthDialog.__proto__),
    createState: dart.fnType(dart.legacy(auth_dialog._AuthDialogState), [])
  }));
  dart.setLibraryUri(auth_dialog.AuthDialog, L1);
  var _isEditingEmail = dart.privateName(auth_dialog, "_isEditingEmail");
  var _isEditingPassword = dart.privateName(auth_dialog, "_isEditingPassword");
  var _isRegistering = dart.privateName(auth_dialog, "_isRegistering");
  var _isLoggingIn = dart.privateName(auth_dialog, "_isLoggingIn");
  var _validateEmail = dart.privateName(auth_dialog, "_validateEmail");
  var _validatePassword = dart.privateName(auth_dialog, "_validatePassword");
  var C40;
  var C43;
  var C44;
  var C42;
  var C41;
  var C47;
  var C46;
  var C45;
  var C50;
  var C49;
  var C48;
  var C51;
  var C54;
  var C55;
  var C56;
  var C53;
  var C52;
  var C59;
  var C60;
  var C58;
  var C57;
  var C61;
  var C64;
  var C65;
  var C66;
  var C67;
  var C68;
  var C69;
  var C70;
  var C71;
  var C72;
  var C63;
  var C62;
  var C75;
  var C76;
  var C74;
  var C73;
  var C79;
  var C78;
  var C77;
  var C82;
  var C83;
  var C84;
  var C81;
  var C80;
  var C87;
  var C88;
  var C86;
  var C85;
  var C91;
  var C92;
  var C93;
  var C94;
  var C95;
  var C96;
  var C97;
  var C98;
  var C99;
  var C100;
  var C90;
  var C89;
  var C103;
  var C104;
  var C102;
  var C101;
  var C105;
  var C106;
  var C109;
  var C110;
  var C108;
  var C107;
  var C113;
  var C114;
  var C115;
  var C112;
  var C111;
  var C118;
  var C119;
  var C117;
  var C116;
  var C122;
  var C123;
  var C121;
  var C120;
  var C126;
  var C127;
  var C128;
  var C129;
  var C130;
  var C131;
  var C125;
  var C124;
  var C134;
  var C135;
  var C133;
  var C132;
  var C138;
  var C139;
  var C137;
  var C136;
  var C142;
  var C141;
  var C140;
  var C145;
  var C146;
  var C144;
  var C143;
  var C149;
  var C150;
  var C151;
  var C148;
  var C147;
  var C154;
  var C155;
  var C153;
  var C152;
  var C158;
  var C159;
  var C157;
  var C156;
  var C162;
  var C163;
  var C164;
  var C165;
  var C166;
  var C167;
  var C161;
  var C160;
  var C170;
  var C171;
  var C169;
  var C168;
  var C174;
  var C175;
  var C173;
  var C172;
  var C178;
  var C179;
  var C180;
  var C177;
  var C176;
  var C183;
  var C184;
  var C182;
  var C181;
  var C185;
  var C188;
  var C189;
  var C187;
  var C186;
  var C192;
  var C193;
  var C191;
  var C190;
  var C196;
  var C195;
  var C194;
  var C197;
  var C198;
  var C201;
  var C202;
  var C203;
  var C200;
  var C199;
  var C206;
  var C207;
  var C205;
  var C204;
  var C210;
  var C209;
  var C208;
  var C211;
  var C214;
  var C213;
  var C212;
  var C217;
  var C216;
  var C215;
  var C218;
  var C221;
  var C222;
  var C223;
  var C220;
  var C219;
  var C226;
  var C227;
  var C225;
  var C224;
  var C230;
  var C231;
  var C232;
  var C229;
  var C228;
  var C235;
  var C236;
  var C237;
  var C234;
  var C233;
  var C240;
  var C241;
  var C239;
  var C238;
  var C244;
  var C243;
  var C242;
  var C247;
  var C248;
  var C249;
  var C246;
  var C245;
  auth_dialog._AuthDialogState = class _AuthDialogState extends framework.State$(dart.legacy(auth_dialog.AuthDialog)) {
    [_validateEmail](value) {
      value = value[$trim]();
      if (this.textControllerEmail.text != null) {
        if (value[$isEmpty]) {
          return "Email can't be empty";
        } else if (!value[$contains](core.RegExp.new("^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\\.[a-zA-Z]+"))) {
          return "Enter a correct email address";
        }
      }
      return null;
    }
    [_validatePassword](value) {
      value = value[$trim]();
      if (this.textControllerEmail.text != null) {
        if (value[$isEmpty]) {
          return "Password can't be empty";
        } else if (value.length < 6) {
          return "Length of password should be greater than 6";
        }
      }
      return null;
    }
    initState() {
      this.textControllerEmail = new editable_text.TextEditingController.new();
      this.textControllerPassword = new editable_text.TextEditingController.new();
      this.textControllerEmail.text = null;
      this.textControllerPassword.text = null;
      this.textFocusNodeEmail = new focus_manager.FocusNode.new();
      this.textFocusNodePassword = new focus_manager.FocusNode.new();
      super.initState();
    }
    build(context) {
      return new dialog.Dialog.new({backgroundColor: theme.Theme.of(context).backgroundColor, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(8.0)}), child: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Padding.new({padding: C40 || CT.C40, child: new container.Container.new({width: 400.0, color: theme.Theme.of(context).backgroundColor, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidgetL().of([new basic.Center.new({child: new text.Text.new("ARtifacts", {style: new text_style.TextStyle.new({color: theme.Theme.of(context).textTheme.headline1.color, fontSize: 24.0, fontFamily: "Montserrat", fontWeight: ui.FontWeight.bold, letterSpacing: 3.0}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), new basic.SizedBox.new({height: 30.0, $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), new basic.Padding.new({padding: C51 || CT.C51, child: new text.Text.new("Email address", {textAlign: ui.TextAlign.left, style: new text_style.TextStyle.new({color: theme.Theme.of(context).textTheme.subtitle2.color, fontSize: 18.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), new basic.Padding.new({padding: C61 || CT.C61, child: new text_field.TextField.new({focusNode: this.textFocusNodeEmail, keyboardType: text_input.TextInputType.emailAddress, textInputAction: text_input.TextInputAction.next, controller: this.textControllerEmail, autofocus: false, onChanged: dart.fn(value => {
                        this.setState(dart.fn(() => {
                          this[_isEditingEmail] = true;
                        }, VoidToNull()));
                      }, StringLToNull()), onSubmitted: dart.fn(value => {
                        this.textFocusNodeEmail.unfocus();
                        focus_scope.FocusScope.of(context).requestFocus(this.textFocusNodePassword);
                      }, StringLToNull()), style: new text_style.TextStyle.new({color: colors.Colors.black}), decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: new border_radius.BorderRadius.circular(10.0), borderSide: new borders.BorderSide.new({color: colors.Colors.blueGrey._get(800), width: 3.0})}), filled: true, hintStyle: new text_style.TextStyle.new({color: colors.Colors.blueGrey._get(300)}), hintText: "Email", fillColor: colors.Colors.white, errorText: dart.test(this[_isEditingEmail]) ? this[_validateEmail](this.textControllerEmail.text) : null, errorStyle: new text_style.TextStyle.new({fontSize: 12.0, color: colors.Colors.redAccent})}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), new basic.Padding.new({padding: C51 || CT.C51, child: new text.Text.new("Password", {textAlign: ui.TextAlign.left, style: new text_style.TextStyle.new({color: theme.Theme.of(context).textTheme.subtitle2.color, fontSize: 18.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80}), $creationLocationd_0dea112b090073317d4: C85 || CT.C85}), new basic.Padding.new({padding: C61 || CT.C61, child: new text_field.TextField.new({focusNode: this.textFocusNodePassword, keyboardType: text_input.TextInputType.text, textInputAction: text_input.TextInputAction.done, controller: this.textControllerPassword, obscureText: true, autofocus: false, onChanged: dart.fn(value => {
                        this.setState(dart.fn(() => {
                          this[_isEditingPassword] = true;
                        }, VoidToNull()));
                      }, StringLToNull()), onSubmitted: dart.fn(value => {
                        this.textFocusNodePassword.unfocus();
                        focus_scope.FocusScope.of(context).requestFocus(this.textFocusNodePassword);
                      }, StringLToNull()), style: new text_style.TextStyle.new({color: colors.Colors.black}), decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: new border_radius.BorderRadius.circular(10.0), borderSide: new borders.BorderSide.new({color: colors.Colors.blueGrey._get(800), width: 3.0})}), filled: true, hintStyle: new text_style.TextStyle.new({color: colors.Colors.blueGrey._get(300)}), hintText: "Password", fillColor: colors.Colors.white, errorText: dart.test(this[_isEditingPassword]) ? this[_validatePassword](this.textControllerPassword.text) : null, errorStyle: new text_style.TextStyle.new({fontSize: 12.0, color: colors.Colors.redAccent})}), $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), $creationLocationd_0dea112b090073317d4: C101 || CT.C101}), new basic.Padding.new({padding: C105 || CT.C105, child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.spaceAround, children: JSArrayOfWidgetL().of([new basic.Flexible.new({flex: 1, child: new container.Container.new({width: 1.7976931348623157e+308, child: new material_button.MaterialButton.new({color: colors.Colors.blueGrey._get(800), hoverColor: colors.Colors.blueGrey._get(900), highlightColor: colors.Colors.black, onPressed: dart.fn(() => async.async(core.Null, (function*() {
                                this.setState(dart.fn(() => {
                                  this[_isLoggingIn] = true;
                                  this.textFocusNodeEmail.unfocus();
                                  this.textFocusNodePassword.unfocus();
                                }, VoidToNull()));
                                if (this[_validateEmail](this.textControllerEmail.text) == null && this[_validatePassword](this.textControllerPassword.text) == null) {
                                  yield authentication.signInWithEmailPassword(this.textControllerEmail.text, this.textControllerPassword.text).then(core.Null, dart.fn(result => {
                                    if (result != null) {
                                      core.print(result);
                                      this.setState(dart.fn(() => {
                                        this.loginStatus = "You have successfully logged in";
                                        this.loginStringColor = colors.Colors.green;
                                      }, VoidToNull()));
                                      FutureOfNull().delayed(new core.Duration.new({milliseconds: 500}), dart.fn(() => {
                                        navigator.Navigator.of(context).pop(ObjectL());
                                        navigator.Navigator.of(context).pushReplacement(dart.dynamic, ObjectL(), new page.MaterialPageRoute.new({fullscreenDialog: true, builder: dart.fn(context => new home_page.HomePage.new({$creationLocationd_0dea112b090073317d4: C106 || CT.C106}), BuildContextLToHomePageL())}));
                                      }, VoidToNull()));
                                    }
                                  }, StringLToNull())).catchError(dart.fn(error => {
                                    core.print("Login Error: " + dart.str(error));
                                    this.setState(dart.fn(() => {
                                      this.loginStatus = "Error: " + dart.str(dart.toString(error));
                                      this.loginStringColor = colors.Colors.red;
                                    }, VoidToNull()));
                                  }, dynamicToNull()));
                                } else {
                                  this.setState(dart.fn(() => {
                                    this.loginStatus = "Please enter email & password";
                                    this.loginStringColor = colors.Colors.red;
                                  }, VoidToNull()));
                                }
                                this.setState(dart.fn(() => {
                                  this[_isLoggingIn] = false;
                                  this.textControllerEmail.text = "";
                                  this.textControllerPassword.text = "";
                                  this[_isEditingEmail] = false;
                                  this[_isEditingPassword] = false;
                                }, VoidToNull()));
                              }).bind(this)), VoidToFutureLOfNull()), shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(15.0)}), child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: 15.0, bottom: 15.0}), child: dart.test(this[_isLoggingIn]) ? new basic.SizedBox.new({height: 16.0, width: 16.0, child: new progress_indicator.CircularProgressIndicator.new({strokeWidth: 2.0, valueColor: new (AlwaysStoppedAnimationOfColorL()).new(colors.Colors.white), $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), $creationLocationd_0dea112b090073317d4: C111 || CT.C111}) : new text.Text.new("Log in", {style: new text_style.TextStyle.new({fontSize: 14.0, color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C116 || CT.C116}), $creationLocationd_0dea112b090073317d4: C120 || CT.C120}), $creationLocationd_0dea112b090073317d4: C124 || CT.C124}), $creationLocationd_0dea112b090073317d4: C132 || CT.C132}), $creationLocationd_0dea112b090073317d4: C136 || CT.C136}), new basic.SizedBox.new({width: 20.0, $creationLocationd_0dea112b090073317d4: C140 || CT.C140}), new basic.Flexible.new({flex: 1, child: new container.Container.new({width: 1.7976931348623157e+308, child: new material_button.MaterialButton.new({color: colors.Colors.blueGrey._get(800), hoverColor: colors.Colors.blueGrey._get(900), highlightColor: colors.Colors.black, onPressed: dart.fn(() => async.async(core.Null, (function*() {
                                this.setState(dart.fn(() => {
                                  this.textFocusNodeEmail.unfocus();
                                  this.textFocusNodePassword.unfocus();
                                }, VoidToNull()));
                                if (this[_validateEmail](this.textControllerEmail.text) == null && this[_validatePassword](this.textControllerPassword.text) == null) {
                                  this.setState(dart.fn(() => {
                                    this[_isRegistering] = true;
                                  }, VoidToNull()));
                                  yield authentication.registerWithEmailPassword(this.textControllerEmail.text, this.textControllerPassword.text).then(core.Null, dart.fn(result => {
                                    if (result != null) {
                                      this.setState(dart.fn(() => {
                                        this.loginStatus = "You have registered successfully";
                                        this.loginStringColor = colors.Colors.green;
                                      }, VoidToNull()));
                                      core.print(result);
                                    }
                                  }, StringLToNull())).catchError(dart.fn(error => {
                                    core.print("Registration Error: " + dart.str(error));
                                    this.setState(dart.fn(() => {
                                      this.loginStatus = "Error occured while registering";
                                      this.loginStringColor = colors.Colors.red;
                                    }, VoidToNull()));
                                  }, dynamicToNull()));
                                } else {
                                  this.setState(dart.fn(() => {
                                    this.loginStatus = "Please enter email & password";
                                    this.loginStringColor = colors.Colors.red;
                                  }, VoidToNull()));
                                }
                                this.setState(dart.fn(() => {
                                  this[_isRegistering] = false;
                                  this.textControllerEmail.text = "";
                                  this.textControllerPassword.text = "";
                                  this[_isEditingEmail] = false;
                                  this[_isEditingPassword] = false;
                                }, VoidToNull()));
                              }).bind(this)), VoidToFutureLOfNull()), shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(15.0)}), child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: 15.0, bottom: 15.0}), child: dart.test(this[_isRegistering]) ? new basic.SizedBox.new({height: 16.0, width: 16.0, child: new progress_indicator.CircularProgressIndicator.new({strokeWidth: 2.0, valueColor: new (AlwaysStoppedAnimationOfColorL()).new(colors.Colors.white), $creationLocationd_0dea112b090073317d4: C143 || CT.C143}), $creationLocationd_0dea112b090073317d4: C147 || CT.C147}) : new text.Text.new("Sign up", {style: new text_style.TextStyle.new({fontSize: 14.0, color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C152 || CT.C152}), $creationLocationd_0dea112b090073317d4: C156 || CT.C156}), $creationLocationd_0dea112b090073317d4: C160 || CT.C160}), $creationLocationd_0dea112b090073317d4: C168 || CT.C168}), $creationLocationd_0dea112b090073317d4: C172 || CT.C172})]), $creationLocationd_0dea112b090073317d4: C176 || CT.C176}), $creationLocationd_0dea112b090073317d4: C181 || CT.C181}), this.loginStatus != null ? new basic.Center.new({child: new basic.Padding.new({padding: C185 || CT.C185, child: new text.Text.new(this.loginStatus, {style: new text_style.TextStyle.new({color: this.loginStringColor, fontSize: 14.0}), $creationLocationd_0dea112b090073317d4: C186 || CT.C186}), $creationLocationd_0dea112b090073317d4: C190 || CT.C190}), $creationLocationd_0dea112b090073317d4: C194 || CT.C194}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C197 || CT.C197}), new basic.Padding.new({padding: C198 || CT.C198, child: new container.Container.new({height: 1.0, width: 1.7976931348623157e+308, color: colors.Colors.blueGrey._get(200), $creationLocationd_0dea112b090073317d4: C199 || CT.C199}), $creationLocationd_0dea112b090073317d4: C204 || CT.C204}), new basic.SizedBox.new({height: 30.0, $creationLocationd_0dea112b090073317d4: C208 || CT.C208}), new basic.Center.new({child: new google_sign_in_button.GoogleButton.new({$creationLocationd_0dea112b090073317d4: C211 || CT.C211}), $creationLocationd_0dea112b090073317d4: C212 || CT.C212}), new basic.SizedBox.new({height: 30.0, $creationLocationd_0dea112b090073317d4: C215 || CT.C215}), new basic.Padding.new({padding: C218 || CT.C218, child: new text.Text.new("By proceeding, you agree to our Terms of Use and confirm you have read our Privacy Policy.", {maxLines: 2, style: new text_style.TextStyle.new({color: theme.Theme.of(context).textTheme.subtitle2.color, fontSize: 14.0, fontWeight: ui.FontWeight.w300}), $creationLocationd_0dea112b090073317d4: C219 || CT.C219}), $creationLocationd_0dea112b090073317d4: C224 || CT.C224})]), $creationLocationd_0dea112b090073317d4: C228 || CT.C228}), $creationLocationd_0dea112b090073317d4: C233 || CT.C233}), $creationLocationd_0dea112b090073317d4: C238 || CT.C238}), $creationLocationd_0dea112b090073317d4: C242 || CT.C242}), $creationLocationd_0dea112b090073317d4: C245 || CT.C245});
    }
  };
  (auth_dialog._AuthDialogState.new = function() {
    this.textControllerEmail = null;
    this.textFocusNodeEmail = null;
    this[_isEditingEmail] = false;
    this.textControllerPassword = null;
    this.textFocusNodePassword = null;
    this[_isEditingPassword] = false;
    this[_isRegistering] = false;
    this[_isLoggingIn] = false;
    this.loginStatus = null;
    this.loginStringColor = colors.Colors.green;
    auth_dialog._AuthDialogState.__proto__.new.call(this);
    ;
  }).prototype = auth_dialog._AuthDialogState.prototype;
  dart.addTypeTests(auth_dialog._AuthDialogState);
  dart.addTypeCaches(auth_dialog._AuthDialogState);
  dart.setMethodSignature(auth_dialog._AuthDialogState, () => ({
    __proto__: dart.getMethods(auth_dialog._AuthDialogState.__proto__),
    [_validateEmail]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    [_validatePassword]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(auth_dialog._AuthDialogState, L1);
  dart.setFieldSignature(auth_dialog._AuthDialogState, () => ({
    __proto__: dart.getFields(auth_dialog._AuthDialogState.__proto__),
    textControllerEmail: dart.fieldType(dart.legacy(editable_text.TextEditingController)),
    textFocusNodeEmail: dart.fieldType(dart.legacy(focus_manager.FocusNode)),
    [_isEditingEmail]: dart.fieldType(dart.legacy(core.bool)),
    textControllerPassword: dart.fieldType(dart.legacy(editable_text.TextEditingController)),
    textFocusNodePassword: dart.fieldType(dart.legacy(focus_manager.FocusNode)),
    [_isEditingPassword]: dart.fieldType(dart.legacy(core.bool)),
    [_isRegistering]: dart.fieldType(dart.legacy(core.bool)),
    [_isLoggingIn]: dart.fieldType(dart.legacy(core.bool)),
    loginStatus: dart.fieldType(dart.legacy(core.String)),
    loginStringColor: dart.fieldType(dart.legacy(ui.Color))
  }));
  var opacity$ = dart.privateName(top_bar_contents, "TopBarContents.opacity");
  top_bar_contents.TopBarContents = class TopBarContents extends framework.StatefulWidget {
    get opacity() {
      return this[opacity$];
    }
    set opacity(value) {
      super.opacity = value;
    }
    createState() {
      return new top_bar_contents._TopBarContentsState.new();
    }
  };
  (top_bar_contents.TopBarContents.new = function(opacity, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[opacity$] = opacity;
    top_bar_contents.TopBarContents.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = top_bar_contents.TopBarContents.prototype;
  dart.addTypeTests(top_bar_contents.TopBarContents);
  dart.addTypeCaches(top_bar_contents.TopBarContents);
  dart.setMethodSignature(top_bar_contents.TopBarContents, () => ({
    __proto__: dart.getMethods(top_bar_contents.TopBarContents.__proto__),
    createState: dart.fnType(dart.legacy(top_bar_contents._TopBarContentsState), [])
  }));
  dart.setLibraryUri(top_bar_contents.TopBarContents, L2);
  dart.setFieldSignature(top_bar_contents.TopBarContents, () => ({
    __proto__: dart.getFields(top_bar_contents.TopBarContents.__proto__),
    opacity: dart.finalFieldType(dart.legacy(core.double))
  }));
  var _isHovering = dart.privateName(top_bar_contents, "_isHovering");
  var _isProcessing$ = dart.privateName(top_bar_contents, "_isProcessing");
  var C252;
  var C253;
  var C251;
  var C250;
  var C254;
  var C257;
  var C258;
  var C256;
  var C255;
  var C261;
  var C260;
  var C259;
  var C262;
  var C265;
  var C266;
  var C264;
  var C263;
  var C269;
  var C270;
  var C268;
  var C267;
  var C273;
  var C274;
  var C275;
  var C272;
  var C271;
  var C278;
  var C277;
  var C276;
  var C279;
  var C282;
  var C283;
  var C281;
  var C280;
  var C286;
  var C287;
  var C285;
  var C284;
  var C290;
  var C291;
  var C292;
  var C289;
  var C288;
  var C295;
  var C294;
  var C293;
  var C298;
  var C299;
  var C297;
  var C296;
  var C302;
  var C303;
  var C301;
  var C300;
  var C306;
  var C307;
  var C308;
  var C305;
  var C304;
  var C310;
  var C309;
  var C313;
  var C312;
  var C311;
  var C316;
  var C315;
  var C314;
  var C317;
  var C320;
  var C321;
  var C319;
  var C318;
  var C324;
  var C325;
  var C323;
  var C322;
  var C326;
  var C329;
  var C330;
  var C331;
  var C328;
  var C327;
  var C334;
  var C333;
  var C332;
  var C337;
  var C338;
  var C336;
  var C335;
  var C341;
  var C340;
  var C339;
  var C342;
  var C343;
  var C346;
  var C347;
  var C345;
  var C344;
  var C350;
  var C351;
  var C349;
  var C348;
  var C354;
  var C355;
  var C356;
  var C357;
  var C358;
  var C359;
  var C353;
  var C352;
  var C362;
  var C361;
  var C360;
  var C365;
  var C366;
  var C367;
  var C364;
  var C363;
  var C370;
  var C371;
  var C369;
  var C368;
  var C374;
  var C375;
  var C373;
  var C372;
  var C378;
  var C379;
  var C377;
  var C376;
  var C382;
  var C383;
  var C381;
  var C380;
  top_bar_contents._TopBarContentsState = class _TopBarContentsState extends framework.State$(dart.legacy(top_bar_contents.TopBarContents)) {
    build(context) {
      let t0;
      let screenSize = media_query.MediaQuery.of(context).size;
      return new preferred_size.PreferredSize.new({preferredSize: new ui.Size.new(screenSize.width, 1000.0), child: new container.Container.new({color: theme.Theme.of(context).bottomAppBarColor.withOpacity(this.widget.opacity), child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(20.0), child: new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidgetL().of([new material_button.MaterialButton.new({child: new text.Text.new("ARtifacts", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 20.0, fontFamily: "Montserrat", fontWeight: ui.FontWeight.w400, letterSpacing: 3.0}), $creationLocationd_0dea112b090073317d4: C250 || CT.C250}), onPressed: dart.fn(() => {
                    navigator.Navigator.of(context).pushReplacement(dart.dynamic, ObjectL(), new page.MaterialPageRoute.new({builder: dart.fn(context => new home_page.HomePage.new({$creationLocationd_0dea112b090073317d4: C254 || CT.C254}), BuildContextLToHomePageL())}));
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C255 || CT.C255}), new basic.Expanded.new({child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidgetL().of([new basic.SizedBox.new({width: dart.notNull(screenSize.width) / 20, $creationLocationd_0dea112b090073317d4: C259 || CT.C259}), new ink_well.InkWell.new({onHover: dart.fn(value => {
                          this.setState(dart.fn(() => {
                            let t2, t1, t0, t2$, t1$, t0$;
                            dart.test(value) ? (t0 = this[_isHovering], t1 = 0, t2 = true, t0[$_set](t1, t2), t2) : (t0$ = this[_isHovering], t1$ = 0, t2$ = false, t0$[$_set](t1$, t2$), t2$);
                          }, VoidToNull()));
                        }, boolLToNull()), onTap: dart.fn(() => {
                          navigator.Navigator.of(context).pushReplacement(dart.dynamic, ObjectL(), new page.MaterialPageRoute.new({builder: dart.fn(context => new home_page.HomePage.new({$creationLocationd_0dea112b090073317d4: C262 || CT.C262}), BuildContextLToHomePageL())}));
                        }, VoidToNull()), child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidgetL().of([new text.Text.new("Discover", {style: new text_style.TextStyle.new({fontFamily: "Montserrat", color: dart.dtest(this[_isHovering][$_get](0)) ? colors.Colors.blue._get(200) : colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C263 || CT.C263})]), $creationLocationd_0dea112b090073317d4: C267 || CT.C267}), $creationLocationd_0dea112b090073317d4: C271 || CT.C271}), new basic.SizedBox.new({width: dart.notNull(screenSize.width) / 20, $creationLocationd_0dea112b090073317d4: C276 || CT.C276}), new ink_well.InkWell.new({onHover: dart.fn(value => {
                          this.setState(dart.fn(() => {
                            let t2, t1, t0, t2$, t1$, t0$;
                            dart.test(value) ? (t0 = this[_isHovering], t1 = 1, t2 = true, t0[$_set](t1, t2), t2) : (t0$ = this[_isHovering], t1$ = 1, t2$ = false, t0$[$_set](t1$, t2$), t2$);
                          }, VoidToNull()));
                        }, boolLToNull()), onTap: dart.fn(() => {
                          navigator.Navigator.of(context).pushReplacement(dart.dynamic, ObjectL(), new page.MaterialPageRoute.new({builder: dart.fn(context => new product_catalog.ProductCatalog.new({$creationLocationd_0dea112b090073317d4: C279 || CT.C279}), BuildContextLToProductCatalogL())}));
                        }, VoidToNull()), child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidgetL().of([new text.Text.new("Catalog", {style: new text_style.TextStyle.new({fontFamily: "Montserrat", color: dart.dtest(this[_isHovering][$_get](1)) ? colors.Colors.blue._get(200) : colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C280 || CT.C280})]), $creationLocationd_0dea112b090073317d4: C284 || CT.C284}), $creationLocationd_0dea112b090073317d4: C288 || CT.C288}), new basic.SizedBox.new({width: dart.notNull(screenSize.width) / 20, $creationLocationd_0dea112b090073317d4: C293 || CT.C293}), new ink_well.InkWell.new({onHover: dart.fn(value => {
                          this.setState(dart.fn(() => {
                            let t2, t1, t0, t2$, t1$, t0$;
                            dart.test(value) ? (t0 = this[_isHovering], t1 = 2, t2 = true, t0[$_set](t1, t2), t2) : (t0$ = this[_isHovering], t1$ = 2, t2$ = false, t0$[$_set](t1$, t2$), t2$);
                          }, VoidToNull()));
                        }, boolLToNull()), onTap: dart.fn(() => {
                        }, VoidToNull()), child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidgetL().of([new text.Text.new("Contact Us", {style: new text_style.TextStyle.new({fontFamily: "Montserrat", color: dart.dtest(this[_isHovering][$_get](2)) ? colors.Colors.blue._get(200) : colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C296 || CT.C296})]), $creationLocationd_0dea112b090073317d4: C300 || CT.C300}), $creationLocationd_0dea112b090073317d4: C304 || CT.C304})]), $creationLocationd_0dea112b090073317d4: C309 || CT.C309}), $creationLocationd_0dea112b090073317d4: C311 || CT.C311}), new basic.SizedBox.new({width: dart.notNull(screenSize.width) / 50, $creationLocationd_0dea112b090073317d4: C314 || CT.C314}), new ink_well.InkWell.new({onHover: dart.fn(value => {
                    this.setState(dart.fn(() => {
                      let t2, t1, t0, t2$, t1$, t0$;
                      dart.test(value) ? (t0 = this[_isHovering], t1 = 3, t2 = true, t0[$_set](t1, t2), t2) : (t0$ = this[_isHovering], t1$ = 3, t2$ = false, t0$[$_set](t1$, t2$), t2$);
                    }, VoidToNull()));
                  }, boolLToNull()), onTap: authentication.userEmail == null ? dart.fn(() => {
                    dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new auth_dialog.AuthDialog.new({$creationLocationd_0dea112b090073317d4: C317 || CT.C317}), BuildContextLToAuthDialogL())});
                  }, VoidToNull()) : null, child: authentication.userEmail == null ? new text.Text.new("Sign in", {style: new text_style.TextStyle.new({color: dart.dtest(this[_isHovering][$_get](3)) ? colors.Colors.blue._get(200) : colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C318 || CT.C318}) : new basic.Row.new({children: JSArrayOfWidgetL().of([new circle_avatar.CircleAvatar.new({radius: 15.0, backgroundImage: authentication.imageUrl != null ? new _network_image_web.NetworkImage.new(authentication.imageUrl) : null, child: authentication.imageUrl == null ? new icon.Icon.new(icons.Icons.account_circle, {size: 30.0, $creationLocationd_0dea112b090073317d4: C322 || CT.C322}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C326 || CT.C326}), $creationLocationd_0dea112b090073317d4: C327 || CT.C327}), new basic.SizedBox.new({width: 5.0, $creationLocationd_0dea112b090073317d4: C332 || CT.C332}), new text.Text.new((t0 = authentication.name, t0 == null ? authentication.userEmail : t0), {style: new text_style.TextStyle.new({fontFamily: "Montserrat", color: dart.dtest(this[_isHovering][$_get](3)) ? colors.Colors.white : colors.Colors.white70}), $creationLocationd_0dea112b090073317d4: C335 || CT.C335}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C339 || CT.C339}), new material_button.MaterialButton.new({color: colors.Colors.blueGrey, hoverColor: colors.Colors.blueGrey._get(700), highlightColor: colors.Colors.blueGrey._get(800), onPressed: dart.test(this[_isProcessing$]) ? null : dart.fn(() => async.async(core.Null, (function*() {
                          this.setState(dart.fn(() => {
                            this[_isProcessing$] = true;
                          }, VoidToNull()));
                          yield authentication.signOut().then(core.Null, dart.fn(result => {
                            core.print(result);
                            navigator.Navigator.of(context).pushReplacement(dart.dynamic, ObjectL(), new page.MaterialPageRoute.new({fullscreenDialog: true, builder: dart.fn(context => new home_page.HomePage.new({$creationLocationd_0dea112b090073317d4: C342 || CT.C342}), BuildContextLToHomePageL())}));
                          }, StringLToNull())).catchError(dart.fn(error => {
                            core.print("Sign Out Error: " + dart.str(error));
                          }, dynamicToNull()));
                          this.setState(dart.fn(() => {
                            this[_isProcessing$] = false;
                          }, VoidToNull()));
                        }).bind(this)), VoidToFutureLOfNull()), shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(15.0)}), child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: 8.0, bottom: 8.0}), child: dart.test(this[_isProcessing$]) ? new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C343 || CT.C343}) : new text.Text.new("Sign out", {style: new text_style.TextStyle.new({fontFamily: "Montserrat", fontSize: 14.0, color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C344 || CT.C344}), $creationLocationd_0dea112b090073317d4: C348 || CT.C348}), $creationLocationd_0dea112b090073317d4: C352 || CT.C352})]), $creationLocationd_0dea112b090073317d4: C360 || CT.C360}), $creationLocationd_0dea112b090073317d4: C363 || CT.C363})]), $creationLocationd_0dea112b090073317d4: C368 || CT.C368}), $creationLocationd_0dea112b090073317d4: C372 || CT.C372}), $creationLocationd_0dea112b090073317d4: C376 || CT.C376}), $creationLocationd_0dea112b090073317d4: C380 || CT.C380});
    }
  };
  (top_bar_contents._TopBarContentsState.new = function() {
    this[_isHovering] = [false, false, false, false, false, false, false, false];
    this[_isProcessing$] = false;
    top_bar_contents._TopBarContentsState.__proto__.new.call(this);
    ;
  }).prototype = top_bar_contents._TopBarContentsState.prototype;
  dart.addTypeTests(top_bar_contents._TopBarContentsState);
  dart.addTypeCaches(top_bar_contents._TopBarContentsState);
  dart.setMethodSignature(top_bar_contents._TopBarContentsState, () => ({
    __proto__: dart.getMethods(top_bar_contents._TopBarContentsState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(top_bar_contents._TopBarContentsState, L2);
  dart.setFieldSignature(top_bar_contents._TopBarContentsState, () => ({
    __proto__: dart.getFields(top_bar_contents._TopBarContentsState.__proto__),
    [_isHovering]: dart.finalFieldType(dart.legacy(core.List)),
    [_isProcessing$]: dart.fieldType(dart.legacy(core.bool))
  }));
  var productId$ = dart.privateName(product_page, "ProductPage.productId");
  var status$ = dart.privateName(product_page, "ProductPage.status");
  var index$ = dart.privateName(product_page, "ProductPage.index");
  var snap$ = dart.privateName(product_page, "ProductPage.snap");
  product_page.ProductPage = class ProductPage extends framework.StatefulWidget {
    get productId() {
      return this[productId$];
    }
    set productId(value) {
      super.productId = value;
    }
    get status() {
      return this[status$];
    }
    set status(value) {
      super.status = value;
    }
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get snap() {
      return this[snap$];
    }
    set snap(value) {
      super.snap = value;
    }
    createState() {
      return new product_page._ProductPageState.new();
    }
  };
  (product_page.ProductPage.new = function(productId, status, snap, index, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[productId$] = productId;
    this[status$] = status;
    this[snap$] = snap;
    this[index$] = index;
    product_page.ProductPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = product_page.ProductPage.prototype;
  dart.addTypeTests(product_page.ProductPage);
  dart.addTypeCaches(product_page.ProductPage);
  dart.setMethodSignature(product_page.ProductPage, () => ({
    __proto__: dart.getMethods(product_page.ProductPage.__proto__),
    createState: dart.fnType(dart.legacy(product_page._ProductPageState), [])
  }));
  dart.setLibraryUri(product_page.ProductPage, L3);
  dart.setFieldSignature(product_page.ProductPage, () => ({
    __proto__: dart.getFields(product_page.ProductPage.__proto__),
    productId: dart.finalFieldType(dart.legacy(core.String)),
    status: dart.finalFieldType(dart.legacy(core.String)),
    index: dart.finalFieldType(dart.legacy(core.int)),
    snap: dart.finalFieldType(dart.dynamic)
  }));
  var C386;
  var C387;
  var C385;
  var C384;
  var C390;
  var C389;
  var C388;
  var C393;
  var C394;
  var C392;
  var C391;
  var C397;
  var C398;
  var C399;
  var C396;
  var C395;
  var C402;
  var C403;
  var C404;
  var C401;
  var C400;
  var C407;
  var C408;
  var C406;
  var C405;
  var C411;
  var C412;
  var C410;
  var C409;
  var C415;
  var C414;
  var C413;
  var C418;
  var C419;
  var C417;
  var C416;
  var C422;
  var C423;
  var C421;
  var C420;
  var C426;
  var C427;
  var C428;
  var C425;
  var C424;
  var C431;
  var C432;
  var C433;
  var C434;
  var C430;
  var C429;
  var C437;
  var C436;
  var C435;
  var C440;
  var C441;
  var C439;
  var C438;
  var C442;
  var C445;
  var C444;
  var C443;
  var C446;
  var C449;
  var C448;
  var C447;
  var C452;
  var C453;
  var C451;
  var C450;
  var C456;
  var C457;
  var C455;
  var C454;
  var C460;
  var C461;
  var C459;
  var C458;
  var C464;
  var C465;
  var C463;
  var C462;
  var C468;
  var C469;
  var C467;
  var C466;
  var C472;
  var C473;
  var C471;
  var C470;
  var C476;
  var C477;
  var C475;
  var C474;
  var C480;
  var C481;
  var C479;
  var C478;
  var C484;
  var C485;
  var C486;
  var C483;
  var C482;
  var C489;
  var C490;
  var C488;
  var C487;
  var C493;
  var C494;
  var C495;
  var C492;
  var C491;
  var C498;
  var C499;
  var C497;
  var C496;
  var C502;
  var C501;
  var C500;
  var C505;
  var C506;
  var C507;
  var C504;
  var C503;
  var C510;
  var C511;
  var C512;
  var C509;
  var C508;
  var C513;
  var C516;
  var C517;
  var C518;
  var C515;
  var C514;
  var C521;
  var C520;
  var C519;
  var C524;
  var C525;
  var C526;
  var C523;
  var C522;
  var C529;
  var C528;
  var C527;
  var C532;
  var C533;
  var C534;
  var C531;
  var C530;
  var C537;
  var C538;
  var C536;
  var C535;
  var C541;
  var C542;
  var C543;
  var C540;
  var C539;
  var C546;
  var C547;
  var C545;
  var C544;
  var C550;
  var C551;
  var C549;
  var C548;
  var C554;
  var C555;
  var C553;
  var C552;
  var C558;
  var C559;
  var C557;
  var C556;
  var C562;
  var C561;
  var C560;
  var C565;
  var C566;
  var C564;
  var C563;
  var C569;
  var C570;
  var C568;
  var C567;
  var C573;
  var C574;
  var C572;
  var C571;
  var C577;
  var C576;
  var C575;
  var C580;
  var C581;
  var C579;
  var C578;
  var C584;
  var C585;
  var C583;
  var C582;
  var C588;
  var C589;
  var C587;
  var C586;
  var C592;
  var C593;
  var C594;
  var C595;
  var C591;
  var C590;
  product_page._ProductPageState = class _ProductPageState extends framework.State$(dart.legacy(product_page.ProductPage)) {
    initState() {
      this.getTimeStatus();
      this.arUrl = this.createDynamicLink(this.widget.productId);
      super.initState();
    }
    getTimeStatus() {
      let s = TimestampL().as(dart.dsend(dart.dsend(dart.dload(dart.dload(this.widget.snap, 'data'), 'docs'), '_get', [this.widget.index]), '_get', ["startDate"]));
      let e = TimestampL().as(dart.dsend(dart.dsend(dart.dload(dart.dload(this.widget.snap, 'data'), 'docs'), '_get', [this.widget.index]), '_get', ["endDate"]));
      this.differenceS = s.toDate().difference(new core.DateTime.now()).inSeconds;
      this.differenceE = e.toDate().difference(new core.DateTime.now()).inSeconds;
    }
    createDynamicLink(id) {
      return async.async(StringL(), function* createDynamicLink() {
        let parameters = new firebase_dynamic_links.DynamicLinkParameters.new({uriPrefix: "https://artifacts.page.link", link: core.Uri.parse("https://artifacts.page.link/?id=" + dart.str(id))});
        let shortDynamicLink = (yield parameters.buildShortLink());
        let shortUrl = shortDynamicLink.shortUrl;
        return dart.toString(shortUrl);
      });
    }
    openQrCode(snapshot) {
      dialog.showDialog(dart.dynamic, {context: this.context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("View This Artifact in AR", {style: new text_style.TextStyle.new({fontSize: 24.0, fontFamily: "Montserrat", fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C384 || CT.C384}), actions: JSArrayOfWidgetL().of([new text_button.TextButton.new({onPressed: dart.fn(() => {
                navigator.Navigator.of(context).pop(ObjectL());
              }, VoidToNull()), child: new text.Text.new("Close", {$creationLocationd_0dea112b090073317d4: C388 || CT.C388}), $creationLocationd_0dea112b090073317d4: C391 || CT.C391})]), actionsPadding: new edge_insets.EdgeInsets.symmetric({horizontal: 8.0}), content: new container.Container.new({width: 400.0, height: 450.0, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidgetL().of([new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(15.0), child: new basic.Padding.new({padding: C218 || CT.C218, child: new card.Card.new({color: colors.Colors.white70, elevation: 6.0, child: new qr_image.QrImage.new({data: "https://www.google.com/", version: -1, size: 300.0, $creationLocationd_0dea112b090073317d4: C395 || CT.C395}), $creationLocationd_0dea112b090073317d4: C400 || CT.C400}), $creationLocationd_0dea112b090073317d4: C405 || CT.C405}), $creationLocationd_0dea112b090073317d4: C409 || CT.C409}), new basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: C413 || CT.C413}), new text.Text.new("1. Scan this QR code.\n2. You will be redirected to the Appstore.\n3. Once the app is downloaded, you will be taken to the AR View automatically.", {style: new text_style.TextStyle.new({fontSize: 16.0, fontFamily: "Montserrat", fontWeight: ui.FontWeight.bold, height: 1.5}), $creationLocationd_0dea112b090073317d4: C416 || CT.C416})]), $creationLocationd_0dea112b090073317d4: C420 || CT.C420}), $creationLocationd_0dea112b090073317d4: C424 || CT.C424}), $creationLocationd_0dea112b090073317d4: C429 || CT.C429}), BuildContextLToAlertDialogL())});
    }
    build(context) {
      let screenSize = media_query.MediaQuery.of(context).size;
      return new scaffold.Scaffold.new({backgroundColor: theme.Theme.of(context).backgroundColor, extendBodyBehindAppBar: false, appBar: new preferred_size.PreferredSize.new({preferredSize: new ui.Size.new(screenSize.width, 1000.0), child: new top_bar_contents.TopBarContents.new(1.0, {$creationLocationd_0dea112b090073317d4: C435 || CT.C435}), $creationLocationd_0dea112b090073317d4: C438 || CT.C438}), body: new (StreamBuilderOfDocumentSnapshotL()).new({stream: cloud_firestore.FirebaseFirestore.instance.collection("Product").doc(this.widget.productId).snapshots(), builder: dart.fn((context, snapshot) => {
            if (!dart.test(snapshot.hasData)) {
              return new basic.Center.new({child: new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C442 || CT.C442}), $creationLocationd_0dea112b090073317d4: C443 || CT.C443});
            }
            return new container.Container.new({color: new ui.Color.new(4293980400), child: new basic.Padding.new({padding: C105 || CT.C105, child: new basic.Row.new({children: JSArrayOfWidgetL().of([new basic.Expanded.new({flex: 1, child: new basic.Padding.new({padding: C218 || CT.C218, child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: new ui.Color.new(4294704123), borderRadius: new border_radius.BorderRadius.circular(20.0)}), child: new basic.Padding.new({padding: C446 || CT.C446, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidgetL().of([new basic.Expanded.new({flex: 5, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(10.0), child: new basic.Padding.new({padding: C218 || CT.C218, child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10.0), image: new decoration_image.DecorationImage.new({image: new _network_image_web.NetworkImage.new(core.String.as(dart.dsend(snapshot.data, '_get', ["productImageUrl"]))), fit: box_fit.BoxFit.cover}), boxShadow: JSArrayOfBoxShadowL().of([new box_shadow.BoxShadow.new({color: colors.Colors.grey, blurRadius: 5.0})])}), $creationLocationd_0dea112b090073317d4: C447 || CT.C447}), $creationLocationd_0dea112b090073317d4: C450 || CT.C450}), $creationLocationd_0dea112b090073317d4: C454 || CT.C454}), $creationLocationd_0dea112b090073317d4: C458 || CT.C458}), new basic.Expanded.new({flex: 3, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidgetL().of([new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 20.0, right: 20.0}), child: new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.start, mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidgetL().of([new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidgetL().of([new text.Text.new(this.widget.status === "will_start" ? "Current Bid" : this.widget.status === "in_progress" ? "Current Bid" : "Sold for", {style: new text_style.TextStyle.new({fontSize: 15.0, fontFamily: "Montserrat"}), $creationLocationd_0dea112b090073317d4: C462 || CT.C462}), new text.Text.new(this.widget.status === "will_start" ? "Starting Soon" : this.widget.status === "in_progress" ? "INR " + dart.str(this.currencyFormat.format(core.double.parse(core.String.as(dart.dsend(snapshot.data, '_get', ["currentBid"]))))) : "INR 20,000.00", {style: new text_style.TextStyle.new({fontSize: 18.0, fontFamily: "Montserrat", fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C466 || CT.C466})]), $creationLocationd_0dea112b090073317d4: C470 || CT.C470}), new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidgetL().of([new text.Text.new(this.widget.status === "will_start" ? "Starts in" : this.widget.status === "in_progress" ? "Ends in" : "Ended", {style: new text_style.TextStyle.new({fontSize: 15.0, fontFamily: "Montserrat"}), $creationLocationd_0dea112b090073317d4: C474 || CT.C474}), this.widget.status === "ended" ? new text.Text.new("-", {style: new text_style.TextStyle.new({fontSize: 18.0, fontFamily: "Montserrat", fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C478 || CT.C478}) : new time_formatter.CountDownTimer.new({secondsRemaining: intL().as(this.widget.status === "will_start" ? this.differenceS : this.widget.status === "in_progress" ? this.differenceE : 0), whenTimeExpires: dart.fn(() => {
                                                  }, VoidToNull()), countDownTimerStyle: new text_style.TextStyle.new({fontSize: 18.0, fontFamily: "Montserrat", fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C482 || CT.C482})]), $creationLocationd_0dea112b090073317d4: C487 || CT.C487})]), $creationLocationd_0dea112b090073317d4: C491 || CT.C491}), $creationLocationd_0dea112b090073317d4: C496 || CT.C496}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C500 || CT.C500}), new basic.Column.new({children: JSArrayOfWidgetL().of([this.widget.status === "will_start" ? new my_button.MyButton.new({name: " Notify Me", icon: icons.Icons.notifications, onPressed: dart.fn(() => {
                                            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C503 || CT.C503}) : this.widget.status === "in_progress" ? new my_button.MyButton.new({name: "Place Bid", icon: icons.Icons.attach_money, onPressed: dart.fn(() => {
                                            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C508 || CT.C508}) : new my_button.MyButton.new({name: " Go to Catalog", icon: icons.Icons.shopping_cart, onPressed: dart.fn(() => {
                                              navigator.Navigator.of(context).pushReplacement(dart.dynamic, ObjectL(), new page.MaterialPageRoute.new({builder: dart.fn(context => new product_catalog.ProductCatalog.new({$creationLocationd_0dea112b090073317d4: C513 || CT.C513}), BuildContextLToProductCatalogL())}));
                                            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C514 || CT.C514}), new basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: C519 || CT.C519}), new my_button.MyButton.new({name: " View in AR", icon: icons.Icons.play_circle_outline_outlined, onPressed: dart.fn(() => {
                                              this.openQrCode(snapshot);
                                            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C522 || CT.C522})]), $creationLocationd_0dea112b090073317d4: C527 || CT.C527})]), $creationLocationd_0dea112b090073317d4: C530 || CT.C530}), $creationLocationd_0dea112b090073317d4: C535 || CT.C535})]), $creationLocationd_0dea112b090073317d4: C539 || CT.C539}), $creationLocationd_0dea112b090073317d4: C544 || CT.C544}), $creationLocationd_0dea112b090073317d4: C548 || CT.C548}), $creationLocationd_0dea112b090073317d4: C552 || CT.C552}), $creationLocationd_0dea112b090073317d4: C556 || CT.C556}), new basic.Expanded.new({flex: 2, child: new basic.Padding.new({padding: C218 || CT.C218, child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: new ui.Color.new(4294704123), borderRadius: new border_radius.BorderRadius.circular(20.0)}), child: new product_right.ProductRight.new({productId: this.widget.productId, $creationLocationd_0dea112b090073317d4: C560 || CT.C560}), $creationLocationd_0dea112b090073317d4: C563 || CT.C563}), $creationLocationd_0dea112b090073317d4: C567 || CT.C567}), $creationLocationd_0dea112b090073317d4: C571 || CT.C571})]), $creationLocationd_0dea112b090073317d4: C575 || CT.C575}), $creationLocationd_0dea112b090073317d4: C578 || CT.C578}), $creationLocationd_0dea112b090073317d4: C582 || CT.C582});
          }, BuildContextLAndAsyncSnapshotLToWidgetL()), $creationLocationd_0dea112b090073317d4: C586 || CT.C586}), $creationLocationd_0dea112b090073317d4: C590 || CT.C590});
    }
  };
  (product_page._ProductPageState.new = function() {
    this.arUrl = null;
    this.currencyFormat = intl.NumberFormat.new("#,##0.00", "en_US");
    this.differenceS = null;
    this.differenceE = null;
    product_page._ProductPageState.__proto__.new.call(this);
    ;
  }).prototype = product_page._ProductPageState.prototype;
  dart.addTypeTests(product_page._ProductPageState);
  dart.addTypeCaches(product_page._ProductPageState);
  dart.setMethodSignature(product_page._ProductPageState, () => ({
    __proto__: dart.getMethods(product_page._ProductPageState.__proto__),
    getTimeStatus: dart.fnType(dart.dynamic, []),
    createDynamicLink: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), [dart.legacy(core.String)]),
    openQrCode: dart.fnType(dart.dynamic, [dart.dynamic]),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(product_page._ProductPageState, L3);
  dart.setFieldSignature(product_page._ProductPageState, () => ({
    __proto__: dart.getFields(product_page._ProductPageState.__proto__),
    arUrl: dart.fieldType(dart.dynamic),
    currencyFormat: dart.finalFieldType(dart.legacy(intl.NumberFormat)),
    differenceS: dart.fieldType(dart.dynamic),
    differenceE: dart.fieldType(dart.dynamic)
  }));
  var snapshot$ = dart.privateName(tile_card, "TileCard.snapshot");
  var screenSize$ = dart.privateName(tile_card, "TileCard.screenSize");
  var index$0 = dart.privateName(tile_card, "TileCard.index");
  tile_card.TileCard = class TileCard extends framework.StatefulWidget {
    get snapshot() {
      return this[snapshot$];
    }
    set snapshot(value) {
      super.snapshot = value;
    }
    get screenSize() {
      return this[screenSize$];
    }
    set screenSize(value) {
      super.screenSize = value;
    }
    get index() {
      return this[index$0];
    }
    set index(value) {
      super.index = value;
    }
    createState() {
      return new tile_card._TileCardState.new();
    }
  };
  (tile_card.TileCard.new = function(snapshot = null, screenSize = null, index = null) {
    this[snapshot$] = snapshot;
    this[screenSize$] = screenSize;
    this[index$0] = index;
    tile_card.TileCard.__proto__.new.call(this);
    ;
  }).prototype = tile_card.TileCard.prototype;
  dart.addTypeTests(tile_card.TileCard);
  dart.addTypeCaches(tile_card.TileCard);
  dart.setMethodSignature(tile_card.TileCard, () => ({
    __proto__: dart.getMethods(tile_card.TileCard.__proto__),
    createState: dart.fnType(dart.legacy(tile_card._TileCardState), [])
  }));
  dart.setLibraryUri(tile_card.TileCard, L4);
  dart.setFieldSignature(tile_card.TileCard, () => ({
    __proto__: dart.getFields(tile_card.TileCard.__proto__),
    snapshot: dart.finalFieldType(dart.legacy(async$.AsyncSnapshot$(dart.legacy(cloud_firestore.QuerySnapshot)))),
    screenSize: dart.finalFieldType(dart.legacy(ui.Size)),
    index: dart.finalFieldType(dart.legacy(core.int))
  }));
  var _isHovering$ = dart.privateName(tile_card, "_isHovering");
  var C598;
  var C597;
  var C596;
  var C601;
  var C602;
  var C603;
  var C604;
  var C600;
  var C599;
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C605;
  var C608;
  var C609;
  var C607;
  var C606;
  var C612;
  var C613;
  var C611;
  var C610;
  var C616;
  var C617;
  var C618;
  var C615;
  var C614;
  var C621;
  var C622;
  var C620;
  var C619;
  var C625;
  var C624;
  var C623;
  var C628;
  var C629;
  var C627;
  var C626;
  var C632;
  var C633;
  var C634;
  var C631;
  var C630;
  var C637;
  var C638;
  var C639;
  var C640;
  var C641;
  var C636;
  var C635;
  var C644;
  var C645;
  var C643;
  var C642;
  var C648;
  var C649;
  var C647;
  var C646;
  var C652;
  var C653;
  var C651;
  var C650;
  var C656;
  var C657;
  var C655;
  var C654;
  var C660;
  var C661;
  var C659;
  var C658;
  var C664;
  var C665;
  var C666;
  var C663;
  var C662;
  var C669;
  var C670;
  var C668;
  var C667;
  var C673;
  var C674;
  var C672;
  var C671;
  var C677;
  var C678;
  var C679;
  var C680;
  var C681;
  var C676;
  var C675;
  var C684;
  var C685;
  var C683;
  var C682;
  var C688;
  var C689;
  var C687;
  var C686;
  var C692;
  var C693;
  var C694;
  var C695;
  var C691;
  var C690;
  var C698;
  var C699;
  var C700;
  var C701;
  var C697;
  var C696;
  var C704;
  var C703;
  var C702;
  tile_card._TileCardState = class _TileCardState extends framework.State$(dart.legacy(tile_card.TileCard)) {
    getTimeStatus() {
      let s = TimestampL().as(this.widget.snapshot.data.docs[$_get](this.widget.index)._get("startDate"));
      let e = TimestampL().as(this.widget.snapshot.data.docs[$_get](this.widget.index)._get("endDate"));
      this.differenceS = s.toDate().difference(new core.DateTime.now()).inSeconds;
      this.differenceE = e.toDate().difference(new core.DateTime.now()).inSeconds;
      if (dart.test(s.toDate().isAfter(new core.DateTime.now()))) {
        this.status = "will_start";
      } else if (dart.test(s.toDate().isBefore(new core.DateTime.now())) && dart.test(e.toDate().isAfter(new core.DateTime.now()))) {
        this.status = "in_progress";
      } else if (dart.test(e.toDate().isBefore(new core.DateTime.now()))) {
        this.status = "ended";
      }
    }
    initState() {
      this.getTimeStatus();
      super.initState();
    }
    build(context) {
      return new basic.Column.new({children: JSArrayOfWidgetL().of([new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C596 || CT.C596}), new ink_well.InkWell.new({onHover: dart.fn(value => {
              this.setState(dart.fn(() => {
                dart.test(value) ? this[_isHovering$] = true : this[_isHovering$] = false;
              }, VoidToNull()));
            }, boolLToNull()), hoverColor: new ui.Color.fromRGBO(256, 256, 256, 0.0), onTap: dart.fn(() => {
              navigator.Navigator.of(context).pushReplacement(dart.dynamic, ObjectL(), new page.MaterialPageRoute.new({builder: dart.fn(context => new product_page.ProductPage.new(this.widget.snapshot.data.docs[$_get](this.widget.index).id, this.status, this.widget.snapshot, this.widget.index, {$creationLocationd_0dea112b090073317d4: C599 || CT.C599}), BuildContextLToProductPageL())}));
            }, VoidToNull()), child: new implicit_animations.AnimatedContainer.new({decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10.0), boxShadow: JSArrayOfBoxShadowL().of([new box_shadow.BoxShadow.new({color: colors.Colors.grey, blurRadius: dart.test(this[_isHovering$]) ? 10.0 : 5.0})])}), duration: C605 || CT.C605, transform: dart.test(this[_isHovering$]) ? this.hoverTransform : this.nonHoverTransform, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidgetL().of([new basic.SizedBox.new({height: dart.notNull(this.widget.screenSize.width) / 6, width: dart.notNull(this.widget.screenSize.width) / 4.4, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.only({topLeft: new ui.Radius.circular(10.0), topRight: new ui.Radius.circular(10.0)}), child: new image.Image.network(core.String.as(this.widget.snapshot.data.docs[$_get](this.widget.index)._get("productImageUrl")), {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C606 || CT.C606}), $creationLocationd_0dea112b090073317d4: C610 || CT.C610}), $creationLocationd_0dea112b090073317d4: C614 || CT.C614}), new container.Container.new({height: dart.notNull(this.widget.screenSize.width) / 12, padding: new edge_insets.EdgeInsets.only({top: 14.0, left: 18.0, right: 18.0, bottom: 14.0}), width: dart.notNull(this.widget.screenSize.width) / 4.4, color: colors.Colors.white, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidgetL().of([new text.Text.new(core.String.as(this.widget.snapshot.data.docs[$_get](this.widget.index)._get("productName")), {style: new text_style.TextStyle.new({fontSize: 22.0, fontFamily: "Montserrat", fontWeight: ui.FontWeight.bold, color: theme.Theme.of(context).primaryTextTheme.subtitle1.color}), $creationLocationd_0dea112b090073317d4: C619 || CT.C619}), new basic.SizedBox.new({height: 2.0, $creationLocationd_0dea112b090073317d4: C623 || CT.C623}), new text.Text.new(core.String.as(this.widget.snapshot.data.docs[$_get](this.widget.index)._get("shortDesc")), {style: new text_style.TextStyle.new({fontSize: 13.0, fontFamily: "Montserrat"}), $creationLocationd_0dea112b090073317d4: C626 || CT.C626})]), $creationLocationd_0dea112b090073317d4: C630 || CT.C630}), $creationLocationd_0dea112b090073317d4: C635 || CT.C635}), new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.only({bottomLeft: new ui.Radius.circular(10.0), bottomRight: new ui.Radius.circular(10.0)}), child: new container.Container.new({padding: new edge_insets.EdgeInsets.only({top: 14.0, left: 18.0, right: 18.0, bottom: 14.0}), color: theme.Theme.of(context).bottomAppBarColor, height: dart.notNull(this.widget.screenSize.width) / 20, width: dart.notNull(this.widget.screenSize.width) / 4.4, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidgetL().of([new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidgetL().of([new text.Text.new(this.status === "will_start" ? "Base Price" : this.status === "in_progress" ? "Current Bid" : "Sold for", {style: new text_style.TextStyle.new({fontSize: 15.0, fontFamily: "Montserrat", color: colors.Colors.white60}), $creationLocationd_0dea112b090073317d4: C642 || CT.C642}), new text.Text.new(this.status === "will_start" ? "INR " + dart.str(this.currencyFormat.format(core.double.parse(core.String.as(this.widget.snapshot.data.docs[$_get](this.widget.index)._get("basePrice"))))) : this.status === "in_progress" ? "INR " + dart.str(this.currencyFormat.format(core.double.parse(core.String.as(this.widget.snapshot.data.docs[$_get](this.widget.index)._get("currentBid"))))) : "INR 20,000.00", {style: new text_style.TextStyle.new({fontSize: 18.0, fontFamily: "Montserrat", color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C646 || CT.C646})]), $creationLocationd_0dea112b090073317d4: C650 || CT.C650}), new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidgetL().of([new text.Text.new(this.status === "will_start" ? "Starts in" : this.status === "in_progress" ? "Ends in" : "Ended", {style: new text_style.TextStyle.new({fontSize: 15.0, fontFamily: "Montserrat", color: colors.Colors.white60}), $creationLocationd_0dea112b090073317d4: C654 || CT.C654}), this.status === "ended" ? new text.Text.new("-", {style: new text_style.TextStyle.new({fontSize: 18.0, fontFamily: "Montserrat", color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C658 || CT.C658}) : new time_formatter.CountDownTimer.new({secondsRemaining: intL().as(this.status === "will_start" ? this.differenceS : this.status === "in_progress" ? this.differenceE : 0), whenTimeExpires: dart.fn(() => {
                                }, VoidToNull()), countDownTimerStyle: new text_style.TextStyle.new({fontSize: 18.0, fontFamily: "Montserrat", color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C662 || CT.C662})]), $creationLocationd_0dea112b090073317d4: C667 || CT.C667})]), $creationLocationd_0dea112b090073317d4: C671 || CT.C671}), $creationLocationd_0dea112b090073317d4: C675 || CT.C675}), $creationLocationd_0dea112b090073317d4: C682 || CT.C682})]), $creationLocationd_0dea112b090073317d4: C686 || CT.C686}), $creationLocationd_0dea112b090073317d4: C690 || CT.C690}), $creationLocationd_0dea112b090073317d4: C696 || CT.C696})]), $creationLocationd_0dea112b090073317d4: C702 || CT.C702});
    }
  };
  (tile_card._TileCardState.new = function() {
    let t0, t0$, t0$0;
    this.nonHoverTransform = (t0 = vector_math_64.Matrix4.identity(), (() => {
      t0.translate(0, 0.0, 0.0);
      return t0;
    })());
    this.hoverTransform = (t0$ = vector_math_64.Matrix4.identity(), (() => {
      t0$.translate(0, -10.0, 0.0);
      return t0$;
    })());
    this.hoverTrans = (t0$0 = vector_math_64.Matrix4.identity(), (() => {
      t0$0.scale(1.02);
      return t0$0;
    })());
    this.currencyFormat = intl.NumberFormat.new("#,##0.00", "en_US");
    this[_isHovering$] = false;
    this.differenceS = null;
    this.differenceE = null;
    this.status = null;
    tile_card._TileCardState.__proto__.new.call(this);
    ;
  }).prototype = tile_card._TileCardState.prototype;
  dart.addTypeTests(tile_card._TileCardState);
  dart.addTypeCaches(tile_card._TileCardState);
  dart.setMethodSignature(tile_card._TileCardState, () => ({
    __proto__: dart.getMethods(tile_card._TileCardState.__proto__),
    getTimeStatus: dart.fnType(dart.dynamic, []),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(tile_card._TileCardState, L4);
  dart.setFieldSignature(tile_card._TileCardState, () => ({
    __proto__: dart.getFields(tile_card._TileCardState.__proto__),
    nonHoverTransform: dart.finalFieldType(dart.legacy(vector_math_64.Matrix4)),
    hoverTransform: dart.finalFieldType(dart.legacy(vector_math_64.Matrix4)),
    hoverTrans: dart.finalFieldType(dart.legacy(vector_math_64.Matrix4)),
    currencyFormat: dart.finalFieldType(dart.legacy(intl.NumberFormat)),
    [_isHovering$]: dart.fieldType(dart.legacy(core.bool)),
    differenceS: dart.fieldType(dart.dynamic),
    differenceE: dart.fieldType(dart.dynamic),
    status: dart.fieldType(dart.legacy(core.String))
  }));
  var screenSize$0 = dart.privateName(tiles_main, "TilesMain.screenSize");
  var isFeatured$ = dart.privateName(tiles_main, "TilesMain.isFeatured");
  tiles_main.TilesMain = class TilesMain extends framework.StatefulWidget {
    get screenSize() {
      return this[screenSize$0];
    }
    set screenSize(value) {
      super.screenSize = value;
    }
    get isFeatured() {
      return this[isFeatured$];
    }
    set isFeatured(value) {
      super.isFeatured = value;
    }
    createState() {
      return new tiles_main._TilesMainState.new();
    }
  };
  (tiles_main.TilesMain.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let screenSize = opts && 'screenSize' in opts ? opts.screenSize : null;
    let isFeatured = opts && 'isFeatured' in opts ? opts.isFeatured : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[screenSize$0] = screenSize;
    this[isFeatured$] = isFeatured;
    tiles_main.TilesMain.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = tiles_main.TilesMain.prototype;
  dart.addTypeTests(tiles_main.TilesMain);
  dart.addTypeCaches(tiles_main.TilesMain);
  dart.setMethodSignature(tiles_main.TilesMain, () => ({
    __proto__: dart.getMethods(tiles_main.TilesMain.__proto__),
    createState: dart.fnType(dart.legacy(tiles_main._TilesMainState), [])
  }));
  dart.setLibraryUri(tiles_main.TilesMain, L5);
  dart.setFieldSignature(tiles_main.TilesMain, () => ({
    __proto__: dart.getFields(tiles_main.TilesMain.__proto__),
    screenSize: dart.finalFieldType(dart.legacy(ui.Size)),
    isFeatured: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var C705;
  var C708;
  var C707;
  var C706;
  var C711;
  var C712;
  var C713;
  var C714;
  var C715;
  var C710;
  var C709;
  var C718;
  var C719;
  var C717;
  var C716;
  var C722;
  var C723;
  var C721;
  var C720;
  tiles_main._TilesMainState = class _TilesMainState extends framework.State$(dart.legacy(tiles_main.TilesMain)) {
    build(context) {
      return new (StreamBuilderOfQuerySnapshotL()).new({stream: dart.test(this.widget.isFeatured) ? cloud_firestore.FirebaseFirestore.instance.collection("Product").where("featured", {isEqualTo: true}).snapshots() : cloud_firestore.FirebaseFirestore.instance.collection("Product").snapshots(), builder: dart.fn((context, snapshot) => {
          if (!dart.test(snapshot.hasData)) {
            return new basic.Center.new({child: new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C705 || CT.C705}), $creationLocationd_0dea112b090073317d4: C706 || CT.C706});
          }
          return new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: 0.0, left: dart.notNull(this.widget.screenSize.width) / 22, right: dart.notNull(this.widget.screenSize.width) / 22}), child: new scroll_view.GridView.builder({physics: new scroll_physics.NeverScrollableScrollPhysics.new(), shrinkWrap: true, itemCount: snapshot.data.docs[$length], gridDelegate: new sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.new({crossAxisCount: 3, childAspectRatio: 3 / 3.5}), itemBuilder: dart.fn((context, index) => new tile_card.TileCard.new(snapshot, this.widget.screenSize, index), BuildContextLAndintLToTileCardL()), $creationLocationd_0dea112b090073317d4: C709 || CT.C709}), $creationLocationd_0dea112b090073317d4: C716 || CT.C716});
        }, BuildContextLAndAsyncSnapshotLOfQuerySnapshotLToSingleChildRenderObjectWidgetL()), $creationLocationd_0dea112b090073317d4: C720 || CT.C720});
    }
  };
  (tiles_main._TilesMainState.new = function() {
    tiles_main._TilesMainState.__proto__.new.call(this);
    ;
  }).prototype = tiles_main._TilesMainState.prototype;
  dart.addTypeTests(tiles_main._TilesMainState);
  dart.addTypeCaches(tiles_main._TilesMainState);
  dart.setMethodSignature(tiles_main._TilesMainState, () => ({
    __proto__: dart.getMethods(tiles_main._TilesMainState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(tiles_main._TilesMainState, L5);
  product_catalog.ProductCatalog = class ProductCatalog extends framework.StatefulWidget {
    createState() {
      return new product_catalog._ProductCatalogState.new();
    }
  };
  (product_catalog.ProductCatalog.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    product_catalog.ProductCatalog.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = product_catalog.ProductCatalog.prototype;
  dart.addTypeTests(product_catalog.ProductCatalog);
  dart.addTypeCaches(product_catalog.ProductCatalog);
  dart.setMethodSignature(product_catalog.ProductCatalog, () => ({
    __proto__: dart.getMethods(product_catalog.ProductCatalog.__proto__),
    createState: dart.fnType(dart.legacy(product_catalog._ProductCatalogState), [])
  }));
  dart.setLibraryUri(product_catalog.ProductCatalog, L6);
  dart.defineLazy(product_catalog.ProductCatalog, {
    /*product_catalog.ProductCatalog.route*/get route() {
      return "/";
    }
  }, true);
  var _opacity = dart.privateName(product_catalog, "_opacity");
  var C726;
  var C725;
  var C724;
  var C729;
  var C730;
  var C728;
  var C727;
  var C733;
  var C734;
  var C732;
  var C731;
  var C737;
  var C738;
  var C739;
  var C736;
  var C735;
  var C742;
  var C741;
  var C740;
  var C743;
  var C746;
  var C747;
  var C748;
  var C749;
  var C750;
  var C745;
  var C744;
  var C753;
  var C752;
  var C751;
  var C756;
  var C757;
  var C755;
  var C754;
  var C760;
  var C759;
  var C758;
  var C763;
  var C762;
  var C761;
  var C766;
  var C765;
  var C764;
  var C769;
  var C768;
  var C767;
  var C772;
  var C771;
  var C770;
  var C775;
  var C776;
  var C774;
  var C773;
  var C779;
  var C780;
  var C781;
  var C782;
  var C778;
  var C777;
  product_catalog._ProductCatalogState = class _ProductCatalogState extends framework.State$(dart.legacy(product_catalog.ProductCatalog)) {
    build(context) {
      let screenSize = media_query.MediaQuery.of(context).size;
      this[_opacity] = 1.0;
      return new scaffold.Scaffold.new({backgroundColor: theme.Theme.of(context).backgroundColor, extendBodyBehindAppBar: false, appBar: new preferred_size.PreferredSize.new({preferredSize: new ui.Size.new(screenSize.width, 1000.0), child: new top_bar_contents.TopBarContents.new(this[_opacity], {$creationLocationd_0dea112b090073317d4: C724 || CT.C724}), $creationLocationd_0dea112b090073317d4: C727 || CT.C727}), body: new single_child_scroll_view.SingleChildScrollView.new({physics: new scroll_physics.ClampingScrollPhysics.new(), child: new basic.Column.new({children: JSArrayOfWidgetL().of([new basic.Column.new({children: JSArrayOfWidgetL().of([new container.Container.new({child: new basic.SizedBox.new({height: dart.notNull(screenSize.height) * 0.45, width: screenSize.width, child: new image.Image.asset("assets/products.jpg", {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C731 || CT.C731}), $creationLocationd_0dea112b090073317d4: C735 || CT.C735}), $creationLocationd_0dea112b090073317d4: C740 || CT.C740}), new container.Container.new({child: new basic.Column.new({children: JSArrayOfWidgetL().of([new heading_main.HeadingMain.new({screenSize: screenSize, title1: "All Products", title2: "Check Out Every Product We Have To Offer |", title3: " Featured Products", onTap1: dart.fn(() => {
                            navigator.Navigator.of(context).pushReplacement(dart.dynamic, ObjectL(), new page.MaterialPageRoute.new({builder: dart.fn(context => new home_page.HomePage.new({$creationLocationd_0dea112b090073317d4: C743 || CT.C743}), BuildContextLToHomePageL())}));
                          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C744 || CT.C744}), new basic.SizedBox.new({height: dart.notNull(screenSize.height) * 0.05, $creationLocationd_0dea112b090073317d4: C751 || CT.C751}), new tiles_main.TilesMain.new({screenSize: screenSize, isFeatured: false, $creationLocationd_0dea112b090073317d4: C754 || CT.C754})]), $creationLocationd_0dea112b090073317d4: C758 || CT.C758}), $creationLocationd_0dea112b090073317d4: C761 || CT.C761})]), $creationLocationd_0dea112b090073317d4: C764 || CT.C764}), new basic.SizedBox.new({height: dart.notNull(screenSize.height) / 10, $creationLocationd_0dea112b090073317d4: C767 || CT.C767})]), $creationLocationd_0dea112b090073317d4: C770 || CT.C770}), $creationLocationd_0dea112b090073317d4: C773 || CT.C773}), $creationLocationd_0dea112b090073317d4: C777 || CT.C777});
    }
  };
  (product_catalog._ProductCatalogState.new = function() {
    this[_opacity] = 0.0;
    product_catalog._ProductCatalogState.__proto__.new.call(this);
    ;
  }).prototype = product_catalog._ProductCatalogState.prototype;
  dart.addTypeTests(product_catalog._ProductCatalogState);
  dart.addTypeCaches(product_catalog._ProductCatalogState);
  dart.setMethodSignature(product_catalog._ProductCatalogState, () => ({
    __proto__: dart.getMethods(product_catalog._ProductCatalogState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(product_catalog._ProductCatalogState, L6);
  dart.setFieldSignature(product_catalog._ProductCatalogState, () => ({
    __proto__: dart.getFields(product_catalog._ProductCatalogState.__proto__),
    [_opacity]: dart.fieldType(dart.legacy(core.double))
  }));
  home_page.HomePage = class HomePage extends framework.StatefulWidget {
    createState() {
      return new home_page._HomePageState.new();
    }
  };
  (home_page.HomePage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home_page.HomePage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home_page.HomePage.prototype;
  dart.addTypeTests(home_page.HomePage);
  dart.addTypeCaches(home_page.HomePage);
  dart.setMethodSignature(home_page.HomePage, () => ({
    __proto__: dart.getMethods(home_page.HomePage.__proto__),
    createState: dart.fnType(dart.legacy(home_page._HomePageState), [])
  }));
  dart.setLibraryUri(home_page.HomePage, L7);
  dart.defineLazy(home_page.HomePage, {
    /*home_page.HomePage.route*/get route() {
      return "/";
    }
  }, true);
  var _opacity$ = dart.privateName(home_page, "_opacity");
  var C785;
  var C784;
  var C783;
  var C788;
  var C789;
  var C787;
  var C786;
  var C792;
  var C793;
  var C791;
  var C790;
  var C796;
  var C797;
  var C798;
  var C795;
  var C794;
  var C801;
  var C800;
  var C799;
  var C804;
  var C803;
  var C802;
  var C805;
  var C808;
  var C809;
  var C810;
  var C811;
  var C812;
  var C807;
  var C806;
  var C815;
  var C814;
  var C813;
  var C818;
  var C819;
  var C817;
  var C816;
  var C822;
  var C821;
  var C820;
  var C825;
  var C824;
  var C823;
  var C828;
  var C827;
  var C826;
  var C831;
  var C830;
  var C829;
  var C834;
  var C833;
  var C832;
  var C837;
  var C836;
  var C835;
  var C840;
  var C839;
  var C838;
  var C843;
  var C844;
  var C845;
  var C846;
  var C842;
  var C841;
  home_page._HomePageState = class _HomePageState extends framework.State$(dart.legacy(home_page.HomePage)) {
    build(context) {
      let screenSize = media_query.MediaQuery.of(context).size;
      this[_opacity$] = 1.0;
      return new scaffold.Scaffold.new({backgroundColor: theme.Theme.of(context).backgroundColor, extendBodyBehindAppBar: false, appBar: new preferred_size.PreferredSize.new({preferredSize: new ui.Size.new(screenSize.width, 1000.0), child: new top_bar_contents.TopBarContents.new(this[_opacity$], {$creationLocationd_0dea112b090073317d4: C783 || CT.C783}), $creationLocationd_0dea112b090073317d4: C786 || CT.C786}), body: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Column.new({children: JSArrayOfWidgetL().of([new basic.Stack.new({children: JSArrayOfWidgetL().of([new container.Container.new({child: new basic.SizedBox.new({height: dart.notNull(screenSize.height) * 0.45, width: screenSize.width, child: new image.Image.asset("assets/cover.jpg", {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C790 || CT.C790}), $creationLocationd_0dea112b090073317d4: C794 || CT.C794}), $creationLocationd_0dea112b090073317d4: C799 || CT.C799}), new basic.Column.new({children: JSArrayOfWidgetL().of([new floating_quick_access_bar.FloatingQuickAccessBar.new({screenSize: screenSize, $creationLocationd_0dea112b090073317d4: C802 || CT.C802}), new container.Container.new({child: new basic.Column.new({children: JSArrayOfWidgetL().of([new heading_main.HeadingMain.new({screenSize: screenSize, title1: "Featured", title2: "Collection of Curated Artifacts |", title3: " All Products", onTap1: dart.fn(() => {
                                navigator.Navigator.of(context).pushReplacement(dart.dynamic, ObjectL(), new page.MaterialPageRoute.new({builder: dart.fn(context => new product_catalog.ProductCatalog.new({$creationLocationd_0dea112b090073317d4: C805 || CT.C805}), BuildContextLToProductCatalogL())}));
                              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C806 || CT.C806}), new basic.SizedBox.new({height: dart.notNull(screenSize.height) * 0.05, $creationLocationd_0dea112b090073317d4: C813 || CT.C813}), new tiles_main.TilesMain.new({screenSize: screenSize, isFeatured: true, $creationLocationd_0dea112b090073317d4: C816 || CT.C816})]), $creationLocationd_0dea112b090073317d4: C820 || CT.C820}), $creationLocationd_0dea112b090073317d4: C823 || CT.C823})]), $creationLocationd_0dea112b090073317d4: C826 || CT.C826})]), $creationLocationd_0dea112b090073317d4: C829 || CT.C829}), new basic.SizedBox.new({height: dart.notNull(screenSize.height) / 10, $creationLocationd_0dea112b090073317d4: C832 || CT.C832})]), $creationLocationd_0dea112b090073317d4: C835 || CT.C835}), $creationLocationd_0dea112b090073317d4: C838 || CT.C838}), $creationLocationd_0dea112b090073317d4: C841 || CT.C841});
    }
  };
  (home_page._HomePageState.new = function() {
    this[_opacity$] = 0.0;
    home_page._HomePageState.__proto__.new.call(this);
    ;
  }).prototype = home_page._HomePageState.prototype;
  dart.addTypeTests(home_page._HomePageState);
  dart.addTypeCaches(home_page._HomePageState);
  dart.setMethodSignature(home_page._HomePageState, () => ({
    __proto__: dart.getMethods(home_page._HomePageState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(home_page._HomePageState, L7);
  dart.setFieldSignature(home_page._HomePageState, () => ({
    __proto__: dart.getFields(home_page._HomePageState.__proto__),
    [_opacity$]: dart.fieldType(dart.legacy(core.double))
  }));
  dart.trackLibraries("packages/artif/widgets/google_sign_in_button.dart", {
    "package:artif/widgets/google_sign_in_button.dart": google_sign_in_button,
    "package:artif/widgets/auth_dialog.dart": auth_dialog,
    "package:artif/widgets/top_bar_contents.dart": top_bar_contents,
    "package:artif/screens/product_page.dart": product_page,
    "package:artif/widgets/tile_card.dart": tile_card,
    "package:artif/widgets/tiles_main.dart": tiles_main,
    "package:artif/screens/product_catalog.dart": product_catalog,
    "package:artif/screens/home_page.dart": home_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["google_sign_in_button.dart","auth_dialog.dart","top_bar_contents.dart","../screens/product_page.dart","tile_card.dart","tiles_main.dart","../screens/product_catalog.dart","../screens/home_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAMsC;IAAoB;;;;;;EAC1D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,6CACO,iDACH,uEACsB,wCAAS,aAC9B,mCAAyB,+BAAiB,gBAEpC,8BAET,wDACkB,AAAQ,4BAAC,mBACZ,AAAQ,4BAAC,iBAClB;AAGP,YAFF,cAAS;AACa,cAApB,sBAAgB;;AAehB,YAbF,MAAM,AAAmB,AAWtB,kDAX2B,QAAC;AAChB,cAAb,WAAM,MAAM;AACZ,kBAAI,MAAM,IAAI;AACe,gBAAjB,AAAY,uBAAT,OAAO;AAMnB,gBALS,AAAY,uBAAT,OAAO,2CAClB,kDACoB,eACT,QAAC,WAAY;;4CAIhB,QAAC;AACsB,cAAnC,WAAM,AAA4B,kCAAN,KAAK;;AAIjC,YAFF,cAAS;AACc,cAArB,sBAAgB;;UAEnB,+CACM,uEACsB,wCAAS,aAC9B,mCAAyB,+BAAiB,6BAE9B,YAEb,8DAEE,uBACD,kEACkB,2CACP,iFAGX,iCAC6B,0CACU,yCACnB,uBAChB,4BACS,oCAAW,mCACV,6DAEV,sDAES,kBACL,gCACO,wCACK,aACI;IAStC;;;IA1EK,sBAAgB;;;EA2EvB;;;;;;;;;;;;;;AC7EoC;IAAkB;;;;;;EACtD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;qBAiB+B;AACP,MAApB,QAAQ,AAAM,KAAD;AAEb,UAAI,AAAoB,iCAAQ;AAC9B,YAAI,AAAM,KAAD;AACP,gBAAO;cACF,MAAK,AAAM,KAAD,YAAU,gBACvB;AACF,gBAAO;;;AAIX,YAAO;IACT;wBAEgC;AACV,MAApB,QAAQ,AAAM,KAAD;AAEb,UAAI,AAAoB,iCAAQ;AAC9B,YAAI,AAAM,KAAD;AACP,gBAAO;cACF,KAAI,AAAM,AAAO,KAAR,UAAU;AACxB,gBAAO;;;AAIX,YAAO;IACT;;AAI+C,MAA7C,2BAAsB;AAC0B,MAAhD,8BAAyB;AACM,MAA/B,AAAoB,gCAAO;AACO,MAAlC,AAAuB,mCAAO;AACE,MAAhC,0BAAqB;AACc,MAAnC,6BAAwB;AACP,MAAX;IACR;UAG0B;AACxB,YAAO,yCACkB,AAAY,eAAT,OAAO,0BAC1B,uEACsB,wCAAS,eAE/B,+DACE,sDAEE,oCACE,cACM,AAAY,eAAT,OAAO,0BAChB,0CACkC,6CACZ,iCACjB,uBACR,6BACS,kBACL,qBACO,qCACU,AAAY,AAAU,AAAU,eAA7B,OAAO,uCACb,kBACE,0BACW,mCACR,yHAGvB,gCAAiB,+DACjB,sDAKS,kBACL,6BACqB,0BACd,qCACQ,AAAY,AAAU,AAAU,eAA7B,OAAO,uCACb,kBAEa,wIAK7B,sDAKS,yCACM,uCACiB,wDACK,6CACrB,qCACD,kBACA,QAAC;AAGR,wBAFF,cAAS;AACe,0BAAtB,wBAAkB;;wDAGT,QAAC;AACgB,wBAA5B,AAAmB;AAEqB,wBAD7B,AACN,0BADS,OAAO,eACH;kDAEb,qCAAwB,mCACnB,iDACE,uDACiB,wCAAS,mBACxB,mCACI,AAAQ,4BAAC,aAChB,iBAGH,iBACO,qCACC,AAAQ,4BAAC,kBAEf,oBACQ,0CACP,yBACL,qBAAe,AAAoB,iCACnC,kBACM,wCACA,aACI,+IAKtB,gCAAiB,+DACjB,sDAKS,kBACL,wBACqB,0BACd,qCACQ,AAAY,AAAU,AAAU,eAA7B,OAAO,uCACb,kBACa,wIAK7B,sDAKS,yCACM,0CACiB,gDACK,6CACrB,0CACC,iBACF,kBACA,QAAC;AAGR,wBAFF,cAAS;AACkB,0BAAzB,2BAAqB;;wDAGZ,QAAC;AACmB,wBAA/B,AAAsB;AAEkB,wBAD7B,AACN,0BADS,OAAO,eACH;kDAEb,qCAAwB,mCACnB,iDACE,uDACiB,wCAAS,mBACxB,mCACI,AAAQ,4BAAC,aAChB,iBAGH,iBACO,qCACC,AAAQ,4BAAC,kBAEf,uBACQ,0CACP,4BACL,wBAAkB,AAAuB,oCACzC,kBACM,wCACA,aACI,iJAKtB,wDAES,iCACsB,0CACU,8CAC3B,uBACR,8BACQ,UACC,oEAEE,+CACS,AAAQ,4BAAC,kBACJ,AAAQ,4BAAC,sBACL,gCACZ;AAKP,gCAJF,cAAS;AACY,kCAAnB,qBAAe;AACa,kCAA5B,AAAmB;AACY,kCAA/B,AAAsB;;AAExB,oCAAI,AAAyC,qBAA1B,AAAoB,kCAC/B,QACJ,AACqC,wBAA7B,AAAuB,qCAC3B;AA4BJ,kCA3BF,MAAM,AAGD,AAkBF,uCApBK,AAAoB,+BACpB,AAAuB,kDACrB,QAAC;AACT,wCAAI,MAAM,IAAI;AACC,sCAAb,WAAM,MAAM;AAKV,sCAJF,cAAS;AAE8B,wCADrC,mBACI;AAC2B,wCAA/B,wBAA0B;;AAU1B,sCARK,uBAAQ,qCAAuB,OAClC;AACyB,wCAAjB,AAAY,uBAAT,OAAO;AAKlB,wCAJQ,AACL,uBADQ,OAAO,2CACC,kDACD,eACT,QAAC,WAAY;;;kEAIhB,QAAC;AACe,oCAA5B,WAAM,AAAqB,2BAAN,KAAK;AAIxB,oCAHF,cAAS;AACmC,sCAA1C,mBAAc,AAA4B,qBAAZ,cAAN,KAAK;AACA,sCAA7B,wBAA0B;;;;AAO5B,kCAHF,cAAS;AACsC,oCAA7C,mBAAc;AACe,oCAA7B,wBAA0B;;;AAS5B,gCANF,cAAS;AACa,kCAApB,qBAAe;AACc,kCAA7B,AAAoB,gCAAO;AACK,kCAAhC,AAAuB,mCAAO;AACP,kCAAvB,wBAAkB;AACQ,kCAA1B,2BAAqB;;8BAExB,+CACM,uEACsB,wCAAS,gBAE/B,gCACe,sCACb,cACG,yBAEH,sBACD,gCACU,aACD,aACA,mEACQ,iBAEL,2CACC,6IAIb,kBACE,kBACO,wCACK,aACI,8TAOhC,+BAAgB,iEAChB,8BACQ,UACC,oEAEE,+CACS,AAAQ,4BAAC,kBACJ,AAAQ,4BAAC,sBACL,gCACZ;AAIP,gCAHF,cAAS;AACqB,kCAA5B,AAAmB;AACY,kCAA/B,AAAsB;;AAExB,oCAAI,AAAyC,qBAA1B,AAAoB,kCAC/B,QACJ,AACqC,wBAA7B,AAAuB,qCAC3B;AAGJ,kCAFF,cAAS;AACc,oCAArB,uBAAiB;;AAqBjB,kCAnBF,MAAM,AAGD,AASF,yCAXK,AAAoB,+BACpB,AAAuB,kDACrB,QAAC;AACT,wCAAI,MAAM,IAAI;AAKV,sCAJF,cAAS;AAE+B,wCADtC,mBACI;AAC2B,wCAA/B,wBAA0B;;AAEf,sCAAb,WAAM,MAAM;;kEAEF,QAAC;AACsB,oCAAnC,WAAM,AAA4B,kCAAN,KAAK;AAK/B,oCAJF,cAAS;AAE8B,sCADrC,mBACI;AACyB,sCAA7B,wBAA0B;;;;AAO5B,kCAHF,cAAS;AACsC,oCAA7C,mBAAc;AACe,oCAA7B,wBAA0B;;;AAU5B,gCAPF,cAAS;AACe,kCAAtB,uBAAiB;AAEY,kCAA7B,AAAoB,gCAAO;AACK,kCAAhC,AAAuB,mCAAO;AACP,kCAAvB,wBAAkB;AACQ,kCAA1B,2BAAqB;;8BAExB,+CACM,uEACsB,wCAAS,gBAE/B,gCACe,sCACb,cACG,yBAEH,wBACD,gCACU,aACD,aACA,mEACQ,iBAEL,2CACC,6IAIb,kBACE,mBACO,wCACK,aACI,sbAUtC,AAAY,oBAAG,OACT,6BACS,wDAIE,kBACL,0BACO,qCACE,iCACG,0LAMlB,wFACN,wDAKS,qCACG,4CAEM,AAAQ,4BAAC,4HAG3B,gCAAiB,iEACjB,6BAAc,kKACd,gCAAiB,iEACjB,wDAES,kBACL,yGACU,UACH,qCACQ,AAAY,AAAU,AAAU,eAA7B,OAAO,uCACb,kBACa;IAW3C;;;IAjcsB;IACZ;IACL,wBAAkB;IAED;IACZ;IACL,2BAAqB;IAErB,uBAAiB;IACjB,qBAAe;IAEb;IACD,wBAA0B;;;EAsblC;;;;;;;;;;;;;;;;;;;;;;;;;ICvce;;;;;;;AAKyB;IAAsB;;kDAHxC;;;AAApB;;EAA4B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAqBF;;AACpB,uBAAwB,AAAY,0BAAT,OAAO;AAEtC,YAAO,sDACU,gBAAK,AAAW,UAAD,QAAQ,gBAC/B,oCACQ,AAAY,AAAkB,eAA3B,OAAO,gCAAgC,AAAO,6BACvD,gCACe,+BAAI,cACjB,uCACkC,0CAC7B,uBACR,+CACS,kBACL,qBACO,qCACS,+BACJ,kBACE,0BACW,mCACR,6EAGR;AAKR,oBAJS,AAAY,uBAAT,OAAO,2CAClB,yCACW,QAAC,WAAY;+FAK9B,+BACS,sCACgC,wCAC3B,uBACR,+BAAiC,aAAjB,AAAW,UAAD,UAAS,+DACnC,mCACW,QAAC;AAKN,0BAJF,cAAS;;AAGqB,sCAF5B,KAAK,KACY,KAAX,wBAAY,QAAK,MAAN,0BACA,MAAX,yBAAY,SAAK,OAAN;;kDAGd;AAKJ,0BAJS,AAAY,uBAAT,OAAO,2CAClB,yCACW,QAAC,WAAY;iDAIrB,oCACsB,iCACjB,uBACR,kBACE,oBACO,0CACO,gCACL,AAAW,yBAAC,MACN,AAAI,wBAAC,OACL,0MAOvB,+BAAiC,aAAjB,AAAW,UAAD,UAAS,+DACnC,mCACW,QAAC;AAKN,0BAJF,cAAS;;AAGqB,sCAF5B,KAAK,KACY,KAAX,wBAAY,QAAK,MAAN,0BACA,MAAX,yBAAY,SAAK,OAAN;;kDAGd;AAKJ,0BAJS,AAAY,uBAAT,OAAO,2CAClB,yCACW,QAAC,WAAY;iDAIrB,oCACsB,iCACjB,uBACR,kBACE,mBACO,0CACO,gCACL,AAAW,yBAAC,MACN,AAAI,wBAAC,OACL,0MAOvB,+BAAiC,aAAjB,AAAW,UAAD,UAAS,+DACnC,mCACW,QAAC;AAKN,0BAJF,cAAS;;AAGqB,sCAF5B,KAAK,KACY,KAAX,wBAAY,QAAK,MAAN,0BACA,MAAX,yBAAY,SAAK,OAAN;;kDAGd;iDACA,oCACsB,iCACjB,uBACR,kBACE,sBACO,0CACO,gCACL,AAAW,yBAAC,MACN,AAAI,wBAAC,OACL,kUAsB7B,+BAC0B,aAAjB,AAAW,UAAD,UAAS,+DAE5B,mCACW,QAAC;AAGN,oBAFF,cAAS;;AAC+C,gCAAtD,KAAK,KAAc,KAAX,wBAAY,QAAK,MAAN,0BAAwB,MAAX,yBAAY,SAAK,OAAN;;4CAGxC,AAAU,4BAAG,OACd;AAIG,oBAHD,0CACW,OAAO,WACP,QAAC,WAAY;qCAG1B,aACC,AAAU,4BAAG,OACd,kBACE,mBACO,gDAED,AAAW,yBAAC,MAAY,AAAI,wBAAC,OAAc,mFAGnD,6BACY,uBACR,4CACU,uBACS,AAAS,2BAAG,OACvB,wCAAa,2BACb,aACC,AAAS,2BAAG,OACb,kBACQ,mCACA,kEAER,mJAER,+BAAgB,gEAChB,mBACO,gCAAL,OAAQ,wCACD,0CACO,gCACL,AAAW,yBAAC,MACN,sBACA,oFAGjB,+BAAgB,iEAChB,+CACgB,oCACK,AAAQ,4BAAC,sBACL,AAAQ,4BAAC,2BACrB,wBACL,OACA;AAGI,0BAFF,cAAS;AACa,4BAApB,uBAAgB;;AAYhB,0BAVF,MAAM,AAAU,AAQb,yCARkB,QAAC;AACP,4BAAb,WAAM,MAAM;AAMX,4BALS,AAAY,uBAAT,OAAO,2CAClB,kDACoB,eACT,QAAC,WAAY;0DAGd,QAAC;AACkB,4BAA/B,WAAM,AAAwB,8BAAN,KAAK;;AAI7B,0BAFF,cAAS;AACc,4BAArB,uBAAgB;;wBAEnB,+CACA,uEACsB,wCAAS,gBAE/B,gCACe,sCACb,aACG,wBAEH,wBACD,kHACA,kBACE,oBACO,0CACO,wBACF,aACI;IAapD;;;IAjQW,oBAAc,CACvB,OACA,OACA,OACA,OACA,OACA,OACA,OACA;IAGG,uBAAgB;;;EAuPvB;;;;;;;;;;;;;;;;;;ICtQe;;;;;;IACA;;;;;;IACH;;;;;;IACI;;;;;;;AAIqB;IAAmB;;2CAHrC,WAAgB,QAAa,MAAW;;IAAxC;IAAgB;IAAa;IAAW;AAAzD;;EAA+D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAU9C,MAAf;AAC2C,MAA3C,aAAQ,uBAAkB,AAAO;AAChB,MAAX;IACR;;AAMY,8BAAuC,WAAd,WAAJ,WAAL,WAAZ,AAAO,6CAAe,AAAO,8BAAO;AACxC,8BAAuC,WAAd,WAAJ,WAAL,WAAZ,AAAO,6CAAe,AAAO,8BAAO;AACW,MAA7D,mBAAc,AAAE,AAAS,AAA2B,CAArC,qBAA8B;AACgB,MAA7D,mBAAc,AAAE,AAAS,AAA2B,CAArC,qBAA8B;IAC/C;sBAEwC;AAAR;AACF,yBAAa,iEAC5B,qCACD,eAAM,AAAqC,8CAAH,EAAE;AAW/B,gCAAmB,MAAM,AAAW,UAAD;AAChD,uBAAW,AAAiB,gBAAD;AACrC,cAAgB,eAAT,QAAQ;MACjB;;eAEe;AA2DP,MA1DN,0CACa,uBACA,QAAC,WACD,mCACE,kBACL,oCACO,wCACK,kBACE,0BACW,0FAGV,uBACf,2CACa;AACkB,gBAAjB,AAAY,uBAAT,OAAO;uCAEf,kBAAK,kJAGW,kDAAsB,gBACxC,oCACA,eACC,cACD,yCACgC,+CAC3B,uBACR,uCAC6B,wCAAS,cAC7B,wDAEE,0BACS,kCACH,YACJ,gCACC,8CAEA,mPAKd,gCACU,iEAEV,kBACE,6JACO,wCACK,kBACE,0BACW,4BACf;IAQ5B;UAG0B;AACpB,uBAAwB,AAAY,0BAAT,OAAO;AAEtC,YAAO,6CACkB,AAAY,eAAT,OAAO,2CACT,eAChB,qDACS,gBAAK,AAAW,UAAD,QAAQ,gBAC/B,wCAAe,kIAElB,sDACwB,AACrB,AACA,AACA,sDAFW,eACP,AAAO,6CAEP,SAAC,SAAS;AACjB,2BAAK,AAAS,QAAD;AACX,oBAAO,8BACE;;AAIX,kBAAO,qCACE,iBAAM,oBACN,wDAEE,6BACa,uBAChB,8BACQ,UACC,wDAEE,yCACO,6CACD,iBAAM,2BACc,wCAAS,gBACjC,wDAEE,yCACgC,wDACE,0CACrB,uBAEhB,8BACQ,UACC,uCACsB,wCAAS,cAC7B,wDAEE,yCACO,oDAEO,wCAAS,cACnB,iDACE,uDACE,WADW,AACf,QADuB,gBAClB,4BACE,mCAEH,0BACT,qCACgB,gCAEF,uPAQ1B,8BACU,UACC,0CAEkB,mDAED,yCACJ,uBAChB,sCACsB,uCAEZ,aACC,eAEF,uCAEkB,kDAED,+CACJ,uBAChB,0CAEyB,yCACL,uBAChB,kBACE,AAAO,AAAO,uBACN,eACF,gBACA,AAAO,AAAO,uBACR,gBACF,gBACA,oBACH,wCACK,kBACE,2EAKhB,kBACE,AAAO,AAAO,uBACN,eACF,kBACA,AAAO,AAAO,uBACR,gBACF,AAEF,kBAFS,AAAe,2BAAc,iCAAoB,WAAb,AAAS,QAAD,gBAAM,qBAEzD,yBACH,wCACK,kBACE,0BAEG,8IAMvB,0CAEyB,yCACL,uBAChB,kBACE,AAAO,AAAO,uBACN,eACF,cACA,AAAO,AAAO,uBACR,gBACF,YACA,iBACH,wCACK,kBACE,2EAKhB,AAAO,AAAO,uBAAG,UACX,kBACE,aACO,wCACK,kBAEN,0BAEW,kFAInB,yDAIM,UAHc,AACL,AAAO,uBACZ,eACF,mBACA,AAAO,AAAO,uBACR,gBACF,mBACA,qBAEN;yFAEA,wCACQ,kBAEN,0BAEW,sQASnC,gCACU,iEAEV,gCACY,uBACR,AAAO,AAAO,uBAAG,eACX,kCACQ,oBACM,sCACD;0HAIb,AAAO,AAAO,uBAAG,gBACb,kCACQ,mBAEI,qCACC;0HAIb,kCACQ,wBAEI,sCACC;AAOR,8CANS,AACL,uBADQ,OAAO,2CAElB,yCACW,QAAC,WACN;yHAKtB,gCACU,iEAEV,kCACQ,qBAED,qDACM;AACW,8CAApB,gBAAW,QAAQ;ulBAa/C,8BACU,UACC,wDAEE,yCACS,6CACD,iBAAM,2BACc,wCAAS,gBACjC,+CACM,AAAO;;IAShD;;;IAxWI;IAQE,sBAAiB,sBAAa,YAAY;IAC5C;IACA;;;EA+VN;;;;;;;;;;;;;;;;;;;;;;ICzXqC;;;;;;IACxB;;;;;;IACD;;;;;;;AAQsB;IAAgB;;qCANzC,iBACA,mBACA;IAFA;IACA;IACA;AAHP;;EAIE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBU,8BAAI,AAAO,AAAS,AAAK,AAAI,AAAc,sCAAb,AAAO,wBAAO;AAC5C,8BAAI,AAAO,AAAS,AAAK,AAAI,AAAc,sCAAb,AAAO,wBAAO;AACO,MAA7D,mBAAc,AAAE,AAAS,AAA2B,CAArC,qBAA8B;AACgB,MAA7D,mBAAc,AAAE,AAAS,AAA2B,CAArC,qBAA8B;AAC7C,oBAAI,AAAE,AAAS,CAAV,kBAA2B;AACT,QAArB,cAAS;YACJ,eAAI,AAAE,AAAS,CAAV,mBAA4B,uCACpC,AAAE,AAAS,CAAV,kBAA2B;AACR,QAAtB,cAAS;YACJ,eAAI,AAAE,AAAS,CAAV,mBAA4B;AACtB,QAAhB,cAAS;;IAEb;;AAIiB,MAAf;AACiB,MAAX;IACR;UAG0B;AACxB,YAAO,iCACK,uBACR,gCACU,iEAEV,mCACW,QAAC;AAGN,cAFF,cAAS;AACyC,0BAAhD,KAAK,IAAG,qBAAc,OAAO,qBAAc;;2CAG7B,sBAAS,KAAK,KAAK,KAAK,aACnC;AASJ,cARS,AAAY,uBAAT,OAAO,2CAClB,yCACW,QAAC,WAAY,iCAClB,AAAO,AAAS,AAAK,AAAI,AAAe,sCAAd,AAAO,uBACjC,aACA,AAAO,sBACP,AAAO;qCAIV,2DACS,oDACiB,wCAAS,kBACzB,0BACT,qCACgB,0CAEF,sBAAc,OAAO,2DAK5B,sBAAc,sBAAiB,+BACnC,yCACgC,8CACnB,uBAChB,gCACkC,aAAxB,AAAO,AAAW,gCAAQ,UACH,aAAxB,AAAO,AAAW,gCAAQ,YAC1B,uCACsB,8CACP,uBAAS,iBACR,uBAAS,gBACjB,uCACX,AAAO,AAAS,AAAK,AAAI,AACrB,sCADsB,AAAO,wBAC5B,2BACO,uMAIlB,qCACkC,aAAxB,AAAO,AAAW,gCAAQ,aACd,sCACb,YACC,aACC,cACC,eAEqB,aAAxB,AAAO,AAAW,gCAAQ,YACnB,4BACP,yCACgC,wDACE,yCAC7B,uBACR,iCACE,AAAO,AAAS,AAAK,AAAI,AACrB,sCADsB,AAAO,wBAC5B,yBACE,wCACK,kBACE,0BACW,2BACV,AACR,AACA,AACA,eAHW,OAAO,iGAM3B,gCACU,gEAEV,iCACE,AAAO,AAAS,AAAK,AAAI,AAAc,sCAAb,AAAO,wBAAO,uBACjC,wCACK,kBACE,mMAOtB,uCAC6B,iDACJ,uBAAS,oBACR,uBAAS,gBAC1B,sCACe,sCACb,YACC,aACC,cACC,eAEG,AAAY,eAAT,OAAO,6BACS,aAAxB,AAAO,AAAW,gCAAQ,WACH,aAAxB,AAAO,AAAW,gCAAQ,YAC1B,sCACgC,+CACnB,uBAChB,0CACyC,yCACrB,uBAChB,kBACE,AAAO,gBAAG,eACJ,eACA,AAAO,gBAAG,gBACN,gBACA,oBACH,wCACK,kBACE,qBAEE,oFAGlB,kBACE,AAAO,gBAAG,eACJ,AACF,kBADS,AAAe,2BAAc,iCAAO,AAAO,AAAS,AAAK,AAAI,AAAc,sCAAb,AAAO,wBAAO,mBACnF,AAAO,gBAAG,gBACN,AAEF,kBAFS,AAAe,2BAAc,iCAAO,AAAO,AAAS,AAAK,AAAI,AAAc,sCAAb,AAAO,wBAAO,oBAEnF,yBACH,wCACK,kBACE,qBAEE,+IAKtB,0CACyC,yCACrB,uBAChB,kBACE,AAAO,gBAAG,eACJ,cACA,AAAO,gBAAG,gBACN,YACA,iBACH,wCACK,kBACE,qBAEE,oFAGlB,AAAO,gBAAG,UACJ,kBACE,aACO,wCACK,kBACE,qBAEE,mFAGlB,yDAEM,UADc,AAAO,gBAAG,eACtB,mBACA,AAAO,gBAAG,gBACN,mBACA,qBACO;uEACI,wCACT,kBACE,qBAEE;IAcpD;;;;IAnOM,kEAA4B;AAAY,mBAAU,GAAG,KAAG;;;IACxD,gEAAyB;AAAY,oBAAU,GAAG,OAAK;;;IACvD,6DAAqB;AAAY,iBAAM;;;IACvC,sBAAiB,sBAAa,YAAY;IAC3C,qBAAc;IAEf;IACA;IACG;;;EA4NT;;;;;;;;;;;;;;;;;;;;;;;ICjPa;;;;;;IACA;;;;;;;AAGsB;IAAiB;;;QAPnC;QAAoB;QAA2B;;IAA3B;IAA2B;AACxD,wDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAWK;AACxB,YAAO,8DACK,AAAO,0BACS,AACf,AACA,AACA,sDAFW,iBACL,wBAAuB,qBAEd,AAAS,AAAsB,sDAAX,iCACnC,SAAc,SAAsC;AAC3D,yBAAK,AAAS,QAAD;AACX,kBAAO,8BACE;;AAGX,gBAAO,iCACe,sCACb,WACyB,aAAxB,AAAO,AAAW,gCAAQ,WACD,aAAxB,AAAO,AAAW,gCAAQ,aAEnB,2CACL,mEACG,iBACD,AAAS,AAAK,AAAK,QAAX,mCACL,+EACM,qBAAqB,AAAE,IAAE,oBAChC,SAAC,SAAS,UACd,2BAAS,QAAQ,EAAE,AAAO,wBAAY,KAAK;;IAKhE;;;;;EACF;;;;;;;;;;ACpCwC;IAAsB;;;;;;EAC9D;;;;;;;;;MAJsB,oCAAK;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAUC;AACpB,uBAAwB,AAAY,0BAAT,OAAO;AAC1B,MAAZ,iBAAW;AAEX,YAAO,6CACkB,AAAY,eAAT,OAAO,2CACT,eAChB,qDACS,gBAAK,AAAW,UAAD,QAAQ,gBAC/B,wCAAe,6IAElB,iEACK,uDACF,gCACK,uBACR,gCACY,uBACR,oCACS,gCACqB,aAAlB,AAAW,UAAD,WAAU,aACrB,AAAW,UAAD,eACJ,sBACX,6BACY,uMAIlB,oCACS,gCACK,uBACR,8CACgB,UAAU,UACd,wBACA,sDACA,8BACA;AAKL,4BAJS,AAAY,uBAAT,OAAO,2CAClB,yCACW,QAAC,WAAY;uGAIhC,gCAC4B,aAAlB,AAAW,UAAD,WAAU,iEAE9B,0CAAsB,UAAU,cAAc,uPAOxD,gCAAmC,aAAlB,AAAW,UAAD,WAAU;IAM/C;;;IA7DO,iBAAW;;;EA8DpB;;;;;;;;;;;;;;ACjEkC;IAAgB;;;;;;EAClD;;;;;;;;;MAJsB,wBAAK;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UASC;AACpB,uBAAwB,AAAY,0BAAT,OAAO;AAC1B,MAAZ,kBAAW;AACX,YAAO,6CACkB,AAAY,eAAT,OAAO,2CACT,eAChB,qDACS,gBAAK,AAAW,UAAD,QAAQ,gBAC/B,wCAAe,8IAElB,+DAEG,gCACK,uBACR,+BACY,uBACR,oCACS,gCACqB,aAAlB,AAAW,UAAD,WAAU,aACrB,AAAW,UAAD,eACJ,sBACX,0BACY,uMAIlB,gCACY,uBACR,sEAAmC,UAAU,6DAC7C,oCACS,gCACK,uBACR,8CACgB,UAAU,UACd,oBACA,6CACA,yBACA;AAKL,gCAJS,AAAY,uBAAT,OAAO,2CAClB,yCACW,QAAC,WAAY;2GAIhC,gCAC4B,aAAlB,AAAW,UAAD,WAAU,iEAE9B,0CAAsB,UAAU,cAAc,mTAS5D,gCAAmC,aAAlB,AAAW,UAAD,WAAU;IAM/C;;;IAhEO,kBAAW;;;EAiEpB","file":"../../../../../../../packages/artif/widgets/google_sign_in_button.dart.lib.js"}');
  // Exports:
  return {
    widgets__google_sign_in_button: google_sign_in_button,
    widgets__auth_dialog: auth_dialog,
    widgets__top_bar_contents: top_bar_contents,
    screens__product_page: product_page,
    widgets__tile_card: tile_card,
    widgets__tiles_main: tiles_main,
    screens__product_catalog: product_catalog,
    screens__home_page: home_page
  };
}));

//# sourceMappingURL=google_sign_in_button.dart.lib.js.map
