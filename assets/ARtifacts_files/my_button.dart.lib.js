define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/painting/strut_style.dart'], (function load__packages__artif__widgets__my_button_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__painting__strut_style$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const container = packages__flutter__src__widgets__widget_span$46dart.src__widgets__container;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__widget_span$46dart.src__widgets__text;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const material_button = packages__flutter__src__material__icon_button$46dart.src__material__material_button;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const text_style = packages__flutter__src__painting__strut_style$46dart.src__painting__text_style;
  var my_button = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var VoidToNvoid = () => (VoidToNvoid = dart.constFn(dart.nullable(VoidTovoid())))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(framework.Widget)))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  const CT = Object.create(null);
  var L0 = "package:artif/widgets/my_button.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 24,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 43,
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
        [_Location_column]: 15,
        [_Location_line]: 41,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/my_button.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 24,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], _LocationL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 45,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/my_button.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11, C12 || CT.C12], _LocationL());
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 37,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/my_button.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], _LocationL());
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 36,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/my_button.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21], _LocationL());
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 29,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/my_button.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverColor",
        [_Location_column]: 7,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 7,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 7,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 7,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29], _LocationL());
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 21,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/my_button.dart"
      });
    }
  }, false);
  var name$ = dart.privateName(my_button, "MyButton.name");
  var icon$ = dart.privateName(my_button, "MyButton.icon");
  var onPressed$ = dart.privateName(my_button, "MyButton.onPressed");
  my_button.MyButton = class MyButton extends framework.StatefulWidget {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    createState() {
      return new my_button._MyButtonState.new();
    }
  };
  (my_button.MyButton.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[name$] = name;
    this[icon$] = icon;
    this[onPressed$] = onPressed;
    my_button.MyButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = my_button.MyButton.prototype;
  dart.addTypeTests(my_button.MyButton);
  dart.addTypeCaches(my_button.MyButton);
  dart.setMethodSignature(my_button.MyButton, () => ({
    __proto__: dart.getMethods(my_button.MyButton.__proto__),
    createState: dart.fnType(dart.legacy(my_button._MyButtonState), [])
  }));
  dart.setLibraryUri(my_button.MyButton, L0);
  dart.setFieldSignature(my_button.MyButton, () => ({
    __proto__: dart.getFields(my_button.MyButton.__proto__),
    name: dart.finalFieldType(dart.legacy(core.String)),
    icon: dart.finalFieldType(dart.legacy(icon_data.IconData)),
    onPressed: dart.finalFieldType(dart.legacy(core.Function))
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
  var C5;
  var C4;
  var C10;
  var C11;
  var C12;
  var C9;
  var C8;
  var C15;
  var C14;
  var C13;
  var C18;
  var C19;
  var C20;
  var C21;
  var C17;
  var C16;
  var C24;
  var C25;
  var C26;
  var C27;
  var C28;
  var C29;
  var C23;
  var C22;
  my_button._MyButtonState = class _MyButtonState extends framework.State$(dart.legacy(my_button.MyButton)) {
    build(context) {
      return new material_button.MaterialButton.new({color: colors.Colors.black87, hoverColor: colors.Colors.black, highlightColor: colors.Colors.blueGrey._get(800), onPressed: VoidToNvoid().as(this.widget.onPressed), shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(5.0)}), child: new container.Container.new({height: 50.0, width: 375.0, padding: new edge_insets.EdgeInsets.only({top: 8.0, bottom: 8.0}), child: new basic.Center.new({child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidgetL().of([new icon.Icon.new(this.widget.icon, {color: colors.Colors.white, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new text.Text.new(this.widget.name, {style: new text_style.TextStyle.new({fontFamily: "Montserrat", fontSize: 14.0, color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4})]), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22});
    }
  };
  (my_button._MyButtonState.new = function() {
    my_button._MyButtonState.__proto__.new.call(this);
    ;
  }).prototype = my_button._MyButtonState.prototype;
  dart.addTypeTests(my_button._MyButtonState);
  dart.addTypeCaches(my_button._MyButtonState);
  dart.setMethodSignature(my_button._MyButtonState, () => ({
    __proto__: dart.getMethods(my_button._MyButtonState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(my_button._MyButtonState, L0);
  dart.trackLibraries("packages/artif/widgets/my_button.dart", {
    "package:artif/widgets/my_button.dart": my_button
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["my_button.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGe;;;;;;IACE;;;;;;IACA;;;;;;;AASiB;IAAgB;;;QANzC;QACA;QACA;;IAFA;IACA;IACA;AAHP;;EAIE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAQwB;AACxB,YAAO,gDACS,mCACK,qCACI,AAAQ,4BAAC,kCACrB,AAAO,+BACX,uEACsB,wCAAS,eAE/B,qCACG,aACD,gBACa,sCACb,aACG,cAEH,6BACE,sCACgC,mDACE,0CAC7B,uBACR,kBACE,AAAO,0BACO,4EAEhB,kBACE,AAAO,0BACA,0CACO,wBACF,aACI;IAQ9B;;;;;EACF","file":"../../../../../../../packages/artif/widgets/my_button.dart.lib.js"}');
  // Exports:
  return {
    widgets__my_button: my_button
  };
}));

//# sourceMappingURL=my_button.dart.lib.js.map
