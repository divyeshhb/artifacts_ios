define(['dart_sdk', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/characters/src/extensions.dart', 'packages/flutter/src/services/raw_keyboard_windows.dart', 'packages/flutter/src/services/keyboard_key.dart', 'packages/flutter/src/services/text_editing.dart', 'packages/flutter/src/services/clipboard.dart', 'packages/flutter/src/services/text_input.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/gestures/tap.dart', 'packages/flutter/src/gestures/long_press.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/viewport_offset.dart', 'packages/flutter/src/painting/strut_style.dart'], (function load__packages__flutter__src__rendering__editable_dart(dart_sdk, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__characters__src__extensions$46dart, packages__flutter__src__services__raw_keyboard_windows$46dart, packages__flutter__src__services__keyboard_key$46dart, packages__flutter__src__services__text_editing$46dart, packages__flutter__src__services__clipboard$46dart, packages__flutter__src__services__text_input$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__gestures__tap$46dart, packages__flutter__src__gestures__long_press$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__viewport_offset$46dart, packages__flutter__src__painting__strut_style$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const text_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_span;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const extensions = packages__characters__src__extensions$46dart.src__extensions;
  const raw_keyboard = packages__flutter__src__services__raw_keyboard_windows$46dart.src__services__raw_keyboard;
  const raw_keyboard_macos = packages__flutter__src__services__raw_keyboard_windows$46dart.src__services__raw_keyboard_macos;
  const keyboard_key = packages__flutter__src__services__keyboard_key$46dart.src__services__keyboard_key;
  const text_editing = packages__flutter__src__services__text_editing$46dart.src__services__text_editing;
  const clipboard = packages__flutter__src__services__clipboard$46dart.src__services__clipboard;
  const text_input = packages__flutter__src__services__text_input$46dart.src__services__text_input;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const tap = packages__flutter__src__gestures__tap$46dart.src__gestures__tap;
  const long_press = packages__flutter__src__gestures__long_press$46dart.src__gestures__long_press;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const viewport_offset = packages__flutter__src__rendering__viewport_offset$46dart.src__rendering__viewport_offset;
  const strut_style = packages__flutter__src__painting__strut_style$46dart.src__painting__strut_style;
  var editable = Object.create(dart.library);
  var $length = dartx.length;
  var $isNotEmpty = dartx.isNotEmpty;
  var $codeUnitAt = dartx.codeUnitAt;
  var $first = dartx.first;
  var $toString = dartx.toString;
  var $substring = dartx.substring;
  var $times = dartx['*'];
  var $isEmpty = dartx.isEmpty;
  var $last = dartx.last;
  var $fold = dartx.fold;
  var $isFinite = dartx.isFinite;
  var $round = dartx.round;
  var $_get = dartx._get;
  var $clamp = dartx.clamp;
  dart._checkModuleNullSafetyMode(false);
  var SelectionChangedCauseL = () => (SelectionChangedCauseL = dart.constFn(dart.legacy(editable.SelectionChangedCause)))();
  var ValueNotifierOfbool = () => (ValueNotifierOfbool = dart.constFn(change_notifier.ValueNotifier$(core.bool)))();
  var StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  var TextSpanN = () => (TextSpanN = dart.constFn(dart.nullable(text_span.TextSpan)))();
  var JSArrayOfTextBox = () => (JSArrayOfTextBox = dart.constFn(_interceptors.JSArray$(ui.TextBox)))();
  var JSArrayOfTextSelectionPoint = () => (JSArrayOfTextSelectionPoint = dart.constFn(_interceptors.JSArray$(editable.TextSelectionPoint)))();
  var RectN = () => (RectN = dart.constFn(dart.nullable(ui.Rect)))();
  var RectNAndTextBoxToRect = () => (RectNAndTextBoxToRect = dart.constFn(dart.fnType(ui.Rect, [RectN(), ui.TextBox])))();
  var DiagnosticsPropertyOfValueNotifierOfbool = () => (DiagnosticsPropertyOfValueNotifierOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(ValueNotifierOfbool())))();
  var DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))();
  var DiagnosticsPropertyOfLocale = () => (DiagnosticsPropertyOfLocale = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Locale)))();
  var DiagnosticsPropertyOfTextSelection = () => (DiagnosticsPropertyOfTextSelection = dart.constFn(diagnostics.DiagnosticsProperty$(text_editing.TextSelection)))();
  var DiagnosticsPropertyOfViewportOffset = () => (DiagnosticsPropertyOfViewportOffset = dart.constFn(diagnostics.DiagnosticsProperty$(viewport_offset.ViewportOffset)))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var LinkedHashSetOfLogicalKeyboardKey = () => (LinkedHashSetOfLogicalKeyboardKey = dart.constFn(collection.LinkedHashSet$(keyboard_key.LogicalKeyboardKey)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/editable.dart";
  var L1 = "package:flutter/src/rendering/editable.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: editable.SelectionChangedCause.prototype,
        [_name$]: "SelectionChangedCause.tap",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: editable.SelectionChangedCause.prototype,
        [_name$]: "SelectionChangedCause.doubleTap",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: editable.SelectionChangedCause.prototype,
        [_name$]: "SelectionChangedCause.longPress",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: editable.SelectionChangedCause.prototype,
        [_name$]: "SelectionChangedCause.forcePress",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: editable.SelectionChangedCause.prototype,
        [_name$]: "SelectionChangedCause.keyboard",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: editable.SelectionChangedCause.prototype,
        [_name$]: "SelectionChangedCause.drag",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], SelectionChangedCauseL());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.ltr",
        index: 1
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.rtl",
        index: 0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_name]: "TextAlign.start",
        index: 4
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: text_painter.TextWidthBasis.prototype,
        [_name$0]: "TextWidthBasis.parent",
        index: 0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.BoxHeightStyle.prototype,
        [_name]: "BoxHeightStyle.tight",
        index: 0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ui.BoxWidthStyle.prototype,
        [_name]: "BoxWidthStyle.tight",
        index: 0
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 5,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 4,
        [EdgeInsets_left]: 4
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name]: "Clip.hardEdge",
        index: 1
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name$1]: "Axis.horizontal",
        index: 0
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name$1]: "Axis.vertical",
        index: 1
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$2]: "TargetPlatform.iOS",
        index: 2
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$2]: "TargetPlatform.android",
        index: 0
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$2]: "TargetPlatform.fuchsia",
        index: 1
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$2]: "TargetPlatform.macOS",
        index: 4
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$2]: "TargetPlatform.linux",
        index: 3
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$2]: "TargetPlatform.windows",
        index: 5
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 1,
        [Radius_x]: 1
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 1,
        [OffsetBase__dx]: 0.5
      });
    }
  }, false);
  var _name$ = dart.privateName(editable, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  editable.SelectionChangedCause = class SelectionChangedCause extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (editable.SelectionChangedCause.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 37, 6, "index");
    if (_name == null) dart.nullFailed(L0, 37, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = editable.SelectionChangedCause.prototype;
  dart.addTypeTests(editable.SelectionChangedCause);
  dart.addTypeCaches(editable.SelectionChangedCause);
  dart.setLibraryUri(editable.SelectionChangedCause, L1);
  dart.setFieldSignature(editable.SelectionChangedCause, () => ({
    __proto__: dart.getFields(editable.SelectionChangedCause.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(editable.SelectionChangedCause, ['toString']);
  editable.SelectionChangedCause.tap = C0 || CT.C0;
  editable.SelectionChangedCause.doubleTap = C1 || CT.C1;
  editable.SelectionChangedCause.longPress = C2 || CT.C2;
  editable.SelectionChangedCause.forcePress = C3 || CT.C3;
  editable.SelectionChangedCause.keyboard = C4 || CT.C4;
  editable.SelectionChangedCause.drag = C5 || CT.C5;
  editable.SelectionChangedCause.values = C6 || CT.C6;
  var _name = dart.privateName(ui, "_name");
  var C7;
  var C8;
  var point$ = dart.privateName(editable, "TextSelectionPoint.point");
  var direction$ = dart.privateName(editable, "TextSelectionPoint.direction");
  editable.TextSelectionPoint = class TextSelectionPoint extends core.Object {
    get point() {
      return this[point$];
    }
    set point(value) {
      super.point = value;
    }
    get direction() {
      return this[direction$];
    }
    set direction(value) {
      super.direction = value;
    }
    toString() {
      switch (this.direction) {
        case C7 || CT.C7:
        {
          return dart.str(this.point) + "-ltr";
        }
        case C8 || CT.C8:
        {
          return dart.str(this.point) + "-rtl";
        }
        case null:
        {
          return dart.str(this.point);
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
  };
  (editable.TextSelectionPoint.new = function(point, direction) {
    if (point == null) dart.nullFailed(L0, 79, 33, "point");
    this[point$] = point;
    this[direction$] = direction;
    if (!(point != null)) dart.assertFailed(null, L0, 80, 14, "point != null");
    ;
  }).prototype = editable.TextSelectionPoint.prototype;
  dart.addTypeTests(editable.TextSelectionPoint);
  dart.addTypeCaches(editable.TextSelectionPoint);
  dart.setLibraryUri(editable.TextSelectionPoint, L1);
  dart.setFieldSignature(editable.TextSelectionPoint, () => ({
    __proto__: dart.getFields(editable.TextSelectionPoint.__proto__),
    point: dart.finalFieldType(ui.Offset),
    direction: dart.finalFieldType(dart.nullable(ui.TextDirection))
  }));
  dart.defineExtensionMethods(editable.TextSelectionPoint, ['toString']);
  var C9;
  var _name$0 = dart.privateName(text_painter, "_name");
  var C10;
  var C11;
  var C12;
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C13;
  var C14;
  var _textLayoutLastMaxWidth = dart.privateName(editable, "_textLayoutLastMaxWidth");
  var _textLayoutLastMinWidth = dart.privateName(editable, "_textLayoutLastMinWidth");
  var _lastCaretRect = dart.privateName(editable, "_lastCaretRect");
  var _selectionStartInViewport = dart.privateName(editable, "_selectionStartInViewport");
  var _selectionEndInViewport = dart.privateName(editable, "_selectionEndInViewport");
  var _cursorResetLocation = dart.privateName(editable, "_cursorResetLocation");
  var _wasSelectingVerticallyWithKeyboard = dart.privateName(editable, "_wasSelectingVerticallyWithKeyboard");
  var _cachedPlainText = dart.privateName(editable, "_cachedPlainText");
  var _hasFocus = dart.privateName(editable, "_hasFocus");
  var _listenerAttached = dart.privateName(editable, "_listenerAttached");
  var _forceLine = dart.privateName(editable, "_forceLine");
  var _readOnly = dart.privateName(editable, "_readOnly");
  var _selectionRects = dart.privateName(editable, "_selectionRects");
  var _cursorWidth = dart.privateName(editable, "_cursorWidth");
  var _floatingCursorOn = dart.privateName(editable, "_floatingCursorOn");
  var __RenderEditable__floatingCursorOffset = dart.privateName(editable, "_#RenderEditable#_floatingCursorOffset");
  var __RenderEditable__floatingCursorOffset_isSet = dart.privateName(editable, "_#RenderEditable#_floatingCursorOffset#isSet");
  var __RenderEditable__floatingCursorTextPosition = dart.privateName(editable, "_#RenderEditable#_floatingCursorTextPosition");
  var __RenderEditable__floatingCursorTextPosition_isSet = dart.privateName(editable, "_#RenderEditable#_floatingCursorTextPosition#isSet");
  var _maxScrollExtent = dart.privateName(editable, "_maxScrollExtent");
  var _clipBehavior = dart.privateName(editable, "_clipBehavior");
  var __RenderEditable__tap = dart.privateName(editable, "_#RenderEditable#_tap");
  var __RenderEditable__tap_isSet = dart.privateName(editable, "_#RenderEditable#_tap#isSet");
  var __RenderEditable__longPress = dart.privateName(editable, "_#RenderEditable#_longPress");
  var __RenderEditable__longPress_isSet = dart.privateName(editable, "_#RenderEditable#_longPress#isSet");
  var _lastTapDownPosition = dart.privateName(editable, "_lastTapDownPosition");
  var __RenderEditable__caretPrototype = dart.privateName(editable, "_#RenderEditable#_caretPrototype");
  var __RenderEditable__caretPrototype_isSet = dart.privateName(editable, "_#RenderEditable#_caretPrototype#isSet");
  var _relativeOrigin = dart.privateName(editable, "_relativeOrigin");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C15;
  var _previousOffset = dart.privateName(editable, "_previousOffset");
  var _resetOriginOnLeft = dart.privateName(editable, "_resetOriginOnLeft");
  var _resetOriginOnRight = dart.privateName(editable, "_resetOriginOnRight");
  var _resetOriginOnTop = dart.privateName(editable, "_resetOriginOnTop");
  var _resetOriginOnBottom = dart.privateName(editable, "_resetOriginOnBottom");
  var _resetFloatingCursorAnimationValue = dart.privateName(editable, "_resetFloatingCursorAnimationValue");
  var _promptRectPaint = dart.privateName(editable, "_promptRectPaint");
  var _clipRectLayer = dart.privateName(editable, "_clipRectLayer");
  var _textPainter = dart.privateName(editable, "_textPainter");
  var _cursorColor = dart.privateName(editable, "_cursorColor");
  var _backgroundCursorColor = dart.privateName(editable, "_backgroundCursorColor");
  var _showCursor = dart.privateName(editable, "_showCursor");
  var _maxLines = dart.privateName(editable, "_maxLines");
  var _minLines = dart.privateName(editable, "_minLines");
  var _expands = dart.privateName(editable, "_expands");
  var _selectionColor = dart.privateName(editable, "_selectionColor");
  var _selection = dart.privateName(editable, "_selection");
  var _offset = dart.privateName(editable, "_offset");
  var _cursorHeight = dart.privateName(editable, "_cursorHeight");
  var _cursorRadius = dart.privateName(editable, "_cursorRadius");
  var _paintCursorOnTop = dart.privateName(editable, "_paintCursorOnTop");
  var _cursorOffset = dart.privateName(editable, "_cursorOffset");
  var _floatingCursorAddedMargin = dart.privateName(editable, "_floatingCursorAddedMargin");
  var _enableInteractiveSelection = dart.privateName(editable, "_enableInteractiveSelection");
  var _devicePixelRatio = dart.privateName(editable, "_devicePixelRatio");
  var _selectionHeightStyle = dart.privateName(editable, "_selectionHeightStyle");
  var _selectionWidthStyle = dart.privateName(editable, "_selectionWidthStyle");
  var _startHandleLayerLink = dart.privateName(editable, "_startHandleLayerLink");
  var _endHandleLayerLink = dart.privateName(editable, "_endHandleLayerLink");
  var _obscuringCharacter = dart.privateName(editable, "_obscuringCharacter");
  var _obscureText = dart.privateName(editable, "_obscureText");
  var _promptRectRange = dart.privateName(editable, "_promptRectRange");
  var _caretPrototype = dart.privateName(editable, "_caretPrototype");
  var _updateSelectionExtentsVisibility = dart.privateName(editable, "_updateSelectionExtentsVisibility");
  var _handleSelectionChange = dart.privateName(editable, "_handleSelectionChange");
  var _handleMovement = dart.privateName(editable, "_handleMovement");
  var _handleShortcuts = dart.privateName(editable, "_handleShortcuts");
  var _handleDelete = dart.privateName(editable, "_handleDelete");
  var _handleKeyEvent = dart.privateName(editable, "_handleKeyEvent");
  var _plainText = dart.privateName(editable, "_plainText");
  var _selectWordAtOffset = dart.privateName(editable, "_selectWordAtOffset");
  var _selectLineAtOffset = dart.privateName(editable, "_selectLineAtOffset");
  var _floatingCursorOffset = dart.privateName(editable, "_floatingCursorOffset");
  var _floatingCursorTextPosition = dart.privateName(editable, "_floatingCursorTextPosition");
  var _caretMargin = dart.privateName(editable, "_caretMargin");
  var _isMultiline = dart.privateName(editable, "_isMultiline");
  var _handleSetSelection = dart.privateName(editable, "_handleSetSelection");
  var _handleMoveCursorBackwardByWord = dart.privateName(editable, "_handleMoveCursorBackwardByWord");
  var _handleMoveCursorBackwardByCharacter = dart.privateName(editable, "_handleMoveCursorBackwardByCharacter");
  var _handleMoveCursorForwardByWord = dart.privateName(editable, "_handleMoveCursorForwardByWord");
  var _handleMoveCursorForwardByCharacter = dart.privateName(editable, "_handleMoveCursorForwardByCharacter");
  var _getNextWord = dart.privateName(editable, "_getNextWord");
  var _getPreviousWord = dart.privateName(editable, "_getPreviousWord");
  var _onlyWhitespace = dart.privateName(editable, "_onlyWhitespace");
  var _tap = dart.privateName(editable, "_tap");
  var _handleTapDown = dart.privateName(editable, "_handleTapDown");
  var _handleTap = dart.privateName(editable, "_handleTap");
  var _longPress = dart.privateName(editable, "_longPress");
  var _handleLongPress = dart.privateName(editable, "_handleLongPress");
  var _viewportAxis = dart.privateName(editable, "_viewportAxis");
  var _name$1 = dart.privateName(basic_types, "_name");
  var C16;
  var C17;
  var _paintOffset = dart.privateName(editable, "_paintOffset");
  var _viewportExtent = dart.privateName(editable, "_viewportExtent");
  var _getMaxScrollExtent = dart.privateName(editable, "_getMaxScrollExtent");
  var _hasVisualOverflow = dart.privateName(editable, "_hasVisualOverflow");
  var _layoutText = dart.privateName(editable, "_layoutText");
  var _getPixelPerfectCursorOffset = dart.privateName(editable, "_getPixelPerfectCursorOffset");
  var _preferredHeight = dart.privateName(editable, "_preferredHeight");
  var _name$2 = dart.privateName(platform, "_name");
  var C18;
  var C19;
  var C20;
  var C21;
  var C22;
  var C23;
  var _computeCaretPrototype = dart.privateName(editable, "_computeCaretPrototype");
  var _paintCaret = dart.privateName(editable, "_paintCaret");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var C24;
  var _paintFloatingCaret = dart.privateName(editable, "_paintFloatingCaret");
  var _paintSelection = dart.privateName(editable, "_paintSelection");
  var _paintPromptRectIfNeeded = dart.privateName(editable, "_paintPromptRectIfNeeded");
  var _paintContents = dart.privateName(editable, "_paintContents");
  var _paintHandleLayers = dart.privateName(editable, "_paintHandleLayers");
  var onSelectionChanged$ = dart.privateName(editable, "RenderEditable.onSelectionChanged");
  var onCaretChanged$ = dart.privateName(editable, "RenderEditable.onCaretChanged");
  var ignorePointer$ = dart.privateName(editable, "RenderEditable.ignorePointer");
  var textSelectionDelegate$ = dart.privateName(editable, "RenderEditable.textSelectionDelegate");
  const RenderBox_RelayoutWhenSystemFontsChangeMixin$36 = class RenderBox_RelayoutWhenSystemFontsChangeMixin extends box.RenderBox {};
  (RenderBox_RelayoutWhenSystemFontsChangeMixin$36.new = function() {
    RenderBox_RelayoutWhenSystemFontsChangeMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RelayoutWhenSystemFontsChangeMixin$36.prototype;
  dart.applyMixin(RenderBox_RelayoutWhenSystemFontsChangeMixin$36, object.RelayoutWhenSystemFontsChangeMixin);
  editable.RenderEditable = class RenderEditable extends RenderBox_RelayoutWhenSystemFontsChangeMixin$36 {
    get onSelectionChanged() {
      return this[onSelectionChanged$];
    }
    set onSelectionChanged(value) {
      this[onSelectionChanged$] = value;
    }
    get onCaretChanged() {
      return this[onCaretChanged$];
    }
    set onCaretChanged(value) {
      this[onCaretChanged$] = value;
    }
    get ignorePointer() {
      return this[ignorePointer$];
    }
    set ignorePointer(value) {
      this[ignorePointer$] = value;
    }
    get textSelectionDelegate() {
      return this[textSelectionDelegate$];
    }
    set textSelectionDelegate(value) {
      this[textSelectionDelegate$] = value;
    }
    get textHeightBehavior() {
      return this[_textPainter].textHeightBehavior;
    }
    set textHeightBehavior(value) {
      if (dart.equals(this[_textPainter].textHeightBehavior, value)) return;
      this[_textPainter].textHeightBehavior = value;
      this.markNeedsTextLayout();
    }
    get textWidthBasis() {
      return this[_textPainter].textWidthBasis;
    }
    set textWidthBasis(value) {
      if (value == null) dart.nullFailed(L0, 334, 37, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 335, 12, "value != null");
      if (dart.equals(this[_textPainter].textWidthBasis, value)) return;
      this[_textPainter].textWidthBasis = value;
      this.markNeedsTextLayout();
    }
    get devicePixelRatio() {
      return this[_devicePixelRatio];
    }
    set devicePixelRatio(value) {
      if (value == null) dart.nullFailed(L0, 347, 31, "value");
      if (this.devicePixelRatio == value) return;
      this[_devicePixelRatio] = value;
      this.markNeedsTextLayout();
    }
    get obscuringCharacter() {
      return this[_obscuringCharacter];
    }
    set obscuringCharacter(value) {
      if (value == null) dart.nullFailed(L0, 359, 33, "value");
      if (this[_obscuringCharacter] == value) {
        return;
      }
      if (!(value != null && extensions['StringCharacters|get#characters'](value)[$length] === 1)) dart.assertFailed(null, L0, 363, 12, "value != null && value.characters.length == 1");
      this[_obscuringCharacter] = value;
      this.markNeedsLayout();
    }
    get obscureText() {
      return this[_obscureText];
    }
    set obscureText(value) {
      if (value == null) dart.nullFailed(L0, 371, 24, "value");
      if (dart.equals(this[_obscureText], value)) return;
      this[_obscureText] = value;
      this.markNeedsSemanticsUpdate();
    }
    get selectionStartInViewport() {
      return this[_selectionStartInViewport];
    }
    get selectionEndInViewport() {
      return this[_selectionEndInViewport];
    }
    [_updateSelectionExtentsVisibility](effectiveOffset) {
      if (effectiveOffset == null) dart.nullFailed(L0, 413, 49, "effectiveOffset");
      if (!(this.selection != null)) dart.assertFailed(null, L0, 414, 12, "selection != null");
      let visibleRegion = ui.Offset.zero['&'](this.size);
      let startOffset = this[_textPainter].getOffsetForCaret(new ui.TextPosition.new({offset: dart.nullCheck(this.selection).start, affinity: dart.nullCheck(this.selection).affinity}), this[_caretPrototype]);
      this[_selectionStartInViewport].value = visibleRegion.inflate(0.5).contains(startOffset['+'](effectiveOffset));
      let endOffset = this[_textPainter].getOffsetForCaret(new ui.TextPosition.new({offset: dart.nullCheck(this.selection).end, affinity: dart.nullCheck(this.selection).affinity}), this[_caretPrototype]);
      this[_selectionEndInViewport].value = visibleRegion.inflate(0.5).contains(endOffset['+'](effectiveOffset));
    }
    [_handleSelectionChange](nextSelection, cause) {
      if (nextSelection == null) dart.nullFailed(L0, 458, 19, "nextSelection");
      if (cause == null) dart.nullFailed(L0, 459, 27, "cause");
      let focusingEmpty = nextSelection.baseOffset === 0 && nextSelection.extentOffset === 0 && !dart.test(this.hasFocus);
      if (dart.equals(nextSelection, this.selection) && !dart.equals(cause, editable.SelectionChangedCause.keyboard) && !focusingEmpty) {
        return;
      }
      if (this.onSelectionChanged != null) {
        dart.nullCheck(this.onSelectionChanged)(nextSelection, this, cause);
      }
    }
    [_handleKeyEvent](keyEvent) {
      if (keyEvent == null) dart.nullFailed(L0, 513, 36, "keyEvent");
      if (true) {
        return;
      }
      if (!raw_keyboard.RawKeyDownEvent.is(keyEvent) || this.onSelectionChanged == null) return;
      let keysPressed = keyboard_key.LogicalKeyboardKey.collapseSynonyms(raw_keyboard.RawKeyboard.instance.keysPressed);
      let key = keyEvent.logicalKey;
      let isMacOS = raw_keyboard_macos.RawKeyEventDataMacOs.is(keyEvent.data);
      if (!dart.test(editable.RenderEditable._nonModifierKeys.contains(key)) || dart.notNull(keysPressed.difference(isMacOS ? editable.RenderEditable._macOsModifierKeys : editable.RenderEditable._modifierKeys)[$length]) > 1 || dart.test(keysPressed.difference(editable.RenderEditable._interestingKeys)[$isNotEmpty])) {
        return;
      }
      if (!(this.selection != null)) dart.assertFailed(null, L0, 536, 12, "selection != null");
      let isWordModifierPressed = isMacOS ? keyEvent.isAltPressed : keyEvent.isControlPressed;
      let isLineModifierPressed = isMacOS ? keyEvent.isMetaPressed : keyEvent.isAltPressed;
      let isShortcutModifierPressed = isMacOS ? keyEvent.isMetaPressed : keyEvent.isControlPressed;
      if (dart.test(editable.RenderEditable._movementKeys.contains(key))) {
        this[_handleMovement](key, {wordModifier: isWordModifierPressed, lineModifier: isLineModifierPressed, shift: keyEvent.isShiftPressed});
      } else if (dart.test(isShortcutModifierPressed) && dart.test(editable.RenderEditable._shortcutKeys.contains(key))) {
        this[_handleShortcuts](key);
      } else if (dart.equals(key, keyboard_key.LogicalKeyboardKey.delete)) {
        this[_handleDelete]({forward: true});
      } else if (dart.equals(key, keyboard_key.LogicalKeyboardKey.backspace)) {
        this[_handleDelete]({forward: false});
      }
    }
    static nextCharacter(index, string, includeWhitespace = true) {
      if (index == null) dart.nullFailed(L0, 566, 32, "index");
      if (string == null) dart.nullFailed(L0, 566, 46, "string");
      if (includeWhitespace == null) dart.nullFailed(L0, 566, 60, "includeWhitespace");
      if (!(dart.notNull(index) >= 0 && dart.notNull(index) <= string.length)) dart.assertFailed(null, L0, 567, 12, "index >= 0 && index <= string.length");
      if (index === string.length) {
        return string.length;
      }
      let count = 0;
      let remaining = extensions['StringCharacters|get#characters'](string).skipWhile(dart.fn(currentString => {
        if (currentString == null) dart.nullFailed(L0, 573, 70, "currentString");
        if (count <= dart.notNull(index)) {
          count = count + currentString.length;
          return true;
        }
        if (dart.test(includeWhitespace)) {
          return false;
        }
        return editable._isWhitespace(currentString[$codeUnitAt](0));
      }, StringTobool()));
      return string.length - dart.toString(remaining).length;
    }
    static previousCharacter(index, string, includeWhitespace = true) {
      let t0;
      if (index == null) dart.nullFailed(L0, 598, 36, "index");
      if (string == null) dart.nullFailed(L0, 598, 50, "string");
      if (includeWhitespace == null) dart.nullFailed(L0, 598, 64, "includeWhitespace");
      if (!(dart.notNull(index) >= 0 && dart.notNull(index) <= string.length)) dart.assertFailed(null, L0, 599, 12, "index >= 0 && index <= string.length");
      if (index === 0) {
        return 0;
      }
      let count = 0;
      let lastNonWhitespace = null;
      for (let currentString of extensions['StringCharacters|get#characters'](string)) {
        if (!dart.test(includeWhitespace) && !dart.test(editable._isWhitespace(dart.toString(extensions['StringCharacters|get#characters'](currentString)[$first])[$codeUnitAt](0)))) {
          lastNonWhitespace = count;
        }
        if (count + currentString.length >= dart.notNull(index)) {
          return dart.test(includeWhitespace) ? count : (t0 = lastNonWhitespace, t0 == null ? 0 : t0);
        }
        count = count + currentString.length;
      }
      return 0;
    }
    [_handleMovement](key, opts) {
      if (key == null) dart.nullFailed(L0, 620, 24, "key");
      let wordModifier = opts && 'wordModifier' in opts ? opts.wordModifier : null;
      if (wordModifier == null) dart.nullFailed(L0, 621, 19, "wordModifier");
      let lineModifier = opts && 'lineModifier' in opts ? opts.lineModifier : null;
      if (lineModifier == null) dart.nullFailed(L0, 622, 19, "lineModifier");
      let shift = opts && 'shift' in opts ? opts.shift : null;
      if (shift == null) dart.nullFailed(L0, 623, 19, "shift");
      if (dart.test(wordModifier) && dart.test(lineModifier)) {
        return;
      }
      if (!(this.selection != null)) dart.assertFailed(null, L0, 629, 12, "selection != null");
      let newSelection = dart.nullCheck(this.selection);
      let rightArrow = dart.equals(key, keyboard_key.LogicalKeyboardKey.arrowRight);
      let leftArrow = dart.equals(key, keyboard_key.LogicalKeyboardKey.arrowLeft);
      let upArrow = dart.equals(key, keyboard_key.LogicalKeyboardKey.arrowUp);
      let downArrow = dart.equals(key, keyboard_key.LogicalKeyboardKey.arrowDown);
      if ((rightArrow || leftArrow) && !(rightArrow && leftArrow)) {
        if (dart.test(wordModifier)) {
          if (leftArrow) {
            let startPoint = editable.RenderEditable.previousCharacter(newSelection.extentOffset, this[_plainText], false);
            let textSelection = this[_selectWordAtOffset](new ui.TextPosition.new({offset: startPoint}));
            newSelection = newSelection.copyWith({extentOffset: textSelection.baseOffset});
          } else {
            let startPoint = editable.RenderEditable.nextCharacter(newSelection.extentOffset, this[_plainText], false);
            let textSelection = this[_selectWordAtOffset](new ui.TextPosition.new({offset: startPoint}));
            newSelection = newSelection.copyWith({extentOffset: textSelection.extentOffset});
          }
        } else if (dart.test(lineModifier)) {
          if (leftArrow) {
            let startPoint = editable.RenderEditable.previousCharacter(newSelection.extentOffset, this[_plainText], false);
            let textSelection = this[_selectLineAtOffset](new ui.TextPosition.new({offset: startPoint}));
            newSelection = newSelection.copyWith({extentOffset: textSelection.baseOffset});
          } else {
            let startPoint = editable.RenderEditable.nextCharacter(newSelection.extentOffset, this[_plainText], false);
            let textSelection = this[_selectLineAtOffset](new ui.TextPosition.new({offset: startPoint}));
            newSelection = newSelection.copyWith({extentOffset: textSelection.extentOffset});
          }
        } else {
          if (rightArrow && dart.notNull(newSelection.extentOffset) < this[_plainText].length) {
            let nextExtent = null;
            if (!dart.test(shift) && !dart.test(wordModifier) && !dart.test(lineModifier) && newSelection.start != newSelection.end) {
              nextExtent = newSelection.end;
            } else {
              nextExtent = editable.RenderEditable.nextCharacter(newSelection.extentOffset, this[_plainText]);
            }
            let distance = dart.notNull(nextExtent) - dart.notNull(newSelection.extentOffset);
            newSelection = newSelection.copyWith({extentOffset: nextExtent});
            if (dart.test(shift)) {
              this[_cursorResetLocation] = dart.notNull(this[_cursorResetLocation]) + distance;
            }
          } else if (leftArrow && dart.notNull(newSelection.extentOffset) > 0) {
            let previousExtent = null;
            if (!dart.test(shift) && !dart.test(wordModifier) && !dart.test(lineModifier) && newSelection.start != newSelection.end) {
              previousExtent = newSelection.start;
            } else {
              previousExtent = editable.RenderEditable.previousCharacter(newSelection.extentOffset, this[_plainText]);
            }
            let distance = dart.notNull(newSelection.extentOffset) - dart.notNull(previousExtent);
            newSelection = newSelection.copyWith({extentOffset: previousExtent});
            if (dart.test(shift)) {
              this[_cursorResetLocation] = dart.notNull(this[_cursorResetLocation]) - distance;
            }
          }
        }
      }
      if (downArrow || upArrow) {
        let preferredLineHeight = this[_textPainter].preferredLineHeight;
        let verticalOffset = upArrow ? -0.5 * dart.notNull(preferredLineHeight) : 1.5 * dart.notNull(preferredLineHeight);
        let caretOffset = this[_textPainter].getOffsetForCaret(new ui.TextPosition.new({offset: newSelection.extentOffset}), this[_caretPrototype]);
        let caretOffsetTranslated = caretOffset.translate(0.0, verticalOffset);
        let position = this[_textPainter].getPositionForOffset(caretOffsetTranslated);
        if (position.offset == newSelection.extentOffset) {
          if (downArrow) {
            newSelection = newSelection.copyWith({extentOffset: this[_plainText].length});
          } else if (upArrow) {
            newSelection = newSelection.copyWith({extentOffset: 0});
          }
          this[_wasSelectingVerticallyWithKeyboard] = shift;
        } else if (dart.test(this[_wasSelectingVerticallyWithKeyboard]) && dart.test(shift)) {
          newSelection = newSelection.copyWith({extentOffset: this[_cursorResetLocation]});
          this[_wasSelectingVerticallyWithKeyboard] = false;
        } else {
          newSelection = newSelection.copyWith({extentOffset: position.offset});
          this[_cursorResetLocation] = newSelection.extentOffset;
        }
      }
      if (!dart.test(shift)) {
        let newOffset = newSelection.extentOffset;
        if (!dart.test(dart.nullCheck(this.selection).isCollapsed)) {
          if (leftArrow) {
            newOffset = dart.notNull(newSelection.baseOffset) < dart.notNull(newSelection.extentOffset) ? newSelection.baseOffset : newSelection.extentOffset;
          } else if (rightArrow) {
            newOffset = dart.notNull(newSelection.baseOffset) > dart.notNull(newSelection.extentOffset) ? newSelection.baseOffset : newSelection.extentOffset;
          }
        }
        newSelection = new text_editing.TextSelection.fromPosition(new ui.TextPosition.new({offset: newOffset}));
      }
      this.textSelectionDelegate.textEditingValue = this.textSelectionDelegate.textEditingValue.copyWith({selection: newSelection});
      this[_handleSelectionChange](newSelection, editable.SelectionChangedCause.keyboard);
    }
    [_handleShortcuts](key) {
      if (key == null) dart.nullFailed(L0, 769, 52, "key");
      return async.async(dart.void, (function* _handleShortcuts() {
        let selection = this.textSelectionDelegate.textEditingValue.selection;
        let text = this.textSelectionDelegate.textEditingValue.text;
        if (!(selection != null)) dart.assertFailed(null, L0, 772, 12, "selection != null");
        if (!dart.test(editable.RenderEditable._shortcutKeys.contains(key))) dart.assertFailed("shortcut key " + dart.str(key) + " not recognized.", L0, 773, 12, "_shortcutKeys.contains(key)");
        if (dart.equals(key, keyboard_key.LogicalKeyboardKey.keyC)) {
          if (!dart.test(selection.isCollapsed)) {
            clipboard.Clipboard.setData(new clipboard.ClipboardData.new({text: selection.textInside(text)}));
          }
          return;
        }
        if (dart.equals(key, keyboard_key.LogicalKeyboardKey.keyX) && !dart.test(this[_readOnly])) {
          if (!dart.test(selection.isCollapsed)) {
            clipboard.Clipboard.setData(new clipboard.ClipboardData.new({text: selection.textInside(text)}));
            this.textSelectionDelegate.textEditingValue = new text_input.TextEditingValue.new({text: dart.notNull(selection.textBefore(text)) + dart.notNull(selection.textAfter(text)), selection: new text_editing.TextSelection.collapsed({offset: math.min(core.int, selection.start, selection.end)})});
          }
          return;
        }
        if (dart.equals(key, keyboard_key.LogicalKeyboardKey.keyV) && !dart.test(this[_readOnly])) {
          let data = (yield clipboard.Clipboard.getData("text/plain"));
          if (data != null) {
            this.textSelectionDelegate.textEditingValue = new text_input.TextEditingValue.new({text: dart.notNull(selection.textBefore(text)) + dart.nullCheck(data.text) + dart.notNull(selection.textAfter(text)), selection: new text_editing.TextSelection.collapsed({offset: math.min(core.int, selection.start, selection.end) + dart.nullCheck(data.text).length})});
          }
          return;
        }
        if (dart.equals(key, keyboard_key.LogicalKeyboardKey.keyA)) {
          this[_handleSelectionChange](selection.copyWith({baseOffset: 0, extentOffset: this.textSelectionDelegate.textEditingValue.text.length}), editable.SelectionChangedCause.keyboard);
          return;
        }
      }).bind(this));
    }
    [_handleDelete](opts) {
      let forward = opts && 'forward' in opts ? opts.forward : null;
      if (forward == null) dart.nullFailed(L0, 817, 38, "forward");
      let selection = this.textSelectionDelegate.textEditingValue.selection;
      let text = this.textSelectionDelegate.textEditingValue.text;
      if (!(this[_selection] != null)) dart.assertFailed(null, L0, 820, 12, "_selection != null");
      if (dart.test(this[_readOnly])) {
        return;
      }
      let textBefore = selection.textBefore(text);
      let textAfter = selection.textAfter(text);
      let cursorPosition = math.min(core.int, selection.start, selection.end);
      if (dart.test(selection.isCollapsed)) {
        if (!dart.test(forward) && textBefore[$isNotEmpty]) {
          let characterBoundary = editable.RenderEditable.previousCharacter(textBefore.length, textBefore);
          textBefore = textBefore[$substring](0, characterBoundary);
          cursorPosition = characterBoundary;
        }
        if (dart.test(forward) && textAfter[$isNotEmpty]) {
          let deleteCount = editable.RenderEditable.nextCharacter(0, textAfter);
          textAfter = textAfter[$substring](deleteCount);
        }
      }
      this.textSelectionDelegate.textEditingValue = new text_input.TextEditingValue.new({text: dart.notNull(textBefore) + dart.notNull(textAfter), selection: new text_editing.TextSelection.collapsed({offset: cursorPosition})});
    }
    markNeedsTextLayout() {
      this[_textLayoutLastMaxWidth] = null;
      this[_textLayoutLastMinWidth] = null;
      this.markNeedsLayout();
    }
    systemFontsDidChange() {
      super.systemFontsDidChange();
      this[_textPainter].markNeedsLayout();
      this[_textLayoutLastMaxWidth] = null;
      this[_textLayoutLastMinWidth] = null;
    }
    get [_plainText]() {
      this[_cachedPlainText] == null ? this[_cachedPlainText] = dart.nullCheck(this[_textPainter].text).toPlainText() : null;
      return dart.nullCheck(this[_cachedPlainText]);
    }
    get text() {
      return TextSpanN().as(this[_textPainter].text);
    }
    set text(value) {
      if (dart.equals(this[_textPainter].text, value)) return;
      this[_textPainter].text = value;
      this[_cachedPlainText] = null;
      this.markNeedsTextLayout();
      this.markNeedsSemanticsUpdate();
    }
    get textAlign() {
      return this[_textPainter].textAlign;
    }
    set textAlign(value) {
      if (value == null) dart.nullFailed(L0, 890, 27, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 891, 12, "value != null");
      if (dart.equals(this[_textPainter].textAlign, value)) return;
      this[_textPainter].textAlign = value;
      this.markNeedsTextLayout();
    }
    get textDirection() {
      return dart.nullCheck(this[_textPainter].textDirection);
    }
    set textDirection(value) {
      if (value == null) dart.nullFailed(L0, 915, 35, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 916, 12, "value != null");
      if (dart.equals(this[_textPainter].textDirection, value)) return;
      this[_textPainter].textDirection = value;
      this.markNeedsTextLayout();
      this.markNeedsSemanticsUpdate();
    }
    get locale() {
      return this[_textPainter].locale;
    }
    set locale(value) {
      if (dart.equals(this[_textPainter].locale, value)) return;
      this[_textPainter].locale = value;
      this.markNeedsTextLayout();
    }
    get strutStyle() {
      return this[_textPainter].strutStyle;
    }
    set strutStyle(value) {
      if (dart.equals(this[_textPainter].strutStyle, value)) return;
      this[_textPainter].strutStyle = value;
      this.markNeedsTextLayout();
    }
    get cursorColor() {
      return this[_cursorColor];
    }
    set cursorColor(value) {
      if (dart.equals(this[_cursorColor], value)) return;
      this[_cursorColor] = value;
      this.markNeedsPaint();
    }
    get backgroundCursorColor() {
      return this[_backgroundCursorColor];
    }
    set backgroundCursorColor(value) {
      if (dart.equals(this.backgroundCursorColor, value)) return;
      this[_backgroundCursorColor] = value;
      this.markNeedsPaint();
    }
    get showCursor() {
      return this[_showCursor];
    }
    set showCursor(value) {
      if (value == null) dart.nullFailed(L0, 978, 38, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 979, 12, "value != null");
      if (dart.equals(this[_showCursor], value)) return;
      if (dart.test(this.attached)) this[_showCursor].removeListener(dart.bind(this, 'markNeedsPaint'));
      this[_showCursor] = value;
      if (dart.test(this.attached)) this[_showCursor].addListener(dart.bind(this, 'markNeedsPaint'));
      this.markNeedsPaint();
    }
    get hasFocus() {
      return this[_hasFocus];
    }
    set hasFocus(value) {
      if (value == null) dart.nullFailed(L0, 994, 21, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 995, 12, "value != null");
      if (dart.equals(this[_hasFocus], value)) return;
      this[_hasFocus] = value;
      if (dart.test(this[_hasFocus])) {
        if (!!dart.test(this[_listenerAttached])) dart.assertFailed(null, L0, 1000, 14, "!_listenerAttached");
        raw_keyboard.RawKeyboard.instance.addListener(dart.bind(this, _handleKeyEvent));
        this[_listenerAttached] = true;
      } else {
        if (!dart.test(this[_listenerAttached])) dart.assertFailed(null, L0, 1004, 14, "_listenerAttached");
        raw_keyboard.RawKeyboard.instance.removeListener(dart.bind(this, _handleKeyEvent));
        this[_listenerAttached] = false;
      }
      this.markNeedsSemanticsUpdate();
    }
    get forceLine() {
      return this[_forceLine];
    }
    set forceLine(value) {
      if (value == null) dart.nullFailed(L0, 1014, 22, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 1015, 12, "value != null");
      if (dart.equals(this[_forceLine], value)) return;
      this[_forceLine] = value;
      this.markNeedsLayout();
    }
    get readOnly() {
      return this[_readOnly];
    }
    set readOnly(value) {
      if (value == null) dart.nullFailed(L0, 1025, 21, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 1026, 12, "value != null");
      if (dart.equals(this[_readOnly], value)) return;
      this[_readOnly] = value;
      this.markNeedsSemanticsUpdate();
    }
    get maxLines() {
      return this[_maxLines];
    }
    set maxLines(value) {
      if (!(value == null || dart.notNull(value) > 0)) dart.assertFailed(null, L0, 1047, 12, "value == null || value > 0");
      if (this.maxLines == value) return;
      this[_maxLines] = value;
      this.markNeedsTextLayout();
    }
    get minLines() {
      return this[_minLines];
    }
    set minLines(value) {
      if (!(value == null || dart.notNull(value) > 0)) dart.assertFailed(null, L0, 1059, 12, "value == null || value > 0");
      if (this.minLines == value) return;
      this[_minLines] = value;
      this.markNeedsTextLayout();
    }
    get expands() {
      return this[_expands];
    }
    set expands(value) {
      if (value == null) dart.nullFailed(L0, 1069, 20, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 1070, 12, "value != null");
      if (dart.equals(this.expands, value)) return;
      this[_expands] = value;
      this.markNeedsTextLayout();
    }
    get selectionColor() {
      return this[_selectionColor];
    }
    set selectionColor(value) {
      if (dart.equals(this[_selectionColor], value)) return;
      this[_selectionColor] = value;
      this.markNeedsPaint();
    }
    get textScaleFactor() {
      return this[_textPainter].textScaleFactor;
    }
    set textScaleFactor(value) {
      if (value == null) dart.nullFailed(L0, 1092, 30, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 1093, 12, "value != null");
      if (this[_textPainter].textScaleFactor == value) return;
      this[_textPainter].textScaleFactor = value;
      this.markNeedsTextLayout();
    }
    get selection() {
      return this[_selection];
    }
    set selection(value) {
      if (dart.equals(this[_selection], value)) return;
      this[_selection] = value;
      this[_selectionRects] = null;
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    get offset() {
      return this[_offset];
    }
    set offset(value) {
      if (value == null) dart.nullFailed(L0, 1126, 29, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 1127, 12, "value != null");
      if (dart.equals(this[_offset], value)) return;
      if (dart.test(this.attached)) this[_offset].removeListener(dart.bind(this, 'markNeedsPaint'));
      this[_offset] = value;
      if (dart.test(this.attached)) this[_offset].addListener(dart.bind(this, 'markNeedsPaint'));
      this.markNeedsLayout();
    }
    get cursorWidth() {
      return this[_cursorWidth];
    }
    set cursorWidth(value) {
      if (value == null) dart.nullFailed(L0, 1141, 26, "value");
      if (this[_cursorWidth] == value) return;
      this[_cursorWidth] = value;
      this.markNeedsLayout();
    }
    get cursorHeight() {
      let t0;
      t0 = this[_cursorHeight];
      return t0 == null ? this.preferredLineHeight : t0;
    }
    set cursorHeight(value) {
      if (this[_cursorHeight] == value) return;
      this[_cursorHeight] = value;
      this.markNeedsLayout();
    }
    get paintCursorAboveText() {
      return this[_paintCursorOnTop];
    }
    set paintCursorAboveText(value) {
      if (value == null) dart.nullFailed(L0, 1172, 33, "value");
      if (dart.equals(this[_paintCursorOnTop], value)) return;
      this[_paintCursorOnTop] = value;
      this.markNeedsLayout();
    }
    get cursorOffset() {
      return this[_cursorOffset];
    }
    set cursorOffset(value) {
      if (dart.equals(this[_cursorOffset], value)) return;
      this[_cursorOffset] = value;
      this.markNeedsLayout();
    }
    get cursorRadius() {
      return this[_cursorRadius];
    }
    set cursorRadius(value) {
      if (dart.equals(this[_cursorRadius], value)) return;
      this[_cursorRadius] = value;
      this.markNeedsPaint();
    }
    get startHandleLayerLink() {
      return this[_startHandleLayerLink];
    }
    set startHandleLayerLink(value) {
      if (value == null) dart.nullFailed(L0, 1214, 38, "value");
      if (dart.equals(this[_startHandleLayerLink], value)) return;
      this[_startHandleLayerLink] = value;
      this.markNeedsPaint();
    }
    get endHandleLayerLink() {
      return this[_endHandleLayerLink];
    }
    set endHandleLayerLink(value) {
      if (value == null) dart.nullFailed(L0, 1227, 36, "value");
      if (dart.equals(this[_endHandleLayerLink], value)) return;
      this[_endHandleLayerLink] = value;
      this.markNeedsPaint();
    }
    get floatingCursorAddedMargin() {
      return this[_floatingCursorAddedMargin];
    }
    set floatingCursorAddedMargin(value) {
      if (value == null) dart.nullFailed(L0, 1240, 44, "value");
      if (dart.equals(this[_floatingCursorAddedMargin], value)) return;
      this[_floatingCursorAddedMargin] = value;
      this.markNeedsPaint();
    }
    get [_floatingCursorOffset]() {
      let t0;
      return dart.test(this[__RenderEditable__floatingCursorOffset_isSet]) ? (t0 = this[__RenderEditable__floatingCursorOffset], t0) : dart.throw(new _internal.LateError.fieldNI("_floatingCursorOffset"));
    }
    set [_floatingCursorOffset](t0) {
      if (t0 == null) dart.nullFailed(L0, 1248, 15, "null");
      this[__RenderEditable__floatingCursorOffset_isSet] = true;
      this[__RenderEditable__floatingCursorOffset] = t0;
    }
    set [_floatingCursorTextPosition](t1) {
      if (t1 == null) dart.nullFailed(L0, 1249, 21, "null");
      this[__RenderEditable__floatingCursorTextPosition_isSet] = true;
      this[__RenderEditable__floatingCursorTextPosition] = t1;
    }
    get [_floatingCursorTextPosition]() {
      let t2;
      return dart.test(this[__RenderEditable__floatingCursorTextPosition_isSet]) ? (t2 = this[__RenderEditable__floatingCursorTextPosition], t2) : dart.throw(new _internal.LateError.fieldNI("_floatingCursorTextPosition"));
    }
    get selectionHeightStyle() {
      return this[_selectionHeightStyle];
    }
    set selectionHeightStyle(value) {
      if (value == null) dart.nullFailed(L0, 1256, 46, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 1257, 12, "value != null");
      if (dart.equals(this[_selectionHeightStyle], value)) return;
      this[_selectionHeightStyle] = value;
      this.markNeedsPaint();
    }
    get selectionWidthStyle() {
      return this[_selectionWidthStyle];
    }
    set selectionWidthStyle(value) {
      if (value == null) dart.nullFailed(L0, 1269, 44, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 1270, 12, "value != null");
      if (dart.equals(this[_selectionWidthStyle], value)) return;
      this[_selectionWidthStyle] = value;
      this.markNeedsPaint();
    }
    get enableInteractiveSelection() {
      return this[_enableInteractiveSelection];
    }
    set enableInteractiveSelection(value) {
      if (dart.equals(this[_enableInteractiveSelection], value)) return;
      this[_enableInteractiveSelection] = value;
      this.markNeedsTextLayout();
      this.markNeedsSemanticsUpdate();
    }
    get selectionEnabled() {
      let t2;
      t2 = this.enableInteractiveSelection;
      return t2 == null ? !dart.test(this.obscureText) : t2;
    }
    get promptRectColor() {
      return this[_promptRectPaint].color;
    }
    set promptRectColor(newValue) {
      if (newValue == null) {
        this.setPromptRectRange(null);
        return;
      }
      if (dart.equals(this.promptRectColor, newValue)) return;
      this[_promptRectPaint].color = newValue;
      if (this[_promptRectRange] != null) this.markNeedsPaint();
    }
    setPromptRectRange(newRange) {
      if (dart.equals(this[_promptRectRange], newRange)) return;
      this[_promptRectRange] = newRange;
      this.markNeedsPaint();
    }
    get maxScrollExtent() {
      return this[_maxScrollExtent];
    }
    get [_caretMargin]() {
      return 1 + dart.notNull(this.cursorWidth);
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (value == null) dart.nullFailed(L0, 1376, 25, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 1377, 12, "value != null");
      if (!dart.equals(value, this[_clipBehavior])) {
        this[_clipBehavior] = value;
        this.markNeedsPaint();
        this.markNeedsSemanticsUpdate();
      }
    }
    describeSemanticsConfiguration(config) {
      let t2, t2$, t2$0, t2$1;
      if (config == null) dart.nullFailed(L0, 1386, 62, "config");
      super.describeSemanticsConfiguration(config);
      t2 = config;
      (() => {
        t2.value = dart.test(this.obscureText) ? this.obscuringCharacter[$times](this[_plainText].length) : this[_plainText];
        t2.isObscured = this.obscureText;
        t2.isMultiline = this[_isMultiline];
        t2.textDirection = this.textDirection;
        t2.isFocused = this.hasFocus;
        t2.isTextField = true;
        t2.isReadOnly = this.readOnly;
        return t2;
      })();
      if (dart.test(this.hasFocus) && dart.test(this.selectionEnabled)) config.onSetSelection = dart.bind(this, _handleSetSelection);
      if (dart.test(this.selectionEnabled) && dart.equals((t2$ = this.selection, t2$ == null ? null : t2$.isValid), true)) {
        config.textSelection = this.selection;
        if (this[_textPainter].getOffsetBefore(dart.nullCheck(this.selection).extentOffset) != null) {
          t2$0 = config;
          (() => {
            t2$0.onMoveCursorBackwardByWord = dart.bind(this, _handleMoveCursorBackwardByWord);
            t2$0.onMoveCursorBackwardByCharacter = dart.bind(this, _handleMoveCursorBackwardByCharacter);
            return t2$0;
          })();
        }
        if (this[_textPainter].getOffsetAfter(dart.nullCheck(this.selection).extentOffset) != null) {
          t2$1 = config;
          (() => {
            t2$1.onMoveCursorForwardByWord = dart.bind(this, _handleMoveCursorForwardByWord);
            t2$1.onMoveCursorForwardByCharacter = dart.bind(this, _handleMoveCursorForwardByCharacter);
            return t2$1;
          })();
        }
      }
    }
    [_handleSetSelection](selection) {
      if (selection == null) dart.nullFailed(L0, 1422, 42, "selection");
      this[_handleSelectionChange](selection, editable.SelectionChangedCause.keyboard);
    }
    [_handleMoveCursorForwardByCharacter](extentSelection) {
      if (extentSelection == null) dart.nullFailed(L0, 1426, 49, "extentSelection");
      if (!(this.selection != null)) dart.assertFailed(null, L0, 1427, 12, "selection != null");
      let extentOffset = this[_textPainter].getOffsetAfter(dart.nullCheck(this.selection).extentOffset);
      if (extentOffset == null) return;
      let baseOffset = !dart.test(extentSelection) ? extentOffset : dart.nullCheck(this.selection).baseOffset;
      this[_handleSelectionChange](new text_editing.TextSelection.new({baseOffset: baseOffset, extentOffset: extentOffset}), editable.SelectionChangedCause.keyboard);
    }
    [_handleMoveCursorBackwardByCharacter](extentSelection) {
      if (extentSelection == null) dart.nullFailed(L0, 1437, 50, "extentSelection");
      if (!(this.selection != null)) dart.assertFailed(null, L0, 1438, 12, "selection != null");
      let extentOffset = this[_textPainter].getOffsetBefore(dart.nullCheck(this.selection).extentOffset);
      if (extentOffset == null) return;
      let baseOffset = !dart.test(extentSelection) ? extentOffset : dart.nullCheck(this.selection).baseOffset;
      this[_handleSelectionChange](new text_editing.TextSelection.new({baseOffset: baseOffset, extentOffset: extentOffset}), editable.SelectionChangedCause.keyboard);
    }
    [_handleMoveCursorForwardByWord](extentSelection) {
      if (extentSelection == null) dart.nullFailed(L0, 1448, 44, "extentSelection");
      if (!(this.selection != null)) dart.assertFailed(null, L0, 1449, 12, "selection != null");
      let currentWord = this[_textPainter].getWordBoundary(dart.nullCheck(this.selection).extent);
      let nextWord = this[_getNextWord](currentWord.end);
      if (nextWord == null) return;
      let baseOffset = dart.test(extentSelection) ? dart.nullCheck(this.selection).baseOffset : nextWord.start;
      this[_handleSelectionChange](new text_editing.TextSelection.new({baseOffset: baseOffset, extentOffset: nextWord.start}), editable.SelectionChangedCause.keyboard);
    }
    [_handleMoveCursorBackwardByWord](extentSelection) {
      if (extentSelection == null) dart.nullFailed(L0, 1464, 45, "extentSelection");
      if (!(this.selection != null)) dart.assertFailed(null, L0, 1465, 12, "selection != null");
      let currentWord = this[_textPainter].getWordBoundary(dart.nullCheck(this.selection).extent);
      let previousWord = this[_getPreviousWord](dart.notNull(currentWord.start) - 1);
      if (previousWord == null) return;
      let baseOffset = dart.test(extentSelection) ? dart.nullCheck(this.selection).baseOffset : previousWord.start;
      this[_handleSelectionChange](new text_editing.TextSelection.new({baseOffset: baseOffset, extentOffset: previousWord.start}), editable.SelectionChangedCause.keyboard);
    }
    [_getNextWord](offset) {
      if (offset == null) dart.nullFailed(L0, 1480, 31, "offset");
      while (true) {
        let range = this[_textPainter].getWordBoundary(new ui.TextPosition.new({offset: offset}));
        if (range == null || !dart.test(range.isValid) || dart.test(range.isCollapsed)) return null;
        if (!dart.test(this[_onlyWhitespace](range))) return range;
        offset = range.end;
      }
    }
    [_getPreviousWord](offset) {
      if (offset == null) dart.nullFailed(L0, 1491, 35, "offset");
      while (dart.notNull(offset) >= 0) {
        let range = this[_textPainter].getWordBoundary(new ui.TextPosition.new({offset: offset}));
        if (range == null || !dart.test(range.isValid) || dart.test(range.isCollapsed)) return null;
        if (!dart.test(this[_onlyWhitespace](range))) return range;
        offset = dart.notNull(range.start) - 1;
      }
      return null;
    }
    [_onlyWhitespace](range) {
      if (range == null) dart.nullFailed(L0, 1509, 34, "range");
      for (let i = range.start; dart.notNull(i) < dart.notNull(range.end); i = dart.notNull(i) + 1) {
        let codeUnit = dart.nullCheck(dart.nullCheck(this.text).codeUnitAt(i));
        if (!dart.test(editable._isWhitespace(codeUnit))) {
          return false;
        }
      }
      return true;
    }
    attach(owner) {
      let t2, t2$;
      object.PipelineOwner.as(owner);
      if (owner == null) dart.nullFailed(L0, 1520, 29, "owner");
      super.attach(owner);
      this[_tap] = (t2 = new tap.TapGestureRecognizer.new({debugOwner: this}), (() => {
        t2.onTapDown = dart.bind(this, _handleTapDown);
        t2.onTap = dart.bind(this, _handleTap);
        return t2;
      })());
      this[_longPress] = (t2$ = new long_press.LongPressGestureRecognizer.new({debugOwner: this}), (() => {
        t2$.onLongPress = dart.bind(this, _handleLongPress);
        return t2$;
      })());
      this[_offset].addListener(dart.bind(this, 'markNeedsPaint'));
      this[_showCursor].addListener(dart.bind(this, 'markNeedsPaint'));
    }
    detach() {
      this[_tap].dispose();
      this[_longPress].dispose();
      this[_offset].removeListener(dart.bind(this, 'markNeedsPaint'));
      this[_showCursor].removeListener(dart.bind(this, 'markNeedsPaint'));
      if (dart.test(this[_listenerAttached])) raw_keyboard.RawKeyboard.instance.removeListener(dart.bind(this, _handleKeyEvent));
      super.detach();
    }
    get [_isMultiline]() {
      return this.maxLines !== 1;
    }
    get [_viewportAxis]() {
      return dart.test(this[_isMultiline]) ? basic_types.Axis.vertical : basic_types.Axis.horizontal;
    }
    get [_paintOffset]() {
      switch (this[_viewportAxis]) {
        case C16 || CT.C16:
        {
          return new ui.Offset.new(-dart.notNull(this.offset.pixels), 0.0);
        }
        case C17 || CT.C17:
        {
          return new ui.Offset.new(0.0, -dart.notNull(this.offset.pixels));
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    get [_viewportExtent]() {
      if (!dart.test(this.hasSize)) dart.assertFailed(null, L0, 1555, 12, "hasSize");
      switch (this[_viewportAxis]) {
        case C16 || CT.C16:
        {
          return this.size.width;
        }
        case C17 || CT.C17:
        {
          return this.size.height;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    [_getMaxScrollExtent](contentSize) {
      if (contentSize == null) dart.nullFailed(L0, 1564, 35, "contentSize");
      if (!dart.test(this.hasSize)) dart.assertFailed(null, L0, 1565, 12, "hasSize");
      switch (this[_viewportAxis]) {
        case C16 || CT.C16:
        {
          return math.max(core.double, 0.0, dart.notNull(contentSize.width) - dart.notNull(this.size.width));
        }
        case C17 || CT.C17:
        {
          return math.max(core.double, 0.0, dart.notNull(contentSize.height) - dart.notNull(this.size.height));
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    get [_hasVisualOverflow]() {
      return dart.notNull(this[_maxScrollExtent]) > 0 || !dart.equals(this[_paintOffset], ui.Offset.zero);
    }
    getEndpointsForSelection(selection) {
      if (selection == null) dart.nullFailed(L0, 1590, 67, "selection");
      if (!(this.constraints != null)) dart.assertFailed(null, L0, 1591, 12, "constraints != null");
      this[_layoutText]({minWidth: this.constraints.minWidth, maxWidth: this.constraints.maxWidth});
      let paintOffset = this[_paintOffset];
      let boxes = dart.test(selection.isCollapsed) ? JSArrayOfTextBox().of([]) : this[_textPainter].getBoxesForSelection(selection);
      if (dart.test(boxes[$isEmpty])) {
        let caretOffset = this[_textPainter].getOffsetForCaret(selection.extent, this[_caretPrototype]);
        let start = new ui.Offset.new(0.0, this.preferredLineHeight)['+'](caretOffset)['+'](paintOffset);
        return JSArrayOfTextSelectionPoint().of([new editable.TextSelectionPoint.new(start, null)]);
      } else {
        let start = new ui.Offset.new(boxes[$first].start, boxes[$first].bottom)['+'](paintOffset);
        let end = new ui.Offset.new(boxes[$last].end, boxes[$last].bottom)['+'](paintOffset);
        return JSArrayOfTextSelectionPoint().of([new editable.TextSelectionPoint.new(start, boxes[$first].direction), new editable.TextSelectionPoint.new(end, boxes[$last].direction)]);
      }
    }
    getRectForComposingRange(range) {
      let t2;
      if (range == null) dart.nullFailed(L0, 1622, 44, "range");
      if (!(this.constraints != null)) dart.assertFailed(null, L0, 1623, 12, "constraints != null");
      if (!dart.test(range.isValid) || dart.test(range.isCollapsed)) return null;
      this[_layoutText]({minWidth: this.constraints.minWidth, maxWidth: this.constraints.maxWidth});
      let boxes = this[_textPainter].getBoxesForSelection(new text_editing.TextSelection.new({baseOffset: range.start, extentOffset: range.end}));
      t2 = boxes[$fold](RectN(), null, dart.fn((accum, incoming) => {
        let t2, t2$;
        if (incoming == null) dart.nullFailed(L0, 1634, 29, "incoming");
        t2$ = (t2 = accum, t2 == null ? null : t2.expandToInclude(incoming.toRect()));
        return t2$ == null ? incoming.toRect() : t2$;
      }, RectNAndTextBoxToRect()));
      return t2 == null ? null : t2.shift(this[_paintOffset]);
    }
    getPositionForPoint(globalPosition) {
      if (globalPosition == null) dart.nullFailed(L0, 1646, 43, "globalPosition");
      this[_layoutText]({minWidth: this.constraints.minWidth, maxWidth: this.constraints.maxWidth});
      globalPosition = globalPosition['+'](this[_paintOffset]._negate());
      return this[_textPainter].getPositionForOffset(this.globalToLocal(globalPosition));
    }
    getLocalRectForCaret(caretPosition) {
      if (caretPosition == null) dart.nullFailed(L0, 1663, 42, "caretPosition");
      this[_layoutText]({minWidth: this.constraints.minWidth, maxWidth: this.constraints.maxWidth});
      let caretOffset = this[_textPainter].getOffsetForCaret(caretPosition, this[_caretPrototype]);
      let rect = new ui.Rect.fromLTWH(0.0, 0.0, this.cursorWidth, this.cursorHeight).shift(caretOffset['+'](this[_paintOffset]));
      if (this[_cursorOffset] != null) rect = rect.shift(dart.nullCheck(this[_cursorOffset]));
      return rect.shift(this[_getPixelPerfectCursorOffset](rect));
    }
    computeMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 1676, 42, "height");
      this[_layoutText]({maxWidth: 1 / 0});
      return this[_textPainter].minIntrinsicWidth;
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 1682, 42, "height");
      this[_layoutText]({maxWidth: 1 / 0});
      return dart.notNull(this[_textPainter].maxIntrinsicWidth) + dart.notNull(this.cursorWidth);
    }
    get preferredLineHeight() {
      return this[_textPainter].preferredLineHeight;
    }
    [_preferredHeight](width) {
      if (width == null) dart.nullFailed(L0, 1691, 34, "width");
      let lockedMax = this.maxLines != null && this.minLines == null;
      let lockedBoth = this.minLines != null && this.minLines == this.maxLines;
      let singleLine = this.maxLines === 1;
      if (singleLine || lockedMax || lockedBoth) {
        return dart.notNull(this.preferredLineHeight) * dart.nullCheck(this.maxLines);
      }
      let minLimited = this.minLines != null && dart.nullCheck(this.minLines) > 1;
      let maxLimited = this.maxLines != null;
      if (minLimited || maxLimited) {
        this[_layoutText]({maxWidth: width});
        if (minLimited && dart.notNull(this[_textPainter].height) < dart.notNull(this.preferredLineHeight) * dart.nullCheck(this.minLines)) {
          return dart.notNull(this.preferredLineHeight) * dart.nullCheck(this.minLines);
        }
        if (maxLimited && dart.notNull(this[_textPainter].height) > dart.notNull(this.preferredLineHeight) * dart.nullCheck(this.maxLines)) {
          return dart.notNull(this.preferredLineHeight) * dart.nullCheck(this.maxLines);
        }
      }
      if (width === 1 / 0) {
        let text = this[_plainText];
        let lines = 1;
        for (let index = 0; index < text.length; index = index + 1) {
          if (text[$codeUnitAt](index) === 10) lines = lines + 1;
        }
        return dart.notNull(this.preferredLineHeight) * lines;
      }
      this[_layoutText]({maxWidth: width});
      return math.max(core.double, this.preferredLineHeight, this[_textPainter].height);
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 1728, 43, "width");
      return this[_preferredHeight](width);
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 1733, 43, "width");
      return this[_preferredHeight](width);
    }
    computeDistanceToActualBaseline(baseline) {
      if (baseline == null) dart.nullFailed(L0, 1738, 55, "baseline");
      this[_layoutText]({minWidth: this.constraints.minWidth, maxWidth: this.constraints.maxWidth});
      return this[_textPainter].computeDistanceToActualBaseline(baseline);
    }
    hitTestSelf(position) {
      if (position == null) dart.nullFailed(L0, 1744, 27, "position");
      return true;
    }
    get [_tap]() {
      let t2;
      return dart.test(this[__RenderEditable__tap_isSet]) ? (t2 = this[__RenderEditable__tap], t2) : dart.throw(new _internal.LateError.fieldNI("_tap"));
    }
    set [_tap](t2) {
      if (t2 == null) dart.nullFailed(L0, 1746, 29, "null");
      this[__RenderEditable__tap_isSet] = true;
      this[__RenderEditable__tap] = t2;
    }
    get [_longPress]() {
      let t3;
      return dart.test(this[__RenderEditable__longPress_isSet]) ? (t3 = this[__RenderEditable__longPress], t3) : dart.throw(new _internal.LateError.fieldNI("_longPress"));
    }
    set [_longPress](t3) {
      if (t3 == null) dart.nullFailed(L0, 1747, 35, "null");
      this[__RenderEditable__longPress_isSet] = true;
      this[__RenderEditable__longPress] = t3;
    }
    handleEvent(event, entry) {
      let t4;
      if (event == null) dart.nullFailed(L0, 1750, 33, "event");
      box.BoxHitTestEntry.as(entry);
      if (entry == null) dart.nullFailed(L0, 1750, 56, "entry");
      if (!dart.test(this.debugHandleEvent(event, entry))) dart.assertFailed(null, L0, 1751, 12, "debugHandleEvent(event, entry)");
      if (events.PointerDownEvent.is(event)) {
        if (!!dart.test(this.debugNeedsLayout)) dart.assertFailed(null, L0, 1753, 14, "!debugNeedsLayout");
        let offset = entry.localPosition;
        let position = this[_textPainter].getPositionForOffset(offset);
        let span = dart.nullCheck(this[_textPainter].text).getSpanForPosition(position);
        if (span != null && text_span.TextSpan.is(span)) {
          let textSpan = span;
          t4 = textSpan.recognizer;
          t4 == null ? null : t4.addPointer(event);
        }
        if (!dart.test(this.ignorePointer) && this.onSelectionChanged != null) {
          this[_tap].addPointer(event);
          this[_longPress].addPointer(event);
        }
      }
    }
    handleTapDown(details) {
      if (details == null) dart.nullFailed(L0, 1779, 37, "details");
      this[_lastTapDownPosition] = details.globalPosition;
    }
    [_handleTapDown](details) {
      if (details == null) dart.nullFailed(L0, 1782, 38, "details");
      if (!!dart.test(this.ignorePointer)) dart.assertFailed(null, L0, 1783, 12, "!ignorePointer");
      this.handleTapDown(details);
    }
    handleTap() {
      this.selectPosition({cause: editable.SelectionChangedCause.tap});
    }
    [_handleTap]() {
      if (!!dart.test(this.ignorePointer)) dart.assertFailed(null, L0, 1797, 12, "!ignorePointer");
      this.handleTap();
    }
    handleDoubleTap() {
      this.selectWord({cause: editable.SelectionChangedCause.doubleTap});
    }
    handleLongPress() {
      this.selectWord({cause: editable.SelectionChangedCause.longPress});
    }
    [_handleLongPress]() {
      if (!!dart.test(this.ignorePointer)) dart.assertFailed(null, L0, 1821, 12, "!ignorePointer");
      this.handleLongPress();
    }
    selectPosition(opts) {
      let cause = opts && 'cause' in opts ? opts.cause : null;
      if (cause == null) dart.nullFailed(L0, 1835, 56, "cause");
      this.selectPositionAt({from: dart.nullCheck(this[_lastTapDownPosition]), cause: cause});
    }
    selectPositionAt(opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      if (from == null) dart.nullFailed(L0, 1840, 43, "from");
      let to = opts && 'to' in opts ? opts.to : null;
      let cause = opts && 'cause' in opts ? opts.cause : null;
      if (cause == null) dart.nullFailed(L0, 1840, 92, "cause");
      if (!(cause != null)) dart.assertFailed(null, L0, 1841, 12, "cause != null");
      if (!(from != null)) dart.assertFailed(null, L0, 1842, 12, "from != null");
      this[_layoutText]({minWidth: this.constraints.minWidth, maxWidth: this.constraints.maxWidth});
      if (this.onSelectionChanged == null) {
        return;
      }
      let fromPosition = this[_textPainter].getPositionForOffset(this.globalToLocal(from['-'](this[_paintOffset])));
      let toPosition = to == null ? null : this[_textPainter].getPositionForOffset(this.globalToLocal(to['-'](this[_paintOffset])));
      let baseOffset = fromPosition.offset;
      let extentOffset = fromPosition.offset;
      if (toPosition != null) {
        baseOffset = math.min(core.int, fromPosition.offset, toPosition.offset);
        extentOffset = math.max(core.int, fromPosition.offset, toPosition.offset);
      }
      let newSelection = new text_editing.TextSelection.new({baseOffset: baseOffset, extentOffset: extentOffset, affinity: fromPosition.affinity});
      this[_handleSelectionChange](newSelection, cause);
    }
    selectWord(opts) {
      let cause = opts && 'cause' in opts ? opts.cause : null;
      if (cause == null) dart.nullFailed(L0, 1871, 52, "cause");
      this.selectWordsInRange({from: dart.nullCheck(this[_lastTapDownPosition]), cause: cause});
    }
    selectWordsInRange(opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      if (from == null) dart.nullFailed(L0, 1881, 45, "from");
      let to = opts && 'to' in opts ? opts.to : null;
      let cause = opts && 'cause' in opts ? opts.cause : null;
      if (cause == null) dart.nullFailed(L0, 1881, 94, "cause");
      if (!(cause != null)) dart.assertFailed(null, L0, 1882, 12, "cause != null");
      if (!(from != null)) dart.assertFailed(null, L0, 1883, 12, "from != null");
      this[_layoutText]({minWidth: this.constraints.minWidth, maxWidth: this.constraints.maxWidth});
      if (this.onSelectionChanged == null) {
        return;
      }
      let firstPosition = this[_textPainter].getPositionForOffset(this.globalToLocal(from['-'](this[_paintOffset])));
      let firstWord = this[_selectWordAtOffset](firstPosition);
      let lastWord = to == null ? firstWord : this[_selectWordAtOffset](this[_textPainter].getPositionForOffset(this.globalToLocal(to['-'](this[_paintOffset]))));
      this[_handleSelectionChange](new text_editing.TextSelection.new({baseOffset: firstWord.base.offset, extentOffset: lastWord.extent.offset, affinity: firstWord.affinity}), cause);
    }
    selectWordEdge(opts) {
      let cause = opts && 'cause' in opts ? opts.cause : null;
      if (cause == null) dart.nullFailed(L0, 1906, 56, "cause");
      if (!(cause != null)) dart.assertFailed(null, L0, 1907, 12, "cause != null");
      this[_layoutText]({minWidth: this.constraints.minWidth, maxWidth: this.constraints.maxWidth});
      if (!(this[_lastTapDownPosition] != null)) dart.assertFailed(null, L0, 1909, 12, "_lastTapDownPosition != null");
      if (this.onSelectionChanged == null) {
        return;
      }
      let position = this[_textPainter].getPositionForOffset(this.globalToLocal(dart.nullCheck(this[_lastTapDownPosition])['-'](this[_paintOffset])));
      let word = this[_textPainter].getWordBoundary(position);
      if (dart.notNull(position.offset) - dart.notNull(word.start) <= 1) {
        this[_handleSelectionChange](new text_editing.TextSelection.collapsed({offset: word.start, affinity: ui.TextAffinity.downstream}), cause);
      } else {
        this[_handleSelectionChange](new text_editing.TextSelection.collapsed({offset: word.end, affinity: ui.TextAffinity.upstream}), cause);
      }
    }
    [_selectWordAtOffset](position) {
      let t4;
      if (position == null) dart.nullFailed(L0, 1928, 50, "position");
      if (!(this[_textLayoutLastMaxWidth] == this.constraints.maxWidth && this[_textLayoutLastMinWidth] == this.constraints.minWidth)) dart.assertFailed("Last width (" + dart.str(this[_textLayoutLastMinWidth]) + ", " + dart.str(this[_textLayoutLastMaxWidth]) + ") not the same as max width constraint (" + dart.str(this.constraints.minWidth) + ", " + dart.str(this.constraints.maxWidth) + ").", L0, 1929, 12, "_textLayoutLastMaxWidth == constraints.maxWidth &&\n           _textLayoutLastMinWidth == constraints.minWidth");
      let word = this[_textPainter].getWordBoundary(position);
      if (dart.notNull(position.offset) >= dart.notNull(word.end)) return new text_editing.TextSelection.fromPosition(position);
      if (dart.test(this.obscureText)) {
        return new text_editing.TextSelection.new({baseOffset: 0, extentOffset: this[_plainText].length});
      } else if ((t4 = this.text, t4 == null ? null : t4.text) != null && dart.test(editable._isWhitespace(dart.nullCheck(dart.nullCheck(this.text).text)[$codeUnitAt](position.offset))) && dart.notNull(position.offset) > 0) {
        if (!(platform.defaultTargetPlatform != null)) dart.assertFailed(null, L0, 1943, 14, "defaultTargetPlatform != null");
        switch (platform.defaultTargetPlatform) {
          case C18 || CT.C18:
          {
            let startIndex = dart.notNull(position.offset) - 1;
            while (dart.notNull(startIndex) > 0 && (dart.test(editable._isWhitespace(dart.nullCheck(dart.nullCheck(this.text).text)[$codeUnitAt](startIndex))) || dart.nullCheck(dart.nullCheck(this.text).text) === "???" || dart.nullCheck(dart.nullCheck(this.text).text) === "???")) {
              startIndex = dart.notNull(startIndex) - 1;
            }
            if (dart.notNull(startIndex) > 0) {
              let positionBeforeSpace = new ui.TextPosition.new({offset: startIndex, affinity: position.affinity});
              let wordBeforeSpace = this[_textPainter].getWordBoundary(positionBeforeSpace);
              startIndex = wordBeforeSpace.start;
            }
            return new text_editing.TextSelection.new({baseOffset: startIndex, extentOffset: position.offset});
          }
          case C19 || CT.C19:
          case C20 || CT.C20:
          case C21 || CT.C21:
          case C22 || CT.C22:
          case C23 || CT.C23:
          {
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      return new text_editing.TextSelection.new({baseOffset: word.start, extentOffset: word.end});
    }
    [_selectLineAtOffset](position) {
      if (position == null) dart.nullFailed(L0, 1977, 50, "position");
      if (!(this[_textLayoutLastMaxWidth] == this.constraints.maxWidth && this[_textLayoutLastMinWidth] == this.constraints.minWidth)) dart.assertFailed("Last width (" + dart.str(this[_textLayoutLastMinWidth]) + ", " + dart.str(this[_textLayoutLastMaxWidth]) + ") not the same as max width constraint (" + dart.str(this.constraints.minWidth) + ", " + dart.str(this.constraints.maxWidth) + ").", L0, 1978, 12, "_textLayoutLastMaxWidth == constraints.maxWidth &&\n        _textLayoutLastMinWidth == constraints.minWidth");
      let line = this[_textPainter].getLineBoundary(position);
      if (dart.notNull(position.offset) >= dart.notNull(line.end)) return new text_editing.TextSelection.fromPosition(position);
      if (dart.test(this.obscureText)) {
        return new text_editing.TextSelection.new({baseOffset: 0, extentOffset: this[_plainText].length});
      }
      return new text_editing.TextSelection.new({baseOffset: line.start, extentOffset: line.end});
    }
    [_layoutText](opts) {
      let minWidth = opts && 'minWidth' in opts ? opts.minWidth : 0;
      if (minWidth == null) dart.nullFailed(L0, 1991, 29, "minWidth");
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : 1 / 0;
      if (maxWidth == null) dart.nullFailed(L0, 1991, 52, "maxWidth");
      if (!(maxWidth != null && minWidth != null)) dart.assertFailed(null, L0, 1992, 12, "maxWidth != null && minWidth != null");
      if (this[_textLayoutLastMaxWidth] == maxWidth && this[_textLayoutLastMinWidth] == minWidth) return;
      let availableMaxWidth = math.max(core.double, 0.0, dart.notNull(maxWidth) - dart.notNull(this[_caretMargin]));
      let availableMinWidth = math.min(core.double, minWidth, availableMaxWidth);
      let textMaxWidth = dart.test(this[_isMultiline]) ? availableMaxWidth : 1 / 0;
      let textMinWidth = dart.test(this.forceLine) ? availableMaxWidth : availableMinWidth;
      this[_textPainter].layout({minWidth: textMinWidth, maxWidth: textMaxWidth});
      this[_textLayoutLastMinWidth] = minWidth;
      this[_textLayoutLastMaxWidth] = maxWidth;
    }
    set [_caretPrototype](t4) {
      if (t4 == null) dart.nullFailed(L0, 2007, 13, "null");
      this[__RenderEditable__caretPrototype_isSet] = true;
      this[__RenderEditable__caretPrototype] = t4;
    }
    get [_caretPrototype]() {
      let t5;
      return dart.test(this[__RenderEditable__caretPrototype_isSet]) ? (t5 = this[__RenderEditable__caretPrototype], t5) : dart.throw(new _internal.LateError.fieldNI("_caretPrototype"));
    }
    [_computeCaretPrototype]() {
      if (!(platform.defaultTargetPlatform != null)) dart.assertFailed(null, L0, 2021, 12, "defaultTargetPlatform != null");
      switch (platform.defaultTargetPlatform) {
        case C18 || CT.C18:
        case C21 || CT.C21:
        {
          this[_caretPrototype] = new ui.Rect.fromLTWH(0.0, 0.0, this.cursorWidth, dart.notNull(this.cursorHeight) + 2);
          break;
        }
        case C19 || CT.C19:
        case C20 || CT.C20:
        case C22 || CT.C22:
        case C23 || CT.C23:
        {
          this[_caretPrototype] = new ui.Rect.fromLTWH(0.0, 2, this.cursorWidth, dart.notNull(this.cursorHeight) - 2.0 * 2);
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 2037, 40, "constraints");
      this[_layoutText]({minWidth: constraints.minWidth, maxWidth: constraints.maxWidth});
      let width = dart.test(this.forceLine) ? constraints.maxWidth : constraints.constrainWidth(dart.notNull(this[_textPainter].size.width) + dart.notNull(this[_caretMargin]));
      return new ui.Size.new(width, constraints.constrainHeight(this[_preferredHeight](constraints.maxWidth)));
    }
    performLayout() {
      let constraints = this.constraints;
      this[_layoutText]({minWidth: constraints.minWidth, maxWidth: constraints.maxWidth});
      this[_computeCaretPrototype]();
      this[_selectionRects] = null;
      let textPainterSize = this[_textPainter].size;
      let width = dart.test(this.forceLine) ? constraints.maxWidth : constraints.constrainWidth(dart.notNull(this[_textPainter].size.width) + dart.notNull(this[_caretMargin]));
      this.size = new ui.Size.new(width, constraints.constrainHeight(this[_preferredHeight](constraints.maxWidth)));
      let contentSize = new ui.Size.new(dart.notNull(textPainterSize.width) + dart.notNull(this[_caretMargin]), textPainterSize.height);
      this[_maxScrollExtent] = this[_getMaxScrollExtent](contentSize);
      this.offset.applyViewportDimension(this[_viewportExtent]);
      this.offset.applyContentDimensions(0.0, this[_maxScrollExtent]);
    }
    [_getPixelPerfectCursorOffset](caretRect) {
      if (caretRect == null) dart.nullFailed(L0, 2070, 44, "caretRect");
      let caretPosition = this.localToGlobal(caretRect.topLeft);
      let pixelMultiple = 1.0 / dart.notNull(this[_devicePixelRatio]);
      let pixelPerfectOffsetX = caretPosition.dx[$isFinite] ? (dart.notNull(caretPosition.dx) / pixelMultiple)[$round]() * pixelMultiple - dart.notNull(caretPosition.dx) : 0.0;
      let pixelPerfectOffsetY = caretPosition.dy[$isFinite] ? (dart.notNull(caretPosition.dy) / pixelMultiple)[$round]() * pixelMultiple - dart.notNull(caretPosition.dy) : 0.0;
      return new ui.Offset.new(pixelPerfectOffsetX, pixelPerfectOffsetY);
    }
    [_paintCaret](canvas, effectiveOffset, textPosition) {
      let t5;
      if (canvas == null) dart.nullFailed(L0, 2082, 27, "canvas");
      if (effectiveOffset == null) dart.nullFailed(L0, 2082, 42, "effectiveOffset");
      if (textPosition == null) dart.nullFailed(L0, 2082, 72, "textPosition");
      if (!(this[_textLayoutLastMaxWidth] == this.constraints.maxWidth && this[_textLayoutLastMinWidth] == this.constraints.minWidth)) dart.assertFailed("Last width (" + dart.str(this[_textLayoutLastMinWidth]) + ", " + dart.str(this[_textLayoutLastMaxWidth]) + ") not the same as max width constraint (" + dart.str(this.constraints.minWidth) + ", " + dart.str(this.constraints.maxWidth) + ").", L0, 2083, 12, "_textLayoutLastMaxWidth == constraints.maxWidth &&\n           _textLayoutLastMinWidth == constraints.minWidth");
      if (!(this[_caretPrototype] != null)) dart.assertFailed(null, L0, 2086, 12, "_caretPrototype != null");
      let paint = (t5 = ui.Paint.new(), (() => {
        t5.color = dart.nullCheck(dart.test(this[_floatingCursorOn]) ? this.backgroundCursorColor : this[_cursorColor]);
        return t5;
      })());
      let caretOffset = this[_textPainter].getOffsetForCaret(textPosition, this[_caretPrototype])['+'](effectiveOffset);
      let caretRect = this[_caretPrototype].shift(caretOffset);
      if (this[_cursorOffset] != null) caretRect = caretRect.shift(dart.nullCheck(this[_cursorOffset]));
      let caretHeight = this[_textPainter].getFullHeightForCaret(textPosition, this[_caretPrototype]);
      if (caretHeight != null) {
        switch (platform.defaultTargetPlatform) {
          case C18 || CT.C18:
          case C21 || CT.C21:
          {
            let heightDiff = dart.notNull(caretHeight) - dart.notNull(caretRect.height);
            caretRect = new ui.Rect.fromLTWH(caretRect.left, dart.notNull(caretRect.top) + heightDiff / 2, caretRect.width, caretRect.height);
            break;
          }
          case C19 || CT.C19:
          case C20 || CT.C20:
          case C22 || CT.C22:
          case C23 || CT.C23:
          {
            caretRect = new ui.Rect.fromLTWH(caretRect.left, dart.notNull(caretRect.top) - 2, caretRect.width, caretHeight);
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      caretRect = caretRect.shift(this[_getPixelPerfectCursorOffset](caretRect));
      if (this.cursorRadius == null) {
        canvas.drawRect(caretRect, paint);
      } else {
        let caretRRect = new ui.RRect.fromRectAndRadius(caretRect, dart.nullCheck(this.cursorRadius));
        canvas.drawRRect(caretRRect, paint);
      }
      if (!dart.equals(caretRect, this[_lastCaretRect])) {
        this[_lastCaretRect] = caretRect;
        if (this.onCaretChanged != null) dart.nullCheck(this.onCaretChanged)(caretRect);
      }
    }
    setFloatingCursor(state, boundedOffset, lastTextPosition, opts) {
      if (state == null) dart.nullFailed(L0, 2146, 50, "state");
      if (boundedOffset == null) dart.nullFailed(L0, 2146, 64, "boundedOffset");
      if (lastTextPosition == null) dart.nullFailed(L0, 2146, 92, "lastTextPosition");
      let resetLerpValue = opts && 'resetLerpValue' in opts ? opts.resetLerpValue : null;
      if (!(state != null)) dart.assertFailed(null, L0, 2147, 12, "state != null");
      if (!(boundedOffset != null)) dart.assertFailed(null, L0, 2148, 12, "boundedOffset != null");
      if (!(lastTextPosition != null)) dart.assertFailed(null, L0, 2149, 12, "lastTextPosition != null");
      if (dart.equals(state, text_input.FloatingCursorDragState.Start)) {
        this[_relativeOrigin] = C15 || CT.C15;
        this[_previousOffset] = null;
        this[_resetOriginOnBottom] = false;
        this[_resetOriginOnTop] = false;
        this[_resetOriginOnRight] = false;
        this[_resetOriginOnBottom] = false;
      }
      this[_floatingCursorOn] = !dart.equals(state, text_input.FloatingCursorDragState.End);
      this[_resetFloatingCursorAnimationValue] = resetLerpValue;
      if (dart.test(this[_floatingCursorOn])) {
        this[_floatingCursorOffset] = boundedOffset;
        this[_floatingCursorTextPosition] = lastTextPosition;
      }
      this.markNeedsPaint();
    }
    [_paintFloatingCaret](canvas, effectiveOffset) {
      let t5;
      if (canvas == null) dart.nullFailed(L0, 2167, 35, "canvas");
      if (effectiveOffset == null) dart.nullFailed(L0, 2167, 50, "effectiveOffset");
      if (!(this[_textLayoutLastMaxWidth] == this.constraints.maxWidth && this[_textLayoutLastMinWidth] == this.constraints.minWidth)) dart.assertFailed("Last width (" + dart.str(this[_textLayoutLastMinWidth]) + ", " + dart.str(this[_textLayoutLastMaxWidth]) + ") not the same as max width constraint (" + dart.str(this.constraints.minWidth) + ", " + dart.str(this.constraints.maxWidth) + ").", L0, 2168, 12, "_textLayoutLastMaxWidth == constraints.maxWidth &&\n           _textLayoutLastMinWidth == constraints.minWidth");
      if (!dart.test(this[_floatingCursorOn])) dart.assertFailed(null, L0, 2171, 12, "_floatingCursorOn");
      let paint = (t5 = ui.Paint.new(), (() => {
        t5.color = dart.nullCheck(this[_cursorColor]).withOpacity(0.75);
        return t5;
      })());
      let sizeAdjustmentX = editable._kFloatingCaretSizeIncrease.dx;
      let sizeAdjustmentY = editable._kFloatingCaretSizeIncrease.dy;
      if (this[_resetFloatingCursorAnimationValue] != null) {
        sizeAdjustmentX = dart.nullCheck(ui.lerpDouble(sizeAdjustmentX, 0, dart.nullCheck(this[_resetFloatingCursorAnimationValue])));
        sizeAdjustmentY = dart.nullCheck(ui.lerpDouble(sizeAdjustmentY, 0, dart.nullCheck(this[_resetFloatingCursorAnimationValue])));
      }
      let floatingCaretPrototype = new ui.Rect.fromLTRB(dart.notNull(this[_caretPrototype].left) - dart.notNull(sizeAdjustmentX), dart.notNull(this[_caretPrototype].top) - dart.notNull(sizeAdjustmentY), dart.notNull(this[_caretPrototype].right) + dart.notNull(sizeAdjustmentX), dart.notNull(this[_caretPrototype].bottom) + dart.notNull(sizeAdjustmentY));
      let caretRect = floatingCaretPrototype.shift(effectiveOffset);
      let floatingCursorRadius = C24 || CT.C24;
      let caretRRect = new ui.RRect.fromRectAndRadius(caretRect, floatingCursorRadius);
      canvas.drawRRect(caretRRect, paint);
    }
    calculateBoundedFloatingCursorOffset(rawCursorOffset) {
      if (rawCursorOffset == null) dart.nullFailed(L0, 2209, 54, "rawCursorOffset");
      let deltaPosition = C15 || CT.C15;
      let topBound = -dart.notNull(this.floatingCursorAddedMargin.top);
      let bottomBound = dart.notNull(this[_textPainter].height) - dart.notNull(this.preferredLineHeight) + dart.notNull(this.floatingCursorAddedMargin.bottom);
      let leftBound = -dart.notNull(this.floatingCursorAddedMargin.left);
      let rightBound = dart.notNull(this[_textPainter].width) + dart.notNull(this.floatingCursorAddedMargin.right);
      if (this[_previousOffset] != null) deltaPosition = rawCursorOffset['-'](dart.nullCheck(this[_previousOffset]));
      if (dart.test(this[_resetOriginOnLeft]) && dart.notNull(deltaPosition.dx) > 0) {
        this[_relativeOrigin] = new ui.Offset.new(dart.notNull(rawCursorOffset.dx) - leftBound, this[_relativeOrigin].dy);
        this[_resetOriginOnLeft] = false;
      } else if (dart.test(this[_resetOriginOnRight]) && dart.notNull(deltaPosition.dx) < 0) {
        this[_relativeOrigin] = new ui.Offset.new(dart.notNull(rawCursorOffset.dx) - rightBound, this[_relativeOrigin].dy);
        this[_resetOriginOnRight] = false;
      }
      if (dart.test(this[_resetOriginOnTop]) && dart.notNull(deltaPosition.dy) > 0) {
        this[_relativeOrigin] = new ui.Offset.new(this[_relativeOrigin].dx, dart.notNull(rawCursorOffset.dy) - topBound);
        this[_resetOriginOnTop] = false;
      } else if (dart.test(this[_resetOriginOnBottom]) && dart.notNull(deltaPosition.dy) < 0) {
        this[_relativeOrigin] = new ui.Offset.new(this[_relativeOrigin].dx, dart.notNull(rawCursorOffset.dy) - bottomBound);
        this[_resetOriginOnBottom] = false;
      }
      let currentX = dart.notNull(rawCursorOffset.dx) - dart.notNull(this[_relativeOrigin].dx);
      let currentY = dart.notNull(rawCursorOffset.dy) - dart.notNull(this[_relativeOrigin].dy);
      let adjustedX = math.min(core.double, math.max(core.double, currentX, leftBound), rightBound);
      let adjustedY = math.min(core.double, math.max(core.double, currentY, topBound), bottomBound);
      let adjustedOffset = new ui.Offset.new(adjustedX, adjustedY);
      if (currentX < leftBound && dart.notNull(deltaPosition.dx) < 0)
        this[_resetOriginOnLeft] = true;
      else if (currentX > rightBound && dart.notNull(deltaPosition.dx) > 0) this[_resetOriginOnRight] = true;
      if (currentY < topBound && dart.notNull(deltaPosition.dy) < 0)
        this[_resetOriginOnTop] = true;
      else if (currentY > bottomBound && dart.notNull(deltaPosition.dy) > 0) this[_resetOriginOnBottom] = true;
      this[_previousOffset] = rawCursorOffset;
      return adjustedOffset;
    }
    [_paintSelection](canvas, effectiveOffset) {
      let t5;
      if (canvas == null) dart.nullFailed(L0, 2256, 31, "canvas");
      if (effectiveOffset == null) dart.nullFailed(L0, 2256, 46, "effectiveOffset");
      if (!(this[_textLayoutLastMaxWidth] == this.constraints.maxWidth && this[_textLayoutLastMinWidth] == this.constraints.minWidth)) dart.assertFailed("Last width (" + dart.str(this[_textLayoutLastMinWidth]) + ", " + dart.str(this[_textLayoutLastMaxWidth]) + ") not the same as max width constraint (" + dart.str(this.constraints.minWidth) + ", " + dart.str(this.constraints.maxWidth) + ").", L0, 2257, 12, "_textLayoutLastMaxWidth == constraints.maxWidth &&\n           _textLayoutLastMinWidth == constraints.minWidth");
      if (!(this[_selectionRects] != null)) dart.assertFailed(null, L0, 2260, 12, "_selectionRects != null");
      let paint = (t5 = ui.Paint.new(), (() => {
        t5.color = dart.nullCheck(this[_selectionColor]);
        return t5;
      })());
      for (let box of dart.nullCheck(this[_selectionRects]))
        canvas.drawRect(box.toRect().shift(effectiveOffset), paint);
    }
    [_paintPromptRectIfNeeded](canvas, effectiveOffset) {
      if (canvas == null) dart.nullFailed(L0, 2267, 40, "canvas");
      if (effectiveOffset == null) dart.nullFailed(L0, 2267, 55, "effectiveOffset");
      if (this[_promptRectRange] == null || this.promptRectColor == null) {
        return;
      }
      let boxes = this[_textPainter].getBoxesForSelection(new text_editing.TextSelection.new({baseOffset: dart.nullCheck(this[_promptRectRange]).start, extentOffset: dart.nullCheck(this[_promptRectRange]).end}));
      for (let box of boxes) {
        canvas.drawRect(box.toRect().shift(effectiveOffset), this[_promptRectPaint]);
      }
    }
    [_paintContents](context, offset) {
      if (context == null) dart.nullFailed(L0, 2284, 39, "context");
      if (offset == null) dart.nullFailed(L0, 2284, 55, "offset");
      if (!(this[_textLayoutLastMaxWidth] == this.constraints.maxWidth && this[_textLayoutLastMinWidth] == this.constraints.minWidth)) dart.assertFailed("Last width (" + dart.str(this[_textLayoutLastMinWidth]) + ", " + dart.str(this[_textLayoutLastMaxWidth]) + ") not the same as max width constraint (" + dart.str(this.constraints.minWidth) + ", " + dart.str(this.constraints.maxWidth) + ").", L0, 2285, 12, "_textLayoutLastMaxWidth == constraints.maxWidth &&\n           _textLayoutLastMinWidth == constraints.minWidth");
      let effectiveOffset = offset['+'](this[_paintOffset]);
      let showSelection = false;
      let showCaret = false;
      if (this.selection != null && !dart.test(this[_floatingCursorOn])) {
        if (dart.test(dart.nullCheck(this.selection).isCollapsed) && dart.test(this[_showCursor].value) && this.cursorColor != null)
          showCaret = true;
        else if (!dart.test(dart.nullCheck(this.selection).isCollapsed) && this[_selectionColor] != null) showSelection = true;
        this[_updateSelectionExtentsVisibility](effectiveOffset);
      }
      if (showSelection) {
        if (!(this.selection != null)) dart.assertFailed(null, L0, 2302, 14, "selection != null");
        this[_selectionRects] == null ? this[_selectionRects] = this[_textPainter].getBoxesForSelection(dart.nullCheck(this.selection), {boxHeightStyle: this[_selectionHeightStyle], boxWidthStyle: this[_selectionWidthStyle]}) : null;
        this[_paintSelection](context.canvas, effectiveOffset);
      }
      this[_paintPromptRectIfNeeded](context.canvas, effectiveOffset);
      if (dart.test(this.paintCursorAboveText)) this[_textPainter].paint(context.canvas, effectiveOffset);
      if (showCaret) {
        if (!(this.selection != null)) dart.assertFailed(null, L0, 2315, 14, "selection != null");
        this[_paintCaret](context.canvas, effectiveOffset, dart.nullCheck(this.selection).extent);
      }
      if (!dart.test(this.paintCursorAboveText)) this[_textPainter].paint(context.canvas, effectiveOffset);
      if (dart.test(this[_floatingCursorOn])) {
        if (this[_resetFloatingCursorAnimationValue] == null) this[_paintCaret](context.canvas, effectiveOffset, this[_floatingCursorTextPosition]);
        this[_paintFloatingCaret](context.canvas, this[_floatingCursorOffset]);
      }
    }
    [_paintHandleLayers](context, endpoints) {
      if (context == null) dart.nullFailed(L0, 2329, 43, "context");
      if (endpoints == null) dart.nullFailed(L0, 2329, 77, "endpoints");
      let startPoint = endpoints[$_get](0).point;
      startPoint = new ui.Offset.new(startPoint.dx[$clamp](0.0, this.size.width), startPoint.dy[$clamp](0.0, this.size.height));
      context.pushLayer(new layer.LeaderLayer.new({link: this.startHandleLayerLink, offset: startPoint}), dart.bind(this, 'paint', super.paint), ui.Offset.zero);
      if (endpoints[$length] === 2) {
        let endPoint = endpoints[$_get](1).point;
        endPoint = new ui.Offset.new(endPoint.dx[$clamp](0.0, this.size.width), endPoint.dy[$clamp](0.0, this.size.height));
        context.pushLayer(new layer.LeaderLayer.new({link: this.endHandleLayerLink, offset: endPoint}), dart.bind(this, 'paint', super.paint), ui.Offset.zero);
      }
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 2354, 30, "context");
      if (offset == null) dart.nullFailed(L0, 2354, 46, "offset");
      this[_layoutText]({minWidth: this.constraints.minWidth, maxWidth: this.constraints.maxWidth});
      if (dart.test(this[_hasVisualOverflow]) && !dart.equals(this.clipBehavior, ui.Clip.none)) {
        this[_clipRectLayer] = context.pushClipRect(this.needsCompositing, offset, ui.Offset.zero['&'](this.size), dart.bind(this, _paintContents), {clipBehavior: this.clipBehavior, oldLayer: this[_clipRectLayer]});
      } else {
        this[_clipRectLayer] = null;
        this[_paintContents](context, offset);
      }
      this[_paintHandleLayers](context, this.getEndpointsForSelection(dart.nullCheck(this.selection)));
    }
    describeApproximatePaintClip(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 2369, 51, "child");
      return dart.test(this[_hasVisualOverflow]) ? ui.Offset.zero['&'](this.size) : null;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 2372, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new colors.ColorProperty.new("cursorColor", this.cursorColor));
      properties.add(new (DiagnosticsPropertyOfValueNotifierOfbool()).new("showCursor", this.showCursor));
      properties.add(new diagnostics.IntProperty.new("maxLines", this.maxLines));
      properties.add(new diagnostics.IntProperty.new("minLines", this.minLines));
      properties.add(new (DiagnosticsPropertyOfbool()).new("expands", this.expands, {defaultValue: false}));
      properties.add(new colors.ColorProperty.new("selectionColor", this.selectionColor));
      properties.add(new diagnostics.DoubleProperty.new("textScaleFactor", this.textScaleFactor));
      properties.add(new (DiagnosticsPropertyOfLocale()).new("locale", this.locale, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfTextSelection()).new("selection", this.selection));
      properties.add(new (DiagnosticsPropertyOfViewportOffset()).new("offset", this.offset));
    }
    debugDescribeChildren() {
      return (() => {
        let t5 = JSArrayOfDiagnosticsNode().of([]);
        if (this.text != null) t5.push(dart.nullCheck(this.text).toDiagnosticsNode({name: "text", style: diagnostics.DiagnosticsTreeStyle.transition}));
        return t5;
      })();
    }
  };
  (editable.RenderEditable.new = function(opts) {
    let t0, t0$;
    let text = opts && 'text' in opts ? opts.text : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    if (textDirection == null) dart.nullFailed(L0, 184, 28, "textDirection");
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C9 || CT.C9;
    if (textAlign == null) dart.nullFailed(L0, 185, 15, "textAlign");
    let cursorColor = opts && 'cursorColor' in opts ? opts.cursorColor : null;
    let backgroundCursorColor = opts && 'backgroundCursorColor' in opts ? opts.backgroundCursorColor : null;
    let showCursor = opts && 'showCursor' in opts ? opts.showCursor : null;
    let hasFocus = opts && 'hasFocus' in opts ? opts.hasFocus : null;
    let startHandleLayerLink = opts && 'startHandleLayerLink' in opts ? opts.startHandleLayerLink : null;
    if (startHandleLayerLink == null) dart.nullFailed(L0, 190, 24, "startHandleLayerLink");
    let endHandleLayerLink = opts && 'endHandleLayerLink' in opts ? opts.endHandleLayerLink : null;
    if (endHandleLayerLink == null) dart.nullFailed(L0, 191, 24, "endHandleLayerLink");
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : 1;
    let minLines = opts && 'minLines' in opts ? opts.minLines : null;
    let expands = opts && 'expands' in opts ? opts.expands : false;
    if (expands == null) dart.nullFailed(L0, 194, 10, "expands");
    let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
    let selectionColor = opts && 'selectionColor' in opts ? opts.selectionColor : null;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
    if (textScaleFactor == null) dart.nullFailed(L0, 197, 12, "textScaleFactor");
    let selection = opts && 'selection' in opts ? opts.selection : null;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    if (offset == null) dart.nullFailed(L0, 199, 29, "offset");
    let onSelectionChanged = opts && 'onSelectionChanged' in opts ? opts.onSelectionChanged : null;
    let onCaretChanged = opts && 'onCaretChanged' in opts ? opts.onCaretChanged : null;
    let ignorePointer = opts && 'ignorePointer' in opts ? opts.ignorePointer : false;
    if (ignorePointer == null) dart.nullFailed(L0, 202, 10, "ignorePointer");
    let readOnly = opts && 'readOnly' in opts ? opts.readOnly : false;
    if (readOnly == null) dart.nullFailed(L0, 203, 10, "readOnly");
    let forceLine = opts && 'forceLine' in opts ? opts.forceLine : true;
    if (forceLine == null) dart.nullFailed(L0, 204, 10, "forceLine");
    let textHeightBehavior = opts && 'textHeightBehavior' in opts ? opts.textHeightBehavior : null;
    let textWidthBasis = opts && 'textWidthBasis' in opts ? opts.textWidthBasis : C10 || CT.C10;
    if (textWidthBasis == null) dart.nullFailed(L0, 206, 20, "textWidthBasis");
    let obscuringCharacter = opts && 'obscuringCharacter' in opts ? opts.obscuringCharacter : "???";
    if (obscuringCharacter == null) dart.nullFailed(L0, 207, 12, "obscuringCharacter");
    let obscureText = opts && 'obscureText' in opts ? opts.obscureText : false;
    if (obscureText == null) dart.nullFailed(L0, 208, 10, "obscureText");
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let cursorWidth = opts && 'cursorWidth' in opts ? opts.cursorWidth : 1;
    if (cursorWidth == null) dart.nullFailed(L0, 210, 12, "cursorWidth");
    let cursorHeight = opts && 'cursorHeight' in opts ? opts.cursorHeight : null;
    let cursorRadius = opts && 'cursorRadius' in opts ? opts.cursorRadius : null;
    let paintCursorAboveText = opts && 'paintCursorAboveText' in opts ? opts.paintCursorAboveText : false;
    if (paintCursorAboveText == null) dart.nullFailed(L0, 213, 10, "paintCursorAboveText");
    let cursorOffset = opts && 'cursorOffset' in opts ? opts.cursorOffset : null;
    let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : 1;
    if (devicePixelRatio == null) dart.nullFailed(L0, 215, 12, "devicePixelRatio");
    let selectionHeightStyle = opts && 'selectionHeightStyle' in opts ? opts.selectionHeightStyle : C11 || CT.C11;
    if (selectionHeightStyle == null) dart.nullFailed(L0, 216, 23, "selectionHeightStyle");
    let selectionWidthStyle = opts && 'selectionWidthStyle' in opts ? opts.selectionWidthStyle : C12 || CT.C12;
    if (selectionWidthStyle == null) dart.nullFailed(L0, 217, 22, "selectionWidthStyle");
    let enableInteractiveSelection = opts && 'enableInteractiveSelection' in opts ? opts.enableInteractiveSelection : null;
    let floatingCursorAddedMargin = opts && 'floatingCursorAddedMargin' in opts ? opts.floatingCursorAddedMargin : C13 || CT.C13;
    if (floatingCursorAddedMargin == null) dart.nullFailed(L0, 219, 16, "floatingCursorAddedMargin");
    let promptRectRange = opts && 'promptRectRange' in opts ? opts.promptRectRange : null;
    let promptRectColor = opts && 'promptRectColor' in opts ? opts.promptRectColor : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C14 || CT.C14;
    if (clipBehavior == null) dart.nullFailed(L0, 222, 10, "clipBehavior");
    let textSelectionDelegate = opts && 'textSelectionDelegate' in opts ? opts.textSelectionDelegate : null;
    if (textSelectionDelegate == null) dart.nullFailed(L0, 223, 19, "textSelectionDelegate");
    this[_textLayoutLastMaxWidth] = null;
    this[_textLayoutLastMinWidth] = null;
    this[_lastCaretRect] = null;
    this[_selectionStartInViewport] = new (ValueNotifierOfbool()).new(true);
    this[_selectionEndInViewport] = new (ValueNotifierOfbool()).new(true);
    this[_cursorResetLocation] = -1;
    this[_wasSelectingVerticallyWithKeyboard] = false;
    this[_cachedPlainText] = null;
    this[_hasFocus] = false;
    this[_listenerAttached] = false;
    this[_forceLine] = false;
    this[_readOnly] = false;
    this[_selectionRects] = null;
    this[_cursorWidth] = 1.0;
    this[_floatingCursorOn] = false;
    this[__RenderEditable__floatingCursorOffset] = null;
    this[__RenderEditable__floatingCursorOffset_isSet] = false;
    this[__RenderEditable__floatingCursorTextPosition] = null;
    this[__RenderEditable__floatingCursorTextPosition_isSet] = false;
    this[_maxScrollExtent] = 0.0;
    this[_clipBehavior] = ui.Clip.hardEdge;
    this[__RenderEditable__tap] = null;
    this[__RenderEditable__tap_isSet] = false;
    this[__RenderEditable__longPress] = null;
    this[__RenderEditable__longPress_isSet] = false;
    this[_lastTapDownPosition] = null;
    this[__RenderEditable__caretPrototype] = null;
    this[__RenderEditable__caretPrototype_isSet] = false;
    this[_relativeOrigin] = C15 || CT.C15;
    this[_previousOffset] = null;
    this[_resetOriginOnLeft] = false;
    this[_resetOriginOnRight] = false;
    this[_resetOriginOnTop] = false;
    this[_resetOriginOnBottom] = false;
    this[_resetFloatingCursorAnimationValue] = null;
    this[_promptRectPaint] = ui.Paint.new();
    this[_clipRectLayer] = null;
    this[onSelectionChanged$] = onSelectionChanged;
    this[onCaretChanged$] = onCaretChanged;
    this[ignorePointer$] = ignorePointer;
    this[textSelectionDelegate$] = textSelectionDelegate;
    if (!(textAlign != null)) dart.assertFailed(null, L0, 224, 15, "textAlign != null");
    if (!(textDirection != null)) dart.assertFailed("RenderEditable created without a textDirection.", L0, 225, 15, "textDirection != null");
    if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, L0, 226, 15, "maxLines == null || maxLines > 0");
    if (!(minLines == null || dart.notNull(minLines) > 0)) dart.assertFailed(null, L0, 227, 15, "minLines == null || minLines > 0");
    if (!(startHandleLayerLink != null)) dart.assertFailed(null, L0, 228, 15, "startHandleLayerLink != null");
    if (!(endHandleLayerLink != null)) dart.assertFailed(null, L0, 229, 15, "endHandleLayerLink != null");
    if (!(maxLines == null || minLines == null || dart.notNull(maxLines) >= dart.notNull(minLines))) dart.assertFailed("minLines can't be greater than maxLines", L0, 231, 10, "(maxLines == null) || (minLines == null) || (maxLines >= minLines)");
    if (!(expands != null)) dart.assertFailed(null, L0, 234, 15, "expands != null");
    if (!(!dart.test(expands) || maxLines == null && minLines == null)) dart.assertFailed("minLines and maxLines must be null when expands is true.", L0, 236, 10, "!expands || (maxLines == null && minLines == null)");
    if (!(textScaleFactor != null)) dart.assertFailed(null, L0, 239, 15, "textScaleFactor != null");
    if (!(offset != null)) dart.assertFailed(null, L0, 240, 15, "offset != null");
    if (!(ignorePointer != null)) dart.assertFailed(null, L0, 241, 15, "ignorePointer != null");
    if (!(textWidthBasis != null)) dart.assertFailed(null, L0, 242, 15, "textWidthBasis != null");
    if (!(paintCursorAboveText != null)) dart.assertFailed(null, L0, 243, 15, "paintCursorAboveText != null");
    if (!(obscuringCharacter != null && extensions['StringCharacters|get#characters'](obscuringCharacter)[$length] === 1)) dart.assertFailed(null, L0, 244, 15, "obscuringCharacter != null && obscuringCharacter.characters.length == 1");
    if (!(obscureText != null)) dart.assertFailed(null, L0, 245, 15, "obscureText != null");
    if (!(textSelectionDelegate != null)) dart.assertFailed(null, L0, 246, 15, "textSelectionDelegate != null");
    if (!(cursorWidth != null && dart.notNull(cursorWidth) >= 0.0)) dart.assertFailed(null, L0, 247, 15, "cursorWidth != null && cursorWidth >= 0.0");
    if (!(cursorHeight == null || dart.notNull(cursorHeight) >= 0.0)) dart.assertFailed(null, L0, 248, 15, "cursorHeight == null || cursorHeight >= 0.0");
    if (!(readOnly != null)) dart.assertFailed(null, L0, 249, 15, "readOnly != null");
    if (!(forceLine != null)) dart.assertFailed(null, L0, 250, 15, "forceLine != null");
    if (!(devicePixelRatio != null)) dart.assertFailed(null, L0, 251, 15, "devicePixelRatio != null");
    if (!(selectionHeightStyle != null)) dart.assertFailed(null, L0, 252, 15, "selectionHeightStyle != null");
    if (!(selectionWidthStyle != null)) dart.assertFailed(null, L0, 253, 15, "selectionWidthStyle != null");
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 254, 15, "clipBehavior != null");
    this[_textPainter] = new text_painter.TextPainter.new({text: text, textAlign: textAlign, textDirection: textDirection, textScaleFactor: textScaleFactor, locale: locale, strutStyle: strutStyle, textHeightBehavior: textHeightBehavior, textWidthBasis: textWidthBasis});
    this[_cursorColor] = cursorColor;
    this[_backgroundCursorColor] = backgroundCursorColor;
    this[_showCursor] = (t0 = showCursor, t0 == null ? new (ValueNotifierOfbool()).new(false) : t0);
    this[_maxLines] = maxLines;
    this[_minLines] = minLines;
    this[_expands] = expands;
    this[_selectionColor] = selectionColor;
    this[_selection] = selection;
    this[_offset] = offset;
    this[_cursorWidth] = cursorWidth;
    this[_cursorHeight] = cursorHeight;
    this[_cursorRadius] = cursorRadius;
    this[_paintCursorOnTop] = paintCursorAboveText;
    this[_cursorOffset] = cursorOffset;
    this[_floatingCursorAddedMargin] = floatingCursorAddedMargin;
    this[_enableInteractiveSelection] = enableInteractiveSelection;
    this[_devicePixelRatio] = devicePixelRatio;
    this[_selectionHeightStyle] = selectionHeightStyle;
    this[_selectionWidthStyle] = selectionWidthStyle;
    this[_startHandleLayerLink] = startHandleLayerLink;
    this[_endHandleLayerLink] = endHandleLayerLink;
    this[_obscuringCharacter] = obscuringCharacter;
    this[_obscureText] = obscureText;
    this[_readOnly] = readOnly;
    this[_forceLine] = forceLine;
    this[_promptRectRange] = promptRectRange;
    this[_clipBehavior] = clipBehavior;
    editable.RenderEditable.__proto__.new.call(this);
    if (!(this[_showCursor] != null)) dart.assertFailed(null, L0, 292, 12, "_showCursor != null");
    if (!(!dart.test(this[_showCursor].value) || cursorColor != null)) dart.assertFailed(null, L0, 293, 12, "!_showCursor.value || cursorColor != null");
    this.hasFocus = (t0$ = hasFocus, t0$ == null ? false : t0$);
    if (promptRectColor != null) this[_promptRectPaint].color = promptRectColor;
  }).prototype = editable.RenderEditable.prototype;
  dart.addTypeTests(editable.RenderEditable);
  dart.addTypeCaches(editable.RenderEditable);
  dart.setMethodSignature(editable.RenderEditable, () => ({
    __proto__: dart.getMethods(editable.RenderEditable.__proto__),
    [_updateSelectionExtentsVisibility]: dart.fnType(dart.void, [ui.Offset]),
    [_handleSelectionChange]: dart.fnType(dart.void, [text_editing.TextSelection, editable.SelectionChangedCause]),
    [_handleKeyEvent]: dart.fnType(dart.void, [raw_keyboard.RawKeyEvent]),
    [_handleMovement]: dart.fnType(dart.void, [keyboard_key.LogicalKeyboardKey], {}, {lineModifier: core.bool, shift: core.bool, wordModifier: core.bool}),
    [_handleShortcuts]: dart.fnType(async.Future$(dart.void), [keyboard_key.LogicalKeyboardKey]),
    [_handleDelete]: dart.fnType(dart.void, [], {}, {forward: core.bool}),
    markNeedsTextLayout: dart.fnType(dart.void, []),
    setPromptRectRange: dart.fnType(dart.void, [dart.nullable(ui.TextRange)]),
    [_handleSetSelection]: dart.fnType(dart.void, [text_editing.TextSelection]),
    [_handleMoveCursorForwardByCharacter]: dart.fnType(dart.void, [core.bool]),
    [_handleMoveCursorBackwardByCharacter]: dart.fnType(dart.void, [core.bool]),
    [_handleMoveCursorForwardByWord]: dart.fnType(dart.void, [core.bool]),
    [_handleMoveCursorBackwardByWord]: dart.fnType(dart.void, [core.bool]),
    [_getNextWord]: dart.fnType(dart.nullable(ui.TextRange), [core.int]),
    [_getPreviousWord]: dart.fnType(dart.nullable(ui.TextRange), [core.int]),
    [_onlyWhitespace]: dart.fnType(core.bool, [ui.TextRange]),
    [_getMaxScrollExtent]: dart.fnType(core.double, [ui.Size]),
    getEndpointsForSelection: dart.fnType(core.List$(editable.TextSelectionPoint), [text_editing.TextSelection]),
    getRectForComposingRange: dart.fnType(dart.nullable(ui.Rect), [ui.TextRange]),
    getPositionForPoint: dart.fnType(ui.TextPosition, [ui.Offset]),
    getLocalRectForCaret: dart.fnType(ui.Rect, [ui.TextPosition]),
    [_preferredHeight]: dart.fnType(core.double, [core.double]),
    computeDistanceToActualBaseline: dart.fnType(core.double, [ui.TextBaseline]),
    handleTapDown: dart.fnType(dart.void, [tap.TapDownDetails]),
    [_handleTapDown]: dart.fnType(dart.void, [tap.TapDownDetails]),
    handleTap: dart.fnType(dart.void, []),
    [_handleTap]: dart.fnType(dart.void, []),
    handleDoubleTap: dart.fnType(dart.void, []),
    handleLongPress: dart.fnType(dart.void, []),
    [_handleLongPress]: dart.fnType(dart.void, []),
    selectPosition: dart.fnType(dart.void, [], {}, {cause: editable.SelectionChangedCause}),
    selectPositionAt: dart.fnType(dart.void, [], {to: dart.nullable(ui.Offset)}, {cause: editable.SelectionChangedCause, from: ui.Offset}),
    selectWord: dart.fnType(dart.void, [], {}, {cause: editable.SelectionChangedCause}),
    selectWordsInRange: dart.fnType(dart.void, [], {to: dart.nullable(ui.Offset)}, {cause: editable.SelectionChangedCause, from: ui.Offset}),
    selectWordEdge: dart.fnType(dart.void, [], {}, {cause: editable.SelectionChangedCause}),
    [_selectWordAtOffset]: dart.fnType(text_editing.TextSelection, [ui.TextPosition]),
    [_selectLineAtOffset]: dart.fnType(text_editing.TextSelection, [ui.TextPosition]),
    [_layoutText]: dart.fnType(dart.void, [], {maxWidth: core.double, minWidth: core.double}, {}),
    [_computeCaretPrototype]: dart.fnType(dart.void, []),
    [_getPixelPerfectCursorOffset]: dart.fnType(ui.Offset, [ui.Rect]),
    [_paintCaret]: dart.fnType(dart.void, [ui.Canvas, ui.Offset, ui.TextPosition]),
    setFloatingCursor: dart.fnType(dart.void, [text_input.FloatingCursorDragState, ui.Offset, ui.TextPosition], {resetLerpValue: dart.nullable(core.double)}, {}),
    [_paintFloatingCaret]: dart.fnType(dart.void, [ui.Canvas, ui.Offset]),
    calculateBoundedFloatingCursorOffset: dart.fnType(ui.Offset, [ui.Offset]),
    [_paintSelection]: dart.fnType(dart.void, [ui.Canvas, ui.Offset]),
    [_paintPromptRectIfNeeded]: dart.fnType(dart.void, [ui.Canvas, ui.Offset]),
    [_paintContents]: dart.fnType(dart.void, [object.PaintingContext, ui.Offset]),
    [_paintHandleLayers]: dart.fnType(dart.void, [object.PaintingContext, core.List$(editable.TextSelectionPoint)])
  }));
  dart.setGetterSignature(editable.RenderEditable, () => ({
    __proto__: dart.getGetters(editable.RenderEditable.__proto__),
    textHeightBehavior: dart.nullable(ui.TextHeightBehavior),
    textWidthBasis: text_painter.TextWidthBasis,
    devicePixelRatio: core.double,
    obscuringCharacter: core.String,
    obscureText: core.bool,
    selectionStartInViewport: change_notifier.ValueListenable$(core.bool),
    selectionEndInViewport: change_notifier.ValueListenable$(core.bool),
    [_plainText]: core.String,
    text: dart.nullable(text_span.TextSpan),
    textAlign: ui.TextAlign,
    textDirection: ui.TextDirection,
    locale: dart.nullable(ui.Locale),
    strutStyle: dart.nullable(strut_style.StrutStyle),
    cursorColor: dart.nullable(ui.Color),
    backgroundCursorColor: dart.nullable(ui.Color),
    showCursor: change_notifier.ValueNotifier$(core.bool),
    hasFocus: core.bool,
    forceLine: core.bool,
    readOnly: core.bool,
    maxLines: dart.nullable(core.int),
    minLines: dart.nullable(core.int),
    expands: core.bool,
    selectionColor: dart.nullable(ui.Color),
    textScaleFactor: core.double,
    selection: dart.nullable(text_editing.TextSelection),
    offset: viewport_offset.ViewportOffset,
    cursorWidth: core.double,
    cursorHeight: core.double,
    paintCursorAboveText: core.bool,
    cursorOffset: dart.nullable(ui.Offset),
    cursorRadius: dart.nullable(ui.Radius),
    startHandleLayerLink: layer.LayerLink,
    endHandleLayerLink: layer.LayerLink,
    floatingCursorAddedMargin: edge_insets.EdgeInsets,
    [_floatingCursorOffset]: ui.Offset,
    [_floatingCursorTextPosition]: ui.TextPosition,
    selectionHeightStyle: ui.BoxHeightStyle,
    selectionWidthStyle: ui.BoxWidthStyle,
    enableInteractiveSelection: dart.nullable(core.bool),
    selectionEnabled: core.bool,
    promptRectColor: dart.nullable(ui.Color),
    maxScrollExtent: core.double,
    [_caretMargin]: core.double,
    clipBehavior: ui.Clip,
    [_isMultiline]: core.bool,
    [_viewportAxis]: basic_types.Axis,
    [_paintOffset]: ui.Offset,
    [_viewportExtent]: core.double,
    [_hasVisualOverflow]: core.bool,
    preferredLineHeight: core.double,
    [_tap]: tap.TapGestureRecognizer,
    [_longPress]: long_press.LongPressGestureRecognizer,
    [_caretPrototype]: ui.Rect
  }));
  dart.setSetterSignature(editable.RenderEditable, () => ({
    __proto__: dart.getSetters(editable.RenderEditable.__proto__),
    textHeightBehavior: dart.nullable(ui.TextHeightBehavior),
    textWidthBasis: text_painter.TextWidthBasis,
    devicePixelRatio: core.double,
    obscuringCharacter: core.String,
    obscureText: core.bool,
    text: dart.nullable(text_span.TextSpan),
    textAlign: ui.TextAlign,
    textDirection: ui.TextDirection,
    locale: dart.nullable(ui.Locale),
    strutStyle: dart.nullable(strut_style.StrutStyle),
    cursorColor: dart.nullable(ui.Color),
    backgroundCursorColor: dart.nullable(ui.Color),
    showCursor: change_notifier.ValueNotifier$(core.bool),
    hasFocus: core.bool,
    forceLine: core.bool,
    readOnly: core.bool,
    maxLines: dart.nullable(core.int),
    minLines: dart.nullable(core.int),
    expands: core.bool,
    selectionColor: dart.nullable(ui.Color),
    textScaleFactor: core.double,
    selection: dart.nullable(text_editing.TextSelection),
    offset: viewport_offset.ViewportOffset,
    cursorWidth: core.double,
    cursorHeight: dart.nullable(core.double),
    paintCursorAboveText: core.bool,
    cursorOffset: dart.nullable(ui.Offset),
    cursorRadius: dart.nullable(ui.Radius),
    startHandleLayerLink: layer.LayerLink,
    endHandleLayerLink: layer.LayerLink,
    floatingCursorAddedMargin: edge_insets.EdgeInsets,
    [_floatingCursorOffset]: ui.Offset,
    [_floatingCursorTextPosition]: ui.TextPosition,
    selectionHeightStyle: ui.BoxHeightStyle,
    selectionWidthStyle: ui.BoxWidthStyle,
    enableInteractiveSelection: dart.nullable(core.bool),
    promptRectColor: dart.nullable(ui.Color),
    clipBehavior: ui.Clip,
    [_tap]: tap.TapGestureRecognizer,
    [_longPress]: long_press.LongPressGestureRecognizer,
    [_caretPrototype]: ui.Rect
  }));
  dart.setLibraryUri(editable.RenderEditable, L1);
  dart.setFieldSignature(editable.RenderEditable, () => ({
    __proto__: dart.getFields(editable.RenderEditable.__proto__),
    onSelectionChanged: dart.fieldType(dart.nullable(dart.fnType(dart.void, [text_editing.TextSelection, editable.RenderEditable, editable.SelectionChangedCause]))),
    [_textLayoutLastMaxWidth]: dart.fieldType(dart.nullable(core.double)),
    [_textLayoutLastMinWidth]: dart.fieldType(dart.nullable(core.double)),
    onCaretChanged: dart.fieldType(dart.nullable(dart.fnType(dart.void, [ui.Rect]))),
    ignorePointer: dart.fieldType(core.bool),
    [_devicePixelRatio]: dart.fieldType(core.double),
    [_obscuringCharacter]: dart.fieldType(core.String),
    [_obscureText]: dart.fieldType(core.bool),
    textSelectionDelegate: dart.fieldType(text_input.TextSelectionDelegate),
    [_lastCaretRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [_selectionStartInViewport]: dart.finalFieldType(change_notifier.ValueNotifier$(core.bool)),
    [_selectionEndInViewport]: dart.finalFieldType(change_notifier.ValueNotifier$(core.bool)),
    [_cursorResetLocation]: dart.fieldType(core.int),
    [_wasSelectingVerticallyWithKeyboard]: dart.fieldType(core.bool),
    [_cachedPlainText]: dart.fieldType(dart.nullable(core.String)),
    [_textPainter]: dart.finalFieldType(text_painter.TextPainter),
    [_cursorColor]: dart.fieldType(dart.nullable(ui.Color)),
    [_backgroundCursorColor]: dart.fieldType(dart.nullable(ui.Color)),
    [_showCursor]: dart.fieldType(change_notifier.ValueNotifier$(core.bool)),
    [_hasFocus]: dart.fieldType(core.bool),
    [_listenerAttached]: dart.fieldType(core.bool),
    [_forceLine]: dart.fieldType(core.bool),
    [_readOnly]: dart.fieldType(core.bool),
    [_maxLines]: dart.fieldType(dart.nullable(core.int)),
    [_minLines]: dart.fieldType(dart.nullable(core.int)),
    [_expands]: dart.fieldType(core.bool),
    [_selectionColor]: dart.fieldType(dart.nullable(ui.Color)),
    [_selectionRects]: dart.fieldType(dart.nullable(core.List$(ui.TextBox))),
    [_selection]: dart.fieldType(dart.nullable(text_editing.TextSelection)),
    [_offset]: dart.fieldType(viewport_offset.ViewportOffset),
    [_cursorWidth]: dart.fieldType(core.double),
    [_cursorHeight]: dart.fieldType(dart.nullable(core.double)),
    [_paintCursorOnTop]: dart.fieldType(core.bool),
    [_cursorOffset]: dart.fieldType(dart.nullable(ui.Offset)),
    [_cursorRadius]: dart.fieldType(dart.nullable(ui.Radius)),
    [_startHandleLayerLink]: dart.fieldType(layer.LayerLink),
    [_endHandleLayerLink]: dart.fieldType(layer.LayerLink),
    [_floatingCursorAddedMargin]: dart.fieldType(edge_insets.EdgeInsets),
    [_floatingCursorOn]: dart.fieldType(core.bool),
    [__RenderEditable__floatingCursorOffset]: dart.fieldType(dart.nullable(ui.Offset)),
    [__RenderEditable__floatingCursorOffset_isSet]: dart.fieldType(core.bool),
    [__RenderEditable__floatingCursorTextPosition]: dart.fieldType(dart.nullable(ui.TextPosition)),
    [__RenderEditable__floatingCursorTextPosition_isSet]: dart.fieldType(core.bool),
    [_selectionHeightStyle]: dart.fieldType(ui.BoxHeightStyle),
    [_selectionWidthStyle]: dart.fieldType(ui.BoxWidthStyle),
    [_enableInteractiveSelection]: dart.fieldType(dart.nullable(core.bool)),
    [_promptRectRange]: dart.fieldType(dart.nullable(ui.TextRange)),
    [_maxScrollExtent]: dart.fieldType(core.double),
    [_clipBehavior]: dart.fieldType(ui.Clip),
    [__RenderEditable__tap]: dart.fieldType(dart.nullable(tap.TapGestureRecognizer)),
    [__RenderEditable__tap_isSet]: dart.fieldType(core.bool),
    [__RenderEditable__longPress]: dart.fieldType(dart.nullable(long_press.LongPressGestureRecognizer)),
    [__RenderEditable__longPress_isSet]: dart.fieldType(core.bool),
    [_lastTapDownPosition]: dart.fieldType(dart.nullable(ui.Offset)),
    [__RenderEditable__caretPrototype]: dart.fieldType(dart.nullable(ui.Rect)),
    [__RenderEditable__caretPrototype_isSet]: dart.fieldType(core.bool),
    [_relativeOrigin]: dart.fieldType(ui.Offset),
    [_previousOffset]: dart.fieldType(dart.nullable(ui.Offset)),
    [_resetOriginOnLeft]: dart.fieldType(core.bool),
    [_resetOriginOnRight]: dart.fieldType(core.bool),
    [_resetOriginOnTop]: dart.fieldType(core.bool),
    [_resetOriginOnBottom]: dart.fieldType(core.bool),
    [_resetFloatingCursorAnimationValue]: dart.fieldType(dart.nullable(core.double)),
    [_promptRectPaint]: dart.finalFieldType(ui.Paint),
    [_clipRectLayer]: dart.fieldType(dart.nullable(layer.ClipRectLayer))
  }));
  dart.defineLazy(editable.RenderEditable, {
    /*editable.RenderEditable._movementKeys*/get _movementKeys() {
      return LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.arrowRight, keyboard_key.LogicalKeyboardKey.arrowLeft, keyboard_key.LogicalKeyboardKey.arrowUp, keyboard_key.LogicalKeyboardKey.arrowDown]);
    },
    /*editable.RenderEditable._shortcutKeys*/get _shortcutKeys() {
      return LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.keyA, keyboard_key.LogicalKeyboardKey.keyC, keyboard_key.LogicalKeyboardKey.keyV, keyboard_key.LogicalKeyboardKey.keyX, keyboard_key.LogicalKeyboardKey.delete, keyboard_key.LogicalKeyboardKey.backspace]);
    },
    /*editable.RenderEditable._nonModifierKeys*/get _nonModifierKeys() {
      return (() => {
        let t6 = LinkedHashSetOfLogicalKeyboardKey().of(editable.RenderEditable._shortcutKeys);
        t6.addAll(editable.RenderEditable._movementKeys);
        return t6;
      })();
    },
    /*editable.RenderEditable._modifierKeys*/get _modifierKeys() {
      return LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.shift, keyboard_key.LogicalKeyboardKey.control, keyboard_key.LogicalKeyboardKey.alt]);
    },
    /*editable.RenderEditable._macOsModifierKeys*/get _macOsModifierKeys() {
      return LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.shift, keyboard_key.LogicalKeyboardKey.meta, keyboard_key.LogicalKeyboardKey.alt]);
    },
    /*editable.RenderEditable._interestingKeys*/get _interestingKeys() {
      return (() => {
        let t7 = LinkedHashSetOfLogicalKeyboardKey().of(editable.RenderEditable._modifierKeys);
        t7.addAll(editable.RenderEditable._macOsModifierKeys);
        t7.addAll(editable.RenderEditable._nonModifierKeys);
        return t7;
      })();
    }
  }, false);
  editable._isWhitespace = function _isWhitespace(codeUnit) {
    if (codeUnit == null) dart.nullFailed(L0, 108, 24, "codeUnit");
    switch (codeUnit) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 28:
      case 29:
      case 30:
      case 31:
      case 32:
      case 160:
      case 5760:
      case 8192:
      case 8193:
      case 8194:
      case 8195:
      case 8196:
      case 8197:
      case 8198:
      case 8199:
      case 8200:
      case 8201:
      case 8202:
      case 8239:
      case 8287:
      case 12288:
      {
        break;
      }
      default:
      {
        return false;
      }
    }
    return true;
  };
  var C25;
  dart.defineLazy(editable, {
    /*editable._kCaretGap*/get _kCaretGap() {
      return 1;
    },
    /*editable._kCaretHeightOffset*/get _kCaretHeightOffset() {
      return 2;
    },
    /*editable._kFloatingCaretSizeIncrease*/get _kFloatingCaretSizeIncrease() {
      return C25 || CT.C25;
    },
    /*editable._kFloatingCaretRadius*/get _kFloatingCaretRadius() {
      return 1;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/rendering/editable.dart", {
    "package:flutter/src/rendering/editable.dart": editable
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["editable.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/editable.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__editable: editable
  };
}));

//# sourceMappingURL=editable.dart.lib.js.map
