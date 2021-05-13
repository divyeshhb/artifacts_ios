define(['dart_sdk'], (function load__packages__file__src__interface__link_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const io = dart_sdk.io;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var link = Object.create(dart.library);
  var file_system = Object.create(dart.library);
  var file_system_entity = Object.create(dart.library);
  var file = Object.create(dart.library);
  var directory = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(false);
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var FileSystemEntityL = () => (FileSystemEntityL = dart.constFn(dart.legacy(io.FileSystemEntity)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var UriL = () => (UriL = dart.constFn(dart.legacy(core.Uri)))();
  const CT = Object.create(null);
  var L1 = "package:file/src/interface/file_system.dart";
  var L4 = "package:file/src/interface/directory.dart";
  var L0 = "package:file/src/interface/link.dart";
  var L3 = "package:file/src/interface/file.dart";
  var L2 = "package:file/src/interface/file_system_entity.dart";
  link.Link = class Link extends core.Object {};
  (link.Link.new = function() {
    ;
  }).prototype = link.Link.prototype;
  dart.addTypeTests(link.Link);
  dart.addTypeCaches(link.Link);
  link.Link[dart.implements] = () => [file_system_entity.FileSystemEntity, io.Link];
  dart.setLibraryUri(link.Link, L0);
  file_system.FileSystem = class FileSystem extends core.Object {
    isFile(path) {
      return async.async(boolL(), (function* isFile() {
        return dart.equals(yield this.type(path), io.FileSystemEntityType.file);
      }).bind(this));
    }
    isFileSync(path) {
      return dart.equals(this.typeSync(path), io.FileSystemEntityType.file);
    }
    isDirectory(path) {
      return async.async(boolL(), (function* isDirectory() {
        return dart.equals(yield this.type(path), io.FileSystemEntityType.directory);
      }).bind(this));
    }
    isDirectorySync(path) {
      return dart.equals(this.typeSync(path), io.FileSystemEntityType.directory);
    }
    isLink(path) {
      return async.async(boolL(), (function* isLink() {
        return dart.equals(yield this.type(path), io.FileSystemEntityType.link);
      }).bind(this));
    }
    isLinkSync(path) {
      return dart.equals(this.typeSync(path), io.FileSystemEntityType.link);
    }
    getPath(path) {
      let t0;
      if (FileSystemEntityL().is(path)) {
        return path.path;
      } else if (StringL().is(path)) {
        return path;
      } else if (UriL().is(path)) {
        return this.path.fromUri(path);
      } else {
        dart.throw(new core.ArgumentError.new("Invalid type for \"path\": " + dart.str((t0 = path, t0 == null ? null : dart.runtimeType(t0)))));
      }
    }
  };
  (file_system.FileSystem.new = function() {
    ;
  }).prototype = file_system.FileSystem.prototype;
  dart.addTypeTests(file_system.FileSystem);
  dart.addTypeCaches(file_system.FileSystem);
  dart.setMethodSignature(file_system.FileSystem, () => ({
    __proto__: dart.getMethods(file_system.FileSystem.__proto__),
    isFile: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String)]),
    isFileSync: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    isDirectory: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String)]),
    isDirectorySync: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    isLink: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String)]),
    isLinkSync: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    getPath: dart.fnType(dart.legacy(core.String), [dart.dynamic])
  }));
  dart.setLibraryUri(file_system.FileSystem, L1);
  file_system_entity.FileSystemEntity = class FileSystemEntity extends core.Object {};
  (file_system_entity.FileSystemEntity.new = function() {
    ;
  }).prototype = file_system_entity.FileSystemEntity.prototype;
  dart.addTypeTests(file_system_entity.FileSystemEntity);
  dart.addTypeCaches(file_system_entity.FileSystemEntity);
  file_system_entity.FileSystemEntity[dart.implements] = () => [io.FileSystemEntity];
  dart.setLibraryUri(file_system_entity.FileSystemEntity, L2);
  file.File = class File extends core.Object {};
  (file.File.new = function() {
    ;
  }).prototype = file.File.prototype;
  dart.addTypeTests(file.File);
  dart.addTypeCaches(file.File);
  file.File[dart.implements] = () => [file_system_entity.FileSystemEntity, io.File];
  dart.setLibraryUri(file.File, L3);
  directory.Directory = class Directory extends core.Object {};
  (directory.Directory.new = function() {
    ;
  }).prototype = directory.Directory.prototype;
  dart.addTypeTests(directory.Directory);
  dart.addTypeCaches(directory.Directory);
  directory.Directory[dart.implements] = () => [file_system_entity.FileSystemEntity, io.Directory];
  dart.setLibraryUri(directory.Directory, L4);
  dart.trackLibraries("packages/file/src/interface/link.dart", {
    "package:file/src/interface/link.dart": link,
    "package:file/src/interface/file_system.dart": file_system,
    "package:file/src/interface/file_system_entity.dart": file_system_entity,
    "package:file/src/interface/file.dart": file,
    "package:file/src/interface/directory.dart": directory
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["link.dart","file_system.dart","file_system_entity.dart","file.dart","directory.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;EA2BA;;;;;;WCgG6B;AAAR;AACf,cAAiB,aAAjB,MAAM,UAAK,IAAI,GAA6B;MAAI;;eAI7B;AACnB,YAAe,aAAf,cAAS,IAAI,GAA6B;IAAI;gBAGlB;AAAR;AACpB,cAAiB,aAAjB,MAAM,UAAK,IAAI,GAA6B;MAAS;;oBAI7B;AACxB,YAAe,aAAf,cAAS,IAAI,GAA6B;IAAS;WAG5B;AAAR;AACf,cAAiB,aAAjB,MAAM,UAAK,IAAI,GAA6B;MAAI;;eAI7B;AACnB,YAAe,aAAf,cAAS,IAAI,GAA6B;IAAI;YAM3B;;AACrB,UAAS,uBAAL,IAAI;AACN,cAAO,AAAK,KAAD;YACN,KAAS,aAAL,IAAI;AACb,cAAO,KAAI;YACN,KAAS,UAAL,IAAI;AACb,cAAY,AAAK,mBAAQ,IAAI;;AAEuC,QAApE,WAAM,2BAAc,AAA+C,+CAAnB,IAAI,eAAJ,OAAM;;IAE1D;;;;EA3IkB;;;;;;;;;;;;;;;;;ECmBpB;;;;;;;;ECFA;;;;;;;;ECWA","file":"../../../../../../../../../../../../packages/file/src/interface/link.dart.lib.js"}');
  // Exports:
  return {
    src__interface__link: link,
    src__interface__file_system: file_system,
    src__interface__file_system_entity: file_system_entity,
    src__interface__file: file,
    src__interface__directory: directory
  };
}));

//# sourceMappingURL=link.dart.lib.js.map
