define(['dart_sdk', 'packages/flutter/src/rendering/editable.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/services/text_input.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/strut_style.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/services/text_formatter.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/characters/src/extensions.dart', 'packages/flutter/src/cupertino/text_theme.dart', 'packages/flutter/src/cupertino/text_selection.dart', 'packages/flutter/src/material/text_selection.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/material/material_state.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/services/text_editing.dart', 'packages/flutter/src/rendering/proxy_box.dart', 'packages/flutter/src/services/system_channels.dart'], (function load__packages__flutter__src__material__text_field_dart(dart_sdk, packages__flutter__src__rendering__editable$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__services__text_input$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__strut_style$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__services__text_formatter$46dart, packages__flutter__src__rendering__layer$46dart, packages__characters__src__extensions$46dart, packages__flutter__src__cupertino__text_theme$46dart, packages__flutter__src__cupertino__text_selection$46dart, packages__flutter__src__material__text_selection$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__material__material_state$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__services__text_editing$46dart, packages__flutter__src__rendering__proxy_box$46dart, packages__flutter__src__services__system_channels$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const editable = packages__flutter__src__rendering__editable$46dart.src__rendering__editable;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const feedback = packages__flutter__src__material__icon_button$46dart.src__material__feedback;
  const input_decorator = packages__flutter__src__material__icon_button$46dart.src__material__input_decorator;
  const material_localizations = packages__flutter__src__material__icon_button$46dart.src__material__material_localizations;
  const debug = packages__flutter__src__material__icon_button$46dart.src__material__debug;
  const text_selection_theme = packages__flutter__src__material__icon_button$46dart.src__material__text_selection_theme;
  const text_selection = packages__flutter__src__widgets__widget_span$46dart.src__widgets__text_selection;
  const editable_text = packages__flutter__src__widgets__widget_span$46dart.src__widgets__editable_text;
  const focus_manager = packages__flutter__src__widgets__widget_span$46dart.src__widgets__focus_manager;
  const scroll_controller = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scroll_controller;
  const scroll_physics = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scroll_physics;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const media_query = packages__flutter__src__widgets__widget_span$46dart.src__widgets__media_query;
  const restoration_properties = packages__flutter__src__widgets__widget_span$46dart.src__widgets__restoration_properties;
  const debug$ = packages__flutter__src__widgets__widget_span$46dart.src__widgets__debug;
  const restoration = packages__flutter__src__widgets__widget_span$46dart.src__widgets__restoration;
  const transitions = packages__flutter__src__widgets__widget_span$46dart.src__widgets__transitions;
  const text_input = packages__flutter__src__services__text_input$46dart.src__services__text_input;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const text_style = packages__flutter__src__painting__strut_style$46dart.src__painting__text_style;
  const strut_style = packages__flutter__src__painting__strut_style$46dart.src__painting__strut_style;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const text_formatter = packages__flutter__src__services__text_formatter$46dart.src__services__text_formatter;
  const mouse_cursor = packages__flutter__src__rendering__layer$46dart.src__rendering__mouse_cursor;
  const extensions = packages__characters__src__extensions$46dart.src__extensions;
  const theme$0 = packages__flutter__src__cupertino__text_theme$46dart.src__cupertino__theme;
  const colors$ = packages__flutter__src__cupertino__text_theme$46dart.src__cupertino__colors;
  const text_selection$ = packages__flutter__src__cupertino__text_selection$46dart.src__cupertino__text_selection;
  const text_selection$0 = packages__flutter__src__material__text_selection$46dart.src__material__text_selection;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const material_state = packages__flutter__src__material__material_state$46dart.src__material__material_state;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const text_editing = packages__flutter__src__services__text_editing$46dart.src__services__text_editing;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  const restoration$ = packages__flutter__src__services__system_channels$46dart.src__services__restoration;
  var text_field = Object.create(dart.library);
  var $length = dartx.length;
  var $clamp = dartx.clamp;
  var $isNotEmpty = dartx.isNotEmpty;
  var $addAll = dartx.addAll;
  var $isEmpty = dartx.isEmpty;
  dart._checkModuleNullSafetyMode(false);
  var DiagnosticsPropertyOfTextEditingController = () => (DiagnosticsPropertyOfTextEditingController = dart.constFn(diagnostics.DiagnosticsProperty$(editable_text.TextEditingController)))();
  var DiagnosticsPropertyOfFocusNode = () => (DiagnosticsPropertyOfFocusNode = dart.constFn(diagnostics.DiagnosticsProperty$(focus_manager.FocusNode)))();
  var DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))();
  var DiagnosticsPropertyOfInputDecoration = () => (DiagnosticsPropertyOfInputDecoration = dart.constFn(diagnostics.DiagnosticsProperty$(input_decorator.InputDecoration)))();
  var DiagnosticsPropertyOfTextInputType = () => (DiagnosticsPropertyOfTextInputType = dart.constFn(diagnostics.DiagnosticsProperty$(text_input.TextInputType)))();
  var DiagnosticsPropertyOfTextStyle = () => (DiagnosticsPropertyOfTextStyle = dart.constFn(diagnostics.DiagnosticsProperty$(text_style.TextStyle)))();
  var DiagnosticsPropertyOfString = () => (DiagnosticsPropertyOfString = dart.constFn(diagnostics.DiagnosticsProperty$(core.String)))();
  var EnumPropertyOfSmartDashesType = () => (EnumPropertyOfSmartDashesType = dart.constFn(diagnostics.EnumProperty$(text_input.SmartDashesType)))();
  var EnumPropertyOfSmartQuotesType = () => (EnumPropertyOfSmartQuotesType = dart.constFn(diagnostics.EnumProperty$(text_input.SmartQuotesType)))();
  var EnumPropertyOfTextInputAction = () => (EnumPropertyOfTextInputAction = dart.constFn(diagnostics.EnumProperty$(text_input.TextInputAction)))();
  var EnumPropertyOfTextCapitalization = () => (EnumPropertyOfTextCapitalization = dart.constFn(diagnostics.EnumProperty$(text_input.TextCapitalization)))();
  var EnumPropertyOfTextAlign = () => (EnumPropertyOfTextAlign = dart.constFn(diagnostics.EnumProperty$(ui.TextAlign)))();
  var DiagnosticsPropertyOfTextAlignVertical = () => (DiagnosticsPropertyOfTextAlignVertical = dart.constFn(diagnostics.DiagnosticsProperty$(alignment.TextAlignVertical)))();
  var EnumPropertyOfTextDirection = () => (EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))();
  var DiagnosticsPropertyOfRadius = () => (DiagnosticsPropertyOfRadius = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Radius)))();
  var DiagnosticsPropertyOfBrightness = () => (DiagnosticsPropertyOfBrightness = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Brightness)))();
  var DiagnosticsPropertyOfEdgeInsetsGeometry = () => (DiagnosticsPropertyOfEdgeInsetsGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(edge_insets.EdgeInsetsGeometry)))();
  var DiagnosticsPropertyOfTextSelectionControls = () => (DiagnosticsPropertyOfTextSelectionControls = dart.constFn(diagnostics.DiagnosticsProperty$(text_selection.TextSelectionControls)))();
  var DiagnosticsPropertyOfScrollController = () => (DiagnosticsPropertyOfScrollController = dart.constFn(diagnostics.DiagnosticsProperty$(scroll_controller.ScrollController)))();
  var DiagnosticsPropertyOfScrollPhysics = () => (DiagnosticsPropertyOfScrollPhysics = dart.constFn(diagnostics.DiagnosticsProperty$(scroll_physics.ScrollPhysics)))();
  var GlobalKeyOfEditableTextState = () => (GlobalKeyOfEditableTextState = dart.constFn(framework.GlobalKey$(editable_text.EditableTextState)))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var JSArrayOfTextInputFormatter = () => (JSArrayOfTextInputFormatter = dart.constFn(_interceptors.JSArray$(text_formatter.TextInputFormatter)))();
  var JSArrayOfListenable = () => (JSArrayOfListenable = dart.constFn(_interceptors.JSArray$(change_notifier.Listenable)))();
  var WidgetN = () => (WidgetN = dart.constFn(dart.nullable(framework.Widget)))();
  var BuildContextAndWidgetNToInputDecorator = () => (BuildContextAndWidgetNToInputDecorator = dart.constFn(dart.fnType(input_decorator.InputDecorator, [framework.BuildContext, WidgetN()])))();
  var LinkedHashSetOfMaterialState = () => (LinkedHashSetOfMaterialState = dart.constFn(collection.LinkedHashSet$(material_state.MaterialState)))();
  var PointerEnterEventTovoid = () => (PointerEnterEventTovoid = dart.constFn(dart.fnType(dart.void, [events.PointerEnterEvent])))();
  var PointerExitEventTovoid = () => (PointerExitEventTovoid = dart.constFn(dart.fnType(dart.void, [events.PointerExitEvent])))();
  var BuildContextAndWidgetNToSemantics = () => (BuildContextAndWidgetNToSemantics = dart.constFn(dart.fnType(basic.Semantics, [framework.BuildContext, WidgetN()])))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/material/text_field.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_field.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.iOS",
        index: 2
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.macOS",
        index: 4
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.android",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.fuchsia",
        index: 1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.linux",
        index: 3
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.windows",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name$]: "PointerDeviceKind.mouse",
        index: 1
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name$]: "PointerDeviceKind.stylus",
        index: 2
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name$]: "PointerDeviceKind.invertedStylus",
        index: 3
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name$]: "PointerDeviceKind.touch",
        index: 0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name$]: "PointerDeviceKind.unknown",
        index: 4
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: null,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: null,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixIconConstraints]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIconConstraints]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: null,
        [InputDecoration_isDense]: null,
        [InputDecoration_floatingLabelBehavior]: null,
        [InputDecoration_hasFloatingPlaceholder]: true,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: null,
        [InputDecoration_helperMaxLines]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: null,
        [InputDecoration_icon]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name$0]: "TextCapitalization.none",
        index: 3
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_name$]: "TextAlign.start",
        index: 4
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: ui.BoxHeightStyle.prototype,
        [_name$]: "BoxHeightStyle.tight",
        index: 0
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: ui.BoxWidthStyle.prototype,
        [_name$]: "BoxWidthStyle.tight",
        index: 0
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 20
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name$1]: "DragStartBehavior.start",
        index: 1
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: editable_text.ToolbarOptions.prototype,
        [ToolbarOptions_selectAll]: true,
        [ToolbarOptions_paste]: true,
        [ToolbarOptions_cut]: false,
        [ToolbarOptions_copy]: false
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: editable_text.ToolbarOptions.prototype,
        [ToolbarOptions_selectAll]: true,
        [ToolbarOptions_paste]: true,
        [ToolbarOptions_cut]: true,
        [ToolbarOptions_copy]: true
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "container",
        [_Location_column]: 11,
        [_Location_line]: 897,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "liveRegion",
        [_Location_column]: 11,
        [_Location_line]: 898,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 899,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23, C24 || CT.C24], _LocationL());
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 896,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: media_query.NavigationMode.prototype,
        [_name$2]: "NavigationMode.traditional",
        index: 0
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: media_query.NavigationMode.prototype,
        [_name$2]: "NavigationMode.directional",
        index: 1
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 2,
        [Radius_x]: 2
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 11,
        [_Location_line]: 1142,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "readOnly",
        [_Location_column]: 11,
        [_Location_line]: 1143,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "toolbarOptions",
        [_Location_column]: 11,
        [_Location_line]: 1144,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "showCursor",
        [_Location_column]: 11,
        [_Location_line]: 1145,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "showSelectionHandles",
        [_Location_column]: 11,
        [_Location_line]: 1146,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 11,
        [_Location_line]: 1147,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusNode",
        [_Location_column]: 11,
        [_Location_line]: 1148,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 11,
        [_Location_line]: 1149,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textInputAction",
        [_Location_column]: 11,
        [_Location_line]: 1150,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textCapitalization",
        [_Location_column]: 11,
        [_Location_line]: 1151,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 1152,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "strutStyle",
        [_Location_column]: 11,
        [_Location_line]: 1153,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 11,
        [_Location_line]: 1154,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textDirection",
        [_Location_column]: 11,
        [_Location_line]: 1155,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 11,
        [_Location_line]: 1156,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscuringCharacter",
        [_Location_column]: 11,
        [_Location_line]: 1157,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 11,
        [_Location_line]: 1158,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autocorrect",
        [_Location_column]: 11,
        [_Location_line]: 1159,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "smartDashesType",
        [_Location_column]: 11,
        [_Location_line]: 1160,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "smartQuotesType",
        [_Location_column]: 11,
        [_Location_line]: 1161,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableSuggestions",
        [_Location_column]: 11,
        [_Location_line]: 1162,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 11,
        [_Location_line]: 1163,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "minLines",
        [_Location_column]: 11,
        [_Location_line]: 1164,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "expands",
        [_Location_column]: 11,
        [_Location_line]: 1165,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectionColor",
        [_Location_column]: 11,
        [_Location_line]: 1166,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectionControls",
        [_Location_column]: 11,
        [_Location_line]: 1167,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 11,
        [_Location_line]: 1168,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelectionChanged",
        [_Location_column]: 11,
        [_Location_line]: 1169,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onEditingComplete",
        [_Location_column]: 11,
        [_Location_line]: 1170,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSubmitted",
        [_Location_column]: 11,
        [_Location_line]: 1171,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onAppPrivateCommand",
        [_Location_column]: 11,
        [_Location_line]: 1172,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelectionHandleTapped",
        [_Location_column]: 11,
        [_Location_line]: 1173,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inputFormatters",
        [_Location_column]: 11,
        [_Location_line]: 1174,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rendererIgnoresPointer",
        [_Location_column]: 11,
        [_Location_line]: 1175,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mouseCursor",
        [_Location_column]: 11,
        [_Location_line]: 1176,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorWidth",
        [_Location_column]: 11,
        [_Location_line]: 1177,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorHeight",
        [_Location_column]: 11,
        [_Location_line]: 1178,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorRadius",
        [_Location_column]: 11,
        [_Location_line]: 1179,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 11,
        [_Location_line]: 1180,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectionHeightStyle",
        [_Location_column]: 11,
        [_Location_line]: 1181,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectionWidthStyle",
        [_Location_column]: 11,
        [_Location_line]: 1182,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorOpacityAnimates",
        [_Location_column]: 11,
        [_Location_line]: 1183,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorOffset",
        [_Location_column]: 11,
        [_Location_line]: 1184,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "paintCursorAboveText",
        [_Location_column]: 11,
        [_Location_line]: 1185,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundCursorColor",
        [_Location_column]: 11,
        [_Location_line]: 1186,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollPadding",
        [_Location_column]: 11,
        [_Location_line]: 1187,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardAppearance",
        [_Location_column]: 11,
        [_Location_line]: 1188,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableInteractiveSelection",
        [_Location_column]: 11,
        [_Location_line]: 1189,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dragStartBehavior",
        [_Location_column]: 11,
        [_Location_line]: 1190,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollController",
        [_Location_column]: 11,
        [_Location_line]: 1191,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollPhysics",
        [_Location_column]: 11,
        [_Location_line]: 1192,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofillHints",
        [_Location_column]: 11,
        [_Location_line]: 1193,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autocorrectionTextRectColor",
        [_Location_column]: 11,
        [_Location_line]: 1194,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "restorationId",
        [_Location_column]: 11,
        [_Location_line]: 1195,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40, C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44, C45 || CT.C45, C46 || CT.C46, C47 || CT.C47, C48 || CT.C48, C49 || CT.C49, C50 || CT.C50, C51 || CT.C51, C52 || CT.C52, C53 || CT.C53, C54 || CT.C54, C55 || CT.C55, C56 || CT.C56, C57 || CT.C57, C58 || CT.C58, C59 || CT.C59, C60 || CT.C60, C61 || CT.C61, C62 || CT.C62, C63 || CT.C63, C64 || CT.C64, C65 || CT.C65, C66 || CT.C66, C67 || CT.C67, C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71, C72 || CT.C72, C73 || CT.C73, C74 || CT.C74, C75 || CT.C75, C76 || CT.C76, C77 || CT.C77, C78 || CT.C78, C79 || CT.C79, C80 || CT.C80, C81 || CT.C81, C82 || CT.C82, C83 || CT.C83], _LocationL());
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 1141,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bucket",
        [_Location_column]: 9,
        [_Location_line]: 1140,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 1141,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86, C87 || CT.C87], _LocationL());
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C85 || CT.C85,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 1139,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 1139,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90], _LocationL());
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 1138,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 13,
        [_Location_line]: 1205,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "baseStyle",
        [_Location_column]: 13,
        [_Location_line]: 1206,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 13,
        [_Location_line]: 1207,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlignVertical",
        [_Location_column]: 13,
        [_Location_line]: 1208,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isHovering",
        [_Location_column]: 13,
        [_Location_line]: 1209,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isFocused",
        [_Location_column]: 13,
        [_Location_line]: 1210,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isEmpty",
        [_Location_column]: 13,
        [_Location_line]: 1211,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "expands",
        [_Location_column]: 13,
        [_Location_line]: 1212,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 1213,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93, C94 || CT.C94, C95 || CT.C95, C96 || CT.C96, C97 || CT.C97, C98 || CT.C98, C99 || CT.C99, C100 || CT.C100, C101 || CT.C101], _LocationL());
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 1204,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 9,
        [_Location_line]: 1202,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 1203,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 1216,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105, C106 || CT.C106], _LocationL());
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 1201,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxValueLength",
        [_Location_column]: 15,
        [_Location_line]: 1239,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "currentValueLength",
        [_Location_column]: 15,
        [_Location_line]: 1242,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 15,
        [_Location_line]: 1243,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 1248,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110, C111 || CT.C111, C112 || CT.C112], _LocationL());
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 1238,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 11,
        [_Location_line]: 1236,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 11,
        [_Location_line]: 1237,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 1251,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.constList([C115 || CT.C115, C116 || CT.C116, C117 || CT.C117], _LocationL());
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C114 || CT.C114,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 1235,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "ignoring",
        [_Location_column]: 9,
        [_Location_line]: 1234,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 1235,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120, C121 || CT.C121], _LocationL());
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 1233,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursor",
        [_Location_column]: 7,
        [_Location_line]: 1230,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onEnter",
        [_Location_column]: 7,
        [_Location_line]: 1231,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onExit",
        [_Location_column]: 7,
        [_Location_line]: 1232,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 1233,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124, C125 || CT.C125, C126 || CT.C126, C127 || CT.C127], _LocationL());
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C123 || CT.C123,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 1229,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    }
  }, false);
  var _state = dart.privateName(text_field, "_state");
  var _name = dart.privateName(platform, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var _name$ = dart.privateName(ui, "_name");
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var _requestKeyboard = dart.privateName(text_field, "_requestKeyboard");
  text_field._TextFieldSelectionGestureDetectorBuilder = class _TextFieldSelectionGestureDetectorBuilder extends text_selection.TextSelectionGestureDetectorBuilder {
    onForcePressStart(details) {
      if (details == null) dart.nullFailed(L0, 50, 44, "details");
      super.onForcePressStart(details);
      if (dart.test(this.delegate.selectionEnabled) && dart.test(this.shouldShowSelectionToolbar)) {
        this.editableText.showToolbar();
      }
    }
    onForcePressEnd(details) {
      if (details == null) dart.nullFailed(L0, 58, 42, "details");
    }
    onSingleLongTapMoveUpdate(details) {
      if (details == null) dart.nullFailed(L0, 63, 61, "details");
      if (dart.test(this.delegate.selectionEnabled)) {
        switch (theme$.Theme.of(this[_state].context).platform) {
          case C0 || CT.C0:
          case C1 || CT.C1:
          {
            this.renderEditable.selectPositionAt({from: details.globalPosition, cause: editable.SelectionChangedCause.longPress});
            break;
          }
          case C2 || CT.C2:
          case C3 || CT.C3:
          case C4 || CT.C4:
          case C5 || CT.C5:
          {
            this.renderEditable.selectWordsInRange({from: details.globalPosition['-'](details.offsetFromOrigin), to: details.globalPosition, cause: editable.SelectionChangedCause.longPress});
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
    }
    onSingleTapUp(details) {
      if (details == null) dart.nullFailed(L0, 88, 35, "details");
      this.editableText.hideToolbar();
      if (dart.test(this.delegate.selectionEnabled)) {
        switch (theme$.Theme.of(this[_state].context).platform) {
          case C0 || CT.C0:
          case C1 || CT.C1:
          {
            switch (details.kind) {
              case C6 || CT.C6:
              case C7 || CT.C7:
              case C8 || CT.C8:
              {
                this.renderEditable.selectPosition({cause: editable.SelectionChangedCause.tap});
                break;
              }
              case C9 || CT.C9:
              case C10 || CT.C10:
              {
                this.renderEditable.selectWordEdge({cause: editable.SelectionChangedCause.tap});
                break;
              }
              default:
              {
                dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
              }
            }
            break;
          }
          case C2 || CT.C2:
          case C3 || CT.C3:
          case C4 || CT.C4:
          case C5 || CT.C5:
          {
            this.renderEditable.selectPosition({cause: editable.SelectionChangedCause.tap});
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      this[_state][_requestKeyboard]();
      if (this[_state].widget.onTap != null) dart.nullCheck(this[_state].widget.onTap)();
    }
    onSingleLongTapStart(details) {
      if (details == null) dart.nullFailed(L0, 123, 51, "details");
      if (dart.test(this.delegate.selectionEnabled)) {
        switch (theme$.Theme.of(this[_state].context).platform) {
          case C0 || CT.C0:
          case C1 || CT.C1:
          {
            this.renderEditable.selectPositionAt({from: details.globalPosition, cause: editable.SelectionChangedCause.longPress});
            break;
          }
          case C2 || CT.C2:
          case C3 || CT.C3:
          case C4 || CT.C4:
          case C5 || CT.C5:
          {
            this.renderEditable.selectWord({cause: editable.SelectionChangedCause.longPress});
            feedback.Feedback.forLongPress(this[_state].context);
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
    }
  };
  (text_field._TextFieldSelectionGestureDetectorBuilder.new = function(opts) {
    let state = opts && 'state' in opts ? opts.state : null;
    if (state == null) dart.nullFailed(L0, 43, 30, "state");
    this[_state] = state;
    text_field._TextFieldSelectionGestureDetectorBuilder.__proto__.new.call(this, {delegate: state});
    ;
  }).prototype = text_field._TextFieldSelectionGestureDetectorBuilder.prototype;
  dart.addTypeTests(text_field._TextFieldSelectionGestureDetectorBuilder);
  dart.addTypeCaches(text_field._TextFieldSelectionGestureDetectorBuilder);
  dart.setLibraryUri(text_field._TextFieldSelectionGestureDetectorBuilder, L1);
  dart.setFieldSignature(text_field._TextFieldSelectionGestureDetectorBuilder, () => ({
    __proto__: dart.getFields(text_field._TextFieldSelectionGestureDetectorBuilder.__proto__),
    [_state]: dart.finalFieldType(text_field._TextFieldState)
  }));
  var InputDecoration_alignLabelWithHint = dart.privateName(input_decorator, "InputDecoration.alignLabelWithHint");
  var InputDecoration_semanticCounterText = dart.privateName(input_decorator, "InputDecoration.semanticCounterText");
  var InputDecoration_enabled = dart.privateName(input_decorator, "InputDecoration.enabled");
  var InputDecoration_border = dart.privateName(input_decorator, "InputDecoration.border");
  var InputDecoration_enabledBorder = dart.privateName(input_decorator, "InputDecoration.enabledBorder");
  var InputDecoration_disabledBorder = dart.privateName(input_decorator, "InputDecoration.disabledBorder");
  var InputDecoration_focusedErrorBorder = dart.privateName(input_decorator, "InputDecoration.focusedErrorBorder");
  var InputDecoration_focusedBorder = dart.privateName(input_decorator, "InputDecoration.focusedBorder");
  var InputDecoration_errorBorder = dart.privateName(input_decorator, "InputDecoration.errorBorder");
  var InputDecoration_hoverColor = dart.privateName(input_decorator, "InputDecoration.hoverColor");
  var InputDecoration_focusColor = dart.privateName(input_decorator, "InputDecoration.focusColor");
  var InputDecoration_fillColor = dart.privateName(input_decorator, "InputDecoration.fillColor");
  var InputDecoration_filled = dart.privateName(input_decorator, "InputDecoration.filled");
  var InputDecoration_counterStyle = dart.privateName(input_decorator, "InputDecoration.counterStyle");
  var InputDecoration_counter = dart.privateName(input_decorator, "InputDecoration.counter");
  var InputDecoration_counterText = dart.privateName(input_decorator, "InputDecoration.counterText");
  var InputDecoration_suffixIconConstraints = dart.privateName(input_decorator, "InputDecoration.suffixIconConstraints");
  var InputDecoration_suffixStyle = dart.privateName(input_decorator, "InputDecoration.suffixStyle");
  var InputDecoration_suffixText = dart.privateName(input_decorator, "InputDecoration.suffixText");
  var InputDecoration_suffix = dart.privateName(input_decorator, "InputDecoration.suffix");
  var InputDecoration_suffixIcon = dart.privateName(input_decorator, "InputDecoration.suffixIcon");
  var InputDecoration_prefixStyle = dart.privateName(input_decorator, "InputDecoration.prefixStyle");
  var InputDecoration_prefixText = dart.privateName(input_decorator, "InputDecoration.prefixText");
  var InputDecoration_prefix = dart.privateName(input_decorator, "InputDecoration.prefix");
  var InputDecoration_prefixIconConstraints = dart.privateName(input_decorator, "InputDecoration.prefixIconConstraints");
  var InputDecoration_prefixIcon = dart.privateName(input_decorator, "InputDecoration.prefixIcon");
  var InputDecoration_isCollapsed = dart.privateName(input_decorator, "InputDecoration.isCollapsed");
  var InputDecoration_contentPadding = dart.privateName(input_decorator, "InputDecoration.contentPadding");
  var InputDecoration_isDense = dart.privateName(input_decorator, "InputDecoration.isDense");
  var InputDecoration_floatingLabelBehavior = dart.privateName(input_decorator, "InputDecoration.floatingLabelBehavior");
  var InputDecoration_hasFloatingPlaceholder = dart.privateName(input_decorator, "InputDecoration.hasFloatingPlaceholder");
  var InputDecoration_errorMaxLines = dart.privateName(input_decorator, "InputDecoration.errorMaxLines");
  var InputDecoration_errorStyle = dart.privateName(input_decorator, "InputDecoration.errorStyle");
  var InputDecoration_errorText = dart.privateName(input_decorator, "InputDecoration.errorText");
  var InputDecoration_hintMaxLines = dart.privateName(input_decorator, "InputDecoration.hintMaxLines");
  var InputDecoration_hintStyle = dart.privateName(input_decorator, "InputDecoration.hintStyle");
  var InputDecoration_hintText = dart.privateName(input_decorator, "InputDecoration.hintText");
  var InputDecoration_helperMaxLines = dart.privateName(input_decorator, "InputDecoration.helperMaxLines");
  var InputDecoration_helperStyle = dart.privateName(input_decorator, "InputDecoration.helperStyle");
  var InputDecoration_helperText = dart.privateName(input_decorator, "InputDecoration.helperText");
  var InputDecoration_labelStyle = dart.privateName(input_decorator, "InputDecoration.labelStyle");
  var InputDecoration_labelText = dart.privateName(input_decorator, "InputDecoration.labelText");
  var InputDecoration_icon = dart.privateName(input_decorator, "InputDecoration.icon");
  var C11;
  var _name$0 = dart.privateName(text_input, "_name");
  var C12;
  var C13;
  var C14;
  var C15;
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C16;
  var _name$1 = dart.privateName(recognizer, "_name");
  var C17;
  var ToolbarOptions_selectAll = dart.privateName(editable_text, "ToolbarOptions.selectAll");
  var ToolbarOptions_paste = dart.privateName(editable_text, "ToolbarOptions.paste");
  var ToolbarOptions_cut = dart.privateName(editable_text, "ToolbarOptions.cut");
  var ToolbarOptions_copy = dart.privateName(editable_text, "ToolbarOptions.copy");
  var C18;
  var C19;
  var controller$ = dart.privateName(text_field, "TextField.controller");
  var focusNode$ = dart.privateName(text_field, "TextField.focusNode");
  var decoration$ = dart.privateName(text_field, "TextField.decoration");
  var keyboardType$ = dart.privateName(text_field, "TextField.keyboardType");
  var textInputAction$ = dart.privateName(text_field, "TextField.textInputAction");
  var textCapitalization$ = dart.privateName(text_field, "TextField.textCapitalization");
  var style$ = dart.privateName(text_field, "TextField.style");
  var strutStyle$ = dart.privateName(text_field, "TextField.strutStyle");
  var textAlign$ = dart.privateName(text_field, "TextField.textAlign");
  var textAlignVertical$ = dart.privateName(text_field, "TextField.textAlignVertical");
  var textDirection$ = dart.privateName(text_field, "TextField.textDirection");
  var autofocus$ = dart.privateName(text_field, "TextField.autofocus");
  var obscuringCharacter$ = dart.privateName(text_field, "TextField.obscuringCharacter");
  var obscureText$ = dart.privateName(text_field, "TextField.obscureText");
  var autocorrect$ = dart.privateName(text_field, "TextField.autocorrect");
  var smartDashesType$ = dart.privateName(text_field, "TextField.smartDashesType");
  var smartQuotesType$ = dart.privateName(text_field, "TextField.smartQuotesType");
  var enableSuggestions$ = dart.privateName(text_field, "TextField.enableSuggestions");
  var maxLines$ = dart.privateName(text_field, "TextField.maxLines");
  var minLines$ = dart.privateName(text_field, "TextField.minLines");
  var expands$ = dart.privateName(text_field, "TextField.expands");
  var readOnly$ = dart.privateName(text_field, "TextField.readOnly");
  var toolbarOptions$ = dart.privateName(text_field, "TextField.toolbarOptions");
  var showCursor$ = dart.privateName(text_field, "TextField.showCursor");
  var maxLength$ = dart.privateName(text_field, "TextField.maxLength");
  var maxLengthEnforced$ = dart.privateName(text_field, "TextField.maxLengthEnforced");
  var onChanged$ = dart.privateName(text_field, "TextField.onChanged");
  var onEditingComplete$ = dart.privateName(text_field, "TextField.onEditingComplete");
  var onSubmitted$ = dart.privateName(text_field, "TextField.onSubmitted");
  var onAppPrivateCommand$ = dart.privateName(text_field, "TextField.onAppPrivateCommand");
  var inputFormatters$ = dart.privateName(text_field, "TextField.inputFormatters");
  var enabled$ = dart.privateName(text_field, "TextField.enabled");
  var cursorWidth$ = dart.privateName(text_field, "TextField.cursorWidth");
  var cursorHeight$ = dart.privateName(text_field, "TextField.cursorHeight");
  var cursorRadius$ = dart.privateName(text_field, "TextField.cursorRadius");
  var cursorColor$ = dart.privateName(text_field, "TextField.cursorColor");
  var selectionHeightStyle$ = dart.privateName(text_field, "TextField.selectionHeightStyle");
  var selectionWidthStyle$ = dart.privateName(text_field, "TextField.selectionWidthStyle");
  var keyboardAppearance$ = dart.privateName(text_field, "TextField.keyboardAppearance");
  var scrollPadding$ = dart.privateName(text_field, "TextField.scrollPadding");
  var enableInteractiveSelection$ = dart.privateName(text_field, "TextField.enableInteractiveSelection");
  var selectionControls$ = dart.privateName(text_field, "TextField.selectionControls");
  var dragStartBehavior$ = dart.privateName(text_field, "TextField.dragStartBehavior");
  var onTap$ = dart.privateName(text_field, "TextField.onTap");
  var mouseCursor$ = dart.privateName(text_field, "TextField.mouseCursor");
  var buildCounter$ = dart.privateName(text_field, "TextField.buildCounter");
  var scrollPhysics$ = dart.privateName(text_field, "TextField.scrollPhysics");
  var scrollController$ = dart.privateName(text_field, "TextField.scrollController");
  var autofillHints$ = dart.privateName(text_field, "TextField.autofillHints");
  var restorationId$ = dart.privateName(text_field, "TextField.restorationId");
  text_field.TextField = class TextField extends framework.StatefulWidget {
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get focusNode() {
      return this[focusNode$];
    }
    set focusNode(value) {
      super.focusNode = value;
    }
    get decoration() {
      return this[decoration$];
    }
    set decoration(value) {
      super.decoration = value;
    }
    get keyboardType() {
      return this[keyboardType$];
    }
    set keyboardType(value) {
      super.keyboardType = value;
    }
    get textInputAction() {
      return this[textInputAction$];
    }
    set textInputAction(value) {
      super.textInputAction = value;
    }
    get textCapitalization() {
      return this[textCapitalization$];
    }
    set textCapitalization(value) {
      super.textCapitalization = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    get strutStyle() {
      return this[strutStyle$];
    }
    set strutStyle(value) {
      super.strutStyle = value;
    }
    get textAlign() {
      return this[textAlign$];
    }
    set textAlign(value) {
      super.textAlign = value;
    }
    get textAlignVertical() {
      return this[textAlignVertical$];
    }
    set textAlignVertical(value) {
      super.textAlignVertical = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get autofocus() {
      return this[autofocus$];
    }
    set autofocus(value) {
      super.autofocus = value;
    }
    get obscuringCharacter() {
      return this[obscuringCharacter$];
    }
    set obscuringCharacter(value) {
      super.obscuringCharacter = value;
    }
    get obscureText() {
      return this[obscureText$];
    }
    set obscureText(value) {
      super.obscureText = value;
    }
    get autocorrect() {
      return this[autocorrect$];
    }
    set autocorrect(value) {
      super.autocorrect = value;
    }
    get smartDashesType() {
      return this[smartDashesType$];
    }
    set smartDashesType(value) {
      super.smartDashesType = value;
    }
    get smartQuotesType() {
      return this[smartQuotesType$];
    }
    set smartQuotesType(value) {
      super.smartQuotesType = value;
    }
    get enableSuggestions() {
      return this[enableSuggestions$];
    }
    set enableSuggestions(value) {
      super.enableSuggestions = value;
    }
    get maxLines() {
      return this[maxLines$];
    }
    set maxLines(value) {
      super.maxLines = value;
    }
    get minLines() {
      return this[minLines$];
    }
    set minLines(value) {
      super.minLines = value;
    }
    get expands() {
      return this[expands$];
    }
    set expands(value) {
      super.expands = value;
    }
    get readOnly() {
      return this[readOnly$];
    }
    set readOnly(value) {
      super.readOnly = value;
    }
    get toolbarOptions() {
      return this[toolbarOptions$];
    }
    set toolbarOptions(value) {
      super.toolbarOptions = value;
    }
    get showCursor() {
      return this[showCursor$];
    }
    set showCursor(value) {
      super.showCursor = value;
    }
    get maxLength() {
      return this[maxLength$];
    }
    set maxLength(value) {
      super.maxLength = value;
    }
    get maxLengthEnforced() {
      return this[maxLengthEnforced$];
    }
    set maxLengthEnforced(value) {
      super.maxLengthEnforced = value;
    }
    get onChanged() {
      return this[onChanged$];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    get onEditingComplete() {
      return this[onEditingComplete$];
    }
    set onEditingComplete(value) {
      super.onEditingComplete = value;
    }
    get onSubmitted() {
      return this[onSubmitted$];
    }
    set onSubmitted(value) {
      super.onSubmitted = value;
    }
    get onAppPrivateCommand() {
      return this[onAppPrivateCommand$];
    }
    set onAppPrivateCommand(value) {
      super.onAppPrivateCommand = value;
    }
    get inputFormatters() {
      return this[inputFormatters$];
    }
    set inputFormatters(value) {
      super.inputFormatters = value;
    }
    get enabled() {
      return this[enabled$];
    }
    set enabled(value) {
      super.enabled = value;
    }
    get cursorWidth() {
      return this[cursorWidth$];
    }
    set cursorWidth(value) {
      super.cursorWidth = value;
    }
    get cursorHeight() {
      return this[cursorHeight$];
    }
    set cursorHeight(value) {
      super.cursorHeight = value;
    }
    get cursorRadius() {
      return this[cursorRadius$];
    }
    set cursorRadius(value) {
      super.cursorRadius = value;
    }
    get cursorColor() {
      return this[cursorColor$];
    }
    set cursorColor(value) {
      super.cursorColor = value;
    }
    get selectionHeightStyle() {
      return this[selectionHeightStyle$];
    }
    set selectionHeightStyle(value) {
      super.selectionHeightStyle = value;
    }
    get selectionWidthStyle() {
      return this[selectionWidthStyle$];
    }
    set selectionWidthStyle(value) {
      super.selectionWidthStyle = value;
    }
    get keyboardAppearance() {
      return this[keyboardAppearance$];
    }
    set keyboardAppearance(value) {
      super.keyboardAppearance = value;
    }
    get scrollPadding() {
      return this[scrollPadding$];
    }
    set scrollPadding(value) {
      super.scrollPadding = value;
    }
    get enableInteractiveSelection() {
      return this[enableInteractiveSelection$];
    }
    set enableInteractiveSelection(value) {
      super.enableInteractiveSelection = value;
    }
    get selectionControls() {
      return this[selectionControls$];
    }
    set selectionControls(value) {
      super.selectionControls = value;
    }
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      super.dragStartBehavior = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get mouseCursor() {
      return this[mouseCursor$];
    }
    set mouseCursor(value) {
      super.mouseCursor = value;
    }
    get buildCounter() {
      return this[buildCounter$];
    }
    set buildCounter(value) {
      super.buildCounter = value;
    }
    get scrollPhysics() {
      return this[scrollPhysics$];
    }
    set scrollPhysics(value) {
      super.scrollPhysics = value;
    }
    get scrollController() {
      return this[scrollController$];
    }
    set scrollController(value) {
      super.scrollController = value;
    }
    get autofillHints() {
      return this[autofillHints$];
    }
    set autofillHints(value) {
      super.autofillHints = value;
    }
    get restorationId() {
      return this[restorationId$];
    }
    set restorationId(value) {
      super.restorationId = value;
    }
    get selectionEnabled() {
      return this.enableInteractiveSelection;
    }
    createState() {
      return new text_field._TextFieldState.new();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 793, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfTextEditingController()).new("controller", this.controller, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfFocusNode()).new("focusNode", this.focusNode, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("enabled", this.enabled, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfInputDecoration()).new("decoration", this.decoration, {defaultValue: C11 || CT.C11}));
      properties.add(new (DiagnosticsPropertyOfTextInputType()).new("keyboardType", this.keyboardType, {defaultValue: text_input.TextInputType.text}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("style", this.style, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("autofocus", this.autofocus, {defaultValue: false}));
      properties.add(new (DiagnosticsPropertyOfString()).new("obscuringCharacter", this.obscuringCharacter, {defaultValue: "•"}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("obscureText", this.obscureText, {defaultValue: false}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("autocorrect", this.autocorrect, {defaultValue: true}));
      properties.add(new (EnumPropertyOfSmartDashesType()).new("smartDashesType", this.smartDashesType, {defaultValue: dart.test(this.obscureText) ? text_input.SmartDashesType.disabled : text_input.SmartDashesType.enabled}));
      properties.add(new (EnumPropertyOfSmartQuotesType()).new("smartQuotesType", this.smartQuotesType, {defaultValue: dart.test(this.obscureText) ? text_input.SmartQuotesType.disabled : text_input.SmartQuotesType.enabled}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("enableSuggestions", this.enableSuggestions, {defaultValue: true}));
      properties.add(new diagnostics.IntProperty.new("maxLines", this.maxLines, {defaultValue: 1}));
      properties.add(new diagnostics.IntProperty.new("minLines", this.minLines, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("expands", this.expands, {defaultValue: false}));
      properties.add(new diagnostics.IntProperty.new("maxLength", this.maxLength, {defaultValue: null}));
      properties.add(new diagnostics.FlagProperty.new("maxLengthEnforced", {value: this.maxLengthEnforced, defaultValue: true, ifFalse: "maxLength not enforced"}));
      properties.add(new (EnumPropertyOfTextInputAction()).new("textInputAction", this.textInputAction, {defaultValue: null}));
      properties.add(new (EnumPropertyOfTextCapitalization()).new("textCapitalization", this.textCapitalization, {defaultValue: text_input.TextCapitalization.none}));
      properties.add(new (EnumPropertyOfTextAlign()).new("textAlign", this.textAlign, {defaultValue: ui.TextAlign.start}));
      properties.add(new (DiagnosticsPropertyOfTextAlignVertical()).new("textAlignVertical", this.textAlignVertical, {defaultValue: null}));
      properties.add(new (EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("cursorWidth", this.cursorWidth, {defaultValue: 2.0}));
      properties.add(new diagnostics.DoubleProperty.new("cursorHeight", this.cursorHeight, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfRadius()).new("cursorRadius", this.cursorRadius, {defaultValue: null}));
      properties.add(new colors.ColorProperty.new("cursorColor", this.cursorColor, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfBrightness()).new("keyboardAppearance", this.keyboardAppearance, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfEdgeInsetsGeometry()).new("scrollPadding", this.scrollPadding, {defaultValue: C16 || CT.C16}));
      properties.add(new diagnostics.FlagProperty.new("selectionEnabled", {value: this.selectionEnabled, defaultValue: true, ifFalse: "selection disabled"}));
      properties.add(new (DiagnosticsPropertyOfTextSelectionControls()).new("selectionControls", this.selectionControls, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfScrollController()).new("scrollController", this.scrollController, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfScrollPhysics()).new("scrollPhysics", this.scrollPhysics, {defaultValue: null}));
    }
  };
  (text_field.TextField.new = function(opts) {
    let t0, t0$, t0$0, t0$1;
    let key = opts && 'key' in opts ? opts.key : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
    let decoration = opts && 'decoration' in opts ? opts.decoration : C11 || CT.C11;
    let keyboardType = opts && 'keyboardType' in opts ? opts.keyboardType : null;
    let textInputAction = opts && 'textInputAction' in opts ? opts.textInputAction : null;
    let textCapitalization = opts && 'textCapitalization' in opts ? opts.textCapitalization : C12 || CT.C12;
    if (textCapitalization == null) dart.nullFailed(L0, 338, 10, "textCapitalization");
    let style = opts && 'style' in opts ? opts.style : null;
    let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C13 || CT.C13;
    if (textAlign == null) dart.nullFailed(L0, 341, 10, "textAlign");
    let textAlignVertical = opts && 'textAlignVertical' in opts ? opts.textAlignVertical : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let readOnly = opts && 'readOnly' in opts ? opts.readOnly : false;
    if (readOnly == null) dart.nullFailed(L0, 344, 10, "readOnly");
    let toolbarOptions = opts && 'toolbarOptions' in opts ? opts.toolbarOptions : null;
    let showCursor = opts && 'showCursor' in opts ? opts.showCursor : null;
    let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
    if (autofocus == null) dart.nullFailed(L0, 347, 10, "autofocus");
    let obscuringCharacter = opts && 'obscuringCharacter' in opts ? opts.obscuringCharacter : "•";
    if (obscuringCharacter == null) dart.nullFailed(L0, 348, 10, "obscuringCharacter");
    let obscureText = opts && 'obscureText' in opts ? opts.obscureText : false;
    if (obscureText == null) dart.nullFailed(L0, 349, 10, "obscureText");
    let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : true;
    if (autocorrect == null) dart.nullFailed(L0, 350, 10, "autocorrect");
    let smartDashesType = opts && 'smartDashesType' in opts ? opts.smartDashesType : null;
    let smartQuotesType = opts && 'smartQuotesType' in opts ? opts.smartQuotesType : null;
    let enableSuggestions = opts && 'enableSuggestions' in opts ? opts.enableSuggestions : true;
    if (enableSuggestions == null) dart.nullFailed(L0, 353, 10, "enableSuggestions");
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : 1;
    let minLines = opts && 'minLines' in opts ? opts.minLines : null;
    let expands = opts && 'expands' in opts ? opts.expands : false;
    if (expands == null) dart.nullFailed(L0, 356, 10, "expands");
    let maxLength = opts && 'maxLength' in opts ? opts.maxLength : null;
    let maxLengthEnforced = opts && 'maxLengthEnforced' in opts ? opts.maxLengthEnforced : true;
    if (maxLengthEnforced == null) dart.nullFailed(L0, 358, 10, "maxLengthEnforced");
    let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
    let onEditingComplete = opts && 'onEditingComplete' in opts ? opts.onEditingComplete : null;
    let onSubmitted = opts && 'onSubmitted' in opts ? opts.onSubmitted : null;
    let onAppPrivateCommand = opts && 'onAppPrivateCommand' in opts ? opts.onAppPrivateCommand : null;
    let inputFormatters = opts && 'inputFormatters' in opts ? opts.inputFormatters : null;
    let enabled = opts && 'enabled' in opts ? opts.enabled : null;
    let cursorWidth = opts && 'cursorWidth' in opts ? opts.cursorWidth : 2;
    if (cursorWidth == null) dart.nullFailed(L0, 365, 10, "cursorWidth");
    let cursorHeight = opts && 'cursorHeight' in opts ? opts.cursorHeight : null;
    let cursorRadius = opts && 'cursorRadius' in opts ? opts.cursorRadius : null;
    let cursorColor = opts && 'cursorColor' in opts ? opts.cursorColor : null;
    let selectionHeightStyle = opts && 'selectionHeightStyle' in opts ? opts.selectionHeightStyle : C14 || CT.C14;
    if (selectionHeightStyle == null) dart.nullFailed(L0, 369, 10, "selectionHeightStyle");
    let selectionWidthStyle = opts && 'selectionWidthStyle' in opts ? opts.selectionWidthStyle : C15 || CT.C15;
    if (selectionWidthStyle == null) dart.nullFailed(L0, 370, 10, "selectionWidthStyle");
    let keyboardAppearance = opts && 'keyboardAppearance' in opts ? opts.keyboardAppearance : null;
    let scrollPadding = opts && 'scrollPadding' in opts ? opts.scrollPadding : C16 || CT.C16;
    if (scrollPadding == null) dart.nullFailed(L0, 372, 10, "scrollPadding");
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C17 || CT.C17;
    if (dragStartBehavior == null) dart.nullFailed(L0, 373, 10, "dragStartBehavior");
    let enableInteractiveSelection = opts && 'enableInteractiveSelection' in opts ? opts.enableInteractiveSelection : true;
    if (enableInteractiveSelection == null) dart.nullFailed(L0, 374, 10, "enableInteractiveSelection");
    let selectionControls = opts && 'selectionControls' in opts ? opts.selectionControls : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let mouseCursor = opts && 'mouseCursor' in opts ? opts.mouseCursor : null;
    let buildCounter = opts && 'buildCounter' in opts ? opts.buildCounter : null;
    let scrollController = opts && 'scrollController' in opts ? opts.scrollController : null;
    let scrollPhysics = opts && 'scrollPhysics' in opts ? opts.scrollPhysics : null;
    let autofillHints = opts && 'autofillHints' in opts ? opts.autofillHints : null;
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$] = controller;
    this[focusNode$] = focusNode;
    this[decoration$] = decoration;
    this[textInputAction$] = textInputAction;
    this[textCapitalization$] = textCapitalization;
    this[style$] = style;
    this[strutStyle$] = strutStyle;
    this[textAlign$] = textAlign;
    this[textAlignVertical$] = textAlignVertical;
    this[textDirection$] = textDirection;
    this[readOnly$] = readOnly;
    this[showCursor$] = showCursor;
    this[autofocus$] = autofocus;
    this[obscuringCharacter$] = obscuringCharacter;
    this[obscureText$] = obscureText;
    this[autocorrect$] = autocorrect;
    this[enableSuggestions$] = enableSuggestions;
    this[maxLines$] = maxLines;
    this[minLines$] = minLines;
    this[expands$] = expands;
    this[maxLength$] = maxLength;
    this[maxLengthEnforced$] = maxLengthEnforced;
    this[onChanged$] = onChanged;
    this[onEditingComplete$] = onEditingComplete;
    this[onSubmitted$] = onSubmitted;
    this[onAppPrivateCommand$] = onAppPrivateCommand;
    this[inputFormatters$] = inputFormatters;
    this[enabled$] = enabled;
    this[cursorWidth$] = cursorWidth;
    this[cursorHeight$] = cursorHeight;
    this[cursorRadius$] = cursorRadius;
    this[cursorColor$] = cursorColor;
    this[selectionHeightStyle$] = selectionHeightStyle;
    this[selectionWidthStyle$] = selectionWidthStyle;
    this[keyboardAppearance$] = keyboardAppearance;
    this[scrollPadding$] = scrollPadding;
    this[dragStartBehavior$] = dragStartBehavior;
    this[enableInteractiveSelection$] = enableInteractiveSelection;
    this[selectionControls$] = selectionControls;
    this[onTap$] = onTap;
    this[mouseCursor$] = mouseCursor;
    this[buildCounter$] = buildCounter;
    this[scrollController$] = scrollController;
    this[scrollPhysics$] = scrollPhysics;
    this[autofillHints$] = autofillHints;
    this[restorationId$] = restorationId;
    if (!(textAlign != null)) dart.assertFailed(null, L0, 383, 15, "textAlign != null");
    if (!(readOnly != null)) dart.assertFailed(null, L0, 384, 15, "readOnly != null");
    if (!(autofocus != null)) dart.assertFailed(null, L0, 385, 15, "autofocus != null");
    if (!(obscuringCharacter != null && obscuringCharacter.length === 1)) dart.assertFailed(null, L0, 386, 15, "obscuringCharacter != null && obscuringCharacter.length == 1");
    if (!(obscureText != null)) dart.assertFailed(null, L0, 387, 15, "obscureText != null");
    if (!(autocorrect != null)) dart.assertFailed(null, L0, 388, 15, "autocorrect != null");
    this[smartDashesType$] = (t0 = smartDashesType, t0 == null ? dart.test(obscureText) ? text_input.SmartDashesType.disabled : text_input.SmartDashesType.enabled : t0);
    this[smartQuotesType$] = (t0$ = smartQuotesType, t0$ == null ? dart.test(obscureText) ? text_input.SmartQuotesType.disabled : text_input.SmartQuotesType.enabled : t0$);
    if (!(enableSuggestions != null)) dart.assertFailed(null, L0, 391, 15, "enableSuggestions != null");
    if (!(enableInteractiveSelection != null)) dart.assertFailed(null, L0, 392, 15, "enableInteractiveSelection != null");
    if (!(maxLengthEnforced != null)) dart.assertFailed(null, L0, 393, 15, "maxLengthEnforced != null");
    if (!(scrollPadding != null)) dart.assertFailed(null, L0, 394, 15, "scrollPadding != null");
    if (!(dragStartBehavior != null)) dart.assertFailed(null, L0, 395, 15, "dragStartBehavior != null");
    if (!(selectionHeightStyle != null)) dart.assertFailed(null, L0, 396, 15, "selectionHeightStyle != null");
    if (!(selectionWidthStyle != null)) dart.assertFailed(null, L0, 397, 15, "selectionWidthStyle != null");
    if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, L0, 398, 15, "maxLines == null || maxLines > 0");
    if (!(minLines == null || dart.notNull(minLines) > 0)) dart.assertFailed(null, L0, 399, 15, "minLines == null || minLines > 0");
    if (!(maxLines == null || minLines == null || dart.notNull(maxLines) >= dart.notNull(minLines))) dart.assertFailed("minLines can't be greater than maxLines", L0, 401, 10, "(maxLines == null) || (minLines == null) || (maxLines >= minLines)");
    if (!(expands != null)) dart.assertFailed(null, L0, 404, 15, "expands != null");
    if (!(!dart.test(expands) || maxLines == null && minLines == null)) dart.assertFailed("minLines and maxLines must be null when expands is true.", L0, 406, 10, "!expands || (maxLines == null && minLines == null)");
    if (!(!dart.test(obscureText) || maxLines === 1)) dart.assertFailed("Obscured fields cannot be multiline.", L0, 409, 15, "!obscureText || maxLines == 1");
    if (!(maxLength == null || maxLength === -1 || dart.notNull(maxLength) > 0)) dart.assertFailed(null, L0, 410, 15, "maxLength == null || maxLength == TextField.noMaxLength || maxLength > 0");
    if (!(textInputAction != text_input.TextInputAction.newline || maxLines === 1 || keyboardType != text_input.TextInputType.text)) dart.assertFailed("Use keyboardType TextInputType.multiline when using TextInputAction.newline on a multiline TextField.", L0, 412, 15, "!identical(textInputAction, TextInputAction.newline) ||\n         maxLines == 1 ||\n         !identical(keyboardType, TextInputType.text)");
    this[keyboardType$] = (t0$0 = keyboardType, t0$0 == null ? maxLines === 1 ? text_input.TextInputType.text : text_input.TextInputType.multiline : t0$0);
    this[toolbarOptions$] = (t0$1 = toolbarOptions, t0$1 == null ? dart.test(obscureText) ? C18 || CT.C18 : C19 || CT.C19 : t0$1);
    text_field.TextField.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_field.TextField.prototype;
  dart.addTypeTests(text_field.TextField);
  dart.addTypeCaches(text_field.TextField);
  dart.setMethodSignature(text_field.TextField, () => ({
    __proto__: dart.getMethods(text_field.TextField.__proto__),
    createState: dart.fnType(text_field._TextFieldState, [])
  }));
  dart.setGetterSignature(text_field.TextField, () => ({
    __proto__: dart.getGetters(text_field.TextField.__proto__),
    selectionEnabled: core.bool
  }));
  dart.setLibraryUri(text_field.TextField, L1);
  dart.setFieldSignature(text_field.TextField, () => ({
    __proto__: dart.getFields(text_field.TextField.__proto__),
    controller: dart.finalFieldType(dart.nullable(editable_text.TextEditingController)),
    focusNode: dart.finalFieldType(dart.nullable(focus_manager.FocusNode)),
    decoration: dart.finalFieldType(dart.nullable(input_decorator.InputDecoration)),
    keyboardType: dart.finalFieldType(text_input.TextInputType),
    textInputAction: dart.finalFieldType(dart.nullable(text_input.TextInputAction)),
    textCapitalization: dart.finalFieldType(text_input.TextCapitalization),
    style: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    strutStyle: dart.finalFieldType(dart.nullable(strut_style.StrutStyle)),
    textAlign: dart.finalFieldType(ui.TextAlign),
    textAlignVertical: dart.finalFieldType(dart.nullable(alignment.TextAlignVertical)),
    textDirection: dart.finalFieldType(dart.nullable(ui.TextDirection)),
    autofocus: dart.finalFieldType(core.bool),
    obscuringCharacter: dart.finalFieldType(core.String),
    obscureText: dart.finalFieldType(core.bool),
    autocorrect: dart.finalFieldType(core.bool),
    smartDashesType: dart.finalFieldType(text_input.SmartDashesType),
    smartQuotesType: dart.finalFieldType(text_input.SmartQuotesType),
    enableSuggestions: dart.finalFieldType(core.bool),
    maxLines: dart.finalFieldType(dart.nullable(core.int)),
    minLines: dart.finalFieldType(dart.nullable(core.int)),
    expands: dart.finalFieldType(core.bool),
    readOnly: dart.finalFieldType(core.bool),
    toolbarOptions: dart.finalFieldType(editable_text.ToolbarOptions),
    showCursor: dart.finalFieldType(dart.nullable(core.bool)),
    maxLength: dart.finalFieldType(dart.nullable(core.int)),
    maxLengthEnforced: dart.finalFieldType(core.bool),
    onChanged: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.String]))),
    onEditingComplete: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onSubmitted: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.String]))),
    onAppPrivateCommand: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.String, core.Map$(core.String, dart.dynamic)]))),
    inputFormatters: dart.finalFieldType(dart.nullable(core.List$(text_formatter.TextInputFormatter))),
    enabled: dart.finalFieldType(dart.nullable(core.bool)),
    cursorWidth: dart.finalFieldType(core.double),
    cursorHeight: dart.finalFieldType(dart.nullable(core.double)),
    cursorRadius: dart.finalFieldType(dart.nullable(ui.Radius)),
    cursorColor: dart.finalFieldType(dart.nullable(ui.Color)),
    selectionHeightStyle: dart.finalFieldType(ui.BoxHeightStyle),
    selectionWidthStyle: dart.finalFieldType(ui.BoxWidthStyle),
    keyboardAppearance: dart.finalFieldType(dart.nullable(ui.Brightness)),
    scrollPadding: dart.finalFieldType(edge_insets.EdgeInsets),
    enableInteractiveSelection: dart.finalFieldType(core.bool),
    selectionControls: dart.finalFieldType(dart.nullable(text_selection.TextSelectionControls)),
    dragStartBehavior: dart.finalFieldType(recognizer.DragStartBehavior),
    onTap: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    mouseCursor: dart.finalFieldType(dart.nullable(mouse_cursor.MouseCursor)),
    buildCounter: dart.finalFieldType(dart.nullable(dart.fnType(dart.nullable(framework.Widget), [framework.BuildContext], {}, {currentLength: core.int, isFocused: core.bool, maxLength: dart.nullable(core.int)}))),
    scrollPhysics: dart.finalFieldType(dart.nullable(scroll_physics.ScrollPhysics)),
    scrollController: dart.finalFieldType(dart.nullable(scroll_controller.ScrollController)),
    autofillHints: dart.finalFieldType(dart.nullable(core.Iterable$(core.String))),
    restorationId: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.defineLazy(text_field.TextField, {
    /*text_field.TextField.noMaxLength*/get noMaxLength() {
      return -1;
    }
  }, false);
  var _controller = dart.privateName(text_field, "_controller");
  var _focusNode = dart.privateName(text_field, "_focusNode");
  var _isHovering = dart.privateName(text_field, "_isHovering");
  var _showSelectionHandles = dart.privateName(text_field, "_showSelectionHandles");
  var ___TextFieldState__selectionGestureDetectorBuilder = dart.privateName(text_field, "_#_TextFieldState#_selectionGestureDetectorBuilder");
  var ___TextFieldState__selectionGestureDetectorBuilder_isSet = dart.privateName(text_field, "_#_TextFieldState#_selectionGestureDetectorBuilder#isSet");
  var ___TextFieldState_forcePressEnabled = dart.privateName(text_field, "_#_TextFieldState#forcePressEnabled");
  var ___TextFieldState_forcePressEnabled_isSet = dart.privateName(text_field, "_#_TextFieldState#forcePressEnabled#isSet");
  var _effectiveController = dart.privateName(text_field, "_effectiveController");
  var _effectiveFocusNode = dart.privateName(text_field, "_effectiveFocusNode");
  var _selectionGestureDetectorBuilder = dart.privateName(text_field, "_selectionGestureDetectorBuilder");
  var _isEnabled = dart.privateName(text_field, "_isEnabled");
  var _currentLength = dart.privateName(text_field, "_currentLength");
  var _hasIntrinsicError = dart.privateName(text_field, "_hasIntrinsicError");
  var _hasError = dart.privateName(text_field, "_hasError");
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C22;
  var C23;
  var C24;
  var C21;
  var C20;
  var _getEffectiveDecoration = dart.privateName(text_field, "_getEffectiveDecoration");
  var _createLocalController = dart.privateName(text_field, "_createLocalController");
  var _name$2 = dart.privateName(media_query, "_name");
  var C25;
  var C26;
  var _canRequestFocus = dart.privateName(text_field, "_canRequestFocus");
  var _registerController = dart.privateName(text_field, "_registerController");
  var _editableText = dart.privateName(text_field, "_editableText");
  var _shouldShowSelectionHandles = dart.privateName(text_field, "_shouldShowSelectionHandles");
  var _handleSelectionChanged = dart.privateName(text_field, "_handleSelectionChanged");
  var _handleSelectionHandleTapped = dart.privateName(text_field, "_handleSelectionHandleTapped");
  var _handleHover = dart.privateName(text_field, "_handleHover");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var C27;
  var C30;
  var C31;
  var C32;
  var C33;
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
  var C66;
  var C67;
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
  var C29;
  var C28;
  var C86;
  var C87;
  var C85;
  var C84;
  var C90;
  var C89;
  var C88;
  var C93;
  var C94;
  var C95;
  var C96;
  var C97;
  var C98;
  var C99;
  var C100;
  var C101;
  var C92;
  var C91;
  var C104;
  var C105;
  var C106;
  var C103;
  var C102;
  var C109;
  var C110;
  var C111;
  var C112;
  var C108;
  var C107;
  var C115;
  var C116;
  var C117;
  var C114;
  var C113;
  var C120;
  var C121;
  var C119;
  var C118;
  var C124;
  var C125;
  var C126;
  var C127;
  var C123;
  var C122;
  const State_RestorationMixin$36 = class State_RestorationMixin extends framework.State$(text_field.TextField) {};
  (State_RestorationMixin$36.new = function() {
    restoration.RestorationMixin$(text_field.TextField)[dart.mixinNew].call(this);
    State_RestorationMixin$36.__proto__.new.call(this);
  }).prototype = State_RestorationMixin$36.prototype;
  dart.applyMixin(State_RestorationMixin$36, restoration.RestorationMixin$(text_field.TextField));
  text_field._TextFieldState = class _TextFieldState extends State_RestorationMixin$36 {
    get [_effectiveController]() {
      let t0;
      t0 = this.widget.controller;
      return t0 == null ? dart.nullCheck(this[_controller]).value : t0;
    }
    get [_effectiveFocusNode]() {
      let t1, t0;
      t0 = this.widget.focusNode;
      return t0 == null ? (t1 = this[_focusNode], t1 == null ? this[_focusNode] = new focus_manager.FocusNode.new() : t1) : t0;
    }
    get needsCounter() {
      return this.widget.maxLength != null && this.widget.decoration != null && dart.nullCheck(this.widget.decoration).counterText == null;
    }
    get [_selectionGestureDetectorBuilder]() {
      let t0;
      return dart.test(this[___TextFieldState__selectionGestureDetectorBuilder_isSet]) ? (t0 = this[___TextFieldState__selectionGestureDetectorBuilder], t0) : dart.throw(new _internal.LateError.fieldNI("_selectionGestureDetectorBuilder"));
    }
    set [_selectionGestureDetectorBuilder](t0) {
      if (t0 == null) dart.nullFailed(L0, 846, 50, "null");
      this[___TextFieldState__selectionGestureDetectorBuilder_isSet] = true;
      this[___TextFieldState__selectionGestureDetectorBuilder] = t0;
    }
    get forcePressEnabled() {
      let t1;
      return dart.test(this[___TextFieldState_forcePressEnabled_isSet]) ? (t1 = this[___TextFieldState_forcePressEnabled], t1) : dart.throw(new _internal.LateError.fieldNI("forcePressEnabled"));
    }
    set forcePressEnabled(t1) {
      if (t1 == null) dart.nullFailed(L0, 850, 13, "null");
      this[___TextFieldState_forcePressEnabled_isSet] = true;
      this[___TextFieldState_forcePressEnabled] = t1;
    }
    get selectionEnabled() {
      return this.widget.selectionEnabled;
    }
    get [_isEnabled]() {
      let t3, t2, t2$;
      t2$ = (t2 = this.widget.enabled, t2 == null ? (t3 = this.widget.decoration, t3 == null ? null : t3.enabled) : t2);
      return t2$ == null ? true : t2$;
    }
    get [_currentLength]() {
      return extensions['StringCharacters|get#characters'](this[_effectiveController].value.text)[$length];
    }
    get [_hasIntrinsicError]() {
      return this.widget.maxLength != null && dart.nullCheck(this.widget.maxLength) > 0 && dart.notNull(extensions['StringCharacters|get#characters'](this[_effectiveController].value.text)[$length]) > dart.nullCheck(this.widget.maxLength);
    }
    get [_hasError]() {
      let t2;
      return (t2 = this.widget.decoration, t2 == null ? null : t2.errorText) != null || dart.test(this[_hasIntrinsicError]);
    }
    [_getEffectiveDecoration]() {
      let t2, t2$, t2$0, t2$1, t2$2;
      let localizations = material_localizations.MaterialLocalizations.of(this.context);
      let themeData = theme$.Theme.of(this.context);
      let effectiveDecoration = (t2 = this.widget.decoration, t2 == null ? C11 || CT.C11 : t2).applyDefaults(themeData.inputDecorationTheme).copyWith({enabled: this[_isEnabled], hintMaxLines: (t2$0 = (t2$ = this.widget.decoration, t2$ == null ? null : t2$.hintMaxLines), t2$0 == null ? this.widget.maxLines : t2$0)});
      if (effectiveDecoration.counter != null || effectiveDecoration.counterText != null) return effectiveDecoration;
      let counter = null;
      let currentLength = this[_currentLength];
      if (effectiveDecoration.counter == null && effectiveDecoration.counterText == null && this.widget.buildCounter != null) {
        let isFocused = this[_effectiveFocusNode].hasFocus;
        let builtCounter = dart.nullCheck(this.widget.buildCounter)(this.context, {currentLength: currentLength, maxLength: this.widget.maxLength, isFocused: isFocused});
        if (builtCounter != null) {
          counter = new basic.Semantics.new({container: true, liveRegion: isFocused, child: builtCounter, $creationLocationd_0dea112b090073317d4: C20 || CT.C20});
        }
        return effectiveDecoration.copyWith({counter: counter});
      }
      if (this.widget.maxLength == null) return effectiveDecoration;
      let counterText = dart.str(currentLength);
      let semanticCounterText = "";
      if (dart.nullCheck(this.widget.maxLength) > 0) {
        counterText = counterText + ("/" + dart.str(this.widget.maxLength));
        let remaining = (dart.nullCheck(this.widget.maxLength) - dart.notNull(currentLength))[$clamp](0, dart.nullCheck(this.widget.maxLength));
        semanticCounterText = localizations.remainingTextFieldCharacterCount(remaining);
      }
      if (dart.test(this[_hasIntrinsicError])) {
        return effectiveDecoration.copyWith({errorText: (t2$1 = effectiveDecoration.errorText, t2$1 == null ? "" : t2$1), counterStyle: (t2$2 = effectiveDecoration.errorStyle, t2$2 == null ? dart.nullCheck(themeData.textTheme.caption).copyWith({color: themeData.errorColor}) : t2$2), counterText: counterText, semanticCounterText: semanticCounterText});
      }
      return effectiveDecoration.copyWith({counterText: counterText, semanticCounterText: semanticCounterText});
    }
    initState() {
      super.initState();
      this[_selectionGestureDetectorBuilder] = new text_field._TextFieldSelectionGestureDetectorBuilder.new({state: this});
      if (this.widget.controller == null) {
        this[_createLocalController]();
      }
      this[_effectiveFocusNode].canRequestFocus = this[_isEnabled];
    }
    get [_canRequestFocus]() {
      let t2, t2$;
      let mode = (t2$ = (t2 = media_query.MediaQuery.maybeOf(this.context), t2 == null ? null : t2.navigationMode), t2$ == null ? media_query.NavigationMode.traditional : t2$);
      switch (mode) {
        case C25 || CT.C25:
        {
          return this[_isEnabled];
        }
        case C26 || CT.C26:
        {
          return true;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    didChangeDependencies() {
      super.didChangeDependencies();
      this[_effectiveFocusNode].canRequestFocus = this[_canRequestFocus];
    }
    didUpdateWidget(oldWidget) {
      text_field.TextField.as(oldWidget);
      if (oldWidget == null) dart.nullFailed(L0, 962, 34, "oldWidget");
      super.didUpdateWidget(oldWidget);
      if (this.widget.controller == null && oldWidget.controller != null) {
        this[_createLocalController](dart.nullCheck(oldWidget.controller).value);
      } else if (this.widget.controller != null && oldWidget.controller == null) {
        this.unregisterFromRestoration(dart.nullCheck(this[_controller]));
        dart.nullCheck(this[_controller]).dispose();
        this[_controller] = null;
      }
      this[_effectiveFocusNode].canRequestFocus = this[_canRequestFocus];
      if (dart.test(this[_effectiveFocusNode].hasFocus) && !dart.equals(this.widget.readOnly, oldWidget.readOnly) && dart.test(this[_isEnabled])) {
        if (dart.test(this[_effectiveController].selection.isCollapsed)) {
          this[_showSelectionHandles] = !dart.test(this.widget.readOnly);
        }
      }
    }
    restoreState(oldBucket, initialRestore) {
      if (initialRestore == null) dart.nullFailed(L0, 980, 56, "initialRestore");
      if (this[_controller] != null) {
        this[_registerController]();
      }
    }
    [_registerController]() {
      if (!(this[_controller] != null)) dart.assertFailed(null, L0, 987, 12, "_controller != null");
      this.registerForRestoration(dart.nullCheck(this[_controller]), "controller");
    }
    [_createLocalController](value = null) {
      if (!(this[_controller] == null)) dart.assertFailed(null, L0, 992, 12, "_controller == null");
      this[_controller] = value == null ? restoration_properties.RestorableTextEditingController.new() : new restoration_properties.RestorableTextEditingController.fromValue(value);
      if (!dart.test(this.restorePending)) {
        this[_registerController]();
      }
    }
    get restorationId() {
      return this.widget.restorationId;
    }
    dispose() {
      let t2, t2$;
      t2 = this[_focusNode];
      t2 == null ? null : t2.dispose();
      t2$ = this[_controller];
      t2$ == null ? null : t2$.dispose();
      super.dispose();
    }
    get [_editableText]() {
      return this.editableTextKey.currentState;
    }
    [_requestKeyboard]() {
      let t2;
      t2 = this[_editableText];
      t2 == null ? null : t2.requestKeyboard();
    }
    [_shouldShowSelectionHandles](cause) {
      if (!dart.test(this[_selectionGestureDetectorBuilder].shouldShowSelectionToolbar)) return false;
      if (dart.equals(cause, editable.SelectionChangedCause.keyboard)) return false;
      if (dart.test(this.widget.readOnly) && dart.test(this[_effectiveController].selection.isCollapsed)) return false;
      if (!dart.test(this[_isEnabled])) return false;
      if (dart.equals(cause, editable.SelectionChangedCause.longPress)) return true;
      if (this[_effectiveController].text[$isNotEmpty]) return true;
      return false;
    }
    [_handleSelectionChanged](selection, cause) {
      let t2;
      if (selection == null) dart.nullFailed(L0, 1041, 46, "selection");
      let willShowSelectionHandles = this[_shouldShowSelectionHandles](cause);
      if (!dart.equals(willShowSelectionHandles, this[_showSelectionHandles])) {
        this.setState(dart.fn(() => {
          this[_showSelectionHandles] = willShowSelectionHandles;
        }, VoidTovoid()));
      }
      switch (theme$.Theme.of(this.context).platform) {
        case C0 || CT.C0:
        case C1 || CT.C1:
        {
          if (dart.equals(cause, editable.SelectionChangedCause.longPress)) {
            t2 = this[_editableText];
            t2 == null ? null : t2.bringIntoView(selection.base);
          }
          return;
        }
        case C2 || CT.C2:
        case C3 || CT.C3:
        case C4 || CT.C4:
        case C5 || CT.C5:
        {
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    [_handleSelectionHandleTapped]() {
      if (dart.test(this[_effectiveController].selection.isCollapsed)) {
        dart.nullCheck(this[_editableText]).toggleToolbar();
      }
    }
    [_handleHover](hovering) {
      if (hovering == null) dart.nullFailed(L0, 1071, 26, "hovering");
      if (!dart.equals(hovering, this[_isHovering])) {
        this.setState(dart.fn(() => {
          this[_isHovering] = hovering;
        }, VoidTovoid()));
      }
    }
    build(context) {
      let t2, t4, t4$, t4$0, t4$1, t4$2;
      if (context == null) dart.nullFailed(L0, 1080, 29, "context");
      if (!dart.test(debug.debugCheckHasMaterial(context))) dart.assertFailed(null, L0, 1081, 12, "debugCheckHasMaterial(context)");
      if (!dart.test(debug.debugCheckHasMaterialLocalizations(context))) dart.assertFailed(null, L0, 1082, 12, "debugCheckHasMaterialLocalizations(context)");
      if (!dart.test(debug$.debugCheckHasDirectionality(context))) dart.assertFailed(null, L0, 1083, 12, "debugCheckHasDirectionality(context)");
      if (!!(this.widget.style != null && dart.equals(dart.nullCheck(this.widget.style).inherit, false) && (dart.nullCheck(this.widget.style).fontSize == null || dart.nullCheck(this.widget.style).textBaseline == null))) dart.assertFailed("inherit false style must supply fontSize and textBaseline", L0, 1085, 7, "!(widget.style != null && widget.style!.inherit == false &&\n        (widget.style!.fontSize == null || widget.style!.textBaseline == null))");
      let theme = theme$.Theme.of(context);
      let selectionTheme = text_selection_theme.TextSelectionTheme.of(context);
      let style = dart.nullCheck(theme.textTheme.subtitle1).merge(this.widget.style);
      let keyboardAppearance = (t2 = this.widget.keyboardAppearance, t2 == null ? theme.primaryColorBrightness : t2);
      let controller = this[_effectiveController];
      let focusNode = this[_effectiveFocusNode];
      let formatters = (() => {
        let t2 = JSArrayOfTextInputFormatter().of([]);
        let t3 = this.widget.inputFormatters;
        if (t3 != null) t2[$addAll](t3);
        if (this.widget.maxLength != null && dart.test(this.widget.maxLengthEnforced)) t2.push(new text_formatter.LengthLimitingTextInputFormatter.new(this.widget.maxLength));
        return t2;
      })();
      let textSelectionControls = this.widget.selectionControls;
      let paintCursorAboveText = null;
      let cursorOpacityAnimates = null;
      let cursorOffset = null;
      let cursorColor = this.widget.cursorColor;
      let selectionColor = null;
      let autocorrectionTextRectColor = null;
      let cursorRadius = this.widget.cursorRadius;
      switch (theme.platform) {
        case C0 || CT.C0:
        case C1 || CT.C1:
        {
          let cupertinoTheme = theme$0.CupertinoTheme.of(context);
          this.forcePressEnabled = true;
          textSelectionControls == null ? textSelectionControls = text_selection$.cupertinoTextSelectionControls : null;
          paintCursorAboveText = true;
          cursorOpacityAnimates = true;
          cursorColor == null ? cursorColor = (t4 = selectionTheme.cursorColor, t4 == null ? cupertinoTheme.primaryColor : t4) : null;
          selectionColor = (t4$ = selectionTheme.selectionColor, t4$ == null ? cupertinoTheme.primaryColor.withOpacity(0.4) : t4$);
          cursorRadius == null ? cursorRadius = C27 || CT.C27 : null;
          cursorOffset = new ui.Offset.new(-2 / dart.notNull(media_query.MediaQuery.of(context).devicePixelRatio), 0.0);
          autocorrectionTextRectColor = selectionColor;
          break;
        }
        case C2 || CT.C2:
        case C3 || CT.C3:
        case C4 || CT.C4:
        case C5 || CT.C5:
        {
          this.forcePressEnabled = false;
          textSelectionControls == null ? textSelectionControls = text_selection$0.materialTextSelectionControls : null;
          paintCursorAboveText = false;
          cursorOpacityAnimates = false;
          cursorColor == null ? cursorColor = (t4$0 = selectionTheme.cursorColor, t4$0 == null ? theme.colorScheme.primary : t4$0) : null;
          selectionColor = (t4$1 = selectionTheme.selectionColor, t4$1 == null ? theme.colorScheme.primary.withOpacity(0.4) : t4$1);
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      let child = new basic.RepaintBoundary.new({child: new restoration.UnmanagedRestorationScope.new({bucket: this.bucket, child: new editable_text.EditableText.new({key: this.editableTextKey, readOnly: dart.test(this.widget.readOnly) || !dart.test(this[_isEnabled]), toolbarOptions: this.widget.toolbarOptions, showCursor: this.widget.showCursor, showSelectionHandles: this[_showSelectionHandles], controller: controller, focusNode: focusNode, keyboardType: this.widget.keyboardType, textInputAction: this.widget.textInputAction, textCapitalization: this.widget.textCapitalization, style: style, strutStyle: this.widget.strutStyle, textAlign: this.widget.textAlign, textDirection: this.widget.textDirection, autofocus: this.widget.autofocus, obscuringCharacter: this.widget.obscuringCharacter, obscureText: this.widget.obscureText, autocorrect: this.widget.autocorrect, smartDashesType: this.widget.smartDashesType, smartQuotesType: this.widget.smartQuotesType, enableSuggestions: this.widget.enableSuggestions, maxLines: this.widget.maxLines, minLines: this.widget.minLines, expands: this.widget.expands, selectionColor: selectionColor, selectionControls: dart.test(this.widget.selectionEnabled) ? textSelectionControls : null, onChanged: this.widget.onChanged, onSelectionChanged: dart.bind(this, _handleSelectionChanged), onEditingComplete: this.widget.onEditingComplete, onSubmitted: this.widget.onSubmitted, onAppPrivateCommand: this.widget.onAppPrivateCommand, onSelectionHandleTapped: dart.bind(this, _handleSelectionHandleTapped), inputFormatters: formatters, rendererIgnoresPointer: true, mouseCursor: mouse_cursor.MouseCursor.defer, cursorWidth: this.widget.cursorWidth, cursorHeight: this.widget.cursorHeight, cursorRadius: cursorRadius, cursorColor: cursorColor, selectionHeightStyle: this.widget.selectionHeightStyle, selectionWidthStyle: this.widget.selectionWidthStyle, cursorOpacityAnimates: cursorOpacityAnimates, cursorOffset: cursorOffset, paintCursorAboveText: paintCursorAboveText, backgroundCursorColor: colors$.CupertinoColors.inactiveGray, scrollPadding: this.widget.scrollPadding, keyboardAppearance: keyboardAppearance, enableInteractiveSelection: this.widget.enableInteractiveSelection, dragStartBehavior: this.widget.dragStartBehavior, scrollController: this.widget.scrollController, scrollPhysics: this.widget.scrollPhysics, autofillHints: this.widget.autofillHints, autocorrectionTextRectColor: autocorrectionTextRectColor, restorationId: "editable", $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C84 || CT.C84}), $creationLocationd_0dea112b090073317d4: C88 || CT.C88});
      if (this.widget.decoration != null) {
        child = new transitions.AnimatedBuilder.new({animation: new change_notifier._MergingListenable.new(JSArrayOfListenable().of([focusNode, controller])), builder: dart.fn((context, child) => {
            if (context == null) dart.nullFailed(L0, 1203, 32, "context");
            return new input_decorator.InputDecorator.new({decoration: this[_getEffectiveDecoration](), baseStyle: this.widget.style, textAlign: this.widget.textAlign, textAlignVertical: this.widget.textAlignVertical, isHovering: this[_isHovering], isFocused: focusNode.hasFocus, isEmpty: controller.value.text[$isEmpty], expands: this.widget.expands, child: child, $creationLocationd_0dea112b090073317d4: C91 || CT.C91});
          }, BuildContextAndWidgetNToInputDecorator()), child: child, $creationLocationd_0dea112b090073317d4: C102 || CT.C102});
      }
      let effectiveMouseCursor = material_state.MaterialStateProperty.resolveAs(mouse_cursor.MouseCursor, (t4$2 = this.widget.mouseCursor, t4$2 == null ? material_state.MaterialStateMouseCursor.textable : t4$2), (() => {
        let t4 = LinkedHashSetOfMaterialState().new();
        if (!dart.test(this[_isEnabled])) t4.add(material_state.MaterialState.disabled);
        if (dart.test(this[_isHovering])) t4.add(material_state.MaterialState.hovered);
        if (dart.test(focusNode.hasFocus)) t4.add(material_state.MaterialState.focused);
        if (dart.test(this[_hasError])) t4.add(material_state.MaterialState.error);
        return t4;
      })());
      return new basic.MouseRegion.new({cursor: effectiveMouseCursor, onEnter: dart.fn(event => {
          if (event == null) dart.nullFailed(L0, 1231, 35, "event");
          return this[_handleHover](true);
        }, PointerEnterEventTovoid()), onExit: dart.fn(event => {
          if (event == null) dart.nullFailed(L0, 1232, 33, "event");
          return this[_handleHover](false);
        }, PointerExitEventTovoid()), child: new basic.IgnorePointer.new({ignoring: !dart.test(this[_isEnabled]), child: new transitions.AnimatedBuilder.new({animation: controller, builder: dart.fn((context, child) => {
              if (context == null) dart.nullFailed(L0, 1237, 34, "context");
              return new basic.Semantics.new({maxValueLength: dart.test(this.widget.maxLengthEnforced) && this.widget.maxLength != null && dart.nullCheck(this.widget.maxLength) > 0 ? this.widget.maxLength : null, currentValueLength: this[_currentLength], onTap: dart.fn(() => {
                  if (!dart.test(this[_effectiveController].selection.isValid)) this[_effectiveController].selection = new text_editing.TextSelection.collapsed({offset: this[_effectiveController].text.length});
                  this[_requestKeyboard]();
                }, VoidTovoid()), child: child, $creationLocationd_0dea112b090073317d4: C107 || CT.C107});
            }, BuildContextAndWidgetNToSemantics()), child: this[_selectionGestureDetectorBuilder].buildGestureDetector({behavior: proxy_box.HitTestBehavior.translucent, child: child}), $creationLocationd_0dea112b090073317d4: C113 || CT.C113}), $creationLocationd_0dea112b090073317d4: C118 || CT.C118}), $creationLocationd_0dea112b090073317d4: C122 || CT.C122});
    }
  };
  (text_field._TextFieldState.new = function() {
    this[_controller] = null;
    this[_focusNode] = null;
    this[_isHovering] = false;
    this[_showSelectionHandles] = false;
    this[___TextFieldState__selectionGestureDetectorBuilder] = null;
    this[___TextFieldState__selectionGestureDetectorBuilder_isSet] = false;
    this[___TextFieldState_forcePressEnabled] = null;
    this[___TextFieldState_forcePressEnabled_isSet] = false;
    this.editableTextKey = GlobalKeyOfEditableTextState().new();
    text_field._TextFieldState.__proto__.new.call(this);
    ;
  }).prototype = text_field._TextFieldState.prototype;
  dart.addTypeTests(text_field._TextFieldState);
  dart.addTypeCaches(text_field._TextFieldState);
  text_field._TextFieldState[dart.implements] = () => [text_selection.TextSelectionGestureDetectorBuilderDelegate];
  dart.setMethodSignature(text_field._TextFieldState, () => ({
    __proto__: dart.getMethods(text_field._TextFieldState.__proto__),
    [_getEffectiveDecoration]: dart.fnType(input_decorator.InputDecoration, []),
    restoreState: dart.fnType(dart.void, [dart.nullable(restoration$.RestorationBucket), core.bool]),
    [_registerController]: dart.fnType(dart.void, []),
    [_createLocalController]: dart.fnType(dart.void, [], [dart.nullable(text_input.TextEditingValue)]),
    [_requestKeyboard]: dart.fnType(dart.void, []),
    [_shouldShowSelectionHandles]: dart.fnType(core.bool, [dart.nullable(editable.SelectionChangedCause)]),
    [_handleSelectionChanged]: dart.fnType(dart.void, [text_editing.TextSelection, dart.nullable(editable.SelectionChangedCause)]),
    [_handleSelectionHandleTapped]: dart.fnType(dart.void, []),
    [_handleHover]: dart.fnType(dart.void, [core.bool]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(text_field._TextFieldState, () => ({
    __proto__: dart.getGetters(text_field._TextFieldState.__proto__),
    [_effectiveController]: editable_text.TextEditingController,
    [_effectiveFocusNode]: focus_manager.FocusNode,
    needsCounter: core.bool,
    [_selectionGestureDetectorBuilder]: text_field._TextFieldSelectionGestureDetectorBuilder,
    forcePressEnabled: core.bool,
    selectionEnabled: core.bool,
    [_isEnabled]: core.bool,
    [_currentLength]: core.int,
    [_hasIntrinsicError]: core.bool,
    [_hasError]: core.bool,
    [_canRequestFocus]: core.bool,
    restorationId: dart.nullable(core.String),
    [_editableText]: dart.nullable(editable_text.EditableTextState)
  }));
  dart.setSetterSignature(text_field._TextFieldState, () => ({
    __proto__: dart.getSetters(text_field._TextFieldState.__proto__),
    [_selectionGestureDetectorBuilder]: text_field._TextFieldSelectionGestureDetectorBuilder,
    forcePressEnabled: core.bool
  }));
  dart.setLibraryUri(text_field._TextFieldState, L1);
  dart.setFieldSignature(text_field._TextFieldState, () => ({
    __proto__: dart.getFields(text_field._TextFieldState.__proto__),
    [_controller]: dart.fieldType(dart.nullable(restoration_properties.RestorableTextEditingController)),
    [_focusNode]: dart.fieldType(dart.nullable(focus_manager.FocusNode)),
    [_isHovering]: dart.fieldType(core.bool),
    [_showSelectionHandles]: dart.fieldType(core.bool),
    [___TextFieldState__selectionGestureDetectorBuilder]: dart.fieldType(dart.nullable(text_field._TextFieldSelectionGestureDetectorBuilder)),
    [___TextFieldState__selectionGestureDetectorBuilder_isSet]: dart.fieldType(core.bool),
    [___TextFieldState_forcePressEnabled]: dart.fieldType(dart.nullable(core.bool)),
    [___TextFieldState_forcePressEnabled_isSet]: dart.fieldType(core.bool),
    editableTextKey: dart.finalFieldType(framework.GlobalKey$(editable_text.EditableTextState))
  }));
  dart.trackLibraries("packages/flutter/src/material/text_field.dart", {
    "package:flutter/src/material/text_field.dart": text_field
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_field.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"../../../../../../../../../../packages/flutter/src/material/text_field.dart.lib.js"}');
  // Exports:
  return {
    src__material__text_field: text_field
  };
}));

//# sourceMappingURL=text_field.dart.lib.js.map
