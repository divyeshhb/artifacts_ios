define(['dart_sdk', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/painting/border_radius.dart'], (function load__packages__flutter__src__painting__box_border_dart(dart_sdk, packages__flutter__src__painting__borders$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__painting__border_radius$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  var box_border = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $join = dartx.join;
  dart._checkModuleNullSafetyMode(false);
  var BoxShapeL = () => (BoxShapeL = dart.constFn(dart.legacy(box_border.BoxShape)))();
  var BorderN = () => (BorderN = dart.constFn(dart.nullable(box_border.Border)))();
  var BorderDirectionalN = () => (BorderDirectionalN = dart.constFn(dart.nullable(box_border.BorderDirectional)))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/painting/box_border.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/box_border.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name$]: "BoxShape.rectangle",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name$]: "BoxShape.circle",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], BoxShapeL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.none",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C4 || CT.C4,
        [BorderSide_width]: 0,
        [BorderSide_color]: C5 || CT.C5
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.solid",
        index: 1
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name$0]: "TextDirection.rtl",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name$0]: "TextDirection.ltr",
        index: 1
      });
    }
  }, false);
  var _name$ = dart.privateName(box_border, "_name");
  var C0;
  var C1;
  var C2;
  box_border.BoxShape = class BoxShape extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (box_border.BoxShape.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 22, 6, "index");
    if (_name == null) dart.nullFailed(L0, 22, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = box_border.BoxShape.prototype;
  dart.addTypeTests(box_border.BoxShape);
  dart.addTypeCaches(box_border.BoxShape);
  dart.setLibraryUri(box_border.BoxShape, L1);
  dart.setFieldSignature(box_border.BoxShape, () => ({
    __proto__: dart.getFields(box_border.BoxShape.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(box_border.BoxShape, ['toString']);
  box_border.BoxShape.rectangle = C0 || CT.C0;
  box_border.BoxShape.circle = C1 || CT.C1;
  box_border.BoxShape.values = C2 || CT.C2;
  box_border.BoxBorder = class BoxBorder extends borders.ShapeBorder {
    add(other, opts) {
      if (other == null) dart.nullFailed(L0, 87, 30, "other");
      let reversed = opts && 'reversed' in opts ? opts.reversed : false;
      if (reversed == null) dart.nullFailed(L0, 87, 44, "reversed");
      return null;
    }
    static lerp(a, b, t) {
      if (t == null) dart.nullFailed(L0, 106, 61, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 107, 12, "t != null");
      if (BorderN().is(a) && BorderN().is(b)) return box_border.Border.lerp(a, b, t);
      if (BorderDirectionalN().is(a) && BorderDirectionalN().is(b)) return box_border.BorderDirectional.lerp(a, b, t);
      if (box_border.Border.is(b) && box_border.BorderDirectional.is(a)) {
        let c = b;
        b = a;
        a = c;
        t = 1.0 - dart.notNull(t);
      }
      if (box_border.Border.is(a) && box_border.BorderDirectional.is(b)) {
        if (dart.equals(b.start, borders.BorderSide.none) && dart.equals(b.end, borders.BorderSide.none)) {
          return new box_border.Border.new({top: borders.BorderSide.lerp(a.top, b.top, t), right: borders.BorderSide.lerp(a.right, borders.BorderSide.none, t), bottom: borders.BorderSide.lerp(a.bottom, b.bottom, t), left: borders.BorderSide.lerp(a.left, borders.BorderSide.none, t)});
        }
        if (dart.equals(a.left, borders.BorderSide.none) && dart.equals(a.right, borders.BorderSide.none)) {
          return new box_border.BorderDirectional.new({top: borders.BorderSide.lerp(a.top, b.top, t), start: borders.BorderSide.lerp(borders.BorderSide.none, b.start, t), end: borders.BorderSide.lerp(borders.BorderSide.none, b.end, t), bottom: borders.BorderSide.lerp(a.bottom, b.bottom, t)});
        }
        if (dart.notNull(t) < 0.5) {
          return new box_border.Border.new({top: borders.BorderSide.lerp(a.top, b.top, t), right: borders.BorderSide.lerp(a.right, borders.BorderSide.none, dart.notNull(t) * 2.0), bottom: borders.BorderSide.lerp(a.bottom, b.bottom, t), left: borders.BorderSide.lerp(a.left, borders.BorderSide.none, dart.notNull(t) * 2.0)});
        }
        return new box_border.BorderDirectional.new({top: borders.BorderSide.lerp(a.top, b.top, t), start: borders.BorderSide.lerp(borders.BorderSide.none, b.start, (dart.notNull(t) - 0.5) * 2.0), end: borders.BorderSide.lerp(borders.BorderSide.none, b.end, (dart.notNull(t) - 0.5) * 2.0), bottom: borders.BorderSide.lerp(a.bottom, b.bottom, t)});
      }
      dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("BoxBorder.lerp can only interpolate Border and BorderDirectional classes."), new assertions.ErrorDescription.new("BoxBorder.lerp() was called with two objects of type " + dart.str(dart.runtimeType(a)) + " and " + dart.str(dart.runtimeType(b)) + ":\n" + "  " + dart.str(a) + "\n" + "  " + dart.str(b) + "\n" + "However, only Border and BorderDirectional classes are supported by this method."), new assertions.ErrorHint.new("For a more general interpolation method, consider using ShapeBorder.lerp instead.")])));
    }
    getInnerPath(rect, opts) {
      let t0;
      if (rect == null) dart.nullFailed(L0, 169, 26, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      if (!(textDirection != null)) dart.assertFailed("The textDirection argument to " + dart.str(this[$runtimeType]) + ".getInnerPath must not be null.", L0, 170, 12, "textDirection != null");
      t0 = ui.Path.new();
      return (() => {
        t0.addRect(this.dimensions.resolve(textDirection).deflateRect(rect));
        return t0;
      })();
    }
    getOuterPath(rect, opts) {
      let t0;
      if (rect == null) dart.nullFailed(L0, 176, 26, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      if (!(textDirection != null)) dart.assertFailed("The textDirection argument to " + dart.str(this[$runtimeType]) + ".getOuterPath must not be null.", L0, 177, 12, "textDirection != null");
      t0 = ui.Path.new();
      return (() => {
        t0.addRect(rect);
        return t0;
      })();
    }
    static _paintUniformBorderWithRadius(canvas, rect, side, borderRadius) {
      let t0, t0$;
      if (canvas == null) dart.nullFailed(L0, 210, 52, "canvas");
      if (rect == null) dart.nullFailed(L0, 210, 65, "rect");
      if (side == null) dart.nullFailed(L0, 210, 82, "side");
      if (borderRadius == null) dart.nullFailed(L0, 210, 101, "borderRadius");
      if (!!dart.equals(side.style, borders.BorderStyle.none)) dart.assertFailed(null, L0, 211, 12, "side.style != BorderStyle.none");
      let paint = (t0 = ui.Paint.new(), (() => {
        t0.color = side.color;
        return t0;
      })());
      let outer = borderRadius.toRRect(rect);
      let width = side.width;
      if (width === 0.0) {
        t0$ = paint;
        (() => {
          t0$.style = ui.PaintingStyle.stroke;
          t0$.strokeWidth = 0.0;
          return t0$;
        })();
        canvas.drawRRect(outer, paint);
      } else {
        let inner = outer.deflate(width);
        canvas.drawDRRect(outer, inner, paint);
      }
    }
    static _paintUniformBorderWithCircle(canvas, rect, side) {
      if (canvas == null) dart.nullFailed(L0, 227, 52, "canvas");
      if (rect == null) dart.nullFailed(L0, 227, 65, "rect");
      if (side == null) dart.nullFailed(L0, 227, 82, "side");
      if (!!dart.equals(side.style, borders.BorderStyle.none)) dart.assertFailed(null, L0, 228, 12, "side.style != BorderStyle.none");
      let width = side.width;
      let paint = side.toPaint();
      let radius = (dart.notNull(rect.shortestSide) - dart.notNull(width)) / 2.0;
      canvas.drawCircle(rect.center, radius, paint);
    }
    static _paintUniformBorderWithRectangle(canvas, rect, side) {
      if (canvas == null) dart.nullFailed(L0, 235, 55, "canvas");
      if (rect == null) dart.nullFailed(L0, 235, 68, "rect");
      if (side == null) dart.nullFailed(L0, 235, 85, "side");
      if (!!dart.equals(side.style, borders.BorderStyle.none)) dart.assertFailed(null, L0, 236, 12, "side.style != BorderStyle.none");
      let width = side.width;
      let paint = side.toPaint();
      canvas.drawRect(rect.deflate(dart.notNull(width) / 2.0), paint);
    }
  };
  (box_border.BoxBorder.new = function() {
    box_border.BoxBorder.__proto__.new.call(this);
    ;
  }).prototype = box_border.BoxBorder.prototype;
  dart.addTypeTests(box_border.BoxBorder);
  dart.addTypeCaches(box_border.BoxBorder);
  dart.setMethodSignature(box_border.BoxBorder, () => ({
    __proto__: dart.getMethods(box_border.BoxBorder.__proto__),
    add: dart.fnType(dart.nullable(box_border.BoxBorder), [borders.ShapeBorder], {reversed: core.bool}, {}),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setLibraryUri(box_border.BoxBorder, L1);
  var _name = dart.privateName(borders, "_name");
  var C4;
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var C5;
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var C3;
  var C6;
  var _colorIsUniform = dart.privateName(box_border, "_colorIsUniform");
  var _widthIsUniform = dart.privateName(box_border, "_widthIsUniform");
  var _styleIsUniform = dart.privateName(box_border, "_styleIsUniform");
  var top$ = dart.privateName(box_border, "Border.top");
  var right$ = dart.privateName(box_border, "Border.right");
  var bottom$ = dart.privateName(box_border, "Border.bottom");
  var left$ = dart.privateName(box_border, "Border.left");
  box_border.Border = class Border extends box_border.BoxBorder {
    get top() {
      return this[top$];
    }
    set top(value) {
      super.top = value;
    }
    get right() {
      return this[right$];
    }
    set right(value) {
      super.right = value;
    }
    get bottom() {
      return this[bottom$];
    }
    set bottom(value) {
      super.bottom = value;
    }
    get left() {
      return this[left$];
    }
    set left(value) {
      super.left = value;
    }
    static all(opts) {
      let color = opts && 'color' in opts ? opts.color : C5 || CT.C5;
      if (color == null) dart.nullFailed(L0, 350, 11, "color");
      let width = opts && 'width' in opts ? opts.width : 1;
      if (width == null) dart.nullFailed(L0, 351, 12, "width");
      let style = opts && 'style' in opts ? opts.style : C6 || CT.C6;
      if (style == null) dart.nullFailed(L0, 352, 17, "style");
      let side = new borders.BorderSide.new({color: color, width: width, style: style});
      return new box_border.Border.fromBorderSide(side);
    }
    static merge(a, b) {
      if (a == null) dart.nullFailed(L0, 365, 30, "a");
      if (b == null) dart.nullFailed(L0, 365, 40, "b");
      if (!(a != null)) dart.assertFailed(null, L0, 366, 12, "a != null");
      if (!(b != null)) dart.assertFailed(null, L0, 367, 12, "b != null");
      if (!dart.test(borders.BorderSide.canMerge(a.top, b.top))) dart.assertFailed(null, L0, 368, 12, "BorderSide.canMerge(a.top, b.top)");
      if (!dart.test(borders.BorderSide.canMerge(a.right, b.right))) dart.assertFailed(null, L0, 369, 12, "BorderSide.canMerge(a.right, b.right)");
      if (!dart.test(borders.BorderSide.canMerge(a.bottom, b.bottom))) dart.assertFailed(null, L0, 370, 12, "BorderSide.canMerge(a.bottom, b.bottom)");
      if (!dart.test(borders.BorderSide.canMerge(a.left, b.left))) dart.assertFailed(null, L0, 371, 12, "BorderSide.canMerge(a.left, b.left)");
      return new box_border.Border.new({top: borders.BorderSide.merge(a.top, b.top), right: borders.BorderSide.merge(a.right, b.right), bottom: borders.BorderSide.merge(a.bottom, b.bottom), left: borders.BorderSide.merge(a.left, b.left)});
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.fromLTRB(this.left.width, this.top.width, this.right.width, this.bottom.width);
    }
    get isUniform() {
      return dart.test(this[_colorIsUniform]) && dart.test(this[_widthIsUniform]) && dart.test(this[_styleIsUniform]);
    }
    get [_colorIsUniform]() {
      let topColor = this.top.color;
      return dart.equals(this.right.color, topColor) && dart.equals(this.bottom.color, topColor) && dart.equals(this.left.color, topColor);
    }
    get [_widthIsUniform]() {
      let topWidth = this.top.width;
      return this.right.width == topWidth && this.bottom.width == topWidth && this.left.width == topWidth;
    }
    get [_styleIsUniform]() {
      let topStyle = this.top.style;
      return dart.equals(this.right.style, topStyle) && dart.equals(this.bottom.style, topStyle) && dart.equals(this.left.style, topStyle);
    }
    add(other, opts) {
      if (other == null) dart.nullFailed(L0, 416, 27, "other");
      let reversed = opts && 'reversed' in opts ? opts.reversed : false;
      if (reversed == null) dart.nullFailed(L0, 416, 41, "reversed");
      if (box_border.Border.is(other) && dart.test(borders.BorderSide.canMerge(this.top, other.top)) && dart.test(borders.BorderSide.canMerge(this.right, other.right)) && dart.test(borders.BorderSide.canMerge(this.bottom, other.bottom)) && dart.test(borders.BorderSide.canMerge(this.left, other.left))) {
        return box_border.Border.merge(this, other);
      }
      return null;
    }
    scale(t) {
      if (t == null) dart.nullFailed(L0, 428, 23, "t");
      return new box_border.Border.new({top: this.top.scale(t), right: this.right.scale(t), bottom: this.bottom.scale(t), left: this.left.scale(t)});
    }
    lerpFrom(a, t) {
      if (t == null) dart.nullFailed(L0, 438, 48, "t");
      if (box_border.Border.is(a)) return box_border.Border.lerp(a, this, t);
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (t == null) dart.nullFailed(L0, 445, 46, "t");
      if (box_border.Border.is(b)) return box_border.Border.lerp(this, b, t);
      return super.lerpTo(b, t);
    }
    static lerp(a, b, t) {
      if (t == null) dart.nullFailed(L0, 457, 52, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 458, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b).scale(t);
      if (b == null) return a.scale(1.0 - dart.notNull(t));
      return new box_border.Border.new({top: borders.BorderSide.lerp(a.top, b.top, t), right: borders.BorderSide.lerp(a.right, b.right, t), bottom: borders.BorderSide.lerp(a.bottom, b.bottom, t), left: borders.BorderSide.lerp(a.left, b.left, t)});
    }
    paint(canvas, rect, opts) {
      if (canvas == null) dart.nullFailed(L0, 494, 12, "canvas");
      if (rect == null) dart.nullFailed(L0, 495, 10, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let shape = opts && 'shape' in opts ? opts.shape : C0 || CT.C0;
      if (shape == null) dart.nullFailed(L0, 497, 14, "shape");
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
      if (dart.test(this.isUniform)) {
        switch (this.top.style) {
          case C4 || CT.C4:
          {
            return;
          }
          case C6 || CT.C6:
          {
            switch (shape) {
              case C1 || CT.C1:
              {
                if (!(borderRadius == null)) dart.assertFailed("A borderRadius can only be given for rectangular boxes.", L0, 507, 22, "borderRadius == null");
                box_border.BoxBorder._paintUniformBorderWithCircle(canvas, rect, this.top);
                break;
              }
              case C0 || CT.C0:
              {
                if (borderRadius != null) {
                  box_border.BoxBorder._paintUniformBorderWithRadius(canvas, rect, this.top, borderRadius);
                  return;
                }
                box_border.BoxBorder._paintUniformBorderWithRectangle(canvas, rect, this.top);
                break;
              }
              default:
              {
                dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
              }
            }
            return;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      if (!dart.test(dart.fn(() => {
        if (borderRadius != null) {
          dart.throw(new assertions.FlutterError.fromParts((() => {
            let t0 = JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A borderRadius can only be given for a uniform Border."), new assertions.ErrorDescription.new("The following is not uniform:")]);
            if (!dart.test(this[_colorIsUniform])) t0.push(new assertions.ErrorDescription.new("BorderSide.color"));
            if (!dart.test(this[_widthIsUniform])) t0.push(new assertions.ErrorDescription.new("BorderSide.width"));
            if (!dart.test(this[_styleIsUniform])) t0.push(new assertions.ErrorDescription.new("BorderSide.style"));
            return t0;
          })()));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 522, 12, "() {\n      if (borderRadius != null) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('A borderRadius can only be given for a uniform Border.'),\n          ErrorDescription('The following is not uniform:'),\n          if (!_colorIsUniform) ErrorDescription('BorderSide.color'),\n          if (!_widthIsUniform) ErrorDescription('BorderSide.width'),\n          if (!_styleIsUniform) ErrorDescription('BorderSide.style'),\n        ]);\n      }\n      return true;\n    }()");
      if (!dart.test(dart.fn(() => {
        if (!dart.equals(shape, box_border.BoxShape.rectangle)) {
          dart.throw(new assertions.FlutterError.fromParts((() => {
            let t1 = JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A Border can only be drawn as a circle if it is uniform"), new assertions.ErrorDescription.new("The following is not uniform:")]);
            if (!dart.test(this[_colorIsUniform])) t1.push(new assertions.ErrorDescription.new("BorderSide.color"));
            if (!dart.test(this[_widthIsUniform])) t1.push(new assertions.ErrorDescription.new("BorderSide.width"));
            if (!dart.test(this[_styleIsUniform])) t1.push(new assertions.ErrorDescription.new("BorderSide.style"));
            return t1;
          })()));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 534, 12, "() {\n      if (shape != BoxShape.rectangle) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('A Border can only be drawn as a circle if it is uniform'),\n          ErrorDescription('The following is not uniform:'),\n          if (!_colorIsUniform) ErrorDescription('BorderSide.color'),\n          if (!_widthIsUniform) ErrorDescription('BorderSide.width'),\n          if (!_styleIsUniform) ErrorDescription('BorderSide.style'),\n        ]);\n      }\n      return true;\n    }()");
      borders.paintBorder(canvas, rect, {top: this.top, right: this.right, bottom: this.bottom, left: this.left});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return box_border.Border.is(other) && dart.equals(other.top, this.top) && dart.equals(other.right, this.right) && dart.equals(other.bottom, this.bottom) && dart.equals(other.left, this.left);
    }
    get hashCode() {
      return ui.hashValues(this.top, this.right, this.bottom, this.left);
    }
    toString() {
      if (dart.test(this.isUniform)) return dart.str(object.objectRuntimeType(this, "Border")) + ".all(" + dart.str(this.top) + ")";
      let $arguments = (() => {
        let t2 = JSArrayOfString().of([]);
        if (!dart.equals(this.top, borders.BorderSide.none)) t2.push("top: " + dart.str(this.top));
        if (!dart.equals(this.right, borders.BorderSide.none)) t2.push("right: " + dart.str(this.right));
        if (!dart.equals(this.bottom, borders.BorderSide.none)) t2.push("bottom: " + dart.str(this.bottom));
        if (!dart.equals(this.left, borders.BorderSide.none)) t2.push("left: " + dart.str(this.left));
        return t2;
      })();
      return dart.str(object.objectRuntimeType(this, "Border")) + "(" + dart.str($arguments[$join](", ")) + ")";
    }
  };
  (box_border.Border.new = function(opts) {
    let top = opts && 'top' in opts ? opts.top : C3 || CT.C3;
    if (top == null) dart.nullFailed(L0, 311, 10, "top");
    let right = opts && 'right' in opts ? opts.right : C3 || CT.C3;
    if (right == null) dart.nullFailed(L0, 312, 10, "right");
    let bottom = opts && 'bottom' in opts ? opts.bottom : C3 || CT.C3;
    if (bottom == null) dart.nullFailed(L0, 313, 10, "bottom");
    let left = opts && 'left' in opts ? opts.left : C3 || CT.C3;
    if (left == null) dart.nullFailed(L0, 314, 10, "left");
    this[top$] = top;
    this[right$] = right;
    this[bottom$] = bottom;
    this[left$] = left;
    if (!(top != null)) dart.assertFailed(null, L0, 315, 15, "top != null");
    if (!(right != null)) dart.assertFailed(null, L0, 316, 15, "right != null");
    if (!(bottom != null)) dart.assertFailed(null, L0, 317, 15, "bottom != null");
    if (!(left != null)) dart.assertFailed(null, L0, 318, 15, "left != null");
    box_border.Border.__proto__.new.call(this);
    ;
  }).prototype = box_border.Border.prototype;
  (box_border.Border.fromBorderSide = function(side) {
    if (side == null) dart.nullFailed(L0, 323, 42, "side");
    if (!(side != null)) dart.assertFailed(null, L0, 324, 16, "side != null");
    this[top$] = side;
    this[right$] = side;
    this[bottom$] = side;
    this[left$] = side;
    box_border.Border.__proto__.new.call(this);
    ;
  }).prototype = box_border.Border.prototype;
  (box_border.Border.symmetric = function(opts) {
    let vertical = opts && 'vertical' in opts ? opts.vertical : C3 || CT.C3;
    if (vertical == null) dart.nullFailed(L0, 337, 16, "vertical");
    let horizontal = opts && 'horizontal' in opts ? opts.horizontal : C3 || CT.C3;
    if (horizontal == null) dart.nullFailed(L0, 338, 16, "horizontal");
    if (!(vertical != null)) dart.assertFailed(null, L0, 339, 15, "vertical != null");
    if (!(horizontal != null)) dart.assertFailed(null, L0, 340, 15, "horizontal != null");
    this[left$] = vertical;
    this[top$] = horizontal;
    this[right$] = vertical;
    this[bottom$] = horizontal;
    box_border.Border.__proto__.new.call(this);
    ;
  }).prototype = box_border.Border.prototype;
  dart.addTypeTests(box_border.Border);
  dart.addTypeCaches(box_border.Border);
  dart.setMethodSignature(box_border.Border, () => ({
    __proto__: dart.getMethods(box_border.Border.__proto__),
    add: dart.fnType(dart.nullable(box_border.Border), [borders.ShapeBorder], {reversed: core.bool}, {}),
    scale: dart.fnType(box_border.Border, [core.double]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {borderRadius: dart.nullable(border_radius.BorderRadius), shape: box_border.BoxShape, textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setGetterSignature(box_border.Border, () => ({
    __proto__: dart.getGetters(box_border.Border.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry,
    isUniform: core.bool,
    [_colorIsUniform]: core.bool,
    [_widthIsUniform]: core.bool,
    [_styleIsUniform]: core.bool
  }));
  dart.setLibraryUri(box_border.Border, L1);
  dart.setFieldSignature(box_border.Border, () => ({
    __proto__: dart.getFields(box_border.Border.__proto__),
    top: dart.finalFieldType(borders.BorderSide),
    right: dart.finalFieldType(borders.BorderSide),
    bottom: dart.finalFieldType(borders.BorderSide),
    left: dart.finalFieldType(borders.BorderSide)
  }));
  dart.defineExtensionMethods(box_border.Border, ['_equals', 'toString']);
  dart.defineExtensionAccessors(box_border.Border, ['hashCode']);
  var _name$0 = dart.privateName(ui, "_name");
  var C7;
  var C8;
  var top$0 = dart.privateName(box_border, "BorderDirectional.top");
  var start$ = dart.privateName(box_border, "BorderDirectional.start");
  var end$ = dart.privateName(box_border, "BorderDirectional.end");
  var bottom$0 = dart.privateName(box_border, "BorderDirectional.bottom");
  box_border.BorderDirectional = class BorderDirectional extends box_border.BoxBorder {
    get top() {
      return this[top$0];
    }
    set top(value) {
      super.top = value;
    }
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get bottom() {
      return this[bottom$0];
    }
    set bottom(value) {
      super.bottom = value;
    }
    static merge(a, b) {
      if (a == null) dart.nullFailed(L0, 626, 52, "a");
      if (b == null) dart.nullFailed(L0, 626, 73, "b");
      if (!(a != null)) dart.assertFailed(null, L0, 627, 12, "a != null");
      if (!(b != null)) dart.assertFailed(null, L0, 628, 12, "b != null");
      if (!dart.test(borders.BorderSide.canMerge(a.top, b.top))) dart.assertFailed(null, L0, 629, 12, "BorderSide.canMerge(a.top, b.top)");
      if (!dart.test(borders.BorderSide.canMerge(a.start, b.start))) dart.assertFailed(null, L0, 630, 12, "BorderSide.canMerge(a.start, b.start)");
      if (!dart.test(borders.BorderSide.canMerge(a.end, b.end))) dart.assertFailed(null, L0, 631, 12, "BorderSide.canMerge(a.end, b.end)");
      if (!dart.test(borders.BorderSide.canMerge(a.bottom, b.bottom))) dart.assertFailed(null, L0, 632, 12, "BorderSide.canMerge(a.bottom, b.bottom)");
      return new box_border.BorderDirectional.new({top: borders.BorderSide.merge(a.top, b.top), start: borders.BorderSide.merge(a.start, b.start), end: borders.BorderSide.merge(a.end, b.end), bottom: borders.BorderSide.merge(a.bottom, b.bottom)});
    }
    get dimensions() {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(this.start.width, this.top.width, this.end.width, this.bottom.width);
    }
    get isUniform() {
      let topColor = this.top.color;
      if (!dart.equals(this.start.color, topColor) || !dart.equals(this.end.color, topColor) || !dart.equals(this.bottom.color, topColor)) return false;
      let topWidth = this.top.width;
      if (this.start.width != topWidth || this.end.width != topWidth || this.bottom.width != topWidth) return false;
      let topStyle = this.top.style;
      if (!dart.equals(this.start.style, topStyle) || !dart.equals(this.end.style, topStyle) || !dart.equals(this.bottom.style, topStyle)) return false;
      return true;
    }
    add(other, opts) {
      if (other == null) dart.nullFailed(L0, 696, 30, "other");
      let reversed = opts && 'reversed' in opts ? opts.reversed : false;
      if (reversed == null) dart.nullFailed(L0, 696, 44, "reversed");
      if (box_border.BorderDirectional.is(other)) {
        let typedOther = other;
        if (dart.test(borders.BorderSide.canMerge(this.top, typedOther.top)) && dart.test(borders.BorderSide.canMerge(this.start, typedOther.start)) && dart.test(borders.BorderSide.canMerge(this.end, typedOther.end)) && dart.test(borders.BorderSide.canMerge(this.bottom, typedOther.bottom))) {
          return box_border.BorderDirectional.merge(this, typedOther);
        }
        return null;
      }
      if (box_border.Border.is(other)) {
        let typedOther = other;
        if (!dart.test(borders.BorderSide.canMerge(typedOther.top, this.top)) || !dart.test(borders.BorderSide.canMerge(typedOther.bottom, this.bottom))) return null;
        if (!dart.equals(this.start, borders.BorderSide.none) || !dart.equals(this.end, borders.BorderSide.none)) {
          if (!dart.equals(typedOther.left, borders.BorderSide.none) || !dart.equals(typedOther.right, borders.BorderSide.none)) return null;
          if (!dart.equals(typedOther.left, borders.BorderSide.none)) dart.assertFailed(null, L0, 717, 16, "typedOther.left == BorderSide.none");
          if (!dart.equals(typedOther.right, borders.BorderSide.none)) dart.assertFailed(null, L0, 718, 16, "typedOther.right == BorderSide.none");
          return new box_border.BorderDirectional.new({top: borders.BorderSide.merge(typedOther.top, this.top), start: this.start, end: this.end, bottom: borders.BorderSide.merge(typedOther.bottom, this.bottom)});
        }
        if (!dart.equals(this.start, borders.BorderSide.none)) dart.assertFailed(null, L0, 726, 14, "start == BorderSide.none");
        if (!dart.equals(this.end, borders.BorderSide.none)) dart.assertFailed(null, L0, 727, 14, "end == BorderSide.none");
        return new box_border.Border.new({top: borders.BorderSide.merge(typedOther.top, this.top), right: typedOther.right, bottom: borders.BorderSide.merge(typedOther.bottom, this.bottom), left: typedOther.left});
      }
      return null;
    }
    scale(t) {
      if (t == null) dart.nullFailed(L0, 739, 34, "t");
      return new box_border.BorderDirectional.new({top: this.top.scale(t), start: this.start.scale(t), end: this.end.scale(t), bottom: this.bottom.scale(t)});
    }
    lerpFrom(a, t) {
      if (t == null) dart.nullFailed(L0, 749, 48, "t");
      if (box_border.BorderDirectional.is(a)) return box_border.BorderDirectional.lerp(a, this, t);
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (t == null) dart.nullFailed(L0, 756, 46, "t");
      if (box_border.BorderDirectional.is(b)) return box_border.BorderDirectional.lerp(this, b, t);
      return super.lerpTo(b, t);
    }
    static lerp(a, b, t) {
      if (t == null) dart.nullFailed(L0, 768, 85, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 769, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b).scale(t);
      if (b == null) return a.scale(1.0 - dart.notNull(t));
      return new box_border.BorderDirectional.new({top: borders.BorderSide.lerp(a.top, b.top, t), end: borders.BorderSide.lerp(a.end, b.end, t), bottom: borders.BorderSide.lerp(a.bottom, b.bottom, t), start: borders.BorderSide.lerp(a.start, b.start, t)});
    }
    paint(canvas, rect, opts) {
      if (canvas == null) dart.nullFailed(L0, 808, 12, "canvas");
      if (rect == null) dart.nullFailed(L0, 809, 10, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let shape = opts && 'shape' in opts ? opts.shape : C0 || CT.C0;
      if (shape == null) dart.nullFailed(L0, 811, 14, "shape");
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
      if (dart.test(this.isUniform)) {
        switch (this.top.style) {
          case C4 || CT.C4:
          {
            return;
          }
          case C6 || CT.C6:
          {
            switch (shape) {
              case C1 || CT.C1:
              {
                if (!(borderRadius == null)) dart.assertFailed("A borderRadius can only be given for rectangular boxes.", L0, 821, 22, "borderRadius == null");
                box_border.BoxBorder._paintUniformBorderWithCircle(canvas, rect, this.top);
                break;
              }
              case C0 || CT.C0:
              {
                if (borderRadius != null) {
                  box_border.BoxBorder._paintUniformBorderWithRadius(canvas, rect, this.top, borderRadius);
                  return;
                }
                box_border.BoxBorder._paintUniformBorderWithRectangle(canvas, rect, this.top);
                break;
              }
              default:
              {
                dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
              }
            }
            return;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      if (!(borderRadius == null)) dart.assertFailed("A borderRadius can only be given for uniform borders.", L0, 836, 12, "borderRadius == null");
      if (!dart.equals(shape, box_border.BoxShape.rectangle)) dart.assertFailed("A border can only be drawn as a circle if it is uniform.", L0, 837, 12, "shape == BoxShape.rectangle");
      let left = null;
      let right = null;
      if (!(textDirection != null)) dart.assertFailed("Non-uniform BorderDirectional objects require a TextDirection when painting.", L0, 840, 12, "textDirection != null");
      switch (dart.nullCheck(textDirection)) {
        case C7 || CT.C7:
        {
          left = this.end;
          right = this.start;
          break;
        }
        case C8 || CT.C8:
        {
          left = this.start;
          right = this.end;
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      borders.paintBorder(canvas, rect, {top: this.top, left: left, bottom: this.bottom, right: right});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return box_border.BorderDirectional.is(other) && dart.equals(other.top, this.top) && dart.equals(other.start, this.start) && dart.equals(other.end, this.end) && dart.equals(other.bottom, this.bottom);
    }
    get hashCode() {
      return ui.hashValues(this.top, this.start, this.end, this.bottom);
    }
    toString() {
      let $arguments = (() => {
        let t3 = JSArrayOfString().of([]);
        if (!dart.equals(this.top, borders.BorderSide.none)) t3.push("top: " + dart.str(this.top));
        if (!dart.equals(this.start, borders.BorderSide.none)) t3.push("start: " + dart.str(this.start));
        if (!dart.equals(this.end, borders.BorderSide.none)) t3.push("end: " + dart.str(this.end));
        if (!dart.equals(this.bottom, borders.BorderSide.none)) t3.push("bottom: " + dart.str(this.bottom));
        return t3;
      })();
      return dart.str(object.objectRuntimeType(this, "BorderDirectional")) + "(" + dart.str($arguments[$join](", ")) + ")";
    }
  };
  (box_border.BorderDirectional.new = function(opts) {
    let top = opts && 'top' in opts ? opts.top : C3 || CT.C3;
    if (top == null) dart.nullFailed(L0, 610, 10, "top");
    let start = opts && 'start' in opts ? opts.start : C3 || CT.C3;
    if (start == null) dart.nullFailed(L0, 611, 10, "start");
    let end = opts && 'end' in opts ? opts.end : C3 || CT.C3;
    if (end == null) dart.nullFailed(L0, 612, 10, "end");
    let bottom = opts && 'bottom' in opts ? opts.bottom : C3 || CT.C3;
    if (bottom == null) dart.nullFailed(L0, 613, 10, "bottom");
    this[top$0] = top;
    this[start$] = start;
    this[end$] = end;
    this[bottom$0] = bottom;
    if (!(top != null)) dart.assertFailed(null, L0, 614, 15, "top != null");
    if (!(start != null)) dart.assertFailed(null, L0, 615, 15, "start != null");
    if (!(end != null)) dart.assertFailed(null, L0, 616, 15, "end != null");
    if (!(bottom != null)) dart.assertFailed(null, L0, 617, 15, "bottom != null");
    box_border.BorderDirectional.__proto__.new.call(this);
    ;
  }).prototype = box_border.BorderDirectional.prototype;
  dart.addTypeTests(box_border.BorderDirectional);
  dart.addTypeCaches(box_border.BorderDirectional);
  dart.setMethodSignature(box_border.BorderDirectional, () => ({
    __proto__: dart.getMethods(box_border.BorderDirectional.__proto__),
    scale: dart.fnType(box_border.BorderDirectional, [core.double]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {borderRadius: dart.nullable(border_radius.BorderRadius), shape: box_border.BoxShape, textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setGetterSignature(box_border.BorderDirectional, () => ({
    __proto__: dart.getGetters(box_border.BorderDirectional.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry,
    isUniform: core.bool
  }));
  dart.setLibraryUri(box_border.BorderDirectional, L1);
  dart.setFieldSignature(box_border.BorderDirectional, () => ({
    __proto__: dart.getFields(box_border.BorderDirectional.__proto__),
    top: dart.finalFieldType(borders.BorderSide),
    start: dart.finalFieldType(borders.BorderSide),
    end: dart.finalFieldType(borders.BorderSide),
    bottom: dart.finalFieldType(borders.BorderSide)
  }));
  dart.defineExtensionMethods(box_border.BorderDirectional, ['_equals', 'toString']);
  dart.defineExtensionAccessors(box_border.BorderDirectional, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/painting/box_border.dart", {
    "package:flutter/src/painting/box_border.dart": box_border
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["box_border.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/box_border.dart.lib.js"}');
  // Exports:
  return {
    src__painting__box_border: box_border
  };
}));

//# sourceMappingURL=box_border.dart.lib.js.map
