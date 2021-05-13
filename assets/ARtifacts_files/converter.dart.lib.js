define(['dart_sdk', 'packages/flutter/src/gestures/events.dart'], (function load__packages__flutter__src__gestures__converter_dart(dart_sdk, packages__flutter__src__gestures__events$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  var converter = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var SyncIterableOfPointerEvent = () => (SyncIterableOfPointerEvent = dart.constFn(_js_helper.SyncIterable$(events.PointerEvent)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/gestures/converter.dart";
  var L1 = "package:flutter/src/gestures/converter.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.add",
        index: 1
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.hover",
        index: 3
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.down",
        index: 4
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.move",
        index: 5
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.up",
        index: 6
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.cancel",
        index: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.remove",
        index: 2
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.PointerSignalKind.prototype,
        [_name]: "PointerSignalKind.scroll",
        index: 1
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.PointerSignalKind.prototype,
        [_name]: "PointerSignalKind.none",
        index: 0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.PointerSignalKind.prototype,
        [_name]: "PointerSignalKind.unknown",
        index: 2
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.mouse",
        index: 1
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.touch",
        index: 0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.stylus",
        index: 2
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.invertedStylus",
        index: 3
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.unknown",
        index: 4
      });
    }
  }, false);
  var _name = dart.privateName(ui, "_name");
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
  converter.PointerEventConverter = class PointerEventConverter extends core.Object {
    static expand(data, devicePixelRatio) {
      if (data == null) dart.nullFailed(L0, 48, 65, "data");
      if (devicePixelRatio == null) dart.nullFailed(L0, 48, 78, "devicePixelRatio");
      return new (SyncIterableOfPointerEvent()).new(function* expand() {
        for (let datum of data) {
          let position = new ui.Offset.new(datum.physicalX, datum.physicalY)['/'](devicePixelRatio);
          if (!(position != null)) dart.assertFailed(null, L0, 51, 14, "position != null");
          let delta = new ui.Offset.new(datum.physicalDeltaX, datum.physicalDeltaY)['/'](devicePixelRatio);
          let radiusMinor = converter.PointerEventConverter._toLogicalPixels(datum.radiusMinor, devicePixelRatio);
          let radiusMajor = converter.PointerEventConverter._toLogicalPixels(datum.radiusMajor, devicePixelRatio);
          let radiusMin = converter.PointerEventConverter._toLogicalPixels(datum.radiusMin, devicePixelRatio);
          let radiusMax = converter.PointerEventConverter._toLogicalPixels(datum.radiusMax, devicePixelRatio);
          let timeStamp = datum.timeStamp;
          let kind = datum.kind;
          if (!(datum.change != null)) dart.assertFailed(null, L0, 59, 14, "datum.change != null");
          if (datum.signalKind == null || dart.equals(datum.signalKind, ui.PointerSignalKind.none)) {
            switch (datum.change) {
              case C0 || CT.C0:
              {
                yield new events.PointerAddedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, embedderId: datum.embedderId});
                break;
              }
              case C1 || CT.C1:
              {
                yield new events.PointerHoverEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, delta: delta, buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: datum.synthesized, embedderId: datum.embedderId});
                break;
              }
              case C2 || CT.C2:
              {
                yield new events.PointerDownEvent.new({timeStamp: timeStamp, pointer: datum.pointerIdentifier, kind: kind, device: datum.device, position: position, buttons: converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, embedderId: datum.embedderId});
                break;
              }
              case C3 || CT.C3:
              {
                yield new events.PointerMoveEvent.new({timeStamp: timeStamp, pointer: datum.pointerIdentifier, kind: kind, device: datum.device, position: position, delta: delta, buttons: converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, platformData: datum.platformData, synthesized: datum.synthesized, embedderId: datum.embedderId});
                break;
              }
              case C4 || CT.C4:
              {
                yield new events.PointerUpEvent.new({timeStamp: timeStamp, pointer: datum.pointerIdentifier, kind: kind, device: datum.device, position: position, buttons: datum.buttons, obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, embedderId: datum.embedderId});
                break;
              }
              case C5 || CT.C5:
              {
                yield new events.PointerCancelEvent.new({timeStamp: timeStamp, pointer: datum.pointerIdentifier, kind: kind, device: datum.device, position: position, buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, embedderId: datum.embedderId});
                break;
              }
              case C6 || CT.C6:
              {
                yield new events.PointerRemovedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, embedderId: datum.embedderId});
                break;
              }
              default:
              {
                dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
              }
            }
          } else {
            switch (dart.nullCheck(datum.signalKind)) {
              case C7 || CT.C7:
              {
                let scrollDelta = new ui.Offset.new(datum.scrollDeltaX, datum.scrollDeltaY)['/'](devicePixelRatio);
                yield new events.PointerScrollEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, scrollDelta: scrollDelta, embedderId: datum.embedderId});
                break;
              }
              case C8 || CT.C8:
              {
                if (!false) dart.assertFailed(null, L0, 231, 20, "false");
                break;
              }
              case C9 || CT.C9:
              {
                break;
              }
              default:
              {
                dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
              }
            }
          }
        }
      });
    }
    static _toLogicalPixels(physicalPixels, devicePixelRatio) {
      if (physicalPixels == null) dart.nullFailed(L0, 241, 41, "physicalPixels");
      if (devicePixelRatio == null) dart.nullFailed(L0, 241, 64, "devicePixelRatio");
      return dart.notNull(physicalPixels) / dart.notNull(devicePixelRatio);
    }
  };
  (converter.PointerEventConverter.__ = function() {
    ;
  }).prototype = converter.PointerEventConverter.prototype;
  dart.addTypeTests(converter.PointerEventConverter);
  dart.addTypeCaches(converter.PointerEventConverter);
  dart.setLibraryUri(converter.PointerEventConverter, L1);
  var C10;
  var C11;
  var C12;
  var C13;
  var C14;
  converter._synthesiseDownButtons = function _synthesiseDownButtons(buttons, kind) {
    if (buttons == null) dart.nullFailed(L0, 15, 32, "buttons");
    if (kind == null) dart.nullFailed(L0, 15, 59, "kind");
    switch (kind) {
      case C10 || CT.C10:
      {
        return buttons;
      }
      case C11 || CT.C11:
      case C12 || CT.C12:
      case C13 || CT.C13:
      {
        return (dart.notNull(buttons) | 1) >>> 0;
      }
      case C14 || CT.C14:
      {
        return buttons === 0 ? 1 : buttons;
      }
      default:
      {
        dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
      }
    }
  };
  dart.trackLibraries("packages/flutter/src/gestures/converter.dart", {
    "package:flutter/src/gestures/converter.dart": converter
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["converter.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/gestures/converter.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__converter: converter
  };
}));

//# sourceMappingURL=converter.dart.lib.js.map
