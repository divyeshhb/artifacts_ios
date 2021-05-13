define(['dart_sdk'], (function load__packages__cloud_firestore_platform_interface__src__method_channel__utils__auto_id_generator_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var auto_id_generator = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "package:cloud_firestore_platform_interface/src/method_channel/utils/auto_id_generator.dart";
  auto_id_generator.AutoIdGenerator = class AutoIdGenerator extends core.Object {
    static autoId() {
      let stringBuffer = new core.StringBuffer.new();
      let maxRandom = auto_id_generator.AutoIdGenerator._AUTO_ID_ALPHABET.length;
      for (let i = 0; i < 20; i = i + 1) {
        stringBuffer.write(auto_id_generator.AutoIdGenerator._AUTO_ID_ALPHABET[$_get](auto_id_generator.AutoIdGenerator._random.nextInt(maxRandom)));
      }
      return stringBuffer.toString();
    }
  };
  (auto_id_generator.AutoIdGenerator.new = function() {
    ;
  }).prototype = auto_id_generator.AutoIdGenerator.prototype;
  dart.addTypeTests(auto_id_generator.AutoIdGenerator);
  dart.addTypeCaches(auto_id_generator.AutoIdGenerator);
  dart.setLibraryUri(auto_id_generator.AutoIdGenerator, L0);
  dart.defineLazy(auto_id_generator.AutoIdGenerator, {
    /*auto_id_generator.AutoIdGenerator._AUTO_ID_LENGTH*/get _AUTO_ID_LENGTH() {
      return 20;
    },
    /*auto_id_generator.AutoIdGenerator._AUTO_ID_ALPHABET*/get _AUTO_ID_ALPHABET() {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    },
    /*auto_id_generator.AutoIdGenerator._random*/get _random() {
      return math.Random.new();
    }
  }, true);
  dart.trackLibraries("packages/cloud_firestore_platform_interface/src/method_channel/utils/auto_id_generator.dart", {
    "package:cloud_firestore_platform_interface/src/method_channel/utils/auto_id_generator.dart": auto_id_generator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auto_id_generator.dart"],"names":[],"mappings":";;;;;;;;;;;;;AAwBuB,yBAAe;AACxB,sBAAY,AAAkB;AAExC,eAAS,IAAI,GAAG,AAAE,CAAD,OAAsB,IAAF,AAAE,CAAC,GAAH;AAC8B,QAAjE,AAAa,YAAD,OAAO,AAAiB,2DAAC,AAAQ,kDAAQ,SAAS;;AAGhE,YAAO,AAAa,aAAD;IACrB;;;;EACF;;;;;MAlBmB,iDAAe;;;MAEZ,mDAAiB;;;MAGjB,yCAAO;YAAG","file":"../../../../../../../../../../../../../packages/cloud_firestore_platform_interface/src/method_channel/utils/auto_id_generator.dart.lib.js"}');
  // Exports:
  return {
    src__method_channel__utils__auto_id_generator: auto_id_generator
  };
}));

//# sourceMappingURL=auto_id_generator.dart.lib.js.map
