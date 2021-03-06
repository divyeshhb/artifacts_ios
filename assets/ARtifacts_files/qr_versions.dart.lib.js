define(['dart_sdk'], (function load__packages__qr_flutter__src__qr_versions_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var qr_versions = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "package:qr_flutter/src/qr_versions.dart";
  qr_versions.QrVersions = class QrVersions extends core.Object {
    static isSupportedVersion(version) {
      return version === -1 || dart.notNull(version) >= 1 && dart.notNull(version) <= 40;
    }
  };
  (qr_versions.QrVersions.new = function() {
    ;
  }).prototype = qr_versions.QrVersions.prototype;
  dart.addTypeTests(qr_versions.QrVersions);
  dart.addTypeCaches(qr_versions.QrVersions);
  dart.setLibraryUri(qr_versions.QrVersions, L0);
  dart.defineLazy(qr_versions.QrVersions, {
    /*qr_versions.QrVersions.auto*/get auto() {
      return -1;
    },
    /*qr_versions.QrVersions.min*/get min() {
      return 1;
    },
    /*qr_versions.QrVersions.max*/get max() {
      return 40;
    }
  }, true);
  dart.trackLibraries("packages/qr_flutter/src/qr_versions.dart", {
    "package:qr_flutter/src/qr_versions.dart": qr_versions
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["qr_versions.dart"],"names":[],"mappings":";;;;;;;;;;8BAoBqC;AAC/B,YAAA,AAAQ,AAAQ,QAAT,WAAqB,aAAR,OAAO,UAAmB,aAAR,OAAO;IAAQ;;;;EAC3D;;;;;MAXmB,2BAAI;;;MAGJ,0BAAG;;;MAGH,0BAAG","file":"../../../../../../../../../../../packages/qr_flutter/src/qr_versions.dart.lib.js"}');
  // Exports:
  return {
    src__qr_versions: qr_versions
  };
}));

//# sourceMappingURL=qr_versions.dart.lib.js.map
