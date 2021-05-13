define(['dart_sdk', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/rendering/proxy_box.dart', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/gestures/drag_details.dart', 'packages/flutter/src/gestures/velocity_tracker.dart', 'packages/flutter/src/animation/curves.dart'], (function load__packages__flutter__src__widgets__dismissible_dart(dart_sdk, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__rendering__proxy_box$46dart, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__gestures__drag_details$46dart, packages__flutter__src__gestures__velocity_tracker$46dart, packages__flutter__src__animation__curves$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const debug = packages__flutter__src__widgets__widget_span$46dart.src__widgets__debug;
  const transitions = packages__flutter__src__widgets__widget_span$46dart.src__widgets__transitions;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const gesture_detector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__gesture_detector;
  const ticker_provider = packages__flutter__src__widgets__widget_span$46dart.src__widgets__ticker_provider;
  const automatic_keep_alive = packages__flutter__src__widgets__widget_span$46dart.src__widgets__automatic_keep_alive;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const drag_details = packages__flutter__src__gestures__drag_details$46dart.src__gestures__drag_details;
  const velocity_tracker = packages__flutter__src__gestures__velocity_tracker$46dart.src__gestures__velocity_tracker;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  var dismissible = Object.create(dart.library);
  var $sign = dartx.sign;
  var $abs = dartx.abs;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var DismissDirectionL = () => (DismissDirectionL = dart.constFn(dart.legacy(dismissible.DismissDirection)))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  var _FlingGestureKindL = () => (_FlingGestureKindL = dart.constFn(dart.legacy(dismissible._FlingGestureKind)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var TweenOfOffset = () => (TweenOfOffset = dart.constFn(tween.Tween$(ui.Offset)))();
  var boolN = () => (boolN = dart.constFn(dart.nullable(core.bool)))();
  var AnimationStatusTovoid = () => (AnimationStatusTovoid = dart.constFn(dart.fnType(dart.void, [animation.AnimationStatus])))();
  var TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/dismissible.dart";
  var L1 = "package:flutter/src/widgets/dismissible.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: dismissible.DismissDirection.prototype,
        [_name$]: "DismissDirection.vertical",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: dismissible.DismissDirection.prototype,
        [_name$]: "DismissDirection.horizontal",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: dismissible.DismissDirection.prototype,
        [_name$]: "DismissDirection.endToStart",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: dismissible.DismissDirection.prototype,
        [_name$]: "DismissDirection.startToEnd",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: dismissible.DismissDirection.prototype,
        [_name$]: "DismissDirection.up",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: dismissible.DismissDirection.prototype,
        [_name$]: "DismissDirection.down",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: dismissible.DismissDirection.prototype,
        [_name$]: "DismissDirection.none",
        index: 6
      });
    },
    get C7() {
      return C7 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], DismissDirectionL());
    },
    get C8() {
      return C8 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    },
    get C9() {
      return C9 = dart.constMap(DismissDirectionL(), doubleL(), []);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name]: "DragStartBehavior.start",
        index: 1
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: proxy_box.HitTestBehavior.prototype,
        [_name$0]: "HitTestBehavior.opaque",
        index: 1
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name$1]: "Axis.horizontal",
        index: 0
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name$1]: "Axis.vertical",
        index: 1
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: dismissible._FlingGestureKind.prototype,
        [_name$]: "_FlingGestureKind.none",
        index: 0
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: dismissible._FlingGestureKind.prototype,
        [_name$]: "_FlingGestureKind.forward",
        index: 1
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: dismissible._FlingGestureKind.prototype,
        [_name$]: "_FlingGestureKind.reverse",
        index: 2
      });
    },
    get C18() {
      return C18 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17], _FlingGestureKindL());
    },
    get C19() {
      return C19 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name$2]: "TextDirection.rtl",
        index: 0
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name$2]: "TextDirection.ltr",
        index: 1
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 588,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 589,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 590,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24, C25 || CT.C25], _LocationL());
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 587,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/dismissible.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sizeFactor",
        [_Location_column]: 9,
        [_Location_line]: 585,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "axis",
        [_Location_column]: 9,
        [_Location_line]: 586,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 587,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29, C30 || CT.C30], _LocationL());
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 584,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/dismissible.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 7,
        [_Location_line]: 596,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 597,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34], _LocationL());
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 595,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/dismissible.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipper",
        [_Location_column]: 15,
        [_Location_line]: 605,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 609,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38], _LocationL());
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 604,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/dismissible.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 604,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41], _LocationL());
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 603,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/dismissible.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 601,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44], _LocationL());
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 601,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/dismissible.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHorizontalDragStart",
        [_Location_column]: 7,
        [_Location_line]: 617,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHorizontalDragUpdate",
        [_Location_column]: 7,
        [_Location_line]: 618,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHorizontalDragEnd",
        [_Location_column]: 7,
        [_Location_line]: 619,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalDragStart",
        [_Location_column]: 7,
        [_Location_line]: 620,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalDragUpdate",
        [_Location_column]: 7,
        [_Location_line]: 621,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalDragEnd",
        [_Location_column]: 7,
        [_Location_line]: 622,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behavior",
        [_Location_column]: 7,
        [_Location_line]: 623,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 624,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dragStartBehavior",
        [_Location_column]: 7,
        [_Location_line]: 625,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48, C49 || CT.C49, C50 || CT.C50, C51 || CT.C51, C52 || CT.C52, C53 || CT.C53, C54 || CT.C54, C55 || CT.C55], _LocationL());
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 616,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/dismissible.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.25,
        [Cubic_b]: 0.1,
        [Cubic_a]: 0.25
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C57 || CT.C57,
        [Interval_end]: 1,
        [Interval_begin]: 0.4
      });
    }
  }, false);
  var _name$ = dart.privateName(dismissible, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  dismissible.DismissDirection = class DismissDirection extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (dismissible.DismissDirection.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 34, 6, "index");
    if (_name == null) dart.nullFailed(L0, 34, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = dismissible.DismissDirection.prototype;
  dart.addTypeTests(dismissible.DismissDirection);
  dart.addTypeCaches(dismissible.DismissDirection);
  dart.setLibraryUri(dismissible.DismissDirection, L1);
  dart.setFieldSignature(dismissible.DismissDirection, () => ({
    __proto__: dart.getFields(dismissible.DismissDirection.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(dismissible.DismissDirection, ['toString']);
  dismissible.DismissDirection.vertical = C0 || CT.C0;
  dismissible.DismissDirection.horizontal = C1 || CT.C1;
  dismissible.DismissDirection.endToStart = C2 || CT.C2;
  dismissible.DismissDirection.startToEnd = C3 || CT.C3;
  dismissible.DismissDirection.up = C4 || CT.C4;
  dismissible.DismissDirection.down = C5 || CT.C5;
  dismissible.DismissDirection.none = C6 || CT.C6;
  dismissible.DismissDirection.values = C7 || CT.C7;
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C8;
  var C9;
  var C10;
  var _name = dart.privateName(recognizer, "_name");
  var C11;
  var _name$0 = dart.privateName(proxy_box, "_name");
  var C12;
  var child$ = dart.privateName(dismissible, "Dismissible.child");
  var background$ = dart.privateName(dismissible, "Dismissible.background");
  var secondaryBackground$ = dart.privateName(dismissible, "Dismissible.secondaryBackground");
  var confirmDismiss$ = dart.privateName(dismissible, "Dismissible.confirmDismiss");
  var onResize$ = dart.privateName(dismissible, "Dismissible.onResize");
  var onDismissed$ = dart.privateName(dismissible, "Dismissible.onDismissed");
  var direction$ = dart.privateName(dismissible, "Dismissible.direction");
  var resizeDuration$ = dart.privateName(dismissible, "Dismissible.resizeDuration");
  var dismissThresholds$ = dart.privateName(dismissible, "Dismissible.dismissThresholds");
  var movementDuration$ = dart.privateName(dismissible, "Dismissible.movementDuration");
  var crossAxisEndOffset$ = dart.privateName(dismissible, "Dismissible.crossAxisEndOffset");
  var dragStartBehavior$ = dart.privateName(dismissible, "Dismissible.dragStartBehavior");
  var behavior$ = dart.privateName(dismissible, "Dismissible.behavior");
  dismissible.Dismissible = class Dismissible extends framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get background() {
      return this[background$];
    }
    set background(value) {
      super.background = value;
    }
    get secondaryBackground() {
      return this[secondaryBackground$];
    }
    set secondaryBackground(value) {
      super.secondaryBackground = value;
    }
    get confirmDismiss() {
      return this[confirmDismiss$];
    }
    set confirmDismiss(value) {
      super.confirmDismiss = value;
    }
    get onResize() {
      return this[onResize$];
    }
    set onResize(value) {
      super.onResize = value;
    }
    get onDismissed() {
      return this[onDismissed$];
    }
    set onDismissed(value) {
      super.onDismissed = value;
    }
    get direction() {
      return this[direction$];
    }
    set direction(value) {
      super.direction = value;
    }
    get resizeDuration() {
      return this[resizeDuration$];
    }
    set resizeDuration(value) {
      super.resizeDuration = value;
    }
    get dismissThresholds() {
      return this[dismissThresholds$];
    }
    set dismissThresholds(value) {
      super.dismissThresholds = value;
    }
    get movementDuration() {
      return this[movementDuration$];
    }
    set movementDuration(value) {
      super.movementDuration = value;
    }
    get crossAxisEndOffset() {
      return this[crossAxisEndOffset$];
    }
    set crossAxisEndOffset(value) {
      super.crossAxisEndOffset = value;
    }
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      super.dragStartBehavior = value;
    }
    get behavior() {
      return this[behavior$];
    }
    set behavior(value) {
      super.behavior = value;
    }
    createState() {
      return new dismissible._DismissibleState.new();
    }
  };
  (dismissible.Dismissible.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    if (key == null) dart.nullFailed(L0, 123, 18, "key");
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L0, 124, 19, "child");
    let background = opts && 'background' in opts ? opts.background : null;
    let secondaryBackground = opts && 'secondaryBackground' in opts ? opts.secondaryBackground : null;
    let confirmDismiss = opts && 'confirmDismiss' in opts ? opts.confirmDismiss : null;
    let onResize = opts && 'onResize' in opts ? opts.onResize : null;
    let onDismissed = opts && 'onDismissed' in opts ? opts.onDismissed : null;
    let direction = opts && 'direction' in opts ? opts.direction : C1 || CT.C1;
    if (direction == null) dart.nullFailed(L0, 130, 10, "direction");
    let resizeDuration = opts && 'resizeDuration' in opts ? opts.resizeDuration : C8 || CT.C8;
    let dismissThresholds = opts && 'dismissThresholds' in opts ? opts.dismissThresholds : C9 || CT.C9;
    if (dismissThresholds == null) dart.nullFailed(L0, 132, 10, "dismissThresholds");
    let movementDuration = opts && 'movementDuration' in opts ? opts.movementDuration : C10 || CT.C10;
    if (movementDuration == null) dart.nullFailed(L0, 133, 10, "movementDuration");
    let crossAxisEndOffset = opts && 'crossAxisEndOffset' in opts ? opts.crossAxisEndOffset : 0;
    if (crossAxisEndOffset == null) dart.nullFailed(L0, 134, 10, "crossAxisEndOffset");
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C11 || CT.C11;
    if (dragStartBehavior == null) dart.nullFailed(L0, 135, 10, "dragStartBehavior");
    let behavior = opts && 'behavior' in opts ? opts.behavior : C12 || CT.C12;
    if (behavior == null) dart.nullFailed(L0, 136, 10, "behavior");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[background$] = background;
    this[secondaryBackground$] = secondaryBackground;
    this[confirmDismiss$] = confirmDismiss;
    this[onResize$] = onResize;
    this[onDismissed$] = onDismissed;
    this[direction$] = direction;
    this[resizeDuration$] = resizeDuration;
    this[dismissThresholds$] = dismissThresholds;
    this[movementDuration$] = movementDuration;
    this[crossAxisEndOffset$] = crossAxisEndOffset;
    this[dragStartBehavior$] = dragStartBehavior;
    this[behavior$] = behavior;
    if (!(key != null)) dart.assertFailed(null, L0, 137, 15, "key != null");
    if (!(secondaryBackground == null || background != null)) dart.assertFailed(null, L0, 138, 15, "secondaryBackground == null || background != null");
    if (!(dragStartBehavior != null)) dart.assertFailed(null, L0, 139, 15, "dragStartBehavior != null");
    dismissible.Dismissible.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dismissible.Dismissible.prototype;
  dart.addTypeTests(dismissible.Dismissible);
  dart.addTypeCaches(dismissible.Dismissible);
  dart.setMethodSignature(dismissible.Dismissible, () => ({
    __proto__: dart.getMethods(dismissible.Dismissible.__proto__),
    createState: dart.fnType(dismissible._DismissibleState, [])
  }));
  dart.setLibraryUri(dismissible.Dismissible, L1);
  dart.setFieldSignature(dismissible.Dismissible, () => ({
    __proto__: dart.getFields(dismissible.Dismissible.__proto__),
    child: dart.finalFieldType(framework.Widget),
    background: dart.finalFieldType(dart.nullable(framework.Widget)),
    secondaryBackground: dart.finalFieldType(dart.nullable(framework.Widget)),
    confirmDismiss: dart.finalFieldType(dart.nullable(dart.fnType(async.Future$(dart.nullable(core.bool)), [dismissible.DismissDirection]))),
    onResize: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onDismissed: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [dismissible.DismissDirection]))),
    direction: dart.finalFieldType(dismissible.DismissDirection),
    resizeDuration: dart.finalFieldType(dart.nullable(core.Duration)),
    dismissThresholds: dart.finalFieldType(core.Map$(dismissible.DismissDirection, core.double)),
    movementDuration: dart.finalFieldType(core.Duration),
    crossAxisEndOffset: dart.finalFieldType(core.double),
    dragStartBehavior: dart.finalFieldType(recognizer.DragStartBehavior),
    behavior: dart.finalFieldType(proxy_box.HitTestBehavior)
  }));
  var _name$1 = dart.privateName(basic_types, "_name");
  var C13;
  var C14;
  dismissible._DismissibleClipper = class _DismissibleClipper extends proxy_box.CustomClipper$(ui.Rect) {
    getClip(size) {
      if (size == null) dart.nullFailed(L0, 249, 21, "size");
      if (!(this.axis != null)) dart.assertFailed(null, L0, 250, 12, "axis != null");
      switch (this.axis) {
        case C13 || CT.C13:
        {
          let offset = dart.notNull(this.moveAnimation.value.dx) * dart.notNull(size.width);
          if (offset < 0) return new ui.Rect.fromLTRB(dart.notNull(size.width) + offset, 0.0, size.width, size.height);
          return new ui.Rect.fromLTRB(0.0, 0.0, offset, size.height);
        }
        case C14 || CT.C14:
        {
          let offset = dart.notNull(this.moveAnimation.value.dy) * dart.notNull(size.height);
          if (offset < 0) return new ui.Rect.fromLTRB(0.0, dart.notNull(size.height) + offset, size.width, size.height);
          return new ui.Rect.fromLTRB(0.0, 0.0, size.width, offset);
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    getApproximateClipRect(size) {
      if (size == null) dart.nullFailed(L0, 266, 36, "size");
      return this.getClip(size);
    }
    shouldReclip(oldClipper) {
      dismissible._DismissibleClipper.as(oldClipper);
      if (oldClipper == null) dart.nullFailed(L0, 269, 41, "oldClipper");
      return !dart.equals(oldClipper.axis, this.axis) || !dart.equals(oldClipper.moveAnimation.value, this.moveAnimation.value);
    }
  };
  (dismissible._DismissibleClipper.new = function(opts) {
    let axis = opts && 'axis' in opts ? opts.axis : null;
    if (axis == null) dart.nullFailed(L0, 239, 19, "axis");
    let moveAnimation = opts && 'moveAnimation' in opts ? opts.moveAnimation : null;
    if (moveAnimation == null) dart.nullFailed(L0, 240, 19, "moveAnimation");
    this.axis = axis;
    this.moveAnimation = moveAnimation;
    if (!(axis != null)) dart.assertFailed(null, L0, 241, 15, "axis != null");
    if (!(moveAnimation != null)) dart.assertFailed(null, L0, 242, 15, "moveAnimation != null");
    dismissible._DismissibleClipper.__proto__.new.call(this, {reclip: moveAnimation});
    ;
  }).prototype = dismissible._DismissibleClipper.prototype;
  dart.addTypeTests(dismissible._DismissibleClipper);
  dart.addTypeCaches(dismissible._DismissibleClipper);
  dart.setMethodSignature(dismissible._DismissibleClipper, () => ({
    __proto__: dart.getMethods(dismissible._DismissibleClipper.__proto__),
    getClip: dart.fnType(ui.Rect, [ui.Size]),
    shouldReclip: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(dismissible._DismissibleClipper, L1);
  dart.setFieldSignature(dismissible._DismissibleClipper, () => ({
    __proto__: dart.getFields(dismissible._DismissibleClipper.__proto__),
    axis: dart.finalFieldType(basic_types.Axis),
    moveAnimation: dart.finalFieldType(animation.Animation$(ui.Offset))
  }));
  var C15;
  var C16;
  var C17;
  var C18;
  dismissible._FlingGestureKind = class _FlingGestureKind extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (dismissible._FlingGestureKind.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 275, 6, "index");
    if (_name == null) dart.nullFailed(L0, 275, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = dismissible._FlingGestureKind.prototype;
  dart.addTypeTests(dismissible._FlingGestureKind);
  dart.addTypeCaches(dismissible._FlingGestureKind);
  dart.setLibraryUri(dismissible._FlingGestureKind, L1);
  dart.setFieldSignature(dismissible._FlingGestureKind, () => ({
    __proto__: dart.getFields(dismissible._FlingGestureKind.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(dismissible._FlingGestureKind, ['toString']);
  dismissible._FlingGestureKind.none = C15 || CT.C15;
  dismissible._FlingGestureKind.forward = C16 || CT.C16;
  dismissible._FlingGestureKind.reverse = C17 || CT.C17;
  dismissible._FlingGestureKind.values = C18 || CT.C18;
  var _moveController = dart.privateName(dismissible, "_moveController");
  var ___DismissibleState__moveAnimation = dart.privateName(dismissible, "_#_DismissibleState#_moveAnimation");
  var ___DismissibleState__moveAnimation_isSet = dart.privateName(dismissible, "_#_DismissibleState#_moveAnimation#isSet");
  var _resizeController = dart.privateName(dismissible, "_resizeController");
  var _resizeAnimation = dart.privateName(dismissible, "_resizeAnimation");
  var _dragExtent = dart.privateName(dismissible, "_dragExtent");
  var _dragUnderway = dart.privateName(dismissible, "_dragUnderway");
  var _sizePriorToCollapse = dart.privateName(dismissible, "_sizePriorToCollapse");
  var _handleDismissStatusChanged = dart.privateName(dismissible, "_handleDismissStatusChanged");
  var _updateMoveAnimation = dart.privateName(dismissible, "_updateMoveAnimation");
  var _moveAnimation = dart.privateName(dismissible, "_moveAnimation");
  var _directionIsXAxis = dart.privateName(dismissible, "_directionIsXAxis");
  var _name$2 = dart.privateName(ui, "_name");
  var C19;
  var C20;
  var _extentToDirection = dart.privateName(dismissible, "_extentToDirection");
  var _dismissDirection = dart.privateName(dismissible, "_dismissDirection");
  var _isActive = dart.privateName(dismissible, "_isActive");
  var _overallDragAxisExtent = dart.privateName(dismissible, "_overallDragAxisExtent");
  var _handleDragStart = dart.privateName(dismissible, "_handleDragStart");
  var _handleDragUpdate = dart.privateName(dismissible, "_handleDragUpdate");
  var _describeFlingGesture = dart.privateName(dismissible, "_describeFlingGesture");
  var _confirmStartResizeAnimation = dart.privateName(dismissible, "_confirmStartResizeAnimation");
  var _startResizeAnimation = dart.privateName(dismissible, "_startResizeAnimation");
  var _handleDragEnd = dart.privateName(dismissible, "_handleDragEnd");
  var _handleResizeProgressChanged = dart.privateName(dismissible, "_handleResizeProgressChanged");
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C23;
  var C24;
  var C25;
  var C22;
  var C21;
  var C28;
  var C29;
  var C30;
  var C27;
  var C26;
  var C33;
  var C34;
  var C32;
  var C31;
  var C37;
  var C38;
  var C36;
  var C35;
  var C41;
  var C40;
  var C39;
  var C44;
  var C43;
  var C42;
  var C47;
  var C48;
  var C49;
  var C50;
  var C51;
  var C52;
  var C53;
  var C54;
  var C55;
  var C46;
  var C45;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(dismissible.Dismissible) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(dismissible.Dismissible)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(dismissible.Dismissible));
  const State_AutomaticKeepAliveClientMixin$36 = class State_AutomaticKeepAliveClientMixin extends State_TickerProviderStateMixin$36 {};
  (State_AutomaticKeepAliveClientMixin$36.new = function() {
    automatic_keep_alive.AutomaticKeepAliveClientMixin$(dismissible.Dismissible)[dart.mixinNew].call(this);
    State_AutomaticKeepAliveClientMixin$36.__proto__.new.call(this);
  }).prototype = State_AutomaticKeepAliveClientMixin$36.prototype;
  dart.applyMixin(State_AutomaticKeepAliveClientMixin$36, automatic_keep_alive.AutomaticKeepAliveClientMixin$(dismissible.Dismissible));
  dismissible._DismissibleState = class _DismissibleState extends State_AutomaticKeepAliveClientMixin$36 {
    initState() {
      let t0;
      super.initState();
      this[_moveController] = (t0 = new animation_controller.AnimationController.new({duration: this.widget.movementDuration, vsync: this}), (() => {
        t0.addStatusListener(dart.bind(this, _handleDismissStatusChanged));
        return t0;
      })());
      this[_updateMoveAnimation]();
    }
    get [_moveAnimation]() {
      let t0;
      return dart.test(this[___DismissibleState__moveAnimation_isSet]) ? (t0 = this[___DismissibleState__moveAnimation], t0) : dart.throw(new _internal.LateError.fieldNI("_moveAnimation"));
    }
    set [_moveAnimation](t0) {
      if (t0 == null) dart.nullFailed(L0, 287, 26, "null");
      this[___DismissibleState__moveAnimation_isSet] = true;
      this[___DismissibleState__moveAnimation] = t0;
    }
    get wantKeepAlive() {
      let t1, t1$;
      return dart.equals((t1 = this[_moveController], t1 == null ? null : t1.isAnimating), true) || dart.equals((t1$ = this[_resizeController], t1$ == null ? null : t1$.isAnimating), true);
    }
    dispose() {
      let t1;
      dart.nullCheck(this[_moveController]).dispose();
      t1 = this[_resizeController];
      t1 == null ? null : t1.dispose();
      super.dispose();
    }
    get [_directionIsXAxis]() {
      return dart.equals(this.widget.direction, dismissible.DismissDirection.horizontal) || dart.equals(this.widget.direction, dismissible.DismissDirection.endToStart) || dart.equals(this.widget.direction, dismissible.DismissDirection.startToEnd);
    }
    [_extentToDirection](extent) {
      if (extent == null) dart.nullFailed(L0, 312, 46, "extent");
      if (extent === 0.0) return dismissible.DismissDirection.none;
      if (dart.test(this[_directionIsXAxis])) {
        switch (basic.Directionality.of(this.context)) {
          case C19 || CT.C19:
          {
            return dart.notNull(extent) < 0 ? dismissible.DismissDirection.startToEnd : dismissible.DismissDirection.endToStart;
          }
          case C20 || CT.C20:
          {
            return dart.notNull(extent) > 0 ? dismissible.DismissDirection.startToEnd : dismissible.DismissDirection.endToStart;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      return dart.notNull(extent) > 0 ? dismissible.DismissDirection.down : dismissible.DismissDirection.up;
    }
    get [_dismissDirection]() {
      return this[_extentToDirection](this[_dragExtent]);
    }
    get [_isActive]() {
      return dart.test(this[_dragUnderway]) || dart.test(dart.nullCheck(this[_moveController]).isAnimating);
    }
    get [_overallDragAxisExtent]() {
      let size = dart.nullCheck(this.context.size);
      return dart.test(this[_directionIsXAxis]) ? size.width : size.height;
    }
    [_handleDragStart](details) {
      if (details == null) dart.nullFailed(L0, 337, 42, "details");
      this[_dragUnderway] = true;
      if (dart.test(dart.nullCheck(this[_moveController]).isAnimating)) {
        this[_dragExtent] = dart.notNull(dart.nullCheck(this[_moveController]).value) * dart.notNull(this[_overallDragAxisExtent]) * this[_dragExtent][$sign];
        dart.nullCheck(this[_moveController]).stop();
      } else {
        this[_dragExtent] = 0.0;
        dart.nullCheck(this[_moveController]).value = 0.0;
      }
      this.setState(dart.fn(() => {
        this[_updateMoveAnimation]();
      }, VoidTovoid()));
    }
    [_handleDragUpdate](details) {
      if (details == null) dart.nullFailed(L0, 351, 44, "details");
      if (!dart.test(this[_isActive]) || dart.test(dart.nullCheck(this[_moveController]).isAnimating)) return;
      let delta = dart.nullCheck(details.primaryDelta);
      let oldDragExtent = this[_dragExtent];
      switch (this.widget.direction) {
        case C1 || CT.C1:
        case C0 || CT.C0:
        {
          this[_dragExtent] = dart.notNull(this[_dragExtent]) + delta;
          break;
        }
        case C4 || CT.C4:
        {
          if (dart.notNull(this[_dragExtent]) + delta < 0) this[_dragExtent] = dart.notNull(this[_dragExtent]) + delta;
          break;
        }
        case C5 || CT.C5:
        {
          if (dart.notNull(this[_dragExtent]) + delta > 0) this[_dragExtent] = dart.notNull(this[_dragExtent]) + delta;
          break;
        }
        case C2 || CT.C2:
        {
          switch (basic.Directionality.of(this.context)) {
            case C19 || CT.C19:
            {
              if (dart.notNull(this[_dragExtent]) + delta > 0) this[_dragExtent] = dart.notNull(this[_dragExtent]) + delta;
              break;
            }
            case C20 || CT.C20:
            {
              if (dart.notNull(this[_dragExtent]) + delta < 0) this[_dragExtent] = dart.notNull(this[_dragExtent]) + delta;
              break;
            }
            default:
            {
              dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
            }
          }
          break;
        }
        case C3 || CT.C3:
        {
          switch (basic.Directionality.of(this.context)) {
            case C19 || CT.C19:
            {
              if (dart.notNull(this[_dragExtent]) + delta < 0) this[_dragExtent] = dart.notNull(this[_dragExtent]) + delta;
              break;
            }
            case C20 || CT.C20:
            {
              if (dart.notNull(this[_dragExtent]) + delta > 0) this[_dragExtent] = dart.notNull(this[_dragExtent]) + delta;
              break;
            }
            default:
            {
              dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
            }
          }
          break;
        }
        case C6 || CT.C6:
        {
          this[_dragExtent] = 0.0;
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      if (oldDragExtent[$sign] !== this[_dragExtent][$sign]) {
        this.setState(dart.fn(() => {
          this[_updateMoveAnimation]();
        }, VoidTovoid()));
      }
      if (!dart.test(dart.nullCheck(this[_moveController]).isAnimating)) {
        dart.nullCheck(this[_moveController]).value = this[_dragExtent][$abs]() / dart.notNull(this[_overallDragAxisExtent]);
      }
    }
    [_updateMoveAnimation]() {
      let end = this[_dragExtent][$sign];
      this[_moveAnimation] = dart.nullCheck(this[_moveController]).drive(ui.Offset, new (TweenOfOffset()).new({begin: ui.Offset.zero, end: dart.test(this[_directionIsXAxis]) ? new ui.Offset.new(end, this.widget.crossAxisEndOffset) : new ui.Offset.new(this.widget.crossAxisEndOffset, end)}));
    }
    [_describeFlingGesture](velocity) {
      if (velocity == null) dart.nullFailed(L0, 425, 52, "velocity");
      if (!(this.widget.direction != null)) dart.assertFailed(null, L0, 426, 12, "widget.direction != null");
      if (this[_dragExtent] === 0.0) {
        return dismissible._FlingGestureKind.none;
      }
      let vx = velocity.pixelsPerSecond.dx;
      let vy = velocity.pixelsPerSecond.dy;
      let flingDirection = null;
      if (dart.test(this[_directionIsXAxis])) {
        if (vx[$abs]() - vy[$abs]() < 400 || vx[$abs]() < 700) return dismissible._FlingGestureKind.none;
        if (!(vx !== 0.0)) dart.assertFailed(null, L0, 442, 14, "vx != 0.0");
        flingDirection = this[_extentToDirection](vx);
      } else {
        if (vy[$abs]() - vx[$abs]() < 400 || vy[$abs]() < 700) return dismissible._FlingGestureKind.none;
        if (!(vy !== 0.0)) dart.assertFailed(null, L0, 447, 14, "vy != 0.0");
        flingDirection = this[_extentToDirection](vy);
      }
      if (!(this[_dismissDirection] != null)) dart.assertFailed(null, L0, 450, 12, "_dismissDirection != null");
      if (dart.equals(flingDirection, this[_dismissDirection])) return dismissible._FlingGestureKind.forward;
      return dismissible._FlingGestureKind.reverse;
    }
    [_handleDragEnd](details) {
      if (details == null) dart.nullFailed(L0, 456, 46, "details");
      return async.async(dart.void, (function* _handleDragEnd() {
        let t1, t1$;
        if (!dart.test(this[_isActive]) || dart.test(dart.nullCheck(this[_moveController]).isAnimating)) return;
        this[_dragUnderway] = false;
        if (dart.test(dart.nullCheck(this[_moveController]).isCompleted) && dart.equals(yield this[_confirmStartResizeAnimation](), true)) {
          this[_startResizeAnimation]();
          return;
        }
        let flingVelocity = dart.test(this[_directionIsXAxis]) ? details.velocity.pixelsPerSecond.dx : details.velocity.pixelsPerSecond.dy;
        switch (this[_describeFlingGesture](details.velocity)) {
          case C16 || CT.C16:
          {
            if (!(this[_dragExtent] !== 0.0)) dart.assertFailed(null, L0, 467, 16, "_dragExtent != 0.0");
            if (!!dart.test(dart.nullCheck(this[_moveController]).isDismissed)) dart.assertFailed(null, L0, 468, 16, "!_moveController!.isDismissed");
            if (dart.notNull((t1 = this.widget.dismissThresholds[$_get](this[_dismissDirection]), t1 == null ? 0.4 : t1)) >= 1.0) {
              dart.nullCheck(this[_moveController]).reverse();
              break;
            }
            this[_dragExtent] = flingVelocity[$sign];
            dart.nullCheck(this[_moveController]).fling({velocity: flingVelocity[$abs]() * 0.0033333333333333335});
            break;
          }
          case C17 || CT.C17:
          {
            if (!(this[_dragExtent] !== 0.0)) dart.assertFailed(null, L0, 477, 16, "_dragExtent != 0.0");
            if (!!dart.test(dart.nullCheck(this[_moveController]).isDismissed)) dart.assertFailed(null, L0, 478, 16, "!_moveController!.isDismissed");
            this[_dragExtent] = flingVelocity[$sign];
            dart.nullCheck(this[_moveController]).fling({velocity: -flingVelocity[$abs]() * 0.0033333333333333335});
            break;
          }
          case C15 || CT.C15:
          {
            if (!dart.test(dart.nullCheck(this[_moveController]).isDismissed)) {
              if (dart.notNull(dart.nullCheck(this[_moveController]).value) > dart.notNull((t1$ = this.widget.dismissThresholds[$_get](this[_dismissDirection]), t1$ == null ? 0.4 : t1$))) {
                dart.nullCheck(this[_moveController]).forward();
              } else {
                dart.nullCheck(this[_moveController]).reverse();
              }
            }
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }).bind(this));
    }
    [_handleDismissStatusChanged](status) {
      if (status == null) dart.nullFailed(L0, 494, 60, "status");
      return async.async(dart.void, (function* _handleDismissStatusChanged() {
        if (dart.equals(status, animation.AnimationStatus.completed) && !dart.test(this[_dragUnderway])) {
          if (dart.equals(yield this[_confirmStartResizeAnimation](), true))
            this[_startResizeAnimation]();
          else
            dart.nullCheck(this[_moveController]).reverse();
        }
        this.updateKeepAlive();
      }).bind(this));
    }
    [_confirmStartResizeAnimation]() {
      return async.async(boolN(), (function* _confirmStartResizeAnimation() {
        if (this.widget.confirmDismiss != null) {
          let direction = this[_dismissDirection];
          return dart.nullCheck(this.widget.confirmDismiss)(direction);
        }
        return true;
      }).bind(this));
    }
    [_startResizeAnimation]() {
      let t1;
      if (!(this[_moveController] != null)) dart.assertFailed(null, L0, 513, 12, "_moveController != null");
      if (!dart.test(dart.nullCheck(this[_moveController]).isCompleted)) dart.assertFailed(null, L0, 514, 12, "_moveController!.isCompleted");
      if (!(this[_resizeController] == null)) dart.assertFailed(null, L0, 515, 12, "_resizeController == null");
      if (!(this[_sizePriorToCollapse] == null)) dart.assertFailed(null, L0, 516, 12, "_sizePriorToCollapse == null");
      if (this.widget.resizeDuration == null) {
        if (this.widget.onDismissed != null) {
          let direction = this[_dismissDirection];
          dart.nullCheck(this.widget.onDismissed)(direction);
        }
      } else {
        this[_resizeController] = (t1 = new animation_controller.AnimationController.new({duration: this.widget.resizeDuration, vsync: this}), (() => {
          t1.addListener(dart.bind(this, _handleResizeProgressChanged));
          t1.addStatusListener(dart.fn(status => {
            if (status == null) dart.nullFailed(L0, 525, 46, "status");
            return this.updateKeepAlive();
          }, AnimationStatusTovoid()));
          return t1;
        })());
        dart.nullCheck(this[_resizeController]).forward();
        this.setState(dart.fn(() => {
          this[_sizePriorToCollapse] = this.context.size;
          this[_resizeAnimation] = dart.nullCheck(this[_resizeController]).drive(core.double, new tween.CurveTween.new({curve: dismissible._kResizeTimeCurve})).drive(core.double, new (TweenOfdouble()).new({begin: 1.0, end: 0.0}));
        }, VoidTovoid()));
      }
    }
    [_handleResizeProgressChanged]() {
      if (dart.test(dart.nullCheck(this[_resizeController]).isCompleted)) {
        if (this.widget.onDismissed != null) {
          let direction = this[_dismissDirection];
          dart.nullCheck(this.widget.onDismissed)(direction);
        }
      } else {
        if (this.widget.onResize != null) dart.nullCheck(this.widget.onResize)();
      }
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 556, 29, "context");
      super.build(context);
      if (!(!dart.test(this[_directionIsXAxis]) || dart.test(debug.debugCheckHasDirectionality(context)))) dart.assertFailed(null, L0, 559, 12, "!_directionIsXAxis || debugCheckHasDirectionality(context)");
      let background = this.widget.background;
      if (this.widget.secondaryBackground != null) {
        let direction = this[_dismissDirection];
        if (dart.equals(direction, dismissible.DismissDirection.endToStart) || dart.equals(direction, dismissible.DismissDirection.up)) background = this.widget.secondaryBackground;
      }
      if (this[_resizeAnimation] != null) {
        if (!dart.test(dart.fn(() => {
          if (!dart.equals(dart.nullCheck(this[_resizeAnimation]).status, animation.AnimationStatus.forward)) {
            if (!dart.equals(dart.nullCheck(this[_resizeAnimation]).status, animation.AnimationStatus.completed)) dart.assertFailed(null, L0, 572, 18, "_resizeAnimation!.status == AnimationStatus.completed");
            dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A dismissed Dismissible widget is still part of the tree."), new assertions.ErrorHint.new("Make sure to implement the onDismissed handler and to immediately remove the Dismissible " + "widget from the application once that handler has fired.")])));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 570, 14, "() {\n        if (_resizeAnimation!.status != AnimationStatus.forward) {\n          assert(_resizeAnimation!.status == AnimationStatus.completed);\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('A dismissed Dismissible widget is still part of the tree.'),\n            ErrorHint(\n              'Make sure to implement the onDismissed handler and to immediately remove the Dismissible '\n              'widget from the application once that handler has fired.'\n            )\n          ]);\n        }\n        return true;\n      }()");
        return new transitions.SizeTransition.new({sizeFactor: dart.nullCheck(this[_resizeAnimation]), axis: dart.test(this[_directionIsXAxis]) ? basic_types.Axis.vertical : basic_types.Axis.horizontal, child: new basic.SizedBox.new({width: dart.nullCheck(this[_sizePriorToCollapse]).width, height: dart.nullCheck(this[_sizePriorToCollapse]).height, child: background, $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C26 || CT.C26});
      }
      let content = new transitions.SlideTransition.new({position: this[_moveAnimation], child: this.widget.child, $creationLocationd_0dea112b090073317d4: C31 || CT.C31});
      if (background != null) {
        content = new basic.Stack.new({children: (() => {
            let t1 = JSArrayOfWidget().of([]);
            if (!dart.test(this[_moveAnimation].isDismissed)) t1.push(new basic.Positioned.fill({child: new basic.ClipRect.new({clipper: new dismissible._DismissibleClipper.new({axis: dart.test(this[_directionIsXAxis]) ? basic_types.Axis.horizontal : basic_types.Axis.vertical, moveAnimation: this[_moveAnimation]}), child: background, $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}));
            t1.push(content);
            return t1;
          })(), $creationLocationd_0dea112b090073317d4: C42 || CT.C42});
      }
      return new gesture_detector.GestureDetector.new({onHorizontalDragStart: dart.test(this[_directionIsXAxis]) ? dart.bind(this, _handleDragStart) : null, onHorizontalDragUpdate: dart.test(this[_directionIsXAxis]) ? dart.bind(this, _handleDragUpdate) : null, onHorizontalDragEnd: dart.test(this[_directionIsXAxis]) ? dart.bind(this, _handleDragEnd) : null, onVerticalDragStart: dart.test(this[_directionIsXAxis]) ? null : dart.bind(this, _handleDragStart), onVerticalDragUpdate: dart.test(this[_directionIsXAxis]) ? null : dart.bind(this, _handleDragUpdate), onVerticalDragEnd: dart.test(this[_directionIsXAxis]) ? null : dart.bind(this, _handleDragEnd), behavior: this.widget.behavior, child: content, dragStartBehavior: this.widget.dragStartBehavior, $creationLocationd_0dea112b090073317d4: C45 || CT.C45});
    }
  };
  (dismissible._DismissibleState.new = function() {
    this[_moveController] = null;
    this[___DismissibleState__moveAnimation] = null;
    this[___DismissibleState__moveAnimation_isSet] = false;
    this[_resizeController] = null;
    this[_resizeAnimation] = null;
    this[_dragExtent] = 0.0;
    this[_dragUnderway] = false;
    this[_sizePriorToCollapse] = null;
    dismissible._DismissibleState.__proto__.new.call(this);
    ;
  }).prototype = dismissible._DismissibleState.prototype;
  dart.addTypeTests(dismissible._DismissibleState);
  dart.addTypeCaches(dismissible._DismissibleState);
  dart.setMethodSignature(dismissible._DismissibleState, () => ({
    __proto__: dart.getMethods(dismissible._DismissibleState.__proto__),
    [_extentToDirection]: dart.fnType(dismissible.DismissDirection, [core.double]),
    [_handleDragStart]: dart.fnType(dart.void, [drag_details.DragStartDetails]),
    [_handleDragUpdate]: dart.fnType(dart.void, [drag_details.DragUpdateDetails]),
    [_updateMoveAnimation]: dart.fnType(dart.void, []),
    [_describeFlingGesture]: dart.fnType(dismissible._FlingGestureKind, [velocity_tracker.Velocity]),
    [_handleDragEnd]: dart.fnType(async.Future$(dart.void), [drag_details.DragEndDetails]),
    [_handleDismissStatusChanged]: dart.fnType(async.Future$(dart.void), [animation.AnimationStatus]),
    [_confirmStartResizeAnimation]: dart.fnType(async.Future$(dart.nullable(core.bool)), []),
    [_startResizeAnimation]: dart.fnType(dart.void, []),
    [_handleResizeProgressChanged]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(dismissible._DismissibleState, () => ({
    __proto__: dart.getGetters(dismissible._DismissibleState.__proto__),
    [_moveAnimation]: animation.Animation$(ui.Offset),
    wantKeepAlive: core.bool,
    [_directionIsXAxis]: core.bool,
    [_dismissDirection]: dismissible.DismissDirection,
    [_isActive]: core.bool,
    [_overallDragAxisExtent]: core.double
  }));
  dart.setSetterSignature(dismissible._DismissibleState, () => ({
    __proto__: dart.getSetters(dismissible._DismissibleState.__proto__),
    [_moveAnimation]: animation.Animation$(ui.Offset)
  }));
  dart.setLibraryUri(dismissible._DismissibleState, L1);
  dart.setFieldSignature(dismissible._DismissibleState, () => ({
    __proto__: dart.getFields(dismissible._DismissibleState.__proto__),
    [_moveController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___DismissibleState__moveAnimation]: dart.fieldType(dart.nullable(animation.Animation$(ui.Offset))),
    [___DismissibleState__moveAnimation_isSet]: dart.fieldType(core.bool),
    [_resizeController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [_resizeAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [_dragExtent]: dart.fieldType(core.double),
    [_dragUnderway]: dart.fieldType(core.bool),
    [_sizePriorToCollapse]: dart.fieldType(dart.nullable(ui.Size))
  }));
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  var C57;
  var Interval_curve = dart.privateName(curves, "Interval.curve");
  var Interval_end = dart.privateName(curves, "Interval.end");
  var Interval_begin = dart.privateName(curves, "Interval.begin");
  var C56;
  dart.defineLazy(dismissible, {
    /*dismissible._kResizeTimeCurve*/get _kResizeTimeCurve() {
      return C56 || CT.C56;
    },
    /*dismissible._kMinFlingVelocity*/get _kMinFlingVelocity() {
      return 700;
    },
    /*dismissible._kMinFlingVelocityDelta*/get _kMinFlingVelocityDelta() {
      return 400;
    },
    /*dismissible._kFlingVelocityScale*/get _kFlingVelocityScale() {
      return 0.0033333333333333335;
    },
    /*dismissible._kDismissThreshold*/get _kDismissThreshold() {
      return 0.4;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/widgets/dismissible.dart", {
    "package:flutter/src/widgets/dismissible.dart": dismissible
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dismissible.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/dismissible.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__dismissible: dismissible
  };
}));

//# sourceMappingURL=dismissible.dart.lib.js.map
