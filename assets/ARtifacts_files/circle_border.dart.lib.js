define(['dart_sdk', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__painting__circle_border_dart(dart_sdk, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var circle_border = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L1 = "package:flutter/src/painting/circle_border.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/circle_border.dart";
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
    get C3() {
      return C3 = dart.const({
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
  var C3;
  circle_border.CircleBorder = class CircleBorder extends borders.OutlinedBorder {
    get dimensions() {
      return new edge_insets.EdgeInsets.all(this.side.width);
    }
    scale(t) {
      if (t == null) dart.nullFailed(L0, 39, 28, "t");
      return new circle_border.CircleBorder.new({side: this.side.scale(t)});
    }
    lerpFrom(a, t) {
      if (t == null) dart.nullFailed(L0, 42, 48, "t");
      if (circle_border.CircleBorder.is(a)) return new circle_border.CircleBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t)});
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (t == null) dart.nullFailed(L0, 49, 46, "t");
      if (circle_border.CircleBorder.is(b)) return new circle_border.CircleBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t)});
      return super.lerpTo(b, t);
    }
    getInnerPath(rect, opts) {
      let t0;
      if (rect == null) dart.nullFailed(L0, 56, 26, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addOval(new ui.Rect.fromCircle({center: rect.center, radius: math.max(core.double, 0.0, dart.notNull(rect.shortestSide) / 2.0 - dart.notNull(this.side.width))}));
        return t0;
      })();
    }
    getOuterPath(rect, opts) {
      let t0;
      if (rect == null) dart.nullFailed(L0, 65, 26, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addOval(new ui.Rect.fromCircle({center: rect.center, radius: dart.notNull(rect.shortestSide) / 2.0}));
        return t0;
      })();
    }
    copyWith(opts) {
      let t0;
      let side = opts && 'side' in opts ? opts.side : null;
      return new circle_border.CircleBorder.new({side: (t0 = side, t0 == null ? this.side : t0)});
    }
    paint(canvas, rect, opts) {
      if (canvas == null) dart.nullFailed(L0, 79, 21, "canvas");
      if (rect == null) dart.nullFailed(L0, 79, 34, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      switch (this.side.style) {
        case C1 || CT.C1:
        {
          break;
        }
        case C3 || CT.C3:
        {
          canvas.drawCircle(rect.center, (dart.notNull(rect.shortestSide) - dart.notNull(this.side.width)) / 2.0, this.side.toPaint());
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
      return circle_border.CircleBorder.is(other) && dart.equals(other.side, this.side);
    }
    get hashCode() {
      return dart.hashCode(this.side);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "CircleBorder")) + "(" + dart.str(this.side) + ")";
    }
  };
  (circle_border.CircleBorder.new = function(opts) {
    let side = opts && 'side' in opts ? opts.side : C0 || CT.C0;
    if (side == null) dart.nullFailed(L0, 31, 35, "side");
    if (!(side != null)) dart.assertFailed(null, L0, 31, 70, "side != null");
    circle_border.CircleBorder.__proto__.new.call(this, {side: side});
    ;
  }).prototype = circle_border.CircleBorder.prototype;
  dart.addTypeTests(circle_border.CircleBorder);
  dart.addTypeCaches(circle_border.CircleBorder);
  dart.setMethodSignature(circle_border.CircleBorder, () => ({
    __proto__: dart.getMethods(circle_border.CircleBorder.__proto__),
    scale: dart.fnType(borders.ShapeBorder, [core.double]),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    copyWith: dart.fnType(circle_border.CircleBorder, [], {side: dart.nullable(borders.BorderSide)}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setGetterSignature(circle_border.CircleBorder, () => ({
    __proto__: dart.getGetters(circle_border.CircleBorder.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(circle_border.CircleBorder, L1);
  dart.defineExtensionMethods(circle_border.CircleBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(circle_border.CircleBorder, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/painting/circle_border.dart", {
    "package:flutter/src/painting/circle_border.dart": circle_border
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["circle_border.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkCI,YAAkB,gCAAI,AAAK;IAC7B;;UAGyB;AAAM,uDAAmB,AAAK,gBAAM,CAAC;IAAE;aAG7B;UAAU;AAC3C,UAAM,8BAAF,CAAC,GACH,MAAO,2CAA8B,wBAAK,AAAE,CAAD,OAAO,WAAM,CAAC;AAC3D,YAAa,gBAAS,CAAC,EAAE,CAAC;IAC5B;WAGiC;UAAU;AACzC,UAAM,8BAAF,CAAC,GACH,MAAO,2CAA8B,wBAAK,WAAM,AAAE,CAAD,OAAO,CAAC;AAC3D,YAAa,cAAO,CAAC,EAAE,CAAC;IAC1B;iBAGuB;;;UAAuB;AAC5C,WAAO;;AACH,mBAAa,gCACL,AAAK,IAAD,iBACJ,sBAAS,KAAuB,AAAM,aAAxB,AAAK,IAAD,iBAAgB,mBAAM,AAAK;;;IAE3D;iBAGuB;;;UAAuB;AAC5C,WAAO;;AACH,mBAAa,gCACL,AAAK,IAAD,iBACc,aAAlB,AAAK,IAAD,iBAAgB;;;IAElC;;;UAGoC;AAClC,YAAO,4CAAwB,KAAL,IAAI,QAAJ,OAAa;IACzC;UAGkB,QAAa;UAAb;UAAa;UAAuB;AACpD,cAAQ,AAAK;;;AAET;;;;AAEsF,UAAtF,AAAO,MAAD,YAAY,AAAK,IAAD,SAA0C,CAAd,aAAlB,AAAK,IAAD,8BAAgB,AAAK,oBAAS,KAAK,AAAK;AAJhF;;;;;;;IAMF;;UAGwB;AACtB,uBAAU,iBAAN,KAAK,GAAgB,qBACvB,MAAO;AACT,YAAa,AACT,+BADG,KAAK,KACM,YAAX,AAAM,KAAD,OAAS;IACvB;;AAGoB,YAAK,eAAL;IAAa;;AAI/B,YAA0D,UAAhD,yBAAkB,MAAM,mBAAgB,eAAE,aAAI;IAC1D;;;QAvEgC;;UAAmC,AAAK,IAAD,IAAI;AAAO,+DAAY,IAAI;;EAAC","file":"../../../../../../../../../../packages/flutter/src/painting/circle_border.dart.lib.js"}');
  // Exports:
  return {
    src__painting__circle_border: circle_border
  };
}));

//# sourceMappingURL=circle_border.dart.lib.js.map
