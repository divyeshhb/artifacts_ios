define(['dart_sdk', 'packages/flutter/src/services/system_channels.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/flutter/src/foundation/synchronous_future.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__painting__image_resolution_dart(dart_sdk, packages__flutter__src__services__system_channels$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__flutter__src__foundation__synchronous_future$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const collection = dart_sdk.collection;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const asset_bundle = packages__flutter__src__services__system_channels$46dart.src__services__asset_bundle;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  const synchronous_future = packages__flutter__src__foundation__synchronous_future$46dart.src__foundation__synchronous_future;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var image_resolution = Object.create(dart.library);
  var $_get = dartx._get;
  var $keys = dartx.keys;
  var $map = dartx.map;
  var $isEmpty = dartx.isEmpty;
  var $length = dartx.length;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(false);
  var ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  var MapOfString$ListOfString = () => (MapOfString$ListOfString = dart.constFn(core.Map$(core.String, ListOfString())))();
  var MapNOfString$ListOfString = () => (MapNOfString$ListOfString = dart.constFn(dart.nullable(MapOfString$ListOfString())))();
  var FutureOfMapNOfString$ListOfString = () => (FutureOfMapNOfString$ListOfString = dart.constFn(async.Future$(MapNOfString$ListOfString())))();
  var StringN = () => (StringN = dart.constFn(dart.nullable(core.String)))();
  var StringNToFutureOfMapNOfString$ListOfString = () => (StringNToFutureOfMapNOfString$ListOfString = dart.constFn(dart.fnType(FutureOfMapNOfString$ListOfString(), [StringN()])))();
  var SynchronousFutureOfAssetBundleImageKey = () => (SynchronousFutureOfAssetBundleImageKey = dart.constFn(synchronous_future.SynchronousFuture$(image_provider.AssetBundleImageKey)))();
  var MapNOfString$ListOfStringToNull = () => (MapNOfString$ListOfStringToNull = dart.constFn(dart.fnType(core.Null, [MapNOfString$ListOfString()])))();
  var ObjectAndStackTraceToNull = () => (ObjectAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [core.Object, core.StackTrace])))();
  var CompleterOfAssetBundleImageKey = () => (CompleterOfAssetBundleImageKey = dart.constFn(async.Completer$(image_provider.AssetBundleImageKey)))();
  var SynchronousFutureOfMapNOfString$ListOfString = () => (SynchronousFutureOfMapNOfString$ListOfString = dart.constFn(synchronous_future.SynchronousFuture$(MapNOfString$ListOfString())))();
  var MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  var LinkedHashMapOfString$ListOfString = () => (LinkedHashMapOfString$ListOfString = dart.constFn(collection.LinkedHashMap$(core.String, ListOfString())))();
  var StringToListOfString = () => (StringToListOfString = dart.constFn(dart.fnType(ListOfString(), [core.String])))();
  var SplayTreeMapOfdouble$String = () => (SplayTreeMapOfdouble$String = dart.constFn(collection.SplayTreeMap$(core.double, core.String)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/image_resolution.dart";
  var L1 = "package:flutter/src/painting/image_resolution.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(image_resolution.AssetImage._manifestParser, StringNToFutureOfMapNOfString$ListOfString());
    }
  }, false);
  var C0;
  var _chooseVariant = dart.privateName(image_resolution, "_chooseVariant");
  var _parseScale = dart.privateName(image_resolution, "_parseScale");
  var _findBestVariant = dart.privateName(image_resolution, "_findBestVariant");
  var assetName$ = dart.privateName(image_resolution, "AssetImage.assetName");
  var bundle$ = dart.privateName(image_resolution, "AssetImage.bundle");
  var package$ = dart.privateName(image_resolution, "AssetImage.package");
  image_resolution.AssetImage = class AssetImage extends image_provider.AssetBundleImageProvider {
    get assetName() {
      return this[assetName$];
    }
    set assetName(value) {
      super.assetName = value;
    }
    get bundle() {
      return this[bundle$];
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
      let t0, t0$;
      if (configuration == null) dart.nullFailed(L0, 203, 60, "configuration");
      let chosenBundle = (t0$ = (t0 = this.bundle, t0 == null ? configuration.bundle : t0), t0$ == null ? asset_bundle.rootBundle : t0$);
      let completer = null;
      let result = null;
      chosenBundle.loadStructuredData(MapNOfString$ListOfString(), "AssetManifest.json", C0 || CT.C0).then(dart.void, dart.fn(manifest => {
        let chosenName = dart.nullCheck(this[_chooseVariant](this.keyName, configuration, manifest == null ? null : manifest[$_get](this.keyName)));
        let chosenScale = this[_parseScale](chosenName);
        let key = new image_provider.AssetBundleImageKey.new({bundle: chosenBundle, name: chosenName, scale: chosenScale});
        if (completer != null) {
          completer.complete(key);
        } else {
          result = new (SynchronousFutureOfAssetBundleImageKey()).new(key);
        }
      }, MapNOfString$ListOfStringToNull())).catchError(dart.fn((error, stack) => {
        if (error == null) dart.nullFailed(L0, 240, 26, "error");
        if (stack == null) dart.nullFailed(L0, 240, 44, "stack");
        if (!(completer != null)) dart.assertFailed(null, L0, 243, 14, "completer != null");
        if (!(result == null)) dart.assertFailed(null, L0, 244, 14, "result == null");
        dart.nullCheck(completer).completeError(error, stack);
      }, ObjectAndStackTraceToNull()));
      if (result != null) {
        return dart.nullCheck(result);
      }
      completer = CompleterOfAssetBundleImageKey().new();
      return completer.future;
    }
    static _manifestParser(jsonData) {
      if (jsonData == null) return new (SynchronousFutureOfMapNOfString$ListOfString()).new(null);
      let parsedJson = MapOfString$dynamic().as(convert.json.decode(jsonData));
      let keys = parsedJson[$keys];
      let parsedManifest = LinkedHashMapOfString$ListOfString().fromIterables(keys, keys[$map](ListOfString(), dart.fn(key => {
        if (key == null) dart.nullFailed(L0, 266, 42, "key");
        return ListOfString().from(core.List.as(parsedJson[$_get](key)));
      }, StringToListOfString())));
      return new (SynchronousFutureOfMapNOfString$ListOfString()).new(parsedManifest);
    }
    [_chooseVariant](main, config, candidates) {
      if (main == null) dart.nullFailed(L0, 271, 33, "main");
      if (config == null) dart.nullFailed(L0, 271, 58, "config");
      if (config.devicePixelRatio == null || candidates == null || dart.test(candidates[$isEmpty])) return main;
      let mapping = new (SplayTreeMapOfdouble$String()).new();
      for (let candidate of candidates)
        mapping._set(this[_parseScale](candidate), candidate);
      return this[_findBestVariant](mapping, dart.nullCheck(config.devicePixelRatio));
    }
    [_findBestVariant](candidates, value) {
      if (candidates == null) dart.nullFailed(L0, 296, 57, "candidates");
      if (value == null) dart.nullFailed(L0, 296, 76, "value");
      if (dart.test(candidates.containsKey(value))) return dart.nullCheck(candidates._get(value));
      let lower = candidates.lastKeyBefore(value);
      let upper = candidates.firstKeyAfter(value);
      if (lower == null) return candidates._get(upper);
      if (upper == null) return candidates._get(lower);
      if (dart.notNull(value) < 2 || dart.notNull(value) > (dart.notNull(lower) + dart.notNull(upper)) / 2)
        return candidates._get(upper);
      else
        return candidates._get(lower);
    }
    [_parseScale](key) {
      if (key == null) dart.nullFailed(L0, 318, 29, "key");
      if (key == this.assetName) {
        return 1;
      }
      let assetUri = core.Uri.parse(key);
      let directoryPath = "";
      if (dart.notNull(assetUri.pathSegments[$length]) > 1) {
        directoryPath = assetUri.pathSegments[$_get](dart.notNull(assetUri.pathSegments[$length]) - 2);
      }
      let match = image_resolution.AssetImage._extractRatioRegExp.firstMatch(directoryPath);
      if (match != null && dart.notNull(match.groupCount) > 0) return core.double.parse(dart.nullCheck(match.group(1)));
      return 1;
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return image_resolution.AssetImage.is(other) && other.keyName == this.keyName && dart.equals(other.bundle, this.bundle);
    }
    get hashCode() {
      return ui.hashValues(this.keyName, this.bundle);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "AssetImage")) + "(bundle: " + dart.str(this.bundle) + ", name: \"" + dart.str(this.keyName) + "\")";
    }
  };
  (image_resolution.AssetImage.new = function(assetName, opts) {
    if (assetName == null) dart.nullFailed(L0, 171, 10, "assetName");
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let $package = opts && 'package' in opts ? opts.package : null;
    this[assetName$] = assetName;
    this[bundle$] = bundle;
    this[package$] = $package;
    if (!(assetName != null)) dart.assertFailed(null, L0, 174, 15, "assetName != null");
    image_resolution.AssetImage.__proto__.new.call(this);
    ;
  }).prototype = image_resolution.AssetImage.prototype;
  dart.addTypeTests(image_resolution.AssetImage);
  dart.addTypeCaches(image_resolution.AssetImage);
  dart.setMethodSignature(image_resolution.AssetImage, () => ({
    __proto__: dart.getMethods(image_resolution.AssetImage.__proto__),
    obtainKey: dart.fnType(async.Future$(image_provider.AssetBundleImageKey), [image_provider.ImageConfiguration]),
    [_chooseVariant]: dart.fnType(dart.nullable(core.String), [core.String, image_provider.ImageConfiguration, dart.nullable(core.List$(core.String))]),
    [_findBestVariant]: dart.fnType(dart.nullable(core.String), [collection.SplayTreeMap$(core.double, core.String), core.double]),
    [_parseScale]: dart.fnType(core.double, [core.String])
  }));
  dart.setGetterSignature(image_resolution.AssetImage, () => ({
    __proto__: dart.getGetters(image_resolution.AssetImage.__proto__),
    keyName: core.String
  }));
  dart.setLibraryUri(image_resolution.AssetImage, L1);
  dart.setFieldSignature(image_resolution.AssetImage, () => ({
    __proto__: dart.getFields(image_resolution.AssetImage.__proto__),
    assetName: dart.finalFieldType(core.String),
    bundle: dart.finalFieldType(dart.nullable(asset_bundle.AssetBundle)),
    package: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionMethods(image_resolution.AssetImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(image_resolution.AssetImage, ['hashCode']);
  dart.defineLazy(image_resolution.AssetImage, {
    /*image_resolution.AssetImage._naturalResolution*/get _naturalResolution() {
      return 1;
    },
    /*image_resolution.AssetImage._extractRatioRegExp*/get _extractRatioRegExp() {
      return core.RegExp.new("/?(\\d+(\\.\\d*)?)x$");
    }
  }, false);
  dart.defineLazy(image_resolution, {
    /*image_resolution._kAssetManifestFileName*/get _kAssetManifestFileName() {
      return "AssetManifest.json";
    },
    /*image_resolution._kLowDprLimit*/get _kLowDprLimit() {
      return 2;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/painting/image_resolution.dart", {
    "package:flutter/src/painting/image_resolution.dart": image_resolution
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["image_resolution.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/image_resolution.dart.lib.js"}');
  // Exports:
  return {
    src__painting__image_resolution: image_resolution
  };
}));

//# sourceMappingURL=image_resolution.dart.lib.js.map
