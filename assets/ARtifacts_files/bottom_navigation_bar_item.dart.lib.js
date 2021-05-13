define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart'], (function load__packages__flutter__src__widgets__bottom_navigation_bar_item_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  var bottom_navigation_bar_item = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L1 = "package:flutter/src/widgets/bottom_navigation_bar_item.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/bottom_navigation_bar_item.dart";
  var icon$ = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.icon");
  var activeIcon$ = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.activeIcon");
  var title$ = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.title");
  var label$ = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.label");
  var backgroundColor$ = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.backgroundColor");
  bottom_navigation_bar_item.BottomNavigationBarItem = class BottomNavigationBarItem extends core.Object {
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get activeIcon() {
      return this[activeIcon$];
    }
    set activeIcon(value) {
      super.activeIcon = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
  };
  (bottom_navigation_bar_item.BottomNavigationBarItem.new = function(opts) {
    let t0;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    if (icon == null) dart.nullFailed(L0, 26, 19, "icon");
    let title = opts && 'title' in opts ? opts.title : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let activeIcon = opts && 'activeIcon' in opts ? opts.activeIcon : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    this[icon$] = icon;
    this[title$] = title;
    this[label$] = label;
    this[backgroundColor$] = backgroundColor;
    this[activeIcon$] = (t0 = activeIcon, t0 == null ? icon : t0);
    if (!(label == null || title == null)) dart.assertFailed(null, L0, 36, 15, "label == null || title == null");
    if (!(icon != null)) dart.assertFailed(null, L0, 37, 15, "icon != null");
    ;
  }).prototype = bottom_navigation_bar_item.BottomNavigationBarItem.prototype;
  dart.addTypeTests(bottom_navigation_bar_item.BottomNavigationBarItem);
  dart.addTypeCaches(bottom_navigation_bar_item.BottomNavigationBarItem);
  dart.setLibraryUri(bottom_navigation_bar_item.BottomNavigationBarItem, L1);
  dart.setFieldSignature(bottom_navigation_bar_item.BottomNavigationBarItem, () => ({
    __proto__: dart.getFields(bottom_navigation_bar_item.BottomNavigationBarItem.__proto__),
    icon: dart.finalFieldType(framework.Widget),
    activeIcon: dart.finalFieldType(framework.Widget),
    title: dart.finalFieldType(dart.nullable(framework.Widget)),
    label: dart.finalFieldType(dart.nullable(core.String)),
    backgroundColor: dart.finalFieldType(dart.nullable(ui.Color))
  }));
  dart.trackLibraries("packages/flutter/src/widgets/bottom_navigation_bar_item.dart", {
    "package:flutter/src/widgets/bottom_navigation_bar_item.dart": bottom_navigation_bar_item
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["bottom_navigation_bar_item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;IAuDe;;;;;;IAWA;;;;;;IASC;;;;;;IAOA;;;;;;IAeD;;;;;;;;;QAxEG;;QAKT;QACA;QACG;QACH;IARS;IAKT;IACA;IAEA;IACS,qBAAa,KAAX,UAAU,QAAV,OAAc,IAAI;UACxB,AAAM,AAAQ,KAAT,IAAI,QAAQ,AAAM,KAAD,IAAI;UAC1B,AAAK,IAAD,IAAI;;EAAK","file":"../../../../../../../../../../packages/flutter/src/widgets/bottom_navigation_bar_item.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__bottom_navigation_bar_item: bottom_navigation_bar_item
  };
}));

//# sourceMappingURL=bottom_navigation_bar_item.dart.lib.js.map
