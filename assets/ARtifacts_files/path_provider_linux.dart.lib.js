define(['dart_sdk', 'packages/path_provider_platform_interface/src/method_channel_path_provider.dart', 'packages/path/src/path_set.dart', 'packages/xdg_directories/xdg_directories.dart'], (function load__packages__path_provider_linux__path_provider_linux_dart(dart_sdk, packages__path_provider_platform_interface__src__method_channel_path_provider$46dart, packages__path__src__path_set$46dart, packages__xdg_directories__xdg_directories$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const io = dart_sdk.io;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const path_provider_platform_interface = packages__path_provider_platform_interface__src__method_channel_path_provider$46dart.path_provider_platform_interface;
  const path = packages__path__src__path_set$46dart.path;
  const xdg_directories = packages__xdg_directories__xdg_directories$46dart.xdg_directories;
  var path_provider_linux = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var FutureOfStringL = () => (FutureOfStringL = dart.constFn(async.Future$(StringL())))();
  const CT = Object.create(null);
  var L0 = "package:path_provider_linux/path_provider_linux.dart";
  path_provider_linux.PathProviderLinux = class PathProviderLinux extends path_provider_platform_interface.PathProviderPlatform {
    static register() {
      path_provider_platform_interface.PathProviderPlatform.instance = new path_provider_linux.PathProviderLinux.new();
    }
    getTemporaryPath() {
      return FutureOfStringL().value("/tmp");
    }
    getApplicationSupportPath() {
      return async.async(StringL(), function* getApplicationSupportPath() {
        let processName = path.basenameWithoutExtension(yield io.File.new("/proc/self/exe").resolveSymbolicLinks());
        let directory = io.Directory.new(path.join(xdg_directories.dataHome.path, processName));
        if (!dart.test(yield directory.exists())) {
          yield directory.create({recursive: true});
        }
        return directory.path;
      });
    }
    getApplicationDocumentsPath() {
      return FutureOfStringL().value(xdg_directories.getUserDirectory("DOCUMENTS").path);
    }
    getDownloadsPath() {
      return FutureOfStringL().value(xdg_directories.getUserDirectory("DOWNLOAD").path);
    }
  };
  (path_provider_linux.PathProviderLinux.new = function() {
    path_provider_linux.PathProviderLinux.__proto__.new.call(this);
    ;
  }).prototype = path_provider_linux.PathProviderLinux.prototype;
  dart.addTypeTests(path_provider_linux.PathProviderLinux);
  dart.addTypeCaches(path_provider_linux.PathProviderLinux);
  dart.setLibraryUri(path_provider_linux.PathProviderLinux, L0);
  dart.trackLibraries("packages/path_provider_linux/path_provider_linux.dart", {
    "package:path_provider_linux/path_provider_linux.dart": path_provider_linux
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["path_provider_linux.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;AAgBuD,MAA9B,iEAAW;IAClC;;AAIE,YAAc,yBAAM;IACtB;;AAGwC;AAChC,0BAAc,8BAChB,MAAM,AAAuB,YAAlB;AACT,wBAAY,iBAAU,UAAc,AAAS,+BAAM,WAAW;AAEpE,uBAAK,MAAM,AAAU,SAAD;AACqB,UAAvC,MAAM,AAAU,SAAD,oBAAmB;;AAEpC,cAAO,AAAU,UAAD;MAClB;;;AAIE,YAAc,yBAAM,AAAkC,iCAAb;IAC3C;;AAIE,YAAc,yBAAM,AAAiC,iCAAZ;IAC3C;;;;;EACF","file":"../../../../../../../../../../packages/path_provider_linux/path_provider_linux.dart.lib.js"}');
  // Exports:
  return {
    path_provider_linux: path_provider_linux
  };
}));

//# sourceMappingURL=path_provider_linux.dart.lib.js.map
