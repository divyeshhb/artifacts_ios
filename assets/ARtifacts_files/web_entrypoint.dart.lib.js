define(['dart_sdk', 'packages/artif/generated_plugin_registrant.dart', 'packages/flutter_web_plugins/src/plugin_registry.dart', 'packages/artif/main.dart'], (function load__web_entrypoint_dart(dart_sdk, packages__artif__generated_plugin_registrant$46dart, packages__flutter_web_plugins__src__plugin_registry$46dart, packages__artif__main$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const generated_plugin_registrant = packages__artif__generated_plugin_registrant$46dart.generated_plugin_registrant;
  const plugin_registry = packages__flutter_web_plugins__src__plugin_registry$46dart.src__plugin_registry;
  const main = packages__artif__main$46dart.main;
  var web_entrypoint = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(StringL())))();
  var ListLOfStringL = () => (ListLOfStringL = dart.constFn(dart.legacy(ListOfStringL())))();
  var ListLOfStringLTodynamic = () => (ListLOfStringLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [ListLOfStringL()])))();
  var ListLOfStringLToLdynamic = () => (ListLOfStringLToLdynamic = dart.constFn(dart.legacy(ListLOfStringLTodynamic())))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(main.main, VoidTovoid());
    }
  }, false);
  var C0;
  web_entrypoint.main = function main$() {
    return async.async(dart.void, function* main() {
      generated_plugin_registrant.registerPlugins(plugin_registry.webPluginRegistrar);
      yield ui.webOnlyInitializePlatform();
      if (ListLOfStringLToLdynamic().is(C0 || CT.C0)) {
        return ListLOfStringLToLdynamic().as(C0 || CT.C0)(JSArrayOfStringL().of([]));
      }
      return (C0 || CT.C0)();
    });
  };
  dart.trackLibraries("web_entrypoint.dart", {
    "org-dartlang-app:/web_entrypoint.dart": web_entrypoint
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["web_entrypoint.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYiB;AACoB,MAAnC,4CAAgB;AACoB,MAApC,MAAM;AACN,UAAoB,8BAGI;AAFtB,cAAwB,AAAkB,+BAEpB,aAF6B;;AAErD,YAA4C,EAApB;IAC1B","file":"web_entrypoint.dart.lib.js"}');
  // Exports:
  return {
    web_entrypoint: web_entrypoint
  };
}));

//# sourceMappingURL=web_entrypoint.dart.lib.js.map
