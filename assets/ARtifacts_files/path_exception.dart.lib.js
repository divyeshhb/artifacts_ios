define(['dart_sdk'], (function load__packages__path__src__path_exception_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var path_exception = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/path-1.8.0-nullsafety.3/lib/src/path_exception.dart";
  var L1 = "package:path/src/path_exception.dart";
  var message$ = dart.privateName(path_exception, "PathException.message");
  path_exception.PathException = class PathException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      this[message$] = value;
    }
    toString() {
      return "PathException: " + dart.str(this.message);
    }
  };
  (path_exception.PathException.new = function(message) {
    if (message == null) dart.nullFailed(L0, 10, 22, "message");
    this[message$] = message;
    ;
  }).prototype = path_exception.PathException.prototype;
  dart.addTypeTests(path_exception.PathException);
  dart.addTypeCaches(path_exception.PathException);
  path_exception.PathException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(path_exception.PathException, L1);
  dart.setFieldSignature(path_exception.PathException, () => ({
    __proto__: dart.getFields(path_exception.PathException.__proto__),
    message: dart.fieldType(core.String)
  }));
  dart.defineExtensionMethods(path_exception.PathException, ['toString']);
  dart.trackLibraries("packages/path/src/path_exception.dart", {
    "package:path/src/path_exception.dart": path_exception
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["path_exception.dart"],"names":[],"mappings":";;;;;;;;;;;;IAOS;;;;;;;AAKc,YAAA,AAAyB,8BAAR;IAAQ;;;QAH3B;;;EAAQ","file":"../../../../../../../../../../../packages/path/src/path_exception.dart.lib.js"}');
  // Exports:
  return {
    src__path_exception: path_exception
  };
}));

//# sourceMappingURL=path_exception.dart.lib.js.map
