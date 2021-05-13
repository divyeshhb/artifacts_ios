define(['dart_sdk', 'packages/flutter/src/services/system_channels.dart'], (function load__packages__flutter__src__services__system_navigator_dart(dart_sdk, packages__flutter__src__services__system_channels$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const system_channels = packages__flutter__src__services__system_channels$46dart.src__services__system_channels;
  var system_navigator = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/system_navigator.dart";
  var L1 = "package:flutter/src/services/system_navigator.dart";
  system_navigator.SystemNavigator = class SystemNavigator extends core.Object {
    static pop(opts) {
      let animated = opts && 'animated' in opts ? opts.animated : null;
      return async.async(dart.void, function* pop() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemNavigator.pop", animated);
      });
    }
    static routeInformationUpdated(opts) {
      let location = opts && 'location' in opts ? opts.location : null;
      if (location == null) dart.nullFailed(L0, 42, 21, "location");
      let state = opts && 'state' in opts ? opts.state : null;
      system_channels.SystemChannels.navigation.invokeMethod(dart.void, "routeInformationUpdated", new (IdentityMapOfString$dynamic()).from(["location", location, "state", state]));
    }
    static routeUpdated(opts) {
      let routeName = opts && 'routeName' in opts ? opts.routeName : null;
      let previousRouteName = opts && 'previousRouteName' in opts ? opts.previousRouteName : null;
      system_channels.SystemChannels.navigation.invokeMethod(dart.void, "routeUpdated", new (IdentityMapOfString$dynamic()).from(["previousRouteName", previousRouteName, "routeName", routeName]));
    }
  };
  (system_navigator.SystemNavigator.__ = function() {
    ;
  }).prototype = system_navigator.SystemNavigator.prototype;
  dart.addTypeTests(system_navigator.SystemNavigator);
  dart.addTypeCaches(system_navigator.SystemNavigator);
  dart.setLibraryUri(system_navigator.SystemNavigator, L1);
  dart.trackLibraries("packages/flutter/src/services/system_navigator.dart", {
    "package:flutter/src/services/system_navigator.dart": system_navigator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["system_navigator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;UAgCiC;AAAR;AAC4D,QAAjF,MAAqB,AAAS,gEAAmB,uBAAuB,QAAQ;MAClF;;;UAOkB;;UACR;AAQP,MANc,AAAW,kEACxB,2BACiB,0CACf,YAAY,QAAQ,EACpB,SAAS,KAAK;IAGpB;;UAMU;UACA;AAQP,MANc,AAAW,kEACxB,gBACiB,0CACf,qBAAqB,iBAAiB,EACtC,aAAa,SAAS;IAG5B;;;;EAvDmB","file":"../../../../../../../../../../packages/flutter/src/services/system_navigator.dart.lib.js"}');
  // Exports:
  return {
    src__services__system_navigator: system_navigator
  };
}));

//# sourceMappingURL=system_navigator.dart.lib.js.map
