define(['dart_sdk', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/painting/decoration.dart', 'packages/flutter/src/gestures/monodrag.dart', 'packages/flutter/src/rendering/stack.dart', 'packages/flutter/src/rendering/proxy_box.dart', 'packages/flutter/src/gestures/drag_details.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/painting/gradient.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/flutter/src/cupertino/interface_level.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/cupertino/text_theme.dart', 'packages/flutter/src/cupertino/debug.dart', 'packages/flutter/src/widgets/implicit_animations.dart'], (function load__packages__flutter__src__cupertino__route_dart(dart_sdk, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__painting__decoration$46dart, packages__flutter__src__gestures__monodrag$46dart, packages__flutter__src__rendering__stack$46dart, packages__flutter__src__rendering__proxy_box$46dart, packages__flutter__src__gestures__drag_details$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__painting__gradient$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__flutter__src__cupertino__interface_level$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__cupertino__text_theme$46dart, packages__flutter__src__cupertino__debug$46dart, packages__flutter__src__widgets__implicit_animations$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const animation$ = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const animations = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animations;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const pages = packages__flutter__src__widgets__widget_span$46dart.src__widgets__pages;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const navigator = packages__flutter__src__widgets__widget_span$46dart.src__widgets__navigator;
  const debug = packages__flutter__src__widgets__widget_span$46dart.src__widgets__debug;
  const transitions = packages__flutter__src__widgets__widget_span$46dart.src__widgets__transitions;
  const media_query = packages__flutter__src__widgets__widget_span$46dart.src__widgets__media_query;
  const routes = packages__flutter__src__widgets__widget_span$46dart.src__widgets__routes;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const decoration = packages__flutter__src__painting__decoration$46dart.src__painting__decoration;
  const monodrag = packages__flutter__src__gestures__monodrag$46dart.src__gestures__monodrag;
  const stack = packages__flutter__src__rendering__stack$46dart.src__rendering__stack;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  const drag_details = packages__flutter__src__gestures__drag_details$46dart.src__gestures__drag_details;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const gradient = packages__flutter__src__painting__gradient$46dart.src__painting__gradient;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  const interface_level = packages__flutter__src__cupertino__interface_level$46dart.src__cupertino__interface_level;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const colors = packages__flutter__src__cupertino__text_theme$46dart.src__cupertino__colors;
  const localizations = packages__flutter__src__cupertino__debug$46dart.src__cupertino__localizations;
  const implicit_animations = packages__flutter__src__widgets__implicit_animations$46dart.src__widgets__implicit_animations;
  var route$ = Object.create(dart.library);
  var $abs = dartx.abs;
  var $floor = dartx.floor;
  var $runtimeType = dartx.runtimeType;
  var $hashCode = dartx.hashCode;
  dart._checkModuleNullSafetyMode(false);
  var StringN = () => (StringN = dart.constFn(dart.nullable(core.String)))();
  var ValueNotifierOfStringN = () => (ValueNotifierOfStringN = dart.constFn(change_notifier.ValueNotifier$(StringN())))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var ObjectN = () => (ObjectN = dart.constFn(dart.nullable(core.Object)))();
  var AnimationStatusTovoid = () => (AnimationStatusTovoid = dart.constFn(dart.fnType(dart.void, [animation$.AnimationStatus])))();
  var VoidToFn = () => (VoidToFn = dart.constFn(dart.fnType(AnimationStatusTovoid(), [])))();
  var FnTodynamic = () => (FnTodynamic = dart.constFn(dart.fnType(dart.dynamic, [AnimationStatusTovoid()])))();
  var DiagnosticsPropertyOfLinearGradient = () => (DiagnosticsPropertyOfLinearGradient = dart.constFn(diagnostics.DiagnosticsProperty$(gradient.LinearGradient)))();
  var TweenOfOffset = () => (TweenOfOffset = dart.constFn(tween.Tween$(ui.Offset)))();
  var AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation$.Animation$(core.double)))();
  var BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = () => (BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, AnimationOfdouble(), AnimationOfdouble()])))();
  var BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget = () => (BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, AnimationOfdouble(), AnimationOfdouble(), framework.Widget])))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  var ColorL = () => (ColorL = dart.constFn(dart.legacy(ui.Color)))();
  var TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/cupertino/route.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/route.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 400000
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scopesRoute",
        [_Location_column]: 7,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "explicitChildNodes",
        [_Location_column]: 7,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], _LocationL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 229,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "primaryRouteAnimation",
        [_Location_column]: 9,
        [_Location_line]: 290,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "secondaryRouteAnimation",
        [_Location_column]: 9,
        [_Location_line]: 291,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "linearTransition",
        [_Location_column]: 9,
        [_Location_line]: 293,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], _LocationL());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 289,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enabledCallback",
        [_Location_column]: 11,
        [_Location_line]: 301,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onStartPopGesture",
        [_Location_column]: 11,
        [_Location_line]: 302,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 303,
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
        [_Location_line]: 300,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "primaryRouteAnimation",
        [_Location_column]: 9,
        [_Location_line]: 297,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "secondaryRouteAnimation",
        [_Location_column]: 9,
        [_Location_line]: 298,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "linearTransition",
        [_Location_column]: 9,
        [_Location_line]: 299,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 300,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22], _LocationL());
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 296,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 526,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 527,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26], _LocationL());
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 525,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 9,
        [_Location_line]: 523,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textDirection",
        [_Location_column]: 9,
        [_Location_line]: 524,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 525,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30, C31 || CT.C31], _LocationL());
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 522,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 7,
        [_Location_line]: 519,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textDirection",
        [_Location_column]: 7,
        [_Location_line]: 520,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transformHitTests",
        [_Location_column]: 7,
        [_Location_line]: 521,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 522,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35, C36 || CT.C36, C37 || CT.C37], _LocationL());
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 518,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 9,
        [_Location_line]: 587,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 588,
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
        [_Location_line]: 586,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 7,
        [_Location_line]: 583,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textDirection",
        [_Location_column]: 7,
        [_Location_line]: 584,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transformHitTests",
        [_Location_column]: 7,
        [_Location_line]: 585,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 586,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45, C46 || CT.C46, C47 || CT.C47], _LocationL());
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 582,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.rtl",
        index: 0
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.ltr",
        index: 1
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPointerDown",
        [_Location_column]: 13,
        [_Location_line]: 707,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behavior",
        [_Location_column]: 13,
        [_Location_line]: 708,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52, C53 || CT.C53], _LocationL());
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 706,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "start",
        [_Location_column]: 11,
        [_Location_line]: 702,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 703,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 11,
        [_Location_line]: 704,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 11,
        [_Location_line]: 705,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 706,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57, C58 || CT.C58, C59 || CT.C59, C60 || CT.C60], _LocationL());
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 701,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 7,
        [_Location_line]: 698,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 699,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64], _LocationL());
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 697,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.04,
        [Cubic_b]: 1,
        [Cubic_a]: 0.18
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: route$._CupertinoEdgeShadowDecoration.prototype,
        [edgeGradient$]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 1,
        [OffsetBase__dx]: 0
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 22,
        [_Location_line]: 995,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71], _LocationL());
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 995,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 7,
        [_Location_line]: 994,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 995,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75], _LocationL());
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 993,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "translation",
        [_Location_column]: 9,
        [_Location_line]: 1004,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 1005,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79], _LocationL());
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 1003,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 1002,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 1003,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83], _LocationL());
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 1001,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2046820352
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 855638016
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: colors.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C85 || CT.C85,
        [CupertinoDynamicColor_highContrastElevatedColor]: C86 || CT.C86,
        [CupertinoDynamicColor_darkElevatedColor]: C85 || CT.C85,
        [CupertinoDynamicColor_elevatedColor]: C86 || CT.C86,
        [CupertinoDynamicColor_darkHighContrastColor]: C85 || CT.C85,
        [CupertinoDynamicColor_highContrastColor]: C86 || CT.C86,
        [CupertinoDynamicColor_darkColor]: C85 || CT.C85,
        [CupertinoDynamicColor_color]: C86 || CT.C86,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: null,
        [CupertinoDynamicColor__effectiveColor]: C86 || CT.C86
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 7,
        [_Location_line]: 1089,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 1090,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89, C90 || CT.C90], _LocationL());
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 1088,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 1096,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 7,
        [_Location_line]: 1097,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93, C94 || CT.C94], _LocationL());
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 1095,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 5,
        [_Location_line]: 1094,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 5,
        [_Location_line]: 1095,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98], _LocationL());
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 10,
        [_Location_line]: 1093,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 250000
      });
    },
    get C100() {
      return C100 = dart.fn(route$._buildCupertinoDialogTransitions, BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget());
    },
    get C101() {
      return C101 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 335000
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 1
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: -0.3333333333333333
      });
    },
    get C106() {
      return C106 = dart.constList([0, 0.3, 0.6, 1], doubleL());
    },
    get C108() {
      return C108 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 67108864
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 301989888
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 939524096
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108, C109 || CT.C109, C110 || CT.C110, C111 || CT.C111], ColorL());
    },
    get C112() {
      return C112 = dart.const({
        __proto__: ui.TileMode.prototype,
        [_name]: "TileMode.clamp",
        index: 0
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: alignment.AlignmentDirectional.prototype,
        [AlignmentDirectional_y]: 0,
        [AlignmentDirectional_start]: 1
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: alignment.AlignmentDirectional.prototype,
        [AlignmentDirectional_y]: 0,
        [AlignmentDirectional_start]: 0.9
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: gradient.LinearGradient.prototype,
        [Gradient_transform]: null,
        [Gradient_stops]: C106 || CT.C106,
        [Gradient_colors]: C107 || CT.C107,
        [LinearGradient_tileMode]: C112 || CT.C112,
        [LinearGradient_end]: C113 || CT.C113,
        [LinearGradient_begin]: C114 || CT.C114
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: route$._CupertinoEdgeShadowDecoration.prototype,
        [edgeGradient$]: C105 || CT.C105
      });
    }
  }, false);
  var _previousTitle = dart.privateName(route$, "_previousTitle");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C3;
  var C4;
  var C5;
  var C2;
  var C1;
  var C8;
  var C9;
  var C10;
  var C11;
  var C7;
  var C6;
  var C14;
  var C15;
  var C16;
  var C13;
  var C12;
  var C19;
  var C20;
  var C21;
  var C22;
  var C18;
  var C17;
  const _is_CupertinoRouteTransitionMixin_default = Symbol('_is_CupertinoRouteTransitionMixin_default');
  route$.CupertinoRouteTransitionMixin$ = dart.generic(T => {
    class CupertinoRouteTransitionMixin extends pages.PageRoute$(T) {
      static isPopGestureInProgress(route) {
        if (route == null) dart.nullFailed(L0, 169, 57, "route");
        return dart.nullCheck(route.navigator).userGestureInProgress;
      }
      static _isPopGestureEnabled(T, route) {
        if (route == null) dart.nullFailed(L0, 194, 52, "route");
        if (dart.test(route.isFirst)) return false;
        if (dart.test(route.willHandlePopInternally)) return false;
        if (dart.test(route.hasScopedWillPopCallback)) return false;
        if (dart.test(route.fullscreenDialog)) return false;
        if (!dart.equals(dart.nullCheck(route.animation).status, animation$.AnimationStatus.completed)) return false;
        if (!dart.equals(dart.nullCheck(route.secondaryAnimation).status, animation$.AnimationStatus.dismissed)) return false;
        if (dart.test(route$.CupertinoRouteTransitionMixin.isPopGestureInProgress(route))) return false;
        return true;
      }
      static _startPopGesture(T, route) {
        if (route == null) dart.nullFailed(L0, 252, 78, "route");
        if (!dart.test(route$.CupertinoRouteTransitionMixin._isPopGestureEnabled(T, route))) dart.assertFailed(null, L0, 253, 12, "_isPopGestureEnabled(route)");
        return new (route$._CupertinoBackGestureController$(T)).new({navigator: dart.nullCheck(route.navigator), controller: dart.nullCheck(route.controller)});
      }
      static buildPageTransitions(T, route, context, animation, secondaryAnimation, child) {
        if (route == null) dart.nullFailed(L0, 276, 18, "route");
        if (context == null) dart.nullFailed(L0, 277, 18, "context");
        if (animation == null) dart.nullFailed(L0, 278, 23, "animation");
        if (secondaryAnimation == null) dart.nullFailed(L0, 279, 23, "secondaryAnimation");
        if (child == null) dart.nullFailed(L0, 280, 12, "child");
        let linearTransition = route$.CupertinoRouteTransitionMixin.isPopGestureInProgress(route);
        if (dart.test(route.fullscreenDialog)) {
          return new route$.CupertinoFullscreenDialogTransition.new({primaryRouteAnimation: animation, secondaryRouteAnimation: secondaryAnimation, child: child, linearTransition: linearTransition, $creationLocationd_0dea112b090073317d4: C6 || CT.C6});
        } else {
          return new route$.CupertinoPageTransition.new({primaryRouteAnimation: animation, secondaryRouteAnimation: secondaryAnimation, linearTransition: linearTransition, child: new (route$._CupertinoBackGestureDetector$(T)).new({enabledCallback: dart.fn(() => route$.CupertinoRouteTransitionMixin._isPopGestureEnabled(T, route), VoidTobool()), onStartPopGesture: dart.fn(() => route$.CupertinoRouteTransitionMixin._startPopGesture(T, route), dart.fnType(route$._CupertinoBackGestureController$(T), [])), child: child, $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17});
        }
      }
    }
    CupertinoRouteTransitionMixin[dart.mixinOn] = PageRoute => class CupertinoRouteTransitionMixin extends PageRoute {
      get previousTitle() {
        if (!(this[_previousTitle] != null)) dart.assertFailed("Cannot read the previousTitle for a route that has not yet been installed", L0, 126, 7, "_previousTitle != null");
        return dart.nullCheck(this[_previousTitle]);
      }
      didChangePrevious(previousRoute) {
        let previousTitleString = route$.CupertinoRouteTransitionMixin.is(previousRoute) ? previousRoute.title : null;
        if (this[_previousTitle] == null) {
          this[_previousTitle] = new (ValueNotifierOfStringN()).new(previousTitleString);
        } else {
          dart.nullCheck(this[_previousTitle]).value = previousTitleString;
        }
        super.didChangePrevious(previousRoute);
      }
      get transitionDuration() {
        return C0 || CT.C0;
      }
      get barrierColor() {
        return null;
      }
      get barrierLabel() {
        return null;
      }
      canTransitionTo(nextRoute) {
        if (nextRoute == null) dart.nullFailed(L0, 156, 49, "nextRoute");
        return route$.CupertinoRouteTransitionMixin.is(nextRoute) && !dart.test(nextRoute.fullscreenDialog);
      }
      get popGestureInProgress() {
        return route$.CupertinoRouteTransitionMixin.isPopGestureInProgress(this);
      }
      get popGestureEnabled() {
        return route$.CupertinoRouteTransitionMixin._isPopGestureEnabled(T, this);
      }
      buildPage(context, animation, secondaryAnimation) {
        if (context == null) dart.nullFailed(L0, 227, 33, "context");
        if (animation == null) dart.nullFailed(L0, 227, 60, "animation");
        if (secondaryAnimation == null) dart.nullFailed(L0, 227, 89, "secondaryAnimation");
        let child = this.buildContent(context);
        let result = new basic.Semantics.new({scopesRoute: true, explicitChildNodes: true, child: child, $creationLocationd_0dea112b090073317d4: C1 || CT.C1});
        if (!dart.test(dart.fn(() => {
          if (child == null) {
            dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The builder for route \"" + dart.str(this.settings.name) + "\" returned null."), new assertions.ErrorDescription.new("Route builders must never return null.")])));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 234, 12, "() {\n      // `child` has a non-nullable return type, but might be null when\n      // running with weak checking, so we need to null check it anyway (and\n      // ignore the warning that the null-handling logic is dead code).\n      if (child == null) { // ignore: dead_code\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The builder for route \"${settings.name}\" returned null.'),\n          ErrorDescription('Route builders must never return null.'),\n        ]);\n      }\n      return true;\n    }()");
        return result;
      }
      buildTransitions(context, animation, secondaryAnimation, child) {
        if (context == null) dart.nullFailed(L0, 310, 40, "context");
        if (animation == null) dart.nullFailed(L0, 310, 67, "animation");
        if (secondaryAnimation == null) dart.nullFailed(L0, 310, 96, "secondaryAnimation");
        if (child == null) dart.nullFailed(L0, 310, 123, "child");
        return route$.CupertinoRouteTransitionMixin.buildPageTransitions(T, this, context, animation, secondaryAnimation, child);
      }
    };
    (CupertinoRouteTransitionMixin[dart.mixinNew] = function() {
      this[_previousTitle] = null;
    }).prototype = CupertinoRouteTransitionMixin.prototype;
    dart.addTypeTests(CupertinoRouteTransitionMixin);
    CupertinoRouteTransitionMixin.prototype[_is_CupertinoRouteTransitionMixin_default] = true;
    dart.addTypeCaches(CupertinoRouteTransitionMixin);
    CupertinoRouteTransitionMixin[dart.implements] = () => [pages.PageRoute$(T)];
    dart.setMethodSignature(CupertinoRouteTransitionMixin, () => ({
      __proto__: dart.getMethods(CupertinoRouteTransitionMixin.__proto__),
      buildPage: dart.fnType(framework.Widget, [framework.BuildContext, animation$.Animation$(core.double), animation$.Animation$(core.double)])
    }));
    dart.setGetterSignature(CupertinoRouteTransitionMixin, () => ({
      __proto__: dart.getGetters(CupertinoRouteTransitionMixin.__proto__),
      previousTitle: change_notifier.ValueListenable$(dart.nullable(core.String)),
      transitionDuration: core.Duration,
      barrierColor: dart.nullable(ui.Color),
      barrierLabel: dart.nullable(core.String),
      popGestureInProgress: core.bool,
      popGestureEnabled: core.bool
    }));
    dart.setLibraryUri(CupertinoRouteTransitionMixin, L1);
    dart.setFieldSignature(CupertinoRouteTransitionMixin, () => ({
      __proto__: dart.getFields(CupertinoRouteTransitionMixin.__proto__),
      [_previousTitle]: dart.fieldType(dart.nullable(change_notifier.ValueNotifier$(dart.nullable(core.String))))
    }));
    return CupertinoRouteTransitionMixin;
  });
  route$.CupertinoRouteTransitionMixin = route$.CupertinoRouteTransitionMixin$();
  dart.addTypeTests(route$.CupertinoRouteTransitionMixin, _is_CupertinoRouteTransitionMixin_default);
  const _is_CupertinoPageRoute_default = Symbol('_is_CupertinoPageRoute_default');
  var builder$ = dart.privateName(route$, "CupertinoPageRoute.builder");
  var title$ = dart.privateName(route$, "CupertinoPageRoute.title");
  var maintainState$ = dart.privateName(route$, "CupertinoPageRoute.maintainState");
  route$.CupertinoPageRoute$ = dart.generic(T => {
    const PageRoute_CupertinoRouteTransitionMixin$36 = class PageRoute_CupertinoRouteTransitionMixin extends pages.PageRoute$(T) {};
    (PageRoute_CupertinoRouteTransitionMixin$36.new = function(opts) {
      route$.CupertinoRouteTransitionMixin$(T)[dart.mixinNew].call(this);
      PageRoute_CupertinoRouteTransitionMixin$36.__proto__.new.call(this, opts);
    }).prototype = PageRoute_CupertinoRouteTransitionMixin$36.prototype;
    dart.applyMixin(PageRoute_CupertinoRouteTransitionMixin$36, route$.CupertinoRouteTransitionMixin$(T));
    class CupertinoPageRoute extends PageRoute_CupertinoRouteTransitionMixin$36 {
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
      get maintainState() {
        return this[maintainState$];
      }
      set maintainState(value) {
        super.maintainState = value;
      }
      buildContent(context) {
        let t0;
        if (context == null) dart.nullFailed(L0, 360, 36, "context");
        t0 = context;
        return this.builder(t0);
      }
      get debugLabel() {
        return dart.str(super.debugLabel) + "(" + dart.str(this.settings.name) + ")";
      }
    }
    (CupertinoPageRoute.new = function(opts) {
      let builder = opts && 'builder' in opts ? opts.builder : null;
      if (builder == null) dart.nullFailed(L0, 344, 19, "builder");
      let title = opts && 'title' in opts ? opts.title : null;
      let settings = opts && 'settings' in opts ? opts.settings : null;
      let maintainState = opts && 'maintainState' in opts ? opts.maintainState : true;
      if (maintainState == null) dart.nullFailed(L0, 347, 10, "maintainState");
      let fullscreenDialog = opts && 'fullscreenDialog' in opts ? opts.fullscreenDialog : false;
      if (fullscreenDialog == null) dart.nullFailed(L0, 348, 10, "fullscreenDialog");
      this[builder$] = builder;
      this[title$] = title;
      this[maintainState$] = maintainState;
      if (!(builder != null)) dart.assertFailed(null, L0, 349, 15, "builder != null");
      if (!(maintainState != null)) dart.assertFailed(null, L0, 350, 15, "maintainState != null");
      if (!(fullscreenDialog != null)) dart.assertFailed(null, L0, 351, 15, "fullscreenDialog != null");
      CupertinoPageRoute.__proto__.new.call(this, {settings: settings, fullscreenDialog: fullscreenDialog});
      if (!dart.test(this.opaque)) dart.assertFailed(null, L0, 353, 12, "opaque");
    }).prototype = CupertinoPageRoute.prototype;
    dart.addTypeTests(CupertinoPageRoute);
    CupertinoPageRoute.prototype[_is_CupertinoPageRoute_default] = true;
    dart.addTypeCaches(CupertinoPageRoute);
    dart.setMethodSignature(CupertinoPageRoute, () => ({
      __proto__: dart.getMethods(CupertinoPageRoute.__proto__),
      buildContent: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(CupertinoPageRoute, L1);
    dart.setFieldSignature(CupertinoPageRoute, () => ({
      __proto__: dart.getFields(CupertinoPageRoute.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext])),
      title: dart.finalFieldType(dart.nullable(core.String)),
      maintainState: dart.finalFieldType(core.bool)
    }));
    return CupertinoPageRoute;
  });
  route$.CupertinoPageRoute = route$.CupertinoPageRoute$();
  dart.addTypeTests(route$.CupertinoPageRoute, _is_CupertinoPageRoute_default);
  var _page = dart.privateName(route$, "_page");
  const _is__PageBasedCupertinoPageRoute_default = Symbol('_is__PageBasedCupertinoPageRoute_default');
  route$._PageBasedCupertinoPageRoute$ = dart.generic(T => {
    var CupertinoPageOfT = () => (CupertinoPageOfT = dart.constFn(route$.CupertinoPage$(T)))();
    const PageRoute_CupertinoRouteTransitionMixin$36 = class PageRoute_CupertinoRouteTransitionMixin extends pages.PageRoute$(T) {};
    (PageRoute_CupertinoRouteTransitionMixin$36.new = function(opts) {
      route$.CupertinoRouteTransitionMixin$(T)[dart.mixinNew].call(this);
      PageRoute_CupertinoRouteTransitionMixin$36.__proto__.new.call(this, opts);
    }).prototype = PageRoute_CupertinoRouteTransitionMixin$36.prototype;
    dart.applyMixin(PageRoute_CupertinoRouteTransitionMixin$36, route$.CupertinoRouteTransitionMixin$(T));
    class _PageBasedCupertinoPageRoute extends PageRoute_CupertinoRouteTransitionMixin$36 {
      get [_page]() {
        return CupertinoPageOfT().as(this.settings);
      }
      buildContent(context) {
        if (context == null) dart.nullFailed(L0, 387, 36, "context");
        return this[_page].child;
      }
      get title() {
        return this[_page].title;
      }
      get maintainState() {
        return this[_page].maintainState;
      }
      get fullscreenDialog() {
        return this[_page].fullscreenDialog;
      }
      get debugLabel() {
        return dart.str(super.debugLabel) + "(" + dart.str(this[_page].name) + ")";
      }
    }
    (_PageBasedCupertinoPageRoute.new = function(opts) {
      let page = opts && 'page' in opts ? opts.page : null;
      if (page == null) dart.nullFailed(L0, 378, 31, "page");
      if (!(page != null)) dart.assertFailed(null, L0, 379, 15, "page != null");
      _PageBasedCupertinoPageRoute.__proto__.new.call(this, {settings: page});
      if (!dart.test(this.opaque)) dart.assertFailed(null, L0, 381, 12, "opaque");
    }).prototype = _PageBasedCupertinoPageRoute.prototype;
    dart.addTypeTests(_PageBasedCupertinoPageRoute);
    _PageBasedCupertinoPageRoute.prototype[_is__PageBasedCupertinoPageRoute_default] = true;
    dart.addTypeCaches(_PageBasedCupertinoPageRoute);
    dart.setMethodSignature(_PageBasedCupertinoPageRoute, () => ({
      __proto__: dart.getMethods(_PageBasedCupertinoPageRoute.__proto__),
      buildContent: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setGetterSignature(_PageBasedCupertinoPageRoute, () => ({
      __proto__: dart.getGetters(_PageBasedCupertinoPageRoute.__proto__),
      [_page]: route$.CupertinoPage$(T),
      title: dart.nullable(core.String),
      maintainState: core.bool,
      fullscreenDialog: core.bool
    }));
    dart.setLibraryUri(_PageBasedCupertinoPageRoute, L1);
    return _PageBasedCupertinoPageRoute;
  });
  route$._PageBasedCupertinoPageRoute = route$._PageBasedCupertinoPageRoute$();
  dart.addTypeTests(route$._PageBasedCupertinoPageRoute, _is__PageBasedCupertinoPageRoute_default);
  const _is_CupertinoPage_default = Symbol('_is_CupertinoPage_default');
  var child$ = dart.privateName(route$, "CupertinoPage.child");
  var title$0 = dart.privateName(route$, "CupertinoPage.title");
  var maintainState$0 = dart.privateName(route$, "CupertinoPage.maintainState");
  var fullscreenDialog$ = dart.privateName(route$, "CupertinoPage.fullscreenDialog");
  route$.CupertinoPage$ = dart.generic(T => {
    var _PageBasedCupertinoPageRouteOfT = () => (_PageBasedCupertinoPageRouteOfT = dart.constFn(route$._PageBasedCupertinoPageRoute$(T)))();
    class CupertinoPage extends navigator.Page$(T) {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get title() {
        return this[title$0];
      }
      set title(value) {
        super.title = value;
      }
      get maintainState() {
        return this[maintainState$0];
      }
      set maintainState(value) {
        super.maintainState = value;
      }
      get fullscreenDialog() {
        return this[fullscreenDialog$];
      }
      set fullscreenDialog(value) {
        super.fullscreenDialog = value;
      }
      createRoute(context) {
        if (context == null) dart.nullFailed(L0, 446, 37, "context");
        return new (_PageBasedCupertinoPageRouteOfT()).new({page: this});
      }
    }
    (CupertinoPage.new = function(opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      if (child == null) dart.nullFailed(L0, 421, 19, "child");
      let maintainState = opts && 'maintainState' in opts ? opts.maintainState : true;
      if (maintainState == null) dart.nullFailed(L0, 422, 10, "maintainState");
      let title = opts && 'title' in opts ? opts.title : null;
      let fullscreenDialog = opts && 'fullscreenDialog' in opts ? opts.fullscreenDialog : false;
      if (fullscreenDialog == null) dart.nullFailed(L0, 424, 10, "fullscreenDialog");
      let key = opts && 'key' in opts ? opts.key : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let $arguments = opts && 'arguments' in opts ? opts.arguments : null;
      this[child$] = child;
      this[maintainState$0] = maintainState;
      this[title$0] = title;
      this[fullscreenDialog$] = fullscreenDialog;
      if (!(child != null)) dart.assertFailed(null, L0, 428, 15, "child != null");
      if (!(maintainState != null)) dart.assertFailed(null, L0, 429, 15, "maintainState != null");
      if (!(fullscreenDialog != null)) dart.assertFailed(null, L0, 430, 15, "fullscreenDialog != null");
      CupertinoPage.__proto__.new.call(this, {key: key, name: name, arguments: $arguments});
      ;
    }).prototype = CupertinoPage.prototype;
    dart.addTypeTests(CupertinoPage);
    CupertinoPage.prototype[_is_CupertinoPage_default] = true;
    dart.addTypeCaches(CupertinoPage);
    dart.setMethodSignature(CupertinoPage, () => ({
      __proto__: dart.getMethods(CupertinoPage.__proto__),
      createRoute: dart.fnType(navigator.Route$(T), [framework.BuildContext])
    }));
    dart.setLibraryUri(CupertinoPage, L1);
    dart.setFieldSignature(CupertinoPage, () => ({
      __proto__: dart.getFields(CupertinoPage.__proto__),
      child: dart.finalFieldType(framework.Widget),
      title: dart.finalFieldType(dart.nullable(core.String)),
      maintainState: dart.finalFieldType(core.bool),
      fullscreenDialog: dart.finalFieldType(core.bool)
    }));
    return CupertinoPage;
  });
  route$.CupertinoPage = route$.CupertinoPage$();
  dart.addTypeTests(route$.CupertinoPage, _is_CupertinoPage_default);
  var _primaryPositionAnimation = dart.privateName(route$, "_primaryPositionAnimation");
  var _secondaryPositionAnimation = dart.privateName(route$, "_secondaryPositionAnimation");
  var _primaryShadowAnimation = dart.privateName(route$, "_primaryShadowAnimation");
  var C25;
  var C26;
  var C24;
  var C23;
  var C29;
  var C30;
  var C31;
  var C28;
  var C27;
  var C34;
  var C35;
  var C36;
  var C37;
  var C33;
  var C32;
  var child$0 = dart.privateName(route$, "CupertinoPageTransition.child");
  route$.CupertinoPageTransition = class CupertinoPageTransition extends framework.StatelessWidget {
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 515, 29, "context");
      if (!dart.test(debug.debugCheckHasDirectionality(context))) dart.assertFailed(null, L0, 516, 12, "debugCheckHasDirectionality(context)");
      let textDirection = basic.Directionality.of(context);
      return new transitions.SlideTransition.new({position: this[_secondaryPositionAnimation], textDirection: textDirection, transformHitTests: false, child: new transitions.SlideTransition.new({position: this[_primaryPositionAnimation], textDirection: textDirection, child: new transitions.DecoratedBoxTransition.new({decoration: this[_primaryShadowAnimation], child: this.child, $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32});
    }
  };
  (route$.CupertinoPageTransition.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let primaryRouteAnimation = opts && 'primaryRouteAnimation' in opts ? opts.primaryRouteAnimation : null;
    if (primaryRouteAnimation == null) dart.nullFailed(L0, 466, 32, "primaryRouteAnimation");
    let secondaryRouteAnimation = opts && 'secondaryRouteAnimation' in opts ? opts.secondaryRouteAnimation : null;
    if (secondaryRouteAnimation == null) dart.nullFailed(L0, 467, 32, "secondaryRouteAnimation");
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L0, 468, 19, "child");
    let linearTransition = opts && 'linearTransition' in opts ? opts.linearTransition : null;
    if (linearTransition == null) dart.nullFailed(L0, 469, 19, "linearTransition");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$0] = child;
    if (!(linearTransition != null)) dart.assertFailed(null, L0, 470, 15, "linearTransition != null");
    this[_primaryPositionAnimation] = (dart.test(linearTransition) ? primaryRouteAnimation : new animations.CurvedAnimation.new({parent: primaryRouteAnimation, curve: curves.Curves.linearToEaseOut, reverseCurve: curves.Curves.easeInToLinear})).drive(ui.Offset, route$._kRightMiddleTween);
    this[_secondaryPositionAnimation] = (dart.test(linearTransition) ? secondaryRouteAnimation : new animations.CurvedAnimation.new({parent: secondaryRouteAnimation, curve: curves.Curves.linearToEaseOut, reverseCurve: curves.Curves.easeInToLinear})).drive(ui.Offset, route$._kMiddleLeftTween);
    this[_primaryShadowAnimation] = (dart.test(linearTransition) ? primaryRouteAnimation : new animations.CurvedAnimation.new({parent: primaryRouteAnimation, curve: curves.Curves.linearToEaseOut})).drive(decoration.Decoration, route$._kGradientShadowTween);
    route$.CupertinoPageTransition.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = route$.CupertinoPageTransition.prototype;
  dart.addTypeTests(route$.CupertinoPageTransition);
  dart.addTypeCaches(route$.CupertinoPageTransition);
  dart.setMethodSignature(route$.CupertinoPageTransition, () => ({
    __proto__: dart.getMethods(route$.CupertinoPageTransition.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(route$.CupertinoPageTransition, L1);
  dart.setFieldSignature(route$.CupertinoPageTransition, () => ({
    __proto__: dart.getFields(route$.CupertinoPageTransition.__proto__),
    [_primaryPositionAnimation]: dart.finalFieldType(animation$.Animation$(ui.Offset)),
    [_secondaryPositionAnimation]: dart.finalFieldType(animation$.Animation$(ui.Offset)),
    [_primaryShadowAnimation]: dart.finalFieldType(animation$.Animation$(decoration.Decoration)),
    child: dart.finalFieldType(framework.Widget)
  }));
  var _positionAnimation = dart.privateName(route$, "_positionAnimation");
  var C40;
  var C41;
  var C39;
  var C38;
  var C44;
  var C45;
  var C46;
  var C47;
  var C43;
  var C42;
  var child$1 = dart.privateName(route$, "CupertinoFullscreenDialogTransition.child");
  route$.CupertinoFullscreenDialogTransition = class CupertinoFullscreenDialogTransition extends framework.StatelessWidget {
    get child() {
      return this[child$1];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 579, 29, "context");
      if (!dart.test(debug.debugCheckHasDirectionality(context))) dart.assertFailed(null, L0, 580, 12, "debugCheckHasDirectionality(context)");
      let textDirection = basic.Directionality.of(context);
      return new transitions.SlideTransition.new({position: this[_secondaryPositionAnimation], textDirection: textDirection, transformHitTests: false, child: new transitions.SlideTransition.new({position: this[_positionAnimation], child: this.child, $creationLocationd_0dea112b090073317d4: C38 || CT.C38}), $creationLocationd_0dea112b090073317d4: C42 || CT.C42});
    }
  };
  (route$.CupertinoFullscreenDialogTransition.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let primaryRouteAnimation = opts && 'primaryRouteAnimation' in opts ? opts.primaryRouteAnimation : null;
    if (primaryRouteAnimation == null) dart.nullFailed(L0, 549, 32, "primaryRouteAnimation");
    let secondaryRouteAnimation = opts && 'secondaryRouteAnimation' in opts ? opts.secondaryRouteAnimation : null;
    if (secondaryRouteAnimation == null) dart.nullFailed(L0, 550, 32, "secondaryRouteAnimation");
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L0, 551, 19, "child");
    let linearTransition = opts && 'linearTransition' in opts ? opts.linearTransition : null;
    if (linearTransition == null) dart.nullFailed(L0, 552, 19, "linearTransition");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$1] = child;
    this[_positionAnimation] = new animations.CurvedAnimation.new({parent: primaryRouteAnimation, curve: curves.Curves.linearToEaseOut, reverseCurve: curves.Curves.linearToEaseOut.flipped}).drive(ui.Offset, route$._kBottomUpTween);
    this[_secondaryPositionAnimation] = (dart.test(linearTransition) ? secondaryRouteAnimation : new animations.CurvedAnimation.new({parent: secondaryRouteAnimation, curve: curves.Curves.linearToEaseOut, reverseCurve: curves.Curves.easeInToLinear})).drive(ui.Offset, route$._kMiddleLeftTween);
    route$.CupertinoFullscreenDialogTransition.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = route$.CupertinoFullscreenDialogTransition.prototype;
  dart.addTypeTests(route$.CupertinoFullscreenDialogTransition);
  dart.addTypeCaches(route$.CupertinoFullscreenDialogTransition);
  dart.setMethodSignature(route$.CupertinoFullscreenDialogTransition, () => ({
    __proto__: dart.getMethods(route$.CupertinoFullscreenDialogTransition.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(route$.CupertinoFullscreenDialogTransition, L1);
  dart.setFieldSignature(route$.CupertinoFullscreenDialogTransition, () => ({
    __proto__: dart.getFields(route$.CupertinoFullscreenDialogTransition.__proto__),
    [_positionAnimation]: dart.finalFieldType(animation$.Animation$(ui.Offset)),
    [_secondaryPositionAnimation]: dart.finalFieldType(animation$.Animation$(ui.Offset)),
    child: dart.finalFieldType(framework.Widget)
  }));
  const _is__CupertinoBackGestureDetector_default = Symbol('_is__CupertinoBackGestureDetector_default');
  var child$2 = dart.privateName(route$, "_CupertinoBackGestureDetector.child");
  var enabledCallback$ = dart.privateName(route$, "_CupertinoBackGestureDetector.enabledCallback");
  var onStartPopGesture$ = dart.privateName(route$, "_CupertinoBackGestureDetector.onStartPopGesture");
  route$._CupertinoBackGestureDetector$ = dart.generic(T => {
    var _CupertinoBackGestureDetectorStateOfT = () => (_CupertinoBackGestureDetectorStateOfT = dart.constFn(route$._CupertinoBackGestureDetectorState$(T)))();
    class _CupertinoBackGestureDetector extends framework.StatefulWidget {
      get child() {
        return this[child$2];
      }
      set child(value) {
        super.child = value;
      }
      get enabledCallback() {
        return this[enabledCallback$];
      }
      set enabledCallback(value) {
        super.enabledCallback = value;
      }
      get onStartPopGesture() {
        return this[onStartPopGesture$];
      }
      set onStartPopGesture(value) {
        super.onStartPopGesture = value;
      }
      createState() {
        return new (_CupertinoBackGestureDetectorStateOfT()).new();
      }
    }
    (_CupertinoBackGestureDetector.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let enabledCallback = opts && 'enabledCallback' in opts ? opts.enabledCallback : null;
      if (enabledCallback == null) dart.nullFailed(L0, 608, 19, "enabledCallback");
      let onStartPopGesture = opts && 'onStartPopGesture' in opts ? opts.onStartPopGesture : null;
      if (onStartPopGesture == null) dart.nullFailed(L0, 609, 19, "onStartPopGesture");
      let child = opts && 'child' in opts ? opts.child : null;
      if (child == null) dart.nullFailed(L0, 610, 19, "child");
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[enabledCallback$] = enabledCallback;
      this[onStartPopGesture$] = onStartPopGesture;
      this[child$2] = child;
      if (!(enabledCallback != null)) dart.assertFailed(null, L0, 611, 15, "enabledCallback != null");
      if (!(onStartPopGesture != null)) dart.assertFailed(null, L0, 612, 15, "onStartPopGesture != null");
      if (!(child != null)) dart.assertFailed(null, L0, 613, 15, "child != null");
      _CupertinoBackGestureDetector.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = _CupertinoBackGestureDetector.prototype;
    dart.addTypeTests(_CupertinoBackGestureDetector);
    _CupertinoBackGestureDetector.prototype[_is__CupertinoBackGestureDetector_default] = true;
    dart.addTypeCaches(_CupertinoBackGestureDetector);
    dart.setMethodSignature(_CupertinoBackGestureDetector, () => ({
      __proto__: dart.getMethods(_CupertinoBackGestureDetector.__proto__),
      createState: dart.fnType(route$._CupertinoBackGestureDetectorState$(T), [])
    }));
    dart.setLibraryUri(_CupertinoBackGestureDetector, L1);
    dart.setFieldSignature(_CupertinoBackGestureDetector, () => ({
      __proto__: dart.getFields(_CupertinoBackGestureDetector.__proto__),
      child: dart.finalFieldType(framework.Widget),
      enabledCallback: dart.finalFieldType(dart.fnType(core.bool, [])),
      onStartPopGesture: dart.finalFieldType(dart.fnType(route$._CupertinoBackGestureController$(T), []))
    }));
    return _CupertinoBackGestureDetector;
  });
  route$._CupertinoBackGestureDetector = route$._CupertinoBackGestureDetector$();
  dart.addTypeTests(route$._CupertinoBackGestureDetector, _is__CupertinoBackGestureDetector_default);
  var _backGestureController = dart.privateName(route$, "_backGestureController");
  var ___CupertinoBackGestureDetectorState__recognizer = dart.privateName(route$, "_#_CupertinoBackGestureDetectorState#_recognizer");
  var ___CupertinoBackGestureDetectorState__recognizer_isSet = dart.privateName(route$, "_#_CupertinoBackGestureDetectorState#_recognizer#isSet");
  var _recognizer = dart.privateName(route$, "_recognizer");
  var _handleDragStart = dart.privateName(route$, "_handleDragStart");
  var _handleDragUpdate = dart.privateName(route$, "_handleDragUpdate");
  var _handleDragEnd = dart.privateName(route$, "_handleDragEnd");
  var _handleDragCancel = dart.privateName(route$, "_handleDragCancel");
  var _convertToLogical = dart.privateName(route$, "_convertToLogical");
  var _handlePointerDown = dart.privateName(route$, "_handlePointerDown");
  var _name = dart.privateName(ui, "_name");
  var C48;
  var C49;
  var C52;
  var C53;
  var C51;
  var C50;
  var C56;
  var C57;
  var C58;
  var C59;
  var C60;
  var C55;
  var C54;
  var C63;
  var C64;
  var C62;
  var C61;
  const _is__CupertinoBackGestureDetectorState_default = Symbol('_is__CupertinoBackGestureDetectorState_default');
  route$._CupertinoBackGestureDetectorState$ = dart.generic(T => {
    class _CupertinoBackGestureDetectorState extends framework.State$(route$._CupertinoBackGestureDetector$(T)) {
      get [_recognizer]() {
        let t0;
        return dart.test(this[___CupertinoBackGestureDetectorState__recognizer_isSet]) ? (t0 = this[___CupertinoBackGestureDetectorState__recognizer], t0) : dart.throw(new _internal.LateError.fieldNI("_recognizer"));
      }
      set [_recognizer](t0) {
        if (t0 == null) dart.nullFailed(L0, 629, 40, "null");
        this[___CupertinoBackGestureDetectorState__recognizer_isSet] = true;
        this[___CupertinoBackGestureDetectorState__recognizer] = t0;
      }
      initState() {
        let t1;
        super.initState();
        this[_recognizer] = (t1 = new monodrag.HorizontalDragGestureRecognizer.new({debugOwner: this}), (() => {
          t1.onStart = dart.bind(this, _handleDragStart);
          t1.onUpdate = dart.bind(this, _handleDragUpdate);
          t1.onEnd = dart.bind(this, _handleDragEnd);
          t1.onCancel = dart.bind(this, _handleDragCancel);
          return t1;
        })());
      }
      dispose() {
        this[_recognizer].dispose();
        super.dispose();
      }
      [_handleDragStart](details) {
        if (details == null) dart.nullFailed(L0, 647, 42, "details");
        if (!dart.test(this.mounted)) dart.assertFailed(null, L0, 648, 12, "mounted");
        if (!(this[_backGestureController] == null)) dart.assertFailed(null, L0, 649, 12, "_backGestureController == null");
        this[_backGestureController] = this.widget.onStartPopGesture();
      }
      [_handleDragUpdate](details) {
        if (details == null) dart.nullFailed(L0, 653, 44, "details");
        if (!dart.test(this.mounted)) dart.assertFailed(null, L0, 654, 12, "mounted");
        if (!(this[_backGestureController] != null)) dart.assertFailed(null, L0, 655, 12, "_backGestureController != null");
        dart.nullCheck(this[_backGestureController]).dragUpdate(this[_convertToLogical](dart.nullCheck(details.primaryDelta) / dart.notNull(dart.nullCheck(this.context.size).width)));
      }
      [_handleDragEnd](details) {
        if (details == null) dart.nullFailed(L0, 659, 38, "details");
        if (!dart.test(this.mounted)) dart.assertFailed(null, L0, 660, 12, "mounted");
        if (!(this[_backGestureController] != null)) dart.assertFailed(null, L0, 661, 12, "_backGestureController != null");
        dart.nullCheck(this[_backGestureController]).dragEnd(this[_convertToLogical](dart.notNull(details.velocity.pixelsPerSecond.dx) / dart.notNull(dart.nullCheck(this.context.size).width)));
        this[_backGestureController] = null;
      }
      [_handleDragCancel]() {
        let t1;
        if (!dart.test(this.mounted)) dart.assertFailed(null, L0, 667, 12, "mounted");
        t1 = this[_backGestureController];
        t1 == null ? null : t1.dragEnd(0.0);
        this[_backGestureController] = null;
      }
      [_handlePointerDown](event) {
        if (event == null) dart.nullFailed(L0, 674, 44, "event");
        if (dart.test(this.widget.enabledCallback())) this[_recognizer].addPointer(event);
      }
      [_convertToLogical](value) {
        if (value == null) dart.nullFailed(L0, 679, 35, "value");
        switch (basic.Directionality.of(this.context)) {
          case C48 || CT.C48:
          {
            return -dart.notNull(value);
          }
          case C49 || CT.C49:
          {
            return value;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      build(context) {
        if (context == null) dart.nullFailed(L0, 689, 29, "context");
        if (!dart.test(debug.debugCheckHasDirectionality(context))) dart.assertFailed(null, L0, 690, 12, "debugCheckHasDirectionality(context)");
        let dragAreaWidth = dart.equals(basic.Directionality.of(context), ui.TextDirection.ltr) ? media_query.MediaQuery.of(context).padding.left : media_query.MediaQuery.of(context).padding.right;
        dragAreaWidth = math.max(core.double, dragAreaWidth, 20);
        return new basic.Stack.new({fit: stack.StackFit.passthrough, children: JSArrayOfWidget().of([this.widget.child, new basic.PositionedDirectional.new({start: 0.0, width: dragAreaWidth, top: 0.0, bottom: 0.0, child: new basic.Listener.new({onPointerDown: dart.bind(this, _handlePointerDown), behavior: proxy_box.HitTestBehavior.translucent, $creationLocationd_0dea112b090073317d4: C50 || CT.C50}), $creationLocationd_0dea112b090073317d4: C54 || CT.C54})]), $creationLocationd_0dea112b090073317d4: C61 || CT.C61});
      }
    }
    (_CupertinoBackGestureDetectorState.new = function() {
      this[_backGestureController] = null;
      this[___CupertinoBackGestureDetectorState__recognizer] = null;
      this[___CupertinoBackGestureDetectorState__recognizer_isSet] = false;
      _CupertinoBackGestureDetectorState.__proto__.new.call(this);
      ;
    }).prototype = _CupertinoBackGestureDetectorState.prototype;
    dart.addTypeTests(_CupertinoBackGestureDetectorState);
    _CupertinoBackGestureDetectorState.prototype[_is__CupertinoBackGestureDetectorState_default] = true;
    dart.addTypeCaches(_CupertinoBackGestureDetectorState);
    dart.setMethodSignature(_CupertinoBackGestureDetectorState, () => ({
      __proto__: dart.getMethods(_CupertinoBackGestureDetectorState.__proto__),
      [_handleDragStart]: dart.fnType(dart.void, [drag_details.DragStartDetails]),
      [_handleDragUpdate]: dart.fnType(dart.void, [drag_details.DragUpdateDetails]),
      [_handleDragEnd]: dart.fnType(dart.void, [drag_details.DragEndDetails]),
      [_handleDragCancel]: dart.fnType(dart.void, []),
      [_handlePointerDown]: dart.fnType(dart.void, [events.PointerDownEvent]),
      [_convertToLogical]: dart.fnType(core.double, [core.double]),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setGetterSignature(_CupertinoBackGestureDetectorState, () => ({
      __proto__: dart.getGetters(_CupertinoBackGestureDetectorState.__proto__),
      [_recognizer]: monodrag.HorizontalDragGestureRecognizer
    }));
    dart.setSetterSignature(_CupertinoBackGestureDetectorState, () => ({
      __proto__: dart.getSetters(_CupertinoBackGestureDetectorState.__proto__),
      [_recognizer]: monodrag.HorizontalDragGestureRecognizer
    }));
    dart.setLibraryUri(_CupertinoBackGestureDetectorState, L1);
    dart.setFieldSignature(_CupertinoBackGestureDetectorState, () => ({
      __proto__: dart.getFields(_CupertinoBackGestureDetectorState.__proto__),
      [_backGestureController]: dart.fieldType(dart.nullable(route$._CupertinoBackGestureController$(T))),
      [___CupertinoBackGestureDetectorState__recognizer]: dart.fieldType(dart.nullable(monodrag.HorizontalDragGestureRecognizer)),
      [___CupertinoBackGestureDetectorState__recognizer_isSet]: dart.fieldType(core.bool)
    }));
    return _CupertinoBackGestureDetectorState;
  });
  route$._CupertinoBackGestureDetectorState = route$._CupertinoBackGestureDetectorState$();
  dart.addTypeTests(route$._CupertinoBackGestureDetectorState, _is__CupertinoBackGestureDetectorState_default);
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  var C65;
  const _is__CupertinoBackGestureController_default = Symbol('_is__CupertinoBackGestureController_default');
  route$._CupertinoBackGestureController$ = dart.generic(T => {
    class _CupertinoBackGestureController extends core.Object {
      dragUpdate(delta) {
        let t1;
        if (delta == null) dart.nullFailed(L0, 745, 26, "delta");
        t1 = this.controller;
        t1.value = dart.notNull(t1.value) - dart.notNull(delta);
      }
      dragEnd(velocity) {
        if (velocity == null) dart.nullFailed(L0, 751, 23, "velocity");
        let animationCurve = C65 || CT.C65;
        let animateForward = null;
        if (velocity[$abs]() >= 1)
          animateForward = dart.notNull(velocity) <= 0;
        else
          animateForward = dart.notNull(this.controller.value) > 0.5;
        if (dart.test(animateForward)) {
          let droppedPageForwardAnimationTime = math.min(core.int, dart.nullCheck(ui.lerpDouble(800, 0, this.controller.value))[$floor](), 300);
          this.controller.animateTo(1.0, {duration: new core.Duration.new({milliseconds: droppedPageForwardAnimationTime}), curve: animationCurve});
        } else {
          this.navigator.pop(ObjectN());
          if (dart.test(this.controller.isAnimating)) {
            let droppedPageBackAnimationTime = dart.nullCheck(ui.lerpDouble(0, 800, this.controller.value))[$floor]();
            this.controller.animateBack(0.0, {duration: new core.Duration.new({milliseconds: droppedPageBackAnimationTime}), curve: animationCurve});
          }
        }
        if (dart.test(this.controller.isAnimating)) {
          let animationStatusCallback = null;
          let animationStatusCallback$35isSet = false;
          function animationStatusCallback$35get() {
            return animationStatusCallback$35isSet ? animationStatusCallback : dart.throw(new _internal.LateError.localNI("animationStatusCallback"));
          }
          dart.fn(animationStatusCallback$35get, VoidToFn());
          function animationStatusCallback$35set(t4) {
            if (t4 == null) dart.nullFailed(L0, 794, 36, "null");
            animationStatusCallback$35isSet = true;
            return animationStatusCallback = t4;
          }
          dart.fn(animationStatusCallback$35set, FnTodynamic());
          animationStatusCallback$35set(dart.fn(status => {
            if (status == null) dart.nullFailed(L0, 795, 50, "status");
            this.navigator.didStopUserGesture();
            this.controller.removeStatusListener(animationStatusCallback$35get());
          }, AnimationStatusTovoid()));
          this.controller.addStatusListener(animationStatusCallback$35get());
        } else {
          this.navigator.didStopUserGesture();
        }
      }
    }
    (_CupertinoBackGestureController.new = function(opts) {
      let navigator = opts && 'navigator' in opts ? opts.navigator : null;
      if (navigator == null) dart.nullFailed(L0, 733, 19, "navigator");
      let controller = opts && 'controller' in opts ? opts.controller : null;
      if (controller == null) dart.nullFailed(L0, 734, 19, "controller");
      this.navigator = navigator;
      this.controller = controller;
      if (!(navigator != null)) dart.assertFailed(null, L0, 735, 15, "navigator != null");
      if (!(controller != null)) dart.assertFailed(null, L0, 736, 15, "controller != null");
      this.navigator.didStartUserGesture();
    }).prototype = _CupertinoBackGestureController.prototype;
    dart.addTypeTests(_CupertinoBackGestureController);
    _CupertinoBackGestureController.prototype[_is__CupertinoBackGestureController_default] = true;
    dart.addTypeCaches(_CupertinoBackGestureController);
    dart.setMethodSignature(_CupertinoBackGestureController, () => ({
      __proto__: dart.getMethods(_CupertinoBackGestureController.__proto__),
      dragUpdate: dart.fnType(dart.void, [core.double]),
      dragEnd: dart.fnType(dart.void, [core.double])
    }));
    dart.setLibraryUri(_CupertinoBackGestureController, L1);
    dart.setFieldSignature(_CupertinoBackGestureController, () => ({
      __proto__: dart.getFields(_CupertinoBackGestureController.__proto__),
      controller: dart.finalFieldType(animation_controller.AnimationController),
      navigator: dart.finalFieldType(navigator.NavigatorState)
    }));
    return _CupertinoBackGestureController;
  });
  route$._CupertinoBackGestureController = route$._CupertinoBackGestureController$();
  dart.addTypeTests(route$._CupertinoBackGestureController, _is__CupertinoBackGestureController_default);
  var edgeGradient$ = dart.privateName(route$, "_CupertinoEdgeShadowDecoration.edgeGradient");
  var C66;
  route$._CupertinoEdgeShadowDecoration = class _CupertinoEdgeShadowDecoration extends decoration.Decoration {
    get edgeGradient() {
      return this[edgeGradient$];
    }
    set edgeGradient(value) {
      super.edgeGradient = value;
    }
    static lerp(a, b, t) {
      let t6, t6$;
      if (t == null) dart.nullFailed(L0, 848, 12, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 850, 12, "t != null");
      if (a == null && b == null) return null;
      return new route$._CupertinoEdgeShadowDecoration.new({edgeGradient: gradient.LinearGradient.lerp((t6 = a, t6 == null ? null : t6.edgeGradient), (t6$ = b, t6$ == null ? null : t6$.edgeGradient), t)});
    }
    lerpFrom(a, t) {
      if (t == null) dart.nullFailed(L0, 859, 65, "t");
      if (route$._CupertinoEdgeShadowDecoration.is(a)) return dart.nullCheck(route$._CupertinoEdgeShadowDecoration.lerp(a, this, t));
      return dart.nullCheck(route$._CupertinoEdgeShadowDecoration.lerp(null, this, t));
    }
    lerpTo(b, t) {
      if (t == null) dart.nullFailed(L0, 866, 63, "t");
      if (route$._CupertinoEdgeShadowDecoration.is(b)) return dart.nullCheck(route$._CupertinoEdgeShadowDecoration.lerp(this, b, t));
      return dart.nullCheck(route$._CupertinoEdgeShadowDecoration.lerp(this, null, t));
    }
    createBoxPainter(onChanged = null) {
      return new route$._CupertinoEdgeShadowPainter.new(this, onChanged);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return route$._CupertinoEdgeShadowDecoration.is(other) && dart.equals(other.edgeGradient, this.edgeGradient);
    }
    get hashCode() {
      return dart.hashCode(this.edgeGradient);
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 889, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfLinearGradient()).new("edgeGradient", this.edgeGradient));
    }
  };
  (route$._CupertinoEdgeShadowDecoration.new = function(opts) {
    let edgeGradient = opts && 'edgeGradient' in opts ? opts.edgeGradient : null;
    this[edgeGradient$] = edgeGradient;
    route$._CupertinoEdgeShadowDecoration.__proto__.new.call(this);
    ;
  }).prototype = route$._CupertinoEdgeShadowDecoration.prototype;
  dart.addTypeTests(route$._CupertinoEdgeShadowDecoration);
  dart.addTypeCaches(route$._CupertinoEdgeShadowDecoration);
  dart.setMethodSignature(route$._CupertinoEdgeShadowDecoration, () => ({
    __proto__: dart.getMethods(route$._CupertinoEdgeShadowDecoration.__proto__),
    lerpFrom: dart.fnType(route$._CupertinoEdgeShadowDecoration, [dart.nullable(decoration.Decoration), core.double]),
    lerpTo: dart.fnType(route$._CupertinoEdgeShadowDecoration, [dart.nullable(decoration.Decoration), core.double]),
    createBoxPainter: dart.fnType(route$._CupertinoEdgeShadowPainter, [], [dart.nullable(dart.fnType(dart.void, []))])
  }));
  dart.setLibraryUri(route$._CupertinoEdgeShadowDecoration, L1);
  dart.setFieldSignature(route$._CupertinoEdgeShadowDecoration, () => ({
    __proto__: dart.getFields(route$._CupertinoEdgeShadowDecoration.__proto__),
    edgeGradient: dart.finalFieldType(dart.nullable(gradient.LinearGradient))
  }));
  dart.defineExtensionMethods(route$._CupertinoEdgeShadowDecoration, ['_equals']);
  dart.defineExtensionAccessors(route$._CupertinoEdgeShadowDecoration, ['hashCode']);
  dart.defineLazy(route$._CupertinoEdgeShadowDecoration, {
    /*route$._CupertinoEdgeShadowDecoration.none*/get none() {
      return C66 || CT.C66;
    }
  }, false);
  var _decoration$ = dart.privateName(route$, "_decoration");
  route$._CupertinoEdgeShadowPainter = class _CupertinoEdgeShadowPainter extends decoration.BoxPainter {
    paint(canvas, offset, configuration) {
      let t6;
      if (canvas == null) dart.nullFailed(L0, 906, 21, "canvas");
      if (offset == null) dart.nullFailed(L0, 906, 36, "offset");
      if (configuration == null) dart.nullFailed(L0, 906, 63, "configuration");
      let gradient = this[_decoration$].edgeGradient;
      if (gradient == null) return;
      let textDirection = configuration.textDirection;
      if (!(textDirection != null)) dart.assertFailed(null, L0, 913, 12, "textDirection != null");
      let deltaX = null;
      switch (dart.nullCheck(textDirection)) {
        case C48 || CT.C48:
        {
          deltaX = dart.nullCheck(configuration.size).width;
          break;
        }
        case C49 || CT.C49:
        {
          deltaX = -dart.notNull(dart.nullCheck(configuration.size).width);
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      let rect = offset['&'](dart.nullCheck(configuration.size)).translate(deltaX, 0.0);
      let paint = (t6 = ui.Paint.new(), (() => {
        t6.shader = gradient.createShader(rect, {textDirection: textDirection});
        return t6;
      })());
      canvas.drawRect(rect, paint);
    }
  };
  (route$._CupertinoEdgeShadowPainter.new = function(_decoration, onChange) {
    if (_decoration == null) dart.nullFailed(L0, 898, 10, "_decoration");
    this[_decoration$] = _decoration;
    if (!(_decoration != null)) dart.assertFailed(null, L0, 900, 14, "_decoration != null");
    route$._CupertinoEdgeShadowPainter.__proto__.new.call(this, onChange);
    ;
  }).prototype = route$._CupertinoEdgeShadowPainter.prototype;
  dart.addTypeTests(route$._CupertinoEdgeShadowPainter);
  dart.addTypeCaches(route$._CupertinoEdgeShadowPainter);
  dart.setMethodSignature(route$._CupertinoEdgeShadowPainter, () => ({
    __proto__: dart.getMethods(route$._CupertinoEdgeShadowPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Offset, image_provider.ImageConfiguration])
  }));
  dart.setLibraryUri(route$._CupertinoEdgeShadowPainter, L1);
  dart.setFieldSignature(route$._CupertinoEdgeShadowPainter, () => ({
    __proto__: dart.getFields(route$._CupertinoEdgeShadowPainter.__proto__),
    [_decoration$]: dart.finalFieldType(route$._CupertinoEdgeShadowDecoration)
  }));
  var _barrierDismissible = dart.privateName(route$, "_barrierDismissible");
  var _semanticsDismissible = dart.privateName(route$, "_semanticsDismissible");
  var _animation = dart.privateName(route$, "_animation");
  var ___CupertinoModalPopupRoute__offsetTween = dart.privateName(route$, "_#_CupertinoModalPopupRoute#_offsetTween");
  var ___CupertinoModalPopupRoute__offsetTween_isSet = dart.privateName(route$, "_#_CupertinoModalPopupRoute#_offsetTween#isSet");
  var _offsetTween = dart.privateName(route$, "_offsetTween");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C67;
  var C68;
  var C71;
  var C70;
  var C69;
  var C74;
  var C75;
  var C73;
  var C72;
  var C78;
  var C79;
  var C77;
  var C76;
  var C82;
  var C83;
  var C81;
  var C80;
  const _is__CupertinoModalPopupRoute_default = Symbol('_is__CupertinoModalPopupRoute_default');
  var barrierLabel$ = dart.privateName(route$, "_CupertinoModalPopupRoute.barrierLabel");
  var barrierColor$ = dart.privateName(route$, "_CupertinoModalPopupRoute.barrierColor");
  route$._CupertinoModalPopupRoute$ = dart.generic(T => {
    class _CupertinoModalPopupRoute extends routes.PopupRoute$(T) {
      get barrierLabel() {
        return this[barrierLabel$];
      }
      set barrierLabel(value) {
        super.barrierLabel = value;
      }
      get barrierColor() {
        return this[barrierColor$];
      }
      set barrierColor(value) {
        super.barrierColor = value;
      }
      get barrierDismissible() {
        let t6;
        t6 = this[_barrierDismissible];
        return t6 == null ? true : t6;
      }
      get semanticsDismissible() {
        let t6;
        t6 = this[_semanticsDismissible];
        return t6 == null ? false : t6;
      }
      get transitionDuration() {
        return route$._kModalPopupTransitionDuration;
      }
      get [_offsetTween]() {
        let t6;
        return dart.test(this[___CupertinoModalPopupRoute__offsetTween_isSet]) ? (t6 = this[___CupertinoModalPopupRoute__offsetTween], t6) : dart.throw(new _internal.LateError.fieldNI("_offsetTween"));
      }
      set [_offsetTween](t6) {
        if (t6 == null) dart.nullFailed(L0, 971, 22, "null");
        this[___CupertinoModalPopupRoute__offsetTween_isSet] = true;
        this[___CupertinoModalPopupRoute__offsetTween] = t6;
      }
      createAnimation() {
        if (!(this[_animation] == null)) dart.assertFailed(null, L0, 975, 12, "_animation == null");
        this[_animation] = new animations.CurvedAnimation.new({parent: super.createAnimation(), curve: curves.Curves.linearToEaseOut, reverseCurve: curves.Curves.linearToEaseOut.flipped});
        this[_offsetTween] = new (TweenOfOffset()).new({begin: C67 || CT.C67, end: C68 || CT.C68});
        return dart.nullCheck(this[_animation]);
      }
      buildPage(context, animation, secondaryAnimation) {
        if (context == null) dart.nullFailed(L0, 992, 33, "context");
        if (animation == null) dart.nullFailed(L0, 992, 60, "animation");
        if (secondaryAnimation == null) dart.nullFailed(L0, 992, 89, "secondaryAnimation");
        return new interface_level.CupertinoUserInterfaceLevel.new({data: interface_level.CupertinoUserInterfaceLevelData.elevated, child: new basic.Builder.new({builder: this.builder, $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), $creationLocationd_0dea112b090073317d4: C72 || CT.C72});
      }
      buildTransitions(context, animation, secondaryAnimation, child) {
        if (context == null) dart.nullFailed(L0, 1000, 40, "context");
        if (animation == null) dart.nullFailed(L0, 1000, 67, "animation");
        if (secondaryAnimation == null) dart.nullFailed(L0, 1000, 96, "secondaryAnimation");
        if (child == null) dart.nullFailed(L0, 1000, 123, "child");
        return new basic.Align.new({alignment: alignment.Alignment.bottomCenter, child: new basic.FractionalTranslation.new({translation: this[_offsetTween].evaluate(dart.nullCheck(this[_animation])), child: child, $creationLocationd_0dea112b090073317d4: C76 || CT.C76}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80});
      }
    }
    (_CupertinoModalPopupRoute.new = function(opts) {
      let barrierColor = opts && 'barrierColor' in opts ? opts.barrierColor : null;
      let barrierLabel = opts && 'barrierLabel' in opts ? opts.barrierLabel : null;
      if (barrierLabel == null) dart.nullFailed(L0, 934, 19, "barrierLabel");
      let builder = opts && 'builder' in opts ? opts.builder : null;
      if (builder == null) dart.nullFailed(L0, 935, 19, "builder");
      let barrierDismissible = opts && 'barrierDismissible' in opts ? opts.barrierDismissible : null;
      let semanticsDismissible = opts && 'semanticsDismissible' in opts ? opts.semanticsDismissible : null;
      let filter = opts && 'filter' in opts ? opts.filter : null;
      let settings = opts && 'settings' in opts ? opts.settings : null;
      this[_barrierDismissible] = null;
      this[_semanticsDismissible] = null;
      this[_animation] = null;
      this[___CupertinoModalPopupRoute__offsetTween] = null;
      this[___CupertinoModalPopupRoute__offsetTween_isSet] = false;
      this[barrierColor$] = barrierColor;
      this[barrierLabel$] = barrierLabel;
      this.builder = builder;
      _CupertinoModalPopupRoute.__proto__.new.call(this, {filter: filter, settings: settings});
      this[_barrierDismissible] = barrierDismissible;
      this[_semanticsDismissible] = semanticsDismissible;
    }).prototype = _CupertinoModalPopupRoute.prototype;
    dart.addTypeTests(_CupertinoModalPopupRoute);
    _CupertinoModalPopupRoute.prototype[_is__CupertinoModalPopupRoute_default] = true;
    dart.addTypeCaches(_CupertinoModalPopupRoute);
    dart.setMethodSignature(_CupertinoModalPopupRoute, () => ({
      __proto__: dart.getMethods(_CupertinoModalPopupRoute.__proto__),
      buildPage: dart.fnType(framework.Widget, [framework.BuildContext, animation$.Animation$(core.double), animation$.Animation$(core.double)])
    }));
    dart.setGetterSignature(_CupertinoModalPopupRoute, () => ({
      __proto__: dart.getGetters(_CupertinoModalPopupRoute.__proto__),
      barrierDismissible: core.bool,
      transitionDuration: core.Duration,
      [_offsetTween]: tween.Tween$(ui.Offset)
    }));
    dart.setSetterSignature(_CupertinoModalPopupRoute, () => ({
      __proto__: dart.getSetters(_CupertinoModalPopupRoute.__proto__),
      [_offsetTween]: tween.Tween$(ui.Offset)
    }));
    dart.setLibraryUri(_CupertinoModalPopupRoute, L1);
    dart.setFieldSignature(_CupertinoModalPopupRoute, () => ({
      __proto__: dart.getFields(_CupertinoModalPopupRoute.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext])),
      [_barrierDismissible]: dart.fieldType(dart.nullable(core.bool)),
      [_semanticsDismissible]: dart.fieldType(dart.nullable(core.bool)),
      barrierLabel: dart.finalFieldType(core.String),
      barrierColor: dart.finalFieldType(dart.nullable(ui.Color)),
      [_animation]: dart.fieldType(dart.nullable(animation$.Animation$(core.double))),
      [___CupertinoModalPopupRoute__offsetTween]: dart.fieldType(dart.nullable(tween.Tween$(ui.Offset))),
      [___CupertinoModalPopupRoute__offsetTween_isSet]: dart.fieldType(core.bool)
    }));
    return _CupertinoModalPopupRoute;
  });
  route$._CupertinoModalPopupRoute = route$._CupertinoModalPopupRoute$();
  dart.addTypeTests(route$._CupertinoModalPopupRoute, _is__CupertinoModalPopupRoute_default);
  var Color_value = dart.privateName(ui, "Color.value");
  var C85;
  var CupertinoDynamicColor_darkHighContrastElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.darkHighContrastElevatedColor");
  var C86;
  var CupertinoDynamicColor_highContrastElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.highContrastElevatedColor");
  var CupertinoDynamicColor_darkElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.darkElevatedColor");
  var CupertinoDynamicColor_elevatedColor = dart.privateName(colors, "CupertinoDynamicColor.elevatedColor");
  var CupertinoDynamicColor_darkHighContrastColor = dart.privateName(colors, "CupertinoDynamicColor.darkHighContrastColor");
  var CupertinoDynamicColor_highContrastColor = dart.privateName(colors, "CupertinoDynamicColor.highContrastColor");
  var CupertinoDynamicColor_darkColor = dart.privateName(colors, "CupertinoDynamicColor.darkColor");
  var CupertinoDynamicColor_color = dart.privateName(colors, "CupertinoDynamicColor.color");
  var CupertinoDynamicColor__debugResolveContext = dart.privateName(colors, "CupertinoDynamicColor._debugResolveContext");
  var CupertinoDynamicColor__debugLabel = dart.privateName(colors, "CupertinoDynamicColor._debugLabel");
  var CupertinoDynamicColor__effectiveColor = dart.privateName(colors, "CupertinoDynamicColor._effectiveColor");
  var C84;
  var C89;
  var C90;
  var C88;
  var C87;
  var C93;
  var C94;
  var C92;
  var C91;
  var C97;
  var C98;
  var C96;
  var C95;
  var C99;
  var C100;
  route$.showCupertinoModalPopup = function showCupertinoModalPopup(T, opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    if (context == null) dart.nullFailed(L0, 1053, 25, "context");
    let builder = opts && 'builder' in opts ? opts.builder : null;
    if (builder == null) dart.nullFailed(L0, 1054, 26, "builder");
    let filter = opts && 'filter' in opts ? opts.filter : null;
    let barrierColor = opts && 'barrierColor' in opts ? opts.barrierColor : C84 || CT.C84;
    if (barrierColor == null) dart.nullFailed(L0, 1056, 9, "barrierColor");
    let barrierDismissible = opts && 'barrierDismissible' in opts ? opts.barrierDismissible : true;
    if (barrierDismissible == null) dart.nullFailed(L0, 1057, 8, "barrierDismissible");
    let useRootNavigator = opts && 'useRootNavigator' in opts ? opts.useRootNavigator : true;
    if (useRootNavigator == null) dart.nullFailed(L0, 1058, 8, "useRootNavigator");
    let semanticsDismissible = opts && 'semanticsDismissible' in opts ? opts.semanticsDismissible : null;
    let routeSettings = opts && 'routeSettings' in opts ? opts.routeSettings : null;
    if (!(useRootNavigator != null)) dart.assertFailed(null, L0, 1062, 10, "useRootNavigator != null");
    return navigator.Navigator.of(context, {rootNavigator: useRootNavigator}).push(T, new (route$._CupertinoModalPopupRoute$(T)).new({barrierColor: colors.CupertinoDynamicColor.resolve(barrierColor, context), barrierDismissible: barrierDismissible, barrierLabel: "Dismiss", builder: builder, filter: filter, semanticsDismissible: semanticsDismissible, settings: routeSettings}));
  };
  route$._buildCupertinoDialogTransitions = function _buildCupertinoDialogTransitions(context, animation, secondaryAnimation, child) {
    if (context == null) dart.nullFailed(L0, 1082, 54, "context");
    if (animation == null) dart.nullFailed(L0, 1082, 81, "animation");
    if (secondaryAnimation == null) dart.nullFailed(L0, 1082, 110, "secondaryAnimation");
    if (child == null) dart.nullFailed(L0, 1082, 137, "child");
    let fadeAnimation = new animations.CurvedAnimation.new({parent: animation, curve: curves.Curves.easeInOut});
    if (dart.equals(animation.status, animation$.AnimationStatus.reverse)) {
      return new transitions.FadeTransition.new({opacity: fadeAnimation, child: child, $creationLocationd_0dea112b090073317d4: C87 || CT.C87});
    }
    return new transitions.FadeTransition.new({opacity: fadeAnimation, child: new transitions.ScaleTransition.new({child: child, scale: animation.drive(core.double, route$._dialogScaleTween), $creationLocationd_0dea112b090073317d4: C91 || CT.C91}), $creationLocationd_0dea112b090073317d4: C95 || CT.C95});
  };
  route$.showCupertinoDialog = function showCupertinoDialog(T, opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    if (context == null) dart.nullFailed(L0, 1136, 25, "context");
    let builder = opts && 'builder' in opts ? opts.builder : null;
    if (builder == null) dart.nullFailed(L0, 1137, 26, "builder");
    let useRootNavigator = opts && 'useRootNavigator' in opts ? opts.useRootNavigator : true;
    if (useRootNavigator == null) dart.nullFailed(L0, 1138, 8, "useRootNavigator");
    let barrierDismissible = opts && 'barrierDismissible' in opts ? opts.barrierDismissible : false;
    if (barrierDismissible == null) dart.nullFailed(L0, 1139, 8, "barrierDismissible");
    let routeSettings = opts && 'routeSettings' in opts ? opts.routeSettings : null;
    if (!(builder != null)) dart.assertFailed(null, L0, 1142, 10, "builder != null");
    if (!(useRootNavigator != null)) dart.assertFailed(null, L0, 1143, 10, "useRootNavigator != null");
    return routes.showGeneralDialog(T, {context: context, barrierDismissible: barrierDismissible, barrierLabel: localizations.CupertinoLocalizations.of(context).modalBarrierDismissLabel, barrierColor: colors.CupertinoDynamicColor.resolve(route$._kModalBarrierColor, context), transitionDuration: C99 || CT.C99, pageBuilder: dart.fn((context, animation, secondaryAnimation) => {
        if (context == null) dart.nullFailed(L0, 1151, 32, "context");
        if (animation == null) dart.nullFailed(L0, 1151, 59, "animation");
        if (secondaryAnimation == null) dart.nullFailed(L0, 1151, 88, "secondaryAnimation");
        return builder(context);
      }, BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget()), transitionBuilder: C100 || CT.C100, useRootNavigator: useRootNavigator, routeSettings: routeSettings});
  };
  var C101;
  var C102;
  var C103;
  var Gradient_transform = dart.privateName(gradient, "Gradient.transform");
  var C106;
  var Gradient_stops = dart.privateName(gradient, "Gradient.stops");
  var C108;
  var C109;
  var C110;
  var C111;
  var C107;
  var Gradient_colors = dart.privateName(gradient, "Gradient.colors");
  var C112;
  var LinearGradient_tileMode = dart.privateName(gradient, "LinearGradient.tileMode");
  var AlignmentDirectional_y = dart.privateName(alignment, "AlignmentDirectional.y");
  var AlignmentDirectional_start = dart.privateName(alignment, "AlignmentDirectional.start");
  var C113;
  var LinearGradient_end = dart.privateName(gradient, "LinearGradient.end");
  var C114;
  var LinearGradient_begin = dart.privateName(gradient, "LinearGradient.begin");
  var C105;
  var C104;
  dart.defineLazy(route$, {
    /*route$._kBackGestureWidth*/get _kBackGestureWidth() {
      return 20;
    },
    /*route$._kMinFlingVelocity*/get _kMinFlingVelocity() {
      return 1;
    },
    /*route$._kMaxDroppedSwipePageForwardAnimationTime*/get _kMaxDroppedSwipePageForwardAnimationTime() {
      return 800;
    },
    /*route$._kMaxPageBackAnimationTime*/get _kMaxPageBackAnimationTime() {
      return 300;
    },
    /*route$._kModalBarrierColor*/get _kModalBarrierColor() {
      return C84 || CT.C84;
    },
    /*route$._kModalPopupTransitionDuration*/get _kModalPopupTransitionDuration() {
      return C101 || CT.C101;
    },
    /*route$._kRightMiddleTween*/get _kRightMiddleTween() {
      return new (TweenOfOffset()).new({begin: C102 || CT.C102, end: ui.Offset.zero});
    },
    /*route$._kMiddleLeftTween*/get _kMiddleLeftTween() {
      return new (TweenOfOffset()).new({begin: ui.Offset.zero, end: C103 || CT.C103});
    },
    /*route$._kBottomUpTween*/get _kBottomUpTween() {
      return new (TweenOfOffset()).new({begin: C67 || CT.C67, end: ui.Offset.zero});
    },
    /*route$._kGradientShadowTween*/get _kGradientShadowTween() {
      return new implicit_animations.DecorationTween.new({begin: route$._CupertinoEdgeShadowDecoration.none, end: C104 || CT.C104});
    },
    /*route$._dialogScaleTween*/get _dialogScaleTween() {
      return new (TweenOfdouble()).new({begin: 1.3, end: 1.0}).chain(new tween.CurveTween.new({curve: curves.Curves.linearToEaseOut}));
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/cupertino/route.dart", {
    "package:flutter/src/cupertino/route.dart": route$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["route.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/cupertino/route.dart.lib.js"}');
  // Exports:
  return {
    src__cupertino__route: route$
  };
}));

//# sourceMappingURL=route.dart.lib.js.map
