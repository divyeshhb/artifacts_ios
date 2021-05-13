define(['dart_sdk', 'packages/flutter/src/painting/edge_insets.dart', 'packages/qr_flutter/src/qr_versions.dart', 'packages/flutter/src/widgets/widget_span.dart', 'packages/qr/src/qr_code.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/qr_flutter/src/types.dart', 'packages/qr_flutter/src/validator.dart', 'packages/flutter/src/widgets/layout_builder.dart', 'packages/flutter/src/widgets/async.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/qr_flutter/src/qr_painter.dart', 'packages/flutter/src/painting/image_stream.dart'], (function load__packages__qr_flutter__src__qr_image_dart(dart_sdk, packages__flutter__src__painting__edge_insets$46dart, packages__qr_flutter__src__qr_versions$46dart, packages__flutter__src__widgets__widget_span$46dart, packages__qr__src__qr_code$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__qr_flutter__src__types$46dart, packages__qr_flutter__src__validator$46dart, packages__flutter__src__widgets__layout_builder$46dart, packages__flutter__src__widgets__async$46dart, packages__flutter__src__rendering__layer$46dart, packages__qr_flutter__src__qr_painter$46dart, packages__flutter__src__painting__image_stream$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const qr_versions = packages__qr_flutter__src__qr_versions$46dart.src__qr_versions;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const container = packages__flutter__src__widgets__widget_span$46dart.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const media_query = packages__flutter__src__widgets__widget_span$46dart.src__widgets__media_query;
  const qr_code = packages__qr__src__qr_code$46dart.src__qr_code;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  const types = packages__qr_flutter__src__types$46dart.src__types;
  const validator = packages__qr_flutter__src__validator$46dart.src__validator;
  const layout_builder = packages__flutter__src__widgets__layout_builder$46dart.src__widgets__layout_builder;
  const async$ = packages__flutter__src__widgets__async$46dart.src__widgets__async;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const qr_painter = packages__qr_flutter__src__qr_painter$46dart.src__qr_painter;
  const image_stream = packages__flutter__src__painting__image_stream$46dart.src__painting__image_stream;
  var qr_image = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var ImageL = () => (ImageL = dart.constFn(dart.legacy(ui.Image)))();
  var FutureBuilderOfImageL = () => (FutureBuilderOfImageL = dart.constFn(async$.FutureBuilder$(ImageL())))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(framework.Widget)))();
  var BuildContextL = () => (BuildContextL = dart.constFn(dart.legacy(framework.BuildContext)))();
  var AsyncSnapshotL = () => (AsyncSnapshotL = dart.constFn(dart.legacy(async$.AsyncSnapshot)))();
  var BuildContextLAndAsyncSnapshotLToWidgetL = () => (BuildContextLAndAsyncSnapshotLToWidgetL = dart.constFn(dart.fnType(WidgetL(), [BuildContextL(), AsyncSnapshotL()])))();
  var BoxConstraintsL = () => (BoxConstraintsL = dart.constFn(dart.legacy(box.BoxConstraints)))();
  var BuildContextLAndBoxConstraintsLToWidgetL = () => (BuildContextLAndBoxConstraintsLToWidgetL = dart.constFn(dart.fnType(WidgetL(), [BuildContextL(), BoxConstraintsL()])))();
  var CompleterOfImageL = () => (CompleterOfImageL = dart.constFn(async.Completer$(ImageL())))();
  var ImageInfoL = () => (ImageInfoL = dart.constFn(dart.legacy(image_stream.ImageInfo)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var ImageInfoLAndboolLToNull = () => (ImageInfoLAndboolLToNull = dart.constFn(dart.fnType(core.Null, [ImageInfoL(), boolL()])))();
  var StackTraceL = () => (StackTraceL = dart.constFn(dart.legacy(core.StackTrace)))();
  var dynamicAndStackTraceLToNull = () => (dynamicAndStackTraceLToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, StackTraceL()])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-3.2.0/lib/src/qr_image.dart";
  var L1 = "package:qr_flutter/src/qr_image.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 10
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 16777215
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C4() {
      return C4 = dart.constList([], _LocationL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 174,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-3.2.0/lib/src/qr_image.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 11,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 11,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], _LocationL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 158,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-3.2.0/lib/src/qr_image.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 26,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], _LocationL());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 148,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-3.2.0/lib/src/qr_image.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 26,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], _LocationL());
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 196,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-3.2.0/lib/src/qr_image.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "edgeLength",
        [_Location_column]: 7,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], _LocationL());
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 192,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-3.2.0/lib/src/qr_image.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 203,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-3.2.0/lib/src/qr_image.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 55,
        [_Location_line]: 204,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-3.2.0/lib/src/qr_image.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "edgeLength",
        [_Location_column]: 7,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28], _LocationL());
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 208,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-3.2.0/lib/src/qr_image.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 268,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 269,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32], _LocationL());
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 267,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-3.2.0/lib/src/qr_image.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 264,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 266,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 267,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38], _LocationL());
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 263,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-3.2.0/lib/src/qr_image.dart"
      });
    }
  }, false);
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C0;
  var Color_value = dart.privateName(ui, "Color.value");
  var C1;
  var C2;
  var _data = dart.privateName(qr_image, "_data");
  var _qrCode = dart.privateName(qr_image, "_qrCode");
  var backgroundColor$ = dart.privateName(qr_image, "QrImage.backgroundColor");
  var foregroundColor$ = dart.privateName(qr_image, "QrImage.foregroundColor");
  var version$ = dart.privateName(qr_image, "QrImage.version");
  var errorCorrectionLevel$ = dart.privateName(qr_image, "QrImage.errorCorrectionLevel");
  var padding$ = dart.privateName(qr_image, "QrImage.padding");
  var size$ = dart.privateName(qr_image, "QrImage.size");
  var errorStateBuilder$ = dart.privateName(qr_image, "QrImage.errorStateBuilder");
  var constrainErrorBounds$ = dart.privateName(qr_image, "QrImage.constrainErrorBounds");
  var gapless$ = dart.privateName(qr_image, "QrImage.gapless");
  var embeddedImage$ = dart.privateName(qr_image, "QrImage.embeddedImage");
  var embeddedImageStyle$ = dart.privateName(qr_image, "QrImage.embeddedImageStyle");
  var embeddedImageEmitsError$ = dart.privateName(qr_image, "QrImage.embeddedImageEmitsError");
  qr_image.QrImage = class QrImage extends framework.StatefulWidget {
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get foregroundColor() {
      return this[foregroundColor$];
    }
    set foregroundColor(value) {
      super.foregroundColor = value;
    }
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
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get errorStateBuilder() {
      return this[errorStateBuilder$];
    }
    set errorStateBuilder(value) {
      super.errorStateBuilder = value;
    }
    get constrainErrorBounds() {
      return this[constrainErrorBounds$];
    }
    set constrainErrorBounds(value) {
      super.constrainErrorBounds = value;
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
    get embeddedImageEmitsError() {
      return this[embeddedImageEmitsError$];
    }
    set embeddedImageEmitsError(value) {
      super.embeddedImageEmitsError = value;
    }
    createState() {
      return new qr_image._QrImageState.new();
    }
  };
  (qr_image.QrImage.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let padding = opts && 'padding' in opts ? opts.padding : C0 || CT.C0;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C1 || CT.C1;
    let foregroundColor = opts && 'foregroundColor' in opts ? opts.foregroundColor : C2 || CT.C2;
    let version = opts && 'version' in opts ? opts.version : -1;
    let errorCorrectionLevel = opts && 'errorCorrectionLevel' in opts ? opts.errorCorrectionLevel : 1;
    let errorStateBuilder = opts && 'errorStateBuilder' in opts ? opts.errorStateBuilder : null;
    let constrainErrorBounds = opts && 'constrainErrorBounds' in opts ? opts.constrainErrorBounds : true;
    let gapless = opts && 'gapless' in opts ? opts.gapless : true;
    let embeddedImage = opts && 'embeddedImage' in opts ? opts.embeddedImage : null;
    let embeddedImageStyle = opts && 'embeddedImageStyle' in opts ? opts.embeddedImageStyle : null;
    let embeddedImageEmitsError = opts && 'embeddedImageEmitsError' in opts ? opts.embeddedImageEmitsError : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[size$] = size;
    this[padding$] = padding;
    this[backgroundColor$] = backgroundColor;
    this[foregroundColor$] = foregroundColor;
    this[version$] = version;
    this[errorCorrectionLevel$] = errorCorrectionLevel;
    this[errorStateBuilder$] = errorStateBuilder;
    this[constrainErrorBounds$] = constrainErrorBounds;
    this[gapless$] = gapless;
    this[embeddedImage$] = embeddedImage;
    this[embeddedImageStyle$] = embeddedImageStyle;
    this[embeddedImageEmitsError$] = embeddedImageEmitsError;
    if (!dart.test(qr_versions.QrVersions.isSupportedVersion(version))) dart.assertFailed(null, L0, 38, 16, "QrVersions.isSupportedVersion(version)");
    this[_data] = data;
    this[_qrCode] = null;
    qr_image.QrImage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = qr_image.QrImage.prototype;
  (qr_image.QrImage.withQr = function(opts) {
    let qr = opts && 'qr' in opts ? opts.qr : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let padding = opts && 'padding' in opts ? opts.padding : C0 || CT.C0;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C1 || CT.C1;
    let foregroundColor = opts && 'foregroundColor' in opts ? opts.foregroundColor : C2 || CT.C2;
    let version = opts && 'version' in opts ? opts.version : -1;
    let errorCorrectionLevel = opts && 'errorCorrectionLevel' in opts ? opts.errorCorrectionLevel : 1;
    let errorStateBuilder = opts && 'errorStateBuilder' in opts ? opts.errorStateBuilder : null;
    let constrainErrorBounds = opts && 'constrainErrorBounds' in opts ? opts.constrainErrorBounds : true;
    let gapless = opts && 'gapless' in opts ? opts.gapless : true;
    let embeddedImage = opts && 'embeddedImage' in opts ? opts.embeddedImage : null;
    let embeddedImageStyle = opts && 'embeddedImageStyle' in opts ? opts.embeddedImageStyle : null;
    let embeddedImageEmitsError = opts && 'embeddedImageEmitsError' in opts ? opts.embeddedImageEmitsError : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[size$] = size;
    this[padding$] = padding;
    this[backgroundColor$] = backgroundColor;
    this[foregroundColor$] = foregroundColor;
    this[version$] = version;
    this[errorCorrectionLevel$] = errorCorrectionLevel;
    this[errorStateBuilder$] = errorStateBuilder;
    this[constrainErrorBounds$] = constrainErrorBounds;
    this[gapless$] = gapless;
    this[embeddedImage$] = embeddedImage;
    this[embeddedImageStyle$] = embeddedImageStyle;
    this[embeddedImageEmitsError$] = embeddedImageEmitsError;
    if (!dart.test(qr_versions.QrVersions.isSupportedVersion(version))) dart.assertFailed(null, L0, 60, 16, "QrVersions.isSupportedVersion(version)");
    this[_data] = null;
    this[_qrCode] = qr;
    qr_image.QrImage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = qr_image.QrImage.prototype;
  dart.addTypeTests(qr_image.QrImage);
  dart.addTypeCaches(qr_image.QrImage);
  dart.setMethodSignature(qr_image.QrImage, () => ({
    __proto__: dart.getMethods(qr_image.QrImage.__proto__),
    createState: dart.fnType(dart.legacy(qr_image._QrImageState), [])
  }));
  dart.setLibraryUri(qr_image.QrImage, L1);
  dart.setFieldSignature(qr_image.QrImage, () => ({
    __proto__: dart.getFields(qr_image.QrImage.__proto__),
    [_data]: dart.finalFieldType(dart.legacy(core.String)),
    [_qrCode]: dart.finalFieldType(dart.legacy(qr_code.QrCode)),
    backgroundColor: dart.finalFieldType(dart.legacy(ui.Color)),
    foregroundColor: dart.finalFieldType(dart.legacy(ui.Color)),
    version: dart.finalFieldType(dart.legacy(core.int)),
    errorCorrectionLevel: dart.finalFieldType(dart.legacy(core.int)),
    padding: dart.finalFieldType(dart.legacy(edge_insets.EdgeInsets)),
    size: dart.finalFieldType(dart.legacy(core.double)),
    errorStateBuilder: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext), dart.legacy(core.Object)]))),
    constrainErrorBounds: dart.finalFieldType(dart.legacy(core.bool)),
    gapless: dart.finalFieldType(dart.legacy(core.bool)),
    embeddedImage: dart.finalFieldType(dart.legacy(image_provider.ImageProvider$(core.Object))),
    embeddedImageStyle: dart.finalFieldType(dart.legacy(types.QrEmbeddedImageStyle)),
    embeddedImageEmitsError: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var _qr = dart.privateName(qr_image, "_qr");
  var _validationResult = dart.privateName(qr_image, "_validationResult");
  var _errorWidget = dart.privateName(qr_image, "_errorWidget");
  var _loadQrImage = dart.privateName(qr_image, "_loadQrImage");
  var _qrWidget = dart.privateName(qr_image, "_qrWidget");
  var C4;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C3;
  var C7;
  var C8;
  var C6;
  var C5;
  var C11;
  var C10;
  var C9;
  var C14;
  var C13;
  var C12;
  var C17;
  var C18;
  var C19;
  var C20;
  var C16;
  var C15;
  var C21;
  var C22;
  var C25;
  var C26;
  var C27;
  var C28;
  var C24;
  var C23;
  qr_image._QrImageState = class _QrImageState extends framework.State$(dart.legacy(qr_image.QrImage)) {
    build(context) {
      if (this.widget[_data] != null) {
        this[_validationResult] = validator.QrValidator.validate({data: this.widget[_data], version: this.widget.version, errorCorrectionLevel: this.widget.errorCorrectionLevel});
        if (dart.test(this[_validationResult].isValid)) {
          this[_qr] = this[_validationResult].qrCode;
        } else {
          this[_qr] = null;
        }
      } else if (this.widget[_qrCode] != null) {
        this[_qr] = this.widget[_qrCode];
        this[_validationResult] = new validator.QrValidationResult.new({status: validator.QrValidationStatus.valid, qrCode: this[_qr]});
      }
      return new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
          let t0;
          if (!dart.test(this[_validationResult].isValid)) {
            return this[_errorWidget](context, constraints, this[_validationResult].error);
          }
          let widgetSize = (t0 = this.widget.size, t0 == null ? constraints.biggest.shortestSide : t0);
          if (this.widget.embeddedImage != null) {
            return new (FutureBuilderOfImageL()).new({future: this[_loadQrImage](context, this.widget.embeddedImageStyle), builder: dart.fn((ctx, snapshot) => {
                if (snapshot.error != null) {
                  core.print("snapshot error: " + dart.str(snapshot.error));
                  if (dart.test(this.widget.embeddedImageEmitsError)) {
                    return this[_errorWidget](context, constraints, snapshot.error);
                  } else {
                    return this[_qrWidget](context, null, widgetSize);
                  }
                }
                if (dart.test(snapshot.hasData)) {
                  core.print("loaded image");
                  let loadedImage = ImageL().as(snapshot.data);
                  return this[_qrWidget](context, loadedImage, widgetSize);
                } else {
                  return new container.Container.new({$creationLocationd_0dea112b090073317d4: C3 || CT.C3});
                }
              }, BuildContextLAndAsyncSnapshotLToWidgetL()), $creationLocationd_0dea112b090073317d4: C5 || CT.C5});
          } else {
            return this[_qrWidget](context, null, widgetSize);
          }
        }, BuildContextLAndBoxConstraintsLToWidgetL()), $creationLocationd_0dea112b090073317d4: C9 || CT.C9});
    }
    [_qrWidget](context, image, edgeLength) {
      let painter = new qr_painter.QrPainter.withQr({qr: this[_qr], color: this.widget.foregroundColor, gapless: this.widget.gapless, embeddedImageStyle: this.widget.embeddedImageStyle, embeddedImage: image});
      return new qr_image._QrContentView.new({edgeLength: edgeLength, backgroundColor: this.widget.backgroundColor, padding: this.widget.padding, child: new basic.CustomPaint.new({painter: painter, $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15});
    }
    [_errorWidget](context, constraints, error) {
      let t2, t1, t0, t0$, t0$0;
      let errorWidget = this.widget.errorStateBuilder == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C21 || CT.C21}) : (t0$ = (t0 = this.widget, t1 = context, t2 = error, t0.errorStateBuilder(t1, t2)), t0$ == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C22 || CT.C22}) : t0$);
      let errorSideLength = dart.test(this.widget.constrainErrorBounds) ? (t0$0 = this.widget.size, t0$0 == null ? constraints.biggest.shortestSide : t0$0) : constraints.biggest.longestSide;
      return new qr_image._QrContentView.new({edgeLength: errorSideLength, backgroundColor: this.widget.backgroundColor, padding: this.widget.padding, child: errorWidget, $creationLocationd_0dea112b090073317d4: C23 || CT.C23});
    }
    [_loadQrImage](buildContext, style) {
      return async.async(ImageL(), (function* _loadQrImage() {
        if (style != null) {
        }
        let mq = media_query.MediaQuery.of(buildContext);
        let completer = CompleterOfImageL().new();
        let stream = this.widget.embeddedImage.resolve(new image_provider.ImageConfiguration.new({devicePixelRatio: mq.devicePixelRatio}));
        this.streamListener = new image_stream.ImageStreamListener.new(dart.fn((info, err) => {
          stream.removeListener(this.streamListener);
          completer.complete(info.image);
        }, ImageInfoLAndboolLToNull()), {onError: dart.fn((err, _) => {
            stream.removeListener(this.streamListener);
            completer.completeError(err);
          }, dynamicAndStackTraceLToNull())});
        stream.addListener(this.streamListener);
        return completer.future;
      }).bind(this));
    }
  };
  (qr_image._QrImageState.new = function() {
    this[_qr] = null;
    this[_validationResult] = null;
    this.streamListener = null;
    qr_image._QrImageState.__proto__.new.call(this);
    ;
  }).prototype = qr_image._QrImageState.prototype;
  dart.addTypeTests(qr_image._QrImageState);
  dart.addTypeCaches(qr_image._QrImageState);
  dart.setMethodSignature(qr_image._QrImageState, () => ({
    __proto__: dart.getMethods(qr_image._QrImageState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_qrWidget]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext), dart.legacy(ui.Image), dart.legacy(core.double)]),
    [_errorWidget]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext), dart.legacy(box.BoxConstraints), dart.legacy(core.Object)]),
    [_loadQrImage]: dart.fnType(dart.legacy(async.Future$(dart.legacy(ui.Image))), [dart.legacy(framework.BuildContext), dart.legacy(types.QrEmbeddedImageStyle)])
  }));
  dart.setLibraryUri(qr_image._QrImageState, L1);
  dart.setFieldSignature(qr_image._QrImageState, () => ({
    __proto__: dart.getFields(qr_image._QrImageState.__proto__),
    [_qr]: dart.fieldType(dart.legacy(qr_code.QrCode)),
    [_validationResult]: dart.fieldType(dart.legacy(validator.QrValidationResult)),
    streamListener: dart.fieldType(dart.legacy(image_stream.ImageStreamListener))
  }));
  var C31;
  var C32;
  var C30;
  var C29;
  var C35;
  var C36;
  var C37;
  var C38;
  var C34;
  var C33;
  qr_image._QrContentView = class _QrContentView extends framework.StatelessWidget {
    build(context) {
      return new container.Container.new({width: this.edgeLength, height: this.edgeLength, color: this.backgroundColor, child: new basic.Padding.new({padding: this.padding, child: this.child, $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33});
    }
  };
  (qr_image._QrContentView.new = function(opts) {
    let edgeLength = opts && 'edgeLength' in opts ? opts.edgeLength : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.edgeLength = edgeLength;
    this.child = child;
    this.backgroundColor = backgroundColor;
    this.padding = padding;
    qr_image._QrContentView.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = qr_image._QrContentView.prototype;
  dart.addTypeTests(qr_image._QrContentView);
  dart.addTypeCaches(qr_image._QrContentView);
  dart.setMethodSignature(qr_image._QrContentView, () => ({
    __proto__: dart.getMethods(qr_image._QrContentView.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(qr_image._QrContentView, L1);
  dart.setFieldSignature(qr_image._QrContentView, () => ({
    __proto__: dart.getFields(qr_image._QrContentView.__proto__),
    edgeLength: dart.finalFieldType(dart.legacy(core.double)),
    backgroundColor: dart.finalFieldType(dart.legacy(ui.Color)),
    padding: dart.finalFieldType(dart.legacy(edge_insets.EdgeInsets)),
    child: dart.finalFieldType(dart.legacy(framework.Widget))
  }));
  dart.trackLibraries("packages/qr_flutter/src/qr_image.dart", {
    "package:qr_flutter/src/qr_image.dart": qr_image
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["qr_image.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/qr_flutter/src/qr_image.dart.lib.js"}');
  // Exports:
  return {
    src__qr_image: qr_image
  };
}));

//# sourceMappingURL=qr_image.dart.lib.js.map
