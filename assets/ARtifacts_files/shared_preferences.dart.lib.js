define(['dart_sdk', 'packages/shared_preferences_platform_interface/method_channel_shared_preferences.dart', 'packages/shared_preferences_linux/shared_preferences_linux.dart', 'packages/shared_preferences_windows/shared_preferences_windows.dart'], (function load__packages__shared_preferences__shared_preferences_dart(dart_sdk, packages__shared_preferences_platform_interface__method_channel_shared_preferences$46dart, packages__shared_preferences_linux__shared_preferences_linux$46dart, packages__shared_preferences_windows__shared_preferences_windows$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const io = dart_sdk.io;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const shared_preferences_platform_interface = packages__shared_preferences_platform_interface__method_channel_shared_preferences$46dart.shared_preferences_platform_interface;
  const method_channel_shared_preferences = packages__shared_preferences_platform_interface__method_channel_shared_preferences$46dart.method_channel_shared_preferences;
  const shared_preferences_linux = packages__shared_preferences_linux__shared_preferences_linux$46dart.shared_preferences_linux;
  const shared_preferences_windows = packages__shared_preferences_windows__shared_preferences_windows$46dart.shared_preferences_windows;
  var shared_preferences = Object.create(dart.library);
  var $keys = dartx.keys;
  var $_get = dartx._get;
  var $containsKey = dartx.containsKey;
  var $cast = dartx.cast;
  var $toList = dartx.toList;
  var $_set = dartx._set;
  var $remove = dartx.remove;
  var $clear = dartx.clear;
  var $addAll = dartx.addAll;
  var $startsWith = dartx.startsWith;
  var $substring = dartx.substring;
  var $map = dartx.map;
  dart._checkModuleNullSafetyMode(false);
  var MethodChannelSharedPreferencesStoreL = () => (MethodChannelSharedPreferencesStoreL = dart.constFn(dart.legacy(method_channel_shared_preferences.MethodChannelSharedPreferencesStore)))();
  var SharedPreferencesL = () => (SharedPreferencesL = dart.constFn(dart.legacy(shared_preferences.SharedPreferences)))();
  var CompleterOfSharedPreferencesL = () => (CompleterOfSharedPreferencesL = dart.constFn(async.Completer$(SharedPreferencesL())))();
  var ExceptionL = () => (ExceptionL = dart.constFn(dart.legacy(core.Exception)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var LinkedHashSetOfStringL = () => (LinkedHashSetOfStringL = dart.constFn(collection.LinkedHashSet$(StringL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(StringL())))();
  var ListLOfStringL = () => (ListLOfStringL = dart.constFn(dart.legacy(ListOfStringL())))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(StringL(), ObjectL())))();
  var MapOfStringL$ObjectL = () => (MapOfStringL$ObjectL = dart.constFn(core.Map$(StringL(), ObjectL())))();
  var MapLOfStringL$ObjectL = () => (MapLOfStringL$ObjectL = dart.constFn(dart.legacy(MapOfStringL$ObjectL())))();
  var MapEntryOfStringL$dynamic = () => (MapEntryOfStringL$dynamic = dart.constFn(core.MapEntry$(StringL(), dart.dynamic)))();
  var MapEntryLOfStringL$dynamic = () => (MapEntryLOfStringL$dynamic = dart.constFn(dart.legacy(MapEntryOfStringL$dynamic())))();
  var StringLAnddynamicToMapEntryLOfStringL$dynamic = () => (StringLAnddynamicToMapEntryLOfStringL$dynamic = dart.constFn(dart.fnType(MapEntryLOfStringL$dynamic(), [StringL(), dart.dynamic])))();
  const CT = Object.create(null);
  var L1 = "package:shared_preferences/shared_preferences.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/shared_preferences-0.5.12+2/lib/shared_preferences.dart";
  var _preferenceCache$ = dart.privateName(shared_preferences, "_preferenceCache");
  var _setValue = dart.privateName(shared_preferences, "_setValue");
  shared_preferences.SharedPreferences = class SharedPreferences extends core.Object {
    static get _store() {
      if (dart.test(shared_preferences.SharedPreferences._manualDartRegistrationNeeded)) {
        if (!true && MethodChannelSharedPreferencesStoreL().is(shared_preferences_platform_interface.SharedPreferencesStorePlatform.instance)) {
          if (dart.test(io.Platform.isLinux)) {
            shared_preferences_platform_interface.SharedPreferencesStorePlatform.instance = new shared_preferences_linux.SharedPreferencesLinux.new();
          } else if (dart.test(io.Platform.isWindows)) {
            shared_preferences_platform_interface.SharedPreferencesStorePlatform.instance = new shared_preferences_windows.SharedPreferencesWindows.new();
          }
        }
        shared_preferences.SharedPreferences._manualDartRegistrationNeeded = false;
      }
      return shared_preferences_platform_interface.SharedPreferencesStorePlatform.instance;
    }
    static getInstance() {
      return async.async(SharedPreferencesL(), function* getInstance() {
        if (shared_preferences.SharedPreferences._completer == null) {
          shared_preferences.SharedPreferences._completer = CompleterOfSharedPreferencesL().new();
          try {
            let preferencesMap = (yield shared_preferences.SharedPreferences._getSharedPreferencesMap());
            shared_preferences.SharedPreferences._completer.complete(new shared_preferences.SharedPreferences.__(preferencesMap));
          } catch (e$) {
            let e = dart.getThrown(e$);
            if (ExceptionL().is(e)) {
              shared_preferences.SharedPreferences._completer.completeError(e);
              let sharedPrefsFuture = shared_preferences.SharedPreferences._completer.future;
              shared_preferences.SharedPreferences._completer = null;
              return sharedPrefsFuture;
            } else
              throw e$;
          }
        }
        return shared_preferences.SharedPreferences._completer.future;
      });
    }
    getKeys() {
      return LinkedHashSetOfStringL().from(this[_preferenceCache$][$keys]);
    }
    get(key) {
      return this[_preferenceCache$][$_get](key);
    }
    getBool(key) {
      return boolL().as(this[_preferenceCache$][$_get](key));
    }
    getInt(key) {
      return intL().as(this[_preferenceCache$][$_get](key));
    }
    getDouble(key) {
      return doubleL().as(this[_preferenceCache$][$_get](key));
    }
    getString(key) {
      return StringL().as(this[_preferenceCache$][$_get](key));
    }
    containsKey(key) {
      return this[_preferenceCache$][$containsKey](key);
    }
    getStringList(key) {
      let t1;
      let list = ListLOfObjectL().as(this[_preferenceCache$][$_get](key));
      if (list != null && !ListLOfStringL().is(list)) {
        list = list[$cast](StringL())[$toList]();
        this[_preferenceCache$][$_set](key, list);
      }
      return ListLOfStringL().as((t1 = list, t1 == null ? null : t1[$toList]()));
    }
    setBool(key, value) {
      return this[_setValue]("Bool", key, value);
    }
    setInt(key, value) {
      return this[_setValue]("Int", key, value);
    }
    setDouble(key, value) {
      return this[_setValue]("Double", key, value);
    }
    setString(key, value) {
      return this[_setValue]("String", key, value);
    }
    setStringList(key, value) {
      return this[_setValue]("StringList", key, value);
    }
    remove(key) {
      return this[_setValue](null, key, null);
    }
    [_setValue](valueType, key, value) {
      let prefixedKey = "flutter." + dart.str(key);
      if (value == null) {
        this[_preferenceCache$][$remove](key);
        return shared_preferences.SharedPreferences._store.remove(prefixedKey);
      } else {
        if (ListLOfStringL().is(value)) {
          this[_preferenceCache$][$_set](key, value[$toList]());
        } else {
          this[_preferenceCache$][$_set](key, value);
        }
        return shared_preferences.SharedPreferences._store.setValue(valueType, prefixedKey, value);
      }
    }
    commit() {
      return async.async(boolL(), function* commit() {
        return true;
      });
    }
    clear() {
      this[_preferenceCache$][$clear]();
      return shared_preferences.SharedPreferences._store.clear();
    }
    reload() {
      return async.async(dart.void, (function* reload() {
        let preferences = (yield shared_preferences.SharedPreferences._getSharedPreferencesMap());
        this[_preferenceCache$][$clear]();
        this[_preferenceCache$][$addAll](preferences);
      }).bind(this));
    }
    static _getSharedPreferencesMap() {
      return async.async(MapLOfStringL$ObjectL(), function* _getSharedPreferencesMap() {
        let fromSystem = (yield shared_preferences.SharedPreferences._store.getAll());
        if (!(fromSystem != null)) dart.assertFailed(null, L0, 192, 12, "fromSystem != null");
        let preferencesMap = new (IdentityMapOfStringL$ObjectL()).new();
        for (let key of fromSystem[$keys]) {
          if (!key[$startsWith]("flutter.")) dart.assertFailed(null, L0, 196, 14, "key.startsWith(_prefix)");
          preferencesMap[$_set](key[$substring]("flutter.".length), fromSystem[$_get](key));
        }
        return preferencesMap;
      });
    }
    static setMockInitialValues(values) {
      let newValues = values[$map](StringL(), dart.dynamic, dart.fn((key, value) => {
        let newKey = key;
        if (!key[$startsWith]("flutter.")) {
          newKey = "flutter." + dart.str(key);
        }
        return new (MapEntryOfStringL$dynamic()).__(newKey, value);
      }, StringLAnddynamicToMapEntryLOfStringL$dynamic()));
      shared_preferences_platform_interface.SharedPreferencesStorePlatform.instance = new shared_preferences_platform_interface.InMemorySharedPreferencesStore.withData(newValues);
      shared_preferences.SharedPreferences._completer = null;
    }
  };
  (shared_preferences.SharedPreferences.__ = function(_preferenceCache) {
    this[_preferenceCache$] = _preferenceCache;
    ;
  }).prototype = shared_preferences.SharedPreferences.prototype;
  dart.addTypeTests(shared_preferences.SharedPreferences);
  dart.addTypeCaches(shared_preferences.SharedPreferences);
  dart.setMethodSignature(shared_preferences.SharedPreferences, () => ({
    __proto__: dart.getMethods(shared_preferences.SharedPreferences.__proto__),
    getKeys: dart.fnType(dart.legacy(core.Set$(dart.legacy(core.String))), []),
    get: dart.fnType(dart.dynamic, [dart.legacy(core.String)]),
    getBool: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    getInt: dart.fnType(dart.legacy(core.int), [dart.legacy(core.String)]),
    getDouble: dart.fnType(dart.legacy(core.double), [dart.legacy(core.String)]),
    getString: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    containsKey: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    getStringList: dart.fnType(dart.legacy(core.List$(dart.legacy(core.String))), [dart.legacy(core.String)]),
    setBool: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String), dart.legacy(core.bool)]),
    setInt: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String), dart.legacy(core.int)]),
    setDouble: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String), dart.legacy(core.double)]),
    setString: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String), dart.legacy(core.String)]),
    setStringList: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String), dart.legacy(core.List$(dart.legacy(core.String)))]),
    remove: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String)]),
    [_setValue]: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.Object)]),
    commit: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), []),
    clear: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), []),
    reload: dart.fnType(dart.legacy(async.Future$(dart.void)), [])
  }));
  dart.setLibraryUri(shared_preferences.SharedPreferences, L1);
  dart.setFieldSignature(shared_preferences.SharedPreferences, () => ({
    __proto__: dart.getFields(shared_preferences.SharedPreferences.__proto__),
    [_preferenceCache$]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))))
  }));
  dart.defineLazy(shared_preferences.SharedPreferences, {
    /*shared_preferences.SharedPreferences._prefix*/get _prefix() {
      return "flutter.";
    },
    /*shared_preferences.SharedPreferences._completer*/get _completer() {
      return null;
    },
    set _completer(_) {},
    /*shared_preferences.SharedPreferences._manualDartRegistrationNeeded*/get _manualDartRegistrationNeeded() {
      return true;
    },
    set _manualDartRegistrationNeeded(_) {}
  }, true);
  dart.trackLibraries("packages/shared_preferences/shared_preferences.dart", {
    "package:shared_preferences/shared_preferences.dart": shared_preferences
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shared_preferences.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/shared_preferences/shared_preferences.dart.lib.js"}');
  // Exports:
  return {
    shared_preferences: shared_preferences
  };
}));

//# sourceMappingURL=shared_preferences.dart.lib.js.map
