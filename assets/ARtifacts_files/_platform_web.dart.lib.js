define(['dart_sdk'], (function load__packages__flutter__src__foundation___platform_web_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var _platform_web = Object.create(dart.library);
  var platform = Object.create(dart.library);
  var $toLowerCase = dartx.toLowerCase;
  var $startsWith = dartx.startsWith;
  var $contains = dartx.contains;
  dart._checkModuleNullSafetyMode(false);
  var TargetPlatformL = () => (TargetPlatformL = dart.constFn(dart.legacy(platform.TargetPlatform)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/foundation/platform.dart";
  var L1 = "package:flutter/src/foundation/platform.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.android",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.fuchsia",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.iOS",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.linux",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.macOS",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.windows",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], TargetPlatformL());
    }
  }, false);
  _platform_web._browserPlatform = function _browserPlatform() {
    let t0, t0$;
    let navigatorPlatform = (t0$ = (t0 = html.window.navigator.platform, t0 == null ? null : t0[$toLowerCase]()), t0$ == null ? "" : t0$);
    if (navigatorPlatform[$startsWith]("mac")) {
      return platform.TargetPlatform.macOS;
    }
    if (navigatorPlatform[$startsWith]("win")) {
      return platform.TargetPlatform.windows;
    }
    if (navigatorPlatform[$contains]("iphone") || navigatorPlatform[$contains]("ipad") || navigatorPlatform[$contains]("ipod")) {
      return platform.TargetPlatform.iOS;
    }
    if (navigatorPlatform[$contains]("android")) {
      return platform.TargetPlatform.android;
    }
    if (dart.test(html.window.matchMedia("only screen and (pointer: fine)").matches)) {
      return platform.TargetPlatform.linux;
    }
    return platform.TargetPlatform.android;
  };
  dart.copyProperties(_platform_web, {
    get defaultTargetPlatform() {
      let result = _platform_web._browserPlatform();
      if (platform.debugDefaultTargetPlatformOverride != null) result = dart.nullCheck(platform.debugDefaultTargetPlatformOverride);
      return result;
    }
  });
  var _name$ = dart.privateName(platform, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  platform.TargetPlatform = class TargetPlatform extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (platform.TargetPlatform.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 44, 6, "index");
    if (_name == null) dart.nullFailed(L0, 44, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = platform.TargetPlatform.prototype;
  dart.addTypeTests(platform.TargetPlatform);
  dart.addTypeCaches(platform.TargetPlatform);
  dart.setLibraryUri(platform.TargetPlatform, L1);
  dart.setFieldSignature(platform.TargetPlatform, () => ({
    __proto__: dart.getFields(platform.TargetPlatform.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(platform.TargetPlatform, ['toString']);
  platform.TargetPlatform.android = C0 || CT.C0;
  platform.TargetPlatform.fuchsia = C1 || CT.C1;
  platform.TargetPlatform.iOS = C2 || CT.C2;
  platform.TargetPlatform.linux = C3 || CT.C3;
  platform.TargetPlatform.macOS = C4 || CT.C4;
  platform.TargetPlatform.windows = C5 || CT.C5;
  platform.TargetPlatform.values = C6 || CT.C6;
  dart.copyProperties(platform, {
    get defaultTargetPlatform() {
      return _platform_web.defaultTargetPlatform;
    }
  });
  dart.defineLazy(platform, {
    /*platform.debugDefaultTargetPlatformOverride*/get debugDefaultTargetPlatformOverride() {
      return null;
    },
    set debugDefaultTargetPlatformOverride(_) {}
  }, false);
  dart.trackLibraries("packages/flutter/src/foundation/_platform_web.dart", {
    "package:flutter/src/foundation/_platform_web.dart": _platform_web,
    "package:flutter/src/foundation/platform.dart": platform
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["_platform_web.dart","platform.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmBe,6BAAkE,YAAzC,AAAO,AAAU,6CAAA,OAAU,4BAAV,OAA2B;AAClF,QAAI,AAAkB,iBAAD,cAAY;AAC/B,YAA+B;;AAEjC,QAAI,AAAkB,iBAAD,cAAY;AAC/B,YAA+B;;AAEjC,QAAI,AAAkB,iBAAD,YAAU,aAC3B,AAAkB,iBAAD,YAAU,WAC3B,AAAkB,iBAAD,YAAU;AAC7B,YAA+B;;AAEjC,QAAI,AAAkB,iBAAD,YAAU;AAC7B,YAA+B;;AAOjC,kBAAS,AAAO,AAA8C,uBAAnC;AACzB,YAA+B;;AAEjC,UAA+B;EACjC;;;AA/B0B,mBAAS;AACjC,UAAa,+CAAsC,MACjD,AAAqD,SAAD,eAAlC;AACpB,YAAO,OAAM;IACf;;;;;;;;;;;;;IC6CA;;;QAlBK;;;;;EAkBL;;;;;;;;;;;;;;;;;;;AAvB4C,YAAU;IAAqB;;;MA4C3D,2CAAkC","file":"../../../../../../../../../../packages/flutter/src/foundation/_platform_web.dart.lib.js"}');
  // Exports:
  return {
    src__foundation___platform_web: _platform_web,
    src__foundation__platform: platform
  };
}));

//# sourceMappingURL=_platform_web.dart.lib.js.map
