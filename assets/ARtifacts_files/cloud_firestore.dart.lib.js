define(['dart_sdk', 'packages/quiver/src/core/hash.dart', 'packages/cloud_firestore_platform_interface/src/platform_interface/platform_interface_write_batch.dart', 'packages/cloud_firestore_platform_interface/src/field_path.dart', 'packages/cloud_firestore_platform_interface/src/get_options.dart', 'packages/cloud_firestore_platform_interface/src/source.dart', 'packages/collection/src/equality.dart', 'packages/cloud_firestore_platform_interface/src/set_options.dart', 'packages/cloud_firestore_platform_interface/src/platform_interface/platform_interface_field_value.dart', 'packages/firebase_core/firebase_core.dart', 'packages/firebase_core_platform_interface/firebase_core_platform_interface.dart', 'packages/cloud_firestore_platform_interface/src/settings.dart', 'packages/cloud_firestore_platform_interface/src/snapshot_metadata.dart'], (function load__packages__cloud_firestore__cloud_firestore_dart(dart_sdk, packages__quiver__src__core__hash$46dart, packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart, packages__cloud_firestore_platform_interface__src__field_path$46dart, packages__cloud_firestore_platform_interface__src__get_options$46dart, packages__cloud_firestore_platform_interface__src__source$46dart, packages__collection__src__equality$46dart, packages__cloud_firestore_platform_interface__src__set_options$46dart, packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_field_value$46dart, packages__firebase_core__firebase_core$46dart, packages__firebase_core_platform_interface__firebase_core_platform_interface$46dart, packages__cloud_firestore_platform_interface__src__settings$46dart, packages__cloud_firestore_platform_interface__src__snapshot_metadata$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hash = packages__quiver__src__core__hash$46dart.src__core__hash;
  const platform_interface_query = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.src__platform_interface__platform_interface_query;
  const platform_interface_query_snapshot = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.src__platform_interface__platform_interface_query_snapshot;
  const platform_interface_collection_reference = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.src__platform_interface__platform_interface_collection_reference;
  const platform_interface_document_change = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.src__platform_interface__platform_interface_document_change;
  const platform_interface_document_reference = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.src__platform_interface__platform_interface_document_reference;
  const cloud_firestore_platform_interface = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.cloud_firestore_platform_interface;
  const platform_interface_document_snapshot = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.src__platform_interface__platform_interface_document_snapshot;
  const platform_interface_field_value_factory = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.src__platform_interface__platform_interface_field_value_factory;
  const platform_interface_firestore = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.src__platform_interface__platform_interface_firestore;
  const platform_interface_transaction = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.src__platform_interface__platform_interface_transaction;
  const platform_interface_write_batch = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_write_batch$46dart.src__platform_interface__platform_interface_write_batch;
  const field_path = packages__cloud_firestore_platform_interface__src__field_path$46dart.src__field_path;
  const get_options = packages__cloud_firestore_platform_interface__src__get_options$46dart.src__get_options;
  const source = packages__cloud_firestore_platform_interface__src__source$46dart.src__source;
  const equality = packages__collection__src__equality$46dart.src__equality;
  const set_options = packages__cloud_firestore_platform_interface__src__set_options$46dart.src__set_options;
  const platform_interface_field_value = packages__cloud_firestore_platform_interface__src__platform_interface__platform_interface_field_value$46dart.src__platform_interface__platform_interface_field_value;
  const firebase_core = packages__firebase_core__firebase_core$46dart.firebase_core;
  const firebase_core_platform_interface = packages__firebase_core_platform_interface__firebase_core_platform_interface$46dart.firebase_core_platform_interface;
  const settings = packages__cloud_firestore_platform_interface__src__settings$46dart.src__settings;
  const snapshot_metadata = packages__cloud_firestore_platform_interface__src__snapshot_metadata$46dart.src__snapshot_metadata;
  var cloud_firestore = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $contains = dartx.contains;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $last = dartx.last;
  var $length = dartx.length;
  var $isEmpty = dartx.isEmpty;
  var $where = dartx.where;
  var $_equals = dartx._equals;
  var $hashCode = dartx.hashCode;
  var $toString = dartx.toString;
  var $containsKey = dartx.containsKey;
  var $_set = dartx._set;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $updateAll = dartx.updateAll;
  dart._checkModuleNullSafetyMode(false);
  var DocumentReferenceL = () => (DocumentReferenceL = dart.constFn(dart.legacy(cloud_firestore.DocumentReference)))();
  var CollectionReferenceL = () => (CollectionReferenceL = dart.constFn(dart.legacy(cloud_firestore.CollectionReference)))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var ListOfListL = () => (ListOfListL = dart.constFn(core.List$(ListL())))();
  var StateErrorL = () => (StateErrorL = dart.constFn(dart.legacy(core.StateError)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var FieldPathL = () => (FieldPathL = dart.constFn(dart.legacy(field_path.FieldPath)))();
  var QuerySnapshotL = () => (QuerySnapshotL = dart.constFn(dart.legacy(cloud_firestore.QuerySnapshot)))();
  var QuerySnapshotPlatformL = () => (QuerySnapshotPlatformL = dart.constFn(dart.legacy(platform_interface_query_snapshot.QuerySnapshotPlatform)))();
  var QuerySnapshotPlatformLToQuerySnapshotL = () => (QuerySnapshotPlatformLToQuerySnapshotL = dart.constFn(dart.fnType(QuerySnapshotL(), [QuerySnapshotPlatformL()])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var ListLToboolL = () => (ListLToboolL = dart.constFn(dart.fnType(boolL(), [ListL()])))();
  var DefaultEqualityOfNull = () => (DefaultEqualityOfNull = dart.constFn(equality.DefaultEquality$(core.Null)))();
  var dynamicAndStringLAnddynamicTovoid = () => (dynamicAndStringLAnddynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, StringL(), dart.dynamic])))();
  var dynamicToboolL = () => (dynamicToboolL = dart.constFn(dart.fnType(boolL(), [dart.dynamic])))();
  var DocumentSnapshotL = () => (DocumentSnapshotL = dart.constFn(dart.legacy(cloud_firestore.DocumentSnapshot)))();
  var DocumentSnapshotPlatformL = () => (DocumentSnapshotPlatformL = dart.constFn(dart.legacy(platform_interface_document_snapshot.DocumentSnapshotPlatform)))();
  var DocumentSnapshotPlatformLToDocumentSnapshotL = () => (DocumentSnapshotPlatformLToDocumentSnapshotL = dart.constFn(dart.fnType(DocumentSnapshotL(), [DocumentSnapshotPlatformL()])))();
  var FieldValueL = () => (FieldValueL = dart.constFn(dart.legacy(cloud_firestore.FieldValue)))();
  var FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  var FutureLOfNull = () => (FutureLOfNull = dart.constFn(dart.legacy(FutureOfNull())))();
  var TransactionPlatformL = () => (TransactionPlatformL = dart.constFn(dart.legacy(platform_interface_transaction.TransactionPlatform)))();
  var TransactionPlatformLToFutureLOfNull = () => (TransactionPlatformLToFutureLOfNull = dart.constFn(dart.fnType(FutureLOfNull(), [TransactionPlatformL()])))();
  var FirebaseFirestoreL = () => (FirebaseFirestoreL = dart.constFn(dart.legacy(cloud_firestore.FirebaseFirestore)))();
  var IdentityMapOfStringL$FirebaseFirestoreL = () => (IdentityMapOfStringL$FirebaseFirestoreL = dart.constFn(_js_helper.IdentityMap$(StringL(), FirebaseFirestoreL())))();
  var FirestoreL = () => (FirestoreL = dart.constFn(dart.legacy(cloud_firestore.Firestore)))();
  var QueryDocumentSnapshotL = () => (QueryDocumentSnapshotL = dart.constFn(dart.legacy(cloud_firestore.QueryDocumentSnapshot)))();
  var DocumentSnapshotPlatformLToQueryDocumentSnapshotL = () => (DocumentSnapshotPlatformLToQueryDocumentSnapshotL = dart.constFn(dart.fnType(QueryDocumentSnapshotL(), [DocumentSnapshotPlatformL()])))();
  var DocumentChangeL = () => (DocumentChangeL = dart.constFn(dart.legacy(cloud_firestore.DocumentChange)))();
  var DocumentChangePlatformL = () => (DocumentChangePlatformL = dart.constFn(dart.legacy(platform_interface_document_change.DocumentChangePlatform)))();
  var DocumentChangePlatformLToDocumentChangeL = () => (DocumentChangePlatformLToDocumentChangeL = dart.constFn(dart.fnType(DocumentChangeL(), [DocumentChangePlatformL()])))();
  var LinkedHashMapOfStringL$dynamic = () => (LinkedHashMapOfStringL$dynamic = dart.constFn(collection.LinkedHashMap$(StringL(), dart.dynamic)))();
  var StringLAnddynamicTodynamic = () => (StringLAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [StringL(), dart.dynamic])))();
  var dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var DocumentReferencePlatformL = () => (DocumentReferencePlatformL = dart.constFn(dart.legacy(platform_interface_document_reference.DocumentReferencePlatform)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/cloud_firestore-0.14.2/lib/src/collection_reference.dart";
  var L6 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/cloud_firestore-0.14.2/lib/src/write_batch.dart";
  var L4 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/cloud_firestore-0.14.2/lib/src/firestore.dart";
  var L5 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/cloud_firestore-0.14.2/lib/src/transaction.dart";
  var L2 = "package:cloud_firestore/cloud_firestore.dart";
  var L1 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/cloud_firestore-0.14.2/lib/src/query.dart";
  var L3 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/cloud_firestore-0.14.2/lib/src/document_reference.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: source.Source.prototype,
        [_name]: "Source.serverAndCache",
        index: 0
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: get_options.GetOptions.prototype,
        [GetOptions_source]: C1 || CT.C1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: DefaultEqualityOfNull().prototype
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: equality.ListEquality.prototype,
        [ListEquality__elementEquality]: C3 || CT.C3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 30000000
      });
    }
  }, false);
  var _delegate$ = dart.privateName(cloud_firestore, "_delegate");
  var _hasStartCursor = dart.privateName(cloud_firestore, "_hasStartCursor");
  var _hasEndCursor = dart.privateName(cloud_firestore, "_hasEndCursor");
  var _isInequality = dart.privateName(cloud_firestore, "_isInequality");
  var _assertQueryCursorSnapshot = dart.privateName(cloud_firestore, "_assertQueryCursorSnapshot");
  var _assertQueryCursorValues = dart.privateName(cloud_firestore, "_assertQueryCursorValues");
  var _assertValidFieldType = dart.privateName(cloud_firestore, "_assertValidFieldType");
  var _name = dart.privateName(source, "_name");
  var C1;
  var GetOptions_source = dart.privateName(get_options, "GetOptions.source");
  var C0;
  var C3;
  var ListEquality__elementEquality = dart.privateName(equality, "ListEquality._elementEquality");
  var C2;
  var firestore$ = dart.privateName(cloud_firestore, "Query.firestore");
  var _delegate$0 = dart.privateName(cloud_firestore, "Query._delegate");
  cloud_firestore.Query = class Query extends core.Object {
    get firestore() {
      return this[firestore$];
    }
    set firestore(value) {
      super.firestore = value;
    }
    get [_delegate$]() {
      return this[_delegate$0];
    }
    set [_delegate$](value) {
      super[_delegate$] = value;
    }
    get parameters() {
      return this[_delegate$].parameters;
    }
    [_hasStartCursor]() {
      return this.parameters[$_get]("startAt") != null || this.parameters[$_get]("startAfter") != null;
    }
    [_hasEndCursor]() {
      return this.parameters[$_get]("endAt") != null || this.parameters[$_get]("endBefore") != null;
    }
    [_isInequality](operator) {
      return operator === "<" || operator === "<=" || operator === ">" || operator === ">=";
    }
    [_assertQueryCursorSnapshot](documentSnapshot) {
      if (!(documentSnapshot != null)) dart.assertFailed(null, L1, 55, 12, "documentSnapshot != null");
      if (!dart.test(documentSnapshot.exists)) dart.assertFailed("a document snapshot must exist to be used within a query", L1, 56, 12, "documentSnapshot.exists");
      let orders = ListOfListL().from(core.Iterable.as(this.parameters[$_get]("orderBy")));
      let values = [];
      for (let order of orders) {
        let field = order[$_get](0);
        if (!dart.equals(field, field_path.FieldPath.documentId)) {
          try {
            values[$add](documentSnapshot.get(field));
          } catch (e) {
            let ex = dart.getThrown(e);
            if (StateErrorL().is(ex)) {
              dart.throw("You are trying to start or end a query using a document for which the field '" + dart.str(field) + "' (used as the orderBy) does not exist.");
            } else
              throw e;
          }
        }
      }
      if (dart.test(orders[$isNotEmpty])) {
        let lastOrder = orders[$last];
        if (!dart.equals(lastOrder[$_get](0), field_path.FieldPath.documentId)) {
          orders[$add]([field_path.FieldPath.documentId, lastOrder[$_get](1)]);
        }
      } else {
        orders[$add]([field_path.FieldPath.documentId, false]);
      }
      if (dart.test(this[_delegate$].isCollectionGroupQuery)) {
        values[$add](documentSnapshot.reference.path);
      } else {
        values[$add](documentSnapshot.id);
      }
      return new (IdentityMapOfStringL$dynamic()).from(["orders", orders, "values", values]);
    }
    [_assertQueryCursorValues](fields) {
      if (!(fields != null)) dart.assertFailed(null, L1, 102, 12, "fields != null");
      let orders = ListOfListL().from(core.Iterable.as(this.parameters[$_get]("orderBy")));
      if (!(dart.notNull(fields[$length]) <= dart.notNull(orders[$length]))) dart.assertFailed("Too many arguments provided. The number of arguments must be less than or equal to the number of orderBy() clauses.", L1, 105, 12, "fields.length <= orders.length");
      return fields;
    }
    [_assertValidFieldType](field) {
      if (!(StringL().is(field) || FieldPathL().is(field) || dart.equals(field, field_path.FieldPath.documentId))) dart.assertFailed("Supported [field] types are [String] and [FieldPath].", L1, 114, 9, "field is String || field is FieldPath || field == FieldPath.documentId");
    }
    endAtDocument(documentSnapshot) {
      let results = this[_assertQueryCursorSnapshot](documentSnapshot);
      return new cloud_firestore.Query.__(this.firestore, this[_delegate$].endAtDocument(ListL().as(results[$_get]("orders")), ListL().as(results[$_get]("values"))));
    }
    endAt(values) {
      this[_assertQueryCursorValues](values);
      return new cloud_firestore.Query.__(this.firestore, this[_delegate$].endAt(values));
    }
    endBeforeDocument(documentSnapshot) {
      let results = this[_assertQueryCursorSnapshot](documentSnapshot);
      return new cloud_firestore.Query.__(this.firestore, this[_delegate$].endBeforeDocument(ListL().as(results[$_get]("orders")), ListL().as(results[$_get]("values"))));
    }
    endBefore(values) {
      this[_assertQueryCursorValues](values);
      return new cloud_firestore.Query.__(this.firestore, this[_delegate$].endBefore(values));
    }
    get(options = null) {
      return async.async(QuerySnapshotL(), (function* get() {
        let t2;
        let snapshotDelegate = (yield this[_delegate$].get((t2 = options, t2 == null ? C0 || CT.C0 : t2)));
        return new cloud_firestore.QuerySnapshot.__(this.firestore, snapshotDelegate);
      }).bind(this));
    }
    getDocuments(options = null) {
      return this.get(options);
    }
    limit(limit) {
      if (!(dart.notNull(limit) > 0)) dart.assertFailed("limit must be a positive number greater than 0", L1, 189, 12, "limit > 0");
      return new cloud_firestore.Query.__(this.firestore, this[_delegate$].limit(limit));
    }
    limitToLast(limit) {
      if (!(dart.notNull(limit) > 0)) dart.assertFailed("limit must be a positive number greater than 0", L1, 198, 12, "limit > 0");
      let orders = ListOfListL().from(core.Iterable.as(this.parameters[$_get]("orderBy")));
      if (!dart.test(orders[$isNotEmpty])) dart.assertFailed("limitToLast() queries require specifying at least one orderBy() clause", L1, 200, 12, "orders.isNotEmpty");
      return new cloud_firestore.Query.__(this.firestore, this[_delegate$].limitToLast(limit));
    }
    snapshots(opts) {
      let includeMetadataChanges = opts && 'includeMetadataChanges' in opts ? opts.includeMetadataChanges : false;
      return this[_delegate$].snapshots({includeMetadataChanges: includeMetadataChanges}).map(QuerySnapshotL(), dart.fn(item => new cloud_firestore.QuerySnapshot.__(this.firestore, item), QuerySnapshotPlatformLToQuerySnapshotL()));
    }
    orderBy(field, opts) {
      let descending = opts && 'descending' in opts ? opts.descending : false;
      if (!(field != null && descending != null)) dart.assertFailed(null, L1, 225, 12, "field != null && descending != null");
      this[_assertValidFieldType](field);
      if (!!dart.test(this[_hasStartCursor]())) dart.assertFailed("Invalid query. You must not call startAt(), startAtDocument(), startAfter() or startAfterDocument() before calling orderBy()", L1, 227, 12, "!_hasStartCursor()");
      if (!!dart.test(this[_hasEndCursor]())) dart.assertFailed("Invalid query. You must not call endAt(), endAtDocument(), endBefore() or endBeforeDocument() before calling orderBy()", L1, 229, 12, "!_hasEndCursor()");
      let orders = ListOfListL().from(core.Iterable.as(this.parameters[$_get]("orderBy")));
      if (!dart.test(orders[$where](dart.fn(item => dart.equals(field, item[$_get](0)), ListLToboolL()))[$isEmpty])) dart.assertFailed("OrderBy field '" + dart.str(field) + "' already exists in this query", L1, 235, 12, "orders.where((List<dynamic> item) => field == item[0]).isEmpty");
      if (dart.equals(field, field_path.FieldPath.documentId)) {
        orders[$add]([field, descending]);
      } else {
        let fieldPath = FieldPathL().as(StringL().is(field) ? new field_path.FieldPath.fromString(field) : field);
        orders[$add]([fieldPath, descending]);
      }
      let conditions = ListOfListL().from(core.Iterable.as(this.parameters[$_get]("where")));
      if (dart.test(conditions[$isNotEmpty])) {
        for (let condition of conditions) {
          let field = dart.dsend(condition, '_get', [0]);
          let operator = StringL().as(dart.dsend(condition, '_get', [1]));
          if (dart.test(this[_isInequality](operator))) {
            if (!dart.equals(field, orders[$_get](0)[$_get](0))) dart.assertFailed("The initial orderBy() field '" + dart.str(orders) + "[0][0]' has to be the same as the where() field parameter '" + dart.str(field) + "' when an inequality operator is invoked.", L1, 257, 18, "field == orders[0][0]");
          }
          for (let order of orders) {
            let orderField = dart.dsend(order, '_get', [0]);
            if (operator === "==") {
              if (!!dart.equals(field, orderField)) dart.assertFailed("The '" + dart.str(orderField) + "' cannot be the same as your where() field parameter '" + dart.str(field) + "'.", L1, 267, 20, "field != orderField");
            }
            if (dart.equals(field, field_path.FieldPath.documentId)) {
              if (!dart.equals(orderField, field_path.FieldPath.documentId)) dart.assertFailed("'[FieldPath.documentId]' cannot be used in conjunction with a different orderBy() parameter.", L1, 272, 20, "orderField == FieldPath.documentId");
            }
          }
        }
      }
      return new cloud_firestore.Query.__(this.firestore, this[_delegate$].orderBy(orders));
    }
    startAfterDocument(documentSnapshot) {
      let results = this[_assertQueryCursorSnapshot](documentSnapshot);
      return new cloud_firestore.Query.__(this.firestore, this[_delegate$].startAfterDocument(ListL().as(results[$_get]("orders")), ListL().as(results[$_get]("values"))));
    }
    startAfter(values) {
      this[_assertQueryCursorValues](values);
      return new cloud_firestore.Query.__(this.firestore, this[_delegate$].startAfter(values));
    }
    startAtDocument(documentSnapshot) {
      let results = this[_assertQueryCursorSnapshot](documentSnapshot);
      return new cloud_firestore.Query.__(this.firestore, this[_delegate$].startAtDocument(ListL().as(results[$_get]("orders")), ListL().as(results[$_get]("values"))));
    }
    startAt(values) {
      this[_assertQueryCursorValues](values);
      return new cloud_firestore.Query.__(this.firestore, this[_delegate$].startAt(values));
    }
    where(field, opts) {
      let isEqualTo = opts && 'isEqualTo' in opts ? opts.isEqualTo : null;
      let isLessThan = opts && 'isLessThan' in opts ? opts.isLessThan : null;
      let isLessThanOrEqualTo = opts && 'isLessThanOrEqualTo' in opts ? opts.isLessThanOrEqualTo : null;
      let isGreaterThan = opts && 'isGreaterThan' in opts ? opts.isGreaterThan : null;
      let isGreaterThanOrEqualTo = opts && 'isGreaterThanOrEqualTo' in opts ? opts.isGreaterThanOrEqualTo : null;
      let arrayContains = opts && 'arrayContains' in opts ? opts.arrayContains : null;
      let arrayContainsAny = opts && 'arrayContainsAny' in opts ? opts.arrayContainsAny : null;
      let whereIn = opts && 'whereIn' in opts ? opts.whereIn : null;
      let isNull = opts && 'isNull' in opts ? opts.isNull : null;
      this[_assertValidFieldType](field);
      let equality = C2 || CT.C2;
      let conditions = ListOfListL().from(core.Iterable.as(this.parameters[$_get]("where")));
      function addCondition(field, operator, value) {
        let condition = null;
        value = cloud_firestore._CodecUtility.valueEncode(value);
        if (dart.equals(field, field_path.FieldPath.documentId)) {
          condition = [field, operator, value];
        } else {
          let fieldPath = StringL().is(field) ? new field_path.FieldPath.fromString(field) : FieldPathL().as(field);
          condition = [fieldPath, operator, value];
        }
        if (!dart.test(conditions[$where](dart.fn(item => equality.equals(condition, item), ListLToboolL()))[$isEmpty])) dart.assertFailed("Condition " + dart.str(condition) + " already exists in this query.", L1, 371, 11, "conditions\n              .where((List<dynamic> item) => equality.equals(condition, item))\n              .isEmpty");
        conditions[$add](condition);
      }
      dart.fn(addCondition, dynamicAndStringLAnddynamicTovoid());
      if (isEqualTo != null) addCondition(field, "==", isEqualTo);
      if (isLessThan != null) addCondition(field, "<", isLessThan);
      if (isLessThanOrEqualTo != null) {
        addCondition(field, "<=", isLessThanOrEqualTo);
      }
      if (isGreaterThan != null) addCondition(field, ">", isGreaterThan);
      if (isGreaterThanOrEqualTo != null) {
        addCondition(field, ">=", isGreaterThanOrEqualTo);
      }
      if (arrayContains != null) {
        addCondition(field, "array-contains", arrayContains);
      }
      if (arrayContainsAny != null) {
        addCondition(field, "array-contains-any", arrayContainsAny);
      }
      if (whereIn != null) addCondition(field, "in", whereIn);
      if (isNull != null) {
        if (!dart.test(isNull)) dart.assertFailed("isNull can only be set to true. " + "Use isEqualTo to filter on non-null values.", L1, 396, 11, "isNull");
        addCondition(field, "==", null);
      }
      let hasInequality = null;
      let hasIn = false;
      let hasArrayContains = false;
      let hasArrayContainsAny = false;
      for (let condition of conditions) {
        let field = dart.dsend(condition, '_get', [0]);
        let operator = StringL().as(dart.dsend(condition, '_get', [1]));
        let value = dart.dsend(condition, '_get', [2]);
        let orders = ListOfListL().from(core.Iterable.as(this.parameters[$_get]("orderBy")));
        if (dart.test(this[_isInequality](operator)) && dart.test(orders[$isNotEmpty])) {
          if (!dart.equals(field, orders[$_get](0)[$_get](0))) dart.assertFailed("The initial orderBy() field '" + dart.str(orders) + "[0][0]' has to be the same as the where() field parameter '" + dart.str(field) + "' when an inequality operator is invoked.", L1, 418, 16, "field == orders[0][0]");
        }
        if (value == null) {
          if (!(operator === "==")) dart.assertFailed("You can only perform equals comparisons on null.", L1, 423, 16, "operator == '=='");
        }
        if (operator === "in" || operator === "array-contains-any") {
          if (!ListL().is(value)) dart.assertFailed("A non-empty [List] is required for '" + dart.str(operator) + "' filters.", L1, 428, 16, "value is List");
          if (!(dart.notNull(ListL().as(value)[$length]) <= 10)) dart.assertFailed("'" + dart.str(operator) + "' filters support a maximum of 10 elements in the value [List].", L1, 430, 16, "(value as List).length <= 10");
          if (!dart.test(ListL().as(value)[$isNotEmpty])) dart.assertFailed("'" + dart.str(operator) + "' filters require a non-empty [List].", L1, 432, 16, "(value as List).isNotEmpty");
          if (!dart.test(ListL().as(value)[$where](dart.fn(value => value == null, dynamicToboolL()))[$isEmpty])) dart.assertFailed("'" + dart.str(operator) + "' filters cannot contain 'null' in the [List].", L1, 434, 16, "(value as List).where((value) => value == null).isEmpty");
        }
        if (operator === "in") {
          if (!!hasIn) dart.assertFailed("You cannot use 'in' filters more than once.", L1, 439, 16, "!hasIn");
          hasIn = true;
        }
        if (operator === "array-contains") {
          if (!!hasArrayContains) dart.assertFailed("You cannot use 'array-contains' filters more than once.", L1, 444, 16, "!hasArrayContains");
          hasArrayContains = true;
        }
        if (operator === "array-contains-any") {
          if (!!hasArrayContainsAny) dart.assertFailed("You cannot use 'array-contains-any' filters more than once.", L1, 450, 16, "!hasArrayContainsAny");
          hasArrayContainsAny = true;
        }
        if (operator === "array-contains-any" || operator === "in") {
          if (!!(hasIn && hasArrayContainsAny)) dart.assertFailed("You cannot use 'in' filters with 'array-contains-any' filters.", L1, 456, 16, "!(hasIn && hasArrayContainsAny)");
        }
        if (operator === "array-contains" || operator === "array-contains-any") {
          if (!!(hasArrayContains && hasArrayContainsAny)) dart.assertFailed("You cannot use both 'array-contains-any' or 'array-contains' filters together.", L1, 461, 16, "!(hasArrayContains && hasArrayContainsAny)");
        }
        if (dart.test(this[_isInequality](operator))) {
          if (hasInequality == null) {
            hasInequality = field;
          } else {
            if (!dart.equals(hasInequality, field)) dart.assertFailed("All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + dart.str(hasInequality) + "' and '" + dart.str(field) + "'.", L1, 469, 18, "hasInequality == field");
          }
        }
      }
      return new cloud_firestore.Query.__(this.firestore, this[_delegate$].where(conditions));
    }
  };
  (cloud_firestore.Query.__ = function(firestore, _delegate) {
    this[firestore$] = firestore;
    this[_delegate$0] = _delegate;
    platform_interface_query.QueryPlatform.verifyExtends(this[_delegate$]);
  }).prototype = cloud_firestore.Query.prototype;
  dart.addTypeTests(cloud_firestore.Query);
  dart.addTypeCaches(cloud_firestore.Query);
  dart.setMethodSignature(cloud_firestore.Query, () => ({
    __proto__: dart.getMethods(cloud_firestore.Query.__proto__),
    [_hasStartCursor]: dart.fnType(dart.legacy(core.bool), []),
    [_hasEndCursor]: dart.fnType(dart.legacy(core.bool), []),
    [_isInequality]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    [_assertQueryCursorSnapshot]: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [dart.legacy(cloud_firestore.DocumentSnapshot)]),
    [_assertQueryCursorValues]: dart.fnType(dart.legacy(core.List), [dart.legacy(core.List)]),
    [_assertValidFieldType]: dart.fnType(dart.void, [dart.dynamic]),
    endAtDocument: dart.fnType(dart.legacy(cloud_firestore.Query), [dart.legacy(cloud_firestore.DocumentSnapshot)]),
    endAt: dart.fnType(dart.legacy(cloud_firestore.Query), [dart.legacy(core.List)]),
    endBeforeDocument: dart.fnType(dart.legacy(cloud_firestore.Query), [dart.legacy(cloud_firestore.DocumentSnapshot)]),
    endBefore: dart.fnType(dart.legacy(cloud_firestore.Query), [dart.legacy(core.List)]),
    get: dart.fnType(dart.legacy(async.Future$(dart.legacy(cloud_firestore.QuerySnapshot))), [], [dart.legacy(get_options.GetOptions)]),
    getDocuments: dart.fnType(dart.legacy(async.Future$(dart.legacy(cloud_firestore.QuerySnapshot))), [], [dart.legacy(get_options.GetOptions)]),
    limit: dart.fnType(dart.legacy(cloud_firestore.Query), [dart.legacy(core.int)]),
    limitToLast: dart.fnType(dart.legacy(cloud_firestore.Query), [dart.legacy(core.int)]),
    snapshots: dart.fnType(dart.legacy(async.Stream$(dart.legacy(cloud_firestore.QuerySnapshot))), [], {includeMetadataChanges: dart.legacy(core.bool)}, {}),
    orderBy: dart.fnType(dart.legacy(cloud_firestore.Query), [dart.dynamic], {descending: dart.legacy(core.bool)}, {}),
    startAfterDocument: dart.fnType(dart.legacy(cloud_firestore.Query), [dart.legacy(cloud_firestore.DocumentSnapshot)]),
    startAfter: dart.fnType(dart.legacy(cloud_firestore.Query), [dart.legacy(core.List)]),
    startAtDocument: dart.fnType(dart.legacy(cloud_firestore.Query), [dart.legacy(cloud_firestore.DocumentSnapshot)]),
    startAt: dart.fnType(dart.legacy(cloud_firestore.Query), [dart.legacy(core.List)]),
    where: dart.fnType(dart.legacy(cloud_firestore.Query), [dart.dynamic], {arrayContains: dart.dynamic, arrayContainsAny: dart.legacy(core.List), isEqualTo: dart.dynamic, isGreaterThan: dart.dynamic, isGreaterThanOrEqualTo: dart.dynamic, isLessThan: dart.dynamic, isLessThanOrEqualTo: dart.dynamic, isNull: dart.legacy(core.bool), whereIn: dart.legacy(core.List)}, {})
  }));
  dart.setGetterSignature(cloud_firestore.Query, () => ({
    __proto__: dart.getGetters(cloud_firestore.Query.__proto__),
    parameters: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))
  }));
  dart.setLibraryUri(cloud_firestore.Query, L2);
  dart.setFieldSignature(cloud_firestore.Query, () => ({
    __proto__: dart.getFields(cloud_firestore.Query.__proto__),
    firestore: dart.finalFieldType(dart.legacy(cloud_firestore.FirebaseFirestore)),
    [_delegate$]: dart.finalFieldType(dart.legacy(platform_interface_query.QueryPlatform))
  }));
  var _delegate$1 = dart.privateName(cloud_firestore, "CollectionReference._delegate");
  cloud_firestore.CollectionReference = class CollectionReference extends cloud_firestore.Query {
    get [_delegate$]() {
      return this[_delegate$1];
    }
    set [_delegate$](value) {
      super[_delegate$] = value;
    }
    get id() {
      return this[_delegate$].id;
    }
    get parent() {
      let _documentReferencePlatform = this[_delegate$].parent;
      if (_documentReferencePlatform == null) {
        return null;
      }
      return new cloud_firestore.DocumentReference.__(this.firestore, _documentReferencePlatform);
    }
    get path() {
      return this[_delegate$].path;
    }
    add(data) {
      return async.async(DocumentReferenceL(), (function* add() {
        if (!(data != null)) dart.assertFailed(null, L0, 43, 12, "data != null");
        let newDocument = this.doc();
        yield newDocument.set(data);
        return newDocument;
      }).bind(this));
    }
    doc(path = null) {
      if (path != null) {
        if (!path[$isNotEmpty]) dart.assertFailed("a document path must be a non-empty string", L0, 57, 14, "path.isNotEmpty");
        if (!!path[$contains]("//")) dart.assertFailed("a document path must not contain '//'", L0, 58, 14, "!path.contains(\"//\")");
        if (!(path !== "/")) dart.assertFailed("a document path must point to a valid document", L0, 59, 14, "path != '/'");
      }
      return new cloud_firestore.DocumentReference.__(this.firestore, this[_delegate$].doc(path));
    }
    document(path = null) {
      return this.doc(path);
    }
    _equals(o) {
      if (o == null) return false;
      return CollectionReferenceL().is(o) && dart.equals(o.firestore, this.firestore) && o.path == this.path;
    }
    get hashCode() {
      return hash.hash2(this.firestore, this.path);
    }
    toString() {
      return dart.str(dart.wrapType(CollectionReferenceL())) + "(" + dart.str(this.path) + ")";
    }
  };
  (cloud_firestore.CollectionReference.__ = function(firestore, _delegate) {
    this[_delegate$1] = _delegate;
    cloud_firestore.CollectionReference.__proto__.__.call(this, firestore, _delegate);
    ;
  }).prototype = cloud_firestore.CollectionReference.prototype;
  dart.addTypeTests(cloud_firestore.CollectionReference);
  dart.addTypeCaches(cloud_firestore.CollectionReference);
  dart.setMethodSignature(cloud_firestore.CollectionReference, () => ({
    __proto__: dart.getMethods(cloud_firestore.CollectionReference.__proto__),
    add: dart.fnType(dart.legacy(async.Future$(dart.legacy(cloud_firestore.DocumentReference))), [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))]),
    doc: dart.fnType(dart.legacy(cloud_firestore.DocumentReference), [], [dart.legacy(core.String)]),
    document: dart.fnType(dart.legacy(cloud_firestore.DocumentReference), [], [dart.legacy(core.String)]),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(cloud_firestore.CollectionReference, () => ({
    __proto__: dart.getGetters(cloud_firestore.CollectionReference.__proto__),
    id: dart.legacy(core.String),
    parent: dart.legacy(cloud_firestore.DocumentReference),
    path: dart.legacy(core.String),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(cloud_firestore.CollectionReference, L2);
  dart.setFieldSignature(cloud_firestore.CollectionReference, () => ({
    __proto__: dart.getFields(cloud_firestore.CollectionReference.__proto__),
    [_delegate$]: dart.finalFieldType(dart.legacy(platform_interface_collection_reference.CollectionReferencePlatform))
  }));
  dart.defineExtensionMethods(cloud_firestore.CollectionReference, ['_equals', 'toString']);
  dart.defineExtensionAccessors(cloud_firestore.CollectionReference, ['hashCode']);
  var _firestore$ = dart.privateName(cloud_firestore, "_firestore");
  cloud_firestore.DocumentChange = class DocumentChange extends core.Object {
    get type() {
      return this[_delegate$].type;
    }
    get oldIndex() {
      return this[_delegate$].oldIndex;
    }
    get newIndex() {
      return this[_delegate$].newIndex;
    }
    get doc() {
      return new cloud_firestore.DocumentSnapshot.__(this[_firestore$], this[_delegate$].document);
    }
    get document() {
      return this.doc;
    }
  };
  (cloud_firestore.DocumentChange.__ = function(_firestore, _delegate) {
    this[_firestore$] = _firestore;
    this[_delegate$] = _delegate;
    platform_interface_document_change.DocumentChangePlatform.verifyExtends(this[_delegate$]);
  }).prototype = cloud_firestore.DocumentChange.prototype;
  dart.addTypeTests(cloud_firestore.DocumentChange);
  dart.addTypeCaches(cloud_firestore.DocumentChange);
  dart.setGetterSignature(cloud_firestore.DocumentChange, () => ({
    __proto__: dart.getGetters(cloud_firestore.DocumentChange.__proto__),
    type: dart.legacy(platform_interface_document_change.DocumentChangeType),
    oldIndex: dart.legacy(core.int),
    newIndex: dart.legacy(core.int),
    doc: dart.legacy(cloud_firestore.DocumentSnapshot),
    document: dart.legacy(cloud_firestore.DocumentSnapshot)
  }));
  dart.setLibraryUri(cloud_firestore.DocumentChange, L2);
  dart.setFieldSignature(cloud_firestore.DocumentChange, () => ({
    __proto__: dart.getFields(cloud_firestore.DocumentChange.__proto__),
    [_delegate$]: dart.finalFieldType(dart.legacy(platform_interface_document_change.DocumentChangePlatform)),
    [_firestore$]: dart.finalFieldType(dart.legacy(cloud_firestore.FirebaseFirestore))
  }));
  var firestore$0 = dart.privateName(cloud_firestore, "DocumentReference.firestore");
  cloud_firestore.DocumentReference = class DocumentReference extends core.Object {
    get firestore() {
      return this[firestore$0];
    }
    set firestore(value) {
      super.firestore = value;
    }
    get id() {
      return this[_delegate$].id;
    }
    get documentID() {
      return this.id;
    }
    get parent() {
      return new cloud_firestore.CollectionReference.__(this.firestore, this[_delegate$].parent);
    }
    get path() {
      return this[_delegate$].path;
    }
    collection(collectionPath) {
      if (!(collectionPath != null)) dart.assertFailed("a collection path cannot be null", L3, 41, 12, "collectionPath != null");
      if (!collectionPath[$isNotEmpty]) dart.assertFailed("a collectionPath path must be a non-empty string", L3, 42, 12, "collectionPath.isNotEmpty");
      if (!!collectionPath[$contains]("//")) dart.assertFailed("a collection path must not contain '//'", L3, 44, 12, "!collectionPath.contains(\"//\")");
      if (!dart.test(cloud_firestore_platform_interface.isValidCollectionPath(collectionPath))) dart.assertFailed("a collection path must point to a valid collection.", L3, 46, 12, "isValidCollectionPath(collectionPath)");
      return new cloud_firestore.CollectionReference.__(this.firestore, this[_delegate$].collection(collectionPath));
    }
    delete() {
      return this[_delegate$].delete();
    }
    get(options = null) {
      return async.async(DocumentSnapshotL(), (function* get() {
        let t2;
        return new cloud_firestore.DocumentSnapshot.__(this.firestore, yield this[_delegate$].get((t2 = options, t2 == null ? C0 || CT.C0 : t2)));
      }).bind(this));
    }
    snapshots(opts) {
      let includeMetadataChanges = opts && 'includeMetadataChanges' in opts ? opts.includeMetadataChanges : false;
      return this[_delegate$].snapshots({includeMetadataChanges: includeMetadataChanges}).map(DocumentSnapshotL(), dart.fn(delegateSnapshot => new cloud_firestore.DocumentSnapshot.__(this.firestore, delegateSnapshot), DocumentSnapshotPlatformLToDocumentSnapshotL()));
    }
    set(data, options = null) {
      if (!(data != null)) dart.assertFailed(null, L3, 81, 12, "data != null");
      return this[_delegate$].set(cloud_firestore._CodecUtility.replaceValueWithDelegatesInMap(data), options);
    }
    setData(data, options = null) {
      return this.set(data, options);
    }
    update(data) {
      if (!(data != null)) dart.assertFailed(null, L3, 97, 12, "data != null");
      return this[_delegate$].update(cloud_firestore._CodecUtility.replaceValueWithDelegatesInMap(data));
    }
    updateData(data) {
      return this.update(data);
    }
    _equals(o) {
      if (o == null) return false;
      return DocumentReferenceL().is(o) && dart.equals(o.firestore, this.firestore) && o.path == this.path;
    }
    get hashCode() {
      return hash.hash2(this.firestore, this.path);
    }
    toString() {
      return dart.str(dart.wrapType(DocumentReferenceL())) + "(" + dart.str(this.path) + ")";
    }
  };
  (cloud_firestore.DocumentReference.__ = function(firestore, _delegate) {
    this[firestore$0] = firestore;
    this[_delegate$] = _delegate;
    platform_interface_document_reference.DocumentReferencePlatform.verifyExtends(this[_delegate$]);
  }).prototype = cloud_firestore.DocumentReference.prototype;
  dart.addTypeTests(cloud_firestore.DocumentReference);
  dart.addTypeCaches(cloud_firestore.DocumentReference);
  dart.setMethodSignature(cloud_firestore.DocumentReference, () => ({
    __proto__: dart.getMethods(cloud_firestore.DocumentReference.__proto__),
    collection: dart.fnType(dart.legacy(cloud_firestore.CollectionReference), [dart.legacy(core.String)]),
    delete: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    get: dart.fnType(dart.legacy(async.Future$(dart.legacy(cloud_firestore.DocumentSnapshot))), [], [dart.legacy(get_options.GetOptions)]),
    snapshots: dart.fnType(dart.legacy(async.Stream$(dart.legacy(cloud_firestore.DocumentSnapshot))), [], {includeMetadataChanges: dart.legacy(core.bool)}, {}),
    set: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))], [dart.legacy(set_options.SetOptions)]),
    setData: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))], [dart.legacy(set_options.SetOptions)]),
    update: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))]),
    updateData: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))]),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(cloud_firestore.DocumentReference, () => ({
    __proto__: dart.getGetters(cloud_firestore.DocumentReference.__proto__),
    id: dart.legacy(core.String),
    documentID: dart.legacy(core.String),
    parent: dart.legacy(cloud_firestore.CollectionReference),
    path: dart.legacy(core.String),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(cloud_firestore.DocumentReference, L2);
  dart.setFieldSignature(cloud_firestore.DocumentReference, () => ({
    __proto__: dart.getFields(cloud_firestore.DocumentReference.__proto__),
    [_delegate$]: dart.fieldType(dart.legacy(platform_interface_document_reference.DocumentReferencePlatform)),
    firestore: dart.finalFieldType(dart.legacy(cloud_firestore.FirebaseFirestore))
  }));
  dart.defineExtensionMethods(cloud_firestore.DocumentReference, ['_equals', 'toString']);
  dart.defineExtensionAccessors(cloud_firestore.DocumentReference, ['hashCode']);
  var _firestore$0 = dart.privateName(cloud_firestore, "DocumentSnapshot._firestore");
  var _delegate$2 = dart.privateName(cloud_firestore, "DocumentSnapshot._delegate");
  cloud_firestore.DocumentSnapshot = class DocumentSnapshot extends core.Object {
    get [_firestore$]() {
      return this[_firestore$0];
    }
    set [_firestore$](value) {
      super[_firestore$] = value;
    }
    get [_delegate$]() {
      return this[_delegate$2];
    }
    set [_delegate$](value) {
      super[_delegate$] = value;
    }
    get id() {
      return this[_delegate$].id;
    }
    get documentID() {
      return this.id;
    }
    get reference() {
      return this[_firestore$].doc(this[_delegate$].reference.path);
    }
    get metadata() {
      return new cloud_firestore.SnapshotMetadata.__(this[_delegate$].metadata);
    }
    get exists() {
      return this[_delegate$].exists;
    }
    data() {
      return cloud_firestore._CodecUtility.replaceDelegatesWithValueInMap(this[_delegate$].data(), this[_firestore$]);
    }
    get(field) {
      return cloud_firestore._CodecUtility.valueDecode(this[_delegate$].get(field), this[_firestore$]);
    }
    _get(field) {
      return this.get(field);
    }
  };
  (cloud_firestore.DocumentSnapshot.__ = function(_firestore, _delegate) {
    this[_firestore$0] = _firestore;
    this[_delegate$2] = _delegate;
    platform_interface_document_snapshot.DocumentSnapshotPlatform.verifyExtends(this[_delegate$]);
  }).prototype = cloud_firestore.DocumentSnapshot.prototype;
  dart.addTypeTests(cloud_firestore.DocumentSnapshot);
  dart.addTypeCaches(cloud_firestore.DocumentSnapshot);
  dart.setMethodSignature(cloud_firestore.DocumentSnapshot, () => ({
    __proto__: dart.getMethods(cloud_firestore.DocumentSnapshot.__proto__),
    data: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), []),
    get: dart.fnType(dart.dynamic, [dart.dynamic]),
    _get: dart.fnType(dart.dynamic, [dart.dynamic])
  }));
  dart.setGetterSignature(cloud_firestore.DocumentSnapshot, () => ({
    __proto__: dart.getGetters(cloud_firestore.DocumentSnapshot.__proto__),
    id: dart.legacy(core.String),
    documentID: dart.legacy(core.String),
    reference: dart.legacy(cloud_firestore.DocumentReference),
    metadata: dart.legacy(cloud_firestore.SnapshotMetadata),
    exists: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(cloud_firestore.DocumentSnapshot, L2);
  dart.setFieldSignature(cloud_firestore.DocumentSnapshot, () => ({
    __proto__: dart.getFields(cloud_firestore.DocumentSnapshot.__proto__),
    [_firestore$]: dart.finalFieldType(dart.legacy(cloud_firestore.FirebaseFirestore)),
    [_delegate$]: dart.finalFieldType(dart.legacy(platform_interface_document_snapshot.DocumentSnapshotPlatform))
  }));
  cloud_firestore.FieldValue = class FieldValue extends platform_interface_field_value.FieldValuePlatform {
    static arrayUnion(elements) {
      return new cloud_firestore.FieldValue.__(cloud_firestore.FieldValue._factory.arrayUnion(ListL().as(cloud_firestore._CodecUtility.valueEncode(elements))));
    }
    static arrayRemove(elements) {
      return new cloud_firestore.FieldValue.__(cloud_firestore.FieldValue._factory.arrayRemove(ListL().as(cloud_firestore._CodecUtility.valueEncode(elements))));
    }
    static delete() {
      return new cloud_firestore.FieldValue.__(cloud_firestore.FieldValue._factory.delete());
    }
    static serverTimestamp() {
      return new cloud_firestore.FieldValue.__(cloud_firestore.FieldValue._factory.serverTimestamp());
    }
    static increment(value) {
      return new cloud_firestore.FieldValue.__(cloud_firestore.FieldValue._factory.increment(value));
    }
    toString() {
      return dart.str(this.runtimeType) + "(" + dart.str(this[_delegate$]) + ")";
    }
    _equals(o) {
      if (o == null) return false;
      return FieldValueL().is(o) && dart.equals(o[_delegate$], this[_delegate$]);
    }
    get hashCode() {
      return dart.hashCode(this[_delegate$]);
    }
  };
  (cloud_firestore.FieldValue.__ = function(_delegate) {
    this[_delegate$] = _delegate;
    cloud_firestore.FieldValue.__proto__.new.call(this, _delegate);
    ;
  }).prototype = cloud_firestore.FieldValue.prototype;
  dart.addTypeTests(cloud_firestore.FieldValue);
  dart.addTypeCaches(cloud_firestore.FieldValue);
  dart.setMethodSignature(cloud_firestore.FieldValue, () => ({
    __proto__: dart.getMethods(cloud_firestore.FieldValue.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)])
  }));
  dart.setGetterSignature(cloud_firestore.FieldValue, () => ({
    __proto__: dart.getGetters(cloud_firestore.FieldValue.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(cloud_firestore.FieldValue, L2);
  dart.setFieldSignature(cloud_firestore.FieldValue, () => ({
    __proto__: dart.getFields(cloud_firestore.FieldValue.__proto__),
    [_delegate$]: dart.fieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(cloud_firestore.FieldValue, ['toString', '_equals']);
  dart.defineExtensionAccessors(cloud_firestore.FieldValue, ['hashCode']);
  dart.defineLazy(cloud_firestore.FieldValue, {
    /*cloud_firestore.FieldValue._factory*/get _factory() {
      return platform_interface_field_value_factory.FieldValueFactoryPlatform.instance;
    }
  }, true);
  var _delegatePackingProperty = dart.privateName(cloud_firestore, "_delegatePackingProperty");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C4;
  var app$ = dart.privateName(cloud_firestore, "FirebaseFirestore.app");
  cloud_firestore.FirebaseFirestore = class FirebaseFirestore extends firebase_core_platform_interface.FirebasePluginPlatform {
    get app() {
      return this[app$];
    }
    set app(value) {
      this[app$] = value;
    }
    get [_delegate$]() {
      if (this[_delegatePackingProperty] == null) {
        this[_delegatePackingProperty] = platform_interface_firestore.FirebaseFirestorePlatform.instanceFor({app: this.app});
      }
      return this[_delegatePackingProperty];
    }
    static get instance() {
      return cloud_firestore.FirebaseFirestore.instanceFor({app: firebase_core.Firebase.app()});
    }
    static instanceFor(opts) {
      let app = opts && 'app' in opts ? opts.app : null;
      if (!(app != null)) dart.assertFailed(null, L4, 49, 12, "app != null");
      if (dart.test(cloud_firestore.FirebaseFirestore._cachedInstances[$containsKey](app.name))) {
        return cloud_firestore.FirebaseFirestore._cachedInstances[$_get](app.name);
      }
      let newInstance = new cloud_firestore.FirebaseFirestore.__({app: app});
      cloud_firestore.FirebaseFirestore._cachedInstances[$_set](app.name, newInstance);
      return newInstance;
    }
    static new(opts) {
      let app = opts && 'app' in opts ? opts.app : null;
      return cloud_firestore.FirebaseFirestore.instanceFor({app: app});
    }
    collection(collectionPath) {
      if (!(collectionPath != null)) dart.assertFailed("a collection path cannot be null", L4, 69, 12, "collectionPath != null");
      if (!collectionPath[$isNotEmpty]) dart.assertFailed("a collectionPath path must be a non-empty string", L4, 70, 12, "collectionPath.isNotEmpty");
      if (!!collectionPath[$contains]("//")) dart.assertFailed("a collection path must not contain '//'", L4, 72, 12, "!collectionPath.contains(\"//\")");
      if (!dart.test(cloud_firestore_platform_interface.isValidCollectionPath(collectionPath))) dart.assertFailed("a collection path must point to a valid collection.", L4, 74, 12, "isValidCollectionPath(collectionPath)");
      return new cloud_firestore.CollectionReference.__(this, this[_delegate$].collection(collectionPath));
    }
    batch() {
      return new cloud_firestore.WriteBatch.__(this, this[_delegate$].batch());
    }
    clearPersistence() {
      return this[_delegate$].clearPersistence();
    }
    enablePersistence() {
      return async.async(dart.void, (function* enablePersistence() {
        return this[_delegate$].enablePersistence();
      }).bind(this));
    }
    collectionGroup(collectionPath) {
      if (!(collectionPath != null)) dart.assertFailed("a collection path cannot be null", L4, 102, 12, "collectionPath != null");
      if (!collectionPath[$isNotEmpty]) dart.assertFailed("a collection path must be a non-empty string", L4, 103, 12, "collectionPath.isNotEmpty");
      if (!!collectionPath[$contains]("/")) dart.assertFailed("a collection path passed to collectionGroup() cannot contain '/'", L4, 105, 12, "!collectionPath.contains(\"/\")");
      return new cloud_firestore.Query.__(this, this[_delegate$].collectionGroup(collectionPath));
    }
    disableNetwork() {
      return this[_delegate$].disableNetwork();
    }
    doc(documentPath) {
      if (!(documentPath != null)) dart.assertFailed("a document path cannot be null", L4, 122, 12, "documentPath != null");
      if (!documentPath[$isNotEmpty]) dart.assertFailed("a document path must be a non-empty string", L4, 124, 9, "documentPath.isNotEmpty");
      if (!!documentPath[$contains]("//")) dart.assertFailed("a collection path must not contain '//'", L4, 125, 12, "!documentPath.contains(\"//\")");
      if (!dart.test(cloud_firestore_platform_interface.isValidDocumentPath(documentPath))) dart.assertFailed("a document path must point to a valid document.", L4, 127, 12, "isValidDocumentPath(documentPath)");
      return new cloud_firestore.DocumentReference.__(this, this[_delegate$].doc(documentPath));
    }
    document(documentPath) {
      return this.doc(documentPath);
    }
    enableNetwork() {
      return this[_delegate$].enableNetwork();
    }
    snapshotsInSync() {
      return this[_delegate$].snapshotsInSync();
    }
    runTransaction(T, transactionHandler, opts) {
      let timeout = opts && 'timeout' in opts ? opts.timeout : C4 || CT.C4;
      return async.async(dart.legacy(T), (function* runTransaction() {
        if (!(transactionHandler != null)) dart.assertFailed("transactionHandler cannot be null", L4, 172, 12, "transactionHandler != null");
        let output = null;
        yield this[_delegate$].runTransaction(core.Null, dart.fn(transaction => async.async(core.Null, (function*() {
          output = (yield transactionHandler(new cloud_firestore.Transaction.__(this, transaction)));
        }).bind(this)), TransactionPlatformLToFutureLOfNull()), {timeout: timeout});
        return output;
      }).bind(this));
    }
    set settings(settings) {
      this[_delegate$].settings = settings;
    }
    get settings() {
      return this[_delegate$].settings;
    }
    terminate() {
      return this[_delegate$].terminate();
    }
    waitForPendingWrites() {
      return this[_delegate$].waitForPendingWrites();
    }
    _equals(o) {
      if (o == null) return false;
      return FirebaseFirestoreL().is(o) && o.app.name == this.app.name;
    }
    get hashCode() {
      return hash.hash2(this.app.name, this.app.options);
    }
    toString() {
      return dart.str(dart.wrapType(FirebaseFirestoreL())) + "(app: " + dart.str(this.app.name) + ")";
    }
  };
  (cloud_firestore.FirebaseFirestore.__ = function(opts) {
    let app = opts && 'app' in opts ? opts.app : null;
    this[_delegatePackingProperty] = null;
    this[app$] = app;
    cloud_firestore.FirebaseFirestore.__proto__.new.call(this, app.name, "plugins.flutter.io/firebase_firestore");
    ;
  }).prototype = cloud_firestore.FirebaseFirestore.prototype;
  dart.addTypeTests(cloud_firestore.FirebaseFirestore);
  dart.addTypeCaches(cloud_firestore.FirebaseFirestore);
  dart.setMethodSignature(cloud_firestore.FirebaseFirestore, () => ({
    __proto__: dart.getMethods(cloud_firestore.FirebaseFirestore.__proto__),
    collection: dart.fnType(dart.legacy(cloud_firestore.CollectionReference), [dart.legacy(core.String)]),
    batch: dart.fnType(dart.legacy(cloud_firestore.WriteBatch), []),
    clearPersistence: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    enablePersistence: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    collectionGroup: dart.fnType(dart.legacy(cloud_firestore.Query), [dart.legacy(core.String)]),
    disableNetwork: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    doc: dart.fnType(dart.legacy(cloud_firestore.DocumentReference), [dart.legacy(core.String)]),
    document: dart.fnType(dart.legacy(cloud_firestore.DocumentReference), [dart.legacy(core.String)]),
    enableNetwork: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    snapshotsInSync: dart.fnType(dart.legacy(async.Stream$(dart.void)), []),
    runTransaction: dart.gFnType(T => [dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(cloud_firestore.Transaction)]))], {timeout: dart.legacy(core.Duration)}, {}]),
    terminate: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    waitForPendingWrites: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(cloud_firestore.FirebaseFirestore, () => ({
    __proto__: dart.getGetters(cloud_firestore.FirebaseFirestore.__proto__),
    [_delegate$]: dart.legacy(platform_interface_firestore.FirebaseFirestorePlatform),
    settings: dart.legacy(settings.Settings),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setSetterSignature(cloud_firestore.FirebaseFirestore, () => ({
    __proto__: dart.getSetters(cloud_firestore.FirebaseFirestore.__proto__),
    settings: dart.legacy(settings.Settings)
  }));
  dart.setLibraryUri(cloud_firestore.FirebaseFirestore, L2);
  dart.setFieldSignature(cloud_firestore.FirebaseFirestore, () => ({
    __proto__: dart.getFields(cloud_firestore.FirebaseFirestore.__proto__),
    [_delegatePackingProperty]: dart.fieldType(dart.legacy(platform_interface_firestore.FirebaseFirestorePlatform)),
    app: dart.fieldType(dart.legacy(firebase_core.FirebaseApp))
  }));
  dart.defineExtensionMethods(cloud_firestore.FirebaseFirestore, ['_equals', 'toString']);
  dart.defineExtensionAccessors(cloud_firestore.FirebaseFirestore, ['hashCode']);
  dart.defineLazy(cloud_firestore.FirebaseFirestore, {
    /*cloud_firestore.FirebaseFirestore._cachedInstances*/get _cachedInstances() {
      return new (IdentityMapOfStringL$FirebaseFirestoreL()).new();
    }
  }, true);
  cloud_firestore.Firestore = class Firestore extends cloud_firestore.FirebaseFirestore {
    static new(opts) {
      let app = opts && 'app' in opts ? opts.app : null;
      return FirestoreL().as(cloud_firestore.FirebaseFirestore.instanceFor({app: app}));
    }
    static get instance() {
      return cloud_firestore.FirebaseFirestore.instance;
    }
    static instanceFor(opts) {
      let app = opts && 'app' in opts ? opts.app : null;
      return cloud_firestore.FirebaseFirestore.instanceFor({app: app});
    }
  };
  dart.addTypeTests(cloud_firestore.Firestore);
  dart.addTypeCaches(cloud_firestore.Firestore);
  dart.setLibraryUri(cloud_firestore.Firestore, L2);
  var _firestore$1 = dart.privateName(cloud_firestore, "QueryDocumentSnapshot._firestore");
  var _delegate$3 = dart.privateName(cloud_firestore, "QueryDocumentSnapshot._delegate");
  cloud_firestore.QueryDocumentSnapshot = class QueryDocumentSnapshot extends cloud_firestore.DocumentSnapshot {
    get [_firestore$]() {
      return this[_firestore$1];
    }
    set [_firestore$](value) {
      super[_firestore$] = value;
    }
    get [_delegate$]() {
      return this[_delegate$3];
    }
    set [_delegate$](value) {
      super[_delegate$] = value;
    }
    get exists() {
      return true;
    }
  };
  (cloud_firestore.QueryDocumentSnapshot.__ = function(_firestore, _delegate) {
    this[_firestore$1] = _firestore;
    this[_delegate$3] = _delegate;
    cloud_firestore.QueryDocumentSnapshot.__proto__.__.call(this, _firestore, _delegate);
    ;
  }).prototype = cloud_firestore.QueryDocumentSnapshot.prototype;
  dart.addTypeTests(cloud_firestore.QueryDocumentSnapshot);
  dart.addTypeCaches(cloud_firestore.QueryDocumentSnapshot);
  dart.setLibraryUri(cloud_firestore.QueryDocumentSnapshot, L2);
  dart.setFieldSignature(cloud_firestore.QueryDocumentSnapshot, () => ({
    __proto__: dart.getFields(cloud_firestore.QueryDocumentSnapshot.__proto__),
    [_firestore$]: dart.finalFieldType(dart.legacy(cloud_firestore.FirebaseFirestore)),
    [_delegate$]: dart.finalFieldType(dart.legacy(platform_interface_document_snapshot.DocumentSnapshotPlatform))
  }));
  cloud_firestore.QuerySnapshot = class QuerySnapshot extends core.Object {
    get docs() {
      return this[_delegate$].docs[$map](QueryDocumentSnapshotL(), dart.fn(documentDelegate => new cloud_firestore.QueryDocumentSnapshot.__(this[_firestore$], documentDelegate), DocumentSnapshotPlatformLToQueryDocumentSnapshotL()))[$toList]();
    }
    get documents() {
      return this.docs;
    }
    get docChanges() {
      return this[_delegate$].docChanges[$map](DocumentChangeL(), dart.fn(documentDelegate => new cloud_firestore.DocumentChange.__(this[_firestore$], documentDelegate), DocumentChangePlatformLToDocumentChangeL()))[$toList]();
    }
    get documentChanges() {
      return this.docChanges;
    }
    get metadata() {
      return new cloud_firestore.SnapshotMetadata.__(this[_delegate$].metadata);
    }
    get size() {
      return this[_delegate$].size;
    }
  };
  (cloud_firestore.QuerySnapshot.__ = function(_firestore, _delegate) {
    this[_firestore$] = _firestore;
    this[_delegate$] = _delegate;
    platform_interface_query_snapshot.QuerySnapshotPlatform.verifyExtends(this[_delegate$]);
  }).prototype = cloud_firestore.QuerySnapshot.prototype;
  dart.addTypeTests(cloud_firestore.QuerySnapshot);
  dart.addTypeCaches(cloud_firestore.QuerySnapshot);
  dart.setGetterSignature(cloud_firestore.QuerySnapshot, () => ({
    __proto__: dart.getGetters(cloud_firestore.QuerySnapshot.__proto__),
    docs: dart.legacy(core.List$(dart.legacy(cloud_firestore.QueryDocumentSnapshot))),
    documents: dart.legacy(core.List$(dart.legacy(cloud_firestore.QueryDocumentSnapshot))),
    docChanges: dart.legacy(core.List$(dart.legacy(cloud_firestore.DocumentChange))),
    documentChanges: dart.legacy(core.List$(dart.legacy(cloud_firestore.DocumentChange))),
    metadata: dart.legacy(cloud_firestore.SnapshotMetadata),
    size: dart.legacy(core.int)
  }));
  dart.setLibraryUri(cloud_firestore.QuerySnapshot, L2);
  dart.setFieldSignature(cloud_firestore.QuerySnapshot, () => ({
    __proto__: dart.getFields(cloud_firestore.QuerySnapshot.__proto__),
    [_firestore$]: dart.finalFieldType(dart.legacy(cloud_firestore.FirebaseFirestore)),
    [_delegate$]: dart.finalFieldType(dart.legacy(platform_interface_query_snapshot.QuerySnapshotPlatform))
  }));
  cloud_firestore.SnapshotMetadata = class SnapshotMetadata extends core.Object {
    get hasPendingWrites() {
      return this[_delegate$].hasPendingWrites;
    }
    get isFromCache() {
      return this[_delegate$].isFromCache;
    }
  };
  (cloud_firestore.SnapshotMetadata.__ = function(_delegate) {
    this[_delegate$] = _delegate;
    ;
  }).prototype = cloud_firestore.SnapshotMetadata.prototype;
  dart.addTypeTests(cloud_firestore.SnapshotMetadata);
  dart.addTypeCaches(cloud_firestore.SnapshotMetadata);
  dart.setGetterSignature(cloud_firestore.SnapshotMetadata, () => ({
    __proto__: dart.getGetters(cloud_firestore.SnapshotMetadata.__proto__),
    hasPendingWrites: dart.legacy(core.bool),
    isFromCache: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(cloud_firestore.SnapshotMetadata, L2);
  dart.setFieldSignature(cloud_firestore.SnapshotMetadata, () => ({
    __proto__: dart.getFields(cloud_firestore.SnapshotMetadata.__proto__),
    [_delegate$]: dart.fieldType(dart.legacy(snapshot_metadata.SnapshotMetadataPlatform))
  }));
  cloud_firestore.Transaction = class Transaction extends core.Object {
    get(documentReference) {
      return async.async(DocumentSnapshotL(), (function* get() {
        let documentSnapshotPlatform = (yield this[_delegate$].get(documentReference.path));
        return new cloud_firestore.DocumentSnapshot.__(this[_firestore$], documentSnapshotPlatform);
      }).bind(this));
    }
    delete(documentReference) {
      if (!(documentReference != null)) dart.assertFailed(null, L5, 33, 12, "documentReference != null");
      if (!dart.equals(documentReference.firestore, this[_firestore$])) dart.assertFailed("the document provided is from a different Firestore instance", L5, 34, 12, "documentReference.firestore == _firestore");
      return new cloud_firestore.Transaction.__(this[_firestore$], this[_delegate$].delete(documentReference.path));
    }
    update(documentReference, data) {
      if (!(documentReference != null)) dart.assertFailed(null, L5, 44, 12, "documentReference != null");
      if (!(data != null)) dart.assertFailed(null, L5, 45, 12, "data != null");
      if (!dart.equals(documentReference.firestore, this[_firestore$])) dart.assertFailed("the document provided is from a different Firestore instance", L5, 46, 12, "documentReference.firestore == _firestore");
      return new cloud_firestore.Transaction.__(this[_firestore$], this[_delegate$].update(documentReference.path, cloud_firestore._CodecUtility.replaceValueWithDelegatesInMap(data)));
    }
    set(documentReference, data, options = null) {
      if (!dart.equals(documentReference.firestore, this[_firestore$])) dart.assertFailed("the document provided is from a different Firestore instance", L5, 61, 12, "documentReference.firestore == _firestore");
      return new cloud_firestore.Transaction.__(this[_firestore$], this[_delegate$].set(documentReference.path, cloud_firestore._CodecUtility.replaceValueWithDelegatesInMap(data), options));
    }
  };
  (cloud_firestore.Transaction.__ = function(_firestore, _delegate) {
    this[_firestore$] = _firestore;
    this[_delegate$] = _delegate;
    platform_interface_transaction.TransactionPlatform.verifyExtends(this[_delegate$]);
  }).prototype = cloud_firestore.Transaction.prototype;
  dart.addTypeTests(cloud_firestore.Transaction);
  dart.addTypeCaches(cloud_firestore.Transaction);
  dart.setMethodSignature(cloud_firestore.Transaction, () => ({
    __proto__: dart.getMethods(cloud_firestore.Transaction.__proto__),
    get: dart.fnType(dart.legacy(async.Future$(dart.legacy(cloud_firestore.DocumentSnapshot))), [dart.legacy(cloud_firestore.DocumentReference)]),
    delete: dart.fnType(dart.legacy(cloud_firestore.Transaction), [dart.legacy(cloud_firestore.DocumentReference)]),
    update: dart.fnType(dart.legacy(cloud_firestore.Transaction), [dart.legacy(cloud_firestore.DocumentReference), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))]),
    set: dart.fnType(dart.legacy(cloud_firestore.Transaction), [dart.legacy(cloud_firestore.DocumentReference), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))], [dart.legacy(set_options.SetOptions)])
  }));
  dart.setLibraryUri(cloud_firestore.Transaction, L2);
  dart.setFieldSignature(cloud_firestore.Transaction, () => ({
    __proto__: dart.getFields(cloud_firestore.Transaction.__proto__),
    [_firestore$]: dart.finalFieldType(dart.legacy(cloud_firestore.FirebaseFirestore)),
    [_delegate$]: dart.finalFieldType(dart.legacy(platform_interface_transaction.TransactionPlatform))
  }));
  cloud_firestore._CodecUtility = class _CodecUtility extends core.Object {
    static replaceValueWithDelegatesInMap(data) {
      if (data == null) {
        return null;
      }
      let output = LinkedHashMapOfStringL$dynamic().from(data);
      output[$updateAll](dart.fn((_, value) => cloud_firestore._CodecUtility.valueEncode(value), StringLAnddynamicTodynamic()));
      return output;
    }
    static replaceValueWithDelegatesInArray(data) {
      if (data == null) {
        return null;
      }
      return core.List.from(data)[$map](dart.dynamic, dart.fn(value => cloud_firestore._CodecUtility.valueEncode(value), dynamicTodynamic()))[$toList]();
    }
    static replaceDelegatesWithValueInMap(data, firestore) {
      if (data == null) {
        return null;
      }
      let output = LinkedHashMapOfStringL$dynamic().from(data);
      output[$updateAll](dart.fn((_, value) => cloud_firestore._CodecUtility.valueDecode(value, firestore), StringLAnddynamicTodynamic()));
      return output;
    }
    static replaceDelegatesWithValueInArray(data, firestore) {
      if (data == null) {
        return null;
      }
      return core.List.from(data)[$map](dart.dynamic, dart.fn(value => cloud_firestore._CodecUtility.valueDecode(value, firestore), dynamicTodynamic()))[$toList]();
    }
    static valueEncode(value) {
      if (DocumentReferenceL().is(value)) {
        return value[_delegate$];
      } else if (ListL().is(value)) {
        return cloud_firestore._CodecUtility.replaceValueWithDelegatesInArray(value);
      } else if (MapL().is(value)) {
        return cloud_firestore._CodecUtility.replaceValueWithDelegatesInMap(value);
      }
      return value;
    }
    static valueDecode(value, firestore) {
      if (DocumentReferencePlatformL().is(value)) {
        return new cloud_firestore.DocumentReference.__(firestore, value);
      } else if (ListL().is(value)) {
        return cloud_firestore._CodecUtility.replaceDelegatesWithValueInArray(value, firestore);
      } else if (MapL().is(value)) {
        return cloud_firestore._CodecUtility.replaceDelegatesWithValueInMap(value, firestore);
      }
      return value;
    }
  };
  (cloud_firestore._CodecUtility.new = function() {
    ;
  }).prototype = cloud_firestore._CodecUtility.prototype;
  dart.addTypeTests(cloud_firestore._CodecUtility);
  dart.addTypeCaches(cloud_firestore._CodecUtility);
  dart.setLibraryUri(cloud_firestore._CodecUtility, L2);
  cloud_firestore.WriteBatch = class WriteBatch extends core.Object {
    commit() {
      return this[_delegate$].commit();
    }
    delete(document) {
      if (!(document != null)) dart.assertFailed(null, L6, 28, 12, "document != null");
      if (!dart.equals(document.firestore, this[_firestore$])) dart.assertFailed("the document provided is from a different Firestore instance", L6, 29, 12, "document.firestore == _firestore");
      return this[_delegate$].delete(document.path);
    }
    set(document, data, options = null) {
      if (!(document != null)) dart.assertFailed(null, L6, 42, 12, "document != null");
      if (!(data != null)) dart.assertFailed(null, L6, 43, 12, "data != null");
      if (!dart.equals(document.firestore, this[_firestore$])) dart.assertFailed("the document provided is from a different Firestore instance", L6, 44, 12, "document.firestore == _firestore");
      return this[_delegate$].set(document.path, cloud_firestore._CodecUtility.replaceValueWithDelegatesInMap(data), options);
    }
    setData(document, data, options = null) {
      return this.set(document, data, options);
    }
    update(document, data) {
      if (!(document != null)) dart.assertFailed(null, L6, 61, 12, "document != null");
      if (!(data != null)) dart.assertFailed(null, L6, 62, 12, "data != null");
      if (!dart.equals(document.firestore, this[_firestore$])) dart.assertFailed("the document provided is from a different Firestore instance", L6, 63, 12, "document.firestore == _firestore");
      return this[_delegate$].update(document.path, cloud_firestore._CodecUtility.replaceValueWithDelegatesInMap(data));
    }
    updateData(document, data) {
      return this.update(document, data);
    }
  };
  (cloud_firestore.WriteBatch.__ = function(_firestore, _delegate) {
    this[_firestore$] = _firestore;
    this[_delegate$] = _delegate;
    platform_interface_write_batch.WriteBatchPlatform.verifyExtends(this[_delegate$]);
  }).prototype = cloud_firestore.WriteBatch.prototype;
  dart.addTypeTests(cloud_firestore.WriteBatch);
  dart.addTypeCaches(cloud_firestore.WriteBatch);
  dart.setMethodSignature(cloud_firestore.WriteBatch, () => ({
    __proto__: dart.getMethods(cloud_firestore.WriteBatch.__proto__),
    commit: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    delete: dart.fnType(dart.void, [dart.legacy(cloud_firestore.DocumentReference)]),
    set: dart.fnType(dart.void, [dart.legacy(cloud_firestore.DocumentReference), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))], [dart.legacy(set_options.SetOptions)]),
    setData: dart.fnType(dart.void, [dart.legacy(cloud_firestore.DocumentReference), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))], [dart.legacy(set_options.SetOptions)]),
    update: dart.fnType(dart.void, [dart.legacy(cloud_firestore.DocumentReference), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))]),
    updateData: dart.fnType(dart.void, [dart.legacy(cloud_firestore.DocumentReference), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))])
  }));
  dart.setLibraryUri(cloud_firestore.WriteBatch, L2);
  dart.setFieldSignature(cloud_firestore.WriteBatch, () => ({
    __proto__: dart.getFields(cloud_firestore.WriteBatch.__proto__),
    [_firestore$]: dart.finalFieldType(dart.legacy(cloud_firestore.FirebaseFirestore)),
    [_delegate$]: dart.finalFieldType(dart.legacy(platform_interface_write_batch.WriteBatchPlatform))
  }));
  dart.trackLibraries("packages/cloud_firestore/cloud_firestore.dart", {
    "package:cloud_firestore/cloud_firestore.dart": cloud_firestore
  }, {
    "package:cloud_firestore/cloud_firestore.dart": ["src/collection_reference.dart", "src/document_change.dart", "src/document_reference.dart", "src/document_snapshot.dart", "src/field_value.dart", "src/firestore.dart", "src/query.dart", "src/query_document_snapshot.dart", "src/query_snapshot.dart", "src/snapshot_metadata.dart", "src/transaction.dart", "src/utils/codec_utility.dart", "src/write_batch.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/query.dart","src/collection_reference.dart","src/document_change.dart","src/document_reference.dart","src/document_snapshot.dart","src/field_value.dart","src/firestore.dart","src/query_document_snapshot.dart","src/query_snapshot.dart","src/snapshot_metadata.dart","src/transaction.dart","src/utils/codec_utility.dart","src/write_batch.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/cloud_firestore/cloud_firestore.dart.lib.js"}');
  // Exports:
  return {
    cloud_firestore: cloud_firestore
  };
}));

//# sourceMappingURL=cloud_firestore.dart.lib.js.map
