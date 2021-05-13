define(['dart_sdk'], (function load__packages__firebase__src__interop__js_interop_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const js_util = dart_sdk.js_util;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var js_interop = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var NoSuchMethodErrorL = () => (NoSuchMethodErrorL = dart.constFn(dart.legacy(core.NoSuchMethodError)))();
  const CT = Object.create(null);
  js_interop.dartifyDate = function dartifyDate(jsObject) {
    if (dart.test(js_util.hasProperty(jsObject, "toDateString"))) {
      try {
        let date = jsObject;
        return new core.DateTime.fromMillisecondsSinceEpoch(core.int.as(dart.dsend(date, 'getTime', [])));
      } catch (e) {
        let ex = dart.getThrown(e);
        if (NoSuchMethodErrorL().is(ex)) {
          return null;
        } else
          throw e;
      }
    }
    return null;
  };
  dart.trackLibraries("packages/firebase/src/interop/js_interop.dart", {
    "package:firebase/src/interop/js_interop.dart": js_interop
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["js_interop.dart"],"names":[],"mappings":";;;;;;;;;;gDAe4B;AAC1B,kBAAI,oBAAiB,QAAQ,EAAE;AAC7B;AACM,mBAAO,QAAQ;AACnB,cAAgB,0DAAgC,WAAL,IAAI;;;AAC/C;AAEA,gBAAO;;;;;AAGX,UAAO;EACT","file":"../../../../../../../../../../../../packages/firebase/src/interop/js_interop.dart.lib.js"}');
  // Exports:
  return {
    src__interop__js_interop: js_interop
  };
}));

//# sourceMappingURL=js_interop.dart.lib.js.map
