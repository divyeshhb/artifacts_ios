define(['dart_sdk', 'packages/file/src/interface/link.dart', 'packages/file/src/interface/error_codes.dart'], (function load__packages__file__src__common_dart(dart_sdk, packages__file__src__interface__link$46dart, packages__file__src__interface__error_codes$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const io = dart_sdk.io;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const directory = packages__file__src__interface__link$46dart.src__interface__directory;
  const file = packages__file__src__interface__link$46dart.src__interface__file;
  const link = packages__file__src__interface__link$46dart.src__interface__link;
  const error_codes = packages__file__src__interface__error_codes$46dart.src__interface__error_codes;
  var common = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "package:file/src/common.dart";
  common.DirectoryAddOnsMixin = class DirectoryAddOnsMixin extends core.Object {
    childDirectory(basename) {
      return this.fileSystem.directory(this.fileSystem.path.join(this.path, basename));
    }
    childFile(basename) {
      return this.fileSystem.file(this.fileSystem.path.join(this.path, basename));
    }
    childLink(basename) {
      return this.fileSystem.link(this.fileSystem.path.join(this.path, basename));
    }
  };
  (common.DirectoryAddOnsMixin.new = function() {
    ;
  }).prototype = common.DirectoryAddOnsMixin.prototype;
  dart.addTypeTests(common.DirectoryAddOnsMixin);
  dart.addTypeCaches(common.DirectoryAddOnsMixin);
  common.DirectoryAddOnsMixin[dart.implements] = () => [directory.Directory];
  dart.setMethodSignature(common.DirectoryAddOnsMixin, () => ({
    __proto__: dart.getMethods(common.DirectoryAddOnsMixin.__proto__),
    childDirectory: dart.fnType(dart.legacy(directory.Directory), [dart.legacy(core.String)]),
    childFile: dart.fnType(dart.legacy(file.File), [dart.legacy(core.String)]),
    childLink: dart.fnType(dart.legacy(link.Link), [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(common.DirectoryAddOnsMixin, L0);
  common.noSuchFileOrDirectory = function noSuchFileOrDirectory(path) {
    return common._fsException(path, "No such file or directory", error_codes.ErrorCodes.ENOENT);
  };
  common.notADirectory = function notADirectory(path) {
    return common._fsException(path, "Not a directory", error_codes.ErrorCodes.ENOTDIR);
  };
  common.isADirectory = function isADirectory(path) {
    return common._fsException(path, "Is a directory", error_codes.ErrorCodes.EISDIR);
  };
  common.directoryNotEmpty = function directoryNotEmpty(path) {
    return common._fsException(path, "Directory not empty", error_codes.ErrorCodes.ENOTEMPTY);
  };
  common.fileExists = function fileExists(path) {
    return common._fsException(path, "File exists", error_codes.ErrorCodes.EEXIST);
  };
  common.invalidArgument = function invalidArgument(path) {
    return common._fsException(path, "Invalid argument", error_codes.ErrorCodes.EINVAL);
  };
  common.tooManyLevelsOfSymbolicLinks = function tooManyLevelsOfSymbolicLinks(path) {
    return common._fsException(path, "Too many levels of symbolic links", error_codes.ErrorCodes.ELOOP);
  };
  common.badFileDescriptor = function badFileDescriptor(path) {
    return common._fsException(path, "Bad file descriptor", error_codes.ErrorCodes.EBADF);
  };
  common._fsException = function _fsException(path, msg, errorCode) {
    return new io.FileSystemException.new(msg, path, new io.OSError.new(msg, errorCode));
  };
  dart.trackLibraries("packages/file/src/common.dart", {
    "package:file/src/common.dart": common
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["common.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;mBAwDkC;AAC9B,YAAO,AAAW,2BAAU,AAAW,AAAK,0BAAK,WAAM,QAAQ;IACjE;cAGsB;AACpB,YAAO,AAAW,sBAAK,AAAW,AAAK,0BAAK,WAAM,QAAQ;IAC5D;cAGsB;AACpB,YAAO,AAAW,sBAAK,AAAW,AAAK,0BAAK,WAAM,QAAQ;IAC5D;;;;EACF;;;;;;;;;;;gEA9DiD;AAC/C,UAAO,qBAAa,IAAI,EAAE,6BAAwC;EACpE;gDAGyC;AACvC,UAAO,qBAAa,IAAI,EAAE,mBAA8B;EAC1D;8CAGwC;AACtC,UAAO,qBAAa,IAAI,EAAE,kBAA6B;EACzD;wDAG6C;AAC3C,UAAO,qBAAa,IAAI,EAAE,uBAAkC;EAC9D;0CAGsC;AACpC,UAAO,qBAAa,IAAI,EAAE,eAA0B;EACtD;oDAG2C;AACzC,UAAO,qBAAa,IAAI,EAAE,oBAA+B;EAC3D;8EAGwD;AAEtD,UAAO,qBACH,IAAI,EAAE,qCAAgD;EAC5D;wDAG6C;AAC3C,UAAO,qBAAa,IAAI,EAAE,uBAAkC;EAC9D;8CAEwC,MAAa,KAAS;AAC5D,UAAO,gCAAoB,GAAG,EAAE,IAAI,EAAE,mBAAQ,GAAG,EAAE,SAAS;EAC9D","file":"../../../../../../../../../../../packages/file/src/common.dart.lib.js"}');
  // Exports:
  return {
    src__common: common
  };
}));

//# sourceMappingURL=common.dart.lib.js.map
