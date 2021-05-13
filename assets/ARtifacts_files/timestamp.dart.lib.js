define(['dart_sdk'], (function load__packages__cloud_firestore_platform_interface__src__timestamp_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var timestamp = Object.create(dart.library);
  var $truncate = dartx.truncate;
  var $floor = dartx.floor;
  var $compareTo = dartx.compareTo;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  var TimestampL = () => (TimestampL = dart.constFn(dart.legacy(timestamp.Timestamp)))();
  const CT = Object.create(null);
  var L0 = "package:cloud_firestore_platform_interface/src/timestamp.dart";
  var _seconds$ = dart.privateName(timestamp, "_seconds");
  var _nanoseconds$ = dart.privateName(timestamp, "_nanoseconds");
  timestamp.Timestamp = class Timestamp extends core.Object {
    static fromMillisecondsSinceEpoch(milliseconds) {
      let seconds = (dart.notNull(milliseconds) / 1000)[$truncate]()[$floor]();
      let nanoseconds = (dart.notNull(milliseconds) - seconds * 1000) * 1000000;
      return new timestamp.Timestamp.new(seconds, nanoseconds);
    }
    static fromMicrosecondsSinceEpoch(microseconds) {
      let seconds = (dart.notNull(microseconds) / 1000000)[$truncate]()[$floor]();
      let nanoseconds = (dart.notNull(microseconds) - seconds * 1000000) * 1000;
      return new timestamp.Timestamp.new(seconds, nanoseconds);
    }
    static fromDate(date) {
      return timestamp.Timestamp.fromMicrosecondsSinceEpoch(date.microsecondsSinceEpoch);
    }
    static now() {
      return timestamp.Timestamp.fromMicrosecondsSinceEpoch(new core.DateTime.now().microsecondsSinceEpoch);
    }
    get seconds() {
      return this[_seconds$];
    }
    get nanoseconds() {
      return this[_nanoseconds$];
    }
    get millisecondsSinceEpoch() {
      return dart.notNull(this.seconds) * 1000 + (dart.notNull(this.nanoseconds) / 1000000)[$truncate]();
    }
    get microsecondsSinceEpoch() {
      return dart.notNull(this.seconds) * 1000000 + (dart.notNull(this.nanoseconds) / 1000)[$truncate]();
    }
    toDate() {
      return new core.DateTime.fromMicrosecondsSinceEpoch(this.microsecondsSinceEpoch);
    }
    get hashCode() {
      return ui.hashValues(this.seconds, this.nanoseconds);
    }
    _equals(o) {
      if (o == null) return false;
      return TimestampL().is(o) && o.seconds == this.seconds && o.nanoseconds == this.nanoseconds;
    }
    compareTo(other) {
      TimestampL().as(other);
      if (this.seconds == other.seconds) {
        return this.nanoseconds[$compareTo](other.nanoseconds);
      }
      return this.seconds[$compareTo](other.seconds);
    }
    toString() {
      return "Timestamp(seconds=" + dart.str(this.seconds) + ", nanoseconds=" + dart.str(this.nanoseconds) + ")";
    }
    static _validateRange(seconds, nanoseconds) {
      timestamp._check(dart.notNull(nanoseconds) >= 0, "nanoseconds", nanoseconds);
      timestamp._check(dart.notNull(nanoseconds) < 1000000000, "nanoseconds", nanoseconds);
      timestamp._check(dart.notNull(seconds) >= -62135596800.0, "seconds", seconds);
      timestamp._check(dart.notNull(seconds) < 253402300800.0, "seconds", seconds);
    }
  };
  (timestamp.Timestamp.new = function(_seconds, _nanoseconds) {
    this[_seconds$] = _seconds;
    this[_nanoseconds$] = _nanoseconds;
    timestamp.Timestamp._validateRange(this[_seconds$], this[_nanoseconds$]);
  }).prototype = timestamp.Timestamp.prototype;
  dart.addTypeTests(timestamp.Timestamp);
  dart.addTypeCaches(timestamp.Timestamp);
  timestamp.Timestamp[dart.implements] = () => [core.Comparable$(dart.legacy(timestamp.Timestamp))];
  dart.setMethodSignature(timestamp.Timestamp, () => ({
    __proto__: dart.getMethods(timestamp.Timestamp.__proto__),
    toDate: dart.fnType(dart.legacy(core.DateTime), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    compareTo: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)]),
    [$compareTo]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(timestamp.Timestamp, () => ({
    __proto__: dart.getGetters(timestamp.Timestamp.__proto__),
    seconds: dart.legacy(core.int),
    nanoseconds: dart.legacy(core.int),
    millisecondsSinceEpoch: dart.legacy(core.int),
    microsecondsSinceEpoch: dart.legacy(core.int),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(timestamp.Timestamp, L0);
  dart.setFieldSignature(timestamp.Timestamp, () => ({
    __proto__: dart.getFields(timestamp.Timestamp.__proto__),
    [_seconds$]: dart.finalFieldType(dart.legacy(core.int)),
    [_nanoseconds$]: dart.finalFieldType(dart.legacy(core.int))
  }));
  dart.defineExtensionMethods(timestamp.Timestamp, ['_equals', 'compareTo', 'toString']);
  dart.defineExtensionAccessors(timestamp.Timestamp, ['hashCode']);
  dart.defineLazy(timestamp.Timestamp, {
    /*timestamp.Timestamp._kStartOfTime*/get _kStartOfTime() {
      return -62135596800.0;
    },
    /*timestamp.Timestamp._kEndOfTime*/get _kEndOfTime() {
      return 253402300800.0;
    }
  }, true);
  timestamp._check = function _check(expr, name, value) {
    if (!dart.test(expr)) {
      dart.throw(new core.ArgumentError.new("Timestamp " + dart.str(name) + " out of range: " + dart.str(value)));
    }
  };
  dart.defineLazy(timestamp, {
    /*timestamp._kThousand*/get _kThousand() {
      return 1000;
    },
    /*timestamp._kMillion*/get _kMillion() {
      return 1000000;
    },
    /*timestamp._kBillion*/get _kBillion() {
      return 1000000000;
    }
  }, true);
  dart.trackLibraries("packages/cloud_firestore_platform_interface/src/timestamp.dart", {
    "package:cloud_firestore_platform_interface/src/timestamp.dart": timestamp
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["timestamp.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;sCAgCmD;AACrC,oBAAwB,AAAe,cAA5B,YAAY;AACvB,wBAAoD,CAAxB,aAAb,YAAY,IAAG,AAAQ,OAAD;AAC/C,YAAO,6BAAU,OAAO,EAAE,WAAW;IACvC;sCAGiD;AACrC,oBAAwB,AAAc,cAA3B,YAAY;AACvB,wBAAmD,CAAvB,aAAb,YAAY,IAAG,AAAQ,OAAD;AAC/C,YAAO,6BAAU,OAAO,EAAE,WAAW;IACvC;oBAGoC;AAClC,YAAiB,gDAA2B,AAAK,IAAD;IAClD;;AAIE,YAAiB,gDACJ,AAAM;IACrB;;AASmB;IAAQ;;AAGJ;IAAY;;AAI/B,YAAS,AAAa,cAArB,uBAAmC,cAAZ;IAAyB;;AAIjD,YAAS,AAAY,cAApB,0BAAkC,cAAZ;IAA0B;;AAInD,YAAgB,8CAA2B;IAC7C;;AAGoB,2BAAW,cAAS;IAAY;;UAG3B;AACrB,YAAE,AAAqC,iBAAvC,CAAC,KAAiB,AAAE,AAAQ,CAAT,YAAY,gBAAW,AAAE,AAAY,CAAb,gBAAgB;IAAW;;sBAGlD;AACtB,UAAI,AAAQ,gBAAG,AAAM,KAAD;AAClB,cAAO,AAAY,8BAAU,AAAM,KAAD;;AAGpC,YAAO,AAAQ,0BAAU,AAAM,KAAD;IAChC;;AAIE,YAAO,AAAuD,iCAAnC,gBAAO,4BAAe,oBAAW;IAC9D;0BAE+B,SAAa;AACU,MAApD,iBAAmB,aAAZ,WAAW,KAAI,GAAG,eAAe,WAAW;AACQ,MAA3D,iBAAmB,aAAZ,WAAW,gBAAc,eAAe,WAAW;AACN,MAApD,iBAAe,aAAR,OAAO,qBAAmB,WAAW,OAAO;AACF,MAAjD,iBAAe,aAAR,OAAO,oBAAgB,WAAW,OAAO;IAClD;;sCAhFe,UAAe;IAAf;IAAe;AACU,IAAtC,mCAAe,iBAAU;EAC3B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA8BiB,iCAAa;;;MACb,+BAAW;;;;qCAnDb,MAAa,MAAU;AACtC,mBAAK,IAAI;AACoD,MAA3D,WAAM,2BAAc,AAAsC,wBAA1B,IAAI,iCAAgB,KAAK;;EAE7D;;MARU,oBAAU;;;MACV,mBAAS;;;MACT,mBAAS","file":"../../../../../../../../../../../packages/cloud_firestore_platform_interface/src/timestamp.dart.lib.js"}');
  // Exports:
  return {
    src__timestamp: timestamp
  };
}));

//# sourceMappingURL=timestamp.dart.lib.js.map
