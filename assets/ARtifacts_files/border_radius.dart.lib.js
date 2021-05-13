define(['dart_sdk'], (function load__packages__flutter__src__painting__border_radius_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var border_radius = Object.create(dart.library);
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/border_radius.dart";
  var L1 = "package:flutter/src/painting/border_radius.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [bottomRight$]: C0 || CT.C0,
        [bottomLeft$]: C0 || CT.C0,
        [topRight$]: C0 || CT.C0,
        [topLeft$]: C0 || CT.C0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.rtl",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.ltr",
        index: 1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: border_radius.BorderRadiusDirectional.prototype,
        [bottomEnd$]: C0 || CT.C0,
        [bottomStart$]: C0 || CT.C0,
        [topEnd$]: C0 || CT.C0,
        [topStart$]: C0 || CT.C0
      });
    }
  }, false);
  var _topLeft = dart.privateName(border_radius, "_topLeft");
  var _topRight = dart.privateName(border_radius, "_topRight");
  var _bottomLeft = dart.privateName(border_radius, "_bottomLeft");
  var _bottomRight = dart.privateName(border_radius, "_bottomRight");
  var _topStart = dart.privateName(border_radius, "_topStart");
  var _topEnd = dart.privateName(border_radius, "_topEnd");
  var _bottomStart = dart.privateName(border_radius, "_bottomStart");
  var _bottomEnd = dart.privateName(border_radius, "_bottomEnd");
  border_radius.BorderRadiusGeometry = class BorderRadiusGeometry extends core.Object {
    subtract(other) {
      if (other == null) dart.nullFailed(L0, 49, 54, "other");
      return new border_radius._MixedBorderRadius.new(this[_topLeft]['-'](other[_topLeft]), this[_topRight]['-'](other[_topRight]), this[_bottomLeft]['-'](other[_bottomLeft]), this[_bottomRight]['-'](other[_bottomRight]), this[_topStart]['-'](other[_topStart]), this[_topEnd]['-'](other[_topEnd]), this[_bottomStart]['-'](other[_bottomStart]), this[_bottomEnd]['-'](other[_bottomEnd]));
    }
    add(other) {
      if (other == null) dart.nullFailed(L0, 73, 49, "other");
      return new border_radius._MixedBorderRadius.new(this[_topLeft]['+'](other[_topLeft]), this[_topRight]['+'](other[_topRight]), this[_bottomLeft]['+'](other[_bottomLeft]), this[_bottomRight]['+'](other[_bottomRight]), this[_topStart]['+'](other[_topStart]), this[_topEnd]['+'](other[_topEnd]), this[_bottomStart]['+'](other[_bottomStart]), this[_bottomEnd]['+'](other[_bottomEnd]));
    }
    static lerp(a, b, t) {
      if (t == null) dart.nullFailed(L0, 132, 94, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 133, 12, "t != null");
      if (a == null && b == null) return null;
      a == null ? a = border_radius.BorderRadius.zero : null;
      b == null ? b = border_radius.BorderRadius.zero : null;
      return a.add(b.subtract(a)['*'](t));
    }
    toString() {
      let visual = null;
      let logical = null;
      if (dart.equals(this[_topLeft], this[_topRight]) && dart.equals(this[_topRight], this[_bottomLeft]) && dart.equals(this[_bottomLeft], this[_bottomRight])) {
        if (!dart.equals(this[_topLeft], ui.Radius.zero)) {
          if (this[_topLeft].x == this[_topLeft].y) {
            visual = "BorderRadius.circular(" + this[_topLeft].x[$toStringAsFixed](1) + ")";
          } else {
            visual = "BorderRadius.all(" + dart.str(this[_topLeft]) + ")";
          }
        }
      } else {
        let result = new core.StringBuffer.new();
        result.write("BorderRadius.only(");
        let comma = false;
        if (!dart.equals(this[_topLeft], ui.Radius.zero)) {
          result.write("topLeft: " + dart.str(this[_topLeft]));
          comma = true;
        }
        if (!dart.equals(this[_topRight], ui.Radius.zero)) {
          if (comma) result.write(", ");
          result.write("topRight: " + dart.str(this[_topRight]));
          comma = true;
        }
        if (!dart.equals(this[_bottomLeft], ui.Radius.zero)) {
          if (comma) result.write(", ");
          result.write("bottomLeft: " + dart.str(this[_bottomLeft]));
          comma = true;
        }
        if (!dart.equals(this[_bottomRight], ui.Radius.zero)) {
          if (comma) result.write(", ");
          result.write("bottomRight: " + dart.str(this[_bottomRight]));
        }
        result.write(")");
        visual = result.toString();
      }
      if (dart.equals(this[_topStart], this[_topEnd]) && dart.equals(this[_topEnd], this[_bottomEnd]) && dart.equals(this[_bottomEnd], this[_bottomStart])) {
        if (!dart.equals(this[_topStart], ui.Radius.zero)) {
          if (this[_topStart].x == this[_topStart].y) {
            logical = "BorderRadiusDirectional.circular(" + this[_topStart].x[$toStringAsFixed](1) + ")";
          } else {
            logical = "BorderRadiusDirectional.all(" + dart.str(this[_topStart]) + ")";
          }
        }
      } else {
        let result = new core.StringBuffer.new();
        result.write("BorderRadiusDirectional.only(");
        let comma = false;
        if (!dart.equals(this[_topStart], ui.Radius.zero)) {
          result.write("topStart: " + dart.str(this[_topStart]));
          comma = true;
        }
        if (!dart.equals(this[_topEnd], ui.Radius.zero)) {
          if (comma) result.write(", ");
          result.write("topEnd: " + dart.str(this[_topEnd]));
          comma = true;
        }
        if (!dart.equals(this[_bottomStart], ui.Radius.zero)) {
          if (comma) result.write(", ");
          result.write("bottomStart: " + dart.str(this[_bottomStart]));
          comma = true;
        }
        if (!dart.equals(this[_bottomEnd], ui.Radius.zero)) {
          if (comma) result.write(", ");
          result.write("bottomEnd: " + dart.str(this[_bottomEnd]));
        }
        result.write(")");
        logical = result.toString();
      }
      if (visual != null && logical != null) return dart.str(visual) + " + " + dart.str(logical);
      if (visual != null) return visual;
      if (logical != null) return logical;
      return "BorderRadius.zero";
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return border_radius.BorderRadiusGeometry.is(other) && dart.equals(other[_topLeft], this[_topLeft]) && dart.equals(other[_topRight], this[_topRight]) && dart.equals(other[_bottomLeft], this[_bottomLeft]) && dart.equals(other[_bottomRight], this[_bottomRight]) && dart.equals(other[_topStart], this[_topStart]) && dart.equals(other[_topEnd], this[_topEnd]) && dart.equals(other[_bottomStart], this[_bottomStart]) && dart.equals(other[_bottomEnd], this[_bottomEnd]);
    }
    get hashCode() {
      return ui.hashValues(this[_topLeft], this[_topRight], this[_bottomLeft], this[_bottomRight], this[_topStart], this[_topEnd], this[_bottomStart], this[_bottomEnd]);
    }
  };
  (border_radius.BorderRadiusGeometry.new = function() {
    ;
  }).prototype = border_radius.BorderRadiusGeometry.prototype;
  dart.addTypeTests(border_radius.BorderRadiusGeometry);
  dart.addTypeCaches(border_radius.BorderRadiusGeometry);
  dart.setMethodSignature(border_radius.BorderRadiusGeometry, () => ({
    __proto__: dart.getMethods(border_radius.BorderRadiusGeometry.__proto__),
    subtract: dart.fnType(border_radius.BorderRadiusGeometry, [border_radius.BorderRadiusGeometry]),
    add: dart.fnType(border_radius.BorderRadiusGeometry, [border_radius.BorderRadiusGeometry])
  }));
  dart.setLibraryUri(border_radius.BorderRadiusGeometry, L1);
  dart.defineExtensionMethods(border_radius.BorderRadiusGeometry, ['toString', '_equals']);
  dart.defineExtensionAccessors(border_radius.BorderRadiusGeometry, ['hashCode']);
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var C0;
  var topLeft$ = dart.privateName(border_radius, "BorderRadius.topLeft");
  var topRight$ = dart.privateName(border_radius, "BorderRadius.topRight");
  var bottomLeft$ = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var bottomRight$ = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var C1;
  border_radius.BorderRadius = class BorderRadius extends border_radius.BorderRadiusGeometry {
    get topLeft() {
      return this[topLeft$];
    }
    set topLeft(value) {
      super.topLeft = value;
    }
    get topRight() {
      return this[topRight$];
    }
    set topRight(value) {
      super.topRight = value;
    }
    get bottomLeft() {
      return this[bottomLeft$];
    }
    set bottomLeft(value) {
      super.bottomLeft = value;
    }
    get bottomRight() {
      return this[bottomRight$];
    }
    set bottomRight(value) {
      super.bottomRight = value;
    }
    get [_topLeft]() {
      return this.topLeft;
    }
    get [_topRight]() {
      return this.topRight;
    }
    get [_bottomLeft]() {
      return this.bottomLeft;
    }
    get [_bottomRight]() {
      return this.bottomRight;
    }
    get [_topStart]() {
      return ui.Radius.zero;
    }
    get [_topEnd]() {
      return ui.Radius.zero;
    }
    get [_bottomStart]() {
      return ui.Radius.zero;
    }
    get [_bottomEnd]() {
      return ui.Radius.zero;
    }
    toRRect(rect) {
      if (rect == null) dart.nullFailed(L0, 370, 22, "rect");
      return new ui.RRect.fromRectAndCorners(rect, {topLeft: this.topLeft, topRight: this.topRight, bottomLeft: this.bottomLeft, bottomRight: this.bottomRight});
    }
    subtract(other) {
      if (other == null) dart.nullFailed(L0, 381, 54, "other");
      if (border_radius.BorderRadius.is(other)) return this['-'](other);
      return super.subtract(other);
    }
    add(other) {
      if (other == null) dart.nullFailed(L0, 388, 49, "other");
      if (border_radius.BorderRadius.is(other)) return this['+'](other);
      return super.add(other);
    }
    ['-'](other) {
      if (other == null) dart.nullFailed(L0, 395, 40, "other");
      return new border_radius.BorderRadius.only({topLeft: this.topLeft['-'](other.topLeft), topRight: this.topRight['-'](other.topRight), bottomLeft: this.bottomLeft['-'](other.bottomLeft), bottomRight: this.bottomRight['-'](other.bottomRight)});
    }
    ['+'](other) {
      if (other == null) dart.nullFailed(L0, 405, 40, "other");
      return new border_radius.BorderRadius.only({topLeft: this.topLeft['+'](other.topLeft), topRight: this.topRight['+'](other.topRight), bottomLeft: this.bottomLeft['+'](other.bottomLeft), bottomRight: this.bottomRight['+'](other.bottomRight)});
    }
    _negate() {
      return new border_radius.BorderRadius.only({topLeft: this.topLeft._negate(), topRight: this.topRight._negate(), bottomLeft: this.bottomLeft._negate(), bottomRight: this.bottomRight._negate()});
    }
    ['*'](other) {
      if (other == null) dart.nullFailed(L0, 429, 34, "other");
      return new border_radius.BorderRadius.only({topLeft: this.topLeft['*'](other), topRight: this.topRight['*'](other), bottomLeft: this.bottomLeft['*'](other), bottomRight: this.bottomRight['*'](other)});
    }
    ['/'](other) {
      if (other == null) dart.nullFailed(L0, 440, 34, "other");
      return new border_radius.BorderRadius.only({topLeft: this.topLeft['/'](other), topRight: this.topRight['/'](other), bottomLeft: this.bottomLeft['/'](other), bottomRight: this.bottomRight['/'](other)});
    }
    ['~/'](other) {
      if (other == null) dart.nullFailed(L0, 451, 35, "other");
      return new border_radius.BorderRadius.only({topLeft: this.topLeft['~/'](other), topRight: this.topRight['~/'](other), bottomLeft: this.bottomLeft['~/'](other), bottomRight: this.bottomRight['~/'](other)});
    }
    ['%'](other) {
      if (other == null) dart.nullFailed(L0, 462, 34, "other");
      return new border_radius.BorderRadius.only({topLeft: this.topLeft['%'](other), topRight: this.topRight['%'](other), bottomLeft: this.bottomLeft['%'](other), bottomRight: this.bottomRight['%'](other)});
    }
    static lerp(a, b, t) {
      if (t == null) dart.nullFailed(L0, 476, 70, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 477, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b)['*'](t);
      if (b == null) return a['*'](1.0 - dart.notNull(t));
      return new border_radius.BorderRadius.only({topLeft: dart.nullCheck(ui.Radius.lerp(a.topLeft, b.topLeft, t)), topRight: dart.nullCheck(ui.Radius.lerp(a.topRight, b.topRight, t)), bottomLeft: dart.nullCheck(ui.Radius.lerp(a.bottomLeft, b.bottomLeft, t)), bottomRight: dart.nullCheck(ui.Radius.lerp(a.bottomRight, b.bottomRight, t))});
    }
    resolve(direction) {
      return this;
    }
  };
  (border_radius.BorderRadius.all = function(radius) {
    if (radius == null) dart.nullFailed(L0, 285, 33, "radius");
    border_radius.BorderRadius.only.call(this, {topLeft: radius, topRight: radius, bottomLeft: radius, bottomRight: radius});
  }).prototype = border_radius.BorderRadius.prototype;
  (border_radius.BorderRadius.circular = function(radius) {
    if (radius == null) dart.nullFailed(L0, 293, 32, "radius");
    border_radius.BorderRadius.all.call(this, new ui.Radius.circular(radius));
  }).prototype = border_radius.BorderRadius.prototype;
  (border_radius.BorderRadius.vertical = function(opts) {
    let top = opts && 'top' in opts ? opts.top : C0 || CT.C0;
    if (top == null) dart.nullFailed(L0, 300, 12, "top");
    let bottom = opts && 'bottom' in opts ? opts.bottom : C0 || CT.C0;
    if (bottom == null) dart.nullFailed(L0, 301, 12, "bottom");
    border_radius.BorderRadius.only.call(this, {topLeft: top, topRight: top, bottomLeft: bottom, bottomRight: bottom});
  }).prototype = border_radius.BorderRadius.prototype;
  (border_radius.BorderRadius.horizontal = function(opts) {
    let left = opts && 'left' in opts ? opts.left : C0 || CT.C0;
    if (left == null) dart.nullFailed(L0, 312, 12, "left");
    let right = opts && 'right' in opts ? opts.right : C0 || CT.C0;
    if (right == null) dart.nullFailed(L0, 313, 12, "right");
    border_radius.BorderRadius.only.call(this, {topLeft: left, topRight: right, bottomLeft: left, bottomRight: right});
  }).prototype = border_radius.BorderRadius.prototype;
  (border_radius.BorderRadius.only = function(opts) {
    let topLeft = opts && 'topLeft' in opts ? opts.topLeft : C0 || CT.C0;
    if (topLeft == null) dart.nullFailed(L0, 324, 10, "topLeft");
    let topRight = opts && 'topRight' in opts ? opts.topRight : C0 || CT.C0;
    if (topRight == null) dart.nullFailed(L0, 325, 10, "topRight");
    let bottomLeft = opts && 'bottomLeft' in opts ? opts.bottomLeft : C0 || CT.C0;
    if (bottomLeft == null) dart.nullFailed(L0, 326, 10, "bottomLeft");
    let bottomRight = opts && 'bottomRight' in opts ? opts.bottomRight : C0 || CT.C0;
    if (bottomRight == null) dart.nullFailed(L0, 327, 10, "bottomRight");
    this[topLeft$] = topLeft;
    this[topRight$] = topRight;
    this[bottomLeft$] = bottomLeft;
    this[bottomRight$] = bottomRight;
    border_radius.BorderRadius.__proto__.new.call(this);
    ;
  }).prototype = border_radius.BorderRadius.prototype;
  dart.addTypeTests(border_radius.BorderRadius);
  dart.addTypeCaches(border_radius.BorderRadius);
  dart.setMethodSignature(border_radius.BorderRadius, () => ({
    __proto__: dart.getMethods(border_radius.BorderRadius.__proto__),
    toRRect: dart.fnType(ui.RRect, [ui.Rect]),
    '-': dart.fnType(border_radius.BorderRadius, [border_radius.BorderRadius]),
    '+': dart.fnType(border_radius.BorderRadius, [border_radius.BorderRadius]),
    _negate: dart.fnType(border_radius.BorderRadius, []),
    '*': dart.fnType(border_radius.BorderRadius, [core.double]),
    '/': dart.fnType(border_radius.BorderRadius, [core.double]),
    '~/': dart.fnType(border_radius.BorderRadius, [core.double]),
    '%': dart.fnType(border_radius.BorderRadius, [core.double]),
    resolve: dart.fnType(border_radius.BorderRadius, [dart.nullable(ui.TextDirection)])
  }));
  dart.setGetterSignature(border_radius.BorderRadius, () => ({
    __proto__: dart.getGetters(border_radius.BorderRadius.__proto__),
    [_topLeft]: ui.Radius,
    [_topRight]: ui.Radius,
    [_bottomLeft]: ui.Radius,
    [_bottomRight]: ui.Radius,
    [_topStart]: ui.Radius,
    [_topEnd]: ui.Radius,
    [_bottomStart]: ui.Radius,
    [_bottomEnd]: ui.Radius
  }));
  dart.setLibraryUri(border_radius.BorderRadius, L1);
  dart.setFieldSignature(border_radius.BorderRadius, () => ({
    __proto__: dart.getFields(border_radius.BorderRadius.__proto__),
    topLeft: dart.finalFieldType(ui.Radius),
    topRight: dart.finalFieldType(ui.Radius),
    bottomLeft: dart.finalFieldType(ui.Radius),
    bottomRight: dart.finalFieldType(ui.Radius)
  }));
  dart.defineLazy(border_radius.BorderRadius, {
    /*border_radius.BorderRadius.zero*/get zero() {
      return C1 || CT.C1;
    }
  }, false);
  var _name = dart.privateName(ui, "_name");
  var C2;
  var C3;
  var topStart$ = dart.privateName(border_radius, "BorderRadiusDirectional.topStart");
  var topEnd$ = dart.privateName(border_radius, "BorderRadiusDirectional.topEnd");
  var bottomStart$ = dart.privateName(border_radius, "BorderRadiusDirectional.bottomStart");
  var bottomEnd$ = dart.privateName(border_radius, "BorderRadiusDirectional.bottomEnd");
  var C4;
  border_radius.BorderRadiusDirectional = class BorderRadiusDirectional extends border_radius.BorderRadiusGeometry {
    get topStart() {
      return this[topStart$];
    }
    set topStart(value) {
      super.topStart = value;
    }
    get topEnd() {
      return this[topEnd$];
    }
    set topEnd(value) {
      super.topEnd = value;
    }
    get bottomStart() {
      return this[bottomStart$];
    }
    set bottomStart(value) {
      super.bottomStart = value;
    }
    get bottomEnd() {
      return this[bottomEnd$];
    }
    set bottomEnd(value) {
      super.bottomEnd = value;
    }
    get [_topStart]() {
      return this.topStart;
    }
    get [_topEnd]() {
      return this.topEnd;
    }
    get [_bottomStart]() {
      return this.bottomStart;
    }
    get [_bottomEnd]() {
      return this.bottomEnd;
    }
    get [_topLeft]() {
      return ui.Radius.zero;
    }
    get [_topRight]() {
      return ui.Radius.zero;
    }
    get [_bottomLeft]() {
      return ui.Radius.zero;
    }
    get [_bottomRight]() {
      return ui.Radius.zero;
    }
    subtract(other) {
      if (other == null) dart.nullFailed(L0, 598, 54, "other");
      if (border_radius.BorderRadiusDirectional.is(other)) return this['-'](other);
      return super.subtract(other);
    }
    add(other) {
      if (other == null) dart.nullFailed(L0, 605, 49, "other");
      if (border_radius.BorderRadiusDirectional.is(other)) return this['+'](other);
      return super.add(other);
    }
    ['-'](other) {
      if (other == null) dart.nullFailed(L0, 612, 62, "other");
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart['-'](other.topStart), topEnd: this.topEnd['-'](other.topEnd), bottomStart: this.bottomStart['-'](other.bottomStart), bottomEnd: this.bottomEnd['-'](other.bottomEnd)});
    }
    ['+'](other) {
      if (other == null) dart.nullFailed(L0, 622, 62, "other");
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart['+'](other.topStart), topEnd: this.topEnd['+'](other.topEnd), bottomStart: this.bottomStart['+'](other.bottomStart), bottomEnd: this.bottomEnd['+'](other.bottomEnd)});
    }
    _negate() {
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart._negate(), topEnd: this.topEnd._negate(), bottomStart: this.bottomStart._negate(), bottomEnd: this.bottomEnd._negate()});
    }
    ['*'](other) {
      if (other == null) dart.nullFailed(L0, 646, 45, "other");
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart['*'](other), topEnd: this.topEnd['*'](other), bottomStart: this.bottomStart['*'](other), bottomEnd: this.bottomEnd['*'](other)});
    }
    ['/'](other) {
      if (other == null) dart.nullFailed(L0, 657, 45, "other");
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart['/'](other), topEnd: this.topEnd['/'](other), bottomStart: this.bottomStart['/'](other), bottomEnd: this.bottomEnd['/'](other)});
    }
    ['~/'](other) {
      if (other == null) dart.nullFailed(L0, 668, 46, "other");
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart['~/'](other), topEnd: this.topEnd['~/'](other), bottomStart: this.bottomStart['~/'](other), bottomEnd: this.bottomEnd['~/'](other)});
    }
    ['%'](other) {
      if (other == null) dart.nullFailed(L0, 679, 45, "other");
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart['%'](other), topEnd: this.topEnd['%'](other), bottomStart: this.bottomStart['%'](other), bottomEnd: this.bottomEnd['%'](other)});
    }
    static lerp(a, b, t) {
      if (t == null) dart.nullFailed(L0, 693, 103, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 694, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b)['*'](t);
      if (b == null) return a['*'](1.0 - dart.notNull(t));
      return new border_radius.BorderRadiusDirectional.only({topStart: dart.nullCheck(ui.Radius.lerp(a.topStart, b.topStart, t)), topEnd: dart.nullCheck(ui.Radius.lerp(a.topEnd, b.topEnd, t)), bottomStart: dart.nullCheck(ui.Radius.lerp(a.bottomStart, b.bottomStart, t)), bottomEnd: dart.nullCheck(ui.Radius.lerp(a.bottomEnd, b.bottomEnd, t))});
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, L0, 711, 12, "direction != null");
      switch (dart.nullCheck(direction)) {
        case C2 || CT.C2:
        {
          return new border_radius.BorderRadius.only({topLeft: this.topEnd, topRight: this.topStart, bottomLeft: this.bottomEnd, bottomRight: this.bottomStart});
        }
        case C3 || CT.C3:
        {
          return new border_radius.BorderRadius.only({topLeft: this.topStart, topRight: this.topEnd, bottomLeft: this.bottomStart, bottomRight: this.bottomEnd});
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
  };
  (border_radius.BorderRadiusDirectional.all = function(radius) {
    if (radius == null) dart.nullFailed(L0, 510, 44, "radius");
    border_radius.BorderRadiusDirectional.only.call(this, {topStart: radius, topEnd: radius, bottomStart: radius, bottomEnd: radius});
  }).prototype = border_radius.BorderRadiusDirectional.prototype;
  (border_radius.BorderRadiusDirectional.circular = function(radius) {
    if (radius == null) dart.nullFailed(L0, 518, 43, "radius");
    border_radius.BorderRadiusDirectional.all.call(this, new ui.Radius.circular(radius));
  }).prototype = border_radius.BorderRadiusDirectional.prototype;
  (border_radius.BorderRadiusDirectional.vertical = function(opts) {
    let top = opts && 'top' in opts ? opts.top : C0 || CT.C0;
    if (top == null) dart.nullFailed(L0, 525, 12, "top");
    let bottom = opts && 'bottom' in opts ? opts.bottom : C0 || CT.C0;
    if (bottom == null) dart.nullFailed(L0, 526, 12, "bottom");
    border_radius.BorderRadiusDirectional.only.call(this, {topStart: top, topEnd: top, bottomStart: bottom, bottomEnd: bottom});
  }).prototype = border_radius.BorderRadiusDirectional.prototype;
  (border_radius.BorderRadiusDirectional.horizontal = function(opts) {
    let start = opts && 'start' in opts ? opts.start : C0 || CT.C0;
    if (start == null) dart.nullFailed(L0, 537, 12, "start");
    let end = opts && 'end' in opts ? opts.end : C0 || CT.C0;
    if (end == null) dart.nullFailed(L0, 538, 12, "end");
    border_radius.BorderRadiusDirectional.only.call(this, {topStart: start, topEnd: end, bottomStart: start, bottomEnd: end});
  }).prototype = border_radius.BorderRadiusDirectional.prototype;
  (border_radius.BorderRadiusDirectional.only = function(opts) {
    let topStart = opts && 'topStart' in opts ? opts.topStart : C0 || CT.C0;
    if (topStart == null) dart.nullFailed(L0, 549, 10, "topStart");
    let topEnd = opts && 'topEnd' in opts ? opts.topEnd : C0 || CT.C0;
    if (topEnd == null) dart.nullFailed(L0, 550, 10, "topEnd");
    let bottomStart = opts && 'bottomStart' in opts ? opts.bottomStart : C0 || CT.C0;
    if (bottomStart == null) dart.nullFailed(L0, 551, 10, "bottomStart");
    let bottomEnd = opts && 'bottomEnd' in opts ? opts.bottomEnd : C0 || CT.C0;
    if (bottomEnd == null) dart.nullFailed(L0, 552, 10, "bottomEnd");
    this[topStart$] = topStart;
    this[topEnd$] = topEnd;
    this[bottomStart$] = bottomStart;
    this[bottomEnd$] = bottomEnd;
    border_radius.BorderRadiusDirectional.__proto__.new.call(this);
    ;
  }).prototype = border_radius.BorderRadiusDirectional.prototype;
  dart.addTypeTests(border_radius.BorderRadiusDirectional);
  dart.addTypeCaches(border_radius.BorderRadiusDirectional);
  dart.setMethodSignature(border_radius.BorderRadiusDirectional, () => ({
    __proto__: dart.getMethods(border_radius.BorderRadiusDirectional.__proto__),
    '-': dart.fnType(border_radius.BorderRadiusDirectional, [border_radius.BorderRadiusDirectional]),
    '+': dart.fnType(border_radius.BorderRadiusDirectional, [border_radius.BorderRadiusDirectional]),
    _negate: dart.fnType(border_radius.BorderRadiusDirectional, []),
    '*': dart.fnType(border_radius.BorderRadiusDirectional, [core.double]),
    '/': dart.fnType(border_radius.BorderRadiusDirectional, [core.double]),
    '~/': dart.fnType(border_radius.BorderRadiusDirectional, [core.double]),
    '%': dart.fnType(border_radius.BorderRadiusDirectional, [core.double]),
    resolve: dart.fnType(border_radius.BorderRadius, [dart.nullable(ui.TextDirection)])
  }));
  dart.setGetterSignature(border_radius.BorderRadiusDirectional, () => ({
    __proto__: dart.getGetters(border_radius.BorderRadiusDirectional.__proto__),
    [_topStart]: ui.Radius,
    [_topEnd]: ui.Radius,
    [_bottomStart]: ui.Radius,
    [_bottomEnd]: ui.Radius,
    [_topLeft]: ui.Radius,
    [_topRight]: ui.Radius,
    [_bottomLeft]: ui.Radius,
    [_bottomRight]: ui.Radius
  }));
  dart.setLibraryUri(border_radius.BorderRadiusDirectional, L1);
  dart.setFieldSignature(border_radius.BorderRadiusDirectional, () => ({
    __proto__: dart.getFields(border_radius.BorderRadiusDirectional.__proto__),
    topStart: dart.finalFieldType(ui.Radius),
    topEnd: dart.finalFieldType(ui.Radius),
    bottomStart: dart.finalFieldType(ui.Radius),
    bottomEnd: dart.finalFieldType(ui.Radius)
  }));
  dart.defineLazy(border_radius.BorderRadiusDirectional, {
    /*border_radius.BorderRadiusDirectional.zero*/get zero() {
      return C4 || CT.C4;
    }
  }, false);
  var _topLeft$ = dart.privateName(border_radius, "_MixedBorderRadius._topLeft");
  var _topRight$ = dart.privateName(border_radius, "_MixedBorderRadius._topRight");
  var _bottomLeft$ = dart.privateName(border_radius, "_MixedBorderRadius._bottomLeft");
  var _bottomRight$ = dart.privateName(border_radius, "_MixedBorderRadius._bottomRight");
  var _topStart$ = dart.privateName(border_radius, "_MixedBorderRadius._topStart");
  var _topEnd$ = dart.privateName(border_radius, "_MixedBorderRadius._topEnd");
  var _bottomStart$ = dart.privateName(border_radius, "_MixedBorderRadius._bottomStart");
  var _bottomEnd$ = dart.privateName(border_radius, "_MixedBorderRadius._bottomEnd");
  border_radius._MixedBorderRadius = class _MixedBorderRadius extends border_radius.BorderRadiusGeometry {
    get [_topLeft]() {
      return this[_topLeft$];
    }
    set [_topLeft](value) {
      super[_topLeft] = value;
    }
    get [_topRight]() {
      return this[_topRight$];
    }
    set [_topRight](value) {
      super[_topRight] = value;
    }
    get [_bottomLeft]() {
      return this[_bottomLeft$];
    }
    set [_bottomLeft](value) {
      super[_bottomLeft] = value;
    }
    get [_bottomRight]() {
      return this[_bottomRight$];
    }
    set [_bottomRight](value) {
      super[_bottomRight] = value;
    }
    get [_topStart]() {
      return this[_topStart$];
    }
    set [_topStart](value) {
      super[_topStart] = value;
    }
    get [_topEnd]() {
      return this[_topEnd$];
    }
    set [_topEnd](value) {
      super[_topEnd] = value;
    }
    get [_bottomStart]() {
      return this[_bottomStart$];
    }
    set [_bottomStart](value) {
      super[_bottomStart] = value;
    }
    get [_bottomEnd]() {
      return this[_bottomEnd$];
    }
    set [_bottomEnd](value) {
      super[_bottomEnd] = value;
    }
    _negate() {
      return new border_radius._MixedBorderRadius.new(this[_topLeft]._negate(), this[_topRight]._negate(), this[_bottomLeft]._negate(), this[_bottomRight]._negate(), this[_topStart]._negate(), this[_topEnd]._negate(), this[_bottomStart]._negate(), this[_bottomEnd]._negate());
    }
    ['*'](other) {
      if (other == null) dart.nullFailed(L0, 783, 40, "other");
      return new border_radius._MixedBorderRadius.new(this[_topLeft]['*'](other), this[_topRight]['*'](other), this[_bottomLeft]['*'](other), this[_bottomRight]['*'](other), this[_topStart]['*'](other), this[_topEnd]['*'](other), this[_bottomStart]['*'](other), this[_bottomEnd]['*'](other));
    }
    ['/'](other) {
      if (other == null) dart.nullFailed(L0, 797, 40, "other");
      return new border_radius._MixedBorderRadius.new(this[_topLeft]['/'](other), this[_topRight]['/'](other), this[_bottomLeft]['/'](other), this[_bottomRight]['/'](other), this[_topStart]['/'](other), this[_topEnd]['/'](other), this[_bottomStart]['/'](other), this[_bottomEnd]['/'](other));
    }
    ['~/'](other) {
      if (other == null) dart.nullFailed(L0, 811, 41, "other");
      return new border_radius._MixedBorderRadius.new(this[_topLeft]['~/'](other), this[_topRight]['~/'](other), this[_bottomLeft]['~/'](other), this[_bottomRight]['~/'](other), this[_topStart]['~/'](other), this[_topEnd]['~/'](other), this[_bottomStart]['~/'](other), this[_bottomEnd]['~/'](other));
    }
    ['%'](other) {
      if (other == null) dart.nullFailed(L0, 825, 40, "other");
      return new border_radius._MixedBorderRadius.new(this[_topLeft]['%'](other), this[_topRight]['%'](other), this[_bottomLeft]['%'](other), this[_bottomRight]['%'](other), this[_topStart]['%'](other), this[_topEnd]['%'](other), this[_bottomStart]['%'](other), this[_bottomEnd]['%'](other));
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, L0, 840, 12, "direction != null");
      switch (dart.nullCheck(direction)) {
        case C2 || CT.C2:
        {
          return new border_radius.BorderRadius.only({topLeft: this[_topLeft]['+'](this[_topEnd]), topRight: this[_topRight]['+'](this[_topStart]), bottomLeft: this[_bottomLeft]['+'](this[_bottomEnd]), bottomRight: this[_bottomRight]['+'](this[_bottomStart])});
        }
        case C3 || CT.C3:
        {
          return new border_radius.BorderRadius.only({topLeft: this[_topLeft]['+'](this[_topStart]), topRight: this[_topRight]['+'](this[_topEnd]), bottomLeft: this[_bottomLeft]['+'](this[_bottomStart]), bottomRight: this[_bottomRight]['+'](this[_bottomEnd])});
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
  };
  (border_radius._MixedBorderRadius.new = function(_topLeft, _topRight, _bottomLeft, _bottomRight, _topStart, _topEnd, _bottomStart, _bottomEnd) {
    if (_topLeft == null) dart.nullFailed(L0, 733, 10, "_topLeft");
    if (_topRight == null) dart.nullFailed(L0, 734, 10, "_topRight");
    if (_bottomLeft == null) dart.nullFailed(L0, 735, 10, "_bottomLeft");
    if (_bottomRight == null) dart.nullFailed(L0, 736, 10, "_bottomRight");
    if (_topStart == null) dart.nullFailed(L0, 737, 10, "_topStart");
    if (_topEnd == null) dart.nullFailed(L0, 738, 10, "_topEnd");
    if (_bottomStart == null) dart.nullFailed(L0, 739, 10, "_bottomStart");
    if (_bottomEnd == null) dart.nullFailed(L0, 740, 10, "_bottomEnd");
    this[_topLeft$] = _topLeft;
    this[_topRight$] = _topRight;
    this[_bottomLeft$] = _bottomLeft;
    this[_bottomRight$] = _bottomRight;
    this[_topStart$] = _topStart;
    this[_topEnd$] = _topEnd;
    this[_bottomStart$] = _bottomStart;
    this[_bottomEnd$] = _bottomEnd;
    border_radius._MixedBorderRadius.__proto__.new.call(this);
    ;
  }).prototype = border_radius._MixedBorderRadius.prototype;
  dart.addTypeTests(border_radius._MixedBorderRadius);
  dart.addTypeCaches(border_radius._MixedBorderRadius);
  dart.setMethodSignature(border_radius._MixedBorderRadius, () => ({
    __proto__: dart.getMethods(border_radius._MixedBorderRadius.__proto__),
    _negate: dart.fnType(border_radius._MixedBorderRadius, []),
    '*': dart.fnType(border_radius._MixedBorderRadius, [core.double]),
    '/': dart.fnType(border_radius._MixedBorderRadius, [core.double]),
    '~/': dart.fnType(border_radius._MixedBorderRadius, [core.double]),
    '%': dart.fnType(border_radius._MixedBorderRadius, [core.double]),
    resolve: dart.fnType(border_radius.BorderRadius, [dart.nullable(ui.TextDirection)])
  }));
  dart.setLibraryUri(border_radius._MixedBorderRadius, L1);
  dart.setFieldSignature(border_radius._MixedBorderRadius, () => ({
    __proto__: dart.getFields(border_radius._MixedBorderRadius.__proto__),
    [_topLeft]: dart.finalFieldType(ui.Radius),
    [_topRight]: dart.finalFieldType(ui.Radius),
    [_bottomLeft]: dart.finalFieldType(ui.Radius),
    [_bottomRight]: dart.finalFieldType(ui.Radius),
    [_topStart]: dart.finalFieldType(ui.Radius),
    [_topEnd]: dart.finalFieldType(ui.Radius),
    [_bottomStart]: dart.finalFieldType(ui.Radius),
    [_bottomEnd]: dart.finalFieldType(ui.Radius)
  }));
  dart.trackLibraries("packages/flutter/src/painting/border_radius.dart", {
    "package:flutter/src/painting/border_radius.dart": border_radius
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["border_radius.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/border_radius.dart.lib.js"}');
  // Exports:
  return {
    src__painting__border_radius: border_radius
  };
}));

//# sourceMappingURL=border_radius.dart.lib.js.map
