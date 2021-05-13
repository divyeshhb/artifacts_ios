define(['dart_sdk'], (function load__packages__cloud_firestore_platform_interface__src__source_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var source = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  var SourceL = () => (SourceL = dart.constFn(dart.legacy(source.Source)))();
  const CT = Object.create(null);
  var L0 = "package:cloud_firestore_platform_interface/src/source.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: source.Source.prototype,
        [_name$]: "Source.serverAndCache",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: source.Source.prototype,
        [_name$]: "Source.server",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: source.Source.prototype,
        [_name$]: "Source.cache",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], SourceL());
    }
  }, false);
  var _name$ = dart.privateName(source, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  source.Source = class Source extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (source.Source.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = source.Source.prototype;
  dart.addTypeTests(source.Source);
  dart.addTypeCaches(source.Source);
  dart.setMethodSignature(source.Source, () => ({
    __proto__: dart.getMethods(source.Source.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(source.Source, L0);
  dart.setFieldSignature(source.Source, () => ({
    __proto__: dart.getFields(source.Source.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(source.Source, ['toString']);
  source.Source.serverAndCache = C0 || CT.C0;
  source.Source.server = C1 || CT.C1;
  source.Source.cache = C2 || CT.C2;
  source.Source.values = C3 || CT.C3;
  dart.trackLibraries("packages/cloud_firestore_platform_interface/src/source.dart", {
    "package:cloud_firestore_platform_interface/src/source.dart": source
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["source.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsBA;;uCAjBK;;;;EAiBL","file":"../../../../../../../../../../../packages/cloud_firestore_platform_interface/src/source.dart.lib.js"}');
  // Exports:
  return {
    src__source: source
  };
}));

//# sourceMappingURL=source.dart.lib.js.map
