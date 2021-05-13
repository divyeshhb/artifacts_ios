define(['dart_sdk', 'packages/cloud_firestore_platform_interface/src/source.dart'], (function load__packages__cloud_firestore_platform_interface__src__get_options_dart(dart_sdk, packages__cloud_firestore_platform_interface__src__source$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const source = packages__cloud_firestore_platform_interface__src__source$46dart.src__source;
  var get_options = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L1 = "package:cloud_firestore_platform_interface/src/get_options.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/cloud_firestore_platform_interface-2.1.3/lib/src/get_options.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: source.Source.prototype,
        [_name]: "Source.serverAndCache",
        index: 0
      });
    }
  }, false);
  var _name = dart.privateName(source, "_name");
  var C0;
  var source$ = dart.privateName(get_options, "GetOptions.source");
  get_options.GetOptions = class GetOptions extends core.Object {
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
  };
  (get_options.GetOptions.new = function(opts) {
    let source = opts && 'source' in opts ? opts.source : C0 || CT.C0;
    this[source$] = source;
    if (!(source != null)) dart.assertFailed(null, L0, 36, 15, "source != null");
    ;
  }).prototype = get_options.GetOptions.prototype;
  dart.addTypeTests(get_options.GetOptions);
  dart.addTypeCaches(get_options.GetOptions);
  dart.setLibraryUri(get_options.GetOptions, L1);
  dart.setFieldSignature(get_options.GetOptions, () => ({
    __proto__: dart.getFields(get_options.GetOptions.__proto__),
    source: dart.finalFieldType(dart.legacy(source.Source))
  }));
  dart.trackLibraries("packages/cloud_firestore_platform_interface/src/get_options.dart", {
    "package:cloud_firestore_platform_interface/src/get_options.dart": get_options
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["get_options.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;IA8Be;;;;;;;;QAIN;;UACK,AAAO,MAAD,IAAI;;EAAK","file":"../../../../../../../../../../../packages/cloud_firestore_platform_interface/src/get_options.dart.lib.js"}');
  // Exports:
  return {
    src__get_options: get_options
  };
}));

//# sourceMappingURL=get_options.dart.lib.js.map
