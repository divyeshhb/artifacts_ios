define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/services/system_channels.dart'], (function load__packages__flutter_web_plugins__src__plugin_registry_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__services__system_channels$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const binary_messenger = packages__flutter__src__services__system_channels$46dart.src__services__binary_messenger;
  var plugin_registry = Object.create(dart.library);
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(false);
  var ByteDataN = () => (ByteDataN = dart.constFn(dart.nullable(typed_data.ByteData)))();
  var FutureOfByteDataN = () => (FutureOfByteDataN = dart.constFn(async.Future$(ByteDataN())))();
  var FutureNOfByteDataN = () => (FutureNOfByteDataN = dart.constFn(dart.nullable(FutureOfByteDataN())))();
  var ByteDataNToFutureNOfByteDataN = () => (ByteDataNToFutureNOfByteDataN = dart.constFn(dart.fnType(FutureNOfByteDataN(), [ByteDataN()])))();
  var IdentityMapOfString$ByteDataNToFutureNOfByteDataN = () => (IdentityMapOfString$ByteDataNToFutureNOfByteDataN = dart.constFn(_js_helper.IdentityMap$(core.String, ByteDataNToFutureNOfByteDataN())))();
  var CompleterOfByteDataN = () => (CompleterOfByteDataN = dart.constFn(async.Completer$(ByteDataN())))();
  var ByteDataNTovoid = () => (ByteDataNTovoid = dart.constFn(dart.fnType(dart.void, [ByteDataN()])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter_web_plugins/lib/src/plugin_registry.dart";
  var L1 = "package:flutter_web_plugins/src/plugin_registry.dart";
  var _handlers = dart.privateName(plugin_registry, "_handlers");
  plugin_registry.Registrar = class Registrar extends binary_messenger.BinaryMessenger {
    registerMessageHandler() {
      ui.webOnlySetPluginHandler(dart.bind(this, 'handleFrameworkMessage'));
    }
    handlePlatformMessage(channel, data, callback) {
      if (channel == null) dart.nullFailed(L0, 78, 12, "channel");
      return this.handleFrameworkMessage(channel, data, callback);
    }
    handleFrameworkMessage(channel, data, callback) {
      if (channel == null) dart.nullFailed(L0, 107, 12, "channel");
      return async.async(dart.void, (function* handleFrameworkMessage() {
        let response = null;
        try {
          let handler = this[_handlers][$_get](channel);
          if (handler != null) {
            response = (yield handler(data));
          }
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "flutter web plugins", context: new assertions.ErrorDescription.new("during a framework-to-plugin message")}));
          } else
            throw e;
        } finally {
          if (callback != null) {
            callback(response);
          }
        }
      }).bind(this));
    }
    get messenger() {
      return this;
    }
    send(channel, message) {
      if (channel == null) dart.nullFailed(L0, 142, 33, "channel");
      let completer = CompleterOfByteDataN().new();
      dart.nullCheck(ui.window.onPlatformMessage)(channel, message, dart.fn(reply => {
        try {
          completer.complete(reply);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "flutter web plugins", context: new assertions.ErrorDescription.new("during a plugin-to-framework message")}));
          } else
            throw e;
        }
      }, ByteDataNTovoid()));
      return completer.future;
    }
    setMessageHandler(channel, handler) {
      if (channel == null) dart.nullFailed(L0, 160, 33, "channel");
      if (handler == null)
        this[_handlers][$remove](channel);
      else
        this[_handlers][$_set](channel, handler);
    }
    checkMessageHandler(channel, handler) {
      if (channel == null) dart.nullFailed(L0, 168, 35, "channel");
      return dart.equals(this[_handlers][$_get](channel), handler);
    }
    setMockMessageHandler(channel, handler) {
      if (channel == null) dart.nullFailed(L0, 172, 12, "channel");
      dart.throw(assertions.FlutterError.new("Setting mock handlers is not supported on the platform side."));
    }
    checkMockMessageHandler(channel, handler) {
      if (channel == null) dart.nullFailed(L0, 181, 39, "channel");
      dart.throw(assertions.FlutterError.new("Setting mock handlers is not supported on the platform side."));
    }
  };
  (plugin_registry.Registrar.new = function(binaryMessenger = null) {
    this[_handlers] = new (IdentityMapOfString$ByteDataNToFutureNOfByteDataN()).new();
    plugin_registry.Registrar.__proto__.new.call(this);
    ;
  }).prototype = plugin_registry.Registrar.prototype;
  dart.addTypeTests(plugin_registry.Registrar);
  dart.addTypeCaches(plugin_registry.Registrar);
  dart.setMethodSignature(plugin_registry.Registrar, () => ({
    __proto__: dart.getMethods(plugin_registry.Registrar.__proto__),
    registerMessageHandler: dart.fnType(dart.void, []),
    handlePlatformMessage: dart.fnType(async.Future$(dart.void), [core.String, dart.nullable(typed_data.ByteData), dart.nullable(dart.fnType(dart.void, [dart.nullable(typed_data.ByteData)]))]),
    handleFrameworkMessage: dart.fnType(async.Future$(dart.void), [core.String, dart.nullable(typed_data.ByteData), dart.nullable(dart.fnType(dart.void, [dart.nullable(typed_data.ByteData)]))]),
    send: dart.fnType(async.Future$(dart.nullable(typed_data.ByteData)), [core.String, dart.nullable(typed_data.ByteData)]),
    setMessageHandler: dart.fnType(dart.void, [core.String, dart.nullable(dart.fnType(dart.nullable(async.Future$(dart.nullable(typed_data.ByteData))), [dart.nullable(typed_data.ByteData)]))]),
    checkMessageHandler: dart.fnType(core.bool, [core.String, dart.nullable(dart.fnType(dart.nullable(async.Future$(dart.nullable(typed_data.ByteData))), [dart.nullable(typed_data.ByteData)]))]),
    setMockMessageHandler: dart.fnType(dart.void, [core.String, dart.nullable(dart.fnType(dart.nullable(async.Future$(dart.nullable(typed_data.ByteData))), [dart.nullable(typed_data.ByteData)]))]),
    checkMockMessageHandler: dart.fnType(core.bool, [core.String, dart.nullable(dart.fnType(dart.nullable(async.Future$(dart.nullable(typed_data.ByteData))), [dart.nullable(typed_data.ByteData)]))])
  }));
  dart.setGetterSignature(plugin_registry.Registrar, () => ({
    __proto__: dart.getGetters(plugin_registry.Registrar.__proto__),
    messenger: binary_messenger.BinaryMessenger
  }));
  dart.setLibraryUri(plugin_registry.Registrar, L1);
  dart.setFieldSignature(plugin_registry.Registrar, () => ({
    __proto__: dart.getFields(plugin_registry.Registrar.__proto__),
    [_handlers]: dart.finalFieldType(core.Map$(core.String, dart.fnType(dart.nullable(async.Future$(dart.nullable(typed_data.ByteData))), [dart.nullable(typed_data.ByteData)])))
  }));
  plugin_registry.PluginRegistry = class PluginRegistry extends plugin_registry.Registrar {
    registrarFor(key) {
      if (key == null) dart.nullFailed(L0, 211, 31, "key");
      return this;
    }
  };
  (plugin_registry.PluginRegistry.new = function(binaryMessenger = null) {
    plugin_registry.PluginRegistry.__proto__.new.call(this);
    ;
  }).prototype = plugin_registry.PluginRegistry.prototype;
  dart.addTypeTests(plugin_registry.PluginRegistry);
  dart.addTypeCaches(plugin_registry.PluginRegistry);
  dart.setMethodSignature(plugin_registry.PluginRegistry, () => ({
    __proto__: dart.getMethods(plugin_registry.PluginRegistry.__proto__),
    registrarFor: dart.fnType(plugin_registry.Registrar, [core.Type])
  }));
  dart.setLibraryUri(plugin_registry.PluginRegistry, L1);
  dart.copyProperties(plugin_registry, {
    get webPluginRegistry() {
      return plugin_registry.PluginRegistry.as(plugin_registry.webPluginRegistrar);
    },
    get pluginBinaryMessenger() {
      return plugin_registry.webPluginRegistrar;
    }
  });
  dart.defineLazy(plugin_registry, {
    /*plugin_registry.webPluginRegistrar*/get webPluginRegistrar() {
      return new plugin_registry.PluginRegistry.new();
    }
  }, false);
  dart.trackLibraries("packages/flutter_web_plugins/src/plugin_registry.dart", {
    "package:flutter_web_plugins/src/plugin_registry.dart": plugin_registry
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["plugin_registry.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiEsD,MAAlD,qCAA2B;IAC7B;0BAWS,SACG,MAC0B;UAF7B;AAGJ,yCAAuB,OAAO,EAAE,IAAI,EAAE,QAAQ;IAAC;2BA0B3C,SACG,MAC0B;UAF7B;AAD0B;AAKvB;AACV;AACwB,wBAAU,AAAS,uBAAC,OAAO;AACjD,cAAI,OAAO,IAAI;AACiB,YAA9B,YAAW,MAAM,AAAO,OAAA,CAAC,IAAI;;;cAExB;cAAW;AAAlB;AAME,YALW,oCAAY,mDACZ,SAAS,SACb,KAAK,WACH,gCACA,oCAAiB;;;;AAG5B,cAAI,QAAQ,IAAI;AACI,YAAlB,AAAQ,QAAA,CAAC,QAAQ;;;MAGvB;;;AAOiC;IAAI;SAMP,SAAmB;UAAnB;AACD,sBAAY;AAYrC,MAXyB,AAAC,eAAzB,AAAO,6BAAmB,OAAO,EAAE,OAAO,EAAE,QAAW;AACxD;AAC2B,UAAzB,AAAU,SAAD,UAAU,KAAK;;cACjB;cAAW;AAAlB;AAME,YALW,oCAAY,mDACZ,SAAS,SACb,KAAK,WACH,gCACA,oCAAiB;;;;;AAIhC,YAAO,AAAU,UAAD;IAClB;sBAG8B,SAAyB;UAAzB;AAC5B,UAAI,AAAQ,OAAD,IAAI;AACY,QAAzB,AAAU,yBAAO,OAAO;;AAEI,QAA5B,AAAS,uBAAC,OAAO,EAAI,OAAO;IAChC;wBAGgC,SAAyB;UAAzB;AAAqC,YAAmB,aAAnB,AAAS,uBAAC,OAAO,GAAK,OAAO;;0BAIzF,SACS;UADT;AAKN,MAFD,WAAM,4BACJ;IAEJ;4BAGoC,SAAyB;UAAzB;AAGjC,MAFD,WAAM,4BACJ;IAEJ;;4CA1ImB;IA2Fe,kBAAoC;AAhGtE;;EAME;;;;;;;;;;;;;;;;;;;;;;;;;UAmK0B;AAAQ;IAAI;;iDARrB;AACd;;EAAO;;;;;;;;;;AAkB0B,YAAmB,mCAAnB;IAAoC;;AAO/B;IAAkB;;;MAd/C,kCAAkB;YAAG","file":"../../../../../../../../../packages/flutter_web_plugins/src/plugin_registry.dart.lib.js"}');
  // Exports:
  return {
    src__plugin_registry: plugin_registry
  };
}));

//# sourceMappingURL=plugin_registry.dart.lib.js.map
