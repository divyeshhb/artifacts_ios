define(['dart_sdk', 'packages/collection/src/equality.dart'], (function load__packages__cloud_firestore_platform_interface__src__blob_dart(dart_sdk, packages__collection__src__equality$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const equality = packages__collection__src__equality$46dart.src__equality;
  var blob = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $hashCode = dartx.hashCode;
  dart._checkModuleNullSafetyMode(false);
  var BlobL = () => (BlobL = dart.constFn(dart.legacy(blob.Blob)))();
  var DefaultEqualityOfNull = () => (DefaultEqualityOfNull = dart.constFn(equality.DefaultEquality$(core.Null)))();
  const CT = Object.create(null);
  var L0 = "package:cloud_firestore_platform_interface/src/blob.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: DefaultEqualityOfNull().prototype
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: equality.DeepCollectionEquality.prototype,
        [DeepCollectionEquality__unordered]: false,
        [DeepCollectionEquality__base]: C1 || CT.C1
      });
    }
  }, false);
  var DeepCollectionEquality__unordered = dart.privateName(equality, "DeepCollectionEquality._unordered");
  var C1;
  var DeepCollectionEquality__base = dart.privateName(equality, "DeepCollectionEquality._base");
  var C0;
  var bytes$ = dart.privateName(blob, "Blob.bytes");
  blob.Blob = class Blob extends core.Object {
    get bytes() {
      return this[bytes$];
    }
    set bytes(value) {
      super.bytes = value;
    }
    _equals(other) {
      if (other == null) return false;
      return BlobL().is(other) && dart.test((C0 || CT.C0).equals(other.bytes, this.bytes));
    }
    get hashCode() {
      return ui.hashList(this.bytes);
    }
  };
  (blob.Blob.new = function(bytes) {
    this[bytes$] = bytes;
    ;
  }).prototype = blob.Blob.prototype;
  dart.addTypeTests(blob.Blob);
  dart.addTypeCaches(blob.Blob);
  dart.setMethodSignature(blob.Blob, () => ({
    __proto__: dart.getMethods(blob.Blob.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic])
  }));
  dart.setGetterSignature(blob.Blob, () => ({
    __proto__: dart.getGetters(blob.Blob.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(blob.Blob, L0);
  dart.setFieldSignature(blob.Blob, () => ({
    __proto__: dart.getFields(blob.Blob.__proto__),
    bytes: dart.finalFieldType(dart.legacy(typed_data.Uint8List))
  }));
  dart.defineExtensionMethods(blob.Blob, ['_equals']);
  dart.defineExtensionAccessors(blob.Blob, ['hashCode']);
  dart.trackLibraries("packages/cloud_firestore_platform_interface/src/blob.dart", {
    "package:cloud_firestore_platform_interface/src/blob.dart": blob
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["blob.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAekB;;;;;;;UAGS;AACrB,YAAM,AAAQ,YAAd,KAAK,eAC0B,qBAAO,AAAM,KAAD,QAAQ;IAAM;;AAGzC,yBAAS;IAAM;;;IAXnB;;EAAM","file":"../../../../../../../../../../../packages/cloud_firestore_platform_interface/src/blob.dart.lib.js"}');
  // Exports:
  return {
    src__blob: blob
  };
}));

//# sourceMappingURL=blob.dart.lib.js.map
