define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/strut_style.dart', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/widgets/icon_theme_data.dart', 'packages/flutter/src/widgets/icon_theme.dart', 'packages/flutter/src/cupertino/interface_level.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/painting/colors.dart'], (function load__packages__flutter__src__cupertino__text_theme_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__strut_style$46dart, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__widgets__icon_theme_data$46dart, packages__flutter__src__widgets__icon_theme$46dart, packages__flutter__src__cupertino__interface_level$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__painting__colors$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const text_style = packages__flutter__src__painting__strut_style$46dart.src__painting__text_style;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const media_query = packages__flutter__src__widgets__widget_span$46dart.src__widgets__media_query;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const icon_theme_data = packages__flutter__src__widgets__icon_theme_data$46dart.src__widgets__icon_theme_data;
  const icon_theme = packages__flutter__src__widgets__icon_theme$46dart.src__widgets__icon_theme;
  const interface_level = packages__flutter__src__cupertino__interface_level$46dart.src__cupertino__interface_level;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  var text_theme = Object.create(dart.library);
  var icon_theme_data$ = Object.create(dart.library);
  var theme$ = Object.create(dart.library);
  var colors$ = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $join = dartx.join;
  dart._checkModuleNullSafetyMode(false);
  var DiagnosticsPropertyOfTextStyle = () => (DiagnosticsPropertyOfTextStyle = dart.constFn(diagnostics.DiagnosticsProperty$(text_style.TextStyle)))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var ColorN = () => (ColorN = dart.constFn(dart.nullable(ui.Color)))();
  var ColorNToColorN = () => (ColorNToColorN = dart.constFn(dart.fnType(ColorN(), [ColorN()])))();
  var EnumPropertyOfBrightness = () => (EnumPropertyOfBrightness = dart.constFn(diagnostics.EnumProperty$(ui.Brightness)))();
  var ColorToColor = () => (ColorToColor = dart.constFn(dart.fnType(ui.Color, [ui.Color])))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var StringAndColorToString = () => (StringAndColorToString = dart.constFn(dart.fnType(core.String, [core.String, ui.Color])))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var DiagnosticsPropertyOfElement = () => (DiagnosticsPropertyOfElement = dart.constFn(diagnostics.DiagnosticsProperty$(framework.Element)))();
  var DiagnosticsPropertyOfCupertinoDynamicColor = () => (DiagnosticsPropertyOfCupertinoDynamicColor = dart.constFn(diagnostics.DiagnosticsProperty$(colors$.CupertinoDynamicColor)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/cupertino/text_theme.dart";
  var L3 = "package:flutter/src/cupertino/icon_theme_data.dart";
  var L7 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/colors.dart";
  var L4 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/theme.dart";
  var L6 = "package:flutter/src/cupertino/colors.dart";
  var L2 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/icon_theme_data.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/text_theme.dart";
  var L5 = "package:flutter/src/cupertino/theme.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282424575.0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278206685.0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278879487.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278221567.0
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C1 || CT.C1,
        [CupertinoDynamicColor_highContrastElevatedColor]: C2 || CT.C2,
        [CupertinoDynamicColor_darkElevatedColor]: C3 || CT.C3,
        [CupertinoDynamicColor_elevatedColor]: C4 || CT.C4,
        [CupertinoDynamicColor_darkHighContrastColor]: C1 || CT.C1,
        [CupertinoDynamicColor_highContrastColor]: C2 || CT.C2,
        [CupertinoDynamicColor_darkColor]: C3 || CT.C3,
        [CupertinoDynamicColor_color]: C4 || CT.C4,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemBlue",
        [CupertinoDynamicColor__effectiveColor]: C4 || CT.C4
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4285887861.0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4288256409.0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C7 || CT.C7,
        [CupertinoDynamicColor_highContrastElevatedColor]: C8 || CT.C8,
        [CupertinoDynamicColor_darkElevatedColor]: C7 || CT.C7,
        [CupertinoDynamicColor_elevatedColor]: C8 || CT.C8,
        [CupertinoDynamicColor_darkHighContrastColor]: C7 || CT.C7,
        [CupertinoDynamicColor_highContrastColor]: C8 || CT.C8,
        [CupertinoDynamicColor_darkColor]: C7 || CT.C7,
        [CupertinoDynamicColor_color]: C8 || CT.C8,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "inactiveGray",
        [CupertinoDynamicColor__effectiveColor]: C8 || CT.C8
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C10 || CT.C10,
        [CupertinoDynamicColor_highContrastElevatedColor]: C11 || CT.C11,
        [CupertinoDynamicColor_darkElevatedColor]: C10 || CT.C10,
        [CupertinoDynamicColor_elevatedColor]: C11 || CT.C11,
        [CupertinoDynamicColor_darkHighContrastColor]: C10 || CT.C10,
        [CupertinoDynamicColor_highContrastColor]: C11 || CT.C11,
        [CupertinoDynamicColor_darkColor]: C10 || CT.C10,
        [CupertinoDynamicColor_color]: C11 || CT.C11,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "label",
        [CupertinoDynamicColor__effectiveColor]: C11 || CT.C11
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: text_theme._TextThemeDefaultsBuilder.prototype,
        [_TextThemeDefaultsBuilder_inactiveGrayColor]: C6 || CT.C6,
        [_TextThemeDefaultsBuilder_labelColor]: C9 || CT.C9
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: text_theme.CupertinoTextThemeData.prototype,
        [CupertinoTextThemeData__dateTimePickerTextStyle]: null,
        [CupertinoTextThemeData__pickerTextStyle]: null,
        [CupertinoTextThemeData__navActionTextStyle]: null,
        [CupertinoTextThemeData__navLargeTitleTextStyle]: null,
        [CupertinoTextThemeData__navTitleTextStyle]: null,
        [CupertinoTextThemeData__tabLabelTextStyle]: null,
        [CupertinoTextThemeData__actionTextStyle]: null,
        [CupertinoTextThemeData__textStyle]: null,
        [CupertinoTextThemeData__primaryColor]: C0 || CT.C0,
        [CupertinoTextThemeData__defaults]: C5 || CT.C5
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: ui.TextDecoration.prototype,
        [TextDecoration__mask]: 0
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C14 || CT.C14,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: -0.41,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF Pro Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C9 || CT.C9,
        [TextStyle_inherit]: false
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C14 || CT.C14,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: -0.41,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF Pro Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C0 || CT.C0,
        [TextStyle_inherit]: false
      });
    },
    get C16() {
      return C16 = dart.const({
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
        [TextStyle_letterSpacing]: -0.24,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 10,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF Pro Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C6 || CT.C6,
        [TextStyle_inherit]: false
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 5
      });
    },
    get C17() {
      return C17 = dart.const({
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
        [TextStyle_letterSpacing]: -0.41,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C18 || CT.C18,
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF Pro Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C9 || CT.C9,
        [TextStyle_inherit]: false
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C19() {
      return C19 = dart.const({
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
        [TextStyle_letterSpacing]: 0.41,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C20 || CT.C20,
        [TextStyle_fontSize]: 34,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF Pro Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C9 || CT.C9,
        [TextStyle_inherit]: false
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 3
      });
    },
    get C21() {
      return C21 = dart.const({
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
        [TextStyle_letterSpacing]: -0.6,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C22 || CT.C22,
        [TextStyle_fontSize]: 21,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF Pro Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C9 || CT.C9,
        [TextStyle_inherit]: false
      });
    },
    get C23() {
      return C23 = dart.const({
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
        [TextStyle_fontWeight]: C22 || CT.C22,
        [TextStyle_fontSize]: 21,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF Pro Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C9 || CT.C9,
        [TextStyle_inherit]: false
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: theme$._CupertinoTextThemeDefaults.prototype,
        [_CupertinoTextThemeDefaults_inactiveGray]: C6 || CT.C6,
        [_CupertinoTextThemeDefaults_labelColor]: C9 || CT.C9
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280558630.0
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280032286.0
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C28 || CT.C28,
        [CupertinoDynamicColor_highContrastElevatedColor]: C10 || CT.C10,
        [CupertinoDynamicColor_darkElevatedColor]: C29 || CT.C29,
        [CupertinoDynamicColor_elevatedColor]: C10 || CT.C10,
        [CupertinoDynamicColor_darkHighContrastColor]: C11 || CT.C11,
        [CupertinoDynamicColor_highContrastColor]: C10 || CT.C10,
        [CupertinoDynamicColor_darkColor]: C11 || CT.C11,
        [CupertinoDynamicColor_color]: C10 || CT.C10,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemBackground",
        [CupertinoDynamicColor__effectiveColor]: C10 || CT.C10
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4028439837.0
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4042914297.0
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C31 || CT.C31,
        [CupertinoDynamicColor_highContrastElevatedColor]: C32 || CT.C32,
        [CupertinoDynamicColor_darkElevatedColor]: C31 || CT.C31,
        [CupertinoDynamicColor_elevatedColor]: C32 || CT.C32,
        [CupertinoDynamicColor_darkHighContrastColor]: C31 || CT.C31,
        [CupertinoDynamicColor_highContrastColor]: C32 || CT.C32,
        [CupertinoDynamicColor_darkColor]: C31 || CT.C31,
        [CupertinoDynamicColor_color]: C32 || CT.C32,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: null,
        [CupertinoDynamicColor__effectiveColor]: C32 || CT.C32
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: theme$._CupertinoThemeDefaults.prototype,
        [_CupertinoThemeDefaults_textThemeDefaults]: C26 || CT.C26,
        [_CupertinoThemeDefaults_scaffoldBackgroundColor]: C27 || CT.C27,
        [_CupertinoThemeDefaults_barBackgroundColor]: C30 || CT.C30,
        [_CupertinoThemeDefaults_primaryContrastingColor]: C27 || CT.C27,
        [_CupertinoThemeDefaults_primaryColor]: C0 || CT.C0,
        [_CupertinoThemeDefaults_brightness]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: theme$.CupertinoThemeData.prototype,
        [NoDefaultCupertinoThemeData_scaffoldBackgroundColor]: null,
        [NoDefaultCupertinoThemeData_barBackgroundColor]: null,
        [NoDefaultCupertinoThemeData_textTheme]: null,
        [NoDefaultCupertinoThemeData_primaryContrastingColor]: null,
        [NoDefaultCupertinoThemeData_primaryColor]: null,
        [NoDefaultCupertinoThemeData_brightness]: null,
        [CupertinoThemeData__defaults]: C25 || CT.C25
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 9,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 125,
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
        [_Location_column]: 14,
        [_Location_line]: 123,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/theme.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "theme",
        [_Location_column]: 7,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40], _LocationL());
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 121,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/theme.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281391963.0
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280584765.0
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281389400.0
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281648985.0
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C42 || CT.C42,
        [CupertinoDynamicColor_highContrastElevatedColor]: C43 || CT.C43,
        [CupertinoDynamicColor_darkElevatedColor]: C44 || CT.C44,
        [CupertinoDynamicColor_elevatedColor]: C45 || CT.C45,
        [CupertinoDynamicColor_darkHighContrastColor]: C42 || CT.C42,
        [CupertinoDynamicColor_highContrastColor]: C43 || CT.C43,
        [CupertinoDynamicColor_darkColor]: C44 || CT.C44,
        [CupertinoDynamicColor_color]: C45 || CT.C45,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemGreen",
        [CupertinoDynamicColor__effectiveColor]: C45 || CT.C45
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294947648.0
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4291376128.0
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294942474.0
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294939904.0
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C47 || CT.C47,
        [CupertinoDynamicColor_highContrastElevatedColor]: C48 || CT.C48,
        [CupertinoDynamicColor_darkElevatedColor]: C49 || CT.C49,
        [CupertinoDynamicColor_elevatedColor]: C50 || CT.C50,
        [CupertinoDynamicColor_darkHighContrastColor]: C47 || CT.C47,
        [CupertinoDynamicColor_highContrastColor]: C48 || CT.C48,
        [CupertinoDynamicColor_darkColor]: C49 || CT.C49,
        [CupertinoDynamicColor_color]: C50 || CT.C50,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemOrange",
        [CupertinoDynamicColor__effectiveColor]: C50 || CT.C50
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293256682.0
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293914612.0
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279703319.0
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294928737.0
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292280341.0
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294919482.0
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294916912.0
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C55 || CT.C55,
        [CupertinoDynamicColor_highContrastElevatedColor]: C56 || CT.C56,
        [CupertinoDynamicColor_darkElevatedColor]: C57 || CT.C57,
        [CupertinoDynamicColor_elevatedColor]: C58 || CT.C58,
        [CupertinoDynamicColor_darkHighContrastColor]: C55 || CT.C55,
        [CupertinoDynamicColor_highContrastColor]: C56 || CT.C56,
        [CupertinoDynamicColor_darkColor]: C57 || CT.C57,
        [CupertinoDynamicColor_color]: C58 || CT.C58,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemRed",
        [CupertinoDynamicColor__effectiveColor]: C58 || CT.C58
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4286413567.0
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281742499.0
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284374246.0
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4283979478.0
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C60 || CT.C60,
        [CupertinoDynamicColor_highContrastElevatedColor]: C61 || CT.C61,
        [CupertinoDynamicColor_darkElevatedColor]: C62 || CT.C62,
        [CupertinoDynamicColor_elevatedColor]: C63 || CT.C63,
        [CupertinoDynamicColor_darkHighContrastColor]: C60 || CT.C60,
        [CupertinoDynamicColor_highContrastColor]: C61 || CT.C61,
        [CupertinoDynamicColor_darkColor]: C62 || CT.C62,
        [CupertinoDynamicColor_color]: C63 || CT.C63,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemIndigo",
        [CupertinoDynamicColor__effectiveColor]: C63 || CT.C63
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294927490.0
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292022085.0
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294915935.0
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294913365.0
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C65 || CT.C65,
        [CupertinoDynamicColor_highContrastElevatedColor]: C66 || CT.C66,
        [CupertinoDynamicColor_darkElevatedColor]: C67 || CT.C67,
        [CupertinoDynamicColor_elevatedColor]: C68 || CT.C68,
        [CupertinoDynamicColor_darkHighContrastColor]: C65 || CT.C65,
        [CupertinoDynamicColor_highContrastColor]: C66 || CT.C66,
        [CupertinoDynamicColor_darkColor]: C67 || CT.C67,
        [CupertinoDynamicColor_color]: C68 || CT.C68,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemPink",
        [CupertinoDynamicColor__effectiveColor]: C68 || CT.C68
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292513791.0
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4287186091.0
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290730738.0
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4289680094.0
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C70 || CT.C70,
        [CupertinoDynamicColor_highContrastElevatedColor]: C71 || CT.C71,
        [CupertinoDynamicColor_darkElevatedColor]: C72 || CT.C72,
        [CupertinoDynamicColor_elevatedColor]: C73 || CT.C73,
        [CupertinoDynamicColor_darkHighContrastColor]: C70 || CT.C70,
        [CupertinoDynamicColor_highContrastColor]: C71 || CT.C71,
        [CupertinoDynamicColor_darkColor]: C72 || CT.C72,
        [CupertinoDynamicColor_color]: C73 || CT.C73,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemPurple",
        [CupertinoDynamicColor__effectiveColor]: C73 || CT.C73
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4285585407.0
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278219172.0
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284797695.0
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284139770.0
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C75 || CT.C75,
        [CupertinoDynamicColor_highContrastElevatedColor]: C76 || CT.C76,
        [CupertinoDynamicColor_darkElevatedColor]: C77 || CT.C77,
        [CupertinoDynamicColor_elevatedColor]: C78 || CT.C78,
        [CupertinoDynamicColor_darkHighContrastColor]: C75 || CT.C75,
        [CupertinoDynamicColor_highContrastColor]: C76 || CT.C76,
        [CupertinoDynamicColor_darkColor]: C77 || CT.C77,
        [CupertinoDynamicColor_color]: C78 || CT.C78,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemTeal",
        [CupertinoDynamicColor__effectiveColor]: C78 || CT.C78
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294956070.0
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4288698880.0
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294956554.0
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294953984.0
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C80 || CT.C80,
        [CupertinoDynamicColor_highContrastElevatedColor]: C81 || CT.C81,
        [CupertinoDynamicColor_darkElevatedColor]: C82 || CT.C82,
        [CupertinoDynamicColor_elevatedColor]: C83 || CT.C83,
        [CupertinoDynamicColor_darkHighContrastColor]: C80 || CT.C80,
        [CupertinoDynamicColor_highContrastColor]: C81 || CT.C81,
        [CupertinoDynamicColor_darkColor]: C82 || CT.C82,
        [CupertinoDynamicColor_color]: C83 || CT.C83,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemYellow",
        [CupertinoDynamicColor__effectiveColor]: C83 || CT.C83
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4289638066.0
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4285295728.0
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4287532691.0
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C85 || CT.C85,
        [CupertinoDynamicColor_highContrastElevatedColor]: C86 || CT.C86,
        [CupertinoDynamicColor_darkElevatedColor]: C87 || CT.C87,
        [CupertinoDynamicColor_elevatedColor]: C87 || CT.C87,
        [CupertinoDynamicColor_darkHighContrastColor]: C85 || CT.C85,
        [CupertinoDynamicColor_highContrastColor]: C86 || CT.C86,
        [CupertinoDynamicColor_darkColor]: C87 || CT.C87,
        [CupertinoDynamicColor_color]: C87 || CT.C87,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemGrey",
        [CupertinoDynamicColor__effectiveColor]: C87 || CT.C87
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4286348416.0
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284703590.0
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C89 || CT.C89,
        [CupertinoDynamicColor_highContrastElevatedColor]: C87 || CT.C87,
        [CupertinoDynamicColor_darkElevatedColor]: C90 || CT.C90,
        [CupertinoDynamicColor_elevatedColor]: C85 || CT.C85,
        [CupertinoDynamicColor_darkHighContrastColor]: C89 || CT.C89,
        [CupertinoDynamicColor_highContrastColor]: C87 || CT.C87,
        [CupertinoDynamicColor_darkColor]: C90 || CT.C90,
        [CupertinoDynamicColor_color]: C85 || CT.C85,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemGrey2",
        [CupertinoDynamicColor__effectiveColor]: C85 || CT.C85
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4283716694.0
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282927178.0
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4291282892.0
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C92 || CT.C92,
        [CupertinoDynamicColor_highContrastElevatedColor]: C85 || CT.C85,
        [CupertinoDynamicColor_darkElevatedColor]: C93 || CT.C93,
        [CupertinoDynamicColor_elevatedColor]: C94 || CT.C94,
        [CupertinoDynamicColor_darkHighContrastColor]: C92 || CT.C92,
        [CupertinoDynamicColor_highContrastColor]: C85 || CT.C85,
        [CupertinoDynamicColor_darkColor]: C93 || CT.C93,
        [CupertinoDynamicColor_color]: C94 || CT.C94,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemGrey3",
        [CupertinoDynamicColor__effectiveColor]: C94 || CT.C94
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282664006.0
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290559168.0
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282006076.0
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4291940822.0
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C96 || CT.C96,
        [CupertinoDynamicColor_highContrastElevatedColor]: C97 || CT.C97,
        [CupertinoDynamicColor_darkElevatedColor]: C98 || CT.C98,
        [CupertinoDynamicColor_elevatedColor]: C99 || CT.C99,
        [CupertinoDynamicColor_darkHighContrastColor]: C96 || CT.C96,
        [CupertinoDynamicColor_highContrastColor]: C97 || CT.C97,
        [CupertinoDynamicColor_darkColor]: C98 || CT.C98,
        [CupertinoDynamicColor_color]: C99 || CT.C99,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemGrey4",
        [CupertinoDynamicColor__effectiveColor]: C99 || CT.C99
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281742904.0
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292401372.0
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281084974.0
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C101 || CT.C101,
        [CupertinoDynamicColor_highContrastElevatedColor]: C102 || CT.C102,
        [CupertinoDynamicColor_darkElevatedColor]: C103 || CT.C103,
        [CupertinoDynamicColor_elevatedColor]: C51 || CT.C51,
        [CupertinoDynamicColor_darkHighContrastColor]: C101 || CT.C101,
        [CupertinoDynamicColor_highContrastColor]: C102 || CT.C102,
        [CupertinoDynamicColor_darkColor]: C103 || CT.C103,
        [CupertinoDynamicColor_color]: C51 || CT.C51,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemGrey5",
        [CupertinoDynamicColor__effectiveColor]: C51 || CT.C51
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293651440.0
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294111991.0
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C28 || CT.C28,
        [CupertinoDynamicColor_highContrastElevatedColor]: C105 || CT.C105,
        [CupertinoDynamicColor_darkElevatedColor]: C29 || CT.C29,
        [CupertinoDynamicColor_elevatedColor]: C106 || CT.C106,
        [CupertinoDynamicColor_darkHighContrastColor]: C28 || CT.C28,
        [CupertinoDynamicColor_highContrastColor]: C105 || CT.C105,
        [CupertinoDynamicColor_darkColor]: C29 || CT.C29,
        [CupertinoDynamicColor_color]: C106 || CT.C106,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemGrey6",
        [CupertinoDynamicColor__effectiveColor]: C106 || CT.C106
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2917919733.0
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2906405955.0
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2582375413.0
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2570861635.0
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C108 || CT.C108,
        [CupertinoDynamicColor_highContrastElevatedColor]: C109 || CT.C109,
        [CupertinoDynamicColor_darkElevatedColor]: C110 || CT.C110,
        [CupertinoDynamicColor_elevatedColor]: C111 || CT.C111,
        [CupertinoDynamicColor_darkHighContrastColor]: C108 || CT.C108,
        [CupertinoDynamicColor_highContrastColor]: C109 || CT.C109,
        [CupertinoDynamicColor_darkColor]: C110 || CT.C110,
        [CupertinoDynamicColor_color]: C111 || CT.C111,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "secondaryLabel",
        [CupertinoDynamicColor__effectiveColor]: C111 || CT.C111
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1626074101
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1614560323
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1290529781
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1279016003
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C113 || CT.C113,
        [CupertinoDynamicColor_highContrastElevatedColor]: C114 || CT.C114,
        [CupertinoDynamicColor_darkElevatedColor]: C115 || CT.C115,
        [CupertinoDynamicColor_elevatedColor]: C116 || CT.C116,
        [CupertinoDynamicColor_darkHighContrastColor]: C113 || CT.C113,
        [CupertinoDynamicColor_highContrastColor]: C114 || CT.C114,
        [CupertinoDynamicColor_darkColor]: C115 || CT.C115,
        [CupertinoDynamicColor_color]: C116 || CT.C116,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "tertiaryLabel",
        [CupertinoDynamicColor__effectiveColor]: C116 || CT.C116
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1038871541
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1111243843
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 686550005
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 758922307
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C118 || CT.C118,
        [CupertinoDynamicColor_highContrastElevatedColor]: C119 || CT.C119,
        [CupertinoDynamicColor_darkElevatedColor]: C120 || CT.C120,
        [CupertinoDynamicColor_elevatedColor]: C121 || CT.C121,
        [CupertinoDynamicColor_darkHighContrastColor]: C118 || CT.C118,
        [CupertinoDynamicColor_highContrastColor]: C119 || CT.C119,
        [CupertinoDynamicColor_darkColor]: C120 || CT.C120,
        [CupertinoDynamicColor_color]: C121 || CT.C121,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "quaternaryLabel",
        [CupertinoDynamicColor__effectiveColor]: C121 || CT.C121
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1886943360
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1199077504
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1534621824
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 863533184
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C123 || CT.C123,
        [CupertinoDynamicColor_highContrastElevatedColor]: C124 || CT.C124,
        [CupertinoDynamicColor_darkElevatedColor]: C125 || CT.C125,
        [CupertinoDynamicColor_elevatedColor]: C126 || CT.C126,
        [CupertinoDynamicColor_darkHighContrastColor]: C123 || CT.C123,
        [CupertinoDynamicColor_highContrastColor]: C124 || CT.C124,
        [CupertinoDynamicColor_darkColor]: C125 || CT.C125,
        [CupertinoDynamicColor_color]: C126 || CT.C126,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemFill",
        [CupertinoDynamicColor__effectiveColor]: C126 || CT.C126
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1719171200
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1031305344
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1366849664
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 678983808
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C128 || CT.C128,
        [CupertinoDynamicColor_highContrastElevatedColor]: C129 || CT.C129,
        [CupertinoDynamicColor_darkElevatedColor]: C130 || CT.C130,
        [CupertinoDynamicColor_elevatedColor]: C131 || CT.C131,
        [CupertinoDynamicColor_darkHighContrastColor]: C128 || CT.C128,
        [CupertinoDynamicColor_highContrastColor]: C129 || CT.C129,
        [CupertinoDynamicColor_darkColor]: C130 || CT.C130,
        [CupertinoDynamicColor_color]: C131 || CT.C131,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "secondarySystemFill",
        [CupertinoDynamicColor__effectiveColor]: C131 || CT.C131
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1366718080
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 863401600
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1031173760
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 511080064
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C133 || CT.C133,
        [CupertinoDynamicColor_highContrastElevatedColor]: C134 || CT.C134,
        [CupertinoDynamicColor_darkElevatedColor]: C135 || CT.C135,
        [CupertinoDynamicColor_elevatedColor]: C136 || CT.C136,
        [CupertinoDynamicColor_darkHighContrastColor]: C133 || CT.C133,
        [CupertinoDynamicColor_highContrastColor]: C134 || CT.C134,
        [CupertinoDynamicColor_darkColor]: C135 || CT.C135,
        [CupertinoDynamicColor_color]: C136 || CT.C136,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "tertiarySystemFill",
        [CupertinoDynamicColor__effectiveColor]: C136 || CT.C136
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1115059840
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 678720640
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 762738304
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 343176320
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C138 || CT.C138,
        [CupertinoDynamicColor_highContrastElevatedColor]: C139 || CT.C139,
        [CupertinoDynamicColor_darkElevatedColor]: C140 || CT.C140,
        [CupertinoDynamicColor_elevatedColor]: C141 || CT.C141,
        [CupertinoDynamicColor_darkHighContrastColor]: C138 || CT.C138,
        [CupertinoDynamicColor_highContrastColor]: C139 || CT.C139,
        [CupertinoDynamicColor_darkColor]: C140 || CT.C140,
        [CupertinoDynamicColor_color]: C141 || CT.C141,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "quaternarySystemFill",
        [CupertinoDynamicColor__effectiveColor]: C141 || CT.C141
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C113 || CT.C113,
        [CupertinoDynamicColor_highContrastElevatedColor]: C114 || CT.C114,
        [CupertinoDynamicColor_darkElevatedColor]: C115 || CT.C115,
        [CupertinoDynamicColor_elevatedColor]: C116 || CT.C116,
        [CupertinoDynamicColor_darkHighContrastColor]: C113 || CT.C113,
        [CupertinoDynamicColor_highContrastColor]: C114 || CT.C114,
        [CupertinoDynamicColor_darkColor]: C115 || CT.C115,
        [CupertinoDynamicColor_color]: C116 || CT.C116,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "placeholderText",
        [CupertinoDynamicColor__effectiveColor]: C116 || CT.C116
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C101 || CT.C101,
        [CupertinoDynamicColor_highContrastElevatedColor]: C105 || CT.C105,
        [CupertinoDynamicColor_darkElevatedColor]: C103 || CT.C103,
        [CupertinoDynamicColor_elevatedColor]: C106 || CT.C106,
        [CupertinoDynamicColor_darkHighContrastColor]: C28 || CT.C28,
        [CupertinoDynamicColor_highContrastColor]: C105 || CT.C105,
        [CupertinoDynamicColor_darkColor]: C29 || CT.C29,
        [CupertinoDynamicColor_color]: C106 || CT.C106,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "secondarySystemBackground",
        [CupertinoDynamicColor__effectiveColor]: C106 || CT.C106
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C96 || CT.C96,
        [CupertinoDynamicColor_highContrastElevatedColor]: C10 || CT.C10,
        [CupertinoDynamicColor_darkElevatedColor]: C98 || CT.C98,
        [CupertinoDynamicColor_elevatedColor]: C10 || CT.C10,
        [CupertinoDynamicColor_darkHighContrastColor]: C101 || CT.C101,
        [CupertinoDynamicColor_highContrastColor]: C10 || CT.C10,
        [CupertinoDynamicColor_darkColor]: C103 || CT.C103,
        [CupertinoDynamicColor_color]: C10 || CT.C10,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "tertiarySystemBackground",
        [CupertinoDynamicColor__effectiveColor]: C10 || CT.C10
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C28 || CT.C28,
        [CupertinoDynamicColor_highContrastElevatedColor]: C105 || CT.C105,
        [CupertinoDynamicColor_darkElevatedColor]: C29 || CT.C29,
        [CupertinoDynamicColor_elevatedColor]: C106 || CT.C106,
        [CupertinoDynamicColor_darkHighContrastColor]: C11 || CT.C11,
        [CupertinoDynamicColor_highContrastColor]: C105 || CT.C105,
        [CupertinoDynamicColor_darkColor]: C11 || CT.C11,
        [CupertinoDynamicColor_color]: C106 || CT.C106,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemGroupedBackground",
        [CupertinoDynamicColor__effectiveColor]: C106 || CT.C106
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C101 || CT.C101,
        [CupertinoDynamicColor_highContrastElevatedColor]: C10 || CT.C10,
        [CupertinoDynamicColor_darkElevatedColor]: C103 || CT.C103,
        [CupertinoDynamicColor_elevatedColor]: C10 || CT.C10,
        [CupertinoDynamicColor_darkHighContrastColor]: C28 || CT.C28,
        [CupertinoDynamicColor_highContrastColor]: C10 || CT.C10,
        [CupertinoDynamicColor_darkColor]: C29 || CT.C29,
        [CupertinoDynamicColor_color]: C10 || CT.C10,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "secondarySystemGroupedBackground",
        [CupertinoDynamicColor__effectiveColor]: C10 || CT.C10
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C96 || CT.C96,
        [CupertinoDynamicColor_highContrastElevatedColor]: C105 || CT.C105,
        [CupertinoDynamicColor_darkElevatedColor]: C98 || CT.C98,
        [CupertinoDynamicColor_elevatedColor]: C106 || CT.C106,
        [CupertinoDynamicColor_darkHighContrastColor]: C101 || CT.C101,
        [CupertinoDynamicColor_highContrastColor]: C105 || CT.C105,
        [CupertinoDynamicColor_darkColor]: C103 || CT.C103,
        [CupertinoDynamicColor_color]: C106 || CT.C106,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "tertiarySystemGroupedBackground",
        [CupertinoDynamicColor__effectiveColor]: C106 || CT.C106
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2907984984.0
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1581005891
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2572440664.0
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1228684355
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C149 || CT.C149,
        [CupertinoDynamicColor_highContrastElevatedColor]: C150 || CT.C150,
        [CupertinoDynamicColor_darkElevatedColor]: C151 || CT.C151,
        [CupertinoDynamicColor_elevatedColor]: C152 || CT.C152,
        [CupertinoDynamicColor_darkHighContrastColor]: C149 || CT.C149,
        [CupertinoDynamicColor_highContrastColor]: C150 || CT.C150,
        [CupertinoDynamicColor_darkColor]: C151 || CT.C151,
        [CupertinoDynamicColor_color]: C152 || CT.C152,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "separator",
        [CupertinoDynamicColor__effectiveColor]: C152 || CT.C152
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281874490.0
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4291217096.0
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C154 || CT.C154,
        [CupertinoDynamicColor_highContrastElevatedColor]: C155 || CT.C155,
        [CupertinoDynamicColor_darkElevatedColor]: C154 || CT.C154,
        [CupertinoDynamicColor_elevatedColor]: C155 || CT.C155,
        [CupertinoDynamicColor_darkHighContrastColor]: C154 || CT.C154,
        [CupertinoDynamicColor_highContrastColor]: C155 || CT.C155,
        [CupertinoDynamicColor_darkColor]: C154 || CT.C154,
        [CupertinoDynamicColor_color]: C155 || CT.C155,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "opaqueSeparator",
        [CupertinoDynamicColor__effectiveColor]: C155 || CT.C155
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278813951.0
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C157 || CT.C157,
        [CupertinoDynamicColor_highContrastElevatedColor]: C4 || CT.C4,
        [CupertinoDynamicColor_darkElevatedColor]: C157 || CT.C157,
        [CupertinoDynamicColor_elevatedColor]: C4 || CT.C4,
        [CupertinoDynamicColor_darkHighContrastColor]: C157 || CT.C157,
        [CupertinoDynamicColor_highContrastColor]: C4 || CT.C4,
        [CupertinoDynamicColor_darkColor]: C157 || CT.C157,
        [CupertinoDynamicColor_color]: C4 || CT.C4,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "link",
        [CupertinoDynamicColor__effectiveColor]: C4 || CT.C4
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: interface_level.CupertinoUserInterfaceLevelData.prototype,
        [_name]: "CupertinoUserInterfaceLevelData.base",
        index: 0
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: interface_level.CupertinoUserInterfaceLevelData.prototype,
        [_name]: "CupertinoUserInterfaceLevelData.elevated",
        index: 1
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: ui.Brightness.prototype,
        [_name$]: "Brightness.light",
        index: 1
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: ui.Brightness.prototype,
        [_name$]: "Brightness.dark",
        index: 0
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: diagnostics.DiagnosticLevel.prototype,
        [_name$0]: "DiagnosticLevel.info",
        index: 3
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: diagnostics._NoDefaultValue.prototype
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: diagnostics.DiagnosticsTreeStyle.prototype,
        [_name$0]: "DiagnosticsTreeStyle.singleLine",
        index: 8
      });
    }
  }, false);
  var Color_value = dart.privateName(ui, "Color.value");
  var C1;
  var CupertinoDynamicColor_darkHighContrastElevatedColor = dart.privateName(colors$, "CupertinoDynamicColor.darkHighContrastElevatedColor");
  var C2;
  var CupertinoDynamicColor_highContrastElevatedColor = dart.privateName(colors$, "CupertinoDynamicColor.highContrastElevatedColor");
  var C3;
  var CupertinoDynamicColor_darkElevatedColor = dart.privateName(colors$, "CupertinoDynamicColor.darkElevatedColor");
  var C4;
  var CupertinoDynamicColor_elevatedColor = dart.privateName(colors$, "CupertinoDynamicColor.elevatedColor");
  var CupertinoDynamicColor_darkHighContrastColor = dart.privateName(colors$, "CupertinoDynamicColor.darkHighContrastColor");
  var CupertinoDynamicColor_highContrastColor = dart.privateName(colors$, "CupertinoDynamicColor.highContrastColor");
  var CupertinoDynamicColor_darkColor = dart.privateName(colors$, "CupertinoDynamicColor.darkColor");
  var CupertinoDynamicColor_color = dart.privateName(colors$, "CupertinoDynamicColor.color");
  var CupertinoDynamicColor__debugResolveContext = dart.privateName(colors$, "CupertinoDynamicColor._debugResolveContext");
  var CupertinoDynamicColor__debugLabel = dart.privateName(colors$, "CupertinoDynamicColor._debugLabel");
  var CupertinoDynamicColor__effectiveColor = dart.privateName(colors$, "CupertinoDynamicColor._effectiveColor");
  var C0;
  var C7;
  var C8;
  var C6;
  var _TextThemeDefaultsBuilder_inactiveGrayColor = dart.privateName(text_theme, "_TextThemeDefaultsBuilder.inactiveGrayColor");
  var C10;
  var C11;
  var C9;
  var _TextThemeDefaultsBuilder_labelColor = dart.privateName(text_theme, "_TextThemeDefaultsBuilder.labelColor");
  var C5;
  var _defaults = dart.privateName(text_theme, "_defaults");
  var _primaryColor = dart.privateName(text_theme, "_primaryColor");
  var _textStyle = dart.privateName(text_theme, "_textStyle");
  var _actionTextStyle = dart.privateName(text_theme, "_actionTextStyle");
  var _tabLabelTextStyle = dart.privateName(text_theme, "_tabLabelTextStyle");
  var _navTitleTextStyle = dart.privateName(text_theme, "_navTitleTextStyle");
  var _navLargeTitleTextStyle = dart.privateName(text_theme, "_navLargeTitleTextStyle");
  var _navActionTextStyle = dart.privateName(text_theme, "_navActionTextStyle");
  var _pickerTextStyle = dart.privateName(text_theme, "_pickerTextStyle");
  var _dateTimePickerTextStyle = dart.privateName(text_theme, "_dateTimePickerTextStyle");
  var CupertinoTextThemeData__dateTimePickerTextStyle = dart.privateName(text_theme, "CupertinoTextThemeData._dateTimePickerTextStyle");
  var CupertinoTextThemeData__pickerTextStyle = dart.privateName(text_theme, "CupertinoTextThemeData._pickerTextStyle");
  var CupertinoTextThemeData__navActionTextStyle = dart.privateName(text_theme, "CupertinoTextThemeData._navActionTextStyle");
  var CupertinoTextThemeData__navLargeTitleTextStyle = dart.privateName(text_theme, "CupertinoTextThemeData._navLargeTitleTextStyle");
  var CupertinoTextThemeData__navTitleTextStyle = dart.privateName(text_theme, "CupertinoTextThemeData._navTitleTextStyle");
  var CupertinoTextThemeData__tabLabelTextStyle = dart.privateName(text_theme, "CupertinoTextThemeData._tabLabelTextStyle");
  var CupertinoTextThemeData__actionTextStyle = dart.privateName(text_theme, "CupertinoTextThemeData._actionTextStyle");
  var CupertinoTextThemeData__textStyle = dart.privateName(text_theme, "CupertinoTextThemeData._textStyle");
  var CupertinoTextThemeData__primaryColor = dart.privateName(text_theme, "CupertinoTextThemeData._primaryColor");
  var CupertinoTextThemeData__defaults = dart.privateName(text_theme, "CupertinoTextThemeData._defaults");
  var C12;
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  text_theme.CupertinoTextThemeData = class CupertinoTextThemeData extends Object_Diagnosticable$36 {
    get [_defaults]() {
      return this[_defaults$];
    }
    set [_defaults](value) {
      super[_defaults] = value;
    }
    get [_primaryColor]() {
      return this[_primaryColor$];
    }
    set [_primaryColor](value) {
      super[_primaryColor] = value;
    }
    get [_textStyle]() {
      return this[_textStyle$];
    }
    set [_textStyle](value) {
      super[_textStyle] = value;
    }
    get [_actionTextStyle]() {
      return this[_actionTextStyle$];
    }
    set [_actionTextStyle](value) {
      super[_actionTextStyle] = value;
    }
    get [_tabLabelTextStyle]() {
      return this[_tabLabelTextStyle$];
    }
    set [_tabLabelTextStyle](value) {
      super[_tabLabelTextStyle] = value;
    }
    get [_navTitleTextStyle]() {
      return this[_navTitleTextStyle$];
    }
    set [_navTitleTextStyle](value) {
      super[_navTitleTextStyle] = value;
    }
    get [_navLargeTitleTextStyle]() {
      return this[_navLargeTitleTextStyle$];
    }
    set [_navLargeTitleTextStyle](value) {
      super[_navLargeTitleTextStyle] = value;
    }
    get [_navActionTextStyle]() {
      return this[_navActionTextStyle$];
    }
    set [_navActionTextStyle](value) {
      super[_navActionTextStyle] = value;
    }
    get [_pickerTextStyle]() {
      return this[_pickerTextStyle$];
    }
    set [_pickerTextStyle](value) {
      super[_pickerTextStyle] = value;
    }
    get [_dateTimePickerTextStyle]() {
      return this[_dateTimePickerTextStyle$];
    }
    set [_dateTimePickerTextStyle](value) {
      super[_dateTimePickerTextStyle] = value;
    }
    get textStyle() {
      let t0;
      t0 = this[_textStyle];
      return t0 == null ? this[_defaults].textStyle : t0;
    }
    get actionTextStyle() {
      let t0;
      t0 = this[_actionTextStyle];
      return t0 == null ? this[_defaults].actionTextStyle({primaryColor: this[_primaryColor]}) : t0;
    }
    get tabLabelTextStyle() {
      let t0;
      t0 = this[_tabLabelTextStyle];
      return t0 == null ? this[_defaults].tabLabelTextStyle : t0;
    }
    get navTitleTextStyle() {
      let t0;
      t0 = this[_navTitleTextStyle];
      return t0 == null ? this[_defaults].navTitleTextStyle : t0;
    }
    get navLargeTitleTextStyle() {
      let t0;
      t0 = this[_navLargeTitleTextStyle];
      return t0 == null ? this[_defaults].navLargeTitleTextStyle : t0;
    }
    get navActionTextStyle() {
      let t0;
      t0 = this[_navActionTextStyle];
      return t0 == null ? this[_defaults].navActionTextStyle({primaryColor: this[_primaryColor]}) : t0;
    }
    get pickerTextStyle() {
      let t0;
      t0 = this[_pickerTextStyle];
      return t0 == null ? this[_defaults].pickerTextStyle : t0;
    }
    get dateTimePickerTextStyle() {
      let t0;
      t0 = this[_dateTimePickerTextStyle];
      return t0 == null ? this[_defaults].dateTimePickerTextStyle : t0;
    }
    resolveFrom(context) {
      if (context == null) dart.nullFailed(L0, 214, 51, "context");
      return new text_theme.CupertinoTextThemeData._raw(this[_defaults].resolveFrom(context), colors$.CupertinoDynamicColor.maybeResolve(this[_primaryColor], context), text_theme._resolveTextStyle(this[_textStyle], context), text_theme._resolveTextStyle(this[_actionTextStyle], context), text_theme._resolveTextStyle(this[_tabLabelTextStyle], context), text_theme._resolveTextStyle(this[_navTitleTextStyle], context), text_theme._resolveTextStyle(this[_navLargeTitleTextStyle], context), text_theme._resolveTextStyle(this[_navActionTextStyle], context), text_theme._resolveTextStyle(this[_pickerTextStyle], context), text_theme._resolveTextStyle(this[_dateTimePickerTextStyle], context));
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6;
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      let brightness = opts && 'brightness' in opts ? opts.brightness : null;
      let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
      let actionTextStyle = opts && 'actionTextStyle' in opts ? opts.actionTextStyle : null;
      let tabLabelTextStyle = opts && 'tabLabelTextStyle' in opts ? opts.tabLabelTextStyle : null;
      let navTitleTextStyle = opts && 'navTitleTextStyle' in opts ? opts.navTitleTextStyle : null;
      let navLargeTitleTextStyle = opts && 'navLargeTitleTextStyle' in opts ? opts.navLargeTitleTextStyle : null;
      let navActionTextStyle = opts && 'navActionTextStyle' in opts ? opts.navActionTextStyle : null;
      let pickerTextStyle = opts && 'pickerTextStyle' in opts ? opts.pickerTextStyle : null;
      let dateTimePickerTextStyle = opts && 'dateTimePickerTextStyle' in opts ? opts.dateTimePickerTextStyle : null;
      return new text_theme.CupertinoTextThemeData._raw(this[_defaults], (t0 = primaryColor, t0 == null ? this[_primaryColor] : t0), (t0$ = textStyle, t0$ == null ? this[_textStyle] : t0$), (t0$0 = actionTextStyle, t0$0 == null ? this[_actionTextStyle] : t0$0), (t0$1 = tabLabelTextStyle, t0$1 == null ? this[_tabLabelTextStyle] : t0$1), (t0$2 = navTitleTextStyle, t0$2 == null ? this[_navTitleTextStyle] : t0$2), (t0$3 = navLargeTitleTextStyle, t0$3 == null ? this[_navLargeTitleTextStyle] : t0$3), (t0$4 = navActionTextStyle, t0$4 == null ? this[_navActionTextStyle] : t0$4), (t0$5 = pickerTextStyle, t0$5 == null ? this[_pickerTextStyle] : t0$5), (t0$6 = dateTimePickerTextStyle, t0$6 == null ? this[_dateTimePickerTextStyle] : t0$6));
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 262, 56, "properties");
      super.debugFillProperties(properties);
      let defaultData = C12 || CT.C12;
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("textStyle", this.textStyle, {defaultValue: defaultData.textStyle}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("actionTextStyle", this.actionTextStyle, {defaultValue: defaultData.actionTextStyle}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("tabLabelTextStyle", this.tabLabelTextStyle, {defaultValue: defaultData.tabLabelTextStyle}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("navTitleTextStyle", this.navTitleTextStyle, {defaultValue: defaultData.navTitleTextStyle}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("navLargeTitleTextStyle", this.navLargeTitleTextStyle, {defaultValue: defaultData.navLargeTitleTextStyle}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("navActionTextStyle", this.navActionTextStyle, {defaultValue: defaultData.navActionTextStyle}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("pickerTextStyle", this.pickerTextStyle, {defaultValue: defaultData.pickerTextStyle}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("dateTimePickerTextStyle", this.dateTimePickerTextStyle, {defaultValue: defaultData.dateTimePickerTextStyle}));
    }
  };
  (text_theme.CupertinoTextThemeData.new = function(opts) {
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : C0 || CT.C0;
    if (primaryColor == null) dart.nullFailed(L0, 126, 11, "primaryColor");
    let brightness = opts && 'brightness' in opts ? opts.brightness : null;
    let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
    let actionTextStyle = opts && 'actionTextStyle' in opts ? opts.actionTextStyle : null;
    let tabLabelTextStyle = opts && 'tabLabelTextStyle' in opts ? opts.tabLabelTextStyle : null;
    let navTitleTextStyle = opts && 'navTitleTextStyle' in opts ? opts.navTitleTextStyle : null;
    let navLargeTitleTextStyle = opts && 'navLargeTitleTextStyle' in opts ? opts.navLargeTitleTextStyle : null;
    let navActionTextStyle = opts && 'navActionTextStyle' in opts ? opts.navActionTextStyle : null;
    let pickerTextStyle = opts && 'pickerTextStyle' in opts ? opts.pickerTextStyle : null;
    let dateTimePickerTextStyle = opts && 'dateTimePickerTextStyle' in opts ? opts.dateTimePickerTextStyle : null;
    text_theme.CupertinoTextThemeData._raw.call(this, C5 || CT.C5, primaryColor, textStyle, actionTextStyle, tabLabelTextStyle, navTitleTextStyle, navLargeTitleTextStyle, navActionTextStyle, pickerTextStyle, dateTimePickerTextStyle);
  }).prototype = text_theme.CupertinoTextThemeData.prototype;
  (text_theme.CupertinoTextThemeData._raw = function(_defaults, _primaryColor, _textStyle, _actionTextStyle, _tabLabelTextStyle, _navTitleTextStyle, _navLargeTitleTextStyle, _navActionTextStyle, _pickerTextStyle, _dateTimePickerTextStyle) {
    if (_defaults == null) dart.nullFailed(L0, 155, 10, "_defaults");
    this[_defaults$] = _defaults;
    this[_primaryColor$] = _primaryColor;
    this[_textStyle$] = _textStyle;
    this[_actionTextStyle$] = _actionTextStyle;
    this[_tabLabelTextStyle$] = _tabLabelTextStyle;
    this[_navTitleTextStyle$] = _navTitleTextStyle;
    this[_navLargeTitleTextStyle$] = _navLargeTitleTextStyle;
    this[_navActionTextStyle$] = _navActionTextStyle;
    this[_pickerTextStyle$] = _pickerTextStyle;
    this[_dateTimePickerTextStyle$] = _dateTimePickerTextStyle;
    if (!(_navActionTextStyle != null && _actionTextStyle != null || _primaryColor != null)) dart.assertFailed(null, L0, 165, 14, "(_navActionTextStyle != null && _actionTextStyle != null) || _primaryColor != null");
    ;
  }).prototype = text_theme.CupertinoTextThemeData.prototype;
  dart.addTypeTests(text_theme.CupertinoTextThemeData);
  dart.addTypeCaches(text_theme.CupertinoTextThemeData);
  const _defaults$ = CupertinoTextThemeData__defaults;
  const _primaryColor$ = CupertinoTextThemeData__primaryColor;
  const _textStyle$ = CupertinoTextThemeData__textStyle;
  const _actionTextStyle$ = CupertinoTextThemeData__actionTextStyle;
  const _tabLabelTextStyle$ = CupertinoTextThemeData__tabLabelTextStyle;
  const _navTitleTextStyle$ = CupertinoTextThemeData__navTitleTextStyle;
  const _navLargeTitleTextStyle$ = CupertinoTextThemeData__navLargeTitleTextStyle;
  const _navActionTextStyle$ = CupertinoTextThemeData__navActionTextStyle;
  const _pickerTextStyle$ = CupertinoTextThemeData__pickerTextStyle;
  const _dateTimePickerTextStyle$ = CupertinoTextThemeData__dateTimePickerTextStyle;
  dart.setMethodSignature(text_theme.CupertinoTextThemeData, () => ({
    __proto__: dart.getMethods(text_theme.CupertinoTextThemeData.__proto__),
    resolveFrom: dart.fnType(text_theme.CupertinoTextThemeData, [framework.BuildContext]),
    copyWith: dart.fnType(text_theme.CupertinoTextThemeData, [], {actionTextStyle: dart.nullable(text_style.TextStyle), brightness: dart.nullable(ui.Brightness), dateTimePickerTextStyle: dart.nullable(text_style.TextStyle), navActionTextStyle: dart.nullable(text_style.TextStyle), navLargeTitleTextStyle: dart.nullable(text_style.TextStyle), navTitleTextStyle: dart.nullable(text_style.TextStyle), pickerTextStyle: dart.nullable(text_style.TextStyle), primaryColor: dart.nullable(ui.Color), tabLabelTextStyle: dart.nullable(text_style.TextStyle), textStyle: dart.nullable(text_style.TextStyle)}, {})
  }));
  dart.setGetterSignature(text_theme.CupertinoTextThemeData, () => ({
    __proto__: dart.getGetters(text_theme.CupertinoTextThemeData.__proto__),
    textStyle: text_style.TextStyle,
    actionTextStyle: text_style.TextStyle,
    tabLabelTextStyle: text_style.TextStyle,
    navTitleTextStyle: text_style.TextStyle,
    navLargeTitleTextStyle: text_style.TextStyle,
    navActionTextStyle: text_style.TextStyle,
    pickerTextStyle: text_style.TextStyle,
    dateTimePickerTextStyle: text_style.TextStyle
  }));
  dart.setLibraryUri(text_theme.CupertinoTextThemeData, L1);
  dart.setFieldSignature(text_theme.CupertinoTextThemeData, () => ({
    __proto__: dart.getFields(text_theme.CupertinoTextThemeData.__proto__),
    [_defaults]: dart.finalFieldType(text_theme._TextThemeDefaultsBuilder),
    [_primaryColor]: dart.finalFieldType(dart.nullable(ui.Color)),
    [_textStyle]: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    [_actionTextStyle]: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    [_tabLabelTextStyle]: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    [_navTitleTextStyle]: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    [_navLargeTitleTextStyle]: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    [_navActionTextStyle]: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    [_pickerTextStyle]: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    [_dateTimePickerTextStyle]: dart.finalFieldType(dart.nullable(text_style.TextStyle))
  }));
  text_theme._TextThemeDefaultsBuilder = class _TextThemeDefaultsBuilder extends core.Object {
    get labelColor() {
      return this[labelColor$];
    }
    set labelColor(value) {
      super.labelColor = value;
    }
    get inactiveGrayColor() {
      return this[inactiveGrayColor$];
    }
    set inactiveGrayColor(value) {
      super.inactiveGrayColor = value;
    }
    static _applyLabelColor(original, color) {
      if (original == null) dart.nullFailed(L0, 288, 47, "original");
      if (color == null) dart.nullFailed(L0, 288, 63, "color");
      return dart.equals(original.color, color) ? original : original.copyWith({color: color});
    }
    get textStyle() {
      return text_theme._TextThemeDefaultsBuilder._applyLabelColor(text_theme._kDefaultTextStyle, this.labelColor);
    }
    get tabLabelTextStyle() {
      return text_theme._TextThemeDefaultsBuilder._applyLabelColor(text_theme._kDefaultTabLabelTextStyle, this.inactiveGrayColor);
    }
    get navTitleTextStyle() {
      return text_theme._TextThemeDefaultsBuilder._applyLabelColor(text_theme._kDefaultMiddleTitleTextStyle, this.labelColor);
    }
    get navLargeTitleTextStyle() {
      return text_theme._TextThemeDefaultsBuilder._applyLabelColor(text_theme._kDefaultLargeTitleTextStyle, this.labelColor);
    }
    get pickerTextStyle() {
      return text_theme._TextThemeDefaultsBuilder._applyLabelColor(text_theme._kDefaultPickerTextStyle, this.labelColor);
    }
    get dateTimePickerTextStyle() {
      return text_theme._TextThemeDefaultsBuilder._applyLabelColor(text_theme._kDefaultDateTimePickerTextStyle, this.labelColor);
    }
    actionTextStyle(opts) {
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      return text_theme._kDefaultActionTextStyle.copyWith({color: primaryColor});
    }
    navActionTextStyle(opts) {
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      return this.actionTextStyle({primaryColor: primaryColor});
    }
    resolveFrom(context) {
      if (context == null) dart.nullFailed(L0, 304, 54, "context");
      let resolvedLabelColor = colors$.CupertinoDynamicColor.resolve(this.labelColor, context);
      let resolvedInactiveGray = colors$.CupertinoDynamicColor.resolve(this.inactiveGrayColor, context);
      return dart.equals(resolvedLabelColor, this.labelColor) && dart.equals(resolvedInactiveGray, colors$.CupertinoColors.inactiveGray) ? this : new text_theme._TextThemeDefaultsBuilder.new(resolvedLabelColor, resolvedInactiveGray);
    }
  };
  (text_theme._TextThemeDefaultsBuilder.new = function(labelColor, inactiveGrayColor) {
    if (labelColor == null) dart.nullFailed(L0, 280, 10, "labelColor");
    if (inactiveGrayColor == null) dart.nullFailed(L0, 281, 10, "inactiveGrayColor");
    this[labelColor$] = labelColor;
    this[inactiveGrayColor$] = inactiveGrayColor;
    if (!(labelColor != null)) dart.assertFailed(null, L0, 282, 14, "labelColor != null");
    if (!(inactiveGrayColor != null)) dart.assertFailed(null, L0, 283, 14, "inactiveGrayColor != null");
    ;
  }).prototype = text_theme._TextThemeDefaultsBuilder.prototype;
  dart.addTypeTests(text_theme._TextThemeDefaultsBuilder);
  dart.addTypeCaches(text_theme._TextThemeDefaultsBuilder);
  const labelColor$ = _TextThemeDefaultsBuilder_labelColor;
  const inactiveGrayColor$ = _TextThemeDefaultsBuilder_inactiveGrayColor;
  dart.setMethodSignature(text_theme._TextThemeDefaultsBuilder, () => ({
    __proto__: dart.getMethods(text_theme._TextThemeDefaultsBuilder.__proto__),
    actionTextStyle: dart.fnType(text_style.TextStyle, [], {primaryColor: dart.nullable(ui.Color)}, {}),
    navActionTextStyle: dart.fnType(text_style.TextStyle, [], {primaryColor: dart.nullable(ui.Color)}, {}),
    resolveFrom: dart.fnType(text_theme._TextThemeDefaultsBuilder, [framework.BuildContext])
  }));
  dart.setGetterSignature(text_theme._TextThemeDefaultsBuilder, () => ({
    __proto__: dart.getGetters(text_theme._TextThemeDefaultsBuilder.__proto__),
    textStyle: text_style.TextStyle,
    tabLabelTextStyle: text_style.TextStyle,
    navTitleTextStyle: text_style.TextStyle,
    navLargeTitleTextStyle: text_style.TextStyle,
    pickerTextStyle: text_style.TextStyle,
    dateTimePickerTextStyle: text_style.TextStyle
  }));
  dart.setLibraryUri(text_theme._TextThemeDefaultsBuilder, L1);
  dart.setFieldSignature(text_theme._TextThemeDefaultsBuilder, () => ({
    __proto__: dart.getFields(text_theme._TextThemeDefaultsBuilder.__proto__),
    labelColor: dart.finalFieldType(ui.Color),
    inactiveGrayColor: dart.finalFieldType(ui.Color)
  }));
  text_theme._resolveTextStyle = function _resolveTextStyle(style, context) {
    let t0;
    if (context == null) dart.nullFailed(L0, 104, 61, "context");
    t0 = style;
    return t0 == null ? null : t0.copyWith({color: colors$.CupertinoDynamicColor.maybeResolve(style.color, context), backgroundColor: colors$.CupertinoDynamicColor.maybeResolve(style.backgroundColor, context), decorationColor: colors$.CupertinoDynamicColor.maybeResolve(style.decorationColor, context)});
  };
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextDecoration__mask = dart.privateName(ui, "TextDecoration._mask");
  var C14;
  var TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  var TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  var TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  var TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  var TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  var TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  var TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  var TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  var TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var C13;
  var C15;
  var C16;
  var FontWeight_index = dart.privateName(ui, "FontWeight.index");
  var C18;
  var C17;
  var C20;
  var C19;
  var C22;
  var C21;
  var C23;
  dart.defineLazy(text_theme, {
    /*text_theme._kDefaultTextStyle*/get _kDefaultTextStyle() {
      return C13 || CT.C13;
    },
    /*text_theme._kDefaultActionTextStyle*/get _kDefaultActionTextStyle() {
      return C15 || CT.C15;
    },
    /*text_theme._kDefaultTabLabelTextStyle*/get _kDefaultTabLabelTextStyle() {
      return C16 || CT.C16;
    },
    /*text_theme._kDefaultMiddleTitleTextStyle*/get _kDefaultMiddleTitleTextStyle() {
      return C17 || CT.C17;
    },
    /*text_theme._kDefaultLargeTitleTextStyle*/get _kDefaultLargeTitleTextStyle() {
      return C19 || CT.C19;
    },
    /*text_theme._kDefaultPickerTextStyle*/get _kDefaultPickerTextStyle() {
      return C21 || CT.C21;
    },
    /*text_theme._kDefaultDateTimePickerTextStyle*/get _kDefaultDateTimePickerTextStyle() {
      return C23 || CT.C23;
    }
  }, false);
  const IconThemeData_Diagnosticable$36 = class IconThemeData_Diagnosticable extends icon_theme_data.IconThemeData {};
  (IconThemeData_Diagnosticable$36.new = function(opts) {
    IconThemeData_Diagnosticable$36.__proto__.new.call(this, opts);
  }).prototype = IconThemeData_Diagnosticable$36.prototype;
  (IconThemeData_Diagnosticable$36.fallback = function() {
    IconThemeData_Diagnosticable$36.__proto__.fallback.call(this);
  }).prototype = IconThemeData_Diagnosticable$36.prototype;
  dart.applyMixin(IconThemeData_Diagnosticable$36, diagnostics.Diagnosticable);
  icon_theme_data$.CupertinoIconThemeData = class CupertinoIconThemeData extends IconThemeData_Diagnosticable$36 {
    resolve(context) {
      if (context == null) dart.nullFailed(L2, 24, 38, "context");
      let resolvedColor = colors$.CupertinoDynamicColor.maybeResolve(this.color, context);
      return dart.equals(resolvedColor, this.color) ? this : this.copyWith({color: resolvedColor});
    }
    copyWith(opts) {
      let t0, t0$, t0$0;
      let color = opts && 'color' in opts ? opts.color : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let size = opts && 'size' in opts ? opts.size : null;
      return new icon_theme_data$.CupertinoIconThemeData.new({color: (t0 = color, t0 == null ? this.color : t0), opacity: (t0$ = opacity, t0$ == null ? this.opacity : t0$), size: (t0$0 = size, t0$0 == null ? this.size : t0$0)});
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L2, 41, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(colors$.createCupertinoColorProperty("color", this.color, {defaultValue: null}));
    }
  };
  (icon_theme_data$.CupertinoIconThemeData.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let size = opts && 'size' in opts ? opts.size : null;
    icon_theme_data$.CupertinoIconThemeData.__proto__.new.call(this, {color: color, opacity: opacity, size: size});
    ;
  }).prototype = icon_theme_data$.CupertinoIconThemeData.prototype;
  dart.addTypeTests(icon_theme_data$.CupertinoIconThemeData);
  dart.addTypeCaches(icon_theme_data$.CupertinoIconThemeData);
  dart.setMethodSignature(icon_theme_data$.CupertinoIconThemeData, () => ({
    __proto__: dart.getMethods(icon_theme_data$.CupertinoIconThemeData.__proto__),
    copyWith: dart.fnType(icon_theme_data$.CupertinoIconThemeData, [], {color: dart.nullable(ui.Color), opacity: dart.nullable(core.double), size: dart.nullable(core.double)}, {})
  }));
  dart.setLibraryUri(icon_theme_data$.CupertinoIconThemeData, L3);
  var NoDefaultCupertinoThemeData_scaffoldBackgroundColor = dart.privateName(theme$, "NoDefaultCupertinoThemeData.scaffoldBackgroundColor");
  var NoDefaultCupertinoThemeData_barBackgroundColor = dart.privateName(theme$, "NoDefaultCupertinoThemeData.barBackgroundColor");
  var NoDefaultCupertinoThemeData_textTheme = dart.privateName(theme$, "NoDefaultCupertinoThemeData.textTheme");
  var NoDefaultCupertinoThemeData_primaryContrastingColor = dart.privateName(theme$, "NoDefaultCupertinoThemeData.primaryContrastingColor");
  var NoDefaultCupertinoThemeData_primaryColor = dart.privateName(theme$, "NoDefaultCupertinoThemeData.primaryColor");
  var NoDefaultCupertinoThemeData_brightness = dart.privateName(theme$, "NoDefaultCupertinoThemeData.brightness");
  var _CupertinoTextThemeDefaults_inactiveGray = dart.privateName(theme$, "_CupertinoTextThemeDefaults.inactiveGray");
  var _CupertinoTextThemeDefaults_labelColor = dart.privateName(theme$, "_CupertinoTextThemeDefaults.labelColor");
  var C26;
  var _CupertinoThemeDefaults_textThemeDefaults = dart.privateName(theme$, "_CupertinoThemeDefaults.textThemeDefaults");
  var C28;
  var C29;
  var C27;
  var _CupertinoThemeDefaults_scaffoldBackgroundColor = dart.privateName(theme$, "_CupertinoThemeDefaults.scaffoldBackgroundColor");
  var C31;
  var C32;
  var C30;
  var _CupertinoThemeDefaults_barBackgroundColor = dart.privateName(theme$, "_CupertinoThemeDefaults.barBackgroundColor");
  var _CupertinoThemeDefaults_primaryContrastingColor = dart.privateName(theme$, "_CupertinoThemeDefaults.primaryContrastingColor");
  var _CupertinoThemeDefaults_primaryColor = dart.privateName(theme$, "_CupertinoThemeDefaults.primaryColor");
  var _CupertinoThemeDefaults_brightness = dart.privateName(theme$, "_CupertinoThemeDefaults.brightness");
  var C25;
  var CupertinoThemeData__defaults = dart.privateName(theme$, "CupertinoThemeData._defaults");
  var C24;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C35;
  var C36;
  var C34;
  var C33;
  var C39;
  var C40;
  var C38;
  var C37;
  var data$ = dart.privateName(theme$, "CupertinoTheme.data");
  var child$ = dart.privateName(theme$, "CupertinoTheme.child");
  theme$.CupertinoTheme = class CupertinoTheme extends framework.StatelessWidget {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    static of(context) {
      let t0, t0$;
      if (context == null) dart.nullFailed(L4, 69, 45, "context");
      let inheritedTheme = context.dependOnInheritedWidgetOfExactType(theme$._InheritedCupertinoTheme);
      return (t0$ = (t0 = inheritedTheme, t0 == null ? null : t0.theme.data), t0$ == null ? C24 || CT.C24 : t0$).resolveFrom(context);
    }
    static brightnessOf(context) {
      let t0, t0$;
      if (context == null) dart.nullFailed(L4, 89, 47, "context");
      let inheritedTheme = context.dependOnInheritedWidgetOfExactType(theme$._InheritedCupertinoTheme);
      t0$ = (t0 = inheritedTheme, t0 == null ? null : t0.theme.data.brightness);
      return t0$ == null ? media_query.MediaQuery.of(context).platformBrightness : t0$;
    }
    static maybeBrightnessOf(context) {
      let t0, t1, t0$;
      if (context == null) dart.nullFailed(L4, 109, 53, "context");
      let inheritedTheme = context.dependOnInheritedWidgetOfExactType(theme$._InheritedCupertinoTheme);
      t0$ = (t0 = inheritedTheme, t0 == null ? null : t0.theme.data.brightness);
      return t0$ == null ? (t1 = media_query.MediaQuery.maybeOf(context), t1 == null ? null : t1.platformBrightness) : t0$;
    }
    build(context) {
      if (context == null) dart.nullFailed(L4, 120, 29, "context");
      return new theme$._InheritedCupertinoTheme.new({theme: this, child: new icon_theme.IconTheme.new({data: new icon_theme_data$.CupertinoIconThemeData.new({color: this.data.primaryColor}), child: this.child, $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), $creationLocationd_0dea112b090073317d4: C37 || CT.C37});
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L4, 131, 56, "properties");
      super.debugFillProperties(properties);
      this.data.debugFillProperties(properties);
    }
  };
  (theme$.CupertinoTheme.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let data = opts && 'data' in opts ? opts.data : null;
    if (data == null) dart.nullFailed(L4, 54, 19, "data");
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L4, 55, 19, "child");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[data$] = data;
    this[child$] = child;
    if (!(child != null)) dart.assertFailed(null, L4, 56, 15, "child != null");
    if (!(data != null)) dart.assertFailed(null, L4, 57, 15, "data != null");
    theme$.CupertinoTheme.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = theme$.CupertinoTheme.prototype;
  dart.addTypeTests(theme$.CupertinoTheme);
  dart.addTypeCaches(theme$.CupertinoTheme);
  dart.setMethodSignature(theme$.CupertinoTheme, () => ({
    __proto__: dart.getMethods(theme$.CupertinoTheme.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(theme$.CupertinoTheme, L5);
  dart.setFieldSignature(theme$.CupertinoTheme, () => ({
    __proto__: dart.getFields(theme$.CupertinoTheme.__proto__),
    data: dart.finalFieldType(theme$.CupertinoThemeData),
    child: dart.finalFieldType(framework.Widget)
  }));
  var theme$0 = dart.privateName(theme$, "_InheritedCupertinoTheme.theme");
  theme$._InheritedCupertinoTheme = class _InheritedCupertinoTheme extends framework.InheritedWidget {
    get theme() {
      return this[theme$0];
    }
    set theme(value) {
      super.theme = value;
    }
    updateShouldNotify(old) {
      theme$._InheritedCupertinoTheme.as(old);
      if (old == null) dart.nullFailed(L4, 148, 52, "old");
      return !dart.equals(this.theme.data, old.theme.data);
    }
  };
  (theme$._InheritedCupertinoTheme.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let theme = opts && 'theme' in opts ? opts.theme : null;
    if (theme == null) dart.nullFailed(L4, 140, 19, "theme");
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L4, 141, 21, "child");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[theme$0] = theme;
    if (!(theme != null)) dart.assertFailed(null, L4, 142, 15, "theme != null");
    theme$._InheritedCupertinoTheme.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = theme$._InheritedCupertinoTheme.prototype;
  dart.addTypeTests(theme$._InheritedCupertinoTheme);
  dart.addTypeCaches(theme$._InheritedCupertinoTheme);
  dart.setMethodSignature(theme$._InheritedCupertinoTheme, () => ({
    __proto__: dart.getMethods(theme$._InheritedCupertinoTheme.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(theme$._InheritedCupertinoTheme, L5);
  dart.setFieldSignature(theme$._InheritedCupertinoTheme, () => ({
    __proto__: dart.getFields(theme$._InheritedCupertinoTheme.__proto__),
    theme: dart.finalFieldType(theme$.CupertinoTheme)
  }));
  var _defaults$0 = dart.privateName(theme$, "_defaults");
  theme$.NoDefaultCupertinoThemeData = class NoDefaultCupertinoThemeData extends core.Object {
    get brightness() {
      return this[brightness$];
    }
    set brightness(value) {
      super.brightness = value;
    }
    get primaryColor() {
      return this[primaryColor$];
    }
    set primaryColor(value) {
      super.primaryColor = value;
    }
    get primaryContrastingColor() {
      return this[primaryContrastingColor$];
    }
    set primaryContrastingColor(value) {
      super.primaryContrastingColor = value;
    }
    get textTheme() {
      return this[textTheme$];
    }
    set textTheme(value) {
      super.textTheme = value;
    }
    get barBackgroundColor() {
      return this[barBackgroundColor$];
    }
    set barBackgroundColor(value) {
      super.barBackgroundColor = value;
    }
    get scaffoldBackgroundColor() {
      return this[scaffoldBackgroundColor$];
    }
    set scaffoldBackgroundColor(value) {
      super.scaffoldBackgroundColor = value;
    }
    noDefault() {
      return this;
    }
    resolveFrom(context) {
      let t0;
      if (context == null) dart.nullFailed(L4, 409, 56, "context");
      function convertColor(color) {
        return colors$.CupertinoDynamicColor.maybeResolve(color, context);
      }
      dart.fn(convertColor, ColorNToColorN());
      return new theme$.NoDefaultCupertinoThemeData.new({brightness: this.brightness, primaryColor: convertColor(this.primaryColor), primaryContrastingColor: convertColor(this.primaryContrastingColor), textTheme: (t0 = this.textTheme, t0 == null ? null : t0.resolveFrom(context)), barBackgroundColor: convertColor(this.barBackgroundColor), scaffoldBackgroundColor: convertColor(this.scaffoldBackgroundColor)});
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let brightness = opts && 'brightness' in opts ? opts.brightness : null;
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      let primaryContrastingColor = opts && 'primaryContrastingColor' in opts ? opts.primaryContrastingColor : null;
      let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
      let barBackgroundColor = opts && 'barBackgroundColor' in opts ? opts.barBackgroundColor : null;
      let scaffoldBackgroundColor = opts && 'scaffoldBackgroundColor' in opts ? opts.scaffoldBackgroundColor : null;
      return new theme$.NoDefaultCupertinoThemeData.new({brightness: (t0 = brightness, t0 == null ? this.brightness : t0), primaryColor: (t0$ = primaryColor, t0$ == null ? this.primaryColor : t0$), primaryContrastingColor: (t0$0 = primaryContrastingColor, t0$0 == null ? this.primaryContrastingColor : t0$0), textTheme: (t0$1 = textTheme, t0$1 == null ? this.textTheme : t0$1), barBackgroundColor: (t0$2 = barBackgroundColor, t0$2 == null ? this.barBackgroundColor : t0$2), scaffoldBackgroundColor: (t0$3 = scaffoldBackgroundColor, t0$3 == null ? this.scaffoldBackgroundColor : t0$3)});
    }
  };
  (theme$.NoDefaultCupertinoThemeData.new = function(opts) {
    let brightness = opts && 'brightness' in opts ? opts.brightness : null;
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
    let primaryContrastingColor = opts && 'primaryContrastingColor' in opts ? opts.primaryContrastingColor : null;
    let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
    let barBackgroundColor = opts && 'barBackgroundColor' in opts ? opts.barBackgroundColor : null;
    let scaffoldBackgroundColor = opts && 'scaffoldBackgroundColor' in opts ? opts.scaffoldBackgroundColor : null;
    this[brightness$] = brightness;
    this[primaryColor$] = primaryColor;
    this[primaryContrastingColor$] = primaryContrastingColor;
    this[textTheme$] = textTheme;
    this[barBackgroundColor$] = barBackgroundColor;
    this[scaffoldBackgroundColor$] = scaffoldBackgroundColor;
    ;
  }).prototype = theme$.NoDefaultCupertinoThemeData.prototype;
  dart.addTypeTests(theme$.NoDefaultCupertinoThemeData);
  dart.addTypeCaches(theme$.NoDefaultCupertinoThemeData);
  const brightness$ = NoDefaultCupertinoThemeData_brightness;
  const primaryColor$ = NoDefaultCupertinoThemeData_primaryColor;
  const primaryContrastingColor$ = NoDefaultCupertinoThemeData_primaryContrastingColor;
  const textTheme$ = NoDefaultCupertinoThemeData_textTheme;
  const barBackgroundColor$ = NoDefaultCupertinoThemeData_barBackgroundColor;
  const scaffoldBackgroundColor$ = NoDefaultCupertinoThemeData_scaffoldBackgroundColor;
  dart.setMethodSignature(theme$.NoDefaultCupertinoThemeData, () => ({
    __proto__: dart.getMethods(theme$.NoDefaultCupertinoThemeData.__proto__),
    noDefault: dart.fnType(theme$.NoDefaultCupertinoThemeData, []),
    resolveFrom: dart.fnType(theme$.NoDefaultCupertinoThemeData, [framework.BuildContext]),
    copyWith: dart.fnType(theme$.NoDefaultCupertinoThemeData, [], {barBackgroundColor: dart.nullable(ui.Color), brightness: dart.nullable(ui.Brightness), primaryColor: dart.nullable(ui.Color), primaryContrastingColor: dart.nullable(ui.Color), scaffoldBackgroundColor: dart.nullable(ui.Color), textTheme: dart.nullable(text_theme.CupertinoTextThemeData)}, {})
  }));
  dart.setLibraryUri(theme$.NoDefaultCupertinoThemeData, L5);
  dart.setFieldSignature(theme$.NoDefaultCupertinoThemeData, () => ({
    __proto__: dart.getFields(theme$.NoDefaultCupertinoThemeData.__proto__),
    brightness: dart.finalFieldType(dart.nullable(ui.Brightness)),
    primaryColor: dart.finalFieldType(dart.nullable(ui.Color)),
    primaryContrastingColor: dart.finalFieldType(dart.nullable(ui.Color)),
    textTheme: dart.finalFieldType(dart.nullable(text_theme.CupertinoTextThemeData)),
    barBackgroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    scaffoldBackgroundColor: dart.finalFieldType(dart.nullable(ui.Color))
  }));
  const NoDefaultCupertinoThemeData_Diagnosticable$36 = class NoDefaultCupertinoThemeData_Diagnosticable extends theme$.NoDefaultCupertinoThemeData {};
  (NoDefaultCupertinoThemeData_Diagnosticable$36.new = function(opts) {
    NoDefaultCupertinoThemeData_Diagnosticable$36.__proto__.new.call(this, opts);
  }).prototype = NoDefaultCupertinoThemeData_Diagnosticable$36.prototype;
  dart.applyMixin(NoDefaultCupertinoThemeData_Diagnosticable$36, diagnostics.Diagnosticable);
  theme$.CupertinoThemeData = class CupertinoThemeData extends NoDefaultCupertinoThemeData_Diagnosticable$36 {
    get [_defaults$0]() {
      return this[_defaults$1];
    }
    set [_defaults$0](value) {
      super[_defaults$0] = value;
    }
    get primaryColor() {
      let t0;
      t0 = super.primaryColor;
      return t0 == null ? this[_defaults$0].primaryColor : t0;
    }
    get primaryContrastingColor() {
      let t0;
      t0 = super.primaryContrastingColor;
      return t0 == null ? this[_defaults$0].primaryContrastingColor : t0;
    }
    get textTheme() {
      let t0;
      t0 = super.textTheme;
      return t0 == null ? this[_defaults$0].textThemeDefaults.createDefaults({primaryColor: this.primaryColor}) : t0;
    }
    get barBackgroundColor() {
      let t0;
      t0 = super.barBackgroundColor;
      return t0 == null ? this[_defaults$0].barBackgroundColor : t0;
    }
    get scaffoldBackgroundColor() {
      let t0;
      t0 = super.scaffoldBackgroundColor;
      return t0 == null ? this[_defaults$0].scaffoldBackgroundColor : t0;
    }
    noDefault() {
      return new theme$.NoDefaultCupertinoThemeData.new({brightness: super.brightness, primaryColor: super.primaryColor, primaryContrastingColor: super.primaryContrastingColor, textTheme: super.textTheme, barBackgroundColor: super.barBackgroundColor, scaffoldBackgroundColor: super.scaffoldBackgroundColor});
    }
    resolveFrom(context) {
      let t0;
      if (context == null) dart.nullFailed(L4, 259, 47, "context");
      function convertColor(color) {
        return colors$.CupertinoDynamicColor.maybeResolve(color, context);
      }
      dart.fn(convertColor, ColorNToColorN());
      return new theme$.CupertinoThemeData._rawWithDefaults(this.brightness, convertColor(super.primaryColor), convertColor(super.primaryContrastingColor), (t0 = super.textTheme, t0 == null ? null : t0.resolveFrom(context)), convertColor(super.barBackgroundColor), convertColor(super.scaffoldBackgroundColor), this[_defaults$0].resolveFrom(context, super.textTheme == null));
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let brightness = opts && 'brightness' in opts ? opts.brightness : null;
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      let primaryContrastingColor = opts && 'primaryContrastingColor' in opts ? opts.primaryContrastingColor : null;
      let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
      let barBackgroundColor = opts && 'barBackgroundColor' in opts ? opts.barBackgroundColor : null;
      let scaffoldBackgroundColor = opts && 'scaffoldBackgroundColor' in opts ? opts.scaffoldBackgroundColor : null;
      return new theme$.CupertinoThemeData._rawWithDefaults((t0 = brightness, t0 == null ? super.brightness : t0), (t0$ = primaryColor, t0$ == null ? super.primaryColor : t0$), (t0$0 = primaryContrastingColor, t0$0 == null ? super.primaryContrastingColor : t0$0), (t0$1 = textTheme, t0$1 == null ? super.textTheme : t0$1), (t0$2 = barBackgroundColor, t0$2 == null ? super.barBackgroundColor : t0$2), (t0$3 = scaffoldBackgroundColor, t0$3 == null ? super.scaffoldBackgroundColor : t0$3), this[_defaults$0]);
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L4, 294, 56, "properties");
      super.debugFillProperties(properties);
      let defaultData = C24 || CT.C24;
      properties.add(new (EnumPropertyOfBrightness()).new("brightness", this.brightness, {defaultValue: null}));
      properties.add(colors$.createCupertinoColorProperty("primaryColor", this.primaryColor, {defaultValue: defaultData.primaryColor}));
      properties.add(colors$.createCupertinoColorProperty("primaryContrastingColor", this.primaryContrastingColor, {defaultValue: defaultData.primaryContrastingColor}));
      properties.add(colors$.createCupertinoColorProperty("barBackgroundColor", this.barBackgroundColor, {defaultValue: defaultData.barBackgroundColor}));
      properties.add(colors$.createCupertinoColorProperty("scaffoldBackgroundColor", this.scaffoldBackgroundColor, {defaultValue: defaultData.scaffoldBackgroundColor}));
      this.textTheme.debugFillProperties(properties);
    }
  };
  (theme$.CupertinoThemeData.new = function(opts) {
    let brightness = opts && 'brightness' in opts ? opts.brightness : null;
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
    let primaryContrastingColor = opts && 'primaryContrastingColor' in opts ? opts.primaryContrastingColor : null;
    let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
    let barBackgroundColor = opts && 'barBackgroundColor' in opts ? opts.barBackgroundColor : null;
    let scaffoldBackgroundColor = opts && 'scaffoldBackgroundColor' in opts ? opts.scaffoldBackgroundColor : null;
    theme$.CupertinoThemeData.raw.call(this, brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor);
  }).prototype = theme$.CupertinoThemeData.prototype;
  (theme$.CupertinoThemeData.raw = function(brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor) {
    theme$.CupertinoThemeData._rawWithDefaults.call(this, brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor, theme$._kDefaultTheme);
  }).prototype = theme$.CupertinoThemeData.prototype;
  (theme$.CupertinoThemeData._rawWithDefaults = function(brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor, _defaults) {
    if (_defaults == null) dart.nullFailed(L4, 217, 10, "_defaults");
    this[_defaults$1] = _defaults;
    theme$.CupertinoThemeData.__proto__.new.call(this, {brightness: brightness, primaryColor: primaryColor, primaryContrastingColor: primaryContrastingColor, textTheme: textTheme, barBackgroundColor: barBackgroundColor, scaffoldBackgroundColor: scaffoldBackgroundColor});
    ;
  }).prototype = theme$.CupertinoThemeData.prototype;
  dart.addTypeTests(theme$.CupertinoThemeData);
  dart.addTypeCaches(theme$.CupertinoThemeData);
  const _defaults$1 = CupertinoThemeData__defaults;
  dart.setMethodSignature(theme$.CupertinoThemeData, () => ({
    __proto__: dart.getMethods(theme$.CupertinoThemeData.__proto__),
    resolveFrom: dart.fnType(theme$.CupertinoThemeData, [framework.BuildContext]),
    copyWith: dart.fnType(theme$.CupertinoThemeData, [], {barBackgroundColor: dart.nullable(ui.Color), brightness: dart.nullable(ui.Brightness), primaryColor: dart.nullable(ui.Color), primaryContrastingColor: dart.nullable(ui.Color), scaffoldBackgroundColor: dart.nullable(ui.Color), textTheme: dart.nullable(text_theme.CupertinoTextThemeData)}, {})
  }));
  dart.setGetterSignature(theme$.CupertinoThemeData, () => ({
    __proto__: dart.getGetters(theme$.CupertinoThemeData.__proto__),
    primaryColor: ui.Color,
    primaryContrastingColor: ui.Color,
    textTheme: text_theme.CupertinoTextThemeData,
    barBackgroundColor: ui.Color,
    scaffoldBackgroundColor: ui.Color
  }));
  dart.setLibraryUri(theme$.CupertinoThemeData, L5);
  dart.setFieldSignature(theme$.CupertinoThemeData, () => ({
    __proto__: dart.getFields(theme$.CupertinoThemeData.__proto__),
    [_defaults$0]: dart.finalFieldType(theme$._CupertinoThemeDefaults)
  }));
  theme$._CupertinoThemeDefaults = class _CupertinoThemeDefaults extends core.Object {
    get brightness() {
      return this[brightness$0];
    }
    set brightness(value) {
      super.brightness = value;
    }
    get primaryColor() {
      return this[primaryColor$0];
    }
    set primaryColor(value) {
      super.primaryColor = value;
    }
    get primaryContrastingColor() {
      return this[primaryContrastingColor$0];
    }
    set primaryContrastingColor(value) {
      super.primaryContrastingColor = value;
    }
    get barBackgroundColor() {
      return this[barBackgroundColor$0];
    }
    set barBackgroundColor(value) {
      super.barBackgroundColor = value;
    }
    get scaffoldBackgroundColor() {
      return this[scaffoldBackgroundColor$0];
    }
    set scaffoldBackgroundColor(value) {
      super.scaffoldBackgroundColor = value;
    }
    get textThemeDefaults() {
      return this[textThemeDefaults$];
    }
    set textThemeDefaults(value) {
      super.textThemeDefaults = value;
    }
    resolveFrom(context, resolveTextTheme) {
      if (context == null) dart.nullFailed(L4, 465, 52, "context");
      if (resolveTextTheme == null) dart.nullFailed(L4, 465, 66, "resolveTextTheme");
      function convertColor(color) {
        if (color == null) dart.nullFailed(L4, 466, 30, "color");
        return colors$.CupertinoDynamicColor.resolve(color, context);
      }
      dart.fn(convertColor, ColorToColor());
      return new theme$._CupertinoThemeDefaults.new(this.brightness, convertColor(this.primaryColor), convertColor(this.primaryContrastingColor), convertColor(this.barBackgroundColor), convertColor(this.scaffoldBackgroundColor), dart.test(resolveTextTheme) ? this.textThemeDefaults.resolveFrom(context) : this.textThemeDefaults);
    }
  };
  (theme$._CupertinoThemeDefaults.new = function(brightness, primaryColor, primaryContrastingColor, barBackgroundColor, scaffoldBackgroundColor, textThemeDefaults) {
    if (primaryColor == null) dart.nullFailed(L4, 451, 10, "primaryColor");
    if (primaryContrastingColor == null) dart.nullFailed(L4, 452, 10, "primaryContrastingColor");
    if (barBackgroundColor == null) dart.nullFailed(L4, 453, 10, "barBackgroundColor");
    if (scaffoldBackgroundColor == null) dart.nullFailed(L4, 454, 10, "scaffoldBackgroundColor");
    if (textThemeDefaults == null) dart.nullFailed(L4, 455, 10, "textThemeDefaults");
    this[brightness$0] = brightness;
    this[primaryColor$0] = primaryColor;
    this[primaryContrastingColor$0] = primaryContrastingColor;
    this[barBackgroundColor$0] = barBackgroundColor;
    this[scaffoldBackgroundColor$0] = scaffoldBackgroundColor;
    this[textThemeDefaults$] = textThemeDefaults;
    ;
  }).prototype = theme$._CupertinoThemeDefaults.prototype;
  dart.addTypeTests(theme$._CupertinoThemeDefaults);
  dart.addTypeCaches(theme$._CupertinoThemeDefaults);
  const brightness$0 = _CupertinoThemeDefaults_brightness;
  const primaryColor$0 = _CupertinoThemeDefaults_primaryColor;
  const primaryContrastingColor$0 = _CupertinoThemeDefaults_primaryContrastingColor;
  const barBackgroundColor$0 = _CupertinoThemeDefaults_barBackgroundColor;
  const scaffoldBackgroundColor$0 = _CupertinoThemeDefaults_scaffoldBackgroundColor;
  const textThemeDefaults$ = _CupertinoThemeDefaults_textThemeDefaults;
  dart.setMethodSignature(theme$._CupertinoThemeDefaults, () => ({
    __proto__: dart.getMethods(theme$._CupertinoThemeDefaults.__proto__),
    resolveFrom: dart.fnType(theme$._CupertinoThemeDefaults, [framework.BuildContext, core.bool])
  }));
  dart.setLibraryUri(theme$._CupertinoThemeDefaults, L5);
  dart.setFieldSignature(theme$._CupertinoThemeDefaults, () => ({
    __proto__: dart.getFields(theme$._CupertinoThemeDefaults.__proto__),
    brightness: dart.finalFieldType(dart.nullable(ui.Brightness)),
    primaryColor: dart.finalFieldType(ui.Color),
    primaryContrastingColor: dart.finalFieldType(ui.Color),
    barBackgroundColor: dart.finalFieldType(ui.Color),
    scaffoldBackgroundColor: dart.finalFieldType(ui.Color),
    textThemeDefaults: dart.finalFieldType(theme$._CupertinoTextThemeDefaults)
  }));
  theme$._CupertinoTextThemeDefaults = class _CupertinoTextThemeDefaults extends core.Object {
    get labelColor() {
      return this[labelColor$0];
    }
    set labelColor(value) {
      super.labelColor = value;
    }
    get inactiveGray() {
      return this[inactiveGray$];
    }
    set inactiveGray(value) {
      super.inactiveGray = value;
    }
    resolveFrom(context) {
      if (context == null) dart.nullFailed(L4, 489, 56, "context");
      return new theme$._CupertinoTextThemeDefaults.new(colors$.CupertinoDynamicColor.resolve(this.labelColor, context), colors$.CupertinoDynamicColor.resolve(this.inactiveGray, context));
    }
    createDefaults(opts) {
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      if (primaryColor == null) dart.nullFailed(L4, 496, 58, "primaryColor");
      if (!(primaryColor != null)) dart.assertFailed(null, L4, 497, 12, "primaryColor != null");
      return new theme$._DefaultCupertinoTextThemeData.new({primaryColor: primaryColor, labelColor: this.labelColor, inactiveGray: this.inactiveGray});
    }
  };
  (theme$._CupertinoTextThemeDefaults.new = function(labelColor, inactiveGray) {
    if (labelColor == null) dart.nullFailed(L4, 482, 10, "labelColor");
    if (inactiveGray == null) dart.nullFailed(L4, 483, 10, "inactiveGray");
    this[labelColor$0] = labelColor;
    this[inactiveGray$] = inactiveGray;
    ;
  }).prototype = theme$._CupertinoTextThemeDefaults.prototype;
  dart.addTypeTests(theme$._CupertinoTextThemeDefaults);
  dart.addTypeCaches(theme$._CupertinoTextThemeDefaults);
  const labelColor$0 = _CupertinoTextThemeDefaults_labelColor;
  const inactiveGray$ = _CupertinoTextThemeDefaults_inactiveGray;
  dart.setMethodSignature(theme$._CupertinoTextThemeDefaults, () => ({
    __proto__: dart.getMethods(theme$._CupertinoTextThemeDefaults.__proto__),
    resolveFrom: dart.fnType(theme$._CupertinoTextThemeDefaults, [framework.BuildContext]),
    createDefaults: dart.fnType(text_theme.CupertinoTextThemeData, [], {}, {primaryColor: ui.Color})
  }));
  dart.setLibraryUri(theme$._CupertinoTextThemeDefaults, L5);
  dart.setFieldSignature(theme$._CupertinoTextThemeDefaults, () => ({
    __proto__: dart.getFields(theme$._CupertinoTextThemeDefaults.__proto__),
    labelColor: dart.finalFieldType(ui.Color),
    inactiveGray: dart.finalFieldType(ui.Color)
  }));
  var labelColor$1 = dart.privateName(theme$, "_DefaultCupertinoTextThemeData.labelColor");
  var inactiveGray$0 = dart.privateName(theme$, "_DefaultCupertinoTextThemeData.inactiveGray");
  theme$._DefaultCupertinoTextThemeData = class _DefaultCupertinoTextThemeData extends text_theme.CupertinoTextThemeData {
    get labelColor() {
      return this[labelColor$1];
    }
    set labelColor(value) {
      super.labelColor = value;
    }
    get inactiveGray() {
      return this[inactiveGray$0];
    }
    set inactiveGray(value) {
      super.inactiveGray = value;
    }
    get textStyle() {
      return super.textStyle.copyWith({color: this.labelColor});
    }
    get tabLabelTextStyle() {
      return super.tabLabelTextStyle.copyWith({color: this.inactiveGray});
    }
    get navTitleTextStyle() {
      return super.navTitleTextStyle.copyWith({color: this.labelColor});
    }
    get navLargeTitleTextStyle() {
      return super.navLargeTitleTextStyle.copyWith({color: this.labelColor});
    }
    get pickerTextStyle() {
      return super.pickerTextStyle.copyWith({color: this.labelColor});
    }
    get dateTimePickerTextStyle() {
      return super.dateTimePickerTextStyle.copyWith({color: this.labelColor});
    }
  };
  (theme$._DefaultCupertinoTextThemeData.new = function(opts) {
    let labelColor = opts && 'labelColor' in opts ? opts.labelColor : null;
    if (labelColor == null) dart.nullFailed(L4, 511, 19, "labelColor");
    let inactiveGray = opts && 'inactiveGray' in opts ? opts.inactiveGray : null;
    if (inactiveGray == null) dart.nullFailed(L4, 512, 19, "inactiveGray");
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
    if (primaryColor == null) dart.nullFailed(L4, 513, 20, "primaryColor");
    this[labelColor$1] = labelColor;
    this[inactiveGray$0] = inactiveGray;
    if (!(labelColor != null)) dart.assertFailed(null, L4, 514, 15, "labelColor != null");
    if (!(inactiveGray != null)) dart.assertFailed(null, L4, 515, 15, "inactiveGray != null");
    if (!(primaryColor != null)) dart.assertFailed(null, L4, 516, 15, "primaryColor != null");
    theme$._DefaultCupertinoTextThemeData.__proto__.new.call(this, {primaryColor: primaryColor});
    ;
  }).prototype = theme$._DefaultCupertinoTextThemeData.prototype;
  dart.addTypeTests(theme$._DefaultCupertinoTextThemeData);
  dart.addTypeCaches(theme$._DefaultCupertinoTextThemeData);
  dart.setLibraryUri(theme$._DefaultCupertinoTextThemeData, L5);
  dart.setFieldSignature(theme$._DefaultCupertinoTextThemeData, () => ({
    __proto__: dart.getFields(theme$._DefaultCupertinoTextThemeData.__proto__),
    labelColor: dart.finalFieldType(ui.Color),
    inactiveGray: dart.finalFieldType(ui.Color)
  }));
  dart.defineLazy(theme$, {
    /*theme$._kDefaultTheme*/get _kDefaultTheme() {
      return C25 || CT.C25;
    }
  }, false);
  var C42;
  var C43;
  var C44;
  var C45;
  var C41;
  var C47;
  var C48;
  var C49;
  var C50;
  var C46;
  var C51;
  var C52;
  var C53;
  var C55;
  var C56;
  var C57;
  var C58;
  var C54;
  var C60;
  var C61;
  var C62;
  var C63;
  var C59;
  var C65;
  var C66;
  var C67;
  var C68;
  var C64;
  var C70;
  var C71;
  var C72;
  var C73;
  var C69;
  var C75;
  var C76;
  var C77;
  var C78;
  var C74;
  var C80;
  var C81;
  var C82;
  var C83;
  var C79;
  var C85;
  var C86;
  var C87;
  var C84;
  var C89;
  var C90;
  var C88;
  var C92;
  var C93;
  var C94;
  var C91;
  var C96;
  var C97;
  var C98;
  var C99;
  var C95;
  var C101;
  var C102;
  var C103;
  var C100;
  var C105;
  var C106;
  var C104;
  var C108;
  var C109;
  var C110;
  var C111;
  var C107;
  var C113;
  var C114;
  var C115;
  var C116;
  var C112;
  var C118;
  var C119;
  var C120;
  var C121;
  var C117;
  var C123;
  var C124;
  var C125;
  var C126;
  var C122;
  var C128;
  var C129;
  var C130;
  var C131;
  var C127;
  var C133;
  var C134;
  var C135;
  var C136;
  var C132;
  var C138;
  var C139;
  var C140;
  var C141;
  var C137;
  var C142;
  var C143;
  var C144;
  var C145;
  var C146;
  var C147;
  var C149;
  var C150;
  var C151;
  var C152;
  var C148;
  var C154;
  var C155;
  var C153;
  var C157;
  var C156;
  colors$.CupertinoColors = class CupertinoColors extends core.Object {};
  (colors$.CupertinoColors.__ = function() {
    ;
  }).prototype = colors$.CupertinoColors.prototype;
  dart.addTypeTests(colors$.CupertinoColors);
  dart.addTypeCaches(colors$.CupertinoColors);
  dart.setLibraryUri(colors$.CupertinoColors, L6);
  dart.defineLazy(colors$.CupertinoColors, {
    /*colors$.CupertinoColors.activeBlue*/get activeBlue() {
      return C0 || CT.C0;
    },
    /*colors$.CupertinoColors.activeGreen*/get activeGreen() {
      return C41 || CT.C41;
    },
    /*colors$.CupertinoColors.activeOrange*/get activeOrange() {
      return C46 || CT.C46;
    },
    /*colors$.CupertinoColors.white*/get white() {
      return C10 || CT.C10;
    },
    /*colors$.CupertinoColors.black*/get black() {
      return C11 || CT.C11;
    },
    /*colors$.CupertinoColors.lightBackgroundGray*/get lightBackgroundGray() {
      return C51 || CT.C51;
    },
    /*colors$.CupertinoColors.extraLightBackgroundGray*/get extraLightBackgroundGray() {
      return C52 || CT.C52;
    },
    /*colors$.CupertinoColors.darkBackgroundGray*/get darkBackgroundGray() {
      return C53 || CT.C53;
    },
    /*colors$.CupertinoColors.inactiveGray*/get inactiveGray() {
      return C6 || CT.C6;
    },
    /*colors$.CupertinoColors.destructiveRed*/get destructiveRed() {
      return C54 || CT.C54;
    },
    /*colors$.CupertinoColors.systemBlue*/get systemBlue() {
      return C0 || CT.C0;
    },
    /*colors$.CupertinoColors.systemGreen*/get systemGreen() {
      return C41 || CT.C41;
    },
    /*colors$.CupertinoColors.systemIndigo*/get systemIndigo() {
      return C59 || CT.C59;
    },
    /*colors$.CupertinoColors.systemOrange*/get systemOrange() {
      return C46 || CT.C46;
    },
    /*colors$.CupertinoColors.systemPink*/get systemPink() {
      return C64 || CT.C64;
    },
    /*colors$.CupertinoColors.systemPurple*/get systemPurple() {
      return C69 || CT.C69;
    },
    /*colors$.CupertinoColors.systemRed*/get systemRed() {
      return C54 || CT.C54;
    },
    /*colors$.CupertinoColors.systemTeal*/get systemTeal() {
      return C74 || CT.C74;
    },
    /*colors$.CupertinoColors.systemYellow*/get systemYellow() {
      return C79 || CT.C79;
    },
    /*colors$.CupertinoColors.systemGrey*/get systemGrey() {
      return C84 || CT.C84;
    },
    /*colors$.CupertinoColors.systemGrey2*/get systemGrey2() {
      return C88 || CT.C88;
    },
    /*colors$.CupertinoColors.systemGrey3*/get systemGrey3() {
      return C91 || CT.C91;
    },
    /*colors$.CupertinoColors.systemGrey4*/get systemGrey4() {
      return C95 || CT.C95;
    },
    /*colors$.CupertinoColors.systemGrey5*/get systemGrey5() {
      return C100 || CT.C100;
    },
    /*colors$.CupertinoColors.systemGrey6*/get systemGrey6() {
      return C104 || CT.C104;
    },
    /*colors$.CupertinoColors.label*/get label() {
      return C9 || CT.C9;
    },
    /*colors$.CupertinoColors.secondaryLabel*/get secondaryLabel() {
      return C107 || CT.C107;
    },
    /*colors$.CupertinoColors.tertiaryLabel*/get tertiaryLabel() {
      return C112 || CT.C112;
    },
    /*colors$.CupertinoColors.quaternaryLabel*/get quaternaryLabel() {
      return C117 || CT.C117;
    },
    /*colors$.CupertinoColors.systemFill*/get systemFill() {
      return C122 || CT.C122;
    },
    /*colors$.CupertinoColors.secondarySystemFill*/get secondarySystemFill() {
      return C127 || CT.C127;
    },
    /*colors$.CupertinoColors.tertiarySystemFill*/get tertiarySystemFill() {
      return C132 || CT.C132;
    },
    /*colors$.CupertinoColors.quaternarySystemFill*/get quaternarySystemFill() {
      return C137 || CT.C137;
    },
    /*colors$.CupertinoColors.placeholderText*/get placeholderText() {
      return C142 || CT.C142;
    },
    /*colors$.CupertinoColors.systemBackground*/get systemBackground() {
      return C27 || CT.C27;
    },
    /*colors$.CupertinoColors.secondarySystemBackground*/get secondarySystemBackground() {
      return C143 || CT.C143;
    },
    /*colors$.CupertinoColors.tertiarySystemBackground*/get tertiarySystemBackground() {
      return C144 || CT.C144;
    },
    /*colors$.CupertinoColors.systemGroupedBackground*/get systemGroupedBackground() {
      return C145 || CT.C145;
    },
    /*colors$.CupertinoColors.secondarySystemGroupedBackground*/get secondarySystemGroupedBackground() {
      return C146 || CT.C146;
    },
    /*colors$.CupertinoColors.tertiarySystemGroupedBackground*/get tertiarySystemGroupedBackground() {
      return C147 || CT.C147;
    },
    /*colors$.CupertinoColors.separator*/get separator() {
      return C148 || CT.C148;
    },
    /*colors$.CupertinoColors.opaqueSeparator*/get opaqueSeparator() {
      return C153 || CT.C153;
    },
    /*colors$.CupertinoColors.link*/get link() {
      return C156 || CT.C156;
    }
  }, false);
  var _effectiveColor = dart.privateName(colors$, "_effectiveColor");
  var _debugLabel = dart.privateName(colors$, "_debugLabel");
  var _debugResolveContext = dart.privateName(colors$, "_debugResolveContext");
  var _isPlatformBrightnessDependent = dart.privateName(colors$, "_isPlatformBrightnessDependent");
  var _isHighContrastDependent = dart.privateName(colors$, "_isHighContrastDependent");
  var _isInterfaceElevationDependent = dart.privateName(colors$, "_isInterfaceElevationDependent");
  var _name = dart.privateName(interface_level, "_name");
  var C158;
  var C159;
  var _name$ = dart.privateName(ui, "_name");
  var C160;
  var C161;
  var _name$0 = dart.privateName(diagnostics, "_name");
  var C162;
  const Color_Diagnosticable$36 = class Color_Diagnosticable extends ui.Color {};
  (Color_Diagnosticable$36.new = function(value) {
    Color_Diagnosticable$36.__proto__.new.call(this, value);
  }).prototype = Color_Diagnosticable$36.prototype;
  (Color_Diagnosticable$36.fromARGB = function(a, r, g, b) {
    Color_Diagnosticable$36.__proto__.fromARGB.call(this, a, r, g, b);
  }).prototype = Color_Diagnosticable$36.prototype;
  (Color_Diagnosticable$36.fromRGBO = function(r, g, b, opacity) {
    Color_Diagnosticable$36.__proto__.fromRGBO.call(this, r, g, b, opacity);
  }).prototype = Color_Diagnosticable$36.prototype;
  dart.applyMixin(Color_Diagnosticable$36, diagnostics.Diagnosticable);
  colors$.CupertinoDynamicColor = class CupertinoDynamicColor extends Color_Diagnosticable$36 {
    get [_effectiveColor]() {
      return this[_effectiveColor$];
    }
    set [_effectiveColor](value) {
      super[_effectiveColor] = value;
    }
    get [_debugLabel]() {
      return this[_debugLabel$];
    }
    set [_debugLabel](value) {
      super[_debugLabel] = value;
    }
    get [_debugResolveContext]() {
      return this[_debugResolveContext$];
    }
    set [_debugResolveContext](value) {
      super[_debugResolveContext] = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get darkColor() {
      return this[darkColor$];
    }
    set darkColor(value) {
      super.darkColor = value;
    }
    get highContrastColor() {
      return this[highContrastColor$];
    }
    set highContrastColor(value) {
      super.highContrastColor = value;
    }
    get darkHighContrastColor() {
      return this[darkHighContrastColor$];
    }
    set darkHighContrastColor(value) {
      super.darkHighContrastColor = value;
    }
    get elevatedColor() {
      return this[elevatedColor$];
    }
    set elevatedColor(value) {
      super.elevatedColor = value;
    }
    get darkElevatedColor() {
      return this[darkElevatedColor$];
    }
    set darkElevatedColor(value) {
      super.darkElevatedColor = value;
    }
    get highContrastElevatedColor() {
      return this[highContrastElevatedColor$];
    }
    set highContrastElevatedColor(value) {
      super.highContrastElevatedColor = value;
    }
    get darkHighContrastElevatedColor() {
      return this[darkHighContrastElevatedColor$];
    }
    set darkHighContrastElevatedColor(value) {
      super.darkHighContrastElevatedColor = value;
    }
    get value() {
      return this[_effectiveColor].value;
    }
    static resolve(resolvable, context) {
      if (resolvable == null) dart.nullFailed(L7, 891, 30, "resolvable");
      if (context == null) dart.nullFailed(L7, 891, 55, "context");
      if (!(context != null)) dart.assertFailed(null, L7, 892, 12, "context != null");
      return colors$.CupertinoDynamicColor.is(resolvable) ? resolvable.resolveFrom(context) : resolvable;
    }
    static maybeResolve(resolvable, context) {
      if (context == null) dart.nullFailed(L7, 911, 62, "context");
      if (resolvable == null) return null;
      if (!(context != null)) dart.assertFailed(null, L7, 914, 12, "context != null");
      return colors$.CupertinoDynamicColor.is(resolvable) ? resolvable.resolveFrom(context) : resolvable;
    }
    get [_isPlatformBrightnessDependent]() {
      return !dart.equals(this.color, this.darkColor) || !dart.equals(this.elevatedColor, this.darkElevatedColor) || !dart.equals(this.highContrastColor, this.darkHighContrastColor) || !dart.equals(this.highContrastElevatedColor, this.darkHighContrastElevatedColor);
    }
    get [_isHighContrastDependent]() {
      return !dart.equals(this.color, this.highContrastColor) || !dart.equals(this.darkColor, this.darkHighContrastColor) || !dart.equals(this.elevatedColor, this.highContrastElevatedColor) || !dart.equals(this.darkElevatedColor, this.darkHighContrastElevatedColor);
    }
    get [_isInterfaceElevationDependent]() {
      return !dart.equals(this.color, this.elevatedColor) || !dart.equals(this.darkColor, this.darkElevatedColor) || !dart.equals(this.highContrastColor, this.highContrastElevatedColor) || !dart.equals(this.darkHighContrastColor, this.darkHighContrastElevatedColor);
    }
    resolveFrom(context) {
      let t0, t0$, t0$0, t0$1;
      if (context == null) dart.nullFailed(L7, 970, 50, "context");
      let brightness = ui.Brightness.light;
      if (dart.test(this[_isPlatformBrightnessDependent])) {
        brightness = (t0 = theme$.CupertinoTheme.maybeBrightnessOf(context), t0 == null ? ui.Brightness.light : t0);
      }
      let isHighContrastEnabled = false;
      if (dart.test(this[_isHighContrastDependent])) {
        isHighContrastEnabled = (t0$0 = (t0$ = media_query.MediaQuery.maybeOf(context), t0$ == null ? null : t0$.highContrast), t0$0 == null ? false : t0$0);
      }
      let level = dart.test(this[_isInterfaceElevationDependent]) ? (t0$1 = interface_level.CupertinoUserInterfaceLevel.maybeOf(context), t0$1 == null ? interface_level.CupertinoUserInterfaceLevelData.base : t0$1) : interface_level.CupertinoUserInterfaceLevelData.base;
      let resolved = null;
      switch (brightness) {
        case C160 || CT.C160:
        {
          switch (level) {
            case C158 || CT.C158:
            {
              resolved = dart.test(isHighContrastEnabled) ? this.highContrastColor : this.color;
              break;
            }
            case C159 || CT.C159:
            {
              resolved = dart.test(isHighContrastEnabled) ? this.highContrastElevatedColor : this.elevatedColor;
              break;
            }
            default:
            {
              dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
            }
          }
          break;
        }
        case C161 || CT.C161:
        {
          switch (level) {
            case C158 || CT.C158:
            {
              resolved = dart.test(isHighContrastEnabled) ? this.darkHighContrastColor : this.darkColor;
              break;
            }
            case C159 || CT.C159:
            {
              resolved = dart.test(isHighContrastEnabled) ? this.darkHighContrastElevatedColor : this.darkElevatedColor;
              break;
            }
            default:
            {
              dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
            }
          }
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      let _debugContext = null;
      if (!dart.test(dart.fn(() => {
        _debugContext = framework.Element.as(context);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L7, 1008, 12, "() {\n      _debugContext = context as Element;\n      return true;\n    }()");
      return new colors$.CupertinoDynamicColor.__(resolved, this.color, this.darkColor, this.highContrastColor, this.darkHighContrastColor, this.elevatedColor, this.darkElevatedColor, this.highContrastElevatedColor, this.darkHighContrastElevatedColor, _debugContext, this[_debugLabel]);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return colors$.CupertinoDynamicColor.is(other) && other.value == this.value && dart.equals(other.color, this.color) && dart.equals(other.darkColor, this.darkColor) && dart.equals(other.highContrastColor, this.highContrastColor) && dart.equals(other.darkHighContrastColor, this.darkHighContrastColor) && dart.equals(other.elevatedColor, this.elevatedColor) && dart.equals(other.darkElevatedColor, this.darkElevatedColor) && dart.equals(other.highContrastElevatedColor, this.highContrastElevatedColor) && dart.equals(other.darkHighContrastElevatedColor, this.darkHighContrastElevatedColor);
    }
    get hashCode() {
      return ui.hashValues(this.value, this.color, this.darkColor, this.highContrastColor, this.elevatedColor, this.darkElevatedColor, this.darkHighContrastColor, this.darkHighContrastElevatedColor, this.highContrastElevatedColor);
    }
    toString(opts) {
      let t1, t1$, t1$0;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C162 || CT.C162;
      if (minLevel == null) dart.nullFailed(L7, 1061, 37, "minLevel");
      const toString = (name, color) => {
        if (name == null) dart.nullFailed(L7, 1062, 28, "name");
        if (color == null) dart.nullFailed(L7, 1062, 40, "color");
        let marker = dart.equals(color, this[_effectiveColor]) ? "*" : "";
        return marker + dart.str(name) + " = " + dart.str(color) + marker;
      };
      dart.fn(toString, StringAndColorToString());
      let xs = (() => {
        let t0 = JSArrayOfString().of([toString("color", this.color)]);
        if (dart.test(this[_isPlatformBrightnessDependent])) t0.push(toString("darkColor", this.darkColor));
        if (dart.test(this[_isHighContrastDependent])) t0.push(toString("highContrastColor", this.highContrastColor));
        if (dart.test(this[_isPlatformBrightnessDependent]) && dart.test(this[_isHighContrastDependent])) t0.push(toString("darkHighContrastColor", this.darkHighContrastColor));
        if (dart.test(this[_isInterfaceElevationDependent])) t0.push(toString("elevatedColor", this.elevatedColor));
        if (dart.test(this[_isPlatformBrightnessDependent]) && dart.test(this[_isInterfaceElevationDependent])) t0.push(toString("darkElevatedColor", this.darkElevatedColor));
        if (dart.test(this[_isHighContrastDependent]) && dart.test(this[_isInterfaceElevationDependent])) t0.push(toString("highContrastElevatedColor", this.highContrastElevatedColor));
        if (dart.test(this[_isPlatformBrightnessDependent]) && dart.test(this[_isHighContrastDependent]) && dart.test(this[_isInterfaceElevationDependent])) t0.push(toString("darkHighContrastElevatedColor", this.darkHighContrastElevatedColor));
        return t0;
      })();
      return dart.str((t1 = this[_debugLabel], t1 == null ? object.objectRuntimeType(this, "CupertinoDynamicColor") : t1)) + "(" + dart.str(xs[$join](", ")) + ", resolved by: " + dart.str((t1$0 = (t1$ = this[_debugResolveContext], t1$ == null ? null : t1$.widget), t1$0 == null ? "UNRESOLVED" : t1$0)) + ")";
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L7, 1081, 56, "properties");
      super.debugFillProperties(properties);
      if (this[_debugLabel] != null) properties.add(new diagnostics.MessageProperty.new("debugLabel", dart.nullCheck(this[_debugLabel])));
      properties.add(colors$.createCupertinoColorProperty("color", this.color));
      if (dart.test(this[_isPlatformBrightnessDependent])) properties.add(colors$.createCupertinoColorProperty("darkColor", this.darkColor));
      if (dart.test(this[_isHighContrastDependent])) properties.add(colors$.createCupertinoColorProperty("highContrastColor", this.highContrastColor));
      if (dart.test(this[_isPlatformBrightnessDependent]) && dart.test(this[_isHighContrastDependent])) properties.add(colors$.createCupertinoColorProperty("darkHighContrastColor", this.darkHighContrastColor));
      if (dart.test(this[_isInterfaceElevationDependent])) properties.add(colors$.createCupertinoColorProperty("elevatedColor", this.elevatedColor));
      if (dart.test(this[_isPlatformBrightnessDependent]) && dart.test(this[_isInterfaceElevationDependent])) properties.add(colors$.createCupertinoColorProperty("darkElevatedColor", this.darkElevatedColor));
      if (dart.test(this[_isHighContrastDependent]) && dart.test(this[_isInterfaceElevationDependent])) properties.add(colors$.createCupertinoColorProperty("highContrastElevatedColor", this.highContrastElevatedColor));
      if (dart.test(this[_isPlatformBrightnessDependent]) && dart.test(this[_isHighContrastDependent]) && dart.test(this[_isInterfaceElevationDependent])) properties.add(colors$.createCupertinoColorProperty("darkHighContrastElevatedColor", this.darkHighContrastElevatedColor));
      if (this[_debugResolveContext] != null) properties.add(new (DiagnosticsPropertyOfElement()).new("last resolved", this[_debugResolveContext]));
    }
  };
  (colors$.CupertinoDynamicColor.new = function(opts) {
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let color = opts && 'color' in opts ? opts.color : null;
    if (color == null) dart.nullFailed(L7, 685, 20, "color");
    let darkColor = opts && 'darkColor' in opts ? opts.darkColor : null;
    if (darkColor == null) dart.nullFailed(L7, 686, 20, "darkColor");
    let highContrastColor = opts && 'highContrastColor' in opts ? opts.highContrastColor : null;
    if (highContrastColor == null) dart.nullFailed(L7, 687, 20, "highContrastColor");
    let darkHighContrastColor = opts && 'darkHighContrastColor' in opts ? opts.darkHighContrastColor : null;
    if (darkHighContrastColor == null) dart.nullFailed(L7, 688, 20, "darkHighContrastColor");
    let elevatedColor = opts && 'elevatedColor' in opts ? opts.elevatedColor : null;
    if (elevatedColor == null) dart.nullFailed(L7, 689, 20, "elevatedColor");
    let darkElevatedColor = opts && 'darkElevatedColor' in opts ? opts.darkElevatedColor : null;
    if (darkElevatedColor == null) dart.nullFailed(L7, 690, 20, "darkElevatedColor");
    let highContrastElevatedColor = opts && 'highContrastElevatedColor' in opts ? opts.highContrastElevatedColor : null;
    if (highContrastElevatedColor == null) dart.nullFailed(L7, 691, 20, "highContrastElevatedColor");
    let darkHighContrastElevatedColor = opts && 'darkHighContrastElevatedColor' in opts ? opts.darkHighContrastElevatedColor : null;
    if (darkHighContrastElevatedColor == null) dart.nullFailed(L7, 692, 20, "darkHighContrastElevatedColor");
    colors$.CupertinoDynamicColor.__.call(this, color, color, darkColor, highContrastColor, darkHighContrastColor, elevatedColor, darkElevatedColor, highContrastElevatedColor, darkHighContrastElevatedColor, null, debugLabel);
  }).prototype = colors$.CupertinoDynamicColor.prototype;
  (colors$.CupertinoDynamicColor.withBrightnessAndContrast = function(opts) {
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let color = opts && 'color' in opts ? opts.color : null;
    if (color == null) dart.nullFailed(L7, 715, 20, "color");
    let darkColor = opts && 'darkColor' in opts ? opts.darkColor : null;
    if (darkColor == null) dart.nullFailed(L7, 716, 20, "darkColor");
    let highContrastColor = opts && 'highContrastColor' in opts ? opts.highContrastColor : null;
    if (highContrastColor == null) dart.nullFailed(L7, 717, 20, "highContrastColor");
    let darkHighContrastColor = opts && 'darkHighContrastColor' in opts ? opts.darkHighContrastColor : null;
    if (darkHighContrastColor == null) dart.nullFailed(L7, 718, 20, "darkHighContrastColor");
    colors$.CupertinoDynamicColor.new.call(this, {debugLabel: debugLabel, color: color, darkColor: darkColor, highContrastColor: highContrastColor, darkHighContrastColor: darkHighContrastColor, elevatedColor: color, darkElevatedColor: darkColor, highContrastElevatedColor: highContrastColor, darkHighContrastElevatedColor: darkHighContrastColor});
  }).prototype = colors$.CupertinoDynamicColor.prototype;
  (colors$.CupertinoDynamicColor.withBrightness = function(opts) {
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let color = opts && 'color' in opts ? opts.color : null;
    if (color == null) dart.nullFailed(L7, 738, 20, "color");
    let darkColor = opts && 'darkColor' in opts ? opts.darkColor : null;
    if (darkColor == null) dart.nullFailed(L7, 739, 20, "darkColor");
    colors$.CupertinoDynamicColor.new.call(this, {debugLabel: debugLabel, color: color, darkColor: darkColor, highContrastColor: color, darkHighContrastColor: darkColor, elevatedColor: color, darkElevatedColor: darkColor, highContrastElevatedColor: color, darkHighContrastElevatedColor: darkColor});
  }).prototype = colors$.CupertinoDynamicColor.prototype;
  (colors$.CupertinoDynamicColor.__ = function(_effectiveColor, color, darkColor, highContrastColor, darkHighContrastColor, elevatedColor, darkElevatedColor, highContrastElevatedColor, darkHighContrastElevatedColor, _debugResolveContext, _debugLabel) {
    if (_effectiveColor == null) dart.nullFailed(L7, 753, 10, "_effectiveColor");
    if (color == null) dart.nullFailed(L7, 754, 10, "color");
    if (darkColor == null) dart.nullFailed(L7, 755, 10, "darkColor");
    if (highContrastColor == null) dart.nullFailed(L7, 756, 10, "highContrastColor");
    if (darkHighContrastColor == null) dart.nullFailed(L7, 757, 10, "darkHighContrastColor");
    if (elevatedColor == null) dart.nullFailed(L7, 758, 10, "elevatedColor");
    if (darkElevatedColor == null) dart.nullFailed(L7, 759, 10, "darkElevatedColor");
    if (highContrastElevatedColor == null) dart.nullFailed(L7, 760, 10, "highContrastElevatedColor");
    if (darkHighContrastElevatedColor == null) dart.nullFailed(L7, 761, 10, "darkHighContrastElevatedColor");
    this[_effectiveColor$] = _effectiveColor;
    this[color$] = color;
    this[darkColor$] = darkColor;
    this[highContrastColor$] = highContrastColor;
    this[darkHighContrastColor$] = darkHighContrastColor;
    this[elevatedColor$] = elevatedColor;
    this[darkElevatedColor$] = darkElevatedColor;
    this[highContrastElevatedColor$] = highContrastElevatedColor;
    this[darkHighContrastElevatedColor$] = darkHighContrastElevatedColor;
    this[_debugResolveContext$] = _debugResolveContext;
    this[_debugLabel$] = _debugLabel;
    if (!(color != null)) dart.assertFailed(null, L7, 764, 14, "color != null");
    if (!(darkColor != null)) dart.assertFailed(null, L7, 765, 14, "darkColor != null");
    if (!(highContrastColor != null)) dart.assertFailed(null, L7, 766, 14, "highContrastColor != null");
    if (!(darkHighContrastColor != null)) dart.assertFailed(null, L7, 767, 14, "darkHighContrastColor != null");
    if (!(elevatedColor != null)) dart.assertFailed(null, L7, 768, 14, "elevatedColor != null");
    if (!(darkElevatedColor != null)) dart.assertFailed(null, L7, 769, 14, "darkElevatedColor != null");
    if (!(highContrastElevatedColor != null)) dart.assertFailed(null, L7, 770, 14, "highContrastElevatedColor != null");
    if (!(darkHighContrastElevatedColor != null)) dart.assertFailed(null, L7, 771, 14, "darkHighContrastElevatedColor != null");
    if (!(_effectiveColor != null)) dart.assertFailed(null, L7, 772, 14, "_effectiveColor != null");
    colors$.CupertinoDynamicColor.__proto__.new.call(this, 0);
    ;
  }).prototype = colors$.CupertinoDynamicColor.prototype;
  dart.addTypeTests(colors$.CupertinoDynamicColor);
  dart.addTypeCaches(colors$.CupertinoDynamicColor);
  const _effectiveColor$ = CupertinoDynamicColor__effectiveColor;
  const _debugLabel$ = CupertinoDynamicColor__debugLabel;
  const _debugResolveContext$ = CupertinoDynamicColor__debugResolveContext;
  const color$ = CupertinoDynamicColor_color;
  const darkColor$ = CupertinoDynamicColor_darkColor;
  const highContrastColor$ = CupertinoDynamicColor_highContrastColor;
  const darkHighContrastColor$ = CupertinoDynamicColor_darkHighContrastColor;
  const elevatedColor$ = CupertinoDynamicColor_elevatedColor;
  const darkElevatedColor$ = CupertinoDynamicColor_darkElevatedColor;
  const highContrastElevatedColor$ = CupertinoDynamicColor_highContrastElevatedColor;
  const darkHighContrastElevatedColor$ = CupertinoDynamicColor_darkHighContrastElevatedColor;
  dart.setMethodSignature(colors$.CupertinoDynamicColor, () => ({
    __proto__: dart.getMethods(colors$.CupertinoDynamicColor.__proto__),
    resolveFrom: dart.fnType(colors$.CupertinoDynamicColor, [framework.BuildContext])
  }));
  dart.setGetterSignature(colors$.CupertinoDynamicColor, () => ({
    __proto__: dart.getGetters(colors$.CupertinoDynamicColor.__proto__),
    value: core.int,
    [_isPlatformBrightnessDependent]: core.bool,
    [_isHighContrastDependent]: core.bool,
    [_isInterfaceElevationDependent]: core.bool
  }));
  dart.setLibraryUri(colors$.CupertinoDynamicColor, L6);
  dart.setFieldSignature(colors$.CupertinoDynamicColor, () => ({
    __proto__: dart.getFields(colors$.CupertinoDynamicColor.__proto__),
    [_effectiveColor]: dart.finalFieldType(ui.Color),
    [_debugLabel]: dart.finalFieldType(dart.nullable(core.String)),
    [_debugResolveContext]: dart.finalFieldType(dart.nullable(framework.Element)),
    color: dart.finalFieldType(ui.Color),
    darkColor: dart.finalFieldType(ui.Color),
    highContrastColor: dart.finalFieldType(ui.Color),
    darkHighContrastColor: dart.finalFieldType(ui.Color),
    elevatedColor: dart.finalFieldType(ui.Color),
    darkElevatedColor: dart.finalFieldType(ui.Color),
    highContrastElevatedColor: dart.finalFieldType(ui.Color),
    darkHighContrastElevatedColor: dart.finalFieldType(ui.Color)
  }));
  dart.defineExtensionMethods(colors$.CupertinoDynamicColor, ['_equals', 'toString']);
  dart.defineExtensionAccessors(colors$.CupertinoDynamicColor, ['hashCode']);
  var C163;
  var C164;
  colors$.createCupertinoColorProperty = function createCupertinoColorProperty(name, value, opts) {
    if (name == null) dart.nullFailed(L7, 1110, 10, "name");
    let showName = opts && 'showName' in opts ? opts.showName : true;
    if (showName == null) dart.nullFailed(L7, 1112, 8, "showName");
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C163 || CT.C163;
    let style = opts && 'style' in opts ? opts.style : C164 || CT.C164;
    if (style == null) dart.nullFailed(L7, 1114, 24, "style");
    let level = opts && 'level' in opts ? opts.level : C162 || CT.C162;
    if (level == null) dart.nullFailed(L7, 1115, 19, "level");
    if (colors$.CupertinoDynamicColor.is(value)) {
      return new (DiagnosticsPropertyOfCupertinoDynamicColor()).new(name, value, {description: value[_debugLabel], showName: showName, defaultValue: defaultValue, style: style, level: level});
    } else {
      return new colors.ColorProperty.new(name, value, {showName: showName, defaultValue: defaultValue, style: style, level: level});
    }
  };
  dart.trackLibraries("packages/flutter/src/cupertino/text_theme.dart", {
    "package:flutter/src/cupertino/text_theme.dart": text_theme,
    "package:flutter/src/cupertino/icon_theme_data.dart": icon_theme_data$,
    "package:flutter/src/cupertino/theme.dart": theme$,
    "package:flutter/src/cupertino/colors.dart": colors$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_theme.dart","icon_theme_data.dart","theme.dart","colors.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"../../../../../../../../../../packages/flutter/src/cupertino/text_theme.dart.lib.js"}');
  // Exports:
  return {
    src__cupertino__text_theme: text_theme,
    src__cupertino__icon_theme_data: icon_theme_data$,
    src__cupertino__theme: theme$,
    src__cupertino__colors: colors$
  };
}));

//# sourceMappingURL=text_theme.dart.lib.js.map
