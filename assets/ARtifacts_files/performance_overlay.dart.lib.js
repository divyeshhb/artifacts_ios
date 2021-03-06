define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart'], (function load__packages__flutter__src__rendering__performance_overlay_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  var performance_overlay = Object.create(dart.library);
  var $leftShift = dartx['<<'];
  dart._checkModuleNullSafetyMode(false);
  var PerformanceOverlayOptionL = () => (PerformanceOverlayOptionL = dart.constFn(dart.legacy(performance_overlay.PerformanceOverlayOption)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/rendering/performance_overlay.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/performance_overlay.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: performance_overlay.PerformanceOverlayOption.prototype,
        [_name$]: "PerformanceOverlayOption.displayRasterizerStatistics",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: performance_overlay.PerformanceOverlayOption.prototype,
        [_name$]: "PerformanceOverlayOption.visualizeRasterizerStatistics",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: performance_overlay.PerformanceOverlayOption.prototype,
        [_name$]: "PerformanceOverlayOption.displayEngineStatistics",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: performance_overlay.PerformanceOverlayOption.prototype,
        [_name$]: "PerformanceOverlayOption.visualizeEngineStatistics",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], PerformanceOverlayOptionL());
    }
  }, false);
  var _name$ = dart.privateName(performance_overlay, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  performance_overlay.PerformanceOverlayOption = class PerformanceOverlayOption extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (performance_overlay.PerformanceOverlayOption.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 11, 6, "index");
    if (_name == null) dart.nullFailed(L0, 11, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = performance_overlay.PerformanceOverlayOption.prototype;
  dart.addTypeTests(performance_overlay.PerformanceOverlayOption);
  dart.addTypeCaches(performance_overlay.PerformanceOverlayOption);
  dart.setLibraryUri(performance_overlay.PerformanceOverlayOption, L1);
  dart.setFieldSignature(performance_overlay.PerformanceOverlayOption, () => ({
    __proto__: dart.getFields(performance_overlay.PerformanceOverlayOption.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(performance_overlay.PerformanceOverlayOption, ['toString']);
  performance_overlay.PerformanceOverlayOption.displayRasterizerStatistics = C0 || CT.C0;
  performance_overlay.PerformanceOverlayOption.visualizeRasterizerStatistics = C1 || CT.C1;
  performance_overlay.PerformanceOverlayOption.displayEngineStatistics = C2 || CT.C2;
  performance_overlay.PerformanceOverlayOption.visualizeEngineStatistics = C3 || CT.C3;
  performance_overlay.PerformanceOverlayOption.values = C4 || CT.C4;
  var _optionsMask = dart.privateName(performance_overlay, "_optionsMask");
  var _rasterizerThreshold = dart.privateName(performance_overlay, "_rasterizerThreshold");
  var _checkerboardRasterCacheImages = dart.privateName(performance_overlay, "_checkerboardRasterCacheImages");
  var _checkerboardOffscreenLayers = dart.privateName(performance_overlay, "_checkerboardOffscreenLayers");
  var _intrinsicHeight = dart.privateName(performance_overlay, "_intrinsicHeight");
  performance_overlay.RenderPerformanceOverlay = class RenderPerformanceOverlay extends box.RenderBox {
    get optionsMask() {
      return this[_optionsMask];
    }
    set optionsMask(value) {
      if (value == null) dart.nullFailed(L0, 83, 23, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 84, 12, "value != null");
      if (value == this[_optionsMask]) return;
      this[_optionsMask] = value;
      this.markNeedsPaint();
    }
    get rasterizerThreshold() {
      return this[_rasterizerThreshold];
    }
    set rasterizerThreshold(value) {
      if (value == null) dart.nullFailed(L0, 96, 31, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 97, 12, "value != null");
      if (value == this[_rasterizerThreshold]) return;
      this[_rasterizerThreshold] = value;
      this.markNeedsPaint();
    }
    get checkerboardRasterCacheImages() {
      return this[_checkerboardRasterCacheImages];
    }
    set checkerboardRasterCacheImages(value) {
      if (value == null) dart.nullFailed(L0, 107, 42, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 108, 12, "value != null");
      if (dart.equals(value, this[_checkerboardRasterCacheImages])) return;
      this[_checkerboardRasterCacheImages] = value;
      this.markNeedsPaint();
    }
    get checkerboardOffscreenLayers() {
      return this[_checkerboardOffscreenLayers];
    }
    set checkerboardOffscreenLayers(value) {
      if (value == null) dart.nullFailed(L0, 118, 40, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 119, 12, "value != null");
      if (dart.equals(value, this[_checkerboardOffscreenLayers])) return;
      this[_checkerboardOffscreenLayers] = value;
      this.markNeedsPaint();
    }
    get sizedByParent() {
      return true;
    }
    get alwaysNeedsCompositing() {
      return true;
    }
    computeMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 133, 42, "height");
      return 0.0;
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 138, 42, "height");
      return 0.0;
    }
    get [_intrinsicHeight]() {
      let result = 0.0;
      if ((dart.notNull(this.optionsMask) | (1)[$leftShift](performance_overlay.PerformanceOverlayOption.displayRasterizerStatistics.index)) >>> 0 > 0 || (dart.notNull(this.optionsMask) | (1)[$leftShift](performance_overlay.PerformanceOverlayOption.visualizeRasterizerStatistics.index)) >>> 0 > 0) result = result + 80;
      if ((dart.notNull(this.optionsMask) | (1)[$leftShift](performance_overlay.PerformanceOverlayOption.displayEngineStatistics.index)) >>> 0 > 0 || (dart.notNull(this.optionsMask) | (1)[$leftShift](performance_overlay.PerformanceOverlayOption.visualizeEngineStatistics.index)) >>> 0 > 0) result = result + 80;
      return result;
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 155, 43, "width");
      return this[_intrinsicHeight];
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 160, 43, "width");
      return this[_intrinsicHeight];
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 165, 40, "constraints");
      return constraints.constrain(new ui.Size.new(1 / 0, this[_intrinsicHeight]));
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 170, 30, "context");
      if (offset == null) dart.nullFailed(L0, 170, 46, "offset");
      if (!dart.test(this.needsCompositing)) dart.assertFailed(null, L0, 171, 12, "needsCompositing");
      context.addLayer(new layer.PerformanceOverlayLayer.new({overlayRect: new ui.Rect.fromLTWH(offset.dx, offset.dy, this.size.width, this.size.height), optionsMask: this.optionsMask, rasterizerThreshold: this.rasterizerThreshold, checkerboardRasterCacheImages: this.checkerboardRasterCacheImages, checkerboardOffscreenLayers: this.checkerboardOffscreenLayers}));
    }
  };
  (performance_overlay.RenderPerformanceOverlay.new = function(opts) {
    let optionsMask = opts && 'optionsMask' in opts ? opts.optionsMask : 0;
    if (optionsMask == null) dart.nullFailed(L0, 66, 9, "optionsMask");
    let rasterizerThreshold = opts && 'rasterizerThreshold' in opts ? opts.rasterizerThreshold : 0;
    if (rasterizerThreshold == null) dart.nullFailed(L0, 67, 9, "rasterizerThreshold");
    let checkerboardRasterCacheImages = opts && 'checkerboardRasterCacheImages' in opts ? opts.checkerboardRasterCacheImages : false;
    if (checkerboardRasterCacheImages == null) dart.nullFailed(L0, 68, 10, "checkerboardRasterCacheImages");
    let checkerboardOffscreenLayers = opts && 'checkerboardOffscreenLayers' in opts ? opts.checkerboardOffscreenLayers : false;
    if (checkerboardOffscreenLayers == null) dart.nullFailed(L0, 69, 10, "checkerboardOffscreenLayers");
    if (!(optionsMask != null)) dart.assertFailed(null, L0, 70, 15, "optionsMask != null");
    if (!(rasterizerThreshold != null)) dart.assertFailed(null, L0, 71, 15, "rasterizerThreshold != null");
    if (!(checkerboardRasterCacheImages != null)) dart.assertFailed(null, L0, 72, 15, "checkerboardRasterCacheImages != null");
    if (!(checkerboardOffscreenLayers != null)) dart.assertFailed(null, L0, 73, 15, "checkerboardOffscreenLayers != null");
    this[_optionsMask] = optionsMask;
    this[_rasterizerThreshold] = rasterizerThreshold;
    this[_checkerboardRasterCacheImages] = checkerboardRasterCacheImages;
    this[_checkerboardOffscreenLayers] = checkerboardOffscreenLayers;
    performance_overlay.RenderPerformanceOverlay.__proto__.new.call(this);
    ;
  }).prototype = performance_overlay.RenderPerformanceOverlay.prototype;
  dart.addTypeTests(performance_overlay.RenderPerformanceOverlay);
  dart.addTypeCaches(performance_overlay.RenderPerformanceOverlay);
  dart.setGetterSignature(performance_overlay.RenderPerformanceOverlay, () => ({
    __proto__: dart.getGetters(performance_overlay.RenderPerformanceOverlay.__proto__),
    optionsMask: core.int,
    rasterizerThreshold: core.int,
    checkerboardRasterCacheImages: core.bool,
    checkerboardOffscreenLayers: core.bool,
    [_intrinsicHeight]: core.double
  }));
  dart.setSetterSignature(performance_overlay.RenderPerformanceOverlay, () => ({
    __proto__: dart.getSetters(performance_overlay.RenderPerformanceOverlay.__proto__),
    optionsMask: core.int,
    rasterizerThreshold: core.int,
    checkerboardRasterCacheImages: core.bool,
    checkerboardOffscreenLayers: core.bool
  }));
  dart.setLibraryUri(performance_overlay.RenderPerformanceOverlay, L1);
  dart.setFieldSignature(performance_overlay.RenderPerformanceOverlay, () => ({
    __proto__: dart.getFields(performance_overlay.RenderPerformanceOverlay.__proto__),
    [_optionsMask]: dart.fieldType(core.int),
    [_rasterizerThreshold]: dart.fieldType(core.int),
    [_checkerboardRasterCacheImages]: dart.fieldType(core.bool),
    [_checkerboardOffscreenLayers]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter/src/rendering/performance_overlay.dart", {
    "package:flutter/src/rendering/performance_overlay.dart": performance_overlay
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["performance_overlay.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0CA;;;QAhCK;;;;;EAgCL;;;;;;;;;;;;;;;;;;;;;;AAsCyB;IAAY;;UAEf;AAClB,YAAO,AAAM,KAAD,IAAI;AAChB,UAAI,AAAM,KAAD,IAAI,oBACX;AACkB,MAApB,qBAAe,KAAK;AACJ,MAAhB;IACF;;AAK+B;IAAoB;;UAEvB;AAC1B,YAAO,AAAM,KAAD,IAAI;AAChB,UAAI,AAAM,KAAD,IAAI,4BACX;AAC0B,MAA5B,6BAAuB,KAAK;AACZ,MAAhB;IACF;;AAG0C;IAA8B;;UAEjC;AACrC,YAAO,AAAM,KAAD,IAAI;AAChB,UAAU,YAAN,KAAK,EAAI,uCACX;AACoC,MAAtC,uCAAiC,KAAK;AACtB,MAAhB;IACF;;AAGwC;IAA4B;;UAE/B;AACnC,YAAO,AAAM,KAAD,IAAI;AAChB,UAAU,YAAN,KAAK,EAAI,qCACX;AACkC,MAApC,qCAA+B,KAAK;AACpB,MAAhB;IACF;;AAG0B;IAAI;;AAGK;IAAI;;UAGA;AACrC,YAAO;IACT;;UAGuC;AACrC,YAAO;IACT;;AAIS,mBAAS;AAChB,UAAiB,AAAoE,cAAhF,oBAAiB,CAAF,eAA8B,AAA4B,yFAAS,KACtE,AAAsE,cAAlF,oBAAiB,CAAF,eAA8B,AAA8B,2FAAS,GACvF,AAA6B,SAA7B,AAAO,MAAD;AACR,UAAiB,AAAgE,cAA5E,oBAAiB,CAAF,eAA8B,AAAwB,qFAAS,KAClE,AAAkE,cAA9E,oBAAiB,CAAF,eAA8B,AAA0B,uFAAS,GACnF,AAA6B,SAA7B,AAAO,MAAD;AACR,YAAO,OAAM;IACf;;UAGwC;AACtC,YAAO;IACT;;UAGwC;AACtC,YAAO;IACT;;UAGqC;AACnC,YAAO,AAAY,YAAD,WAAW,uBAAsB;IACrD;UAG2B,SAAgB;UAAhB;UAAgB;AACzC,qBAAO;AAOL,MANF,AAAQ,OAAD,UAAU,oDACG,qBAAS,AAAO,MAAD,KAAK,AAAO,MAAD,KAAK,AAAK,iBAAO,AAAK,gCACrD,uCACQ,yDACU,iEACF;IAEjC;;;QAjHM;;QACA;;QACC;;QACA;;UACK,AAAY,WAAD,IAAI;UACf,AAAoB,mBAAD,IAAI;UACvB,AAA8B,6BAAD,IAAI;UACjC,AAA4B,2BAAD,IAAI;IACzB,qBAAE,WAAW;IACL,6BAAE,mBAAmB;IACX,uCAAE,6BAA6B;IACjC,qCAAE,2BAA2B;AAZ/D;;EAY+D","file":"../../../../../../../../../../packages/flutter/src/rendering/performance_overlay.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__performance_overlay: performance_overlay
  };
}));

//# sourceMappingURL=performance_overlay.dart.lib.js.map
