define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/material/icons.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/painting/strut_style.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/material/card.dart', 'packages/flutter/src/rendering/flex.dart'], (function load__packages__artif__widgets__floating_quick_access_bar_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__material__icons$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__painting__strut_style$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__material__card$46dart, packages__flutter__src__rendering__flex$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const text = packages__flutter__src__widgets__widget_span$46dart.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const ink_well = packages__flutter__src__material__icon_button$46dart.src__material__ink_well;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const divider = packages__flutter__src__material__icon_button$46dart.src__material__divider;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const text_style = packages__flutter__src__painting__strut_style$46dart.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const card = packages__flutter__src__material__card$46dart.src__material__card;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  var floating_quick_access_bar = Object.create(dart.library);
  var $clear = dartx.clear;
  var $length = dartx.length;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(false);
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(framework.Widget)))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var IconDataL = () => (IconDataL = dart.constFn(dart.legacy(icon_data.IconData)))();
  var JSArrayOfIconDataL = () => (JSArrayOfIconDataL = dart.constFn(_interceptors.JSArray$(IconDataL())))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var boolLToNull = () => (boolLToNull = dart.constFn(dart.fnType(core.Null, [boolL()])))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  const CT = Object.create(null);
  var L0 = "package:artif/widgets/floating_quick_access_bar.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 16,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 41,
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
        [_Location_column]: 16,
        [_Location_line]: 39,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/floating_quick_access_bar.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 9,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverColor",
        [_Location_column]: 9,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHover",
        [_Location_column]: 9,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], _LocationL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 30,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/floating_quick_access_bar.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "thickness",
        [_Location_column]: 11,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], _LocationL());
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 50,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/floating_quick_access_bar.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19], _LocationL());
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 48,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/floating_quick_access_bar.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23], _LocationL());
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 82,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/floating_quick_access_bar.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27], _LocationL());
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 77,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/floating_quick_access_bar.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31], _LocationL());
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 75,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/floating_quick_access_bar.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35], _LocationL());
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 69,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/floating_quick_access_bar.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "heightFactor",
        [_Location_column]: 7,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39], _LocationL());
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 67,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/floating_quick_access_bar.dart"
      });
    }
  }, false);
  var screenSize$ = dart.privateName(floating_quick_access_bar, "FloatingQuickAccessBar.screenSize");
  floating_quick_access_bar.FloatingQuickAccessBar = class FloatingQuickAccessBar extends framework.StatefulWidget {
    get screenSize() {
      return this[screenSize$];
    }
    set screenSize(value) {
      super.screenSize = value;
    }
    createState() {
      return new floating_quick_access_bar._FloatingQuickAccessBarState.new();
    }
  };
  (floating_quick_access_bar.FloatingQuickAccessBar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let screenSize = opts && 'screenSize' in opts ? opts.screenSize : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[screenSize$] = screenSize;
    floating_quick_access_bar.FloatingQuickAccessBar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = floating_quick_access_bar.FloatingQuickAccessBar.prototype;
  dart.addTypeTests(floating_quick_access_bar.FloatingQuickAccessBar);
  dart.addTypeCaches(floating_quick_access_bar.FloatingQuickAccessBar);
  dart.setMethodSignature(floating_quick_access_bar.FloatingQuickAccessBar, () => ({
    __proto__: dart.getMethods(floating_quick_access_bar.FloatingQuickAccessBar.__proto__),
    createState: dart.fnType(dart.legacy(floating_quick_access_bar._FloatingQuickAccessBarState), [])
  }));
  dart.setLibraryUri(floating_quick_access_bar.FloatingQuickAccessBar, L0);
  dart.setFieldSignature(floating_quick_access_bar.FloatingQuickAccessBar, () => ({
    __proto__: dart.getFields(floating_quick_access_bar.FloatingQuickAccessBar.__proto__),
    screenSize: dart.finalFieldType(dart.legacy(ui.Size))
  }));
  var _isHovering = dart.privateName(floating_quick_access_bar, "_isHovering");
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
  var C9;
  var C10;
  var C5;
  var C4;
  var C13;
  var C14;
  var C15;
  var C12;
  var C11;
  var C18;
  var C19;
  var C17;
  var C16;
  var C22;
  var C23;
  var C21;
  var C20;
  var C26;
  var C27;
  var C25;
  var C24;
  var C30;
  var C31;
  var C29;
  var C28;
  var C34;
  var C35;
  var C33;
  var C32;
  var C38;
  var C39;
  var C37;
  var C36;
  floating_quick_access_bar._FloatingQuickAccessBarState = class _FloatingQuickAccessBarState extends framework.State$(dart.legacy(floating_quick_access_bar.FloatingQuickAccessBar)) {
    generateRowElements() {
      this.rowElements[$clear]();
      for (let i = 0; i < dart.notNull(this.items[$length]); i = i + 1) {
        let elementTile = new ink_well.InkWell.new({splashColor: colors.Colors.transparent, hoverColor: colors.Colors.transparent, onHover: dart.fn(value => {
            this.setState(dart.fn(() => {
              let t2, t1, t0, t2$, t1$, t0$;
              dart.test(value) ? (t0 = this[_isHovering], t1 = i, t2 = true, t0[$_set](t1, t2), t2) : (t0$ = this[_isHovering], t1$ = i, t2$ = false, t0$[$_set](t1$, t2$), t2$);
            }, VoidToNull()));
          }, boolLToNull()), onTap: dart.fn(() => {
          }, VoidToNull()), child: new text.Text.new(this.items[$_get](i), {style: new text_style.TextStyle.new({color: dart.dtest(this[_isHovering][$_get](i)) ? theme.Theme.of(this.context).primaryTextTheme.button.decorationColor : theme.Theme.of(this.context).primaryTextTheme.button.color}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4});
        let spacer = new basic.SizedBox.new({height: dart.notNull(this.widget.screenSize.height) / 20, child: new divider.VerticalDivider.new({width: 1.0, color: colors.Colors.blueGrey._get(100), thickness: 1.0, $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16});
        this.rowElements[$add](elementTile);
        if (i < dart.notNull(this.items[$length]) - 1) {
          this.rowElements[$add](spacer);
        }
      }
      return this.rowElements;
    }
    build(context) {
      return new basic.Center.new({heightFactor: 1.0, child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: dart.notNull(this.widget.screenSize.height) * 0.4, left: dart.notNull(this.widget.screenSize.width) / 5, right: dart.notNull(this.widget.screenSize.width) / 5}), child: new card.Card.new({elevation: 5.0, child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: dart.notNull(this.widget.screenSize.height) / 50, bottom: dart.notNull(this.widget.screenSize.height) / 50}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: this.generateRowElements(), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36});
    }
  };
  (floating_quick_access_bar._FloatingQuickAccessBarState.new = function() {
    this[_isHovering] = [false, false, false, false];
    this.rowElements = JSArrayOfWidgetL().of([]);
    this.items = JSArrayOfStringL().of(["Paintings", "Sculptures", "Mystery Boxes", "Coins"]);
    this.icons = JSArrayOfIconDataL().of([icons.Icons.location_on, icons.Icons.date_range, icons.Icons.people, icons.Icons.wb_sunny]);
    floating_quick_access_bar._FloatingQuickAccessBarState.__proto__.new.call(this);
    ;
  }).prototype = floating_quick_access_bar._FloatingQuickAccessBarState.prototype;
  dart.addTypeTests(floating_quick_access_bar._FloatingQuickAccessBarState);
  dart.addTypeCaches(floating_quick_access_bar._FloatingQuickAccessBarState);
  dart.setMethodSignature(floating_quick_access_bar._FloatingQuickAccessBarState, () => ({
    __proto__: dart.getMethods(floating_quick_access_bar._FloatingQuickAccessBarState.__proto__),
    generateRowElements: dart.fnType(dart.legacy(core.List$(dart.legacy(framework.Widget))), []),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(floating_quick_access_bar._FloatingQuickAccessBarState, L0);
  dart.setFieldSignature(floating_quick_access_bar._FloatingQuickAccessBarState, () => ({
    __proto__: dart.getFields(floating_quick_access_bar._FloatingQuickAccessBarState.__proto__),
    [_isHovering]: dart.fieldType(dart.legacy(core.List)),
    rowElements: dart.fieldType(dart.legacy(core.List$(dart.legacy(framework.Widget)))),
    items: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    icons: dart.fieldType(dart.legacy(core.List$(dart.legacy(icon_data.IconData))))
  }));
  dart.trackLibraries("packages/artif/widgets/floating_quick_access_bar.dart", {
    "package:artif/widgets/floating_quick_access_bar.dart": floating_quick_access_bar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["floating_quick_access_bar.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQa;;;;;;;AAGmC;IAA8B;;;QAPtE;QACW;;;AACZ,oFAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqBC,MAAnB,AAAY;AACZ,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAM,sBAAQ,IAAA,AAAC,CAAA;AAC1B,0BAAc,uCACC,uCACD,oCACV,QAAC;AAGN,YAFF,cAAS;;AAC+C,wBAAtD,KAAK,KAAc,KAAX,wBAAY,CAAC,OAAI,MAAN,0BAAwB,MAAX,yBAAY,CAAC,QAAI,OAAN;;oCAGxC;mCACA,kBACL,AAAK,kBAAC,CAAC,WACA,gDACE,AAAW,yBAAC,CAAC,KACR,AAAY,AAAiB,AAAO,eAAjC,wDACH,AAAY,AAAiB,AAAO,eAAjC;AAId,qBAAS,gCACmB,aAAzB,AAAO,AAAW,iCAAS,WAC5B,wCACE,YACO,AAAQ,4BAAC,iBACZ;AAGa,QAA5B,AAAY,uBAAI,WAAW;AAC3B,YAAI,AAAE,CAAD,GAAgB,aAAb,AAAM,uBAAS;AACE,UAAvB,AAAY,uBAAI,MAAM;;;AAI1B,YAAO;IACT;UAG0B;AACxB,YAAO,qCACS,YACP,gCACe,sCACY,aAAzB,AAAO,AAAW,iCAAS,WACF,aAAxB,AAAO,AAAW,gCAAQ,UACD,aAAxB,AAAO,AAAW,gCAAQ,YAE5B,8BACM,YACJ,gCACe,sCACY,aAAzB,AAAO,AAAW,iCAAS,YACC,aAAzB,AAAO,AAAW,iCAAS,aAE9B,sCACgC,8CAC3B;IAMtB;;;IA1EK,oBAAc,CAAC,OAAO,OAAO,OAAO;IAC5B,mBAAc;IAEd,aAAQ,uBAAC,aAAa,cAAc,iBAAiB;IACnD,aAAQ,yBACf,yBACA,wBACA,oBACA;;;EAmEV","file":"../../../../../../../packages/artif/widgets/floating_quick_access_bar.dart.lib.js"}');
  // Exports:
  return {
    widgets__floating_quick_access_bar: floating_quick_access_bar
  };
}));

//# sourceMappingURL=floating_quick_access_bar.dart.lib.js.map
