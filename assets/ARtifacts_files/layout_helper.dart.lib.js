define(['dart_sdk'], (function load__packages__flutter__src__rendering__layout_helper_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var layout_helper = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L1 = "package:flutter/src/rendering/layout_helper.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/layout_helper.dart";
  layout_helper.ChildLayoutHelper = class ChildLayoutHelper extends core.Object {
    static dryLayoutChild(child, constrains) {
      if (child == null) dart.nullFailed(L0, 36, 40, "child");
      if (constrains == null) dart.nullFailed(L0, 36, 62, "constrains");
      return child.getDryLayout(constrains);
    }
    static layoutChild(child, constraints) {
      if (child == null) dart.nullFailed(L0, 53, 37, "child");
      if (constraints == null) dart.nullFailed(L0, 53, 59, "constraints");
      child.layout(constraints, {parentUsesSize: true});
      return child.size;
    }
  };
  (layout_helper.ChildLayoutHelper.__ = function() {
    ;
  }).prototype = layout_helper.ChildLayoutHelper.prototype;
  dart.addTypeTests(layout_helper.ChildLayoutHelper);
  dart.addTypeCaches(layout_helper.ChildLayoutHelper);
  dart.setLibraryUri(layout_helper.ChildLayoutHelper, L1);
  dart.trackLibraries("packages/flutter/src/rendering/layout_helper.dart", {
    "package:flutter/src/rendering/layout_helper.dart": layout_helper
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["layout_helper.dart"],"names":[],"mappings":";;;;;;;;;;;0BAmCuC,OAAsB;UAAtB;UAAsB;AACzD,YAAO,AAAM,MAAD,cAAc,UAAU;IACtC;uBAekC,OAAsB;UAAtB;UAAsB;AACP,MAA/C,AAAM,KAAD,QAAQ,WAAW,mBAAkB;AAC1C,YAAO,AAAM,MAAD;IACd;;;;EAnC2B","file":"../../../../../../../../../../packages/flutter/src/rendering/layout_helper.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__layout_helper: layout_helper
  };
}));

//# sourceMappingURL=layout_helper.dart.lib.js.map
