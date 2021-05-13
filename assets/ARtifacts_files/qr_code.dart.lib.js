define(['dart_sdk', 'packages/qr/src/byte.dart', 'packages/qr/src/error_correct_level.dart', 'packages/qr/src/rs_block.dart', 'packages/qr/src/bit_buffer.dart', 'packages/qr/src/util.dart', 'packages/qr/src/input_too_long_exception.dart', 'packages/qr/src/polynomial.dart', 'packages/qr/src/math.dart'], (function load__packages__qr__src__qr_code_dart(dart_sdk, packages__qr__src__byte$46dart, packages__qr__src__error_correct_level$46dart, packages__qr__src__rs_block$46dart, packages__qr__src__bit_buffer$46dart, packages__qr__src__util$46dart, packages__qr__src__input_too_long_exception$46dart, packages__qr__src__polynomial$46dart, packages__qr__src__math$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const typed_data = dart_sdk.typed_data;
  const math = dart_sdk.math;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const byte = packages__qr__src__byte$46dart.src__byte;
  const error_correct_level = packages__qr__src__error_correct_level$46dart.src__error_correct_level;
  const rs_block = packages__qr__src__rs_block$46dart.src__rs_block;
  const bit_buffer = packages__qr__src__bit_buffer$46dart.src__bit_buffer;
  const util = packages__qr__src__util$46dart.src__util;
  const input_too_long_exception = packages__qr__src__input_too_long_exception$46dart.src__input_too_long_exception;
  const polynomial = packages__qr__src__polynomial$46dart.src__polynomial;
  const math$ = packages__qr__src__math$46dart.src__math;
  var qr_code = Object.create(dart.library);
  var $add = dartx.add;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $isEven = dartx.isEven;
  var $rightShift = dartx['>>'];
  var $truncate = dartx.truncate;
  var $modulo = dartx['%'];
  var $abs = dartx.abs;
  dart._checkModuleNullSafetyMode(false);
  var QrByteL = () => (QrByteL = dart.constFn(dart.legacy(byte.QrByte)))();
  var JSArrayOfQrByteL = () => (JSArrayOfQrByteL = dart.constFn(_interceptors.JSArray$(QrByteL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var ListOfboolL = () => (ListOfboolL = dart.constFn(core.List$(boolL())))();
  var ListLOfboolL = () => (ListLOfboolL = dart.constFn(dart.legacy(ListOfboolL())))();
  var JSArrayOfListLOfboolL = () => (JSArrayOfListLOfboolL = dart.constFn(_interceptors.JSArray$(ListLOfboolL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var ListLOfintL = () => (ListLOfintL = dart.constFn(dart.legacy(ListOfintL())))();
  var ListOfListLOfintL = () => (ListOfListLOfintL = dart.constFn(core.List$(ListLOfintL())))();
  var JSArrayOfintL = () => (JSArrayOfintL = dart.constFn(_interceptors.JSArray$(intL())))();
  const CT = Object.create(null);
  var L0 = "package:qr/src/qr_code.dart";
  var _dataCache = dart.privateName(qr_code, "_dataCache");
  var _dataList = dart.privateName(qr_code, "_dataList");
  var _modules = dart.privateName(qr_code, "_modules");
  var _addToList = dart.privateName(qr_code, "_addToList");
  var _getBestMaskPattern = dart.privateName(qr_code, "_getBestMaskPattern");
  var _makeImpl = dart.privateName(qr_code, "_makeImpl");
  var _setupPositionProbePattern = dart.privateName(qr_code, "_setupPositionProbePattern");
  var _setupTimingPattern = dart.privateName(qr_code, "_setupTimingPattern");
  var _setupPositionAdjustPattern = dart.privateName(qr_code, "_setupPositionAdjustPattern");
  var _setupTypeNumber = dart.privateName(qr_code, "_setupTypeNumber");
  var _setupTypeInfo = dart.privateName(qr_code, "_setupTypeInfo");
  var _mapData = dart.privateName(qr_code, "_mapData");
  var typeNumber$ = dart.privateName(qr_code, "QrCode.typeNumber");
  var errorCorrectLevel$ = dart.privateName(qr_code, "QrCode.errorCorrectLevel");
  var moduleCount = dart.privateName(qr_code, "QrCode.moduleCount");
  qr_code.QrCode = class QrCode extends core.Object {
    get typeNumber() {
      return this[typeNumber$];
    }
    set typeNumber(value) {
      super.typeNumber = value;
    }
    get errorCorrectLevel() {
      return this[errorCorrectLevel$];
    }
    set errorCorrectLevel(value) {
      super.errorCorrectLevel = value;
    }
    get moduleCount() {
      return this[moduleCount];
    }
    set moduleCount(value) {
      super.moduleCount = value;
    }
    static fromData(opts) {
      let t0;
      let data = opts && 'data' in opts ? opts.data : null;
      let errorCorrectLevel = opts && 'errorCorrectLevel' in opts ? opts.errorCorrectLevel : null;
      let typeNumber = qr_code.QrCode._calculateTypeNumberFromData(errorCorrectLevel, JSArrayOfQrByteL().of([byte.QrByte.new(data)]));
      t0 = new qr_code.QrCode.new(typeNumber, errorCorrectLevel);
      return (() => {
        t0.addData(data);
        return t0;
      })();
    }
    static fromUint8List(opts) {
      let t0;
      let data = opts && 'data' in opts ? opts.data : null;
      let errorCorrectLevel = opts && 'errorCorrectLevel' in opts ? opts.errorCorrectLevel : null;
      let typeNumber = qr_code.QrCode._calculateTypeNumberFromData(errorCorrectLevel, JSArrayOfQrByteL().of([new byte.QrByte.fromUint8List(data)]));
      t0 = new qr_code.QrCode.new(typeNumber, errorCorrectLevel);
      return (() => {
        t0[_addToList](new byte.QrByte.fromUint8List(data));
        return t0;
      })();
    }
    static _calculateTypeNumberFromData(errorCorrectLevel, dataList) {
      let t1;
      let typeNumber = null;
      for (let t0 = typeNumber = 1; dart.notNull(typeNumber) < 40; typeNumber = dart.notNull(typeNumber) + 1) {
        let rsBlocks = rs_block.QrRsBlock.getRSBlocks(typeNumber, errorCorrectLevel);
        let buffer = new bit_buffer.QrBitBuffer.new();
        let totalDataCount = 0;
        for (let i = 0; i < dart.notNull(rsBlocks[$length]); i = i + 1) {
          totalDataCount = totalDataCount + dart.notNull(rsBlocks[$_get](i).dataCount);
        }
        for (let i = 0; i < dart.notNull(dataList[$length]); i = i + 1) {
          let data = dataList[$_get](i);
          t1 = buffer;
          (() => {
            t1.put(data.mode, 4);
            t1.put(data.length, qr_code._lengthInBits(data.mode, typeNumber));
            return t1;
          })();
          data.write(buffer);
        }
        if (dart.notNull(buffer.length) <= totalDataCount * 8) break;
      }
      return typeNumber;
    }
    isDark(row, col) {
      if (dart.notNull(row) < 0 || dart.notNull(this.moduleCount) <= dart.notNull(row) || dart.notNull(col) < 0 || dart.notNull(this.moduleCount) <= dart.notNull(col)) {
        dart.throw(new core.ArgumentError.new(dart.str(row) + " , " + dart.str(col)));
      }
      return this[_modules][$_get](row)[$_get](col);
    }
    addData(data) {
      return this[_addToList](byte.QrByte.new(data));
    }
    addByteData(data) {
      return this[_addToList](byte.QrByte.fromByteData(data));
    }
    [_addToList](data) {
      this[_dataList][$add](data);
      this[_dataCache] = null;
    }
    make() {
      this[_makeImpl](false, this[_getBestMaskPattern]());
    }
    [_setupPositionProbePattern](row, col) {
      for (let r = -1; r <= 7; r = r + 1) {
        if (dart.notNull(row) + r <= -1 || dart.notNull(this.moduleCount) <= dart.notNull(row) + r) continue;
        for (let c = -1; c <= 7; c = c + 1) {
          if (dart.notNull(col) + c <= -1 || dart.notNull(this.moduleCount) <= dart.notNull(col) + c) continue;
          if (0 <= r && r <= 6 && (c === 0 || c === 6) || 0 <= c && c <= 6 && (r === 0 || r === 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
            this[_modules][$_get](dart.notNull(row) + r)[$_set](dart.notNull(col) + c, true);
          } else {
            this[_modules][$_get](dart.notNull(row) + r)[$_set](dart.notNull(col) + c, false);
          }
        }
      }
    }
    [_getBestMaskPattern]() {
      let minLostPoint = 0.0;
      let pattern = 0;
      for (let i = 0; i < 8; i = i + 1) {
        this[_makeImpl](true, i);
        let lostPoint = qr_code._lostPoint(this);
        if (i === 0 || dart.notNull(minLostPoint) > dart.notNull(lostPoint)) {
          minLostPoint = lostPoint;
          pattern = i;
        }
      }
      return pattern;
    }
    [_setupTimingPattern]() {
      for (let r = 8; r < dart.notNull(this.moduleCount) - 8; r = r + 1) {
        if (this[_modules][$_get](r)[$_get](6) != null) {
          continue;
        }
        this[_modules][$_get](r)[$_set](6, r[$isEven]);
      }
      for (let c = 8; c < dart.notNull(this.moduleCount) - 8; c = c + 1) {
        if (this[_modules][$_get](6)[$_get](c) != null) {
          continue;
        }
        this[_modules][$_get](6)[$_set](c, c[$isEven]);
      }
    }
    [_setupPositionAdjustPattern]() {
      let pos = util.patternPosition(this.typeNumber);
      for (let i = 0; i < dart.notNull(pos[$length]); i = i + 1) {
        for (let j = 0; j < dart.notNull(pos[$length]); j = j + 1) {
          let row = pos[$_get](i);
          let col = pos[$_get](j);
          if (this[_modules][$_get](row)[$_get](col) != null) {
            continue;
          }
          for (let r = -2; r <= 2; r = r + 1) {
            for (let c = -2; c <= 2; c = c + 1) {
              if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
                this[_modules][$_get](dart.notNull(row) + r)[$_set](dart.notNull(col) + c, true);
              } else {
                this[_modules][$_get](dart.notNull(row) + r)[$_set](dart.notNull(col) + c, false);
              }
            }
          }
        }
      }
    }
    [_setupTypeNumber](test) {
      let bits = util.bchTypeNumber(this.typeNumber);
      for (let i = 0; i < 18; i = i + 1) {
        let mod = !dart.test(test) && (bits[$rightShift](i) & 1) === 1;
        this[_modules][$_get]((i / 3)[$truncate]())[$_set](i[$modulo](3) + dart.notNull(this.moduleCount) - 8 - 3, mod);
      }
      for (let i = 0; i < 18; i = i + 1) {
        let mod = !dart.test(test) && (bits[$rightShift](i) & 1) === 1;
        this[_modules][$_get](i[$modulo](3) + dart.notNull(this.moduleCount) - 8 - 3)[$_set]((i / 3)[$truncate](), mod);
      }
    }
    [_setupTypeInfo](test, maskPattern) {
      let data = (dart.notNull(this.errorCorrectLevel) << 3 | dart.notNull(maskPattern)) >>> 0;
      let bits = util.bchTypeInfo(data);
      let i = null;
      let mod = null;
      for (let t1 = i = 0; dart.notNull(i) < 15; i = dart.notNull(i) + 1) {
        mod = !dart.test(test) && (bits[$rightShift](i) & 1) === 1;
        if (dart.notNull(i) < 6) {
          this[_modules][$_get](i)[$_set](8, mod);
        } else if (dart.notNull(i) < 8) {
          this[_modules][$_get](dart.notNull(i) + 1)[$_set](8, mod);
        } else {
          this[_modules][$_get](dart.notNull(this.moduleCount) - 15 + dart.notNull(i))[$_set](8, mod);
        }
      }
      for (let t2 = i = 0; dart.notNull(i) < 15; i = dart.notNull(i) + 1) {
        mod = !dart.test(test) && (bits[$rightShift](i) & 1) === 1;
        if (dart.notNull(i) < 8) {
          this[_modules][$_get](8)[$_set](dart.notNull(this.moduleCount) - dart.notNull(i) - 1, mod);
        } else if (dart.notNull(i) < 9) {
          this[_modules][$_get](8)[$_set](15 - dart.notNull(i) - 1 + 1, mod);
        } else {
          this[_modules][$_get](8)[$_set](15 - dart.notNull(i) - 1, mod);
        }
      }
      this[_modules][$_get](dart.notNull(this.moduleCount) - 8)[$_set](8, !dart.test(test));
    }
    [_mapData](data, maskPattern) {
      let inc = -1;
      let row = dart.notNull(this.moduleCount) - 1;
      let bitIndex = 7;
      let byteIndex = 0;
      for (let col = dart.notNull(this.moduleCount) - 1; col > 0; col = col - 2) {
        if (col === 6) col = col - 1;
        for (;;) {
          for (let c = 0; c < 2; c = c + 1) {
            if (this[_modules][$_get](row)[$_get](col - c) == null) {
              let dark = false;
              if (byteIndex < dart.notNull(data[$length])) {
                dark = (data[$_get](byteIndex)[$rightShift](bitIndex) & 1) === 1;
              }
              let mask = qr_code._mask(maskPattern, row, col - c);
              if (dart.test(mask)) {
                dark = !dark;
              }
              this[_modules][$_get](row)[$_set](col - c, dark);
              bitIndex = bitIndex - 1;
              if (bitIndex === -1) {
                byteIndex = byteIndex + 1;
                bitIndex = 7;
              }
            }
          }
          row = row + inc;
          if (row < 0 || dart.notNull(this.moduleCount) <= row) {
            row = row - inc;
            inc = -inc;
            break;
          }
        }
      }
    }
    [_makeImpl](test, maskPattern) {
      this[_setupPositionProbePattern](0, 0);
      this[_setupPositionProbePattern](dart.notNull(this.moduleCount) - 7, 0);
      this[_setupPositionProbePattern](0, dart.notNull(this.moduleCount) - 7);
      this[_setupPositionAdjustPattern]();
      this[_setupTimingPattern]();
      this[_setupTypeInfo](test, maskPattern);
      if (dart.notNull(this.typeNumber) >= 7) {
        this[_setupTypeNumber](test);
      }
      this[_dataCache] == null ? this[_dataCache] = qr_code._createData(this.typeNumber, this.errorCorrectLevel, this[_dataList]) : null;
      this[_mapData](this[_dataCache], maskPattern);
    }
  };
  (qr_code.QrCode.new = function(typeNumber, errorCorrectLevel) {
    this[_dataCache] = null;
    this[_dataList] = JSArrayOfQrByteL().of([]);
    this[typeNumber$] = typeNumber;
    this[errorCorrectLevel$] = errorCorrectLevel;
    this[moduleCount] = dart.notNull(typeNumber) * 4 + 17;
    this[_modules] = JSArrayOfListLOfboolL().of([]);
    core.RangeError.checkValueInInterval(this.typeNumber, 1, 40, "typeNumber");
    core.RangeError.checkValidIndex(this.errorCorrectLevel, error_correct_level.QrErrorCorrectLevel.levels, "errorCorrectLevel");
    for (let row = 0; row < dart.notNull(this.moduleCount); row = row + 1) {
      this[_modules][$add](ListOfboolL().new(this.moduleCount));
    }
  }).prototype = qr_code.QrCode.prototype;
  dart.addTypeTests(qr_code.QrCode);
  dart.addTypeCaches(qr_code.QrCode);
  dart.setMethodSignature(qr_code.QrCode, () => ({
    __proto__: dart.getMethods(qr_code.QrCode.__proto__),
    isDark: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.int), dart.legacy(core.int)]),
    addData: dart.fnType(dart.void, [dart.legacy(core.String)]),
    addByteData: dart.fnType(dart.void, [dart.legacy(typed_data.ByteData)]),
    [_addToList]: dart.fnType(dart.void, [dart.legacy(byte.QrByte)]),
    make: dart.fnType(dart.void, []),
    [_setupPositionProbePattern]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)]),
    [_getBestMaskPattern]: dart.fnType(dart.legacy(core.int), []),
    [_setupTimingPattern]: dart.fnType(dart.void, []),
    [_setupPositionAdjustPattern]: dart.fnType(dart.void, []),
    [_setupTypeNumber]: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    [_setupTypeInfo]: dart.fnType(dart.void, [dart.legacy(core.bool), dart.legacy(core.int)]),
    [_mapData]: dart.fnType(dart.void, [dart.legacy(core.List$(dart.legacy(core.int))), dart.legacy(core.int)]),
    [_makeImpl]: dart.fnType(dart.void, [dart.legacy(core.bool), dart.legacy(core.int)])
  }));
  dart.setLibraryUri(qr_code.QrCode, L0);
  dart.setFieldSignature(qr_code.QrCode, () => ({
    __proto__: dart.getFields(qr_code.QrCode.__proto__),
    typeNumber: dart.finalFieldType(dart.legacy(core.int)),
    errorCorrectLevel: dart.finalFieldType(dart.legacy(core.int)),
    moduleCount: dart.finalFieldType(dart.legacy(core.int)),
    [_modules]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.List$(dart.legacy(core.bool)))))),
    [_dataCache]: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.int)))),
    [_dataList]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(byte.QrByte))))
  }));
  qr_code.qrModules = function qrModules(qrCode) {
    return qrCode[_modules];
  };
  qr_code._createData = function _createData(typeNumber, errorCorrectLevel, dataList) {
    let t3;
    let rsBlocks = rs_block.QrRsBlock.getRSBlocks(typeNumber, errorCorrectLevel);
    let buffer = new bit_buffer.QrBitBuffer.new();
    for (let i = 0; i < dart.notNull(dataList[$length]); i = i + 1) {
      let data = dataList[$_get](i);
      t3 = buffer;
      (() => {
        t3.put(data.mode, 4);
        t3.put(data.length, qr_code._lengthInBits(data.mode, typeNumber));
        return t3;
      })();
      data.write(buffer);
    }
    let totalDataCount = 0;
    for (let i = 0; i < dart.notNull(rsBlocks[$length]); i = i + 1) {
      totalDataCount = totalDataCount + dart.notNull(rsBlocks[$_get](i).dataCount);
    }
    let totalByteCount = totalDataCount * 8;
    if (dart.notNull(buffer.length) > totalByteCount) {
      dart.throw(input_too_long_exception.InputTooLongException.new(buffer.length, totalByteCount));
    }
    if (dart.notNull(buffer.length) + 4 <= totalByteCount) {
      buffer.put(0, 4);
    }
    while (buffer.length[$modulo](8) !== 0) {
      buffer.putBit(false);
    }
    for (;;) {
      if (dart.notNull(buffer.length) >= totalDataCount * 8) {
        break;
      }
      buffer.put(236, 8);
      if (dart.notNull(buffer.length) >= totalDataCount * 8) {
        break;
      }
      buffer.put(17, 8);
    }
    return qr_code._createBytes(buffer, rsBlocks);
  };
  qr_code._createBytes = function _createBytes(buffer, rsBlocks) {
    let offset = 0;
    let maxDcCount = 0;
    let maxEcCount = 0;
    let dcdata = ListOfListLOfintL().new(rsBlocks[$length]);
    let ecdata = ListOfListLOfintL().new(rsBlocks[$length]);
    for (let r = 0; r < dart.notNull(rsBlocks[$length]); r = r + 1) {
      let dcCount = rsBlocks[$_get](r).dataCount;
      let ecCount = dart.notNull(rsBlocks[$_get](r).totalCount) - dart.notNull(dcCount);
      maxDcCount = math.max(intL(), maxDcCount, dcCount);
      maxEcCount = math.max(intL(), maxEcCount, ecCount);
      dcdata[$_set](r, _native_typed_data.NativeUint8List.new(dcCount));
      for (let i = 0; i < dart.notNull(dcdata[$_get](r)[$length]); i = i + 1) {
        dcdata[$_get](r)[$_set](i, 255 & dart.notNull(buffer.getByte(i + offset)));
      }
      offset = offset + dart.notNull(dcCount);
      let rsPoly = qr_code._errorCorrectPolynomial(ecCount);
      let rawPoly = polynomial.QrPolynomial.new(dcdata[$_get](r), dart.notNull(rsPoly.length) - 1);
      let modPoly = rawPoly.mod(rsPoly);
      ecdata[$_set](r, _native_typed_data.NativeUint8List.new(dart.notNull(rsPoly.length) - 1));
      for (let i = 0; i < dart.notNull(ecdata[$_get](r)[$length]); i = i + 1) {
        let modIndex = i + dart.notNull(modPoly.length) - dart.notNull(ecdata[$_get](r)[$length]);
        ecdata[$_get](r)[$_set](i, modIndex >= 0 ? modPoly._get(modIndex) : 0);
      }
    }
    let data = JSArrayOfintL().of([]);
    for (let i = 0; i < maxDcCount; i = i + 1) {
      for (let r = 0; r < dart.notNull(rsBlocks[$length]); r = r + 1) {
        if (i < dart.notNull(dcdata[$_get](r)[$length])) {
          data[$add](dcdata[$_get](r)[$_get](i));
        }
      }
    }
    for (let i = 0; i < maxEcCount; i = i + 1) {
      for (let r = 0; r < dart.notNull(rsBlocks[$length]); r = r + 1) {
        if (i < dart.notNull(ecdata[$_get](r)[$length])) {
          data[$add](ecdata[$_get](r)[$_get](i));
        }
      }
    }
    return data;
  };
  qr_code._mask = function _mask(maskPattern, i, j) {
    switch (maskPattern) {
      case 0:
      {
        return (dart.notNull(i) + dart.notNull(j))[$isEven];
      }
      case 1:
      {
        return i[$isEven];
      }
      case 2:
      {
        return j[$modulo](3) === 0;
      }
      case 3:
      {
        return (dart.notNull(i) + dart.notNull(j))[$modulo](3) === 0;
      }
      case 4:
      {
        return ((dart.notNull(i) / 2)[$truncate]() + (dart.notNull(j) / 3)[$truncate]())[$isEven];
      }
      case 5:
      {
        return (dart.notNull(i) * dart.notNull(j))[$modulo](2) + (dart.notNull(i) * dart.notNull(j))[$modulo](3) === 0;
      }
      case 6:
      {
        return ((dart.notNull(i) * dart.notNull(j))[$modulo](2) + (dart.notNull(i) * dart.notNull(j))[$modulo](3))[$isEven];
      }
      case 7:
      {
        return ((dart.notNull(i) * dart.notNull(j))[$modulo](3) + (dart.notNull(i) + dart.notNull(j))[$modulo](2))[$isEven];
      }
      default:
      {
        dart.throw(new core.ArgumentError.new("bad maskPattern:" + dart.str(maskPattern)));
      }
    }
  };
  qr_code._lengthInBits = function _lengthInBits(mode, type) {
    if (1 <= dart.notNull(type) && dart.notNull(type) < 10) {
      switch (mode) {
        case 1:
        {
          return 10;
        }
        case 2:
        {
          return 9;
        }
        case 4:
        {
          return 8;
        }
        case 8:
        {
          return 8;
        }
        default:
        {
          dart.throw(new core.ArgumentError.new("mode:" + dart.str(mode)));
        }
      }
    } else if (dart.notNull(type) < 27) {
      switch (mode) {
        case 1:
        {
          return 12;
        }
        case 2:
        {
          return 11;
        }
        case 4:
        {
          return 16;
        }
        case 8:
        {
          return 10;
        }
        default:
        {
          dart.throw(new core.ArgumentError.new("mode:" + dart.str(mode)));
        }
      }
    } else if (dart.notNull(type) < 41) {
      switch (mode) {
        case 1:
        {
          return 14;
        }
        case 2:
        {
          return 13;
        }
        case 4:
        {
          return 16;
        }
        case 8:
        {
          return 12;
        }
        default:
        {
          dart.throw(new core.ArgumentError.new("mode:" + dart.str(mode)));
        }
      }
    } else {
      dart.throw(new core.ArgumentError.new("type:" + dart.str(type)));
    }
  };
  qr_code._lostPoint = function _lostPoint(qrCode) {
    let moduleCount = qrCode.moduleCount;
    let lostPoint = 0.0;
    let row = null;
    let col = null;
    for (let t3 = row = 0; dart.notNull(row) < dart.notNull(moduleCount); row = dart.notNull(row) + 1) {
      for (let t4 = col = 0; dart.notNull(col) < dart.notNull(moduleCount); col = dart.notNull(col) + 1) {
        let sameCount = 0;
        let dark = qrCode.isDark(row, col);
        for (let r = -1; r <= 1; r = r + 1) {
          if (dart.notNull(row) + r < 0 || dart.notNull(moduleCount) <= dart.notNull(row) + r) {
            continue;
          }
          for (let c = -1; c <= 1; c = c + 1) {
            if (dart.notNull(col) + c < 0 || dart.notNull(moduleCount) <= dart.notNull(col) + c) {
              continue;
            }
            if (r === 0 && c === 0) {
              continue;
            }
            if (dart.equals(dark, qrCode.isDark(dart.notNull(row) + r, dart.notNull(col) + c))) {
              sameCount = sameCount + 1;
            }
          }
        }
        if (sameCount > 5) {
          lostPoint = lostPoint + (3 + sameCount - 5);
        }
      }
    }
    for (let t5 = row = 0; dart.notNull(row) < dart.notNull(moduleCount) - 1; row = dart.notNull(row) + 1) {
      for (let t6 = col = 0; dart.notNull(col) < dart.notNull(moduleCount) - 1; col = dart.notNull(col) + 1) {
        let count = 0;
        if (dart.test(qrCode.isDark(row, col))) count = count + 1;
        if (dart.test(qrCode.isDark(dart.notNull(row) + 1, col))) count = count + 1;
        if (dart.test(qrCode.isDark(row, dart.notNull(col) + 1))) count = count + 1;
        if (dart.test(qrCode.isDark(dart.notNull(row) + 1, dart.notNull(col) + 1))) count = count + 1;
        if (count === 0 || count === 4) {
          lostPoint = lostPoint + 3;
        }
      }
    }
    for (let t7 = row = 0; dart.notNull(row) < dart.notNull(moduleCount); row = dart.notNull(row) + 1) {
      for (let t8 = col = 0; dart.notNull(col) < dart.notNull(moduleCount) - 6; col = dart.notNull(col) + 1) {
        if (dart.test(qrCode.isDark(row, col)) && !dart.test(qrCode.isDark(row, dart.notNull(col) + 1)) && dart.test(qrCode.isDark(row, dart.notNull(col) + 2)) && dart.test(qrCode.isDark(row, dart.notNull(col) + 3)) && dart.test(qrCode.isDark(row, dart.notNull(col) + 4)) && !dart.test(qrCode.isDark(row, dart.notNull(col) + 5)) && dart.test(qrCode.isDark(row, dart.notNull(col) + 6))) {
          lostPoint = lostPoint + 40;
        }
      }
    }
    for (let t9 = col = 0; dart.notNull(col) < dart.notNull(moduleCount); col = dart.notNull(col) + 1) {
      for (let t10 = row = 0; dart.notNull(row) < dart.notNull(moduleCount) - 6; row = dart.notNull(row) + 1) {
        if (dart.test(qrCode.isDark(row, col)) && !dart.test(qrCode.isDark(dart.notNull(row) + 1, col)) && dart.test(qrCode.isDark(dart.notNull(row) + 2, col)) && dart.test(qrCode.isDark(dart.notNull(row) + 3, col)) && dart.test(qrCode.isDark(dart.notNull(row) + 4, col)) && !dart.test(qrCode.isDark(dart.notNull(row) + 5, col)) && dart.test(qrCode.isDark(dart.notNull(row) + 6, col))) {
          lostPoint = lostPoint + 40;
        }
      }
    }
    let darkCount = 0;
    for (let t11 = col = 0; dart.notNull(col) < dart.notNull(moduleCount); col = dart.notNull(col) + 1) {
      for (let t12 = row = 0; dart.notNull(row) < dart.notNull(moduleCount); row = dart.notNull(row) + 1) {
        if (dart.test(qrCode.isDark(row, col))) {
          darkCount = darkCount + 1;
        }
      }
    }
    let ratio = (100 * darkCount / dart.notNull(moduleCount) / dart.notNull(moduleCount) - 50)[$abs]() / 5;
    return lostPoint + ratio * 10;
  };
  qr_code._errorCorrectPolynomial = function _errorCorrectPolynomial(errorCorrectLength) {
    let a = polynomial.QrPolynomial.new(JSArrayOfintL().of([1]), 0);
    for (let i = 0; i < dart.notNull(errorCorrectLength); i = i + 1) {
      a = a.multiply(polynomial.QrPolynomial.new(JSArrayOfintL().of([1, math$.gexp(i)]), 0));
    }
    return a;
  };
  dart.defineLazy(qr_code, {
    /*qr_code._pad0*/get _pad0() {
      return 236;
    },
    /*qr_code._pad1*/get _pad1() {
      return 17;
    }
  }, true);
  dart.trackLibraries("packages/qr/src/qr_code.dart", {
    "package:qr/src/qr_code.dart": qr_code
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["qr_code.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/qr/src/qr_code.dart.lib.js"}');
  // Exports:
  return {
    src__qr_code: qr_code
  };
}));

//# sourceMappingURL=qr_code.dart.lib.js.map
