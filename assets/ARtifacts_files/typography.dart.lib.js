define(['dart_sdk', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/strut_style.dart'], (function load__packages__flutter__src__material__typography_dart(dart_sdk, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__strut_style$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const text_style = packages__flutter__src__painting__strut_style$46dart.src__painting__text_style;
  var typography = Object.create(dart.library);
  var text_theme = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(false);
  var ScriptCategoryL = () => (ScriptCategoryL = dart.constFn(dart.legacy(typography.ScriptCategory)))();
  var DiagnosticsPropertyOfTextTheme = () => (DiagnosticsPropertyOfTextTheme = dart.constFn(diagnostics.DiagnosticsProperty$(text_theme.TextTheme)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var DiagnosticsPropertyOfTextStyle = () => (DiagnosticsPropertyOfTextStyle = dart.constFn(diagnostics.DiagnosticsProperty$(text_style.TextStyle)))();
  const CT = Object.create(null);
  var L3 = "package:flutter/src/material/text_theme.dart";
  var L2 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_theme.dart";
  var L1 = "package:flutter/src/material/typography.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/typography.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: typography.ScriptCategory.prototype,
        [_name$]: "ScriptCategory.englishLike",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: typography.ScriptCategory.prototype,
        [_name$]: "ScriptCategory.dense",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: typography.ScriptCategory.prototype,
        [_name$]: "ScriptCategory.tall",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], ScriptCategoryL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.android",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.iOS",
        index: 2
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.macOS",
        index: 4
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.fuchsia",
        index: 1
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.windows",
        index: 5
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.linux",
        index: 3
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ui.TextDecoration.prototype,
        [TextDecoration__mask]: 0
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackMountainView overline",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C13 || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3707764736.0
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackMountainView button",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2315255808.0
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackMountainView caption",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C17 || CT.C17,
        [TextStyle_inherit]: true
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackMountainView bodyText2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackMountainView bodyText1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackMountainView subtitle2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C13 || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackMountainView subtitle1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackMountainView headline6",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackMountainView headline5",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackMountainView headline4",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C17 || CT.C17,
        [TextStyle_inherit]: true
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackMountainView headline3",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C17 || CT.C17,
        [TextStyle_inherit]: true
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackMountainView headline2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C17 || CT.C17,
        [TextStyle_inherit]: true
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackMountainView headline1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C17 || CT.C17,
        [TextStyle_inherit]: true
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_overline]: C11 || CT.C11,
        [TextTheme_button]: C14 || CT.C14,
        [TextTheme_caption]: C16 || CT.C16,
        [TextTheme_bodyText2]: C18 || CT.C18,
        [TextTheme_bodyText1]: C19 || CT.C19,
        [TextTheme_subtitle2]: C20 || CT.C20,
        [TextTheme_subtitle1]: C21 || CT.C21,
        [TextTheme_headline6]: C22 || CT.C22,
        [TextTheme_headline5]: C23 || CT.C23,
        [TextTheme_headline4]: C24 || CT.C24,
        [TextTheme_headline3]: C25 || CT.C25,
        [TextTheme_headline2]: C26 || CT.C26,
        [TextTheme_headline1]: C27 || CT.C27
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteMountainView overline",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteMountainView button",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3019898879.0
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteMountainView caption",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteMountainView bodyText2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteMountainView bodyText1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteMountainView subtitle2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteMountainView subtitle1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteMountainView headline6",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteMountainView headline5",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteMountainView headline4",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteMountainView headline3",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteMountainView headline2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteMountainView headline1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_overline]: C29 || CT.C29,
        [TextTheme_button]: C31 || CT.C31,
        [TextTheme_caption]: C32 || CT.C32,
        [TextTheme_bodyText2]: C34 || CT.C34,
        [TextTheme_bodyText1]: C35 || CT.C35,
        [TextTheme_subtitle2]: C36 || CT.C36,
        [TextTheme_subtitle1]: C37 || CT.C37,
        [TextTheme_headline6]: C38 || CT.C38,
        [TextTheme_headline5]: C39 || CT.C39,
        [TextTheme_headline4]: C40 || CT.C40,
        [TextTheme_headline3]: C41 || CT.C41,
        [TextTheme_headline2]: C42 || CT.C42,
        [TextTheme_headline1]: C43 || CT.C43
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond overline",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C13 || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond button",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond caption",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C17 || CT.C17,
        [TextStyle_inherit]: true
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond bodyText2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond bodyText1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond subtitle2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C13 || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond subtitle1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond headline6",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond headline5",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond headline4",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C17 || CT.C17,
        [TextStyle_inherit]: true
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond headline3",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C17 || CT.C17,
        [TextStyle_inherit]: true
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond headline2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C17 || CT.C17,
        [TextStyle_inherit]: true
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond headline1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C17 || CT.C17,
        [TextStyle_inherit]: true
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_overline]: C45 || CT.C45,
        [TextTheme_button]: C46 || CT.C46,
        [TextTheme_caption]: C47 || CT.C47,
        [TextTheme_bodyText2]: C48 || CT.C48,
        [TextTheme_bodyText1]: C49 || CT.C49,
        [TextTheme_subtitle2]: C50 || CT.C50,
        [TextTheme_subtitle1]: C51 || CT.C51,
        [TextTheme_headline6]: C52 || CT.C52,
        [TextTheme_headline5]: C53 || CT.C53,
        [TextTheme_headline4]: C54 || CT.C54,
        [TextTheme_headline3]: C55 || CT.C55,
        [TextTheme_headline2]: C56 || CT.C56,
        [TextTheme_headline1]: C57 || CT.C57
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond overline",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond button",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond caption",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond bodyText2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond bodyText1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond subtitle2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond subtitle1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond headline6",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond headline5",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond headline4",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond headline3",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond headline2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond headline1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_overline]: C59 || CT.C59,
        [TextTheme_button]: C60 || CT.C60,
        [TextTheme_caption]: C61 || CT.C61,
        [TextTheme_bodyText2]: C62 || CT.C62,
        [TextTheme_bodyText1]: C63 || CT.C63,
        [TextTheme_subtitle2]: C64 || CT.C64,
        [TextTheme_subtitle1]: C65 || CT.C65,
        [TextTheme_headline6]: C66 || CT.C66,
        [TextTheme_headline5]: C67 || CT.C67,
        [TextTheme_headline4]: C68 || CT.C68,
        [TextTheme_headline3]: C69 || CT.C69,
        [TextTheme_headline2]: C70 || CT.C70,
        [TextTheme_headline1]: C71 || CT.C71
      });
    },
    get C72() {
      return C72 = dart.constList(["Ubuntu", "Cantarell", "DejaVu Sans", "Liberation Sans", "Arial"], StringL());
    },
    get C74() {
      return C74 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki overline",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C13 || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki button",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki caption",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C17 || CT.C17,
        [TextStyle_inherit]: true
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki bodyText2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki bodyText1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki subtitle2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C13 || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki subtitle1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki headline6",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki headline5",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki headline4",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C17 || CT.C17,
        [TextStyle_inherit]: true
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki headline3",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C17 || CT.C17,
        [TextStyle_inherit]: true
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki headline2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C17 || CT.C17,
        [TextStyle_inherit]: true
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki headline1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C17 || CT.C17,
        [TextStyle_inherit]: true
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_overline]: C74 || CT.C74,
        [TextTheme_button]: C75 || CT.C75,
        [TextTheme_caption]: C76 || CT.C76,
        [TextTheme_bodyText2]: C77 || CT.C77,
        [TextTheme_bodyText1]: C78 || CT.C78,
        [TextTheme_subtitle2]: C79 || CT.C79,
        [TextTheme_subtitle1]: C80 || CT.C80,
        [TextTheme_headline6]: C81 || CT.C81,
        [TextTheme_headline5]: C82 || CT.C82,
        [TextTheme_headline4]: C83 || CT.C83,
        [TextTheme_headline3]: C84 || CT.C84,
        [TextTheme_headline2]: C85 || CT.C85,
        [TextTheme_headline1]: C86 || CT.C86
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki overline",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki button",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki caption",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki bodyText2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki bodyText1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki subtitle2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki subtitle1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki headline6",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki headline5",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki headline4",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki headline3",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki headline2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki headline1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: C72 || CT.C72,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_overline]: C88 || CT.C88,
        [TextTheme_button]: C89 || CT.C89,
        [TextTheme_caption]: C90 || CT.C90,
        [TextTheme_bodyText2]: C91 || CT.C91,
        [TextTheme_bodyText1]: C92 || CT.C92,
        [TextTheme_subtitle2]: C93 || CT.C93,
        [TextTheme_subtitle1]: C94 || CT.C94,
        [TextTheme_headline6]: C95 || CT.C95,
        [TextTheme_headline5]: C96 || CT.C96,
        [TextTheme_headline4]: C97 || CT.C97,
        [TextTheme_headline3]: C98 || CT.C98,
        [TextTheme_headline2]: C99 || CT.C99,
        [TextTheme_headline1]: C100 || CT.C100
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino overline",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C13 || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino button",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino caption",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C17 || CT.C17,
        [TextStyle_inherit]: true
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino bodyText2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino bodyText1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino subtitle2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C13 || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino subtitle1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino headline6",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino headline5",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino headline4",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C17 || CT.C17,
        [TextStyle_inherit]: true
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino headline3",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C17 || CT.C17,
        [TextStyle_inherit]: true
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino headline2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C17 || CT.C17,
        [TextStyle_inherit]: true
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino headline1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C17 || CT.C17,
        [TextStyle_inherit]: true
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_overline]: C102 || CT.C102,
        [TextTheme_button]: C103 || CT.C103,
        [TextTheme_caption]: C104 || CT.C104,
        [TextTheme_bodyText2]: C105 || CT.C105,
        [TextTheme_bodyText1]: C106 || CT.C106,
        [TextTheme_subtitle2]: C107 || CT.C107,
        [TextTheme_subtitle1]: C108 || CT.C108,
        [TextTheme_headline6]: C109 || CT.C109,
        [TextTheme_headline5]: C110 || CT.C110,
        [TextTheme_headline4]: C111 || CT.C111,
        [TextTheme_headline3]: C112 || CT.C112,
        [TextTheme_headline2]: C113 || CT.C113,
        [TextTheme_headline1]: C114 || CT.C114
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino overline",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino button",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino caption",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino bodyText2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino bodyText1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino subtitle2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino subtitle1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino headline6",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino headline5",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C30 || CT.C30,
        [TextStyle_inherit]: true
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino headline4",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino headline3",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino headline2",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino headline1",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C12 || CT.C12,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_overline]: C116 || CT.C116,
        [TextTheme_button]: C117 || CT.C117,
        [TextTheme_caption]: C118 || CT.C118,
        [TextTheme_bodyText2]: C119 || CT.C119,
        [TextTheme_bodyText1]: C120 || CT.C120,
        [TextTheme_subtitle2]: C121 || CT.C121,
        [TextTheme_subtitle1]: C122 || CT.C122,
        [TextTheme_headline6]: C123 || CT.C123,
        [TextTheme_headline5]: C124 || CT.C124,
        [TextTheme_headline4]: C125 || CT.C125,
        [TextTheme_headline3]: C126 || CT.C126,
        [TextTheme_headline2]: C127 || CT.C127,
        [TextTheme_headline1]: C128 || CT.C128
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: ui.TextBaseline.prototype,
        [_name$0]: "TextBaseline.alphabetic",
        index: 0
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 3
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike overline 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 1.5,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 10,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 4
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike button 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C134 || CT.C134,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike caption 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 12,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike body1 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike body2 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C134 || CT.C134,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike subtitle 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.1,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C134 || CT.C134,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike subhead 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 16,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike title 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C134 || CT.C134,
        [TextStyle_fontSize]: 20,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike headline 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike display1 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 34,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike display2 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 45,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike display3 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 56,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 0
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike display4 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C146 || CT.C146,
        [TextStyle_fontSize]: 112,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_overline]: C130 || CT.C130,
        [TextTheme_button]: C133 || CT.C133,
        [TextTheme_caption]: C135 || CT.C135,
        [TextTheme_bodyText2]: C136 || CT.C136,
        [TextTheme_bodyText1]: C137 || CT.C137,
        [TextTheme_subtitle2]: C138 || CT.C138,
        [TextTheme_subtitle1]: C139 || CT.C139,
        [TextTheme_headline6]: C140 || CT.C140,
        [TextTheme_headline5]: C141 || CT.C141,
        [TextTheme_headline4]: C142 || CT.C142,
        [TextTheme_headline3]: C143 || CT.C143,
        [TextTheme_headline2]: C144 || CT.C144,
        [TextTheme_headline1]: C145 || CT.C145
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike overline 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 1.5,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 10,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike button 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 1.25,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C134 || CT.C134,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike caption 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.4,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 12,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike bodyText2 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.25,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike bodyText1 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.5,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 16,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike subtitle2 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.1,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C134 || CT.C134,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike subtitle1 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.15,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 16,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike headline6 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.15,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C134 || CT.C134,
        [TextStyle_fontSize]: 20,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike headline5 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike headline4 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.25,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 34,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike headline3 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 48,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 2
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike headline2 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: -0.5,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C160 || CT.C160,
        [TextStyle_fontSize]: 60,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike headline1 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: -1.5,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C160 || CT.C160,
        [TextStyle_fontSize]: 96,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_overline]: C148 || CT.C148,
        [TextTheme_button]: C149 || CT.C149,
        [TextTheme_caption]: C150 || CT.C150,
        [TextTheme_bodyText2]: C151 || CT.C151,
        [TextTheme_bodyText1]: C152 || CT.C152,
        [TextTheme_subtitle2]: C153 || CT.C153,
        [TextTheme_subtitle1]: C154 || CT.C154,
        [TextTheme_headline6]: C155 || CT.C155,
        [TextTheme_headline5]: C156 || CT.C156,
        [TextTheme_headline4]: C157 || CT.C157,
        [TextTheme_headline3]: C158 || CT.C158,
        [TextTheme_headline2]: C159 || CT.C159,
        [TextTheme_headline1]: C161 || CT.C161
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: ui.TextBaseline.prototype,
        [_name$0]: "TextBaseline.ideographic",
        index: 1
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense overline 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 11,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense button 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C134 || CT.C134,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense caption 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 13,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense body1 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense body2 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C134 || CT.C134,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense subtitle 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C134 || CT.C134,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense subhead 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense title 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C134 || CT.C134,
        [TextStyle_fontSize]: 21,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense headline 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense display1 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 34,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense display2 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 45,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense display3 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 56,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense display4 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C146 || CT.C146,
        [TextStyle_fontSize]: 112,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_overline]: C163 || CT.C163,
        [TextTheme_button]: C165 || CT.C165,
        [TextTheme_caption]: C166 || CT.C166,
        [TextTheme_bodyText2]: C167 || CT.C167,
        [TextTheme_bodyText1]: C168 || CT.C168,
        [TextTheme_subtitle2]: C169 || CT.C169,
        [TextTheme_subtitle1]: C170 || CT.C170,
        [TextTheme_headline6]: C171 || CT.C171,
        [TextTheme_headline5]: C172 || CT.C172,
        [TextTheme_headline4]: C173 || CT.C173,
        [TextTheme_headline3]: C174 || CT.C174,
        [TextTheme_headline2]: C175 || CT.C175,
        [TextTheme_headline1]: C176 || CT.C176
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense overline 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 11,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense button 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C134 || CT.C134,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense caption 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 13,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense bodyText2 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense bodyText1 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense subtitle2 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C134 || CT.C134,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense subtitle1 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense headline6 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C134 || CT.C134,
        [TextStyle_fontSize]: 21,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense headline5 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense headline4 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 34,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense headline3 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 48,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense headline2 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C146 || CT.C146,
        [TextStyle_fontSize]: 60,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense headline1 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C164 || CT.C164,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C146 || CT.C146,
        [TextStyle_fontSize]: 96,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_overline]: C178 || CT.C178,
        [TextTheme_button]: C179 || CT.C179,
        [TextTheme_caption]: C180 || CT.C180,
        [TextTheme_bodyText2]: C181 || CT.C181,
        [TextTheme_bodyText1]: C182 || CT.C182,
        [TextTheme_subtitle2]: C183 || CT.C183,
        [TextTheme_subtitle1]: C184 || CT.C184,
        [TextTheme_headline6]: C185 || CT.C185,
        [TextTheme_headline5]: C186 || CT.C186,
        [TextTheme_headline4]: C187 || CT.C187,
        [TextTheme_headline3]: C188 || CT.C188,
        [TextTheme_headline2]: C189 || CT.C189,
        [TextTheme_headline1]: C190 || CT.C190
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall overline 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 11,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall button 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C194 || CT.C194,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall caption 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 13,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall body1 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall body2 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C194 || CT.C194,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall subtitle 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C134 || CT.C134,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall subhead 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall title 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C194 || CT.C194,
        [TextStyle_fontSize]: 21,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall headline 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall display1 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 34,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall display2 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 45,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall display3 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 56,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall display4 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 112,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_overline]: C192 || CT.C192,
        [TextTheme_button]: C193 || CT.C193,
        [TextTheme_caption]: C195 || CT.C195,
        [TextTheme_bodyText2]: C196 || CT.C196,
        [TextTheme_bodyText1]: C197 || CT.C197,
        [TextTheme_subtitle2]: C198 || CT.C198,
        [TextTheme_subtitle1]: C199 || CT.C199,
        [TextTheme_headline6]: C200 || CT.C200,
        [TextTheme_headline5]: C201 || CT.C201,
        [TextTheme_headline4]: C202 || CT.C202,
        [TextTheme_headline3]: C203 || CT.C203,
        [TextTheme_headline2]: C204 || CT.C204,
        [TextTheme_headline1]: C205 || CT.C205
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall overline 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 11,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall button 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C194 || CT.C194,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall caption 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 13,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall bodyText2 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall bodyText1 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C194 || CT.C194,
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall subtitle2 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C134 || CT.C134,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall subtitle1 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall headline6 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C194 || CT.C194,
        [TextStyle_fontSize]: 21,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall headline5 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall headline4 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 34,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall headline3 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 48,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall headline2 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 60,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall headline1 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C131 || CT.C131,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C132 || CT.C132,
        [TextStyle_fontSize]: 96,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_overline]: C207 || CT.C207,
        [TextTheme_button]: C208 || CT.C208,
        [TextTheme_caption]: C209 || CT.C209,
        [TextTheme_bodyText2]: C210 || CT.C210,
        [TextTheme_bodyText1]: C211 || CT.C211,
        [TextTheme_subtitle2]: C212 || CT.C212,
        [TextTheme_subtitle1]: C213 || CT.C213,
        [TextTheme_headline6]: C214 || CT.C214,
        [TextTheme_headline5]: C215 || CT.C215,
        [TextTheme_headline4]: C216 || CT.C216,
        [TextTheme_headline3]: C217 || CT.C217,
        [TextTheme_headline2]: C218 || CT.C218,
        [TextTheme_headline1]: C219 || CT.C219
      });
    }
  }, false);
  var _name$ = dart.privateName(typography, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  typography.ScriptCategory = class ScriptCategory extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (typography.ScriptCategory.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 22, 6, "index");
    if (_name == null) dart.nullFailed(L0, 22, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = typography.ScriptCategory.prototype;
  dart.addTypeTests(typography.ScriptCategory);
  dart.addTypeCaches(typography.ScriptCategory);
  dart.setLibraryUri(typography.ScriptCategory, L1);
  dart.setFieldSignature(typography.ScriptCategory, () => ({
    __proto__: dart.getFields(typography.ScriptCategory.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(typography.ScriptCategory, ['toString']);
  typography.ScriptCategory.englishLike = C0 || CT.C0;
  typography.ScriptCategory.dense = C1 || CT.C1;
  typography.ScriptCategory.tall = C2 || CT.C2;
  typography.ScriptCategory.values = C3 || CT.C3;
  var _name = dart.privateName(platform, "_name");
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var black$ = dart.privateName(typography, "Typography.black");
  var white$ = dart.privateName(typography, "Typography.white");
  var englishLike$ = dart.privateName(typography, "Typography.englishLike");
  var dense$ = dart.privateName(typography, "Typography.dense");
  var tall$ = dart.privateName(typography, "Typography.tall");
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextDecoration__mask = dart.privateName(ui, "TextDecoration._mask");
  var C12;
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
  var Color_value = dart.privateName(ui, "Color.value");
  var C13;
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var C11;
  var TextTheme_overline = dart.privateName(text_theme, "TextTheme.overline");
  var C15;
  var C14;
  var TextTheme_button = dart.privateName(text_theme, "TextTheme.button");
  var C17;
  var C16;
  var TextTheme_caption = dart.privateName(text_theme, "TextTheme.caption");
  var C18;
  var TextTheme_bodyText2 = dart.privateName(text_theme, "TextTheme.bodyText2");
  var C19;
  var TextTheme_bodyText1 = dart.privateName(text_theme, "TextTheme.bodyText1");
  var C20;
  var TextTheme_subtitle2 = dart.privateName(text_theme, "TextTheme.subtitle2");
  var C21;
  var TextTheme_subtitle1 = dart.privateName(text_theme, "TextTheme.subtitle1");
  var C22;
  var TextTheme_headline6 = dart.privateName(text_theme, "TextTheme.headline6");
  var C23;
  var TextTheme_headline5 = dart.privateName(text_theme, "TextTheme.headline5");
  var C24;
  var TextTheme_headline4 = dart.privateName(text_theme, "TextTheme.headline4");
  var C25;
  var TextTheme_headline3 = dart.privateName(text_theme, "TextTheme.headline3");
  var C26;
  var TextTheme_headline2 = dart.privateName(text_theme, "TextTheme.headline2");
  var C27;
  var TextTheme_headline1 = dart.privateName(text_theme, "TextTheme.headline1");
  var C10;
  var C30;
  var C29;
  var C31;
  var C33;
  var C32;
  var C34;
  var C35;
  var C36;
  var C37;
  var C38;
  var C39;
  var C40;
  var C41;
  var C42;
  var C43;
  var C28;
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
  var C44;
  var C59;
  var C60;
  var C61;
  var C62;
  var C63;
  var C64;
  var C65;
  var C66;
  var C67;
  var C68;
  var C69;
  var C70;
  var C71;
  var C58;
  var C72;
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
  var C73;
  var C88;
  var C89;
  var C90;
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
  var C87;
  var C102;
  var C103;
  var C104;
  var C105;
  var C106;
  var C107;
  var C108;
  var C109;
  var C110;
  var C111;
  var C112;
  var C113;
  var C114;
  var C101;
  var C116;
  var C117;
  var C118;
  var C119;
  var C120;
  var C121;
  var C122;
  var C123;
  var C124;
  var C125;
  var C126;
  var C127;
  var C128;
  var C115;
  var _name$0 = dart.privateName(ui, "_name");
  var C131;
  var FontWeight_index = dart.privateName(ui, "FontWeight.index");
  var C132;
  var C130;
  var C134;
  var C133;
  var C135;
  var C136;
  var C137;
  var C138;
  var C139;
  var C140;
  var C141;
  var C142;
  var C143;
  var C144;
  var C146;
  var C145;
  var C129;
  var C148;
  var C149;
  var C150;
  var C151;
  var C152;
  var C153;
  var C154;
  var C155;
  var C156;
  var C157;
  var C158;
  var C160;
  var C159;
  var C161;
  var C147;
  var C164;
  var C163;
  var C165;
  var C166;
  var C167;
  var C168;
  var C169;
  var C170;
  var C171;
  var C172;
  var C173;
  var C174;
  var C175;
  var C176;
  var C162;
  var C178;
  var C179;
  var C180;
  var C181;
  var C182;
  var C183;
  var C184;
  var C185;
  var C186;
  var C187;
  var C188;
  var C189;
  var C190;
  var C177;
  var C192;
  var C194;
  var C193;
  var C195;
  var C196;
  var C197;
  var C198;
  var C199;
  var C200;
  var C201;
  var C202;
  var C203;
  var C204;
  var C205;
  var C191;
  var C207;
  var C208;
  var C209;
  var C210;
  var C211;
  var C212;
  var C213;
  var C214;
  var C215;
  var C216;
  var C217;
  var C218;
  var C219;
  var C206;
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  typography.Typography = class Typography extends Object_Diagnosticable$36 {
    get black() {
      return this[black$];
    }
    set black(value) {
      super.black = value;
    }
    get white() {
      return this[white$];
    }
    set white(value) {
      super.white = value;
    }
    get englishLike() {
      return this[englishLike$];
    }
    set englishLike(value) {
      super.englishLike = value;
    }
    get dense() {
      return this[dense$];
    }
    set dense(value) {
      super.dense = value;
    }
    get tall() {
      return this[tall$];
    }
    set tall(value) {
      super.tall = value;
    }
    static material2014(opts) {
      let t0, t0$, t0$0;
      let platform = opts && 'platform' in opts ? opts.platform : C4 || CT.C4;
      let black = opts && 'black' in opts ? opts.black : null;
      let white = opts && 'white' in opts ? opts.white : null;
      let englishLike = opts && 'englishLike' in opts ? opts.englishLike : null;
      let dense = opts && 'dense' in opts ? opts.dense : null;
      let tall = opts && 'tall' in opts ? opts.tall : null;
      if (!(platform != null || black != null && white != null)) dart.assertFailed(null, L0, 125, 12, "platform != null || (black != null && white != null)");
      return typography.Typography._withPlatform(platform, black, white, (t0 = englishLike, t0 == null ? typography.Typography.englishLike2014 : t0), (t0$ = dense, t0$ == null ? typography.Typography.dense2014 : t0$), (t0$0 = tall, t0$0 == null ? typography.Typography.tall2014 : t0$0));
    }
    static material2018(opts) {
      let t0, t0$, t0$0;
      let platform = opts && 'platform' in opts ? opts.platform : C4 || CT.C4;
      let black = opts && 'black' in opts ? opts.black : null;
      let white = opts && 'white' in opts ? opts.white : null;
      let englishLike = opts && 'englishLike' in opts ? opts.englishLike : null;
      let dense = opts && 'dense' in opts ? opts.dense : null;
      let tall = opts && 'tall' in opts ? opts.tall : null;
      if (!(platform != null || black != null && white != null)) dart.assertFailed(null, L0, 153, 12, "platform != null || (black != null && white != null)");
      return typography.Typography._withPlatform(platform, black, white, (t0 = englishLike, t0 == null ? typography.Typography.englishLike2018 : t0), (t0$ = dense, t0$ == null ? typography.Typography.dense2018 : t0$), (t0$0 = tall, t0$0 == null ? typography.Typography.tall2018 : t0$0));
    }
    static _withPlatform(platform, black, white, englishLike, dense, tall) {
      if (englishLike == null) dart.nullFailed(L0, 167, 15, "englishLike");
      if (dense == null) dart.nullFailed(L0, 168, 15, "dense");
      if (tall == null) dart.nullFailed(L0, 169, 15, "tall");
      if (!(platform != null || black != null && white != null)) dart.assertFailed(null, L0, 171, 12, "platform != null || (black != null && white != null)");
      if (!(englishLike != null)) dart.assertFailed(null, L0, 172, 12, "englishLike != null");
      if (!(dense != null)) dart.assertFailed(null, L0, 173, 12, "dense != null");
      if (!(tall != null)) dart.assertFailed(null, L0, 174, 12, "tall != null");
      switch (platform) {
        case C5 || CT.C5:
        case C6 || CT.C6:
        {
          black == null ? black = typography.Typography.blackCupertino : null;
          white == null ? white = typography.Typography.whiteCupertino : null;
          break;
        }
        case C4 || CT.C4:
        case C7 || CT.C7:
        {
          black == null ? black = typography.Typography.blackMountainView : null;
          white == null ? white = typography.Typography.whiteMountainView : null;
          break;
        }
        case C8 || CT.C8:
        {
          black == null ? black = typography.Typography.blackRedmond : null;
          white == null ? white = typography.Typography.whiteRedmond : null;
          break;
        }
        case C9 || CT.C9:
        {
          black == null ? black = typography.Typography.blackHelsinki : null;
          white == null ? white = typography.Typography.whiteHelsinki : null;
          break;
        }
        case null:
        {
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      return new typography.Typography.__(dart.nullCheck(black), dart.nullCheck(white), englishLike, dense, tall);
    }
    geometryThemeFor(category) {
      if (category == null) dart.nullFailed(L0, 262, 45, "category");
      if (!(category != null)) dart.assertFailed(null, L0, 263, 12, "category != null");
      switch (category) {
        case C0 || CT.C0:
        {
          return this.englishLike;
        }
        case C1 || CT.C1:
        {
          return this.dense;
        }
        case C2 || CT.C2:
        {
          return this.tall;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2;
      let black = opts && 'black' in opts ? opts.black : null;
      let white = opts && 'white' in opts ? opts.white : null;
      let englishLike = opts && 'englishLike' in opts ? opts.englishLike : null;
      let dense = opts && 'dense' in opts ? opts.dense : null;
      let tall = opts && 'tall' in opts ? opts.tall : null;
      return new typography.Typography.__((t0 = black, t0 == null ? this.black : t0), (t0$ = white, t0$ == null ? this.white : t0$), (t0$0 = englishLike, t0$0 == null ? this.englishLike : t0$0), (t0$1 = dense, t0$1 == null ? this.dense : t0$1), (t0$2 = tall, t0$2 == null ? this.tall : t0$2));
    }
    static lerp(a, b, t) {
      if (a == null) dart.nullFailed(L0, 295, 37, "a");
      if (b == null) dart.nullFailed(L0, 295, 51, "b");
      if (t == null) dart.nullFailed(L0, 295, 61, "t");
      return new typography.Typography.__(text_theme.TextTheme.lerp(a.black, b.black, t), text_theme.TextTheme.lerp(a.white, b.white, t), text_theme.TextTheme.lerp(a.englishLike, b.englishLike, t), text_theme.TextTheme.lerp(a.dense, b.dense, t), text_theme.TextTheme.lerp(a.tall, b.tall, t));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return typography.Typography.is(other) && dart.equals(other.black, this.black) && dart.equals(other.white, this.white) && dart.equals(other.englishLike, this.englishLike) && dart.equals(other.dense, this.dense) && dart.equals(other.tall, this.tall);
    }
    get hashCode() {
      return ui.hashValues(this.black, this.white, this.englishLike, this.dense, this.tall);
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 331, 56, "properties");
      super.debugFillProperties(properties);
      let defaultTypography = typography.Typography.material2014();
      properties.add(new (DiagnosticsPropertyOfTextTheme()).new("black", this.black, {defaultValue: defaultTypography.black}));
      properties.add(new (DiagnosticsPropertyOfTextTheme()).new("white", this.white, {defaultValue: defaultTypography.white}));
      properties.add(new (DiagnosticsPropertyOfTextTheme()).new("englishLike", this.englishLike, {defaultValue: defaultTypography.englishLike}));
      properties.add(new (DiagnosticsPropertyOfTextTheme()).new("dense", this.dense, {defaultValue: defaultTypography.dense}));
      properties.add(new (DiagnosticsPropertyOfTextTheme()).new("tall", this.tall, {defaultValue: defaultTypography.tall}));
    }
  };
  (typography.Typography.__ = function(black, white, englishLike, dense, tall) {
    if (black == null) dart.nullFailed(L0, 200, 27, "black");
    if (white == null) dart.nullFailed(L0, 200, 39, "white");
    if (englishLike == null) dart.nullFailed(L0, 200, 51, "englishLike");
    if (dense == null) dart.nullFailed(L0, 200, 69, "dense");
    if (tall == null) dart.nullFailed(L0, 200, 81, "tall");
    this[black$] = black;
    this[white$] = white;
    this[englishLike$] = englishLike;
    this[dense$] = dense;
    this[tall$] = tall;
    if (!(black != null)) dart.assertFailed(null, L0, 201, 14, "black != null");
    if (!(white != null)) dart.assertFailed(null, L0, 202, 14, "white != null");
    if (!(englishLike != null)) dart.assertFailed(null, L0, 203, 14, "englishLike != null");
    if (!(dense != null)) dart.assertFailed(null, L0, 204, 14, "dense != null");
    if (!(tall != null)) dart.assertFailed(null, L0, 205, 14, "tall != null");
    ;
  }).prototype = typography.Typography.prototype;
  dart.addTypeTests(typography.Typography);
  dart.addTypeCaches(typography.Typography);
  dart.setMethodSignature(typography.Typography, () => ({
    __proto__: dart.getMethods(typography.Typography.__proto__),
    geometryThemeFor: dart.fnType(text_theme.TextTheme, [typography.ScriptCategory]),
    copyWith: dart.fnType(typography.Typography, [], {black: dart.nullable(text_theme.TextTheme), dense: dart.nullable(text_theme.TextTheme), englishLike: dart.nullable(text_theme.TextTheme), tall: dart.nullable(text_theme.TextTheme), white: dart.nullable(text_theme.TextTheme)}, {})
  }));
  dart.setLibraryUri(typography.Typography, L1);
  dart.setFieldSignature(typography.Typography, () => ({
    __proto__: dart.getFields(typography.Typography.__proto__),
    black: dart.finalFieldType(text_theme.TextTheme),
    white: dart.finalFieldType(text_theme.TextTheme),
    englishLike: dart.finalFieldType(text_theme.TextTheme),
    dense: dart.finalFieldType(text_theme.TextTheme),
    tall: dart.finalFieldType(text_theme.TextTheme)
  }));
  dart.defineExtensionMethods(typography.Typography, ['_equals']);
  dart.defineExtensionAccessors(typography.Typography, ['hashCode']);
  dart.defineLazy(typography.Typography, {
    /*typography.Typography.blackMountainView*/get blackMountainView() {
      return C10 || CT.C10;
    },
    /*typography.Typography.whiteMountainView*/get whiteMountainView() {
      return C28 || CT.C28;
    },
    /*typography.Typography.blackRedmond*/get blackRedmond() {
      return C44 || CT.C44;
    },
    /*typography.Typography.whiteRedmond*/get whiteRedmond() {
      return C58 || CT.C58;
    },
    /*typography.Typography._helsinkiFontFallbacks*/get _helsinkiFontFallbacks() {
      return C72 || CT.C72;
    },
    /*typography.Typography.blackHelsinki*/get blackHelsinki() {
      return C73 || CT.C73;
    },
    /*typography.Typography.whiteHelsinki*/get whiteHelsinki() {
      return C87 || CT.C87;
    },
    /*typography.Typography.blackCupertino*/get blackCupertino() {
      return C101 || CT.C101;
    },
    /*typography.Typography.whiteCupertino*/get whiteCupertino() {
      return C115 || CT.C115;
    },
    /*typography.Typography.englishLike2014*/get englishLike2014() {
      return C129 || CT.C129;
    },
    /*typography.Typography.englishLike2018*/get englishLike2018() {
      return C147 || CT.C147;
    },
    /*typography.Typography.dense2014*/get dense2014() {
      return C162 || CT.C162;
    },
    /*typography.Typography.dense2018*/get dense2018() {
      return C177 || CT.C177;
    },
    /*typography.Typography.tall2014*/get tall2014() {
      return C191 || CT.C191;
    },
    /*typography.Typography.tall2018*/get tall2018() {
      return C206 || CT.C206;
    }
  }, false);
  const Object_Diagnosticable$36$ = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36$.new = function() {
  }).prototype = Object_Diagnosticable$36$.prototype;
  dart.applyMixin(Object_Diagnosticable$36$, diagnostics.Diagnosticable);
  text_theme.TextTheme = class TextTheme extends Object_Diagnosticable$36$ {
    get headline1() {
      return this[headline1$];
    }
    set headline1(value) {
      super.headline1 = value;
    }
    get headline2() {
      return this[headline2$];
    }
    set headline2(value) {
      super.headline2 = value;
    }
    get headline3() {
      return this[headline3$];
    }
    set headline3(value) {
      super.headline3 = value;
    }
    get headline4() {
      return this[headline4$];
    }
    set headline4(value) {
      super.headline4 = value;
    }
    get headline5() {
      return this[headline5$];
    }
    set headline5(value) {
      super.headline5 = value;
    }
    get headline6() {
      return this[headline6$];
    }
    set headline6(value) {
      super.headline6 = value;
    }
    get subtitle1() {
      return this[subtitle1$];
    }
    set subtitle1(value) {
      super.subtitle1 = value;
    }
    get subtitle2() {
      return this[subtitle2$];
    }
    set subtitle2(value) {
      super.subtitle2 = value;
    }
    get bodyText1() {
      return this[bodyText1$];
    }
    set bodyText1(value) {
      super.bodyText1 = value;
    }
    get bodyText2() {
      return this[bodyText2$];
    }
    set bodyText2(value) {
      super.bodyText2 = value;
    }
    get caption() {
      return this[caption$];
    }
    set caption(value) {
      super.caption = value;
    }
    get button() {
      return this[button$];
    }
    set button(value) {
      super.button = value;
    }
    get overline() {
      return this[overline$];
    }
    set overline(value) {
      super.overline = value;
    }
    get display4() {
      return this.headline1;
    }
    get display3() {
      return this.headline2;
    }
    get display2() {
      return this.headline3;
    }
    get display1() {
      return this.headline4;
    }
    get headline() {
      return this.headline5;
    }
    get title() {
      return this.headline6;
    }
    get subhead() {
      return this.subtitle1;
    }
    get subtitle() {
      return this.subtitle2;
    }
    get body2() {
      return this.bodyText1;
    }
    get body1() {
      return this.bodyText2;
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12, t0$13, t0$14, t0$15, t0$16, t0$17, t0$18, t0$19, t0$20;
      let headline1 = opts && 'headline1' in opts ? opts.headline1 : null;
      let headline2 = opts && 'headline2' in opts ? opts.headline2 : null;
      let headline3 = opts && 'headline3' in opts ? opts.headline3 : null;
      let headline4 = opts && 'headline4' in opts ? opts.headline4 : null;
      let headline5 = opts && 'headline5' in opts ? opts.headline5 : null;
      let headline6 = opts && 'headline6' in opts ? opts.headline6 : null;
      let subtitle1 = opts && 'subtitle1' in opts ? opts.subtitle1 : null;
      let subtitle2 = opts && 'subtitle2' in opts ? opts.subtitle2 : null;
      let bodyText1 = opts && 'bodyText1' in opts ? opts.bodyText1 : null;
      let bodyText2 = opts && 'bodyText2' in opts ? opts.bodyText2 : null;
      let caption = opts && 'caption' in opts ? opts.caption : null;
      let button = opts && 'button' in opts ? opts.button : null;
      let overline = opts && 'overline' in opts ? opts.overline : null;
      let display4 = opts && 'display4' in opts ? opts.display4 : null;
      let display3 = opts && 'display3' in opts ? opts.display3 : null;
      let display2 = opts && 'display2' in opts ? opts.display2 : null;
      let display1 = opts && 'display1' in opts ? opts.display1 : null;
      let headline = opts && 'headline' in opts ? opts.headline : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let subhead = opts && 'subhead' in opts ? opts.subhead : null;
      let subtitle = opts && 'subtitle' in opts ? opts.subtitle : null;
      let body2 = opts && 'body2' in opts ? opts.body2 : null;
      let body1 = opts && 'body1' in opts ? opts.body1 : null;
      if (!(headline1 == null && headline2 == null && headline3 == null && headline4 == null && headline5 == null && headline6 == null && subtitle1 == null && subtitle2 == null && bodyText1 == null && bodyText2 == null || display4 == null && display3 == null && display2 == null && display1 == null && headline == null && title == null && subhead == null && subtitle == null && body2 == null && body1 == null)) dart.assertFailed("Cannot mix 2014 and 2018 terms in call to TextTheme.copyWith().", L2, 449, 7, "(headline1 == null && headline2 == null && headline3 == null && headline4 == null && headline5 == null && headline6 == null &&\n       subtitle1 == null && subtitle2 == null &&\n       bodyText1 == null && bodyText2 == null) ||\n      (display4 == null && display3 == null && display2 == null && display1 == null && headline == null && title == null &&\n       subhead == null && subtitle == null &&\n       body2 == null && body1 == null)");
      return new text_theme.TextTheme.new({headline1: (t0$ = (t0 = headline1, t0 == null ? display4 : t0), t0$ == null ? this.headline1 : t0$), headline2: (t0$1 = (t0$0 = headline2, t0$0 == null ? display3 : t0$0), t0$1 == null ? this.headline2 : t0$1), headline3: (t0$3 = (t0$2 = headline3, t0$2 == null ? display2 : t0$2), t0$3 == null ? this.headline3 : t0$3), headline4: (t0$5 = (t0$4 = headline4, t0$4 == null ? display1 : t0$4), t0$5 == null ? this.headline4 : t0$5), headline5: (t0$7 = (t0$6 = headline5, t0$6 == null ? headline : t0$6), t0$7 == null ? this.headline5 : t0$7), headline6: (t0$9 = (t0$8 = headline6, t0$8 == null ? title : t0$8), t0$9 == null ? this.headline6 : t0$9), subtitle1: (t0$11 = (t0$10 = subtitle1, t0$10 == null ? subhead : t0$10), t0$11 == null ? this.subtitle1 : t0$11), subtitle2: (t0$13 = (t0$12 = subtitle2, t0$12 == null ? subtitle : t0$12), t0$13 == null ? this.subtitle2 : t0$13), bodyText1: (t0$15 = (t0$14 = bodyText1, t0$14 == null ? body2 : t0$14), t0$15 == null ? this.bodyText1 : t0$15), bodyText2: (t0$17 = (t0$16 = bodyText2, t0$16 == null ? body1 : t0$16), t0$17 == null ? this.bodyText2 : t0$17), caption: (t0$18 = caption, t0$18 == null ? this.caption : t0$18), button: (t0$19 = button, t0$19 == null ? this.button : t0$19), overline: (t0$20 = overline, t0$20 == null ? this.overline : t0$20)});
    }
    merge(other) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12, t0$13, t0$14, t0$15, t0$16, t0$17, t0$18, t0$19, t0$20, t0$21, t0$22, t0$23;
      if (other == null) return this;
      return this.copyWith({headline1: (t0$ = (t0 = this.headline1, t0 == null ? null : t0.merge(other.headline1)), t0$ == null ? other.headline1 : t0$), headline2: (t0$1 = (t0$0 = this.headline2, t0$0 == null ? null : t0$0.merge(other.headline2)), t0$1 == null ? other.headline2 : t0$1), headline3: (t0$3 = (t0$2 = this.headline3, t0$2 == null ? null : t0$2.merge(other.headline3)), t0$3 == null ? other.headline3 : t0$3), headline4: (t0$5 = (t0$4 = this.headline4, t0$4 == null ? null : t0$4.merge(other.headline4)), t0$5 == null ? other.headline4 : t0$5), headline5: (t0$7 = (t0$6 = this.headline5, t0$6 == null ? null : t0$6.merge(other.headline5)), t0$7 == null ? other.headline5 : t0$7), headline6: (t0$9 = (t0$8 = this.headline6, t0$8 == null ? null : t0$8.merge(other.headline6)), t0$9 == null ? other.headline6 : t0$9), subtitle1: (t0$11 = (t0$10 = this.subtitle1, t0$10 == null ? null : t0$10.merge(other.subtitle1)), t0$11 == null ? other.subtitle1 : t0$11), subtitle2: (t0$13 = (t0$12 = this.subtitle2, t0$12 == null ? null : t0$12.merge(other.subtitle2)), t0$13 == null ? other.subtitle2 : t0$13), bodyText1: (t0$15 = (t0$14 = this.bodyText1, t0$14 == null ? null : t0$14.merge(other.bodyText1)), t0$15 == null ? other.bodyText1 : t0$15), bodyText2: (t0$17 = (t0$16 = this.bodyText2, t0$16 == null ? null : t0$16.merge(other.bodyText2)), t0$17 == null ? other.bodyText2 : t0$17), caption: (t0$19 = (t0$18 = this.caption, t0$18 == null ? null : t0$18.merge(other.caption)), t0$19 == null ? other.caption : t0$19), button: (t0$21 = (t0$20 = this.button, t0$20 == null ? null : t0$20.merge(other.button)), t0$21 == null ? other.button : t0$21), overline: (t0$23 = (t0$22 = this.overline, t0$22 == null ? null : t0$22.merge(other.overline)), t0$23 == null ? other.overline : t0$23)});
    }
    apply(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontSizeFactor = opts && 'fontSizeFactor' in opts ? opts.fontSizeFactor : 1;
      if (fontSizeFactor == null) dart.nullFailed(L2, 555, 12, "fontSizeFactor");
      let fontSizeDelta = opts && 'fontSizeDelta' in opts ? opts.fontSizeDelta : 0;
      if (fontSizeDelta == null) dart.nullFailed(L2, 556, 12, "fontSizeDelta");
      let displayColor = opts && 'displayColor' in opts ? opts.displayColor : null;
      let bodyColor = opts && 'bodyColor' in opts ? opts.bodyColor : null;
      let decoration = opts && 'decoration' in opts ? opts.decoration : null;
      let decorationColor = opts && 'decorationColor' in opts ? opts.decorationColor : null;
      let decorationStyle = opts && 'decorationStyle' in opts ? opts.decorationStyle : null;
      return new text_theme.TextTheme.new({headline1: (t0 = this.headline1, t0 == null ? null : t0.apply({color: displayColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), headline2: (t0$ = this.headline2, t0$ == null ? null : t0$.apply({color: displayColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), headline3: (t0$0 = this.headline3, t0$0 == null ? null : t0$0.apply({color: displayColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), headline4: (t0$1 = this.headline4, t0$1 == null ? null : t0$1.apply({color: displayColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), headline5: (t0$2 = this.headline5, t0$2 == null ? null : t0$2.apply({color: bodyColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), headline6: (t0$3 = this.headline6, t0$3 == null ? null : t0$3.apply({color: bodyColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), subtitle1: (t0$4 = this.subtitle1, t0$4 == null ? null : t0$4.apply({color: bodyColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), subtitle2: (t0$5 = this.subtitle2, t0$5 == null ? null : t0$5.apply({color: bodyColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), bodyText1: (t0$6 = this.bodyText1, t0$6 == null ? null : t0$6.apply({color: bodyColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), bodyText2: (t0$7 = this.bodyText2, t0$7 == null ? null : t0$7.apply({color: bodyColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), caption: (t0$8 = this.caption, t0$8 == null ? null : t0$8.apply({color: displayColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), button: (t0$9 = this.button, t0$9 == null ? null : t0$9.apply({color: bodyColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), overline: (t0$10 = this.overline, t0$10 == null ? null : t0$10.apply({color: bodyColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta}))});
    }
    static lerp(a, b, t) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12, t0$13, t0$14, t0$15, t0$16, t0$17, t0$18, t0$19, t0$20, t0$21, t0$22, t0$23;
      if (t == null) dart.nullFailed(L2, 687, 60, "t");
      if (!(t != null)) dart.assertFailed(null, L2, 688, 12, "t != null");
      return new text_theme.TextTheme.new({headline1: text_style.TextStyle.lerp((t0 = a, t0 == null ? null : t0.headline1), (t0$ = b, t0$ == null ? null : t0$.headline1), t), headline2: text_style.TextStyle.lerp((t0$0 = a, t0$0 == null ? null : t0$0.headline2), (t0$1 = b, t0$1 == null ? null : t0$1.headline2), t), headline3: text_style.TextStyle.lerp((t0$2 = a, t0$2 == null ? null : t0$2.headline3), (t0$3 = b, t0$3 == null ? null : t0$3.headline3), t), headline4: text_style.TextStyle.lerp((t0$4 = a, t0$4 == null ? null : t0$4.headline4), (t0$5 = b, t0$5 == null ? null : t0$5.headline4), t), headline5: text_style.TextStyle.lerp((t0$6 = a, t0$6 == null ? null : t0$6.headline5), (t0$7 = b, t0$7 == null ? null : t0$7.headline5), t), headline6: text_style.TextStyle.lerp((t0$8 = a, t0$8 == null ? null : t0$8.headline6), (t0$9 = b, t0$9 == null ? null : t0$9.headline6), t), subtitle1: text_style.TextStyle.lerp((t0$10 = a, t0$10 == null ? null : t0$10.subtitle1), (t0$11 = b, t0$11 == null ? null : t0$11.subtitle1), t), subtitle2: text_style.TextStyle.lerp((t0$12 = a, t0$12 == null ? null : t0$12.subtitle2), (t0$13 = b, t0$13 == null ? null : t0$13.subtitle2), t), bodyText1: text_style.TextStyle.lerp((t0$14 = a, t0$14 == null ? null : t0$14.bodyText1), (t0$15 = b, t0$15 == null ? null : t0$15.bodyText1), t), bodyText2: text_style.TextStyle.lerp((t0$16 = a, t0$16 == null ? null : t0$16.bodyText2), (t0$17 = b, t0$17 == null ? null : t0$17.bodyText2), t), caption: text_style.TextStyle.lerp((t0$18 = a, t0$18 == null ? null : t0$18.caption), (t0$19 = b, t0$19 == null ? null : t0$19.caption), t), button: text_style.TextStyle.lerp((t0$20 = a, t0$20 == null ? null : t0$20.button), (t0$21 = b, t0$21 == null ? null : t0$21.button), t), overline: text_style.TextStyle.lerp((t0$22 = a, t0$22 == null ? null : t0$22.overline), (t0$23 = b, t0$23 == null ? null : t0$23.overline), t)});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return text_theme.TextTheme.is(other) && dart.equals(this.headline1, other.headline1) && dart.equals(this.headline2, other.headline2) && dart.equals(this.headline3, other.headline3) && dart.equals(this.headline4, other.headline4) && dart.equals(this.headline5, other.headline5) && dart.equals(this.headline6, other.headline6) && dart.equals(this.subtitle1, other.subtitle1) && dart.equals(this.subtitle2, other.subtitle2) && dart.equals(this.bodyText1, other.bodyText1) && dart.equals(this.bodyText2, other.bodyText2) && dart.equals(this.caption, other.caption) && dart.equals(this.button, other.button) && dart.equals(this.overline, other.overline);
    }
    get hashCode() {
      return ui.hashValues(this.headline1, this.headline2, this.headline3, this.headline4, this.headline5, this.headline6, this.subtitle1, this.subtitle2, this.bodyText1, this.bodyText2, this.caption, this.button, this.overline);
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L2, 749, 56, "properties");
      super.debugFillProperties(properties);
      let defaultTheme = typography.Typography.material2018({platform: platform.defaultTargetPlatform}).black;
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("headline1", this.headline1, {defaultValue: defaultTheme.headline1}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("headline2", this.headline2, {defaultValue: defaultTheme.headline2}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("headline3", this.headline3, {defaultValue: defaultTheme.headline3}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("headline4", this.headline4, {defaultValue: defaultTheme.headline4}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("headline5", this.headline5, {defaultValue: defaultTheme.headline5}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("headline6", this.headline6, {defaultValue: defaultTheme.headline6}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("subtitle1", this.subtitle1, {defaultValue: defaultTheme.subtitle1}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("subtitle2", this.subtitle2, {defaultValue: defaultTheme.subtitle2}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("bodyText1", this.bodyText1, {defaultValue: defaultTheme.bodyText1}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("bodyText2", this.bodyText2, {defaultValue: defaultTheme.bodyText2}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("caption", this.caption, {defaultValue: defaultTheme.caption}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("button", this.button, {defaultValue: defaultTheme.button}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("overline", this.overline, {defaultValue: defaultTheme.overline}));
    }
  };
  (text_theme.TextTheme.new = function(opts) {
    let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7;
    let headline1 = opts && 'headline1' in opts ? opts.headline1 : null;
    let headline2 = opts && 'headline2' in opts ? opts.headline2 : null;
    let headline3 = opts && 'headline3' in opts ? opts.headline3 : null;
    let headline4 = opts && 'headline4' in opts ? opts.headline4 : null;
    let headline5 = opts && 'headline5' in opts ? opts.headline5 : null;
    let headline6 = opts && 'headline6' in opts ? opts.headline6 : null;
    let subtitle1 = opts && 'subtitle1' in opts ? opts.subtitle1 : null;
    let subtitle2 = opts && 'subtitle2' in opts ? opts.subtitle2 : null;
    let bodyText1 = opts && 'bodyText1' in opts ? opts.bodyText1 : null;
    let bodyText2 = opts && 'bodyText2' in opts ? opts.bodyText2 : null;
    let caption = opts && 'caption' in opts ? opts.caption : null;
    let button = opts && 'button' in opts ? opts.button : null;
    let overline = opts && 'overline' in opts ? opts.overline : null;
    let display4 = opts && 'display4' in opts ? opts.display4 : null;
    let display3 = opts && 'display3' in opts ? opts.display3 : null;
    let display2 = opts && 'display2' in opts ? opts.display2 : null;
    let display1 = opts && 'display1' in opts ? opts.display1 : null;
    let headline = opts && 'headline' in opts ? opts.headline : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let subhead = opts && 'subhead' in opts ? opts.subhead : null;
    let subtitle = opts && 'subtitle' in opts ? opts.subtitle : null;
    let body2 = opts && 'body2' in opts ? opts.body2 : null;
    let body1 = opts && 'body1' in opts ? opts.body1 : null;
    this[caption$] = caption;
    this[button$] = button;
    this[overline$] = overline;
    if (!(headline1 == null && headline2 == null && headline3 == null && headline4 == null && headline5 == null && headline6 == null && subtitle1 == null && subtitle2 == null && bodyText1 == null && bodyText2 == null || display4 == null && display3 == null && display2 == null && display1 == null && headline == null && title == null && subhead == null && subtitle == null && body2 == null && body1 == null)) dart.assertFailed("Cannot mix 2014 and 2018 terms in call to TextTheme() constructor.", L2, 178, 10, "(headline1 == null && headline2 == null && headline3 == null && headline4 == null && headline5 == null && headline6 == null &&\n          subtitle1 == null && subtitle2 == null &&\n          bodyText1 == null && bodyText2 == null) ||\n         (display4 == null && display3 == null && display2 == null && display1 == null && headline == null && title == null &&\n          subhead == null && subtitle == null &&\n          body2 == null && body1 == null)");
    this[headline1$] = (t0 = headline1, t0 == null ? display4 : t0);
    this[headline2$] = (t0$ = headline2, t0$ == null ? display3 : t0$);
    this[headline3$] = (t0$0 = headline3, t0$0 == null ? display2 : t0$0);
    this[headline4$] = (t0$1 = headline4, t0$1 == null ? display1 : t0$1);
    this[headline5$] = (t0$2 = headline5, t0$2 == null ? headline : t0$2);
    this[headline6$] = (t0$3 = headline6, t0$3 == null ? title : t0$3);
    this[subtitle1$] = (t0$4 = subtitle1, t0$4 == null ? subhead : t0$4);
    this[subtitle2$] = (t0$5 = subtitle2, t0$5 == null ? subtitle : t0$5);
    this[bodyText1$] = (t0$6 = bodyText1, t0$6 == null ? body2 : t0$6);
    this[bodyText2$] = (t0$7 = bodyText2, t0$7 == null ? body1 : t0$7);
    ;
  }).prototype = text_theme.TextTheme.prototype;
  dart.addTypeTests(text_theme.TextTheme);
  dart.addTypeCaches(text_theme.TextTheme);
  const headline1$ = TextTheme_headline1;
  const headline2$ = TextTheme_headline2;
  const headline3$ = TextTheme_headline3;
  const headline4$ = TextTheme_headline4;
  const headline5$ = TextTheme_headline5;
  const headline6$ = TextTheme_headline6;
  const subtitle1$ = TextTheme_subtitle1;
  const subtitle2$ = TextTheme_subtitle2;
  const bodyText1$ = TextTheme_bodyText1;
  const bodyText2$ = TextTheme_bodyText2;
  const caption$ = TextTheme_caption;
  const button$ = TextTheme_button;
  const overline$ = TextTheme_overline;
  dart.setMethodSignature(text_theme.TextTheme, () => ({
    __proto__: dart.getMethods(text_theme.TextTheme.__proto__),
    copyWith: dart.fnType(text_theme.TextTheme, [], {body1: dart.nullable(text_style.TextStyle), body2: dart.nullable(text_style.TextStyle), bodyText1: dart.nullable(text_style.TextStyle), bodyText2: dart.nullable(text_style.TextStyle), button: dart.nullable(text_style.TextStyle), caption: dart.nullable(text_style.TextStyle), display1: dart.nullable(text_style.TextStyle), display2: dart.nullable(text_style.TextStyle), display3: dart.nullable(text_style.TextStyle), display4: dart.nullable(text_style.TextStyle), headline: dart.nullable(text_style.TextStyle), headline1: dart.nullable(text_style.TextStyle), headline2: dart.nullable(text_style.TextStyle), headline3: dart.nullable(text_style.TextStyle), headline4: dart.nullable(text_style.TextStyle), headline5: dart.nullable(text_style.TextStyle), headline6: dart.nullable(text_style.TextStyle), overline: dart.nullable(text_style.TextStyle), subhead: dart.nullable(text_style.TextStyle), subtitle: dart.nullable(text_style.TextStyle), subtitle1: dart.nullable(text_style.TextStyle), subtitle2: dart.nullable(text_style.TextStyle), title: dart.nullable(text_style.TextStyle)}, {}),
    merge: dart.fnType(text_theme.TextTheme, [dart.nullable(text_theme.TextTheme)]),
    apply: dart.fnType(text_theme.TextTheme, [], {bodyColor: dart.nullable(ui.Color), decoration: dart.nullable(ui.TextDecoration), decorationColor: dart.nullable(ui.Color), decorationStyle: dart.nullable(ui.TextDecorationStyle), displayColor: dart.nullable(ui.Color), fontFamily: dart.nullable(core.String), fontSizeDelta: core.double, fontSizeFactor: core.double}, {})
  }));
  dart.setGetterSignature(text_theme.TextTheme, () => ({
    __proto__: dart.getGetters(text_theme.TextTheme.__proto__),
    display4: dart.nullable(text_style.TextStyle),
    display3: dart.nullable(text_style.TextStyle),
    display2: dart.nullable(text_style.TextStyle),
    display1: dart.nullable(text_style.TextStyle),
    headline: dart.nullable(text_style.TextStyle),
    title: dart.nullable(text_style.TextStyle),
    subhead: dart.nullable(text_style.TextStyle),
    subtitle: dart.nullable(text_style.TextStyle),
    body2: dart.nullable(text_style.TextStyle),
    body1: dart.nullable(text_style.TextStyle)
  }));
  dart.setLibraryUri(text_theme.TextTheme, L3);
  dart.setFieldSignature(text_theme.TextTheme, () => ({
    __proto__: dart.getFields(text_theme.TextTheme.__proto__),
    headline1: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    headline2: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    headline3: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    headline4: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    headline5: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    headline6: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    subtitle1: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    subtitle2: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    bodyText1: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    bodyText2: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    caption: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    button: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    overline: dart.finalFieldType(dart.nullable(text_style.TextStyle))
  }));
  dart.defineExtensionMethods(text_theme.TextTheme, ['_equals']);
  dart.defineExtensionAccessors(text_theme.TextTheme, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/material/typography.dart", {
    "package:flutter/src/material/typography.dart": typography,
    "package:flutter/src/material/text_theme.dart": text_theme
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["typography.dart","text_theme.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuCA;;;QAlBK;;;;;EAkBL;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgLkB;;;;;;IAWA;;;;;;IAWA;;;;;;IAWA;;;;;;IAUA;;;;;;;;UA7IE;UACL;UACA;UACA;UACA;UACA;AAEX,YAAO,AAAiB,QAAT,IAAI,QAAS,KAAK,IAAI,QAAQ,KAAK,IAAI;AACtD,YAAkB,qCAChB,QAAQ,EACR,KAAK,EAAE,KAAK,GACA,KAAZ,WAAW,QAAX,OAAe,8CACT,MAAN,KAAK,SAAL,OAAS,yCACJ,OAAL,IAAI,UAAJ,OAAQ;IAEZ;;;UAakB;UACL;UACA;UACA;UACA;UACA;AAEX,YAAO,AAAiB,QAAT,IAAI,QAAS,KAAK,IAAI,QAAQ,KAAK,IAAI;AACtD,YAAkB,qCAChB,QAAQ,EACR,KAAK,EAAE,KAAK,GACA,KAAZ,WAAW,QAAX,OAAe,8CACT,MAAN,KAAK,SAAL,OAAS,yCACJ,OAAL,IAAI,UAAJ,OAAQ;IAEZ;yBAGkB,UACL,OACA,OACD,aACA,OACA;UAFA;UACA;UACA;AAEV,YAAO,AAAiB,QAAT,IAAI,QAAS,KAAK,IAAI,QAAQ,KAAK,IAAI;AACtD,YAAO,AAAY,WAAD,IAAI;AACtB,YAAO,AAAM,KAAD,IAAI;AAChB,YAAO,AAAK,IAAD,IAAI;AACf,cAAQ,QAAQ;;;;AAGY,UAAxB,AAAM,KAAD,IAAC,OAAN,QAAU,uCAAJ;AACkB,UAAxB,AAAM,KAAD,IAAC,OAAN,QAAU,uCAAJ;AACN;;;;;AAG2B,UAA3B,AAAM,KAAD,IAAC,OAAN,QAAU,0CAAJ;AACqB,UAA3B,AAAM,KAAD,IAAC,OAAN,QAAU,0CAAJ;AACN;;;;AAEsB,UAAtB,AAAM,KAAD,IAAC,OAAN,QAAU,qCAAJ;AACgB,UAAtB,AAAM,KAAD,IAAC,OAAN,QAAU,qCAAJ;AACN;;;;AAEuB,UAAvB,AAAM,KAAD,IAAC,OAAN,QAAU,sCAAJ;AACiB,UAAvB,AAAM,KAAD,IAAC,OAAN,QAAU,sCAAJ;AACN;;;;AAEA;;;;AApBJ;;;AAsBA,YAAkB,8BAAO,eAAL,KAAK,GAAQ,eAAL,KAAK,GAAG,WAAW,EAAE,KAAK,EAAE,IAAI;IAC9D;;UAgE0C;AACxC,YAAO,AAAS,QAAD,IAAI;AACnB,cAAQ,QAAQ;;;AAEZ,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AANX;;;IAQF;;;UAKa;UACA;UACA;UACA;UACA;AAEX,YAAkB,+BACV,KAAN,KAAK,QAAL,OAAc,mBACR,MAAN,KAAK,SAAL,OAAc,oBACF,OAAZ,WAAW,UAAX,OAAoB,2BACd,OAAN,KAAK,UAAL,OAAc,qBACT,OAAL,IAAI,UAAJ,OAAa;IAEjB;gBAKkC,GAAc,GAAU;UAAxB;UAAc;UAAU;AACxD,YAAkB,8BACN,0BAAK,AAAE,CAAD,QAAQ,AAAE,CAAD,QAAQ,CAAC,GACxB,0BAAK,AAAE,CAAD,QAAQ,AAAE,CAAD,QAAQ,CAAC,GACxB,0BAAK,AAAE,CAAD,cAAc,AAAE,CAAD,cAAc,CAAC,GACpC,0BAAK,AAAE,CAAD,QAAQ,AAAE,CAAD,QAAQ,CAAC,GACxB,0BAAK,AAAE,CAAD,OAAO,AAAE,CAAD,OAAO,CAAC;IAEpC;;UAGwB;AACtB,UAAI,AAAU,SAAM,KAAK,EACvB,MAAO;AACT,uBAAU,iBAAN,KAAK,GAAgB,qBACvB,MAAO;AACT,YAAa,AAKT,0BALG,KAAK,KACO,YAAZ,AAAM,KAAD,QAAU,eACH,YAAZ,AAAM,KAAD,QAAU,eACG,YAAlB,AAAM,KAAD,cAAgB,qBACT,YAAZ,AAAM,KAAD,QAAU,eACJ,YAAX,AAAM,KAAD,OAAS;IACvB;;AAIE,YAAO,eACL,YACA,YACA,kBACA,YACA;IAEJ;;UAGqD;AACd,MAA/B,0BAAoB,UAAU;AACnB,8BAA+B;AACqD,MAArG,AAAW,UAAD,KAAK,2CAA+B,SAAS,2BAAqB,AAAkB,iBAAD;AACQ,MAArG,AAAW,UAAD,KAAK,2CAA+B,SAAS,2BAAqB,AAAkB,iBAAD;AAC0B,MAAvH,AAAW,UAAD,KAAK,2CAA+B,eAAe,iCAA2B,AAAkB,iBAAD;AACJ,MAArG,AAAW,UAAD,KAAK,2CAA+B,SAAS,2BAAqB,AAAkB,iBAAD;AACK,MAAlG,AAAW,UAAD,KAAK,2CAA+B,QAAQ,0BAAoB,AAAkB,iBAAD;IAC7F;;uCA3IwB,OAAY,OAAY,aAAkB,OAAY;QAAtD;QAAY;QAAY;QAAkB;QAAY;IAAtD;IAAY;IAAY;IAAkB;IAAY;UACnE,AAAM,KAAD,IAAI;UACT,AAAM,KAAD,IAAI;UACT,AAAY,WAAD,IAAI;UACf,AAAM,KAAD,IAAI;UACT,AAAK,IAAD,IAAI;;EAAK;;;;;;;;;;;;;;;;;;;;MA2ID,uCAAiB;;;MAmBjB,uCAAiB;;;MAmBjB,kCAAY;;;MAmBZ,kCAAY;;;MAgBT,4CAAsB;;;MAMzB,mCAAa;;;MAmBb,mCAAa;;;MAmBb,oCAAc;;;MAmBd,oCAAc;;;MAkBd,qCAAe;;;MAqBf,qCAAe;;;MAkBf,+BAAS;;;MAqBT,+BAAS;;;MAiBT,8BAAQ;;;MAoBR,8BAAQ;;;;;;;;;IC/Yd;;;;;;IAKA;;;;;;IAGA;;;;;;IAGA;;;;;;IAIA;;;;;;IAIA;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;IAKA;;;;;;;AAUU;IAAS;;AAUT;IAAS;;AAUT;IAAS;;AAUT;IAAS;;AAUT;IAAS;;AAUZ;IAAS;;AAUP;IAAS;;AAUR;IAAS;;AAWZ;IAAS;;AAWT;IAAS;;;UA4CpB;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UAKA;UAKA;UAKA;UAKA;UAKA;UAKA;UAKA;UAKA;UAKA;UAKA;AAEX,YACG,AAAU,AAE8B,SAF/B,IAAI,QAAQ,AAAU,SAAD,IAAI,QAAQ,AAAU,SAAD,IAAI,QAAQ,AAAU,SAAD,IAAI,QAAQ,AAAU,SAAD,IAAI,QAAQ,AAAU,SAAD,IAAI,QACtH,AAAU,SAAD,IAAI,QAAQ,AAAU,SAAD,IAAI,QAClC,AAAU,SAAD,IAAI,QAAQ,AAAU,SAAD,IAAI,QAClC,AAAS,QAAD,IAAI,QAAQ,AAAS,QAAD,IAAI,QAAQ,AAAS,QAAD,IAAI,QAAQ,AAAS,QAAD,IAAI,QAAQ,AAAS,QAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,QAC7G,AAAQ,OAAD,IAAI,QAAQ,AAAS,QAAD,IAAI,QAC/B,AAAM,KAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,yBAAO;AACpC,YAAO,2CAC4B,OAAZ,KAAV,SAAS,QAAT,OAAa,QAAQ,eAAX,OAAoB,mCACR,QAAZ,OAAV,SAAS,UAAT,OAAa,QAAQ,kBAAX,OAAoB,oCACR,QAAZ,OAAV,SAAS,UAAT,OAAa,QAAQ,kBAAX,OAAoB,oCACR,QAAZ,OAAV,SAAS,UAAT,OAAa,QAAQ,kBAAX,OAAoB,oCACR,QAAZ,OAAV,SAAS,UAAT,OAAa,QAAQ,kBAAX,OAAoB,oCACX,QAAT,OAAV,SAAS,UAAT,OAAa,KAAK,kBAAR,OAAiB,oCACN,SAAX,QAAV,SAAS,WAAT,OAAa,OAAO,oBAAV,OAAmB,qCACP,SAAZ,QAAV,SAAS,WAAT,OAAa,QAAQ,oBAAX,OAAoB,qCACX,SAAT,QAAV,SAAS,WAAT,OAAa,KAAK,oBAAR,OAAiB,qCACR,SAAT,QAAV,SAAS,WAAT,OAAa,KAAK,oBAAR,OAAiB,mCACrB,QAAR,OAAO,WAAP,OAAgB,gCACV,QAAP,MAAM,WAAN,OAAe,iCACJ,QAAT,QAAQ,WAAR,OAAiB;IAE/B;UAqD2B;;AACzB,UAAI,AAAM,KAAD,IAAI,MACX,MAAO;AACT,YAAO,4BACwC,yCAAlC,OAAW,SAAM,AAAM,KAAD,qBAAtB,OAAqC,AAAM,KAAD,+BACR,8CAAlC,OAAW,WAAM,AAAM,KAAD,sBAAtB,OAAqC,AAAM,KAAD,gCACR,8CAAlC,OAAW,WAAM,AAAM,KAAD,sBAAtB,OAAqC,AAAM,KAAD,gCACR,8CAAlC,OAAW,WAAM,AAAM,KAAD,sBAAtB,OAAqC,AAAM,KAAD,gCACR,8CAAlC,OAAW,WAAM,AAAM,KAAD,sBAAtB,OAAqC,AAAM,KAAD,gCACR,8CAAlC,OAAW,WAAM,AAAM,KAAD,sBAAtB,OAAqC,AAAM,KAAD,gCACR,iDAAlC,OAAW,YAAM,AAAM,KAAD,uBAAtB,OAAqC,AAAM,KAAD,iCACR,iDAAlC,OAAW,YAAM,AAAM,KAAD,uBAAtB,OAAqC,AAAM,KAAD,iCACR,iDAAlC,OAAW,YAAM,AAAM,KAAD,uBAAtB,OAAqC,AAAM,KAAD,iCACR,iDAAlC,OAAW,YAAM,AAAM,KAAD,uBAAtB,OAAqC,AAAM,KAAD,+BACd,+CAA9B,OAAS,YAAM,AAAM,KAAD,qBAApB,OAAiC,AAAM,KAAD,4BACX,8CAA5B,OAAQ,YAAM,AAAM,KAAD,oBAAnB,OAA+B,AAAM,KAAD,6BACF,gDAAhC,OAAU,YAAM,AAAM,KAAD,sBAArB,OAAmC,AAAM,KAAD;IAEtD;;;UAaU;UACD;;UACA;;UACA;UACA;UACS;UACT;UACc;AAErB,YAAO,6EACM,OAAW,iBACb,YAAY,cACP,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,qDAEnB,OAAW,kBACb,YAAY,cACP,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,uDAEnB,OAAW,mBACb,YAAY,cACP,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,uDAEnB,OAAW,mBACb,YAAY,cACP,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,uDAEnB,OAAW,mBACb,SAAS,cACJ,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,uDAEnB,OAAW,mBACb,SAAS,cACJ,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,uDAEnB,OAAW,mBACb,SAAS,cACJ,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,uDAEnB,OAAW,mBACb,SAAS,cACJ,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,uDAEnB,OAAW,mBACb,SAAS,cACJ,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,uDAEnB,OAAW,mBACb,SAAS,cACJ,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,mDAErB,OAAS,mBACT,YAAY,cACP,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,iDAEtB,OAAQ,mBACP,SAAS,cACJ,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,uDAEpB,OAAU,oBACX,SAAS,cACJ,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa;IAGlC;gBAKiC,GAAc,GAAU;;;AACvD,YAAO,AAAE,CAAD,IAAI;AACZ,YAAO,0CACgB,gCAAK,CAAC,eAAD,OAAG,sBAAW,CAAC,gBAAD,OAAG,gBAAW,CAAC,cAClC,kCAAK,CAAC,iBAAD,OAAG,yBAAW,CAAC,iBAAD,OAAG,iBAAW,CAAC,cAClC,kCAAK,CAAC,iBAAD,OAAG,yBAAW,CAAC,iBAAD,OAAG,iBAAW,CAAC,cAClC,kCAAK,CAAC,iBAAD,OAAG,yBAAW,CAAC,iBAAD,OAAG,iBAAW,CAAC,cAClC,kCAAK,CAAC,iBAAD,OAAG,yBAAW,CAAC,iBAAD,OAAG,iBAAW,CAAC,cAClC,kCAAK,CAAC,iBAAD,OAAG,yBAAW,CAAC,iBAAD,OAAG,iBAAW,CAAC,cAClC,mCAAK,CAAC,kBAAD,OAAG,2BAAW,CAAC,kBAAD,OAAG,kBAAW,CAAC,cAClC,mCAAK,CAAC,kBAAD,OAAG,2BAAW,CAAC,kBAAD,OAAG,kBAAW,CAAC,cAClC,mCAAK,CAAC,kBAAD,OAAG,2BAAW,CAAC,kBAAD,OAAG,kBAAW,CAAC,cAClC,mCAAK,CAAC,kBAAD,OAAG,2BAAW,CAAC,kBAAD,OAAG,kBAAW,CAAC,YACpC,mCAAK,CAAC,kBAAD,OAAG,yBAAS,CAAC,kBAAD,OAAG,gBAAS,CAAC,WAC/B,mCAAK,CAAC,kBAAD,OAAG,wBAAQ,CAAC,kBAAD,OAAG,eAAQ,CAAC,aAC1B,mCAAK,CAAC,kBAAD,OAAG,0BAAU,CAAC,kBAAD,OAAG,iBAAU,CAAC;IAExD;;UAGwB;AACtB,UAAI,AAAU,SAAM,KAAK,EACvB,MAAO;AACT,uBAAU,iBAAN,KAAK,GAAgB,qBACvB,MAAO;AACT,YAAa,AAaX,yBAbK,KAAK,KACG,YAAV,gBAAa,AAAM,KAAD,eACR,YAAV,gBAAa,AAAM,KAAD,eACR,YAAV,gBAAa,AAAM,KAAD,eACR,YAAV,gBAAa,AAAM,KAAD,eACR,YAAV,gBAAa,AAAM,KAAD,eACR,YAAV,gBAAa,AAAM,KAAD,eACR,YAAV,gBAAa,AAAM,KAAD,eACR,YAAV,gBAAa,AAAM,KAAD,eACR,YAAV,gBAAa,AAAM,KAAD,eACR,YAAV,gBAAa,AAAM,KAAD,eACV,YAAR,cAAW,AAAM,KAAD,aACT,YAAP,aAAU,AAAM,KAAD,YACN,YAAT,eAAY,AAAM,KAAD;IACxB;;AAKE,YAAO,eACL,gBACA,gBACA,gBACA,gBACA,gBACA,gBACA,gBACA,gBACA,gBACA,gBACA,cACA,aACA;IAEJ;;UAGqD;AACd,MAA/B,0BAAoB,UAAU;AACpB,yBAA0B,AAA8C,8CAAvB;AAC2C,MAA5G,AAAW,UAAD,KAAK,2CAA+B,aAAa,+BAAyB,AAAa,YAAD;AACY,MAA5G,AAAW,UAAD,KAAK,2CAA+B,aAAa,+BAAyB,AAAa,YAAD;AACY,MAA5G,AAAW,UAAD,KAAK,2CAA+B,aAAa,+BAAyB,AAAa,YAAD;AACY,MAA5G,AAAW,UAAD,KAAK,2CAA+B,aAAa,+BAAyB,AAAa,YAAD;AACY,MAA5G,AAAW,UAAD,KAAK,2CAA+B,aAAa,+BAAyB,AAAa,YAAD;AACY,MAA5G,AAAW,UAAD,KAAK,2CAA+B,aAAa,+BAAyB,AAAa,YAAD;AACY,MAA5G,AAAW,UAAD,KAAK,2CAA+B,aAAa,+BAAyB,AAAa,YAAD;AACY,MAA5G,AAAW,UAAD,KAAK,2CAA+B,aAAa,+BAAyB,AAAa,YAAD;AACY,MAA5G,AAAW,UAAD,KAAK,2CAA+B,aAAa,+BAAyB,AAAa,YAAD;AACY,MAA5G,AAAW,UAAD,KAAK,2CAA+B,aAAa,+BAAyB,AAAa,YAAD;AACM,MAAtG,AAAW,UAAD,KAAK,2CAA+B,WAAW,6BAAuB,AAAa,YAAD;AACO,MAAnG,AAAW,UAAD,KAAK,2CAA+B,UAAU,4BAAsB,AAAa,YAAD;AACe,MAAzG,AAAW,UAAD,KAAK,2CAA+B,YAAY,8BAAwB,AAAa,YAAD;IAChG;;;;QA3oBa;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACN;QACA;QACA;QAKM;QAKA;QAKA;QAKA;QAKA;QAKA;QAKA;QAKA;QAKA;QAKA;IApDN;IACA;IACA;UAoDC,AAAU,AAE8B,SAF/B,IAAI,QAAQ,AAAU,SAAD,IAAI,QAAQ,AAAU,SAAD,IAAI,QAAQ,AAAU,SAAD,IAAI,QAAQ,AAAU,SAAD,IAAI,QAAQ,AAAU,SAAD,IAAI,QACtH,AAAU,SAAD,IAAI,QAAQ,AAAU,SAAD,IAAI,QAClC,AAAU,SAAD,IAAI,QAAQ,AAAU,SAAD,IAAI,QAClC,AAAS,QAAD,IAAI,QAAQ,AAAS,QAAD,IAAI,QAAQ,AAAS,QAAD,IAAI,QAAQ,AAAS,QAAD,IAAI,QAAQ,AAAS,QAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,QAC7G,AAAQ,OAAD,IAAI,QAAQ,AAAS,QAAD,IAAI,QAC/B,AAAM,KAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,yBAAO;IAC1B,oBAAY,KAAV,SAAS,QAAT,OAAa,QAAQ;IACvB,oBAAY,MAAV,SAAS,SAAT,OAAa,QAAQ;IACvB,oBAAY,OAAV,SAAS,UAAT,OAAa,QAAQ;IACvB,oBAAY,OAAV,SAAS,UAAT,OAAa,QAAQ;IACvB,oBAAY,OAAV,SAAS,UAAT,OAAa,QAAQ;IACvB,oBAAY,OAAV,SAAS,UAAT,OAAa,KAAK;IACpB,oBAAY,OAAV,SAAS,UAAT,OAAa,OAAO;IACtB,oBAAY,OAAV,SAAS,UAAT,OAAa,QAAQ;IACvB,oBAAY,OAAV,SAAS,UAAT,OAAa,KAAK;IACpB,oBAAY,OAAV,SAAS,UAAT,OAAa,KAAK","file":"../../../../../../../../../../packages/flutter/src/material/typography.dart.lib.js"}');
  // Exports:
  return {
    src__material__typography: typography,
    src__material__text_theme: text_theme
  };
}));

//# sourceMappingURL=typography.dart.lib.js.map
