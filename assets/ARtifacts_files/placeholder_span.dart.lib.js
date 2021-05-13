define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/painting/strut_style.dart', 'packages/flutter/src/gestures/tap.dart', 'packages/flutter/src/gestures/long_press.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/foundation/collections.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/services/text_editing.dart'], (function load__packages__flutter__src__painting__placeholder_span_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__painting__strut_style$46dart, packages__flutter__src__gestures__tap$46dart, packages__flutter__src__gestures__long_press$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__foundation__collections$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__services__text_editing$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const text_style = packages__flutter__src__painting__strut_style$46dart.src__painting__text_style;
  const strut_style = packages__flutter__src__painting__strut_style$46dart.src__painting__strut_style;
  const tap = packages__flutter__src__gestures__tap$46dart.src__gestures__tap;
  const long_press = packages__flutter__src__gestures__long_press$46dart.src__gestures__long_press;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const collections = packages__flutter__src__foundation__collections$46dart.src__foundation__collections;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const text_editing = packages__flutter__src__services__text_editing$46dart.src__services__text_editing;
  var placeholder_span = Object.create(dart.library);
  var text_span = Object.create(dart.library);
  var inline_span = Object.create(dart.library);
  var text_painter = Object.create(dart.library);
  var $add = dartx.add;
  var $runtimeType = dartx.runtimeType;
  var $hashCode = dartx.hashCode;
  var $codeUnitAt = dartx.codeUnitAt;
  var $length = dartx.length;
  var $_equals = dartx._equals;
  var $_get = dartx._get;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $isNotEmpty = dartx.isNotEmpty;
  var $isEmpty = dartx.isEmpty;
  var $ceilToDouble = dartx.ceilToDouble;
  var $clamp = dartx.clamp;
  var $first = dartx.first;
  var $last = dartx.last;
  dart._checkModuleNullSafetyMode(false);
  var EnumPropertyOfPlaceholderAlignment = () => (EnumPropertyOfPlaceholderAlignment = dart.constFn(diagnostics.EnumProperty$(ui.PlaceholderAlignment)))();
  var EnumPropertyOfTextBaseline = () => (EnumPropertyOfTextBaseline = dart.constFn(diagnostics.EnumProperty$(ui.TextBaseline)))();
  var InlineSpanTobool = () => (InlineSpanTobool = dart.constFn(dart.fnType(core.bool, [inline_span.InlineSpan])))();
  var JSArrayOfInlineSpanSemanticsInformation = () => (JSArrayOfInlineSpanSemanticsInformation = dart.constFn(_interceptors.JSArray$(inline_span.InlineSpanSemanticsInformation)))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var DiagnosticsPropertyOfGestureRecognizer = () => (DiagnosticsPropertyOfGestureRecognizer = dart.constFn(diagnostics.DiagnosticsProperty$(recognizer.GestureRecognizer)))();
  var DiagnosticsNodeL = () => (DiagnosticsNodeL = dart.constFn(dart.legacy(diagnostics.DiagnosticsNode)))();
  var InlineSpanToDiagnosticsNode = () => (InlineSpanToDiagnosticsNode = dart.constFn(dart.fnType(diagnostics.DiagnosticsNode, [inline_span.InlineSpan])))();
  var TextWidthBasisL = () => (TextWidthBasisL = dart.constFn(dart.legacy(text_painter.TextWidthBasis)))();
  var VoidToint = () => (VoidToint = dart.constFn(dart.fnType(core.int, [])))();
  var JSArrayOfTextBox = () => (JSArrayOfTextBox = dart.constFn(_interceptors.JSArray$(ui.TextBox)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/placeholder_span.dart";
  var L4 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/text_span.dart";
  var L2 = "package:flutter/src/painting/inline_span.dart";
  var L6 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/text_painter.dart";
  var L3 = "package:flutter/src/painting/placeholder_span.dart";
  var L7 = "package:flutter/src/painting/text_painter.dart";
  var L5 = "package:flutter/src/painting/text_span.dart";
  var L1 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/inline_span.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_name]: "PlaceholderAlignment.bottom",
        index: 4
      });
    },
    get C1() {
      return C1 = dart.constList([], DiagnosticsNodeL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: inline_span.InlineSpanSemanticsInformation.prototype,
        [requiresOwnNode]: true,
        [isPlaceholder$]: true,
        [recognizer$0]: null,
        [semanticsLabel$0]: null,
        [text$0]: "￼"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: text_painter.PlaceholderDimensions.prototype,
        [baseline$0]: null,
        [baselineOffset$]: null,
        [alignment$0]: C0 || CT.C0,
        [size$]: C4 || CT.C4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: text_painter.TextWidthBasis.prototype,
        [_name$]: "TextWidthBasis.parent",
        index: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: text_painter.TextWidthBasis.prototype,
        [_name$]: "TextWidthBasis.longestLine",
        index: 1
      });
    },
    get C7() {
      return C7 = dart.constList([C5 || CT.C5, C6 || CT.C6], TextWidthBasisL());
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_name]: "TextAlign.start",
        index: 4
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.ParagraphConstraints.prototype,
        [ParagraphConstraints_width]: 1 / 0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.TextBaseline.prototype,
        [_name]: "TextBaseline.alphabetic",
        index: 0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.TextBaseline.prototype,
        [_name]: "TextBaseline.ideographic",
        index: 1
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_name]: "TextAlign.left",
        index: 0
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_name]: "TextAlign.right",
        index: 1
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_name]: "TextAlign.center",
        index: 2
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.rtl",
        index: 0
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.ltr",
        index: 1
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_name]: "TextAlign.justify",
        index: 3
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_name]: "TextAlign.end",
        index: 5
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: ui.TextAffinity.prototype,
        [_name]: "TextAffinity.upstream",
        index: 0
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: ui.TextAffinity.prototype,
        [_name]: "TextAffinity.downstream",
        index: 1
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: ui.BoxHeightStyle.prototype,
        [_name]: "BoxHeightStyle.tight",
        index: 0
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: ui.BoxWidthStyle.prototype,
        [_name]: "BoxWidthStyle.tight",
        index: 0
      });
    }
  }, false);
  var _name = dart.privateName(ui, "_name");
  var C0;
  var style$ = dart.privateName(inline_span, "InlineSpan.style");
  inline_span.InlineSpan = class InlineSpan extends diagnostics.DiagnosticableTree {
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    get text() {
      return null;
    }
    get children() {
      return null;
    }
    get recognizer() {
      return null;
    }
    getSpanForPosition(position) {
      if (position == null) dart.nullFailed(L1, 219, 47, "position");
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, L1, 220, 12, "debugAssertIsValid()");
      let offset = new inline_span.Accumulator.new();
      let result = null;
      this.visitChildren(dart.fn(span => {
        if (span == null) dart.nullFailed(L1, 223, 31, "span");
        result = span.getSpanForPositionVisitor(position, offset);
        return result == null;
      }, InlineSpanTobool()));
      return result;
    }
    toPlainText(opts) {
      let includeSemanticsLabels = opts && 'includeSemanticsLabels' in opts ? opts.includeSemanticsLabels : true;
      if (includeSemanticsLabels == null) dart.nullFailed(L1, 249, 28, "includeSemanticsLabels");
      let includePlaceholders = opts && 'includePlaceholders' in opts ? opts.includePlaceholders : true;
      if (includePlaceholders == null) dart.nullFailed(L1, 249, 64, "includePlaceholders");
      let buffer = new core.StringBuffer.new();
      this.computeToPlainText(buffer, {includeSemanticsLabels: includeSemanticsLabels, includePlaceholders: includePlaceholders});
      return buffer.toString();
    }
    getSemanticsInformation() {
      let collector = JSArrayOfInlineSpanSemanticsInformation().of([]);
      this.computeSemanticsInformation(collector);
      return collector;
    }
    codeUnitAt(index) {
      if (index == null) dart.nullFailed(L1, 299, 23, "index");
      if (dart.notNull(index) < 0) return null;
      let offset = new inline_span.Accumulator.new();
      let result = null;
      this.visitChildren(dart.fn(span => {
        if (span == null) dart.nullFailed(L1, 304, 31, "span");
        result = span.codeUnitAtVisitor(index, offset);
        return result == null;
      }, InlineSpanTobool()));
      return result;
    }
    debugAssertIsValid() {
      return true;
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return inline_span.InlineSpan.is(other) && dart.equals(other.style, this.style);
    }
    get hashCode() {
      return dart.hashCode(this.style);
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L1, 372, 56, "properties");
      super.debugFillProperties(properties);
      properties.defaultDiagnosticsTreeStyle = diagnostics.DiagnosticsTreeStyle.whitespace;
      if (this.style != null) {
        dart.nullCheck(this.style).debugFillProperties(properties);
      }
    }
  };
  (inline_span.InlineSpan.new = function(opts) {
    let style = opts && 'style' in opts ? opts.style : null;
    this[style$] = style;
    inline_span.InlineSpan.__proto__.new.call(this);
    ;
  }).prototype = inline_span.InlineSpan.prototype;
  dart.addTypeTests(inline_span.InlineSpan);
  dart.addTypeCaches(inline_span.InlineSpan);
  dart.setMethodSignature(inline_span.InlineSpan, () => ({
    __proto__: dart.getMethods(inline_span.InlineSpan.__proto__),
    getSpanForPosition: dart.fnType(dart.nullable(inline_span.InlineSpan), [ui.TextPosition]),
    toPlainText: dart.fnType(core.String, [], {includePlaceholders: core.bool, includeSemanticsLabels: core.bool}, {}),
    getSemanticsInformation: dart.fnType(core.List$(inline_span.InlineSpanSemanticsInformation), []),
    codeUnitAt: dart.fnType(dart.nullable(core.int), [core.int]),
    debugAssertIsValid: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(inline_span.InlineSpan, () => ({
    __proto__: dart.getGetters(inline_span.InlineSpan.__proto__),
    text: dart.nullable(core.String),
    children: dart.nullable(core.List$(inline_span.InlineSpan)),
    recognizer: dart.nullable(recognizer.GestureRecognizer)
  }));
  dart.setLibraryUri(inline_span.InlineSpan, L2);
  dart.setFieldSignature(inline_span.InlineSpan, () => ({
    __proto__: dart.getFields(inline_span.InlineSpan.__proto__),
    style: dart.finalFieldType(dart.nullable(text_style.TextStyle))
  }));
  dart.defineExtensionMethods(inline_span.InlineSpan, ['_equals']);
  dart.defineExtensionAccessors(inline_span.InlineSpan, ['hashCode']);
  var alignment$ = dart.privateName(placeholder_span, "PlaceholderSpan.alignment");
  var baseline$ = dart.privateName(placeholder_span, "PlaceholderSpan.baseline");
  placeholder_span.PlaceholderSpan = class PlaceholderSpan extends inline_span.InlineSpan {
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get baseline() {
      return this[baseline$];
    }
    set baseline(value) {
      super.baseline = value;
    }
    computeToPlainText(buffer, opts) {
      if (buffer == null) dart.nullFailed(L0, 58, 40, "buffer");
      let includeSemanticsLabels = opts && 'includeSemanticsLabels' in opts ? opts.includeSemanticsLabels : true;
      if (includeSemanticsLabels == null) dart.nullFailed(L0, 58, 54, "includeSemanticsLabels");
      let includePlaceholders = opts && 'includePlaceholders' in opts ? opts.includePlaceholders : true;
      if (includePlaceholders == null) dart.nullFailed(L0, 58, 90, "includePlaceholders");
      if (dart.test(includePlaceholders)) {
        buffer.write("￼");
      }
    }
    computeSemanticsInformation(collector) {
      if (collector == null) dart.nullFailed(L0, 65, 73, "collector");
      collector[$add](inline_span.InlineSpanSemanticsInformation.placeholder);
    }
    visitTextSpan(visitor) {
      if (visitor == null) dart.nullFailed(L0, 76, 27, "visitor");
      if (!false) dart.assertFailed("visitTextSpan is deprecated. Use visitChildren to support InlineSpans", L0, 77, 12, "false");
      return false;
    }
    describeSemantics(offset, semanticsOffsets, semanticsElements) {
      if (offset == null) dart.nullFailed(L0, 89, 38, "offset");
      if (semanticsOffsets == null) dart.nullFailed(L0, 89, 56, "semanticsOffsets");
      if (semanticsElements == null) dart.nullFailed(L0, 89, 88, "semanticsElements");
      semanticsOffsets[$add](offset.value);
      semanticsOffsets[$add](dart.notNull(offset.value) + 1);
      semanticsElements[$add](null);
      offset.increment(1);
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 97, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfPlaceholderAlignment()).new("alignment", this.alignment, {defaultValue: null}));
      properties.add(new (EnumPropertyOfTextBaseline()).new("baseline", this.baseline, {defaultValue: null}));
    }
  };
  (placeholder_span.PlaceholderSpan.new = function(opts) {
    let alignment = opts && 'alignment' in opts ? opts.alignment : C0 || CT.C0;
    if (alignment == null) dart.nullFailed(L0, 39, 10, "alignment");
    let baseline = opts && 'baseline' in opts ? opts.baseline : null;
    let style = opts && 'style' in opts ? opts.style : null;
    this[alignment$] = alignment;
    this[baseline$] = baseline;
    placeholder_span.PlaceholderSpan.__proto__.new.call(this, {style: style});
    ;
  }).prototype = placeholder_span.PlaceholderSpan.prototype;
  dart.addTypeTests(placeholder_span.PlaceholderSpan);
  dart.addTypeCaches(placeholder_span.PlaceholderSpan);
  dart.setMethodSignature(placeholder_span.PlaceholderSpan, () => ({
    __proto__: dart.getMethods(placeholder_span.PlaceholderSpan.__proto__),
    computeToPlainText: dart.fnType(dart.void, [core.StringBuffer], {includePlaceholders: core.bool, includeSemanticsLabels: core.bool}, {}),
    computeSemanticsInformation: dart.fnType(dart.void, [core.List$(inline_span.InlineSpanSemanticsInformation)]),
    visitTextSpan: dart.fnType(core.bool, [dart.fnType(core.bool, [text_span.TextSpan])]),
    describeSemantics: dart.fnType(dart.void, [inline_span.Accumulator, core.List$(core.int), core.List])
  }));
  dart.setLibraryUri(placeholder_span.PlaceholderSpan, L3);
  dart.setFieldSignature(placeholder_span.PlaceholderSpan, () => ({
    __proto__: dart.getFields(placeholder_span.PlaceholderSpan.__proto__),
    alignment: dart.finalFieldType(ui.PlaceholderAlignment),
    baseline: dart.finalFieldType(dart.nullable(ui.TextBaseline))
  }));
  var C1;
  var text$ = dart.privateName(text_span, "TextSpan.text");
  var children$ = dart.privateName(text_span, "TextSpan.children");
  var recognizer$ = dart.privateName(text_span, "TextSpan.recognizer");
  var semanticsLabel$ = dart.privateName(text_span, "TextSpan.semanticsLabel");
  text_span.TextSpan = class TextSpan extends inline_span.InlineSpan {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    get recognizer() {
      return this[recognizer$];
    }
    set recognizer(value) {
      super.recognizer = value;
    }
    get semanticsLabel() {
      return this[semanticsLabel$];
    }
    set semanticsLabel(value) {
      super.semanticsLabel = value;
    }
    build(builder, opts) {
      if (builder == null) dart.nullFailed(L4, 199, 25, "builder");
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
      if (textScaleFactor == null) dart.nullFailed(L4, 200, 12, "textScaleFactor");
      let dimensions = opts && 'dimensions' in opts ? opts.dimensions : null;
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, L4, 203, 12, "debugAssertIsValid()");
      let hasStyle = this.style != null;
      if (hasStyle) builder.pushStyle(dart.nullCheck(this.style).getTextStyle({textScaleFactor: textScaleFactor}));
      if (this.text != null) builder.addText(dart.nullCheck(this.text));
      if (this.children != null) {
        for (let child of dart.nullCheck(this.children)) {
          if (!(child != null)) dart.assertFailed(null, L4, 211, 16, "child != null");
          child.build(builder, {textScaleFactor: textScaleFactor, dimensions: dimensions});
        }
      }
      if (hasStyle) builder.pop();
    }
    visitChildren(visitor) {
      if (visitor == null) dart.nullFailed(L4, 229, 40, "visitor");
      if (this.text != null) {
        if (!dart.test(visitor(this))) return false;
      }
      if (this.children != null) {
        for (let child of dart.nullCheck(this.children)) {
          if (!dart.test(child.visitChildren(visitor))) return false;
        }
      }
      return true;
    }
    visitTextSpan(visitor) {
      if (visitor == null) dart.nullFailed(L4, 254, 27, "visitor");
      if (this.text != null) {
        if (!dart.test(visitor(this))) return false;
      }
      if (this.children != null) {
        for (let child of dart.nullCheck(this.children)) {
          if (!text_span.TextSpan.is(child)) dart.assertFailed("visitTextSpan is deprecated. Use visitChildren to support InlineSpans", L4, 262, 11, "child is TextSpan");
          let textSpanChild = text_span.TextSpan.as(child);
          if (!dart.test(textSpanChild.visitTextSpan(visitor))) return false;
        }
      }
      return true;
    }
    getSpanForPositionVisitor(position, offset) {
      if (position == null) dart.nullFailed(L4, 275, 54, "position");
      if (offset == null) dart.nullFailed(L4, 275, 76, "offset");
      if (this.text == null) {
        return null;
      }
      let affinity = position.affinity;
      let targetOffset = position.offset;
      let endOffset = dart.notNull(offset.value) + dart.nullCheck(this.text).length;
      if (offset.value == targetOffset && dart.equals(affinity, ui.TextAffinity.downstream) || dart.notNull(offset.value) < dart.notNull(targetOffset) && dart.notNull(targetOffset) < endOffset || endOffset === targetOffset && dart.equals(affinity, ui.TextAffinity.upstream)) {
        return this;
      }
      offset.increment(dart.nullCheck(this.text).length);
      return null;
    }
    computeToPlainText(buffer, opts) {
      if (buffer == null) dart.nullFailed(L4, 293, 18, "buffer");
      let includeSemanticsLabels = opts && 'includeSemanticsLabels' in opts ? opts.includeSemanticsLabels : true;
      if (includeSemanticsLabels == null) dart.nullFailed(L4, 294, 10, "includeSemanticsLabels");
      let includePlaceholders = opts && 'includePlaceholders' in opts ? opts.includePlaceholders : true;
      if (includePlaceholders == null) dart.nullFailed(L4, 295, 10, "includePlaceholders");
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, L4, 297, 12, "debugAssertIsValid()");
      if (this.semanticsLabel != null && dart.test(includeSemanticsLabels)) {
        buffer.write(this.semanticsLabel);
      } else if (this.text != null) {
        buffer.write(this.text);
      }
      if (this.children != null) {
        for (let child of dart.nullCheck(this.children)) {
          child.computeToPlainText(buffer, {includeSemanticsLabels: includeSemanticsLabels, includePlaceholders: includePlaceholders});
        }
      }
    }
    computeSemanticsInformation(collector) {
      if (collector == null) dart.nullFailed(L4, 314, 73, "collector");
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, L4, 315, 12, "debugAssertIsValid()");
      if (this.text != null || this.semanticsLabel != null) {
        collector[$add](new inline_span.InlineSpanSemanticsInformation.new(dart.nullCheck(this.text), {semanticsLabel: this.semanticsLabel, recognizer: this.recognizer}));
      }
      if (this.children != null) {
        for (let child of dart.nullCheck(this.children)) {
          child.computeSemanticsInformation(collector);
        }
      }
    }
    codeUnitAtVisitor(index, offset) {
      if (index == null) dart.nullFailed(L4, 331, 30, "index");
      if (offset == null) dart.nullFailed(L4, 331, 49, "offset");
      if (this.text == null) {
        return null;
      }
      if (dart.notNull(index) - dart.notNull(offset.value) < dart.nullCheck(this.text).length) {
        return dart.nullCheck(this.text)[$codeUnitAt](dart.notNull(index) - dart.notNull(offset.value));
      }
      offset.increment(dart.nullCheck(this.text).length);
      return null;
    }
    describeSemantics(offset, semanticsOffsets, semanticsElements) {
      let t0, t0$;
      if (offset == null) dart.nullFailed(L4, 343, 38, "offset");
      if (semanticsOffsets == null) dart.nullFailed(L4, 343, 56, "semanticsOffsets");
      if (semanticsElements == null) dart.nullFailed(L4, 343, 88, "semanticsElements");
      if (this.recognizer != null && (tap.TapGestureRecognizer.is(this.recognizer) || long_press.LongPressGestureRecognizer.is(this.recognizer))) {
        let length = (t0$ = (t0 = this.semanticsLabel, t0 == null ? null : t0.length), t0$ == null ? dart.nullCheck(this.text).length : t0$);
        semanticsOffsets[$add](offset.value);
        semanticsOffsets[$add](dart.notNull(offset.value) + dart.notNull(length));
        semanticsElements[$add](this.recognizer);
      }
      offset.increment(this.text != null ? dart.nullCheck(this.text).length : 0);
    }
    debugAssertIsValid() {
      if (!dart.test(dart.fn(() => {
        if (this.children != null) {
          for (let child of dart.nullCheck(this.children)) {
            if (child == null) {
              dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("TextSpan contains a null child."), new assertions.ErrorDescription.new("A TextSpan object with a non-null child list should not have any nulls in its child list."), this.toDiagnosticsNode({name: "The full text in question was", style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
            }
            if (!dart.test(child.debugAssertIsValid())) dart.assertFailed(null, L4, 381, 18, "child.debugAssertIsValid()");
          }
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 366, 12, "() {\n      if (children != null) {\n        for (final InlineSpan child in children!) {\n          // `child` has a non-nullable return type, but might be null when\n          // running with weak checking, so we need to null check it anyway (and\n          // ignore the warning that the null-handling logic is dead code).\n          if (child == null) { // ignore: dead_code\n            throw FlutterError.fromParts(<DiagnosticsNode>[\n              ErrorSummary('TextSpan contains a null child.'),\n              ErrorDescription(\n                  'A TextSpan object with a non-null child list should not have any nulls in its child list.'),\n              toDiagnosticsNode(name: 'The full text in question was',\n                  style: DiagnosticsTreeStyle.errorProperty),\n            ]);\n          }\n          assert(child.debugAssertIsValid());\n        }\n      }\n      return true;\n    }()");
      return super.debugAssertIsValid();
    }
    compareTo(other) {
      let t0, t0$;
      if (other == null) dart.nullFailed(L4, 390, 41, "other");
      if (this === other) return basic_types.RenderComparison.identical;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return basic_types.RenderComparison.layout;
      let textSpan = text_span.TextSpan.as(other);
      if (textSpan.text != this.text || (t0 = this.children, t0 == null ? null : t0[$length]) != (t0$ = textSpan.children, t0$ == null ? null : t0$[$length]) || !(this.style == null)[$_equals](textSpan.style == null)) return basic_types.RenderComparison.layout;
      let result = dart.equals(this.recognizer, textSpan.recognizer) ? basic_types.RenderComparison.identical : basic_types.RenderComparison.metadata;
      if (this.style != null) {
        let candidate = dart.nullCheck(this.style).compareTo(dart.nullCheck(textSpan.style));
        if (dart.notNull(candidate.index) > dart.notNull(result.index)) result = candidate;
        if (dart.equals(result, basic_types.RenderComparison.layout)) return result;
      }
      if (this.children != null) {
        for (let index = 0; index < dart.notNull(dart.nullCheck(this.children)[$length]); index = index + 1) {
          let candidate = dart.nullCheck(this.children)[$_get](index).compareTo(dart.nullCheck(textSpan.children)[$_get](index));
          if (dart.notNull(candidate.index) > dart.notNull(result.index)) result = candidate;
          if (dart.equals(result, basic_types.RenderComparison.layout)) return result;
        }
      }
      return result;
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      if (!super._equals(other)) return false;
      return text_span.TextSpan.is(other) && other.text == this.text && dart.equals(other.recognizer, this.recognizer) && other.semanticsLabel == this.semanticsLabel && dart.test(collections.listEquals(inline_span.InlineSpan, other.children, this.children));
    }
    get hashCode() {
      return ui.hashValues(super.hashCode, this.text, this.recognizer, this.semanticsLabel, ui.hashList(this.children));
    }
    toStringShort() {
      return object.objectRuntimeType(this, "TextSpan");
    }
    debugFillProperties(properties) {
      let t0;
      if (properties == null) dart.nullFailed(L4, 450, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.StringProperty.new("text", this.text, {showName: false, defaultValue: null}));
      if (this.style == null && this.text == null && this.children == null) properties.add(diagnostics.DiagnosticsNode.message("(empty)"));
      properties.add(new (DiagnosticsPropertyOfGestureRecognizer()).new("recognizer", this.recognizer, {description: (t0 = this.recognizer, t0 == null ? null : dart.toString(dart.runtimeType(t0))), defaultValue: null}));
      if (this.semanticsLabel != null) {
        properties.add(new diagnostics.StringProperty.new("semanticsLabel", this.semanticsLabel));
      }
    }
    debugDescribeChildren() {
      if (this.children == null) return C1 || CT.C1;
      return dart.nullCheck(this.children)[$map](diagnostics.DiagnosticsNode, dart.fn(child => {
        if (child == null) dart.nullFailed(L4, 479, 55, "child");
        if (child != null) {
          return child.toDiagnosticsNode();
        } else {
          return diagnostics.DiagnosticsNode.message("<null child>");
        }
      }, InlineSpanToDiagnosticsNode()))[$toList]();
    }
  };
  (text_span.TextSpan.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let recognizer = opts && 'recognizer' in opts ? opts.recognizer : null;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    this[text$] = text;
    this[children$] = children;
    this[recognizer$] = recognizer;
    this[semanticsLabel$] = semanticsLabel;
    text_span.TextSpan.__proto__.new.call(this, {style: style});
    ;
  }).prototype = text_span.TextSpan.prototype;
  dart.addTypeTests(text_span.TextSpan);
  dart.addTypeCaches(text_span.TextSpan);
  dart.setMethodSignature(text_span.TextSpan, () => ({
    __proto__: dart.getMethods(text_span.TextSpan.__proto__),
    build: dart.fnType(dart.void, [ui.ParagraphBuilder], {dimensions: dart.nullable(core.List$(text_painter.PlaceholderDimensions)), textScaleFactor: core.double}, {}),
    visitChildren: dart.fnType(core.bool, [dart.fnType(core.bool, [inline_span.InlineSpan])]),
    visitTextSpan: dart.fnType(core.bool, [dart.fnType(core.bool, [text_span.TextSpan])]),
    getSpanForPositionVisitor: dart.fnType(dart.nullable(inline_span.InlineSpan), [ui.TextPosition, inline_span.Accumulator]),
    computeToPlainText: dart.fnType(dart.void, [core.StringBuffer], {includePlaceholders: core.bool, includeSemanticsLabels: core.bool}, {}),
    computeSemanticsInformation: dart.fnType(dart.void, [core.List$(inline_span.InlineSpanSemanticsInformation)]),
    codeUnitAtVisitor: dart.fnType(dart.nullable(core.int), [core.int, inline_span.Accumulator]),
    describeSemantics: dart.fnType(dart.void, [inline_span.Accumulator, core.List$(core.int), core.List]),
    compareTo: dart.fnType(basic_types.RenderComparison, [inline_span.InlineSpan])
  }));
  dart.setLibraryUri(text_span.TextSpan, L5);
  dart.setFieldSignature(text_span.TextSpan, () => ({
    __proto__: dart.getFields(text_span.TextSpan.__proto__),
    text: dart.finalFieldType(dart.nullable(core.String)),
    children: dart.finalFieldType(dart.nullable(core.List$(inline_span.InlineSpan))),
    recognizer: dart.finalFieldType(dart.nullable(recognizer.GestureRecognizer)),
    semanticsLabel: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionMethods(text_span.TextSpan, ['_equals']);
  dart.defineExtensionAccessors(text_span.TextSpan, ['hashCode']);
  var _value$ = dart.privateName(inline_span, "_value");
  inline_span.Accumulator = class Accumulator extends core.Object {
    get value() {
      return this[_value$];
    }
    increment(addend) {
      if (addend == null) dart.nullFailed(L1, 28, 22, "addend");
      if (!(dart.notNull(addend) >= 0)) dart.assertFailed(null, L1, 29, 12, "addend >= 0");
      this[_value$] = dart.notNull(this[_value$]) + dart.notNull(addend);
    }
  };
  (inline_span.Accumulator.new = function(_value = 0) {
    if (_value == null) dart.nullFailed(L1, 21, 21, "_value");
    this[_value$] = _value;
    ;
  }).prototype = inline_span.Accumulator.prototype;
  dart.addTypeTests(inline_span.Accumulator);
  dart.addTypeCaches(inline_span.Accumulator);
  dart.setMethodSignature(inline_span.Accumulator, () => ({
    __proto__: dart.getMethods(inline_span.Accumulator.__proto__),
    increment: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(inline_span.Accumulator, () => ({
    __proto__: dart.getGetters(inline_span.Accumulator.__proto__),
    value: core.int
  }));
  dart.setLibraryUri(inline_span.Accumulator, L2);
  dart.setFieldSignature(inline_span.Accumulator, () => ({
    __proto__: dart.getFields(inline_span.Accumulator.__proto__),
    [_value$]: dart.fieldType(core.int)
  }));
  var text$0 = dart.privateName(inline_span, "InlineSpanSemanticsInformation.text");
  var semanticsLabel$0 = dart.privateName(inline_span, "InlineSpanSemanticsInformation.semanticsLabel");
  var recognizer$0 = dart.privateName(inline_span, "InlineSpanSemanticsInformation.recognizer");
  var isPlaceholder$ = dart.privateName(inline_span, "InlineSpanSemanticsInformation.isPlaceholder");
  var requiresOwnNode = dart.privateName(inline_span, "InlineSpanSemanticsInformation.requiresOwnNode");
  var C2;
  inline_span.InlineSpanSemanticsInformation = class InlineSpanSemanticsInformation extends core.Object {
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
    get semanticsLabel() {
      return this[semanticsLabel$0];
    }
    set semanticsLabel(value) {
      super.semanticsLabel = value;
    }
    get recognizer() {
      return this[recognizer$0];
    }
    set recognizer(value) {
      super.recognizer = value;
    }
    get isPlaceholder() {
      return this[isPlaceholder$];
    }
    set isPlaceholder(value) {
      super.isPlaceholder = value;
    }
    get requiresOwnNode() {
      return this[requiresOwnNode];
    }
    set requiresOwnNode(value) {
      super.requiresOwnNode = value;
    }
    _equals(other) {
      if (other == null) return false;
      return inline_span.InlineSpanSemanticsInformation.is(other) && other.text == this.text && other.semanticsLabel == this.semanticsLabel && dart.equals(other.recognizer, this.recognizer) && dart.equals(other.isPlaceholder, this.isPlaceholder);
    }
    get hashCode() {
      return ui.hashValues(this.text, this.semanticsLabel, this.recognizer, this.isPlaceholder);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "InlineSpanSemanticsInformation")) + "{text: " + dart.str(this.text) + ", semanticsLabel: " + dart.str(this.semanticsLabel) + ", recognizer: " + dart.str(this.recognizer) + "}";
    }
  };
  (inline_span.InlineSpanSemanticsInformation.new = function(text, opts) {
    if (text == null) dart.nullFailed(L1, 56, 10, "text");
    let isPlaceholder = opts && 'isPlaceholder' in opts ? opts.isPlaceholder : false;
    if (isPlaceholder == null) dart.nullFailed(L1, 57, 10, "isPlaceholder");
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    let recognizer = opts && 'recognizer' in opts ? opts.recognizer : null;
    this[text$0] = text;
    this[isPlaceholder$] = isPlaceholder;
    this[semanticsLabel$0] = semanticsLabel;
    this[recognizer$0] = recognizer;
    if (!(text != null)) dart.assertFailed(null, L1, 60, 15, "text != null");
    if (!(isPlaceholder != null)) dart.assertFailed(null, L1, 61, 15, "isPlaceholder != null");
    if (!(dart.equals(isPlaceholder, false) || text === "￼" && semanticsLabel == null && recognizer == null)) dart.assertFailed(null, L1, 62, 15, "isPlaceholder == false || (text == '\\uFFFC' && semanticsLabel == null && recognizer == null)");
    this[requiresOwnNode] = dart.test(isPlaceholder) || recognizer != null;
    ;
  }).prototype = inline_span.InlineSpanSemanticsInformation.prototype;
  dart.addTypeTests(inline_span.InlineSpanSemanticsInformation);
  dart.addTypeCaches(inline_span.InlineSpanSemanticsInformation);
  dart.setLibraryUri(inline_span.InlineSpanSemanticsInformation, L2);
  dart.setFieldSignature(inline_span.InlineSpanSemanticsInformation, () => ({
    __proto__: dart.getFields(inline_span.InlineSpanSemanticsInformation.__proto__),
    text: dart.finalFieldType(core.String),
    semanticsLabel: dart.finalFieldType(dart.nullable(core.String)),
    recognizer: dart.finalFieldType(dart.nullable(recognizer.GestureRecognizer)),
    isPlaceholder: dart.finalFieldType(core.bool),
    requiresOwnNode: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(inline_span.InlineSpanSemanticsInformation, ['_equals', 'toString']);
  dart.defineExtensionAccessors(inline_span.InlineSpanSemanticsInformation, ['hashCode']);
  dart.defineLazy(inline_span.InlineSpanSemanticsInformation, {
    /*inline_span.InlineSpanSemanticsInformation.placeholder*/get placeholder() {
      return C2 || CT.C2;
    }
  }, false);
  var size$ = dart.privateName(text_painter, "PlaceholderDimensions.size");
  var alignment$0 = dart.privateName(text_painter, "PlaceholderDimensions.alignment");
  var baselineOffset$ = dart.privateName(text_painter, "PlaceholderDimensions.baselineOffset");
  var baseline$0 = dart.privateName(text_painter, "PlaceholderDimensions.baseline");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C4;
  var C3;
  text_painter.PlaceholderDimensions = class PlaceholderDimensions extends core.Object {
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get alignment() {
      return this[alignment$0];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get baselineOffset() {
      return this[baselineOffset$];
    }
    set baselineOffset(value) {
      super.baselineOffset = value;
    }
    get baseline() {
      return this[baseline$0];
    }
    set baseline(value) {
      super.baseline = value;
    }
    toString() {
      return "PlaceholderDimensions(" + dart.str(this.size) + ", " + dart.str(this.baseline) + ")";
    }
  };
  (text_painter.PlaceholderDimensions.new = function(opts) {
    let size = opts && 'size' in opts ? opts.size : null;
    if (size == null) dart.nullFailed(L6, 45, 19, "size");
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    if (alignment == null) dart.nullFailed(L6, 46, 19, "alignment");
    let baseline = opts && 'baseline' in opts ? opts.baseline : null;
    let baselineOffset = opts && 'baselineOffset' in opts ? opts.baselineOffset : null;
    this[size$] = size;
    this[alignment$0] = alignment;
    this[baseline$0] = baseline;
    this[baselineOffset$] = baselineOffset;
    if (!(size != null)) dart.assertFailed(null, L6, 49, 15, "size != null");
    if (!(alignment != null)) dart.assertFailed(null, L6, 50, 15, "alignment != null");
    ;
  }).prototype = text_painter.PlaceholderDimensions.prototype;
  dart.addTypeTests(text_painter.PlaceholderDimensions);
  dart.addTypeCaches(text_painter.PlaceholderDimensions);
  dart.setLibraryUri(text_painter.PlaceholderDimensions, L7);
  dart.setFieldSignature(text_painter.PlaceholderDimensions, () => ({
    __proto__: dart.getFields(text_painter.PlaceholderDimensions.__proto__),
    size: dart.finalFieldType(ui.Size),
    alignment: dart.finalFieldType(ui.PlaceholderAlignment),
    baselineOffset: dart.finalFieldType(dart.nullable(core.double)),
    baseline: dart.finalFieldType(dart.nullable(ui.TextBaseline))
  }));
  dart.defineExtensionMethods(text_painter.PlaceholderDimensions, ['toString']);
  dart.defineLazy(text_painter.PlaceholderDimensions, {
    /*text_painter.PlaceholderDimensions.empty*/get empty() {
      return C3 || CT.C3;
    }
  }, false);
  var _name$ = dart.privateName(text_painter, "_name");
  var C5;
  var C6;
  var C7;
  text_painter.TextWidthBasis = class TextWidthBasis extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (text_painter.TextWidthBasis.new = function(index, _name) {
    if (index == null) dart.nullFailed(L6, 92, 6, "index");
    if (_name == null) dart.nullFailed(L6, 92, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = text_painter.TextWidthBasis.prototype;
  dart.addTypeTests(text_painter.TextWidthBasis);
  dart.addTypeCaches(text_painter.TextWidthBasis);
  dart.setLibraryUri(text_painter.TextWidthBasis, L7);
  dart.setFieldSignature(text_painter.TextWidthBasis, () => ({
    __proto__: dart.getFields(text_painter.TextWidthBasis.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(text_painter.TextWidthBasis, ['toString']);
  text_painter.TextWidthBasis.parent = C5 || CT.C5;
  text_painter.TextWidthBasis.longestLine = C6 || CT.C6;
  text_painter.TextWidthBasis.values = C7 || CT.C7;
  var offset$ = dart.privateName(text_painter, "_CaretMetrics.offset");
  var fullHeight$ = dart.privateName(text_painter, "_CaretMetrics.fullHeight");
  text_painter._CaretMetrics = class _CaretMetrics extends core.Object {
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get fullHeight() {
      return this[fullHeight$];
    }
    set fullHeight(value) {
      super.fullHeight = value;
    }
  };
  (text_painter._CaretMetrics.new = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    if (offset == null) dart.nullFailed(L6, 108, 38, "offset");
    let fullHeight = opts && 'fullHeight' in opts ? opts.fullHeight : null;
    this[offset$] = offset;
    this[fullHeight$] = fullHeight;
    ;
  }).prototype = text_painter._CaretMetrics.prototype;
  dart.addTypeTests(text_painter._CaretMetrics);
  dart.addTypeCaches(text_painter._CaretMetrics);
  dart.setLibraryUri(text_painter._CaretMetrics, L7);
  dart.setFieldSignature(text_painter._CaretMetrics, () => ({
    __proto__: dart.getFields(text_painter._CaretMetrics.__proto__),
    offset: dart.finalFieldType(ui.Offset),
    fullHeight: dart.finalFieldType(dart.nullable(core.double))
  }));
  var C8;
  var _paragraph = dart.privateName(text_painter, "_paragraph");
  var _needsLayout = dart.privateName(text_painter, "_needsLayout");
  var _layoutTemplate = dart.privateName(text_painter, "_layoutTemplate");
  var _inlinePlaceholderBoxes = dart.privateName(text_painter, "_inlinePlaceholderBoxes");
  var _inlinePlaceholderScales = dart.privateName(text_painter, "_inlinePlaceholderScales");
  var _placeholderDimensions = dart.privateName(text_painter, "_placeholderDimensions");
  var _lastMinWidth = dart.privateName(text_painter, "_lastMinWidth");
  var _lastMaxWidth = dart.privateName(text_painter, "_lastMaxWidth");
  var __TextPainter__caretMetrics = dart.privateName(text_painter, "_#TextPainter#_caretMetrics");
  var __TextPainter__caretMetrics_isSet = dart.privateName(text_painter, "_#TextPainter#_caretMetrics#isSet");
  var _previousCaretPosition = dart.privateName(text_painter, "_previousCaretPosition");
  var _previousCaretPrototype = dart.privateName(text_painter, "_previousCaretPrototype");
  var _text = dart.privateName(text_painter, "_text");
  var _textAlign = dart.privateName(text_painter, "_textAlign");
  var _textDirection = dart.privateName(text_painter, "_textDirection");
  var _textScaleFactor = dart.privateName(text_painter, "_textScaleFactor");
  var _maxLines = dart.privateName(text_painter, "_maxLines");
  var _ellipsis = dart.privateName(text_painter, "_ellipsis");
  var _locale = dart.privateName(text_painter, "_locale");
  var _strutStyle = dart.privateName(text_painter, "_strutStyle");
  var _textWidthBasis = dart.privateName(text_painter, "_textWidthBasis");
  var _textHeightBehavior = dart.privateName(text_painter, "_textHeightBehavior");
  var _createParagraphStyle = dart.privateName(text_painter, "_createParagraphStyle");
  var ParagraphConstraints_width = dart.privateName(ui, "ParagraphConstraints.width");
  var C9;
  var _applyFloatingPointHack = dart.privateName(text_painter, "_applyFloatingPointHack");
  var C10;
  var C11;
  var _emptyOffset = dart.privateName(text_painter, "_emptyOffset");
  var _getRectFromUpstream = dart.privateName(text_painter, "_getRectFromUpstream");
  var _getRectFromDownstream = dart.privateName(text_painter, "_getRectFromDownstream");
  var C12;
  var C13;
  var C14;
  var C15;
  var C16;
  var C17;
  var C18;
  var _computeCaretMetrics = dart.privateName(text_painter, "_computeCaretMetrics");
  var _caretMetrics = dart.privateName(text_painter, "_caretMetrics");
  var C19;
  var C20;
  var C21;
  var C22;
  text_painter.TextPainter = class TextPainter extends core.Object {
    markNeedsLayout() {
      this[_paragraph] = null;
      this[_needsLayout] = true;
      this[_previousCaretPosition] = null;
      this[_previousCaretPrototype] = null;
    }
    get text() {
      return this[_text];
    }
    set text(value) {
      let t0, t0$;
      if (!(value == null || dart.test(value.debugAssertIsValid()))) dart.assertFailed(null, L6, 199, 12, "value == null || value.debugAssertIsValid()");
      if (dart.equals(this[_text], value)) return;
      if (!dart.equals((t0 = this[_text], t0 == null ? null : t0.style), (t0$ = value, t0$ == null ? null : t0$.style))) this[_layoutTemplate] = null;
      this[_text] = value;
      this.markNeedsLayout();
    }
    get textAlign() {
      return this[_textAlign];
    }
    set textAlign(value) {
      if (value == null) dart.nullFailed(L6, 215, 27, "value");
      if (!(value != null)) dart.assertFailed(null, L6, 216, 12, "value != null");
      if (dart.equals(this[_textAlign], value)) return;
      this[_textAlign] = value;
      this.markNeedsLayout();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (dart.equals(this[_textDirection], value)) return;
      this[_textDirection] = value;
      this.markNeedsLayout();
      this[_layoutTemplate] = null;
    }
    get textScaleFactor() {
      return this[_textScaleFactor];
    }
    set textScaleFactor(value) {
      if (value == null) dart.nullFailed(L6, 256, 30, "value");
      if (!(value != null)) dart.assertFailed(null, L6, 257, 12, "value != null");
      if (this[_textScaleFactor] == value) return;
      this[_textScaleFactor] = value;
      this.markNeedsLayout();
      this[_layoutTemplate] = null;
    }
    get ellipsis() {
      return this[_ellipsis];
    }
    set ellipsis(value) {
      if (!(value == null || value[$isNotEmpty])) dart.assertFailed(null, L6, 284, 12, "value == null || value.isNotEmpty");
      if (this[_ellipsis] == value) return;
      this[_ellipsis] = value;
      this.markNeedsLayout();
    }
    get locale() {
      return this[_locale];
    }
    set locale(value) {
      if (dart.equals(this[_locale], value)) return;
      this[_locale] = value;
      this.markNeedsLayout();
    }
    get maxLines() {
      return this[_maxLines];
    }
    set maxLines(value) {
      if (!(value == null || dart.notNull(value) > 0)) dart.assertFailed(null, L6, 312, 12, "value == null || value > 0");
      if (this[_maxLines] == value) return;
      this[_maxLines] = value;
      this.markNeedsLayout();
    }
    get strutStyle() {
      return this[_strutStyle];
    }
    set strutStyle(value) {
      if (dart.equals(this[_strutStyle], value)) return;
      this[_strutStyle] = value;
      this.markNeedsLayout();
    }
    get textWidthBasis() {
      return this[_textWidthBasis];
    }
    set textWidthBasis(value) {
      if (value == null) dart.nullFailed(L6, 345, 37, "value");
      if (!(value != null)) dart.assertFailed(null, L6, 346, 12, "value != null");
      if (dart.equals(this[_textWidthBasis], value)) return;
      this[_textWidthBasis] = value;
      this.markNeedsLayout();
    }
    get textHeightBehavior() {
      return this[_textHeightBehavior];
    }
    set textHeightBehavior(value) {
      if (dart.equals(this[_textHeightBehavior], value)) return;
      this[_textHeightBehavior] = value;
      this.markNeedsLayout();
    }
    get inlinePlaceholderBoxes() {
      return this[_inlinePlaceholderBoxes];
    }
    get inlinePlaceholderScales() {
      return this[_inlinePlaceholderScales];
    }
    setPlaceholderDimensions(value) {
      if (value == null || dart.test(value[$isEmpty]) || dart.test(collections.listEquals(text_painter.PlaceholderDimensions, value, this[_placeholderDimensions]))) {
        return;
      }
      if (!(dart.fn(() => {
        let placeholderCount = 0;
        dart.nullCheck(this.text).visitChildren(dart.fn(span => {
          if (span == null) dart.nullFailed(L6, 398, 39, "span");
          if (placeholder_span.PlaceholderSpan.is(span)) {
            placeholderCount = placeholderCount + 1;
          }
          return true;
        }, InlineSpanTobool()));
        return placeholderCount;
      }, VoidToint())() == value[$length])) dart.assertFailed(null, L6, 396, 12, "() {\n      int placeholderCount = 0;\n      text!.visitChildren((InlineSpan span) {\n        if (span is PlaceholderSpan) {\n          placeholderCount += 1;\n        }\n        return true;\n      });\n      return placeholderCount;\n    }() == value.length");
      this[_placeholderDimensions] = value;
      this.markNeedsLayout();
    }
    [_createParagraphStyle](defaultTextDirection = null) {
      let t1, t0, t1$, t0$;
      if (!(this.textAlign != null)) dart.assertFailed(null, L6, 414, 12, "textAlign != null");
      if (!(this.textDirection != null || defaultTextDirection != null)) dart.assertFailed("TextPainter.textDirection must be set to a non-null value before using the TextPainter.", L6, 415, 12, "textDirection != null || defaultTextDirection != null");
      t0$ = (t0 = dart.nullCheck(this[_text]).style, t0 == null ? null : t0.getParagraphStyle({textAlign: this.textAlign, textDirection: (t1 = this.textDirection, t1 == null ? defaultTextDirection : t1), textScaleFactor: this.textScaleFactor, maxLines: this[_maxLines], textHeightBehavior: this[_textHeightBehavior], ellipsis: this[_ellipsis], locale: this[_locale], strutStyle: this[_strutStyle]}));
      return t0$ == null ? ui.ParagraphStyle.new({textAlign: this.textAlign, textDirection: (t1$ = this.textDirection, t1$ == null ? defaultTextDirection : t1$), fontSize: 14 * dart.notNull(this.textScaleFactor), maxLines: this.maxLines, textHeightBehavior: this[_textHeightBehavior], ellipsis: this.ellipsis, locale: this.locale}) : t0$;
    }
    get preferredLineHeight() {
      let t0, t0$;
      if (this[_layoutTemplate] == null) {
        let builder = ui.ParagraphBuilder.new(this[_createParagraphStyle](ui.TextDirection.rtl));
        if ((t0 = this.text, t0 == null ? null : t0.style) != null) builder.pushStyle(dart.nullCheck(dart.nullCheck(this.text).style).getTextStyle({textScaleFactor: this.textScaleFactor}));
        builder.addText(" ");
        this[_layoutTemplate] = (t0$ = builder.build(), (() => {
          t0$.layout(C9 || CT.C9);
          return t0$;
        })());
      }
      return dart.nullCheck(this[_layoutTemplate]).height;
    }
    [_applyFloatingPointHack](layoutValue) {
      if (layoutValue == null) dart.nullFailed(L6, 472, 41, "layoutValue");
      return layoutValue[$ceilToDouble]();
    }
    get minIntrinsicWidth() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, L6, 481, 12, "!_needsLayout");
      return this[_applyFloatingPointHack](dart.nullCheck(this[_paragraph]).minIntrinsicWidth);
    }
    get maxIntrinsicWidth() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, L6, 489, 12, "!_needsLayout");
      return this[_applyFloatingPointHack](dart.nullCheck(this[_paragraph]).maxIntrinsicWidth);
    }
    get width() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, L6, 497, 12, "!_needsLayout");
      return this[_applyFloatingPointHack](dart.equals(this.textWidthBasis, text_painter.TextWidthBasis.longestLine) ? dart.nullCheck(this[_paragraph]).longestLine : dart.nullCheck(this[_paragraph]).width);
    }
    get height() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, L6, 507, 12, "!_needsLayout");
      return this[_applyFloatingPointHack](dart.nullCheck(this[_paragraph]).height);
    }
    get size() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, L6, 515, 12, "!_needsLayout");
      return new ui.Size.new(this.width, this.height);
    }
    computeDistanceToActualBaseline(baseline) {
      if (baseline == null) dart.nullFailed(L6, 523, 55, "baseline");
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, L6, 524, 12, "!_needsLayout");
      if (!(baseline != null)) dart.assertFailed(null, L6, 525, 12, "baseline != null");
      switch (baseline) {
        case C10 || CT.C10:
        {
          return dart.nullCheck(this[_paragraph]).alphabeticBaseline;
        }
        case C11 || CT.C11:
        {
          return dart.nullCheck(this[_paragraph]).ideographicBaseline;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    get didExceedMaxLines() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, L6, 546, 12, "!_needsLayout");
      return dart.nullCheck(this[_paragraph]).didExceedMaxLines;
    }
    layout(opts) {
      let minWidth = opts && 'minWidth' in opts ? opts.minWidth : 0;
      if (minWidth == null) dart.nullFailed(L6, 561, 24, "minWidth");
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : 1 / 0;
      if (maxWidth == null) dart.nullFailed(L6, 561, 47, "maxWidth");
      if (!(this.text != null)) dart.assertFailed("TextPainter.text must be set to a non-null value before using the TextPainter.", L6, 562, 12, "text != null");
      if (!(this.textDirection != null)) dart.assertFailed("TextPainter.textDirection must be set to a non-null value before using the TextPainter.", L6, 563, 12, "textDirection != null");
      if (!dart.test(this[_needsLayout]) && minWidth == this[_lastMinWidth] && maxWidth == this[_lastMaxWidth]) return;
      this[_needsLayout] = false;
      if (this[_paragraph] == null) {
        let builder = ui.ParagraphBuilder.new(this[_createParagraphStyle]());
        dart.nullCheck(this[_text]).build(builder, {textScaleFactor: this.textScaleFactor, dimensions: this[_placeholderDimensions]});
        this[_inlinePlaceholderScales] = builder.placeholderScales;
        this[_paragraph] = builder.build();
      }
      this[_lastMinWidth] = minWidth;
      this[_lastMaxWidth] = maxWidth;
      this[_previousCaretPosition] = null;
      this[_previousCaretPrototype] = null;
      dart.nullCheck(this[_paragraph]).layout(new ui.ParagraphConstraints.new({width: maxWidth}));
      if (minWidth != maxWidth) {
        let newWidth = null;
        switch (this.textWidthBasis) {
          case C6 || CT.C6:
          {
            newWidth = this[_applyFloatingPointHack](dart.nullCheck(this[_paragraph]).longestLine);
            break;
          }
          case C5 || CT.C5:
          {
            newWidth = this.maxIntrinsicWidth;
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        newWidth = newWidth[$clamp](minWidth, maxWidth);
        if (newWidth != this[_applyFloatingPointHack](dart.nullCheck(this[_paragraph]).width)) {
          dart.nullCheck(this[_paragraph]).layout(new ui.ParagraphConstraints.new({width: newWidth}));
        }
      }
      this[_inlinePlaceholderBoxes] = dart.nullCheck(this[_paragraph]).getBoxesForPlaceholders();
    }
    paint(canvas, offset) {
      if (canvas == null) dart.nullFailed(L6, 614, 21, "canvas");
      if (offset == null) dart.nullFailed(L6, 614, 36, "offset");
      if (!dart.test(dart.fn(() => {
        if (dart.test(this[_needsLayout])) {
          dart.throw(assertions.FlutterError.new("TextPainter.paint called when text geometry was not yet calculated.\n" + "Please call layout() before paint() to position the text before painting it."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 615, 12, "() {\n      if (_needsLayout) {\n        throw FlutterError(\n          'TextPainter.paint called when text geometry was not yet calculated.\\n'\n          'Please call layout() before paint() to position the text before painting it.'\n        );\n      }\n      return true;\n    }()");
      canvas.drawParagraph(dart.nullCheck(this[_paragraph]), offset);
    }
    static _isUtf16Surrogate(value) {
      if (value == null) dart.nullFailed(L6, 632, 37, "value");
      return (dart.notNull(value) & 63488) === 55296;
    }
    static _isUnicodeDirectionality(value) {
      if (value == null) dart.nullFailed(L6, 640, 44, "value");
      return value === 8207 || value === 8206;
    }
    getOffsetAfter(offset) {
      if (offset == null) dart.nullFailed(L6, 646, 27, "offset");
      let nextCodeUnit = dart.nullCheck(this[_text]).codeUnitAt(offset);
      if (nextCodeUnit == null) return null;
      return dart.test(text_painter.TextPainter._isUtf16Surrogate(nextCodeUnit)) ? dart.notNull(offset) + 2 : dart.notNull(offset) + 1;
    }
    getOffsetBefore(offset) {
      if (offset == null) dart.nullFailed(L6, 656, 28, "offset");
      let prevCodeUnit = dart.nullCheck(this[_text]).codeUnitAt(dart.notNull(offset) - 1);
      if (prevCodeUnit == null) return null;
      return dart.test(text_painter.TextPainter._isUtf16Surrogate(prevCodeUnit)) ? dart.notNull(offset) - 2 : dart.notNull(offset) - 1;
    }
    [_getRectFromUpstream](offset, caretPrototype) {
      if (offset == null) dart.nullFailed(L6, 669, 34, "offset");
      if (caretPrototype == null) dart.nullFailed(L6, 669, 47, "caretPrototype");
      let flattenedText = dart.nullCheck(this[_text]).toPlainText({includePlaceholders: false});
      let prevCodeUnit = dart.nullCheck(this[_text]).codeUnitAt(math.max(core.int, 0, dart.notNull(offset) - 1));
      if (prevCodeUnit == null) return null;
      let needsSearch = dart.test(text_painter.TextPainter._isUtf16Surrogate(prevCodeUnit)) || dart.nullCheck(this[_text]).codeUnitAt(offset) === 8205 || dart.test(text_painter.TextPainter._isUnicodeDirectionality(prevCodeUnit));
      let graphemeClusterLength = needsSearch ? 2 : 1;
      let boxes = JSArrayOfTextBox().of([]);
      while (dart.test(boxes[$isEmpty])) {
        let prevRuneOffset = dart.notNull(offset) - graphemeClusterLength;
        boxes = dart.nullCheck(this[_paragraph]).getBoxesForRange(prevRuneOffset, offset, {boxHeightStyle: ui.BoxHeightStyle.strut});
        if (dart.test(boxes[$isEmpty])) {
          if (!needsSearch) {
            break;
          }
          if (prevRuneOffset < -flattenedText.length) {
            break;
          }
          graphemeClusterLength = graphemeClusterLength * 2;
          continue;
        }
        let box = boxes[$first];
        if (prevCodeUnit === 10) {
          return new ui.Rect.fromLTRB(this[_emptyOffset].dx, box.bottom, this[_emptyOffset].dx, dart.notNull(box.bottom) + dart.notNull(box.bottom) - dart.notNull(box.top));
        }
        let caretEnd = box.end;
        let dx = dart.equals(box.direction, ui.TextDirection.rtl) ? dart.notNull(caretEnd) - dart.notNull(caretPrototype.width) : caretEnd;
        return new ui.Rect.fromLTRB(math.min(core.double, dx, dart.nullCheck(this[_paragraph]).width), box.top, math.min(core.double, dx, dart.nullCheck(this[_paragraph]).width), box.bottom);
      }
      return null;
    }
    [_getRectFromDownstream](offset, caretPrototype) {
      if (offset == null) dart.nullFailed(L6, 718, 36, "offset");
      if (caretPrototype == null) dart.nullFailed(L6, 718, 49, "caretPrototype");
      let flattenedText = dart.nullCheck(this[_text]).toPlainText({includePlaceholders: false});
      let nextCodeUnit = dart.nullCheck(this[_text]).codeUnitAt(math.min(core.int, offset, flattenedText.length - 1));
      if (nextCodeUnit == null) return null;
      let needsSearch = dart.test(text_painter.TextPainter._isUtf16Surrogate(nextCodeUnit)) || nextCodeUnit === 8205 || dart.test(text_painter.TextPainter._isUnicodeDirectionality(nextCodeUnit));
      let graphemeClusterLength = needsSearch ? 2 : 1;
      let boxes = JSArrayOfTextBox().of([]);
      while (dart.test(boxes[$isEmpty])) {
        let nextRuneOffset = dart.notNull(offset) + graphemeClusterLength;
        boxes = dart.nullCheck(this[_paragraph]).getBoxesForRange(offset, nextRuneOffset, {boxHeightStyle: ui.BoxHeightStyle.strut});
        if (dart.test(boxes[$isEmpty])) {
          if (!needsSearch) {
            break;
          }
          if (nextRuneOffset >= flattenedText.length << 1 >>> 0) {
            break;
          }
          graphemeClusterLength = graphemeClusterLength * 2;
          continue;
        }
        let box = boxes[$last];
        let caretStart = box.start;
        let dx = dart.equals(box.direction, ui.TextDirection.rtl) ? dart.notNull(caretStart) - dart.notNull(caretPrototype.width) : caretStart;
        return new ui.Rect.fromLTRB(math.min(core.double, dx, dart.nullCheck(this[_paragraph]).width), box.top, math.min(core.double, dx, dart.nullCheck(this[_paragraph]).width), box.bottom);
      }
      return null;
    }
    get [_emptyOffset]() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, L6, 759, 12, "!_needsLayout");
      if (!(this.textAlign != null)) dart.assertFailed(null, L6, 760, 12, "textAlign != null");
      switch (this.textAlign) {
        case C12 || CT.C12:
        {
          return ui.Offset.zero;
        }
        case C13 || CT.C13:
        {
          return new ui.Offset.new(this.width, 0.0);
        }
        case C14 || CT.C14:
        {
          return new ui.Offset.new(dart.notNull(this.width) / 2.0, 0.0);
        }
        case C17 || CT.C17:
        case C8 || CT.C8:
        {
          if (!(this.textDirection != null)) dart.assertFailed(null, L6, 770, 16, "textDirection != null");
          switch (dart.nullCheck(this.textDirection)) {
            case C15 || CT.C15:
            {
              return new ui.Offset.new(this.width, 0.0);
            }
            case C16 || CT.C16:
            {
              return ui.Offset.zero;
            }
            default:
            {
              dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
            }
          }
        }
        case C18 || CT.C18:
        {
          if (!(this.textDirection != null)) dart.assertFailed(null, L6, 778, 16, "textDirection != null");
          switch (dart.nullCheck(this.textDirection)) {
            case C15 || CT.C15:
            {
              return ui.Offset.zero;
            }
            case C16 || CT.C16:
            {
              return new ui.Offset.new(this.width, 0.0);
            }
            default:
            {
              dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
            }
          }
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    getOffsetForCaret(position, caretPrototype) {
      if (position == null) dart.nullFailed(L6, 791, 41, "position");
      if (caretPrototype == null) dart.nullFailed(L6, 791, 56, "caretPrototype");
      this[_computeCaretMetrics](position, caretPrototype);
      return this[_caretMetrics].offset;
    }
    getFullHeightForCaret(position, caretPrototype) {
      if (position == null) dart.nullFailed(L6, 801, 46, "position");
      if (caretPrototype == null) dart.nullFailed(L6, 801, 61, "caretPrototype");
      this[_computeCaretMetrics](position, caretPrototype);
      return this[_caretMetrics].fullHeight;
    }
    get [_caretMetrics]() {
      let t0;
      return dart.test(this[__TextPainter__caretMetrics_isSet]) ? (t0 = this[__TextPainter__caretMetrics], t0) : dart.throw(new _internal.LateError.fieldNI("_caretMetrics"));
    }
    set [_caretMetrics](t0) {
      if (t0 == null) dart.nullFailed(L6, 809, 22, "null");
      this[__TextPainter__caretMetrics_isSet] = true;
      this[__TextPainter__caretMetrics] = t0;
    }
    [_computeCaretMetrics](position, caretPrototype) {
      let t1, t1$;
      if (position == null) dart.nullFailed(L6, 819, 42, "position");
      if (caretPrototype == null) dart.nullFailed(L6, 819, 57, "caretPrototype");
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, L6, 820, 12, "!_needsLayout");
      if (dart.equals(position, this[_previousCaretPosition]) && dart.equals(caretPrototype, this[_previousCaretPrototype])) return;
      let offset = position.offset;
      if (!(position.affinity != null)) dart.assertFailed(null, L6, 824, 12, "position.affinity != null");
      let rect = null;
      switch (position.affinity) {
        case C19 || CT.C19:
        {
          {
            rect = (t1 = this[_getRectFromUpstream](offset, caretPrototype), t1 == null ? this[_getRectFromDownstream](offset, caretPrototype) : t1);
            break;
          }
        }
        case C20 || CT.C20:
        {
          {
            rect = (t1$ = this[_getRectFromDownstream](offset, caretPrototype), t1$ == null ? this[_getRectFromUpstream](offset, caretPrototype) : t1$);
            break;
          }
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      this[_caretMetrics] = new text_painter._CaretMetrics.new({offset: rect != null ? new ui.Offset.new(rect.left, rect.top) : this[_emptyOffset], fullHeight: rect != null ? dart.notNull(rect.bottom) - dart.notNull(rect.top) : null});
      this[_previousCaretPosition] = position;
      this[_previousCaretPrototype] = caretPrototype;
    }
    getBoxesForSelection(selection, opts) {
      if (selection == null) dart.nullFailed(L6, 857, 19, "selection");
      let boxHeightStyle = opts && 'boxHeightStyle' in opts ? opts.boxHeightStyle : C21 || CT.C21;
      if (boxHeightStyle == null) dart.nullFailed(L6, 858, 23, "boxHeightStyle");
      let boxWidthStyle = opts && 'boxWidthStyle' in opts ? opts.boxWidthStyle : C22 || CT.C22;
      if (boxWidthStyle == null) dart.nullFailed(L6, 859, 22, "boxWidthStyle");
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, L6, 861, 12, "!_needsLayout");
      if (!(boxHeightStyle != null)) dart.assertFailed(null, L6, 862, 12, "boxHeightStyle != null");
      if (!(boxWidthStyle != null)) dart.assertFailed(null, L6, 863, 12, "boxWidthStyle != null");
      return dart.nullCheck(this[_paragraph]).getBoxesForRange(selection.start, selection.end, {boxHeightStyle: boxHeightStyle, boxWidthStyle: boxWidthStyle});
    }
    getPositionForOffset(offset) {
      if (offset == null) dart.nullFailed(L6, 873, 44, "offset");
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, L6, 874, 12, "!_needsLayout");
      return dart.nullCheck(this[_paragraph]).getPositionForOffset(offset);
    }
    getWordBoundary(position) {
      if (position == null) dart.nullFailed(L6, 885, 42, "position");
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, L6, 886, 12, "!_needsLayout");
      return dart.nullCheck(this[_paragraph]).getWordBoundary(position);
    }
    getLineBoundary(position) {
      if (position == null) dart.nullFailed(L6, 893, 42, "position");
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, L6, 894, 12, "!_needsLayout");
      return dart.nullCheck(this[_paragraph]).getLineBoundary(position);
    }
    computeLineMetrics() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, L6, 914, 12, "!_needsLayout");
      return dart.nullCheck(this[_paragraph]).computeLineMetrics();
    }
  };
  (text_painter.TextPainter.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C8 || CT.C8;
    if (textAlign == null) dart.nullFailed(L6, 145, 15, "textAlign");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
    if (textScaleFactor == null) dart.nullFailed(L6, 147, 12, "textScaleFactor");
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
    let ellipsis = opts && 'ellipsis' in opts ? opts.ellipsis : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
    let textWidthBasis = opts && 'textWidthBasis' in opts ? opts.textWidthBasis : C5 || CT.C5;
    if (textWidthBasis == null) dart.nullFailed(L6, 152, 20, "textWidthBasis");
    let textHeightBehavior = opts && 'textHeightBehavior' in opts ? opts.textHeightBehavior : null;
    this[_paragraph] = null;
    this[_needsLayout] = true;
    this[_layoutTemplate] = null;
    this[_inlinePlaceholderBoxes] = null;
    this[_inlinePlaceholderScales] = null;
    this[_placeholderDimensions] = null;
    this[_lastMinWidth] = null;
    this[_lastMaxWidth] = null;
    this[__TextPainter__caretMetrics] = null;
    this[__TextPainter__caretMetrics_isSet] = false;
    this[_previousCaretPosition] = null;
    this[_previousCaretPrototype] = null;
    if (!(text == null || dart.test(text.debugAssertIsValid()))) dart.assertFailed(null, L6, 154, 15, "text == null || text.debugAssertIsValid()");
    if (!(textAlign != null)) dart.assertFailed(null, L6, 155, 15, "textAlign != null");
    if (!(textScaleFactor != null)) dart.assertFailed(null, L6, 156, 15, "textScaleFactor != null");
    if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, L6, 157, 15, "maxLines == null || maxLines > 0");
    if (!(textWidthBasis != null)) dart.assertFailed(null, L6, 158, 15, "textWidthBasis != null");
    this[_text] = text;
    this[_textAlign] = textAlign;
    this[_textDirection] = textDirection;
    this[_textScaleFactor] = textScaleFactor;
    this[_maxLines] = maxLines;
    this[_ellipsis] = ellipsis;
    this[_locale] = locale;
    this[_strutStyle] = strutStyle;
    this[_textWidthBasis] = textWidthBasis;
    this[_textHeightBehavior] = textHeightBehavior;
    ;
  }).prototype = text_painter.TextPainter.prototype;
  dart.addTypeTests(text_painter.TextPainter);
  dart.addTypeCaches(text_painter.TextPainter);
  dart.setMethodSignature(text_painter.TextPainter, () => ({
    __proto__: dart.getMethods(text_painter.TextPainter.__proto__),
    markNeedsLayout: dart.fnType(dart.void, []),
    setPlaceholderDimensions: dart.fnType(dart.void, [dart.nullable(core.List$(text_painter.PlaceholderDimensions))]),
    [_createParagraphStyle]: dart.fnType(ui.ParagraphStyle, [], [dart.nullable(ui.TextDirection)]),
    [_applyFloatingPointHack]: dart.fnType(core.double, [core.double]),
    computeDistanceToActualBaseline: dart.fnType(core.double, [ui.TextBaseline]),
    layout: dart.fnType(dart.void, [], {maxWidth: core.double, minWidth: core.double}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Offset]),
    getOffsetAfter: dart.fnType(dart.nullable(core.int), [core.int]),
    getOffsetBefore: dart.fnType(dart.nullable(core.int), [core.int]),
    [_getRectFromUpstream]: dart.fnType(dart.nullable(ui.Rect), [core.int, ui.Rect]),
    [_getRectFromDownstream]: dart.fnType(dart.nullable(ui.Rect), [core.int, ui.Rect]),
    getOffsetForCaret: dart.fnType(ui.Offset, [ui.TextPosition, ui.Rect]),
    getFullHeightForCaret: dart.fnType(dart.nullable(core.double), [ui.TextPosition, ui.Rect]),
    [_computeCaretMetrics]: dart.fnType(dart.void, [ui.TextPosition, ui.Rect]),
    getBoxesForSelection: dart.fnType(core.List$(ui.TextBox), [text_editing.TextSelection], {boxHeightStyle: ui.BoxHeightStyle, boxWidthStyle: ui.BoxWidthStyle}, {}),
    getPositionForOffset: dart.fnType(ui.TextPosition, [ui.Offset]),
    getWordBoundary: dart.fnType(ui.TextRange, [ui.TextPosition]),
    getLineBoundary: dart.fnType(ui.TextRange, [ui.TextPosition]),
    computeLineMetrics: dart.fnType(core.List$(ui.LineMetrics), [])
  }));
  dart.setGetterSignature(text_painter.TextPainter, () => ({
    __proto__: dart.getGetters(text_painter.TextPainter.__proto__),
    text: dart.nullable(inline_span.InlineSpan),
    textAlign: ui.TextAlign,
    textDirection: dart.nullable(ui.TextDirection),
    textScaleFactor: core.double,
    ellipsis: dart.nullable(core.String),
    locale: dart.nullable(ui.Locale),
    maxLines: dart.nullable(core.int),
    strutStyle: dart.nullable(strut_style.StrutStyle),
    textWidthBasis: text_painter.TextWidthBasis,
    textHeightBehavior: dart.nullable(ui.TextHeightBehavior),
    inlinePlaceholderBoxes: dart.nullable(core.List$(ui.TextBox)),
    inlinePlaceholderScales: dart.nullable(core.List$(core.double)),
    preferredLineHeight: core.double,
    minIntrinsicWidth: core.double,
    maxIntrinsicWidth: core.double,
    width: core.double,
    height: core.double,
    size: ui.Size,
    didExceedMaxLines: core.bool,
    [_emptyOffset]: ui.Offset,
    [_caretMetrics]: text_painter._CaretMetrics
  }));
  dart.setSetterSignature(text_painter.TextPainter, () => ({
    __proto__: dart.getSetters(text_painter.TextPainter.__proto__),
    text: dart.nullable(inline_span.InlineSpan),
    textAlign: ui.TextAlign,
    textDirection: dart.nullable(ui.TextDirection),
    textScaleFactor: core.double,
    ellipsis: dart.nullable(core.String),
    locale: dart.nullable(ui.Locale),
    maxLines: dart.nullable(core.int),
    strutStyle: dart.nullable(strut_style.StrutStyle),
    textWidthBasis: text_painter.TextWidthBasis,
    textHeightBehavior: dart.nullable(ui.TextHeightBehavior),
    [_caretMetrics]: text_painter._CaretMetrics
  }));
  dart.setLibraryUri(text_painter.TextPainter, L7);
  dart.setFieldSignature(text_painter.TextPainter, () => ({
    __proto__: dart.getFields(text_painter.TextPainter.__proto__),
    [_paragraph]: dart.fieldType(dart.nullable(ui.Paragraph)),
    [_needsLayout]: dart.fieldType(core.bool),
    [_text]: dart.fieldType(dart.nullable(inline_span.InlineSpan)),
    [_textAlign]: dart.fieldType(ui.TextAlign),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [_textScaleFactor]: dart.fieldType(core.double),
    [_ellipsis]: dart.fieldType(dart.nullable(core.String)),
    [_locale]: dart.fieldType(dart.nullable(ui.Locale)),
    [_maxLines]: dart.fieldType(dart.nullable(core.int)),
    [_strutStyle]: dart.fieldType(dart.nullable(strut_style.StrutStyle)),
    [_textWidthBasis]: dart.fieldType(text_painter.TextWidthBasis),
    [_textHeightBehavior]: dart.fieldType(dart.nullable(ui.TextHeightBehavior)),
    [_layoutTemplate]: dart.fieldType(dart.nullable(ui.Paragraph)),
    [_inlinePlaceholderBoxes]: dart.fieldType(dart.nullable(core.List$(ui.TextBox))),
    [_inlinePlaceholderScales]: dart.fieldType(dart.nullable(core.List$(core.double))),
    [_placeholderDimensions]: dart.fieldType(dart.nullable(core.List$(text_painter.PlaceholderDimensions))),
    [_lastMinWidth]: dart.fieldType(dart.nullable(core.double)),
    [_lastMaxWidth]: dart.fieldType(dart.nullable(core.double)),
    [__TextPainter__caretMetrics]: dart.fieldType(dart.nullable(text_painter._CaretMetrics)),
    [__TextPainter__caretMetrics_isSet]: dart.fieldType(core.bool),
    [_previousCaretPosition]: dart.fieldType(dart.nullable(ui.TextPosition)),
    [_previousCaretPrototype]: dart.fieldType(dart.nullable(ui.Rect))
  }));
  dart.defineLazy(text_painter.TextPainter, {
    /*text_painter.TextPainter._zwjUtf16*/get _zwjUtf16() {
      return 8205;
    }
  }, false);
  dart.defineLazy(text_painter, {
    /*text_painter._kDefaultFontSize*/get _kDefaultFontSize() {
      return 14;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/painting/placeholder_span.dart", {
    "package:flutter/src/painting/placeholder_span.dart": placeholder_span,
    "package:flutter/src/painting/text_span.dart": text_span,
    "package:flutter/src/painting/inline_span.dart": inline_span,
    "package:flutter/src/painting/text_painter.dart": text_painter
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["inline_span.dart","placeholder_span.dart","text_span.dart","text_painter.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/placeholder_span.dart.lib.js"}');
  // Exports:
  return {
    src__painting__placeholder_span: placeholder_span,
    src__painting__text_span: text_span,
    src__painting__inline_span: inline_span,
    src__painting__text_painter: text_painter
  };
}));

//# sourceMappingURL=placeholder_span.dart.lib.js.map
