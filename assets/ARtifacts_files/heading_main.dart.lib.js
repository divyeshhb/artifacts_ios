define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/painting/strut_style.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/material/colors.dart'], (function load__packages__artif__widgets__heading_main_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__painting__strut_style$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__material__colors$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const text = packages__flutter__src__widgets__widget_span$46dart.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const text_style = packages__flutter__src__painting__strut_style$46dart.src__painting__text_style;
  const ink_well = packages__flutter__src__material__icon_button$46dart.src__material__ink_well;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  var heading_main = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var VoidToNvoid = () => (VoidToNvoid = dart.constFn(dart.nullable(VoidTovoid())))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var boolLToNull = () => (boolLToNull = dart.constFn(dart.fnType(core.Null, [boolL()])))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(framework.Widget)))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  const CT = Object.create(null);
  var L0 = "package:artif/widgets/heading_main.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 20,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], _LocationL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 38,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/heading_main.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 24,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], _LocationL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 48,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/heading_main.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 19,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], _LocationL());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 56,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/heading_main.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 17,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHover",
        [_Location_column]: 17,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 17,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverColor",
        [_Location_column]: 17,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], _LocationL());
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 55,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/heading_main.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23], _LocationL());
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 46,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/heading_main.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27, C28 || CT.C28], _LocationL());
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 34,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/heading_main.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32], _LocationL());
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 28,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/heading_main.dart"
      });
    }
  }, false);
  var screenSize$ = dart.privateName(heading_main, "HeadingMain.screenSize");
  var title1$ = dart.privateName(heading_main, "HeadingMain.title1");
  var title2$ = dart.privateName(heading_main, "HeadingMain.title2");
  var title3$ = dart.privateName(heading_main, "HeadingMain.title3");
  var onTap1$ = dart.privateName(heading_main, "HeadingMain.onTap1");
  heading_main.HeadingMain = class HeadingMain extends framework.StatefulWidget {
    get screenSize() {
      return this[screenSize$];
    }
    set screenSize(value) {
      super.screenSize = value;
    }
    get title1() {
      return this[title1$];
    }
    set title1(value) {
      super.title1 = value;
    }
    get title2() {
      return this[title2$];
    }
    set title2(value) {
      super.title2 = value;
    }
    get title3() {
      return this[title3$];
    }
    set title3(value) {
      super.title3 = value;
    }
    get onTap1() {
      return this[onTap1$];
    }
    set onTap1(value) {
      super.onTap1 = value;
    }
    createState() {
      return new heading_main._HeadingMainState.new();
    }
  };
  (heading_main.HeadingMain.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let screenSize = opts && 'screenSize' in opts ? opts.screenSize : null;
    let title1 = opts && 'title1' in opts ? opts.title1 : null;
    let title2 = opts && 'title2' in opts ? opts.title2 : null;
    let title3 = opts && 'title3' in opts ? opts.title3 : null;
    let onTap1 = opts && 'onTap1' in opts ? opts.onTap1 : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[screenSize$] = screenSize;
    this[title1$] = title1;
    this[title2$] = title2;
    this[title3$] = title3;
    this[onTap1$] = onTap1;
    heading_main.HeadingMain.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = heading_main.HeadingMain.prototype;
  dart.addTypeTests(heading_main.HeadingMain);
  dart.addTypeCaches(heading_main.HeadingMain);
  dart.setMethodSignature(heading_main.HeadingMain, () => ({
    __proto__: dart.getMethods(heading_main.HeadingMain.__proto__),
    createState: dart.fnType(dart.legacy(heading_main._HeadingMainState), [])
  }));
  dart.setLibraryUri(heading_main.HeadingMain, L0);
  dart.setFieldSignature(heading_main.HeadingMain, () => ({
    __proto__: dart.getFields(heading_main.HeadingMain.__proto__),
    screenSize: dart.finalFieldType(dart.legacy(ui.Size)),
    title1: dart.finalFieldType(dart.legacy(core.String)),
    title2: dart.finalFieldType(dart.legacy(core.String)),
    title3: dart.finalFieldType(dart.legacy(core.String)),
    onTap1: dart.finalFieldType(dart.legacy(core.Function))
  }));
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C2;
  var C3;
  var C1;
  var C0;
  var C6;
  var C7;
  var C8;
  var C5;
  var C4;
  var C11;
  var C12;
  var C13;
  var C10;
  var C9;
  var C16;
  var C17;
  var C18;
  var C19;
  var C20;
  var C15;
  var C14;
  var C23;
  var C22;
  var C21;
  var C26;
  var C27;
  var C28;
  var C25;
  var C24;
  var C31;
  var C32;
  var C30;
  var C29;
  heading_main._HeadingMainState = class _HeadingMainState extends framework.State$(dart.legacy(heading_main.HeadingMain)) {
    build(context) {
      return new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: dart.notNull(this.widget.screenSize.height) * 0.06, left: dart.notNull(this.widget.screenSize.width) / 15, right: dart.notNull(this.widget.screenSize.width) / 15}), child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidgetL().of([new text.Text.new(this.widget.title1, {style: new text_style.TextStyle.new({fontSize: 40.0, fontFamily: "Montserrat", fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new basic.Row.new({children: JSArrayOfWidgetL().of([new text.Text.new(this.widget.title2, {textAlign: ui.TextAlign.end, style: new text_style.TextStyle.new({fontSize: 17.0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new ink_well.InkWell.new({child: new text.Text.new(this.widget.title3, {textAlign: ui.TextAlign.end, style: new text_style.TextStyle.new({color: dart.test(this.isHovering) ? colors.Colors.blue : colors.Colors.black, fontSize: 17.0}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), onTap: VoidToNvoid().as(this.widget.onTap1), onHover: dart.fn(value => {
                    this.setState(dart.fn(() => {
                      dart.test(value) ? this.isHovering = true : this.isHovering = false;
                    }, VoidToNull()));
                  }, boolLToNull()), highlightColor: new ui.Color.fromRGBO(1, 1, 1, 0.0), hoverColor: new ui.Color.fromRGBO(1, 1, 1, 0.0), $creationLocationd_0dea112b090073317d4: C14 || CT.C14})]), $creationLocationd_0dea112b090073317d4: C21 || CT.C21})]), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
    }
  };
  (heading_main._HeadingMainState.new = function() {
    this.isHovering = false;
    heading_main._HeadingMainState.__proto__.new.call(this);
    ;
  }).prototype = heading_main._HeadingMainState.prototype;
  dart.addTypeTests(heading_main._HeadingMainState);
  dart.addTypeCaches(heading_main._HeadingMainState);
  dart.setMethodSignature(heading_main._HeadingMainState, () => ({
    __proto__: dart.getMethods(heading_main._HeadingMainState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(heading_main._HeadingMainState, L0);
  dart.setFieldSignature(heading_main._HeadingMainState, () => ({
    __proto__: dart.getFields(heading_main._HeadingMainState.__proto__),
    isHovering: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/artif/widgets/heading_main.dart", {
    "package:artif/widgets/heading_main.dart": heading_main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["heading_main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAYa;;;;;;IACE;;;;;;IACA;;;;;;IACA;;;;;;IACE;;;;;;;AAGoB;IAAmB;;;QAfhD;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;AACF,4DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAgBM;AACxB,YAAO,iCACe,sCACY,aAAzB,AAAO,AAAW,iCAAS,YACF,aAAxB,AAAO,AAAW,gCAAQ,WACD,aAAxB,AAAO,AAAW,gCAAQ,aAE5B,iCACsB,0CACU,+CAC3B,uBACR,kBACE,AAAO,4BACA,wCACK,kBACE,0BACW,6EAG3B,6BACY,uBACR,kBACE,AAAO,gCACc,yBACd,wCACK,+DAGd,iCACS,kBACL,AAAO,gCACc,yBACd,+CACE,mBAAoB,qBAAc,+BAC/B,uFAGP,AAAO,8BACL,QAAC;AAGN,oBAFF,cAAS;AACuC,gCAA9C,KAAK,IAAG,kBAAa,OAAO,kBAAa;;qDAGvB,sBAAS,GAAG,GAAG,GAAG,kBACtB,sBAAS,GAAG,GAAG,GAAG;IAOlD;;;IAtDK,kBAAa;;;EAuDpB","file":"../../../../../../../packages/artif/widgets/heading_main.dart.lib.js"}');
  // Exports:
  return {
    widgets__heading_main: heading_main
  };
}));

//# sourceMappingURL=heading_main.dart.lib.js.map
