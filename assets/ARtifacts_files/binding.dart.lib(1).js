define(['dart_sdk', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/print.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__foundation__binding_dart(dart_sdk, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__print$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const developer = dart_sdk.developer;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const convert = dart_sdk.convert;
  const io = dart_sdk.io;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const debug = packages__flutter__src__foundation__debug$46dart.src__foundation__debug;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var binding = Object.create(dart.library);
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $substring = dartx.substring;
  var $toString = dartx.toString;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(false);
  var IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  var IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  var MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  var FutureOfMapOfString$dynamic = () => (FutureOfMapOfString$dynamic = dart.constFn(async.Future$(MapOfString$dynamic())))();
  var MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  var MapOfString$StringToFutureOfMapOfString$dynamic = () => (MapOfString$StringToFutureOfMapOfString$dynamic = dart.constFn(dart.fnType(FutureOfMapOfString$dynamic(), [MapOfString$String()])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var VoidToMapOfString$dynamic = () => (VoidToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [])))();
  var MapOfString$dynamicTodynamic = () => (MapOfString$dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [MapOfString$dynamic()])))();
  var FutureOfServiceExtensionResponse = () => (FutureOfServiceExtensionResponse = dart.constFn(async.Future$(developer.ServiceExtensionResponse)))();
  var StringAndMapOfString$StringToFutureOfServiceExtensionResponse = () => (StringAndMapOfString$StringToFutureOfServiceExtensionResponse = dart.constFn(dart.fnType(FutureOfServiceExtensionResponse(), [core.String, MapOfString$String()])))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/foundation/binding.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/foundation/binding.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(binding._exitApplication, VoidToFutureOfvoid());
    }
  }, false);
  var _lockCount = dart.privateName(binding, "_lockCount");
  var C0;
  var _postExtensionStateChangedEvent = dart.privateName(binding, "_postExtensionStateChangedEvent");
  binding.BindingBase = class BindingBase extends core.Object {
    get window() {
      return ui.window;
    }
    get platformDispatcher() {
      return ui.PlatformDispatcher.instance;
    }
    initInstances() {
      if (!!dart.test(binding.BindingBase._debugInitialized)) dart.assertFailed(null, L0, 134, 12, "!_debugInitialized");
      if (!dart.test(dart.fn(() => {
        binding.BindingBase._debugInitialized = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 135, 12, "() {\n      _debugInitialized = true;\n      return true;\n    }()");
    }
    initServiceExtensions() {
      if (!!dart.test(binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed(null, L0, 162, 12, "!_debugServiceExtensionsRegistered");
      if (!dart.test(dart.fn(() => {
        this.registerSignalServiceExtension({name: "reassemble", callback: dart.bind(this, 'reassembleApplication')});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 164, 12, "() {\n      registerSignalServiceExtension(\n        name: 'reassemble',\n        callback: reassembleApplication,\n      );\n      return true;\n    }()");
      if (!false && !true) {
        this.registerSignalServiceExtension({name: "exit", callback: C0 || CT.C0});
      }
      if (!dart.test(dart.fn(() => {
        this.registerServiceExtension({name: "platformOverride", callback: dart.fn(parameters => {
            if (parameters == null) dart.nullFailed(L0, 183, 40, "parameters");
            return async.async(MapOfString$dynamic(), (function*() {
              if (dart.test(parameters[$containsKey]("value"))) {
                switch (parameters[$_get]("value")) {
                  case "android":
                  {
                    platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.android;
                    break;
                  }
                  case "fuchsia":
                  {
                    platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.fuchsia;
                    break;
                  }
                  case "iOS":
                  {
                    platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.iOS;
                    break;
                  }
                  case "linux":
                  {
                    platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.linux;
                    break;
                  }
                  case "macOS":
                  {
                    platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.macOS;
                    break;
                  }
                  case "windows":
                  {
                    platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.windows;
                    break;
                  }
                  case "default":
                  default:
                  {
                    platform.debugDefaultTargetPlatformOverride = null;
                  }
                }
                this[_postExtensionStateChangedEvent]("platformOverride", dart.toString(platform.defaultTargetPlatform)[$substring]((dart.str(dart.wrapType(platform.TargetPlatform)) + ".").length));
                yield this.reassembleApplication();
              }
              return new (IdentityMapOfString$dynamic()).from(["value", dart.toString(platform.defaultTargetPlatform)[$substring]((dart.str(dart.wrapType(platform.TargetPlatform)) + ".").length)]);
            }).bind(this));
          }, MapOfString$StringToFutureOfMapOfString$dynamic())});
        this.registerServiceExtension({name: "brightnessOverride", callback: dart.fn(parameters => {
            if (parameters == null) dart.nullFailed(L0, 225, 40, "parameters");
            return async.async(MapOfString$dynamic(), (function*() {
              let t0, t0$;
              if (dart.test(parameters[$containsKey]("value"))) {
                switch (parameters[$_get]("value")) {
                  case "Brightness.light":
                  {
                    debug.debugBrightnessOverride = ui.Brightness.light;
                    break;
                  }
                  case "Brightness.dark":
                  {
                    debug.debugBrightnessOverride = ui.Brightness.dark;
                    break;
                  }
                  default:
                  {
                    debug.debugBrightnessOverride = null;
                  }
                }
                this[_postExtensionStateChangedEvent]("brightnessOverride", dart.toString((t0 = debug.debugBrightnessOverride, t0 == null ? this.window.platformBrightness : t0)));
                yield this.reassembleApplication();
              }
              return new (IdentityMapOfString$dynamic()).from(["value", dart.toString((t0$ = debug.debugBrightnessOverride, t0$ == null ? this.window.platformBrightness : t0$))]);
            }).bind(this));
          }, MapOfString$StringToFutureOfMapOfString$dynamic())});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 179, 12, "() {\n      const String platformOverrideExtensionName = 'platformOverride';\n      registerServiceExtension(\n        name: platformOverrideExtensionName,\n        callback: (Map<String, String> parameters) async {\n          if (parameters.containsKey('value')) {\n            switch (parameters['value']) {\n              case 'android':\n                debugDefaultTargetPlatformOverride = TargetPlatform.android;\n                break;\n              case 'fuchsia':\n                debugDefaultTargetPlatformOverride = TargetPlatform.fuchsia;\n                break;\n              case 'iOS':\n                debugDefaultTargetPlatformOverride = TargetPlatform.iOS;\n                break;\n              case 'linux':\n                debugDefaultTargetPlatformOverride = TargetPlatform.linux;\n                break;\n              case 'macOS':\n                debugDefaultTargetPlatformOverride = TargetPlatform.macOS;\n                break;\n              case 'windows':\n                debugDefaultTargetPlatformOverride = TargetPlatform.windows;\n                break;\n              case 'default':\n              default:\n                debugDefaultTargetPlatformOverride = null;\n            }\n            _postExtensionStateChangedEvent(\n              platformOverrideExtensionName,\n              defaultTargetPlatform.toString().substring('$TargetPlatform.'.length),\n            );\n            await reassembleApplication();\n          }\n          return <String, dynamic>{\n            'value': defaultTargetPlatform\n                     .toString()\n                     .substring('$TargetPlatform.'.length),\n          };\n        },\n      );\n\n      const String brightnessOverrideExtensionName = 'brightnessOverride';\n      registerServiceExtension(\n        name: brightnessOverrideExtensionName,\n        callback: (Map<String, String> parameters) async {\n          if (parameters.containsKey('value')) {\n            switch (parameters['value']) {\n              case 'Brightness.light':\n                debugBrightnessOverride = ui.Brightness.light;\n                break;\n              case 'Brightness.dark':\n                debugBrightnessOverride = ui.Brightness.dark;\n                break;\n              default:\n                debugBrightnessOverride = null;\n            }\n            _postExtensionStateChangedEvent(\n              brightnessOverrideExtensionName,\n              (debugBrightnessOverride ?? window.platformBrightness).toString(),\n            );\n            await reassembleApplication();\n          }\n          return <String, dynamic>{\n            'value': (debugBrightnessOverride ?? window.platformBrightness).toString(),\n          };\n        },\n      );\n      return true;\n    }()");
      if (!dart.test(dart.fn(() => {
        binding.BindingBase._debugServiceExtensionsRegistered = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 250, 12, "() {\n      _debugServiceExtensionsRegistered = true;\n      return true;\n    }()");
    }
    get locked() {
      return dart.notNull(this[_lockCount]) > 0;
    }
    lockEvents(callback) {
      if (callback == null) dart.nullFailed(L0, 276, 40, "callback");
      developer.Timeline.startSync("Lock events");
      if (!(callback != null)) dart.assertFailed(null, L0, 279, 12, "callback != null");
      this[_lockCount] = dart.notNull(this[_lockCount]) + 1;
      let future = callback();
      if (!(future != null)) dart.assertFailed("The lockEvents() callback returned null; it should return a Future<void> that completes when the lock is to expire.", L0, 282, 12, "future != null");
      future.whenComplete(dart.fn(() => {
        this[_lockCount] = dart.notNull(this[_lockCount]) - 1;
        if (!dart.test(this.locked)) {
          developer.Timeline.finishSync();
          this.unlocked();
        }
      }, VoidToNull()));
      return future;
    }
    unlocked() {
      if (!!dart.test(this.locked)) dart.assertFailed(null, L0, 299, 12, "!locked");
    }
    reassembleApplication() {
      return this.lockEvents(dart.bind(this, 'performReassemble'));
    }
    performReassemble() {
      assertions.FlutterError.resetErrorCount();
      return FutureOfvoid().value();
    }
    registerSignalServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      if (name == null) dart.nullFailed(L0, 350, 21, "name");
      let callback = opts && 'callback' in opts ? opts.callback : null;
      if (callback == null) dart.nullFailed(L0, 351, 28, "callback");
      if (!(name != null)) dart.assertFailed(null, L0, 353, 12, "name != null");
      if (!(callback != null)) dart.assertFailed(null, L0, 354, 12, "callback != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => {
          if (parameters == null) dart.nullFailed(L0, 357, 38, "parameters");
          return async.async(MapOfString$dynamic(), function*() {
            yield callback();
            return new (IdentityMapOfString$dynamic()).new();
          });
        }, MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerBoolServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      if (name == null) dart.nullFailed(L0, 380, 21, "name");
      let getter = opts && 'getter' in opts ? opts.getter : null;
      if (getter == null) dart.nullFailed(L0, 381, 37, "getter");
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (setter == null) dart.nullFailed(L0, 382, 37, "setter");
      if (!(name != null)) dart.assertFailed(null, L0, 384, 12, "name != null");
      if (!(getter != null)) dart.assertFailed(null, L0, 385, 12, "getter != null");
      if (!(setter != null)) dart.assertFailed(null, L0, 386, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => {
          if (parameters == null) dart.nullFailed(L0, 389, 38, "parameters");
          return async.async(MapOfString$dynamic(), (function*() {
            if (dart.test(parameters[$containsKey]("enabled"))) {
              yield setter(parameters[$_get]("enabled") === "true");
              this[_postExtensionStateChangedEvent](name, dart.test(yield getter()) ? "true" : "false");
            }
            return new (IdentityMapOfString$dynamic()).from(["enabled", dart.test(yield getter()) ? "true" : "false"]);
          }).bind(this));
        }, MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerNumericServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      if (name == null) dart.nullFailed(L0, 414, 21, "name");
      let getter = opts && 'getter' in opts ? opts.getter : null;
      if (getter == null) dart.nullFailed(L0, 415, 39, "getter");
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (setter == null) dart.nullFailed(L0, 416, 39, "setter");
      if (!(name != null)) dart.assertFailed(null, L0, 418, 12, "name != null");
      if (!(getter != null)) dart.assertFailed(null, L0, 419, 12, "getter != null");
      if (!(setter != null)) dart.assertFailed(null, L0, 420, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => {
          if (parameters == null) dart.nullFailed(L0, 423, 38, "parameters");
          return async.async(MapOfString$dynamic(), (function*() {
            if (dart.test(parameters[$containsKey](name))) {
              yield setter(core.double.parse(dart.nullCheck(parameters[$_get](name))));
              this[_postExtensionStateChangedEvent](name, dart.toString(yield getter()));
            }
            return new (IdentityMapOfString$dynamic()).from([name, dart.toString(yield getter())]);
          }).bind(this));
        }, MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    [_postExtensionStateChangedEvent](name, value) {
      if (name == null) dart.nullFailed(L0, 444, 47, "name");
      this.postEvent("Flutter.ServiceExtensionStateChanged", new (IdentityMapOfString$dynamic()).from(["extension", "ext.flutter." + dart.str(name), "value", value]));
    }
    postEvent(eventKind, eventData) {
      if (eventKind == null) dart.nullFailed(L0, 458, 25, "eventKind");
      if (eventData == null) dart.nullFailed(L0, 458, 57, "eventData");
      developer.postEvent(eventKind, eventData);
    }
    registerStringServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      if (name == null) dart.nullFailed(L0, 476, 21, "name");
      let getter = opts && 'getter' in opts ? opts.getter : null;
      if (getter == null) dart.nullFailed(L0, 477, 39, "getter");
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (setter == null) dart.nullFailed(L0, 478, 39, "setter");
      if (!(name != null)) dart.assertFailed(null, L0, 480, 12, "name != null");
      if (!(getter != null)) dart.assertFailed(null, L0, 481, 12, "getter != null");
      if (!(setter != null)) dart.assertFailed(null, L0, 482, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => {
          if (parameters == null) dart.nullFailed(L0, 485, 38, "parameters");
          return async.async(MapOfString$dynamic(), (function*() {
            if (dart.test(parameters[$containsKey]("value"))) {
              yield setter(dart.nullCheck(parameters[$_get]("value")));
              this[_postExtensionStateChangedEvent](name, yield getter());
            }
            return new (IdentityMapOfString$dynamic()).from(["value", (yield getter())]);
          }).bind(this));
        }, MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      if (name == null) dart.nullFailed(L0, 548, 21, "name");
      let callback = opts && 'callback' in opts ? opts.callback : null;
      if (callback == null) dart.nullFailed(L0, 549, 39, "callback");
      if (!(name != null)) dart.assertFailed(null, L0, 551, 12, "name != null");
      if (!(callback != null)) dart.assertFailed(null, L0, 552, 12, "callback != null");
      let methodName = "ext.flutter." + dart.str(name);
      developer.registerExtension(methodName, dart.fn((method, parameters) => {
        if (method == null) dart.nullFailed(L0, 554, 53, "method");
        if (parameters == null) dart.nullFailed(L0, 554, 81, "parameters");
        return async.async(developer.ServiceExtensionResponse, function*() {
          if (!(method === methodName)) dart.assertFailed(null, L0, 555, 14, "method == methodName");
          if (!dart.test(dart.fn(() => {
            if (dart.test(debug.debugInstrumentationEnabled)) print.debugPrint("service extension method received: " + dart.str(method) + "(" + dart.str(parameters) + ")");
            return true;
          }, VoidTobool())())) dart.assertFailed(null, L0, 556, 14, "() {\n        if (debugInstrumentationEnabled)\n          debugPrint('service extension method received: $method($parameters)');\n        return true;\n      }()");
          yield debug.debugInstrumentAction(dart.void, "Wait for outer event loop", dart.fn(() => FutureOfvoid().delayed(core.Duration.zero), VoidToFutureOfvoid()));
          let caughtException = null;
          let caughtStack = null;
          let result = null;
          let result$35isSet = false;
          function result$35get() {
            return result$35isSet ? result : dart.throw(new _internal.LateError.localNI("result"));
          }
          dart.fn(result$35get, VoidToMapOfString$dynamic());
          function result$35set(t3) {
            if (t3 == null) dart.nullFailed(L0, 578, 33, "null");
            result$35isSet = true;
            return result = t3;
          }
          dart.fn(result$35set, MapOfString$dynamicTodynamic());
          try {
            result$35set(yield callback(parameters));
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            if (core.Object.is(exception)) {
              caughtException = exception;
              caughtStack = stack;
            } else
              throw e;
          }
          if (caughtException == null) {
            result$35get()[$_set]("type", "_extensionType");
            result$35get()[$_set]("method", method);
            return new developer.ServiceExtensionResponse.result(convert.json.encode(result$35get()));
          } else {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: caughtException, stack: caughtStack, context: new assertions.ErrorDescription.new("during a service extension callback for \"" + dart.str(method) + "\"")}));
            return new developer.ServiceExtensionResponse.error(-32000, convert.json.encode(new (IdentityMapOfString$String()).from(["exception", dart.toString(caughtException), "stack", dart.toString(caughtStack), "method", method])));
          }
        });
      }, StringAndMapOfString$StringToFutureOfServiceExtensionResponse()));
    }
    toString() {
      return "<" + dart.str(object.objectRuntimeType(this, "BindingBase")) + ">";
    }
  };
  (binding.BindingBase.new = function() {
    this[_lockCount] = 0;
    developer.Timeline.startSync("Framework initialization");
    if (!!dart.test(binding.BindingBase._debugInitialized)) dart.assertFailed(null, L0, 55, 12, "!_debugInitialized");
    this.initInstances();
    if (!dart.test(binding.BindingBase._debugInitialized)) dart.assertFailed(null, L0, 57, 12, "_debugInitialized");
    if (!!dart.test(binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed(null, L0, 59, 12, "!_debugServiceExtensionsRegistered");
    this.initServiceExtensions();
    if (!dart.test(binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed(null, L0, 61, 12, "_debugServiceExtensionsRegistered");
    developer.postEvent("Flutter.FrameworkInitialization", new (IdentityMapOfString$String()).new());
    developer.Timeline.finishSync();
  }).prototype = binding.BindingBase.prototype;
  dart.addTypeTests(binding.BindingBase);
  dart.addTypeCaches(binding.BindingBase);
  dart.setMethodSignature(binding.BindingBase, () => ({
    __proto__: dart.getMethods(binding.BindingBase.__proto__),
    initInstances: dart.fnType(dart.void, []),
    initServiceExtensions: dart.fnType(dart.void, []),
    lockEvents: dart.fnType(async.Future$(dart.void), [dart.fnType(async.Future$(dart.void), [])]),
    unlocked: dart.fnType(dart.void, []),
    reassembleApplication: dart.fnType(async.Future$(dart.void), []),
    performReassemble: dart.fnType(async.Future$(dart.void), []),
    registerSignalServiceExtension: dart.fnType(dart.void, [], {}, {callback: dart.fnType(async.Future$(dart.void), []), name: core.String}),
    registerBoolServiceExtension: dart.fnType(dart.void, [], {}, {getter: dart.fnType(async.Future$(core.bool), []), name: core.String, setter: dart.fnType(async.Future$(dart.void), [core.bool])}),
    registerNumericServiceExtension: dart.fnType(dart.void, [], {}, {getter: dart.fnType(async.Future$(core.double), []), name: core.String, setter: dart.fnType(async.Future$(dart.void), [core.double])}),
    [_postExtensionStateChangedEvent]: dart.fnType(dart.void, [core.String, dart.dynamic]),
    postEvent: dart.fnType(dart.void, [core.String, core.Map$(core.String, dart.dynamic)]),
    registerStringServiceExtension: dart.fnType(dart.void, [], {}, {getter: dart.fnType(async.Future$(core.String), []), name: core.String, setter: dart.fnType(async.Future$(dart.void), [core.String])}),
    registerServiceExtension: dart.fnType(dart.void, [], {}, {callback: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [core.Map$(core.String, core.String)]), name: core.String})
  }));
  dart.setGetterSignature(binding.BindingBase, () => ({
    __proto__: dart.getGetters(binding.BindingBase.__proto__),
    window: ui.SingletonFlutterWindow,
    platformDispatcher: ui.PlatformDispatcher,
    locked: core.bool
  }));
  dart.setLibraryUri(binding.BindingBase, L1);
  dart.setFieldSignature(binding.BindingBase, () => ({
    __proto__: dart.getFields(binding.BindingBase.__proto__),
    [_lockCount]: dart.fieldType(core.int)
  }));
  dart.defineExtensionMethods(binding.BindingBase, ['toString']);
  dart.defineLazy(binding.BindingBase, {
    /*binding.BindingBase._debugInitialized*/get _debugInitialized() {
      return false;
    },
    set _debugInitialized(_) {},
    /*binding.BindingBase._debugServiceExtensionsRegistered*/get _debugServiceExtensionsRegistered() {
      return false;
    },
    set _debugServiceExtensionsRegistered(_) {}
  }, false);
  binding._exitApplication = function _exitApplication() {
    return async.async(dart.void, function* _exitApplication() {
      io.exit(0);
      dart.throw(new _internal.ReachabilityError.new("`null` encountered as the result from expression with type `Never`."));
    });
  };
  dart.trackLibraries("packages/flutter/src/foundation/binding.dart", {
    "package:flutter/src/foundation/binding.dart": binding
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["binding.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/foundation/binding.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__binding: binding
  };
}));

//# sourceMappingURL=binding.dart.lib.js.map
