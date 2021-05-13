define(['dart_sdk'], (function load__packages__cloud_firestore_platform_interface__src__snapshot_metadata_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var snapshot_metadata = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "package:cloud_firestore_platform_interface/src/snapshot_metadata.dart";
  var hasPendingWrites$ = dart.privateName(snapshot_metadata, "SnapshotMetadataPlatform.hasPendingWrites");
  var isFromCache$ = dart.privateName(snapshot_metadata, "SnapshotMetadataPlatform.isFromCache");
  snapshot_metadata.SnapshotMetadataPlatform = class SnapshotMetadataPlatform extends core.Object {
    get hasPendingWrites() {
      return this[hasPendingWrites$];
    }
    set hasPendingWrites(value) {
      super.hasPendingWrites = value;
    }
    get isFromCache() {
      return this[isFromCache$];
    }
    set isFromCache(value) {
      super.isFromCache = value;
    }
  };
  (snapshot_metadata.SnapshotMetadataPlatform.new = function(hasPendingWrites, isFromCache) {
    this[hasPendingWrites$] = hasPendingWrites;
    this[isFromCache$] = isFromCache;
    ;
  }).prototype = snapshot_metadata.SnapshotMetadataPlatform.prototype;
  dart.addTypeTests(snapshot_metadata.SnapshotMetadataPlatform);
  dart.addTypeCaches(snapshot_metadata.SnapshotMetadataPlatform);
  dart.setLibraryUri(snapshot_metadata.SnapshotMetadataPlatform, L0);
  dart.setFieldSignature(snapshot_metadata.SnapshotMetadataPlatform, () => ({
    __proto__: dart.getFields(snapshot_metadata.SnapshotMetadataPlatform.__proto__),
    hasPendingWrites: dart.finalFieldType(dart.legacy(core.bool)),
    isFromCache: dart.finalFieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/cloud_firestore_platform_interface/src/snapshot_metadata.dart", {
    "package:cloud_firestore_platform_interface/src/snapshot_metadata.dart": snapshot_metadata
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["snapshot_metadata.dart"],"names":[],"mappings":";;;;;;;;;;;;IAgBa;;;;;;IASA;;;;;;;6DAlBmB,kBAAuB;IAAvB;IAAuB;;EAAY","file":"../../../../../../../../../../../packages/cloud_firestore_platform_interface/src/snapshot_metadata.dart.lib.js"}');
  // Exports:
  return {
    src__snapshot_metadata: snapshot_metadata
  };
}));

//# sourceMappingURL=snapshot_metadata.dart.lib.js.map
