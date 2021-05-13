define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__widgets__icon_data_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var icon_data = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $toRadixString = dartx.toRadixString;
  var $toUpperCase = dartx.toUpperCase;
  var $padLeft = dartx.padLeft;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(false);
  var IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/icon_data.dart";
  var L1 = "package:flutter/src/widgets/icon_data.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: diagnostics.DiagnosticsTreeStyle.prototype,
        [_name]: "DiagnosticsTreeStyle.singleLine",
        index: 8
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: diagnostics.DiagnosticLevel.prototype,
        [_name]: "DiagnosticLevel.info",
        index: 3
      });
    }
  }, false);
  var codePoint$ = dart.privateName(icon_data, "IconData.codePoint");
  var fontFamily$ = dart.privateName(icon_data, "IconData.fontFamily");
  var fontPackage$ = dart.privateName(icon_data, "IconData.fontPackage");
  var matchTextDirection$ = dart.privateName(icon_data, "IconData.matchTextDirection");
  icon_data.IconData = class IconData extends core.Object {
    get codePoint() {
      return this[codePoint$];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get fontFamily() {
      return this[fontFamily$];
    }
    set fontFamily(value) {
      super.fontFamily = value;
    }
    get fontPackage() {
      return this[fontPackage$];
    }
    set fontPackage(value) {
      super.fontPackage = value;
    }
    get matchTextDirection() {
      return this[matchTextDirection$];
    }
    set matchTextDirection(value) {
      super.matchTextDirection = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return icon_data.IconData.is(other) && other.codePoint == this.codePoint && other.fontFamily == this.fontFamily && other.fontPackage == this.fontPackage && dart.equals(other.matchTextDirection, this.matchTextDirection);
    }
    get hashCode() {
      return ui.hashValues(this.codePoint, this.fontFamily, this.fontPackage, this.matchTextDirection);
    }
    toString() {
      return "IconData(U+" + this.codePoint[$toRadixString](16)[$toUpperCase]()[$padLeft](5, "0") + ")";
    }
  };
  (icon_data.IconData.new = function(codePoint, opts) {
    if (codePoint == null) dart.nullFailed(L0, 23, 10, "codePoint");
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let fontPackage = opts && 'fontPackage' in opts ? opts.fontPackage : null;
    let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
    if (matchTextDirection == null) dart.nullFailed(L0, 26, 10, "matchTextDirection");
    this[codePoint$] = codePoint;
    this[fontFamily$] = fontFamily;
    this[fontPackage$] = fontPackage;
    this[matchTextDirection$] = matchTextDirection;
    ;
  }).prototype = icon_data.IconData.prototype;
  dart.addTypeTests(icon_data.IconData);
  dart.addTypeCaches(icon_data.IconData);
  dart.setLibraryUri(icon_data.IconData, L1);
  dart.setFieldSignature(icon_data.IconData, () => ({
    __proto__: dart.getFields(icon_data.IconData.__proto__),
    codePoint: dart.finalFieldType(core.int),
    fontFamily: dart.finalFieldType(dart.nullable(core.String)),
    fontPackage: dart.finalFieldType(dart.nullable(core.String)),
    matchTextDirection: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(icon_data.IconData, ['_equals', 'toString']);
  dart.defineExtensionAccessors(icon_data.IconData, ['hashCode']);
  var _name = dart.privateName(diagnostics, "_name");
  var C0;
  var C1;
  icon_data.IconDataProperty = class IconDataProperty extends diagnostics.DiagnosticsProperty$(icon_data.IconData) {
    toJsonMap(delegate) {
      if (delegate == null) dart.nullFailed(L0, 93, 67, "delegate");
      let json = super.toJsonMap(delegate);
      if (this.value != null) {
        json[$_set]("valueProperties", new (IdentityMapOfString$Object()).from(["codePoint", dart.nullCheck(this.value).codePoint]));
      }
      return json;
    }
  };
  (icon_data.IconDataProperty.new = function(name, value, opts) {
    if (name == null) dart.nullFailed(L0, 76, 12, "name");
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    if (showName == null) dart.nullFailed(L0, 79, 10, "showName");
    let style = opts && 'style' in opts ? opts.style : C0 || CT.C0;
    if (style == null) dart.nullFailed(L0, 80, 26, "style");
    let level = opts && 'level' in opts ? opts.level : C1 || CT.C1;
    if (level == null) dart.nullFailed(L0, 81, 21, "level");
    if (!(showName != null)) dart.assertFailed(null, L0, 82, 15, "showName != null");
    if (!(style != null)) dart.assertFailed(null, L0, 83, 15, "style != null");
    if (!(level != null)) dart.assertFailed(null, L0, 84, 15, "level != null");
    icon_data.IconDataProperty.__proto__.new.call(this, name, value, {showName: showName, ifNull: ifNull, style: style, level: level});
    ;
  }).prototype = icon_data.IconDataProperty.prototype;
  dart.addTypeTests(icon_data.IconDataProperty);
  dart.addTypeCaches(icon_data.IconDataProperty);
  dart.setLibraryUri(icon_data.IconDataProperty, L1);
  dart.trackLibraries("packages/flutter/src/widgets/icon_data.dart", {
    "package:flutter/src/widgets/icon_data.dart": icon_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["icon_data.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA6BY;;;;;;IAGI;;;;;;IAUA;;;;;;IAOH;;;;;;;UAGa;AACtB,uBAAU,iBAAN,KAAK,GAAgB,qBACvB,MAAO;AACT,YAAa,AAIT,uBAJG,KAAK,KACL,AAAM,AAAU,KAAX,cAAc,kBACnB,AAAM,AAAW,KAAZ,eAAe,mBACpB,AAAM,AAAY,KAAb,gBAAgB,oBACI,YAAzB,AAAM,KAAD,qBAAuB;IACrC;;AAGoB,2BAAW,gBAAW,iBAAY,kBAAa;IAAmB;;AAGjE,YAAA,AAA0E,iBAA5D,AAAU,AAAkB,AAAc,+BAAlB,8BAA0B,GAAG,OAAK;IAAE;;;QA5CxF;QACA;QACA;QACA;;IAHA;IACA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;UAkE8D;AACnC,iBAAa,gBAAU,QAAQ;AAC1D,UAAI,cAAS;AAGV,QAFD,AAAI,IAAA,QAAC,mBAAqC,yCACxC,aAAkB,AAAE,eAAP;;AAGjB,YAAO,KAAI;IACb;;6CAzBS,MACG;QADH;QAEC;QACH;;QACgB;;QACL;;UACN,AAAS,QAAD,IAAI;UACZ,AAAM,KAAD,IAAI;UACT,AAAM,KAAD,IAAI;AAChB,wDAAM,IAAI,EAAE,KAAK,aACL,QAAQ,UACV,MAAM,SACP,KAAK,SACL,KAAK;;EACb","file":"../../../../../../../../../../packages/flutter/src/widgets/icon_data.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__icon_data: icon_data
  };
}));

//# sourceMappingURL=icon_data.dart.lib.js.map
