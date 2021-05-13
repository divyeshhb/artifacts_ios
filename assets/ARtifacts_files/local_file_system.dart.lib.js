define(['dart_sdk', 'packages/file/src/backends/local/local_link.dart', 'packages/path/src/path_set.dart', 'packages/file/src/interface/link.dart'], (function load__packages__file__src__backends__local__local_file_system_dart(dart_sdk, packages__file__src__backends__local__local_link$46dart, packages__path__src__path_set$46dart, packages__file__src__interface__link$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const io = dart_sdk.io;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const local_directory = packages__file__src__backends__local__local_link$46dart.src__backends__local__local_directory;
  const local_file = packages__file__src__backends__local__local_link$46dart.src__backends__local__local_file;
  const local_link = packages__file__src__backends__local__local_link$46dart.src__backends__local__local_link;
  const context = packages__path__src__path_set$46dart.src__context;
  const file_system = packages__file__src__interface__link$46dart.src__interface__file_system;
  const directory = packages__file__src__interface__link$46dart.src__interface__directory;
  const file = packages__file__src__interface__link$46dart.src__interface__file;
  const link = packages__file__src__interface__link$46dart.src__interface__link;
  var local_file_system = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "package:file/src/backends/local/local_file_system.dart";
  local_file_system.LocalFileSystem = class LocalFileSystem extends file_system.FileSystem {
    directory(path) {
      return new local_directory.LocalDirectory.new(this, io.Directory.new(this.getPath(path)));
    }
    file(path) {
      return new local_file.LocalFile.new(this, io.File.new(this.getPath(path)));
    }
    link(path) {
      return new local_link.LocalLink.new(this, io.Link.new(this.getPath(path)));
    }
    get path() {
      return context.Context.new();
    }
    get systemTempDirectory() {
      return new local_directory.LocalDirectory.new(this, io.Directory.systemTemp);
    }
    get currentDirectory() {
      return this.directory(io.Directory.current.path);
    }
    set currentDirectory(path) {
      return io.Directory.current = path;
    }
    stat(path) {
      return io.FileStat.stat(path);
    }
    statSync(path) {
      return io.FileStat.statSync(path);
    }
    identical(path1, path2) {
      return io.FileSystemEntity.identical(path1, path2);
    }
    identicalSync(path1, path2) {
      return io.FileSystemEntity.identicalSync(path1, path2);
    }
    get isWatchSupported() {
      return io.FileSystemEntity.isWatchSupported;
    }
    type(path, opts) {
      let followLinks = opts && 'followLinks' in opts ? opts.followLinks : true;
      return io.FileSystemEntity.type(path, {followLinks: followLinks});
    }
    typeSync(path, opts) {
      let followLinks = opts && 'followLinks' in opts ? opts.followLinks : true;
      return io.FileSystemEntity.typeSync(path, {followLinks: followLinks});
    }
  };
  (local_file_system.LocalFileSystem.new = function() {
    local_file_system.LocalFileSystem.__proto__.new.call(this);
    ;
  }).prototype = local_file_system.LocalFileSystem.prototype;
  dart.addTypeTests(local_file_system.LocalFileSystem);
  dart.addTypeCaches(local_file_system.LocalFileSystem);
  dart.setMethodSignature(local_file_system.LocalFileSystem, () => ({
    __proto__: dart.getMethods(local_file_system.LocalFileSystem.__proto__),
    directory: dart.fnType(dart.legacy(directory.Directory), [dart.dynamic]),
    file: dart.fnType(dart.legacy(file.File), [dart.dynamic]),
    link: dart.fnType(dart.legacy(link.Link), [dart.dynamic]),
    stat: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.FileStat))), [dart.legacy(core.String)]),
    statSync: dart.fnType(dart.legacy(io.FileStat), [dart.legacy(core.String)]),
    identical: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String), dart.legacy(core.String)]),
    identicalSync: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String), dart.legacy(core.String)]),
    type: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.FileSystemEntityType))), [dart.legacy(core.String)], {followLinks: dart.legacy(core.bool)}, {}),
    typeSync: dart.fnType(dart.legacy(io.FileSystemEntityType), [dart.legacy(core.String)], {followLinks: dart.legacy(core.bool)}, {})
  }));
  dart.setGetterSignature(local_file_system.LocalFileSystem, () => ({
    __proto__: dart.getGetters(local_file_system.LocalFileSystem.__proto__),
    path: dart.legacy(context.Context),
    systemTempDirectory: dart.legacy(directory.Directory),
    currentDirectory: dart.legacy(directory.Directory),
    isWatchSupported: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(local_file_system.LocalFileSystem, () => ({
    __proto__: dart.getSetters(local_file_system.LocalFileSystem.__proto__),
    currentDirectory: dart.dynamic
  }));
  dart.setLibraryUri(local_file_system.LocalFileSystem, L0);
  dart.trackLibraries("packages/file/src/backends/local/local_file_system.dart", {
    "package:file/src/backends/local/local_file_system.dart": local_file_system
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["local_file_system.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;cAuB8B;AACxB,oDAAe,MAAS,iBAAU,aAAQ,IAAI;IAAG;SAGnC;AAAS,0CAAU,MAAS,YAAK,aAAQ,IAAI;IAAG;SAGhD;AAAS,0CAAU,MAAS,YAAK,aAAQ,IAAI;IAAG;;AAG5C,YAAE;IAAS;;AAO7B,oDAAe,MAAmB;IAAW;;AAGf,4BAAuB,AAAQ;IAAK;yBAGzC;AAAS,YAAa,wBAAU,IAAI;;SAGjC;AAAS,YAAY,kBAAK,IAAI;IAAC;aAGnC;AAAS,YAAY,sBAAS,IAAI;IAAC;cAGjC,OAAc;AACxC,YAAoB,+BAAU,KAAK,EAAE,KAAK;IAAC;kBAGrB,OAAc;AACpC,YAAoB,mCAAc,KAAK,EAAE,KAAK;IAAC;;AAGtB,YAAoB;IAAgB;SAGrB;UAC9B;AACV,YAAoB,0BAAK,IAAI,gBAAe,WAAW;IAAC;aAGpB;UAAY;AAChD,YAAoB,8BAAS,IAAI,gBAAe,WAAW;IAAC;;;AApD1D;;EAAiB","file":"../../../../../../../../../../../../../packages/file/src/backends/local/local_file_system.dart.lib.js"}');
  // Exports:
  return {
    src__backends__local__local_file_system: local_file_system
  };
}));

//# sourceMappingURL=local_file_system.dart.lib.js.map
