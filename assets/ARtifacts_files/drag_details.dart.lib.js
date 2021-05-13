define(['dart_sdk', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/gestures/velocity_tracker.dart'], (function load__packages__flutter__src__gestures__drag_details_dart(dart_sdk, packages__flutter__src__foundation__object$46dart, packages__flutter__src__gestures__velocity_tracker$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const velocity_tracker = packages__flutter__src__gestures__velocity_tracker$46dart.src__gestures__velocity_tracker;
  var drag_details = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/gestures/drag_details.dart";
  var L1 = "package:flutter/src/gestures/drag_details.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: velocity_tracker.Velocity.prototype,
        [Velocity_pixelsPerSecond]: C0 || CT.C0
      });
    }
  }, false);
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C0;
  var globalPosition$ = dart.privateName(drag_details, "DragDownDetails.globalPosition");
  var localPosition$ = dart.privateName(drag_details, "DragDownDetails.localPosition");
  drag_details.DragDownDetails = class DragDownDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "DragDownDetails")) + "(" + dart.str(this.globalPosition) + ")";
    }
  };
  (drag_details.DragDownDetails.new = function(opts) {
    let t0;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C0 || CT.C0;
    if (globalPosition == null) dart.nullFailed(L0, 25, 10, "globalPosition");
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    this[globalPosition$] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, L0, 27, 15, "globalPosition != null");
    this[localPosition$] = (t0 = localPosition, t0 == null ? globalPosition : t0);
    ;
  }).prototype = drag_details.DragDownDetails.prototype;
  dart.addTypeTests(drag_details.DragDownDetails);
  dart.addTypeCaches(drag_details.DragDownDetails);
  dart.setLibraryUri(drag_details.DragDownDetails, L1);
  dart.setFieldSignature(drag_details.DragDownDetails, () => ({
    __proto__: dart.getFields(drag_details.DragDownDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(drag_details.DragDownDetails, ['toString']);
  var sourceTimeStamp$ = dart.privateName(drag_details, "DragStartDetails.sourceTimeStamp");
  var globalPosition$0 = dart.privateName(drag_details, "DragStartDetails.globalPosition");
  var localPosition$0 = dart.privateName(drag_details, "DragStartDetails.localPosition");
  var kind$ = dart.privateName(drag_details, "DragStartDetails.kind");
  drag_details.DragStartDetails = class DragStartDetails extends core.Object {
    get sourceTimeStamp() {
      return this[sourceTimeStamp$];
    }
    set sourceTimeStamp(value) {
      super.sourceTimeStamp = value;
    }
    get globalPosition() {
      return this[globalPosition$0];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$0];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    get kind() {
      return this[kind$];
    }
    set kind(value) {
      super.kind = value;
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "DragStartDetails")) + "(" + dart.str(this.globalPosition) + ")";
    }
  };
  (drag_details.DragStartDetails.new = function(opts) {
    let t0;
    let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C0 || CT.C0;
    if (globalPosition == null) dart.nullFailed(L0, 72, 10, "globalPosition");
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[sourceTimeStamp$] = sourceTimeStamp;
    this[globalPosition$0] = globalPosition;
    this[kind$] = kind;
    if (!(globalPosition != null)) dart.assertFailed(null, L0, 75, 15, "globalPosition != null");
    this[localPosition$0] = (t0 = localPosition, t0 == null ? globalPosition : t0);
    ;
  }).prototype = drag_details.DragStartDetails.prototype;
  dart.addTypeTests(drag_details.DragStartDetails);
  dart.addTypeCaches(drag_details.DragStartDetails);
  dart.setLibraryUri(drag_details.DragStartDetails, L1);
  dart.setFieldSignature(drag_details.DragStartDetails, () => ({
    __proto__: dart.getFields(drag_details.DragStartDetails.__proto__),
    sourceTimeStamp: dart.finalFieldType(dart.nullable(core.Duration)),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset),
    kind: dart.finalFieldType(dart.nullable(ui.PointerDeviceKind))
  }));
  dart.defineExtensionMethods(drag_details.DragStartDetails, ['toString']);
  var sourceTimeStamp$0 = dart.privateName(drag_details, "DragUpdateDetails.sourceTimeStamp");
  var delta$ = dart.privateName(drag_details, "DragUpdateDetails.delta");
  var primaryDelta$ = dart.privateName(drag_details, "DragUpdateDetails.primaryDelta");
  var globalPosition$1 = dart.privateName(drag_details, "DragUpdateDetails.globalPosition");
  var localPosition$1 = dart.privateName(drag_details, "DragUpdateDetails.localPosition");
  drag_details.DragUpdateDetails = class DragUpdateDetails extends core.Object {
    get sourceTimeStamp() {
      return this[sourceTimeStamp$0];
    }
    set sourceTimeStamp(value) {
      super.sourceTimeStamp = value;
    }
    get delta() {
      return this[delta$];
    }
    set delta(value) {
      super.delta = value;
    }
    get primaryDelta() {
      return this[primaryDelta$];
    }
    set primaryDelta(value) {
      super.primaryDelta = value;
    }
    get globalPosition() {
      return this[globalPosition$1];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$1];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "DragUpdateDetails")) + "(" + dart.str(this.delta) + ")";
    }
  };
  (drag_details.DragUpdateDetails.new = function(opts) {
    let t0;
    let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
    let delta = opts && 'delta' in opts ? opts.delta : C0 || CT.C0;
    if (delta == null) dart.nullFailed(L0, 138, 10, "delta");
    let primaryDelta = opts && 'primaryDelta' in opts ? opts.primaryDelta : null;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
    if (globalPosition == null) dart.nullFailed(L0, 140, 19, "globalPosition");
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    this[sourceTimeStamp$0] = sourceTimeStamp;
    this[delta$] = delta;
    this[primaryDelta$] = primaryDelta;
    this[globalPosition$1] = globalPosition;
    if (!(delta != null)) dart.assertFailed(null, L0, 142, 15, "delta != null");
    if (!(primaryDelta == null || primaryDelta == delta.dx && delta.dy === 0.0 || primaryDelta == delta.dy && delta.dx === 0.0)) dart.assertFailed(null, L0, 143, 15, "primaryDelta == null\n           || (primaryDelta == delta.dx && delta.dy == 0.0)\n           || (primaryDelta == delta.dy && delta.dx == 0.0)");
    this[localPosition$1] = (t0 = localPosition, t0 == null ? globalPosition : t0);
    ;
  }).prototype = drag_details.DragUpdateDetails.prototype;
  dart.addTypeTests(drag_details.DragUpdateDetails);
  dart.addTypeCaches(drag_details.DragUpdateDetails);
  dart.setLibraryUri(drag_details.DragUpdateDetails, L1);
  dart.setFieldSignature(drag_details.DragUpdateDetails, () => ({
    __proto__: dart.getFields(drag_details.DragUpdateDetails.__proto__),
    sourceTimeStamp: dart.finalFieldType(dart.nullable(core.Duration)),
    delta: dart.finalFieldType(ui.Offset),
    primaryDelta: dart.finalFieldType(dart.nullable(core.double)),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(drag_details.DragUpdateDetails, ['toString']);
  var Velocity_pixelsPerSecond = dart.privateName(velocity_tracker, "Velocity.pixelsPerSecond");
  var C1;
  var velocity$ = dart.privateName(drag_details, "DragEndDetails.velocity");
  var primaryVelocity$ = dart.privateName(drag_details, "DragEndDetails.primaryVelocity");
  drag_details.DragEndDetails = class DragEndDetails extends core.Object {
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
    get primaryVelocity() {
      return this[primaryVelocity$];
    }
    set primaryVelocity(value) {
      super.primaryVelocity = value;
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "DragEndDetails")) + "(" + dart.str(this.velocity) + ")";
    }
  };
  (drag_details.DragEndDetails.new = function(opts) {
    let velocity = opts && 'velocity' in opts ? opts.velocity : C1 || CT.C1;
    if (velocity == null) dart.nullFailed(L0, 217, 10, "velocity");
    let primaryVelocity = opts && 'primaryVelocity' in opts ? opts.primaryVelocity : null;
    this[velocity$] = velocity;
    this[primaryVelocity$] = primaryVelocity;
    if (!(velocity != null)) dart.assertFailed(null, L0, 219, 15, "velocity != null");
    if (!(primaryVelocity == null || primaryVelocity == velocity.pixelsPerSecond.dx || primaryVelocity == velocity.pixelsPerSecond.dy)) dart.assertFailed(null, L0, 220, 15, "primaryVelocity == null\n           || primaryVelocity == velocity.pixelsPerSecond.dx\n           || primaryVelocity == velocity.pixelsPerSecond.dy");
    ;
  }).prototype = drag_details.DragEndDetails.prototype;
  dart.addTypeTests(drag_details.DragEndDetails);
  dart.addTypeCaches(drag_details.DragEndDetails);
  dart.setLibraryUri(drag_details.DragEndDetails, L1);
  dart.setFieldSignature(drag_details.DragEndDetails, () => ({
    __proto__: dart.getFields(drag_details.DragEndDetails.__proto__),
    velocity: dart.finalFieldType(velocity_tracker.Velocity),
    primaryVelocity: dart.finalFieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(drag_details.DragEndDetails, ['toString']);
  dart.trackLibraries("packages/flutter/src/gestures/drag_details.dart", {
    "package:flutter/src/gestures/drag_details.dart": drag_details
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["drag_details.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqCe;;;;;;IAMA;;;;;;;AAGQ,YAAgE,UAA7D,yBAAkB,MAAM,sBAAmB,eAAE,uBAAc;IAAE;;;;QAtB9E;;QACG;IADH;UAEK,AAAe,cAAD,IAAI;IACX,wBAAgB,KAAd,aAAa,QAAb,OAAiB,cAAc;;;;;;;;;;;;;;;;;IAsDpC;;;;;;IAUH;;;;;;IAMA;;;;;;IAGY;;;;;;;AAOJ,YAAiE,UAA9D,yBAAkB,MAAM,uBAAoB,eAAE,uBAAc;IAAE;;;;QArC/E;QACA;;QACG;QACH;IAHA;IACA;IAEA;UACK,AAAe,cAAD,IAAI;IACX,yBAAgB,KAAd,aAAa,QAAb,OAAiB,cAAc;;;;;;;;;;;;;;;;;;;;IA4EpC;;;;;;IAUH;;;;;;IAaC;;;;;;IAQD;;;;;;IAMA;;;;;;;AAGQ,YAAyD,UAAtD,yBAAkB,MAAM,wBAAqB,eAAE,cAAK;IAAE;;;;QAvDvE;QACA;;QACA;QACS;;QACN;IAJH;IACA;IACA;IACS;UAEJ,AAAM,KAAD,IAAI;UACT,AAAa,AAEhB,YAFe,IAAI,QACf,AAAa,YAAD,IAAI,AAAM,KAAD,OAAO,AAAM,AAAG,KAAJ,QAAO,OACxC,AAAa,YAAD,IAAI,AAAM,KAAD,OAAO,AAAM,AAAG,KAAJ,QAAO;IAClC,yBAAgB,KAAd,aAAa,QAAb,OAAiB,cAAc;;;;;;;;;;;;;;;;;;;;IAiFrC;;;;;;IAYD;;;;;;;AAGO,YAAyD,UAAtD,yBAAkB,MAAM,qBAAkB,eAAE,iBAAQ;IAAE;;;QAzBvE;;QACA;IADA;IACA;UACK,AAAS,QAAD,IAAI;UACZ,AAAgB,AAEnB,eAFkB,IAAI,QACnB,AAAgB,eAAD,IAAI,AAAS,AAAgB,QAAjB,uBAC3B,AAAgB,eAAD,IAAI,AAAS,AAAgB,QAAjB;;EAAoB","file":"../../../../../../../../../../packages/flutter/src/gestures/drag_details.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__drag_details: drag_details
  };
}));

//# sourceMappingURL=drag_details.dart.lib.js.map
