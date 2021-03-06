define(['dart_sdk', 'packages/cloud_firestore_web/src/utils/exception.dart', 'packages/cloud_firestore_platform_interface/src/platform_interface/platform_interface_write_batch.dart', 'packages/firebase/src/storage.dart', 'packages/cloud_firestore_platform_interface/src/set_options.dart', 'packages/cloud_firestore_web/src/field_value_web.dart', 'packages/cloud_firestore_platform_interface/src/platform_interface/platform_interface_field_value.dart', 'packages/cloud_firestore_platform_interface/src/field_path.dart', 'packages/cloud_firestore_platform_interface/src/timestamp.dart', 'packages/cloud_firestore_platform_interface/src/geo_point.dart', 'packages/cloud_firestore_platform_interface/src/blob.dart', 'packages/cloud_firestore_platform_interface/src/snapshot_metadata.dart', 'packages/cloud_firestore_platform_interface/src/internal/pointer.dart', 'packages/firebase/src/top_level.dart'], (function load__packages__cloud_firestore_web__src__write_batch_web_dart(dart_sdk, packages__cloud_firestore_web__src__utils__exception$46dart, packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart, packages__firebase__src__storage$46dart, packages__cloud_firestore_platform_interface__src__set_options$46dart, packages__cloud_firestore_web__src__field_value_web$46dart, packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_field_value$46dart, packages__cloud_firestore_platform_interface__src__field_path$46dart, packages__cloud_firestore_platform_interface__src__timestamp$46dart, packages__cloud_firestore_platform_interface__src__geo_point$46dart, packages__cloud_firestore_platform_interface__src__blob$46dart, packages__cloud_firestore_platform_interface__src__snapshot_metadata$46dart, packages__cloud_firestore_platform_interface__src__internal__pointer$46dart, packages__firebase__src__top_level$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const exception = packages__cloud_firestore_web__src__utils__exception$46dart.src__utils__exception;
  const platform_interface_write_batch = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.src__platform_interface__platform_interface_write_batch;
  const platform_interface_document_snapshot = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.src__platform_interface__platform_interface_document_snapshot;
  const platform_interface_transaction = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.src__platform_interface__platform_interface_transaction;
  const platform_interface_firestore = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.src__platform_interface__platform_interface_firestore;
  const platform_interface_field_value_factory = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.src__platform_interface__platform_interface_field_value_factory;
  const platform_interface_query_snapshot = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.src__platform_interface__platform_interface_query_snapshot;
  const platform_interface_query = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.src__platform_interface__platform_interface_query;
  const platform_interface_document_change = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.src__platform_interface__platform_interface_document_change;
  const platform_interface_document_reference = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.src__platform_interface__platform_interface_document_reference;
  const platform_interface_collection_reference = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.src__platform_interface__platform_interface_collection_reference;
  const firestore = packages__firebase__src__storage$46dart.src__firestore;
  const set_options = packages__cloud_firestore_platform_interface__src__set_options$46dart.src__set_options;
  const field_value_web = packages__cloud_firestore_web__src__field_value_web$46dart.src__field_value_web;
  const platform_interface_field_value = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_field_value$46dart.src__platform_interface__platform_interface_field_value;
  const field_path = packages__cloud_firestore_platform_interface__src__field_path$46dart.src__field_path;
  const timestamp = packages__cloud_firestore_platform_interface__src__timestamp$46dart.src__timestamp;
  const geo_point = packages__cloud_firestore_platform_interface__src__geo_point$46dart.src__geo_point;
  const blob = packages__cloud_firestore_platform_interface__src__blob$46dart.src__blob;
  const snapshot_metadata = packages__cloud_firestore_platform_interface__src__snapshot_metadata$46dart.src__snapshot_metadata;
  const pointer = packages__cloud_firestore_platform_interface__src__internal__pointer$46dart.src__internal__pointer;
  const top_level = packages__firebase__src__top_level$46dart.src__top_level;
  var write_batch_web = Object.create(dart.library);
  var transaction_web = Object.create(dart.library);
  var field_value_factory_web = Object.create(dart.library);
  var query_web = Object.create(dart.library);
  var codec_utility = Object.create(dart.library);
  var web_utils = Object.create(dart.library);
  var document_reference_web = Object.create(dart.library);
  var collection_reference_web = Object.create(dart.library);
  var cloud_firestore_web = Object.create(dart.library);
  var $addAll = dartx.addAll;
  var $_get = dartx._get;
  var $updateAll = dartx.updateAll;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $length = dartx.length;
  var $toLowerCase = dartx.toLowerCase;
  dart._checkModuleNullSafetyMode(false);
  var DocumentSnapshotPlatformL = () => (DocumentSnapshotPlatformL = dart.constFn(dart.legacy(platform_interface_document_snapshot.DocumentSnapshotPlatform)))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(StringL(), dart.dynamic)))();
  var LinkedHashMapOfStringL$dynamic = () => (LinkedHashMapOfStringL$dynamic = dart.constFn(collection.LinkedHashMap$(StringL(), dart.dynamic)))();
  var IterableL = () => (IterableL = dart.constFn(dart.legacy(core.Iterable)))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var QuerySnapshotPlatformL = () => (QuerySnapshotPlatformL = dart.constFn(dart.legacy(platform_interface_query_snapshot.QuerySnapshotPlatform)))();
  var QuerySnapshotL = () => (QuerySnapshotL = dart.constFn(dart.legacy(firestore.QuerySnapshot)))();
  var QuerySnapshotLToQuerySnapshotPlatformL = () => (QuerySnapshotLToQuerySnapshotPlatformL = dart.constFn(dart.fnType(QuerySnapshotPlatformL(), [QuerySnapshotL()])))();
  var dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var StringLAnddynamicTodynamic = () => (StringLAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [StringL(), dart.dynamic])))();
  var dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  var FieldValuePlatformL = () => (FieldValuePlatformL = dart.constFn(dart.legacy(platform_interface_field_value.FieldValuePlatform)))();
  var FieldValueWebL = () => (FieldValueWebL = dart.constFn(dart.legacy(field_value_web.FieldValueWeb)))();
  var FieldPathL = () => (FieldPathL = dart.constFn(dart.legacy(field_path.FieldPath)))();
  var TimestampL = () => (TimestampL = dart.constFn(dart.legacy(timestamp.Timestamp)))();
  var GeoPointL = () => (GeoPointL = dart.constFn(dart.legacy(geo_point.GeoPoint)))();
  var BlobL = () => (BlobL = dart.constFn(dart.legacy(blob.Blob)))();
  var DocumentReferenceWebL = () => (DocumentReferenceWebL = dart.constFn(dart.legacy(document_reference_web.DocumentReferenceWeb)))();
  var MapLOfStringL$dynamic = () => (MapLOfStringL$dynamic = dart.constFn(dart.legacy(MapOfStringL$dynamic())))();
  var DateTimeL = () => (DateTimeL = dart.constFn(dart.legacy(core.DateTime)))();
  var DocumentReferenceL = () => (DocumentReferenceL = dart.constFn(dart.legacy(firestore.DocumentReference)))();
  var FirebaseFirestoreWebL = () => (FirebaseFirestoreWebL = dart.constFn(dart.legacy(cloud_firestore_web.FirebaseFirestoreWeb)))();
  var DocumentSnapshotL = () => (DocumentSnapshotL = dart.constFn(dart.legacy(firestore.DocumentSnapshot)))();
  var DocumentSnapshotLToDocumentSnapshotPlatformL = () => (DocumentSnapshotLToDocumentSnapshotPlatformL = dart.constFn(dart.fnType(DocumentSnapshotPlatformL(), [DocumentSnapshotL()])))();
  var DocumentChangePlatformL = () => (DocumentChangePlatformL = dart.constFn(dart.legacy(platform_interface_document_change.DocumentChangePlatform)))();
  var DocumentChangeL = () => (DocumentChangeL = dart.constFn(dart.legacy(firestore.DocumentChange)))();
  var DocumentChangeLToDocumentChangePlatformL = () => (DocumentChangeLToDocumentChangePlatformL = dart.constFn(dart.fnType(DocumentChangePlatformL(), [DocumentChangeL()])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var IdentityMapOfStringL$boolL = () => (IdentityMapOfStringL$boolL = dart.constFn(_js_helper.IdentityMap$(StringL(), boolL())))();
  var PointerL = () => (PointerL = dart.constFn(dart.legacy(pointer.Pointer)))();
  var TransactionL = () => (TransactionL = dart.constFn(dart.legacy(firestore.Transaction)))();
  const CT = Object.create(null);
  var L0 = "package:cloud_firestore_web/src/write_batch_web.dart";
  var L2 = "package:cloud_firestore_web/src/field_value_factory_web.dart";
  var L5 = "package:cloud_firestore_web/src/document_reference_web.dart";
  var L1 = "package:cloud_firestore_web/src/transaction_web.dart";
  var L7 = "package:cloud_firestore_web/cloud_firestore_web.dart";
  var L6 = "package:cloud_firestore_web/src/collection_reference_web.dart";
  var L3 = "package:cloud_firestore_web/src/query_web.dart";
  var L4 = "package:cloud_firestore_web/src/utils/codec_utility.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(codec_utility.CodecUtility.valueEncode, dynamicTodynamic());
    },
    get C1() {
      return C1 = dart.fn(codec_utility.CodecUtility.valueDecode, dynamicTodynamic());
    },
    get C2() {
      return C2 = dart.const(new _js_helper.PrivateSymbol.new('_pointer', _pointer));
    },
    get C3() {
      return C3 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 30000000
      });
    }
  }, false);
  var _webFirestoreDelegate$ = dart.privateName(write_batch_web, "_webFirestoreDelegate");
  var _webWriteBatchDelegate = dart.privateName(write_batch_web, "_webWriteBatchDelegate");
  write_batch_web.WriteBatchWeb = class WriteBatchWeb extends platform_interface_write_batch.WriteBatchPlatform {
    commit() {
      return async.async(dart.void, (function* commit() {
        try {
          yield this[_webWriteBatchDelegate].commit();
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception.convertPlatformException(e));
        }
      }).bind(this));
    }
    delete(documentPath) {
      this[_webWriteBatchDelegate].delete(this[_webFirestoreDelegate$].doc(documentPath));
    }
    set(documentPath, data, options = null) {
      this[_webWriteBatchDelegate].set(this[_webFirestoreDelegate$].doc(documentPath), codec_utility.CodecUtility.encodeMapData(data), options != null ? {merge: options.merge} : null);
    }
    update(documentPath, data) {
      this[_webWriteBatchDelegate].update(this[_webFirestoreDelegate$].doc(documentPath), {data: codec_utility.CodecUtility.encodeMapData(data)});
    }
  };
  (write_batch_web.WriteBatchWeb.new = function(_webFirestoreDelegate) {
    this[_webFirestoreDelegate$] = _webFirestoreDelegate;
    this[_webWriteBatchDelegate] = _webFirestoreDelegate.batch();
    write_batch_web.WriteBatchWeb.__proto__.new.call(this);
    ;
  }).prototype = write_batch_web.WriteBatchWeb.prototype;
  dart.addTypeTests(write_batch_web.WriteBatchWeb);
  dart.addTypeCaches(write_batch_web.WriteBatchWeb);
  dart.setLibraryUri(write_batch_web.WriteBatchWeb, L0);
  dart.setFieldSignature(write_batch_web.WriteBatchWeb, () => ({
    __proto__: dart.getFields(write_batch_web.WriteBatchWeb.__proto__),
    [_webFirestoreDelegate$]: dart.finalFieldType(dart.legacy(firestore.Firestore)),
    [_webWriteBatchDelegate]: dart.fieldType(dart.legacy(firestore.WriteBatch))
  }));
  var _firestore$ = dart.privateName(transaction_web, "_firestore");
  var _webFirestoreDelegate$0 = dart.privateName(transaction_web, "_webFirestoreDelegate");
  var _webTransactionDelegate$ = dart.privateName(transaction_web, "_webTransactionDelegate");
  transaction_web.TransactionWeb = class TransactionWeb extends platform_interface_transaction.TransactionPlatform {
    delete(documentPath) {
      this[_webTransactionDelegate$].delete(this[_webFirestoreDelegate$0].doc(documentPath));
      return this;
    }
    get(documentPath) {
      return async.async(DocumentSnapshotPlatformL(), (function* get() {
        try {
          let webDocumentSnapshot = (yield this[_webTransactionDelegate$].get(this[_webFirestoreDelegate$0].doc(documentPath)));
          return web_utils.convertWebDocumentSnapshot(this[_firestore$], webDocumentSnapshot);
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception.convertPlatformException(e));
        }
      }).bind(this));
    }
    set(documentPath, data, options = null) {
      this[_webTransactionDelegate$].set(this[_webFirestoreDelegate$0].doc(documentPath), codec_utility.CodecUtility.encodeMapData(data), options != null ? {merge: options.merge} : null);
      return this;
    }
    update(documentPath, data) {
      this[_webTransactionDelegate$].update(this[_webFirestoreDelegate$0].doc(documentPath), {data: codec_utility.CodecUtility.encodeMapData(data)});
      return this;
    }
  };
  (transaction_web.TransactionWeb.new = function(_firestore, _webFirestoreDelegate, _webTransactionDelegate) {
    this[_firestore$] = _firestore;
    this[_webFirestoreDelegate$0] = _webFirestoreDelegate;
    this[_webTransactionDelegate$] = _webTransactionDelegate;
    transaction_web.TransactionWeb.__proto__.new.call(this);
    ;
  }).prototype = transaction_web.TransactionWeb.prototype;
  dart.addTypeTests(transaction_web.TransactionWeb);
  dart.addTypeCaches(transaction_web.TransactionWeb);
  dart.setMethodSignature(transaction_web.TransactionWeb, () => ({
    __proto__: dart.getMethods(transaction_web.TransactionWeb.__proto__),
    delete: dart.fnType(dart.legacy(transaction_web.TransactionWeb), [dart.legacy(core.String)]),
    set: dart.fnType(dart.legacy(transaction_web.TransactionWeb), [dart.legacy(core.String), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))], [dart.legacy(set_options.SetOptions)]),
    update: dart.fnType(dart.legacy(transaction_web.TransactionWeb), [dart.legacy(core.String), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))])
  }));
  dart.setLibraryUri(transaction_web.TransactionWeb, L1);
  dart.setFieldSignature(transaction_web.TransactionWeb, () => ({
    __proto__: dart.getFields(transaction_web.TransactionWeb.__proto__),
    [_webFirestoreDelegate$0]: dart.finalFieldType(dart.legacy(firestore.Firestore)),
    [_webTransactionDelegate$]: dart.finalFieldType(dart.legacy(firestore.Transaction)),
    [_firestore$]: dart.fieldType(dart.legacy(platform_interface_firestore.FirebaseFirestorePlatform))
  }));
  field_value_factory_web.FieldValueFactoryWeb = class FieldValueFactoryWeb extends platform_interface_field_value_factory.FieldValueFactoryPlatform {
    arrayRemove(elements) {
      return new field_value_web.FieldValueWeb.new(firestore.FieldValue.arrayRemove(ListL().as(codec_utility.CodecUtility.valueEncode(elements))));
    }
    arrayUnion(elements) {
      return new field_value_web.FieldValueWeb.new(firestore.FieldValue.arrayUnion(ListL().as(codec_utility.CodecUtility.valueEncode(elements))));
    }
    delete() {
      return new field_value_web.FieldValueWeb.new(firestore.FieldValue.delete());
    }
    increment(value) {
      return new field_value_web.FieldValueWeb.new(firestore.FieldValue.increment(value));
    }
    serverTimestamp() {
      return new field_value_web.FieldValueWeb.new(firestore.FieldValue.serverTimestamp());
    }
  };
  (field_value_factory_web.FieldValueFactoryWeb.new = function() {
    field_value_factory_web.FieldValueFactoryWeb.__proto__.new.call(this);
    ;
  }).prototype = field_value_factory_web.FieldValueFactoryWeb.prototype;
  dart.addTypeTests(field_value_factory_web.FieldValueFactoryWeb);
  dart.addTypeCaches(field_value_factory_web.FieldValueFactoryWeb);
  dart.setMethodSignature(field_value_factory_web.FieldValueFactoryWeb, () => ({
    __proto__: dart.getMethods(field_value_factory_web.FieldValueFactoryWeb.__proto__),
    arrayRemove: dart.fnType(dart.legacy(field_value_web.FieldValueWeb), [dart.legacy(core.List)]),
    arrayUnion: dart.fnType(dart.legacy(field_value_web.FieldValueWeb), [dart.legacy(core.List)]),
    delete: dart.fnType(dart.legacy(field_value_web.FieldValueWeb), []),
    increment: dart.fnType(dart.legacy(field_value_web.FieldValueWeb), [dart.legacy(core.num)]),
    serverTimestamp: dart.fnType(dart.legacy(field_value_web.FieldValueWeb), [])
  }));
  dart.setLibraryUri(field_value_factory_web.FieldValueFactoryWeb, L2);
  var _firestore$0 = dart.privateName(query_web, "_firestore");
  var _path$ = dart.privateName(query_web, "_path");
  var _webQuery$ = dart.privateName(query_web, "_webQuery");
  var _copyWithParameters = dart.privateName(query_web, "_copyWithParameters");
  var _buildWebQueryWithParameters = dart.privateName(query_web, "_buildWebQueryWithParameters");
  var isCollectionGroupQuery$ = dart.privateName(query_web, "QueryWeb.isCollectionGroupQuery");
  query_web.QueryWeb = class QueryWeb extends platform_interface_query.QueryPlatform {
    get isCollectionGroupQuery() {
      return this[isCollectionGroupQuery$];
    }
    set isCollectionGroupQuery(value) {
      super.isCollectionGroupQuery = value;
    }
    [_copyWithParameters](parameters) {
      let t2;
      return new query_web.QueryWeb.new(this[_firestore$0], this[_path$], this[_webQuery$], {isCollectionGroupQuery: this.isCollectionGroupQuery, parameters: MapOfStringL$dynamic().unmodifiable((t2 = LinkedHashMapOfStringL$dynamic().from(this.parameters), (() => {
          t2[$addAll](parameters);
          return t2;
        })()))});
    }
    [_buildWebQueryWithParameters]() {
      let query = this[_webQuery$];
      for (let t2 of IterableL().as(this.parameters[$_get]("orderBy"))) {
        let order = ListL().as(t2);
        query = query.orderBy(codec_utility.CodecUtility.valueEncode(order[$_get](0)), dart.dtest(order[$_get](1)) ? "desc" : "asc");
      }
      if (this.parameters[$_get]("startAt") != null) {
        query = query.startAt({fieldValues: ListL().as(codec_utility.CodecUtility.valueEncode(this.parameters[$_get]("startAt")))});
      }
      if (this.parameters[$_get]("startAfter") != null) {
        query = query.startAfter({fieldValues: ListL().as(codec_utility.CodecUtility.valueEncode(this.parameters[$_get]("startAfter")))});
      }
      if (this.parameters[$_get]("endAt") != null) {
        query = query.endAt({fieldValues: ListL().as(codec_utility.CodecUtility.valueEncode(this.parameters[$_get]("endAt")))});
      }
      if (this.parameters[$_get]("endBefore") != null) {
        query = query.endBefore({fieldValues: ListL().as(codec_utility.CodecUtility.valueEncode(this.parameters[$_get]("endBefore")))});
      }
      if (this.parameters[$_get]("limit") != null) {
        query = query.limit(numL().as(this.parameters[$_get]("limit")));
      }
      for (let t3 of IterableL().as(this.parameters[$_get]("where"))) {
        let condition = ListL().as(t3);
        let fieldPath = codec_utility.CodecUtility.valueEncode(condition[$_get](0));
        let opStr = StringL().as(condition[$_get](1));
        let value = codec_utility.CodecUtility.valueEncode(condition[$_get](2));
        query = query.where(fieldPath, opStr, value);
      }
      return query;
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
          return web_utils.convertWebQuerySnapshot(this.firestore, yield this[_buildWebQueryWithParameters]().get());
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception.convertPlatformException(e));
        }
      }).bind(this));
    }
    limit(limit) {
      return this[_copyWithParameters](new (IdentityMapOfStringL$dynamic()).from(["limit", limit, "limitToLast", null]));
    }
    snapshots(opts) {
      let includeMetadataChanges = opts && 'includeMetadataChanges' in opts ? opts.includeMetadataChanges : false;
      let querySnapshots = null;
      if (dart.test(includeMetadataChanges)) {
        querySnapshots = this[_buildWebQueryWithParameters]().onSnapshotMetadata;
      } else {
        querySnapshots = this[_buildWebQueryWithParameters]().onSnapshot;
      }
      return querySnapshots.map(QuerySnapshotPlatformL(), dart.fn(webQuerySnapshot => web_utils.convertWebQuerySnapshot(this.firestore, webQuerySnapshot), QuerySnapshotLToQuerySnapshotPlatformL())).handleError(dart.fn(e => {
        dart.throw(exception.convertPlatformException(e));
      }, dynamicToNull()));
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
  (query_web.QueryWeb.new = function(_firestore, _path, _webQuery, opts) {
    let parameters = opts && 'parameters' in opts ? opts.parameters : null;
    let isCollectionGroupQuery = opts && 'isCollectionGroupQuery' in opts ? opts.isCollectionGroupQuery : false;
    this[_firestore$0] = _firestore;
    this[_path$] = _path;
    this[_webQuery$] = _webQuery;
    this[isCollectionGroupQuery$] = isCollectionGroupQuery;
    query_web.QueryWeb.__proto__.new.call(this, _firestore, parameters);
    ;
  }).prototype = query_web.QueryWeb.prototype;
  dart.addTypeTests(query_web.QueryWeb);
  dart.addTypeCaches(query_web.QueryWeb);
  dart.setMethodSignature(query_web.QueryWeb, () => ({
    __proto__: dart.getMethods(query_web.QueryWeb.__proto__),
    [_copyWithParameters]: dart.fnType(dart.legacy(query_web.QueryWeb), [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))]),
    [_buildWebQueryWithParameters]: dart.fnType(dart.legacy(firestore.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")))), [])
  }));
  dart.setLibraryUri(query_web.QueryWeb, L3);
  dart.setFieldSignature(query_web.QueryWeb, () => ({
    __proto__: dart.getFields(query_web.QueryWeb.__proto__),
    [_webQuery$]: dart.finalFieldType(dart.legacy(firestore.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query"))))),
    [_firestore$0]: dart.finalFieldType(dart.legacy(platform_interface_firestore.FirebaseFirestorePlatform)),
    [_path$]: dart.finalFieldType(dart.legacy(core.String)),
    isCollectionGroupQuery: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var C0;
  var C1;
  codec_utility.CodecUtility = class CodecUtility extends core.Object {
    static encodeMapData(data) {
      if (data == null) {
        return null;
      }
      let output = LinkedHashMapOfStringL$dynamic().from(data);
      output[$updateAll](dart.fn((key, value) => codec_utility.CodecUtility.valueEncode(value), StringLAnddynamicTodynamic()));
      return output;
    }
    static encodeArrayData(data) {
      if (data == null) {
        return null;
      }
      return core.List.from(data)[$map](dart.dynamic, C0 || CT.C0)[$toList]();
    }
    static valueEncode(value) {
      if (FieldValuePlatformL().is(value)) {
        let delegate = FieldValueWebL().as(platform_interface_field_value.FieldValuePlatform.getDelegate(value));
        return delegate.data;
      } else if (FieldPathL().is(value)) {
        let components = value.components;
        let length = components[$length];
        switch (length) {
          case 1:
          {
            return new dart.global.firebase.firestore.FieldPath(components[$_get](0));
          }
          case 2:
          {
            return new dart.global.firebase.firestore.FieldPath(components[$_get](0), components[$_get](1));
          }
          case 3:
          {
            return new dart.global.firebase.firestore.FieldPath(components[$_get](0), components[$_get](1), components[$_get](2));
          }
          case 4:
          {
            return new dart.global.firebase.firestore.FieldPath(components[$_get](0), components[$_get](1), components[$_get](2), components[$_get](3));
          }
          case 5:
          {
            return new dart.global.firebase.firestore.FieldPath(components[$_get](0), components[$_get](1), components[$_get](2), components[$_get](3), components[$_get](4));
          }
          case 6:
          {
            return new dart.global.firebase.firestore.FieldPath(components[$_get](0), components[$_get](1), components[$_get](2), components[$_get](3), components[$_get](4), components[$_get](5));
          }
          case 7:
          {
            return new dart.global.firebase.firestore.FieldPath(components[$_get](0), components[$_get](1), components[$_get](2), components[$_get](3), components[$_get](4), components[$_get](5), components[$_get](6));
          }
          case 8:
          {
            return new dart.global.firebase.firestore.FieldPath(components[$_get](0), components[$_get](1), components[$_get](2), components[$_get](3), components[$_get](4), components[$_get](5), components[$_get](6), components[$_get](7));
          }
          case 9:
          {
            return new dart.global.firebase.firestore.FieldPath(components[$_get](0), components[$_get](1), components[$_get](2), components[$_get](3), components[$_get](4), components[$_get](5), components[$_get](6), components[$_get](7), components[$_get](8));
          }
          case 10:
          {
            return new dart.global.firebase.firestore.FieldPath(components[$_get](0), components[$_get](1), components[$_get](2), components[$_get](3), components[$_get](4), components[$_get](5), components[$_get](6), components[$_get](7), components[$_get](8), components[$_get](9));
          }
          default:
          {
            dart.throw(core.Exception.new("Firestore web FieldPath only supports 10 levels deep field paths"));
          }
        }
      } else if (dart.equals(value, field_path.FieldPath.documentId)) {
        return dart.global.firebase.firestore.FieldPath.documentId();
      } else if (TimestampL().is(value)) {
        return value.toDate();
      } else if (GeoPointL().is(value)) {
        return new dart.global.firebase.firestore.GeoPoint(value.latitude, value.longitude);
      } else if (BlobL().is(value)) {
        return dart.global.firebase.firestore.Blob.fromUint8Array(value.bytes);
      } else if (DocumentReferenceWebL().is(value)) {
        return value.firestoreWeb.doc(value.path);
      } else if (MapLOfStringL$dynamic().is(value)) {
        return codec_utility.CodecUtility.encodeMapData(value);
      } else if (ListL().is(value)) {
        return codec_utility.CodecUtility.encodeArrayData(value);
      }
      return value;
    }
    static decodeMapData(data) {
      if (data == null) {
        return null;
      }
      let output = LinkedHashMapOfStringL$dynamic().from(data);
      output[$updateAll](dart.fn((key, value) => codec_utility.CodecUtility.valueDecode(value), StringLAnddynamicTodynamic()));
      return output;
    }
    static decodeArrayData(data) {
      if (data == null) {
        return null;
      }
      return core.List.from(data)[$map](dart.dynamic, C1 || CT.C1)[$toList]();
    }
    static valueDecode(value) {
      if (dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.GeoPoint, "firebase.firestore.GeoPoint")).is(value)) {
        return new geo_point.GeoPoint.new(value.latitude, value.longitude);
      } else if (DateTimeL().is(value)) {
        return timestamp.Timestamp.fromDate(value);
      } else if (dart.legacy(dart.anonymousJSType("Blob")).is(value)) {
        return new blob.Blob.new(value.toUint8Array());
      } else if (DocumentReferenceL().is(value)) {
        return FirebaseFirestoreWebL().as(platform_interface_firestore.FirebaseFirestorePlatform.instance).doc(value.path);
      } else if (MapLOfStringL$dynamic().is(value)) {
        return codec_utility.CodecUtility.decodeMapData(value);
      } else if (ListL().is(value)) {
        return codec_utility.CodecUtility.decodeArrayData(value);
      }
      return value;
    }
  };
  (codec_utility.CodecUtility.new = function() {
    ;
  }).prototype = codec_utility.CodecUtility.prototype;
  dart.addTypeTests(codec_utility.CodecUtility);
  dart.addTypeCaches(codec_utility.CodecUtility);
  dart.setLibraryUri(codec_utility.CodecUtility, L4);
  web_utils.convertWebQuerySnapshot = function convertWebQuerySnapshot(firestore, webQuerySnapshot) {
    return new platform_interface_query_snapshot.QuerySnapshotPlatform.new(webQuerySnapshot.docs[$map](DocumentSnapshotPlatformL(), dart.fn(webDocumentSnapshot => web_utils.convertWebDocumentSnapshot(firestore, webDocumentSnapshot), DocumentSnapshotLToDocumentSnapshotPlatformL()))[$toList](), webQuerySnapshot.docChanges()[$map](DocumentChangePlatformL(), dart.fn(webDocumentChange => web_utils.convertWebDocumentChange(firestore, webDocumentChange), DocumentChangeLToDocumentChangePlatformL()))[$toList](), web_utils.convertWebSnapshotMetadata(webQuerySnapshot.metadata));
  };
  web_utils.convertWebDocumentSnapshot = function convertWebDocumentSnapshot(firestore, webSnapshot) {
    return new platform_interface_document_snapshot.DocumentSnapshotPlatform.new(firestore, webSnapshot.ref.path, new (IdentityMapOfStringL$dynamic()).from(["data", codec_utility.CodecUtility.decodeMapData(webSnapshot.data()), "metadata", new (IdentityMapOfStringL$boolL()).from(["hasPendingWrites", webSnapshot.metadata.hasPendingWrites, "isFromCache", webSnapshot.metadata.fromCache])]));
  };
  web_utils.convertWebDocumentChange = function convertWebDocumentChange(firestore, webDocumentChange) {
    return new platform_interface_document_change.DocumentChangePlatform.new(web_utils.convertWebDocumentChangeType(webDocumentChange.type), dart.asNullableInt(webDocumentChange.oldIndex), dart.asNullableInt(webDocumentChange.newIndex), web_utils.convertWebDocumentSnapshot(firestore, webDocumentChange.doc));
  };
  web_utils.convertWebDocumentChangeType = function convertWebDocumentChangeType(changeType) {
    switch (changeType[$toLowerCase]()) {
      case "added":
      {
        return platform_interface_document_change.DocumentChangeType.added;
      }
      case "modified":
      {
        return platform_interface_document_change.DocumentChangeType.modified;
      }
      case "removed":
      {
        return platform_interface_document_change.DocumentChangeType.removed;
      }
      default:
      {
        dart.throw(new core.FallThroughError.new());
      }
    }
  };
  web_utils.convertWebSnapshotMetadata = function convertWebSnapshotMetadata(webSnapshotMetadata) {
    return new snapshot_metadata.SnapshotMetadataPlatform.new(webSnapshotMetadata.hasPendingWrites, webSnapshotMetadata.fromCache);
  };
  dart.defineLazy(web_utils, {
    /*web_utils._kChangeTypeAdded*/get _kChangeTypeAdded() {
      return "added";
    },
    /*web_utils._kChangeTypeModified*/get _kChangeTypeModified() {
      return "modified";
    },
    /*web_utils._kChangeTypeRemoved*/get _kChangeTypeRemoved() {
      return "removed";
    }
  }, true);
  var _delegate = dart.privateName(document_reference_web, "_delegate");
  var firestoreWeb$ = dart.privateName(document_reference_web, "DocumentReferenceWeb.firestoreWeb");
  document_reference_web.DocumentReferenceWeb = class DocumentReferenceWeb extends platform_interface_document_reference.DocumentReferencePlatform {
    get firestoreWeb() {
      return this[firestoreWeb$];
    }
    set firestoreWeb(value) {
      super.firestoreWeb = value;
    }
    set(data, options = null) {
      return async.async(dart.void, (function* set() {
        try {
          yield this[_delegate].set(codec_utility.CodecUtility.encodeMapData(data), options != null ? {merge: options.merge} : null);
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception.convertPlatformException(e));
        }
      }).bind(this));
    }
    update(data) {
      return async.async(dart.void, (function* update() {
        try {
          yield this[_delegate].update({data: codec_utility.CodecUtility.encodeMapData(data)});
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception.convertPlatformException(e));
        }
      }).bind(this));
    }
    get(options = null) {
      return async.async(DocumentSnapshotPlatformL(), (function* get() {
        try {
          let documentSnapshot = (yield this[_delegate].get());
          return web_utils.convertWebDocumentSnapshot(this.firestore, documentSnapshot);
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception.convertPlatformException(e));
        }
      }).bind(this));
    }
    delete() {
      return async.async(dart.void, (function* $delete() {
        try {
          yield this[_delegate].delete();
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception.convertPlatformException(e));
        }
      }).bind(this));
    }
    snapshots(opts) {
      let includeMetadataChanges = opts && 'includeMetadataChanges' in opts ? opts.includeMetadataChanges : false;
      let querySnapshots = this[_delegate].onSnapshot;
      if (dart.test(includeMetadataChanges)) {
        querySnapshots = this[_delegate].onMetadataChangesSnapshot;
      }
      return querySnapshots.map(DocumentSnapshotPlatformL(), dart.fn(webSnapshot => web_utils.convertWebDocumentSnapshot(this.firestore, webSnapshot), DocumentSnapshotLToDocumentSnapshotPlatformL())).handleError(dart.fn(e => {
        dart.throw(exception.convertPlatformException(e));
      }, dynamicToNull()));
    }
  };
  (document_reference_web.DocumentReferenceWeb.new = function(firestore, firestoreWeb, path) {
    this[firestoreWeb$] = firestoreWeb;
    this[_delegate] = firestoreWeb.doc(path);
    document_reference_web.DocumentReferenceWeb.__proto__.new.call(this, firestore, path);
    ;
  }).prototype = document_reference_web.DocumentReferenceWeb.prototype;
  dart.addTypeTests(document_reference_web.DocumentReferenceWeb);
  dart.addTypeCaches(document_reference_web.DocumentReferenceWeb);
  dart.setLibraryUri(document_reference_web.DocumentReferenceWeb, L5);
  dart.setFieldSignature(document_reference_web.DocumentReferenceWeb, () => ({
    __proto__: dart.getFields(document_reference_web.DocumentReferenceWeb.__proto__),
    firestoreWeb: dart.finalFieldType(dart.legacy(firestore.Firestore)),
    [_delegate]: dart.finalFieldType(dart.legacy(firestore.DocumentReference))
  }));
  var _firestorePlatform$ = dart.privateName(collection_reference_web, "_firestorePlatform");
  var _webFirestore$ = dart.privateName(collection_reference_web, "_webFirestore");
  var _delegate$ = dart.privateName(collection_reference_web, "_delegate");
  var _pointer = dart.privateName(collection_reference_web, "_pointer");
  var C2;
  var _pointer$ = dart.privateName(platform_interface_collection_reference, "_pointer");
  var queryDelegate = dart.privateName(collection_reference_web, "CollectionReferenceWeb.queryDelegate");
  collection_reference_web.CollectionReferenceWeb = class CollectionReferenceWeb extends query_web.QueryWeb {
    get queryDelegate() {
      return this[queryDelegate];
    }
    set queryDelegate(value) {
      this[queryDelegate] = value;
    }
    get path() {
      return this[_delegate$].path;
    }
    doc(path = null) {
      let documentReference = this[_delegate$].doc(path);
      return new document_reference_web.DocumentReferenceWeb.new(this[_firestorePlatform$], this[_webFirestore$], documentReference.path);
    }
    get id() {
      return this[_delegate$].id;
    }
    get parent() {
      let documentReference = this[_delegate$].parent;
      if (documentReference == null) {
        return null;
      }
      return new document_reference_web.DocumentReferenceWeb.new(this[_firestorePlatform$], this[_webFirestore$], documentReference.path);
    }
    get [_pointer$]() {
      return PointerL().as(this.noSuchMethod(new core._Invocation.getter(C2 || CT.C2)));
    }
  };
  (collection_reference_web.CollectionReferenceWeb.new = function(_firestorePlatform, _webFirestore, path) {
    this[queryDelegate] = null;
    this[_firestorePlatform$] = _firestorePlatform;
    this[_webFirestore$] = _webFirestore;
    this[_delegate$] = _webFirestore.collection(path);
    collection_reference_web.CollectionReferenceWeb.__proto__.new.call(this, _firestorePlatform, path, _webFirestore.collection(path));
    ;
  }).prototype = collection_reference_web.CollectionReferenceWeb.prototype;
  dart.addTypeTests(collection_reference_web.CollectionReferenceWeb);
  dart.addTypeCaches(collection_reference_web.CollectionReferenceWeb);
  collection_reference_web.CollectionReferenceWeb[dart.implements] = () => [platform_interface_collection_reference.CollectionReferencePlatform];
  dart.setMethodSignature(collection_reference_web.CollectionReferenceWeb, () => ({
    __proto__: dart.getMethods(collection_reference_web.CollectionReferenceWeb.__proto__),
    doc: dart.fnType(dart.legacy(platform_interface_document_reference.DocumentReferencePlatform), [], [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(collection_reference_web.CollectionReferenceWeb, () => ({
    __proto__: dart.getGetters(collection_reference_web.CollectionReferenceWeb.__proto__),
    path: dart.legacy(core.String),
    id: dart.legacy(core.String),
    parent: dart.legacy(platform_interface_document_reference.DocumentReferencePlatform),
    [_pointer$]: dart.legacy(pointer.Pointer)
  }));
  dart.setLibraryUri(collection_reference_web.CollectionReferenceWeb, L6);
  dart.setFieldSignature(collection_reference_web.CollectionReferenceWeb, () => ({
    __proto__: dart.getFields(collection_reference_web.CollectionReferenceWeb.__proto__),
    [_webFirestore$]: dart.finalFieldType(dart.legacy(firestore.Firestore)),
    [_firestorePlatform$]: dart.finalFieldType(dart.legacy(platform_interface_firestore.FirebaseFirestorePlatform)),
    [_delegate$]: dart.finalFieldType(dart.legacy(firestore.CollectionReference$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference"))))),
    queryDelegate: dart.fieldType(dart.legacy(query_web.QueryWeb))
  }));
  var _webFirestore = dart.privateName(cloud_firestore_web, "_webFirestore");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C3;
  cloud_firestore_web.FirebaseFirestoreWeb = class FirebaseFirestoreWeb extends platform_interface_firestore.FirebaseFirestorePlatform {
    static registerWith(registrar) {
      platform_interface_firestore.FirebaseFirestorePlatform.instance = new cloud_firestore_web.FirebaseFirestoreWeb.new();
    }
    delegateFor(opts) {
      let app = opts && 'app' in opts ? opts.app : null;
      return new cloud_firestore_web.FirebaseFirestoreWeb.new({app: app});
    }
    collection(path) {
      return new collection_reference_web.CollectionReferenceWeb.new(this, this[_webFirestore], path);
    }
    batch() {
      return new write_batch_web.WriteBatchWeb.new(this[_webFirestore]);
    }
    collectionGroup(path) {
      return new query_web.QueryWeb.new(this, path, this[_webFirestore].collectionGroup(path), {isCollectionGroupQuery: true});
    }
    disableNetwork() {
      return async.async(dart.void, (function* disableNetwork() {
        try {
          yield this[_webFirestore].disableNetwork();
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception.convertPlatformException(e));
        }
      }).bind(this));
    }
    doc(path) {
      return new document_reference_web.DocumentReferenceWeb.new(this, this[_webFirestore], path);
    }
    enableNetwork() {
      return async.async(dart.void, (function* enableNetwork() {
        try {
          yield this[_webFirestore].enableNetwork();
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception.convertPlatformException(e));
        }
      }).bind(this));
    }
    runTransaction(T, transactionHandler, opts) {
      let timeout = opts && 'timeout' in opts ? opts.timeout : C3 || CT.C3;
      return async.async(dart.legacy(T), (function* runTransaction() {
        try {
          yield this[_webFirestore].runTransaction(dart.fn(transaction => async.async(dart.legacy(T), (function*() {
            return transactionHandler(new transaction_web.TransactionWeb.new(this, this[_webFirestore], transaction));
          }).bind(this)), dart.fnType(dart.legacy(async.Future$(dart.legacy(T))), [TransactionL()]))).timeout(timeout);
          return null;
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception.convertPlatformException(e));
        }
      }).bind(this));
    }
    set settings(settings) {
      let cacheSizeBytes = null;
      if (settings.cacheSizeBytes == null) {
        cacheSizeBytes = 40000000;
      } else if (settings.cacheSizeBytes === -1) {
        cacheSizeBytes = -1;
      } else {
        cacheSizeBytes = settings.cacheSizeBytes;
      }
      if (settings.host != null && settings.sslEnabled != null) {
        this[_webFirestore].settings({cacheSizeBytes: cacheSizeBytes, host: settings.host, ssl: settings.sslEnabled});
      } else {
        this[_webFirestore].settings({cacheSizeBytes: cacheSizeBytes});
      }
    }
    get settings() {
      return super.settings;
    }
    enablePersistence() {
      return async.async(dart.void, (function* enablePersistence() {
        try {
          yield this[_webFirestore].enablePersistence();
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(exception.convertPlatformException(e));
        }
      }).bind(this));
    }
  };
  (cloud_firestore_web.FirebaseFirestoreWeb.new = function(opts) {
    let t9;
    let app = opts && 'app' in opts ? opts.app : null;
    this[_webFirestore] = top_level.firestore(top_level.app((t9 = app, t9 == null ? null : t9.name)));
    cloud_firestore_web.FirebaseFirestoreWeb.__proto__.new.call(this, {appInstance: app});
    platform_interface_field_value_factory.FieldValueFactoryPlatform.instance = new field_value_factory_web.FieldValueFactoryWeb.new();
  }).prototype = cloud_firestore_web.FirebaseFirestoreWeb.prototype;
  dart.addTypeTests(cloud_firestore_web.FirebaseFirestoreWeb);
  dart.addTypeCaches(cloud_firestore_web.FirebaseFirestoreWeb);
  dart.setMethodSignature(cloud_firestore_web.FirebaseFirestoreWeb, () => ({
    __proto__: dart.getMethods(cloud_firestore_web.FirebaseFirestoreWeb.__proto__),
    runTransaction: dart.gFnType(T => [dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(platform_interface_transaction.TransactionPlatform)]))], {timeout: dart.legacy(core.Duration)}, {}])
  }));
  dart.setLibraryUri(cloud_firestore_web.FirebaseFirestoreWeb, L7);
  dart.setFieldSignature(cloud_firestore_web.FirebaseFirestoreWeb, () => ({
    __proto__: dart.getFields(cloud_firestore_web.FirebaseFirestoreWeb.__proto__),
    [_webFirestore]: dart.finalFieldType(dart.legacy(firestore.Firestore))
  }));
  dart.trackLibraries("packages/cloud_firestore_web/src/write_batch_web.dart", {
    "package:cloud_firestore_web/src/write_batch_web.dart": write_batch_web,
    "package:cloud_firestore_web/src/transaction_web.dart": transaction_web,
    "package:cloud_firestore_web/src/field_value_factory_web.dart": field_value_factory_web,
    "package:cloud_firestore_web/src/query_web.dart": query_web,
    "package:cloud_firestore_web/src/utils/codec_utility.dart": codec_utility,
    "package:cloud_firestore_web/src/utils/web_utils.dart": web_utils,
    "package:cloud_firestore_web/src/document_reference_web.dart": document_reference_web,
    "package:cloud_firestore_web/src/collection_reference_web.dart": collection_reference_web,
    "package:cloud_firestore_web/cloud_firestore_web.dart": cloud_firestore_web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["write_batch_web.dart","transaction_web.dart","field_value_factory_web.dart","query_web.dart","utils/codec_utility.dart","utils/web_utils.dart","document_reference_web.dart","collection_reference_web.dart","../cloud_firestore_web.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/cloud_firestore_web/src/write_batch_web.dart.lib.js"}');
  // Exports:
  return {
    src__write_batch_web: write_batch_web,
    src__transaction_web: transaction_web,
    src__field_value_factory_web: field_value_factory_web,
    src__query_web: query_web,
    src__utils__codec_utility: codec_utility,
    src__utils__web_utils: web_utils,
    src__document_reference_web: document_reference_web,
    src__collection_reference_web: collection_reference_web,
    cloud_firestore_web: cloud_firestore_web
  };
}));

//# sourceMappingURL=write_batch_web.dart.lib.js.map
