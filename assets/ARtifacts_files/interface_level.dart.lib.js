define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/widgets/widget_span.dart'], (function load__packages__flutter__src__cupertino__interface_level_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__widgets__widget_span$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  var interface_level = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var CupertinoUserInterfaceLevelDataL = () => (CupertinoUserInterfaceLevelDataL = dart.constFn(dart.legacy(interface_level.CupertinoUserInterfaceLevelData)))();
  var EnumPropertyOfCupertinoUserInterfaceLevelData = () => (EnumPropertyOfCupertinoUserInterfaceLevelData = dart.constFn(diagnostics.EnumProperty$(interface_level.CupertinoUserInterfaceLevelData)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/cupertino/interface_level.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/cupertino/interface_level.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: interface_level.CupertinoUserInterfaceLevelData.prototype,
        [_name$]: "CupertinoUserInterfaceLevelData.base",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: interface_level.CupertinoUserInterfaceLevelData.prototype,
        [_name$]: "CupertinoUserInterfaceLevelData.elevated",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], CupertinoUserInterfaceLevelDataL());
    }
  }, false);
  var _name$ = dart.privateName(interface_level, "_name");
  var C0;
  var C1;
  var C2;
  interface_level.CupertinoUserInterfaceLevelData = class CupertinoUserInterfaceLevelData extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (interface_level.CupertinoUserInterfaceLevelData.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 15, 6, "index");
    if (_name == null) dart.nullFailed(L0, 15, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = interface_level.CupertinoUserInterfaceLevelData.prototype;
  dart.addTypeTests(interface_level.CupertinoUserInterfaceLevelData);
  dart.addTypeCaches(interface_level.CupertinoUserInterfaceLevelData);
  dart.setLibraryUri(interface_level.CupertinoUserInterfaceLevelData, L1);
  dart.setFieldSignature(interface_level.CupertinoUserInterfaceLevelData, () => ({
    __proto__: dart.getFields(interface_level.CupertinoUserInterfaceLevelData.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(interface_level.CupertinoUserInterfaceLevelData, ['toString']);
  interface_level.CupertinoUserInterfaceLevelData.base = C0 || CT.C0;
  interface_level.CupertinoUserInterfaceLevelData.elevated = C1 || CT.C1;
  interface_level.CupertinoUserInterfaceLevelData.values = C2 || CT.C2;
  var _data = dart.privateName(interface_level, "_data");
  var _data$ = dart.privateName(interface_level, "CupertinoUserInterfaceLevel._data");
  interface_level.CupertinoUserInterfaceLevel = class CupertinoUserInterfaceLevel extends framework.InheritedWidget {
    get [_data]() {
      return this[_data$];
    }
    set [_data](value) {
      super[_data] = value;
    }
    updateShouldNotify(oldWidget) {
      interface_level.CupertinoUserInterfaceLevel.as(oldWidget);
      if (oldWidget == null) dart.nullFailed(L0, 52, 55, "oldWidget");
      return !dart.equals(oldWidget[_data], this[_data]);
    }
    static of(context) {
      if (context == null) dart.nullFailed(L0, 65, 58, "context");
      if (!(context != null)) dart.assertFailed(null, L0, 66, 12, "context != null");
      let query = context.dependOnInheritedWidgetOfExactType(interface_level.CupertinoUserInterfaceLevel);
      if (query != null) return query[_data];
      dart.throw(assertions.FlutterError.new("CupertinoUserInterfaceLevel.of() called with a context that does not contain a CupertinoUserInterfaceLevel.\n" + "No CupertinoUserInterfaceLevel ancestor could be found starting from the context that was passed " + "to CupertinoUserInterfaceLevel.of(). This can happen because you do not have a WidgetsApp or " + "MaterialApp widget (those widgets introduce a CupertinoUserInterfaceLevel), or it can happen " + "if the context you use comes from a widget above those widgets.\n" + "The context used was:\n" + "  " + dart.str(context)));
    }
    static maybeOf(context) {
      if (context == null) dart.nullFailed(L0, 94, 64, "context");
      if (!(context != null)) dart.assertFailed(null, L0, 95, 12, "context != null");
      let query = context.dependOnInheritedWidgetOfExactType(interface_level.CupertinoUserInterfaceLevel);
      if (query != null) return query[_data];
      return null;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 103, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfCupertinoUserInterfaceLevelData()).new("user interface level", this[_data]));
    }
  };
  (interface_level.CupertinoUserInterfaceLevel.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let data = opts && 'data' in opts ? opts.data : null;
    if (data == null) dart.nullFailed(L0, 43, 46, "data");
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L0, 44, 21, "child");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    if (!(data != null)) dart.assertFailed(null, L0, 45, 15, "data != null");
    this[_data$] = data;
    interface_level.CupertinoUserInterfaceLevel.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = interface_level.CupertinoUserInterfaceLevel.prototype;
  dart.addTypeTests(interface_level.CupertinoUserInterfaceLevel);
  dart.addTypeCaches(interface_level.CupertinoUserInterfaceLevel);
  dart.setMethodSignature(interface_level.CupertinoUserInterfaceLevel, () => ({
    __proto__: dart.getMethods(interface_level.CupertinoUserInterfaceLevel.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(interface_level.CupertinoUserInterfaceLevel, L1);
  dart.setFieldSignature(interface_level.CupertinoUserInterfaceLevel, () => ({
    __proto__: dart.getFields(interface_level.CupertinoUserInterfaceLevel.__proto__),
    [_data]: dart.finalFieldType(interface_level.CupertinoUserInterfaceLevelData)
  }));
  dart.trackLibraries("packages/flutter/src/cupertino/interface_level.dart", {
    "package:flutter/src/cupertino/interface_level.dart": interface_level
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["interface_level.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoBA;;;QANK;;;;;EAML;;;;;;;;;;;;;;;;IA4BwC;;;;;;;qDAGc;;AAAc,YAAgB,cAAhB,AAAU,SAAD,SAAU;IAAK;;UAanC;AACrD,YAAO,AAAQ,OAAD,IAAI;AACiB,kBAAQ,AAAQ,OAAD;AAClD,UAAI,KAAK,IAAI,MACX,MAAO,AAAM,MAAD;AASb,MARD,WAAM,4BAAY,AAChB,kHACA,sGACA,kGACA,kGACA,sEACA,4BACA,gBAAI,OAAO;IAEf;;UAe6D;AAC3D,YAAO,AAAQ,OAAD,IAAI;AACiB,kBAAQ,AAAQ,OAAD;AAClD,UAAI,KAAK,IAAI,MACX,MAAO,AAAM,MAAD;AACd,YAAO;IACT;;UAGqD;AACd,MAA/B,0BAAoB,UAAU;AACwD,MAA5F,AAAW,UAAD,KAAK,0DAA8C,wBAAwB;IACvF;;;QAhEO;QACoC;;QACzB;;;UACN,AAAK,IAAD,IAAI;IACV,eAAE,IAAI;AACZ,+EAAW,GAAG,SAAS,KAAK;;EAAC","file":"../../../../../../../../../../packages/flutter/src/cupertino/interface_level.dart.lib.js"}');
  // Exports:
  return {
    src__cupertino__interface_level: interface_level
  };
}));

//# sourceMappingURL=interface_level.dart.lib.js.map
