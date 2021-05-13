define(['dart_sdk', 'packages/flutter/src/semantics/semantics_event.dart', 'packages/flutter/src/services/system_channels.dart'], (function load__packages__flutter__src__semantics__semantics_service_dart(dart_sdk, packages__flutter__src__semantics__semantics_event$46dart, packages__flutter__src__services__system_channels$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const semantics_event = packages__flutter__src__semantics__semantics_event$46dart.src__semantics__semantics_event;
  const system_channels = packages__flutter__src__services__system_channels$46dart.src__services__system_channels;
  var semantics_service = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L1 = "package:flutter/src/semantics/semantics_service.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/semantics/semantics_service.dart";
  semantics_service.SemanticsService = class SemanticsService extends core.Object {
    static announce(message, textDirection) {
      if (message == null) dart.nullFailed(L0, 33, 39, "message");
      if (textDirection == null) dart.nullFailed(L0, 33, 62, "textDirection");
      return async.async(dart.void, function* announce() {
        let event = new semantics_event.AnnounceSemanticsEvent.new(message, textDirection);
        yield system_channels.SystemChannels.accessibility.send(event.toMap());
      });
    }
    static tooltip(message) {
      if (message == null) dart.nullFailed(L0, 42, 38, "message");
      return async.async(dart.void, function* tooltip() {
        let event = new semantics_event.TooltipSemanticsEvent.new(message);
        yield system_channels.SystemChannels.accessibility.send(event.toMap());
      });
    }
  };
  (semantics_service.SemanticsService.__ = function() {
    ;
  }).prototype = semantics_service.SemanticsService.prototype;
  dart.addTypeTests(semantics_service.SemanticsService);
  dart.addTypeCaches(semantics_service.SemanticsService);
  dart.setLibraryUri(semantics_service.SemanticsService, L1);
  dart.trackLibraries("packages/flutter/src/semantics/semantics_service.dart", {
    "package:flutter/src/semantics/semantics_service.dart": semantics_service
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["semantics_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;oBAgCsC,SAAuB;UAAvB;UAAuB;AAA/B;AACG,oBAAQ,+CAAuB,OAAO,EAAE,aAAa;AAC5B,QAAtD,MAAqB,AAAc,kDAAK,AAAM,KAAD;MAC/C;;;UAMmC;AAAR;AACG,oBAAQ,8CAAsB,OAAO;AACX,QAAtD,MAAqB,AAAc,kDAAK,AAAM,KAAD;MAC/C;;;;;EArBoB","file":"../../../../../../../../../../packages/flutter/src/semantics/semantics_service.dart.lib.js"}');
  // Exports:
  return {
    src__semantics__semantics_service: semantics_service
  };
}));

//# sourceMappingURL=semantics_service.dart.lib.js.map
