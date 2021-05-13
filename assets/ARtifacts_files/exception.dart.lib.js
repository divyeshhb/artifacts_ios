define(['dart_sdk', 'packages/firebase_core_platform_interface/firebase_core_platform_interface.dart'], (function load__packages__cloud_firestore_web__src__utils__exception_dart(dart_sdk, packages__firebase_core_platform_interface__firebase_core_platform_interface$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const firebase_core_platform_interface = packages__firebase_core_platform_interface__firebase_core_platform_interface$46dart.firebase_core_platform_interface;
  var exception = Object.create(dart.library);
  var $replaceFirst = dartx.replaceFirst;
  dart._checkModuleNullSafetyMode(false);
  var ExceptionL = () => (ExceptionL = dart.constFn(dart.legacy(core.Exception)))();
  const CT = Object.create(null);
  exception.convertPlatformException = function convertPlatformException(exception) {
    if (!dart.legacy(dart.anonymousJSType("FirebaseError")).is(exception)) {
      return ExceptionL().as(exception);
    }
    let firebaseError = dart.legacy(dart.anonymousJSType("FirebaseError")).as(exception);
    let code = firebaseError.code[$replaceFirst]("firestore/", "");
    let message = firebaseError.message[$replaceFirst]("(" + dart.str(firebaseError.code) + ")", "");
    return new firebase_core_platform_interface.FirebaseException.new({plugin: "cloud_firestore", code: code, message: message});
  };
  dart.trackLibraries("packages/cloud_firestore_web/src/utils/exception.dart", {
    "package:cloud_firestore_web/src/utils/exception.dart": exception
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["exception.dart"],"names":[],"mappings":";;;;;;;;;;;yEAY0C;AACxC,SAAc,sDAAV,SAAS;AACX,6BAAO,SAAS;;AAGK,wBAA0B,sDAAV,SAAS;AAEzC,eAAO,AAAc,AAAK,aAAN,qBAAmB,cAAc;AACrD,kBACH,AAAc,AAAQ,aAAT,wBAAsB,AAAyB,eAArB,AAAc,aAAD,SAAM,KAAI;AAClE,UAAO,qEACK,yBAAyB,IAAI,WAAW,OAAO;EAC7D","file":"../../../../../../../../../../../../packages/cloud_firestore_web/src/utils/exception.dart.lib.js"}');
  // Exports:
  return {
    src__utils__exception: exception
  };
}));

//# sourceMappingURL=exception.dart.lib.js.map
