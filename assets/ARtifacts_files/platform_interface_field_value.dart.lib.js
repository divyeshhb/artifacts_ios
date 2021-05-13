define(['dart_sdk'], (function load__packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_field_value_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var platform_interface_field_value = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_field_value.dart";
  var _delegate$ = dart.privateName(platform_interface_field_value, "_delegate");
  platform_interface_field_value.FieldValuePlatform = class FieldValuePlatform extends core.Object {
    static getDelegate(fieldValue) {
      return fieldValue[_delegate$];
    }
    static verifyExtends(instance) {
    }
  };
  (platform_interface_field_value.FieldValuePlatform.new = function(_delegate) {
    this[_delegate$] = _delegate;
    ;
  }).prototype = platform_interface_field_value.FieldValuePlatform.prototype;
  dart.addTypeTests(platform_interface_field_value.FieldValuePlatform);
  dart.addTypeCaches(platform_interface_field_value.FieldValuePlatform);
  dart.setLibraryUri(platform_interface_field_value.FieldValuePlatform, L0);
  dart.setFieldSignature(platform_interface_field_value.FieldValuePlatform, () => ({
    __proto__: dart.getFields(platform_interface_field_value.FieldValuePlatform.__proto__),
    [_delegate$]: dart.finalFieldType(dart.dynamic)
  }));
  dart.trackLibraries("packages/cloud_firestore_platform_interface/src/platform_interface/platform_interface_field_value.dart", {
    "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_field_value.dart": platform_interface_field_value
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["platform_interface_field_value.dart"],"names":[],"mappings":";;;;;;;;;;;uBAiBgD;AAC1C,YAAA,AAAW,WAAD;IAAU;yBAIqB;IAAW;;;IAXhC;;EAAU","file":"../../../../../../../../../../../../packages/cloud_firestore_platform_interface/src/platform_interface/platform_interface_field_value.dart.lib.js"}');
  // Exports:
  return {
    src__platform_interface__platform_interface_field_value: platform_interface_field_value
  };
}));

//# sourceMappingURL=platform_interface_field_value.dart.lib.js.map
