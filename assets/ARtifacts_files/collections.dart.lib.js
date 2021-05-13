define(['dart_sdk'], (function load__packages__flutter__src__foundation__collections_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var collections = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $keys = dartx.keys;
  var $containsKey = dartx.containsKey;
  var $rightShift = dartx['>>'];
  var $compareTo = dartx.compareTo;
  var $setRange = dartx.setRange;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/foundation/collections.dart";
  collections.setEquals = function setEquals(T, a, b) {
    if (a == null) return b == null;
    if (b == null || a[$length] != b[$length]) return false;
    if (a == b) return true;
    for (let value of a) {
      if (!dart.test(b.contains(value))) return false;
    }
    return true;
  };
  collections.listEquals = function listEquals(T, a, b) {
    if (a == null) return b == null;
    if (b == null || a[$length] != b[$length]) return false;
    if (a == b) return true;
    for (let index = 0; index < dart.notNull(a[$length]); index = index + 1) {
      if (!dart.equals(a[$_get](index), b[$_get](index))) return false;
    }
    return true;
  };
  collections.mapEquals = function mapEquals(T, U, a, b) {
    if (a == null) return b == null;
    if (b == null || a[$length] != b[$length]) return false;
    if (a == b) return true;
    for (let key of a[$keys]) {
      if (!dart.test(b[$containsKey](key)) || !dart.equals(b[$_get](key), a[$_get](key))) {
        return false;
      }
    }
    return true;
  };
  collections.binarySearch = function binarySearch(T, sortedList, value) {
    if (sortedList == null) dart.nullFailed(L0, 100, 56, "sortedList");
    if (value == null) dart.nullFailed(L0, 100, 70, "value");
    let min = 0;
    let max = sortedList[$length];
    while (min < dart.notNull(max)) {
      let mid = min + (dart.notNull(max) - min)[$rightShift](1);
      let element = sortedList[$_get](mid);
      let comp = element[$compareTo](value);
      if (comp === 0) {
        return mid;
      }
      if (dart.notNull(comp) < 0) {
        min = mid + 1;
      } else {
        max = mid;
      }
    }
    return -1;
  };
  collections.mergeSort = function mergeSort(T, list, opts) {
    if (list == null) dart.nullFailed(L0, 144, 11, "list");
    let start = opts && 'start' in opts ? opts.start : 0;
    if (start == null) dart.nullFailed(L0, 145, 7, "start");
    let end = opts && 'end' in opts ? opts.end : null;
    let compare = opts && 'compare' in opts ? opts.compare : null;
    end == null ? end = list[$length] : null;
    compare == null ? compare = collections._defaultCompare(T) : null;
    let length = dart.notNull(end) - dart.notNull(start);
    if (length < 2) {
      return;
    }
    if (length < 32) {
      collections._insertionSort(T, list, {compare: compare, start: start, end: end});
      return;
    }
    let middle = dart.notNull(start) + (dart.notNull(end) - dart.notNull(start))[$rightShift](1);
    let firstLength = middle - dart.notNull(start);
    let secondLength = dart.notNull(end) - middle;
    let scratchSpace = core.List$(T).filled(secondLength, list[$_get](start));
    collections._mergeSort(T, list, compare, middle, end, scratchSpace, 0);
    let firstTarget = dart.notNull(end) - firstLength;
    collections._mergeSort(T, list, compare, start, middle, list, firstTarget);
    collections._merge(T, compare, list, firstTarget, end, scratchSpace, 0, secondLength, list, start);
  };
  collections._defaultCompare = function _defaultCompare(T) {
    return dart.fn((value1, value2) => core.Comparable.as(value1)[$compareTo](value2), dart.fnType(core.int, [T, T]));
  };
  collections._insertionSort = function _insertionSort(T, list, opts) {
    if (list == null) dart.nullFailed(L0, 202, 11, "list");
    let compare = opts && 'compare' in opts ? opts.compare : null;
    let start = opts && 'start' in opts ? opts.start : 0;
    if (start == null) dart.nullFailed(L0, 204, 7, "start");
    let end = opts && 'end' in opts ? opts.end : null;
    compare == null ? compare = collections._defaultCompare(T) : null;
    end == null ? end = list[$length] : null;
    for (let pos = dart.notNull(start) + 1; pos < dart.notNull(end); pos = pos + 1) {
      let min = start;
      let max = pos;
      let element = list[$_get](pos);
      while (dart.notNull(min) < max) {
        let mid = dart.notNull(min) + (max - dart.notNull(min))[$rightShift](1);
        let comparison = compare(element, list[$_get](mid));
        if (dart.notNull(comparison) < 0) {
          max = mid;
        } else {
          min = mid + 1;
        }
      }
      list[$setRange](dart.notNull(min) + 1, pos + 1, list, min);
      list[$_set](min, element);
    }
  };
  collections._movingInsertionSort = function _movingInsertionSort(T, list, compare, start, end, target, targetOffset) {
    if (list == null) dart.nullFailed(L0, 235, 11, "list");
    if (compare == null) dart.nullFailed(L0, 236, 22, "compare");
    if (start == null) dart.nullFailed(L0, 237, 7, "start");
    if (end == null) dart.nullFailed(L0, 238, 7, "end");
    if (target == null) dart.nullFailed(L0, 239, 12, "target");
    if (targetOffset == null) dart.nullFailed(L0, 240, 7, "targetOffset");
    let length = dart.notNull(end) - dart.notNull(start);
    if (length === 0) {
      return;
    }
    target[$_set](targetOffset, list[$_get](start));
    for (let i = 1; i < length; i = i + 1) {
      let element = list[$_get](dart.notNull(start) + i);
      let min = targetOffset;
      let max = dart.notNull(targetOffset) + i;
      while (dart.notNull(min) < max) {
        let mid = dart.notNull(min) + (max - dart.notNull(min))[$rightShift](1);
        if (dart.notNull(compare(element, T.as(target[$_get](mid)))) < 0) {
          max = mid;
        } else {
          min = mid + 1;
        }
      }
      target[$setRange](dart.notNull(min) + 1, dart.notNull(targetOffset) + i + 1, target, min);
      target[$_set](min, element);
    }
  };
  collections._mergeSort = function _mergeSort(T, list, compare, start, end, target, targetOffset) {
    if (list == null) dart.nullFailed(L0, 272, 13, "list");
    if (compare == null) dart.nullFailed(L0, 273, 24, "compare");
    if (start == null) dart.nullFailed(L0, 274, 9, "start");
    if (end == null) dart.nullFailed(L0, 275, 9, "end");
    if (target == null) dart.nullFailed(L0, 276, 13, "target");
    if (targetOffset == null) dart.nullFailed(L0, 277, 9, "targetOffset");
    let length = dart.notNull(end) - dart.notNull(start);
    if (length < 32) {
      collections._movingInsertionSort(T, list, compare, start, end, target, targetOffset);
      return;
    }
    let middle = dart.notNull(start) + length[$rightShift](1);
    let firstLength = middle - dart.notNull(start);
    let secondLength = dart.notNull(end) - middle;
    let targetMiddle = dart.notNull(targetOffset) + firstLength;
    collections._mergeSort(T, list, compare, middle, end, target, targetMiddle);
    collections._mergeSort(T, list, compare, start, middle, list, middle);
    collections._merge(T, compare, list, middle, middle + firstLength, target, targetMiddle, targetMiddle + secondLength, target, targetOffset);
  };
  collections._merge = function _merge(T, compare, firstList, firstStart, firstEnd, secondList, secondStart, secondEnd, target, targetOffset) {
    let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5;
    if (compare == null) dart.nullFailed(L0, 315, 22, "compare");
    if (firstList == null) dart.nullFailed(L0, 316, 11, "firstList");
    if (firstStart == null) dart.nullFailed(L0, 317, 7, "firstStart");
    if (firstEnd == null) dart.nullFailed(L0, 318, 7, "firstEnd");
    if (secondList == null) dart.nullFailed(L0, 319, 11, "secondList");
    if (secondStart == null) dart.nullFailed(L0, 320, 7, "secondStart");
    if (secondEnd == null) dart.nullFailed(L0, 321, 7, "secondEnd");
    if (target == null) dart.nullFailed(L0, 322, 11, "target");
    if (targetOffset == null) dart.nullFailed(L0, 323, 7, "targetOffset");
    if (!(dart.notNull(firstStart) < dart.notNull(firstEnd))) dart.assertFailed(null, L0, 326, 10, "firstStart < firstEnd");
    if (!(dart.notNull(secondStart) < dart.notNull(secondEnd))) dart.assertFailed(null, L0, 327, 10, "secondStart < secondEnd");
    let cursor1 = firstStart;
    let cursor2 = secondStart;
    let firstElement = firstList[$_get]((t0 = cursor1, cursor1 = dart.notNull(t0) + 1, t0));
    let secondElement = secondList[$_get]((t0$ = cursor2, cursor2 = dart.notNull(t0$) + 1, t0$));
    while (true) {
      if (dart.notNull(compare(firstElement, secondElement)) <= 0) {
        target[$_set]((t0$0 = targetOffset, targetOffset = dart.notNull(t0$0) + 1, t0$0), firstElement);
        if (cursor1 == firstEnd) {
          break;
        }
        firstElement = firstList[$_get]((t0$1 = cursor1, cursor1 = dart.notNull(t0$1) + 1, t0$1));
      } else {
        target[$_set]((t0$2 = targetOffset, targetOffset = dart.notNull(t0$2) + 1, t0$2), secondElement);
        if (cursor2 != secondEnd) {
          secondElement = secondList[$_get]((t0$3 = cursor2, cursor2 = dart.notNull(t0$3) + 1, t0$3));
          continue;
        }
        target[$_set]((t0$4 = targetOffset, targetOffset = dart.notNull(t0$4) + 1, t0$4), firstElement);
        target[$setRange](targetOffset, dart.notNull(targetOffset) + (dart.notNull(firstEnd) - dart.notNull(cursor1)), firstList, cursor1);
        return;
      }
    }
    target[$_set]((t0$5 = targetOffset, targetOffset = dart.notNull(t0$5) + 1, t0$5), secondElement);
    target[$setRange](targetOffset, dart.notNull(targetOffset) + (dart.notNull(secondEnd) - dart.notNull(cursor2)), secondList, cursor2);
  };
  dart.defineLazy(collections, {
    /*collections._kMergeSortLimit*/get _kMergeSortLimit() {
      return 32;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/foundation/collections.dart", {
    "package:flutter/src/foundation/collections.dart": collections
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["collections.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/foundation/collections.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__collections: collections
  };
}));

//# sourceMappingURL=collections.dart.lib.js.map
