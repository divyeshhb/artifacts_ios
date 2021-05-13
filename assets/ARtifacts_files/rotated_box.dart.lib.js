define(['dart_sdk', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/rendering/layer.dart'], (function load__packages__flutter__src__rendering__rotated_box_dart(dart_sdk, packages__vector_math__vector_math_64$46dart, packages__flutter__src__rendering__layer$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  var rotated_box = Object.create(dart.library);
  var $isOdd = dartx.isOdd;
  var $modulo = dartx['%'];
  dart._checkModuleNullSafetyMode(false);
  var OffsetN = () => (OffsetN = dart.constFn(dart.nullable(ui.Offset)))();
  var BoxHitTestResultAndOffsetNTobool = () => (BoxHitTestResultAndOffsetNTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, OffsetN()])))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/rendering/rotated_box.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/rotated_box.dart";
  var _paintTransform = dart.privateName(rotated_box, "_paintTransform");
  var _transformLayer = dart.privateName(rotated_box, "_transformLayer");
  var _quarterTurns = dart.privateName(rotated_box, "_quarterTurns");
  var _isVertical = dart.privateName(rotated_box, "_isVertical");
  var _paintChild = dart.privateName(rotated_box, "_paintChild");
  const RenderBox_RenderObjectWithChildMixin$36 = class RenderBox_RenderObjectWithChildMixin extends box.RenderBox {};
  (RenderBox_RenderObjectWithChildMixin$36.new = function() {
    object.RenderObjectWithChildMixin$(box.RenderBox)[dart.mixinNew].call(this);
    RenderBox_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderObjectWithChildMixin$36, object.RenderObjectWithChildMixin$(box.RenderBox));
  rotated_box.RenderRotatedBox = class RenderRotatedBox extends RenderBox_RenderObjectWithChildMixin$36 {
    get quarterTurns() {
      return this[_quarterTurns];
    }
    set quarterTurns(value) {
      if (value == null) dart.nullFailed(L0, 37, 24, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 38, 12, "value != null");
      if (this[_quarterTurns] == value) return;
      this[_quarterTurns] = value;
      this.markNeedsLayout();
    }
    get [_isVertical]() {
      return this.quarterTurns[$isOdd];
    }
    computeMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 48, 42, "height");
      if (this.child == null) return 0.0;
      return dart.test(this[_isVertical]) ? dart.nullCheck(this.child).getMinIntrinsicHeight(height) : dart.nullCheck(this.child).getMinIntrinsicWidth(height);
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 55, 42, "height");
      if (this.child == null) return 0.0;
      return dart.test(this[_isVertical]) ? dart.nullCheck(this.child).getMaxIntrinsicHeight(height) : dart.nullCheck(this.child).getMaxIntrinsicWidth(height);
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 62, 43, "width");
      if (this.child == null) return 0.0;
      return dart.test(this[_isVertical]) ? dart.nullCheck(this.child).getMinIntrinsicWidth(width) : dart.nullCheck(this.child).getMinIntrinsicHeight(width);
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 69, 43, "width");
      if (this.child == null) return 0.0;
      return dart.test(this[_isVertical]) ? dart.nullCheck(this.child).getMaxIntrinsicWidth(width) : dart.nullCheck(this.child).getMaxIntrinsicHeight(width);
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 78, 40, "constraints");
      if (this.child == null) {
        return constraints.smallest;
      }
      let childSize = dart.nullCheck(this.child).getDryLayout(dart.test(this[_isVertical]) ? constraints.flipped : constraints);
      return dart.test(this[_isVertical]) ? new ui.Size.new(childSize.height, childSize.width) : childSize;
    }
    performLayout() {
      let t0;
      this[_paintTransform] = null;
      if (this.child != null) {
        dart.nullCheck(this.child).layout(dart.test(this[_isVertical]) ? this.constraints.flipped : this.constraints, {parentUsesSize: true});
        this.size = dart.test(this[_isVertical]) ? new ui.Size.new(dart.nullCheck(this.child).size.height, dart.nullCheck(this.child).size.width) : dart.nullCheck(this.child).size;
        this[_paintTransform] = (t0 = vector_math_64.Matrix4.identity(), (() => {
          t0.translate(dart.notNull(this.size.width) / 2.0, dart.notNull(this.size.height) / 2.0);
          t0.rotateZ(1.5707963267948966 * this.quarterTurns[$modulo](4));
          t0.translate(-dart.notNull(dart.nullCheck(this.child).size.width) / 2.0, -dart.notNull(dart.nullCheck(this.child).size.height) / 2.0);
          return t0;
        })());
      } else {
        this.size = this.constraints.smallest;
      }
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L0, 102, 41, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 102, 67, "position");
      if (!(this[_paintTransform] != null || dart.test(this.debugNeedsLayout) || this.child == null)) dart.assertFailed(null, L0, 103, 12, "_paintTransform != null || debugNeedsLayout || child == null");
      if (this.child == null || this[_paintTransform] == null) return false;
      return result.addWithPaintTransform({transform: this[_paintTransform], position: position, hitTest: dart.fn((result, position) => {
          if (result == null) dart.nullFailed(L0, 109, 34, "result");
          return dart.nullCheck(this.child).hitTest(result, {position: dart.nullCheck(position)});
        }, BoxHitTestResultAndOffsetNTobool())});
    }
    [_paintChild](context, offset) {
      if (context == null) dart.nullFailed(L0, 115, 36, "context");
      if (offset == null) dart.nullFailed(L0, 115, 52, "offset");
      context.paintChild(dart.nullCheck(this.child), offset);
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 120, 30, "context");
      if (offset == null) dart.nullFailed(L0, 120, 46, "offset");
      if (this.child != null) {
        this[_transformLayer] = context.pushTransform(this.needsCompositing, offset, dart.nullCheck(this[_paintTransform]), dart.bind(this, _paintChild), {oldLayer: this[_transformLayer]});
      } else {
        this[_transformLayer] = null;
      }
    }
    applyPaintTransform(child, transform) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L0, 132, 38, "child");
      if (transform == null) dart.nullFailed(L0, 132, 53, "transform");
      if (this[_paintTransform] != null) transform.multiply(dart.nullCheck(this[_paintTransform]));
      super.applyPaintTransform(child, transform);
    }
  };
  (rotated_box.RenderRotatedBox.new = function(opts) {
    let quarterTurns = opts && 'quarterTurns' in opts ? opts.quarterTurns : null;
    if (quarterTurns == null) dart.nullFailed(L0, 27, 18, "quarterTurns");
    let child = opts && 'child' in opts ? opts.child : null;
    this[_paintTransform] = null;
    this[_transformLayer] = null;
    if (!(quarterTurns != null)) dart.assertFailed(null, L0, 29, 15, "quarterTurns != null");
    this[_quarterTurns] = quarterTurns;
    rotated_box.RenderRotatedBox.__proto__.new.call(this);
    this.child = child;
  }).prototype = rotated_box.RenderRotatedBox.prototype;
  dart.addTypeTests(rotated_box.RenderRotatedBox);
  dart.addTypeCaches(rotated_box.RenderRotatedBox);
  dart.setMethodSignature(rotated_box.RenderRotatedBox, () => ({
    __proto__: dart.getMethods(rotated_box.RenderRotatedBox.__proto__),
    [_paintChild]: dart.fnType(dart.void, [object.PaintingContext, ui.Offset])
  }));
  dart.setGetterSignature(rotated_box.RenderRotatedBox, () => ({
    __proto__: dart.getGetters(rotated_box.RenderRotatedBox.__proto__),
    quarterTurns: core.int,
    [_isVertical]: core.bool
  }));
  dart.setSetterSignature(rotated_box.RenderRotatedBox, () => ({
    __proto__: dart.getSetters(rotated_box.RenderRotatedBox.__proto__),
    quarterTurns: core.int
  }));
  dart.setLibraryUri(rotated_box.RenderRotatedBox, L1);
  dart.setFieldSignature(rotated_box.RenderRotatedBox, () => ({
    __proto__: dart.getFields(rotated_box.RenderRotatedBox.__proto__),
    [_quarterTurns]: dart.fieldType(core.int),
    [_paintTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_transformLayer]: dart.fieldType(dart.nullable(layer.TransformLayer))
  }));
  dart.defineLazy(rotated_box, {
    /*rotated_box._kQuarterTurnsInRadians*/get _kQuarterTurnsInRadians() {
      return 1.5707963267948966;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/rendering/rotated_box.dart", {
    "package:flutter/src/rendering/rotated_box.dart": rotated_box
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["rotated_box.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkC0B;IAAa;;UAEhB;AACnB,YAAO,AAAM,KAAD,IAAI;AAChB,UAAI,AAAc,uBAAG,KAAK,EACxB;AACmB,MAArB,sBAAgB,KAAK;AACJ,MAAjB;IACF;;AAEwB,YAAA,AAAa;IAAK;;UAGH;AACrC,UAAI,AAAM,cAAG,MACX,MAAO;AACT,uBAAO,qBAAmB,AAAE,eAAP,kCAA6B,MAAM,IAAS,AAAE,eAAP,iCAA4B,MAAM;IAChG;;UAGuC;AACrC,UAAI,AAAM,cAAG,MACX,MAAO;AACT,uBAAO,qBAAmB,AAAE,eAAP,kCAA6B,MAAM,IAAS,AAAE,eAAP,iCAA4B,MAAM;IAChG;;UAGwC;AACtC,UAAI,AAAM,cAAG,MACX,MAAO;AACT,uBAAO,qBAAmB,AAAE,eAAP,iCAA4B,KAAK,IAAS,AAAE,eAAP,kCAA6B,KAAK;IAC9F;;UAGwC;AACtC,UAAI,AAAM,cAAG,MACX,MAAO;AACT,uBAAO,qBAAmB,AAAE,eAAP,iCAA4B,KAAK,IAAS,AAAE,eAAP,kCAA6B,KAAK;IAC9F;;UAKqC;AACnC,UAAI,AAAM,cAAG;AACX,cAAO,AAAY,YAAD;;AAET,sBAAiB,AAAE,eAAP,mCAAoB,qBAAc,AAAY,WAAD,WAAW,WAAW;AAC1F,uBAAO,qBAAc,gBAAK,AAAU,SAAD,SAAS,AAAU,SAAD,UAAU,SAAS;IAC1E;;;AAIwB,MAAtB,wBAAkB;AAClB,UAAI,cAAS;AACyE,QAA/E,AAAE,eAAP,6BAAc,qBAAc,AAAY,2BAAU,mCAA6B;AACD,QAA9E,sBAAO,qBAAc,gBAAU,AAAE,AAAK,eAAZ,yBAAyB,AAAE,AAAK,eAAZ,0BAA0B,AAAE,eAAP;AAID,QAHlE,iEAA0B;AACtB,uBAAqB,aAAX,AAAK,mBAAQ,KAAiB,aAAZ,AAAK,oBAAS;AAC1C,qBAAgC,qBAAG,AAAa,2BAAE;AAClD,uBAAU,AAAmB,cAAb,AAAE,AAAK,eAAZ,0BAAoB,KAAK,AAAoB,cAAd,AAAE,AAAK,eAAZ,2BAAqB;;;;AAEnC,QAA3B,YAAO,AAAY;;IAEvB;;UAGsC;UAA0B;;AAC9D,YAAO,AAA4C,yBAAzB,kBAAQ,0BAAoB,AAAM,cAAG;AAC/D,UAAI,AAAM,cAAG,QAAQ,AAAgB,yBAAG,MACtC,MAAO;AACT,YAAO,AAAO,OAAD,mCACA,iCACD,QAAQ,WACT,SAAkB,QAAgB;cAAhB;AACzB,gBAAY,AAAE,gBAAP,oBAAe,MAAM,aAAoB,eAAR,QAAQ;;IAGtD;kBAEiC,SAAgB;UAAhB;UAAgB;AACb,MAAlC,AAAQ,OAAD,YAAiB,eAAL,aAAQ,MAAM;IACnC;UAG2B,SAAgB;UAAhB;UAAgB;AACzC,UAAI,cAAS;AAEmB,QAD9B,wBAAkB,AAAQ,OAAD,eAAe,uBAAkB,MAAM,EAAiB,eAAf,kCAAkB,+BACtE;;AAEQ,QAAtB,wBAAkB;;IAEtB;wBAKmC,OAAe;uBAAf;;UAAe;AAChD,UAAI,yBAAmB,MACrB,AAAU,AAA0B,SAA3B,UAAyB,eAAf;AACsB,MAArC,0BAAoB,KAAK,EAAE,SAAS;IAC5C;;;QA7Ge;;QACF;IA+CJ;IAsDO;UApGJ,AAAa,YAAD,IAAI;IACT,sBAAE,YAAY;AAJjC;AAKoB,IAAb,aAAQ,KAAK;EACpB;;;;;;;;;;;;;;;;;;;;;;;;MAjBW,mCAAuB","file":"../../../../../../../../../../packages/flutter/src/rendering/rotated_box.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__rotated_box: rotated_box
  };
}));

//# sourceMappingURL=rotated_box.dart.lib.js.map
