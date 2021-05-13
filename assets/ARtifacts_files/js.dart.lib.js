define(['dart_sdk'], (function load__packages__firebase__src__js_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var js = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "package:firebase/src/js.dart";
  const _is_JsObjectWrapper_default = Symbol('_is_JsObjectWrapper_default');
  var jsObject$ = dart.privateName(js, "JsObjectWrapper.jsObject");
  js.JsObjectWrapper$ = dart.generic(T => {
    class JsObjectWrapper extends core.Object {
      get jsObject() {
        return this[jsObject$];
      }
      set jsObject(value) {
        super.jsObject = value;
      }
    }
    (JsObjectWrapper.fromJsObject = function(jsObject) {
      this[jsObject$] = jsObject;
      ;
    }).prototype = JsObjectWrapper.prototype;
    dart.addTypeTests(JsObjectWrapper);
    JsObjectWrapper.prototype[_is_JsObjectWrapper_default] = true;
    dart.addTypeCaches(JsObjectWrapper);
    dart.setLibraryUri(JsObjectWrapper, L0);
    dart.setFieldSignature(JsObjectWrapper, () => ({
      __proto__: dart.getFields(JsObjectWrapper.__proto__),
      jsObject: dart.finalFieldType(dart.legacy(T))
    }));
    return JsObjectWrapper;
  });
  js.JsObjectWrapper = js.JsObjectWrapper$();
  dart.addTypeTests(js.JsObjectWrapper, _is_JsObjectWrapper_default);
  dart.trackLibraries("packages/firebase/src/js.dart", {
    "package:firebase/src/js.dart": js
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["js.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAIU;;;;;;;;MAG0B;;IAAS","file":"../../../../../../../../../../../packages/firebase/src/js.dart.lib.js"}');
  // Exports:
  return {
    src__js: js
  };
}));

//# sourceMappingURL=js.dart.lib.js.map
