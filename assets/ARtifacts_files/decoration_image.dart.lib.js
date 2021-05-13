define(['dart_sdk', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/painting/box_fit.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/image_stream.dart', 'packages/flutter/src/painting/debug.dart', 'packages/flutter/src/scheduler/binding.dart'], (function load__packages__flutter__src__painting__decoration_image_dart(dart_sdk, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__painting__box_fit$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__image_stream$46dart, packages__flutter__src__painting__debug$46dart, packages__flutter__src__scheduler__binding$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const _engine = dart_sdk._engine;
  const developer = dart_sdk.developer;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const box_fit = packages__flutter__src__painting__box_fit$46dart.src__painting__box_fit;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const image_stream = packages__flutter__src__painting__image_stream$46dart.src__painting__image_stream;
  const debug = packages__flutter__src__painting__debug$46dart.src__painting__debug;
  const binding = packages__flutter__src__scheduler__binding$46dart.src__scheduler__binding;
  var decoration_image = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $join = dartx.join;
  var $isNotEmpty = dartx.isNotEmpty;
  var $toDouble = dartx.toDouble;
  var $truncate = dartx.truncate;
  var $toInt = dartx.toInt;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $values = dartx.values;
  var $toSet = dartx.toSet;
  var $isEmpty = dartx.isEmpty;
  var $floor = dartx.floor;
  var $ceil = dartx.ceil;
  dart._checkModuleNullSafetyMode(false);
  var ImageRepeatL = () => (ImageRepeatL = dart.constFn(dart.legacy(decoration_image.ImageRepeat)))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var DiagnosticsPropertyOfDecorationImage = () => (DiagnosticsPropertyOfDecorationImage = dart.constFn(diagnostics.DiagnosticsProperty$(decoration_image.DecorationImage)))();
  var DiagnosticsPropertyOfImageConfiguration = () => (DiagnosticsPropertyOfImageConfiguration = dart.constFn(diagnostics.DiagnosticsProperty$(image_provider.ImageConfiguration)))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var LinkedHashSetOfImageSizeInfo = () => (LinkedHashSetOfImageSizeInfo = dart.constFn(collection.LinkedHashSet$(debug.ImageSizeInfo)))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  var IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  var IdentityMapOfString$ImageSizeInfo = () => (IdentityMapOfString$ImageSizeInfo = dart.constFn(_js_helper.IdentityMap$(core.String, debug.ImageSizeInfo)))();
  var DurationTovoid = () => (DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))();
  var SyncIterableOfRect = () => (SyncIterableOfRect = dart.constFn(_js_helper.SyncIterable$(ui.Rect)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/painting/decoration_image.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/decoration_image.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_name$]: "ImageRepeat.repeat",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_name$]: "ImageRepeat.repeatX",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_name$]: "ImageRepeat.repeatY",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_name$]: "ImageRepeat.noRepeat",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], ImageRepeatL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.FilterQuality.prototype,
        [_name]: "FilterQuality.low",
        index: 1
      });
    },
    get C8() {
      return C8 = dart.constList([-1, 0, 0, 0, 255, 0, -1, 0, 0, 255, 0, 0, -1, 0, 255, 0, 0, 0, 1, 0], doubleL());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: _engine._CkMatrixColorFilter.prototype,
        [_CkMatrixColorFilter_matrix]: C8 || CT.C8
      });
    }
  }, false);
  var _name$ = dart.privateName(decoration_image, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  decoration_image.ImageRepeat = class ImageRepeat extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (decoration_image.ImageRepeat.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 21, 6, "index");
    if (_name == null) dart.nullFailed(L0, 21, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = decoration_image.ImageRepeat.prototype;
  dart.addTypeTests(decoration_image.ImageRepeat);
  dart.addTypeCaches(decoration_image.ImageRepeat);
  dart.setLibraryUri(decoration_image.ImageRepeat, L1);
  dart.setFieldSignature(decoration_image.ImageRepeat, () => ({
    __proto__: dart.getFields(decoration_image.ImageRepeat.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(decoration_image.ImageRepeat, ['toString']);
  decoration_image.ImageRepeat.repeat = C0 || CT.C0;
  decoration_image.ImageRepeat.repeatX = C1 || CT.C1;
  decoration_image.ImageRepeat.repeatY = C2 || CT.C2;
  decoration_image.ImageRepeat.noRepeat = C3 || CT.C3;
  decoration_image.ImageRepeat.values = C4 || CT.C4;
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var C5;
  var image$ = dart.privateName(decoration_image, "DecorationImage.image");
  var onError$ = dart.privateName(decoration_image, "DecorationImage.onError");
  var colorFilter$ = dart.privateName(decoration_image, "DecorationImage.colorFilter");
  var fit$ = dart.privateName(decoration_image, "DecorationImage.fit");
  var alignment$ = dart.privateName(decoration_image, "DecorationImage.alignment");
  var centerSlice$ = dart.privateName(decoration_image, "DecorationImage.centerSlice");
  var repeat$ = dart.privateName(decoration_image, "DecorationImage.repeat");
  var matchTextDirection$ = dart.privateName(decoration_image, "DecorationImage.matchTextDirection");
  var scale$ = dart.privateName(decoration_image, "DecorationImage.scale");
  decoration_image.DecorationImage = class DecorationImage extends core.Object {
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get onError() {
      return this[onError$];
    }
    set onError(value) {
      super.onError = value;
    }
    get colorFilter() {
      return this[colorFilter$];
    }
    set colorFilter(value) {
      super.colorFilter = value;
    }
    get fit() {
      return this[fit$];
    }
    set fit(value) {
      super.fit = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get centerSlice() {
      return this[centerSlice$];
    }
    set centerSlice(value) {
      super.centerSlice = value;
    }
    get repeat() {
      return this[repeat$];
    }
    set repeat(value) {
      super.repeat = value;
    }
    get matchTextDirection() {
      return this[matchTextDirection$];
    }
    set matchTextDirection(value) {
      super.matchTextDirection = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    createPainter(onChanged) {
      if (onChanged == null) dart.nullFailed(L0, 149, 53, "onChanged");
      if (!(onChanged != null)) dart.assertFailed(null, L0, 150, 12, "onChanged != null");
      return new decoration_image.DecorationImagePainter.__(this, onChanged);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return decoration_image.DecorationImage.is(other) && dart.equals(other.image, this.image) && dart.equals(other.colorFilter, this.colorFilter) && dart.equals(other.fit, this.fit) && dart.equals(other.alignment, this.alignment) && dart.equals(other.centerSlice, this.centerSlice) && dart.equals(other.repeat, this.repeat) && dart.equals(other.matchTextDirection, this.matchTextDirection) && other.scale == this.scale;
    }
    get hashCode() {
      return ui.hashValues(this.image, this.colorFilter, this.fit, this.alignment, this.centerSlice, this.repeat, this.matchTextDirection, this.scale);
    }
    toString() {
      let properties = (() => {
        let t0 = JSArrayOfString().of([dart.str(this.image)]);
        if (this.colorFilter != null) t0.push(dart.str(this.colorFilter));
        if (this.fit != null && !(dart.equals(this.fit, box_fit.BoxFit.fill) && this.centerSlice != null) && !(dart.equals(this.fit, box_fit.BoxFit.scaleDown) && this.centerSlice == null)) t0.push(dart.str(this.fit));
        t0.push(dart.str(this.alignment));
        if (this.centerSlice != null) t0.push("centerSlice: " + dart.str(this.centerSlice));
        if (!dart.equals(this.repeat, decoration_image.ImageRepeat.noRepeat)) t0.push(dart.str(this.repeat));
        if (dart.test(this.matchTextDirection)) t0.push("match text direction");
        t0.push("scale: " + dart.str(this.scale));
        return t0;
      })();
      return dart.str(object.objectRuntimeType(this, "DecorationImage")) + "(" + dart.str(properties[$join](", ")) + ")";
    }
  };
  (decoration_image.DecorationImage.new = function(opts) {
    let image = opts && 'image' in opts ? opts.image : null;
    if (image == null) dart.nullFailed(L0, 46, 19, "image");
    let onError = opts && 'onError' in opts ? opts.onError : null;
    let colorFilter = opts && 'colorFilter' in opts ? opts.colorFilter : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C5 || CT.C5;
    if (alignment == null) dart.nullFailed(L0, 50, 10, "alignment");
    let centerSlice = opts && 'centerSlice' in opts ? opts.centerSlice : null;
    let repeat = opts && 'repeat' in opts ? opts.repeat : C3 || CT.C3;
    if (repeat == null) dart.nullFailed(L0, 52, 10, "repeat");
    let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
    if (matchTextDirection == null) dart.nullFailed(L0, 53, 10, "matchTextDirection");
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    if (scale == null) dart.nullFailed(L0, 54, 10, "scale");
    this[image$] = image;
    this[onError$] = onError;
    this[colorFilter$] = colorFilter;
    this[fit$] = fit;
    this[alignment$] = alignment;
    this[centerSlice$] = centerSlice;
    this[repeat$] = repeat;
    this[matchTextDirection$] = matchTextDirection;
    this[scale$] = scale;
    if (!(image != null)) dart.assertFailed(null, L0, 55, 15, "image != null");
    if (!(alignment != null)) dart.assertFailed(null, L0, 56, 15, "alignment != null");
    if (!(repeat != null)) dart.assertFailed(null, L0, 57, 15, "repeat != null");
    if (!(matchTextDirection != null)) dart.assertFailed(null, L0, 58, 15, "matchTextDirection != null");
    if (!(scale != null)) dart.assertFailed(null, L0, 59, 15, "scale != null");
    ;
  }).prototype = decoration_image.DecorationImage.prototype;
  dart.addTypeTests(decoration_image.DecorationImage);
  dart.addTypeCaches(decoration_image.DecorationImage);
  dart.setMethodSignature(decoration_image.DecorationImage, () => ({
    __proto__: dart.getMethods(decoration_image.DecorationImage.__proto__),
    createPainter: dart.fnType(decoration_image.DecorationImagePainter, [dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(decoration_image.DecorationImage, L1);
  dart.setFieldSignature(decoration_image.DecorationImage, () => ({
    __proto__: dart.getFields(decoration_image.DecorationImage.__proto__),
    image: dart.finalFieldType(image_provider.ImageProvider$(core.Object)),
    onError: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.Object, dart.nullable(core.StackTrace)]))),
    colorFilter: dart.finalFieldType(dart.nullable(ui.ColorFilter)),
    fit: dart.finalFieldType(dart.nullable(box_fit.BoxFit)),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    centerSlice: dart.finalFieldType(dart.nullable(ui.Rect)),
    repeat: dart.finalFieldType(decoration_image.ImageRepeat),
    matchTextDirection: dart.finalFieldType(core.bool),
    scale: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(decoration_image.DecorationImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(decoration_image.DecorationImage, ['hashCode']);
  var _imageStream = dart.privateName(decoration_image, "_imageStream");
  var _image = dart.privateName(decoration_image, "_image");
  var _details$ = dart.privateName(decoration_image, "_details");
  var _onChanged$ = dart.privateName(decoration_image, "_onChanged");
  var _handleImage = dart.privateName(decoration_image, "_handleImage");
  decoration_image.DecorationImagePainter = class DecorationImagePainter extends core.Object {
    paint(canvas, rect, clipPath, configuration) {
      let t1, t1$;
      if (canvas == null) dart.nullFailed(L0, 231, 21, "canvas");
      if (rect == null) dart.nullFailed(L0, 231, 34, "rect");
      if (configuration == null) dart.nullFailed(L0, 231, 75, "configuration");
      if (!(canvas != null)) dart.assertFailed(null, L0, 232, 12, "canvas != null");
      if (!(rect != null)) dart.assertFailed(null, L0, 233, 12, "rect != null");
      if (!(configuration != null)) dart.assertFailed(null, L0, 234, 12, "configuration != null");
      let flipHorizontally = false;
      if (dart.test(this[_details$].matchTextDirection)) {
        if (!dart.test(dart.fn(() => {
          if (configuration.textDirection == null) {
            dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("DecorationImage.matchTextDirection can only be used when a TextDirection is available."), new assertions.ErrorDescription.new("When DecorationImagePainter.paint() was called, there was no text direction provided " + "in the ImageConfiguration object to match."), new (DiagnosticsPropertyOfDecorationImage()).new("The DecorationImage was", this[_details$], {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new (DiagnosticsPropertyOfImageConfiguration()).new("The ImageConfiguration was", configuration, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 238, 14, "() {\n        // We check this first so that the assert will fire immediately, not just\n        // when the image is ready.\n        if (configuration.textDirection == null) {\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('DecorationImage.matchTextDirection can only be used when a TextDirection is available.'),\n            ErrorDescription(\n              'When DecorationImagePainter.paint() was called, there was no text direction provided '\n              'in the ImageConfiguration object to match.'\n            ),\n            DiagnosticsProperty<DecorationImage>('The DecorationImage was', _details, style: DiagnosticsTreeStyle.errorProperty),\n            DiagnosticsProperty<ImageConfiguration>('The ImageConfiguration was', configuration, style: DiagnosticsTreeStyle.errorProperty),\n          ]);\n        }\n        return true;\n      }()");
        if (dart.equals(configuration.textDirection, ui.TextDirection.rtl)) flipHorizontally = true;
      }
      let newImageStream = this[_details$].image.resolve(configuration);
      if (!dart.equals(newImageStream.key, (t1 = this[_imageStream], t1 == null ? null : t1.key))) {
        let listener = new image_stream.ImageStreamListener.new(dart.bind(this, _handleImage), {onError: this[_details$].onError});
        t1$ = this[_imageStream];
        t1$ == null ? null : t1$.removeListener(listener);
        this[_imageStream] = newImageStream;
        dart.nullCheck(this[_imageStream]).addListener(listener);
      }
      if (this[_image] == null) return;
      if (clipPath != null) {
        canvas.save();
        canvas.clipPath(clipPath);
      }
      decoration_image.paintImage({canvas: canvas, rect: rect, image: dart.nullCheck(this[_image]).image, debugImageLabel: dart.nullCheck(this[_image]).debugLabel, scale: dart.notNull(this[_details$].scale) * dart.notNull(dart.nullCheck(this[_image]).scale), colorFilter: this[_details$].colorFilter, fit: this[_details$].fit, alignment: this[_details$].alignment.resolve(configuration.textDirection), centerSlice: this[_details$].centerSlice, repeat: this[_details$].repeat, flipHorizontally: flipHorizontally, filterQuality: ui.FilterQuality.low});
      if (clipPath != null) canvas.restore();
    }
    [_handleImage](value, synchronousCall) {
      let t1;
      if (value == null) dart.nullFailed(L0, 295, 31, "value");
      if (synchronousCall == null) dart.nullFailed(L0, 295, 43, "synchronousCall");
      if (dart.equals(this[_image], value)) return;
      if (this[_image] != null && dart.test(dart.nullCheck(this[_image]).isCloneOf(value))) {
        value.dispose();
        return;
      }
      t1 = this[_image];
      t1 == null ? null : t1.dispose();
      this[_image] = value;
      if (!(this[_onChanged$] != null)) dart.assertFailed(null, L0, 304, 12, "_onChanged != null");
      if (!dart.test(synchronousCall)) this[_onChanged$]();
    }
    dispose() {
      let t1, t1$;
      t1 = this[_imageStream];
      t1 == null ? null : t1.removeListener(new image_stream.ImageStreamListener.new(dart.bind(this, _handleImage), {onError: this[_details$].onError}));
      t1$ = this[_image];
      t1$ == null ? null : t1$.dispose();
      this[_image] = null;
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "DecorationImagePainter")) + "(stream: " + dart.str(this[_imageStream]) + ", image: " + dart.str(this[_image]) + ") for " + dart.str(this[_details$]);
    }
  };
  (decoration_image.DecorationImagePainter.__ = function(_details, _onChanged) {
    if (_details == null) dart.nullFailed(L0, 209, 33, "_details");
    if (_onChanged == null) dart.nullFailed(L0, 209, 48, "_onChanged");
    this[_imageStream] = null;
    this[_image] = null;
    this[_details$] = _details;
    this[_onChanged$] = _onChanged;
    if (!(_details != null)) dart.assertFailed(null, L0, 209, 69, "_details != null");
    ;
  }).prototype = decoration_image.DecorationImagePainter.prototype;
  dart.addTypeTests(decoration_image.DecorationImagePainter);
  dart.addTypeCaches(decoration_image.DecorationImagePainter);
  dart.setMethodSignature(decoration_image.DecorationImagePainter, () => ({
    __proto__: dart.getMethods(decoration_image.DecorationImagePainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect, dart.nullable(ui.Path), image_provider.ImageConfiguration]),
    [_handleImage]: dart.fnType(dart.void, [image_stream.ImageInfo, core.bool]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(decoration_image.DecorationImagePainter, L1);
  dart.setFieldSignature(decoration_image.DecorationImagePainter, () => ({
    __proto__: dart.getFields(decoration_image.DecorationImagePainter.__proto__),
    [_details$]: dart.finalFieldType(decoration_image.DecorationImage),
    [_onChanged$]: dart.finalFieldType(dart.fnType(dart.void, [])),
    [_imageStream]: dart.fieldType(dart.nullable(image_stream.ImageStream)),
    [_image]: dart.fieldType(dart.nullable(image_stream.ImageInfo))
  }));
  dart.defineExtensionMethods(decoration_image.DecorationImagePainter, ['toString']);
  var _name = dart.privateName(ui, "_name");
  var C6;
  var C8;
  var _CkMatrixColorFilter_matrix = dart.privateName(_engine, "_CkMatrixColorFilter.matrix");
  var C7;
  decoration_image.debugFlushLastFrameImageSizeInfo = function debugFlushLastFrameImageSizeInfo() {
    if (!dart.test(dart.fn(() => {
      decoration_image._lastFrameImageSizeInfo = LinkedHashSetOfImageSizeInfo().new();
      return true;
    }, VoidTobool())())) dart.assertFailed(null, L0, 343, 10, "() {\n    _lastFrameImageSizeInfo = <ImageSizeInfo>{};\n    return true;\n  }()");
  };
  decoration_image.paintImage = function paintImage(opts) {
    let t1, t1$, t1$0, t1$1;
    let canvas = opts && 'canvas' in opts ? opts.canvas : null;
    if (canvas == null) dart.nullFailed(L0, 418, 19, "canvas");
    let rect = opts && 'rect' in opts ? opts.rect : null;
    if (rect == null) dart.nullFailed(L0, 419, 17, "rect");
    let image = opts && 'image' in opts ? opts.image : null;
    if (image == null) dart.nullFailed(L0, 420, 21, "image");
    let debugImageLabel = opts && 'debugImageLabel' in opts ? opts.debugImageLabel : null;
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    if (scale == null) dart.nullFailed(L0, 422, 10, "scale");
    let colorFilter = opts && 'colorFilter' in opts ? opts.colorFilter : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C5 || CT.C5;
    if (alignment == null) dart.nullFailed(L0, 425, 13, "alignment");
    let centerSlice = opts && 'centerSlice' in opts ? opts.centerSlice : null;
    let repeat = opts && 'repeat' in opts ? opts.repeat : C3 || CT.C3;
    if (repeat == null) dart.nullFailed(L0, 427, 15, "repeat");
    let flipHorizontally = opts && 'flipHorizontally' in opts ? opts.flipHorizontally : false;
    if (flipHorizontally == null) dart.nullFailed(L0, 428, 8, "flipHorizontally");
    let invertColors = opts && 'invertColors' in opts ? opts.invertColors : false;
    if (invertColors == null) dart.nullFailed(L0, 429, 8, "invertColors");
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C6 || CT.C6;
    if (filterQuality == null) dart.nullFailed(L0, 430, 17, "filterQuality");
    let isAntiAlias = opts && 'isAntiAlias' in opts ? opts.isAntiAlias : false;
    if (isAntiAlias == null) dart.nullFailed(L0, 431, 8, "isAntiAlias");
    if (!(canvas != null)) dart.assertFailed(null, L0, 433, 10, "canvas != null");
    if (!(image != null)) dart.assertFailed(null, L0, 434, 10, "image != null");
    if (!(alignment != null)) dart.assertFailed(null, L0, 435, 10, "alignment != null");
    if (!(repeat != null)) dart.assertFailed(null, L0, 436, 10, "repeat != null");
    if (!(flipHorizontally != null)) dart.assertFailed(null, L0, 437, 10, "flipHorizontally != null");
    if (!(isAntiAlias != null)) dart.assertFailed(null, L0, 438, 10, "isAntiAlias != null");
    if (!dart.test((t1$ = (t1 = image.debugGetOpenHandleStackTraces(), t1 == null ? null : t1[$isNotEmpty]), t1$ == null ? true : t1$))) dart.assertFailed("Cannot paint an image that is disposed.\n" + "The caller of paintImage is expected to wait to dispose the image until " + "after painting has completed.", L0, 440, 5, "image.debugGetOpenHandleStackTraces()?.isNotEmpty ?? true");
    if (dart.test(rect.isEmpty)) return;
    let outputSize = rect.size;
    let inputSize = new ui.Size.new(image.width[$toDouble](), image.height[$toDouble]());
    let sliceBorder = null;
    if (centerSlice != null) {
      sliceBorder = ui.Offset.as(inputSize['/'](scale)['-'](centerSlice.size));
      outputSize = ui.Size.as(outputSize['-'](sliceBorder));
      inputSize = ui.Size.as(inputSize['-'](sliceBorder['*'](scale)));
    }
    fit == null ? fit = centerSlice == null ? box_fit.BoxFit.scaleDown : box_fit.BoxFit.fill : null;
    if (!(centerSlice == null || !dart.equals(fit, box_fit.BoxFit.none) && !dart.equals(fit, box_fit.BoxFit.cover))) dart.assertFailed(null, L0, 456, 10, "centerSlice == null || (fit != BoxFit.none && fit != BoxFit.cover)");
    let fittedSizes = box_fit.applyBoxFit(fit, inputSize['/'](scale), outputSize);
    let sourceSize = fittedSizes.source['*'](scale);
    let destinationSize = fittedSizes.destination;
    if (centerSlice != null) {
      outputSize = outputSize['+'](dart.nullCheck(sliceBorder));
      destinationSize = destinationSize['+'](sliceBorder);
      if (!dart.equals(sourceSize, inputSize)) dart.assertFailed("centerSlice was used with a BoxFit that does not guarantee that the image is fully visible.", L0, 465, 12, "sourceSize == inputSize");
    }
    if (!dart.equals(repeat, decoration_image.ImageRepeat.noRepeat) && dart.equals(destinationSize, outputSize)) {
      repeat = decoration_image.ImageRepeat.noRepeat;
    }
    let paint = (t1$0 = ui.Paint.new(), (() => {
      t1$0.isAntiAlias = isAntiAlias;
      return t1$0;
    })());
    if (colorFilter != null) paint.colorFilter = colorFilter;
    if (!dart.equals(sourceSize, destinationSize)) {
      paint.filterQuality = filterQuality;
    }
    paint.invertColors = invertColors;
    let halfWidthDelta = (dart.notNull(outputSize.width) - dart.notNull(destinationSize.width)) / 2.0;
    let halfHeightDelta = (dart.notNull(outputSize.height) - dart.notNull(destinationSize.height)) / 2.0;
    let dx = halfWidthDelta + dart.notNull(dart.test(flipHorizontally) ? -dart.notNull(alignment.x) : alignment.x) * halfWidthDelta;
    let dy = halfHeightDelta + dart.notNull(alignment.y) * halfHeightDelta;
    let destinationPosition = rect.topLeft.translate(dx, dy);
    let destinationRect = destinationPosition['&'](destinationSize);
    let invertedCanvas = false;
    if (!false) {
      let sizeInfo = new debug.ImageSizeInfo.new({source: (t1$1 = debugImageLabel, t1$1 == null ? "<Unknown Image(" + dart.str(image.width) + "×" + dart.str(image.height) + ")>" : t1$1), imageSize: new ui.Size.new(image.width[$toDouble](), image.height[$toDouble]()), displaySize: outputSize});
      if (!dart.test(dart.fn(() => {
        let t1;
        if (dart.test(debug.debugInvertOversizedImages) && dart.notNull(sizeInfo.decodedSizeInBytes) > dart.notNull(sizeInfo.displaySizeInBytes) + dart.notNull(debug.debugImageOverheadAllowance)) {
          let overheadInKilobytes = ((dart.notNull(sizeInfo.decodedSizeInBytes) - dart.notNull(sizeInfo.displaySizeInBytes)) / 1024)[$truncate]();
          let outputWidth = outputSize.width[$toInt]();
          let outputHeight = outputSize.height[$toInt]();
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: "Image " + dart.str(debugImageLabel) + " has a display size of " + dart.str(outputWidth) + "×" + dart.str(outputHeight) + " but a decode size of " + dart.str(image.width) + "×" + dart.str(image.height) + ", which uses an additional " + dart.str(overheadInKilobytes) + "kb.\n\n" + "Consider resizing the asset ahead of time, supplying a cacheWidth " + "parameter of " + dart.str(outputWidth) + ", a cacheHeight parameter of " + dart.str(outputHeight) + ", or using a ResizeImage.", library: "painting library", context: new assertions.ErrorDescription.new("while painting an image")}));
          canvas.saveLayer(destinationRect, (t1 = ui.Paint.new(), (() => {
            t1.colorFilter = C7 || CT.C7;
            return t1;
          })()));
          let dy = -(dart.notNull(rect.top) + dart.notNull(rect.height) / 2.0);
          canvas.translate(0.0, -dy);
          canvas.scale(1.0, -1.0);
          canvas.translate(0.0, dy);
          invertedCanvas = true;
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 497, 12, "() {\n      if (debugInvertOversizedImages &&\n          sizeInfo.decodedSizeInBytes > sizeInfo.displaySizeInBytes + debugImageOverheadAllowance) {\n        final int overheadInKilobytes = (sizeInfo.decodedSizeInBytes - sizeInfo.displaySizeInBytes) ~/ 1024;\n        final int outputWidth = outputSize.width.toInt();\n        final int outputHeight = outputSize.height.toInt();\n        FlutterError.reportError(FlutterErrorDetails(\n          exception: 'Image $debugImageLabel has a display size of '\n            '$outputWidth×$outputHeight but a decode size of '\n            '${image.width}×${image.height}, which uses an additional '\n            '${overheadInKilobytes}kb.\\n\\n'\n            'Consider resizing the asset ahead of time, supplying a cacheWidth '\n            'parameter of $outputWidth, a cacheHeight parameter of '\n            '$outputHeight, or using a ResizeImage.',\n          library: 'painting library',\n          context: ErrorDescription('while painting an image'),\n        ));\n        // Invert the colors of the canvas.\n        canvas.saveLayer(\n          destinationRect,\n          Paint()..colorFilter = const ColorFilter.matrix(<double>[\n            -1,  0,  0, 0, 255,\n             0, -1,  0, 0, 255,\n             0,  0, -1, 0, 255,\n             0,  0,  0, 1,   0,\n          ]),\n        );\n        // Flip the canvas vertically.\n        final double dy = -(rect.top + rect.height / 2.0);\n        canvas.translate(0.0, -dy);\n        canvas.scale(1.0, -1.0);\n        canvas.translate(0.0, dy);\n        invertedCanvas = true;\n      }\n      return true;\n    }()");
      if (!dart.test(decoration_image._lastFrameImageSizeInfo.contains(sizeInfo))) {
        let existingSizeInfo = decoration_image._pendingImageSizeInfo[$_get](sizeInfo.source);
        if (existingSizeInfo == null || dart.notNull(existingSizeInfo.displaySizeInBytes) < dart.notNull(sizeInfo.displaySizeInBytes)) {
          decoration_image._pendingImageSizeInfo[$_set](dart.nullCheck(sizeInfo.source), sizeInfo);
        }
        if (debug.debugOnPaintImage != null) {
          dart.nullCheck(debug.debugOnPaintImage)(sizeInfo);
        }
        dart.nullCheck(binding.SchedulerBinding.instance).addPostFrameCallback(dart.fn(timeStamp => {
          if (timeStamp == null) dart.nullFailed(L0, 542, 65, "timeStamp");
          decoration_image._lastFrameImageSizeInfo = decoration_image._pendingImageSizeInfo[$values][$toSet]();
          if (dart.test(decoration_image._pendingImageSizeInfo[$isEmpty])) {
            return;
          }
          developer.postEvent("Flutter.ImageSizesForFrame", (() => {
            let t1 = new (IdentityMapOfString$Object()).new();
            for (let imageSizeInfo of decoration_image._pendingImageSizeInfo[$values])
              t1[$_set](dart.nullCheck(imageSizeInfo.source), imageSizeInfo.toJson());
            return t1;
          })());
          decoration_image._pendingImageSizeInfo = new (IdentityMapOfString$ImageSizeInfo()).new();
        }, DurationTovoid()));
      }
    }
    let needSave = centerSlice != null || !dart.equals(repeat, decoration_image.ImageRepeat.noRepeat) || dart.test(flipHorizontally);
    if (needSave) canvas.save();
    if (!dart.equals(repeat, decoration_image.ImageRepeat.noRepeat)) canvas.clipRect(rect);
    if (dart.test(flipHorizontally)) {
      let dx = -(dart.notNull(rect.left) + dart.notNull(rect.width) / 2.0);
      canvas.translate(-dx, 0.0);
      canvas.scale(-1.0, 1.0);
      canvas.translate(dx, 0.0);
    }
    if (centerSlice == null) {
      let sourceRect = alignment.inscribe(sourceSize, ui.Offset.zero['&'](inputSize));
      if (dart.equals(repeat, decoration_image.ImageRepeat.noRepeat)) {
        canvas.drawImageRect(image, sourceRect, destinationRect, paint);
      } else {
        for (let tileRect of decoration_image._generateImageTileRects(rect, destinationRect, repeat))
          canvas.drawImageRect(image, sourceRect, tileRect, paint);
      }
    } else {
      canvas.scale(1 / dart.notNull(scale));
      if (dart.equals(repeat, decoration_image.ImageRepeat.noRepeat)) {
        canvas.drawImageNine(image, decoration_image._scaleRect(centerSlice, scale), decoration_image._scaleRect(destinationRect, scale), paint);
      } else {
        for (let tileRect of decoration_image._generateImageTileRects(rect, destinationRect, repeat))
          canvas.drawImageNine(image, decoration_image._scaleRect(centerSlice, scale), decoration_image._scaleRect(tileRect, scale), paint);
      }
    }
    if (needSave) canvas.restore();
    if (invertedCanvas) {
      canvas.restore();
    }
  };
  decoration_image._generateImageTileRects = function _generateImageTileRects(outputRect, fundamentalRect, repeat) {
    if (outputRect == null) dart.nullFailed(L0, 597, 45, "outputRect");
    if (fundamentalRect == null) dart.nullFailed(L0, 597, 62, "fundamentalRect");
    if (repeat == null) dart.nullFailed(L0, 597, 91, "repeat");
    return new (SyncIterableOfRect()).new(function* _generateImageTileRects() {
      let startX = 0;
      let startY = 0;
      let stopX = 0;
      let stopY = 0;
      let strideX = fundamentalRect.width;
      let strideY = fundamentalRect.height;
      if (dart.equals(repeat, decoration_image.ImageRepeat.repeat) || dart.equals(repeat, decoration_image.ImageRepeat.repeatX)) {
        startX = ((dart.notNull(outputRect.left) - dart.notNull(fundamentalRect.left)) / dart.notNull(strideX))[$floor]();
        stopX = ((dart.notNull(outputRect.right) - dart.notNull(fundamentalRect.right)) / dart.notNull(strideX))[$ceil]();
      }
      if (dart.equals(repeat, decoration_image.ImageRepeat.repeat) || dart.equals(repeat, decoration_image.ImageRepeat.repeatY)) {
        startY = ((dart.notNull(outputRect.top) - dart.notNull(fundamentalRect.top)) / dart.notNull(strideY))[$floor]();
        stopY = ((dart.notNull(outputRect.bottom) - dart.notNull(fundamentalRect.bottom)) / dart.notNull(strideY))[$ceil]();
      }
      for (let i = startX; i <= stopX; i = i + 1) {
        for (let j = startY; j <= stopY; j = j + 1)
          yield fundamentalRect.shift(new ui.Offset.new(i * dart.notNull(strideX), j * dart.notNull(strideY)));
      }
    });
  };
  decoration_image._scaleRect = function _scaleRect(rect, scale) {
    if (rect == null) dart.nullFailed(L0, 621, 22, "rect");
    if (scale == null) dart.nullFailed(L0, 621, 35, "scale");
    return new ui.Rect.fromLTRB(dart.notNull(rect.left) * dart.notNull(scale), dart.notNull(rect.top) * dart.notNull(scale), dart.notNull(rect.right) * dart.notNull(scale), dart.notNull(rect.bottom) * dart.notNull(scale));
  };
  dart.defineLazy(decoration_image, {
    /*decoration_image._pendingImageSizeInfo*/get _pendingImageSizeInfo() {
      return new (IdentityMapOfString$ImageSizeInfo()).new();
    },
    set _pendingImageSizeInfo(_) {},
    /*decoration_image._lastFrameImageSizeInfo*/get _lastFrameImageSizeInfo() {
      return LinkedHashSetOfImageSizeInfo().new();
    },
    set _lastFrameImageSizeInfo(_) {}
  }, false);
  dart.trackLibraries("packages/flutter/src/painting/decoration_image.dart", {
    "package:flutter/src/painting/decoration_image.dart": decoration_image
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["decoration_image.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/decoration_image.dart.lib.js"}');
  // Exports:
  return {
    src__painting__decoration_image: decoration_image
  };
}));

//# sourceMappingURL=decoration_image.dart.lib.js.map
