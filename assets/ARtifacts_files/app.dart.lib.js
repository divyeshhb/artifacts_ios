define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/material/arc.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/cupertino/debug.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/material/page.dart', 'packages/flutter/src/widgets/grid_paper.dart', 'packages/flutter/src/painting/strut_style.dart'], (function load__packages__flutter__src__material__app_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__material__arc$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__cupertino__debug$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__material__page$46dart, packages__flutter__src__widgets__grid_paper$46dart, packages__flutter__src__painting__strut_style$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const navigator = packages__flutter__src__widgets__widget_span$46dart.src__widgets__navigator;
  const heroes = packages__flutter__src__widgets__widget_span$46dart.src__widgets__heroes;
  const router = packages__flutter__src__widgets__widget_span$46dart.src__widgets__router;
  const localizations = packages__flutter__src__widgets__widget_span$46dart.src__widgets__localizations;
  const shortcuts = packages__flutter__src__widgets__widget_span$46dart.src__widgets__shortcuts;
  const actions = packages__flutter__src__widgets__widget_span$46dart.src__widgets__actions;
  const overscroll_indicator = packages__flutter__src__widgets__widget_span$46dart.src__widgets__overscroll_indicator;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const scroll_configuration = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scroll_configuration;
  const media_query = packages__flutter__src__widgets__widget_span$46dart.src__widgets__media_query;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const app = packages__flutter__src__widgets__widget_span$46dart.src__widgets__app;
  const arc = packages__flutter__src__material__arc$46dart.src__material__arc;
  const scaffold = packages__flutter__src__material__icon_button$46dart.src__material__scaffold;
  const theme_data = packages__flutter__src__material__icon_button$46dart.src__material__theme_data;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const material_localizations = packages__flutter__src__material__icon_button$46dart.src__material__material_localizations;
  const floating_action_button = packages__flutter__src__material__icon_button$46dart.src__material__floating_action_button;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const localizations$ = packages__flutter__src__cupertino__debug$46dart.src__cupertino__localizations;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const page = packages__flutter__src__material__page$46dart.src__material__page;
  const grid_paper = packages__flutter__src__widgets__grid_paper$46dart.src__widgets__grid_paper;
  const text_style = packages__flutter__src__painting__strut_style$46dart.src__painting__text_style;
  var app$ = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var ThemeModeL = () => (ThemeModeL = dart.constFn(dart.legacy(app$.ThemeMode)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(framework.Widget)))();
  var BuildContextL = () => (BuildContextL = dart.constFn(dart.legacy(framework.BuildContext)))();
  var BuildContextLToWidgetL = () => (BuildContextLToWidgetL = dart.constFn(dart.fnType(WidgetL(), [BuildContextL()])))();
  var BuildContextLToLWidgetL = () => (BuildContextLToLWidgetL = dart.constFn(dart.legacy(BuildContextLToWidgetL())))();
  var NavigatorObserverL = () => (NavigatorObserverL = dart.constFn(dart.legacy(navigator.NavigatorObserver)))();
  var LocaleL = () => (LocaleL = dart.constFn(dart.legacy(ui.Locale)))();
  var RectN = () => (RectN = dart.constFn(dart.nullable(ui.Rect)))();
  var RectNAndRectNToMaterialRectArcTween = () => (RectNAndRectNToMaterialRectArcTween = dart.constFn(dart.fnType(arc.MaterialRectArcTween, [RectN(), RectN()])))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var SyncIterableOfLocalizationsDelegate = () => (SyncIterableOfLocalizationsDelegate = dart.constFn(_js_helper.SyncIterable$(localizations.LocalizationsDelegate)))();
  var BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))();
  var StateOfStatefulWidget = () => (StateOfStatefulWidget = dart.constFn(framework.State$(framework.StatefulWidget)))();
  var GlobalObjectKeyOfStateOfStatefulWidget = () => (GlobalObjectKeyOfStateOfStatefulWidget = dart.constFn(framework.GlobalObjectKey$(StateOfStatefulWidget())))();
  var ObjectN = () => (ObjectN = dart.constFn(dart.nullable(core.Object)))();
  var RouteSettingsAndFnToMaterialPageRouteOfT = () => (RouteSettingsAndFnToMaterialPageRouteOfT = dart.constFn(dart.gFnType(T => {
    var MaterialPageRouteOfT = () => (MaterialPageRouteOfT = dart.constFn(page.MaterialPageRoute$(T)))();
    return [MaterialPageRouteOfT(), [navigator.RouteSettings, BuildContextToWidget()]];
  }, T => [ObjectN()])))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/material/app.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/app.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: app$.ThemeMode.prototype,
        [_name$]: "ThemeMode.system",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: app$.ThemeMode.prototype,
        [_name$]: "ThemeMode.light",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: app$.ThemeMode.prototype,
        [_name$]: "ThemeMode.dark",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], ThemeModeL());
    },
    get C4() {
      return C4 = dart.constMap(StringL(), BuildContextLToLWidgetL(), []);
    },
    get C5() {
      return C5 = dart.constList([], NavigatorObserverL());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.Locale.prototype,
        [Locale__countryCode]: "US",
        [Locale_scriptCode]: null,
        [Locale__languageCode]: "en"
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], LocaleL());
    },
    get C8() {
      return C8 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.iOS",
        index: 2
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.linux",
        index: 3
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.macOS",
        index: 4
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.windows",
        index: 5
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 681,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "axisDirection",
        [_Location_column]: 11,
        [_Location_line]: 682,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 683,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], _LocationL());
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 680,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.android",
        index: 0
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.fuchsia",
        index: 1
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 31,
        [_Location_line]: 714,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22], _LocationL());
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 714,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59828
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C20 || CT.C20,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C23 || CT.C23
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 714,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 7,
        [_Location_line]: 715,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mini",
        [_Location_column]: 7,
        [_Location_line]: 716,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27, C28 || CT.C28], _LocationL());
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 713,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 15,
        [_Location_line]: 744,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31], _LocationL());
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 743,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 9,
        [_Location_line]: 741,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 742,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35], _LocationL());
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 740,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 739,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 740,
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
        [_Location_line]: 738,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 775,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeInformationProvider",
        [_Location_column]: 9,
        [_Location_line]: 776,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeInformationParser",
        [_Location_column]: 9,
        [_Location_line]: 777,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routerDelegate",
        [_Location_column]: 9,
        [_Location_line]: 778,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backButtonDispatcher",
        [_Location_column]: 9,
        [_Location_line]: 779,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 780,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 781,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onGenerateTitle",
        [_Location_column]: 9,
        [_Location_line]: 782,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textStyle",
        [_Location_column]: 9,
        [_Location_line]: 783,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 784,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "locale",
        [_Location_column]: 9,
        [_Location_line]: 785,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "localizationsDelegates",
        [_Location_column]: 9,
        [_Location_line]: 786,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "localeResolutionCallback",
        [_Location_column]: 9,
        [_Location_line]: 787,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "localeListResolutionCallback",
        [_Location_column]: 9,
        [_Location_line]: 788,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "supportedLocales",
        [_Location_column]: 9,
        [_Location_line]: 789,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "showPerformanceOverlay",
        [_Location_column]: 9,
        [_Location_line]: 790,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "checkerboardRasterCacheImages",
        [_Location_column]: 9,
        [_Location_line]: 791,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "checkerboardOffscreenLayers",
        [_Location_column]: 9,
        [_Location_line]: 792,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "showSemanticsDebugger",
        [_Location_column]: 9,
        [_Location_line]: 793,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "debugShowCheckedModeBanner",
        [_Location_column]: 9,
        [_Location_line]: 794,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inspectorSelectButtonBuilder",
        [_Location_column]: 9,
        [_Location_line]: 795,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shortcuts",
        [_Location_column]: 9,
        [_Location_line]: 796,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 797,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "restorationScopeId",
        [_Location_column]: 9,
        [_Location_line]: 798,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43, C44 || CT.C44, C45 || CT.C45, C46 || CT.C46, C47 || CT.C47, C48 || CT.C48, C49 || CT.C49, C50 || CT.C50, C51 || CT.C51, C52 || CT.C52, C53 || CT.C53, C54 || CT.C54, C55 || CT.C55, C56 || CT.C56, C57 || CT.C57, C58 || CT.C58, C59 || CT.C59, C60 || CT.C60, C61 || CT.C61, C62 || CT.C62, C63 || CT.C63, C64 || CT.C64, C65 || CT.C65], _LocationL());
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 774,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 803,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "navigatorKey",
        [_Location_column]: 7,
        [_Location_line]: 804,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "navigatorObservers",
        [_Location_column]: 7,
        [_Location_line]: 805,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pageRouteBuilder",
        [_Location_column]: 7,
        [_Location_line]: 806,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 809,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routes",
        [_Location_column]: 7,
        [_Location_line]: 810,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "initialRoute",
        [_Location_column]: 7,
        [_Location_line]: 811,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onGenerateRoute",
        [_Location_column]: 7,
        [_Location_line]: 812,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onGenerateInitialRoutes",
        [_Location_column]: 7,
        [_Location_line]: 813,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onUnknownRoute",
        [_Location_column]: 7,
        [_Location_line]: 814,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 815,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 816,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onGenerateTitle",
        [_Location_column]: 7,
        [_Location_line]: 817,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textStyle",
        [_Location_column]: 7,
        [_Location_line]: 818,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 819,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "locale",
        [_Location_column]: 7,
        [_Location_line]: 820,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "localizationsDelegates",
        [_Location_column]: 7,
        [_Location_line]: 821,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "localeResolutionCallback",
        [_Location_column]: 7,
        [_Location_line]: 822,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "localeListResolutionCallback",
        [_Location_column]: 7,
        [_Location_line]: 823,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "supportedLocales",
        [_Location_column]: 7,
        [_Location_line]: 824,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "showPerformanceOverlay",
        [_Location_column]: 7,
        [_Location_line]: 825,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "checkerboardRasterCacheImages",
        [_Location_column]: 7,
        [_Location_line]: 826,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "checkerboardOffscreenLayers",
        [_Location_column]: 7,
        [_Location_line]: 827,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "showSemanticsDebugger",
        [_Location_column]: 7,
        [_Location_line]: 828,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "debugShowCheckedModeBanner",
        [_Location_column]: 7,
        [_Location_line]: 829,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inspectorSelectButtonBuilder",
        [_Location_column]: 7,
        [_Location_line]: 830,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shortcuts",
        [_Location_column]: 7,
        [_Location_line]: 831,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 7,
        [_Location_line]: 832,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "restorationScopeId",
        [_Location_column]: 7,
        [_Location_line]: 833,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71, C72 || CT.C72, C73 || CT.C73, C74 || CT.C74, C75 || CT.C75, C76 || CT.C76, C77 || CT.C77, C78 || CT.C78, C79 || CT.C79, C80 || CT.C80, C81 || CT.C81, C82 || CT.C82, C83 || CT.C83, C84 || CT.C84, C85 || CT.C85, C86 || CT.C86, C87 || CT.C87, C88 || CT.C88, C89 || CT.C89, C90 || CT.C90, C91 || CT.C91, C92 || CT.C92, C93 || CT.C93, C94 || CT.C94, C95 || CT.C95, C96 || CT.C96], _LocationL());
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 802,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3774462944.0
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 844,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "interval",
        [_Location_column]: 11,
        [_Location_line]: 845,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "divisions",
        [_Location_column]: 11,
        [_Location_line]: 846,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subdivisions",
        [_Location_column]: 11,
        [_Location_line]: 847,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 848,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100, C101 || CT.C101, C102 || CT.C102, C103 || CT.C103, C104 || CT.C104], _LocationL());
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 843,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 9,
        [_Location_line]: 857,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 858,
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
        [_Location_column]: 14,
        [_Location_line]: 856,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behavior",
        [_Location_column]: 7,
        [_Location_line]: 855,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 856,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111, C112 || CT.C112], _LocationL());
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C110 || CT.C110,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 854,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: ui.TextDecorationStyle.prototype,
        [_name$0]: "TextDecorationStyle.double",
        index: 1
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967040.0
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: ui.TextDecoration.prototype,
        [TextDecoration__mask]: 1
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 8
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3506372608.0
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "fallback style; consider putting your text in a Material",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: C114 || CT.C114,
        [TextStyle_decorationColor]: C115 || CT.C115,
        [TextStyle_decoration]: C116 || CT.C116,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C117 || CT.C117,
        [TextStyle_fontSize]: 48,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "monospace",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C118 || CT.C118,
        [TextStyle_inherit]: true
      });
    }
  }, false);
  var _name$ = dart.privateName(app$, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  app$.ThemeMode = class ThemeMode extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (app$.ThemeMode.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 40, 6, "index");
    if (_name == null) dart.nullFailed(L0, 40, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = app$.ThemeMode.prototype;
  dart.addTypeTests(app$.ThemeMode);
  dart.addTypeCaches(app$.ThemeMode);
  dart.setLibraryUri(app$.ThemeMode, L1);
  dart.setFieldSignature(app$.ThemeMode, () => ({
    __proto__: dart.getFields(app$.ThemeMode.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(app$.ThemeMode, ['toString']);
  app$.ThemeMode.system = C0 || CT.C0;
  app$.ThemeMode.light = C1 || CT.C1;
  app$.ThemeMode.dark = C2 || CT.C2;
  app$.ThemeMode.values = C3 || CT.C3;
  var C4;
  var C5;
  var Locale__countryCode = dart.privateName(ui, "Locale._countryCode");
  var Locale_scriptCode = dart.privateName(ui, "Locale.scriptCode");
  var Locale__languageCode = dart.privateName(ui, "Locale._languageCode");
  var C7;
  var C6;
  var navigatorKey$ = dart.privateName(app$, "MaterialApp.navigatorKey");
  var scaffoldMessengerKey$ = dart.privateName(app$, "MaterialApp.scaffoldMessengerKey");
  var home$ = dart.privateName(app$, "MaterialApp.home");
  var routes$ = dart.privateName(app$, "MaterialApp.routes");
  var initialRoute$ = dart.privateName(app$, "MaterialApp.initialRoute");
  var onGenerateRoute$ = dart.privateName(app$, "MaterialApp.onGenerateRoute");
  var onGenerateInitialRoutes$ = dart.privateName(app$, "MaterialApp.onGenerateInitialRoutes");
  var onUnknownRoute$ = dart.privateName(app$, "MaterialApp.onUnknownRoute");
  var navigatorObservers$ = dart.privateName(app$, "MaterialApp.navigatorObservers");
  var routeInformationProvider$ = dart.privateName(app$, "MaterialApp.routeInformationProvider");
  var routeInformationParser$ = dart.privateName(app$, "MaterialApp.routeInformationParser");
  var routerDelegate$ = dart.privateName(app$, "MaterialApp.routerDelegate");
  var backButtonDispatcher$ = dart.privateName(app$, "MaterialApp.backButtonDispatcher");
  var builder$ = dart.privateName(app$, "MaterialApp.builder");
  var title$ = dart.privateName(app$, "MaterialApp.title");
  var onGenerateTitle$ = dart.privateName(app$, "MaterialApp.onGenerateTitle");
  var theme$0 = dart.privateName(app$, "MaterialApp.theme");
  var darkTheme$ = dart.privateName(app$, "MaterialApp.darkTheme");
  var highContrastTheme$ = dart.privateName(app$, "MaterialApp.highContrastTheme");
  var highContrastDarkTheme$ = dart.privateName(app$, "MaterialApp.highContrastDarkTheme");
  var themeMode$ = dart.privateName(app$, "MaterialApp.themeMode");
  var color$ = dart.privateName(app$, "MaterialApp.color");
  var locale$ = dart.privateName(app$, "MaterialApp.locale");
  var localizationsDelegates$ = dart.privateName(app$, "MaterialApp.localizationsDelegates");
  var localeListResolutionCallback$ = dart.privateName(app$, "MaterialApp.localeListResolutionCallback");
  var localeResolutionCallback$ = dart.privateName(app$, "MaterialApp.localeResolutionCallback");
  var supportedLocales$ = dart.privateName(app$, "MaterialApp.supportedLocales");
  var showPerformanceOverlay$ = dart.privateName(app$, "MaterialApp.showPerformanceOverlay");
  var checkerboardRasterCacheImages$ = dart.privateName(app$, "MaterialApp.checkerboardRasterCacheImages");
  var checkerboardOffscreenLayers$ = dart.privateName(app$, "MaterialApp.checkerboardOffscreenLayers");
  var showSemanticsDebugger$ = dart.privateName(app$, "MaterialApp.showSemanticsDebugger");
  var debugShowCheckedModeBanner$ = dart.privateName(app$, "MaterialApp.debugShowCheckedModeBanner");
  var shortcuts$ = dart.privateName(app$, "MaterialApp.shortcuts");
  var actions$ = dart.privateName(app$, "MaterialApp.actions");
  var restorationScopeId$ = dart.privateName(app$, "MaterialApp.restorationScopeId");
  var debugShowMaterialGrid$ = dart.privateName(app$, "MaterialApp.debugShowMaterialGrid");
  app$.MaterialApp = class MaterialApp extends framework.StatefulWidget {
    get navigatorKey() {
      return this[navigatorKey$];
    }
    set navigatorKey(value) {
      super.navigatorKey = value;
    }
    get scaffoldMessengerKey() {
      return this[scaffoldMessengerKey$];
    }
    set scaffoldMessengerKey(value) {
      super.scaffoldMessengerKey = value;
    }
    get home() {
      return this[home$];
    }
    set home(value) {
      super.home = value;
    }
    get routes() {
      return this[routes$];
    }
    set routes(value) {
      super.routes = value;
    }
    get initialRoute() {
      return this[initialRoute$];
    }
    set initialRoute(value) {
      super.initialRoute = value;
    }
    get onGenerateRoute() {
      return this[onGenerateRoute$];
    }
    set onGenerateRoute(value) {
      super.onGenerateRoute = value;
    }
    get onGenerateInitialRoutes() {
      return this[onGenerateInitialRoutes$];
    }
    set onGenerateInitialRoutes(value) {
      super.onGenerateInitialRoutes = value;
    }
    get onUnknownRoute() {
      return this[onUnknownRoute$];
    }
    set onUnknownRoute(value) {
      super.onUnknownRoute = value;
    }
    get navigatorObservers() {
      return this[navigatorObservers$];
    }
    set navigatorObservers(value) {
      super.navigatorObservers = value;
    }
    get routeInformationProvider() {
      return this[routeInformationProvider$];
    }
    set routeInformationProvider(value) {
      super.routeInformationProvider = value;
    }
    get routeInformationParser() {
      return this[routeInformationParser$];
    }
    set routeInformationParser(value) {
      super.routeInformationParser = value;
    }
    get routerDelegate() {
      return this[routerDelegate$];
    }
    set routerDelegate(value) {
      super.routerDelegate = value;
    }
    get backButtonDispatcher() {
      return this[backButtonDispatcher$];
    }
    set backButtonDispatcher(value) {
      super.backButtonDispatcher = value;
    }
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get onGenerateTitle() {
      return this[onGenerateTitle$];
    }
    set onGenerateTitle(value) {
      super.onGenerateTitle = value;
    }
    get theme() {
      return this[theme$0];
    }
    set theme(value) {
      super.theme = value;
    }
    get darkTheme() {
      return this[darkTheme$];
    }
    set darkTheme(value) {
      super.darkTheme = value;
    }
    get highContrastTheme() {
      return this[highContrastTheme$];
    }
    set highContrastTheme(value) {
      super.highContrastTheme = value;
    }
    get highContrastDarkTheme() {
      return this[highContrastDarkTheme$];
    }
    set highContrastDarkTheme(value) {
      super.highContrastDarkTheme = value;
    }
    get themeMode() {
      return this[themeMode$];
    }
    set themeMode(value) {
      super.themeMode = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get locale() {
      return this[locale$];
    }
    set locale(value) {
      super.locale = value;
    }
    get localizationsDelegates() {
      return this[localizationsDelegates$];
    }
    set localizationsDelegates(value) {
      super.localizationsDelegates = value;
    }
    get localeListResolutionCallback() {
      return this[localeListResolutionCallback$];
    }
    set localeListResolutionCallback(value) {
      super.localeListResolutionCallback = value;
    }
    get localeResolutionCallback() {
      return this[localeResolutionCallback$];
    }
    set localeResolutionCallback(value) {
      super.localeResolutionCallback = value;
    }
    get supportedLocales() {
      return this[supportedLocales$];
    }
    set supportedLocales(value) {
      super.supportedLocales = value;
    }
    get showPerformanceOverlay() {
      return this[showPerformanceOverlay$];
    }
    set showPerformanceOverlay(value) {
      super.showPerformanceOverlay = value;
    }
    get checkerboardRasterCacheImages() {
      return this[checkerboardRasterCacheImages$];
    }
    set checkerboardRasterCacheImages(value) {
      super.checkerboardRasterCacheImages = value;
    }
    get checkerboardOffscreenLayers() {
      return this[checkerboardOffscreenLayers$];
    }
    set checkerboardOffscreenLayers(value) {
      super.checkerboardOffscreenLayers = value;
    }
    get showSemanticsDebugger() {
      return this[showSemanticsDebugger$];
    }
    set showSemanticsDebugger(value) {
      super.showSemanticsDebugger = value;
    }
    get debugShowCheckedModeBanner() {
      return this[debugShowCheckedModeBanner$];
    }
    set debugShowCheckedModeBanner(value) {
      super.debugShowCheckedModeBanner = value;
    }
    get shortcuts() {
      return this[shortcuts$];
    }
    set shortcuts(value) {
      super.shortcuts = value;
    }
    get actions() {
      return this[actions$];
    }
    set actions(value) {
      super.actions = value;
    }
    get restorationScopeId() {
      return this[restorationScopeId$];
    }
    set restorationScopeId(value) {
      super.restorationScopeId = value;
    }
    get debugShowMaterialGrid() {
      return this[debugShowMaterialGrid$];
    }
    set debugShowMaterialGrid(value) {
      super.debugShowMaterialGrid = value;
    }
    createState() {
      return new app$._MaterialAppState.new();
    }
    static createMaterialHeroController() {
      return new heroes.HeroController.new({createRectTween: dart.fn((begin, end) => new arc.MaterialRectArcTween.new({begin: begin, end: end}), RectNAndRectNToMaterialRectArcTween())});
    }
  };
  (app$.MaterialApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let navigatorKey = opts && 'navigatorKey' in opts ? opts.navigatorKey : null;
    let scaffoldMessengerKey = opts && 'scaffoldMessengerKey' in opts ? opts.scaffoldMessengerKey : null;
    let home = opts && 'home' in opts ? opts.home : null;
    let routes = opts && 'routes' in opts ? opts.routes : C4 || CT.C4;
    if (routes == null) dart.nullFailed(L0, 172, 37, "routes");
    let initialRoute = opts && 'initialRoute' in opts ? opts.initialRoute : null;
    let onGenerateRoute = opts && 'onGenerateRoute' in opts ? opts.onGenerateRoute : null;
    let onGenerateInitialRoutes = opts && 'onGenerateInitialRoutes' in opts ? opts.onGenerateInitialRoutes : null;
    let onUnknownRoute = opts && 'onUnknownRoute' in opts ? opts.onUnknownRoute : null;
    let navigatorObservers = opts && 'navigatorObservers' in opts ? opts.navigatorObservers : C5 || CT.C5;
    if (navigatorObservers == null) dart.nullFailed(L0, 177, 34, "navigatorObservers");
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let title = opts && 'title' in opts ? opts.title : "";
    if (title == null) dart.nullFailed(L0, 179, 10, "title");
    let onGenerateTitle = opts && 'onGenerateTitle' in opts ? opts.onGenerateTitle : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let theme = opts && 'theme' in opts ? opts.theme : null;
    let darkTheme = opts && 'darkTheme' in opts ? opts.darkTheme : null;
    let highContrastTheme = opts && 'highContrastTheme' in opts ? opts.highContrastTheme : null;
    let highContrastDarkTheme = opts && 'highContrastDarkTheme' in opts ? opts.highContrastDarkTheme : null;
    let themeMode = opts && 'themeMode' in opts ? opts.themeMode : C0 || CT.C0;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let localizationsDelegates = opts && 'localizationsDelegates' in opts ? opts.localizationsDelegates : null;
    let localeListResolutionCallback = opts && 'localeListResolutionCallback' in opts ? opts.localeListResolutionCallback : null;
    let localeResolutionCallback = opts && 'localeResolutionCallback' in opts ? opts.localeResolutionCallback : null;
    let supportedLocales = opts && 'supportedLocales' in opts ? opts.supportedLocales : C6 || CT.C6;
    if (supportedLocales == null) dart.nullFailed(L0, 191, 10, "supportedLocales");
    let debugShowMaterialGrid = opts && 'debugShowMaterialGrid' in opts ? opts.debugShowMaterialGrid : false;
    if (debugShowMaterialGrid == null) dart.nullFailed(L0, 192, 10, "debugShowMaterialGrid");
    let showPerformanceOverlay = opts && 'showPerformanceOverlay' in opts ? opts.showPerformanceOverlay : false;
    if (showPerformanceOverlay == null) dart.nullFailed(L0, 193, 10, "showPerformanceOverlay");
    let checkerboardRasterCacheImages = opts && 'checkerboardRasterCacheImages' in opts ? opts.checkerboardRasterCacheImages : false;
    if (checkerboardRasterCacheImages == null) dart.nullFailed(L0, 194, 10, "checkerboardRasterCacheImages");
    let checkerboardOffscreenLayers = opts && 'checkerboardOffscreenLayers' in opts ? opts.checkerboardOffscreenLayers : false;
    if (checkerboardOffscreenLayers == null) dart.nullFailed(L0, 195, 10, "checkerboardOffscreenLayers");
    let showSemanticsDebugger = opts && 'showSemanticsDebugger' in opts ? opts.showSemanticsDebugger : false;
    if (showSemanticsDebugger == null) dart.nullFailed(L0, 196, 10, "showSemanticsDebugger");
    let debugShowCheckedModeBanner = opts && 'debugShowCheckedModeBanner' in opts ? opts.debugShowCheckedModeBanner : true;
    if (debugShowCheckedModeBanner == null) dart.nullFailed(L0, 197, 10, "debugShowCheckedModeBanner");
    let shortcuts = opts && 'shortcuts' in opts ? opts.shortcuts : null;
    let actions = opts && 'actions' in opts ? opts.actions : null;
    let restorationScopeId = opts && 'restorationScopeId' in opts ? opts.restorationScopeId : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[navigatorKey$] = navigatorKey;
    this[scaffoldMessengerKey$] = scaffoldMessengerKey;
    this[home$] = home;
    this[routes$] = routes;
    this[initialRoute$] = initialRoute;
    this[onGenerateRoute$] = onGenerateRoute;
    this[onGenerateInitialRoutes$] = onGenerateInitialRoutes;
    this[onUnknownRoute$] = onUnknownRoute;
    this[navigatorObservers$] = navigatorObservers;
    this[builder$] = builder;
    this[title$] = title;
    this[onGenerateTitle$] = onGenerateTitle;
    this[color$] = color;
    this[theme$0] = theme;
    this[darkTheme$] = darkTheme;
    this[highContrastTheme$] = highContrastTheme;
    this[highContrastDarkTheme$] = highContrastDarkTheme;
    this[themeMode$] = themeMode;
    this[locale$] = locale;
    this[localizationsDelegates$] = localizationsDelegates;
    this[localeListResolutionCallback$] = localeListResolutionCallback;
    this[localeResolutionCallback$] = localeResolutionCallback;
    this[supportedLocales$] = supportedLocales;
    this[debugShowMaterialGrid$] = debugShowMaterialGrid;
    this[showPerformanceOverlay$] = showPerformanceOverlay;
    this[checkerboardRasterCacheImages$] = checkerboardRasterCacheImages;
    this[checkerboardOffscreenLayers$] = checkerboardOffscreenLayers;
    this[showSemanticsDebugger$] = showSemanticsDebugger;
    this[debugShowCheckedModeBanner$] = debugShowCheckedModeBanner;
    this[shortcuts$] = shortcuts;
    this[actions$] = actions;
    this[restorationScopeId$] = restorationScopeId;
    if (!(routes != null)) dart.assertFailed(null, L0, 201, 15, "routes != null");
    if (!(navigatorObservers != null)) dart.assertFailed(null, L0, 202, 15, "navigatorObservers != null");
    if (!(title != null)) dart.assertFailed(null, L0, 203, 15, "title != null");
    if (!(debugShowMaterialGrid != null)) dart.assertFailed(null, L0, 204, 15, "debugShowMaterialGrid != null");
    if (!(showPerformanceOverlay != null)) dart.assertFailed(null, L0, 205, 15, "showPerformanceOverlay != null");
    if (!(checkerboardRasterCacheImages != null)) dart.assertFailed(null, L0, 206, 15, "checkerboardRasterCacheImages != null");
    if (!(checkerboardOffscreenLayers != null)) dart.assertFailed(null, L0, 207, 15, "checkerboardOffscreenLayers != null");
    if (!(showSemanticsDebugger != null)) dart.assertFailed(null, L0, 208, 15, "showSemanticsDebugger != null");
    if (!(debugShowCheckedModeBanner != null)) dart.assertFailed(null, L0, 209, 15, "debugShowCheckedModeBanner != null");
    this[routeInformationProvider$] = null;
    this[routeInformationParser$] = null;
    this[routerDelegate$] = null;
    this[backButtonDispatcher$] = null;
    app$.MaterialApp.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = app$.MaterialApp.prototype;
  (app$.MaterialApp.router = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scaffoldMessengerKey = opts && 'scaffoldMessengerKey' in opts ? opts.scaffoldMessengerKey : null;
    let routeInformationProvider = opts && 'routeInformationProvider' in opts ? opts.routeInformationProvider : null;
    let routeInformationParser = opts && 'routeInformationParser' in opts ? opts.routeInformationParser : null;
    if (routeInformationParser == null) dart.nullFailed(L0, 221, 50, "routeInformationParser");
    let routerDelegate = opts && 'routerDelegate' in opts ? opts.routerDelegate : null;
    if (routerDelegate == null) dart.nullFailed(L0, 222, 42, "routerDelegate");
    let backButtonDispatcher = opts && 'backButtonDispatcher' in opts ? opts.backButtonDispatcher : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let title = opts && 'title' in opts ? opts.title : "";
    if (title == null) dart.nullFailed(L0, 225, 10, "title");
    let onGenerateTitle = opts && 'onGenerateTitle' in opts ? opts.onGenerateTitle : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let theme = opts && 'theme' in opts ? opts.theme : null;
    let darkTheme = opts && 'darkTheme' in opts ? opts.darkTheme : null;
    let highContrastTheme = opts && 'highContrastTheme' in opts ? opts.highContrastTheme : null;
    let highContrastDarkTheme = opts && 'highContrastDarkTheme' in opts ? opts.highContrastDarkTheme : null;
    let themeMode = opts && 'themeMode' in opts ? opts.themeMode : C0 || CT.C0;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let localizationsDelegates = opts && 'localizationsDelegates' in opts ? opts.localizationsDelegates : null;
    let localeListResolutionCallback = opts && 'localeListResolutionCallback' in opts ? opts.localeListResolutionCallback : null;
    let localeResolutionCallback = opts && 'localeResolutionCallback' in opts ? opts.localeResolutionCallback : null;
    let supportedLocales = opts && 'supportedLocales' in opts ? opts.supportedLocales : C6 || CT.C6;
    if (supportedLocales == null) dart.nullFailed(L0, 237, 10, "supportedLocales");
    let debugShowMaterialGrid = opts && 'debugShowMaterialGrid' in opts ? opts.debugShowMaterialGrid : false;
    if (debugShowMaterialGrid == null) dart.nullFailed(L0, 238, 10, "debugShowMaterialGrid");
    let showPerformanceOverlay = opts && 'showPerformanceOverlay' in opts ? opts.showPerformanceOverlay : false;
    if (showPerformanceOverlay == null) dart.nullFailed(L0, 239, 10, "showPerformanceOverlay");
    let checkerboardRasterCacheImages = opts && 'checkerboardRasterCacheImages' in opts ? opts.checkerboardRasterCacheImages : false;
    if (checkerboardRasterCacheImages == null) dart.nullFailed(L0, 240, 10, "checkerboardRasterCacheImages");
    let checkerboardOffscreenLayers = opts && 'checkerboardOffscreenLayers' in opts ? opts.checkerboardOffscreenLayers : false;
    if (checkerboardOffscreenLayers == null) dart.nullFailed(L0, 241, 10, "checkerboardOffscreenLayers");
    let showSemanticsDebugger = opts && 'showSemanticsDebugger' in opts ? opts.showSemanticsDebugger : false;
    if (showSemanticsDebugger == null) dart.nullFailed(L0, 242, 10, "showSemanticsDebugger");
    let debugShowCheckedModeBanner = opts && 'debugShowCheckedModeBanner' in opts ? opts.debugShowCheckedModeBanner : true;
    if (debugShowCheckedModeBanner == null) dart.nullFailed(L0, 243, 10, "debugShowCheckedModeBanner");
    let shortcuts = opts && 'shortcuts' in opts ? opts.shortcuts : null;
    let actions = opts && 'actions' in opts ? opts.actions : null;
    let restorationScopeId = opts && 'restorationScopeId' in opts ? opts.restorationScopeId : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[scaffoldMessengerKey$] = scaffoldMessengerKey;
    this[routeInformationProvider$] = routeInformationProvider;
    this[routeInformationParser$] = routeInformationParser;
    this[routerDelegate$] = routerDelegate;
    this[backButtonDispatcher$] = backButtonDispatcher;
    this[builder$] = builder;
    this[title$] = title;
    this[onGenerateTitle$] = onGenerateTitle;
    this[color$] = color;
    this[theme$0] = theme;
    this[darkTheme$] = darkTheme;
    this[highContrastTheme$] = highContrastTheme;
    this[highContrastDarkTheme$] = highContrastDarkTheme;
    this[themeMode$] = themeMode;
    this[locale$] = locale;
    this[localizationsDelegates$] = localizationsDelegates;
    this[localeListResolutionCallback$] = localeListResolutionCallback;
    this[localeResolutionCallback$] = localeResolutionCallback;
    this[supportedLocales$] = supportedLocales;
    this[debugShowMaterialGrid$] = debugShowMaterialGrid;
    this[showPerformanceOverlay$] = showPerformanceOverlay;
    this[checkerboardRasterCacheImages$] = checkerboardRasterCacheImages;
    this[checkerboardOffscreenLayers$] = checkerboardOffscreenLayers;
    this[showSemanticsDebugger$] = showSemanticsDebugger;
    this[debugShowCheckedModeBanner$] = debugShowCheckedModeBanner;
    this[shortcuts$] = shortcuts;
    this[actions$] = actions;
    this[restorationScopeId$] = restorationScopeId;
    if (!(routeInformationParser != null)) dart.assertFailed(null, L0, 247, 15, "routeInformationParser != null");
    if (!(routerDelegate != null)) dart.assertFailed(null, L0, 248, 15, "routerDelegate != null");
    if (!(title != null)) dart.assertFailed(null, L0, 249, 15, "title != null");
    if (!(debugShowMaterialGrid != null)) dart.assertFailed(null, L0, 250, 15, "debugShowMaterialGrid != null");
    if (!(showPerformanceOverlay != null)) dart.assertFailed(null, L0, 251, 15, "showPerformanceOverlay != null");
    if (!(checkerboardRasterCacheImages != null)) dart.assertFailed(null, L0, 252, 15, "checkerboardRasterCacheImages != null");
    if (!(checkerboardOffscreenLayers != null)) dart.assertFailed(null, L0, 253, 15, "checkerboardOffscreenLayers != null");
    if (!(showSemanticsDebugger != null)) dart.assertFailed(null, L0, 254, 15, "showSemanticsDebugger != null");
    if (!(debugShowCheckedModeBanner != null)) dart.assertFailed(null, L0, 255, 15, "debugShowCheckedModeBanner != null");
    this[navigatorObservers$] = null;
    this[navigatorKey$] = null;
    this[onGenerateRoute$] = null;
    this[home$] = null;
    this[onGenerateInitialRoutes$] = null;
    this[onUnknownRoute$] = null;
    this[routes$] = null;
    this[initialRoute$] = null;
    app$.MaterialApp.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = app$.MaterialApp.prototype;
  dart.addTypeTests(app$.MaterialApp);
  dart.addTypeCaches(app$.MaterialApp);
  dart.setMethodSignature(app$.MaterialApp, () => ({
    __proto__: dart.getMethods(app$.MaterialApp.__proto__),
    createState: dart.fnType(app$._MaterialAppState, [])
  }));
  dart.setLibraryUri(app$.MaterialApp, L1);
  dart.setFieldSignature(app$.MaterialApp, () => ({
    __proto__: dart.getFields(app$.MaterialApp.__proto__),
    navigatorKey: dart.finalFieldType(dart.nullable(framework.GlobalKey$(navigator.NavigatorState))),
    scaffoldMessengerKey: dart.finalFieldType(dart.nullable(framework.GlobalKey$(scaffold.ScaffoldMessengerState))),
    home: dart.finalFieldType(dart.nullable(framework.Widget)),
    routes: dart.finalFieldType(dart.nullable(core.Map$(core.String, dart.fnType(framework.Widget, [framework.BuildContext])))),
    initialRoute: dart.finalFieldType(dart.nullable(core.String)),
    onGenerateRoute: dart.finalFieldType(dart.nullable(dart.fnType(dart.nullable(navigator.Route), [navigator.RouteSettings]))),
    onGenerateInitialRoutes: dart.finalFieldType(dart.nullable(dart.fnType(core.List$(navigator.Route), [core.String]))),
    onUnknownRoute: dart.finalFieldType(dart.nullable(dart.fnType(dart.nullable(navigator.Route), [navigator.RouteSettings]))),
    navigatorObservers: dart.finalFieldType(dart.nullable(core.List$(navigator.NavigatorObserver))),
    routeInformationProvider: dart.finalFieldType(dart.nullable(router.RouteInformationProvider)),
    routeInformationParser: dart.finalFieldType(dart.nullable(router.RouteInformationParser$(core.Object))),
    routerDelegate: dart.finalFieldType(dart.nullable(router.RouterDelegate$(core.Object))),
    backButtonDispatcher: dart.finalFieldType(dart.nullable(router.BackButtonDispatcher)),
    builder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(framework.Widget)]))),
    title: dart.finalFieldType(core.String),
    onGenerateTitle: dart.finalFieldType(dart.nullable(dart.fnType(core.String, [framework.BuildContext]))),
    theme: dart.finalFieldType(dart.nullable(theme_data.ThemeData)),
    darkTheme: dart.finalFieldType(dart.nullable(theme_data.ThemeData)),
    highContrastTheme: dart.finalFieldType(dart.nullable(theme_data.ThemeData)),
    highContrastDarkTheme: dart.finalFieldType(dart.nullable(theme_data.ThemeData)),
    themeMode: dart.finalFieldType(dart.nullable(app$.ThemeMode)),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    locale: dart.finalFieldType(dart.nullable(ui.Locale)),
    localizationsDelegates: dart.finalFieldType(dart.nullable(core.Iterable$(localizations.LocalizationsDelegate))),
    localeListResolutionCallback: dart.finalFieldType(dart.nullable(dart.fnType(dart.nullable(ui.Locale), [dart.nullable(core.List$(ui.Locale)), core.Iterable$(ui.Locale)]))),
    localeResolutionCallback: dart.finalFieldType(dart.nullable(dart.fnType(dart.nullable(ui.Locale), [dart.nullable(ui.Locale), core.Iterable$(ui.Locale)]))),
    supportedLocales: dart.finalFieldType(core.Iterable$(ui.Locale)),
    showPerformanceOverlay: dart.finalFieldType(core.bool),
    checkerboardRasterCacheImages: dart.finalFieldType(core.bool),
    checkerboardOffscreenLayers: dart.finalFieldType(core.bool),
    showSemanticsDebugger: dart.finalFieldType(core.bool),
    debugShowCheckedModeBanner: dart.finalFieldType(core.bool),
    shortcuts: dart.finalFieldType(dart.nullable(core.Map$(shortcuts.LogicalKeySet, actions.Intent))),
    actions: dart.finalFieldType(dart.nullable(core.Map$(core.Type, actions.Action$(actions.Intent)))),
    restorationScopeId: dart.finalFieldType(dart.nullable(core.String)),
    debugShowMaterialGrid: dart.finalFieldType(core.bool)
  }));
  var _name = dart.privateName(platform, "_name");
  var C8;
  var C9;
  var C10;
  var C11;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C14;
  var C15;
  var C16;
  var C13;
  var C12;
  var C17;
  var C18;
  app$._MaterialScrollBehavior = class _MaterialScrollBehavior extends scroll_configuration.ScrollBehavior {
    getPlatform(context) {
      if (context == null) dart.nullFailed(L0, 664, 43, "context");
      return theme$.Theme.of(context).platform;
    }
    buildViewportChrome(context, child, axisDirection) {
      if (context == null) dart.nullFailed(L0, 669, 43, "context");
      if (child == null) dart.nullFailed(L0, 669, 59, "child");
      if (axisDirection == null) dart.nullFailed(L0, 669, 80, "axisDirection");
      switch (this.getPlatform(context)) {
        case C8 || CT.C8:
        case C9 || CT.C9:
        case C10 || CT.C10:
        case C11 || CT.C11:
        {
          return child;
        }
        case C17 || CT.C17:
        case C18 || CT.C18:
        {
          return new overscroll_indicator.GlowingOverscrollIndicator.new({child: child, axisDirection: axisDirection, color: theme$.Theme.of(context).accentColor, $creationLocationd_0dea112b090073317d4: C12 || CT.C12});
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
  };
  (app$._MaterialScrollBehavior.new = function() {
    app$._MaterialScrollBehavior.__proto__.new.call(this);
    ;
  }).prototype = app$._MaterialScrollBehavior.prototype;
  dart.addTypeTests(app$._MaterialScrollBehavior);
  dart.addTypeCaches(app$._MaterialScrollBehavior);
  dart.setLibraryUri(app$._MaterialScrollBehavior, L1);
  var ___MaterialAppState__heroController = dart.privateName(app$, "_#_MaterialAppState#_heroController");
  var ___MaterialAppState__heroController_isSet = dart.privateName(app$, "_#_MaterialAppState#_heroController#isSet");
  var _heroController = dart.privateName(app$, "_heroController");
  var _usesRouter = dart.privateName(app$, "_usesRouter");
  var _localizationsDelegates = dart.privateName(app$, "_localizationsDelegates");
  var C22;
  var C21;
  var C20;
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  var Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  var Icon_color = dart.privateName(icon, "Icon.color");
  var Icon_size = dart.privateName(icon, "Icon.size");
  var IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  var C23;
  var Icon_icon = dart.privateName(icon, "Icon.icon");
  var C19;
  var C26;
  var C27;
  var C28;
  var C25;
  var C24;
  var _inspectorSelectButtonBuilder = dart.privateName(app$, "_inspectorSelectButtonBuilder");
  var C31;
  var C30;
  var C29;
  var C34;
  var C35;
  var C33;
  var C32;
  var C38;
  var C39;
  var C37;
  var C36;
  var _materialBuilder = dart.privateName(app$, "_materialBuilder");
  var C42;
  var C43;
  var C44;
  var C45;
  var C46;
  var C47;
  var C48;
  var C49;
  var C50;
  var C51;
  var C52;
  var C53;
  var C54;
  var C55;
  var C56;
  var C57;
  var C58;
  var C59;
  var C60;
  var C61;
  var C62;
  var C63;
  var C64;
  var C65;
  var C41;
  var C40;
  var C68;
  var C69;
  var C70;
  var C71;
  var C72;
  var C73;
  var C74;
  var C75;
  var C76;
  var C77;
  var C78;
  var C79;
  var C80;
  var C81;
  var C82;
  var C83;
  var C84;
  var C85;
  var C86;
  var C87;
  var C88;
  var C89;
  var C90;
  var C91;
  var C92;
  var C93;
  var C94;
  var C95;
  var C96;
  var C67;
  var C66;
  var _buildWidgetApp = dart.privateName(app$, "_buildWidgetApp");
  var Color_value = dart.privateName(ui, "Color.value");
  var C97;
  var C100;
  var C101;
  var C102;
  var C103;
  var C104;
  var C99;
  var C98;
  var C107;
  var C108;
  var C106;
  var C105;
  var C111;
  var C112;
  var C110;
  var C109;
  app$._MaterialAppState = class _MaterialAppState extends framework.State$(app$.MaterialApp) {
    get [_heroController]() {
      let t0;
      return dart.test(this[___MaterialAppState__heroController_isSet]) ? (t0 = this[___MaterialAppState__heroController], t0) : dart.throw(new _internal.LateError.fieldNI("_heroController"));
    }
    set [_heroController](t0) {
      if (t0 == null) dart.nullFailed(L0, 690, 23, "null");
      this[___MaterialAppState__heroController_isSet] = true;
      this[___MaterialAppState__heroController] = t0;
    }
    get [_usesRouter]() {
      return this.widget.routerDelegate != null;
    }
    initState() {
      super.initState();
      this[_heroController] = app$.MaterialApp.createMaterialHeroController();
    }
    get [_localizationsDelegates]() {
      return new (SyncIterableOfLocalizationsDelegate()).new((function* _localizationsDelegates() {
        if (this.widget.localizationsDelegates != null) yield* dart.nullCheck(this.widget.localizationsDelegates);
        yield material_localizations.DefaultMaterialLocalizations.delegate;
        yield localizations$.DefaultCupertinoLocalizations.delegate;
      }).bind(this));
    }
    [_inspectorSelectButtonBuilder](context, onPressed) {
      if (context == null) dart.nullFailed(L0, 712, 53, "context");
      if (onPressed == null) dart.nullFailed(L0, 712, 75, "onPressed");
      return new floating_action_button.FloatingActionButton.new({child: C19 || CT.C19, onPressed: onPressed, mini: true, $creationLocationd_0dea112b090073317d4: C24 || CT.C24});
    }
    [_materialBuilder](context, child) {
      let t1, t1$;
      if (context == null) dart.nullFailed(L0, 720, 40, "context");
      let mode = (t1 = this.widget.themeMode, t1 == null ? app$.ThemeMode.system : t1);
      let platformBrightness = media_query.MediaQuery.platformBrightnessOf(context);
      let useDarkTheme = dart.equals(mode, app$.ThemeMode.dark) || dart.equals(mode, app$.ThemeMode.system) && dart.equals(platformBrightness, ui.Brightness.dark);
      let highContrast = media_query.MediaQuery.highContrastOf(context);
      let theme = null;
      if (useDarkTheme && dart.test(highContrast) && this.widget.highContrastDarkTheme != null) {
        theme = this.widget.highContrastDarkTheme;
      } else if (useDarkTheme && this.widget.darkTheme != null) {
        theme = this.widget.darkTheme;
      } else if (dart.test(highContrast) && this.widget.highContrastTheme != null) {
        theme = this.widget.highContrastTheme;
      }
      theme == null ? theme = (t1$ = this.widget.theme, t1$ == null ? theme_data.ThemeData.light() : t1$) : null;
      return new scaffold.ScaffoldMessenger.new({key: this.widget.scaffoldMessengerKey, child: new theme$.AnimatedTheme.new({data: theme, child: this.widget.builder != null ? new basic.Builder.new({builder: dart.fn(context => {
              if (context == null) dart.nullFailed(L0, 744, 38, "context");
              return dart.nullCheck(this.widget.builder)(context, child);
            }, BuildContextToWidget()), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}) : dart.nullCheck(child), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36});
    }
    [_buildWidgetApp](context) {
      let t2, t1, t1$;
      if (context == null) dart.nullFailed(L0, 764, 39, "context");
      let materialColor = (t1$ = (t1 = this.widget.color, t1 == null ? (t2 = this.widget.theme, t2 == null ? null : t2.primaryColor) : t1), t1$ == null ? colors.Colors.blue : t1$);
      if (dart.test(this[_usesRouter])) {
        return new app.WidgetsApp.router({key: new (GlobalObjectKeyOfStateOfStatefulWidget()).new(this), routeInformationProvider: this.widget.routeInformationProvider, routeInformationParser: dart.nullCheck(this.widget.routeInformationParser), routerDelegate: dart.nullCheck(this.widget.routerDelegate), backButtonDispatcher: this.widget.backButtonDispatcher, builder: dart.bind(this, _materialBuilder), title: this.widget.title, onGenerateTitle: this.widget.onGenerateTitle, textStyle: app$._errorTextStyle, color: materialColor, locale: this.widget.locale, localizationsDelegates: this[_localizationsDelegates], localeResolutionCallback: this.widget.localeResolutionCallback, localeListResolutionCallback: this.widget.localeListResolutionCallback, supportedLocales: this.widget.supportedLocales, showPerformanceOverlay: this.widget.showPerformanceOverlay, checkerboardRasterCacheImages: this.widget.checkerboardRasterCacheImages, checkerboardOffscreenLayers: this.widget.checkerboardOffscreenLayers, showSemanticsDebugger: this.widget.showSemanticsDebugger, debugShowCheckedModeBanner: this.widget.debugShowCheckedModeBanner, inspectorSelectButtonBuilder: dart.bind(this, _inspectorSelectButtonBuilder), shortcuts: this.widget.shortcuts, actions: this.widget.actions, restorationScopeId: this.widget.restorationScopeId, $creationLocationd_0dea112b090073317d4: C40 || CT.C40});
      }
      return new app.WidgetsApp.new({key: new (GlobalObjectKeyOfStateOfStatefulWidget()).new(this), navigatorKey: this.widget.navigatorKey, navigatorObservers: dart.nullCheck(this.widget.navigatorObservers), pageRouteBuilder: dart.fn((T, settings, builder) => {
          if (settings == null) dart.nullFailed(L0, 806, 43, "settings");
          if (builder == null) dart.nullFailed(L0, 806, 67, "builder");
          return new (page.MaterialPageRoute$(T)).new({settings: settings, builder: builder});
        }, RouteSettingsAndFnToMaterialPageRouteOfT()), home: this.widget.home, routes: dart.nullCheck(this.widget.routes), initialRoute: this.widget.initialRoute, onGenerateRoute: this.widget.onGenerateRoute, onGenerateInitialRoutes: this.widget.onGenerateInitialRoutes, onUnknownRoute: this.widget.onUnknownRoute, builder: dart.bind(this, _materialBuilder), title: this.widget.title, onGenerateTitle: this.widget.onGenerateTitle, textStyle: app$._errorTextStyle, color: materialColor, locale: this.widget.locale, localizationsDelegates: this[_localizationsDelegates], localeResolutionCallback: this.widget.localeResolutionCallback, localeListResolutionCallback: this.widget.localeListResolutionCallback, supportedLocales: this.widget.supportedLocales, showPerformanceOverlay: this.widget.showPerformanceOverlay, checkerboardRasterCacheImages: this.widget.checkerboardRasterCacheImages, checkerboardOffscreenLayers: this.widget.checkerboardOffscreenLayers, showSemanticsDebugger: this.widget.showSemanticsDebugger, debugShowCheckedModeBanner: this.widget.debugShowCheckedModeBanner, inspectorSelectButtonBuilder: dart.bind(this, _inspectorSelectButtonBuilder), shortcuts: this.widget.shortcuts, actions: this.widget.actions, restorationScopeId: this.widget.restorationScopeId, $creationLocationd_0dea112b090073317d4: C66 || CT.C66});
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 838, 29, "context");
      let result = this[_buildWidgetApp](context);
      if (!dart.test(dart.fn(() => {
        if (dart.test(this.widget.debugShowMaterialGrid)) {
          result = new grid_paper.GridPaper.new({color: C97 || CT.C97, interval: 8.0, divisions: 2, subdivisions: 1, child: result, $creationLocationd_0dea112b090073317d4: C98 || CT.C98});
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 841, 12, "() {\n      if (widget.debugShowMaterialGrid) {\n        result = GridPaper(\n          color: const Color(0xE0F9BBE0),\n          interval: 8.0,\n          divisions: 2,\n          subdivisions: 1,\n          child: result,\n        );\n      }\n      return true;\n    }()");
      return new scroll_configuration.ScrollConfiguration.new({behavior: new app$._MaterialScrollBehavior.new(), child: new navigator.HeroControllerScope.new({controller: this[_heroController], child: result, $creationLocationd_0dea112b090073317d4: C105 || CT.C105}), $creationLocationd_0dea112b090073317d4: C109 || CT.C109});
    }
  };
  (app$._MaterialAppState.new = function() {
    this[___MaterialAppState__heroController] = null;
    this[___MaterialAppState__heroController_isSet] = false;
    app$._MaterialAppState.__proto__.new.call(this);
    ;
  }).prototype = app$._MaterialAppState.prototype;
  dart.addTypeTests(app$._MaterialAppState);
  dart.addTypeCaches(app$._MaterialAppState);
  dart.setMethodSignature(app$._MaterialAppState, () => ({
    __proto__: dart.getMethods(app$._MaterialAppState.__proto__),
    [_inspectorSelectButtonBuilder]: dart.fnType(framework.Widget, [framework.BuildContext, dart.fnType(dart.void, [])]),
    [_materialBuilder]: dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(framework.Widget)]),
    [_buildWidgetApp]: dart.fnType(framework.Widget, [framework.BuildContext]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(app$._MaterialAppState, () => ({
    __proto__: dart.getGetters(app$._MaterialAppState.__proto__),
    [_heroController]: heroes.HeroController,
    [_usesRouter]: core.bool,
    [_localizationsDelegates]: core.Iterable$(localizations.LocalizationsDelegate)
  }));
  dart.setSetterSignature(app$._MaterialAppState, () => ({
    __proto__: dart.getSetters(app$._MaterialAppState.__proto__),
    [_heroController]: heroes.HeroController
  }));
  dart.setLibraryUri(app$._MaterialAppState, L1);
  dart.setFieldSignature(app$._MaterialAppState, () => ({
    __proto__: dart.getFields(app$._MaterialAppState.__proto__),
    [___MaterialAppState__heroController]: dart.fieldType(dart.nullable(heroes.HeroController)),
    [___MaterialAppState__heroController_isSet]: dart.fieldType(core.bool)
  }));
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var _name$0 = dart.privateName(ui, "_name");
  var C114;
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var C115;
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextDecoration__mask = dart.privateName(ui, "TextDecoration._mask");
  var C116;
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
  var C117;
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var C118;
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var C113;
  dart.defineLazy(app$, {
    /*app$._errorTextStyle*/get _errorTextStyle() {
      return C113 || CT.C113;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/app.dart", {
    "package:flutter/src/material/app.dart": app$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiDA;;;QAVK;;;;;EAUL;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"../../../../../../../../../../packages/flutter/src/material/app.dart.lib.js"}');
  // Exports:
  return {
    src__material__app: app$
  };
}));

//# sourceMappingURL=app.dart.lib.js.map
