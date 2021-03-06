define(['dart_sdk', 'packages/file/src/interface/link.dart', 'packages/path/src/path_set.dart'], (function load__packages__file__src__forwarding__forwarding_link_dart(dart_sdk, packages__file__src__interface__link$46dart, packages__path__src__path_set$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const io = dart_sdk.io;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const link = packages__file__src__interface__link$46dart.src__interface__link;
  const file_system_entity = packages__file__src__interface__link$46dart.src__interface__file_system_entity;
  const directory = packages__file__src__interface__link$46dart.src__interface__directory;
  const file_system = packages__file__src__interface__link$46dart.src__interface__file_system;
  const file = packages__file__src__interface__link$46dart.src__interface__file;
  const context = packages__path__src__path_set$46dart.src__context;
  var forwarding_link = Object.create(dart.library);
  var forwarding_file_system_entity = Object.create(dart.library);
  var forwarding_file_system = Object.create(dart.library);
  var forwarding_file = Object.create(dart.library);
  var forwarding_directory = Object.create(dart.library);
  var forwarding = Object.create(dart.library);
  var file$ = Object.create(dart.library);
  var $map = dartx.map;
  var $toList = dartx.toList;
  dart._checkModuleNullSafetyMode(false);
  var LinkL = () => (LinkL = dart.constFn(dart.legacy(io.Link)))();
  var ForwardingLinkL = () => (ForwardingLinkL = dart.constFn(dart.legacy(forwarding_link.ForwardingLink)))();
  var LinkL$ = () => (LinkL$ = dart.constFn(dart.legacy(link.Link)))();
  var FileL = () => (FileL = dart.constFn(dart.legacy(io.File)))();
  var ForwardingFileL = () => (ForwardingFileL = dart.constFn(dart.legacy(forwarding_file.ForwardingFile)))();
  var FileL$ = () => (FileL$ = dart.constFn(dart.legacy(file.File)))();
  var RandomAccessFileL = () => (RandomAccessFileL = dart.constFn(dart.legacy(io.RandomAccessFile)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var ListLOfintL = () => (ListLOfintL = dart.constFn(dart.legacy(ListOfintL())))();
  var Uint8ListL = () => (Uint8ListL = dart.constFn(dart.legacy(typed_data.Uint8List)))();
  var ListLOfintLToUint8ListL = () => (ListLOfintLToUint8ListL = dart.constFn(dart.fnType(Uint8ListL(), [ListLOfintL()])))();
  var SinkOfUint8ListL = () => (SinkOfUint8ListL = dart.constFn(core.Sink$(Uint8ListL())))();
  var SinkLOfUint8ListL = () => (SinkLOfUint8ListL = dart.constFn(dart.legacy(SinkOfUint8ListL())))();
  var DirectoryL = () => (DirectoryL = dart.constFn(dart.legacy(io.Directory)))();
  var DirectoryL$ = () => (DirectoryL$ = dart.constFn(dart.legacy(directory.Directory)))();
  var FileSystemEntityL = () => (FileSystemEntityL = dart.constFn(dart.legacy(file_system_entity.FileSystemEntity)))();
  const CT = Object.create(null);
  var L3 = "package:file/src/forwarding/forwarding_file.dart";
  var L2 = "package:file/src/forwarding/forwarding_file_system.dart";
  var L1 = "package:file/src/forwarding/forwarding_file_system_entity.dart";
  var L0 = "package:file/src/forwarding/forwarding_link.dart";
  var L4 = "package:file/src/forwarding/forwarding_directory.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: io.FileMode.prototype,
        [FileMode__mode]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: forwarding_file._ToUint8List.prototype
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: io.FileMode.prototype,
        [FileMode__mode]: 1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: convert.Utf8Codec.prototype,
        [Utf8Codec__allowMalformed]: false
      });
    }
  }, false);
  forwarding_link.ForwardingLink = class ForwardingLink extends core.Object {
    wrap(delegate) {
      LinkL().as(delegate);
      return ForwardingLinkL().as(this.wrapLink(delegate));
    }
    create(target, opts) {
      let recursive = opts && 'recursive' in opts ? opts.recursive : false;
      return async.async(LinkL$(), (function* create() {
        return this.wrap(yield this.delegate.create(target, {recursive: recursive}));
      }).bind(this));
    }
    createSync(target, opts) {
      let recursive = opts && 'recursive' in opts ? opts.recursive : false;
      return this.delegate.createSync(target, {recursive: recursive});
    }
    update(target) {
      return async.async(LinkL$(), (function* update() {
        return this.wrap(yield this.delegate.update(target));
      }).bind(this));
    }
    updateSync(target) {
      return this.delegate.updateSync(target);
    }
    target() {
      return this.delegate.target();
    }
    targetSync() {
      return this.delegate.targetSync();
    }
  };
  (forwarding_link.ForwardingLink.new = function() {
    ;
  }).prototype = forwarding_link.ForwardingLink.prototype;
  dart.addTypeTests(forwarding_link.ForwardingLink);
  dart.addTypeCaches(forwarding_link.ForwardingLink);
  forwarding_link.ForwardingLink[dart.implements] = () => [forwarding_file_system_entity.ForwardingFileSystemEntity$(dart.legacy(link.Link), dart.legacy(io.Link)), link.Link];
  dart.setMethodSignature(forwarding_link.ForwardingLink, () => ({
    __proto__: dart.getMethods(forwarding_link.ForwardingLink.__proto__),
    wrap: dart.fnType(dart.legacy(forwarding_link.ForwardingLink), [dart.legacy(core.Object)]),
    create: dart.fnType(dart.legacy(async.Future$(dart.legacy(link.Link))), [dart.legacy(core.String)], {recursive: dart.legacy(core.bool)}, {}),
    createSync: dart.fnType(dart.void, [dart.legacy(core.String)], {recursive: dart.legacy(core.bool)}, {}),
    update: dart.fnType(dart.legacy(async.Future$(dart.legacy(link.Link))), [dart.legacy(core.String)]),
    updateSync: dart.fnType(dart.void, [dart.legacy(core.String)]),
    target: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), []),
    targetSync: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(forwarding_link.ForwardingLink, L0);
  const _is_ForwardingFileSystemEntity_default = Symbol('_is_ForwardingFileSystemEntity_default');
  forwarding_file_system_entity.ForwardingFileSystemEntity$ = dart.generic((T, D) => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var DL = () => (DL = dart.constFn(dart.legacy(D)))();
    class ForwardingFileSystemEntity extends core.Object {
      get uri() {
        return this.delegate.uri;
      }
      exists() {
        return this.delegate.exists();
      }
      existsSync() {
        return this.delegate.existsSync();
      }
      rename(newPath) {
        return async.async(TL(), (function* rename() {
          return this.wrap(DL().as(yield this.delegate.rename(newPath)));
        }).bind(this));
      }
      renameSync(newPath) {
        return this.wrap(DL().as(this.delegate.renameSync(newPath)));
      }
      resolveSymbolicLinks() {
        return this.delegate.resolveSymbolicLinks();
      }
      resolveSymbolicLinksSync() {
        return this.delegate.resolveSymbolicLinksSync();
      }
      stat() {
        return this.delegate.stat();
      }
      statSync() {
        return this.delegate.statSync();
      }
      delete(opts) {
        let recursive = opts && 'recursive' in opts ? opts.recursive : false;
        return async.async(TL(), (function* $delete() {
          return this.wrap(DL().as(yield this.delegate.delete({recursive: recursive})));
        }).bind(this));
      }
      deleteSync(opts) {
        let recursive = opts && 'recursive' in opts ? opts.recursive : false;
        return this.delegate.deleteSync({recursive: recursive});
      }
      watch(opts) {
        let events = opts && 'events' in opts ? opts.events : 15;
        let recursive = opts && 'recursive' in opts ? opts.recursive : false;
        return this.delegate.watch({events: events, recursive: recursive});
      }
      get isAbsolute() {
        return this.delegate.isAbsolute;
      }
      get absolute() {
        return this.wrap(DL().as(this.delegate.absolute));
      }
      get parent() {
        return this.wrapDirectory(this.delegate.parent);
      }
      get path() {
        return this.delegate.path;
      }
      get basename() {
        return this.fileSystem.path.basename(this.path);
      }
      get dirname() {
        return this.fileSystem.path.dirname(this.path);
      }
    }
    (ForwardingFileSystemEntity.new = function() {
      ;
    }).prototype = ForwardingFileSystemEntity.prototype;
    dart.addTypeTests(ForwardingFileSystemEntity);
    ForwardingFileSystemEntity.prototype[_is_ForwardingFileSystemEntity_default] = true;
    dart.addTypeCaches(ForwardingFileSystemEntity);
    ForwardingFileSystemEntity[dart.implements] = () => [file_system_entity.FileSystemEntity];
    dart.setMethodSignature(ForwardingFileSystemEntity, () => ({
      __proto__: dart.getMethods(ForwardingFileSystemEntity.__proto__),
      exists: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), []),
      existsSync: dart.fnType(dart.legacy(core.bool), []),
      rename: dart.fnType(dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(core.String)]),
      renameSync: dart.fnType(dart.legacy(T), [dart.legacy(core.String)]),
      resolveSymbolicLinks: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), []),
      resolveSymbolicLinksSync: dart.fnType(dart.legacy(core.String), []),
      stat: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.FileStat))), []),
      statSync: dart.fnType(dart.legacy(io.FileStat), []),
      delete: dart.fnType(dart.legacy(async.Future$(dart.legacy(T))), [], {recursive: dart.legacy(core.bool)}, {}),
      deleteSync: dart.fnType(dart.void, [], {recursive: dart.legacy(core.bool)}, {}),
      watch: dart.fnType(dart.legacy(async.Stream$(dart.legacy(io.FileSystemEvent))), [], {events: dart.legacy(core.int), recursive: dart.legacy(core.bool)}, {})
    }));
    dart.setGetterSignature(ForwardingFileSystemEntity, () => ({
      __proto__: dart.getGetters(ForwardingFileSystemEntity.__proto__),
      uri: dart.legacy(core.Uri),
      isAbsolute: dart.legacy(core.bool),
      absolute: dart.legacy(T),
      parent: dart.legacy(directory.Directory),
      path: dart.legacy(core.String),
      basename: dart.legacy(core.String),
      dirname: dart.legacy(core.String)
    }));
    dart.setLibraryUri(ForwardingFileSystemEntity, L1);
    return ForwardingFileSystemEntity;
  });
  forwarding_file_system_entity.ForwardingFileSystemEntity = forwarding_file_system_entity.ForwardingFileSystemEntity$();
  dart.addTypeTests(forwarding_file_system_entity.ForwardingFileSystemEntity, _is_ForwardingFileSystemEntity_default);
  var delegate$ = dart.privateName(forwarding_file_system, "ForwardingFileSystem.delegate");
  forwarding_file_system.ForwardingFileSystem = class ForwardingFileSystem extends file_system.FileSystem {
    get delegate() {
      return this[delegate$];
    }
    set delegate(value) {
      super.delegate = value;
    }
    directory(path) {
      return this.delegate.directory(path);
    }
    file(path) {
      return this.delegate.file(path);
    }
    link(path) {
      return this.delegate.link(path);
    }
    get path() {
      return this.delegate.path;
    }
    get systemTempDirectory() {
      return this.delegate.systemTempDirectory;
    }
    get currentDirectory() {
      return this.delegate.currentDirectory;
    }
    set currentDirectory(path) {
      return this.delegate.currentDirectory = path;
    }
    stat(path) {
      return this.delegate.stat(path);
    }
    statSync(path) {
      return this.delegate.statSync(path);
    }
    identical(path1, path2) {
      return this.delegate.identical(path1, path2);
    }
    identicalSync(path1, path2) {
      return this.delegate.identicalSync(path1, path2);
    }
    get isWatchSupported() {
      return this.delegate.isWatchSupported;
    }
    type(path, opts) {
      let followLinks = opts && 'followLinks' in opts ? opts.followLinks : true;
      return this.delegate.type(path, {followLinks: followLinks});
    }
    typeSync(path, opts) {
      let followLinks = opts && 'followLinks' in opts ? opts.followLinks : true;
      return this.delegate.typeSync(path, {followLinks: followLinks});
    }
  };
  (forwarding_file_system.ForwardingFileSystem.new = function(delegate) {
    this[delegate$] = delegate;
    forwarding_file_system.ForwardingFileSystem.__proto__.new.call(this);
    ;
  }).prototype = forwarding_file_system.ForwardingFileSystem.prototype;
  dart.addTypeTests(forwarding_file_system.ForwardingFileSystem);
  dart.addTypeCaches(forwarding_file_system.ForwardingFileSystem);
  dart.setMethodSignature(forwarding_file_system.ForwardingFileSystem, () => ({
    __proto__: dart.getMethods(forwarding_file_system.ForwardingFileSystem.__proto__),
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
  dart.setGetterSignature(forwarding_file_system.ForwardingFileSystem, () => ({
    __proto__: dart.getGetters(forwarding_file_system.ForwardingFileSystem.__proto__),
    path: dart.legacy(context.Context),
    systemTempDirectory: dart.legacy(directory.Directory),
    currentDirectory: dart.legacy(directory.Directory),
    isWatchSupported: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(forwarding_file_system.ForwardingFileSystem, () => ({
    __proto__: dart.getSetters(forwarding_file_system.ForwardingFileSystem.__proto__),
    currentDirectory: dart.dynamic
  }));
  dart.setLibraryUri(forwarding_file_system.ForwardingFileSystem, L2);
  dart.setFieldSignature(forwarding_file_system.ForwardingFileSystem, () => ({
    __proto__: dart.getFields(forwarding_file_system.ForwardingFileSystem.__proto__),
    delegate: dart.finalFieldType(dart.legacy(file_system.FileSystem))
  }));
  var FileMode__mode = dart.privateName(io, "FileMode._mode");
  var C0;
  var C1;
  var C2;
  var Utf8Codec__allowMalformed = dart.privateName(convert, "Utf8Codec._allowMalformed");
  var C3;
  forwarding_file.ForwardingFile = class ForwardingFile extends core.Object {
    wrap(delegate) {
      FileL().as(delegate);
      return ForwardingFileL().as(this.wrapFile(delegate));
    }
    create(opts) {
      let recursive = opts && 'recursive' in opts ? opts.recursive : false;
      return async.async(FileL$(), (function* create() {
        return this.wrap(yield this.delegate.create({recursive: recursive}));
      }).bind(this));
    }
    createSync(opts) {
      let recursive = opts && 'recursive' in opts ? opts.recursive : false;
      return this.delegate.createSync({recursive: recursive});
    }
    copy(newPath) {
      return async.async(FileL$(), (function* copy() {
        return this.wrap(yield this.delegate.copy(newPath));
      }).bind(this));
    }
    copySync(newPath) {
      return this.wrap(this.delegate.copySync(newPath));
    }
    length() {
      return this.delegate.length();
    }
    lengthSync() {
      return this.delegate.lengthSync();
    }
    lastAccessed() {
      return this.delegate.lastAccessed();
    }
    lastAccessedSync() {
      return this.delegate.lastAccessedSync();
    }
    setLastAccessed(time) {
      return this.delegate.setLastAccessed(time);
    }
    setLastAccessedSync(time) {
      return this.delegate.setLastAccessedSync(time);
    }
    lastModified() {
      return this.delegate.lastModified();
    }
    lastModifiedSync() {
      return this.delegate.lastModifiedSync();
    }
    setLastModified(time) {
      return this.delegate.setLastModified(time);
    }
    setLastModifiedSync(time) {
      return this.delegate.setLastModifiedSync(time);
    }
    open(opts) {
      let mode = opts && 'mode' in opts ? opts.mode : C0 || CT.C0;
      return async.async(RandomAccessFileL(), (function* open() {
        return this.delegate.open({mode: mode});
      }).bind(this));
    }
    openSync(opts) {
      let mode = opts && 'mode' in opts ? opts.mode : C0 || CT.C0;
      return this.delegate.openSync({mode: mode});
    }
    openRead(start = null, end = null) {
      return this.delegate.openRead(start, end).cast(ListLOfintL()).transform(Uint8ListL(), C1 || CT.C1);
    }
    openWrite(opts) {
      let mode = opts && 'mode' in opts ? opts.mode : C2 || CT.C2;
      let encoding = opts && 'encoding' in opts ? opts.encoding : C3 || CT.C3;
      return this.delegate.openWrite({mode: mode, encoding: encoding});
    }
    readAsBytes() {
      return this.delegate.readAsBytes().then(Uint8ListL(), dart.fn(bytes => _native_typed_data.NativeUint8List.fromList(bytes), ListLOfintLToUint8ListL()));
    }
    readAsBytesSync() {
      return _native_typed_data.NativeUint8List.fromList(this.delegate.readAsBytesSync());
    }
    readAsString(opts) {
      let encoding = opts && 'encoding' in opts ? opts.encoding : C3 || CT.C3;
      return this.delegate.readAsString({encoding: encoding});
    }
    readAsStringSync(opts) {
      let encoding = opts && 'encoding' in opts ? opts.encoding : C3 || CT.C3;
      return this.delegate.readAsStringSync({encoding: encoding});
    }
    readAsLines(opts) {
      let encoding = opts && 'encoding' in opts ? opts.encoding : C3 || CT.C3;
      return this.delegate.readAsLines({encoding: encoding});
    }
    readAsLinesSync(opts) {
      let encoding = opts && 'encoding' in opts ? opts.encoding : C3 || CT.C3;
      return this.delegate.readAsLinesSync({encoding: encoding});
    }
    writeAsBytes(bytes, opts) {
      let mode = opts && 'mode' in opts ? opts.mode : C2 || CT.C2;
      let flush = opts && 'flush' in opts ? opts.flush : false;
      return async.async(FileL$(), (function* writeAsBytes() {
        return this.wrap(yield this.delegate.writeAsBytes(bytes, {mode: mode, flush: flush}));
      }).bind(this));
    }
    writeAsBytesSync(bytes, opts) {
      let mode = opts && 'mode' in opts ? opts.mode : C2 || CT.C2;
      let flush = opts && 'flush' in opts ? opts.flush : false;
      return this.delegate.writeAsBytesSync(bytes, {mode: mode, flush: flush});
    }
    writeAsString(contents, opts) {
      let mode = opts && 'mode' in opts ? opts.mode : C2 || CT.C2;
      let encoding = opts && 'encoding' in opts ? opts.encoding : C3 || CT.C3;
      let flush = opts && 'flush' in opts ? opts.flush : false;
      return async.async(FileL$(), (function* writeAsString() {
        return this.wrap(yield this.delegate.writeAsString(contents, {mode: mode, encoding: encoding, flush: flush}));
      }).bind(this));
    }
    writeAsStringSync(contents, opts) {
      let mode = opts && 'mode' in opts ? opts.mode : C2 || CT.C2;
      let encoding = opts && 'encoding' in opts ? opts.encoding : C3 || CT.C3;
      let flush = opts && 'flush' in opts ? opts.flush : false;
      return this.delegate.writeAsStringSync(contents, {mode: mode, encoding: encoding, flush: flush});
    }
  };
  (forwarding_file.ForwardingFile.new = function() {
    ;
  }).prototype = forwarding_file.ForwardingFile.prototype;
  dart.addTypeTests(forwarding_file.ForwardingFile);
  dart.addTypeCaches(forwarding_file.ForwardingFile);
  forwarding_file.ForwardingFile[dart.implements] = () => [forwarding_file_system_entity.ForwardingFileSystemEntity$(dart.legacy(file.File), dart.legacy(io.File)), file.File];
  dart.setMethodSignature(forwarding_file.ForwardingFile, () => ({
    __proto__: dart.getMethods(forwarding_file.ForwardingFile.__proto__),
    wrap: dart.fnType(dart.legacy(forwarding_file.ForwardingFile), [dart.legacy(core.Object)]),
    create: dart.fnType(dart.legacy(async.Future$(dart.legacy(file.File))), [], {recursive: dart.legacy(core.bool)}, {}),
    createSync: dart.fnType(dart.void, [], {recursive: dart.legacy(core.bool)}, {}),
    copy: dart.fnType(dart.legacy(async.Future$(dart.legacy(file.File))), [dart.legacy(core.String)]),
    copySync: dart.fnType(dart.legacy(file.File), [dart.legacy(core.String)]),
    length: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.int))), []),
    lengthSync: dart.fnType(dart.legacy(core.int), []),
    lastAccessed: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.DateTime))), []),
    lastAccessedSync: dart.fnType(dart.legacy(core.DateTime), []),
    setLastAccessed: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.DateTime)]),
    setLastAccessedSync: dart.fnType(dart.void, [dart.legacy(core.DateTime)]),
    lastModified: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.DateTime))), []),
    lastModifiedSync: dart.fnType(dart.legacy(core.DateTime), []),
    setLastModified: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.DateTime)]),
    setLastModifiedSync: dart.fnType(dart.void, [dart.legacy(core.DateTime)]),
    open: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.RandomAccessFile))), [], {mode: dart.legacy(io.FileMode)}, {}),
    openSync: dart.fnType(dart.legacy(io.RandomAccessFile), [], {mode: dart.legacy(io.FileMode)}, {}),
    openRead: dart.fnType(dart.legacy(async.Stream$(dart.legacy(typed_data.Uint8List))), [], [dart.legacy(core.int), dart.legacy(core.int)]),
    openWrite: dart.fnType(dart.legacy(io.IOSink), [], {encoding: dart.legacy(convert.Encoding), mode: dart.legacy(io.FileMode)}, {}),
    readAsBytes: dart.fnType(dart.legacy(async.Future$(dart.legacy(typed_data.Uint8List))), []),
    readAsBytesSync: dart.fnType(dart.legacy(typed_data.Uint8List), []),
    readAsString: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), [], {encoding: dart.legacy(convert.Encoding)}, {}),
    readAsStringSync: dart.fnType(dart.legacy(core.String), [], {encoding: dart.legacy(convert.Encoding)}, {}),
    readAsLines: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.List$(dart.legacy(core.String))))), [], {encoding: dart.legacy(convert.Encoding)}, {}),
    readAsLinesSync: dart.fnType(dart.legacy(core.List$(dart.legacy(core.String))), [], {encoding: dart.legacy(convert.Encoding)}, {}),
    writeAsBytes: dart.fnType(dart.legacy(async.Future$(dart.legacy(file.File))), [dart.legacy(core.List$(dart.legacy(core.int)))], {flush: dart.legacy(core.bool), mode: dart.legacy(io.FileMode)}, {}),
    writeAsBytesSync: dart.fnType(dart.void, [dart.legacy(core.List$(dart.legacy(core.int)))], {flush: dart.legacy(core.bool), mode: dart.legacy(io.FileMode)}, {}),
    writeAsString: dart.fnType(dart.legacy(async.Future$(dart.legacy(file.File))), [dart.legacy(core.String)], {encoding: dart.legacy(convert.Encoding), flush: dart.legacy(core.bool), mode: dart.legacy(io.FileMode)}, {}),
    writeAsStringSync: dart.fnType(dart.void, [dart.legacy(core.String)], {encoding: dart.legacy(convert.Encoding), flush: dart.legacy(core.bool), mode: dart.legacy(io.FileMode)}, {})
  }));
  dart.setLibraryUri(forwarding_file.ForwardingFile, L3);
  forwarding_file._ToUint8List = class _ToUint8List extends convert.Converter$(dart.legacy(core.List$(dart.legacy(core.int))), dart.legacy(typed_data.Uint8List)) {
    convert(input) {
      ListLOfintL().as(input);
      return _native_typed_data.NativeUint8List.fromList(input);
    }
    startChunkedConversion(sink) {
      SinkLOfUint8ListL().as(sink);
      return new forwarding_file._Uint8ListConversionSink.new(sink);
    }
  };
  (forwarding_file._ToUint8List.new = function() {
    forwarding_file._ToUint8List.__proto__.new.call(this);
    ;
  }).prototype = forwarding_file._ToUint8List.prototype;
  dart.addTypeTests(forwarding_file._ToUint8List);
  dart.addTypeCaches(forwarding_file._ToUint8List);
  dart.setMethodSignature(forwarding_file._ToUint8List, () => ({
    __proto__: dart.getMethods(forwarding_file._ToUint8List.__proto__),
    convert: dart.fnType(dart.legacy(typed_data.Uint8List), [dart.legacy(core.Object)]),
    startChunkedConversion: dart.fnType(dart.legacy(core.Sink$(dart.legacy(core.List$(dart.legacy(core.int))))), [dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(forwarding_file._ToUint8List, L3);
  var _target = dart.privateName(forwarding_file, "_target");
  var _target$ = dart.privateName(forwarding_file, "_Uint8ListConversionSink._target");
  forwarding_file._Uint8ListConversionSink = class _Uint8ListConversionSink extends core.Object {
    get [_target]() {
      return this[_target$];
    }
    set [_target](value) {
      super[_target] = value;
    }
    add(data) {
      ListLOfintL().as(data);
      this[_target].add(_native_typed_data.NativeUint8List.fromList(data));
    }
    close() {
      this[_target].close();
    }
  };
  (forwarding_file._Uint8ListConversionSink.new = function(_target) {
    this[_target$] = _target;
    ;
  }).prototype = forwarding_file._Uint8ListConversionSink.prototype;
  dart.addTypeTests(forwarding_file._Uint8ListConversionSink);
  dart.addTypeCaches(forwarding_file._Uint8ListConversionSink);
  forwarding_file._Uint8ListConversionSink[dart.implements] = () => [core.Sink$(dart.legacy(core.List$(dart.legacy(core.int))))];
  dart.setMethodSignature(forwarding_file._Uint8ListConversionSink, () => ({
    __proto__: dart.getMethods(forwarding_file._Uint8ListConversionSink.__proto__),
    add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(forwarding_file._Uint8ListConversionSink, L3);
  dart.setFieldSignature(forwarding_file._Uint8ListConversionSink, () => ({
    __proto__: dart.getFields(forwarding_file._Uint8ListConversionSink.__proto__),
    [_target]: dart.finalFieldType(dart.legacy(core.Sink$(dart.legacy(typed_data.Uint8List))))
  }));
  var _wrap = dart.privateName(forwarding_directory, "_wrap");
  const _is_ForwardingDirectory_default = Symbol('_is_ForwardingDirectory_default');
  forwarding_directory.ForwardingDirectory$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ForwardingDirectory extends core.Object {
      wrap(delegate) {
        DirectoryL().as(delegate);
        return TL().as(this.wrapDirectory(delegate));
      }
      create(opts) {
        let recursive = opts && 'recursive' in opts ? opts.recursive : false;
        return async.async(DirectoryL$(), (function* create() {
          return this.wrap(yield this.delegate.create({recursive: recursive}));
        }).bind(this));
      }
      createSync(opts) {
        let recursive = opts && 'recursive' in opts ? opts.recursive : false;
        return this.delegate.createSync({recursive: recursive});
      }
      createTemp(prefix = null) {
        return async.async(DirectoryL$(), (function* createTemp() {
          return this.wrap(yield this.delegate.createTemp(prefix));
        }).bind(this));
      }
      createTempSync(prefix = null) {
        return this.wrap(this.delegate.createTempSync(prefix));
      }
      list(opts) {
        let recursive = opts && 'recursive' in opts ? opts.recursive : false;
        let followLinks = opts && 'followLinks' in opts ? opts.followLinks : true;
        return this.delegate.list({recursive: recursive, followLinks: followLinks}).map(FileSystemEntityL(), dart.bind(this, _wrap));
      }
      listSync(opts) {
        let recursive = opts && 'recursive' in opts ? opts.recursive : false;
        let followLinks = opts && 'followLinks' in opts ? opts.followLinks : true;
        return this.delegate.listSync({recursive: recursive, followLinks: followLinks})[$map](FileSystemEntityL(), dart.bind(this, _wrap))[$toList]();
      }
      [_wrap](entity) {
        if (FileL().is(entity)) {
          return this.wrapFile(entity);
        } else if (DirectoryL().is(entity)) {
          return this.wrapDirectory(entity);
        } else if (LinkL().is(entity)) {
          return this.wrapLink(entity);
        }
        dart.throw(new io.FileSystemException.new("Unsupported type: " + dart.str(entity), entity.path));
      }
    }
    (ForwardingDirectory.new = function() {
      ;
    }).prototype = ForwardingDirectory.prototype;
    dart.addTypeTests(ForwardingDirectory);
    ForwardingDirectory.prototype[_is_ForwardingDirectory_default] = true;
    dart.addTypeCaches(ForwardingDirectory);
    ForwardingDirectory[dart.implements] = () => [forwarding_file_system_entity.ForwardingFileSystemEntity$(dart.legacy(T), dart.legacy(io.Directory)), directory.Directory];
    dart.setMethodSignature(ForwardingDirectory, () => ({
      __proto__: dart.getMethods(ForwardingDirectory.__proto__),
      wrap: dart.fnType(dart.legacy(T), [dart.legacy(core.Object)]),
      create: dart.fnType(dart.legacy(async.Future$(dart.legacy(directory.Directory))), [], {recursive: dart.legacy(core.bool)}, {}),
      createSync: dart.fnType(dart.void, [], {recursive: dart.legacy(core.bool)}, {}),
      createTemp: dart.fnType(dart.legacy(async.Future$(dart.legacy(directory.Directory))), [], [dart.legacy(core.String)]),
      createTempSync: dart.fnType(dart.legacy(directory.Directory), [], [dart.legacy(core.String)]),
      list: dart.fnType(dart.legacy(async.Stream$(dart.legacy(file_system_entity.FileSystemEntity))), [], {followLinks: dart.legacy(core.bool), recursive: dart.legacy(core.bool)}, {}),
      listSync: dart.fnType(dart.legacy(core.List$(dart.legacy(file_system_entity.FileSystemEntity))), [], {followLinks: dart.legacy(core.bool), recursive: dart.legacy(core.bool)}, {}),
      [_wrap]: dart.fnType(dart.legacy(file_system_entity.FileSystemEntity), [dart.legacy(io.FileSystemEntity)])
    }));
    dart.setLibraryUri(ForwardingDirectory, L4);
    return ForwardingDirectory;
  });
  forwarding_directory.ForwardingDirectory = forwarding_directory.ForwardingDirectory$();
  dart.addTypeTests(forwarding_directory.ForwardingDirectory, _is_ForwardingDirectory_default);
  dart.trackLibraries("packages/file/src/forwarding/forwarding_link.dart", {
    "package:file/src/forwarding/forwarding_link.dart": forwarding_link,
    "package:file/src/forwarding/forwarding_file_system_entity.dart": forwarding_file_system_entity,
    "package:file/src/forwarding/forwarding_file_system.dart": forwarding_file_system,
    "package:file/src/forwarding/forwarding_file.dart": forwarding_file,
    "package:file/src/forwarding/forwarding_directory.dart": forwarding_directory,
    "package:file/src/forwarding.dart": forwarding,
    "package:file/file.dart": file$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["forwarding_link.dart","forwarding_file_system_entity.dart","forwarding_file_system.dart","forwarding_file.dart","forwarding_directory.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../packages/file/src/forwarding/forwarding_link.dart.lib.js"}');
  // Exports:
  return {
    src__forwarding__forwarding_link: forwarding_link,
    src__forwarding__forwarding_file_system_entity: forwarding_file_system_entity,
    src__forwarding__forwarding_file_system: forwarding_file_system,
    src__forwarding__forwarding_file: forwarding_file,
    src__forwarding__forwarding_directory: forwarding_directory,
    src__forwarding: forwarding,
    file: file$
  };
}));

//# sourceMappingURL=forwarding_link.dart.lib.js.map
