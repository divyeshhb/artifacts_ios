define(['dart_sdk', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__painting__matrix_utils_dart(dart_sdk, packages__vector_math__vector_math_64$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const debug = packages__flutter__src__foundation__debug$46dart.src__foundation__debug;
  var matrix_utils = Object.create(dart.library);
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $isFinite = dartx.isFinite;
  var $join = dartx.join;
  dart._checkModuleNullSafetyMode(false);
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/matrix_utils.dart";
  var L1 = "package:flutter/src/painting/matrix_utils.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.vertical",
        index: 1
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: diagnostics._NoDefaultValue.prototype
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: diagnostics.DiagnosticLevel.prototype,
        [_name$]: "DiagnosticLevel.info",
        index: 3
      });
    },
    get C3() {
      return C3 = dart.constList(["null"], StringL());
    }
  }, false);
  var _name = dart.privateName(basic_types, "_name");
  var C0;
  matrix_utils.MatrixUtils = class MatrixUtils extends core.Object {
    static getAsTranslation(transform) {
      if (transform == null) dart.nullFailed(L0, 24, 43, "transform");
      if (!(transform != null)) dart.assertFailed(null, L0, 25, 12, "transform != null");
      let values = transform.storage;
      if (values[$_get](0) === 1.0 && values[$_get](1) === 0.0 && values[$_get](2) === 0.0 && values[$_get](3) === 0.0 && values[$_get](4) === 0.0 && values[$_get](5) === 1.0 && values[$_get](6) === 0.0 && values[$_get](7) === 0.0 && values[$_get](8) === 0.0 && values[$_get](9) === 0.0 && values[$_get](10) === 1.0 && values[$_get](11) === 0.0 && values[$_get](14) === 0.0 && values[$_get](15) === 1.0) {
        return new ui.Offset.new(values[$_get](12), values[$_get](13));
      }
      return null;
    }
    static getAsScale(transform) {
      if (transform == null) dart.nullFailed(L0, 51, 37, "transform");
      if (!(transform != null)) dart.assertFailed(null, L0, 52, 12, "transform != null");
      let values = transform.storage;
      if (values[$_get](1) === 0.0 && values[$_get](2) === 0.0 && values[$_get](3) === 0.0 && values[$_get](4) === 0.0 && values[$_get](6) === 0.0 && values[$_get](7) === 0.0 && values[$_get](8) === 0.0 && values[$_get](9) === 0.0 && values[$_get](10) === 1.0 && values[$_get](11) === 0.0 && values[$_get](12) === 0.0 && values[$_get](13) === 0.0 && values[$_get](14) === 0.0 && values[$_get](15) === 1.0 && values[$_get](0) == values[$_get](5)) {
        return values[$_get](0);
      }
      return null;
    }
    static matrixEquals(a, b) {
      if (a == b) return true;
      if (!(a != null || b != null)) dart.assertFailed(null, L0, 80, 12, "a != null || b != null");
      if (a == null) return matrix_utils.MatrixUtils.isIdentity(dart.nullCheck(b));
      if (b == null) return matrix_utils.MatrixUtils.isIdentity(a);
      if (!(a != null && b != null)) dart.assertFailed(null, L0, 85, 12, "a != null && b != null");
      return a.storage[$_get](0) == b.storage[$_get](0) && a.storage[$_get](1) == b.storage[$_get](1) && a.storage[$_get](2) == b.storage[$_get](2) && a.storage[$_get](3) == b.storage[$_get](3) && a.storage[$_get](4) == b.storage[$_get](4) && a.storage[$_get](5) == b.storage[$_get](5) && a.storage[$_get](6) == b.storage[$_get](6) && a.storage[$_get](7) == b.storage[$_get](7) && a.storage[$_get](8) == b.storage[$_get](8) && a.storage[$_get](9) == b.storage[$_get](9) && a.storage[$_get](10) == b.storage[$_get](10) && a.storage[$_get](11) == b.storage[$_get](11) && a.storage[$_get](12) == b.storage[$_get](12) && a.storage[$_get](13) == b.storage[$_get](13) && a.storage[$_get](14) == b.storage[$_get](14) && a.storage[$_get](15) == b.storage[$_get](15);
    }
    static isIdentity(a) {
      if (a == null) dart.nullFailed(L0, 105, 34, "a");
      if (!(a != null)) dart.assertFailed(null, L0, 106, 12, "a != null");
      return a.storage[$_get](0) === 1.0 && a.storage[$_get](1) === 0.0 && a.storage[$_get](2) === 0.0 && a.storage[$_get](3) === 0.0 && a.storage[$_get](4) === 0.0 && a.storage[$_get](5) === 1.0 && a.storage[$_get](6) === 0.0 && a.storage[$_get](7) === 0.0 && a.storage[$_get](8) === 0.0 && a.storage[$_get](9) === 0.0 && a.storage[$_get](10) === 1.0 && a.storage[$_get](11) === 0.0 && a.storage[$_get](12) === 0.0 && a.storage[$_get](13) === 0.0 && a.storage[$_get](14) === 0.0 && a.storage[$_get](15) === 1.0;
    }
    static transformPoint(transform, point) {
      if (transform == null) dart.nullFailed(L0, 136, 40, "transform");
      if (point == null) dart.nullFailed(L0, 136, 58, "point");
      let storage = transform.storage;
      let x = point.dx;
      let y = point.dy;
      let rx = dart.notNull(storage[$_get](0)) * dart.notNull(x) + dart.notNull(storage[$_get](4)) * dart.notNull(y) + dart.notNull(storage[$_get](12));
      let ry = dart.notNull(storage[$_get](1)) * dart.notNull(x) + dart.notNull(storage[$_get](5)) * dart.notNull(y) + dart.notNull(storage[$_get](13));
      let rw = dart.notNull(storage[$_get](3)) * dart.notNull(x) + dart.notNull(storage[$_get](7)) * dart.notNull(y) + dart.notNull(storage[$_get](15));
      if (rw === 1.0) {
        return new ui.Offset.new(rx, ry);
      } else {
        return new ui.Offset.new(rx / rw, ry / rw);
      }
    }
    static _safeTransformRect(transform, rect) {
      if (transform == null) dart.nullFailed(L0, 161, 42, "transform");
      if (rect == null) dart.nullFailed(L0, 161, 58, "rect");
      let storage = transform.storage;
      let isAffine = storage[$_get](3) === 0.0 && storage[$_get](7) === 0.0 && storage[$_get](15) === 1.0;
      matrix_utils.MatrixUtils._accumulate(storage, rect.left, rect.top, true, isAffine);
      matrix_utils.MatrixUtils._accumulate(storage, rect.right, rect.top, false, isAffine);
      matrix_utils.MatrixUtils._accumulate(storage, rect.left, rect.bottom, false, isAffine);
      matrix_utils.MatrixUtils._accumulate(storage, rect.right, rect.bottom, false, isAffine);
      return new ui.Rect.fromLTRB(matrix_utils.MatrixUtils._minMax[$_get](0), matrix_utils.MatrixUtils._minMax[$_get](1), matrix_utils.MatrixUtils._minMax[$_get](2), matrix_utils.MatrixUtils._minMax[$_get](3));
    }
    static get _minMax() {
      let t1;
      if (!dart.test(matrix_utils.MatrixUtils['_#_minMax#isSet'])) {
        let t0 = _native_typed_data.NativeFloat64List.new(4);
        if (dart.test(matrix_utils.MatrixUtils['_#_minMax#isSet'])) dart.throw(new _internal.LateError.fieldADI("_minMax"));
        matrix_utils.MatrixUtils['_#_minMax'] = t0;
        matrix_utils.MatrixUtils['_#_minMax#isSet'] = true;
      }
      t1 = matrix_utils.MatrixUtils['_#_minMax'];
      return t1;
    }
    static _accumulate(m, x, y, first, isAffine) {
      let t3, t2, t1, t3$, t2$, t1$;
      if (m == null) dart.nullFailed(L0, 176, 39, "m");
      if (x == null) dart.nullFailed(L0, 176, 49, "x");
      if (y == null) dart.nullFailed(L0, 176, 59, "y");
      if (first == null) dart.nullFailed(L0, 176, 67, "first");
      if (isAffine == null) dart.nullFailed(L0, 176, 79, "isAffine");
      let w = dart.test(isAffine) ? 1.0 : 1.0 / (dart.notNull(m[$_get](3)) * dart.notNull(x) + dart.notNull(m[$_get](7)) * dart.notNull(y) + dart.notNull(m[$_get](15)));
      let tx = (dart.notNull(m[$_get](0)) * dart.notNull(x) + dart.notNull(m[$_get](4)) * dart.notNull(y) + dart.notNull(m[$_get](12))) * w;
      let ty = (dart.notNull(m[$_get](1)) * dart.notNull(x) + dart.notNull(m[$_get](5)) * dart.notNull(y) + dart.notNull(m[$_get](13))) * w;
      if (dart.test(first)) {
        matrix_utils.MatrixUtils._minMax[$_set](0, (t1 = matrix_utils.MatrixUtils._minMax, t2 = 2, t3 = tx, t1[$_set](t2, t3), t3));
        matrix_utils.MatrixUtils._minMax[$_set](1, (t1$ = matrix_utils.MatrixUtils._minMax, t2$ = 3, t3$ = ty, t1$[$_set](t2$, t3$), t3$));
      } else {
        if (tx < dart.notNull(matrix_utils.MatrixUtils._minMax[$_get](0))) {
          matrix_utils.MatrixUtils._minMax[$_set](0, tx);
        }
        if (ty < dart.notNull(matrix_utils.MatrixUtils._minMax[$_get](1))) {
          matrix_utils.MatrixUtils._minMax[$_set](1, ty);
        }
        if (tx > dart.notNull(matrix_utils.MatrixUtils._minMax[$_get](2))) {
          matrix_utils.MatrixUtils._minMax[$_set](2, tx);
        }
        if (ty > dart.notNull(matrix_utils.MatrixUtils._minMax[$_get](3))) {
          matrix_utils.MatrixUtils._minMax[$_set](3, ty);
        }
      }
    }
    static transformRect(transform, rect) {
      if (transform == null) dart.nullFailed(L0, 205, 37, "transform");
      if (rect == null) dart.nullFailed(L0, 205, 53, "rect");
      let storage = transform.storage;
      let x = rect.left;
      let y = rect.top;
      let w = dart.notNull(rect.right) - dart.notNull(x);
      let h = dart.notNull(rect.bottom) - dart.notNull(y);
      if (!w[$isFinite] || !h[$isFinite]) {
        return matrix_utils.MatrixUtils._safeTransformRect(transform, rect);
      }
      let wx = dart.notNull(storage[$_get](0)) * w;
      let hx = dart.notNull(storage[$_get](4)) * h;
      let rx = dart.notNull(storage[$_get](0)) * dart.notNull(x) + dart.notNull(storage[$_get](4)) * dart.notNull(y) + dart.notNull(storage[$_get](12));
      let wy = dart.notNull(storage[$_get](1)) * w;
      let hy = dart.notNull(storage[$_get](5)) * h;
      let ry = dart.notNull(storage[$_get](1)) * dart.notNull(x) + dart.notNull(storage[$_get](5)) * dart.notNull(y) + dart.notNull(storage[$_get](13));
      if (storage[$_get](3) === 0.0 && storage[$_get](7) === 0.0 && storage[$_get](15) === 1.0) {
        let left = rx;
        let right = rx;
        if (wx < 0) {
          left = left + wx;
        } else {
          right = right + wx;
        }
        if (hx < 0) {
          left = left + hx;
        } else {
          right = right + hx;
        }
        let top = ry;
        let bottom = ry;
        if (wy < 0) {
          top = top + wy;
        } else {
          bottom = bottom + wy;
        }
        if (hy < 0) {
          top = top + hy;
        } else {
          bottom = bottom + hy;
        }
        return new ui.Rect.fromLTRB(left, top, right, bottom);
      } else {
        let ww = dart.notNull(storage[$_get](3)) * w;
        let hw = dart.notNull(storage[$_get](7)) * h;
        let rw = dart.notNull(storage[$_get](3)) * dart.notNull(x) + dart.notNull(storage[$_get](7)) * dart.notNull(y) + dart.notNull(storage[$_get](15));
        let ulx = rx / rw;
        let uly = ry / rw;
        let urx = (rx + wx) / (rw + ww);
        let ury = (ry + wy) / (rw + ww);
        let llx = (rx + hx) / (rw + hw);
        let lly = (ry + hy) / (rw + hw);
        let lrx = (rx + wx + hx) / (rw + ww + hw);
        let lry = (ry + wy + hy) / (rw + ww + hw);
        return new ui.Rect.fromLTRB(matrix_utils.MatrixUtils._min4(ulx, urx, llx, lrx), matrix_utils.MatrixUtils._min4(uly, ury, lly, lry), matrix_utils.MatrixUtils._max4(ulx, urx, llx, lrx), matrix_utils.MatrixUtils._max4(uly, ury, lly, lry));
      }
    }
    static _min4(a, b, c, d) {
      if (a == null) dart.nullFailed(L0, 423, 30, "a");
      if (b == null) dart.nullFailed(L0, 423, 40, "b");
      if (c == null) dart.nullFailed(L0, 423, 50, "c");
      if (d == null) dart.nullFailed(L0, 423, 60, "d");
      let e = dart.notNull(a) < dart.notNull(b) ? a : b;
      let f = dart.notNull(c) < dart.notNull(d) ? c : d;
      return dart.notNull(e) < dart.notNull(f) ? e : f;
    }
    static _max4(a, b, c, d) {
      if (a == null) dart.nullFailed(L0, 428, 30, "a");
      if (b == null) dart.nullFailed(L0, 428, 40, "b");
      if (c == null) dart.nullFailed(L0, 428, 50, "c");
      if (d == null) dart.nullFailed(L0, 428, 60, "d");
      let e = dart.notNull(a) > dart.notNull(b) ? a : b;
      let f = dart.notNull(c) > dart.notNull(d) ? c : d;
      return dart.notNull(e) > dart.notNull(f) ? e : f;
    }
    static inverseTransformRect(transform, rect) {
      let t1;
      if (transform == null) dart.nullFailed(L0, 440, 44, "transform");
      if (rect == null) dart.nullFailed(L0, 440, 60, "rect");
      if (!(rect != null)) dart.assertFailed(null, L0, 441, 12, "rect != null");
      if (dart.test(matrix_utils.MatrixUtils.isIdentity(transform))) return rect;
      transform = (t1 = vector_math_64.Matrix4.copy(transform), (() => {
        t1.invert();
        return t1;
      })());
      return matrix_utils.MatrixUtils.transformRect(transform, rect);
    }
    static createCylindricalProjectionTransform(opts) {
      let t1;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      if (radius == null) dart.nullFailed(L0, 485, 21, "radius");
      let angle = opts && 'angle' in opts ? opts.angle : null;
      if (angle == null) dart.nullFailed(L0, 486, 21, "angle");
      let perspective = opts && 'perspective' in opts ? opts.perspective : 0.001;
      if (perspective == null) dart.nullFailed(L0, 487, 12, "perspective");
      let orientation = opts && 'orientation' in opts ? opts.orientation : C0 || CT.C0;
      if (orientation == null) dart.nullFailed(L0, 488, 10, "orientation");
      if (!(radius != null)) dart.assertFailed(null, L0, 490, 12, "radius != null");
      if (!(angle != null)) dart.assertFailed(null, L0, 491, 12, "angle != null");
      if (!(dart.notNull(perspective) >= 0 && dart.notNull(perspective) <= 1.0)) dart.assertFailed(null, L0, 492, 12, "perspective >= 0 && perspective <= 1.0");
      if (!(orientation != null)) dart.assertFailed(null, L0, 493, 12, "orientation != null");
      let result = (t1 = vector_math_64.Matrix4.identity(), (() => {
        t1.setEntry(3, 2, -dart.notNull(perspective));
        t1.setEntry(2, 3, -dart.notNull(radius));
        t1.setEntry(3, 3, dart.notNull(perspective) * dart.notNull(radius) + 1.0);
        return t1;
      })());
      result = vector_math_64.Matrix4.as(result['*']((dart.equals(orientation, basic_types.Axis.horizontal) ? vector_math_64.Matrix4.rotationY(angle) : vector_math_64.Matrix4.rotationX(angle))['*'](vector_math_64.Matrix4.translationValues(0.0, 0.0, radius))));
      return result;
    }
    static forceToPoint(offset) {
      let t1;
      if (offset == null) dart.nullFailed(L0, 530, 38, "offset");
      t1 = vector_math_64.Matrix4.identity();
      return (() => {
        t1.setRow(0, vector_math_64.Vector4.new(0.0, 0.0, 0.0, offset.dx));
        t1.setRow(1, vector_math_64.Vector4.new(0.0, 0.0, 0.0, offset.dy));
        return t1;
      })();
    }
  };
  (matrix_utils.MatrixUtils.__ = function() {
    ;
  }).prototype = matrix_utils.MatrixUtils.prototype;
  dart.addTypeTests(matrix_utils.MatrixUtils);
  dart.addTypeCaches(matrix_utils.MatrixUtils);
  dart.setLibraryUri(matrix_utils.MatrixUtils, L1);
  dart.defineLazy(matrix_utils.MatrixUtils, {
    /*matrix_utils.MatrixUtils['_#_minMax']*/get ['_#_minMax']() {
      return null;
    },
    set ['_#_minMax'](_) {},
    /*matrix_utils.MatrixUtils['_#_minMax#isSet']*/get ['_#_minMax#isSet']() {
      return false;
    },
    set ['_#_minMax#isSet'](_) {}
  }, false);
  var C1;
  var _name$ = dart.privateName(diagnostics, "_name");
  var C2;
  matrix_utils.TransformProperty = class TransformProperty extends diagnostics.DiagnosticsProperty$(vector_math_64.Matrix4) {
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (parentConfiguration != null && !dart.test(parentConfiguration.lineBreakProperties)) {
        let values = JSArrayOfString().of([dart.str(debug.debugFormatDouble(dart.nullCheck(this.value).entry(0, 0))) + "," + dart.str(debug.debugFormatDouble(dart.nullCheck(this.value).entry(0, 1))) + "," + dart.str(debug.debugFormatDouble(dart.nullCheck(this.value).entry(0, 2))) + "," + dart.str(debug.debugFormatDouble(dart.nullCheck(this.value).entry(0, 3))), dart.str(debug.debugFormatDouble(dart.nullCheck(this.value).entry(1, 0))) + "," + dart.str(debug.debugFormatDouble(dart.nullCheck(this.value).entry(1, 1))) + "," + dart.str(debug.debugFormatDouble(dart.nullCheck(this.value).entry(1, 2))) + "," + dart.str(debug.debugFormatDouble(dart.nullCheck(this.value).entry(1, 3))), dart.str(debug.debugFormatDouble(dart.nullCheck(this.value).entry(2, 0))) + "," + dart.str(debug.debugFormatDouble(dart.nullCheck(this.value).entry(2, 1))) + "," + dart.str(debug.debugFormatDouble(dart.nullCheck(this.value).entry(2, 2))) + "," + dart.str(debug.debugFormatDouble(dart.nullCheck(this.value).entry(2, 3))), dart.str(debug.debugFormatDouble(dart.nullCheck(this.value).entry(3, 0))) + "," + dart.str(debug.debugFormatDouble(dart.nullCheck(this.value).entry(3, 1))) + "," + dart.str(debug.debugFormatDouble(dart.nullCheck(this.value).entry(3, 2))) + "," + dart.str(debug.debugFormatDouble(dart.nullCheck(this.value).entry(3, 3)))]);
        return "[" + dart.str(values[$join]("; ")) + "]";
      }
      return matrix_utils.debugDescribeTransform(this.value)[$join]("\n");
    }
  };
  (matrix_utils.TransformProperty.new = function(name, value, opts) {
    if (name == null) dart.nullFailed(L0, 558, 12, "name");
    let showName = opts && 'showName' in opts ? opts.showName : true;
    if (showName == null) dart.nullFailed(L0, 560, 10, "showName");
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C1 || CT.C1;
    let level = opts && 'level' in opts ? opts.level : C2 || CT.C2;
    if (level == null) dart.nullFailed(L0, 562, 21, "level");
    if (!(showName != null)) dart.assertFailed(null, L0, 563, 15, "showName != null");
    if (!(level != null)) dart.assertFailed(null, L0, 564, 15, "level != null");
    matrix_utils.TransformProperty.__proto__.new.call(this, name, value, {showName: showName, defaultValue: defaultValue, level: level});
    ;
  }).prototype = matrix_utils.TransformProperty.prototype;
  dart.addTypeTests(matrix_utils.TransformProperty);
  dart.addTypeCaches(matrix_utils.TransformProperty);
  dart.setLibraryUri(matrix_utils.TransformProperty, L1);
  var C3;
  matrix_utils.debugDescribeTransform = function debugDescribeTransform(transform) {
    if (transform == null) return C3 || CT.C3;
    return JSArrayOfString().of(["[0] " + dart.str(debug.debugFormatDouble(transform.entry(0, 0))) + "," + dart.str(debug.debugFormatDouble(transform.entry(0, 1))) + "," + dart.str(debug.debugFormatDouble(transform.entry(0, 2))) + "," + dart.str(debug.debugFormatDouble(transform.entry(0, 3))), "[1] " + dart.str(debug.debugFormatDouble(transform.entry(1, 0))) + "," + dart.str(debug.debugFormatDouble(transform.entry(1, 1))) + "," + dart.str(debug.debugFormatDouble(transform.entry(1, 2))) + "," + dart.str(debug.debugFormatDouble(transform.entry(1, 3))), "[2] " + dart.str(debug.debugFormatDouble(transform.entry(2, 0))) + "," + dart.str(debug.debugFormatDouble(transform.entry(2, 1))) + "," + dart.str(debug.debugFormatDouble(transform.entry(2, 2))) + "," + dart.str(debug.debugFormatDouble(transform.entry(2, 3))), "[3] " + dart.str(debug.debugFormatDouble(transform.entry(3, 0))) + "," + dart.str(debug.debugFormatDouble(transform.entry(3, 1))) + "," + dart.str(debug.debugFormatDouble(transform.entry(3, 2))) + "," + dart.str(debug.debugFormatDouble(transform.entry(3, 3)))]);
  };
  dart.trackLibraries("packages/flutter/src/painting/matrix_utils.dart", {
    "package:flutter/src/painting/matrix_utils.dart": matrix_utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["matrix_utils.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/matrix_utils.dart.lib.js"}');
  // Exports:
  return {
    src__painting__matrix_utils: matrix_utils
  };
}));

//# sourceMappingURL=matrix_utils.dart.lib.js.map
