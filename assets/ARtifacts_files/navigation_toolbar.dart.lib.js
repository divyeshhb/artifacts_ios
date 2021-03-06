define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/custom_layout.dart'], (function load__packages__flutter__src__widgets__navigation_toolbar_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__custom_layout$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const debug = packages__flutter__src__widgets__widget_span$46dart.src__widgets__debug;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const custom_layout = packages__flutter__src__rendering__custom_layout$46dart.src__rendering__custom_layout;
  var navigation_toolbar = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var _ToolbarSlotL = () => (_ToolbarSlotL = dart.constFn(dart.legacy(navigation_toolbar._ToolbarSlot)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/navigation_toolbar.dart";
  var L1 = "package:flutter/src/widgets/navigation_toolbar.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 39,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 65,
        [_Location_line]: 72,
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
        [_Location_column]: 30,
        [_Location_line]: 72,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/navigation_toolbar.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 38,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 63,
        [_Location_line]: 73,
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
        [_Location_column]: 29,
        [_Location_line]: 73,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/navigation_toolbar.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 40,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 67,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11], _LocationL());
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 74,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/navigation_toolbar.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 7,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], _LocationL());
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 65,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/navigation_toolbar.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: navigation_toolbar._ToolbarSlot.prototype,
        [_name$]: "_ToolbarSlot.leading",
        index: 0
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: navigation_toolbar._ToolbarSlot.prototype,
        [_name$]: "_ToolbarSlot.middle",
        index: 1
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: navigation_toolbar._ToolbarSlot.prototype,
        [_name$]: "_ToolbarSlot.trailing",
        index: 2
      });
    },
    get C19() {
      return C19 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], _ToolbarSlotL());
    },
    get C20() {
      return C20 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.rtl",
        index: 0
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.ltr",
        index: 1
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
  var C9;
  var C8;
  var C14;
  var C15;
  var C13;
  var C12;
  var leading$ = dart.privateName(navigation_toolbar, "NavigationToolbar.leading");
  var middle$ = dart.privateName(navigation_toolbar, "NavigationToolbar.middle");
  var trailing$ = dart.privateName(navigation_toolbar, "NavigationToolbar.trailing");
  var centerMiddle$ = dart.privateName(navigation_toolbar, "NavigationToolbar.centerMiddle");
  var middleSpacing$ = dart.privateName(navigation_toolbar, "NavigationToolbar.middleSpacing");
  navigation_toolbar.NavigationToolbar = class NavigationToolbar extends framework.StatelessWidget {
    get leading() {
      return this[leading$];
    }
    set leading(value) {
      super.leading = value;
    }
    get middle() {
      return this[middle$];
    }
    set middle(value) {
      super.middle = value;
    }
    get trailing() {
      return this[trailing$];
    }
    set trailing(value) {
      super.trailing = value;
    }
    get centerMiddle() {
      return this[centerMiddle$];
    }
    set centerMiddle(value) {
      super.centerMiddle = value;
    }
    get middleSpacing() {
      return this[middleSpacing$];
    }
    set middleSpacing(value) {
      super.middleSpacing = value;
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 62, 29, "context");
      if (!dart.test(debug.debugCheckHasDirectionality(context))) dart.assertFailed(null, L0, 63, 12, "debugCheckHasDirectionality(context)");
      let textDirection = basic.Directionality.of(context);
      return new basic.CustomMultiChildLayout.new({delegate: new navigation_toolbar._ToolbarLayout.new({centerMiddle: this.centerMiddle, middleSpacing: this.middleSpacing, textDirection: textDirection}), children: (() => {
          let t0 = JSArrayOfWidget().of([]);
          if (this.leading != null) t0.push(new basic.LayoutId.new({id: navigation_toolbar._ToolbarSlot.leading, child: dart.nullCheck(this.leading), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}));
          if (this.middle != null) t0.push(new basic.LayoutId.new({id: navigation_toolbar._ToolbarSlot.middle, child: dart.nullCheck(this.middle), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}));
          if (this.trailing != null) t0.push(new basic.LayoutId.new({id: navigation_toolbar._ToolbarSlot.trailing, child: dart.nullCheck(this.trailing), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}));
          return t0;
        })(), $creationLocationd_0dea112b090073317d4: C12 || CT.C12});
    }
  };
  (navigation_toolbar.NavigationToolbar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let middle = opts && 'middle' in opts ? opts.middle : null;
    let trailing = opts && 'trailing' in opts ? opts.trailing : null;
    let centerMiddle = opts && 'centerMiddle' in opts ? opts.centerMiddle : true;
    if (centerMiddle == null) dart.nullFailed(L0, 33, 10, "centerMiddle");
    let middleSpacing = opts && 'middleSpacing' in opts ? opts.middleSpacing : 16;
    if (middleSpacing == null) dart.nullFailed(L0, 34, 10, "middleSpacing");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[leading$] = leading;
    this[middle$] = middle;
    this[trailing$] = trailing;
    this[centerMiddle$] = centerMiddle;
    this[middleSpacing$] = middleSpacing;
    if (!(centerMiddle != null)) dart.assertFailed(null, L0, 35, 15, "centerMiddle != null");
    if (!(middleSpacing != null)) dart.assertFailed(null, L0, 36, 15, "middleSpacing != null");
    navigation_toolbar.NavigationToolbar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = navigation_toolbar.NavigationToolbar.prototype;
  dart.addTypeTests(navigation_toolbar.NavigationToolbar);
  dart.addTypeCaches(navigation_toolbar.NavigationToolbar);
  dart.setMethodSignature(navigation_toolbar.NavigationToolbar, () => ({
    __proto__: dart.getMethods(navigation_toolbar.NavigationToolbar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(navigation_toolbar.NavigationToolbar, L1);
  dart.setFieldSignature(navigation_toolbar.NavigationToolbar, () => ({
    __proto__: dart.getFields(navigation_toolbar.NavigationToolbar.__proto__),
    leading: dart.finalFieldType(dart.nullable(framework.Widget)),
    middle: dart.finalFieldType(dart.nullable(framework.Widget)),
    trailing: dart.finalFieldType(dart.nullable(framework.Widget)),
    centerMiddle: dart.finalFieldType(core.bool),
    middleSpacing: dart.finalFieldType(core.double)
  }));
  dart.defineLazy(navigation_toolbar.NavigationToolbar, {
    /*navigation_toolbar.NavigationToolbar.kMiddleSpacing*/get kMiddleSpacing() {
      return 16;
    }
  }, false);
  var _name$ = dart.privateName(navigation_toolbar, "_name");
  var C16;
  var C17;
  var C18;
  var C19;
  navigation_toolbar._ToolbarSlot = class _ToolbarSlot extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (navigation_toolbar._ToolbarSlot.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 80, 6, "index");
    if (_name == null) dart.nullFailed(L0, 80, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = navigation_toolbar._ToolbarSlot.prototype;
  dart.addTypeTests(navigation_toolbar._ToolbarSlot);
  dart.addTypeCaches(navigation_toolbar._ToolbarSlot);
  dart.setLibraryUri(navigation_toolbar._ToolbarSlot, L1);
  dart.setFieldSignature(navigation_toolbar._ToolbarSlot, () => ({
    __proto__: dart.getFields(navigation_toolbar._ToolbarSlot.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(navigation_toolbar._ToolbarSlot, ['toString']);
  navigation_toolbar._ToolbarSlot.leading = C16 || CT.C16;
  navigation_toolbar._ToolbarSlot.middle = C17 || CT.C17;
  navigation_toolbar._ToolbarSlot.trailing = C18 || CT.C18;
  navigation_toolbar._ToolbarSlot.values = C19 || CT.C19;
  var _name = dart.privateName(ui, "_name");
  var C20;
  var C21;
  navigation_toolbar._ToolbarLayout = class _ToolbarLayout extends custom_layout.MultiChildLayoutDelegate {
    performLayout(size) {
      if (size == null) dart.nullFailed(L0, 106, 27, "size");
      let leadingWidth = 0.0;
      let trailingWidth = 0.0;
      if (dart.test(this.hasChild(navigation_toolbar._ToolbarSlot.leading))) {
        let constraints = new box.BoxConstraints.new({minWidth: 0.0, maxWidth: dart.notNull(size.width) / 3.0, minHeight: size.height, maxHeight: size.height});
        leadingWidth = this.layoutChild(navigation_toolbar._ToolbarSlot.leading, constraints).width;
        let leadingX = null;
        switch (this.textDirection) {
          case C20 || CT.C20:
          {
            leadingX = dart.notNull(size.width) - dart.notNull(leadingWidth);
            break;
          }
          case C21 || CT.C21:
          {
            leadingX = 0.0;
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        this.positionChild(navigation_toolbar._ToolbarSlot.leading, new ui.Offset.new(leadingX, 0.0));
      }
      if (dart.test(this.hasChild(navigation_toolbar._ToolbarSlot.trailing))) {
        let constraints = new box.BoxConstraints.loose(size);
        let trailingSize = this.layoutChild(navigation_toolbar._ToolbarSlot.trailing, constraints);
        let trailingX = null;
        switch (this.textDirection) {
          case C20 || CT.C20:
          {
            trailingX = 0.0;
            break;
          }
          case C21 || CT.C21:
          {
            trailingX = dart.notNull(size.width) - dart.notNull(trailingSize.width);
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        let trailingY = (dart.notNull(size.height) - dart.notNull(trailingSize.height)) / 2.0;
        trailingWidth = trailingSize.width;
        this.positionChild(navigation_toolbar._ToolbarSlot.trailing, new ui.Offset.new(trailingX, trailingY));
      }
      if (dart.test(this.hasChild(navigation_toolbar._ToolbarSlot.middle))) {
        let maxWidth = math.max(core.double, dart.notNull(size.width) - dart.notNull(leadingWidth) - dart.notNull(trailingWidth) - dart.notNull(this.middleSpacing) * 2.0, 0.0);
        let constraints = new box.BoxConstraints.loose(size).copyWith({maxWidth: maxWidth});
        let middleSize = this.layoutChild(navigation_toolbar._ToolbarSlot.middle, constraints);
        let middleStartMargin = dart.notNull(leadingWidth) + dart.notNull(this.middleSpacing);
        let middleStart = middleStartMargin;
        let middleY = (dart.notNull(size.height) - dart.notNull(middleSize.height)) / 2.0;
        if (dart.test(this.centerMiddle)) {
          middleStart = (dart.notNull(size.width) - dart.notNull(middleSize.width)) / 2.0;
          if (middleStart + dart.notNull(middleSize.width) > dart.notNull(size.width) - dart.notNull(trailingWidth))
            middleStart = dart.notNull(size.width) - dart.notNull(trailingWidth) - dart.notNull(middleSize.width);
          else if (middleStart < middleStartMargin) middleStart = middleStartMargin;
        }
        let middleX = null;
        switch (this.textDirection) {
          case C20 || CT.C20:
          {
            middleX = dart.notNull(size.width) - dart.notNull(middleSize.width) - middleStart;
            break;
          }
          case C21 || CT.C21:
          {
            middleX = middleStart;
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        this.positionChild(navigation_toolbar._ToolbarSlot.middle, new ui.Offset.new(middleX, middleY));
      }
    }
    shouldRelayout(oldDelegate) {
      navigation_toolbar._ToolbarLayout.as(oldDelegate);
      if (oldDelegate == null) dart.nullFailed(L0, 180, 38, "oldDelegate");
      return !dart.equals(oldDelegate.centerMiddle, this.centerMiddle) || oldDelegate.middleSpacing != this.middleSpacing || !dart.equals(oldDelegate.textDirection, this.textDirection);
    }
  };
  (navigation_toolbar._ToolbarLayout.new = function(opts) {
    let centerMiddle = opts && 'centerMiddle' in opts ? opts.centerMiddle : null;
    if (centerMiddle == null) dart.nullFailed(L0, 88, 19, "centerMiddle");
    let middleSpacing = opts && 'middleSpacing' in opts ? opts.middleSpacing : null;
    if (middleSpacing == null) dart.nullFailed(L0, 89, 19, "middleSpacing");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    if (textDirection == null) dart.nullFailed(L0, 90, 19, "textDirection");
    this.centerMiddle = centerMiddle;
    this.middleSpacing = middleSpacing;
    this.textDirection = textDirection;
    if (!(middleSpacing != null)) dart.assertFailed(null, L0, 91, 15, "middleSpacing != null");
    if (!(textDirection != null)) dart.assertFailed(null, L0, 92, 15, "textDirection != null");
    navigation_toolbar._ToolbarLayout.__proto__.new.call(this);
    ;
  }).prototype = navigation_toolbar._ToolbarLayout.prototype;
  dart.addTypeTests(navigation_toolbar._ToolbarLayout);
  dart.addTypeCaches(navigation_toolbar._ToolbarLayout);
  dart.setMethodSignature(navigation_toolbar._ToolbarLayout, () => ({
    __proto__: dart.getMethods(navigation_toolbar._ToolbarLayout.__proto__),
    performLayout: dart.fnType(dart.void, [ui.Size]),
    shouldRelayout: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(navigation_toolbar._ToolbarLayout, L1);
  dart.setFieldSignature(navigation_toolbar._ToolbarLayout, () => ({
    __proto__: dart.getFields(navigation_toolbar._ToolbarLayout.__proto__),
    centerMiddle: dart.finalFieldType(core.bool),
    middleSpacing: dart.finalFieldType(core.double),
    textDirection: dart.finalFieldType(ui.TextDirection)
  }));
  dart.trackLibraries("packages/flutter/src/widgets/navigation_toolbar.dart", {
    "package:flutter/src/widgets/navigation_toolbar.dart": navigation_toolbar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["navigation_toolbar.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/navigation_toolbar.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__navigation_toolbar: navigation_toolbar
  };
}));

//# sourceMappingURL=navigation_toolbar.dart.lib.js.map
