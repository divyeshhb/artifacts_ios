define(['dart_sdk', 'packages/flutter/src/cupertino/text_theme.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/rendering/proxy_box.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/widgets/icon_theme.dart', 'packages/flutter/src/widgets/icon_theme_data.dart', 'packages/flutter/src/gestures/tap.dart'], (function load__packages__flutter__src__cupertino__button_dart(dart_sdk, packages__flutter__src__cupertino__text_theme$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__rendering__proxy_box$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__widgets__icon_theme$46dart, packages__flutter__src__widgets__icon_theme_data$46dart, packages__flutter__src__gestures__tap$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const colors = packages__flutter__src__cupertino__text_theme$46dart.src__cupertino__colors;
  const theme = packages__flutter__src__cupertino__text_theme$46dart.src__cupertino__theme;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const gesture_detector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__gesture_detector;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const transitions = packages__flutter__src__widgets__widget_span$46dart.src__widgets__transitions;
  const container = packages__flutter__src__widgets__widget_span$46dart.src__widgets__container;
  const text = packages__flutter__src__widgets__widget_span$46dart.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const ticker_provider = packages__flutter__src__widgets__widget_span$46dart.src__widgets__ticker_provider;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const icon_theme = packages__flutter__src__widgets__icon_theme$46dart.src__widgets__icon_theme;
  const icon_theme_data = packages__flutter__src__widgets__icon_theme_data$46dart.src__widgets__icon_theme_data;
  const tap = packages__flutter__src__gestures__tap$46dart.src__gestures__tap;
  var button = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  var voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/button.dart";
  var L1 = "package:flutter/src/cupertino/button.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1115059840
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 678720640
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 762738304
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 343176320
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: colors.CupertinoDynamicColor.prototype,
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
        [CupertinoDynamicColor__debugLabel]: "quaternarySystemFill",
        [CupertinoDynamicColor__effectiveColor]: C4 || CT.C4
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 8,
        [Radius_x]: 8
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C6 || CT.C6,
        [BorderRadius_bottomLeft]: C6 || CT.C6,
        [BorderRadius_topRight]: C6 || CT.C6,
        [BorderRadius_topLeft]: C6 || CT.C6
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 1 / 0,
        [BoxConstraints_minHeight]: 0,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 261,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 262,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], _LocationL());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 260,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 259,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 260,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], _LocationL());
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 258,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "widthFactor",
        [_Location_column]: 19,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "heightFactor",
        [_Location_column]: 19,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21], _LocationL());
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 255,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 252,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 255,
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
        [_Location_column]: 22,
        [_Location_line]: 251,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 245,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 251,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], _LocationL());
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 244,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 13,
        [_Location_line]: 243,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 244,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33], _LocationL());
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 242,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 11,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 242,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37], _LocationL());
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 235,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "button",
        [_Location_column]: 9,
        [_Location_line]: 234,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 235,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41], _LocationL());
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 233,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behavior",
        [_Location_column]: 7,
        [_Location_line]: 228,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTapDown",
        [_Location_column]: 7,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTapUp",
        [_Location_column]: 7,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTapCancel",
        [_Location_column]: 7,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 233,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45, C46 || CT.C46, C47 || CT.C47, C48 || CT.C48, C49 || CT.C49], _LocationL());
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 227,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 10000
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 100000
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 16
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 14,
        [EdgeInsets_right]: 64,
        [EdgeInsets_top]: 14,
        [EdgeInsets_left]: 64
      });
    }
  }, false);
  var Color_value = dart.privateName(ui, "Color.value");
  var C1;
  var CupertinoDynamicColor_darkHighContrastElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.darkHighContrastElevatedColor");
  var C2;
  var CupertinoDynamicColor_highContrastElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.highContrastElevatedColor");
  var C3;
  var CupertinoDynamicColor_darkElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.darkElevatedColor");
  var C4;
  var CupertinoDynamicColor_elevatedColor = dart.privateName(colors, "CupertinoDynamicColor.elevatedColor");
  var CupertinoDynamicColor_darkHighContrastColor = dart.privateName(colors, "CupertinoDynamicColor.darkHighContrastColor");
  var CupertinoDynamicColor_highContrastColor = dart.privateName(colors, "CupertinoDynamicColor.highContrastColor");
  var CupertinoDynamicColor_darkColor = dart.privateName(colors, "CupertinoDynamicColor.darkColor");
  var CupertinoDynamicColor_color = dart.privateName(colors, "CupertinoDynamicColor.color");
  var CupertinoDynamicColor__debugResolveContext = dart.privateName(colors, "CupertinoDynamicColor._debugResolveContext");
  var CupertinoDynamicColor__debugLabel = dart.privateName(colors, "CupertinoDynamicColor._debugLabel");
  var CupertinoDynamicColor__effectiveColor = dart.privateName(colors, "CupertinoDynamicColor._effectiveColor");
  var C0;
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var C6;
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var C5;
  var _filled = dart.privateName(button, "_filled");
  var child$ = dart.privateName(button, "CupertinoButton.child");
  var padding$ = dart.privateName(button, "CupertinoButton.padding");
  var color$ = dart.privateName(button, "CupertinoButton.color");
  var disabledColor$ = dart.privateName(button, "CupertinoButton.disabledColor");
  var onPressed$ = dart.privateName(button, "CupertinoButton.onPressed");
  var minSize$ = dart.privateName(button, "CupertinoButton.minSize");
  var pressedOpacity$ = dart.privateName(button, "CupertinoButton.pressedOpacity");
  var borderRadius$ = dart.privateName(button, "CupertinoButton.borderRadius");
  var _filled$ = dart.privateName(button, "CupertinoButton._filled");
  button.CupertinoButton = class CupertinoButton extends framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get disabledColor() {
      return this[disabledColor$];
    }
    set disabledColor(value) {
      super.disabledColor = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get minSize() {
      return this[minSize$];
    }
    set minSize(value) {
      super.minSize = value;
    }
    get pressedOpacity() {
      return this[pressedOpacity$];
    }
    set pressedOpacity(value) {
      super.pressedOpacity = value;
    }
    get borderRadius() {
      return this[borderRadius$];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get [_filled]() {
      return this[_filled$];
    }
    set [_filled](value) {
      super[_filled] = value;
    }
    get enabled() {
      return this.onPressed != null;
    }
    createState() {
      return new button._CupertinoButtonState.new();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 129, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.FlagProperty.new("enabled", {value: this.enabled, ifFalse: "disabled"}));
    }
  };
  (button.CupertinoButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L0, 36, 19, "child");
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let disabledColor = opts && 'disabledColor' in opts ? opts.disabledColor : C0 || CT.C0;
    if (disabledColor == null) dart.nullFailed(L0, 39, 10, "disabledColor");
    let minSize = opts && 'minSize' in opts ? opts.minSize : 44;
    let pressedOpacity = opts && 'pressedOpacity' in opts ? opts.pressedOpacity : 0.4;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C5 || CT.C5;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[padding$] = padding;
    this[color$] = color;
    this[disabledColor$] = disabledColor;
    this[minSize$] = minSize;
    this[pressedOpacity$] = pressedOpacity;
    this[borderRadius$] = borderRadius;
    this[onPressed$] = onPressed;
    if (!(pressedOpacity == null || dart.notNull(pressedOpacity) >= 0.0 && dart.notNull(pressedOpacity) <= 1.0)) dart.assertFailed(null, L0, 44, 15, "pressedOpacity == null || (pressedOpacity >= 0.0 && pressedOpacity <= 1.0)");
    if (!(disabledColor != null)) dart.assertFailed(null, L0, 45, 15, "disabledColor != null");
    this[_filled$] = false;
    button.CupertinoButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = button.CupertinoButton.prototype;
  (button.CupertinoButton.filled = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L0, 57, 19, "child");
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let disabledColor = opts && 'disabledColor' in opts ? opts.disabledColor : C0 || CT.C0;
    if (disabledColor == null) dart.nullFailed(L0, 59, 10, "disabledColor");
    let minSize = opts && 'minSize' in opts ? opts.minSize : 44;
    let pressedOpacity = opts && 'pressedOpacity' in opts ? opts.pressedOpacity : 0.4;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C5 || CT.C5;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[padding$] = padding;
    this[disabledColor$] = disabledColor;
    this[minSize$] = minSize;
    this[pressedOpacity$] = pressedOpacity;
    this[borderRadius$] = borderRadius;
    this[onPressed$] = onPressed;
    if (!(pressedOpacity == null || dart.notNull(pressedOpacity) >= 0.0 && dart.notNull(pressedOpacity) <= 1.0)) dart.assertFailed(null, L0, 64, 15, "pressedOpacity == null || (pressedOpacity >= 0.0 && pressedOpacity <= 1.0)");
    if (!(disabledColor != null)) dart.assertFailed(null, L0, 65, 15, "disabledColor != null");
    this[color$] = null;
    this[_filled$] = true;
    button.CupertinoButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = button.CupertinoButton.prototype;
  dart.addTypeTests(button.CupertinoButton);
  dart.addTypeCaches(button.CupertinoButton);
  dart.setMethodSignature(button.CupertinoButton, () => ({
    __proto__: dart.getMethods(button.CupertinoButton.__proto__),
    createState: dart.fnType(button._CupertinoButtonState, [])
  }));
  dart.setGetterSignature(button.CupertinoButton, () => ({
    __proto__: dart.getGetters(button.CupertinoButton.__proto__),
    enabled: core.bool
  }));
  dart.setLibraryUri(button.CupertinoButton, L1);
  dart.setFieldSignature(button.CupertinoButton, () => ({
    __proto__: dart.getFields(button.CupertinoButton.__proto__),
    child: dart.finalFieldType(framework.Widget),
    padding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    disabledColor: dart.finalFieldType(ui.Color),
    onPressed: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    minSize: dart.finalFieldType(dart.nullable(core.double)),
    pressedOpacity: dart.finalFieldType(dart.nullable(core.double)),
    borderRadius: dart.finalFieldType(dart.nullable(border_radius.BorderRadius)),
    [_filled]: dart.finalFieldType(core.bool)
  }));
  var _opacityTween = dart.privateName(button, "_opacityTween");
  var ___CupertinoButtonState__animationController = dart.privateName(button, "_#_CupertinoButtonState#_animationController");
  var ___CupertinoButtonState__animationController_isSet = dart.privateName(button, "_#_CupertinoButtonState#_animationController#isSet");
  var ___CupertinoButtonState__opacityAnimation = dart.privateName(button, "_#_CupertinoButtonState#_opacityAnimation");
  var ___CupertinoButtonState__opacityAnimation_isSet = dart.privateName(button, "_#_CupertinoButtonState#_opacityAnimation#isSet");
  var _buttonHeldDown = dart.privateName(button, "_buttonHeldDown");
  var _animationController = dart.privateName(button, "_animationController");
  var _opacityAnimation = dart.privateName(button, "_opacityAnimation");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C7;
  var _setTween = dart.privateName(button, "_setTween");
  var _animate = dart.privateName(button, "_animate");
  var _handleTapDown = dart.privateName(button, "_handleTapDown");
  var _handleTapUp = dart.privateName(button, "_handleTapUp");
  var _handleTapCancel = dart.privateName(button, "_handleTapCancel");
  var BoxConstraints_maxHeight = dart.privateName(box, "BoxConstraints.maxHeight");
  var BoxConstraints_minHeight = dart.privateName(box, "BoxConstraints.minHeight");
  var BoxConstraints_maxWidth = dart.privateName(box, "BoxConstraints.maxWidth");
  var BoxConstraints_minWidth = dart.privateName(box, "BoxConstraints.minWidth");
  var C8;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C11;
  var C12;
  var C10;
  var C9;
  var C15;
  var C16;
  var C14;
  var C13;
  var C19;
  var C20;
  var C21;
  var C18;
  var C17;
  var C24;
  var C25;
  var C23;
  var C22;
  var C28;
  var C29;
  var C27;
  var C26;
  var C32;
  var C33;
  var C31;
  var C30;
  var C36;
  var C37;
  var C35;
  var C34;
  var C40;
  var C41;
  var C39;
  var C38;
  var C44;
  var C45;
  var C46;
  var C47;
  var C48;
  var C49;
  var C43;
  var C42;
  var C50;
  var C51;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(button.CupertinoButton) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(button.CupertinoButton)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(button.CupertinoButton));
  button._CupertinoButtonState = class _CupertinoButtonState extends State_SingleTickerProviderStateMixin$36 {
    get [_animationController]() {
      let t0;
      return dart.test(this[___CupertinoButtonState__animationController_isSet]) ? (t0 = this[___CupertinoButtonState__animationController], t0) : dart.throw(new _internal.LateError.fieldNI("_animationController"));
    }
    set [_animationController](t0) {
      if (t0 == null) dart.nullFailed(L0, 141, 28, "null");
      this[___CupertinoButtonState__animationController_isSet] = true;
      this[___CupertinoButtonState__animationController] = t0;
    }
    get [_opacityAnimation]() {
      let t1;
      return dart.test(this[___CupertinoButtonState__opacityAnimation_isSet]) ? (t1 = this[___CupertinoButtonState__opacityAnimation], t1) : dart.throw(new _internal.LateError.fieldNI("_opacityAnimation"));
    }
    set [_opacityAnimation](t1) {
      if (t1 == null) dart.nullFailed(L0, 142, 26, "null");
      this[___CupertinoButtonState__opacityAnimation_isSet] = true;
      this[___CupertinoButtonState__opacityAnimation] = t1;
    }
    initState() {
      super.initState();
      this[_animationController] = new animation_controller.AnimationController.new({duration: C7 || CT.C7, value: 0.0, vsync: this});
      this[_opacityAnimation] = this[_animationController].drive(core.double, new tween.CurveTween.new({curve: curves.Curves.decelerate})).drive(core.double, this[_opacityTween]);
      this[_setTween]();
    }
    didUpdateWidget(old) {
      button.CupertinoButton.as(old);
      if (old == null) dart.nullFailed(L0, 159, 40, "old");
      super.didUpdateWidget(old);
      this[_setTween]();
    }
    [_setTween]() {
      let t2;
      this[_opacityTween].end = (t2 = this.widget.pressedOpacity, t2 == null ? 1.0 : t2);
    }
    dispose() {
      this[_animationController].dispose();
      super.dispose();
    }
    [_handleTapDown](event) {
      if (event == null) dart.nullFailed(L0, 176, 38, "event");
      if (!dart.test(this[_buttonHeldDown])) {
        this[_buttonHeldDown] = true;
        this[_animate]();
      }
    }
    [_handleTapUp](event) {
      if (event == null) dart.nullFailed(L0, 183, 34, "event");
      if (dart.test(this[_buttonHeldDown])) {
        this[_buttonHeldDown] = false;
        this[_animate]();
      }
    }
    [_handleTapCancel]() {
      if (dart.test(this[_buttonHeldDown])) {
        this[_buttonHeldDown] = false;
        this[_animate]();
      }
    }
    [_animate]() {
      if (dart.test(this[_animationController].isAnimating)) return;
      let wasHeldDown = this[_buttonHeldDown];
      let ticker = dart.test(this[_buttonHeldDown]) ? this[_animationController].animateTo(1.0, {duration: button._CupertinoButtonState.kFadeOutDuration}) : this[_animationController].animateTo(0.0, {duration: button._CupertinoButtonState.kFadeInDuration});
      ticker.then(dart.void, dart.fn(value => {
        if (dart.test(this.mounted) && !dart.equals(wasHeldDown, this[_buttonHeldDown])) this[_animate]();
      }, voidToNull()));
    }
    build(context) {
      let t2;
      if (context == null) dart.nullFailed(L0, 211, 29, "context");
      let enabled = this.widget.enabled;
      let themeData = theme.CupertinoTheme.of(context);
      let primaryColor = themeData.primaryColor;
      let backgroundColor = this.widget.color == null ? dart.test(this.widget[_filled]) ? primaryColor : null : colors.CupertinoDynamicColor.maybeResolve(this.widget.color, context);
      let foregroundColor = backgroundColor != null ? themeData.primaryContrastingColor : dart.test(enabled) ? primaryColor : colors.CupertinoDynamicColor.resolve(colors.CupertinoColors.placeholderText, context);
      let textStyle = themeData.textTheme.textStyle.copyWith({color: foregroundColor});
      return new gesture_detector.GestureDetector.new({behavior: proxy_box.HitTestBehavior.opaque, onTapDown: dart.test(enabled) ? dart.bind(this, _handleTapDown) : null, onTapUp: dart.test(enabled) ? dart.bind(this, _handleTapUp) : null, onTapCancel: dart.test(enabled) ? dart.bind(this, _handleTapCancel) : null, onTap: this.widget.onPressed, child: new basic.Semantics.new({button: true, child: new basic.ConstrainedBox.new({constraints: this.widget.minSize == null ? C8 || CT.C8 : new box.BoxConstraints.new({minWidth: dart.nullCheck(this.widget.minSize), minHeight: dart.nullCheck(this.widget.minSize)}), child: new transitions.FadeTransition.new({opacity: this[_opacityAnimation], child: new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({borderRadius: this.widget.borderRadius, color: backgroundColor != null && !dart.test(enabled) ? colors.CupertinoDynamicColor.resolve(this.widget.disabledColor, context) : backgroundColor}), child: new basic.Padding.new({padding: (t2 = this.widget.padding, t2 == null ? backgroundColor != null ? button._kBackgroundButtonPadding : button._kButtonPadding : t2), child: new basic.Center.new({widthFactor: 1.0, heightFactor: 1.0, child: new text.DefaultTextStyle.new({style: textStyle, child: new icon_theme.IconTheme.new({data: new icon_theme_data.IconThemeData.new({color: foregroundColor}), child: this.widget.child, $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38}), $creationLocationd_0dea112b090073317d4: C42 || CT.C42});
    }
  };
  (button._CupertinoButtonState.new = function() {
    this[_opacityTween] = new (TweenOfdouble()).new({begin: 1.0});
    this[___CupertinoButtonState__animationController] = null;
    this[___CupertinoButtonState__animationController_isSet] = false;
    this[___CupertinoButtonState__opacityAnimation] = null;
    this[___CupertinoButtonState__opacityAnimation_isSet] = false;
    this[_buttonHeldDown] = false;
    button._CupertinoButtonState.__proto__.new.call(this);
    ;
  }).prototype = button._CupertinoButtonState.prototype;
  dart.addTypeTests(button._CupertinoButtonState);
  dart.addTypeCaches(button._CupertinoButtonState);
  dart.setMethodSignature(button._CupertinoButtonState, () => ({
    __proto__: dart.getMethods(button._CupertinoButtonState.__proto__),
    [_setTween]: dart.fnType(dart.void, []),
    [_handleTapDown]: dart.fnType(dart.void, [tap.TapDownDetails]),
    [_handleTapUp]: dart.fnType(dart.void, [tap.TapUpDetails]),
    [_handleTapCancel]: dart.fnType(dart.void, []),
    [_animate]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(button._CupertinoButtonState, () => ({
    __proto__: dart.getGetters(button._CupertinoButtonState.__proto__),
    [_animationController]: animation_controller.AnimationController,
    [_opacityAnimation]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(button._CupertinoButtonState, () => ({
    __proto__: dart.getSetters(button._CupertinoButtonState.__proto__),
    [_animationController]: animation_controller.AnimationController,
    [_opacityAnimation]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(button._CupertinoButtonState, L1);
  dart.setFieldSignature(button._CupertinoButtonState, () => ({
    __proto__: dart.getFields(button._CupertinoButtonState.__proto__),
    [_opacityTween]: dart.finalFieldType(tween.Tween$(core.double)),
    [___CupertinoButtonState__animationController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___CupertinoButtonState__animationController_isSet]: dart.fieldType(core.bool),
    [___CupertinoButtonState__opacityAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___CupertinoButtonState__opacityAnimation_isSet]: dart.fieldType(core.bool),
    [_buttonHeldDown]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(button._CupertinoButtonState, {
    /*button._CupertinoButtonState.kFadeOutDuration*/get kFadeOutDuration() {
      return C50 || CT.C50;
    },
    /*button._CupertinoButtonState.kFadeInDuration*/get kFadeInDuration() {
      return C51 || CT.C51;
    }
  }, false);
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C52;
  var C53;
  dart.defineLazy(button, {
    /*button._kButtonPadding*/get _kButtonPadding() {
      return C52 || CT.C52;
    },
    /*button._kBackgroundButtonPadding*/get _kBackgroundButtonPadding() {
      return C53 || CT.C53;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/cupertino/button.dart", {
    "package:flutter/src/cupertino/button.dart": button
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["button.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/cupertino/button.dart.lib.js"}');
  // Exports:
  return {
    src__cupertino__button: button
  };
}));

//# sourceMappingURL=button.dart.lib.js.map
