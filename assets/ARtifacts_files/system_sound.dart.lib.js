define(['dart_sdk', 'packages/flutter/src/services/system_channels.dart'], (function load__packages__flutter__src__services__system_sound_dart(dart_sdk, packages__flutter__src__services__system_channels$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const system_channels = packages__flutter__src__services__system_channels$46dart.src__services__system_channels;
  var system_sound = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var SystemSoundTypeL = () => (SystemSoundTypeL = dart.constFn(dart.legacy(system_sound.SystemSoundType)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/services/system_sound.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/system_sound.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: system_sound.SystemSoundType.prototype,
        [_name$]: "SystemSoundType.click",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: system_sound.SystemSoundType.prototype,
        [_name$]: "SystemSoundType.alert",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], SystemSoundTypeL());
    }
  }, false);
  var _name$ = dart.privateName(system_sound, "_name");
  var C0;
  var C1;
  var C2;
  system_sound.SystemSoundType = class SystemSoundType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (system_sound.SystemSoundType.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 11, 6, "index");
    if (_name == null) dart.nullFailed(L0, 11, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = system_sound.SystemSoundType.prototype;
  dart.addTypeTests(system_sound.SystemSoundType);
  dart.addTypeCaches(system_sound.SystemSoundType);
  dart.setLibraryUri(system_sound.SystemSoundType, L1);
  dart.setFieldSignature(system_sound.SystemSoundType, () => ({
    __proto__: dart.getFields(system_sound.SystemSoundType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(system_sound.SystemSoundType, ['toString']);
  system_sound.SystemSoundType.click = C0 || CT.C0;
  system_sound.SystemSoundType.alert = C1 || CT.C1;
  system_sound.SystemSoundType.values = C2 || CT.C2;
  system_sound.SystemSound = class SystemSound extends core.Object {
    static play(type) {
      if (type == null) dart.nullFailed(L0, 40, 44, "type");
      return async.async(dart.void, function* play() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemSound.play", dart.toString(type));
      });
    }
  };
  (system_sound.SystemSound.__ = function() {
    ;
  }).prototype = system_sound.SystemSound.prototype;
  dart.addTypeTests(system_sound.SystemSound);
  dart.addTypeCaches(system_sound.SystemSound);
  dart.setLibraryUri(system_sound.SystemSound, L1);
  dart.trackLibraries("packages/flutter/src/services/system_sound.dart", {
    "package:flutter/src/services/system_sound.dart": system_sound
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["system_sound.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwBA;;;QAdK;;;;;EAcL;;;;;;;;;;;;;;;UAe2C;AAAjB;AAIrB,QAHD,MAAqB,AAAS,gEAC5B,oBACK,cAAL,IAAI;MAER;;;;;EAZe","file":"../../../../../../../../../../packages/flutter/src/services/system_sound.dart.lib.js"}');
  // Exports:
  return {
    src__services__system_sound: system_sound
  };
}));

//# sourceMappingURL=system_sound.dart.lib.js.map
