define(['dart_sdk', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__widgets__scroll_metrics_dart(dart_sdk, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var scroll_metrics = Object.create(dart.library);
  var $clamp = dartx.clamp;
  var $toStringAsFixed = dartx.toStringAsFixed;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L1 = "package:flutter/src/widgets/scroll_metrics.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/scroll_metrics.dart";
  scroll_metrics.ScrollMetrics = class ScrollMetrics extends core.Object {
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2;
      let minScrollExtent = opts && 'minScrollExtent' in opts ? opts.minScrollExtent : null;
      let maxScrollExtent = opts && 'maxScrollExtent' in opts ? opts.maxScrollExtent : null;
      let pixels = opts && 'pixels' in opts ? opts.pixels : null;
      let viewportDimension = opts && 'viewportDimension' in opts ? opts.viewportDimension : null;
      let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
      return new scroll_metrics.FixedScrollMetrics.new({minScrollExtent: (t0 = minScrollExtent, t0 == null ? dart.test(this.hasContentDimensions) ? this.minScrollExtent : null : t0), maxScrollExtent: (t0$ = maxScrollExtent, t0$ == null ? dart.test(this.hasContentDimensions) ? this.maxScrollExtent : null : t0$), pixels: (t0$0 = pixels, t0$0 == null ? dart.test(this.hasPixels) ? this.pixels : null : t0$0), viewportDimension: (t0$1 = viewportDimension, t0$1 == null ? dart.test(this.hasViewportDimension) ? this.viewportDimension : null : t0$1), axisDirection: (t0$2 = axisDirection, t0$2 == null ? this.axisDirection : t0$2)});
    }
    get axis() {
      return basic_types.axisDirectionToAxis(this.axisDirection);
    }
    get outOfRange() {
      return dart.notNull(this.pixels) < dart.notNull(this.minScrollExtent) || dart.notNull(this.pixels) > dart.notNull(this.maxScrollExtent);
    }
    get atEdge() {
      return this.pixels == this.minScrollExtent || this.pixels == this.maxScrollExtent;
    }
    get extentBefore() {
      return math.max(core.double, dart.notNull(this.pixels) - dart.notNull(this.minScrollExtent), 0.0);
    }
    get extentInside() {
      if (!(dart.notNull(this.minScrollExtent) <= dart.notNull(this.maxScrollExtent))) dart.assertFailed(null, L0, 116, 12, "minScrollExtent <= maxScrollExtent");
      return dart.notNull(this.viewportDimension) - (dart.notNull(this.minScrollExtent) - dart.notNull(this.pixels))[$clamp](0, this.viewportDimension) - (dart.notNull(this.pixels) - dart.notNull(this.maxScrollExtent))[$clamp](0, this.viewportDimension);
    }
    get extentAfter() {
      return math.max(core.double, dart.notNull(this.maxScrollExtent) - dart.notNull(this.pixels), 0.0);
    }
  };
  (scroll_metrics.ScrollMetrics.new = function() {
    ;
  }).prototype = scroll_metrics.ScrollMetrics.prototype;
  dart.addTypeTests(scroll_metrics.ScrollMetrics);
  dart.addTypeCaches(scroll_metrics.ScrollMetrics);
  dart.setMethodSignature(scroll_metrics.ScrollMetrics, () => ({
    __proto__: dart.getMethods(scroll_metrics.ScrollMetrics.__proto__),
    copyWith: dart.fnType(scroll_metrics.ScrollMetrics, [], {axisDirection: dart.nullable(basic_types.AxisDirection), maxScrollExtent: dart.nullable(core.double), minScrollExtent: dart.nullable(core.double), pixels: dart.nullable(core.double), viewportDimension: dart.nullable(core.double)}, {})
  }));
  dart.setGetterSignature(scroll_metrics.ScrollMetrics, () => ({
    __proto__: dart.getGetters(scroll_metrics.ScrollMetrics.__proto__),
    axis: basic_types.Axis,
    outOfRange: core.bool,
    atEdge: core.bool,
    extentBefore: core.double,
    extentInside: core.double,
    extentAfter: core.double
  }));
  dart.setLibraryUri(scroll_metrics.ScrollMetrics, L1);
  var _minScrollExtent = dart.privateName(scroll_metrics, "_minScrollExtent");
  var _maxScrollExtent = dart.privateName(scroll_metrics, "_maxScrollExtent");
  var _pixels = dart.privateName(scroll_metrics, "_pixels");
  var _viewportDimension = dart.privateName(scroll_metrics, "_viewportDimension");
  var axisDirection$ = dart.privateName(scroll_metrics, "FixedScrollMetrics.axisDirection");
  scroll_metrics.FixedScrollMetrics = class FixedScrollMetrics extends scroll_metrics.ScrollMetrics {
    get axisDirection() {
      return this[axisDirection$];
    }
    set axisDirection(value) {
      super.axisDirection = value;
    }
    get minScrollExtent() {
      return dart.nullCheck(this[_minScrollExtent]);
    }
    get maxScrollExtent() {
      return dart.nullCheck(this[_maxScrollExtent]);
    }
    get hasContentDimensions() {
      return this[_minScrollExtent] != null && this[_maxScrollExtent] != null;
    }
    get pixels() {
      return dart.nullCheck(this[_pixels]);
    }
    get hasPixels() {
      return this[_pixels] != null;
    }
    get viewportDimension() {
      return dart.nullCheck(this[_viewportDimension]);
    }
    get hasViewportDimension() {
      return this[_viewportDimension] != null;
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "FixedScrollMetrics")) + "(" + this.extentBefore[$toStringAsFixed](1) + "..[" + this.extentInside[$toStringAsFixed](1) + "].." + this.extentAfter[$toStringAsFixed](1) + ")";
    }
  };
  (scroll_metrics.FixedScrollMetrics.new = function(opts) {
    let minScrollExtent = opts && 'minScrollExtent' in opts ? opts.minScrollExtent : null;
    let maxScrollExtent = opts && 'maxScrollExtent' in opts ? opts.maxScrollExtent : null;
    let pixels = opts && 'pixels' in opts ? opts.pixels : null;
    let viewportDimension = opts && 'viewportDimension' in opts ? opts.viewportDimension : null;
    let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
    if (axisDirection == null) dart.nullFailed(L0, 139, 19, "axisDirection");
    this[axisDirection$] = axisDirection;
    this[_minScrollExtent] = minScrollExtent;
    this[_maxScrollExtent] = maxScrollExtent;
    this[_pixels] = pixels;
    this[_viewportDimension] = viewportDimension;
    ;
  }).prototype = scroll_metrics.FixedScrollMetrics.prototype;
  dart.addTypeTests(scroll_metrics.FixedScrollMetrics);
  dart.addTypeCaches(scroll_metrics.FixedScrollMetrics);
  dart.setGetterSignature(scroll_metrics.FixedScrollMetrics, () => ({
    __proto__: dart.getGetters(scroll_metrics.FixedScrollMetrics.__proto__),
    minScrollExtent: core.double,
    maxScrollExtent: core.double,
    hasContentDimensions: core.bool,
    pixels: core.double,
    hasPixels: core.bool,
    viewportDimension: core.double,
    hasViewportDimension: core.bool
  }));
  dart.setLibraryUri(scroll_metrics.FixedScrollMetrics, L1);
  dart.setFieldSignature(scroll_metrics.FixedScrollMetrics, () => ({
    __proto__: dart.getFields(scroll_metrics.FixedScrollMetrics.__proto__),
    [_minScrollExtent]: dart.finalFieldType(dart.nullable(core.double)),
    [_maxScrollExtent]: dart.finalFieldType(dart.nullable(core.double)),
    [_pixels]: dart.finalFieldType(dart.nullable(core.double)),
    [_viewportDimension]: dart.finalFieldType(dart.nullable(core.double)),
    axisDirection: dart.finalFieldType(basic_types.AxisDirection)
  }));
  dart.defineExtensionMethods(scroll_metrics.FixedScrollMetrics, ['toString']);
  dart.trackLibraries("packages/flutter/src/widgets/scroll_metrics.dart", {
    "package:flutter/src/widgets/scroll_metrics.dart": scroll_metrics
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scroll_metrics.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;UA2CY;UACA;UACA;UACA;UACO;AAEf,YAAO,8DAC4B,KAAhB,eAAe,QAAf,iBAAoB,6BAA4B,uBAAkB,8BAClD,MAAhB,eAAe,SAAf,iBAAoB,6BAA4B,uBAAkB,sBACpE,OAAP,MAAM,UAAN,iBAAW,kBAAiB,cAAS,kCACR,OAAlB,iBAAiB,UAAjB,iBAAsB,6BAA4B,yBAAoB,8BAC5D,OAAd,aAAa,UAAb,OAAsB;IAEzC;;AAqCiB,6CAAoB;IAAc;;AAI5B,YAAO,AAAkB,cAAzB,4BAAS,yBAA0B,aAAP,4BAAS;IAAe;;AAIxD,YAAA,AAAO,AAAmB,gBAAhB,wBAAmB,AAAO,eAAG;IAAe;;AAI9C,mCAAgB,aAAP,4BAAS,uBAAiB;IAAI;;AAUhE,YAAuB,aAAhB,sCAAmB;AAC1B,YAEE,AAEA,cAJK,0BAEwB,CAAV,aAAhB,qCAAkB,sBAAc,GAAG,0BAET,CAAnB,aAAP,4BAAS,+BAAuB,GAAG;IAC1C;;AAI0B,mCAAyB,aAAhB,qCAAkB,cAAQ;IAAI;;;;EACnE;;;;;;;;;;;;;;;;;;;;;;;IA4CsB;;;;;;;AAzBU,YAAgB,gBAAhB;IAAiB;;AAIjB,YAAgB,gBAAhB;IAAiB;;AAId,YAAA,AAAyB,2BAAL,QAAQ,0BAAoB;IAAI;;AAGhE,YAAO,gBAAP;IAAQ;;AAIP,YAAA,AAAQ,kBAAG;IAAI;;AAGL,YAAkB,gBAAlB;IAAmB;;AAIlB,YAAA,AAAmB,6BAAG;IAAI;;AAOzD,YAAsK,UAA5J,yBAAkB,MAAM,yBAAsB,MAAG,AAAa,oCAAgB,KAAG,QAAK,AAAa,oCAAgB,KAAG,QAAK,AAAY,mCAAgB,KAAG;IACtK;;;QAzCmB;QACA;QACA;QACA;QACH;;;IACM,yBAAE,eAAe;IACjB,yBAAE,eAAe;IAC1B,gBAAE,MAAM;IACG,2BAAE,iBAAiB","file":"../../../../../../../../../../packages/flutter/src/widgets/scroll_metrics.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__scroll_metrics: scroll_metrics
  };
}));

//# sourceMappingURL=scroll_metrics.dart.lib.js.map
