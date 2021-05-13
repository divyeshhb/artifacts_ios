define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/widgets/icon_theme_data.dart'], (function load__packages__flutter__src__widgets__icon_theme_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__widgets__icon_theme_data$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const inherited_theme = packages__flutter__src__widgets__widget_span$46dart.src__widgets__inherited_theme;
  const icon_theme_data = packages__flutter__src__widgets__icon_theme_data$46dart.src__widgets__icon_theme_data;
  var icon_theme = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var BuildContextToIconTheme = () => (BuildContextToIconTheme = dart.constFn(dart.fnType(icon_theme.IconTheme, [framework.BuildContext])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/icon_theme.dart";
  var L1 = "package:flutter/src/widgets/icon_theme.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 11,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 11,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], _LocationL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 39,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/icon_theme.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], _LocationL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 37,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/icon_theme.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: icon_theme_data.IconThemeData.prototype,
        [IconThemeData_size]: 24,
        [IconThemeData__opacity]: 1,
        [IconThemeData_color]: C9 || CT.C9
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 22,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 34,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], _LocationL());
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 82,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/icon_theme.dart"
      });
    }
  }, false);
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C2;
  var C3;
  var C4;
  var C1;
  var C0;
  var C7;
  var C6;
  var C5;
  var IconThemeData_size = dart.privateName(icon_theme_data, "IconThemeData.size");
  var IconThemeData__opacity = dart.privateName(icon_theme_data, "IconThemeData._opacity");
  var Color_value = dart.privateName(ui, "Color.value");
  var C9;
  var IconThemeData_color = dart.privateName(icon_theme_data, "IconThemeData.color");
  var C8;
  var C12;
  var C13;
  var C11;
  var C10;
  var data$ = dart.privateName(icon_theme, "IconTheme.data");
  icon_theme.IconTheme = class IconTheme extends inherited_theme.InheritedTheme {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    static merge(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let data = opts && 'data' in opts ? opts.data : null;
      if (data == null) dart.nullFailed(L0, 34, 28, "data");
      let child = opts && 'child' in opts ? opts.child : null;
      if (child == null) dart.nullFailed(L0, 35, 21, "child");
      return new basic.Builder.new({builder: dart.fn(context => {
          if (context == null) dart.nullFailed(L0, 38, 30, "context");
          return new icon_theme.IconTheme.new({key: key, data: icon_theme.IconTheme._getInheritedIconThemeData(context).merge(data), child: child, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
        }, BuildContextToIconTheme()), $creationLocationd_0dea112b090073317d4: C5 || CT.C5});
    }
    static of(context) {
      let t0, t0$, t0$0;
      if (context == null) dart.nullFailed(L0, 61, 40, "context");
      let iconThemeData = icon_theme.IconTheme._getInheritedIconThemeData(context).resolve(context);
      return dart.test(iconThemeData.isConcrete) ? iconThemeData : iconThemeData.copyWith({size: (t0 = iconThemeData.size, t0 == null ? (C8 || CT.C8).size : t0), color: (t0$ = iconThemeData.color, t0$ == null ? (C8 || CT.C8).color : t0$), opacity: (t0$0 = iconThemeData.opacity, t0$0 == null ? (C8 || CT.C8).opacity : t0$0)});
    }
    static _getInheritedIconThemeData(context) {
      let t0, t0$;
      if (context == null) dart.nullFailed(L0, 72, 64, "context");
      let iconTheme = context.dependOnInheritedWidgetOfExactType(icon_theme.IconTheme);
      t0$ = (t0 = iconTheme, t0 == null ? null : t0.data);
      return t0$ == null ? C8 || CT.C8 : t0$;
    }
    updateShouldNotify(oldWidget) {
      icon_theme.IconTheme.as(oldWidget);
      if (oldWidget == null) dart.nullFailed(L0, 78, 37, "oldWidget");
      return !dart.equals(this.data, oldWidget.data);
    }
    wrap(context, child) {
      if (context == null) dart.nullFailed(L0, 81, 28, "context");
      if (child == null) dart.nullFailed(L0, 81, 44, "child");
      return new icon_theme.IconTheme.new({data: this.data, child: child, $creationLocationd_0dea112b090073317d4: C10 || CT.C10});
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 86, 56, "properties");
      super.debugFillProperties(properties);
      this.data.debugFillProperties(properties);
    }
  };
  (icon_theme.IconTheme.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let data = opts && 'data' in opts ? opts.data : null;
    if (data == null) dart.nullFailed(L0, 22, 19, "data");
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L0, 23, 21, "child");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[data$] = data;
    if (!(data != null)) dart.assertFailed(null, L0, 24, 15, "data != null");
    if (!(child != null)) dart.assertFailed(null, L0, 25, 15, "child != null");
    icon_theme.IconTheme.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = icon_theme.IconTheme.prototype;
  dart.addTypeTests(icon_theme.IconTheme);
  dart.addTypeCaches(icon_theme.IconTheme);
  dart.setMethodSignature(icon_theme.IconTheme, () => ({
    __proto__: dart.getMethods(icon_theme.IconTheme.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object)]),
    wrap: dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget])
  }));
  dart.setLibraryUri(icon_theme.IconTheme, L1);
  dart.setFieldSignature(icon_theme.IconTheme, () => ({
    __proto__: dart.getFields(icon_theme.IconTheme.__proto__),
    data: dart.finalFieldType(icon_theme_data.IconThemeData)
  }));
  dart.trackLibraries("packages/flutter/src/widgets/icon_theme.dart", {
    "package:flutter/src/widgets/icon_theme.dart": icon_theme
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["icon_theme.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgDsB;;;;;;;UAhBb;UACkB;;UACP;;AAEhB,YAAO,iCACI;cAAc;AACrB,gBAAO,oCACA,GAAG,QACF,AAAoC,gDAAT,OAAO,QAAQ,IAAI,UAC7C,KAAK;;IAIpB;cAeqC;;;AACf,0BAAgB,AAAoC,gDAAT,OAAO,UAAU,OAAO;AACvF,uBAAO,AAAc,aAAD,eAChB,aAAa,GACb,AAAc,aAAD,kBACY,KAAnB,AAAc,aAAD,aAAC,OAAuC,kCAChC,MAApB,AAAc,aAAD,eAAC,OAAwC,sCAC9B,OAAtB,AAAc,aAAD,kBAAC,OAA0C;IAEvE;sCAE6D;;;AAC1C,sBAAY,AAAQ,OAAD;AACpC,kBAAO,SAAS,eAAT,OAAW;oBAAX;IACT;;8BAGkC;;AAAc,YAAK,cAAL,WAAQ,AAAU,SAAD;IAAK;SAG7C,SAAgB;UAAhB;UAAgB;AACvC,YAAO,qCAAgB,kBAAa,KAAK;IAC3C;;UAGqD;AACd,MAA/B,0BAAoB,UAAU;AACA,MAApC,AAAK,8BAAoB,UAAU;IACrC;;;QApEO;QACS;;QACE;;;IADF;UAEJ,AAAK,IAAD,IAAI;UACR,AAAM,KAAD,IAAI;AAChB,wDAAW,GAAG,SAAS,KAAK;;EAAC","file":"../../../../../../../../../../packages/flutter/src/widgets/icon_theme.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__icon_theme: icon_theme
  };
}));

//# sourceMappingURL=icon_theme.dart.lib.js.map
