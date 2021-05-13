define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__services__keyboard_key_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var keyboard_key = Object.create(dart.library);
  var $hashCode = dartx.hashCode;
  var $runtimeType = dartx.runtimeType;
  var $_get = dartx._get;
  var $codeUnitAt = dartx.codeUnitAt;
  var $toRadixString = dartx.toRadixString;
  var $padLeft = dartx.padLeft;
  dart._checkModuleNullSafetyMode(false);
  var LinkedHashSetOfLogicalKeyboardKey = () => (LinkedHashSetOfLogicalKeyboardKey = dart.constFn(collection.LinkedHashSet$(keyboard_key.LogicalKeyboardKey)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var LogicalKeyboardKeyL = () => (LogicalKeyboardKeyL = dart.constFn(dart.legacy(keyboard_key.LogicalKeyboardKey)))();
  var LinkedMapOfLogicalKeyboardKey$LogicalKeyboardKey = () => (LinkedMapOfLogicalKeyboardKey$LogicalKeyboardKey = dart.constFn(_js_helper.LinkedMap$(keyboard_key.LogicalKeyboardKey, keyboard_key.LogicalKeyboardKey)))();
  var PhysicalKeyboardKeyL = () => (PhysicalKeyboardKeyL = dart.constFn(dart.legacy(keyboard_key.PhysicalKeyboardKey)))();
  const CT = Object.create(null);
  var L0 = "package:flutter/src/services/keyboard_key.dart";
  var L1 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/keyboard_key.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "None",
        [keyId$]: 4294967296.0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Hyper",
        [keyId$]: 4294967312.0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Super Key",
        [keyId$]: 4294967313.0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Fn Lock",
        [keyId$]: 4294967315.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Suspend",
        [keyId$]: 4294967316.0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Resume",
        [keyId$]: 4294967317.0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Turbo",
        [keyId$]: 4294967318.0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Privacy Screen Toggle",
        [keyId$]: 4294967319.0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Sleep",
        [keyId$]: 4295032962.0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Wake Up",
        [keyId$]: 4295032963.0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Display Toggle Int Ext",
        [keyId$]: 4295033013.0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Usb Reserved",
        [keyId$]: 4295426048.0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Usb Error Roll Over",
        [keyId$]: 4295426049.0
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Usb Post Fail",
        [keyId$]: 4295426050.0
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Usb Error Undefined",
        [keyId$]: 4295426051.0
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "a",
        [debugName$]: "Key A",
        [keyId$]: 97
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "b",
        [debugName$]: "Key B",
        [keyId$]: 98
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "c",
        [debugName$]: "Key C",
        [keyId$]: 99
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "d",
        [debugName$]: "Key D",
        [keyId$]: 100
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "e",
        [debugName$]: "Key E",
        [keyId$]: 101
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "f",
        [debugName$]: "Key F",
        [keyId$]: 102
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "g",
        [debugName$]: "Key G",
        [keyId$]: 103
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "h",
        [debugName$]: "Key H",
        [keyId$]: 104
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "i",
        [debugName$]: "Key I",
        [keyId$]: 105
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "j",
        [debugName$]: "Key J",
        [keyId$]: 106
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "k",
        [debugName$]: "Key K",
        [keyId$]: 107
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "l",
        [debugName$]: "Key L",
        [keyId$]: 108
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "m",
        [debugName$]: "Key M",
        [keyId$]: 109
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "n",
        [debugName$]: "Key N",
        [keyId$]: 110
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "o",
        [debugName$]: "Key O",
        [keyId$]: 111
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "p",
        [debugName$]: "Key P",
        [keyId$]: 112
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "q",
        [debugName$]: "Key Q",
        [keyId$]: 113
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "r",
        [debugName$]: "Key R",
        [keyId$]: 114
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "s",
        [debugName$]: "Key S",
        [keyId$]: 115
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "t",
        [debugName$]: "Key T",
        [keyId$]: 116
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "u",
        [debugName$]: "Key U",
        [keyId$]: 117
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "v",
        [debugName$]: "Key V",
        [keyId$]: 118
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "w",
        [debugName$]: "Key W",
        [keyId$]: 119
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "x",
        [debugName$]: "Key X",
        [keyId$]: 120
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "y",
        [debugName$]: "Key Y",
        [keyId$]: 121
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "z",
        [debugName$]: "Key Z",
        [keyId$]: 122
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "1",
        [debugName$]: "Digit 1",
        [keyId$]: 49
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "2",
        [debugName$]: "Digit 2",
        [keyId$]: 50
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "3",
        [debugName$]: "Digit 3",
        [keyId$]: 51
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "4",
        [debugName$]: "Digit 4",
        [keyId$]: 52
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "5",
        [debugName$]: "Digit 5",
        [keyId$]: 53
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "6",
        [debugName$]: "Digit 6",
        [keyId$]: 54
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "7",
        [debugName$]: "Digit 7",
        [keyId$]: 55
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "8",
        [debugName$]: "Digit 8",
        [keyId$]: 56
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "9",
        [debugName$]: "Digit 9",
        [keyId$]: 57
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "0",
        [debugName$]: "Digit 0",
        [keyId$]: 48
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Enter",
        [keyId$]: 4295426088.0
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Escape",
        [keyId$]: 4295426089.0
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Backspace",
        [keyId$]: 4295426090.0
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Tab",
        [keyId$]: 4295426091.0
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: " ",
        [debugName$]: "Space",
        [keyId$]: 32
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "-",
        [debugName$]: "Minus",
        [keyId$]: 45
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "=",
        [debugName$]: "Equal",
        [keyId$]: 61
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "[",
        [debugName$]: "Bracket Left",
        [keyId$]: 91
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "]",
        [debugName$]: "Bracket Right",
        [keyId$]: 93
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "\\",
        [debugName$]: "Backslash",
        [keyId$]: 92
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: ";",
        [debugName$]: "Semicolon",
        [keyId$]: 59
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "'",
        [debugName$]: "Quote",
        [keyId$]: 39
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "`",
        [debugName$]: "Backquote",
        [keyId$]: 96
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: ",",
        [debugName$]: "Comma",
        [keyId$]: 44
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: ".",
        [debugName$]: "Period",
        [keyId$]: 46
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "/",
        [debugName$]: "Slash",
        [keyId$]: 47
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Caps Lock",
        [keyId$]: 4295426105.0
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F1",
        [keyId$]: 4295426106.0
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F2",
        [keyId$]: 4295426107.0
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F3",
        [keyId$]: 4295426108.0
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F4",
        [keyId$]: 4295426109.0
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F5",
        [keyId$]: 4295426110.0
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F6",
        [keyId$]: 4295426111.0
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F7",
        [keyId$]: 4295426112.0
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F8",
        [keyId$]: 4295426113.0
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F9",
        [keyId$]: 4295426114.0
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F10",
        [keyId$]: 4295426115.0
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F11",
        [keyId$]: 4295426116.0
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F12",
        [keyId$]: 4295426117.0
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Print Screen",
        [keyId$]: 4295426118.0
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Scroll Lock",
        [keyId$]: 4295426119.0
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Pause",
        [keyId$]: 4295426120.0
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Insert",
        [keyId$]: 4295426121.0
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Home",
        [keyId$]: 4295426122.0
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Page Up",
        [keyId$]: 4295426123.0
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Delete",
        [keyId$]: 4295426124.0
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "End",
        [keyId$]: 4295426125.0
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Page Down",
        [keyId$]: 4295426126.0
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Arrow Right",
        [keyId$]: 4295426127.0
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Arrow Left",
        [keyId$]: 4295426128.0
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Arrow Down",
        [keyId$]: 4295426129.0
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Arrow Up",
        [keyId$]: 4295426130.0
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Num Lock",
        [keyId$]: 4295426131.0
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "/",
        [debugName$]: "Numpad Divide",
        [keyId$]: 4295426132.0
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "*",
        [debugName$]: "Numpad Multiply",
        [keyId$]: 4295426133.0
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "-",
        [debugName$]: "Numpad Subtract",
        [keyId$]: 4295426134.0
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "+",
        [debugName$]: "Numpad Add",
        [keyId$]: 4295426135.0
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Numpad Enter",
        [keyId$]: 4295426136.0
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "1",
        [debugName$]: "Numpad 1",
        [keyId$]: 4295426137.0
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "2",
        [debugName$]: "Numpad 2",
        [keyId$]: 4295426138.0
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "3",
        [debugName$]: "Numpad 3",
        [keyId$]: 4295426139.0
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "4",
        [debugName$]: "Numpad 4",
        [keyId$]: 4295426140.0
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "5",
        [debugName$]: "Numpad 5",
        [keyId$]: 4295426141.0
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "6",
        [debugName$]: "Numpad 6",
        [keyId$]: 4295426142.0
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "7",
        [debugName$]: "Numpad 7",
        [keyId$]: 4295426143.0
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "8",
        [debugName$]: "Numpad 8",
        [keyId$]: 4295426144.0
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "9",
        [debugName$]: "Numpad 9",
        [keyId$]: 4295426145.0
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "0",
        [debugName$]: "Numpad 0",
        [keyId$]: 4295426146.0
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: ".",
        [debugName$]: "Numpad Decimal",
        [keyId$]: 4295426147.0
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Intl Backslash",
        [keyId$]: 4295426148.0
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Context Menu",
        [keyId$]: 4295426149.0
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Power",
        [keyId$]: 4295426150.0
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "=",
        [debugName$]: "Numpad Equal",
        [keyId$]: 4295426151.0
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F13",
        [keyId$]: 4295426152.0
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F14",
        [keyId$]: 4295426153.0
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F15",
        [keyId$]: 4295426154.0
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F16",
        [keyId$]: 4295426155.0
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F17",
        [keyId$]: 4295426156.0
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F18",
        [keyId$]: 4295426157.0
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F19",
        [keyId$]: 4295426158.0
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F20",
        [keyId$]: 4295426159.0
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F21",
        [keyId$]: 4295426160.0
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F22",
        [keyId$]: 4295426161.0
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F23",
        [keyId$]: 4295426162.0
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "F24",
        [keyId$]: 4295426163.0
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Open",
        [keyId$]: 4295426164.0
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Help",
        [keyId$]: 4295426165.0
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Select",
        [keyId$]: 4295426167.0
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Again",
        [keyId$]: 4295426169.0
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Undo",
        [keyId$]: 4295426170.0
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Cut",
        [keyId$]: 4295426171.0
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Copy",
        [keyId$]: 4295426172.0
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Paste",
        [keyId$]: 4295426173.0
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Find",
        [keyId$]: 4295426174.0
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Audio Volume Mute",
        [keyId$]: 4295426175.0
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Audio Volume Up",
        [keyId$]: 4295426176.0
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Audio Volume Down",
        [keyId$]: 4295426177.0
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: ",",
        [debugName$]: "Numpad Comma",
        [keyId$]: 4295426181.0
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Intl Ro",
        [keyId$]: 4295426183.0
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Kana Mode",
        [keyId$]: 4295426184.0
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Intl Yen",
        [keyId$]: 4295426185.0
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Convert",
        [keyId$]: 4295426186.0
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Non Convert",
        [keyId$]: 4295426187.0
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Lang 1",
        [keyId$]: 4295426192.0
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Lang 2",
        [keyId$]: 4295426193.0
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Lang 3",
        [keyId$]: 4295426194.0
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Lang 4",
        [keyId$]: 4295426195.0
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Lang 5",
        [keyId$]: 4295426196.0
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Abort",
        [keyId$]: 4295426203.0
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Props",
        [keyId$]: 4295426211.0
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "(",
        [debugName$]: "Numpad Paren Left",
        [keyId$]: 4295426230.0
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: ")",
        [debugName$]: "Numpad Paren Right",
        [keyId$]: 4295426231.0
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Numpad Backspace",
        [keyId$]: 4295426235.0
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Numpad Memory Store",
        [keyId$]: 4295426256.0
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Numpad Memory Recall",
        [keyId$]: 4295426257.0
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Numpad Memory Clear",
        [keyId$]: 4295426258.0
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Numpad Memory Add",
        [keyId$]: 4295426259.0
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Numpad Memory Subtract",
        [keyId$]: 4295426260.0
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Numpad Sign Change",
        [keyId$]: 4295426263.0
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Numpad Clear",
        [keyId$]: 4295426264.0
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Numpad Clear Entry",
        [keyId$]: 4295426265.0
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Control Left",
        [keyId$]: 4295426272.0
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Shift Left",
        [keyId$]: 4295426273.0
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Alt Left",
        [keyId$]: 4295426274.0
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Meta Left",
        [keyId$]: 4295426275.0
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Control Right",
        [keyId$]: 4295426276.0
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Shift Right",
        [keyId$]: 4295426277.0
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Alt Right",
        [keyId$]: 4295426278.0
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Meta Right",
        [keyId$]: 4295426279.0
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Info",
        [keyId$]: 4295753824.0
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Closed Caption Toggle",
        [keyId$]: 4295753825.0
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Brightness Up",
        [keyId$]: 4295753839.0
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Brightness Down",
        [keyId$]: 4295753840.0
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Brightness Toggle",
        [keyId$]: 4295753842.0
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Brightness Minimum",
        [keyId$]: 4295753843.0
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Brightness Maximum",
        [keyId$]: 4295753844.0
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Brightness Auto",
        [keyId$]: 4295753845.0
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Kbd Illum Up",
        [keyId$]: 4295753849.0
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Kbd Illum Down",
        [keyId$]: 4295753850.0
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Media Last",
        [keyId$]: 4295753859.0
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Launch Phone",
        [keyId$]: 4295753868.0
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Program Guide",
        [keyId$]: 4295753869.0
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Exit",
        [keyId$]: 4295753876.0
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Channel Up",
        [keyId$]: 4295753884.0
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Channel Down",
        [keyId$]: 4295753885.0
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Media Play",
        [keyId$]: 4295753904.0
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Media Pause",
        [keyId$]: 4295753905.0
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Media Record",
        [keyId$]: 4295753906.0
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Media Fast Forward",
        [keyId$]: 4295753907.0
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Media Rewind",
        [keyId$]: 4295753908.0
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Media Track Next",
        [keyId$]: 4295753909.0
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Media Track Previous",
        [keyId$]: 4295753910.0
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Media Stop",
        [keyId$]: 4295753911.0
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Eject",
        [keyId$]: 4295753912.0
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Media Play Pause",
        [keyId$]: 4295753933.0
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Speech Input Toggle",
        [keyId$]: 4295753935.0
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Bass Boost",
        [keyId$]: 4295753957.0
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Media Select",
        [keyId$]: 4295754115.0
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Launch Word Processor",
        [keyId$]: 4295754116.0
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Launch Spreadsheet",
        [keyId$]: 4295754118.0
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Launch Mail",
        [keyId$]: 4295754122.0
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Launch Contacts",
        [keyId$]: 4295754125.0
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Launch Calendar",
        [keyId$]: 4295754126.0
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Launch App2",
        [keyId$]: 4295754130.0
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Launch App1",
        [keyId$]: 4295754132.0
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Launch Internet Browser",
        [keyId$]: 4295754134.0
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Log Off",
        [keyId$]: 4295754140.0
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Lock Screen",
        [keyId$]: 4295754142.0
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Launch Control Panel",
        [keyId$]: 4295754143.0
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Select Task",
        [keyId$]: 4295754146.0
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Launch Documents",
        [keyId$]: 4295754151.0
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Spell Check",
        [keyId$]: 4295754155.0
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Launch Keyboard Layout",
        [keyId$]: 4295754158.0
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Launch Screen Saver",
        [keyId$]: 4295754161.0
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Launch Assistant",
        [keyId$]: 4295754187.0
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Launch Audio Browser",
        [keyId$]: 4295754167.0
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "New Key",
        [keyId$]: 4295754241.0
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Close",
        [keyId$]: 4295754243.0
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Save",
        [keyId$]: 4295754247.0
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Print",
        [keyId$]: 4295754248.0
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Browser Search",
        [keyId$]: 4295754273.0
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Browser Home",
        [keyId$]: 4295754275.0
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Browser Back",
        [keyId$]: 4295754276.0
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Browser Forward",
        [keyId$]: 4295754277.0
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Browser Stop",
        [keyId$]: 4295754278.0
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Browser Refresh",
        [keyId$]: 4295754279.0
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Browser Favorites",
        [keyId$]: 4295754282.0
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Zoom In",
        [keyId$]: 4295754285.0
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Zoom Out",
        [keyId$]: 4295754286.0
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Zoom Toggle",
        [keyId$]: 4295754290.0
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Redo",
        [keyId$]: 4295754361.0
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Mail Reply",
        [keyId$]: 4295754377.0
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Mail Forward",
        [keyId$]: 4295754379.0
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Mail Send",
        [keyId$]: 4295754380.0
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Keyboard Layout Select",
        [keyId$]: 4295754397.0
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Show All Windows",
        [keyId$]: 4295754399.0
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button 1",
        [keyId$]: 4295360257.0
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button 2",
        [keyId$]: 4295360258.0
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button 3",
        [keyId$]: 4295360259.0
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button 4",
        [keyId$]: 4295360260.0
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button 5",
        [keyId$]: 4295360261.0
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button 6",
        [keyId$]: 4295360262.0
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button 7",
        [keyId$]: 4295360263.0
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button 8",
        [keyId$]: 4295360264.0
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button 9",
        [keyId$]: 4295360265.0
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button 10",
        [keyId$]: 4295360266.0
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button 11",
        [keyId$]: 4295360267.0
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button 12",
        [keyId$]: 4295360268.0
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button 13",
        [keyId$]: 4295360269.0
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button 14",
        [keyId$]: 4295360270.0
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button 15",
        [keyId$]: 4295360271.0
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button 16",
        [keyId$]: 4295360272.0
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button A",
        [keyId$]: 4295360273.0
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button B",
        [keyId$]: 4295360274.0
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button C",
        [keyId$]: 4295360275.0
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button Left 1",
        [keyId$]: 4295360276.0
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button Left 2",
        [keyId$]: 4295360277.0
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button Mode",
        [keyId$]: 4295360278.0
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button Right 1",
        [keyId$]: 4295360279.0
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button Right 2",
        [keyId$]: 4295360280.0
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button Select",
        [keyId$]: 4295360281.0
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button Start",
        [keyId$]: 4295360282.0
      });
    },
    get C263() {
      return C263 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button Thumb Left",
        [keyId$]: 4295360283.0
      });
    },
    get C264() {
      return C264 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button Thumb Right",
        [keyId$]: 4295360284.0
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button X",
        [keyId$]: 4295360285.0
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button Y",
        [keyId$]: 4295360286.0
      });
    },
    get C267() {
      return C267 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Game Button Z",
        [keyId$]: 4295360287.0
      });
    },
    get C268() {
      return C268 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Fn",
        [keyId$]: 4294967314.0
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Shift",
        [keyId$]: 2203318681825.0
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Meta",
        [keyId$]: 2203318681827.0
      });
    },
    get C271() {
      return C271 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Alt",
        [keyId$]: 2203318681826.0
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [keyLabel$]: "",
        [debugName$]: "Control",
        [keyId$]: 2203318681824.0
      });
    },
    get C273() {
      return C273 = dart.constMap(intL(), LogicalKeyboardKeyL(), [4294967296.0, C0 || CT.C0, 4294967312.0, C1 || CT.C1, 4294967313.0, C2 || CT.C2, 4294967315.0, C3 || CT.C3, 4294967316.0, C4 || CT.C4, 4294967317.0, C5 || CT.C5, 4294967318.0, C6 || CT.C6, 4294967319.0, C7 || CT.C7, 4295032962.0, C8 || CT.C8, 4295032963.0, C9 || CT.C9, 4295033013.0, C10 || CT.C10, 4295426048.0, C11 || CT.C11, 4295426049.0, C12 || CT.C12, 4295426050.0, C13 || CT.C13, 4295426051.0, C14 || CT.C14, 97, C15 || CT.C15, 98, C16 || CT.C16, 99, C17 || CT.C17, 100, C18 || CT.C18, 101, C19 || CT.C19, 102, C20 || CT.C20, 103, C21 || CT.C21, 104, C22 || CT.C22, 105, C23 || CT.C23, 106, C24 || CT.C24, 107, C25 || CT.C25, 108, C26 || CT.C26, 109, C27 || CT.C27, 110, C28 || CT.C28, 111, C29 || CT.C29, 112, C30 || CT.C30, 113, C31 || CT.C31, 114, C32 || CT.C32, 115, C33 || CT.C33, 116, C34 || CT.C34, 117, C35 || CT.C35, 118, C36 || CT.C36, 119, C37 || CT.C37, 120, C38 || CT.C38, 121, C39 || CT.C39, 122, C40 || CT.C40, 49, C41 || CT.C41, 50, C42 || CT.C42, 51, C43 || CT.C43, 52, C44 || CT.C44, 53, C45 || CT.C45, 54, C46 || CT.C46, 55, C47 || CT.C47, 56, C48 || CT.C48, 57, C49 || CT.C49, 48, C50 || CT.C50, 4295426088.0, C51 || CT.C51, 4295426089.0, C52 || CT.C52, 4295426090.0, C53 || CT.C53, 4295426091.0, C54 || CT.C54, 32, C55 || CT.C55, 45, C56 || CT.C56, 61, C57 || CT.C57, 91, C58 || CT.C58, 93, C59 || CT.C59, 92, C60 || CT.C60, 59, C61 || CT.C61, 39, C62 || CT.C62, 96, C63 || CT.C63, 44, C64 || CT.C64, 46, C65 || CT.C65, 47, C66 || CT.C66, 4295426105.0, C67 || CT.C67, 4295426106.0, C68 || CT.C68, 4295426107.0, C69 || CT.C69, 4295426108.0, C70 || CT.C70, 4295426109.0, C71 || CT.C71, 4295426110.0, C72 || CT.C72, 4295426111.0, C73 || CT.C73, 4295426112.0, C74 || CT.C74, 4295426113.0, C75 || CT.C75, 4295426114.0, C76 || CT.C76, 4295426115.0, C77 || CT.C77, 4295426116.0, C78 || CT.C78, 4295426117.0, C79 || CT.C79, 4295426118.0, C80 || CT.C80, 4295426119.0, C81 || CT.C81, 4295426120.0, C82 || CT.C82, 4295426121.0, C83 || CT.C83, 4295426122.0, C84 || CT.C84, 4295426123.0, C85 || CT.C85, 4295426124.0, C86 || CT.C86, 4295426125.0, C87 || CT.C87, 4295426126.0, C88 || CT.C88, 4295426127.0, C89 || CT.C89, 4295426128.0, C90 || CT.C90, 4295426129.0, C91 || CT.C91, 4295426130.0, C92 || CT.C92, 4295426131.0, C93 || CT.C93, 4295426132.0, C94 || CT.C94, 4295426133.0, C95 || CT.C95, 4295426134.0, C96 || CT.C96, 4295426135.0, C97 || CT.C97, 4295426136.0, C98 || CT.C98, 4295426137.0, C99 || CT.C99, 4295426138.0, C100 || CT.C100, 4295426139.0, C101 || CT.C101, 4295426140.0, C102 || CT.C102, 4295426141.0, C103 || CT.C103, 4295426142.0, C104 || CT.C104, 4295426143.0, C105 || CT.C105, 4295426144.0, C106 || CT.C106, 4295426145.0, C107 || CT.C107, 4295426146.0, C108 || CT.C108, 4295426147.0, C109 || CT.C109, 4295426148.0, C110 || CT.C110, 4295426149.0, C111 || CT.C111, 4295426150.0, C112 || CT.C112, 4295426151.0, C113 || CT.C113, 4295426152.0, C114 || CT.C114, 4295426153.0, C115 || CT.C115, 4295426154.0, C116 || CT.C116, 4295426155.0, C117 || CT.C117, 4295426156.0, C118 || CT.C118, 4295426157.0, C119 || CT.C119, 4295426158.0, C120 || CT.C120, 4295426159.0, C121 || CT.C121, 4295426160.0, C122 || CT.C122, 4295426161.0, C123 || CT.C123, 4295426162.0, C124 || CT.C124, 4295426163.0, C125 || CT.C125, 4295426164.0, C126 || CT.C126, 4295426165.0, C127 || CT.C127, 4295426167.0, C128 || CT.C128, 4295426169.0, C129 || CT.C129, 4295426170.0, C130 || CT.C130, 4295426171.0, C131 || CT.C131, 4295426172.0, C132 || CT.C132, 4295426173.0, C133 || CT.C133, 4295426174.0, C134 || CT.C134, 4295426175.0, C135 || CT.C135, 4295426176.0, C136 || CT.C136, 4295426177.0, C137 || CT.C137, 4295426181.0, C138 || CT.C138, 4295426183.0, C139 || CT.C139, 4295426184.0, C140 || CT.C140, 4295426185.0, C141 || CT.C141, 4295426186.0, C142 || CT.C142, 4295426187.0, C143 || CT.C143, 4295426192.0, C144 || CT.C144, 4295426193.0, C145 || CT.C145, 4295426194.0, C146 || CT.C146, 4295426195.0, C147 || CT.C147, 4295426196.0, C148 || CT.C148, 4295426203.0, C149 || CT.C149, 4295426211.0, C150 || CT.C150, 4295426230.0, C151 || CT.C151, 4295426231.0, C152 || CT.C152, 4295426235.0, C153 || CT.C153, 4295426256.0, C154 || CT.C154, 4295426257.0, C155 || CT.C155, 4295426258.0, C156 || CT.C156, 4295426259.0, C157 || CT.C157, 4295426260.0, C158 || CT.C158, 4295426263.0, C159 || CT.C159, 4295426264.0, C160 || CT.C160, 4295426265.0, C161 || CT.C161, 4295426272.0, C162 || CT.C162, 4295426273.0, C163 || CT.C163, 4295426274.0, C164 || CT.C164, 4295426275.0, C165 || CT.C165, 4295426276.0, C166 || CT.C166, 4295426277.0, C167 || CT.C167, 4295426278.0, C168 || CT.C168, 4295426279.0, C169 || CT.C169, 4295753824.0, C170 || CT.C170, 4295753825.0, C171 || CT.C171, 4295753839.0, C172 || CT.C172, 4295753840.0, C173 || CT.C173, 4295753842.0, C174 || CT.C174, 4295753843.0, C175 || CT.C175, 4295753844.0, C176 || CT.C176, 4295753845.0, C177 || CT.C177, 4295753849.0, C178 || CT.C178, 4295753850.0, C179 || CT.C179, 4295753859.0, C180 || CT.C180, 4295753868.0, C181 || CT.C181, 4295753869.0, C182 || CT.C182, 4295753876.0, C183 || CT.C183, 4295753884.0, C184 || CT.C184, 4295753885.0, C185 || CT.C185, 4295753904.0, C186 || CT.C186, 4295753905.0, C187 || CT.C187, 4295753906.0, C188 || CT.C188, 4295753907.0, C189 || CT.C189, 4295753908.0, C190 || CT.C190, 4295753909.0, C191 || CT.C191, 4295753910.0, C192 || CT.C192, 4295753911.0, C193 || CT.C193, 4295753912.0, C194 || CT.C194, 4295753933.0, C195 || CT.C195, 4295753935.0, C196 || CT.C196, 4295753957.0, C197 || CT.C197, 4295754115.0, C198 || CT.C198, 4295754116.0, C199 || CT.C199, 4295754118.0, C200 || CT.C200, 4295754122.0, C201 || CT.C201, 4295754125.0, C202 || CT.C202, 4295754126.0, C203 || CT.C203, 4295754130.0, C204 || CT.C204, 4295754132.0, C205 || CT.C205, 4295754134.0, C206 || CT.C206, 4295754140.0, C207 || CT.C207, 4295754142.0, C208 || CT.C208, 4295754143.0, C209 || CT.C209, 4295754146.0, C210 || CT.C210, 4295754151.0, C211 || CT.C211, 4295754155.0, C212 || CT.C212, 4295754158.0, C213 || CT.C213, 4295754161.0, C214 || CT.C214, 4295754187.0, C215 || CT.C215, 4295754167.0, C216 || CT.C216, 4295754241.0, C217 || CT.C217, 4295754243.0, C218 || CT.C218, 4295754247.0, C219 || CT.C219, 4295754248.0, C220 || CT.C220, 4295754273.0, C221 || CT.C221, 4295754275.0, C222 || CT.C222, 4295754276.0, C223 || CT.C223, 4295754277.0, C224 || CT.C224, 4295754278.0, C225 || CT.C225, 4295754279.0, C226 || CT.C226, 4295754282.0, C227 || CT.C227, 4295754285.0, C228 || CT.C228, 4295754286.0, C229 || CT.C229, 4295754290.0, C230 || CT.C230, 4295754361.0, C231 || CT.C231, 4295754377.0, C232 || CT.C232, 4295754379.0, C233 || CT.C233, 4295754380.0, C234 || CT.C234, 4295754397.0, C235 || CT.C235, 4295754399.0, C236 || CT.C236, 4295360257.0, C237 || CT.C237, 4295360258.0, C238 || CT.C238, 4295360259.0, C239 || CT.C239, 4295360260.0, C240 || CT.C240, 4295360261.0, C241 || CT.C241, 4295360262.0, C242 || CT.C242, 4295360263.0, C243 || CT.C243, 4295360264.0, C244 || CT.C244, 4295360265.0, C245 || CT.C245, 4295360266.0, C246 || CT.C246, 4295360267.0, C247 || CT.C247, 4295360268.0, C248 || CT.C248, 4295360269.0, C249 || CT.C249, 4295360270.0, C250 || CT.C250, 4295360271.0, C251 || CT.C251, 4295360272.0, C252 || CT.C252, 4295360273.0, C253 || CT.C253, 4295360274.0, C254 || CT.C254, 4295360275.0, C255 || CT.C255, 4295360276.0, C256 || CT.C256, 4295360277.0, C257 || CT.C257, 4295360278.0, C258 || CT.C258, 4295360279.0, C259 || CT.C259, 4295360280.0, C260 || CT.C260, 4295360281.0, C261 || CT.C261, 4295360282.0, C262 || CT.C262, 4295360283.0, C263 || CT.C263, 4295360284.0, C264 || CT.C264, 4295360285.0, C265 || CT.C265, 4295360286.0, C266 || CT.C266, 4295360287.0, C267 || CT.C267, 4294967314.0, C268 || CT.C268, 2203318681825.0, C269 || CT.C269, 2203318681827.0, C270 || CT.C270, 2203318681826.0, C271 || CT.C271, 2203318681824.0, C272 || CT.C272]);
    },
    get C274() {
      return C274 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "None",
        [usbHidUsage$]: 0
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Hyper",
        [usbHidUsage$]: 16
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Super Key",
        [usbHidUsage$]: 17
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Fn Lock",
        [usbHidUsage$]: 19
      });
    },
    get C278() {
      return C278 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Suspend",
        [usbHidUsage$]: 20
      });
    },
    get C279() {
      return C279 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Resume",
        [usbHidUsage$]: 21
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Turbo",
        [usbHidUsage$]: 22
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Privacy Screen Toggle",
        [usbHidUsage$]: 23
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Sleep",
        [usbHidUsage$]: 65666
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Wake Up",
        [usbHidUsage$]: 65667
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Display Toggle Int Ext",
        [usbHidUsage$]: 65717
      });
    },
    get C285() {
      return C285 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Usb Reserved",
        [usbHidUsage$]: 458752
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Usb Error Roll Over",
        [usbHidUsage$]: 458753
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Usb Post Fail",
        [usbHidUsage$]: 458754
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Usb Error Undefined",
        [usbHidUsage$]: 458755
      });
    },
    get C289() {
      return C289 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key A",
        [usbHidUsage$]: 458756
      });
    },
    get C290() {
      return C290 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key B",
        [usbHidUsage$]: 458757
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key C",
        [usbHidUsage$]: 458758
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key D",
        [usbHidUsage$]: 458759
      });
    },
    get C293() {
      return C293 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key E",
        [usbHidUsage$]: 458760
      });
    },
    get C294() {
      return C294 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key F",
        [usbHidUsage$]: 458761
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key G",
        [usbHidUsage$]: 458762
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key H",
        [usbHidUsage$]: 458763
      });
    },
    get C297() {
      return C297 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key I",
        [usbHidUsage$]: 458764
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key J",
        [usbHidUsage$]: 458765
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key K",
        [usbHidUsage$]: 458766
      });
    },
    get C300() {
      return C300 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key L",
        [usbHidUsage$]: 458767
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key M",
        [usbHidUsage$]: 458768
      });
    },
    get C302() {
      return C302 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key N",
        [usbHidUsage$]: 458769
      });
    },
    get C303() {
      return C303 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key O",
        [usbHidUsage$]: 458770
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key P",
        [usbHidUsage$]: 458771
      });
    },
    get C305() {
      return C305 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key Q",
        [usbHidUsage$]: 458772
      });
    },
    get C306() {
      return C306 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key R",
        [usbHidUsage$]: 458773
      });
    },
    get C307() {
      return C307 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key S",
        [usbHidUsage$]: 458774
      });
    },
    get C308() {
      return C308 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key T",
        [usbHidUsage$]: 458775
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key U",
        [usbHidUsage$]: 458776
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key V",
        [usbHidUsage$]: 458777
      });
    },
    get C311() {
      return C311 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key W",
        [usbHidUsage$]: 458778
      });
    },
    get C312() {
      return C312 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key X",
        [usbHidUsage$]: 458779
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key Y",
        [usbHidUsage$]: 458780
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Key Z",
        [usbHidUsage$]: 458781
      });
    },
    get C315() {
      return C315 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Digit 1",
        [usbHidUsage$]: 458782
      });
    },
    get C316() {
      return C316 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Digit 2",
        [usbHidUsage$]: 458783
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Digit 3",
        [usbHidUsage$]: 458784
      });
    },
    get C318() {
      return C318 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Digit 4",
        [usbHidUsage$]: 458785
      });
    },
    get C319() {
      return C319 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Digit 5",
        [usbHidUsage$]: 458786
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Digit 6",
        [usbHidUsage$]: 458787
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Digit 7",
        [usbHidUsage$]: 458788
      });
    },
    get C322() {
      return C322 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Digit 8",
        [usbHidUsage$]: 458789
      });
    },
    get C323() {
      return C323 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Digit 9",
        [usbHidUsage$]: 458790
      });
    },
    get C324() {
      return C324 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Digit 0",
        [usbHidUsage$]: 458791
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Enter",
        [usbHidUsage$]: 458792
      });
    },
    get C326() {
      return C326 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Escape",
        [usbHidUsage$]: 458793
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Backspace",
        [usbHidUsage$]: 458794
      });
    },
    get C328() {
      return C328 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Tab",
        [usbHidUsage$]: 458795
      });
    },
    get C329() {
      return C329 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Space",
        [usbHidUsage$]: 458796
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Minus",
        [usbHidUsage$]: 458797
      });
    },
    get C331() {
      return C331 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Equal",
        [usbHidUsage$]: 458798
      });
    },
    get C332() {
      return C332 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Bracket Left",
        [usbHidUsage$]: 458799
      });
    },
    get C333() {
      return C333 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Bracket Right",
        [usbHidUsage$]: 458800
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Backslash",
        [usbHidUsage$]: 458801
      });
    },
    get C335() {
      return C335 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Semicolon",
        [usbHidUsage$]: 458803
      });
    },
    get C336() {
      return C336 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Quote",
        [usbHidUsage$]: 458804
      });
    },
    get C337() {
      return C337 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Backquote",
        [usbHidUsage$]: 458805
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Comma",
        [usbHidUsage$]: 458806
      });
    },
    get C339() {
      return C339 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Period",
        [usbHidUsage$]: 458807
      });
    },
    get C340() {
      return C340 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Slash",
        [usbHidUsage$]: 458808
      });
    },
    get C341() {
      return C341 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Caps Lock",
        [usbHidUsage$]: 458809
      });
    },
    get C342() {
      return C342 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F1",
        [usbHidUsage$]: 458810
      });
    },
    get C343() {
      return C343 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F2",
        [usbHidUsage$]: 458811
      });
    },
    get C344() {
      return C344 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F3",
        [usbHidUsage$]: 458812
      });
    },
    get C345() {
      return C345 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F4",
        [usbHidUsage$]: 458813
      });
    },
    get C346() {
      return C346 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F5",
        [usbHidUsage$]: 458814
      });
    },
    get C347() {
      return C347 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F6",
        [usbHidUsage$]: 458815
      });
    },
    get C348() {
      return C348 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F7",
        [usbHidUsage$]: 458816
      });
    },
    get C349() {
      return C349 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F8",
        [usbHidUsage$]: 458817
      });
    },
    get C350() {
      return C350 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F9",
        [usbHidUsage$]: 458818
      });
    },
    get C351() {
      return C351 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F10",
        [usbHidUsage$]: 458819
      });
    },
    get C352() {
      return C352 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F11",
        [usbHidUsage$]: 458820
      });
    },
    get C353() {
      return C353 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F12",
        [usbHidUsage$]: 458821
      });
    },
    get C354() {
      return C354 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Print Screen",
        [usbHidUsage$]: 458822
      });
    },
    get C355() {
      return C355 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Scroll Lock",
        [usbHidUsage$]: 458823
      });
    },
    get C356() {
      return C356 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Pause",
        [usbHidUsage$]: 458824
      });
    },
    get C357() {
      return C357 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Insert",
        [usbHidUsage$]: 458825
      });
    },
    get C358() {
      return C358 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Home",
        [usbHidUsage$]: 458826
      });
    },
    get C359() {
      return C359 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Page Up",
        [usbHidUsage$]: 458827
      });
    },
    get C360() {
      return C360 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Delete",
        [usbHidUsage$]: 458828
      });
    },
    get C361() {
      return C361 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "End",
        [usbHidUsage$]: 458829
      });
    },
    get C362() {
      return C362 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Page Down",
        [usbHidUsage$]: 458830
      });
    },
    get C363() {
      return C363 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Arrow Right",
        [usbHidUsage$]: 458831
      });
    },
    get C364() {
      return C364 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Arrow Left",
        [usbHidUsage$]: 458832
      });
    },
    get C365() {
      return C365 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Arrow Down",
        [usbHidUsage$]: 458833
      });
    },
    get C366() {
      return C366 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Arrow Up",
        [usbHidUsage$]: 458834
      });
    },
    get C367() {
      return C367 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Num Lock",
        [usbHidUsage$]: 458835
      });
    },
    get C368() {
      return C368 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad Divide",
        [usbHidUsage$]: 458836
      });
    },
    get C369() {
      return C369 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad Multiply",
        [usbHidUsage$]: 458837
      });
    },
    get C370() {
      return C370 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad Subtract",
        [usbHidUsage$]: 458838
      });
    },
    get C371() {
      return C371 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad Add",
        [usbHidUsage$]: 458839
      });
    },
    get C372() {
      return C372 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad Enter",
        [usbHidUsage$]: 458840
      });
    },
    get C373() {
      return C373 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad 1",
        [usbHidUsage$]: 458841
      });
    },
    get C374() {
      return C374 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad 2",
        [usbHidUsage$]: 458842
      });
    },
    get C375() {
      return C375 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad 3",
        [usbHidUsage$]: 458843
      });
    },
    get C376() {
      return C376 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad 4",
        [usbHidUsage$]: 458844
      });
    },
    get C377() {
      return C377 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad 5",
        [usbHidUsage$]: 458845
      });
    },
    get C378() {
      return C378 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad 6",
        [usbHidUsage$]: 458846
      });
    },
    get C379() {
      return C379 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad 7",
        [usbHidUsage$]: 458847
      });
    },
    get C380() {
      return C380 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad 8",
        [usbHidUsage$]: 458848
      });
    },
    get C381() {
      return C381 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad 9",
        [usbHidUsage$]: 458849
      });
    },
    get C382() {
      return C382 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad 0",
        [usbHidUsage$]: 458850
      });
    },
    get C383() {
      return C383 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad Decimal",
        [usbHidUsage$]: 458851
      });
    },
    get C384() {
      return C384 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Intl Backslash",
        [usbHidUsage$]: 458852
      });
    },
    get C385() {
      return C385 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Context Menu",
        [usbHidUsage$]: 458853
      });
    },
    get C386() {
      return C386 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Power",
        [usbHidUsage$]: 458854
      });
    },
    get C387() {
      return C387 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad Equal",
        [usbHidUsage$]: 458855
      });
    },
    get C388() {
      return C388 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F13",
        [usbHidUsage$]: 458856
      });
    },
    get C389() {
      return C389 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F14",
        [usbHidUsage$]: 458857
      });
    },
    get C390() {
      return C390 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F15",
        [usbHidUsage$]: 458858
      });
    },
    get C391() {
      return C391 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F16",
        [usbHidUsage$]: 458859
      });
    },
    get C392() {
      return C392 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F17",
        [usbHidUsage$]: 458860
      });
    },
    get C393() {
      return C393 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F18",
        [usbHidUsage$]: 458861
      });
    },
    get C394() {
      return C394 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F19",
        [usbHidUsage$]: 458862
      });
    },
    get C395() {
      return C395 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F20",
        [usbHidUsage$]: 458863
      });
    },
    get C396() {
      return C396 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F21",
        [usbHidUsage$]: 458864
      });
    },
    get C397() {
      return C397 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F22",
        [usbHidUsage$]: 458865
      });
    },
    get C398() {
      return C398 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F23",
        [usbHidUsage$]: 458866
      });
    },
    get C399() {
      return C399 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "F24",
        [usbHidUsage$]: 458867
      });
    },
    get C400() {
      return C400 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Open",
        [usbHidUsage$]: 458868
      });
    },
    get C401() {
      return C401 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Help",
        [usbHidUsage$]: 458869
      });
    },
    get C402() {
      return C402 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Select",
        [usbHidUsage$]: 458871
      });
    },
    get C403() {
      return C403 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Again",
        [usbHidUsage$]: 458873
      });
    },
    get C404() {
      return C404 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Undo",
        [usbHidUsage$]: 458874
      });
    },
    get C405() {
      return C405 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Cut",
        [usbHidUsage$]: 458875
      });
    },
    get C406() {
      return C406 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Copy",
        [usbHidUsage$]: 458876
      });
    },
    get C407() {
      return C407 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Paste",
        [usbHidUsage$]: 458877
      });
    },
    get C408() {
      return C408 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Find",
        [usbHidUsage$]: 458878
      });
    },
    get C409() {
      return C409 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Audio Volume Mute",
        [usbHidUsage$]: 458879
      });
    },
    get C410() {
      return C410 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Audio Volume Up",
        [usbHidUsage$]: 458880
      });
    },
    get C411() {
      return C411 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Audio Volume Down",
        [usbHidUsage$]: 458881
      });
    },
    get C412() {
      return C412 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad Comma",
        [usbHidUsage$]: 458885
      });
    },
    get C413() {
      return C413 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Intl Ro",
        [usbHidUsage$]: 458887
      });
    },
    get C414() {
      return C414 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Kana Mode",
        [usbHidUsage$]: 458888
      });
    },
    get C415() {
      return C415 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Intl Yen",
        [usbHidUsage$]: 458889
      });
    },
    get C416() {
      return C416 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Convert",
        [usbHidUsage$]: 458890
      });
    },
    get C417() {
      return C417 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Non Convert",
        [usbHidUsage$]: 458891
      });
    },
    get C418() {
      return C418 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Lang 1",
        [usbHidUsage$]: 458896
      });
    },
    get C419() {
      return C419 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Lang 2",
        [usbHidUsage$]: 458897
      });
    },
    get C420() {
      return C420 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Lang 3",
        [usbHidUsage$]: 458898
      });
    },
    get C421() {
      return C421 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Lang 4",
        [usbHidUsage$]: 458899
      });
    },
    get C422() {
      return C422 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Lang 5",
        [usbHidUsage$]: 458900
      });
    },
    get C423() {
      return C423 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Abort",
        [usbHidUsage$]: 458907
      });
    },
    get C424() {
      return C424 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Props",
        [usbHidUsage$]: 458915
      });
    },
    get C425() {
      return C425 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad Paren Left",
        [usbHidUsage$]: 458934
      });
    },
    get C426() {
      return C426 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad Paren Right",
        [usbHidUsage$]: 458935
      });
    },
    get C427() {
      return C427 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad Backspace",
        [usbHidUsage$]: 458939
      });
    },
    get C428() {
      return C428 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad Memory Store",
        [usbHidUsage$]: 458960
      });
    },
    get C429() {
      return C429 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad Memory Recall",
        [usbHidUsage$]: 458961
      });
    },
    get C430() {
      return C430 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad Memory Clear",
        [usbHidUsage$]: 458962
      });
    },
    get C431() {
      return C431 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad Memory Add",
        [usbHidUsage$]: 458963
      });
    },
    get C432() {
      return C432 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad Memory Subtract",
        [usbHidUsage$]: 458964
      });
    },
    get C433() {
      return C433 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad Sign Change",
        [usbHidUsage$]: 458967
      });
    },
    get C434() {
      return C434 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad Clear",
        [usbHidUsage$]: 458968
      });
    },
    get C435() {
      return C435 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Numpad Clear Entry",
        [usbHidUsage$]: 458969
      });
    },
    get C436() {
      return C436 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Control Left",
        [usbHidUsage$]: 458976
      });
    },
    get C437() {
      return C437 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Shift Left",
        [usbHidUsage$]: 458977
      });
    },
    get C438() {
      return C438 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Alt Left",
        [usbHidUsage$]: 458978
      });
    },
    get C439() {
      return C439 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Meta Left",
        [usbHidUsage$]: 458979
      });
    },
    get C440() {
      return C440 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Control Right",
        [usbHidUsage$]: 458980
      });
    },
    get C441() {
      return C441 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Shift Right",
        [usbHidUsage$]: 458981
      });
    },
    get C442() {
      return C442 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Alt Right",
        [usbHidUsage$]: 458982
      });
    },
    get C443() {
      return C443 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Meta Right",
        [usbHidUsage$]: 458983
      });
    },
    get C444() {
      return C444 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Info",
        [usbHidUsage$]: 786528
      });
    },
    get C445() {
      return C445 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Closed Caption Toggle",
        [usbHidUsage$]: 786529
      });
    },
    get C446() {
      return C446 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Brightness Up",
        [usbHidUsage$]: 786543
      });
    },
    get C447() {
      return C447 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Brightness Down",
        [usbHidUsage$]: 786544
      });
    },
    get C448() {
      return C448 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Brightness Toggle",
        [usbHidUsage$]: 786546
      });
    },
    get C449() {
      return C449 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Brightness Minimum",
        [usbHidUsage$]: 786547
      });
    },
    get C450() {
      return C450 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Brightness Maximum",
        [usbHidUsage$]: 786548
      });
    },
    get C451() {
      return C451 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Brightness Auto",
        [usbHidUsage$]: 786549
      });
    },
    get C452() {
      return C452 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Kbd Illum Up",
        [usbHidUsage$]: 786553
      });
    },
    get C453() {
      return C453 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Kbd Illum Down",
        [usbHidUsage$]: 786554
      });
    },
    get C454() {
      return C454 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Media Last",
        [usbHidUsage$]: 786563
      });
    },
    get C455() {
      return C455 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Launch Phone",
        [usbHidUsage$]: 786572
      });
    },
    get C456() {
      return C456 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Program Guide",
        [usbHidUsage$]: 786573
      });
    },
    get C457() {
      return C457 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Exit",
        [usbHidUsage$]: 786580
      });
    },
    get C458() {
      return C458 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Channel Up",
        [usbHidUsage$]: 786588
      });
    },
    get C459() {
      return C459 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Channel Down",
        [usbHidUsage$]: 786589
      });
    },
    get C460() {
      return C460 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Media Play",
        [usbHidUsage$]: 786608
      });
    },
    get C461() {
      return C461 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Media Pause",
        [usbHidUsage$]: 786609
      });
    },
    get C462() {
      return C462 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Media Record",
        [usbHidUsage$]: 786610
      });
    },
    get C463() {
      return C463 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Media Fast Forward",
        [usbHidUsage$]: 786611
      });
    },
    get C464() {
      return C464 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Media Rewind",
        [usbHidUsage$]: 786612
      });
    },
    get C465() {
      return C465 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Media Track Next",
        [usbHidUsage$]: 786613
      });
    },
    get C466() {
      return C466 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Media Track Previous",
        [usbHidUsage$]: 786614
      });
    },
    get C467() {
      return C467 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Media Stop",
        [usbHidUsage$]: 786615
      });
    },
    get C468() {
      return C468 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Eject",
        [usbHidUsage$]: 786616
      });
    },
    get C469() {
      return C469 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Media Play Pause",
        [usbHidUsage$]: 786637
      });
    },
    get C470() {
      return C470 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Speech Input Toggle",
        [usbHidUsage$]: 786639
      });
    },
    get C471() {
      return C471 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Bass Boost",
        [usbHidUsage$]: 786661
      });
    },
    get C472() {
      return C472 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Media Select",
        [usbHidUsage$]: 786819
      });
    },
    get C473() {
      return C473 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Launch Word Processor",
        [usbHidUsage$]: 786820
      });
    },
    get C474() {
      return C474 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Launch Spreadsheet",
        [usbHidUsage$]: 786822
      });
    },
    get C475() {
      return C475 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Launch Mail",
        [usbHidUsage$]: 786826
      });
    },
    get C476() {
      return C476 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Launch Contacts",
        [usbHidUsage$]: 786829
      });
    },
    get C477() {
      return C477 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Launch Calendar",
        [usbHidUsage$]: 786830
      });
    },
    get C478() {
      return C478 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Launch App2",
        [usbHidUsage$]: 786834
      });
    },
    get C479() {
      return C479 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Launch App1",
        [usbHidUsage$]: 786836
      });
    },
    get C480() {
      return C480 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Launch Internet Browser",
        [usbHidUsage$]: 786838
      });
    },
    get C481() {
      return C481 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Log Off",
        [usbHidUsage$]: 786844
      });
    },
    get C482() {
      return C482 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Lock Screen",
        [usbHidUsage$]: 786846
      });
    },
    get C483() {
      return C483 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Launch Control Panel",
        [usbHidUsage$]: 786847
      });
    },
    get C484() {
      return C484 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Select Task",
        [usbHidUsage$]: 786850
      });
    },
    get C485() {
      return C485 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Launch Documents",
        [usbHidUsage$]: 786855
      });
    },
    get C486() {
      return C486 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Spell Check",
        [usbHidUsage$]: 786859
      });
    },
    get C487() {
      return C487 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Launch Keyboard Layout",
        [usbHidUsage$]: 786862
      });
    },
    get C488() {
      return C488 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Launch Screen Saver",
        [usbHidUsage$]: 786865
      });
    },
    get C489() {
      return C489 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Launch Assistant",
        [usbHidUsage$]: 786891
      });
    },
    get C490() {
      return C490 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Launch Audio Browser",
        [usbHidUsage$]: 786871
      });
    },
    get C491() {
      return C491 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "New Key",
        [usbHidUsage$]: 786945
      });
    },
    get C492() {
      return C492 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Close",
        [usbHidUsage$]: 786947
      });
    },
    get C493() {
      return C493 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Save",
        [usbHidUsage$]: 786951
      });
    },
    get C494() {
      return C494 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Print",
        [usbHidUsage$]: 786952
      });
    },
    get C495() {
      return C495 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Browser Search",
        [usbHidUsage$]: 786977
      });
    },
    get C496() {
      return C496 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Browser Home",
        [usbHidUsage$]: 786979
      });
    },
    get C497() {
      return C497 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Browser Back",
        [usbHidUsage$]: 786980
      });
    },
    get C498() {
      return C498 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Browser Forward",
        [usbHidUsage$]: 786981
      });
    },
    get C499() {
      return C499 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Browser Stop",
        [usbHidUsage$]: 786982
      });
    },
    get C500() {
      return C500 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Browser Refresh",
        [usbHidUsage$]: 786983
      });
    },
    get C501() {
      return C501 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Browser Favorites",
        [usbHidUsage$]: 786986
      });
    },
    get C502() {
      return C502 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Zoom In",
        [usbHidUsage$]: 786989
      });
    },
    get C503() {
      return C503 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Zoom Out",
        [usbHidUsage$]: 786990
      });
    },
    get C504() {
      return C504 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Zoom Toggle",
        [usbHidUsage$]: 786994
      });
    },
    get C505() {
      return C505 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Redo",
        [usbHidUsage$]: 787065
      });
    },
    get C506() {
      return C506 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Mail Reply",
        [usbHidUsage$]: 787081
      });
    },
    get C507() {
      return C507 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Mail Forward",
        [usbHidUsage$]: 787083
      });
    },
    get C508() {
      return C508 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Mail Send",
        [usbHidUsage$]: 787084
      });
    },
    get C509() {
      return C509 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Keyboard Layout Select",
        [usbHidUsage$]: 787101
      });
    },
    get C510() {
      return C510 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Show All Windows",
        [usbHidUsage$]: 787103
      });
    },
    get C511() {
      return C511 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button 1",
        [usbHidUsage$]: 392961
      });
    },
    get C512() {
      return C512 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button 2",
        [usbHidUsage$]: 392962
      });
    },
    get C513() {
      return C513 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button 3",
        [usbHidUsage$]: 392963
      });
    },
    get C514() {
      return C514 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button 4",
        [usbHidUsage$]: 392964
      });
    },
    get C515() {
      return C515 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button 5",
        [usbHidUsage$]: 392965
      });
    },
    get C516() {
      return C516 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button 6",
        [usbHidUsage$]: 392966
      });
    },
    get C517() {
      return C517 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button 7",
        [usbHidUsage$]: 392967
      });
    },
    get C518() {
      return C518 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button 8",
        [usbHidUsage$]: 392968
      });
    },
    get C519() {
      return C519 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button 9",
        [usbHidUsage$]: 392969
      });
    },
    get C520() {
      return C520 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button 10",
        [usbHidUsage$]: 392970
      });
    },
    get C521() {
      return C521 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button 11",
        [usbHidUsage$]: 392971
      });
    },
    get C522() {
      return C522 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button 12",
        [usbHidUsage$]: 392972
      });
    },
    get C523() {
      return C523 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button 13",
        [usbHidUsage$]: 392973
      });
    },
    get C524() {
      return C524 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button 14",
        [usbHidUsage$]: 392974
      });
    },
    get C525() {
      return C525 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button 15",
        [usbHidUsage$]: 392975
      });
    },
    get C526() {
      return C526 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button 16",
        [usbHidUsage$]: 392976
      });
    },
    get C527() {
      return C527 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button A",
        [usbHidUsage$]: 392977
      });
    },
    get C528() {
      return C528 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button B",
        [usbHidUsage$]: 392978
      });
    },
    get C529() {
      return C529 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button C",
        [usbHidUsage$]: 392979
      });
    },
    get C530() {
      return C530 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button Left 1",
        [usbHidUsage$]: 392980
      });
    },
    get C531() {
      return C531 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button Left 2",
        [usbHidUsage$]: 392981
      });
    },
    get C532() {
      return C532 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button Mode",
        [usbHidUsage$]: 392982
      });
    },
    get C533() {
      return C533 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button Right 1",
        [usbHidUsage$]: 392983
      });
    },
    get C534() {
      return C534 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button Right 2",
        [usbHidUsage$]: 392984
      });
    },
    get C535() {
      return C535 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button Select",
        [usbHidUsage$]: 392985
      });
    },
    get C536() {
      return C536 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button Start",
        [usbHidUsage$]: 392986
      });
    },
    get C537() {
      return C537 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button Thumb Left",
        [usbHidUsage$]: 392987
      });
    },
    get C538() {
      return C538 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button Thumb Right",
        [usbHidUsage$]: 392988
      });
    },
    get C539() {
      return C539 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button X",
        [usbHidUsage$]: 392989
      });
    },
    get C540() {
      return C540 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button Y",
        [usbHidUsage$]: 392990
      });
    },
    get C541() {
      return C541 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Game Button Z",
        [usbHidUsage$]: 392991
      });
    },
    get C542() {
      return C542 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [debugName$0]: "Fn",
        [usbHidUsage$]: 18
      });
    },
    get C543() {
      return C543 = dart.constMap(intL(), PhysicalKeyboardKeyL(), [0, C274 || CT.C274, 16, C275 || CT.C275, 17, C276 || CT.C276, 19, C277 || CT.C277, 20, C278 || CT.C278, 21, C279 || CT.C279, 22, C280 || CT.C280, 23, C281 || CT.C281, 65666, C282 || CT.C282, 65667, C283 || CT.C283, 65717, C284 || CT.C284, 458752, C285 || CT.C285, 458753, C286 || CT.C286, 458754, C287 || CT.C287, 458755, C288 || CT.C288, 458756, C289 || CT.C289, 458757, C290 || CT.C290, 458758, C291 || CT.C291, 458759, C292 || CT.C292, 458760, C293 || CT.C293, 458761, C294 || CT.C294, 458762, C295 || CT.C295, 458763, C296 || CT.C296, 458764, C297 || CT.C297, 458765, C298 || CT.C298, 458766, C299 || CT.C299, 458767, C300 || CT.C300, 458768, C301 || CT.C301, 458769, C302 || CT.C302, 458770, C303 || CT.C303, 458771, C304 || CT.C304, 458772, C305 || CT.C305, 458773, C306 || CT.C306, 458774, C307 || CT.C307, 458775, C308 || CT.C308, 458776, C309 || CT.C309, 458777, C310 || CT.C310, 458778, C311 || CT.C311, 458779, C312 || CT.C312, 458780, C313 || CT.C313, 458781, C314 || CT.C314, 458782, C315 || CT.C315, 458783, C316 || CT.C316, 458784, C317 || CT.C317, 458785, C318 || CT.C318, 458786, C319 || CT.C319, 458787, C320 || CT.C320, 458788, C321 || CT.C321, 458789, C322 || CT.C322, 458790, C323 || CT.C323, 458791, C324 || CT.C324, 458792, C325 || CT.C325, 458793, C326 || CT.C326, 458794, C327 || CT.C327, 458795, C328 || CT.C328, 458796, C329 || CT.C329, 458797, C330 || CT.C330, 458798, C331 || CT.C331, 458799, C332 || CT.C332, 458800, C333 || CT.C333, 458801, C334 || CT.C334, 458803, C335 || CT.C335, 458804, C336 || CT.C336, 458805, C337 || CT.C337, 458806, C338 || CT.C338, 458807, C339 || CT.C339, 458808, C340 || CT.C340, 458809, C341 || CT.C341, 458810, C342 || CT.C342, 458811, C343 || CT.C343, 458812, C344 || CT.C344, 458813, C345 || CT.C345, 458814, C346 || CT.C346, 458815, C347 || CT.C347, 458816, C348 || CT.C348, 458817, C349 || CT.C349, 458818, C350 || CT.C350, 458819, C351 || CT.C351, 458820, C352 || CT.C352, 458821, C353 || CT.C353, 458822, C354 || CT.C354, 458823, C355 || CT.C355, 458824, C356 || CT.C356, 458825, C357 || CT.C357, 458826, C358 || CT.C358, 458827, C359 || CT.C359, 458828, C360 || CT.C360, 458829, C361 || CT.C361, 458830, C362 || CT.C362, 458831, C363 || CT.C363, 458832, C364 || CT.C364, 458833, C365 || CT.C365, 458834, C366 || CT.C366, 458835, C367 || CT.C367, 458836, C368 || CT.C368, 458837, C369 || CT.C369, 458838, C370 || CT.C370, 458839, C371 || CT.C371, 458840, C372 || CT.C372, 458841, C373 || CT.C373, 458842, C374 || CT.C374, 458843, C375 || CT.C375, 458844, C376 || CT.C376, 458845, C377 || CT.C377, 458846, C378 || CT.C378, 458847, C379 || CT.C379, 458848, C380 || CT.C380, 458849, C381 || CT.C381, 458850, C382 || CT.C382, 458851, C383 || CT.C383, 458852, C384 || CT.C384, 458853, C385 || CT.C385, 458854, C386 || CT.C386, 458855, C387 || CT.C387, 458856, C388 || CT.C388, 458857, C389 || CT.C389, 458858, C390 || CT.C390, 458859, C391 || CT.C391, 458860, C392 || CT.C392, 458861, C393 || CT.C393, 458862, C394 || CT.C394, 458863, C395 || CT.C395, 458864, C396 || CT.C396, 458865, C397 || CT.C397, 458866, C398 || CT.C398, 458867, C399 || CT.C399, 458868, C400 || CT.C400, 458869, C401 || CT.C401, 458871, C402 || CT.C402, 458873, C403 || CT.C403, 458874, C404 || CT.C404, 458875, C405 || CT.C405, 458876, C406 || CT.C406, 458877, C407 || CT.C407, 458878, C408 || CT.C408, 458879, C409 || CT.C409, 458880, C410 || CT.C410, 458881, C411 || CT.C411, 458885, C412 || CT.C412, 458887, C413 || CT.C413, 458888, C414 || CT.C414, 458889, C415 || CT.C415, 458890, C416 || CT.C416, 458891, C417 || CT.C417, 458896, C418 || CT.C418, 458897, C419 || CT.C419, 458898, C420 || CT.C420, 458899, C421 || CT.C421, 458900, C422 || CT.C422, 458907, C423 || CT.C423, 458915, C424 || CT.C424, 458934, C425 || CT.C425, 458935, C426 || CT.C426, 458939, C427 || CT.C427, 458960, C428 || CT.C428, 458961, C429 || CT.C429, 458962, C430 || CT.C430, 458963, C431 || CT.C431, 458964, C432 || CT.C432, 458967, C433 || CT.C433, 458968, C434 || CT.C434, 458969, C435 || CT.C435, 458976, C436 || CT.C436, 458977, C437 || CT.C437, 458978, C438 || CT.C438, 458979, C439 || CT.C439, 458980, C440 || CT.C440, 458981, C441 || CT.C441, 458982, C442 || CT.C442, 458983, C443 || CT.C443, 786528, C444 || CT.C444, 786529, C445 || CT.C445, 786543, C446 || CT.C446, 786544, C447 || CT.C447, 786546, C448 || CT.C448, 786547, C449 || CT.C449, 786548, C450 || CT.C450, 786549, C451 || CT.C451, 786553, C452 || CT.C452, 786554, C453 || CT.C453, 786563, C454 || CT.C454, 786572, C455 || CT.C455, 786573, C456 || CT.C456, 786580, C457 || CT.C457, 786588, C458 || CT.C458, 786589, C459 || CT.C459, 786608, C460 || CT.C460, 786609, C461 || CT.C461, 786610, C462 || CT.C462, 786611, C463 || CT.C463, 786612, C464 || CT.C464, 786613, C465 || CT.C465, 786614, C466 || CT.C466, 786615, C467 || CT.C467, 786616, C468 || CT.C468, 786637, C469 || CT.C469, 786639, C470 || CT.C470, 786661, C471 || CT.C471, 786819, C472 || CT.C472, 786820, C473 || CT.C473, 786822, C474 || CT.C474, 786826, C475 || CT.C475, 786829, C476 || CT.C476, 786830, C477 || CT.C477, 786834, C478 || CT.C478, 786836, C479 || CT.C479, 786838, C480 || CT.C480, 786844, C481 || CT.C481, 786846, C482 || CT.C482, 786847, C483 || CT.C483, 786850, C484 || CT.C484, 786855, C485 || CT.C485, 786859, C486 || CT.C486, 786862, C487 || CT.C487, 786865, C488 || CT.C488, 786891, C489 || CT.C489, 786871, C490 || CT.C490, 786945, C491 || CT.C491, 786947, C492 || CT.C492, 786951, C493 || CT.C493, 786952, C494 || CT.C494, 786977, C495 || CT.C495, 786979, C496 || CT.C496, 786980, C497 || CT.C497, 786981, C498 || CT.C498, 786982, C499 || CT.C499, 786983, C500 || CT.C500, 786986, C501 || CT.C501, 786989, C502 || CT.C502, 786990, C503 || CT.C503, 786994, C504 || CT.C504, 787065, C505 || CT.C505, 787081, C506 || CT.C506, 787083, C507 || CT.C507, 787084, C508 || CT.C508, 787101, C509 || CT.C509, 787103, C510 || CT.C510, 392961, C511 || CT.C511, 392962, C512 || CT.C512, 392963, C513 || CT.C513, 392964, C514 || CT.C514, 392965, C515 || CT.C515, 392966, C516 || CT.C516, 392967, C517 || CT.C517, 392968, C518 || CT.C518, 392969, C519 || CT.C519, 392970, C520 || CT.C520, 392971, C521 || CT.C521, 392972, C522 || CT.C522, 392973, C523 || CT.C523, 392974, C524 || CT.C524, 392975, C525 || CT.C525, 392976, C526 || CT.C526, 392977, C527 || CT.C527, 392978, C528 || CT.C528, 392979, C529 || CT.C529, 392980, C530 || CT.C530, 392981, C531 || CT.C531, 392982, C532 || CT.C532, 392983, C533 || CT.C533, 392984, C534 || CT.C534, 392985, C535 || CT.C535, 392986, C536 || CT.C536, 392987, C537 || CT.C537, 392988, C538 || CT.C538, 392989, C539 || CT.C539, 392990, C540 || CT.C540, 392991, C541 || CT.C541, 18, C542 || CT.C542]);
    }
  }, false);
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  keyboard_key.KeyboardKey = class KeyboardKey extends Object_Diagnosticable$36 {};
  (keyboard_key.KeyboardKey.new = function() {
    ;
  }).prototype = keyboard_key.KeyboardKey.prototype;
  dart.addTypeTests(keyboard_key.KeyboardKey);
  dart.addTypeCaches(keyboard_key.KeyboardKey);
  dart.setLibraryUri(keyboard_key.KeyboardKey, L0);
  var keyId$ = dart.privateName(keyboard_key, "LogicalKeyboardKey.keyId");
  var debugName$ = dart.privateName(keyboard_key, "LogicalKeyboardKey.debugName");
  var keyLabel$ = dart.privateName(keyboard_key, "LogicalKeyboardKey.keyLabel");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  var C12;
  var C13;
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
  var C35;
  var C36;
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
  var C57;
  var C58;
  var C59;
  var C60;
  var C61;
  var C62;
  var C63;
  var C64;
  var C65;
  var C66;
  var C67;
  var C68;
  var C69;
  var C70;
  var C71;
  var C72;
  var C73;
  var C74;
  var C75;
  var C76;
  var C77;
  var C78;
  var C79;
  var C80;
  var C81;
  var C82;
  var C83;
  var C84;
  var C85;
  var C86;
  var C87;
  var C88;
  var C89;
  var C90;
  var C91;
  var C92;
  var C93;
  var C94;
  var C95;
  var C96;
  var C97;
  var C98;
  var C99;
  var C100;
  var C101;
  var C102;
  var C103;
  var C104;
  var C105;
  var C106;
  var C107;
  var C108;
  var C109;
  var C110;
  var C111;
  var C112;
  var C113;
  var C114;
  var C115;
  var C116;
  var C117;
  var C118;
  var C119;
  var C120;
  var C121;
  var C122;
  var C123;
  var C124;
  var C125;
  var C126;
  var C127;
  var C128;
  var C129;
  var C130;
  var C131;
  var C132;
  var C133;
  var C134;
  var C135;
  var C136;
  var C137;
  var C138;
  var C139;
  var C140;
  var C141;
  var C142;
  var C143;
  var C144;
  var C145;
  var C146;
  var C147;
  var C148;
  var C149;
  var C150;
  var C151;
  var C152;
  var C153;
  var C154;
  var C155;
  var C156;
  var C157;
  var C158;
  var C159;
  var C160;
  var C161;
  var C162;
  var C163;
  var C164;
  var C165;
  var C166;
  var C167;
  var C168;
  var C169;
  var C170;
  var C171;
  var C172;
  var C173;
  var C174;
  var C175;
  var C176;
  var C177;
  var C178;
  var C179;
  var C180;
  var C181;
  var C182;
  var C183;
  var C184;
  var C185;
  var C186;
  var C187;
  var C188;
  var C189;
  var C190;
  var C191;
  var C192;
  var C193;
  var C194;
  var C195;
  var C196;
  var C197;
  var C198;
  var C199;
  var C200;
  var C201;
  var C202;
  var C203;
  var C204;
  var C205;
  var C206;
  var C207;
  var C208;
  var C209;
  var C210;
  var C211;
  var C212;
  var C213;
  var C214;
  var C215;
  var C216;
  var C217;
  var C218;
  var C219;
  var C220;
  var C221;
  var C222;
  var C223;
  var C224;
  var C225;
  var C226;
  var C227;
  var C228;
  var C229;
  var C230;
  var C231;
  var C232;
  var C233;
  var C234;
  var C235;
  var C236;
  var C237;
  var C238;
  var C239;
  var C240;
  var C241;
  var C242;
  var C243;
  var C244;
  var C245;
  var C246;
  var C247;
  var C248;
  var C249;
  var C250;
  var C251;
  var C252;
  var C253;
  var C254;
  var C255;
  var C256;
  var C257;
  var C258;
  var C259;
  var C260;
  var C261;
  var C262;
  var C263;
  var C264;
  var C265;
  var C266;
  var C267;
  var C268;
  var C269;
  var C270;
  var C271;
  var C272;
  var C273;
  keyboard_key.LogicalKeyboardKey = class LogicalKeyboardKey extends keyboard_key.KeyboardKey {
    get keyId() {
      return this[keyId$];
    }
    set keyId(value) {
      super.keyId = value;
    }
    get debugName() {
      return this[debugName$];
    }
    set debugName(value) {
      super.debugName = value;
    }
    get keyLabel() {
      return this[keyLabel$];
    }
    set keyLabel(value) {
      super.keyLabel = value;
    }
    get hashCode() {
      return dart.hashCode(this.keyId);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) {
        return false;
      }
      return keyboard_key.LogicalKeyboardKey.is(other) && other.keyId == this.keyId;
    }
    static findKeyByKeyId(keyId) {
      if (keyId == null) dart.nullFailed(L1, 183, 49, "keyId");
      return keyboard_key.LogicalKeyboardKey._knownLogicalKeys[$_get](keyId);
    }
    static isControlCharacter(label) {
      if (label == null) dart.nullFailed(L1, 194, 41, "label");
      if (label.length !== 1) {
        return false;
      }
      let codeUnit = label[$codeUnitAt](0);
      return codeUnit <= 31 && codeUnit >= 0 || codeUnit >= 127 && codeUnit <= 159;
    }
    get isAutogenerated() {
      return (dart.notNull(this.keyId) & 1099511627776.0) !== 0;
    }
    get synonyms() {
      let result = keyboard_key.LogicalKeyboardKey._synonyms[$_get](this);
      return result == null ? LinkedHashSetOfLogicalKeyboardKey().new() : LinkedHashSetOfLogicalKeyboardKey().from([result]);
    }
    static collapseSynonyms(input) {
      let t0;
      if (input == null) dart.nullFailed(L1, 250, 75, "input");
      let result = LinkedHashSetOfLogicalKeyboardKey().new();
      for (let key of input) {
        let synonym = keyboard_key.LogicalKeyboardKey._synonyms[$_get](key);
        result.add((t0 = synonym, t0 == null ? key : t0));
      }
      return result;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L1, 260, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.StringProperty.new("keyId", "0x" + this.keyId[$toRadixString](16)[$padLeft](8, "0"), {showName: true}));
      properties.add(new diagnostics.StringProperty.new("keyLabel", this.keyLabel, {showName: true}));
      properties.add(new diagnostics.StringProperty.new("debugName", this.debugName, {showName: true, defaultValue: null}));
    }
  };
  (keyboard_key.LogicalKeyboardKey.new = function(keyId, opts) {
    if (keyId == null) dart.nullFailed(L1, 139, 33, "keyId");
    let debugName = opts && 'debugName' in opts ? opts.debugName : null;
    let keyLabel = opts && 'keyLabel' in opts ? opts.keyLabel : "";
    if (keyLabel == null) dart.nullFailed(L1, 139, 62, "keyLabel");
    this[keyId$] = keyId;
    this[debugName$] = debugName;
    this[keyLabel$] = keyLabel;
    if (!(keyId != null)) dart.assertFailed(null, L1, 140, 16, "keyId != null");
    keyboard_key.LogicalKeyboardKey.__proto__.new.call(this);
    ;
  }).prototype = keyboard_key.LogicalKeyboardKey.prototype;
  dart.addTypeTests(keyboard_key.LogicalKeyboardKey);
  dart.addTypeCaches(keyboard_key.LogicalKeyboardKey);
  dart.setGetterSignature(keyboard_key.LogicalKeyboardKey, () => ({
    __proto__: dart.getGetters(keyboard_key.LogicalKeyboardKey.__proto__),
    isAutogenerated: core.bool,
    synonyms: core.Set$(keyboard_key.LogicalKeyboardKey)
  }));
  dart.setLibraryUri(keyboard_key.LogicalKeyboardKey, L0);
  dart.setFieldSignature(keyboard_key.LogicalKeyboardKey, () => ({
    __proto__: dart.getFields(keyboard_key.LogicalKeyboardKey.__proto__),
    keyId: dart.finalFieldType(core.int),
    debugName: dart.finalFieldType(dart.nullable(core.String)),
    keyLabel: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(keyboard_key.LogicalKeyboardKey, ['_equals']);
  dart.defineExtensionAccessors(keyboard_key.LogicalKeyboardKey, ['hashCode']);
  dart.defineLazy(keyboard_key.LogicalKeyboardKey, {
    /*keyboard_key.LogicalKeyboardKey.valueMask*/get valueMask() {
      return 4294967295.0;
    },
    /*keyboard_key.LogicalKeyboardKey.platformMask*/get platformMask() {
      return 1095216660480.0;
    },
    /*keyboard_key.LogicalKeyboardKey.autogeneratedMask*/get autogeneratedMask() {
      return 1099511627776.0;
    },
    /*keyboard_key.LogicalKeyboardKey.synonymMask*/get synonymMask() {
      return 2199023255552.0;
    },
    /*keyboard_key.LogicalKeyboardKey.unicodePlane*/get unicodePlane() {
      return 0;
    },
    /*keyboard_key.LogicalKeyboardKey.hidPlane*/get hidPlane() {
      return 4294967296.0;
    },
    /*keyboard_key.LogicalKeyboardKey.none*/get none() {
      return C0 || CT.C0;
    },
    /*keyboard_key.LogicalKeyboardKey.hyper*/get hyper() {
      return C1 || CT.C1;
    },
    /*keyboard_key.LogicalKeyboardKey.superKey*/get superKey() {
      return C2 || CT.C2;
    },
    /*keyboard_key.LogicalKeyboardKey.fnLock*/get fnLock() {
      return C3 || CT.C3;
    },
    /*keyboard_key.LogicalKeyboardKey.suspend*/get suspend() {
      return C4 || CT.C4;
    },
    /*keyboard_key.LogicalKeyboardKey.resume*/get resume() {
      return C5 || CT.C5;
    },
    /*keyboard_key.LogicalKeyboardKey.turbo*/get turbo() {
      return C6 || CT.C6;
    },
    /*keyboard_key.LogicalKeyboardKey.privacyScreenToggle*/get privacyScreenToggle() {
      return C7 || CT.C7;
    },
    /*keyboard_key.LogicalKeyboardKey.sleep*/get sleep() {
      return C8 || CT.C8;
    },
    /*keyboard_key.LogicalKeyboardKey.wakeUp*/get wakeUp() {
      return C9 || CT.C9;
    },
    /*keyboard_key.LogicalKeyboardKey.displayToggleIntExt*/get displayToggleIntExt() {
      return C10 || CT.C10;
    },
    /*keyboard_key.LogicalKeyboardKey.usbReserved*/get usbReserved() {
      return C11 || CT.C11;
    },
    /*keyboard_key.LogicalKeyboardKey.usbErrorRollOver*/get usbErrorRollOver() {
      return C12 || CT.C12;
    },
    /*keyboard_key.LogicalKeyboardKey.usbPostFail*/get usbPostFail() {
      return C13 || CT.C13;
    },
    /*keyboard_key.LogicalKeyboardKey.usbErrorUndefined*/get usbErrorUndefined() {
      return C14 || CT.C14;
    },
    /*keyboard_key.LogicalKeyboardKey.keyA*/get keyA() {
      return C15 || CT.C15;
    },
    /*keyboard_key.LogicalKeyboardKey.keyB*/get keyB() {
      return C16 || CT.C16;
    },
    /*keyboard_key.LogicalKeyboardKey.keyC*/get keyC() {
      return C17 || CT.C17;
    },
    /*keyboard_key.LogicalKeyboardKey.keyD*/get keyD() {
      return C18 || CT.C18;
    },
    /*keyboard_key.LogicalKeyboardKey.keyE*/get keyE() {
      return C19 || CT.C19;
    },
    /*keyboard_key.LogicalKeyboardKey.keyF*/get keyF() {
      return C20 || CT.C20;
    },
    /*keyboard_key.LogicalKeyboardKey.keyG*/get keyG() {
      return C21 || CT.C21;
    },
    /*keyboard_key.LogicalKeyboardKey.keyH*/get keyH() {
      return C22 || CT.C22;
    },
    /*keyboard_key.LogicalKeyboardKey.keyI*/get keyI() {
      return C23 || CT.C23;
    },
    /*keyboard_key.LogicalKeyboardKey.keyJ*/get keyJ() {
      return C24 || CT.C24;
    },
    /*keyboard_key.LogicalKeyboardKey.keyK*/get keyK() {
      return C25 || CT.C25;
    },
    /*keyboard_key.LogicalKeyboardKey.keyL*/get keyL() {
      return C26 || CT.C26;
    },
    /*keyboard_key.LogicalKeyboardKey.keyM*/get keyM() {
      return C27 || CT.C27;
    },
    /*keyboard_key.LogicalKeyboardKey.keyN*/get keyN() {
      return C28 || CT.C28;
    },
    /*keyboard_key.LogicalKeyboardKey.keyO*/get keyO() {
      return C29 || CT.C29;
    },
    /*keyboard_key.LogicalKeyboardKey.keyP*/get keyP() {
      return C30 || CT.C30;
    },
    /*keyboard_key.LogicalKeyboardKey.keyQ*/get keyQ() {
      return C31 || CT.C31;
    },
    /*keyboard_key.LogicalKeyboardKey.keyR*/get keyR() {
      return C32 || CT.C32;
    },
    /*keyboard_key.LogicalKeyboardKey.keyS*/get keyS() {
      return C33 || CT.C33;
    },
    /*keyboard_key.LogicalKeyboardKey.keyT*/get keyT() {
      return C34 || CT.C34;
    },
    /*keyboard_key.LogicalKeyboardKey.keyU*/get keyU() {
      return C35 || CT.C35;
    },
    /*keyboard_key.LogicalKeyboardKey.keyV*/get keyV() {
      return C36 || CT.C36;
    },
    /*keyboard_key.LogicalKeyboardKey.keyW*/get keyW() {
      return C37 || CT.C37;
    },
    /*keyboard_key.LogicalKeyboardKey.keyX*/get keyX() {
      return C38 || CT.C38;
    },
    /*keyboard_key.LogicalKeyboardKey.keyY*/get keyY() {
      return C39 || CT.C39;
    },
    /*keyboard_key.LogicalKeyboardKey.keyZ*/get keyZ() {
      return C40 || CT.C40;
    },
    /*keyboard_key.LogicalKeyboardKey.digit1*/get digit1() {
      return C41 || CT.C41;
    },
    /*keyboard_key.LogicalKeyboardKey.digit2*/get digit2() {
      return C42 || CT.C42;
    },
    /*keyboard_key.LogicalKeyboardKey.digit3*/get digit3() {
      return C43 || CT.C43;
    },
    /*keyboard_key.LogicalKeyboardKey.digit4*/get digit4() {
      return C44 || CT.C44;
    },
    /*keyboard_key.LogicalKeyboardKey.digit5*/get digit5() {
      return C45 || CT.C45;
    },
    /*keyboard_key.LogicalKeyboardKey.digit6*/get digit6() {
      return C46 || CT.C46;
    },
    /*keyboard_key.LogicalKeyboardKey.digit7*/get digit7() {
      return C47 || CT.C47;
    },
    /*keyboard_key.LogicalKeyboardKey.digit8*/get digit8() {
      return C48 || CT.C48;
    },
    /*keyboard_key.LogicalKeyboardKey.digit9*/get digit9() {
      return C49 || CT.C49;
    },
    /*keyboard_key.LogicalKeyboardKey.digit0*/get digit0() {
      return C50 || CT.C50;
    },
    /*keyboard_key.LogicalKeyboardKey.enter*/get enter() {
      return C51 || CT.C51;
    },
    /*keyboard_key.LogicalKeyboardKey.escape*/get escape() {
      return C52 || CT.C52;
    },
    /*keyboard_key.LogicalKeyboardKey.backspace*/get backspace() {
      return C53 || CT.C53;
    },
    /*keyboard_key.LogicalKeyboardKey.tab*/get tab() {
      return C54 || CT.C54;
    },
    /*keyboard_key.LogicalKeyboardKey.space*/get space() {
      return C55 || CT.C55;
    },
    /*keyboard_key.LogicalKeyboardKey.minus*/get minus() {
      return C56 || CT.C56;
    },
    /*keyboard_key.LogicalKeyboardKey.equal*/get equal() {
      return C57 || CT.C57;
    },
    /*keyboard_key.LogicalKeyboardKey.bracketLeft*/get bracketLeft() {
      return C58 || CT.C58;
    },
    /*keyboard_key.LogicalKeyboardKey.bracketRight*/get bracketRight() {
      return C59 || CT.C59;
    },
    /*keyboard_key.LogicalKeyboardKey.backslash*/get backslash() {
      return C60 || CT.C60;
    },
    /*keyboard_key.LogicalKeyboardKey.semicolon*/get semicolon() {
      return C61 || CT.C61;
    },
    /*keyboard_key.LogicalKeyboardKey.quote*/get quote() {
      return C62 || CT.C62;
    },
    /*keyboard_key.LogicalKeyboardKey.backquote*/get backquote() {
      return C63 || CT.C63;
    },
    /*keyboard_key.LogicalKeyboardKey.comma*/get comma() {
      return C64 || CT.C64;
    },
    /*keyboard_key.LogicalKeyboardKey.period*/get period() {
      return C65 || CT.C65;
    },
    /*keyboard_key.LogicalKeyboardKey.slash*/get slash() {
      return C66 || CT.C66;
    },
    /*keyboard_key.LogicalKeyboardKey.capsLock*/get capsLock() {
      return C67 || CT.C67;
    },
    /*keyboard_key.LogicalKeyboardKey.f1*/get f1() {
      return C68 || CT.C68;
    },
    /*keyboard_key.LogicalKeyboardKey.f2*/get f2() {
      return C69 || CT.C69;
    },
    /*keyboard_key.LogicalKeyboardKey.f3*/get f3() {
      return C70 || CT.C70;
    },
    /*keyboard_key.LogicalKeyboardKey.f4*/get f4() {
      return C71 || CT.C71;
    },
    /*keyboard_key.LogicalKeyboardKey.f5*/get f5() {
      return C72 || CT.C72;
    },
    /*keyboard_key.LogicalKeyboardKey.f6*/get f6() {
      return C73 || CT.C73;
    },
    /*keyboard_key.LogicalKeyboardKey.f7*/get f7() {
      return C74 || CT.C74;
    },
    /*keyboard_key.LogicalKeyboardKey.f8*/get f8() {
      return C75 || CT.C75;
    },
    /*keyboard_key.LogicalKeyboardKey.f9*/get f9() {
      return C76 || CT.C76;
    },
    /*keyboard_key.LogicalKeyboardKey.f10*/get f10() {
      return C77 || CT.C77;
    },
    /*keyboard_key.LogicalKeyboardKey.f11*/get f11() {
      return C78 || CT.C78;
    },
    /*keyboard_key.LogicalKeyboardKey.f12*/get f12() {
      return C79 || CT.C79;
    },
    /*keyboard_key.LogicalKeyboardKey.printScreen*/get printScreen() {
      return C80 || CT.C80;
    },
    /*keyboard_key.LogicalKeyboardKey.scrollLock*/get scrollLock() {
      return C81 || CT.C81;
    },
    /*keyboard_key.LogicalKeyboardKey.pause*/get pause() {
      return C82 || CT.C82;
    },
    /*keyboard_key.LogicalKeyboardKey.insert*/get insert() {
      return C83 || CT.C83;
    },
    /*keyboard_key.LogicalKeyboardKey.home*/get home() {
      return C84 || CT.C84;
    },
    /*keyboard_key.LogicalKeyboardKey.pageUp*/get pageUp() {
      return C85 || CT.C85;
    },
    /*keyboard_key.LogicalKeyboardKey.delete*/get delete() {
      return C86 || CT.C86;
    },
    /*keyboard_key.LogicalKeyboardKey.end*/get end() {
      return C87 || CT.C87;
    },
    /*keyboard_key.LogicalKeyboardKey.pageDown*/get pageDown() {
      return C88 || CT.C88;
    },
    /*keyboard_key.LogicalKeyboardKey.arrowRight*/get arrowRight() {
      return C89 || CT.C89;
    },
    /*keyboard_key.LogicalKeyboardKey.arrowLeft*/get arrowLeft() {
      return C90 || CT.C90;
    },
    /*keyboard_key.LogicalKeyboardKey.arrowDown*/get arrowDown() {
      return C91 || CT.C91;
    },
    /*keyboard_key.LogicalKeyboardKey.arrowUp*/get arrowUp() {
      return C92 || CT.C92;
    },
    /*keyboard_key.LogicalKeyboardKey.numLock*/get numLock() {
      return C93 || CT.C93;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadDivide*/get numpadDivide() {
      return C94 || CT.C94;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMultiply*/get numpadMultiply() {
      return C95 || CT.C95;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadSubtract*/get numpadSubtract() {
      return C96 || CT.C96;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadAdd*/get numpadAdd() {
      return C97 || CT.C97;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadEnter*/get numpadEnter() {
      return C98 || CT.C98;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad1*/get numpad1() {
      return C99 || CT.C99;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad2*/get numpad2() {
      return C100 || CT.C100;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad3*/get numpad3() {
      return C101 || CT.C101;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad4*/get numpad4() {
      return C102 || CT.C102;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad5*/get numpad5() {
      return C103 || CT.C103;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad6*/get numpad6() {
      return C104 || CT.C104;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad7*/get numpad7() {
      return C105 || CT.C105;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad8*/get numpad8() {
      return C106 || CT.C106;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad9*/get numpad9() {
      return C107 || CT.C107;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad0*/get numpad0() {
      return C108 || CT.C108;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadDecimal*/get numpadDecimal() {
      return C109 || CT.C109;
    },
    /*keyboard_key.LogicalKeyboardKey.intlBackslash*/get intlBackslash() {
      return C110 || CT.C110;
    },
    /*keyboard_key.LogicalKeyboardKey.contextMenu*/get contextMenu() {
      return C111 || CT.C111;
    },
    /*keyboard_key.LogicalKeyboardKey.power*/get power() {
      return C112 || CT.C112;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadEqual*/get numpadEqual() {
      return C113 || CT.C113;
    },
    /*keyboard_key.LogicalKeyboardKey.f13*/get f13() {
      return C114 || CT.C114;
    },
    /*keyboard_key.LogicalKeyboardKey.f14*/get f14() {
      return C115 || CT.C115;
    },
    /*keyboard_key.LogicalKeyboardKey.f15*/get f15() {
      return C116 || CT.C116;
    },
    /*keyboard_key.LogicalKeyboardKey.f16*/get f16() {
      return C117 || CT.C117;
    },
    /*keyboard_key.LogicalKeyboardKey.f17*/get f17() {
      return C118 || CT.C118;
    },
    /*keyboard_key.LogicalKeyboardKey.f18*/get f18() {
      return C119 || CT.C119;
    },
    /*keyboard_key.LogicalKeyboardKey.f19*/get f19() {
      return C120 || CT.C120;
    },
    /*keyboard_key.LogicalKeyboardKey.f20*/get f20() {
      return C121 || CT.C121;
    },
    /*keyboard_key.LogicalKeyboardKey.f21*/get f21() {
      return C122 || CT.C122;
    },
    /*keyboard_key.LogicalKeyboardKey.f22*/get f22() {
      return C123 || CT.C123;
    },
    /*keyboard_key.LogicalKeyboardKey.f23*/get f23() {
      return C124 || CT.C124;
    },
    /*keyboard_key.LogicalKeyboardKey.f24*/get f24() {
      return C125 || CT.C125;
    },
    /*keyboard_key.LogicalKeyboardKey.open*/get open() {
      return C126 || CT.C126;
    },
    /*keyboard_key.LogicalKeyboardKey.help*/get help() {
      return C127 || CT.C127;
    },
    /*keyboard_key.LogicalKeyboardKey.select*/get select() {
      return C128 || CT.C128;
    },
    /*keyboard_key.LogicalKeyboardKey.again*/get again() {
      return C129 || CT.C129;
    },
    /*keyboard_key.LogicalKeyboardKey.undo*/get undo() {
      return C130 || CT.C130;
    },
    /*keyboard_key.LogicalKeyboardKey.cut*/get cut() {
      return C131 || CT.C131;
    },
    /*keyboard_key.LogicalKeyboardKey.copy*/get copy() {
      return C132 || CT.C132;
    },
    /*keyboard_key.LogicalKeyboardKey.paste*/get paste() {
      return C133 || CT.C133;
    },
    /*keyboard_key.LogicalKeyboardKey.find*/get find() {
      return C134 || CT.C134;
    },
    /*keyboard_key.LogicalKeyboardKey.audioVolumeMute*/get audioVolumeMute() {
      return C135 || CT.C135;
    },
    /*keyboard_key.LogicalKeyboardKey.audioVolumeUp*/get audioVolumeUp() {
      return C136 || CT.C136;
    },
    /*keyboard_key.LogicalKeyboardKey.audioVolumeDown*/get audioVolumeDown() {
      return C137 || CT.C137;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadComma*/get numpadComma() {
      return C138 || CT.C138;
    },
    /*keyboard_key.LogicalKeyboardKey.intlRo*/get intlRo() {
      return C139 || CT.C139;
    },
    /*keyboard_key.LogicalKeyboardKey.kanaMode*/get kanaMode() {
      return C140 || CT.C140;
    },
    /*keyboard_key.LogicalKeyboardKey.intlYen*/get intlYen() {
      return C141 || CT.C141;
    },
    /*keyboard_key.LogicalKeyboardKey.convert*/get convert() {
      return C142 || CT.C142;
    },
    /*keyboard_key.LogicalKeyboardKey.nonConvert*/get nonConvert() {
      return C143 || CT.C143;
    },
    /*keyboard_key.LogicalKeyboardKey.lang1*/get lang1() {
      return C144 || CT.C144;
    },
    /*keyboard_key.LogicalKeyboardKey.lang2*/get lang2() {
      return C145 || CT.C145;
    },
    /*keyboard_key.LogicalKeyboardKey.lang3*/get lang3() {
      return C146 || CT.C146;
    },
    /*keyboard_key.LogicalKeyboardKey.lang4*/get lang4() {
      return C147 || CT.C147;
    },
    /*keyboard_key.LogicalKeyboardKey.lang5*/get lang5() {
      return C148 || CT.C148;
    },
    /*keyboard_key.LogicalKeyboardKey.abort*/get abort() {
      return C149 || CT.C149;
    },
    /*keyboard_key.LogicalKeyboardKey.props*/get props() {
      return C150 || CT.C150;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadParenLeft*/get numpadParenLeft() {
      return C151 || CT.C151;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadParenRight*/get numpadParenRight() {
      return C152 || CT.C152;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadBackspace*/get numpadBackspace() {
      return C153 || CT.C153;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMemoryStore*/get numpadMemoryStore() {
      return C154 || CT.C154;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMemoryRecall*/get numpadMemoryRecall() {
      return C155 || CT.C155;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMemoryClear*/get numpadMemoryClear() {
      return C156 || CT.C156;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMemoryAdd*/get numpadMemoryAdd() {
      return C157 || CT.C157;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMemorySubtract*/get numpadMemorySubtract() {
      return C158 || CT.C158;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadSignChange*/get numpadSignChange() {
      return C159 || CT.C159;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadClear*/get numpadClear() {
      return C160 || CT.C160;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadClearEntry*/get numpadClearEntry() {
      return C161 || CT.C161;
    },
    /*keyboard_key.LogicalKeyboardKey.controlLeft*/get controlLeft() {
      return C162 || CT.C162;
    },
    /*keyboard_key.LogicalKeyboardKey.shiftLeft*/get shiftLeft() {
      return C163 || CT.C163;
    },
    /*keyboard_key.LogicalKeyboardKey.altLeft*/get altLeft() {
      return C164 || CT.C164;
    },
    /*keyboard_key.LogicalKeyboardKey.metaLeft*/get metaLeft() {
      return C165 || CT.C165;
    },
    /*keyboard_key.LogicalKeyboardKey.controlRight*/get controlRight() {
      return C166 || CT.C166;
    },
    /*keyboard_key.LogicalKeyboardKey.shiftRight*/get shiftRight() {
      return C167 || CT.C167;
    },
    /*keyboard_key.LogicalKeyboardKey.altRight*/get altRight() {
      return C168 || CT.C168;
    },
    /*keyboard_key.LogicalKeyboardKey.metaRight*/get metaRight() {
      return C169 || CT.C169;
    },
    /*keyboard_key.LogicalKeyboardKey.info*/get info() {
      return C170 || CT.C170;
    },
    /*keyboard_key.LogicalKeyboardKey.closedCaptionToggle*/get closedCaptionToggle() {
      return C171 || CT.C171;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessUp*/get brightnessUp() {
      return C172 || CT.C172;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessDown*/get brightnessDown() {
      return C173 || CT.C173;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessToggle*/get brightnessToggle() {
      return C174 || CT.C174;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessMinimum*/get brightnessMinimum() {
      return C175 || CT.C175;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessMaximum*/get brightnessMaximum() {
      return C176 || CT.C176;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessAuto*/get brightnessAuto() {
      return C177 || CT.C177;
    },
    /*keyboard_key.LogicalKeyboardKey.kbdIllumUp*/get kbdIllumUp() {
      return C178 || CT.C178;
    },
    /*keyboard_key.LogicalKeyboardKey.kbdIllumDown*/get kbdIllumDown() {
      return C179 || CT.C179;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaLast*/get mediaLast() {
      return C180 || CT.C180;
    },
    /*keyboard_key.LogicalKeyboardKey.launchPhone*/get launchPhone() {
      return C181 || CT.C181;
    },
    /*keyboard_key.LogicalKeyboardKey.programGuide*/get programGuide() {
      return C182 || CT.C182;
    },
    /*keyboard_key.LogicalKeyboardKey.exit*/get exit() {
      return C183 || CT.C183;
    },
    /*keyboard_key.LogicalKeyboardKey.channelUp*/get channelUp() {
      return C184 || CT.C184;
    },
    /*keyboard_key.LogicalKeyboardKey.channelDown*/get channelDown() {
      return C185 || CT.C185;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaPlay*/get mediaPlay() {
      return C186 || CT.C186;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaPause*/get mediaPause() {
      return C187 || CT.C187;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaRecord*/get mediaRecord() {
      return C188 || CT.C188;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaFastForward*/get mediaFastForward() {
      return C189 || CT.C189;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaRewind*/get mediaRewind() {
      return C190 || CT.C190;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaTrackNext*/get mediaTrackNext() {
      return C191 || CT.C191;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaTrackPrevious*/get mediaTrackPrevious() {
      return C192 || CT.C192;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaStop*/get mediaStop() {
      return C193 || CT.C193;
    },
    /*keyboard_key.LogicalKeyboardKey.eject*/get eject() {
      return C194 || CT.C194;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaPlayPause*/get mediaPlayPause() {
      return C195 || CT.C195;
    },
    /*keyboard_key.LogicalKeyboardKey.speechInputToggle*/get speechInputToggle() {
      return C196 || CT.C196;
    },
    /*keyboard_key.LogicalKeyboardKey.bassBoost*/get bassBoost() {
      return C197 || CT.C197;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaSelect*/get mediaSelect() {
      return C198 || CT.C198;
    },
    /*keyboard_key.LogicalKeyboardKey.launchWordProcessor*/get launchWordProcessor() {
      return C199 || CT.C199;
    },
    /*keyboard_key.LogicalKeyboardKey.launchSpreadsheet*/get launchSpreadsheet() {
      return C200 || CT.C200;
    },
    /*keyboard_key.LogicalKeyboardKey.launchMail*/get launchMail() {
      return C201 || CT.C201;
    },
    /*keyboard_key.LogicalKeyboardKey.launchContacts*/get launchContacts() {
      return C202 || CT.C202;
    },
    /*keyboard_key.LogicalKeyboardKey.launchCalendar*/get launchCalendar() {
      return C203 || CT.C203;
    },
    /*keyboard_key.LogicalKeyboardKey.launchApp2*/get launchApp2() {
      return C204 || CT.C204;
    },
    /*keyboard_key.LogicalKeyboardKey.launchApp1*/get launchApp1() {
      return C205 || CT.C205;
    },
    /*keyboard_key.LogicalKeyboardKey.launchInternetBrowser*/get launchInternetBrowser() {
      return C206 || CT.C206;
    },
    /*keyboard_key.LogicalKeyboardKey.logOff*/get logOff() {
      return C207 || CT.C207;
    },
    /*keyboard_key.LogicalKeyboardKey.lockScreen*/get lockScreen() {
      return C208 || CT.C208;
    },
    /*keyboard_key.LogicalKeyboardKey.launchControlPanel*/get launchControlPanel() {
      return C209 || CT.C209;
    },
    /*keyboard_key.LogicalKeyboardKey.selectTask*/get selectTask() {
      return C210 || CT.C210;
    },
    /*keyboard_key.LogicalKeyboardKey.launchDocuments*/get launchDocuments() {
      return C211 || CT.C211;
    },
    /*keyboard_key.LogicalKeyboardKey.spellCheck*/get spellCheck() {
      return C212 || CT.C212;
    },
    /*keyboard_key.LogicalKeyboardKey.launchKeyboardLayout*/get launchKeyboardLayout() {
      return C213 || CT.C213;
    },
    /*keyboard_key.LogicalKeyboardKey.launchScreenSaver*/get launchScreenSaver() {
      return C214 || CT.C214;
    },
    /*keyboard_key.LogicalKeyboardKey.launchAssistant*/get launchAssistant() {
      return C215 || CT.C215;
    },
    /*keyboard_key.LogicalKeyboardKey.launchAudioBrowser*/get launchAudioBrowser() {
      return C216 || CT.C216;
    },
    /*keyboard_key.LogicalKeyboardKey.newKey*/get newKey() {
      return C217 || CT.C217;
    },
    /*keyboard_key.LogicalKeyboardKey.close*/get close() {
      return C218 || CT.C218;
    },
    /*keyboard_key.LogicalKeyboardKey.save*/get save() {
      return C219 || CT.C219;
    },
    /*keyboard_key.LogicalKeyboardKey.print*/get print() {
      return C220 || CT.C220;
    },
    /*keyboard_key.LogicalKeyboardKey.browserSearch*/get browserSearch() {
      return C221 || CT.C221;
    },
    /*keyboard_key.LogicalKeyboardKey.browserHome*/get browserHome() {
      return C222 || CT.C222;
    },
    /*keyboard_key.LogicalKeyboardKey.browserBack*/get browserBack() {
      return C223 || CT.C223;
    },
    /*keyboard_key.LogicalKeyboardKey.browserForward*/get browserForward() {
      return C224 || CT.C224;
    },
    /*keyboard_key.LogicalKeyboardKey.browserStop*/get browserStop() {
      return C225 || CT.C225;
    },
    /*keyboard_key.LogicalKeyboardKey.browserRefresh*/get browserRefresh() {
      return C226 || CT.C226;
    },
    /*keyboard_key.LogicalKeyboardKey.browserFavorites*/get browserFavorites() {
      return C227 || CT.C227;
    },
    /*keyboard_key.LogicalKeyboardKey.zoomIn*/get zoomIn() {
      return C228 || CT.C228;
    },
    /*keyboard_key.LogicalKeyboardKey.zoomOut*/get zoomOut() {
      return C229 || CT.C229;
    },
    /*keyboard_key.LogicalKeyboardKey.zoomToggle*/get zoomToggle() {
      return C230 || CT.C230;
    },
    /*keyboard_key.LogicalKeyboardKey.redo*/get redo() {
      return C231 || CT.C231;
    },
    /*keyboard_key.LogicalKeyboardKey.mailReply*/get mailReply() {
      return C232 || CT.C232;
    },
    /*keyboard_key.LogicalKeyboardKey.mailForward*/get mailForward() {
      return C233 || CT.C233;
    },
    /*keyboard_key.LogicalKeyboardKey.mailSend*/get mailSend() {
      return C234 || CT.C234;
    },
    /*keyboard_key.LogicalKeyboardKey.keyboardLayoutSelect*/get keyboardLayoutSelect() {
      return C235 || CT.C235;
    },
    /*keyboard_key.LogicalKeyboardKey.showAllWindows*/get showAllWindows() {
      return C236 || CT.C236;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton1*/get gameButton1() {
      return C237 || CT.C237;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton2*/get gameButton2() {
      return C238 || CT.C238;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton3*/get gameButton3() {
      return C239 || CT.C239;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton4*/get gameButton4() {
      return C240 || CT.C240;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton5*/get gameButton5() {
      return C241 || CT.C241;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton6*/get gameButton6() {
      return C242 || CT.C242;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton7*/get gameButton7() {
      return C243 || CT.C243;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton8*/get gameButton8() {
      return C244 || CT.C244;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton9*/get gameButton9() {
      return C245 || CT.C245;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton10*/get gameButton10() {
      return C246 || CT.C246;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton11*/get gameButton11() {
      return C247 || CT.C247;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton12*/get gameButton12() {
      return C248 || CT.C248;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton13*/get gameButton13() {
      return C249 || CT.C249;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton14*/get gameButton14() {
      return C250 || CT.C250;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton15*/get gameButton15() {
      return C251 || CT.C251;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton16*/get gameButton16() {
      return C252 || CT.C252;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonA*/get gameButtonA() {
      return C253 || CT.C253;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonB*/get gameButtonB() {
      return C254 || CT.C254;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonC*/get gameButtonC() {
      return C255 || CT.C255;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonLeft1*/get gameButtonLeft1() {
      return C256 || CT.C256;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonLeft2*/get gameButtonLeft2() {
      return C257 || CT.C257;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonMode*/get gameButtonMode() {
      return C258 || CT.C258;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonRight1*/get gameButtonRight1() {
      return C259 || CT.C259;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonRight2*/get gameButtonRight2() {
      return C260 || CT.C260;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonSelect*/get gameButtonSelect() {
      return C261 || CT.C261;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonStart*/get gameButtonStart() {
      return C262 || CT.C262;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonThumbLeft*/get gameButtonThumbLeft() {
      return C263 || CT.C263;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonThumbRight*/get gameButtonThumbRight() {
      return C264 || CT.C264;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonX*/get gameButtonX() {
      return C265 || CT.C265;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonY*/get gameButtonY() {
      return C266 || CT.C266;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonZ*/get gameButtonZ() {
      return C267 || CT.C267;
    },
    /*keyboard_key.LogicalKeyboardKey.fn*/get fn() {
      return C268 || CT.C268;
    },
    /*keyboard_key.LogicalKeyboardKey.shift*/get shift() {
      return C269 || CT.C269;
    },
    /*keyboard_key.LogicalKeyboardKey.meta*/get meta() {
      return C270 || CT.C270;
    },
    /*keyboard_key.LogicalKeyboardKey.alt*/get alt() {
      return C271 || CT.C271;
    },
    /*keyboard_key.LogicalKeyboardKey.control*/get control() {
      return C272 || CT.C272;
    },
    /*keyboard_key.LogicalKeyboardKey._knownLogicalKeys*/get _knownLogicalKeys() {
      return C273 || CT.C273;
    },
    /*keyboard_key.LogicalKeyboardKey._synonyms*/get _synonyms() {
      return new (LinkedMapOfLogicalKeyboardKey$LogicalKeyboardKey()).from([keyboard_key.LogicalKeyboardKey.shiftLeft, keyboard_key.LogicalKeyboardKey.shift, keyboard_key.LogicalKeyboardKey.shiftRight, keyboard_key.LogicalKeyboardKey.shift, keyboard_key.LogicalKeyboardKey.metaLeft, keyboard_key.LogicalKeyboardKey.meta, keyboard_key.LogicalKeyboardKey.metaRight, keyboard_key.LogicalKeyboardKey.meta, keyboard_key.LogicalKeyboardKey.altLeft, keyboard_key.LogicalKeyboardKey.alt, keyboard_key.LogicalKeyboardKey.altRight, keyboard_key.LogicalKeyboardKey.alt, keyboard_key.LogicalKeyboardKey.controlLeft, keyboard_key.LogicalKeyboardKey.control, keyboard_key.LogicalKeyboardKey.controlRight, keyboard_key.LogicalKeyboardKey.control]);
    }
  }, false);
  var usbHidUsage$ = dart.privateName(keyboard_key, "PhysicalKeyboardKey.usbHidUsage");
  var debugName$0 = dart.privateName(keyboard_key, "PhysicalKeyboardKey.debugName");
  var C274;
  var C275;
  var C276;
  var C277;
  var C278;
  var C279;
  var C280;
  var C281;
  var C282;
  var C283;
  var C284;
  var C285;
  var C286;
  var C287;
  var C288;
  var C289;
  var C290;
  var C291;
  var C292;
  var C293;
  var C294;
  var C295;
  var C296;
  var C297;
  var C298;
  var C299;
  var C300;
  var C301;
  var C302;
  var C303;
  var C304;
  var C305;
  var C306;
  var C307;
  var C308;
  var C309;
  var C310;
  var C311;
  var C312;
  var C313;
  var C314;
  var C315;
  var C316;
  var C317;
  var C318;
  var C319;
  var C320;
  var C321;
  var C322;
  var C323;
  var C324;
  var C325;
  var C326;
  var C327;
  var C328;
  var C329;
  var C330;
  var C331;
  var C332;
  var C333;
  var C334;
  var C335;
  var C336;
  var C337;
  var C338;
  var C339;
  var C340;
  var C341;
  var C342;
  var C343;
  var C344;
  var C345;
  var C346;
  var C347;
  var C348;
  var C349;
  var C350;
  var C351;
  var C352;
  var C353;
  var C354;
  var C355;
  var C356;
  var C357;
  var C358;
  var C359;
  var C360;
  var C361;
  var C362;
  var C363;
  var C364;
  var C365;
  var C366;
  var C367;
  var C368;
  var C369;
  var C370;
  var C371;
  var C372;
  var C373;
  var C374;
  var C375;
  var C376;
  var C377;
  var C378;
  var C379;
  var C380;
  var C381;
  var C382;
  var C383;
  var C384;
  var C385;
  var C386;
  var C387;
  var C388;
  var C389;
  var C390;
  var C391;
  var C392;
  var C393;
  var C394;
  var C395;
  var C396;
  var C397;
  var C398;
  var C399;
  var C400;
  var C401;
  var C402;
  var C403;
  var C404;
  var C405;
  var C406;
  var C407;
  var C408;
  var C409;
  var C410;
  var C411;
  var C412;
  var C413;
  var C414;
  var C415;
  var C416;
  var C417;
  var C418;
  var C419;
  var C420;
  var C421;
  var C422;
  var C423;
  var C424;
  var C425;
  var C426;
  var C427;
  var C428;
  var C429;
  var C430;
  var C431;
  var C432;
  var C433;
  var C434;
  var C435;
  var C436;
  var C437;
  var C438;
  var C439;
  var C440;
  var C441;
  var C442;
  var C443;
  var C444;
  var C445;
  var C446;
  var C447;
  var C448;
  var C449;
  var C450;
  var C451;
  var C452;
  var C453;
  var C454;
  var C455;
  var C456;
  var C457;
  var C458;
  var C459;
  var C460;
  var C461;
  var C462;
  var C463;
  var C464;
  var C465;
  var C466;
  var C467;
  var C468;
  var C469;
  var C470;
  var C471;
  var C472;
  var C473;
  var C474;
  var C475;
  var C476;
  var C477;
  var C478;
  var C479;
  var C480;
  var C481;
  var C482;
  var C483;
  var C484;
  var C485;
  var C486;
  var C487;
  var C488;
  var C489;
  var C490;
  var C491;
  var C492;
  var C493;
  var C494;
  var C495;
  var C496;
  var C497;
  var C498;
  var C499;
  var C500;
  var C501;
  var C502;
  var C503;
  var C504;
  var C505;
  var C506;
  var C507;
  var C508;
  var C509;
  var C510;
  var C511;
  var C512;
  var C513;
  var C514;
  var C515;
  var C516;
  var C517;
  var C518;
  var C519;
  var C520;
  var C521;
  var C522;
  var C523;
  var C524;
  var C525;
  var C526;
  var C527;
  var C528;
  var C529;
  var C530;
  var C531;
  var C532;
  var C533;
  var C534;
  var C535;
  var C536;
  var C537;
  var C538;
  var C539;
  var C540;
  var C541;
  var C542;
  var C543;
  keyboard_key.PhysicalKeyboardKey = class PhysicalKeyboardKey extends keyboard_key.KeyboardKey {
    get usbHidUsage() {
      return this[usbHidUsage$];
    }
    set usbHidUsage(value) {
      super.usbHidUsage = value;
    }
    get debugName() {
      return this[debugName$0];
    }
    set debugName(value) {
      super.debugName = value;
    }
    static findKeyByCode(usageCode) {
      if (usageCode == null) dart.nullFailed(L1, 2094, 49, "usageCode");
      return keyboard_key.PhysicalKeyboardKey._knownPhysicalKeys[$_get](usageCode);
    }
    get hashCode() {
      return dart.hashCode(this.usbHidUsage);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) {
        return false;
      }
      return keyboard_key.PhysicalKeyboardKey.is(other) && other.usbHidUsage == this.usbHidUsage;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L1, 2109, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.StringProperty.new("usbHidUsage", "0x" + this.usbHidUsage[$toRadixString](16)[$padLeft](8, "0"), {showName: true}));
      properties.add(new diagnostics.StringProperty.new("debugName", this.debugName, {showName: true, defaultValue: null}));
    }
  };
  (keyboard_key.PhysicalKeyboardKey.new = function(usbHidUsage, opts) {
    if (usbHidUsage == null) dart.nullFailed(L1, 2075, 34, "usbHidUsage");
    let debugName = opts && 'debugName' in opts ? opts.debugName : null;
    this[usbHidUsage$] = usbHidUsage;
    this[debugName$0] = debugName;
    if (!(usbHidUsage != null)) dart.assertFailed(null, L1, 2076, 16, "usbHidUsage != null");
    keyboard_key.PhysicalKeyboardKey.__proto__.new.call(this);
    ;
  }).prototype = keyboard_key.PhysicalKeyboardKey.prototype;
  dart.addTypeTests(keyboard_key.PhysicalKeyboardKey);
  dart.addTypeCaches(keyboard_key.PhysicalKeyboardKey);
  dart.setLibraryUri(keyboard_key.PhysicalKeyboardKey, L0);
  dart.setFieldSignature(keyboard_key.PhysicalKeyboardKey, () => ({
    __proto__: dart.getFields(keyboard_key.PhysicalKeyboardKey.__proto__),
    usbHidUsage: dart.finalFieldType(core.int),
    debugName: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionMethods(keyboard_key.PhysicalKeyboardKey, ['_equals']);
  dart.defineExtensionAccessors(keyboard_key.PhysicalKeyboardKey, ['hashCode']);
  dart.defineLazy(keyboard_key.PhysicalKeyboardKey, {
    /*keyboard_key.PhysicalKeyboardKey.none*/get none() {
      return C274 || CT.C274;
    },
    /*keyboard_key.PhysicalKeyboardKey.hyper*/get hyper() {
      return C275 || CT.C275;
    },
    /*keyboard_key.PhysicalKeyboardKey.superKey*/get superKey() {
      return C276 || CT.C276;
    },
    /*keyboard_key.PhysicalKeyboardKey.fnLock*/get fnLock() {
      return C277 || CT.C277;
    },
    /*keyboard_key.PhysicalKeyboardKey.suspend*/get suspend() {
      return C278 || CT.C278;
    },
    /*keyboard_key.PhysicalKeyboardKey.resume*/get resume() {
      return C279 || CT.C279;
    },
    /*keyboard_key.PhysicalKeyboardKey.turbo*/get turbo() {
      return C280 || CT.C280;
    },
    /*keyboard_key.PhysicalKeyboardKey.privacyScreenToggle*/get privacyScreenToggle() {
      return C281 || CT.C281;
    },
    /*keyboard_key.PhysicalKeyboardKey.sleep*/get sleep() {
      return C282 || CT.C282;
    },
    /*keyboard_key.PhysicalKeyboardKey.wakeUp*/get wakeUp() {
      return C283 || CT.C283;
    },
    /*keyboard_key.PhysicalKeyboardKey.displayToggleIntExt*/get displayToggleIntExt() {
      return C284 || CT.C284;
    },
    /*keyboard_key.PhysicalKeyboardKey.usbReserved*/get usbReserved() {
      return C285 || CT.C285;
    },
    /*keyboard_key.PhysicalKeyboardKey.usbErrorRollOver*/get usbErrorRollOver() {
      return C286 || CT.C286;
    },
    /*keyboard_key.PhysicalKeyboardKey.usbPostFail*/get usbPostFail() {
      return C287 || CT.C287;
    },
    /*keyboard_key.PhysicalKeyboardKey.usbErrorUndefined*/get usbErrorUndefined() {
      return C288 || CT.C288;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyA*/get keyA() {
      return C289 || CT.C289;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyB*/get keyB() {
      return C290 || CT.C290;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyC*/get keyC() {
      return C291 || CT.C291;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyD*/get keyD() {
      return C292 || CT.C292;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyE*/get keyE() {
      return C293 || CT.C293;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyF*/get keyF() {
      return C294 || CT.C294;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyG*/get keyG() {
      return C295 || CT.C295;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyH*/get keyH() {
      return C296 || CT.C296;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyI*/get keyI() {
      return C297 || CT.C297;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyJ*/get keyJ() {
      return C298 || CT.C298;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyK*/get keyK() {
      return C299 || CT.C299;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyL*/get keyL() {
      return C300 || CT.C300;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyM*/get keyM() {
      return C301 || CT.C301;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyN*/get keyN() {
      return C302 || CT.C302;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyO*/get keyO() {
      return C303 || CT.C303;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyP*/get keyP() {
      return C304 || CT.C304;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyQ*/get keyQ() {
      return C305 || CT.C305;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyR*/get keyR() {
      return C306 || CT.C306;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyS*/get keyS() {
      return C307 || CT.C307;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyT*/get keyT() {
      return C308 || CT.C308;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyU*/get keyU() {
      return C309 || CT.C309;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyV*/get keyV() {
      return C310 || CT.C310;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyW*/get keyW() {
      return C311 || CT.C311;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyX*/get keyX() {
      return C312 || CT.C312;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyY*/get keyY() {
      return C313 || CT.C313;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyZ*/get keyZ() {
      return C314 || CT.C314;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit1*/get digit1() {
      return C315 || CT.C315;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit2*/get digit2() {
      return C316 || CT.C316;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit3*/get digit3() {
      return C317 || CT.C317;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit4*/get digit4() {
      return C318 || CT.C318;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit5*/get digit5() {
      return C319 || CT.C319;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit6*/get digit6() {
      return C320 || CT.C320;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit7*/get digit7() {
      return C321 || CT.C321;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit8*/get digit8() {
      return C322 || CT.C322;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit9*/get digit9() {
      return C323 || CT.C323;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit0*/get digit0() {
      return C324 || CT.C324;
    },
    /*keyboard_key.PhysicalKeyboardKey.enter*/get enter() {
      return C325 || CT.C325;
    },
    /*keyboard_key.PhysicalKeyboardKey.escape*/get escape() {
      return C326 || CT.C326;
    },
    /*keyboard_key.PhysicalKeyboardKey.backspace*/get backspace() {
      return C327 || CT.C327;
    },
    /*keyboard_key.PhysicalKeyboardKey.tab*/get tab() {
      return C328 || CT.C328;
    },
    /*keyboard_key.PhysicalKeyboardKey.space*/get space() {
      return C329 || CT.C329;
    },
    /*keyboard_key.PhysicalKeyboardKey.minus*/get minus() {
      return C330 || CT.C330;
    },
    /*keyboard_key.PhysicalKeyboardKey.equal*/get equal() {
      return C331 || CT.C331;
    },
    /*keyboard_key.PhysicalKeyboardKey.bracketLeft*/get bracketLeft() {
      return C332 || CT.C332;
    },
    /*keyboard_key.PhysicalKeyboardKey.bracketRight*/get bracketRight() {
      return C333 || CT.C333;
    },
    /*keyboard_key.PhysicalKeyboardKey.backslash*/get backslash() {
      return C334 || CT.C334;
    },
    /*keyboard_key.PhysicalKeyboardKey.semicolon*/get semicolon() {
      return C335 || CT.C335;
    },
    /*keyboard_key.PhysicalKeyboardKey.quote*/get quote() {
      return C336 || CT.C336;
    },
    /*keyboard_key.PhysicalKeyboardKey.backquote*/get backquote() {
      return C337 || CT.C337;
    },
    /*keyboard_key.PhysicalKeyboardKey.comma*/get comma() {
      return C338 || CT.C338;
    },
    /*keyboard_key.PhysicalKeyboardKey.period*/get period() {
      return C339 || CT.C339;
    },
    /*keyboard_key.PhysicalKeyboardKey.slash*/get slash() {
      return C340 || CT.C340;
    },
    /*keyboard_key.PhysicalKeyboardKey.capsLock*/get capsLock() {
      return C341 || CT.C341;
    },
    /*keyboard_key.PhysicalKeyboardKey.f1*/get f1() {
      return C342 || CT.C342;
    },
    /*keyboard_key.PhysicalKeyboardKey.f2*/get f2() {
      return C343 || CT.C343;
    },
    /*keyboard_key.PhysicalKeyboardKey.f3*/get f3() {
      return C344 || CT.C344;
    },
    /*keyboard_key.PhysicalKeyboardKey.f4*/get f4() {
      return C345 || CT.C345;
    },
    /*keyboard_key.PhysicalKeyboardKey.f5*/get f5() {
      return C346 || CT.C346;
    },
    /*keyboard_key.PhysicalKeyboardKey.f6*/get f6() {
      return C347 || CT.C347;
    },
    /*keyboard_key.PhysicalKeyboardKey.f7*/get f7() {
      return C348 || CT.C348;
    },
    /*keyboard_key.PhysicalKeyboardKey.f8*/get f8() {
      return C349 || CT.C349;
    },
    /*keyboard_key.PhysicalKeyboardKey.f9*/get f9() {
      return C350 || CT.C350;
    },
    /*keyboard_key.PhysicalKeyboardKey.f10*/get f10() {
      return C351 || CT.C351;
    },
    /*keyboard_key.PhysicalKeyboardKey.f11*/get f11() {
      return C352 || CT.C352;
    },
    /*keyboard_key.PhysicalKeyboardKey.f12*/get f12() {
      return C353 || CT.C353;
    },
    /*keyboard_key.PhysicalKeyboardKey.printScreen*/get printScreen() {
      return C354 || CT.C354;
    },
    /*keyboard_key.PhysicalKeyboardKey.scrollLock*/get scrollLock() {
      return C355 || CT.C355;
    },
    /*keyboard_key.PhysicalKeyboardKey.pause*/get pause() {
      return C356 || CT.C356;
    },
    /*keyboard_key.PhysicalKeyboardKey.insert*/get insert() {
      return C357 || CT.C357;
    },
    /*keyboard_key.PhysicalKeyboardKey.home*/get home() {
      return C358 || CT.C358;
    },
    /*keyboard_key.PhysicalKeyboardKey.pageUp*/get pageUp() {
      return C359 || CT.C359;
    },
    /*keyboard_key.PhysicalKeyboardKey.delete*/get delete() {
      return C360 || CT.C360;
    },
    /*keyboard_key.PhysicalKeyboardKey.end*/get end() {
      return C361 || CT.C361;
    },
    /*keyboard_key.PhysicalKeyboardKey.pageDown*/get pageDown() {
      return C362 || CT.C362;
    },
    /*keyboard_key.PhysicalKeyboardKey.arrowRight*/get arrowRight() {
      return C363 || CT.C363;
    },
    /*keyboard_key.PhysicalKeyboardKey.arrowLeft*/get arrowLeft() {
      return C364 || CT.C364;
    },
    /*keyboard_key.PhysicalKeyboardKey.arrowDown*/get arrowDown() {
      return C365 || CT.C365;
    },
    /*keyboard_key.PhysicalKeyboardKey.arrowUp*/get arrowUp() {
      return C366 || CT.C366;
    },
    /*keyboard_key.PhysicalKeyboardKey.numLock*/get numLock() {
      return C367 || CT.C367;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadDivide*/get numpadDivide() {
      return C368 || CT.C368;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMultiply*/get numpadMultiply() {
      return C369 || CT.C369;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadSubtract*/get numpadSubtract() {
      return C370 || CT.C370;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadAdd*/get numpadAdd() {
      return C371 || CT.C371;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadEnter*/get numpadEnter() {
      return C372 || CT.C372;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad1*/get numpad1() {
      return C373 || CT.C373;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad2*/get numpad2() {
      return C374 || CT.C374;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad3*/get numpad3() {
      return C375 || CT.C375;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad4*/get numpad4() {
      return C376 || CT.C376;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad5*/get numpad5() {
      return C377 || CT.C377;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad6*/get numpad6() {
      return C378 || CT.C378;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad7*/get numpad7() {
      return C379 || CT.C379;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad8*/get numpad8() {
      return C380 || CT.C380;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad9*/get numpad9() {
      return C381 || CT.C381;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad0*/get numpad0() {
      return C382 || CT.C382;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadDecimal*/get numpadDecimal() {
      return C383 || CT.C383;
    },
    /*keyboard_key.PhysicalKeyboardKey.intlBackslash*/get intlBackslash() {
      return C384 || CT.C384;
    },
    /*keyboard_key.PhysicalKeyboardKey.contextMenu*/get contextMenu() {
      return C385 || CT.C385;
    },
    /*keyboard_key.PhysicalKeyboardKey.power*/get power() {
      return C386 || CT.C386;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadEqual*/get numpadEqual() {
      return C387 || CT.C387;
    },
    /*keyboard_key.PhysicalKeyboardKey.f13*/get f13() {
      return C388 || CT.C388;
    },
    /*keyboard_key.PhysicalKeyboardKey.f14*/get f14() {
      return C389 || CT.C389;
    },
    /*keyboard_key.PhysicalKeyboardKey.f15*/get f15() {
      return C390 || CT.C390;
    },
    /*keyboard_key.PhysicalKeyboardKey.f16*/get f16() {
      return C391 || CT.C391;
    },
    /*keyboard_key.PhysicalKeyboardKey.f17*/get f17() {
      return C392 || CT.C392;
    },
    /*keyboard_key.PhysicalKeyboardKey.f18*/get f18() {
      return C393 || CT.C393;
    },
    /*keyboard_key.PhysicalKeyboardKey.f19*/get f19() {
      return C394 || CT.C394;
    },
    /*keyboard_key.PhysicalKeyboardKey.f20*/get f20() {
      return C395 || CT.C395;
    },
    /*keyboard_key.PhysicalKeyboardKey.f21*/get f21() {
      return C396 || CT.C396;
    },
    /*keyboard_key.PhysicalKeyboardKey.f22*/get f22() {
      return C397 || CT.C397;
    },
    /*keyboard_key.PhysicalKeyboardKey.f23*/get f23() {
      return C398 || CT.C398;
    },
    /*keyboard_key.PhysicalKeyboardKey.f24*/get f24() {
      return C399 || CT.C399;
    },
    /*keyboard_key.PhysicalKeyboardKey.open*/get open() {
      return C400 || CT.C400;
    },
    /*keyboard_key.PhysicalKeyboardKey.help*/get help() {
      return C401 || CT.C401;
    },
    /*keyboard_key.PhysicalKeyboardKey.select*/get select() {
      return C402 || CT.C402;
    },
    /*keyboard_key.PhysicalKeyboardKey.again*/get again() {
      return C403 || CT.C403;
    },
    /*keyboard_key.PhysicalKeyboardKey.undo*/get undo() {
      return C404 || CT.C404;
    },
    /*keyboard_key.PhysicalKeyboardKey.cut*/get cut() {
      return C405 || CT.C405;
    },
    /*keyboard_key.PhysicalKeyboardKey.copy*/get copy() {
      return C406 || CT.C406;
    },
    /*keyboard_key.PhysicalKeyboardKey.paste*/get paste() {
      return C407 || CT.C407;
    },
    /*keyboard_key.PhysicalKeyboardKey.find*/get find() {
      return C408 || CT.C408;
    },
    /*keyboard_key.PhysicalKeyboardKey.audioVolumeMute*/get audioVolumeMute() {
      return C409 || CT.C409;
    },
    /*keyboard_key.PhysicalKeyboardKey.audioVolumeUp*/get audioVolumeUp() {
      return C410 || CT.C410;
    },
    /*keyboard_key.PhysicalKeyboardKey.audioVolumeDown*/get audioVolumeDown() {
      return C411 || CT.C411;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadComma*/get numpadComma() {
      return C412 || CT.C412;
    },
    /*keyboard_key.PhysicalKeyboardKey.intlRo*/get intlRo() {
      return C413 || CT.C413;
    },
    /*keyboard_key.PhysicalKeyboardKey.kanaMode*/get kanaMode() {
      return C414 || CT.C414;
    },
    /*keyboard_key.PhysicalKeyboardKey.intlYen*/get intlYen() {
      return C415 || CT.C415;
    },
    /*keyboard_key.PhysicalKeyboardKey.convert*/get convert() {
      return C416 || CT.C416;
    },
    /*keyboard_key.PhysicalKeyboardKey.nonConvert*/get nonConvert() {
      return C417 || CT.C417;
    },
    /*keyboard_key.PhysicalKeyboardKey.lang1*/get lang1() {
      return C418 || CT.C418;
    },
    /*keyboard_key.PhysicalKeyboardKey.lang2*/get lang2() {
      return C419 || CT.C419;
    },
    /*keyboard_key.PhysicalKeyboardKey.lang3*/get lang3() {
      return C420 || CT.C420;
    },
    /*keyboard_key.PhysicalKeyboardKey.lang4*/get lang4() {
      return C421 || CT.C421;
    },
    /*keyboard_key.PhysicalKeyboardKey.lang5*/get lang5() {
      return C422 || CT.C422;
    },
    /*keyboard_key.PhysicalKeyboardKey.abort*/get abort() {
      return C423 || CT.C423;
    },
    /*keyboard_key.PhysicalKeyboardKey.props*/get props() {
      return C424 || CT.C424;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadParenLeft*/get numpadParenLeft() {
      return C425 || CT.C425;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadParenRight*/get numpadParenRight() {
      return C426 || CT.C426;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadBackspace*/get numpadBackspace() {
      return C427 || CT.C427;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMemoryStore*/get numpadMemoryStore() {
      return C428 || CT.C428;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMemoryRecall*/get numpadMemoryRecall() {
      return C429 || CT.C429;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMemoryClear*/get numpadMemoryClear() {
      return C430 || CT.C430;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMemoryAdd*/get numpadMemoryAdd() {
      return C431 || CT.C431;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMemorySubtract*/get numpadMemorySubtract() {
      return C432 || CT.C432;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadSignChange*/get numpadSignChange() {
      return C433 || CT.C433;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadClear*/get numpadClear() {
      return C434 || CT.C434;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadClearEntry*/get numpadClearEntry() {
      return C435 || CT.C435;
    },
    /*keyboard_key.PhysicalKeyboardKey.controlLeft*/get controlLeft() {
      return C436 || CT.C436;
    },
    /*keyboard_key.PhysicalKeyboardKey.shiftLeft*/get shiftLeft() {
      return C437 || CT.C437;
    },
    /*keyboard_key.PhysicalKeyboardKey.altLeft*/get altLeft() {
      return C438 || CT.C438;
    },
    /*keyboard_key.PhysicalKeyboardKey.metaLeft*/get metaLeft() {
      return C439 || CT.C439;
    },
    /*keyboard_key.PhysicalKeyboardKey.controlRight*/get controlRight() {
      return C440 || CT.C440;
    },
    /*keyboard_key.PhysicalKeyboardKey.shiftRight*/get shiftRight() {
      return C441 || CT.C441;
    },
    /*keyboard_key.PhysicalKeyboardKey.altRight*/get altRight() {
      return C442 || CT.C442;
    },
    /*keyboard_key.PhysicalKeyboardKey.metaRight*/get metaRight() {
      return C443 || CT.C443;
    },
    /*keyboard_key.PhysicalKeyboardKey.info*/get info() {
      return C444 || CT.C444;
    },
    /*keyboard_key.PhysicalKeyboardKey.closedCaptionToggle*/get closedCaptionToggle() {
      return C445 || CT.C445;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessUp*/get brightnessUp() {
      return C446 || CT.C446;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessDown*/get brightnessDown() {
      return C447 || CT.C447;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessToggle*/get brightnessToggle() {
      return C448 || CT.C448;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessMinimum*/get brightnessMinimum() {
      return C449 || CT.C449;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessMaximum*/get brightnessMaximum() {
      return C450 || CT.C450;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessAuto*/get brightnessAuto() {
      return C451 || CT.C451;
    },
    /*keyboard_key.PhysicalKeyboardKey.kbdIllumUp*/get kbdIllumUp() {
      return C452 || CT.C452;
    },
    /*keyboard_key.PhysicalKeyboardKey.kbdIllumDown*/get kbdIllumDown() {
      return C453 || CT.C453;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaLast*/get mediaLast() {
      return C454 || CT.C454;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchPhone*/get launchPhone() {
      return C455 || CT.C455;
    },
    /*keyboard_key.PhysicalKeyboardKey.programGuide*/get programGuide() {
      return C456 || CT.C456;
    },
    /*keyboard_key.PhysicalKeyboardKey.exit*/get exit() {
      return C457 || CT.C457;
    },
    /*keyboard_key.PhysicalKeyboardKey.channelUp*/get channelUp() {
      return C458 || CT.C458;
    },
    /*keyboard_key.PhysicalKeyboardKey.channelDown*/get channelDown() {
      return C459 || CT.C459;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaPlay*/get mediaPlay() {
      return C460 || CT.C460;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaPause*/get mediaPause() {
      return C461 || CT.C461;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaRecord*/get mediaRecord() {
      return C462 || CT.C462;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaFastForward*/get mediaFastForward() {
      return C463 || CT.C463;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaRewind*/get mediaRewind() {
      return C464 || CT.C464;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaTrackNext*/get mediaTrackNext() {
      return C465 || CT.C465;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaTrackPrevious*/get mediaTrackPrevious() {
      return C466 || CT.C466;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaStop*/get mediaStop() {
      return C467 || CT.C467;
    },
    /*keyboard_key.PhysicalKeyboardKey.eject*/get eject() {
      return C468 || CT.C468;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaPlayPause*/get mediaPlayPause() {
      return C469 || CT.C469;
    },
    /*keyboard_key.PhysicalKeyboardKey.speechInputToggle*/get speechInputToggle() {
      return C470 || CT.C470;
    },
    /*keyboard_key.PhysicalKeyboardKey.bassBoost*/get bassBoost() {
      return C471 || CT.C471;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaSelect*/get mediaSelect() {
      return C472 || CT.C472;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchWordProcessor*/get launchWordProcessor() {
      return C473 || CT.C473;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchSpreadsheet*/get launchSpreadsheet() {
      return C474 || CT.C474;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchMail*/get launchMail() {
      return C475 || CT.C475;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchContacts*/get launchContacts() {
      return C476 || CT.C476;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchCalendar*/get launchCalendar() {
      return C477 || CT.C477;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchApp2*/get launchApp2() {
      return C478 || CT.C478;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchApp1*/get launchApp1() {
      return C479 || CT.C479;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchInternetBrowser*/get launchInternetBrowser() {
      return C480 || CT.C480;
    },
    /*keyboard_key.PhysicalKeyboardKey.logOff*/get logOff() {
      return C481 || CT.C481;
    },
    /*keyboard_key.PhysicalKeyboardKey.lockScreen*/get lockScreen() {
      return C482 || CT.C482;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchControlPanel*/get launchControlPanel() {
      return C483 || CT.C483;
    },
    /*keyboard_key.PhysicalKeyboardKey.selectTask*/get selectTask() {
      return C484 || CT.C484;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchDocuments*/get launchDocuments() {
      return C485 || CT.C485;
    },
    /*keyboard_key.PhysicalKeyboardKey.spellCheck*/get spellCheck() {
      return C486 || CT.C486;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchKeyboardLayout*/get launchKeyboardLayout() {
      return C487 || CT.C487;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchScreenSaver*/get launchScreenSaver() {
      return C488 || CT.C488;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchAssistant*/get launchAssistant() {
      return C489 || CT.C489;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchAudioBrowser*/get launchAudioBrowser() {
      return C490 || CT.C490;
    },
    /*keyboard_key.PhysicalKeyboardKey.newKey*/get newKey() {
      return C491 || CT.C491;
    },
    /*keyboard_key.PhysicalKeyboardKey.close*/get close() {
      return C492 || CT.C492;
    },
    /*keyboard_key.PhysicalKeyboardKey.save*/get save() {
      return C493 || CT.C493;
    },
    /*keyboard_key.PhysicalKeyboardKey.print*/get print() {
      return C494 || CT.C494;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserSearch*/get browserSearch() {
      return C495 || CT.C495;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserHome*/get browserHome() {
      return C496 || CT.C496;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserBack*/get browserBack() {
      return C497 || CT.C497;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserForward*/get browserForward() {
      return C498 || CT.C498;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserStop*/get browserStop() {
      return C499 || CT.C499;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserRefresh*/get browserRefresh() {
      return C500 || CT.C500;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserFavorites*/get browserFavorites() {
      return C501 || CT.C501;
    },
    /*keyboard_key.PhysicalKeyboardKey.zoomIn*/get zoomIn() {
      return C502 || CT.C502;
    },
    /*keyboard_key.PhysicalKeyboardKey.zoomOut*/get zoomOut() {
      return C503 || CT.C503;
    },
    /*keyboard_key.PhysicalKeyboardKey.zoomToggle*/get zoomToggle() {
      return C504 || CT.C504;
    },
    /*keyboard_key.PhysicalKeyboardKey.redo*/get redo() {
      return C505 || CT.C505;
    },
    /*keyboard_key.PhysicalKeyboardKey.mailReply*/get mailReply() {
      return C506 || CT.C506;
    },
    /*keyboard_key.PhysicalKeyboardKey.mailForward*/get mailForward() {
      return C507 || CT.C507;
    },
    /*keyboard_key.PhysicalKeyboardKey.mailSend*/get mailSend() {
      return C508 || CT.C508;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyboardLayoutSelect*/get keyboardLayoutSelect() {
      return C509 || CT.C509;
    },
    /*keyboard_key.PhysicalKeyboardKey.showAllWindows*/get showAllWindows() {
      return C510 || CT.C510;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton1*/get gameButton1() {
      return C511 || CT.C511;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton2*/get gameButton2() {
      return C512 || CT.C512;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton3*/get gameButton3() {
      return C513 || CT.C513;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton4*/get gameButton4() {
      return C514 || CT.C514;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton5*/get gameButton5() {
      return C515 || CT.C515;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton6*/get gameButton6() {
      return C516 || CT.C516;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton7*/get gameButton7() {
      return C517 || CT.C517;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton8*/get gameButton8() {
      return C518 || CT.C518;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton9*/get gameButton9() {
      return C519 || CT.C519;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton10*/get gameButton10() {
      return C520 || CT.C520;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton11*/get gameButton11() {
      return C521 || CT.C521;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton12*/get gameButton12() {
      return C522 || CT.C522;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton13*/get gameButton13() {
      return C523 || CT.C523;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton14*/get gameButton14() {
      return C524 || CT.C524;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton15*/get gameButton15() {
      return C525 || CT.C525;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton16*/get gameButton16() {
      return C526 || CT.C526;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonA*/get gameButtonA() {
      return C527 || CT.C527;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonB*/get gameButtonB() {
      return C528 || CT.C528;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonC*/get gameButtonC() {
      return C529 || CT.C529;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonLeft1*/get gameButtonLeft1() {
      return C530 || CT.C530;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonLeft2*/get gameButtonLeft2() {
      return C531 || CT.C531;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonMode*/get gameButtonMode() {
      return C532 || CT.C532;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonRight1*/get gameButtonRight1() {
      return C533 || CT.C533;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonRight2*/get gameButtonRight2() {
      return C534 || CT.C534;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonSelect*/get gameButtonSelect() {
      return C535 || CT.C535;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonStart*/get gameButtonStart() {
      return C536 || CT.C536;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonThumbLeft*/get gameButtonThumbLeft() {
      return C537 || CT.C537;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonThumbRight*/get gameButtonThumbRight() {
      return C538 || CT.C538;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonX*/get gameButtonX() {
      return C539 || CT.C539;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonY*/get gameButtonY() {
      return C540 || CT.C540;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonZ*/get gameButtonZ() {
      return C541 || CT.C541;
    },
    /*keyboard_key.PhysicalKeyboardKey.fn*/get fn() {
      return C542 || CT.C542;
    },
    /*keyboard_key.PhysicalKeyboardKey._knownPhysicalKeys*/get _knownPhysicalKeys() {
      return C543 || CT.C543;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/services/keyboard_key.dart", {
    "package:flutter/src/services/keyboard_key.dart": keyboard_key
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["keyboard_key.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"../../../../../../../../../../packages/flutter/src/services/keyboard_key.dart.lib.js"}');
  // Exports:
  return {
    src__services__keyboard_key: keyboard_key
  };
}));

//# sourceMappingURL=keyboard_key.dart.lib.js.map
