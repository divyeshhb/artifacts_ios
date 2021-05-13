define(['dart_sdk', 'packages/source_span/src/location_mixin.dart', 'packages/source_span/src/span_exception.dart'], (function load__packages__string_scanner__src__utils_dart(dart_sdk, packages__source_span__src__location_mixin$46dart, packages__source_span__src__span_exception$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const file = packages__source_span__src__location_mixin$46dart.src__file;
  const span_exception = packages__source_span__src__span_exception$46dart.src__span_exception;
  var utils = Object.create(dart.library);
  var string_scanner = Object.create(dart.library);
  var exception = Object.create(dart.library);
  var $substring = dartx.substring;
  var $codeUnitAt = dartx.codeUnitAt;
  var $toString = dartx.toString;
  var $replaceAll = dartx.replaceAll;
  var $matchAsPrefix = dartx.matchAsPrefix;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L3 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/string_scanner-1.1.0-nullsafety.3/lib/src/exception.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/string_scanner-1.1.0-nullsafety.3/lib/src/utils.dart";
  var L1 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/string_scanner-1.1.0-nullsafety.3/lib/src/string_scanner.dart";
  var L2 = "package:string_scanner/src/string_scanner.dart";
  var L4 = "package:string_scanner/src/exception.dart";
  utils.validateErrorArgs = function validateErrorArgs(string, match, position, length) {
    if (string == null) dart.nullFailed(L0, 9, 12, "string");
    if (match != null && (position != null || length != null)) {
      dart.throw(new core.ArgumentError.new("Can't pass both match and position/length."));
    }
    if (position != null) {
      if (dart.notNull(position) < 0) {
        dart.throw(new core.RangeError.new("position must be greater than or equal to 0."));
      } else if (dart.notNull(position) > string.length) {
        dart.throw(new core.RangeError.new("position must be less than or equal to the " + "string length."));
      }
    }
    if (length != null && dart.notNull(length) < 0) {
      dart.throw(new core.RangeError.new("length must be greater than or equal to 0."));
    }
    if (position != null && length != null && dart.notNull(position) + dart.notNull(length) > string.length) {
      dart.throw(new core.RangeError.new("position plus length must not go beyond the end of " + "the string."));
    }
  };
  var _position = dart.privateName(string_scanner, "_position");
  var _lastMatch = dart.privateName(string_scanner, "_lastMatch");
  var _lastMatchPosition = dart.privateName(string_scanner, "_lastMatchPosition");
  var _fail = dart.privateName(string_scanner, "_fail");
  var sourceUrl$ = dart.privateName(string_scanner, "StringScanner.sourceUrl");
  var string$ = dart.privateName(string_scanner, "StringScanner.string");
  string_scanner.StringScanner = class StringScanner extends core.Object {
    get sourceUrl() {
      return this[sourceUrl$];
    }
    set sourceUrl(value) {
      super.sourceUrl = value;
    }
    get string() {
      return this[string$];
    }
    set string(value) {
      super.string = value;
    }
    get position() {
      return this[_position];
    }
    set position(position) {
      if (position == null) dart.nullFailed(L1, 24, 20, "position");
      if (dart.notNull(position) < 0 || dart.notNull(position) > this.string.length) {
        dart.throw(new core.ArgumentError.new("Invalid position " + dart.str(position)));
      }
      this[_position] = position;
      this[_lastMatch] = null;
    }
    get lastMatch() {
      if (this[_position] != this[_lastMatchPosition]) this[_lastMatch] = null;
      return this[_lastMatch];
    }
    get rest() {
      return this.string[$substring](this.position);
    }
    get isDone() {
      return this.position === this.string.length;
    }
    readChar() {
      let t0;
      if (dart.test(this.isDone)) {
        this[_fail]("more input");
        dart.throw(new _internal.ReachabilityError.new("`null` encountered as the result from expression with type `Never`."));
      }
      return this.string[$codeUnitAt]((t0 = this[_position], this[_position] = dart.notNull(t0) + 1, t0));
    }
    peekChar(offset = null) {
      offset == null ? offset = 0 : null;
      let index = dart.notNull(this.position) + dart.notNull(offset);
      if (index < 0 || index >= this.string.length) return null;
      return this.string[$codeUnitAt](index);
    }
    scanChar(character) {
      if (character == null) dart.nullFailed(L1, 94, 21, "character");
      if (dart.test(this.isDone)) return false;
      if (this.string[$codeUnitAt](this[_position]) !== character) return false;
      this[_position] = dart.notNull(this[_position]) + 1;
      return true;
    }
    expectChar(character, opts) {
      if (character == null) dart.nullFailed(L1, 107, 23, "character");
      let name = opts && 'name' in opts ? opts.name : null;
      if (dart.test(this.scanChar(character))) return;
      if (name == null) {
        if (character === 92) {
          name = "\"\\\"";
        } else if (character === 34) {
          name = "\"\\\"\"";
        } else {
          name = "\"" + dart.str(core.String.fromCharCode(character)) + "\"";
        }
      }
      this[_fail](name);
      dart.throw(new _internal.ReachabilityError.new("`null` encountered as the result from expression with type `Never`."));
    }
    scan(pattern) {
      if (pattern == null) dart.nullFailed(L1, 127, 21, "pattern");
      let success = this.matches(pattern);
      if (dart.test(success)) {
        this[_position] = dart.nullCheck(this[_lastMatch]).end;
        this[_lastMatchPosition] = this[_position];
      }
      return success;
    }
    expect(pattern, opts) {
      if (pattern == null) dart.nullFailed(L1, 143, 23, "pattern");
      let name = opts && 'name' in opts ? opts.name : null;
      if (dart.test(this.scan(pattern))) return;
      if (name == null) {
        if (core.RegExp.is(pattern)) {
          let source = pattern.pattern;
          name = "/" + dart.str(source) + "/";
        } else {
          name = dart.toString(pattern)[$replaceAll]("\\", "\\\\")[$replaceAll]("\"", "\\\"");
          name = "\"" + dart.str(name) + "\"";
        }
      }
      this[_fail](name);
      dart.throw(new _internal.ReachabilityError.new("`null` encountered as the result from expression with type `Never`."));
    }
    expectDone() {
      if (dart.test(this.isDone)) return;
      this[_fail]("no more input");
      dart.throw(new _internal.ReachabilityError.new("`null` encountered as the result from expression with type `Never`."));
    }
    matches(pattern) {
      if (pattern == null) dart.nullFailed(L1, 170, 24, "pattern");
      this[_lastMatch] = pattern[$matchAsPrefix](this.string, this.position);
      this[_lastMatchPosition] = this[_position];
      return this[_lastMatch] != null;
    }
    substring(start, end = null) {
      if (start == null) dart.nullFailed(L1, 180, 24, "start");
      end == null ? end = this.position : null;
      return this.string[$substring](start, end);
    }
    error(message, opts) {
      if (message == null) dart.nullFailed(L1, 198, 22, "message");
      let match = opts && 'match' in opts ? opts.match : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let length = opts && 'length' in opts ? opts.length : null;
      utils.validateErrorArgs(this.string, match, position, length);
      if (match == null && position == null && length == null) match = this.lastMatch;
      position == null ? position = match == null ? this.position : match.start : null;
      length == null ? length = match == null ? 0 : dart.notNull(match.end) - dart.notNull(match.start) : null;
      let sourceFile = new file.SourceFile.fromString(this.string, {url: this.sourceUrl});
      let span = sourceFile.span(position, dart.notNull(position) + dart.notNull(length));
      dart.throw(new exception.StringScannerException.new(message, span, this.string));
    }
    [_fail](name) {
      if (name == null) dart.nullFailed(L1, 213, 22, "name");
      this.error("expected " + dart.str(name) + ".", {position: this.position, length: 0});
      dart.throw(new _internal.ReachabilityError.new("`null` encountered as the result from expression with type `Never`."));
    }
  };
  (string_scanner.StringScanner.new = function(string, opts) {
    if (string == null) dart.nullFailed(L1, 59, 22, "string");
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this[_position] = 0;
    this[_lastMatch] = null;
    this[_lastMatchPosition] = null;
    this[string$] = string;
    this[sourceUrl$] = sourceUrl == null ? null : typeof sourceUrl == 'string' ? core.Uri.parse(sourceUrl) : core.Uri.as(sourceUrl);
    if (position != null) this.position = position;
  }).prototype = string_scanner.StringScanner.prototype;
  dart.addTypeTests(string_scanner.StringScanner);
  dart.addTypeCaches(string_scanner.StringScanner);
  dart.setMethodSignature(string_scanner.StringScanner, () => ({
    __proto__: dart.getMethods(string_scanner.StringScanner.__proto__),
    readChar: dart.fnType(core.int, []),
    peekChar: dart.fnType(dart.nullable(core.int), [], [dart.nullable(core.int)]),
    scanChar: dart.fnType(core.bool, [core.int]),
    expectChar: dart.fnType(dart.void, [core.int], {name: dart.nullable(core.String)}, {}),
    scan: dart.fnType(core.bool, [core.Pattern]),
    expect: dart.fnType(dart.void, [core.Pattern], {name: dart.nullable(core.String)}, {}),
    expectDone: dart.fnType(dart.void, []),
    matches: dart.fnType(core.bool, [core.Pattern]),
    substring: dart.fnType(core.String, [core.int], [dart.nullable(core.int)]),
    error: dart.fnType(dart.Never, [core.String], {length: dart.nullable(core.int), match: dart.nullable(core.Match), position: dart.nullable(core.int)}, {}),
    [_fail]: dart.fnType(dart.Never, [core.String])
  }));
  dart.setGetterSignature(string_scanner.StringScanner, () => ({
    __proto__: dart.getGetters(string_scanner.StringScanner.__proto__),
    position: core.int,
    lastMatch: dart.nullable(core.Match),
    rest: core.String,
    isDone: core.bool
  }));
  dart.setSetterSignature(string_scanner.StringScanner, () => ({
    __proto__: dart.getSetters(string_scanner.StringScanner.__proto__),
    position: core.int
  }));
  dart.setLibraryUri(string_scanner.StringScanner, L2);
  dart.setFieldSignature(string_scanner.StringScanner, () => ({
    __proto__: dart.getFields(string_scanner.StringScanner.__proto__),
    sourceUrl: dart.finalFieldType(dart.nullable(core.Uri)),
    string: dart.finalFieldType(core.String),
    [_position]: dart.fieldType(core.int),
    [_lastMatch]: dart.fieldType(dart.nullable(core.Match)),
    [_lastMatchPosition]: dart.fieldType(dart.nullable(core.int))
  }));
  exception.StringScannerException = class StringScannerException extends span_exception.SourceSpanFormatException {
    get source() {
      return core.String.as(super.source);
    }
    get sourceUrl() {
      let t0;
      t0 = this.span;
      return t0 == null ? null : t0.sourceUrl;
    }
  };
  (exception.StringScannerException.new = function(message, span, source) {
    if (message == null) dart.nullFailed(L3, 19, 33, "message");
    if (span == null) dart.nullFailed(L3, 19, 53, "span");
    if (source == null) dart.nullFailed(L3, 19, 66, "source");
    exception.StringScannerException.__proto__.new.call(this, message, span, source);
    ;
  }).prototype = exception.StringScannerException.prototype;
  dart.addTypeTests(exception.StringScannerException);
  dart.addTypeCaches(exception.StringScannerException);
  dart.setGetterSignature(exception.StringScannerException, () => ({
    __proto__: dart.getGetters(exception.StringScannerException.__proto__),
    source: core.String,
    sourceUrl: dart.nullable(core.Uri)
  }));
  dart.setLibraryUri(exception.StringScannerException, L4);
  dart.trackLibraries("packages/string_scanner/src/utils.dart", {
    "package:string_scanner/src/utils.dart": utils,
    "package:string_scanner/src/string_scanner.dart": string_scanner,
    "package:string_scanner/src/exception.dart": exception
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart","string_scanner.dart","exception.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/string_scanner/src/utils.dart.lib.js"}');
  // Exports:
  return {
    src__utils: utils,
    src__string_scanner: string_scanner,
    src__exception: exception
  };
}));

//# sourceMappingURL=utils.dart.lib.js.map
