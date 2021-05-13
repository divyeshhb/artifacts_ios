define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/widgets/icon_theme.dart', 'packages/flutter/src/rendering/paragraph.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/painting/strut_style.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/colors.dart'], (function load__packages__flutter__src__widgets__icon_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__widgets__icon_theme$46dart, packages__flutter__src__rendering__paragraph$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__painting__strut_style$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__colors$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const debug = packages__flutter__src__widgets__widget_span$46dart.src__widgets__debug;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const icon_theme = packages__flutter__src__widgets__icon_theme$46dart.src__widgets__icon_theme;
  const paragraph = packages__flutter__src__rendering__paragraph$46dart.src__rendering__paragraph;
  const text_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_span;
  const text_style = packages__flutter__src__painting__strut_style$46dart.src__painting__text_style;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  var icon$ = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/icon.dart";
  var L1 = "package:flutter/src/widgets/icon.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 25,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 42,
        [_Location_line]: 164,
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
        [_Location_line]: 164,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/icon.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 9,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 164,
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
        [_Location_column]: 14,
        [_Location_line]: 162,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/icon.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 7,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textDirection",
        [_Location_column]: 7,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 7,
        [_Location_line]: 176,
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
        [_Location_column]: 25,
        [_Location_line]: 173,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/icon.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 13,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 13,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transformHitTests",
        [_Location_column]: 13,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], _LocationL());
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 191,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/icon.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.rtl",
        index: 0
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.ltr",
        index: 1
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 210,
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
        [_Location_column]: 18,
        [_Location_line]: 209,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/icon.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 209,
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
        [_Location_column]: 16,
        [_Location_line]: 206,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/icon.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31], _LocationL());
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 205,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/icon.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 7,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 205,
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
        [_Location_column]: 12,
        [_Location_line]: 203,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/icon.dart"
      });
    }
  }, false);
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
  var C16;
  var C17;
  var C18;
  var C14;
  var C13;
  var _name = dart.privateName(ui, "_name");
  var C19;
  var C20;
  var C23;
  var C22;
  var C21;
  var C26;
  var C27;
  var C28;
  var C25;
  var C24;
  var C31;
  var C30;
  var C29;
  var C34;
  var C35;
  var C33;
  var C32;
  var icon$0 = dart.privateName(icon$, "Icon.icon");
  var size$ = dart.privateName(icon$, "Icon.size");
  var color$ = dart.privateName(icon$, "Icon.color");
  var semanticLabel$ = dart.privateName(icon$, "Icon.semanticLabel");
  var textDirection$ = dart.privateName(icon$, "Icon.textDirection");
  icon$.Icon = class Icon extends framework.StatelessWidget {
    get icon() {
      return this[icon$0];
    }
    set icon(value) {
      super.icon = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get semanticLabel() {
      return this[semanticLabel$];
    }
    set semanticLabel(value) {
      super.semanticLabel = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    build(context) {
      let t0, t0$, t0$0, t0$1, t0$2;
      if (context == null) dart.nullFailed(L0, 153, 29, "context");
      if (!(this.textDirection != null || dart.test(debug.debugCheckHasDirectionality(context)))) dart.assertFailed(null, L0, 154, 12, "this.textDirection != null || debugCheckHasDirectionality(context)");
      let textDirection = (t0 = this.textDirection, t0 == null ? basic.Directionality.of(context) : t0);
      let iconTheme = icon_theme.IconTheme.of(context);
      let iconSize = (t0$ = this.size, t0$ == null ? iconTheme.size : t0$);
      if (this.icon == null) {
        return new basic.Semantics.new({label: this.semanticLabel, child: new basic.SizedBox.new({width: iconSize, height: iconSize, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4});
      }
      let iconOpacity = (t0$0 = iconTheme.opacity, t0$0 == null ? 1.0 : t0$0);
      let iconColor = (t0$1 = this.color, t0$1 == null ? dart.nullCheck(iconTheme.color) : t0$1);
      if (iconOpacity !== 1.0) iconColor = iconColor.withOpacity(dart.notNull(iconColor.opacity) * dart.notNull(iconOpacity));
      let iconWidget = new basic.RichText.new({overflow: paragraph.TextOverflow.visible, textDirection: textDirection, text: new text_span.TextSpan.new({text: core.String.fromCharCode(dart.nullCheck(this.icon).codePoint), style: new text_style.TextStyle.new({inherit: false, color: iconColor, fontSize: iconSize, fontFamily: dart.nullCheck(this.icon).fontFamily, package: dart.nullCheck(this.icon).fontPackage})}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8});
      if (dart.test(dart.nullCheck(this.icon).matchTextDirection)) {
        switch (textDirection) {
          case C19 || CT.C19:
          {
            iconWidget = new basic.Transform.new({transform: (t0$2 = vector_math_64.Matrix4.identity(), (() => {
                t0$2.scale(-1.0, 1.0, 1.0);
                return t0$2;
              })()), alignment: alignment.Alignment.center, transformHitTests: false, child: iconWidget, $creationLocationd_0dea112b090073317d4: C13 || CT.C13});
            break;
          }
          case C20 || CT.C20:
          {
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      return new basic.Semantics.new({label: this.semanticLabel, child: new basic.ExcludeSemantics.new({child: new basic.SizedBox.new({width: iconSize, height: iconSize, child: new basic.Center.new({child: iconWidget, $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32});
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 218, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new icon_data.IconDataProperty.new("icon", this.icon, {ifNull: "<empty>", showName: false}));
      properties.add(new diagnostics.DoubleProperty.new("size", this.size, {defaultValue: null}));
      properties.add(new colors.ColorProperty.new("color", this.color, {defaultValue: null}));
    }
  };
  (icon$.Icon.new = function(icon, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let semanticLabel = opts && 'semanticLabel' in opts ? opts.semanticLabel : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[icon$0] = icon;
    this[size$] = size;
    this[color$] = color;
    this[semanticLabel$] = semanticLabel;
    this[textDirection$] = textDirection;
    icon$.Icon.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = icon$.Icon.prototype;
  dart.addTypeTests(icon$.Icon);
  dart.addTypeCaches(icon$.Icon);
  dart.setMethodSignature(icon$.Icon, () => ({
    __proto__: dart.getMethods(icon$.Icon.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(icon$.Icon, L1);
  dart.setFieldSignature(icon$.Icon, () => ({
    __proto__: dart.getFields(icon$.Icon.__proto__),
    icon: dart.finalFieldType(dart.nullable(icon_data.IconData)),
    size: dart.finalFieldType(dart.nullable(core.double)),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    semanticLabel: dart.finalFieldType(dart.nullable(core.String)),
    textDirection: dart.finalFieldType(dart.nullable(ui.TextDirection))
  }));
  dart.trackLibraries("packages/flutter/src/widgets/icon.dart", {
    "package:flutter/src/widgets/icon.dart": icon$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["icon.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkFkB;;;;;;IAcF;;;;;;IA6BD;;;;;;IASC;;;;;;IAeO;;;;;;UAGK;;;AACxB,YAAY,AAAsB,sBAAL,kBAAQ,kCAA4B,OAAO;AACpD,2BAAmC,+BAAd,OAAgC,wBAAG,OAAO;AAE/D,sBAAsB,wBAAG,OAAO;AAEtC,sBAAgB,wBAAL,OAAQ,AAAU,SAAD;AAE1C,UAAI,AAAK,aAAG;AACV,cAAO,iCACE,2BACA,+BAAgB,QAAQ,UAAU,QAAQ;;AAIxC,yBAAgC,OAAlB,AAAU,SAAD,kBAAC,OAAW;AAC1C,uBAAkB,2BAAN,OAAwB,eAAf,AAAU,SAAD;AACpC,UAAI,WAAW,KAAI,KACjB,AAAkE,YAAtD,AAAU,SAAD,aAA+B,aAAlB,AAAU,SAAD,yBAAW,WAAW;AAE5D,uBAAa,kCACK,+CACR,aAAa,QACtB,kCACS,yBAAiB,AAAE,eAAN,8BACnB,uCACI,cACF,SAAS,YACN,QAAQ,cACF,AAAE,eAAN,gCACC,AAAE,eAAN;AAKf,oBAAQ,AAAE,eAAN;AACF,gBAAQ,aAAa;;;AAOhB,YALD,aAAa,+EACQ;AAAY,2BAAM,CAAC,KAAK,KAAK;;gCAC3B,+CACF,cACZ,UAAU;AAEnB;;;;AAEA;;;;AAVJ;;;;AAcF,YAAO,iCACE,2BACA,uCACE,+BACE,QAAQ,UACP,QAAQ,SACT,6BACE,UAAU;IAK3B;;UAGqD;AACd,MAA/B,0BAAoB,UAAU;AAC8C,MAAlF,AAAW,UAAD,KAAK,mCAAiB,QAAQ,oBAAc,qBAAqB;AACX,MAAhE,AAAW,UAAD,KAAK,mCAAe,QAAQ,0BAAoB;AACO,MAAjE,AAAW,UAAD,KAAK,6BAAc,SAAS,2BAAqB;IAC7D;;6BAxJO;QACA;QACA;QACA;QACA;QACA;;IALA;IAEA;IACA;IACA;IACA;AACF,8CAAW,GAAG;;EAAC","file":"../../../../../../../../../../packages/flutter/src/widgets/icon.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__icon: icon$
  };
}));

//# sourceMappingURL=icon.dart.lib.js.map