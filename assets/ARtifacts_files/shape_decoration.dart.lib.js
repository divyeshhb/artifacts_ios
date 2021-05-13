define(['dart_sdk', 'packages/flutter/src/painting/circle_border.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/gradient.dart', 'packages/flutter/src/painting/box_shadow.dart', 'packages/flutter/src/foundation/collections.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/painting/decoration_image.dart', 'packages/flutter/src/painting/decoration.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/_network_image_web.dart'], (function load__packages__flutter__src__painting__shape_decoration_dart(dart_sdk, packages__flutter__src__painting__circle_border$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__box_border$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__gradient$46dart, packages__flutter__src__painting__box_shadow$46dart, packages__flutter__src__foundation__collections$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__painting__decoration_image$46dart, packages__flutter__src__painting__decoration$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting___network_image_web$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const circle_border = packages__flutter__src__painting__circle_border$46dart.src__painting__circle_border;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const gradient = packages__flutter__src__painting__gradient$46dart.src__painting__gradient;
  const box_shadow = packages__flutter__src__painting__box_shadow$46dart.src__painting__box_shadow;
  const collections = packages__flutter__src__foundation__collections$46dart.src__foundation__collections;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const decoration_image = packages__flutter__src__painting__decoration_image$46dart.src__painting__decoration_image;
  const decoration = packages__flutter__src__painting__decoration$46dart.src__painting__decoration;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  var shape_decoration = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $length = dartx.length;
  var $map = dartx.map;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var ShapeDecorationN = () => (ShapeDecorationN = dart.constFn(dart.nullable(shape_decoration.ShapeDecoration)))();
  var DiagnosticsPropertyOfGradient = () => (DiagnosticsPropertyOfGradient = dart.constFn(diagnostics.DiagnosticsProperty$(gradient.Gradient)))();
  var DiagnosticsPropertyOfDecorationImage = () => (DiagnosticsPropertyOfDecorationImage = dart.constFn(diagnostics.DiagnosticsProperty$(decoration_image.DecorationImage)))();
  var IterablePropertyOfBoxShadow = () => (IterablePropertyOfBoxShadow = dart.constFn(diagnostics.IterableProperty$(box_shadow.BoxShadow)))();
  var DiagnosticsPropertyOfShapeBorder = () => (DiagnosticsPropertyOfShapeBorder = dart.constFn(diagnostics.DiagnosticsProperty$(borders.ShapeBorder)))();
  var ListOfPaint = () => (ListOfPaint = dart.constFn(core.List$(ui.Paint)))();
  var BoxShadowToPaint = () => (BoxShadowToPaint = dart.constFn(dart.fnType(ui.Paint, [box_shadow.BoxShadow])))();
  var ListOfPath = () => (ListOfPath = dart.constFn(core.List$(ui.Path)))();
  var BoxShadowToPath = () => (BoxShadowToPath = dart.constFn(dart.fnType(ui.Path, [box_shadow.BoxShadow])))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/painting/shape_decoration.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/shape_decoration.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.none",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C2 || CT.C2,
        [BorderSide_width]: 0,
        [BorderSide_color]: C3 || CT.C3
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: circle_border.CircleBorder.prototype,
        [OutlinedBorder_side]: C1 || CT.C1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name$]: "BoxShape.circle",
        index: 1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: box_border.Border.prototype,
        [Border_left]: C1 || CT.C1,
        [Border_bottom]: C1 || CT.C1,
        [Border_right]: C1 || CT.C1,
        [Border_top]: C1 || CT.C1
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name$]: "BoxShape.rectangle",
        index: 0
      });
    }
  }, false);
  var _name = dart.privateName(borders, "_name");
  var C2;
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var C3;
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var C1;
  var OutlinedBorder_side = dart.privateName(borders, "OutlinedBorder.side");
  var C0;
  var _name$ = dart.privateName(box_border, "_name");
  var C4;
  var Border_left = dart.privateName(box_border, "Border.left");
  var Border_bottom = dart.privateName(box_border, "Border.bottom");
  var Border_right = dart.privateName(box_border, "Border.right");
  var Border_top = dart.privateName(box_border, "Border.top");
  var C5;
  var C6;
  var color$ = dart.privateName(shape_decoration, "ShapeDecoration.color");
  var gradient$ = dart.privateName(shape_decoration, "ShapeDecoration.gradient");
  var image$ = dart.privateName(shape_decoration, "ShapeDecoration.image");
  var shadows$ = dart.privateName(shape_decoration, "ShapeDecoration.shadows");
  var shape$ = dart.privateName(shape_decoration, "ShapeDecoration.shape");
  shape_decoration.ShapeDecoration = class ShapeDecoration extends decoration.Decoration {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get gradient() {
      return this[gradient$];
    }
    set gradient(value) {
      super.gradient = value;
    }
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get shadows() {
      return this[shadows$];
    }
    set shadows(value) {
      super.shadows = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    static fromBoxDecoration(source) {
      let t0, t0$, t0$0;
      if (source == null) dart.nullFailed(L0, 93, 59, "source");
      let shape = null;
      if (!(source.shape != null)) dart.assertFailed(null, L0, 95, 12, "source.shape != null");
      switch (source.shape) {
        case C4 || CT.C4:
        {
          if (source.border != null) {
            if (!dart.test(dart.nullCheck(source.border).isUniform)) dart.assertFailed(null, L0, 99, 18, "source.border!.isUniform");
            shape = new circle_border.CircleBorder.new({side: dart.nullCheck(source.border).top});
          } else {
            shape = C0 || CT.C0;
          }
          break;
        }
        case C6 || CT.C6:
        {
          if (source.borderRadius != null) {
            if (!(source.border == null || dart.test(dart.nullCheck(source.border).isUniform))) dart.assertFailed(null, L0, 107, 18, "source.border == null || source.border!.isUniform");
            shape = new rounded_rectangle_border.RoundedRectangleBorder.new({side: (t0$ = (t0 = source.border, t0 == null ? null : t0.top), t0$ == null ? borders.BorderSide.none : t0$), borderRadius: dart.nullCheck(source.borderRadius)});
          } else {
            shape = (t0$0 = source.border, t0$0 == null ? C5 || CT.C5 : t0$0);
          }
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      return new shape_decoration.ShapeDecoration.new({color: source.color, image: source.image, gradient: source.gradient, shadows: source.boxShadow, shape: shape});
    }
    getClipPath(rect, textDirection) {
      if (rect == null) dart.nullFailed(L0, 127, 25, "rect");
      if (textDirection == null) dart.nullFailed(L0, 127, 45, "textDirection");
      return this.shape.getOuterPath(rect, {textDirection: textDirection});
    }
    get padding() {
      return this.shape.dimensions;
    }
    get isComplex() {
      return this.shadows != null;
    }
    lerpFrom(a, t) {
      if (t == null) dart.nullFailed(L0, 193, 51, "t");
      if (box_decoration.BoxDecoration.is(a)) {
        return shape_decoration.ShapeDecoration.lerp(shape_decoration.ShapeDecoration.fromBoxDecoration(a), this, t);
      } else if (a == null || shape_decoration.ShapeDecoration.is(a)) {
        return shape_decoration.ShapeDecoration.lerp(ShapeDecorationN().as(a), this, t);
      }
      return ShapeDecorationN().as(super.lerpFrom(a, t));
    }
    lerpTo(b, t) {
      if (t == null) dart.nullFailed(L0, 203, 49, "t");
      if (box_decoration.BoxDecoration.is(b)) {
        return shape_decoration.ShapeDecoration.lerp(this, shape_decoration.ShapeDecoration.fromBoxDecoration(b), t);
      } else if (b == null || shape_decoration.ShapeDecoration.is(b)) {
        return shape_decoration.ShapeDecoration.lerp(this, ShapeDecorationN().as(b), t);
      }
      return ShapeDecorationN().as(super.lerpTo(b, t));
    }
    static lerp(a, b, t) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5;
      if (t == null) dart.nullFailed(L0, 230, 79, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 231, 12, "t != null");
      if (a == null && b == null) return null;
      if (a != null && b != null) {
        if (t === 0.0) return a;
        if (t === 1.0) return b;
      }
      return new shape_decoration.ShapeDecoration.new({color: ui.Color.lerp((t0 = a, t0 == null ? null : t0.color), (t0$ = b, t0$ == null ? null : t0$.color), t), gradient: gradient.Gradient.lerp((t0$0 = a, t0$0 == null ? null : t0$0.gradient), (t0$1 = b, t0$1 == null ? null : t0$1.gradient), t), image: dart.notNull(t) < 0.5 ? dart.nullCheck(a).image : dart.nullCheck(b).image, shadows: box_shadow.BoxShadow.lerpList((t0$2 = a, t0$2 == null ? null : t0$2.shadows), (t0$3 = b, t0$3 == null ? null : t0$3.shadows), t), shape: dart.nullCheck(borders.ShapeBorder.lerp((t0$4 = a, t0$4 == null ? null : t0$4.shape), (t0$5 = b, t0$5 == null ? null : t0$5.shape), t))});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return shape_decoration.ShapeDecoration.is(other) && dart.equals(other.color, this.color) && dart.equals(other.gradient, this.gradient) && dart.equals(other.image, this.image) && dart.test(collections.listEquals(box_shadow.BoxShadow, other.shadows, this.shadows)) && dart.equals(other.shape, this.shape);
    }
    get hashCode() {
      return ui.hashValues(this.color, this.gradient, this.image, this.shape, ui.hashList(this.shadows));
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 275, 56, "properties");
      super.debugFillProperties(properties);
      properties.defaultDiagnosticsTreeStyle = diagnostics.DiagnosticsTreeStyle.whitespace;
      properties.add(new colors.ColorProperty.new("color", this.color, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfGradient()).new("gradient", this.gradient, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfDecorationImage()).new("image", this.image, {defaultValue: null}));
      properties.add(new (IterablePropertyOfBoxShadow()).new("shadows", this.shadows, {defaultValue: null, style: diagnostics.DiagnosticsTreeStyle.whitespace}));
      properties.add(new (DiagnosticsPropertyOfShapeBorder()).new("shape", this.shape));
    }
    hitTest(size, position, opts) {
      if (size == null) dart.nullFailed(L0, 286, 21, "size");
      if (position == null) dart.nullFailed(L0, 286, 34, "position");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return this.shape.getOuterPath(ui.Offset.zero['&'](size), {textDirection: textDirection}).contains(position);
    }
    createBoxPainter(onChanged = null) {
      if (!(onChanged != null || this.image == null)) dart.assertFailed(null, L0, 292, 12, "onChanged != null || image == null");
      return new shape_decoration._ShapeDecorationPainter.new(this, dart.nullCheck(onChanged));
    }
  };
  (shape_decoration.ShapeDecoration.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let gradient = opts && 'gradient' in opts ? opts.gradient : null;
    let shadows = opts && 'shadows' in opts ? opts.shadows : null;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    if (shape == null) dart.nullFailed(L0, 79, 19, "shape");
    this[color$] = color;
    this[image$] = image;
    this[gradient$] = gradient;
    this[shadows$] = shadows;
    this[shape$] = shape;
    if (!!(color != null && gradient != null)) dart.assertFailed(null, L0, 80, 15, "!(color != null && gradient != null)");
    if (!(shape != null)) dart.assertFailed(null, L0, 81, 15, "shape != null");
    shape_decoration.ShapeDecoration.__proto__.new.call(this);
    ;
  }).prototype = shape_decoration.ShapeDecoration.prototype;
  dart.addTypeTests(shape_decoration.ShapeDecoration);
  dart.addTypeCaches(shape_decoration.ShapeDecoration);
  dart.setMethodSignature(shape_decoration.ShapeDecoration, () => ({
    __proto__: dart.getMethods(shape_decoration.ShapeDecoration.__proto__),
    lerpFrom: dart.fnType(dart.nullable(shape_decoration.ShapeDecoration), [dart.nullable(decoration.Decoration), core.double]),
    lerpTo: dart.fnType(dart.nullable(shape_decoration.ShapeDecoration), [dart.nullable(decoration.Decoration), core.double]),
    createBoxPainter: dart.fnType(shape_decoration._ShapeDecorationPainter, [], [dart.nullable(dart.fnType(dart.void, []))])
  }));
  dart.setGetterSignature(shape_decoration.ShapeDecoration, () => ({
    __proto__: dart.getGetters(shape_decoration.ShapeDecoration.__proto__),
    padding: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(shape_decoration.ShapeDecoration, L1);
  dart.setFieldSignature(shape_decoration.ShapeDecoration, () => ({
    __proto__: dart.getFields(shape_decoration.ShapeDecoration.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    gradient: dart.finalFieldType(dart.nullable(gradient.Gradient)),
    image: dart.finalFieldType(dart.nullable(decoration_image.DecorationImage)),
    shadows: dart.finalFieldType(dart.nullable(core.List$(box_shadow.BoxShadow))),
    shape: dart.finalFieldType(borders.ShapeBorder)
  }));
  dart.defineExtensionMethods(shape_decoration.ShapeDecoration, ['_equals']);
  dart.defineExtensionAccessors(shape_decoration.ShapeDecoration, ['hashCode']);
  var _lastRect = dart.privateName(shape_decoration, "_lastRect");
  var _lastTextDirection = dart.privateName(shape_decoration, "_lastTextDirection");
  var ___ShapeDecorationPainter__outerPath = dart.privateName(shape_decoration, "_#_ShapeDecorationPainter#_outerPath");
  var ___ShapeDecorationPainter__outerPath_isSet = dart.privateName(shape_decoration, "_#_ShapeDecorationPainter#_outerPath#isSet");
  var _innerPath = dart.privateName(shape_decoration, "_innerPath");
  var _interiorPaint = dart.privateName(shape_decoration, "_interiorPaint");
  var _shadowCount = dart.privateName(shape_decoration, "_shadowCount");
  var ___ShapeDecorationPainter__shadowPaths = dart.privateName(shape_decoration, "_#_ShapeDecorationPainter#_shadowPaths");
  var ___ShapeDecorationPainter__shadowPaths_isSet = dart.privateName(shape_decoration, "_#_ShapeDecorationPainter#_shadowPaths#isSet");
  var ___ShapeDecorationPainter__shadowPaints = dart.privateName(shape_decoration, "_#_ShapeDecorationPainter#_shadowPaints");
  var ___ShapeDecorationPainter__shadowPaints_isSet = dart.privateName(shape_decoration, "_#_ShapeDecorationPainter#_shadowPaints#isSet");
  var _imagePainter = dart.privateName(shape_decoration, "_imagePainter");
  var _decoration$ = dart.privateName(shape_decoration, "_decoration");
  var _outerPath = dart.privateName(shape_decoration, "_outerPath");
  var _shadowPaths = dart.privateName(shape_decoration, "_shadowPaths");
  var _shadowPaints = dart.privateName(shape_decoration, "_shadowPaints");
  var _precache = dart.privateName(shape_decoration, "_precache");
  var _paintShadows = dart.privateName(shape_decoration, "_paintShadows");
  var _paintInterior = dart.privateName(shape_decoration, "_paintInterior");
  var _paintImage = dart.privateName(shape_decoration, "_paintImage");
  shape_decoration._ShapeDecorationPainter = class _ShapeDecorationPainter extends decoration.BoxPainter {
    get [_outerPath]() {
      let t0;
      return dart.test(this[___ShapeDecorationPainter__outerPath_isSet]) ? (t0 = this[___ShapeDecorationPainter__outerPath], t0) : dart.throw(new _internal.LateError.fieldNI("_outerPath"));
    }
    set [_outerPath](t0) {
      if (t0 == null) dart.nullFailed(L0, 307, 13, "null");
      this[___ShapeDecorationPainter__outerPath_isSet] = true;
      this[___ShapeDecorationPainter__outerPath] = t0;
    }
    get [_shadowPaths]() {
      let t1;
      return dart.test(this[___ShapeDecorationPainter__shadowPaths_isSet]) ? (t1 = this[___ShapeDecorationPainter__shadowPaths], t1) : dart.throw(new _internal.LateError.fieldNI("_shadowPaths"));
    }
    set [_shadowPaths](t1) {
      if (t1 == null) dart.nullFailed(L0, 311, 19, "null");
      this[___ShapeDecorationPainter__shadowPaths_isSet] = true;
      this[___ShapeDecorationPainter__shadowPaths] = t1;
    }
    get [_shadowPaints]() {
      let t2;
      return dart.test(this[___ShapeDecorationPainter__shadowPaints_isSet]) ? (t2 = this[___ShapeDecorationPainter__shadowPaints], t2) : dart.throw(new _internal.LateError.fieldNI("_shadowPaints"));
    }
    set [_shadowPaints](t2) {
      if (t2 == null) dart.nullFailed(L0, 312, 20, "null");
      this[___ShapeDecorationPainter__shadowPaints_isSet] = true;
      this[___ShapeDecorationPainter__shadowPaints] = t2;
    }
    get onChanged() {
      return dart.nullCheck(super.onChanged);
    }
    [_precache](rect, textDirection) {
      if (rect == null) dart.nullFailed(L0, 317, 23, "rect");
      if (!(rect != null)) dart.assertFailed(null, L0, 318, 12, "rect != null");
      if (dart.equals(rect, this[_lastRect]) && dart.equals(textDirection, this[_lastTextDirection])) return;
      if (this[_interiorPaint] == null && (this[_decoration$].color != null || this[_decoration$].gradient != null)) {
        this[_interiorPaint] = ui.Paint.new();
        if (this[_decoration$].color != null) dart.nullCheck(this[_interiorPaint]).color = dart.nullCheck(this[_decoration$].color);
      }
      if (this[_decoration$].gradient != null) dart.nullCheck(this[_interiorPaint]).shader = dart.nullCheck(this[_decoration$].gradient).createShader(rect);
      if (this[_decoration$].shadows != null) {
        if (this[_shadowCount] == null) {
          this[_shadowCount] = dart.nullCheck(this[_decoration$].shadows)[$length];
          this[_shadowPaints] = (() => {
            let t3 = ListOfPaint().of(dart.nullCheck(this[_decoration$].shadows)[$map](ui.Paint, dart.fn(shadow => {
              if (shadow == null) dart.nullFailed(L0, 337, 50, "shadow");
              return shadow.toPaint();
            }, BoxShadowToPaint())));
            return t3;
          })();
        }
        this[_shadowPaths] = (() => {
          let t4 = ListOfPath().of(dart.nullCheck(this[_decoration$].shadows)[$map](ui.Path, dart.fn(shadow => {
            if (shadow == null) dart.nullFailed(L0, 341, 48, "shadow");
            return this[_decoration$].shape.getOuterPath(rect.shift(shadow.offset).inflate(shadow.spreadRadius), {textDirection: textDirection});
          }, BoxShadowToPath())));
          return t4;
        })();
      }
      if (this[_interiorPaint] != null || this[_shadowCount] != null) this[_outerPath] = this[_decoration$].shape.getOuterPath(rect, {textDirection: textDirection});
      if (this[_decoration$].image != null) this[_innerPath] = this[_decoration$].shape.getInnerPath(rect, {textDirection: textDirection});
      this[_lastRect] = rect;
      this[_lastTextDirection] = textDirection;
    }
    [_paintShadows](canvas) {
      if (canvas == null) dart.nullFailed(L0, 355, 29, "canvas");
      if (this[_shadowCount] != null) {
        for (let index = 0; index < dart.nullCheck(this[_shadowCount]); index = index + 1)
          canvas.drawPath(this[_shadowPaths][$_get](index), this[_shadowPaints][$_get](index));
      }
    }
    [_paintInterior](canvas) {
      if (canvas == null) dart.nullFailed(L0, 362, 30, "canvas");
      if (this[_interiorPaint] != null) canvas.drawPath(this[_outerPath], dart.nullCheck(this[_interiorPaint]));
    }
    [_paintImage](canvas, configuration) {
      if (canvas == null) dart.nullFailed(L0, 368, 27, "canvas");
      if (configuration == null) dart.nullFailed(L0, 368, 54, "configuration");
      if (this[_decoration$].image == null) return;
      this[_imagePainter] == null ? this[_imagePainter] = dart.nullCheck(this[_decoration$].image).createPainter(this.onChanged) : null;
      dart.nullCheck(this[_imagePainter]).paint(canvas, dart.nullCheck(this[_lastRect]), this[_innerPath], configuration);
    }
    dispose() {
      let t5;
      t5 = this[_imagePainter];
      t5 == null ? null : t5.dispose();
      super.dispose();
    }
    paint(canvas, offset, configuration) {
      if (canvas == null) dart.nullFailed(L0, 382, 21, "canvas");
      if (offset == null) dart.nullFailed(L0, 382, 36, "offset");
      if (configuration == null) dart.nullFailed(L0, 382, 63, "configuration");
      if (!(configuration != null)) dart.assertFailed(null, L0, 383, 12, "configuration != null");
      if (!(configuration.size != null)) dart.assertFailed(null, L0, 384, 12, "configuration.size != null");
      let rect = offset['&'](dart.nullCheck(configuration.size));
      let textDirection = configuration.textDirection;
      this[_precache](rect, textDirection);
      this[_paintShadows](canvas);
      this[_paintInterior](canvas);
      this[_paintImage](canvas, configuration);
      this[_decoration$].shape.paint(canvas, rect, {textDirection: textDirection});
    }
  };
  (shape_decoration._ShapeDecorationPainter.new = function(_decoration, onChanged) {
    if (_decoration == null) dart.nullFailed(L0, 299, 32, "_decoration");
    if (onChanged == null) dart.nullFailed(L0, 299, 58, "onChanged");
    this[_lastRect] = null;
    this[_lastTextDirection] = null;
    this[___ShapeDecorationPainter__outerPath] = null;
    this[___ShapeDecorationPainter__outerPath_isSet] = false;
    this[_innerPath] = null;
    this[_interiorPaint] = null;
    this[_shadowCount] = null;
    this[___ShapeDecorationPainter__shadowPaths] = null;
    this[___ShapeDecorationPainter__shadowPaths_isSet] = false;
    this[___ShapeDecorationPainter__shadowPaints] = null;
    this[___ShapeDecorationPainter__shadowPaints_isSet] = false;
    this[_imagePainter] = null;
    this[_decoration$] = _decoration;
    if (!(_decoration != null)) dart.assertFailed(null, L0, 300, 14, "_decoration != null");
    shape_decoration._ShapeDecorationPainter.__proto__.new.call(this, onChanged);
    ;
  }).prototype = shape_decoration._ShapeDecorationPainter.prototype;
  dart.addTypeTests(shape_decoration._ShapeDecorationPainter);
  dart.addTypeCaches(shape_decoration._ShapeDecorationPainter);
  dart.setMethodSignature(shape_decoration._ShapeDecorationPainter, () => ({
    __proto__: dart.getMethods(shape_decoration._ShapeDecorationPainter.__proto__),
    [_precache]: dart.fnType(dart.void, [ui.Rect, dart.nullable(ui.TextDirection)]),
    [_paintShadows]: dart.fnType(dart.void, [ui.Canvas]),
    [_paintInterior]: dart.fnType(dart.void, [ui.Canvas]),
    [_paintImage]: dart.fnType(dart.void, [ui.Canvas, image_provider.ImageConfiguration]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Offset, image_provider.ImageConfiguration])
  }));
  dart.setGetterSignature(shape_decoration._ShapeDecorationPainter, () => ({
    __proto__: dart.getGetters(shape_decoration._ShapeDecorationPainter.__proto__),
    [_outerPath]: ui.Path,
    [_shadowPaths]: core.List$(ui.Path),
    [_shadowPaints]: core.List$(ui.Paint),
    onChanged: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(shape_decoration._ShapeDecorationPainter, () => ({
    __proto__: dart.getSetters(shape_decoration._ShapeDecorationPainter.__proto__),
    [_outerPath]: ui.Path,
    [_shadowPaths]: core.List$(ui.Path),
    [_shadowPaints]: core.List$(ui.Paint)
  }));
  dart.setLibraryUri(shape_decoration._ShapeDecorationPainter, L1);
  dart.setFieldSignature(shape_decoration._ShapeDecorationPainter, () => ({
    __proto__: dart.getFields(shape_decoration._ShapeDecorationPainter.__proto__),
    [_decoration$]: dart.finalFieldType(shape_decoration.ShapeDecoration),
    [_lastRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [_lastTextDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [___ShapeDecorationPainter__outerPath]: dart.fieldType(dart.nullable(ui.Path)),
    [___ShapeDecorationPainter__outerPath_isSet]: dart.fieldType(core.bool),
    [_innerPath]: dart.fieldType(dart.nullable(ui.Path)),
    [_interiorPaint]: dart.fieldType(dart.nullable(ui.Paint)),
    [_shadowCount]: dart.fieldType(dart.nullable(core.int)),
    [___ShapeDecorationPainter__shadowPaths]: dart.fieldType(dart.nullable(core.List$(ui.Path))),
    [___ShapeDecorationPainter__shadowPaths_isSet]: dart.fieldType(core.bool),
    [___ShapeDecorationPainter__shadowPaints]: dart.fieldType(dart.nullable(core.List$(ui.Paint))),
    [___ShapeDecorationPainter__shadowPaints_isSet]: dart.fieldType(core.bool),
    [_imagePainter]: dart.fieldType(dart.nullable(decoration_image.DecorationImagePainter))
  }));
  dart.trackLibraries("packages/flutter/src/painting/shape_decoration.dart", {
    "package:flutter/src/painting/shape_decoration.dart": shape_decoration
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shape_decoration.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/shape_decoration.dart.lib.js"}');
  // Exports:
  return {
    src__painting__shape_decoration: shape_decoration
  };
}));

//# sourceMappingURL=shape_decoration.dart.lib.js.map
