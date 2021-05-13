define(['dart_sdk'], (function load__packages__platform__src__interface__platform_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var platform = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  const CT = Object.create(null);
  var L0 = "package:platform/src/interface/platform.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: convert.JsonEncoder.prototype,
        [JsonEncoder__toEncodable]: null,
        [JsonEncoder_indent]: "  "
      });
    }
  }, false);
  var JsonEncoder__toEncodable = dart.privateName(convert, "JsonEncoder._toEncodable");
  var JsonEncoder_indent = dart.privateName(convert, "JsonEncoder.indent");
  var C0;
  platform.Platform = class Platform extends core.Object {
    get isLinux() {
      return this.operatingSystem === "linux";
    }
    get isMacOS() {
      return this.operatingSystem === "macos";
    }
    get isWindows() {
      return this.operatingSystem === "windows";
    }
    get isAndroid() {
      return this.operatingSystem === "android";
    }
    get isIOS() {
      return this.operatingSystem === "ios";
    }
    get isFuchsia() {
      return this.operatingSystem === "fuchsia";
    }
    toJson() {
      return (C0 || CT.C0).convert(new (IdentityMapOfStringL$dynamic()).from(["numberOfProcessors", this.numberOfProcessors, "pathSeparator", this.pathSeparator, "operatingSystem", this.operatingSystem, "operatingSystemVersion", this.operatingSystemVersion, "localHostname", this.localHostname, "environment", this.environment, "executable", this.executable, "resolvedExecutable", this.resolvedExecutable, "script", dart.toString(this.script), "executableArguments", this.executableArguments, "packageRoot", this.packageRoot, "packageConfig", this.packageConfig, "version", this.version, "stdinSupportsAnsi", this.stdinSupportsAnsi, "stdoutSupportsAnsi", this.stdoutSupportsAnsi, "localeName", this.localeName]));
    }
  };
  (platform.Platform.new = function() {
    ;
  }).prototype = platform.Platform.prototype;
  dart.addTypeTests(platform.Platform);
  dart.addTypeCaches(platform.Platform);
  dart.setMethodSignature(platform.Platform, () => ({
    __proto__: dart.getMethods(platform.Platform.__proto__),
    toJson: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(platform.Platform, () => ({
    __proto__: dart.getGetters(platform.Platform.__proto__),
    isLinux: dart.legacy(core.bool),
    isMacOS: dart.legacy(core.bool),
    isWindows: dart.legacy(core.bool),
    isAndroid: dart.legacy(core.bool),
    isIOS: dart.legacy(core.bool),
    isFuchsia: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(platform.Platform, L0);
  dart.trackLibraries("packages/platform/src/interface/platform.dart", {
    "package:platform/src/interface/platform.dart": platform
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["platform.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;AA+BsB,YAAC,AAAgB,0BAAG;IAAQ;;AAG5B,YAAC,AAAgB,0BAAG;IAAQ;;AAG1B,YAAC,AAAgB,0BAAG;IAAU;;AAG9B,YAAC,AAAgB,0BAAG;IAAU;;AAGlC,YAAC,AAAgB,0BAAG;IAAM;;AAGtB,YAAC,AAAgB,0BAAG;IAAU;;AAoFlD,YAA0C,uBAAyB,2CACjE,sBAAsB,yBACtB,iBAAiB,oBACjB,mBAAmB,sBACnB,0BAA0B,6BAC1B,iBAAiB,oBACjB,eAAe,kBACf,cAAc,iBACd,sBAAsB,yBACtB,UAAiB,cAAP,cACV,uBAAuB,0BACvB,eAAe,kBACf,iBAAiB,oBACjB,WAAW,cACX,qBAAqB,wBACrB,sBAAsB,yBACtB,cAAc;IAElB;;;;EAzIgB","file":"../../../../../../../../../../../../packages/platform/src/interface/platform.dart.lib.js"}');
  // Exports:
  return {
    src__interface__platform: platform
  };
}));

//# sourceMappingURL=platform.dart.lib.js.map
