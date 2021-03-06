define(['dart_sdk', 'packages/file/src/forwarding/forwarding_link.dart', 'packages/file/src/interface/link.dart', 'packages/file/src/common.dart'], (function load__packages__file__src__backends__local__local_link_dart(dart_sdk, packages__file__src__forwarding__forwarding_link$46dart, packages__file__src__interface__link$46dart, packages__file__src__common$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _internal = dart_sdk._internal;
  const io = dart_sdk.io;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const forwarding_file_system_entity = packages__file__src__forwarding__forwarding_link$46dart.src__forwarding__forwarding_file_system_entity;
  const forwarding_link = packages__file__src__forwarding__forwarding_link$46dart.src__forwarding__forwarding_link;
  const forwarding_file = packages__file__src__forwarding__forwarding_link$46dart.src__forwarding__forwarding_file;
  const forwarding_directory = packages__file__src__forwarding__forwarding_link$46dart.src__forwarding__forwarding_directory;
  const directory = packages__file__src__interface__link$46dart.src__interface__directory;
  const file = packages__file__src__interface__link$46dart.src__interface__file;
  const link = packages__file__src__interface__link$46dart.src__interface__link;
  const file_system = packages__file__src__interface__link$46dart.src__interface__file_system;
  const common = packages__file__src__common$46dart.src__common;
  var local_link = Object.create(dart.library);
  var local_file = Object.create(dart.library);
  var local_file_system_entity = Object.create(dart.library);
  var local_directory = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  var SymbolL = () => (SymbolL = dart.constFn(dart.legacy(core.Symbol)))();
  var LinkedMapOfSymbolL$dynamic = () => (LinkedMapOfSymbolL$dynamic = dart.constFn(_js_helper.LinkedMap$(SymbolL(), dart.dynamic)))();
  var FileSystemEntityL = () => (FileSystemEntityL = dart.constFn(dart.legacy(io.FileSystemEntity)))();
  var FutureOfFileSystemEntityL = () => (FutureOfFileSystemEntityL = dart.constFn(async.Future$(FileSystemEntityL())))();
  var FutureLOfFileSystemEntityL = () => (FutureLOfFileSystemEntityL = dart.constFn(dart.legacy(FutureOfFileSystemEntityL())))();
  var Uint8ListL = () => (Uint8ListL = dart.constFn(dart.legacy(typed_data.Uint8List)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  const CT = Object.create(null);
  var L0 = "package:file/src/backends/local/local_file_system_entity.dart";
  var L1 = "package:file/src/backends/local/local_link.dart";
  var L2 = "package:file/src/backends/local/local_file.dart";
  var L3 = "package:file/src/backends/local/local_directory.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const(new _js_helper.PrivateSymbol.new('_deleteSync', _deleteSync));
    },
    get C1() {
      return C1 = dart.const(new _internal.Symbol.new('recursive'));
    },
    get C2() {
      return C2 = dart.const(new _js_helper.PrivateSymbol.new('_delete', _delete));
    },
    get C3() {
      return C3 = dart.const(new _js_helper.PrivateSymbol.new('_rawPath', _rawPath));
    },
    get C4() {
      return C4 = dart.const(new _js_helper.PrivateSymbol.new('_path', _path));
    },
    get C5() {
      return C5 = dart.const(new _js_helper.PrivateSymbol.new('_absolutePath', _absolutePath));
    },
    get C6() {
      return C6 = dart.const(new _js_helper.PrivateSymbol.new('_deleteSync', _deleteSync$0));
    },
    get C7() {
      return C7 = dart.const(new _js_helper.PrivateSymbol.new('_delete', _delete$0));
    },
    get C8() {
      return C8 = dart.const(new _js_helper.PrivateSymbol.new('_rawPath', _rawPath$0));
    },
    get C9() {
      return C9 = dart.const(new _js_helper.PrivateSymbol.new('_path', _path$0));
    },
    get C10() {
      return C10 = dart.const(new _js_helper.PrivateSymbol.new('_absolutePath', _absolutePath$0));
    },
    get C11() {
      return C11 = dart.const(new _js_helper.PrivateSymbol.new('_deleteSync', _deleteSync$1));
    },
    get C12() {
      return C12 = dart.const(new _js_helper.PrivateSymbol.new('_delete', _delete$1));
    },
    get C13() {
      return C13 = dart.const(new _js_helper.PrivateSymbol.new('_rawPath', _rawPath$1));
    },
    get C14() {
      return C14 = dart.const(new _js_helper.PrivateSymbol.new('_path', _path$1));
    },
    get C15() {
      return C15 = dart.const(new _js_helper.PrivateSymbol.new('_absolutePath', _absolutePath$1));
    }
  }, false);
  var _deleteSync = dart.privateName(local_link, "_deleteSync");
  var C0;
  var C1;
  var _deleteSync$ = dart.privateName(io, "_deleteSync");
  var _delete = dart.privateName(local_link, "_delete");
  var C2;
  var _delete$ = dart.privateName(io, "_delete");
  var _rawPath = dart.privateName(local_link, "_rawPath");
  var C3;
  var _rawPath$ = dart.privateName(io, "_rawPath");
  var _path = dart.privateName(local_link, "_path");
  var C4;
  var _path$ = dart.privateName(io, "_path");
  var _absolutePath = dart.privateName(local_link, "_absolutePath");
  var C5;
  var _absolutePath$ = dart.privateName(io, "_absolutePath");
  const _is_LocalFileSystemEntity_default = Symbol('_is_LocalFileSystemEntity_default');
  var fileSystem$ = dart.privateName(local_file_system_entity, "LocalFileSystemEntity.fileSystem");
  var delegate$ = dart.privateName(local_file_system_entity, "LocalFileSystemEntity.delegate");
  local_file_system_entity.LocalFileSystemEntity$ = dart.generic((T, D) => {
    class LocalFileSystemEntity extends forwarding_file_system_entity.ForwardingFileSystemEntity$(dart.legacy(T), dart.legacy(D)) {
      get fileSystem() {
        return this[fileSystem$];
      }
      set fileSystem(value) {
        super.fileSystem = value;
      }
      get delegate() {
        return this[delegate$];
      }
      set delegate(value) {
        super.delegate = value;
      }
      get dirname() {
        return this.fileSystem.path.dirname(this.path);
      }
      get basename() {
        return this.fileSystem.path.basename(this.path);
      }
      wrapDirectory(delegate) {
        return new local_directory.LocalDirectory.new(this.fileSystem, delegate);
      }
      wrapFile(delegate) {
        return new local_file.LocalFile.new(this.fileSystem, delegate);
      }
      wrapLink(delegate) {
        return new local_link.LocalLink.new(this.fileSystem, delegate);
      }
    }
    (LocalFileSystemEntity.new = function(fileSystem, delegate) {
      this[fileSystem$] = fileSystem;
      this[delegate$] = delegate;
      ;
    }).prototype = LocalFileSystemEntity.prototype;
    dart.addTypeTests(LocalFileSystemEntity);
    LocalFileSystemEntity.prototype[_is_LocalFileSystemEntity_default] = true;
    dart.addTypeCaches(LocalFileSystemEntity);
    dart.setMethodSignature(LocalFileSystemEntity, () => ({
      __proto__: dart.getMethods(LocalFileSystemEntity.__proto__),
      wrapDirectory: dart.fnType(dart.legacy(directory.Directory), [dart.legacy(io.Directory)]),
      wrapFile: dart.fnType(dart.legacy(file.File), [dart.legacy(io.File)]),
      wrapLink: dart.fnType(dart.legacy(link.Link), [dart.legacy(io.Link)])
    }));
    dart.setLibraryUri(LocalFileSystemEntity, L0);
    dart.setFieldSignature(LocalFileSystemEntity, () => ({
      __proto__: dart.getFields(LocalFileSystemEntity.__proto__),
      fileSystem: dart.finalFieldType(dart.legacy(file_system.FileSystem)),
      delegate: dart.finalFieldType(dart.legacy(D))
    }));
    return LocalFileSystemEntity;
  });
  local_file_system_entity.LocalFileSystemEntity = local_file_system_entity.LocalFileSystemEntity$();
  dart.addTypeTests(local_file_system_entity.LocalFileSystemEntity, _is_LocalFileSystemEntity_default);
  const LocalFileSystemEntity_ForwardingLink$36 = class LocalFileSystemEntity_ForwardingLink extends local_file_system_entity.LocalFileSystemEntity$(dart.legacy(link.Link), dart.legacy(io.Link)) {};
  (LocalFileSystemEntity_ForwardingLink$36.new = function(fileSystem, delegate) {
    LocalFileSystemEntity_ForwardingLink$36.__proto__.new.call(this, fileSystem, delegate);
  }).prototype = LocalFileSystemEntity_ForwardingLink$36.prototype;
  dart.applyMixin(LocalFileSystemEntity_ForwardingLink$36, forwarding_link.ForwardingLink);
  local_link.LocalLink = class LocalLink extends LocalFileSystemEntity_ForwardingLink$36 {
    toString() {
      return "LocalLink: '" + dart.str(this.path) + "'";
    }
    [_deleteSync$](opts) {
      let recursive = opts && 'recursive' in opts ? opts.recursive : false;
      return this.noSuchMethod(new core._Invocation.method(C0 || CT.C0, null, [], new (LinkedMapOfSymbolL$dynamic()).from([C1 || CT.C1, recursive])));
    }
    [_delete$](opts) {
      let recursive = opts && 'recursive' in opts ? opts.recursive : false;
      return FutureLOfFileSystemEntityL().as(this.noSuchMethod(new core._Invocation.method(C2 || CT.C2, null, [], new (LinkedMapOfSymbolL$dynamic()).from([C1 || CT.C1, recursive]))));
    }
    get [_rawPath$]() {
      return Uint8ListL().as(this.noSuchMethod(new core._Invocation.getter(C3 || CT.C3)));
    }
    get [_path$]() {
      return StringL().as(this.noSuchMethod(new core._Invocation.getter(C4 || CT.C4)));
    }
    get [_absolutePath$]() {
      return StringL().as(this.noSuchMethod(new core._Invocation.getter(C5 || CT.C5)));
    }
  };
  (local_link.LocalLink.new = function(fs, delegate) {
    local_link.LocalLink.__proto__.new.call(this, fs, delegate);
    ;
  }).prototype = local_link.LocalLink.prototype;
  dart.addTypeTests(local_link.LocalLink);
  dart.addTypeCaches(local_link.LocalLink);
  dart.setMethodSignature(local_link.LocalLink, () => ({
    __proto__: dart.getMethods(local_link.LocalLink.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    [_deleteSync$]: dart.fnType(dart.void, [], {recursive: dart.legacy(core.bool)}, {}),
    [_delete$]: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.FileSystemEntity))), [], {recursive: dart.legacy(core.bool)}, {})
  }));
  dart.setGetterSignature(local_link.LocalLink, () => ({
    __proto__: dart.getGetters(local_link.LocalLink.__proto__),
    [_rawPath$]: dart.legacy(typed_data.Uint8List),
    [_path$]: dart.legacy(core.String),
    [_absolutePath$]: dart.legacy(core.String)
  }));
  dart.setLibraryUri(local_link.LocalLink, L1);
  dart.defineExtensionMethods(local_link.LocalLink, ['toString']);
  var _deleteSync$0 = dart.privateName(local_file, "_deleteSync");
  var C6;
  var _delete$0 = dart.privateName(local_file, "_delete");
  var C7;
  var _rawPath$0 = dart.privateName(local_file, "_rawPath");
  var C8;
  var _path$0 = dart.privateName(local_file, "_path");
  var C9;
  var _absolutePath$0 = dart.privateName(local_file, "_absolutePath");
  var C10;
  const LocalFileSystemEntity_ForwardingFile$36 = class LocalFileSystemEntity_ForwardingFile extends local_file_system_entity.LocalFileSystemEntity$(dart.legacy(file.File), dart.legacy(io.File)) {};
  (LocalFileSystemEntity_ForwardingFile$36.new = function(fileSystem, delegate) {
    LocalFileSystemEntity_ForwardingFile$36.__proto__.new.call(this, fileSystem, delegate);
  }).prototype = LocalFileSystemEntity_ForwardingFile$36.prototype;
  dart.applyMixin(LocalFileSystemEntity_ForwardingFile$36, forwarding_file.ForwardingFile);
  local_file.LocalFile = class LocalFile extends LocalFileSystemEntity_ForwardingFile$36 {
    toString() {
      return "LocalFile: '" + dart.str(this.path) + "'";
    }
    [_deleteSync$](opts) {
      let recursive = opts && 'recursive' in opts ? opts.recursive : false;
      return this.noSuchMethod(new core._Invocation.method(C6 || CT.C6, null, [], new (LinkedMapOfSymbolL$dynamic()).from([C1 || CT.C1, recursive])));
    }
    [_delete$](opts) {
      let recursive = opts && 'recursive' in opts ? opts.recursive : false;
      return FutureLOfFileSystemEntityL().as(this.noSuchMethod(new core._Invocation.method(C7 || CT.C7, null, [], new (LinkedMapOfSymbolL$dynamic()).from([C1 || CT.C1, recursive]))));
    }
    get [_rawPath$]() {
      return Uint8ListL().as(this.noSuchMethod(new core._Invocation.getter(C8 || CT.C8)));
    }
    get [_path$]() {
      return StringL().as(this.noSuchMethod(new core._Invocation.getter(C9 || CT.C9)));
    }
    get [_absolutePath$]() {
      return StringL().as(this.noSuchMethod(new core._Invocation.getter(C10 || CT.C10)));
    }
  };
  (local_file.LocalFile.new = function(fs, delegate) {
    local_file.LocalFile.__proto__.new.call(this, fs, delegate);
    ;
  }).prototype = local_file.LocalFile.prototype;
  dart.addTypeTests(local_file.LocalFile);
  dart.addTypeCaches(local_file.LocalFile);
  dart.setMethodSignature(local_file.LocalFile, () => ({
    __proto__: dart.getMethods(local_file.LocalFile.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    [_deleteSync$]: dart.fnType(dart.void, [], {recursive: dart.legacy(core.bool)}, {}),
    [_delete$]: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.FileSystemEntity))), [], {recursive: dart.legacy(core.bool)}, {})
  }));
  dart.setGetterSignature(local_file.LocalFile, () => ({
    __proto__: dart.getGetters(local_file.LocalFile.__proto__),
    [_rawPath$]: dart.legacy(typed_data.Uint8List),
    [_path$]: dart.legacy(core.String),
    [_absolutePath$]: dart.legacy(core.String)
  }));
  dart.setLibraryUri(local_file.LocalFile, L2);
  dart.defineExtensionMethods(local_file.LocalFile, ['toString']);
  var _deleteSync$1 = dart.privateName(local_directory, "_deleteSync");
  var C11;
  var _delete$1 = dart.privateName(local_directory, "_delete");
  var C12;
  var _rawPath$1 = dart.privateName(local_directory, "_rawPath");
  var C13;
  var _path$1 = dart.privateName(local_directory, "_path");
  var C14;
  var _absolutePath$1 = dart.privateName(local_directory, "_absolutePath");
  var C15;
  const LocalFileSystemEntity_ForwardingDirectory$36 = class LocalFileSystemEntity_ForwardingDirectory extends local_file_system_entity.LocalFileSystemEntity {};
  (LocalFileSystemEntity_ForwardingDirectory$36.new = function(fileSystem, delegate) {
    LocalFileSystemEntity_ForwardingDirectory$36.__proto__.new.call(this, fileSystem, delegate);
  }).prototype = LocalFileSystemEntity_ForwardingDirectory$36.prototype;
  const LocalFileSystemEntity_DirectoryAddOnsMixin$36 = class LocalFileSystemEntity_DirectoryAddOnsMixin extends LocalFileSystemEntity_ForwardingDirectory$36 {};
  (LocalFileSystemEntity_DirectoryAddOnsMixin$36.new = function(fileSystem, delegate) {
    LocalFileSystemEntity_DirectoryAddOnsMixin$36.__proto__.new.call(this, fileSystem, delegate);
  }).prototype = LocalFileSystemEntity_DirectoryAddOnsMixin$36.prototype;
  dart.applyMixin(LocalFileSystemEntity_DirectoryAddOnsMixin$36, common.DirectoryAddOnsMixin);
  local_directory.LocalDirectory = class LocalDirectory extends LocalFileSystemEntity_DirectoryAddOnsMixin$36 {
    toString() {
      return "LocalDirectory: '" + dart.str(this.path) + "'";
    }
    [_deleteSync$](opts) {
      let recursive = opts && 'recursive' in opts ? opts.recursive : false;
      return this.noSuchMethod(new core._Invocation.method(C11 || CT.C11, null, [], new (LinkedMapOfSymbolL$dynamic()).from([C1 || CT.C1, recursive])));
    }
    [_delete$](opts) {
      let recursive = opts && 'recursive' in opts ? opts.recursive : false;
      return FutureLOfFileSystemEntityL().as(this.noSuchMethod(new core._Invocation.method(C12 || CT.C12, null, [], new (LinkedMapOfSymbolL$dynamic()).from([C1 || CT.C1, recursive]))));
    }
    get [_rawPath$]() {
      return Uint8ListL().as(this.noSuchMethod(new core._Invocation.getter(C13 || CT.C13)));
    }
    get [_path$]() {
      return StringL().as(this.noSuchMethod(new core._Invocation.getter(C14 || CT.C14)));
    }
    get [_absolutePath$]() {
      return StringL().as(this.noSuchMethod(new core._Invocation.getter(C15 || CT.C15)));
    }
  };
  (local_directory.LocalDirectory.new = function(fs, delegate) {
    local_directory.LocalDirectory.__proto__.new.call(this, fs, delegate);
    ;
  }).prototype = local_directory.LocalDirectory.prototype;
  dart.addTypeTests(local_directory.LocalDirectory);
  dart.addTypeCaches(local_directory.LocalDirectory);
  dart.setMethodSignature(local_directory.LocalDirectory, () => ({
    __proto__: dart.getMethods(local_directory.LocalDirectory.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    [_deleteSync$]: dart.fnType(dart.void, [], {recursive: dart.legacy(core.bool)}, {}),
    [_delete$]: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.FileSystemEntity))), [], {recursive: dart.legacy(core.bool)}, {})
  }));
  dart.setGetterSignature(local_directory.LocalDirectory, () => ({
    __proto__: dart.getGetters(local_directory.LocalDirectory.__proto__),
    [_rawPath$]: dart.legacy(typed_data.Uint8List),
    [_path$]: dart.legacy(core.String),
    [_absolutePath$]: dart.legacy(core.String)
  }));
  dart.setLibraryUri(local_directory.LocalDirectory, L3);
  dart.defineExtensionMethods(local_directory.LocalDirectory, ['toString']);
  dart.setBaseClass(local_directory.LocalDirectory.__proto__.__proto__, local_file_system_entity.LocalFileSystemEntity$(local_directory.LocalDirectory, io.Directory));
  dart.applyMixin(local_directory.LocalDirectory.__proto__.__proto__, forwarding_directory.ForwardingDirectory$(local_directory.LocalDirectory));
  dart.trackLibraries("packages/file/src/backends/local/local_link.dart", {
    "package:file/src/backends/local/local_link.dart": local_link,
    "package:file/src/backends/local/local_file.dart": local_file,
    "package:file/src/backends/local/local_file_system_entity.dart": local_file_system_entity,
    "package:file/src/backends/local/local_directory.dart": local_directory
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["local_file_system_entity.dart","local_link.dart","local_file.dart","local_directory.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAoBmB;;;;;;MAGT;;;;;;;AAGc,cAAA,AAAW,AAAK,8BAAQ;MAAK;;AAG5B,cAAA,AAAW,AAAK,+BAAS;MAAK;oBAGhB;AACjC,sDAAe,iBAAY,QAAQ;MAAC;eAGlB;AAAa,4CAAU,iBAAY,QAAQ;MAAC;eAG5C;AAAa,4CAAU,iBAAY,QAAQ;MAAC;;0CAtBvC,YAAiB;MAAjB;MAAiB;;IAAS;;;;;;;;;;;;;;;;;;;;;0DAA1B,YAAiB;qEAAjB,YAAiB;;;;;ACCvB,YAAA,AAAoB,2BAAN,aAAI;IAAE;;;;;;;;;;;;;;;;;;;uCAHpB,IAAY;AAAY,kDAAM,EAAE,EAAE,QAAQ;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0DDErC,YAAiB;qEAAjB,YAAiB;;;;;AECvB,YAAA,AAAoB,2BAAN,aAAI;IAAE;;;;;;;;;;;;;;;;;;;uCAHpB,IAAY;AAAY,kDAAM,EAAE,EAAE,QAAQ;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;+DFErC,YAAiB;0EAAjB,YAAiB;;;gEAAjB,YAAiB;2EAAjB,YAAiB;;;;;AGEvB,YAAA,AAAyB,gCAAN,aAAI;IAAE;;;;;;;;;;;;;;;;;;;iDAHpB,IAAiB;AAAY,4DAAM,EAAE,EAAE,QAAQ;;EAAC","file":"../../../../../../../../../../../../../packages/file/src/backends/local/local_link.dart.lib.js"}');
  // Exports:
  return {
    src__backends__local__local_link: local_link,
    src__backends__local__local_file: local_file,
    src__backends__local__local_file_system_entity: local_file_system_entity,
    src__backends__local__local_directory: local_directory
  };
}));

//# sourceMappingURL=local_link.dart.lib.js.map
