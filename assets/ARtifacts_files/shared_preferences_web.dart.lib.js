define(['dart_sdk', 'packages/shared_preferences_platform_interface/method_channel_shared_preferences.dart'], (function load__packages__shared_preferences_web__shared_preferences_web_dart(dart_sdk, packages__shared_preferences_platform_interface__method_channel_shared_preferences$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const shared_preferences_platform_interface = packages__shared_preferences_platform_interface__method_channel_shared_preferences$46dart.shared_preferences_platform_interface;
  var shared_preferences_web = Object.create(dart.library);
  var $remove = dartx.remove;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $startsWith = dartx.startsWith;
  var $keys = dartx.keys;
  var $add = dartx.add;
  var $cast = dartx.cast;
  dart._checkModuleNullSafetyMode(false);
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(StringL(), ObjectL())))();
  var MapOfStringL$ObjectL = () => (MapOfStringL$ObjectL = dart.constFn(core.Map$(StringL(), ObjectL())))();
  var MapLOfStringL$ObjectL = () => (MapLOfStringL$ObjectL = dart.constFn(dart.legacy(MapOfStringL$ObjectL())))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  const CT = Object.create(null);
  var L0 = "package:shared_preferences_web/shared_preferences_web.dart";
  var _storedFlutterKeys = dart.privateName(shared_preferences_web, "_storedFlutterKeys");
  var _decodeValue = dart.privateName(shared_preferences_web, "_decodeValue");
  var _checkPrefix = dart.privateName(shared_preferences_web, "_checkPrefix");
  var _encodeValue = dart.privateName(shared_preferences_web, "_encodeValue");
  shared_preferences_web.SharedPreferencesPlugin = class SharedPreferencesPlugin extends shared_preferences_platform_interface.SharedPreferencesStorePlatform {
    static registerWith(registrar) {
      shared_preferences_platform_interface.SharedPreferencesStorePlatform.instance = new shared_preferences_web.SharedPreferencesPlugin.new();
    }
    clear() {
      return async.async(boolL(), (function* clear() {
        for (let key of this[_storedFlutterKeys]) {
          html.window.localStorage[$remove](key);
        }
        return true;
      }).bind(this));
    }
    getAll() {
      return async.async(MapLOfStringL$ObjectL(), (function* getAll() {
        let allData = new (IdentityMapOfStringL$ObjectL()).new();
        for (let key of this[_storedFlutterKeys]) {
          allData[$_set](key, this[_decodeValue](html.window.localStorage[$_get](key)));
        }
        return allData;
      }).bind(this));
    }
    remove(key) {
      return async.async(boolL(), (function* remove() {
        this[_checkPrefix](key);
        html.window.localStorage[$remove](key);
        return true;
      }).bind(this));
    }
    setValue(valueType, key, value) {
      return async.async(boolL(), (function* setValue() {
        this[_checkPrefix](key);
        html.window.localStorage[$_set](key, this[_encodeValue](value));
        return true;
      }).bind(this));
    }
    [_checkPrefix](key) {
      if (!key[$startsWith]("flutter.")) {
        dart.throw(new core.FormatException.new("Shared preferences keys must start with prefix \"flutter.\".", key, 0));
      }
    }
    get [_storedFlutterKeys]() {
      let keys = JSArrayOfStringL().of([]);
      for (let key of html.window.localStorage[$keys]) {
        if (key[$startsWith]("flutter.")) {
          keys[$add](key);
        }
      }
      return keys;
    }
    [_encodeValue](value) {
      return convert.json.encode(value);
    }
    [_decodeValue](encodedValue) {
      let decodedValue = convert.json.decode(encodedValue);
      if (ListL().is(decodedValue)) {
        return decodedValue[$cast](StringL());
      }
      return decodedValue;
    }
  };
  (shared_preferences_web.SharedPreferencesPlugin.new = function() {
    ;
  }).prototype = shared_preferences_web.SharedPreferencesPlugin.prototype;
  dart.addTypeTests(shared_preferences_web.SharedPreferencesPlugin);
  dart.addTypeCaches(shared_preferences_web.SharedPreferencesPlugin);
  dart.setMethodSignature(shared_preferences_web.SharedPreferencesPlugin, () => ({
    __proto__: dart.getMethods(shared_preferences_web.SharedPreferencesPlugin.__proto__),
    clear: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), []),
    getAll: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))))), []),
    remove: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String)]),
    setValue: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.Object)]),
    [_checkPrefix]: dart.fnType(dart.void, [dart.legacy(core.String)]),
    [_encodeValue]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.Object)]),
    [_decodeValue]: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(shared_preferences_web.SharedPreferencesPlugin, () => ({
    __proto__: dart.getGetters(shared_preferences_web.SharedPreferencesPlugin.__proto__),
    [_storedFlutterKeys]: dart.legacy(core.List$(dart.legacy(core.String)))
  }));
  dart.setLibraryUri(shared_preferences_web.SharedPreferencesPlugin, L0);
  dart.trackLibraries("packages/shared_preferences_web/shared_preferences_web.dart", {
    "package:shared_preferences_web/shared_preferences_web.dart": shared_preferences_web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shared_preferences_web.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;wBAgBqC;AACkC,MAApC,gFAAW;IAC5C;;AAGkB;AAIhB,iBAAY,MAAO;AACmB,UAA/B,AAAO,AAAa,kCAAO,GAAG;;AAErC,cAAO;MACT;;;AAGkC;AACN,sBAA0B;AACpD,iBAAY,MAAO;AACyC,UAA1D,AAAO,OAAA,QAAC,GAAG,EAAI,mBAAkB,AAAO,AAAY,gCAAC,GAAG;;AAE1D,cAAO,QAAO;MAChB;;WAG2B;AAAR;AACA,QAAjB,mBAAa,GAAG;AACoB,QAA/B,AAAO,AAAa,kCAAO,GAAG;AACnC,cAAO;MACT;;aAG6B,WAAkB,KAAY;AAAtC;AACF,QAAjB,mBAAa,GAAG;AACmC,QAA9C,AAAO,AAAY,gCAAC,GAAG,EAAI,mBAAa,KAAK;AAClD,cAAO;MACT;;mBAEyB;AACvB,WAAK,AAAI,GAAD,cAAY;AAKjB,QAJD,WAAM,6BACJ,gEACA,GAAG,EACH;;IAGN;;AAGqB,iBAAe;AAClC,eAAY,MAAY,AAAO,AAAa;AAC1C,YAAI,AAAI,GAAD,cAAY;AACJ,UAAb,AAAK,IAAD,OAAK,GAAG;;;AAGhB,YAAO,KAAI;IACb;mBAE2B;AACzB,YAAO,AAAK,qBAAO,KAAK;IAC1B;mBAE2B;AACZ,yBAAe,AAAK,oBAAO,YAAY;AAEpD,UAAiB,WAAb,YAAY;AAId,cAAO,AAAa,aAAD;;AAGrB,YAAO,aAAY;IACrB;;;;EACF","file":"../../../../../../../../../../packages/shared_preferences_web/shared_preferences_web.dart.lib.js"}');
  // Exports:
  return {
    shared_preferences_web: shared_preferences_web
  };
}));

//# sourceMappingURL=shared_preferences_web.dart.lib.js.map
