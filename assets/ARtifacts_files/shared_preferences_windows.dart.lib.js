define(['dart_sdk', 'packages/file/src/backends/local/local_file_system.dart', 'packages/path_provider_windows/src/path_provider_windows_stub.dart', 'packages/path/src/path_set.dart', 'packages/file/src/interface/link.dart', 'packages/shared_preferences_platform_interface/method_channel_shared_preferences.dart'], (function load__packages__shared_preferences_windows__shared_preferences_windows_dart(dart_sdk, packages__file__src__backends__local__local_file_system$46dart, packages__path_provider_windows__src__path_provider_windows_stub$46dart, packages__path__src__path_set$46dart, packages__file__src__interface__link$46dart, packages__shared_preferences_platform_interface__method_channel_shared_preferences$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const local_file_system = packages__file__src__backends__local__local_file_system$46dart.src__backends__local__local_file_system;
  const path_provider_windows_stub = packages__path_provider_windows__src__path_provider_windows_stub$46dart.src__path_provider_windows_stub;
  const path = packages__path__src__path_set$46dart.path;
  const file = packages__file__src__interface__link$46dart.src__interface__file;
  const file_system = packages__file__src__interface__link$46dart.src__interface__file_system;
  const shared_preferences_platform_interface = packages__shared_preferences_platform_interface__method_channel_shared_preferences$46dart.shared_preferences_platform_interface;
  var shared_preferences_windows = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $clear = dartx.clear;
  var $remove = dartx.remove;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(false);
  var FileL = () => (FileL = dart.constFn(dart.legacy(file.File)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(StringL(), ObjectL())))();
  var MapOfStringL$ObjectL = () => (MapOfStringL$ObjectL = dart.constFn(core.Map$(StringL(), ObjectL())))();
  var MapLOfStringL$ObjectL = () => (MapLOfStringL$ObjectL = dart.constFn(dart.legacy(MapOfStringL$ObjectL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  const CT = Object.create(null);
  var L0 = "package:shared_preferences_windows/shared_preferences_windows.dart";
  var _cachedPreferences = dart.privateName(shared_preferences_windows, "_cachedPreferences");
  var _localDataFilePath = dart.privateName(shared_preferences_windows, "_localDataFilePath");
  var _getLocalDataFile = dart.privateName(shared_preferences_windows, "_getLocalDataFile");
  var _readPreferences = dart.privateName(shared_preferences_windows, "_readPreferences");
  var _writePreferences = dart.privateName(shared_preferences_windows, "_writePreferences");
  var fs = dart.privateName(shared_preferences_windows, "SharedPreferencesWindows.fs");
  var pathProvider = dart.privateName(shared_preferences_windows, "SharedPreferencesWindows.pathProvider");
  shared_preferences_windows.SharedPreferencesWindows = class SharedPreferencesWindows extends shared_preferences_platform_interface.SharedPreferencesStorePlatform {
    get fs() {
      return this[fs];
    }
    set fs(value) {
      this[fs] = value;
    }
    get pathProvider() {
      return this[pathProvider];
    }
    set pathProvider(value) {
      this[pathProvider] = value;
    }
    [_getLocalDataFile]() {
      return async.async(FileL(), (function* _getLocalDataFile() {
        if (this[_localDataFilePath] == null) {
          let directory = (yield this.pathProvider.getApplicationSupportPath());
          this[_localDataFilePath] = this.fs.file(path.join(directory, "shared_preferences.json"));
        }
        return this[_localDataFilePath];
      }).bind(this));
    }
    [_readPreferences]() {
      return async.async(MapLOfStringL$ObjectL(), (function* _readPreferences() {
        if (this[_cachedPreferences] == null) {
          this[_cachedPreferences] = new (IdentityMapOfStringL$ObjectL()).new();
          let localDataFile = (yield this[_getLocalDataFile]());
          if (dart.test(localDataFile.existsSync())) {
            let stringMap = localDataFile.readAsStringSync();
            if (stringMap[$isNotEmpty]) {
              this[_cachedPreferences] = MapLOfStringL$ObjectL().as(convert.json.decode(stringMap));
            }
          }
        }
        return this[_cachedPreferences];
      }).bind(this));
    }
    [_writePreferences](preferences) {
      return async.async(boolL(), (function* _writePreferences() {
        try {
          let localDataFile = (yield this[_getLocalDataFile]());
          if (!dart.test(localDataFile.existsSync())) {
            localDataFile.createSync({recursive: true});
          }
          let stringMap = convert.json.encode(preferences);
          localDataFile.writeAsStringSync(stringMap);
        } catch (e$) {
          let e = dart.getThrown(e$);
          core.print("Error saving preferences to disk: " + dart.str(e));
          return false;
        }
        return true;
      }).bind(this));
    }
    clear() {
      return async.async(boolL(), (function* clear() {
        let preferences = (yield this[_readPreferences]());
        preferences[$clear]();
        return this[_writePreferences](preferences);
      }).bind(this));
    }
    getAll() {
      return async.async(MapLOfStringL$ObjectL(), (function* getAll() {
        return this[_readPreferences]();
      }).bind(this));
    }
    remove(key) {
      return async.async(boolL(), (function* remove() {
        let preferences = (yield this[_readPreferences]());
        preferences[$remove](key);
        return this[_writePreferences](preferences);
      }).bind(this));
    }
    setValue(valueType, key, value) {
      return async.async(boolL(), (function* setValue() {
        let preferences = (yield this[_readPreferences]());
        preferences[$_set](key, value);
        return this[_writePreferences](preferences);
      }).bind(this));
    }
  };
  (shared_preferences_windows.SharedPreferencesWindows.new = function() {
    this[fs] = new local_file_system.LocalFileSystem.new();
    this[pathProvider] = new path_provider_windows_stub.PathProviderWindows.new();
    this[_cachedPreferences] = null;
    this[_localDataFilePath] = null;
    ;
  }).prototype = shared_preferences_windows.SharedPreferencesWindows.prototype;
  dart.addTypeTests(shared_preferences_windows.SharedPreferencesWindows);
  dart.addTypeCaches(shared_preferences_windows.SharedPreferencesWindows);
  dart.setMethodSignature(shared_preferences_windows.SharedPreferencesWindows, () => ({
    __proto__: dart.getMethods(shared_preferences_windows.SharedPreferencesWindows.__proto__),
    [_getLocalDataFile]: dart.fnType(dart.legacy(async.Future$(dart.legacy(file.File))), []),
    [_readPreferences]: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))))), []),
    [_writePreferences]: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object)))]),
    clear: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), []),
    getAll: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))))), []),
    remove: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String)]),
    setValue: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(shared_preferences_windows.SharedPreferencesWindows, L0);
  dart.setFieldSignature(shared_preferences_windows.SharedPreferencesWindows, () => ({
    __proto__: dart.getFields(shared_preferences_windows.SharedPreferencesWindows.__proto__),
    fs: dart.fieldType(dart.legacy(file_system.FileSystem)),
    pathProvider: dart.fieldType(dart.legacy(path_provider_windows_stub.PathProviderWindows)),
    [_cachedPreferences]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object)))),
    [_localDataFilePath]: dart.fieldType(dart.legacy(file.File))
  }));
  dart.defineLazy(shared_preferences_windows.SharedPreferencesWindows, {
    /*shared_preferences_windows.SharedPreferencesWindows.instance*/get instance() {
      return new shared_preferences_windows.SharedPreferencesWindows.new();
    },
    set instance(_) {}
  }, true);
  dart.trackLibraries("packages/shared_preferences_windows/shared_preferences_windows.dart", {
    "package:shared_preferences_windows/shared_preferences_windows.dart": shared_preferences_windows
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shared_preferences_windows.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsBa;;;;;;IAIS;;;;;;;AASU;AAC5B,YAAI,AAAmB,4BAAG;AAClB,2BAAY,MAAM,AAAa;AAEuB,UAD5D,2BACI,AAAG,aAAK,UAAU,SAAS,EAAE;;AAEnC,cAAO;MACT;;;AAI4C;AAC1C,YAAI,AAAmB,4BAAG;AACD,UAAvB,2BAAqB;AAChB,+BAAgB,MAAM;AAC3B,wBAAI,AAAc,aAAD;AACR,4BAAY,AAAc,aAAD;AAChC,gBAAI,AAAU,SAAD;AACuD,cAAlE,2BAA4C,2BAAvB,AAAK,oBAAO,SAAS;;;;AAIhD,cAAO;MACT;;wBAImD;AAArB;AAC5B;AACO,+BAAgB,MAAM;AAC3B,yBAAK,AAAc,aAAD;AACyB,YAAzC,AAAc,aAAD,wBAAuB;;AAE/B,0BAAY,AAAK,oBAAO,WAAW;AACA,UAA1C,AAAc,aAAD,mBAAmB,SAAS;;cAClC;AACsC,UAA7C,WAAM,AAAsC,gDAAF,CAAC;AAC3C,gBAAO;;AAET,cAAO;MACT;;;AAGkB;AACZ,2BAAc,MAAM;AACL,QAAnB,AAAY,WAAD;AACX,cAAO,yBAAkB,WAAW;MACtC;;;AAGkC;AAChC,cAAO;MACT;;WAG2B;AAAR;AACb,2BAAc,MAAM;AACD,QAAvB,AAAY,WAAD,UAAQ,GAAG;AACtB,cAAO,yBAAkB,WAAW;MACtC;;aAG6B,WAAkB,KAAY;AAAtC;AACf,2BAAc,MAAM;AACA,QAAxB,AAAW,WAAA,QAAC,GAAG,EAAI,KAAK;AACxB,cAAO,yBAAkB,WAAW;MACtC;;;;IA/EW,WAAK;IAII,qBAAe;IAGf;IAGf;;EAsEP;;;;;;;;;;;;;;;;;;;;;;MApFkC,4DAAQ;YAAG","file":"../../../../../../../../../../packages/shared_preferences_windows/shared_preferences_windows.dart.lib.js"}');
  // Exports:
  return {
    shared_preferences_windows: shared_preferences_windows
  };
}));

//# sourceMappingURL=shared_preferences_windows.dart.lib.js.map
