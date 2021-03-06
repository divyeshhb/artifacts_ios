define(['dart_sdk', 'packages/plugin_platform_interface/plugin_platform_interface.dart', 'packages/cloud_firestore_platform_interface/src/set_options.dart', 'packages/cloud_firestore_platform_interface/src/snapshot_metadata.dart', 'packages/cloud_firestore_platform_interface/src/get_options.dart', 'packages/cloud_firestore_platform_interface/src/internal/pointer.dart', 'packages/cloud_firestore_platform_interface/src/field_path.dart', 'packages/collection/src/equality.dart', 'packages/cloud_firestore_platform_interface/src/timestamp.dart', 'packages/cloud_firestore_platform_interface/src/geo_point.dart', 'packages/cloud_firestore_platform_interface/src/blob.dart', 'packages/cloud_firestore_platform_interface/src/platform_interface/platform_interface_field_value.dart', 'packages/cloud_firestore_platform_interface/src/internal/field_path_type.dart', 'packages/cloud_firestore_platform_interface/src/settings.dart', 'packages/firebase_core/firebase_core.dart', 'packages/flutter/src/services/system_channels.dart', 'packages/flutter/src/foundation/serialization.dart', 'packages/cloud_firestore_platform_interface/src/method_channel/utils/exception.dart', 'packages/cloud_firestore_platform_interface/src/method_channel/utils/source.dart', 'packages/cloud_firestore_platform_interface/src/source.dart', 'packages/cloud_firestore_platform_interface/src/method_channel/utils/auto_id_generator.dart', 'packages/firebase_core_platform_interface/firebase_core_platform_interface.dart'], (function load__packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch_dart(dart_sdk, packages__plugin_platform_interface__plugin_platform_interface$46dart, packages__cloud_firestore_platform_interface__src__set_options$46dart, packages__cloud_firestore_platform_interface__src__snapshot_metadata$46dart, packages__cloud_firestore_platform_interface__src__get_options$46dart, packages__cloud_firestore_platform_interface__src__internal__pointer$46dart, packages__cloud_firestore_platform_interface__src__field_path$46dart, packages__collection__src__equality$46dart, packages__cloud_firestore_platform_interface__src__timestamp$46dart, packages__cloud_firestore_platform_interface__src__geo_point$46dart, packages__cloud_firestore_platform_interface__src__blob$46dart, packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_field_value$46dart, packages__cloud_firestore_platform_interface__src__internal__field_path_type$46dart, packages__cloud_firestore_platform_interface__src__settings$46dart, packages__firebase_core__firebase_core$46dart, packages__flutter__src__services__system_channels$46dart, packages__flutter__src__foundation__serialization$46dart, packages__cloud_firestore_platform_interface__src__method_channel__utils__exception$46dart, packages__cloud_firestore_platform_interface__src__method_channel__utils__source$46dart, packages__cloud_firestore_platform_interface__src__source$46dart, packages__cloud_firestore_platform_interface__src__method_channel__utils__auto_id_generator$46dart, packages__firebase_core_platform_interface__firebase_core_platform_interface$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const ui = dart_sdk.ui;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const plugin_platform_interface = packages__plugin_platform_interface__plugin_platform_interface$46dart.plugin_platform_interface;
  const set_options = packages__cloud_firestore_platform_interface__src__set_options$46dart.src__set_options;
  const snapshot_metadata = packages__cloud_firestore_platform_interface__src__snapshot_metadata$46dart.src__snapshot_metadata;
  const get_options = packages__cloud_firestore_platform_interface__src__get_options$46dart.src__get_options;
  const pointer = packages__cloud_firestore_platform_interface__src__internal__pointer$46dart.src__internal__pointer;
  const field_path = packages__cloud_firestore_platform_interface__src__field_path$46dart.src__field_path;
  const equality = packages__collection__src__equality$46dart.src__equality;
  const timestamp = packages__cloud_firestore_platform_interface__src__timestamp$46dart.src__timestamp;
  const geo_point = packages__cloud_firestore_platform_interface__src__geo_point$46dart.src__geo_point;
  const blob = packages__cloud_firestore_platform_interface__src__blob$46dart.src__blob;
  const platform_interface_field_value = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_field_value$46dart.src__platform_interface__platform_interface_field_value;
  const field_path_type = packages__cloud_firestore_platform_interface__src__internal__field_path_type$46dart.src__internal__field_path_type;
  const settings = packages__cloud_firestore_platform_interface__src__settings$46dart.src__settings;
  const firebase_core = packages__firebase_core__firebase_core$46dart.firebase_core;
  const message_codecs = packages__flutter__src__services__system_channels$46dart.src__services__message_codecs;
  const message_codec = packages__flutter__src__services__system_channels$46dart.src__services__message_codec;
  const platform_channel = packages__flutter__src__services__system_channels$46dart.src__services__platform_channel;
  const serialization = packages__flutter__src__foundation__serialization$46dart.src__foundation__serialization;
  const exception$ = packages__cloud_firestore_platform_interface__src__method_channel__utils__exception$46dart.src__method_channel__utils__exception;
  const source = packages__cloud_firestore_platform_interface__src__method_channel__utils__source$46dart.src__method_channel__utils__source;
  const source$ = packages__cloud_firestore_platform_interface__src__source$46dart.src__source;
  const auto_id_generator = packages__cloud_firestore_platform_interface__src__method_channel__utils__auto_id_generator$46dart.src__method_channel__utils__auto_id_generator;
  const firebase_core_platform_interface = packages__firebase_core_platform_interface__firebase_core_platform_interface$46dart.firebase_core_platform_interface;
  var platform_interface_write_batch = Object.create(dart.library);
  var platform_interface_transaction = Object.create(dart.library);
  var platform_interface_query_snapshot = Object.create(dart.library);
  var platform_interface_query = Object.create(dart.library);
  var method_channel_field_value_factory = Object.create(dart.library);
  var platform_interface_field_value_factory = Object.create(dart.library);
  var platform_interface_document_snapshot = Object.create(dart.library);
  var platform_interface_document_reference = Object.create(dart.library);
  var platform_interface_document_change = Object.create(dart.library);
  var platform_interface_collection_reference = Object.create(dart.library);
  var method_channel_field_value = Object.create(dart.library);
  var firestore_message_codec = Object.create(dart.library);
  var method_channel_write_batch = Object.create(dart.library);
  var method_channel_transaction = Object.create(dart.library);
  var method_channel_document_change = Object.create(dart.library);
  var method_channel_query_snapshot = Object.create(dart.library);
  var method_channel_query = Object.create(dart.library);
  var method_channel_document_reference = Object.create(dart.library);
  var method_channel_collection_reference = Object.create(dart.library);
  var method_channel_firestore = Object.create(dart.library);
  var platform_interface_firestore = Object.create(dart.library);
  var cloud_firestore_platform_interface = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $containsKey = dartx.containsKey;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  var $toString = dartx.toString;
  var $isEmpty = dartx.isEmpty;
  var $add = dartx.add;
  var $firstWhere = dartx.firstWhere;
  var $addAll = dartx.addAll;
  var $_set = dartx._set;
  var $remove = dartx.remove;
  dart._checkModuleNullSafetyMode(false);
  var CollectionReferencePlatformL = () => (CollectionReferencePlatformL = dart.constFn(dart.legacy(platform_interface_collection_reference.CollectionReferencePlatform)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(StringL(), dart.dynamic)))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var ListOfListL = () => (ListOfListL = dart.constFn(core.List$(ListL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var LinkedHashMapOfStringL$dynamic = () => (LinkedHashMapOfStringL$dynamic = dart.constFn(collection.LinkedHashMap$(StringL(), dart.dynamic)))();
  var FieldPathL = () => (FieldPathL = dart.constFn(dart.legacy(field_path.FieldPath)))();
  var DocumentSnapshotPlatformL = () => (DocumentSnapshotPlatformL = dart.constFn(dart.legacy(platform_interface_document_snapshot.DocumentSnapshotPlatform)))();
  var MapLOfStringL$dynamic = () => (MapLOfStringL$dynamic = dart.constFn(dart.legacy(MapOfStringL$dynamic())))();
  var StringLAndMapLOfStringL$dynamicTodynamic = () => (StringLAndMapLOfStringL$dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [StringL(), MapLOfStringL$dynamic()])))();
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var intLAndMapLOfStringL$dynamicTodynamic = () => (intLAndMapLOfStringL$dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [intL(), MapLOfStringL$dynamic()])))();
  var DocumentReferencePlatformL = () => (DocumentReferencePlatformL = dart.constFn(dart.legacy(platform_interface_document_reference.DocumentReferencePlatform)))();
  var DocumentChangeTypeL = () => (DocumentChangeTypeL = dart.constFn(dart.legacy(platform_interface_document_change.DocumentChangeType)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var FieldValueTypeL = () => (FieldValueTypeL = dart.constFn(dart.legacy(method_channel_field_value.FieldValueType)))();
  var MethodChannelFieldValueL = () => (MethodChannelFieldValueL = dart.constFn(dart.legacy(method_channel_field_value.MethodChannelFieldValue)))();
  var DefaultEqualityOfNull = () => (DefaultEqualityOfNull = dart.constFn(equality.DefaultEquality$(core.Null)))();
  var DateTimeL = () => (DateTimeL = dart.constFn(dart.legacy(core.DateTime)))();
  var TimestampL = () => (TimestampL = dart.constFn(dart.legacy(timestamp.Timestamp)))();
  var GeoPointL = () => (GeoPointL = dart.constFn(dart.legacy(geo_point.GeoPoint)))();
  var BlobL = () => (BlobL = dart.constFn(dart.legacy(blob.Blob)))();
  var FieldValuePlatformL = () => (FieldValuePlatformL = dart.constFn(dart.legacy(platform_interface_field_value.FieldValuePlatform)))();
  var FieldPathTypeL = () => (FieldPathTypeL = dart.constFn(dart.legacy(field_path_type.FieldPathType)))();
  var MethodChannelFirebaseFirestoreL = () => (MethodChannelFirebaseFirestoreL = dart.constFn(dart.legacy(method_channel_firestore.MethodChannelFirebaseFirestore)))();
  var MethodChannelQueryL = () => (MethodChannelQueryL = dart.constFn(dart.legacy(method_channel_query.MethodChannelQuery)))();
  var SettingsL = () => (SettingsL = dart.constFn(dart.legacy(settings.Settings)))();
  var Uint8ListL = () => (Uint8ListL = dart.constFn(dart.legacy(typed_data.Uint8List)))();
  var JSArrayOfMapLOfStringL$dynamic = () => (JSArrayOfMapLOfStringL$dynamic = dart.constFn(_interceptors.JSArray$(MapLOfStringL$dynamic())))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(StringL(), ObjectL())))();
  var DocumentChangeTypeLToboolL = () => (DocumentChangeTypeLToboolL = dart.constFn(dart.fnType(boolL(), [DocumentChangeTypeL()])))();
  var ListOfDocumentSnapshotPlatformL = () => (ListOfDocumentSnapshotPlatformL = dart.constFn(core.List$(DocumentSnapshotPlatformL())))();
  var intLToDocumentSnapshotPlatformL = () => (intLToDocumentSnapshotPlatformL = dart.constFn(dart.fnType(DocumentSnapshotPlatformL(), [intL()])))();
  var DocumentChangePlatformL = () => (DocumentChangePlatformL = dart.constFn(dart.legacy(platform_interface_document_change.DocumentChangePlatform)))();
  var ListOfDocumentChangePlatformL = () => (ListOfDocumentChangePlatformL = dart.constFn(core.List$(DocumentChangePlatformL())))();
  var MethodChannelDocumentChangeL = () => (MethodChannelDocumentChangeL = dart.constFn(dart.legacy(method_channel_document_change.MethodChannelDocumentChange)))();
  var intLToMethodChannelDocumentChangeL = () => (intLToMethodChannelDocumentChangeL = dart.constFn(dart.fnType(MethodChannelDocumentChangeL(), [intL()])))();
  var QuerySnapshotPlatformL = () => (QuerySnapshotPlatformL = dart.constFn(dart.legacy(platform_interface_query_snapshot.QuerySnapshotPlatform)))();
  var CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  var StreamControllerOfQuerySnapshotPlatformL = () => (StreamControllerOfQuerySnapshotPlatformL = dart.constFn(async.StreamController$(QuerySnapshotPlatformL())))();
  var FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  var FutureLOfNull = () => (FutureLOfNull = dart.constFn(dart.legacy(FutureOfNull())))();
  var VoidToFutureLOfNull = () => (VoidToFutureLOfNull = dart.constFn(dart.fnType(FutureLOfNull(), [])))();
  var StreamControllerOfDocumentSnapshotPlatformL = () => (StreamControllerOfDocumentSnapshotPlatformL = dart.constFn(async.StreamController$(DocumentSnapshotPlatformL())))();
  var PointerL = () => (PointerL = dart.constFn(dart.legacy(pointer.Pointer)))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var FutureLOfvoid = () => (FutureLOfvoid = dart.constFn(dart.legacy(FutureOfvoid())))();
  var MethodCallL = () => (MethodCallL = dart.constFn(dart.legacy(message_codec.MethodCall)))();
  var MethodCallLToFutureLOfvoid = () => (MethodCallLToFutureLOfvoid = dart.constFn(dart.fnType(FutureLOfvoid(), [MethodCallL()])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var ObjectLToNull = () => (ObjectLToNull = dart.constFn(dart.fnType(core.Null, [ObjectL()])))();
  var PlatformExceptionL = () => (PlatformExceptionL = dart.constFn(dart.legacy(message_codec.PlatformException)))();
  var FirebaseFirestorePlatformL = () => (FirebaseFirestorePlatformL = dart.constFn(dart.legacy(platform_interface_firestore.FirebaseFirestorePlatform)))();
  var StreamControllerLOfQuerySnapshotPlatformL = () => (StreamControllerLOfQuerySnapshotPlatformL = dart.constFn(dart.legacy(StreamControllerOfQuerySnapshotPlatformL())))();
  var IdentityMapOfintL$StreamControllerLOfQuerySnapshotPlatformL = () => (IdentityMapOfintL$StreamControllerLOfQuerySnapshotPlatformL = dart.constFn(_js_helper.IdentityMap$(intL(), StreamControllerLOfQuerySnapshotPlatformL())))();
  var StreamControllerLOfDocumentSnapshotPlatformL = () => (StreamControllerLOfDocumentSnapshotPlatformL = dart.constFn(dart.legacy(StreamControllerOfDocumentSnapshotPlatformL())))();
  var IdentityMapOfintL$StreamControllerLOfDocumentSnapshotPlatformL = () => (IdentityMapOfintL$StreamControllerLOfDocumentSnapshotPlatformL = dart.constFn(_js_helper.IdentityMap$(intL(), StreamControllerLOfDocumentSnapshotPlatformL())))();
  var StreamControllerOfvoid = () => (StreamControllerOfvoid = dart.constFn(async.StreamController$(dart.void)))();
  var StreamControllerLOfvoid = () => (StreamControllerLOfvoid = dart.constFn(dart.legacy(StreamControllerOfvoid())))();
  var IdentityMapOfintL$StreamControllerLOfvoid = () => (IdentityMapOfintL$StreamControllerLOfvoid = dart.constFn(_js_helper.IdentityMap$(intL(), StreamControllerLOfvoid())))();
  var FutureL = () => (FutureL = dart.constFn(dart.legacy(async.Future)))();
  var TransactionPlatformL = () => (TransactionPlatformL = dart.constFn(dart.legacy(platform_interface_transaction.TransactionPlatform)))();
  var TransactionPlatformLToFutureL = () => (TransactionPlatformLToFutureL = dart.constFn(dart.fnType(FutureL(), [TransactionPlatformL()])))();
  var TransactionPlatformLToLFutureL = () => (TransactionPlatformLToLFutureL = dart.constFn(dart.legacy(TransactionPlatformLToFutureL())))();
  var IdentityMapOfintL$TransactionPlatformLToLFutureL = () => (IdentityMapOfintL$TransactionPlatformLToLFutureL = dart.constFn(_js_helper.IdentityMap$(intL(), TransactionPlatformLToLFutureL())))();
  var StreamControllerL = () => (StreamControllerL = dart.constFn(dart.legacy(async.StreamController)))();
  var IdentityMapOfintL$StreamControllerL = () => (IdentityMapOfintL$StreamControllerL = dart.constFn(_js_helper.IdentityMap$(intL(), StreamControllerL())))();
  const CT = Object.create(null);
  var L20 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/cloud_firestore_platform_interface-2.1.3/lib/src/method_channel/method_channel_query.dart";
  var L13 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/cloud_firestore_platform_interface-2.1.3/lib/src/method_channel/utils/firestore_message_codec.dart";
  var L21 = "package:cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart";
  var L11 = "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_collection_reference.dart";
  var L3 = "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_query.dart";
  var L10 = "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_document_change.dart";
  var L8 = "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_document_snapshot.dart";
  var L5 = "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_field_value_factory.dart";
  var L24 = "package:cloud_firestore_platform_interface/src/method_channel/method_channel_collection_reference.dart";
  var L25 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/cloud_firestore_platform_interface-2.1.3/lib/src/method_channel/method_channel_firestore.dart";
  var L1 = "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_transaction.dart";
  var L12 = "package:cloud_firestore_platform_interface/src/method_channel/method_channel_field_value.dart";
  var L27 = "package:cloud_firestore_platform_interface/src/method_channel/method_channel_firestore.dart";
  var L2 = "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_query_snapshot.dart";
  var L26 = "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_firestore.dart";
  var L19 = "package:cloud_firestore_platform_interface/src/method_channel/method_channel_query_snapshot.dart";
  var L16 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/cloud_firestore_platform_interface-2.1.3/lib/src/method_channel/method_channel_transaction.dart";
  var L9 = "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_document_reference.dart";
  var L4 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/cloud_firestore_platform_interface-2.1.3/lib/src/method_channel/method_channel_field_value_factory.dart";
  var L14 = "package:cloud_firestore_platform_interface/src/method_channel/utils/firestore_message_codec.dart";
  var L0 = "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_write_batch.dart";
  var L7 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/cloud_firestore_platform_interface-2.1.3/lib/src/platform_interface/platform_interface_document_snapshot.dart";
  var L22 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/cloud_firestore_platform_interface-2.1.3/lib/src/method_channel/method_channel_document_reference.dart";
  var L15 = "package:cloud_firestore_platform_interface/src/method_channel/method_channel_write_batch.dart";
  var L17 = "package:cloud_firestore_platform_interface/src/method_channel/method_channel_transaction.dart";
  var L23 = "package:cloud_firestore_platform_interface/src/method_channel/method_channel_document_reference.dart";
  var L18 = "package:cloud_firestore_platform_interface/src/method_channel/method_channel_document_change.dart";
  var L6 = "package:cloud_firestore_platform_interface/src/method_channel/method_channel_field_value_factory.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: platform_interface_document_change.DocumentChangeType.prototype,
        [_name$]: "DocumentChangeType.added",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: platform_interface_document_change.DocumentChangeType.prototype,
        [_name$]: "DocumentChangeType.modified",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: platform_interface_document_change.DocumentChangeType.prototype,
        [_name$]: "DocumentChangeType.removed",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], DocumentChangeTypeL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: method_channel_field_value.FieldValueType.prototype,
        [_name$0]: "FieldValueType.arrayUnion",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: method_channel_field_value.FieldValueType.prototype,
        [_name$0]: "FieldValueType.arrayRemove",
        index: 1
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: method_channel_field_value.FieldValueType.prototype,
        [_name$0]: "FieldValueType.delete",
        index: 2
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: method_channel_field_value.FieldValueType.prototype,
        [_name$0]: "FieldValueType.serverTimestamp",
        index: 3
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: method_channel_field_value.FieldValueType.prototype,
        [_name$0]: "FieldValueType.incrementDouble",
        index: 4
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: method_channel_field_value.FieldValueType.prototype,
        [_name$0]: "FieldValueType.incrementInteger",
        index: 5
      });
    },
    get C10() {
      return C10 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], FieldValueTypeL());
    },
    get C12() {
      return C12 = dart.const({
        __proto__: DefaultEqualityOfNull().prototype
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: equality.DeepCollectionEquality.prototype,
        [DeepCollectionEquality__unordered]: false,
        [DeepCollectionEquality__base]: C12 || CT.C12
      });
    },
    get C13() {
      return C13 = dart.constMap(FieldValueTypeL(), intL(), [C4 || CT.C4, 132, C5 || CT.C5, 133, C6 || CT.C6, 134, C7 || CT.C7, 135, C8 || CT.C8, 137, C9 || CT.C9, 138]);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: field_path_type.FieldPathType.prototype,
        [_name]: "FieldPathType.documentId",
        index: 0
      });
    },
    get C14() {
      return C14 = dart.constMap(FieldPathTypeL(), intL(), [C15 || CT.C15, 139]);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: source$.Source.prototype,
        [_name$1]: "Source.serverAndCache",
        index: 0
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: get_options.GetOptions.prototype,
        [GetOptions_source]: C17 || CT.C17
      });
    },
    get C18() {
      return C18 = dart.const(new _js_helper.PrivateSymbol.new('_pointer', _pointer$3));
    },
    get C19() {
      return C19 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 30000000
      });
    }
  }, false);
  platform_interface_write_batch.WriteBatchPlatform = class WriteBatchPlatform extends plugin_platform_interface.PlatformInterface {
    static verifyExtends(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, platform_interface_write_batch.WriteBatchPlatform._token);
    }
    commit() {
      return async.async(dart.void, function* commit() {
        dart.throw(new core.UnimplementedError.new("commit() is not implemented"));
      });
    }
    delete(documentPath) {
      dart.throw(new core.UnimplementedError.new("delete() is not implemented"));
    }
    set(documentPath, data, options = null) {
      dart.throw(new core.UnimplementedError.new("set() is not implemented"));
    }
    update(documentPath, data) {
      dart.throw(new core.UnimplementedError.new("update() is not implemented"));
    }
  };
  (platform_interface_write_batch.WriteBatchPlatform.new = function() {
    platform_interface_write_batch.WriteBatchPlatform.__proto__.new.call(this, {token: platform_interface_write_batch.WriteBatchPlatform._token});
    ;
  }).prototype = platform_interface_write_batch.WriteBatchPlatform.prototype;
  dart.addTypeTests(platform_interface_write_batch.WriteBatchPlatform);
  dart.addTypeCaches(platform_interface_write_batch.WriteBatchPlatform);
  dart.setMethodSignature(platform_interface_write_batch.WriteBatchPlatform, () => ({
    __proto__: dart.getMethods(platform_interface_write_batch.WriteBatchPlatform.__proto__),
    commit: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    delete: dart.fnType(dart.void, [dart.legacy(core.String)]),
    set: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))], [dart.legacy(set_options.SetOptions)]),
    update: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))])
  }));
  dart.setLibraryUri(platform_interface_write_batch.WriteBatchPlatform, L0);
  dart.defineLazy(platform_interface_write_batch.WriteBatchPlatform, {
    /*platform_interface_write_batch.WriteBatchPlatform._token*/get _token() {
      return new core.Object.new();
    }
  }, true);
  platform_interface_transaction.TransactionPlatform = class TransactionPlatform extends plugin_platform_interface.PlatformInterface {
    static verifyExtends(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, platform_interface_transaction.TransactionPlatform._token);
    }
    get commands() {
      dart.throw(new core.UnimplementedError.new("commands is not implemented"));
    }
    get(documentPath) {
      dart.throw(new core.UnimplementedError.new("get() is not implemented"));
    }
    delete(documentPath) {
      dart.throw(new core.UnimplementedError.new("delete() is not implemented"));
    }
    update(documentPath, data) {
      dart.throw(new core.UnimplementedError.new("update() is not implemented"));
    }
    set(documentPath, data, options = null) {
      dart.throw(new core.UnimplementedError.new("set() is not implemented"));
    }
  };
  (platform_interface_transaction.TransactionPlatform.new = function() {
    platform_interface_transaction.TransactionPlatform.__proto__.new.call(this, {token: platform_interface_transaction.TransactionPlatform._token});
    ;
  }).prototype = platform_interface_transaction.TransactionPlatform.prototype;
  dart.addTypeTests(platform_interface_transaction.TransactionPlatform);
  dart.addTypeCaches(platform_interface_transaction.TransactionPlatform);
  dart.setMethodSignature(platform_interface_transaction.TransactionPlatform, () => ({
    __proto__: dart.getMethods(platform_interface_transaction.TransactionPlatform.__proto__),
    get: dart.fnType(dart.legacy(async.Future$(dart.legacy(platform_interface_document_snapshot.DocumentSnapshotPlatform))), [dart.legacy(core.String)]),
    delete: dart.fnType(dart.legacy(platform_interface_transaction.TransactionPlatform), [dart.legacy(core.String)]),
    update: dart.fnType(dart.legacy(platform_interface_transaction.TransactionPlatform), [dart.legacy(core.String), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))]),
    set: dart.fnType(dart.legacy(platform_interface_transaction.TransactionPlatform), [dart.legacy(core.String), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))], [dart.legacy(set_options.SetOptions)])
  }));
  dart.setGetterSignature(platform_interface_transaction.TransactionPlatform, () => ({
    __proto__: dart.getGetters(platform_interface_transaction.TransactionPlatform.__proto__),
    commands: dart.legacy(core.List$(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))))
  }));
  dart.setLibraryUri(platform_interface_transaction.TransactionPlatform, L1);
  dart.defineLazy(platform_interface_transaction.TransactionPlatform, {
    /*platform_interface_transaction.TransactionPlatform._token*/get _token() {
      return new core.Object.new();
    }
  }, true);
  var docs$ = dart.privateName(platform_interface_query_snapshot, "QuerySnapshotPlatform.docs");
  var docChanges$ = dart.privateName(platform_interface_query_snapshot, "QuerySnapshotPlatform.docChanges");
  var metadata$ = dart.privateName(platform_interface_query_snapshot, "QuerySnapshotPlatform.metadata");
  platform_interface_query_snapshot.QuerySnapshotPlatform = class QuerySnapshotPlatform extends plugin_platform_interface.PlatformInterface {
    get docs() {
      return this[docs$];
    }
    set docs(value) {
      super.docs = value;
    }
    get docChanges() {
      return this[docChanges$];
    }
    set docChanges(value) {
      super.docChanges = value;
    }
    get metadata() {
      return this[metadata$];
    }
    set metadata(value) {
      super.metadata = value;
    }
    static verifyExtends(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, platform_interface_query_snapshot.QuerySnapshotPlatform._token);
    }
    get size() {
      return this.docs[$length];
    }
  };
  (platform_interface_query_snapshot.QuerySnapshotPlatform.new = function(docs, docChanges, metadata) {
    this[docs$] = docs;
    this[docChanges$] = docChanges;
    this[metadata$] = metadata;
    platform_interface_query_snapshot.QuerySnapshotPlatform.__proto__.new.call(this, {token: platform_interface_query_snapshot.QuerySnapshotPlatform._token});
    ;
  }).prototype = platform_interface_query_snapshot.QuerySnapshotPlatform.prototype;
  dart.addTypeTests(platform_interface_query_snapshot.QuerySnapshotPlatform);
  dart.addTypeCaches(platform_interface_query_snapshot.QuerySnapshotPlatform);
  dart.setGetterSignature(platform_interface_query_snapshot.QuerySnapshotPlatform, () => ({
    __proto__: dart.getGetters(platform_interface_query_snapshot.QuerySnapshotPlatform.__proto__),
    size: dart.legacy(core.int)
  }));
  dart.setLibraryUri(platform_interface_query_snapshot.QuerySnapshotPlatform, L2);
  dart.setFieldSignature(platform_interface_query_snapshot.QuerySnapshotPlatform, () => ({
    __proto__: dart.getFields(platform_interface_query_snapshot.QuerySnapshotPlatform.__proto__),
    docs: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(platform_interface_document_snapshot.DocumentSnapshotPlatform)))),
    docChanges: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(platform_interface_document_change.DocumentChangePlatform)))),
    metadata: dart.finalFieldType(dart.legacy(snapshot_metadata.SnapshotMetadataPlatform))
  }));
  dart.defineLazy(platform_interface_query_snapshot.QuerySnapshotPlatform, {
    /*platform_interface_query_snapshot.QuerySnapshotPlatform._token*/get _token() {
      return new core.Object.new();
    }
  }, true);
  var firestore$ = dart.privateName(platform_interface_query, "QueryPlatform.firestore");
  var parameters$ = dart.privateName(platform_interface_query, "QueryPlatform.parameters");
  platform_interface_query.QueryPlatform = class QueryPlatform extends plugin_platform_interface.PlatformInterface {
    get firestore() {
      return this[firestore$];
    }
    set firestore(value) {
      super.firestore = value;
    }
    get parameters() {
      return this[parameters$];
    }
    set parameters(value) {
      this[parameters$] = value;
    }
    get isCollectionGroupQuery() {
      dart.throw(new core.UnimplementedError.new("isCollectionGroupQuery is not implemented"));
    }
    static verifyExtends(instance) {
      if (!CollectionReferencePlatformL().is(instance)) {
        plugin_platform_interface.PlatformInterface.verifyToken(instance, platform_interface_query.QueryPlatform._token);
      }
    }
    endAtDocument(orders, values) {
      dart.throw(new core.UnimplementedError.new("endAtDocument() is not implemented"));
    }
    endAt(fields) {
      dart.throw(new core.UnimplementedError.new("endAt() is not implemented"));
    }
    endBeforeDocument(orders, values) {
      dart.throw(new core.UnimplementedError.new("endBeforeDocument() is not implemented"));
    }
    endBefore(values) {
      dart.throw(new core.UnimplementedError.new("endBefore() is not implemented"));
    }
    get(options = null) {
      dart.throw(new core.UnimplementedError.new("get() is not implemented"));
    }
    limit(limit) {
      dart.throw(new core.UnimplementedError.new("limit() is not implemented"));
    }
    limitToLast(limit) {
      dart.throw(new core.UnimplementedError.new("limitToLast() is not implemented"));
    }
    snapshots(opts) {
      let includeMetadataChanges = opts && 'includeMetadataChanges' in opts ? opts.includeMetadataChanges : false;
      dart.throw(new core.UnimplementedError.new("snapshots() is not implemented"));
    }
    orderBy(orders) {
      dart.throw(new core.UnimplementedError.new("orderBy() is not implemented"));
    }
    startAfterDocument(orders, values) {
      dart.throw(new core.UnimplementedError.new("startAfterDocument() is not implemented"));
    }
    startAfter(values) {
      dart.throw(new core.UnimplementedError.new("startAfter() is not implemented"));
    }
    startAtDocument(orders, values) {
      dart.throw(new core.UnimplementedError.new("startAtDocument() is not implemented"));
    }
    startAt(values) {
      dart.throw(new core.UnimplementedError.new("startAt() is not implemented"));
    }
    where(conditions) {
      dart.throw(new core.UnimplementedError.new("where() is not implemented"));
    }
  };
  (platform_interface_query.QueryPlatform.new = function(firestore, parameters) {
    let t0;
    this[firestore$] = firestore;
    this[parameters$] = (t0 = parameters, t0 == null ? platform_interface_query._initialParameters : t0);
    platform_interface_query.QueryPlatform.__proto__.new.call(this, {token: platform_interface_query.QueryPlatform._token});
    ;
  }).prototype = platform_interface_query.QueryPlatform.prototype;
  dart.addTypeTests(platform_interface_query.QueryPlatform);
  dart.addTypeCaches(platform_interface_query.QueryPlatform);
  dart.setMethodSignature(platform_interface_query.QueryPlatform, () => ({
    __proto__: dart.getMethods(platform_interface_query.QueryPlatform.__proto__),
    endAtDocument: dart.fnType(dart.legacy(platform_interface_query.QueryPlatform), [dart.legacy(core.List), dart.legacy(core.List)]),
    endAt: dart.fnType(dart.legacy(platform_interface_query.QueryPlatform), [dart.legacy(core.List)]),
    endBeforeDocument: dart.fnType(dart.legacy(platform_interface_query.QueryPlatform), [dart.legacy(core.List), dart.legacy(core.List)]),
    endBefore: dart.fnType(dart.legacy(platform_interface_query.QueryPlatform), [dart.legacy(core.List)]),
    get: dart.fnType(dart.legacy(async.Future$(dart.legacy(platform_interface_query_snapshot.QuerySnapshotPlatform))), [], [dart.legacy(get_options.GetOptions)]),
    limit: dart.fnType(dart.legacy(platform_interface_query.QueryPlatform), [dart.legacy(core.int)]),
    limitToLast: dart.fnType(dart.legacy(platform_interface_query.QueryPlatform), [dart.legacy(core.int)]),
    snapshots: dart.fnType(dart.legacy(async.Stream$(dart.legacy(platform_interface_query_snapshot.QuerySnapshotPlatform))), [], {includeMetadataChanges: dart.legacy(core.bool)}, {}),
    orderBy: dart.fnType(dart.legacy(platform_interface_query.QueryPlatform), [dart.legacy(core.List$(dart.legacy(core.List)))]),
    startAfterDocument: dart.fnType(dart.legacy(platform_interface_query.QueryPlatform), [dart.legacy(core.List), dart.legacy(core.List)]),
    startAfter: dart.fnType(dart.legacy(platform_interface_query.QueryPlatform), [dart.legacy(core.List)]),
    startAtDocument: dart.fnType(dart.legacy(platform_interface_query.QueryPlatform), [dart.legacy(core.List), dart.legacy(core.List)]),
    startAt: dart.fnType(dart.legacy(platform_interface_query.QueryPlatform), [dart.legacy(core.List)]),
    where: dart.fnType(dart.legacy(platform_interface_query.QueryPlatform), [dart.legacy(core.List$(dart.legacy(core.List)))])
  }));
  dart.setGetterSignature(platform_interface_query.QueryPlatform, () => ({
    __proto__: dart.getGetters(platform_interface_query.QueryPlatform.__proto__),
    isCollectionGroupQuery: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(platform_interface_query.QueryPlatform, L3);
  dart.setFieldSignature(platform_interface_query.QueryPlatform, () => ({
    __proto__: dart.getFields(platform_interface_query.QueryPlatform.__proto__),
    firestore: dart.finalFieldType(dart.legacy(platform_interface_firestore.FirebaseFirestorePlatform)),
    parameters: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)))
  }));
  dart.defineLazy(platform_interface_query.QueryPlatform, {
    /*platform_interface_query.QueryPlatform._token*/get _token() {
      return new core.Object.new();
    }
  }, true);
  dart.defineLazy(platform_interface_query, {
    /*platform_interface_query._initialParameters*/get _initialParameters() {
      return MapOfStringL$dynamic().unmodifiable(new _js_helper.LinkedMap.from(["where", ListOfListL().unmodifiable([]), "orderBy", ListOfListL().unmodifiable([]), "startAt", null, "startAfter", null, "endAt", null, "endBefore", null, "limit", null, "limitToLast", null]));
    },
    set _initialParameters(_) {}
  }, true);
  platform_interface_field_value_factory.FieldValueFactoryPlatform = class FieldValueFactoryPlatform extends plugin_platform_interface.PlatformInterface {
    static get instance() {
      return platform_interface_field_value_factory.FieldValueFactoryPlatform._instance;
    }
    static set instance(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, platform_interface_field_value_factory.FieldValueFactoryPlatform._token);
      platform_interface_field_value_factory.FieldValueFactoryPlatform._instance = instance;
    }
    static verifyExtends(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, platform_interface_field_value_factory.FieldValueFactoryPlatform._token);
    }
    arrayUnion(elements) {
      dart.throw(new core.UnimplementedError.new("arrayUnion() is not implemented"));
    }
    arrayRemove(elements) {
      dart.throw(new core.UnimplementedError.new("arrayRemove() is not implemented"));
    }
    delete() {
      dart.throw(new core.UnimplementedError.new("delete() is not implemented"));
    }
    serverTimestamp() {
      dart.throw(new core.UnimplementedError.new("serverTimestamp() is not implemented"));
    }
    increment(value) {
      dart.throw(new core.UnimplementedError.new("increment() is not implemented"));
    }
  };
  (platform_interface_field_value_factory.FieldValueFactoryPlatform.new = function() {
    platform_interface_field_value_factory.FieldValueFactoryPlatform.__proto__.new.call(this, {token: platform_interface_field_value_factory.FieldValueFactoryPlatform._token});
    ;
  }).prototype = platform_interface_field_value_factory.FieldValueFactoryPlatform.prototype;
  dart.addTypeTests(platform_interface_field_value_factory.FieldValueFactoryPlatform);
  dart.addTypeCaches(platform_interface_field_value_factory.FieldValueFactoryPlatform);
  dart.setMethodSignature(platform_interface_field_value_factory.FieldValueFactoryPlatform, () => ({
    __proto__: dart.getMethods(platform_interface_field_value_factory.FieldValueFactoryPlatform.__proto__),
    arrayUnion: dart.fnType(dart.dynamic, [dart.legacy(core.List)]),
    arrayRemove: dart.fnType(dart.dynamic, [dart.legacy(core.List)]),
    delete: dart.fnType(dart.dynamic, []),
    serverTimestamp: dart.fnType(dart.dynamic, []),
    increment: dart.fnType(dart.dynamic, [dart.legacy(core.num)])
  }));
  dart.setLibraryUri(platform_interface_field_value_factory.FieldValueFactoryPlatform, L5);
  dart.defineLazy(platform_interface_field_value_factory.FieldValueFactoryPlatform, {
    /*platform_interface_field_value_factory.FieldValueFactoryPlatform._instance*/get _instance() {
      return new method_channel_field_value_factory.MethodChannelFieldValueFactory.new();
    },
    set _instance(_) {},
    /*platform_interface_field_value_factory.FieldValueFactoryPlatform._token*/get _token() {
      return new core.Object.new();
    }
  }, true);
  method_channel_field_value_factory.MethodChannelFieldValueFactory = class MethodChannelFieldValueFactory extends platform_interface_field_value_factory.FieldValueFactoryPlatform {
    arrayRemove(elements) {
      return new method_channel_field_value.MethodChannelFieldValue.new(method_channel_field_value.FieldValueType.arrayRemove, elements);
    }
    arrayUnion(elements) {
      return new method_channel_field_value.MethodChannelFieldValue.new(method_channel_field_value.FieldValueType.arrayUnion, elements);
    }
    delete() {
      return new method_channel_field_value.MethodChannelFieldValue.new(method_channel_field_value.FieldValueType.delete, null);
    }
    increment(value) {
      if (!(intL().is(value) || doubleL().is(value))) dart.assertFailed(null, L4, 30, 12, "value is int || value is double");
      if (doubleL().is(value)) {
        return new method_channel_field_value.MethodChannelFieldValue.new(method_channel_field_value.FieldValueType.incrementDouble, value);
      } else if (intL().is(value)) {
        return new method_channel_field_value.MethodChannelFieldValue.new(method_channel_field_value.FieldValueType.incrementInteger, value);
      }
      return null;
    }
    serverTimestamp() {
      return new method_channel_field_value.MethodChannelFieldValue.new(method_channel_field_value.FieldValueType.serverTimestamp, null);
    }
  };
  (method_channel_field_value_factory.MethodChannelFieldValueFactory.new = function() {
    method_channel_field_value_factory.MethodChannelFieldValueFactory.__proto__.new.call(this);
    ;
  }).prototype = method_channel_field_value_factory.MethodChannelFieldValueFactory.prototype;
  dart.addTypeTests(method_channel_field_value_factory.MethodChannelFieldValueFactory);
  dart.addTypeCaches(method_channel_field_value_factory.MethodChannelFieldValueFactory);
  dart.setMethodSignature(method_channel_field_value_factory.MethodChannelFieldValueFactory, () => ({
    __proto__: dart.getMethods(method_channel_field_value_factory.MethodChannelFieldValueFactory.__proto__),
    arrayRemove: dart.fnType(dart.legacy(method_channel_field_value.MethodChannelFieldValue), [dart.legacy(core.List)]),
    arrayUnion: dart.fnType(dart.legacy(method_channel_field_value.MethodChannelFieldValue), [dart.legacy(core.List)]),
    delete: dart.fnType(dart.legacy(method_channel_field_value.MethodChannelFieldValue), []),
    increment: dart.fnType(dart.legacy(method_channel_field_value.MethodChannelFieldValue), [dart.legacy(core.num)]),
    serverTimestamp: dart.fnType(dart.legacy(method_channel_field_value.MethodChannelFieldValue), [])
  }));
  dart.setLibraryUri(method_channel_field_value_factory.MethodChannelFieldValueFactory, L6);
  var _firestore$ = dart.privateName(platform_interface_document_snapshot, "_firestore");
  var _data$ = dart.privateName(platform_interface_document_snapshot, "_data");
  var _pointer = dart.privateName(platform_interface_document_snapshot, "_pointer");
  platform_interface_document_snapshot.DocumentSnapshotPlatform = class DocumentSnapshotPlatform extends plugin_platform_interface.PlatformInterface {
    static verifyExtends(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, platform_interface_document_snapshot.DocumentSnapshotPlatform._token);
    }
    get id() {
      return this[_pointer].id;
    }
    get metadata() {
      return new snapshot_metadata.SnapshotMetadataPlatform.new(boolL().as(dart.dsend(this[_data$][$_get]("metadata"), '_get', ["hasPendingWrites"])), boolL().as(dart.dsend(this[_data$][$_get]("metadata"), '_get', ["isFromCache"])));
    }
    get exists() {
      return this[_data$][$_get]("data") != null;
    }
    get reference() {
      return this[_firestore$].doc(this[_pointer].path);
    }
    data() {
      return dart.test(this.exists) ? LinkedHashMapOfStringL$dynamic().from(core.Map.as(this[_data$][$_get]("data"))) : null;
    }
    get(field) {
      if (!(field != null)) dart.assertFailed(null, L7, 68, 12, "field != null");
      if (!(StringL().is(field) || FieldPathL().is(field))) dart.assertFailed("Supported [field] types are [String] and [FieldPath]", L7, 69, 12, "field is String || field is FieldPath");
      if (!dart.test(this.exists)) {
        dart.throw(new core.StateError.new("cannot get a field on a " + dart.str(dart.wrapType(DocumentSnapshotPlatformL())) + " which does not exist"));
      }
      function _findKeyValueInMap(key, map) {
        if (dart.test(map[$containsKey](key))) {
          return map[$_get](key);
        }
        dart.throw(new core.StateError.new("field does not exist within the " + dart.str(dart.wrapType(DocumentSnapshotPlatformL()))));
      }
      dart.fn(_findKeyValueInMap, StringLAndMapLOfStringL$dynamicTodynamic());
      let fieldPath = null;
      if (StringL().is(field)) {
        fieldPath = new field_path.FieldPath.fromString(field);
      } else {
        fieldPath = FieldPathL().as(field);
      }
      let components = fieldPath.components;
      let snapshotData = this.data();
      function _findComponent(componentIndex, data) {
        let isLast = dart.notNull(componentIndex) + 1 === components[$length];
        let value = _findKeyValueInMap(components[$_get](componentIndex), data);
        if (isLast) {
          return value;
        }
        if (MapL().is(value)) {
          return _findComponent(dart.notNull(componentIndex) + 1, LinkedHashMapOfStringL$dynamic().from(value));
        } else {
          dart.throw(new core.StateError.new("field does not exist within the " + dart.str(dart.wrapType(DocumentSnapshotPlatformL()))));
        }
      }
      dart.fn(_findComponent, intLAndMapLOfStringL$dynamicTodynamic());
      return _findComponent(0, snapshotData);
    }
    _get(field) {
      return this.get(field);
    }
  };
  (platform_interface_document_snapshot.DocumentSnapshotPlatform.new = function(_firestore, path, _data) {
    this[_firestore$] = _firestore;
    this[_data$] = _data;
    this[_pointer] = new pointer.Pointer.new(path);
    platform_interface_document_snapshot.DocumentSnapshotPlatform.__proto__.new.call(this, {token: platform_interface_document_snapshot.DocumentSnapshotPlatform._token});
    ;
  }).prototype = platform_interface_document_snapshot.DocumentSnapshotPlatform.prototype;
  dart.addTypeTests(platform_interface_document_snapshot.DocumentSnapshotPlatform);
  dart.addTypeCaches(platform_interface_document_snapshot.DocumentSnapshotPlatform);
  dart.setMethodSignature(platform_interface_document_snapshot.DocumentSnapshotPlatform, () => ({
    __proto__: dart.getMethods(platform_interface_document_snapshot.DocumentSnapshotPlatform.__proto__),
    data: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), []),
    get: dart.fnType(dart.dynamic, [dart.dynamic]),
    _get: dart.fnType(dart.dynamic, [dart.dynamic])
  }));
  dart.setGetterSignature(platform_interface_document_snapshot.DocumentSnapshotPlatform, () => ({
    __proto__: dart.getGetters(platform_interface_document_snapshot.DocumentSnapshotPlatform.__proto__),
    id: dart.legacy(core.String),
    metadata: dart.legacy(snapshot_metadata.SnapshotMetadataPlatform),
    exists: dart.legacy(core.bool),
    reference: dart.legacy(platform_interface_document_reference.DocumentReferencePlatform)
  }));
  dart.setLibraryUri(platform_interface_document_snapshot.DocumentSnapshotPlatform, L8);
  dart.setFieldSignature(platform_interface_document_snapshot.DocumentSnapshotPlatform, () => ({
    __proto__: dart.getFields(platform_interface_document_snapshot.DocumentSnapshotPlatform.__proto__),
    [_firestore$]: dart.finalFieldType(dart.legacy(platform_interface_firestore.FirebaseFirestorePlatform)),
    [_pointer]: dart.finalFieldType(dart.legacy(pointer.Pointer)),
    [_data$]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)))
  }));
  dart.defineLazy(platform_interface_document_snapshot.DocumentSnapshotPlatform, {
    /*platform_interface_document_snapshot.DocumentSnapshotPlatform._token*/get _token() {
      return new core.Object.new();
    }
  }, true);
  var _pointer$ = dart.privateName(platform_interface_document_reference, "_pointer");
  var firestore$0 = dart.privateName(platform_interface_document_reference, "DocumentReferencePlatform.firestore");
  platform_interface_document_reference.DocumentReferencePlatform = class DocumentReferencePlatform extends plugin_platform_interface.PlatformInterface {
    get firestore() {
      return this[firestore$0];
    }
    set firestore(value) {
      super.firestore = value;
    }
    static verifyExtends(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, platform_interface_document_reference.DocumentReferencePlatform._token);
    }
    get path() {
      return this[_pointer$].path;
    }
    get id() {
      return this[_pointer$].id;
    }
    get parent() {
      return this.firestore.collection(this[_pointer$].parentPath());
    }
    collection(collectionPath) {
      return this.firestore.collection(this[_pointer$].collectionPath(collectionPath));
    }
    delete() {
      dart.throw(new core.UnimplementedError.new("delete() is not implemented"));
    }
    get(options = null) {
      return async.async(DocumentSnapshotPlatformL(), function* get() {
        dart.throw(new core.UnimplementedError.new("get() is not implemented"));
      });
    }
    snapshots(opts) {
      let includeMetadataChanges = opts && 'includeMetadataChanges' in opts ? opts.includeMetadataChanges : false;
      dart.throw(new core.UnimplementedError.new("snapshots() is not implemented"));
    }
    set(data, options = null) {
      dart.throw(new core.UnimplementedError.new("set() is not implemented"));
    }
    update(data) {
      dart.throw(new core.UnimplementedError.new("update() is not implemented"));
    }
    _equals(o) {
      if (o == null) return false;
      return DocumentReferencePlatformL().is(o) && dart.equals(o.firestore, this.firestore) && o.path == this.path;
    }
    get hashCode() {
      return dart.hashCode(this.path);
    }
    toString() {
      return dart.str(dart.wrapType(DocumentReferencePlatformL())) + "(" + dart.str(this.path) + ")";
    }
  };
  (platform_interface_document_reference.DocumentReferencePlatform.new = function(firestore, path) {
    this[firestore$0] = firestore;
    this[_pointer$] = new pointer.Pointer.new(path);
    platform_interface_document_reference.DocumentReferencePlatform.__proto__.new.call(this, {token: platform_interface_document_reference.DocumentReferencePlatform._token});
    ;
  }).prototype = platform_interface_document_reference.DocumentReferencePlatform.prototype;
  dart.addTypeTests(platform_interface_document_reference.DocumentReferencePlatform);
  dart.addTypeCaches(platform_interface_document_reference.DocumentReferencePlatform);
  dart.setMethodSignature(platform_interface_document_reference.DocumentReferencePlatform, () => ({
    __proto__: dart.getMethods(platform_interface_document_reference.DocumentReferencePlatform.__proto__),
    collection: dart.fnType(dart.legacy(platform_interface_collection_reference.CollectionReferencePlatform), [dart.legacy(core.String)]),
    delete: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    get: dart.fnType(dart.legacy(async.Future$(dart.legacy(platform_interface_document_snapshot.DocumentSnapshotPlatform))), [], [dart.legacy(get_options.GetOptions)]),
    snapshots: dart.fnType(dart.legacy(async.Stream$(dart.legacy(platform_interface_document_snapshot.DocumentSnapshotPlatform))), [], {includeMetadataChanges: dart.legacy(core.bool)}, {}),
    set: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))], [dart.legacy(set_options.SetOptions)]),
    update: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))]),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(platform_interface_document_reference.DocumentReferencePlatform, () => ({
    __proto__: dart.getGetters(platform_interface_document_reference.DocumentReferencePlatform.__proto__),
    path: dart.legacy(core.String),
    id: dart.legacy(core.String),
    parent: dart.legacy(platform_interface_collection_reference.CollectionReferencePlatform),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(platform_interface_document_reference.DocumentReferencePlatform, L9);
  dart.setFieldSignature(platform_interface_document_reference.DocumentReferencePlatform, () => ({
    __proto__: dart.getFields(platform_interface_document_reference.DocumentReferencePlatform.__proto__),
    firestore: dart.finalFieldType(dart.legacy(platform_interface_firestore.FirebaseFirestorePlatform)),
    [_pointer$]: dart.finalFieldType(dart.legacy(pointer.Pointer))
  }));
  dart.defineExtensionMethods(platform_interface_document_reference.DocumentReferencePlatform, ['_equals', 'toString']);
  dart.defineExtensionAccessors(platform_interface_document_reference.DocumentReferencePlatform, ['hashCode']);
  dart.defineLazy(platform_interface_document_reference.DocumentReferencePlatform, {
    /*platform_interface_document_reference.DocumentReferencePlatform._token*/get _token() {
      return new core.Object.new();
    }
  }, true);
  var _name$ = dart.privateName(platform_interface_document_change, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  platform_interface_document_change.DocumentChangeType = class DocumentChangeType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (platform_interface_document_change.DocumentChangeType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = platform_interface_document_change.DocumentChangeType.prototype;
  dart.addTypeTests(platform_interface_document_change.DocumentChangeType);
  dart.addTypeCaches(platform_interface_document_change.DocumentChangeType);
  dart.setMethodSignature(platform_interface_document_change.DocumentChangeType, () => ({
    __proto__: dart.getMethods(platform_interface_document_change.DocumentChangeType.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(platform_interface_document_change.DocumentChangeType, L10);
  dart.setFieldSignature(platform_interface_document_change.DocumentChangeType, () => ({
    __proto__: dart.getFields(platform_interface_document_change.DocumentChangeType.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(platform_interface_document_change.DocumentChangeType, ['toString']);
  platform_interface_document_change.DocumentChangeType.added = C0 || CT.C0;
  platform_interface_document_change.DocumentChangeType.modified = C1 || CT.C1;
  platform_interface_document_change.DocumentChangeType.removed = C2 || CT.C2;
  platform_interface_document_change.DocumentChangeType.values = C3 || CT.C3;
  var type$ = dart.privateName(platform_interface_document_change, "DocumentChangePlatform.type");
  var oldIndex$ = dart.privateName(platform_interface_document_change, "DocumentChangePlatform.oldIndex");
  var newIndex$ = dart.privateName(platform_interface_document_change, "DocumentChangePlatform.newIndex");
  var document$ = dart.privateName(platform_interface_document_change, "DocumentChangePlatform.document");
  platform_interface_document_change.DocumentChangePlatform = class DocumentChangePlatform extends plugin_platform_interface.PlatformInterface {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get oldIndex() {
      return this[oldIndex$];
    }
    set oldIndex(value) {
      super.oldIndex = value;
    }
    get newIndex() {
      return this[newIndex$];
    }
    set newIndex(value) {
      super.newIndex = value;
    }
    get document() {
      return this[document$];
    }
    set document(value) {
      super.document = value;
    }
    static verifyExtends(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, platform_interface_document_change.DocumentChangePlatform._token);
    }
  };
  (platform_interface_document_change.DocumentChangePlatform.new = function(type, oldIndex, newIndex, document) {
    this[type$] = type;
    this[oldIndex$] = oldIndex;
    this[newIndex$] = newIndex;
    this[document$] = document;
    platform_interface_document_change.DocumentChangePlatform.__proto__.new.call(this, {token: platform_interface_document_change.DocumentChangePlatform._token});
    ;
  }).prototype = platform_interface_document_change.DocumentChangePlatform.prototype;
  dart.addTypeTests(platform_interface_document_change.DocumentChangePlatform);
  dart.addTypeCaches(platform_interface_document_change.DocumentChangePlatform);
  dart.setLibraryUri(platform_interface_document_change.DocumentChangePlatform, L10);
  dart.setFieldSignature(platform_interface_document_change.DocumentChangePlatform, () => ({
    __proto__: dart.getFields(platform_interface_document_change.DocumentChangePlatform.__proto__),
    type: dart.finalFieldType(dart.legacy(platform_interface_document_change.DocumentChangeType)),
    oldIndex: dart.finalFieldType(dart.legacy(core.int)),
    newIndex: dart.finalFieldType(dart.legacy(core.int)),
    document: dart.finalFieldType(dart.legacy(platform_interface_document_snapshot.DocumentSnapshotPlatform))
  }));
  dart.defineLazy(platform_interface_document_change.DocumentChangePlatform, {
    /*platform_interface_document_change.DocumentChangePlatform._token*/get _token() {
      return new core.Object.new();
    }
  }, true);
  var _pointer$0 = dart.privateName(platform_interface_collection_reference, "_pointer");
  platform_interface_collection_reference.CollectionReferencePlatform = class CollectionReferencePlatform extends platform_interface_query.QueryPlatform {
    get id() {
      return this[_pointer$0].id;
    }
    get parent() {
      let parentPath = this[_pointer$0].parentPath();
      if (parentPath == null) {
        return null;
      }
      return this.firestore.doc(parentPath);
    }
    get path() {
      return this[_pointer$0].path;
    }
    doc(path = null) {
      dart.throw(new core.UnimplementedError.new("doc() is not implemented"));
    }
    _equals(o) {
      if (o == null) return false;
      return CollectionReferencePlatformL().is(o) && dart.equals(o.firestore, this.firestore) && o.path == this.path;
    }
    get hashCode() {
      return dart.hashCode(this.path);
    }
    toString() {
      return dart.str(dart.wrapType(CollectionReferencePlatformL())) + "(" + dart.str(this.path) + ")";
    }
  };
  (platform_interface_collection_reference.CollectionReferencePlatform.new = function(firestore, path) {
    this[_pointer$0] = new pointer.Pointer.new(path);
    platform_interface_collection_reference.CollectionReferencePlatform.__proto__.new.call(this, firestore, new (IdentityMapOfStringL$dynamic()).new());
    ;
  }).prototype = platform_interface_collection_reference.CollectionReferencePlatform.prototype;
  dart.addTypeTests(platform_interface_collection_reference.CollectionReferencePlatform);
  dart.addTypeCaches(platform_interface_collection_reference.CollectionReferencePlatform);
  dart.setMethodSignature(platform_interface_collection_reference.CollectionReferencePlatform, () => ({
    __proto__: dart.getMethods(platform_interface_collection_reference.CollectionReferencePlatform.__proto__),
    doc: dart.fnType(dart.legacy(platform_interface_document_reference.DocumentReferencePlatform), [], [dart.legacy(core.String)]),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(platform_interface_collection_reference.CollectionReferencePlatform, () => ({
    __proto__: dart.getGetters(platform_interface_collection_reference.CollectionReferencePlatform.__proto__),
    id: dart.legacy(core.String),
    parent: dart.legacy(platform_interface_document_reference.DocumentReferencePlatform),
    path: dart.legacy(core.String),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(platform_interface_collection_reference.CollectionReferencePlatform, L11);
  dart.setFieldSignature(platform_interface_collection_reference.CollectionReferencePlatform, () => ({
    __proto__: dart.getFields(platform_interface_collection_reference.CollectionReferencePlatform.__proto__),
    [_pointer$0]: dart.finalFieldType(dart.legacy(pointer.Pointer))
  }));
  dart.defineExtensionMethods(platform_interface_collection_reference.CollectionReferencePlatform, ['_equals', 'toString']);
  dart.defineExtensionAccessors(platform_interface_collection_reference.CollectionReferencePlatform, ['hashCode']);
  var _name$0 = dart.privateName(method_channel_field_value, "_name");
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  method_channel_field_value.FieldValueType = class FieldValueType extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (method_channel_field_value.FieldValueType.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = method_channel_field_value.FieldValueType.prototype;
  dart.addTypeTests(method_channel_field_value.FieldValueType);
  dart.addTypeCaches(method_channel_field_value.FieldValueType);
  dart.setMethodSignature(method_channel_field_value.FieldValueType, () => ({
    __proto__: dart.getMethods(method_channel_field_value.FieldValueType.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(method_channel_field_value.FieldValueType, L12);
  dart.setFieldSignature(method_channel_field_value.FieldValueType, () => ({
    __proto__: dart.getFields(method_channel_field_value.FieldValueType.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$0]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(method_channel_field_value.FieldValueType, ['toString']);
  method_channel_field_value.FieldValueType.arrayUnion = C4 || CT.C4;
  method_channel_field_value.FieldValueType.arrayRemove = C5 || CT.C5;
  method_channel_field_value.FieldValueType.delete = C6 || CT.C6;
  method_channel_field_value.FieldValueType.serverTimestamp = C7 || CT.C7;
  method_channel_field_value.FieldValueType.incrementDouble = C8 || CT.C8;
  method_channel_field_value.FieldValueType.incrementInteger = C9 || CT.C9;
  method_channel_field_value.FieldValueType.values = C10 || CT.C10;
  var DeepCollectionEquality__unordered = dart.privateName(equality, "DeepCollectionEquality._unordered");
  var C12;
  var DeepCollectionEquality__base = dart.privateName(equality, "DeepCollectionEquality._base");
  var C11;
  var type$0 = dart.privateName(method_channel_field_value, "MethodChannelFieldValue.type");
  var value$ = dart.privateName(method_channel_field_value, "MethodChannelFieldValue.value");
  method_channel_field_value.MethodChannelFieldValue = class MethodChannelFieldValue extends core.Object {
    get type() {
      return this[type$0];
    }
    set type(value) {
      super.type = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    _equals(other) {
      if (other == null) return false;
      return MethodChannelFieldValueL().is(other) && other.type == this.type && dart.test((C11 || CT.C11).equals(other.value, this.value));
    }
    get hashCode() {
      return ui.hashValues(this.type, this.value);
    }
  };
  (method_channel_field_value.MethodChannelFieldValue.new = function(type, value) {
    this[type$0] = type;
    this[value$] = value;
    ;
  }).prototype = method_channel_field_value.MethodChannelFieldValue.prototype;
  dart.addTypeTests(method_channel_field_value.MethodChannelFieldValue);
  dart.addTypeCaches(method_channel_field_value.MethodChannelFieldValue);
  dart.setMethodSignature(method_channel_field_value.MethodChannelFieldValue, () => ({
    __proto__: dart.getMethods(method_channel_field_value.MethodChannelFieldValue.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic])
  }));
  dart.setGetterSignature(method_channel_field_value.MethodChannelFieldValue, () => ({
    __proto__: dart.getGetters(method_channel_field_value.MethodChannelFieldValue.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(method_channel_field_value.MethodChannelFieldValue, L12);
  dart.setFieldSignature(method_channel_field_value.MethodChannelFieldValue, () => ({
    __proto__: dart.getFields(method_channel_field_value.MethodChannelFieldValue.__proto__),
    type: dart.finalFieldType(dart.legacy(method_channel_field_value.FieldValueType)),
    value: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(method_channel_field_value.MethodChannelFieldValue, ['_equals']);
  dart.defineExtensionAccessors(method_channel_field_value.MethodChannelFieldValue, ['hashCode']);
  var C13;
  var _name = dart.privateName(field_path_type, "_name");
  var C15;
  var C14;
  firestore_message_codec.FirestoreMessageCodec = class FirestoreMessageCodec extends message_codecs.StandardMessageCodec {
    writeValue(buffer, value) {
      if (DateTimeL().is(value)) {
        buffer.putUint8(128);
        buffer.putInt64(value.millisecondsSinceEpoch);
      } else if (TimestampL().is(value)) {
        buffer.putUint8(136);
        buffer.putInt64(value.seconds);
        buffer.putInt32(value.nanoseconds);
      } else if (GeoPointL().is(value)) {
        buffer.putUint8(129);
        buffer.putFloat64(value.latitude);
        buffer.putFloat64(value.longitude);
      } else if (DocumentReferencePlatformL().is(value)) {
        buffer.putUint8(130);
        this.writeValue(buffer, value.firestore);
        this.writeValue(buffer, value.path);
      } else if (BlobL().is(value)) {
        buffer.putUint8(131);
        this.writeSize(buffer, value.bytes[$length]);
        buffer.putUint8List(value.bytes);
      } else if (FieldValuePlatformL().is(value)) {
        let delegate = MethodChannelFieldValueL().as(platform_interface_field_value.FieldValuePlatform.getDelegate(value));
        let code = firestore_message_codec.FirestoreMessageCodec._kFieldValueCodes[$_get](delegate.type);
        if (!(code != null)) dart.assertFailed(null, L13, 79, 14, "code != null");
        buffer.putUint8(code);
        if (delegate.value != null) this.writeValue(buffer, delegate.value);
      } else if (FieldPathTypeL().is(value)) {
        let code = firestore_message_codec.FirestoreMessageCodec._kFieldPathCodes[$_get](value);
        if (!(code != null)) dart.assertFailed(null, L13, 84, 14, "code != null");
        buffer.putUint8(code);
      } else if (FieldPathL().is(value)) {
        buffer.putUint8(140);
        this.writeSize(buffer, value.components[$length]);
        for (let item of value.components) {
          this.writeValue(buffer, item);
        }
      } else if (MethodChannelFirebaseFirestoreL().is(value)) {
        buffer.putUint8(144);
        this.writeValue(buffer, value.app.name);
        this.writeValue(buffer, value.settings);
      } else if (MethodChannelQueryL().is(value)) {
        buffer.putUint8(145);
        this.writeValue(buffer, new (IdentityMapOfStringL$dynamic()).from(["firestore", value.firestore, "path", value.path, "isCollectionGroup", value.isCollectionGroupQuery, "parameters", value.parameters]));
      } else if (SettingsL().is(value)) {
        buffer.putUint8(146);
        this.writeValue(buffer, value.asMap);
      } else if (dart.equals(value, 0 / 0)) {
        buffer.putUint8(141);
      } else if (dart.equals(value, 1 / 0)) {
        buffer.putUint8(142);
      } else if (dart.equals(value, -1 / 0)) {
        buffer.putUint8(143);
      } else {
        super.writeValue(buffer, value);
      }
    }
    readValueOfType(type, buffer) {
      switch (type) {
        case 128:
        {
          return new core.DateTime.fromMillisecondsSinceEpoch(buffer.getInt64());
        }
        case 136:
        {
          return new timestamp.Timestamp.new(buffer.getInt64(), buffer.getInt32());
        }
        case 129:
        {
          return new geo_point.GeoPoint.new(buffer.getFloat64(), buffer.getFloat64());
        }
        case 130:
        {
          let appName = StringL().as(this.readValue(buffer));
          let path = StringL().as(this.readValue(buffer));
          let app = firebase_core.Firebase.app(appName);
          let firestore = platform_interface_firestore.FirebaseFirestorePlatform.instanceFor({app: app});
          return firestore.doc(path);
        }
        case 131:
        {
          let length = this.readSize(buffer);
          let bytes = buffer.getUint8List(length);
          return new blob.Blob.new(Uint8ListL().as(bytes));
        }
        case 139:
        {
          return field_path.FieldPath.documentId;
        }
        case 141:
        {
          return 0 / 0;
        }
        case 142:
        {
          return 1 / 0;
        }
        case 143:
        {
          return -1 / 0;
        }
        case 144:
        case 145:
        case 146:
        case 132:
        case 133:
        case 134:
        case 135:
        case 137:
        case 138:
        default:
        {
          return super.readValueOfType(type, buffer);
        }
      }
    }
  };
  (firestore_message_codec.FirestoreMessageCodec.new = function() {
    firestore_message_codec.FirestoreMessageCodec.__proto__.new.call(this);
    ;
  }).prototype = firestore_message_codec.FirestoreMessageCodec.prototype;
  dart.addTypeTests(firestore_message_codec.FirestoreMessageCodec);
  dart.addTypeCaches(firestore_message_codec.FirestoreMessageCodec);
  dart.setMethodSignature(firestore_message_codec.FirestoreMessageCodec, () => ({
    __proto__: dart.getMethods(firestore_message_codec.FirestoreMessageCodec.__proto__),
    writeValue: dart.fnType(dart.void, [dart.legacy(serialization.WriteBuffer), dart.dynamic]),
    readValueOfType: dart.fnType(dart.dynamic, [dart.legacy(core.int), dart.legacy(serialization.ReadBuffer)])
  }));
  dart.setLibraryUri(firestore_message_codec.FirestoreMessageCodec, L14);
  dart.defineLazy(firestore_message_codec.FirestoreMessageCodec, {
    /*firestore_message_codec.FirestoreMessageCodec._kDateTime*/get _kDateTime() {
      return 128;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kGeoPoint*/get _kGeoPoint() {
      return 129;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kDocumentReference*/get _kDocumentReference() {
      return 130;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kBlob*/get _kBlob() {
      return 131;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kArrayUnion*/get _kArrayUnion() {
      return 132;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kArrayRemove*/get _kArrayRemove() {
      return 133;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kDelete*/get _kDelete() {
      return 134;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kServerTimestamp*/get _kServerTimestamp() {
      return 135;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kTimestamp*/get _kTimestamp() {
      return 136;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kIncrementDouble*/get _kIncrementDouble() {
      return 137;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kIncrementInteger*/get _kIncrementInteger() {
      return 138;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kDocumentId*/get _kDocumentId() {
      return 139;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kFieldPath*/get _kFieldPath() {
      return 140;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kNaN*/get _kNaN() {
      return 141;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kInfinity*/get _kInfinity() {
      return 142;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kNegativeInfinity*/get _kNegativeInfinity() {
      return 143;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kFirestoreInstance*/get _kFirestoreInstance() {
      return 144;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kFirestoreQuery*/get _kFirestoreQuery() {
      return 145;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kFirestoreSettings*/get _kFirestoreSettings() {
      return 146;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kFieldValueCodes*/get _kFieldValueCodes() {
      return C13 || CT.C13;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kFieldPathCodes*/get _kFieldPathCodes() {
      return C14 || CT.C14;
    }
  }, true);
  var _writes = dart.privateName(method_channel_write_batch, "_writes");
  var _committed = dart.privateName(method_channel_write_batch, "_committed");
  var _firestore$0 = dart.privateName(method_channel_write_batch, "_firestore");
  var _assertNotCommitted = dart.privateName(method_channel_write_batch, "_assertNotCommitted");
  method_channel_write_batch.MethodChannelWriteBatch = class MethodChannelWriteBatch extends platform_interface_write_batch.WriteBatchPlatform {
    commit() {
      return async.async(dart.void, (function* commit() {
        this[_assertNotCommitted]();
        this[_committed] = true;
        if (dart.test(this[_writes][$isEmpty])) {
          return;
        }
        try {
          yield method_channel_firestore.MethodChannelFirebaseFirestore.channel.invokeMethod(dart.void, "WriteBatch#commit", new (IdentityMapOfStringL$dynamic()).from(["firestore", this[_firestore$0], "writes", this[_writes]]));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception$.convertPlatformException(e));
        }
      }).bind(this));
    }
    delete(documentPath) {
      this[_assertNotCommitted]();
      this[_writes][$add](new (IdentityMapOfStringL$dynamic()).from(["path", documentPath, "type", "DELETE"]));
    }
    set(documentPath, data, options = null) {
      let t1, t1$;
      this[_assertNotCommitted]();
      this[_writes][$add](new (IdentityMapOfStringL$dynamic()).from(["path", documentPath, "type", "SET", "data", data, "options", new (IdentityMapOfStringL$dynamic()).from(["merge", (t1 = options, t1 == null ? null : t1.merge), "mergeFields", (t1$ = options, t1$ == null ? null : t1$.mergeFields)])]));
    }
    update(documentPath, data) {
      this[_assertNotCommitted]();
      this[_writes][$add](new (IdentityMapOfStringL$dynamic()).from(["path", documentPath, "type", "UPDATE", "data", data]));
    }
    [_assertNotCommitted]() {
      if (dart.test(this[_committed])) {
        dart.throw(new core.StateError.new("This batch has already been committed and can no longer be changed."));
      }
    }
  };
  (method_channel_write_batch.MethodChannelWriteBatch.new = function(_firestore) {
    this[_writes] = JSArrayOfMapLOfStringL$dynamic().of([]);
    this[_committed] = false;
    this[_firestore$0] = _firestore;
    method_channel_write_batch.MethodChannelWriteBatch.__proto__.new.call(this);
    ;
  }).prototype = method_channel_write_batch.MethodChannelWriteBatch.prototype;
  dart.addTypeTests(method_channel_write_batch.MethodChannelWriteBatch);
  dart.addTypeCaches(method_channel_write_batch.MethodChannelWriteBatch);
  dart.setMethodSignature(method_channel_write_batch.MethodChannelWriteBatch, () => ({
    __proto__: dart.getMethods(method_channel_write_batch.MethodChannelWriteBatch.__proto__),
    [_assertNotCommitted]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(method_channel_write_batch.MethodChannelWriteBatch, L15);
  dart.setFieldSignature(method_channel_write_batch.MethodChannelWriteBatch, () => ({
    __proto__: dart.getFields(method_channel_write_batch.MethodChannelWriteBatch.__proto__),
    [_firestore$0]: dart.finalFieldType(dart.legacy(platform_interface_firestore.FirebaseFirestorePlatform)),
    [_writes]: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))))),
    [_committed]: dart.fieldType(dart.legacy(core.bool))
  }));
  var _firestore = dart.privateName(method_channel_transaction, "_firestore");
  var _commands = dart.privateName(method_channel_transaction, "_commands");
  var _transactionId = dart.privateName(method_channel_transaction, "_transactionId");
  var appName$ = dart.privateName(method_channel_transaction, "MethodChannelTransaction.appName");
  method_channel_transaction.MethodChannelTransaction = class MethodChannelTransaction extends platform_interface_transaction.TransactionPlatform {
    get appName() {
      return this[appName$];
    }
    set appName(value) {
      super.appName = value;
    }
    get commands() {
      return this[_commands];
    }
    get(documentPath) {
      return async.async(DocumentSnapshotPlatformL(), (function* get() {
        if (!dart.test(this[_commands][$isEmpty])) dart.assertFailed("Transactions require all reads to be executed before all writes.", L16, 42, 12, "_commands.isEmpty");
        let result = (yield method_channel_firestore.MethodChannelFirebaseFirestore.channel.invokeMapMethod(StringL(), dart.dynamic, "Transaction#get", new (IdentityMapOfStringL$dynamic()).from(["firestore", this[_firestore], "transactionId", this[_transactionId], "reference", this[_firestore].doc(documentPath)])));
        return new platform_interface_document_snapshot.DocumentSnapshotPlatform.new(this[_firestore], documentPath, LinkedHashMapOfStringL$dynamic().from(result));
      }).bind(this));
    }
    delete(documentPath) {
      this[_commands][$add](new (IdentityMapOfStringL$StringL()).from(["type", "DELETE", "path", documentPath]));
      return this;
    }
    update(documentPath, data) {
      this[_commands][$add](new (IdentityMapOfStringL$dynamic()).from(["type", "UPDATE", "path", documentPath, "data", data]));
      return this;
    }
    set(documentPath, data, options = null) {
      let t1, t1$;
      this[_commands][$add](new (IdentityMapOfStringL$dynamic()).from(["type", "SET", "path", documentPath, "data", data, "options", new (IdentityMapOfStringL$ObjectL()).from(["merge", (t1 = options, t1 == null ? null : t1.merge), "mergeFields", (t1$ = options, t1$ == null ? null : t1$.mergeFields)])]));
      return this;
    }
  };
  (method_channel_transaction.MethodChannelTransaction.new = function(transactionId, appName) {
    this[_firestore] = null;
    this[_commands] = JSArrayOfMapLOfStringL$dynamic().of([]);
    this[appName$] = appName;
    this[_transactionId] = transactionId;
    method_channel_transaction.MethodChannelTransaction.__proto__.new.call(this);
    this[_firestore] = platform_interface_firestore.FirebaseFirestorePlatform.instanceFor({app: firebase_core.Firebase.app(this.appName)});
  }).prototype = method_channel_transaction.MethodChannelTransaction.prototype;
  dart.addTypeTests(method_channel_transaction.MethodChannelTransaction);
  dart.addTypeCaches(method_channel_transaction.MethodChannelTransaction);
  dart.setMethodSignature(method_channel_transaction.MethodChannelTransaction, () => ({
    __proto__: dart.getMethods(method_channel_transaction.MethodChannelTransaction.__proto__),
    delete: dart.fnType(dart.legacy(method_channel_transaction.MethodChannelTransaction), [dart.legacy(core.String)]),
    update: dart.fnType(dart.legacy(method_channel_transaction.MethodChannelTransaction), [dart.legacy(core.String), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))]),
    set: dart.fnType(dart.legacy(method_channel_transaction.MethodChannelTransaction), [dart.legacy(core.String), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))], [dart.legacy(set_options.SetOptions)])
  }));
  dart.setLibraryUri(method_channel_transaction.MethodChannelTransaction, L17);
  dart.setFieldSignature(method_channel_transaction.MethodChannelTransaction, () => ({
    __proto__: dart.getFields(method_channel_transaction.MethodChannelTransaction.__proto__),
    appName: dart.finalFieldType(dart.legacy(core.String)),
    [_transactionId]: dart.fieldType(dart.legacy(core.int)),
    [_firestore]: dart.fieldType(dart.legacy(platform_interface_firestore.FirebaseFirestorePlatform)),
    [_commands]: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)))))
  }));
  method_channel_document_change.MethodChannelDocumentChange = class MethodChannelDocumentChange extends platform_interface_document_change.DocumentChangePlatform {};
  (method_channel_document_change.MethodChannelDocumentChange.new = function(firestore, data) {
    method_channel_document_change.MethodChannelDocumentChange.__proto__.new.call(this, platform_interface_document_change.DocumentChangeType.values[$firstWhere](dart.fn(type => core.identical(dart.toString(type), data[$_get]("type")), DocumentChangeTypeLToboolL())), intL().as(data[$_get]("oldIndex")), intL().as(data[$_get]("newIndex")), new platform_interface_document_snapshot.DocumentSnapshotPlatform.new(firestore, StringL().as(data[$_get]("path")), new (IdentityMapOfStringL$dynamic()).from(["data", LinkedHashMapOfStringL$dynamic().from(core.Map.as(data[$_get]("data"))), "metadata", LinkedHashMapOfStringL$dynamic().from(core.Map.as(data[$_get]("metadata")))])));
    ;
  }).prototype = method_channel_document_change.MethodChannelDocumentChange.prototype;
  dart.addTypeTests(method_channel_document_change.MethodChannelDocumentChange);
  dart.addTypeCaches(method_channel_document_change.MethodChannelDocumentChange);
  dart.setLibraryUri(method_channel_document_change.MethodChannelDocumentChange, L18);
  method_channel_query_snapshot.MethodChannelQuerySnapshot = class MethodChannelQuerySnapshot extends platform_interface_query_snapshot.QuerySnapshotPlatform {};
  (method_channel_query_snapshot.MethodChannelQuerySnapshot.new = function(firestore, data) {
    method_channel_query_snapshot.MethodChannelQuerySnapshot.__proto__.new.call(this, ListOfDocumentSnapshotPlatformL().generate(core.int.as(dart.dload(data[$_get]("documents"), 'length')), dart.fn(index => new platform_interface_document_snapshot.DocumentSnapshotPlatform.new(firestore, StringL().as(dart.dsend(data[$_get]("paths"), '_get', [index])), new (IdentityMapOfStringL$dynamic()).from(["data", LinkedHashMapOfStringL$dynamic().from(core.Map.as(dart.dsend(data[$_get]("documents"), '_get', [index]))), "metadata", new (IdentityMapOfStringL$dynamic()).from(["isFromCache", dart.dsend(dart.dsend(data[$_get]("metadatas"), '_get', [index]), '_get', ["isFromCache"]), "hasPendingWrites", dart.dsend(dart.dsend(data[$_get]("metadatas"), '_get', [index]), '_get', ["hasPendingWrites"])])])), intLToDocumentSnapshotPlatformL())), ListOfDocumentChangePlatformL().generate(core.int.as(dart.dload(data[$_get]("documentChanges"), 'length')), dart.fn(index => new method_channel_document_change.MethodChannelDocumentChange.new(firestore, LinkedHashMapOfStringL$dynamic().from(core.Map.as(dart.dsend(data[$_get]("documentChanges"), '_get', [index])))), intLToMethodChannelDocumentChangeL())), new snapshot_metadata.SnapshotMetadataPlatform.new(boolL().as(dart.dsend(data[$_get]("metadata"), '_get', ["hasPendingWrites"])), boolL().as(dart.dsend(data[$_get]("metadata"), '_get', ["isFromCache"]))));
    ;
  }).prototype = method_channel_query_snapshot.MethodChannelQuerySnapshot.prototype;
  dart.addTypeTests(method_channel_query_snapshot.MethodChannelQuerySnapshot);
  dart.addTypeCaches(method_channel_query_snapshot.MethodChannelQuerySnapshot);
  dart.setLibraryUri(method_channel_query_snapshot.MethodChannelQuerySnapshot, L19);
  var _pointer$1 = dart.privateName(method_channel_query, "_pointer");
  var _copyWithParameters = dart.privateName(method_channel_query, "_copyWithParameters");
  var isCollectionGroupQuery$ = dart.privateName(method_channel_query, "MethodChannelQuery.isCollectionGroupQuery");
  method_channel_query.MethodChannelQuery = class MethodChannelQuery extends platform_interface_query.QueryPlatform {
    get isCollectionGroupQuery() {
      return this[isCollectionGroupQuery$];
    }
    set isCollectionGroupQuery(value) {
      super.isCollectionGroupQuery = value;
    }
    get path() {
      return this[_pointer$1].path;
    }
    [_copyWithParameters](parameters) {
      let t1;
      return new method_channel_query.MethodChannelQuery.new(this.firestore, this[_pointer$1].path, {isCollectionGroupQuery: this.isCollectionGroupQuery, parameters: MapOfStringL$dynamic().unmodifiable((t1 = LinkedHashMapOfStringL$dynamic().from(this.parameters), (() => {
          t1[$addAll](parameters);
          return t1;
        })()))});
    }
    endAtDocument(orders, values) {
      return this[_copyWithParameters](new (IdentityMapOfStringL$dynamic()).from(["orderBy", orders, "endAt", values, "endBefore", null]));
    }
    endAt(fields) {
      return this[_copyWithParameters](new (IdentityMapOfStringL$dynamic()).from(["endAt", fields, "endBefore", null]));
    }
    endBeforeDocument(orders, values) {
      return this[_copyWithParameters](new (IdentityMapOfStringL$dynamic()).from(["orderBy", orders, "endAt", null, "endBefore", values]));
    }
    endBefore(fields) {
      return this[_copyWithParameters](new (IdentityMapOfStringL$dynamic()).from(["endAt", null, "endBefore", fields]));
    }
    get(options = null) {
      return async.async(QuerySnapshotPlatformL(), (function* get() {
        try {
          let data = (yield method_channel_firestore.MethodChannelFirebaseFirestore.channel.invokeMapMethod(StringL(), dart.dynamic, "Query#get", new (IdentityMapOfStringL$dynamic()).from(["query", this, "firestore", this.firestore, "source", source.getSourceString(options.source)])));
          return new method_channel_query_snapshot.MethodChannelQuerySnapshot.new(this.firestore, data);
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception$.convertPlatformException(e));
        }
      }).bind(this));
    }
    limit(limit) {
      return this[_copyWithParameters](new (IdentityMapOfStringL$dynamic()).from(["limit", limit, "limitToLast", null]));
    }
    limitToLast(limit) {
      return this[_copyWithParameters](new (IdentityMapOfStringL$dynamic()).from(["limit", null, "limitToLast", limit]));
    }
    snapshots(opts) {
      let includeMetadataChanges = opts && 'includeMetadataChanges' in opts ? opts.includeMetadataChanges : false;
      if (!(includeMetadataChanges != null)) dart.assertFailed(null, L20, 129, 12, "includeMetadataChanges != null");
      let handle = method_channel_firestore.MethodChannelFirebaseFirestore.nextMethodChannelHandleId;
      let onListenComplete = CompleterOfvoid().new();
      let controller = null;
      controller = StreamControllerOfQuerySnapshotPlatformL().broadcast({onListen: dart.fn(() => async.async(core.Null, (function*() {
          method_channel_firestore.MethodChannelFirebaseFirestore.queryObservers[$_set](handle, controller);
          yield method_channel_firestore.MethodChannelFirebaseFirestore.channel.invokeMethod(dart.void, "Query#addSnapshotListener", new (IdentityMapOfStringL$dynamic()).from(["query", this, "handle", handle, "firestore", this.firestore, "includeMetadataChanges", includeMetadataChanges]));
          if (!dart.test(onListenComplete.isCompleted)) {
            onListenComplete.complete();
          }
        }).bind(this)), VoidToFutureLOfNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
          yield onListenComplete.future;
          yield method_channel_firestore.MethodChannelFirebaseFirestore.channel.invokeMethod(dart.void, "Firestore#removeListener", new (IdentityMapOfStringL$dynamic()).from(["handle", handle]));
          method_channel_firestore.MethodChannelFirebaseFirestore.queryObservers[$remove](handle);
        }), VoidToFutureLOfNull())});
      return controller.stream;
    }
    orderBy(orders) {
      return this[_copyWithParameters](new (IdentityMapOfStringL$dynamic()).from(["orderBy", orders]));
    }
    startAfterDocument(orders, values) {
      return this[_copyWithParameters](new (IdentityMapOfStringL$dynamic()).from(["orderBy", orders, "startAt", null, "startAfter", values]));
    }
    startAfter(fields) {
      return this[_copyWithParameters](new (IdentityMapOfStringL$dynamic()).from(["startAt", null, "startAfter", fields]));
    }
    startAtDocument(orders, values) {
      return this[_copyWithParameters](new (IdentityMapOfStringL$dynamic()).from(["orderBy", orders, "startAt", values, "startAfter", null]));
    }
    startAt(fields) {
      return this[_copyWithParameters](new (IdentityMapOfStringL$dynamic()).from(["startAt", fields, "startAfter", null]));
    }
    where(conditions) {
      return this[_copyWithParameters](new (IdentityMapOfStringL$dynamic()).from(["where", conditions]));
    }
  };
  (method_channel_query.MethodChannelQuery.new = function(_firestore, path, opts) {
    let parameters = opts && 'parameters' in opts ? opts.parameters : null;
    let isCollectionGroupQuery = opts && 'isCollectionGroupQuery' in opts ? opts.isCollectionGroupQuery : false;
    this[_pointer$1] = null;
    this[isCollectionGroupQuery$] = isCollectionGroupQuery;
    method_channel_query.MethodChannelQuery.__proto__.new.call(this, _firestore, parameters);
    this[_pointer$1] = new pointer.Pointer.new(path);
  }).prototype = method_channel_query.MethodChannelQuery.prototype;
  dart.addTypeTests(method_channel_query.MethodChannelQuery);
  dart.addTypeCaches(method_channel_query.MethodChannelQuery);
  dart.setMethodSignature(method_channel_query.MethodChannelQuery, () => ({
    __proto__: dart.getMethods(method_channel_query.MethodChannelQuery.__proto__),
    [_copyWithParameters]: dart.fnType(dart.legacy(method_channel_query.MethodChannelQuery), [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))])
  }));
  dart.setGetterSignature(method_channel_query.MethodChannelQuery, () => ({
    __proto__: dart.getGetters(method_channel_query.MethodChannelQuery.__proto__),
    path: dart.legacy(core.String)
  }));
  dart.setLibraryUri(method_channel_query.MethodChannelQuery, L21);
  dart.setFieldSignature(method_channel_query.MethodChannelQuery, () => ({
    __proto__: dart.getFields(method_channel_query.MethodChannelQuery.__proto__),
    isCollectionGroupQuery: dart.finalFieldType(dart.legacy(core.bool)),
    [_pointer$1]: dart.fieldType(dart.legacy(pointer.Pointer))
  }));
  var _pointer$2 = dart.privateName(method_channel_document_reference, "_pointer");
  var _name$1 = dart.privateName(source$, "_name");
  var C17;
  var GetOptions_source = dart.privateName(get_options, "GetOptions.source");
  var C16;
  method_channel_document_reference.MethodChannelDocumentReference = class MethodChannelDocumentReference extends platform_interface_document_reference.DocumentReferencePlatform {
    set(data, options = null) {
      return async.async(dart.void, (function* set() {
        let t2, t2$;
        try {
          yield method_channel_firestore.MethodChannelFirebaseFirestore.channel.invokeMethod(dart.void, "DocumentReference#set", new (IdentityMapOfStringL$dynamic()).from(["firestore", this.firestore, "reference", this, "data", data, "options", new (IdentityMapOfStringL$dynamic()).from(["merge", (t2 = options, t2 == null ? null : t2.merge), "mergeFields", (t2$ = options, t2$ == null ? null : t2$.mergeFields)])]));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception$.convertPlatformException(e));
        }
      }).bind(this));
    }
    update(data) {
      return async.async(dart.void, (function* update() {
        try {
          yield method_channel_firestore.MethodChannelFirebaseFirestore.channel.invokeMethod(dart.void, "DocumentReference#update", new (IdentityMapOfStringL$dynamic()).from(["firestore", this.firestore, "reference", this, "data", data]));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception$.convertPlatformException(e));
        }
      }).bind(this));
    }
    get(options = C16 || CT.C16) {
      return async.async(DocumentSnapshotPlatformL(), (function* get() {
        try {
          let data = (yield method_channel_firestore.MethodChannelFirebaseFirestore.channel.invokeMapMethod(StringL(), dart.dynamic, "DocumentReference#get", new (IdentityMapOfStringL$dynamic()).from(["firestore", this.firestore, "reference", this, "source", source.getSourceString(options.source)])));
          return new platform_interface_document_snapshot.DocumentSnapshotPlatform.new(this.firestore, this[_pointer$2].path, data);
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception$.convertPlatformException(e));
        }
      }).bind(this));
    }
    delete() {
      return async.async(dart.void, (function* $delete() {
        try {
          yield method_channel_firestore.MethodChannelFirebaseFirestore.channel.invokeMethod(dart.void, "DocumentReference#delete", new (IdentityMapOfStringL$dynamic()).from(["firestore", this.firestore, "reference", this]));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception$.convertPlatformException(e));
        }
      }).bind(this));
    }
    snapshots(opts) {
      let includeMetadataChanges = opts && 'includeMetadataChanges' in opts ? opts.includeMetadataChanges : false;
      if (!(includeMetadataChanges != null)) dart.assertFailed(null, L22, 99, 12, "includeMetadataChanges != null");
      let handle = method_channel_firestore.MethodChannelFirebaseFirestore.nextMethodChannelHandleId;
      let onListenComplete = CompleterOfvoid().new();
      let controller = null;
      controller = StreamControllerOfDocumentSnapshotPlatformL().broadcast({onListen: dart.fn(() => async.async(core.Null, (function*() {
          method_channel_firestore.MethodChannelFirebaseFirestore.documentObservers[$_set](handle, controller);
          yield method_channel_firestore.MethodChannelFirebaseFirestore.channel.invokeMethod(dart.void, "DocumentReference#addSnapshotListener", new (IdentityMapOfStringL$dynamic()).from(["handle", handle, "firestore", this.firestore, "reference", this, "includeMetadataChanges", includeMetadataChanges]));
          if (!dart.test(onListenComplete.isCompleted)) {
            onListenComplete.complete();
          }
        }).bind(this)), VoidToFutureLOfNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
          yield onListenComplete.future;
          yield method_channel_firestore.MethodChannelFirebaseFirestore.channel.invokeMethod(dart.void, "Firestore#removeListener", new (IdentityMapOfStringL$dynamic()).from(["handle", handle]));
          method_channel_firestore.MethodChannelFirebaseFirestore.documentObservers[$remove](handle);
        }), VoidToFutureLOfNull())});
      return controller.stream;
    }
  };
  (method_channel_document_reference.MethodChannelDocumentReference.new = function(firestore, path) {
    this[_pointer$2] = null;
    if (!(firestore != null)) dart.assertFailed(null, L22, 22, 16, "firestore != null");
    method_channel_document_reference.MethodChannelDocumentReference.__proto__.new.call(this, firestore, path);
    this[_pointer$2] = new pointer.Pointer.new(path);
  }).prototype = method_channel_document_reference.MethodChannelDocumentReference.prototype;
  dart.addTypeTests(method_channel_document_reference.MethodChannelDocumentReference);
  dart.addTypeCaches(method_channel_document_reference.MethodChannelDocumentReference);
  dart.setLibraryUri(method_channel_document_reference.MethodChannelDocumentReference, L23);
  dart.setFieldSignature(method_channel_document_reference.MethodChannelDocumentReference, () => ({
    __proto__: dart.getFields(method_channel_document_reference.MethodChannelDocumentReference.__proto__),
    [_pointer$2]: dart.fieldType(dart.legacy(pointer.Pointer))
  }));
  var _pointer$3 = dart.privateName(method_channel_collection_reference, "_pointer");
  var C18;
  var _pointer$4 = dart.privateName(method_channel_collection_reference, "MethodChannelCollectionReference._pointer");
  method_channel_collection_reference.MethodChannelCollectionReference = class MethodChannelCollectionReference extends method_channel_query.MethodChannelQuery {
    get [_pointer$3]() {
      return this[_pointer$4];
    }
    set [_pointer$3](value) {
      this[_pointer$4] = value;
    }
    get id() {
      return this[_pointer$3].id;
    }
    get parent() {
      let parentPath = this[_pointer$3].parentPath();
      return parentPath == null ? null : new method_channel_document_reference.MethodChannelDocumentReference.new(this.firestore, parentPath);
    }
    get path() {
      return this[_pointer$3].path;
    }
    doc(path = null) {
      let documentPath = null;
      if (path != null) {
        documentPath = this[_pointer$3].documentPath(path);
      } else {
        let autoId = auto_id_generator.AutoIdGenerator.autoId();
        documentPath = this[_pointer$3].documentPath(autoId);
      }
      return new method_channel_document_reference.MethodChannelDocumentReference.new(this.firestore, documentPath);
    }
    get [_pointer$0]() {
      return PointerL().as(this.noSuchMethod(new core._Invocation.getter(C18 || CT.C18)));
    }
  };
  (method_channel_collection_reference.MethodChannelCollectionReference.new = function(firestore, path) {
    this[_pointer$4] = null;
    method_channel_collection_reference.MethodChannelCollectionReference.__proto__.new.call(this, firestore, path);
    this[_pointer$3] = new pointer.Pointer.new(path);
  }).prototype = method_channel_collection_reference.MethodChannelCollectionReference.prototype;
  dart.addTypeTests(method_channel_collection_reference.MethodChannelCollectionReference);
  dart.addTypeCaches(method_channel_collection_reference.MethodChannelCollectionReference);
  method_channel_collection_reference.MethodChannelCollectionReference[dart.implements] = () => [platform_interface_collection_reference.CollectionReferencePlatform];
  dart.setMethodSignature(method_channel_collection_reference.MethodChannelCollectionReference, () => ({
    __proto__: dart.getMethods(method_channel_collection_reference.MethodChannelCollectionReference.__proto__),
    doc: dart.fnType(dart.legacy(platform_interface_document_reference.DocumentReferencePlatform), [], [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(method_channel_collection_reference.MethodChannelCollectionReference, () => ({
    __proto__: dart.getGetters(method_channel_collection_reference.MethodChannelCollectionReference.__proto__),
    id: dart.legacy(core.String),
    parent: dart.legacy(platform_interface_document_reference.DocumentReferencePlatform),
    [_pointer$0]: dart.legacy(pointer.Pointer)
  }));
  dart.setLibraryUri(method_channel_collection_reference.MethodChannelCollectionReference, L24);
  dart.setFieldSignature(method_channel_collection_reference.MethodChannelCollectionReference, () => ({
    __proto__: dart.getFields(method_channel_collection_reference.MethodChannelCollectionReference.__proto__),
    [_pointer$3]: dart.fieldType(dart.legacy(pointer.Pointer))
  }));
  var _settings = dart.privateName(method_channel_firestore, "_settings");
  var _handleSnapshotsInSync = dart.privateName(method_channel_firestore, "_handleSnapshotsInSync");
  var _handleQuerySnapshotEvent = dart.privateName(method_channel_firestore, "_handleQuerySnapshotEvent");
  var _handleQuerySnapshotError = dart.privateName(method_channel_firestore, "_handleQuerySnapshotError");
  var _handleDocumentSnapshotEvent = dart.privateName(method_channel_firestore, "_handleDocumentSnapshotEvent");
  var _handleDocumentSnapshotError = dart.privateName(method_channel_firestore, "_handleDocumentSnapshotError");
  var _handleTransactionAttempt = dart.privateName(method_channel_firestore, "_handleTransactionAttempt");
  var _handleError = dart.privateName(method_channel_firestore, "_handleError");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C19;
  var appInstance$ = dart.privateName(platform_interface_firestore, "FirebaseFirestorePlatform.appInstance");
  platform_interface_firestore.FirebaseFirestorePlatform = class FirebaseFirestorePlatform extends plugin_platform_interface.PlatformInterface {
    get appInstance() {
      return this[appInstance$];
    }
    set appInstance(value) {
      super.appInstance = value;
    }
    get app() {
      if (this.appInstance == null) {
        return firebase_core.Firebase.app();
      }
      return this.appInstance;
    }
    static instanceFor(opts) {
      let app = opts && 'app' in opts ? opts.app : null;
      return platform_interface_firestore.FirebaseFirestorePlatform.instance.delegateFor({app: app});
    }
    static get instance() {
      if (platform_interface_firestore.FirebaseFirestorePlatform._instance == null) {
        platform_interface_firestore.FirebaseFirestorePlatform._instance = new method_channel_firestore.MethodChannelFirebaseFirestore.new({app: firebase_core.Firebase.app()});
      }
      return platform_interface_firestore.FirebaseFirestorePlatform._instance;
    }
    static set instance(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, platform_interface_firestore.FirebaseFirestorePlatform._token);
      platform_interface_firestore.FirebaseFirestorePlatform._instance = instance;
    }
    delegateFor(opts) {
      let app = opts && 'app' in opts ? opts.app : null;
      dart.throw(new core.UnimplementedError.new("delegateFor() is not implemented"));
    }
    batch() {
      dart.throw(new core.UnimplementedError.new("batch() is not implemented"));
    }
    clearPersistence() {
      dart.throw(new core.UnimplementedError.new("clearPersistence() is not implemented"));
    }
    enablePersistence() {
      return async.async(dart.void, function* enablePersistence() {
        dart.throw(new core.UnimplementedError.new("enablePersistence() is not implemented"));
      });
    }
    collection(collectionPath) {
      dart.throw(new core.UnimplementedError.new("collection() is not implemented"));
    }
    collectionGroup(collectionPath) {
      dart.throw(new core.UnimplementedError.new("collectionGroup() is not implemented"));
    }
    disableNetwork() {
      dart.throw(new core.UnimplementedError.new("disableNetwork() is not implemented"));
    }
    doc(documentPath) {
      dart.throw(new core.UnimplementedError.new("doc() is not implemented"));
    }
    enableNetwork() {
      dart.throw(new core.UnimplementedError.new("enableNetwork() is not implemented"));
    }
    snapshotsInSync() {
      dart.throw(new core.UnimplementedError.new("snapshotsInSync() is not implemented"));
    }
    runTransaction(T, transactionHandler, opts) {
      let timeout = opts && 'timeout' in opts ? opts.timeout : C19 || CT.C19;
      dart.throw(new core.UnimplementedError.new("runTransaction() is not implemented"));
    }
    get settings() {
      dart.throw(new core.UnimplementedError.new("settings getter is not implemented"));
    }
    set settings(settings) {
      dart.throw(new core.UnimplementedError.new("settings setter is not implemented"));
    }
    terminate() {
      dart.throw(new core.UnimplementedError.new("terminate() is not implemented"));
    }
    waitForPendingWrites() {
      dart.throw(new core.UnimplementedError.new("waitForPendingWrites() is not implemented"));
    }
    _equals(o) {
      if (o == null) return false;
      return FirebaseFirestorePlatformL().is(o) && o.app.name == this.app.name;
    }
    get hashCode() {
      return dart.hashCode(this.toString());
    }
    toString() {
      return dart.str(dart.wrapType(FirebaseFirestorePlatformL())) + "(app: " + dart.str(this.app.name) + ")";
    }
  };
  (platform_interface_firestore.FirebaseFirestorePlatform.new = function(opts) {
    let appInstance = opts && 'appInstance' in opts ? opts.appInstance : null;
    this[appInstance$] = appInstance;
    platform_interface_firestore.FirebaseFirestorePlatform.__proto__.new.call(this, {token: platform_interface_firestore.FirebaseFirestorePlatform._token});
    ;
  }).prototype = platform_interface_firestore.FirebaseFirestorePlatform.prototype;
  dart.addTypeTests(platform_interface_firestore.FirebaseFirestorePlatform);
  dart.addTypeCaches(platform_interface_firestore.FirebaseFirestorePlatform);
  dart.setMethodSignature(platform_interface_firestore.FirebaseFirestorePlatform, () => ({
    __proto__: dart.getMethods(platform_interface_firestore.FirebaseFirestorePlatform.__proto__),
    delegateFor: dart.fnType(dart.legacy(platform_interface_firestore.FirebaseFirestorePlatform), [], {app: dart.legacy(firebase_core.FirebaseApp)}, {}),
    batch: dart.fnType(dart.legacy(platform_interface_write_batch.WriteBatchPlatform), []),
    clearPersistence: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    enablePersistence: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    collection: dart.fnType(dart.legacy(platform_interface_collection_reference.CollectionReferencePlatform), [dart.legacy(core.String)]),
    collectionGroup: dart.fnType(dart.legacy(platform_interface_query.QueryPlatform), [dart.legacy(core.String)]),
    disableNetwork: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    doc: dart.fnType(dart.legacy(platform_interface_document_reference.DocumentReferencePlatform), [dart.legacy(core.String)]),
    enableNetwork: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    snapshotsInSync: dart.fnType(dart.legacy(async.Stream$(dart.void)), []),
    runTransaction: dart.gFnType(T => [dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(platform_interface_transaction.TransactionPlatform)]))], {timeout: dart.legacy(core.Duration)}, {}]),
    terminate: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    waitForPendingWrites: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(platform_interface_firestore.FirebaseFirestorePlatform, () => ({
    __proto__: dart.getGetters(platform_interface_firestore.FirebaseFirestorePlatform.__proto__),
    app: dart.legacy(firebase_core.FirebaseApp),
    settings: dart.legacy(settings.Settings),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setSetterSignature(platform_interface_firestore.FirebaseFirestorePlatform, () => ({
    __proto__: dart.getSetters(platform_interface_firestore.FirebaseFirestorePlatform.__proto__),
    settings: dart.legacy(settings.Settings)
  }));
  dart.setLibraryUri(platform_interface_firestore.FirebaseFirestorePlatform, L26);
  dart.setFieldSignature(platform_interface_firestore.FirebaseFirestorePlatform, () => ({
    __proto__: dart.getFields(platform_interface_firestore.FirebaseFirestorePlatform.__proto__),
    appInstance: dart.finalFieldType(dart.legacy(firebase_core.FirebaseApp))
  }));
  dart.defineExtensionMethods(platform_interface_firestore.FirebaseFirestorePlatform, ['_equals', 'toString']);
  dart.defineExtensionAccessors(platform_interface_firestore.FirebaseFirestorePlatform, ['hashCode']);
  dart.defineLazy(platform_interface_firestore.FirebaseFirestorePlatform, {
    /*platform_interface_firestore.FirebaseFirestorePlatform._token*/get _token() {
      return new core.Object.new();
    },
    /*platform_interface_firestore.FirebaseFirestorePlatform._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  }, true);
  method_channel_firestore.MethodChannelFirebaseFirestore = class MethodChannelFirebaseFirestore extends platform_interface_firestore.FirebaseFirestorePlatform {
    static get nextMethodChannelHandleId() {
      let t6;
      t6 = method_channel_firestore.MethodChannelFirebaseFirestore._methodChannelHandleId;
      method_channel_firestore.MethodChannelFirebaseFirestore._methodChannelHandleId = dart.notNull(t6) + 1;
      return t6;
    }
    [_handleSnapshotsInSync]($arguments) {
      return async.async(dart.void, function* _handleSnapshotsInSync() {
        if (!dart.test(method_channel_firestore.MethodChannelFirebaseFirestore.snapshotInSyncObservers[$containsKey]($arguments[$_get]("handle")))) {
          return;
        }
        method_channel_firestore.MethodChannelFirebaseFirestore.snapshotInSyncObservers[$_get]($arguments[$_get]("handle")).add(null);
      });
    }
    [_handleQuerySnapshotEvent]($arguments) {
      return async.async(dart.void, (function* _handleQuerySnapshotEvent() {
        if (!dart.test(method_channel_firestore.MethodChannelFirebaseFirestore.queryObservers[$containsKey]($arguments[$_get]("handle")))) {
          return;
        }
        try {
          method_channel_firestore.MethodChannelFirebaseFirestore.queryObservers[$_get]($arguments[$_get]("handle")).add(new method_channel_query_snapshot.MethodChannelQuerySnapshot.new(this, MapL().as($arguments[$_get]("snapshot"))));
        } catch (e) {
          let error = dart.getThrown(e);
          this[_handleQuerySnapshotError](new _js_helper.LinkedMap.from(["handle", $arguments[$_get]("handle"), "error", error]));
        }
      }).bind(this));
    }
    [_handleQuerySnapshotError]($arguments) {
      this[_handleError](method_channel_firestore.MethodChannelFirebaseFirestore.queryObservers[$_get]($arguments[$_get]("handle")), $arguments);
    }
    [_handleDocumentSnapshotEvent]($arguments) {
      return async.async(dart.void, (function* _handleDocumentSnapshotEvent() {
        if (!dart.test(method_channel_firestore.MethodChannelFirebaseFirestore.documentObservers[$containsKey]($arguments[$_get]("handle")))) {
          return;
        }
        try {
          let snapshotMap = LinkedHashMapOfStringL$dynamic().from(core.Map.as($arguments[$_get]("snapshot")));
          let snapshot = new platform_interface_document_snapshot.DocumentSnapshotPlatform.new(this, StringL().as(snapshotMap[$_get]("path")), new (IdentityMapOfStringL$dynamic()).from(["data", snapshotMap[$_get]("data"), "metadata", snapshotMap[$_get]("metadata")]));
          method_channel_firestore.MethodChannelFirebaseFirestore.documentObservers[$_get]($arguments[$_get]("handle")).add(snapshot);
        } catch (e) {
          let error = dart.getThrown(e);
          this[_handleDocumentSnapshotError](new _js_helper.LinkedMap.from(["handle", $arguments[$_get]("handle"), "error", error]));
        }
      }).bind(this));
    }
    [_handleDocumentSnapshotError]($arguments) {
      this[_handleError](method_channel_firestore.MethodChannelFirebaseFirestore.documentObservers[$_get]($arguments[$_get]("handle")), $arguments);
    }
    [_handleTransactionAttempt]($arguments) {
      return async.async(MapLOfStringL$dynamic(), function* _handleTransactionAttempt() {
        let transactionId = intL().as($arguments[$_get]("transactionId"));
        let transaction = new method_channel_transaction.MethodChannelTransaction.new(transactionId, StringL().as($arguments[$_get]("appName")));
        let controller = method_channel_firestore.MethodChannelFirebaseFirestore._transactionStreamControllerHandlers[$_get](transactionId);
        try {
          let result = (yield method_channel_firestore.MethodChannelFirebaseFirestore._transactionHandlers[$_get](transactionId)(transaction));
          controller.add(result);
          return new (IdentityMapOfStringL$dynamic()).from(["type", "SUCCESS", "commands", transaction.commands]);
        } catch (e) {
          let error = dart.getThrown(e);
          controller.addError(error);
          return new (IdentityMapOfStringL$dynamic()).from(["type", "ERROR"]);
        }
      });
    }
    [_handleError](controller, $arguments) {
      return async.async(dart.void, function* _handleError() {
        if (controller == null) {
          return;
        }
        if (MapL().is($arguments[$_get]("error"))) {
          let errorMap = LinkedHashMapOfStringL$dynamic().from(core.Map.as($arguments[$_get]("error")));
          let exception = new firebase_core_platform_interface.FirebaseException.new({plugin: "cloud_firestore", code: StringL().as(errorMap[$_get]("code")), message: StringL().as(errorMap[$_get]("message"))});
          controller.addError(exception);
        } else {
          controller.addError($arguments[$_get]("error"));
        }
      });
    }
    delegateFor(opts) {
      let app = opts && 'app' in opts ? opts.app : null;
      return new method_channel_firestore.MethodChannelFirebaseFirestore.new({app: app});
    }
    batch() {
      return new method_channel_write_batch.MethodChannelWriteBatch.new(this);
    }
    clearPersistence() {
      return async.async(dart.void, (function* clearPersistence() {
        try {
          yield method_channel_firestore.MethodChannelFirebaseFirestore.channel.invokeMethod(dart.void, "Firestore#clearPersistence", new (IdentityMapOfStringL$dynamic()).from(["firestore", this]));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception$.convertPlatformException(e));
        }
      }).bind(this));
    }
    enablePersistence() {
      return async.async(dart.void, function* enablePersistence() {
        dart.throw(new core.UnimplementedError.new("enablePersistence() is only available for Web. Use [Settings.persistenceEnabled] for other platforms."));
      });
    }
    collection(path) {
      return new method_channel_collection_reference.MethodChannelCollectionReference.new(this, path);
    }
    collectionGroup(path) {
      return new method_channel_query.MethodChannelQuery.new(this, path, {isCollectionGroupQuery: true});
    }
    disableNetwork() {
      return async.async(dart.void, (function* disableNetwork() {
        try {
          yield method_channel_firestore.MethodChannelFirebaseFirestore.channel.invokeMethod(dart.void, "Firestore#disableNetwork", new (IdentityMapOfStringL$dynamic()).from(["firestore", this]));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception$.convertPlatformException(e));
        }
      }).bind(this));
    }
    doc(path) {
      return new method_channel_document_reference.MethodChannelDocumentReference.new(this, path);
    }
    enableNetwork() {
      return async.async(dart.void, (function* enableNetwork() {
        try {
          yield method_channel_firestore.MethodChannelFirebaseFirestore.channel.invokeMethod(dart.void, "Firestore#enableNetwork", new (IdentityMapOfStringL$dynamic()).from(["firestore", this]));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception$.convertPlatformException(e));
        }
      }).bind(this));
    }
    snapshotsInSync() {
      let handle = method_channel_firestore.MethodChannelFirebaseFirestore.nextMethodChannelHandleId;
      let controller = null;
      controller = StreamControllerOfQuerySnapshotPlatformL().broadcast({onListen: dart.fn(() => {
          method_channel_firestore.MethodChannelFirebaseFirestore.snapshotInSyncObservers[$_set](handle, controller);
          method_channel_firestore.MethodChannelFirebaseFirestore.channel.invokeMethod(intL(), "Firestore#addSnapshotsInSyncListener", new (IdentityMapOfStringL$dynamic()).from(["handle", handle, "firestore", this]));
        }, VoidToNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
          method_channel_firestore.MethodChannelFirebaseFirestore.snapshotInSyncObservers[$remove](handle);
          yield method_channel_firestore.MethodChannelFirebaseFirestore.channel.invokeMethod(dart.void, "Firestore#removeListener", new (IdentityMapOfStringL$dynamic()).from(["handle", handle]));
        }), VoidToFutureLOfNull())});
      return controller.stream;
    }
    runTransaction(T, transactionHandler, opts) {
      let timeout = opts && 'timeout' in opts ? opts.timeout : C19 || CT.C19;
      return async.async(dart.legacy(T), (function* runTransaction() {
        let t12;
        if (!(dart.notNull(timeout.inMilliseconds) > 0)) dart.assertFailed("Transaction timeout must be more than 0 milliseconds", L25, 335, 12, "timeout.inMilliseconds > 0");
        let transactionId = (t12 = method_channel_firestore.MethodChannelFirebaseFirestore._transactionHandlerId, method_channel_firestore.MethodChannelFirebaseFirestore._transactionHandlerId = dart.notNull(t12) + 1, t12);
        let streamController = async.StreamController.new();
        method_channel_firestore.MethodChannelFirebaseFirestore._transactionHandlers[$_set](transactionId, transactionHandler);
        method_channel_firestore.MethodChannelFirebaseFirestore._transactionStreamControllerHandlers[$_set](transactionId, streamController);
        let result = null;
        let exception = null;
        let subscription = streamController.stream.listen(dart.fn(data => {
          result = dart.legacy(T).as(data);
        }, ObjectLToNull()), {onError: dart.fn(e => {
            exception = e;
          }, ObjectLToNull())});
        yield method_channel_firestore.MethodChannelFirebaseFirestore.channel.invokeMethod(dart.legacy(T), "Transaction#create", new (IdentityMapOfStringL$dynamic()).from(["firestore", this, "transactionId", transactionId, "timeout", timeout.inMilliseconds])).catchError(dart.fn(e => {
          exception = e;
        }, ObjectLToNull()));
        yield subscription.cancel();
        method_channel_firestore.MethodChannelFirebaseFirestore._transactionStreamControllerHandlers[$remove](transactionId);
        if (exception != null) {
          if (PlatformExceptionL().is(exception)) {
            return async.Future$(dart.legacy(T)).error(exception$.platformExceptionToFirebaseException(PlatformExceptionL().as(exception)));
          } else {
            return async.Future$(dart.legacy(T)).error(exception);
          }
        }
        return result;
      }).bind(this));
    }
    get settings() {
      return this[_settings];
    }
    set settings(settings) {
      this[_settings] = settings;
    }
    terminate() {
      return async.async(dart.void, (function* terminate() {
        try {
          yield method_channel_firestore.MethodChannelFirebaseFirestore.channel.invokeMethod(dart.void, "Firestore#terminate", new (IdentityMapOfStringL$dynamic()).from(["firestore", this]));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception$.convertPlatformException(e));
        }
      }).bind(this));
    }
    waitForPendingWrites() {
      return async.async(dart.void, (function* waitForPendingWrites() {
        try {
          yield method_channel_firestore.MethodChannelFirebaseFirestore.channel.invokeMethod(dart.void, "Firestore#waitForPendingWrites", new (IdentityMapOfStringL$dynamic()).from(["firestore", this]));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception$.convertPlatformException(e));
        }
      }).bind(this));
    }
  };
  (method_channel_firestore.MethodChannelFirebaseFirestore.new = function(opts) {
    let app = opts && 'app' in opts ? opts.app : null;
    this[_settings] = new settings.Settings.new();
    method_channel_firestore.MethodChannelFirebaseFirestore.__proto__.new.call(this, {appInstance: app});
    if (dart.test(method_channel_firestore.MethodChannelFirebaseFirestore._initialized)) return;
    method_channel_firestore.MethodChannelFirebaseFirestore.channel.setMethodCallHandler(dart.fn(call => async.async(dart.void, (function*() {
      switch (call.method) {
        case "Firestore#snapshotsInSync":
        {
          return this[_handleSnapshotsInSync](MapL().as(call.arguments));
          break;
        }
        case "QuerySnapshot#event":
        {
          return this[_handleQuerySnapshotEvent](MapL().as(call.arguments));
          break;
        }
        case "QuerySnapshot#error":
        {
          return this[_handleQuerySnapshotError](MapL().as(call.arguments));
          break;
        }
        case "DocumentSnapshot#event":
        {
          return this[_handleDocumentSnapshotEvent](MapL().as(call.arguments));
          break;
        }
        case "DocumentSnapshot#error":
        {
          return this[_handleDocumentSnapshotError](MapL().as(call.arguments));
          break;
        }
        case "Transaction#attempt":
        {
          return this[_handleTransactionAttempt](MapL().as(call.arguments));
          break;
        }
        default:
        {
          dart.throw(new core.UnimplementedError.new(dart.str(call.method) + " has not been implemented"));
        }
      }
    }).bind(this)), MethodCallLToFutureLOfvoid()));
    method_channel_firestore.MethodChannelFirebaseFirestore._initialized = true;
  }).prototype = method_channel_firestore.MethodChannelFirebaseFirestore.prototype;
  dart.addTypeTests(method_channel_firestore.MethodChannelFirebaseFirestore);
  dart.addTypeCaches(method_channel_firestore.MethodChannelFirebaseFirestore);
  dart.setMethodSignature(method_channel_firestore.MethodChannelFirebaseFirestore, () => ({
    __proto__: dart.getMethods(method_channel_firestore.MethodChannelFirebaseFirestore.__proto__),
    [_handleSnapshotsInSync]: dart.fnType(dart.void, [dart.legacy(core.Map)]),
    [_handleQuerySnapshotEvent]: dart.fnType(dart.void, [dart.legacy(core.Map)]),
    [_handleQuerySnapshotError]: dart.fnType(dart.void, [dart.legacy(core.Map)]),
    [_handleDocumentSnapshotEvent]: dart.fnType(dart.void, [dart.legacy(core.Map)]),
    [_handleDocumentSnapshotError]: dart.fnType(dart.void, [dart.legacy(core.Map)]),
    [_handleTransactionAttempt]: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)))), [dart.legacy(core.Map)]),
    [_handleError]: dart.fnType(dart.void, [dart.legacy(async.StreamController), dart.legacy(core.Map)]),
    runTransaction: dart.gFnType(T => [dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(platform_interface_transaction.TransactionPlatform)]))], {timeout: dart.legacy(core.Duration)}, {}])
  }));
  dart.setLibraryUri(method_channel_firestore.MethodChannelFirebaseFirestore, L27);
  dart.setFieldSignature(method_channel_firestore.MethodChannelFirebaseFirestore, () => ({
    __proto__: dart.getFields(method_channel_firestore.MethodChannelFirebaseFirestore.__proto__),
    [_settings]: dart.fieldType(dart.legacy(settings.Settings))
  }));
  dart.defineLazy(method_channel_firestore.MethodChannelFirebaseFirestore, {
    /*method_channel_firestore.MethodChannelFirebaseFirestore._methodChannelHandleId*/get _methodChannelHandleId() {
      return 0;
    },
    set _methodChannelHandleId(_) {},
    /*method_channel_firestore.MethodChannelFirebaseFirestore._initialized*/get _initialized() {
      return false;
    },
    set _initialized(_) {},
    /*method_channel_firestore.MethodChannelFirebaseFirestore.channel*/get channel() {
      return new platform_channel.MethodChannel.new("plugins.flutter.io/firebase_firestore", new message_codecs.StandardMethodCodec.new(new firestore_message_codec.FirestoreMessageCodec.new()));
    },
    set channel(_) {},
    /*method_channel_firestore.MethodChannelFirebaseFirestore.queryObservers*/get queryObservers() {
      return new (IdentityMapOfintL$StreamControllerLOfQuerySnapshotPlatformL()).new();
    },
    /*method_channel_firestore.MethodChannelFirebaseFirestore.documentObservers*/get documentObservers() {
      return new (IdentityMapOfintL$StreamControllerLOfDocumentSnapshotPlatformL()).new();
    },
    /*method_channel_firestore.MethodChannelFirebaseFirestore.snapshotInSyncObservers*/get snapshotInSyncObservers() {
      return new (IdentityMapOfintL$StreamControllerLOfvoid()).new();
    },
    /*method_channel_firestore.MethodChannelFirebaseFirestore._transactionHandlers*/get _transactionHandlers() {
      return new (IdentityMapOfintL$TransactionPlatformLToLFutureL()).new();
    },
    /*method_channel_firestore.MethodChannelFirebaseFirestore._transactionStreamControllerHandlers*/get _transactionStreamControllerHandlers() {
      return new (IdentityMapOfintL$StreamControllerL()).new();
    },
    /*method_channel_firestore.MethodChannelFirebaseFirestore._transactionHandlerId*/get _transactionHandlerId() {
      return 0;
    },
    set _transactionHandlerId(_) {}
  }, true);
  cloud_firestore_platform_interface.isValidCollectionPath = function isValidCollectionPath(collectionPath) {
    return new pointer.Pointer.new(collectionPath).isCollection();
  };
  cloud_firestore_platform_interface.isValidDocumentPath = function isValidDocumentPath(documentPath) {
    return new pointer.Pointer.new(documentPath).isDocument();
  };
  dart.trackLibraries("packages/cloud_firestore_platform_interface/src/platform_interface/platform_interface_write_batch.dart", {
    "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_write_batch.dart": platform_interface_write_batch,
    "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_transaction.dart": platform_interface_transaction,
    "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_query_snapshot.dart": platform_interface_query_snapshot,
    "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_query.dart": platform_interface_query,
    "package:cloud_firestore_platform_interface/src/method_channel/method_channel_field_value_factory.dart": method_channel_field_value_factory,
    "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_field_value_factory.dart": platform_interface_field_value_factory,
    "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_document_snapshot.dart": platform_interface_document_snapshot,
    "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_document_reference.dart": platform_interface_document_reference,
    "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_document_change.dart": platform_interface_document_change,
    "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_collection_reference.dart": platform_interface_collection_reference,
    "package:cloud_firestore_platform_interface/src/method_channel/method_channel_field_value.dart": method_channel_field_value,
    "package:cloud_firestore_platform_interface/src/method_channel/utils/firestore_message_codec.dart": firestore_message_codec,
    "package:cloud_firestore_platform_interface/src/method_channel/method_channel_write_batch.dart": method_channel_write_batch,
    "package:cloud_firestore_platform_interface/src/method_channel/method_channel_transaction.dart": method_channel_transaction,
    "package:cloud_firestore_platform_interface/src/method_channel/method_channel_document_change.dart": method_channel_document_change,
    "package:cloud_firestore_platform_interface/src/method_channel/method_channel_query_snapshot.dart": method_channel_query_snapshot,
    "package:cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart": method_channel_query,
    "package:cloud_firestore_platform_interface/src/method_channel/method_channel_document_reference.dart": method_channel_document_reference,
    "package:cloud_firestore_platform_interface/src/method_channel/method_channel_collection_reference.dart": method_channel_collection_reference,
    "package:cloud_firestore_platform_interface/src/method_channel/method_channel_firestore.dart": method_channel_firestore,
    "package:cloud_firestore_platform_interface/src/platform_interface/platform_interface_firestore.dart": platform_interface_firestore,
    "package:cloud_firestore_platform_interface/cloud_firestore_platform_interface.dart": cloud_firestore_platform_interface
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["platform_interface_write_batch.dart","platform_interface_transaction.dart","platform_interface_query_snapshot.dart","platform_interface_query.dart","platform_interface_field_value_factory.dart","../method_channel/method_channel_field_value_factory.dart","platform_interface_document_snapshot.dart","platform_interface_document_reference.dart","platform_interface_document_change.dart","platform_interface_collection_reference.dart","../method_channel/method_channel_field_value.dart","../method_channel/utils/firestore_message_codec.dart","../method_channel/method_channel_write_batch.dart","../method_channel/method_channel_transaction.dart","../method_channel/method_channel_document_change.dart","../method_channel/method_channel_query_snapshot.dart","../method_channel/method_channel_query.dart","../method_channel/method_channel_document_reference.dart","../method_channel/method_channel_collection_reference.dart","platform_interface_firestore.dart","../method_channel/method_channel_firestore.dart","../../cloud_firestore_platform_interface.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../packages/cloud_firestore_platform_interface/src/platform_interface/platform_interface_write_batch.dart.lib.js"}');
  // Exports:
  return {
    src__platform_interface__platform_interface_write_batch: platform_interface_write_batch,
    src__platform_interface__platform_interface_transaction: platform_interface_transaction,
    src__platform_interface__platform_interface_query_snapshot: platform_interface_query_snapshot,
    src__platform_interface__platform_interface_query: platform_interface_query,
    src__method_channel__method_channel_field_value_factory: method_channel_field_value_factory,
    src__platform_interface__platform_interface_field_value_factory: platform_interface_field_value_factory,
    src__platform_interface__platform_interface_document_snapshot: platform_interface_document_snapshot,
    src__platform_interface__platform_interface_document_reference: platform_interface_document_reference,
    src__platform_interface__platform_interface_document_change: platform_interface_document_change,
    src__platform_interface__platform_interface_collection_reference: platform_interface_collection_reference,
    src__method_channel__method_channel_field_value: method_channel_field_value,
    src__method_channel__utils__firestore_message_codec: firestore_message_codec,
    src__method_channel__method_channel_write_batch: method_channel_write_batch,
    src__method_channel__method_channel_transaction: method_channel_transaction,
    src__method_channel__method_channel_document_change: method_channel_document_change,
    src__method_channel__method_channel_query_snapshot: method_channel_query_snapshot,
    src__method_channel__method_channel_query: method_channel_query,
    src__method_channel__method_channel_document_reference: method_channel_document_reference,
    src__method_channel__method_channel_collection_reference: method_channel_collection_reference,
    src__method_channel__method_channel_firestore: method_channel_firestore,
    src__platform_interface__platform_interface_firestore: platform_interface_firestore,
    cloud_firestore_platform_interface: cloud_firestore_platform_interface
  };
}));

//# sourceMappingURL=platform_interface_write_batch.dart.lib.js.map
