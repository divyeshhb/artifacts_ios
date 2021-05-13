define(['dart_sdk'], (function load__packages__flutter__src__painting__basic_types_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var basic_types = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var RenderComparisonL = () => (RenderComparisonL = dart.constFn(dart.legacy(basic_types.RenderComparison)))();
  var AxisL = () => (AxisL = dart.constFn(dart.legacy(basic_types.Axis)))();
  var VerticalDirectionL = () => (VerticalDirectionL = dart.constFn(dart.legacy(basic_types.VerticalDirection)))();
  var AxisDirectionL = () => (AxisDirectionL = dart.constFn(dart.legacy(basic_types.AxisDirection)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/basic_types.dart";
  var L1 = "package:flutter/src/painting/basic_types.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_name$]: "RenderComparison.identical",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_name$]: "RenderComparison.metadata",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_name$]: "RenderComparison.paint",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_name$]: "RenderComparison.layout",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], RenderComparisonL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name$]: "Axis.horizontal",
        index: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name$]: "Axis.vertical",
        index: 1
      });
    },
    get C7() {
      return C7 = dart.constList([C5 || CT.C5, C6 || CT.C6], AxisL());
    },
    get C8() {
      return C8 = dart.const({
        __proto__: basic_types.VerticalDirection.prototype,
        [_name$]: "VerticalDirection.up",
        index: 0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: basic_types.VerticalDirection.prototype,
        [_name$]: "VerticalDirection.down",
        index: 1
      });
    },
    get C10() {
      return C10 = dart.constList([C8 || CT.C8, C9 || CT.C9], VerticalDirectionL());
    },
    get C11() {
      return C11 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name$]: "AxisDirection.up",
        index: 0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name$]: "AxisDirection.right",
        index: 1
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name$]: "AxisDirection.down",
        index: 2
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name$]: "AxisDirection.left",
        index: 3
      });
    },
    get C15() {
      return C15 = dart.constList([C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], AxisDirectionL());
    },
    get C16() {
      return C16 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.rtl",
        index: 0
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.ltr",
        index: 1
      });
    }
  }, false);
  var _name$ = dart.privateName(basic_types, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  basic_types.RenderComparison = class RenderComparison extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (basic_types.RenderComparison.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 74, 6, "index");
    if (_name == null) dart.nullFailed(L0, 74, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = basic_types.RenderComparison.prototype;
  dart.addTypeTests(basic_types.RenderComparison);
  dart.addTypeCaches(basic_types.RenderComparison);
  dart.setLibraryUri(basic_types.RenderComparison, L1);
  dart.setFieldSignature(basic_types.RenderComparison, () => ({
    __proto__: dart.getFields(basic_types.RenderComparison.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(basic_types.RenderComparison, ['toString']);
  basic_types.RenderComparison.identical = C0 || CT.C0;
  basic_types.RenderComparison.metadata = C1 || CT.C1;
  basic_types.RenderComparison.paint = C2 || CT.C2;
  basic_types.RenderComparison.layout = C3 || CT.C3;
  basic_types.RenderComparison.values = C4 || CT.C4;
  var C5;
  var C6;
  var C7;
  basic_types.Axis = class Axis extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (basic_types.Axis.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 116, 6, "index");
    if (_name == null) dart.nullFailed(L0, 116, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = basic_types.Axis.prototype;
  dart.addTypeTests(basic_types.Axis);
  dart.addTypeCaches(basic_types.Axis);
  dart.setLibraryUri(basic_types.Axis, L1);
  dart.setFieldSignature(basic_types.Axis, () => ({
    __proto__: dart.getFields(basic_types.Axis.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(basic_types.Axis, ['toString']);
  basic_types.Axis.horizontal = C5 || CT.C5;
  basic_types.Axis.vertical = C6 || CT.C6;
  basic_types.Axis.values = C7 || CT.C7;
  var C8;
  var C9;
  var C10;
  basic_types.VerticalDirection = class VerticalDirection extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (basic_types.VerticalDirection.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 158, 6, "index");
    if (_name == null) dart.nullFailed(L0, 158, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = basic_types.VerticalDirection.prototype;
  dart.addTypeTests(basic_types.VerticalDirection);
  dart.addTypeCaches(basic_types.VerticalDirection);
  dart.setLibraryUri(basic_types.VerticalDirection, L1);
  dart.setFieldSignature(basic_types.VerticalDirection, () => ({
    __proto__: dart.getFields(basic_types.VerticalDirection.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(basic_types.VerticalDirection, ['toString']);
  basic_types.VerticalDirection.up = C8 || CT.C8;
  basic_types.VerticalDirection.down = C9 || CT.C9;
  basic_types.VerticalDirection.values = C10 || CT.C10;
  var C11;
  var C12;
  var C13;
  var C14;
  var C15;
  basic_types.AxisDirection = class AxisDirection extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (basic_types.AxisDirection.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 171, 6, "index");
    if (_name == null) dart.nullFailed(L0, 171, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = basic_types.AxisDirection.prototype;
  dart.addTypeTests(basic_types.AxisDirection);
  dart.addTypeCaches(basic_types.AxisDirection);
  dart.setLibraryUri(basic_types.AxisDirection, L1);
  dart.setFieldSignature(basic_types.AxisDirection, () => ({
    __proto__: dart.getFields(basic_types.AxisDirection.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(basic_types.AxisDirection, ['toString']);
  basic_types.AxisDirection.up = C11 || CT.C11;
  basic_types.AxisDirection.right = C12 || CT.C12;
  basic_types.AxisDirection.down = C13 || CT.C13;
  basic_types.AxisDirection.left = C14 || CT.C14;
  basic_types.AxisDirection.values = C15 || CT.C15;
  var _name = dart.privateName(ui, "_name");
  var C16;
  var C17;
  basic_types.flipAxis = function flipAxis(direction) {
    if (direction == null) dart.nullFailed(L0, 137, 20, "direction");
    if (!(direction != null)) dart.assertFailed(null, L0, 138, 10, "direction != null");
    switch (direction) {
      case C5 || CT.C5:
      {
        return basic_types.Axis.vertical;
      }
      case C6 || CT.C6:
      {
        return basic_types.Axis.horizontal;
      }
      default:
      {
        dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
      }
    }
  };
  basic_types.axisDirectionToAxis = function axisDirectionToAxis(axisDirection) {
    if (axisDirection == null) dart.nullFailed(L0, 205, 40, "axisDirection");
    if (!(axisDirection != null)) dart.assertFailed(null, L0, 206, 10, "axisDirection != null");
    switch (axisDirection) {
      case C11 || CT.C11:
      case C13 || CT.C13:
      {
        return basic_types.Axis.vertical;
      }
      case C14 || CT.C14:
      case C12 || CT.C12:
      {
        return basic_types.Axis.horizontal;
      }
      default:
      {
        dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
      }
    }
  };
  basic_types.textDirectionToAxisDirection = function textDirectionToAxisDirection(textDirection) {
    if (textDirection == null) dart.nullFailed(L0, 221, 58, "textDirection");
    if (!(textDirection != null)) dart.assertFailed(null, L0, 222, 10, "textDirection != null");
    switch (textDirection) {
      case C16 || CT.C16:
      {
        return basic_types.AxisDirection.left;
      }
      case C17 || CT.C17:
      {
        return basic_types.AxisDirection.right;
      }
      default:
      {
        dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
      }
    }
  };
  basic_types.flipAxisDirection = function flipAxisDirection(axisDirection) {
    if (axisDirection == null) dart.nullFailed(L0, 240, 47, "axisDirection");
    if (!(axisDirection != null)) dart.assertFailed(null, L0, 241, 10, "axisDirection != null");
    switch (axisDirection) {
      case C11 || CT.C11:
      {
        return basic_types.AxisDirection.down;
      }
      case C12 || CT.C12:
      {
        return basic_types.AxisDirection.left;
      }
      case C13 || CT.C13:
      {
        return basic_types.AxisDirection.up;
      }
      case C14 || CT.C14:
      {
        return basic_types.AxisDirection.right;
      }
      default:
      {
        dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
      }
    }
  };
  basic_types.axisDirectionIsReversed = function axisDirectionIsReversed(axisDirection) {
    if (axisDirection == null) dart.nullFailed(L0, 259, 44, "axisDirection");
    if (!(axisDirection != null)) dart.assertFailed(null, L0, 260, 10, "axisDirection != null");
    switch (axisDirection) {
      case C11 || CT.C11:
      case C14 || CT.C14:
      {
        return true;
      }
      case C13 || CT.C13:
      case C12 || CT.C12:
      {
        return false;
      }
      default:
      {
        dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
      }
    }
  };
  dart.trackLibraries("packages/flutter/src/painting/basic_types.dart", {
    "package:flutter/src/painting/basic_types.dart": basic_types
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["basic_types.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqGA;;;QA5BK;;;;;EA4BL;;;;;;;;;;;;;;;;;;;;;IAyBA;;;QAXK;;;;;EAWL;;;;;;;;;;;;;;;;;;;IAyCA;;;QAVK;;;;;EAUL;;;;;;;;;;;;;;;;;;;;;IA8BA;;;QA3BK;;;;;EA2BL;;;;;;;;;;;;;;;;;;;QA7DmB;AACjB,UAAO,AAAU,SAAD,IAAI;AACpB,YAAQ,SAAS;;;AAEb,cAAY;;;;AAEZ,cAAY;;;;AAJhB;;;EAMF;;QA4DuC;AACrC,UAAO,AAAc,aAAD,IAAI;AACxB,YAAQ,aAAa;;;;AAGjB,cAAY;;;;;AAGZ,cAAY;;;;AANhB;;;EAQF;;QAMyD;AACvD,UAAO,AAAc,aAAD,IAAI;AACxB,YAAQ,aAAa;;;AAEjB,cAAqB;;;;AAErB,cAAqB;;;;AAJzB;;;EAMF;;QAW8C;AAC5C,UAAO,AAAc,aAAD,IAAI;AACxB,YAAQ,aAAa;;;AAEjB,cAAqB;;;;AAErB,cAAqB;;;;AAErB,cAAqB;;;;AAErB,cAAqB;;;;AARzB;;;EAUF;;QAO2C;AACzC,UAAO,AAAc,aAAD,IAAI;AACxB,YAAQ,aAAa;;;;AAGjB,cAAO;;;;;AAGP,cAAO;;;;AANX;;;EAQF","file":"../../../../../../../../../../packages/flutter/src/painting/basic_types.dart.lib.js"}');
  // Exports:
  return {
    src__painting__basic_types: basic_types
  };
}));

//# sourceMappingURL=basic_types.dart.lib.js.map
