define(['dart_sdk'], (function load__packages__flutter__src__painting__shader_warm_up_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const developer = dart_sdk.developer;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var shader_warm_up = Object.create(dart.library);
  var $ceil = dartx.ceil;
  var $length = dartx.length;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var JSArrayOfPath = () => (JSArrayOfPath = dart.constFn(_interceptors.JSArray$(ui.Path)))();
  var JSArrayOfPaint = () => (JSArrayOfPaint = dart.constFn(_interceptors.JSArray$(ui.Paint)))();
  var JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  const CT = Object.create(null);
  var L1 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/shader_warm_up.dart";
  var L0 = "package:flutter/src/painting/shader_warm_up.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 100,
        [OffsetBase__dx]: 100
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.RRect.prototype,
        [RRect_webOnlyUniformRadii]: true,
        [RRect_blRadiusY]: 10,
        [RRect_blRadiusX]: 10,
        [RRect_brRadiusY]: 10,
        [RRect_brRadiusX]: 10,
        [RRect_trRadiusY]: 10,
        [RRect_trRadiusX]: 10,
        [RRect_tlRadiusY]: 10,
        [RRect_tlRadiusX]: 10,
        [RRect_bottom]: 60,
        [RRect_right]: 60,
        [RRect_top]: 20,
        [RRect_left]: 20
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 40,
        [OffsetBase__dx]: 40
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.ParagraphConstraints.prototype,
        [ParagraphConstraints_width]: 60
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 20,
        [OffsetBase__dx]: 20
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 16,
        [Radius_x]: 16
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.Rect.prototype,
        [Rect_bottom]: 240,
        [Rect_right]: 320,
        [Rect_top]: 10,
        [Rect_left]: 10
      });
    }
  }, false);
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C0;
  shader_warm_up.ShaderWarmUp = class ShaderWarmUp extends core.Object {
    get size() {
      return C0 || CT.C0;
    }
    execute() {
      return async.async(dart.void, (function* execute() {
        let recorder = ui.PictureRecorder.new();
        let canvas = ui.Canvas.new(recorder);
        yield this.warmUpOnCanvas(canvas);
        let picture = recorder.endRecording();
        let shaderWarmUpTask = new developer.TimelineTask.new();
        shaderWarmUpTask.start("Warm-up shader");
        if (!true) {
          yield picture.toImage(this.size.width[$ceil](), this.size.height[$ceil]());
        }
        shaderWarmUpTask.finish();
      }).bind(this));
    }
  };
  (shader_warm_up.ShaderWarmUp.new = function() {
    ;
  }).prototype = shader_warm_up.ShaderWarmUp.prototype;
  dart.addTypeTests(shader_warm_up.ShaderWarmUp);
  dart.addTypeCaches(shader_warm_up.ShaderWarmUp);
  dart.setMethodSignature(shader_warm_up.ShaderWarmUp, () => ({
    __proto__: dart.getMethods(shader_warm_up.ShaderWarmUp.__proto__),
    execute: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setGetterSignature(shader_warm_up.ShaderWarmUp, () => ({
    __proto__: dart.getGetters(shader_warm_up.ShaderWarmUp.__proto__),
    size: ui.Size
  }));
  dart.setLibraryUri(shader_warm_up.ShaderWarmUp, L0);
  var RRect_webOnlyUniformRadii = dart.privateName(ui, "RRect.webOnlyUniformRadii");
  var RRect_blRadiusY = dart.privateName(ui, "RRect.blRadiusY");
  var RRect_blRadiusX = dart.privateName(ui, "RRect.blRadiusX");
  var RRect_brRadiusY = dart.privateName(ui, "RRect.brRadiusY");
  var RRect_brRadiusX = dart.privateName(ui, "RRect.brRadiusX");
  var RRect_trRadiusY = dart.privateName(ui, "RRect.trRadiusY");
  var RRect_trRadiusX = dart.privateName(ui, "RRect.trRadiusX");
  var RRect_tlRadiusY = dart.privateName(ui, "RRect.tlRadiusY");
  var RRect_tlRadiusX = dart.privateName(ui, "RRect.tlRadiusX");
  var RRect_bottom = dart.privateName(ui, "RRect.bottom");
  var RRect_right = dart.privateName(ui, "RRect.right");
  var RRect_top = dart.privateName(ui, "RRect.top");
  var RRect_left = dart.privateName(ui, "RRect.left");
  var C1;
  var C2;
  var Color_value = dart.privateName(ui, "Color.value");
  var C3;
  var ParagraphConstraints_width = dart.privateName(ui, "ParagraphConstraints.width");
  var C4;
  var C5;
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var C6;
  var Rect_bottom = dart.privateName(ui, "Rect.bottom");
  var Rect_right = dart.privateName(ui, "Rect.right");
  var Rect_top = dart.privateName(ui, "Rect.top");
  var Rect_left = dart.privateName(ui, "Rect.left");
  var C7;
  var drawCallSpacing$ = dart.privateName(shader_warm_up, "DefaultShaderWarmUp.drawCallSpacing");
  var canvasSize$ = dart.privateName(shader_warm_up, "DefaultShaderWarmUp.canvasSize");
  shader_warm_up.DefaultShaderWarmUp = class DefaultShaderWarmUp extends shader_warm_up.ShaderWarmUp {
    get drawCallSpacing() {
      return this[drawCallSpacing$];
    }
    set drawCallSpacing(value) {
      super.drawCallSpacing = value;
    }
    get canvasSize() {
      return this[canvasSize$];
    }
    set canvasSize(value) {
      super.canvasSize = value;
    }
    get size() {
      return this.canvasSize;
    }
    warmUpOnCanvas(canvas) {
      if (canvas == null) dart.nullFailed(L1, 126, 41, "canvas");
      return async.async(dart.void, (function* warmUpOnCanvas() {
        let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6;
        let rrect = C1 || CT.C1;
        let rrectPath = (t0 = ui.Path.new(), (() => {
          t0.addRRect(rrect);
          return t0;
        })());
        let circlePath = (t0$ = ui.Path.new(), (() => {
          t0$.addOval(new ui.Rect.fromCircle({center: C2 || CT.C2, radius: 20.0}));
          return t0$;
        })());
        let path = ui.Path.new();
        path.moveTo(20.0, 60.0);
        path.quadraticBezierTo(60.0, 20.0, 60.0, 60.0);
        path.close();
        path.moveTo(60.0, 20.0);
        path.quadraticBezierTo(60.0, 60.0, 20.0, 60.0);
        let convexPath = ui.Path.new();
        convexPath.moveTo(20.0, 30.0);
        convexPath.lineTo(40.0, 20.0);
        convexPath.lineTo(60.0, 30.0);
        convexPath.lineTo(60.0, 60.0);
        convexPath.lineTo(20.0, 60.0);
        convexPath.close();
        let paths = JSArrayOfPath().of([rrectPath, circlePath, path, convexPath]);
        let paints = JSArrayOfPaint().of([(t0$0 = ui.Paint.new(), (() => {
            t0$0.isAntiAlias = true;
            t0$0.style = ui.PaintingStyle.fill;
            return t0$0;
          })()), (t0$1 = ui.Paint.new(), (() => {
            t0$1.isAntiAlias = false;
            t0$1.style = ui.PaintingStyle.fill;
            return t0$1;
          })()), (t0$2 = ui.Paint.new(), (() => {
            t0$2.isAntiAlias = true;
            t0$2.style = ui.PaintingStyle.stroke;
            t0$2.strokeWidth = 10.0;
            return t0$2;
          })()), (t0$3 = ui.Paint.new(), (() => {
            t0$3.isAntiAlias = true;
            t0$3.style = ui.PaintingStyle.stroke;
            t0$3.strokeWidth = 0.1;
            return t0$3;
          })())]);
        for (let i = 0; i < dart.notNull(paths[$length]); i = i + 1) {
          canvas.save();
          for (let paint of paints) {
            canvas.drawPath(paths[$_get](i), paint);
            canvas.translate(this.drawCallSpacing, 0.0);
          }
          canvas.restore();
          canvas.translate(0.0, this.drawCallSpacing);
        }
        let black = C3 || CT.C3;
        canvas.save();
        canvas.drawShadow(rrectPath, black, 10.0, true);
        canvas.translate(this.drawCallSpacing, 0.0);
        canvas.drawShadow(rrectPath, black, 10.0, false);
        canvas.restore();
        canvas.translate(0.0, this.drawCallSpacing);
        let paragraphBuilder = (t0$4 = ui.ParagraphBuilder.new(ui.ParagraphStyle.new({textDirection: ui.TextDirection.ltr})), (() => {
          t0$4.pushStyle(ui.TextStyle.new({color: black}));
          t0$4.addText("_");
          return t0$4;
        })());
        let paragraph = (t0$5 = paragraphBuilder.build(), (() => {
          t0$5.layout(C4 || CT.C4);
          return t0$5;
        })());
        canvas.drawParagraph(paragraph, C5 || CT.C5);
        for (let fraction of JSArrayOfdouble().of([0.0, 0.5])) {
          t0$6 = canvas;
          (() => {
            t0$6.save();
            t0$6.translate(fraction, fraction);
            t0$6.clipRRect(new ui.RRect.fromLTRBR(8.0, 8.0, 328.0, 248.0, C6 || CT.C6));
            t0$6.drawRect(C7 || CT.C7, ui.Paint.new());
            t0$6.restore();
            return t0$6;
          })();
          canvas.translate(this.drawCallSpacing, 0.0);
        }
        canvas.translate(0.0, this.drawCallSpacing);
      }).bind(this));
    }
  };
  (shader_warm_up.DefaultShaderWarmUp.new = function(opts) {
    let drawCallSpacing = opts && 'drawCallSpacing' in opts ? opts.drawCallSpacing : 0;
    if (drawCallSpacing == null) dart.nullFailed(L1, 108, 10, "drawCallSpacing");
    let canvasSize = opts && 'canvasSize' in opts ? opts.canvasSize : C0 || CT.C0;
    if (canvasSize == null) dart.nullFailed(L1, 109, 10, "canvasSize");
    this[drawCallSpacing$] = drawCallSpacing;
    this[canvasSize$] = canvasSize;
    shader_warm_up.DefaultShaderWarmUp.__proto__.new.call(this);
    ;
  }).prototype = shader_warm_up.DefaultShaderWarmUp.prototype;
  dart.addTypeTests(shader_warm_up.DefaultShaderWarmUp);
  dart.addTypeCaches(shader_warm_up.DefaultShaderWarmUp);
  dart.setMethodSignature(shader_warm_up.DefaultShaderWarmUp, () => ({
    __proto__: dart.getMethods(shader_warm_up.DefaultShaderWarmUp.__proto__),
    warmUpOnCanvas: dart.fnType(async.Future$(dart.void), [ui.Canvas])
  }));
  dart.setLibraryUri(shader_warm_up.DefaultShaderWarmUp, L0);
  dart.setFieldSignature(shader_warm_up.DefaultShaderWarmUp, () => ({
    __proto__: dart.getFields(shader_warm_up.DefaultShaderWarmUp.__proto__),
    drawCallSpacing: dart.finalFieldType(core.double),
    canvasSize: dart.finalFieldType(ui.Size)
  }));
  dart.trackLibraries("packages/flutter/src/painting/shader_warm_up.dart", {
    "package:flutter/src/painting/shader_warm_up.dart": shader_warm_up
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shader_warm_up.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgEsB;IAA2B;;AAkB3B;AACO,uBAAc;AACvB,qBAAY,cAAO,QAAQ;AAEf,QAA5B,MAAM,oBAAe,MAAM;AAEV,sBAAU,AAAS,QAAD;AAChB,+BAAmB;AACE,QAAxC,AAAiB,gBAAD,OAAO;AAEvB;AAC8D,UAA5D,MAAM,AAAQ,OAAD,SAAS,AAAK,AAAM,0BAAQ,AAAK,AAAO;;AAE9B,QAAzB,AAAiB,gBAAD;MAClB;;;;;EAzCoB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA2DP;;;;;;IAGC;;;;;;;AAGM;IAAU;;UAKQ;AAAX;;AACV;AACD,6CAAe;AAAQ,sBAAS,KAAK;;;AAErC,+CAAgB;AAAQ,sBAC1B,qDAAwD;;;AAKtD,mBAAU;AACD,QAAvB,AAAK,IAAD,QAAQ,MAAM;AAC4B,QAA9C,AAAK,IAAD,mBAAmB,MAAM,MAAM,MAAM;AAC7B,QAAZ,AAAK,IAAD;AACmB,QAAvB,AAAK,IAAD,QAAQ,MAAM;AAC4B,QAA9C,AAAK,IAAD,mBAAmB,MAAM,MAAM,MAAM;AAE3B,yBAAgB;AACD,QAA7B,AAAW,UAAD,QAAQ,MAAM;AACK,QAA7B,AAAW,UAAD,QAAQ,MAAM;AACK,QAA7B,AAAW,UAAD,QAAQ,MAAM;AACK,QAA7B,AAAW,UAAD,QAAQ,MAAM;AACK,QAA7B,AAAW,UAAD,QAAQ,MAAM;AACN,QAAlB,AAAW,UAAD;AAMU,oBAAiB,oBAAC,SAAS,EAAE,UAAU,EAAE,IAAI,EAAE,UAAU;AAExD,qBAAmB,6CACnC;AACC,+BAAc;AACd,yBAAyB;;yCAC1B;AACC,+BAAc;AACd,yBAAyB;;yCAC1B;AACC,+BAAc;AACd,yBAAyB;AACzB,+BAAc;;yCACf;AACC,+BAAc;AACd,yBAAyB;AACzB,+BAAc;;;AAIpB,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAM,KAAD,YAAS,IAAA,AAAE,CAAD,GAAI;AACxB,UAAb,AAAO,MAAD;AACN,mBAAoB,QAAS,OAAM;AACD,YAAhC,AAAO,MAAD,UAAU,AAAK,KAAA,QAAC,CAAC,GAAG,KAAK;AACO,YAAtC,AAAO,MAAD,WAAW,sBAAiB;;AAEpB,UAAhB,AAAO,MAAD;AACgC,UAAtC,AAAO,MAAD,WAAW,KAAK;;AAIT;AACF,QAAb,AAAO,MAAD;AACyC,QAA/C,AAAO,MAAD,YAAY,SAAS,EAAE,KAAK,EAAE,MAAM;AACJ,QAAtC,AAAO,MAAD,WAAW,sBAAiB;AACc,QAAhD,AAAO,MAAD,YAAY,SAAS,EAAE,KAAK,EAAE,MAAM;AAC1B,QAAhB,AAAO,MAAD;AAGgC,QAAtC,AAAO,MAAD,WAAW,KAAK;AACI,uCAAsB,wBAC3C,sCAA+C,yBADJ;AAE7C,yBAAa,yBAAiB,KAAK;AAAI,uBAAQ;;;AAC/B,gCAAY,AAAiB,gBAAD,UAAC;AAC5C;;;AACwD,QAA5D,AAAO,MAAD,eAAe,SAAS;AAQ9B,iBAAkB,WAAoB,uBAAC,KAAK;AAM7B,iBALb,MAAM;UAAN;AACI;AACA,2BAAU,QAAQ,EAAE,QAAQ;AAC5B,2BAAmB,uBAAU,KAAG,KAAG,OAAK;AACxC,uCAAsD;AACtD;;;AACkC,UAAtC,AAAO,MAAD,WAAW,sBAAiB;;AAEE,QAAtC,AAAO,MAAD,WAAW,KAAK;MACxB;;;;QA9GO;;QACA;;IADA;IACA;AAFD;;EAGJ","file":"../../../../../../../../../../packages/flutter/src/painting/shader_warm_up.dart.lib.js"}');
  // Exports:
  return {
    src__painting__shader_warm_up: shader_warm_up
  };
}));

//# sourceMappingURL=shader_warm_up.dart.lib.js.map
