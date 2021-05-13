define(['dart_sdk', 'packages/flutter/src/painting/debug.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__painting__box_shadow_dart(dart_sdk, packages__flutter__src__painting__debug$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const debug = packages__flutter__src__painting__debug$46dart.src__painting__debug;
  const debug$ = packages__flutter__src__foundation__debug$46dart.src__foundation__debug;
  var box_shadow = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(false);
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(box_shadow.BoxShadow)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/box_shadow.dart";
  var L1 = "package:flutter/src/painting/box_shadow.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    }
  }, false);
  var Color_value = dart.privateName(ui, "Color.value");
  var C0;
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C1;
  var spreadRadius$ = dart.privateName(box_shadow, "BoxShadow.spreadRadius");
  box_shadow.BoxShadow = class BoxShadow extends ui.Shadow {
    get spreadRadius() {
      return this[spreadRadius$];
    }
    set spreadRadius(value) {
      super.spreadRadius = value;
    }
    toPaint() {
      let t0;
      let result = (t0 = ui.Paint.new(), (() => {
        t0.color = this.color;
        t0.maskFilter = new ui.MaskFilter.blur(ui.BlurStyle.normal, this.blurSigma);
        return t0;
      })());
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug.debugDisableShadows)) result.maskFilter = null;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 55, 12, "() {\n      if (debugDisableShadows)\n        result.maskFilter = null;\n      return true;\n    }()");
      return result;
    }
    scale(factor) {
      if (factor == null) dart.nullFailed(L0, 65, 26, "factor");
      return new box_shadow.BoxShadow.new({color: this.color, offset: this.offset['*'](factor), blurRadius: dart.notNull(this.blurRadius) * dart.notNull(factor), spreadRadius: dart.notNull(this.spreadRadius) * dart.notNull(factor)});
    }
    static lerp(a, b, t) {
      if (t == null) dart.nullFailed(L0, 81, 61, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 82, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b).scale(t);
      if (b == null) return a.scale(1.0 - dart.notNull(t));
      return new box_shadow.BoxShadow.new({color: dart.nullCheck(ui.Color.lerp(a.color, b.color, t)), offset: dart.nullCheck(ui.Offset.lerp(a.offset, b.offset, t)), blurRadius: dart.nullCheck(ui.lerpDouble(a.blurRadius, b.blurRadius, t)), spreadRadius: dart.nullCheck(ui.lerpDouble(a.spreadRadius, b.spreadRadius, t))});
    }
    static lerpList(a, b, t) {
      if (t == null) dart.nullFailed(L0, 102, 83, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 103, 12, "t != null");
      if (a == null && b == null) return null;
      a == null ? a = JSArrayOfBoxShadow().of([]) : null;
      b == null ? b = JSArrayOfBoxShadow().of([]) : null;
      let commonLength = math.min(core.int, a[$length], b[$length]);
      return (() => {
        let t0 = JSArrayOfBoxShadow().of([]);
        for (let i = 0; i < commonLength; i = i + 1)
          t0.push(dart.nullCheck(box_shadow.BoxShadow.lerp(a[$_get](i), b[$_get](i), t)));
        for (let i = commonLength; i < dart.notNull(a[$length]); i = i + 1)
          t0.push(a[$_get](i).scale(1.0 - dart.notNull(t)));
        for (let i = commonLength; i < dart.notNull(b[$length]); i = i + 1)
          t0.push(b[$_get](i).scale(t));
        return t0;
      })();
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return box_shadow.BoxShadow.is(other) && dart.equals(other.color, this.color) && dart.equals(other.offset, this.offset) && other.blurRadius == this.blurRadius && other.spreadRadius == this.spreadRadius;
    }
    get hashCode() {
      return ui.hashValues(this.color, this.offset, this.blurRadius, this.spreadRadius);
    }
    toString() {
      return "BoxShadow(" + dart.str(this.color) + ", " + dart.str(this.offset) + ", " + dart.str(debug$.debugFormatDouble(this.blurRadius)) + ", " + dart.str(debug$.debugFormatDouble(this.spreadRadius)) + ")";
    }
  };
  (box_shadow.BoxShadow.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : C0 || CT.C0;
    if (color == null) dart.nullFailed(L0, 35, 11, "color");
    let offset = opts && 'offset' in opts ? opts.offset : C1 || CT.C1;
    if (offset == null) dart.nullFailed(L0, 36, 12, "offset");
    let blurRadius = opts && 'blurRadius' in opts ? opts.blurRadius : 0;
    if (blurRadius == null) dart.nullFailed(L0, 37, 12, "blurRadius");
    let spreadRadius = opts && 'spreadRadius' in opts ? opts.spreadRadius : 0;
    if (spreadRadius == null) dart.nullFailed(L0, 38, 10, "spreadRadius");
    this[spreadRadius$] = spreadRadius;
    box_shadow.BoxShadow.__proto__.new.call(this, {color: color, offset: offset, blurRadius: blurRadius});
    ;
  }).prototype = box_shadow.BoxShadow.prototype;
  dart.addTypeTests(box_shadow.BoxShadow);
  dart.addTypeCaches(box_shadow.BoxShadow);
  dart.setMethodSignature(box_shadow.BoxShadow, () => ({
    __proto__: dart.getMethods(box_shadow.BoxShadow.__proto__),
    scale: dart.fnType(box_shadow.BoxShadow, [core.double])
  }));
  dart.setLibraryUri(box_shadow.BoxShadow, L1);
  dart.setFieldSignature(box_shadow.BoxShadow, () => ({
    __proto__: dart.getFields(box_shadow.BoxShadow.__proto__),
    spreadRadius: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(box_shadow.BoxShadow, ['_equals', 'toString']);
  dart.defineExtensionAccessors(box_shadow.BoxShadow, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/painting/box_shadow.dart", {
    "package:flutter/src/painting/box_shadow.dart": box_shadow
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["box_shadow.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyCe;;;;;;;;AAUC,yCAAS;AACjB,mBAAQ;AACR,wBAAwB,uBAAe,qBAAQ;;;AACnD,qBAAO,AAIN;AAHC,sBAAI,4BACF,AAAO,AAAiB,MAAlB,cAAc;AACtB,cAAO;;AAET,YAAO,OAAM;IACf;;UAIuB;AACrB,YAAO,sCACE,oBACC,AAAO,iBAAE,MAAM,eACA,aAAX,gCAAa,MAAM,iBACJ,aAAb,kCAAe,MAAM;IAEvC;gBASkC,GAAc;UAAU;AACxD,YAAO,AAAE,CAAD,IAAI;AACZ,UAAI,AAAE,CAAD,IAAI,QAAQ,AAAE,CAAD,IAAI,MACpB,MAAO;AACT,UAAI,AAAE,CAAD,IAAI,MACP,MAAQ,AAAE,gBAAH,CAAC,QAAQ,CAAC;AACnB,UAAI,AAAE,CAAD,IAAI,MACP,MAAO,AAAE,EAAD,OAAO,AAAI,mBAAE,CAAC;AACxB,YAAO,sCACiC,eAAzB,cAAK,AAAE,CAAD,QAAQ,AAAE,CAAD,QAAQ,CAAC,YACK,eAA3B,eAAK,AAAE,CAAD,SAAS,AAAE,CAAD,SAAS,CAAC,gBACe,eAA5C,cAAc,AAAE,CAAD,aAAa,AAAE,CAAD,aAAa,CAAC,kBACO,eAAhD,cAAc,AAAE,CAAD,eAAe,AAAE,CAAD,eAAe,CAAC;IAEjE;oBAOkD,GAAoB;UAAU;AAC9E,YAAO,AAAE,CAAD,IAAI;AACZ,UAAI,AAAE,CAAD,IAAI,QAAQ,AAAE,CAAD,IAAI,MACpB,MAAO;AACU,MAAnB,AAAE,CAAD,IAAC,OAAF,IAAiB,8BAAf;AACiB,MAAnB,AAAE,CAAD,IAAC,OAAF,IAAiB,8BAAf;AACQ,yBAAe,mBAAS,AAAE,CAAD,WAAS,AAAE,CAAD;AAC7C,YAAkB;;AAChB,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,YAAY,EAAE,IAAA,AAAE,CAAD,GAAI;AAAgC,iCAAnB,0BAAK,AAAC,CAAA,QAAC,CAAC,GAAG,AAAC,CAAA,QAAC,CAAC,GAAG,CAAC;AACtE,iBAAS,IAAI,YAAY,EAAE,AAAE,CAAD,gBAAG,AAAE,CAAD,YAAS,IAAA,AAAE,CAAD,GAAI;AAAQ,kBAAL,AAAC,CAAA,QAAC,CAAC,QAAQ,AAAI,mBAAE,CAAC;AACnE,iBAAS,IAAI,YAAY,EAAE,AAAE,CAAD,gBAAG,AAAE,CAAD,YAAS,IAAA,AAAE,CAAD,GAAI;AAAQ,kBAAL,AAAC,CAAA,QAAC,CAAC,QAAQ,CAAC;;;IAEjE;;UAGwB;AACtB,UAAI,AAAU,SAAM,KAAK,EACvB,MAAO;AACT,uBAAU,iBAAN,KAAK,GAAgB,qBACvB,MAAO;AACT,YAAa,AAIT,yBAJG,KAAK,KACO,YAAZ,AAAM,KAAD,QAAU,eACF,YAAb,AAAM,KAAD,SAAW,gBAChB,AAAM,AAAW,KAAZ,eAAe,mBACpB,AAAM,AAAa,KAAd,iBAAiB;IAC/B;;AAGoB,2BAAW,YAAO,aAAQ,iBAAY;IAAa;;AAGlD,YAAA,AAAkG,yBAAtF,cAAK,gBAAG,eAAM,gBAAI,yBAAkB,oBAAY,gBAAI,yBAAkB,sBAAc;IAAE;;;QAlG/G;;QACC;;QACA;;QACF;;;AACF,0DAAa,KAAK,UAAU,MAAM,cAAc,UAAU;;EAAC","file":"../../../../../../../../../../packages/flutter/src/painting/box_shadow.dart.lib.js"}');
  // Exports:
  return {
    src__painting__box_shadow: box_shadow
  };
}));

//# sourceMappingURL=box_shadow.dart.lib.js.map
