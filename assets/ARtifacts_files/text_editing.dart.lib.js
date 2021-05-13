define(['dart_sdk', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__services__text_editing_dart(dart_sdk, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var text_editing = Object.create(dart.library);
  var $hashCode = dartx.hashCode;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/text_editing.dart";
  var L1 = "package:flutter/src/services/text_editing.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.TextAffinity.prototype,
        [_name]: "TextAffinity.downstream",
        index: 1
      });
    }
  }, false);
  var _name = dart.privateName(ui, "_name");
  var C0;
  var baseOffset$ = dart.privateName(text_editing, "TextSelection.baseOffset");
  var extentOffset$ = dart.privateName(text_editing, "TextSelection.extentOffset");
  var affinity$ = dart.privateName(text_editing, "TextSelection.affinity");
  var isDirectional$ = dart.privateName(text_editing, "TextSelection.isDirectional");
  text_editing.TextSelection = class TextSelection extends ui.TextRange {
    get baseOffset() {
      return this[baseOffset$];
    }
    set baseOffset(value) {
      super.baseOffset = value;
    }
    get extentOffset() {
      return this[extentOffset$];
    }
    set extentOffset(value) {
      super.extentOffset = value;
    }
    get affinity() {
      return this[affinity$];
    }
    set affinity(value) {
      super.affinity = value;
    }
    get isDirectional() {
      return this[isDirectional$];
    }
    set isDirectional(value) {
      super.isDirectional = value;
    }
    get base() {
      return new ui.TextPosition.new({offset: this.baseOffset, affinity: this.affinity});
    }
    get extent() {
      return new ui.TextPosition.new({offset: this.extentOffset, affinity: this.affinity});
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "TextSelection")) + "(baseOffset: " + dart.str(this.baseOffset) + ", extentOffset: " + dart.str(this.extentOffset) + ", affinity: " + dart.str(this.affinity) + ", isDirectional: " + dart.str(this.isDirectional) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      return text_editing.TextSelection.is(other) && other.baseOffset == this.baseOffset && other.extentOffset == this.extentOffset && dart.equals(other.affinity, this.affinity) && dart.equals(other.isDirectional, this.isDirectional);
    }
    get hashCode() {
      return ui.hashValues(dart.hashCode(this.baseOffset), dart.hashCode(this.extentOffset), dart.hashCode(this.affinity), dart.hashCode(this.isDirectional));
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1;
      let baseOffset = opts && 'baseOffset' in opts ? opts.baseOffset : null;
      let extentOffset = opts && 'extentOffset' in opts ? opts.extentOffset : null;
      let affinity = opts && 'affinity' in opts ? opts.affinity : null;
      let isDirectional = opts && 'isDirectional' in opts ? opts.isDirectional : null;
      return new text_editing.TextSelection.new({baseOffset: (t0 = baseOffset, t0 == null ? this.baseOffset : t0), extentOffset: (t0$ = extentOffset, t0$ == null ? this.extentOffset : t0$), affinity: (t0$0 = affinity, t0$0 == null ? this.affinity : t0$0), isDirectional: (t0$1 = isDirectional, t0$1 == null ? this.isDirectional : t0$1)});
    }
  };
  (text_editing.TextSelection.new = function(opts) {
    let baseOffset = opts && 'baseOffset' in opts ? opts.baseOffset : null;
    if (baseOffset == null) dart.nullFailed(L0, 19, 19, "baseOffset");
    let extentOffset = opts && 'extentOffset' in opts ? opts.extentOffset : null;
    if (extentOffset == null) dart.nullFailed(L0, 20, 19, "extentOffset");
    let affinity = opts && 'affinity' in opts ? opts.affinity : C0 || CT.C0;
    if (affinity == null) dart.nullFailed(L0, 21, 10, "affinity");
    let isDirectional = opts && 'isDirectional' in opts ? opts.isDirectional : false;
    if (isDirectional == null) dart.nullFailed(L0, 22, 10, "isDirectional");
    this[baseOffset$] = baseOffset;
    this[extentOffset$] = extentOffset;
    this[affinity$] = affinity;
    this[isDirectional$] = isDirectional;
    text_editing.TextSelection.__proto__.new.call(this, {start: dart.notNull(baseOffset) < dart.notNull(extentOffset) ? baseOffset : extentOffset, end: dart.notNull(baseOffset) < dart.notNull(extentOffset) ? extentOffset : baseOffset});
    ;
  }).prototype = text_editing.TextSelection.prototype;
  (text_editing.TextSelection.collapsed = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    if (offset == null) dart.nullFailed(L0, 36, 18, "offset");
    let affinity = opts && 'affinity' in opts ? opts.affinity : C0 || CT.C0;
    if (affinity == null) dart.nullFailed(L0, 37, 10, "affinity");
    this[affinity$] = affinity;
    this[baseOffset$] = offset;
    this[extentOffset$] = offset;
    this[isDirectional$] = false;
    text_editing.TextSelection.__proto__.collapsed.call(this, offset);
    ;
  }).prototype = text_editing.TextSelection.prototype;
  (text_editing.TextSelection.fromPosition = function(position) {
    if (position == null) dart.nullFailed(L0, 48, 43, "position");
    this[baseOffset$] = position.offset;
    this[extentOffset$] = position.offset;
    this[affinity$] = position.affinity;
    this[isDirectional$] = false;
    text_editing.TextSelection.__proto__.collapsed.call(this, position.offset);
    ;
  }).prototype = text_editing.TextSelection.prototype;
  dart.addTypeTests(text_editing.TextSelection);
  dart.addTypeCaches(text_editing.TextSelection);
  dart.setMethodSignature(text_editing.TextSelection, () => ({
    __proto__: dart.getMethods(text_editing.TextSelection.__proto__),
    copyWith: dart.fnType(text_editing.TextSelection, [], {affinity: dart.nullable(ui.TextAffinity), baseOffset: dart.nullable(core.int), extentOffset: dart.nullable(core.int), isDirectional: dart.nullable(core.bool)}, {})
  }));
  dart.setGetterSignature(text_editing.TextSelection, () => ({
    __proto__: dart.getGetters(text_editing.TextSelection.__proto__),
    base: ui.TextPosition,
    extent: ui.TextPosition
  }));
  dart.setLibraryUri(text_editing.TextSelection, L1);
  dart.setFieldSignature(text_editing.TextSelection, () => ({
    __proto__: dart.getFields(text_editing.TextSelection.__proto__),
    baseOffset: dart.finalFieldType(core.int),
    extentOffset: dart.finalFieldType(core.int),
    affinity: dart.finalFieldType(ui.TextAffinity),
    isDirectional: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(text_editing.TextSelection, ['toString', '_equals']);
  dart.defineExtensionAccessors(text_editing.TextSelection, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/services/text_editing.dart", {
    "package:flutter/src/services/text_editing.dart": text_editing
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_editing.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyDY;;;;;;IASA;;;;;;IAKS;;;;;;IAQR;;;;;;;AAKc,8CAAqB,2BAAsB;IAAS;;AASlD,8CAAqB,6BAAwB;IAAS;;AAI/E,YAA8J,UAApJ,yBAAkB,MAAM,oBAAiB,2BAAc,mBAAU,8BAAiB,qBAAY,0BAAa,iBAAQ,+BAAkB,sBAAa;IAC9J;;UAGwB;AACtB,UAAI,AAAU,SAAM,KAAK,EACvB,MAAO;AACT,YAAa,AAIT,+BAJG,KAAK,KACL,AAAM,AAAW,KAAZ,eAAe,mBACpB,AAAM,AAAa,KAAd,iBAAiB,qBACP,YAAf,AAAM,KAAD,WAAa,kBACE,YAApB,AAAM,KAAD,gBAAkB;IAChC;;AAGoB,2BACP,cAAX,kBACa,cAAb,oBACS,cAAT,gBACc,cAAd;IACD;;;UAKM;UACA;UACS;UACR;AAEN,YAAO,kDACkB,KAAX,UAAU,QAAV,OAAmB,sCACJ,MAAb,YAAY,SAAZ,OAAqB,qCAChB,OAAT,QAAQ,UAAR,OAAiB,uCACE,OAAd,aAAa,UAAb,OAAsB;IAEzC;;;QAnHgB;;QACA;;QACT;;QACA;;IAHS;IACA;IACT;IACA;AACF,gEACoB,aAAX,UAAU,iBAAG,YAAY,IAAG,UAAU,GAAG,YAAY,OAC5C,aAAX,UAAU,iBAAG,YAAY,IAAG,YAAY,GAAG,UAAU;;EAC3D;;QAUS;;QACR;;;IACS,oBAAE,MAAM;IACN,sBAAE,MAAM;IACP,uBAAE;AACV,8DAAU,MAAM;;EAAC;;QAOY;IACzB,oBAAE,AAAS,QAAD;IACR,sBAAE,AAAS,QAAD;IACd,kBAAE,AAAS,QAAD;IACL,uBAAE;AACV,8DAAU,AAAS,QAAD;;EAAQ","file":"../../../../../../../../../../packages/flutter/src/services/text_editing.dart.lib.js"}');
  // Exports:
  return {
    src__services__text_editing: text_editing
  };
}));

//# sourceMappingURL=text_editing.dart.lib.js.map
