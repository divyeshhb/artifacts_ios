define(['dart_sdk', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__widgets__safe_area_dart(dart_sdk, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const debug = packages__flutter__src__widgets__widget_span$46dart.src__widgets__debug;
  const media_query = packages__flutter__src__widgets__widget_span$46dart.src__widgets__media_query;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var safe_area = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/widgets/safe_area.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/safe_area.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "context",
        [_Location_column]: 9,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "removeLeft",
        [_Location_column]: 9,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "removeTop",
        [_Location_column]: 9,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "removeRight",
        [_Location_column]: 9,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "removeBottom",
        [_Location_column]: 9,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], _LocationL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 111,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/safe_area.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], _LocationL());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 104,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/safe_area.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "context",
        [_Location_column]: 9,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "removeLeft",
        [_Location_column]: 9,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "removeTop",
        [_Location_column]: 9,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "removeRight",
        [_Location_column]: 9,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "removeBottom",
        [_Location_column]: 9,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], _LocationL());
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 205,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/safe_area.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sliver",
        [_Location_column]: 7,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], _LocationL());
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 198,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/safe_area.dart"
      });
    }
  }, false);
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C0;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C2;
  var C1;
  var C11;
  var C12;
  var C10;
  var C9;
  var left$ = dart.privateName(safe_area, "SafeArea.left");
  var top$ = dart.privateName(safe_area, "SafeArea.top");
  var right$ = dart.privateName(safe_area, "SafeArea.right");
  var bottom$ = dart.privateName(safe_area, "SafeArea.bottom");
  var minimum$ = dart.privateName(safe_area, "SafeArea.minimum");
  var maintainBottomViewPadding$ = dart.privateName(safe_area, "SafeArea.maintainBottomViewPadding");
  var child$ = dart.privateName(safe_area, "SafeArea.child");
  safe_area.SafeArea = class SafeArea extends framework.StatelessWidget {
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
    get minimum() {
      return this[minimum$];
    }
    set minimum(value) {
      super.minimum = value;
    }
    get maintainBottomViewPadding() {
      return this[maintainBottomViewPadding$];
    }
    set maintainBottomViewPadding(value) {
      super.maintainBottomViewPadding = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 96, 29, "context");
      if (!dart.test(debug.debugCheckHasMediaQuery(context))) dart.assertFailed(null, L0, 97, 12, "debugCheckHasMediaQuery(context)");
      let data = media_query.MediaQuery.of(context);
      let padding = data.padding;
      if (data.padding.bottom === 0.0 && data.viewInsets.bottom !== 0.0 && dart.test(this.maintainBottomViewPadding)) padding = padding.copyWith({bottom: data.viewPadding.bottom});
      return new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: math.max(core.double, dart.test(this.left) ? padding.left : 0.0, this.minimum.left), top: math.max(core.double, dart.test(this.top) ? padding.top : 0.0, this.minimum.top), right: math.max(core.double, dart.test(this.right) ? padding.right : 0.0, this.minimum.right), bottom: math.max(core.double, dart.test(this.bottom) ? padding.bottom : 0.0, this.minimum.bottom)}), child: media_query.MediaQuery.removePadding({context: context, removeLeft: this.left, removeTop: this.top, removeRight: this.right, removeBottom: this.bottom, child: this.child, $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9});
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 123, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.FlagProperty.new("left", {value: this.left, ifTrue: "avoid left padding"}));
      properties.add(new diagnostics.FlagProperty.new("top", {value: this.top, ifTrue: "avoid top padding"}));
      properties.add(new diagnostics.FlagProperty.new("right", {value: this.right, ifTrue: "avoid right padding"}));
      properties.add(new diagnostics.FlagProperty.new("bottom", {value: this.bottom, ifTrue: "avoid bottom padding"}));
    }
  };
  (safe_area.SafeArea.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let left = opts && 'left' in opts ? opts.left : true;
    if (left == null) dart.nullFailed(L0, 43, 10, "left");
    let top = opts && 'top' in opts ? opts.top : true;
    if (top == null) dart.nullFailed(L0, 44, 10, "top");
    let right = opts && 'right' in opts ? opts.right : true;
    if (right == null) dart.nullFailed(L0, 45, 10, "right");
    let bottom = opts && 'bottom' in opts ? opts.bottom : true;
    if (bottom == null) dart.nullFailed(L0, 46, 10, "bottom");
    let minimum = opts && 'minimum' in opts ? opts.minimum : C0 || CT.C0;
    if (minimum == null) dart.nullFailed(L0, 47, 10, "minimum");
    let maintainBottomViewPadding = opts && 'maintainBottomViewPadding' in opts ? opts.maintainBottomViewPadding : false;
    if (maintainBottomViewPadding == null) dart.nullFailed(L0, 48, 10, "maintainBottomViewPadding");
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L0, 49, 19, "child");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[left$] = left;
    this[top$] = top;
    this[right$] = right;
    this[bottom$] = bottom;
    this[minimum$] = minimum;
    this[maintainBottomViewPadding$] = maintainBottomViewPadding;
    this[child$] = child;
    if (!(left != null)) dart.assertFailed(null, L0, 50, 15, "left != null");
    if (!(top != null)) dart.assertFailed(null, L0, 51, 15, "top != null");
    if (!(right != null)) dart.assertFailed(null, L0, 52, 15, "right != null");
    if (!(bottom != null)) dart.assertFailed(null, L0, 53, 15, "bottom != null");
    safe_area.SafeArea.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = safe_area.SafeArea.prototype;
  dart.addTypeTests(safe_area.SafeArea);
  dart.addTypeCaches(safe_area.SafeArea);
  dart.setMethodSignature(safe_area.SafeArea, () => ({
    __proto__: dart.getMethods(safe_area.SafeArea.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(safe_area.SafeArea, L1);
  dart.setFieldSignature(safe_area.SafeArea, () => ({
    __proto__: dart.getFields(safe_area.SafeArea.__proto__),
    left: dart.finalFieldType(core.bool),
    top: dart.finalFieldType(core.bool),
    right: dart.finalFieldType(core.bool),
    bottom: dart.finalFieldType(core.bool),
    minimum: dart.finalFieldType(edge_insets.EdgeInsets),
    maintainBottomViewPadding: dart.finalFieldType(core.bool),
    child: dart.finalFieldType(framework.Widget)
  }));
  var C15;
  var C16;
  var C17;
  var C18;
  var C19;
  var C20;
  var C14;
  var C13;
  var C23;
  var C24;
  var C22;
  var C21;
  var left$0 = dart.privateName(safe_area, "SliverSafeArea.left");
  var top$0 = dart.privateName(safe_area, "SliverSafeArea.top");
  var right$0 = dart.privateName(safe_area, "SliverSafeArea.right");
  var bottom$0 = dart.privateName(safe_area, "SliverSafeArea.bottom");
  var minimum$0 = dart.privateName(safe_area, "SliverSafeArea.minimum");
  var sliver$ = dart.privateName(safe_area, "SliverSafeArea.sliver");
  safe_area.SliverSafeArea = class SliverSafeArea extends framework.StatelessWidget {
    get left() {
      return this[left$0];
    }
    set left(value) {
      super.left = value;
    }
    get top() {
      return this[top$0];
    }
    set top(value) {
      super.top = value;
    }
    get right() {
      return this[right$0];
    }
    set right(value) {
      super.right = value;
    }
    get bottom() {
      return this[bottom$0];
    }
    set bottom(value) {
      super.bottom = value;
    }
    get minimum() {
      return this[minimum$0];
    }
    set minimum(value) {
      super.minimum = value;
    }
    get sliver() {
      return this[sliver$];
    }
    set sliver(value) {
      super.sliver = value;
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 195, 29, "context");
      if (!dart.test(debug.debugCheckHasMediaQuery(context))) dart.assertFailed(null, L0, 196, 12, "debugCheckHasMediaQuery(context)");
      let padding = media_query.MediaQuery.of(context).padding;
      return new basic.SliverPadding.new({padding: new edge_insets.EdgeInsets.only({left: math.max(core.double, dart.test(this.left) ? padding.left : 0.0, this.minimum.left), top: math.max(core.double, dart.test(this.top) ? padding.top : 0.0, this.minimum.top), right: math.max(core.double, dart.test(this.right) ? padding.right : 0.0, this.minimum.right), bottom: math.max(core.double, dart.test(this.bottom) ? padding.bottom : 0.0, this.minimum.bottom)}), sliver: media_query.MediaQuery.removePadding({context: context, removeLeft: this.left, removeTop: this.top, removeRight: this.right, removeBottom: this.bottom, child: this.sliver, $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21});
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 217, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.FlagProperty.new("left", {value: this.left, ifTrue: "avoid left padding"}));
      properties.add(new diagnostics.FlagProperty.new("top", {value: this.top, ifTrue: "avoid top padding"}));
      properties.add(new diagnostics.FlagProperty.new("right", {value: this.right, ifTrue: "avoid right padding"}));
      properties.add(new diagnostics.FlagProperty.new("bottom", {value: this.bottom, ifTrue: "avoid bottom padding"}));
    }
  };
  (safe_area.SliverSafeArea.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let left = opts && 'left' in opts ? opts.left : true;
    if (left == null) dart.nullFailed(L0, 158, 10, "left");
    let top = opts && 'top' in opts ? opts.top : true;
    if (top == null) dart.nullFailed(L0, 159, 10, "top");
    let right = opts && 'right' in opts ? opts.right : true;
    if (right == null) dart.nullFailed(L0, 160, 10, "right");
    let bottom = opts && 'bottom' in opts ? opts.bottom : true;
    if (bottom == null) dart.nullFailed(L0, 161, 10, "bottom");
    let minimum = opts && 'minimum' in opts ? opts.minimum : C0 || CT.C0;
    if (minimum == null) dart.nullFailed(L0, 162, 10, "minimum");
    let sliver = opts && 'sliver' in opts ? opts.sliver : null;
    if (sliver == null) dart.nullFailed(L0, 163, 19, "sliver");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[left$0] = left;
    this[top$0] = top;
    this[right$0] = right;
    this[bottom$0] = bottom;
    this[minimum$0] = minimum;
    this[sliver$] = sliver;
    if (!(left != null)) dart.assertFailed(null, L0, 164, 15, "left != null");
    if (!(top != null)) dart.assertFailed(null, L0, 165, 15, "top != null");
    if (!(right != null)) dart.assertFailed(null, L0, 166, 15, "right != null");
    if (!(bottom != null)) dart.assertFailed(null, L0, 167, 15, "bottom != null");
    safe_area.SliverSafeArea.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = safe_area.SliverSafeArea.prototype;
  dart.addTypeTests(safe_area.SliverSafeArea);
  dart.addTypeCaches(safe_area.SliverSafeArea);
  dart.setMethodSignature(safe_area.SliverSafeArea, () => ({
    __proto__: dart.getMethods(safe_area.SliverSafeArea.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(safe_area.SliverSafeArea, L1);
  dart.setFieldSignature(safe_area.SliverSafeArea, () => ({
    __proto__: dart.getFields(safe_area.SliverSafeArea.__proto__),
    left: dart.finalFieldType(core.bool),
    top: dart.finalFieldType(core.bool),
    right: dart.finalFieldType(core.bool),
    bottom: dart.finalFieldType(core.bool),
    minimum: dart.finalFieldType(edge_insets.EdgeInsets),
    sliver: dart.finalFieldType(framework.Widget)
  }));
  dart.trackLibraries("packages/flutter/src/widgets/safe_area.dart", {
    "package:flutter/src/widgets/safe_area.dart": safe_area
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["safe_area.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwDa;;;;;;IAIA;;;;;;IAGA;;;;;;IAGA;;;;;;IAKM;;;;;;IAaN;;;;;;IAQE;;;;;;;UAGa;AACxB,qBAAO,8BAAwB,OAAO;AACjB,iBAAkB,0BAAG,OAAO;AACtC,oBAAU,AAAK,IAAD;AAEzB,UAAI,AAAK,AAAQ,AAAO,IAAhB,oBAAmB,OAAO,AAAK,AAAW,IAAZ,uBAAsB,iBAAO,iCACjE,AAA2D,UAAjD,AAAQ,OAAD,mBAAkB,AAAK,AAAY,IAAb;AAEzC,YAAO,iCACe,uCACZ,gCAAS,aAAO,AAAQ,OAAD,QAAQ,KAAK,AAAQ,yBAC7C,gCAAS,YAAM,AAAQ,OAAD,OAAO,KAAK,AAAQ,0BACxC,gCAAS,cAAQ,AAAQ,OAAD,SAAS,KAAK,AAAQ,6BAC7C,gCAAS,eAAS,AAAQ,OAAD,UAAU,KAAK,AAAQ,+BAExC,+CACP,OAAO,cACJ,sBACD,uBACE,0BACC,oBACP;IAGb;;UAGqD;AACd,MAA/B,0BAAoB,UAAU;AAC2C,MAA/E,AAAW,UAAD,KAAK,iCAAa,gBAAe,mBAAc;AACmB,MAA5E,AAAW,UAAD,KAAK,iCAAa,eAAc,kBAAa;AAC2B,MAAlF,AAAW,UAAD,KAAK,iCAAa,iBAAgB,oBAAe;AAC0B,MAArF,AAAW,UAAD,KAAK,iCAAa,kBAAiB,qBAAgB;IAC/D;;;QAvFO;QACA;;QACA;;QACA;;QACA;;QACA;;QACA;;QACS;;;IANT;IACA;IACA;IACA;IACA;IACA;IACS;UACJ,AAAK,IAAD,IAAI;UACR,AAAI,GAAD,IAAI;UACP,AAAM,KAAD,IAAI;UACT,AAAO,MAAD,IAAI;AACjB,sDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqHT;;;;;;IAIA;;;;;;IAGA;;;;;;IAGA;;;;;;IAKM;;;;;;IAMJ;;;;;;;UAGa;AACxB,qBAAO,8BAAwB,OAAO;AACrB,oBAAqB,AAAY,0BAAT,OAAO;AAChD,YAAO,uCACe,uCACZ,gCAAS,aAAO,AAAQ,OAAD,QAAQ,KAAK,AAAQ,yBAC7C,gCAAS,YAAM,AAAQ,OAAD,OAAO,KAAK,AAAQ,0BACxC,gCAAS,cAAQ,AAAQ,OAAD,SAAS,KAAK,AAAQ,6BAC7C,gCAAS,eAAS,AAAQ,OAAD,UAAU,KAAK,AAAQ,gCAEvC,+CACR,OAAO,cACJ,sBACD,uBACE,0BACC,oBACP;IAGb;;UAGqD;AACd,MAA/B,0BAAoB,UAAU;AAC2C,MAA/E,AAAW,UAAD,KAAK,iCAAa,gBAAe,mBAAc;AACmB,MAA5E,AAAW,UAAD,KAAK,iCAAa,eAAc,kBAAa;AAC2B,MAAlF,AAAW,UAAD,KAAK,iCAAa,iBAAgB,oBAAe;AAC0B,MAArF,AAAW,UAAD,KAAK,iCAAa,kBAAiB,qBAAgB;IAC/D;;;QAlEO;QACA;;QACA;;QACA;;QACA;;QACA;;QACS;;;IALT;IACA;IACA;IACA;IACA;IACS;UACJ,AAAK,IAAD,IAAI;UACR,AAAI,GAAD,IAAI;UACP,AAAM,KAAD,IAAI;UACT,AAAO,MAAD,IAAI;AACjB,4DAAW,GAAG;;EAAC","file":"../../../../../../../../../../packages/flutter/src/widgets/safe_area.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__safe_area: safe_area
  };
}));

//# sourceMappingURL=safe_area.dart.lib.js.map
