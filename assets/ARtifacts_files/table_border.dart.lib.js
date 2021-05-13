define(['dart_sdk', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/edge_insets.dart'], (function load__packages__flutter__src__rendering__table_border_dart(dart_sdk, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__edge_insets$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  var table_border = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $first = dartx.first;
  var $last = dartx.last;
  var $isNotEmpty = dartx.isNotEmpty;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L1 = "package:flutter/src/rendering/table_border.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/table_border.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.none",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C1 || CT.C1,
        [BorderSide_width]: 0,
        [BorderSide_color]: C2 || CT.C2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.solid",
        index: 1
      });
    }
  }, false);
  var _name = dart.privateName(borders, "_name");
  var C1;
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var C2;
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var C0;
  var C3;
  var top$ = dart.privateName(table_border, "TableBorder.top");
  var right$ = dart.privateName(table_border, "TableBorder.right");
  var bottom$ = dart.privateName(table_border, "TableBorder.bottom");
  var left$ = dart.privateName(table_border, "TableBorder.left");
  var horizontalInside$ = dart.privateName(table_border, "TableBorder.horizontalInside");
  var verticalInside$ = dart.privateName(table_border, "TableBorder.verticalInside");
  table_border.TableBorder = class TableBorder extends core.Object {
    get top() {
      return this[top$];
    }
    set top(value) {
      super.top = value;
    }
    get right() {
      return this[right$];
    }
    set right(value) {
      super.right = value;
    }
    get bottom() {
      return this[bottom$];
    }
    set bottom(value) {
      super.bottom = value;
    }
    get left() {
      return this[left$];
    }
    set left(value) {
      super.left = value;
    }
    get horizontalInside() {
      return this[horizontalInside$];
    }
    set horizontalInside(value) {
      super.horizontalInside = value;
    }
    get verticalInside() {
      return this[verticalInside$];
    }
    set verticalInside(value) {
      super.verticalInside = value;
    }
    static all(opts) {
      let color = opts && 'color' in opts ? opts.color : C2 || CT.C2;
      if (color == null) dart.nullFailed(L0, 32, 11, "color");
      let width = opts && 'width' in opts ? opts.width : 1;
      if (width == null) dart.nullFailed(L0, 33, 12, "width");
      let style = opts && 'style' in opts ? opts.style : C3 || CT.C3;
      if (style == null) dart.nullFailed(L0, 34, 17, "style");
      let side = new borders.BorderSide.new({color: color, width: width, style: style});
      return new table_border.TableBorder.new({top: side, right: side, bottom: side, left: side, horizontalInside: side, verticalInside: side});
    }
    static symmetric(opts) {
      let inside = opts && 'inside' in opts ? opts.inside : C0 || CT.C0;
      if (inside == null) dart.nullFailed(L0, 43, 16, "inside");
      let outside = opts && 'outside' in opts ? opts.outside : C0 || CT.C0;
      if (outside == null) dart.nullFailed(L0, 44, 16, "outside");
      return new table_border.TableBorder.new({top: outside, right: outside, bottom: outside, left: outside, horizontalInside: inside, verticalInside: inside});
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.fromLTRB(this.left.width, this.top.width, this.right.width, this.bottom.width);
    }
    get isUniform() {
      if (!(this.top != null)) dart.assertFailed(null, L0, 85, 12, "top != null");
      if (!(this.right != null)) dart.assertFailed(null, L0, 86, 12, "right != null");
      if (!(this.bottom != null)) dart.assertFailed(null, L0, 87, 12, "bottom != null");
      if (!(this.left != null)) dart.assertFailed(null, L0, 88, 12, "left != null");
      if (!(this.horizontalInside != null)) dart.assertFailed(null, L0, 89, 12, "horizontalInside != null");
      if (!(this.verticalInside != null)) dart.assertFailed(null, L0, 90, 12, "verticalInside != null");
      let topColor = this.top.color;
      if (!dart.equals(this.right.color, topColor) || !dart.equals(this.bottom.color, topColor) || !dart.equals(this.left.color, topColor) || !dart.equals(this.horizontalInside.color, topColor) || !dart.equals(this.verticalInside.color, topColor)) return false;
      let topWidth = this.top.width;
      if (this.right.width != topWidth || this.bottom.width != topWidth || this.left.width != topWidth || this.horizontalInside.width != topWidth || this.verticalInside.width != topWidth) return false;
      let topStyle = this.top.style;
      if (!dart.equals(this.right.style, topStyle) || !dart.equals(this.bottom.style, topStyle) || !dart.equals(this.left.style, topStyle) || !dart.equals(this.horizontalInside.style, topStyle) || !dart.equals(this.verticalInside.style, topStyle)) return false;
      return true;
    }
    scale(t) {
      if (t == null) dart.nullFailed(L0, 134, 28, "t");
      return new table_border.TableBorder.new({top: this.top.scale(t), right: this.right.scale(t), bottom: this.bottom.scale(t), left: this.left.scale(t), horizontalInside: this.horizontalInside.scale(t), verticalInside: this.verticalInside.scale(t)});
    }
    static lerp(a, b, t) {
      if (t == null) dart.nullFailed(L0, 151, 67, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 152, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b).scale(t);
      if (b == null) return a.scale(1.0 - dart.notNull(t));
      return new table_border.TableBorder.new({top: borders.BorderSide.lerp(a.top, b.top, t), right: borders.BorderSide.lerp(a.right, b.right, t), bottom: borders.BorderSide.lerp(a.bottom, b.bottom, t), left: borders.BorderSide.lerp(a.left, b.left, t), horizontalInside: borders.BorderSide.lerp(a.horizontalInside, b.horizontalInside, t), verticalInside: borders.BorderSide.lerp(a.verticalInside, b.verticalInside, t)});
    }
    paint(canvas, rect, opts) {
      let t0, t0$;
      if (canvas == null) dart.nullFailed(L0, 196, 12, "canvas");
      if (rect == null) dart.nullFailed(L0, 197, 10, "rect");
      let rows = opts && 'rows' in opts ? opts.rows : null;
      if (rows == null) dart.nullFailed(L0, 198, 31, "rows");
      let columns = opts && 'columns' in opts ? opts.columns : null;
      if (columns == null) dart.nullFailed(L0, 199, 31, "columns");
      if (!(this.top != null)) dart.assertFailed(null, L0, 202, 12, "top != null");
      if (!(this.right != null)) dart.assertFailed(null, L0, 203, 12, "right != null");
      if (!(this.bottom != null)) dart.assertFailed(null, L0, 204, 12, "bottom != null");
      if (!(this.left != null)) dart.assertFailed(null, L0, 205, 12, "left != null");
      if (!(this.horizontalInside != null)) dart.assertFailed(null, L0, 206, 12, "horizontalInside != null");
      if (!(this.verticalInside != null)) dart.assertFailed(null, L0, 207, 12, "verticalInside != null");
      if (!(canvas != null)) dart.assertFailed(null, L0, 210, 12, "canvas != null");
      if (!(rect != null)) dart.assertFailed(null, L0, 211, 12, "rect != null");
      if (!(rows != null)) dart.assertFailed(null, L0, 212, 12, "rows != null");
      if (!(dart.test(rows[$isEmpty]) || dart.notNull(rows[$first]) >= 0.0 && dart.notNull(rows[$last]) <= dart.notNull(rect.height))) dart.assertFailed(null, L0, 213, 12, "rows.isEmpty || (rows.first >= 0.0 && rows.last <= rect.height)");
      if (!(columns != null)) dart.assertFailed(null, L0, 214, 12, "columns != null");
      if (!(dart.test(columns[$isEmpty]) || dart.notNull(columns[$first]) >= 0.0 && dart.notNull(columns[$last]) <= dart.notNull(rect.width))) dart.assertFailed(null, L0, 215, 12, "columns.isEmpty || (columns.first >= 0.0 && columns.last <= rect.width)");
      if (dart.test(columns[$isNotEmpty]) || dart.test(rows[$isNotEmpty])) {
        let paint = ui.Paint.new();
        let path = ui.Path.new();
        if (dart.test(columns[$isNotEmpty])) {
          switch (this.verticalInside.style) {
            case C3 || CT.C3:
            {
              t0 = paint;
              (() => {
                t0.color = this.verticalInside.color;
                t0.strokeWidth = this.verticalInside.width;
                t0.style = ui.PaintingStyle.stroke;
                return t0;
              })();
              path.reset();
              for (let x of columns) {
                path.moveTo(dart.notNull(rect.left) + dart.notNull(x), rect.top);
                path.lineTo(dart.notNull(rect.left) + dart.notNull(x), rect.bottom);
              }
              canvas.drawPath(path, paint);
              break;
            }
            case C1 || CT.C1:
            {
              break;
            }
            default:
            {
              dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
            }
          }
        }
        if (dart.test(rows[$isNotEmpty])) {
          switch (this.horizontalInside.style) {
            case C3 || CT.C3:
            {
              t0$ = paint;
              (() => {
                t0$.color = this.horizontalInside.color;
                t0$.strokeWidth = this.horizontalInside.width;
                t0$.style = ui.PaintingStyle.stroke;
                return t0$;
              })();
              path.reset();
              for (let y of rows) {
                path.moveTo(rect.left, dart.notNull(rect.top) + dart.notNull(y));
                path.lineTo(rect.right, dart.notNull(rect.top) + dart.notNull(y));
              }
              canvas.drawPath(path, paint);
              break;
            }
            case C1 || CT.C1:
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
      borders.paintBorder(canvas, rect, {top: this.top, right: this.right, bottom: this.bottom, left: this.left});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return table_border.TableBorder.is(other) && dart.equals(other.top, this.top) && dart.equals(other.right, this.right) && dart.equals(other.bottom, this.bottom) && dart.equals(other.left, this.left) && dart.equals(other.horizontalInside, this.horizontalInside) && dart.equals(other.verticalInside, this.verticalInside);
    }
    get hashCode() {
      return ui.hashValues(this.top, this.right, this.bottom, this.left, this.horizontalInside, this.verticalInside);
    }
    toString() {
      return "TableBorder(" + dart.str(this.top) + ", " + dart.str(this.right) + ", " + dart.str(this.bottom) + ", " + dart.str(this.left) + ", " + dart.str(this.horizontalInside) + ", " + dart.str(this.verticalInside) + ")";
    }
  };
  (table_border.TableBorder.new = function(opts) {
    let top = opts && 'top' in opts ? opts.top : C0 || CT.C0;
    if (top == null) dart.nullFailed(L0, 20, 10, "top");
    let right = opts && 'right' in opts ? opts.right : C0 || CT.C0;
    if (right == null) dart.nullFailed(L0, 21, 10, "right");
    let bottom = opts && 'bottom' in opts ? opts.bottom : C0 || CT.C0;
    if (bottom == null) dart.nullFailed(L0, 22, 10, "bottom");
    let left = opts && 'left' in opts ? opts.left : C0 || CT.C0;
    if (left == null) dart.nullFailed(L0, 23, 10, "left");
    let horizontalInside = opts && 'horizontalInside' in opts ? opts.horizontalInside : C0 || CT.C0;
    if (horizontalInside == null) dart.nullFailed(L0, 24, 10, "horizontalInside");
    let verticalInside = opts && 'verticalInside' in opts ? opts.verticalInside : C0 || CT.C0;
    if (verticalInside == null) dart.nullFailed(L0, 25, 10, "verticalInside");
    this[top$] = top;
    this[right$] = right;
    this[bottom$] = bottom;
    this[left$] = left;
    this[horizontalInside$] = horizontalInside;
    this[verticalInside$] = verticalInside;
    ;
  }).prototype = table_border.TableBorder.prototype;
  dart.addTypeTests(table_border.TableBorder);
  dart.addTypeCaches(table_border.TableBorder);
  dart.setMethodSignature(table_border.TableBorder, () => ({
    __proto__: dart.getMethods(table_border.TableBorder.__proto__),
    scale: dart.fnType(table_border.TableBorder, [core.double]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {}, {columns: core.Iterable$(core.double), rows: core.Iterable$(core.double)})
  }));
  dart.setGetterSignature(table_border.TableBorder, () => ({
    __proto__: dart.getGetters(table_border.TableBorder.__proto__),
    dimensions: edge_insets.EdgeInsets,
    isUniform: core.bool
  }));
  dart.setLibraryUri(table_border.TableBorder, L1);
  dart.setFieldSignature(table_border.TableBorder, () => ({
    __proto__: dart.getFields(table_border.TableBorder.__proto__),
    top: dart.finalFieldType(borders.BorderSide),
    right: dart.finalFieldType(borders.BorderSide),
    bottom: dart.finalFieldType(borders.BorderSide),
    left: dart.finalFieldType(borders.BorderSide),
    horizontalInside: dart.finalFieldType(borders.BorderSide),
    verticalInside: dart.finalFieldType(borders.BorderSide)
  }));
  dart.defineExtensionMethods(table_border.TableBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(table_border.TableBorder, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/rendering/table_border.dart", {
    "package:flutter/src/rendering/table_border.dart": table_border
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["table_border.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/table_border.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__table_border: table_border
  };
}));

//# sourceMappingURL=table_border.dart.lib.js.map
