define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/widgets/scroll_metrics.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/physics/spring_simulation.dart', 'packages/flutter/src/physics/tolerance.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/widgets/sliver_fill.dart', 'packages/flutter/src/rendering/viewport_offset.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__widgets__page_view_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__widgets__scroll_metrics$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__physics__spring_simulation$46dart, packages__flutter__src__physics__tolerance$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__widgets__sliver_fill$46dart, packages__flutter__src__rendering__viewport_offset$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scroll_controller = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scroll_controller;
  const scroll_position = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scroll_position;
  const page_storage = packages__flutter__src__widgets__widget_span$46dart.src__widgets__page_storage;
  const scroll_position_with_single_context = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scroll_position_with_single_context;
  const scroll_physics = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scroll_physics;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const sliver = packages__flutter__src__widgets__widget_span$46dart.src__widgets__sliver;
  const debug = packages__flutter__src__widgets__widget_span$46dart.src__widgets__debug;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const notification_listener = packages__flutter__src__widgets__widget_span$46dart.src__widgets__notification_listener;
  const scroll_notification = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scroll_notification;
  const scrollable = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scrollable;
  const viewport = packages__flutter__src__widgets__widget_span$46dart.src__widgets__viewport;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const scroll_metrics = packages__flutter__src__widgets__scroll_metrics$46dart.src__widgets__scroll_metrics;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const spring_simulation = packages__flutter__src__physics__spring_simulation$46dart.src__physics__spring_simulation;
  const tolerance = packages__flutter__src__physics__tolerance$46dart.src__physics__tolerance;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const viewport$ = packages__flutter__src__rendering__sliver$46dart.src__rendering__viewport;
  const sliver_fill = packages__flutter__src__widgets__sliver_fill$46dart.src__widgets__sliver_fill;
  const viewport_offset = packages__flutter__src__rendering__viewport_offset$46dart.src__rendering__viewport_offset;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var page_view = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $length = dartx.length;
  var $toDouble = dartx.toDouble;
  var $round = dartx.round;
  var $clamp = dartx.clamp;
  var $roundToDouble = dartx.roundToDouble;
  var $abs = dartx.abs;
  var $noSuchMethod = dartx.noSuchMethod;
  dart._checkModuleNullSafetyMode(false);
  var doubleN = () => (doubleN = dart.constFn(dart.nullable(core.double)))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(framework.Widget)))();
  var NotificationListenerOfScrollNotification = () => (NotificationListenerOfScrollNotification = dart.constFn(notification_listener.NotificationListener$(scroll_notification.ScrollNotification)))();
  var ScrollNotificationTobool = () => (ScrollNotificationTobool = dart.constFn(dart.fnType(core.bool, [scroll_notification.ScrollNotification])))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var BuildContextAndViewportOffsetToViewport = () => (BuildContextAndViewportOffsetToViewport = dart.constFn(dart.fnType(viewport.Viewport, [framework.BuildContext, viewport_offset.ViewportOffset])))();
  var EnumPropertyOfAxis = () => (EnumPropertyOfAxis = dart.constFn(diagnostics.EnumProperty$(basic_types.Axis)))();
  var DiagnosticsPropertyOfPageController = () => (DiagnosticsPropertyOfPageController = dart.constFn(diagnostics.DiagnosticsProperty$(page_view.PageController)))();
  var DiagnosticsPropertyOfScrollPhysics = () => (DiagnosticsPropertyOfScrollPhysics = dart.constFn(diagnostics.DiagnosticsProperty$(scroll_physics.ScrollPhysics)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/page_view.dart";
  var L1 = "package:flutter/src/widgets/page_view.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.25,
        [Cubic_b]: 0.1,
        [Cubic_a]: 0.25
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: scroll_position.ScrollPositionAlignmentPolicy.prototype,
        [_name]: "ScrollPositionAlignmentPolicy.explicit",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const(new _js_helper.PrivateSymbol.new('_maxScrollExtent', _maxScrollExtent));
    },
    get C4() {
      return C4 = dart.const(new _js_helper.PrivateSymbol.new('_minScrollExtent', _minScrollExtent));
    },
    get C5() {
      return C5 = dart.const(new _js_helper.PrivateSymbol.new('_viewportDimension', _viewportDimension));
    },
    get C6() {
      return C6 = dart.const(new _js_helper.PrivateSymbol.new('_pixels', _pixels));
    },
    get C7() {
      return C7 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name$]: "Axis.horizontal",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.constList([], WidgetL());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name$0]: "DragStartBehavior.start",
        index: 1
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name$1]: "Clip.hardEdge",
        index: 1
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name$]: "Axis.vertical",
        index: 1
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "viewportFraction",
        [_Location_column]: 17,
        [_Location_line]: 896,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 17,
        [_Location_line]: 897,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], _LocationL());
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 895,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/page_view.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cacheExtent",
        [_Location_column]: 13,
        [_Location_line]: 889,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cacheExtentStyle",
        [_Location_column]: 13,
        [_Location_line]: 890,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "axisDirection",
        [_Location_column]: 13,
        [_Location_line]: 891,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "offset",
        [_Location_column]: 13,
        [_Location_line]: 892,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipBehavior",
        [_Location_column]: 13,
        [_Location_line]: 893,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "slivers",
        [_Location_column]: 13,
        [_Location_line]: 894,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], _LocationL());
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 885,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/page_view.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dragStartBehavior",
        [_Location_column]: 9,
        [_Location_line]: 879,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "axisDirection",
        [_Location_column]: 9,
        [_Location_line]: 880,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 9,
        [_Location_line]: 881,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 9,
        [_Location_line]: 882,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "restorationId",
        [_Location_column]: 9,
        [_Location_line]: 883,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "viewportBuilder",
        [_Location_column]: 9,
        [_Location_line]: 884,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31], _LocationL());
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 878,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/page_view.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onNotification",
        [_Location_column]: 7,
        [_Location_line]: 867,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 878,
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
        [_Location_column]: 12,
        [_Location_line]: 866,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/page_view.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: page_view.PageScrollPhysics.prototype,
        [ScrollPhysics_parent]: null
      });
    }
  }, false);
  var initialPage$ = dart.privateName(page_view, "PageController.initialPage");
  var keepPage$ = dart.privateName(page_view, "PageController.keepPage");
  var viewportFraction$ = dart.privateName(page_view, "PageController.viewportFraction");
  page_view.PageController = class PageController extends scroll_controller.ScrollController {
    get initialPage() {
      return this[initialPage$];
    }
    set initialPage(value) {
      super.initialPage = value;
    }
    get keepPage() {
      return this[keepPage$];
    }
    set keepPage(value) {
      super.keepPage = value;
    }
    get viewportFraction() {
      return this[viewportFraction$];
    }
    set viewportFraction(value) {
      super.viewportFraction = value;
    }
    get page() {
      if (!dart.test(this.positions[$isNotEmpty])) dart.assertFailed("PageController.page cannot be accessed before a PageView is built with it.", L0, 177, 7, "positions.isNotEmpty");
      if (!(this.positions[$length] === 1)) dart.assertFailed("The page property cannot be read when multiple PageViews are attached to " + "the same PageController.", L0, 181, 7, "positions.length == 1");
      let position = page_view._PagePosition.as(this.position);
      return position.page;
    }
    animateToPage(page, opts) {
      if (page == null) dart.nullFailed(L0, 196, 9, "page");
      let duration = opts && 'duration' in opts ? opts.duration : null;
      if (duration == null) dart.nullFailed(L0, 197, 23, "duration");
      let curve = opts && 'curve' in opts ? opts.curve : null;
      if (curve == null) dart.nullFailed(L0, 198, 20, "curve");
      let position = page_view._PagePosition.as(this.position);
      return position.animateTo(position.getPixelsFromPage(page[$toDouble]()), {duration: duration, curve: curve});
    }
    jumpToPage(page) {
      if (page == null) dart.nullFailed(L0, 212, 23, "page");
      let position = page_view._PagePosition.as(this.position);
      position.jumpTo(position.getPixelsFromPage(page[$toDouble]()));
    }
    nextPage(opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      if (duration == null) dart.nullFailed(L0, 223, 45, "duration");
      let curve = opts && 'curve' in opts ? opts.curve : null;
      if (curve == null) dart.nullFailed(L0, 223, 70, "curve");
      return this.animateToPage(dart.nullCheck(this.page)[$round]() + 1, {duration: duration, curve: curve});
    }
    previousPage(opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      if (duration == null) dart.nullFailed(L0, 233, 49, "duration");
      let curve = opts && 'curve' in opts ? opts.curve : null;
      if (curve == null) dart.nullFailed(L0, 233, 74, "curve");
      return this.animateToPage(dart.nullCheck(this.page)[$round]() - 1, {duration: duration, curve: curve});
    }
    createScrollPosition(physics, context, oldPosition) {
      if (physics == null) dart.nullFailed(L0, 238, 53, "physics");
      if (context == null) dart.nullFailed(L0, 238, 76, "context");
      return new page_view._PagePosition.new({physics: physics, context: context, initialPage: this.initialPage, keepPage: this.keepPage, viewportFraction: this.viewportFraction, oldPosition: oldPosition});
    }
    attach(position) {
      if (position == null) dart.nullFailed(L0, 250, 30, "position");
      super.attach(position);
      let pagePosition = page_view._PagePosition.as(position);
      pagePosition.viewportFraction = this.viewportFraction;
    }
  };
  (page_view.PageController.new = function(opts) {
    let initialPage = opts && 'initialPage' in opts ? opts.initialPage : 0;
    if (initialPage == null) dart.nullFailed(L0, 124, 10, "initialPage");
    let keepPage = opts && 'keepPage' in opts ? opts.keepPage : true;
    if (keepPage == null) dart.nullFailed(L0, 125, 10, "keepPage");
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1;
    if (viewportFraction == null) dart.nullFailed(L0, 126, 10, "viewportFraction");
    this[initialPage$] = initialPage;
    this[keepPage$] = keepPage;
    this[viewportFraction$] = viewportFraction;
    if (!(initialPage != null)) dart.assertFailed(null, L0, 127, 15, "initialPage != null");
    if (!(keepPage != null)) dart.assertFailed(null, L0, 128, 15, "keepPage != null");
    if (!(viewportFraction != null)) dart.assertFailed(null, L0, 129, 15, "viewportFraction != null");
    if (!(dart.notNull(viewportFraction) > 0.0)) dart.assertFailed(null, L0, 130, 15, "viewportFraction > 0.0");
    page_view.PageController.__proto__.new.call(this);
    ;
  }).prototype = page_view.PageController.prototype;
  dart.addTypeTests(page_view.PageController);
  dart.addTypeCaches(page_view.PageController);
  dart.setMethodSignature(page_view.PageController, () => ({
    __proto__: dart.getMethods(page_view.PageController.__proto__),
    animateToPage: dart.fnType(async.Future$(dart.void), [core.int], {}, {curve: curves.Curve, duration: core.Duration}),
    jumpToPage: dart.fnType(dart.void, [core.int]),
    nextPage: dart.fnType(async.Future$(dart.void), [], {}, {curve: curves.Curve, duration: core.Duration}),
    previousPage: dart.fnType(async.Future$(dart.void), [], {}, {curve: curves.Curve, duration: core.Duration})
  }));
  dart.setGetterSignature(page_view.PageController, () => ({
    __proto__: dart.getGetters(page_view.PageController.__proto__),
    page: dart.nullable(core.double)
  }));
  dart.setLibraryUri(page_view.PageController, L1);
  dart.setFieldSignature(page_view.PageController, () => ({
    __proto__: dart.getFields(page_view.PageController.__proto__),
    initialPage: dart.finalFieldType(core.int),
    keepPage: dart.finalFieldType(core.bool),
    viewportFraction: dart.finalFieldType(core.double)
  }));
  var viewportFraction$0 = dart.privateName(page_view, "PageMetrics.viewportFraction");
  page_view.PageMetrics = class PageMetrics extends scroll_metrics.FixedScrollMetrics {
    get viewportFraction() {
      return this[viewportFraction$0];
    }
    set viewportFraction(value) {
      super.viewportFraction = value;
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let minScrollExtent = opts && 'minScrollExtent' in opts ? opts.minScrollExtent : null;
      let maxScrollExtent = opts && 'maxScrollExtent' in opts ? opts.maxScrollExtent : null;
      let pixels = opts && 'pixels' in opts ? opts.pixels : null;
      let viewportDimension = opts && 'viewportDimension' in opts ? opts.viewportDimension : null;
      let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
      let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : null;
      return new page_view.PageMetrics.new({minScrollExtent: (t0 = minScrollExtent, t0 == null ? dart.test(this.hasContentDimensions) ? this.minScrollExtent : null : t0), maxScrollExtent: (t0$ = maxScrollExtent, t0$ == null ? dart.test(this.hasContentDimensions) ? this.maxScrollExtent : null : t0$), pixels: (t0$0 = pixels, t0$0 == null ? dart.test(this.hasPixels) ? this.pixels : null : t0$0), viewportDimension: (t0$1 = viewportDimension, t0$1 == null ? dart.test(this.hasViewportDimension) ? this.viewportDimension : null : t0$1), axisDirection: (t0$2 = axisDirection, t0$2 == null ? this.axisDirection : t0$2), viewportFraction: (t0$3 = viewportFraction, t0$3 == null ? this.viewportFraction : t0$3)});
    }
    get page() {
      return math.max(core.double, 0.0, this.pixels[$clamp](this.minScrollExtent, this.maxScrollExtent)) / math.max(core.num, 1.0, dart.notNull(this.viewportDimension) * dart.notNull(this.viewportFraction));
    }
  };
  (page_view.PageMetrics.new = function(opts) {
    let minScrollExtent = opts && 'minScrollExtent' in opts ? opts.minScrollExtent : null;
    let maxScrollExtent = opts && 'maxScrollExtent' in opts ? opts.maxScrollExtent : null;
    let pixels = opts && 'pixels' in opts ? opts.pixels : null;
    let viewportDimension = opts && 'viewportDimension' in opts ? opts.viewportDimension : null;
    let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
    if (axisDirection == null) dart.nullFailed(L0, 268, 28, "axisDirection");
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : null;
    if (viewportFraction == null) dart.nullFailed(L0, 269, 19, "viewportFraction");
    this[viewportFraction$0] = viewportFraction;
    page_view.PageMetrics.__proto__.new.call(this, {minScrollExtent: minScrollExtent, maxScrollExtent: maxScrollExtent, pixels: pixels, viewportDimension: viewportDimension, axisDirection: axisDirection});
    ;
  }).prototype = page_view.PageMetrics.prototype;
  dart.addTypeTests(page_view.PageMetrics);
  dart.addTypeCaches(page_view.PageMetrics);
  dart.setMethodSignature(page_view.PageMetrics, () => ({
    __proto__: dart.getMethods(page_view.PageMetrics.__proto__),
    copyWith: dart.fnType(page_view.PageMetrics, [], {axisDirection: dart.nullable(basic_types.AxisDirection), maxScrollExtent: dart.nullable(core.double), minScrollExtent: dart.nullable(core.double), pixels: dart.nullable(core.double), viewportDimension: dart.nullable(core.double), viewportFraction: dart.nullable(core.double)}, {})
  }));
  dart.setGetterSignature(page_view.PageMetrics, () => ({
    __proto__: dart.getGetters(page_view.PageMetrics.__proto__),
    page: dart.nullable(core.double)
  }));
  dart.setLibraryUri(page_view.PageMetrics, L1);
  dart.setFieldSignature(page_view.PageMetrics, () => ({
    __proto__: dart.getFields(page_view.PageMetrics.__proto__),
    viewportFraction: dart.finalFieldType(core.double)
  }));
  var _viewportFraction = dart.privateName(page_view, "_viewportFraction");
  var _pageToUseOnStartup = dart.privateName(page_view, "_pageToUseOnStartup");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  var C1;
  var _name = dart.privateName(scroll_position, "_name");
  var C2;
  var _initialPageOffset = dart.privateName(page_view, "_initialPageOffset");
  var _maxScrollExtent = dart.privateName(page_view, "_maxScrollExtent");
  var C3;
  var _maxScrollExtent$ = dart.privateName(scroll_metrics, "_maxScrollExtent");
  var _minScrollExtent = dart.privateName(page_view, "_minScrollExtent");
  var C4;
  var _minScrollExtent$ = dart.privateName(scroll_metrics, "_minScrollExtent");
  var _viewportDimension = dart.privateName(page_view, "_viewportDimension");
  var C5;
  var _viewportDimension$ = dart.privateName(scroll_metrics, "_viewportDimension");
  var _pixels = dart.privateName(page_view, "_pixels");
  var C6;
  var _pixels$ = dart.privateName(scroll_metrics, "_pixels");
  page_view._PagePosition = class _PagePosition extends scroll_position_with_single_context.ScrollPositionWithSingleContext {
    ensureVisible(object, opts) {
      if (object == null) dart.nullFailed(L0, 336, 18, "object");
      let alignment = opts && 'alignment' in opts ? opts.alignment : 0;
      if (alignment == null) dart.nullFailed(L0, 337, 12, "alignment");
      let duration = opts && 'duration' in opts ? opts.duration : C0 || CT.C0;
      if (duration == null) dart.nullFailed(L0, 338, 14, "duration");
      let curve = opts && 'curve' in opts ? opts.curve : C1 || CT.C1;
      if (curve == null) dart.nullFailed(L0, 339, 11, "curve");
      let alignmentPolicy = opts && 'alignmentPolicy' in opts ? opts.alignmentPolicy : C2 || CT.C2;
      if (alignmentPolicy == null) dart.nullFailed(L0, 340, 35, "alignmentPolicy");
      let targetRenderObject = opts && 'targetRenderObject' in opts ? opts.targetRenderObject : null;
      return super.ensureVisible(object, {alignment: alignment, duration: duration, curve: curve, alignmentPolicy: alignmentPolicy, targetRenderObject: null});
    }
    get viewportFraction() {
      return this[_viewportFraction];
    }
    set viewportFraction(value) {
      if (value == null) dart.nullFailed(L0, 360, 31, "value");
      if (this[_viewportFraction] == value) return;
      let oldPage = this.page;
      this[_viewportFraction] = value;
      if (oldPage != null) this.forcePixels(this.getPixelsFromPage(oldPage));
    }
    get [_initialPageOffset]() {
      return math.max(core.double, 0.0, dart.notNull(this.viewportDimension) * (dart.notNull(this.viewportFraction) - 1) / 2);
    }
    getPageFromPixels(pixels, viewportDimension) {
      if (pixels == null) dart.nullFailed(L0, 377, 35, "pixels");
      if (viewportDimension == null) dart.nullFailed(L0, 377, 50, "viewportDimension");
      let actual = math.max(core.double, 0.0, dart.notNull(pixels) - dart.notNull(this[_initialPageOffset])) / math.max(core.num, 1.0, dart.notNull(viewportDimension) * dart.notNull(this.viewportFraction));
      let round = actual[$roundToDouble]();
      if ((actual - round)[$abs]() < 1e-10) {
        return round;
      }
      return actual;
    }
    getPixelsFromPage(page) {
      if (page == null) dart.nullFailed(L0, 386, 35, "page");
      return dart.notNull(page) * dart.notNull(this.viewportDimension) * dart.notNull(this.viewportFraction) + dart.notNull(this[_initialPageOffset]);
    }
    get page() {
      if (!(!dart.test(this.hasPixels) || this.minScrollExtent != null && this.maxScrollExtent != null)) dart.assertFailed("Page value is only available after content dimensions are established.", L0, 393, 7, "!hasPixels || (minScrollExtent != null && maxScrollExtent != null)");
      return !dart.test(this.hasPixels) ? null : this.getPageFromPixels(this.pixels[$clamp](this.minScrollExtent, this.maxScrollExtent), this.viewportDimension);
    }
    saveScrollOffset() {
      let t0;
      t0 = page_storage.PageStorage.of(this.context.storageContext);
      t0 == null ? null : t0.writeState(this.context.storageContext, this.getPageFromPixels(this.pixels, this.viewportDimension));
    }
    restoreScrollOffset() {
      let t0;
      if (!dart.test(this.hasPixels)) {
        let value = doubleN().as((t0 = page_storage.PageStorage.of(this.context.storageContext), t0 == null ? null : t0.readState(this.context.storageContext)));
        if (value != null) this[_pageToUseOnStartup] = value;
      }
    }
    saveOffset() {
      this.context.saveOffset(this.getPageFromPixels(this.pixels, this.viewportDimension));
    }
    restoreOffset(offset, opts) {
      if (offset == null) dart.nullFailed(L0, 419, 29, "offset");
      let initialRestore = opts && 'initialRestore' in opts ? opts.initialRestore : false;
      if (initialRestore == null) dart.nullFailed(L0, 419, 43, "initialRestore");
      if (!(initialRestore != null)) dart.assertFailed(null, L0, 420, 12, "initialRestore != null");
      if (!(offset != null)) dart.assertFailed(null, L0, 421, 12, "offset != null");
      if (dart.test(initialRestore)) {
        this[_pageToUseOnStartup] = offset;
      } else {
        this.jumpTo(this.getPixelsFromPage(offset));
      }
    }
    applyViewportDimension(viewportDimension) {
      if (viewportDimension == null) dart.nullFailed(L0, 430, 38, "viewportDimension");
      let oldViewportDimensions = dart.test(this.hasViewportDimension) ? this.viewportDimension : null;
      if (viewportDimension == oldViewportDimensions) {
        return true;
      }
      let result = super.applyViewportDimension(viewportDimension);
      let oldPixels = dart.test(this.hasPixels) ? this.pixels : null;
      let page = oldPixels == null || oldViewportDimensions === 0.0 ? this[_pageToUseOnStartup] : this.getPageFromPixels(oldPixels, dart.nullCheck(oldViewportDimensions));
      let newPixels = this.getPixelsFromPage(page);
      if (newPixels != oldPixels) {
        this.correctPixels(newPixels);
        return false;
      }
      return result;
    }
    applyContentDimensions(minScrollExtent, maxScrollExtent) {
      if (minScrollExtent == null) dart.nullFailed(L0, 448, 38, "minScrollExtent");
      if (maxScrollExtent == null) dart.nullFailed(L0, 448, 62, "maxScrollExtent");
      let newMinScrollExtent = dart.notNull(minScrollExtent) + dart.notNull(this[_initialPageOffset]);
      return super.applyContentDimensions(newMinScrollExtent, math.max(core.double, newMinScrollExtent, dart.notNull(maxScrollExtent) - dart.notNull(this[_initialPageOffset])));
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let minScrollExtent = opts && 'minScrollExtent' in opts ? opts.minScrollExtent : null;
      let maxScrollExtent = opts && 'maxScrollExtent' in opts ? opts.maxScrollExtent : null;
      let pixels = opts && 'pixels' in opts ? opts.pixels : null;
      let viewportDimension = opts && 'viewportDimension' in opts ? opts.viewportDimension : null;
      let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
      let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : null;
      return new page_view.PageMetrics.new({minScrollExtent: (t0 = minScrollExtent, t0 == null ? dart.test(this.hasContentDimensions) ? this.minScrollExtent : null : t0), maxScrollExtent: (t0$ = maxScrollExtent, t0$ == null ? dart.test(this.hasContentDimensions) ? this.maxScrollExtent : null : t0$), pixels: (t0$0 = pixels, t0$0 == null ? dart.test(this.hasPixels) ? this.pixels : null : t0$0), viewportDimension: (t0$1 = viewportDimension, t0$1 == null ? dart.test(this.hasViewportDimension) ? this.viewportDimension : null : t0$1), axisDirection: (t0$2 = axisDirection, t0$2 == null ? this.axisDirection : t0$2), viewportFraction: (t0$3 = viewportFraction, t0$3 == null ? this.viewportFraction : t0$3)});
    }
    get [_maxScrollExtent$]() {
      return doubleN().as(this[$noSuchMethod](new core._Invocation.getter(C3 || CT.C3)));
    }
    get [_minScrollExtent$]() {
      return doubleN().as(this[$noSuchMethod](new core._Invocation.getter(C4 || CT.C4)));
    }
    get [_viewportDimension$]() {
      return doubleN().as(this[$noSuchMethod](new core._Invocation.getter(C5 || CT.C5)));
    }
    get [_pixels$]() {
      return doubleN().as(this[$noSuchMethod](new core._Invocation.getter(C6 || CT.C6)));
    }
  };
  (page_view._PagePosition.new = function(opts) {
    let physics = opts && 'physics' in opts ? opts.physics : null;
    if (physics == null) dart.nullFailed(L0, 311, 28, "physics");
    let context = opts && 'context' in opts ? opts.context : null;
    if (context == null) dart.nullFailed(L0, 312, 28, "context");
    let initialPage = opts && 'initialPage' in opts ? opts.initialPage : 0;
    if (initialPage == null) dart.nullFailed(L0, 313, 10, "initialPage");
    let keepPage = opts && 'keepPage' in opts ? opts.keepPage : true;
    if (keepPage == null) dart.nullFailed(L0, 314, 10, "keepPage");
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1;
    if (viewportFraction == null) dart.nullFailed(L0, 315, 12, "viewportFraction");
    let oldPosition = opts && 'oldPosition' in opts ? opts.oldPosition : null;
    this.initialPage = initialPage;
    if (!(initialPage != null)) dart.assertFailed(null, L0, 317, 15, "initialPage != null");
    if (!(keepPage != null)) dart.assertFailed(null, L0, 318, 15, "keepPage != null");
    if (!(viewportFraction != null)) dart.assertFailed(null, L0, 319, 15, "viewportFraction != null");
    if (!(dart.notNull(viewportFraction) > 0.0)) dart.assertFailed(null, L0, 320, 15, "viewportFraction > 0.0");
    this[_viewportFraction] = viewportFraction;
    this[_pageToUseOnStartup] = initialPage[$toDouble]();
    page_view._PagePosition.__proto__.new.call(this, {physics: physics, context: context, initialPixels: null, keepScrollOffset: keepPage, oldPosition: oldPosition});
    ;
  }).prototype = page_view._PagePosition.prototype;
  dart.addTypeTests(page_view._PagePosition);
  dart.addTypeCaches(page_view._PagePosition);
  page_view._PagePosition[dart.implements] = () => [page_view.PageMetrics];
  dart.setMethodSignature(page_view._PagePosition, () => ({
    __proto__: dart.getMethods(page_view._PagePosition.__proto__),
    getPageFromPixels: dart.fnType(core.double, [core.double, core.double]),
    getPixelsFromPage: dart.fnType(core.double, [core.double]),
    copyWith: dart.fnType(page_view.PageMetrics, [], {axisDirection: dart.nullable(basic_types.AxisDirection), maxScrollExtent: dart.nullable(core.double), minScrollExtent: dart.nullable(core.double), pixels: dart.nullable(core.double), viewportDimension: dart.nullable(core.double), viewportFraction: dart.nullable(core.double)}, {})
  }));
  dart.setGetterSignature(page_view._PagePosition, () => ({
    __proto__: dart.getGetters(page_view._PagePosition.__proto__),
    viewportFraction: core.double,
    [_initialPageOffset]: core.double,
    page: dart.nullable(core.double),
    [_maxScrollExtent$]: dart.nullable(core.double),
    [_minScrollExtent$]: dart.nullable(core.double),
    [_viewportDimension$]: dart.nullable(core.double),
    [_pixels$]: dart.nullable(core.double)
  }));
  dart.setSetterSignature(page_view._PagePosition, () => ({
    __proto__: dart.getSetters(page_view._PagePosition.__proto__),
    viewportFraction: core.double
  }));
  dart.setLibraryUri(page_view._PagePosition, L1);
  dart.setFieldSignature(page_view._PagePosition, () => ({
    __proto__: dart.getFields(page_view._PagePosition.__proto__),
    initialPage: dart.finalFieldType(core.int),
    [_pageToUseOnStartup]: dart.fieldType(core.double),
    [_viewportFraction]: dart.fieldType(core.double)
  }));
  var allowImplicitScrolling$ = dart.privateName(page_view, "_ForceImplicitScrollPhysics.allowImplicitScrolling");
  page_view._ForceImplicitScrollPhysics = class _ForceImplicitScrollPhysics extends scroll_physics.ScrollPhysics {
    get allowImplicitScrolling() {
      return this[allowImplicitScrolling$];
    }
    set allowImplicitScrolling(value) {
      super.allowImplicitScrolling = value;
    }
    applyTo(ancestor) {
      return new page_view._ForceImplicitScrollPhysics.new({allowImplicitScrolling: this.allowImplicitScrolling, parent: this.buildParent(ancestor)});
    }
  };
  (page_view._ForceImplicitScrollPhysics.new = function(opts) {
    let allowImplicitScrolling = opts && 'allowImplicitScrolling' in opts ? opts.allowImplicitScrolling : null;
    if (allowImplicitScrolling == null) dart.nullFailed(L0, 478, 19, "allowImplicitScrolling");
    let parent = opts && 'parent' in opts ? opts.parent : null;
    this[allowImplicitScrolling$] = allowImplicitScrolling;
    if (!(allowImplicitScrolling != null)) dart.assertFailed(null, L0, 480, 15, "allowImplicitScrolling != null");
    page_view._ForceImplicitScrollPhysics.__proto__.new.call(this, {parent: parent});
    ;
  }).prototype = page_view._ForceImplicitScrollPhysics.prototype;
  dart.addTypeTests(page_view._ForceImplicitScrollPhysics);
  dart.addTypeCaches(page_view._ForceImplicitScrollPhysics);
  dart.setMethodSignature(page_view._ForceImplicitScrollPhysics, () => ({
    __proto__: dart.getMethods(page_view._ForceImplicitScrollPhysics.__proto__),
    applyTo: dart.fnType(page_view._ForceImplicitScrollPhysics, [dart.nullable(scroll_physics.ScrollPhysics)])
  }));
  dart.setLibraryUri(page_view._ForceImplicitScrollPhysics, L1);
  dart.setFieldSignature(page_view._ForceImplicitScrollPhysics, () => ({
    __proto__: dart.getFields(page_view._ForceImplicitScrollPhysics.__proto__),
    allowImplicitScrolling: dart.finalFieldType(core.bool)
  }));
  var _getPage = dart.privateName(page_view, "_getPage");
  var _getPixels = dart.privateName(page_view, "_getPixels");
  var _getTargetPixels = dart.privateName(page_view, "_getTargetPixels");
  page_view.PageScrollPhysics = class PageScrollPhysics extends scroll_physics.ScrollPhysics {
    applyTo(ancestor) {
      return new page_view.PageScrollPhysics.new({parent: this.buildParent(ancestor)});
    }
    [_getPage](position) {
      if (position == null) dart.nullFailed(L0, 513, 33, "position");
      if (page_view._PagePosition.is(position)) return dart.nullCheck(position.page);
      return dart.notNull(position.pixels) / dart.notNull(position.viewportDimension);
    }
    [_getPixels](position, page) {
      if (position == null) dart.nullFailed(L0, 519, 35, "position");
      if (page == null) dart.nullFailed(L0, 519, 52, "page");
      if (page_view._PagePosition.is(position)) return position.getPixelsFromPage(page);
      return dart.notNull(page) * dart.notNull(position.viewportDimension);
    }
    [_getTargetPixels](position, tolerance, velocity) {
      if (position == null) dart.nullFailed(L0, 525, 41, "position");
      if (tolerance == null) dart.nullFailed(L0, 525, 61, "tolerance");
      if (velocity == null) dart.nullFailed(L0, 525, 79, "velocity");
      let page = this[_getPage](position);
      if (dart.notNull(velocity) < -dart.notNull(tolerance.velocity))
        page = dart.notNull(page) - 0.5;
      else if (dart.notNull(velocity) > dart.notNull(tolerance.velocity)) page = dart.notNull(page) + 0.5;
      return this[_getPixels](position, page[$roundToDouble]());
    }
    createBallisticSimulation(position, velocity) {
      if (position == null) dart.nullFailed(L0, 535, 55, "position");
      if (velocity == null) dart.nullFailed(L0, 535, 72, "velocity");
      if (dart.notNull(velocity) <= 0.0 && dart.notNull(position.pixels) <= dart.notNull(position.minScrollExtent) || dart.notNull(velocity) >= 0.0 && dart.notNull(position.pixels) >= dart.notNull(position.maxScrollExtent)) return super.createBallisticSimulation(position, velocity);
      let tolerance = this.tolerance;
      let target = this[_getTargetPixels](position, tolerance, velocity);
      if (target != position.pixels) return new spring_simulation.ScrollSpringSimulation.new(this.spring, position.pixels, target, velocity, {tolerance: tolerance});
      return null;
    }
    get allowImplicitScrolling() {
      return false;
    }
  };
  (page_view.PageScrollPhysics.new = function(opts) {
    let parent = opts && 'parent' in opts ? opts.parent : null;
    page_view.PageScrollPhysics.__proto__.new.call(this, {parent: parent});
    ;
  }).prototype = page_view.PageScrollPhysics.prototype;
  dart.addTypeTests(page_view.PageScrollPhysics);
  dart.addTypeCaches(page_view.PageScrollPhysics);
  dart.setMethodSignature(page_view.PageScrollPhysics, () => ({
    __proto__: dart.getMethods(page_view.PageScrollPhysics.__proto__),
    applyTo: dart.fnType(page_view.PageScrollPhysics, [dart.nullable(scroll_physics.ScrollPhysics)]),
    [_getPage]: dart.fnType(core.double, [scroll_metrics.ScrollMetrics]),
    [_getPixels]: dart.fnType(core.double, [scroll_metrics.ScrollMetrics, core.double]),
    [_getTargetPixels]: dart.fnType(core.double, [scroll_metrics.ScrollMetrics, tolerance.Tolerance, core.double])
  }));
  dart.setLibraryUri(page_view.PageScrollPhysics, L1);
  var _name$ = dart.privateName(basic_types, "_name");
  var C7;
  var C8;
  var _name$0 = dart.privateName(recognizer, "_name");
  var C9;
  var _name$1 = dart.privateName(ui, "_name");
  var C10;
  var allowImplicitScrolling$0 = dart.privateName(page_view, "PageView.allowImplicitScrolling");
  var restorationId$ = dart.privateName(page_view, "PageView.restorationId");
  var scrollDirection$ = dart.privateName(page_view, "PageView.scrollDirection");
  var reverse$ = dart.privateName(page_view, "PageView.reverse");
  var controller$ = dart.privateName(page_view, "PageView.controller");
  var physics$ = dart.privateName(page_view, "PageView.physics");
  var pageSnapping$ = dart.privateName(page_view, "PageView.pageSnapping");
  var onPageChanged$ = dart.privateName(page_view, "PageView.onPageChanged");
  var childrenDelegate$ = dart.privateName(page_view, "PageView.childrenDelegate");
  var dragStartBehavior$ = dart.privateName(page_view, "PageView.dragStartBehavior");
  var clipBehavior$ = dart.privateName(page_view, "PageView.clipBehavior");
  page_view.PageView = class PageView extends framework.StatefulWidget {
    get allowImplicitScrolling() {
      return this[allowImplicitScrolling$0];
    }
    set allowImplicitScrolling(value) {
      super.allowImplicitScrolling = value;
    }
    get restorationId() {
      return this[restorationId$];
    }
    set restorationId(value) {
      super.restorationId = value;
    }
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
    get physics() {
      return this[physics$];
    }
    set physics(value) {
      super.physics = value;
    }
    get pageSnapping() {
      return this[pageSnapping$];
    }
    set pageSnapping(value) {
      super.pageSnapping = value;
    }
    get onPageChanged() {
      return this[onPageChanged$];
    }
    set onPageChanged(value) {
      super.onPageChanged = value;
    }
    get childrenDelegate() {
      return this[childrenDelegate$];
    }
    set childrenDelegate(value) {
      super.childrenDelegate = value;
    }
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      super.dragStartBehavior = value;
    }
    get clipBehavior() {
      return this[clipBehavior$];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    createState() {
      return new page_view._PageViewState.new();
    }
  };
  (page_view.PageView.new = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C7 || CT.C7;
    if (scrollDirection == null) dart.nullFailed(L0, 604, 10, "scrollDirection");
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    if (reverse == null) dart.nullFailed(L0, 605, 10, "reverse");
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let pageSnapping = opts && 'pageSnapping' in opts ? opts.pageSnapping : true;
    if (pageSnapping == null) dart.nullFailed(L0, 608, 10, "pageSnapping");
    let onPageChanged = opts && 'onPageChanged' in opts ? opts.onPageChanged : null;
    let children = opts && 'children' in opts ? opts.children : C8 || CT.C8;
    if (children == null) dart.nullFailed(L0, 610, 18, "children");
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C9 || CT.C9;
    if (dragStartBehavior == null) dart.nullFailed(L0, 611, 10, "dragStartBehavior");
    let allowImplicitScrolling = opts && 'allowImplicitScrolling' in opts ? opts.allowImplicitScrolling : false;
    if (allowImplicitScrolling == null) dart.nullFailed(L0, 612, 10, "allowImplicitScrolling");
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C10 || CT.C10;
    if (clipBehavior == null) dart.nullFailed(L0, 614, 10, "clipBehavior");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[scrollDirection$] = scrollDirection;
    this[reverse$] = reverse;
    this[physics$] = physics;
    this[pageSnapping$] = pageSnapping;
    this[onPageChanged$] = onPageChanged;
    this[dragStartBehavior$] = dragStartBehavior;
    this[allowImplicitScrolling$0] = allowImplicitScrolling;
    this[restorationId$] = restorationId;
    this[clipBehavior$] = clipBehavior;
    if (!(allowImplicitScrolling != null)) dart.assertFailed(null, L0, 615, 15, "allowImplicitScrolling != null");
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 616, 15, "clipBehavior != null");
    this[controller$] = (t0 = controller, t0 == null ? page_view._defaultPageController : t0);
    this[childrenDelegate$] = new sliver.SliverChildListDelegate.new(children);
    page_view.PageView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = page_view.PageView.prototype;
  (page_view.PageView.builder = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C7 || CT.C7;
    if (scrollDirection == null) dart.nullFailed(L0, 641, 10, "scrollDirection");
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    if (reverse == null) dart.nullFailed(L0, 642, 10, "reverse");
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let pageSnapping = opts && 'pageSnapping' in opts ? opts.pageSnapping : true;
    if (pageSnapping == null) dart.nullFailed(L0, 645, 10, "pageSnapping");
    let onPageChanged = opts && 'onPageChanged' in opts ? opts.onPageChanged : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    if (itemBuilder == null) dart.nullFailed(L0, 647, 35, "itemBuilder");
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C9 || CT.C9;
    if (dragStartBehavior == null) dart.nullFailed(L0, 649, 10, "dragStartBehavior");
    let allowImplicitScrolling = opts && 'allowImplicitScrolling' in opts ? opts.allowImplicitScrolling : false;
    if (allowImplicitScrolling == null) dart.nullFailed(L0, 650, 10, "allowImplicitScrolling");
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C10 || CT.C10;
    if (clipBehavior == null) dart.nullFailed(L0, 652, 10, "clipBehavior");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[scrollDirection$] = scrollDirection;
    this[reverse$] = reverse;
    this[physics$] = physics;
    this[pageSnapping$] = pageSnapping;
    this[onPageChanged$] = onPageChanged;
    this[dragStartBehavior$] = dragStartBehavior;
    this[allowImplicitScrolling$0] = allowImplicitScrolling;
    this[restorationId$] = restorationId;
    this[clipBehavior$] = clipBehavior;
    if (!(allowImplicitScrolling != null)) dart.assertFailed(null, L0, 653, 15, "allowImplicitScrolling != null");
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 654, 15, "clipBehavior != null");
    this[controller$] = (t0 = controller, t0 == null ? page_view._defaultPageController : t0);
    this[childrenDelegate$] = new sliver.SliverChildBuilderDelegate.new(itemBuilder, {childCount: itemCount});
    page_view.PageView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = page_view.PageView.prototype;
  (page_view.PageView.custom = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C7 || CT.C7;
    if (scrollDirection == null) dart.nullFailed(L0, 743, 10, "scrollDirection");
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    if (reverse == null) dart.nullFailed(L0, 744, 10, "reverse");
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let pageSnapping = opts && 'pageSnapping' in opts ? opts.pageSnapping : true;
    if (pageSnapping == null) dart.nullFailed(L0, 747, 10, "pageSnapping");
    let onPageChanged = opts && 'onPageChanged' in opts ? opts.onPageChanged : null;
    let childrenDelegate = opts && 'childrenDelegate' in opts ? opts.childrenDelegate : null;
    if (childrenDelegate == null) dart.nullFailed(L0, 749, 19, "childrenDelegate");
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C9 || CT.C9;
    if (dragStartBehavior == null) dart.nullFailed(L0, 750, 10, "dragStartBehavior");
    let allowImplicitScrolling = opts && 'allowImplicitScrolling' in opts ? opts.allowImplicitScrolling : false;
    if (allowImplicitScrolling == null) dart.nullFailed(L0, 751, 10, "allowImplicitScrolling");
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C10 || CT.C10;
    if (clipBehavior == null) dart.nullFailed(L0, 753, 10, "clipBehavior");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[scrollDirection$] = scrollDirection;
    this[reverse$] = reverse;
    this[physics$] = physics;
    this[pageSnapping$] = pageSnapping;
    this[onPageChanged$] = onPageChanged;
    this[childrenDelegate$] = childrenDelegate;
    this[dragStartBehavior$] = dragStartBehavior;
    this[allowImplicitScrolling$0] = allowImplicitScrolling;
    this[restorationId$] = restorationId;
    this[clipBehavior$] = clipBehavior;
    if (!(childrenDelegate != null)) dart.assertFailed(null, L0, 754, 15, "childrenDelegate != null");
    if (!(allowImplicitScrolling != null)) dart.assertFailed(null, L0, 755, 15, "allowImplicitScrolling != null");
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 756, 15, "clipBehavior != null");
    this[controller$] = (t0 = controller, t0 == null ? page_view._defaultPageController : t0);
    page_view.PageView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = page_view.PageView.prototype;
  dart.addTypeTests(page_view.PageView);
  dart.addTypeCaches(page_view.PageView);
  dart.setMethodSignature(page_view.PageView, () => ({
    __proto__: dart.getMethods(page_view.PageView.__proto__),
    createState: dart.fnType(page_view._PageViewState, [])
  }));
  dart.setLibraryUri(page_view.PageView, L1);
  dart.setFieldSignature(page_view.PageView, () => ({
    __proto__: dart.getFields(page_view.PageView.__proto__),
    allowImplicitScrolling: dart.finalFieldType(core.bool),
    restorationId: dart.finalFieldType(dart.nullable(core.String)),
    scrollDirection: dart.finalFieldType(basic_types.Axis),
    reverse: dart.finalFieldType(core.bool),
    controller: dart.finalFieldType(page_view.PageController),
    physics: dart.finalFieldType(dart.nullable(scroll_physics.ScrollPhysics)),
    pageSnapping: dart.finalFieldType(core.bool),
    onPageChanged: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.int]))),
    childrenDelegate: dart.finalFieldType(sliver.SliverChildDelegate),
    dragStartBehavior: dart.finalFieldType(recognizer.DragStartBehavior),
    clipBehavior: dart.finalFieldType(ui.Clip)
  }));
  var _lastReportedPage = dart.privateName(page_view, "_lastReportedPage");
  var C11;
  var _getDirection = dart.privateName(page_view, "_getDirection");
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C14;
  var C15;
  var C13;
  var C12;
  var C18;
  var C19;
  var C20;
  var C21;
  var C22;
  var C23;
  var C17;
  var C16;
  var C26;
  var C27;
  var C28;
  var C29;
  var C30;
  var C31;
  var C25;
  var C24;
  var C34;
  var C35;
  var C33;
  var C32;
  page_view._PageViewState = class _PageViewState extends framework.State$(page_view.PageView) {
    initState() {
      super.initState();
      this[_lastReportedPage] = this.widget.controller.initialPage;
    }
    [_getDirection](context) {
      if (context == null) dart.nullFailed(L0, 845, 44, "context");
      switch (this.widget.scrollDirection) {
        case C7 || CT.C7:
        {
          if (!dart.test(debug.debugCheckHasDirectionality(context))) dart.assertFailed(null, L0, 848, 16, "debugCheckHasDirectionality(context)");
          let textDirection = basic.Directionality.of(context);
          let axisDirection = basic_types.textDirectionToAxisDirection(textDirection);
          return dart.test(this.widget.reverse) ? basic_types.flipAxisDirection(axisDirection) : axisDirection;
        }
        case C11 || CT.C11:
        {
          return dart.test(this.widget.reverse) ? basic_types.AxisDirection.up : basic_types.AxisDirection.down;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 858, 29, "context");
      let axisDirection = this[_getDirection](context);
      let physics = new page_view._ForceImplicitScrollPhysics.new({allowImplicitScrolling: this.widget.allowImplicitScrolling}).applyTo(dart.test(this.widget.pageSnapping) ? page_view._kPagePhysics.applyTo(this.widget.physics) : this.widget.physics);
      return new (NotificationListenerOfScrollNotification()).new({onNotification: dart.fn(notification => {
          if (notification == null) dart.nullFailed(L0, 867, 43, "notification");
          if (notification.depth === 0 && this.widget.onPageChanged != null && scroll_notification.ScrollUpdateNotification.is(notification)) {
            let metrics = page_view.PageMetrics.as(notification.metrics);
            let currentPage = dart.nullCheck(metrics.page)[$round]();
            if (currentPage !== this[_lastReportedPage]) {
              this[_lastReportedPage] = currentPage;
              dart.nullCheck(this.widget.onPageChanged)(currentPage);
            }
          }
          return false;
        }, ScrollNotificationTobool()), child: new scrollable.Scrollable.new({dragStartBehavior: this.widget.dragStartBehavior, axisDirection: axisDirection, controller: this.widget.controller, physics: physics, restorationId: this.widget.restorationId, viewportBuilder: dart.fn((context, position) => {
            if (context == null) dart.nullFailed(L0, 884, 40, "context");
            if (position == null) dart.nullFailed(L0, 884, 64, "position");
            return new viewport.Viewport.new({cacheExtent: dart.test(this.widget.allowImplicitScrolling) ? 1.0 : 0.0, cacheExtentStyle: viewport$.CacheExtentStyle.viewport, axisDirection: axisDirection, offset: position, clipBehavior: this.widget.clipBehavior, slivers: JSArrayOfWidget().of([new sliver_fill.SliverFillViewport.new({viewportFraction: this.widget.controller.viewportFraction, delegate: this.widget.childrenDelegate, $creationLocationd_0dea112b090073317d4: C12 || CT.C12})]), $creationLocationd_0dea112b090073317d4: C16 || CT.C16});
          }, BuildContextAndViewportOffsetToViewport()), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32});
    }
    debugFillProperties(description) {
      if (description == null) dart.nullFailed(L0, 907, 56, "description");
      super.debugFillProperties(description);
      description.add(new (EnumPropertyOfAxis()).new("scrollDirection", this.widget.scrollDirection));
      description.add(new diagnostics.FlagProperty.new("reverse", {value: this.widget.reverse, ifTrue: "reversed"}));
      description.add(new (DiagnosticsPropertyOfPageController()).new("controller", this.widget.controller, {showName: false}));
      description.add(new (DiagnosticsPropertyOfScrollPhysics()).new("physics", this.widget.physics, {showName: false}));
      description.add(new diagnostics.FlagProperty.new("pageSnapping", {value: this.widget.pageSnapping, ifFalse: "snapping disabled"}));
      description.add(new diagnostics.FlagProperty.new("allowImplicitScrolling", {value: this.widget.allowImplicitScrolling, ifTrue: "allow implicit scrolling"}));
    }
  };
  (page_view._PageViewState.new = function() {
    this[_lastReportedPage] = 0;
    page_view._PageViewState.__proto__.new.call(this);
    ;
  }).prototype = page_view._PageViewState.prototype;
  dart.addTypeTests(page_view._PageViewState);
  dart.addTypeCaches(page_view._PageViewState);
  dart.setMethodSignature(page_view._PageViewState, () => ({
    __proto__: dart.getMethods(page_view._PageViewState.__proto__),
    [_getDirection]: dart.fnType(basic_types.AxisDirection, [framework.BuildContext]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(page_view._PageViewState, L1);
  dart.setFieldSignature(page_view._PageViewState, () => ({
    __proto__: dart.getFields(page_view._PageViewState.__proto__),
    [_lastReportedPage]: dart.fieldType(core.int)
  }));
  var ScrollPhysics_parent = dart.privateName(scroll_physics, "ScrollPhysics.parent");
  var C36;
  dart.defineLazy(page_view, {
    /*page_view._defaultPageController*/get _defaultPageController() {
      return new page_view.PageController.new();
    },
    /*page_view._kPagePhysics*/get _kPagePhysics() {
      return C36 || CT.C36;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/widgets/page_view.dart", {
    "package:flutter/src/widgets/page_view.dart": page_view
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["page_view.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/page_view.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__page_view: page_view
  };
}));

//# sourceMappingURL=page_view.dart.lib.js.map
