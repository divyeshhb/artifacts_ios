define(['dart_sdk', 'packages/cloud_firestore_platform_interface/src/field_path.dart'], (function load__packages__cloud_firestore_platform_interface__src__set_options_dart(dart_sdk, packages__cloud_firestore_platform_interface__src__field_path$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const field_path = packages__cloud_firestore_platform_interface__src__field_path$46dart.src__field_path;
  var set_options = Object.create(dart.library);
  var $length = dartx.length;
  var $where = dartx.where;
  var $map = dartx.map;
  var $toList = dartx.toList;
  dart._checkModuleNullSafetyMode(false);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var FieldPathL = () => (FieldPathL = dart.constFn(dart.legacy(field_path.FieldPath)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var dynamicToboolL = () => (dynamicToboolL = dart.constFn(dart.fnType(boolL(), [dart.dynamic])))();
  var dynamicToFieldPathL = () => (dynamicToFieldPathL = dart.constFn(dart.fnType(FieldPathL(), [dart.dynamic])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/cloud_firestore_platform_interface-2.1.3/lib/src/set_options.dart";
  var L1 = "package:cloud_firestore_platform_interface/src/set_options.dart";
  var merge$ = dart.privateName(set_options, "SetOptions.merge");
  var mergeFields$ = dart.privateName(set_options, "SetOptions.mergeFields");
  set_options.SetOptions = class SetOptions extends core.Object {
    get merge() {
      return this[merge$];
    }
    set merge(value) {
      super.merge = value;
    }
    get mergeFields() {
      return this[mergeFields$];
    }
    set mergeFields(value) {
      this[mergeFields$] = value;
    }
  };
  (set_options.SetOptions.new = function(opts) {
    let merge = opts && 'merge' in opts ? opts.merge : null;
    let mergeFields = opts && 'mergeFields' in opts ? opts.mergeFields : null;
    this[mergeFields$] = null;
    this[merge$] = merge;
    if (!!(this.merge == null && mergeFields == null)) dart.assertFailed("options must provide 'merge' or 'mergeFields'", L0, 26, 12, "!(merge == null && mergeFields == null)");
    if (this.merge != null) {
      if (!(mergeFields == null)) dart.assertFailed("options cannot have both 'merge' & 'mergeFields'", L0, 30, 14, "mergeFields == null");
    }
    if (mergeFields != null) {
      if (!(this.merge == null)) dart.assertFailed("options cannot have both 'merge' & 'mergeFields'", L0, 35, 14, "merge == null");
      if (!(mergeFields[$where](dart.fn(value => StringL().is(value) || FieldPathL().is(value), dynamicToboolL()))[$length] == mergeFields[$length])) dart.assertFailed("[mergeFields] must be a [String] or [FieldPath]", L0, 37, 11, "mergeFields\n                  .where((value) => value is String || value is FieldPath)\n                  .length ==\n              mergeFields.length");
      this.mergeFields = mergeFields[$map](FieldPathL(), dart.fn(field => {
        if (StringL().is(field)) return new field_path.FieldPath.fromString(field);
        return FieldPathL().as(field);
      }, dynamicToFieldPathL()))[$toList]({growable: false});
    }
  }).prototype = set_options.SetOptions.prototype;
  dart.addTypeTests(set_options.SetOptions);
  dart.addTypeCaches(set_options.SetOptions);
  dart.setLibraryUri(set_options.SetOptions, L1);
  dart.setFieldSignature(set_options.SetOptions, () => ({
    __proto__: dart.getFields(set_options.SetOptions.__proto__),
    merge: dart.finalFieldType(dart.legacy(core.bool)),
    mergeFields: dart.fieldType(dart.legacy(core.List$(dart.legacy(field_path.FieldPath))))
  }));
  dart.trackLibraries("packages/cloud_firestore_platform_interface/src/set_options.dart", {
    "package:cloud_firestore_platform_interface/src/set_options.dart": set_options
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["set_options.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;IAaa;;;;;;IAKK;;;;;;;;QAIT;QACS;IALA;IAIT;AAGL,SAAO,EAAE,AAAM,cAAG,QAAQ,AAAY,WAAD,IAAI,yBACrC;AAEJ,QAAI,cAAS;AACX,YAAO,AAAY,WAAD,IAAI,yBAClB;;AAGN,QAAI,WAAW,IAAI;AACjB,YAAO,AAAM,cAAG,yBAAM;AACtB,YACI,AACS,AACA,AAAO,WAFL,SACI,QAAC,SAAgB,AAAU,aAAhB,KAAK,KAAoB,gBAAN,KAAK,kCAE9C,AAAY,WAAD,8BACf;AAKsB,MAHrB,mBAAc,AAAY,AAG5B,WAH2B,qBAAK,QAAC;AAClC,YAAU,aAAN,KAAK,GAAY,MAAiB,qCAAW,KAAK;AACtD,cAAa,iBAAN,KAAK;qDACM;;EAExB","file":"../../../../../../../../../../../packages/cloud_firestore_platform_interface/src/set_options.dart.lib.js"}');
  // Exports:
  return {
    src__set_options: set_options
  };
}));

//# sourceMappingURL=set_options.dart.lib.js.map
