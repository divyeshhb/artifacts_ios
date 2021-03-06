define(['dart_sdk', 'packages/flutter/src/services/keyboard_maps.dart', 'packages/flutter/src/services/keyboard_key.dart', 'packages/flutter/src/foundation/print.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/services/system_channels.dart'], (function load__packages__flutter__src__services__raw_keyboard_windows_dart(dart_sdk, packages__flutter__src__services__keyboard_maps$46dart, packages__flutter__src__services__keyboard_key$46dart, packages__flutter__src__foundation__print$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__services__system_channels$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const io = dart_sdk.io;
  const collection = dart_sdk.collection;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const keyboard_maps = packages__flutter__src__services__keyboard_maps$46dart.src__services__keyboard_maps;
  const keyboard_key = packages__flutter__src__services__keyboard_key$46dart.src__services__keyboard_key;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const system_channels = packages__flutter__src__services__system_channels$46dart.src__services__system_channels;
  var raw_keyboard_windows = Object.create(dart.library);
  var raw_keyboard_web = Object.create(dart.library);
  var raw_keyboard_macos = Object.create(dart.library);
  var raw_keyboard_linux = Object.create(dart.library);
  var raw_keyboard_ios = Object.create(dart.library);
  var raw_keyboard_fuchsia = Object.create(dart.library);
  var raw_keyboard_android = Object.create(dart.library);
  var raw_keyboard = Object.create(dart.library);
  var $_get = dartx._get;
  var $isNotEmpty = dartx.isNotEmpty;
  var $toUpperCase = dartx.toUpperCase;
  var $runtimeType = dartx.runtimeType;
  var $_set = dartx._set;
  var $hashCode = dartx.hashCode;
  var $codeUnitAt = dartx.codeUnitAt;
  var $containsKey = dartx.containsKey;
  var $add = dartx.add;
  var $remove = dartx.remove;
  var $contains = dartx.contains;
  var $keys = dartx.keys;
  var $forEach = dartx.forEach;
  var $addAll = dartx.addAll;
  var $values = dartx.values;
  var $toSet = dartx.toSet;
  var $clear = dartx.clear;
  var $entries = dartx.entries;
  dart._checkModuleNullSafetyMode(false);
  var KeyboardSideN = () => (KeyboardSideN = dart.constFn(dart.nullable(raw_keyboard.KeyboardSide)))();
  var intAndintAndintToKeyboardSideN = () => (intAndintAndintToKeyboardSideN = dart.constFn(dart.fnType(KeyboardSideN(), [core.int, core.int, core.int])))();
  var LinkedMapOfModifierKey$KeyboardSide = () => (LinkedMapOfModifierKey$KeyboardSide = dart.constFn(_js_helper.LinkedMap$(raw_keyboard.ModifierKey, raw_keyboard.KeyboardSide)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var LogicalKeyboardKeyL = () => (LogicalKeyboardKeyL = dart.constFn(dart.legacy(keyboard_key.LogicalKeyboardKey)))();
  var KeyboardSideL = () => (KeyboardSideL = dart.constFn(dart.legacy(raw_keyboard.KeyboardSide)))();
  var ModifierKeyL = () => (ModifierKeyL = dart.constFn(dart.legacy(raw_keyboard.ModifierKey)))();
  var intN = () => (intN = dart.constFn(dart.nullable(core.int)))();
  var StringN = () => (StringN = dart.constFn(dart.nullable(core.String)))();
  var DiagnosticsPropertyOfLogicalKeyboardKey = () => (DiagnosticsPropertyOfLogicalKeyboardKey = dart.constFn(diagnostics.DiagnosticsProperty$(keyboard_key.LogicalKeyboardKey)))();
  var DiagnosticsPropertyOfPhysicalKeyboardKey = () => (DiagnosticsPropertyOfPhysicalKeyboardKey = dart.constFn(diagnostics.DiagnosticsProperty$(keyboard_key.PhysicalKeyboardKey)))();
  var RawKeyEventTovoid = () => (RawKeyEventTovoid = dart.constFn(dart.fnType(dart.void, [raw_keyboard.RawKeyEvent])))();
  var JSArrayOfRawKeyEventTovoid = () => (JSArrayOfRawKeyEventTovoid = dart.constFn(_interceptors.JSArray$(RawKeyEventTovoid())))();
  var LinkedMapOfPhysicalKeyboardKey$LogicalKeyboardKey = () => (LinkedMapOfPhysicalKeyboardKey$LogicalKeyboardKey = dart.constFn(_js_helper.LinkedMap$(keyboard_key.PhysicalKeyboardKey, keyboard_key.LogicalKeyboardKey)))();
  var MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  var ListOfRawKeyEventTovoid = () => (ListOfRawKeyEventTovoid = dart.constFn(core.List$(RawKeyEventTovoid())))();
  var IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  var LinkedHashSetOfPhysicalKeyboardKey = () => (LinkedHashSetOfPhysicalKeyboardKey = dart.constFn(collection.LinkedHashSet$(keyboard_key.PhysicalKeyboardKey)))();
  var SetOfPhysicalKeyboardKey = () => (SetOfPhysicalKeyboardKey = dart.constFn(core.Set$(keyboard_key.PhysicalKeyboardKey)))();
  var LinkedMapOf_ModifierSidePair$SetOfPhysicalKeyboardKey = () => (LinkedMapOf_ModifierSidePair$SetOfPhysicalKeyboardKey = dart.constFn(_js_helper.LinkedMap$(raw_keyboard._ModifierSidePair, SetOfPhysicalKeyboardKey())))();
  const CT = Object.create(null);
  var L1 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/raw_keyboard.dart";
  var L14 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/raw_keyboard_android.dart";
  var L13 = "package:flutter/src/services/raw_keyboard_fuchsia.dart";
  var L10 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/raw_keyboard_ios.dart";
  var L9 = "package:flutter/src/services/raw_keyboard_linux.dart";
  var L4 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/raw_keyboard_web.dart";
  var L2 = "package:flutter/src/services/raw_keyboard.dart";
  var L6 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/raw_keyboard_macos.dart";
  var L11 = "package:flutter/src/services/raw_keyboard_ios.dart";
  var L7 = "package:flutter/src/services/raw_keyboard_macos.dart";
  var L5 = "package:flutter/src/services/raw_keyboard_web.dart";
  var L3 = "package:flutter/src/services/raw_keyboard_windows.dart";
  var L8 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/raw_keyboard_linux.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/raw_keyboard_windows.dart";
  var L15 = "package:flutter/src/services/raw_keyboard_android.dart";
  var L12 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/raw_keyboard_fuchsia.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_name$]: "KeyboardSide.any",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_name$]: "KeyboardSide.all",
        index: 3
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_name$]: "KeyboardSide.left",
        index: 1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_name$]: "KeyboardSide.right",
        index: 2
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$]: "ModifierKey.controlModifier",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$]: "ModifierKey.shiftModifier",
        index: 1
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$]: "ModifierKey.altModifier",
        index: 2
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$]: "ModifierKey.metaModifier",
        index: 3
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$]: "ModifierKey.capsLockModifier",
        index: 4
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$]: "ModifierKey.scrollLockModifier",
        index: 6
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$]: "ModifierKey.numLockModifier",
        index: 5
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$]: "ModifierKey.functionModifier",
        index: 7
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$]: "ModifierKey.symbolModifier",
        index: 8
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "Escape",
        [LogicalKeyboardKey_keyId]: 4295426089.0
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "F1",
        [LogicalKeyboardKey_keyId]: 4295426106.0
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "F2",
        [LogicalKeyboardKey_keyId]: 4295426107.0
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "F3",
        [LogicalKeyboardKey_keyId]: 4295426108.0
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "F4",
        [LogicalKeyboardKey_keyId]: 4295426109.0
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "F5",
        [LogicalKeyboardKey_keyId]: 4295426110.0
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "F6",
        [LogicalKeyboardKey_keyId]: 4295426111.0
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "F7",
        [LogicalKeyboardKey_keyId]: 4295426112.0
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "F8",
        [LogicalKeyboardKey_keyId]: 4295426113.0
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "F9",
        [LogicalKeyboardKey_keyId]: 4295426114.0
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "F10",
        [LogicalKeyboardKey_keyId]: 4295426115.0
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "F11",
        [LogicalKeyboardKey_keyId]: 4295426116.0
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "F12",
        [LogicalKeyboardKey_keyId]: 4295426117.0
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "Arrow Up",
        [LogicalKeyboardKey_keyId]: 4295426130.0
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "Arrow Down",
        [LogicalKeyboardKey_keyId]: 4295426129.0
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "Arrow Left",
        [LogicalKeyboardKey_keyId]: 4295426128.0
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "Arrow Right",
        [LogicalKeyboardKey_keyId]: 4295426127.0
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "Home",
        [LogicalKeyboardKey_keyId]: 4295426122.0
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "Enter",
        [LogicalKeyboardKey_keyId]: 4295426088.0
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "Page Up",
        [LogicalKeyboardKey_keyId]: 4295426123.0
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "",
        [LogicalKeyboardKey_debugName]: "Page Down",
        [LogicalKeyboardKey_keyId]: 4295426126.0
      });
    },
    get C13() {
      return C13 = dart.constMap(StringL(), LogicalKeyboardKeyL(), ["UIKeyInputEscape", C14 || CT.C14, "UIKeyInputF1", C15 || CT.C15, "UIKeyInputF2", C16 || CT.C16, "UIKeyInputF3", C17 || CT.C17, "UIKeyInputF4", C18 || CT.C18, "UIKeyInputF5", C19 || CT.C19, "UIKeyInputF6", C20 || CT.C20, "UIKeyInputF7", C21 || CT.C21, "UIKeyInputF8", C22 || CT.C22, "UIKeyInputF9", C23 || CT.C23, "UIKeyInputF10", C24 || CT.C24, "UIKeyInputF11", C25 || CT.C25, "UIKeyInputF12", C26 || CT.C26, "UIKeyInputUpArrow", C27 || CT.C27, "UIKeyInputDownArrow", C28 || CT.C28, "UIKeyInputLeftArrow", C29 || CT.C29, "UIKeyInputRightArrow", C30 || CT.C30, "UIKeyInputHome", C31 || CT.C31, "UIKeyInputEnd", C32 || CT.C32, "UIKeyInputPageUp", C33 || CT.C33, "UIKeyInputPageDown", C34 || CT.C34]);
    },
    get C35() {
      return C35 = dart.constList([C0 || CT.C0, C2 || CT.C2, C3 || CT.C3, C1 || CT.C1], KeyboardSideL());
    },
    get C36() {
      return C36 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C10 || CT.C10, C9 || CT.C9, C11 || CT.C11, C12 || CT.C12], ModifierKeyL());
    },
    get C37() {
      return C37 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C2 || CT.C2,
        [_ModifierSidePair_modifier]: C6 || CT.C6
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C3 || CT.C3,
        [_ModifierSidePair_modifier]: C6 || CT.C6
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C1 || CT.C1,
        [_ModifierSidePair_modifier]: C6 || CT.C6
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C0 || CT.C0,
        [_ModifierSidePair_modifier]: C6 || CT.C6
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C2 || CT.C2,
        [_ModifierSidePair_modifier]: C5 || CT.C5
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C3 || CT.C3,
        [_ModifierSidePair_modifier]: C5 || CT.C5
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C1 || CT.C1,
        [_ModifierSidePair_modifier]: C5 || CT.C5
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C0 || CT.C0,
        [_ModifierSidePair_modifier]: C5 || CT.C5
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C2 || CT.C2,
        [_ModifierSidePair_modifier]: C4 || CT.C4
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C3 || CT.C3,
        [_ModifierSidePair_modifier]: C4 || CT.C4
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C1 || CT.C1,
        [_ModifierSidePair_modifier]: C4 || CT.C4
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C0 || CT.C0,
        [_ModifierSidePair_modifier]: C4 || CT.C4
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C2 || CT.C2,
        [_ModifierSidePair_modifier]: C7 || CT.C7
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C3 || CT.C3,
        [_ModifierSidePair_modifier]: C7 || CT.C7
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C1 || CT.C1,
        [_ModifierSidePair_modifier]: C7 || CT.C7
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C0 || CT.C0,
        [_ModifierSidePair_modifier]: C7 || CT.C7
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C1 || CT.C1,
        [_ModifierSidePair_modifier]: C8 || CT.C8
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C1 || CT.C1,
        [_ModifierSidePair_modifier]: C10 || CT.C10
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C1 || CT.C1,
        [_ModifierSidePair_modifier]: C9 || CT.C9
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C1 || CT.C1,
        [_ModifierSidePair_modifier]: C11 || CT.C11
      });
    }
  }, false);
  var _name$ = dart.privateName(raw_keyboard, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var _isLeftRightModifierPressed = dart.privateName(raw_keyboard_windows, "_isLeftRightModifierPressed");
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  var C12;
  raw_keyboard.RawKeyEventData = class RawKeyEventData extends core.Object {
    get isControlPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.controlModifier, {side: raw_keyboard.KeyboardSide.any});
    }
    get isShiftPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.shiftModifier, {side: raw_keyboard.KeyboardSide.any});
    }
    get isAltPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.altModifier, {side: raw_keyboard.KeyboardSide.any});
    }
    get isMetaPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.metaModifier, {side: raw_keyboard.KeyboardSide.any});
    }
    get modifiersPressed() {
      let result = new (LinkedMapOfModifierKey$KeyboardSide()).new();
      for (let key of raw_keyboard.ModifierKey.values) {
        if (dart.test(this.isModifierPressed(key))) {
          let side = this.getModifierSide(key);
          if (side != null) {
            result[$_set](key, side);
          }
          if (!dart.test(dart.fn(() => {
            if (side == null) {
              print.debugPrint("Raw key data is returning inconsistent information for " + "pressed modifiers. isModifierPressed returns true for " + dart.str(key) + " " + "being pressed, but when getModifierSide is called, it says " + "that no modifiers are pressed.");
              if (raw_keyboard_android.RawKeyEventDataAndroid.is(this)) {
                print.debugPrint("Android raw key metaState: " + dart.str(raw_keyboard_android.RawKeyEventDataAndroid.as(this).metaState));
              }
            }
            return true;
          }, VoidTobool())())) dart.assertFailed(null, L1, 175, 16, "(){\n          if (side == null) {\n            debugPrint('Raw key data is returning inconsistent information for '\n                'pressed modifiers. isModifierPressed returns true for $key '\n                'being pressed, but when getModifierSide is called, it says '\n                'that no modifiers are pressed.');\n            if (this is RawKeyEventDataAndroid) {\n              debugPrint('Android raw key metaState: ${(this as RawKeyEventDataAndroid).metaState}');\n            }\n          }\n          return true;\n        }()");
        }
      }
      return result;
    }
  };
  (raw_keyboard.RawKeyEventData.new = function() {
    ;
  }).prototype = raw_keyboard.RawKeyEventData.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyEventData);
  dart.addTypeCaches(raw_keyboard.RawKeyEventData);
  dart.setGetterSignature(raw_keyboard.RawKeyEventData, () => ({
    __proto__: dart.getGetters(raw_keyboard.RawKeyEventData.__proto__),
    isControlPressed: core.bool,
    isShiftPressed: core.bool,
    isAltPressed: core.bool,
    isMetaPressed: core.bool,
    modifiersPressed: core.Map$(raw_keyboard.ModifierKey, raw_keyboard.KeyboardSide)
  }));
  dart.setLibraryUri(raw_keyboard.RawKeyEventData, L2);
  var keyCode$ = dart.privateName(raw_keyboard_windows, "RawKeyEventDataWindows.keyCode");
  var scanCode$ = dart.privateName(raw_keyboard_windows, "RawKeyEventDataWindows.scanCode");
  var characterCodePoint$ = dart.privateName(raw_keyboard_windows, "RawKeyEventDataWindows.characterCodePoint");
  var modifiers$ = dart.privateName(raw_keyboard_windows, "RawKeyEventDataWindows.modifiers");
  raw_keyboard_windows.RawKeyEventDataWindows = class RawKeyEventDataWindows extends raw_keyboard.RawKeyEventData {
    get keyCode() {
      return this[keyCode$];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get scanCode() {
      return this[scanCode$];
    }
    set scanCode(value) {
      super.scanCode = value;
    }
    get characterCodePoint() {
      return this[characterCodePoint$];
    }
    set characterCodePoint(value) {
      super.characterCodePoint = value;
    }
    get modifiers() {
      return this[modifiers$];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    get keyLabel() {
      return this.characterCodePoint === 0 ? "" : core.String.fromCharCode(this.characterCodePoint);
    }
    get physicalKey() {
      let t0;
      t0 = keyboard_maps.kWindowsToPhysicalKey[$_get](this.scanCode);
      return t0 == null ? keyboard_key.PhysicalKeyboardKey.none : t0;
    }
    get logicalKey() {
      let t0;
      let numPadKey = keyboard_maps.kWindowsNumPadMap[$_get](this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      if (this.keyLabel[$isNotEmpty] && !dart.test(keyboard_key.LogicalKeyboardKey.isControlCharacter(this.keyLabel))) {
        let keyId = (0 | (dart.notNull(this.characterCodePoint) & 4294967295.0) >>> 0) >>> 0;
        t0 = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t0 == null ? new keyboard_key.LogicalKeyboardKey.new(keyId, {keyLabel: this.keyLabel, debugName: false ? null : "Key " + this.keyLabel[$toUpperCase]()}) : t0;
      }
      let newKey = keyboard_maps.kWindowsToLogicalKey[$_get](this.keyCode);
      if (newKey != null) {
        return newKey;
      }
      newKey == null ? newKey = new keyboard_key.LogicalKeyboardKey.new((30064771072.0 | dart.notNull(this.keyCode) | 1099511627776.0) >>> 0, {debugName: false ? null : "Unknown Windows key code " + dart.str(this.keyCode)}) : null;
      return newKey;
    }
    [_isLeftRightModifierPressed](side, anyMask, leftMask, rightMask) {
      if (side == null) dart.nullFailed(L0, 100, 49, "side");
      if (anyMask == null) dart.nullFailed(L0, 100, 59, "anyMask");
      if (leftMask == null) dart.nullFailed(L0, 100, 72, "leftMask");
      if (rightMask == null) dart.nullFailed(L0, 100, 86, "rightMask");
      if ((dart.notNull(this.modifiers) & dart.notNull(anyMask)) === 0 && (dart.notNull(this.modifiers) & dart.notNull(leftMask)) === 0 && (dart.notNull(this.modifiers) & dart.notNull(rightMask)) === 0) {
        return false;
      }
      let anyOnly = (dart.notNull(this.modifiers) & (dart.notNull(leftMask) | dart.notNull(rightMask) | dart.notNull(anyMask)) >>> 0) >>> 0 === anyMask;
      switch (side) {
        case C0 || CT.C0:
        {
          return true;
        }
        case C1 || CT.C1:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0 && (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0 || anyOnly;
        }
        case C2 || CT.C2:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0 || anyOnly;
        }
        case C3 || CT.C3:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0 || anyOnly;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    isModifierPressed(key, opts) {
      if (key == null) dart.nullFailed(L0, 124, 38, "key");
      let side = opts && 'side' in opts ? opts.side : C0 || CT.C0;
      if (side == null) dart.nullFailed(L0, 124, 57, "side");
      let result = null;
      switch (key) {
        case C4 || CT.C4:
        {
          result = this[_isLeftRightModifierPressed](side, 8, 16, 32);
          break;
        }
        case C5 || CT.C5:
        {
          result = this[_isLeftRightModifierPressed](side, 1, 2, 4);
          break;
        }
        case C6 || CT.C6:
        {
          result = this[_isLeftRightModifierPressed](side, 64, 128, 256);
          break;
        }
        case C7 || CT.C7:
        {
          result = this[_isLeftRightModifierPressed](side, (512 | 1024) >>> 0, 512, 1024);
          break;
        }
        case C8 || CT.C8:
        {
          result = (dart.notNull(this.modifiers) & 2048) !== 0;
          break;
        }
        case C9 || CT.C9:
        {
          result = (dart.notNull(this.modifiers) & 8192) !== 0;
          break;
        }
        case C10 || CT.C10:
        {
          result = (dart.notNull(this.modifiers) & 4096) !== 0;
          break;
        }
        case C11 || CT.C11:
        case C12 || CT.C12:
        {
          result = false;
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      if (!(!dart.test(result) || this.getModifierSide(key) != null)) dart.assertFailed(dart.str(this[$runtimeType]) + " thinks that a modifier is pressed, but can't figure out what side it's on.", L0, 156, 12, "!result || getModifierSide(key) != null");
      return result;
    }
    getModifierSide(key) {
      if (key == null) dart.nullFailed(L0, 162, 45, "key");
      const findSide = (leftMask, rightMask, anyMask) => {
        if (leftMask == null) dart.nullFailed(L0, 163, 32, "leftMask");
        if (rightMask == null) dart.nullFailed(L0, 163, 46, "rightMask");
        if (anyMask == null) dart.nullFailed(L0, 163, 61, "anyMask");
        let combinedMask = (dart.notNull(leftMask) | dart.notNull(rightMask)) >>> 0;
        let combined = (dart.notNull(this.modifiers) & combinedMask) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask || (dart.notNull(this.modifiers) & (combinedMask | dart.notNull(anyMask)) >>> 0) >>> 0 === anyMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, intAndintAndintToKeyboardSideN());
      switch (key) {
        case C4 || CT.C4:
        {
          return findSide(16, 32, 8);
        }
        case C5 || CT.C5:
        {
          return findSide(2, 4, 1);
        }
        case C6 || CT.C6:
        {
          return findSide(128, 256, 64);
        }
        case C7 || CT.C7:
        {
          return findSide(512, 1024, 0);
        }
        case C8 || CT.C8:
        case C10 || CT.C10:
        case C9 || CT.C9:
        case C11 || CT.C11:
        case C12 || CT.C12:
        {
          return raw_keyboard.KeyboardSide.all;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
  };
  (raw_keyboard_windows.RawKeyEventDataWindows.new = function(opts) {
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    if (keyCode == null) dart.nullFailed(L0, 26, 10, "keyCode");
    let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
    if (scanCode == null) dart.nullFailed(L0, 27, 10, "scanCode");
    let characterCodePoint = opts && 'characterCodePoint' in opts ? opts.characterCodePoint : 0;
    if (characterCodePoint == null) dart.nullFailed(L0, 28, 10, "characterCodePoint");
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    if (modifiers == null) dart.nullFailed(L0, 29, 10, "modifiers");
    this[keyCode$] = keyCode;
    this[scanCode$] = scanCode;
    this[characterCodePoint$] = characterCodePoint;
    this[modifiers$] = modifiers;
    if (!(keyCode != null)) dart.assertFailed(null, L0, 30, 15, "keyCode != null");
    if (!(scanCode != null)) dart.assertFailed(null, L0, 31, 15, "scanCode != null");
    if (!(characterCodePoint != null)) dart.assertFailed(null, L0, 32, 15, "characterCodePoint != null");
    if (!(modifiers != null)) dart.assertFailed(null, L0, 33, 15, "modifiers != null");
    raw_keyboard_windows.RawKeyEventDataWindows.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_windows.RawKeyEventDataWindows.prototype;
  dart.addTypeTests(raw_keyboard_windows.RawKeyEventDataWindows);
  dart.addTypeCaches(raw_keyboard_windows.RawKeyEventDataWindows);
  dart.setMethodSignature(raw_keyboard_windows.RawKeyEventDataWindows, () => ({
    __proto__: dart.getMethods(raw_keyboard_windows.RawKeyEventDataWindows.__proto__),
    [_isLeftRightModifierPressed]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(dart.nullable(raw_keyboard.KeyboardSide), [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_windows.RawKeyEventDataWindows, () => ({
    __proto__: dart.getGetters(raw_keyboard_windows.RawKeyEventDataWindows.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_windows.RawKeyEventDataWindows, L3);
  dart.setFieldSignature(raw_keyboard_windows.RawKeyEventDataWindows, () => ({
    __proto__: dart.getFields(raw_keyboard_windows.RawKeyEventDataWindows.__proto__),
    keyCode: dart.finalFieldType(core.int),
    scanCode: dart.finalFieldType(core.int),
    characterCodePoint: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(raw_keyboard_windows.RawKeyEventDataWindows, {
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierLeftShift*/get modifierLeftShift() {
      return 2;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierRightShift*/get modifierRightShift() {
      return 4;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierControl*/get modifierControl() {
      return 8;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierLeftControl*/get modifierLeftControl() {
      return 16;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierRightControl*/get modifierRightControl() {
      return 32;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierAlt*/get modifierAlt() {
      return 64;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierLeftAlt*/get modifierLeftAlt() {
      return 128;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierRightAlt*/get modifierRightAlt() {
      return 256;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierLeftMeta*/get modifierLeftMeta() {
      return 512;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierRightMeta*/get modifierRightMeta() {
      return 1024;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierCaps*/get modifierCaps() {
      return 2048;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierNumLock*/get modifierNumLock() {
      return 4096;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierScrollLock*/get modifierScrollLock() {
      return 8192;
    }
  }, false);
  var code$ = dart.privateName(raw_keyboard_web, "RawKeyEventDataWeb.code");
  var key$ = dart.privateName(raw_keyboard_web, "RawKeyEventDataWeb.key");
  var metaState$ = dart.privateName(raw_keyboard_web, "RawKeyEventDataWeb.metaState");
  raw_keyboard_web.RawKeyEventDataWeb = class RawKeyEventDataWeb extends raw_keyboard.RawKeyEventData {
    get code() {
      return this[code$];
    }
    set code(value) {
      super.code = value;
    }
    get key() {
      return this[key$];
    }
    set key(value) {
      super.key = value;
    }
    get metaState() {
      return this[metaState$];
    }
    set metaState(value) {
      super.metaState = value;
    }
    get keyLabel() {
      return this.key === "Unidentified" ? "" : this.key;
    }
    get physicalKey() {
      let t0;
      t0 = keyboard_maps.kWebToPhysicalKey[$_get](this.code);
      return t0 == null ? keyboard_key.PhysicalKeyboardKey.none : t0;
    }
    get logicalKey() {
      let numPadKey = keyboard_maps.kWebNumPadMap[$_get](this.code);
      if (numPadKey != null) {
        return numPadKey;
      }
      let newKey = keyboard_maps.kWebToLogicalKey[$_get](this.code);
      if (newKey != null) {
        return newKey;
      }
      return new keyboard_key.LogicalKeyboardKey.new((34359738368.0 | dart.hashCode(this.code) | 1099511627776.0) >>> 0, {debugName: false ? null : "Unknown Web code \"" + dart.str(this.code) + "\""});
    }
    isModifierPressed(key, opts) {
      if (key == null) dart.nullFailed(L4, 93, 17, "key");
      let side = opts && 'side' in opts ? opts.side : C0 || CT.C0;
      if (side == null) dart.nullFailed(L4, 94, 18, "side");
      switch (key) {
        case C4 || CT.C4:
        {
          return (dart.notNull(this.metaState) & 4) !== 0;
        }
        case C5 || CT.C5:
        {
          return (dart.notNull(this.metaState) & 1) !== 0;
        }
        case C6 || CT.C6:
        {
          return (dart.notNull(this.metaState) & 2) !== 0;
        }
        case C7 || CT.C7:
        {
          return (dart.notNull(this.metaState) & 8) !== 0;
        }
        case C10 || CT.C10:
        {
          return (dart.notNull(this.metaState) & 16) !== 0;
        }
        case C8 || CT.C8:
        {
          return (dart.notNull(this.metaState) & 32) !== 0;
        }
        case C9 || CT.C9:
        {
          return (dart.notNull(this.metaState) & 64) !== 0;
        }
        case C11 || CT.C11:
        case C12 || CT.C12:
        {
          return false;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    getModifierSide(key) {
      if (key == null) dart.nullFailed(L4, 119, 44, "key");
      return raw_keyboard.KeyboardSide.all;
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "RawKeyEventDataWeb")) + "(keyLabel: " + dart.str(this.keyLabel) + ", code: " + dart.str(this.code) + ", " + "metaState: " + dart.str(this.metaState) + ", modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (raw_keyboard_web.RawKeyEventDataWeb.new = function(opts) {
    let code = opts && 'code' in opts ? opts.code : null;
    if (code == null) dart.nullFailed(L4, 23, 19, "code");
    let key = opts && 'key' in opts ? opts.key : null;
    if (key == null) dart.nullFailed(L4, 24, 19, "key");
    let metaState = opts && 'metaState' in opts ? opts.metaState : 0;
    if (metaState == null) dart.nullFailed(L4, 25, 10, "metaState");
    this[code$] = code;
    this[key$] = key;
    this[metaState$] = metaState;
    if (!(code != null)) dart.assertFailed(null, L4, 26, 16, "code != null");
    if (!(metaState != null)) dart.assertFailed(null, L4, 27, 16, "metaState != null");
    raw_keyboard_web.RawKeyEventDataWeb.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_web.RawKeyEventDataWeb.prototype;
  dart.addTypeTests(raw_keyboard_web.RawKeyEventDataWeb);
  dart.addTypeCaches(raw_keyboard_web.RawKeyEventDataWeb);
  dart.setMethodSignature(raw_keyboard_web.RawKeyEventDataWeb, () => ({
    __proto__: dart.getMethods(raw_keyboard_web.RawKeyEventDataWeb.__proto__),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_web.RawKeyEventDataWeb, () => ({
    __proto__: dart.getGetters(raw_keyboard_web.RawKeyEventDataWeb.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_web.RawKeyEventDataWeb, L5);
  dart.setFieldSignature(raw_keyboard_web.RawKeyEventDataWeb, () => ({
    __proto__: dart.getFields(raw_keyboard_web.RawKeyEventDataWeb.__proto__),
    code: dart.finalFieldType(core.String),
    key: dart.finalFieldType(core.String),
    metaState: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(raw_keyboard_web.RawKeyEventDataWeb, ['toString']);
  dart.defineLazy(raw_keyboard_web.RawKeyEventDataWeb, {
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierNone*/get modifierNone() {
      return 0;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierAlt*/get modifierAlt() {
      return 2;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierControl*/get modifierControl() {
      return 4;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierMeta*/get modifierMeta() {
      return 8;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierNumLock*/get modifierNumLock() {
      return 16;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierCapsLock*/get modifierCapsLock() {
      return 32;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierScrollLock*/get modifierScrollLock() {
      return 64;
    }
  }, false);
  var _isLeftRightModifierPressed$ = dart.privateName(raw_keyboard_macos, "_isLeftRightModifierPressed");
  var characters$ = dart.privateName(raw_keyboard_macos, "RawKeyEventDataMacOs.characters");
  var charactersIgnoringModifiers$ = dart.privateName(raw_keyboard_macos, "RawKeyEventDataMacOs.charactersIgnoringModifiers");
  var keyCode$0 = dart.privateName(raw_keyboard_macos, "RawKeyEventDataMacOs.keyCode");
  var modifiers$0 = dart.privateName(raw_keyboard_macos, "RawKeyEventDataMacOs.modifiers");
  raw_keyboard_macos.RawKeyEventDataMacOs = class RawKeyEventDataMacOs extends raw_keyboard.RawKeyEventData {
    get characters() {
      return this[characters$];
    }
    set characters(value) {
      super.characters = value;
    }
    get charactersIgnoringModifiers() {
      return this[charactersIgnoringModifiers$];
    }
    set charactersIgnoringModifiers(value) {
      super.charactersIgnoringModifiers = value;
    }
    get keyCode() {
      return this[keyCode$0];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get modifiers() {
      return this[modifiers$0];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    get keyLabel() {
      return this.charactersIgnoringModifiers;
    }
    get physicalKey() {
      let t0;
      t0 = keyboard_maps.kMacOsToPhysicalKey[$_get](this.keyCode);
      return t0 == null ? keyboard_key.PhysicalKeyboardKey.none : t0;
    }
    get logicalKey() {
      let t0, t1, t0$;
      let numPadKey = keyboard_maps.kMacOsNumPadMap[$_get](this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      if (this.keyLabel[$isNotEmpty] && !dart.test(keyboard_key.LogicalKeyboardKey.isControlCharacter(this.keyLabel)) && !dart.test(raw_keyboard_macos.RawKeyEventDataMacOs._isUnprintableKey(this.keyLabel))) {
        if (!(this.charactersIgnoringModifiers.length <= 2)) dart.assertFailed(null, L6, 90, 14, "charactersIgnoringModifiers.length <= 2");
        let codeUnit = this.charactersIgnoringModifiers[$codeUnitAt](0);
        if (this.charactersIgnoringModifiers.length === 2) {
          let secondCode = this.charactersIgnoringModifiers[$codeUnitAt](1);
          codeUnit = (codeUnit << 16 | secondCode) >>> 0;
        }
        let keyId = (0 | (codeUnit & 4294967295.0) >>> 0) >>> 0;
        t0 = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t0 == null ? new keyboard_key.LogicalKeyboardKey.new(keyId, {keyLabel: this.keyLabel, debugName: false ? null : "Key " + this.keyLabel[$toUpperCase]()}) : t0;
      }
      if (!dart.equals(this.physicalKey, keyboard_key.PhysicalKeyboardKey.none)) {
        let keyId = (dart.notNull(this.physicalKey.usbHidUsage) | 4294967296.0) >>> 0;
        t0$ = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t0$ == null ? new keyboard_key.LogicalKeyboardKey.new(keyId, {keyLabel: (t1 = this.physicalKey.debugName, t1 == null ? "" : t1), debugName: this.physicalKey.debugName}) : t0$;
      }
      return new keyboard_key.LogicalKeyboardKey.new((21474836480.0 | dart.notNull(this.keyCode) | 1099511627776.0) >>> 0, {debugName: false ? null : "Unknown macOS key code " + dart.str(this.keyCode)});
    }
    [_isLeftRightModifierPressed$](side, anyMask, leftMask, rightMask) {
      if (side == null) dart.nullFailed(L6, 130, 49, "side");
      if (anyMask == null) dart.nullFailed(L6, 130, 59, "anyMask");
      if (leftMask == null) dart.nullFailed(L6, 130, 72, "leftMask");
      if (rightMask == null) dart.nullFailed(L6, 130, 86, "rightMask");
      if ((dart.notNull(this.modifiers) & dart.notNull(anyMask)) === 0) {
        return false;
      }
      let anyOnly = (dart.notNull(this.modifiers) & (dart.notNull(leftMask) | dart.notNull(rightMask) | dart.notNull(anyMask)) >>> 0) >>> 0 === anyMask;
      switch (side) {
        case C0 || CT.C0:
        {
          return true;
        }
        case C1 || CT.C1:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0 && (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0 || anyOnly;
        }
        case C2 || CT.C2:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0 || anyOnly;
        }
        case C3 || CT.C3:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0 || anyOnly;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    isModifierPressed(key, opts) {
      if (key == null) dart.nullFailed(L6, 152, 38, "key");
      let side = opts && 'side' in opts ? opts.side : C0 || CT.C0;
      if (side == null) dart.nullFailed(L6, 152, 57, "side");
      let independentModifier = (dart.notNull(this.modifiers) & 4294901760.0) >>> 0;
      let result = null;
      switch (key) {
        case C4 || CT.C4:
        {
          result = this[_isLeftRightModifierPressed$](side, (independentModifier & 262144) >>> 0, 1, 8192);
          break;
        }
        case C5 || CT.C5:
        {
          result = this[_isLeftRightModifierPressed$](side, (independentModifier & 131072) >>> 0, 2, 4);
          break;
        }
        case C6 || CT.C6:
        {
          result = this[_isLeftRightModifierPressed$](side, (independentModifier & 524288) >>> 0, 32, 64);
          break;
        }
        case C7 || CT.C7:
        {
          result = this[_isLeftRightModifierPressed$](side, (independentModifier & 1048576) >>> 0, 8, 16);
          break;
        }
        case C8 || CT.C8:
        {
          result = (independentModifier & 65536) !== 0;
          break;
        }
        case C11 || CT.C11:
        case C10 || CT.C10:
        case C12 || CT.C12:
        case C9 || CT.C9:
        {
          result = false;
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      if (!(!dart.test(result) || this.getModifierSide(key) != null)) dart.assertFailed(dart.str(this[$runtimeType]) + " thinks that a modifier is pressed, but can't figure out what side it's on.", L6, 183, 12, "!result || getModifierSide(key) != null");
      return result;
    }
    getModifierSide(key) {
      if (key == null) dart.nullFailed(L6, 188, 45, "key");
      const findSide = (anyMask, leftMask, rightMask) => {
        if (anyMask == null) dart.nullFailed(L6, 189, 32, "anyMask");
        if (leftMask == null) dart.nullFailed(L6, 189, 45, "leftMask");
        if (rightMask == null) dart.nullFailed(L6, 189, 59, "rightMask");
        let combinedMask = (dart.notNull(leftMask) | dart.notNull(rightMask)) >>> 0;
        let combined = (dart.notNull(this.modifiers) & combinedMask) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask || (dart.notNull(this.modifiers) & (combinedMask | dart.notNull(anyMask)) >>> 0) >>> 0 === anyMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, intAndintAndintToKeyboardSideN());
      switch (key) {
        case C4 || CT.C4:
        {
          return findSide(262144, 1, 8192);
        }
        case C5 || CT.C5:
        {
          return findSide(131072, 2, 4);
        }
        case C6 || CT.C6:
        {
          return findSide(524288, 32, 64);
        }
        case C7 || CT.C7:
        {
          return findSide(1048576, 8, 16);
        }
        case C8 || CT.C8:
        case C10 || CT.C10:
        case C9 || CT.C9:
        case C11 || CT.C11:
        case C12 || CT.C12:
        {
          return raw_keyboard.KeyboardSide.all;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    static _isUnprintableKey(label) {
      if (label == null) dart.nullFailed(L6, 233, 40, "label");
      if (label.length !== 1) {
        return false;
      }
      let codeUnit = label[$codeUnitAt](0);
      return codeUnit >= 63232 && codeUnit <= 63743;
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "RawKeyEventDataMacOs")) + "(keyLabel: " + dart.str(this.keyLabel) + ", keyCode: " + dart.str(this.keyCode) + ", characters: " + dart.str(this.characters) + "," + " unmodifiedCharacters: " + dart.str(this.charactersIgnoringModifiers) + ", modifiers: " + dart.str(this.modifiers) + ", " + "modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (raw_keyboard_macos.RawKeyEventDataMacOs.new = function(opts) {
    let characters = opts && 'characters' in opts ? opts.characters : "";
    if (characters == null) dart.nullFailed(L6, 26, 10, "characters");
    let charactersIgnoringModifiers = opts && 'charactersIgnoringModifiers' in opts ? opts.charactersIgnoringModifiers : "";
    if (charactersIgnoringModifiers == null) dart.nullFailed(L6, 27, 10, "charactersIgnoringModifiers");
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    if (keyCode == null) dart.nullFailed(L6, 28, 10, "keyCode");
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    if (modifiers == null) dart.nullFailed(L6, 29, 10, "modifiers");
    this[characters$] = characters;
    this[charactersIgnoringModifiers$] = charactersIgnoringModifiers;
    this[keyCode$0] = keyCode;
    this[modifiers$0] = modifiers;
    if (!(characters != null)) dart.assertFailed(null, L6, 30, 15, "characters != null");
    if (!(charactersIgnoringModifiers != null)) dart.assertFailed(null, L6, 31, 15, "charactersIgnoringModifiers != null");
    if (!(keyCode != null)) dart.assertFailed(null, L6, 32, 15, "keyCode != null");
    if (!(modifiers != null)) dart.assertFailed(null, L6, 33, 15, "modifiers != null");
    raw_keyboard_macos.RawKeyEventDataMacOs.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_macos.RawKeyEventDataMacOs.prototype;
  dart.addTypeTests(raw_keyboard_macos.RawKeyEventDataMacOs);
  dart.addTypeCaches(raw_keyboard_macos.RawKeyEventDataMacOs);
  dart.setMethodSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ({
    __proto__: dart.getMethods(raw_keyboard_macos.RawKeyEventDataMacOs.__proto__),
    [_isLeftRightModifierPressed$]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(dart.nullable(raw_keyboard.KeyboardSide), [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ({
    __proto__: dart.getGetters(raw_keyboard_macos.RawKeyEventDataMacOs.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_macos.RawKeyEventDataMacOs, L7);
  dart.setFieldSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ({
    __proto__: dart.getFields(raw_keyboard_macos.RawKeyEventDataMacOs.__proto__),
    characters: dart.finalFieldType(core.String),
    charactersIgnoringModifiers: dart.finalFieldType(core.String),
    keyCode: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(raw_keyboard_macos.RawKeyEventDataMacOs, ['toString']);
  dart.defineLazy(raw_keyboard_macos.RawKeyEventDataMacOs, {
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierCapsLock*/get modifierCapsLock() {
      return 65536;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierShift*/get modifierShift() {
      return 131072;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftShift*/get modifierLeftShift() {
      return 2;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightShift*/get modifierRightShift() {
      return 4;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierControl*/get modifierControl() {
      return 262144;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftControl*/get modifierLeftControl() {
      return 1;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightControl*/get modifierRightControl() {
      return 8192;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierOption*/get modifierOption() {
      return 524288;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftOption*/get modifierLeftOption() {
      return 32;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightOption*/get modifierRightOption() {
      return 64;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierCommand*/get modifierCommand() {
      return 1048576;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftCommand*/get modifierLeftCommand() {
      return 8;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightCommand*/get modifierRightCommand() {
      return 16;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierNumericPad*/get modifierNumericPad() {
      return 2097152;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierHelp*/get modifierHelp() {
      return 4194304;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierFunction*/get modifierFunction() {
      return 8388608;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.deviceIndependentMask*/get deviceIndependentMask() {
      return 4294901760.0;
    }
  }, false);
  var keyHelper$ = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.keyHelper");
  var unicodeScalarValues$ = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.unicodeScalarValues");
  var scanCode$0 = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.scanCode");
  var keyCode$1 = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.keyCode");
  var modifiers$1 = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.modifiers");
  var isDown$ = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.isDown");
  raw_keyboard_linux.RawKeyEventDataLinux = class RawKeyEventDataLinux extends raw_keyboard.RawKeyEventData {
    get keyHelper() {
      return this[keyHelper$];
    }
    set keyHelper(value) {
      super.keyHelper = value;
    }
    get unicodeScalarValues() {
      return this[unicodeScalarValues$];
    }
    set unicodeScalarValues(value) {
      super.unicodeScalarValues = value;
    }
    get scanCode() {
      return this[scanCode$0];
    }
    set scanCode(value) {
      super.scanCode = value;
    }
    get keyCode() {
      return this[keyCode$1];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get modifiers() {
      return this[modifiers$1];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    get isDown() {
      return this[isDown$];
    }
    set isDown(value) {
      super.isDown = value;
    }
    get keyLabel() {
      return this.unicodeScalarValues === 0 ? "" : core.String.fromCharCode(this.unicodeScalarValues);
    }
    get physicalKey() {
      let t0;
      t0 = keyboard_maps.kLinuxToPhysicalKey[$_get](this.scanCode);
      return t0 == null ? keyboard_key.PhysicalKeyboardKey.none : t0;
    }
    get logicalKey() {
      let t0;
      let numPadKey = this.keyHelper.numpadKey(this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      if (this.keyLabel[$isNotEmpty] && !dart.test(keyboard_key.LogicalKeyboardKey.isControlCharacter(this.keyLabel))) {
        let keyId = (0 | (dart.notNull(this.unicodeScalarValues) & 4294967295.0) >>> 0) >>> 0;
        t0 = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t0 == null ? new keyboard_key.LogicalKeyboardKey.new(keyId, {keyLabel: this.keyLabel, debugName: false ? null : "Key " + this.keyLabel[$toUpperCase]()}) : t0;
      }
      let newKey = this.keyHelper.logicalKey(this.keyCode);
      if (newKey != null) {
        return newKey;
      }
      newKey == null ? newKey = new keyboard_key.LogicalKeyboardKey.new((25769803776.0 | dart.notNull(this.keyCode) | 1099511627776.0) >>> 0, {debugName: false ? null : "Unknown key code " + dart.str(this.keyCode)}) : null;
      return newKey;
    }
    isModifierPressed(key, opts) {
      if (key == null) dart.nullFailed(L8, 120, 38, "key");
      let side = opts && 'side' in opts ? opts.side : C0 || CT.C0;
      if (side == null) dart.nullFailed(L8, 120, 57, "side");
      return this.keyHelper.isModifierPressed(key, this.modifiers, {side: side, keyCode: this.keyCode, isDown: this.isDown});
    }
    getModifierSide(key) {
      if (key == null) dart.nullFailed(L8, 125, 44, "key");
      return this.keyHelper.getModifierSide(key);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "RawKeyEventDataLinux")) + "(keyLabel: " + dart.str(this.keyLabel) + ", keyCode: " + dart.str(this.keyCode) + ", scanCode: " + dart.str(this.scanCode) + "," + " unicodeScalarValues: " + dart.str(this.unicodeScalarValues) + ", modifiers: " + dart.str(this.modifiers) + ", " + "modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (raw_keyboard_linux.RawKeyEventDataLinux.new = function(opts) {
    let keyHelper = opts && 'keyHelper' in opts ? opts.keyHelper : null;
    if (keyHelper == null) dart.nullFailed(L8, 26, 19, "keyHelper");
    let unicodeScalarValues = opts && 'unicodeScalarValues' in opts ? opts.unicodeScalarValues : 0;
    if (unicodeScalarValues == null) dart.nullFailed(L8, 27, 10, "unicodeScalarValues");
    let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
    if (scanCode == null) dart.nullFailed(L8, 28, 10, "scanCode");
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    if (keyCode == null) dart.nullFailed(L8, 29, 10, "keyCode");
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    if (modifiers == null) dart.nullFailed(L8, 30, 10, "modifiers");
    let isDown = opts && 'isDown' in opts ? opts.isDown : null;
    if (isDown == null) dart.nullFailed(L8, 31, 19, "isDown");
    this[keyHelper$] = keyHelper;
    this[unicodeScalarValues$] = unicodeScalarValues;
    this[scanCode$0] = scanCode;
    this[keyCode$1] = keyCode;
    this[modifiers$1] = modifiers;
    this[isDown$] = isDown;
    if (!(scanCode != null)) dart.assertFailed(null, L8, 32, 15, "scanCode != null");
    if (!(unicodeScalarValues != null)) dart.assertFailed(null, L8, 33, 15, "unicodeScalarValues != null");
    if (!((dart.notNull(unicodeScalarValues) & ~4294967295.0 >>> 0) === 0)) dart.assertFailed(null, L8, 34, 15, "(unicodeScalarValues & ~LogicalKeyboardKey.valueMask) == 0");
    if (!(keyCode != null)) dart.assertFailed(null, L8, 35, 15, "keyCode != null");
    if (!(modifiers != null)) dart.assertFailed(null, L8, 36, 15, "modifiers != null");
    if (!(keyHelper != null)) dart.assertFailed(null, L8, 37, 15, "keyHelper != null");
    raw_keyboard_linux.RawKeyEventDataLinux.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_linux.RawKeyEventDataLinux.prototype;
  dart.addTypeTests(raw_keyboard_linux.RawKeyEventDataLinux);
  dart.addTypeCaches(raw_keyboard_linux.RawKeyEventDataLinux);
  dart.setMethodSignature(raw_keyboard_linux.RawKeyEventDataLinux, () => ({
    __proto__: dart.getMethods(raw_keyboard_linux.RawKeyEventDataLinux.__proto__),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_linux.RawKeyEventDataLinux, () => ({
    __proto__: dart.getGetters(raw_keyboard_linux.RawKeyEventDataLinux.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_linux.RawKeyEventDataLinux, L9);
  dart.setFieldSignature(raw_keyboard_linux.RawKeyEventDataLinux, () => ({
    __proto__: dart.getFields(raw_keyboard_linux.RawKeyEventDataLinux.__proto__),
    keyHelper: dart.finalFieldType(raw_keyboard_linux.KeyHelper),
    unicodeScalarValues: dart.finalFieldType(core.int),
    scanCode: dart.finalFieldType(core.int),
    keyCode: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int),
    isDown: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(raw_keyboard_linux.RawKeyEventDataLinux, ['toString']);
  raw_keyboard_linux.KeyHelper = class KeyHelper extends core.Object {
    static new(toolkit) {
      if (toolkit == null) dart.nullFailed(L8, 144, 28, "toolkit");
      if (toolkit === "glfw") {
        return new raw_keyboard_linux.GLFWKeyHelper.new();
      } else if (toolkit === "gtk") {
        return new raw_keyboard_linux.GtkKeyHelper.new();
      } else {
        dart.throw(assertions.FlutterError.new("Window toolkit not recognized: " + dart.str(toolkit)));
      }
    }
  };
  (raw_keyboard_linux.KeyHelper[dart.mixinNew] = function() {
  }).prototype = raw_keyboard_linux.KeyHelper.prototype;
  dart.addTypeTests(raw_keyboard_linux.KeyHelper);
  dart.addTypeCaches(raw_keyboard_linux.KeyHelper);
  dart.setLibraryUri(raw_keyboard_linux.KeyHelper, L9);
  var _mergeModifiers = dart.privateName(raw_keyboard_linux, "_mergeModifiers");
  const Object_KeyHelper$36 = class Object_KeyHelper extends core.Object {};
  (Object_KeyHelper$36.new = function() {
  }).prototype = Object_KeyHelper$36.prototype;
  dart.applyMixin(Object_KeyHelper$36, raw_keyboard_linux.KeyHelper);
  raw_keyboard_linux.GLFWKeyHelper = class GLFWKeyHelper extends Object_KeyHelper$36 {
    [_mergeModifiers](opts) {
      let modifiers = opts && 'modifiers' in opts ? opts.modifiers : null;
      if (modifiers == null) dart.nullFailed(L8, 214, 37, "modifiers");
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : null;
      if (keyCode == null) dart.nullFailed(L8, 214, 61, "keyCode");
      let isDown = opts && 'isDown' in opts ? opts.isDown : null;
      if (isDown == null) dart.nullFailed(L8, 214, 84, "isDown");
      let modifierChange = 0;
      switch (keyCode) {
        case 340:
        case 344:
        {
          modifierChange = 1;
          break;
        }
        case 341:
        case 345:
        {
          modifierChange = 2;
          break;
        }
        case 342:
        case 346:
        {
          modifierChange = 4;
          break;
        }
        case 343:
        case 347:
        {
          modifierChange = 8;
          break;
        }
        case 280:
        {
          modifierChange = 16;
          break;
        }
        case 282:
        {
          modifierChange = 32;
          break;
        }
        default:
        {
          break;
        }
      }
      return dart.test(isDown) ? (dart.notNull(modifiers) | modifierChange) >>> 0 : (dart.notNull(modifiers) & ~modifierChange >>> 0) >>> 0;
    }
    isModifierPressed(key, modifiers, opts) {
      if (key == null) dart.nullFailed(L8, 264, 38, "key");
      if (modifiers == null) dart.nullFailed(L8, 264, 47, "modifiers");
      let side = opts && 'side' in opts ? opts.side : C0 || CT.C0;
      if (side == null) dart.nullFailed(L8, 264, 72, "side");
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : null;
      if (keyCode == null) dart.nullFailed(L8, 264, 110, "keyCode");
      let isDown = opts && 'isDown' in opts ? opts.isDown : null;
      if (isDown == null) dart.nullFailed(L8, 264, 133, "isDown");
      modifiers = this[_mergeModifiers]({modifiers: modifiers, keyCode: keyCode, isDown: isDown});
      switch (key) {
        case C4 || CT.C4:
        {
          return (dart.notNull(modifiers) & 2) !== 0;
        }
        case C5 || CT.C5:
        {
          return (dart.notNull(modifiers) & 1) !== 0;
        }
        case C6 || CT.C6:
        {
          return (dart.notNull(modifiers) & 4) !== 0;
        }
        case C7 || CT.C7:
        {
          return (dart.notNull(modifiers) & 8) !== 0;
        }
        case C8 || CT.C8:
        {
          return (dart.notNull(modifiers) & 16) !== 0;
        }
        case C10 || CT.C10:
        {
          return (dart.notNull(modifiers) & 32) !== 0;
        }
        case C11 || CT.C11:
        case C12 || CT.C12:
        case C9 || CT.C9:
        {
          return false;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    getModifierSide(key) {
      if (key == null) dart.nullFailed(L8, 288, 44, "key");
      return raw_keyboard.KeyboardSide.all;
    }
    numpadKey(keyCode) {
      if (keyCode == null) dart.nullFailed(L8, 296, 37, "keyCode");
      return keyboard_maps.kGlfwNumpadMap[$_get](keyCode);
    }
    logicalKey(keyCode) {
      if (keyCode == null) dart.nullFailed(L8, 301, 38, "keyCode");
      return keyboard_maps.kGlfwToLogicalKey[$_get](keyCode);
    }
  };
  (raw_keyboard_linux.GLFWKeyHelper.new = function() {
    ;
  }).prototype = raw_keyboard_linux.GLFWKeyHelper.prototype;
  dart.addTypeTests(raw_keyboard_linux.GLFWKeyHelper);
  dart.addTypeCaches(raw_keyboard_linux.GLFWKeyHelper);
  dart.setMethodSignature(raw_keyboard_linux.GLFWKeyHelper, () => ({
    __proto__: dart.getMethods(raw_keyboard_linux.GLFWKeyHelper.__proto__),
    [_mergeModifiers]: dart.fnType(core.int, [], {}, {isDown: core.bool, keyCode: core.int, modifiers: core.int}),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey, core.int], {side: raw_keyboard.KeyboardSide}, {isDown: core.bool, keyCode: core.int}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey]),
    numpadKey: dart.fnType(dart.nullable(keyboard_key.LogicalKeyboardKey), [core.int]),
    logicalKey: dart.fnType(dart.nullable(keyboard_key.LogicalKeyboardKey), [core.int])
  }));
  dart.setLibraryUri(raw_keyboard_linux.GLFWKeyHelper, L9);
  dart.defineLazy(raw_keyboard_linux.GLFWKeyHelper, {
    /*raw_keyboard_linux.GLFWKeyHelper.modifierCapsLock*/get modifierCapsLock() {
      return 16;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierControl*/get modifierControl() {
      return 2;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierAlt*/get modifierAlt() {
      return 4;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierMeta*/get modifierMeta() {
      return 8;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierNumericPad*/get modifierNumericPad() {
      return 32;
    }
  }, false);
  const Object_KeyHelper$36$ = class Object_KeyHelper extends core.Object {};
  (Object_KeyHelper$36$.new = function() {
  }).prototype = Object_KeyHelper$36$.prototype;
  dart.applyMixin(Object_KeyHelper$36$, raw_keyboard_linux.KeyHelper);
  raw_keyboard_linux.GtkKeyHelper = class GtkKeyHelper extends Object_KeyHelper$36$ {
    [_mergeModifiers](opts) {
      let modifiers = opts && 'modifiers' in opts ? opts.modifiers : null;
      if (modifiers == null) dart.nullFailed(L8, 350, 37, "modifiers");
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : null;
      if (keyCode == null) dart.nullFailed(L8, 350, 61, "keyCode");
      let isDown = opts && 'isDown' in opts ? opts.isDown : null;
      if (isDown == null) dart.nullFailed(L8, 350, 84, "isDown");
      let modifierChange = 0;
      switch (keyCode) {
        case 65505:
        case 65506:
        {
          modifierChange = 1;
          break;
        }
        case 65507:
        case 65508:
        {
          modifierChange = 4;
          break;
        }
        case 65513:
        case 65514:
        {
          modifierChange = 8;
          break;
        }
        case 65515:
        case 65516:
        {
          modifierChange = 67108864;
          break;
        }
        case 65509:
        case 65510:
        {
          modifierChange = 2;
          break;
        }
        case 65407:
        {
          modifierChange = 16;
          break;
        }
        default:
        {
          break;
        }
      }
      return dart.test(isDown) ? (dart.notNull(modifiers) | modifierChange) >>> 0 : (dart.notNull(modifiers) & ~modifierChange >>> 0) >>> 0;
    }
    isModifierPressed(key, modifiers, opts) {
      if (key == null) dart.nullFailed(L8, 402, 38, "key");
      if (modifiers == null) dart.nullFailed(L8, 402, 47, "modifiers");
      let side = opts && 'side' in opts ? opts.side : C0 || CT.C0;
      if (side == null) dart.nullFailed(L8, 402, 72, "side");
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : null;
      if (keyCode == null) dart.nullFailed(L8, 402, 110, "keyCode");
      let isDown = opts && 'isDown' in opts ? opts.isDown : null;
      if (isDown == null) dart.nullFailed(L8, 402, 133, "isDown");
      modifiers = this[_mergeModifiers]({modifiers: modifiers, keyCode: keyCode, isDown: isDown});
      switch (key) {
        case C4 || CT.C4:
        {
          return (dart.notNull(modifiers) & 4) !== 0;
        }
        case C5 || CT.C5:
        {
          return (dart.notNull(modifiers) & 1) !== 0;
        }
        case C6 || CT.C6:
        {
          return (dart.notNull(modifiers) & 8) !== 0;
        }
        case C7 || CT.C7:
        {
          return (dart.notNull(modifiers) & 67108864) !== 0;
        }
        case C8 || CT.C8:
        {
          return (dart.notNull(modifiers) & 2) !== 0;
        }
        case C10 || CT.C10:
        {
          return (dart.notNull(modifiers) & 16) !== 0;
        }
        case C11 || CT.C11:
        case C12 || CT.C12:
        case C9 || CT.C9:
        {
          return false;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    getModifierSide(key) {
      if (key == null) dart.nullFailed(L8, 426, 44, "key");
      return raw_keyboard.KeyboardSide.all;
    }
    numpadKey(keyCode) {
      if (keyCode == null) dart.nullFailed(L8, 434, 37, "keyCode");
      return keyboard_maps.kGtkNumpadMap[$_get](keyCode);
    }
    logicalKey(keyCode) {
      if (keyCode == null) dart.nullFailed(L8, 439, 38, "keyCode");
      return keyboard_maps.kGtkToLogicalKey[$_get](keyCode);
    }
  };
  (raw_keyboard_linux.GtkKeyHelper.new = function() {
    ;
  }).prototype = raw_keyboard_linux.GtkKeyHelper.prototype;
  dart.addTypeTests(raw_keyboard_linux.GtkKeyHelper);
  dart.addTypeCaches(raw_keyboard_linux.GtkKeyHelper);
  dart.setMethodSignature(raw_keyboard_linux.GtkKeyHelper, () => ({
    __proto__: dart.getMethods(raw_keyboard_linux.GtkKeyHelper.__proto__),
    [_mergeModifiers]: dart.fnType(core.int, [], {}, {isDown: core.bool, keyCode: core.int, modifiers: core.int}),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey, core.int], {side: raw_keyboard.KeyboardSide}, {isDown: core.bool, keyCode: core.int}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey]),
    numpadKey: dart.fnType(dart.nullable(keyboard_key.LogicalKeyboardKey), [core.int]),
    logicalKey: dart.fnType(dart.nullable(keyboard_key.LogicalKeyboardKey), [core.int])
  }));
  dart.setLibraryUri(raw_keyboard_linux.GtkKeyHelper, L9);
  dart.defineLazy(raw_keyboard_linux.GtkKeyHelper, {
    /*raw_keyboard_linux.GtkKeyHelper.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_linux.GtkKeyHelper.modifierCapsLock*/get modifierCapsLock() {
      return 2;
    },
    /*raw_keyboard_linux.GtkKeyHelper.modifierControl*/get modifierControl() {
      return 4;
    },
    /*raw_keyboard_linux.GtkKeyHelper.modifierMod1*/get modifierMod1() {
      return 8;
    },
    /*raw_keyboard_linux.GtkKeyHelper.modifierMod2*/get modifierMod2() {
      return 16;
    },
    /*raw_keyboard_linux.GtkKeyHelper.modifierMeta*/get modifierMeta() {
      return 67108864;
    }
  }, false);
  var _isLeftRightModifierPressed$0 = dart.privateName(raw_keyboard_ios, "_isLeftRightModifierPressed");
  var characters$0 = dart.privateName(raw_keyboard_ios, "RawKeyEventDataIos.characters");
  var charactersIgnoringModifiers$0 = dart.privateName(raw_keyboard_ios, "RawKeyEventDataIos.charactersIgnoringModifiers");
  var keyCode$2 = dart.privateName(raw_keyboard_ios, "RawKeyEventDataIos.keyCode");
  var modifiers$2 = dart.privateName(raw_keyboard_ios, "RawKeyEventDataIos.modifiers");
  raw_keyboard_ios.RawKeyEventDataIos = class RawKeyEventDataIos extends raw_keyboard.RawKeyEventData {
    get characters() {
      return this[characters$0];
    }
    set characters(value) {
      super.characters = value;
    }
    get charactersIgnoringModifiers() {
      return this[charactersIgnoringModifiers$0];
    }
    set charactersIgnoringModifiers(value) {
      super.charactersIgnoringModifiers = value;
    }
    get keyCode() {
      return this[keyCode$2];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get modifiers() {
      return this[modifiers$2];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    get keyLabel() {
      return this.charactersIgnoringModifiers;
    }
    get physicalKey() {
      let t0;
      t0 = keyboard_maps.kIosToPhysicalKey[$_get](this.keyCode);
      return t0 == null ? keyboard_key.PhysicalKeyboardKey.none : t0;
    }
    get logicalKey() {
      let t0, t1, t0$;
      let numPadKey = keyboard_maps.kIosNumPadMap[$_get](this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      let newKey = raw_keyboard_ios._kIosToLogicalMap[$_get](this.keyLabel);
      if (newKey != null) {
        return newKey;
      }
      if (this.keyLabel[$isNotEmpty] && !dart.test(keyboard_key.LogicalKeyboardKey.isControlCharacter(this.keyLabel))) {
        if (!(this.charactersIgnoringModifiers.length <= 2)) dart.assertFailed(null, L10, 121, 14, "charactersIgnoringModifiers.length <= 2");
        let codeUnit = this.charactersIgnoringModifiers[$codeUnitAt](0);
        if (this.charactersIgnoringModifiers.length === 2) {
          let secondCode = this.charactersIgnoringModifiers[$codeUnitAt](1);
          codeUnit = (codeUnit << 16 | secondCode) >>> 0;
        }
        let keyId = (0 | (codeUnit & 4294967295.0) >>> 0) >>> 0;
        t0 = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t0 == null ? new keyboard_key.LogicalKeyboardKey.new(keyId, {keyLabel: this.keyLabel, debugName: false ? null : "Key " + this.keyLabel[$toUpperCase]()}) : t0;
      }
      if (!dart.equals(this.physicalKey, keyboard_key.PhysicalKeyboardKey.none)) {
        let keyId = (dart.notNull(this.physicalKey.usbHidUsage) | 4294967296.0) >>> 0;
        t0$ = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t0$ == null ? new keyboard_key.LogicalKeyboardKey.new(keyId, {keyLabel: (t1 = this.physicalKey.debugName, t1 == null ? "" : t1), debugName: this.physicalKey.debugName}) : t0$;
      }
      return new keyboard_key.LogicalKeyboardKey.new((17179869184.0 | dart.notNull(this.keyCode) | 1099511627776.0) >>> 0, {debugName: false ? null : "Unknown iOS key code " + dart.str(this.keyCode)});
    }
    [_isLeftRightModifierPressed$0](side, anyMask, leftMask, rightMask) {
      if (side == null) dart.nullFailed(L10, 161, 49, "side");
      if (anyMask == null) dart.nullFailed(L10, 161, 59, "anyMask");
      if (leftMask == null) dart.nullFailed(L10, 161, 72, "leftMask");
      if (rightMask == null) dart.nullFailed(L10, 161, 86, "rightMask");
      if ((dart.notNull(this.modifiers) & dart.notNull(anyMask)) === 0) {
        return false;
      }
      let anyOnly = (dart.notNull(this.modifiers) & (dart.notNull(leftMask) | dart.notNull(rightMask) | dart.notNull(anyMask)) >>> 0) >>> 0 === anyMask;
      switch (side) {
        case C0 || CT.C0:
        {
          return true;
        }
        case C1 || CT.C1:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0 && (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0 || anyOnly;
        }
        case C2 || CT.C2:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0 || anyOnly;
        }
        case C3 || CT.C3:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0 || anyOnly;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    isModifierPressed(key, opts) {
      if (key == null) dart.nullFailed(L10, 183, 38, "key");
      let side = opts && 'side' in opts ? opts.side : C0 || CT.C0;
      if (side == null) dart.nullFailed(L10, 183, 57, "side");
      let independentModifier = (dart.notNull(this.modifiers) & 4294901760.0) >>> 0;
      let result = null;
      switch (key) {
        case C4 || CT.C4:
        {
          result = this[_isLeftRightModifierPressed$0](side, (independentModifier & 262144) >>> 0, 1, 8192);
          break;
        }
        case C5 || CT.C5:
        {
          result = this[_isLeftRightModifierPressed$0](side, (independentModifier & 131072) >>> 0, 2, 4);
          break;
        }
        case C6 || CT.C6:
        {
          result = this[_isLeftRightModifierPressed$0](side, (independentModifier & 524288) >>> 0, 32, 64);
          break;
        }
        case C7 || CT.C7:
        {
          result = this[_isLeftRightModifierPressed$0](side, (independentModifier & 1048576) >>> 0, 8, 16);
          break;
        }
        case C8 || CT.C8:
        {
          result = (independentModifier & 65536) !== 0;
          break;
        }
        case C11 || CT.C11:
        case C10 || CT.C10:
        case C12 || CT.C12:
        case C9 || CT.C9:
        {
          result = false;
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      if (!(!dart.test(result) || this.getModifierSide(key) != null)) dart.assertFailed(dart.str(this[$runtimeType]) + " thinks that a modifier is pressed, but can't figure out what side it's on.", L10, 214, 12, "!result || getModifierSide(key) != null");
      return result;
    }
    getModifierSide(key) {
      if (key == null) dart.nullFailed(L10, 219, 45, "key");
      const findSide = (anyMask, leftMask, rightMask) => {
        if (anyMask == null) dart.nullFailed(L10, 220, 32, "anyMask");
        if (leftMask == null) dart.nullFailed(L10, 220, 45, "leftMask");
        if (rightMask == null) dart.nullFailed(L10, 220, 59, "rightMask");
        let combinedMask = (dart.notNull(leftMask) | dart.notNull(rightMask)) >>> 0;
        let combined = (dart.notNull(this.modifiers) & combinedMask) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask || (dart.notNull(this.modifiers) & (combinedMask | dart.notNull(anyMask)) >>> 0) >>> 0 === anyMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, intAndintAndintToKeyboardSideN());
      switch (key) {
        case C4 || CT.C4:
        {
          return findSide(262144, 1, 8192);
        }
        case C5 || CT.C5:
        {
          return findSide(131072, 2, 4);
        }
        case C6 || CT.C6:
        {
          return findSide(524288, 32, 64);
        }
        case C7 || CT.C7:
        {
          return findSide(1048576, 8, 16);
        }
        case C8 || CT.C8:
        case C10 || CT.C10:
        case C9 || CT.C9:
        case C11 || CT.C11:
        case C12 || CT.C12:
        {
          return raw_keyboard.KeyboardSide.all;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "RawKeyEventDataIos")) + "(keyLabel: " + dart.str(this.keyLabel) + ", keyCode: " + dart.str(this.keyCode) + ", characters: " + dart.str(this.characters) + "," + " unmodifiedCharacters: " + dart.str(this.charactersIgnoringModifiers) + ", modifiers: " + dart.str(this.modifiers) + ", " + "modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (raw_keyboard_ios.RawKeyEventDataIos.new = function(opts) {
    let characters = opts && 'characters' in opts ? opts.characters : "";
    if (characters == null) dart.nullFailed(L10, 51, 10, "characters");
    let charactersIgnoringModifiers = opts && 'charactersIgnoringModifiers' in opts ? opts.charactersIgnoringModifiers : "";
    if (charactersIgnoringModifiers == null) dart.nullFailed(L10, 52, 10, "charactersIgnoringModifiers");
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    if (keyCode == null) dart.nullFailed(L10, 53, 10, "keyCode");
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    if (modifiers == null) dart.nullFailed(L10, 54, 10, "modifiers");
    this[characters$0] = characters;
    this[charactersIgnoringModifiers$0] = charactersIgnoringModifiers;
    this[keyCode$2] = keyCode;
    this[modifiers$2] = modifiers;
    if (!(characters != null)) dart.assertFailed(null, L10, 55, 15, "characters != null");
    if (!(charactersIgnoringModifiers != null)) dart.assertFailed(null, L10, 56, 15, "charactersIgnoringModifiers != null");
    if (!(keyCode != null)) dart.assertFailed(null, L10, 57, 15, "keyCode != null");
    if (!(modifiers != null)) dart.assertFailed(null, L10, 58, 15, "modifiers != null");
    raw_keyboard_ios.RawKeyEventDataIos.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_ios.RawKeyEventDataIos.prototype;
  dart.addTypeTests(raw_keyboard_ios.RawKeyEventDataIos);
  dart.addTypeCaches(raw_keyboard_ios.RawKeyEventDataIos);
  dart.setMethodSignature(raw_keyboard_ios.RawKeyEventDataIos, () => ({
    __proto__: dart.getMethods(raw_keyboard_ios.RawKeyEventDataIos.__proto__),
    [_isLeftRightModifierPressed$0]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(dart.nullable(raw_keyboard.KeyboardSide), [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_ios.RawKeyEventDataIos, () => ({
    __proto__: dart.getGetters(raw_keyboard_ios.RawKeyEventDataIos.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_ios.RawKeyEventDataIos, L11);
  dart.setFieldSignature(raw_keyboard_ios.RawKeyEventDataIos, () => ({
    __proto__: dart.getFields(raw_keyboard_ios.RawKeyEventDataIos.__proto__),
    characters: dart.finalFieldType(core.String),
    charactersIgnoringModifiers: dart.finalFieldType(core.String),
    keyCode: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(raw_keyboard_ios.RawKeyEventDataIos, ['toString']);
  dart.defineLazy(raw_keyboard_ios.RawKeyEventDataIos, {
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierCapsLock*/get modifierCapsLock() {
      return 65536;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierShift*/get modifierShift() {
      return 131072;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierLeftShift*/get modifierLeftShift() {
      return 2;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierRightShift*/get modifierRightShift() {
      return 4;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierControl*/get modifierControl() {
      return 262144;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierLeftControl*/get modifierLeftControl() {
      return 1;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierRightControl*/get modifierRightControl() {
      return 8192;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierOption*/get modifierOption() {
      return 524288;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierLeftOption*/get modifierLeftOption() {
      return 32;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierRightOption*/get modifierRightOption() {
      return 64;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierCommand*/get modifierCommand() {
      return 1048576;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierLeftCommand*/get modifierLeftCommand() {
      return 8;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierRightCommand*/get modifierRightCommand() {
      return 16;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierNumericPad*/get modifierNumericPad() {
      return 2097152;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierHelp*/get modifierHelp() {
      return 4194304;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierFunction*/get modifierFunction() {
      return 8388608;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.deviceIndependentMask*/get deviceIndependentMask() {
      return 4294901760.0;
    }
  }, false);
  var LogicalKeyboardKey_keyLabel = dart.privateName(keyboard_key, "LogicalKeyboardKey.keyLabel");
  var LogicalKeyboardKey_debugName = dart.privateName(keyboard_key, "LogicalKeyboardKey.debugName");
  var LogicalKeyboardKey_keyId = dart.privateName(keyboard_key, "LogicalKeyboardKey.keyId");
  var C14;
  var C15;
  var C16;
  var C17;
  var C18;
  var C19;
  var C20;
  var C21;
  var C22;
  var C23;
  var C24;
  var C25;
  var C26;
  var C27;
  var C28;
  var C29;
  var C30;
  var C31;
  var C32;
  var C33;
  var C34;
  var C13;
  dart.defineLazy(raw_keyboard_ios, {
    /*raw_keyboard_ios._kIosToLogicalMap*/get _kIosToLogicalMap() {
      return C13 || CT.C13;
    }
  }, false);
  var _isLeftRightModifierPressed$1 = dart.privateName(raw_keyboard_fuchsia, "_isLeftRightModifierPressed");
  var hidUsage$ = dart.privateName(raw_keyboard_fuchsia, "RawKeyEventDataFuchsia.hidUsage");
  var codePoint$ = dart.privateName(raw_keyboard_fuchsia, "RawKeyEventDataFuchsia.codePoint");
  var modifiers$3 = dart.privateName(raw_keyboard_fuchsia, "RawKeyEventDataFuchsia.modifiers");
  raw_keyboard_fuchsia.RawKeyEventDataFuchsia = class RawKeyEventDataFuchsia extends raw_keyboard.RawKeyEventData {
    get hidUsage() {
      return this[hidUsage$];
    }
    set hidUsage(value) {
      super.hidUsage = value;
    }
    get codePoint() {
      return this[codePoint$];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get modifiers() {
      return this[modifiers$3];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    get keyLabel() {
      return this.codePoint === 0 ? "" : core.String.fromCharCode(this.codePoint);
    }
    get logicalKey() {
      if (this.codePoint !== 0) {
        return new keyboard_key.LogicalKeyboardKey.new((0 | (dart.notNull(this.codePoint) & 4294967295.0) >>> 0) >>> 0, {keyLabel: this.keyLabel, debugName: false ? null : "Key " + dart.str(this.keyLabel)});
      }
      let newKey = keyboard_maps.kFuchsiaToLogicalKey[$_get]((dart.notNull(this.hidUsage) | 4294967296.0) >>> 0);
      if (newKey != null) {
        return newKey;
      }
      newKey == null ? newKey = new keyboard_key.LogicalKeyboardKey.new((12884901888.0 | dart.notNull(this.hidUsage) | 1099511627776.0) >>> 0, {debugName: false ? null : "Ephemeral Fuchsia key code " + dart.str(this.hidUsage)}) : null;
      return newKey;
    }
    get physicalKey() {
      let t0;
      t0 = keyboard_maps.kFuchsiaToPhysicalKey[$_get](this.hidUsage);
      return t0 == null ? keyboard_key.PhysicalKeyboardKey.none : t0;
    }
    [_isLeftRightModifierPressed$1](side, anyMask, leftMask, rightMask) {
      if (side == null) dart.nullFailed(L12, 97, 49, "side");
      if (anyMask == null) dart.nullFailed(L12, 97, 59, "anyMask");
      if (leftMask == null) dart.nullFailed(L12, 97, 72, "leftMask");
      if (rightMask == null) dart.nullFailed(L12, 97, 86, "rightMask");
      if ((dart.notNull(this.modifiers) & dart.notNull(anyMask)) === 0) {
        return false;
      }
      switch (side) {
        case C0 || CT.C0:
        {
          return true;
        }
        case C1 || CT.C1:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0 && (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0;
        }
        case C2 || CT.C2:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0;
        }
        case C3 || CT.C3:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    isModifierPressed(key, opts) {
      if (key == null) dart.nullFailed(L12, 114, 38, "key");
      let side = opts && 'side' in opts ? opts.side : C0 || CT.C0;
      if (side == null) dart.nullFailed(L12, 114, 58, "side");
      if (!(side != null)) dart.assertFailed(null, L12, 115, 12, "side != null");
      switch (key) {
        case C4 || CT.C4:
        {
          return this[_isLeftRightModifierPressed$1](side, 24, 8, 16);
        }
        case C5 || CT.C5:
        {
          return this[_isLeftRightModifierPressed$1](side, 6, 2, 4);
        }
        case C6 || CT.C6:
        {
          return this[_isLeftRightModifierPressed$1](side, 96, 32, 64);
        }
        case C7 || CT.C7:
        {
          return this[_isLeftRightModifierPressed$1](side, 384, 128, 256);
        }
        case C8 || CT.C8:
        {
          return (dart.notNull(this.modifiers) & 1) !== 0;
        }
        case C10 || CT.C10:
        case C9 || CT.C9:
        case C11 || CT.C11:
        case C12 || CT.C12:
        {
          return false;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    getModifierSide(key) {
      if (key == null) dart.nullFailed(L12, 137, 45, "key");
      const findSide = (anyMask, leftMask, rightMask) => {
        if (anyMask == null) dart.nullFailed(L12, 138, 32, "anyMask");
        if (leftMask == null) dart.nullFailed(L12, 138, 45, "leftMask");
        if (rightMask == null) dart.nullFailed(L12, 138, 59, "rightMask");
        let combined = (dart.notNull(this.modifiers) & dart.notNull(anyMask)) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === anyMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, intAndintAndintToKeyboardSideN());
      switch (key) {
        case C4 || CT.C4:
        {
          return findSide(24, 8, 16);
        }
        case C5 || CT.C5:
        {
          return findSide(6, 2, 4);
        }
        case C6 || CT.C6:
        {
          return findSide(96, 32, 64);
        }
        case C7 || CT.C7:
        {
          return findSide(384, 128, 256);
        }
        case C8 || CT.C8:
        {
          return (dart.notNull(this.modifiers) & 1) === 0 ? null : raw_keyboard.KeyboardSide.all;
        }
        case C10 || CT.C10:
        case C9 || CT.C9:
        case C11 || CT.C11:
        case C12 || CT.C12:
        {
          return null;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "RawKeyEventDataFuchsia")) + "(hidUsage: " + dart.str(this.hidUsage) + ", codePoint: " + dart.str(this.codePoint) + ", modifiers: " + dart.str(this.modifiers) + ", " + "modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (raw_keyboard_fuchsia.RawKeyEventDataFuchsia.new = function(opts) {
    let hidUsage = opts && 'hidUsage' in opts ? opts.hidUsage : 0;
    if (hidUsage == null) dart.nullFailed(L12, 25, 10, "hidUsage");
    let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
    if (codePoint == null) dart.nullFailed(L12, 26, 10, "codePoint");
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    if (modifiers == null) dart.nullFailed(L12, 27, 10, "modifiers");
    this[hidUsage$] = hidUsage;
    this[codePoint$] = codePoint;
    this[modifiers$3] = modifiers;
    if (!(hidUsage != null)) dart.assertFailed(null, L12, 28, 15, "hidUsage != null");
    if (!(codePoint != null)) dart.assertFailed(null, L12, 29, 15, "codePoint != null");
    if (!(modifiers != null)) dart.assertFailed(null, L12, 30, 15, "modifiers != null");
    raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_fuchsia.RawKeyEventDataFuchsia.prototype;
  dart.addTypeTests(raw_keyboard_fuchsia.RawKeyEventDataFuchsia);
  dart.addTypeCaches(raw_keyboard_fuchsia.RawKeyEventDataFuchsia);
  dart.setMethodSignature(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getMethods(raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__),
    [_isLeftRightModifierPressed$1]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(dart.nullable(raw_keyboard.KeyboardSide), [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getGetters(raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__),
    keyLabel: core.String,
    logicalKey: keyboard_key.LogicalKeyboardKey,
    physicalKey: keyboard_key.PhysicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, L13);
  dart.setFieldSignature(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getFields(raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__),
    hidUsage: dart.finalFieldType(core.int),
    codePoint: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, ['toString']);
  dart.defineLazy(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, {
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierNone*/get modifierNone() {
      return 0;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierCapsLock*/get modifierCapsLock() {
      return 1;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftShift*/get modifierLeftShift() {
      return 2;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightShift*/get modifierRightShift() {
      return 4;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierShift*/get modifierShift() {
      return 6;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftControl*/get modifierLeftControl() {
      return 8;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightControl*/get modifierRightControl() {
      return 16;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierControl*/get modifierControl() {
      return 24;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftAlt*/get modifierLeftAlt() {
      return 32;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightAlt*/get modifierRightAlt() {
      return 64;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierAlt*/get modifierAlt() {
      return 96;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftMeta*/get modifierLeftMeta() {
      return 128;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightMeta*/get modifierRightMeta() {
      return 256;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierMeta*/get modifierMeta() {
      return 384;
    }
  }, false);
  var _isLeftRightModifierPressed$2 = dart.privateName(raw_keyboard_android, "_isLeftRightModifierPressed");
  var flags$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.flags");
  var codePoint$0 = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.codePoint");
  var plainCodePoint$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.plainCodePoint");
  var keyCode$3 = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.keyCode");
  var scanCode$1 = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.scanCode");
  var metaState$0 = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.metaState");
  var eventSource$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.eventSource");
  var vendorId$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.vendorId");
  var productId$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.productId");
  var deviceId$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.deviceId");
  var repeatCount$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.repeatCount");
  raw_keyboard_android.RawKeyEventDataAndroid = class RawKeyEventDataAndroid extends raw_keyboard.RawKeyEventData {
    get flags() {
      return this[flags$];
    }
    set flags(value) {
      super.flags = value;
    }
    get codePoint() {
      return this[codePoint$0];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get plainCodePoint() {
      return this[plainCodePoint$];
    }
    set plainCodePoint(value) {
      super.plainCodePoint = value;
    }
    get keyCode() {
      return this[keyCode$3];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get scanCode() {
      return this[scanCode$1];
    }
    set scanCode(value) {
      super.scanCode = value;
    }
    get metaState() {
      return this[metaState$0];
    }
    set metaState(value) {
      super.metaState = value;
    }
    get eventSource() {
      return this[eventSource$];
    }
    set eventSource(value) {
      super.eventSource = value;
    }
    get vendorId() {
      return this[vendorId$];
    }
    set vendorId(value) {
      super.vendorId = value;
    }
    get productId() {
      return this[productId$];
    }
    set productId(value) {
      super.productId = value;
    }
    get deviceId() {
      return this[deviceId$];
    }
    set deviceId(value) {
      super.deviceId = value;
    }
    get repeatCount() {
      return this[repeatCount$];
    }
    set repeatCount(value) {
      super.repeatCount = value;
    }
    get keyLabel() {
      return this.plainCodePoint === 0 ? "" : core.String.fromCharCode((dart.notNull(this.plainCodePoint) & 2147483647) >>> 0);
    }
    get physicalKey() {
      let t0;
      if (dart.test(keyboard_maps.kAndroidToPhysicalKey[$containsKey](this.scanCode))) {
        t0 = keyboard_maps.kAndroidToPhysicalKey[$_get](this.scanCode);
        return t0 == null ? keyboard_key.PhysicalKeyboardKey.none : t0;
      }
      if ((dart.notNull(this.eventSource) & 16777232) >>> 0 === 16777232) {
        let foundKey = keyboard_maps.kAndroidToLogicalKey[$_get](this.keyCode);
        if (dart.equals(foundKey, keyboard_key.LogicalKeyboardKey.arrowUp)) {
          return keyboard_key.PhysicalKeyboardKey.arrowUp;
        }
        if (dart.equals(foundKey, keyboard_key.LogicalKeyboardKey.arrowDown)) {
          return keyboard_key.PhysicalKeyboardKey.arrowDown;
        }
        if (dart.equals(foundKey, keyboard_key.LogicalKeyboardKey.arrowLeft)) {
          return keyboard_key.PhysicalKeyboardKey.arrowLeft;
        }
        if (dart.equals(foundKey, keyboard_key.LogicalKeyboardKey.arrowRight)) {
          return keyboard_key.PhysicalKeyboardKey.arrowRight;
        }
      }
      return keyboard_key.PhysicalKeyboardKey.none;
    }
    get logicalKey() {
      let t0;
      let numPadKey = keyboard_maps.kAndroidNumPadMap[$_get](this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      if (this.keyLabel[$isNotEmpty] && !dart.test(keyboard_key.LogicalKeyboardKey.isControlCharacter(this.keyLabel))) {
        let combinedCodePoint = (dart.notNull(this.plainCodePoint) & 2147483647) >>> 0;
        let keyId = (0 | (combinedCodePoint & 4294967295.0) >>> 0) >>> 0;
        t0 = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t0 == null ? new keyboard_key.LogicalKeyboardKey.new(keyId, {keyLabel: this.keyLabel, debugName: false ? null : "Key " + this.keyLabel[$toUpperCase]()}) : t0;
      }
      let newKey = keyboard_maps.kAndroidToLogicalKey[$_get](this.keyCode);
      if (newKey != null) {
        return newKey;
      }
      newKey == null ? newKey = new keyboard_key.LogicalKeyboardKey.new((8589934592.0 | dart.notNull(this.keyCode) | 1099511627776.0) >>> 0, {debugName: false ? null : "Unknown Android key code " + dart.str(this.keyCode)}) : null;
      return newKey;
    }
    [_isLeftRightModifierPressed$2](side, anyMask, leftMask, rightMask) {
      if (side == null) dart.nullFailed(L14, 220, 49, "side");
      if (anyMask == null) dart.nullFailed(L14, 220, 59, "anyMask");
      if (leftMask == null) dart.nullFailed(L14, 220, 72, "leftMask");
      if (rightMask == null) dart.nullFailed(L14, 220, 86, "rightMask");
      if ((dart.notNull(this.metaState) & dart.notNull(anyMask)) === 0) {
        return false;
      }
      switch (side) {
        case C0 || CT.C0:
        {
          return true;
        }
        case C1 || CT.C1:
        {
          return (dart.notNull(this.metaState) & dart.notNull(leftMask)) !== 0 && (dart.notNull(this.metaState) & dart.notNull(rightMask)) !== 0;
        }
        case C2 || CT.C2:
        {
          return (dart.notNull(this.metaState) & dart.notNull(leftMask)) !== 0;
        }
        case C3 || CT.C3:
        {
          return (dart.notNull(this.metaState) & dart.notNull(rightMask)) !== 0;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    isModifierPressed(key, opts) {
      if (key == null) dart.nullFailed(L14, 237, 38, "key");
      let side = opts && 'side' in opts ? opts.side : C0 || CT.C0;
      if (side == null) dart.nullFailed(L14, 237, 58, "side");
      if (!(side != null)) dart.assertFailed(null, L14, 238, 12, "side != null");
      switch (key) {
        case C4 || CT.C4:
        {
          return this[_isLeftRightModifierPressed$2](side, 4096, 8192, 16384);
        }
        case C5 || CT.C5:
        {
          return this[_isLeftRightModifierPressed$2](side, 1, 64, 128);
        }
        case C6 || CT.C6:
        {
          return this[_isLeftRightModifierPressed$2](side, 2, 16, 32);
        }
        case C7 || CT.C7:
        {
          return this[_isLeftRightModifierPressed$2](side, 65536, 131072, 262144);
        }
        case C8 || CT.C8:
        {
          return (dart.notNull(this.metaState) & 1048576) !== 0;
        }
        case C10 || CT.C10:
        {
          return (dart.notNull(this.metaState) & 2097152) !== 0;
        }
        case C9 || CT.C9:
        {
          return (dart.notNull(this.metaState) & 4194304) !== 0;
        }
        case C11 || CT.C11:
        {
          return (dart.notNull(this.metaState) & 8) !== 0;
        }
        case C12 || CT.C12:
        {
          return (dart.notNull(this.metaState) & 4) !== 0;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    getModifierSide(key) {
      if (key == null) dart.nullFailed(L14, 262, 45, "key");
      const findSide = (anyMask, leftMask, rightMask) => {
        if (anyMask == null) dart.nullFailed(L14, 263, 32, "anyMask");
        if (leftMask == null) dart.nullFailed(L14, 263, 45, "leftMask");
        if (rightMask == null) dart.nullFailed(L14, 263, 59, "rightMask");
        let combinedMask = (dart.notNull(leftMask) | dart.notNull(rightMask)) >>> 0;
        let combined = (dart.notNull(this.metaState) & combinedMask) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        if ((dart.notNull(this.metaState) & dart.notNull(anyMask)) !== 0) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, intAndintAndintToKeyboardSideN());
      switch (key) {
        case C4 || CT.C4:
        {
          return findSide(4096, 8192, 16384);
        }
        case C5 || CT.C5:
        {
          return findSide(1, 64, 128);
        }
        case C6 || CT.C6:
        {
          return findSide(2, 16, 32);
        }
        case C7 || CT.C7:
        {
          return findSide(65536, 131072, 262144);
        }
        case C8 || CT.C8:
        case C10 || CT.C10:
        case C9 || CT.C9:
        case C11 || CT.C11:
        case C12 || CT.C12:
        {
          return raw_keyboard.KeyboardSide.all;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "RawKeyEventDataAndroid")) + "(keyLabel: " + dart.str(this.keyLabel) + " flags: " + dart.str(this.flags) + ", codePoint: " + dart.str(this.codePoint) + ", " + "keyCode: " + dart.str(this.keyCode) + ", scanCode: " + dart.str(this.scanCode) + ", metaState: " + dart.str(this.metaState) + ", " + "modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (raw_keyboard_android.RawKeyEventDataAndroid.new = function(opts) {
    let flags = opts && 'flags' in opts ? opts.flags : 0;
    if (flags == null) dart.nullFailed(L14, 31, 10, "flags");
    let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
    if (codePoint == null) dart.nullFailed(L14, 32, 10, "codePoint");
    let plainCodePoint = opts && 'plainCodePoint' in opts ? opts.plainCodePoint : 0;
    if (plainCodePoint == null) dart.nullFailed(L14, 33, 10, "plainCodePoint");
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    if (keyCode == null) dart.nullFailed(L14, 34, 10, "keyCode");
    let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
    if (scanCode == null) dart.nullFailed(L14, 35, 10, "scanCode");
    let metaState = opts && 'metaState' in opts ? opts.metaState : 0;
    if (metaState == null) dart.nullFailed(L14, 36, 10, "metaState");
    let eventSource = opts && 'eventSource' in opts ? opts.eventSource : 0;
    if (eventSource == null) dart.nullFailed(L14, 37, 10, "eventSource");
    let vendorId = opts && 'vendorId' in opts ? opts.vendorId : 0;
    if (vendorId == null) dart.nullFailed(L14, 38, 10, "vendorId");
    let productId = opts && 'productId' in opts ? opts.productId : 0;
    if (productId == null) dart.nullFailed(L14, 39, 10, "productId");
    let deviceId = opts && 'deviceId' in opts ? opts.deviceId : 0;
    if (deviceId == null) dart.nullFailed(L14, 40, 10, "deviceId");
    let repeatCount = opts && 'repeatCount' in opts ? opts.repeatCount : 0;
    if (repeatCount == null) dart.nullFailed(L14, 41, 10, "repeatCount");
    this[flags$] = flags;
    this[codePoint$0] = codePoint;
    this[plainCodePoint$] = plainCodePoint;
    this[keyCode$3] = keyCode;
    this[scanCode$1] = scanCode;
    this[metaState$0] = metaState;
    this[eventSource$] = eventSource;
    this[vendorId$] = vendorId;
    this[productId$] = productId;
    this[deviceId$] = deviceId;
    this[repeatCount$] = repeatCount;
    if (!(flags != null)) dart.assertFailed(null, L14, 42, 15, "flags != null");
    if (!(codePoint != null)) dart.assertFailed(null, L14, 43, 15, "codePoint != null");
    if (!(keyCode != null)) dart.assertFailed(null, L14, 44, 15, "keyCode != null");
    if (!(scanCode != null)) dart.assertFailed(null, L14, 45, 15, "scanCode != null");
    if (!(metaState != null)) dart.assertFailed(null, L14, 46, 15, "metaState != null");
    raw_keyboard_android.RawKeyEventDataAndroid.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_android.RawKeyEventDataAndroid.prototype;
  dart.addTypeTests(raw_keyboard_android.RawKeyEventDataAndroid);
  dart.addTypeCaches(raw_keyboard_android.RawKeyEventDataAndroid);
  dart.setMethodSignature(raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getMethods(raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    [_isLeftRightModifierPressed$2]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(dart.nullable(raw_keyboard.KeyboardSide), [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getGetters(raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_android.RawKeyEventDataAndroid, L15);
  dart.setFieldSignature(raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getFields(raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    flags: dart.finalFieldType(core.int),
    codePoint: dart.finalFieldType(core.int),
    plainCodePoint: dart.finalFieldType(core.int),
    keyCode: dart.finalFieldType(core.int),
    scanCode: dart.finalFieldType(core.int),
    metaState: dart.finalFieldType(core.int),
    eventSource: dart.finalFieldType(core.int),
    vendorId: dart.finalFieldType(core.int),
    productId: dart.finalFieldType(core.int),
    deviceId: dart.finalFieldType(core.int),
    repeatCount: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(raw_keyboard_android.RawKeyEventDataAndroid, ['toString']);
  dart.defineLazy(raw_keyboard_android.RawKeyEventDataAndroid, {
    /*raw_keyboard_android.RawKeyEventDataAndroid._sourceJoystick*/get _sourceJoystick() {
      return 16777232;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierNone*/get modifierNone() {
      return 0;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierAlt*/get modifierAlt() {
      return 2;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftAlt*/get modifierLeftAlt() {
      return 16;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightAlt*/get modifierRightAlt() {
      return 32;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftShift*/get modifierLeftShift() {
      return 64;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightShift*/get modifierRightShift() {
      return 128;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierSym*/get modifierSym() {
      return 4;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierFunction*/get modifierFunction() {
      return 8;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierControl*/get modifierControl() {
      return 4096;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftControl*/get modifierLeftControl() {
      return 8192;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightControl*/get modifierRightControl() {
      return 16384;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierMeta*/get modifierMeta() {
      return 65536;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftMeta*/get modifierLeftMeta() {
      return 131072;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightMeta*/get modifierRightMeta() {
      return 262144;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierCapsLock*/get modifierCapsLock() {
      return 1048576;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierNumLock*/get modifierNumLock() {
      return 2097152;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierScrollLock*/get modifierScrollLock() {
      return 4194304;
    }
  }, false);
  dart.defineLazy(raw_keyboard_android, {
    /*raw_keyboard_android._kCombiningCharacterMask*/get _kCombiningCharacterMask() {
      return 2147483647;
    }
  }, false);
  var C35;
  raw_keyboard.KeyboardSide = class KeyboardSide extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (raw_keyboard.KeyboardSide.new = function(index, _name) {
    if (index == null) dart.nullFailed(L1, 28, 6, "index");
    if (_name == null) dart.nullFailed(L1, 28, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = raw_keyboard.KeyboardSide.prototype;
  dart.addTypeTests(raw_keyboard.KeyboardSide);
  dart.addTypeCaches(raw_keyboard.KeyboardSide);
  dart.setLibraryUri(raw_keyboard.KeyboardSide, L2);
  dart.setFieldSignature(raw_keyboard.KeyboardSide, () => ({
    __proto__: dart.getFields(raw_keyboard.KeyboardSide.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(raw_keyboard.KeyboardSide, ['toString']);
  raw_keyboard.KeyboardSide.any = C0 || CT.C0;
  raw_keyboard.KeyboardSide.left = C2 || CT.C2;
  raw_keyboard.KeyboardSide.right = C3 || CT.C3;
  raw_keyboard.KeyboardSide.all = C1 || CT.C1;
  raw_keyboard.KeyboardSide.values = C35 || CT.C35;
  var C36;
  raw_keyboard.ModifierKey = class ModifierKey extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (raw_keyboard.ModifierKey.new = function(index, _name) {
    if (index == null) dart.nullFailed(L1, 48, 6, "index");
    if (_name == null) dart.nullFailed(L1, 48, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = raw_keyboard.ModifierKey.prototype;
  dart.addTypeTests(raw_keyboard.ModifierKey);
  dart.addTypeCaches(raw_keyboard.ModifierKey);
  dart.setLibraryUri(raw_keyboard.ModifierKey, L2);
  dart.setFieldSignature(raw_keyboard.ModifierKey, () => ({
    __proto__: dart.getFields(raw_keyboard.ModifierKey.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(raw_keyboard.ModifierKey, ['toString']);
  raw_keyboard.ModifierKey.controlModifier = C4 || CT.C4;
  raw_keyboard.ModifierKey.shiftModifier = C5 || CT.C5;
  raw_keyboard.ModifierKey.altModifier = C6 || CT.C6;
  raw_keyboard.ModifierKey.metaModifier = C7 || CT.C7;
  raw_keyboard.ModifierKey.capsLockModifier = C8 || CT.C8;
  raw_keyboard.ModifierKey.numLockModifier = C10 || CT.C10;
  raw_keyboard.ModifierKey.scrollLockModifier = C9 || CT.C9;
  raw_keyboard.ModifierKey.functionModifier = C11 || CT.C11;
  raw_keyboard.ModifierKey.symbolModifier = C12 || CT.C12;
  raw_keyboard.ModifierKey.values = C36 || CT.C36;
  var character$ = dart.privateName(raw_keyboard, "RawKeyEvent.character");
  var data$ = dart.privateName(raw_keyboard, "RawKeyEvent.data");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  raw_keyboard.RawKeyEvent = class RawKeyEvent extends Object_Diagnosticable$36 {
    get character() {
      return this[character$];
    }
    set character(value) {
      super.character = value;
    }
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    static fromMessage(message) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12, t0$13, t0$14, t0$15, t0$16, t0$17, t0$18, t0$19, t0$20, t0$21, t0$22, t0$23, t0$24, t0$25, t0$26, t0$27, t0$28, t0$29, t0$30, t0$31;
      if (message == null) dart.nullFailed(L1, 267, 56, "message");
      let data = null;
      let character = null;
      let keymap = core.String.as(message[$_get]("keymap"));
      switch (keymap) {
        case "android":
        {
          data = new raw_keyboard_android.RawKeyEventDataAndroid.new({flags: (t0 = intN().as(message[$_get]("flags")), t0 == null ? 0 : t0), codePoint: (t0$ = intN().as(message[$_get]("codePoint")), t0$ == null ? 0 : t0$), keyCode: (t0$0 = intN().as(message[$_get]("keyCode")), t0$0 == null ? 0 : t0$0), plainCodePoint: (t0$1 = intN().as(message[$_get]("plainCodePoint")), t0$1 == null ? 0 : t0$1), scanCode: (t0$2 = intN().as(message[$_get]("scanCode")), t0$2 == null ? 0 : t0$2), metaState: (t0$3 = intN().as(message[$_get]("metaState")), t0$3 == null ? 0 : t0$3), eventSource: (t0$4 = intN().as(message[$_get]("source")), t0$4 == null ? 0 : t0$4), vendorId: (t0$5 = intN().as(message[$_get]("vendorId")), t0$5 == null ? 0 : t0$5), productId: (t0$6 = intN().as(message[$_get]("productId")), t0$6 == null ? 0 : t0$6), deviceId: (t0$7 = intN().as(message[$_get]("deviceId")), t0$7 == null ? 0 : t0$7), repeatCount: (t0$8 = intN().as(message[$_get]("repeatCount")), t0$8 == null ? 0 : t0$8)});
          if (dart.test(message[$containsKey]("character"))) {
            character = StringN().as(message[$_get]("character"));
          }
          break;
        }
        case "fuchsia":
        {
          let codePoint = (t0$9 = intN().as(message[$_get]("codePoint")), t0$9 == null ? 0 : t0$9);
          data = new raw_keyboard_fuchsia.RawKeyEventDataFuchsia.new({hidUsage: (t0$10 = intN().as(message[$_get]("hidUsage")), t0$10 == null ? 0 : t0$10), codePoint: codePoint, modifiers: (t0$11 = intN().as(message[$_get]("modifiers")), t0$11 == null ? 0 : t0$11)});
          if (codePoint !== 0) {
            character = core.String.fromCharCode(codePoint);
          }
          break;
        }
        case "macos":
        {
          data = new raw_keyboard_macos.RawKeyEventDataMacOs.new({characters: (t0$12 = StringN().as(message[$_get]("characters")), t0$12 == null ? "" : t0$12), charactersIgnoringModifiers: (t0$13 = StringN().as(message[$_get]("charactersIgnoringModifiers")), t0$13 == null ? "" : t0$13), keyCode: (t0$14 = intN().as(message[$_get]("keyCode")), t0$14 == null ? 0 : t0$14), modifiers: (t0$15 = intN().as(message[$_get]("modifiers")), t0$15 == null ? 0 : t0$15)});
          character = StringN().as(message[$_get]("characters"));
          break;
        }
        case "ios":
        {
          data = new raw_keyboard_ios.RawKeyEventDataIos.new({characters: (t0$16 = StringN().as(message[$_get]("characters")), t0$16 == null ? "" : t0$16), charactersIgnoringModifiers: (t0$17 = StringN().as(message[$_get]("charactersIgnoringModifiers")), t0$17 == null ? "" : t0$17), keyCode: (t0$18 = intN().as(message[$_get]("keyCode")), t0$18 == null ? 0 : t0$18), modifiers: (t0$19 = intN().as(message[$_get]("modifiers")), t0$19 == null ? 0 : t0$19)});
          break;
        }
        case "linux":
        {
          let unicodeScalarValues = (t0$20 = intN().as(message[$_get]("unicodeScalarValues")), t0$20 == null ? 0 : t0$20);
          data = new raw_keyboard_linux.RawKeyEventDataLinux.new({keyHelper: raw_keyboard_linux.KeyHelper.new((t0$21 = StringN().as(message[$_get]("toolkit")), t0$21 == null ? "" : t0$21)), unicodeScalarValues: unicodeScalarValues, keyCode: (t0$22 = intN().as(message[$_get]("keyCode")), t0$22 == null ? 0 : t0$22), scanCode: (t0$23 = intN().as(message[$_get]("scanCode")), t0$23 == null ? 0 : t0$23), modifiers: (t0$24 = intN().as(message[$_get]("modifiers")), t0$24 == null ? 0 : t0$24), isDown: dart.equals(message[$_get]("type"), "keydown")});
          if (unicodeScalarValues !== 0) {
            character = core.String.fromCharCode(unicodeScalarValues);
          }
          break;
        }
        case "web":
        {
          data = new raw_keyboard_web.RawKeyEventDataWeb.new({code: (t0$25 = StringN().as(message[$_get]("code")), t0$25 == null ? "" : t0$25), key: (t0$26 = StringN().as(message[$_get]("key")), t0$26 == null ? "" : t0$26), metaState: (t0$27 = intN().as(message[$_get]("metaState")), t0$27 == null ? 0 : t0$27)});
          character = StringN().as(message[$_get]("key"));
          break;
        }
        case "windows":
        {
          let characterCodePoint = (t0$28 = intN().as(message[$_get]("characterCodePoint")), t0$28 == null ? 0 : t0$28);
          data = new raw_keyboard_windows.RawKeyEventDataWindows.new({keyCode: (t0$29 = intN().as(message[$_get]("keyCode")), t0$29 == null ? 0 : t0$29), scanCode: (t0$30 = intN().as(message[$_get]("scanCode")), t0$30 == null ? 0 : t0$30), characterCodePoint: characterCodePoint, modifiers: (t0$31 = intN().as(message[$_get]("modifiers")), t0$31 == null ? 0 : t0$31)});
          if (characterCodePoint !== 0) {
            character = core.String.fromCharCode(characterCodePoint);
          }
          break;
        }
        default:
        {
          dart.throw(assertions.FlutterError.new("Unknown keymap for key events: " + dart.str(keymap)));
        }
      }
      let type = core.String.as(message[$_get]("type"));
      switch (type) {
        case "keydown":
        {
          return new raw_keyboard.RawKeyDownEvent.new({data: data, character: character});
        }
        case "keyup":
        {
          return new raw_keyboard.RawKeyUpEvent.new({data: data});
        }
        default:
        {
          dart.throw(assertions.FlutterError.new("Unknown key event type: " + dart.str(type)));
        }
      }
    }
    isKeyPressed(key) {
      if (key == null) dart.nullFailed(L1, 370, 40, "key");
      return raw_keyboard.RawKeyboard.instance.keysPressed.contains(key);
    }
    get isControlPressed() {
      return dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.controlLeft)) || dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.controlRight));
    }
    get isShiftPressed() {
      return dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.shiftLeft)) || dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.shiftRight));
    }
    get isAltPressed() {
      return dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.altLeft)) || dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.altRight));
    }
    get isMetaPressed() {
      return dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.metaLeft)) || dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.metaRight));
    }
    get physicalKey() {
      return this.data.physicalKey;
    }
    get logicalKey() {
      return this.data.logicalKey;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L1, 478, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfLogicalKeyboardKey()).new("logicalKey", this.logicalKey));
      properties.add(new (DiagnosticsPropertyOfPhysicalKeyboardKey()).new("physicalKey", this.physicalKey));
    }
  };
  (raw_keyboard.RawKeyEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    if (data == null) dart.nullFailed(L1, 261, 19, "data");
    let character = opts && 'character' in opts ? opts.character : null;
    this[data$] = data;
    this[character$] = character;
    ;
  }).prototype = raw_keyboard.RawKeyEvent.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyEvent);
  dart.addTypeCaches(raw_keyboard.RawKeyEvent);
  dart.setMethodSignature(raw_keyboard.RawKeyEvent, () => ({
    __proto__: dart.getMethods(raw_keyboard.RawKeyEvent.__proto__),
    isKeyPressed: dart.fnType(core.bool, [keyboard_key.LogicalKeyboardKey])
  }));
  dart.setGetterSignature(raw_keyboard.RawKeyEvent, () => ({
    __proto__: dart.getGetters(raw_keyboard.RawKeyEvent.__proto__),
    isControlPressed: core.bool,
    isShiftPressed: core.bool,
    isAltPressed: core.bool,
    isMetaPressed: core.bool,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard.RawKeyEvent, L2);
  dart.setFieldSignature(raw_keyboard.RawKeyEvent, () => ({
    __proto__: dart.getFields(raw_keyboard.RawKeyEvent.__proto__),
    character: dart.finalFieldType(dart.nullable(core.String)),
    data: dart.finalFieldType(raw_keyboard.RawKeyEventData)
  }));
  raw_keyboard.RawKeyDownEvent = class RawKeyDownEvent extends raw_keyboard.RawKeyEvent {};
  (raw_keyboard.RawKeyDownEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    if (data == null) dart.nullFailed(L1, 493, 30, "data");
    let character = opts && 'character' in opts ? opts.character : null;
    raw_keyboard.RawKeyDownEvent.__proto__.new.call(this, {data: data, character: character});
    ;
  }).prototype = raw_keyboard.RawKeyDownEvent.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyDownEvent);
  dart.addTypeCaches(raw_keyboard.RawKeyDownEvent);
  dart.setLibraryUri(raw_keyboard.RawKeyDownEvent, L2);
  raw_keyboard.RawKeyUpEvent = class RawKeyUpEvent extends raw_keyboard.RawKeyEvent {};
  (raw_keyboard.RawKeyUpEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    if (data == null) dart.nullFailed(L1, 506, 30, "data");
    let character = opts && 'character' in opts ? opts.character : null;
    raw_keyboard.RawKeyUpEvent.__proto__.new.call(this, {data: data, character: character});
    ;
  }).prototype = raw_keyboard.RawKeyUpEvent.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyUpEvent);
  dart.addTypeCaches(raw_keyboard.RawKeyUpEvent);
  dart.setLibraryUri(raw_keyboard.RawKeyUpEvent, L2);
  var _listeners = dart.privateName(raw_keyboard, "_listeners");
  var _keysPressed = dart.privateName(raw_keyboard, "_keysPressed");
  var _handleKeyEvent = dart.privateName(raw_keyboard, "_handleKeyEvent");
  var _synchronizeModifiers = dart.privateName(raw_keyboard, "_synchronizeModifiers");
  var keyEventHandler = dart.privateName(raw_keyboard, "RawKeyboard.keyEventHandler");
  var _ModifierSidePair_side = dart.privateName(raw_keyboard, "_ModifierSidePair.side");
  var _ModifierSidePair_modifier = dart.privateName(raw_keyboard, "_ModifierSidePair.modifier");
  var C37;
  var C38;
  var C39;
  var C40;
  var C41;
  var C42;
  var C43;
  var C44;
  var C45;
  var C46;
  var C47;
  var C48;
  var C49;
  var C50;
  var C51;
  var C52;
  var C53;
  var C54;
  var C55;
  var C56;
  raw_keyboard.RawKeyboard = class RawKeyboard extends core.Object {
    get keyEventHandler() {
      return this[keyEventHandler];
    }
    set keyEventHandler(value) {
      this[keyEventHandler] = value;
    }
    addListener(listener) {
      if (listener == null) dart.nullFailed(L1, 560, 46, "listener");
      this[_listeners][$add](listener);
    }
    removeListener(listener) {
      if (listener == null) dart.nullFailed(L1, 568, 49, "listener");
      this[_listeners][$remove](listener);
    }
    [_handleKeyEvent](message) {
      return async.async(dart.dynamic, (function* _handleKeyEvent() {
        let event = raw_keyboard.RawKeyEvent.fromMessage(MapOfString$dynamic().as(message));
        if (raw_keyboard_macos.RawKeyEventDataMacOs.is(event.data) && dart.equals(event.logicalKey, keyboard_key.LogicalKeyboardKey.fn)) {
          return;
        }
        if (raw_keyboard.RawKeyDownEvent.is(event)) {
          this[_keysPressed][$_set](event.physicalKey, event.logicalKey);
        }
        if (raw_keyboard.RawKeyUpEvent.is(event)) {
          this[_keysPressed][$remove](event.physicalKey);
        }
        this[_synchronizeModifiers](event);
        if (!(!raw_keyboard.RawKeyDownEvent.is(event) || dart.test(this[_keysPressed][$isNotEmpty]))) dart.assertFailed("Attempted to send a key down event when no keys are in keysPressed. " + "This state can occur if the key event being sent doesn't properly " + "set its modifier flags. This was the event: " + dart.str(event) + " and its data: " + dart.str(event.data), L1, 626, 12, "event is! RawKeyDownEvent || _keysPressed.isNotEmpty");
        for (let listener of ListOfRawKeyEventTovoid().from(this[_listeners])) {
          if (dart.test(this[_listeners][$contains](listener))) {
            listener(event);
          }
        }
        let handled = this.keyEventHandler != null && dart.test(dart.nullCheck(this.keyEventHandler)(event));
        if (!(handled !== null)) dart.assertFailed("keyEventHandler returned null, which is not allowed", L1, 642, 12, "handled != null");
        return new (IdentityMapOfString$dynamic()).from(["handled", handled]);
      }).bind(this));
    }
    [_synchronizeModifiers](event) {
      if (event == null) dart.nullFailed(L1, 695, 42, "event");
      let modifiersPressed = event.data.modifiersPressed;
      let modifierKeys = new (LinkedMapOfPhysicalKeyboardKey$LogicalKeyboardKey()).new();
      for (let key of modifiersPressed[$keys]) {
        let mappedKeys = raw_keyboard.RawKeyboard._modifierKeyMap[$_get](new raw_keyboard._ModifierSidePair.new(key, modifiersPressed[$_get](key)));
        if (!dart.test(dart.fn(() => {
          if (mappedKeys == null) {
            print.debugPrint("Platform key support for " + dart.str(io.Platform.operatingSystem) + " is " + "producing unsupported modifier combinations for " + "modifier " + dart.str(key) + " on side " + dart.str(modifiersPressed[$_get](key)) + ".");
            if (raw_keyboard_android.RawKeyEventDataAndroid.is(event.data)) {
              print.debugPrint("Android raw key metaState: " + dart.str(raw_keyboard_android.RawKeyEventDataAndroid.as(event.data).metaState));
            }
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L1, 706, 14, "(){\n        if (mappedKeys == null) {\n          debugPrint('Platform key support for ${Platform.operatingSystem} is '\n              'producing unsupported modifier combinations for '\n              'modifier $key on side ${modifiersPressed[key]}.');\n          if (event.data is RawKeyEventDataAndroid) {\n            debugPrint('Android raw key metaState: ${(event.data as RawKeyEventDataAndroid).metaState}');\n          }\n        }\n        return true;\n      }()");
        if (mappedKeys == null) {
          continue;
        }
        for (let physicalModifier of mappedKeys) {
          modifierKeys[$_set](physicalModifier, dart.nullCheck(raw_keyboard.RawKeyboard._allModifiers[$_get](physicalModifier)));
        }
      }
      raw_keyboard.RawKeyboard._allModifiersExceptFn[$keys][$forEach](dart.bind(this[_keysPressed], $remove));
      if (!raw_keyboard_fuchsia.RawKeyEventDataFuchsia.is(event.data) && !raw_keyboard_macos.RawKeyEventDataMacOs.is(event.data)) {
        this[_keysPressed][$remove](keyboard_key.PhysicalKeyboardKey.fn);
      }
      this[_keysPressed][$addAll](modifierKeys);
    }
    get keysPressed() {
      return this[_keysPressed][$values][$toSet]();
    }
    get physicalKeysPressed() {
      return this[_keysPressed][$keys][$toSet]();
    }
    clearKeysPressed() {
      return this[_keysPressed][$clear]();
    }
  };
  (raw_keyboard.RawKeyboard.__ = function() {
    this[_listeners] = JSArrayOfRawKeyEventTovoid().of([]);
    this[keyEventHandler] = null;
    this[_keysPressed] = new (LinkedMapOfPhysicalKeyboardKey$LogicalKeyboardKey()).new();
    system_channels.SystemChannels.keyEvent.setMessageHandler(dart.bind(this, _handleKeyEvent));
  }).prototype = raw_keyboard.RawKeyboard.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyboard);
  dart.addTypeCaches(raw_keyboard.RawKeyboard);
  dart.setMethodSignature(raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getMethods(raw_keyboard.RawKeyboard.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [raw_keyboard.RawKeyEvent])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [raw_keyboard.RawKeyEvent])]),
    [_handleKeyEvent]: dart.fnType(async.Future, [dart.dynamic]),
    [_synchronizeModifiers]: dart.fnType(dart.void, [raw_keyboard.RawKeyEvent]),
    clearKeysPressed: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getGetters(raw_keyboard.RawKeyboard.__proto__),
    keysPressed: core.Set$(keyboard_key.LogicalKeyboardKey),
    physicalKeysPressed: core.Set$(keyboard_key.PhysicalKeyboardKey)
  }));
  dart.setLibraryUri(raw_keyboard.RawKeyboard, L2);
  dart.setFieldSignature(raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getFields(raw_keyboard.RawKeyboard.__proto__),
    [_listeners]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [raw_keyboard.RawKeyEvent]))),
    keyEventHandler: dart.fieldType(dart.nullable(dart.fnType(core.bool, [raw_keyboard.RawKeyEvent]))),
    [_keysPressed]: dart.finalFieldType(core.Map$(keyboard_key.PhysicalKeyboardKey, keyboard_key.LogicalKeyboardKey))
  }));
  dart.defineLazy(raw_keyboard.RawKeyboard, {
    /*raw_keyboard.RawKeyboard.instance*/get instance() {
      return new raw_keyboard.RawKeyboard.__();
    },
    /*raw_keyboard.RawKeyboard._modifierKeyMap*/get _modifierKeyMap() {
      return new (LinkedMapOf_ModifierSidePair$SetOfPhysicalKeyboardKey()).from([C37 || CT.C37, LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.altLeft]), C38 || CT.C38, LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.altRight]), C39 || CT.C39, LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.altLeft, keyboard_key.PhysicalKeyboardKey.altRight]), C40 || CT.C40, LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.altLeft]), C41 || CT.C41, LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.shiftLeft]), C42 || CT.C42, LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.shiftRight]), C43 || CT.C43, LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.shiftLeft, keyboard_key.PhysicalKeyboardKey.shiftRight]), C44 || CT.C44, LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.shiftLeft]), C45 || CT.C45, LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.controlLeft]), C46 || CT.C46, LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.controlRight]), C47 || CT.C47, LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.controlLeft, keyboard_key.PhysicalKeyboardKey.controlRight]), C48 || CT.C48, LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.controlLeft]), C49 || CT.C49, LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.metaLeft]), C50 || CT.C50, LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.metaRight]), C51 || CT.C51, LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.metaLeft, keyboard_key.PhysicalKeyboardKey.metaRight]), C52 || CT.C52, LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.metaLeft]), C53 || CT.C53, LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.capsLock]), C54 || CT.C54, LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.numLock]), C55 || CT.C55, LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.scrollLock]), C56 || CT.C56, LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.fn])]);
    },
    /*raw_keyboard.RawKeyboard._allModifiersExceptFn*/get _allModifiersExceptFn() {
      return new (LinkedMapOfPhysicalKeyboardKey$LogicalKeyboardKey()).from([keyboard_key.PhysicalKeyboardKey.altLeft, keyboard_key.LogicalKeyboardKey.altLeft, keyboard_key.PhysicalKeyboardKey.altRight, keyboard_key.LogicalKeyboardKey.altRight, keyboard_key.PhysicalKeyboardKey.shiftLeft, keyboard_key.LogicalKeyboardKey.shiftLeft, keyboard_key.PhysicalKeyboardKey.shiftRight, keyboard_key.LogicalKeyboardKey.shiftRight, keyboard_key.PhysicalKeyboardKey.controlLeft, keyboard_key.LogicalKeyboardKey.controlLeft, keyboard_key.PhysicalKeyboardKey.controlRight, keyboard_key.LogicalKeyboardKey.controlRight, keyboard_key.PhysicalKeyboardKey.metaLeft, keyboard_key.LogicalKeyboardKey.metaLeft, keyboard_key.PhysicalKeyboardKey.metaRight, keyboard_key.LogicalKeyboardKey.metaRight, keyboard_key.PhysicalKeyboardKey.capsLock, keyboard_key.LogicalKeyboardKey.capsLock, keyboard_key.PhysicalKeyboardKey.numLock, keyboard_key.LogicalKeyboardKey.numLock, keyboard_key.PhysicalKeyboardKey.scrollLock, keyboard_key.LogicalKeyboardKey.scrollLock]);
    },
    /*raw_keyboard.RawKeyboard._allModifiers*/get _allModifiers() {
      return (() => {
        let t0 = new (LinkedMapOfPhysicalKeyboardKey$LogicalKeyboardKey()).new();
        t0[$_set](keyboard_key.PhysicalKeyboardKey.fn, keyboard_key.LogicalKeyboardKey.fn);
        for (let t1 of raw_keyboard.RawKeyboard._allModifiersExceptFn[$entries])
          t0[$_set](t1.key, t1.value);
        return t0;
      })();
    }
  }, false);
  raw_keyboard._ModifierSidePair = class _ModifierSidePair extends core.Object {
    get modifier() {
      return this[modifier$];
    }
    set modifier(value) {
      super.modifier = value;
    }
    get side() {
      return this[side$];
    }
    set side(value) {
      super.side = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return raw_keyboard._ModifierSidePair.is(other) && dart.equals(other.modifier, this.modifier) && dart.equals(other.side, this.side);
    }
    get hashCode() {
      return ui.hashValues(this.modifier, this.side);
    }
  };
  (raw_keyboard._ModifierSidePair.new = function(modifier, side) {
    if (modifier == null) dart.nullFailed(L1, 749, 32, "modifier");
    this[modifier$] = modifier;
    this[side$] = side;
    ;
  }).prototype = raw_keyboard._ModifierSidePair.prototype;
  dart.addTypeTests(raw_keyboard._ModifierSidePair);
  dart.addTypeCaches(raw_keyboard._ModifierSidePair);
  const modifier$ = _ModifierSidePair_modifier;
  const side$ = _ModifierSidePair_side;
  dart.setLibraryUri(raw_keyboard._ModifierSidePair, L2);
  dart.setFieldSignature(raw_keyboard._ModifierSidePair, () => ({
    __proto__: dart.getFields(raw_keyboard._ModifierSidePair.__proto__),
    modifier: dart.finalFieldType(raw_keyboard.ModifierKey),
    side: dart.finalFieldType(dart.nullable(raw_keyboard.KeyboardSide))
  }));
  dart.defineExtensionMethods(raw_keyboard._ModifierSidePair, ['_equals']);
  dart.defineExtensionAccessors(raw_keyboard._ModifierSidePair, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/services/raw_keyboard_windows.dart", {
    "package:flutter/src/services/raw_keyboard_windows.dart": raw_keyboard_windows,
    "package:flutter/src/services/raw_keyboard_web.dart": raw_keyboard_web,
    "package:flutter/src/services/raw_keyboard_macos.dart": raw_keyboard_macos,
    "package:flutter/src/services/raw_keyboard_linux.dart": raw_keyboard_linux,
    "package:flutter/src/services/raw_keyboard_ios.dart": raw_keyboard_ios,
    "package:flutter/src/services/raw_keyboard_fuchsia.dart": raw_keyboard_fuchsia,
    "package:flutter/src/services/raw_keyboard_android.dart": raw_keyboard_android,
    "package:flutter/src/services/raw_keyboard.dart": raw_keyboard
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["raw_keyboard.dart","raw_keyboard_windows.dart","raw_keyboard_web.dart","raw_keyboard_macos.dart","raw_keyboard_linux.dart","raw_keyboard_ios.dart","raw_keyboard_fuchsia.dart","raw_keyboard_android.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/services/raw_keyboard_windows.dart.lib.js"}');
  // Exports:
  return {
    src__services__raw_keyboard_windows: raw_keyboard_windows,
    src__services__raw_keyboard_web: raw_keyboard_web,
    src__services__raw_keyboard_macos: raw_keyboard_macos,
    src__services__raw_keyboard_linux: raw_keyboard_linux,
    src__services__raw_keyboard_ios: raw_keyboard_ios,
    src__services__raw_keyboard_fuchsia: raw_keyboard_fuchsia,
    src__services__raw_keyboard_android: raw_keyboard_android,
    src__services__raw_keyboard: raw_keyboard
  };
}));

//# sourceMappingURL=raw_keyboard_windows.dart.lib.js.map
