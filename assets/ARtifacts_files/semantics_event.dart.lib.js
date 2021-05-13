define(['dart_sdk', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__semantics__semantics_event_dart(dart_sdk, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var semantics_event = Object.create(dart.library);
  var $_set = dartx._set;
  var $keys = dartx.keys;
  var $toList = dartx.toList;
  var $sort = dartx.sort;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $join = dartx.join;
  dart._checkModuleNullSafetyMode(false);
  var IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/semantics/semantics_event.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/semantics/semantics_event.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constMap(StringL(), dart.dynamic, []);
    }
  }, false);
  var type$ = dart.privateName(semantics_event, "SemanticsEvent.type");
  semantics_event.SemanticsEvent = class SemanticsEvent extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    toMap(opts) {
      let nodeId = opts && 'nodeId' in opts ? opts.nodeId : null;
      let event = new (IdentityMapOfString$dynamic()).from(["type", this.type, "data", this.getDataMap()]);
      if (nodeId != null) event[$_set]("nodeId", nodeId);
      return event;
    }
    toString() {
      let t0;
      let pairs = JSArrayOfString().of([]);
      let dataMap = this.getDataMap();
      let sortedKeys = (t0 = dataMap[$keys][$toList](), (() => {
        t0[$sort]();
        return t0;
      })());
      for (let key of sortedKeys)
        pairs[$add](dart.str(key) + ": " + dart.str(dataMap[$_get](key)));
      return dart.str(object.objectRuntimeType(this, "SemanticsEvent")) + "(" + dart.str(pairs[$join](", ")) + ")";
    }
  };
  (semantics_event.SemanticsEvent.new = function(type) {
    if (type == null) dart.nullFailed(L0, 18, 29, "type");
    this[type$] = type;
    ;
  }).prototype = semantics_event.SemanticsEvent.prototype;
  dart.addTypeTests(semantics_event.SemanticsEvent);
  dart.addTypeCaches(semantics_event.SemanticsEvent);
  dart.setMethodSignature(semantics_event.SemanticsEvent, () => ({
    __proto__: dart.getMethods(semantics_event.SemanticsEvent.__proto__),
    toMap: dart.fnType(core.Map$(core.String, dart.dynamic), [], {nodeId: dart.nullable(core.int)}, {})
  }));
  dart.setLibraryUri(semantics_event.SemanticsEvent, L1);
  dart.setFieldSignature(semantics_event.SemanticsEvent, () => ({
    __proto__: dart.getFields(semantics_event.SemanticsEvent.__proto__),
    type: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(semantics_event.SemanticsEvent, ['toString']);
  var message$ = dart.privateName(semantics_event, "AnnounceSemanticsEvent.message");
  var textDirection$ = dart.privateName(semantics_event, "AnnounceSemanticsEvent.textDirection");
  semantics_event.AnnounceSemanticsEvent = class AnnounceSemanticsEvent extends semantics_event.SemanticsEvent {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    getDataMap() {
      return new (IdentityMapOfString$dynamic()).from(["message", this.message, "textDirection", this.textDirection.index]);
    }
  };
  (semantics_event.AnnounceSemanticsEvent.new = function(message, textDirection) {
    if (message == null) dart.nullFailed(L0, 70, 37, "message");
    if (textDirection == null) dart.nullFailed(L0, 70, 51, "textDirection");
    this[message$] = message;
    this[textDirection$] = textDirection;
    if (!(message != null)) dart.assertFailed(null, L0, 71, 14, "message != null");
    if (!(textDirection != null)) dart.assertFailed(null, L0, 72, 14, "textDirection != null");
    semantics_event.AnnounceSemanticsEvent.__proto__.new.call(this, "announce");
    ;
  }).prototype = semantics_event.AnnounceSemanticsEvent.prototype;
  dart.addTypeTests(semantics_event.AnnounceSemanticsEvent);
  dart.addTypeCaches(semantics_event.AnnounceSemanticsEvent);
  dart.setMethodSignature(semantics_event.AnnounceSemanticsEvent, () => ({
    __proto__: dart.getMethods(semantics_event.AnnounceSemanticsEvent.__proto__),
    getDataMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(semantics_event.AnnounceSemanticsEvent, L1);
  dart.setFieldSignature(semantics_event.AnnounceSemanticsEvent, () => ({
    __proto__: dart.getFields(semantics_event.AnnounceSemanticsEvent.__proto__),
    message: dart.finalFieldType(core.String),
    textDirection: dart.finalFieldType(ui.TextDirection)
  }));
  var message$0 = dart.privateName(semantics_event, "TooltipSemanticsEvent.message");
  semantics_event.TooltipSemanticsEvent = class TooltipSemanticsEvent extends semantics_event.SemanticsEvent {
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    getDataMap() {
      return new (IdentityMapOfString$dynamic()).from(["message", this.message]);
    }
  };
  (semantics_event.TooltipSemanticsEvent.new = function(message) {
    if (message == null) dart.nullFailed(L0, 100, 36, "message");
    this[message$0] = message;
    semantics_event.TooltipSemanticsEvent.__proto__.new.call(this, "tooltip");
    ;
  }).prototype = semantics_event.TooltipSemanticsEvent.prototype;
  dart.addTypeTests(semantics_event.TooltipSemanticsEvent);
  dart.addTypeCaches(semantics_event.TooltipSemanticsEvent);
  dart.setMethodSignature(semantics_event.TooltipSemanticsEvent, () => ({
    __proto__: dart.getMethods(semantics_event.TooltipSemanticsEvent.__proto__),
    getDataMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(semantics_event.TooltipSemanticsEvent, L1);
  dart.setFieldSignature(semantics_event.TooltipSemanticsEvent, () => ({
    __proto__: dart.getFields(semantics_event.TooltipSemanticsEvent.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  var C0;
  semantics_event.LongPressSemanticsEvent = class LongPressSemanticsEvent extends semantics_event.SemanticsEvent {
    getDataMap() {
      return C0 || CT.C0;
    }
  };
  (semantics_event.LongPressSemanticsEvent.new = function() {
    semantics_event.LongPressSemanticsEvent.__proto__.new.call(this, "longPress");
    ;
  }).prototype = semantics_event.LongPressSemanticsEvent.prototype;
  dart.addTypeTests(semantics_event.LongPressSemanticsEvent);
  dart.addTypeCaches(semantics_event.LongPressSemanticsEvent);
  dart.setMethodSignature(semantics_event.LongPressSemanticsEvent, () => ({
    __proto__: dart.getMethods(semantics_event.LongPressSemanticsEvent.__proto__),
    getDataMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(semantics_event.LongPressSemanticsEvent, L1);
  semantics_event.TapSemanticEvent = class TapSemanticEvent extends semantics_event.SemanticsEvent {
    getDataMap() {
      return C0 || CT.C0;
    }
  };
  (semantics_event.TapSemanticEvent.new = function() {
    semantics_event.TapSemanticEvent.__proto__.new.call(this, "tap");
    ;
  }).prototype = semantics_event.TapSemanticEvent.prototype;
  dart.addTypeTests(semantics_event.TapSemanticEvent);
  dart.addTypeCaches(semantics_event.TapSemanticEvent);
  dart.setMethodSignature(semantics_event.TapSemanticEvent, () => ({
    __proto__: dart.getMethods(semantics_event.TapSemanticEvent.__proto__),
    getDataMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(semantics_event.TapSemanticEvent, L1);
  semantics_event.UpdateLiveRegionEvent = class UpdateLiveRegionEvent extends semantics_event.SemanticsEvent {
    getDataMap() {
      return C0 || CT.C0;
    }
  };
  (semantics_event.UpdateLiveRegionEvent.new = function() {
    semantics_event.UpdateLiveRegionEvent.__proto__.new.call(this, "updateLiveRegion");
    ;
  }).prototype = semantics_event.UpdateLiveRegionEvent.prototype;
  dart.addTypeTests(semantics_event.UpdateLiveRegionEvent);
  dart.addTypeCaches(semantics_event.UpdateLiveRegionEvent);
  dart.setMethodSignature(semantics_event.UpdateLiveRegionEvent, () => ({
    __proto__: dart.getMethods(semantics_event.UpdateLiveRegionEvent.__proto__),
    getDataMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(semantics_event.UpdateLiveRegionEvent, L1);
  dart.trackLibraries("packages/flutter/src/semantics/semantics_event.dart", {
    "package:flutter/src/semantics/semantics_event.dart": semantics_event
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["semantics_event.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwBe;;;;;;;UAOqB;AACL,kBAAyB,0CAClD,QAAQ,WACR,QAAQ;AAEV,UAAI,MAAM,IAAI,MACZ,AAAK,AAAmB,KAAnB,QAAC,UAAY,MAAM;AAE1B,YAAO,MAAK;IACd;;;AAOqB,kBAAgB;AACR,oBAAU;AAClB,6BAAa,AAAQ,AAAK,OAAN,oBAAM;AAAU;;;AACvD,eAAkB,MAAO,WAAU;AACC,QAAlC,AAAM,KAAD,OAA4B,SAArB,GAAG,oBAAI,AAAO,OAAA,QAAC,GAAG;AAChC,YAA0E,UAAhE,yBAAkB,MAAM,qBAAkB,eAAG,AAAM,KAAD,QAAM,SAAM;IAC1E;;;QApC0B;;;EAAK;;;;;;;;;;;;;;;;IA4DlB;;;;;;IAKO;;;;;;;AAIlB,YAAwB,2CACtB,WAAW,cACX,iBAAiB,AAAc;IAEnC;;yDArBkC,SAAc;QAAd;QAAc;IAAd;IAAc;UACrC,AAAQ,OAAD,IAAI;UACX,AAAc,aAAD,IAAI;AACxB,oEAAM;;EAAW;;;;;;;;;;;;;;;IA8BR;;;;;;;AAIX,YAAwB,2CACtB,WAAW;IAEf;;;QAViC;;AAAW,mEAAM;;EAAU;;;;;;;;;;;;;;;AAuBvB;IAAyB;;;AAH5B,qEAAM;;EAAY;;;;;;;;;;AAgBf;IAAyB;;;AAHnC,8DAAM;;EAAM;;;;;;;;;;AA6BF;IAAyB;;;AAH9B,mEAAM;;EAAmB","file":"../../../../../../../../../../packages/flutter/src/semantics/semantics_event.dart.lib.js"}');
  // Exports:
  return {
    src__semantics__semantics_event: semantics_event
  };
}));

//# sourceMappingURL=semantics_event.dart.lib.js.map
