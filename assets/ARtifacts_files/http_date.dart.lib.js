define(['dart_sdk', 'packages/http_parser/src/utils.dart', 'packages/string_scanner/src/utils.dart'], (function load__packages__http_parser__src__http_date_dart(dart_sdk, packages__http_parser__src__utils$46dart, packages__string_scanner__src__utils$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils = packages__http_parser__src__utils$46dart.src__utils;
  const string_scanner = packages__string_scanner__src__utils$46dart.src__string_scanner;
  var http_date = Object.create(dart.library);
  var $_get = dartx._get;
  var $toString = dartx.toString;
  var $indexOf = dartx.indexOf;
  dart._checkModuleNullSafetyMode(false);
  var DateTimeL = () => (DateTimeL = dart.constFn(dart.legacy(core.DateTime)))();
  var VoidToDateTimeL = () => (VoidToDateTimeL = dart.constFn(dart.fnType(DateTimeL(), [])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], StringL());
    },
    get C1() {
      return C1 = dart.constList(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], StringL());
    }
  }, false);
  http_date.formatHttpDate = function formatHttpDate(date) {
    let t0;
    date = date.toUtc();
    let buffer = (t0 = new core.StringBuffer.new(), (() => {
      t0.write(http_date._weekdays[$_get](dart.notNull(date.weekday) - 1));
      t0.write(", ");
      t0.write(dart.notNull(date.day) <= 9 ? "0" : "");
      t0.write(dart.toString(date.day));
      t0.write(" ");
      t0.write(http_date._months[$_get](dart.notNull(date.month) - 1));
      t0.write(" ");
      t0.write(dart.toString(date.year));
      t0.write(dart.notNull(date.hour) <= 9 ? " 0" : " ");
      t0.write(dart.toString(date.hour));
      t0.write(dart.notNull(date.minute) <= 9 ? ":0" : ":");
      t0.write(dart.toString(date.minute));
      t0.write(dart.notNull(date.second) <= 9 ? ":0" : ":");
      t0.write(dart.toString(date.second));
      t0.write(" GMT");
      return t0;
    })());
    return dart.toString(buffer);
  };
  http_date.parseHttpDate = function parseHttpDate(date) {
    return utils.wrapFormatException(DateTimeL(), "HTTP date", date, dart.fn(() => {
      let scanner = new string_scanner.StringScanner.new(date);
      if (dart.test(scanner.scan(http_date._longWeekdayRegExp))) {
        scanner.expect(", ");
        let day = http_date._parseInt(scanner, 2);
        scanner.expect("-");
        let month = http_date._parseMonth(scanner);
        scanner.expect("-");
        let year = 1900 + dart.notNull(http_date._parseInt(scanner, 2));
        scanner.expect(" ");
        let time = http_date._parseTime(scanner);
        scanner.expect(" GMT");
        scanner.expectDone();
        return http_date._makeDateTime(year, month, day, time);
      }
      scanner.expect(http_date._shortWeekdayRegExp);
      if (dart.test(scanner.scan(", "))) {
        let day = http_date._parseInt(scanner, 2);
        scanner.expect(" ");
        let month = http_date._parseMonth(scanner);
        scanner.expect(" ");
        let year = http_date._parseInt(scanner, 4);
        scanner.expect(" ");
        let time = http_date._parseTime(scanner);
        scanner.expect(" GMT");
        scanner.expectDone();
        return http_date._makeDateTime(year, month, day, time);
      }
      scanner.expect(" ");
      let month = http_date._parseMonth(scanner);
      scanner.expect(" ");
      let day = dart.test(scanner.scan(" ")) ? http_date._parseInt(scanner, 1) : http_date._parseInt(scanner, 2);
      scanner.expect(" ");
      let time = http_date._parseTime(scanner);
      scanner.expect(" ");
      let year = http_date._parseInt(scanner, 4);
      scanner.expectDone();
      return http_date._makeDateTime(year, month, day, time);
    }, VoidToDateTimeL()));
  };
  http_date._parseMonth = function _parseMonth(scanner) {
    scanner.expect(http_date._monthRegExp);
    return dart.notNull(http_date._months[$indexOf](scanner.lastMatch._get(0))) + 1;
  };
  http_date._parseInt = function _parseInt(scanner, digits) {
    scanner.expect(http_date._digitRegExp);
    if (scanner.lastMatch._get(0).length !== digits) {
      scanner.error("expected a " + dart.str(digits) + "-digit number.");
    }
    return core.int.parse(scanner.lastMatch._get(0));
  };
  http_date._parseTime = function _parseTime(scanner) {
    let hours = http_date._parseInt(scanner, 2);
    if (dart.notNull(hours) >= 24) scanner.error("hours may not be greater than 24.");
    scanner.expect(":");
    let minutes = http_date._parseInt(scanner, 2);
    if (dart.notNull(minutes) >= 60) scanner.error("minutes may not be greater than 60.");
    scanner.expect(":");
    let seconds = http_date._parseInt(scanner, 2);
    if (dart.notNull(seconds) >= 60) scanner.error("seconds may not be greater than 60.");
    return new core.DateTime.new(1, 1, 1, hours, minutes, seconds);
  };
  http_date._makeDateTime = function _makeDateTime(year, month, day, time) {
    let dateTime = new core.DateTime.utc(year, month, day, time.hour, time.minute, time.second);
    if (dateTime.month != month) {
      dart.throw(new core.FormatException.new("invalid day '" + dart.str(day) + "' for month '" + dart.str(month) + "'."));
    }
    return dateTime;
  };
  var C0;
  var C1;
  dart.defineLazy(http_date, {
    /*http_date._weekdays*/get _weekdays() {
      return C0 || CT.C0;
    },
    /*http_date._months*/get _months() {
      return C1 || CT.C1;
    },
    /*http_date._shortWeekdayRegExp*/get _shortWeekdayRegExp() {
      return core.RegExp.new("Mon|Tue|Wed|Thu|Fri|Sat|Sun");
    },
    /*http_date._longWeekdayRegExp*/get _longWeekdayRegExp() {
      return core.RegExp.new("Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday");
    },
    /*http_date._monthRegExp*/get _monthRegExp() {
      return core.RegExp.new("Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec");
    },
    /*http_date._digitRegExp*/get _digitRegExp() {
      return core.RegExp.new("\\d+");
    }
  }, true);
  dart.trackLibraries("packages/http_parser/src/http_date.dart", {
    "package:http_parser/src/http_date.dart": http_date
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["http_date.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/http_parser/src/http_date.dart.lib.js"}');
  // Exports:
  return {
    src__http_date: http_date
  };
}));

//# sourceMappingURL=http_date.dart.lib.js.map
