define(['dart_sdk'], (function load__packages__flutter__src__painting__clip_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var clip = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var boolTovoid = () => (boolTovoid = dart.constFn(dart.fnType(dart.void, [core.bool])))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/painting/clip.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/clip.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name]: "Clip.none",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name]: "Clip.hardEdge",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name]: "Clip.antiAlias",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name]: "Clip.antiAliasWithSaveLayer",
        index: 3
      });
    }
  }, false);
  var _name = dart.privateName(ui, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var _clipAndPaint = dart.privateName(clip, "_clipAndPaint");
  clip.ClipContext = class ClipContext extends core.Object {
    [_clipAndPaint](canvasClipCall, clipBehavior, bounds, painter) {
      if (canvasClipCall == null) dart.nullFailed(L0, 13, 27, "canvasClipCall");
      if (clipBehavior == null) dart.nullFailed(L0, 13, 66, "clipBehavior");
      if (bounds == null) dart.nullFailed(L0, 13, 85, "bounds");
      if (painter == null) dart.nullFailed(L0, 13, 98, "painter");
      if (!(canvasClipCall != null)) dart.assertFailed(null, L0, 14, 12, "canvasClipCall != null");
      this.canvas.save();
      switch (clipBehavior) {
        case C0 || CT.C0:
        {
          break;
        }
        case C1 || CT.C1:
        {
          canvasClipCall(false);
          break;
        }
        case C2 || CT.C2:
        {
          canvasClipCall(true);
          break;
        }
        case C3 || CT.C3:
        {
          canvasClipCall(true);
          this.canvas.saveLayer(bounds, ui.Paint.new());
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      painter();
      if (dart.equals(clipBehavior, ui.Clip.antiAliasWithSaveLayer)) {
        this.canvas.restore();
      }
      this.canvas.restore();
    }
    clipPathAndPaint(path, clipBehavior, bounds, painter) {
      if (path == null) dart.nullFailed(L0, 41, 30, "path");
      if (clipBehavior == null) dart.nullFailed(L0, 41, 41, "clipBehavior");
      if (bounds == null) dart.nullFailed(L0, 41, 60, "bounds");
      if (painter == null) dart.nullFailed(L0, 41, 73, "painter");
      this[_clipAndPaint](dart.fn(doAntiAias => {
        if (doAntiAias == null) dart.nullFailed(L0, 42, 25, "doAntiAias");
        return this.canvas.clipPath(path, {doAntiAlias: doAntiAias});
      }, boolTovoid()), clipBehavior, bounds, painter);
    }
    clipRRectAndPaint(rrect, clipBehavior, bounds, painter) {
      if (rrect == null) dart.nullFailed(L0, 49, 32, "rrect");
      if (clipBehavior == null) dart.nullFailed(L0, 49, 44, "clipBehavior");
      if (bounds == null) dart.nullFailed(L0, 49, 63, "bounds");
      if (painter == null) dart.nullFailed(L0, 49, 76, "painter");
      this[_clipAndPaint](dart.fn(doAntiAias => {
        if (doAntiAias == null) dart.nullFailed(L0, 50, 25, "doAntiAias");
        return this.canvas.clipRRect(rrect, {doAntiAlias: doAntiAias});
      }, boolTovoid()), clipBehavior, bounds, painter);
    }
    clipRectAndPaint(rect, clipBehavior, bounds, painter) {
      if (rect == null) dart.nullFailed(L0, 57, 30, "rect");
      if (clipBehavior == null) dart.nullFailed(L0, 57, 41, "clipBehavior");
      if (bounds == null) dart.nullFailed(L0, 57, 60, "bounds");
      if (painter == null) dart.nullFailed(L0, 57, 73, "painter");
      this[_clipAndPaint](dart.fn(doAntiAias => {
        if (doAntiAias == null) dart.nullFailed(L0, 58, 25, "doAntiAias");
        return this.canvas.clipRect(rect, {doAntiAlias: doAntiAias});
      }, boolTovoid()), clipBehavior, bounds, painter);
    }
  };
  (clip.ClipContext.new = function() {
    ;
  }).prototype = clip.ClipContext.prototype;
  dart.addTypeTests(clip.ClipContext);
  dart.addTypeCaches(clip.ClipContext);
  dart.setMethodSignature(clip.ClipContext, () => ({
    __proto__: dart.getMethods(clip.ClipContext.__proto__),
    [_clipAndPaint]: dart.fnType(dart.void, [dart.fnType(dart.void, [core.bool]), ui.Clip, ui.Rect, dart.fnType(dart.void, [])]),
    clipPathAndPaint: dart.fnType(dart.void, [ui.Path, ui.Clip, ui.Rect, dart.fnType(dart.void, [])]),
    clipRRectAndPaint: dart.fnType(dart.void, [ui.RRect, ui.Clip, ui.Rect, dart.fnType(dart.void, [])]),
    clipRectAndPaint: dart.fnType(dart.void, [ui.Rect, ui.Clip, ui.Rect, dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(clip.ClipContext, L1);
  dart.trackLibraries("packages/flutter/src/painting/clip.dart", {
    "package:flutter/src/painting/clip.dart": clip
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["clip.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBAY0B,gBAAuC,cAAmB,QAAa;UAAvE;UAAuC;UAAmB;UAAa;AAC7F,YAAO,AAAe,cAAD,IAAI;AACZ,MAAb,AAAO;AACP,cAAQ,YAAY;;;AAEhB;;;;AAEqB,UAArB,AAAc,cAAA,CAAC;AACf;;;;AAEoB,UAApB,AAAc,cAAA,CAAC;AACf;;;;AAEoB,UAApB,AAAc,cAAA,CAAC;AACkB,UAAjC,AAAO,sBAAU,MAAM,EAAE;AACzB;;;;AAZJ;;;AAcS,MAAT,AAAO,OAAA;AACP,UAAiB,YAAb,YAAY,EAAS;AACP,QAAhB,AAAO;;AAEO,MAAhB,AAAO;IACT;qBAM2B,MAAW,cAAmB,QAAa;UAA3C;UAAW;UAAmB;UAAa;AAC6C,MAAjH,oBAAc;YAAM;AAAe,cAAA,AAAO,sBAAS,IAAI,gBAAe,UAAU;wBAAG,YAAY,EAAE,MAAM,EAAE,OAAO;IAClH;sBAM6B,OAAY,cAAmB,QAAa;UAA5C;UAAY;UAAmB;UAAa;AAC4C,MAAnH,oBAAc;YAAM;AAAe,cAAA,AAAO,uBAAU,KAAK,gBAAe,UAAU;wBAAG,YAAY,EAAE,MAAM,EAAE,OAAO;IACpH;qBAM2B,MAAW,cAAmB,QAAa;UAA3C;UAAW;UAAmB;UAAa;AAC6C,MAAjH,oBAAc;YAAM;AAAe,cAAA,AAAO,sBAAS,IAAI,gBAAe,UAAU;wBAAG,YAAY,EAAE,MAAM,EAAE,OAAO;IAClH;;;;EACF","file":"../../../../../../../../../../packages/flutter/src/painting/clip.dart.lib.js"}');
  // Exports:
  return {
    src__painting__clip: clip
  };
}));

//# sourceMappingURL=clip.dart.lib.js.map
