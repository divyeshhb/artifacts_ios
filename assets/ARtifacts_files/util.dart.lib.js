define(['dart_sdk'], (function load__packages__qr__src__util_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var util = Object.create(dart.library);
  var $leftShift = dartx['<<'];
  var $rightShift = dartx['>>'];
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var ListLOfintL = () => (ListLOfintL = dart.constFn(dart.legacy(ListOfintL())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], intL());
    },
    get C2() {
      return C2 = dart.constList([6, 18], intL());
    },
    get C3() {
      return C3 = dart.constList([6, 22], intL());
    },
    get C4() {
      return C4 = dart.constList([6, 26], intL());
    },
    get C5() {
      return C5 = dart.constList([6, 30], intL());
    },
    get C6() {
      return C6 = dart.constList([6, 34], intL());
    },
    get C7() {
      return C7 = dart.constList([6, 22, 38], intL());
    },
    get C8() {
      return C8 = dart.constList([6, 24, 42], intL());
    },
    get C9() {
      return C9 = dart.constList([6, 26, 46], intL());
    },
    get C10() {
      return C10 = dart.constList([6, 28, 50], intL());
    },
    get C11() {
      return C11 = dart.constList([6, 30, 54], intL());
    },
    get C12() {
      return C12 = dart.constList([6, 32, 58], intL());
    },
    get C13() {
      return C13 = dart.constList([6, 34, 62], intL());
    },
    get C14() {
      return C14 = dart.constList([6, 26, 46, 66], intL());
    },
    get C15() {
      return C15 = dart.constList([6, 26, 48, 70], intL());
    },
    get C16() {
      return C16 = dart.constList([6, 26, 50, 74], intL());
    },
    get C17() {
      return C17 = dart.constList([6, 30, 54, 78], intL());
    },
    get C18() {
      return C18 = dart.constList([6, 30, 56, 82], intL());
    },
    get C19() {
      return C19 = dart.constList([6, 30, 58, 86], intL());
    },
    get C20() {
      return C20 = dart.constList([6, 34, 62, 90], intL());
    },
    get C21() {
      return C21 = dart.constList([6, 28, 50, 72, 94], intL());
    },
    get C22() {
      return C22 = dart.constList([6, 26, 50, 74, 98], intL());
    },
    get C23() {
      return C23 = dart.constList([6, 30, 54, 78, 102], intL());
    },
    get C24() {
      return C24 = dart.constList([6, 28, 54, 80, 106], intL());
    },
    get C25() {
      return C25 = dart.constList([6, 32, 58, 84, 110], intL());
    },
    get C26() {
      return C26 = dart.constList([6, 30, 58, 86, 114], intL());
    },
    get C27() {
      return C27 = dart.constList([6, 34, 62, 90, 118], intL());
    },
    get C28() {
      return C28 = dart.constList([6, 26, 50, 74, 98, 122], intL());
    },
    get C29() {
      return C29 = dart.constList([6, 30, 54, 78, 102, 126], intL());
    },
    get C30() {
      return C30 = dart.constList([6, 26, 52, 78, 104, 130], intL());
    },
    get C31() {
      return C31 = dart.constList([6, 30, 56, 82, 108, 134], intL());
    },
    get C32() {
      return C32 = dart.constList([6, 34, 60, 86, 112, 138], intL());
    },
    get C33() {
      return C33 = dart.constList([6, 30, 58, 86, 114, 142], intL());
    },
    get C34() {
      return C34 = dart.constList([6, 34, 62, 90, 118, 146], intL());
    },
    get C35() {
      return C35 = dart.constList([6, 30, 54, 78, 102, 126, 150], intL());
    },
    get C36() {
      return C36 = dart.constList([6, 24, 50, 76, 102, 128, 154], intL());
    },
    get C37() {
      return C37 = dart.constList([6, 28, 54, 80, 106, 132, 158], intL());
    },
    get C38() {
      return C38 = dart.constList([6, 32, 58, 84, 110, 136, 162], intL());
    },
    get C39() {
      return C39 = dart.constList([6, 26, 54, 82, 110, 138, 166], intL());
    },
    get C40() {
      return C40 = dart.constList([6, 30, 58, 86, 114, 142, 170], intL());
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40], ListLOfintL());
    }
  }, false);
  util.bchTypeInfo = function bchTypeInfo(data) {
    let d = dart.notNull(data) << 10 >>> 0;
    while (dart.notNull(util._bchDigit(d)) - dart.notNull(util._bchDigit(1335)) >= 0) {
      d = (d ^ (1335)[$leftShift](dart.notNull(util._bchDigit(d)) - dart.notNull(util._bchDigit(1335)))) >>> 0;
    }
    return ((dart.notNull(data) << 10 | d) ^ 21522) >>> 0;
  };
  util.bchTypeNumber = function bchTypeNumber(data) {
    let d = dart.notNull(data) << 12 >>> 0;
    while (dart.notNull(util._bchDigit(d)) - dart.notNull(util._bchDigit(7973)) >= 0) {
      d = (d ^ (7973)[$leftShift](dart.notNull(util._bchDigit(d)) - dart.notNull(util._bchDigit(7973)))) >>> 0;
    }
    return (dart.notNull(data) << 12 | d) >>> 0;
  };
  util._bchDigit = function _bchDigit(data) {
    let digit = 0;
    while (data !== 0) {
      digit = digit + 1;
      data = data[$rightShift](1);
    }
    return digit;
  };
  util.patternPosition = function patternPosition(typeNumber) {
    return util._patternPositionTable[$_get](dart.notNull(typeNumber) - 1);
  };
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  var C12;
  var C13;
  var C14;
  var C15;
  var C16;
  var C17;
  var C18;
  var C19;
  var C20;
  var C21;
  var C22;
  var C23;
  var C24;
  var C25;
  var C26;
  var C27;
  var C28;
  var C29;
  var C30;
  var C31;
  var C32;
  var C33;
  var C34;
  var C35;
  var C36;
  var C37;
  var C38;
  var C39;
  var C40;
  var C0;
  dart.defineLazy(util, {
    /*util._patternPositionTable*/get _patternPositionTable() {
      return C0 || CT.C0;
    },
    /*util._g15*/get _g15() {
      return 1335;
    },
    /*util._g18*/get _g18() {
      return 7973;
    },
    /*util._g15Mask*/get _g15Mask() {
      return 21522;
    }
  }, true);
  dart.trackLibraries("packages/qr/src/util.dart", {
    "package:qr/src/util.dart": util
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["util.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0CAuDoB;AACd,YAAS,aAAL,IAAI,KAAI;AAChB,WAAoB,AAAkB,aAA/B,eAAU,CAAC,kBAAI,yBAAmB;AACM,MAA7C,IAAE,CAAF,CAAC,GAAS,mBAAiB,aAAb,eAAU,CAAC,kBAAI;;AAE/B,UAA0B,GAAZ,AAAO,aAAZ,IAAI,KAAI,KAAM,CAAC;EAC1B;8CAEsB;AAChB,YAAS,aAAL,IAAI,KAAI;AAChB,WAAoB,AAAkB,aAA/B,eAAU,CAAC,kBAAI,yBAAmB;AACM,MAA7C,IAAE,CAAF,CAAC,GAAS,mBAAiB,aAAb,eAAU,CAAC,kBAAI;;AAE/B,UAAoB,EAAP,aAAL,IAAI,KAAI,KAAM,CAAC;EACzB;sCAEkB;AACZ,gBAAQ;AAEZ,WAAO,IAAI,KAAI;AACN,MAAP,QAAA,AAAK,KAAA;AACK,MAAV,OAAA,AAAK,IAAD,cAAK;;AAGX,UAAO,MAAK;EACd;kDAE8B;AAC1B,UAAA,AAAqB,mCAAY,aAAX,UAAU,IAAG;EAAE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAnFnB,0BAAqB;;;MA2CjC,SAAI;;;MAEJ,SAAI;;;MAQR,aAAQ","file":"../../../../../../../../../../../packages/qr/src/util.dart.lib.js"}');
  // Exports:
  return {
    src__util: util
  };
}));

//# sourceMappingURL=util.dart.lib.js.map
