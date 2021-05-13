define(['dart_sdk', 'packages/flutter/src/rendering/custom_paint.dart', 'packages/flutter/src/widgets/widget_span.dart'], (function load__packages__flutter__src__widgets__grid_paper_dart(dart_sdk, packages__flutter__src__rendering__custom_paint$46dart, packages__flutter__src__widgets__widget_span$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const custom_paint = packages__flutter__src__rendering__custom_paint$46dart.src__rendering__custom_paint;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  var grid_paper = Object.create(dart.library);
  var $toDouble = dartx.toDouble;
  var $modulo = dartx['%'];
  dart._checkModuleNullSafetyMode(false);
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/widgets/grid_paper.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/grid_paper.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2143545587
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "foregroundPainter",
        [_Location_column]: 7,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4], _LocationL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 110,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/grid_paper.dart"
      });
    }
  }, false);
  var color$ = dart.privateName(grid_paper, "_GridPaperPainter.color");
  var interval$ = dart.privateName(grid_paper, "_GridPaperPainter.interval");
  var divisions$ = dart.privateName(grid_paper, "_GridPaperPainter.divisions");
  var subdivisions$ = dart.privateName(grid_paper, "_GridPaperPainter.subdivisions");
  grid_paper._GridPaperPainter = class _GridPaperPainter extends custom_paint.CustomPainter {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get interval() {
      return this[interval$];
    }
    set interval(value) {
      super.interval = value;
    }
    get divisions() {
      return this[divisions$];
    }
    set divisions(value) {
      super.divisions = value;
    }
    get subdivisions() {
      return this[subdivisions$];
    }
    set subdivisions(value) {
      super.subdivisions = value;
    }
    paint(canvas, size) {
      let t0;
      if (canvas == null) dart.nullFailed(L0, 24, 21, "canvas");
      if (size == null) dart.nullFailed(L0, 24, 34, "size");
      let linePaint = (t0 = ui.Paint.new(), (() => {
        t0.color = this.color;
        return t0;
      })());
      let allDivisions = (dart.notNull(this.divisions) * dart.notNull(this.subdivisions))[$toDouble]();
      for (let x = 0.0; x <= dart.notNull(size.width); x = x + dart.notNull(this.interval) / allDivisions) {
        linePaint.strokeWidth = x[$modulo](this.interval) === 0.0 ? 1.0 : x[$modulo](dart.notNull(this.interval) / dart.notNull(this.subdivisions)) === 0.0 ? 0.5 : 0.25;
        canvas.drawLine(new ui.Offset.new(x, 0.0), new ui.Offset.new(x, size.height), linePaint);
      }
      for (let y = 0.0; y <= dart.notNull(size.height); y = y + dart.notNull(this.interval) / allDivisions) {
        linePaint.strokeWidth = y[$modulo](this.interval) === 0.0 ? 1.0 : y[$modulo](dart.notNull(this.interval) / dart.notNull(this.subdivisions)) === 0.0 ? 0.5 : 0.25;
        canvas.drawLine(new ui.Offset.new(0.0, y), new ui.Offset.new(size.width, y), linePaint);
      }
    }
    shouldRepaint(oldPainter) {
      grid_paper._GridPaperPainter.as(oldPainter);
      if (oldPainter == null) dart.nullFailed(L0, 39, 40, "oldPainter");
      return !dart.equals(oldPainter.color, this.color) || oldPainter.interval != this.interval || oldPainter.divisions != this.divisions || oldPainter.subdivisions != this.subdivisions;
    }
    hitTest(position) {
      if (position == null) dart.nullFailed(L0, 47, 23, "position");
      return false;
    }
  };
  (grid_paper._GridPaperPainter.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    if (color == null) dart.nullFailed(L0, 12, 19, "color");
    let interval = opts && 'interval' in opts ? opts.interval : null;
    if (interval == null) dart.nullFailed(L0, 13, 19, "interval");
    let divisions = opts && 'divisions' in opts ? opts.divisions : null;
    if (divisions == null) dart.nullFailed(L0, 14, 19, "divisions");
    let subdivisions = opts && 'subdivisions' in opts ? opts.subdivisions : null;
    if (subdivisions == null) dart.nullFailed(L0, 15, 19, "subdivisions");
    this[color$] = color;
    this[interval$] = interval;
    this[divisions$] = divisions;
    this[subdivisions$] = subdivisions;
    grid_paper._GridPaperPainter.__proto__.new.call(this);
    ;
  }).prototype = grid_paper._GridPaperPainter.prototype;
  dart.addTypeTests(grid_paper._GridPaperPainter);
  dart.addTypeCaches(grid_paper._GridPaperPainter);
  dart.setMethodSignature(grid_paper._GridPaperPainter, () => ({
    __proto__: dart.getMethods(grid_paper._GridPaperPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)]),
    hitTest: dart.fnType(core.bool, [ui.Offset])
  }));
  dart.setLibraryUri(grid_paper._GridPaperPainter, L1);
  dart.setFieldSignature(grid_paper._GridPaperPainter, () => ({
    __proto__: dart.getFields(grid_paper._GridPaperPainter.__proto__),
    color: dart.finalFieldType(ui.Color),
    interval: dart.finalFieldType(core.double),
    divisions: dart.finalFieldType(core.int),
    subdivisions: dart.finalFieldType(core.int)
  }));
  var Color_value = dart.privateName(ui, "Color.value");
  var C0;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C3;
  var C4;
  var C2;
  var C1;
  var color$0 = dart.privateName(grid_paper, "GridPaper.color");
  var interval$0 = dart.privateName(grid_paper, "GridPaper.interval");
  var divisions$0 = dart.privateName(grid_paper, "GridPaper.divisions");
  var subdivisions$0 = dart.privateName(grid_paper, "GridPaper.subdivisions");
  var child$ = dart.privateName(grid_paper, "GridPaper.child");
  grid_paper.GridPaper = class GridPaper extends framework.StatelessWidget {
    get color() {
      return this[color$0];
    }
    set color(value) {
      super.color = value;
    }
    get interval() {
      return this[interval$0];
    }
    set interval(value) {
      super.interval = value;
    }
    get divisions() {
      return this[divisions$0];
    }
    set divisions(value) {
      super.divisions = value;
    }
    get subdivisions() {
      return this[subdivisions$0];
    }
    set subdivisions(value) {
      super.subdivisions = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 109, 29, "context");
      return new basic.CustomPaint.new({foregroundPainter: new grid_paper._GridPaperPainter.new({color: this.color, interval: this.interval, divisions: this.divisions, subdivisions: this.subdivisions}), child: this.child, $creationLocationd_0dea112b090073317d4: C1 || CT.C1});
    }
  };
  (grid_paper.GridPaper.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : C0 || CT.C0;
    if (color == null) dart.nullFailed(L0, 62, 10, "color");
    let interval = opts && 'interval' in opts ? opts.interval : 100;
    if (interval == null) dart.nullFailed(L0, 63, 10, "interval");
    let divisions = opts && 'divisions' in opts ? opts.divisions : 2;
    if (divisions == null) dart.nullFailed(L0, 64, 10, "divisions");
    let subdivisions = opts && 'subdivisions' in opts ? opts.subdivisions : 5;
    if (subdivisions == null) dart.nullFailed(L0, 65, 10, "subdivisions");
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$0] = color;
    this[interval$0] = interval;
    this[divisions$0] = divisions;
    this[subdivisions$0] = subdivisions;
    this[child$] = child;
    if (!(dart.notNull(divisions) > 0)) dart.assertFailed("The \"divisions\" property must be greater than zero. If there were no divisions, the grid paper would not paint anything.", L0, 67, 15, "divisions > 0");
    if (!(dart.notNull(subdivisions) > 0)) dart.assertFailed("The \"subdivisions\" property must be greater than zero. If there were no subdivisions, the grid paper would not paint anything.", L0, 68, 15, "subdivisions > 0");
    grid_paper.GridPaper.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = grid_paper.GridPaper.prototype;
  dart.addTypeTests(grid_paper.GridPaper);
  dart.addTypeCaches(grid_paper.GridPaper);
  dart.setMethodSignature(grid_paper.GridPaper, () => ({
    __proto__: dart.getMethods(grid_paper.GridPaper.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(grid_paper.GridPaper, L1);
  dart.setFieldSignature(grid_paper.GridPaper, () => ({
    __proto__: dart.getFields(grid_paper.GridPaper.__proto__),
    color: dart.finalFieldType(ui.Color),
    interval: dart.finalFieldType(core.double),
    divisions: dart.finalFieldType(core.int),
    subdivisions: dart.finalFieldType(core.int),
    child: dart.finalFieldType(dart.nullable(framework.Widget))
  }));
  dart.trackLibraries("packages/flutter/src/widgets/grid_paper.dart", {
    "package:flutter/src/widgets/grid_paper.dart": grid_paper
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["grid_paper.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiBc;;;;;;IACC;;;;;;IACH;;;;;;IACA;;;;;;UAGQ,QAAa;;UAAb;UAAa;AACjB,4CAAY;AACpB,mBAAQ;;;AACC,yBAA0C,CAAhB,aAAV,+BAAY;AACzC,eAAY,IAAI,KAAK,AAAE,CAAD,iBAAI,AAAK,IAAD,SAAQ,IAAA,AAAE,CAAD,GAAa,aAAT,iBAAW,YAAY;AACyC,QAAzG,AAAU,SAAD,eAAgB,AAAE,AAAW,CAAZ,UAAG,mBAAY,MAAO,MAAO,AAAE,AAA4B,CAA7B,UAAa,aAAT,8BAAW,wBAAiB,MAAO,MAAM;AACnC,QAAlE,AAAO,MAAD,UAAU,kBAAO,CAAC,EAAE,MAAM,kBAAO,CAAC,EAAE,AAAK,IAAD,UAAU,SAAS;;AAEnE,eAAY,IAAI,KAAK,AAAE,CAAD,iBAAI,AAAK,IAAD,UAAS,IAAA,AAAE,CAAD,GAAa,aAAT,iBAAW,YAAY;AACwC,QAAzG,AAAU,SAAD,eAAgB,AAAE,AAAW,CAAZ,UAAG,mBAAY,MAAO,MAAO,AAAE,AAA4B,CAA7B,UAAa,aAAT,8BAAW,wBAAiB,MAAO,MAAM;AACpC,QAAjE,AAAO,MAAD,UAAU,kBAAO,KAAK,CAAC,GAAG,kBAAO,AAAK,IAAD,QAAQ,CAAC,GAAG,SAAS;;IAEpE;;sCAGqC;;AACnC,YAGI,cAHG,AAAW,UAAD,QAAU,eACpB,AAAW,UAAD,aAAa,iBACvB,AAAW,UAAD,cAAc,kBACxB,AAAW,UAAD,iBAAiB;IACpC;;UAGoB;AAAa;IAAK;;;QAnCtB;;QACA;;QACA;;QACA;;IAHA;IACA;IACA;IACA;AAJV;;EAKJ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0DU;;;;;;IAKC;;;;;;IAaH;;;;;;IASA;;;;;;IAKI;;;;;;;UAGY;AACxB,YAAO,+CACc,6CACV,sBACG,0BACC,8BACG,4BAET;IAEX;;;QA1DO;QACA;;QACA;;QACA;;QACA;;QACA;;IAJA;IACA;IACA;IACA;IACA;UACe,aAAV,SAAS,IAAG,sBAAG;UACF,aAAb,YAAY,IAAG,sBAAG;AACzB,wDAAW,GAAG;;EAAC","file":"../../../../../../../../../../packages/flutter/src/widgets/grid_paper.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__grid_paper: grid_paper
  };
}));

//# sourceMappingURL=grid_paper.dart.lib.js.map
