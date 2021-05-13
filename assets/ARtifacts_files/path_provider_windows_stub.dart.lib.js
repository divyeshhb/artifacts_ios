define(['dart_sdk', 'packages/path_provider_platform_interface/src/method_channel_path_provider.dart'], (function load__packages__path_provider_windows__src__path_provider_windows_stub_dart(dart_sdk, packages__path_provider_platform_interface__src__method_channel_path_provider$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const path_provider_platform_interface = packages__path_provider_platform_interface__src__method_channel_path_provider$46dart.path_provider_platform_interface;
  var path_provider_windows_stub = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/path_provider_windows-0.0.4+1/lib/src/path_provider_windows_stub.dart";
  var L1 = "package:path_provider_windows/src/path_provider_windows_stub.dart";
  var versionInfoQuerier = dart.privateName(path_provider_windows_stub, "PathProviderWindows.versionInfoQuerier");
  path_provider_windows_stub.PathProviderWindows = class PathProviderWindows extends path_provider_platform_interface.PathProviderPlatform {
    get versionInfoQuerier() {
      return this[versionInfoQuerier];
    }
    set versionInfoQuerier(value) {
      this[versionInfoQuerier] = value;
    }
    getPath(folderID) {
      return async.async(StringL(), function* getPath() {
        return "";
      });
    }
  };
  (path_provider_windows_stub.PathProviderWindows.new = function() {
    this[versionInfoQuerier] = null;
    path_provider_windows_stub.PathProviderWindows.__proto__.new.call(this);
    if (!false) dart.assertFailed(null, L0, 18, 12, "false");
  }).prototype = path_provider_windows_stub.PathProviderWindows.prototype;
  dart.addTypeTests(path_provider_windows_stub.PathProviderWindows);
  dart.addTypeCaches(path_provider_windows_stub.PathProviderWindows);
  dart.setMethodSignature(path_provider_windows_stub.PathProviderWindows, () => ({
    __proto__: dart.getMethods(path_provider_windows_stub.PathProviderWindows.__proto__),
    getPath: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(path_provider_windows_stub.PathProviderWindows, L1);
  dart.setFieldSignature(path_provider_windows_stub.PathProviderWindows, () => ({
    __proto__: dart.getFields(path_provider_windows_stub.PathProviderWindows.__proto__),
    versionInfoQuerier: dart.fieldType(dart.legacy(path_provider_windows_stub.VersionInfoQuerier))
  }));
  path_provider_windows_stub.VersionInfoQuerier = class VersionInfoQuerier extends core.Object {};
  (path_provider_windows_stub.VersionInfoQuerier.new = function() {
    ;
  }).prototype = path_provider_windows_stub.VersionInfoQuerier.prototype;
  dart.addTypeTests(path_provider_windows_stub.VersionInfoQuerier);
  dart.addTypeCaches(path_provider_windows_stub.VersionInfoQuerier);
  dart.setLibraryUri(path_provider_windows_stub.VersionInfoQuerier, L1);
  dart.trackLibraries("packages/path_provider_windows/src/path_provider_windows_stub.dart", {
    "package:path_provider_windows/src/path_provider_windows_stub.dart": path_provider_windows_stub
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["path_provider_windows_stub.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAqBqB;;;;;;YAIW;AAAR;AAA2B;MAAE;;;;IAJhC;AALnB;AACE,SAAO;EACT;;;;;;;;;;;;;;;EAYwB","file":"../../../../../../../../../../../packages/path_provider_windows/src/path_provider_windows_stub.dart.lib.js"}');
  // Exports:
  return {
    src__path_provider_windows_stub: path_provider_windows_stub
  };
}));

//# sourceMappingURL=path_provider_windows_stub.dart.lib.js.map
