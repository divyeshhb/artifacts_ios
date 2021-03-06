define(['dart_sdk', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/rendering/viewport_offset.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/key.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/rendering/sliver_grid.dart'], (function load__packages__flutter__src__widgets__scroll_view_dart(dart_sdk, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__rendering__viewport_offset$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__key$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__rendering__sliver_grid$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const scroll_physics = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scroll_physics;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const debug = packages__flutter__src__widgets__widget_span$46dart.src__widgets__debug;
  const viewport = packages__flutter__src__widgets__widget_span$46dart.src__widgets__viewport;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const primary_scroll_controller = packages__flutter__src__widgets__widget_span$46dart.src__widgets__primary_scroll_controller;
  const scrollable$ = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scrollable;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const notification_listener = packages__flutter__src__widgets__widget_span$46dart.src__widgets__notification_listener;
  const scroll_notification = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scroll_notification;
  const focus_scope = packages__flutter__src__widgets__widget_span$46dart.src__widgets__focus_scope;
  const scroll_controller = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scroll_controller;
  const media_query = packages__flutter__src__widgets__widget_span$46dart.src__widgets__media_query;
  const sliver = packages__flutter__src__widgets__widget_span$46dart.src__widgets__sliver;
  const viewport_offset = packages__flutter__src__rendering__viewport_offset$46dart.src__rendering__viewport_offset;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const key = packages__flutter__src__foundation__key$46dart.src__foundation__key;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const sliver_grid = packages__flutter__src__rendering__sliver_grid$46dart.src__rendering__sliver_grid;
  var scroll_view = Object.create(dart.library);
  var $length = dartx.length;
  var $truncate = dartx.truncate;
  var $isEven = dartx.isEven;
  dart._checkModuleNullSafetyMode(false);
  var ScrollViewKeyboardDismissBehaviorL = () => (ScrollViewKeyboardDismissBehaviorL = dart.constFn(dart.legacy(scroll_view.ScrollViewKeyboardDismissBehavior)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var BuildContextAndViewportOffsetToWidget = () => (BuildContextAndViewportOffsetToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, viewport_offset.ViewportOffset])))();
  var NotificationListenerOfScrollUpdateNotification = () => (NotificationListenerOfScrollUpdateNotification = dart.constFn(notification_listener.NotificationListener$(scroll_notification.ScrollUpdateNotification)))();
  var ScrollUpdateNotificationTobool = () => (ScrollUpdateNotificationTobool = dart.constFn(dart.fnType(core.bool, [scroll_notification.ScrollUpdateNotification])))();
  var EnumPropertyOfAxis = () => (EnumPropertyOfAxis = dart.constFn(diagnostics.EnumProperty$(basic_types.Axis)))();
  var DiagnosticsPropertyOfScrollController = () => (DiagnosticsPropertyOfScrollController = dart.constFn(diagnostics.DiagnosticsProperty$(scroll_controller.ScrollController)))();
  var DiagnosticsPropertyOfScrollPhysics = () => (DiagnosticsPropertyOfScrollPhysics = dart.constFn(diagnostics.DiagnosticsProperty$(scroll_physics.ScrollPhysics)))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(framework.Widget)))();
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var DiagnosticsPropertyOfEdgeInsetsGeometry = () => (DiagnosticsPropertyOfEdgeInsetsGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(edge_insets.EdgeInsetsGeometry)))();
  var BuildContextAndintToWidget = () => (BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))();
  var intN = () => (intN = dart.constFn(dart.nullable(core.int)))();
  var WidgetAndintTointN = () => (WidgetAndintTointN = dart.constFn(dart.fnType(intN(), [framework.Widget, core.int])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/scroll_view.dart";
  var L1 = "package:flutter/src/widgets/scroll_view.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: scroll_view.ScrollViewKeyboardDismissBehavior.prototype,
        [_name$]: "ScrollViewKeyboardDismissBehavior.manual",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: scroll_view.ScrollViewKeyboardDismissBehavior.prototype,
        [_name$]: "ScrollViewKeyboardDismissBehavior.onDrag",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], ScrollViewKeyboardDismissBehaviorL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.vertical",
        index: 1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name$0]: "DragStartBehavior.start",
        index: 1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name$1]: "Clip.hardEdge",
        index: 1
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: scroll_physics.AlwaysScrollableScrollPhysics.prototype,
        [ScrollPhysics_parent]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.up",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.down",
        index: 2
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.left",
        index: 3
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.right",
        index: 1
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "axisDirection",
        [_Location_column]: 9,
        [_Location_line]: 338,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "offset",
        [_Location_column]: 9,
        [_Location_line]: 339,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "slivers",
        [_Location_column]: 9,
        [_Location_line]: 340,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipBehavior",
        [_Location_column]: 9,
        [_Location_line]: 341,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], _LocationL());
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 337,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "axisDirection",
        [_Location_column]: 7,
        [_Location_line]: 345,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "offset",
        [_Location_column]: 7,
        [_Location_line]: 346,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "slivers",
        [_Location_column]: 7,
        [_Location_line]: 347,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cacheExtent",
        [_Location_column]: 7,
        [_Location_line]: 348,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "center",
        [_Location_column]: 7,
        [_Location_line]: 349,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "anchor",
        [_Location_column]: 7,
        [_Location_line]: 350,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipBehavior",
        [_Location_column]: 7,
        [_Location_line]: 351,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25], _LocationL());
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 344,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dragStartBehavior",
        [_Location_column]: 7,
        [_Location_line]: 363,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "axisDirection",
        [_Location_column]: 7,
        [_Location_line]: 364,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 7,
        [_Location_line]: 365,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 7,
        [_Location_line]: 366,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "semanticChildCount",
        [_Location_column]: 7,
        [_Location_line]: 367,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "restorationId",
        [_Location_column]: 7,
        [_Location_line]: 368,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "viewportBuilder",
        [_Location_column]: 7,
        [_Location_line]: 369,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], _LocationL());
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 362,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 40,
        [_Location_line]: 374,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37], _LocationL());
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 374,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 379,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onNotification",
        [_Location_column]: 9,
        [_Location_line]: 380,
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
        [_Location_line]: 378,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C42() {
      return C42 = dart.constList([], WidgetL());
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 11,
        [_Location_line]: 696,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 701,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46], _LocationL());
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 695,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 30,
        [_Location_line]: 707,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sliver",
        [_Location_column]: 57,
        [_Location_line]: 707,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50], _LocationL());
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 707,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 9,
        [_Location_line]: 1436,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemExtent",
        [_Location_column]: 9,
        [_Location_line]: 1437,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54], _LocationL());
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 1435,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 23,
        [_Location_line]: 1440,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57], _LocationL());
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 1440,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 7,
        [_Location_line]: 1984,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "gridDelegate",
        [_Location_column]: 7,
        [_Location_line]: 1985,
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
        [_Location_column]: 12,
        [_Location_line]: 1983,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    }
  }, false);
  var _name$ = dart.privateName(scroll_view, "_name");
  var C0;
  var C1;
  var C2;
  scroll_view.ScrollViewKeyboardDismissBehavior = class ScrollViewKeyboardDismissBehavior extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (scroll_view.ScrollViewKeyboardDismissBehavior.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 30, 6, "index");
    if (_name == null) dart.nullFailed(L0, 30, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = scroll_view.ScrollViewKeyboardDismissBehavior.prototype;
  dart.addTypeTests(scroll_view.ScrollViewKeyboardDismissBehavior);
  dart.addTypeCaches(scroll_view.ScrollViewKeyboardDismissBehavior);
  dart.setLibraryUri(scroll_view.ScrollViewKeyboardDismissBehavior, L1);
  dart.setFieldSignature(scroll_view.ScrollViewKeyboardDismissBehavior, () => ({
    __proto__: dart.getFields(scroll_view.ScrollViewKeyboardDismissBehavior.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(scroll_view.ScrollViewKeyboardDismissBehavior, ['toString']);
  scroll_view.ScrollViewKeyboardDismissBehavior.manual = C0 || CT.C0;
  scroll_view.ScrollViewKeyboardDismissBehavior.onDrag = C1 || CT.C1;
  scroll_view.ScrollViewKeyboardDismissBehavior.values = C2 || CT.C2;
  var _name = dart.privateName(basic_types, "_name");
  var C3;
  var _name$0 = dart.privateName(recognizer, "_name");
  var C4;
  var _name$1 = dart.privateName(ui, "_name");
  var C5;
  var ScrollPhysics_parent = dart.privateName(scroll_physics, "ScrollPhysics.parent");
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C13;
  var C14;
  var C15;
  var C16;
  var C12;
  var C11;
  var C19;
  var C20;
  var C21;
  var C22;
  var C23;
  var C24;
  var C25;
  var C18;
  var C17;
  var C28;
  var C29;
  var C30;
  var C31;
  var C32;
  var C33;
  var C34;
  var C27;
  var C26;
  var C37;
  var C36;
  var C35;
  var C40;
  var C41;
  var C39;
  var C38;
  var scrollDirection$ = dart.privateName(scroll_view, "ScrollView.scrollDirection");
  var reverse$ = dart.privateName(scroll_view, "ScrollView.reverse");
  var controller$ = dart.privateName(scroll_view, "ScrollView.controller");
  var primary$ = dart.privateName(scroll_view, "ScrollView.primary");
  var physics$ = dart.privateName(scroll_view, "ScrollView.physics");
  var shrinkWrap$ = dart.privateName(scroll_view, "ScrollView.shrinkWrap");
  var center$ = dart.privateName(scroll_view, "ScrollView.center");
  var anchor$ = dart.privateName(scroll_view, "ScrollView.anchor");
  var cacheExtent$ = dart.privateName(scroll_view, "ScrollView.cacheExtent");
  var semanticChildCount$ = dart.privateName(scroll_view, "ScrollView.semanticChildCount");
  var dragStartBehavior$ = dart.privateName(scroll_view, "ScrollView.dragStartBehavior");
  var keyboardDismissBehavior$ = dart.privateName(scroll_view, "ScrollView.keyboardDismissBehavior");
  var restorationId$ = dart.privateName(scroll_view, "ScrollView.restorationId");
  var clipBehavior$ = dart.privateName(scroll_view, "ScrollView.clipBehavior");
  scroll_view.ScrollView = class ScrollView extends framework.StatelessWidget {
    get scrollDirection() {
      return this[scrollDirection$];
    }
    set scrollDirection(value) {
      super.scrollDirection = value;
    }
    get reverse() {
      return this[reverse$];
    }
    set reverse(value) {
      super.reverse = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get primary() {
      return this[primary$];
    }
    set primary(value) {
      super.primary = value;
    }
    get physics() {
      return this[physics$];
    }
    set physics(value) {
      super.physics = value;
    }
    get shrinkWrap() {
      return this[shrinkWrap$];
    }
    set shrinkWrap(value) {
      super.shrinkWrap = value;
    }
    get center() {
      return this[center$];
    }
    set center(value) {
      super.center = value;
    }
    get anchor() {
      return this[anchor$];
    }
    set anchor(value) {
      super.anchor = value;
    }
    get cacheExtent() {
      return this[cacheExtent$];
    }
    set cacheExtent(value) {
      super.cacheExtent = value;
    }
    get semanticChildCount() {
      return this[semanticChildCount$];
    }
    set semanticChildCount(value) {
      super.semanticChildCount = value;
    }
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      super.dragStartBehavior = value;
    }
    get keyboardDismissBehavior() {
      return this[keyboardDismissBehavior$];
    }
    set keyboardDismissBehavior(value) {
      super.keyboardDismissBehavior = value;
    }
    get restorationId() {
      return this[restorationId$];
    }
    set restorationId(value) {
      super.restorationId = value;
    }
    get clipBehavior() {
      return this[clipBehavior$];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    getDirection(context) {
      if (context == null) dart.nullFailed(L0, 290, 43, "context");
      return basic.getAxisDirectionFromAxisReverseAndDirectionality(context, this.scrollDirection, this.reverse);
    }
    buildViewport(context, offset, axisDirection, slivers) {
      if (context == null) dart.nullFailed(L0, 316, 18, "context");
      if (offset == null) dart.nullFailed(L0, 317, 20, "offset");
      if (axisDirection == null) dart.nullFailed(L0, 318, 19, "axisDirection");
      if (slivers == null) dart.nullFailed(L0, 319, 18, "slivers");
      if (!dart.test(dart.fn(() => {
        switch (axisDirection) {
          case C7 || CT.C7:
          case C8 || CT.C8:
          {
            return debug.debugCheckHasDirectionality(context, {why: "to determine the cross-axis direction of the scroll view", hint: "Vertical scroll views create Viewport widgets that try to determine their cross axis direction " + "from the ambient Directionality."});
          }
          case C9 || CT.C9:
          case C10 || CT.C10:
          {
            return true;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }, VoidTobool())())) dart.assertFailed(null, L0, 321, 12, "() {\n      switch (axisDirection) {\n        case AxisDirection.up:\n        case AxisDirection.down:\n          return debugCheckHasDirectionality(\n            context,\n            why: 'to determine the cross-axis direction of the scroll view',\n            hint: 'Vertical scroll views create Viewport widgets that try to determine their cross axis direction '\n                  'from the ambient Directionality.',\n          );\n        case AxisDirection.left:\n        case AxisDirection.right:\n          return true;\n      }\n    }()");
      if (dart.test(this.shrinkWrap)) {
        return new viewport.ShrinkWrappingViewport.new({axisDirection: axisDirection, offset: offset, slivers: slivers, clipBehavior: this.clipBehavior, $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
      }
      return new viewport.Viewport.new({axisDirection: axisDirection, offset: offset, slivers: slivers, cacheExtent: this.cacheExtent, center: this.center, anchor: this.anchor, clipBehavior: this.clipBehavior, $creationLocationd_0dea112b090073317d4: C17 || CT.C17});
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 356, 29, "context");
      let slivers = this.buildSlivers(context);
      let axisDirection = this.getDirection(context);
      let scrollController = dart.test(this.primary) ? primary_scroll_controller.PrimaryScrollController.of(context) : this.controller;
      let scrollable = new scrollable$.Scrollable.new({dragStartBehavior: this.dragStartBehavior, axisDirection: axisDirection, controller: scrollController, physics: this.physics, semanticChildCount: this.semanticChildCount, restorationId: this.restorationId, viewportBuilder: dart.fn((context, offset) => {
          if (context == null) dart.nullFailed(L0, 369, 38, "context");
          if (offset == null) dart.nullFailed(L0, 369, 62, "offset");
          return this.buildViewport(context, offset, axisDirection, slivers);
        }, BuildContextAndViewportOffsetToWidget()), $creationLocationd_0dea112b090073317d4: C26 || CT.C26});
      let scrollableResult = dart.test(this.primary) && scrollController != null ? new primary_scroll_controller.PrimaryScrollController.none({child: scrollable, $creationLocationd_0dea112b090073317d4: C35 || CT.C35}) : scrollable;
      if (dart.equals(this.keyboardDismissBehavior, scroll_view.ScrollViewKeyboardDismissBehavior.onDrag)) {
        return new (NotificationListenerOfScrollUpdateNotification()).new({child: scrollableResult, onNotification: dart.fn(notification => {
            if (notification == null) dart.nullFailed(L0, 380, 51, "notification");
            let focusScope = focus_scope.FocusScope.of(context);
            if (notification.dragDetails != null && dart.test(focusScope.hasFocus)) {
              focusScope.unfocus();
            }
            return false;
          }, ScrollUpdateNotificationTobool()), $creationLocationd_0dea112b090073317d4: C38 || CT.C38});
      } else {
        return scrollableResult;
      }
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 394, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfAxis()).new("scrollDirection", this.scrollDirection));
      properties.add(new diagnostics.FlagProperty.new("reverse", {value: this.reverse, ifTrue: "reversed", showName: true}));
      properties.add(new (DiagnosticsPropertyOfScrollController()).new("controller", this.controller, {showName: false, defaultValue: null}));
      properties.add(new diagnostics.FlagProperty.new("primary", {value: this.primary, ifTrue: "using primary controller", showName: true}));
      properties.add(new (DiagnosticsPropertyOfScrollPhysics()).new("physics", this.physics, {showName: false, defaultValue: null}));
      properties.add(new diagnostics.FlagProperty.new("shrinkWrap", {value: this.shrinkWrap, ifTrue: "shrink-wrapping", showName: true}));
    }
  };
  (scroll_view.ScrollView.new = function(opts) {
    let t0, t0$;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C3 || CT.C3;
    if (scrollDirection == null) dart.nullFailed(L0, 81, 10, "scrollDirection");
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    if (reverse == null) dart.nullFailed(L0, 82, 10, "reverse");
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    if (shrinkWrap == null) dart.nullFailed(L0, 86, 10, "shrinkWrap");
    let center = opts && 'center' in opts ? opts.center : null;
    let anchor = opts && 'anchor' in opts ? opts.anchor : 0;
    if (anchor == null) dart.nullFailed(L0, 88, 10, "anchor");
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C4 || CT.C4;
    if (dragStartBehavior == null) dart.nullFailed(L0, 91, 10, "dragStartBehavior");
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C0 || CT.C0;
    if (keyboardDismissBehavior == null) dart.nullFailed(L0, 92, 10, "keyboardDismissBehavior");
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C5 || CT.C5;
    if (clipBehavior == null) dart.nullFailed(L0, 94, 10, "clipBehavior");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[scrollDirection$] = scrollDirection;
    this[reverse$] = reverse;
    this[controller$] = controller;
    this[shrinkWrap$] = shrinkWrap;
    this[center$] = center;
    this[anchor$] = anchor;
    this[cacheExtent$] = cacheExtent;
    this[semanticChildCount$] = semanticChildCount;
    this[dragStartBehavior$] = dragStartBehavior;
    this[keyboardDismissBehavior$] = keyboardDismissBehavior;
    this[restorationId$] = restorationId;
    this[clipBehavior$] = clipBehavior;
    if (!(scrollDirection != null)) dart.assertFailed(null, L0, 95, 15, "scrollDirection != null");
    if (!(reverse != null)) dart.assertFailed(null, L0, 96, 15, "reverse != null");
    if (!(shrinkWrap != null)) dart.assertFailed(null, L0, 97, 15, "shrinkWrap != null");
    if (!(dragStartBehavior != null)) dart.assertFailed(null, L0, 98, 15, "dragStartBehavior != null");
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 99, 15, "clipBehavior != null");
    if (!!(controller != null && dart.equals(primary, true))) dart.assertFailed("Primary ScrollViews obtain their ScrollController via inheritance from a PrimaryScrollController widget. " + "You cannot both set primary to true and pass an explicit controller.", L0, 100, 15, "!(controller != null && primary == true)");
    if (!(!dart.test(shrinkWrap) || center == null)) dart.assertFailed(null, L0, 104, 15, "!shrinkWrap || center == null");
    if (!(anchor != null)) dart.assertFailed(null, L0, 105, 15, "anchor != null");
    if (!(dart.notNull(anchor) >= 0.0 && dart.notNull(anchor) <= 1.0)) dart.assertFailed(null, L0, 106, 15, "anchor >= 0.0 && anchor <= 1.0");
    if (!(semanticChildCount == null || dart.notNull(semanticChildCount) >= 0)) dart.assertFailed(null, L0, 107, 15, "semanticChildCount == null || semanticChildCount >= 0");
    this[primary$] = (t0 = primary, t0 == null ? controller == null && scrollDirection == basic_types.Axis.vertical : t0);
    this[physics$] = (t0$ = physics, t0$ == null ? dart.equals(primary, true) || primary == null && controller == null && scrollDirection == basic_types.Axis.vertical ? C6 || CT.C6 : null : t0$);
    scroll_view.ScrollView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.ScrollView.prototype;
  dart.addTypeTests(scroll_view.ScrollView);
  dart.addTypeCaches(scroll_view.ScrollView);
  dart.setMethodSignature(scroll_view.ScrollView, () => ({
    __proto__: dart.getMethods(scroll_view.ScrollView.__proto__),
    getDirection: dart.fnType(basic_types.AxisDirection, [framework.BuildContext]),
    buildViewport: dart.fnType(framework.Widget, [framework.BuildContext, viewport_offset.ViewportOffset, basic_types.AxisDirection, core.List$(framework.Widget)]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(scroll_view.ScrollView, L1);
  dart.setFieldSignature(scroll_view.ScrollView, () => ({
    __proto__: dart.getFields(scroll_view.ScrollView.__proto__),
    scrollDirection: dart.finalFieldType(basic_types.Axis),
    reverse: dart.finalFieldType(core.bool),
    controller: dart.finalFieldType(dart.nullable(scroll_controller.ScrollController)),
    primary: dart.finalFieldType(core.bool),
    physics: dart.finalFieldType(dart.nullable(scroll_physics.ScrollPhysics)),
    shrinkWrap: dart.finalFieldType(core.bool),
    center: dart.finalFieldType(dart.nullable(key.Key)),
    anchor: dart.finalFieldType(core.double),
    cacheExtent: dart.finalFieldType(dart.nullable(core.double)),
    semanticChildCount: dart.finalFieldType(dart.nullable(core.int)),
    dragStartBehavior: dart.finalFieldType(recognizer.DragStartBehavior),
    keyboardDismissBehavior: dart.finalFieldType(scroll_view.ScrollViewKeyboardDismissBehavior),
    restorationId: dart.finalFieldType(dart.nullable(core.String)),
    clipBehavior: dart.finalFieldType(ui.Clip)
  }));
  var C42;
  var slivers$ = dart.privateName(scroll_view, "CustomScrollView.slivers");
  scroll_view.CustomScrollView = class CustomScrollView extends scroll_view.ScrollView {
    get slivers() {
      return this[slivers$];
    }
    set slivers(value) {
      super.slivers = value;
    }
    buildSlivers(context) {
      if (context == null) dart.nullFailed(L0, 629, 42, "context");
      return this.slivers;
    }
  };
  (scroll_view.CustomScrollView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C3 || CT.C3;
    if (scrollDirection == null) dart.nullFailed(L0, 592, 10, "scrollDirection");
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    if (reverse == null) dart.nullFailed(L0, 593, 10, "reverse");
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    if (shrinkWrap == null) dart.nullFailed(L0, 597, 10, "shrinkWrap");
    let center = opts && 'center' in opts ? opts.center : null;
    let anchor = opts && 'anchor' in opts ? opts.anchor : 0;
    if (anchor == null) dart.nullFailed(L0, 599, 12, "anchor");
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let slivers = opts && 'slivers' in opts ? opts.slivers : C42 || CT.C42;
    if (slivers == null) dart.nullFailed(L0, 601, 10, "slivers");
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C4 || CT.C4;
    if (dragStartBehavior == null) dart.nullFailed(L0, 603, 23, "dragStartBehavior");
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C0 || CT.C0;
    if (keyboardDismissBehavior == null) dart.nullFailed(L0, 604, 39, "keyboardDismissBehavior");
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C5 || CT.C5;
    if (clipBehavior == null) dart.nullFailed(L0, 606, 10, "clipBehavior");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[slivers$] = slivers;
    scroll_view.CustomScrollView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, center: center, anchor: anchor, cacheExtent: cacheExtent, semanticChildCount: semanticChildCount, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.CustomScrollView.prototype;
  dart.addTypeTests(scroll_view.CustomScrollView);
  dart.addTypeCaches(scroll_view.CustomScrollView);
  dart.setMethodSignature(scroll_view.CustomScrollView, () => ({
    __proto__: dart.getMethods(scroll_view.CustomScrollView.__proto__),
    buildSlivers: dart.fnType(core.List$(framework.Widget), [framework.BuildContext])
  }));
  dart.setLibraryUri(scroll_view.CustomScrollView, L1);
  dart.setFieldSignature(scroll_view.CustomScrollView, () => ({
    __proto__: dart.getFields(scroll_view.CustomScrollView.__proto__),
    slivers: dart.finalFieldType(core.List$(framework.Widget))
  }));
  var C45;
  var C46;
  var C44;
  var C43;
  var C49;
  var C50;
  var C48;
  var C47;
  var padding$ = dart.privateName(scroll_view, "BoxScrollView.padding");
  scroll_view.BoxScrollView = class BoxScrollView extends scroll_view.ScrollView {
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    buildSlivers(context) {
      if (context == null) dart.nullFailed(L0, 679, 42, "context");
      let sliver = this.buildChildLayout(context);
      let effectivePadding = this.padding;
      if (this.padding == null) {
        let mediaQuery = media_query.MediaQuery.maybeOf(context);
        if (mediaQuery != null) {
          let mediaQueryHorizontalPadding = mediaQuery.padding.copyWith({top: 0.0, bottom: 0.0});
          let mediaQueryVerticalPadding = mediaQuery.padding.copyWith({left: 0.0, right: 0.0});
          effectivePadding = dart.equals(this.scrollDirection, basic_types.Axis.vertical) ? mediaQueryVerticalPadding : mediaQueryHorizontalPadding;
          sliver = new media_query.MediaQuery.new({data: mediaQuery.copyWith({padding: dart.equals(this.scrollDirection, basic_types.Axis.vertical) ? mediaQueryHorizontalPadding : mediaQueryVerticalPadding}), child: sliver, $creationLocationd_0dea112b090073317d4: C43 || CT.C43});
        }
      }
      if (effectivePadding != null) sliver = new basic.SliverPadding.new({padding: effectivePadding, sliver: sliver, $creationLocationd_0dea112b090073317d4: C47 || CT.C47});
      return JSArrayOfWidget().of([sliver]);
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 716, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfEdgeInsetsGeometry()).new("padding", this.padding, {defaultValue: null}));
    }
  };
  (scroll_view.BoxScrollView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C3 || CT.C3;
    if (scrollDirection == null) dart.nullFailed(L0, 646, 10, "scrollDirection");
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    if (reverse == null) dart.nullFailed(L0, 647, 10, "reverse");
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    if (shrinkWrap == null) dart.nullFailed(L0, 651, 10, "shrinkWrap");
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C4 || CT.C4;
    if (dragStartBehavior == null) dart.nullFailed(L0, 655, 23, "dragStartBehavior");
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C0 || CT.C0;
    if (keyboardDismissBehavior == null) dart.nullFailed(L0, 656, 39, "keyboardDismissBehavior");
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C5 || CT.C5;
    if (clipBehavior == null) dart.nullFailed(L0, 658, 10, "clipBehavior");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[padding$] = padding;
    scroll_view.BoxScrollView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, cacheExtent: cacheExtent, semanticChildCount: semanticChildCount, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.BoxScrollView.prototype;
  dart.addTypeTests(scroll_view.BoxScrollView);
  dart.addTypeCaches(scroll_view.BoxScrollView);
  dart.setMethodSignature(scroll_view.BoxScrollView, () => ({
    __proto__: dart.getMethods(scroll_view.BoxScrollView.__proto__),
    buildSlivers: dart.fnType(core.List$(framework.Widget), [framework.BuildContext])
  }));
  dart.setLibraryUri(scroll_view.BoxScrollView, L1);
  dart.setFieldSignature(scroll_view.BoxScrollView, () => ({
    __proto__: dart.getFields(scroll_view.BoxScrollView.__proto__),
    padding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry))
  }));
  var C53;
  var C54;
  var C52;
  var C51;
  var C57;
  var C56;
  var C55;
  var itemExtent$ = dart.privateName(scroll_view, "ListView.itemExtent");
  var childrenDelegate$ = dart.privateName(scroll_view, "ListView.childrenDelegate");
  scroll_view.ListView = class ListView extends scroll_view.BoxScrollView {
    get itemExtent() {
      return this[itemExtent$];
    }
    set itemExtent(value) {
      super.itemExtent = value;
    }
    get childrenDelegate() {
      return this[childrenDelegate$];
    }
    set childrenDelegate(value) {
      super.childrenDelegate = value;
    }
    buildChildLayout(context) {
      if (context == null) dart.nullFailed(L0, 1433, 40, "context");
      if (this.itemExtent != null) {
        return new sliver.SliverFixedExtentList.new({delegate: this.childrenDelegate, itemExtent: dart.nullCheck(this.itemExtent), $creationLocationd_0dea112b090073317d4: C51 || CT.C51});
      }
      return new sliver.SliverList.new({delegate: this.childrenDelegate, $creationLocationd_0dea112b090073317d4: C55 || CT.C55});
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1444, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("itemExtent", this.itemExtent, {defaultValue: null}));
    }
    static _computeActualChildCount(itemCount) {
      if (itemCount == null) dart.nullFailed(L0, 1450, 43, "itemCount");
      return math.max(core.int, 0, dart.notNull(itemCount) * 2 - 1);
    }
  };
  (scroll_view.ListView.new = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C3 || CT.C3;
    if (scrollDirection == null) dart.nullFailed(L0, 1066, 10, "scrollDirection");
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    if (reverse == null) dart.nullFailed(L0, 1067, 10, "reverse");
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    if (shrinkWrap == null) dart.nullFailed(L0, 1071, 10, "shrinkWrap");
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let itemExtent = opts && 'itemExtent' in opts ? opts.itemExtent : null;
    let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
    if (addAutomaticKeepAlives == null) dart.nullFailed(L0, 1074, 10, "addAutomaticKeepAlives");
    let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
    if (addRepaintBoundaries == null) dart.nullFailed(L0, 1075, 10, "addRepaintBoundaries");
    let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
    if (addSemanticIndexes == null) dart.nullFailed(L0, 1076, 10, "addSemanticIndexes");
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let children = opts && 'children' in opts ? opts.children : C42 || CT.C42;
    if (children == null) dart.nullFailed(L0, 1078, 18, "children");
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C4 || CT.C4;
    if (dragStartBehavior == null) dart.nullFailed(L0, 1080, 23, "dragStartBehavior");
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C0 || CT.C0;
    if (keyboardDismissBehavior == null) dart.nullFailed(L0, 1081, 39, "keyboardDismissBehavior");
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C5 || CT.C5;
    if (clipBehavior == null) dart.nullFailed(L0, 1083, 10, "clipBehavior");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[itemExtent$] = itemExtent;
    this[childrenDelegate$] = new sliver.SliverChildListDelegate.new(children, {addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes});
    scroll_view.ListView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, cacheExtent: cacheExtent, semanticChildCount: (t0 = semanticChildCount, t0 == null ? children[$length] : t0), dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.ListView.prototype;
  (scroll_view.ListView.builder = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C3 || CT.C3;
    if (scrollDirection == null) dart.nullFailed(L0, 1140, 10, "scrollDirection");
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    if (reverse == null) dart.nullFailed(L0, 1141, 10, "reverse");
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    if (shrinkWrap == null) dart.nullFailed(L0, 1145, 10, "shrinkWrap");
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let itemExtent = opts && 'itemExtent' in opts ? opts.itemExtent : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    if (itemBuilder == null) dart.nullFailed(L0, 1148, 35, "itemBuilder");
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
    if (addAutomaticKeepAlives == null) dart.nullFailed(L0, 1150, 10, "addAutomaticKeepAlives");
    let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
    if (addRepaintBoundaries == null) dart.nullFailed(L0, 1151, 10, "addRepaintBoundaries");
    let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
    if (addSemanticIndexes == null) dart.nullFailed(L0, 1152, 10, "addSemanticIndexes");
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C4 || CT.C4;
    if (dragStartBehavior == null) dart.nullFailed(L0, 1155, 23, "dragStartBehavior");
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C0 || CT.C0;
    if (keyboardDismissBehavior == null) dart.nullFailed(L0, 1156, 39, "keyboardDismissBehavior");
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C5 || CT.C5;
    if (clipBehavior == null) dart.nullFailed(L0, 1158, 10, "clipBehavior");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[itemExtent$] = itemExtent;
    if (!(itemCount == null || dart.notNull(itemCount) >= 0)) dart.assertFailed(null, L0, 1159, 15, "itemCount == null || itemCount >= 0");
    if (!(semanticChildCount == null || dart.notNull(semanticChildCount) <= dart.nullCheck(itemCount))) dart.assertFailed(null, L0, 1160, 15, "semanticChildCount == null || semanticChildCount <= itemCount!");
    this[childrenDelegate$] = new sliver.SliverChildBuilderDelegate.new(itemBuilder, {childCount: itemCount, addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes});
    scroll_view.ListView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, cacheExtent: cacheExtent, semanticChildCount: (t0 = semanticChildCount, t0 == null ? itemCount : t0), dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.ListView.prototype;
  (scroll_view.ListView.separated = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C3 || CT.C3;
    if (scrollDirection == null) dart.nullFailed(L0, 1234, 10, "scrollDirection");
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    if (reverse == null) dart.nullFailed(L0, 1235, 10, "reverse");
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    if (shrinkWrap == null) dart.nullFailed(L0, 1239, 10, "shrinkWrap");
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    if (itemBuilder == null) dart.nullFailed(L0, 1241, 35, "itemBuilder");
    let separatorBuilder = opts && 'separatorBuilder' in opts ? opts.separatorBuilder : null;
    if (separatorBuilder == null) dart.nullFailed(L0, 1242, 35, "separatorBuilder");
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    if (itemCount == null) dart.nullFailed(L0, 1243, 18, "itemCount");
    let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
    if (addAutomaticKeepAlives == null) dart.nullFailed(L0, 1244, 10, "addAutomaticKeepAlives");
    let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
    if (addRepaintBoundaries == null) dart.nullFailed(L0, 1245, 10, "addRepaintBoundaries");
    let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
    if (addSemanticIndexes == null) dart.nullFailed(L0, 1246, 10, "addSemanticIndexes");
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C4 || CT.C4;
    if (dragStartBehavior == null) dart.nullFailed(L0, 1248, 23, "dragStartBehavior");
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C0 || CT.C0;
    if (keyboardDismissBehavior == null) dart.nullFailed(L0, 1249, 39, "keyboardDismissBehavior");
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C5 || CT.C5;
    if (clipBehavior == null) dart.nullFailed(L0, 1251, 10, "clipBehavior");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    if (!(itemBuilder != null)) dart.assertFailed(null, L0, 1252, 15, "itemBuilder != null");
    if (!(separatorBuilder != null)) dart.assertFailed(null, L0, 1253, 15, "separatorBuilder != null");
    if (!(itemCount != null && dart.notNull(itemCount) >= 0)) dart.assertFailed(null, L0, 1254, 15, "itemCount != null && itemCount >= 0");
    this[itemExtent$] = null;
    this[childrenDelegate$] = new sliver.SliverChildBuilderDelegate.new(dart.fn((context, index) => {
      if (context == null) dart.nullFailed(L0, 1257, 24, "context");
      if (index == null) dart.nullFailed(L0, 1257, 37, "index");
      let itemIndex = (dart.notNull(index) / 2)[$truncate]();
      let widget = null;
      if (index[$isEven]) {
        widget = itemBuilder(context, itemIndex);
      } else {
        widget = separatorBuilder(context, itemIndex);
        if (!dart.test(dart.fn(() => {
          if (widget == null) {
            dart.throw(assertions.FlutterError.new("separatorBuilder cannot return null."));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 1264, 21, "() {\n               if (widget == null) { // ignore: dead_code\n                 throw FlutterError('separatorBuilder cannot return null.');\n               }\n               return true;\n             }()");
      }
      return widget;
    }, BuildContextAndintToWidget()), {childCount: scroll_view.ListView._computeActualChildCount(itemCount), addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes, semanticIndexCallback: dart.fn((_, index) => {
        if (_ == null) dart.nullFailed(L0, 1277, 41, "_");
        if (index == null) dart.nullFailed(L0, 1277, 48, "index");
        return index[$isEven] ? (dart.notNull(index) / 2)[$truncate]() : null;
      }, WidgetAndintTointN())});
    scroll_view.ListView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, cacheExtent: cacheExtent, semanticChildCount: itemCount, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.ListView.prototype;
  (scroll_view.ListView.custom = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C3 || CT.C3;
    if (scrollDirection == null) dart.nullFailed(L0, 1382, 10, "scrollDirection");
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    if (reverse == null) dart.nullFailed(L0, 1383, 10, "reverse");
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    if (shrinkWrap == null) dart.nullFailed(L0, 1387, 10, "shrinkWrap");
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let itemExtent = opts && 'itemExtent' in opts ? opts.itemExtent : null;
    let childrenDelegate = opts && 'childrenDelegate' in opts ? opts.childrenDelegate : null;
    if (childrenDelegate == null) dart.nullFailed(L0, 1390, 19, "childrenDelegate");
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C4 || CT.C4;
    if (dragStartBehavior == null) dart.nullFailed(L0, 1393, 23, "dragStartBehavior");
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C0 || CT.C0;
    if (keyboardDismissBehavior == null) dart.nullFailed(L0, 1394, 39, "keyboardDismissBehavior");
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C5 || CT.C5;
    if (clipBehavior == null) dart.nullFailed(L0, 1396, 10, "clipBehavior");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[itemExtent$] = itemExtent;
    this[childrenDelegate$] = childrenDelegate;
    if (!(childrenDelegate != null)) dart.assertFailed(null, L0, 1397, 15, "childrenDelegate != null");
    scroll_view.ListView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, cacheExtent: cacheExtent, semanticChildCount: semanticChildCount, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.ListView.prototype;
  dart.addTypeTests(scroll_view.ListView);
  dart.addTypeCaches(scroll_view.ListView);
  dart.setMethodSignature(scroll_view.ListView, () => ({
    __proto__: dart.getMethods(scroll_view.ListView.__proto__),
    buildChildLayout: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(scroll_view.ListView, L1);
  dart.setFieldSignature(scroll_view.ListView, () => ({
    __proto__: dart.getFields(scroll_view.ListView.__proto__),
    itemExtent: dart.finalFieldType(dart.nullable(core.double)),
    childrenDelegate: dart.finalFieldType(sliver.SliverChildDelegate)
  }));
  var C60;
  var C61;
  var C59;
  var C58;
  var gridDelegate$ = dart.privateName(scroll_view, "GridView.gridDelegate");
  var childrenDelegate$0 = dart.privateName(scroll_view, "GridView.childrenDelegate");
  scroll_view.GridView = class GridView extends scroll_view.BoxScrollView {
    get gridDelegate() {
      return this[gridDelegate$];
    }
    set gridDelegate(value) {
      super.gridDelegate = value;
    }
    get childrenDelegate() {
      return this[childrenDelegate$0];
    }
    set childrenDelegate(value) {
      super.childrenDelegate = value;
    }
    buildChildLayout(context) {
      if (context == null) dart.nullFailed(L0, 1982, 40, "context");
      return new sliver.SliverGrid.new({delegate: this.childrenDelegate, gridDelegate: this.gridDelegate, $creationLocationd_0dea112b090073317d4: C58 || CT.C58});
    }
  };
  (scroll_view.GridView.new = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C3 || CT.C3;
    if (scrollDirection == null) dart.nullFailed(L0, 1685, 10, "scrollDirection");
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    if (reverse == null) dart.nullFailed(L0, 1686, 10, "reverse");
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    if (shrinkWrap == null) dart.nullFailed(L0, 1690, 10, "shrinkWrap");
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let gridDelegate = opts && 'gridDelegate' in opts ? opts.gridDelegate : null;
    if (gridDelegate == null) dart.nullFailed(L0, 1692, 19, "gridDelegate");
    let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
    if (addAutomaticKeepAlives == null) dart.nullFailed(L0, 1693, 10, "addAutomaticKeepAlives");
    let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
    if (addRepaintBoundaries == null) dart.nullFailed(L0, 1694, 10, "addRepaintBoundaries");
    let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
    if (addSemanticIndexes == null) dart.nullFailed(L0, 1695, 10, "addSemanticIndexes");
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let children = opts && 'children' in opts ? opts.children : C42 || CT.C42;
    if (children == null) dart.nullFailed(L0, 1697, 18, "children");
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C4 || CT.C4;
    if (dragStartBehavior == null) dart.nullFailed(L0, 1699, 23, "dragStartBehavior");
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C5 || CT.C5;
    if (clipBehavior == null) dart.nullFailed(L0, 1700, 10, "clipBehavior");
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C0 || CT.C0;
    if (keyboardDismissBehavior == null) dart.nullFailed(L0, 1701, 39, "keyboardDismissBehavior");
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$] = gridDelegate;
    if (!(gridDelegate != null)) dart.assertFailed(null, L0, 1703, 15, "gridDelegate != null");
    this[childrenDelegate$0] = new sliver.SliverChildListDelegate.new(children, {addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes});
    scroll_view.GridView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, cacheExtent: cacheExtent, semanticChildCount: (t0 = semanticChildCount, t0 == null ? children[$length] : t0), dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.GridView.prototype;
  (scroll_view.GridView.builder = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C3 || CT.C3;
    if (scrollDirection == null) dart.nullFailed(L0, 1748, 10, "scrollDirection");
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    if (reverse == null) dart.nullFailed(L0, 1749, 10, "reverse");
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    if (shrinkWrap == null) dart.nullFailed(L0, 1753, 10, "shrinkWrap");
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let gridDelegate = opts && 'gridDelegate' in opts ? opts.gridDelegate : null;
    if (gridDelegate == null) dart.nullFailed(L0, 1755, 19, "gridDelegate");
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    if (itemBuilder == null) dart.nullFailed(L0, 1756, 35, "itemBuilder");
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
    if (addAutomaticKeepAlives == null) dart.nullFailed(L0, 1758, 10, "addAutomaticKeepAlives");
    let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
    if (addRepaintBoundaries == null) dart.nullFailed(L0, 1759, 10, "addRepaintBoundaries");
    let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
    if (addSemanticIndexes == null) dart.nullFailed(L0, 1760, 10, "addSemanticIndexes");
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C4 || CT.C4;
    if (dragStartBehavior == null) dart.nullFailed(L0, 1763, 23, "dragStartBehavior");
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C0 || CT.C0;
    if (keyboardDismissBehavior == null) dart.nullFailed(L0, 1764, 39, "keyboardDismissBehavior");
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C5 || CT.C5;
    if (clipBehavior == null) dart.nullFailed(L0, 1766, 10, "clipBehavior");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$] = gridDelegate;
    if (!(gridDelegate != null)) dart.assertFailed(null, L0, 1767, 15, "gridDelegate != null");
    this[childrenDelegate$0] = new sliver.SliverChildBuilderDelegate.new(itemBuilder, {childCount: itemCount, addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes});
    scroll_view.GridView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, cacheExtent: cacheExtent, semanticChildCount: (t0 = semanticChildCount, t0 == null ? itemCount : t0), dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.GridView.prototype;
  (scroll_view.GridView.custom = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C3 || CT.C3;
    if (scrollDirection == null) dart.nullFailed(L0, 1801, 10, "scrollDirection");
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    if (reverse == null) dart.nullFailed(L0, 1802, 10, "reverse");
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    if (shrinkWrap == null) dart.nullFailed(L0, 1806, 10, "shrinkWrap");
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let gridDelegate = opts && 'gridDelegate' in opts ? opts.gridDelegate : null;
    if (gridDelegate == null) dart.nullFailed(L0, 1808, 19, "gridDelegate");
    let childrenDelegate = opts && 'childrenDelegate' in opts ? opts.childrenDelegate : null;
    if (childrenDelegate == null) dart.nullFailed(L0, 1809, 19, "childrenDelegate");
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C4 || CT.C4;
    if (dragStartBehavior == null) dart.nullFailed(L0, 1812, 23, "dragStartBehavior");
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C0 || CT.C0;
    if (keyboardDismissBehavior == null) dart.nullFailed(L0, 1813, 39, "keyboardDismissBehavior");
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C5 || CT.C5;
    if (clipBehavior == null) dart.nullFailed(L0, 1815, 10, "clipBehavior");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$] = gridDelegate;
    this[childrenDelegate$0] = childrenDelegate;
    if (!(gridDelegate != null)) dart.assertFailed(null, L0, 1816, 15, "gridDelegate != null");
    if (!(childrenDelegate != null)) dart.assertFailed(null, L0, 1817, 15, "childrenDelegate != null");
    scroll_view.GridView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, cacheExtent: cacheExtent, semanticChildCount: semanticChildCount, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.GridView.prototype;
  (scroll_view.GridView.count = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C3 || CT.C3;
    if (scrollDirection == null) dart.nullFailed(L0, 1851, 10, "scrollDirection");
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    if (reverse == null) dart.nullFailed(L0, 1852, 10, "reverse");
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    if (shrinkWrap == null) dart.nullFailed(L0, 1856, 10, "shrinkWrap");
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let crossAxisCount = opts && 'crossAxisCount' in opts ? opts.crossAxisCount : null;
    if (crossAxisCount == null) dart.nullFailed(L0, 1858, 18, "crossAxisCount");
    let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
    if (mainAxisSpacing == null) dart.nullFailed(L0, 1859, 12, "mainAxisSpacing");
    let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
    if (crossAxisSpacing == null) dart.nullFailed(L0, 1860, 12, "crossAxisSpacing");
    let childAspectRatio = opts && 'childAspectRatio' in opts ? opts.childAspectRatio : 1;
    if (childAspectRatio == null) dart.nullFailed(L0, 1861, 12, "childAspectRatio");
    let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
    if (addAutomaticKeepAlives == null) dart.nullFailed(L0, 1862, 10, "addAutomaticKeepAlives");
    let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
    if (addRepaintBoundaries == null) dart.nullFailed(L0, 1863, 10, "addRepaintBoundaries");
    let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
    if (addSemanticIndexes == null) dart.nullFailed(L0, 1864, 10, "addSemanticIndexes");
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let children = opts && 'children' in opts ? opts.children : C42 || CT.C42;
    if (children == null) dart.nullFailed(L0, 1866, 18, "children");
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C4 || CT.C4;
    if (dragStartBehavior == null) dart.nullFailed(L0, 1868, 23, "dragStartBehavior");
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C0 || CT.C0;
    if (keyboardDismissBehavior == null) dart.nullFailed(L0, 1869, 39, "keyboardDismissBehavior");
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C5 || CT.C5;
    if (clipBehavior == null) dart.nullFailed(L0, 1871, 10, "clipBehavior");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$] = new sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.new({crossAxisCount: crossAxisCount, mainAxisSpacing: mainAxisSpacing, crossAxisSpacing: crossAxisSpacing, childAspectRatio: childAspectRatio});
    this[childrenDelegate$0] = new sliver.SliverChildListDelegate.new(children, {addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes});
    scroll_view.GridView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, cacheExtent: cacheExtent, semanticChildCount: (t0 = semanticChildCount, t0 == null ? children[$length] : t0), dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.GridView.prototype;
  (scroll_view.GridView.extent = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C3 || CT.C3;
    if (scrollDirection == null) dart.nullFailed(L0, 1917, 10, "scrollDirection");
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    if (reverse == null) dart.nullFailed(L0, 1918, 10, "reverse");
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    if (shrinkWrap == null) dart.nullFailed(L0, 1922, 10, "shrinkWrap");
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let maxCrossAxisExtent = opts && 'maxCrossAxisExtent' in opts ? opts.maxCrossAxisExtent : null;
    if (maxCrossAxisExtent == null) dart.nullFailed(L0, 1924, 21, "maxCrossAxisExtent");
    let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
    if (mainAxisSpacing == null) dart.nullFailed(L0, 1925, 12, "mainAxisSpacing");
    let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
    if (crossAxisSpacing == null) dart.nullFailed(L0, 1926, 12, "crossAxisSpacing");
    let childAspectRatio = opts && 'childAspectRatio' in opts ? opts.childAspectRatio : 1;
    if (childAspectRatio == null) dart.nullFailed(L0, 1927, 12, "childAspectRatio");
    let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
    if (addAutomaticKeepAlives == null) dart.nullFailed(L0, 1928, 10, "addAutomaticKeepAlives");
    let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
    if (addRepaintBoundaries == null) dart.nullFailed(L0, 1929, 10, "addRepaintBoundaries");
    let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
    if (addSemanticIndexes == null) dart.nullFailed(L0, 1930, 10, "addSemanticIndexes");
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let children = opts && 'children' in opts ? opts.children : C42 || CT.C42;
    if (children == null) dart.nullFailed(L0, 1932, 18, "children");
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C4 || CT.C4;
    if (dragStartBehavior == null) dart.nullFailed(L0, 1934, 23, "dragStartBehavior");
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C0 || CT.C0;
    if (keyboardDismissBehavior == null) dart.nullFailed(L0, 1935, 39, "keyboardDismissBehavior");
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C5 || CT.C5;
    if (clipBehavior == null) dart.nullFailed(L0, 1937, 10, "clipBehavior");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$] = new sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent.new({maxCrossAxisExtent: maxCrossAxisExtent, mainAxisSpacing: mainAxisSpacing, crossAxisSpacing: crossAxisSpacing, childAspectRatio: childAspectRatio});
    this[childrenDelegate$0] = new sliver.SliverChildListDelegate.new(children, {addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes});
    scroll_view.GridView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, cacheExtent: cacheExtent, semanticChildCount: (t0 = semanticChildCount, t0 == null ? children[$length] : t0), dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.GridView.prototype;
  dart.addTypeTests(scroll_view.GridView);
  dart.addTypeCaches(scroll_view.GridView);
  dart.setMethodSignature(scroll_view.GridView, () => ({
    __proto__: dart.getMethods(scroll_view.GridView.__proto__),
    buildChildLayout: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(scroll_view.GridView, L1);
  dart.setFieldSignature(scroll_view.GridView, () => ({
    __proto__: dart.getFields(scroll_view.GridView.__proto__),
    gridDelegate: dart.finalFieldType(sliver_grid.SliverGridDelegate),
    childrenDelegate: dart.finalFieldType(sliver.SliverChildDelegate)
  }));
  dart.trackLibraries("packages/flutter/src/widgets/scroll_view.dart", {
    "package:flutter/src/widgets/scroll_view.dart": scroll_view
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scroll_view.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/scroll_view.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__scroll_view: scroll_view
  };
}));

//# sourceMappingURL=scroll_view.dart.lib.js.map
