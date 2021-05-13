define(['dart_sdk', 'packages/flutter/src/animation/listener_helpers.dart'], (function load__packages__flutter__src__animation__tween_sequence_dart(dart_sdk, packages__flutter__src__animation__listener_helpers$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  var tween_sequence = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $addAll = dartx.addAll;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(false);
  var JSArrayOf_Interval = () => (JSArrayOf_Interval = dart.constFn(_interceptors.JSArray$(tween_sequence._Interval)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/animation/tween_sequence.dart";
  var L1 = "package:flutter/src/animation/tween_sequence.dart";
  var _items = dart.privateName(tween_sequence, "_items");
  var _intervals = dart.privateName(tween_sequence, "_intervals");
  var _evaluateAt = dart.privateName(tween_sequence, "_evaluateAt");
  const _is_TweenSequence_default = Symbol('_is_TweenSequence_default');
  tween_sequence.TweenSequence$ = dart.generic(T => {
    var TweenSequenceItemOfT = () => (TweenSequenceItemOfT = dart.constFn(tween_sequence.TweenSequenceItem$(T)))();
    var JSArrayOfTweenSequenceItemOfT = () => (JSArrayOfTweenSequenceItemOfT = dart.constFn(_interceptors.JSArray$(TweenSequenceItemOfT())))();
    class TweenSequence extends tween.Animatable$(T) {
      [_evaluateAt](t, index) {
        if (t == null) dart.nullFailed(L0, 74, 24, "t");
        if (index == null) dart.nullFailed(L0, 74, 31, "index");
        let element = this[_items][$_get](index);
        let tInterval = this[_intervals][$_get](index).value(t);
        return element.tween.transform(tInterval);
      }
      transform(t) {
        if (t == null) dart.nullFailed(L0, 81, 22, "t");
        if (!(dart.notNull(t) >= 0.0 && dart.notNull(t) <= 1.0)) dart.assertFailed(null, L0, 82, 12, "t >= 0.0 && t <= 1.0");
        if (t === 1.0) return this[_evaluateAt](t, dart.notNull(this[_items][$length]) - 1);
        for (let index = 0; index < dart.notNull(this[_items][$length]); index = index + 1) {
          if (dart.test(this[_intervals][$_get](index).contains(t))) return this[_evaluateAt](t, index);
        }
        dart.throw(new core.StateError.new("TweenSequence.evaluate() could not find an interval for " + dart.str(t)));
      }
      toString() {
        return "TweenSequence(" + dart.str(this[_items][$length]) + " items)";
      }
    }
    (TweenSequence.new = function(items) {
      if (items == null) dart.nullFailed(L0, 53, 44, "items");
      this[_items] = JSArrayOfTweenSequenceItemOfT().of([]);
      this[_intervals] = JSArrayOf_Interval().of([]);
      if (!(items != null)) dart.assertFailed(null, L0, 54, 16, "items != null");
      if (!dart.test(items[$isNotEmpty])) dart.assertFailed(null, L0, 55, 16, "items.isNotEmpty");
      TweenSequence.__proto__.new.call(this);
      this[_items][$addAll](items);
      let totalWeight = 0.0;
      for (let item of this[_items])
        totalWeight = totalWeight + dart.notNull(item.weight);
      if (!(totalWeight > 0.0)) dart.assertFailed(null, L0, 61, 12, "totalWeight > 0.0");
      let start = 0.0;
      for (let i = 0; i < dart.notNull(this[_items][$length]); i = i + 1) {
        let end = i === dart.notNull(this[_items][$length]) - 1 ? 1.0 : start + dart.notNull(this[_items][$_get](i).weight) / totalWeight;
        this[_intervals][$add](new tween_sequence._Interval.new(start, end));
        start = end;
      }
    }).prototype = TweenSequence.prototype;
    dart.addTypeTests(TweenSequence);
    TweenSequence.prototype[_is_TweenSequence_default] = true;
    dart.addTypeCaches(TweenSequence);
    dart.setMethodSignature(TweenSequence, () => ({
      __proto__: dart.getMethods(TweenSequence.__proto__),
      [_evaluateAt]: dart.fnType(T, [core.double, core.int]),
      transform: dart.fnType(T, [core.double])
    }));
    dart.setLibraryUri(TweenSequence, L1);
    dart.setFieldSignature(TweenSequence, () => ({
      __proto__: dart.getFields(TweenSequence.__proto__),
      [_items]: dart.finalFieldType(core.List$(tween_sequence.TweenSequenceItem$(T))),
      [_intervals]: dart.finalFieldType(core.List$(tween_sequence._Interval))
    }));
    dart.defineExtensionMethods(TweenSequence, ['toString']);
    return TweenSequence;
  });
  tween_sequence.TweenSequence = tween_sequence.TweenSequence$();
  dart.addTypeTests(tween_sequence.TweenSequence, _is_TweenSequence_default);
  tween_sequence.FlippedTweenSequence = class FlippedTweenSequence extends tween_sequence.TweenSequence$(core.double) {
    transform(t) {
      if (t == null) dart.nullFailed(L0, 118, 27, "t");
      return 1 - dart.notNull(super.transform(1 - dart.notNull(t)));
    }
  };
  (tween_sequence.FlippedTweenSequence.new = function(items) {
    if (items == null) dart.nullFailed(L0, 113, 56, "items");
    if (!(items != null)) dart.assertFailed(null, L0, 114, 14, "items != null");
    tween_sequence.FlippedTweenSequence.__proto__.new.call(this, items);
    ;
  }).prototype = tween_sequence.FlippedTweenSequence.prototype;
  dart.addTypeTests(tween_sequence.FlippedTweenSequence);
  dart.addTypeCaches(tween_sequence.FlippedTweenSequence);
  dart.setLibraryUri(tween_sequence.FlippedTweenSequence, L1);
  const _is_TweenSequenceItem_default = Symbol('_is_TweenSequenceItem_default');
  var tween$ = dart.privateName(tween_sequence, "TweenSequenceItem.tween");
  var weight$ = dart.privateName(tween_sequence, "TweenSequenceItem.weight");
  tween_sequence.TweenSequenceItem$ = dart.generic(T => {
    class TweenSequenceItem extends core.Object {
      get tween() {
        return this[tween$];
      }
      set tween(value) {
        super.tween = value;
      }
      get weight() {
        return this[weight$];
      }
      set weight(value) {
        super.weight = value;
      }
    }
    (TweenSequenceItem.new = function(opts) {
      let tween = opts && 'tween' in opts ? opts.tween : null;
      if (tween == null) dart.nullFailed(L0, 127, 19, "tween");
      let weight = opts && 'weight' in opts ? opts.weight : null;
      if (weight == null) dart.nullFailed(L0, 128, 19, "weight");
      this[tween$] = tween;
      this[weight$] = weight;
      if (!(tween != null)) dart.assertFailed(null, L0, 129, 15, "tween != null");
      if (!(weight != null)) dart.assertFailed(null, L0, 130, 15, "weight != null");
      if (!(dart.notNull(weight) > 0.0)) dart.assertFailed(null, L0, 131, 15, "weight > 0.0");
      ;
    }).prototype = TweenSequenceItem.prototype;
    dart.addTypeTests(TweenSequenceItem);
    TweenSequenceItem.prototype[_is_TweenSequenceItem_default] = true;
    dart.addTypeCaches(TweenSequenceItem);
    dart.setLibraryUri(TweenSequenceItem, L1);
    dart.setFieldSignature(TweenSequenceItem, () => ({
      __proto__: dart.getFields(TweenSequenceItem.__proto__),
      tween: dart.finalFieldType(tween.Animatable$(T)),
      weight: dart.finalFieldType(core.double)
    }));
    return TweenSequenceItem;
  });
  tween_sequence.TweenSequenceItem = tween_sequence.TweenSequenceItem$();
  dart.addTypeTests(tween_sequence.TweenSequenceItem, _is_TweenSequenceItem_default);
  var start$ = dart.privateName(tween_sequence, "_Interval.start");
  var end$ = dart.privateName(tween_sequence, "_Interval.end");
  tween_sequence._Interval = class _Interval extends core.Object {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    contains(t) {
      if (t == null) dart.nullFailed(L0, 163, 24, "t");
      return dart.notNull(t) >= dart.notNull(this.start) && dart.notNull(t) < dart.notNull(this.end);
    }
    value(t) {
      if (t == null) dart.nullFailed(L0, 165, 23, "t");
      return (dart.notNull(t) - dart.notNull(this.start)) / (dart.notNull(this.end) - dart.notNull(this.start));
    }
    toString() {
      return "<" + dart.str(this.start) + ", " + dart.str(this.end) + ">";
    }
  };
  (tween_sequence._Interval.new = function(start, end) {
    if (start == null) dart.nullFailed(L0, 158, 24, "start");
    if (end == null) dart.nullFailed(L0, 158, 36, "end");
    this[start$] = start;
    this[end$] = end;
    if (!(dart.notNull(end) > dart.notNull(start))) dart.assertFailed(null, L0, 158, 50, "end > start");
    ;
  }).prototype = tween_sequence._Interval.prototype;
  dart.addTypeTests(tween_sequence._Interval);
  dart.addTypeCaches(tween_sequence._Interval);
  dart.setMethodSignature(tween_sequence._Interval, () => ({
    __proto__: dart.getMethods(tween_sequence._Interval.__proto__),
    contains: dart.fnType(core.bool, [core.double]),
    value: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(tween_sequence._Interval, L1);
  dart.setFieldSignature(tween_sequence._Interval, () => ({
    __proto__: dart.getFields(tween_sequence._Interval.__proto__),
    start: dart.finalFieldType(core.double),
    end: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(tween_sequence._Interval, ['toString']);
  dart.trackLibraries("packages/flutter/src/animation/tween_sequence.dart", {
    "package:flutter/src/animation/tween_sequence.dart": tween_sequence
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tween_sequence.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;oBAyEuB,GAAO;YAAP;YAAO;AACC,sBAAU,AAAM,oBAAC,KAAK;AACpC,wBAAY,AAAU,AAAQ,wBAAP,KAAK,QAAQ,CAAC;AAClD,cAAO,AAAQ,AAAM,QAAP,iBAAiB,SAAS;MAC1C;;YAGmB;AACjB,cAAS,AAAO,aAAT,CAAC,KAAI,OAAS,aAAF,CAAC,KAAI;AACxB,YAAI,AAAE,CAAD,KAAI,KACP,MAAO,mBAAY,CAAC,EAAgB,aAAd,AAAO,yBAAS;AACxC,iBAAS,QAAQ,GAAG,AAAM,KAAD,gBAAG,AAAO,wBAAQ,QAAA,AAAK,KAAA;AAC9C,wBAAI,AAAU,AAAQ,wBAAP,KAAK,WAAW,CAAC,IAC9B,MAAO,mBAAY,CAAC,EAAE,KAAK;;AAG+C,QAA9E,WAAM,wBAAW,AAA4D,sEAAF,CAAC;MAC9E;;AAGqB,cAAA,AAAuC,6BAAtB,AAAO,yBAAO;MAAQ;;;UAzCnB;MAkBR,eAA+B;MAC1C,mBAAwB;YAlBjC,AAAM,KAAD,IAAI;qBACT,AAAM,KAAD;AAFlB;AAGsB,MAApB,AAAO,sBAAO,KAAK;AAEZ,wBAAc;AACrB,eAAgC,OAAQ;AACZ,QAA1B,cAAA,AAAY,WAAD,gBAAI,AAAK,IAAD;AACrB,YAAO,AAAY,WAAD,GAAG;AAEd,kBAAQ;AACf,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAO,wBAAQ,IAAA,AAAE,CAAD,GAAI;AACzB,kBAAM,AAAE,CAAD,KAAkB,aAAd,AAAO,yBAAS,IAAI,MAAM,AAAM,KAAD,GAAoB,aAAjB,AAAM,AAAI,oBAAH,CAAC,YAAW,WAAW;AACnD,QAArC,AAAW,uBAAI,iCAAU,KAAK,EAAE,GAAG;AACxB,QAAX,QAAQ,GAAG;;IAEf;;;;;;;;;;;;;;;;;;;;;;UAiDwB;AAAM,YAAA,AAAE,kBAAQ,gBAAU,AAAE,iBAAE,CAAC;IAAC;;;QALH;UAC1C,AAAM,KAAD,IAAI;AAChB,iEAAM,KAAK;;EAAC;;;;;;;;;MAgCI;;;;;;MAOP;;;;;;;;UA3BG;;UACA;;MADA;MACA;YACJ,AAAM,KAAD,IAAI;YACT,AAAO,MAAD,IAAI;YACH,aAAP,MAAM,IAAG;;IAAI;;;;;;;;;;;;;;;;;IA6BZ;;;;;;IACA;;;;;;;UAEQ;AAAM,YAAE,AAAS,cAAX,CAAC,kBAAI,eAAW,aAAF,CAAC,iBAAG;IAAG;;UAE5B;AAAM,YAAY,EAAT,aAAF,CAAC,iBAAG,gBAAc,aAAJ,yBAAM;IAAM;;AAGhC,YAAA,AAAgB,gBAAb,cAAK,gBAAG,YAAG;IAAE;;2CAVhB,OAAY;QAAZ;QAAY;IAAZ;IAAY;UAAkB,aAAJ,GAAG,iBAAG,KAAK;;EAAC","file":"../../../../../../../../../../packages/flutter/src/animation/tween_sequence.dart.lib.js"}');
  // Exports:
  return {
    src__animation__tween_sequence: tween_sequence
  };
}));

//# sourceMappingURL=tween_sequence.dart.lib.js.map
