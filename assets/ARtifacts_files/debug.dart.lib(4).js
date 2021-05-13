define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__gestures__debug_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  var debug = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/gestures/debug.dart";
  debug.debugAssertAllGesturesVarsUnset = function debugAssertAllGesturesVarsUnset(reason) {
    if (reason == null) dart.nullFailed(L0, 74, 45, "reason");
    if (!dart.test(dart.fn(() => {
      if (dart.test(debug.debugPrintHitTestResults) || dart.test(debug.debugPrintGestureArenaDiagnostics) || dart.test(debug.debugPrintRecognizerCallbacksTrace) || dart.test(debug.debugPrintResamplingMargin)) dart.throw(assertions.FlutterError.new(reason));
      return true;
    }, VoidTobool())())) dart.assertFailed(null, L0, 75, 10, "() {\n    if (debugPrintHitTestResults ||\n        debugPrintGestureArenaDiagnostics ||\n        debugPrintRecognizerCallbacksTrace ||\n        debugPrintResamplingMargin)\n      throw FlutterError(reason);\n    return true;\n  }()");
    return true;
  };
  dart.defineLazy(debug, {
    /*debug.debugPrintHitTestResults*/get debugPrintHitTestResults() {
      return false;
    },
    set debugPrintHitTestResults(_) {},
    /*debug.debugPrintMouseHoverEvents*/get debugPrintMouseHoverEvents() {
      return false;
    },
    set debugPrintMouseHoverEvents(_) {},
    /*debug.debugPrintGestureArenaDiagnostics*/get debugPrintGestureArenaDiagnostics() {
      return false;
    },
    set debugPrintGestureArenaDiagnostics(_) {},
    /*debug.debugPrintRecognizerCallbacksTrace*/get debugPrintRecognizerCallbacksTrace() {
      return false;
    },
    set debugPrintRecognizerCallbacksTrace(_) {},
    /*debug.debugPrintResamplingMargin*/get debugPrintResamplingMargin() {
      return false;
    },
    set debugPrintResamplingMargin(_) {}
  }, false);
  dart.trackLibraries("packages/flutter/src/gestures/debug.dart", {
    "package:flutter/src/gestures/debug.dart": debug
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["debug.dart"],"names":[],"mappings":";;;;;;;;;;;;QAyE4C;AAC1C,mBAAO,AAON;AANC,oBAAI,6CACA,sDACA,uDACA,mCACF,AAA0B,WAApB,4BAAa,MAAM;AAC3B,YAAO;;AAET,UAAO;EACT;;MAnEK,8BAAwB;YAAG;;;MAS3B,gCAA0B;YAAG;;;MAW7B,uCAAiC;YAAG;;;MAcpC,wCAAkC;YAAG;;;MAcrC,gCAA0B;YAAG","file":"../../../../../../../../../../packages/flutter/src/gestures/debug.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__debug: debug
  };
}));

//# sourceMappingURL=debug.dart.lib.js.map
