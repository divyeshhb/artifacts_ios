define(['dart_sdk', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/decoration.dart', 'packages/flutter/src/painting/_network_image_web.dart'], (function load__packages__flutter__src__material__tab_indicator_dart(dart_sdk, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__decoration$46dart, packages__flutter__src__painting___network_image_web$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const decoration = packages__flutter__src__painting__decoration$46dart.src__painting__decoration;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  var tab_indicator = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/tab_indicator.dart";
  var L1 = "package:flutter/src/material/tab_indicator.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.solid",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C1 || CT.C1,
        [BorderSide_width]: 2,
        [BorderSide_color]: C2 || CT.C2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
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
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C3;
  var _indicatorRectFor = dart.privateName(tab_indicator, "_indicatorRectFor");
  var borderSide$ = dart.privateName(tab_indicator, "UnderlineTabIndicator.borderSide");
  var insets$ = dart.privateName(tab_indicator, "UnderlineTabIndicator.insets");
  tab_indicator.UnderlineTabIndicator = class UnderlineTabIndicator extends decoration.Decoration {
    get borderSide() {
      return this[borderSide$];
    }
    set borderSide(value) {
      super.borderSide = value;
    }
    get insets() {
      return this[insets$];
    }
    set insets(value) {
      super.insets = value;
    }
    lerpFrom(a, t) {
      if (t == null) dart.nullFailed(L0, 40, 46, "t");
      if (tab_indicator.UnderlineTabIndicator.is(a)) {
        return new tab_indicator.UnderlineTabIndicator.new({borderSide: borders.BorderSide.lerp(a.borderSide, this.borderSide, t), insets: dart.nullCheck(edge_insets.EdgeInsetsGeometry.lerp(a.insets, this.insets, t))});
      }
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (t == null) dart.nullFailed(L0, 51, 44, "t");
      if (tab_indicator.UnderlineTabIndicator.is(b)) {
        return new tab_indicator.UnderlineTabIndicator.new({borderSide: borders.BorderSide.lerp(this.borderSide, b.borderSide, t), insets: dart.nullCheck(edge_insets.EdgeInsetsGeometry.lerp(this.insets, b.insets, t))});
      }
      return super.lerpTo(b, t);
    }
    createBoxPainter(onChanged = null) {
      return new tab_indicator._UnderlinePainter.new(this, onChanged);
    }
    [_indicatorRectFor](rect, textDirection) {
      if (rect == null) dart.nullFailed(L0, 66, 31, "rect");
      if (textDirection == null) dart.nullFailed(L0, 66, 51, "textDirection");
      if (!(rect != null)) dart.assertFailed(null, L0, 67, 12, "rect != null");
      if (!(textDirection != null)) dart.assertFailed(null, L0, 68, 12, "textDirection != null");
      let indicator = this.insets.resolve(textDirection).deflateRect(rect);
      return new ui.Rect.fromLTWH(indicator.left, dart.notNull(indicator.bottom) - dart.notNull(this.borderSide.width), indicator.width, this.borderSide.width);
    }
    getClipPath(rect, textDirection) {
      let t0;
      if (rect == null) dart.nullFailed(L0, 79, 25, "rect");
      if (textDirection == null) dart.nullFailed(L0, 79, 45, "textDirection");
      t0 = ui.Path.new();
      return (() => {
        t0.addRect(this[_indicatorRectFor](rect, textDirection));
        return t0;
      })();
    }
  };
  (tab_indicator.UnderlineTabIndicator.new = function(opts) {
    let borderSide = opts && 'borderSide' in opts ? opts.borderSide : C0 || CT.C0;
    if (borderSide == null) dart.nullFailed(L0, 23, 10, "borderSide");
    let insets = opts && 'insets' in opts ? opts.insets : C3 || CT.C3;
    if (insets == null) dart.nullFailed(L0, 24, 10, "insets");
    this[borderSide$] = borderSide;
    this[insets$] = insets;
    if (!(borderSide != null)) dart.assertFailed(null, L0, 25, 15, "borderSide != null");
    if (!(insets != null)) dart.assertFailed(null, L0, 26, 15, "insets != null");
    tab_indicator.UnderlineTabIndicator.__proto__.new.call(this);
    ;
  }).prototype = tab_indicator.UnderlineTabIndicator.prototype;
  dart.addTypeTests(tab_indicator.UnderlineTabIndicator);
  dart.addTypeCaches(tab_indicator.UnderlineTabIndicator);
  dart.setMethodSignature(tab_indicator.UnderlineTabIndicator, () => ({
    __proto__: dart.getMethods(tab_indicator.UnderlineTabIndicator.__proto__),
    createBoxPainter: dart.fnType(tab_indicator._UnderlinePainter, [], [dart.nullable(dart.fnType(dart.void, []))]),
    [_indicatorRectFor]: dart.fnType(ui.Rect, [ui.Rect, ui.TextDirection])
  }));
  dart.setLibraryUri(tab_indicator.UnderlineTabIndicator, L1);
  dart.setFieldSignature(tab_indicator.UnderlineTabIndicator, () => ({
    __proto__: dart.getFields(tab_indicator.UnderlineTabIndicator.__proto__),
    borderSide: dart.finalFieldType(borders.BorderSide),
    insets: dart.finalFieldType(edge_insets.EdgeInsetsGeometry)
  }));
  tab_indicator._UnderlinePainter = class _UnderlinePainter extends decoration.BoxPainter {
    paint(canvas, offset, configuration) {
      let t0;
      if (canvas == null) dart.nullFailed(L0, 92, 21, "canvas");
      if (offset == null) dart.nullFailed(L0, 92, 36, "offset");
      if (configuration == null) dart.nullFailed(L0, 92, 63, "configuration");
      if (!(configuration != null)) dart.assertFailed(null, L0, 93, 12, "configuration != null");
      if (!(configuration.size != null)) dart.assertFailed(null, L0, 94, 12, "configuration.size != null");
      let rect = offset['&'](dart.nullCheck(configuration.size));
      let textDirection = dart.nullCheck(configuration.textDirection);
      let indicator = this.decoration[_indicatorRectFor](rect, textDirection).deflate(dart.notNull(this.decoration.borderSide.width) / 2.0);
      let paint = (t0 = this.decoration.borderSide.toPaint(), (() => {
        t0.strokeCap = ui.StrokeCap.square;
        return t0;
      })());
      canvas.drawLine(indicator.bottomLeft, indicator.bottomRight, paint);
    }
  };
  (tab_indicator._UnderlinePainter.new = function(decoration, onChanged) {
    if (decoration == null) dart.nullFailed(L0, 85, 26, "decoration");
    this.decoration = decoration;
    if (!(decoration != null)) dart.assertFailed(null, L0, 86, 14, "decoration != null");
    tab_indicator._UnderlinePainter.__proto__.new.call(this, onChanged);
    ;
  }).prototype = tab_indicator._UnderlinePainter.prototype;
  dart.addTypeTests(tab_indicator._UnderlinePainter);
  dart.addTypeCaches(tab_indicator._UnderlinePainter);
  dart.setMethodSignature(tab_indicator._UnderlinePainter, () => ({
    __proto__: dart.getMethods(tab_indicator._UnderlinePainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Offset, image_provider.ImageConfiguration])
  }));
  dart.setLibraryUri(tab_indicator._UnderlinePainter, L1);
  dart.setFieldSignature(tab_indicator._UnderlinePainter, () => ({
    __proto__: dart.getFields(tab_indicator._UnderlinePainter.__proto__),
    decoration: dart.finalFieldType(tab_indicator.UnderlineTabIndicator)
  }));
  dart.trackLibraries("packages/flutter/src/material/tab_indicator.dart", {
    "package:flutter/src/material/tab_indicator.dart": tab_indicator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tab_indicator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4BmB;;;;;;IAQQ;;;;;;aAGQ;UAAU;AACzC,UAAM,uCAAF,CAAC;AACH,cAAO,0DACkB,wBAAK,AAAE,CAAD,aAAa,iBAAY,CAAC,WACH,eAAzB,oCAAK,AAAE,CAAD,SAAS,aAAQ,CAAC;;AAGvD,YAAa,gBAAS,CAAC,EAAE,CAAC;IAC5B;WAG+B;UAAU;AACvC,UAAM,uCAAF,CAAC;AACH,cAAO,0DACkB,wBAAK,iBAAY,AAAE,CAAD,aAAa,CAAC,WACH,eAAzB,oCAAK,aAAQ,AAAE,CAAD,SAAS,CAAC;;AAGvD,YAAa,cAAO,CAAC,EAAE,CAAC;IAC1B;qBAGmD;AACjD,YAAO,yCAAkB,MAAM,SAAS;IAC1C;wBAE4B,MAAoB;UAApB;UAAoB;AAC9C,YAAO,AAAK,IAAD,IAAI;AACf,YAAO,AAAc,aAAD,IAAI;AACb,sBAAY,AAAO,AAAuB,oBAAf,aAAa,cAAc,IAAI;AACrE,YAAY,sBACV,AAAU,SAAD,OACQ,aAAjB,AAAU,SAAD,wBAAU,AAAW,wBAC9B,AAAU,SAAD,QACT,AAAW;IAEf;gBAGsB,MAAoB;;UAApB;UAAoB;AACxC,WAAO;;AAAQ,mBAAQ,wBAAkB,IAAI,EAAE,aAAa;;;IAC9D;;;QA1DO;;QACA;;IADA;IACA;UACK,AAAW,UAAD,IAAI;UACd,AAAO,MAAD,IAAI;AAJhB;;EAIqB;;;;;;;;;;;;;;;UAkET,QAAe,QAA2B;;UAA1C;UAAe;UAA2B;AAC1D,YAAO,AAAc,aAAD,IAAI;AACxB,YAAO,AAAc,AAAK,aAAN,SAAS;AAClB,iBAAO,AAAO,MAAD,MAAqB,eAAlB,AAAc,aAAD;AACpB,0BAA2C,eAA3B,AAAc,aAAD;AACtC,sBAAY,AAAW,AAAuC,mCAArB,IAAI,EAAE,aAAa,UAAsC,aAA5B,AAAW,AAAW,oCAAQ;AACnG,wBAAQ,AAAW,AAAW,sCAAA;AAAW,uBAAsB;;;AACR,MAAnE,AAAO,MAAD,UAAU,AAAU,SAAD,aAAa,AAAU,SAAD,cAAc,KAAK;IACpE;;kDAfuB,YAA0B;QAA1B;;UACZ,AAAW,UAAD,IAAI;AACrB,6DAAM,SAAS;;EAAC","file":"../../../../../../../../../../packages/flutter/src/material/tab_indicator.dart.lib.js"}');
  // Exports:
  return {
    src__material__tab_indicator: tab_indicator
  };
}));

//# sourceMappingURL=tab_indicator.dart.lib.js.map
