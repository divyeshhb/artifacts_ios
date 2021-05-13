define(['dart_sdk', 'packages/qr_flutter/src/paint_cache.dart', 'packages/qr_flutter/src/qr_versions.dart', 'packages/qr_flutter/src/errors.dart', 'packages/qr_flutter/src/validator.dart', 'packages/qr_flutter/src/types.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/rendering/custom_paint.dart', 'packages/qr/src/qr_code.dart'], (function load__packages__qr_flutter__src__qr_painter_dart(dart_sdk, packages__qr_flutter__src__paint_cache$46dart, packages__qr_flutter__src__qr_versions$46dart, packages__qr_flutter__src__errors$46dart, packages__qr_flutter__src__validator$46dart, packages__qr_flutter__src__types$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__rendering__custom_paint$46dart, packages__qr__src__qr_code$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _engine = dart_sdk._engine;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const paint_cache = packages__qr_flutter__src__paint_cache$46dart.src__paint_cache;
  const qr_versions = packages__qr_flutter__src__qr_versions$46dart.src__qr_versions;
  const errors = packages__qr_flutter__src__errors$46dart.src__errors;
  const validator = packages__qr_flutter__src__validator$46dart.src__validator;
  const types = packages__qr_flutter__src__types$46dart.src__types;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const custom_paint = packages__flutter__src__rendering__custom_paint$46dart.src__rendering__custom_paint;
  const qr_code = packages__qr__src__qr_code$46dart.src__qr_code;
  var qr_painter = Object.create(dart.library);
  var $toDouble = dartx.toDouble;
  var $toInt = dartx.toInt;
  var $roundToDouble = dartx.roundToDouble;
  dart._checkModuleNullSafetyMode(false);
  var CustomPainterL = () => (CustomPainterL = dart.constFn(dart.legacy(custom_paint.CustomPainter)))();
  var QrPainterL = () => (QrPainterL = dart.constFn(dart.legacy(qr_painter.QrPainter)))();
  var ImageL = () => (ImageL = dart.constFn(dart.legacy(ui.Image)))();
  var ByteDataL = () => (ByteDataL = dart.constFn(dart.legacy(typed_data.ByteData)))();
  const CT = Object.create(null);
  var L1 = "package:qr_flutter/src/qr_painter.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-3.2.0/lib/src/qr_painter.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279308561.0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.ImageByteFormat.prototype,
        [_name]: "ImageByteFormat.png",
        index: 2
      });
    }
  }, false);
  var Color_value = dart.privateName(ui, "Color.value");
  var C0;
  var _calcVersion = dart.privateName(qr_painter, "_calcVersion");
  var _gapSize = dart.privateName(qr_painter, "_gapSize");
  var _paintCache = dart.privateName(qr_painter, "_paintCache");
  var _qr = dart.privateName(qr_painter, "_qr");
  var _init = dart.privateName(qr_painter, "_init");
  var _initPaints = dart.privateName(qr_painter, "_initPaints");
  var _drawFinderPatternItem = dart.privateName(qr_painter, "_drawFinderPatternItem");
  var _isFinderPatternPosition = dart.privateName(qr_painter, "_isFinderPatternPosition");
  var _hasAdjacentHorizontalPixel = dart.privateName(qr_painter, "_hasAdjacentHorizontalPixel");
  var _hasAdjacentVerticalPixel = dart.privateName(qr_painter, "_hasAdjacentVerticalPixel");
  var _scaledAspectSize = dart.privateName(qr_painter, "_scaledAspectSize");
  var _drawImageOverlay = dart.privateName(qr_painter, "_drawImageOverlay");
  var _hasOneNonZeroSide = dart.privateName(qr_painter, "_hasOneNonZeroSide");
  var _name = dart.privateName(ui, "_name");
  var C1;
  var version$ = dart.privateName(qr_painter, "QrPainter.version");
  var errorCorrectionLevel$ = dart.privateName(qr_painter, "QrPainter.errorCorrectionLevel");
  var color$ = dart.privateName(qr_painter, "QrPainter.color");
  var emptyColor$ = dart.privateName(qr_painter, "QrPainter.emptyColor");
  var gapless$ = dart.privateName(qr_painter, "QrPainter.gapless");
  var embeddedImage$ = dart.privateName(qr_painter, "QrPainter.embeddedImage");
  var embeddedImageStyle$ = dart.privateName(qr_painter, "QrPainter.embeddedImageStyle");
  qr_painter.QrPainter = class QrPainter extends custom_paint.CustomPainter {
    get version() {
      return this[version$];
    }
    set version(value) {
      super.version = value;
    }
    get errorCorrectionLevel() {
      return this[errorCorrectionLevel$];
    }
    set errorCorrectionLevel(value) {
      super.errorCorrectionLevel = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get emptyColor() {
      return this[emptyColor$];
    }
    set emptyColor(value) {
      super.emptyColor = value;
    }
    get gapless() {
      return this[gapless$];
    }
    set gapless(value) {
      super.gapless = value;
    }
    get embeddedImage() {
      return this[embeddedImage$];
    }
    set embeddedImage(value) {
      super.embeddedImage = value;
    }
    get embeddedImageStyle() {
      return this[embeddedImageStyle$];
    }
    set embeddedImageStyle(value) {
      super.embeddedImageStyle = value;
    }
    [_init](data) {
      if (!dart.test(qr_versions.QrVersions.isSupportedVersion(this.version))) {
        dart.throw(errors.QrUnsupportedVersionException.new(this.version));
      }
      let validationResult = validator.QrValidator.validate({data: data, version: this.version, errorCorrectionLevel: this.errorCorrectionLevel});
      if (!dart.test(validationResult.isValid)) {
        dart.throw(validationResult.error);
      }
      this[_qr] = validationResult.qrCode;
      this[_calcVersion] = this[_qr].typeNumber;
      this[_initPaints]();
    }
    [_initPaints]() {
      let t0, t0$, t0$0, t0$1, t0$2;
      this[_paintCache].cache((t0 = ui.Paint.new(), (() => {
        t0.style = ui.PaintingStyle.fill;
        return t0;
      })()), types.QrCodeElement.codePixel);
      this[_paintCache].cache((t0$ = ui.Paint.new(), (() => {
        t0$.style = ui.PaintingStyle.fill;
        return t0$;
      })()), types.QrCodeElement.codePixelEmpty);
      for (let position of types.FinderPatternPosition.values) {
        this[_paintCache].cache((t0$0 = ui.Paint.new(), (() => {
          t0$0.style = ui.PaintingStyle.stroke;
          return t0$0;
        })()), types.QrCodeElement.finderPatternOuter, {position: position});
        this[_paintCache].cache((t0$1 = ui.Paint.new(), (() => {
          t0$1.style = ui.PaintingStyle.stroke;
          return t0$1;
        })()), types.QrCodeElement.finderPatternInner, {position: position});
        this[_paintCache].cache((t0$2 = ui.Paint.new(), (() => {
          t0$2.style = ui.PaintingStyle.fill;
          return t0$2;
        })()), types.QrCodeElement.finderPatternDot, {position: position});
      }
    }
    paint(canvas, size) {
      if (size.shortestSide === 0) {
        core.print("[QR] WARN: width or height is zero. You should set a 'size' value " + "or nest this painter in a Widget that defines a non-zero size");
        return;
      }
      let paintMetrics = new qr_painter._PaintMetrics.new({containerSize: size.shortestSide, moduleCount: this[_qr].moduleCount, gapSize: dart.test(this.gapless) ? 0.0 : this[_gapSize]});
      this[_drawFinderPatternItem](types.FinderPatternPosition.topLeft, canvas, paintMetrics);
      this[_drawFinderPatternItem](types.FinderPatternPosition.bottomLeft, canvas, paintMetrics);
      this[_drawFinderPatternItem](types.FinderPatternPosition.topRight, canvas, paintMetrics);
      let left = null;
      let top = null;
      let gap = !dart.test(this.gapless) ? this[_gapSize] : 0;
      let pixelPaint = this[_paintCache].firstPaint(types.QrCodeElement.codePixel);
      pixelPaint.color = this.color;
      let emptyPixelPaint = null;
      if (this.emptyColor != null) {
        emptyPixelPaint = this[_paintCache].firstPaint(types.QrCodeElement.codePixelEmpty);
        emptyPixelPaint.color = this.emptyColor;
      }
      for (let x = 0; x < dart.notNull(this[_qr].moduleCount); x = x + 1) {
        for (let y = 0; y < dart.notNull(this[_qr].moduleCount); y = y + 1) {
          if (dart.test(this[_isFinderPatternPosition](x, y))) continue;
          let paint = dart.test(this[_qr].isDark(y, x)) ? pixelPaint : emptyPixelPaint;
          if (paint == null) continue;
          left = dart.notNull(paintMetrics.inset) + x * (dart.notNull(paintMetrics.pixelSize) + dart.notNull(gap));
          top = dart.notNull(paintMetrics.inset) + y * (dart.notNull(paintMetrics.pixelSize) + dart.notNull(gap));
          let pixelHTweak = 0.0;
          let pixelVTweak = 0.0;
          if (dart.test(this.gapless) && dart.test(this[_hasAdjacentHorizontalPixel](x, y, this[_qr].moduleCount))) {
            pixelHTweak = 0.5;
          }
          if (dart.test(this.gapless) && dart.test(this[_hasAdjacentVerticalPixel](x, y, this[_qr].moduleCount))) {
            pixelVTweak = 0.5;
          }
          let squareRect = new ui.Rect.fromLTWH(left, top, dart.notNull(paintMetrics.pixelSize) + pixelHTweak, dart.notNull(paintMetrics.pixelSize) + pixelVTweak);
          canvas.drawRect(squareRect, paint);
        }
      }
      if (this.embeddedImage != null) {
        let originalSize = new ui.Size.new(this.embeddedImage.width[$toDouble](), this.embeddedImage.height[$toDouble]());
        let requestedSize = this.embeddedImageStyle != null ? this.embeddedImageStyle.size : null;
        let imageSize = this[_scaledAspectSize](size, originalSize, requestedSize);
        let position = new ui.Offset.new((dart.notNull(size.width) - dart.notNull(imageSize.width)) / 2.0, (dart.notNull(size.height) - dart.notNull(imageSize.height)) / 2.0);
        this[_drawImageOverlay](canvas, position, imageSize, this.embeddedImageStyle);
      }
    }
    [_hasAdjacentVerticalPixel](x, y, moduleCount) {
      if (dart.notNull(y) + 1 >= dart.notNull(moduleCount)) return false;
      return this[_qr].isDark(dart.notNull(y) + 1, x);
    }
    [_hasAdjacentHorizontalPixel](x, y, moduleCount) {
      if (dart.notNull(x) + 1 >= dart.notNull(moduleCount)) return false;
      return this[_qr].isDark(y, dart.notNull(x) + 1);
    }
    [_isFinderPatternPosition](x, y) {
      let isTopLeft = dart.notNull(y) < 7 && dart.notNull(x) < 7;
      let isBottomLeft = dart.notNull(y) < 7 && dart.notNull(x) >= dart.notNull(this[_qr].moduleCount) - 7;
      let isTopRight = dart.notNull(y) >= dart.notNull(this[_qr].moduleCount) - 7 && dart.notNull(x) < 7;
      return isTopLeft || isBottomLeft || isTopRight;
    }
    [_drawFinderPatternItem](position, canvas, metrics) {
      let t0;
      let totalGap = (7 - 1) * dart.notNull(metrics.gapSize);
      let radius = 7 * dart.notNull(metrics.pixelSize) + totalGap - dart.notNull(metrics.pixelSize);
      let strokeAdjust = dart.notNull(metrics.pixelSize) / 2.0;
      let edgePos = dart.notNull(metrics.inset) + dart.notNull(metrics.innerContentSize) - (radius + strokeAdjust);
      let offset = null;
      if (position == types.FinderPatternPosition.topLeft) {
        offset = new ui.Offset.new(dart.notNull(metrics.inset) + strokeAdjust, dart.notNull(metrics.inset) + strokeAdjust);
      } else if (position == types.FinderPatternPosition.bottomLeft) {
        offset = new ui.Offset.new(dart.notNull(metrics.inset) + strokeAdjust, edgePos);
      } else {
        offset = new ui.Offset.new(edgePos, dart.notNull(metrics.inset) + strokeAdjust);
      }
      let outerPaint = this[_paintCache].firstPaint(types.QrCodeElement.finderPatternOuter, {position: position});
      outerPaint.strokeWidth = metrics.pixelSize;
      outerPaint.color = this.color;
      let innerPaint = this[_paintCache].firstPaint(types.QrCodeElement.finderPatternInner, {position: position});
      innerPaint.strokeWidth = metrics.pixelSize;
      innerPaint.color = (t0 = this.emptyColor, t0 == null ? new ui.Color.new(16777215) : t0);
      let dotPaint = this[_paintCache].firstPaint(types.QrCodeElement.finderPatternDot, {position: position});
      dotPaint.color = this.color;
      let outerRect = new ui.Rect.fromLTWH(offset.dx, offset.dy, radius, radius);
      canvas.drawRect(outerRect, outerPaint);
      let innerRadius = radius - 2 * dart.notNull(metrics.pixelSize);
      let innerRect = new ui.Rect.fromLTWH(dart.notNull(offset.dx) + dart.notNull(metrics.pixelSize), dart.notNull(offset.dy) + dart.notNull(metrics.pixelSize), innerRadius, innerRadius);
      canvas.drawRect(innerRect, innerPaint);
      let gap = dart.notNull(metrics.pixelSize) * 2;
      let dotSize = radius - gap - 2 * strokeAdjust;
      let dotRect = new ui.Rect.fromLTWH(dart.notNull(offset.dx) + dart.notNull(metrics.pixelSize) + strokeAdjust, dart.notNull(offset.dy) + dart.notNull(metrics.pixelSize) + strokeAdjust, dotSize, dotSize);
      canvas.drawRect(dotRect, dotPaint);
    }
    [_hasOneNonZeroSide](size) {
      return dart.notNull(size.longestSide) > 0;
    }
    [_scaledAspectSize](widgetSize, originalSize, requestedSize) {
      if (requestedSize != null && !dart.test(requestedSize.isEmpty)) {
        return requestedSize;
      } else if (requestedSize != null && dart.test(this[_hasOneNonZeroSide](requestedSize))) {
        let maxSide = requestedSize.longestSide;
        let ratio = dart.notNull(maxSide) / dart.notNull(originalSize.longestSide);
        return new ui.Size.new(ratio * dart.notNull(originalSize.width), ratio * dart.notNull(originalSize.height));
      } else {
        let maxSide = 0.25 * dart.notNull(widgetSize.shortestSide);
        let ratio = maxSide / dart.notNull(originalSize.longestSide);
        return new ui.Size.new(ratio * dart.notNull(originalSize.width), ratio * dart.notNull(originalSize.height));
      }
    }
    [_drawImageOverlay](canvas, position, size, style) {
      let t0;
      let paint = (t0 = ui.Paint.new(), (() => {
        t0.isAntiAlias = true;
        t0.filterQuality = ui.FilterQuality.high;
        return t0;
      })());
      if (style != null) {
        if (style.color != null) {
          paint.colorFilter = new _engine._CkBlendModeColorFilter.new(style.color, ui.BlendMode.srcATop);
        }
      }
      let srcSize = new ui.Size.new(this.embeddedImage.width[$toDouble](), this.embeddedImage.height[$toDouble]());
      let src = alignment.Alignment.center.inscribe(srcSize, ui.Offset.zero['&'](srcSize));
      let dst = alignment.Alignment.center.inscribe(size, position['&'](size));
      canvas.drawImageRect(this.embeddedImage, src, dst, paint);
    }
    shouldRepaint(oldPainter) {
      CustomPainterL().as(oldPainter);
      if (QrPainterL().is(oldPainter)) {
        return !dart.equals(this.color, oldPainter.color) || this.errorCorrectionLevel != oldPainter.errorCorrectionLevel || this[_calcVersion] != oldPainter[_calcVersion] || !dart.equals(this[_qr], oldPainter[_qr]) || !dart.equals(this.gapless, oldPainter.gapless) || !dart.equals(this.embeddedImage, oldPainter.embeddedImage) || !dart.equals(this.embeddedImageStyle, oldPainter.embeddedImageStyle);
      }
      return true;
    }
    toPicture(size) {
      let recorder = ui.PictureRecorder.new();
      let canvas = ui.Canvas.new(recorder);
      this.paint(canvas, new ui.Size.new(size, size));
      return recorder.endRecording();
    }
    toImage(size, opts) {
      let format = opts && 'format' in opts ? opts.format : C1 || CT.C1;
      return async.async(ImageL(), (function* toImage() {
        return yield this.toPicture(size).toImage(size[$toInt](), size[$toInt]());
      }).bind(this));
    }
    toImageData(size, opts) {
      let format = opts && 'format' in opts ? opts.format : C1 || CT.C1;
      return async.async(ByteDataL(), (function* toImageData() {
        let image = (yield this.toImage(size, {format: format}));
        return image.toByteData({format: format});
      }).bind(this));
    }
  };
  (qr_painter.QrPainter.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let version = opts && 'version' in opts ? opts.version : null;
    let errorCorrectionLevel = opts && 'errorCorrectionLevel' in opts ? opts.errorCorrectionLevel : 1;
    let color = opts && 'color' in opts ? opts.color : C0 || CT.C0;
    let emptyColor = opts && 'emptyColor' in opts ? opts.emptyColor : null;
    let gapless = opts && 'gapless' in opts ? opts.gapless : false;
    let embeddedImage = opts && 'embeddedImage' in opts ? opts.embeddedImage : null;
    let embeddedImageStyle = opts && 'embeddedImageStyle' in opts ? opts.embeddedImageStyle : null;
    this[_calcVersion] = null;
    this[_gapSize] = 0.25;
    this[_paintCache] = new paint_cache.PaintCache.new();
    this[_qr] = null;
    this[version$] = version;
    this[errorCorrectionLevel$] = errorCorrectionLevel;
    this[color$] = color;
    this[emptyColor$] = emptyColor;
    this[gapless$] = gapless;
    this[embeddedImage$] = embeddedImage;
    this[embeddedImageStyle$] = embeddedImageStyle;
    if (!dart.test(qr_versions.QrVersions.isSupportedVersion(version))) dart.assertFailed(null, L0, 41, 15, "QrVersions.isSupportedVersion(version)");
    qr_painter.QrPainter.__proto__.new.call(this);
    this[_init](data);
  }).prototype = qr_painter.QrPainter.prototype;
  (qr_painter.QrPainter.withQr = function(opts) {
    let qr = opts && 'qr' in opts ? opts.qr : null;
    let color = opts && 'color' in opts ? opts.color : C0 || CT.C0;
    let emptyColor = opts && 'emptyColor' in opts ? opts.emptyColor : null;
    let gapless = opts && 'gapless' in opts ? opts.gapless : false;
    let embeddedImage = opts && 'embeddedImage' in opts ? opts.embeddedImage : null;
    let embeddedImageStyle = opts && 'embeddedImageStyle' in opts ? opts.embeddedImageStyle : null;
    this[_calcVersion] = null;
    this[_gapSize] = 0.25;
    this[_paintCache] = new paint_cache.PaintCache.new();
    this[color$] = color;
    this[emptyColor$] = emptyColor;
    this[gapless$] = gapless;
    this[embeddedImage$] = embeddedImage;
    this[embeddedImageStyle$] = embeddedImageStyle;
    this[_qr] = qr;
    this[version$] = qr.typeNumber;
    this[errorCorrectionLevel$] = qr.errorCorrectLevel;
    qr_painter.QrPainter.__proto__.new.call(this);
    this[_calcVersion] = this.version;
    this[_initPaints]();
  }).prototype = qr_painter.QrPainter.prototype;
  dart.addTypeTests(qr_painter.QrPainter);
  dart.addTypeCaches(qr_painter.QrPainter);
  dart.setMethodSignature(qr_painter.QrPainter, () => ({
    __proto__: dart.getMethods(qr_painter.QrPainter.__proto__),
    [_init]: dart.fnType(dart.void, [dart.legacy(core.String)]),
    [_initPaints]: dart.fnType(dart.void, []),
    paint: dart.fnType(dart.void, [dart.legacy(ui.Canvas), dart.legacy(ui.Size)]),
    [_hasAdjacentVerticalPixel]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.int)]),
    [_hasAdjacentHorizontalPixel]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.int)]),
    [_isFinderPatternPosition]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.int), dart.legacy(core.int)]),
    [_drawFinderPatternItem]: dart.fnType(dart.void, [dart.legacy(types.FinderPatternPosition), dart.legacy(ui.Canvas), dart.legacy(qr_painter._PaintMetrics)]),
    [_hasOneNonZeroSide]: dart.fnType(dart.legacy(core.bool), [dart.legacy(ui.Size)]),
    [_scaledAspectSize]: dart.fnType(dart.legacy(ui.Size), [dart.legacy(ui.Size), dart.legacy(ui.Size), dart.legacy(ui.Size)]),
    [_drawImageOverlay]: dart.fnType(dart.void, [dart.legacy(ui.Canvas), dart.legacy(ui.Offset), dart.legacy(ui.Size), dart.legacy(types.QrEmbeddedImageStyle)]),
    shouldRepaint: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
    toPicture: dart.fnType(dart.legacy(ui.Picture), [dart.legacy(core.double)]),
    toImage: dart.fnType(dart.legacy(async.Future$(dart.legacy(ui.Image))), [dart.legacy(core.double)], {format: dart.legacy(ui.ImageByteFormat)}, {}),
    toImageData: dart.fnType(dart.legacy(async.Future$(dart.legacy(typed_data.ByteData))), [dart.legacy(core.double)], {format: dart.legacy(ui.ImageByteFormat)}, {})
  }));
  dart.setLibraryUri(qr_painter.QrPainter, L1);
  dart.setFieldSignature(qr_painter.QrPainter, () => ({
    __proto__: dart.getFields(qr_painter.QrPainter.__proto__),
    version: dart.finalFieldType(dart.legacy(core.int)),
    errorCorrectionLevel: dart.finalFieldType(dart.legacy(core.int)),
    color: dart.finalFieldType(dart.legacy(ui.Color)),
    emptyColor: dart.finalFieldType(dart.legacy(ui.Color)),
    gapless: dart.finalFieldType(dart.legacy(core.bool)),
    embeddedImage: dart.finalFieldType(dart.legacy(ui.Image)),
    embeddedImageStyle: dart.finalFieldType(dart.legacy(types.QrEmbeddedImageStyle)),
    [_qr]: dart.fieldType(dart.legacy(qr_code.QrCode)),
    [_calcVersion]: dart.fieldType(dart.legacy(core.int)),
    [_gapSize]: dart.finalFieldType(dart.legacy(core.double)),
    [_paintCache]: dart.finalFieldType(dart.legacy(paint_cache.PaintCache))
  }));
  var _pixelSize = dart.privateName(qr_painter, "_pixelSize");
  var _innerContentSize = dart.privateName(qr_painter, "_innerContentSize");
  var _inset = dart.privateName(qr_painter, "_inset");
  var _calculateMetrics = dart.privateName(qr_painter, "_calculateMetrics");
  qr_painter._PaintMetrics = class _PaintMetrics extends core.Object {
    get pixelSize() {
      return this[_pixelSize];
    }
    get innerContentSize() {
      return this[_innerContentSize];
    }
    get inset() {
      return this[_inset];
    }
    [_calculateMetrics]() {
      let gapTotal = (dart.notNull(this.moduleCount) - 1) * dart.notNull(this.gapSize);
      let pixelSize = (dart.notNull(this.containerSize) - gapTotal) / dart.notNull(this.moduleCount);
      this[_pixelSize] = (pixelSize * 2)[$roundToDouble]() / 2;
      this[_innerContentSize] = dart.notNull(this[_pixelSize]) * dart.notNull(this.moduleCount) + gapTotal;
      this[_inset] = (dart.notNull(this.containerSize) - dart.notNull(this[_innerContentSize])) / 2;
    }
  };
  (qr_painter._PaintMetrics.new = function(opts) {
    let containerSize = opts && 'containerSize' in opts ? opts.containerSize : null;
    let gapSize = opts && 'gapSize' in opts ? opts.gapSize : null;
    let moduleCount = opts && 'moduleCount' in opts ? opts.moduleCount : null;
    this[_pixelSize] = null;
    this[_innerContentSize] = null;
    this[_inset] = null;
    this.containerSize = containerSize;
    this.gapSize = gapSize;
    this.moduleCount = moduleCount;
    this[_calculateMetrics]();
  }).prototype = qr_painter._PaintMetrics.prototype;
  dart.addTypeTests(qr_painter._PaintMetrics);
  dart.addTypeCaches(qr_painter._PaintMetrics);
  dart.setMethodSignature(qr_painter._PaintMetrics, () => ({
    __proto__: dart.getMethods(qr_painter._PaintMetrics.__proto__),
    [_calculateMetrics]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(qr_painter._PaintMetrics, () => ({
    __proto__: dart.getGetters(qr_painter._PaintMetrics.__proto__),
    pixelSize: dart.legacy(core.double),
    innerContentSize: dart.legacy(core.double),
    inset: dart.legacy(core.double)
  }));
  dart.setLibraryUri(qr_painter._PaintMetrics, L1);
  dart.setFieldSignature(qr_painter._PaintMetrics, () => ({
    __proto__: dart.getFields(qr_painter._PaintMetrics.__proto__),
    moduleCount: dart.finalFieldType(dart.legacy(core.int)),
    containerSize: dart.finalFieldType(dart.legacy(core.double)),
    gapSize: dart.finalFieldType(dart.legacy(core.double)),
    [_pixelSize]: dart.fieldType(dart.legacy(core.double)),
    [_innerContentSize]: dart.fieldType(dart.legacy(core.double)),
    [_inset]: dart.fieldType(dart.legacy(core.double))
  }));
  dart.defineLazy(qr_painter, {
    /*qr_painter._finderPatternLimit*/get _finderPatternLimit() {
      return 7;
    },
    /*qr_painter._qrDefaultColor*/get _qrDefaultColor() {
      return C0 || CT.C0;
    }
  }, true);
  dart.trackLibraries("packages/qr_flutter/src/qr_painter.dart", {
    "package:qr_flutter/src/qr_painter.dart": qr_painter
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["qr_painter.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/qr_flutter/src/qr_painter.dart.lib.js"}');
  // Exports:
  return {
    src__qr_painter: qr_painter
  };
}));

//# sourceMappingURL=qr_painter.dart.lib.js.map
