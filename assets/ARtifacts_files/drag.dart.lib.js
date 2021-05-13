define(['dart_sdk', 'packages/flutter/src/gestures/drag_details.dart'], (function load__packages__flutter__src__gestures__drag_dart(dart_sdk, packages__flutter__src__gestures__drag_details$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const drag_details = packages__flutter__src__gestures__drag_details$46dart.src__gestures__drag_details;
  var drag = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/gestures/drag.dart";
  var L1 = "package:flutter/src/gestures/drag.dart";
  drag.Drag = class Drag extends core.Object {
    update(details) {
      if (details == null) dart.nullFailed(L0, 17, 33, "details");
    }
    end(details) {
      if (details == null) dart.nullFailed(L0, 23, 27, "details");
    }
    cancel() {
    }
  };
  (drag.Drag.new = function() {
    ;
  }).prototype = drag.Drag.prototype;
  dart.addTypeTests(drag.Drag);
  dart.addTypeCaches(drag.Drag);
  dart.setMethodSignature(drag.Drag, () => ({
    __proto__: dart.getMethods(drag.Drag.__proto__),
    update: dart.fnType(dart.void, [drag_details.DragUpdateDetails]),
    end: dart.fnType(dart.void, [drag_details.DragEndDetails]),
    cancel: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(drag.Drag, L1);
  dart.trackLibraries("packages/flutter/src/gestures/drag.dart", {
    "package:flutter/src/gestures/drag.dart": drag
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["drag.dart"],"names":[],"mappings":";;;;;;;;;;;;;UAgBgC;IAAW;;UAMjB;IAAW;;IAMnB;;;;EAClB","file":"../../../../../../../../../../packages/flutter/src/gestures/drag.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__drag: drag
  };
}));

//# sourceMappingURL=drag.dart.lib.js.map
