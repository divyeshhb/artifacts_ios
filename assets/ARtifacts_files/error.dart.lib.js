define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/painting/edge_insets.dart'], (function load__packages__flutter__src__rendering__error_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__painting__edge_insets$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  var error$ = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/error.dart";
  var L1 = "package:flutter/src/rendering/error.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 100000,
        [OffsetBase__dx]: 100000
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4039164096.0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4035969024.0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281348144.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967142.0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 12,
        [EdgeInsets_right]: 64,
        [EdgeInsets_top]: 96,
        [EdgeInsets_left]: 64
      });
    }
  }, false);
  var _paragraph = dart.privateName(error$, "_paragraph");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C0;
  var Color_value = dart.privateName(ui, "Color.value");
  var C1;
  var C2;
  var C3;
  var C4;
  var message$ = dart.privateName(error$, "RenderErrorBox.message");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C5;
  error$.RenderErrorBox = class RenderErrorBox extends box.RenderBox {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 63, 42, "height");
      return 100000;
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 68, 43, "width");
      return 100000;
    }
    get sizedByParent() {
      return true;
    }
    hitTestSelf(position) {
      if (position == null) dart.nullFailed(L0, 76, 27, "position");
      return true;
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 79, 40, "constraints");
      return constraints.constrain(C0 || CT.C0);
    }
    static _initBackgroundColor() {
      let result = C1 || CT.C1;
      if (!dart.test(dart.fn(() => {
        result = C2 || CT.C2;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 110, 12, "() {\n      result = const Color(0xF0900000);\n      return true;\n    }()");
      return result;
    }
    static _initTextStyle() {
      let result = ui.TextStyle.new({color: C3 || CT.C3, fontFamily: "sans-serif", fontSize: 18.0});
      if (!dart.test(dart.fn(() => {
        result = ui.TextStyle.new({color: C4 || CT.C4, fontFamily: "monospace", fontSize: 14.0, fontWeight: ui.FontWeight.bold});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 129, 12, "() {\n      result = ui.TextStyle(\n        color: const Color(0xFFFFFF66),\n        fontFamily: 'monospace',\n        fontSize: 14.0,\n        fontWeight: FontWeight.bold,\n      );\n      return true;\n    }()");
      return result;
    }
    paint(context, offset) {
      let t1;
      if (context == null) dart.nullFailed(L0, 148, 30, "context");
      if (offset == null) dart.nullFailed(L0, 148, 46, "offset");
      try {
        context.canvas.drawRect(offset['&'](this.size), (t1 = ui.Paint.new(), (() => {
          t1.color = error$.RenderErrorBox.backgroundColor;
          return t1;
        })()));
        if (this[_paragraph] != null) {
          let width = this.size.width;
          let left = 0.0;
          let top = 0.0;
          if (dart.notNull(width) > dart.notNull(error$.RenderErrorBox.padding.left) + dart.notNull(error$.RenderErrorBox.minimumWidth) + dart.notNull(error$.RenderErrorBox.padding.right)) {
            width = dart.notNull(width) - (dart.notNull(error$.RenderErrorBox.padding.left) + dart.notNull(error$.RenderErrorBox.padding.right));
            left = left + dart.notNull(error$.RenderErrorBox.padding.left);
          }
          dart.nullCheck(this[_paragraph]).layout(new ui.ParagraphConstraints.new({width: width}));
          if (dart.notNull(this.size.height) > dart.notNull(error$.RenderErrorBox.padding.top) + dart.notNull(dart.nullCheck(this[_paragraph]).height) + dart.notNull(error$.RenderErrorBox.padding.bottom)) {
            top = top + dart.notNull(error$.RenderErrorBox.padding.top);
          }
          context.canvas.drawParagraph(dart.nullCheck(this[_paragraph]), offset['+'](new ui.Offset.new(left, top)));
        }
      } catch (e$) {
        let e = dart.getThrown(e$);
        if (core.Object.is(e)) {
        } else
          throw e$;
      }
    }
  };
  (error$.RenderErrorBox.new = function(message = "") {
    if (message == null) dart.nullFailed(L0, 33, 25, "message");
    this[_paragraph] = null;
    this[message$] = message;
    error$.RenderErrorBox.__proto__.new.call(this);
    try {
      if (this.message !== "") {
        let builder = ui.ParagraphBuilder.new(error$.RenderErrorBox.paragraphStyle);
        builder.pushStyle(error$.RenderErrorBox.textStyle);
        builder.addText(this.message);
        this[_paragraph] = builder.build();
      } else {
        this[_paragraph] = null;
      }
    } catch (e) {
      let error = dart.getThrown(e);
      if (core.Object.is(error)) {
      } else
        throw e;
    }
  }).prototype = error$.RenderErrorBox.prototype;
  dart.addTypeTests(error$.RenderErrorBox);
  dart.addTypeCaches(error$.RenderErrorBox);
  dart.setLibraryUri(error$.RenderErrorBox, L1);
  dart.setFieldSignature(error$.RenderErrorBox, () => ({
    __proto__: dart.getFields(error$.RenderErrorBox.__proto__),
    message: dart.finalFieldType(core.String),
    [_paragraph]: dart.fieldType(dart.nullable(ui.Paragraph))
  }));
  dart.defineLazy(error$.RenderErrorBox, {
    /*error$.RenderErrorBox.padding*/get padding() {
      return C5 || CT.C5;
    },
    set padding(_) {},
    /*error$.RenderErrorBox.minimumWidth*/get minimumWidth() {
      return 200.0;
    },
    set minimumWidth(_) {},
    /*error$.RenderErrorBox.backgroundColor*/get backgroundColor() {
      return error$.RenderErrorBox._initBackgroundColor();
    },
    set backgroundColor(_) {},
    /*error$.RenderErrorBox.textStyle*/get textStyle() {
      return error$.RenderErrorBox._initTextStyle();
    },
    set textStyle(_) {},
    /*error$.RenderErrorBox.paragraphStyle*/get paragraphStyle() {
      return ui.ParagraphStyle.new({textDirection: ui.TextDirection.ltr, textAlign: ui.TextAlign.left});
    },
    set paragraphStyle(_) {}
  }, false);
  dart.defineLazy(error$, {
    /*error$._kMaxWidth*/get _kMaxWidth() {
      return 100000;
    },
    /*error$._kMaxHeight*/get _kMaxHeight() {
      return 100000;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/rendering/error.dart", {
    "package:flutter/src/rendering/error.dart": error$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["error.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwDe;;;;;;;UAM0B;AACrC;IACF;;UAGwC;AACtC;IACF;;AAG0B;IAAI;;UAGN;AAAa;IAAI;;UAGJ;AACnC,YAAO,AAAY,YAAD;IACpB;;AA4BQ;AACN,qBAAO,AAGN;AAFiC,QAAhC;AACA,cAAO;;AAET,YAAO,OAAM;IACf;;AASe,mBAAY,kDAEX,wBACF;AAEZ,qBAAO,AAQN;AAFE,QALD,SAAY,kDAEE,uBACF,kBACa;AAEzB,cAAO;;AAET,YAAO,OAAM;IACf;UAS2B,SAAgB;;UAAhB;UAAgB;AACzC;AAC4E,QAA1E,AAAQ,AAAO,OAAR,iBAAiB,AAAO,MAAD,MAAG,kCAAM;AAAW,qBAAQ;;;AAC1D,YAAI,oBAAc;AACT,sBAAQ,AAAK;AACb,qBAAO;AACP,oBAAM;AACb,cAAU,aAAN,KAAK,IAAgB,AAAe,aAA5B,AAAQ,mDAAO,mDAAe,AAAQ;AACX,YAArC,QAAM,aAAN,KAAK,KAAiB,aAAb,AAAQ,mDAAO,AAAQ;AACZ,YAApB,OAAA,AAAK,IAAD,gBAAI,AAAQ;;AAEuC,UAA/C,AAAE,eAAZ,yBAAsB,wCAA4B,KAAK;AACvD,cAAgB,aAAZ,AAAK,oBAAqB,AAAqB,aAAjC,AAAQ,kDAAgB,AAAE,eAAZ,yCAAqB,AAAQ;AACzC,YAAlB,MAAA,AAAI,GAAD,gBAAI,AAAQ;;AAEoD,UAArE,AAAQ,AAAO,OAAR,sBAAgC,eAAV,mBAAa,AAAO,MAAD,MAAG,kBAAO,IAAI,EAAE,GAAG;;;YAE9D;AAAP;;;;IAGJ;;;QAvIsB;IA2BR;IA3BQ;AAAtB;AACE;AACE,UAAI,iBAAW;AASa,sBAAa,wBAAiB;AAC5B,QAA5B,AAAQ,OAAD,WAAW;AACM,QAAxB,AAAQ,OAAD,SAAS;AACY,QAA5B,mBAAa,AAAQ,OAAD;;AAEH,QAAjB,mBAAa;;;UAER;AAAP;;;;EAGJ;;;;;;;;;;MAyCkB,6BAAO;;;;MAMX,kCAAY;YAAG;;;MAKhB,qCAAe;YAAG;;;MAeX,+BAAS;YAAG;;;MAqBP,oCAAc;YAAM,uCACd,iCACR;;;;;MAtIZ,iBAAU;;;MACV,kBAAW","file":"../../../../../../../../../../packages/flutter/src/rendering/error.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__error: error$
  };
}));

//# sourceMappingURL=error.dart.lib.js.map
