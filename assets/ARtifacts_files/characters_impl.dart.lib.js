define(['dart_sdk', 'packages/characters/src/grapheme_clusters/breaks.dart', 'packages/characters/src/grapheme_clusters/table.dart'], (function load__packages__characters__src__characters_impl_dart(dart_sdk, packages__characters__src__grapheme_clusters__breaks$46dart, packages__characters__src__grapheme_clusters__table$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const breaks$ = packages__characters__src__grapheme_clusters__breaks$46dart.src__grapheme_clusters__breaks;
  const table = packages__characters__src__grapheme_clusters__table$46dart.src__grapheme_clusters__table;
  var characters_impl = Object.create(dart.library);
  var characters = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $substring = dartx.substring;
  var $isNotEmpty = dartx.isNotEmpty;
  var $map = dartx.map;
  var $startsWith = dartx.startsWith;
  var $where = dartx.where;
  var $join = dartx.join;
  var $toLowerCase = dartx.toLowerCase;
  var $toUpperCase = dartx.toUpperCase;
  var $hashCode = dartx.hashCode;
  var $iterator = dartx.iterator;
  var $whereType = dartx.whereType;
  var $skip = dartx.skip;
  var $take = dartx.take;
  var $skipWhile = dartx.skipWhile;
  var $takeWhile = dartx.takeWhile;
  var $codeUnitAt = dartx.codeUnitAt;
  var $codeUnits = dartx.codeUnits;
  var $getRange = dartx.getRange;
  var $replaceRange = dartx.replaceRange;
  var $indexOf = dartx.indexOf;
  var $lastIndexOf = dartx.lastIndexOf;
  dart._checkModuleNullSafetyMode(false);
  var VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  var VoidToNString = () => (VoidToNString = dart.constFn(dart.nullable(VoidToString())))();
  var SyncIterableOfCharacters = () => (SyncIterableOfCharacters = dart.constFn(_js_helper.SyncIterable$(characters.Characters)))();
  var SyncIterableOfCharacterRange = () => (SyncIterableOfCharacterRange = dart.constFn(_js_helper.SyncIterable$(characters.CharacterRange)))();
  const CT = Object.create(null);
  var L1 = "package:characters/src/characters_impl.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/characters-1.1.0-nullsafety.5/lib/src/characters_impl.dart";
  var L2 = "package:characters/src/characters.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: characters_impl.StringCharacters.prototype,
        [string$]: ""
      });
    }
  }, false);
  var _rangeAll = dart.privateName(characters_impl, "_rangeAll");
  var _skipIndices = dart.privateName(characters_impl, "_skipIndices");
  var _skip = dart.privateName(characters_impl, "_skip");
  var _take = dart.privateName(characters_impl, "_take");
  var string$ = dart.privateName(characters_impl, "StringCharacters.string");
  var C0;
  characters_impl.StringCharacters = class StringCharacters extends core.Iterable$(core.String) {
    get string() {
      return this[string$];
    }
    set string(value) {
      super.string = value;
    }
    get iterator() {
      return new characters_impl.StringCharacterRange.__(this.string, 0, 0);
    }
    get iteratorAtEnd() {
      return new characters_impl.StringCharacterRange.__(this.string, this.string.length, this.string.length);
    }
    get [_rangeAll]() {
      return new characters_impl.StringCharacterRange.__(this.string, 0, this.string.length);
    }
    get first() {
      return this.string[$isEmpty] ? dart.throw(new core.StateError.new("No element")) : this.string[$substring](0, new breaks$.Breaks.new(this.string, 0, this.string.length, 176).nextBreak());
    }
    get last() {
      return this.string[$isEmpty] ? dart.throw(new core.StateError.new("No element")) : this.string[$substring](new breaks$.BackBreaks.new(this.string, this.string.length, 0, 176).nextBreak());
    }
    get single() {
      if (this.string[$isEmpty]) dart.throw(new core.StateError.new("No element"));
      let firstEnd = new breaks$.Breaks.new(this.string, 0, this.string.length, 176).nextBreak();
      if (firstEnd === this.string.length) return this.string;
      dart.throw(new core.StateError.new("Too many elements"));
    }
    get isEmpty() {
      return this.string[$isEmpty];
    }
    get isNotEmpty() {
      return this.string[$isNotEmpty];
    }
    get length() {
      if (this.string[$isEmpty]) return 0;
      let brk = new breaks$.Breaks.new(this.string, 0, this.string.length, 176);
      let length = 0;
      while (dart.notNull(brk.nextBreak()) >= 0) {
        length = length + 1;
      }
      return length;
    }
    whereType(T) {
      let self = this;
      if (core.Iterable$(T).is(self)) {
        return self[$map](T, dart.fn(x => x, dart.fnType(T, [T])));
      }
      return new (_internal.EmptyIterable$(T)).new();
    }
    join(separator = "") {
      if (separator == null) dart.nullFailed(L0, 81, 23, "separator");
      if (separator === "") return this.string;
      return characters_impl._explodeReplace(this.string, 0, this.string.length, separator, "");
    }
    lastWhere(test, opts) {
      if (test == null) dart.nullFailed(L0, 87, 50, "test");
      let orElse = opts && 'orElse' in opts ? opts.orElse : null;
      VoidToNString().as(orElse);
      let cursor = this.string.length;
      let brk = new breaks$.BackBreaks.new(this.string, cursor, 0, 176);
      let next = 0;
      while (dart.notNull(next = brk.nextBreak()) >= 0) {
        let current = this.string[$substring](next, cursor);
        if (dart.test(test(current))) return current;
        cursor = next;
      }
      if (orElse != null) return orElse();
      dart.throw(new core.StateError.new("No element"));
    }
    elementAt(index) {
      if (index == null) dart.nullFailed(L0, 102, 24, "index");
      core.RangeError.checkNotNegative(index, "index");
      let count = 0;
      if (this.string[$isNotEmpty]) {
        let breaks = new breaks$.Breaks.new(this.string, 0, this.string.length, 176);
        let start = 0;
        let end = 0;
        while (dart.notNull(end = breaks.nextBreak()) >= 0) {
          if (count === index) return this.string[$substring](start, end);
          count = count + 1;
          start = end;
        }
      }
      dart.throw(new core.IndexError.new(index, this, "index", null, count));
    }
    contains(other) {
      if (typeof other == 'string') {
        if (other[$isEmpty]) return false;
        let next = new breaks$.Breaks.new(other, 0, other.length, 176).nextBreak();
        if (next !== other.length) return false;
        return dart.notNull(characters_impl._indexOf(this.string, other, 0, this.string.length)) >= 0;
      }
      return false;
    }
    startsWith(characters) {
      if (characters == null) dart.nullFailed(L0, 131, 30, "characters");
      let length = this.string.length;
      let otherString = characters.string;
      if (otherString[$isEmpty]) return true;
      return this.string[$startsWith](otherString) && dart.test(breaks$.isGraphemeClusterBoundary(this.string, 0, length, otherString.length));
    }
    endsWith(characters) {
      if (characters == null) dart.nullFailed(L0, 140, 28, "characters");
      let length = this.string.length;
      let otherString = characters.string;
      if (otherString[$isEmpty]) return true;
      let otherLength = otherString.length;
      let start = this.string.length - otherLength;
      return start >= 0 && this.string[$startsWith](otherString, start) && dart.test(breaks$.isGraphemeClusterBoundary(this.string, 0, length, start));
    }
    replaceAll(pattern, replacement) {
      let t0, t0$;
      if (pattern == null) dart.nullFailed(L0, 152, 36, "pattern");
      if (replacement == null) dart.nullFailed(L0, 152, 56, "replacement");
      t0$ = (t0 = this[_rangeAll].replaceAll(pattern, replacement), t0 == null ? null : t0.source);
      return t0$ == null ? this : t0$;
    }
    replaceFirst(pattern, replacement) {
      let t0, t0$;
      if (pattern == null) dart.nullFailed(L0, 156, 38, "pattern");
      if (replacement == null) dart.nullFailed(L0, 156, 58, "replacement");
      t0$ = (t0 = this[_rangeAll].replaceFirst(pattern, replacement), t0 == null ? null : t0.source);
      return t0$ == null ? this : t0$;
    }
    split(pattern, maxParts = 0) {
      if (pattern == null) dart.nullFailed(L0, 160, 41, "pattern");
      if (maxParts == null) dart.nullFailed(L0, 160, 55, "maxParts");
      return new (SyncIterableOfCharacters()).new(() => (function* split(maxParts) {
        if (maxParts === 1 || this.string[$isEmpty]) {
          yield this;
          return;
        }
        let patternString = pattern.string;
        let start = 0;
        if (patternString[$isNotEmpty]) {
          do {
            let match = characters_impl._indexOf(this.string, patternString, start, this.string.length);
            if (dart.notNull(match) < 0) break;
            yield new characters_impl.StringCharacters.new(this.string[$substring](start, match));
            start = dart.notNull(match) + patternString.length;
            maxParts = dart.notNull(maxParts) - 1;
          } while (maxParts !== 1);
        } else {
          let breaks = new breaks$.Breaks.new(this.string, 0, this.string.length, 176);
          do {
            let match = breaks.nextBreak();
            if (dart.notNull(match) < 0) return;
            yield new characters_impl.StringCharacters.new(this.string[$substring](start, match));
            start = match;
            maxParts = dart.notNull(maxParts) - 1;
          } while (maxParts !== 1);
          if (start === this.string.length) return;
        }
        yield new characters_impl.StringCharacters.new(this.string[$substring](start));
      }).bind(this)(maxParts));
    }
    containsAll(characters) {
      if (characters == null) dart.nullFailed(L0, 191, 31, "characters");
      return dart.notNull(characters_impl._indexOf(this.string, characters.string, 0, this.string.length)) >= 0;
    }
    [_skipIndices](count, cursor, breaks) {
      if (count == null) dart.nullFailed(L0, 202, 24, "count");
      if (cursor == null) dart.nullFailed(L0, 202, 35, "cursor");
      if (count === 0 || cursor === this.string.length) return cursor;
      breaks == null ? breaks = new breaks$.Breaks.new(this.string, cursor, this.string.length, 176) : null;
      do {
        let nextBreak = breaks.nextBreak();
        if (dart.notNull(nextBreak) < 0) break;
        cursor = nextBreak;
      } while ((count = dart.notNull(count) - 1) > 0);
      return cursor;
    }
    skip(count) {
      if (count == null) dart.nullFailed(L0, 214, 23, "count");
      core.RangeError.checkNotNegative(count, "count");
      return this[_skip](count);
    }
    [_skip](count) {
      if (count == null) dart.nullFailed(L0, 219, 24, "count");
      let start = this[_skipIndices](count, 0, null);
      if (start === this.string.length) return characters_impl.StringCharacters._empty;
      return new characters_impl.StringCharacters.new(this.string[$substring](start));
    }
    take(count) {
      if (count == null) dart.nullFailed(L0, 226, 23, "count");
      core.RangeError.checkNotNegative(count, "count");
      return this[_take](count);
    }
    [_take](count) {
      if (count == null) dart.nullFailed(L0, 231, 24, "count");
      let end = this[_skipIndices](count, 0, null);
      if (end === this.string.length) return this;
      return new characters_impl.StringCharacters.new(this.string[$substring](0, end));
    }
    getRange(start, end = null) {
      if (start == null) dart.nullFailed(L0, 238, 27, "start");
      core.RangeError.checkNotNegative(start, "start");
      if (end == null) return this[_skip](start);
      if (dart.notNull(end) < dart.notNull(start)) dart.throw(new core.RangeError.range(end, start, null, "end"));
      if (end == start) return characters_impl.StringCharacters._empty;
      if (start === 0) return this[_take](end);
      if (this.string[$isEmpty]) return this;
      let breaks = new breaks$.Breaks.new(this.string, 0, this.string.length, 176);
      let startIndex = this[_skipIndices](start, 0, breaks);
      if (startIndex === this.string.length) return characters_impl.StringCharacters._empty;
      let endIndex = this[_skipIndices](dart.notNull(end) - dart.notNull(start), start, breaks);
      return new characters_impl.StringCharacters.new(this.string[$substring](startIndex, endIndex));
    }
    characterAt(position) {
      if (position == null) dart.nullFailed(L0, 253, 30, "position");
      let breaks = new breaks$.Breaks.new(this.string, 0, this.string.length, 176);
      let start = 0;
      while (dart.notNull(position) > 0) {
        position = dart.notNull(position) - 1;
        start = breaks.nextBreak();
        if (dart.notNull(start) < 0) dart.throw(new core.StateError.new("No element"));
      }
      let end = breaks.nextBreak();
      if (dart.notNull(end) < 0) dart.throw(new core.StateError.new("No element"));
      if (start === 0 && end === this.string.length) return this;
      return new characters_impl.StringCharacters.new(this.string[$substring](start, end));
    }
    skipWhile(test) {
      if (test == null) dart.nullFailed(L0, 269, 46, "test");
      if (this.string[$isNotEmpty]) {
        let stringLength = this.string.length;
        let breaks = new breaks$.Breaks.new(this.string, 0, stringLength, 176);
        let index = 0;
        let startIndex = 0;
        while (dart.notNull(index = breaks.nextBreak()) >= 0) {
          if (!dart.test(test(this.string[$substring](startIndex, index)))) {
            if (startIndex === 0) return this;
            if (startIndex === stringLength) return characters_impl.StringCharacters._empty;
            return new characters_impl.StringCharacters.new(this.string[$substring](startIndex));
          }
          startIndex = index;
        }
      }
      return characters_impl.StringCharacters._empty;
    }
    takeWhile(test) {
      if (test == null) dart.nullFailed(L0, 288, 46, "test");
      if (this.string[$isNotEmpty]) {
        let breaks = new breaks$.Breaks.new(this.string, 0, this.string.length, 176);
        let index = 0;
        let endIndex = 0;
        while (dart.notNull(index = breaks.nextBreak()) >= 0) {
          if (!dart.test(test(this.string[$substring](endIndex, index)))) {
            if (endIndex === 0) return characters_impl.StringCharacters._empty;
            return new characters_impl.StringCharacters.new(this.string[$substring](0, endIndex));
          }
          endIndex = index;
        }
      }
      return this;
    }
    where(test) {
      if (test == null) dart.nullFailed(L0, 305, 42, "test");
      let string = super[$where](test)[$join]();
      if (string[$isEmpty]) return characters_impl.StringCharacters._empty;
      return new characters_impl.StringCharacters.new(super[$where](test)[$join]());
    }
    ['+'](characters) {
      if (characters == null) dart.nullFailed(L0, 312, 36, "characters");
      return new characters_impl.StringCharacters.new(dart.notNull(this.string) + dart.notNull(characters.string));
    }
    skipLast(count) {
      if (count == null) dart.nullFailed(L0, 316, 27, "count");
      core.RangeError.checkNotNegative(count, "count");
      if (count === 0) return this;
      if (this.string[$isNotEmpty]) {
        let breaks = new breaks$.BackBreaks.new(this.string, this.string.length, 0, 176);
        let endIndex = this.string.length;
        while (dart.notNull(count) > 0) {
          let index = breaks.nextBreak();
          if (dart.notNull(index) >= 0) {
            endIndex = index;
            count = dart.notNull(count) - 1;
          } else {
            return characters_impl.StringCharacters._empty;
          }
        }
        if (dart.notNull(endIndex) > 0) return new characters_impl.StringCharacters.new(this.string[$substring](0, endIndex));
      }
      return characters_impl.StringCharacters._empty;
    }
    skipLastWhile(test) {
      if (test == null) dart.nullFailed(L0, 337, 50, "test");
      if (this.string[$isNotEmpty]) {
        let breaks = new breaks$.BackBreaks.new(this.string, this.string.length, 0, 176);
        let index = 0;
        let end = this.string.length;
        while (dart.notNull(index = breaks.nextBreak()) >= 0) {
          if (!dart.test(test(this.string[$substring](index, end)))) {
            if (end === this.string.length) return this;
            return end === 0 ? characters_impl.StringCharacters._empty : new characters_impl.StringCharacters.new(this.string[$substring](0, end));
          }
          end = index;
        }
      }
      return characters_impl.StringCharacters._empty;
    }
    takeLast(count) {
      if (count == null) dart.nullFailed(L0, 354, 27, "count");
      core.RangeError.checkNotNegative(count, "count");
      if (count === 0) return characters_impl.StringCharacters._empty;
      if (this.string[$isNotEmpty]) {
        let breaks = new breaks$.BackBreaks.new(this.string, this.string.length, 0, 176);
        let startIndex = this.string.length;
        while (dart.notNull(count) > 0) {
          let index = breaks.nextBreak();
          if (dart.notNull(index) >= 0) {
            startIndex = index;
            count = dart.notNull(count) - 1;
          } else {
            return this;
          }
        }
        if (dart.notNull(startIndex) > 0) {
          return new characters_impl.StringCharacters.new(this.string[$substring](startIndex));
        }
      }
      return this;
    }
    takeLastWhile(test) {
      if (test == null) dart.nullFailed(L0, 377, 50, "test");
      if (this.string[$isNotEmpty]) {
        let breaks = new breaks$.BackBreaks.new(this.string, this.string.length, 0, 176);
        let index = 0;
        let start = this.string.length;
        while (dart.notNull(index = breaks.nextBreak()) >= 0) {
          if (!dart.test(test(this.string[$substring](index, start)))) {
            if (start === this.string.length) return characters_impl.StringCharacters._empty;
            return new characters_impl.StringCharacters.new(this.string[$substring](start));
          }
          start = index;
        }
      }
      return this;
    }
    toLowerCase() {
      return new characters_impl.StringCharacters.new(this.string[$toLowerCase]());
    }
    toUpperCase() {
      return new characters_impl.StringCharacters.new(this.string[$toUpperCase]());
    }
    _equals(other) {
      if (other == null) return false;
      return characters.Characters.is(other) && this.string == other.string;
    }
    get hashCode() {
      return dart.hashCode(this.string);
    }
    toString() {
      return this.string;
    }
    findFirst(characters) {
      if (characters == null) dart.nullFailed(L0, 410, 40, "characters");
      let range = this[_rangeAll];
      if (dart.test(range.collapseToFirst(characters))) return range;
      return null;
    }
    findLast(characters) {
      if (characters == null) dart.nullFailed(L0, 417, 39, "characters");
      let range = this[_rangeAll];
      if (dart.test(range.collapseToLast(characters))) return range;
      return null;
    }
  };
  (characters_impl.StringCharacters.new = function(string) {
    if (string == null) dart.nullFailed(L0, 21, 31, "string");
    this[string$] = string;
    characters_impl.StringCharacters.__proto__.new.call(this);
    ;
  }).prototype = characters_impl.StringCharacters.prototype;
  dart.addTypeTests(characters_impl.StringCharacters);
  dart.addTypeCaches(characters_impl.StringCharacters);
  characters_impl.StringCharacters[dart.implements] = () => [characters.Characters];
  dart.setMethodSignature(characters_impl.StringCharacters, () => ({
    __proto__: dart.getMethods(characters_impl.StringCharacters.__proto__),
    whereType: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
    [$whereType]: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
    startsWith: dart.fnType(core.bool, [characters.Characters]),
    endsWith: dart.fnType(core.bool, [characters.Characters]),
    replaceAll: dart.fnType(characters.Characters, [characters.Characters, characters.Characters]),
    replaceFirst: dart.fnType(characters.Characters, [characters.Characters, characters.Characters]),
    split: dart.fnType(core.Iterable$(characters.Characters), [characters.Characters], [core.int]),
    containsAll: dart.fnType(core.bool, [characters.Characters]),
    [_skipIndices]: dart.fnType(core.int, [core.int, core.int, dart.nullable(breaks$.Breaks)]),
    skip: dart.fnType(characters.Characters, [core.int]),
    [$skip]: dart.fnType(characters.Characters, [core.int]),
    [_skip]: dart.fnType(characters.Characters, [core.int]),
    take: dart.fnType(characters.Characters, [core.int]),
    [$take]: dart.fnType(characters.Characters, [core.int]),
    [_take]: dart.fnType(characters.Characters, [core.int]),
    getRange: dart.fnType(characters.Characters, [core.int], [dart.nullable(core.int)]),
    characterAt: dart.fnType(characters.Characters, [core.int]),
    skipWhile: dart.fnType(characters.Characters, [dart.fnType(core.bool, [core.String])]),
    [$skipWhile]: dart.fnType(characters.Characters, [dart.fnType(core.bool, [core.String])]),
    takeWhile: dart.fnType(characters.Characters, [dart.fnType(core.bool, [core.String])]),
    [$takeWhile]: dart.fnType(characters.Characters, [dart.fnType(core.bool, [core.String])]),
    where: dart.fnType(characters.Characters, [dart.fnType(core.bool, [core.String])]),
    [$where]: dart.fnType(characters.Characters, [dart.fnType(core.bool, [core.String])]),
    '+': dart.fnType(characters.Characters, [characters.Characters]),
    skipLast: dart.fnType(characters.Characters, [core.int]),
    skipLastWhile: dart.fnType(characters.Characters, [dart.fnType(core.bool, [core.String])]),
    takeLast: dart.fnType(characters.Characters, [core.int]),
    takeLastWhile: dart.fnType(characters.Characters, [dart.fnType(core.bool, [core.String])]),
    toLowerCase: dart.fnType(characters.Characters, []),
    toUpperCase: dart.fnType(characters.Characters, []),
    findFirst: dart.fnType(dart.nullable(characters.CharacterRange), [characters.Characters]),
    findLast: dart.fnType(dart.nullable(characters.CharacterRange), [characters.Characters])
  }));
  dart.setGetterSignature(characters_impl.StringCharacters, () => ({
    __proto__: dart.getGetters(characters_impl.StringCharacters.__proto__),
    iterator: characters.CharacterRange,
    [$iterator]: characters.CharacterRange,
    iteratorAtEnd: characters.CharacterRange,
    [_rangeAll]: characters_impl.StringCharacterRange
  }));
  dart.setLibraryUri(characters_impl.StringCharacters, L1);
  dart.setFieldSignature(characters_impl.StringCharacters, () => ({
    __proto__: dart.getFields(characters_impl.StringCharacters.__proto__),
    string: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(characters_impl.StringCharacters, [
    'whereType',
    'join',
    'lastWhere',
    'elementAt',
    'contains',
    'skip',
    'take',
    'skipWhile',
    'takeWhile',
    'where',
    '_equals',
    'toString'
  ]);
  dart.defineExtensionAccessors(characters_impl.StringCharacters, [
    'iterator',
    'first',
    'last',
    'single',
    'isEmpty',
    'isNotEmpty',
    'length',
    'hashCode'
  ]);
  dart.defineLazy(characters_impl.StringCharacters, {
    /*characters_impl.StringCharacters._empty*/get _empty() {
      return C0 || CT.C0;
    }
  }, false);
  var _currentCache = dart.privateName(characters_impl, "_currentCache");
  var _string$ = dart.privateName(characters_impl, "_string");
  var _start$ = dart.privateName(characters_impl, "_start");
  var _end$ = dart.privateName(characters_impl, "_end");
  var _move = dart.privateName(characters_impl, "_move");
  var _breaksFromEnd = dart.privateName(characters_impl, "_breaksFromEnd");
  var _backBreaksFromStart = dart.privateName(characters_impl, "_backBreaksFromStart");
  var _advanceEnd = dart.privateName(characters_impl, "_advanceEnd");
  var _moveNextPattern = dart.privateName(characters_impl, "_moveNextPattern");
  var _retractStart = dart.privateName(characters_impl, "_retractStart");
  var _movePreviousPattern = dart.privateName(characters_impl, "_movePreviousPattern");
  var _retractStartUntil = dart.privateName(characters_impl, "_retractStartUntil");
  var _advanceEndUntil = dart.privateName(characters_impl, "_advanceEndUntil");
  var _startsWith = dart.privateName(characters_impl, "_startsWith");
  var _endsWith = dart.privateName(characters_impl, "_endsWith");
  characters_impl.StringCharacterRange = class StringCharacterRange extends core.Object {
    static at(string, startIndex, endIndex = null) {
      let t0;
      if (string == null) dart.nullFailed(L0, 447, 42, "string");
      if (startIndex == null) dart.nullFailed(L0, 447, 54, "startIndex");
      core.RangeError.checkValidRange(startIndex, endIndex, string.length, "startIndex", "endIndex");
      return characters_impl.StringCharacterRange._expandRange(string, startIndex, (t0 = endIndex, t0 == null ? startIndex : t0));
    }
    [_move](start, end) {
      if (start == null) dart.nullFailed(L0, 459, 18, "start");
      if (end == null) dart.nullFailed(L0, 459, 29, "end");
      this[_start$] = start;
      this[_end$] = end;
      this[_currentCache] = null;
    }
    [_breaksFromEnd]() {
      return new breaks$.Breaks.new(this[_string$], this[_end$], this[_string$].length, 176);
    }
    [_backBreaksFromStart]() {
      return new breaks$.BackBreaks.new(this[_string$], this[_start$], 0, 176);
    }
    get current() {
      let t0;
      t0 = this[_currentCache];
      return t0 == null ? this[_currentCache] = this[_string$][$substring](this[_start$], this[_end$]) : t0;
    }
    moveNext(count = 1) {
      if (count == null) dart.nullFailed(L0, 485, 22, "count");
      return this[_advanceEnd](count, this[_end$]);
    }
    [_advanceEnd](count, newStart) {
      if (count == null) dart.nullFailed(L0, 487, 24, "count");
      if (newStart == null) dart.nullFailed(L0, 487, 35, "newStart");
      if (dart.notNull(count) > 0) {
        let state = 176;
        let index = this[_end$];
        while (dart.notNull(index) < this[_string$].length) {
          let char = this[_string$][$codeUnitAt](index);
          let category = 2;
          let nextIndex = dart.notNull(index) + 1;
          if ((char & 64512) !== 55296) {
            category = table.low(char);
          } else if (nextIndex < this[_string$].length) {
            let nextChar = this[_string$][$codeUnitAt](nextIndex);
            if ((nextChar & 64512) === 56320) {
              nextIndex = nextIndex + 1;
              category = table.high(char, nextChar);
            }
          }
          state = table.move(state, category);
          if ((dart.notNull(state) & 1) === 0 && (count = dart.notNull(count) - 1) === 0) {
            this[_move](newStart, index);
            return true;
          }
          index = nextIndex;
        }
        this[_move](newStart, this[_string$].length);
        return count === 1 && state !== 176;
      } else if (count === 0) {
        this[_move](newStart, this[_end$]);
        return true;
      } else {
        dart.throw(new core.RangeError.range(count, 0, null, "count"));
      }
    }
    [_moveNextPattern](patternString, start, end) {
      if (patternString == null) dart.nullFailed(L0, 521, 32, "patternString");
      if (start == null) dart.nullFailed(L0, 521, 51, "start");
      if (end == null) dart.nullFailed(L0, 521, 62, "end");
      let offset = characters_impl._indexOf(this[_string$], patternString, start, end);
      if (dart.notNull(offset) >= 0) {
        this[_move](offset, dart.notNull(offset) + patternString.length);
        return true;
      }
      return false;
    }
    moveBack(count = 1) {
      if (count == null) dart.nullFailed(L0, 531, 22, "count");
      return this[_retractStart](count, this[_start$]);
    }
    [_retractStart](count, newEnd) {
      if (count == null) dart.nullFailed(L0, 533, 26, "count");
      if (newEnd == null) dart.nullFailed(L0, 533, 37, "newEnd");
      core.RangeError.checkNotNegative(count, "count");
      let breaks = this[_backBreaksFromStart]();
      let start = this[_start$];
      while (dart.notNull(count) > 0) {
        let nextBreak = breaks.nextBreak();
        if (dart.notNull(nextBreak) >= 0) {
          start = nextBreak;
        } else {
          break;
        }
        count = dart.notNull(count) - 1;
      }
      this[_move](start, newEnd);
      return count === 0;
    }
    [_movePreviousPattern](patternString, start, end) {
      if (patternString == null) dart.nullFailed(L0, 550, 36, "patternString");
      if (start == null) dart.nullFailed(L0, 550, 55, "start");
      if (end == null) dart.nullFailed(L0, 550, 66, "end");
      let offset = characters_impl._lastIndexOf(this[_string$], patternString, start, end);
      if (dart.notNull(offset) >= 0) {
        this[_move](offset, dart.notNull(offset) + patternString.length);
        return true;
      }
      return false;
    }
    get utf16CodeUnits() {
      return this[_string$][$codeUnits][$getRange](this[_start$], this[_end$]);
    }
    get runes() {
      return new core.Runes.new(this.current);
    }
    copy() {
      return new characters_impl.StringCharacterRange.__(this[_string$], this[_start$], this[_end$]);
    }
    collapseToEnd() {
      this[_move](this[_end$], this[_end$]);
    }
    collapseToStart() {
      this[_move](this[_start$], this[_start$]);
    }
    dropFirst(count = 1) {
      if (count == null) dart.nullFailed(L0, 581, 23, "count");
      core.RangeError.checkNotNegative(count, "count");
      if (this[_start$] == this[_end$]) return count === 0;
      let breaks = new breaks$.Breaks.new(this[_string$], this[_start$], this[_end$], 176);
      while (dart.notNull(count) > 0) {
        let nextBreak = breaks.nextBreak();
        if (dart.notNull(nextBreak) >= 0) {
          this[_start$] = nextBreak;
          this[_currentCache] = null;
          count = dart.notNull(count) - 1;
        } else {
          return false;
        }
      }
      return true;
    }
    dropTo(target) {
      if (target == null) dart.nullFailed(L0, 599, 26, "target");
      if (this[_start$] == this[_end$]) return target[$isEmpty];
      let targetString = target.string;
      let index = characters_impl._indexOf(this[_string$], targetString, this[_start$], this[_end$]);
      if (dart.notNull(index) >= 0) {
        this[_move](dart.notNull(index) + targetString.length, this[_end$]);
        return true;
      }
      return false;
    }
    dropUntil(target) {
      if (target == null) dart.nullFailed(L0, 611, 29, "target");
      if (this[_start$] == this[_end$]) return target[$isEmpty];
      let targetString = target.string;
      let index = characters_impl._indexOf(this[_string$], targetString, this[_start$], this[_end$]);
      if (dart.notNull(index) >= 0) {
        this[_move](index, this[_end$]);
        return true;
      }
      this[_move](this[_end$], this[_end$]);
      return false;
    }
    dropWhile(test) {
      if (test == null) dart.nullFailed(L0, 624, 40, "test");
      if (this[_start$] == this[_end$]) return;
      let breaks = new breaks$.Breaks.new(this[_string$], this[_start$], this[_end$], 176);
      let cursor = this[_start$];
      let next = 0;
      while (dart.notNull(next = breaks.nextBreak()) >= 0) {
        if (!dart.test(test(this[_string$][$substring](cursor, next)))) {
          break;
        }
        cursor = next;
      }
      this[_move](cursor, this[_end$]);
    }
    dropLast(count = 1) {
      if (count == null) dart.nullFailed(L0, 639, 22, "count");
      core.RangeError.checkNotNegative(count, "count");
      let breaks = new breaks$.BackBreaks.new(this[_string$], this[_end$], this[_start$], 176);
      while (dart.notNull(count) > 0) {
        let nextBreak = breaks.nextBreak();
        if (dart.notNull(nextBreak) >= 0) {
          this[_end$] = nextBreak;
          this[_currentCache] = null;
          count = dart.notNull(count) - 1;
        } else {
          return false;
        }
      }
      return true;
    }
    dropBackTo(target) {
      if (target == null) dart.nullFailed(L0, 656, 30, "target");
      if (this[_start$] == this[_end$]) return target[$isEmpty];
      let targetString = target.string;
      let index = characters_impl._lastIndexOf(this[_string$], targetString, this[_start$], this[_end$]);
      if (dart.notNull(index) >= 0) {
        this[_move](this[_start$], index);
        return true;
      }
      return false;
    }
    dropBackUntil(target) {
      if (target == null) dart.nullFailed(L0, 668, 33, "target");
      if (this[_start$] == this[_end$]) return target[$isEmpty];
      let targetString = target.string;
      let index = characters_impl._lastIndexOf(this[_string$], targetString, this[_start$], this[_end$]);
      if (dart.notNull(index) >= 0) {
        this[_move](this[_start$], dart.notNull(index) + targetString.length);
        return true;
      }
      this[_move](this[_start$], this[_start$]);
      return false;
    }
    dropBackWhile(test) {
      if (test == null) dart.nullFailed(L0, 681, 44, "test");
      if (this[_start$] == this[_end$]) return;
      let breaks = new breaks$.BackBreaks.new(this[_string$], this[_end$], this[_start$], 176);
      let cursor = this[_end$];
      let next = 0;
      while (dart.notNull(next = breaks.nextBreak()) >= 0) {
        if (!dart.test(test(this[_string$][$substring](next, cursor)))) {
          break;
        }
        cursor = next;
      }
      this[_move](this[_start$], cursor);
    }
    expandNext(count = 1) {
      if (count == null) dart.nullFailed(L0, 696, 24, "count");
      return this[_advanceEnd](count, this[_start$]);
    }
    expandTo(target) {
      if (target == null) dart.nullFailed(L0, 699, 28, "target");
      let targetString = target.string;
      let index = characters_impl._indexOf(this[_string$], targetString, this[_end$], this[_string$].length);
      if (dart.notNull(index) >= 0) {
        this[_move](this[_start$], dart.notNull(index) + targetString.length);
        return true;
      }
      return false;
    }
    expandWhile(test) {
      if (test == null) dart.nullFailed(L0, 710, 52, "test");
      let breaks = this[_breaksFromEnd]();
      let cursor = this[_end$];
      let next = 0;
      while (dart.notNull(next = breaks.nextBreak()) >= 0) {
        if (!dart.test(test(this[_string$][$substring](cursor, next)))) {
          break;
        }
        cursor = next;
      }
      this[_move](this[_start$], cursor);
    }
    expandAll() {
      this[_move](this[_start$], this[_string$].length);
    }
    expandBack(count = 1) {
      if (count == null) dart.nullFailed(L0, 729, 24, "count");
      return this[_retractStart](count, this[_end$]);
    }
    expandBackTo(target) {
      if (target == null) dart.nullFailed(L0, 732, 32, "target");
      let targetString = target.string;
      let index = characters_impl._lastIndexOf(this[_string$], targetString, 0, this[_start$]);
      if (dart.notNull(index) >= 0) {
        this[_move](index, this[_end$]);
        return true;
      }
      return false;
    }
    expandBackWhile(test) {
      if (test == null) dart.nullFailed(L0, 743, 56, "test");
      let breaks = this[_backBreaksFromStart]();
      let cursor = this[_start$];
      let next = 0;
      while (dart.notNull(next = breaks.nextBreak()) >= 0) {
        if (!dart.test(test(this[_string$][$substring](next, cursor)))) {
          this[_move](cursor, this[_end$]);
          return;
        }
        cursor = next;
      }
      this[_move](0, this[_end$]);
    }
    expandBackUntil(target) {
      if (target == null) dart.nullFailed(L0, 758, 35, "target");
      return this[_retractStartUntil](target.string, this[_end$]);
    }
    expandBackAll() {
      this[_move](0, this[_end$]);
    }
    expandUntil(target) {
      if (target == null) dart.nullFailed(L0, 768, 31, "target");
      return this[_advanceEndUntil](target.string, this[_start$]);
    }
    get isEmpty() {
      return this[_start$] == this[_end$];
    }
    get isNotEmpty() {
      return this[_start$] != this[_end$];
    }
    moveBackUntil(target) {
      if (target == null) dart.nullFailed(L0, 779, 33, "target");
      let targetString = target.string;
      return this[_retractStartUntil](targetString, this[_start$]);
    }
    [_retractStartUntil](targetString, newEnd) {
      if (targetString == null) dart.nullFailed(L0, 784, 34, "targetString");
      if (newEnd == null) dart.nullFailed(L0, 784, 52, "newEnd");
      let index = characters_impl._lastIndexOf(this[_string$], targetString, 0, this[_start$]);
      if (dart.notNull(index) >= 0) {
        this[_move](dart.notNull(index) + targetString.length, newEnd);
        return true;
      }
      this[_move](0, newEnd);
      return false;
    }
    collapseToFirst(target) {
      if (target == null) dart.nullFailed(L0, 795, 35, "target");
      return this[_moveNextPattern](target.string, this[_start$], this[_end$]);
    }
    collapseToLast(target) {
      if (target == null) dart.nullFailed(L0, 800, 34, "target");
      return this[_movePreviousPattern](target.string, this[_start$], this[_end$]);
    }
    moveUntil(target) {
      if (target == null) dart.nullFailed(L0, 805, 29, "target");
      let targetString = target.string;
      return this[_advanceEndUntil](targetString, this[_end$]);
    }
    [_advanceEndUntil](targetString, newStart) {
      if (targetString == null) dart.nullFailed(L0, 810, 32, "targetString");
      if (newStart == null) dart.nullFailed(L0, 810, 50, "newStart");
      let index = characters_impl._indexOf(this[_string$], targetString, this[_end$], this[_string$].length);
      if (dart.notNull(index) >= 0) {
        this[_move](newStart, index);
        return true;
      }
      this[_move](newStart, this[_string$].length);
      return false;
    }
    replaceFirst(pattern, replacement) {
      if (pattern == null) dart.nullFailed(L0, 821, 43, "pattern");
      if (replacement == null) dart.nullFailed(L0, 821, 63, "replacement");
      let patternString = pattern.string;
      let replacementString = replacement.string;
      let replaced = null;
      if (patternString[$isEmpty]) {
        replaced = this[_string$][$replaceRange](this[_start$], this[_start$], replacementString);
      } else {
        let index = characters_impl._indexOf(this[_string$], patternString, this[_start$], this[_end$]);
        if (dart.notNull(index) >= 0) {
          replaced = this[_string$][$replaceRange](index, dart.notNull(index) + patternString.length, replacementString);
        } else {
          return null;
        }
      }
      let newEnd = replaced.length - this[_string$].length + dart.notNull(this[_end$]);
      return characters_impl.StringCharacterRange._expandRange(replaced, this[_start$], newEnd);
    }
    replaceAll(pattern, replacement) {
      let t0, t0$;
      if (pattern == null) dart.nullFailed(L0, 841, 41, "pattern");
      if (replacement == null) dart.nullFailed(L0, 841, 61, "replacement");
      let patternString = pattern.string;
      let replacementString = replacement.string;
      if (patternString[$isEmpty]) {
        let replaced = characters_impl._explodeReplace(this[_string$], this[_start$], this[_end$], replacementString, replacementString);
        let newEnd = replaced.length - (this[_string$].length - dart.notNull(this[_end$]));
        return characters_impl.StringCharacterRange._expandRange(replaced, this[_start$], newEnd);
      }
      if (this[_start$] == this[_end$]) return null;
      let start = 0;
      let cursor = this[_start$];
      let buffer = null;
      while (dart.notNull(cursor = characters_impl._indexOf(this[_string$], patternString, cursor, this[_end$])) >= 0) {
        t0$ = (t0 = buffer, t0 == null ? buffer = new core.StringBuffer.new() : t0);
        (() => {
          t0$.write(this[_string$][$substring](start, cursor));
          t0$.write(replacementString);
          return t0$;
        })();
        cursor = dart.notNull(cursor) + patternString.length;
        start = cursor;
      }
      if (buffer == null) return null;
      buffer.write(this[_string$][$substring](start));
      let replaced = dart.toString(buffer);
      let newEnd = replaced.length - (this[_string$].length - dart.notNull(this[_end$]));
      return characters_impl.StringCharacterRange._expandRange(replaced, this[_start$], newEnd);
    }
    replaceRange(replacement) {
      if (replacement == null) dart.nullFailed(L0, 869, 42, "replacement");
      let replacementString = replacement.string;
      let resultString = this[_string$][$replaceRange](this[_start$], this[_end$], replacementString);
      return characters_impl.StringCharacterRange._expandRange(resultString, this[_start$], dart.notNull(this[_start$]) + replacementString.length);
    }
    static _expandRange(string, start, end) {
      if (string == null) dart.nullFailed(L0, 880, 51, "string");
      if (start == null) dart.nullFailed(L0, 880, 63, "start");
      if (end == null) dart.nullFailed(L0, 880, 74, "end");
      start = breaks$.previousBreak(string, 0, string.length, start);
      if (end != start) {
        end = breaks$.nextBreak(string, 0, string.length, end);
      }
      return new characters_impl.StringCharacterRange.__(string, start, end);
    }
    get source() {
      return new characters_impl.StringCharacters.new(this[_string$]);
    }
    startsWith(characters) {
      if (characters == null) dart.nullFailed(L0, 892, 30, "characters");
      return this[_startsWith](this[_start$], this[_end$], characters.string);
    }
    endsWith(characters) {
      if (characters == null) dart.nullFailed(L0, 897, 28, "characters");
      return this[_endsWith](this[_start$], this[_end$], characters.string);
    }
    isFollowedBy(characters) {
      if (characters == null) dart.nullFailed(L0, 902, 32, "characters");
      return this[_startsWith](this[_end$], this[_string$].length, characters.string);
    }
    isPrecededBy(characters) {
      if (characters == null) dart.nullFailed(L0, 907, 32, "characters");
      return this[_endsWith](0, this[_start$], characters.string);
    }
    [_endsWith](start, end, string) {
      if (start == null) dart.nullFailed(L0, 911, 22, "start");
      if (end == null) dart.nullFailed(L0, 911, 33, "end");
      if (string == null) dart.nullFailed(L0, 911, 45, "string");
      let length = string.length;
      let stringStart = dart.notNull(end) - length;
      return stringStart >= dart.notNull(start) && this[_string$][$startsWith](string, stringStart) && dart.test(breaks$.isGraphemeClusterBoundary(this[_string$], start, end, stringStart));
    }
    [_startsWith](start, end, string) {
      if (start == null) dart.nullFailed(L0, 919, 24, "start");
      if (end == null) dart.nullFailed(L0, 919, 35, "end");
      if (string == null) dart.nullFailed(L0, 919, 47, "string");
      let length = string.length;
      let stringEnd = dart.notNull(start) + length;
      return stringEnd <= dart.notNull(end) && this[_string$][$startsWith](string, start) && dart.test(breaks$.isGraphemeClusterBoundary(this[_string$], start, end, stringEnd));
    }
    moveBackTo(target) {
      if (target == null) dart.nullFailed(L0, 928, 30, "target");
      let targetString = target.string;
      let index = characters_impl._lastIndexOf(this[_string$], targetString, 0, this[_start$]);
      if (dart.notNull(index) >= 0) {
        this[_move](index, dart.notNull(index) + targetString.length);
        return true;
      }
      return false;
    }
    moveTo(target) {
      if (target == null) dart.nullFailed(L0, 939, 26, "target");
      let targetString = target.string;
      let index = characters_impl._indexOf(this[_string$], targetString, this[_end$], this[_string$].length);
      if (dart.notNull(index) >= 0) {
        this[_move](index, dart.notNull(index) + targetString.length);
        return true;
      }
      return false;
    }
    get charactersAfter() {
      return new characters_impl.StringCharacters.new(this[_string$][$substring](this[_end$]));
    }
    get charactersBefore() {
      return new characters_impl.StringCharacters.new(this[_string$][$substring](0, this[_start$]));
    }
    get currentCharacters() {
      return new characters_impl.StringCharacters.new(this.current);
    }
    moveBackAll() {
      this[_move](0, this[_start$]);
    }
    moveNextAll() {
      this[_move](this[_end$], this[_string$].length);
    }
    get stringAfter() {
      return this[_string$][$substring](this[_end$]);
    }
    get stringAfterLength() {
      return this[_string$].length - dart.notNull(this[_end$]);
    }
    get stringBefore() {
      return this[_string$][$substring](0, this[_start$]);
    }
    get stringBeforeLength() {
      return this[_start$];
    }
    split(pattern, maxParts = 0) {
      if (pattern == null) dart.nullFailed(L0, 982, 45, "pattern");
      if (maxParts == null) dart.nullFailed(L0, 982, 59, "maxParts");
      return new (SyncIterableOfCharacterRange()).new(() => (function* split(maxParts) {
        if (maxParts === 1 || this[_start$] == this[_end$]) {
          yield this;
          return;
        }
        let patternString = pattern.string;
        let start = this[_start$];
        if (patternString[$isNotEmpty]) {
          do {
            let match = characters_impl._indexOf(this[_string$], patternString, start, this[_end$]);
            if (dart.notNull(match) < 0) break;
            yield new characters_impl.StringCharacterRange.__(this[_string$], start, match);
            start = dart.notNull(match) + patternString.length;
            maxParts = dart.notNull(maxParts) - 1;
          } while (maxParts !== 1);
          yield new characters_impl.StringCharacterRange.__(this[_string$], start, this[_end$]);
        } else {
          let breaks = new breaks$.Breaks.new(this[_string$], this[_start$], this[_end$], 176);
          do {
            let match = breaks.nextBreak();
            if (dart.notNull(match) < 0) return;
            yield new characters_impl.StringCharacterRange.__(this[_string$], start, match);
            start = match;
            maxParts = dart.notNull(maxParts) - 1;
          } while (maxParts !== 1);
          if (dart.notNull(start) < dart.notNull(this[_end$])) {
            yield new characters_impl.StringCharacterRange.__(this[_string$], start, this[_end$]);
          }
        }
      }).bind(this)(maxParts));
    }
  };
  (characters_impl.StringCharacterRange.new = function(string) {
    if (string == null) dart.nullFailed(L0, 445, 31, "string");
    characters_impl.StringCharacterRange.__.call(this, string, 0, 0);
  }).prototype = characters_impl.StringCharacterRange.prototype;
  (characters_impl.StringCharacterRange.__ = function(_string, _start, _end) {
    if (_string == null) dart.nullFailed(L0, 454, 31, "_string");
    if (_start == null) dart.nullFailed(L0, 454, 45, "_start");
    if (_end == null) dart.nullFailed(L0, 454, 58, "_end");
    this[_currentCache] = null;
    this[_string$] = _string;
    this[_start$] = _start;
    this[_end$] = _end;
    ;
  }).prototype = characters_impl.StringCharacterRange.prototype;
  dart.addTypeTests(characters_impl.StringCharacterRange);
  dart.addTypeCaches(characters_impl.StringCharacterRange);
  characters_impl.StringCharacterRange[dart.implements] = () => [characters.CharacterRange];
  dart.setMethodSignature(characters_impl.StringCharacterRange, () => ({
    __proto__: dart.getMethods(characters_impl.StringCharacterRange.__proto__),
    [_move]: dart.fnType(dart.void, [core.int, core.int]),
    [_breaksFromEnd]: dart.fnType(breaks$.Breaks, []),
    [_backBreaksFromStart]: dart.fnType(breaks$.BackBreaks, []),
    moveNext: dart.fnType(core.bool, [], [core.int]),
    [_advanceEnd]: dart.fnType(core.bool, [core.int, core.int]),
    [_moveNextPattern]: dart.fnType(core.bool, [core.String, core.int, core.int]),
    moveBack: dart.fnType(core.bool, [], [core.int]),
    [_retractStart]: dart.fnType(core.bool, [core.int, core.int]),
    [_movePreviousPattern]: dart.fnType(core.bool, [core.String, core.int, core.int]),
    copy: dart.fnType(characters.CharacterRange, []),
    collapseToEnd: dart.fnType(dart.void, []),
    collapseToStart: dart.fnType(dart.void, []),
    dropFirst: dart.fnType(core.bool, [], [core.int]),
    dropTo: dart.fnType(core.bool, [characters.Characters]),
    dropUntil: dart.fnType(core.bool, [characters.Characters]),
    dropWhile: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])]),
    dropLast: dart.fnType(core.bool, [], [core.int]),
    dropBackTo: dart.fnType(core.bool, [characters.Characters]),
    dropBackUntil: dart.fnType(core.bool, [characters.Characters]),
    dropBackWhile: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])]),
    expandNext: dart.fnType(core.bool, [], [core.int]),
    expandTo: dart.fnType(core.bool, [characters.Characters]),
    expandWhile: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])]),
    expandAll: dart.fnType(dart.void, []),
    expandBack: dart.fnType(core.bool, [], [core.int]),
    expandBackTo: dart.fnType(core.bool, [characters.Characters]),
    expandBackWhile: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])]),
    expandBackUntil: dart.fnType(core.bool, [characters.Characters]),
    expandBackAll: dart.fnType(dart.void, []),
    expandUntil: dart.fnType(core.bool, [characters.Characters]),
    moveBackUntil: dart.fnType(core.bool, [characters.Characters]),
    [_retractStartUntil]: dart.fnType(core.bool, [core.String, core.int]),
    collapseToFirst: dart.fnType(core.bool, [characters.Characters]),
    collapseToLast: dart.fnType(core.bool, [characters.Characters]),
    moveUntil: dart.fnType(core.bool, [characters.Characters]),
    [_advanceEndUntil]: dart.fnType(core.bool, [core.String, core.int]),
    replaceFirst: dart.fnType(dart.nullable(characters.CharacterRange), [characters.Characters, characters.Characters]),
    replaceAll: dart.fnType(dart.nullable(characters.CharacterRange), [characters.Characters, characters.Characters]),
    replaceRange: dart.fnType(characters.CharacterRange, [characters.Characters]),
    startsWith: dart.fnType(core.bool, [characters.Characters]),
    endsWith: dart.fnType(core.bool, [characters.Characters]),
    isFollowedBy: dart.fnType(core.bool, [characters.Characters]),
    isPrecededBy: dart.fnType(core.bool, [characters.Characters]),
    [_endsWith]: dart.fnType(core.bool, [core.int, core.int, core.String]),
    [_startsWith]: dart.fnType(core.bool, [core.int, core.int, core.String]),
    moveBackTo: dart.fnType(core.bool, [characters.Characters]),
    moveTo: dart.fnType(core.bool, [characters.Characters]),
    moveBackAll: dart.fnType(dart.void, []),
    moveNextAll: dart.fnType(dart.void, []),
    split: dart.fnType(core.Iterable$(characters.CharacterRange), [characters.Characters], [core.int])
  }));
  dart.setGetterSignature(characters_impl.StringCharacterRange, () => ({
    __proto__: dart.getGetters(characters_impl.StringCharacterRange.__proto__),
    current: core.String,
    utf16CodeUnits: core.Iterable$(core.int),
    runes: core.Runes,
    isEmpty: core.bool,
    isNotEmpty: core.bool,
    source: characters.Characters,
    charactersAfter: characters.Characters,
    charactersBefore: characters.Characters,
    currentCharacters: characters.Characters,
    stringAfter: core.String,
    stringAfterLength: core.int,
    stringBefore: core.String,
    stringBeforeLength: core.int
  }));
  dart.setLibraryUri(characters_impl.StringCharacterRange, L1);
  dart.setFieldSignature(characters_impl.StringCharacterRange, () => ({
    __proto__: dart.getFields(characters_impl.StringCharacterRange.__proto__),
    [_string$]: dart.finalFieldType(core.String),
    [_start$]: dart.fieldType(core.int),
    [_end$]: dart.fieldType(core.int),
    [_currentCache]: dart.fieldType(dart.nullable(core.String))
  }));
  characters_impl._explodeReplace = function _explodeReplace(string, start, end, internalReplacement, outerReplacement) {
    let t0, t0$;
    if (string == null) dart.nullFailed(L0, 1015, 31, "string");
    if (start == null) dart.nullFailed(L0, 1015, 43, "start");
    if (end == null) dart.nullFailed(L0, 1015, 54, "end");
    if (internalReplacement == null) dart.nullFailed(L0, 1016, 12, "internalReplacement");
    if (outerReplacement == null) dart.nullFailed(L0, 1016, 40, "outerReplacement");
    if (start == end) {
      return string[$replaceRange](start, start, outerReplacement);
    }
    let buffer = new core.StringBuffer.new(string[$substring](0, start));
    let breaks = new breaks$.Breaks.new(string, start, end, 176);
    let index = 0;
    let replacement = outerReplacement;
    while (dart.notNull(index = breaks.nextBreak()) >= 0) {
      t0 = buffer;
      (() => {
        t0.write(replacement);
        t0.write(string[$substring](start, index));
        return t0;
      })();
      start = index;
      replacement = internalReplacement;
    }
    t0$ = buffer;
    (() => {
      t0$.write(outerReplacement);
      t0$.write(string[$substring](end));
      return t0$;
    })();
    return buffer.toString();
  };
  characters_impl._indexOf = function _indexOf(source, pattern, start, end) {
    if (source == null) dart.nullFailed(L0, 1037, 21, "source");
    if (pattern == null) dart.nullFailed(L0, 1037, 36, "pattern");
    if (start == null) dart.nullFailed(L0, 1037, 49, "start");
    if (end == null) dart.nullFailed(L0, 1037, 60, "end");
    let patternLength = pattern.length;
    if (patternLength === 0) return start;
    let realEnd = dart.notNull(end) - patternLength;
    if (realEnd < dart.notNull(start)) return -1;
    let rest = source.length - realEnd;
    if (rest <= (realEnd - dart.notNull(start)) * 2) {
      let index = 0;
      while (dart.notNull(start) < realEnd && (index = source[$indexOf](pattern, start)) >= 0) {
        if (index > realEnd) return -1;
        if (dart.test(breaks$.isGraphemeClusterBoundary(source, start, end, index)) && dart.test(breaks$.isGraphemeClusterBoundary(source, start, end, index + patternLength))) {
          return index;
        }
        start = index + 1;
      }
      return -1;
    }
    return characters_impl._gcIndexOf(source, pattern, start, end);
  };
  characters_impl._gcIndexOf = function _gcIndexOf(source, pattern, start, end) {
    if (source == null) dart.nullFailed(L0, 1062, 23, "source");
    if (pattern == null) dart.nullFailed(L0, 1062, 38, "pattern");
    if (start == null) dart.nullFailed(L0, 1062, 51, "start");
    if (end == null) dart.nullFailed(L0, 1062, 62, "end");
    let breaks = new breaks$.Breaks.new(source, start, end, 0);
    let index = 0;
    while (dart.notNull(index = breaks.nextBreak()) >= 0) {
      let endIndex = dart.notNull(index) + pattern.length;
      if (endIndex > dart.notNull(end)) break;
      if (source[$startsWith](pattern, index) && dart.test(breaks$.isGraphemeClusterBoundary(source, start, end, endIndex))) {
        return index;
      }
    }
    return -1;
  };
  characters_impl._lastIndexOf = function _lastIndexOf(source, pattern, start, end) {
    if (source == null) dart.nullFailed(L0, 1079, 25, "source");
    if (pattern == null) dart.nullFailed(L0, 1079, 40, "pattern");
    if (start == null) dart.nullFailed(L0, 1079, 53, "start");
    if (end == null) dart.nullFailed(L0, 1079, 64, "end");
    let patternLength = pattern.length;
    if (patternLength === 0) return end;
    let realEnd = dart.notNull(end) - patternLength;
    if (realEnd < dart.notNull(start)) return -1;
    if (realEnd * 2 > dart.notNull(start)) {
      let index = 0;
      while (realEnd >= dart.notNull(start) && (index = source[$lastIndexOf](pattern, realEnd)) >= 0) {
        if (index < dart.notNull(start)) return -1;
        if (dart.test(breaks$.isGraphemeClusterBoundary(source, start, end, index)) && dart.test(breaks$.isGraphemeClusterBoundary(source, start, end, index + patternLength))) {
          return index;
        }
        realEnd = index - 1;
      }
      return -1;
    }
    return characters_impl._gcLastIndexOf(source, pattern, start, end);
  };
  characters_impl._gcLastIndexOf = function _gcLastIndexOf(source, pattern, start, end) {
    if (source == null) dart.nullFailed(L0, 1104, 27, "source");
    if (pattern == null) dart.nullFailed(L0, 1104, 42, "pattern");
    if (start == null) dart.nullFailed(L0, 1104, 55, "start");
    if (end == null) dart.nullFailed(L0, 1104, 66, "end");
    let breaks = new breaks$.BackBreaks.new(source, end, start, 0);
    let index = 0;
    while (dart.notNull(index = breaks.nextBreak()) >= 0) {
      let startIndex = dart.notNull(index) - pattern.length;
      if (startIndex < dart.notNull(start)) break;
      if (source[$startsWith](pattern, startIndex) && dart.test(breaks$.isGraphemeClusterBoundary(source, start, end, startIndex))) {
        return startIndex;
      }
    }
    return -1;
  };
  characters.Characters = class Characters extends core.Object {
    [Symbol.iterator]() {
      return new dart.JsIterator(this[$iterator]);
    }
  };
  (characters.Characters[dart.mixinNew] = function() {
  }).prototype = characters.Characters.prototype;
  characters.Characters.prototype[dart.isIterable] = true;
  dart.addTypeTests(characters.Characters);
  dart.addTypeCaches(characters.Characters);
  characters.Characters[dart.implements] = () => [core.Iterable$(core.String)];
  dart.setLibraryUri(characters.Characters, L2);
  characters.CharacterRange = class CharacterRange extends core.Object {};
  (characters.CharacterRange[dart.mixinNew] = function() {
  }).prototype = characters.CharacterRange.prototype;
  dart.addTypeTests(characters.CharacterRange);
  dart.addTypeCaches(characters.CharacterRange);
  characters.CharacterRange[dart.implements] = () => [core.Iterator$(core.String)];
  dart.setLibraryUri(characters.CharacterRange, L2);
  dart.trackLibraries("packages/characters/src/characters_impl.dart", {
    "package:characters/src/characters_impl.dart": characters_impl,
    "package:characters/src/characters.dart": characters
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["characters_impl.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/characters/src/characters_impl.dart.lib.js"}');
  // Exports:
  return {
    src__characters_impl: characters_impl,
    src__characters: characters
  };
}));

//# sourceMappingURL=characters_impl.dart.lib.js.map
