define(['dart_sdk'], (function load__packages__flutter__src__scheduler__priority_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var priority = Object.create(dart.library);
  var $abs = dartx.abs;
  var $sign = dartx.sign;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/scheduler/priority.dart";
  var L1 = "package:flutter/src/scheduler/priority.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: priority.Priority.prototype,
        [_value$]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: priority.Priority.prototype,
        [_value$]: 100000
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: priority.Priority.prototype,
        [_value$]: 200000
      });
    }
  }, false);
  var _value = dart.privateName(priority, "_value");
  var _value$ = dart.privateName(priority, "Priority._value");
  var C0;
  var C1;
  var C2;
  priority.Priority = class Priority extends core.Object {
    get [_value]() {
      return this[_value$];
    }
    set [_value](value) {
      super[_value] = value;
    }
    get value() {
      return this[_value];
    }
    ['+'](offset) {
      if (offset == null) dart.nullFailed(L0, 37, 27, "offset");
      if (offset[$abs]() > 10000) {
        offset = 10000 * offset[$sign];
      }
      return new priority.Priority.__(dart.notNull(this[_value]) + dart.notNull(offset));
    }
    ['-'](offset) {
      if (offset == null) dart.nullFailed(L0, 50, 27, "offset");
      return this['+'](-dart.notNull(offset));
    }
  };
  (priority.Priority.__ = function(_value) {
    if (_value == null) dart.nullFailed(L0, 10, 25, "_value");
    this[_value$] = _value;
    ;
  }).prototype = priority.Priority.prototype;
  dart.addTypeTests(priority.Priority);
  dart.addTypeCaches(priority.Priority);
  dart.setMethodSignature(priority.Priority, () => ({
    __proto__: dart.getMethods(priority.Priority.__proto__),
    '+': dart.fnType(priority.Priority, [core.int]),
    '-': dart.fnType(priority.Priority, [core.int])
  }));
  dart.setGetterSignature(priority.Priority, () => ({
    __proto__: dart.getGetters(priority.Priority.__proto__),
    value: core.int
  }));
  dart.setLibraryUri(priority.Priority, L1);
  dart.setFieldSignature(priority.Priority, () => ({
    __proto__: dart.getFields(priority.Priority.__proto__),
    [_value]: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(priority.Priority, {
    /*priority.Priority.idle*/get idle() {
      return C0 || CT.C0;
    },
    /*priority.Priority.animation*/get animation() {
      return C1 || CT.C1;
    },
    /*priority.Priority.touch*/get touch() {
      return C2 || CT.C2;
    },
    /*priority.Priority.kMaxOffset*/get kMaxOffset() {
      return 10000;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/scheduler/priority.dart", {
    "package:flutter/src/scheduler/priority.dart": priority
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["priority.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAaY;;;;;;;AADO;IAAM;;UAwBC;AACtB,UAAI,AAAO,AAAM,MAAP;AAEyB,QAAjC,SAAoB,QAAE,AAAO,MAAD;;AAE9B,YAAgB,0BAAS,aAAP,6BAAS,MAAM;IACnC;;UAOwB;AAAW,YAAA,AAAK,WAAG,cAAC,MAAM;IAAC;;;QAxC7B;;;EAAO;;;;;;;;;;;;;;;;;;MAOP,sBAAI;;;MAGJ,2BAAS;;;MAGT,uBAAK;;;MAOV,4BAAU","file":"../../../../../../../../../../packages/flutter/src/scheduler/priority.dart.lib.js"}');
  // Exports:
  return {
    src__scheduler__priority: priority
  };
}));

//# sourceMappingURL=priority.dart.lib.js.map
