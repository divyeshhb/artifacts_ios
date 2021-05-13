define(['dart_sdk'], (function load__packages__cloud_firestore_platform_interface__src__internal__field_path_type_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var field_path_type = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  var FieldPathTypeL = () => (FieldPathTypeL = dart.constFn(dart.legacy(field_path_type.FieldPathType)))();
  const CT = Object.create(null);
  var L0 = "package:cloud_firestore_platform_interface/src/internal/field_path_type.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: field_path_type.FieldPathType.prototype,
        [_name$]: "FieldPathType.documentId",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.constList([C0 || CT.C0], FieldPathTypeL());
    }
  }, false);
  var _name$ = dart.privateName(field_path_type, "_name");
  var C0;
  var C1;
  field_path_type.FieldPathType = class FieldPathType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (field_path_type.FieldPathType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = field_path_type.FieldPathType.prototype;
  dart.addTypeTests(field_path_type.FieldPathType);
  dart.addTypeCaches(field_path_type.FieldPathType);
  dart.setMethodSignature(field_path_type.FieldPathType, () => ({
    __proto__: dart.getMethods(field_path_type.FieldPathType.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(field_path_type.FieldPathType, L0);
  dart.setFieldSignature(field_path_type.FieldPathType, () => ({
    __proto__: dart.getFields(field_path_type.FieldPathType.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(field_path_type.FieldPathType, ['toString']);
  field_path_type.FieldPathType.documentId = C0 || CT.C0;
  field_path_type.FieldPathType.values = C1 || CT.C1;
  dart.trackLibraries("packages/cloud_firestore_platform_interface/src/internal/field_path_type.dart", {
    "package:cloud_firestore_platform_interface/src/internal/field_path_type.dart": field_path_type
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["field_path_type.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQA;;uDAHK;;;;EAGL","file":"../../../../../../../../../../../../packages/cloud_firestore_platform_interface/src/internal/field_path_type.dart.lib.js"}');
  // Exports:
  return {
    src__internal__field_path_type: field_path_type
  };
}));

//# sourceMappingURL=field_path_type.dart.lib.js.map
