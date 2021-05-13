define(['dart_sdk'], (function load__packages__cloud_firestore_platform_interface__src__internal__pointer_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var pointer = Object.create(dart.library);
  var $split = dartx.split;
  var $isNotEmpty = dartx.isNotEmpty;
  var $where = dartx.where;
  var $toList = dartx.toList;
  var $join = dartx.join;
  var $last = dartx.last;
  var $modulo = dartx['%'];
  var $length = dartx.length;
  var $removeLast = dartx.removeLast;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(false);
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var StringLToboolL = () => (StringLToboolL = dart.constFn(dart.fnType(boolL(), [StringL()])))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(StringL())))();
  var PointerL = () => (PointerL = dart.constFn(dart.legacy(pointer.Pointer)))();
  const CT = Object.create(null);
  var L1 = "package:cloud_firestore_platform_interface/src/internal/pointer.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/cloud_firestore_platform_interface-2.1.3/lib/src/internal/pointer.dart";
  var components = dart.privateName(pointer, "Pointer.components");
  pointer.Pointer = class Pointer extends core.Object {
    get components() {
      return this[components];
    }
    set components(value) {
      super.components = value;
    }
    get path() {
      return this.components[$join]("/");
    }
    get id() {
      return this.components[$last];
    }
    isCollection() {
      return this.components[$length][$modulo](2) === 1;
    }
    isDocument() {
      return this.components[$length][$modulo](2) === 0;
    }
    collectionPath(collectionPath) {
      if (!dart.test(this.isDocument())) dart.assertFailed(null, L0, 53, 12, "isDocument()");
      return dart.str(this.path) + "/" + dart.str(collectionPath);
    }
    documentPath(documentPath) {
      if (!dart.test(this.isCollection())) dart.assertFailed(null, L0, 59, 12, "isCollection()");
      return dart.str(this.path) + "/" + dart.str(documentPath);
    }
    parentPath() {
      let t0;
      if (dart.notNull(this.components[$length]) < 2) {
        return null;
      }
      let parentComponents = (t0 = ListOfStringL().from(this.components), (() => {
        t0[$removeLast]();
        return t0;
      })());
      return parentComponents[$join]("/");
    }
    _equals(o) {
      if (o == null) return false;
      return PointerL().is(o) && o.path == this.path;
    }
    get hashCode() {
      return dart.hashCode(this.path);
    }
  };
  (pointer.Pointer.new = function(path) {
    if (!(path != null)) dart.assertFailed(null, L0, 13, 16, "path != null");
    this[components] = path[$split]("/")[$where](dart.fn(element => element[$isNotEmpty], StringLToboolL()))[$toList]();
    ;
  }).prototype = pointer.Pointer.prototype;
  dart.addTypeTests(pointer.Pointer);
  dart.addTypeCaches(pointer.Pointer);
  dart.setMethodSignature(pointer.Pointer, () => ({
    __proto__: dart.getMethods(pointer.Pointer.__proto__),
    isCollection: dart.fnType(dart.legacy(core.bool), []),
    isDocument: dart.fnType(dart.legacy(core.bool), []),
    collectionPath: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    documentPath: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    parentPath: dart.fnType(dart.legacy(core.String), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic])
  }));
  dart.setGetterSignature(pointer.Pointer, () => ({
    __proto__: dart.getGetters(pointer.Pointer.__proto__),
    path: dart.legacy(core.String),
    id: dart.legacy(core.String),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(pointer.Pointer, L1);
  dart.setFieldSignature(pointer.Pointer, () => ({
    __proto__: dart.getFields(pointer.Pointer.__proto__),
    components: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String))))
  }));
  dart.defineExtensionMethods(pointer.Pointer, ['_equals']);
  dart.defineExtensionAccessors(pointer.Pointer, ['hashCode']);
  dart.trackLibraries("packages/cloud_firestore_platform_interface/src/internal/pointer.dart", {
    "package:cloud_firestore_platform_interface/src/internal/pointer.dart": pointer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["pointer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwBqB;;;;;;;AANjB,YAAO,AAAW,wBAAK;IACzB;;AAYE,YAAO,AAAW;IACpB;;AAOE,YAAO,AAAW,AAAO,AAAI,mCAAF,OAAK;IAClC;;AAOE,YAAO,AAAW,AAAO,AAAI,mCAAF,OAAK;IAClC;mBAG6B;AAC3B,qBAAO;AACP,YAA8B,UAArB,aAAI,eAAE,cAAc;IAC/B;iBAG2B;AACzB,qBAAO;AACP,YAA4B,UAAnB,aAAI,eAAE,YAAY;IAC7B;;;AAIE,UAAsB,aAAlB,AAAW,4BAAS;AACtB,cAAO;;AAGI,mCAAmB,qBAAkB,kBAAlB;AAA+B;;;AAC/D,YAAO,AAAiB,iBAAD,QAAM;IAC/B;;UAGyB;AAAM,YAAE,AAAW,eAAb,CAAC,KAAe,AAAE,AAAK,CAAN,SAAS;IAAI;;AAGzC,YAAK,eAAL;IAAa;;kCAjElB;UACF,AAAK,IAAD,IAAI;IACJ,mBACP,AAAK,AAAW,AAAuC,IAAnD,SAAO,aAAW,QAAC,WAAY,AAAQ,OAAD;;EAAqB","file":"../../../../../../../../../../../../packages/cloud_firestore_platform_interface/src/internal/pointer.dart.lib.js"}');
  // Exports:
  return {
    src__internal__pointer: pointer
  };
}));

//# sourceMappingURL=pointer.dart.lib.js.map
