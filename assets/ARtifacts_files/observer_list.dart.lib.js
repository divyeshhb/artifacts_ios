define(['dart_sdk'], (function load__packages__flutter__src__foundation__observer_list_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var observer_list = Object.create(dart.library);
  var $add = dartx.add;
  var $remove = dartx.remove;
  var $length = dartx.length;
  var $contains = dartx.contains;
  var $iterator = dartx.iterator;
  var $isEmpty = dartx.isEmpty;
  var $isNotEmpty = dartx.isNotEmpty;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $containsKey = dartx.containsKey;
  var $keys = dartx.keys;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "package:flutter/src/foundation/observer_list.dart";
  var _list = dart.privateName(observer_list, "_list");
  var _isDirty = dart.privateName(observer_list, "_isDirty");
  var __ObserverList__set = dart.privateName(observer_list, "_#ObserverList#_set");
  var __ObserverList__set_isSet = dart.privateName(observer_list, "_#ObserverList#_set#isSet");
  var _set = dart.privateName(observer_list, "_set");
  const _is_ObserverList_default = Symbol('_is_ObserverList_default');
  observer_list.ObserverList$ = dart.generic(T => {
    var JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    var _HashSetOfT = () => (_HashSetOfT = dart.constFn(collection._HashSet$(T)))();
    class ObserverList extends core.Iterable$(T) {
      get [_set]() {
        let t1;
        if (!dart.test(this[__ObserverList__set_isSet])) {
          let t0 = new (_HashSetOfT()).new();
          if (dart.test(this[__ObserverList__set_isSet])) dart.throw(new _internal.LateError.fieldADI("_set"));
          this[__ObserverList__set] = t0;
          this[__ObserverList__set_isSet] = true;
        }
        t1 = this[__ObserverList__set];
        return t1;
      }
      add(item) {
        T.as(item);
        this[_isDirty] = true;
        this[_list][$add](item);
      }
      remove(item) {
        T.as(item);
        this[_isDirty] = true;
        this[_set].clear();
        return this[_list][$remove](item);
      }
      contains(element) {
        if (dart.notNull(this[_list][$length]) < 3) return this[_list][$contains](element);
        if (dart.test(this[_isDirty])) {
          this[_set].addAll(this[_list]);
          this[_isDirty] = false;
        }
        return this[_set].contains(element);
      }
      get iterator() {
        return this[_list][$iterator];
      }
      get isEmpty() {
        return this[_list][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list][$isNotEmpty];
      }
    }
    (ObserverList.new = function() {
      this[_list] = JSArrayOfT().of([]);
      this[_isDirty] = false;
      this[__ObserverList__set] = null;
      this[__ObserverList__set_isSet] = false;
      ObserverList.__proto__.new.call(this);
      ;
    }).prototype = ObserverList.prototype;
    dart.addTypeTests(ObserverList);
    ObserverList.prototype[_is_ObserverList_default] = true;
    dart.addTypeCaches(ObserverList);
    dart.setMethodSignature(ObserverList, () => ({
      __proto__: dart.getMethods(ObserverList.__proto__),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      remove: dart.fnType(core.bool, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(ObserverList, () => ({
      __proto__: dart.getGetters(ObserverList.__proto__),
      [_set]: collection.HashSet$(T),
      iterator: core.Iterator$(T),
      [$iterator]: core.Iterator$(T)
    }));
    dart.setLibraryUri(ObserverList, L0);
    dart.setFieldSignature(ObserverList, () => ({
      __proto__: dart.getFields(ObserverList.__proto__),
      [_list]: dart.finalFieldType(core.List$(T)),
      [_isDirty]: dart.fieldType(core.bool),
      [__ObserverList__set]: dart.fieldType(dart.nullable(collection.HashSet$(T))),
      [__ObserverList__set_isSet]: dart.fieldType(core.bool)
    }));
    dart.defineExtensionMethods(ObserverList, ['contains']);
    dart.defineExtensionAccessors(ObserverList, ['iterator', 'isEmpty', 'isNotEmpty']);
    return ObserverList;
  });
  observer_list.ObserverList = observer_list.ObserverList$();
  dart.addTypeTests(observer_list.ObserverList, _is_ObserverList_default);
  var _map = dart.privateName(observer_list, "_map");
  const _is_HashedObserverList_default = Symbol('_is_HashedObserverList_default');
  observer_list.HashedObserverList$ = dart.generic(T => {
    var LinkedMapOfT$int = () => (LinkedMapOfT$int = dart.constFn(_js_helper.LinkedMap$(T, core.int)))();
    class HashedObserverList extends core.Iterable$(T) {
      add(item) {
        let t1;
        T.as(item);
        this[_map][$_set](item, dart.notNull((t1 = this[_map][$_get](item), t1 == null ? 0 : t1)) + 1);
      }
      remove(item) {
        T.as(item);
        let value = this[_map][$_get](item);
        if (value == null) {
          return false;
        }
        if (value === 1) {
          this[_map][$remove](item);
        } else {
          this[_map][$_set](item, dart.notNull(value) - 1);
        }
        return true;
      }
      contains(element) {
        return this[_map][$containsKey](element);
      }
      get iterator() {
        return this[_map][$keys][$iterator];
      }
      get isEmpty() {
        return this[_map][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map][$isNotEmpty];
      }
    }
    (HashedObserverList.new = function() {
      this[_map] = new (LinkedMapOfT$int()).new();
      HashedObserverList.__proto__.new.call(this);
      ;
    }).prototype = HashedObserverList.prototype;
    dart.addTypeTests(HashedObserverList);
    HashedObserverList.prototype[_is_HashedObserverList_default] = true;
    dart.addTypeCaches(HashedObserverList);
    dart.setMethodSignature(HashedObserverList, () => ({
      __proto__: dart.getMethods(HashedObserverList.__proto__),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      remove: dart.fnType(core.bool, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(HashedObserverList, () => ({
      __proto__: dart.getGetters(HashedObserverList.__proto__),
      iterator: core.Iterator$(T),
      [$iterator]: core.Iterator$(T)
    }));
    dart.setLibraryUri(HashedObserverList, L0);
    dart.setFieldSignature(HashedObserverList, () => ({
      __proto__: dart.getFields(HashedObserverList.__proto__),
      [_map]: dart.finalFieldType(collection.LinkedHashMap$(T, core.int))
    }));
    dart.defineExtensionMethods(HashedObserverList, ['contains']);
    dart.defineExtensionAccessors(HashedObserverList, ['iterator', 'isEmpty', 'isNotEmpty']);
    return HashedObserverList;
  });
  observer_list.HashedObserverList = observer_list.HashedObserverList$();
  dart.addTypeTests(observer_list.HashedObserverList, _is_HashedObserverList_default);
  dart.trackLibraries("packages/flutter/src/foundation/observer_list.dart", {
    "package:flutter/src/foundation/observer_list.dart": observer_list
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["observer_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6BwB;mBAAO;AAAP;;;;;;MAAmB;;aAK9B;AACM,QAAf,iBAAW;AACI,QAAf,AAAM,kBAAI,IAAI;MAChB;;aAOc;AACG,QAAf,iBAAW;AACC,QAAZ,AAAK;AACL,cAAO,AAAM,sBAAO,IAAI;MAC1B;eAGsB;AACpB,YAAiB,aAAb,AAAM,wBAAS,GACjB,MAAO,AAAM,wBAAS,OAAO;AAE/B,sBAAI;AACgB,UAAlB,AAAK,kBAAO;AACI,UAAhB,iBAAW;;AAGb,cAAO,AAAK,qBAAS,OAAO;MAC9B;;AAG4B,cAAA,AAAM;MAAQ;;AAGtB,cAAA,AAAM;MAAO;;AAGV,cAAA,AAAM;MAAU;;;MA3CzB,cAAW;MACpB,iBAAW;kCACM;;;;IA0CxB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAsBa;;;AACyB,QAAlC,AAAI,kBAAC,IAAI,EAAsB,cAAN,KAAX,AAAI,kBAAC,IAAI,SAAL,OAAU,WAAK;MACnC;;aAOc;AACD,oBAAQ,AAAI,kBAAC,IAAI;AAC5B,YAAI,AAAM,KAAD,IAAI;AACX,gBAAO;;AAET,YAAI,AAAM,KAAD,KAAI;AACM,UAAjB,AAAK,oBAAO,IAAI;;AAEM,UAAtB,AAAI,kBAAC,IAAI,EAAU,aAAN,KAAK,IAAG;;AAEvB,cAAO;MACT;eAGsB;AAAY,cAAA,AAAK,0BAAY,OAAO;MAAC;;AAG/B,cAAA,AAAK,AAAK;MAAQ;;AAG1B,cAAA,AAAK;MAAO;;AAGT,cAAA,AAAK;MAAU;;;MArCV,aAAO;;;IAsCrC","file":"../../../../../../../../../../packages/flutter/src/foundation/observer_list.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__observer_list: observer_list
  };
}));

//# sourceMappingURL=observer_list.dart.lib.js.map
