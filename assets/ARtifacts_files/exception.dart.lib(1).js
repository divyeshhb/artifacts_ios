define(['dart_sdk', 'packages/flutter/src/services/system_channels.dart', 'packages/firebase_core_platform_interface/firebase_core_platform_interface.dart'], (function load__packages__cloud_firestore_platform_interface__src__method_channel__utils__exception_dart(dart_sdk, packages__flutter__src__services__system_channels$46dart, packages__firebase_core_platform_interface__firebase_core_platform_interface$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const message_codec = packages__flutter__src__services__system_channels$46dart.src__services__message_codec;
  const firebase_core_platform_interface = packages__firebase_core_platform_interface__firebase_core_platform_interface$46dart.firebase_core_platform_interface;
  var exception$ = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var ExceptionL = () => (ExceptionL = dart.constFn(dart.legacy(core.Exception)))();
  var PlatformExceptionL = () => (PlatformExceptionL = dart.constFn(dart.legacy(message_codec.PlatformException)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var LinkedHashMapOfStringL$StringL = () => (LinkedHashMapOfStringL$StringL = dart.constFn(collection.LinkedHashMap$(StringL(), StringL())))();
  const CT = Object.create(null);
  exception$.convertPlatformException = function convertPlatformException(exception) {
    if (!ExceptionL().is(exception) || !PlatformExceptionL().is(exception)) {
      dart.throw(exception);
    }
    return exception$.platformExceptionToFirebaseException(PlatformExceptionL().as(exception));
  };
  exception$.platformExceptionToFirebaseException = function platformExceptionToFirebaseException(platformException) {
    let t0, t0$;
    let details = platformException.details != null ? LinkedHashMapOfStringL$StringL().from(core.Map.as(platformException.details)) : null;
    let code = "unknown";
    let message = platformException.message;
    if (details != null) {
      code = (t0 = details[$_get]("code"), t0 == null ? code : t0);
      message = (t0$ = details[$_get]("message"), t0$ == null ? message : t0$);
    }
    return new firebase_core_platform_interface.FirebaseException.new({plugin: "cloud_firestore", code: code, message: message});
  };
  dart.trackLibraries("packages/cloud_firestore_platform_interface/src/method_channel/utils/exception.dart", {
    "package:cloud_firestore_platform_interface/src/method_channel/utils/exception.dart": exception$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["exception.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;0EAU0C;AACxC,SAAc,gBAAV,SAAS,MAA4B,wBAAV,SAAS;AACvB,MAAf,WAAM,SAAS;;AAGjB,UAAO,iDAA+C,wBAAV,SAAS;EACvD;kGAQsB;;AACA,kBAAU,AAAkB,AAAQ,iBAAT,YAAY,OACrD,kDAAyB,AAAkB,iBAAD,aAC1C;AAEC,eAAO;AACP,kBAAU,AAAkB,iBAAD;AAElC,QAAI,OAAO,IAAI;AACiB,MAA9B,QAAuB,KAAhB,AAAO,OAAA,QAAC,eAAD,OAAY,IAAI;AACS,MAAvC,WAA6B,MAAnB,AAAO,OAAA,QAAC,mBAAD,OAAe,OAAO;;AAGzC,UAAO,qEACK,yBAAyB,IAAI,WAAW,OAAO;EAC7D","file":"../../../../../../../../../../../../../packages/cloud_firestore_platform_interface/src/method_channel/utils/exception.dart.lib.js"}');
  // Exports:
  return {
    src__method_channel__utils__exception: exception$
  };
}));

//# sourceMappingURL=exception.dart.lib.js.map
