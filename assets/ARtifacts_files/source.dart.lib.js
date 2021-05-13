define(['dart_sdk', 'packages/cloud_firestore_platform_interface/src/source.dart'], (function load__packages__cloud_firestore_platform_interface__src__method_channel__utils__source_dart(dart_sdk, packages__cloud_firestore_platform_interface__src__source$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const source = packages__cloud_firestore_platform_interface__src__source$46dart.src__source;
  var source$ = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/cloud_firestore_platform_interface-2.1.3/lib/src/method_channel/utils/source.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: source.Source.prototype,
        [_name]: "Source.server",
        index: 1
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: source.Source.prototype,
        [_name]: "Source.cache",
        index: 2
      });
    }
  }, false);
  var _name = dart.privateName(source, "_name");
  var C0;
  var C1;
  source$.getSourceString = function getSourceString(source) {
    if (!(source != null)) dart.assertFailed(null, L0, 9, 10, "source != null");
    switch (source) {
      case C0 || CT.C0:
      {
        return "server";
      }
      case C1 || CT.C1:
      {
        return "cache";
      }
      default:
      {
        return "default";
      }
    }
  };
  dart.trackLibraries("packages/cloud_firestore_platform_interface/src/method_channel/utils/source.dart", {
    "package:cloud_firestore_platform_interface/src/method_channel/utils/source.dart": source$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["source.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;qDAO8B;AAC5B,UAAO,AAAO,MAAD,IAAI;AACjB,YAAQ,MAAM;;;AAEV,cAAO;;;;AAEP,cAAO;;;;AAEP,cAAO;;;EAEb","file":"../../../../../../../../../../../../../packages/cloud_firestore_platform_interface/src/method_channel/utils/source.dart.lib.js"}');
  // Exports:
  return {
    src__method_channel__utils__source: source$
  };
}));

//# sourceMappingURL=source.dart.lib.js.map
