define(['dart_sdk'], (function load__packages__qr_flutter__src__types_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var types = Object.create(dart.library);
  var $toString = dartx.toString;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(false);
  var QrCodeElementL = () => (QrCodeElementL = dart.constFn(dart.legacy(types.QrCodeElement)))();
  var FinderPatternPositionL = () => (FinderPatternPositionL = dart.constFn(dart.legacy(types.FinderPatternPosition)))();
  var QrEmbeddedImageStyleL = () => (QrEmbeddedImageStyleL = dart.constFn(dart.legacy(types.QrEmbeddedImageStyle)))();
  const CT = Object.create(null);
  var L0 = "package:qr_flutter/src/types.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: types.QrCodeElement.prototype,
        [_name$]: "QrCodeElement.finderPatternOuter",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: types.QrCodeElement.prototype,
        [_name$]: "QrCodeElement.finderPatternInner",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: types.QrCodeElement.prototype,
        [_name$]: "QrCodeElement.finderPatternDot",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: types.QrCodeElement.prototype,
        [_name$]: "QrCodeElement.codePixel",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: types.QrCodeElement.prototype,
        [_name$]: "QrCodeElement.codePixelEmpty",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], QrCodeElementL());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: types.FinderPatternPosition.prototype,
        [_name$]: "FinderPatternPosition.topLeft",
        index: 0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: types.FinderPatternPosition.prototype,
        [_name$]: "FinderPatternPosition.topRight",
        index: 1
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: types.FinderPatternPosition.prototype,
        [_name$]: "FinderPatternPosition.bottomLeft",
        index: 2
      });
    },
    get C9() {
      return C9 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], FinderPatternPositionL());
    }
  }, false);
  var _name$ = dart.privateName(types, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  types.QrCodeElement = class QrCodeElement extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (types.QrCodeElement.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = types.QrCodeElement.prototype;
  dart.addTypeTests(types.QrCodeElement);
  dart.addTypeCaches(types.QrCodeElement);
  dart.setMethodSignature(types.QrCodeElement, () => ({
    __proto__: dart.getMethods(types.QrCodeElement.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(types.QrCodeElement, L0);
  dart.setFieldSignature(types.QrCodeElement, () => ({
    __proto__: dart.getFields(types.QrCodeElement.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(types.QrCodeElement, ['toString']);
  types.QrCodeElement.finderPatternOuter = C0 || CT.C0;
  types.QrCodeElement.finderPatternInner = C1 || CT.C1;
  types.QrCodeElement.finderPatternDot = C2 || CT.C2;
  types.QrCodeElement.codePixel = C3 || CT.C3;
  types.QrCodeElement.codePixelEmpty = C4 || CT.C4;
  types.QrCodeElement.values = C5 || CT.C5;
  var C6;
  var C7;
  var C8;
  var C9;
  types.FinderPatternPosition = class FinderPatternPosition extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (types.FinderPatternPosition.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = types.FinderPatternPosition.prototype;
  dart.addTypeTests(types.FinderPatternPosition);
  dart.addTypeCaches(types.FinderPatternPosition);
  dart.setMethodSignature(types.FinderPatternPosition, () => ({
    __proto__: dart.getMethods(types.FinderPatternPosition.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(types.FinderPatternPosition, L0);
  dart.setFieldSignature(types.FinderPatternPosition, () => ({
    __proto__: dart.getFields(types.FinderPatternPosition.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(types.FinderPatternPosition, ['toString']);
  types.FinderPatternPosition.topLeft = C6 || CT.C6;
  types.FinderPatternPosition.topRight = C7 || CT.C7;
  types.FinderPatternPosition.bottomLeft = C8 || CT.C8;
  types.FinderPatternPosition.values = C9 || CT.C9;
  var size$ = dart.privateName(types, "QrEmbeddedImageStyle.size");
  var color$ = dart.privateName(types, "QrEmbeddedImageStyle.color");
  types.QrEmbeddedImageStyle = class QrEmbeddedImageStyle extends core.Object {
    get size() {
      return this[size$];
    }
    set size(value) {
      this[size$] = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      this[color$] = value;
    }
    get hasDefinedSize() {
      return this.size != null && dart.notNull(this.size.longestSide) > 0;
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.size)) ^ dart.notNull(dart.hashCode(this.color))) >>> 0;
    }
    _equals(other) {
      if (other == null) return false;
      if (QrEmbeddedImageStyleL().is(other)) {
        return dart.equals(this.size, other.size) && dart.equals(this.color, other.color);
      }
      return false;
    }
  };
  (types.QrEmbeddedImageStyle.new = function(opts) {
    let size = opts && 'size' in opts ? opts.size : null;
    let color = opts && 'color' in opts ? opts.color : null;
    this[size$] = size;
    this[color$] = color;
    ;
  }).prototype = types.QrEmbeddedImageStyle.prototype;
  dart.addTypeTests(types.QrEmbeddedImageStyle);
  dart.addTypeCaches(types.QrEmbeddedImageStyle);
  dart.setMethodSignature(types.QrEmbeddedImageStyle, () => ({
    __proto__: dart.getMethods(types.QrEmbeddedImageStyle.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)])
  }));
  dart.setGetterSignature(types.QrEmbeddedImageStyle, () => ({
    __proto__: dart.getGetters(types.QrEmbeddedImageStyle.__proto__),
    hasDefinedSize: dart.legacy(core.bool),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(types.QrEmbeddedImageStyle, L0);
  dart.setFieldSignature(types.QrEmbeddedImageStyle, () => ({
    __proto__: dart.getFields(types.QrEmbeddedImageStyle.__proto__),
    size: dart.fieldType(dart.legacy(ui.Size)),
    color: dart.fieldType(dart.legacy(ui.Color))
  }));
  dart.defineExtensionMethods(types.QrEmbeddedImageStyle, ['_equals']);
  dart.defineExtensionAccessors(types.QrEmbeddedImageStyle, ['hashCode']);
  dart.trackLibraries("packages/qr_flutter/src/types.dart", {
    "package:qr_flutter/src/types.dart": types
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["types.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4BA;;6CAfK;;;;EAeL;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAYA;;qDATK;;;;EASL;;;;;;;;;;;;;;;;;;;;;;IAaO;;;;;;IAGC;;;;;;;AAGqB,YAAA,AAAa,cAAL,QAAyB,aAAjB,AAAK,yBAAc;IAAC;;AAG3C,YAAc,eAAT,cAAL,2BAAsB,cAAN;IAAc;;UAG1B;AACtB,UAAU,2BAAN,KAAK;AACP,cAAY,AAAc,aAAnB,WAAQ,AAAM,KAAD,UAAe,YAAN,YAAS,AAAM,KAAD;;AAE7C,YAAO;IACT;;;QAxBO;QACA;IADA;IACA;;EACL","file":"../../../../../../../../../../../packages/qr_flutter/src/types.dart.lib.js"}');
  // Exports:
  return {
    src__types: types
  };
}));

//# sourceMappingURL=types.dart.lib.js.map
