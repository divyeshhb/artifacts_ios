define(['dart_sdk', 'packages/flutter/src/services/system_channels.dart', 'packages/platform/src/interface/local_platform.dart', 'packages/plugin_platform_interface/plugin_platform_interface.dart', 'packages/path_provider_platform_interface/src/enums.dart', 'packages/platform/src/interface/platform.dart'], (function load__packages__path_provider_platform_interface__src__method_channel_path_provider_dart(dart_sdk, packages__flutter__src__services__system_channels$46dart, packages__platform__src__interface__local_platform$46dart, packages__plugin_platform_interface__plugin_platform_interface$46dart, packages__path_provider_platform_interface__src__enums$46dart, packages__platform__src__interface__platform$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform_channel = packages__flutter__src__services__system_channels$46dart.src__services__platform_channel;
  const local_platform = packages__platform__src__interface__local_platform$46dart.src__interface__local_platform;
  const plugin_platform_interface = packages__plugin_platform_interface__plugin_platform_interface$46dart.plugin_platform_interface;
  const enums = packages__path_provider_platform_interface__src__enums$46dart.src__enums;
  const platform = packages__platform__src__interface__platform$46dart.src__interface__platform;
  var method_channel_path_provider = Object.create(dart.library);
  var path_provider_platform_interface = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(StringL())))();
  var ListLOfStringL = () => (ListLOfStringL = dart.constFn(dart.legacy(ListOfStringL())))();
  const CT = Object.create(null);
  var L0 = "package:path_provider_platform_interface/path_provider_platform_interface.dart";
  var L1 = "package:path_provider_platform_interface/src/method_channel_path_provider.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: local_platform.LocalPlatform.prototype
      });
    }
  }, false);
  var _platform = dart.privateName(method_channel_path_provider, "_platform");
  var C0;
  path_provider_platform_interface.PathProviderPlatform = class PathProviderPlatform extends plugin_platform_interface.PlatformInterface {
    static get instance() {
      return path_provider_platform_interface.PathProviderPlatform._instance;
    }
    static set instance(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, path_provider_platform_interface.PathProviderPlatform._token);
      path_provider_platform_interface.PathProviderPlatform._instance = instance;
    }
    getTemporaryPath() {
      dart.throw(new core.UnimplementedError.new("getTemporaryPath() has not been implemented."));
    }
    getApplicationSupportPath() {
      dart.throw(new core.UnimplementedError.new("getApplicationSupportPath() has not been implemented."));
    }
    getLibraryPath() {
      dart.throw(new core.UnimplementedError.new("getLibraryPath() has not been implemented."));
    }
    getApplicationDocumentsPath() {
      dart.throw(new core.UnimplementedError.new("getApplicationDocumentsPath() has not been implemented."));
    }
    getExternalStoragePath() {
      dart.throw(new core.UnimplementedError.new("getExternalStoragePath() has not been implemented."));
    }
    getExternalCachePaths() {
      dart.throw(new core.UnimplementedError.new("getExternalCachePaths() has not been implemented."));
    }
    getExternalStoragePaths(opts) {
      let type = opts && 'type' in opts ? opts.type : null;
      dart.throw(new core.UnimplementedError.new("getExternalStoragePaths() has not been implemented."));
    }
    getDownloadsPath() {
      dart.throw(new core.UnimplementedError.new("getDownloadsPath() has not been implemented."));
    }
  };
  (path_provider_platform_interface.PathProviderPlatform.new = function() {
    path_provider_platform_interface.PathProviderPlatform.__proto__.new.call(this, {token: path_provider_platform_interface.PathProviderPlatform._token});
    ;
  }).prototype = path_provider_platform_interface.PathProviderPlatform.prototype;
  dart.addTypeTests(path_provider_platform_interface.PathProviderPlatform);
  dart.addTypeCaches(path_provider_platform_interface.PathProviderPlatform);
  dart.setMethodSignature(path_provider_platform_interface.PathProviderPlatform, () => ({
    __proto__: dart.getMethods(path_provider_platform_interface.PathProviderPlatform.__proto__),
    getTemporaryPath: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), []),
    getApplicationSupportPath: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), []),
    getLibraryPath: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), []),
    getApplicationDocumentsPath: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), []),
    getExternalStoragePath: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), []),
    getExternalCachePaths: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.List$(dart.legacy(core.String))))), []),
    getExternalStoragePaths: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.List$(dart.legacy(core.String))))), [], {type: dart.legacy(enums.StorageDirectory)}, {}),
    getDownloadsPath: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), [])
  }));
  dart.setLibraryUri(path_provider_platform_interface.PathProviderPlatform, L0);
  dart.defineLazy(path_provider_platform_interface.PathProviderPlatform, {
    /*path_provider_platform_interface.PathProviderPlatform._token*/get _token() {
      return new core.Object.new();
    },
    /*path_provider_platform_interface.PathProviderPlatform._instance*/get _instance() {
      return new method_channel_path_provider.MethodChannelPathProvider.new();
    },
    set _instance(_) {}
  }, true);
  var methodChannel = dart.privateName(method_channel_path_provider, "MethodChannelPathProvider.methodChannel");
  method_channel_path_provider.MethodChannelPathProvider = class MethodChannelPathProvider extends path_provider_platform_interface.PathProviderPlatform {
    get methodChannel() {
      return this[methodChannel];
    }
    set methodChannel(value) {
      this[methodChannel] = value;
    }
    setMockPathProviderPlatform(platform) {
      this[_platform] = platform;
    }
    getTemporaryPath() {
      return this.methodChannel.invokeMethod(StringL(), "getTemporaryDirectory");
    }
    getApplicationSupportPath() {
      return this.methodChannel.invokeMethod(StringL(), "getApplicationSupportDirectory");
    }
    getLibraryPath() {
      if (!dart.test(this[_platform].isIOS) && !dart.test(this[_platform].isMacOS)) {
        dart.throw(new core.UnsupportedError.new("Functionality only available on iOS/macOS"));
      }
      return this.methodChannel.invokeMethod(StringL(), "getLibraryDirectory");
    }
    getApplicationDocumentsPath() {
      return this.methodChannel.invokeMethod(StringL(), "getApplicationDocumentsDirectory");
    }
    getExternalStoragePath() {
      if (!dart.test(this[_platform].isAndroid)) {
        dart.throw(new core.UnsupportedError.new("Functionality only available on Android"));
      }
      return this.methodChannel.invokeMethod(StringL(), "getStorageDirectory");
    }
    getExternalCachePaths() {
      if (!dart.test(this[_platform].isAndroid)) {
        dart.throw(new core.UnsupportedError.new("Functionality only available on Android"));
      }
      return this.methodChannel.invokeListMethod(StringL(), "getExternalCacheDirectories");
    }
    getExternalStoragePaths(opts) {
      let type = opts && 'type' in opts ? opts.type : null;
      return async.async(ListLOfStringL(), (function* getExternalStoragePaths() {
        let t0;
        if (!dart.test(this[_platform].isAndroid)) {
          dart.throw(new core.UnsupportedError.new("Functionality only available on Android"));
        }
        return this.methodChannel.invokeListMethod(StringL(), "getExternalStorageDirectories", new (IdentityMapOfStringL$dynamic()).from(["type", (t0 = type, t0 == null ? null : t0.index)]));
      }).bind(this));
    }
    getDownloadsPath() {
      if (!dart.test(this[_platform].isMacOS)) {
        dart.throw(new core.UnsupportedError.new("Functionality only available on macOS"));
      }
      return this.methodChannel.invokeMethod(StringL(), "getDownloadsDirectory");
    }
  };
  (method_channel_path_provider.MethodChannelPathProvider.new = function() {
    this[methodChannel] = new platform_channel.MethodChannel.new("plugins.flutter.io/path_provider");
    this[_platform] = C0 || CT.C0;
    method_channel_path_provider.MethodChannelPathProvider.__proto__.new.call(this);
    ;
  }).prototype = method_channel_path_provider.MethodChannelPathProvider.prototype;
  dart.addTypeTests(method_channel_path_provider.MethodChannelPathProvider);
  dart.addTypeCaches(method_channel_path_provider.MethodChannelPathProvider);
  dart.setMethodSignature(method_channel_path_provider.MethodChannelPathProvider, () => ({
    __proto__: dart.getMethods(method_channel_path_provider.MethodChannelPathProvider.__proto__),
    setMockPathProviderPlatform: dart.fnType(dart.void, [dart.legacy(platform.Platform)])
  }));
  dart.setLibraryUri(method_channel_path_provider.MethodChannelPathProvider, L1);
  dart.setFieldSignature(method_channel_path_provider.MethodChannelPathProvider, () => ({
    __proto__: dart.getFields(method_channel_path_provider.MethodChannelPathProvider.__proto__),
    methodChannel: dart.fieldType(dart.legacy(platform_channel.MethodChannel)),
    [_platform]: dart.fieldType(dart.legacy(platform.Platform))
  }));
  dart.trackLibraries("packages/path_provider_platform_interface/src/method_channel_path_provider.dart", {
    "package:path_provider_platform_interface/src/method_channel_path_provider.dart": method_channel_path_provider,
    "package:path_provider_platform_interface/path_provider_platform_interface.dart": path_provider_platform_interface
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../path_provider_platform_interface.dart","method_channel_path_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+B8C;IAAS;wBAIZ;AACQ,MAA7B,wDAAY,QAAQ,EAAE;AACpB,MAApB,kEAAY,QAAQ;IACtB;;AAK0E,MAAxE,WAAM,gCAAmB;IAC3B;;AAM8D,MAD5D,WAAM,gCACF;IACN;;AAKwE,MAAtE,WAAM,gCAAmB;IAC3B;;AAMgE,MAD9D,WAAM,gCACF;IACN;;AAO2D,MADzD,WAAM,gCACF;IACN;;AAQ0D,MADxD,WAAM,gCACF;IACN;;UAQmB;AAGyC,MAD1D,WAAM,gCACF;IACN;;AAK0E,MAAxE,WAAM,gCAAmB;IAC3B;;;AA7EyB,2FAAa;;EAAO;;;;;;;;;;;;;;;;MAEzB,4DAAM;YAAG;;MAED,+DAAS;YAAG;;;;;;ICT1B;;;;;;gCAW4B;AACpB,MAApB,kBAAY,QAAQ;IACtB;;AAGE,YAAO,AAAc,4CAAqB;IAC5C;;AAGE,YAAO,AAAc,4CAAqB;IAC5C;;AAGE,qBAAK,AAAU,qCAAU,AAAU;AACkC,QAAnE,WAAM,8BAAiB;;AAEzB,YAAO,AAAc,4CAAqB;IAC5C;;AAGE,YAAO,AACF,4CAAqB;IAC5B;;AAGE,qBAAK,AAAU;AACoD,QAAjE,WAAM,8BAAiB;;AAEzB,YAAO,AAAc,4CAAqB;IAC5C;;AAGE,qBAAK,AAAU;AACoD,QAAjE,WAAM,8BAAiB;;AAEzB,YAAO,AACF,gDAAyB;IAChC;;UAGmB;AADyB;;AAG1C,uBAAK,AAAU;AACoD,UAAjE,WAAM,8BAAiB;;AAEzB,cAAO,AAAc,gDACnB,iCACiB,2CAAC,cAAQ,IAAI,eAAJ,OAAM;MAEpC;;;AAGE,qBAAK,AAAU;AACkD,QAA/D,WAAM,8BAAiB;;AAEzB,YAAO,AAAc,4CAAqB;IAC5C;;;IAnEc,sBACV,uCAAc;IAKT;;;EA8DX","file":"../../../../../../../../../../../packages/path_provider_platform_interface/src/method_channel_path_provider.dart.lib.js"}');
  // Exports:
  return {
    src__method_channel_path_provider: method_channel_path_provider,
    path_provider_platform_interface: path_provider_platform_interface
  };
}));

//# sourceMappingURL=method_channel_path_provider.dart.lib.js.map
