define(['dart_sdk', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__painting__decoration_dart(dart_sdk, packages__flutter__src__foundation__object$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var decoration = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L1 = "package:flutter/src/painting/decoration.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/decoration.dart";
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  decoration.Decoration = class Decoration extends Object_Diagnosticable$36 {
    toStringShort() {
      return object.objectRuntimeType(this, "Decoration");
    }
    debugAssertIsValid() {
      return true;
    }
    get padding() {
      return edge_insets.EdgeInsets.zero;
    }
    get isComplex() {
      return false;
    }
    lerpFrom(a, t) {
      if (t == null) dart.nullFailed(L0, 91, 46, "t");
      return null;
    }
    lerpTo(b, t) {
      if (t == null) dart.nullFailed(L0, 120, 44, "t");
      return null;
    }
    static lerp(a, b, t) {
      let t0, t0$, t0$0, t1, t1$, t0$1;
      if (t == null) dart.nullFailed(L0, 129, 64, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 130, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) {
        t0 = dart.nullCheck(b).lerpFrom(null, t);
        return t0 == null ? b : t0;
      }
      if (b == null) {
        t0$ = a.lerpTo(null, t);
        return t0$ == null ? a : t0$;
      }
      if (t === 0.0) return a;
      if (t === 1.0) return b;
      t0$1 = (t0$0 = b.lerpFrom(a, t), t0$0 == null ? a.lerpTo(b, t) : t0$0);
      return t0$1 == null ? dart.notNull(t) < 0.5 ? (t1 = a.lerpTo(null, dart.notNull(t) * 2.0), t1 == null ? a : t1) : (t1$ = b.lerpFrom(null, (dart.notNull(t) - 0.5) * 2.0), t1$ == null ? b : t1$) : t0$1;
    }
    hitTest(size, position, opts) {
      if (size == null) dart.nullFailed(L0, 161, 21, "size");
      if (position == null) dart.nullFailed(L0, 161, 34, "position");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return true;
    }
    getClipPath(rect, textDirection) {
      if (rect == null) dart.nullFailed(L0, 181, 25, "rect");
      if (textDirection == null) dart.nullFailed(L0, 181, 45, "textDirection");
      dart.throw(new core.UnsupportedError.new(dart.str(object.objectRuntimeType(this, "This Decoration subclass")) + " does not expect to be used for clipping."));
    }
  };
  (decoration.Decoration.new = function() {
    ;
  }).prototype = decoration.Decoration.prototype;
  dart.addTypeTests(decoration.Decoration);
  dart.addTypeCaches(decoration.Decoration);
  dart.setMethodSignature(decoration.Decoration, () => ({
    __proto__: dart.getMethods(decoration.Decoration.__proto__),
    debugAssertIsValid: dart.fnType(core.bool, []),
    lerpFrom: dart.fnType(dart.nullable(decoration.Decoration), [dart.nullable(decoration.Decoration), core.double]),
    lerpTo: dart.fnType(dart.nullable(decoration.Decoration), [dart.nullable(decoration.Decoration), core.double]),
    hitTest: dart.fnType(core.bool, [ui.Size, ui.Offset], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    getClipPath: dart.fnType(ui.Path, [ui.Rect, ui.TextDirection])
  }));
  dart.setGetterSignature(decoration.Decoration, () => ({
    __proto__: dart.getGetters(decoration.Decoration.__proto__),
    padding: dart.nullable(edge_insets.EdgeInsetsGeometry),
    isComplex: core.bool
  }));
  dart.setLibraryUri(decoration.Decoration, L1);
  var onChanged$ = dart.privateName(decoration, "BoxPainter.onChanged");
  decoration.BoxPainter = class BoxPainter extends core.Object {
    get onChanged() {
      return this[onChanged$];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    dispose() {
    }
  };
  (decoration.BoxPainter.new = function(onChanged = null) {
    this[onChanged$] = onChanged;
    ;
  }).prototype = decoration.BoxPainter.prototype;
  dart.addTypeTests(decoration.BoxPainter);
  dart.addTypeCaches(decoration.BoxPainter);
  dart.setMethodSignature(decoration.BoxPainter, () => ({
    __proto__: dart.getMethods(decoration.BoxPainter.__proto__),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(decoration.BoxPainter, L1);
  dart.setFieldSignature(decoration.BoxPainter, () => ({
    __proto__: dart.getFields(decoration.BoxPainter.__proto__),
    onChanged: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [])))
  }));
  dart.trackLibraries("packages/flutter/src/painting/decoration.dart", {
    "package:flutter/src/painting/decoration.dart": decoration
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["decoration.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;AA6B4B,sCAAkB,MAAM;IAAa;;AASlC;IAAI;;AAqBE,YAAW;IAAI;;AAG5B;IAAK;aA4BM;UAAU;AAAM;IAAI;WA6BtB;UAAU;AAAM;IAAI;gBASf,GAAe,GAAU;;;AAC3D,YAAO,AAAE,CAAD,IAAI;AACZ,UAAI,AAAE,CAAD,IAAI,QAAQ,AAAE,CAAD,IAAI,MACpB,MAAO;AACT,UAAI,AAAE,CAAD,IAAI,MACP;aAAQ,AAAE,eAAH,CAAC,WAAW,MAAM,CAAC;qBAAhB,OAAqB,CAAC;;AAClC,UAAI,AAAE,CAAD,IAAI,MACP;cAAO,AAAE,CAAD,QAAQ,MAAM,CAAC;sBAAd,OAAmB,CAAC;;AAC/B,UAAI,AAAE,CAAD,KAAI,KACP,MAAO,EAAC;AACV,UAAI,AAAE,CAAD,KAAI,KACP,MAAO,EAAC;AACV,cACI,OADG,AAAE,CAAD,UAAU,CAAC,EAAE,CAAC,WAAb,OACF,AAAE,CAAD,QAAQ,CAAC,EAAE,CAAC;qBAAhB,OACM,aAAF,CAAC,IAAG,OAA+B,KAAxB,AAAE,CAAD,QAAQ,MAAQ,aAAF,CAAC,IAAG,YAAjB,OAAyB,CAAC,UAAuC,MAAlC,AAAE,CAAD,UAAU,MAAgB,CAAP,aAAF,CAAC,IAAG,OAAO,aAA3B,OAAmC,CAAC;IAC5F;YAiBkB,MAAa;UAAb;UAAa;UAA2B;AAAoB;IAAI;gBAoB5D,MAAoB;UAApB;UAAoB;AACiF,MAAzH,WAAM,8BAAkH,SAA9F,yBAAkB,MAAM,+BAA4B;IAChF;;;;EA5JkB;;;;;;;;;;;;;;;;;;;IA8ME;;;;;;;IAOH;;;IA3CM;;EAAW","file":"../../../../../../../../../../packages/flutter/src/painting/decoration.dart.lib.js"}');
  // Exports:
  return {
    src__painting__decoration: decoration
  };
}));

//# sourceMappingURL=decoration.dart.lib.js.map
