define(['dart_sdk', 'packages/flutter/src/foundation/synchronous_future.dart', 'packages/flutter/src/painting/image_stream.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/painting/image_cache.dart', 'packages/flutter/src/painting/binding.dart', 'packages/flutter/src/services/system_channels.dart', 'packages/flutter/src/foundation/_platform_web.dart'], (function load__packages__flutter__src__painting___network_image_web_dart(dart_sdk, packages__flutter__src__foundation__synchronous_future$46dart, packages__flutter__src__painting__image_stream$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__painting__image_cache$46dart, packages__flutter__src__painting__binding$46dart, packages__flutter__src__services__system_channels$46dart, packages__flutter__src__foundation___platform_web$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const typed_data = dart_sdk.typed_data;
  const io = dart_sdk.io;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const synchronous_future = packages__flutter__src__foundation__synchronous_future$46dart.src__foundation__synchronous_future;
  const image_stream = packages__flutter__src__painting__image_stream$46dart.src__painting__image_stream;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const image_cache = packages__flutter__src__painting__image_cache$46dart.src__painting__image_cache;
  const binding = packages__flutter__src__painting__binding$46dart.src__painting__binding;
  const asset_bundle = packages__flutter__src__services__system_channels$46dart.src__services__asset_bundle;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  var _network_image_web = Object.create(dart.library);
  var image_provider = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $buffer = dartx.buffer;
  var $asUint8List = dartx.asUint8List;
  var $lengthInBytes = dartx.lengthInBytes;
  var $hashCode = dartx.hashCode;
  dart._checkModuleNullSafetyMode(false);
  var SynchronousFutureOfNetworkImage = () => (SynchronousFutureOfNetworkImage = dart.constFn(synchronous_future.SynchronousFuture$(_network_image_web.NetworkImage)))();
  var StreamControllerOfImageChunkEvent = () => (StreamControllerOfImageChunkEvent = dart.constFn(async.StreamController$(image_stream.ImageChunkEvent)))();
  var ImageProviderOfObject = () => (ImageProviderOfObject = dart.constFn(image_provider.ImageProvider$(core.Object)))();
  var DiagnosticsPropertyOfImageProviderOfObject = () => (DiagnosticsPropertyOfImageProviderOfObject = dart.constFn(diagnostics.DiagnosticsProperty$(ImageProviderOfObject())))();
  var DiagnosticsPropertyOfNetworkImage = () => (DiagnosticsPropertyOfNetworkImage = dart.constFn(diagnostics.DiagnosticsProperty$(_network_image_web.NetworkImage)))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var ListOfDiagnosticsNode = () => (ListOfDiagnosticsNode = dart.constFn(core.List$(diagnostics.DiagnosticsNode)))();
  var VoidToListOfDiagnosticsNode = () => (VoidToListOfDiagnosticsNode = dart.constFn(dart.fnType(ListOfDiagnosticsNode(), [])))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var intAndintTovoid = () => (intAndintTovoid = dart.constFn(dart.fnType(dart.void, [core.int, core.int])))();
  var StackTraceN = () => (StackTraceN = dart.constFn(dart.nullable(core.StackTrace)))();
  var ObjectAndStackTraceNTovoid = () => (ObjectAndStackTraceNTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, StackTraceN()])))();
  var DiagnosticsPropertyOfImageConfiguration = () => (DiagnosticsPropertyOfImageConfiguration = dart.constFn(diagnostics.DiagnosticsProperty$(image_provider.ImageConfiguration)))();
  var SyncIterableOfDiagnosticsNode = () => (SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(diagnostics.DiagnosticsNode)))();
  var IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics.DiagnosticsNode)))();
  var VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var ImageCacheStatusN = () => (ImageCacheStatusN = dart.constFn(dart.nullable(image_cache.ImageCacheStatus)))();
  var CompleterOfImageCacheStatusN = () => (CompleterOfImageCacheStatusN = dart.constFn(async.Completer$(ImageCacheStatusN())))();
  var ObjectAndStackTraceNToFutureOfvoid = () => (ObjectAndStackTraceNToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [core.Object, StackTraceN()])))();
  var ZoneAndZoneDelegateAndZone__Tovoid = () => (ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.Object, core.StackTrace])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var VoidToImageStreamCompleter = () => (VoidToImageStreamCompleter = dart.constFn(dart.fnType(image_stream.ImageStreamCompleter, [])))();
  var DiagnosticsPropertyOfAssetBundleImageKey = () => (DiagnosticsPropertyOfAssetBundleImageKey = dart.constFn(diagnostics.DiagnosticsProperty$(image_provider.AssetBundleImageKey)))();
  var FutureOfCodec = () => (FutureOfCodec = dart.constFn(async.Future$(ui.Codec)))();
  var boolN = () => (boolN = dart.constFn(dart.nullable(core.bool)))();
  var intN = () => (intN = dart.constFn(dart.nullable(core.int)))();
  var Uint8List__ToFutureOfCodec = () => (Uint8List__ToFutureOfCodec = dart.constFn(dart.fnType(FutureOfCodec(), [typed_data.Uint8List], {allowUpscaling: boolN(), cacheHeight: intN(), cacheWidth: intN()}, {})))();
  var SynchronousFutureOf_SizeAwareCacheKey = () => (SynchronousFutureOf_SizeAwareCacheKey = dart.constFn(synchronous_future.SynchronousFuture$(image_provider._SizeAwareCacheKey)))();
  var ObjectToNull = () => (ObjectToNull = dart.constFn(dart.fnType(core.Null, [core.Object])))();
  var CompleterOf_SizeAwareCacheKey = () => (CompleterOf_SizeAwareCacheKey = dart.constFn(async.Completer$(image_provider._SizeAwareCacheKey)))();
  var SynchronousFutureOfFileImage = () => (SynchronousFutureOfFileImage = dart.constFn(synchronous_future.SynchronousFuture$(image_provider.FileImage)))();
  var SynchronousFutureOfMemoryImage = () => (SynchronousFutureOfMemoryImage = dart.constFn(synchronous_future.SynchronousFuture$(image_provider.MemoryImage)))();
  var SynchronousFutureOfAssetBundleImageKey = () => (SynchronousFutureOfAssetBundleImageKey = dart.constFn(synchronous_future.SynchronousFuture$(image_provider.AssetBundleImageKey)))();
  const CT = Object.create(null);
  var L2 = "package:flutter/src/painting/image_provider.dart";
  var L1 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/image_provider.dart";
  var L3 = "package:flutter/src/painting/_network_image_web.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/_network_image_web.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: image_provider.ImageConfiguration.prototype,
        [ImageConfiguration_platform]: null,
        [ImageConfiguration_size]: null,
        [ImageConfiguration_textDirection]: null,
        [ImageConfiguration_locale]: null,
        [ImageConfiguration_devicePixelRatio]: null,
        [ImageConfiguration_bundle]: null
      });
    }
  }, false);
  var _loadAsync = dart.privateName(_network_image_web, "_loadAsync");
  var _imageStreamInformationCollector = dart.privateName(_network_image_web, "_imageStreamInformationCollector");
  var _createErrorHandlerAndKey = dart.privateName(image_provider, "_createErrorHandlerAndKey");
  var ImageConfiguration_platform = dart.privateName(image_provider, "ImageConfiguration.platform");
  var ImageConfiguration_size = dart.privateName(image_provider, "ImageConfiguration.size");
  var ImageConfiguration_textDirection = dart.privateName(image_provider, "ImageConfiguration.textDirection");
  var ImageConfiguration_locale = dart.privateName(image_provider, "ImageConfiguration.locale");
  var ImageConfiguration_devicePixelRatio = dart.privateName(image_provider, "ImageConfiguration.devicePixelRatio");
  var ImageConfiguration_bundle = dart.privateName(image_provider, "ImageConfiguration.bundle");
  var C0;
  const _is_ImageProvider_default = Symbol('_is_ImageProvider_default');
  image_provider.ImageProvider$ = dart.generic(T => {
    var TAndFnTovoid = () => (TAndFnTovoid = dart.constFn(dart.fnType(dart.void, [T, ObjectAndStackTraceNTovoid()])))();
    var DiagnosticsPropertyOfT = () => (DiagnosticsPropertyOfT = dart.constFn(diagnostics.DiagnosticsProperty$(T)))();
    var TN = () => (TN = dart.constFn(dart.nullable(T)))();
    var TNAndObjectAndStackTraceNToFutureOfvoid = () => (TNAndObjectAndStackTraceNToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [TN(), core.Object, StackTraceN()])))();
    var TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    class ImageProvider extends core.Object {
      resolve(configuration) {
        if (configuration == null) dart.nullFailed(L1, 327, 42, "configuration");
        if (!(configuration != null)) dart.assertFailed(null, L1, 328, 12, "configuration != null");
        let stream = this.createStream(configuration);
        this[_createErrorHandlerAndKey](configuration, dart.fn((key, errorHandler) => {
          if (key == null) dart.nullFailed(L1, 334, 10, "key");
          if (errorHandler == null) dart.nullFailed(L1, 334, 34, "errorHandler");
          this.resolveStreamForKey(configuration, stream, key, errorHandler);
        }, TAndFnTovoid()), dart.fn((key, exception, stack) => {
          if (exception == null) dart.nullFailed(L1, 337, 23, "exception");
          return async.async(dart.void, (function*() {
            yield null;
            let imageCompleter = new image_provider._ErrorImageCompleter.new();
            stream.setCompleter(imageCompleter);
            let collector = null;
            if (!dart.test(dart.fn(() => {
              collector = dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
                yield new (DiagnosticsPropertyOfImageProviderOfObject()).new("Image provider", this);
                yield new (DiagnosticsPropertyOfImageConfiguration()).new("Image configuration", configuration);
                yield new (DiagnosticsPropertyOfT()).new("Image key", key, {defaultValue: null});
              }).bind(this)), VoidToIterableOfDiagnosticsNode());
              return true;
            }, VoidTobool())())) dart.assertFailed(null, L1, 342, 16, "() {\n          collector = () sync* {\n            yield DiagnosticsProperty<ImageProvider>('Image provider', this);\n            yield DiagnosticsProperty<ImageConfiguration>('Image configuration', configuration);\n            yield DiagnosticsProperty<T>('Image key', key, defaultValue: null);\n          };\n          return true;\n        }()");
            imageCompleter.setError({exception: exception, stack: stack, context: new assertions.ErrorDescription.new("while resolving an image"), silent: true, informationCollector: collector});
          }).bind(this));
        }, TNAndObjectAndStackTraceNToFutureOfvoid()));
        return stream;
      }
      createStream(configuration) {
        if (configuration == null) dart.nullFailed(L1, 368, 47, "configuration");
        return new image_stream.ImageStream.new();
      }
      obtainCacheStatus(opts) {
        let configuration = opts && 'configuration' in opts ? opts.configuration : null;
        if (configuration == null) dart.nullFailed(L1, 383, 33, "configuration");
        let handleError = opts && 'handleError' in opts ? opts.handleError : null;
        if (!(configuration != null)) dart.assertFailed(null, L1, 386, 12, "configuration != null");
        let completer = CompleterOfImageCacheStatusN().new();
        this[_createErrorHandlerAndKey](configuration, dart.fn((key, innerHandleError) => {
          if (key == null) dart.nullFailed(L1, 390, 10, "key");
          if (innerHandleError == null) dart.nullFailed(L1, 390, 34, "innerHandleError");
          completer.complete(dart.nullCheck(dart.nullCheck(binding.PaintingBinding.instance).imageCache).statusForKey(key));
        }, TAndFnTovoid()), dart.fn((key, exception, stack) => {
          if (exception == null) dart.nullFailed(L1, 393, 23, "exception");
          return async.async(dart.void, (function*() {
            if (handleError != null) {
              handleError(exception, stack);
            } else {
              let collector = null;
              if (!dart.test(dart.fn(() => {
                collector = dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
                  yield new (DiagnosticsPropertyOfImageProviderOfObject()).new("Image provider", this);
                  yield new (DiagnosticsPropertyOfImageConfiguration()).new("Image configuration", configuration);
                  yield new (DiagnosticsPropertyOfT()).new("Image key", key, {defaultValue: null});
                }).bind(this)), VoidToIterableOfDiagnosticsNode());
                return true;
              }, VoidTobool())())) dart.assertFailed(null, L1, 398, 18, "() {\n            collector = () sync* {\n              yield DiagnosticsProperty<ImageProvider>('Image provider', this);\n              yield DiagnosticsProperty<ImageConfiguration>('Image configuration', configuration);\n              yield DiagnosticsProperty<T>('Image key', key, defaultValue: null);\n            };\n            return true;\n          }()");
              assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({context: new assertions.ErrorDescription.new("while checking the cache location of an image"), informationCollector: collector, exception: exception, stack: stack}));
              completer.complete(null);
            }
          }).bind(this));
        }, TNAndObjectAndStackTraceNToFutureOfvoid()));
        return completer.future;
      }
      [_createErrorHandlerAndKey](configuration, successCallback, errorCallback) {
        if (configuration == null) dart.nullFailed(L1, 423, 24, "configuration");
        if (successCallback == null) dart.nullFailed(L1, 424, 36, "successCallback");
        if (errorCallback == null) dart.nullFailed(L1, 425, 31, "errorCallback");
        let obtainedKey = null;
        let didError = false;
        function handleError(exception, stack) {
          if (exception == null) dart.nullFailed(L1, 429, 37, "exception");
          return async.async(dart.void, function* handleError() {
            if (didError) {
              return;
            }
            if (!didError) {
              errorCallback(obtainedKey, exception, stack);
            }
            didError = true;
          });
        }
        dart.fn(handleError, ObjectAndStackTraceNToFutureOfvoid());
        let dangerZone = async.Zone.current.fork({specification: new async._ZoneSpecification.new({handleUncaughtError: dart.fn((zone, delegate, parent, error, stackTrace) => {
              if (zone == null) dart.nullFailed(L1, 449, 36, "zone");
              if (delegate == null) dart.nullFailed(L1, 449, 55, "delegate");
              if (parent == null) dart.nullFailed(L1, 449, 70, "parent");
              if (error == null) dart.nullFailed(L1, 449, 85, "error");
              if (stackTrace == null) dart.nullFailed(L1, 449, 103, "stackTrace");
              handleError(error, stackTrace);
            }, ZoneAndZoneDelegateAndZone__Tovoid())})});
        dangerZone.runGuarded(dart.fn(() => {
          let key = null;
          try {
            key = this.obtainKey(configuration);
          } catch (e) {
            let error = dart.getThrown(e);
            let stackTrace = dart.stackTrace(e);
            if (core.Object.is(error)) {
              handleError(error, stackTrace);
              return;
            } else
              throw e;
          }
          key.then(dart.void, dart.fn(key => {
            if (key == null) dart.nullFailed(L1, 462, 25, "key");
            obtainedKey = key;
            try {
              successCallback(key, handleError);
            } catch (e) {
              let error = dart.getThrown(e);
              let stackTrace = dart.stackTrace(e);
              if (core.Object.is(error)) {
                handleError(error, stackTrace);
              } else
                throw e;
            }
          }, TToNull())).catchError(handleError);
        }, VoidTovoid()));
      }
      resolveStreamForKey(configuration, stream, key, handleError) {
        if (configuration == null) dart.nullFailed(L1, 491, 47, "configuration");
        if (stream == null) dart.nullFailed(L1, 491, 74, "stream");
        T.as(key);
        if (key == null) dart.nullFailed(L1, 491, 84, "key");
        if (handleError == null) dart.nullFailed(L1, 491, 108, "handleError");
        if (stream.completer != null) {
          let completer = dart.nullCheck(dart.nullCheck(binding.PaintingBinding.instance).imageCache).putIfAbsent(key, dart.fn(() => dart.nullCheck(stream.completer), VoidToImageStreamCompleter()), {onError: handleError});
          if (!(completer == stream.completer)) dart.assertFailed(null, L1, 501, 14, "identical(completer, stream.completer)");
          return;
        }
        let completer = dart.nullCheck(dart.nullCheck(binding.PaintingBinding.instance).imageCache).putIfAbsent(key, dart.fn(() => this.load(key, dart.bind(dart.nullCheck(binding.PaintingBinding.instance), 'instantiateImageCodec')), VoidToImageStreamCompleter()), {onError: handleError});
        if (completer != null) {
          stream.setCompleter(completer);
        }
      }
      evict(opts) {
        let cache = opts && 'cache' in opts ? opts.cache : null;
        let configuration = opts && 'configuration' in opts ? opts.configuration : C0 || CT.C0;
        if (configuration == null) dart.nullFailed(L1, 552, 62, "configuration");
        return async.async(core.bool, (function* evict() {
          cache == null ? cache = binding.imageCache : null;
          let key = (yield this.obtainKey(configuration));
          return dart.nullCheck(cache).evict(key);
        }).bind(this));
      }
      toString() {
        return dart.str(object.objectRuntimeType(this, "ImageConfiguration")) + "()";
      }
    }
    (ImageProvider.new = function() {
      ;
    }).prototype = ImageProvider.prototype;
    dart.addTypeTests(ImageProvider);
    ImageProvider.prototype[_is_ImageProvider_default] = true;
    dart.addTypeCaches(ImageProvider);
    dart.setMethodSignature(ImageProvider, () => ({
      __proto__: dart.getMethods(ImageProvider.__proto__),
      resolve: dart.fnType(image_stream.ImageStream, [image_provider.ImageConfiguration]),
      createStream: dart.fnType(image_stream.ImageStream, [image_provider.ImageConfiguration]),
      obtainCacheStatus: dart.fnType(async.Future$(dart.nullable(image_cache.ImageCacheStatus)), [], {handleError: dart.nullable(dart.fnType(dart.void, [core.Object, dart.nullable(core.StackTrace)]))}, {configuration: image_provider.ImageConfiguration}),
      [_createErrorHandlerAndKey]: dart.fnType(dart.void, [image_provider.ImageConfiguration, dart.fnType(dart.void, [T, dart.fnType(dart.void, [core.Object, dart.nullable(core.StackTrace)])]), dart.fnType(async.Future$(dart.void), [dart.nullable(T), core.Object, dart.nullable(core.StackTrace)])]),
      resolveStreamForKey: dart.fnType(dart.void, [image_provider.ImageConfiguration, image_stream.ImageStream, dart.nullable(core.Object), dart.fnType(dart.void, [core.Object, dart.nullable(core.StackTrace)])]),
      evict: dart.fnType(async.Future$(core.bool), [], {cache: dart.nullable(image_cache.ImageCache), configuration: image_provider.ImageConfiguration}, {})
    }));
    dart.setLibraryUri(ImageProvider, L2);
    dart.defineExtensionMethods(ImageProvider, ['toString']);
    return ImageProvider;
  });
  image_provider.ImageProvider = image_provider.ImageProvider$();
  dart.addTypeTests(image_provider.ImageProvider, _is_ImageProvider_default);
  image_provider.NetworkImage = class NetworkImage extends image_provider.ImageProvider {};
  dart.addTypeTests(image_provider.NetworkImage);
  dart.addTypeCaches(image_provider.NetworkImage);
  dart.setLibraryUri(image_provider.NetworkImage, L2);
  var url$ = dart.privateName(_network_image_web, "NetworkImage.url");
  var scale$ = dart.privateName(_network_image_web, "NetworkImage.scale");
  var headers$ = dart.privateName(_network_image_web, "NetworkImage.headers");
  _network_image_web.NetworkImage = class NetworkImage extends image_provider.ImageProvider$(image_provider.NetworkImage) {
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      super.headers = value;
    }
    obtainKey(configuration) {
      if (configuration == null) dart.nullFailed(L0, 39, 41, "configuration");
      return new (SynchronousFutureOfNetworkImage()).new(this);
    }
    load(key, decode) {
      image_provider.NetworkImage.as(key);
      if (key == null) dart.nullFailed(L0, 45, 35, "key");
      if (decode == null) dart.nullFailed(L0, 45, 71, "decode");
      let chunkEvents = StreamControllerOfImageChunkEvent().new();
      return new image_stream.MultiFrameImageStreamCompleter.new({chunkEvents: chunkEvents.stream, codec: this[_loadAsync](_network_image_web.NetworkImage.as(key), decode, chunkEvents), scale: key.scale, debugLabel: key.url, informationCollector: this[_imageStreamInformationCollector](key)});
    }
    [_imageStreamInformationCollector](key) {
      if (key == null) dart.nullFailed(L0, 61, 35, "key");
      let collector = null;
      if (!dart.test(dart.fn(() => {
        collector = dart.fn(() => JSArrayOfDiagnosticsNode().of([new (DiagnosticsPropertyOfImageProviderOfObject()).new("Image provider", this), new (DiagnosticsPropertyOfNetworkImage()).new("Image key", _network_image_web.NetworkImage.as(key))]), VoidToListOfDiagnosticsNode());
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 63, 12, "() {\n      collector = () {\n        return <DiagnosticsNode>[\n          DiagnosticsProperty<image_provider.ImageProvider>(\n              'Image provider', this),\n          DiagnosticsProperty<NetworkImage>('Image key', key as NetworkImage),\n        ];\n      };\n      return true;\n    }()");
      return collector;
    }
    [_loadAsync](key, decode, chunkEvents) {
      if (key == null) dart.nullFailed(L0, 83, 20, "key");
      if (decode == null) dart.nullFailed(L0, 84, 38, "decode");
      if (chunkEvents == null) dart.nullFailed(L0, 85, 41, "chunkEvents");
      if (!dart.equals(key, this)) dart.assertFailed(null, L0, 86, 12, "key == this");
      let resolved = core.Uri.base.resolve(key.url);
      return ui.webOnlyInstantiateImageCodecFromUrl(resolved, {chunkCallback: dart.fn((bytes, total) => {
          if (bytes == null) dart.nullFailed(L0, 92, 29, "bytes");
          if (total == null) dart.nullFailed(L0, 92, 40, "total");
          chunkEvents.add(new image_stream.ImageChunkEvent.new({cumulativeBytesLoaded: bytes, expectedTotalBytes: total}));
        }, intAndintTovoid())});
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) {
        return false;
      }
      return _network_image_web.NetworkImage.is(other) && other.url == this.url && other.scale == this.scale;
    }
    get hashCode() {
      return ui.hashValues(this.url, this.scale);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "NetworkImage")) + "(\"" + dart.str(this.url) + "\", scale: " + dart.str(this.scale) + ")";
    }
  };
  (_network_image_web.NetworkImage.new = function(url, opts) {
    if (url == null) dart.nullFailed(L0, 24, 27, "url");
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    if (scale == null) dart.nullFailed(L0, 24, 38, "scale");
    let headers = opts && 'headers' in opts ? opts.headers : null;
    this[url$] = url;
    this[scale$] = scale;
    this[headers$] = headers;
    if (!(url != null)) dart.assertFailed(null, L0, 25, 16, "url != null");
    if (!(scale != null)) dart.assertFailed(null, L0, 26, 16, "scale != null");
    _network_image_web.NetworkImage.__proto__.new.call(this);
    ;
  }).prototype = _network_image_web.NetworkImage.prototype;
  dart.addTypeTests(_network_image_web.NetworkImage);
  dart.addTypeCaches(_network_image_web.NetworkImage);
  _network_image_web.NetworkImage[dart.implements] = () => [image_provider.NetworkImage];
  dart.setMethodSignature(_network_image_web.NetworkImage, () => ({
    __proto__: dart.getMethods(_network_image_web.NetworkImage.__proto__),
    obtainKey: dart.fnType(async.Future$(_network_image_web.NetworkImage), [image_provider.ImageConfiguration]),
    load: dart.fnType(image_stream.ImageStreamCompleter, [dart.nullable(core.Object), dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {})]),
    [_imageStreamInformationCollector]: dart.fnType(dart.nullable(dart.fnType(core.Iterable$(diagnostics.DiagnosticsNode), [])), [image_provider.NetworkImage]),
    [_loadAsync]: dart.fnType(async.Future$(ui.Codec), [_network_image_web.NetworkImage, dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {}), async.StreamController$(image_stream.ImageChunkEvent)])
  }));
  dart.setLibraryUri(_network_image_web.NetworkImage, L3);
  dart.setFieldSignature(_network_image_web.NetworkImage, () => ({
    __proto__: dart.getFields(_network_image_web.NetworkImage.__proto__),
    url: dart.finalFieldType(core.String),
    scale: dart.finalFieldType(core.double),
    headers: dart.finalFieldType(dart.nullable(core.Map$(core.String, core.String)))
  }));
  dart.defineExtensionMethods(_network_image_web.NetworkImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(_network_image_web.NetworkImage, ['hashCode']);
  image_provider.ImageConfiguration = class ImageConfiguration extends core.Object {
    get bundle() {
      return this[bundle$];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get devicePixelRatio() {
      return this[devicePixelRatio$];
    }
    set devicePixelRatio(value) {
      super.devicePixelRatio = value;
    }
    get locale() {
      return this[locale$];
    }
    set locale(value) {
      super.locale = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get platform() {
      return this[platform$];
    }
    set platform(value) {
      super.platform = value;
    }
    copyWith(opts) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3;
      let bundle = opts && 'bundle' in opts ? opts.bundle : null;
      let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let platform = opts && 'platform' in opts ? opts.platform : null;
      return new image_provider.ImageConfiguration.new({bundle: (t2 = bundle, t2 == null ? this.bundle : t2), devicePixelRatio: (t2$ = devicePixelRatio, t2$ == null ? this.devicePixelRatio : t2$), locale: (t2$0 = locale, t2$0 == null ? this.locale : t2$0), textDirection: (t2$1 = textDirection, t2$1 == null ? this.textDirection : t2$1), size: (t2$2 = size, t2$2 == null ? this.size : t2$2), platform: (t2$3 = platform, t2$3 == null ? this.platform : t2$3)});
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return image_provider.ImageConfiguration.is(other) && dart.equals(other.bundle, this.bundle) && other.devicePixelRatio == this.devicePixelRatio && dart.equals(other.locale, this.locale) && dart.equals(other.textDirection, this.textDirection) && dart.equals(other.size, this.size) && dart.equals(other.platform, this.platform);
    }
    get hashCode() {
      return ui.hashValues(this.bundle, this.devicePixelRatio, this.locale, this.size, this.platform);
    }
    toString() {
      let result = new core.StringBuffer.new();
      result.write("ImageConfiguration(");
      let hasArguments = false;
      if (this.bundle != null) {
        if (hasArguments) result.write(", ");
        result.write("bundle: " + dart.str(this.bundle));
        hasArguments = true;
      }
      if (this.devicePixelRatio != null) {
        if (hasArguments) result.write(", ");
        result.write("devicePixelRatio: " + dart.nullCheck(this.devicePixelRatio)[$toStringAsFixed](1));
        hasArguments = true;
      }
      if (this.locale != null) {
        if (hasArguments) result.write(", ");
        result.write("locale: " + dart.str(this.locale));
        hasArguments = true;
      }
      if (this.textDirection != null) {
        if (hasArguments) result.write(", ");
        result.write("textDirection: " + dart.str(this.textDirection));
        hasArguments = true;
      }
      if (this.size != null) {
        if (hasArguments) result.write(", ");
        result.write("size: " + dart.str(this.size));
        hasArguments = true;
      }
      if (this.platform != null) {
        if (hasArguments) result.write(", ");
        result.write("platform: " + dart.str(diagnostics.describeEnum(dart.nullCheck(this.platform))));
        hasArguments = true;
      }
      result.write(")");
      return result.toString();
    }
  };
  (image_provider.ImageConfiguration.new = function(opts) {
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let platform = opts && 'platform' in opts ? opts.platform : null;
    this[bundle$] = bundle;
    this[devicePixelRatio$] = devicePixelRatio;
    this[locale$] = locale;
    this[textDirection$] = textDirection;
    this[size$] = size;
    this[platform$] = platform;
    ;
  }).prototype = image_provider.ImageConfiguration.prototype;
  dart.addTypeTests(image_provider.ImageConfiguration);
  dart.addTypeCaches(image_provider.ImageConfiguration);
  const bundle$ = ImageConfiguration_bundle;
  const devicePixelRatio$ = ImageConfiguration_devicePixelRatio;
  const locale$ = ImageConfiguration_locale;
  const textDirection$ = ImageConfiguration_textDirection;
  const size$ = ImageConfiguration_size;
  const platform$ = ImageConfiguration_platform;
  dart.setMethodSignature(image_provider.ImageConfiguration, () => ({
    __proto__: dart.getMethods(image_provider.ImageConfiguration.__proto__),
    copyWith: dart.fnType(image_provider.ImageConfiguration, [], {bundle: dart.nullable(asset_bundle.AssetBundle), devicePixelRatio: dart.nullable(core.double), locale: dart.nullable(ui.Locale), platform: dart.nullable(platform.TargetPlatform), size: dart.nullable(ui.Size), textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setLibraryUri(image_provider.ImageConfiguration, L2);
  dart.setFieldSignature(image_provider.ImageConfiguration, () => ({
    __proto__: dart.getFields(image_provider.ImageConfiguration.__proto__),
    bundle: dart.finalFieldType(dart.nullable(asset_bundle.AssetBundle)),
    devicePixelRatio: dart.finalFieldType(dart.nullable(core.double)),
    locale: dart.finalFieldType(dart.nullable(ui.Locale)),
    textDirection: dart.finalFieldType(dart.nullable(ui.TextDirection)),
    size: dart.finalFieldType(dart.nullable(ui.Size)),
    platform: dart.finalFieldType(dart.nullable(platform.TargetPlatform))
  }));
  dart.defineExtensionMethods(image_provider.ImageConfiguration, ['_equals', 'toString']);
  dart.defineExtensionAccessors(image_provider.ImageConfiguration, ['hashCode']);
  dart.defineLazy(image_provider.ImageConfiguration, {
    /*image_provider.ImageConfiguration.empty*/get empty() {
      return C0 || CT.C0;
    }
  }, false);
  var bundle$0 = dart.privateName(image_provider, "AssetBundleImageKey.bundle");
  var name$ = dart.privateName(image_provider, "AssetBundleImageKey.name");
  var scale$0 = dart.privateName(image_provider, "AssetBundleImageKey.scale");
  image_provider.AssetBundleImageKey = class AssetBundleImageKey extends core.Object {
    get bundle() {
      return this[bundle$0];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get scale() {
      return this[scale$0];
    }
    set scale(value) {
      super.scale = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return image_provider.AssetBundleImageKey.is(other) && dart.equals(other.bundle, this.bundle) && other.name == this.name && other.scale == this.scale;
    }
    get hashCode() {
      return ui.hashValues(this.bundle, this.name, this.scale);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "AssetBundleImageKey")) + "(bundle: " + dart.str(this.bundle) + ", name: \"" + dart.str(this.name) + "\", scale: " + dart.str(this.scale) + ")";
    }
  };
  (image_provider.AssetBundleImageKey.new = function(opts) {
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    if (bundle == null) dart.nullFailed(L1, 594, 19, "bundle");
    let name = opts && 'name' in opts ? opts.name : null;
    if (name == null) dart.nullFailed(L1, 595, 19, "name");
    let scale = opts && 'scale' in opts ? opts.scale : null;
    if (scale == null) dart.nullFailed(L1, 596, 19, "scale");
    this[bundle$0] = bundle;
    this[name$] = name;
    this[scale$0] = scale;
    if (!(bundle != null)) dart.assertFailed(null, L1, 597, 15, "bundle != null");
    if (!(name != null)) dart.assertFailed(null, L1, 598, 15, "name != null");
    if (!(scale != null)) dart.assertFailed(null, L1, 599, 15, "scale != null");
    ;
  }).prototype = image_provider.AssetBundleImageKey.prototype;
  dart.addTypeTests(image_provider.AssetBundleImageKey);
  dart.addTypeCaches(image_provider.AssetBundleImageKey);
  dart.setLibraryUri(image_provider.AssetBundleImageKey, L2);
  dart.setFieldSignature(image_provider.AssetBundleImageKey, () => ({
    __proto__: dart.getFields(image_provider.AssetBundleImageKey.__proto__),
    bundle: dart.finalFieldType(asset_bundle.AssetBundle),
    name: dart.finalFieldType(core.String),
    scale: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(image_provider.AssetBundleImageKey, ['_equals', 'toString']);
  dart.defineExtensionAccessors(image_provider.AssetBundleImageKey, ['hashCode']);
  var _loadAsync$ = dart.privateName(image_provider, "_loadAsync");
  image_provider.AssetBundleImageProvider = class AssetBundleImageProvider extends image_provider.ImageProvider$(image_provider.AssetBundleImageKey) {
    load(key, decode) {
      image_provider.AssetBundleImageKey.as(key);
      if (key == null) dart.nullFailed(L1, 643, 49, "key");
      if (decode == null) dart.nullFailed(L1, 643, 70, "decode");
      let collector = null;
      if (!dart.test(dart.fn(() => {
        collector = dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
          yield new (DiagnosticsPropertyOfImageProviderOfObject()).new("Image provider", this);
          yield new (DiagnosticsPropertyOfAssetBundleImageKey()).new("Image key", key);
        }).bind(this)), VoidToIterableOfDiagnosticsNode());
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L1, 645, 12, "() {\n      collector = () sync* {\n        yield DiagnosticsProperty<ImageProvider>('Image provider', this);\n        yield DiagnosticsProperty<AssetBundleImageKey>('Image key', key);\n      };\n      return true;\n    }()");
      return new image_stream.MultiFrameImageStreamCompleter.new({codec: this[_loadAsync$](key, decode), scale: key.scale, debugLabel: key.name, informationCollector: collector});
    }
    [_loadAsync$](key, decode) {
      if (key == null) dart.nullFailed(L1, 665, 51, "key");
      if (decode == null) dart.nullFailed(L1, 665, 72, "decode");
      return async.async(ui.Codec, function* _loadAsync() {
        let data = null;
        try {
          data = (yield key.bundle.load(key.name));
        } catch (e) {
          let ex = dart.getThrown(e);
          if (assertions.FlutterError.is(ex)) {
            dart.nullCheck(dart.nullCheck(binding.PaintingBinding.instance).imageCache).evict(key);
            dart.rethrow(e);
          } else
            throw e;
        }
        if (data == null) {
          dart.nullCheck(dart.nullCheck(binding.PaintingBinding.instance).imageCache).evict(key);
          dart.throw(new core.StateError.new("Unable to read data"));
        }
        return yield decode(data[$buffer][$asUint8List]());
      });
    }
  };
  (image_provider.AssetBundleImageProvider.new = function() {
    image_provider.AssetBundleImageProvider.__proto__.new.call(this);
    ;
  }).prototype = image_provider.AssetBundleImageProvider.prototype;
  dart.addTypeTests(image_provider.AssetBundleImageProvider);
  dart.addTypeCaches(image_provider.AssetBundleImageProvider);
  dart.setMethodSignature(image_provider.AssetBundleImageProvider, () => ({
    __proto__: dart.getMethods(image_provider.AssetBundleImageProvider.__proto__),
    load: dart.fnType(image_stream.ImageStreamCompleter, [dart.nullable(core.Object), dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {})]),
    [_loadAsync$]: dart.fnType(async.Future$(ui.Codec), [image_provider.AssetBundleImageKey, dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {})])
  }));
  dart.setLibraryUri(image_provider.AssetBundleImageProvider, L2);
  var providerCacheKey$ = dart.privateName(image_provider, "_SizeAwareCacheKey.providerCacheKey");
  var width$ = dart.privateName(image_provider, "_SizeAwareCacheKey.width");
  var height$ = dart.privateName(image_provider, "_SizeAwareCacheKey.height");
  image_provider._SizeAwareCacheKey = class _SizeAwareCacheKey extends core.Object {
    get providerCacheKey() {
      return this[providerCacheKey$];
    }
    set providerCacheKey(value) {
      super.providerCacheKey = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return image_provider._SizeAwareCacheKey.is(other) && dart.equals(other.providerCacheKey, this.providerCacheKey) && other.width == this.width && other.height == this.height;
    }
    get hashCode() {
      return ui.hashValues(this.providerCacheKey, this.width, this.height);
    }
  };
  (image_provider._SizeAwareCacheKey.new = function(providerCacheKey, width, height) {
    if (providerCacheKey == null) dart.nullFailed(L1, 688, 33, "providerCacheKey");
    this[providerCacheKey$] = providerCacheKey;
    this[width$] = width;
    this[height$] = height;
    ;
  }).prototype = image_provider._SizeAwareCacheKey.prototype;
  dart.addTypeTests(image_provider._SizeAwareCacheKey);
  dart.addTypeCaches(image_provider._SizeAwareCacheKey);
  dart.setLibraryUri(image_provider._SizeAwareCacheKey, L2);
  dart.setFieldSignature(image_provider._SizeAwareCacheKey, () => ({
    __proto__: dart.getFields(image_provider._SizeAwareCacheKey.__proto__),
    providerCacheKey: dart.finalFieldType(core.Object),
    width: dart.finalFieldType(dart.nullable(core.int)),
    height: dart.finalFieldType(dart.nullable(core.int))
  }));
  dart.defineExtensionMethods(image_provider._SizeAwareCacheKey, ['_equals']);
  dart.defineExtensionAccessors(image_provider._SizeAwareCacheKey, ['hashCode']);
  var imageProvider$ = dart.privateName(image_provider, "ResizeImage.imageProvider");
  var width$0 = dart.privateName(image_provider, "ResizeImage.width");
  var height$0 = dart.privateName(image_provider, "ResizeImage.height");
  var allowUpscaling$ = dart.privateName(image_provider, "ResizeImage.allowUpscaling");
  image_provider.ResizeImage = class ResizeImage extends image_provider.ImageProvider$(image_provider._SizeAwareCacheKey) {
    get imageProvider() {
      return this[imageProvider$];
    }
    set imageProvider(value) {
      super.imageProvider = value;
    }
    get width() {
      return this[width$0];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$0];
    }
    set height(value) {
      super.height = value;
    }
    get allowUpscaling() {
      return this[allowUpscaling$];
    }
    set allowUpscaling(value) {
      super.allowUpscaling = value;
    }
    static resizeIfNeeded(cacheWidth, cacheHeight, provider) {
      if (provider == null) dart.nullFailed(L1, 755, 104, "provider");
      if (cacheWidth != null || cacheHeight != null) {
        return new image_provider.ResizeImage.new(provider, {width: cacheWidth, height: cacheHeight});
      }
      return provider;
    }
    load(key, decode) {
      image_provider._SizeAwareCacheKey.as(key);
      if (key == null) dart.nullFailed(L1, 763, 48, "key");
      if (decode == null) dart.nullFailed(L1, 763, 69, "decode");
      let decodeResize = dart.fn((bytes, opts) => {
        if (bytes == null) dart.nullFailed(L1, 764, 53, "bytes");
        let allowUpscaling = opts && 'allowUpscaling' in opts ? opts.allowUpscaling : null;
        let cacheHeight = opts && 'cacheHeight' in opts ? opts.cacheHeight : null;
        let cacheWidth = opts && 'cacheWidth' in opts ? opts.cacheWidth : null;
        if (!(cacheWidth == null && cacheHeight == null && allowUpscaling == null)) dart.assertFailed("ResizeImage cannot be composed with another ImageProvider that applies " + "cacheWidth, cacheHeight, or allowUpscaling.", L1, 766, 9, "cacheWidth == null && cacheHeight == null && allowUpscaling == null");
        return decode(bytes, {cacheWidth: this.width, cacheHeight: this.height, allowUpscaling: this.allowUpscaling});
      }, Uint8List__ToFutureOfCodec());
      let completer = this.imageProvider.load(key.providerCacheKey, decodeResize);
      if (!false) {
        completer.debugLabel = dart.str(completer.debugLabel) + " - Resized(" + dart.str(key.width) + "×" + dart.str(key.height) + ")";
      }
      return completer;
    }
    obtainKey(configuration) {
      if (configuration == null) dart.nullFailed(L1, 780, 59, "configuration");
      let completer = null;
      let result = null;
      this.imageProvider.obtainKey(configuration).then(core.Null, dart.fn(key => {
        if (key == null) dart.nullFailed(L1, 785, 57, "key");
        if (completer == null) {
          result = new (SynchronousFutureOf_SizeAwareCacheKey()).new(new image_provider._SizeAwareCacheKey.new(key, this.width, this.height));
        } else {
          completer.complete(new image_provider._SizeAwareCacheKey.new(key, this.width, this.height));
        }
      }, ObjectToNull()));
      if (result != null) {
        return dart.nullCheck(result);
      }
      completer = CompleterOf_SizeAwareCacheKey().new();
      return completer.future;
    }
  };
  (image_provider.ResizeImage.new = function(imageProvider, opts) {
    if (imageProvider == null) dart.nullFailed(L1, 725, 10, "imageProvider");
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let allowUpscaling = opts && 'allowUpscaling' in opts ? opts.allowUpscaling : false;
    if (allowUpscaling == null) dart.nullFailed(L1, 728, 10, "allowUpscaling");
    this[imageProvider$] = imageProvider;
    this[width$0] = width;
    this[height$0] = height;
    this[allowUpscaling$] = allowUpscaling;
    if (!(width != null || height != null)) dart.assertFailed(null, L1, 729, 15, "width != null || height != null");
    if (!(allowUpscaling != null)) dart.assertFailed(null, L1, 730, 15, "allowUpscaling != null");
    image_provider.ResizeImage.__proto__.new.call(this);
    ;
  }).prototype = image_provider.ResizeImage.prototype;
  dart.addTypeTests(image_provider.ResizeImage);
  dart.addTypeCaches(image_provider.ResizeImage);
  dart.setMethodSignature(image_provider.ResizeImage, () => ({
    __proto__: dart.getMethods(image_provider.ResizeImage.__proto__),
    load: dart.fnType(image_stream.ImageStreamCompleter, [dart.nullable(core.Object), dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {})]),
    obtainKey: dart.fnType(async.Future$(image_provider._SizeAwareCacheKey), [image_provider.ImageConfiguration])
  }));
  dart.setLibraryUri(image_provider.ResizeImage, L2);
  dart.setFieldSignature(image_provider.ResizeImage, () => ({
    __proto__: dart.getFields(image_provider.ResizeImage.__proto__),
    imageProvider: dart.finalFieldType(image_provider.ImageProvider$(core.Object)),
    width: dart.finalFieldType(dart.nullable(core.int)),
    height: dart.finalFieldType(dart.nullable(core.int)),
    allowUpscaling: dart.finalFieldType(core.bool)
  }));
  var file$ = dart.privateName(image_provider, "FileImage.file");
  var scale$1 = dart.privateName(image_provider, "FileImage.scale");
  image_provider.FileImage = class FileImage extends image_provider.ImageProvider {
    get file() {
      return this[file$];
    }
    set file(value) {
      super.file = value;
    }
    get scale() {
      return this[scale$1];
    }
    set scale(value) {
      super.scale = value;
    }
    obtainKey(configuration) {
      if (configuration == null) dart.nullFailed(L1, 866, 50, "configuration");
      return new (SynchronousFutureOfFileImage()).new(this);
    }
    load(key, decode) {
      image_provider.FileImage.as(key);
      if (key == null) dart.nullFailed(L1, 871, 39, "key");
      if (decode == null) dart.nullFailed(L1, 871, 60, "decode");
      return new image_stream.MultiFrameImageStreamCompleter.new({codec: this[_loadAsync$](key, decode), scale: key.scale, debugLabel: key.file.path, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
          yield new assertions.ErrorDescription.new("Path: " + dart.str(this.file.path));
        }).bind(this)), VoidToIterableOfDiagnosticsNode())});
    }
    [_loadAsync$](key, decode) {
      if (key == null) dart.nullFailed(L1, 882, 41, "key");
      if (decode == null) dart.nullFailed(L1, 882, 62, "decode");
      return async.async(ui.Codec, (function* _loadAsync() {
        if (!dart.equals(key, this)) dart.assertFailed(null, L1, 883, 12, "key == this");
        let bytes = (yield this.file.readAsBytes());
        if (bytes[$lengthInBytes] === 0) {
          dart.nullCheck(dart.nullCheck(binding.PaintingBinding.instance).imageCache).evict(key);
          dart.throw(new core.StateError.new(dart.str(this.file) + " is empty and cannot be loaded as an image."));
        }
        return yield decode(bytes);
      }).bind(this));
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return image_provider.FileImage.is(other) && other.file.path == this.file.path && other.scale == this.scale;
    }
    get hashCode() {
      return ui.hashValues(this.file.path, this.scale);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "FileImage")) + "(\"" + dart.str(this.file.path) + "\", scale: " + dart.str(this.scale) + ")";
    }
  };
  (image_provider.FileImage.new = function(file, opts) {
    if (file == null) dart.nullFailed(L1, 855, 24, "file");
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    if (scale == null) dart.nullFailed(L1, 855, 37, "scale");
    this[file$] = file;
    this[scale$1] = scale;
    if (!(file != null)) dart.assertFailed(null, L1, 856, 14, "file != null");
    if (!(scale != null)) dart.assertFailed(null, L1, 857, 14, "scale != null");
    image_provider.FileImage.__proto__.new.call(this);
    ;
  }).prototype = image_provider.FileImage.prototype;
  dart.addTypeTests(image_provider.FileImage);
  dart.addTypeCaches(image_provider.FileImage);
  dart.setMethodSignature(image_provider.FileImage, () => ({
    __proto__: dart.getMethods(image_provider.FileImage.__proto__),
    obtainKey: dart.fnType(async.Future$(image_provider.FileImage), [image_provider.ImageConfiguration]),
    load: dart.fnType(image_stream.ImageStreamCompleter, [dart.nullable(core.Object), dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {})]),
    [_loadAsync$]: dart.fnType(async.Future$(ui.Codec), [image_provider.FileImage, dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {})])
  }));
  dart.setLibraryUri(image_provider.FileImage, L2);
  dart.setFieldSignature(image_provider.FileImage, () => ({
    __proto__: dart.getFields(image_provider.FileImage.__proto__),
    file: dart.finalFieldType(io.File),
    scale: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(image_provider.FileImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(image_provider.FileImage, ['hashCode']);
  var bytes$ = dart.privateName(image_provider, "MemoryImage.bytes");
  var scale$2 = dart.privateName(image_provider, "MemoryImage.scale");
  image_provider.MemoryImage = class MemoryImage extends image_provider.ImageProvider {
    get bytes() {
      return this[bytes$];
    }
    set bytes(value) {
      super.bytes = value;
    }
    get scale() {
      return this[scale$2];
    }
    set scale(value) {
      super.scale = value;
    }
    obtainKey(configuration) {
      if (configuration == null) dart.nullFailed(L1, 940, 52, "configuration");
      return new (SynchronousFutureOfMemoryImage()).new(this);
    }
    load(key, decode) {
      image_provider.MemoryImage.as(key);
      if (key == null) dart.nullFailed(L1, 945, 41, "key");
      if (decode == null) dart.nullFailed(L1, 945, 62, "decode");
      return new image_stream.MultiFrameImageStreamCompleter.new({codec: this[_loadAsync$](key, decode), scale: key.scale, debugLabel: "MemoryImage(" + dart.str(diagnostics.describeIdentity(key.bytes)) + ")"});
    }
    [_loadAsync$](key, decode) {
      if (key == null) dart.nullFailed(L1, 953, 43, "key");
      if (decode == null) dart.nullFailed(L1, 953, 64, "decode");
      if (!dart.equals(key, this)) dart.assertFailed(null, L1, 954, 12, "key == this");
      return decode(this.bytes);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return image_provider.MemoryImage.is(other) && dart.equals(other.bytes, this.bytes) && other.scale == this.scale;
    }
    get hashCode() {
      return ui.hashValues(dart.hashCode(this.bytes), this.scale);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "MemoryImage")) + "(" + dart.str(diagnostics.describeIdentity(this.bytes)) + ", scale: " + dart.str(this.scale) + ")";
    }
  };
  (image_provider.MemoryImage.new = function(bytes, opts) {
    if (bytes == null) dart.nullFailed(L1, 929, 26, "bytes");
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    if (scale == null) dart.nullFailed(L1, 929, 40, "scale");
    this[bytes$] = bytes;
    this[scale$2] = scale;
    if (!(bytes != null)) dart.assertFailed(null, L1, 930, 14, "bytes != null");
    if (!(scale != null)) dart.assertFailed(null, L1, 931, 14, "scale != null");
    image_provider.MemoryImage.__proto__.new.call(this);
    ;
  }).prototype = image_provider.MemoryImage.prototype;
  dart.addTypeTests(image_provider.MemoryImage);
  dart.addTypeCaches(image_provider.MemoryImage);
  dart.setMethodSignature(image_provider.MemoryImage, () => ({
    __proto__: dart.getMethods(image_provider.MemoryImage.__proto__),
    obtainKey: dart.fnType(async.Future$(image_provider.MemoryImage), [image_provider.ImageConfiguration]),
    load: dart.fnType(image_stream.ImageStreamCompleter, [dart.nullable(core.Object), dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {})]),
    [_loadAsync$]: dart.fnType(async.Future$(ui.Codec), [image_provider.MemoryImage, dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {})])
  }));
  dart.setLibraryUri(image_provider.MemoryImage, L2);
  dart.setFieldSignature(image_provider.MemoryImage, () => ({
    __proto__: dart.getFields(image_provider.MemoryImage.__proto__),
    bytes: dart.finalFieldType(typed_data.Uint8List),
    scale: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(image_provider.MemoryImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(image_provider.MemoryImage, ['hashCode']);
  var assetName$ = dart.privateName(image_provider, "ExactAssetImage.assetName");
  var scale$3 = dart.privateName(image_provider, "ExactAssetImage.scale");
  var bundle$1 = dart.privateName(image_provider, "ExactAssetImage.bundle");
  var package$ = dart.privateName(image_provider, "ExactAssetImage.package");
  image_provider.ExactAssetImage = class ExactAssetImage extends image_provider.AssetBundleImageProvider {
    get assetName() {
      return this[assetName$];
    }
    set assetName(value) {
      super.assetName = value;
    }
    get scale() {
      return this[scale$3];
    }
    set scale(value) {
      super.scale = value;
    }
    get bundle() {
      return this[bundle$1];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get package() {
      return this[package$];
    }
    set package(value) {
      super.package = value;
    }
    get keyName() {
      return this.package == null ? this.assetName : "packages/" + dart.str(this.package) + "/" + dart.str(this.assetName);
    }
    obtainKey(configuration) {
      let t4, t4$;
      if (configuration == null) dart.nullFailed(L1, 1089, 60, "configuration");
      return new (SynchronousFutureOfAssetBundleImageKey()).new(new image_provider.AssetBundleImageKey.new({bundle: (t4$ = (t4 = this.bundle, t4 == null ? configuration.bundle : t4), t4$ == null ? asset_bundle.rootBundle : t4$), name: this.keyName, scale: this.scale}));
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return image_provider.ExactAssetImage.is(other) && other.keyName == this.keyName && other.scale == this.scale && dart.equals(other.bundle, this.bundle);
    }
    get hashCode() {
      return ui.hashValues(this.keyName, this.scale, this.bundle);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "ExactAssetImage")) + "(name: \"" + dart.str(this.keyName) + "\", scale: " + dart.str(this.scale) + ", bundle: " + dart.str(this.bundle) + ")";
    }
  };
  (image_provider.ExactAssetImage.new = function(assetName, opts) {
    if (assetName == null) dart.nullFailed(L1, 1057, 10, "assetName");
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    if (scale == null) dart.nullFailed(L1, 1058, 10, "scale");
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let $package = opts && 'package' in opts ? opts.package : null;
    this[assetName$] = assetName;
    this[scale$3] = scale;
    this[bundle$1] = bundle;
    this[package$] = $package;
    if (!(assetName != null)) dart.assertFailed(null, L1, 1061, 15, "assetName != null");
    if (!(scale != null)) dart.assertFailed(null, L1, 1062, 15, "scale != null");
    image_provider.ExactAssetImage.__proto__.new.call(this);
    ;
  }).prototype = image_provider.ExactAssetImage.prototype;
  dart.addTypeTests(image_provider.ExactAssetImage);
  dart.addTypeCaches(image_provider.ExactAssetImage);
  dart.setMethodSignature(image_provider.ExactAssetImage, () => ({
    __proto__: dart.getMethods(image_provider.ExactAssetImage.__proto__),
    obtainKey: dart.fnType(async.Future$(image_provider.AssetBundleImageKey), [image_provider.ImageConfiguration])
  }));
  dart.setGetterSignature(image_provider.ExactAssetImage, () => ({
    __proto__: dart.getGetters(image_provider.ExactAssetImage.__proto__),
    keyName: core.String
  }));
  dart.setLibraryUri(image_provider.ExactAssetImage, L2);
  dart.setFieldSignature(image_provider.ExactAssetImage, () => ({
    __proto__: dart.getFields(image_provider.ExactAssetImage.__proto__),
    assetName: dart.finalFieldType(core.String),
    scale: dart.finalFieldType(core.double),
    bundle: dart.finalFieldType(dart.nullable(asset_bundle.AssetBundle)),
    package: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionMethods(image_provider.ExactAssetImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(image_provider.ExactAssetImage, ['hashCode']);
  image_provider._ErrorImageCompleter = class _ErrorImageCompleter extends image_stream.ImageStreamCompleter {
    setError(opts) {
      let context = opts && 'context' in opts ? opts.context : null;
      let exception = opts && 'exception' in opts ? opts.exception : null;
      if (exception == null) dart.nullFailed(L1, 1120, 21, "exception");
      let stack = opts && 'stack' in opts ? opts.stack : null;
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      let silent = opts && 'silent' in opts ? opts.silent : false;
      if (silent == null) dart.nullFailed(L1, 1123, 10, "silent");
      this.reportError({context: context, exception: exception, stack: stack, informationCollector: informationCollector, silent: silent});
    }
  };
  (image_provider._ErrorImageCompleter.new = function() {
    image_provider._ErrorImageCompleter.__proto__.new.call(this);
    ;
  }).prototype = image_provider._ErrorImageCompleter.prototype;
  dart.addTypeTests(image_provider._ErrorImageCompleter);
  dart.addTypeCaches(image_provider._ErrorImageCompleter);
  dart.setMethodSignature(image_provider._ErrorImageCompleter, () => ({
    __proto__: dart.getMethods(image_provider._ErrorImageCompleter.__proto__),
    setError: dart.fnType(dart.void, [], {context: dart.nullable(diagnostics.DiagnosticsNode), informationCollector: dart.nullable(dart.fnType(core.Iterable$(diagnostics.DiagnosticsNode), [])), silent: core.bool, stack: dart.nullable(core.StackTrace)}, {exception: core.Object})
  }));
  dart.setLibraryUri(image_provider._ErrorImageCompleter, L2);
  var _message = dart.privateName(image_provider, "_message");
  var statusCode$ = dart.privateName(image_provider, "NetworkImageLoadException.statusCode");
  var uri$ = dart.privateName(image_provider, "NetworkImageLoadException.uri");
  image_provider.NetworkImageLoadException = class NetworkImageLoadException extends core.Object {
    get statusCode() {
      return this[statusCode$];
    }
    set statusCode(value) {
      super.statusCode = value;
    }
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      super.uri = value;
    }
    toString() {
      return this[_message];
    }
  };
  (image_provider.NetworkImageLoadException.new = function(opts) {
    let statusCode = opts && 'statusCode' in opts ? opts.statusCode : null;
    if (statusCode == null) dart.nullFailed(L1, 1139, 44, "statusCode");
    let uri = opts && 'uri' in opts ? opts.uri : null;
    if (uri == null) dart.nullFailed(L1, 1139, 70, "uri");
    this[statusCode$] = statusCode;
    this[uri$] = uri;
    if (!(uri != null)) dart.assertFailed(null, L1, 1140, 16, "uri != null");
    if (!(statusCode != null)) dart.assertFailed(null, L1, 1141, 16, "statusCode != null");
    this[_message] = "HTTP request failed, statusCode: " + dart.str(statusCode) + ", " + dart.str(uri);
    ;
  }).prototype = image_provider.NetworkImageLoadException.prototype;
  dart.addTypeTests(image_provider.NetworkImageLoadException);
  dart.addTypeCaches(image_provider.NetworkImageLoadException);
  image_provider.NetworkImageLoadException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(image_provider.NetworkImageLoadException, L2);
  dart.setFieldSignature(image_provider.NetworkImageLoadException, () => ({
    __proto__: dart.getFields(image_provider.NetworkImageLoadException.__proto__),
    statusCode: dart.finalFieldType(core.int),
    [_message]: dart.finalFieldType(core.String),
    uri: dart.finalFieldType(core.Uri)
  }));
  dart.defineExtensionMethods(image_provider.NetworkImageLoadException, ['toString']);
  dart.setBaseClass(image_provider.NetworkImage, image_provider.ImageProvider$(image_provider.NetworkImage));
  dart.setBaseClass(image_provider.FileImage, image_provider.ImageProvider$(image_provider.FileImage));
  dart.setBaseClass(image_provider.MemoryImage, image_provider.ImageProvider$(image_provider.MemoryImage));
  dart.trackLibraries("packages/flutter/src/painting/_network_image_web.dart", {
    "package:flutter/src/painting/_network_image_web.dart": _network_image_web,
    "package:flutter/src/painting/image_provider.dart": image_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["image_provider.dart","_network_image_web.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/_network_image_web.dart.lib.js"}');
  // Exports:
  return {
    src__painting___network_image_web: _network_image_web,
    src__painting__image_provider: image_provider
  };
}));

//# sourceMappingURL=_network_image_web.dart.lib.js.map
