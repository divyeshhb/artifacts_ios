define(['dart_sdk', 'packages/platform/src/interface/local_platform.dart', 'packages/file/src/backends/local/local_file_system.dart', 'packages/path/src/path_set.dart'], (function load__packages__process__src__interface__common_dart(dart_sdk, packages__platform__src__interface__local_platform$46dart, packages__file__src__backends__local__local_file_system$46dart, packages__path__src__path_set$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const io = dart_sdk.io;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const local_platform = packages__platform__src__interface__local_platform$46dart.src__interface__local_platform;
  const local_file_system = packages__file__src__backends__local__local_file_system$46dart.src__backends__local__local_file_system;
  const context$ = packages__path__src__path_set$46dart.src__context;
  var common = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $contains = dartx.contains;
  var $_get = dartx._get;
  var $split = dartx.split;
  var $firstWhere = dartx.firstWhere;
  var $isNotEmpty = dartx.isNotEmpty;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $expand = dartx.expand;
  var $cast = dartx.cast;
  dart._checkModuleNullSafetyMode(false);
  var FileSystemExceptionL = () => (FileSystemExceptionL = dart.constFn(dart.legacy(io.FileSystemException)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(StringL())))();
  var ListLOfStringL = () => (ListLOfStringL = dart.constFn(dart.legacy(ListOfStringL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StringLToboolL = () => (StringLToboolL = dart.constFn(dart.fnType(boolL(), [StringL()])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var StringLToStringL = () => (StringLToStringL = dart.constFn(dart.fnType(StringL(), [StringL()])))();
  var IterableOfStringL = () => (IterableOfStringL = dart.constFn(core.Iterable$(StringL())))();
  var IterableLOfStringL = () => (IterableLOfStringL = dart.constFn(dart.legacy(IterableOfStringL())))();
  var StringLToIterableLOfStringL = () => (StringLToIterableLOfStringL = dart.constFn(dart.fnType(IterableLOfStringL(), [StringL()])))();
  var IterableLOfStringLToIterableLOfStringL = () => (IterableLOfStringLToIterableLOfStringL = dart.constFn(dart.fnType(IterableLOfStringL(), [IterableLOfStringL()])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/process-3.0.13/lib/src/interface/common.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: local_platform.LocalPlatform.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: local_file_system.LocalFileSystem.prototype
      });
    },
    get C2() {
      return C2 = dart.constMap(StringL(), StringL(), ["linux", "posix", "macos", "posix", "android", "posix", "ios", "posix", "fuchsia", "posix", "windows", "windows"]);
    }
  }, false);
  var C0;
  var C1;
  common.sanitizeExecutablePath = function sanitizeExecutablePath(executable, opts) {
    let platform = opts && 'platform' in opts ? opts.platform : C0 || CT.C0;
    if (executable[$isEmpty]) {
      return executable;
    }
    if (!dart.test(platform.isWindows)) {
      return executable;
    }
    if (executable[$contains](" ") && !executable[$contains]("\"")) {
      return "\"" + dart.str(executable) + "\"";
    }
    return executable;
  };
  common.getExecutablePath = function getExecutablePath(command, workingDirectory, opts) {
    let platform = opts && 'platform' in opts ? opts.platform : C0 || CT.C0;
    let fs = opts && 'fs' in opts ? opts.fs : C1 || CT.C1;
    if (!(common._osToPathStyle[$_get](platform.operatingSystem) == fs.path.style.name)) dart.assertFailed(null, L0, 57, 10, "_osToPathStyle[platform.operatingSystem] == fs.path.style.name");
    try {
      workingDirectory == null ? workingDirectory = fs.currentDirectory.path : null;
    } catch (e) {
      let ex = dart.getThrown(e);
      if (FileSystemExceptionL().is(ex)) {
        workingDirectory == null ? workingDirectory = "." : null;
      } else
        throw e;
    }
    let context = context$.Context.new({style: fs.path.style, current: workingDirectory});
    let pathSeparator = dart.test(platform.isWindows) ? ";" : ":";
    let extensions = JSArrayOfStringL().of([]);
    if (dart.test(platform.isWindows) && context.extension(command)[$isEmpty]) {
      extensions = platform.environment[$_get]("PATHEXT")[$split](pathSeparator);
    }
    let candidates = JSArrayOfStringL().of([]);
    if (command[$contains](context.separator)) {
      candidates = ListLOfStringL().as(common._getCandidatePaths(command, JSArrayOfStringL().of([workingDirectory]), extensions, context));
    } else {
      let searchPath = platform.environment[$_get]("PATH")[$split](pathSeparator);
      candidates = ListLOfStringL().as(common._getCandidatePaths(command, searchPath, extensions, context));
    }
    return candidates[$firstWhere](dart.fn(path => fs.file(path).existsSync(), StringLToboolL()), {orElse: dart.fn(() => null, VoidToNull())});
  };
  common._getCandidatePaths = function _getCandidatePaths(command, searchPaths, extensions, context) {
    let withExtensions = dart.test(extensions[$isNotEmpty]) ? extensions[$map](StringL(), dart.fn(ext => dart.str(command) + dart.str(ext), StringLToStringL()))[$toList]() : JSArrayOfStringL().of([command]);
    if (dart.test(context.isAbsolute(command))) {
      return withExtensions;
    }
    return searchPaths[$map](IterableLOfStringL(), dart.fn(path => withExtensions[$map](StringL(), dart.fn(command => context.join(path, command), StringLToStringL())), StringLToIterableLOfStringL()))[$expand](StringL(), dart.fn(e => e, IterableLOfStringLToIterableLOfStringL()))[$toList]()[$cast](StringL());
  };
  var C2;
  dart.defineLazy(common, {
    /*common._osToPathStyle*/get _osToPathStyle() {
      return C2 || CT.C2;
    }
  }, true);
  dart.trackLibraries("packages/process/src/interface/common.dart", {
    "package:process/src/interface/common.dart": common
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["common.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;kEAoBqC;QACvB;AACZ,QAAI,AAAW,UAAD;AACZ,YAAO,WAAU;;AAEnB,mBAAK,AAAS,QAAD;AACX,YAAO,WAAU;;AAEnB,QAAI,AAAW,UAAD,YAAU,SAAS,AAAW,UAAD,YAAU;AAGnD,YAAO,AAAe,iBAAZ,UAAU;;AAEtB,UAAO,WAAU;EACnB;wDAiBS,SACA;QACE;QACE;AAEX,UAAO,AAAc,AAA2B,6BAA1B,AAAS,QAAD,qBAAqB,AAAG,AAAK,AAAM,EAAZ;AAErD;AAC+C,MAA7C,AAAiB,gBAAD,IAAC,OAAjB,mBAAqB,AAAG,AAAiB,EAAlB,yBAAN;;;AACjB;AAIwB,QAAxB,AAAiB,gBAAD,IAAC,OAAjB,mBAAqB,MAAJ;;;;AAEX,kBACA,6BAAe,AAAG,AAAK,EAAN,sBAAsB,gBAAgB;AAIxD,kCAAgB,AAAS,QAAD,cAAa,MAAM;AAErC,qBAAqB;AAClC,kBAAI,AAAS,QAAD,eAAc,AAAQ,AAAmB,OAApB,WAAW,OAAO;AACgB,MAAjE,aAAa,AAAS,AAAW,AAAY,QAAxB,oBAAa,mBAAiB,aAAa;;AAGrD,qBAAqB;AAClC,QAAI,AAAQ,OAAD,YAAU,AAAQ,OAAD;AAEmC,mBAD7D,oBAAa,0BACT,OAAO,EAAU,uBAAC,gBAAgB,IAAG,UAAU,EAAE,OAAO;;AAE/C,uBAAa,AAAS,AAAW,AAAS,QAArB,oBAAa,gBAAc,aAAa;AACD,mBAAzE,oBAAa,0BAAmB,OAAO,EAAE,UAAU,EAAE,UAAU,EAAE,OAAO;;AAE1E,UAAO,AAAW,WAAD,cAAY,QAAQ,QAAS,AAAG,AAAW,EAAZ,MAAM,IAAI,4CAC9C,cAAM;EACpB;0DAUS,SACM,aACA,YACL;AAEK,mCAAiB,AAAW,UAAD,iBAClC,AAAW,AAAoC,UAArC,kBAAK,QAAQ,OAAsB,SAAZ,OAAO,aAAC,GAAG,qCACpC,uBAAC,OAAO;AACtB,kBAAI,AAAQ,OAAD,YAAY,OAAO;AAC5B,YAAO,eAAc;;AAEvB,UAAO,AACF,AAEA,AACA,AACA,YALa,6BACT,QAAQ,QACT,AAAe,cAAD,kBAAK,QAAQ,WAAY,AAAQ,OAAD,MAAM,IAAI,EAAE,OAAO,6EAC7D,QAAkB,KAAM,CAAC;EAGvC;;;MA1G0B,qBAAc","file":"../../../../../../../../../../../../packages/process/src/interface/common.dart.lib.js"}');
  // Exports:
  return {
    src__interface__common: common
  };
}));

//# sourceMappingURL=common.dart.lib.js.map
