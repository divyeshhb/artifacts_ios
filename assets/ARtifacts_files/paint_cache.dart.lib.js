define(['dart_sdk', 'packages/qr_flutter/src/types.dart'], (function load__packages__qr_flutter__src__paint_cache_dart(dart_sdk, packages__qr_flutter__src__types$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const types = packages__qr_flutter__src__types$46dart.src__types;
  var paint_cache = Object.create(dart.library);
  var $add = dartx.add;
  var $_set = dartx._set;
  var $first = dartx.first;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var PaintL = () => (PaintL = dart.constFn(dart.legacy(ui.Paint)))();
  var JSArrayOfPaintL = () => (JSArrayOfPaintL = dart.constFn(_interceptors.JSArray$(PaintL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$PaintL = () => (IdentityMapOfStringL$PaintL = dart.constFn(_js_helper.IdentityMap$(StringL(), PaintL())))();
  const CT = Object.create(null);
  var L0 = "package:qr_flutter/src/paint_cache.dart";
  var _pixelPaints = dart.privateName(paint_cache, "_pixelPaints");
  var _keyedPaints = dart.privateName(paint_cache, "_keyedPaints");
  var _cacheKey = dart.privateName(paint_cache, "_cacheKey");
  paint_cache.PaintCache = class PaintCache extends core.Object {
    [_cacheKey](element, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      let posKey = position != null ? dart.toString(position) : "any";
      return dart.str(dart.toString(element)) + ":" + dart.str(posKey);
    }
    cache(paint, element, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (element == types.QrCodeElement.codePixel) {
        this[_pixelPaints][$add](paint);
      } else {
        this[_keyedPaints][$_set](this[_cacheKey](element, {position: position}), paint);
      }
    }
    firstPaint(element, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (element == types.QrCodeElement.codePixel) {
        return this[_pixelPaints][$first];
      } else {
        return this[_keyedPaints][$_get](this[_cacheKey](element, {position: position}));
      }
    }
    paints(element, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (element == types.QrCodeElement.codePixel) {
        return this[_pixelPaints];
      } else {
        return JSArrayOfPaintL().of([this[_keyedPaints][$_get](this[_cacheKey](element, {position: position}))]);
      }
    }
  };
  (paint_cache.PaintCache.new = function() {
    this[_pixelPaints] = JSArrayOfPaintL().of([]);
    this[_keyedPaints] = new (IdentityMapOfStringL$PaintL()).new();
    ;
  }).prototype = paint_cache.PaintCache.prototype;
  dart.addTypeTests(paint_cache.PaintCache);
  dart.addTypeCaches(paint_cache.PaintCache);
  dart.setMethodSignature(paint_cache.PaintCache, () => ({
    __proto__: dart.getMethods(paint_cache.PaintCache.__proto__),
    [_cacheKey]: dart.fnType(dart.legacy(core.String), [dart.legacy(types.QrCodeElement)], {position: dart.legacy(types.FinderPatternPosition)}, {}),
    cache: dart.fnType(dart.void, [dart.legacy(ui.Paint), dart.legacy(types.QrCodeElement)], {position: dart.legacy(types.FinderPatternPosition)}, {}),
    firstPaint: dart.fnType(dart.legacy(ui.Paint), [dart.legacy(types.QrCodeElement)], {position: dart.legacy(types.FinderPatternPosition)}, {}),
    paints: dart.fnType(dart.legacy(core.List$(dart.legacy(ui.Paint))), [dart.legacy(types.QrCodeElement)], {position: dart.legacy(types.FinderPatternPosition)}, {})
  }));
  dart.setLibraryUri(paint_cache.PaintCache, L0);
  dart.setFieldSignature(paint_cache.PaintCache, () => ({
    __proto__: dart.getFields(paint_cache.PaintCache.__proto__),
    [_pixelPaints]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(ui.Paint)))),
    [_keyedPaints]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(ui.Paint))))
  }));
  dart.trackLibraries("packages/qr_flutter/src/paint_cache.dart", {
    "package:qr_flutter/src/paint_cache.dart": paint_cache
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["paint_cache.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;gBAeiC;UAAgC;AACvD,mBAAS,AAAS,QAAD,IAAI,OAAgB,cAAT,QAAQ,IAAc;AACxD,YAAsC,UAApB,cAAR,OAAO,KAAY,eAAE,MAAM;IACvC;UAGiB,OAAqB;UACX;AACzB,UAAI,AAAQ,OAAD,IAAkB;AACJ,QAAvB,AAAa,yBAAI,KAAK;;AAEsC,QAA5D,AAAY,0BAAC,gBAAU,OAAO,aAAY,QAAQ,IAAK,KAAK;;IAEhE;eAI+B;UAAgC;AAC7D,UAAI,AAAQ,OAAD,IAAkB;AAC3B,cAAO,AAAa;;AAEpB,cAAO,AAAY,2BAAC,gBAAU,OAAO,aAAY,QAAQ;;IAE7D;WAMiC;UAAgC;AAC/D,UAAI,AAAQ,OAAD,IAAkB;AAC3B,cAAO;;AAEP,cAAc,uBAAC,AAAY,0BAAC,gBAAU,OAAO,aAAY,QAAQ;;IAErE;;;IAtCkB,qBAAsB;IACf,qBAA8B;;EAsCzD","file":"../../../../../../../../../../../packages/qr_flutter/src/paint_cache.dart.lib.js"}');
  // Exports:
  return {
    src__paint_cache: paint_cache
  };
}));

//# sourceMappingURL=paint_cache.dart.lib.js.map
