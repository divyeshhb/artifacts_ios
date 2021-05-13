define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__painting__debug_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  var debug = Object.create(dart.library);
  var $toInt = dartx.toInt;
  var $_set = dartx._set;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(false);
  var ObjectN = () => (ObjectN = dart.constFn(dart.nullable(core.Object)))();
  var IdentityMapOfString$ObjectN = () => (IdentityMapOfString$ObjectN = dart.constFn(_js_helper.IdentityMap$(core.String, ObjectN())))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/painting/debug.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/debug.dart";
  var _sizeToBytes = dart.privateName(debug, "_sizeToBytes");
  var source$ = dart.privateName(debug, "ImageSizeInfo.source");
  var displaySize$ = dart.privateName(debug, "ImageSizeInfo.displaySize");
  var imageSize$ = dart.privateName(debug, "ImageSizeInfo.imageSize");
  debug.ImageSizeInfo = class ImageSizeInfo extends core.Object {
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
    get displaySize() {
      return this[displaySize$];
    }
    set displaySize(value) {
      super.displaySize = value;
    }
    get imageSize() {
      return this[imageSize$];
    }
    set imageSize(value) {
      super.imageSize = value;
    }
    get displaySizeInBytes() {
      return this[_sizeToBytes](dart.nullCheck(this.displaySize));
    }
    get decodedSizeInBytes() {
      return this[_sizeToBytes](this.imageSize);
    }
    [_sizeToBytes](size) {
      if (size == null) dart.nullFailed(L0, 69, 25, "size");
      return (dart.notNull(size.width) * dart.notNull(size.height) * 4 * (4 / 3))[$toInt]();
    }
    toJson() {
      return (() => {
        let t0 = new (IdentityMapOfString$ObjectN()).new();
        t0[$_set]("source", this.source);
        if (this.displaySize != null) t0[$_set]("displaySize", new (IdentityMapOfString$ObjectN()).from(["width", dart.nullCheck(this.displaySize).width, "height", dart.nullCheck(this.displaySize).height]));
        t0[$_set]("imageSize", new (IdentityMapOfString$ObjectN()).from(["width", this.imageSize.width, "height", this.imageSize.height]));
        t0[$_set]("displaySizeInBytes", this.displaySizeInBytes);
        t0[$_set]("decodedSizeInBytes", this.decodedSizeInBytes);
        return t0;
      })();
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) {
        return false;
      }
      return debug.ImageSizeInfo.is(other) && other.source == this.source && dart.equals(other.imageSize, this.imageSize) && dart.equals(other.displaySize, this.displaySize);
    }
    get hashCode() {
      return ui.hashValues(this.source, this.displaySize, this.imageSize);
    }
    toString() {
      return "ImageSizeInfo(" + dart.str(this.source) + ", imageSize: " + dart.str(this.imageSize) + ", displaySize: " + dart.str(this.displaySize) + ")";
    }
  };
  (debug.ImageSizeInfo.new = function(opts) {
    let source = opts && 'source' in opts ? opts.source : null;
    let displaySize = opts && 'displaySize' in opts ? opts.displaySize : null;
    let imageSize = opts && 'imageSize' in opts ? opts.imageSize : null;
    if (imageSize == null) dart.nullFailed(L0, 51, 69, "imageSize");
    this[source$] = source;
    this[displaySize$] = displaySize;
    this[imageSize$] = imageSize;
    ;
  }).prototype = debug.ImageSizeInfo.prototype;
  dart.addTypeTests(debug.ImageSizeInfo);
  dart.addTypeCaches(debug.ImageSizeInfo);
  dart.setMethodSignature(debug.ImageSizeInfo, () => ({
    __proto__: dart.getMethods(debug.ImageSizeInfo.__proto__),
    [_sizeToBytes]: dart.fnType(core.int, [ui.Size]),
    toJson: dart.fnType(core.Map$(core.String, dart.nullable(core.Object)), [])
  }));
  dart.setGetterSignature(debug.ImageSizeInfo, () => ({
    __proto__: dart.getGetters(debug.ImageSizeInfo.__proto__),
    displaySizeInBytes: core.int,
    decodedSizeInBytes: core.int
  }));
  dart.setLibraryUri(debug.ImageSizeInfo, L1);
  dart.setFieldSignature(debug.ImageSizeInfo, () => ({
    __proto__: dart.getFields(debug.ImageSizeInfo.__proto__),
    source: dart.finalFieldType(dart.nullable(core.String)),
    displaySize: dart.finalFieldType(dart.nullable(ui.Size)),
    imageSize: dart.finalFieldType(ui.Size)
  }));
  dart.defineExtensionMethods(debug.ImageSizeInfo, ['_equals', 'toString']);
  dart.defineExtensionAccessors(debug.ImageSizeInfo, ['hashCode']);
  debug.debugAssertAllPaintingVarsUnset = function debugAssertAllPaintingVarsUnset(reason, opts) {
    if (reason == null) dart.nullFailed(L0, 177, 45, "reason");
    let debugDisableShadowsOverride = opts && 'debugDisableShadowsOverride' in opts ? opts.debugDisableShadowsOverride : false;
    if (debugDisableShadowsOverride == null) dart.nullFailed(L0, 177, 60, "debugDisableShadowsOverride");
    if (!dart.test(dart.fn(() => {
      if (!dart.equals(debug.debugDisableShadows, debugDisableShadowsOverride) || debug.debugNetworkImageHttpClientProvider != null || debug.debugOnPaintImage != null || dart.equals(debug.debugInvertOversizedImages, true) || debug.debugImageOverheadAllowance !== 1024) {
        dart.throw(assertions.FlutterError.new(reason));
      }
      return true;
    }, VoidTobool())())) dart.assertFailed(null, L0, 178, 10, "() {\n    if (debugDisableShadows != debugDisableShadowsOverride ||\n        debugNetworkImageHttpClientProvider != null ||\n        debugOnPaintImage != null ||\n        debugInvertOversizedImages == true ||\n        debugImageOverheadAllowance != 1024) {\n      throw FlutterError(reason);\n    }\n    return true;\n  }()");
    return true;
  };
  dart.defineLazy(debug, {
    /*debug.debugDisableShadows*/get debugDisableShadows() {
      return false;
    },
    set debugDisableShadows(_) {},
    /*debug.debugNetworkImageHttpClientProvider*/get debugNetworkImageHttpClientProvider() {
      return null;
    },
    set debugNetworkImageHttpClientProvider(_) {},
    /*debug.debugOnPaintImage*/get debugOnPaintImage() {
      return null;
    },
    set debugOnPaintImage(_) {},
    /*debug.debugInvertOversizedImages*/get debugInvertOversizedImages() {
      return false;
    },
    set debugInvertOversizedImages(_) {},
    /*debug.debugImageOverheadAllowance*/get debugImageOverheadAllowance() {
      return 1024;
    },
    set debugImageOverheadAllowance(_) {}
  }, false);
  dart.trackLibraries("packages/flutter/src/painting/debug.dart", {
    "package:flutter/src/painting/debug.dart": debug
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["debug.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;IAsDgB;;;;;;IAGF;;;;;;IAGD;;;;;;;AAGmB,gCAAwB,eAAX;IAAa;;AAG1B,gCAAa;IAAU;;UAE/B;AAGpB,YAA8C,EAA3B,AAAc,AAAI,aAA7B,AAAK,IAAD,uBAAS,AAAK,IAAD,WAAU,KAAK,AAAC,IAAC;IAC5C;;AAIE,YAAwB;;AACd,kBAAR,UAAU;AACV,YAAI,oBAAe,MACJ,UAAb,eAAgC,0CAC9B,SAAoB,AAAE,eAAb,yBACT,UAAqB,AAAE,eAAb;AAEH,kBAAX,aAA8B,0CAC5B,SAAS,AAAU,sBACnB,UAAU,AAAU;AAEF,kBAApB,sBAAsB;AACF,kBAApB,sBAAsB;;;IAE1B;;UAGwB;AACtB,uBAAU,iBAAN,KAAK,GAAgB;AACvB,cAAO;;AAET,YAAa,AAGT,wBAHG,KAAK,KACL,AAAM,AAAO,KAAR,WAAW,eACA,YAAhB,AAAM,KAAD,YAAc,mBACD,YAAlB,AAAM,KAAD,cAAgB;IAC9B;;AAGoB,2BAAW,aAAQ,kBAAa;IAAU;;AAGzC,YAAA,AAA0E,6BAA1D,eAAM,2BAAc,kBAAS,6BAAgB,oBAAW;IAAE;;;QAzDrE;QAAa;QAA2B;;IAAxC;IAAa;IAA2B;;EAAW;;;;;;;;;;;;;;;;;;;;;;;QA8HnC;QAAe;;AACzD,mBAAO,AASN;AARC,uBAAI,2BAAuB,2BAA2B,KAClD,6CAAuC,QACvC,2BAAqB,QACM,YAA3B,kCAA8B,SAC9B,sCAA+B;AACP,QAA1B,WAAM,4BAAa,MAAM;;AAE3B,YAAO;;AAET,UAAO;EACT;;MA7KK,yBAAmB;YAAG;;;MAgBP,yCAAmC;;;;MAqGnC,uBAAiB;;;;MAyBhC,gCAA0B;YAAG;;;MAM9B,iCAA2B;YAAG","file":"../../../../../../../../../../packages/flutter/src/painting/debug.dart.lib.js"}');
  // Exports:
  return {
    src__painting__debug: debug
  };
}));

//# sourceMappingURL=debug.dart.lib.js.map
