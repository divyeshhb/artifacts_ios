define(['dart_sdk', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/widgets/widget_span.dart'], (function load__packages__flutter__src__widgets__icon_theme_data_dart(dart_sdk, packages__flutter__src__painting__colors$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__widgets__widget_span$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  var icon_theme_data = Object.create(dart.library);
  var $clamp = dartx.clamp;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L1 = "package:flutter/src/widgets/icon_theme_data.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/icon_theme_data.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    }
  }, false);
  var Color_value = dart.privateName(ui, "Color.value");
  var C0;
  var _opacity = dart.privateName(icon_theme_data, "_opacity");
  var color$ = dart.privateName(icon_theme_data, "IconThemeData.color");
  var _opacity$ = dart.privateName(icon_theme_data, "IconThemeData._opacity");
  var size$ = dart.privateName(icon_theme_data, "IconThemeData.size");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  icon_theme_data.IconThemeData = class IconThemeData extends Object_Diagnosticable$36 {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get [_opacity]() {
      return this[_opacity$];
    }
    set [_opacity](value) {
      super[_opacity] = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    copyWith(opts) {
      let t0, t0$, t0$0;
      let color = opts && 'color' in opts ? opts.color : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let size = opts && 'size' in opts ? opts.size : null;
      return new icon_theme_data.IconThemeData.new({color: (t0 = color, t0 == null ? this.color : t0), opacity: (t0$ = opacity, t0$ == null ? this.opacity : t0$), size: (t0$0 = size, t0$0 == null ? this.size : t0$0)});
    }
    merge(other) {
      if (other == null) return this;
      return this.copyWith({color: other.color, opacity: other.opacity, size: other.size});
    }
    resolve(context) {
      if (context == null) dart.nullFailed(L0, 76, 38, "context");
      return this;
    }
    get isConcrete() {
      return this.color != null && this.opacity != null && this.size != null;
    }
    get opacity() {
      let t0;
      t0 = this[_opacity];
      return t0 == null ? null : t0[$clamp](0.0, 1.0);
    }
    static lerp(a, b, t) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      if (t == null) dart.nullFailed(L0, 94, 72, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 95, 12, "t != null");
      return new icon_theme_data.IconThemeData.new({color: ui.Color.lerp((t0 = a, t0 == null ? null : t0.color), (t0$ = b, t0$ == null ? null : t0$.color), t), opacity: ui.lerpDouble((t0$0 = a, t0$0 == null ? null : t0$0.opacity), (t0$1 = b, t0$1 == null ? null : t0$1.opacity), t), size: ui.lerpDouble((t0$2 = a, t0$2 == null ? null : t0$2.size), (t0$3 = b, t0$3 == null ? null : t0$3.size), t)});
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return icon_theme_data.IconThemeData.is(other) && dart.equals(other.color, this.color) && other.opacity == this.opacity && other.size == this.size;
    }
    get hashCode() {
      return ui.hashValues(this.color, this.opacity, this.size);
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 117, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new colors.ColorProperty.new("color", this.color, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("opacity", this.opacity, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("size", this.size, {defaultValue: null}));
    }
  };
  (icon_theme_data.IconThemeData.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let size = opts && 'size' in opts ? opts.size : null;
    this[color$] = color;
    this[size$] = size;
    this[_opacity$] = opacity;
    ;
  }).prototype = icon_theme_data.IconThemeData.prototype;
  (icon_theme_data.IconThemeData.fallback = function() {
    this[color$] = C0 || CT.C0;
    this[_opacity$] = 1.0;
    this[size$] = 24.0;
    ;
  }).prototype = icon_theme_data.IconThemeData.prototype;
  dart.addTypeTests(icon_theme_data.IconThemeData);
  dart.addTypeCaches(icon_theme_data.IconThemeData);
  dart.setMethodSignature(icon_theme_data.IconThemeData, () => ({
    __proto__: dart.getMethods(icon_theme_data.IconThemeData.__proto__),
    copyWith: dart.fnType(icon_theme_data.IconThemeData, [], {color: dart.nullable(ui.Color), opacity: dart.nullable(core.double), size: dart.nullable(core.double)}, {}),
    merge: dart.fnType(icon_theme_data.IconThemeData, [dart.nullable(icon_theme_data.IconThemeData)]),
    resolve: dart.fnType(icon_theme_data.IconThemeData, [framework.BuildContext])
  }));
  dart.setGetterSignature(icon_theme_data.IconThemeData, () => ({
    __proto__: dart.getGetters(icon_theme_data.IconThemeData.__proto__),
    isConcrete: core.bool,
    opacity: dart.nullable(core.double)
  }));
  dart.setLibraryUri(icon_theme_data.IconThemeData, L1);
  dart.setFieldSignature(icon_theme_data.IconThemeData, () => ({
    __proto__: dart.getFields(icon_theme_data.IconThemeData.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    [_opacity]: dart.finalFieldType(dart.nullable(core.double)),
    size: dart.finalFieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(icon_theme_data.IconThemeData, ['_equals']);
  dart.defineExtensionAccessors(icon_theme_data.IconThemeData, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/widgets/icon_theme_data.dart", {
    "package:flutter/src/widgets/icon_theme_data.dart": icon_theme_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["icon_theme_data.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiFe;;;;;;IAIC;;;;;;IAGA;;;;;;;;UAlDkB;UAAe;UAAiB;AAC9D,YAAO,gDACQ,KAAN,KAAK,QAAL,OAAc,4BACJ,MAAR,OAAO,SAAP,OAAgB,4BACd,OAAL,IAAI,UAAJ,OAAa;IAEvB;UAKmC;AACjC,UAAI,AAAM,KAAD,IAAI,MACX,MAAO;AACT,YAAO,uBACE,AAAM,KAAD,iBACH,AAAM,KAAD,gBACR,AAAM,KAAD;IAEf;;UAkBmC;AAAY;IAAI;;AAG5B,YAAA,AAAiC,eAAxB,QAAQ,gBAAW,QAAQ,aAAQ;IAAI;;;AAMhD;iCAAU,WAAM,KAAK;IAAI;gBASP,GAAkB,GAAU;;;AACnE,YAAO,AAAE,CAAD,IAAI;AACZ,YAAO,+CACQ,oBAAK,CAAC,eAAD,OAAG,kBAAO,CAAC,gBAAD,OAAG,YAAO,CAAC,YAC9B,sBAAc,CAAC,iBAAD,OAAG,uBAAS,CAAC,iBAAD,OAAG,eAAS,CAAC,SAC1C,sBAAc,CAAC,iBAAD,OAAG,oBAAM,CAAC,iBAAD,OAAG,YAAM,CAAC;IAE3C;;UAGwB;AACtB,uBAAU,iBAAN,KAAK,GAAgB,qBACvB,MAAO;AACT,YAAa,AAGT,kCAHG,KAAK,KACO,YAAZ,AAAM,KAAD,QAAU,eACf,AAAM,AAAQ,KAAT,YAAY,gBACjB,AAAM,AAAK,KAAN,SAAS;IACvB;;AAGoB,2BAAW,YAAO,cAAS;IAAK;;UAGC;AACd,MAA/B,0BAAoB,UAAU;AAC6B,MAAjE,AAAW,UAAD,KAAK,6BAAc,SAAS,2BAAqB;AACW,MAAtE,AAAW,UAAD,KAAK,mCAAe,WAAW,6BAAuB;AACA,MAAhE,AAAW,UAAD,KAAK,mCAAe,QAAQ,0BAAoB;IAC5D;;;QA/F0B;QAAe;QAAc;IAA7B;IAA6B;IAAkB,kBAAE,OAAO;;;;IAMxE;IACG,kBAAE;IACN,cAAE;;EAAI","file":"../../../../../../../../../../packages/flutter/src/widgets/icon_theme_data.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__icon_theme_data: icon_theme_data
  };
}));

//# sourceMappingURL=icon_theme_data.dart.lib.js.map
