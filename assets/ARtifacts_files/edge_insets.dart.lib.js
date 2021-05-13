define(['dart_sdk', 'packages/flutter/src/painting/basic_types.dart'], (function load__packages__flutter__src__painting__edge_insets_dart(dart_sdk, packages__flutter__src__painting__basic_types$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  var edge_insets = Object.create(dart.library);
  var $clamp = dartx.clamp;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $truncate = dartx.truncate;
  var $toDouble = dartx.toDouble;
  var $modulo = dartx['%'];
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/edge_insets.dart";
  var L1 = "package:flutter/src/painting/edge_insets.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.horizontal",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.vertical",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: edge_insets._MixedEdgeInsets.prototype,
        [_MixedEdgeInsets__bottom]: 1 / 0,
        [_MixedEdgeInsets__top]: 1 / 0,
        [_MixedEdgeInsets__end]: 1 / 0,
        [_MixedEdgeInsets__start]: 1 / 0,
        [_MixedEdgeInsets__right]: 1 / 0,
        [_MixedEdgeInsets__left]: 1 / 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [bottom$]: 0,
        [right$]: 0,
        [top$]: 0,
        [left$]: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name$]: "TextDirection.rtl",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name$]: "TextDirection.ltr",
        index: 1
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [bottom$0]: 0,
        [end$]: 0,
        [top$0]: 0,
        [start$]: 0
      });
    }
  }, false);
  var _left = dart.privateName(edge_insets, "_left");
  var _right = dart.privateName(edge_insets, "_right");
  var _start = dart.privateName(edge_insets, "_start");
  var _end = dart.privateName(edge_insets, "_end");
  var _top = dart.privateName(edge_insets, "_top");
  var _bottom = dart.privateName(edge_insets, "_bottom");
  var _name = dart.privateName(basic_types, "_name");
  var C0;
  var C1;
  var _MixedEdgeInsets__bottom = dart.privateName(edge_insets, "_MixedEdgeInsets._bottom");
  var _MixedEdgeInsets__top = dart.privateName(edge_insets, "_MixedEdgeInsets._top");
  var _MixedEdgeInsets__end = dart.privateName(edge_insets, "_MixedEdgeInsets._end");
  var _MixedEdgeInsets__start = dart.privateName(edge_insets, "_MixedEdgeInsets._start");
  var _MixedEdgeInsets__right = dart.privateName(edge_insets, "_MixedEdgeInsets._right");
  var _MixedEdgeInsets__left = dart.privateName(edge_insets, "_MixedEdgeInsets._left");
  var C2;
  edge_insets.EdgeInsetsGeometry = class EdgeInsetsGeometry extends core.Object {
    get isNonNegative() {
      return dart.notNull(this[_left]) >= 0.0 && dart.notNull(this[_right]) >= 0.0 && dart.notNull(this[_start]) >= 0.0 && dart.notNull(this[_end]) >= 0.0 && dart.notNull(this[_top]) >= 0.0 && dart.notNull(this[_bottom]) >= 0.0;
    }
    get horizontal() {
      return dart.notNull(this[_left]) + dart.notNull(this[_right]) + dart.notNull(this[_start]) + dart.notNull(this[_end]);
    }
    get vertical() {
      return dart.notNull(this[_top]) + dart.notNull(this[_bottom]);
    }
    along(axis) {
      if (axis == null) dart.nullFailed(L0, 67, 21, "axis");
      if (!(axis != null)) dart.assertFailed(null, L0, 68, 12, "axis != null");
      switch (axis) {
        case C0 || CT.C0:
        {
          return this.horizontal;
        }
        case C1 || CT.C1:
        {
          return this.vertical;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    get collapsedSize() {
      return new ui.Size.new(this.horizontal, this.vertical);
    }
    get flipped() {
      return new edge_insets._MixedEdgeInsets.fromLRSETB(this[_right], this[_left], this[_end], this[_start], this[_bottom], this[_top]);
    }
    inflateSize(size) {
      if (size == null) dart.nullFailed(L0, 92, 25, "size");
      return new ui.Size.new(dart.notNull(size.width) + dart.notNull(this.horizontal), dart.notNull(size.height) + dart.notNull(this.vertical));
    }
    deflateSize(size) {
      if (size == null) dart.nullFailed(L0, 108, 25, "size");
      return new ui.Size.new(dart.notNull(size.width) - dart.notNull(this.horizontal), dart.notNull(size.height) - dart.notNull(this.vertical));
    }
    subtract(other) {
      if (other == null) dart.nullFailed(L0, 128, 50, "other");
      return new edge_insets._MixedEdgeInsets.fromLRSETB(dart.notNull(this[_left]) - dart.notNull(other[_left]), dart.notNull(this[_right]) - dart.notNull(other[_right]), dart.notNull(this[_start]) - dart.notNull(other[_start]), dart.notNull(this[_end]) - dart.notNull(other[_end]), dart.notNull(this[_top]) - dart.notNull(other[_top]), dart.notNull(this[_bottom]) - dart.notNull(other[_bottom]));
    }
    add(other) {
      if (other == null) dart.nullFailed(L0, 150, 45, "other");
      return new edge_insets._MixedEdgeInsets.fromLRSETB(dart.notNull(this[_left]) + dart.notNull(other[_left]), dart.notNull(this[_right]) + dart.notNull(other[_right]), dart.notNull(this[_start]) + dart.notNull(other[_start]), dart.notNull(this[_end]) + dart.notNull(other[_end]), dart.notNull(this[_top]) + dart.notNull(other[_top]), dart.notNull(this[_bottom]) + dart.notNull(other[_bottom]));
    }
    clamp(min, max) {
      if (min == null) dart.nullFailed(L0, 163, 47, "min");
      if (max == null) dart.nullFailed(L0, 163, 71, "max");
      return new edge_insets._MixedEdgeInsets.fromLRSETB(this[_left][$clamp](min[_left], max[_left]), this[_right][$clamp](min[_right], max[_right]), this[_start][$clamp](min[_start], max[_start]), this[_end][$clamp](min[_end], max[_end]), this[_top][$clamp](min[_top], max[_top]), this[_bottom][$clamp](min[_bottom], max[_bottom]));
    }
    static lerp(a, b, t) {
      if (t == null) dart.nullFailed(L0, 219, 88, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 220, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b)['*'](t);
      if (b == null) return a['*'](1.0 - dart.notNull(t));
      if (edge_insets.EdgeInsets.is(a) && edge_insets.EdgeInsets.is(b)) return edge_insets.EdgeInsets.lerp(a, b, t);
      if (edge_insets.EdgeInsetsDirectional.is(a) && edge_insets.EdgeInsetsDirectional.is(b)) return edge_insets.EdgeInsetsDirectional.lerp(a, b, t);
      return new edge_insets._MixedEdgeInsets.fromLRSETB(dart.nullCheck(ui.lerpDouble(a[_left], b[_left], t)), dart.nullCheck(ui.lerpDouble(a[_right], b[_right], t)), dart.nullCheck(ui.lerpDouble(a[_start], b[_start], t)), dart.nullCheck(ui.lerpDouble(a[_end], b[_end], t)), dart.nullCheck(ui.lerpDouble(a[_top], b[_top], t)), dart.nullCheck(ui.lerpDouble(a[_bottom], b[_bottom], t)));
    }
    toString() {
      if (this[_start] === 0.0 && this[_end] === 0.0) {
        if (this[_left] === 0.0 && this[_right] === 0.0 && this[_top] === 0.0 && this[_bottom] === 0.0) return "EdgeInsets.zero";
        if (this[_left] == this[_right] && this[_right] == this[_top] && this[_top] == this[_bottom]) return "EdgeInsets.all(" + this[_left][$toStringAsFixed](1) + ")";
        return "EdgeInsets(" + this[_left][$toStringAsFixed](1) + ", " + this[_top][$toStringAsFixed](1) + ", " + this[_right][$toStringAsFixed](1) + ", " + this[_bottom][$toStringAsFixed](1) + ")";
      }
      if (this[_left] === 0.0 && this[_right] === 0.0) {
        return "EdgeInsetsDirectional(" + this[_start][$toStringAsFixed](1) + ", " + this[_top][$toStringAsFixed](1) + ", " + this[_end][$toStringAsFixed](1) + ", " + this[_bottom][$toStringAsFixed](1) + ")";
      }
      return "EdgeInsets(" + this[_left][$toStringAsFixed](1) + ", " + this[_top][$toStringAsFixed](1) + ", " + this[_right][$toStringAsFixed](1) + ", " + this[_bottom][$toStringAsFixed](1) + ")" + " + " + "EdgeInsetsDirectional(" + this[_start][$toStringAsFixed](1) + ", " + "0.0, " + this[_end][$toStringAsFixed](1) + ", " + "0.0)";
    }
    _equals(other) {
      if (other == null) return false;
      return edge_insets.EdgeInsetsGeometry.is(other) && other[_left] == this[_left] && other[_right] == this[_right] && other[_start] == this[_start] && other[_end] == this[_end] && other[_top] == this[_top] && other[_bottom] == this[_bottom];
    }
    get hashCode() {
      return ui.hashValues(this[_left], this[_right], this[_start], this[_end], this[_top], this[_bottom]);
    }
  };
  (edge_insets.EdgeInsetsGeometry.new = function() {
    ;
  }).prototype = edge_insets.EdgeInsetsGeometry.prototype;
  dart.addTypeTests(edge_insets.EdgeInsetsGeometry);
  dart.addTypeCaches(edge_insets.EdgeInsetsGeometry);
  dart.setMethodSignature(edge_insets.EdgeInsetsGeometry, () => ({
    __proto__: dart.getMethods(edge_insets.EdgeInsetsGeometry.__proto__),
    along: dart.fnType(core.double, [basic_types.Axis]),
    inflateSize: dart.fnType(ui.Size, [ui.Size]),
    deflateSize: dart.fnType(ui.Size, [ui.Size]),
    subtract: dart.fnType(edge_insets.EdgeInsetsGeometry, [edge_insets.EdgeInsetsGeometry]),
    add: dart.fnType(edge_insets.EdgeInsetsGeometry, [edge_insets.EdgeInsetsGeometry]),
    clamp: dart.fnType(edge_insets.EdgeInsetsGeometry, [edge_insets.EdgeInsetsGeometry, edge_insets.EdgeInsetsGeometry])
  }));
  dart.setGetterSignature(edge_insets.EdgeInsetsGeometry, () => ({
    __proto__: dart.getGetters(edge_insets.EdgeInsetsGeometry.__proto__),
    isNonNegative: core.bool,
    horizontal: core.double,
    vertical: core.double,
    collapsedSize: ui.Size,
    flipped: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(edge_insets.EdgeInsetsGeometry, L1);
  dart.defineExtensionMethods(edge_insets.EdgeInsetsGeometry, ['toString', '_equals']);
  dart.defineExtensionAccessors(edge_insets.EdgeInsetsGeometry, ['hashCode']);
  dart.defineLazy(edge_insets.EdgeInsetsGeometry, {
    /*edge_insets.EdgeInsetsGeometry.infinity*/get infinity() {
      return C2 || CT.C2;
    }
  }, false);
  var left$ = dart.privateName(edge_insets, "EdgeInsets.left");
  var top$ = dart.privateName(edge_insets, "EdgeInsets.top");
  var right$ = dart.privateName(edge_insets, "EdgeInsets.right");
  var bottom$ = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var C3;
  edge_insets.EdgeInsets = class EdgeInsets extends edge_insets.EdgeInsetsGeometry {
    get left() {
      return this[left$];
    }
    set left(value) {
      super.left = value;
    }
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
    get [_left]() {
      return this.left;
    }
    get [_top]() {
      return this.top;
    }
    get [_right]() {
      return this.right;
    }
    get [_bottom]() {
      return this.bottom;
    }
    get [_start]() {
      return 0.0;
    }
    get [_end]() {
      return 0.0;
    }
    get topLeft() {
      return new ui.Offset.new(this.left, this.top);
    }
    get topRight() {
      return new ui.Offset.new(-dart.notNull(this.right), this.top);
    }
    get bottomLeft() {
      return new ui.Offset.new(this.left, -dart.notNull(this.bottom));
    }
    get bottomRight() {
      return new ui.Offset.new(-dart.notNull(this.right), -dart.notNull(this.bottom));
    }
    get flipped() {
      return new edge_insets.EdgeInsets.fromLTRB(this.right, this.bottom, this.left, this.top);
    }
    inflateRect(rect) {
      if (rect == null) dart.nullFailed(L0, 471, 25, "rect");
      return new ui.Rect.fromLTRB(dart.notNull(rect.left) - dart.notNull(this.left), dart.notNull(rect.top) - dart.notNull(this.top), dart.notNull(rect.right) + dart.notNull(this.right), dart.notNull(rect.bottom) + dart.notNull(this.bottom));
    }
    deflateRect(rect) {
      if (rect == null) dart.nullFailed(L0, 488, 25, "rect");
      return new ui.Rect.fromLTRB(dart.notNull(rect.left) + dart.notNull(this.left), dart.notNull(rect.top) + dart.notNull(this.top), dart.notNull(rect.right) - dart.notNull(this.right), dart.notNull(rect.bottom) - dart.notNull(this.bottom));
    }
    subtract(other) {
      if (other == null) dart.nullFailed(L0, 493, 50, "other");
      if (edge_insets.EdgeInsets.is(other)) return this['-'](other);
      return super.subtract(other);
    }
    add(other) {
      if (other == null) dart.nullFailed(L0, 500, 45, "other");
      if (edge_insets.EdgeInsets.is(other)) return this['+'](other);
      return super.add(other);
    }
    clamp(min, max) {
      if (min == null) dart.nullFailed(L0, 507, 47, "min");
      if (max == null) dart.nullFailed(L0, 507, 71, "max");
      return new edge_insets.EdgeInsets.fromLTRB(this[_left][$clamp](min[_left], max[_left]), this[_top][$clamp](min[_top], max[_top]), this[_right][$clamp](min[_right], max[_right]), this[_bottom][$clamp](min[_bottom], max[_bottom]));
    }
    ['-'](other) {
      if (other == null) dart.nullFailed(L0, 517, 36, "other");
      return new edge_insets.EdgeInsets.fromLTRB(dart.notNull(this.left) - dart.notNull(other.left), dart.notNull(this.top) - dart.notNull(other.top), dart.notNull(this.right) - dart.notNull(other.right), dart.notNull(this.bottom) - dart.notNull(other.bottom));
    }
    ['+'](other) {
      if (other == null) dart.nullFailed(L0, 527, 36, "other");
      return new edge_insets.EdgeInsets.fromLTRB(dart.notNull(this.left) + dart.notNull(other.left), dart.notNull(this.top) + dart.notNull(other.top), dart.notNull(this.right) + dart.notNull(other.right), dart.notNull(this.bottom) + dart.notNull(other.bottom));
    }
    _negate() {
      return new edge_insets.EdgeInsets.fromLTRB(-dart.notNull(this.left), -dart.notNull(this.top), -dart.notNull(this.right), -dart.notNull(this.bottom));
    }
    ['*'](other) {
      if (other == null) dart.nullFailed(L0, 551, 32, "other");
      return new edge_insets.EdgeInsets.fromLTRB(dart.notNull(this.left) * dart.notNull(other), dart.notNull(this.top) * dart.notNull(other), dart.notNull(this.right) * dart.notNull(other), dart.notNull(this.bottom) * dart.notNull(other));
    }
    ['/'](other) {
      if (other == null) dart.nullFailed(L0, 562, 32, "other");
      return new edge_insets.EdgeInsets.fromLTRB(dart.notNull(this.left) / dart.notNull(other), dart.notNull(this.top) / dart.notNull(other), dart.notNull(this.right) / dart.notNull(other), dart.notNull(this.bottom) / dart.notNull(other));
    }
    ['~/'](other) {
      if (other == null) dart.nullFailed(L0, 573, 33, "other");
      return new edge_insets.EdgeInsets.fromLTRB((dart.notNull(this.left) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.top) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.right) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.bottom) / dart.notNull(other))[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      if (other == null) dart.nullFailed(L0, 584, 32, "other");
      return new edge_insets.EdgeInsets.fromLTRB(this.left[$modulo](other), this.top[$modulo](other), this.right[$modulo](other), this.bottom[$modulo](other));
    }
    static lerp(a, b, t) {
      if (t == null) dart.nullFailed(L0, 598, 64, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 599, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b)['*'](t);
      if (b == null) return a['*'](1.0 - dart.notNull(t));
      return new edge_insets.EdgeInsets.fromLTRB(dart.nullCheck(ui.lerpDouble(a.left, b.left, t)), dart.nullCheck(ui.lerpDouble(a.top, b.top, t)), dart.nullCheck(ui.lerpDouble(a.right, b.right, t)), dart.nullCheck(ui.lerpDouble(a.bottom, b.bottom, t)));
    }
    resolve(direction) {
      return this;
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1;
      let left = opts && 'left' in opts ? opts.left : null;
      let top = opts && 'top' in opts ? opts.top : null;
      let right = opts && 'right' in opts ? opts.right : null;
      let bottom = opts && 'bottom' in opts ? opts.bottom : null;
      return new edge_insets.EdgeInsets.only({left: (t0 = left, t0 == null ? this.left : t0), top: (t0$ = top, t0$ == null ? this.top : t0$), right: (t0$0 = right, t0$0 == null ? this.right : t0$0), bottom: (t0$1 = bottom, t0$1 == null ? this.bottom : t0$1)});
    }
  };
  (edge_insets.EdgeInsets.fromLTRB = function(left, top, right, bottom) {
    if (left == null) dart.nullFailed(L0, 343, 34, "left");
    if (top == null) dart.nullFailed(L0, 343, 45, "top");
    if (right == null) dart.nullFailed(L0, 343, 55, "right");
    if (bottom == null) dart.nullFailed(L0, 343, 67, "bottom");
    this[left$] = left;
    this[top$] = top;
    this[right$] = right;
    this[bottom$] = bottom;
    edge_insets.EdgeInsets.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsets.prototype;
  (edge_insets.EdgeInsets.all = function(value) {
    if (value == null) dart.nullFailed(L0, 355, 31, "value");
    this[left$] = value;
    this[top$] = value;
    this[right$] = value;
    this[bottom$] = value;
    edge_insets.EdgeInsets.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsets.prototype;
  (edge_insets.EdgeInsets.only = function(opts) {
    let left = opts && 'left' in opts ? opts.left : 0;
    if (left == null) dart.nullFailed(L0, 372, 10, "left");
    let top = opts && 'top' in opts ? opts.top : 0;
    if (top == null) dart.nullFailed(L0, 373, 10, "top");
    let right = opts && 'right' in opts ? opts.right : 0;
    if (right == null) dart.nullFailed(L0, 374, 10, "right");
    let bottom = opts && 'bottom' in opts ? opts.bottom : 0;
    if (bottom == null) dart.nullFailed(L0, 375, 10, "bottom");
    this[left$] = left;
    this[top$] = top;
    this[right$] = right;
    this[bottom$] = bottom;
    edge_insets.EdgeInsets.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsets.prototype;
  (edge_insets.EdgeInsets.symmetric = function(opts) {
    let vertical = opts && 'vertical' in opts ? opts.vertical : 0;
    if (vertical == null) dart.nullFailed(L0, 389, 12, "vertical");
    let horizontal = opts && 'horizontal' in opts ? opts.horizontal : 0;
    if (horizontal == null) dart.nullFailed(L0, 390, 12, "horizontal");
    this[left$] = horizontal;
    this[top$] = vertical;
    this[right$] = horizontal;
    this[bottom$] = vertical;
    edge_insets.EdgeInsets.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsets.prototype;
  (edge_insets.EdgeInsets.fromWindowPadding = function(padding, devicePixelRatio) {
    if (padding == null) dart.nullFailed(L0, 402, 49, "padding");
    if (devicePixelRatio == null) dart.nullFailed(L0, 402, 65, "devicePixelRatio");
    this[left$] = dart.notNull(padding.left) / dart.notNull(devicePixelRatio);
    this[top$] = dart.notNull(padding.top) / dart.notNull(devicePixelRatio);
    this[right$] = dart.notNull(padding.right) / dart.notNull(devicePixelRatio);
    this[bottom$] = dart.notNull(padding.bottom) / dart.notNull(devicePixelRatio);
    edge_insets.EdgeInsets.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsets.prototype;
  dart.addTypeTests(edge_insets.EdgeInsets);
  dart.addTypeCaches(edge_insets.EdgeInsets);
  dart.setMethodSignature(edge_insets.EdgeInsets, () => ({
    __proto__: dart.getMethods(edge_insets.EdgeInsets.__proto__),
    inflateRect: dart.fnType(ui.Rect, [ui.Rect]),
    deflateRect: dart.fnType(ui.Rect, [ui.Rect]),
    '-': dart.fnType(edge_insets.EdgeInsets, [edge_insets.EdgeInsets]),
    '+': dart.fnType(edge_insets.EdgeInsets, [edge_insets.EdgeInsets]),
    _negate: dart.fnType(edge_insets.EdgeInsets, []),
    '*': dart.fnType(edge_insets.EdgeInsets, [core.double]),
    '/': dart.fnType(edge_insets.EdgeInsets, [core.double]),
    '~/': dart.fnType(edge_insets.EdgeInsets, [core.double]),
    '%': dart.fnType(edge_insets.EdgeInsets, [core.double]),
    resolve: dart.fnType(edge_insets.EdgeInsets, [dart.nullable(ui.TextDirection)]),
    copyWith: dart.fnType(edge_insets.EdgeInsets, [], {bottom: dart.nullable(core.double), left: dart.nullable(core.double), right: dart.nullable(core.double), top: dart.nullable(core.double)}, {})
  }));
  dart.setGetterSignature(edge_insets.EdgeInsets, () => ({
    __proto__: dart.getGetters(edge_insets.EdgeInsets.__proto__),
    [_left]: core.double,
    [_top]: core.double,
    [_right]: core.double,
    [_bottom]: core.double,
    [_start]: core.double,
    [_end]: core.double,
    topLeft: ui.Offset,
    topRight: ui.Offset,
    bottomLeft: ui.Offset,
    bottomRight: ui.Offset,
    flipped: edge_insets.EdgeInsets
  }));
  dart.setLibraryUri(edge_insets.EdgeInsets, L1);
  dart.setFieldSignature(edge_insets.EdgeInsets, () => ({
    __proto__: dart.getFields(edge_insets.EdgeInsets.__proto__),
    left: dart.finalFieldType(core.double),
    top: dart.finalFieldType(core.double),
    right: dart.finalFieldType(core.double),
    bottom: dart.finalFieldType(core.double)
  }));
  dart.defineLazy(edge_insets.EdgeInsets, {
    /*edge_insets.EdgeInsets.zero*/get zero() {
      return C3 || CT.C3;
    }
  }, false);
  var _name$ = dart.privateName(ui, "_name");
  var C4;
  var C5;
  var start$ = dart.privateName(edge_insets, "EdgeInsetsDirectional.start");
  var top$0 = dart.privateName(edge_insets, "EdgeInsetsDirectional.top");
  var end$ = dart.privateName(edge_insets, "EdgeInsetsDirectional.end");
  var bottom$0 = dart.privateName(edge_insets, "EdgeInsetsDirectional.bottom");
  var C6;
  edge_insets.EdgeInsetsDirectional = class EdgeInsetsDirectional extends edge_insets.EdgeInsetsGeometry {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get top() {
      return this[top$0];
    }
    set top(value) {
      super.top = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get bottom() {
      return this[bottom$0];
    }
    set bottom(value) {
      super.bottom = value;
    }
    get [_start]() {
      return this.start;
    }
    get [_top]() {
      return this.top;
    }
    get [_end]() {
      return this.end;
    }
    get [_bottom]() {
      return this.bottom;
    }
    get [_left]() {
      return 0.0;
    }
    get [_right]() {
      return 0.0;
    }
    get isNonNegative() {
      return dart.notNull(this.start) >= 0.0 && dart.notNull(this.top) >= 0.0 && dart.notNull(this.end) >= 0.0 && dart.notNull(this.bottom) >= 0.0;
    }
    get flipped() {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(this.end, this.bottom, this.start, this.top);
    }
    subtract(other) {
      if (other == null) dart.nullFailed(L0, 724, 50, "other");
      if (edge_insets.EdgeInsetsDirectional.is(other)) return this['-'](other);
      return super.subtract(other);
    }
    add(other) {
      if (other == null) dart.nullFailed(L0, 731, 45, "other");
      if (edge_insets.EdgeInsetsDirectional.is(other)) return this['+'](other);
      return super.add(other);
    }
    ['-'](other) {
      if (other == null) dart.nullFailed(L0, 738, 58, "other");
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(dart.notNull(this.start) - dart.notNull(other.start), dart.notNull(this.top) - dart.notNull(other.top), dart.notNull(this.end) - dart.notNull(other.end), dart.notNull(this.bottom) - dart.notNull(other.bottom));
    }
    ['+'](other) {
      if (other == null) dart.nullFailed(L0, 748, 58, "other");
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(dart.notNull(this.start) + dart.notNull(other.start), dart.notNull(this.top) + dart.notNull(other.top), dart.notNull(this.end) + dart.notNull(other.end), dart.notNull(this.bottom) + dart.notNull(other.bottom));
    }
    _negate() {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(-dart.notNull(this.start), -dart.notNull(this.top), -dart.notNull(this.end), -dart.notNull(this.bottom));
    }
    ['*'](other) {
      if (other == null) dart.nullFailed(L0, 772, 43, "other");
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(dart.notNull(this.start) * dart.notNull(other), dart.notNull(this.top) * dart.notNull(other), dart.notNull(this.end) * dart.notNull(other), dart.notNull(this.bottom) * dart.notNull(other));
    }
    ['/'](other) {
      if (other == null) dart.nullFailed(L0, 783, 43, "other");
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(dart.notNull(this.start) / dart.notNull(other), dart.notNull(this.top) / dart.notNull(other), dart.notNull(this.end) / dart.notNull(other), dart.notNull(this.bottom) / dart.notNull(other));
    }
    ['~/'](other) {
      if (other == null) dart.nullFailed(L0, 794, 44, "other");
      return new edge_insets.EdgeInsetsDirectional.fromSTEB((dart.notNull(this.start) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.top) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.end) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.bottom) / dart.notNull(other))[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      if (other == null) dart.nullFailed(L0, 805, 43, "other");
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(this.start[$modulo](other), this.top[$modulo](other), this.end[$modulo](other), this.bottom[$modulo](other));
    }
    static lerp(a, b, t) {
      if (t == null) dart.nullFailed(L0, 823, 97, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 824, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b)['*'](t);
      if (b == null) return a['*'](1.0 - dart.notNull(t));
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(dart.nullCheck(ui.lerpDouble(a.start, b.start, t)), dart.nullCheck(ui.lerpDouble(a.top, b.top, t)), dart.nullCheck(ui.lerpDouble(a.end, b.end, t)), dart.nullCheck(ui.lerpDouble(a.bottom, b.bottom, t)));
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, L0, 841, 12, "direction != null");
      switch (dart.nullCheck(direction)) {
        case C4 || CT.C4:
        {
          return new edge_insets.EdgeInsets.fromLTRB(this.end, this.top, this.start, this.bottom);
        }
        case C5 || CT.C5:
        {
          return new edge_insets.EdgeInsets.fromLTRB(this.start, this.top, this.end, this.bottom);
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
  };
  (edge_insets.EdgeInsetsDirectional.fromSTEB = function(start, top, end, bottom) {
    if (start == null) dart.nullFailed(L0, 647, 45, "start");
    if (top == null) dart.nullFailed(L0, 647, 57, "top");
    if (end == null) dart.nullFailed(L0, 647, 67, "end");
    if (bottom == null) dart.nullFailed(L0, 647, 77, "bottom");
    this[start$] = start;
    this[top$0] = top;
    this[end$] = end;
    this[bottom$0] = bottom;
    edge_insets.EdgeInsetsDirectional.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsetsDirectional.prototype;
  (edge_insets.EdgeInsetsDirectional.only = function(opts) {
    let start = opts && 'start' in opts ? opts.start : 0;
    if (start == null) dart.nullFailed(L0, 660, 10, "start");
    let top = opts && 'top' in opts ? opts.top : 0;
    if (top == null) dart.nullFailed(L0, 661, 10, "top");
    let end = opts && 'end' in opts ? opts.end : 0;
    if (end == null) dart.nullFailed(L0, 662, 10, "end");
    let bottom = opts && 'bottom' in opts ? opts.bottom : 0;
    if (bottom == null) dart.nullFailed(L0, 663, 10, "bottom");
    this[start$] = start;
    this[top$0] = top;
    this[end$] = end;
    this[bottom$0] = bottom;
    edge_insets.EdgeInsetsDirectional.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsetsDirectional.prototype;
  dart.addTypeTests(edge_insets.EdgeInsetsDirectional);
  dart.addTypeCaches(edge_insets.EdgeInsetsDirectional);
  dart.setMethodSignature(edge_insets.EdgeInsetsDirectional, () => ({
    __proto__: dart.getMethods(edge_insets.EdgeInsetsDirectional.__proto__),
    '-': dart.fnType(edge_insets.EdgeInsetsDirectional, [edge_insets.EdgeInsetsDirectional]),
    '+': dart.fnType(edge_insets.EdgeInsetsDirectional, [edge_insets.EdgeInsetsDirectional]),
    _negate: dart.fnType(edge_insets.EdgeInsetsDirectional, []),
    '*': dart.fnType(edge_insets.EdgeInsetsDirectional, [core.double]),
    '/': dart.fnType(edge_insets.EdgeInsetsDirectional, [core.double]),
    '~/': dart.fnType(edge_insets.EdgeInsetsDirectional, [core.double]),
    '%': dart.fnType(edge_insets.EdgeInsetsDirectional, [core.double]),
    resolve: dart.fnType(edge_insets.EdgeInsets, [dart.nullable(ui.TextDirection)])
  }));
  dart.setGetterSignature(edge_insets.EdgeInsetsDirectional, () => ({
    __proto__: dart.getGetters(edge_insets.EdgeInsetsDirectional.__proto__),
    [_start]: core.double,
    [_top]: core.double,
    [_end]: core.double,
    [_bottom]: core.double,
    [_left]: core.double,
    [_right]: core.double,
    flipped: edge_insets.EdgeInsetsDirectional
  }));
  dart.setLibraryUri(edge_insets.EdgeInsetsDirectional, L1);
  dart.setFieldSignature(edge_insets.EdgeInsetsDirectional, () => ({
    __proto__: dart.getFields(edge_insets.EdgeInsetsDirectional.__proto__),
    start: dart.finalFieldType(core.double),
    top: dart.finalFieldType(core.double),
    end: dart.finalFieldType(core.double),
    bottom: dart.finalFieldType(core.double)
  }));
  dart.defineLazy(edge_insets.EdgeInsetsDirectional, {
    /*edge_insets.EdgeInsetsDirectional.zero*/get zero() {
      return C6 || CT.C6;
    }
  }, false);
  edge_insets._MixedEdgeInsets = class _MixedEdgeInsets extends edge_insets.EdgeInsetsGeometry {
    get [_left]() {
      return this[_left$];
    }
    set [_left](value) {
      super[_left] = value;
    }
    get [_right]() {
      return this[_right$];
    }
    set [_right](value) {
      super[_right] = value;
    }
    get [_start]() {
      return this[_start$];
    }
    set [_start](value) {
      super[_start] = value;
    }
    get [_end]() {
      return this[_end$];
    }
    set [_end](value) {
      super[_end] = value;
    }
    get [_top]() {
      return this[_top$];
    }
    set [_top](value) {
      super[_top] = value;
    }
    get [_bottom]() {
      return this[_bottom$];
    }
    set [_bottom](value) {
      super[_bottom] = value;
    }
    get isNonNegative() {
      return dart.notNull(this[_left]) >= 0.0 && dart.notNull(this[_right]) >= 0.0 && dart.notNull(this[_start]) >= 0.0 && dart.notNull(this[_end]) >= 0.0 && dart.notNull(this[_top]) >= 0.0 && dart.notNull(this[_bottom]) >= 0.0;
    }
    _negate() {
      return new edge_insets._MixedEdgeInsets.fromLRSETB(-dart.notNull(this[_left]), -dart.notNull(this[_right]), -dart.notNull(this[_start]), -dart.notNull(this[_end]), -dart.notNull(this[_top]), -dart.notNull(this[_bottom]));
    }
    ['*'](other) {
      if (other == null) dart.nullFailed(L0, 895, 38, "other");
      return new edge_insets._MixedEdgeInsets.fromLRSETB(dart.notNull(this[_left]) * dart.notNull(other), dart.notNull(this[_right]) * dart.notNull(other), dart.notNull(this[_start]) * dart.notNull(other), dart.notNull(this[_end]) * dart.notNull(other), dart.notNull(this[_top]) * dart.notNull(other), dart.notNull(this[_bottom]) * dart.notNull(other));
    }
    ['/'](other) {
      if (other == null) dart.nullFailed(L0, 907, 38, "other");
      return new edge_insets._MixedEdgeInsets.fromLRSETB(dart.notNull(this[_left]) / dart.notNull(other), dart.notNull(this[_right]) / dart.notNull(other), dart.notNull(this[_start]) / dart.notNull(other), dart.notNull(this[_end]) / dart.notNull(other), dart.notNull(this[_top]) / dart.notNull(other), dart.notNull(this[_bottom]) / dart.notNull(other));
    }
    ['~/'](other) {
      if (other == null) dart.nullFailed(L0, 919, 39, "other");
      return new edge_insets._MixedEdgeInsets.fromLRSETB((dart.notNull(this[_left]) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this[_right]) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this[_start]) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this[_end]) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this[_top]) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this[_bottom]) / dart.notNull(other))[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      if (other == null) dart.nullFailed(L0, 931, 38, "other");
      return new edge_insets._MixedEdgeInsets.fromLRSETB(this[_left][$modulo](other), this[_right][$modulo](other), this[_start][$modulo](other), this[_end][$modulo](other), this[_top][$modulo](other), this[_bottom][$modulo](other));
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, L0, 944, 12, "direction != null");
      switch (dart.nullCheck(direction)) {
        case C4 || CT.C4:
        {
          return new edge_insets.EdgeInsets.fromLTRB(dart.notNull(this[_end]) + dart.notNull(this[_left]), this[_top], dart.notNull(this[_start]) + dart.notNull(this[_right]), this[_bottom]);
        }
        case C5 || CT.C5:
        {
          return new edge_insets.EdgeInsets.fromLTRB(dart.notNull(this[_start]) + dart.notNull(this[_left]), this[_top], dart.notNull(this[_end]) + dart.notNull(this[_right]), this[_bottom]);
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
  };
  (edge_insets._MixedEdgeInsets.fromLRSETB = function(_left, _right, _start, _end, _top, _bottom) {
    if (_left == null) dart.nullFailed(L0, 852, 42, "_left");
    if (_right == null) dart.nullFailed(L0, 852, 54, "_right");
    if (_start == null) dart.nullFailed(L0, 852, 67, "_start");
    if (_end == null) dart.nullFailed(L0, 852, 80, "_end");
    if (_top == null) dart.nullFailed(L0, 852, 91, "_top");
    if (_bottom == null) dart.nullFailed(L0, 852, 102, "_bottom");
    this[_left$] = _left;
    this[_right$] = _right;
    this[_start$] = _start;
    this[_end$] = _end;
    this[_top$] = _top;
    this[_bottom$] = _bottom;
    edge_insets._MixedEdgeInsets.__proto__.new.call(this);
    ;
  }).prototype = edge_insets._MixedEdgeInsets.prototype;
  dart.addTypeTests(edge_insets._MixedEdgeInsets);
  dart.addTypeCaches(edge_insets._MixedEdgeInsets);
  const _left$ = _MixedEdgeInsets__left;
  const _right$ = _MixedEdgeInsets__right;
  const _start$ = _MixedEdgeInsets__start;
  const _end$ = _MixedEdgeInsets__end;
  const _top$ = _MixedEdgeInsets__top;
  const _bottom$ = _MixedEdgeInsets__bottom;
  dart.setMethodSignature(edge_insets._MixedEdgeInsets, () => ({
    __proto__: dart.getMethods(edge_insets._MixedEdgeInsets.__proto__),
    _negate: dart.fnType(edge_insets._MixedEdgeInsets, []),
    '*': dart.fnType(edge_insets._MixedEdgeInsets, [core.double]),
    '/': dart.fnType(edge_insets._MixedEdgeInsets, [core.double]),
    '~/': dart.fnType(edge_insets._MixedEdgeInsets, [core.double]),
    '%': dart.fnType(edge_insets._MixedEdgeInsets, [core.double]),
    resolve: dart.fnType(edge_insets.EdgeInsets, [dart.nullable(ui.TextDirection)])
  }));
  dart.setLibraryUri(edge_insets._MixedEdgeInsets, L1);
  dart.setFieldSignature(edge_insets._MixedEdgeInsets, () => ({
    __proto__: dart.getFields(edge_insets._MixedEdgeInsets.__proto__),
    [_left]: dart.finalFieldType(core.double),
    [_right]: dart.finalFieldType(core.double),
    [_start]: dart.finalFieldType(core.double),
    [_end]: dart.finalFieldType(core.double),
    [_top]: dart.finalFieldType(core.double),
    [_bottom]: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/flutter/src/painting/edge_insets.dart", {
    "package:flutter/src/painting/edge_insets.dart": edge_insets
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["edge_insets.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/edge_insets.dart.lib.js"}');
  // Exports:
  return {
    src__painting__edge_insets: edge_insets
  };
}));

//# sourceMappingURL=edge_insets.dart.lib.js.map
