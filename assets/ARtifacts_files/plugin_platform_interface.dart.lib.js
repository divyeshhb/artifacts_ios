define(['dart_sdk'], (function load__packages__plugin_platform_interface__plugin_platform_interface_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var plugin_platform_interface = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var MockPlatformInterfaceMixinL = () => (MockPlatformInterfaceMixinL = dart.constFn(dart.legacy(plugin_platform_interface.MockPlatformInterfaceMixin)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var VoidToboolL = () => (VoidToboolL = dart.constFn(dart.fnType(boolL(), [])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/plugin_platform_interface-1.0.3/lib/plugin_platform_interface.dart";
  var L1 = "package:plugin_platform_interface/plugin_platform_interface.dart";
  var _instanceToken = dart.privateName(plugin_platform_interface, "_instanceToken");
  plugin_platform_interface.PlatformInterface = class PlatformInterface extends core.Object {
    static verifyToken(instance, token) {
      if (MockPlatformInterfaceMixinL().is(instance)) {
        let assertionsEnabled = false;
        if (!dart.test(dart.fn(() => {
          assertionsEnabled = true;
          return true;
        }, VoidToboolL())())) dart.assertFailed(null, L0, 62, 14, "() {\n        assertionsEnabled = true;\n        return true;\n      }()");
        if (!assertionsEnabled) {
          dart.throw(new core.AssertionError.new("`MockPlatformInterfaceMixin` is not intended for use in release builds."));
        }
        return;
      }
      if (!core.identical(token, instance[_instanceToken])) {
        dart.throw(new core.AssertionError.new("Platform interfaces must not be implemented with `implements`"));
      }
    }
  };
  (plugin_platform_interface.PlatformInterface.new = function(opts) {
    let token = opts && 'token' in opts ? opts.token : null;
    this[_instanceToken] = token;
    ;
  }).prototype = plugin_platform_interface.PlatformInterface.prototype;
  dart.addTypeTests(plugin_platform_interface.PlatformInterface);
  dart.addTypeCaches(plugin_platform_interface.PlatformInterface);
  dart.setLibraryUri(plugin_platform_interface.PlatformInterface, L1);
  dart.setFieldSignature(plugin_platform_interface.PlatformInterface, () => ({
    __proto__: dart.getFields(plugin_platform_interface.PlatformInterface.__proto__),
    [_instanceToken]: dart.finalFieldType(dart.legacy(core.Object))
  }));
  plugin_platform_interface.MockPlatformInterfaceMixin = class MockPlatformInterfaceMixin extends core.Object {};
  (plugin_platform_interface.MockPlatformInterfaceMixin.new = function() {
    ;
  }).prototype = plugin_platform_interface.MockPlatformInterfaceMixin.prototype;
  dart.addTypeTests(plugin_platform_interface.MockPlatformInterfaceMixin);
  dart.addTypeCaches(plugin_platform_interface.MockPlatformInterfaceMixin);
  plugin_platform_interface.MockPlatformInterfaceMixin[dart.implements] = () => [plugin_platform_interface.PlatformInterface];
  dart.setLibraryUri(plugin_platform_interface.MockPlatformInterfaceMixin, L1);
  dart.trackLibraries("packages/plugin_platform_interface/plugin_platform_interface.dart", {
    "package:plugin_platform_interface/plugin_platform_interface.dart": plugin_platform_interface
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["plugin_platform_interface.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;uBA0D4C,UAAiB;AACzD,UAAa,iCAAT,QAAQ;AACL,gCAAoB;AACzB,uBAAO,AAGN;AAFyB,UAAxB,oBAAoB;AACpB,gBAAO;;AAET,aAAK,iBAAiB;AAE0D,UAD9E,WAAM,4BACF;;AAEN;;AAEF,0BAAe,KAAK,EAAE,AAAS,QAAD;AAEwC,QADpE,WAAM,4BACF;;IAER;;;QAhCoC;IAAyB,uBAAE,KAAK;;;;;;;;;;;;;EAkDE","file":"../../../../../../../../../../packages/plugin_platform_interface/plugin_platform_interface.dart.lib.js"}');
  // Exports:
  return {
    plugin_platform_interface: plugin_platform_interface
  };
}));

//# sourceMappingURL=plugin_platform_interface.dart.lib.js.map
