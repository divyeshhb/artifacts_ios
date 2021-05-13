define(['dart_sdk', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/rendering/animated_size.dart', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/scheduler/ticker.dart'], (function load__packages__flutter__src__widgets__animated_size_dart(dart_sdk, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__rendering__animated_size$46dart, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__scheduler__ticker$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const animated_size = packages__flutter__src__rendering__animated_size$46dart.src__rendering__animated_size;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const ticker = packages__flutter__src__scheduler__ticker$46dart.src__scheduler__ticker;
  var animated_size$ = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var DiagnosticsPropertyOfAlignmentGeometry = () => (DiagnosticsPropertyOfAlignmentGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(alignment.AlignmentGeometry)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/animated_size.dart";
  var L1 = "package:flutter/src/widgets/animated_size.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name]: "Clip.hardEdge",
        index: 1
      });
    }
  }, false);
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var C0;
  var C1;
  var _name = dart.privateName(ui, "_name");
  var C2;
  var alignment$ = dart.privateName(animated_size$, "AnimatedSize.alignment");
  var curve$ = dart.privateName(animated_size$, "AnimatedSize.curve");
  var duration$ = dart.privateName(animated_size$, "AnimatedSize.duration");
  var reverseDuration$ = dart.privateName(animated_size$, "AnimatedSize.reverseDuration");
  var vsync$ = dart.privateName(animated_size$, "AnimatedSize.vsync");
  var clipBehavior$ = dart.privateName(animated_size$, "AnimatedSize.clipBehavior");
  animated_size$.AnimatedSize = class AnimatedSize extends framework.SingleChildRenderObjectWidget {
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      super.curve = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get reverseDuration() {
      return this[reverseDuration$];
    }
    set reverseDuration(value) {
      super.reverseDuration = value;
    }
    get vsync() {
      return this[vsync$];
    }
    set vsync(value) {
      super.vsync = value;
    }
    get clipBehavior() {
      return this[clipBehavior$];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    createRenderObject(context) {
      if (context == null) dart.nullFailed(L0, 112, 54, "context");
      return new animated_size.RenderAnimatedSize.new({alignment: this.alignment, duration: this.duration, reverseDuration: this.reverseDuration, curve: this.curve, vsync: this.vsync, textDirection: basic.Directionality.maybeOf(context), clipBehavior: this.clipBehavior});
    }
    updateRenderObject(context, renderObject) {
      let t0;
      if (context == null) dart.nullFailed(L0, 125, 40, "context");
      animated_size.RenderAnimatedSize.as(renderObject);
      if (renderObject == null) dart.nullFailed(L0, 125, 68, "renderObject");
      t0 = renderObject;
      (() => {
        t0.alignment = this.alignment;
        t0.duration = this.duration;
        t0.reverseDuration = this.reverseDuration;
        t0.curve = this.curve;
        t0.vsync = this.vsync;
        t0.textDirection = basic.Directionality.maybeOf(context);
        t0.clipBehavior = this.clipBehavior;
        return t0;
      })();
    }
    debugFillProperties(properties) {
      let t0;
      if (properties == null) dart.nullFailed(L0, 137, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfAlignmentGeometry()).new("alignment", this.alignment, {defaultValue: alignment.Alignment.topCenter}));
      properties.add(new diagnostics.IntProperty.new("duration", this.duration.inMilliseconds, {unit: "ms"}));
      properties.add(new diagnostics.IntProperty.new("reverseDuration", (t0 = this.reverseDuration, t0 == null ? null : t0.inMilliseconds), {unit: "ms", defaultValue: null}));
    }
  };
  (animated_size$.AnimatedSize.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C0 || CT.C0;
    if (alignment == null) dart.nullFailed(L0, 59, 10, "alignment");
    let curve = opts && 'curve' in opts ? opts.curve : C1 || CT.C1;
    if (curve == null) dart.nullFailed(L0, 60, 10, "curve");
    let duration = opts && 'duration' in opts ? opts.duration : null;
    if (duration == null) dart.nullFailed(L0, 61, 19, "duration");
    let reverseDuration = opts && 'reverseDuration' in opts ? opts.reverseDuration : null;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    if (vsync == null) dart.nullFailed(L0, 63, 19, "vsync");
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C2 || CT.C2;
    if (clipBehavior == null) dart.nullFailed(L0, 64, 10, "clipBehavior");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[alignment$] = alignment;
    this[curve$] = curve;
    this[duration$] = duration;
    this[reverseDuration$] = reverseDuration;
    this[vsync$] = vsync;
    this[clipBehavior$] = clipBehavior;
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 65, 15, "clipBehavior != null");
    animated_size$.AnimatedSize.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = animated_size$.AnimatedSize.prototype;
  dart.addTypeTests(animated_size$.AnimatedSize);
  dart.addTypeCaches(animated_size$.AnimatedSize);
  dart.setMethodSignature(animated_size$.AnimatedSize, () => ({
    __proto__: dart.getMethods(animated_size$.AnimatedSize.__proto__),
    createRenderObject: dart.fnType(animated_size.RenderAnimatedSize, [framework.BuildContext])
  }));
  dart.setLibraryUri(animated_size$.AnimatedSize, L1);
  dart.setFieldSignature(animated_size$.AnimatedSize, () => ({
    __proto__: dart.getFields(animated_size$.AnimatedSize.__proto__),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    curve: dart.finalFieldType(curves.Curve),
    duration: dart.finalFieldType(core.Duration),
    reverseDuration: dart.finalFieldType(dart.nullable(core.Duration)),
    vsync: dart.finalFieldType(ticker.TickerProvider),
    clipBehavior: dart.finalFieldType(ui.Clip)
  }));
  dart.trackLibraries("packages/flutter/src/widgets/animated_size.dart", {
    "package:flutter/src/widgets/animated_size.dart": animated_size$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["animated_size.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsF0B;;;;;;IAIZ;;;;;;IAIG;;;;;;IAMC;;;;;;IAGK;;;;;;IAKV;;;;;;;UAGwC;AACjD,YAAO,sDACM,0BACD,gCACO,6BACV,mBACA,2BACuB,6BAAQ,OAAO,iBAC/B;IAElB;uBAGqC,SAA4B;;UAA5B;0CAA4B;;AAQhC,WAP/B,YAAY;MAAZ;AACI,uBAAY;AACZ,sBAAW;AACX,6BAAkB;AAClB,mBAAQ;AACR,mBAAQ;AACR,2BAA+B,6BAAQ,OAAO;AAC9C,0BAAe;;;IACrB;wBAGqD;;;AACd,MAA/B,0BAAoB,UAAU;AAC6E,MAAjH,AAAW,UAAD,KAAK,mDAAuC,aAAa,+BAAmC;AAC1B,MAA5E,AAAW,UAAD,KAAK,gCAAY,YAAY,AAAS,qCAAsB;AACyC,MAA/G,AAAW,UAAD,KAAK,gCAAY,4DAAmB,OAAiB,2BAAsB,oBAAoB;IAC3G;;;QArFO;QACG;QACH;;QACA;;QACS;;QACT;QACS;;QACT;;;IALA;IACA;IACS;IACT;IACS;IACT;UACK,AAAa,YAAD,IAAI;AACvB,+DAAW,GAAG,SAAS,KAAK;;EAAC","file":"../../../../../../../../../../packages/flutter/src/widgets/animated_size.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__animated_size: animated_size$
  };
}));

//# sourceMappingURL=animated_size.dart.lib.js.map
