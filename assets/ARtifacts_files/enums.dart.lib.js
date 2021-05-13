define(['dart_sdk'], (function load__packages__path_provider_platform_interface__src__enums_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var enums = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  var StorageDirectoryL = () => (StorageDirectoryL = dart.constFn(dart.legacy(enums.StorageDirectory)))();
  const CT = Object.create(null);
  var L0 = "package:path_provider_platform_interface/src/enums.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: enums.StorageDirectory.prototype,
        [_name$]: "StorageDirectory.music",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: enums.StorageDirectory.prototype,
        [_name$]: "StorageDirectory.podcasts",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: enums.StorageDirectory.prototype,
        [_name$]: "StorageDirectory.ringtones",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: enums.StorageDirectory.prototype,
        [_name$]: "StorageDirectory.alarms",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: enums.StorageDirectory.prototype,
        [_name$]: "StorageDirectory.notifications",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: enums.StorageDirectory.prototype,
        [_name$]: "StorageDirectory.pictures",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: enums.StorageDirectory.prototype,
        [_name$]: "StorageDirectory.movies",
        index: 6
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: enums.StorageDirectory.prototype,
        [_name$]: "StorageDirectory.downloads",
        index: 7
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: enums.StorageDirectory.prototype,
        [_name$]: "StorageDirectory.dcim",
        index: 8
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: enums.StorageDirectory.prototype,
        [_name$]: "StorageDirectory.documents",
        index: 9
      });
    },
    get C10() {
      return C10 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], StorageDirectoryL());
    }
  }, false);
  var _name$ = dart.privateName(enums, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  enums.StorageDirectory = class StorageDirectory extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (enums.StorageDirectory.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = enums.StorageDirectory.prototype;
  dart.addTypeTests(enums.StorageDirectory);
  dart.addTypeCaches(enums.StorageDirectory);
  dart.setMethodSignature(enums.StorageDirectory, () => ({
    __proto__: dart.getMethods(enums.StorageDirectory.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(enums.StorageDirectory, L0);
  dart.setFieldSignature(enums.StorageDirectory, () => ({
    __proto__: dart.getFields(enums.StorageDirectory.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(enums.StorageDirectory, ['toString']);
  enums.StorageDirectory.music = C0 || CT.C0;
  enums.StorageDirectory.podcasts = C1 || CT.C1;
  enums.StorageDirectory.ringtones = C2 || CT.C2;
  enums.StorageDirectory.alarms = C3 || CT.C3;
  enums.StorageDirectory.notifications = C4 || CT.C4;
  enums.StorageDirectory.pictures = C5 || CT.C5;
  enums.StorageDirectory.movies = C6 || CT.C6;
  enums.StorageDirectory.downloads = C7 || CT.C7;
  enums.StorageDirectory.dcim = C8 || CT.C8;
  enums.StorageDirectory.documents = C9 || CT.C9;
  enums.StorageDirectory.values = C10 || CT.C10;
  dart.trackLibraries("packages/path_provider_platform_interface/src/enums.dart", {
    "package:path_provider_platform_interface/src/enums.dart": enums
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["enums.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgDA;;gDA7CK;;;;EA6CL","file":"../../../../../../../../../../../packages/path_provider_platform_interface/src/enums.dart.lib.js"}');
  // Exports:
  return {
    src__enums: enums
  };
}));

//# sourceMappingURL=enums.dart.lib.js.map
