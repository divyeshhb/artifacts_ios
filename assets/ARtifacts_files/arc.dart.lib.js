define(['dart_sdk', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/animation/listener_helpers.dart'], (function load__packages__flutter__src__material__arc_dart(dart_sdk, packages__flutter__src__foundation__object$46dart, packages__flutter__src__animation__listener_helpers$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  var arc = Object.create(dart.library);
  var $abs = dartx.abs;
  var $sign = dartx.sign;
  dart._checkModuleNullSafetyMode(false);
  var VoidTodouble = () => (VoidTodouble = dart.constFn(dart.fnType(core.double, [])))();
  var OffsetN = () => (OffsetN = dart.constFn(dart.nullable(ui.Offset)))();
  var _CornerIdL = () => (_CornerIdL = dart.constFn(dart.legacy(arc._CornerId)))();
  var _DiagonalTodouble = () => (_DiagonalTodouble = dart.constFn(dart.fnType(core.double, [arc._Diagonal])))();
  var RectN = () => (RectN = dart.constFn(dart.nullable(ui.Rect)))();
  var _DiagonalL = () => (_DiagonalL = dart.constFn(dart.legacy(arc._Diagonal)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/material/arc.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/arc.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: arc._CornerId.prototype,
        [_name$]: "_CornerId.topLeft",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: arc._CornerId.prototype,
        [_name$]: "_CornerId.topRight",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: arc._CornerId.prototype,
        [_name$]: "_CornerId.bottomLeft",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: arc._CornerId.prototype,
        [_name$]: "_CornerId.bottomRight",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], _CornerIdL());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: arc._Diagonal.prototype,
        [endId$]: C3 || CT.C3,
        [beginId$]: C0 || CT.C0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: arc._Diagonal.prototype,
        [endId$]: C0 || CT.C0,
        [beginId$]: C3 || CT.C3
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: arc._Diagonal.prototype,
        [endId$]: C2 || CT.C2,
        [beginId$]: C1 || CT.C1
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: arc._Diagonal.prototype,
        [endId$]: C1 || CT.C1,
        [beginId$]: C2 || CT.C2
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], _DiagonalL());
    }
  }, false);
  var _dirty = dart.privateName(arc, "_dirty");
  var _center = dart.privateName(arc, "_center");
  var _radius = dart.privateName(arc, "_radius");
  var _beginAngle = dart.privateName(arc, "_beginAngle");
  var _endAngle = dart.privateName(arc, "_endAngle");
  var _initialize = dart.privateName(arc, "_initialize");
  arc.MaterialPointArcTween = class MaterialPointArcTween extends tween.Tween$(ui.Offset) {
    [_initialize]() {
      if (!(this.begin != null)) dart.assertFailed(null, L0, 46, 12, "this.begin != null");
      if (!(this.end != null)) dart.assertFailed(null, L0, 47, 12, "this.end != null");
      let begin = dart.nullCheck(this.begin);
      let end = dart.nullCheck(this.end);
      let delta = end['-'](begin);
      let deltaX = delta.dx[$abs]();
      let deltaY = delta.dy[$abs]();
      let distanceFromAtoB = delta.distance;
      let c = new ui.Offset.new(end.dx, begin.dy);
      const sweepAngle = () => {
        return 2.0 * math.asin(dart.notNull(distanceFromAtoB) / (2.0 * dart.nullCheck(this[_radius])));
      };
      dart.fn(sweepAngle, VoidTodouble());
      if (deltaX > 2 && deltaY > 2) {
        if (deltaX < deltaY) {
          this[_radius] = dart.notNull(distanceFromAtoB) * dart.notNull(distanceFromAtoB) / dart.notNull(c['-'](begin).distance) / 2.0;
          this[_center] = new ui.Offset.new(dart.notNull(end.dx) + dart.nullCheck(this[_radius]) * (dart.notNull(begin.dx) - dart.notNull(end.dx))[$sign], end.dy);
          if (dart.notNull(begin.dx) < dart.notNull(end.dx)) {
            this[_beginAngle] = dart.notNull(sweepAngle()) * (dart.notNull(begin.dy) - dart.notNull(end.dy))[$sign];
            this[_endAngle] = 0.0;
          } else {
            this[_beginAngle] = 3.141592653589793 + dart.notNull(sweepAngle()) * (dart.notNull(end.dy) - dart.notNull(begin.dy))[$sign];
            this[_endAngle] = 3.141592653589793;
          }
        } else {
          this[_radius] = dart.notNull(distanceFromAtoB) * dart.notNull(distanceFromAtoB) / dart.notNull(c['-'](end).distance) / 2.0;
          this[_center] = new ui.Offset.new(begin.dx, dart.notNull(begin.dy) + (dart.notNull(end.dy) - dart.notNull(begin.dy))[$sign] * dart.nullCheck(this[_radius]));
          if (dart.notNull(begin.dy) < dart.notNull(end.dy)) {
            this[_beginAngle] = -3.141592653589793 / 2.0;
            this[_endAngle] = dart.nullCheck(this[_beginAngle]) + dart.notNull(sweepAngle()) * (dart.notNull(end.dx) - dart.notNull(begin.dx))[$sign];
          } else {
            this[_beginAngle] = 3.141592653589793 / 2.0;
            this[_endAngle] = dart.nullCheck(this[_beginAngle]) + dart.notNull(sweepAngle()) * (dart.notNull(begin.dx) - dart.notNull(end.dx))[$sign];
          }
        }
        if (!(this[_beginAngle] != null)) dart.assertFailed(null, L0, 83, 14, "_beginAngle != null");
        if (!(this[_endAngle] != null)) dart.assertFailed(null, L0, 84, 14, "_endAngle != null");
      } else {
        this[_beginAngle] = null;
        this[_endAngle] = null;
      }
      this[_dirty] = false;
    }
    get center() {
      if (this.begin == null || this.end == null) return null;
      if (dart.test(this[_dirty])) this[_initialize]();
      return this[_center];
    }
    get radius() {
      if (this.begin == null || this.end == null) return null;
      if (dart.test(this[_dirty])) this[_initialize]();
      return this[_radius];
    }
    get beginAngle() {
      if (this.begin == null || this.end == null) return null;
      if (dart.test(this[_dirty])) this[_initialize]();
      return this[_beginAngle];
    }
    get endAngle() {
      if (this.begin == null || this.end == null) return null;
      if (dart.test(this[_dirty])) this[_initialize]();
      return this[_beginAngle];
    }
    set begin(value) {
      OffsetN().as(value);
      if (!dart.equals(value, this.begin)) {
        super.begin = value;
        this[_dirty] = true;
      }
    }
    get begin() {
      return super.begin;
    }
    set end(value) {
      OffsetN().as(value);
      if (!dart.equals(value, this.end)) {
        super.end = value;
        this[_dirty] = true;
      }
    }
    get end() {
      return super.end;
    }
    lerp(t) {
      if (t == null) dart.nullFailed(L0, 159, 22, "t");
      if (dart.test(this[_dirty])) this[_initialize]();
      if (t === 0.0) return dart.nullCheck(this.begin);
      if (t === 1.0) return dart.nullCheck(this.end);
      if (this[_beginAngle] == null || this[_endAngle] == null) return dart.nullCheck(ui.Offset.lerp(this.begin, this.end, t));
      let angle = dart.nullCheck(ui.lerpDouble(this[_beginAngle], this[_endAngle], t));
      let x = math.cos(angle) * dart.nullCheck(this[_radius]);
      let y = math.sin(angle) * dart.nullCheck(this[_radius]);
      return dart.nullCheck(this[_center])['+'](new ui.Offset.new(x, y));
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "MaterialPointArcTween")) + "(" + dart.str(this.begin) + " → " + dart.str(this.end) + "; center=" + dart.str(this.center) + ", radius=" + dart.str(this.radius) + ", beginAngle=" + dart.str(this.beginAngle) + ", endAngle=" + dart.str(this.endAngle) + ")";
    }
  };
  (arc.MaterialPointArcTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    this[_dirty] = true;
    this[_center] = null;
    this[_radius] = null;
    this[_beginAngle] = null;
    this[_endAngle] = null;
    arc.MaterialPointArcTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = arc.MaterialPointArcTween.prototype;
  dart.addTypeTests(arc.MaterialPointArcTween);
  dart.addTypeCaches(arc.MaterialPointArcTween);
  dart.setMethodSignature(arc.MaterialPointArcTween, () => ({
    __proto__: dart.getMethods(arc.MaterialPointArcTween.__proto__),
    [_initialize]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(arc.MaterialPointArcTween, () => ({
    __proto__: dart.getGetters(arc.MaterialPointArcTween.__proto__),
    center: dart.nullable(ui.Offset),
    radius: dart.nullable(core.double),
    beginAngle: dart.nullable(core.double),
    endAngle: dart.nullable(core.double)
  }));
  dart.setSetterSignature(arc.MaterialPointArcTween, () => ({
    __proto__: dart.getSetters(arc.MaterialPointArcTween.__proto__),
    begin: dart.nullable(core.Object),
    end: dart.nullable(core.Object)
  }));
  dart.setLibraryUri(arc.MaterialPointArcTween, L1);
  dart.setFieldSignature(arc.MaterialPointArcTween, () => ({
    __proto__: dart.getFields(arc.MaterialPointArcTween.__proto__),
    [_dirty]: dart.fieldType(core.bool),
    [_center]: dart.fieldType(dart.nullable(ui.Offset)),
    [_radius]: dart.fieldType(dart.nullable(core.double)),
    [_beginAngle]: dart.fieldType(dart.nullable(core.double)),
    [_endAngle]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(arc.MaterialPointArcTween, ['toString']);
  var _name$ = dart.privateName(arc, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  arc._CornerId = class _CornerId extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (arc._CornerId.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 180, 6, "index");
    if (_name == null) dart.nullFailed(L0, 180, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = arc._CornerId.prototype;
  dart.addTypeTests(arc._CornerId);
  dart.addTypeCaches(arc._CornerId);
  dart.setLibraryUri(arc._CornerId, L1);
  dart.setFieldSignature(arc._CornerId, () => ({
    __proto__: dart.getFields(arc._CornerId.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(arc._CornerId, ['toString']);
  arc._CornerId.topLeft = C0 || CT.C0;
  arc._CornerId.topRight = C1 || CT.C1;
  arc._CornerId.bottomLeft = C2 || CT.C2;
  arc._CornerId.bottomRight = C3 || CT.C3;
  arc._CornerId.values = C4 || CT.C4;
  var beginId$ = dart.privateName(arc, "_Diagonal.beginId");
  var endId$ = dart.privateName(arc, "_Diagonal.endId");
  arc._Diagonal = class _Diagonal extends core.Object {
    get beginId() {
      return this[beginId$];
    }
    set beginId(value) {
      super.beginId = value;
    }
    get endId() {
      return this[endId$];
    }
    set endId(value) {
      super.endId = value;
    }
  };
  (arc._Diagonal.new = function(beginId, endId) {
    if (beginId == null) dart.nullFailed(L0, 188, 24, "beginId");
    if (endId == null) dart.nullFailed(L0, 188, 38, "endId");
    this[beginId$] = beginId;
    this[endId$] = endId;
    ;
  }).prototype = arc._Diagonal.prototype;
  dart.addTypeTests(arc._Diagonal);
  dart.addTypeCaches(arc._Diagonal);
  dart.setLibraryUri(arc._Diagonal, L1);
  dart.setFieldSignature(arc._Diagonal, () => ({
    __proto__: dart.getFields(arc._Diagonal.__proto__),
    beginId: dart.finalFieldType(arc._CornerId),
    endId: dart.finalFieldType(arc._CornerId)
  }));
  var __MaterialRectArcTween__beginArc = dart.privateName(arc, "_#MaterialRectArcTween#_beginArc");
  var __MaterialRectArcTween__beginArc_isSet = dart.privateName(arc, "_#MaterialRectArcTween#_beginArc#isSet");
  var __MaterialRectArcTween__endArc = dart.privateName(arc, "_#MaterialRectArcTween#_endArc");
  var __MaterialRectArcTween__endArc_isSet = dart.privateName(arc, "_#MaterialRectArcTween#_endArc#isSet");
  var _diagonalSupport = dart.privateName(arc, "_diagonalSupport");
  var _beginArc = dart.privateName(arc, "_beginArc");
  var _cornerFor = dart.privateName(arc, "_cornerFor");
  var _endArc = dart.privateName(arc, "_endArc");
  arc.MaterialRectArcTween = class MaterialRectArcTween extends tween.RectTween {
    [_initialize]() {
      if (!(this.begin != null)) dart.assertFailed(null, L0, 249, 12, "begin != null");
      if (!(this.end != null)) dart.assertFailed(null, L0, 250, 12, "end != null");
      let centersVector = dart.nullCheck(this.end).center['-'](dart.nullCheck(this.begin).center);
      let diagonal = arc._maxBy(arc._Diagonal, arc._allDiagonals, dart.fn(d => {
        if (d == null) dart.nullFailed(L0, 252, 76, "d");
        return this[_diagonalSupport](centersVector, d);
      }, _DiagonalTodouble()));
      this[_beginArc] = new arc.MaterialPointArcTween.new({begin: this[_cornerFor](dart.nullCheck(this.begin), diagonal.beginId), end: this[_cornerFor](dart.nullCheck(this.end), diagonal.beginId)});
      this[_endArc] = new arc.MaterialPointArcTween.new({begin: this[_cornerFor](dart.nullCheck(this.begin), diagonal.endId), end: this[_cornerFor](dart.nullCheck(this.end), diagonal.endId)});
      this[_dirty] = false;
    }
    [_diagonalSupport](centersVector, diagonal) {
      if (centersVector == null) dart.nullFailed(L0, 264, 34, "centersVector");
      if (diagonal == null) dart.nullFailed(L0, 264, 59, "diagonal");
      let delta = this[_cornerFor](dart.nullCheck(this.begin), diagonal.endId)['-'](this[_cornerFor](dart.nullCheck(this.begin), diagonal.beginId));
      let length = delta.distance;
      return dart.notNull(centersVector.dx) * dart.notNull(delta.dx) / dart.notNull(length) + dart.notNull(centersVector.dy) * dart.notNull(delta.dy) / dart.notNull(length);
    }
    [_cornerFor](rect, id) {
      if (rect == null) dart.nullFailed(L0, 270, 26, "rect");
      if (id == null) dart.nullFailed(L0, 270, 42, "id");
      switch (id) {
        case C0 || CT.C0:
        {
          return rect.topLeft;
        }
        case C1 || CT.C1:
        {
          return rect.topRight;
        }
        case C2 || CT.C2:
        {
          return rect.bottomLeft;
        }
        case C3 || CT.C3:
        {
          return rect.bottomRight;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    get beginArc() {
      if (this.begin == null) return null;
      if (dart.test(this[_dirty])) this[_initialize]();
      return this[_beginArc];
    }
    get [_beginArc]() {
      let t0;
      return dart.test(this[__MaterialRectArcTween__beginArc_isSet]) ? (t0 = this[__MaterialRectArcTween__beginArc], t0) : dart.throw(new _internal.LateError.fieldNI("_beginArc"));
    }
    set [_beginArc](t0) {
      if (t0 == null) dart.nullFailed(L0, 288, 30, "null");
      this[__MaterialRectArcTween__beginArc_isSet] = true;
      this[__MaterialRectArcTween__beginArc] = t0;
    }
    get endArc() {
      if (this.end == null) return null;
      if (dart.test(this[_dirty])) this[_initialize]();
      return this[_endArc];
    }
    get [_endArc]() {
      let t1;
      return dart.test(this[__MaterialRectArcTween__endArc_isSet]) ? (t1 = this[__MaterialRectArcTween__endArc], t1) : dart.throw(new _internal.LateError.fieldNI("_endArc"));
    }
    set [_endArc](t1) {
      if (t1 == null) dart.nullFailed(L0, 299, 30, "null");
      this[__MaterialRectArcTween__endArc_isSet] = true;
      this[__MaterialRectArcTween__endArc] = t1;
    }
    set begin(value) {
      RectN().as(value);
      if (!dart.equals(value, this.begin)) {
        super.begin = value;
        this[_dirty] = true;
      }
    }
    get begin() {
      return super.begin;
    }
    set end(value) {
      RectN().as(value);
      if (!dart.equals(value, this.end)) {
        super.end = value;
        this[_dirty] = true;
      }
    }
    get end() {
      return super.end;
    }
    lerp(t) {
      if (t == null) dart.nullFailed(L0, 318, 20, "t");
      if (dart.test(this[_dirty])) this[_initialize]();
      if (t === 0.0) return dart.nullCheck(this.begin);
      if (t === 1.0) return dart.nullCheck(this.end);
      return new ui.Rect.fromPoints(this[_beginArc].lerp(t), this[_endArc].lerp(t));
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "MaterialRectArcTween")) + "(" + dart.str(this.begin) + " → " + dart.str(this.end) + "; beginArc=" + dart.str(this.beginArc) + ", endArc=" + dart.str(this.endArc) + ")";
    }
  };
  (arc.MaterialRectArcTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    this[_dirty] = true;
    this[__MaterialRectArcTween__beginArc] = null;
    this[__MaterialRectArcTween__beginArc_isSet] = false;
    this[__MaterialRectArcTween__endArc] = null;
    this[__MaterialRectArcTween__endArc_isSet] = false;
    arc.MaterialRectArcTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = arc.MaterialRectArcTween.prototype;
  dart.addTypeTests(arc.MaterialRectArcTween);
  dart.addTypeCaches(arc.MaterialRectArcTween);
  dart.setMethodSignature(arc.MaterialRectArcTween, () => ({
    __proto__: dart.getMethods(arc.MaterialRectArcTween.__proto__),
    [_initialize]: dart.fnType(dart.void, []),
    [_diagonalSupport]: dart.fnType(core.double, [ui.Offset, arc._Diagonal]),
    [_cornerFor]: dart.fnType(ui.Offset, [ui.Rect, arc._CornerId]),
    lerp: dart.fnType(ui.Rect, [core.double])
  }));
  dart.setGetterSignature(arc.MaterialRectArcTween, () => ({
    __proto__: dart.getGetters(arc.MaterialRectArcTween.__proto__),
    beginArc: dart.nullable(arc.MaterialPointArcTween),
    [_beginArc]: arc.MaterialPointArcTween,
    endArc: dart.nullable(arc.MaterialPointArcTween),
    [_endArc]: arc.MaterialPointArcTween
  }));
  dart.setSetterSignature(arc.MaterialRectArcTween, () => ({
    __proto__: dart.getSetters(arc.MaterialRectArcTween.__proto__),
    [_beginArc]: arc.MaterialPointArcTween,
    [_endArc]: arc.MaterialPointArcTween,
    begin: dart.nullable(core.Object),
    end: dart.nullable(core.Object)
  }));
  dart.setLibraryUri(arc.MaterialRectArcTween, L1);
  dart.setFieldSignature(arc.MaterialRectArcTween, () => ({
    __proto__: dart.getFields(arc.MaterialRectArcTween.__proto__),
    [_dirty]: dart.fieldType(core.bool),
    [__MaterialRectArcTween__beginArc]: dart.fieldType(dart.nullable(arc.MaterialPointArcTween)),
    [__MaterialRectArcTween__beginArc_isSet]: dart.fieldType(core.bool),
    [__MaterialRectArcTween__endArc]: dart.fieldType(dart.nullable(arc.MaterialPointArcTween)),
    [__MaterialRectArcTween__endArc_isSet]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(arc.MaterialRectArcTween, ['toString']);
  var __MaterialRectCenterArcTween__centerArc = dart.privateName(arc, "_#MaterialRectCenterArcTween#_centerArc");
  var __MaterialRectCenterArcTween__centerArc_isSet = dart.privateName(arc, "_#MaterialRectCenterArcTween#_centerArc#isSet");
  var _centerArc = dart.privateName(arc, "_centerArc");
  arc.MaterialRectCenterArcTween = class MaterialRectCenterArcTween extends tween.RectTween {
    [_initialize]() {
      if (!(this.begin != null)) dart.assertFailed(null, L0, 364, 12, "begin != null");
      if (!(this.end != null)) dart.assertFailed(null, L0, 365, 12, "end != null");
      this[_centerArc] = new arc.MaterialPointArcTween.new({begin: dart.nullCheck(this.begin).center, end: dart.nullCheck(this.end).center});
      this[_dirty] = false;
    }
    get centerArc() {
      if (this.begin == null || this.end == null) return null;
      if (dart.test(this[_dirty])) this[_initialize]();
      return this[_centerArc];
    }
    get [_centerArc]() {
      let t2;
      return dart.test(this[__MaterialRectCenterArcTween__centerArc_isSet]) ? (t2 = this[__MaterialRectCenterArcTween__centerArc], t2) : dart.throw(new _internal.LateError.fieldNI("_centerArc"));
    }
    set [_centerArc](t2) {
      if (t2 == null) dart.nullFailed(L0, 382, 30, "null");
      this[__MaterialRectCenterArcTween__centerArc_isSet] = true;
      this[__MaterialRectCenterArcTween__centerArc] = t2;
    }
    set begin(value) {
      RectN().as(value);
      if (!dart.equals(value, this.begin)) {
        super.begin = value;
        this[_dirty] = true;
      }
    }
    get begin() {
      return super.begin;
    }
    set end(value) {
      RectN().as(value);
      if (!dart.equals(value, this.end)) {
        super.end = value;
        this[_dirty] = true;
      }
    }
    get end() {
      return super.end;
    }
    lerp(t) {
      if (t == null) dart.nullFailed(L0, 401, 20, "t");
      if (dart.test(this[_dirty])) this[_initialize]();
      if (t === 0.0) return dart.nullCheck(this.begin);
      if (t === 1.0) return dart.nullCheck(this.end);
      let center = this[_centerArc].lerp(t);
      let width = dart.nullCheck(ui.lerpDouble(dart.nullCheck(this.begin).width, dart.nullCheck(this.end).width, t));
      let height = dart.nullCheck(ui.lerpDouble(dart.nullCheck(this.begin).height, dart.nullCheck(this.end).height, t));
      return new ui.Rect.fromLTWH(dart.notNull(center.dx) - width / 2.0, dart.notNull(center.dy) - height / 2.0, width, height);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "MaterialRectCenterArcTween")) + "(" + dart.str(this.begin) + " → " + dart.str(this.end) + "; centerArc=" + dart.str(this.centerArc) + ")";
    }
  };
  (arc.MaterialRectCenterArcTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    this[_dirty] = true;
    this[__MaterialRectCenterArcTween__centerArc] = null;
    this[__MaterialRectCenterArcTween__centerArc_isSet] = false;
    arc.MaterialRectCenterArcTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = arc.MaterialRectCenterArcTween.prototype;
  dart.addTypeTests(arc.MaterialRectCenterArcTween);
  dart.addTypeCaches(arc.MaterialRectCenterArcTween);
  dart.setMethodSignature(arc.MaterialRectCenterArcTween, () => ({
    __proto__: dart.getMethods(arc.MaterialRectCenterArcTween.__proto__),
    [_initialize]: dart.fnType(dart.void, []),
    lerp: dart.fnType(ui.Rect, [core.double])
  }));
  dart.setGetterSignature(arc.MaterialRectCenterArcTween, () => ({
    __proto__: dart.getGetters(arc.MaterialRectCenterArcTween.__proto__),
    centerArc: dart.nullable(arc.MaterialPointArcTween),
    [_centerArc]: arc.MaterialPointArcTween
  }));
  dart.setSetterSignature(arc.MaterialRectCenterArcTween, () => ({
    __proto__: dart.getSetters(arc.MaterialRectCenterArcTween.__proto__),
    [_centerArc]: arc.MaterialPointArcTween,
    begin: dart.nullable(core.Object),
    end: dart.nullable(core.Object)
  }));
  dart.setLibraryUri(arc.MaterialRectCenterArcTween, L1);
  dart.setFieldSignature(arc.MaterialRectCenterArcTween, () => ({
    __proto__: dart.getFields(arc.MaterialRectCenterArcTween.__proto__),
    [_dirty]: dart.fieldType(core.bool),
    [__MaterialRectCenterArcTween__centerArc]: dart.fieldType(dart.nullable(arc.MaterialPointArcTween)),
    [__MaterialRectCenterArcTween__centerArc_isSet]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(arc.MaterialRectCenterArcTween, ['toString']);
  arc._maxBy = function _maxBy(T, input, keyFunc) {
    if (input == null) dart.nullFailed(L0, 203, 25, "input");
    if (keyFunc == null) dart.nullFailed(L0, 203, 44, "keyFunc");
    let maxValue = null;
    let maxValue$35isSet = false;
    function maxValue$35get() {
      return maxValue$35isSet ? maxValue : dart.throw(new _internal.LateError.localNI("maxValue"));
    }
    dart.fn(maxValue$35get, dart.fnType(T, []));
    function maxValue$35set(t6) {
      maxValue$35isSet = true;
      return maxValue = t6;
    }
    dart.fn(maxValue$35set, dart.fnType(dart.dynamic, [T]));
    let maxKey = null;
    for (let value of input) {
      let key = keyFunc(value);
      if (maxKey == null || dart.notNull(key) > dart.notNull(maxKey)) {
        maxValue$35set(value);
        maxKey = key;
      }
    }
    return maxValue$35get();
  };
  var C6;
  var C7;
  var C8;
  var C9;
  var C5;
  dart.defineLazy(arc, {
    /*arc._kOnAxisDelta*/get _kOnAxisDelta() {
      return 2;
    },
    /*arc._allDiagonals*/get _allDiagonals() {
      return C5 || CT.C5;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/arc.dart", {
    "package:flutter/src/material/arc.dart": arc
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["arc.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6CI,YAAY,AAAM,cAAG;AACrB,YAAY,AAAI,YAAG;AAEN,kBAAkB,eAAL;AACb,gBAAc,eAAH;AAGX,kBAAQ,AAAI,GAAD,MAAG,KAAK;AACnB,mBAAS,AAAM,AAAG,KAAJ;AACd,mBAAS,AAAM,AAAG,KAAJ;AACd,6BAAmB,AAAM,KAAD;AACxB,cAAI,kBAAO,AAAI,GAAD,KAAK,AAAM,KAAD;AAErC,YAAO;AAAgB,cAAA,AAAI,OAAE,UAA2B,aAAjB,gBAAgB,KAAI,AAAI,MAAS,eAAP;;;AAEjE,UAAI,AAAO,MAAD,QAAoB,AAAO,MAAD;AAClC,YAAI,AAAO,MAAD,GAAG,MAAM;AACyD,UAA1E,gBAA2B,AAAmB,AAAuB,aAA3D,gBAAgB,iBAAG,gBAAgB,iBAAI,AAAE,AAAS,CAAV,MAAG,KAAK,cAAa;AACD,UAAtE,gBAAU,kBAAc,aAAP,AAAI,GAAD,OAAa,AAAE,eAAT,iBAA+B,CAAV,aAAT,AAAM,KAAD,oBAAM,AAAI,GAAD,cAAW,AAAI,GAAD;AAClE,cAAa,aAAT,AAAM,KAAD,oBAAM,AAAI,GAAD;AACqC,YAArD,oBAA2B,aAAb,AAAU,UAAA,MAAyB,CAAV,aAAT,AAAM,KAAD,oBAAM,AAAI,GAAD;AAC7B,YAAf,kBAAY;;AAEmD,YAA/D,oBAAsB,oBAAe,aAAb,AAAU,UAAA,MAAyB,CAAZ,aAAP,AAAI,GAAD,oBAAM,AAAM,KAAD;AACnC,YAAnB;;;AAGsE,UAAxE,gBAA2B,AAAmB,AAAqB,aAAzD,gBAAgB,iBAAG,gBAAgB,iBAAI,AAAE,AAAO,CAAR,MAAG,GAAG,cAAa;AACK,UAA1E,gBAAU,kBAAO,AAAM,KAAD,KAAc,aAAT,AAAM,KAAD,OAA0B,AAAK,CAAjB,aAAP,AAAI,GAAD,oBAAM,AAAM,KAAD,eAAmB,eAAP;AACjE,cAAa,aAAT,AAAM,KAAD,oBAAM,AAAI,GAAD;AACY,YAA5B,oBAAc,AAAS,qBAAE;AACyC,YAAlE,kBAAuB,AAAE,eAAb,qBAA4B,aAAb,AAAU,UAAA,MAAyB,CAAZ,aAAP,AAAI,GAAD,oBAAM,AAAM,KAAD;;AAE9B,YAA3B,oBAAsB,oBAAE;AAC0C,YAAlE,kBAAuB,AAAE,eAAb,qBAA4B,aAAb,AAAU,UAAA,MAAyB,CAAV,aAAT,AAAM,KAAD,oBAAM,AAAI,GAAD;;;AAG7D,cAAO,AAAY,qBAAG;AACtB,cAAO,AAAU,mBAAG;;AAEF,QAAlB,oBAAc;AACE,QAAhB,kBAAY;;AAEA,MAAd,eAAS;IACX;;AAKE,UAAI,AAAM,cAAG,QAAQ,AAAI,YAAG,MAC1B,MAAO;AACT,oBAAI,eACF,AAAa;AACf,YAAO;IACT;;AAME,UAAI,AAAM,cAAG,QAAQ,AAAI,YAAG,MAC1B,MAAO;AACT,oBAAI,eACF,AAAa;AACf,YAAO;IACT;;AASE,UAAI,AAAM,cAAG,QAAQ,AAAI,YAAG,MAC1B,MAAO;AACT,oBAAI,eACF,AAAa;AACf,YAAO;IACT;;AASE,UAAI,AAAM,cAAG,QAAQ,AAAI,YAAG,MAC1B,MAAO;AACT,oBAAI,eACF,AAAa;AACf,YAAO;IACT;;mBAIkB;AAChB,uBAAI,KAAK,EAAI;AACQ,QAAb,cAAQ,KAAK;AACN,QAAb,eAAS;;IAEb;;;;;mBAGgB;AACd,uBAAI,KAAK,EAAI;AACM,QAAX,YAAM,KAAK;AACJ,QAAb,eAAS;;IAEb;;;;;UAGmB;AACjB,oBAAI,eACF,AAAa;AACf,UAAI,AAAE,CAAD,KAAI,KACP,MAAY,gBAAL;AACT,UAAI,AAAE,CAAD,KAAI,KACP,MAAU,gBAAH;AACT,UAAI,AAAY,qBAAG,QAAQ,AAAU,mBAAG,MACtC,MAAiC,gBAAnB,eAAK,YAAO,UAAK,CAAC;AACrB,kBAA6C,eAArC,cAAW,mBAAa,iBAAW,CAAC;AAC5C,cAAI,AAAgB,SAAP,KAAK,IAAW,eAAP;AACtB,cAAI,AAAgB,SAAP,KAAK,IAAW,eAAP;AACnC,YAAc,AAAE,gBAAT,oBAAW,kBAAO,CAAC,EAAE,CAAC;IAC/B;;AAIE,YAA4J,UAAlJ,yBAAkB,MAAM,4BAAyB,eAAE,cAAK,iBAAS,YAAG,uBAAU,eAAM,uBAAU,eAAM,2BAAc,mBAAU,yBAAY,iBAAQ;IAC5J;;;QA1IU;QACA;IAGL,eAAS;IA0DN;IAWA;IAcA;IAcA;AAnGH,+DAAa,KAAK,OAAO,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgJpC;;;QALK;;;;;EAKL;;;;;;;;;;;;;;;;;;IAIkB;;;;;;IACA;;;;;;;gCAFK,SAAc;QAAd;QAAc;IAAd;IAAc;;EAAM;;;;;;;;;;;;;;;;;;;AA6DvC,YAAO,AAAM,cAAG;AAChB,YAAO,AAAI,YAAG;AACD,0BAAmB,AAAE,AAAO,eAAZ,sBAAmB,AAAE,eAAP;AAC3B,qBAAW,0BAAkB,mBAAe;YAAW;AAAM,sCAAiB,aAAa,EAAE,CAAC;;AAI7G,MAHD,kBAAY,0CACH,iBAAgB,eAAL,aAAQ,AAAS,QAAD,gBAC7B,iBAAc,eAAH,WAAM,AAAS,QAAD;AAK/B,MAHD,gBAAU,0CACD,iBAAgB,eAAL,aAAQ,AAAS,QAAD,cAC7B,iBAAc,eAAH,WAAM,AAAS,QAAD;AAElB,MAAd,eAAS;IACX;uBAE+B,eAAyB;UAAzB;UAAyB;AACzC,kBAAQ,AAAmC,iBAAnB,eAAL,aAAQ,AAAS,QAAD,aAAU,iBAAgB,eAAL,aAAQ,AAAS,QAAD;AACxE,mBAAS,AAAM,KAAD;AAC3B,YAAwB,AAAW,AAAS,cAArC,AAAc,aAAD,oBAAM,AAAM,KAAD,oBAAM,MAAM,IAAoB,AAAW,aAA5B,AAAc,aAAD,oBAAM,AAAM,KAAD,oBAAM,MAAM;IACpF;iBAEuB,MAAgB;UAAhB;UAAgB;AACrC,cAAQ,EAAE;;;AACgB,gBAAO,AAAK,KAAD;;;;AACV,gBAAO,AAAK,KAAD;;;;AACT,gBAAO,AAAK,KAAD;;;;AACV,gBAAO,AAAK,KAAD;;;;AAJzC;;;IAMF;;AAKE,UAAI,AAAM,cAAG,MACX,MAAO;AACT,oBAAI,eACF,AAAa;AACf,YAAO;IACT;;;AAC2B;IAAS;;;AAAT;;IAAS;;AAKlC,UAAI,AAAI,YAAG,MACT,MAAO;AACT,oBAAI,eACF,AAAa;AACf,YAAO;IACT;;;AAC2B;IAAO;;;AAAP;;IAAO;;iBAGlB;AACd,uBAAI,KAAK,EAAI;AACQ,QAAb,cAAQ,KAAK;AACN,QAAb,eAAS;;IAEb;;;;;iBAGc;AACZ,uBAAI,KAAK,EAAI;AACM,QAAX,YAAM,KAAK;AACJ,QAAb,eAAS;;IAEb;;;;;UAGiB;AACf,oBAAI,eACF,AAAa;AACf,UAAI,AAAE,CAAD,KAAI,KACP,MAAY,gBAAL;AACT,UAAI,AAAE,CAAD,KAAI,KACP,MAAU,gBAAH;AACT,YAAY,wBAAW,AAAU,qBAAK,CAAC,GAAG,AAAQ,mBAAK,CAAC;IAC1D;;AAIE,YAAmH,UAAzG,yBAAkB,MAAM,2BAAwB,eAAE,cAAK,iBAAS,YAAG,yBAAY,iBAAQ,uBAAU,eAAM;IACnH;;;QAzFQ;QACA;IAGH,eAAS;6CA0Ca;;2CAWA;;AAvDtB,8DAAa,KAAK,OAAO,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwHhC,YAAO,AAAM,cAAG;AAChB,YAAO,AAAI,YAAG;AAIb,MAHD,mBAAa,0CACC,AAAE,eAAP,yBACC,AAAE,eAAL;AAEO,MAAd,eAAS;IACX;;AAKE,UAAI,AAAM,cAAG,QAAQ,AAAI,YAAG,MAC1B,MAAO;AACT,oBAAI,eACF,AAAa;AACf,YAAO;IACT;;;AAC2B;IAAU;;;AAAV;;IAAU;;iBAGrB;AACd,uBAAI,KAAK,EAAI;AACQ,QAAb,cAAQ,KAAK;AACN,QAAb,eAAS;;IAEb;;;;;iBAGc;AACZ,uBAAI,KAAK,EAAI;AACM,QAAX,YAAM,KAAK;AACJ,QAAb,eAAS;;IAEb;;;;;UAGiB;AACf,oBAAI,eACF,AAAa;AACf,UAAI,AAAE,CAAD,KAAI,KACP,MAAY,gBAAL;AACT,UAAI,AAAE,CAAD,KAAI,KACP,MAAU,gBAAH;AACI,mBAAS,AAAW,sBAAK,CAAC;AAC1B,kBAA+C,eAAvC,cAAgB,AAAE,eAAP,mBAAiB,AAAE,eAAL,iBAAY,CAAC;AAC9C,mBAAkD,eAAzC,cAAgB,AAAE,eAAP,oBAAkB,AAAE,eAAL,kBAAa,CAAC;AAC9D,YAAY,sBAAmB,aAAV,AAAO,MAAD,OAAM,AAAM,KAAD,GAAG,KAAe,aAAV,AAAO,MAAD,OAAM,AAAO,MAAD,GAAG,KAAK,KAAK,EAAE,MAAM;IACvF;;AAIE,YAA2G,UAAjG,yBAAkB,MAAM,iCAA8B,eAAE,cAAK,iBAAS,YAAG,0BAAa,kBAAS;IAC3G;;;QA5DQ;QACA;IAGH,eAAS;oDAqBa;;AAvBtB,oEAAa,KAAK,OAAO,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;kCA5JZ,OAAmB;QAAnB;QAAmB;AAClC;;;;;;;;;;;AACC;AACR,aAAa,QAAS,MAAK;AACZ,gBAAM,AAAO,OAAA,CAAC,KAAK;AAChC,UAAI,AAAO,MAAD,IAAI,QAAY,aAAJ,GAAG,iBAAG,MAAM;AAChB,QAAhB,eAAW,KAAK;AACJ,QAAZ,SAAS,GAAG;;;AAGhB,UAAO;EACT;;;;;;;MAxMa,iBAAa;;;MAmLJ,iBAAa","file":"../../../../../../../../../../packages/flutter/src/material/arc.dart.lib.js"}');
  // Exports:
  return {
    src__material__arc: arc
  };
}));

//# sourceMappingURL=arc.dart.lib.js.map
