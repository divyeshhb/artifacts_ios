define(['dart_sdk', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/change_notifier.dart'], (function load__packages__flutter__src__rendering__viewport_offset_dart(dart_sdk, packages__flutter__src__animation__curves$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__change_notifier$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  var viewport_offset = Object.create(dart.library);
  var $join = dartx.join;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(false);
  var ScrollDirectionL = () => (ScrollDirectionL = dart.constFn(dart.legacy(viewport_offset.ScrollDirection)))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/rendering/viewport_offset.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/viewport_offset.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: viewport_offset.ScrollDirection.prototype,
        [_name$]: "ScrollDirection.idle",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: viewport_offset.ScrollDirection.prototype,
        [_name$]: "ScrollDirection.forward",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: viewport_offset.ScrollDirection.prototype,
        [_name$]: "ScrollDirection.reverse",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], ScrollDirectionL());
    }
  }, false);
  var _name$ = dart.privateName(viewport_offset, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  viewport_offset.ScrollDirection = class ScrollDirection extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (viewport_offset.ScrollDirection.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 17, 6, "index");
    if (_name == null) dart.nullFailed(L0, 17, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = viewport_offset.ScrollDirection.prototype;
  dart.addTypeTests(viewport_offset.ScrollDirection);
  dart.addTypeCaches(viewport_offset.ScrollDirection);
  dart.setLibraryUri(viewport_offset.ScrollDirection, L1);
  dart.setFieldSignature(viewport_offset.ScrollDirection, () => ({
    __proto__: dart.getFields(viewport_offset.ScrollDirection.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(viewport_offset.ScrollDirection, ['toString']);
  viewport_offset.ScrollDirection.idle = C0 || CT.C0;
  viewport_offset.ScrollDirection.forward = C1 || CT.C1;
  viewport_offset.ScrollDirection.reverse = C2 || CT.C2;
  viewport_offset.ScrollDirection.values = C3 || CT.C3;
  viewport_offset.ViewportOffset = class ViewportOffset extends change_notifier.ChangeNotifier {
    moveTo(to, opts) {
      let t0;
      if (to == null) dart.nullFailed(L0, 194, 12, "to");
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : null;
      let clamp = opts && 'clamp' in opts ? opts.clamp : null;
      if (!(to != null)) dart.assertFailed(null, L0, 199, 12, "to != null");
      if (duration == null || dart.equals(duration, core.Duration.zero)) {
        this.jumpTo(to);
        return FutureOfvoid().value();
      } else {
        return this.animateTo(to, {duration: duration, curve: (t0 = curve, t0 == null ? curves.Curves.ease : t0)});
      }
    }
    toString() {
      let description = JSArrayOfString().of([]);
      this.debugFillDescription(description);
      return dart.str(diagnostics.describeIdentity(this)) + "(" + dart.str(description[$join](", ")) + ")";
    }
    debugFillDescription(description) {
      if (description == null) dart.nullFailed(L0, 248, 42, "description");
      if (dart.test(this.hasPixels)) {
        description[$add]("offset: " + this.pixels[$toStringAsFixed](1));
      }
    }
  };
  (viewport_offset.ViewportOffset.new = function() {
    viewport_offset.ViewportOffset.__proto__.new.call(this);
    ;
  }).prototype = viewport_offset.ViewportOffset.prototype;
  dart.addTypeTests(viewport_offset.ViewportOffset);
  dart.addTypeCaches(viewport_offset.ViewportOffset);
  dart.setMethodSignature(viewport_offset.ViewportOffset, () => ({
    __proto__: dart.getMethods(viewport_offset.ViewportOffset.__proto__),
    moveTo: dart.fnType(async.Future$(dart.void), [core.double], {clamp: dart.nullable(core.bool), curve: dart.nullable(curves.Curve), duration: dart.nullable(core.Duration)}, {}),
    debugFillDescription: dart.fnType(dart.void, [core.List$(core.String)])
  }));
  dart.setLibraryUri(viewport_offset.ViewportOffset, L1);
  dart.defineExtensionMethods(viewport_offset.ViewportOffset, ['toString']);
  var _pixels$ = dart.privateName(viewport_offset, "_pixels");
  viewport_offset._FixedViewportOffset = class _FixedViewportOffset extends viewport_offset.ViewportOffset {
    get pixels() {
      return this[_pixels$];
    }
    get hasPixels() {
      return true;
    }
    applyViewportDimension(viewportDimension) {
      if (viewportDimension == null) dart.nullFailed(L0, 268, 38, "viewportDimension");
      return true;
    }
    applyContentDimensions(minScrollExtent, maxScrollExtent) {
      if (minScrollExtent == null) dart.nullFailed(L0, 271, 38, "minScrollExtent");
      if (maxScrollExtent == null) dart.nullFailed(L0, 271, 62, "maxScrollExtent");
      return true;
    }
    correctBy(correction) {
      if (correction == null) dart.nullFailed(L0, 274, 25, "correction");
      this[_pixels$] = dart.notNull(this[_pixels$]) + dart.notNull(correction);
    }
    jumpTo(pixels) {
      if (pixels == null) dart.nullFailed(L0, 279, 22, "pixels");
    }
    animateTo(to, opts) {
      if (to == null) dart.nullFailed(L0, 285, 12, "to");
      let duration = opts && 'duration' in opts ? opts.duration : null;
      if (duration == null) dart.nullFailed(L0, 286, 23, "duration");
      let curve = opts && 'curve' in opts ? opts.curve : null;
      if (curve == null) dart.nullFailed(L0, 287, 20, "curve");
      return async.async(dart.void, function* animateTo() {
      });
    }
    get userScrollDirection() {
      return viewport_offset.ScrollDirection.idle;
    }
    get allowImplicitScrolling() {
      return false;
    }
  };
  (viewport_offset._FixedViewportOffset.new = function(_pixels) {
    if (_pixels == null) dart.nullFailed(L0, 256, 29, "_pixels");
    this[_pixels$] = _pixels;
    viewport_offset._FixedViewportOffset.__proto__.new.call(this);
    ;
  }).prototype = viewport_offset._FixedViewportOffset.prototype;
  dart.defineValue(viewport_offset._FixedViewportOffset, 'zero', function() {
    this[_pixels$] = 0.0;
    viewport_offset._FixedViewportOffset.__proto__.new.call(this);
    ;
  }).prototype = viewport_offset._FixedViewportOffset.prototype;
  dart.addTypeTests(viewport_offset._FixedViewportOffset);
  dart.addTypeCaches(viewport_offset._FixedViewportOffset);
  dart.setMethodSignature(viewport_offset._FixedViewportOffset, () => ({
    __proto__: dart.getMethods(viewport_offset._FixedViewportOffset.__proto__),
    applyViewportDimension: dart.fnType(core.bool, [core.double]),
    applyContentDimensions: dart.fnType(core.bool, [core.double, core.double]),
    correctBy: dart.fnType(dart.void, [core.double]),
    jumpTo: dart.fnType(dart.void, [core.double]),
    animateTo: dart.fnType(async.Future$(dart.void), [core.double], {}, {curve: curves.Curve, duration: core.Duration})
  }));
  dart.setGetterSignature(viewport_offset._FixedViewportOffset, () => ({
    __proto__: dart.getGetters(viewport_offset._FixedViewportOffset.__proto__),
    pixels: core.double,
    hasPixels: core.bool,
    userScrollDirection: viewport_offset.ScrollDirection,
    allowImplicitScrolling: core.bool
  }));
  dart.setLibraryUri(viewport_offset._FixedViewportOffset, L1);
  dart.setFieldSignature(viewport_offset._FixedViewportOffset, () => ({
    __proto__: dart.getFields(viewport_offset._FixedViewportOffset.__proto__),
    [_pixels$]: dart.fieldType(core.double)
  }));
  viewport_offset.flipScrollDirection = function flipScrollDirection(direction) {
    if (direction == null) dart.nullFailed(L0, 41, 53, "direction");
    switch (direction) {
      case C0 || CT.C0:
      {
        return viewport_offset.ScrollDirection.idle;
      }
      case C1 || CT.C1:
      {
        return viewport_offset.ScrollDirection.reverse;
      }
      case C2 || CT.C2:
      {
        return viewport_offset.ScrollDirection.forward;
      }
      default:
      {
        dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
      }
    }
  };
  dart.trackLibraries("packages/flutter/src/rendering/viewport_offset.dart", {
    "package:flutter/src/rendering/viewport_offset.dart": viewport_offset
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["viewport_offset.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiCA;;;QAjBK;;;;;EAiBL;;;;;;;;;;;;;;;WAgKW;;;UACG;UACH;UACD;AAEN,YAAO,AAAG,EAAD,IAAI;AACb,UAAI,AAAS,QAAD,IAAI,QAAiB,YAAT,QAAQ,EAAa;AACjC,QAAV,YAAO,EAAE;AACT,cAAO;;AAEP,cAAO,gBAAU,EAAE,aAAY,QAAQ,UAAe,KAAN,KAAK,QAAL,OAAgB;;IAEpE;;AA2BqB,wBAAsB;AACR,MAAjC,0BAAqB,WAAW;AAChC,YAA6D,UAAnD,6BAAiB,SAAM,eAAG,AAAY,WAAD,QAAM,SAAM;IAC7D;;UAYuC;AACrC,oBAAI;AACqD,QAAvD,AAAY,WAAD,OAAK,AAAsC,aAA3B,AAAO,8BAAgB;;IAEtD;;;AAtLA;;EAAgB;;;;;;;;;;;;;AAgMK;IAAO;;AAGN;IAAI;;UAGS;AAAsB;IAAI;2BAG1B,iBAAwB;UAAxB;UAAwB;AAAoB;IAAI;;UAG7D;AACC,MAArB,iBAAQ,aAAR,+BAAW,UAAU;IACvB;;UAGmB;IAEnB;;UAIS;UACW;;UACH;;AAHK;MAIX;;;AAGgC,YAAgB;IAAI;;AAG5B;IAAK;;;QAtCd;;AAA1B;;EAAkC;;IACI,iBAAE;AAAxC;;EAA2C;;;;;;;;;;;;;;;;;;;;;;;;QAxNO;AAClD,YAAQ,SAAS;;;AAEb,cAAuB;;;;AAEvB,cAAuB;;;;AAEvB,cAAuB;;;;AAN3B;;;EAQF","file":"../../../../../../../../../../packages/flutter/src/rendering/viewport_offset.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__viewport_offset: viewport_offset
  };
}));

//# sourceMappingURL=viewport_offset.dart.lib.js.map
