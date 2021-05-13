define(['dart_sdk', 'packages/path/src/path_set.dart', 'packages/process/src/interface/local_process_manager.dart'], (function load__packages__xdg_directories__xdg_directories_dart(dart_sdk, packages__path__src__path_set$46dart, packages__process__src__interface__local_process_manager$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const io = dart_sdk.io;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const path = packages__path__src__path_set$46dart.path;
  const local_process_manager = packages__process__src__interface__local_process_manager$46dart.src__interface__local_process_manager;
  var xdg_directories = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $split = dartx.split;
  var $isNotEmpty = dartx.isNotEmpty;
  var $where = dartx.where;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var StringLToboolL = () => (StringLToboolL = dart.constFn(dart.fnType(boolL(), [StringL()])))();
  var DirectoryL = () => (DirectoryL = dart.constFn(dart.legacy(io.Directory)))();
  var StringLToDirectoryL = () => (StringLToDirectoryL = dart.constFn(dart.fnType(DirectoryL(), [StringL()])))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  var FileSystemExceptionL = () => (FileSystemExceptionL = dart.constFn(dart.legacy(io.FileSystemException)))();
  var LinkedHashSetOfStringL = () => (LinkedHashSetOfStringL = dart.constFn(collection.LinkedHashSet$(StringL())))();
  var JSArrayOfDirectoryL = () => (JSArrayOfDirectoryL = dart.constFn(_interceptors.JSArray$(DirectoryL())))();
  var StringLToStringL = () => (StringLToStringL = dart.constFn(dart.fnType(StringL(), [StringL()])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/xdg_directories-0.1.2/lib/xdg_directories.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constSet(StringL(), []);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: local_process_manager.LocalProcessManager.prototype
      });
    }
  }, false);
  var C0;
  xdg_directories._directoryListFromEnvironment = function _directoryListFromEnvironment(envVar, fallback) {
    if (!(envVar != null)) dart.assertFailed(null, L0, 53, 10, "envVar != null");
    if (!(fallback != null)) dart.assertFailed(null, L0, 54, 10, "fallback != null");
    let value = xdg_directories._getenv(envVar);
    if (value == null || value[$isEmpty]) {
      return fallback;
    }
    return value[$split](":")[$where](dart.fn(value => value[$isNotEmpty], StringLToboolL()))[$map](DirectoryL(), dart.fn(entry => io.Directory.new(entry), StringLToDirectoryL()))[$toList]();
  };
  xdg_directories._directoryFromEnvironment = function _directoryFromEnvironment(envVar, fallback) {
    if (!(envVar != null)) dart.assertFailed(null, L0, 67, 10, "envVar != null");
    let value = xdg_directories._getenv(envVar);
    if (value == null || value[$isEmpty]) {
      if (fallback == null) {
        return null;
      }
      return xdg_directories._getDirectory(fallback);
    }
    return io.Directory.new(value);
  };
  xdg_directories._getDirectory = function _getDirectory(subdir) {
    if (!(subdir != null)) dart.assertFailed(null, L0, 80, 10, "subdir != null");
    if (!subdir[$isNotEmpty]) dart.assertFailed(null, L0, 81, 10, "subdir.isNotEmpty");
    let homeDir = xdg_directories._getenv("HOME");
    if (homeDir == null || homeDir[$isEmpty]) {
      dart.throw(new core.StateError.new("The \"HOME\" environment variable is not set. This package (and POSIX) " + "requires that HOME be set."));
    }
    return io.Directory.new(path.joinAll(JSArrayOfStringL().of([homeDir, subdir])));
  };
  xdg_directories.getUserDirectory = function getUserDirectory(dirName) {
    let result = xdg_directories._processManager.runSync(JSArrayOfStringL().of(["xdg-user-dir", dirName]), {includeParentEnvironment: true, stdoutEncoding: convert.Encoding.getByName("utf8")});
    let path = convert.utf8.decode(ListOfint().as(result.stdout))[$split]("\n")[$_get](0);
    return io.Directory.new(path);
  };
  xdg_directories.getUserDirectoryNames = function getUserDirectoryNames() {
    let configFile = io.File.new(path.join(xdg_directories.configHome.path, "user-dirs.dirs"));
    let contents = null;
    try {
      contents = configFile.readAsLinesSync();
    } catch (e) {
      let ex = dart.getThrown(e);
      if (FileSystemExceptionL().is(ex)) {
        return C0 || CT.C0;
      } else
        throw e;
    }
    let result = LinkedHashSetOfStringL().new();
    let dirRegExp = core.RegExp.new("^\\s*XDG_(?<dirname>[^=]*)_DIR\\s*=\\s*(?<dir>.*)\\s*$");
    for (let line of contents) {
      let match = dirRegExp.firstMatch(line);
      if (match == null) {
        continue;
      }
      result.add(match.namedGroup("dirname"));
    }
    return result;
  };
  dart.copyProperties(xdg_directories, {
    set xdgEnvironmentOverride(override) {
      let t2;
      xdg_directories._xdgEnvironmentOverride = override;
      xdg_directories._getenv = (t2 = xdg_directories._xdgEnvironmentOverride, t2 == null ? xdg_directories._productionGetEnv : t2);
    },
    get xdgEnvironmentOverride() {
      return xdg_directories._xdgEnvironmentOverride;
    },
    set xdgProcessManager(processManager) {
      xdg_directories._processManager = processManager;
    },
    get cacheHome() {
      return xdg_directories._directoryFromEnvironment("XDG_CACHE_HOME", ".cache");
    },
    get configDirs() {
      return xdg_directories._directoryListFromEnvironment("XDG_CONFIG_DIRS", JSArrayOfDirectoryL().of([io.Directory.new("/etc/xdg")]));
    },
    get configHome() {
      return xdg_directories._directoryFromEnvironment("XDG_CONFIG_HOME", ".config");
    },
    get dataDirs() {
      return xdg_directories._directoryListFromEnvironment("XDG_DATA_DIRS", JSArrayOfDirectoryL().of([io.Directory.new("/usr/local/share"), io.Directory.new("/usr/share")]));
    },
    get dataHome() {
      return xdg_directories._directoryFromEnvironment("XDG_DATA_HOME", ".local/share");
    },
    get runtimeDir() {
      return xdg_directories._directoryFromEnvironment("XDG_RUNTIME_DIR", null);
    }
  });
  var C1;
  dart.defineLazy(xdg_directories, {
    /*xdg_directories._xdgEnvironmentOverride*/get _xdgEnvironmentOverride() {
      return null;
    },
    set _xdgEnvironmentOverride(_) {},
    /*xdg_directories._productionGetEnv*/get _productionGetEnv() {
      return dart.fn(value => io.Platform.environment[$_get](value), StringLToStringL());
    },
    set _productionGetEnv(_) {},
    /*xdg_directories._getenv*/get _getenv() {
      return xdg_directories._productionGetEnv;
    },
    set _getenv(_) {},
    /*xdg_directories._processManager*/get _processManager() {
      return C1 || CT.C1;
    },
    set _processManager(_) {}
  }, true);
  dart.trackLibraries("packages/xdg_directories/xdg_directories.dart", {
    "package:xdg_directories/xdg_directories.dart": xdg_directories
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["xdg_directories.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;yFAmDW,QAAwB;AACjC,UAAO,AAAO,MAAD,IAAI;AACjB,UAAO,AAAS,QAAD,IAAI;AACN,gBAAQ,AAAO,wBAAC,MAAM;AACnC,QAAI,AAAM,KAAD,IAAI,QAAQ,AAAM,KAAD;AACxB,YAAO,SAAQ;;AAEjB,UAAO,AAAM,AAAW,AAErB,AAEA,MAJS,SAAO,aAAW,QAAQ,SAC7B,AAAM,KAAD,sDACI,QAAQ,SACjB,iBAAU,KAAK;EAE1B;iFAE2C,QAAe;AACxD,UAAO,AAAO,MAAD,IAAI;AACJ,gBAAQ,AAAO,wBAAC,MAAM;AACnC,QAAI,AAAM,KAAD,IAAI,QAAQ,AAAM,KAAD;AACxB,UAAI,AAAS,QAAD,IAAI;AACd,cAAO;;AAET,YAAO,+BAAc,QAAQ;;AAE/B,UAAO,kBAAU,KAAK;EACxB;yDAG+B;AAC7B,UAAO,AAAO,MAAD,IAAI;AACjB,SAAO,AAAO,MAAD;AACA,kBAAU,AAAO,wBAAC;AAC/B,QAAI,AAAQ,OAAD,IAAI,QAAQ,AAAQ,OAAD;AAGK,MAFjC,WAAM,wBAAU,AACZ,4EACA;;AAEN,UAAO,kBAAU,aAAqB,uBAAC,OAAO,EAAE,MAAM;EACxD;+DAyDkC;AACZ,iBAAS,AAAgB,wCACnC,uBAAC,gBAAgB,OAAO,+BACN,sBACD,2BAAU;AAExB,eAAO,AAAK,AAAsB,AAAW,mCAA1B,AAAO,MAAD,kBAAe,aAAM;AAC3D,UAAO,kBAAU,IAAI;EACvB;;AAUa,qBAAa,YAAK,UAAU,AAAW,iCAAM;AAC3C;AACb;AACyC,MAAvC,WAAW,AAAW,UAAD;;;AACrB;AACA;;;;AAEgB,iBAAiB;AACtB,oBACT,gBAAO;AACX,aAAY,OAAQ,SAAQ;AACR,kBAAQ,AAAU,SAAD,YAAY,IAAI;AACnD,UAAI,AAAM,KAAD,IAAI;AACX;;AAEqC,MAAvC,AAAO,MAAD,KAAK,AAAM,KAAD,YAAY;;AAE9B,UAAO,OAAM;EACf;;+BA9J+C;;AACX,MAAlC,0CAA0B,QAAQ;AACoB,MAAtD,2BAAkC,oDAAxB,OAA2B;IACvC;;AAOkD;IAAuB;0BAWpC;AACH,MAAhC,kCAAkB,cAAc;IAClC;;AAkDI,uDAA0B,kBAAkB;IAAS;;AAQvD,YAAO,+CACL,mBACW,0BAAC,iBAAU;IAE1B;;AAOI,uDAA0B,mBAAmB;IAAU;;AAOzD,YAAO,+CACL,iBACW,0BAAC,iBAAU,qBAAqB,iBAAU;IAEzD;;AAOI,uDAA0B,iBAAiB;IAAe;;AAOlC,uDAA0B,mBAAmB;IAAK;;;;MA1G1D,uCAAuB;;;;MACvB,iCAAiB;YACjC,SAAQ,SAAmB,AAAW,+BAAC,KAAK;;;MAC5B,uBAAO;YAAG;;;MAWf,+BAAe","file":"../../../../../../../../../../packages/xdg_directories/xdg_directories.dart.lib.js"}');
  // Exports:
  return {
    xdg_directories: xdg_directories
  };
}));

//# sourceMappingURL=xdg_directories.dart.lib.js.map
