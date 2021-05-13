define(['dart_sdk', 'packages/flutter/src/services/system_channels.dart'], (function load__packages__shared_preferences_platform_interface__method_channel_shared_preferences_dart(dart_sdk, packages__flutter__src__services__system_channels$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform_channel = packages__flutter__src__services__system_channels$46dart.src__services__platform_channel;
  const message_codecs = packages__flutter__src__services__system_channels$46dart.src__services__message_codecs;
  var method_channel_shared_preferences = Object.create(dart.library);
  var shared_preferences_platform_interface = Object.create(dart.library);
  var $clear = dartx.clear;
  var $remove = dartx.remove;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(false);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var FutureOrOfboolL = () => (FutureOrOfboolL = dart.constFn(async.FutureOr$(boolL())))();
  var FutureOrLOfboolL = () => (FutureOrLOfboolL = dart.constFn(dart.legacy(FutureOrOfboolL())))();
  var dynamicToFutureOrLOfboolL = () => (dynamicToFutureOrLOfboolL = dart.constFn(dart.fnType(FutureOrLOfboolL(), [dart.dynamic])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var NoSuchMethodErrorL = () => (NoSuchMethodErrorL = dart.constFn(dart.legacy(core.NoSuchMethodError)))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(StringL(), ObjectL())))();
  var LinkedHashMapOfStringL$ObjectL = () => (LinkedHashMapOfStringL$ObjectL = dart.constFn(collection.LinkedHashMap$(StringL(), ObjectL())))();
  var MapOfStringL$ObjectL = () => (MapOfStringL$ObjectL = dart.constFn(core.Map$(StringL(), ObjectL())))();
  var MapLOfStringL$ObjectL = () => (MapLOfStringL$ObjectL = dart.constFn(dart.legacy(MapOfStringL$ObjectL())))();
  const CT = Object.create(null);
  var L1 = "package:shared_preferences_platform_interface/method_channel_shared_preferences.dart";
  var L0 = "package:shared_preferences_platform_interface/shared_preferences_platform_interface.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C2 || CT.C2
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C1 || CT.C1,
        [MethodChannel_name]: "plugins.flutter.io/shared_preferences"
      });
    }
  }, false);
  var _invokeBoolMethod = dart.privateName(method_channel_shared_preferences, "_invokeBoolMethod");
  var _verifyProvidesDefaultImplementations = dart.privateName(shared_preferences_platform_interface, "_verifyProvidesDefaultImplementations");
  shared_preferences_platform_interface.SharedPreferencesStorePlatform = class SharedPreferencesStorePlatform extends core.Object {
    static get instance() {
      return shared_preferences_platform_interface.SharedPreferencesStorePlatform._instance;
    }
    static set instance(value) {
      if (!dart.test(value.isMock)) {
        try {
          value[_verifyProvidesDefaultImplementations]();
        } catch (e) {
          let _ = dart.getThrown(e);
          if (NoSuchMethodErrorL().is(_)) {
            dart.throw(new core.AssertionError.new("Platform interfaces must not be implemented with `implements`"));
          } else
            throw e;
        }
      }
      shared_preferences_platform_interface.SharedPreferencesStorePlatform._instance = value;
    }
    get isMock() {
      return false;
    }
    [_verifyProvidesDefaultImplementations]() {
    }
  };
  (shared_preferences_platform_interface.SharedPreferencesStorePlatform.new = function() {
    ;
  }).prototype = shared_preferences_platform_interface.SharedPreferencesStorePlatform.prototype;
  dart.addTypeTests(shared_preferences_platform_interface.SharedPreferencesStorePlatform);
  dart.addTypeCaches(shared_preferences_platform_interface.SharedPreferencesStorePlatform);
  dart.setMethodSignature(shared_preferences_platform_interface.SharedPreferencesStorePlatform, () => ({
    __proto__: dart.getMethods(shared_preferences_platform_interface.SharedPreferencesStorePlatform.__proto__),
    [_verifyProvidesDefaultImplementations]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(shared_preferences_platform_interface.SharedPreferencesStorePlatform, () => ({
    __proto__: dart.getGetters(shared_preferences_platform_interface.SharedPreferencesStorePlatform.__proto__),
    isMock: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(shared_preferences_platform_interface.SharedPreferencesStorePlatform, L0);
  dart.defineLazy(shared_preferences_platform_interface.SharedPreferencesStorePlatform, {
    /*shared_preferences_platform_interface.SharedPreferencesStorePlatform._instance*/get _instance() {
      return new method_channel_shared_preferences.MethodChannelSharedPreferencesStore.new();
    },
    set _instance(_) {}
  }, true);
  method_channel_shared_preferences.MethodChannelSharedPreferencesStore = class MethodChannelSharedPreferencesStore extends shared_preferences_platform_interface.SharedPreferencesStorePlatform {
    remove(key) {
      return this[_invokeBoolMethod]("remove", new (IdentityMapOfStringL$dynamic()).from(["key", key]));
    }
    setValue(valueType, key, value) {
      return this[_invokeBoolMethod]("set" + dart.str(valueType), new (IdentityMapOfStringL$dynamic()).from(["key", key, "value", value]));
    }
    [_invokeBoolMethod](method, params) {
      return method_channel_shared_preferences._kChannel.invokeMethod(boolL(), method, params).then(boolL(), dart.fn(result => FutureOrLOfboolL().as(result), dynamicToFutureOrLOfboolL()));
    }
    clear() {
      return method_channel_shared_preferences._kChannel.invokeMethod(boolL(), "clear");
    }
    getAll() {
      return method_channel_shared_preferences._kChannel.invokeMapMethod(StringL(), ObjectL(), "getAll");
    }
  };
  (method_channel_shared_preferences.MethodChannelSharedPreferencesStore.new = function() {
    ;
  }).prototype = method_channel_shared_preferences.MethodChannelSharedPreferencesStore.prototype;
  dart.addTypeTests(method_channel_shared_preferences.MethodChannelSharedPreferencesStore);
  dart.addTypeCaches(method_channel_shared_preferences.MethodChannelSharedPreferencesStore);
  dart.setMethodSignature(method_channel_shared_preferences.MethodChannelSharedPreferencesStore, () => ({
    __proto__: dart.getMethods(method_channel_shared_preferences.MethodChannelSharedPreferencesStore.__proto__),
    remove: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String)]),
    setValue: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.Object)]),
    [_invokeBoolMethod]: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))]),
    clear: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), []),
    getAll: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))))), [])
  }));
  dart.setLibraryUri(method_channel_shared_preferences.MethodChannelSharedPreferencesStore, L1);
  var MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  var C2;
  var StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  var C1;
  var MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  var MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  var C0;
  dart.defineLazy(method_channel_shared_preferences, {
    /*method_channel_shared_preferences._kChannel*/get _kChannel() {
      return C0 || CT.C0;
    }
  }, true);
  var _data = dart.privateName(shared_preferences_platform_interface, "_data");
  shared_preferences_platform_interface.InMemorySharedPreferencesStore = class InMemorySharedPreferencesStore extends shared_preferences_platform_interface.SharedPreferencesStorePlatform {
    clear() {
      return async.async(boolL(), (function* clear() {
        this[_data][$clear]();
        return true;
      }).bind(this));
    }
    getAll() {
      return async.async(MapLOfStringL$ObjectL(), (function* getAll() {
        return LinkedHashMapOfStringL$ObjectL().from(this[_data]);
      }).bind(this));
    }
    remove(key) {
      return async.async(boolL(), (function* remove() {
        this[_data][$remove](key);
        return true;
      }).bind(this));
    }
    setValue(valueType, key, value) {
      return async.async(boolL(), (function* setValue() {
        this[_data][$_set](key, value);
        return true;
      }).bind(this));
    }
  };
  (shared_preferences_platform_interface.InMemorySharedPreferencesStore.empty = function() {
    this[_data] = new (IdentityMapOfStringL$ObjectL()).new();
    ;
  }).prototype = shared_preferences_platform_interface.InMemorySharedPreferencesStore.prototype;
  (shared_preferences_platform_interface.InMemorySharedPreferencesStore.withData = function(data) {
    this[_data] = LinkedHashMapOfStringL$ObjectL().from(data);
    ;
  }).prototype = shared_preferences_platform_interface.InMemorySharedPreferencesStore.prototype;
  dart.addTypeTests(shared_preferences_platform_interface.InMemorySharedPreferencesStore);
  dart.addTypeCaches(shared_preferences_platform_interface.InMemorySharedPreferencesStore);
  dart.setMethodSignature(shared_preferences_platform_interface.InMemorySharedPreferencesStore, () => ({
    __proto__: dart.getMethods(shared_preferences_platform_interface.InMemorySharedPreferencesStore.__proto__),
    clear: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), []),
    getAll: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))))), []),
    remove: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String)]),
    setValue: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(shared_preferences_platform_interface.InMemorySharedPreferencesStore, L0);
  dart.setFieldSignature(shared_preferences_platform_interface.InMemorySharedPreferencesStore, () => ({
    __proto__: dart.getFields(shared_preferences_platform_interface.InMemorySharedPreferencesStore.__proto__),
    [_data]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))))
  }));
  dart.trackLibraries("packages/shared_preferences_platform_interface/method_channel_shared_preferences.dart", {
    "package:shared_preferences_platform_interface/method_channel_shared_preferences.dart": method_channel_shared_preferences,
    "package:shared_preferences_platform_interface/shared_preferences_platform_interface.dart": shared_preferences_platform_interface
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shared_preferences_platform_interface.dart","method_channel_shared_preferences.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqBwD;IAAS;wBAIZ;AACjD,qBAAK,AAAM,KAAD;AACR;AAC+C,UAA7C,AAAM,KAAD;;cACuB;AAA5B;AAEoE,YADpE,WAAM,4BACF;;;;;AAGS,MAAjB,iFAAY,KAAK;IACnB;;AAWmB;IAAK;;IA4BsB;;;;EAChD;;;;;;;;;;;;;MAtCwC,8EAAS;YAC3C;;;;;WClBuB;AACzB,YAAO,yBAAkB,UAA2B,2CAClD,OAAO,GAAG;IAEd;aAG6B,WAAkB,KAAY;AACzD,YAAO,yBAAkB,AAAe,iBAAV,SAAS,GAAoB,2CACzD,OAAO,GAAG,EACV,SAAS,KAAK;IAElB;wBAEsC,QAA6B;AACjE,YAAO,AACF,AAOA,mEAPmB,MAAM,EAAE,MAAM,gBAOtB,QAAS,gCAAW,MAAM;IAC5C;;AAIE,YAAO,AAAU,mEAAmB;IACtC;;AAIE,YAAO,AAAU,mFAAgC;IACnD;;;;EACF;;;;;;;;;;;;;;;;;;;;MA7CoB,2CAAS;;;;;;;ADiFT;AACH,QAAb,AAAM;AACN,cAAO;MACT;;;AAGkC;AAChC,cAAO,uCAAyB;MAClC;;WAG2B;AAAR;AACA,QAAjB,AAAM,qBAAO,GAAG;AAChB,cAAO;MACT;;aAG6B,WAAkB,KAAY;AAAtC;AACD,QAAlB,AAAK,mBAAC,GAAG,EAAI,KAAK;AAClB,cAAO;MACT;;;;IA7B+C,cAAkB;;EAAE;4FAGP;IAChD,cAAE,sCAAyB,IAAI;;EAAC","file":"../../../../../../../../../../packages/shared_preferences_platform_interface/method_channel_shared_preferences.dart.lib.js"}');
  // Exports:
  return {
    method_channel_shared_preferences: method_channel_shared_preferences,
    shared_preferences_platform_interface: shared_preferences_platform_interface
  };
}));

//# sourceMappingURL=method_channel_shared_preferences.dart.lib.js.map
