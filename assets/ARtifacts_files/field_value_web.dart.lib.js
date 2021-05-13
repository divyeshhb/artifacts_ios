define(['dart_sdk', 'packages/firebase/src/storage.dart'], (function load__packages__cloud_firestore_web__src__field_value_web_dart(dart_sdk, packages__firebase__src__storage$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const firestore = packages__firebase__src__storage$46dart.src__firestore;
  var field_value_web = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $hashCode = dartx.hashCode;
  dart._checkModuleNullSafetyMode(false);
  var FieldValueWebL = () => (FieldValueWebL = dart.constFn(dart.legacy(field_value_web.FieldValueWeb)))();
  const CT = Object.create(null);
  var L0 = "package:cloud_firestore_web/src/field_value_web.dart";
  var data$ = dart.privateName(field_value_web, "FieldValueWeb.data");
  field_value_web.FieldValueWeb = class FieldValueWeb extends core.Object {
    get data() {
      return this[data$];
    }
    set data(value) {
      this[data$] = value;
    }
    _equals(other) {
      if (other == null) return false;
      return FieldValueWebL().is(other) && dart.equals(other.data, this.data);
    }
    get hashCode() {
      return dart.hashCode(this.data);
    }
  };
  (field_value_web.FieldValueWeb.new = function(data) {
    this[data$] = data;
    ;
  }).prototype = field_value_web.FieldValueWeb.prototype;
  dart.addTypeTests(field_value_web.FieldValueWeb);
  dart.addTypeCaches(field_value_web.FieldValueWeb);
  dart.setMethodSignature(field_value_web.FieldValueWeb, () => ({
    __proto__: dart.getMethods(field_value_web.FieldValueWeb.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic])
  }));
  dart.setGetterSignature(field_value_web.FieldValueWeb, () => ({
    __proto__: dart.getGetters(field_value_web.FieldValueWeb.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(field_value_web.FieldValueWeb, L0);
  dart.setFieldSignature(field_value_web.FieldValueWeb, () => ({
    __proto__: dart.getFields(field_value_web.FieldValueWeb.__proto__),
    data: dart.fieldType(dart.legacy(firestore.FieldValue))
  }));
  dart.defineExtensionMethods(field_value_web.FieldValueWeb, ['_equals']);
  dart.defineExtensionAccessors(field_value_web.FieldValueWeb, ['hashCode']);
  dart.trackLibraries("packages/cloud_firestore_web/src/field_value_web.dart", {
    "package:cloud_firestore_web/src/field_value_web.dart": field_value_web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["field_value_web.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAWiB;;;;;;;UAMU;AACrB,YAAM,AAAiB,qBAAvB,KAAK,KAAgC,YAAX,AAAM,KAAD,OAAS;IAAI;;AAG5B,YAAK,eAAL;IAAa;;;IAPd;;EAAK","file":"../../../../../../../../../../../packages/cloud_firestore_web/src/field_value_web.dart.lib.js"}');
  // Exports:
  return {
    src__field_value_web: field_value_web
  };
}));

//# sourceMappingURL=field_value_web.dart.lib.js.map
