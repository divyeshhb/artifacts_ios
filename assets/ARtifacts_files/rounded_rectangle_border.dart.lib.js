define(['dart_sdk', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/circle_border.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__painting__rounded_rectangle_border_dart(dart_sdk, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__circle_border$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const circle_border = packages__flutter__src__painting__circle_border$46dart.src__painting__circle_border;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var rounded_rectangle_border = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $toStringAsFixed = dartx.toStringAsFixed;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/rounded_rectangle_border.dart";
  var L1 = "package:flutter/src/painting/rounded_rectangle_border.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.none",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C1 || CT.C1,
        [BorderSide_width]: 0,
        [BorderSide_color]: C2 || CT.C2
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C4 || CT.C4,
        [BorderRadius_bottomLeft]: C4 || CT.C4,
        [BorderRadius_topRight]: C4 || CT.C4,
        [BorderRadius_topLeft]: C4 || CT.C4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.solid",
        index: 1
      });
    }
  }, false);
  var _name = dart.privateName(borders, "_name");
  var C1;
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var C2;
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var C0;
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var C4;
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var C3;
  var C5;
  var borderRadius$ = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.borderRadius");
  rounded_rectangle_border.RoundedRectangleBorder = class RoundedRectangleBorder extends borders.OutlinedBorder {
    get borderRadius() {
      return this[borderRadius$];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.all(this.side.width);
    }
    scale(t) {
      if (t == null) dart.nullFailed(L0, 48, 28, "t");
      return new rounded_rectangle_border.RoundedRectangleBorder.new({side: this.side.scale(t), borderRadius: this.borderRadius['*'](t)});
    }
    lerpFrom(a, t) {
      if (t == null) dart.nullFailed(L0, 56, 48, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 57, 12, "t != null");
      if (rounded_rectangle_border.RoundedRectangleBorder.is(a)) {
        return new rounded_rectangle_border.RoundedRectangleBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t), borderRadius: dart.nullCheck(border_radius.BorderRadiusGeometry.lerp(a.borderRadius, this.borderRadius, t))});
      }
      if (circle_border.CircleBorder.is(a)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t), borderRadius: this.borderRadius, circleness: 1.0 - dart.notNull(t)});
      }
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (t == null) dart.nullFailed(L0, 75, 46, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 76, 12, "t != null");
      if (rounded_rectangle_border.RoundedRectangleBorder.is(b)) {
        return new rounded_rectangle_border.RoundedRectangleBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t), borderRadius: dart.nullCheck(border_radius.BorderRadiusGeometry.lerp(this.borderRadius, b.borderRadius, t))});
      }
      if (circle_border.CircleBorder.is(b)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t), borderRadius: this.borderRadius, circleness: t});
      }
      return super.lerpTo(b, t);
    }
    copyWith(opts) {
      let t0, t0$;
      let side = opts && 'side' in opts ? opts.side : null;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
      return new rounded_rectangle_border.RoundedRectangleBorder.new({side: (t0 = side, t0 == null ? this.side : t0), borderRadius: (t0$ = borderRadius, t0$ == null ? this.borderRadius : t0$)});
    }
    getInnerPath(rect, opts) {
      let t0;
      if (rect == null) dart.nullFailed(L0, 104, 26, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addRRect(this.borderRadius.resolve(textDirection).toRRect(rect).deflate(this.side.width));
        return t0;
      })();
    }
    getOuterPath(rect, opts) {
      let t0;
      if (rect == null) dart.nullFailed(L0, 110, 26, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addRRect(this.borderRadius.resolve(textDirection).toRRect(rect));
        return t0;
      })();
    }
    paint(canvas, rect, opts) {
      let t0;
      if (canvas == null) dart.nullFailed(L0, 116, 21, "canvas");
      if (rect == null) dart.nullFailed(L0, 116, 34, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      switch (this.side.style) {
        case C1 || CT.C1:
        {
          break;
        }
        case C5 || CT.C5:
        {
          let width = this.side.width;
          if (width === 0.0) {
            canvas.drawRRect(this.borderRadius.resolve(textDirection).toRRect(rect), this.side.toPaint());
          } else {
            let outer = this.borderRadius.resolve(textDirection).toRRect(rect);
            let inner = outer.deflate(width);
            let paint = (t0 = ui.Paint.new(), (() => {
              t0.color = this.side.color;
              return t0;
            })());
            canvas.drawDRRect(outer, inner, paint);
          }
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return rounded_rectangle_border.RoundedRectangleBorder.is(other) && dart.equals(other.side, this.side) && dart.equals(other.borderRadius, this.borderRadius);
    }
    get hashCode() {
      return ui.hashValues(this.side, this.borderRadius);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "RoundedRectangleBorder")) + "(" + dart.str(this.side) + ", " + dart.str(this.borderRadius) + ")";
    }
  };
  (rounded_rectangle_border.RoundedRectangleBorder.new = function(opts) {
    let side = opts && 'side' in opts ? opts.side : C0 || CT.C0;
    if (side == null) dart.nullFailed(L0, 33, 16, "side");
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C3 || CT.C3;
    if (borderRadius == null) dart.nullFailed(L0, 34, 10, "borderRadius");
    this[borderRadius$] = borderRadius;
    if (!(side != null)) dart.assertFailed(null, L0, 35, 15, "side != null");
    if (!(borderRadius != null)) dart.assertFailed(null, L0, 36, 15, "borderRadius != null");
    rounded_rectangle_border.RoundedRectangleBorder.__proto__.new.call(this, {side: side});
    ;
  }).prototype = rounded_rectangle_border.RoundedRectangleBorder.prototype;
  dart.addTypeTests(rounded_rectangle_border.RoundedRectangleBorder);
  dart.addTypeCaches(rounded_rectangle_border.RoundedRectangleBorder);
  dart.setMethodSignature(rounded_rectangle_border.RoundedRectangleBorder, () => ({
    __proto__: dart.getMethods(rounded_rectangle_border.RoundedRectangleBorder.__proto__),
    scale: dart.fnType(borders.ShapeBorder, [core.double]),
    copyWith: dart.fnType(rounded_rectangle_border.RoundedRectangleBorder, [], {borderRadius: dart.nullable(border_radius.BorderRadius), side: dart.nullable(borders.BorderSide)}, {}),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setGetterSignature(rounded_rectangle_border.RoundedRectangleBorder, () => ({
    __proto__: dart.getGetters(rounded_rectangle_border.RoundedRectangleBorder.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(rounded_rectangle_border.RoundedRectangleBorder, L1);
  dart.setFieldSignature(rounded_rectangle_border.RoundedRectangleBorder, () => ({
    __proto__: dart.getFields(rounded_rectangle_border.RoundedRectangleBorder.__proto__),
    borderRadius: dart.finalFieldType(border_radius.BorderRadiusGeometry)
  }));
  dart.defineExtensionMethods(rounded_rectangle_border.RoundedRectangleBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(rounded_rectangle_border.RoundedRectangleBorder, ['hashCode']);
  var _adjustRect = dart.privateName(rounded_rectangle_border, "_adjustRect");
  var _adjustBorderRadius = dart.privateName(rounded_rectangle_border, "_adjustBorderRadius");
  var borderRadius$0 = dart.privateName(rounded_rectangle_border, "_RoundedRectangleToCircleBorder.borderRadius");
  var circleness$ = dart.privateName(rounded_rectangle_border, "_RoundedRectangleToCircleBorder.circleness");
  rounded_rectangle_border._RoundedRectangleToCircleBorder = class _RoundedRectangleToCircleBorder extends borders.OutlinedBorder {
    get borderRadius() {
      return this[borderRadius$0];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get circleness() {
      return this[circleness$];
    }
    set circleness(value) {
      super.circleness = value;
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.all(this.side.width);
    }
    scale(t) {
      if (t == null) dart.nullFailed(L0, 172, 28, "t");
      return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: this.side.scale(t), borderRadius: this.borderRadius['*'](t), circleness: t});
    }
    lerpFrom(a, t) {
      if (t == null) dart.nullFailed(L0, 181, 48, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 182, 12, "t != null");
      if (rounded_rectangle_border.RoundedRectangleBorder.is(a)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t), borderRadius: dart.nullCheck(border_radius.BorderRadiusGeometry.lerp(a.borderRadius, this.borderRadius, t)), circleness: dart.notNull(this.circleness) * dart.notNull(t)});
      }
      if (circle_border.CircleBorder.is(a)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t), borderRadius: this.borderRadius, circleness: dart.notNull(this.circleness) + (1.0 - dart.notNull(this.circleness)) * (1.0 - dart.notNull(t))});
      }
      if (rounded_rectangle_border._RoundedRectangleToCircleBorder.is(a)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t), borderRadius: dart.nullCheck(border_radius.BorderRadiusGeometry.lerp(a.borderRadius, this.borderRadius, t)), circleness: dart.nullCheck(ui.lerpDouble(a.circleness, this.circleness, t))});
      }
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (t == null) dart.nullFailed(L0, 208, 46, "t");
      if (rounded_rectangle_border.RoundedRectangleBorder.is(b)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t), borderRadius: dart.nullCheck(border_radius.BorderRadiusGeometry.lerp(this.borderRadius, b.borderRadius, t)), circleness: dart.notNull(this.circleness) * (1.0 - dart.notNull(t))});
      }
      if (circle_border.CircleBorder.is(b)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t), borderRadius: this.borderRadius, circleness: dart.notNull(this.circleness) + (1.0 - dart.notNull(this.circleness)) * dart.notNull(t)});
      }
      if (rounded_rectangle_border._RoundedRectangleToCircleBorder.is(b)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t), borderRadius: dart.nullCheck(border_radius.BorderRadiusGeometry.lerp(this.borderRadius, b.borderRadius, t)), circleness: dart.nullCheck(ui.lerpDouble(this.circleness, b.circleness, t))});
      }
      return super.lerpTo(b, t);
    }
    [_adjustRect](rect) {
      if (rect == null) dart.nullFailed(L0, 233, 25, "rect");
      if (this.circleness === 0.0 || rect.width == rect.height) return rect;
      if (dart.notNull(rect.width) < dart.notNull(rect.height)) {
        let delta = dart.notNull(this.circleness) * (dart.notNull(rect.height) - dart.notNull(rect.width)) / 2.0;
        return new ui.Rect.fromLTRB(rect.left, dart.notNull(rect.top) + delta, rect.right, dart.notNull(rect.bottom) - delta);
      } else {
        let delta = dart.notNull(this.circleness) * (dart.notNull(rect.width) - dart.notNull(rect.height)) / 2.0;
        return new ui.Rect.fromLTRB(dart.notNull(rect.left) + delta, rect.top, dart.notNull(rect.right) - delta, rect.bottom);
      }
    }
    [_adjustBorderRadius](rect, textDirection) {
      if (rect == null) dart.nullFailed(L0, 255, 42, "rect");
      let resolvedRadius = this.borderRadius.resolve(textDirection);
      if (this.circleness === 0.0) return resolvedRadius;
      return border_radius.BorderRadius.lerp(resolvedRadius, new border_radius.BorderRadius.circular(dart.notNull(rect.shortestSide) / 2.0), this.circleness);
    }
    getInnerPath(rect, opts) {
      let t0;
      if (rect == null) dart.nullFailed(L0, 263, 26, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addRRect(dart.nullCheck(this[_adjustBorderRadius](rect, textDirection)).toRRect(this[_adjustRect](rect)).deflate(this.side.width));
        return t0;
      })();
    }
    getOuterPath(rect, opts) {
      let t0;
      if (rect == null) dart.nullFailed(L0, 269, 26, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addRRect(dart.nullCheck(this[_adjustBorderRadius](rect, textDirection)).toRRect(this[_adjustRect](rect)));
        return t0;
      })();
    }
    copyWith(opts) {
      let t0, t0$, t0$0;
      let side = opts && 'side' in opts ? opts.side : null;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
      let circleness = opts && 'circleness' in opts ? opts.circleness : null;
      return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: (t0 = side, t0 == null ? this.side : t0), borderRadius: (t0$ = borderRadius, t0$ == null ? this.borderRadius : t0$), circleness: (t0$0 = circleness, t0$0 == null ? this.circleness : t0$0)});
    }
    paint(canvas, rect, opts) {
      let t0;
      if (canvas == null) dart.nullFailed(L0, 284, 21, "canvas");
      if (rect == null) dart.nullFailed(L0, 284, 34, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      switch (this.side.style) {
        case C1 || CT.C1:
        {
          break;
        }
        case C5 || CT.C5:
        {
          let width = this.side.width;
          if (width === 0.0) {
            canvas.drawRRect(dart.nullCheck(this[_adjustBorderRadius](rect, textDirection)).toRRect(this[_adjustRect](rect)), this.side.toPaint());
          } else {
            let outer = dart.nullCheck(this[_adjustBorderRadius](rect, textDirection)).toRRect(this[_adjustRect](rect));
            let inner = outer.deflate(width);
            let paint = (t0 = ui.Paint.new(), (() => {
              t0.color = this.side.color;
              return t0;
            })());
            canvas.drawDRRect(outer, inner, paint);
          }
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return rounded_rectangle_border._RoundedRectangleToCircleBorder.is(other) && dart.equals(other.side, this.side) && dart.equals(other.borderRadius, this.borderRadius) && other.circleness == this.circleness;
    }
    get hashCode() {
      return ui.hashValues(this.side, this.borderRadius, this.circleness);
    }
    toString() {
      return "RoundedRectangleBorder(" + dart.str(this.side) + ", " + dart.str(this.borderRadius) + ", " + (dart.notNull(this.circleness) * 100)[$toStringAsFixed](1) + "% of the way to being a CircleBorder)";
    }
  };
  (rounded_rectangle_border._RoundedRectangleToCircleBorder.new = function(opts) {
    let side = opts && 'side' in opts ? opts.side : C0 || CT.C0;
    if (side == null) dart.nullFailed(L0, 154, 16, "side");
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C3 || CT.C3;
    if (borderRadius == null) dart.nullFailed(L0, 155, 10, "borderRadius");
    let circleness = opts && 'circleness' in opts ? opts.circleness : null;
    if (circleness == null) dart.nullFailed(L0, 156, 19, "circleness");
    this[borderRadius$0] = borderRadius;
    this[circleness$] = circleness;
    if (!(side != null)) dart.assertFailed(null, L0, 157, 15, "side != null");
    if (!(borderRadius != null)) dart.assertFailed(null, L0, 158, 15, "borderRadius != null");
    if (!(circleness != null)) dart.assertFailed(null, L0, 159, 15, "circleness != null");
    rounded_rectangle_border._RoundedRectangleToCircleBorder.__proto__.new.call(this, {side: side});
    ;
  }).prototype = rounded_rectangle_border._RoundedRectangleToCircleBorder.prototype;
  dart.addTypeTests(rounded_rectangle_border._RoundedRectangleToCircleBorder);
  dart.addTypeCaches(rounded_rectangle_border._RoundedRectangleToCircleBorder);
  dart.setMethodSignature(rounded_rectangle_border._RoundedRectangleToCircleBorder, () => ({
    __proto__: dart.getMethods(rounded_rectangle_border._RoundedRectangleToCircleBorder.__proto__),
    scale: dart.fnType(borders.ShapeBorder, [core.double]),
    [_adjustRect]: dart.fnType(ui.Rect, [ui.Rect]),
    [_adjustBorderRadius]: dart.fnType(dart.nullable(border_radius.BorderRadius), [ui.Rect, dart.nullable(ui.TextDirection)]),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    copyWith: dart.fnType(rounded_rectangle_border._RoundedRectangleToCircleBorder, [], {borderRadius: dart.nullable(border_radius.BorderRadius), circleness: dart.nullable(core.double), side: dart.nullable(borders.BorderSide)}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setGetterSignature(rounded_rectangle_border._RoundedRectangleToCircleBorder, () => ({
    __proto__: dart.getGetters(rounded_rectangle_border._RoundedRectangleToCircleBorder.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(rounded_rectangle_border._RoundedRectangleToCircleBorder, L1);
  dart.setFieldSignature(rounded_rectangle_border._RoundedRectangleToCircleBorder, () => ({
    __proto__: dart.getFields(rounded_rectangle_border._RoundedRectangleToCircleBorder.__proto__),
    borderRadius: dart.finalFieldType(border_radius.BorderRadiusGeometry),
    circleness: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(rounded_rectangle_border._RoundedRectangleToCircleBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(rounded_rectangle_border._RoundedRectangleToCircleBorder, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/painting/rounded_rectangle_border.dart", {
    "package:flutter/src/painting/rounded_rectangle_border.dart": rounded_rectangle_border
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["rounded_rectangle_border.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/rounded_rectangle_border.dart.lib.js"}');
  // Exports:
  return {
    src__painting__rounded_rectangle_border: rounded_rectangle_border
  };
}));

//# sourceMappingURL=rounded_rectangle_border.dart.lib.js.map
