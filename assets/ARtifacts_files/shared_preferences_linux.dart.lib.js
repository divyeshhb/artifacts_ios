define(['dart_sdk', 'packages/file/src/backends/local/local_file_system.dart', 'packages/path_provider_linux/path_provider_linux.dart', 'packages/path/src/path_set.dart', 'packages/file/src/interface/link.dart', 'packages/shared_preferences_platform_interface/method_channel_shared_preferences.dart'], (function load__packages__shared_preferences_linux__shared_preferences_linux_dart(dart_sdk, packages__file__src__backends__local__local_file_system$46dart, packages__path_provider_linux__path_provider_linux$46dart, packages__path__src__path_set$46dart, packages__file__src__interface__link$46dart, packages__shared_preferences_platform_interface__method_channel_shared_preferences$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const local_file_system = packages__file__src__backends__local__local_file_system$46dart.src__backends__local__local_file_system;
  const path_provider_linux = packages__path_provider_linux__path_provider_linux$46dart.path_provider_linux;
  const path = packages__path__src__path_set$46dart.path;
  const file = packages__file__src__interface__link$46dart.src__interface__file;
  const file_system = packages__file__src__interface__link$46dart.src__interface__file_system;
  const shared_preferences_platform_interface = packages__shared_preferences_platform_interface__method_channel_shared_preferences$46dart.shared_preferences_platform_interface;
  var shared_preferences_linux = Object.create(dart.library);
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
  var L0 = "package:shared_preferences_linux/shared_preferences_linux.dart";
  var _cachedPreferences = dart.privateName(shared_preferences_linux, "_cachedPreferences");
  var _getLocalDataFile = dart.privateName(shared_preferences_linux, "_getLocalDataFile");
  var _readPreferences = dart.privateName(shared_preferences_linux, "_readPreferences");
  var _writePreferences = dart.privateName(shared_preferences_linux, "_writePreferences");
  var fs = dart.privateName(shared_preferences_linux, "SharedPreferencesLinux.fs");
  shared_preferences_linux.SharedPreferencesLinux = class SharedPreferencesLinux extends shared_preferences_platform_interface.SharedPreferencesStorePlatform {
    get fs() {
      return this[fs];
    }
    set fs(value) {
      this[fs] = value;
    }
    [_getLocalDataFile]() {
      return async.async(FileL(), (function* _getLocalDataFile() {
        let pathProvider = new path_provider_linux.PathProviderLinux.new();
        let directory = (yield pathProvider.getApplicationSupportPath());
        return this.fs.file(path.join(directory, "shared_preferences.json"));
      }).bind(this));
    }
    [_readPreferences]() {
      return async.async(MapLOfStringL$ObjectL(), (function* _readPreferences() {
        if (this[_cachedPreferences] != null) {
          return this[_cachedPreferences];
        }
        this[_cachedPreferences] = new (IdentityMapOfStringL$ObjectL()).new();
        let localDataFile = (yield this[_getLocalDataFile]());
        if (dart.test(localDataFile.existsSync())) {
          let stringMap = localDataFile.readAsStringSync();
          if (stringMap[$isNotEmpty]) {
            this[_cachedPreferences] = MapLOfStringL$ObjectL().as(convert.json.decode(stringMap));
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
  (shared_preferences_linux.SharedPreferencesLinux.new = function() {
    this[_cachedPreferences] = null;
    this[fs] = new local_file_system.LocalFileSystem.new();
    ;
  }).prototype = shared_preferences_linux.SharedPreferencesLinux.prototype;
  dart.addTypeTests(shared_preferences_linux.SharedPreferencesLinux);
  dart.addTypeCaches(shared_preferences_linux.SharedPreferencesLinux);
  dart.setMethodSignature(shared_preferences_linux.SharedPreferencesLinux, () => ({
    __proto__: dart.getMethods(shared_preferences_linux.SharedPreferencesLinux.__proto__),
    [_getLocalDataFile]: dart.fnType(dart.legacy(async.Future$(dart.legacy(file.File))), []),
    [_readPreferences]: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))))), []),
    [_writePreferences]: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object)))]),
    clear: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), []),
    getAll: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))))), []),
    remove: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String)]),
    setValue: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(shared_preferences_linux.SharedPreferencesLinux, L0);
  dart.setFieldSignature(shared_preferences_linux.SharedPreferencesLinux, () => ({
    __proto__: dart.getFields(shared_preferences_linux.SharedPreferencesLinux.__proto__),
    [_cachedPreferences]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object)))),
    fs: dart.fieldType(dart.legacy(file_system.FileSystem))
  }));
  dart.defineLazy(shared_preferences_linux.SharedPreferencesLinux, {
    /*shared_preferences_linux.SharedPreferencesLinux.instance*/get instance() {
      return new shared_preferences_linux.SharedPreferencesLinux.new();
    },
    set instance(_) {}
  }, true);
  dart.trackLibraries("packages/shared_preferences_linux/shared_preferences_linux.dart", {
    "package:shared_preferences_linux/shared_preferences_linux.dart": shared_preferences_linux
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shared_preferences_linux.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0Ba;;;;;;;AAGmB;AACtB,2BAAe;AACf,yBAAY,MAAM,AAAa,YAAD;AACpC,cAAO,AAAG,cAAK,UAAU,SAAS,EAAE;MACtC;;;AAI4C;AAC1C,YAAI,4BAAsB;AACxB,gBAAO;;AAGc,QAAvB,2BAAqB;AACjB,6BAAgB,MAAM;AAC1B,sBAAI,AAAc,aAAD;AACR,0BAAY,AAAc,aAAD;AAChC,cAAI,AAAU,SAAD;AACuD,YAAlE,2BAA4C,2BAAvB,AAAK,oBAAO,SAAS;;;AAI9C,cAAO;MACT;;wBAImD;AAArB;AAC5B;AACM,+BAAgB,MAAM;AAC1B,yBAAK,AAAc,aAAD;AACyB,YAAzC,AAAc,aAAD,wBAAuB;;AAElC,0BAAY,AAAK,oBAAO,WAAW;AACG,UAA1C,AAAc,aAAD,mBAAmB,SAAS;;cAClC;AACsC,UAA7C,WAAM,AAAsC,gDAAF,CAAC;AAC3C,gBAAO;;AAET,cAAO;MACT;;;AAGkB;AACZ,2BAAc,MAAM;AACL,QAAnB,AAAY,WAAD;AACX,cAAO,yBAAkB,WAAW;MACtC;;;AAGkC;AAChC,cAAO;MACT;;WAG2B;AAAR;AACb,2BAAc,MAAM;AACD,QAAvB,AAAY,WAAD,UAAQ,GAAG;AACtB,cAAO,yBAAkB,WAAW;MACtC;;aAG6B,WAAkB,KAAY;AAAtC;AACf,2BAAc,MAAM;AACA,QAAxB,AAAW,WAAA,QAAC,GAAG,EAAI,KAAK;AACxB,cAAO,yBAAkB,WAAW;MACtC;;;;IAzEoB;IAIT,WAAK;;EAsElB;;;;;;;;;;;;;;;;;;;;MA7EgC,wDAAQ;YAAG","file":"../../../../../../../../../../packages/shared_preferences_linux/shared_preferences_linux.dart.lib.js"}');
  // Exports:
  return {
    shared_preferences_linux: shared_preferences_linux
  };
}));

//# sourceMappingURL=shared_preferences_linux.dart.lib.js.map
