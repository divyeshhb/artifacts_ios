define(['dart_sdk', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/rendering/viewport_offset.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/painting/matrix_utils.dart', 'packages/flutter/src/animation/curves.dart'], (function load__packages__flutter__src__widgets__single_child_scroll_view_dart(dart_sdk, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__rendering__viewport_offset$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__painting__matrix_utils$46dart, packages__flutter__src__animation__curves$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const primary_scroll_controller = packages__flutter__src__widgets__widget_span$46dart.src__widgets__primary_scroll_controller;
  const scrollable$ = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scrollable;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const scroll_controller = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scroll_controller;
  const scroll_physics = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scroll_physics;
  const viewport_offset = packages__flutter__src__rendering__viewport_offset$46dart.src__rendering__viewport_offset;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const viewport = packages__flutter__src__rendering__sliver$46dart.src__rendering__viewport;
  const matrix_utils = packages__flutter__src__painting__matrix_utils$46dart.src__painting__matrix_utils;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  var single_child_scroll_view = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var BuildContextAndViewportOffsetTo_SingleChildViewport = () => (BuildContextAndViewportOffsetTo_SingleChildViewport = dart.constFn(dart.fnType(single_child_scroll_view._SingleChildViewport, [framework.BuildContext, viewport_offset.ViewportOffset])))();
  var PaintingContextAndOffsetTovoid = () => (PaintingContextAndOffsetTovoid = dart.constFn(dart.fnType(dart.void, [object.PaintingContext, ui.Offset])))();
  var RenderObjectN = () => (RenderObjectN = dart.constFn(dart.nullable(object.RenderObject)))();
  var OffsetN = () => (OffsetN = dart.constFn(dart.nullable(ui.Offset)))();
  var BoxHitTestResultAndOffsetNTobool = () => (BoxHitTestResultAndOffsetNTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, OffsetN()])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/single_child_scroll_view.dart";
  var L1 = "package:flutter/src/widgets/single_child_scroll_view.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.vertical",
        index: 1
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name$]: "DragStartBehavior.start",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name$0]: "Clip.hardEdge",
        index: 1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 26,
        [_Location_line]: 318,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 45,
        [_Location_line]: 318,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], _LocationL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 318,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/single_child_scroll_view.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "axisDirection",
        [_Location_column]: 11,
        [_Location_line]: 330,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "offset",
        [_Location_column]: 11,
        [_Location_line]: 331,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 332,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipBehavior",
        [_Location_column]: 11,
        [_Location_line]: 333,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12], _LocationL());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 329,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/single_child_scroll_view.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dragStartBehavior",
        [_Location_column]: 7,
        [_Location_line]: 323,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "axisDirection",
        [_Location_column]: 7,
        [_Location_line]: 324,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 7,
        [_Location_line]: 325,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 7,
        [_Location_line]: 326,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "restorationId",
        [_Location_column]: 7,
        [_Location_line]: 327,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "viewportBuilder",
        [_Location_column]: 7,
        [_Location_line]: 328,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], _LocationL());
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 322,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/single_child_scroll_view.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 38,
        [_Location_line]: 338,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23], _LocationL());
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 338,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/single_child_scroll_view.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.down",
        index: 2
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.horizontal",
        index: 0
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.up",
        index: 0
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.left",
        index: 3
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.right",
        index: 1
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.25,
        [Cubic_b]: 0.1,
        [Cubic_a]: 0.25
      });
    }
  }, false);
  var _name = dart.privateName(basic_types, "_name");
  var C0;
  var _name$ = dart.privateName(recognizer, "_name");
  var C1;
  var _name$0 = dart.privateName(ui, "_name");
  var C2;
  var _getDirection = dart.privateName(single_child_scroll_view, "_getDirection");
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C5;
  var C6;
  var C4;
  var C3;
  var C9;
  var C10;
  var C11;
  var C12;
  var C8;
  var C7;
  var C15;
  var C16;
  var C17;
  var C18;
  var C19;
  var C20;
  var C14;
  var C13;
  var C23;
  var C22;
  var C21;
  var scrollDirection$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.scrollDirection");
  var reverse$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.reverse");
  var padding$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.padding");
  var controller$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.controller");
  var primary$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.primary");
  var physics$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.physics");
  var child$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.child");
  var dragStartBehavior$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.dragStartBehavior");
  var clipBehavior$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.clipBehavior");
  var restorationId$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.restorationId");
  single_child_scroll_view.SingleChildScrollView = class SingleChildScrollView extends framework.StatelessWidget {
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
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
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
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
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
    get restorationId() {
      return this[restorationId$];
    }
    set restorationId(value) {
      super.restorationId = value;
    }
    [_getDirection](context) {
      if (context == null) dart.nullFailed(L0, 309, 44, "context");
      return basic.getAxisDirectionFromAxisReverseAndDirectionality(context, this.scrollDirection, this.reverse);
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 314, 29, "context");
      let axisDirection = this[_getDirection](context);
      let contents = this.child;
      if (this.padding != null) contents = new basic.Padding.new({padding: dart.nullCheck(this.padding), child: contents, $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
      let scrollController = dart.test(this.primary) ? primary_scroll_controller.PrimaryScrollController.of(context) : this.controller;
      let scrollable = new scrollable$.Scrollable.new({dragStartBehavior: this.dragStartBehavior, axisDirection: axisDirection, controller: scrollController, physics: this.physics, restorationId: this.restorationId, viewportBuilder: dart.fn((context, offset) => {
          if (context == null) dart.nullFailed(L0, 328, 38, "context");
          if (offset == null) dart.nullFailed(L0, 328, 62, "offset");
          return new single_child_scroll_view._SingleChildViewport.new({axisDirection: axisDirection, offset: offset, child: contents, clipBehavior: this.clipBehavior, $creationLocationd_0dea112b090073317d4: C7 || CT.C7});
        }, BuildContextAndViewportOffsetTo_SingleChildViewport()), $creationLocationd_0dea112b090073317d4: C13 || CT.C13});
      return dart.test(this.primary) && scrollController != null ? new primary_scroll_controller.PrimaryScrollController.none({child: scrollable, $creationLocationd_0dea112b090073317d4: C21 || CT.C21}) : scrollable;
    }
  };
  (single_child_scroll_view.SingleChildScrollView.new = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C0 || CT.C0;
    if (scrollDirection == null) dart.nullFailed(L0, 214, 10, "scrollDirection");
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    if (reverse == null) dart.nullFailed(L0, 215, 10, "reverse");
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C1 || CT.C1;
    if (dragStartBehavior == null) dart.nullFailed(L0, 221, 10, "dragStartBehavior");
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C2 || CT.C2;
    if (clipBehavior == null) dart.nullFailed(L0, 222, 10, "clipBehavior");
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[scrollDirection$] = scrollDirection;
    this[reverse$] = reverse;
    this[padding$] = padding;
    this[physics$] = physics;
    this[controller$] = controller;
    this[child$] = child;
    this[dragStartBehavior$] = dragStartBehavior;
    this[clipBehavior$] = clipBehavior;
    this[restorationId$] = restorationId;
    if (!(scrollDirection != null)) dart.assertFailed(null, L0, 224, 15, "scrollDirection != null");
    if (!(dragStartBehavior != null)) dart.assertFailed(null, L0, 225, 15, "dragStartBehavior != null");
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 226, 15, "clipBehavior != null");
    if (!!(controller != null && dart.equals(primary, true))) dart.assertFailed("Primary ScrollViews obtain their ScrollController via inheritance from a PrimaryScrollController widget. " + "You cannot both set primary to true and pass an explicit controller.", L0, 227, 15, "!(controller != null && primary == true)");
    this[primary$] = (t0 = primary, t0 == null ? controller == null && scrollDirection == basic_types.Axis.vertical : t0);
    single_child_scroll_view.SingleChildScrollView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = single_child_scroll_view.SingleChildScrollView.prototype;
  dart.addTypeTests(single_child_scroll_view.SingleChildScrollView);
  dart.addTypeCaches(single_child_scroll_view.SingleChildScrollView);
  dart.setMethodSignature(single_child_scroll_view.SingleChildScrollView, () => ({
    __proto__: dart.getMethods(single_child_scroll_view.SingleChildScrollView.__proto__),
    [_getDirection]: dart.fnType(basic_types.AxisDirection, [framework.BuildContext]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(single_child_scroll_view.SingleChildScrollView, L1);
  dart.setFieldSignature(single_child_scroll_view.SingleChildScrollView, () => ({
    __proto__: dart.getFields(single_child_scroll_view.SingleChildScrollView.__proto__),
    scrollDirection: dart.finalFieldType(basic_types.Axis),
    reverse: dart.finalFieldType(core.bool),
    padding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    controller: dart.finalFieldType(dart.nullable(scroll_controller.ScrollController)),
    primary: dart.finalFieldType(core.bool),
    physics: dart.finalFieldType(dart.nullable(scroll_physics.ScrollPhysics)),
    child: dart.finalFieldType(dart.nullable(framework.Widget)),
    dragStartBehavior: dart.finalFieldType(recognizer.DragStartBehavior),
    clipBehavior: dart.finalFieldType(ui.Clip),
    restorationId: dart.finalFieldType(dart.nullable(core.String))
  }));
  var C24;
  var axisDirection$ = dart.privateName(single_child_scroll_view, "_SingleChildViewport.axisDirection");
  var offset$ = dart.privateName(single_child_scroll_view, "_SingleChildViewport.offset");
  var clipBehavior$0 = dart.privateName(single_child_scroll_view, "_SingleChildViewport.clipBehavior");
  single_child_scroll_view._SingleChildViewport = class _SingleChildViewport extends framework.SingleChildRenderObjectWidget {
    get axisDirection() {
      return this[axisDirection$];
    }
    set axisDirection(value) {
      super.axisDirection = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get clipBehavior() {
      return this[clipBehavior$0];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    createRenderObject(context) {
      if (context == null) dart.nullFailed(L0, 359, 62, "context");
      return new single_child_scroll_view._RenderSingleChildViewport.new({axisDirection: this.axisDirection, offset: this.offset, clipBehavior: this.clipBehavior});
    }
    updateRenderObject(context, renderObject) {
      let t0;
      if (context == null) dart.nullFailed(L0, 368, 40, "context");
      single_child_scroll_view._RenderSingleChildViewport.as(renderObject);
      if (renderObject == null) dart.nullFailed(L0, 368, 76, "renderObject");
      t0 = renderObject;
      (() => {
        t0.axisDirection = this.axisDirection;
        t0.offset = this.offset;
        t0.clipBehavior = this.clipBehavior;
        return t0;
      })();
    }
  };
  (single_child_scroll_view._SingleChildViewport.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : C24 || CT.C24;
    if (axisDirection == null) dart.nullFailed(L0, 346, 10, "axisDirection");
    let offset = opts && 'offset' in opts ? opts.offset : null;
    if (offset == null) dart.nullFailed(L0, 347, 19, "offset");
    let child = opts && 'child' in opts ? opts.child : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
    if (clipBehavior == null) dart.nullFailed(L0, 349, 19, "clipBehavior");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[axisDirection$] = axisDirection;
    this[offset$] = offset;
    this[clipBehavior$0] = clipBehavior;
    if (!(axisDirection != null)) dart.assertFailed(null, L0, 350, 15, "axisDirection != null");
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 351, 15, "clipBehavior != null");
    single_child_scroll_view._SingleChildViewport.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = single_child_scroll_view._SingleChildViewport.prototype;
  dart.addTypeTests(single_child_scroll_view._SingleChildViewport);
  dart.addTypeCaches(single_child_scroll_view._SingleChildViewport);
  dart.setMethodSignature(single_child_scroll_view._SingleChildViewport, () => ({
    __proto__: dart.getMethods(single_child_scroll_view._SingleChildViewport.__proto__),
    createRenderObject: dart.fnType(single_child_scroll_view._RenderSingleChildViewport, [framework.BuildContext])
  }));
  dart.setLibraryUri(single_child_scroll_view._SingleChildViewport, L1);
  dart.setFieldSignature(single_child_scroll_view._SingleChildViewport, () => ({
    __proto__: dart.getFields(single_child_scroll_view._SingleChildViewport.__proto__),
    axisDirection: dart.finalFieldType(basic_types.AxisDirection),
    offset: dart.finalFieldType(viewport_offset.ViewportOffset),
    clipBehavior: dart.finalFieldType(ui.Clip)
  }));
  var _clipBehavior = dart.privateName(single_child_scroll_view, "_clipBehavior");
  var _clipRectLayer = dart.privateName(single_child_scroll_view, "_clipRectLayer");
  var _axisDirection = dart.privateName(single_child_scroll_view, "_axisDirection");
  var _offset = dart.privateName(single_child_scroll_view, "_offset");
  var _cacheExtent = dart.privateName(single_child_scroll_view, "_cacheExtent");
  var _hasScrolled = dart.privateName(single_child_scroll_view, "_hasScrolled");
  var C25;
  var _viewportExtent = dart.privateName(single_child_scroll_view, "_viewportExtent");
  var _minScrollExtent = dart.privateName(single_child_scroll_view, "_minScrollExtent");
  var _maxScrollExtent = dart.privateName(single_child_scroll_view, "_maxScrollExtent");
  var _getInnerConstraints = dart.privateName(single_child_scroll_view, "_getInnerConstraints");
  var _paintOffsetForPosition = dart.privateName(single_child_scroll_view, "_paintOffsetForPosition");
  var _paintOffset = dart.privateName(single_child_scroll_view, "_paintOffset");
  var C26;
  var C27;
  var C28;
  var _shouldClipAtPaintOffset = dart.privateName(single_child_scroll_view, "_shouldClipAtPaintOffset");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C29;
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  var C30;
  const RenderBox_RenderObjectWithChildMixin$36 = class RenderBox_RenderObjectWithChildMixin extends box.RenderBox {};
  (RenderBox_RenderObjectWithChildMixin$36.new = function() {
    object.RenderObjectWithChildMixin$(box.RenderBox)[dart.mixinNew].call(this);
    RenderBox_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderObjectWithChildMixin$36, object.RenderObjectWithChildMixin$(box.RenderBox));
  single_child_scroll_view._RenderSingleChildViewport = class _RenderSingleChildViewport extends RenderBox_RenderObjectWithChildMixin$36 {
    get axisDirection() {
      return this[_axisDirection];
    }
    set axisDirection(value) {
      if (value == null) dart.nullFailed(L0, 397, 35, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 398, 12, "value != null");
      if (dart.equals(value, this[_axisDirection])) return;
      this[_axisDirection] = value;
      this.markNeedsLayout();
    }
    get axis() {
      return basic_types.axisDirectionToAxis(this.axisDirection);
    }
    get offset() {
      return this[_offset];
    }
    set offset(value) {
      if (value == null) dart.nullFailed(L0, 409, 29, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 410, 12, "value != null");
      if (dart.equals(value, this[_offset])) return;
      if (dart.test(this.attached)) this[_offset].removeListener(dart.bind(this, _hasScrolled));
      this[_offset] = value;
      if (dart.test(this.attached)) this[_offset].addListener(dart.bind(this, _hasScrolled));
      this.markNeedsLayout();
    }
    get cacheExtent() {
      return this[_cacheExtent];
    }
    set cacheExtent(value) {
      if (value == null) dart.nullFailed(L0, 424, 26, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 425, 12, "value != null");
      if (value == this[_cacheExtent]) return;
      this[_cacheExtent] = value;
      this.markNeedsLayout();
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (value == null) dart.nullFailed(L0, 437, 25, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 438, 12, "value != null");
      if (!dart.equals(value, this[_clipBehavior])) {
        this[_clipBehavior] = value;
        this.markNeedsPaint();
        this.markNeedsSemanticsUpdate();
      }
    }
    [_hasScrolled]() {
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    setupParentData(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 452, 37, "child");
      if (!object.ParentData.is(child.parentData)) child.parentData = new object.ParentData.new();
    }
    attach(owner) {
      object.PipelineOwner.as(owner);
      if (owner == null) dart.nullFailed(L0, 460, 29, "owner");
      super.attach(owner);
      this[_offset].addListener(dart.bind(this, _hasScrolled));
    }
    detach() {
      this[_offset].removeListener(dart.bind(this, _hasScrolled));
      super.detach();
    }
    get isRepaintBoundary() {
      return true;
    }
    get [_viewportExtent]() {
      if (!dart.test(this.hasSize)) dart.assertFailed(null, L0, 475, 12, "hasSize");
      switch (this.axis) {
        case C25 || CT.C25:
        {
          return this.size.width;
        }
        case C0 || CT.C0:
        {
          return this.size.height;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    get [_minScrollExtent]() {
      if (!dart.test(this.hasSize)) dart.assertFailed(null, L0, 485, 12, "hasSize");
      return 0.0;
    }
    get [_maxScrollExtent]() {
      if (!dart.test(this.hasSize)) dart.assertFailed(null, L0, 490, 12, "hasSize");
      if (this.child == null) return 0.0;
      switch (this.axis) {
        case C25 || CT.C25:
        {
          return math.max(core.double, 0.0, dart.notNull(dart.nullCheck(this.child).size.width) - dart.notNull(this.size.width));
        }
        case C0 || CT.C0:
        {
          return math.max(core.double, 0.0, dart.notNull(dart.nullCheck(this.child).size.height) - dart.notNull(this.size.height));
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    [_getInnerConstraints](constraints) {
      if (constraints == null) dart.nullFailed(L0, 501, 54, "constraints");
      switch (this.axis) {
        case C25 || CT.C25:
        {
          return constraints.heightConstraints();
        }
        case C0 || CT.C0:
        {
          return constraints.widthConstraints();
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    computeMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 511, 42, "height");
      if (this.child != null) return dart.nullCheck(this.child).getMinIntrinsicWidth(height);
      return 0.0;
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 518, 42, "height");
      if (this.child != null) return dart.nullCheck(this.child).getMaxIntrinsicWidth(height);
      return 0.0;
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 525, 43, "width");
      if (this.child != null) return dart.nullCheck(this.child).getMinIntrinsicHeight(width);
      return 0.0;
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 532, 43, "width");
      if (this.child != null) return dart.nullCheck(this.child).getMaxIntrinsicHeight(width);
      return 0.0;
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 544, 40, "constraints");
      if (this.child == null) {
        return constraints.smallest;
      }
      let childSize = dart.nullCheck(this.child).getDryLayout(this[_getInnerConstraints](constraints));
      return constraints.constrain(childSize);
    }
    performLayout() {
      let constraints = this.constraints;
      if (this.child == null) {
        this.size = constraints.smallest;
      } else {
        dart.nullCheck(this.child).layout(this[_getInnerConstraints](constraints), {parentUsesSize: true});
        this.size = constraints.constrain(dart.nullCheck(this.child).size);
      }
      this.offset.applyViewportDimension(this[_viewportExtent]);
      this.offset.applyContentDimensions(this[_minScrollExtent], this[_maxScrollExtent]);
    }
    get [_paintOffset]() {
      return this[_paintOffsetForPosition](this.offset.pixels);
    }
    [_paintOffsetForPosition](position) {
      if (position == null) dart.nullFailed(L0, 568, 41, "position");
      if (!(this.axisDirection != null)) dart.assertFailed(null, L0, 569, 12, "axisDirection != null");
      switch (this.axisDirection) {
        case C26 || CT.C26:
        {
          return new ui.Offset.new(0.0, dart.notNull(position) - dart.notNull(dart.nullCheck(this.child).size.height) + dart.notNull(this.size.height));
        }
        case C24 || CT.C24:
        {
          return new ui.Offset.new(0.0, -dart.notNull(position));
        }
        case C27 || CT.C27:
        {
          return new ui.Offset.new(dart.notNull(position) - dart.notNull(dart.nullCheck(this.child).size.width) + dart.notNull(this.size.width), 0.0);
        }
        case C28 || CT.C28:
        {
          return new ui.Offset.new(-dart.notNull(position), 0.0);
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    [_shouldClipAtPaintOffset](paintOffset) {
      if (paintOffset == null) dart.nullFailed(L0, 582, 40, "paintOffset");
      if (!(this.child != null)) dart.assertFailed(null, L0, 583, 12, "child != null");
      return dart.notNull(paintOffset.dx) < 0 || dart.notNull(paintOffset.dy) < 0 || dart.notNull(paintOffset.dx) + dart.notNull(dart.nullCheck(this.child).size.width) > dart.notNull(this.size.width) || dart.notNull(paintOffset.dy) + dart.notNull(dart.nullCheck(this.child).size.height) > dart.notNull(this.size.height);
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 591, 30, "context");
      if (offset == null) dart.nullFailed(L0, 591, 46, "offset");
      if (this.child != null) {
        let paintOffset = this[_paintOffset];
        const paintContents = (context, offset) => {
          if (context == null) dart.nullFailed(L0, 595, 42, "context");
          if (offset == null) dart.nullFailed(L0, 595, 58, "offset");
          context.paintChild(dart.nullCheck(this.child), offset['+'](paintOffset));
        };
        dart.fn(paintContents, PaintingContextAndOffsetTovoid());
        if (dart.test(this[_shouldClipAtPaintOffset](paintOffset)) && !dart.equals(this.clipBehavior, ui.Clip.none)) {
          this[_clipRectLayer] = context.pushClipRect(this.needsCompositing, offset, ui.Offset.zero['&'](this.size), paintContents, {clipBehavior: this.clipBehavior, oldLayer: this[_clipRectLayer]});
        } else {
          this[_clipRectLayer] = null;
          paintContents(context, offset);
        }
      }
    }
    applyPaintTransform(child, transform) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L0, 612, 38, "child");
      if (transform == null) dart.nullFailed(L0, 612, 53, "transform");
      let paintOffset = this[_paintOffset];
      transform.translate(paintOffset.dx, paintOffset.dy);
    }
    describeApproximatePaintClip(child) {
      RenderObjectN().as(child);
      if (child != null && dart.test(this[_shouldClipAtPaintOffset](this[_paintOffset]))) return ui.Offset.zero['&'](this.size);
      return null;
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L0, 625, 41, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 625, 67, "position");
      if (this.child != null) {
        return result.addWithPaintOffset({offset: this[_paintOffset], position: position, hitTest: dart.fn((result, transformed) => {
            if (result == null) dart.nullFailed(L0, 630, 36, "result");
            if (!dart.equals(transformed, position['+'](this[_paintOffset]._negate()))) dart.assertFailed(null, L0, 631, 18, "transformed == position + -_paintOffset");
            return dart.nullCheck(this.child).hitTest(result, {position: dart.nullCheck(transformed)});
          }, BoxHitTestResultAndOffsetNTobool())});
      }
      return false;
    }
    getOffsetToReveal(target, alignment, opts) {
      if (target == null) dart.nullFailed(L0, 640, 49, "target");
      if (alignment == null) dart.nullFailed(L0, 640, 64, "alignment");
      let rect = opts && 'rect' in opts ? opts.rect : null;
      rect == null ? rect = target.paintBounds : null;
      if (!box.RenderBox.is(target)) return new viewport.RevealedOffset.new({offset: this.offset.pixels, rect: rect});
      let targetBox = target;
      let transform = targetBox.getTransformTo(this.child);
      let bounds = matrix_utils.MatrixUtils.transformRect(transform, rect);
      let contentSize = dart.nullCheck(this.child).size;
      let leadingScrollOffset = null;
      let targetMainAxisExtent = null;
      let mainAxisExtent = null;
      if (!(this.axisDirection != null)) dart.assertFailed(null, L0, 654, 12, "axisDirection != null");
      switch (this.axisDirection) {
        case C26 || CT.C26:
        {
          mainAxisExtent = this.size.height;
          leadingScrollOffset = dart.notNull(contentSize.height) - dart.notNull(bounds.bottom);
          targetMainAxisExtent = bounds.height;
          break;
        }
        case C28 || CT.C28:
        {
          mainAxisExtent = this.size.width;
          leadingScrollOffset = bounds.left;
          targetMainAxisExtent = bounds.width;
          break;
        }
        case C24 || CT.C24:
        {
          mainAxisExtent = this.size.height;
          leadingScrollOffset = bounds.top;
          targetMainAxisExtent = bounds.height;
          break;
        }
        case C27 || CT.C27:
        {
          mainAxisExtent = this.size.width;
          leadingScrollOffset = dart.notNull(contentSize.width) - dart.notNull(bounds.right);
          targetMainAxisExtent = bounds.width;
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      let targetOffset = dart.notNull(leadingScrollOffset) - (dart.notNull(mainAxisExtent) - dart.notNull(targetMainAxisExtent)) * dart.notNull(alignment);
      let targetRect = bounds.shift(this[_paintOffsetForPosition](targetOffset));
      return new viewport.RevealedOffset.new({offset: targetOffset, rect: targetRect});
    }
    showOnScreen(opts) {
      let descendant = opts && 'descendant' in opts ? opts.descendant : null;
      let rect = opts && 'rect' in opts ? opts.rect : null;
      let duration = opts && 'duration' in opts ? opts.duration : C29 || CT.C29;
      if (duration == null) dart.nullFailed(L0, 687, 14, "duration");
      let curve = opts && 'curve' in opts ? opts.curve : C30 || CT.C30;
      if (curve == null) dart.nullFailed(L0, 688, 11, "curve");
      if (!dart.test(this.offset.allowImplicitScrolling)) {
        return super.showOnScreen({descendant: descendant, rect: rect, duration: duration, curve: curve});
      }
      let newRect = viewport.RenderViewportBase.showInViewport({descendant: descendant, viewport: this, offset: this.offset, rect: rect, duration: duration, curve: curve});
      super.showOnScreen({rect: newRect, duration: duration, curve: curve});
    }
    describeSemanticsClip(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 715, 43, "child");
      if (!(this.axis != null)) dart.assertFailed(null, L0, 716, 12, "axis != null");
      switch (this.axis) {
        case C0 || CT.C0:
        {
          return new ui.Rect.fromLTRB(this.semanticBounds.left, dart.notNull(this.semanticBounds.top) - dart.notNull(this.cacheExtent), this.semanticBounds.right, dart.notNull(this.semanticBounds.bottom) + dart.notNull(this.cacheExtent));
        }
        case C25 || CT.C25:
        {
          return new ui.Rect.fromLTRB(dart.notNull(this.semanticBounds.left) - dart.notNull(this.cacheExtent), this.semanticBounds.top, dart.notNull(this.semanticBounds.right) + dart.notNull(this.cacheExtent), this.semanticBounds.bottom);
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
  };
  (single_child_scroll_view._RenderSingleChildViewport.new = function(opts) {
    let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : C24 || CT.C24;
    if (axisDirection == null) dart.nullFailed(L0, 379, 19, "axisDirection");
    let offset = opts && 'offset' in opts ? opts.offset : null;
    if (offset == null) dart.nullFailed(L0, 380, 29, "offset");
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : 250;
    if (cacheExtent == null) dart.nullFailed(L0, 381, 12, "cacheExtent");
    let child = opts && 'child' in opts ? opts.child : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
    if (clipBehavior == null) dart.nullFailed(L0, 383, 19, "clipBehavior");
    this[_clipBehavior] = ui.Clip.none;
    this[_clipRectLayer] = null;
    if (!(axisDirection != null)) dart.assertFailed(null, L0, 384, 15, "axisDirection != null");
    if (!(offset != null)) dart.assertFailed(null, L0, 385, 15, "offset != null");
    if (!(cacheExtent != null)) dart.assertFailed(null, L0, 386, 15, "cacheExtent != null");
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 387, 15, "clipBehavior != null");
    this[_axisDirection] = axisDirection;
    this[_offset] = offset;
    this[_cacheExtent] = cacheExtent;
    this[_clipBehavior] = clipBehavior;
    single_child_scroll_view._RenderSingleChildViewport.__proto__.new.call(this);
    this.child = child;
  }).prototype = single_child_scroll_view._RenderSingleChildViewport.prototype;
  dart.addTypeTests(single_child_scroll_view._RenderSingleChildViewport);
  dart.addTypeCaches(single_child_scroll_view._RenderSingleChildViewport);
  single_child_scroll_view._RenderSingleChildViewport[dart.implements] = () => [viewport.RenderAbstractViewport];
  dart.setMethodSignature(single_child_scroll_view._RenderSingleChildViewport, () => ({
    __proto__: dart.getMethods(single_child_scroll_view._RenderSingleChildViewport.__proto__),
    [_hasScrolled]: dart.fnType(dart.void, []),
    [_getInnerConstraints]: dart.fnType(box.BoxConstraints, [box.BoxConstraints]),
    [_paintOffsetForPosition]: dart.fnType(ui.Offset, [core.double]),
    [_shouldClipAtPaintOffset]: dart.fnType(core.bool, [ui.Offset]),
    getOffsetToReveal: dart.fnType(viewport.RevealedOffset, [object.RenderObject, core.double], {rect: dart.nullable(ui.Rect)}, {}),
    describeSemanticsClip: dart.fnType(ui.Rect, [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(single_child_scroll_view._RenderSingleChildViewport, () => ({
    __proto__: dart.getGetters(single_child_scroll_view._RenderSingleChildViewport.__proto__),
    axisDirection: basic_types.AxisDirection,
    axis: basic_types.Axis,
    offset: viewport_offset.ViewportOffset,
    cacheExtent: core.double,
    clipBehavior: ui.Clip,
    [_viewportExtent]: core.double,
    [_minScrollExtent]: core.double,
    [_maxScrollExtent]: core.double,
    [_paintOffset]: ui.Offset
  }));
  dart.setSetterSignature(single_child_scroll_view._RenderSingleChildViewport, () => ({
    __proto__: dart.getSetters(single_child_scroll_view._RenderSingleChildViewport.__proto__),
    axisDirection: basic_types.AxisDirection,
    offset: viewport_offset.ViewportOffset,
    cacheExtent: core.double,
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(single_child_scroll_view._RenderSingleChildViewport, L1);
  dart.setFieldSignature(single_child_scroll_view._RenderSingleChildViewport, () => ({
    __proto__: dart.getFields(single_child_scroll_view._RenderSingleChildViewport.__proto__),
    [_axisDirection]: dart.fieldType(basic_types.AxisDirection),
    [_offset]: dart.fieldType(viewport_offset.ViewportOffset),
    [_cacheExtent]: dart.fieldType(core.double),
    [_clipBehavior]: dart.fieldType(ui.Clip),
    [_clipRectLayer]: dart.fieldType(dart.nullable(layer.ClipRectLayer))
  }));
  dart.trackLibraries("packages/flutter/src/widgets/single_child_scroll_view.dart", {
    "package:flutter/src/widgets/single_child_scroll_view.dart": single_child_scroll_view
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["single_child_scroll_view.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/single_child_scroll_view.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__single_child_scroll_view: single_child_scroll_view
  };
}));

//# sourceMappingURL=single_child_scroll_view.dart.lib.js.map
