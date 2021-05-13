define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__foundation__change_notifier_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var change_notifier = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $isNotEmpty = dartx.isNotEmpty;
  var $join = dartx.join;
  dart._checkModuleNullSafetyMode(false);
  var LinkedListOf_ListenerEntry = () => (LinkedListOf_ListenerEntry = dart.constFn(collection.LinkedList$(change_notifier._ListenerEntry)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var ListOf_ListenerEntry = () => (ListOf_ListenerEntry = dart.constFn(core.List$(change_notifier._ListenerEntry)))();
  var DiagnosticsPropertyOfChangeNotifier = () => (DiagnosticsPropertyOfChangeNotifier = dart.constFn(diagnostics.DiagnosticsProperty$(change_notifier.ChangeNotifier)))();
  var SyncIterableOfDiagnosticsNode = () => (SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(diagnostics.DiagnosticsNode)))();
  var IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics.DiagnosticsNode)))();
  var VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  const CT = Object.create(null);
  var L1 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/foundation/change_notifier.dart";
  var L0 = "package:flutter/src/foundation/change_notifier.dart";
  change_notifier.Listenable = class Listenable extends core.Object {};
  (change_notifier.Listenable.new = function() {
    ;
  }).prototype = change_notifier.Listenable.prototype;
  dart.addTypeTests(change_notifier.Listenable);
  dart.addTypeCaches(change_notifier.Listenable);
  dart.setLibraryUri(change_notifier.Listenable, L0);
  const _is_ValueListenable_default = Symbol('_is_ValueListenable_default');
  change_notifier.ValueListenable$ = dart.generic(T => {
    class ValueListenable extends change_notifier.Listenable {}
    (ValueListenable.new = function() {
      ValueListenable.__proto__.new.call(this);
      ;
    }).prototype = ValueListenable.prototype;
    dart.addTypeTests(ValueListenable);
    ValueListenable.prototype[_is_ValueListenable_default] = true;
    dart.addTypeCaches(ValueListenable);
    dart.setLibraryUri(ValueListenable, L0);
    return ValueListenable;
  });
  change_notifier.ValueListenable = change_notifier.ValueListenable$();
  dart.addTypeTests(change_notifier.ValueListenable, _is_ValueListenable_default);
  change_notifier._ListenerEntry = class _ListenerEntry extends collection.LinkedListEntry {};
  (change_notifier._ListenerEntry.new = function(listener) {
    if (listener == null) dart.nullFailed(L1, 98, 23, "listener");
    this.listener = listener;
    change_notifier._ListenerEntry.__proto__.new.call(this);
    ;
  }).prototype = change_notifier._ListenerEntry.prototype;
  dart.addTypeTests(change_notifier._ListenerEntry);
  dart.addTypeCaches(change_notifier._ListenerEntry);
  dart.setLibraryUri(change_notifier._ListenerEntry, L0);
  dart.setFieldSignature(change_notifier._ListenerEntry, () => ({
    __proto__: dart.getFields(change_notifier._ListenerEntry.__proto__),
    listener: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  var _listeners = dart.privateName(change_notifier, "_listeners");
  var _debugAssertNotDisposed = dart.privateName(change_notifier, "_debugAssertNotDisposed");
  change_notifier.ChangeNotifier = class ChangeNotifier extends core.Object {
    [_debugAssertNotDisposed]() {
      if (!dart.test(dart.fn(() => {
        if (this[_listeners] == null) {
          dart.throw(assertions.FlutterError.new("A " + dart.str(this[$runtimeType]) + " was used after being disposed.\n" + "Once you have called dispose() on a " + dart.str(this[$runtimeType]) + ", it can no longer be used."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L1, 115, 12, "() {\n      if (_listeners == null) {\n        throw FlutterError(\n          'A $runtimeType was used after being disposed.\\n'\n          'Once you have called dispose() on a $runtimeType, it can no longer be used.'\n        );\n      }\n      return true;\n    }()");
      return true;
    }
    get hasListeners() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L1, 144, 12, "_debugAssertNotDisposed()");
      return dart.nullCheck(this[_listeners])[$isNotEmpty];
    }
    addListener(listener) {
      if (listener == null) dart.nullFailed(L1, 175, 33, "listener");
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L1, 176, 12, "_debugAssertNotDisposed()");
      dart.nullCheck(this[_listeners]).add(new change_notifier._ListenerEntry.new(listener));
    }
    removeListener(listener) {
      if (listener == null) dart.nullFailed(L1, 194, 36, "listener");
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L1, 195, 12, "_debugAssertNotDisposed()");
      for (let entry of dart.nullCheck(this[_listeners])) {
        if (dart.equals(entry.listener, listener)) {
          entry.unlink();
          return;
        }
      }
    }
    dispose() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L1, 212, 12, "_debugAssertNotDisposed()");
      this[_listeners] = null;
    }
    notifyListeners() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L1, 234, 12, "_debugAssertNotDisposed()");
      if (dart.test(dart.nullCheck(this[_listeners]).isEmpty)) return;
      let localListeners = ListOf_ListenerEntry().from(dart.nullCheck(this[_listeners]));
      for (let entry of localListeners) {
        try {
          if (entry.list != null) entry.listener();
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "foundation library", context: new assertions.ErrorDescription.new("while dispatching notifications for " + dart.str(this[$runtimeType])), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
                yield new (DiagnosticsPropertyOfChangeNotifier()).new("The " + dart.str(this[$runtimeType]) + " sending notification was", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
              }).bind(this)), VoidToIterableOfDiagnosticsNode())}));
          } else
            throw e;
        }
      }
    }
  };
  (change_notifier.ChangeNotifier.new = function() {
    this[_listeners] = new (LinkedListOf_ListenerEntry()).new();
    ;
  }).prototype = change_notifier.ChangeNotifier.prototype;
  dart.addTypeTests(change_notifier.ChangeNotifier);
  dart.addTypeCaches(change_notifier.ChangeNotifier);
  change_notifier.ChangeNotifier[dart.implements] = () => [change_notifier.Listenable];
  dart.setMethodSignature(change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getMethods(change_notifier.ChangeNotifier.__proto__),
    [_debugAssertNotDisposed]: dart.fnType(core.bool, []),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    dispose: dart.fnType(dart.void, []),
    notifyListeners: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getGetters(change_notifier.ChangeNotifier.__proto__),
    hasListeners: core.bool
  }));
  dart.setLibraryUri(change_notifier.ChangeNotifier, L0);
  dart.setFieldSignature(change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getFields(change_notifier.ChangeNotifier.__proto__),
    [_listeners]: dart.fieldType(dart.nullable(collection.LinkedList$(change_notifier._ListenerEntry)))
  }));
  var _children$ = dart.privateName(change_notifier, "_children");
  change_notifier._MergingListenable = class _MergingListenable extends change_notifier.Listenable {
    addListener(listener) {
      let t1;
      if (listener == null) dart.nullFailed(L1, 269, 33, "listener");
      for (let child of this[_children$]) {
        t1 = child;
        t1 == null ? null : t1.addListener(listener);
      }
    }
    removeListener(listener) {
      let t1;
      if (listener == null) dart.nullFailed(L1, 276, 36, "listener");
      for (let child of this[_children$]) {
        t1 = child;
        t1 == null ? null : t1.removeListener(listener);
      }
    }
    toString() {
      return "Listenable.merge([" + dart.str(this[_children$][$join](", ")) + "])";
    }
  };
  (change_notifier._MergingListenable.new = function(_children) {
    if (_children == null) dart.nullFailed(L1, 264, 27, "_children");
    this[_children$] = _children;
    change_notifier._MergingListenable.__proto__.new.call(this);
    ;
  }).prototype = change_notifier._MergingListenable.prototype;
  dart.addTypeTests(change_notifier._MergingListenable);
  dart.addTypeCaches(change_notifier._MergingListenable);
  dart.setMethodSignature(change_notifier._MergingListenable, () => ({
    __proto__: dart.getMethods(change_notifier._MergingListenable.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(change_notifier._MergingListenable, L0);
  dart.setFieldSignature(change_notifier._MergingListenable, () => ({
    __proto__: dart.getFields(change_notifier._MergingListenable.__proto__),
    [_children$]: dart.finalFieldType(core.List$(dart.nullable(change_notifier.Listenable)))
  }));
  dart.defineExtensionMethods(change_notifier._MergingListenable, ['toString']);
  var _value$ = dart.privateName(change_notifier, "_value");
  const _is_ValueNotifier_default = Symbol('_is_ValueNotifier_default');
  change_notifier.ValueNotifier$ = dart.generic(T => {
    class ValueNotifier extends change_notifier.ChangeNotifier {
      get value() {
        return this[_value$];
      }
      set value(newValue) {
        T.as(newValue);
        if (dart.equals(this[_value$], newValue)) return;
        this[_value$] = newValue;
        this.notifyListeners();
      }
      toString() {
        return dart.str(diagnostics.describeIdentity(this)) + "(" + dart.str(this.value) + ")";
      }
    }
    (ValueNotifier.new = function(_value) {
      this[_value$] = _value;
      ValueNotifier.__proto__.new.call(this);
      ;
    }).prototype = ValueNotifier.prototype;
    dart.addTypeTests(ValueNotifier);
    ValueNotifier.prototype[_is_ValueNotifier_default] = true;
    dart.addTypeCaches(ValueNotifier);
    ValueNotifier[dart.implements] = () => [change_notifier.ValueListenable$(T)];
    dart.setGetterSignature(ValueNotifier, () => ({
      __proto__: dart.getGetters(ValueNotifier.__proto__),
      value: T
    }));
    dart.setSetterSignature(ValueNotifier, () => ({
      __proto__: dart.getSetters(ValueNotifier.__proto__),
      value: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(ValueNotifier, L0);
    dart.setFieldSignature(ValueNotifier, () => ({
      __proto__: dart.getFields(ValueNotifier.__proto__),
      [_value$]: dart.fieldType(T)
    }));
    dart.defineExtensionMethods(ValueNotifier, ['toString']);
    return ValueNotifier;
  });
  change_notifier.ValueNotifier = change_notifier.ValueNotifier$();
  dart.addTypeTests(change_notifier.ValueNotifier, _is_ValueNotifier_default);
  dart.setBaseClass(change_notifier._ListenerEntry, collection.LinkedListEntry$(change_notifier._ListenerEntry));
  dart.trackLibraries("packages/flutter/src/foundation/change_notifier.dart", {
    "package:flutter/src/foundation/change_notifier.dart": change_notifier
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["change_notifier.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;EAyDoB;;;;;;;;AAgCZ;;IAAiB;;;;;;;;;;;QAQH;;AAApB;;EAA6B;;;;;;;;;;;;AAiB3B,qBAAO,AAQN;AAPC,YAAI,AAAW,oBAAG;AAIf,UAHD,WAAM,4BAAY,AAChB,gBAAI,sBAAW,sCACf,kDAAsC,sBAAW;;AAGrD,cAAO;;AAET,YAAO;IACT;;AAmBE,qBAAO;AACP,YAAiB,AAAE,gBAAZ;IACT;;UA6B8B;AAC5B,qBAAO;AACkC,MAA/B,AAAE,eAAZ,sBAAgB,uCAAe,QAAQ;IACzC;;UAgBiC;AAC/B,qBAAO;AACP,eAA0B,QAAmB,gBAAV;AACjC,YAAmB,YAAf,AAAM,KAAD,WAAa,QAAQ;AACd,UAAd,AAAM,KAAD;AACL;;;IAGN;;AAUE,qBAAO;AACU,MAAjB,mBAAa;IACf;;AAoBE,qBAAO;AACP,oBAAc,AAAE,eAAZ,4BACF;AAEyB,2BAAiB,4BAAoC,eAAV;AAEtE,eAA0B,QAAS,eAAc;AAC/C;AACE,cAAI,AAAM,KAAD,SAAS,MAChB,AAAc,AAAE,KAAX;;cACA;cAAW;AAAlB;AAaE,YAZW,oCAAY,mDACZ,SAAS,SACb,KAAK,WACH,+BACA,oCAAiB,AAAkD,kDAAZ,4CAC1C;AACpB,sBAAM,gDACJ,AAA2C,kBAArC,sBAAW,6BACjB,cAC4B;cAE/B;;;;;IAIT;;;IApJ4B,mBAAa;;EAqJ3C;;;;;;;;;;;;;;;;;;;;;;;gBAQgC;;;AAC5B,eAAuB,QAAS;AACF,aAA5B,KAAK;qBAAL,OAAO,eAAY,QAAQ;;IAE/B;mBAGiC;;;AAC/B,eAAuB,QAAS;AACC,aAA/B,KAAK;qBAAL,OAAO,kBAAe,QAAQ;;IAElC;;AAIE,YAAO,AAA6C,iCAAxB,AAAU,wBAAK,SAAM;IACnD;;;QArBwB;;AAAxB;;EAAkC;;;;;;;;;;;;;;;;;;;AAuCnB;MAAM;;aAET;AACV,YAAW,YAAP,eAAU,QAAQ,GACpB;AACe,QAAjB,gBAAS,QAAQ;AACA,QAAjB;MACF;;AAGqB,cAAmC,UAAhC,6BAAiB,SAAM,eAAE,cAAK;MAAE;;;MAlBrC;AAAnB;;IAA0B","file":"../../../../../../../../../../packages/flutter/src/foundation/change_notifier.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__change_notifier: change_notifier
  };
}));

//# sourceMappingURL=change_notifier.dart.lib.js.map
