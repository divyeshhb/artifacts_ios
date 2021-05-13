define(['dart_sdk', 'packages/flutter/src/services/system_channels.dart'], (function load__packages__flutter__src__services__clipboard_dart(dart_sdk, packages__flutter__src__services__system_channels$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const system_channels = packages__flutter__src__services__system_channels$46dart.src__services__system_channels;
  var clipboard = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  var MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  var StringN = () => (StringN = dart.constFn(dart.nullable(core.String)))();
  var ClipboardDataN = () => (ClipboardDataN = dart.constFn(dart.nullable(clipboard.ClipboardData)))();
  const CT = Object.create(null);
  var L0 = "package:flutter/src/services/clipboard.dart";
  var L1 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/clipboard.dart";
  var text$ = dart.privateName(clipboard, "ClipboardData.text");
  clipboard.ClipboardData = class ClipboardData extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
  };
  (clipboard.ClipboardData.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    this[text$] = text;
    ;
  }).prototype = clipboard.ClipboardData.prototype;
  dart.addTypeTests(clipboard.ClipboardData);
  dart.addTypeCaches(clipboard.ClipboardData);
  dart.setLibraryUri(clipboard.ClipboardData, L0);
  dart.setFieldSignature(clipboard.ClipboardData, () => ({
    __proto__: dart.getFields(clipboard.ClipboardData.__proto__),
    text: dart.finalFieldType(dart.nullable(core.String))
  }));
  clipboard.Clipboard = class Clipboard extends core.Object {
    static setData(data) {
      if (data == null) dart.nullFailed(L1, 38, 45, "data");
      return async.async(dart.void, function* setData() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "Clipboard.setData", new (IdentityMapOfString$dynamic()).from(["text", data.text]));
      });
    }
    static getData(format) {
      if (format == null) dart.nullFailed(L1, 54, 48, "format");
      return async.async(ClipboardDataN(), function* getData() {
        let result = (yield system_channels.SystemChannels.platform.invokeMethod(MapOfString$dynamic(), "Clipboard.getData", format));
        if (result == null) return null;
        return new clipboard.ClipboardData.new({text: StringN().as(result[$_get]("text"))});
      });
    }
  };
  (clipboard.Clipboard.__ = function() {
    ;
  }).prototype = clipboard.Clipboard.prototype;
  dart.addTypeTests(clipboard.Clipboard);
  dart.addTypeCaches(clipboard.Clipboard);
  dart.setLibraryUri(clipboard.Clipboard, L0);
  dart.defineLazy(clipboard.Clipboard, {
    /*clipboard.Clipboard.kTextPlain*/get kTextPlain() {
      return "text/plain";
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/services/clipboard.dart", {
    "package:flutter/src/services/clipboard.dart": clipboard
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["clipboard.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;IAmBgB;;;;;;;;QAHa;;;EAAO;;;;;;;;;;UAqBQ;AAAf;AAMxB,QALD,MAAqB,AAAS,gEAC5B,qBACiB,0CACf,QAAQ,AAAK,IAAD;MAGlB;;;UAS6C;AAAR;AACP,sBAAS,MAAqB,AAAS,4EACjE,qBACA,MAAM;AAER,YAAI,AAAO,MAAD,IAAI,MACZ,MAAO;AACT,cAAO,wCAAmC,aAAf,AAAM,MAAA,QAAC;MACpC;;;;;EAlCa;;;;;MAOO,8BAAU","file":"../../../../../../../../../../packages/flutter/src/services/clipboard.dart.lib.js"}');
  // Exports:
  return {
    src__services__clipboard: clipboard
  };
}));

//# sourceMappingURL=clipboard.dart.lib.js.map
