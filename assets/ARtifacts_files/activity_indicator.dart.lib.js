define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/cupertino/text_theme.dart', 'packages/flutter/src/rendering/custom_paint.dart', 'packages/flutter/src/animation/listener_helpers.dart'], (function load__packages__flutter__src__cupertino__activity_indicator_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__cupertino__text_theme$46dart, packages__flutter__src__rendering__custom_paint$46dart, packages__flutter__src__animation__listener_helpers$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const ticker_provider = packages__flutter__src__widgets__widget_span$46dart.src__widgets__ticker_provider;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const colors = packages__flutter__src__cupertino__text_theme$46dart.src__cupertino__colors;
  const custom_paint = packages__flutter__src__rendering__custom_paint$46dart.src__rendering__custom_paint;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  var activity_indicator = Object.create(dart.library);
  var $length = dartx.length;
  var $floor = dartx.floor;
  var $modulo = dartx['%'];
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/activity_indicator.dart";
  var L1 = "package:flutter/src/cupertino/activity_indicator.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000000
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 9,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3], _LocationL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 118,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/activity_indicator.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], _LocationL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 115,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/activity_indicator.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293651445.0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282137668.0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: colors.CupertinoDynamicColor.prototype,
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
        [CupertinoDynamicColor__debugLabel]: null,
        [CupertinoDynamicColor__effectiveColor]: C11 || CT.C11
      });
    },
    get C12() {
      return C12 = dart.constList([47, 47, 47, 47, 72, 97, 122, 147], intL());
    }
  }, false);
  var animating$ = dart.privateName(activity_indicator, "CupertinoActivityIndicator.animating");
  var radius$ = dart.privateName(activity_indicator, "CupertinoActivityIndicator.radius");
  var progress$ = dart.privateName(activity_indicator, "CupertinoActivityIndicator.progress");
  activity_indicator.CupertinoActivityIndicator = class CupertinoActivityIndicator extends framework.StatefulWidget {
    get animating() {
      return this[animating$];
    }
    set animating(value) {
      super.animating = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
    get progress() {
      return this[progress$];
    }
    set progress(value) {
      super.progress = value;
    }
    createState() {
      return new activity_indicator._CupertinoActivityIndicatorState.new();
    }
  };
  (activity_indicator.CupertinoActivityIndicator.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let animating = opts && 'animating' in opts ? opts.animating : true;
    if (animating == null) dart.nullFailed(L0, 30, 10, "animating");
    let radius = opts && 'radius' in opts ? opts.radius : 10;
    if (radius == null) dart.nullFailed(L0, 31, 10, "radius");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[animating$] = animating;
    this[radius$] = radius;
    if (!(animating != null)) dart.assertFailed(null, L0, 32, 16, "animating != null");
    if (!(radius != null)) dart.assertFailed(null, L0, 33, 16, "radius != null");
    if (!(dart.notNull(radius) > 0.0)) dart.assertFailed(null, L0, 34, 16, "radius > 0.0");
    this[progress$] = 1.0;
    activity_indicator.CupertinoActivityIndicator.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = activity_indicator.CupertinoActivityIndicator.prototype;
  (activity_indicator.CupertinoActivityIndicator.partiallyRevealed = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let radius = opts && 'radius' in opts ? opts.radius : 10;
    if (radius == null) dart.nullFailed(L0, 46, 10, "radius");
    let progress = opts && 'progress' in opts ? opts.progress : 1;
    if (progress == null) dart.nullFailed(L0, 47, 10, "progress");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[radius$] = radius;
    this[progress$] = progress;
    if (!(radius != null)) dart.assertFailed(null, L0, 48, 16, "radius != null");
    if (!(dart.notNull(radius) > 0.0)) dart.assertFailed(null, L0, 49, 16, "radius > 0.0");
    if (!(progress != null)) dart.assertFailed(null, L0, 50, 16, "progress != null");
    if (!(dart.notNull(progress) >= 0.0)) dart.assertFailed(null, L0, 51, 16, "progress >= 0.0");
    if (!(dart.notNull(progress) <= 1.0)) dart.assertFailed(null, L0, 52, 16, "progress <= 1.0");
    this[animating$] = false;
    activity_indicator.CupertinoActivityIndicator.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = activity_indicator.CupertinoActivityIndicator.prototype;
  dart.addTypeTests(activity_indicator.CupertinoActivityIndicator);
  dart.addTypeCaches(activity_indicator.CupertinoActivityIndicator);
  dart.setMethodSignature(activity_indicator.CupertinoActivityIndicator, () => ({
    __proto__: dart.getMethods(activity_indicator.CupertinoActivityIndicator.__proto__),
    createState: dart.fnType(activity_indicator._CupertinoActivityIndicatorState, [])
  }));
  dart.setLibraryUri(activity_indicator.CupertinoActivityIndicator, L1);
  dart.setFieldSignature(activity_indicator.CupertinoActivityIndicator, () => ({
    __proto__: dart.getFields(activity_indicator.CupertinoActivityIndicator.__proto__),
    animating: dart.finalFieldType(core.bool),
    radius: dart.finalFieldType(core.double),
    progress: dart.finalFieldType(core.double)
  }));
  var ___CupertinoActivityIndicatorState__controller = dart.privateName(activity_indicator, "_#_CupertinoActivityIndicatorState#_controller");
  var ___CupertinoActivityIndicatorState__controller_isSet = dart.privateName(activity_indicator, "_#_CupertinoActivityIndicatorState#_controller#isSet");
  var _controller = dart.privateName(activity_indicator, "_controller");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C3;
  var C2;
  var C1;
  var C6;
  var C7;
  var C8;
  var C5;
  var C4;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(activity_indicator.CupertinoActivityIndicator) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(activity_indicator.CupertinoActivityIndicator)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(activity_indicator.CupertinoActivityIndicator));
  activity_indicator._CupertinoActivityIndicatorState = class _CupertinoActivityIndicatorState extends State_SingleTickerProviderStateMixin$36 {
    get [_controller]() {
      let t0;
      return dart.test(this[___CupertinoActivityIndicatorState__controller_isSet]) ? (t0 = this[___CupertinoActivityIndicatorState__controller], t0) : dart.throw(new _internal.LateError.fieldNI("_controller"));
    }
    set [_controller](t0) {
      if (t0 == null) dart.nullFailed(L0, 81, 28, "null");
      this[___CupertinoActivityIndicatorState__controller_isSet] = true;
      this[___CupertinoActivityIndicatorState__controller] = t0;
    }
    initState() {
      super.initState();
      this[_controller] = new animation_controller.AnimationController.new({duration: C0 || CT.C0, vsync: this});
      if (dart.test(this.widget.animating)) {
        this[_controller].repeat();
      }
    }
    didUpdateWidget(oldWidget) {
      activity_indicator.CupertinoActivityIndicator.as(oldWidget);
      if (oldWidget == null) dart.nullFailed(L0, 97, 51, "oldWidget");
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(this.widget.animating, oldWidget.animating)) {
        if (dart.test(this.widget.animating))
          this[_controller].repeat();
        else
          this[_controller].stop();
      }
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 114, 29, "context");
      return new basic.SizedBox.new({height: dart.notNull(this.widget.radius) * 2, width: dart.notNull(this.widget.radius) * 2, child: new basic.CustomPaint.new({painter: new activity_indicator._CupertinoActivityIndicatorPainter.new({position: this[_controller], activeColor: colors.CupertinoDynamicColor.resolve(activity_indicator._kActiveTickColor, context), radius: this.widget.radius, progress: this.widget.progress}), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4});
    }
  };
  (activity_indicator._CupertinoActivityIndicatorState.new = function() {
    this[___CupertinoActivityIndicatorState__controller] = null;
    this[___CupertinoActivityIndicatorState__controller_isSet] = false;
    activity_indicator._CupertinoActivityIndicatorState.__proto__.new.call(this);
    ;
  }).prototype = activity_indicator._CupertinoActivityIndicatorState.prototype;
  dart.addTypeTests(activity_indicator._CupertinoActivityIndicatorState);
  dart.addTypeCaches(activity_indicator._CupertinoActivityIndicatorState);
  dart.setMethodSignature(activity_indicator._CupertinoActivityIndicatorState, () => ({
    __proto__: dart.getMethods(activity_indicator._CupertinoActivityIndicatorState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(activity_indicator._CupertinoActivityIndicatorState, () => ({
    __proto__: dart.getGetters(activity_indicator._CupertinoActivityIndicatorState.__proto__),
    [_controller]: animation_controller.AnimationController
  }));
  dart.setSetterSignature(activity_indicator._CupertinoActivityIndicatorState, () => ({
    __proto__: dart.getSetters(activity_indicator._CupertinoActivityIndicatorState.__proto__),
    [_controller]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(activity_indicator._CupertinoActivityIndicatorState, L1);
  dart.setFieldSignature(activity_indicator._CupertinoActivityIndicatorState, () => ({
    __proto__: dart.getFields(activity_indicator._CupertinoActivityIndicatorState.__proto__),
    [___CupertinoActivityIndicatorState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___CupertinoActivityIndicatorState__controller_isSet]: dart.fieldType(core.bool)
  }));
  activity_indicator._CupertinoActivityIndicatorPainter = class _CupertinoActivityIndicatorPainter extends custom_paint.CustomPainter {
    paint(canvas, size) {
      if (canvas == null) dart.nullFailed(L0, 173, 21, "canvas");
      if (size == null) dart.nullFailed(L0, 173, 34, "size");
      let paint = ui.Paint.new();
      let tickCount = activity_indicator._kAlphaValues[$length];
      canvas.save();
      canvas.translate(dart.notNull(size.width) / 2.0, dart.notNull(size.height) / 2.0);
      let activeTick = (dart.notNull(tickCount) * dart.notNull(this.position.value))[$floor]();
      for (let i = 0; i < dart.notNull(tickCount) * dart.notNull(this.progress); i = i + 1) {
        let t = (i - activeTick)[$modulo](tickCount);
        paint.color = this.activeColor.withAlpha(dart.notNull(this.progress) < 1 ? 147 : activity_indicator._kAlphaValues[$_get](t));
        canvas.drawRRect(this.tickFundamentalRRect, paint);
        canvas.rotate(6.283185307179586 / dart.notNull(tickCount));
      }
      canvas.restore();
    }
    shouldRepaint(oldPainter) {
      activity_indicator._CupertinoActivityIndicatorPainter.as(oldPainter);
      if (oldPainter == null) dart.nullFailed(L0, 194, 57, "oldPainter");
      return !dart.equals(oldPainter.position, this.position) || !dart.equals(oldPainter.activeColor, this.activeColor) || oldPainter.progress != this.progress;
    }
  };
  (activity_indicator._CupertinoActivityIndicatorPainter.new = function(opts) {
    let position = opts && 'position' in opts ? opts.position : null;
    if (position == null) dart.nullFailed(L0, 151, 19, "position");
    let activeColor = opts && 'activeColor' in opts ? opts.activeColor : null;
    if (activeColor == null) dart.nullFailed(L0, 152, 19, "activeColor");
    let radius = opts && 'radius' in opts ? opts.radius : null;
    if (radius == null) dart.nullFailed(L0, 153, 19, "radius");
    let progress = opts && 'progress' in opts ? opts.progress : null;
    if (progress == null) dart.nullFailed(L0, 154, 19, "progress");
    this.position = position;
    this.activeColor = activeColor;
    this.radius = radius;
    this.progress = progress;
    this.tickFundamentalRRect = new ui.RRect.fromLTRBXY(-dart.notNull(radius) / 10, -dart.notNull(radius) / 3.0, dart.notNull(radius) / 10, -dart.notNull(radius), dart.notNull(radius) / 10, dart.notNull(radius) / 10);
    activity_indicator._CupertinoActivityIndicatorPainter.__proto__.new.call(this, {repaint: position});
    ;
  }).prototype = activity_indicator._CupertinoActivityIndicatorPainter.prototype;
  dart.addTypeTests(activity_indicator._CupertinoActivityIndicatorPainter);
  dart.addTypeCaches(activity_indicator._CupertinoActivityIndicatorPainter);
  dart.setMethodSignature(activity_indicator._CupertinoActivityIndicatorPainter, () => ({
    __proto__: dart.getMethods(activity_indicator._CupertinoActivityIndicatorPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(activity_indicator._CupertinoActivityIndicatorPainter, L1);
  dart.setFieldSignature(activity_indicator._CupertinoActivityIndicatorPainter, () => ({
    __proto__: dart.getFields(activity_indicator._CupertinoActivityIndicatorPainter.__proto__),
    position: dart.finalFieldType(animation.Animation$(core.double)),
    activeColor: dart.finalFieldType(ui.Color),
    radius: dart.finalFieldType(core.double),
    progress: dart.finalFieldType(core.double),
    tickFundamentalRRect: dart.finalFieldType(ui.RRect)
  }));
  var Color_value = dart.privateName(ui, "Color.value");
  var C10;
  var CupertinoDynamicColor_darkHighContrastElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.darkHighContrastElevatedColor");
  var C11;
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
  var C9;
  var C12;
  dart.defineLazy(activity_indicator, {
    /*activity_indicator._kDefaultIndicatorRadius*/get _kDefaultIndicatorRadius() {
      return 10;
    },
    /*activity_indicator._kActiveTickColor*/get _kActiveTickColor() {
      return C9 || CT.C9;
    },
    /*activity_indicator._kTwoPI*/get _kTwoPI() {
      return 6.283185307179586;
    },
    /*activity_indicator._kAlphaValues*/get _kAlphaValues() {
      return C12 || CT.C12;
    },
    /*activity_indicator._partiallyRevealedAlpha*/get _partiallyRevealedAlpha() {
      return 147;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/cupertino/activity_indicator.dart", {
    "package:flutter/src/cupertino/activity_indicator.dart": activity_indicator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["activity_indicator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0Da;;;;;;IAKE;;;;;;IAQA;;;;;;;AAIT;IAAkC;;;QA/C/B;QACA;;QACA;;;IADA;IACA;UACM,AAAU,SAAD,IAAI;UACb,AAAO,MAAD,IAAI;UACH,aAAP,MAAM,IAAG;IACP,kBAAE;AACX,iFAAW,GAAG;;EAAC;;QASd;QACA;;QACA;;;IADA;IACA;UACM,AAAO,MAAD,IAAI;UACH,aAAP,MAAM,IAAG;UACT,AAAS,QAAD,IAAI;UACH,aAAT,QAAQ,KAAI;UACH,aAAT,QAAQ,KAAI;IACT,mBAAE;AACZ,iFAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2BI;IAAW;;;AAAX;;IAAW;;AAIjB,MAAX;AAIL,MAHD,oBAAc,gFAEL;AAGT,oBAAI,AAAO;AACW,QAApB,AAAY;;IAEhB;;uDAGgD;;AACd,MAA1B,sBAAgB,SAAS;AAC/B,uBAAI,AAAO,uBAAa,AAAU,SAAD;AAC/B,sBAAI,AAAO;AACW,UAApB,AAAY;;AAEM,UAAlB,AAAY;;IAElB;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;;UAG0B;AACxB,YAAO,iCACiB,aAAd,AAAO,sBAAS,UACH,aAAd,AAAO,sBAAS,UAChB,oCACI,yEACG,gCAEgB,qCAAQ,sCAAmB,OAAO,WACpD,AAAO,8BACL,AAAO;IAIzB;;;2DA/CyB;;;;EAgD3B;;;;;;;;;;;;;;;;;;;;;;UA4CoB,QAAa;UAAb;UAAa;AACjB,kBAAQ;AACV,sBAAY,AAAc;AAEvB,MAAb,AAAO,MAAD;AAC+C,MAArD,AAAO,MAAD,WAAsB,aAAX,AAAK,IAAD,UAAS,KAAiB,aAAZ,AAAK,IAAD,WAAU;AAEvC,uBAA0C,CAAlB,aAAV,SAAS,iBAAG,AAAS;AAE7C,eAAS,IAAI,GAAG,AAAE,CAAD,GAAa,aAAV,SAAS,iBAAG,gBAAY,IAAF,AAAE,CAAC,GAAH;AAC9B,gBAAqB,CAAhB,AAAE,CAAD,GAAG,UAAU,WAAI,SAAS;AAE+B,QADzE,AAAM,KAAD,SAAS,AACT,2BAAmB,aAAT,iBAAW,UAA8B,AAAa,wCAAC,CAAC;AAC1B,QAA7C,AAAO,MAAD,WAAW,2BAAsB,KAAK;AACV,QAAlC,AAAO,MAAD,QAAgB,iCAAE,SAAS;;AAGnB,MAAhB,AAAO,MAAD;IACR;;+DAGsD;;AACpD,YAC0C,cADnC,AAAW,UAAD,WAAa,+BAC1B,AAAW,UAAD,cAAgB,qBAC1B,AAAW,UAAD,aAAa;IAC7B;;;QA/CgB;;QACA;;QACA;;QACA;;IAHA;IACA;IACA;IACA;IACW,4BAAQ,wBAC3B,AAAQ,cAAP,MAAM,QACP,AAAQ,cAAP,MAAM,IAAG,KACH,aAAP,MAAM,QACN,cAAC,MAAM,GACA,aAAP,MAAM,QACC,aAAP,MAAM;AAER,6FAAe,QAAQ;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAxJnB,2CAAwB;;;MAGzB,oCAAiB;;;MAqHhB,0BAAO;;;MAIJ,gCAAa;;;MAYnB,0CAAuB","file":"../../../../../../../../../../packages/flutter/src/cupertino/activity_indicator.dart.lib.js"}');
  // Exports:
  return {
    src__cupertino__activity_indicator: activity_indicator
  };
}));

//# sourceMappingURL=activity_indicator.dart.lib.js.map
