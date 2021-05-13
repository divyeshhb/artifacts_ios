define(['dart_sdk', 'packages/flutter/src/painting/alignment.dart'], (function load__packages__flutter__src__painting__fractional_offset_dart(dart_sdk, packages__flutter__src__painting__alignment$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  var fractional_offset = Object.create(dart.library);
  var $truncate = dartx.truncate;
  var $toDouble = dartx.toDouble;
  var $modulo = dartx['%'];
  var $toStringAsFixed = dartx.toStringAsFixed;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/fractional_offset.dart";
  var L1 = "package:flutter/src/painting/fractional_offset.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: -1,
        [Alignment_x]: -1
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: -1,
        [Alignment_x]: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: -1,
        [Alignment_x]: 1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: -1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 1
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: 1,
        [Alignment_x]: -1
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: 1,
        [Alignment_x]: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: 1,
        [Alignment_x]: 1
      });
    }
  }, false);
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  fractional_offset.FractionalOffset = class FractionalOffset extends alignment.Alignment {
    static fromOffsetAndSize(offset, size) {
      if (offset == null) dart.nullFailed(L0, 68, 53, "offset");
      if (size == null) dart.nullFailed(L0, 68, 66, "size");
      if (!(size != null)) dart.assertFailed(null, L0, 69, 12, "size != null");
      if (!(offset != null)) dart.assertFailed(null, L0, 70, 12, "offset != null");
      return new fractional_offset.FractionalOffset.new(dart.notNull(offset.dx) / dart.notNull(size.width), dart.notNull(offset.dy) / dart.notNull(size.height));
    }
    static fromOffsetAndRect(offset, rect) {
      if (offset == null) dart.nullFailed(L0, 86, 53, "offset");
      if (rect == null) dart.nullFailed(L0, 86, 66, "rect");
      return fractional_offset.FractionalOffset.fromOffsetAndSize(offset['-'](rect.topLeft), rect.size);
    }
    get dx() {
      return (dart.notNull(this.x) + 1.0) / 2.0;
    }
    get dy() {
      return (dart.notNull(this.y) + 1.0) / 2.0;
    }
    ['-'](other) {
      if (other == null) dart.nullFailed(L0, 138, 34, "other");
      if (!fractional_offset.FractionalOffset.is(other)) return super['-'](other);
      return new fractional_offset.FractionalOffset.new(dart.notNull(this.dx) - dart.notNull(other.dx), dart.notNull(this.dy) - dart.notNull(other.dy));
    }
    ['+'](other) {
      if (other == null) dart.nullFailed(L0, 145, 34, "other");
      if (!fractional_offset.FractionalOffset.is(other)) return super['+'](other);
      return new fractional_offset.FractionalOffset.new(dart.notNull(this.dx) + dart.notNull(other.dx), dart.notNull(this.dy) + dart.notNull(other.dy));
    }
    _negate() {
      return new fractional_offset.FractionalOffset.new(-dart.notNull(this.dx), -dart.notNull(this.dy));
    }
    ['*'](other) {
      if (other == null) dart.nullFailed(L0, 157, 38, "other");
      return new fractional_offset.FractionalOffset.new(dart.notNull(this.dx) * dart.notNull(other), dart.notNull(this.dy) * dart.notNull(other));
    }
    ['/'](other) {
      if (other == null) dart.nullFailed(L0, 162, 38, "other");
      return new fractional_offset.FractionalOffset.new(dart.notNull(this.dx) / dart.notNull(other), dart.notNull(this.dy) / dart.notNull(other));
    }
    ['~/'](other) {
      if (other == null) dart.nullFailed(L0, 167, 39, "other");
      return new fractional_offset.FractionalOffset.new((dart.notNull(this.dx) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.dy) / dart.notNull(other))[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      if (other == null) dart.nullFailed(L0, 172, 38, "other");
      return new fractional_offset.FractionalOffset.new(this.dx[$modulo](other), this.dy[$modulo](other));
    }
    static lerp(a, b, t) {
      if (t == null) dart.nullFailed(L0, 181, 82, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 182, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return new fractional_offset.FractionalOffset.new(dart.nullCheck(ui.lerpDouble(0.5, dart.nullCheck(b).dx, t)), dart.nullCheck(ui.lerpDouble(0.5, b.dy, t)));
      if (b == null) return new fractional_offset.FractionalOffset.new(dart.nullCheck(ui.lerpDouble(a.dx, 0.5, t)), dart.nullCheck(ui.lerpDouble(a.dy, 0.5, t)));
      return new fractional_offset.FractionalOffset.new(dart.nullCheck(ui.lerpDouble(a.dx, b.dx, t)), dart.nullCheck(ui.lerpDouble(a.dy, b.dy, t)));
    }
    toString() {
      return "FractionalOffset(" + this.dx[$toStringAsFixed](1) + ", " + this.dy[$toStringAsFixed](1) + ")";
    }
  };
  (fractional_offset.FractionalOffset.new = function(dx, dy) {
    if (dx == null) dart.nullFailed(L0, 59, 33, "dx");
    if (dy == null) dart.nullFailed(L0, 59, 44, "dy");
    if (!(dx != null)) dart.assertFailed(null, L0, 60, 14, "dx != null");
    if (!(dy != null)) dart.assertFailed(null, L0, 61, 14, "dy != null");
    fractional_offset.FractionalOffset.__proto__.new.call(this, dart.notNull(dx) * 2.0 - 1.0, dart.notNull(dy) * 2.0 - 1.0);
    ;
  }).prototype = fractional_offset.FractionalOffset.prototype;
  dart.addTypeTests(fractional_offset.FractionalOffset);
  dart.addTypeCaches(fractional_offset.FractionalOffset);
  dart.setMethodSignature(fractional_offset.FractionalOffset, () => ({
    __proto__: dart.getMethods(fractional_offset.FractionalOffset.__proto__),
    _negate: dart.fnType(fractional_offset.FractionalOffset, []),
    '*': dart.fnType(fractional_offset.FractionalOffset, [core.double]),
    '/': dart.fnType(fractional_offset.FractionalOffset, [core.double]),
    '~/': dart.fnType(fractional_offset.FractionalOffset, [core.double]),
    '%': dart.fnType(fractional_offset.FractionalOffset, [core.double])
  }));
  dart.setGetterSignature(fractional_offset.FractionalOffset, () => ({
    __proto__: dart.getGetters(fractional_offset.FractionalOffset.__proto__),
    dx: core.double,
    dy: core.double
  }));
  dart.setLibraryUri(fractional_offset.FractionalOffset, L1);
  dart.defineExtensionMethods(fractional_offset.FractionalOffset, ['toString']);
  dart.defineLazy(fractional_offset.FractionalOffset, {
    /*fractional_offset.FractionalOffset.topLeft*/get topLeft() {
      return C0 || CT.C0;
    },
    /*fractional_offset.FractionalOffset.topCenter*/get topCenter() {
      return C1 || CT.C1;
    },
    /*fractional_offset.FractionalOffset.topRight*/get topRight() {
      return C2 || CT.C2;
    },
    /*fractional_offset.FractionalOffset.centerLeft*/get centerLeft() {
      return C3 || CT.C3;
    },
    /*fractional_offset.FractionalOffset.center*/get center() {
      return C4 || CT.C4;
    },
    /*fractional_offset.FractionalOffset.centerRight*/get centerRight() {
      return C5 || CT.C5;
    },
    /*fractional_offset.FractionalOffset.bottomLeft*/get bottomLeft() {
      return C6 || CT.C6;
    },
    /*fractional_offset.FractionalOffset.bottomCenter*/get bottomCenter() {
      return C7 || CT.C7;
    },
    /*fractional_offset.FractionalOffset.bottomRight*/get bottomRight() {
      return C8 || CT.C8;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/painting/fractional_offset.dart", {
    "package:flutter/src/painting/fractional_offset.dart": fractional_offset
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fractional_offset.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6BAmEoD,QAAa;UAAb;UAAa;AAC7D,YAAO,AAAK,IAAD,IAAI;AACf,YAAO,AAAO,MAAD,IAAI;AACjB,YAAO,4CACK,aAAV,AAAO,MAAD,oBAAM,AAAK,IAAD,SACN,aAAV,AAAO,MAAD,oBAAM,AAAK,IAAD;IAEpB;6BAWkD,QAAa;UAAb;UAAa;AAC7D,YAAwB,sDACtB,AAAO,MAAD,MAAG,AAAK,IAAD,WACb,AAAK,IAAD;IAER;;AASiB,YAAU,EAAP,aAAF,UAAI,OAAO;IAAG;;AAQf,YAAU,EAAP,aAAF,UAAI,OAAO;IAAG;;UA8BD;AAC7B,WAAU,sCAAN,KAAK,GACP,MAAa,YAAE,KAAK;AACtB,YAAO,4CAAoB,aAAH,wBAAK,AAAM,KAAD,MAAQ,aAAH,wBAAK,AAAM,KAAD;IACnD;;UAG+B;AAC7B,WAAU,sCAAN,KAAK,GACP,MAAa,YAAE,KAAK;AACtB,YAAO,4CAAoB,aAAH,wBAAK,AAAM,KAAD,MAAQ,aAAH,wBAAK,AAAM,KAAD;IACnD;;AAIE,YAAO,4CAAiB,cAAC,UAAI,cAAC;IAChC;;UAGmC;AACjC,YAAO,4CAAoB,aAAH,wBAAK,KAAK,GAAK,aAAH,wBAAK,KAAK;IAChD;;UAGmC;AACjC,YAAO,4CAAoB,aAAH,wBAAK,KAAK,GAAK,aAAH,wBAAK,KAAK;IAChD;;UAGoC;AAClC,YAAO,4CAAqB,AAAU,cAAb,wBAAM,KAAK,8BAAkB,AAAU,cAAb,wBAAM,KAAK;IAChE;;UAGmC;AACjC,YAAO,4CAAiB,AAAG,iBAAE,KAAK,GAAE,AAAG,iBAAE,KAAK;IAChD;gBAOgD,GAAqB;UAAU;AAC7E,YAAO,AAAE,CAAD,IAAI;AACZ,UAAI,AAAE,CAAD,IAAI,QAAQ,AAAE,CAAD,IAAI,MACpB,MAAO;AACT,UAAI,AAAE,CAAD,IAAI,MACP,MAAO,4CAA6C,eAA5B,cAAc,KAAM,AAAE,eAAH,CAAC,MAAM,CAAC,IAA+B,eAA3B,cAAc,KAAK,AAAE,CAAD,KAAK,CAAC;AACnF,UAAI,AAAE,CAAD,IAAI,MACP,MAAO,4CAA4C,eAA3B,cAAc,AAAE,CAAD,KAAK,KAAK,CAAC,IAA+B,eAA3B,cAAc,AAAE,CAAD,KAAK,KAAK,CAAC;AAClF,YAAO,4CAA6C,eAA5B,cAAc,AAAE,CAAD,KAAK,AAAE,CAAD,KAAK,CAAC,IAAgC,eAA5B,cAAc,AAAE,CAAD,KAAK,AAAE,CAAD,KAAK,CAAC;IACpF;;AAIE,YAAO,uBAAoB,AAAG,0BAAgB,KAAG,OACtB,AAAG,0BAAgB,KAAG;IACnD;;qDAzI8B,IAAW;QAAX;QAAW;UAC9B,AAAG,EAAD,IAAI;UACN,AAAG,EAAD,IAAI;AACb,gEAAS,AAAM,aAAT,EAAE,IAAG,MAAM,KAAQ,AAAM,aAAT,EAAE,IAAG,MAAM;;EAAI;;;;;;;;;;;;;;;;;;;MAiDX,0CAAO;;;MAGP,4CAAS;;;MAGT,2CAAQ;;;MAGR,6CAAU;;;MAGV,yCAAM;;;MAGN,8CAAW;;;MAGX,6CAAU;;;MAGV,+CAAY;;;MAGZ,8CAAW","file":"../../../../../../../../../../packages/flutter/src/painting/fractional_offset.dart.lib.js"}');
  // Exports:
  return {
    src__painting__fractional_offset: fractional_offset
  };
}));

//# sourceMappingURL=fractional_offset.dart.lib.js.map
