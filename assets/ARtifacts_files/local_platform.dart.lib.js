define(['dart_sdk', 'packages/platform/src/interface/platform.dart'], (function load__packages__platform__src__interface__local_platform_dart(dart_sdk, packages__platform__src__interface__platform$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const io = dart_sdk.io;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform = packages__platform__src__interface__platform$46dart.src__interface__platform;
  var local_platform = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "package:platform/src/interface/local_platform.dart";
  local_platform.LocalPlatform = class LocalPlatform extends platform.Platform {
    get numberOfProcessors() {
      return io.Platform.numberOfProcessors;
    }
    get pathSeparator() {
      return io.Platform.pathSeparator;
    }
    get operatingSystem() {
      return io.Platform.operatingSystem;
    }
    get operatingSystemVersion() {
      return io.Platform.operatingSystemVersion;
    }
    get localHostname() {
      return io.Platform.localHostname;
    }
    get environment() {
      return io.Platform.environment;
    }
    get executable() {
      return io.Platform.executable;
    }
    get resolvedExecutable() {
      return io.Platform.resolvedExecutable;
    }
    get script() {
      return io.Platform.script;
    }
    get executableArguments() {
      return io.Platform.executableArguments;
    }
    get packageRoot() {
      return io.Platform.packageRoot;
    }
    get packageConfig() {
      return io.Platform.packageConfig;
    }
    get version() {
      return io.Platform.version;
    }
    get stdinSupportsAnsi() {
      return io.stdin.supportsAnsiEscapes;
    }
    get stdoutSupportsAnsi() {
      return io.stdout.supportsAnsiEscapes;
    }
    get localeName() {
      return io.Platform.localeName;
    }
  };
  (local_platform.LocalPlatform.new = function() {
    local_platform.LocalPlatform.__proto__.new.call(this);
    ;
  }).prototype = local_platform.LocalPlatform.prototype;
  dart.addTypeTests(local_platform.LocalPlatform);
  dart.addTypeCaches(local_platform.LocalPlatform);
  dart.setGetterSignature(local_platform.LocalPlatform, () => ({
    __proto__: dart.getGetters(local_platform.LocalPlatform.__proto__),
    numberOfProcessors: dart.legacy(core.int),
    pathSeparator: dart.legacy(core.String),
    operatingSystem: dart.legacy(core.String),
    operatingSystemVersion: dart.legacy(core.String),
    localHostname: dart.legacy(core.String),
    environment: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))),
    executable: dart.legacy(core.String),
    resolvedExecutable: dart.legacy(core.String),
    script: dart.legacy(core.Uri),
    executableArguments: dart.legacy(core.List$(dart.legacy(core.String))),
    packageRoot: dart.legacy(core.String),
    packageConfig: dart.legacy(core.String),
    version: dart.legacy(core.String),
    stdinSupportsAnsi: dart.legacy(core.bool),
    stdoutSupportsAnsi: dart.legacy(core.bool),
    localeName: dart.legacy(core.String)
  }));
  dart.setLibraryUri(local_platform.LocalPlatform, L0);
  dart.trackLibraries("packages/platform/src/interface/local_platform.dart", {
    "package:platform/src/interface/local_platform.dart": local_platform
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["local_platform.dart"],"names":[],"mappings":";;;;;;;;;;;;;AAcgC,YAAY;IAAkB;;AAGhC,YAAY;IAAa;;AAGvB,YAAY;IAAe;;AAGpB,YAAY;IAAsB;;AAG3C,YAAY;IAAa;;AAGd,YAAY;IAAW;;AAGrC,YAAY;IAAU;;AAGd,YAAY;IAAkB;;AAG7C,YAAY;IAAM;;AAGI,YAAY;IAAmB;;AAG7C,YAAY;IAAW;;AAGrB,YAAY;IAAa;;AAG/B,YAAY;IAAO;;AAGX,YAAG,AAAM;IAAmB;;AAG3B,YAAG,AAAO;IAAmB;;AAGnC,YAAY;IAAU;;;AAhDzC;;EAAe","file":"../../../../../../../../../../../../packages/platform/src/interface/local_platform.dart.lib.js"}');
  // Exports:
  return {
    src__interface__local_platform: local_platform
  };
}));

//# sourceMappingURL=local_platform.dart.lib.js.map
