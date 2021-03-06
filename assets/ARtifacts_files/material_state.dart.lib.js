define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/painting/borders.dart'], (function load__packages__flutter__src__material__material_state_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__painting__borders$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const mouse_cursor = packages__flutter__src__rendering__layer$46dart.src__rendering__mouse_cursor;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  var material_state = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var MaterialStateL = () => (MaterialStateL = dart.constFn(dart.legacy(material_state.MaterialState)))();
  var LinkedHashSetOfMaterialState = () => (LinkedHashSetOfMaterialState = dart.constFn(collection.LinkedHashSet$(material_state.MaterialState)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/material/material_state.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/material_state.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: material_state.MaterialState.prototype,
        [_name$]: "MaterialState.hovered",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: material_state.MaterialState.prototype,
        [_name$]: "MaterialState.focused",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: material_state.MaterialState.prototype,
        [_name$]: "MaterialState.pressed",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: material_state.MaterialState.prototype,
        [_name$]: "MaterialState.dragged",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: material_state.MaterialState.prototype,
        [_name$]: "MaterialState.selected",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: material_state.MaterialState.prototype,
        [_name$]: "MaterialState.disabled",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: material_state.MaterialState.prototype,
        [_name$]: "MaterialState.error",
        index: 6
      });
    },
    get C7() {
      return C7 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], MaterialStateL());
    },
    get C8() {
      return C8 = dart.constSet(MaterialStateL(), []);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [SystemMouseCursor_kind]: "basic"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [SystemMouseCursor_kind]: "click"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: material_state._EnabledAndDisabledMouseCursor.prototype,
        [_EnabledAndDisabledMouseCursor_name]: "clickable",
        [_EnabledAndDisabledMouseCursor_disabledCursor]: C10 || CT.C10,
        [_EnabledAndDisabledMouseCursor_enabledCursor]: C11 || CT.C11
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [SystemMouseCursor_kind]: "text"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: material_state._EnabledAndDisabledMouseCursor.prototype,
        [_EnabledAndDisabledMouseCursor_name]: "textable",
        [_EnabledAndDisabledMouseCursor_disabledCursor]: C10 || CT.C10,
        [_EnabledAndDisabledMouseCursor_enabledCursor]: C13 || CT.C13
      });
    }
  }, false);
  var _name$ = dart.privateName(material_state, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  material_state.MaterialState = class MaterialState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (material_state.MaterialState.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 34, 6, "index");
    if (_name == null) dart.nullFailed(L0, 34, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = material_state.MaterialState.prototype;
  dart.addTypeTests(material_state.MaterialState);
  dart.addTypeCaches(material_state.MaterialState);
  dart.setLibraryUri(material_state.MaterialState, L1);
  dart.setFieldSignature(material_state.MaterialState, () => ({
    __proto__: dart.getFields(material_state.MaterialState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(material_state.MaterialState, ['toString']);
  material_state.MaterialState.hovered = C0 || CT.C0;
  material_state.MaterialState.focused = C1 || CT.C1;
  material_state.MaterialState.pressed = C2 || CT.C2;
  material_state.MaterialState.dragged = C3 || CT.C3;
  material_state.MaterialState.selected = C4 || CT.C4;
  material_state.MaterialState.disabled = C5 || CT.C5;
  material_state.MaterialState.error = C6 || CT.C6;
  material_state.MaterialState.values = C7 || CT.C7;
  material_state.MaterialStateColor = class MaterialStateColor extends ui.Color {
    static resolveWith(callback) {
      if (callback == null) dart.nullFailed(L0, 141, 73, "callback");
      return new material_state._MaterialStateColor.new(callback);
    }
  };
  (material_state.MaterialStateColor.new = function(defaultValue) {
    if (defaultValue == null) dart.nullFailed(L0, 131, 32, "defaultValue");
    material_state.MaterialStateColor.__proto__.new.call(this, defaultValue);
    ;
  }).prototype = material_state.MaterialStateColor.prototype;
  dart.addTypeTests(material_state.MaterialStateColor);
  dart.addTypeCaches(material_state.MaterialStateColor);
  material_state.MaterialStateColor[dart.implements] = () => [material_state.MaterialStateProperty$(ui.Color)];
  dart.setLibraryUri(material_state.MaterialStateColor, L1);
  var _resolve$ = dart.privateName(material_state, "_resolve");
  var C8;
  material_state._MaterialStateColor = class _MaterialStateColor extends material_state.MaterialStateColor {
    resolve(states) {
      let t0;
      if (states == null) dart.nullFailed(L0, 165, 36, "states");
      t0 = states;
      return this[_resolve$](t0);
    }
  };
  (material_state._MaterialStateColor.new = function(_resolve) {
    if (_resolve == null) dart.nullFailed(L0, 157, 28, "_resolve");
    this[_resolve$] = _resolve;
    material_state._MaterialStateColor.__proto__.new.call(this, _resolve(material_state._MaterialStateColor._defaultStates).value);
    ;
  }).prototype = material_state._MaterialStateColor.prototype;
  dart.addTypeTests(material_state._MaterialStateColor);
  dart.addTypeCaches(material_state._MaterialStateColor);
  dart.setMethodSignature(material_state._MaterialStateColor, () => ({
    __proto__: dart.getMethods(material_state._MaterialStateColor.__proto__),
    resolve: dart.fnType(ui.Color, [core.Set$(material_state.MaterialState)])
  }));
  dart.setLibraryUri(material_state._MaterialStateColor, L1);
  dart.setFieldSignature(material_state._MaterialStateColor, () => ({
    __proto__: dart.getFields(material_state._MaterialStateColor.__proto__),
    [_resolve$]: dart.finalFieldType(dart.fnType(ui.Color, [core.Set$(material_state.MaterialState)]))
  }));
  dart.defineLazy(material_state._MaterialStateColor, {
    /*material_state._MaterialStateColor._defaultStates*/get _defaultStates() {
      return C8 || CT.C8;
    }
  }, false);
  var _EnabledAndDisabledMouseCursor_name = dart.privateName(material_state, "_EnabledAndDisabledMouseCursor.name");
  var SystemMouseCursor_kind = dart.privateName(mouse_cursor, "SystemMouseCursor.kind");
  var C10;
  var _EnabledAndDisabledMouseCursor_disabledCursor = dart.privateName(material_state, "_EnabledAndDisabledMouseCursor.disabledCursor");
  var C11;
  var _EnabledAndDisabledMouseCursor_enabledCursor = dart.privateName(material_state, "_EnabledAndDisabledMouseCursor.enabledCursor");
  var C9;
  var C13;
  var C12;
  material_state.MaterialStateMouseCursor = class MaterialStateMouseCursor extends mouse_cursor.MouseCursor {
    createSession(device) {
      if (device == null) dart.nullFailed(L0, 230, 40, "device");
      return this.resolve(LinkedHashSetOfMaterialState().new()).createSession(device);
    }
  };
  (material_state.MaterialStateMouseCursor.new = function() {
    material_state.MaterialStateMouseCursor.__proto__.new.call(this);
    ;
  }).prototype = material_state.MaterialStateMouseCursor.prototype;
  dart.addTypeTests(material_state.MaterialStateMouseCursor);
  dart.addTypeCaches(material_state.MaterialStateMouseCursor);
  material_state.MaterialStateMouseCursor[dart.implements] = () => [material_state.MaterialStateProperty$(mouse_cursor.MouseCursor)];
  dart.setMethodSignature(material_state.MaterialStateMouseCursor, () => ({
    __proto__: dart.getMethods(material_state.MaterialStateMouseCursor.__proto__),
    createSession: dart.fnType(mouse_cursor.MouseCursorSession, [core.int])
  }));
  dart.setLibraryUri(material_state.MaterialStateMouseCursor, L1);
  dart.defineLazy(material_state.MaterialStateMouseCursor, {
    /*material_state.MaterialStateMouseCursor.clickable*/get clickable() {
      return C9 || CT.C9;
    },
    /*material_state.MaterialStateMouseCursor.textable*/get textable() {
      return C12 || CT.C12;
    }
  }, false);
  material_state._EnabledAndDisabledMouseCursor = class _EnabledAndDisabledMouseCursor extends material_state.MaterialStateMouseCursor {
    get enabledCursor() {
      return this[enabledCursor$];
    }
    set enabledCursor(value) {
      super.enabledCursor = value;
    }
    get disabledCursor() {
      return this[disabledCursor$];
    }
    set disabledCursor(value) {
      super.disabledCursor = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    resolve(states) {
      if (states == null) dart.nullFailed(L0, 280, 42, "states");
      if (dart.test(states.contains(material_state.MaterialState.disabled))) {
        return this.disabledCursor;
      }
      return this.enabledCursor;
    }
    get debugDescription() {
      return "MaterialStateMouseCursor(" + dart.str(this.name) + ")";
    }
  };
  (material_state._EnabledAndDisabledMouseCursor.new = function(opts) {
    let enabledCursor = opts && 'enabledCursor' in opts ? opts.enabledCursor : null;
    if (enabledCursor == null) dart.nullFailed(L0, 270, 19, "enabledCursor");
    let disabledCursor = opts && 'disabledCursor' in opts ? opts.disabledCursor : null;
    if (disabledCursor == null) dart.nullFailed(L0, 271, 19, "disabledCursor");
    let name = opts && 'name' in opts ? opts.name : null;
    if (name == null) dart.nullFailed(L0, 272, 19, "name");
    this[enabledCursor$] = enabledCursor;
    this[disabledCursor$] = disabledCursor;
    this[name$] = name;
    material_state._EnabledAndDisabledMouseCursor.__proto__.new.call(this);
    ;
  }).prototype = material_state._EnabledAndDisabledMouseCursor.prototype;
  dart.addTypeTests(material_state._EnabledAndDisabledMouseCursor);
  dart.addTypeCaches(material_state._EnabledAndDisabledMouseCursor);
  const enabledCursor$ = _EnabledAndDisabledMouseCursor_enabledCursor;
  const disabledCursor$ = _EnabledAndDisabledMouseCursor_disabledCursor;
  const name$ = _EnabledAndDisabledMouseCursor_name;
  dart.setMethodSignature(material_state._EnabledAndDisabledMouseCursor, () => ({
    __proto__: dart.getMethods(material_state._EnabledAndDisabledMouseCursor.__proto__),
    resolve: dart.fnType(mouse_cursor.MouseCursor, [core.Set$(material_state.MaterialState)])
  }));
  dart.setGetterSignature(material_state._EnabledAndDisabledMouseCursor, () => ({
    __proto__: dart.getGetters(material_state._EnabledAndDisabledMouseCursor.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(material_state._EnabledAndDisabledMouseCursor, L1);
  dart.setFieldSignature(material_state._EnabledAndDisabledMouseCursor, () => ({
    __proto__: dart.getFields(material_state._EnabledAndDisabledMouseCursor.__proto__),
    enabledCursor: dart.finalFieldType(mouse_cursor.MouseCursor),
    disabledCursor: dart.finalFieldType(mouse_cursor.MouseCursor),
    name: dart.finalFieldType(core.String)
  }));
  material_state.MaterialStateBorderSide = class MaterialStateBorderSide extends borders.BorderSide {};
  (material_state.MaterialStateBorderSide.new = function() {
    material_state.MaterialStateBorderSide.__proto__.new.call(this);
    ;
  }).prototype = material_state.MaterialStateBorderSide.prototype;
  dart.addTypeTests(material_state.MaterialStateBorderSide);
  dart.addTypeCaches(material_state.MaterialStateBorderSide);
  material_state.MaterialStateBorderSide[dart.implements] = () => [material_state.MaterialStateProperty$(dart.nullable(borders.BorderSide))];
  dart.setLibraryUri(material_state.MaterialStateBorderSide, L1);
  material_state.MaterialStateOutlinedBorder = class MaterialStateOutlinedBorder extends borders.OutlinedBorder {};
  (material_state.MaterialStateOutlinedBorder.new = function() {
    material_state.MaterialStateOutlinedBorder.__proto__.new.call(this);
    ;
  }).prototype = material_state.MaterialStateOutlinedBorder.prototype;
  dart.addTypeTests(material_state.MaterialStateOutlinedBorder);
  dart.addTypeCaches(material_state.MaterialStateOutlinedBorder);
  material_state.MaterialStateOutlinedBorder[dart.implements] = () => [material_state.MaterialStateProperty$(dart.nullable(borders.OutlinedBorder))];
  dart.setLibraryUri(material_state.MaterialStateOutlinedBorder, L1);
  const _is_MaterialStateProperty_default = Symbol('_is_MaterialStateProperty_default');
  material_state.MaterialStateProperty$ = dart.generic(T => {
    class MaterialStateProperty extends core.Object {
      static resolveAs(T, value, states) {
        if (states == null) dart.nullFailed(L0, 481, 53, "states");
        if (material_state.MaterialStateProperty$(T).is(value)) {
          let property = value;
          return property.resolve(states);
        }
        return value;
      }
      static resolveWith(T, callback) {
        if (callback == null) dart.nullFailed(L0, 491, 78, "callback");
        return new (material_state._MaterialStatePropertyWith$(T)).new(callback);
      }
      static all(T, value) {
        return new (material_state._MaterialStatePropertyAll$(T)).new(value);
      }
    }
    (MaterialStateProperty.new = function() {
      ;
    }).prototype = MaterialStateProperty.prototype;
    dart.addTypeTests(MaterialStateProperty);
    MaterialStateProperty.prototype[_is_MaterialStateProperty_default] = true;
    dart.addTypeCaches(MaterialStateProperty);
    dart.setLibraryUri(MaterialStateProperty, L1);
    return MaterialStateProperty;
  });
  material_state.MaterialStateProperty = material_state.MaterialStateProperty$();
  dart.addTypeTests(material_state.MaterialStateProperty, _is_MaterialStateProperty_default);
  const _is__MaterialStatePropertyWith_default = Symbol('_is__MaterialStatePropertyWith_default');
  material_state._MaterialStatePropertyWith$ = dart.generic(T => {
    class _MaterialStatePropertyWith extends core.Object {
      resolve(states) {
        let t0;
        if (states == null) dart.nullFailed(L0, 504, 32, "states");
        t0 = states;
        return this[_resolve$](t0);
      }
    }
    (_MaterialStatePropertyWith.new = function(_resolve) {
      if (_resolve == null) dart.nullFailed(L0, 499, 35, "_resolve");
      this[_resolve$] = _resolve;
      ;
    }).prototype = _MaterialStatePropertyWith.prototype;
    dart.addTypeTests(_MaterialStatePropertyWith);
    _MaterialStatePropertyWith.prototype[_is__MaterialStatePropertyWith_default] = true;
    dart.addTypeCaches(_MaterialStatePropertyWith);
    _MaterialStatePropertyWith[dart.implements] = () => [material_state.MaterialStateProperty$(T)];
    dart.setMethodSignature(_MaterialStatePropertyWith, () => ({
      __proto__: dart.getMethods(_MaterialStatePropertyWith.__proto__),
      resolve: dart.fnType(T, [core.Set$(material_state.MaterialState)])
    }));
    dart.setLibraryUri(_MaterialStatePropertyWith, L1);
    dart.setFieldSignature(_MaterialStatePropertyWith, () => ({
      __proto__: dart.getFields(_MaterialStatePropertyWith.__proto__),
      [_resolve$]: dart.finalFieldType(dart.fnType(T, [core.Set$(material_state.MaterialState)]))
    }));
    return _MaterialStatePropertyWith;
  });
  material_state._MaterialStatePropertyWith = material_state._MaterialStatePropertyWith$();
  dart.addTypeTests(material_state._MaterialStatePropertyWith, _is__MaterialStatePropertyWith_default);
  const _is__MaterialStatePropertyAll_default = Symbol('_is__MaterialStatePropertyAll_default');
  material_state._MaterialStatePropertyAll$ = dart.generic(T => {
    class _MaterialStatePropertyAll extends core.Object {
      resolve(states) {
        if (states == null) dart.nullFailed(L0, 513, 32, "states");
        return this.value;
      }
      toString() {
        return "MaterialStateProperty.all(" + dart.str(this.value) + ")";
      }
    }
    (_MaterialStatePropertyAll.new = function(value) {
      this.value = value;
      ;
    }).prototype = _MaterialStatePropertyAll.prototype;
    dart.addTypeTests(_MaterialStatePropertyAll);
    _MaterialStatePropertyAll.prototype[_is__MaterialStatePropertyAll_default] = true;
    dart.addTypeCaches(_MaterialStatePropertyAll);
    _MaterialStatePropertyAll[dart.implements] = () => [material_state.MaterialStateProperty$(T)];
    dart.setMethodSignature(_MaterialStatePropertyAll, () => ({
      __proto__: dart.getMethods(_MaterialStatePropertyAll.__proto__),
      resolve: dart.fnType(T, [core.Set$(material_state.MaterialState)])
    }));
    dart.setLibraryUri(_MaterialStatePropertyAll, L1);
    dart.setFieldSignature(_MaterialStatePropertyAll, () => ({
      __proto__: dart.getFields(_MaterialStatePropertyAll.__proto__),
      value: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(_MaterialStatePropertyAll, ['toString']);
    return _MaterialStatePropertyAll;
  });
  material_state._MaterialStatePropertyAll = material_state._MaterialStatePropertyAll$();
  dart.addTypeTests(material_state._MaterialStatePropertyAll, _is__MaterialStatePropertyAll_default);
  dart.trackLibraries("packages/flutter/src/material/material_state.dart", {
    "package:flutter/src/material/material_state.dart": material_state
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_state.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA8EA;;;QA7CK;;;;;EA6CL;;;;;;;;;;;;;;;;;;;;UA8DwE;AAAa,wDAAoB,QAAQ;IAAC;;;QAVnF;AAAgB,+DAAM,YAAY;;EAAC;;;;;;;;YAkC/B;;;AAAW,WAAS,MAAM;YAAf,AAAQ;IAAQ;;;QARnC;;AAAY,gEAAM,AAAQ,AAAiB,QAAjB,CAAC;;EAAsB;;;;;;;;;;;;;MAK1C,iDAAc;;;;;;;;;;;;;;;UAoET;AACnC,YAAO,AAA2B,cAAJ,oDAAkB,MAAM;IACxD;;;AANM;;EAA0B;;;;;;;;;;MAsBM,iDAAS;;;MAaT,gDAAQ;;;;;IAc5B;;;;;;IACA;;;;;;IACL;;;;;;;UAG0B;AACrC,oBAAI,AAAO,MAAD,UAAwB;AAChC,cAAO;;AAET,YAAO;IACT;;AAG+B,YAAA,AAAiC,wCAAN,aAAI;IAAE;;;QAlBhD;;QACA;;QACA;;IAFA;IACA;IACA;AAHV;;EAIJ;;;;;;;;;;;;;;;;;;;;;;;AAkEI;;EAAyB;;;;;;;AA4DzB;;EAA6B;;;;;;;;0BAkFX;YAA0B;AAChD,YAAU,4CAAN,KAAK;AACwB,yBAAW,KAAK;AAC/C,gBAAO,AAAS,SAAD,SAAS,MAAM;;AAEhC,cAAO,MAAK;MACd;;YAI2E;AAAa,uEAA8B,QAAQ;MAAC;oBAItF;AAAU,sEAA6B,KAAK;MAAC;;;;IACxF;;;;;;;;;;;;cAQ+B;;;AAAW,aAAS,MAAM;cAAf,AAAQ;MAAQ;;;UALxB;;;IAAS;;;;;;;;;;;;;;;;;;;;;;YAcZ;AAAW;MAAK;;AAGxB,cAAA,AAAmC,yCAAP,cAAK;MAAE;;;MARzB;;IAAM","file":"../../../../../../../../../../packages/flutter/src/material/material_state.dart.lib.js"}');
  // Exports:
  return {
    src__material__material_state: material_state
  };
}));

//# sourceMappingURL=material_state.dart.lib.js.map
