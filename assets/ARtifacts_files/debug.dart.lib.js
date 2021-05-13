define(['dart_sdk', 'packages/flutter/src/foundation/print.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/foundation/stack_frame.dart'], (function load__packages__flutter__src__foundation__debug_dart(dart_sdk, packages__flutter__src__foundation__print$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__foundation__stack_frame$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const object$ = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const stack_frame = packages__flutter__src__foundation__stack_frame$46dart.src__foundation__stack_frame;
  var debug = Object.create(dart.library);
  var diagnostics$ = Object.create(dart.library);
  var assertions = Object.create(dart.library);
  var $toStringAsPrecision = dartx.toStringAsPrecision;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $times = dartx['*'];
  var $isEmpty = dartx.isEmpty;
  var $length = dartx.length;
  var $clear = dartx.clear;
  var $_get = dartx._get;
  var $substring = dartx.substring;
  var $split = dartx.split;
  var $isNotEmpty = dartx.isNotEmpty;
  var $last = dartx.last;
  var $add = dartx.add;
  var $trimRight = dartx.trimRight;
  var $endsWith = dartx.endsWith;
  var $toUpperCase = dartx.toUpperCase;
  var $contains = dartx.contains;
  var $where = dartx.where;
  var $take = dartx.take;
  var $toList = dartx.toList;
  var $first = dartx.first;
  var $_set = dartx._set;
  var $runtimeType = dartx.runtimeType;
  var $entries = dartx.entries;
  var $map = dartx.map;
  var $toString = dartx.toString;
  var $isFinite = dartx.isFinite;
  var $replaceAll = dartx.replaceAll;
  var $clamp = dartx.clamp;
  var $join = dartx.join;
  var $values = dartx.values;
  var $any = dartx.any;
  var $hashCode = dartx.hashCode;
  var $toUnsigned = dartx.toUnsigned;
  var $toRadixString = dartx.toRadixString;
  var $padLeft = dartx.padLeft;
  var $indexOf = dartx.indexOf;
  var $allMatches = dartx.allMatches;
  var $startsWith = dartx.startsWith;
  var $skip = dartx.skip;
  var $setRange = dartx.setRange;
  var $lastIndexOf = dartx.lastIndexOf;
  var $trimLeft = dartx.trimLeft;
  var $cast = dartx.cast;
  var $firstWhere = dartx.firstWhere;
  var $skipWhile = dartx.skipWhile;
  var $forEach = dartx.forEach;
  var $addAll = dartx.addAll;
  var $containsKey = dartx.containsKey;
  var $update = dartx.update;
  var $removeAt = dartx.removeAt;
  var $sort = dartx.sort;
  var $single = dartx.single;
  var $whereType = dartx.whereType;
  dart._checkModuleNullSafetyMode(false);
  var StringN = () => (StringN = dart.constFn(dart.nullable(core.String)))();
  var intN = () => (intN = dart.constFn(dart.nullable(core.int)))();
  var StringN__Tovoid = () => (StringN__Tovoid = dart.constFn(dart.fnType(dart.void, [StringN()], {wrapWidth: intN()}, {})))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var DiagnosticLevelL = () => (DiagnosticLevelL = dart.constFn(dart.legacy(diagnostics$.DiagnosticLevel)))();
  var DiagnosticsTreeStyleL = () => (DiagnosticsTreeStyleL = dart.constFn(dart.legacy(diagnostics$.DiagnosticsTreeStyle)))();
  var _WordWrapParseModeL = () => (_WordWrapParseModeL = dart.constFn(dart.legacy(diagnostics$._WordWrapParseMode)))();
  var JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  var VoidToint = () => (VoidToint = dart.constFn(dart.fnType(core.int, [])))();
  var intTodynamic = () => (intTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.int])))();
  var intTobool = () => (intTobool = dart.constFn(dart.fnType(core.bool, [core.int])))();
  var SyncIterableOfString = () => (SyncIterableOfString = dart.constFn(_js_helper.SyncIterable$(core.String)))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var DiagnosticsNodeTovoid = () => (DiagnosticsNodeTovoid = dart.constFn(dart.fnType(dart.void, [diagnostics$.DiagnosticsNode])))();
  var DiagnosticsNodeTobool = () => (DiagnosticsNodeTobool = dart.constFn(dart.fnType(core.bool, [diagnostics$.DiagnosticsNode])))();
  var DiagnosticsPropertyOfvoid = () => (DiagnosticsPropertyOfvoid = dart.constFn(diagnostics$.DiagnosticsProperty$(dart.void)))();
  var ObjectN = () => (ObjectN = dart.constFn(dart.nullable(core.Object)))();
  var IdentityMapOfString$ObjectN = () => (IdentityMapOfString$ObjectN = dart.constFn(_js_helper.IdentityMap$(core.String, ObjectN())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var MapOfStringL$ObjectL = () => (MapOfStringL$ObjectL = dart.constFn(core.Map$(StringL(), ObjectL())))();
  var MapLOfStringL$ObjectL = () => (MapLOfStringL$ObjectL = dart.constFn(dart.legacy(MapOfStringL$ObjectL())))();
  var MapOfString$ObjectN = () => (MapOfString$ObjectN = dart.constFn(core.Map$(core.String, ObjectN())))();
  var DiagnosticsNodeToMapOfString$ObjectN = () => (DiagnosticsNodeToMapOfString$ObjectN = dart.constFn(dart.fnType(MapOfString$ObjectN(), [diagnostics$.DiagnosticsNode])))();
  var DiagnosticsNodeL = () => (DiagnosticsNodeL = dart.constFn(dart.legacy(diagnostics$.DiagnosticsNode)))();
  var DiagnosticableNodeOfDiagnosticable = () => (DiagnosticableNodeOfDiagnosticable = dart.constFn(diagnostics$.DiagnosticableNode$(diagnostics$.Diagnosticable)))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics$.DiagnosticsNode)))();
  var ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  var JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  var VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  var DiagnosticsNodeN = () => (DiagnosticsNodeN = dart.constFn(dart.nullable(diagnostics$.DiagnosticsNode)))();
  var DiagnosticsNodeNTobool = () => (DiagnosticsNodeNTobool = dart.constFn(dart.fnType(core.bool, [DiagnosticsNodeN()])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var StackFrameTobool = () => (StackFrameTobool = dart.constFn(dart.fnType(core.bool, [stack_frame.StackFrame])))();
  var IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics$.DiagnosticsNode)))();
  var IterableOfDiagnosticsNodeToIterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNodeToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [IterableOfDiagnosticsNode()])))();
  var JSArrayOfIterableOfDiagnosticsNodeToIterableOfDiagnosticsNode = () => (JSArrayOfIterableOfDiagnosticsNodeToIterableOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(IterableOfDiagnosticsNodeToIterableOfDiagnosticsNode())))();
  var DiagnosticsPropertyOfFlutterError = () => (DiagnosticsPropertyOfFlutterError = dart.constFn(diagnostics$.DiagnosticsProperty$(assertions.FlutterError)))();
  var DiagnosticsPropertyOfDiagnosticsNode = () => (DiagnosticsPropertyOfDiagnosticsNode = dart.constFn(diagnostics$.DiagnosticsProperty$(diagnostics$.DiagnosticsNode)))();
  var StringToErrorDescription = () => (StringToErrorDescription = dart.constFn(dart.fnType(assertions.ErrorDescription, [core.String])))();
  var IdentityMapOfString$int = () => (IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))();
  var intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  var ListOfStringN = () => (ListOfStringN = dart.constFn(core.List$(StringN())))();
  var DiagnosticsNodeToString = () => (DiagnosticsNodeToString = dart.constFn(dart.fnType(core.String, [diagnostics$.DiagnosticsNode])))();
  var FlutterErrorDetailsTovoid = () => (FlutterErrorDetailsTovoid = dart.constFn(dart.fnType(dart.void, [assertions.FlutterErrorDetails])))();
  var StackTraceToStackTrace = () => (StackTraceToStackTrace = dart.constFn(dart.fnType(core.StackTrace, [core.StackTrace])))();
  var FlutterErrorDetails__Tovoid = () => (FlutterErrorDetails__Tovoid = dart.constFn(dart.fnType(dart.void, [assertions.FlutterErrorDetails], {forceReport: core.bool}, {})))();
  var JSArrayOfStackFilter = () => (JSArrayOfStackFilter = dart.constFn(_interceptors.JSArray$(assertions.StackFilter)))();
  var IterableOfString = () => (IterableOfString = dart.constFn(core.Iterable$(core.String)))();
  var IterableOfStringToIterableOfString = () => (IterableOfStringToIterableOfString = dart.constFn(dart.fnType(IterableOfString(), [IterableOfString()])))();
  var StringToDiagnosticsNode = () => (StringToDiagnosticsNode = dart.constFn(dart.fnType(diagnostics$.DiagnosticsNode, [core.String])))();
  var StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/foundation/debug.dart";
  var L3 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/foundation/assertions.dart";
  var L1 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/foundation/diagnostics.dart";
  var L2 = "package:flutter/src/foundation/diagnostics.dart";
  var L4 = "package:flutter/src/foundation/assertions.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(print.debugPrintThrottled, StringN__Tovoid());
    },
    get C1() {
      return C1 = dart.constMap(StringL(), StringL(), ["mode", "basic"]);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$]: "DiagnosticLevel.hidden",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$]: "DiagnosticLevel.fine",
        index: 1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$]: "DiagnosticLevel.debug",
        index: 2
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$]: "DiagnosticLevel.info",
        index: 3
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$]: "DiagnosticLevel.warning",
        index: 4
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$]: "DiagnosticLevel.hint",
        index: 5
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$]: "DiagnosticLevel.summary",
        index: 6
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$]: "DiagnosticLevel.error",
        index: 7
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$]: "DiagnosticLevel.off",
        index: 8
      });
    },
    get C11() {
      return C11 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], DiagnosticLevelL());
    },
    get C12() {
      return C12 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$]: "DiagnosticsTreeStyle.none",
        index: 0
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$]: "DiagnosticsTreeStyle.sparse",
        index: 1
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$]: "DiagnosticsTreeStyle.offstage",
        index: 2
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$]: "DiagnosticsTreeStyle.dense",
        index: 3
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$]: "DiagnosticsTreeStyle.transition",
        index: 4
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$]: "DiagnosticsTreeStyle.error",
        index: 5
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$]: "DiagnosticsTreeStyle.whitespace",
        index: 6
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$]: "DiagnosticsTreeStyle.flat",
        index: 7
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$]: "DiagnosticsTreeStyle.singleLine",
        index: 8
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$]: "DiagnosticsTreeStyle.errorProperty",
        index: 9
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$]: "DiagnosticsTreeStyle.shallow",
        index: 10
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$]: "DiagnosticsTreeStyle.truncateChildren",
        index: 11
      });
    },
    get C24() {
      return C24 = dart.constList([C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], DiagnosticsTreeStyleL());
    },
    get C25() {
      return C25 = dart.const({
        __proto__: diagnostics$._WordWrapParseMode.prototype,
        [_name$]: "_WordWrapParseMode.inSpace",
        index: 0
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: diagnostics$._WordWrapParseMode.prototype,
        [_name$]: "_WordWrapParseMode.inWord",
        index: 1
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: diagnostics$._WordWrapParseMode.prototype,
        [_name$]: "_WordWrapParseMode.atBreak",
        index: 2
      });
    },
    get C28() {
      return C28 = dart.constList([C25 || CT.C25, C26 || CT.C26, C27 || CT.C27], _WordWrapParseModeL());
    },
    get C29() {
      return C29 = dart.constList([], MapLOfStringL$ObjectL());
    },
    get C30() {
      return C30 = dart.const({
        __proto__: diagnostics$._NoDefaultValue.prototype
      });
    },
    get C31() {
      return C31 = dart.constList([], DiagnosticsNodeL());
    },
    get C32() {
      return C32 = dart.constMap(StringL(), ObjectL(), []);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: assertions.PartialStackFrame.prototype,
        [method$]: "asynchronous suspension",
        [className$]: "",
        [package$]: ""
      });
    },
    get C34() {
      return C34 = dart.fn(assertions.FlutterError.dumpErrorToConsole, FlutterErrorDetails__Tovoid());
    },
    get C35() {
      return C35 = dart.fn(assertions.FlutterError.defaultStackFilter, IterableOfStringToIterableOfString());
    },
    get C36() {
      return C36 = dart.fn(assertions.DiagnosticsStackTrace._createStackFrame, StringToDiagnosticsNode());
    }
  }, false);
  var C0;
  debug.debugAssertAllFoundationVarsUnset = function debugAssertAllFoundationVarsUnset(reason, opts) {
    if (reason == null) dart.nullFailed(L0, 24, 47, "reason");
    let debugPrintOverride = opts && 'debugPrintOverride' in opts ? opts.debugPrintOverride : C0 || CT.C0;
    if (debugPrintOverride == null) dart.nullFailed(L0, 24, 76, "debugPrintOverride");
    if (!dart.test(dart.fn(() => {
      if (!dart.equals(print.debugPrint, debugPrintOverride) || platform.debugDefaultTargetPlatformOverride != null || debug.debugDoublePrecision != null || debug.debugBrightnessOverride != null) dart.throw(assertions.FlutterError.new(reason));
      return true;
    }, VoidTobool())())) dart.assertFailed(null, L0, 25, 10, "() {\n    if (debugPrint != debugPrintOverride ||\n        debugDefaultTargetPlatformOverride != null ||\n        debugDoublePrecision != null ||\n        debugBrightnessOverride != null)\n      throw FlutterError(reason);\n    return true;\n  }()");
    return true;
  };
  debug.debugInstrumentAction = function debugInstrumentAction(T, description, action) {
    if (description == null) dart.nullFailed(L0, 54, 43, "description");
    if (action == null) dart.nullFailed(L0, 54, 66, "action");
    return async.async(T, function* debugInstrumentAction() {
      let t0;
      let instrument = false;
      if (!dart.test(dart.fn(() => {
        instrument = debug.debugInstrumentationEnabled;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 56, 10, "() {\n    instrument = debugInstrumentationEnabled;\n    return true;\n  }()");
      if (dart.test(instrument)) {
        let stopwatch = (t0 = new core.Stopwatch.new(), (() => {
          t0.start();
          return t0;
        })());
        try {
          return yield action();
        } finally {
          stopwatch.stop();
          print.debugPrint("Action \"" + dart.str(description) + "\" took " + dart.str(stopwatch.elapsed));
        }
      } else {
        return action();
      }
    });
  };
  debug.debugFormatDouble = function debugFormatDouble(value) {
    if (value == null) {
      return "null";
    }
    if (debug.debugDoublePrecision != null) {
      return value[$toStringAsPrecision](dart.nullCheck(debug.debugDoublePrecision));
    }
    return value[$toStringAsFixed](1);
  };
  var C1;
  dart.defineLazy(debug, {
    /*debug.debugInstrumentationEnabled*/get debugInstrumentationEnabled() {
      return false;
    },
    set debugInstrumentationEnabled(_) {},
    /*debug.timelineArgumentsIndicatingLandmarkEvent*/get timelineArgumentsIndicatingLandmarkEvent() {
      return C1 || CT.C1;
    },
    /*debug.debugDoublePrecision*/get debugDoublePrecision() {
      return null;
    },
    set debugDoublePrecision(_) {},
    /*debug.debugBrightnessOverride*/get debugBrightnessOverride() {
      return null;
    },
    set debugBrightnessOverride(_) {}
  }, false);
  var _name$ = dart.privateName(diagnostics$, "_name");
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  diagnostics$.DiagnosticLevel = class DiagnosticLevel extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (diagnostics$.DiagnosticLevel.new = function(index, _name) {
    if (index == null) dart.nullFailed(L1, 28, 6, "index");
    if (_name == null) dart.nullFailed(L1, 28, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = diagnostics$.DiagnosticLevel.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticLevel);
  dart.addTypeCaches(diagnostics$.DiagnosticLevel);
  dart.setLibraryUri(diagnostics$.DiagnosticLevel, L2);
  dart.setFieldSignature(diagnostics$.DiagnosticLevel, () => ({
    __proto__: dart.getFields(diagnostics$.DiagnosticLevel.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(diagnostics$.DiagnosticLevel, ['toString']);
  diagnostics$.DiagnosticLevel.hidden = C2 || CT.C2;
  diagnostics$.DiagnosticLevel.fine = C3 || CT.C3;
  diagnostics$.DiagnosticLevel.debug = C4 || CT.C4;
  diagnostics$.DiagnosticLevel.info = C5 || CT.C5;
  diagnostics$.DiagnosticLevel.warning = C6 || CT.C6;
  diagnostics$.DiagnosticLevel.hint = C7 || CT.C7;
  diagnostics$.DiagnosticLevel.summary = C8 || CT.C8;
  diagnostics$.DiagnosticLevel.error = C9 || CT.C9;
  diagnostics$.DiagnosticLevel.off = C10 || CT.C10;
  diagnostics$.DiagnosticLevel.values = C11 || CT.C11;
  var C12;
  var C13;
  var C14;
  var C15;
  var C16;
  var C17;
  var C18;
  var C19;
  var C20;
  var C21;
  var C22;
  var C23;
  var C24;
  diagnostics$.DiagnosticsTreeStyle = class DiagnosticsTreeStyle extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (diagnostics$.DiagnosticsTreeStyle.new = function(index, _name) {
    if (index == null) dart.nullFailed(L1, 100, 6, "index");
    if (_name == null) dart.nullFailed(L1, 100, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = diagnostics$.DiagnosticsTreeStyle.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticsTreeStyle);
  dart.addTypeCaches(diagnostics$.DiagnosticsTreeStyle);
  dart.setLibraryUri(diagnostics$.DiagnosticsTreeStyle, L2);
  dart.setFieldSignature(diagnostics$.DiagnosticsTreeStyle, () => ({
    __proto__: dart.getFields(diagnostics$.DiagnosticsTreeStyle.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(diagnostics$.DiagnosticsTreeStyle, ['toString']);
  diagnostics$.DiagnosticsTreeStyle.none = C12 || CT.C12;
  diagnostics$.DiagnosticsTreeStyle.sparse = C13 || CT.C13;
  diagnostics$.DiagnosticsTreeStyle.offstage = C14 || CT.C14;
  diagnostics$.DiagnosticsTreeStyle.dense = C15 || CT.C15;
  diagnostics$.DiagnosticsTreeStyle.transition = C16 || CT.C16;
  diagnostics$.DiagnosticsTreeStyle.error = C17 || CT.C17;
  diagnostics$.DiagnosticsTreeStyle.whitespace = C18 || CT.C18;
  diagnostics$.DiagnosticsTreeStyle.flat = C19 || CT.C19;
  diagnostics$.DiagnosticsTreeStyle.singleLine = C20 || CT.C20;
  diagnostics$.DiagnosticsTreeStyle.errorProperty = C21 || CT.C21;
  diagnostics$.DiagnosticsTreeStyle.shallow = C22 || CT.C22;
  diagnostics$.DiagnosticsTreeStyle.truncateChildren = C23 || CT.C23;
  diagnostics$.DiagnosticsTreeStyle.values = C24 || CT.C24;
  var prefixLineOne$ = dart.privateName(diagnostics$, "TextTreeConfiguration.prefixLineOne");
  var suffixLineOne$ = dart.privateName(diagnostics$, "TextTreeConfiguration.suffixLineOne");
  var prefixOtherLines$ = dart.privateName(diagnostics$, "TextTreeConfiguration.prefixOtherLines");
  var prefixLastChildLineOne$ = dart.privateName(diagnostics$, "TextTreeConfiguration.prefixLastChildLineOne");
  var prefixOtherLinesRootNode$ = dart.privateName(diagnostics$, "TextTreeConfiguration.prefixOtherLinesRootNode");
  var propertyPrefixIfChildren$ = dart.privateName(diagnostics$, "TextTreeConfiguration.propertyPrefixIfChildren");
  var propertyPrefixNoChildren$ = dart.privateName(diagnostics$, "TextTreeConfiguration.propertyPrefixNoChildren");
  var linkCharacter$ = dart.privateName(diagnostics$, "TextTreeConfiguration.linkCharacter");
  var childLinkSpace = dart.privateName(diagnostics$, "TextTreeConfiguration.childLinkSpace");
  var lineBreak$ = dart.privateName(diagnostics$, "TextTreeConfiguration.lineBreak");
  var lineBreakProperties$ = dart.privateName(diagnostics$, "TextTreeConfiguration.lineBreakProperties");
  var beforeName$ = dart.privateName(diagnostics$, "TextTreeConfiguration.beforeName");
  var afterName$ = dart.privateName(diagnostics$, "TextTreeConfiguration.afterName");
  var afterDescriptionIfBody$ = dart.privateName(diagnostics$, "TextTreeConfiguration.afterDescriptionIfBody");
  var afterDescription$ = dart.privateName(diagnostics$, "TextTreeConfiguration.afterDescription");
  var beforeProperties$ = dart.privateName(diagnostics$, "TextTreeConfiguration.beforeProperties");
  var afterProperties$ = dart.privateName(diagnostics$, "TextTreeConfiguration.afterProperties");
  var mandatoryAfterProperties$ = dart.privateName(diagnostics$, "TextTreeConfiguration.mandatoryAfterProperties");
  var propertySeparator$ = dart.privateName(diagnostics$, "TextTreeConfiguration.propertySeparator");
  var bodyIndent$ = dart.privateName(diagnostics$, "TextTreeConfiguration.bodyIndent");
  var showChildren$ = dart.privateName(diagnostics$, "TextTreeConfiguration.showChildren");
  var addBlankLineIfNoChildren$ = dart.privateName(diagnostics$, "TextTreeConfiguration.addBlankLineIfNoChildren");
  var isNameOnOwnLine$ = dart.privateName(diagnostics$, "TextTreeConfiguration.isNameOnOwnLine");
  var footer$ = dart.privateName(diagnostics$, "TextTreeConfiguration.footer");
  var mandatoryFooter$ = dart.privateName(diagnostics$, "TextTreeConfiguration.mandatoryFooter");
  var isBlankLineBetweenPropertiesAndChildren$ = dart.privateName(diagnostics$, "TextTreeConfiguration.isBlankLineBetweenPropertiesAndChildren");
  diagnostics$.TextTreeConfiguration = class TextTreeConfiguration extends core.Object {
    get prefixLineOne() {
      return this[prefixLineOne$];
    }
    set prefixLineOne(value) {
      super.prefixLineOne = value;
    }
    get suffixLineOne() {
      return this[suffixLineOne$];
    }
    set suffixLineOne(value) {
      super.suffixLineOne = value;
    }
    get prefixOtherLines() {
      return this[prefixOtherLines$];
    }
    set prefixOtherLines(value) {
      super.prefixOtherLines = value;
    }
    get prefixLastChildLineOne() {
      return this[prefixLastChildLineOne$];
    }
    set prefixLastChildLineOne(value) {
      super.prefixLastChildLineOne = value;
    }
    get prefixOtherLinesRootNode() {
      return this[prefixOtherLinesRootNode$];
    }
    set prefixOtherLinesRootNode(value) {
      super.prefixOtherLinesRootNode = value;
    }
    get propertyPrefixIfChildren() {
      return this[propertyPrefixIfChildren$];
    }
    set propertyPrefixIfChildren(value) {
      super.propertyPrefixIfChildren = value;
    }
    get propertyPrefixNoChildren() {
      return this[propertyPrefixNoChildren$];
    }
    set propertyPrefixNoChildren(value) {
      super.propertyPrefixNoChildren = value;
    }
    get linkCharacter() {
      return this[linkCharacter$];
    }
    set linkCharacter(value) {
      super.linkCharacter = value;
    }
    get childLinkSpace() {
      return this[childLinkSpace];
    }
    set childLinkSpace(value) {
      super.childLinkSpace = value;
    }
    get lineBreak() {
      return this[lineBreak$];
    }
    set lineBreak(value) {
      super.lineBreak = value;
    }
    get lineBreakProperties() {
      return this[lineBreakProperties$];
    }
    set lineBreakProperties(value) {
      super.lineBreakProperties = value;
    }
    get beforeName() {
      return this[beforeName$];
    }
    set beforeName(value) {
      super.beforeName = value;
    }
    get afterName() {
      return this[afterName$];
    }
    set afterName(value) {
      super.afterName = value;
    }
    get afterDescriptionIfBody() {
      return this[afterDescriptionIfBody$];
    }
    set afterDescriptionIfBody(value) {
      super.afterDescriptionIfBody = value;
    }
    get afterDescription() {
      return this[afterDescription$];
    }
    set afterDescription(value) {
      super.afterDescription = value;
    }
    get beforeProperties() {
      return this[beforeProperties$];
    }
    set beforeProperties(value) {
      super.beforeProperties = value;
    }
    get afterProperties() {
      return this[afterProperties$];
    }
    set afterProperties(value) {
      super.afterProperties = value;
    }
    get mandatoryAfterProperties() {
      return this[mandatoryAfterProperties$];
    }
    set mandatoryAfterProperties(value) {
      super.mandatoryAfterProperties = value;
    }
    get propertySeparator() {
      return this[propertySeparator$];
    }
    set propertySeparator(value) {
      super.propertySeparator = value;
    }
    get bodyIndent() {
      return this[bodyIndent$];
    }
    set bodyIndent(value) {
      super.bodyIndent = value;
    }
    get showChildren() {
      return this[showChildren$];
    }
    set showChildren(value) {
      super.showChildren = value;
    }
    get addBlankLineIfNoChildren() {
      return this[addBlankLineIfNoChildren$];
    }
    set addBlankLineIfNoChildren(value) {
      super.addBlankLineIfNoChildren = value;
    }
    get isNameOnOwnLine() {
      return this[isNameOnOwnLine$];
    }
    set isNameOnOwnLine(value) {
      super.isNameOnOwnLine = value;
    }
    get footer() {
      return this[footer$];
    }
    set footer(value) {
      super.footer = value;
    }
    get mandatoryFooter() {
      return this[mandatoryFooter$];
    }
    set mandatoryFooter(value) {
      super.mandatoryFooter = value;
    }
    get isBlankLineBetweenPropertiesAndChildren() {
      return this[isBlankLineBetweenPropertiesAndChildren$];
    }
    set isBlankLineBetweenPropertiesAndChildren(value) {
      super.isBlankLineBetweenPropertiesAndChildren = value;
    }
  };
  (diagnostics$.TextTreeConfiguration.new = function(opts) {
    let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : null;
    if (prefixLineOne == null) dart.nullFailed(L1, 204, 19, "prefixLineOne");
    let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
    if (prefixOtherLines == null) dart.nullFailed(L1, 205, 19, "prefixOtherLines");
    let prefixLastChildLineOne = opts && 'prefixLastChildLineOne' in opts ? opts.prefixLastChildLineOne : null;
    if (prefixLastChildLineOne == null) dart.nullFailed(L1, 206, 19, "prefixLastChildLineOne");
    let prefixOtherLinesRootNode = opts && 'prefixOtherLinesRootNode' in opts ? opts.prefixOtherLinesRootNode : null;
    if (prefixOtherLinesRootNode == null) dart.nullFailed(L1, 207, 19, "prefixOtherLinesRootNode");
    let linkCharacter = opts && 'linkCharacter' in opts ? opts.linkCharacter : null;
    if (linkCharacter == null) dart.nullFailed(L1, 208, 19, "linkCharacter");
    let propertyPrefixIfChildren = opts && 'propertyPrefixIfChildren' in opts ? opts.propertyPrefixIfChildren : null;
    if (propertyPrefixIfChildren == null) dart.nullFailed(L1, 209, 19, "propertyPrefixIfChildren");
    let propertyPrefixNoChildren = opts && 'propertyPrefixNoChildren' in opts ? opts.propertyPrefixNoChildren : null;
    if (propertyPrefixNoChildren == null) dart.nullFailed(L1, 210, 19, "propertyPrefixNoChildren");
    let lineBreak = opts && 'lineBreak' in opts ? opts.lineBreak : "\n";
    if (lineBreak == null) dart.nullFailed(L1, 211, 10, "lineBreak");
    let lineBreakProperties = opts && 'lineBreakProperties' in opts ? opts.lineBreakProperties : true;
    if (lineBreakProperties == null) dart.nullFailed(L1, 212, 10, "lineBreakProperties");
    let afterName = opts && 'afterName' in opts ? opts.afterName : ":";
    if (afterName == null) dart.nullFailed(L1, 213, 10, "afterName");
    let afterDescriptionIfBody = opts && 'afterDescriptionIfBody' in opts ? opts.afterDescriptionIfBody : "";
    if (afterDescriptionIfBody == null) dart.nullFailed(L1, 214, 10, "afterDescriptionIfBody");
    let afterDescription = opts && 'afterDescription' in opts ? opts.afterDescription : "";
    if (afterDescription == null) dart.nullFailed(L1, 215, 10, "afterDescription");
    let beforeProperties = opts && 'beforeProperties' in opts ? opts.beforeProperties : "";
    if (beforeProperties == null) dart.nullFailed(L1, 216, 10, "beforeProperties");
    let afterProperties = opts && 'afterProperties' in opts ? opts.afterProperties : "";
    if (afterProperties == null) dart.nullFailed(L1, 217, 10, "afterProperties");
    let mandatoryAfterProperties = opts && 'mandatoryAfterProperties' in opts ? opts.mandatoryAfterProperties : "";
    if (mandatoryAfterProperties == null) dart.nullFailed(L1, 218, 10, "mandatoryAfterProperties");
    let propertySeparator = opts && 'propertySeparator' in opts ? opts.propertySeparator : "";
    if (propertySeparator == null) dart.nullFailed(L1, 219, 10, "propertySeparator");
    let bodyIndent = opts && 'bodyIndent' in opts ? opts.bodyIndent : "";
    if (bodyIndent == null) dart.nullFailed(L1, 220, 10, "bodyIndent");
    let footer = opts && 'footer' in opts ? opts.footer : "";
    if (footer == null) dart.nullFailed(L1, 221, 10, "footer");
    let showChildren = opts && 'showChildren' in opts ? opts.showChildren : true;
    if (showChildren == null) dart.nullFailed(L1, 222, 10, "showChildren");
    let addBlankLineIfNoChildren = opts && 'addBlankLineIfNoChildren' in opts ? opts.addBlankLineIfNoChildren : true;
    if (addBlankLineIfNoChildren == null) dart.nullFailed(L1, 223, 10, "addBlankLineIfNoChildren");
    let isNameOnOwnLine = opts && 'isNameOnOwnLine' in opts ? opts.isNameOnOwnLine : false;
    if (isNameOnOwnLine == null) dart.nullFailed(L1, 224, 10, "isNameOnOwnLine");
    let isBlankLineBetweenPropertiesAndChildren = opts && 'isBlankLineBetweenPropertiesAndChildren' in opts ? opts.isBlankLineBetweenPropertiesAndChildren : true;
    if (isBlankLineBetweenPropertiesAndChildren == null) dart.nullFailed(L1, 225, 10, "isBlankLineBetweenPropertiesAndChildren");
    let beforeName = opts && 'beforeName' in opts ? opts.beforeName : "";
    if (beforeName == null) dart.nullFailed(L1, 226, 10, "beforeName");
    let suffixLineOne = opts && 'suffixLineOne' in opts ? opts.suffixLineOne : "";
    if (suffixLineOne == null) dart.nullFailed(L1, 227, 10, "suffixLineOne");
    let mandatoryFooter = opts && 'mandatoryFooter' in opts ? opts.mandatoryFooter : "";
    if (mandatoryFooter == null) dart.nullFailed(L1, 228, 10, "mandatoryFooter");
    this[prefixLineOne$] = prefixLineOne;
    this[prefixOtherLines$] = prefixOtherLines;
    this[prefixLastChildLineOne$] = prefixLastChildLineOne;
    this[prefixOtherLinesRootNode$] = prefixOtherLinesRootNode;
    this[linkCharacter$] = linkCharacter;
    this[propertyPrefixIfChildren$] = propertyPrefixIfChildren;
    this[propertyPrefixNoChildren$] = propertyPrefixNoChildren;
    this[lineBreak$] = lineBreak;
    this[lineBreakProperties$] = lineBreakProperties;
    this[afterName$] = afterName;
    this[afterDescriptionIfBody$] = afterDescriptionIfBody;
    this[afterDescription$] = afterDescription;
    this[beforeProperties$] = beforeProperties;
    this[afterProperties$] = afterProperties;
    this[mandatoryAfterProperties$] = mandatoryAfterProperties;
    this[propertySeparator$] = propertySeparator;
    this[bodyIndent$] = bodyIndent;
    this[footer$] = footer;
    this[showChildren$] = showChildren;
    this[addBlankLineIfNoChildren$] = addBlankLineIfNoChildren;
    this[isNameOnOwnLine$] = isNameOnOwnLine;
    this[isBlankLineBetweenPropertiesAndChildren$] = isBlankLineBetweenPropertiesAndChildren;
    this[beforeName$] = beforeName;
    this[suffixLineOne$] = suffixLineOne;
    this[mandatoryFooter$] = mandatoryFooter;
    if (!(prefixLineOne != null)) dart.assertFailed(null, L1, 229, 15, "prefixLineOne != null");
    if (!(prefixOtherLines != null)) dart.assertFailed(null, L1, 230, 15, "prefixOtherLines != null");
    if (!(prefixLastChildLineOne != null)) dart.assertFailed(null, L1, 231, 15, "prefixLastChildLineOne != null");
    if (!(prefixOtherLinesRootNode != null)) dart.assertFailed(null, L1, 232, 15, "prefixOtherLinesRootNode != null");
    if (!(linkCharacter != null)) dart.assertFailed(null, L1, 233, 15, "linkCharacter != null");
    if (!(propertyPrefixIfChildren != null)) dart.assertFailed(null, L1, 234, 15, "propertyPrefixIfChildren != null");
    if (!(propertyPrefixNoChildren != null)) dart.assertFailed(null, L1, 235, 15, "propertyPrefixNoChildren != null");
    if (!(lineBreak != null)) dart.assertFailed(null, L1, 236, 15, "lineBreak != null");
    if (!(lineBreakProperties != null)) dart.assertFailed(null, L1, 237, 15, "lineBreakProperties != null");
    if (!(afterName != null)) dart.assertFailed(null, L1, 238, 15, "afterName != null");
    if (!(afterDescriptionIfBody != null)) dart.assertFailed(null, L1, 239, 15, "afterDescriptionIfBody != null");
    if (!(afterDescription != null)) dart.assertFailed(null, L1, 240, 15, "afterDescription != null");
    if (!(beforeProperties != null)) dart.assertFailed(null, L1, 241, 15, "beforeProperties != null");
    if (!(afterProperties != null)) dart.assertFailed(null, L1, 242, 15, "afterProperties != null");
    if (!(propertySeparator != null)) dart.assertFailed(null, L1, 243, 15, "propertySeparator != null");
    if (!(bodyIndent != null)) dart.assertFailed(null, L1, 244, 15, "bodyIndent != null");
    if (!(footer != null)) dart.assertFailed(null, L1, 245, 15, "footer != null");
    if (!(showChildren != null)) dart.assertFailed(null, L1, 246, 15, "showChildren != null");
    if (!(addBlankLineIfNoChildren != null)) dart.assertFailed(null, L1, 247, 15, "addBlankLineIfNoChildren != null");
    if (!(isNameOnOwnLine != null)) dart.assertFailed(null, L1, 248, 15, "isNameOnOwnLine != null");
    if (!(isBlankLineBetweenPropertiesAndChildren != null)) dart.assertFailed(null, L1, 249, 15, "isBlankLineBetweenPropertiesAndChildren != null");
    this[childLinkSpace] = " "[$times](linkCharacter.length);
    ;
  }).prototype = diagnostics$.TextTreeConfiguration.prototype;
  dart.addTypeTests(diagnostics$.TextTreeConfiguration);
  dart.addTypeCaches(diagnostics$.TextTreeConfiguration);
  dart.setLibraryUri(diagnostics$.TextTreeConfiguration, L2);
  dart.setFieldSignature(diagnostics$.TextTreeConfiguration, () => ({
    __proto__: dart.getFields(diagnostics$.TextTreeConfiguration.__proto__),
    prefixLineOne: dart.finalFieldType(core.String),
    suffixLineOne: dart.finalFieldType(core.String),
    prefixOtherLines: dart.finalFieldType(core.String),
    prefixLastChildLineOne: dart.finalFieldType(core.String),
    prefixOtherLinesRootNode: dart.finalFieldType(core.String),
    propertyPrefixIfChildren: dart.finalFieldType(core.String),
    propertyPrefixNoChildren: dart.finalFieldType(core.String),
    linkCharacter: dart.finalFieldType(core.String),
    childLinkSpace: dart.finalFieldType(core.String),
    lineBreak: dart.finalFieldType(core.String),
    lineBreakProperties: dart.finalFieldType(core.bool),
    beforeName: dart.finalFieldType(core.String),
    afterName: dart.finalFieldType(core.String),
    afterDescriptionIfBody: dart.finalFieldType(core.String),
    afterDescription: dart.finalFieldType(core.String),
    beforeProperties: dart.finalFieldType(core.String),
    afterProperties: dart.finalFieldType(core.String),
    mandatoryAfterProperties: dart.finalFieldType(core.String),
    propertySeparator: dart.finalFieldType(core.String),
    bodyIndent: dart.finalFieldType(core.String),
    showChildren: dart.finalFieldType(core.bool),
    addBlankLineIfNoChildren: dart.finalFieldType(core.bool),
    isNameOnOwnLine: dart.finalFieldType(core.bool),
    footer: dart.finalFieldType(core.String),
    mandatoryFooter: dart.finalFieldType(core.String),
    isBlankLineBetweenPropertiesAndChildren: dart.finalFieldType(core.bool)
  }));
  var C25;
  var C26;
  var C27;
  var C28;
  diagnostics$._WordWrapParseMode = class _WordWrapParseMode extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (diagnostics$._WordWrapParseMode.new = function(index, _name) {
    if (index == null) dart.nullFailed(L1, 776, 6, "index");
    if (_name == null) dart.nullFailed(L1, 776, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = diagnostics$._WordWrapParseMode.prototype;
  dart.addTypeTests(diagnostics$._WordWrapParseMode);
  dart.addTypeCaches(diagnostics$._WordWrapParseMode);
  dart.setLibraryUri(diagnostics$._WordWrapParseMode, L2);
  dart.setFieldSignature(diagnostics$._WordWrapParseMode, () => ({
    __proto__: dart.getFields(diagnostics$._WordWrapParseMode.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(diagnostics$._WordWrapParseMode, ['toString']);
  diagnostics$._WordWrapParseMode.inSpace = C25 || CT.C25;
  diagnostics$._WordWrapParseMode.inWord = C26 || CT.C26;
  diagnostics$._WordWrapParseMode.atBreak = C27 || CT.C27;
  diagnostics$._WordWrapParseMode.values = C28 || CT.C28;
  var _nextPrefixOtherLines = dart.privateName(diagnostics$, "_nextPrefixOtherLines");
  var _buffer = dart.privateName(diagnostics$, "_buffer");
  var _currentLine = dart.privateName(diagnostics$, "_currentLine");
  var _wrappableRanges = dart.privateName(diagnostics$, "_wrappableRanges");
  var _numLines = dart.privateName(diagnostics$, "_numLines");
  var _prefixOtherLines = dart.privateName(diagnostics$, "_prefixOtherLines");
  var _getCurrentPrefix = dart.privateName(diagnostics$, "_getCurrentPrefix");
  var _writeLine = dart.privateName(diagnostics$, "_writeLine");
  var _finalizeLine = dart.privateName(diagnostics$, "_finalizeLine");
  var _updatePrefix = dart.privateName(diagnostics$, "_updatePrefix");
  diagnostics$._PrefixedStringBuilder = class _PrefixedStringBuilder extends core.Object {
    get prefixOtherLines() {
      let t0;
      t0 = this[_nextPrefixOtherLines];
      return t0 == null ? this[_prefixOtherLines] : t0;
    }
    set prefixOtherLines(prefix) {
      this[_prefixOtherLines] = prefix;
      this[_nextPrefixOtherLines] = null;
    }
    incrementPrefixOtherLines(suffix, opts) {
      if (suffix == null) dart.nullFailed(L1, 807, 41, "suffix");
      let updateCurrentLine = opts && 'updateCurrentLine' in opts ? opts.updateCurrentLine : null;
      if (updateCurrentLine == null) dart.nullFailed(L1, 807, 64, "updateCurrentLine");
      if (dart.test(this[_currentLine].isEmpty) || dart.test(updateCurrentLine)) {
        this[_prefixOtherLines] = dart.nullCheck(this.prefixOtherLines) + dart.notNull(suffix);
        this[_nextPrefixOtherLines] = null;
      } else {
        this[_nextPrefixOtherLines] = dart.nullCheck(this.prefixOtherLines) + dart.notNull(suffix);
      }
    }
    get requiresMultipleLines() {
      return dart.notNull(this[_numLines]) > 1 || this[_numLines] === 1 && dart.test(this[_currentLine].isNotEmpty) || dart.notNull(this[_currentLine].length) + dart.nullCheck(this[_getCurrentPrefix](true)).length > dart.nullCheck(this.wrapWidth);
    }
    get isCurrentLineEmpty() {
      return this[_currentLine].isEmpty;
    }
    [_finalizeLine](addTrailingLineBreak) {
      if (addTrailingLineBreak == null) dart.nullFailed(L1, 834, 27, "addTrailingLineBreak");
      let firstLine = this[_buffer].isEmpty;
      let text = dart.toString(this[_currentLine]);
      this[_currentLine].clear();
      if (dart.test(this[_wrappableRanges][$isEmpty])) {
        this[_writeLine](text, {includeLineBreak: addTrailingLineBreak, firstLine: firstLine});
        return;
      }
      let lines = diagnostics$._PrefixedStringBuilder._wordWrapLine(text, this[_wrappableRanges], dart.nullCheck(this.wrapWidth), {startOffset: dart.test(firstLine) ? this.prefixLineOne.length : dart.nullCheck(this[_prefixOtherLines]).length, otherLineOffset: dart.test(firstLine) ? dart.nullCheck(this[_prefixOtherLines]).length : dart.nullCheck(this[_prefixOtherLines]).length});
      let i = 0;
      let length = lines[$length];
      for (let line of lines) {
        i = i + 1;
        this[_writeLine](line, {includeLineBreak: dart.test(addTrailingLineBreak) || i < dart.notNull(length), firstLine: firstLine});
      }
      this[_wrappableRanges][$clear]();
    }
    static _wordWrapLine(message, wrapRanges, width, opts) {
      if (message == null) dart.nullFailed(L1, 878, 48, "message");
      if (wrapRanges == null) dart.nullFailed(L1, 878, 67, "wrapRanges");
      if (width == null) dart.nullFailed(L1, 878, 83, "width");
      let startOffset = opts && 'startOffset' in opts ? opts.startOffset : 0;
      if (startOffset == null) dart.nullFailed(L1, 878, 96, "startOffset");
      let otherLineOffset = opts && 'otherLineOffset' in opts ? opts.otherLineOffset : 0;
      if (otherLineOffset == null) dart.nullFailed(L1, 878, 117, "otherLineOffset");
      return new (SyncIterableOfString()).new(function* _wordWrapLine() {
        if (message.length + dart.notNull(startOffset) < dart.notNull(width)) {
          yield message;
          return;
        }
        let startForLengthCalculations = -dart.notNull(startOffset);
        let addPrefix = false;
        let index = 0;
        let mode = diagnostics$._WordWrapParseMode.inSpace;
        let lastWordStart = null;
        let lastWordStart$35isSet = false;
        function lastWordStart$35get() {
          return lastWordStart$35isSet ? lastWordStart : dart.throw(new _internal.LateError.localNI("lastWordStart"));
        }
        dart.fn(lastWordStart$35get, VoidToint());
        function lastWordStart$35set(t3) {
          if (t3 == null) dart.nullFailed(L1, 888, 14, "null");
          lastWordStart$35isSet = true;
          return lastWordStart = t3;
        }
        dart.fn(lastWordStart$35set, intTodynamic());
        let lastWordEnd = null;
        let start = 0;
        let currentChunk = 0;
        function noWrap(index) {
          if (index == null) dart.nullFailed(L1, 895, 21, "index");
          while (true) {
            if (currentChunk >= dart.notNull(wrapRanges[$length])) return true;
            if (dart.notNull(index) < dart.notNull(wrapRanges[$_get](currentChunk + 1))) break;
            currentChunk = currentChunk + 2;
          }
          return dart.notNull(index) < dart.notNull(wrapRanges[$_get](currentChunk));
        }
        dart.fn(noWrap, intTobool());
        while (true) {
          switch (mode) {
            case C25 || CT.C25:
            {
              while (index < message.length && message[$_get](index) === " ")
                index = index + 1;
              lastWordStart$35set(index);
              mode = diagnostics$._WordWrapParseMode.inWord;
              break;
            }
            case C26 || CT.C26:
            {
              while (index < message.length && (message[$_get](index) !== " " || dart.test(noWrap(index))))
                index = index + 1;
              mode = diagnostics$._WordWrapParseMode.atBreak;
              break;
            }
            case C27 || CT.C27:
            {
              if (index - startForLengthCalculations > dart.notNull(width) || index === message.length) {
                if (index - startForLengthCalculations <= dart.notNull(width) || lastWordEnd == null) {
                  lastWordEnd = index;
                }
                let line = message[$substring](start, lastWordEnd);
                yield line;
                addPrefix = true;
                if (dart.notNull(lastWordEnd) >= message.length) return;
                if (lastWordEnd === index) {
                  while (index < message.length && message[$_get](index) === " ")
                    index = index + 1;
                  start = index;
                  mode = diagnostics$._WordWrapParseMode.inWord;
                } else {
                  if (!(dart.notNull(lastWordStart$35get()) > dart.notNull(lastWordEnd))) dart.assertFailed(null, L1, 943, 22, "lastWordStart > lastWordEnd");
                  start = lastWordStart$35get();
                  mode = diagnostics$._WordWrapParseMode.atBreak;
                }
                startForLengthCalculations = dart.notNull(start) - dart.notNull(otherLineOffset);
                if (!addPrefix) dart.assertFailed(null, L1, 948, 20, "addPrefix");
                lastWordEnd = null;
              } else {
                lastWordEnd = index;
                mode = diagnostics$._WordWrapParseMode.inSpace;
              }
              break;
            }
            default:
            {
              dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
            }
          }
        }
      });
    }
    write(s, opts) {
      let t5;
      if (s == null) dart.nullFailed(L1, 966, 21, "s");
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : false;
      if (allowWrap == null) dart.nullFailed(L1, 966, 30, "allowWrap");
      if (s[$isEmpty]) return;
      let lines = s[$split]("\n");
      for (let i = 0; i < dart.notNull(lines[$length]); i = i + 1) {
        if (i > 0) {
          this[_finalizeLine](true);
          this[_updatePrefix]();
        }
        let line = lines[$_get](i);
        if (line[$isNotEmpty]) {
          if (dart.test(allowWrap) && this.wrapWidth != null) {
            let wrapStart = this[_currentLine].length;
            let wrapEnd = dart.notNull(wrapStart) + line.length;
            if (dart.test(this[_wrappableRanges][$isNotEmpty]) && this[_wrappableRanges][$last] == wrapStart) {
              this[_wrappableRanges][$last] = wrapEnd;
            } else {
              t5 = this[_wrappableRanges];
              (() => {
                t5[$add](wrapStart);
                t5[$add](wrapEnd);
                return t5;
              })();
            }
          }
          this[_currentLine].write(line);
        }
      }
    }
    [_updatePrefix]() {
      if (this[_nextPrefixOtherLines] != null) {
        this[_prefixOtherLines] = this[_nextPrefixOtherLines];
        this[_nextPrefixOtherLines] = null;
      }
    }
    [_writeLine](line, opts) {
      if (line == null) dart.nullFailed(L1, 1000, 12, "line");
      let includeLineBreak = opts && 'includeLineBreak' in opts ? opts.includeLineBreak : null;
      if (includeLineBreak == null) dart.nullFailed(L1, 1001, 19, "includeLineBreak");
      let firstLine = opts && 'firstLine' in opts ? opts.firstLine : null;
      if (firstLine == null) dart.nullFailed(L1, 1002, 19, "firstLine");
      line = dart.str(this[_getCurrentPrefix](firstLine)) + dart.str(line);
      this[_buffer].write(line[$trimRight]());
      if (dart.test(includeLineBreak)) this[_buffer].write("\n");
      this[_numLines] = dart.notNull(this[_numLines]) + 1;
    }
    [_getCurrentPrefix](firstLine) {
      if (firstLine == null) dart.nullFailed(L1, 1011, 34, "firstLine");
      return dart.test(this[_buffer].isEmpty) ? this.prefixLineOne : dart.test(firstLine) ? this[_prefixOtherLines] : this[_prefixOtherLines];
    }
    writeRawLines(lines) {
      if (lines == null) dart.nullFailed(L1, 1017, 29, "lines");
      if (lines[$isEmpty]) return;
      if (dart.test(this[_currentLine].isNotEmpty)) {
        this[_finalizeLine](true);
      }
      if (!dart.test(this[_currentLine].isEmpty)) dart.assertFailed(null, L1, 1024, 13, "_currentLine.isEmpty");
      this[_buffer].write(lines);
      if (!lines[$endsWith]("\n")) this[_buffer].write("\n");
      this[_numLines] = dart.notNull(this[_numLines]) + 1;
      this[_updatePrefix]();
    }
    writeStretched(text, targetLineLength) {
      if (text == null) dart.nullFailed(L1, 1034, 30, "text");
      if (targetLineLength == null) dart.nullFailed(L1, 1034, 40, "targetLineLength");
      this.write(text);
      let currentLineLength = dart.notNull(this[_currentLine].length) + dart.nullCheck(this[_getCurrentPrefix](this[_buffer].isEmpty)).length;
      if (!(dart.notNull(this[_currentLine].length) > 0)) dart.assertFailed(null, L1, 1037, 13, "_currentLine.length > 0");
      let targetLength = dart.notNull(targetLineLength) - currentLineLength;
      if (targetLength > 0) {
        if (!text[$isNotEmpty]) dart.assertFailed(null, L1, 1040, 14, "text.isNotEmpty");
        let lastChar = text[$_get](text.length - 1);
        if (!(lastChar !== "\n")) dart.assertFailed(null, L1, 1042, 14, "lastChar != '\\n'");
        this[_currentLine].write(lastChar[$times](targetLength));
      }
      this[_wrappableRanges][$clear]();
    }
    build() {
      if (dart.test(this[_currentLine].isNotEmpty)) this[_finalizeLine](false);
      return dart.toString(this[_buffer]);
    }
  };
  (diagnostics$._PrefixedStringBuilder.new = function(opts) {
    let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : null;
    if (prefixLineOne == null) dart.nullFailed(L1, 787, 19, "prefixLineOne");
    let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    this[_nextPrefixOtherLines] = null;
    this[_buffer] = new core.StringBuffer.new();
    this[_currentLine] = new core.StringBuffer.new();
    this[_wrappableRanges] = JSArrayOfint().of([]);
    this[_numLines] = 0;
    this.prefixLineOne = prefixLineOne;
    this.wrapWidth = wrapWidth;
    this[_prefixOtherLines] = prefixOtherLines;
    ;
  }).prototype = diagnostics$._PrefixedStringBuilder.prototype;
  dart.addTypeTests(diagnostics$._PrefixedStringBuilder);
  dart.addTypeCaches(diagnostics$._PrefixedStringBuilder);
  dart.setMethodSignature(diagnostics$._PrefixedStringBuilder, () => ({
    __proto__: dart.getMethods(diagnostics$._PrefixedStringBuilder.__proto__),
    incrementPrefixOtherLines: dart.fnType(dart.void, [core.String], {}, {updateCurrentLine: core.bool}),
    [_finalizeLine]: dart.fnType(dart.void, [core.bool]),
    write: dart.fnType(dart.void, [core.String], {allowWrap: core.bool}, {}),
    [_updatePrefix]: dart.fnType(dart.void, []),
    [_writeLine]: dart.fnType(dart.void, [core.String], {}, {firstLine: core.bool, includeLineBreak: core.bool}),
    [_getCurrentPrefix]: dart.fnType(dart.nullable(core.String), [core.bool]),
    writeRawLines: dart.fnType(dart.void, [core.String]),
    writeStretched: dart.fnType(dart.void, [core.String, core.int]),
    build: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(diagnostics$._PrefixedStringBuilder, () => ({
    __proto__: dart.getGetters(diagnostics$._PrefixedStringBuilder.__proto__),
    prefixOtherLines: dart.nullable(core.String),
    requiresMultipleLines: core.bool,
    isCurrentLineEmpty: core.bool
  }));
  dart.setSetterSignature(diagnostics$._PrefixedStringBuilder, () => ({
    __proto__: dart.getSetters(diagnostics$._PrefixedStringBuilder.__proto__),
    prefixOtherLines: dart.nullable(core.String)
  }));
  dart.setLibraryUri(diagnostics$._PrefixedStringBuilder, L2);
  dart.setFieldSignature(diagnostics$._PrefixedStringBuilder, () => ({
    __proto__: dart.getFields(diagnostics$._PrefixedStringBuilder.__proto__),
    prefixLineOne: dart.finalFieldType(core.String),
    [_prefixOtherLines]: dart.fieldType(dart.nullable(core.String)),
    [_nextPrefixOtherLines]: dart.fieldType(dart.nullable(core.String)),
    wrapWidth: dart.finalFieldType(dart.nullable(core.int)),
    [_buffer]: dart.finalFieldType(core.StringBuffer),
    [_currentLine]: dart.finalFieldType(core.StringBuffer),
    [_wrappableRanges]: dart.finalFieldType(core.List$(core.int)),
    [_numLines]: dart.fieldType(core.int)
  }));
  diagnostics$._NoDefaultValue = class _NoDefaultValue extends core.Object {};
  (diagnostics$._NoDefaultValue.new = function() {
    ;
  }).prototype = diagnostics$._NoDefaultValue.prototype;
  dart.addTypeTests(diagnostics$._NoDefaultValue);
  dart.addTypeCaches(diagnostics$._NoDefaultValue);
  dart.setLibraryUri(diagnostics$._NoDefaultValue, L2);
  var _minLevel = dart.privateName(diagnostics$, "_minLevel");
  var _wrapWidth = dart.privateName(diagnostics$, "_wrapWidth");
  var _wrapWidthProperties = dart.privateName(diagnostics$, "_wrapWidthProperties");
  var _maxDescendentsTruncatableNode = dart.privateName(diagnostics$, "_maxDescendentsTruncatableNode");
  var _childTextConfiguration = dart.privateName(diagnostics$, "_childTextConfiguration");
  var _debugRender = dart.privateName(diagnostics$, "_debugRender");
  diagnostics$.TextTreeRenderer = class TextTreeRenderer extends core.Object {
    [_childTextConfiguration](child, textStyle) {
      if (child == null) dart.nullFailed(L1, 1109, 21, "child");
      if (textStyle == null) dart.nullFailed(L1, 1110, 27, "textStyle");
      let childStyle = child.style;
      return dart.test(diagnostics$._isSingleLine(childStyle)) || dart.equals(childStyle, diagnostics$.DiagnosticsTreeStyle.errorProperty) ? textStyle : child.textTreeConfiguration;
    }
    render(node, opts) {
      if (node == null) dart.nullFailed(L1, 1118, 21, "node");
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      if (prefixLineOne == null) dart.nullFailed(L1, 1119, 12, "prefixLineOne");
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (false) {
        return "";
      } else {
        return this[_debugRender](node, {prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, parentConfiguration: parentConfiguration});
      }
    }
    [_debugRender](node, opts) {
      let t5, t5$, t5$0;
      if (node == null) dart.nullFailed(L1, 1135, 21, "node");
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      if (prefixLineOne == null) dart.nullFailed(L1, 1136, 12, "prefixLineOne");
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let isSingleLine = dart.test(diagnostics$._isSingleLine(node.style)) && !dart.equals((t5 = parentConfiguration, t5 == null ? null : t5.lineBreakProperties), true);
      prefixOtherLines == null ? prefixOtherLines = prefixLineOne : null;
      if (node.linePrefix != null) {
        prefixLineOne = dart.notNull(prefixLineOne) + dart.nullCheck(node.linePrefix);
        prefixOtherLines = dart.notNull(prefixOtherLines) + dart.nullCheck(node.linePrefix);
      }
      let config = dart.nullCheck(node.textTreeConfiguration);
      if (prefixOtherLines[$isEmpty]) prefixOtherLines = dart.notNull(prefixOtherLines) + dart.notNull(config.prefixOtherLinesRootNode);
      if (dart.equals(node.style, diagnostics$.DiagnosticsTreeStyle.truncateChildren)) {
        let descendants = JSArrayOfString().of([]);
        let depth = 0;
        let lines = 0;
        function visitor(node) {
          if (node == null) dart.nullFailed(L1, 1159, 36, "node");
          for (let child of node.getChildren()) {
            if (lines < 25) {
              depth = depth + 1;
              descendants[$add](dart.str(prefixOtherLines) + "  "[$times](depth) + dart.str(child));
              if (depth < 5) visitor(child);
              depth = depth - 1;
            } else if (lines === 25) {
              descendants[$add](dart.str(prefixOtherLines) + "  ...(descendants list truncated after " + dart.str(lines) + " lines)");
            }
            lines = lines + 1;
          }
        }
        dart.fn(visitor, DiagnosticsNodeTovoid());
        visitor(node);
        let information = new core.StringBuffer.new(prefixLineOne);
        if (lines > 1) {
          information.writeln("This " + dart.str(node.name) + " had the following descendants (showing up to depth " + dart.str(5) + "):");
        } else if (descendants[$length] === 1) {
          information.writeln("This " + dart.str(node.name) + " had the following child:");
        } else {
          information.writeln("This " + dart.str(node.name) + " has no descendants.");
        }
        information.writeAll(descendants, "\n");
        return information.toString();
      }
      let builder = new diagnostics$._PrefixedStringBuilder.new({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, wrapWidth: math.max(core.int, this[_wrapWidth], prefixOtherLines.length + dart.notNull(this[_wrapWidthProperties]))});
      let children = node.getChildren();
      let description = node.toDescription({parentConfiguration: parentConfiguration});
      if (config.beforeName[$isNotEmpty]) {
        builder.write(config.beforeName);
      }
      let wrapName = !isSingleLine && dart.test(node.allowNameWrap);
      let wrapDescription = !isSingleLine && dart.test(node.allowWrap);
      let uppercaseTitle = dart.equals(node.style, diagnostics$.DiagnosticsTreeStyle.error);
      let name = node.name;
      if (uppercaseTitle) {
        name = (t5$ = name, t5$ == null ? null : t5$[$toUpperCase]());
      }
      if (description == null || description[$isEmpty]) {
        if (dart.test(node.showName) && name != null) builder.write(name, {allowWrap: wrapName});
      } else {
        let includeName = false;
        if (name != null && name[$isNotEmpty] && dart.test(node.showName)) {
          includeName = true;
          builder.write(name, {allowWrap: wrapName});
          if (dart.test(node.showSeparator)) builder.write(config.afterName, {allowWrap: wrapName});
          builder.write(dart.test(config.isNameOnOwnLine) || description[$contains]("\n") ? "\n" : " ", {allowWrap: wrapName});
        }
        if (!isSingleLine && dart.test(builder.requiresMultipleLines) && !dart.test(builder.isCurrentLineEmpty)) {
          builder.write("\n");
        }
        if (includeName) {
          builder.incrementPrefixOtherLines(dart.test(children[$isEmpty]) ? config.propertyPrefixNoChildren : config.propertyPrefixIfChildren, {updateCurrentLine: true});
        }
        if (uppercaseTitle) {
          description = description[$toUpperCase]();
        }
        builder.write(description[$trimRight](), {allowWrap: wrapDescription});
        if (!includeName) {
          builder.incrementPrefixOtherLines(dart.test(children[$isEmpty]) ? config.propertyPrefixNoChildren : config.propertyPrefixIfChildren, {updateCurrentLine: false});
        }
      }
      if (config.suffixLineOne[$isNotEmpty]) {
        builder.writeStretched(config.suffixLineOne, dart.nullCheck(builder.wrapWidth));
      }
      let propertiesIterable = node.getProperties()[$where](dart.fn(n => {
        if (n == null) dart.nullFailed(L1, 1249, 30, "n");
        return !dart.test(n.isFiltered(this[_minLevel]));
      }, DiagnosticsNodeTobool()));
      let properties = null;
      if (dart.notNull(this[_maxDescendentsTruncatableNode]) >= 0 && dart.test(node.allowTruncate)) {
        if (dart.notNull(propertiesIterable[$length]) < dart.notNull(this[_maxDescendentsTruncatableNode])) {
          properties = propertiesIterable[$take](this[_maxDescendentsTruncatableNode])[$toList]();
          properties[$add](diagnostics$.DiagnosticsNode.message("..."));
        } else {
          properties = propertiesIterable[$toList]();
        }
        if (dart.notNull(this[_maxDescendentsTruncatableNode]) < dart.notNull(children[$length])) {
          children = children[$take](this[_maxDescendentsTruncatableNode])[$toList]();
          children[$add](diagnostics$.DiagnosticsNode.message("..."));
        }
      } else {
        properties = propertiesIterable[$toList]();
      }
      if ((dart.test(properties[$isNotEmpty]) || dart.test(children[$isNotEmpty]) || node.emptyBodyDescription != null) && (dart.test(node.showSeparator) || dart.equals((t5$0 = description, t5$0 == null ? null : t5$0[$isNotEmpty]), true))) {
        builder.write(config.afterDescriptionIfBody);
      }
      if (dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      if (dart.test(properties[$isNotEmpty])) builder.write(config.beforeProperties);
      builder.incrementPrefixOtherLines(config.bodyIndent, {updateCurrentLine: false});
      if (node.emptyBodyDescription != null && dart.test(properties[$isEmpty]) && dart.test(children[$isEmpty]) && prefixLineOne[$isNotEmpty]) {
        builder.write(dart.nullCheck(node.emptyBodyDescription));
        if (dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      }
      for (let i = 0; i < dart.notNull(properties[$length]); i = i + 1) {
        let property = properties[$_get](i);
        if (i > 0) builder.write(config.propertySeparator);
        let propertyStyle = dart.nullCheck(property.textTreeConfiguration);
        if (dart.test(diagnostics$._isSingleLine(property.style))) {
          let propertyRender = this.render(property, {prefixLineOne: propertyStyle.prefixLineOne, prefixOtherLines: dart.str(propertyStyle.childLinkSpace) + dart.str(propertyStyle.prefixOtherLines), parentConfiguration: config});
          let propertyLines = propertyRender[$split]("\n");
          if (propertyLines[$length] === 1 && !dart.test(config.lineBreakProperties)) {
            builder.write(propertyLines[$first]);
          } else {
            builder.write(propertyRender, {allowWrap: false});
            if (!propertyRender[$endsWith]("\n")) builder.write("\n");
          }
        } else {
          let propertyRender = this.render(property, {prefixLineOne: dart.str(builder.prefixOtherLines) + dart.str(propertyStyle.prefixLineOne), prefixOtherLines: dart.str(builder.prefixOtherLines) + dart.str(propertyStyle.childLinkSpace) + dart.str(propertyStyle.prefixOtherLines), parentConfiguration: config});
          builder.writeRawLines(propertyRender);
        }
      }
      if (dart.test(properties[$isNotEmpty])) builder.write(config.afterProperties);
      builder.write(config.mandatoryAfterProperties);
      if (!dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      let prefixChildren = config.bodyIndent;
      let prefixChildrenRaw = dart.str(prefixOtherLines) + dart.str(prefixChildren);
      if (dart.test(children[$isEmpty]) && dart.test(config.addBlankLineIfNoChildren) && dart.test(builder.requiresMultipleLines) && dart.nullCheck(builder.prefixOtherLines)[$trimRight]()[$isNotEmpty]) {
        builder.write(config.lineBreak);
      }
      if (dart.test(children[$isNotEmpty]) && dart.test(config.showChildren)) {
        if (dart.test(config.isBlankLineBetweenPropertiesAndChildren) && dart.test(properties[$isNotEmpty]) && dart.test(dart.nullCheck(children[$first].textTreeConfiguration).isBlankLineBetweenPropertiesAndChildren)) {
          builder.write(config.lineBreak);
        }
        builder.prefixOtherLines = prefixOtherLines;
        for (let i = 0; i < dart.notNull(children[$length]); i = i + 1) {
          let child = children[$_get](i);
          if (!(child != null)) dart.assertFailed(null, L1, 1354, 16, "child != null");
          let childConfig = dart.nullCheck(this[_childTextConfiguration](child, config));
          if (i === dart.notNull(children[$length]) - 1) {
            let lastChildPrefixLineOne = prefixChildrenRaw + dart.str(childConfig.prefixLastChildLineOne);
            let childPrefixOtherLines = prefixChildrenRaw + dart.str(childConfig.childLinkSpace) + dart.str(childConfig.prefixOtherLines);
            builder.writeRawLines(this.render(child, {prefixLineOne: lastChildPrefixLineOne, prefixOtherLines: childPrefixOtherLines, parentConfiguration: config}));
            if (childConfig.footer[$isNotEmpty]) {
              builder.prefixOtherLines = prefixChildrenRaw;
              builder.write(dart.str(childConfig.childLinkSpace) + dart.str(childConfig.footer));
              if (childConfig.mandatoryFooter[$isNotEmpty]) {
                builder.writeStretched(childConfig.mandatoryFooter, math.max(core.int, dart.nullCheck(builder.wrapWidth), dart.notNull(this[_wrapWidthProperties]) + childPrefixOtherLines.length));
              }
              builder.write(config.lineBreak);
            }
          } else {
            let nextChildStyle = dart.nullCheck(this[_childTextConfiguration](children[$_get](i + 1), config));
            let childPrefixLineOne = prefixChildrenRaw + dart.str(childConfig.prefixLineOne);
            let childPrefixOtherLines = prefixChildrenRaw + dart.str(nextChildStyle.linkCharacter) + dart.str(childConfig.prefixOtherLines);
            builder.writeRawLines(this.render(child, {prefixLineOne: childPrefixLineOne, prefixOtherLines: childPrefixOtherLines, parentConfiguration: config}));
            if (childConfig.footer[$isNotEmpty]) {
              builder.prefixOtherLines = prefixChildrenRaw;
              builder.write(dart.str(childConfig.linkCharacter) + dart.str(childConfig.footer));
              if (childConfig.mandatoryFooter[$isNotEmpty]) {
                builder.writeStretched(childConfig.mandatoryFooter, math.max(core.int, dart.nullCheck(builder.wrapWidth), dart.notNull(this[_wrapWidthProperties]) + childPrefixOtherLines.length));
              }
              builder.write(config.lineBreak);
            }
          }
        }
      }
      if (parentConfiguration == null && config.mandatoryFooter[$isNotEmpty]) {
        builder.writeStretched(config.mandatoryFooter, dart.nullCheck(builder.wrapWidth));
        builder.write(config.lineBreak);
      }
      return builder.build();
    }
  };
  (diagnostics$.TextTreeRenderer.new = function(opts) {
    let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C4 || CT.C4;
    if (minLevel == null) dart.nullFailed(L1, 1087, 21, "minLevel");
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : 100;
    if (wrapWidth == null) dart.nullFailed(L1, 1088, 9, "wrapWidth");
    let wrapWidthProperties = opts && 'wrapWidthProperties' in opts ? opts.wrapWidthProperties : 65;
    if (wrapWidthProperties == null) dart.nullFailed(L1, 1089, 9, "wrapWidthProperties");
    let maxDescendentsTruncatableNode = opts && 'maxDescendentsTruncatableNode' in opts ? opts.maxDescendentsTruncatableNode : -1;
    if (maxDescendentsTruncatableNode == null) dart.nullFailed(L1, 1090, 9, "maxDescendentsTruncatableNode");
    if (!(minLevel != null)) dart.assertFailed(null, L1, 1091, 15, "minLevel != null");
    this[_minLevel] = minLevel;
    this[_wrapWidth] = wrapWidth;
    this[_wrapWidthProperties] = wrapWidthProperties;
    this[_maxDescendentsTruncatableNode] = maxDescendentsTruncatableNode;
    ;
  }).prototype = diagnostics$.TextTreeRenderer.prototype;
  dart.addTypeTests(diagnostics$.TextTreeRenderer);
  dart.addTypeCaches(diagnostics$.TextTreeRenderer);
  dart.setMethodSignature(diagnostics$.TextTreeRenderer, () => ({
    __proto__: dart.getMethods(diagnostics$.TextTreeRenderer.__proto__),
    [_childTextConfiguration]: dart.fnType(dart.nullable(diagnostics$.TextTreeConfiguration), [diagnostics$.DiagnosticsNode, diagnostics$.TextTreeConfiguration]),
    render: dart.fnType(core.String, [diagnostics$.DiagnosticsNode], {parentConfiguration: dart.nullable(diagnostics$.TextTreeConfiguration), prefixLineOne: core.String, prefixOtherLines: dart.nullable(core.String)}, {}),
    [_debugRender]: dart.fnType(core.String, [diagnostics$.DiagnosticsNode], {parentConfiguration: dart.nullable(diagnostics$.TextTreeConfiguration), prefixLineOne: core.String, prefixOtherLines: dart.nullable(core.String)}, {})
  }));
  dart.setLibraryUri(diagnostics$.TextTreeRenderer, L2);
  dart.setFieldSignature(diagnostics$.TextTreeRenderer, () => ({
    __proto__: dart.getFields(diagnostics$.TextTreeRenderer.__proto__),
    [_wrapWidth]: dart.finalFieldType(core.int),
    [_wrapWidthProperties]: dart.finalFieldType(core.int),
    [_minLevel]: dart.finalFieldType(diagnostics$.DiagnosticLevel),
    [_maxDescendentsTruncatableNode]: dart.finalFieldType(core.int)
  }));
  var _separator = dart.privateName(diagnostics$, "_separator");
  var C29;
  var name$ = dart.privateName(diagnostics$, "DiagnosticsNode.name");
  var showSeparator$ = dart.privateName(diagnostics$, "DiagnosticsNode.showSeparator");
  var showName$ = dart.privateName(diagnostics$, "DiagnosticsNode.showName");
  var linePrefix$ = dart.privateName(diagnostics$, "DiagnosticsNode.linePrefix");
  var style$ = dart.privateName(diagnostics$, "DiagnosticsNode.style");
  diagnostics$.DiagnosticsNode = class DiagnosticsNode extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get showSeparator() {
      return this[showSeparator$];
    }
    set showSeparator(value) {
      super.showSeparator = value;
    }
    get showName() {
      return this[showName$];
    }
    set showName(value) {
      super.showName = value;
    }
    get linePrefix() {
      return this[linePrefix$];
    }
    set linePrefix(value) {
      super.linePrefix = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    static message(message, opts) {
      if (message == null) dart.nullFailed(L1, 1451, 12, "message");
      let style = opts && 'style' in opts ? opts.style : C20 || CT.C20;
      if (style == null) dart.nullFailed(L1, 1452, 26, "style");
      let level = opts && 'level' in opts ? opts.level : C5 || CT.C5;
      if (level == null) dart.nullFailed(L1, 1453, 21, "level");
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
      if (allowWrap == null) dart.nullFailed(L1, 1454, 10, "allowWrap");
      if (!(style != null)) dart.assertFailed(null, L1, 1456, 12, "style != null");
      if (!(level != null)) dart.assertFailed(null, L1, 1457, 12, "level != null");
      return new (DiagnosticsPropertyOfvoid()).new("", null, {description: message, style: style, showName: false, allowWrap: allowWrap, level: level});
    }
    isFiltered(minLevel) {
      if (minLevel == null) dart.nullFailed(L1, 1494, 35, "minLevel");
      return false || dart.notNull(this.level.index) < dart.notNull(minLevel.index);
    }
    get level() {
      return false ? diagnostics$.DiagnosticLevel.hidden : diagnostics$.DiagnosticLevel.info;
    }
    get emptyBodyDescription() {
      return null;
    }
    get allowWrap() {
      return false;
    }
    get allowNameWrap() {
      return false;
    }
    get allowTruncate() {
      return false;
    }
    get [_separator]() {
      return dart.test(this.showSeparator) ? ":" : "";
    }
    toJsonMap(delegate) {
      if (delegate == null) dart.nullFailed(L1, 1563, 67, "delegate");
      let result = new (IdentityMapOfString$ObjectN()).new();
      if (!dart.test(dart.fn(() => {
        let t6;
        let hasChildren = this.getChildren()[$isNotEmpty];
        result = (() => {
          let t5 = new (IdentityMapOfString$ObjectN()).new();
          t5[$_set]("description", this.toDescription());
          t5[$_set]("type", dart.toString(this[$runtimeType]));
          if (this.name != null) t5[$_set]("name", this.name);
          if (!dart.test(this.showSeparator)) t5[$_set]("showSeparator", this.showSeparator);
          if (!dart.equals(this.level, diagnostics$.DiagnosticLevel.info)) t5[$_set]("level", diagnostics$.describeEnum(this.level));
          if (dart.equals(this.showName, false)) t5[$_set]("showName", this.showName);
          if (this.emptyBodyDescription != null) t5[$_set]("emptyBodyDescription", this.emptyBodyDescription);
          if (!dart.equals(this.style, diagnostics$.DiagnosticsTreeStyle.sparse)) t5[$_set]("style", diagnostics$.describeEnum(dart.nullCheck(this.style)));
          if (dart.test(this.allowTruncate)) t5[$_set]("allowTruncate", this.allowTruncate);
          if (dart.test(hasChildren)) t5[$_set]("hasChildren", hasChildren);
          if (dart.equals((t6 = this.linePrefix, t6 == null ? null : t6[$isNotEmpty]), true)) t5[$_set]("linePrefix", this.linePrefix);
          if (!dart.test(this.allowWrap)) t5[$_set]("allowWrap", this.allowWrap);
          if (dart.test(this.allowNameWrap)) t5[$_set]("allowNameWrap", this.allowNameWrap);
          for (let t6$ of delegate.additionalNodeProperties(this)[$entries])
            t5[$_set](t6$.key, t6$.value);
          if (dart.test(delegate.includeProperties)) t5[$_set]("properties", diagnostics$.DiagnosticsNode.toJsonList(delegate.filterProperties(this.getProperties(), this), this, delegate));
          if (dart.notNull(delegate.subtreeDepth) > 0) t5[$_set]("children", diagnostics$.DiagnosticsNode.toJsonList(delegate.filterChildren(this.getChildren(), this), this, delegate));
          return t5;
        })();
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L1, 1565, 12, "() {\n      final bool hasChildren = getChildren().isNotEmpty;\n      result = <String, Object?>{\n        'description': toDescription(),\n        'type': runtimeType.toString(),\n        if (name != null)\n          'name': name,\n        if (!showSeparator)\n          'showSeparator': showSeparator,\n        if (level != DiagnosticLevel.info)\n          'level': describeEnum(level),\n        if (showName == false)\n          'showName': showName,\n        if (emptyBodyDescription != null)\n          'emptyBodyDescription': emptyBodyDescription,\n        if (style != DiagnosticsTreeStyle.sparse)\n          'style': describeEnum(style!),\n        if (allowTruncate)\n          'allowTruncate': allowTruncate,\n        if (hasChildren)\n          'hasChildren': hasChildren,\n        if (linePrefix?.isNotEmpty == true)\n          'linePrefix': linePrefix,\n        if (!allowWrap)\n          'allowWrap': allowWrap,\n        if (allowNameWrap)\n          'allowNameWrap': allowNameWrap,\n        ...delegate.additionalNodeProperties(this),\n        if (delegate.includeProperties)\n          'properties': toJsonList(\n            delegate.filterProperties(getProperties(), this),\n            this,\n            delegate,\n          ),\n        if (delegate.subtreeDepth > 0)\n          'children': toJsonList(\n            delegate.filterChildren(getChildren(), this),\n            this,\n            delegate,\n          ),\n      };\n      return true;\n    }()");
      return result;
    }
    static toJsonList(nodes, parent, delegate) {
      if (delegate == null) dart.nullFailed(L1, 1619, 38, "delegate");
      let truncated = false;
      if (nodes == null) return C29 || CT.C29;
      let originalNodeCount = nodes[$length];
      nodes = delegate.truncateNodesList(nodes, parent);
      if (nodes[$length] != originalNodeCount) {
        nodes[$add](diagnostics$.DiagnosticsNode.message("..."));
        truncated = true;
      }
      let json = nodes[$map](MapOfString$ObjectN(), dart.fn(node => {
        if (node == null) dart.nullFailed(L1, 1630, 94, "node");
        return node.toJsonMap(delegate.delegateForNode(node));
      }, DiagnosticsNodeToMapOfString$ObjectN()))[$toList]();
      if (truncated) json[$last][$_set]("truncated", true);
      return json;
    }
    toString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C5 || CT.C5;
      if (minLevel == null) dart.nullFailed(L1, 1653, 21, "minLevel");
      let result = super[$toString]();
      if (!(this.style != null)) dart.assertFailed(null, L1, 1656, 12, "style != null");
      if (!(minLevel != null)) dart.assertFailed(null, L1, 1657, 12, "minLevel != null");
      if (!dart.test(dart.fn(() => {
        if (dart.test(diagnostics$._isSingleLine(this.style))) {
          result = this.toStringDeep({parentConfiguration: parentConfiguration, minLevel: minLevel});
        } else {
          let description = dart.nullCheck(this.toDescription({parentConfiguration: parentConfiguration}));
          if (this.name == null || dart.nullCheck(this.name)[$isEmpty] || !dart.test(this.showName)) {
            result = description;
          } else {
            result = description[$contains]("\n") ? dart.str(this.name) + dart.str(this[_separator]) + "\n" + description : dart.str(this.name) + dart.str(this[_separator]) + " " + description;
          }
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L1, 1658, 12, "() {\n      if (_isSingleLine(style)) {\n        result = toStringDeep(\n            parentConfiguration: parentConfiguration, minLevel: minLevel);\n      } else {\n        final String description = toDescription(parentConfiguration: parentConfiguration)!;\n\n        if (name == null || name!.isEmpty || !showName) {\n          result = description;\n        } else {\n          result = description.contains('\\n') ? '$name$_separator\\n$description'\n              : '$name$_separator $description';\n        }\n      }\n      return true;\n    }()");
      return result;
    }
    get textTreeConfiguration() {
      if (!(this.style != null)) dart.assertFailed(null, L1, 1681, 12, "style != null");
      switch (dart.nullCheck(this.style)) {
        case C12 || CT.C12:
        {
          return null;
        }
        case C15 || CT.C15:
        {
          return diagnostics$.denseTextConfiguration;
        }
        case C13 || CT.C13:
        {
          return diagnostics$.sparseTextConfiguration;
        }
        case C14 || CT.C14:
        {
          return diagnostics$.dashedTextConfiguration;
        }
        case C18 || CT.C18:
        {
          return diagnostics$.whitespaceTextConfiguration;
        }
        case C16 || CT.C16:
        {
          return diagnostics$.transitionTextConfiguration;
        }
        case C20 || CT.C20:
        {
          return diagnostics$.singleLineTextConfiguration;
        }
        case C21 || CT.C21:
        {
          return diagnostics$.errorPropertyTextConfiguration;
        }
        case C22 || CT.C22:
        {
          return diagnostics$.shallowTextConfiguration;
        }
        case C17 || CT.C17:
        {
          return diagnostics$.errorTextConfiguration;
        }
        case C23 || CT.C23:
        {
          return diagnostics$.whitespaceTextConfiguration;
        }
        case C19 || CT.C19:
        {
          return diagnostics$.flatTextConfiguration;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      if (prefixLineOne == null) dart.nullFailed(L1, 1733, 12, "prefixLineOne");
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C4 || CT.C4;
      if (minLevel == null) dart.nullFailed(L1, 1736, 21, "minLevel");
      let result = "";
      if (!dart.test(dart.fn(() => {
        result = new diagnostics$.TextTreeRenderer.new({minLevel: minLevel, wrapWidth: 65, wrapWidthProperties: 65}).render(this, {prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, parentConfiguration: parentConfiguration});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L1, 1739, 12, "() {\n      result = TextTreeRenderer(\n        minLevel: minLevel,\n        wrapWidth: 65,\n        wrapWidthProperties: 65,\n      ).render(\n        this,\n        prefixLineOne: prefixLineOne,\n        prefixOtherLines: prefixOtherLines,\n        parentConfiguration: parentConfiguration,\n      );\n      return true;\n    }()");
      return result;
    }
  };
  (diagnostics$.DiagnosticsNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    if (showName == null) dart.nullFailed(L1, 1426, 10, "showName");
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    if (showSeparator == null) dart.nullFailed(L1, 1427, 10, "showSeparator");
    let linePrefix = opts && 'linePrefix' in opts ? opts.linePrefix : null;
    this[name$] = name;
    this[style$] = style;
    this[showName$] = showName;
    this[showSeparator$] = showSeparator;
    this[linePrefix$] = linePrefix;
    if (!(showName != null)) dart.assertFailed(null, L1, 1429, 15, "showName != null");
    if (!(showSeparator != null)) dart.assertFailed(null, L1, 1430, 15, "showSeparator != null");
    if (!(name == null || !name[$endsWith](":"))) dart.assertFailed("Names of diagnostic nodes must not end with colons.\n" + "name:\n" + "  \"" + dart.str(name) + "\"", L1, 1435, 10, "name == null || !name.endsWith(':')");
    ;
  }).prototype = diagnostics$.DiagnosticsNode.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticsNode);
  dart.addTypeCaches(diagnostics$.DiagnosticsNode);
  dart.setMethodSignature(diagnostics$.DiagnosticsNode, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticsNode.__proto__),
    isFiltered: dart.fnType(core.bool, [diagnostics$.DiagnosticLevel]),
    toJsonMap: dart.fnType(core.Map$(core.String, dart.nullable(core.Object)), [diagnostics$.DiagnosticsSerializationDelegate]),
    toString: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel, parentConfiguration: dart.nullable(diagnostics$.TextTreeConfiguration)}, {}),
    [$toString]: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel, parentConfiguration: dart.nullable(diagnostics$.TextTreeConfiguration)}, {}),
    toStringDeep: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel, parentConfiguration: dart.nullable(diagnostics$.TextTreeConfiguration), prefixLineOne: core.String, prefixOtherLines: dart.nullable(core.String)}, {})
  }));
  dart.setGetterSignature(diagnostics$.DiagnosticsNode, () => ({
    __proto__: dart.getGetters(diagnostics$.DiagnosticsNode.__proto__),
    level: diagnostics$.DiagnosticLevel,
    emptyBodyDescription: dart.nullable(core.String),
    allowWrap: core.bool,
    allowNameWrap: core.bool,
    allowTruncate: core.bool,
    [_separator]: core.String,
    textTreeConfiguration: dart.nullable(diagnostics$.TextTreeConfiguration)
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticsNode, L2);
  dart.setFieldSignature(diagnostics$.DiagnosticsNode, () => ({
    __proto__: dart.getFields(diagnostics$.DiagnosticsNode.__proto__),
    name: dart.finalFieldType(dart.nullable(core.String)),
    showSeparator: dart.finalFieldType(core.bool),
    showName: dart.finalFieldType(core.bool),
    linePrefix: dart.finalFieldType(dart.nullable(core.String)),
    style: dart.finalFieldType(dart.nullable(diagnostics$.DiagnosticsTreeStyle))
  }));
  dart.defineExtensionMethods(diagnostics$.DiagnosticsNode, ['toString']);
  var C30;
  var _exception = dart.privateName(diagnostics$, "_exception");
  var _description = dart.privateName(diagnostics$, "_description");
  var _valueComputed = dart.privateName(diagnostics$, "_valueComputed");
  var _value = dart.privateName(diagnostics$, "_value");
  var _computeValue = dart.privateName(diagnostics$, "_computeValue");
  var _defaultLevel = dart.privateName(diagnostics$, "_defaultLevel");
  var _addTooltip = dart.privateName(diagnostics$, "_addTooltip");
  var _maybeCacheValue = dart.privateName(diagnostics$, "_maybeCacheValue");
  var C31;
  const _is_DiagnosticsProperty_default = Symbol('_is_DiagnosticsProperty_default');
  var expandableValue$ = dart.privateName(diagnostics$, "DiagnosticsProperty.expandableValue");
  var allowWrap$ = dart.privateName(diagnostics$, "DiagnosticsProperty.allowWrap");
  var allowNameWrap$ = dart.privateName(diagnostics$, "DiagnosticsProperty.allowNameWrap");
  var ifNull$ = dart.privateName(diagnostics$, "DiagnosticsProperty.ifNull");
  var ifEmpty$ = dart.privateName(diagnostics$, "DiagnosticsProperty.ifEmpty");
  var tooltip$ = dart.privateName(diagnostics$, "DiagnosticsProperty.tooltip");
  var missingIfNull$ = dart.privateName(diagnostics$, "DiagnosticsProperty.missingIfNull");
  var defaultValue$ = dart.privateName(diagnostics$, "DiagnosticsProperty.defaultValue");
  diagnostics$.DiagnosticsProperty$ = dart.generic(T => {
    var TN = () => (TN = dart.constFn(dart.nullable(T)))();
    class DiagnosticsProperty extends diagnostics$.DiagnosticsNode {
      get expandableValue() {
        return this[expandableValue$];
      }
      set expandableValue(value) {
        super.expandableValue = value;
      }
      get allowWrap() {
        return this[allowWrap$];
      }
      set allowWrap(value) {
        super.allowWrap = value;
      }
      get allowNameWrap() {
        return this[allowNameWrap$];
      }
      set allowNameWrap(value) {
        super.allowNameWrap = value;
      }
      get ifNull() {
        return this[ifNull$];
      }
      set ifNull(value) {
        super.ifNull = value;
      }
      get ifEmpty() {
        return this[ifEmpty$];
      }
      set ifEmpty(value) {
        super.ifEmpty = value;
      }
      get tooltip() {
        return this[tooltip$];
      }
      set tooltip(value) {
        super.tooltip = value;
      }
      get missingIfNull() {
        return this[missingIfNull$];
      }
      set missingIfNull(value) {
        super.missingIfNull = value;
      }
      get defaultValue() {
        return this[defaultValue$];
      }
      set defaultValue(value) {
        super.defaultValue = value;
      }
      toJsonMap(delegate) {
        if (delegate == null) dart.nullFailed(L1, 2682, 67, "delegate");
        let v = this.value;
        let properties = null;
        if (dart.test(delegate.expandPropertyValues) && dart.test(delegate.includeProperties) && diagnostics$.Diagnosticable.is(v) && dart.test(this.getProperties()[$isEmpty])) {
          delegate = delegate.copyWith({subtreeDepth: 0, includeProperties: false});
          properties = diagnostics$.DiagnosticsNode.toJsonList(delegate.filterProperties(v.toDiagnosticsNode().getProperties(), this), this, delegate);
        }
        let json = super.toJsonMap(delegate);
        if (properties != null) {
          json[$_set]("properties", properties);
        }
        if (!dart.equals(this.defaultValue, diagnostics$.kNoDefaultValue)) json[$_set]("defaultValue", dart.toString(this.defaultValue));
        if (this.ifEmpty != null) json[$_set]("ifEmpty", this.ifEmpty);
        if (this.ifNull != null) json[$_set]("ifNull", this.ifNull);
        if (this.tooltip != null) json[$_set]("tooltip", this.tooltip);
        json[$_set]("missingIfNull", this.missingIfNull);
        if (this.exception != null) json[$_set]("exception", dart.toString(this.exception));
        json[$_set]("propertyType", dart.toString(this.propertyType));
        json[$_set]("defaultLevel", diagnostics$.describeEnum(this[_defaultLevel]));
        if (diagnostics$.Diagnosticable.is(this.value) || diagnostics$.DiagnosticsNode.is(this.value)) json[$_set]("isDiagnosticableValue", true);
        if (typeof v == 'number') json[$_set]("value", v[$isFinite] ? v : dart.toString(v));
        if (typeof this.value == 'string' || typeof this.value == 'boolean' || this.value == null) json[$_set]("value", this.value);
        return json;
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        let v = this.value;
        return diagnostics$.DiagnosticableTree.is(v) ? v.toStringShort() : dart.toString(v);
      }
      toDescription(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this[_description] != null) return this[_addTooltip](dart.nullCheck(this[_description]));
        if (this.exception != null) return "EXCEPTION (" + dart.str(dart.runtimeType(this.exception)) + ")";
        if (this.ifNull != null && this.value == null) return this[_addTooltip](dart.nullCheck(this.ifNull));
        let result = this.valueToString({parentConfiguration: parentConfiguration});
        if (result[$isEmpty] && this.ifEmpty != null) result = dart.nullCheck(this.ifEmpty);
        return this[_addTooltip](result);
      }
      [_addTooltip](text) {
        if (text == null) dart.nullFailed(L1, 2765, 29, "text");
        if (!(text != null)) dart.assertFailed(null, L1, 2766, 12, "text != null");
        return this.tooltip == null ? text : dart.str(text) + " (" + dart.str(this.tooltip) + ")";
      }
      get propertyType() {
        return dart.wrapType(T);
      }
      get value() {
        this[_maybeCacheValue]();
        return this[_value];
      }
      get exception() {
        this[_maybeCacheValue]();
        return this[_exception];
      }
      [_maybeCacheValue]() {
        if (dart.test(this[_valueComputed])) return;
        this[_valueComputed] = true;
        if (!(this[_computeValue] != null)) dart.assertFailed(null, L1, 2836, 12, "_computeValue != null");
        try {
          this[_value] = dart.nullCheck(this[_computeValue])();
        } catch (e) {
          let exception = dart.getThrown(e);
          if (core.Object.is(exception)) {
            this[_exception] = exception;
            this[_value] = null;
          } else
            throw e;
        }
      }
      get level() {
        if (dart.equals(this[_defaultLevel], diagnostics$.DiagnosticLevel.hidden)) return this[_defaultLevel];
        if (this.exception != null) return diagnostics$.DiagnosticLevel.error;
        if (this.value == null && dart.test(this.missingIfNull)) return diagnostics$.DiagnosticLevel.warning;
        if (!dart.equals(this.defaultValue, diagnostics$.kNoDefaultValue) && dart.equals(this.value, this.defaultValue)) return diagnostics$.DiagnosticLevel.fine;
        return this[_defaultLevel];
      }
      getProperties() {
        if (dart.test(this.expandableValue)) {
          let object = this.value;
          if (diagnostics$.DiagnosticsNode.is(object)) {
            return object.getProperties();
          }
          if (diagnostics$.Diagnosticable.is(object)) {
            return object.toDiagnosticsNode({style: this.style}).getProperties();
          }
        }
        return C31 || CT.C31;
      }
      getChildren() {
        if (dart.test(this.expandableValue)) {
          let object = this.value;
          if (diagnostics$.DiagnosticsNode.is(object)) {
            return object.getChildren();
          }
          if (diagnostics$.Diagnosticable.is(object)) {
            return object.toDiagnosticsNode({style: this.style}).getChildren();
          }
        }
        return C31 || CT.C31;
      }
    }
    (DiagnosticsProperty.new = function(name, value, opts) {
      let t7;
      let description = opts && 'description' in opts ? opts.description : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      if (showName == null) dart.nullFailed(L1, 2593, 10, "showName");
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      if (showSeparator == null) dart.nullFailed(L1, 2594, 10, "showSeparator");
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C30 || CT.C30;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let missingIfNull = opts && 'missingIfNull' in opts ? opts.missingIfNull : false;
      if (missingIfNull == null) dart.nullFailed(L1, 2597, 10, "missingIfNull");
      let linePrefix = opts && 'linePrefix' in opts ? opts.linePrefix : null;
      let expandableValue = opts && 'expandableValue' in opts ? opts.expandableValue : false;
      if (expandableValue == null) dart.nullFailed(L1, 2599, 10, "expandableValue");
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
      if (allowWrap == null) dart.nullFailed(L1, 2600, 10, "allowWrap");
      let allowNameWrap = opts && 'allowNameWrap' in opts ? opts.allowNameWrap : true;
      if (allowNameWrap == null) dart.nullFailed(L1, 2601, 10, "allowNameWrap");
      let style = opts && 'style' in opts ? opts.style : C20 || CT.C20;
      if (style == null) dart.nullFailed(L1, 2602, 26, "style");
      let level = opts && 'level' in opts ? opts.level : C5 || CT.C5;
      if (level == null) dart.nullFailed(L1, 2603, 21, "level");
      this[_exception] = null;
      this[ifEmpty$] = ifEmpty;
      this[defaultValue$] = defaultValue;
      this[tooltip$] = tooltip;
      this[missingIfNull$] = missingIfNull;
      this[expandableValue$] = expandableValue;
      this[allowWrap$] = allowWrap;
      this[allowNameWrap$] = allowNameWrap;
      if (!(showName != null)) dart.assertFailed(null, L1, 2604, 15, "showName != null");
      if (!(showSeparator != null)) dart.assertFailed(null, L1, 2605, 15, "showSeparator != null");
      if (!(style != null)) dart.assertFailed(null, L1, 2606, 15, "style != null");
      if (!(level != null)) dart.assertFailed(null, L1, 2607, 15, "level != null");
      this[_description] = description;
      this[_valueComputed] = true;
      this[_value] = value;
      this[_computeValue] = null;
      this[ifNull$] = (t7 = ifNull, t7 == null ? dart.test(missingIfNull) ? "MISSING" : null : t7);
      this[_defaultLevel] = level;
      DiagnosticsProperty.__proto__.new.call(this, {name: name, showName: showName, showSeparator: showSeparator, style: style, linePrefix: linePrefix});
      ;
    }).prototype = DiagnosticsProperty.prototype;
    (DiagnosticsProperty.lazy = function(name, computeValue, opts) {
      let t7;
      if (computeValue == null) dart.nullFailed(L1, 2636, 37, "computeValue");
      let description = opts && 'description' in opts ? opts.description : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      if (showName == null) dart.nullFailed(L1, 2640, 10, "showName");
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      if (showSeparator == null) dart.nullFailed(L1, 2641, 10, "showSeparator");
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C30 || CT.C30;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let missingIfNull = opts && 'missingIfNull' in opts ? opts.missingIfNull : false;
      if (missingIfNull == null) dart.nullFailed(L1, 2644, 10, "missingIfNull");
      let expandableValue = opts && 'expandableValue' in opts ? opts.expandableValue : false;
      if (expandableValue == null) dart.nullFailed(L1, 2645, 10, "expandableValue");
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
      if (allowWrap == null) dart.nullFailed(L1, 2646, 10, "allowWrap");
      let allowNameWrap = opts && 'allowNameWrap' in opts ? opts.allowNameWrap : true;
      if (allowNameWrap == null) dart.nullFailed(L1, 2647, 10, "allowNameWrap");
      let style = opts && 'style' in opts ? opts.style : C20 || CT.C20;
      if (style == null) dart.nullFailed(L1, 2648, 26, "style");
      let level = opts && 'level' in opts ? opts.level : C5 || CT.C5;
      if (level == null) dart.nullFailed(L1, 2649, 21, "level");
      this[_exception] = null;
      this[ifEmpty$] = ifEmpty;
      this[defaultValue$] = defaultValue;
      this[tooltip$] = tooltip;
      this[missingIfNull$] = missingIfNull;
      this[expandableValue$] = expandableValue;
      this[allowWrap$] = allowWrap;
      this[allowNameWrap$] = allowNameWrap;
      if (!(showName != null)) dart.assertFailed(null, L1, 2650, 15, "showName != null");
      if (!(showSeparator != null)) dart.assertFailed(null, L1, 2651, 15, "showSeparator != null");
      if (!(dart.equals(defaultValue, diagnostics$.kNoDefaultValue) || TN().is(defaultValue))) dart.assertFailed(null, L1, 2652, 15, "defaultValue == kNoDefaultValue || defaultValue is T?");
      if (!(missingIfNull != null)) dart.assertFailed(null, L1, 2653, 15, "missingIfNull != null");
      if (!(style != null)) dart.assertFailed(null, L1, 2654, 15, "style != null");
      if (!(level != null)) dart.assertFailed(null, L1, 2655, 15, "level != null");
      this[_description] = description;
      this[_valueComputed] = false;
      this[_value] = null;
      this[_computeValue] = computeValue;
      this[_defaultLevel] = level;
      this[ifNull$] = (t7 = ifNull, t7 == null ? dart.test(missingIfNull) ? "MISSING" : null : t7);
      DiagnosticsProperty.__proto__.new.call(this, {name: name, showName: showName, showSeparator: showSeparator, style: style});
      ;
    }).prototype = DiagnosticsProperty.prototype;
    dart.addTypeTests(DiagnosticsProperty);
    DiagnosticsProperty.prototype[_is_DiagnosticsProperty_default] = true;
    dart.addTypeCaches(DiagnosticsProperty);
    dart.setMethodSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getMethods(DiagnosticsProperty.__proto__),
      valueToString: dart.fnType(core.String, [], {parentConfiguration: dart.nullable(diagnostics$.TextTreeConfiguration)}, {}),
      toDescription: dart.fnType(core.String, [], {parentConfiguration: dart.nullable(diagnostics$.TextTreeConfiguration)}, {}),
      [_addTooltip]: dart.fnType(core.String, [core.String]),
      [_maybeCacheValue]: dart.fnType(dart.void, []),
      getProperties: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), []),
      getChildren: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), [])
    }));
    dart.setGetterSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getGetters(DiagnosticsProperty.__proto__),
      propertyType: core.Type,
      value: dart.nullable(T),
      exception: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(DiagnosticsProperty, L2);
    dart.setFieldSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getFields(DiagnosticsProperty.__proto__),
      [_description]: dart.finalFieldType(dart.nullable(core.String)),
      expandableValue: dart.finalFieldType(core.bool),
      allowWrap: dart.finalFieldType(core.bool),
      allowNameWrap: dart.finalFieldType(core.bool),
      ifNull: dart.finalFieldType(dart.nullable(core.String)),
      ifEmpty: dart.finalFieldType(dart.nullable(core.String)),
      tooltip: dart.finalFieldType(dart.nullable(core.String)),
      missingIfNull: dart.finalFieldType(core.bool),
      [_value]: dart.fieldType(dart.nullable(T)),
      [_valueComputed]: dart.fieldType(core.bool),
      [_exception]: dart.fieldType(dart.nullable(core.Object)),
      defaultValue: dart.finalFieldType(dart.nullable(core.Object)),
      [_defaultLevel]: dart.finalFieldType(diagnostics$.DiagnosticLevel),
      [_computeValue]: dart.finalFieldType(dart.nullable(dart.fnType(dart.nullable(T), [])))
    }));
    return DiagnosticsProperty;
  });
  diagnostics$.DiagnosticsProperty = diagnostics$.DiagnosticsProperty$();
  dart.addTypeTests(diagnostics$.DiagnosticsProperty, _is_DiagnosticsProperty_default);
  diagnostics$.MessageProperty = class MessageProperty extends diagnostics$.DiagnosticsProperty$(dart.void) {};
  (diagnostics$.MessageProperty.new = function(name, message, opts) {
    if (name == null) dart.nullFailed(L1, 1793, 12, "name");
    if (message == null) dart.nullFailed(L1, 1794, 12, "message");
    let style = opts && 'style' in opts ? opts.style : C20 || CT.C20;
    if (style == null) dart.nullFailed(L1, 1795, 26, "style");
    let level = opts && 'level' in opts ? opts.level : C5 || CT.C5;
    if (level == null) dart.nullFailed(L1, 1796, 21, "level");
    if (!(name != null)) dart.assertFailed(null, L1, 1797, 15, "name != null");
    if (!(message != null)) dart.assertFailed(null, L1, 1798, 15, "message != null");
    if (!(style != null)) dart.assertFailed(null, L1, 1799, 15, "style != null");
    if (!(level != null)) dart.assertFailed(null, L1, 1800, 15, "level != null");
    diagnostics$.MessageProperty.__proto__.new.call(this, name, null, {description: message, style: style, level: level});
    ;
  }).prototype = diagnostics$.MessageProperty.prototype;
  dart.addTypeTests(diagnostics$.MessageProperty);
  dart.addTypeCaches(diagnostics$.MessageProperty);
  dart.setLibraryUri(diagnostics$.MessageProperty, L2);
  var quoted$ = dart.privateName(diagnostics$, "StringProperty.quoted");
  diagnostics$.StringProperty = class StringProperty extends diagnostics$.DiagnosticsProperty$(core.String) {
    get quoted() {
      return this[quoted$];
    }
    set quoted(value) {
      super.quoted = value;
    }
    toJsonMap(delegate) {
      if (delegate == null) dart.nullFailed(L1, 1845, 67, "delegate");
      let json = super.toJsonMap(delegate);
      json[$_set]("quoted", this.quoted);
      return json;
    }
    valueToString(opts) {
      let t8;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let text = (t8 = this[_description], t8 == null ? this.value : t8);
      if (parentConfiguration != null && !dart.test(parentConfiguration.lineBreakProperties) && text != null) {
        text = text[$replaceAll]("\n", "\\n");
      }
      if (dart.test(this.quoted) && text != null) {
        if (this.ifEmpty != null && text[$isEmpty]) return dart.nullCheck(this.ifEmpty);
        return "\"" + dart.str(text) + "\"";
      }
      return dart.toString(text);
    }
  };
  (diagnostics$.StringProperty.new = function(name, value, opts) {
    if (name == null) dart.nullFailed(L1, 1815, 12, "name");
    let description = opts && 'description' in opts ? opts.description : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    if (showName == null) dart.nullFailed(L1, 1819, 10, "showName");
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C30 || CT.C30;
    let quoted = opts && 'quoted' in opts ? opts.quoted : true;
    if (quoted == null) dart.nullFailed(L1, 1821, 10, "quoted");
    let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
    let style = opts && 'style' in opts ? opts.style : C20 || CT.C20;
    if (style == null) dart.nullFailed(L1, 1823, 26, "style");
    let level = opts && 'level' in opts ? opts.level : C5 || CT.C5;
    if (level == null) dart.nullFailed(L1, 1824, 21, "level");
    this[quoted$] = quoted;
    if (!(showName != null)) dart.assertFailed(null, L1, 1825, 15, "showName != null");
    if (!(quoted != null)) dart.assertFailed(null, L1, 1826, 15, "quoted != null");
    if (!(style != null)) dart.assertFailed(null, L1, 1827, 15, "style != null");
    if (!(level != null)) dart.assertFailed(null, L1, 1828, 15, "level != null");
    diagnostics$.StringProperty.__proto__.new.call(this, name, value, {description: description, defaultValue: defaultValue, tooltip: tooltip, showName: showName, ifEmpty: ifEmpty, style: style, level: level});
    ;
  }).prototype = diagnostics$.StringProperty.prototype;
  dart.addTypeTests(diagnostics$.StringProperty);
  dart.addTypeCaches(diagnostics$.StringProperty);
  dart.setLibraryUri(diagnostics$.StringProperty, L2);
  dart.setFieldSignature(diagnostics$.StringProperty, () => ({
    __proto__: dart.getFields(diagnostics$.StringProperty.__proto__),
    quoted: dart.finalFieldType(core.bool)
  }));
  const _is__NumProperty_default = Symbol('_is__NumProperty_default');
  var unit$ = dart.privateName(diagnostics$, "_NumProperty.unit");
  diagnostics$._NumProperty$ = dart.generic(T => {
    class _NumProperty extends diagnostics$.DiagnosticsProperty$(T) {
      get unit() {
        return this[unit$];
      }
      set unit(value) {
        super.unit = value;
      }
      toJsonMap(delegate) {
        if (delegate == null) dart.nullFailed(L1, 1918, 67, "delegate");
        let json = super.toJsonMap(delegate);
        if (this.unit != null) json[$_set]("unit", this.unit);
        json[$_set]("numberToString", this.numberToString());
        return json;
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        return this.unit != null ? dart.str(this.numberToString()) + dart.str(this.unit) : this.numberToString();
      }
    }
    (_NumProperty.new = function(name, value, opts) {
      if (name == null) dart.nullFailed(L1, 1876, 12, "name");
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let unit = opts && 'unit' in opts ? opts.unit : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      if (showName == null) dart.nullFailed(L1, 1880, 10, "showName");
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C30 || CT.C30;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let style = opts && 'style' in opts ? opts.style : C20 || CT.C20;
      if (style == null) dart.nullFailed(L1, 1883, 26, "style");
      let level = opts && 'level' in opts ? opts.level : C5 || CT.C5;
      if (level == null) dart.nullFailed(L1, 1884, 21, "level");
      this[unit$] = unit;
      _NumProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, showName: showName, defaultValue: defaultValue, tooltip: tooltip, level: level, style: style});
      ;
    }).prototype = _NumProperty.prototype;
    (_NumProperty.lazy = function(name, computeValue, opts) {
      if (name == null) dart.nullFailed(L1, 1897, 12, "name");
      if (computeValue == null) dart.nullFailed(L1, 1898, 38, "computeValue");
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let unit = opts && 'unit' in opts ? opts.unit : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      if (showName == null) dart.nullFailed(L1, 1901, 10, "showName");
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C30 || CT.C30;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let style = opts && 'style' in opts ? opts.style : C20 || CT.C20;
      if (style == null) dart.nullFailed(L1, 1904, 26, "style");
      let level = opts && 'level' in opts ? opts.level : C5 || CT.C5;
      if (level == null) dart.nullFailed(L1, 1905, 21, "level");
      this[unit$] = unit;
      _NumProperty.__proto__.lazy.call(this, name, computeValue, {ifNull: ifNull, showName: showName, defaultValue: defaultValue, tooltip: tooltip, style: style, level: level});
      ;
    }).prototype = _NumProperty.prototype;
    dart.addTypeTests(_NumProperty);
    _NumProperty.prototype[_is__NumProperty_default] = true;
    dart.addTypeCaches(_NumProperty);
    dart.setLibraryUri(_NumProperty, L2);
    dart.setFieldSignature(_NumProperty, () => ({
      __proto__: dart.getFields(_NumProperty.__proto__),
      unit: dart.finalFieldType(dart.nullable(core.String))
    }));
    return _NumProperty;
  });
  diagnostics$._NumProperty = diagnostics$._NumProperty$();
  dart.addTypeTests(diagnostics$._NumProperty, _is__NumProperty_default);
  diagnostics$.DoubleProperty = class DoubleProperty extends diagnostics$._NumProperty$(core.double) {
    numberToString() {
      return debug.debugFormatDouble(this.value);
    }
  };
  (diagnostics$.DoubleProperty.new = function(name, value, opts) {
    if (name == null) dart.nullFailed(L1, 1953, 12, "name");
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C30 || CT.C30;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    if (showName == null) dart.nullFailed(L1, 1959, 10, "showName");
    let style = opts && 'style' in opts ? opts.style : C20 || CT.C20;
    if (style == null) dart.nullFailed(L1, 1960, 26, "style");
    let level = opts && 'level' in opts ? opts.level : C5 || CT.C5;
    if (level == null) dart.nullFailed(L1, 1961, 21, "level");
    if (!(showName != null)) dart.assertFailed(null, L1, 1962, 15, "showName != null");
    if (!(style != null)) dart.assertFailed(null, L1, 1963, 15, "style != null");
    if (!(level != null)) dart.assertFailed(null, L1, 1964, 15, "level != null");
    diagnostics$.DoubleProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, unit: unit, tooltip: tooltip, defaultValue: defaultValue, showName: showName, style: style, level: level});
    ;
  }).prototype = diagnostics$.DoubleProperty.prototype;
  (diagnostics$.DoubleProperty.lazy = function(name, computeValue, opts) {
    if (name == null) dart.nullFailed(L1, 1984, 12, "name");
    if (computeValue == null) dart.nullFailed(L1, 1985, 43, "computeValue");
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    if (showName == null) dart.nullFailed(L1, 1987, 10, "showName");
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C30 || CT.C30;
    let level = opts && 'level' in opts ? opts.level : C5 || CT.C5;
    if (level == null) dart.nullFailed(L1, 1991, 21, "level");
    if (!(showName != null)) dart.assertFailed(null, L1, 1992, 15, "showName != null");
    if (!(level != null)) dart.assertFailed(null, L1, 1993, 15, "level != null");
    diagnostics$.DoubleProperty.__proto__.lazy.call(this, name, computeValue, {showName: showName, ifNull: ifNull, unit: unit, tooltip: tooltip, defaultValue: defaultValue, level: level});
    ;
  }).prototype = diagnostics$.DoubleProperty.prototype;
  dart.addTypeTests(diagnostics$.DoubleProperty);
  dart.addTypeCaches(diagnostics$.DoubleProperty);
  dart.setMethodSignature(diagnostics$.DoubleProperty, () => ({
    __proto__: dart.getMethods(diagnostics$.DoubleProperty.__proto__),
    numberToString: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(diagnostics$.DoubleProperty, L2);
  diagnostics$.IntProperty = class IntProperty extends diagnostics$._NumProperty$(core.int) {
    numberToString() {
      return dart.toString(this.value);
    }
  };
  (diagnostics$.IntProperty.new = function(name, value, opts) {
    if (name == null) dart.nullFailed(L1, 2017, 12, "name");
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    if (showName == null) dart.nullFailed(L1, 2020, 10, "showName");
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C30 || CT.C30;
    let style = opts && 'style' in opts ? opts.style : C20 || CT.C20;
    if (style == null) dart.nullFailed(L1, 2023, 26, "style");
    let level = opts && 'level' in opts ? opts.level : C5 || CT.C5;
    if (level == null) dart.nullFailed(L1, 2024, 21, "level");
    if (!(showName != null)) dart.assertFailed(null, L1, 2025, 15, "showName != null");
    if (!(level != null)) dart.assertFailed(null, L1, 2026, 15, "level != null");
    if (!(style != null)) dart.assertFailed(null, L1, 2027, 15, "style != null");
    diagnostics$.IntProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, showName: showName, unit: unit, defaultValue: defaultValue, level: level});
    ;
  }).prototype = diagnostics$.IntProperty.prototype;
  dart.addTypeTests(diagnostics$.IntProperty);
  dart.addTypeCaches(diagnostics$.IntProperty);
  dart.setMethodSignature(diagnostics$.IntProperty, () => ({
    __proto__: dart.getMethods(diagnostics$.IntProperty.__proto__),
    numberToString: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(diagnostics$.IntProperty, L2);
  diagnostics$.PercentProperty = class PercentProperty extends diagnostics$.DoubleProperty {
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (this.value == null) return dart.toString(this.value);
      return this.unit != null ? dart.str(this.numberToString()) + " " + dart.str(this.unit) : this.numberToString();
    }
    numberToString() {
      let v = this.value;
      if (v == null) return dart.toString(this.value);
      return (v[$clamp](0.0, 1.0) * 100.0)[$toStringAsFixed](1) + "%";
    }
  };
  (diagnostics$.PercentProperty.new = function(name, fraction, opts) {
    if (name == null) dart.nullFailed(L1, 2054, 12, "name");
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    if (showName == null) dart.nullFailed(L1, 2057, 10, "showName");
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let level = opts && 'level' in opts ? opts.level : C5 || CT.C5;
    if (level == null) dart.nullFailed(L1, 2060, 21, "level");
    if (!(showName != null)) dart.assertFailed(null, L1, 2061, 15, "showName != null");
    if (!(level != null)) dart.assertFailed(null, L1, 2062, 15, "level != null");
    diagnostics$.PercentProperty.__proto__.new.call(this, name, fraction, {ifNull: ifNull, showName: showName, tooltip: tooltip, unit: unit, level: level});
    ;
  }).prototype = diagnostics$.PercentProperty.prototype;
  dart.addTypeTests(diagnostics$.PercentProperty);
  dart.addTypeCaches(diagnostics$.PercentProperty);
  dart.setLibraryUri(diagnostics$.PercentProperty, L2);
  var ifTrue$ = dart.privateName(diagnostics$, "FlagProperty.ifTrue");
  var ifFalse$ = dart.privateName(diagnostics$, "FlagProperty.ifFalse");
  diagnostics$.FlagProperty = class FlagProperty extends diagnostics$.DiagnosticsProperty$(core.bool) {
    get ifTrue() {
      return this[ifTrue$];
    }
    set ifTrue(value) {
      super.ifTrue = value;
    }
    get ifFalse() {
      return this[ifFalse$];
    }
    set ifFalse(value) {
      super.ifFalse = value;
    }
    toJsonMap(delegate) {
      if (delegate == null) dart.nullFailed(L1, 2155, 67, "delegate");
      let json = super.toJsonMap(delegate);
      if (this.ifTrue != null) json[$_set]("ifTrue", this.ifTrue);
      if (this.ifFalse != null) json[$_set]("ifFalse", this.ifFalse);
      return json;
    }
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (dart.equals(this.value, true)) {
        if (this.ifTrue != null) return dart.nullCheck(this.ifTrue);
      } else if (dart.equals(this.value, false)) {
        if (this.ifFalse != null) return dart.nullCheck(this.ifFalse);
      }
      return super.valueToString({parentConfiguration: parentConfiguration});
    }
    get showName() {
      if (this.value == null || dart.equals(this.value, true) && this.ifTrue == null || dart.equals(this.value, false) && this.ifFalse == null) {
        return true;
      }
      return super.showName;
    }
    get level() {
      if (dart.equals(this.value, true)) {
        if (this.ifTrue == null) return diagnostics$.DiagnosticLevel.hidden;
      }
      if (dart.equals(this.value, false)) {
        if (this.ifFalse == null) return diagnostics$.DiagnosticLevel.hidden;
      }
      return super.level;
    }
  };
  (diagnostics$.FlagProperty.new = function(name, opts) {
    if (name == null) dart.nullFailed(L1, 2136, 12, "name");
    let value = opts && 'value' in opts ? opts.value : null;
    let ifTrue = opts && 'ifTrue' in opts ? opts.ifTrue : null;
    let ifFalse = opts && 'ifFalse' in opts ? opts.ifFalse : null;
    let showName = opts && 'showName' in opts ? opts.showName : false;
    if (showName == null) dart.nullFailed(L1, 2140, 10, "showName");
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
    let level = opts && 'level' in opts ? opts.level : C5 || CT.C5;
    if (level == null) dart.nullFailed(L1, 2142, 21, "level");
    this[ifTrue$] = ifTrue;
    this[ifFalse$] = ifFalse;
    if (!(showName != null)) dart.assertFailed(null, L1, 2143, 15, "showName != null");
    if (!(level != null)) dart.assertFailed(null, L1, 2144, 15, "level != null");
    if (!(ifTrue != null || ifFalse != null)) dart.assertFailed(null, L1, 2145, 15, "ifTrue != null || ifFalse != null");
    diagnostics$.FlagProperty.__proto__.new.call(this, name, value, {showName: showName, defaultValue: defaultValue, level: level});
    ;
  }).prototype = diagnostics$.FlagProperty.prototype;
  dart.addTypeTests(diagnostics$.FlagProperty);
  dart.addTypeCaches(diagnostics$.FlagProperty);
  dart.setGetterSignature(diagnostics$.FlagProperty, () => ({
    __proto__: dart.getGetters(diagnostics$.FlagProperty.__proto__),
    showName: core.bool
  }));
  dart.setLibraryUri(diagnostics$.FlagProperty, L2);
  dart.setFieldSignature(diagnostics$.FlagProperty, () => ({
    __proto__: dart.getFields(diagnostics$.FlagProperty.__proto__),
    ifTrue: dart.finalFieldType(dart.nullable(core.String)),
    ifFalse: dart.finalFieldType(dart.nullable(core.String))
  }));
  const _is_IterableProperty_default = Symbol('_is_IterableProperty_default');
  diagnostics$.IterableProperty$ = dart.generic(T => {
    var TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    class IterableProperty extends diagnostics$.DiagnosticsProperty$(core.Iterable$(T)) {
      valueToString(opts) {
        let t8;
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        if (dart.test(dart.nullCheck(this.value)[$isEmpty])) {
          t8 = this.ifEmpty;
          return t8 == null ? "[]" : t8;
        }
        let formattedValues = dart.nullCheck(this.value)[$map](core.String, dart.fn(v => {
          if (dart.wrapType(T)._equals(dart.wrapType(core.double)) && typeof v == 'number') {
            return debug.debugFormatDouble(v);
          } else {
            return dart.toString(v);
          }
        }, TToString()));
        if (parentConfiguration != null && !dart.test(parentConfiguration.lineBreakProperties)) {
          return "[" + dart.str(formattedValues[$join](", ")) + "]";
        }
        return formattedValues[$join](dart.test(diagnostics$._isSingleLine(this.style)) ? ", " : "\n");
      }
      get level() {
        if (this.ifEmpty == null && this.value != null && dart.test(dart.nullCheck(this.value)[$isEmpty]) && !dart.equals(super.level, diagnostics$.DiagnosticLevel.hidden)) return diagnostics$.DiagnosticLevel.fine;
        return super.level;
      }
      toJsonMap(delegate) {
        if (delegate == null) dart.nullFailed(L1, 2297, 67, "delegate");
        let json = super.toJsonMap(delegate);
        if (this.value != null) {
          json[$_set]("values", dart.nullCheck(this.value)[$map](core.String, dart.fn(value => dart.toString(value), TToString()))[$toList]());
        }
        return json;
      }
    }
    (IterableProperty.new = function(name, value, opts) {
      if (name == null) dart.nullFailed(L1, 2232, 12, "name");
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C30 || CT.C30;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : "[]";
      let style = opts && 'style' in opts ? opts.style : C20 || CT.C20;
      if (style == null) dart.nullFailed(L1, 2237, 26, "style");
      let showName = opts && 'showName' in opts ? opts.showName : true;
      if (showName == null) dart.nullFailed(L1, 2238, 10, "showName");
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      if (showSeparator == null) dart.nullFailed(L1, 2239, 10, "showSeparator");
      let level = opts && 'level' in opts ? opts.level : C5 || CT.C5;
      if (level == null) dart.nullFailed(L1, 2240, 21, "level");
      if (!(style != null)) dart.assertFailed(null, L1, 2241, 15, "style != null");
      if (!(showName != null)) dart.assertFailed(null, L1, 2242, 15, "showName != null");
      if (!(showSeparator != null)) dart.assertFailed(null, L1, 2243, 15, "showSeparator != null");
      if (!(level != null)) dart.assertFailed(null, L1, 2244, 15, "level != null");
      IterableProperty.__proto__.new.call(this, name, value, {defaultValue: defaultValue, ifNull: ifNull, ifEmpty: ifEmpty, style: style, showName: showName, showSeparator: showSeparator, level: level});
      ;
    }).prototype = IterableProperty.prototype;
    dart.addTypeTests(IterableProperty);
    IterableProperty.prototype[_is_IterableProperty_default] = true;
    dart.addTypeCaches(IterableProperty);
    dart.setLibraryUri(IterableProperty, L2);
    return IterableProperty;
  });
  diagnostics$.IterableProperty = diagnostics$.IterableProperty$();
  dart.addTypeTests(diagnostics$.IterableProperty, _is_IterableProperty_default);
  const _is_EnumProperty_default = Symbol('_is_EnumProperty_default');
  diagnostics$.EnumProperty$ = dart.generic(T => {
    class EnumProperty extends diagnostics$.DiagnosticsProperty$(T) {
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        return diagnostics$.describeEnum(dart.nullCheck(this.value));
      }
    }
    (EnumProperty.new = function(name, value, opts) {
      if (name == null) dart.nullFailed(L1, 2320, 12, "name");
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C30 || CT.C30;
      let level = opts && 'level' in opts ? opts.level : C5 || CT.C5;
      if (level == null) dart.nullFailed(L1, 2323, 21, "level");
      if (!(level != null)) dart.assertFailed(null, L1, 2324, 15, "level != null");
      EnumProperty.__proto__.new.call(this, name, value, {defaultValue: defaultValue, level: level});
      ;
    }).prototype = EnumProperty.prototype;
    dart.addTypeTests(EnumProperty);
    EnumProperty.prototype[_is_EnumProperty_default] = true;
    dart.addTypeCaches(EnumProperty);
    dart.setLibraryUri(EnumProperty, L2);
    return EnumProperty;
  });
  diagnostics$.EnumProperty = diagnostics$.EnumProperty$();
  dart.addTypeTests(diagnostics$.EnumProperty, _is_EnumProperty_default);
  const _is_ObjectFlagProperty_default = Symbol('_is_ObjectFlagProperty_default');
  var ifPresent$ = dart.privateName(diagnostics$, "ObjectFlagProperty.ifPresent");
  diagnostics$.ObjectFlagProperty$ = dart.generic(T => {
    class ObjectFlagProperty extends diagnostics$.DiagnosticsProperty$(T) {
      get ifPresent() {
        return this[ifPresent$];
      }
      set ifPresent(value) {
        super.ifPresent = value;
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value != null) {
          if (this.ifPresent != null) return dart.nullCheck(this.ifPresent);
        } else {
          if (this.ifNull != null) return dart.nullCheck(this.ifNull);
        }
        return super.valueToString({parentConfiguration: parentConfiguration});
      }
      get showName() {
        if (this.value != null && this.ifPresent == null || this.value == null && this.ifNull == null) {
          return true;
        }
        return super.showName;
      }
      get level() {
        if (this.value != null) {
          if (this.ifPresent == null) return diagnostics$.DiagnosticLevel.hidden;
        } else {
          if (this.ifNull == null) return diagnostics$.DiagnosticLevel.hidden;
        }
        return super.level;
      }
      toJsonMap(delegate) {
        if (delegate == null) dart.nullFailed(L1, 2452, 67, "delegate");
        let json = super.toJsonMap(delegate);
        if (this.ifPresent != null) json[$_set]("ifPresent", this.ifPresent);
        return json;
      }
    }
    (ObjectFlagProperty.new = function(name, value, opts) {
      if (name == null) dart.nullFailed(L1, 2370, 12, "name");
      let ifPresent = opts && 'ifPresent' in opts ? opts.ifPresent : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let showName = opts && 'showName' in opts ? opts.showName : false;
      if (showName == null) dart.nullFailed(L1, 2374, 10, "showName");
      let level = opts && 'level' in opts ? opts.level : C5 || CT.C5;
      if (level == null) dart.nullFailed(L1, 2375, 21, "level");
      this[ifPresent$] = ifPresent;
      if (!(ifPresent != null || ifNull != null)) dart.assertFailed(null, L1, 2376, 15, "ifPresent != null || ifNull != null");
      if (!(showName != null)) dart.assertFailed(null, L1, 2377, 15, "showName != null");
      if (!(level != null)) dart.assertFailed(null, L1, 2378, 15, "level != null");
      ObjectFlagProperty.__proto__.new.call(this, name, value, {showName: showName, ifNull: ifNull, level: level});
      ;
    }).prototype = ObjectFlagProperty.prototype;
    (ObjectFlagProperty.has = function(name, value, opts) {
      if (name == null) dart.nullFailed(L1, 2394, 12, "name");
      let level = opts && 'level' in opts ? opts.level : C5 || CT.C5;
      if (level == null) dart.nullFailed(L1, 2396, 21, "level");
      if (!(name != null)) dart.assertFailed(null, L1, 2397, 15, "name != null");
      if (!(level != null)) dart.assertFailed(null, L1, 2398, 15, "level != null");
      this[ifPresent$] = "has " + dart.str(name);
      ObjectFlagProperty.__proto__.new.call(this, name, value, {showName: false, level: level});
      ;
    }).prototype = ObjectFlagProperty.prototype;
    dart.addTypeTests(ObjectFlagProperty);
    ObjectFlagProperty.prototype[_is_ObjectFlagProperty_default] = true;
    dart.addTypeCaches(ObjectFlagProperty);
    dart.setGetterSignature(ObjectFlagProperty, () => ({
      __proto__: dart.getGetters(ObjectFlagProperty.__proto__),
      showName: core.bool
    }));
    dart.setLibraryUri(ObjectFlagProperty, L2);
    dart.setFieldSignature(ObjectFlagProperty, () => ({
      __proto__: dart.getFields(ObjectFlagProperty.__proto__),
      ifPresent: dart.finalFieldType(dart.nullable(core.String))
    }));
    return ObjectFlagProperty;
  });
  diagnostics$.ObjectFlagProperty = diagnostics$.ObjectFlagProperty$();
  dart.addTypeTests(diagnostics$.ObjectFlagProperty, _is_ObjectFlagProperty_default);
  var _hasNonNullEntry = dart.privateName(diagnostics$, "_hasNonNullEntry");
  var _formattedValues = dart.privateName(diagnostics$, "_formattedValues");
  const _is_FlagsSummary_default = Symbol('_is_FlagsSummary_default');
  diagnostics$.FlagsSummary$ = dart.generic(T => {
    var TN = () => (TN = dart.constFn(dart.nullable(T)))();
    var TNTobool = () => (TNTobool = dart.constFn(dart.fnType(core.bool, [TN()])))();
    class FlagsSummary extends diagnostics$.DiagnosticsProperty$(core.Map$(core.String, dart.nullable(T))) {
      get value() {
        return dart.nullCheck(super.value);
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (!(this.value != null)) dart.assertFailed(null, L1, 2512, 12, "value != null");
        if (!dart.test(this[_hasNonNullEntry]()) && this.ifEmpty != null) return dart.nullCheck(this.ifEmpty);
        let formattedValues = this[_formattedValues]();
        if (parentConfiguration != null && !dart.test(parentConfiguration.lineBreakProperties)) {
          return "[" + dart.str(formattedValues[$join](", ")) + "]";
        }
        return formattedValues[$join](dart.test(diagnostics$._isSingleLine(this.style)) ? ", " : "\n");
      }
      get level() {
        if (!dart.test(this[_hasNonNullEntry]()) && this.ifEmpty == null) return diagnostics$.DiagnosticLevel.hidden;
        return super.level;
      }
      toJsonMap(delegate) {
        if (delegate == null) dart.nullFailed(L1, 2539, 67, "delegate");
        let json = super.toJsonMap(delegate);
        if (dart.test(this.value[$isNotEmpty])) json[$_set]("values", this[_formattedValues]()[$toList]());
        return json;
      }
      [_hasNonNullEntry]() {
        return this.value[$values][$any](dart.fn(o => o != null, TNTobool()));
      }
      [_formattedValues]() {
        return new (SyncIterableOfString()).new((function* _formattedValues() {
          for (let entry of this.value[$entries]) {
            if (entry.value != null) {
              yield entry.key;
            }
          }
        }).bind(this));
      }
    }
    (FlagsSummary.new = function(name, value, opts) {
      if (name == null) dart.nullFailed(L1, 2488, 12, "name");
      if (value == null) dart.nullFailed(L1, 2489, 21, "value");
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      if (showName == null) dart.nullFailed(L1, 2491, 10, "showName");
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      if (showSeparator == null) dart.nullFailed(L1, 2492, 10, "showSeparator");
      let level = opts && 'level' in opts ? opts.level : C5 || CT.C5;
      if (level == null) dart.nullFailed(L1, 2493, 21, "level");
      if (!(value != null)) dart.assertFailed(null, L1, 2494, 15, "value != null");
      if (!(showName != null)) dart.assertFailed(null, L1, 2495, 15, "showName != null");
      if (!(showSeparator != null)) dart.assertFailed(null, L1, 2496, 15, "showSeparator != null");
      if (!(level != null)) dart.assertFailed(null, L1, 2497, 15, "level != null");
      FlagsSummary.__proto__.new.call(this, name, value, {ifEmpty: ifEmpty, showName: showName, showSeparator: showSeparator, level: level});
      ;
    }).prototype = FlagsSummary.prototype;
    dart.addTypeTests(FlagsSummary);
    FlagsSummary.prototype[_is_FlagsSummary_default] = true;
    dart.addTypeCaches(FlagsSummary);
    dart.setMethodSignature(FlagsSummary, () => ({
      __proto__: dart.getMethods(FlagsSummary.__proto__),
      [_hasNonNullEntry]: dart.fnType(core.bool, []),
      [_formattedValues]: dart.fnType(core.Iterable$(core.String), [])
    }));
    dart.setGetterSignature(FlagsSummary, () => ({
      __proto__: dart.getGetters(FlagsSummary.__proto__),
      value: core.Map$(core.String, dart.nullable(T))
    }));
    dart.setLibraryUri(FlagsSummary, L2);
    return FlagsSummary;
  });
  diagnostics$.FlagsSummary = diagnostics$.FlagsSummary$();
  dart.addTypeTests(diagnostics$.FlagsSummary, _is_FlagsSummary_default);
  var _cachedBuilder = dart.privateName(diagnostics$, "_cachedBuilder");
  const _is_DiagnosticableNode_default = Symbol('_is_DiagnosticableNode_default');
  var value$ = dart.privateName(diagnostics$, "DiagnosticableNode.value");
  diagnostics$.DiagnosticableNode$ = dart.generic(T => {
    class DiagnosticableNode extends diagnostics$.DiagnosticsNode {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get builder() {
        if (false) {
          return null;
        } else {
          if (!dart.test(dart.fn(() => {
            if (this[_cachedBuilder] == null) {
              this[_cachedBuilder] = new diagnostics$.DiagnosticPropertiesBuilder.new();
              this.value.debugFillProperties(dart.nullCheck(this[_cachedBuilder]));
            }
            return true;
          }, VoidTobool())())) dart.assertFailed(null, L1, 2942, 14, "() {\n        if (_cachedBuilder == null) {\n          _cachedBuilder = DiagnosticPropertiesBuilder();\n          value.debugFillProperties(_cachedBuilder!);\n        }\n        return true;\n      }()");
          return this[_cachedBuilder];
        }
      }
      get style() {
        let t8;
        return false ? diagnostics$.DiagnosticsTreeStyle.none : (t8 = super.style, t8 == null ? dart.nullCheck(this.builder).defaultDiagnosticsTreeStyle : t8);
      }
      get emptyBodyDescription() {
        return false || false ? "" : dart.nullCheck(this.builder).emptyBodyDescription;
      }
      getProperties() {
        return false || false ? C31 || CT.C31 : dart.nullCheck(this.builder).properties;
      }
      getChildren() {
        return C31 || CT.C31;
      }
      toDescription(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        let result = "";
        if (!dart.test(dart.fn(() => {
          result = this.value.toStringShort();
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L1, 2972, 12, "() {\n      result = value.toStringShort();\n      return true;\n    }()");
        return result;
      }
    }
    (DiagnosticableNode.new = function(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let value = opts && 'value' in opts ? opts.value : null;
      if (value == null) dart.nullFailed(L1, 2922, 19, "value");
      let style = opts && 'style' in opts ? opts.style : null;
      this[_cachedBuilder] = null;
      this[value$] = value;
      if (!(value != null)) dart.assertFailed(null, L1, 2924, 15, "value != null");
      DiagnosticableNode.__proto__.new.call(this, {name: name, style: style});
      ;
    }).prototype = DiagnosticableNode.prototype;
    dart.addTypeTests(DiagnosticableNode);
    DiagnosticableNode.prototype[_is_DiagnosticableNode_default] = true;
    dart.addTypeCaches(DiagnosticableNode);
    dart.setMethodSignature(DiagnosticableNode, () => ({
      __proto__: dart.getMethods(DiagnosticableNode.__proto__),
      getProperties: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), []),
      getChildren: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), []),
      toDescription: dart.fnType(core.String, [], {parentConfiguration: dart.nullable(diagnostics$.TextTreeConfiguration)}, {})
    }));
    dart.setGetterSignature(DiagnosticableNode, () => ({
      __proto__: dart.getGetters(DiagnosticableNode.__proto__),
      builder: dart.nullable(diagnostics$.DiagnosticPropertiesBuilder),
      style: diagnostics$.DiagnosticsTreeStyle
    }));
    dart.setLibraryUri(DiagnosticableNode, L2);
    dart.setFieldSignature(DiagnosticableNode, () => ({
      __proto__: dart.getFields(DiagnosticableNode.__proto__),
      value: dart.finalFieldType(T),
      [_cachedBuilder]: dart.fieldType(dart.nullable(diagnostics$.DiagnosticPropertiesBuilder))
    }));
    return DiagnosticableNode;
  });
  diagnostics$.DiagnosticableNode = diagnostics$.DiagnosticableNode$();
  dart.addTypeTests(diagnostics$.DiagnosticableNode, _is_DiagnosticableNode_default);
  diagnostics$.Diagnosticable = class Diagnosticable extends core.Object {};
  diagnostics$.Diagnosticable[dart.mixinOn] = Object => {
    class Diagnosticable extends Object {
      toStringShort() {
        return diagnostics$.describeIdentity(this);
      }
      toString(opts) {
        let t8;
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C5 || CT.C5;
        if (minLevel == null) dart.nullFailed(L1, 3107, 37, "minLevel");
        let fullString = null;
        if (!dart.test(dart.fn(() => {
          fullString = this.toDiagnosticsNode({style: diagnostics$.DiagnosticsTreeStyle.singleLine}).toString({minLevel: minLevel});
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L1, 3109, 12, "() {\n      fullString = toDiagnosticsNode(style: DiagnosticsTreeStyle.singleLine).toString(minLevel: minLevel);\n      return true;\n    }()");
        t8 = fullString;
        return t8 == null ? this.toStringShort() : t8;
      }
      toDiagnosticsNode(opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let style = opts && 'style' in opts ? opts.style : null;
        return new (DiagnosticableNodeOfDiagnosticable()).new({name: name, value: this, style: style});
      }
      debugFillProperties(properties) {
        if (properties == null) dart.nullFailed(L1, 3342, 56, "properties");
      }
    }
    dart.defineExtensionMethods(Diagnosticable, ['toString']);
    return Diagnosticable;
  };
  (diagnostics$.Diagnosticable[dart.mixinNew] = function() {
  }).prototype = diagnostics$.Diagnosticable.prototype;
  dart.addTypeTests(diagnostics$.Diagnosticable);
  dart.addTypeCaches(diagnostics$.Diagnosticable);
  diagnostics$.Diagnosticable[dart.implements] = () => [core.Object];
  dart.setMethodSignature(diagnostics$.Diagnosticable, () => ({
    __proto__: dart.getMethods(diagnostics$.Diagnosticable.__proto__),
    toStringShort: dart.fnType(core.String, []),
    toString: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel}, {}),
    [$toString]: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel}, {}),
    toDiagnosticsNode: dart.fnType(diagnostics$.DiagnosticsNode, [], {name: dart.nullable(core.String), style: dart.nullable(diagnostics$.DiagnosticsTreeStyle)}, {}),
    debugFillProperties: dart.fnType(dart.void, [diagnostics$.DiagnosticPropertiesBuilder])
  }));
  dart.setLibraryUri(diagnostics$.Diagnosticable, L2);
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics$.Diagnosticable);
  diagnostics$.DiagnosticableTree = class DiagnosticableTree extends Object_Diagnosticable$36 {
    toStringShallow(opts) {
      let t8;
      let joiner = opts && 'joiner' in opts ? opts.joiner : ", ";
      if (joiner == null) dart.nullFailed(L1, 3381, 12, "joiner");
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C4 || CT.C4;
      if (minLevel == null) dart.nullFailed(L1, 3382, 21, "minLevel");
      let shallowString = null;
      if (!dart.test(dart.fn(() => {
        let result = new core.StringBuffer.new();
        result.write(this.toString());
        result.write(joiner);
        let builder = new diagnostics$.DiagnosticPropertiesBuilder.new();
        this.debugFillProperties(builder);
        result.write(builder.properties[$where](dart.fn(n => {
          if (n == null) dart.nullFailed(L1, 3392, 51, "n");
          return !dart.test(n.isFiltered(minLevel));
        }, DiagnosticsNodeTobool()))[$join](joiner));
        shallowString = result.toString();
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L1, 3385, 12, "() {\n      final StringBuffer result = StringBuffer();\n      result.write(toString());\n      result.write(joiner);\n      final DiagnosticPropertiesBuilder builder = DiagnosticPropertiesBuilder();\n      debugFillProperties(builder);\n      result.write(\n        builder.properties.where((DiagnosticsNode n) => !n.isFiltered(minLevel))\n            .join(joiner),\n      );\n      shallowString = result.toString();\n      return true;\n    }()");
      t8 = shallowString;
      return t8 == null ? this.toString() : t8;
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      if (prefixLineOne == null) dart.nullFailed(L1, 3420, 12, "prefixLineOne");
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C4 || CT.C4;
      if (minLevel == null) dart.nullFailed(L1, 3422, 21, "minLevel");
      return this.toDiagnosticsNode().toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
    }
    toStringShort() {
      return diagnostics$.describeIdentity(this);
    }
    toDiagnosticsNode(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : null;
      return new diagnostics$.DiagnosticableTreeNode.new({name: name, value: this, style: style});
    }
    debugDescribeChildren() {
      return C31 || CT.C31;
    }
  };
  (diagnostics$.DiagnosticableTree.new = function() {
    ;
  }).prototype = diagnostics$.DiagnosticableTree.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticableTree);
  dart.addTypeCaches(diagnostics$.DiagnosticableTree);
  dart.setMethodSignature(diagnostics$.DiagnosticableTree, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticableTree.__proto__),
    toStringShallow: dart.fnType(core.String, [], {joiner: core.String, minLevel: diagnostics$.DiagnosticLevel}, {}),
    toStringDeep: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel, prefixLineOne: core.String, prefixOtherLines: dart.nullable(core.String)}, {}),
    debugDescribeChildren: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), [])
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticableTree, L2);
  diagnostics$.DiagnosticableTreeNode = class DiagnosticableTreeNode extends diagnostics$.DiagnosticableNode$(diagnostics$.DiagnosticableTree) {
    getChildren() {
      return this.value.debugDescribeChildren();
    }
  };
  (diagnostics$.DiagnosticableTreeNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let value = opts && 'value' in opts ? opts.value : null;
    if (value == null) dart.nullFailed(L1, 2985, 33, "value");
    let style = opts && 'style' in opts ? opts.style : null;
    diagnostics$.DiagnosticableTreeNode.__proto__.new.call(this, {name: name, value: value, style: style});
    ;
  }).prototype = diagnostics$.DiagnosticableTreeNode.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticableTreeNode);
  dart.addTypeCaches(diagnostics$.DiagnosticableTreeNode);
  dart.setLibraryUri(diagnostics$.DiagnosticableTreeNode, L2);
  var properties$ = dart.privateName(diagnostics$, "DiagnosticPropertiesBuilder.properties");
  var defaultDiagnosticsTreeStyle = dart.privateName(diagnostics$, "DiagnosticPropertiesBuilder.defaultDiagnosticsTreeStyle");
  var emptyBodyDescription = dart.privateName(diagnostics$, "DiagnosticPropertiesBuilder.emptyBodyDescription");
  diagnostics$.DiagnosticPropertiesBuilder = class DiagnosticPropertiesBuilder extends core.Object {
    get properties() {
      return this[properties$];
    }
    set properties(value) {
      super.properties = value;
    }
    get defaultDiagnosticsTreeStyle() {
      return this[defaultDiagnosticsTreeStyle];
    }
    set defaultDiagnosticsTreeStyle(value) {
      this[defaultDiagnosticsTreeStyle] = value;
    }
    get emptyBodyDescription() {
      return this[emptyBodyDescription];
    }
    set emptyBodyDescription(value) {
      this[emptyBodyDescription] = value;
    }
    add(property) {
      if (property == null) dart.nullFailed(L1, 3053, 28, "property");
      if (!dart.test(dart.fn(() => {
        this.properties[$add](property);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L1, 3054, 12, "() {\n      properties.add(property);\n      return true;\n    }()");
    }
  };
  (diagnostics$.DiagnosticPropertiesBuilder.new = function() {
    this[defaultDiagnosticsTreeStyle] = diagnostics$.DiagnosticsTreeStyle.sparse;
    this[emptyBodyDescription] = null;
    this[properties$] = JSArrayOfDiagnosticsNode().of([]);
    ;
  }).prototype = diagnostics$.DiagnosticPropertiesBuilder.prototype;
  (diagnostics$.DiagnosticPropertiesBuilder.fromProperties = function(properties) {
    if (properties == null) dart.nullFailed(L1, 3050, 51, "properties");
    this[defaultDiagnosticsTreeStyle] = diagnostics$.DiagnosticsTreeStyle.sparse;
    this[emptyBodyDescription] = null;
    this[properties$] = properties;
    ;
  }).prototype = diagnostics$.DiagnosticPropertiesBuilder.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticPropertiesBuilder);
  dart.addTypeCaches(diagnostics$.DiagnosticPropertiesBuilder);
  dart.setMethodSignature(diagnostics$.DiagnosticPropertiesBuilder, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticPropertiesBuilder.__proto__),
    add: dart.fnType(dart.void, [diagnostics$.DiagnosticsNode])
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticPropertiesBuilder, L2);
  dart.setFieldSignature(diagnostics$.DiagnosticPropertiesBuilder, () => ({
    __proto__: dart.getFields(diagnostics$.DiagnosticPropertiesBuilder.__proto__),
    properties: dart.finalFieldType(core.List$(diagnostics$.DiagnosticsNode)),
    defaultDiagnosticsTreeStyle: dart.fieldType(diagnostics$.DiagnosticsTreeStyle),
    emptyBodyDescription: dart.fieldType(dart.nullable(core.String))
  }));
  diagnostics$.DiagnosticableTreeMixin = class DiagnosticableTreeMixin extends core.Object {};
  diagnostics$.DiagnosticableTreeMixin[dart.mixinOn] = Object => {
    class DiagnosticableTreeMixin extends Object {
      toString(opts) {
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C5 || CT.C5;
        if (minLevel == null) dart.nullFailed(L1, 3465, 37, "minLevel");
        return this.toDiagnosticsNode({style: diagnostics$.DiagnosticsTreeStyle.singleLine}).toString({minLevel: minLevel});
      }
      toStringShallow(opts) {
        let t8;
        let joiner = opts && 'joiner' in opts ? opts.joiner : ", ";
        if (joiner == null) dart.nullFailed(L1, 3471, 12, "joiner");
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C4 || CT.C4;
        if (minLevel == null) dart.nullFailed(L1, 3472, 21, "minLevel");
        let shallowString = null;
        if (!dart.test(dart.fn(() => {
          let result = new core.StringBuffer.new();
          result.write(this.toStringShort());
          result.write(joiner);
          let builder = new diagnostics$.DiagnosticPropertiesBuilder.new();
          this.debugFillProperties(builder);
          result.write(builder.properties[$where](dart.fn(n => {
            if (n == null) dart.nullFailed(L1, 3482, 51, "n");
            return !dart.test(n.isFiltered(minLevel));
          }, DiagnosticsNodeTobool()))[$join](joiner));
          shallowString = result.toString();
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L1, 3475, 12, "() {\n      final StringBuffer result = StringBuffer();\n      result.write(toStringShort());\n      result.write(joiner);\n      final DiagnosticPropertiesBuilder builder = DiagnosticPropertiesBuilder();\n      debugFillProperties(builder);\n      result.write(\n        builder.properties.where((DiagnosticsNode n) => !n.isFiltered(minLevel))\n            .join(joiner),\n      );\n      shallowString = result.toString();\n      return true;\n    }()");
        t8 = shallowString;
        return t8 == null ? this.toString() : t8;
      }
      toStringDeep(opts) {
        let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
        if (prefixLineOne == null) dart.nullFailed(L1, 3493, 12, "prefixLineOne");
        let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C4 || CT.C4;
        if (minLevel == null) dart.nullFailed(L1, 3495, 21, "minLevel");
        return this.toDiagnosticsNode().toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
      }
      toStringShort() {
        return diagnostics$.describeIdentity(this);
      }
      toDiagnosticsNode(opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let style = opts && 'style' in opts ? opts.style : null;
        return new diagnostics$.DiagnosticableTreeNode.new({name: name, value: this, style: style});
      }
      debugDescribeChildren() {
        return C31 || CT.C31;
      }
      debugFillProperties(properties) {
        if (properties == null) dart.nullFailed(L1, 3516, 56, "properties");
      }
    }
    dart.defineExtensionMethods(DiagnosticableTreeMixin, ['toString']);
    return DiagnosticableTreeMixin;
  };
  (diagnostics$.DiagnosticableTreeMixin[dart.mixinNew] = function() {
  }).prototype = diagnostics$.DiagnosticableTreeMixin.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticableTreeMixin);
  dart.addTypeCaches(diagnostics$.DiagnosticableTreeMixin);
  diagnostics$.DiagnosticableTreeMixin[dart.implements] = () => [diagnostics$.DiagnosticableTree, core.Object];
  dart.setMethodSignature(diagnostics$.DiagnosticableTreeMixin, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticableTreeMixin.__proto__),
    toString: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel}, {}),
    [$toString]: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel}, {}),
    toStringShallow: dart.fnType(core.String, [], {joiner: core.String, minLevel: diagnostics$.DiagnosticLevel}, {}),
    toStringDeep: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel, prefixLineOne: core.String, prefixOtherLines: dart.nullable(core.String)}, {}),
    toStringShort: dart.fnType(core.String, []),
    toDiagnosticsNode: dart.fnType(diagnostics$.DiagnosticsNode, [], {name: dart.nullable(core.String), style: dart.nullable(diagnostics$.DiagnosticsTreeStyle)}, {}),
    debugDescribeChildren: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), []),
    debugFillProperties: dart.fnType(dart.void, [diagnostics$.DiagnosticPropertiesBuilder])
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticableTreeMixin, L2);
  var _children = dart.privateName(diagnostics$, "_children");
  var _properties = dart.privateName(diagnostics$, "_properties");
  var level$ = dart.privateName(diagnostics$, "DiagnosticsBlock.level");
  var value$0 = dart.privateName(diagnostics$, "DiagnosticsBlock.value");
  var allowTruncate$ = dart.privateName(diagnostics$, "DiagnosticsBlock.allowTruncate");
  diagnostics$.DiagnosticsBlock = class DiagnosticsBlock extends diagnostics$.DiagnosticsNode {
    get level() {
      return this[level$];
    }
    set level(value) {
      super.level = value;
    }
    get value() {
      return this[value$0];
    }
    set value(value) {
      super.value = value;
    }
    get allowTruncate() {
      return this[allowTruncate$];
    }
    set allowTruncate(value) {
      super.allowTruncate = value;
    }
    getChildren() {
      return this[_children];
    }
    getProperties() {
      return this[_properties];
    }
    toDescription(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      return this[_description];
    }
  };
  (diagnostics$.DiagnosticsBlock.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : C18 || CT.C18;
    if (style == null) dart.nullFailed(L1, 3529, 26, "style");
    let showName = opts && 'showName' in opts ? opts.showName : true;
    if (showName == null) dart.nullFailed(L1, 3530, 10, "showName");
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    if (showSeparator == null) dart.nullFailed(L1, 3531, 10, "showSeparator");
    let linePrefix = opts && 'linePrefix' in opts ? opts.linePrefix : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let description = opts && 'description' in opts ? opts.description : null;
    let level = opts && 'level' in opts ? opts.level : C5 || CT.C5;
    if (level == null) dart.nullFailed(L1, 3535, 10, "level");
    let allowTruncate = opts && 'allowTruncate' in opts ? opts.allowTruncate : false;
    if (allowTruncate == null) dart.nullFailed(L1, 3536, 10, "allowTruncate");
    let children = opts && 'children' in opts ? opts.children : C31 || CT.C31;
    if (children == null) dart.nullFailed(L1, 3537, 27, "children");
    let properties = opts && 'properties' in opts ? opts.properties : C31 || CT.C31;
    if (properties == null) dart.nullFailed(L1, 3538, 27, "properties");
    this[value$0] = value;
    this[level$] = level;
    this[allowTruncate$] = allowTruncate;
    this[_description] = description;
    this[_children] = children;
    this[_properties] = properties;
    diagnostics$.DiagnosticsBlock.__proto__.new.call(this, {name: name, style: style, showName: dart.test(showName) && name != null, showSeparator: showSeparator, linePrefix: linePrefix});
    ;
  }).prototype = diagnostics$.DiagnosticsBlock.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticsBlock);
  dart.addTypeCaches(diagnostics$.DiagnosticsBlock);
  dart.setMethodSignature(diagnostics$.DiagnosticsBlock, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticsBlock.__proto__),
    getChildren: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), []),
    getProperties: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), []),
    toDescription: dart.fnType(dart.nullable(core.String), [], {parentConfiguration: dart.nullable(diagnostics$.TextTreeConfiguration)}, {})
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticsBlock, L2);
  dart.setFieldSignature(diagnostics$.DiagnosticsBlock, () => ({
    __proto__: dart.getFields(diagnostics$.DiagnosticsBlock.__proto__),
    [_children]: dart.finalFieldType(core.List$(diagnostics$.DiagnosticsNode)),
    [_properties]: dart.finalFieldType(core.List$(diagnostics$.DiagnosticsNode)),
    level: dart.finalFieldType(diagnostics$.DiagnosticLevel),
    [_description]: dart.finalFieldType(dart.nullable(core.String)),
    value: dart.finalFieldType(dart.nullable(core.Object)),
    allowTruncate: dart.finalFieldType(core.bool)
  }));
  diagnostics$.DiagnosticsSerializationDelegate = class DiagnosticsSerializationDelegate extends core.Object {};
  (diagnostics$.DiagnosticsSerializationDelegate[dart.mixinNew] = function() {
  }).prototype = diagnostics$.DiagnosticsSerializationDelegate.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticsSerializationDelegate);
  dart.addTypeCaches(diagnostics$.DiagnosticsSerializationDelegate);
  dart.setLibraryUri(diagnostics$.DiagnosticsSerializationDelegate, L2);
  var C32;
  var includeProperties$ = dart.privateName(diagnostics$, "_DefaultDiagnosticsSerializationDelegate.includeProperties");
  var subtreeDepth$ = dart.privateName(diagnostics$, "_DefaultDiagnosticsSerializationDelegate.subtreeDepth");
  diagnostics$._DefaultDiagnosticsSerializationDelegate = class _DefaultDiagnosticsSerializationDelegate extends core.Object {
    get includeProperties() {
      return this[includeProperties$];
    }
    set includeProperties(value) {
      super.includeProperties = value;
    }
    get subtreeDepth() {
      return this[subtreeDepth$];
    }
    set subtreeDepth(value) {
      super.subtreeDepth = value;
    }
    additionalNodeProperties(node) {
      if (node == null) dart.nullFailed(L1, 3686, 65, "node");
      return C32 || CT.C32;
    }
    delegateForNode(node) {
      if (node == null) dart.nullFailed(L1, 3691, 68, "node");
      return dart.notNull(this.subtreeDepth) > 0 ? this.copyWith({subtreeDepth: dart.notNull(this.subtreeDepth) - 1}) : this;
    }
    get expandPropertyValues() {
      return false;
    }
    filterChildren(nodes, owner) {
      if (nodes == null) dart.nullFailed(L1, 3699, 62, "nodes");
      if (owner == null) dart.nullFailed(L1, 3699, 85, "owner");
      return nodes;
    }
    filterProperties(nodes, owner) {
      if (nodes == null) dart.nullFailed(L1, 3704, 64, "nodes");
      if (owner == null) dart.nullFailed(L1, 3704, 87, "owner");
      return nodes;
    }
    truncateNodesList(nodes, owner) {
      if (nodes == null) dart.nullFailed(L1, 3715, 65, "nodes");
      return nodes;
    }
    copyWith(opts) {
      let t8, t8$;
      let subtreeDepth = opts && 'subtreeDepth' in opts ? opts.subtreeDepth : null;
      let includeProperties = opts && 'includeProperties' in opts ? opts.includeProperties : null;
      return new diagnostics$._DefaultDiagnosticsSerializationDelegate.new({subtreeDepth: (t8 = subtreeDepth, t8 == null ? this.subtreeDepth : t8), includeProperties: (t8$ = includeProperties, t8$ == null ? this.includeProperties : t8$)});
    }
  };
  (diagnostics$._DefaultDiagnosticsSerializationDelegate.new = function(opts) {
    let includeProperties = opts && 'includeProperties' in opts ? opts.includeProperties : false;
    if (includeProperties == null) dart.nullFailed(L1, 3681, 10, "includeProperties");
    let subtreeDepth = opts && 'subtreeDepth' in opts ? opts.subtreeDepth : 0;
    if (subtreeDepth == null) dart.nullFailed(L1, 3682, 10, "subtreeDepth");
    this[includeProperties$] = includeProperties;
    this[subtreeDepth$] = subtreeDepth;
    ;
  }).prototype = diagnostics$._DefaultDiagnosticsSerializationDelegate.prototype;
  dart.addTypeTests(diagnostics$._DefaultDiagnosticsSerializationDelegate);
  dart.addTypeCaches(diagnostics$._DefaultDiagnosticsSerializationDelegate);
  diagnostics$._DefaultDiagnosticsSerializationDelegate[dart.implements] = () => [diagnostics$.DiagnosticsSerializationDelegate];
  dart.setMethodSignature(diagnostics$._DefaultDiagnosticsSerializationDelegate, () => ({
    __proto__: dart.getMethods(diagnostics$._DefaultDiagnosticsSerializationDelegate.__proto__),
    additionalNodeProperties: dart.fnType(core.Map$(core.String, dart.nullable(core.Object)), [diagnostics$.DiagnosticsNode]),
    delegateForNode: dart.fnType(diagnostics$.DiagnosticsSerializationDelegate, [diagnostics$.DiagnosticsNode]),
    filterChildren: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), [core.List$(diagnostics$.DiagnosticsNode), diagnostics$.DiagnosticsNode]),
    filterProperties: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), [core.List$(diagnostics$.DiagnosticsNode), diagnostics$.DiagnosticsNode]),
    truncateNodesList: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), [core.List$(diagnostics$.DiagnosticsNode), dart.nullable(diagnostics$.DiagnosticsNode)]),
    copyWith: dart.fnType(diagnostics$.DiagnosticsSerializationDelegate, [], {includeProperties: dart.nullable(core.bool), subtreeDepth: dart.nullable(core.int)}, {})
  }));
  dart.setGetterSignature(diagnostics$._DefaultDiagnosticsSerializationDelegate, () => ({
    __proto__: dart.getGetters(diagnostics$._DefaultDiagnosticsSerializationDelegate.__proto__),
    expandPropertyValues: core.bool
  }));
  dart.setLibraryUri(diagnostics$._DefaultDiagnosticsSerializationDelegate, L2);
  dart.setFieldSignature(diagnostics$._DefaultDiagnosticsSerializationDelegate, () => ({
    __proto__: dart.getFields(diagnostics$._DefaultDiagnosticsSerializationDelegate.__proto__),
    includeProperties: dart.finalFieldType(core.bool),
    subtreeDepth: dart.finalFieldType(core.int)
  }));
  diagnostics$._isSingleLine = function _isSingleLine(style) {
    return dart.equals(style, diagnostics$.DiagnosticsTreeStyle.singleLine);
  };
  diagnostics$.shortHash = function shortHash(object) {
    return dart.hashCode(object)[$toUnsigned](20)[$toRadixString](16)[$padLeft](5, "0");
  };
  diagnostics$.describeIdentity = function describeIdentity(object) {
    return dart.str(object$.objectRuntimeType(object, "<optimized out>")) + "#" + dart.str(diagnostics$.shortHash(object));
  };
  diagnostics$.describeEnum = function describeEnum(enumEntry) {
    if (enumEntry == null) dart.nullFailed(L1, 3032, 28, "enumEntry");
    let description = dart.toString(enumEntry);
    let indexOfDot = description[$indexOf](".");
    if (!(indexOfDot !== -1 && indexOfDot < description.length - 1)) dart.assertFailed("The provided object \"" + dart.str(enumEntry) + "\" is not an enum.", L1, 3036, 5, "indexOfDot != -1 && indexOfDot < description.length - 1");
    return description[$substring](indexOfDot + 1);
  };
  dart.defineLazy(diagnostics$, {
    /*diagnostics$.sparseTextConfiguration*/get sparseTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "├─", prefixOtherLines: " ", prefixLastChildLineOne: "└─", linkCharacter: "│", propertyPrefixIfChildren: "│ ", propertyPrefixNoChildren: "  ", prefixOtherLinesRootNode: " "});
    },
    /*diagnostics$.dashedTextConfiguration*/get dashedTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "╎╌", prefixLastChildLineOne: "└╌", prefixOtherLines: " ", linkCharacter: "╎", propertyPrefixIfChildren: "│ ", propertyPrefixNoChildren: "  ", prefixOtherLinesRootNode: " "});
    },
    /*diagnostics$.denseTextConfiguration*/get denseTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", lineBreakProperties: false, prefixLineOne: "├", prefixOtherLines: "", prefixLastChildLineOne: "└", linkCharacter: "│", propertyPrefixIfChildren: "│", propertyPrefixNoChildren: " ", prefixOtherLinesRootNode: "", addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*diagnostics$.transitionTextConfiguration*/get transitionTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "╞═╦══ ", prefixLastChildLineOne: "╘═╦══ ", prefixOtherLines: " ║ ", footer: " ╚═══════════", linkCharacter: "│", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", prefixOtherLinesRootNode: "", afterName: " ═══", afterDescriptionIfBody: ":", bodyIndent: "  ", isNameOnOwnLine: true, addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*diagnostics$.errorTextConfiguration*/get errorTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "╞═╦", prefixLastChildLineOne: "╘═╦", prefixOtherLines: " ║ ", footer: " ╚═══════════", linkCharacter: "│", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", prefixOtherLinesRootNode: "", beforeName: "══╡ ", suffixLineOne: " ╞══", mandatoryFooter: "═════", addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*diagnostics$.whitespaceTextConfiguration*/get whitespaceTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "", prefixLastChildLineOne: "", prefixOtherLines: " ", prefixOtherLinesRootNode: "  ", bodyIndent: "", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: " ", addBlankLineIfNoChildren: false, afterDescriptionIfBody: ":", isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*diagnostics$.flatTextConfiguration*/get flatTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "", prefixLastChildLineOne: "", prefixOtherLines: "", prefixOtherLinesRootNode: "", bodyIndent: "", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: "", addBlankLineIfNoChildren: false, afterDescriptionIfBody: ":", isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*diagnostics$.singleLineTextConfiguration*/get singleLineTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", prefixLineOne: "", prefixOtherLines: "", prefixLastChildLineOne: "", lineBreak: "", lineBreakProperties: false, addBlankLineIfNoChildren: false, showChildren: false, propertyPrefixIfChildren: "  ", propertyPrefixNoChildren: "  ", linkCharacter: "", prefixOtherLinesRootNode: ""});
    },
    /*diagnostics$.errorPropertyTextConfiguration*/get errorPropertyTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", prefixLineOne: "", prefixOtherLines: "", prefixLastChildLineOne: "", lineBreak: "\n", lineBreakProperties: false, addBlankLineIfNoChildren: false, showChildren: false, propertyPrefixIfChildren: "  ", propertyPrefixNoChildren: "  ", linkCharacter: "", prefixOtherLinesRootNode: "", afterName: ":", isNameOnOwnLine: true});
    },
    /*diagnostics$.shallowTextConfiguration*/get shallowTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "", prefixLastChildLineOne: "", prefixOtherLines: " ", prefixOtherLinesRootNode: "  ", bodyIndent: "", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: " ", addBlankLineIfNoChildren: false, afterDescriptionIfBody: ":", isBlankLineBetweenPropertiesAndChildren: false, showChildren: false});
    },
    /*diagnostics$.kNoDefaultValue*/get kNoDefaultValue() {
      return C30 || CT.C30;
    }
  }, false);
  var package$ = dart.privateName(assertions, "PartialStackFrame.package");
  var className$ = dart.privateName(assertions, "PartialStackFrame.className");
  var method$ = dart.privateName(assertions, "PartialStackFrame.method");
  var C33;
  assertions.PartialStackFrame = class PartialStackFrame extends core.Object {
    get package() {
      return this[package$];
    }
    set package(value) {
      super.package = value;
    }
    get className() {
      return this[className$];
    }
    set className(value) {
      super.className = value;
    }
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    matches(stackFrame) {
      if (stackFrame == null) dart.nullFailed(L3, 79, 27, "stackFrame");
      let stackFramePackage = dart.str(stackFrame.packageScheme) + ":" + dart.str(stackFrame.package) + "/" + dart.str(stackFrame.packagePath);
      if (true) {
        return dart.test(this.package[$allMatches](stackFramePackage)[$isNotEmpty]) && stackFrame.method == (this.method[$startsWith]("_") ? "[" + dart.str(this.method) + "]" : this.method);
      }
      return dart.test(this.package[$allMatches](stackFramePackage)[$isNotEmpty]) && stackFrame.method == this.method && stackFrame.className == this.className;
    }
  };
  (assertions.PartialStackFrame.new = function(opts) {
    let $package = opts && 'package' in opts ? opts.package : null;
    if ($package == null) dart.nullFailed(L3, 47, 19, "package");
    let className = opts && 'className' in opts ? opts.className : null;
    if (className == null) dart.nullFailed(L3, 48, 19, "className");
    let method = opts && 'method' in opts ? opts.method : null;
    if (method == null) dart.nullFailed(L3, 49, 19, "method");
    this[package$] = $package;
    this[className$] = className;
    this[method$] = method;
    if (!(className != null)) dart.assertFailed(null, L3, 50, 15, "className != null");
    if (!(method != null)) dart.assertFailed(null, L3, 51, 15, "method != null");
    if (!($package != null)) dart.assertFailed(null, L3, 52, 15, "package != null");
    ;
  }).prototype = assertions.PartialStackFrame.prototype;
  dart.addTypeTests(assertions.PartialStackFrame);
  dart.addTypeCaches(assertions.PartialStackFrame);
  dart.setMethodSignature(assertions.PartialStackFrame, () => ({
    __proto__: dart.getMethods(assertions.PartialStackFrame.__proto__),
    matches: dart.fnType(core.bool, [stack_frame.StackFrame])
  }));
  dart.setLibraryUri(assertions.PartialStackFrame, L4);
  dart.setFieldSignature(assertions.PartialStackFrame, () => ({
    __proto__: dart.getFields(assertions.PartialStackFrame.__proto__),
    package: dart.finalFieldType(core.Pattern),
    className: dart.finalFieldType(core.String),
    method: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(assertions.PartialStackFrame, {
    /*assertions.PartialStackFrame.asynchronousSuspension*/get asynchronousSuspension() {
      return C33 || CT.C33;
    }
  }, false);
  assertions.StackFilter = class StackFilter extends core.Object {};
  (assertions.StackFilter.new = function() {
    ;
  }).prototype = assertions.StackFilter.prototype;
  dart.addTypeTests(assertions.StackFilter);
  dart.addTypeCaches(assertions.StackFilter);
  dart.setLibraryUri(assertions.StackFilter, L4);
  var _replacements = dart.privateName(assertions, "_replacements");
  var _matchesFrames = dart.privateName(assertions, "_matchesFrames");
  var frames$ = dart.privateName(assertions, "RepetitiveStackFrameFilter.frames");
  var replacement$ = dart.privateName(assertions, "RepetitiveStackFrameFilter.replacement");
  assertions.RepetitiveStackFrameFilter = class RepetitiveStackFrameFilter extends assertions.StackFilter {
    get frames() {
      return this[frames$];
    }
    set frames(value) {
      super.frames = value;
    }
    get replacement() {
      return this[replacement$];
    }
    set replacement(value) {
      super.replacement = value;
    }
    get numFrames() {
      return this.frames[$length];
    }
    get [_replacements]() {
      return ListOfString().filled(this.numFrames, this.replacement);
    }
    filter(stackFrames, reasons) {
      if (stackFrames == null) dart.nullFailed(L3, 142, 32, "stackFrames");
      if (reasons == null) dart.nullFailed(L3, 142, 59, "reasons");
      for (let index = 0; index < dart.notNull(stackFrames[$length]) - dart.notNull(this.numFrames); index = index + 1) {
        if (dart.test(this[_matchesFrames](stackFrames[$skip](index)[$take](this.numFrames)[$toList]()))) {
          reasons[$setRange](index, index + dart.notNull(this.numFrames), this[_replacements]);
          index = index + (dart.notNull(this.numFrames) - 1);
        }
      }
    }
    [_matchesFrames](stackFrames) {
      if (stackFrames == null) dart.nullFailed(L3, 151, 40, "stackFrames");
      if (dart.notNull(stackFrames[$length]) < dart.notNull(this.numFrames)) {
        return false;
      }
      for (let index = 0; index < dart.notNull(stackFrames[$length]); index = index + 1) {
        if (!dart.test(this.frames[$_get](index).matches(stackFrames[$_get](index)))) {
          return false;
        }
      }
      return true;
    }
  };
  (assertions.RepetitiveStackFrameFilter.new = function(opts) {
    let frames = opts && 'frames' in opts ? opts.frames : null;
    if (frames == null) dart.nullFailed(L3, 121, 19, "frames");
    let replacement = opts && 'replacement' in opts ? opts.replacement : null;
    if (replacement == null) dart.nullFailed(L3, 122, 19, "replacement");
    this[frames$] = frames;
    this[replacement$] = replacement;
    if (!(frames != null)) dart.assertFailed(null, L3, 123, 15, "frames != null");
    if (!(replacement != null)) dart.assertFailed(null, L3, 124, 15, "replacement != null");
    assertions.RepetitiveStackFrameFilter.__proto__.new.call(this);
    ;
  }).prototype = assertions.RepetitiveStackFrameFilter.prototype;
  dart.addTypeTests(assertions.RepetitiveStackFrameFilter);
  dart.addTypeCaches(assertions.RepetitiveStackFrameFilter);
  dart.setMethodSignature(assertions.RepetitiveStackFrameFilter, () => ({
    __proto__: dart.getMethods(assertions.RepetitiveStackFrameFilter.__proto__),
    filter: dart.fnType(dart.void, [core.List$(stack_frame.StackFrame), core.List$(dart.nullable(core.String))]),
    [_matchesFrames]: dart.fnType(core.bool, [core.List$(stack_frame.StackFrame)])
  }));
  dart.setGetterSignature(assertions.RepetitiveStackFrameFilter, () => ({
    __proto__: dart.getGetters(assertions.RepetitiveStackFrameFilter.__proto__),
    numFrames: core.int,
    [_replacements]: core.List$(core.String)
  }));
  dart.setLibraryUri(assertions.RepetitiveStackFrameFilter, L4);
  dart.setFieldSignature(assertions.RepetitiveStackFrameFilter, () => ({
    __proto__: dart.getFields(assertions.RepetitiveStackFrameFilter.__proto__),
    frames: dart.finalFieldType(core.List$(assertions.PartialStackFrame)),
    replacement: dart.finalFieldType(core.String)
  }));
  assertions._ErrorDiagnostic = class _ErrorDiagnostic extends diagnostics$.DiagnosticsProperty$(core.List$(core.Object)) {
    get value() {
      return dart.nullCheck(super.value);
    }
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      return this.value[$join]("");
    }
  };
  (assertions._ErrorDiagnostic.new = function(message, opts) {
    if (message == null) dart.nullFailed(L3, 169, 12, "message");
    let style = opts && 'style' in opts ? opts.style : C19 || CT.C19;
    if (style == null) dart.nullFailed(L3, 170, 26, "style");
    let level = opts && 'level' in opts ? opts.level : C5 || CT.C5;
    if (level == null) dart.nullFailed(L3, 171, 21, "level");
    if (!(message != null)) dart.assertFailed(null, L3, 172, 15, "message != null");
    assertions._ErrorDiagnostic.__proto__.new.call(this, null, JSArrayOfObject().of([message]), {showName: false, showSeparator: false, defaultValue: null, style: style, level: level});
    ;
  }).prototype = assertions._ErrorDiagnostic.prototype;
  (assertions._ErrorDiagnostic._fromParts = function(messageParts, opts) {
    if (messageParts == null) dart.nullFailed(L3, 209, 18, "messageParts");
    let style = opts && 'style' in opts ? opts.style : C19 || CT.C19;
    if (style == null) dart.nullFailed(L3, 210, 26, "style");
    let level = opts && 'level' in opts ? opts.level : C5 || CT.C5;
    if (level == null) dart.nullFailed(L3, 211, 21, "level");
    if (!(messageParts != null)) dart.assertFailed(null, L3, 212, 15, "messageParts != null");
    assertions._ErrorDiagnostic.__proto__.new.call(this, null, messageParts, {showName: false, showSeparator: false, defaultValue: null, style: style, level: level});
    ;
  }).prototype = assertions._ErrorDiagnostic.prototype;
  dart.addTypeTests(assertions._ErrorDiagnostic);
  dart.addTypeCaches(assertions._ErrorDiagnostic);
  dart.setGetterSignature(assertions._ErrorDiagnostic, () => ({
    __proto__: dart.getGetters(assertions._ErrorDiagnostic.__proto__),
    value: core.List$(core.Object)
  }));
  dart.setLibraryUri(assertions._ErrorDiagnostic, L4);
  assertions.ErrorDescription = class ErrorDescription extends assertions._ErrorDiagnostic {};
  (assertions.ErrorDescription.new = function(message) {
    if (message == null) dart.nullFailed(L3, 261, 27, "message");
    assertions.ErrorDescription.__proto__.new.call(this, message, {level: diagnostics$.DiagnosticLevel.info});
    ;
  }).prototype = assertions.ErrorDescription.prototype;
  (assertions.ErrorDescription._fromParts = function(messageParts) {
    if (messageParts == null) dart.nullFailed(L3, 266, 44, "messageParts");
    assertions.ErrorDescription.__proto__._fromParts.call(this, messageParts, {level: diagnostics$.DiagnosticLevel.info});
    ;
  }).prototype = assertions.ErrorDescription.prototype;
  dart.addTypeTests(assertions.ErrorDescription);
  dart.addTypeCaches(assertions.ErrorDescription);
  dart.setLibraryUri(assertions.ErrorDescription, L4);
  assertions.ErrorSummary = class ErrorSummary extends assertions._ErrorDiagnostic {};
  (assertions.ErrorSummary.new = function(message) {
    if (message == null) dart.nullFailed(L3, 300, 23, "message");
    assertions.ErrorSummary.__proto__.new.call(this, message, {level: diagnostics$.DiagnosticLevel.summary});
    ;
  }).prototype = assertions.ErrorSummary.prototype;
  (assertions.ErrorSummary._fromParts = function(messageParts) {
    if (messageParts == null) dart.nullFailed(L3, 305, 40, "messageParts");
    assertions.ErrorSummary.__proto__._fromParts.call(this, messageParts, {level: diagnostics$.DiagnosticLevel.summary});
    ;
  }).prototype = assertions.ErrorSummary.prototype;
  dart.addTypeTests(assertions.ErrorSummary);
  dart.addTypeCaches(assertions.ErrorSummary);
  dart.setLibraryUri(assertions.ErrorSummary, L4);
  assertions.ErrorHint = class ErrorHint extends assertions._ErrorDiagnostic {};
  (assertions.ErrorHint.new = function(message) {
    if (message == null) dart.nullFailed(L3, 335, 20, "message");
    assertions.ErrorHint.__proto__.new.call(this, message, {level: diagnostics$.DiagnosticLevel.hint});
    ;
  }).prototype = assertions.ErrorHint.prototype;
  (assertions.ErrorHint._fromParts = function(messageParts) {
    if (messageParts == null) dart.nullFailed(L3, 340, 37, "messageParts");
    assertions.ErrorHint.__proto__._fromParts.call(this, messageParts, {level: diagnostics$.DiagnosticLevel.hint});
    ;
  }).prototype = assertions.ErrorHint.prototype;
  dart.addTypeTests(assertions.ErrorHint);
  dart.addTypeCaches(assertions.ErrorHint);
  dart.setLibraryUri(assertions.ErrorHint, L4);
  assertions.ErrorSpacer = class ErrorSpacer extends diagnostics$.DiagnosticsProperty$(dart.void) {};
  (assertions.ErrorSpacer.new = function() {
    assertions.ErrorSpacer.__proto__.new.call(this, "", null, {description: "", showName: false});
    ;
  }).prototype = assertions.ErrorSpacer.prototype;
  dart.addTypeTests(assertions.ErrorSpacer);
  dart.addTypeCaches(assertions.ErrorSpacer);
  dart.setLibraryUri(assertions.ErrorSpacer, L4);
  var _exceptionToDiagnosticable = dart.privateName(assertions, "_exceptionToDiagnosticable");
  var exception$ = dart.privateName(assertions, "FlutterErrorDetails.exception");
  var stack$ = dart.privateName(assertions, "FlutterErrorDetails.stack");
  var library$ = dart.privateName(assertions, "FlutterErrorDetails.library");
  var context$ = dart.privateName(assertions, "FlutterErrorDetails.context");
  var stackFilter$ = dart.privateName(assertions, "FlutterErrorDetails.stackFilter");
  var informationCollector$ = dart.privateName(assertions, "FlutterErrorDetails.informationCollector");
  var silent$ = dart.privateName(assertions, "FlutterErrorDetails.silent");
  const Object_Diagnosticable$36$ = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36$.new = function() {
  }).prototype = Object_Diagnosticable$36$.prototype;
  dart.applyMixin(Object_Diagnosticable$36$, diagnostics$.Diagnosticable);
  assertions.FlutterErrorDetails = class FlutterErrorDetails extends Object_Diagnosticable$36$ {
    get exception() {
      return this[exception$];
    }
    set exception(value) {
      super.exception = value;
    }
    get stack() {
      return this[stack$];
    }
    set stack(value) {
      super.stack = value;
    }
    get library() {
      return this[library$];
    }
    set library(value) {
      super.library = value;
    }
    get context() {
      return this[context$];
    }
    set context(value) {
      super.context = value;
    }
    get stackFilter() {
      return this[stackFilter$];
    }
    set stackFilter(value) {
      super.stackFilter = value;
    }
    get informationCollector() {
      return this[informationCollector$];
    }
    set informationCollector(value) {
      super.informationCollector = value;
    }
    get silent() {
      return this[silent$];
    }
    set silent(value) {
      super.silent = value;
    }
    copyWith(opts) {
      let t8, t8$, t8$0, t8$1, t8$2, t8$3, t8$4;
      let context = opts && 'context' in opts ? opts.context : null;
      let exception = opts && 'exception' in opts ? opts.exception : null;
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      let library = opts && 'library' in opts ? opts.library : null;
      let silent = opts && 'silent' in opts ? opts.silent : null;
      let stack = opts && 'stack' in opts ? opts.stack : null;
      let stackFilter = opts && 'stackFilter' in opts ? opts.stackFilter : null;
      return new assertions.FlutterErrorDetails.new({context: (t8 = context, t8 == null ? this.context : t8), exception: (t8$ = exception, t8$ == null ? this.exception : t8$), informationCollector: (t8$0 = informationCollector, t8$0 == null ? this.informationCollector : t8$0), library: (t8$1 = library, t8$1 == null ? this.library : t8$1), silent: (t8$2 = silent, t8$2 == null ? this.silent : t8$2), stack: (t8$3 = stack, t8$3 == null ? this.stack : t8$3), stackFilter: (t8$4 = stackFilter, t8$4 == null ? this.stackFilter : t8$4)});
    }
    exceptionAsString() {
      let longMessage = null;
      if (core.AssertionError.is(this.exception)) {
        let message = core.AssertionError.as(this.exception).message;
        let fullMessage = dart.toString(this.exception);
        if (typeof message == 'string' && message != fullMessage) {
          if (fullMessage.length > message.length) {
            let position = fullMessage[$lastIndexOf](message);
            if (position === fullMessage.length - message.length && position > 2 && fullMessage[$substring](position - 2, position) === ": ") {
              let body = fullMessage[$substring](0, position - 2);
              let splitPoint = body[$indexOf](" Failed assertion:");
              if (splitPoint >= 0) {
                body = body[$substring](0, splitPoint) + "\n" + body[$substring](splitPoint + 1);
              }
              longMessage = message[$trimRight]() + "\n" + body;
            }
          }
        }
        longMessage == null ? longMessage = fullMessage : null;
      } else if (typeof this.exception == 'string') {
        longMessage = core.String.as(this.exception);
      } else if (core.Error.is(this.exception) || core.Exception.is(this.exception)) {
        longMessage = dart.toString(this.exception);
      } else {
        longMessage = "  " + dart.str(dart.toString(this.exception));
      }
      longMessage = longMessage[$trimRight]();
      if (longMessage[$isEmpty]) longMessage = "  <no message available>";
      return longMessage;
    }
    [_exceptionToDiagnosticable]() {
      let exception = this.exception;
      if (assertions.FlutterError.is(exception)) {
        return exception;
      }
      if (core.AssertionError.is(exception) && assertions.FlutterError.is(exception.message)) {
        return assertions.FlutterError.as(dart.nullCheck(exception.message));
      }
      return null;
    }
    get summary() {
      let t8;
      const formatException = () => {
        return this.exceptionAsString()[$split]("\n")[$_get](0)[$trimLeft]();
      };
      dart.fn(formatException, VoidToString());
      if (false) {
        return diagnostics$.DiagnosticsNode.message(formatException());
      }
      let diagnosticable = this[_exceptionToDiagnosticable]();
      let summary = null;
      if (diagnosticable != null) {
        let builder = new diagnostics$.DiagnosticPropertiesBuilder.new();
        this.debugFillProperties(builder);
        summary = builder.properties[$cast](DiagnosticsNodeN())[$firstWhere](dart.fn(node => dart.equals(dart.nullCheck(node).level, diagnostics$.DiagnosticLevel.summary), DiagnosticsNodeNTobool()), {orElse: dart.fn(() => null, VoidToNull())});
      }
      t8 = summary;
      return t8 == null ? new assertions.ErrorSummary.new(formatException()) : t8;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L3, 623, 56, "properties");
      super.debugFillProperties(properties);
      let verb = new assertions.ErrorDescription.new("thrown" + dart.str(this.context != null ? new assertions.ErrorDescription.new(" " + dart.str(this.context)) : ""));
      let diagnosticable = this[_exceptionToDiagnosticable]();
      if (core.NullThrownError.is(this.exception)) {
        properties.add(new assertions.ErrorDescription.new("The null value was " + dart.str(verb) + "."));
      } else if (typeof this.exception == 'number') {
        properties.add(new assertions.ErrorDescription.new("The number " + dart.str(this.exception) + " was " + dart.str(verb) + "."));
      } else {
        let errorName = null;
        if (core.AssertionError.is(this.exception)) {
          errorName = new assertions.ErrorDescription.new("assertion");
        } else if (typeof this.exception == 'string') {
          errorName = new assertions.ErrorDescription.new("message");
        } else if (core.Error.is(this.exception) || core.Exception.is(this.exception)) {
          errorName = new assertions.ErrorDescription.new(dart.str(dart.runtimeType(this.exception)));
        } else {
          errorName = new assertions.ErrorDescription.new(dart.str(dart.runtimeType(this.exception)) + " object");
        }
        properties.add(new assertions.ErrorDescription.new("The following " + dart.str(errorName) + " was " + dart.str(verb) + ":"));
        if (diagnosticable != null) {
          diagnosticable.debugFillProperties(properties);
        } else {
          let prefix = dart.str(dart.runtimeType(this.exception)) + ": ";
          let message = this.exceptionAsString();
          if (message[$startsWith](prefix)) message = message[$substring](prefix.length);
          properties.add(new assertions.ErrorSummary.new(message));
        }
      }
      if (this.stack != null) {
        if (core.AssertionError.is(this.exception) && diagnosticable == null) {
          let stackFrames = stack_frame.StackFrame.fromStackTrace(assertions.FlutterError.demangleStackTrace(dart.nullCheck(this.stack)))[$skipWhile](dart.fn(frame => {
            if (frame == null) dart.nullFailed(L3, 666, 79, "frame");
            return frame.packageScheme === "dart";
          }, StackFrameTobool()))[$toList]();
          let ourFault = dart.notNull(stackFrames[$length]) >= 2 && stackFrames[$_get](0).package === "flutter" && stackFrames[$_get](1).package === "flutter";
          if (ourFault) {
            properties.add(new assertions.ErrorSpacer.new());
            properties.add(new assertions.ErrorHint.new("Either the assertion indicates an error in the framework itself, or we should " + "provide substantially more information in this error message to help you determine " + "and fix the underlying cause.\n" + "In either case, please report this assertion by filing a bug on GitHub:\n" + "  https://github.com/flutter/flutter/issues/new?template=2_bug.md"));
          }
        }
        properties.add(new assertions.ErrorSpacer.new());
        properties.add(new assertions.DiagnosticsStackTrace.new("When the exception was thrown, this was the stack", this.stack, {stackFilter: this.stackFilter}));
      }
      if (this.informationCollector != null) {
        properties.add(new assertions.ErrorSpacer.new());
        dart.nullCheck(this.informationCollector)()[$forEach](dart.bind(properties, 'add'));
      }
    }
    toStringShort() {
      return this.library != null ? "Exception caught by " + dart.str(this.library) : "Exception caught";
    }
    toString(opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C5 || CT.C5;
      if (minLevel == null) dart.nullFailed(L3, 697, 36, "minLevel");
      return this.toDiagnosticsNode({style: diagnostics$.DiagnosticsTreeStyle.error}).toStringDeep({minLevel: minLevel});
    }
    toDiagnosticsNode(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : null;
      return new assertions._FlutterErrorDetailsNode.new({name: name, value: this, style: style});
    }
  };
  (assertions.FlutterErrorDetails.new = function(opts) {
    let exception = opts && 'exception' in opts ? opts.exception : null;
    if (exception == null) dart.nullFailed(L3, 393, 19, "exception");
    let stack = opts && 'stack' in opts ? opts.stack : null;
    let library = opts && 'library' in opts ? opts.library : "Flutter framework";
    let context = opts && 'context' in opts ? opts.context : null;
    let stackFilter = opts && 'stackFilter' in opts ? opts.stackFilter : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let silent = opts && 'silent' in opts ? opts.silent : false;
    if (silent == null) dart.nullFailed(L3, 399, 10, "silent");
    this[exception$] = exception;
    this[stack$] = stack;
    this[library$] = library;
    this[context$] = context;
    this[stackFilter$] = stackFilter;
    this[informationCollector$] = informationCollector;
    this[silent$] = silent;
    if (!(exception != null)) dart.assertFailed(null, L3, 400, 15, "exception != null");
    ;
  }).prototype = assertions.FlutterErrorDetails.prototype;
  dart.addTypeTests(assertions.FlutterErrorDetails);
  dart.addTypeCaches(assertions.FlutterErrorDetails);
  dart.setMethodSignature(assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getMethods(assertions.FlutterErrorDetails.__proto__),
    copyWith: dart.fnType(assertions.FlutterErrorDetails, [], {context: dart.nullable(diagnostics$.DiagnosticsNode), exception: dart.nullable(core.Object), informationCollector: dart.nullable(dart.fnType(core.Iterable$(diagnostics$.DiagnosticsNode), [])), library: dart.nullable(core.String), silent: dart.nullable(core.bool), stack: dart.nullable(core.StackTrace), stackFilter: dart.nullable(dart.fnType(core.Iterable$(core.String), [core.Iterable$(core.String)]))}, {}),
    exceptionAsString: dart.fnType(core.String, []),
    [_exceptionToDiagnosticable]: dart.fnType(dart.nullable(diagnostics$.Diagnosticable), [])
  }));
  dart.setGetterSignature(assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getGetters(assertions.FlutterErrorDetails.__proto__),
    summary: diagnostics$.DiagnosticsNode
  }));
  dart.setLibraryUri(assertions.FlutterErrorDetails, L4);
  dart.setFieldSignature(assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getFields(assertions.FlutterErrorDetails.__proto__),
    exception: dart.finalFieldType(core.Object),
    stack: dart.finalFieldType(dart.nullable(core.StackTrace)),
    library: dart.finalFieldType(dart.nullable(core.String)),
    context: dart.finalFieldType(dart.nullable(diagnostics$.DiagnosticsNode)),
    stackFilter: dart.finalFieldType(dart.nullable(dart.fnType(core.Iterable$(core.String), [core.Iterable$(core.String)]))),
    informationCollector: dart.finalFieldType(dart.nullable(dart.fnType(core.Iterable$(diagnostics$.DiagnosticsNode), []))),
    silent: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(assertions.FlutterErrorDetails, ['toString']);
  dart.defineLazy(assertions.FlutterErrorDetails, {
    /*assertions.FlutterErrorDetails.propertiesTransformers*/get propertiesTransformers() {
      return JSArrayOfIterableOfDiagnosticsNodeToIterableOfDiagnosticsNode().of([]);
    }
  }, false);
  var diagnostics$0 = dart.privateName(assertions, "FlutterError.diagnostics");
  var C34;
  const Error_DiagnosticableTreeMixin$36 = class Error_DiagnosticableTreeMixin extends core.Error {};
  (Error_DiagnosticableTreeMixin$36.new = function() {
    Error_DiagnosticableTreeMixin$36.__proto__.new.call(this);
  }).prototype = Error_DiagnosticableTreeMixin$36.prototype;
  dart.applyMixin(Error_DiagnosticableTreeMixin$36, diagnostics$.DiagnosticableTreeMixin);
  assertions.FlutterError = class FlutterError extends Error_DiagnosticableTreeMixin$36 {
    get diagnostics() {
      return this[diagnostics$0];
    }
    set diagnostics(value) {
      super.diagnostics = value;
    }
    static new(message) {
      if (message == null) dart.nullFailed(L3, 740, 31, "message");
      let lines = message[$split]("\n");
      return new assertions.FlutterError.fromParts((() => {
        let t8 = JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(lines[$first])]);
        t8[$addAll](lines[$skip](1)[$map](diagnostics$.DiagnosticsNode, dart.fn(line => {
          if (line == null) dart.nullFailed(L3, 744, 53, "line");
          return new assertions.ErrorDescription.new(line);
        }, StringToErrorDescription())));
        return t8;
      })());
    }
    get message() {
      return this.toString();
    }
    static resetErrorCount() {
      assertions.FlutterError._errorCount = 0;
    }
    static dumpErrorToConsole(details, opts) {
      if (details == null) dart.nullFailed(L3, 944, 54, "details");
      let forceReport = opts && 'forceReport' in opts ? opts.forceReport : false;
      if (forceReport == null) dart.nullFailed(L3, 944, 70, "forceReport");
      if (!(details != null)) dart.assertFailed(null, L3, 945, 12, "details != null");
      if (!(details.exception != null)) dart.assertFailed(null, L3, 946, 12, "details.exception != null");
      let isInDebugMode = false;
      if (!dart.test(dart.fn(() => {
        isInDebugMode = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L3, 948, 12, "() {\n      // In checked mode, we ignore the \"silent\" flag.\n      isInDebugMode = true;\n      return true;\n    }()");
      let reportError = isInDebugMode || !dart.equals(details.silent, true);
      if (!reportError && !dart.test(forceReport)) return;
      if (assertions.FlutterError._errorCount === 0 || dart.test(forceReport)) {
        if (isInDebugMode) {
          print.debugPrint(new diagnostics$.TextTreeRenderer.new({wrapWidth: 100, wrapWidthProperties: 100, maxDescendentsTruncatableNode: 5}).render(details.toDiagnosticsNode({style: diagnostics$.DiagnosticsTreeStyle.error}))[$trimRight]());
        } else {
          assertions.debugPrintStack({stackTrace: details.stack, label: dart.toString(details.exception), maxFrames: 100});
        }
      } else {
        print.debugPrint("Another exception was thrown: " + dart.str(details.summary));
      }
      assertions.FlutterError._errorCount = dart.notNull(assertions.FlutterError._errorCount) + 1;
    }
    static addDefaultStackFilter(filter) {
      if (filter == null) dart.nullFailed(L3, 988, 49, "filter");
      assertions.FlutterError._stackFilters[$add](filter);
    }
    static defaultStackFilter(frames) {
      let t9, t10;
      if (frames == null) dart.nullFailed(L3, 1003, 63, "frames");
      let removedPackagesAndClasses = new (IdentityMapOfString$int()).from(["dart:async-patch", 0, "dart:async", 0, "package:stack_trace", 0, "class _AssertionError", 0, "class _FakeAsync", 0, "class _FrameCallbackEntry", 0, "class _Timer", 0, "class _RawReceivePortImpl", 0]);
      let skipped = 0;
      let parsedFrames = stack_frame.StackFrame.fromStackString(frames[$join]("\n"));
      for (let index = 0; index < dart.notNull(parsedFrames[$length]); index = index + 1) {
        let frame = parsedFrames[$_get](index);
        let className = "class " + dart.str(frame.className);
        let $package = dart.str(frame.packageScheme) + ":" + dart.str(frame.package);
        if (dart.test(removedPackagesAndClasses[$containsKey](className))) {
          skipped = skipped + 1;
          removedPackagesAndClasses[$update](className, dart.fn(value => {
            if (value == null) dart.nullFailed(L3, 1024, 58, "value");
            return dart.notNull(value) + 1;
          }, intToint()));
          parsedFrames[$removeAt](index);
          index = index - 1;
        } else if (dart.test(removedPackagesAndClasses[$containsKey]($package))) {
          skipped = skipped + 1;
          removedPackagesAndClasses[$update]($package, dart.fn(value => {
            if (value == null) dart.nullFailed(L3, 1029, 56, "value");
            return dart.notNull(value) + 1;
          }, intToint()));
          parsedFrames[$removeAt](index);
          index = index - 1;
        }
      }
      let reasons = ListOfStringN().filled(parsedFrames[$length], null, {growable: false});
      for (let filter of assertions.FlutterError._stackFilters) {
        filter.filter(parsedFrames, reasons);
      }
      let result = JSArrayOfString().of([]);
      for (let index = 0; index < dart.notNull(parsedFrames[$length]); index = index + 1) {
        let start = index;
        while (index < dart.notNull(reasons[$length]) - 1 && reasons[$_get](index) != null && reasons[$_get](index + 1) == reasons[$_get](index)) {
          index = index + 1;
        }
        let suffix = "";
        if (reasons[$_get](index) != null) {
          if (index !== start) {
            suffix = " (" + dart.str(index - start + 2) + " frames)";
          } else {
            suffix = " (1 frame)";
          }
        }
        let resultLine = dart.str((t9 = reasons[$_get](index), t9 == null ? parsedFrames[$_get](index).source : t9)) + suffix;
        result[$add](resultLine);
      }
      let where = (t10 = (() => {
        let t9 = JSArrayOfString().of([]);
        for (let entry of removedPackagesAndClasses[$entries])
          if (dart.notNull(entry.value) > 0) t9.push(entry.key);
        return t9;
      })(), (() => {
        t10[$sort]();
        return t10;
      })());
      if (skipped === 1) {
        result[$add]("(elided one frame from " + dart.str(where[$single]) + ")");
      } else if (skipped > 1) {
        if (dart.notNull(where[$length]) > 1) where[$_set](dart.notNull(where[$length]) - 1, "and " + dart.str(where[$last]));
        if (dart.notNull(where[$length]) > 2) {
          result[$add]("(elided " + dart.str(skipped) + " frames from " + dart.str(where[$join](", ")) + ")");
        } else {
          result[$add]("(elided " + dart.str(skipped) + " frames from " + dart.str(where[$join](" ")) + ")");
        }
      }
      return result;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L3, 1080, 56, "properties");
      this.diagnostics[$forEach](dart.bind(properties, 'add'));
    }
    toStringShort() {
      return "FlutterError";
    }
    toString(opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C5 || CT.C5;
      if (minLevel == null) dart.nullFailed(L3, 1088, 36, "minLevel");
      if (false) {
        let errors = this.diagnostics[$whereType](assertions._ErrorDiagnostic);
        return dart.test(errors[$isNotEmpty]) ? errors[$first].valueToString() : this.toStringShort();
      }
      let renderer = new diagnostics$.TextTreeRenderer.new({wrapWidth: 4000000000});
      return this.diagnostics[$map](core.String, dart.fn(node => {
        if (node == null) dart.nullFailed(L3, 1095, 45, "node");
        return renderer.render(node)[$trimRight]();
      }, DiagnosticsNodeToString()))[$join]("\n");
    }
    static reportError(details) {
      if (details == null) dart.nullFailed(L3, 1099, 47, "details");
      if (!(details != null)) dart.assertFailed(null, L3, 1100, 12, "details != null");
      if (!(details.exception != null)) dart.assertFailed(null, L3, 1101, 12, "details.exception != null");
      if (assertions.FlutterError.onError != null) {
        dart.nullCheck(assertions.FlutterError.onError)(details);
      }
    }
  };
  (assertions.FlutterError.fromParts = function(diagnostics) {
    if (diagnostics == null) dart.nullFailed(L3, 797, 31, "diagnostics");
    this[diagnostics$0] = diagnostics;
    if (!dart.test(diagnostics[$isNotEmpty])) dart.assertFailed(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Empty FlutterError")])), L3, 797, 53, "diagnostics.isNotEmpty");
    assertions.FlutterError.__proto__.new.call(this);
    if (!dart.equals(this.diagnostics[$first].level, diagnostics$.DiagnosticLevel.summary)) dart.assertFailed(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("FlutterError is missing a summary."), new assertions.ErrorDescription.new("All FlutterError objects should start with a short (one line) " + "summary description of the problem that was detected."), new (DiagnosticsPropertyOfFlutterError()).new("Malformed", this, {expandableValue: true, showSeparator: false, style: diagnostics$.DiagnosticsTreeStyle.whitespace}), new assertions.ErrorDescription.new("\nThis error should still help you solve your problem, " + "however please also report this malformed error in the " + "framework by filing a bug on GitHub:\n" + "  https://github.com/flutter/flutter/issues/new?template=2_bug.md")])), L3, 799, 7, "diagnostics.first.level == DiagnosticLevel.summary");
    if (!dart.test(dart.fn(() => {
      let summaries = this.diagnostics[$where](dart.fn(node => {
        if (node == null) dart.nullFailed(L3, 816, 86, "node");
        return dart.equals(node.level, diagnostics$.DiagnosticLevel.summary);
      }, DiagnosticsNodeTobool()));
      if (dart.notNull(summaries[$length]) > 1) {
        let message = JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("FlutterError contained multiple error summaries."), new assertions.ErrorDescription.new("All FlutterError objects should have only a single short " + "(one line) summary description of the problem that was " + "detected."), new (DiagnosticsPropertyOfFlutterError()).new("Malformed", this, {expandableValue: true, showSeparator: false, style: diagnostics$.DiagnosticsTreeStyle.whitespace}), new assertions.ErrorDescription.new("\nThe malformed error has " + dart.str(summaries[$length]) + " summaries.")]);
        let i = 1;
        for (let summary of summaries) {
          message[$add](new (DiagnosticsPropertyOfDiagnosticsNode()).new("Summary " + dart.str(i), summary, {expandableValue: true}));
          i = i + 1;
        }
        message[$add](new assertions.ErrorDescription.new("\nThis error should still help you solve your problem, " + "however please also report this malformed error in the " + "framework by filing a bug on GitHub:\n" + "  https://github.com/flutter/flutter/issues/new?template=2_bug.md"));
        dart.throw(new assertions.FlutterError.fromParts(message));
      }
      return true;
    }, VoidTobool())())) dart.assertFailed(null, L3, 815, 12, "() {\n      final Iterable<DiagnosticsNode> summaries = diagnostics.where((DiagnosticsNode node) => node.level == DiagnosticLevel.summary);\n      if (summaries.length > 1) {\n        final List<DiagnosticsNode> message = <DiagnosticsNode>[\n          ErrorSummary('FlutterError contained multiple error summaries.'),\n          ErrorDescription(\n            'All FlutterError objects should have only a single short '\n            '(one line) summary description of the problem that was '\n            'detected.'\n          ),\n          DiagnosticsProperty<FlutterError>('Malformed', this, expandableValue: true, showSeparator: false, style: DiagnosticsTreeStyle.whitespace),\n          ErrorDescription('\\nThe malformed error has ${summaries.length} summaries.'),\n        ];\n        int i = 1;\n        for (final DiagnosticsNode summary in summaries) {\n          message.add(DiagnosticsProperty<DiagnosticsNode>('Summary $i', summary, expandableValue : true));\n          i += 1;\n        }\n        message.add(ErrorDescription(\n          '\\nThis error should still help you solve your problem, '\n          'however please also report this malformed error in the '\n          'framework by filing a bug on GitHub:\\n'\n          '  https://github.com/flutter/flutter/issues/new?template=2_bug.md'\n        ));\n        throw FlutterError.fromParts(message);\n      }\n      return true;\n    }()");
  }).prototype = assertions.FlutterError.prototype;
  dart.addTypeTests(assertions.FlutterError);
  dart.addTypeCaches(assertions.FlutterError);
  assertions.FlutterError[dart.implements] = () => [core.AssertionError];
  dart.setGetterSignature(assertions.FlutterError, () => ({
    __proto__: dart.getGetters(assertions.FlutterError.__proto__),
    message: core.String
  }));
  dart.setLibraryUri(assertions.FlutterError, L4);
  dart.setFieldSignature(assertions.FlutterError, () => ({
    __proto__: dart.getFields(assertions.FlutterError.__proto__),
    diagnostics: dart.finalFieldType(core.List$(diagnostics$.DiagnosticsNode))
  }));
  dart.defineExtensionMethods(assertions.FlutterError, ['toString']);
  dart.defineLazy(assertions.FlutterError, {
    /*assertions.FlutterError.onError*/get onError() {
      return dart.fn(details => {
        if (details == null) dart.nullFailed(L3, 878, 66, "details");
        return assertions.FlutterError.presentError(details);
      }, FlutterErrorDetailsTovoid());
    },
    set onError(_) {},
    /*assertions.FlutterError.demangleStackTrace*/get demangleStackTrace() {
      return dart.fn(stackTrace => {
        if (stackTrace == null) dart.nullFailed(L3, 903, 63, "stackTrace");
        return stackTrace;
      }, StackTraceToStackTrace());
    },
    set demangleStackTrace(_) {},
    /*assertions.FlutterError.presentError*/get presentError() {
      return C34 || CT.C34;
    },
    set presentError(_) {},
    /*assertions.FlutterError._errorCount*/get _errorCount() {
      return 0;
    },
    set _errorCount(_) {},
    /*assertions.FlutterError.wrapWidth*/get wrapWidth() {
      return 100;
    },
    /*assertions.FlutterError._stackFilters*/get _stackFilters() {
      return JSArrayOfStackFilter().of([]);
    }
  }, false);
  var C35;
  var C36;
  assertions.DiagnosticsStackTrace = class DiagnosticsStackTrace extends diagnostics$.DiagnosticsBlock {
    static _applyStackFilter(stack, stackFilter) {
      let t10;
      if (stack == null) return JSArrayOfDiagnosticsNode().of([]);
      let filter = (t10 = stackFilter, t10 == null ? C35 || CT.C35 : t10);
      let frames = filter(dart.str(assertions.FlutterError.demangleStackTrace(stack))[$trimRight]()[$split]("\n"));
      return frames[$map](diagnostics$.DiagnosticsNode, C36 || CT.C36)[$toList]();
    }
    static _createStackFrame(frame) {
      if (frame == null) dart.nullFailed(L3, 1191, 51, "frame");
      return diagnostics$.DiagnosticsNode.message(frame, {allowWrap: false});
    }
  };
  (assertions.DiagnosticsStackTrace.new = function(name, stack, opts) {
    if (name == null) dart.nullFailed(L3, 1155, 12, "name");
    let stackFilter = opts && 'stackFilter' in opts ? opts.stackFilter : null;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    if (showSeparator == null) dart.nullFailed(L3, 1158, 10, "showSeparator");
    assertions.DiagnosticsStackTrace.__proto__.new.call(this, {name: name, value: stack, properties: assertions.DiagnosticsStackTrace._applyStackFilter(stack, stackFilter), style: diagnostics$.DiagnosticsTreeStyle.flat, showSeparator: showSeparator, allowTruncate: true});
    ;
  }).prototype = assertions.DiagnosticsStackTrace.prototype;
  (assertions.DiagnosticsStackTrace.singleFrame = function(name, opts) {
    if (name == null) dart.nullFailed(L3, 1170, 12, "name");
    let frame = opts && 'frame' in opts ? opts.frame : null;
    if (frame == null) dart.nullFailed(L3, 1171, 21, "frame");
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    if (showSeparator == null) dart.nullFailed(L3, 1172, 10, "showSeparator");
    assertions.DiagnosticsStackTrace.__proto__.new.call(this, {name: name, properties: JSArrayOfDiagnosticsNode().of([assertions.DiagnosticsStackTrace._createStackFrame(frame)]), style: diagnostics$.DiagnosticsTreeStyle.whitespace, showSeparator: showSeparator});
    ;
  }).prototype = assertions.DiagnosticsStackTrace.prototype;
  dart.addTypeTests(assertions.DiagnosticsStackTrace);
  dart.addTypeCaches(assertions.DiagnosticsStackTrace);
  dart.setLibraryUri(assertions.DiagnosticsStackTrace, L4);
  assertions._FlutterErrorDetailsNode = class _FlutterErrorDetailsNode extends diagnostics$.DiagnosticableNode$(assertions.FlutterErrorDetails) {
    get builder() {
      let builder = super.builder;
      if (builder == null) {
        return null;
      }
      let properties = builder.properties;
      for (let transformer of assertions.FlutterErrorDetails.propertiesTransformers) {
        properties = transformer(properties);
      }
      return new diagnostics$.DiagnosticPropertiesBuilder.fromProperties(properties[$toList]());
    }
  };
  (assertions._FlutterErrorDetailsNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let value = opts && 'value' in opts ? opts.value : null;
    if (value == null) dart.nullFailed(L3, 1199, 34, "value");
    let style = opts && 'style' in opts ? opts.style : null;
    assertions._FlutterErrorDetailsNode.__proto__.new.call(this, {name: name, value: value, style: style});
    ;
  }).prototype = assertions._FlutterErrorDetailsNode.prototype;
  dart.addTypeTests(assertions._FlutterErrorDetailsNode);
  dart.addTypeCaches(assertions._FlutterErrorDetailsNode);
  dart.setLibraryUri(assertions._FlutterErrorDetailsNode, L4);
  assertions.debugPrintStack = function debugPrintStack(opts) {
    let stackTrace = opts && 'stackTrace' in opts ? opts.stackTrace : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let maxFrames = opts && 'maxFrames' in opts ? opts.maxFrames : null;
    if (label != null) print.debugPrint(label);
    if (stackTrace == null) {
      stackTrace = core.StackTrace.current;
    } else {
      stackTrace = assertions.FlutterError.demangleStackTrace(stackTrace);
    }
    let lines = dart.toString(stackTrace)[$trimRight]()[$split]("\n");
    if (true && dart.test(lines[$isNotEmpty])) {
      lines = lines[$skipWhile](dart.fn(line => {
        if (line == null) dart.nullFailed(L3, 1132, 37, "line");
        return line[$contains]("StackTrace.current") || line[$contains]("dart-sdk/lib/_internal") || line[$contains]("dart:sdk_internal");
      }, StringTobool()));
    }
    if (maxFrames != null) lines = lines[$take](maxFrames);
    print.debugPrint(assertions.FlutterError.defaultStackFilter(lines)[$join]("\n"));
  };
  dart.trackLibraries("packages/flutter/src/foundation/debug.dart", {
    "package:flutter/src/foundation/debug.dart": debug,
    "package:flutter/src/foundation/diagnostics.dart": diagnostics$,
    "package:flutter/src/foundation/assertions.dart": assertions
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["debug.dart","diagnostics.dart","assertions.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/foundation/debug.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__debug: debug,
    src__foundation__diagnostics: diagnostics$,
    src__foundation__assertions: assertions
  };
}));

//# sourceMappingURL=debug.dart.lib.js.map
