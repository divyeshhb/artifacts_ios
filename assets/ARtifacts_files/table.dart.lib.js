define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/flutter/src/painting/decoration.dart', 'packages/flutter/src/rendering/table_border.dart'], (function load__packages__flutter__src__rendering__table_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__flutter__src__painting__decoration$46dart, packages__flutter__src__rendering__table_border$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const object$ = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const debug = packages__flutter__src__foundation__debug$46dart.src__foundation__debug;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  const decoration = packages__flutter__src__painting__decoration$46dart.src__painting__decoration;
  const table_border = packages__flutter__src__rendering__table_border$46dart.src__rendering__table_border;
  var table = Object.create(dart.library);
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $isFinite = dartx.isFinite;
  var $isNotEmpty = dartx.isNotEmpty;
  var $length = dartx.length;
  var $first = dartx.first;
  var $forEach = dartx.forEach;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $isEmpty = dartx.isEmpty;
  var $clear = dartx.clear;
  var $modulo = dartx['%'];
  var $truncate = dartx.truncate;
  var $addAll = dartx.addAll;
  var $fold = dartx.fold;
  var $reversed = dartx.reversed;
  var $last = dartx.last;
  var $add = dartx.add;
  var $getRange = dartx.getRange;
  var $skip = dartx.skip;
  var $map = dartx.map;
  dart._checkModuleNullSafetyMode(false);
  var TableCellVerticalAlignmentL = () => (TableCellVerticalAlignmentL = dart.constFn(dart.legacy(table.TableCellVerticalAlignment)))();
  var RenderBoxL = () => (RenderBoxL = dart.constFn(dart.legacy(box.RenderBox)))();
  var JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  var IdentityMapOfint$TableColumnWidth = () => (IdentityMapOfint$TableColumnWidth = dart.constFn(_js_helper.IdentityMap$(core.int, table.TableColumnWidth)))();
  var RenderBoxN = () => (RenderBoxN = dart.constFn(dart.nullable(box.RenderBox)))();
  var JSArrayOfRenderBoxN = () => (JSArrayOfRenderBoxN = dart.constFn(_interceptors.JSArray$(RenderBoxN())))();
  var ListOfRenderBoxN = () => (ListOfRenderBoxN = dart.constFn(core.List$(RenderBoxN())))();
  var MapOfint$TableColumnWidth = () => (MapOfint$TableColumnWidth = dart.constFn(core.Map$(core.int, table.TableColumnWidth)))();
  var ListOfDecoration = () => (ListOfDecoration = dart.constFn(core.List$(decoration.Decoration)))();
  var DecorationL = () => (DecorationL = dart.constFn(dart.legacy(decoration.Decoration)))();
  var BoxPainterN = () => (BoxPainterN = dart.constFn(dart.nullable(decoration.BoxPainter)))();
  var ListOfBoxPainterN = () => (ListOfBoxPainterN = dart.constFn(core.List$(BoxPainterN())))();
  var _HashSetOfRenderBox = () => (_HashSetOfRenderBox = dart.constFn(collection._HashSet$(box.RenderBox)))();
  var SyncIterableOfRenderBox = () => (SyncIterableOfRenderBox = dart.constFn(_js_helper.SyncIterable$(box.RenderBox)))();
  var ListOfdouble = () => (ListOfdouble = dart.constFn(core.List$(core.double)))();
  var doubleN = () => (doubleN = dart.constFn(dart.nullable(core.double)))();
  var ListOfdoubleN = () => (ListOfdoubleN = dart.constFn(core.List$(doubleN())))();
  var doubleAnddoubleTodouble = () => (doubleAnddoubleTodouble = dart.constFn(dart.fnType(core.double, [core.double, core.double])))();
  var OffsetN = () => (OffsetN = dart.constFn(dart.nullable(ui.Offset)))();
  var BoxHitTestResultAndOffsetNTobool = () => (BoxHitTestResultAndOffsetNTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, OffsetN()])))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  var DiagnosticsPropertyOfTableBorder = () => (DiagnosticsPropertyOfTableBorder = dart.constFn(diagnostics.DiagnosticsProperty$(table_border.TableBorder)))();
  var DiagnosticsPropertyOfMapOfint$TableColumnWidth = () => (DiagnosticsPropertyOfMapOfint$TableColumnWidth = dart.constFn(diagnostics.DiagnosticsProperty$(MapOfint$TableColumnWidth())))();
  var DiagnosticsPropertyOfTableColumnWidth = () => (DiagnosticsPropertyOfTableColumnWidth = dart.constFn(diagnostics.DiagnosticsProperty$(table.TableColumnWidth)))();
  var IterablePropertyOfString = () => (IterablePropertyOfString = dart.constFn(diagnostics.IterableProperty$(core.String)))();
  var doubleNToString = () => (doubleNToString = dart.constFn(dart.fnType(core.String, [doubleN()])))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var DiagnosticsPropertyOfObject = () => (DiagnosticsPropertyOfObject = dart.constFn(diagnostics.DiagnosticsProperty$(core.Object)))();
  const CT = Object.create(null);
  var L0 = "package:flutter/src/rendering/table.dart";
  var L1 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/table.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: table.TableCellVerticalAlignment.prototype,
        [_name$]: "TableCellVerticalAlignment.top",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: table.TableCellVerticalAlignment.prototype,
        [_name$]: "TableCellVerticalAlignment.middle",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: table.TableCellVerticalAlignment.prototype,
        [_name$]: "TableCellVerticalAlignment.bottom",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: table.TableCellVerticalAlignment.prototype,
        [_name$]: "TableCellVerticalAlignment.baseline",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: table.TableCellVerticalAlignment.prototype,
        [_name$]: "TableCellVerticalAlignment.fill",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], TableCellVerticalAlignmentL());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: table.FlexColumnWidth.prototype,
        [value$1]: 1
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: image_provider.ImageConfiguration.prototype,
        [ImageConfiguration_platform]: null,
        [ImageConfiguration_size]: null,
        [ImageConfiguration_textDirection]: null,
        [ImageConfiguration_locale]: null,
        [ImageConfiguration_devicePixelRatio]: null,
        [ImageConfiguration_bundle]: null
      });
    },
    get C8() {
      return C8 = dart.constList([], RenderBoxL());
    },
    get C9() {
      return C9 = dart.constList([], DecorationL());
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.rtl",
        index: 0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.ltr",
        index: 1
      });
    },
    get C13() {
      return C13 = dart.constList([], doubleL());
    },
    get C14() {
      return C14 = dart.fn(debug.debugFormatDouble, doubleNToString());
    }
  }, false);
  var verticalAlignment = dart.privateName(table, "TableCellParentData.verticalAlignment");
  var x = dart.privateName(table, "TableCellParentData.x");
  var y = dart.privateName(table, "TableCellParentData.y");
  table.TableCellParentData = class TableCellParentData extends box.BoxParentData {
    get verticalAlignment() {
      return this[verticalAlignment];
    }
    set verticalAlignment(value) {
      this[verticalAlignment] = value;
    }
    get x() {
      return this[x];
    }
    set x(value) {
      this[x] = value;
    }
    get y() {
      return this[y];
    }
    set y(value) {
      this[y] = value;
    }
    toString() {
      return dart.str(super.toString()) + "; " + (this.verticalAlignment == null ? "default vertical alignment" : dart.str(this.verticalAlignment));
    }
  };
  (table.TableCellParentData.new = function() {
    this[verticalAlignment] = null;
    this[x] = null;
    this[y] = null;
    table.TableCellParentData.__proto__.new.call(this);
    ;
  }).prototype = table.TableCellParentData.prototype;
  dart.addTypeTests(table.TableCellParentData);
  dart.addTypeCaches(table.TableCellParentData);
  dart.setLibraryUri(table.TableCellParentData, L0);
  dart.setFieldSignature(table.TableCellParentData, () => ({
    __proto__: dart.getFields(table.TableCellParentData.__proto__),
    verticalAlignment: dart.fieldType(dart.nullable(table.TableCellVerticalAlignment)),
    x: dart.fieldType(dart.nullable(core.int)),
    y: dart.fieldType(dart.nullable(core.int))
  }));
  dart.defineExtensionMethods(table.TableCellParentData, ['toString']);
  table.TableColumnWidth = class TableColumnWidth extends core.Object {
    flex(cells) {
      if (cells == null) dart.nullFailed(L1, 78, 36, "cells");
      return null;
    }
    toString() {
      return object$.objectRuntimeType(this, "TableColumnWidth");
    }
  };
  (table.TableColumnWidth.new = function() {
    ;
  }).prototype = table.TableColumnWidth.prototype;
  dart.addTypeTests(table.TableColumnWidth);
  dart.addTypeCaches(table.TableColumnWidth);
  dart.setMethodSignature(table.TableColumnWidth, () => ({
    __proto__: dart.getMethods(table.TableColumnWidth.__proto__),
    flex: dart.fnType(dart.nullable(core.double), [core.Iterable$(box.RenderBox)])
  }));
  dart.setLibraryUri(table.TableColumnWidth, L0);
  dart.defineExtensionMethods(table.TableColumnWidth, ['toString']);
  var _flex = dart.privateName(table, "_flex");
  var _flex$ = dart.privateName(table, "IntrinsicColumnWidth._flex");
  table.IntrinsicColumnWidth = class IntrinsicColumnWidth extends table.TableColumnWidth {
    get [_flex]() {
      return this[_flex$];
    }
    set [_flex](value) {
      super[_flex] = value;
    }
    minIntrinsicWidth(cells, containerWidth) {
      if (cells == null) dart.nullFailed(L1, 104, 48, "cells");
      if (containerWidth == null) dart.nullFailed(L1, 104, 62, "containerWidth");
      let result = 0.0;
      for (let cell of cells)
        result = math.max(core.double, result, cell.getMinIntrinsicWidth(1 / 0));
      return result;
    }
    maxIntrinsicWidth(cells, containerWidth) {
      if (cells == null) dart.nullFailed(L1, 112, 48, "cells");
      if (containerWidth == null) dart.nullFailed(L1, 112, 62, "containerWidth");
      let result = 0.0;
      for (let cell of cells)
        result = math.max(core.double, result, cell.getMaxIntrinsicWidth(1 / 0));
      return result;
    }
    flex(cells) {
      if (cells == null) dart.nullFailed(L1, 122, 36, "cells");
      return this[_flex];
    }
    toString() {
      let t0;
      return dart.str(object$.objectRuntimeType(this, "IntrinsicColumnWidth")) + "(flex: " + dart.str((t0 = this[_flex], t0 == null ? null : t0[$toStringAsFixed](1))) + ")";
    }
  };
  (table.IntrinsicColumnWidth.new = function(opts) {
    let flex = opts && 'flex' in opts ? opts.flex : null;
    this[_flex$] = flex;
    table.IntrinsicColumnWidth.__proto__.new.call(this);
    ;
  }).prototype = table.IntrinsicColumnWidth.prototype;
  dart.addTypeTests(table.IntrinsicColumnWidth);
  dart.addTypeCaches(table.IntrinsicColumnWidth);
  dart.setMethodSignature(table.IntrinsicColumnWidth, () => ({
    __proto__: dart.getMethods(table.IntrinsicColumnWidth.__proto__),
    minIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double]),
    maxIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double])
  }));
  dart.setLibraryUri(table.IntrinsicColumnWidth, L0);
  dart.setFieldSignature(table.IntrinsicColumnWidth, () => ({
    __proto__: dart.getFields(table.IntrinsicColumnWidth.__proto__),
    [_flex]: dart.finalFieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(table.IntrinsicColumnWidth, ['toString']);
  var value$ = dart.privateName(table, "FixedColumnWidth.value");
  table.FixedColumnWidth = class FixedColumnWidth extends table.TableColumnWidth {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    minIntrinsicWidth(cells, containerWidth) {
      if (cells == null) dart.nullFailed(L1, 141, 48, "cells");
      if (containerWidth == null) dart.nullFailed(L1, 141, 62, "containerWidth");
      return this.value;
    }
    maxIntrinsicWidth(cells, containerWidth) {
      if (cells == null) dart.nullFailed(L1, 146, 48, "cells");
      if (containerWidth == null) dart.nullFailed(L1, 146, 62, "containerWidth");
      return this.value;
    }
    toString() {
      return dart.str(object$.objectRuntimeType(this, "FixedColumnWidth")) + "(" + dart.str(debug.debugFormatDouble(this.value)) + ")";
    }
  };
  (table.FixedColumnWidth.new = function(value) {
    if (value == null) dart.nullFailed(L1, 135, 31, "value");
    this[value$] = value;
    if (!(value != null)) dart.assertFailed(null, L1, 135, 47, "value != null");
    table.FixedColumnWidth.__proto__.new.call(this);
    ;
  }).prototype = table.FixedColumnWidth.prototype;
  dart.addTypeTests(table.FixedColumnWidth);
  dart.addTypeCaches(table.FixedColumnWidth);
  dart.setMethodSignature(table.FixedColumnWidth, () => ({
    __proto__: dart.getMethods(table.FixedColumnWidth.__proto__),
    minIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double]),
    maxIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double])
  }));
  dart.setLibraryUri(table.FixedColumnWidth, L0);
  dart.setFieldSignature(table.FixedColumnWidth, () => ({
    __proto__: dart.getFields(table.FixedColumnWidth.__proto__),
    value: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(table.FixedColumnWidth, ['toString']);
  var value$0 = dart.privateName(table, "FractionColumnWidth.value");
  table.FractionColumnWidth = class FractionColumnWidth extends table.TableColumnWidth {
    get value() {
      return this[value$0];
    }
    set value(value) {
      super.value = value;
    }
    minIntrinsicWidth(cells, containerWidth) {
      if (cells == null) dart.nullFailed(L1, 169, 48, "cells");
      if (containerWidth == null) dart.nullFailed(L1, 169, 62, "containerWidth");
      if (!containerWidth[$isFinite]) return 0.0;
      return dart.notNull(this.value) * dart.notNull(containerWidth);
    }
    maxIntrinsicWidth(cells, containerWidth) {
      if (cells == null) dart.nullFailed(L1, 176, 48, "cells");
      if (containerWidth == null) dart.nullFailed(L1, 176, 62, "containerWidth");
      if (!containerWidth[$isFinite]) return 0.0;
      return dart.notNull(this.value) * dart.notNull(containerWidth);
    }
    toString() {
      return dart.str(object$.objectRuntimeType(this, "FractionColumnWidth")) + "(" + dart.str(this.value) + ")";
    }
  };
  (table.FractionColumnWidth.new = function(value) {
    if (value == null) dart.nullFailed(L1, 162, 34, "value");
    this[value$0] = value;
    if (!(value != null)) dart.assertFailed(null, L1, 162, 50, "value != null");
    table.FractionColumnWidth.__proto__.new.call(this);
    ;
  }).prototype = table.FractionColumnWidth.prototype;
  dart.addTypeTests(table.FractionColumnWidth);
  dart.addTypeCaches(table.FractionColumnWidth);
  dart.setMethodSignature(table.FractionColumnWidth, () => ({
    __proto__: dart.getMethods(table.FractionColumnWidth.__proto__),
    minIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double]),
    maxIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double])
  }));
  dart.setLibraryUri(table.FractionColumnWidth, L0);
  dart.setFieldSignature(table.FractionColumnWidth, () => ({
    __proto__: dart.getFields(table.FractionColumnWidth.__proto__),
    value: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(table.FractionColumnWidth, ['toString']);
  var value$1 = dart.privateName(table, "FlexColumnWidth.value");
  table.FlexColumnWidth = class FlexColumnWidth extends table.TableColumnWidth {
    get value() {
      return this[value$1];
    }
    set value(value) {
      super.value = value;
    }
    minIntrinsicWidth(cells, containerWidth) {
      if (cells == null) dart.nullFailed(L1, 205, 48, "cells");
      if (containerWidth == null) dart.nullFailed(L1, 205, 62, "containerWidth");
      return 0.0;
    }
    maxIntrinsicWidth(cells, containerWidth) {
      if (cells == null) dart.nullFailed(L1, 210, 48, "cells");
      if (containerWidth == null) dart.nullFailed(L1, 210, 62, "containerWidth");
      return 0.0;
    }
    flex(cells) {
      if (cells == null) dart.nullFailed(L1, 215, 35, "cells");
      return this.value;
    }
    toString() {
      return dart.str(object$.objectRuntimeType(this, "FlexColumnWidth")) + "(" + dart.str(debug.debugFormatDouble(this.value)) + ")";
    }
  };
  (table.FlexColumnWidth.new = function(value = 1) {
    if (value == null) dart.nullFailed(L1, 198, 31, "value");
    this[value$1] = value;
    if (!(value != null)) dart.assertFailed(null, L1, 198, 54, "value != null");
    table.FlexColumnWidth.__proto__.new.call(this);
    ;
  }).prototype = table.FlexColumnWidth.prototype;
  dart.addTypeTests(table.FlexColumnWidth);
  dart.addTypeCaches(table.FlexColumnWidth);
  dart.setMethodSignature(table.FlexColumnWidth, () => ({
    __proto__: dart.getMethods(table.FlexColumnWidth.__proto__),
    minIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double]),
    maxIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double]),
    flex: dart.fnType(core.double, [core.Iterable$(box.RenderBox)])
  }));
  dart.setLibraryUri(table.FlexColumnWidth, L0);
  dart.setFieldSignature(table.FlexColumnWidth, () => ({
    __proto__: dart.getFields(table.FlexColumnWidth.__proto__),
    value: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(table.FlexColumnWidth, ['toString']);
  var a$ = dart.privateName(table, "MaxColumnWidth.a");
  var b$ = dart.privateName(table, "MaxColumnWidth.b");
  table.MaxColumnWidth = class MaxColumnWidth extends table.TableColumnWidth {
    get a() {
      return this[a$];
    }
    set a(value) {
      super.a = value;
    }
    get b() {
      return this[b$];
    }
    set b(value) {
      super.b = value;
    }
    minIntrinsicWidth(cells, containerWidth) {
      if (cells == null) dart.nullFailed(L1, 244, 48, "cells");
      if (containerWidth == null) dart.nullFailed(L1, 244, 62, "containerWidth");
      return math.max(core.double, this.a.minIntrinsicWidth(cells, containerWidth), this.b.minIntrinsicWidth(cells, containerWidth));
    }
    maxIntrinsicWidth(cells, containerWidth) {
      if (cells == null) dart.nullFailed(L1, 252, 48, "cells");
      if (containerWidth == null) dart.nullFailed(L1, 252, 62, "containerWidth");
      return math.max(core.double, this.a.maxIntrinsicWidth(cells, containerWidth), this.b.maxIntrinsicWidth(cells, containerWidth));
    }
    flex(cells) {
      if (cells == null) dart.nullFailed(L1, 260, 36, "cells");
      let aFlex = this.a.flex(cells);
      if (aFlex == null) return this.b.flex(cells);
      let bFlex = this.b.flex(cells);
      if (bFlex == null) return null;
      return math.max(core.double, aFlex, bFlex);
    }
    toString() {
      return dart.str(object$.objectRuntimeType(this, "MaxColumnWidth")) + "(" + dart.str(this.a) + ", " + dart.str(this.b) + ")";
    }
  };
  (table.MaxColumnWidth.new = function(a, b) {
    if (a == null) dart.nullFailed(L1, 235, 29, "a");
    if (b == null) dart.nullFailed(L1, 235, 37, "b");
    this[a$] = a;
    this[b$] = b;
    table.MaxColumnWidth.__proto__.new.call(this);
    ;
  }).prototype = table.MaxColumnWidth.prototype;
  dart.addTypeTests(table.MaxColumnWidth);
  dart.addTypeCaches(table.MaxColumnWidth);
  dart.setMethodSignature(table.MaxColumnWidth, () => ({
    __proto__: dart.getMethods(table.MaxColumnWidth.__proto__),
    minIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double]),
    maxIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double])
  }));
  dart.setLibraryUri(table.MaxColumnWidth, L0);
  dart.setFieldSignature(table.MaxColumnWidth, () => ({
    __proto__: dart.getFields(table.MaxColumnWidth.__proto__),
    a: dart.finalFieldType(table.TableColumnWidth),
    b: dart.finalFieldType(table.TableColumnWidth)
  }));
  dart.defineExtensionMethods(table.MaxColumnWidth, ['toString']);
  var a$0 = dart.privateName(table, "MinColumnWidth.a");
  var b$0 = dart.privateName(table, "MinColumnWidth.b");
  table.MinColumnWidth = class MinColumnWidth extends table.TableColumnWidth {
    get a() {
      return this[a$0];
    }
    set a(value) {
      super.a = value;
    }
    get b() {
      return this[b$0];
    }
    set b(value) {
      super.b = value;
    }
    minIntrinsicWidth(cells, containerWidth) {
      if (cells == null) dart.nullFailed(L1, 295, 48, "cells");
      if (containerWidth == null) dart.nullFailed(L1, 295, 62, "containerWidth");
      return math.min(core.double, this.a.minIntrinsicWidth(cells, containerWidth), this.b.minIntrinsicWidth(cells, containerWidth));
    }
    maxIntrinsicWidth(cells, containerWidth) {
      if (cells == null) dart.nullFailed(L1, 303, 48, "cells");
      if (containerWidth == null) dart.nullFailed(L1, 303, 62, "containerWidth");
      return math.min(core.double, this.a.maxIntrinsicWidth(cells, containerWidth), this.b.maxIntrinsicWidth(cells, containerWidth));
    }
    flex(cells) {
      if (cells == null) dart.nullFailed(L1, 311, 36, "cells");
      let aFlex = this.a.flex(cells);
      if (aFlex == null) return this.b.flex(cells);
      let bFlex = this.b.flex(cells);
      if (bFlex == null) return null;
      return math.min(core.double, aFlex, bFlex);
    }
    toString() {
      return dart.str(object$.objectRuntimeType(this, "MinColumnWidth")) + "(" + dart.str(this.a) + ", " + dart.str(this.b) + ")";
    }
  };
  (table.MinColumnWidth.new = function(a, b) {
    if (a == null) dart.nullFailed(L1, 286, 29, "a");
    if (b == null) dart.nullFailed(L1, 286, 37, "b");
    this[a$0] = a;
    this[b$0] = b;
    table.MinColumnWidth.__proto__.new.call(this);
    ;
  }).prototype = table.MinColumnWidth.prototype;
  dart.addTypeTests(table.MinColumnWidth);
  dart.addTypeCaches(table.MinColumnWidth);
  dart.setMethodSignature(table.MinColumnWidth, () => ({
    __proto__: dart.getMethods(table.MinColumnWidth.__proto__),
    minIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double]),
    maxIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double])
  }));
  dart.setLibraryUri(table.MinColumnWidth, L0);
  dart.setFieldSignature(table.MinColumnWidth, () => ({
    __proto__: dart.getFields(table.MinColumnWidth.__proto__),
    a: dart.finalFieldType(table.TableColumnWidth),
    b: dart.finalFieldType(table.TableColumnWidth)
  }));
  dart.defineExtensionMethods(table.MinColumnWidth, ['toString']);
  var _name$ = dart.privateName(table, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  table.TableCellVerticalAlignment = class TableCellVerticalAlignment extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (table.TableCellVerticalAlignment.new = function(index, _name) {
    if (index == null) dart.nullFailed(L1, 329, 6, "index");
    if (_name == null) dart.nullFailed(L1, 329, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = table.TableCellVerticalAlignment.prototype;
  dart.addTypeTests(table.TableCellVerticalAlignment);
  dart.addTypeCaches(table.TableCellVerticalAlignment);
  dart.setLibraryUri(table.TableCellVerticalAlignment, L0);
  dart.setFieldSignature(table.TableCellVerticalAlignment, () => ({
    __proto__: dart.getFields(table.TableCellVerticalAlignment.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(table.TableCellVerticalAlignment, ['toString']);
  table.TableCellVerticalAlignment.top = C0 || CT.C0;
  table.TableCellVerticalAlignment.middle = C1 || CT.C1;
  table.TableCellVerticalAlignment.bottom = C2 || CT.C2;
  table.TableCellVerticalAlignment.baseline = C3 || CT.C3;
  table.TableCellVerticalAlignment.fill = C4 || CT.C4;
  table.TableCellVerticalAlignment.values = C5 || CT.C5;
  var C6;
  var ImageConfiguration_platform = dart.privateName(image_provider, "ImageConfiguration.platform");
  var ImageConfiguration_size = dart.privateName(image_provider, "ImageConfiguration.size");
  var ImageConfiguration_textDirection = dart.privateName(image_provider, "ImageConfiguration.textDirection");
  var ImageConfiguration_locale = dart.privateName(image_provider, "ImageConfiguration.locale");
  var ImageConfiguration_devicePixelRatio = dart.privateName(image_provider, "ImageConfiguration.devicePixelRatio");
  var ImageConfiguration_bundle = dart.privateName(image_provider, "ImageConfiguration.bundle");
  var C7;
  var _children = dart.privateName(table, "_children");
  var C8;
  var _rowDecorations = dart.privateName(table, "_rowDecorations");
  var _rowDecorationPainters = dart.privateName(table, "_rowDecorationPainters");
  var _baselineDistance = dart.privateName(table, "_baselineDistance");
  var _rowTops = dart.privateName(table, "_rowTops");
  var _columnLefts = dart.privateName(table, "_columnLefts");
  var _textDirection = dart.privateName(table, "_textDirection");
  var _columns = dart.privateName(table, "_columns");
  var _rows = dart.privateName(table, "_rows");
  var _columnWidths = dart.privateName(table, "_columnWidths");
  var _defaultColumnWidth = dart.privateName(table, "_defaultColumnWidth");
  var _border = dart.privateName(table, "_border");
  var _textBaseline = dart.privateName(table, "_textBaseline");
  var _defaultVerticalAlignment = dart.privateName(table, "_defaultVerticalAlignment");
  var _configuration = dart.privateName(table, "_configuration");
  var C9;
  var _computeColumnWidths = dart.privateName(table, "_computeColumnWidths");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C10;
  var _name = dart.privateName(ui, "_name");
  var C11;
  var C12;
  var C13;
  var C14;
  table.RenderTable = class RenderTable extends box.RenderBox {
    get columns() {
      return this[_columns];
    }
    set columns(value) {
      if (value == null) dart.nullFailed(L1, 413, 19, "value");
      if (!(value != null)) dart.assertFailed(null, L1, 414, 12, "value != null");
      if (!(dart.notNull(value) >= 0)) dart.assertFailed(null, L1, 415, 12, "value >= 0");
      if (value == this.columns) return;
      let oldColumns = this.columns;
      let oldChildren = this[_children];
      this[_columns] = value;
      this[_children] = ListOfRenderBoxN().filled(dart.notNull(this.columns) * dart.notNull(this.rows), null, {growable: false});
      let columnsToCopy = math.min(core.int, this.columns, oldColumns);
      for (let y = 0; y < dart.notNull(this.rows); y = y + 1) {
        for (let x = 0; x < columnsToCopy; x = x + 1)
          this[_children][$_set](x + y * dart.notNull(this.columns), oldChildren[$_get](x + y * dart.notNull(oldColumns)));
      }
      if (dart.notNull(oldColumns) > dart.notNull(this.columns)) {
        for (let y = 0; y < dart.notNull(this.rows); y = y + 1) {
          for (let x = this.columns; dart.notNull(x) < dart.notNull(oldColumns); x = dart.notNull(x) + 1) {
            let xy = dart.notNull(x) + y * dart.notNull(oldColumns);
            if (oldChildren[$_get](xy) != null) this.dropChild(dart.nullCheck(oldChildren[$_get](xy)));
          }
        }
      }
      this.markNeedsLayout();
    }
    get rows() {
      return this[_rows];
    }
    set rows(value) {
      if (value == null) dart.nullFailed(L1, 445, 16, "value");
      if (!(value != null)) dart.assertFailed(null, L1, 446, 12, "value != null");
      if (!(dart.notNull(value) >= 0)) dart.assertFailed(null, L1, 447, 12, "value >= 0");
      if (value == this.rows) return;
      if (dart.notNull(this[_rows]) > dart.notNull(value)) {
        for (let xy = dart.notNull(this.columns) * dart.notNull(value); xy < dart.notNull(this[_children][$length]); xy = xy + 1) {
          if (this[_children][$_get](xy) != null) this.dropChild(dart.nullCheck(this[_children][$_get](xy)));
        }
      }
      this[_rows] = value;
      this[_children][$length] = dart.notNull(this.columns) * dart.notNull(this.rows);
      this.markNeedsLayout();
    }
    get columnWidths() {
      return MapOfint$TableColumnWidth().unmodifiable(this[_columnWidths]);
    }
    set columnWidths(value) {
      let t0;
      if (dart.equals(this[_columnWidths], value)) return;
      if (dart.test(this[_columnWidths][$isEmpty]) && value == null) return;
      this[_columnWidths] = (t0 = value, t0 == null ? new (IdentityMapOfint$TableColumnWidth()).new() : t0);
      this.markNeedsLayout();
    }
    setColumnWidth(column, value) {
      if (column == null) dart.nullFailed(L1, 486, 27, "column");
      if (value == null) dart.nullFailed(L1, 486, 52, "value");
      if (dart.equals(this[_columnWidths][$_get](column), value)) return;
      this[_columnWidths][$_set](column, value);
      this.markNeedsLayout();
    }
    get defaultColumnWidth() {
      return this[_defaultColumnWidth];
    }
    set defaultColumnWidth(value) {
      if (value == null) dart.nullFailed(L1, 499, 43, "value");
      if (!(value != null)) dart.assertFailed(null, L1, 500, 12, "value != null");
      if (dart.equals(this.defaultColumnWidth, value)) return;
      this[_defaultColumnWidth] = value;
      this.markNeedsLayout();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (value == null) dart.nullFailed(L1, 510, 35, "value");
      if (!(value != null)) dart.assertFailed(null, L1, 511, 12, "value != null");
      if (dart.equals(this[_textDirection], value)) return;
      this[_textDirection] = value;
      this.markNeedsLayout();
    }
    get border() {
      return this[_border];
    }
    set border(value) {
      if (dart.equals(this.border, value)) return;
      this[_border] = value;
      this.markNeedsPaint();
    }
    get rowDecorations() {
      let t0;
      return ListOfDecoration().unmodifiable((t0 = this[_rowDecorations], t0 == null ? C9 || CT.C9 : t0));
    }
    set rowDecorations(value) {
      let t0;
      if (dart.equals(this[_rowDecorations], value)) return;
      this[_rowDecorations] = value;
      if (this[_rowDecorationPainters] != null) {
        for (let painter of dart.nullCheck(this[_rowDecorationPainters])) {
          t0 = painter;
          t0 == null ? null : t0.dispose();
        }
      }
      this[_rowDecorationPainters] = this[_rowDecorations] != null ? ListOfBoxPainterN().filled(dart.nullCheck(this[_rowDecorations])[$length], null, {growable: false}) : null;
    }
    get configuration() {
      return this[_configuration];
    }
    set configuration(value) {
      if (value == null) dart.nullFailed(L1, 554, 40, "value");
      if (!(value != null)) dart.assertFailed(null, L1, 555, 12, "value != null");
      if (dart.equals(value, this[_configuration])) return;
      this[_configuration] = value;
      this.markNeedsPaint();
    }
    get defaultVerticalAlignment() {
      return this[_defaultVerticalAlignment];
    }
    set defaultVerticalAlignment(value) {
      if (value == null) dart.nullFailed(L1, 565, 59, "value");
      if (!(value != null)) dart.assertFailed(null, L1, 566, 12, "value != null");
      if (dart.equals(this[_defaultVerticalAlignment], value)) return;
      this[_defaultVerticalAlignment] = value;
      this.markNeedsLayout();
    }
    get textBaseline() {
      return this[_textBaseline];
    }
    set textBaseline(value) {
      if (dart.equals(this[_textBaseline], value)) return;
      this[_textBaseline] = value;
      this.markNeedsLayout();
    }
    setupParentData(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L1, 584, 37, "child");
      if (!table.TableCellParentData.is(child.parentData)) child.parentData = new table.TableCellParentData.new();
    }
    setFlatChildren(columns, cells) {
      if (columns == null) dart.nullFailed(L1, 597, 28, "columns");
      if (cells == null) dart.nullFailed(L1, 597, 54, "cells");
      if (dart.equals(cells, this[_children]) && columns == this[_columns]) return;
      if (!(dart.notNull(columns) >= 0)) dart.assertFailed(null, L1, 600, 12, "columns >= 0");
      if (columns === 0 || dart.test(cells[$isEmpty])) {
        if (!(cells == null || dart.test(cells[$isEmpty]))) dart.assertFailed(null, L1, 603, 14, "cells == null || cells.isEmpty");
        this[_columns] = columns;
        if (dart.test(this[_children][$isEmpty])) {
          if (!(this[_rows] === 0)) dart.assertFailed(null, L1, 606, 16, "_rows == 0");
          return;
        }
        for (let oldChild of this[_children]) {
          if (oldChild != null) this.dropChild(oldChild);
        }
        this[_rows] = 0;
        this[_children][$clear]();
        this.markNeedsLayout();
        return;
      }
      if (!(cells != null)) dart.assertFailed(null, L1, 618, 12, "cells != null");
      if (!(cells[$length][$modulo](columns) === 0)) dart.assertFailed(null, L1, 619, 12, "cells.length % columns == 0");
      let lostChildren = new (_HashSetOfRenderBox()).new();
      for (let y = 0; y < dart.notNull(this[_rows]); y = y + 1) {
        for (let x = 0; x < dart.notNull(this[_columns]); x = x + 1) {
          let xyOld = x + y * dart.notNull(this[_columns]);
          let xyNew = x + y * dart.notNull(columns);
          if (this[_children][$_get](xyOld) != null && (x >= dart.notNull(columns) || xyNew >= dart.notNull(cells[$length]) || !dart.equals(this[_children][$_get](xyOld), cells[$_get](xyNew)))) lostChildren.add(dart.nullCheck(this[_children][$_get](xyOld)));
        }
      }
      let y = 0;
      while (y * dart.notNull(columns) < dart.notNull(cells[$length])) {
        for (let x = 0; x < dart.notNull(columns); x = x + 1) {
          let xyNew = x + y * dart.notNull(columns);
          let xyOld = x + y * dart.notNull(this[_columns]);
          if (cells[$_get](xyNew) != null && (x >= dart.notNull(this[_columns]) || y >= dart.notNull(this[_rows]) || !dart.equals(this[_children][$_get](xyOld), cells[$_get](xyNew)))) {
            if (!dart.test(lostChildren.remove(cells[$_get](xyNew)))) this.adoptChild(dart.nullCheck(cells[$_get](xyNew)));
          }
        }
        y = y + 1;
      }
      lostChildren[$forEach](dart.bind(this, 'dropChild'));
      this[_columns] = columns;
      this[_rows] = (dart.notNull(cells[$length]) / dart.notNull(columns))[$truncate]();
      this[_children] = ListOfRenderBoxN().from(cells);
      if (!(this[_children][$length] === dart.notNull(this.rows) * dart.notNull(columns))) dart.assertFailed(null, L1, 651, 12, "_children.length == rows * columns");
      this.markNeedsLayout();
    }
    setChildren(cells) {
      if (cells == null) {
        this.setFlatChildren(0, C8 || CT.C8);
        return;
      }
      for (let oldChild of this[_children]) {
        if (oldChild != null) this.dropChild(oldChild);
      }
      this[_children][$clear]();
      this[_columns] = dart.test(cells[$isNotEmpty]) ? cells[$first][$length] : 0;
      this[_rows] = 0;
      cells[$forEach](dart.bind(this, 'addRow'));
      if (!(this[_children][$length] === dart.notNull(this.rows) * dart.notNull(this.columns))) dart.assertFailed(null, L1, 670, 12, "_children.length == rows * columns");
    }
    addRow(cells) {
      if (cells == null) dart.nullFailed(L1, 676, 32, "cells");
      if (!(cells[$length] == this.columns)) dart.assertFailed(null, L1, 677, 12, "cells.length == columns");
      if (!(this[_children][$length] === dart.notNull(this.rows) * dart.notNull(this.columns))) dart.assertFailed(null, L1, 678, 12, "_children.length == rows * columns");
      this[_rows] = dart.notNull(this[_rows]) + 1;
      this[_children][$addAll](cells);
      for (let cell of cells) {
        if (cell != null) this.adoptChild(cell);
      }
      this.markNeedsLayout();
    }
    setChild(x, y, value) {
      if (x == null) dart.nullFailed(L1, 693, 21, "x");
      if (y == null) dart.nullFailed(L1, 693, 28, "y");
      if (!(x != null)) dart.assertFailed(null, L1, 694, 12, "x != null");
      if (!(y != null)) dart.assertFailed(null, L1, 695, 12, "y != null");
      if (!(dart.notNull(x) >= 0 && dart.notNull(x) < dart.notNull(this.columns) && dart.notNull(y) >= 0 && dart.notNull(y) < dart.notNull(this.rows))) dart.assertFailed(null, L1, 696, 12, "x >= 0 && x < columns && y >= 0 && y < rows");
      if (!(this[_children][$length] === dart.notNull(this.rows) * dart.notNull(this.columns))) dart.assertFailed(null, L1, 697, 12, "_children.length == rows * columns");
      let xy = dart.notNull(x) + dart.notNull(y) * dart.notNull(this.columns);
      let oldChild = this[_children][$_get](xy);
      if (dart.equals(oldChild, value)) return;
      if (oldChild != null) this.dropChild(oldChild);
      this[_children][$_set](xy, value);
      if (value != null) this.adoptChild(value);
    }
    attach(owner) {
      let t0;
      object.PipelineOwner.as(owner);
      if (owner == null) dart.nullFailed(L1, 710, 29, "owner");
      super.attach(owner);
      for (let child of this[_children]) {
        t0 = child;
        t0 == null ? null : t0.attach(owner);
      }
    }
    detach() {
      let t0, t0$;
      super.detach();
      if (this[_rowDecorationPainters] != null) {
        for (let painter of dart.nullCheck(this[_rowDecorationPainters])) {
          t0 = painter;
          t0 == null ? null : t0.dispose();
        }
        this[_rowDecorationPainters] = ListOfBoxPainterN().filled(dart.nullCheck(this[_rowDecorations])[$length], null, {growable: false});
      }
      for (let child of this[_children]) {
        t0$ = child;
        t0$ == null ? null : t0$.detach();
      }
    }
    visitChildren(visitor) {
      if (visitor == null) dart.nullFailed(L1, 729, 42, "visitor");
      if (!(this[_children][$length] === dart.notNull(this.rows) * dart.notNull(this.columns))) dart.assertFailed(null, L1, 730, 12, "_children.length == rows * columns");
      for (let child of this[_children]) {
        if (child != null) visitor(child);
      }
    }
    computeMinIntrinsicWidth(height) {
      let t0;
      if (height == null) dart.nullFailed(L1, 738, 42, "height");
      if (!(this[_children][$length] === dart.notNull(this.rows) * dart.notNull(this.columns))) dart.assertFailed(null, L1, 739, 12, "_children.length == rows * columns");
      let totalMinWidth = 0.0;
      for (let x = 0; x < dart.notNull(this.columns); x = x + 1) {
        let columnWidth = (t0 = this[_columnWidths][$_get](x), t0 == null ? this.defaultColumnWidth : t0);
        let columnCells = this.column(x);
        totalMinWidth = totalMinWidth + dart.notNull(columnWidth.minIntrinsicWidth(columnCells, 1 / 0));
      }
      return totalMinWidth;
    }
    computeMaxIntrinsicWidth(height) {
      let t0;
      if (height == null) dart.nullFailed(L1, 750, 42, "height");
      if (!(this[_children][$length] === dart.notNull(this.rows) * dart.notNull(this.columns))) dart.assertFailed(null, L1, 751, 12, "_children.length == rows * columns");
      let totalMaxWidth = 0.0;
      for (let x = 0; x < dart.notNull(this.columns); x = x + 1) {
        let columnWidth = (t0 = this[_columnWidths][$_get](x), t0 == null ? this.defaultColumnWidth : t0);
        let columnCells = this.column(x);
        totalMaxWidth = totalMaxWidth + dart.notNull(columnWidth.maxIntrinsicWidth(columnCells, 1 / 0));
      }
      return totalMaxWidth;
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L1, 762, 43, "width");
      if (!(this[_children][$length] === dart.notNull(this.rows) * dart.notNull(this.columns))) dart.assertFailed(null, L1, 765, 12, "_children.length == rows * columns");
      let widths = this[_computeColumnWidths](new box.BoxConstraints.tightForFinite({width: width}));
      let rowTop = 0.0;
      for (let y = 0; y < dart.notNull(this.rows); y = y + 1) {
        let rowHeight = 0.0;
        for (let x = 0; x < dart.notNull(this.columns); x = x + 1) {
          let xy = x + y * dart.notNull(this.columns);
          let child = this[_children][$_get](xy);
          if (child != null) rowHeight = math.max(core.double, rowHeight, child.getMaxIntrinsicHeight(widths[$_get](x)));
        }
        rowTop = rowTop + rowHeight;
      }
      return rowTop;
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L1, 782, 43, "width");
      return this.computeMinIntrinsicHeight(width);
    }
    computeDistanceToActualBaseline(baseline) {
      if (baseline == null) dart.nullFailed(L1, 788, 56, "baseline");
      if (!!dart.test(this.debugNeedsLayout)) dart.assertFailed(null, L1, 790, 12, "!debugNeedsLayout");
      return this[_baselineDistance];
    }
    column(x) {
      if (x == null) dart.nullFailed(L1, 798, 34, "x");
      return new (SyncIterableOfRenderBox()).new((function* column() {
        for (let y = 0; y < dart.notNull(this.rows); y = y + 1) {
          let xy = dart.notNull(x) + y * dart.notNull(this.columns);
          let child = this[_children][$_get](xy);
          if (child != null) yield child;
        }
      }).bind(this));
    }
    row(y) {
      if (y == null) dart.nullFailed(L1, 811, 31, "y");
      return new (SyncIterableOfRenderBox()).new((function* row() {
        let start = dart.notNull(y) * dart.notNull(this.columns);
        let end = (dart.notNull(y) + 1) * dart.notNull(this.columns);
        for (let xy = start; xy < end; xy = xy + 1) {
          let child = this[_children][$_get](xy);
          if (child != null) yield child;
        }
      }).bind(this));
    }
    [_computeColumnWidths](constraints) {
      let t0;
      if (constraints == null) dart.nullFailed(L1, 821, 52, "constraints");
      if (!(constraints != null)) dart.assertFailed(null, L1, 822, 12, "constraints != null");
      if (!(this[_children][$length] === dart.notNull(this.rows) * dart.notNull(this.columns))) dart.assertFailed(null, L1, 823, 12, "_children.length == rows * columns");
      let widths = ListOfdouble().filled(this.columns, 0.0, {growable: false});
      let minWidths = ListOfdouble().filled(this.columns, 0.0, {growable: false});
      let flexes = ListOfdoubleN().filled(this.columns, null, {growable: false});
      let tableWidth = 0.0;
      let unflexedTableWidth = 0.0;
      let totalFlex = 0.0;
      for (let x = 0; x < dart.notNull(this.columns); x = x + 1) {
        let columnWidth = (t0 = this[_columnWidths][$_get](x), t0 == null ? this.defaultColumnWidth : t0);
        let columnCells = this.column(x);
        let maxIntrinsicWidth = columnWidth.maxIntrinsicWidth(columnCells, constraints.maxWidth);
        if (!maxIntrinsicWidth[$isFinite]) dart.assertFailed(null, L1, 846, 14, "maxIntrinsicWidth.isFinite");
        if (!(dart.notNull(maxIntrinsicWidth) >= 0.0)) dart.assertFailed(null, L1, 847, 14, "maxIntrinsicWidth >= 0.0");
        widths[$_set](x, maxIntrinsicWidth);
        tableWidth = dart.notNull(tableWidth) + dart.notNull(maxIntrinsicWidth);
        let minIntrinsicWidth = columnWidth.minIntrinsicWidth(columnCells, constraints.maxWidth);
        if (!minIntrinsicWidth[$isFinite]) dart.assertFailed(null, L1, 852, 14, "minIntrinsicWidth.isFinite");
        if (!(dart.notNull(minIntrinsicWidth) >= 0.0)) dart.assertFailed(null, L1, 853, 14, "minIntrinsicWidth >= 0.0");
        minWidths[$_set](x, minIntrinsicWidth);
        if (!(dart.notNull(maxIntrinsicWidth) >= dart.notNull(minIntrinsicWidth))) dart.assertFailed(null, L1, 855, 14, "maxIntrinsicWidth >= minIntrinsicWidth");
        let flex = columnWidth.flex(columnCells);
        if (flex != null) {
          if (!flex[$isFinite]) dart.assertFailed(null, L1, 859, 16, "flex.isFinite");
          if (!(dart.notNull(flex) > 0.0)) dart.assertFailed(null, L1, 860, 16, "flex > 0.0");
          flexes[$_set](x, flex);
          totalFlex = totalFlex + dart.notNull(flex);
        } else {
          unflexedTableWidth = unflexedTableWidth + dart.notNull(maxIntrinsicWidth);
        }
      }
      let maxWidthConstraint = constraints.maxWidth;
      let minWidthConstraint = constraints.minWidth;
      if (totalFlex > 0.0) {
        let targetWidth = null;
        if (maxWidthConstraint[$isFinite]) {
          targetWidth = maxWidthConstraint;
        } else {
          targetWidth = minWidthConstraint;
        }
        if (dart.notNull(tableWidth) < dart.notNull(targetWidth)) {
          let remainingWidth = dart.notNull(targetWidth) - unflexedTableWidth;
          if (!remainingWidth[$isFinite]) dart.assertFailed(null, L1, 883, 16, "remainingWidth.isFinite");
          if (!(remainingWidth >= 0.0)) dart.assertFailed(null, L1, 884, 16, "remainingWidth >= 0.0");
          for (let x = 0; x < dart.notNull(this.columns); x = x + 1) {
            if (flexes[$_get](x) != null) {
              let flexedWidth = remainingWidth * dart.nullCheck(flexes[$_get](x)) / totalFlex;
              if (!flexedWidth[$isFinite]) dart.assertFailed(null, L1, 888, 20, "flexedWidth.isFinite");
              if (!(flexedWidth >= 0.0)) dart.assertFailed(null, L1, 889, 20, "flexedWidth >= 0.0");
              if (dart.notNull(widths[$_get](x)) < flexedWidth) {
                let delta = flexedWidth - dart.notNull(widths[$_get](x));
                tableWidth = dart.notNull(tableWidth) + delta;
                widths[$_set](x, flexedWidth);
              }
            }
          }
          if (!(dart.notNull(tableWidth) + 1e-10 >= dart.notNull(targetWidth))) dart.assertFailed(null, L1, 897, 16, "tableWidth + precisionErrorTolerance >= targetWidth");
        }
      } else if (dart.notNull(tableWidth) < dart.notNull(minWidthConstraint)) {
        let delta = (dart.notNull(minWidthConstraint) - dart.notNull(tableWidth)) / dart.notNull(this.columns);
        for (let x = 0; x < dart.notNull(this.columns); x = x + 1)
          widths[$_set](x, dart.notNull(widths[$_get](x)) + delta);
        tableWidth = minWidthConstraint;
      }
      if (dart.notNull(tableWidth) > dart.notNull(maxWidthConstraint)) {
        let deficit = dart.notNull(tableWidth) - dart.notNull(maxWidthConstraint);
        let availableColumns = this.columns;
        while (deficit > 1e-10 && totalFlex > 1e-10) {
          let newTotalFlex = 0.0;
          for (let x = 0; x < dart.notNull(this.columns); x = x + 1) {
            if (flexes[$_get](x) != null) {
              let newWidth = dart.notNull(widths[$_get](x)) - deficit * dart.nullCheck(flexes[$_get](x)) / totalFlex;
              if (!newWidth[$isFinite]) dart.assertFailed(null, L1, 938, 20, "newWidth.isFinite");
              if (newWidth <= dart.notNull(minWidths[$_get](x))) {
                deficit = deficit - (dart.notNull(widths[$_get](x)) - dart.notNull(minWidths[$_get](x)));
                widths[$_set](x, minWidths[$_get](x));
                flexes[$_set](x, null);
                availableColumns = dart.notNull(availableColumns) - 1;
              } else {
                deficit = deficit - (dart.notNull(widths[$_get](x)) - newWidth);
                widths[$_set](x, newWidth);
                newTotalFlex = newTotalFlex + dart.nullCheck(flexes[$_get](x));
              }
              if (!(dart.notNull(widths[$_get](x)) >= 0.0)) dart.assertFailed(null, L1, 950, 20, "widths[x] >= 0.0");
            }
          }
          totalFlex = newTotalFlex;
        }
        while (deficit > 1e-10 && dart.notNull(availableColumns) > 0) {
          let delta = deficit / dart.notNull(availableColumns);
          if (!(delta !== 0)) dart.assertFailed(null, L1, 962, 16, "delta != 0");
          let newAvailableColumns = 0;
          for (let x = 0; x < dart.notNull(this.columns); x = x + 1) {
            let availableDelta = dart.notNull(widths[$_get](x)) - dart.notNull(minWidths[$_get](x));
            if (availableDelta > 0.0) {
              if (availableDelta <= delta) {
                deficit = deficit - (dart.notNull(widths[$_get](x)) - dart.notNull(minWidths[$_get](x)));
                widths[$_set](x, minWidths[$_get](x));
              } else {
                deficit = deficit - delta;
                widths[$_set](x, dart.notNull(widths[$_get](x)) - delta);
                newAvailableColumns = newAvailableColumns + 1;
              }
            }
          }
          availableColumns = newAvailableColumns;
        }
      }
      return widths;
    }
    getRowBox(row) {
      if (row == null) dart.nullFailed(L1, 995, 22, "row");
      if (!(dart.notNull(row) >= 0)) dart.assertFailed(null, L1, 996, 12, "row >= 0");
      if (!(dart.notNull(row) < dart.notNull(this.rows))) dart.assertFailed(null, L1, 997, 12, "row < rows");
      if (!!dart.test(this.debugNeedsLayout)) dart.assertFailed(null, L1, 998, 12, "!debugNeedsLayout");
      return new ui.Rect.fromLTRB(0.0, this[_rowTops][$_get](row), this.size.width, this[_rowTops][$_get](dart.notNull(row) + 1));
    }
    computeDryLayout(constraints) {
      let t0;
      if (constraints == null) dart.nullFailed(L1, 1003, 40, "constraints");
      if (dart.notNull(this.rows) * dart.notNull(this.columns) === 0) {
        return constraints.constrain(C10 || CT.C10);
      }
      let widths = this[_computeColumnWidths](constraints);
      let tableWidth = widths[$fold](core.double, 0.0, dart.fn((a, b) => {
        if (a == null) dart.nullFailed(L1, 1008, 56, "a");
        if (b == null) dart.nullFailed(L1, 1008, 66, "b");
        return dart.notNull(a) + dart.notNull(b);
      }, doubleAnddoubleTodouble()));
      let rowTop = 0.0;
      for (let y = 0; y < dart.notNull(this.rows); y = y + 1) {
        let rowHeight = 0.0;
        for (let x = 0; x < dart.notNull(this.columns); x = x + 1) {
          let xy = x + y * dart.notNull(this.columns);
          let child = this[_children][$_get](xy);
          if (child != null) {
            let childParentData = table.TableCellParentData.as(dart.nullCheck(child.parentData));
            if (!(childParentData !== null)) dart.assertFailed(null, L1, 1017, 18, "childParentData != null");
            switch (t0 = childParentData.verticalAlignment, t0 == null ? this.defaultVerticalAlignment : t0) {
              case C3 || CT.C3:
              {
                if (!dart.test(this.debugCannotComputeDryLayout({reason: "TableCellVerticalAlignment.baseline requires a full layout for baseline metrics to be available."}))) dart.assertFailed(null, L1, 1020, 22, "debugCannotComputeDryLayout(\n                reason: 'TableCellVerticalAlignment.baseline requires a full layout for baseline metrics to be available.'\n              )");
                return C10 || CT.C10;
              }
              case C0 || CT.C0:
              case C1 || CT.C1:
              case C2 || CT.C2:
              {
                let childSize = child.getDryLayout(new box.BoxConstraints.tightFor({width: widths[$_get](x)}));
                rowHeight = math.max(core.double, rowHeight, childSize.height);
                break;
              }
              case C4 || CT.C4:
              {
                break;
              }
              default:
              {
                dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
              }
            }
          }
        }
        rowTop = rowTop + rowHeight;
      }
      return constraints.constrain(new ui.Size.new(tableWidth, rowTop));
    }
    performLayout() {
      let t0, t0$;
      let constraints = this.constraints;
      let rows = this.rows;
      let columns = this.columns;
      if (!(this[_children][$length] === dart.notNull(rows) * dart.notNull(columns))) dart.assertFailed(null, L1, 1045, 12, "_children.length == rows * columns");
      if (dart.notNull(rows) * dart.notNull(columns) === 0) {
        this.size = constraints.constrain(C10 || CT.C10);
        return;
      }
      let widths = this[_computeColumnWidths](constraints);
      let positions = ListOfdouble().filled(columns, 0.0, {growable: false});
      let tableWidth = null;
      switch (this.textDirection) {
        case C11 || CT.C11:
        {
          positions[$_set](dart.notNull(columns) - 1, 0.0);
          for (let x = dart.notNull(columns) - 2; x >= 0; x = x - 1)
            positions[$_set](x, dart.notNull(positions[$_get](x + 1)) + dart.notNull(widths[$_get](x + 1)));
          this[_columnLefts] = positions[$reversed];
          tableWidth = dart.notNull(positions[$first]) + dart.notNull(widths[$first]);
          break;
        }
        case C12 || CT.C12:
        {
          positions[$_set](0, 0.0);
          for (let x = 1; x < dart.notNull(columns); x = x + 1)
            positions[$_set](x, dart.notNull(positions[$_get](x - 1)) + dart.notNull(widths[$_get](x - 1)));
          this[_columnLefts] = positions;
          tableWidth = dart.notNull(positions[$last]) + dart.notNull(widths[$last]);
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      this[_rowTops][$clear]();
      this[_baselineDistance] = null;
      let rowTop = 0.0;
      for (let y = 0; y < dart.notNull(rows); y = y + 1) {
        this[_rowTops][$add](rowTop);
        let rowHeight = 0.0;
        let haveBaseline = false;
        let beforeBaselineDistance = 0.0;
        let afterBaselineDistance = 0.0;
        let baselines = ListOfdouble().filled(columns, 0.0, {growable: false});
        for (let x = 0; x < dart.notNull(columns); x = x + 1) {
          let xy = x + y * dart.notNull(columns);
          let child = this[_children][$_get](xy);
          if (child != null) {
            let childParentData = table.TableCellParentData.as(dart.nullCheck(child.parentData));
            if (!(childParentData !== null)) dart.assertFailed(null, L1, 1087, 18, "childParentData != null");
            childParentData.x = x;
            childParentData.y = y;
            switch (t0 = childParentData.verticalAlignment, t0 == null ? this.defaultVerticalAlignment : t0) {
              case C3 || CT.C3:
              {
                if (!(this.textBaseline != null)) dart.assertFailed("An explicit textBaseline is required when using baseline alignment.", L1, 1092, 22, "textBaseline != null");
                child.layout(new box.BoxConstraints.tightFor({width: widths[$_get](x)}), {parentUsesSize: true});
                let childBaseline = child.getDistanceToBaseline(dart.nullCheck(this.textBaseline), {onlyReal: true});
                if (childBaseline != null) {
                  beforeBaselineDistance = math.max(core.double, beforeBaselineDistance, childBaseline);
                  afterBaselineDistance = math.max(core.double, afterBaselineDistance, dart.notNull(child.size.height) - dart.notNull(childBaseline));
                  baselines[$_set](x, childBaseline);
                  haveBaseline = true;
                } else {
                  rowHeight = math.max(core.double, rowHeight, child.size.height);
                  childParentData.offset = new ui.Offset.new(positions[$_get](x), rowTop);
                }
                break;
              }
              case C0 || CT.C0:
              case C1 || CT.C1:
              case C2 || CT.C2:
              {
                child.layout(new box.BoxConstraints.tightFor({width: widths[$_get](x)}), {parentUsesSize: true});
                rowHeight = math.max(core.double, rowHeight, child.size.height);
                break;
              }
              case C4 || CT.C4:
              {
                break;
              }
              default:
              {
                dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
              }
            }
          }
        }
        if (haveBaseline) {
          if (y === 0) this[_baselineDistance] = beforeBaselineDistance;
          rowHeight = math.max(core.double, rowHeight, beforeBaselineDistance + afterBaselineDistance);
        }
        for (let x = 0; x < dart.notNull(columns); x = x + 1) {
          let xy = x + y * dart.notNull(columns);
          let child = this[_children][$_get](xy);
          if (child != null) {
            let childParentData = table.TableCellParentData.as(dart.nullCheck(child.parentData));
            switch (t0$ = childParentData.verticalAlignment, t0$ == null ? this.defaultVerticalAlignment : t0$) {
              case C3 || CT.C3:
              {
                childParentData.offset = new ui.Offset.new(positions[$_get](x), rowTop + beforeBaselineDistance - dart.notNull(baselines[$_get](x)));
                break;
              }
              case C0 || CT.C0:
              {
                childParentData.offset = new ui.Offset.new(positions[$_get](x), rowTop);
                break;
              }
              case C1 || CT.C1:
              {
                childParentData.offset = new ui.Offset.new(positions[$_get](x), rowTop + (rowHeight - dart.notNull(child.size.height)) / 2.0);
                break;
              }
              case C2 || CT.C2:
              {
                childParentData.offset = new ui.Offset.new(positions[$_get](x), rowTop + rowHeight - dart.notNull(child.size.height));
                break;
              }
              case C4 || CT.C4:
              {
                child.layout(new box.BoxConstraints.tightFor({width: widths[$_get](x), height: rowHeight}));
                childParentData.offset = new ui.Offset.new(positions[$_get](x), rowTop);
                break;
              }
              default:
              {
                dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
              }
            }
          }
        }
        rowTop = rowTop + rowHeight;
      }
      this[_rowTops][$add](rowTop);
      this.size = constraints.constrain(new ui.Size.new(tableWidth, rowTop));
      if (!(this[_rowTops][$length] === dart.notNull(rows) + 1)) dart.assertFailed(null, L1, 1150, 12, "_rowTops.length == rows + 1");
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L1, 1154, 41, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L1, 1154, 67, "position");
      if (!(this[_children][$length] === dart.notNull(this.rows) * dart.notNull(this.columns))) dart.assertFailed(null, L1, 1155, 12, "_children.length == rows * columns");
      for (let index = dart.notNull(this[_children][$length]) - 1; index >= 0; index = index - 1) {
        let child = this[_children][$_get](index);
        if (child != null) {
          let childParentData = box.BoxParentData.as(dart.nullCheck(child.parentData));
          let isHit = result.addWithPaintOffset({offset: childParentData.offset, position: position, hitTest: dart.fn((result, transformed) => {
              if (result == null) dart.nullFailed(L1, 1163, 38, "result");
              if (!dart.equals(transformed, position['-'](childParentData.offset))) dart.assertFailed(null, L1, 1164, 20, "transformed == position - childParentData.offset");
              return child.hitTest(result, {position: dart.nullCheck(transformed)});
            }, BoxHitTestResultAndOffsetNTobool())});
          if (dart.test(isHit)) return true;
        }
      }
      return false;
    }
    paint(context, offset) {
      let t1, t0;
      if (context == null) dart.nullFailed(L1, 1176, 30, "context");
      if (offset == null) dart.nullFailed(L1, 1176, 46, "offset");
      if (!(this[_children][$length] === dart.notNull(this.rows) * dart.notNull(this.columns))) dart.assertFailed(null, L1, 1177, 12, "_children.length == rows * columns");
      if (dart.notNull(this.rows) * dart.notNull(this.columns) === 0) {
        if (this.border != null) {
          let borderRect = new ui.Rect.fromLTWH(offset.dx, offset.dy, this.size.width, 0.0);
          dart.nullCheck(this.border).paint(context.canvas, borderRect, {rows: C13 || CT.C13, columns: C13 || CT.C13});
        }
        return;
      }
      if (!(this[_rowTops][$length] === dart.notNull(this.rows) + 1)) dart.assertFailed(null, L1, 1185, 12, "_rowTops.length == rows + 1");
      if (this[_rowDecorations] != null) {
        if (!(dart.nullCheck(this[_rowDecorations])[$length] == dart.nullCheck(this[_rowDecorationPainters])[$length])) dart.assertFailed(null, L1, 1187, 14, "_rowDecorations!.length == _rowDecorationPainters!.length");
        let canvas = context.canvas;
        for (let y = 0; y < dart.notNull(this.rows); y = y + 1) {
          if (dart.notNull(dart.nullCheck(this[_rowDecorations])[$length]) <= y) break;
          if (dart.nullCheck(this[_rowDecorations])[$_get](y) != null) {
            t0 = dart.nullCheck(this[_rowDecorationPainters]);
            t1 = y;
            t0[$_get](t1) == null ? t0[$_set](t1, dart.nullCheck(dart.nullCheck(this[_rowDecorations])[$_get](y)).createBoxPainter(dart.bind(this, 'markNeedsPaint'))) : null;
            dart.nullCheck(dart.nullCheck(this[_rowDecorationPainters])[$_get](y)).paint(canvas, new ui.Offset.new(offset.dx, dart.notNull(offset.dy) + dart.notNull(this[_rowTops][$_get](y))), this.configuration.copyWith({size: new ui.Size.new(this.size.width, dart.notNull(this[_rowTops][$_get](y + 1)) - dart.notNull(this[_rowTops][$_get](y)))}));
          }
        }
      }
      for (let index = 0; index < dart.notNull(this[_children][$length]); index = index + 1) {
        let child = this[_children][$_get](index);
        if (child != null) {
          let childParentData = box.BoxParentData.as(dart.nullCheck(child.parentData));
          context.paintChild(child, childParentData.offset['+'](offset));
        }
      }
      if (!(this[_rows] === dart.notNull(this[_rowTops][$length]) - 1)) dart.assertFailed(null, L1, 1209, 12, "_rows == _rowTops.length - 1");
      if (!(this[_columns] == dart.nullCheck(this[_columnLefts])[$length])) dart.assertFailed(null, L1, 1210, 12, "_columns == _columnLefts!.length");
      if (this.border != null) {
        let borderRect = new ui.Rect.fromLTWH(offset.dx, offset.dy, this.size.width, this[_rowTops][$last]);
        let rows = this[_rowTops][$getRange](1, dart.notNull(this[_rowTops][$length]) - 1);
        let columns = dart.nullCheck(this[_columnLefts])[$skip](1);
        dart.nullCheck(this.border).paint(context.canvas, borderRect, {rows: rows, columns: columns});
      }
    }
    debugFillProperties(properties) {
      let t0;
      if (properties == null) dart.nullFailed(L1, 1223, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfTableBorder()).new("border", this.border, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfMapOfint$TableColumnWidth()).new("specified column widths", this[_columnWidths], {level: dart.test(this[_columnWidths][$isEmpty]) ? diagnostics.DiagnosticLevel.hidden : diagnostics.DiagnosticLevel.info}));
      properties.add(new (DiagnosticsPropertyOfTableColumnWidth()).new("default column width", this.defaultColumnWidth));
      properties.add(new diagnostics.MessageProperty.new("table size", dart.str(this.columns) + "×" + dart.str(this.rows)));
      properties.add(new (IterablePropertyOfString()).new("column offsets", (t0 = this[_columnLefts], t0 == null ? null : t0[$map](core.String, C14 || CT.C14)), {ifNull: "unknown"}));
      properties.add(new (IterablePropertyOfString()).new("row offsets", this[_rowTops][$map](core.String, C14 || CT.C14), {ifNull: "unknown"}));
    }
    debugDescribeChildren() {
      if (dart.test(this[_children][$isEmpty])) {
        return JSArrayOfDiagnosticsNode().of([diagnostics.DiagnosticsNode.message("table is empty")]);
      }
      let children = JSArrayOfDiagnosticsNode().of([]);
      for (let y = 0; y < dart.notNull(this.rows); y = y + 1) {
        for (let x = 0; x < dart.notNull(this.columns); x = x + 1) {
          let xy = x + y * dart.notNull(this.columns);
          let child = this[_children][$_get](xy);
          let name = "child (" + dart.str(x) + ", " + dart.str(y) + ")";
          if (child != null)
            children[$add](child.toDiagnosticsNode({name: name}));
          else
            children[$add](new (DiagnosticsPropertyOfObject()).new(name, null, {ifNull: "is null", showSeparator: false}));
        }
      }
      return children;
    }
  };
  (table.RenderTable.new = function(opts) {
    let t0, t0$, t0$0, t0$1, t0$2;
    let columns = opts && 'columns' in opts ? opts.columns : null;
    let rows = opts && 'rows' in opts ? opts.rows : null;
    let columnWidths = opts && 'columnWidths' in opts ? opts.columnWidths : null;
    let defaultColumnWidth = opts && 'defaultColumnWidth' in opts ? opts.defaultColumnWidth : C6 || CT.C6;
    if (defaultColumnWidth == null) dart.nullFailed(L1, 372, 22, "defaultColumnWidth");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    if (textDirection == null) dart.nullFailed(L1, 373, 28, "textDirection");
    let border = opts && 'border' in opts ? opts.border : null;
    let rowDecorations = opts && 'rowDecorations' in opts ? opts.rowDecorations : null;
    let configuration = opts && 'configuration' in opts ? opts.configuration : C7 || CT.C7;
    if (configuration == null) dart.nullFailed(L1, 376, 24, "configuration");
    let defaultVerticalAlignment = opts && 'defaultVerticalAlignment' in opts ? opts.defaultVerticalAlignment : C0 || CT.C0;
    if (defaultVerticalAlignment == null) dart.nullFailed(L1, 377, 32, "defaultVerticalAlignment");
    let textBaseline = opts && 'textBaseline' in opts ? opts.textBaseline : null;
    let children = opts && 'children' in opts ? opts.children : null;
    this[_children] = C8 || CT.C8;
    this[_rowDecorations] = null;
    this[_rowDecorationPainters] = null;
    this[_baselineDistance] = null;
    this[_rowTops] = JSArrayOfdouble().of([]);
    this[_columnLefts] = null;
    if (!(columns == null || dart.notNull(columns) >= 0)) dart.assertFailed(null, L1, 380, 15, "columns == null || columns >= 0");
    if (!(rows == null || dart.notNull(rows) >= 0)) dart.assertFailed(null, L1, 381, 15, "rows == null || rows >= 0");
    if (!(rows == null || children == null)) dart.assertFailed(null, L1, 382, 15, "rows == null || children == null");
    if (!(defaultColumnWidth != null)) dart.assertFailed(null, L1, 383, 15, "defaultColumnWidth != null");
    if (!(textDirection != null)) dart.assertFailed(null, L1, 384, 15, "textDirection != null");
    if (!(configuration != null)) dart.assertFailed(null, L1, 385, 15, "configuration != null");
    this[_textDirection] = textDirection;
    this[_columns] = (t0 = columns, t0 == null ? children != null && dart.test(children[$isNotEmpty]) ? children[$first][$length] : 0 : t0);
    this[_rows] = (t0$ = rows, t0$ == null ? 0 : t0$);
    this[_columnWidths] = (t0$0 = columnWidths, t0$0 == null ? new (IdentityMapOfint$TableColumnWidth()).new() : t0$0);
    this[_defaultColumnWidth] = defaultColumnWidth;
    this[_border] = border;
    this[_textBaseline] = textBaseline;
    this[_defaultVerticalAlignment] = defaultVerticalAlignment;
    this[_configuration] = configuration;
    table.RenderTable.__proto__.new.call(this);
    this[_children] = (t0$1 = JSArrayOfRenderBoxN().of([]), (() => {
      t0$1[$length] = dart.notNull(this[_columns]) * dart.notNull(this[_rows]);
      return t0$1;
    })());
    this.rowDecorations = rowDecorations;
    t0$2 = children;
    t0$2 == null ? null : t0$2[$forEach](dart.bind(this, 'addRow'));
  }).prototype = table.RenderTable.prototype;
  dart.addTypeTests(table.RenderTable);
  dart.addTypeCaches(table.RenderTable);
  dart.setMethodSignature(table.RenderTable, () => ({
    __proto__: dart.getMethods(table.RenderTable.__proto__),
    setColumnWidth: dart.fnType(dart.void, [core.int, table.TableColumnWidth]),
    setFlatChildren: dart.fnType(dart.void, [core.int, core.List$(dart.nullable(box.RenderBox))]),
    setChildren: dart.fnType(dart.void, [dart.nullable(core.List$(core.List$(box.RenderBox)))]),
    addRow: dart.fnType(dart.void, [core.List$(dart.nullable(box.RenderBox))]),
    setChild: dart.fnType(dart.void, [core.int, core.int, dart.nullable(box.RenderBox)]),
    column: dart.fnType(core.Iterable$(box.RenderBox), [core.int]),
    row: dart.fnType(core.Iterable$(box.RenderBox), [core.int]),
    [_computeColumnWidths]: dart.fnType(core.List$(core.double), [box.BoxConstraints]),
    getRowBox: dart.fnType(ui.Rect, [core.int])
  }));
  dart.setGetterSignature(table.RenderTable, () => ({
    __proto__: dart.getGetters(table.RenderTable.__proto__),
    columns: core.int,
    rows: core.int,
    columnWidths: dart.nullable(core.Map$(core.int, table.TableColumnWidth)),
    defaultColumnWidth: table.TableColumnWidth,
    textDirection: ui.TextDirection,
    border: dart.nullable(table_border.TableBorder),
    rowDecorations: core.List$(decoration.Decoration),
    configuration: image_provider.ImageConfiguration,
    defaultVerticalAlignment: table.TableCellVerticalAlignment,
    textBaseline: dart.nullable(ui.TextBaseline)
  }));
  dart.setSetterSignature(table.RenderTable, () => ({
    __proto__: dart.getSetters(table.RenderTable.__proto__),
    columns: core.int,
    rows: core.int,
    columnWidths: dart.nullable(core.Map$(core.int, table.TableColumnWidth)),
    defaultColumnWidth: table.TableColumnWidth,
    textDirection: ui.TextDirection,
    border: dart.nullable(table_border.TableBorder),
    rowDecorations: dart.nullable(core.List$(dart.nullable(decoration.Decoration))),
    configuration: image_provider.ImageConfiguration,
    defaultVerticalAlignment: table.TableCellVerticalAlignment,
    textBaseline: dart.nullable(ui.TextBaseline)
  }));
  dart.setLibraryUri(table.RenderTable, L0);
  dart.setFieldSignature(table.RenderTable, () => ({
    __proto__: dart.getFields(table.RenderTable.__proto__),
    [_children]: dart.fieldType(core.List$(dart.nullable(box.RenderBox))),
    [_columns]: dart.fieldType(core.int),
    [_rows]: dart.fieldType(core.int),
    [_columnWidths]: dart.fieldType(core.Map$(core.int, table.TableColumnWidth)),
    [_defaultColumnWidth]: dart.fieldType(table.TableColumnWidth),
    [_textDirection]: dart.fieldType(ui.TextDirection),
    [_border]: dart.fieldType(dart.nullable(table_border.TableBorder)),
    [_rowDecorations]: dart.fieldType(dart.nullable(core.List$(dart.nullable(decoration.Decoration)))),
    [_rowDecorationPainters]: dart.fieldType(dart.nullable(core.List$(dart.nullable(decoration.BoxPainter)))),
    [_configuration]: dart.fieldType(image_provider.ImageConfiguration),
    [_defaultVerticalAlignment]: dart.fieldType(table.TableCellVerticalAlignment),
    [_textBaseline]: dart.fieldType(dart.nullable(ui.TextBaseline)),
    [_baselineDistance]: dart.fieldType(dart.nullable(core.double)),
    [_rowTops]: dart.finalFieldType(core.List$(core.double)),
    [_columnLefts]: dart.fieldType(dart.nullable(core.Iterable$(core.double)))
  }));
  dart.trackLibraries("packages/flutter/src/rendering/table.dart", {
    "package:flutter/src/rendering/table.dart": table
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["table.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/table.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__table: table
  };
}));

//# sourceMappingURL=table.dart.lib.js.map
