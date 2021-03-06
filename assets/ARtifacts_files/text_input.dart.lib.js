define(['dart_sdk', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/services/text_editing.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/services/system_channels.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__services__text_input_dart(dart_sdk, packages__flutter__src__foundation__object$46dart, packages__flutter__src__services__text_editing$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__services__system_channels$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const io = dart_sdk.io;
  const _internal = dart_sdk._internal;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const text_editing = packages__flutter__src__services__text_editing$46dart.src__services__text_editing;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const system_channels = packages__flutter__src__services__system_channels$46dart.src__services__system_channels;
  const message_codec = packages__flutter__src__services__system_channels$46dart.src__services__message_codec;
  const platform_channel = packages__flutter__src__services__system_channels$46dart.src__services__platform_channel;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var text_input = Object.create(dart.library);
  var autofill = Object.create(dart.library);
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $toString = dartx.toString;
  var $hashCode = dartx.hashCode;
  var $contains = dartx.contains;
  var $keys = dartx.keys;
  var $isNotEmpty = dartx.isNotEmpty;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $any = dartx.any;
  dart._checkModuleNullSafetyMode(false);
  var SmartDashesTypeL = () => (SmartDashesTypeL = dart.constFn(dart.legacy(text_input.SmartDashesType)))();
  var SmartQuotesTypeL = () => (SmartQuotesTypeL = dart.constFn(dart.legacy(text_input.SmartQuotesType)))();
  var IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  var TextInputTypeL = () => (TextInputTypeL = dart.constFn(dart.legacy(text_input.TextInputType)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var TextInputActionL = () => (TextInputActionL = dart.constFn(dart.legacy(text_input.TextInputAction)))();
  var TextCapitalizationL = () => (TextCapitalizationL = dart.constFn(dart.legacy(text_input.TextCapitalization)))();
  var FloatingCursorDragStateL = () => (FloatingCursorDragStateL = dart.constFn(dart.legacy(text_input.FloatingCursorDragState)))();
  var intN = () => (intN = dart.constFn(dart.nullable(core.int)))();
  var StringN = () => (StringN = dart.constFn(dart.nullable(core.String)))();
  var boolN = () => (boolN = dart.constFn(dart.nullable(core.bool)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var TextInputConfigurationToMapOfString$dynamic = () => (TextInputConfigurationToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [text_input.TextInputConfiguration])))();
  var AutofillClientTobool = () => (AutofillClientTobool = dart.constFn(dart.fnType(core.bool, [autofill.AutofillClient])))();
  var AutofillClientToTextInputConfiguration = () => (AutofillClientToTextInputConfiguration = dart.constFn(dart.fnType(text_input.TextInputConfiguration, [autofill.AutofillClient])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/text_input.dart";
  var L1 = "package:flutter/src/services/text_input.dart";
  var L2 = "package:flutter/src/services/autofill.dart";
  var L3 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/autofill.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: text_input.SmartDashesType.prototype,
        [_name$]: "SmartDashesType.disabled",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: text_input.SmartDashesType.prototype,
        [_name$]: "SmartDashesType.enabled",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], SmartDashesTypeL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: text_input.SmartQuotesType.prototype,
        [_name$]: "SmartQuotesType.disabled",
        index: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: text_input.SmartQuotesType.prototype,
        [_name$]: "SmartQuotesType.enabled",
        index: 1
      });
    },
    get C5() {
      return C5 = dart.constList([C3 || CT.C3, C4 || CT.C4], SmartQuotesTypeL());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 1
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: false,
        [signed$]: false,
        [index$]: 2
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 3
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 4
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 5
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 6
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 7
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 8
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 9
      });
    },
    get C16() {
      return C16 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], TextInputTypeL());
    },
    get C17() {
      return C17 = dart.constList(["text", "multiline", "number", "phone", "datetime", "emailAddress", "url", "visiblePassword", "name", "address"], StringL());
    },
    get C18() {
      return C18 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.none",
        index: 0
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.unspecified",
        index: 1
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.done",
        index: 2
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.go",
        index: 3
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.search",
        index: 4
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.send",
        index: 5
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.next",
        index: 6
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.previous",
        index: 7
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.continueAction",
        index: 8
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.join",
        index: 9
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.route",
        index: 10
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.emergencyCall",
        index: 11
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.newline",
        index: 12
      });
    },
    get C31() {
      return C31 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30], TextInputActionL());
    },
    get C32() {
      return C32 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name$]: "TextCapitalization.words",
        index: 0
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name$]: "TextCapitalization.sentences",
        index: 1
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name$]: "TextCapitalization.characters",
        index: 2
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name$]: "TextCapitalization.none",
        index: 3
      });
    },
    get C36() {
      return C36 = dart.constList([C32 || CT.C32, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35], TextCapitalizationL());
    },
    get C37() {
      return C37 = dart.const({
        __proto__: ui.Brightness.prototype,
        [_name]: "Brightness.light",
        index: 1
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_name$]: "FloatingCursorDragState.Start",
        index: 0
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_name$]: "FloatingCursorDragState.Update",
        index: 1
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_name$]: "FloatingCursorDragState.End",
        index: 2
      });
    },
    get C41() {
      return C41 = dart.constList([C38 || CT.C38, C39 || CT.C39, C40 || CT.C40], FloatingCursorDragStateL());
    },
    get C43() {
      return C43 = dart.const({
        __proto__: ui.TextAffinity.prototype,
        [_name]: "TextAffinity.downstream",
        index: 1
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: text_editing.TextSelection.prototype,
        [TextRange_end]: -1,
        [TextRange_start]: -1,
        [TextSelection_isDirectional]: false,
        [TextSelection_affinity]: C43 || CT.C43,
        [TextSelection_extentOffset]: -1,
        [TextSelection_baseOffset]: -1
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: ui.TextRange.prototype,
        [TextRange_end]: -1,
        [TextRange_start]: -1
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: text_input.TextEditingValue.prototype,
        [composing$]: C44 || CT.C44,
        [selection$]: C42 || CT.C42,
        [text$]: ""
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: -1,
        [OffsetBase__dx]: -1
      });
    },
    get C47() {
      return C47 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C23 || CT.C23, C21 || CT.C21, C22 || CT.C22, C24 || CT.C24, C25 || CT.C25, C30 || CT.C30], TextInputActionL());
    },
    get C48() {
      return C48 = dart.constList([C19 || CT.C19, C20 || CT.C20, C23 || CT.C23, C21 || CT.C21, C22 || CT.C22, C24 || CT.C24, C30 || CT.C30, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29], TextInputActionL());
    },
    get C49() {
      return C49 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    }
  }, false);
  var _name$ = dart.privateName(text_input, "_name");
  var C0;
  var C1;
  var C2;
  text_input.SmartDashesType = class SmartDashesType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (text_input.SmartDashesType.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 38, 6, "index");
    if (_name == null) dart.nullFailed(L0, 38, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = text_input.SmartDashesType.prototype;
  dart.addTypeTests(text_input.SmartDashesType);
  dart.addTypeCaches(text_input.SmartDashesType);
  dart.setLibraryUri(text_input.SmartDashesType, L1);
  dart.setFieldSignature(text_input.SmartDashesType, () => ({
    __proto__: dart.getFields(text_input.SmartDashesType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(text_input.SmartDashesType, ['toString']);
  text_input.SmartDashesType.disabled = C0 || CT.C0;
  text_input.SmartDashesType.enabled = C1 || CT.C1;
  text_input.SmartDashesType.values = C2 || CT.C2;
  var C3;
  var C4;
  var C5;
  text_input.SmartQuotesType = class SmartQuotesType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (text_input.SmartQuotesType.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 60, 6, "index");
    if (_name == null) dart.nullFailed(L0, 60, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = text_input.SmartQuotesType.prototype;
  dart.addTypeTests(text_input.SmartQuotesType);
  dart.addTypeCaches(text_input.SmartQuotesType);
  dart.setLibraryUri(text_input.SmartQuotesType, L1);
  dart.setFieldSignature(text_input.SmartQuotesType, () => ({
    __proto__: dart.getFields(text_input.SmartQuotesType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(text_input.SmartQuotesType, ['toString']);
  text_input.SmartQuotesType.disabled = C3 || CT.C3;
  text_input.SmartQuotesType.enabled = C4 || CT.C4;
  text_input.SmartQuotesType.values = C5 || CT.C5;
  var index$ = dart.privateName(text_input, "TextInputType.index");
  var signed$ = dart.privateName(text_input, "TextInputType.signed");
  var decimal$ = dart.privateName(text_input, "TextInputType.decimal");
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
  text_input.TextInputType = class TextInputType extends core.Object {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get signed() {
      return this[signed$];
    }
    set signed(value) {
      super.signed = value;
    }
    get decimal() {
      return this[decimal$];
    }
    set decimal(value) {
      super.decimal = value;
    }
    get [_name$]() {
      return "TextInputType." + dart.str(text_input.TextInputType._names[$_get](this.index));
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["name", this[_name$], "signed", this.signed, "decimal", this.decimal]);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "TextInputType")) + "(" + "name: " + dart.str(this[_name$]) + ", " + "signed: " + dart.str(this.signed) + ", " + "decimal: " + dart.str(this.decimal) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      return text_input.TextInputType.is(other) && other.index == this.index && dart.equals(other.signed, this.signed) && dart.equals(other.decimal, this.decimal);
    }
    get hashCode() {
      return ui.hashValues(this.index, this.signed, this.decimal);
    }
  };
  (text_input.TextInputType.__ = function(index) {
    if (index == null) dart.nullFailed(L0, 83, 30, "index");
    this[index$] = index;
    this[signed$] = null;
    this[decimal$] = null;
    ;
  }).prototype = text_input.TextInputType.prototype;
  (text_input.TextInputType.numberWithOptions = function(opts) {
    let signed = opts && 'signed' in opts ? opts.signed : false;
    let decimal = opts && 'decimal' in opts ? opts.decimal : false;
    this[signed$] = signed;
    this[decimal$] = decimal;
    this[index$] = 2;
    ;
  }).prototype = text_input.TextInputType.prototype;
  dart.addTypeTests(text_input.TextInputType);
  dart.addTypeCaches(text_input.TextInputType);
  dart.setMethodSignature(text_input.TextInputType, () => ({
    __proto__: dart.getMethods(text_input.TextInputType.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setGetterSignature(text_input.TextInputType, () => ({
    __proto__: dart.getGetters(text_input.TextInputType.__proto__),
    [_name$]: core.String
  }));
  dart.setLibraryUri(text_input.TextInputType, L1);
  dart.setFieldSignature(text_input.TextInputType, () => ({
    __proto__: dart.getFields(text_input.TextInputType.__proto__),
    index: dart.finalFieldType(core.int),
    signed: dart.finalFieldType(dart.nullable(core.bool)),
    decimal: dart.finalFieldType(dart.nullable(core.bool))
  }));
  dart.defineExtensionMethods(text_input.TextInputType, ['toString', '_equals']);
  dart.defineExtensionAccessors(text_input.TextInputType, ['hashCode']);
  dart.defineLazy(text_input.TextInputType, {
    /*text_input.TextInputType.text*/get text() {
      return C6 || CT.C6;
    },
    /*text_input.TextInputType.multiline*/get multiline() {
      return C7 || CT.C7;
    },
    /*text_input.TextInputType.number*/get number() {
      return C8 || CT.C8;
    },
    /*text_input.TextInputType.phone*/get phone() {
      return C9 || CT.C9;
    },
    /*text_input.TextInputType.datetime*/get datetime() {
      return C10 || CT.C10;
    },
    /*text_input.TextInputType.emailAddress*/get emailAddress() {
      return C11 || CT.C11;
    },
    /*text_input.TextInputType.url*/get url() {
      return C12 || CT.C12;
    },
    /*text_input.TextInputType.visiblePassword*/get visiblePassword() {
      return C13 || CT.C13;
    },
    /*text_input.TextInputType.name_*/get name_() {
      return C14 || CT.C14;
    },
    /*text_input.TextInputType.streetAddress*/get streetAddress() {
      return C15 || CT.C15;
    },
    /*text_input.TextInputType.values*/get values() {
      return C16 || CT.C16;
    },
    /*text_input.TextInputType._names*/get _names() {
      return C17 || CT.C17;
    }
  }, false);
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
  text_input.TextInputAction = class TextInputAction extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (text_input.TextInputAction.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 252, 6, "index");
    if (_name == null) dart.nullFailed(L0, 252, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = text_input.TextInputAction.prototype;
  dart.addTypeTests(text_input.TextInputAction);
  dart.addTypeCaches(text_input.TextInputAction);
  dart.setLibraryUri(text_input.TextInputAction, L1);
  dart.setFieldSignature(text_input.TextInputAction, () => ({
    __proto__: dart.getFields(text_input.TextInputAction.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(text_input.TextInputAction, ['toString']);
  text_input.TextInputAction.none = C18 || CT.C18;
  text_input.TextInputAction.unspecified = C19 || CT.C19;
  text_input.TextInputAction.done = C20 || CT.C20;
  text_input.TextInputAction.go = C21 || CT.C21;
  text_input.TextInputAction.search = C22 || CT.C22;
  text_input.TextInputAction.send = C23 || CT.C23;
  text_input.TextInputAction.next = C24 || CT.C24;
  text_input.TextInputAction.previous = C25 || CT.C25;
  text_input.TextInputAction.continueAction = C26 || CT.C26;
  text_input.TextInputAction.join = C27 || CT.C27;
  text_input.TextInputAction.route = C28 || CT.C28;
  text_input.TextInputAction.emergencyCall = C29 || CT.C29;
  text_input.TextInputAction.newline = C30 || CT.C30;
  text_input.TextInputAction.values = C31 || CT.C31;
  var C32;
  var C33;
  var C34;
  var C35;
  var C36;
  text_input.TextCapitalization = class TextCapitalization extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (text_input.TextCapitalization.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 408, 6, "index");
    if (_name == null) dart.nullFailed(L0, 408, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = text_input.TextCapitalization.prototype;
  dart.addTypeTests(text_input.TextCapitalization);
  dart.addTypeCaches(text_input.TextCapitalization);
  dart.setLibraryUri(text_input.TextCapitalization, L1);
  dart.setFieldSignature(text_input.TextCapitalization, () => ({
    __proto__: dart.getFields(text_input.TextCapitalization.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(text_input.TextCapitalization, ['toString']);
  text_input.TextCapitalization.words = C32 || CT.C32;
  text_input.TextCapitalization.sentences = C33 || CT.C33;
  text_input.TextCapitalization.characters = C34 || CT.C34;
  text_input.TextCapitalization.none = C35 || CT.C35;
  text_input.TextCapitalization.values = C36 || CT.C36;
  var _name = dart.privateName(ui, "_name");
  var C37;
  var inputType$ = dart.privateName(text_input, "TextInputConfiguration.inputType");
  var readOnly$ = dart.privateName(text_input, "TextInputConfiguration.readOnly");
  var obscureText$ = dart.privateName(text_input, "TextInputConfiguration.obscureText");
  var autocorrect$ = dart.privateName(text_input, "TextInputConfiguration.autocorrect");
  var autofillConfiguration$ = dart.privateName(text_input, "TextInputConfiguration.autofillConfiguration");
  var smartDashesType$ = dart.privateName(text_input, "TextInputConfiguration.smartDashesType");
  var smartQuotesType$ = dart.privateName(text_input, "TextInputConfiguration.smartQuotesType");
  var enableSuggestions$ = dart.privateName(text_input, "TextInputConfiguration.enableSuggestions");
  var actionLabel$ = dart.privateName(text_input, "TextInputConfiguration.actionLabel");
  var inputAction$ = dart.privateName(text_input, "TextInputConfiguration.inputAction");
  var textCapitalization$ = dart.privateName(text_input, "TextInputConfiguration.textCapitalization");
  var keyboardAppearance$ = dart.privateName(text_input, "TextInputConfiguration.keyboardAppearance");
  text_input.TextInputConfiguration = class TextInputConfiguration extends core.Object {
    get inputType() {
      return this[inputType$];
    }
    set inputType(value) {
      super.inputType = value;
    }
    get readOnly() {
      return this[readOnly$];
    }
    set readOnly(value) {
      super.readOnly = value;
    }
    get obscureText() {
      return this[obscureText$];
    }
    set obscureText(value) {
      super.obscureText = value;
    }
    get autocorrect() {
      return this[autocorrect$];
    }
    set autocorrect(value) {
      super.autocorrect = value;
    }
    get autofillConfiguration() {
      return this[autofillConfiguration$];
    }
    set autofillConfiguration(value) {
      super.autofillConfiguration = value;
    }
    get smartDashesType() {
      return this[smartDashesType$];
    }
    set smartDashesType(value) {
      super.smartDashesType = value;
    }
    get smartQuotesType() {
      return this[smartQuotesType$];
    }
    set smartQuotesType(value) {
      super.smartQuotesType = value;
    }
    get enableSuggestions() {
      return this[enableSuggestions$];
    }
    set enableSuggestions(value) {
      super.enableSuggestions = value;
    }
    get actionLabel() {
      return this[actionLabel$];
    }
    set actionLabel(value) {
      super.actionLabel = value;
    }
    get inputAction() {
      return this[inputAction$];
    }
    set inputAction(value) {
      super.inputAction = value;
    }
    get textCapitalization() {
      return this[textCapitalization$];
    }
    set textCapitalization(value) {
      super.textCapitalization = value;
    }
    get keyboardAppearance() {
      return this[keyboardAppearance$];
    }
    set keyboardAppearance(value) {
      super.keyboardAppearance = value;
    }
    toJson() {
      return (() => {
        let t0 = new (IdentityMapOfString$dynamic()).new();
        t0[$_set]("inputType", this.inputType.toJson());
        t0[$_set]("readOnly", this.readOnly);
        t0[$_set]("obscureText", this.obscureText);
        t0[$_set]("autocorrect", this.autocorrect);
        t0[$_set]("smartDashesType", dart.toString(this.smartDashesType.index));
        t0[$_set]("smartQuotesType", dart.toString(this.smartQuotesType.index));
        t0[$_set]("enableSuggestions", this.enableSuggestions);
        t0[$_set]("actionLabel", this.actionLabel);
        t0[$_set]("inputAction", dart.toString(this.inputAction));
        t0[$_set]("textCapitalization", dart.toString(this.textCapitalization));
        t0[$_set]("keyboardAppearance", dart.toString(this.keyboardAppearance));
        if (this.autofillConfiguration != null) t0[$_set]("autofill", dart.nullCheck(this.autofillConfiguration).toJson());
        return t0;
      })();
    }
  };
  (text_input.TextInputConfiguration.new = function(opts) {
    let t0, t0$;
    let inputType = opts && 'inputType' in opts ? opts.inputType : C6 || CT.C6;
    if (inputType == null) dart.nullFailed(L0, 454, 10, "inputType");
    let readOnly = opts && 'readOnly' in opts ? opts.readOnly : false;
    if (readOnly == null) dart.nullFailed(L0, 455, 10, "readOnly");
    let obscureText = opts && 'obscureText' in opts ? opts.obscureText : false;
    if (obscureText == null) dart.nullFailed(L0, 456, 10, "obscureText");
    let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : true;
    if (autocorrect == null) dart.nullFailed(L0, 457, 10, "autocorrect");
    let smartDashesType = opts && 'smartDashesType' in opts ? opts.smartDashesType : null;
    let smartQuotesType = opts && 'smartQuotesType' in opts ? opts.smartQuotesType : null;
    let enableSuggestions = opts && 'enableSuggestions' in opts ? opts.enableSuggestions : true;
    if (enableSuggestions == null) dart.nullFailed(L0, 460, 10, "enableSuggestions");
    let actionLabel = opts && 'actionLabel' in opts ? opts.actionLabel : null;
    let inputAction = opts && 'inputAction' in opts ? opts.inputAction : C20 || CT.C20;
    if (inputAction == null) dart.nullFailed(L0, 462, 10, "inputAction");
    let keyboardAppearance = opts && 'keyboardAppearance' in opts ? opts.keyboardAppearance : C37 || CT.C37;
    if (keyboardAppearance == null) dart.nullFailed(L0, 463, 10, "keyboardAppearance");
    let textCapitalization = opts && 'textCapitalization' in opts ? opts.textCapitalization : C35 || CT.C35;
    if (textCapitalization == null) dart.nullFailed(L0, 464, 10, "textCapitalization");
    let autofillConfiguration = opts && 'autofillConfiguration' in opts ? opts.autofillConfiguration : null;
    this[inputType$] = inputType;
    this[readOnly$] = readOnly;
    this[obscureText$] = obscureText;
    this[autocorrect$] = autocorrect;
    this[enableSuggestions$] = enableSuggestions;
    this[actionLabel$] = actionLabel;
    this[inputAction$] = inputAction;
    this[keyboardAppearance$] = keyboardAppearance;
    this[textCapitalization$] = textCapitalization;
    this[autofillConfiguration$] = autofillConfiguration;
    if (!(inputType != null)) dart.assertFailed(null, L0, 466, 15, "inputType != null");
    if (!(obscureText != null)) dart.assertFailed(null, L0, 467, 15, "obscureText != null");
    this[smartDashesType$] = (t0 = smartDashesType, t0 == null ? dart.test(obscureText) ? text_input.SmartDashesType.disabled : text_input.SmartDashesType.enabled : t0);
    this[smartQuotesType$] = (t0$ = smartQuotesType, t0$ == null ? dart.test(obscureText) ? text_input.SmartQuotesType.disabled : text_input.SmartQuotesType.enabled : t0$);
    if (!(autocorrect != null)) dart.assertFailed(null, L0, 470, 15, "autocorrect != null");
    if (!(enableSuggestions != null)) dart.assertFailed(null, L0, 471, 15, "enableSuggestions != null");
    if (!(keyboardAppearance != null)) dart.assertFailed(null, L0, 472, 15, "keyboardAppearance != null");
    if (!(inputAction != null)) dart.assertFailed(null, L0, 473, 15, "inputAction != null");
    if (!(textCapitalization != null)) dart.assertFailed(null, L0, 474, 15, "textCapitalization != null");
    ;
  }).prototype = text_input.TextInputConfiguration.prototype;
  dart.addTypeTests(text_input.TextInputConfiguration);
  dart.addTypeCaches(text_input.TextInputConfiguration);
  dart.setMethodSignature(text_input.TextInputConfiguration, () => ({
    __proto__: dart.getMethods(text_input.TextInputConfiguration.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(text_input.TextInputConfiguration, L1);
  dart.setFieldSignature(text_input.TextInputConfiguration, () => ({
    __proto__: dart.getFields(text_input.TextInputConfiguration.__proto__),
    inputType: dart.finalFieldType(text_input.TextInputType),
    readOnly: dart.finalFieldType(core.bool),
    obscureText: dart.finalFieldType(core.bool),
    autocorrect: dart.finalFieldType(core.bool),
    autofillConfiguration: dart.finalFieldType(dart.nullable(autofill.AutofillConfiguration)),
    smartDashesType: dart.finalFieldType(text_input.SmartDashesType),
    smartQuotesType: dart.finalFieldType(text_input.SmartQuotesType),
    enableSuggestions: dart.finalFieldType(core.bool),
    actionLabel: dart.finalFieldType(dart.nullable(core.String)),
    inputAction: dart.finalFieldType(text_input.TextInputAction),
    textCapitalization: dart.finalFieldType(text_input.TextCapitalization),
    keyboardAppearance: dart.finalFieldType(ui.Brightness)
  }));
  var C38;
  var C39;
  var C40;
  var C41;
  text_input.FloatingCursorDragState = class FloatingCursorDragState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (text_input.FloatingCursorDragState.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 621, 6, "index");
    if (_name == null) dart.nullFailed(L0, 621, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = text_input.FloatingCursorDragState.prototype;
  dart.addTypeTests(text_input.FloatingCursorDragState);
  dart.addTypeCaches(text_input.FloatingCursorDragState);
  dart.setLibraryUri(text_input.FloatingCursorDragState, L1);
  dart.setFieldSignature(text_input.FloatingCursorDragState, () => ({
    __proto__: dart.getFields(text_input.FloatingCursorDragState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(text_input.FloatingCursorDragState, ['toString']);
  text_input.FloatingCursorDragState.Start = C38 || CT.C38;
  text_input.FloatingCursorDragState.Update = C39 || CT.C39;
  text_input.FloatingCursorDragState.End = C40 || CT.C40;
  text_input.FloatingCursorDragState.values = C41 || CT.C41;
  var offset$ = dart.privateName(text_input, "RawFloatingCursorPoint.offset");
  var state$ = dart.privateName(text_input, "RawFloatingCursorPoint.state");
  text_input.RawFloatingCursorPoint = class RawFloatingCursorPoint extends core.Object {
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get state() {
      return this[state$];
    }
    set state(value) {
      super.state = value;
    }
  };
  (text_input.RawFloatingCursorPoint.new = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let state = opts && 'state' in opts ? opts.state : null;
    if (state == null) dart.nullFailed(L0, 642, 19, "state");
    this[offset$] = offset;
    this[state$] = state;
    if (!(state != null)) dart.assertFailed(null, L0, 643, 15, "state != null");
    if (!(!dart.equals(state, text_input.FloatingCursorDragState.Update) || offset != null)) dart.assertFailed(null, L0, 644, 15, "state != FloatingCursorDragState.Update || offset != null");
    ;
  }).prototype = text_input.RawFloatingCursorPoint.prototype;
  dart.addTypeTests(text_input.RawFloatingCursorPoint);
  dart.addTypeCaches(text_input.RawFloatingCursorPoint);
  dart.setLibraryUri(text_input.RawFloatingCursorPoint, L1);
  dart.setFieldSignature(text_input.RawFloatingCursorPoint, () => ({
    __proto__: dart.getFields(text_input.RawFloatingCursorPoint.__proto__),
    offset: dart.finalFieldType(dart.nullable(ui.Offset)),
    state: dart.finalFieldType(text_input.FloatingCursorDragState)
  }));
  var TextRange_end = dart.privateName(ui, "TextRange.end");
  var TextRange_start = dart.privateName(ui, "TextRange.start");
  var TextSelection_isDirectional = dart.privateName(text_editing, "TextSelection.isDirectional");
  var C43;
  var TextSelection_affinity = dart.privateName(text_editing, "TextSelection.affinity");
  var TextSelection_extentOffset = dart.privateName(text_editing, "TextSelection.extentOffset");
  var TextSelection_baseOffset = dart.privateName(text_editing, "TextSelection.baseOffset");
  var C42;
  var C44;
  var text$ = dart.privateName(text_input, "TextEditingValue.text");
  var selection$ = dart.privateName(text_input, "TextEditingValue.selection");
  var composing$ = dart.privateName(text_input, "TextEditingValue.composing");
  var C45;
  text_input.TextEditingValue = class TextEditingValue extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get selection() {
      return this[selection$];
    }
    set selection(value) {
      super.selection = value;
    }
    get composing() {
      return this[composing$];
    }
    set composing(value) {
      super.composing = value;
    }
    static fromJSON(encoded) {
      let t1, t1$, t1$0, t1$1, t1$2, t1$3;
      if (encoded == null) dart.nullFailed(L0, 671, 58, "encoded");
      return new text_input.TextEditingValue.new({text: core.String.as(encoded[$_get]("text")), selection: new text_editing.TextSelection.new({baseOffset: (t1 = intN().as(encoded[$_get]("selectionBase")), t1 == null ? -1 : t1), extentOffset: (t1$ = intN().as(encoded[$_get]("selectionExtent")), t1$ == null ? -1 : t1$), affinity: (t1$0 = text_input._toTextAffinity(StringN().as(encoded[$_get]("selectionAffinity"))), t1$0 == null ? ui.TextAffinity.downstream : t1$0), isDirectional: (t1$1 = boolN().as(encoded[$_get]("selectionIsDirectional")), t1$1 == null ? false : t1$1)}), composing: new ui.TextRange.new({start: (t1$2 = intN().as(encoded[$_get]("composingBase")), t1$2 == null ? -1 : t1$2), end: (t1$3 = intN().as(encoded[$_get]("composingExtent")), t1$3 == null ? -1 : t1$3)})});
    }
    toJSON() {
      return new (IdentityMapOfString$dynamic()).from(["text", this.text, "selectionBase", this.selection.baseOffset, "selectionExtent", this.selection.extentOffset, "selectionAffinity", dart.toString(this.selection.affinity), "selectionIsDirectional", this.selection.isDirectional, "composingBase", this.composing.start, "composingExtent", this.composing.end]);
    }
    copyWith(opts) {
      let t1, t1$, t1$0;
      let text = opts && 'text' in opts ? opts.text : null;
      let selection = opts && 'selection' in opts ? opts.selection : null;
      let composing = opts && 'composing' in opts ? opts.composing : null;
      return new text_input.TextEditingValue.new({text: (t1 = text, t1 == null ? this.text : t1), selection: (t1$ = selection, t1$ == null ? this.selection : t1$), composing: (t1$0 = composing, t1$0 == null ? this.composing : t1$0)});
    }
    get isComposingRangeValid() {
      return dart.test(this.composing.isValid) && dart.test(this.composing.isNormalized) && dart.notNull(this.composing.end) <= this.text.length;
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "TextEditingValue")) + "(text: ???" + dart.str(this.text) + "???, selection: " + dart.str(this.selection) + ", composing: " + dart.str(this.composing) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      return text_input.TextEditingValue.is(other) && other.text == this.text && dart.equals(other.selection, this.selection) && dart.equals(other.composing, this.composing);
    }
    get hashCode() {
      return ui.hashValues(dart.hashCode(this.text), dart.hashCode(this.selection), dart.hashCode(this.composing));
    }
  };
  (text_input.TextEditingValue.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : "";
    if (text == null) dart.nullFailed(L0, 663, 10, "text");
    let selection = opts && 'selection' in opts ? opts.selection : C42 || CT.C42;
    if (selection == null) dart.nullFailed(L0, 664, 10, "selection");
    let composing = opts && 'composing' in opts ? opts.composing : C44 || CT.C44;
    if (composing == null) dart.nullFailed(L0, 665, 10, "composing");
    this[text$] = text;
    this[selection$] = selection;
    this[composing$] = composing;
    if (!(text != null)) dart.assertFailed(null, L0, 666, 15, "text != null");
    if (!(selection != null)) dart.assertFailed(null, L0, 667, 15, "selection != null");
    if (!(composing != null)) dart.assertFailed(null, L0, 668, 15, "composing != null");
    ;
  }).prototype = text_input.TextEditingValue.prototype;
  dart.addTypeTests(text_input.TextEditingValue);
  dart.addTypeCaches(text_input.TextEditingValue);
  dart.setMethodSignature(text_input.TextEditingValue, () => ({
    __proto__: dart.getMethods(text_input.TextEditingValue.__proto__),
    toJSON: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    copyWith: dart.fnType(text_input.TextEditingValue, [], {composing: dart.nullable(ui.TextRange), selection: dart.nullable(text_editing.TextSelection), text: dart.nullable(core.String)}, {})
  }));
  dart.setGetterSignature(text_input.TextEditingValue, () => ({
    __proto__: dart.getGetters(text_input.TextEditingValue.__proto__),
    isComposingRangeValid: core.bool
  }));
  dart.setLibraryUri(text_input.TextEditingValue, L1);
  dart.setFieldSignature(text_input.TextEditingValue, () => ({
    __proto__: dart.getFields(text_input.TextEditingValue.__proto__),
    text: dart.finalFieldType(core.String),
    selection: dart.finalFieldType(text_editing.TextSelection),
    composing: dart.finalFieldType(ui.TextRange)
  }));
  dart.defineExtensionMethods(text_input.TextEditingValue, ['toString', '_equals']);
  dart.defineExtensionAccessors(text_input.TextEditingValue, ['hashCode']);
  dart.defineLazy(text_input.TextEditingValue, {
    /*text_input.TextEditingValue.empty*/get empty() {
      return C45 || CT.C45;
    }
  }, false);
  text_input.TextSelectionDelegate = class TextSelectionDelegate extends core.Object {
    get cutEnabled() {
      return true;
    }
    get copyEnabled() {
      return true;
    }
    get pasteEnabled() {
      return true;
    }
    get selectAllEnabled() {
      return true;
    }
  };
  (text_input.TextSelectionDelegate.new = function() {
    ;
  }).prototype = text_input.TextSelectionDelegate.prototype;
  dart.addTypeTests(text_input.TextSelectionDelegate);
  dart.addTypeCaches(text_input.TextSelectionDelegate);
  dart.setGetterSignature(text_input.TextSelectionDelegate, () => ({
    __proto__: dart.getGetters(text_input.TextSelectionDelegate.__proto__),
    cutEnabled: core.bool,
    copyEnabled: core.bool,
    pasteEnabled: core.bool,
    selectAllEnabled: core.bool
  }));
  dart.setLibraryUri(text_input.TextSelectionDelegate, L1);
  text_input.TextInputClient = class TextInputClient extends core.Object {};
  (text_input.TextInputClient.new = function() {
    ;
  }).prototype = text_input.TextInputClient.prototype;
  dart.addTypeTests(text_input.TextInputClient);
  dart.addTypeCaches(text_input.TextInputClient);
  dart.setLibraryUri(text_input.TextInputClient, L1);
  var _cachedSize = dart.privateName(text_input, "_cachedSize");
  var _cachedTransform = dart.privateName(text_input, "_cachedTransform");
  var _cachedRect = dart.privateName(text_input, "_cachedRect");
  var _client$ = dart.privateName(text_input, "_client");
  var _id = dart.privateName(text_input, "_id");
  var _currentConnection = dart.privateName(text_input, "_currentConnection");
  var _show = dart.privateName(text_input, "_show");
  var _requestAutofill = dart.privateName(text_input, "_requestAutofill");
  var _updateConfig = dart.privateName(text_input, "_updateConfig");
  var _setEditingState = dart.privateName(text_input, "_setEditingState");
  var _setEditableSizeAndTransform = dart.privateName(text_input, "_setEditableSizeAndTransform");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C46;
  var _setComposingTextRect = dart.privateName(text_input, "_setComposingTextRect");
  var _setStyle = dart.privateName(text_input, "_setStyle");
  var _clearClient = dart.privateName(text_input, "_clearClient");
  text_input.TextInputConnection = class TextInputConnection extends core.Object {
    static debugResetId(opts) {
      let to = opts && 'to' in opts ? opts.to : 1;
      if (to == null) dart.nullFailed(L0, 886, 33, "to");
      if (!(to != null)) dart.assertFailed(null, L0, 887, 12, "to != null");
      if (!dart.test(dart.fn(() => {
        text_input.TextInputConnection._nextId = to;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 888, 12, "() {\n      _nextId = to;\n      return true;\n    }()");
    }
    get attached() {
      return dart.equals(text_input.TextInput._instance[_currentConnection], this);
    }
    show() {
      if (!dart.test(this.attached)) dart.assertFailed(null, L0, 901, 12, "attached");
      text_input.TextInput._instance[_show]();
    }
    requestAutofill() {
      if (!dart.test(this.attached)) dart.assertFailed(null, L0, 914, 12, "attached");
      text_input.TextInput._instance[_requestAutofill]();
    }
    updateConfig(configuration) {
      if (configuration == null) dart.nullFailed(L0, 920, 44, "configuration");
      if (!dart.test(this.attached)) dart.assertFailed(null, L0, 921, 12, "attached");
      text_input.TextInput._instance[_updateConfig](configuration);
    }
    setEditingState(value) {
      if (value == null) dart.nullFailed(L0, 927, 41, "value");
      if (!dart.test(this.attached)) dart.assertFailed(null, L0, 928, 12, "attached");
      text_input.TextInput._instance[_setEditingState](value);
    }
    setEditableSizeAndTransform(editableBoxSize, transform) {
      if (editableBoxSize == null) dart.nullFailed(L0, 941, 41, "editableBoxSize");
      if (transform == null) dart.nullFailed(L0, 941, 66, "transform");
      if (!dart.equals(editableBoxSize, this[_cachedSize]) || !dart.equals(transform, this[_cachedTransform])) {
        this[_cachedSize] = editableBoxSize;
        this[_cachedTransform] = transform;
        text_input.TextInput._instance[_setEditableSizeAndTransform](new (IdentityMapOfString$dynamic()).from(["width", editableBoxSize.width, "height", editableBoxSize.height, "transform", transform.storage]));
      }
    }
    setComposingRect(rect) {
      if (rect == null) dart.nullFailed(L0, 962, 30, "rect");
      if (!(rect != null)) dart.assertFailed(null, L0, 963, 12, "rect != null");
      if (dart.equals(rect, this[_cachedRect])) return;
      this[_cachedRect] = rect;
      let validRect = dart.test(rect.isFinite) ? rect : ui.Offset.zero['&'](C46 || CT.C46);
      text_input.TextInput._instance[_setComposingTextRect](new (IdentityMapOfString$dynamic()).from(["width", validRect.width, "height", validRect.height, "x", validRect.left, "y", validRect.top]));
    }
    setStyle(opts) {
      let t1;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
      let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      if (textDirection == null) dart.nullFailed(L0, 987, 28, "textDirection");
      let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
      if (textAlign == null) dart.nullFailed(L0, 988, 24, "textAlign");
      if (!dart.test(this.attached)) dart.assertFailed(null, L0, 990, 12, "attached");
      text_input.TextInput._instance[_setStyle](new (IdentityMapOfString$dynamic()).from(["fontFamily", fontFamily, "fontSize", fontSize, "fontWeightIndex", (t1 = fontWeight, t1 == null ? null : t1.index), "textAlignIndex", textAlign.index, "textDirectionIndex", textDirection.index]));
    }
    close() {
      if (dart.test(this.attached)) {
        text_input.TextInput._instance[_clearClient]();
      }
      if (!!dart.test(this.attached)) dart.assertFailed(null, L0, 1011, 12, "!attached");
    }
    connectionClosedReceived() {
      text_input.TextInput._instance[_currentConnection] = null;
      if (!!dart.test(this.attached)) dart.assertFailed(null, L0, 1019, 12, "!attached");
    }
  };
  (text_input.TextInputConnection.__ = function(_client) {
    let t1;
    if (_client == null) dart.nullFailed(L0, 870, 30, "_client");
    this[_cachedSize] = null;
    this[_cachedTransform] = null;
    this[_cachedRect] = null;
    this[_client$] = _client;
    if (!(_client != null)) dart.assertFailed(null, L0, 871, 16, "_client != null");
    this[_id] = (t1 = text_input.TextInputConnection._nextId, text_input.TextInputConnection._nextId = dart.notNull(t1) + 1, t1);
    ;
  }).prototype = text_input.TextInputConnection.prototype;
  dart.addTypeTests(text_input.TextInputConnection);
  dart.addTypeCaches(text_input.TextInputConnection);
  dart.setMethodSignature(text_input.TextInputConnection, () => ({
    __proto__: dart.getMethods(text_input.TextInputConnection.__proto__),
    show: dart.fnType(dart.void, []),
    requestAutofill: dart.fnType(dart.void, []),
    updateConfig: dart.fnType(dart.void, [text_input.TextInputConfiguration]),
    setEditingState: dart.fnType(dart.void, [text_input.TextEditingValue]),
    setEditableSizeAndTransform: dart.fnType(dart.void, [ui.Size, vector_math_64.Matrix4]),
    setComposingRect: dart.fnType(dart.void, [ui.Rect]),
    setStyle: dart.fnType(dart.void, [], {}, {fontFamily: dart.nullable(core.String), fontSize: dart.nullable(core.double), fontWeight: dart.nullable(ui.FontWeight), textAlign: ui.TextAlign, textDirection: ui.TextDirection}),
    close: dart.fnType(dart.void, []),
    connectionClosedReceived: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(text_input.TextInputConnection, () => ({
    __proto__: dart.getGetters(text_input.TextInputConnection.__proto__),
    attached: core.bool
  }));
  dart.setLibraryUri(text_input.TextInputConnection, L1);
  dart.setFieldSignature(text_input.TextInputConnection, () => ({
    __proto__: dart.getFields(text_input.TextInputConnection.__proto__),
    [_cachedSize]: dart.fieldType(dart.nullable(ui.Size)),
    [_cachedTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_cachedRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [_id]: dart.finalFieldType(core.int),
    [_client$]: dart.finalFieldType(text_input.TextInputClient)
  }));
  dart.defineLazy(text_input.TextInputConnection, {
    /*text_input.TextInputConnection._nextId*/get _nextId() {
      return 1;
    },
    set _nextId(_) {}
  }, false);
  var __TextInput__channel = dart.privateName(text_input, "_#TextInput#_channel");
  var __TextInput__channel_isSet = dart.privateName(text_input, "_#TextInput#_channel#isSet");
  var __TextInput__currentConfiguration = dart.privateName(text_input, "_#TextInput#_currentConfiguration");
  var __TextInput__currentConfiguration_isSet = dart.privateName(text_input, "_#TextInput#_currentConfiguration#isSet");
  var _hidePending = dart.privateName(text_input, "_hidePending");
  var _channel = dart.privateName(text_input, "_channel");
  var _handleTextInputInvocation = dart.privateName(text_input, "_handleTextInputInvocation");
  var _attach = dart.privateName(text_input, "_attach");
  var _currentConfiguration = dart.privateName(text_input, "_currentConfiguration");
  var _scheduleHide = dart.privateName(text_input, "_scheduleHide");
  var C47;
  var C48;
  text_input.TextInput = class TextInput extends core.Object {
    static setChannel(newChannel) {
      if (newChannel == null) dart.nullFailed(L0, 1143, 40, "newChannel");
      if (!dart.test(dart.fn(() => {
        let t1;
        text_input.TextInput._instance[_channel] = (t1 = newChannel, (() => {
          t1.setMethodCallHandler(dart.bind(text_input.TextInput._instance, _handleTextInputInvocation));
          return t1;
        })());
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 1144, 12, "() {\n      _instance._channel = newChannel..setMethodCallHandler(_instance._handleTextInputInvocation);\n      return true;\n    }()");
    }
    static attach(client, configuration) {
      if (client == null) dart.nullFailed(L0, 1188, 53, "client");
      if (configuration == null) dart.nullFailed(L0, 1188, 84, "configuration");
      if (!(client != null)) dart.assertFailed(null, L0, 1189, 12, "client != null");
      if (!(configuration != null)) dart.assertFailed(null, L0, 1190, 12, "configuration != null");
      let connection = new text_input.TextInputConnection.__(client);
      text_input.TextInput._instance[_attach](connection, configuration);
      return connection;
    }
    [_attach](connection, configuration) {
      if (connection == null) dart.nullFailed(L0, 1199, 36, "connection");
      if (configuration == null) dart.nullFailed(L0, 1199, 71, "configuration");
      if (!(connection != null)) dart.assertFailed(null, L0, 1200, 12, "connection != null");
      if (!(connection[_client$] != null)) dart.assertFailed(null, L0, 1201, 12, "connection._client != null");
      if (!(configuration != null)) dart.assertFailed(null, L0, 1202, 12, "configuration != null");
      if (!dart.test(text_input.TextInput._debugEnsureInputActionWorksOnPlatform(configuration.inputAction))) dart.assertFailed(null, L0, 1203, 12, "_debugEnsureInputActionWorksOnPlatform(configuration.inputAction)");
      this[_channel].invokeMethod(dart.void, "TextInput.setClient", [connection[_id], configuration.toJson()]);
      this[_currentConnection] = connection;
      this[_currentConfiguration] = configuration;
    }
    static _debugEnsureInputActionWorksOnPlatform(inputAction) {
      if (inputAction == null) dart.nullFailed(L0, 1212, 70, "inputAction");
      if (!dart.test(dart.fn(() => {
        if (true) {
          return true;
        }
        if (dart.test(io.Platform.isIOS)) {
          if (!dart.test(text_input.TextInput._iOSSupportedInputActions[$contains](inputAction))) dart.assertFailed("The requested TextInputAction \"" + dart.str(inputAction) + "\" is not supported on iOS.", L0, 1220, 11, "_iOSSupportedInputActions.contains(inputAction)");
        } else if (dart.test(io.Platform.isAndroid)) {
          if (!dart.test(text_input.TextInput._androidSupportedInputActions[$contains](inputAction))) dart.assertFailed("The requested TextInputAction \"" + dart.str(inputAction) + "\" is not supported on Android.", L0, 1225, 11, "_androidSupportedInputActions.contains(inputAction)");
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 1213, 12, "() {\n      if (kIsWeb) {\n        // TODO(flutterweb): what makes sense here?\n        return true;\n      }\n      if (Platform.isIOS) {\n        assert(\n          _iOSSupportedInputActions.contains(inputAction),\n          'The requested TextInputAction \"$inputAction\" is not supported on iOS.',\n        );\n      } else if (Platform.isAndroid) {\n        assert(\n          _androidSupportedInputActions.contains(inputAction),\n          'The requested TextInputAction \"$inputAction\" is not supported on Android.',\n        );\n      }\n      return true;\n    }()");
      return true;
    }
    get [_channel]() {
      let t1;
      return dart.test(this[__TextInput__channel_isSet]) ? (t1 = this[__TextInput__channel], t1) : dart.throw(new _internal.LateError.fieldNI("_channel"));
    }
    set [_channel](t1) {
      if (t1 == null) dart.nullFailed(L0, 1234, 22, "null");
      this[__TextInput__channel_isSet] = true;
      this[__TextInput__channel] = t1;
    }
    get [_currentConfiguration]() {
      let t2;
      return dart.test(this[__TextInput__currentConfiguration_isSet]) ? (t2 = this[__TextInput__currentConfiguration], t2) : dart.throw(new _internal.LateError.fieldNI("_currentConfiguration"));
    }
    set [_currentConfiguration](t2) {
      if (t2 == null) dart.nullFailed(L0, 1237, 31, "null");
      this[__TextInput__currentConfiguration_isSet] = true;
      this[__TextInput__currentConfiguration] = t2;
    }
    [_handleTextInputInvocation](methodCall) {
      if (methodCall == null) dart.nullFailed(L0, 1239, 57, "methodCall");
      return async.async(dart.dynamic, (function* _handleTextInputInvocation() {
        let t4, t3;
        if (this[_currentConnection] == null) return;
        let method = methodCall.method;
        if (method === "TextInputClient.requestExistingInputState") {
          if (!(dart.nullCheck(this[_currentConnection])[_client$] != null)) dart.assertFailed(null, L0, 1247, 14, "_currentConnection!._client != null");
          this[_attach](dart.nullCheck(this[_currentConnection]), this[_currentConfiguration]);
          let editingValue = dart.nullCheck(this[_currentConnection])[_client$].currentTextEditingValue;
          if (editingValue != null) {
            this[_setEditingState](editingValue);
          }
          return;
        }
        let args = core.List.as(methodCall.arguments);
        if (method === "TextInputClient.updateEditingStateWithTag") {
          let client = dart.nullCheck(this[_currentConnection])[_client$];
          if (!(client != null)) dart.assertFailed(null, L0, 1260, 14, "client != null");
          let scope = client.currentAutofillScope;
          let editingValue = MapOfString$dynamic().as(args[$_get](1));
          for (let tag of editingValue[$keys]) {
            let textEditingValue = text_input.TextEditingValue.fromJSON(MapOfString$dynamic().as(editingValue[$_get](tag)));
            t3 = scope;
            t3 == null ? null : (t4 = t3.getAutofillClient(tag), t4 == null ? null : t4.updateEditingValue(textEditingValue));
          }
          return;
        }
        let client = core.int.as(args[$_get](0));
        if (client != dart.nullCheck(this[_currentConnection])[_id]) return;
        switch (method) {
          case "TextInputClient.updateEditingState":
          {
            dart.nullCheck(this[_currentConnection])[_client$].updateEditingValue(text_input.TextEditingValue.fromJSON(MapOfString$dynamic().as(args[$_get](1))));
            break;
          }
          case "TextInputClient.performAction":
          {
            dart.nullCheck(this[_currentConnection])[_client$].performAction(text_input._toTextInputAction(core.String.as(args[$_get](1))));
            break;
          }
          case "TextInputClient.performPrivateCommand":
          {
            dart.nullCheck(this[_currentConnection])[_client$].performPrivateCommand(core.String.as(dart.dsend(args[$_get](1), '_get', ["action"])), MapOfString$dynamic().as(dart.dsend(args[$_get](1), '_get', ["data"])));
            break;
          }
          case "TextInputClient.updateFloatingCursor":
          {
            dart.nullCheck(this[_currentConnection])[_client$].updateFloatingCursor(text_input._toTextPoint(text_input._toTextCursorAction(core.String.as(args[$_get](1))), MapOfString$dynamic().as(args[$_get](2))));
            break;
          }
          case "TextInputClient.onConnectionClosed":
          {
            dart.nullCheck(this[_currentConnection])[_client$].connectionClosed();
            break;
          }
          case "TextInputClient.showAutocorrectionPromptRect":
          {
            dart.nullCheck(this[_currentConnection])[_client$].showAutocorrectionPromptRect(core.int.as(args[$_get](1)), core.int.as(args[$_get](2)));
            break;
          }
          default:
          {
            dart.throw(new message_codec.MissingPluginException.new());
          }
        }
      }).bind(this));
    }
    [_scheduleHide]() {
      if (dart.test(this[_hidePending])) return;
      this[_hidePending] = true;
      async.scheduleMicrotask(dart.fn(() => {
        this[_hidePending] = false;
        if (this[_currentConnection] == null) this[_channel].invokeMethod(dart.void, "TextInput.hide");
      }, VoidTovoid()));
    }
    [_clearClient]() {
      this[_channel].invokeMethod(dart.void, "TextInput.clearClient");
      this[_currentConnection] = null;
      this[_scheduleHide]();
    }
    [_updateConfig](configuration) {
      if (configuration == null) dart.nullFailed(L0, 1328, 45, "configuration");
      if (!(configuration != null)) dart.assertFailed(null, L0, 1329, 12, "configuration != null");
      this[_channel].invokeMethod(dart.void, "TextInput.updateConfig", configuration.toJson());
    }
    [_setEditingState](value) {
      if (value == null) dart.nullFailed(L0, 1336, 42, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 1337, 12, "value != null");
      this[_channel].invokeMethod(dart.void, "TextInput.setEditingState", value.toJSON());
    }
    [_show]() {
      this[_channel].invokeMethod(dart.void, "TextInput.show");
    }
    [_requestAutofill]() {
      this[_channel].invokeMethod(dart.void, "TextInput.requestAutofill");
    }
    [_setEditableSizeAndTransform](args) {
      if (args == null) dart.nullFailed(L0, 1352, 58, "args");
      this[_channel].invokeMethod(dart.void, "TextInput.setEditableSizeAndTransform", args);
    }
    [_setComposingTextRect](args) {
      if (args == null) dart.nullFailed(L0, 1359, 51, "args");
      this[_channel].invokeMethod(dart.void, "TextInput.setMarkedTextRect", args);
    }
    [_setStyle](args) {
      if (args == null) dart.nullFailed(L0, 1366, 39, "args");
      this[_channel].invokeMethod(dart.void, "TextInput.setStyle", args);
    }
    static finishAutofillContext(opts) {
      let shouldSave = opts && 'shouldSave' in opts ? opts.shouldSave : true;
      if (shouldSave == null) dart.nullFailed(L0, 1420, 44, "shouldSave");
      if (!(shouldSave != null)) dart.assertFailed(null, L0, 1421, 12, "shouldSave != null");
      text_input.TextInput._instance[_channel].invokeMethod(dart.void, "TextInput.finishAutofillContext", shouldSave);
    }
  };
  (text_input.TextInput.__ = function() {
    this[__TextInput__channel] = null;
    this[__TextInput__channel_isSet] = false;
    this[_currentConnection] = null;
    this[__TextInput__currentConfiguration] = null;
    this[__TextInput__currentConfiguration_isSet] = false;
    this[_hidePending] = false;
    this[_channel] = system_channels.SystemChannels.textInput;
    this[_channel].setMethodCallHandler(dart.bind(this, _handleTextInputInvocation));
  }).prototype = text_input.TextInput.prototype;
  dart.addTypeTests(text_input.TextInput);
  dart.addTypeCaches(text_input.TextInput);
  dart.setMethodSignature(text_input.TextInput, () => ({
    __proto__: dart.getMethods(text_input.TextInput.__proto__),
    [_attach]: dart.fnType(dart.void, [text_input.TextInputConnection, text_input.TextInputConfiguration]),
    [_handleTextInputInvocation]: dart.fnType(async.Future, [message_codec.MethodCall]),
    [_scheduleHide]: dart.fnType(dart.void, []),
    [_clearClient]: dart.fnType(dart.void, []),
    [_updateConfig]: dart.fnType(dart.void, [text_input.TextInputConfiguration]),
    [_setEditingState]: dart.fnType(dart.void, [text_input.TextEditingValue]),
    [_show]: dart.fnType(dart.void, []),
    [_requestAutofill]: dart.fnType(dart.void, []),
    [_setEditableSizeAndTransform]: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)]),
    [_setComposingTextRect]: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)]),
    [_setStyle]: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)])
  }));
  dart.setGetterSignature(text_input.TextInput, () => ({
    __proto__: dart.getGetters(text_input.TextInput.__proto__),
    [_channel]: platform_channel.MethodChannel,
    [_currentConfiguration]: text_input.TextInputConfiguration
  }));
  dart.setSetterSignature(text_input.TextInput, () => ({
    __proto__: dart.getSetters(text_input.TextInput.__proto__),
    [_channel]: platform_channel.MethodChannel,
    [_currentConfiguration]: text_input.TextInputConfiguration
  }));
  dart.setLibraryUri(text_input.TextInput, L1);
  dart.setFieldSignature(text_input.TextInput, () => ({
    __proto__: dart.getFields(text_input.TextInput.__proto__),
    [__TextInput__channel]: dart.fieldType(dart.nullable(platform_channel.MethodChannel)),
    [__TextInput__channel_isSet]: dart.fieldType(core.bool),
    [_currentConnection]: dart.fieldType(dart.nullable(text_input.TextInputConnection)),
    [__TextInput__currentConfiguration]: dart.fieldType(dart.nullable(text_input.TextInputConfiguration)),
    [__TextInput__currentConfiguration_isSet]: dart.fieldType(core.bool),
    [_hidePending]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(text_input.TextInput, {
    /*text_input.TextInput._instance*/get _instance() {
      return new text_input.TextInput.__();
    },
    /*text_input.TextInput._androidSupportedInputActions*/get _androidSupportedInputActions() {
      return C47 || CT.C47;
    },
    /*text_input.TextInput._iOSSupportedInputActions*/get _iOSSupportedInputActions() {
      return C48 || CT.C48;
    }
  }, false);
  var C49;
  text_input._toTextAffinity = function _toTextAffinity(affinity) {
    switch (affinity) {
      case "TextAffinity.downstream":
      {
        return ui.TextAffinity.downstream;
      }
      case "TextAffinity.upstream":
      {
        return ui.TextAffinity.upstream;
      }
    }
    return null;
  };
  text_input._toTextInputAction = function _toTextInputAction(action) {
    if (action == null) dart.nullFailed(L0, 1023, 43, "action");
    switch (action) {
      case "TextInputAction.none":
      {
        return text_input.TextInputAction.none;
      }
      case "TextInputAction.unspecified":
      {
        return text_input.TextInputAction.unspecified;
      }
      case "TextInputAction.go":
      {
        return text_input.TextInputAction.go;
      }
      case "TextInputAction.search":
      {
        return text_input.TextInputAction.search;
      }
      case "TextInputAction.send":
      {
        return text_input.TextInputAction.send;
      }
      case "TextInputAction.next":
      {
        return text_input.TextInputAction.next;
      }
      case "TextInputAction.previous":
      {
        return text_input.TextInputAction.previous;
      }
      case "TextInputAction.continue_action":
      {
        return text_input.TextInputAction.continueAction;
      }
      case "TextInputAction.join":
      {
        return text_input.TextInputAction.join;
      }
      case "TextInputAction.route":
      {
        return text_input.TextInputAction.route;
      }
      case "TextInputAction.emergencyCall":
      {
        return text_input.TextInputAction.emergencyCall;
      }
      case "TextInputAction.done":
      {
        return text_input.TextInputAction.done;
      }
      case "TextInputAction.newline":
      {
        return text_input.TextInputAction.newline;
      }
    }
    dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Unknown text input action: " + dart.str(action))])));
  };
  text_input._toTextCursorAction = function _toTextCursorAction(state) {
    if (state == null) dart.nullFailed(L0, 1055, 52, "state");
    switch (state) {
      case "FloatingCursorDragState.start":
      {
        return text_input.FloatingCursorDragState.Start;
      }
      case "FloatingCursorDragState.update":
      {
        return text_input.FloatingCursorDragState.Update;
      }
      case "FloatingCursorDragState.end":
      {
        return text_input.FloatingCursorDragState.End;
      }
    }
    dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Unknown text cursor action: " + dart.str(state))])));
  };
  text_input._toTextPoint = function _toTextPoint(state, encoded) {
    if (state == null) dart.nullFailed(L0, 1067, 61, "state");
    if (encoded == null) dart.nullFailed(L0, 1067, 89, "encoded");
    if (!(state != null)) dart.assertFailed("You must provide a state to set a new editing point.", L0, 1068, 10, "state != null");
    if (!(encoded[$_get]("X") != null)) dart.assertFailed("You must provide a value for the horizontal location of the floating cursor.", L0, 1069, 10, "encoded['X'] != null");
    if (!(encoded[$_get]("Y") != null)) dart.assertFailed("You must provide a value for the vertical location of the floating cursor.", L0, 1070, 10, "encoded['Y'] != null");
    let offset = dart.equals(state, text_input.FloatingCursorDragState.Update) ? new ui.Offset.new(core.double.as(encoded[$_get]("X")), core.double.as(encoded[$_get]("Y"))) : C49 || CT.C49;
    return new text_input.RawFloatingCursorPoint.new({offset: offset, state: state});
  };
  autofill.AutofillHints = class AutofillHints extends core.Object {};
  (autofill.AutofillHints.__ = function() {
    ;
  }).prototype = autofill.AutofillHints.prototype;
  dart.addTypeTests(autofill.AutofillHints);
  dart.addTypeCaches(autofill.AutofillHints);
  dart.setLibraryUri(autofill.AutofillHints, L2);
  dart.defineLazy(autofill.AutofillHints, {
    /*autofill.AutofillHints.addressCity*/get addressCity() {
      return "addressCity";
    },
    /*autofill.AutofillHints.addressCityAndState*/get addressCityAndState() {
      return "addressCityAndState";
    },
    /*autofill.AutofillHints.addressState*/get addressState() {
      return "addressState";
    },
    /*autofill.AutofillHints.birthday*/get birthday() {
      return "birthday";
    },
    /*autofill.AutofillHints.birthdayDay*/get birthdayDay() {
      return "birthdayDay";
    },
    /*autofill.AutofillHints.birthdayMonth*/get birthdayMonth() {
      return "birthdayMonth";
    },
    /*autofill.AutofillHints.birthdayYear*/get birthdayYear() {
      return "birthdayYear";
    },
    /*autofill.AutofillHints.countryCode*/get countryCode() {
      return "countryCode";
    },
    /*autofill.AutofillHints.countryName*/get countryName() {
      return "countryName";
    },
    /*autofill.AutofillHints.creditCardExpirationDate*/get creditCardExpirationDate() {
      return "creditCardExpirationDate";
    },
    /*autofill.AutofillHints.creditCardExpirationDay*/get creditCardExpirationDay() {
      return "creditCardExpirationDay";
    },
    /*autofill.AutofillHints.creditCardExpirationMonth*/get creditCardExpirationMonth() {
      return "creditCardExpirationMonth";
    },
    /*autofill.AutofillHints.creditCardExpirationYear*/get creditCardExpirationYear() {
      return "creditCardExpirationYear";
    },
    /*autofill.AutofillHints.creditCardFamilyName*/get creditCardFamilyName() {
      return "creditCardFamilyName";
    },
    /*autofill.AutofillHints.creditCardGivenName*/get creditCardGivenName() {
      return "creditCardGivenName";
    },
    /*autofill.AutofillHints.creditCardMiddleName*/get creditCardMiddleName() {
      return "creditCardMiddleName";
    },
    /*autofill.AutofillHints.creditCardName*/get creditCardName() {
      return "creditCardName";
    },
    /*autofill.AutofillHints.creditCardNumber*/get creditCardNumber() {
      return "creditCardNumber";
    },
    /*autofill.AutofillHints.creditCardSecurityCode*/get creditCardSecurityCode() {
      return "creditCardSecurityCode";
    },
    /*autofill.AutofillHints.creditCardType*/get creditCardType() {
      return "creditCardType";
    },
    /*autofill.AutofillHints.email*/get email() {
      return "email";
    },
    /*autofill.AutofillHints.familyName*/get familyName() {
      return "familyName";
    },
    /*autofill.AutofillHints.fullStreetAddress*/get fullStreetAddress() {
      return "fullStreetAddress";
    },
    /*autofill.AutofillHints.gender*/get gender() {
      return "gender";
    },
    /*autofill.AutofillHints.givenName*/get givenName() {
      return "givenName";
    },
    /*autofill.AutofillHints.impp*/get impp() {
      return "impp";
    },
    /*autofill.AutofillHints.jobTitle*/get jobTitle() {
      return "jobTitle";
    },
    /*autofill.AutofillHints.language*/get language() {
      return "language";
    },
    /*autofill.AutofillHints.location*/get location() {
      return "location";
    },
    /*autofill.AutofillHints.middleInitial*/get middleInitial() {
      return "middleInitial";
    },
    /*autofill.AutofillHints.middleName*/get middleName() {
      return "middleName";
    },
    /*autofill.AutofillHints.name_*/get name_() {
      return "name";
    },
    /*autofill.AutofillHints.namePrefix*/get namePrefix() {
      return "namePrefix";
    },
    /*autofill.AutofillHints.nameSuffix*/get nameSuffix() {
      return "nameSuffix";
    },
    /*autofill.AutofillHints.newPassword*/get newPassword() {
      return "newPassword";
    },
    /*autofill.AutofillHints.newUsername*/get newUsername() {
      return "newUsername";
    },
    /*autofill.AutofillHints.nickname*/get nickname() {
      return "nickname";
    },
    /*autofill.AutofillHints.oneTimeCode*/get oneTimeCode() {
      return "oneTimeCode";
    },
    /*autofill.AutofillHints.organizationName*/get organizationName() {
      return "organizationName";
    },
    /*autofill.AutofillHints.password*/get password() {
      return "password";
    },
    /*autofill.AutofillHints.photo*/get photo() {
      return "photo";
    },
    /*autofill.AutofillHints.postalAddress*/get postalAddress() {
      return "postalAddress";
    },
    /*autofill.AutofillHints.postalAddressExtended*/get postalAddressExtended() {
      return "postalAddressExtended";
    },
    /*autofill.AutofillHints.postalAddressExtendedPostalCode*/get postalAddressExtendedPostalCode() {
      return "postalAddressExtendedPostalCode";
    },
    /*autofill.AutofillHints.postalCode*/get postalCode() {
      return "postalCode";
    },
    /*autofill.AutofillHints.streetAddressLevel1*/get streetAddressLevel1() {
      return "streetAddressLevel1";
    },
    /*autofill.AutofillHints.streetAddressLevel2*/get streetAddressLevel2() {
      return "streetAddressLevel2";
    },
    /*autofill.AutofillHints.streetAddressLevel3*/get streetAddressLevel3() {
      return "streetAddressLevel3";
    },
    /*autofill.AutofillHints.streetAddressLevel4*/get streetAddressLevel4() {
      return "streetAddressLevel4";
    },
    /*autofill.AutofillHints.streetAddressLine1*/get streetAddressLine1() {
      return "streetAddressLine1";
    },
    /*autofill.AutofillHints.streetAddressLine2*/get streetAddressLine2() {
      return "streetAddressLine2";
    },
    /*autofill.AutofillHints.streetAddressLine3*/get streetAddressLine3() {
      return "streetAddressLine3";
    },
    /*autofill.AutofillHints.sublocality*/get sublocality() {
      return "sublocality";
    },
    /*autofill.AutofillHints.telephoneNumber*/get telephoneNumber() {
      return "telephoneNumber";
    },
    /*autofill.AutofillHints.telephoneNumberAreaCode*/get telephoneNumberAreaCode() {
      return "telephoneNumberAreaCode";
    },
    /*autofill.AutofillHints.telephoneNumberCountryCode*/get telephoneNumberCountryCode() {
      return "telephoneNumberCountryCode";
    },
    /*autofill.AutofillHints.telephoneNumberDevice*/get telephoneNumberDevice() {
      return "telephoneNumberDevice";
    },
    /*autofill.AutofillHints.telephoneNumberExtension*/get telephoneNumberExtension() {
      return "telephoneNumberExtension";
    },
    /*autofill.AutofillHints.telephoneNumberLocal*/get telephoneNumberLocal() {
      return "telephoneNumberLocal";
    },
    /*autofill.AutofillHints.telephoneNumberLocalPrefix*/get telephoneNumberLocalPrefix() {
      return "telephoneNumberLocalPrefix";
    },
    /*autofill.AutofillHints.telephoneNumberLocalSuffix*/get telephoneNumberLocalSuffix() {
      return "telephoneNumberLocalSuffix";
    },
    /*autofill.AutofillHints.telephoneNumberNational*/get telephoneNumberNational() {
      return "telephoneNumberNational";
    },
    /*autofill.AutofillHints.transactionAmount*/get transactionAmount() {
      return "transactionAmount";
    },
    /*autofill.AutofillHints.transactionCurrency*/get transactionCurrency() {
      return "transactionCurrency";
    },
    /*autofill.AutofillHints.url*/get url() {
      return "url";
    },
    /*autofill.AutofillHints.username*/get username() {
      return "username";
    }
  }, false);
  var uniqueIdentifier$ = dart.privateName(autofill, "AutofillConfiguration.uniqueIdentifier");
  var autofillHints$ = dart.privateName(autofill, "AutofillConfiguration.autofillHints");
  var currentEditingValue$ = dart.privateName(autofill, "AutofillConfiguration.currentEditingValue");
  autofill.AutofillConfiguration = class AutofillConfiguration extends core.Object {
    get uniqueIdentifier() {
      return this[uniqueIdentifier$];
    }
    set uniqueIdentifier(value) {
      super.uniqueIdentifier = value;
    }
    get autofillHints() {
      return this[autofillHints$];
    }
    set autofillHints(value) {
      super.autofillHints = value;
    }
    get currentEditingValue() {
      return this[currentEditingValue$];
    }
    set currentEditingValue(value) {
      super.currentEditingValue = value;
    }
    toJson() {
      if (!dart.test(this.autofillHints[$isNotEmpty])) dart.assertFailed(null, L3, 699, 12, "autofillHints.isNotEmpty");
      return new (IdentityMapOfString$dynamic()).from(["uniqueIdentifier", this.uniqueIdentifier, "hints", this.autofillHints, "editingValue", this.currentEditingValue.toJSON()]);
    }
  };
  (autofill.AutofillConfiguration.new = function(opts) {
    let uniqueIdentifier = opts && 'uniqueIdentifier' in opts ? opts.uniqueIdentifier : null;
    if (uniqueIdentifier == null) dart.nullFailed(L3, 631, 19, "uniqueIdentifier");
    let autofillHints = opts && 'autofillHints' in opts ? opts.autofillHints : null;
    if (autofillHints == null) dart.nullFailed(L3, 632, 19, "autofillHints");
    let currentEditingValue = opts && 'currentEditingValue' in opts ? opts.currentEditingValue : null;
    if (currentEditingValue == null) dart.nullFailed(L3, 633, 19, "currentEditingValue");
    this[uniqueIdentifier$] = uniqueIdentifier;
    this[autofillHints$] = autofillHints;
    this[currentEditingValue$] = currentEditingValue;
    if (!(uniqueIdentifier != null)) dart.assertFailed(null, L3, 634, 15, "uniqueIdentifier != null");
    if (!(autofillHints != null)) dart.assertFailed(null, L3, 635, 15, "autofillHints != null");
    ;
  }).prototype = autofill.AutofillConfiguration.prototype;
  dart.addTypeTests(autofill.AutofillConfiguration);
  dart.addTypeCaches(autofill.AutofillConfiguration);
  dart.setMethodSignature(autofill.AutofillConfiguration, () => ({
    __proto__: dart.getMethods(autofill.AutofillConfiguration.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(autofill.AutofillConfiguration, L2);
  dart.setFieldSignature(autofill.AutofillConfiguration, () => ({
    __proto__: dart.getFields(autofill.AutofillConfiguration.__proto__),
    uniqueIdentifier: dart.finalFieldType(core.String),
    autofillHints: dart.finalFieldType(core.List$(core.String)),
    currentEditingValue: dart.finalFieldType(text_input.TextEditingValue)
  }));
  autofill.AutofillClient = class AutofillClient extends core.Object {};
  (autofill.AutofillClient.new = function() {
    ;
  }).prototype = autofill.AutofillClient.prototype;
  dart.addTypeTests(autofill.AutofillClient);
  dart.addTypeCaches(autofill.AutofillClient);
  dart.setLibraryUri(autofill.AutofillClient, L2);
  autofill.AutofillScope = class AutofillScope extends core.Object {};
  (autofill.AutofillScope.new = function() {
    ;
  }).prototype = autofill.AutofillScope.prototype;
  dart.addTypeTests(autofill.AutofillScope);
  dart.addTypeCaches(autofill.AutofillScope);
  dart.setLibraryUri(autofill.AutofillScope, L2);
  autofill._AutofillScopeTextInputConfiguration = class _AutofillScopeTextInputConfiguration extends text_input.TextInputConfiguration {
    toJson() {
      let result = super.toJson();
      result[$_set]("fields", this.allConfigurations[$map](MapOfString$dynamic(), dart.fn(configuration => {
        if (configuration == null) dart.nullFailed(L3, 792, 36, "configuration");
        return configuration.toJson();
      }, TextInputConfigurationToMapOfString$dynamic()))[$toList]({growable: false}));
      return result;
    }
  };
  (autofill._AutofillScopeTextInputConfiguration.new = function(opts) {
    let allConfigurations = opts && 'allConfigurations' in opts ? opts.allConfigurations : null;
    if (allConfigurations == null) dart.nullFailed(L3, 769, 19, "allConfigurations");
    let currentClientConfiguration = opts && 'currentClientConfiguration' in opts ? opts.currentClientConfiguration : null;
    if (currentClientConfiguration == null) dart.nullFailed(L3, 770, 37, "currentClientConfiguration");
    this.allConfigurations = allConfigurations;
    if (!(allConfigurations != null)) dart.assertFailed(null, L3, 771, 15, "allConfigurations != null");
    if (!(currentClientConfiguration != null)) dart.assertFailed(null, L3, 772, 15, "currentClientConfiguration != null");
    autofill._AutofillScopeTextInputConfiguration.__proto__.new.call(this, {inputType: currentClientConfiguration.inputType, obscureText: currentClientConfiguration.obscureText, autocorrect: currentClientConfiguration.autocorrect, smartDashesType: currentClientConfiguration.smartDashesType, smartQuotesType: currentClientConfiguration.smartQuotesType, enableSuggestions: currentClientConfiguration.enableSuggestions, inputAction: currentClientConfiguration.inputAction, textCapitalization: currentClientConfiguration.textCapitalization, keyboardAppearance: currentClientConfiguration.keyboardAppearance, actionLabel: currentClientConfiguration.actionLabel, autofillConfiguration: currentClientConfiguration.autofillConfiguration});
    ;
  }).prototype = autofill._AutofillScopeTextInputConfiguration.prototype;
  dart.addTypeTests(autofill._AutofillScopeTextInputConfiguration);
  dart.addTypeCaches(autofill._AutofillScopeTextInputConfiguration);
  dart.setLibraryUri(autofill._AutofillScopeTextInputConfiguration, L2);
  dart.setFieldSignature(autofill._AutofillScopeTextInputConfiguration, () => ({
    __proto__: dart.getFields(autofill._AutofillScopeTextInputConfiguration.__proto__),
    allConfigurations: dart.finalFieldType(core.Iterable$(text_input.TextInputConfiguration))
  }));
  autofill.AutofillScopeMixin = class AutofillScopeMixin extends core.Object {};
  autofill.AutofillScopeMixin[dart.mixinOn] = Object => class AutofillScopeMixin extends Object {
    attach(trigger, configuration) {
      if (trigger == null) dart.nullFailed(L3, 803, 46, "trigger");
      if (configuration == null) dart.nullFailed(L3, 803, 78, "configuration");
      if (!(trigger != null)) dart.assertFailed(null, L3, 804, 12, "trigger != null");
      if (!!dart.test(this.autofillClients[$any](dart.fn(client => {
        if (client == null) dart.nullFailed(L3, 806, 44, "client");
        return client.textInputConfiguration.autofillConfiguration == null;
      }, AutofillClientTobool())))) dart.assertFailed("Every client in AutofillScope.autofillClients must enable autofill", L3, 806, 7, "!autofillClients.any((AutofillClient client) => client.textInputConfiguration.autofillConfiguration == null)");
      let inputConfiguration = new autofill._AutofillScopeTextInputConfiguration.new({allConfigurations: this.autofillClients[$map](text_input.TextInputConfiguration, dart.fn(client => {
          if (client == null) dart.nullFailed(L3, 811, 62, "client");
          return client.textInputConfiguration;
        }, AutofillClientToTextInputConfiguration())), currentClientConfiguration: configuration});
      return text_input.TextInput.attach(trigger, inputConfiguration);
    }
  };
  (autofill.AutofillScopeMixin[dart.mixinNew] = function() {
  }).prototype = autofill.AutofillScopeMixin.prototype;
  dart.addTypeTests(autofill.AutofillScopeMixin);
  dart.addTypeCaches(autofill.AutofillScopeMixin);
  autofill.AutofillScopeMixin[dart.implements] = () => [autofill.AutofillScope, core.Object];
  dart.setMethodSignature(autofill.AutofillScopeMixin, () => ({
    __proto__: dart.getMethods(autofill.AutofillScopeMixin.__proto__),
    attach: dart.fnType(text_input.TextInputConnection, [text_input.TextInputClient, text_input.TextInputConfiguration])
  }));
  dart.setLibraryUri(autofill.AutofillScopeMixin, L2);
  dart.trackLibraries("packages/flutter/src/services/text_input.dart", {
    "package:flutter/src/services/text_input.dart": text_input,
    "package:flutter/src/services/autofill.dart": autofill
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_input.dart","autofill.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/services/text_input.dart.lib.js"}');
  // Exports:
  return {
    src__services__text_input: text_input,
    src__services__autofill: autofill
  };
}));

//# sourceMappingURL=text_input.dart.lib.js.map
