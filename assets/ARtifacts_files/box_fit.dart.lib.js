define(['dart_sdk'], (function load__packages__flutter__src__painting__box_fit_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var box_fit = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var BoxFitL = () => (BoxFitL = dart.constFn(dart.legacy(box_fit.BoxFit)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/box_fit.dart";
  var L1 = "package:flutter/src/painting/box_fit.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name$]: "BoxFit.fill",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name$]: "BoxFit.contain",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name$]: "BoxFit.cover",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name$]: "BoxFit.fitWidth",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name$]: "BoxFit.fitHeight",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name$]: "BoxFit.none",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name$]: "BoxFit.scaleDown",
        index: 6
      });
    },
    get C7() {
      return C7 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], BoxFitL());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: box_fit.FittedSizes.prototype,
        [destination$]: C9 || CT.C9,
        [source$]: C9 || CT.C9
      });
    }
  }, false);
  var _name$ = dart.privateName(box_fit, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  box_fit.BoxFit = class BoxFit extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (box_fit.BoxFit.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 18, 6, "index");
    if (_name == null) dart.nullFailed(L0, 18, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = box_fit.BoxFit.prototype;
  dart.addTypeTests(box_fit.BoxFit);
  dart.addTypeCaches(box_fit.BoxFit);
  dart.setLibraryUri(box_fit.BoxFit, L1);
  dart.setFieldSignature(box_fit.BoxFit, () => ({
    __proto__: dart.getFields(box_fit.BoxFit.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(box_fit.BoxFit, ['toString']);
  box_fit.BoxFit.fill = C0 || CT.C0;
  box_fit.BoxFit.contain = C1 || CT.C1;
  box_fit.BoxFit.cover = C2 || CT.C2;
  box_fit.BoxFit.fitWidth = C3 || CT.C3;
  box_fit.BoxFit.fitHeight = C4 || CT.C4;
  box_fit.BoxFit.none = C5 || CT.C5;
  box_fit.BoxFit.scaleDown = C6 || CT.C6;
  box_fit.BoxFit.values = C7 || CT.C7;
  var source$ = dart.privateName(box_fit, "FittedSizes.source");
  var destination$ = dart.privateName(box_fit, "FittedSizes.destination");
  box_fit.FittedSizes = class FittedSizes extends core.Object {
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
    get destination() {
      return this[destination$];
    }
    set destination(value) {
      super.destination = value;
    }
  };
  (box_fit.FittedSizes.new = function(source, destination) {
    if (source == null) dart.nullFailed(L0, 82, 26, "source");
    if (destination == null) dart.nullFailed(L0, 82, 39, "destination");
    this[source$] = source;
    this[destination$] = destination;
    ;
  }).prototype = box_fit.FittedSizes.prototype;
  dart.addTypeTests(box_fit.FittedSizes);
  dart.addTypeCaches(box_fit.FittedSizes);
  dart.setLibraryUri(box_fit.FittedSizes, L1);
  dart.setFieldSignature(box_fit.FittedSizes, () => ({
    __proto__: dart.getFields(box_fit.FittedSizes.__proto__),
    source: dart.finalFieldType(ui.Size),
    destination: dart.finalFieldType(ui.Size)
  }));
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C9;
  var C8;
  box_fit.applyBoxFit = function applyBoxFit(fit, inputSize, outputSize) {
    if (fit == null) dart.nullFailed(L0, 142, 32, "fit");
    if (inputSize == null) dart.nullFailed(L0, 142, 42, "inputSize");
    if (outputSize == null) dart.nullFailed(L0, 142, 58, "outputSize");
    if (dart.notNull(inputSize.height) <= 0.0 || dart.notNull(inputSize.width) <= 0.0 || dart.notNull(outputSize.height) <= 0.0 || dart.notNull(outputSize.width) <= 0.0) return C8 || CT.C8;
    let sourceSize = null;
    let destinationSize = null;
    switch (fit) {
      case C0 || CT.C0:
      {
        sourceSize = inputSize;
        destinationSize = outputSize;
        break;
      }
      case C1 || CT.C1:
      {
        sourceSize = inputSize;
        if (dart.notNull(outputSize.width) / dart.notNull(outputSize.height) > dart.notNull(sourceSize.width) / dart.notNull(sourceSize.height))
          destinationSize = new ui.Size.new(dart.notNull(sourceSize.width) * dart.notNull(outputSize.height) / dart.notNull(sourceSize.height), outputSize.height);
        else
          destinationSize = new ui.Size.new(outputSize.width, dart.notNull(sourceSize.height) * dart.notNull(outputSize.width) / dart.notNull(sourceSize.width));
        break;
      }
      case C2 || CT.C2:
      {
        if (dart.notNull(outputSize.width) / dart.notNull(outputSize.height) > dart.notNull(inputSize.width) / dart.notNull(inputSize.height)) {
          sourceSize = new ui.Size.new(inputSize.width, dart.notNull(inputSize.width) * dart.notNull(outputSize.height) / dart.notNull(outputSize.width));
        } else {
          sourceSize = new ui.Size.new(dart.notNull(inputSize.height) * dart.notNull(outputSize.width) / dart.notNull(outputSize.height), inputSize.height);
        }
        destinationSize = outputSize;
        break;
      }
      case C3 || CT.C3:
      {
        sourceSize = new ui.Size.new(inputSize.width, dart.notNull(inputSize.width) * dart.notNull(outputSize.height) / dart.notNull(outputSize.width));
        destinationSize = new ui.Size.new(outputSize.width, dart.notNull(sourceSize.height) * dart.notNull(outputSize.width) / dart.notNull(sourceSize.width));
        break;
      }
      case C4 || CT.C4:
      {
        sourceSize = new ui.Size.new(dart.notNull(inputSize.height) * dart.notNull(outputSize.width) / dart.notNull(outputSize.height), inputSize.height);
        destinationSize = new ui.Size.new(dart.notNull(sourceSize.width) * dart.notNull(outputSize.height) / dart.notNull(sourceSize.height), outputSize.height);
        break;
      }
      case C5 || CT.C5:
      {
        sourceSize = new ui.Size.new(math.min(core.double, inputSize.width, outputSize.width), math.min(core.double, inputSize.height, outputSize.height));
        destinationSize = sourceSize;
        break;
      }
      case C6 || CT.C6:
      {
        sourceSize = inputSize;
        destinationSize = inputSize;
        let aspectRatio = dart.notNull(inputSize.width) / dart.notNull(inputSize.height);
        if (dart.notNull(destinationSize.height) > dart.notNull(outputSize.height)) destinationSize = new ui.Size.new(dart.notNull(outputSize.height) * aspectRatio, outputSize.height);
        if (dart.notNull(destinationSize.width) > dart.notNull(outputSize.width)) destinationSize = new ui.Size.new(outputSize.width, dart.notNull(outputSize.width) / aspectRatio);
        break;
      }
      default:
      {
        dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
      }
    }
    return new box_fit.FittedSizes.new(sourceSize, destinationSize);
  };
  dart.trackLibraries("packages/flutter/src/painting/box_fit.dart", {
    "package:flutter/src/painting/box_fit.dart": box_fit
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["box_fit.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0EA;;;QAzDK;;;;;EAyDL;;;;;;;;;;;;;;;;;;;;;IAUa;;;;;;IAGA;;;;;;;sCANY,QAAa;QAAb;QAAa;IAAb;IAAa;;EAAY;;;;;;;;;;;;;6CA4DnB,KAAU,WAAgB;QAA1B;QAAU;QAAgB;AACvD,QAAqB,aAAjB,AAAU,SAAD,YAAW,OAAuB,aAAhB,AAAU,SAAD,WAAU,OAAyB,aAAlB,AAAW,UAAD,YAAW,OAAwB,aAAjB,AAAW,UAAD,WAAU,KACvG;AAEG;AAAY;AACjB,YAAQ,GAAG;;;AAEe,QAAtB,aAAa,SAAS;AACM,QAA5B,kBAAkB,UAAU;AAC5B;;;;AAEsB,QAAtB,aAAa,SAAS;AACtB,YAAqB,AAAoB,aAArC,AAAW,UAAD,uBAAS,AAAW,UAAD,WAA2B,aAAjB,AAAW,UAAD,uBAAS,AAAW,UAAD;AAC6B,UAAnG,kBAAkB,gBAAsB,AAAoB,aAArC,AAAW,UAAD,uBAAS,AAAW,UAAD,wBAAU,AAAW,UAAD,UAAS,AAAW,UAAD;;AAEM,UAAjG,kBAAkB,gBAAK,AAAW,UAAD,QAA0B,AAAmB,aAArC,AAAW,UAAD,wBAAU,AAAW,UAAD,uBAAS,AAAW,UAAD;AAC5F;;;;AAEA,YAAqB,AAAoB,aAArC,AAAW,UAAD,uBAAS,AAAW,UAAD,WAA0B,aAAhB,AAAU,SAAD,uBAAS,AAAU,SAAD;AACsB,UAA1F,aAAa,gBAAK,AAAU,SAAD,QAAwB,AAAoB,aAApC,AAAU,SAAD,uBAAS,AAAW,UAAD,wBAAU,AAAW,UAAD;;AAES,UAA5F,aAAa,gBAAsB,AAAmB,aAApC,AAAU,SAAD,wBAAU,AAAW,UAAD,uBAAS,AAAW,UAAD,UAAS,AAAU,SAAD;;AAE1D,QAA5B,kBAAkB,UAAU;AAC5B;;;;AAE0F,QAA1F,aAAa,gBAAK,AAAU,SAAD,QAAwB,AAAoB,aAApC,AAAU,SAAD,uBAAS,AAAW,UAAD,wBAAU,AAAW,UAAD;AACc,QAAjG,kBAAkB,gBAAK,AAAW,UAAD,QAA0B,AAAmB,aAArC,AAAW,UAAD,wBAAU,AAAW,UAAD,uBAAS,AAAW,UAAD;AAC1F;;;;AAE4F,QAA5F,aAAa,gBAAsB,AAAmB,aAApC,AAAU,SAAD,wBAAU,AAAW,UAAD,uBAAS,AAAW,UAAD,UAAS,AAAU,SAAD;AACe,QAAnG,kBAAkB,gBAAsB,AAAoB,aAArC,AAAW,UAAD,uBAAS,AAAW,UAAD,wBAAU,AAAW,UAAD,UAAS,AAAW,UAAD;AAC3F;;;;AAGoE,QADpE,aAAa,gBAAK,sBAAS,AAAU,SAAD,QAAQ,AAAW,UAAD,SAChC,sBAAS,AAAU,SAAD,SAAS,AAAW,UAAD;AAC/B,QAA5B,kBAAkB,UAAU;AAC5B;;;;AAEsB,QAAtB,aAAa,SAAS;AACK,QAA3B,kBAAkB,SAAS;AACd,0BAA8B,aAAhB,AAAU,SAAD,uBAAS,AAAU,SAAD;AACtD,YAA2B,aAAvB,AAAgB,eAAD,wBAAU,AAAW,UAAD,UACrC,AAA0E,kBAAxD,gBAAuB,aAAlB,AAAW,UAAD,WAAU,WAAW,EAAE,AAAW,UAAD;AACpE,YAA0B,aAAtB,AAAgB,eAAD,uBAAS,AAAW,UAAD,SACpC,AAAwE,kBAAtD,gBAAK,AAAW,UAAD,QAAyB,aAAjB,AAAW,UAAD,UAAS,WAAW;AACzE;;;;AAzCJ;;;AA2CA,UAAO,6BAAY,UAAU,EAAE,eAAe;EAChD","file":"../../../../../../../../../../packages/flutter/src/painting/box_fit.dart.lib.js"}');
  // Exports:
  return {
    src__painting__box_fit: box_fit
  };
}));

//# sourceMappingURL=box_fit.dart.lib.js.map
