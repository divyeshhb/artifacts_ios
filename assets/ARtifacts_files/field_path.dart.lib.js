define(['dart_sdk', 'packages/cloud_firestore_platform_interface/src/internal/field_path_type.dart', 'packages/collection/src/equality.dart'], (function load__packages__cloud_firestore_platform_interface__src__field_path_dart(dart_sdk, packages__cloud_firestore_platform_interface__src__internal__field_path_type$46dart, packages__collection__src__equality$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const field_path_type = packages__cloud_firestore_platform_interface__src__internal__field_path_type$46dart.src__internal__field_path_type;
  const equality = packages__collection__src__equality$46dart.src__equality;
  var field_path = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $isEmpty = dartx.isEmpty;
  var $where = dartx.where;
  var $split = dartx.split;
  var $startsWith = dartx.startsWith;
  var $endsWith = dartx.endsWith;
  var $contains = dartx.contains;
  var $_equals = dartx._equals;
  var $hashCode = dartx.hashCode;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var StringLToboolL = () => (StringLToboolL = dart.constFn(dart.fnType(boolL(), [StringL()])))();
  var FieldPathL = () => (FieldPathL = dart.constFn(dart.legacy(field_path.FieldPath)))();
  const CT = Object.create(null);
  var L1 = "package:cloud_firestore_platform_interface/src/field_path.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/cloud_firestore_platform_interface-2.1.3/lib/src/field_path.dart";
  var components$ = dart.privateName(field_path, "FieldPath.components");
  field_path.FieldPath = class FieldPath extends core.Object {
    get components() {
      return this[components$];
    }
    set components(value) {
      super.components = value;
    }
    static get documentId() {
      return field_path_type.FieldPathType.documentId;
    }
    _equals(o) {
      if (o == null) return false;
      return FieldPathL().is(o) && dart.test(new equality.ListEquality.new().equals(o.components, this.components));
    }
    get hashCode() {
      return ui.hashList(this.components);
    }
    toString() {
      return "FieldPath(" + dart.str(this.components) + ")";
    }
  };
  (field_path.FieldPath.new = function(components) {
    this[components$] = components;
    if (!(this.components != null)) dart.assertFailed(null, L0, 21, 12, "components != null");
    if (!dart.test(this.components[$isNotEmpty])) dart.assertFailed(null, L0, 22, 12, "components.isNotEmpty");
    if (!dart.test(this.components[$where](dart.fn(component => component == null || component[$isEmpty], StringLToboolL()))[$isEmpty])) dart.assertFailed("Expected all FieldPath components to be non-null or non-empty strings.", L0, 24, 9, "components\n            .where((component) => component == null || component.isEmpty)\n            .isEmpty");
  }).prototype = field_path.FieldPath.prototype;
  (field_path.FieldPath.fromString = function(path) {
    this[components$] = path[$split](".");
    if (!path[$isNotEmpty]) dart.assertFailed(null, L0, 44, 12, "path.isNotEmpty");
    if (!!path[$startsWith](".")) dart.assertFailed(null, L0, 45, 12, "!path.startsWith('.')");
    if (!!path[$endsWith](".")) dart.assertFailed(null, L0, 46, 12, "!path.endsWith('.')");
    if (!!path[$contains]("..")) dart.assertFailed(null, L0, 47, 12, "!path.contains('..')");
    if (!!path[$contains]("~")) dart.assertFailed(field_path._reserved, L0, 48, 12, "!path.contains('~')");
    if (!!path[$contains]("*")) dart.assertFailed(field_path._reserved, L0, 49, 12, "!path.contains('*')");
    if (!!path[$contains]("/")) dart.assertFailed(field_path._reserved, L0, 50, 12, "!path.contains('/')");
    if (!!path[$contains]("[")) dart.assertFailed(field_path._reserved, L0, 51, 12, "!path.contains('[')");
    if (!!path[$contains]("]")) dart.assertFailed(field_path._reserved, L0, 52, 12, "!path.contains(']')");
  }).prototype = field_path.FieldPath.prototype;
  dart.addTypeTests(field_path.FieldPath);
  dart.addTypeCaches(field_path.FieldPath);
  dart.setMethodSignature(field_path.FieldPath, () => ({
    __proto__: dart.getMethods(field_path.FieldPath.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(field_path.FieldPath, () => ({
    __proto__: dart.getGetters(field_path.FieldPath.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(field_path.FieldPath, L1);
  dart.setFieldSignature(field_path.FieldPath, () => ({
    __proto__: dart.getFields(field_path.FieldPath.__proto__),
    components: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String))))
  }));
  dart.defineExtensionMethods(field_path.FieldPath, ['_equals', 'toString']);
  dart.defineExtensionAccessors(field_path.FieldPath, ['hashCode']);
  dart.defineLazy(field_path, {
    /*field_path._reserved*/get _reserved() {
      return "Paths must not contain '~', '*', '/', '[', or ']'.";
    },
    set _reserved(_) {}
  }, true);
  dart.trackLibraries("packages/cloud_firestore_platform_interface/src/field_path.dart", {
    "package:cloud_firestore_platform_interface/src/field_path.dart": field_path
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["field_path.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgBqB;;;;;;;AAiBjB,YAAqB;IACvB;;UAqByB;AACrB,YAAE,AAAa,iBAAf,CAAC,eAAiB,AAAe,uCAAO,AAAE,CAAD,aAAa;IAAW;;AAGjD,yBAAS;IAAW;;AAGnB,YAAA,AAAwB,yBAAZ,mBAAU;IAAE;;;IA3C9B;AACb,UAAO,AAAW,mBAAG;AACrB,mBAAO,AAAW;AAClB,mBACI,AACK,AACA,wBADM,QAAC,aAAc,AAAU,AAAQ,SAAT,IAAI,QAAQ,AAAU,SAAD,6DAExD;EACN;8CAe4B;IAAmB,oBAAE,AAAK,IAAD,SAAO;AAC1D,SAAO,AAAK,IAAD;AACX,SAAO,CAAC,AAAK,IAAD,cAAY;AACxB,SAAO,CAAC,AAAK,IAAD,YAAU;AACtB,SAAO,CAAC,AAAK,IAAD,YAAU;AACtB,SAAO,CAAC,AAAK,IAAD,YAAU,wBAAM;AAC5B,SAAO,CAAC,AAAK,IAAD,YAAU,wBAAM;AAC5B,SAAO,CAAC,AAAK,IAAD,YAAU,wBAAM;AAC5B,SAAO,CAAC,AAAK,IAAD,YAAU,wBAAM;AAC5B,SAAO,CAAC,AAAK,IAAD,YAAU,wBAAM;EAC9B;;;;;;;;;;;;;;;;;;;;;;;MA5CK,oBAAS;YAAG","file":"../../../../../../../../../../../packages/cloud_firestore_platform_interface/src/field_path.dart.lib.js"}');
  // Exports:
  return {
    src__field_path: field_path
  };
}));

//# sourceMappingURL=field_path.dart.lib.js.map
