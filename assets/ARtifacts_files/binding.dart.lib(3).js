define(['dart_sdk', 'packages/flutter/src/painting/image_cache.dart', 'packages/flutter/src/services/system_channels.dart', 'packages/flutter/src/foundation/binding.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/painting/shader_warm_up.dart'], (function load__packages__flutter__src__painting__binding_dart(dart_sdk, packages__flutter__src__painting__image_cache$46dart, packages__flutter__src__services__system_channels$46dart, packages__flutter__src__foundation__binding$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__painting__shader_warm_up$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const image_cache = packages__flutter__src__painting__image_cache$46dart.src__painting__image_cache;
  const binding = packages__flutter__src__services__system_channels$46dart.src__services__binding;
  const binding$ = packages__flutter__src__foundation__binding$46dart.src__foundation__binding;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const shader_warm_up = packages__flutter__src__painting__shader_warm_up$46dart.src__painting__shader_warm_up;
  var binding$0 = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var LinkedHashSetOfVoidTovoid = () => (LinkedHashSetOfVoidTovoid = dart.constFn(collection.LinkedHashSet$(VoidTovoid())))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/binding.dart";
  var L1 = "package:flutter/src/painting/binding.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 100,
        [OffsetBase__dx]: 100
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: shader_warm_up.DefaultShaderWarmUp.prototype,
        [DefaultShaderWarmUp_canvasSize]: C1 || CT.C1,
        [DefaultShaderWarmUp_drawCallSpacing]: 0
      });
    }
  }, false);
  var _imageCache = dart.privateName(binding$0, "_imageCache");
  var _systemFonts = dart.privateName(binding$0, "_systemFonts");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C1;
  var DefaultShaderWarmUp_canvasSize = dart.privateName(shader_warm_up, "DefaultShaderWarmUp.canvasSize");
  var DefaultShaderWarmUp_drawCallSpacing = dart.privateName(shader_warm_up, "DefaultShaderWarmUp.drawCallSpacing");
  var C0;
  const handleSystemMessage = Symbol("handleSystemMessage");
  binding$0.PaintingBinding = class PaintingBinding extends core.Object {
    static get instance() {
      return binding$0.PaintingBinding._instance;
    }
  };
  binding$0.PaintingBinding[dart.mixinOn] = _PaintingBinding$36BindingBase$36ServicesBinding => class PaintingBinding extends _PaintingBinding$36BindingBase$36ServicesBinding {
    initInstances() {
      let t0;
      super.initInstances();
      binding$0.PaintingBinding._instance = this;
      this[_imageCache] = this.createImageCache();
      t0 = binding$0.PaintingBinding.shaderWarmUp;
      t0 == null ? null : t0.execute();
    }
    get imageCache() {
      return this[_imageCache];
    }
    createImageCache() {
      return new image_cache.ImageCache.new();
    }
    instantiateImageCodec(bytes, opts) {
      if (bytes == null) dart.nullFailed(L0, 89, 52, "bytes");
      let cacheWidth = opts && 'cacheWidth' in opts ? opts.cacheWidth : null;
      let cacheHeight = opts && 'cacheHeight' in opts ? opts.cacheHeight : null;
      let allowUpscaling = opts && 'allowUpscaling' in opts ? opts.allowUpscaling : false;
      if (allowUpscaling == null) dart.nullFailed(L0, 92, 10, "allowUpscaling");
      if (!(cacheWidth == null || dart.notNull(cacheWidth) > 0)) dart.assertFailed(null, L0, 94, 12, "cacheWidth == null || cacheWidth > 0");
      if (!(cacheHeight == null || dart.notNull(cacheHeight) > 0)) dart.assertFailed(null, L0, 95, 12, "cacheHeight == null || cacheHeight > 0");
      if (!(allowUpscaling != null)) dart.assertFailed(null, L0, 96, 12, "allowUpscaling != null");
      return ui.instantiateImageCodec(bytes, {targetWidth: cacheWidth, targetHeight: cacheHeight, allowUpscaling: allowUpscaling});
    }
    evict(asset) {
      if (asset == null) dart.nullFailed(L0, 106, 21, "asset");
      super.evict(asset);
      dart.nullCheck(this.imageCache).clear();
      dart.nullCheck(this.imageCache).clearLiveImages();
    }
    handleMemoryPressure() {
      let t0;
      super.handleMemoryPressure();
      t0 = this.imageCache;
      t0 == null ? null : t0.clear();
    }
    get systemFonts() {
      return this[_systemFonts];
    }
    handleSystemMessage(systemMessage) {
      if (systemMessage == null) dart.nullFailed(L0, 131, 43, "systemMessage");
      return async.async(dart.void, (function* handleSystemMessage$() {
        yield this[handleSystemMessage](systemMessage);
        let message = MapOfString$dynamic().as(systemMessage);
        let type = core.String.as(message[$_get]("type"));
        switch (type) {
          case "fontsChange":
          {
            this[_systemFonts].notifyListeners();
            break;
          }
        }
        return;
      }).bind(this));
    }
    [handleSystemMessage](systemMessage) {
      return super.handleSystemMessage(systemMessage);
    }
  };
  (binding$0.PaintingBinding[dart.mixinNew] = function() {
    this[_imageCache] = null;
    this[_systemFonts] = new binding$0._SystemFontsNotifier.new();
  }).prototype = binding$0.PaintingBinding.prototype;
  dart.addTypeTests(binding$0.PaintingBinding);
  dart.addTypeCaches(binding$0.PaintingBinding);
  binding$0.PaintingBinding[dart.implements] = () => [binding.ServicesBinding, binding$.BindingBase];
  dart.setMethodSignature(binding$0.PaintingBinding, () => ({
    __proto__: dart.getMethods(binding$0.PaintingBinding.__proto__),
    initInstances: dart.fnType(dart.void, []),
    createImageCache: dart.fnType(image_cache.ImageCache, []),
    instantiateImageCodec: dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {}),
    evict: dart.fnType(dart.void, [core.String]),
    handleMemoryPressure: dart.fnType(dart.void, []),
    handleSystemMessage: dart.fnType(async.Future$(dart.void), [core.Object])
  }));
  dart.setGetterSignature(binding$0.PaintingBinding, () => ({
    __proto__: dart.getGetters(binding$0.PaintingBinding.__proto__),
    imageCache: dart.nullable(image_cache.ImageCache),
    systemFonts: change_notifier.Listenable
  }));
  dart.setLibraryUri(binding$0.PaintingBinding, L1);
  dart.setFieldSignature(binding$0.PaintingBinding, () => ({
    __proto__: dart.getFields(binding$0.PaintingBinding.__proto__),
    [_imageCache]: dart.fieldType(dart.nullable(image_cache.ImageCache)),
    [_systemFonts]: dart.finalFieldType(binding$0._SystemFontsNotifier)
  }));
  dart.defineLazy(binding$0.PaintingBinding, {
    /*binding$0.PaintingBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {},
    /*binding$0.PaintingBinding.shaderWarmUp*/get shaderWarmUp() {
      return C0 || CT.C0;
    },
    set shaderWarmUp(_) {}
  }, false);
  var _systemFontsCallbacks = dart.privateName(binding$0, "_systemFontsCallbacks");
  binding$0._SystemFontsNotifier = class _SystemFontsNotifier extends change_notifier.Listenable {
    notifyListeners() {
      for (let callback of this[_systemFontsCallbacks]) {
        callback();
      }
    }
    addListener(listener) {
      if (listener == null) dart.nullFailed(L0, 154, 33, "listener");
      this[_systemFontsCallbacks].add(listener);
    }
    removeListener(listener) {
      if (listener == null) dart.nullFailed(L0, 158, 36, "listener");
      this[_systemFontsCallbacks].remove(listener);
    }
  };
  (binding$0._SystemFontsNotifier.new = function() {
    this[_systemFontsCallbacks] = LinkedHashSetOfVoidTovoid().new();
    binding$0._SystemFontsNotifier.__proto__.new.call(this);
    ;
  }).prototype = binding$0._SystemFontsNotifier.prototype;
  dart.addTypeTests(binding$0._SystemFontsNotifier);
  dart.addTypeCaches(binding$0._SystemFontsNotifier);
  dart.setMethodSignature(binding$0._SystemFontsNotifier, () => ({
    __proto__: dart.getMethods(binding$0._SystemFontsNotifier.__proto__),
    notifyListeners: dart.fnType(dart.void, []),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(binding$0._SystemFontsNotifier, L1);
  dart.setFieldSignature(binding$0._SystemFontsNotifier, () => ({
    __proto__: dart.getFields(binding$0._SystemFontsNotifier.__proto__),
    [_systemFontsCallbacks]: dart.finalFieldType(core.Set$(dart.fnType(dart.void, [])))
  }));
  dart.copyProperties(binding$0, {
    get imageCache() {
      return dart.nullCheck(binding$0.PaintingBinding.instance).imageCache;
    }
  });
  dart.trackLibraries("packages/flutter/src/painting/binding.dart", {
    "package:flutter/src/painting/binding.dart": binding$0
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["binding.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4B0C;IAAS;;;;;AAP1B,MAAf;AACU,MAAhB,sCAAY;AACoB,MAAhC,oBAAc;AACS,WAAvB;0BAAc;IAChB;;AAoC8B;IAAW;;AAOR;IAAY;;UAoBI;UAC1C;UACA;UACA;;AAEL,YAAO,AAAW,AAAQ,UAAT,IAAI,QAAmB,aAAX,UAAU,IAAG;AAC1C,YAAO,AAAY,AAAQ,WAAT,IAAI,QAAoB,aAAZ,WAAW,IAAG;AAC5C,YAAO,AAAe,cAAD,IAAI;AACzB,YAAO,0BACL,KAAK,gBACQ,UAAU,gBACT,WAAW,kBACT,cAAc;IAElC;;UAGkB;AACE,MAAZ,YAAM,KAAK;AACE,MAAT,AAAE,eAAZ;AAC6B,MAAnB,AAAE,eAAZ;IACF;;;AAI8B,MAAtB;AACa,WAAnB;0BAAY;IACd;;AAW8B;IAAY;;UAIF;AAAR;AACgB,QAA9C,MAAY,0BAAoB,aAAa;AAClB,sBAAwB,yBAAd,aAAa;AACrC,mBAAuB,eAAhB,AAAO,OAAA,QAAC;AAC5B,gBAAQ,IAAI;;;AAEsB,YAA9B,AAAa;AACb;;;AAEJ;MACF;;;;;;;IA9EY;IAiEe,qBAAe;;;;;;;;;;;;;;;;;;;;;;;;;;MAlGlB,mCAAS;;;;MAuBZ,sCAAY;;;;;;;;AA+F/B,eAAwB,WAAY;AACxB,QAAV,AAAQ,QAAA;;IAEZ;;UAG8B;AACO,MAAnC,AAAsB,gCAAI,QAAQ;IACpC;;UAEiC;AACO,MAAtC,AAAsB,mCAAO,QAAQ;IACvC;;;IAfwB,8BAAsC;;;EAgBhE;;;;;;;;;;;;;;;;AAS8B,YAAwB,AAAE,gBAAV;IAAoB","file":"../../../../../../../../../../packages/flutter/src/painting/binding.dart.lib.js"}');
  // Exports:
  return {
    src__painting__binding: binding$0
  };
}));

//# sourceMappingURL=binding.dart.lib.js.map
