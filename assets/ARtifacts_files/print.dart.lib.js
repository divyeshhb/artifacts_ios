define(['dart_sdk'], (function load__packages__flutter__src__foundation__print_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var print = Object.create(dart.library);
  var $split = dartx.split;
  var $expand = dartx.expand;
  var $join = dartx.join;
  var $isNotEmpty = dartx.isNotEmpty;
  var $trimLeft = dartx.trimLeft;
  var $_get = dartx._get;
  var $matchAsPrefix = dartx.matchAsPrefix;
  var $times = dartx['*'];
  var $substring = dartx.substring;
  dart._checkModuleNullSafetyMode(false);
  var _WordWrapParseModeL = () => (_WordWrapParseModeL = dart.constFn(dart.legacy(print._WordWrapParseMode)))();
  var IterableOfString = () => (IterableOfString = dart.constFn(core.Iterable$(core.String)))();
  var StringToIterableOfString = () => (StringToIterableOfString = dart.constFn(dart.fnType(IterableOfString(), [core.String])))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  var VoidToint = () => (VoidToint = dart.constFn(dart.fnType(core.int, [])))();
  var intTodynamic = () => (intTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.int])))();
  var SyncIterableOfString = () => (SyncIterableOfString = dart.constFn(_js_helper.SyncIterable$(core.String)))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var StringN = () => (StringN = dart.constFn(dart.nullable(core.String)))();
  var intN = () => (intN = dart.constFn(dart.nullable(core.int)))();
  var StringN__Tovoid = () => (StringN__Tovoid = dart.constFn(dart.fnType(dart.void, [StringN()], {wrapWidth: intN()}, {})))();
  var ListQueueOfString = () => (ListQueueOfString = dart.constFn(collection.ListQueue$(core.String)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/foundation/print.dart";
  var L1 = "package:flutter/src/foundation/print.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: print._WordWrapParseMode.prototype,
        [_name$]: "_WordWrapParseMode.inSpace",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: print._WordWrapParseMode.prototype,
        [_name$]: "_WordWrapParseMode.inWord",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: print._WordWrapParseMode.prototype,
        [_name$]: "_WordWrapParseMode.atBreak",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], _WordWrapParseModeL());
    },
    get C4() {
      return C4 = dart.fn(print._debugPrintTask, VoidTovoid());
    },
    get C5() {
      return C5 = dart.fn(print.debugPrintThrottled, StringN__Tovoid());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000000
      });
    }
  }, false);
  var _name$ = dart.privateName(print, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  print._WordWrapParseMode = class _WordWrapParseMode extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (print._WordWrapParseMode.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 90, 6, "index");
    if (_name == null) dart.nullFailed(L0, 90, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = print._WordWrapParseMode.prototype;
  dart.addTypeTests(print._WordWrapParseMode);
  dart.addTypeCaches(print._WordWrapParseMode);
  dart.setLibraryUri(print._WordWrapParseMode, L1);
  dart.setFieldSignature(print._WordWrapParseMode, () => ({
    __proto__: dart.getFields(print._WordWrapParseMode.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(print._WordWrapParseMode, ['toString']);
  print._WordWrapParseMode.inSpace = C0 || CT.C0;
  print._WordWrapParseMode.inWord = C1 || CT.C1;
  print._WordWrapParseMode.atBreak = C2 || CT.C2;
  print._WordWrapParseMode.values = C3 || CT.C3;
  var C4;
  print.debugPrintSynchronously = function debugPrintSynchronously(message, opts) {
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    if (message != null && wrapWidth != null) {
      core.print(message[$split]("\n")[$expand](core.String, dart.fn(line => {
        if (line == null) dart.nullFailed(L0, 35, 54, "line");
        return print.debugWordWrap(line, wrapWidth);
      }, StringToIterableOfString()))[$join]("\n"));
    } else {
      core.print(message);
    }
  };
  print.debugPrintThrottled = function debugPrintThrottled(message, opts) {
    let t0, t0$;
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    let messageLines = (t0$ = (t0 = message, t0 == null ? null : t0[$split]("\n")), t0$ == null ? JSArrayOfString().of(["null"]) : t0$);
    if (wrapWidth != null) {
      print._debugPrintBuffer.addAll(messageLines[$expand](core.String, dart.fn(line => {
        if (line == null) dart.nullFailed(L0, 46, 66, "line");
        return print.debugWordWrap(line, wrapWidth);
      }, StringToIterableOfString())));
    } else {
      print._debugPrintBuffer.addAll(messageLines);
    }
    if (!dart.test(print._debugPrintScheduled)) print._debugPrintTask();
  };
  print._debugPrintTask = function _debugPrintTask() {
    let t0;
    print._debugPrintScheduled = false;
    if (dart.test(print._debugPrintStopwatch.elapsed['>'](print._kDebugPrintPauseTime))) {
      print._debugPrintStopwatch.stop();
      print._debugPrintStopwatch.reset();
      print._debugPrintedCharacters = 0;
    }
    while (dart.notNull(print._debugPrintedCharacters) < 12288 && dart.test(print._debugPrintBuffer[$isNotEmpty])) {
      let line = print._debugPrintBuffer.removeFirst();
      print._debugPrintedCharacters = dart.notNull(print._debugPrintedCharacters) + line.length;
      core.print(line);
    }
    if (dart.test(print._debugPrintBuffer[$isNotEmpty])) {
      print._debugPrintScheduled = true;
      print._debugPrintedCharacters = 0;
      async.Timer.new(print._kDebugPrintPauseTime, C4 || CT.C4);
      print._debugPrintCompleter == null ? print._debugPrintCompleter = CompleterOfvoid().new() : null;
    } else {
      print._debugPrintStopwatch.start();
      t0 = print._debugPrintCompleter;
      t0 == null ? null : t0.complete();
      print._debugPrintCompleter = null;
    }
  };
  print.debugWordWrap = function debugWordWrap(message, width, opts) {
    if (message == null) dart.nullFailed(L0, 108, 39, "message");
    if (width == null) dart.nullFailed(L0, 108, 52, "width");
    let wrapIndent = opts && 'wrapIndent' in opts ? opts.wrapIndent : "";
    if (wrapIndent == null) dart.nullFailed(L0, 108, 68, "wrapIndent");
    return new (SyncIterableOfString()).new(function* debugWordWrap() {
      if (message.length < dart.notNull(width) || message[$trimLeft]()[$_get](0) === "#") {
        yield message;
        return;
      }
      let prefixMatch = dart.nullCheck(print._indentPattern[$matchAsPrefix](message));
      let prefix = dart.notNull(wrapIndent) + " "[$times](dart.nullCheck(prefixMatch.group(0)).length);
      let start = 0;
      let startForLengthCalculations = 0;
      let addPrefix = false;
      let index = prefix.length;
      let mode = print._WordWrapParseMode.inSpace;
      let lastWordStart = null;
      let lastWordStart$35isSet = false;
      function lastWordStart$35get() {
        return lastWordStart$35isSet ? lastWordStart : dart.throw(new _internal.LateError.localNI("lastWordStart"));
      }
      dart.fn(lastWordStart$35get, VoidToint());
      function lastWordStart$35set(t3) {
        if (t3 == null) dart.nullFailed(L0, 120, 12, "null");
        lastWordStart$35isSet = true;
        return lastWordStart = t3;
      }
      dart.fn(lastWordStart$35set, intTodynamic());
      let lastWordEnd = null;
      while (true) {
        switch (mode) {
          case C0 || CT.C0:
          {
            while (index < message.length && message[$_get](index) === " ")
              index = index + 1;
            lastWordStart$35set(index);
            mode = print._WordWrapParseMode.inWord;
            break;
          }
          case C1 || CT.C1:
          {
            while (index < message.length && message[$_get](index) !== " ")
              index = index + 1;
            mode = print._WordWrapParseMode.atBreak;
            break;
          }
          case C2 || CT.C2:
          {
            if (index - startForLengthCalculations > dart.notNull(width) || index === message.length) {
              if (index - startForLengthCalculations <= dart.notNull(width) || lastWordEnd == null) {
                lastWordEnd = index;
              }
              if (addPrefix) {
                yield prefix + message[$substring](start, lastWordEnd);
              } else {
                yield message[$substring](start, lastWordEnd);
                addPrefix = true;
              }
              if (dart.notNull(lastWordEnd) >= message.length) return;
              if (lastWordEnd === index) {
                while (index < message.length && message[$_get](index) === " ")
                  index = index + 1;
                start = index;
                mode = print._WordWrapParseMode.inWord;
              } else {
                if (!(dart.notNull(lastWordStart$35get()) > dart.notNull(lastWordEnd))) dart.assertFailed(null, L0, 161, 20, "lastWordStart > lastWordEnd");
                start = lastWordStart$35get();
                mode = print._WordWrapParseMode.atBreak;
              }
              startForLengthCalculations = dart.notNull(start) - prefix.length;
              if (!addPrefix) dart.assertFailed(null, L0, 166, 18, "addPrefix");
              lastWordEnd = null;
            } else {
              lastWordEnd = index;
              mode = print._WordWrapParseMode.inSpace;
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
  };
  dart.copyProperties(print, {
    get debugPrintDone() {
      let t5, t5$;
      t5$ = (t5 = print._debugPrintCompleter, t5 == null ? null : t5.future);
      return t5$ == null ? FutureOfvoid().value() : t5$;
    }
  });
  var C5;
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C6;
  dart.defineLazy(print, {
    /*print.debugPrint*/get debugPrint() {
      return C5 || CT.C5;
    },
    set debugPrint(_) {},
    /*print._debugPrintedCharacters*/get _debugPrintedCharacters() {
      return 0;
    },
    set _debugPrintedCharacters(_) {},
    /*print._kDebugPrintCapacity*/get _kDebugPrintCapacity() {
      return 12288;
    },
    /*print._kDebugPrintPauseTime*/get _kDebugPrintPauseTime() {
      return C6 || CT.C6;
    },
    /*print._debugPrintBuffer*/get _debugPrintBuffer() {
      return new (ListQueueOfString()).new();
    },
    /*print._debugPrintStopwatch*/get _debugPrintStopwatch() {
      return new core.Stopwatch.new();
    },
    /*print._debugPrintCompleter*/get _debugPrintCompleter() {
      return null;
    },
    set _debugPrintCompleter(_) {},
    /*print._debugPrintScheduled*/get _debugPrintScheduled() {
      return false;
    },
    set _debugPrintScheduled(_) {},
    /*print._indentPattern*/get _indentPattern() {
      return core.RegExp.new("^ *(?:[-+*] |[0-9]+[.):] )?");
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/foundation/print.dart", {
    "package:flutter/src/foundation/print.dart": print
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["print.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/foundation/print.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__print: print
  };
}));

//# sourceMappingURL=print.dart.lib.js.map
