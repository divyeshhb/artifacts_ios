define(['dart_sdk', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/painting/decoration_image.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/painting/box_fit.dart'], (function load__packages__flutter__src__rendering__image_dart(dart_sdk, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__painting__decoration_image$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__painting__box_fit$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _engine = dart_sdk._engine;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const decoration_image = packages__flutter__src__painting__decoration_image$46dart.src__painting__decoration_image;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const box_fit = packages__flutter__src__painting__box_fit$46dart.src__painting__box_fit;
  var image$ = Object.create(dart.library);
  var $toDouble = dartx.toDouble;
  dart._checkModuleNullSafetyMode(false);
  var DiagnosticsPropertyOfImage = () => (DiagnosticsPropertyOfImage = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Image)))();
  var EnumPropertyOfBlendMode = () => (EnumPropertyOfBlendMode = dart.constFn(diagnostics.EnumProperty$(ui.BlendMode)))();
  var EnumPropertyOfBoxFit = () => (EnumPropertyOfBoxFit = dart.constFn(diagnostics.EnumProperty$(box_fit.BoxFit)))();
  var DiagnosticsPropertyOfAlignmentGeometry = () => (DiagnosticsPropertyOfAlignmentGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(alignment.AlignmentGeometry)))();
  var EnumPropertyOfImageRepeat = () => (EnumPropertyOfImageRepeat = dart.constFn(diagnostics.EnumProperty$(decoration_image.ImageRepeat)))();
  var DiagnosticsPropertyOfRect = () => (DiagnosticsPropertyOfRect = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Rect)))();
  var EnumPropertyOfTextDirection = () => (EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))();
  var DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))();
  var EnumPropertyOfFilterQuality = () => (EnumPropertyOfFilterQuality = dart.constFn(diagnostics.EnumProperty$(ui.FilterQuality)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/image.dart";
  var L1 = "package:flutter/src/rendering/image.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_name]: "ImageRepeat.noRepeat",
        index: 3
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.FilterQuality.prototype,
        [_name$]: "FilterQuality.low",
        index: 1
      });
    }
  }, false);
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var C0;
  var _name = dart.privateName(decoration_image, "_name");
  var C1;
  var _name$ = dart.privateName(ui, "_name");
  var C2;
  var _resolvedAlignment = dart.privateName(image$, "_resolvedAlignment");
  var _flipHorizontally = dart.privateName(image$, "_flipHorizontally");
  var _colorFilter = dart.privateName(image$, "_colorFilter");
  var _image = dart.privateName(image$, "_image");
  var _width = dart.privateName(image$, "_width");
  var _height = dart.privateName(image$, "_height");
  var _scale = dart.privateName(image$, "_scale");
  var _color = dart.privateName(image$, "_color");
  var _colorBlendMode = dart.privateName(image$, "_colorBlendMode");
  var _fit = dart.privateName(image$, "_fit");
  var _alignment = dart.privateName(image$, "_alignment");
  var _repeat = dart.privateName(image$, "_repeat");
  var _centerSlice = dart.privateName(image$, "_centerSlice");
  var _matchTextDirection = dart.privateName(image$, "_matchTextDirection");
  var _invertColors = dart.privateName(image$, "_invertColors");
  var _textDirection = dart.privateName(image$, "_textDirection");
  var _isAntiAlias = dart.privateName(image$, "_isAntiAlias");
  var _filterQuality = dart.privateName(image$, "_filterQuality");
  var _updateColorFilter = dart.privateName(image$, "_updateColorFilter");
  var _resolve = dart.privateName(image$, "_resolve");
  var _markNeedResolution = dart.privateName(image$, "_markNeedResolution");
  var _sizeForConstraints = dart.privateName(image$, "_sizeForConstraints");
  var debugImageLabel$ = dart.privateName(image$, "RenderImage.debugImageLabel");
  image$.RenderImage = class RenderImage extends box.RenderBox {
    get debugImageLabel() {
      return this[debugImageLabel$];
    }
    set debugImageLabel(value) {
      this[debugImageLabel$] = value;
    }
    [_resolve]() {
      if (this[_resolvedAlignment] != null) return;
      this[_resolvedAlignment] = this.alignment.resolve(this.textDirection);
      this[_flipHorizontally] = dart.test(this.matchTextDirection) && dart.equals(this.textDirection, ui.TextDirection.rtl);
    }
    [_markNeedResolution]() {
      this[_resolvedAlignment] = null;
      this[_flipHorizontally] = null;
      this.markNeedsPaint();
    }
    get image() {
      return this[_image];
    }
    set image(value) {
      let t0;
      if (dart.equals(value, this[_image])) {
        return;
      }
      if (value != null && this[_image] != null && dart.test(value.isCloneOf(dart.nullCheck(this[_image])))) {
        value.dispose();
        return;
      }
      t0 = this[_image];
      t0 == null ? null : t0.dispose();
      this[_image] = value;
      this.markNeedsPaint();
      if (this[_width] == null || this[_height] == null) this.markNeedsLayout();
    }
    get width() {
      return this[_width];
    }
    set width(value) {
      if (value == this[_width]) return;
      this[_width] = value;
      this.markNeedsLayout();
    }
    get height() {
      return this[_height];
    }
    set height(value) {
      if (value == this[_height]) return;
      this[_height] = value;
      this.markNeedsLayout();
    }
    get scale() {
      return this[_scale];
    }
    set scale(value) {
      if (value == null) dart.nullFailed(L0, 138, 20, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 139, 12, "value != null");
      if (value == this[_scale]) return;
      this[_scale] = value;
      this.markNeedsLayout();
    }
    [_updateColorFilter]() {
      let t0;
      if (this[_color] == null)
        this[_colorFilter] = null;
      else
        this[_colorFilter] = new _engine._CkBlendModeColorFilter.new(dart.nullCheck(this[_color]), (t0 = this[_colorBlendMode], t0 == null ? ui.BlendMode.srcIn : t0));
    }
    get color() {
      return this[_color];
    }
    set color(value) {
      if (dart.equals(value, this[_color])) return;
      this[_color] = value;
      this[_updateColorFilter]();
      this.markNeedsPaint();
    }
    get filterQuality() {
      return this[_filterQuality];
    }
    set filterQuality(value) {
      if (value == null) dart.nullFailed(L0, 172, 35, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 173, 12, "value != null");
      if (dart.equals(value, this[_filterQuality])) return;
      this[_filterQuality] = value;
      this.markNeedsPaint();
    }
    get colorBlendMode() {
      return this[_colorBlendMode];
    }
    set colorBlendMode(value) {
      if (dart.equals(value, this[_colorBlendMode])) return;
      this[_colorBlendMode] = value;
      this[_updateColorFilter]();
      this.markNeedsPaint();
    }
    get fit() {
      return this[_fit];
    }
    set fit(value) {
      if (dart.equals(value, this[_fit])) return;
      this[_fit] = value;
      this.markNeedsPaint();
    }
    get alignment() {
      return this[_alignment];
    }
    set alignment(value) {
      if (value == null) dart.nullFailed(L0, 218, 35, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 219, 12, "value != null");
      if (dart.equals(value, this[_alignment])) return;
      this[_alignment] = value;
      this[_markNeedResolution]();
    }
    get repeat() {
      return this[_repeat];
    }
    set repeat(value) {
      if (value == null) dart.nullFailed(L0, 229, 26, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 230, 12, "value != null");
      if (dart.equals(value, this[_repeat])) return;
      this[_repeat] = value;
      this.markNeedsPaint();
    }
    get centerSlice() {
      return this[_centerSlice];
    }
    set centerSlice(value) {
      if (dart.equals(value, this[_centerSlice])) return;
      this[_centerSlice] = value;
      this.markNeedsPaint();
    }
    get invertColors() {
      return this[_invertColors];
    }
    set invertColors(value) {
      if (value == null) dart.nullFailed(L0, 260, 25, "value");
      if (dart.equals(value, this[_invertColors])) return;
      this[_invertColors] = value;
      this.markNeedsPaint();
    }
    get matchTextDirection() {
      return this[_matchTextDirection];
    }
    set matchTextDirection(value) {
      if (value == null) dart.nullFailed(L0, 283, 31, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 284, 12, "value != null");
      if (dart.equals(value, this[_matchTextDirection])) return;
      this[_matchTextDirection] = value;
      this[_markNeedResolution]();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (dart.equals(this[_textDirection], value)) return;
      this[_textDirection] = value;
      this[_markNeedResolution]();
    }
    get isAntiAlias() {
      return this[_isAntiAlias];
    }
    set isAntiAlias(value) {
      if (value == null) dart.nullFailed(L0, 310, 24, "value");
      if (dart.equals(this[_isAntiAlias], value)) {
        return;
      }
      if (!(value != null)) dart.assertFailed(null, L0, 314, 12, "value != null");
      this[_isAntiAlias] = value;
      this.markNeedsPaint();
    }
    [_sizeForConstraints](constraints) {
      if (constraints == null) dart.nullFailed(L0, 326, 43, "constraints");
      constraints = new box.BoxConstraints.tightFor({width: this[_width], height: this[_height]}).enforce(constraints);
      if (this[_image] == null) return constraints.smallest;
      return constraints.constrainSizeAndAttemptToPreserveAspectRatio(new ui.Size.new(dart.nullCheck(this[_image]).width[$toDouble]() / dart.notNull(this[_scale]), dart.nullCheck(this[_image]).height[$toDouble]() / dart.notNull(this[_scale])));
    }
    computeMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 344, 42, "height");
      if (!(dart.notNull(height) >= 0.0)) dart.assertFailed(null, L0, 345, 12, "height >= 0.0");
      if (this[_width] == null && this[_height] == null) return 0.0;
      return this[_sizeForConstraints](new box.BoxConstraints.tightForFinite({height: height})).width;
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 352, 42, "height");
      if (!(dart.notNull(height) >= 0.0)) dart.assertFailed(null, L0, 353, 12, "height >= 0.0");
      return this[_sizeForConstraints](new box.BoxConstraints.tightForFinite({height: height})).width;
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 358, 43, "width");
      if (!(dart.notNull(width) >= 0.0)) dart.assertFailed(null, L0, 359, 12, "width >= 0.0");
      if (this[_width] == null && this[_height] == null) return 0.0;
      return this[_sizeForConstraints](new box.BoxConstraints.tightForFinite({width: width})).height;
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 366, 43, "width");
      if (!(dart.notNull(width) >= 0.0)) dart.assertFailed(null, L0, 367, 12, "width >= 0.0");
      return this[_sizeForConstraints](new box.BoxConstraints.tightForFinite({width: width})).height;
    }
    hitTestSelf(position) {
      if (position == null) dart.nullFailed(L0, 372, 27, "position");
      return true;
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 375, 40, "constraints");
      return this[_sizeForConstraints](constraints);
    }
    performLayout() {
      this.size = this[_sizeForConstraints](this.constraints);
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 385, 30, "context");
      if (offset == null) dart.nullFailed(L0, 385, 46, "offset");
      if (this[_image] == null) return;
      this[_resolve]();
      if (!(this[_resolvedAlignment] != null)) dart.assertFailed(null, L0, 389, 12, "_resolvedAlignment != null");
      if (!(this[_flipHorizontally] != null)) dart.assertFailed(null, L0, 390, 12, "_flipHorizontally != null");
      decoration_image.paintImage({canvas: context.canvas, rect: offset['&'](this.size), image: dart.nullCheck(this[_image]), debugImageLabel: this.debugImageLabel, scale: this[_scale], colorFilter: this[_colorFilter], fit: this[_fit], alignment: dart.nullCheck(this[_resolvedAlignment]), centerSlice: this[_centerSlice], repeat: this[_repeat], flipHorizontally: dart.nullCheck(this[_flipHorizontally]), invertColors: this.invertColors, filterQuality: this[_filterQuality], isAntiAlias: this[_isAntiAlias]});
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 410, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfImage()).new("image", this.image));
      properties.add(new diagnostics.DoubleProperty.new("width", this.width, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("height", this.height, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("scale", this.scale, {defaultValue: 1.0}));
      properties.add(new colors.ColorProperty.new("color", this.color, {defaultValue: null}));
      properties.add(new (EnumPropertyOfBlendMode()).new("colorBlendMode", this.colorBlendMode, {defaultValue: null}));
      properties.add(new (EnumPropertyOfBoxFit()).new("fit", this.fit, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfAlignmentGeometry()).new("alignment", this.alignment, {defaultValue: null}));
      properties.add(new (EnumPropertyOfImageRepeat()).new("repeat", this.repeat, {defaultValue: decoration_image.ImageRepeat.noRepeat}));
      properties.add(new (DiagnosticsPropertyOfRect()).new("centerSlice", this.centerSlice, {defaultValue: null}));
      properties.add(new diagnostics.FlagProperty.new("matchTextDirection", {value: this.matchTextDirection, ifTrue: "match text direction"}));
      properties.add(new (EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("invertColors", this.invertColors));
      properties.add(new (EnumPropertyOfFilterQuality()).new("filterQuality", this.filterQuality));
    }
  };
  (image$.RenderImage.new = function(opts) {
    let image = opts && 'image' in opts ? opts.image : null;
    let debugImageLabel = opts && 'debugImageLabel' in opts ? opts.debugImageLabel : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    if (scale == null) dart.nullFailed(L0, 32, 12, "scale");
    let color = opts && 'color' in opts ? opts.color : null;
    let colorBlendMode = opts && 'colorBlendMode' in opts ? opts.colorBlendMode : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C0 || CT.C0;
    if (alignment == null) dart.nullFailed(L0, 36, 23, "alignment");
    let repeat = opts && 'repeat' in opts ? opts.repeat : C1 || CT.C1;
    if (repeat == null) dart.nullFailed(L0, 37, 17, "repeat");
    let centerSlice = opts && 'centerSlice' in opts ? opts.centerSlice : null;
    let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
    if (matchTextDirection == null) dart.nullFailed(L0, 39, 10, "matchTextDirection");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let invertColors = opts && 'invertColors' in opts ? opts.invertColors : false;
    if (invertColors == null) dart.nullFailed(L0, 41, 10, "invertColors");
    let isAntiAlias = opts && 'isAntiAlias' in opts ? opts.isAntiAlias : false;
    if (isAntiAlias == null) dart.nullFailed(L0, 42, 10, "isAntiAlias");
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C2 || CT.C2;
    if (filterQuality == null) dart.nullFailed(L0, 43, 19, "filterQuality");
    this[_resolvedAlignment] = null;
    this[_flipHorizontally] = null;
    this[_colorFilter] = null;
    this[debugImageLabel$] = debugImageLabel;
    if (!(scale != null)) dart.assertFailed(null, L0, 44, 15, "scale != null");
    if (!(repeat != null)) dart.assertFailed(null, L0, 45, 15, "repeat != null");
    if (!(alignment != null)) dart.assertFailed(null, L0, 46, 15, "alignment != null");
    if (!(filterQuality != null)) dart.assertFailed(null, L0, 47, 15, "filterQuality != null");
    if (!(matchTextDirection != null)) dart.assertFailed(null, L0, 48, 15, "matchTextDirection != null");
    if (!(isAntiAlias != null)) dart.assertFailed(null, L0, 49, 15, "isAntiAlias != null");
    this[_image] = image;
    this[_width] = width;
    this[_height] = height;
    this[_scale] = scale;
    this[_color] = color;
    this[_colorBlendMode] = colorBlendMode;
    this[_fit] = fit;
    this[_alignment] = alignment;
    this[_repeat] = repeat;
    this[_centerSlice] = centerSlice;
    this[_matchTextDirection] = matchTextDirection;
    this[_invertColors] = invertColors;
    this[_textDirection] = textDirection;
    this[_isAntiAlias] = isAntiAlias;
    this[_filterQuality] = filterQuality;
    image$.RenderImage.__proto__.new.call(this);
    this[_updateColorFilter]();
  }).prototype = image$.RenderImage.prototype;
  dart.addTypeTests(image$.RenderImage);
  dart.addTypeCaches(image$.RenderImage);
  dart.setMethodSignature(image$.RenderImage, () => ({
    __proto__: dart.getMethods(image$.RenderImage.__proto__),
    [_resolve]: dart.fnType(dart.void, []),
    [_markNeedResolution]: dart.fnType(dart.void, []),
    [_updateColorFilter]: dart.fnType(dart.void, []),
    [_sizeForConstraints]: dart.fnType(ui.Size, [box.BoxConstraints])
  }));
  dart.setGetterSignature(image$.RenderImage, () => ({
    __proto__: dart.getGetters(image$.RenderImage.__proto__),
    image: dart.nullable(ui.Image),
    width: dart.nullable(core.double),
    height: dart.nullable(core.double),
    scale: core.double,
    color: dart.nullable(ui.Color),
    filterQuality: ui.FilterQuality,
    colorBlendMode: dart.nullable(ui.BlendMode),
    fit: dart.nullable(box_fit.BoxFit),
    alignment: alignment.AlignmentGeometry,
    repeat: decoration_image.ImageRepeat,
    centerSlice: dart.nullable(ui.Rect),
    invertColors: core.bool,
    matchTextDirection: core.bool,
    textDirection: dart.nullable(ui.TextDirection),
    isAntiAlias: core.bool
  }));
  dart.setSetterSignature(image$.RenderImage, () => ({
    __proto__: dart.getSetters(image$.RenderImage.__proto__),
    image: dart.nullable(ui.Image),
    width: dart.nullable(core.double),
    height: dart.nullable(core.double),
    scale: core.double,
    color: dart.nullable(ui.Color),
    filterQuality: ui.FilterQuality,
    colorBlendMode: dart.nullable(ui.BlendMode),
    fit: dart.nullable(box_fit.BoxFit),
    alignment: alignment.AlignmentGeometry,
    repeat: decoration_image.ImageRepeat,
    centerSlice: dart.nullable(ui.Rect),
    invertColors: core.bool,
    matchTextDirection: core.bool,
    textDirection: dart.nullable(ui.TextDirection),
    isAntiAlias: core.bool
  }));
  dart.setLibraryUri(image$.RenderImage, L1);
  dart.setFieldSignature(image$.RenderImage, () => ({
    __proto__: dart.getFields(image$.RenderImage.__proto__),
    [_resolvedAlignment]: dart.fieldType(dart.nullable(alignment.Alignment)),
    [_flipHorizontally]: dart.fieldType(dart.nullable(core.bool)),
    [_image]: dart.fieldType(dart.nullable(ui.Image)),
    debugImageLabel: dart.fieldType(dart.nullable(core.String)),
    [_width]: dart.fieldType(dart.nullable(core.double)),
    [_height]: dart.fieldType(dart.nullable(core.double)),
    [_scale]: dart.fieldType(core.double),
    [_colorFilter]: dart.fieldType(dart.nullable(ui.ColorFilter)),
    [_color]: dart.fieldType(dart.nullable(ui.Color)),
    [_filterQuality]: dart.fieldType(ui.FilterQuality),
    [_colorBlendMode]: dart.fieldType(dart.nullable(ui.BlendMode)),
    [_fit]: dart.fieldType(dart.nullable(box_fit.BoxFit)),
    [_alignment]: dart.fieldType(alignment.AlignmentGeometry),
    [_repeat]: dart.fieldType(decoration_image.ImageRepeat),
    [_centerSlice]: dart.fieldType(dart.nullable(ui.Rect)),
    [_invertColors]: dart.fieldType(core.bool),
    [_matchTextDirection]: dart.fieldType(core.bool),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [_isAntiAlias]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter/src/rendering/image.dart", {
    "package:flutter/src/rendering/image.dart": image$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["image.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/image.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__image: image$
  };
}));

//# sourceMappingURL=image.dart.lib.js.map
