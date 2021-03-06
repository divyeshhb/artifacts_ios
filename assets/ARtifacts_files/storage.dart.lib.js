define(['dart_sdk', 'packages/firebase/src/js.dart', 'packages/http_parser/src/http_date.dart', 'packages/firebase/src/interop/js_interop.dart'], (function load__packages__firebase__src__storage_dart(dart_sdk, packages__firebase__src__js$46dart, packages__http_parser__src__http_date$46dart, packages__firebase__src__interop__js_interop$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const js = dart_sdk.js;
  const _interceptors = dart_sdk._interceptors;
  const js_util = dart_sdk.js_util;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const js$ = packages__firebase__src__js$46dart.src__js;
  const http_date = packages__http_parser__src__http_date$46dart.src__http_date;
  const js_interop = packages__firebase__src__interop__js_interop$46dart.src__interop__js_interop;
  var storage = Object.create(dart.library);
  var functions = Object.create(dart.library);
  var database = Object.create(dart.library);
  var auth$ = Object.create(dart.library);
  var app = Object.create(dart.library);
  var firestore = Object.create(dart.library);
  var utils = Object.create(dart.library);
  var $toString = dartx.toString;
  var $cast = dartx.cast;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $insert = dartx.insert;
  var $length = dartx.length;
  var $_set = dartx._set;
  var $forEach = dartx.forEach;
  dart._checkModuleNullSafetyMode(false);
  var TaskStateL = () => (TaskStateL = dart.constFn(dart.legacy(storage.TaskState)))();
  var StorageL = () => (StorageL = dart.constFn(dart.legacy(storage.Storage)))();
  var ExpandoOfStorageL = () => (ExpandoOfStorageL = dart.constFn(core.Expando$(StorageL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var UriL = () => (UriL = dart.constFn(dart.legacy(core.Uri)))();
  var FullMetadataL = () => (FullMetadataL = dart.constFn(dart.legacy(storage.FullMetadata)))();
  var dynamicToFullMetadataL = () => (dynamicToFullMetadataL = dart.constFn(dart.fnType(FullMetadataL(), [dart.dynamic])))();
  var ListResultL = () => (ListResultL = dart.constFn(dart.legacy(storage.ListResult)))();
  var ListResultJsImplLToListResultL = () => (ListResultJsImplLToListResultL = dart.constFn(dart.fnType(ListResultL(), [dart.legacy(dart.anonymousJSType("ListResultJsImpl"))])))();
  var StorageReferenceL = () => (StorageReferenceL = dart.constFn(dart.legacy(storage.StorageReference)))();
  var ExpandoOfStorageReferenceL = () => (ExpandoOfStorageReferenceL = dart.constFn(core.Expando$(StorageReferenceL())))();
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var ExpandoOfFullMetadataL = () => (ExpandoOfFullMetadataL = dart.constFn(core.Expando$(FullMetadataL())))();
  var UploadTaskSnapshotL = () => (UploadTaskSnapshotL = dart.constFn(dart.legacy(storage.UploadTaskSnapshot)))();
  var UploadTaskSnapshotJsImplLToUploadTaskSnapshotL = () => (UploadTaskSnapshotJsImplLToUploadTaskSnapshotL = dart.constFn(dart.fnType(UploadTaskSnapshotL(), [dart.legacy(dart.anonymousJSType("UploadTaskSnapshotJsImpl"))])))();
  var UploadTaskSnapshotJsImplLToNull = () => (UploadTaskSnapshotJsImplLToNull = dart.constFn(dart.fnType(core.Null, [dart.legacy(dart.anonymousJSType("UploadTaskSnapshotJsImpl"))])))();
  var UploadTaskSnapshotJsImplLToLNull = () => (UploadTaskSnapshotJsImplLToLNull = dart.constFn(dart.legacy(UploadTaskSnapshotJsImplLToNull())))();
  var dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  var dynamicToLvoid = () => (dynamicToLvoid = dart.constFn(dart.legacy(dynamicTovoid())))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var VoidToLNull = () => (VoidToLNull = dart.constFn(dart.legacy(VoidToNull())))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var StreamControllerOfUploadTaskSnapshotL = () => (StreamControllerOfUploadTaskSnapshotL = dart.constFn(async.StreamController$(UploadTaskSnapshotL())))();
  var UploadTaskL = () => (UploadTaskL = dart.constFn(dart.legacy(storage.UploadTask)))();
  var ExpandoOfUploadTaskL = () => (ExpandoOfUploadTaskL = dart.constFn(core.Expando$(UploadTaskL())))();
  var ExpandoOfUploadTaskSnapshotL = () => (ExpandoOfUploadTaskSnapshotL = dart.constFn(core.Expando$(UploadTaskSnapshotL())))();
  var dynamicToStorageReferenceL = () => (dynamicToStorageReferenceL = dart.constFn(dart.fnType(StorageReferenceL(), [dart.dynamic])))();
  var ExpandoOfListResultL = () => (ExpandoOfListResultL = dart.constFn(core.Expando$(ListResultL())))();
  var FunctionsL = () => (FunctionsL = dart.constFn(dart.legacy(functions.Functions)))();
  var ExpandoOfFunctionsL = () => (ExpandoOfFunctionsL = dart.constFn(core.Expando$(FunctionsL())))();
  var HttpsCallableResultL = () => (HttpsCallableResultL = dart.constFn(dart.legacy(functions.HttpsCallableResult)))();
  var HttpsCallableResultJsImplLToHttpsCallableResultL = () => (HttpsCallableResultJsImplLToHttpsCallableResultL = dart.constFn(dart.fnType(HttpsCallableResultL(), [dart.legacy(dart.anonymousJSType("HttpsCallableResultJsImpl"))])))();
  var HttpsCallableL = () => (HttpsCallableL = dart.constFn(dart.legacy(functions.HttpsCallable)))();
  var ExpandoOfHttpsCallableL = () => (ExpandoOfHttpsCallableL = dart.constFn(core.Expando$(HttpsCallableL())))();
  var ExpandoOfHttpsCallableResultL = () => (ExpandoOfHttpsCallableResultL = dart.constFn(core.Expando$(HttpsCallableResultL())))();
  var DatabaseL = () => (DatabaseL = dart.constFn(dart.legacy(database.Database)))();
  var ExpandoOfDatabaseL = () => (ExpandoOfDatabaseL = dart.constFn(core.Expando$(DatabaseL())))();
  var DatabaseReferenceOfReferenceJsImplL = () => (DatabaseReferenceOfReferenceJsImplL = dart.constFn(database.DatabaseReference$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")))))();
  var TransactionL = () => (TransactionL = dart.constFn(dart.legacy(database.Transaction)))();
  var CompleterOfTransactionL = () => (CompleterOfTransactionL = dart.constFn(async.Completer$(TransactionL())))();
  var dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  var dynamicToLdynamic = () => (dynamicToLdynamic = dart.constFn(dart.legacy(dynamicTodynamic())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var dynamicAndboolLAndDataSnapshotJsImplLToNull = () => (dynamicAndboolLAndDataSnapshotJsImplLToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, boolL(), dart.legacy(dart.anonymousJSType("DataSnapshotJsImpl"))])))();
  var dynamicAndboolLAndDataSnapshotJsImplLToLNull = () => (dynamicAndboolLAndDataSnapshotJsImplLToLNull = dart.constFn(dart.legacy(dynamicAndboolLAndDataSnapshotJsImplLToNull())))();
  var QueryOfQueryJsImplL = () => (QueryOfQueryJsImplL = dart.constFn(database.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")))))();
  var DataSnapshotJsImplLAndStringLToNull = () => (DataSnapshotJsImplLAndStringLToNull = dart.constFn(dart.fnType(core.Null, [dart.legacy(dart.anonymousJSType("DataSnapshotJsImpl"))], [StringL()])))();
  var DataSnapshotJsImplLAndStringLToLNull = () => (DataSnapshotJsImplLAndStringLToLNull = dart.constFn(dart.legacy(DataSnapshotJsImplLAndStringLToNull())))();
  var QueryEventL = () => (QueryEventL = dart.constFn(dart.legacy(database.QueryEvent)))();
  var StreamControllerOfQueryEventL = () => (StreamControllerOfQueryEventL = dart.constFn(async.StreamController$(QueryEventL())))();
  var CompleterOfQueryEventL = () => (CompleterOfQueryEventL = dart.constFn(async.Completer$(QueryEventL())))();
  var DatabaseReferenceLOfReferenceJsImplL = () => (DatabaseReferenceLOfReferenceJsImplL = dart.constFn(dart.legacy(DatabaseReferenceOfReferenceJsImplL())))();
  var ExpandoOfDatabaseReferenceLOfReferenceJsImplL = () => (ExpandoOfDatabaseReferenceLOfReferenceJsImplL = dart.constFn(core.Expando$(DatabaseReferenceLOfReferenceJsImplL())))();
  var DataSnapshotL = () => (DataSnapshotL = dart.constFn(dart.legacy(database.DataSnapshot)))();
  var ExpandoOfDataSnapshotL = () => (ExpandoOfDataSnapshotL = dart.constFn(core.Expando$(DataSnapshotL())))();
  var ReferenceJsImplLToDatabaseReferenceLOfReferenceJsImplL = () => (ReferenceJsImplLToDatabaseReferenceLOfReferenceJsImplL = dart.constFn(dart.fnType(DatabaseReferenceLOfReferenceJsImplL(), [dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference"))])))();
  var UserInfoOfUserInfoJsImplL = () => (UserInfoOfUserInfoJsImplL = dart.constFn(auth$.UserInfo$(dart.legacy(dart.anonymousJSType("UserInfoJsImpl")))))();
  var UserInfoLOfUserInfoJsImplL = () => (UserInfoLOfUserInfoJsImplL = dart.constFn(dart.legacy(UserInfoOfUserInfoJsImplL())))();
  var dynamicToUserInfoLOfUserInfoJsImplL = () => (dynamicToUserInfoLOfUserInfoJsImplL = dart.constFn(dart.fnType(UserInfoLOfUserInfoJsImplL(), [dart.dynamic])))();
  var UserCredentialL = () => (UserCredentialL = dart.constFn(dart.legacy(auth$.UserCredential)))();
  var UserCredentialJsImplLToUserCredentialL = () => (UserCredentialJsImplLToUserCredentialL = dart.constFn(dart.fnType(UserCredentialL(), [dart.legacy(dart.anonymousJSType("UserCredentialJsImpl"))])))();
  var ConfirmationResultL = () => (ConfirmationResultL = dart.constFn(dart.legacy(auth$.ConfirmationResult)))();
  var ConfirmationResultJsImplLToConfirmationResultL = () => (ConfirmationResultJsImplLToConfirmationResultL = dart.constFn(dart.fnType(ConfirmationResultL(), [dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.ConfirmationResult, "firebase.auth.ConfirmationResult"))])))();
  var UserL = () => (UserL = dart.constFn(dart.legacy(auth$.User)))();
  var UserJsImplLToUserL = () => (UserJsImplLToUserL = dart.constFn(dart.fnType(UserL(), [dart.legacy(dart.anonymousJSType("UserJsImpl"))])))();
  var IdTokenResultL = () => (IdTokenResultL = dart.constFn(dart.legacy(auth$.IdTokenResult)))();
  var IdTokenResultImplLToIdTokenResultL = () => (IdTokenResultImplLToIdTokenResultL = dart.constFn(dart.fnType(IdTokenResultL(), [dart.legacy(dart.anonymousJSType("IdTokenResultImpl"))])))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(StringL(), dart.dynamic)))();
  var MapLOfStringL$dynamic = () => (MapLOfStringL$dynamic = dart.constFn(dart.legacy(MapOfStringL$dynamic())))();
  var ExpandoOfUserL = () => (ExpandoOfUserL = dart.constFn(core.Expando$(UserL())))();
  var UserJsImplLToNull = () => (UserJsImplLToNull = dart.constFn(dart.fnType(core.Null, [dart.legacy(dart.anonymousJSType("UserJsImpl"))])))();
  var UserJsImplLToLNull = () => (UserJsImplLToLNull = dart.constFn(dart.legacy(UserJsImplLToNull())))();
  var StreamControllerOfUserL = () => (StreamControllerOfUserL = dart.constFn(async.StreamController$(UserL())))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(StringL())))();
  var ListLOfStringL = () => (ListLOfStringL = dart.constFn(dart.legacy(ListOfStringL())))();
  var ListLToListLOfStringL = () => (ListLToListLOfStringL = dart.constFn(dart.fnType(ListLOfStringL(), [ListL()])))();
  var AuthL = () => (AuthL = dart.constFn(dart.legacy(auth$.Auth)))();
  var ExpandoOfAuthL = () => (ExpandoOfAuthL = dart.constFn(core.Expando$(AuthL())))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var AppL = () => (AppL = dart.constFn(dart.legacy(app.App)))();
  var ExpandoOfAppL = () => (ExpandoOfAppL = dart.constFn(core.Expando$(AppL())))();
  var QueryOfQueryJsImplL$ = () => (QueryOfQueryJsImplL$ = dart.constFn(firestore.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")))))();
  var dynamicToPromiseJsImplL = () => (dynamicToPromiseJsImplL = dart.constFn(dart.fnType(dart.legacy(dart.lazyJSType(() => dart.global.Promise, "Promise")), [dart.dynamic])))();
  var dynamicToLPromiseJsImplL = () => (dynamicToLPromiseJsImplL = dart.constFn(dart.legacy(dynamicToPromiseJsImplL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var FutureOfObjectL = () => (FutureOfObjectL = dart.constFn(async.Future$(ObjectL())))();
  var FutureLOfObjectL = () => (FutureLOfObjectL = dart.constFn(dart.legacy(FutureOfObjectL())))();
  var ObjectLTodynamic = () => (ObjectLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [ObjectL()])))();
  var FirestoreL = () => (FirestoreL = dart.constFn(dart.legacy(firestore.Firestore)))();
  var ExpandoOfFirestoreL = () => (ExpandoOfFirestoreL = dart.constFn(core.Expando$(FirestoreL())))();
  var WriteBatchL = () => (WriteBatchL = dart.constFn(dart.legacy(firestore.WriteBatch)))();
  var ExpandoOfWriteBatchL = () => (ExpandoOfWriteBatchL = dart.constFn(core.Expando$(WriteBatchL())))();
  var DocumentSnapshotL = () => (DocumentSnapshotL = dart.constFn(dart.legacy(firestore.DocumentSnapshot)))();
  var DocumentSnapshotJsImplLToDocumentSnapshotL = () => (DocumentSnapshotJsImplLToDocumentSnapshotL = dart.constFn(dart.fnType(DocumentSnapshotL(), [dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot"))])))();
  var DocumentSnapshotJsImplLToNull = () => (DocumentSnapshotJsImplLToNull = dart.constFn(dart.fnType(core.Null, [dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot"))])))();
  var DocumentSnapshotJsImplLToLNull = () => (DocumentSnapshotJsImplLToLNull = dart.constFn(dart.legacy(DocumentSnapshotJsImplLToNull())))();
  var StreamControllerOfDocumentSnapshotL = () => (StreamControllerOfDocumentSnapshotL = dart.constFn(async.StreamController$(DocumentSnapshotL())))();
  var DocumentReferenceL = () => (DocumentReferenceL = dart.constFn(dart.legacy(firestore.DocumentReference)))();
  var ExpandoOfDocumentReferenceL = () => (ExpandoOfDocumentReferenceL = dart.constFn(core.Expando$(DocumentReferenceL())))();
  var QuerySnapshotL = () => (QuerySnapshotL = dart.constFn(dart.legacy(firestore.QuerySnapshot)))();
  var QuerySnapshotJsImplLToQuerySnapshotL = () => (QuerySnapshotJsImplLToQuerySnapshotL = dart.constFn(dart.fnType(QuerySnapshotL(), [dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.QuerySnapshot, "firebase.firestore.QuerySnapshot"))])))();
  var QuerySnapshotJsImplLToNull = () => (QuerySnapshotJsImplLToNull = dart.constFn(dart.fnType(core.Null, [dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.QuerySnapshot, "firebase.firestore.QuerySnapshot"))])))();
  var QuerySnapshotJsImplLToLNull = () => (QuerySnapshotJsImplLToLNull = dart.constFn(dart.legacy(QuerySnapshotJsImplLToNull())))();
  var StreamControllerOfQuerySnapshotL = () => (StreamControllerOfQuerySnapshotL = dart.constFn(async.StreamController$(QuerySnapshotL())))();
  var JSArrayOfDocumentSnapshotJsImplL = () => (JSArrayOfDocumentSnapshotJsImplL = dart.constFn(_interceptors.JSArray$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot")))))();
  var CollectionReferenceOfCollectionReferenceJsImplL = () => (CollectionReferenceOfCollectionReferenceJsImplL = dart.constFn(firestore.CollectionReference$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference")))))();
  var DocumentReferenceJsImplLToDocumentReferenceL = () => (DocumentReferenceJsImplLToDocumentReferenceL = dart.constFn(dart.fnType(DocumentReferenceL(), [dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentReference, "firebase.firestore.DocumentReference"))])))();
  var CollectionReferenceLOfCollectionReferenceJsImplL = () => (CollectionReferenceLOfCollectionReferenceJsImplL = dart.constFn(dart.legacy(CollectionReferenceOfCollectionReferenceJsImplL())))();
  var ExpandoOfCollectionReferenceLOfCollectionReferenceJsImplL = () => (ExpandoOfCollectionReferenceLOfCollectionReferenceJsImplL = dart.constFn(core.Expando$(CollectionReferenceLOfCollectionReferenceJsImplL())))();
  var DocumentChangeL = () => (DocumentChangeL = dart.constFn(dart.legacy(firestore.DocumentChange)))();
  var ExpandoOfDocumentChangeL = () => (ExpandoOfDocumentChangeL = dart.constFn(core.Expando$(DocumentChangeL())))();
  var ExpandoOfDocumentSnapshotL = () => (ExpandoOfDocumentSnapshotL = dart.constFn(core.Expando$(DocumentSnapshotL())))();
  var dynamicToDocumentChangeL = () => (dynamicToDocumentChangeL = dart.constFn(dart.fnType(DocumentChangeL(), [dart.dynamic])))();
  var dynamicToDocumentSnapshotL = () => (dynamicToDocumentSnapshotL = dart.constFn(dart.fnType(DocumentSnapshotL(), [dart.dynamic])))();
  var ExpandoOfQuerySnapshotL = () => (ExpandoOfQuerySnapshotL = dart.constFn(core.Expando$(QuerySnapshotL())))();
  var TransactionL$ = () => (TransactionL$ = dart.constFn(dart.legacy(firestore.Transaction)))();
  var ExpandoOfTransactionL = () => (ExpandoOfTransactionL = dart.constFn(core.Expando$(TransactionL$())))();
  var IterableL = () => (IterableL = dart.constFn(dart.legacy(core.Iterable)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var DateTimeL = () => (DateTimeL = dart.constFn(dart.legacy(core.DateTime)))();
  var dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  var FieldValueL = () => (FieldValueL = dart.constFn(dart.legacy(firestore.FieldValue)))();
  var FunctionL = () => (FunctionL = dart.constFn(dart.legacy(core.Function)))();
  var ObjectLTovoid = () => (ObjectLTovoid = dart.constFn(dart.fnType(dart.void, [ObjectL()])))();
  var ObjectLToLvoid = () => (ObjectLToLvoid = dart.constFn(dart.legacy(ObjectLTovoid())))();
  const CT = Object.create(null);
  var L0 = "package:firebase/src/storage.dart";
  var L2 = "package:firebase/src/database.dart";
  var L6 = "package:firebase/src/firestore.dart";
  var L5 = "package:firebase/src/app.dart";
  var L3 = "package:firebase/src/auth.dart";
  var L1 = "package:firebase/src/functions.dart";
  var L7 = "package:firebase/src/utils.dart";
  var L4 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase-7.3.2/lib/src/auth.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: storage.TaskState.prototype,
        [_name$]: "TaskState.RUNNING",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: storage.TaskState.prototype,
        [_name$]: "TaskState.PAUSED",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: storage.TaskState.prototype,
        [_name$]: "TaskState.SUCCESS",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: storage.TaskState.prototype,
        [_name$]: "TaskState.CANCELED",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: storage.TaskState.prototype,
        [_name$]: "TaskState.ERROR",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], TaskStateL());
    },
    get C6() {
      return C6 = dart.fn(storage.FullMetadata.getInstance, dynamicToFullMetadataL());
    },
    get C7() {
      return C7 = dart.fn(storage.ListResult.getInstance, ListResultJsImplLToListResultL());
    },
    get C8() {
      return C8 = dart.fn(storage.UploadTaskSnapshot.getInstance, UploadTaskSnapshotJsImplLToUploadTaskSnapshotL());
    },
    get C9() {
      return C9 = dart.fn(functions.HttpsCallableResult.getInstance, HttpsCallableResultJsImplLToHttpsCallableResultL());
    },
    get C10() {
      return C10 = dart.fn(database.DatabaseReference.getInstance, ReferenceJsImplLToDatabaseReferenceLOfReferenceJsImplL());
    },
    get C11() {
      return C11 = dart.fn(auth$.User.getInstance, UserJsImplLToUserL());
    },
    get C12() {
      return C12 = dart.fn(utils.jsify, ObjectLTodynamic());
    },
    get C13() {
      return C13 = dart.fn(utils.dartify, ObjectLTodynamic());
    },
    get C14() {
      return C14 = dart.fn(firestore.DocumentSnapshot.getInstance, DocumentSnapshotJsImplLToDocumentSnapshotL());
    },
    get C15() {
      return C15 = dart.fn(firestore.QuerySnapshot.getInstance, QuerySnapshotJsImplLToQuerySnapshotL());
    },
    get C16() {
      return C16 = dart.fn(firestore.DocumentReference.getInstance, DocumentReferenceJsImplLToDocumentReferenceL());
    }
  }, false);
  var _name$ = dart.privateName(storage, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  storage.TaskState = class TaskState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (storage.TaskState.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = storage.TaskState.prototype;
  dart.addTypeTests(storage.TaskState);
  dart.addTypeCaches(storage.TaskState);
  dart.setMethodSignature(storage.TaskState, () => ({
    __proto__: dart.getMethods(storage.TaskState.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(storage.TaskState, L0);
  dart.setFieldSignature(storage.TaskState, () => ({
    __proto__: dart.getFields(storage.TaskState.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(storage.TaskState, ['toString']);
  storage.TaskState.RUNNING = C0 || CT.C0;
  storage.TaskState.PAUSED = C1 || CT.C1;
  storage.TaskState.SUCCESS = C2 || CT.C2;
  storage.TaskState.CANCELED = C3 || CT.C3;
  storage.TaskState.ERROR = C4 || CT.C4;
  storage.TaskState.values = C5 || CT.C5;
  storage.Storage = class Storage extends js$.JsObjectWrapper$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.storage.Storage, "firebase.storage.Storage"))) {
    get app() {
      return app.App.getInstance(this.jsObject.app);
    }
    get maxOperationRetryTime() {
      return this.jsObject.maxOperationRetryTime;
    }
    get maxUploadRetryTime() {
      return this.jsObject.maxUploadRetryTime;
    }
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = storage.Storage._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new storage.Storage._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    ref(path = null) {
      return storage.StorageReference.getInstance(this.jsObject.ref(path));
    }
    refFromURL(url) {
      return storage.StorageReference.getInstance(this.jsObject.refFromURL(url));
    }
    setMaxOperationRetryTime(time) {
      return this.jsObject.setMaxOperationRetryTime(time);
    }
    setMaxUploadRetryTime(time) {
      return this.jsObject.setMaxUploadRetryTime(time);
    }
  };
  (storage.Storage._fromJsObject = function(jsObject) {
    storage.Storage.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = storage.Storage.prototype;
  dart.addTypeTests(storage.Storage);
  dart.addTypeCaches(storage.Storage);
  dart.setMethodSignature(storage.Storage, () => ({
    __proto__: dart.getMethods(storage.Storage.__proto__),
    ref: dart.fnType(dart.legacy(storage.StorageReference), [], [dart.legacy(core.String)]),
    refFromURL: dart.fnType(dart.legacy(storage.StorageReference), [dart.legacy(core.String)]),
    setMaxOperationRetryTime: dart.fnType(dart.void, [dart.legacy(core.int)]),
    setMaxUploadRetryTime: dart.fnType(dart.void, [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(storage.Storage, () => ({
    __proto__: dart.getGetters(storage.Storage.__proto__),
    app: dart.legacy(app.App),
    maxOperationRetryTime: dart.legacy(core.int),
    maxUploadRetryTime: dart.legacy(core.int)
  }));
  dart.setLibraryUri(storage.Storage, L0);
  dart.defineLazy(storage.Storage, {
    /*storage.Storage._expando*/get _expando() {
      return new (ExpandoOfStorageL()).new();
    }
  }, true);
  var C6;
  var C7;
  storage.StorageReference = class StorageReference extends js$.JsObjectWrapper$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.storage.Reference, "firebase.storage.Reference"))) {
    get bucket() {
      return this.jsObject.bucket;
    }
    get fullPath() {
      return this.jsObject.fullPath;
    }
    get name() {
      return this.jsObject.name;
    }
    get parent() {
      return storage.StorageReference.getInstance(this.jsObject.parent);
    }
    get root() {
      return storage.StorageReference.getInstance(this.jsObject.root);
    }
    get storage() {
      return storage.Storage.getInstance(this.jsObject.storage);
    }
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = storage.StorageReference._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new storage.StorageReference._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    child(path) {
      return storage.StorageReference.getInstance(this.jsObject.child(path));
    }
    delete() {
      return utils.handleThenable(dart.dynamic, this.jsObject.delete());
    }
    getDownloadURL() {
      return async.async(UriL(), (function* getDownloadURL() {
        let uriString = (yield utils.handleThenable(StringL(), this.jsObject.getDownloadURL()));
        return core.Uri.parse(uriString);
      }).bind(this));
    }
    getMetadata() {
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("FullMetadataJsImpl")), this.jsObject.getMetadata()).then(FullMetadataL(), C6 || CT.C6);
    }
    list(options) {
      let t0;
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("ListResultJsImpl")), this.jsObject.list((t0 = options, t0 == null ? null : t0.jsObject))).then(ListResultL(), C7 || CT.C7);
    }
    listAll() {
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("ListResultJsImpl")), this.jsObject.listAll()).then(ListResultL(), C7 || CT.C7);
    }
    put(blob, metadata = null) {
      let taskImpl = null;
      if (metadata != null) {
        taskImpl = this.jsObject.put(blob, metadata.jsObject);
      } else {
        taskImpl = this.jsObject.put(blob);
      }
      return storage.UploadTask.getInstance(taskImpl);
    }
    putString(data, format = null, metadata = null) {
      let taskImpl = null;
      if (metadata != null) {
        taskImpl = this.jsObject.putString(data, format, metadata.jsObject);
      } else if (format != null) {
        taskImpl = this.jsObject.putString(data, format);
      } else {
        taskImpl = this.jsObject.putString(data);
      }
      return storage.UploadTask.getInstance(taskImpl);
    }
    toString() {
      return dart.toString(this.jsObject);
    }
    updateMetadata(metadata) {
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("FullMetadataJsImpl")), this.jsObject.updateMetadata(metadata.jsObject)).then(FullMetadataL(), C6 || CT.C6);
    }
  };
  (storage.StorageReference._fromJsObject = function(jsObject) {
    storage.StorageReference.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = storage.StorageReference.prototype;
  dart.addTypeTests(storage.StorageReference);
  dart.addTypeCaches(storage.StorageReference);
  dart.setMethodSignature(storage.StorageReference, () => ({
    __proto__: dart.getMethods(storage.StorageReference.__proto__),
    child: dart.fnType(dart.legacy(storage.StorageReference), [dart.legacy(core.String)]),
    delete: dart.fnType(dart.legacy(async.Future), []),
    getDownloadURL: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Uri))), []),
    getMetadata: dart.fnType(dart.legacy(async.Future$(dart.legacy(storage.FullMetadata))), []),
    list: dart.fnType(dart.legacy(async.Future$(dart.legacy(storage.ListResult))), [dart.legacy(storage.ListOptions)]),
    listAll: dart.fnType(dart.legacy(async.Future$(dart.legacy(storage.ListResult))), []),
    put: dart.fnType(dart.legacy(storage.UploadTask), [dart.dynamic], [dart.legacy(storage.UploadMetadata)]),
    putString: dart.fnType(dart.legacy(storage.UploadTask), [dart.legacy(core.String)], [dart.legacy(core.String), dart.legacy(storage.UploadMetadata)]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    updateMetadata: dart.fnType(dart.legacy(async.Future$(dart.legacy(storage.FullMetadata))), [dart.legacy(storage.SettableMetadata)])
  }));
  dart.setGetterSignature(storage.StorageReference, () => ({
    __proto__: dart.getGetters(storage.StorageReference.__proto__),
    bucket: dart.legacy(core.String),
    fullPath: dart.legacy(core.String),
    name: dart.legacy(core.String),
    parent: dart.legacy(storage.StorageReference),
    root: dart.legacy(storage.StorageReference),
    storage: dart.legacy(storage.Storage)
  }));
  dart.setLibraryUri(storage.StorageReference, L0);
  dart.defineExtensionMethods(storage.StorageReference, ['toString']);
  dart.defineLazy(storage.StorageReference, {
    /*storage.StorageReference._expando*/get _expando() {
      return new (ExpandoOfStorageReferenceL()).new();
    }
  }, true);
  const _is__SettableMetadataBase_default = Symbol('_is__SettableMetadataBase_default');
  storage._SettableMetadataBase$ = dart.generic(T => {
    class _SettableMetadataBase extends js$.JsObjectWrapper$(dart.legacy(T)) {
      get cacheControl() {
        return this.jsObject.cacheControl;
      }
      set cacheControl(s) {
        this.jsObject.cacheControl = s;
      }
      get contentDisposition() {
        return this.jsObject.contentDisposition;
      }
      set contentDisposition(s) {
        this.jsObject.contentDisposition = s;
      }
      get contentEncoding() {
        return this.jsObject.contentEncoding;
      }
      set contentEncoding(s) {
        this.jsObject.contentEncoding = s;
      }
      get contentLanguage() {
        return this.jsObject.contentLanguage;
      }
      set contentLanguage(s) {
        this.jsObject.contentLanguage = s;
      }
      get contentType() {
        return this.jsObject.contentType;
      }
      set contentType(s) {
        this.jsObject.contentType = s;
      }
      get customMetadata() {
        let t0;
        t0 = MapL().as(utils.dartify(this.jsObject.customMetadata));
        return t0 == null ? null : t0[$cast](StringL(), StringL());
      }
      set customMetadata(m) {
        this.jsObject.customMetadata = utils.jsify(m);
      }
    }
    (_SettableMetadataBase.fromJsObject = function(jsObject) {
      _SettableMetadataBase.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = _SettableMetadataBase.prototype;
    dart.addTypeTests(_SettableMetadataBase);
    _SettableMetadataBase.prototype[_is__SettableMetadataBase_default] = true;
    dart.addTypeCaches(_SettableMetadataBase);
    dart.setGetterSignature(_SettableMetadataBase, () => ({
      __proto__: dart.getGetters(_SettableMetadataBase.__proto__),
      cacheControl: dart.legacy(core.String),
      contentDisposition: dart.legacy(core.String),
      contentEncoding: dart.legacy(core.String),
      contentLanguage: dart.legacy(core.String),
      contentType: dart.legacy(core.String),
      customMetadata: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))
    }));
    dart.setSetterSignature(_SettableMetadataBase, () => ({
      __proto__: dart.getSetters(_SettableMetadataBase.__proto__),
      cacheControl: dart.legacy(core.String),
      contentDisposition: dart.legacy(core.String),
      contentEncoding: dart.legacy(core.String),
      contentLanguage: dart.legacy(core.String),
      contentType: dart.legacy(core.String),
      customMetadata: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))
    }));
    dart.setLibraryUri(_SettableMetadataBase, L0);
    return _SettableMetadataBase;
  });
  storage._SettableMetadataBase = storage._SettableMetadataBase$();
  dart.addTypeTests(storage._SettableMetadataBase, _is__SettableMetadataBase_default);
  const _is__UploadMetadataBase_default = Symbol('_is__UploadMetadataBase_default');
  storage._UploadMetadataBase$ = dart.generic(T => {
    class _UploadMetadataBase extends storage._SettableMetadataBase$(dart.legacy(T)) {
      get md5Hash() {
        return this.jsObject.md5Hash;
      }
      set md5Hash(s) {
        this.jsObject.md5Hash = s;
      }
    }
    (_UploadMetadataBase.fromJsObject = function(jsObject) {
      _UploadMetadataBase.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = _UploadMetadataBase.prototype;
    dart.addTypeTests(_UploadMetadataBase);
    _UploadMetadataBase.prototype[_is__UploadMetadataBase_default] = true;
    dart.addTypeCaches(_UploadMetadataBase);
    dart.setGetterSignature(_UploadMetadataBase, () => ({
      __proto__: dart.getGetters(_UploadMetadataBase.__proto__),
      md5Hash: dart.legacy(core.String)
    }));
    dart.setSetterSignature(_UploadMetadataBase, () => ({
      __proto__: dart.getSetters(_UploadMetadataBase.__proto__),
      md5Hash: dart.legacy(core.String)
    }));
    dart.setLibraryUri(_UploadMetadataBase, L0);
    return _UploadMetadataBase;
  });
  storage._UploadMetadataBase = storage._UploadMetadataBase$();
  dart.addTypeTests(storage._UploadMetadataBase, _is__UploadMetadataBase_default);
  storage.FullMetadata = class FullMetadata extends storage._UploadMetadataBase$(dart.legacy(dart.anonymousJSType("FullMetadataJsImpl"))) {
    get bucket() {
      return this.jsObject.bucket;
    }
    get fullPath() {
      return this.jsObject.fullPath;
    }
    get generation() {
      return this.jsObject.generation;
    }
    get metageneration() {
      return this.jsObject.metageneration;
    }
    get name() {
      return this.jsObject.name;
    }
    get size() {
      return this.jsObject.size;
    }
    get timeCreated() {
      return core.DateTime.parse(this.jsObject.timeCreated);
    }
    get updated() {
      return core.DateTime.parse(this.jsObject.updated);
    }
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = storage.FullMetadata._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new storage.FullMetadata._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
  };
  (storage.FullMetadata._fromJsObject = function(jsObject) {
    storage.FullMetadata.__proto__.fromJsObject.call(this, dart.legacy(dart.anonymousJSType("FullMetadataJsImpl")).as(jsObject));
    ;
  }).prototype = storage.FullMetadata.prototype;
  dart.addTypeTests(storage.FullMetadata);
  dart.addTypeCaches(storage.FullMetadata);
  dart.setGetterSignature(storage.FullMetadata, () => ({
    __proto__: dart.getGetters(storage.FullMetadata.__proto__),
    bucket: dart.legacy(core.String),
    fullPath: dart.legacy(core.String),
    generation: dart.legacy(core.String),
    metageneration: dart.legacy(core.String),
    name: dart.legacy(core.String),
    size: dart.legacy(core.int),
    timeCreated: dart.legacy(core.DateTime),
    updated: dart.legacy(core.DateTime)
  }));
  dart.setLibraryUri(storage.FullMetadata, L0);
  dart.defineLazy(storage.FullMetadata, {
    /*storage.FullMetadata._expando*/get _expando() {
      return new (ExpandoOfFullMetadataL()).new();
    }
  }, true);
  storage.UploadMetadata = class UploadMetadata extends storage._UploadMetadataBase$(dart.legacy(dart.anonymousJSType("UploadMetadataJsImpl"))) {
    static new(opts) {
      let md5Hash = opts && 'md5Hash' in opts ? opts.md5Hash : null;
      let cacheControl = opts && 'cacheControl' in opts ? opts.cacheControl : null;
      let contentDisposition = opts && 'contentDisposition' in opts ? opts.contentDisposition : null;
      let contentEncoding = opts && 'contentEncoding' in opts ? opts.contentEncoding : null;
      let contentLanguage = opts && 'contentLanguage' in opts ? opts.contentLanguage : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let customMetadata = opts && 'customMetadata' in opts ? opts.customMetadata : null;
      return new storage.UploadMetadata.fromJsObject({md5Hash: md5Hash, cacheControl: cacheControl, contentDisposition: contentDisposition, contentEncoding: contentEncoding, contentLanguage: contentLanguage, contentType: contentType, customMetadata: customMetadata != null ? utils.jsify(customMetadata) : null});
    }
  };
  (storage.UploadMetadata.fromJsObject = function(jsObject) {
    storage.UploadMetadata.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = storage.UploadMetadata.prototype;
  dart.addTypeTests(storage.UploadMetadata);
  dart.addTypeCaches(storage.UploadMetadata);
  dart.setLibraryUri(storage.UploadMetadata, L0);
  var _future = dart.privateName(storage, "_future");
  var _onStateChangedUnsubscribe = dart.privateName(storage, "_onStateChangedUnsubscribe");
  var _changeController = dart.privateName(storage, "_changeController");
  var C8;
  storage.UploadTask = class UploadTask extends js$.JsObjectWrapper$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.storage.UploadTask, "firebase.storage.UploadTask"))) {
    get future() {
      let t0;
      t0 = this[_future];
      return t0 == null ? this[_future] = utils.handleThenable(dart.legacy(dart.anonymousJSType("UploadTaskSnapshotJsImpl")), this.jsObject).then(UploadTaskSnapshotL(), C8 || CT.C8) : t0;
    }
    get snapshot() {
      return storage.UploadTaskSnapshot.getInstance(this.jsObject.snapshot);
    }
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = storage.UploadTask._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new storage.UploadTask._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    cancel() {
      return this.jsObject.cancel();
    }
    get onStateChanged() {
      if (this[_changeController] == null) {
        let nextWrapper = js.allowInterop(UploadTaskSnapshotJsImplLToLNull(), dart.fn(data => {
          this[_changeController].add(storage.UploadTaskSnapshot.getInstance(data));
        }, UploadTaskSnapshotJsImplLToNull()));
        let errorWrapper = js.allowInterop(dynamicToLvoid(), dart.fn(e => this[_changeController].addError(e), dynamicTovoid()));
        let onCompletion = js.allowInterop(VoidToLNull(), dart.fn(() => {
          this[_changeController].close();
        }, VoidToNull()));
        const startListen = () => {
          this[_onStateChangedUnsubscribe] = this.jsObject.on(dart.global.firebase.storage.TaskEvent.STATE_CHANGED, dart.assertInterop(nextWrapper), dart.assertInterop(errorWrapper), dart.assertInterop(onCompletion));
        };
        dart.fn(startListen, VoidTovoid());
        const stopListen = () => {
          this[_onStateChangedUnsubscribe]();
        };
        dart.fn(stopListen, VoidTovoid());
        this[_changeController] = StreamControllerOfUploadTaskSnapshotL().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return this[_changeController].stream;
    }
    pause() {
      return this.jsObject.pause();
    }
    resume() {
      return this.jsObject.resume();
    }
  };
  (storage.UploadTask._fromJsObject = function(jsObject) {
    this[_future] = null;
    this[_onStateChangedUnsubscribe] = null;
    this[_changeController] = null;
    storage.UploadTask.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = storage.UploadTask.prototype;
  dart.addTypeTests(storage.UploadTask);
  dart.addTypeCaches(storage.UploadTask);
  dart.setMethodSignature(storage.UploadTask, () => ({
    __proto__: dart.getMethods(storage.UploadTask.__proto__),
    cancel: dart.fnType(dart.legacy(core.bool), []),
    pause: dart.fnType(dart.legacy(core.bool), []),
    resume: dart.fnType(dart.legacy(core.bool), [])
  }));
  dart.setGetterSignature(storage.UploadTask, () => ({
    __proto__: dart.getGetters(storage.UploadTask.__proto__),
    future: dart.legacy(async.Future$(dart.legacy(storage.UploadTaskSnapshot))),
    snapshot: dart.legacy(storage.UploadTaskSnapshot),
    onStateChanged: dart.legacy(async.Stream$(dart.legacy(storage.UploadTaskSnapshot)))
  }));
  dart.setLibraryUri(storage.UploadTask, L0);
  dart.setFieldSignature(storage.UploadTask, () => ({
    __proto__: dart.getFields(storage.UploadTask.__proto__),
    [_future]: dart.fieldType(dart.legacy(async.Future$(dart.legacy(storage.UploadTaskSnapshot)))),
    [_onStateChangedUnsubscribe]: dart.fieldType(dart.legacy(dart.fnType(dart.dynamic, []))),
    [_changeController]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(storage.UploadTaskSnapshot))))
  }));
  dart.defineLazy(storage.UploadTask, {
    /*storage.UploadTask._expando*/get _expando() {
      return new (ExpandoOfUploadTaskL()).new();
    }
  }, true);
  storage.UploadTaskSnapshot = class UploadTaskSnapshot extends js$.JsObjectWrapper$(dart.legacy(dart.anonymousJSType("UploadTaskSnapshotJsImpl"))) {
    get bytesTransferred() {
      return this.jsObject.bytesTransferred;
    }
    get metadata() {
      return storage.FullMetadata.getInstance(this.jsObject.metadata);
    }
    get ref() {
      return storage.StorageReference.getInstance(this.jsObject.ref);
    }
    get state() {
      switch (this.jsObject.state) {
        case "running":
        {
          return storage.TaskState.RUNNING;
        }
        case "paused":
        {
          return storage.TaskState.PAUSED;
        }
        case "success":
        {
          return storage.TaskState.SUCCESS;
        }
        case "canceled":
        {
          return storage.TaskState.CANCELED;
        }
        case "error":
        {
          return storage.TaskState.ERROR;
        }
        default:
        {
          dart.throw(new core.UnsupportedError.new("Unknown state '" + dart.str(this.jsObject.state) + "' please file a bug."));
        }
      }
    }
    get task() {
      return storage.UploadTask.getInstance(this.jsObject.task);
    }
    get totalBytes() {
      return this.jsObject.totalBytes;
    }
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = storage.UploadTaskSnapshot._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new storage.UploadTaskSnapshot._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
  };
  (storage.UploadTaskSnapshot._fromJsObject = function(jsObject) {
    storage.UploadTaskSnapshot.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = storage.UploadTaskSnapshot.prototype;
  dart.addTypeTests(storage.UploadTaskSnapshot);
  dart.addTypeCaches(storage.UploadTaskSnapshot);
  dart.setGetterSignature(storage.UploadTaskSnapshot, () => ({
    __proto__: dart.getGetters(storage.UploadTaskSnapshot.__proto__),
    bytesTransferred: dart.legacy(core.int),
    metadata: dart.legacy(storage.FullMetadata),
    ref: dart.legacy(storage.StorageReference),
    state: dart.legacy(storage.TaskState),
    task: dart.legacy(storage.UploadTask),
    totalBytes: dart.legacy(core.int)
  }));
  dart.setLibraryUri(storage.UploadTaskSnapshot, L0);
  dart.defineLazy(storage.UploadTaskSnapshot, {
    /*storage.UploadTaskSnapshot._expando*/get _expando() {
      return new (ExpandoOfUploadTaskSnapshotL()).new();
    }
  }, true);
  storage.SettableMetadata = class SettableMetadata extends storage._SettableMetadataBase$(dart.legacy(dart.anonymousJSType("SettableMetadataJsImpl"))) {
    static new(opts) {
      let cacheControl = opts && 'cacheControl' in opts ? opts.cacheControl : null;
      let contentDisposition = opts && 'contentDisposition' in opts ? opts.contentDisposition : null;
      let contentEncoding = opts && 'contentEncoding' in opts ? opts.contentEncoding : null;
      let contentLanguage = opts && 'contentLanguage' in opts ? opts.contentLanguage : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let customMetadata = opts && 'customMetadata' in opts ? opts.customMetadata : null;
      return new storage.SettableMetadata.fromJsObject({cacheControl: cacheControl, contentDisposition: contentDisposition, contentEncoding: contentEncoding, contentLanguage: contentLanguage, contentType: contentType, customMetadata: customMetadata != null ? utils.jsify(customMetadata) : null});
    }
  };
  (storage.SettableMetadata.fromJsObject = function(jsObject) {
    storage.SettableMetadata.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = storage.SettableMetadata.prototype;
  dart.addTypeTests(storage.SettableMetadata);
  dart.addTypeCaches(storage.SettableMetadata);
  dart.setLibraryUri(storage.SettableMetadata, L0);
  storage.ListOptions = class ListOptions extends js$.JsObjectWrapper$(dart.legacy(dart.anonymousJSType("ListOptionsJsImpl"))) {
    get maxResults() {
      return this.jsObject.maxResults;
    }
    set maxResults(n) {
      return this.jsObject.maxResults = n;
    }
    get pageToken() {
      return this.jsObject.pageToken;
    }
    set pageToken(t) {
      return this.jsObject.pageToken = t;
    }
    static new(opts) {
      let maxResults = opts && 'maxResults' in opts ? opts.maxResults : null;
      let pageToken = opts && 'pageToken' in opts ? opts.pageToken : null;
      return new storage.ListOptions._fromJsObject({maxResults: maxResults, pageToken: pageToken});
    }
  };
  (storage.ListOptions._fromJsObject = function(jsObject) {
    storage.ListOptions.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = storage.ListOptions.prototype;
  dart.addTypeTests(storage.ListOptions);
  dart.addTypeCaches(storage.ListOptions);
  dart.setGetterSignature(storage.ListOptions, () => ({
    __proto__: dart.getGetters(storage.ListOptions.__proto__),
    maxResults: dart.legacy(core.int),
    pageToken: dart.legacy(core.String)
  }));
  dart.setSetterSignature(storage.ListOptions, () => ({
    __proto__: dart.getSetters(storage.ListOptions.__proto__),
    maxResults: dart.legacy(core.int),
    pageToken: dart.legacy(core.String)
  }));
  dart.setLibraryUri(storage.ListOptions, L0);
  storage.ListResult = class ListResult extends js$.JsObjectWrapper$(dart.legacy(dart.anonymousJSType("ListResultJsImpl"))) {
    get items() {
      return this.jsObject.items[$map](StorageReferenceL(), dart.fn(data => new storage.StorageReference._fromJsObject(dart.legacy(dart.lazyJSType(() => dart.global.firebase.storage.Reference, "firebase.storage.Reference")).as(data)), dynamicToStorageReferenceL()))[$toList]();
    }
    get nextPageToken() {
      return this.jsObject.nextPageToken;
    }
    get prefixes() {
      return this.jsObject.prefixes[$map](StorageReferenceL(), dart.fn(data => new storage.StorageReference._fromJsObject(dart.legacy(dart.lazyJSType(() => dart.global.firebase.storage.Reference, "firebase.storage.Reference")).as(data)), dynamicToStorageReferenceL()))[$toList]();
    }
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = storage.ListResult._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new storage.ListResult._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
  };
  (storage.ListResult._fromJsObject = function(jsObject) {
    storage.ListResult.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = storage.ListResult.prototype;
  dart.addTypeTests(storage.ListResult);
  dart.addTypeCaches(storage.ListResult);
  dart.setGetterSignature(storage.ListResult, () => ({
    __proto__: dart.getGetters(storage.ListResult.__proto__),
    items: dart.legacy(core.List$(dart.legacy(storage.StorageReference))),
    nextPageToken: dart.legacy(core.String),
    prefixes: dart.legacy(core.List$(dart.legacy(storage.StorageReference)))
  }));
  dart.setLibraryUri(storage.ListResult, L0);
  dart.defineLazy(storage.ListResult, {
    /*storage.ListResult._expando*/get _expando() {
      return new (ExpandoOfListResultL()).new();
    }
  }, true);
  functions.Functions = class Functions extends js$.JsObjectWrapper$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.functions.Functions, "firebase.functions.Functions"))) {
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = functions.Functions._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new functions.Functions._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    get functions() {
      return functions.Functions.getInstance(this.jsObject);
    }
    httpsCallable(name, options = null) {
      let httpCallableImpl = null;
      if (options != null) {
        httpCallableImpl = this.jsObject.httpsCallable(name, options);
      } else {
        httpCallableImpl = this.jsObject.httpsCallable(name);
      }
      return functions.HttpsCallable.getInstance(httpCallableImpl);
    }
    useFunctionsEmulator(url) {
      return this.jsObject.useFunctionsEmulator(url);
    }
  };
  (functions.Functions._fromJsObject = function(jsObject) {
    functions.Functions.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = functions.Functions.prototype;
  dart.addTypeTests(functions.Functions);
  dart.addTypeCaches(functions.Functions);
  dart.setMethodSignature(functions.Functions, () => ({
    __proto__: dart.getMethods(functions.Functions.__proto__),
    httpsCallable: dart.fnType(dart.legacy(functions.HttpsCallable), [dart.legacy(core.String)], [dart.legacy(dart.anonymousJSType("HttpsCallableOptions"))]),
    useFunctionsEmulator: dart.fnType(dart.void, [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(functions.Functions, () => ({
    __proto__: dart.getGetters(functions.Functions.__proto__),
    functions: dart.legacy(functions.Functions)
  }));
  dart.setLibraryUri(functions.Functions, L1);
  dart.defineLazy(functions.Functions, {
    /*functions.Functions._expando*/get _expando() {
      return new (ExpandoOfFunctionsL()).new();
    }
  }, true);
  var C9;
  functions.HttpsCallable = class HttpsCallable extends js$.JsObjectWrapper$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.functions.HttpsCallable, "firebase.functions.HttpsCallable"))) {
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = functions.HttpsCallable._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new functions.HttpsCallable._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    call(data = null) {
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("HttpsCallableResultJsImpl")), this.jsObject(data == null ? null : utils.jsify(data))).then(HttpsCallableResultL(), C9 || CT.C9);
    }
  };
  (functions.HttpsCallable._fromJsObject = function(jsObject) {
    functions.HttpsCallable.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = functions.HttpsCallable.prototype;
  dart.addTypeTests(functions.HttpsCallable);
  dart.addTypeCaches(functions.HttpsCallable);
  dart.setMethodSignature(functions.HttpsCallable, () => ({
    __proto__: dart.getMethods(functions.HttpsCallable.__proto__),
    call: dart.fnType(dart.legacy(async.Future$(dart.legacy(functions.HttpsCallableResult))), [], [dart.dynamic])
  }));
  dart.setLibraryUri(functions.HttpsCallable, L1);
  dart.defineLazy(functions.HttpsCallable, {
    /*functions.HttpsCallable._expando*/get _expando() {
      return new (ExpandoOfHttpsCallableL()).new();
    }
  }, true);
  functions.HttpsCallableResult = class HttpsCallableResult extends js$.JsObjectWrapper$(dart.legacy(dart.anonymousJSType("HttpsCallableResultJsImpl"))) {
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = functions.HttpsCallableResult._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new functions.HttpsCallableResult._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    get data() {
      return utils.dartify(this.jsObject.data);
    }
  };
  (functions.HttpsCallableResult._fromJsObject = function(jsObject) {
    functions.HttpsCallableResult.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = functions.HttpsCallableResult.prototype;
  dart.addTypeTests(functions.HttpsCallableResult);
  dart.addTypeCaches(functions.HttpsCallableResult);
  dart.setGetterSignature(functions.HttpsCallableResult, () => ({
    __proto__: dart.getGetters(functions.HttpsCallableResult.__proto__),
    data: dart.dynamic
  }));
  dart.setLibraryUri(functions.HttpsCallableResult, L1);
  dart.defineLazy(functions.HttpsCallableResult, {
    /*functions.HttpsCallableResult._expando*/get _expando() {
      return new (ExpandoOfHttpsCallableResultL()).new();
    }
  }, true);
  database.Database = class Database extends js$.JsObjectWrapper$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Database, "firebase.database.Database"))) {
    get app() {
      return app.App.getInstance(this.jsObject.app);
    }
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = database.Database._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new database.Database._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    goOffline() {
      return this.jsObject.goOffline();
    }
    goOnline() {
      return this.jsObject.goOnline();
    }
    ref(path = null) {
      return database.DatabaseReference.getInstance(this.jsObject.ref(path));
    }
    refFromURL(url) {
      return database.DatabaseReference.getInstance(this.jsObject.refFromURL(url));
    }
  };
  (database.Database._fromJsObject = function(jsObject) {
    database.Database.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = database.Database.prototype;
  dart.addTypeTests(database.Database);
  dart.addTypeCaches(database.Database);
  dart.setMethodSignature(database.Database, () => ({
    __proto__: dart.getMethods(database.Database.__proto__),
    goOffline: dart.fnType(dart.void, []),
    goOnline: dart.fnType(dart.void, []),
    ref: dart.fnType(dart.legacy(database.DatabaseReference$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")))), [], [dart.legacy(core.String)]),
    refFromURL: dart.fnType(dart.legacy(database.DatabaseReference$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")))), [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(database.Database, () => ({
    __proto__: dart.getGetters(database.Database.__proto__),
    app: dart.legacy(app.App)
  }));
  dart.setLibraryUri(database.Database, L2);
  dart.defineLazy(database.Database, {
    /*database.Database._expando*/get _expando() {
      return new (ExpandoOfDatabaseL()).new();
    }
  }, true);
  var _onValue = dart.privateName(database, "_onValue");
  var _onChildAdded = dart.privateName(database, "_onChildAdded");
  var _onChildRemoved = dart.privateName(database, "_onChildRemoved");
  var _onChildChanged = dart.privateName(database, "_onChildChanged");
  var _onChildMoved = dart.privateName(database, "_onChildMoved");
  var _createStream = dart.privateName(database, "_createStream");
  const _is_Query_default = Symbol('_is_Query_default');
  database.Query$ = dart.generic(T => {
    class Query extends js$.JsObjectWrapper$(dart.legacy(T)) {
      get ref() {
        return database.DatabaseReference.getInstance(this.jsObject.ref);
      }
      get onValue() {
        let t0;
        t0 = this[_onValue];
        return t0 == null ? this[_onValue] = this[_createStream]("value") : t0;
      }
      get onChildAdded() {
        let t0;
        t0 = this[_onChildAdded];
        return t0 == null ? this[_onChildAdded] = this[_createStream]("child_added") : t0;
      }
      get onChildRemoved() {
        let t0;
        t0 = this[_onChildRemoved];
        return t0 == null ? this[_onChildRemoved] = this[_createStream]("child_removed") : t0;
      }
      get onChildChanged() {
        let t0;
        t0 = this[_onChildChanged];
        return t0 == null ? this[_onChildChanged] = this[_createStream]("child_changed") : t0;
      }
      get onChildMoved() {
        let t0;
        t0 = this[_onChildMoved];
        return t0 == null ? this[_onChildMoved] = this[_createStream]("child_moved") : t0;
      }
      endAt(value, key = null) {
        return new (QueryOfQueryJsImplL()).fromJsObject(key == null ? this.jsObject.endAt(utils.jsify(value)) : this.jsObject.endAt(utils.jsify(value), key));
      }
      equalTo(value, key = null) {
        return new (QueryOfQueryJsImplL()).fromJsObject(key == null ? this.jsObject.equalTo(utils.jsify(value)) : this.jsObject.equalTo(utils.jsify(value), key));
      }
      isEqual(other) {
        return this.jsObject.isEqual(other.jsObject);
      }
      limitToFirst(limit) {
        return new (QueryOfQueryJsImplL()).fromJsObject(this.jsObject.limitToFirst(limit));
      }
      limitToLast(limit) {
        return new (QueryOfQueryJsImplL()).fromJsObject(this.jsObject.limitToLast(limit));
      }
      [_createStream](eventType) {
        let streamController = null;
        let callbackWrap = js.allowInterop(DataSnapshotJsImplLAndStringLToLNull(), dart.fn((data, string = null) => {
          streamController.add(new database.QueryEvent.new(database.DataSnapshot.getInstance(data), string));
        }, DataSnapshotJsImplLAndStringLToNull()));
        const startListen = () => {
          this.jsObject.on(eventType, dart.assertInterop(callbackWrap));
        };
        dart.fn(startListen, VoidTovoid());
        const stopListen = () => {
          this.jsObject.off(eventType, dart.assertInterop(callbackWrap));
        };
        dart.fn(stopListen, VoidTovoid());
        streamController = StreamControllerOfQueryEventL().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
        return streamController.stream;
      }
      once(eventType) {
        let c = CompleterOfQueryEventL().new();
        this.jsObject.once(eventType, js.allowInterop(DataSnapshotJsImplLAndStringLToLNull(), dart.fn((snapshot, string = null) => {
          c.complete(new database.QueryEvent.new(database.DataSnapshot.getInstance(snapshot), string));
        }, DataSnapshotJsImplLAndStringLToNull())), dart.assertInterop(utils.resolveError(c)));
        return c.future;
      }
      orderByChild(path) {
        return new (QueryOfQueryJsImplL()).fromJsObject(this.jsObject.orderByChild(path));
      }
      orderByKey() {
        return new (QueryOfQueryJsImplL()).fromJsObject(this.jsObject.orderByKey());
      }
      orderByPriority() {
        return new (QueryOfQueryJsImplL()).fromJsObject(this.jsObject.orderByPriority());
      }
      orderByValue() {
        return new (QueryOfQueryJsImplL()).fromJsObject(this.jsObject.orderByValue());
      }
      startAt(value, key = null) {
        return new (QueryOfQueryJsImplL()).fromJsObject(key == null ? this.jsObject.startAt(utils.jsify(value)) : this.jsObject.startAt(utils.jsify(value), key));
      }
      toString() {
        return dart.toString(this.jsObject);
      }
      toJson() {
        return utils.dartify(this.jsObject.toJSON());
      }
    }
    (Query.fromJsObject = function(jsObject) {
      this[_onValue] = null;
      this[_onChildAdded] = null;
      this[_onChildRemoved] = null;
      this[_onChildChanged] = null;
      this[_onChildMoved] = null;
      Query.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = Query.prototype;
    dart.addTypeTests(Query);
    Query.prototype[_is_Query_default] = true;
    dart.addTypeCaches(Query);
    dart.setMethodSignature(Query, () => ({
      __proto__: dart.getMethods(Query.__proto__),
      endAt: dart.fnType(dart.legacy(database.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")))), [dart.dynamic], [dart.legacy(core.String)]),
      equalTo: dart.fnType(dart.legacy(database.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")))), [dart.dynamic], [dart.legacy(core.String)]),
      isEqual: dart.fnType(dart.legacy(core.bool), [dart.legacy(database.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query"))))]),
      limitToFirst: dart.fnType(dart.legacy(database.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")))), [dart.legacy(core.int)]),
      limitToLast: dart.fnType(dart.legacy(database.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")))), [dart.legacy(core.int)]),
      [_createStream]: dart.fnType(dart.legacy(async.Stream$(dart.legacy(database.QueryEvent))), [dart.legacy(core.String)]),
      once: dart.fnType(dart.legacy(async.Future$(dart.legacy(database.QueryEvent))), [dart.legacy(core.String)]),
      orderByChild: dart.fnType(dart.legacy(database.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")))), [dart.legacy(core.String)]),
      orderByKey: dart.fnType(dart.legacy(database.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")))), []),
      orderByPriority: dart.fnType(dart.legacy(database.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")))), []),
      orderByValue: dart.fnType(dart.legacy(database.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")))), []),
      startAt: dart.fnType(dart.legacy(database.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")))), [dart.dynamic], [dart.legacy(core.String)]),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), []),
      toJson: dart.fnType(dart.dynamic, [])
    }));
    dart.setGetterSignature(Query, () => ({
      __proto__: dart.getGetters(Query.__proto__),
      ref: dart.legacy(database.DatabaseReference$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")))),
      onValue: dart.legacy(async.Stream$(dart.legacy(database.QueryEvent))),
      onChildAdded: dart.legacy(async.Stream$(dart.legacy(database.QueryEvent))),
      onChildRemoved: dart.legacy(async.Stream$(dart.legacy(database.QueryEvent))),
      onChildChanged: dart.legacy(async.Stream$(dart.legacy(database.QueryEvent))),
      onChildMoved: dart.legacy(async.Stream$(dart.legacy(database.QueryEvent)))
    }));
    dart.setLibraryUri(Query, L2);
    dart.setFieldSignature(Query, () => ({
      __proto__: dart.getFields(Query.__proto__),
      [_onValue]: dart.fieldType(dart.legacy(async.Stream$(dart.legacy(database.QueryEvent)))),
      [_onChildAdded]: dart.fieldType(dart.legacy(async.Stream$(dart.legacy(database.QueryEvent)))),
      [_onChildRemoved]: dart.fieldType(dart.legacy(async.Stream$(dart.legacy(database.QueryEvent)))),
      [_onChildChanged]: dart.fieldType(dart.legacy(async.Stream$(dart.legacy(database.QueryEvent)))),
      [_onChildMoved]: dart.fieldType(dart.legacy(async.Stream$(dart.legacy(database.QueryEvent))))
    }));
    dart.defineExtensionMethods(Query, ['toString']);
    return Query;
  });
  database.Query = database.Query$();
  dart.addTypeTests(database.Query, _is_Query_default);
  const _is_DatabaseReference_default = Symbol('_is_DatabaseReference_default');
  database.DatabaseReference$ = dart.generic(T => {
    class DatabaseReference extends database.Query$(dart.legacy(T)) {
      get key() {
        return this.jsObject.key;
      }
      get parent() {
        return database.DatabaseReference.getInstance(this.jsObject.parent);
      }
      get root() {
        return database.DatabaseReference.getInstance(this.jsObject.root);
      }
      static getInstance(jsObject) {
        let t3, t2, t1, t0;
        if (jsObject == null) {
          return null;
        }
        t0 = database.DatabaseReference._expando;
        t1 = jsObject;
        t2 = t0._get(t1);
        return t2 == null ? (t3 = new (DatabaseReferenceOfReferenceJsImplL())._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
      }
      child(path) {
        return database.DatabaseReference.getInstance(this.jsObject.child(path));
      }
      onDisconnect() {
        return new database.OnDisconnect.fromJsObject(this.jsObject.onDisconnect());
      }
      push(value = null) {
        return new database.ThenableReference.fromJsObject(this.jsObject.push(utils.jsify(value)));
      }
      remove() {
        return utils.handleThenable(dart.dynamic, this.jsObject.remove());
      }
      set(value) {
        return utils.handleThenable(dart.dynamic, this.jsObject.set(utils.jsify(value)));
      }
      setPriority(priority) {
        return utils.handleThenable(dart.dynamic, this.jsObject.setPriority(priority));
      }
      setWithPriority(newVal, newPriority) {
        return utils.handleThenable(dart.dynamic, this.jsObject.setWithPriority(utils.jsify(newVal), newPriority));
      }
      transaction(transactionUpdate, applyLocally = true) {
        let c = CompleterOfTransactionL().new();
        let transactionUpdateWrap = js.allowInterop(dynamicToLdynamic(), dart.fn(update => utils.jsify(transactionUpdate(utils.dartify(update))), dynamicTodynamic()));
        let onCompleteWrap = js.allowInterop(dynamicAndboolLAndDataSnapshotJsImplLToLNull(), dart.fn((error, committed, snapshot) => {
          if (error != null) {
            c.completeError(error);
          } else {
            c.complete(database.Transaction.new({committed: committed, snapshot: database.DataSnapshot.getInstance(snapshot)}));
          }
        }, dynamicAndboolLAndDataSnapshotJsImplLToNull()));
        this.jsObject.transaction(dart.assertInterop(transactionUpdateWrap), dart.assertInterop(onCompleteWrap), applyLocally);
        return c.future;
      }
      update(values) {
        return utils.handleThenable(dart.dynamic, this.jsObject.update(utils.jsify(values)));
      }
    }
    (DatabaseReference._fromJsObject = function(jsObject) {
      DatabaseReference.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = DatabaseReference.prototype;
    dart.addTypeTests(DatabaseReference);
    DatabaseReference.prototype[_is_DatabaseReference_default] = true;
    dart.addTypeCaches(DatabaseReference);
    dart.setMethodSignature(DatabaseReference, () => ({
      __proto__: dart.getMethods(DatabaseReference.__proto__),
      child: dart.fnType(dart.legacy(database.DatabaseReference$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")))), [dart.legacy(core.String)]),
      onDisconnect: dart.fnType(dart.legacy(database.OnDisconnect), []),
      push: dart.fnType(dart.legacy(database.ThenableReference), [], [dart.dynamic]),
      remove: dart.fnType(dart.legacy(async.Future), []),
      set: dart.fnType(dart.legacy(async.Future), [dart.dynamic]),
      setPriority: dart.fnType(dart.legacy(async.Future), [dart.dynamic]),
      setWithPriority: dart.fnType(dart.legacy(async.Future), [dart.dynamic, dart.dynamic]),
      transaction: dart.fnType(dart.legacy(async.Future$(dart.legacy(database.Transaction))), [dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic]))], [dart.legacy(core.bool)]),
      update: dart.fnType(dart.legacy(async.Future), [dart.dynamic])
    }));
    dart.setGetterSignature(DatabaseReference, () => ({
      __proto__: dart.getGetters(DatabaseReference.__proto__),
      key: dart.legacy(core.String),
      parent: dart.legacy(database.DatabaseReference$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")))),
      root: dart.legacy(database.DatabaseReference$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference"))))
    }));
    dart.setLibraryUri(DatabaseReference, L2);
    return DatabaseReference;
  });
  database.DatabaseReference = database.DatabaseReference$();
  dart.defineLazy(database.DatabaseReference, {
    /*database.DatabaseReference._expando*/get _expando() {
      return new (ExpandoOfDatabaseReferenceLOfReferenceJsImplL()).new();
    }
  }, true);
  dart.addTypeTests(database.DatabaseReference, _is_DatabaseReference_default);
  var snapshot$ = dart.privateName(database, "QueryEvent.snapshot");
  var prevChildKey$ = dart.privateName(database, "QueryEvent.prevChildKey");
  database.QueryEvent = class QueryEvent extends core.Object {
    get snapshot() {
      return this[snapshot$];
    }
    set snapshot(value) {
      super.snapshot = value;
    }
    get prevChildKey() {
      return this[prevChildKey$];
    }
    set prevChildKey(value) {
      super.prevChildKey = value;
    }
  };
  (database.QueryEvent.new = function(snapshot, prevChildKey = null) {
    this[snapshot$] = snapshot;
    this[prevChildKey$] = prevChildKey;
    ;
  }).prototype = database.QueryEvent.prototype;
  dart.addTypeTests(database.QueryEvent);
  dart.addTypeCaches(database.QueryEvent);
  dart.setLibraryUri(database.QueryEvent, L2);
  dart.setFieldSignature(database.QueryEvent, () => ({
    __proto__: dart.getFields(database.QueryEvent.__proto__),
    snapshot: dart.finalFieldType(dart.legacy(database.DataSnapshot)),
    prevChildKey: dart.finalFieldType(dart.legacy(core.String))
  }));
  database.DataSnapshot = class DataSnapshot extends js$.JsObjectWrapper$(dart.legacy(dart.anonymousJSType("DataSnapshotJsImpl"))) {
    get key() {
      return this.jsObject.key;
    }
    get ref() {
      return database.DatabaseReference.getInstance(this.jsObject.ref);
    }
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = database.DataSnapshot._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new database.DataSnapshot._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    child(path) {
      return database.DataSnapshot.getInstance(this.jsObject.child(path));
    }
    exists() {
      return this.jsObject.exists();
    }
    exportVal() {
      return utils.dartify(this.jsObject.exportVal());
    }
    forEach(action) {
      let actionWrap = js.allowInterop(dynamicToLdynamic(), dart.fn(d => action(database.DataSnapshot.getInstance(dart.legacy(dart.anonymousJSType("DataSnapshotJsImpl")).as(d))), dynamicTodynamic()));
      return this.jsObject.forEach(dart.assertInterop(actionWrap));
    }
    getPriority() {
      return this.jsObject.getPriority();
    }
    hasChild(path) {
      return this.jsObject.hasChild(path);
    }
    hasChildren() {
      return this.jsObject.hasChildren();
    }
    numChildren() {
      return this.jsObject.numChildren();
    }
    val() {
      return utils.dartify(this.jsObject.val());
    }
    toJson() {
      return utils.dartify(this.jsObject.toJSON());
    }
  };
  (database.DataSnapshot._fromJsObject = function(jsObject) {
    database.DataSnapshot.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = database.DataSnapshot.prototype;
  dart.addTypeTests(database.DataSnapshot);
  dart.addTypeCaches(database.DataSnapshot);
  dart.setMethodSignature(database.DataSnapshot, () => ({
    __proto__: dart.getMethods(database.DataSnapshot.__proto__),
    child: dart.fnType(dart.legacy(database.DataSnapshot), [dart.legacy(core.String)]),
    exists: dart.fnType(dart.legacy(core.bool), []),
    exportVal: dart.fnType(dart.dynamic, []),
    forEach: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(database.DataSnapshot)]))]),
    getPriority: dart.fnType(dart.dynamic, []),
    hasChild: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    hasChildren: dart.fnType(dart.legacy(core.bool), []),
    numChildren: dart.fnType(dart.legacy(core.int), []),
    val: dart.fnType(dart.dynamic, []),
    toJson: dart.fnType(dart.dynamic, [])
  }));
  dart.setGetterSignature(database.DataSnapshot, () => ({
    __proto__: dart.getGetters(database.DataSnapshot.__proto__),
    key: dart.legacy(core.String),
    ref: dart.legacy(database.DatabaseReference$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference"))))
  }));
  dart.setLibraryUri(database.DataSnapshot, L2);
  dart.defineLazy(database.DataSnapshot, {
    /*database.DataSnapshot._expando*/get _expando() {
      return new (ExpandoOfDataSnapshotL()).new();
    }
  }, true);
  database.OnDisconnect = class OnDisconnect extends js$.JsObjectWrapper$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.OnDisconnect, "firebase.database.OnDisconnect"))) {
    cancel() {
      return utils.handleThenable(dart.dynamic, this.jsObject.cancel());
    }
    remove() {
      return utils.handleThenable(dart.dynamic, this.jsObject.remove());
    }
    set(value) {
      return utils.handleThenable(dart.dynamic, this.jsObject.set(utils.jsify(value)));
    }
    setWithPriority(value, priority) {
      return utils.handleThenable(dart.dynamic, this.jsObject.setWithPriority(utils.jsify(value), priority));
    }
    update(values) {
      return utils.handleThenable(dart.dynamic, this.jsObject.update(utils.jsify(values)));
    }
  };
  (database.OnDisconnect.fromJsObject = function(jsObject) {
    database.OnDisconnect.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = database.OnDisconnect.prototype;
  dart.addTypeTests(database.OnDisconnect);
  dart.addTypeCaches(database.OnDisconnect);
  dart.setMethodSignature(database.OnDisconnect, () => ({
    __proto__: dart.getMethods(database.OnDisconnect.__proto__),
    cancel: dart.fnType(dart.legacy(async.Future), []),
    remove: dart.fnType(dart.legacy(async.Future), []),
    set: dart.fnType(dart.legacy(async.Future), [dart.dynamic]),
    setWithPriority: dart.fnType(dart.legacy(async.Future), [dart.dynamic, dart.dynamic]),
    update: dart.fnType(dart.legacy(async.Future), [dart.dynamic])
  }));
  dart.setLibraryUri(database.OnDisconnect, L2);
  var _future$ = dart.privateName(database, "_future");
  var C10;
  database.ThenableReference = class ThenableReference extends database.DatabaseReference$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.ThenableReference, "firebase.database.ThenableReference"))) {
    get future() {
      let t0;
      t0 = this[_future$];
      return t0 == null ? this[_future$] = utils.handleThenable(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")), this.jsObject).then(DatabaseReferenceLOfReferenceJsImplL(), C10 || CT.C10) : t0;
    }
  };
  (database.ThenableReference.fromJsObject = function(jsObject) {
    this[_future$] = null;
    database.ThenableReference.__proto__._fromJsObject.call(this, jsObject);
    ;
  }).prototype = database.ThenableReference.prototype;
  dart.addTypeTests(database.ThenableReference);
  dart.addTypeCaches(database.ThenableReference);
  dart.setGetterSignature(database.ThenableReference, () => ({
    __proto__: dart.getGetters(database.ThenableReference.__proto__),
    future: dart.legacy(async.Future$(dart.legacy(database.DatabaseReference$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference"))))))
  }));
  dart.setLibraryUri(database.ThenableReference, L2);
  dart.setFieldSignature(database.ThenableReference, () => ({
    __proto__: dart.getFields(database.ThenableReference.__proto__),
    [_future$]: dart.fieldType(dart.legacy(async.Future$(dart.legacy(database.DatabaseReference$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")))))))
  }));
  database.Transaction = class Transaction extends js$.JsObjectWrapper$(dart.legacy(dart.anonymousJSType("TransactionJsImpl"))) {
    get committed() {
      return this.jsObject.committed;
    }
    get snapshot() {
      return database.DataSnapshot.getInstance(this.jsObject.snapshot);
    }
    static new(opts) {
      let committed = opts && 'committed' in opts ? opts.committed : null;
      let snapshot = opts && 'snapshot' in opts ? opts.snapshot : null;
      return new database.Transaction.fromJsObject({committed: committed, snapshot: snapshot.jsObject});
    }
  };
  (database.Transaction.fromJsObject = function(jsObject) {
    database.Transaction.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = database.Transaction.prototype;
  dart.addTypeTests(database.Transaction);
  dart.addTypeCaches(database.Transaction);
  dart.setGetterSignature(database.Transaction, () => ({
    __proto__: dart.getGetters(database.Transaction.__proto__),
    committed: dart.legacy(core.bool),
    snapshot: dart.legacy(database.DataSnapshot)
  }));
  dart.setLibraryUri(database.Transaction, L2);
  database.enableLogging = function enableLogging(logger = null, persistent = false) {
    return dart.global.firebase.database.enableLogging(utils.jsify(logger), persistent);
  };
  const _is_UserInfo_default = Symbol('_is_UserInfo_default');
  auth$.UserInfo$ = dart.generic(T => {
    class UserInfo extends js$.JsObjectWrapper$(dart.legacy(T)) {
      get displayName() {
        return this.jsObject.displayName;
      }
      get email() {
        return this.jsObject.email;
      }
      get phoneNumber() {
        return this.jsObject.phoneNumber;
      }
      get photoURL() {
        return this.jsObject.photoURL;
      }
      get providerId() {
        return this.jsObject.providerId;
      }
      get uid() {
        return this.jsObject.uid;
      }
    }
    (UserInfo.fromJsObject = function(jsObject) {
      UserInfo.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = UserInfo.prototype;
    dart.addTypeTests(UserInfo);
    UserInfo.prototype[_is_UserInfo_default] = true;
    dart.addTypeCaches(UserInfo);
    dart.setGetterSignature(UserInfo, () => ({
      __proto__: dart.getGetters(UserInfo.__proto__),
      displayName: dart.legacy(core.String),
      email: dart.legacy(core.String),
      phoneNumber: dart.legacy(core.String),
      photoURL: dart.legacy(core.String),
      providerId: dart.legacy(core.String),
      uid: dart.legacy(core.String)
    }));
    dart.setLibraryUri(UserInfo, L3);
    return UserInfo;
  });
  auth$.UserInfo = auth$.UserInfo$();
  dart.addTypeTests(auth$.UserInfo, _is_UserInfo_default);
  var C11;
  auth$.User = class User extends auth$.UserInfo$(dart.legacy(dart.anonymousJSType("UserJsImpl"))) {
    get emailVerified() {
      return this.jsObject.emailVerified;
    }
    get isAnonymous() {
      return this.jsObject.isAnonymous;
    }
    get metadata() {
      return this.jsObject.metadata;
    }
    get providerData() {
      return this.jsObject.providerData[$map](UserInfoLOfUserInfoJsImplL(), dart.fn(data => new (UserInfoOfUserInfoJsImplL()).fromJsObject(dart.legacy(dart.anonymousJSType("UserInfoJsImpl")).as(data)), dynamicToUserInfoLOfUserInfoJsImplL()))[$toList]();
    }
    get refreshToken() {
      return this.jsObject.refreshToken;
    }
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = auth$.User._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new auth$.User._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    delete() {
      return utils.handleThenable(dart.void, this.jsObject.delete());
    }
    getIdToken(forceRefresh = false) {
      return utils.handleThenable(StringL(), this.jsObject.getIdToken(forceRefresh));
    }
    linkWithCredential(credential) {
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("UserCredentialJsImpl")), this.jsObject.linkWithCredential(credential)).then(UserCredentialL(), dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplLToUserCredentialL()));
    }
    linkWithPhoneNumber(phoneNumber, applicationVerifier) {
      return utils.handleThenable(dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.ConfirmationResult, "firebase.auth.ConfirmationResult")), this.jsObject.linkWithPhoneNumber(phoneNumber, applicationVerifier.jsObject)).then(ConfirmationResultL(), dart.fn(c => new auth$.ConfirmationResult.fromJsObject(c), ConfirmationResultJsImplLToConfirmationResultL()));
    }
    linkWithPopup(provider) {
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("UserCredentialJsImpl")), this.jsObject.linkWithPopup(provider.jsObject)).then(UserCredentialL(), dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplLToUserCredentialL()));
    }
    linkWithRedirect(provider) {
      return utils.handleThenable(dart.void, this.jsObject.linkWithRedirect(provider.jsObject));
    }
    reauthenticateWithCredential(credential) {
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("UserCredentialJsImpl")), this.jsObject.reauthenticateWithCredential(credential)).then(UserCredentialL(), dart.fn(o => new auth$.UserCredential.fromJsObject(o), UserCredentialJsImplLToUserCredentialL()));
    }
    reauthenticateWithPhoneNumber(phoneNumber, applicationVerifier) {
      return utils.handleThenable(dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.ConfirmationResult, "firebase.auth.ConfirmationResult")), this.jsObject.reauthenticateWithPhoneNumber(phoneNumber, applicationVerifier.jsObject)).then(ConfirmationResultL(), dart.fn(c => new auth$.ConfirmationResult.fromJsObject(c), ConfirmationResultJsImplLToConfirmationResultL()));
    }
    reauthenticateWithPopup(provider) {
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("UserCredentialJsImpl")), this.jsObject.reauthenticateWithPopup(provider.jsObject)).then(UserCredentialL(), dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplLToUserCredentialL()));
    }
    reauthenticateWithRedirect(provider) {
      return utils.handleThenable(dart.void, this.jsObject.reauthenticateWithRedirect(provider.jsObject));
    }
    reload() {
      return utils.handleThenable(dart.void, this.jsObject.reload());
    }
    sendEmailVerification(actionCodeSettings = null) {
      return utils.handleThenable(dart.void, this.jsObject.sendEmailVerification(actionCodeSettings));
    }
    unlink(providerId) {
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("UserJsImpl")), this.jsObject.unlink(providerId)).then(UserL(), C11 || CT.C11);
    }
    updateEmail(newEmail) {
      return utils.handleThenable(dart.void, this.jsObject.updateEmail(newEmail));
    }
    updatePassword(newPassword) {
      return utils.handleThenable(dart.void, this.jsObject.updatePassword(newPassword));
    }
    updatePhoneNumber(phoneCredential) {
      return utils.handleThenable(dart.void, this.jsObject.updatePhoneNumber(phoneCredential));
    }
    updateProfile(profile) {
      return utils.handleThenable(dart.void, this.jsObject.updateProfile(profile));
    }
    getIdTokenResult(forceRefresh = null) {
      let promise = forceRefresh == null ? this.jsObject.getIdTokenResult() : this.jsObject.getIdTokenResult(forceRefresh);
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("IdTokenResultImpl")), promise).then(IdTokenResultL(), dart.fn(object => new auth$.IdTokenResult._fromJsObject(object), IdTokenResultImplLToIdTokenResultL()));
    }
    toJson() {
      return MapLOfStringL$dynamic().as(utils.dartify(this.jsObject.toJSON()));
    }
    toString() {
      return "User: " + dart.str(this.uid);
    }
  };
  (auth$.User._fromJsObject = function(jsObject) {
    auth$.User.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.User.prototype;
  dart.addTypeTests(auth$.User);
  dart.addTypeCaches(auth$.User);
  dart.setMethodSignature(auth$.User, () => ({
    __proto__: dart.getMethods(auth$.User.__proto__),
    delete: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    getIdToken: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), [], [dart.legacy(core.bool)]),
    linkWithCredential: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth$.UserCredential))), [dart.legacy(dart.anonymousJSType("OAuthCredential"))]),
    linkWithPhoneNumber: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth$.ConfirmationResult))), [dart.legacy(core.String), dart.legacy(auth$.ApplicationVerifier$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.ApplicationVerifier, "firebase.auth.ApplicationVerifier"))))]),
    linkWithPopup: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth$.UserCredential))), [dart.legacy(auth$.AuthProvider$(dart.legacy(dart.anonymousJSType("AuthProviderJsImpl"))))]),
    linkWithRedirect: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(auth$.AuthProvider$(dart.legacy(dart.anonymousJSType("AuthProviderJsImpl"))))]),
    reauthenticateWithCredential: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth$.UserCredential))), [dart.legacy(dart.anonymousJSType("OAuthCredential"))]),
    reauthenticateWithPhoneNumber: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth$.ConfirmationResult))), [dart.legacy(core.String), dart.legacy(auth$.ApplicationVerifier$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.ApplicationVerifier, "firebase.auth.ApplicationVerifier"))))]),
    reauthenticateWithPopup: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth$.UserCredential))), [dart.legacy(auth$.AuthProvider$(dart.legacy(dart.anonymousJSType("AuthProviderJsImpl"))))]),
    reauthenticateWithRedirect: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(auth$.AuthProvider$(dart.legacy(dart.anonymousJSType("AuthProviderJsImpl"))))]),
    reload: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    sendEmailVerification: dart.fnType(dart.legacy(async.Future$(dart.void)), [], [dart.legacy(dart.anonymousJSType("ActionCodeSettings"))]),
    unlink: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth$.User))), [dart.legacy(core.String)]),
    updateEmail: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String)]),
    updatePassword: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String)]),
    updatePhoneNumber: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(dart.anonymousJSType("OAuthCredential"))]),
    updateProfile: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(dart.anonymousJSType("UserProfile"))]),
    getIdTokenResult: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth$.IdTokenResult))), [], [dart.legacy(core.bool)]),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(auth$.User, () => ({
    __proto__: dart.getGetters(auth$.User.__proto__),
    emailVerified: dart.legacy(core.bool),
    isAnonymous: dart.legacy(core.bool),
    metadata: dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.UserMetadata, "firebase.auth.UserMetadata")),
    providerData: dart.legacy(core.List$(dart.legacy(auth$.UserInfo$(dart.legacy(dart.anonymousJSType("UserInfoJsImpl")))))),
    refreshToken: dart.legacy(core.String)
  }));
  dart.setLibraryUri(auth$.User, L3);
  dart.defineExtensionMethods(auth$.User, ['toString']);
  dart.defineLazy(auth$.User, {
    /*auth$.User._expando*/get _expando() {
      return new (ExpandoOfUserL()).new();
    }
  }, true);
  auth$.IdTokenResult = class IdTokenResult extends js$.JsObjectWrapper$(dart.legacy(dart.anonymousJSType("IdTokenResultImpl"))) {
    get authTime() {
      return http_date.parseHttpDate(this.jsObject.authTime);
    }
    get claims() {
      return utils.dartifyMap(this.jsObject.claims);
    }
    get expirationTime() {
      return http_date.parseHttpDate(this.jsObject.expirationTime);
    }
    get issuedAtTime() {
      return http_date.parseHttpDate(this.jsObject.issuedAtTime);
    }
    get signInProvider() {
      return this.jsObject.signInProvider;
    }
    get token() {
      return this.jsObject.token;
    }
  };
  (auth$.IdTokenResult._fromJsObject = function(jsObject) {
    auth$.IdTokenResult.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.IdTokenResult.prototype;
  dart.addTypeTests(auth$.IdTokenResult);
  dart.addTypeCaches(auth$.IdTokenResult);
  dart.setGetterSignature(auth$.IdTokenResult, () => ({
    __proto__: dart.getGetters(auth$.IdTokenResult.__proto__),
    authTime: dart.legacy(core.DateTime),
    claims: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)),
    expirationTime: dart.legacy(core.DateTime),
    issuedAtTime: dart.legacy(core.DateTime),
    signInProvider: dart.legacy(core.String),
    token: dart.legacy(core.String)
  }));
  dart.setLibraryUri(auth$.IdTokenResult, L3);
  var _onAuthUnsubscribe = dart.privateName(auth$, "_onAuthUnsubscribe");
  var _changeController$ = dart.privateName(auth$, "_changeController");
  var _onIdTokenChangedUnsubscribe = dart.privateName(auth$, "_onIdTokenChangedUnsubscribe");
  var _idTokenChangedController = dart.privateName(auth$, "_idTokenChangedController");
  auth$.Auth = class Auth extends js$.JsObjectWrapper$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.Auth, "firebase.auth.Auth"))) {
    get app() {
      return app.App.getInstance(this.jsObject.app);
    }
    get currentUser() {
      return auth$.User.getInstance(this.jsObject.currentUser);
    }
    get languageCode() {
      return this.jsObject.languageCode;
    }
    set languageCode(s) {
      this.jsObject.languageCode = s;
    }
    get onAuthStateChanged() {
      if (this[_changeController$] == null) {
        let nextWrapper = js.allowInterop(UserJsImplLToLNull(), dart.fn(user => {
          this[_changeController$].add(auth$.User.getInstance(user));
        }, UserJsImplLToNull()));
        let errorWrapper = js.allowInterop(dynamicToLvoid(), dart.fn(e => this[_changeController$].addError(e), dynamicTovoid()));
        const startListen = () => {
          if (!(this[_onAuthUnsubscribe] == null)) dart.assertFailed(null, L4, 313, 16, "_onAuthUnsubscribe == null");
          this[_onAuthUnsubscribe] = this.jsObject.onAuthStateChanged(dart.assertInterop(nextWrapper), dart.assertInterop(errorWrapper));
        };
        dart.fn(startListen, VoidTovoid());
        const stopListen = () => {
          this[_onAuthUnsubscribe]();
          this[_onAuthUnsubscribe] = null;
        };
        dart.fn(stopListen, VoidTovoid());
        this[_changeController$] = StreamControllerOfUserL().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return this[_changeController$].stream;
    }
    get onIdTokenChanged() {
      if (this[_idTokenChangedController] == null) {
        let nextWrapper = js.allowInterop(UserJsImplLToLNull(), dart.fn(user => {
          this[_idTokenChangedController].add(auth$.User.getInstance(user));
        }, UserJsImplLToNull()));
        let errorWrapper = js.allowInterop(dynamicToLvoid(), dart.fn(e => this[_idTokenChangedController].addError(e), dynamicTovoid()));
        const startListen = () => {
          if (!(this[_onIdTokenChangedUnsubscribe] == null)) dart.assertFailed(null, L4, 348, 16, "_onIdTokenChangedUnsubscribe == null");
          this[_onIdTokenChangedUnsubscribe] = this.jsObject.onIdTokenChanged(dart.assertInterop(nextWrapper), dart.assertInterop(errorWrapper));
        };
        dart.fn(startListen, VoidTovoid());
        const stopListen = () => {
          this[_onIdTokenChangedUnsubscribe]();
          this[_onIdTokenChangedUnsubscribe] = null;
        };
        dart.fn(stopListen, VoidTovoid());
        this[_idTokenChangedController] = StreamControllerOfUserL().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return this[_idTokenChangedController].stream;
    }
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = auth$.Auth._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new auth$.Auth._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    applyActionCode(code) {
      return utils.handleThenable(dart.dynamic, this.jsObject.applyActionCode(code));
    }
    checkActionCode(code) {
      return utils.handleThenable(dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.ActionCodeInfo, "firebase.auth.ActionCodeInfo")), this.jsObject.checkActionCode(code));
    }
    confirmPasswordReset(code, newPassword) {
      return utils.handleThenable(dart.dynamic, this.jsObject.confirmPasswordReset(code, newPassword));
    }
    createUserWithEmailAndPassword(email, password) {
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("UserCredentialJsImpl")), this.jsObject.createUserWithEmailAndPassword(email, password)).then(UserCredentialL(), dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplLToUserCredentialL()));
    }
    fetchSignInMethodsForEmail(email) {
      return utils.handleThenable(ListL(), this.jsObject.fetchSignInMethodsForEmail(email)).then(ListLOfStringL(), dart.fn(list => ListOfStringL().from(list), ListLToListLOfStringL()));
    }
    isSignInWithEmailLink(emailLink) {
      return this.jsObject.isSignInWithEmailLink(emailLink);
    }
    getRedirectResult() {
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("UserCredentialJsImpl")), this.jsObject.getRedirectResult()).then(UserCredentialL(), dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplLToUserCredentialL()));
    }
    sendSignInLinkToEmail(email, actionCodeSettings = null) {
      return utils.handleThenable(dart.dynamic, this.jsObject.sendSignInLinkToEmail(email, actionCodeSettings));
    }
    sendPasswordResetEmail(email, actionCodeSettings = null) {
      return utils.handleThenable(dart.dynamic, this.jsObject.sendPasswordResetEmail(email, actionCodeSettings));
    }
    setPersistence(persistence) {
      return utils.handleThenable(dart.dynamic, this.jsObject.setPersistence(persistence));
    }
    signInWithCredential(credential) {
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("UserCredentialJsImpl")), this.jsObject.signInWithCredential(credential)).then(UserCredentialL(), dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplLToUserCredentialL()));
    }
    signInAnonymously() {
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("UserCredentialJsImpl")), this.jsObject.signInAnonymously()).then(UserCredentialL(), dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplLToUserCredentialL()));
    }
    signInWithCustomToken(token) {
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("UserCredentialJsImpl")), this.jsObject.signInWithCustomToken(token)).then(UserCredentialL(), dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplLToUserCredentialL()));
    }
    signInAndRetrieveDataWithCustomToken(token) {
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("UserCredentialJsImpl")), this.jsObject.signInAndRetrieveDataWithCustomToken(token)).then(UserCredentialL(), dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplLToUserCredentialL()));
    }
    signInWithEmailAndPassword(email, password) {
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("UserCredentialJsImpl")), this.jsObject.signInWithEmailAndPassword(email, password)).then(UserCredentialL(), dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplLToUserCredentialL()));
    }
    signInWithEmailLink(email, emailLink) {
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("UserCredentialJsImpl")), this.jsObject.signInWithEmailLink(email, emailLink)).then(UserCredentialL(), dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplLToUserCredentialL()));
    }
    signInWithPhoneNumber(phoneNumber, applicationVerifier) {
      return utils.handleThenable(dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.ConfirmationResult, "firebase.auth.ConfirmationResult")), this.jsObject.signInWithPhoneNumber(phoneNumber, applicationVerifier.jsObject)).then(ConfirmationResultL(), dart.fn(c => new auth$.ConfirmationResult.fromJsObject(c), ConfirmationResultJsImplLToConfirmationResultL()));
    }
    signInWithPopup(provider) {
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("UserCredentialJsImpl")), this.jsObject.signInWithPopup(provider.jsObject)).then(UserCredentialL(), dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplLToUserCredentialL()));
    }
    signInWithRedirect(provider) {
      return utils.handleThenable(dart.dynamic, this.jsObject.signInWithRedirect(provider.jsObject));
    }
    signOut() {
      return utils.handleThenable(dart.dynamic, this.jsObject.signOut());
    }
    useDeviceLanguage() {
      return this.jsObject.useDeviceLanguage();
    }
    verifyPasswordResetCode(code) {
      return utils.handleThenable(StringL(), this.jsObject.verifyPasswordResetCode(code));
    }
  };
  (auth$.Auth._fromJsObject = function(jsObject) {
    this[_onAuthUnsubscribe] = null;
    this[_changeController$] = null;
    this[_onIdTokenChangedUnsubscribe] = null;
    this[_idTokenChangedController] = null;
    auth$.Auth.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.Auth.prototype;
  dart.addTypeTests(auth$.Auth);
  dart.addTypeCaches(auth$.Auth);
  dart.setMethodSignature(auth$.Auth, () => ({
    __proto__: dart.getMethods(auth$.Auth.__proto__),
    applyActionCode: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.String)]),
    checkActionCode: dart.fnType(dart.legacy(async.Future$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.ActionCodeInfo, "firebase.auth.ActionCodeInfo")))), [dart.legacy(core.String)]),
    confirmPasswordReset: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.String), dart.legacy(core.String)]),
    createUserWithEmailAndPassword: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth$.UserCredential))), [dart.legacy(core.String), dart.legacy(core.String)]),
    fetchSignInMethodsForEmail: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.List$(dart.legacy(core.String))))), [dart.legacy(core.String)]),
    isSignInWithEmailLink: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    getRedirectResult: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth$.UserCredential))), []),
    sendSignInLinkToEmail: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.String)], [dart.legacy(dart.anonymousJSType("ActionCodeSettings"))]),
    sendPasswordResetEmail: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.String)], [dart.legacy(dart.anonymousJSType("ActionCodeSettings"))]),
    setPersistence: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.String)]),
    signInWithCredential: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth$.UserCredential))), [dart.legacy(dart.anonymousJSType("OAuthCredential"))]),
    signInAnonymously: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth$.UserCredential))), []),
    signInWithCustomToken: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth$.UserCredential))), [dart.legacy(core.String)]),
    signInAndRetrieveDataWithCustomToken: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth$.UserCredential))), [dart.legacy(core.String)]),
    signInWithEmailAndPassword: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth$.UserCredential))), [dart.legacy(core.String), dart.legacy(core.String)]),
    signInWithEmailLink: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth$.UserCredential))), [dart.legacy(core.String), dart.legacy(core.String)]),
    signInWithPhoneNumber: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth$.ConfirmationResult))), [dart.legacy(core.String), dart.legacy(auth$.ApplicationVerifier$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.ApplicationVerifier, "firebase.auth.ApplicationVerifier"))))]),
    signInWithPopup: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth$.UserCredential))), [dart.legacy(auth$.AuthProvider$(dart.legacy(dart.anonymousJSType("AuthProviderJsImpl"))))]),
    signInWithRedirect: dart.fnType(dart.legacy(async.Future), [dart.legacy(auth$.AuthProvider$(dart.legacy(dart.anonymousJSType("AuthProviderJsImpl"))))]),
    signOut: dart.fnType(dart.legacy(async.Future), []),
    useDeviceLanguage: dart.fnType(dart.void, []),
    verifyPasswordResetCode: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(auth$.Auth, () => ({
    __proto__: dart.getGetters(auth$.Auth.__proto__),
    app: dart.legacy(app.App),
    currentUser: dart.legacy(auth$.User),
    languageCode: dart.legacy(core.String),
    onAuthStateChanged: dart.legacy(async.Stream$(dart.legacy(auth$.User))),
    onIdTokenChanged: dart.legacy(async.Stream$(dart.legacy(auth$.User)))
  }));
  dart.setSetterSignature(auth$.Auth, () => ({
    __proto__: dart.getSetters(auth$.Auth.__proto__),
    languageCode: dart.legacy(core.String)
  }));
  dart.setLibraryUri(auth$.Auth, L3);
  dart.setFieldSignature(auth$.Auth, () => ({
    __proto__: dart.getFields(auth$.Auth.__proto__),
    [_onAuthUnsubscribe]: dart.fieldType(dart.legacy(dart.fnType(dart.dynamic, []))),
    [_changeController$]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(auth$.User)))),
    [_onIdTokenChangedUnsubscribe]: dart.fieldType(dart.legacy(dart.fnType(dart.dynamic, []))),
    [_idTokenChangedController]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(auth$.User))))
  }));
  dart.defineLazy(auth$.Auth, {
    /*auth$.Auth._expando*/get _expando() {
      return new (ExpandoOfAuthL()).new();
    }
  }, true);
  const _is_AuthProvider_default = Symbol('_is_AuthProvider_default');
  auth$.AuthProvider$ = dart.generic(T => {
    class AuthProvider extends js$.JsObjectWrapper$(dart.legacy(T)) {
      get providerId() {
        return this.jsObject.providerId;
      }
    }
    (AuthProvider.fromJsObject = function(jsObject) {
      AuthProvider.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = AuthProvider.prototype;
    dart.addTypeTests(AuthProvider);
    AuthProvider.prototype[_is_AuthProvider_default] = true;
    dart.addTypeCaches(AuthProvider);
    dart.setGetterSignature(AuthProvider, () => ({
      __proto__: dart.getGetters(AuthProvider.__proto__),
      providerId: dart.legacy(core.String)
    }));
    dart.setLibraryUri(AuthProvider, L3);
    return AuthProvider;
  });
  auth$.AuthProvider = auth$.AuthProvider$();
  dart.addTypeTests(auth$.AuthProvider, _is_AuthProvider_default);
  auth$.EmailAuthProvider = class EmailAuthProvider extends auth$.AuthProvider$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.EmailAuthProvider, "firebase.auth.EmailAuthProvider"))) {
    static new() {
      return new auth$.EmailAuthProvider.fromJsObject(new dart.global.firebase.auth.EmailAuthProvider());
    }
    static credential(email, password) {
      return dart.legacy(dart.anonymousJSType("OAuthCredential")).as(dart.global.firebase.auth.EmailAuthProvider.credential(email, password));
    }
  };
  (auth$.EmailAuthProvider.fromJsObject = function(jsObject) {
    auth$.EmailAuthProvider.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.EmailAuthProvider.prototype;
  dart.addTypeTests(auth$.EmailAuthProvider);
  dart.addTypeCaches(auth$.EmailAuthProvider);
  dart.setLibraryUri(auth$.EmailAuthProvider, L3);
  dart.defineLazy(auth$.EmailAuthProvider, {
    /*auth$.EmailAuthProvider.PROVIDER_ID*/get PROVIDER_ID() {
      return dart.global.firebase.auth.EmailAuthProvider.PROVIDER_ID;
    },
    set PROVIDER_ID(_) {}
  }, true);
  auth$.FacebookAuthProvider = class FacebookAuthProvider extends auth$.AuthProvider$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.FacebookAuthProvider, "firebase.auth.FacebookAuthProvider"))) {
    static new() {
      return new auth$.FacebookAuthProvider.fromJsObject(new dart.global.firebase.auth.FacebookAuthProvider());
    }
    addScope(scope) {
      return new auth$.FacebookAuthProvider.fromJsObject(this.jsObject.addScope(scope));
    }
    setCustomParameters(customOAuthParameters) {
      return new auth$.FacebookAuthProvider.fromJsObject(this.jsObject.setCustomParameters(utils.jsify(customOAuthParameters)));
    }
    static credential(token) {
      return dart.global.firebase.auth.FacebookAuthProvider.credential(token);
    }
  };
  (auth$.FacebookAuthProvider.fromJsObject = function(jsObject) {
    auth$.FacebookAuthProvider.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.FacebookAuthProvider.prototype;
  dart.addTypeTests(auth$.FacebookAuthProvider);
  dart.addTypeCaches(auth$.FacebookAuthProvider);
  dart.setMethodSignature(auth$.FacebookAuthProvider, () => ({
    __proto__: dart.getMethods(auth$.FacebookAuthProvider.__proto__),
    addScope: dart.fnType(dart.legacy(auth$.FacebookAuthProvider), [dart.legacy(core.String)]),
    setCustomParameters: dart.fnType(dart.legacy(auth$.FacebookAuthProvider), [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))])
  }));
  dart.setLibraryUri(auth$.FacebookAuthProvider, L3);
  dart.defineLazy(auth$.FacebookAuthProvider, {
    /*auth$.FacebookAuthProvider.PROVIDER_ID*/get PROVIDER_ID() {
      return dart.global.firebase.auth.FacebookAuthProvider.PROVIDER_ID;
    },
    set PROVIDER_ID(_) {}
  }, true);
  auth$.GithubAuthProvider = class GithubAuthProvider extends auth$.AuthProvider$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.GithubAuthProvider, "firebase.auth.GithubAuthProvider"))) {
    static new() {
      return new auth$.GithubAuthProvider.fromJsObject(new dart.global.firebase.auth.GithubAuthProvider());
    }
    addScope(scope) {
      return new auth$.GithubAuthProvider.fromJsObject(this.jsObject.addScope(scope));
    }
    setCustomParameters(customOAuthParameters) {
      return new auth$.GithubAuthProvider.fromJsObject(this.jsObject.setCustomParameters(utils.jsify(customOAuthParameters)));
    }
    static credential(token) {
      return dart.global.firebase.auth.GithubAuthProvider.credential(token);
    }
  };
  (auth$.GithubAuthProvider.fromJsObject = function(jsObject) {
    auth$.GithubAuthProvider.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.GithubAuthProvider.prototype;
  dart.addTypeTests(auth$.GithubAuthProvider);
  dart.addTypeCaches(auth$.GithubAuthProvider);
  dart.setMethodSignature(auth$.GithubAuthProvider, () => ({
    __proto__: dart.getMethods(auth$.GithubAuthProvider.__proto__),
    addScope: dart.fnType(dart.legacy(auth$.GithubAuthProvider), [dart.legacy(core.String)]),
    setCustomParameters: dart.fnType(dart.legacy(auth$.GithubAuthProvider), [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))])
  }));
  dart.setLibraryUri(auth$.GithubAuthProvider, L3);
  dart.defineLazy(auth$.GithubAuthProvider, {
    /*auth$.GithubAuthProvider.PROVIDER_ID*/get PROVIDER_ID() {
      return dart.global.firebase.auth.GithubAuthProvider.PROVIDER_ID;
    },
    set PROVIDER_ID(_) {}
  }, true);
  auth$.GoogleAuthProvider = class GoogleAuthProvider extends auth$.AuthProvider$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.GoogleAuthProvider, "firebase.auth.GoogleAuthProvider"))) {
    static new() {
      return new auth$.GoogleAuthProvider.fromJsObject(new dart.global.firebase.auth.GoogleAuthProvider());
    }
    addScope(scope) {
      return new auth$.GoogleAuthProvider.fromJsObject(this.jsObject.addScope(scope));
    }
    setCustomParameters(customOAuthParameters) {
      return new auth$.GoogleAuthProvider.fromJsObject(this.jsObject.setCustomParameters(utils.jsify(customOAuthParameters)));
    }
    static credential(idToken = null, accessToken = null) {
      return dart.global.firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
    }
  };
  (auth$.GoogleAuthProvider.fromJsObject = function(jsObject) {
    auth$.GoogleAuthProvider.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.GoogleAuthProvider.prototype;
  dart.addTypeTests(auth$.GoogleAuthProvider);
  dart.addTypeCaches(auth$.GoogleAuthProvider);
  dart.setMethodSignature(auth$.GoogleAuthProvider, () => ({
    __proto__: dart.getMethods(auth$.GoogleAuthProvider.__proto__),
    addScope: dart.fnType(dart.legacy(auth$.GoogleAuthProvider), [dart.legacy(core.String)]),
    setCustomParameters: dart.fnType(dart.legacy(auth$.GoogleAuthProvider), [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))])
  }));
  dart.setLibraryUri(auth$.GoogleAuthProvider, L3);
  dart.defineLazy(auth$.GoogleAuthProvider, {
    /*auth$.GoogleAuthProvider.PROVIDER_ID*/get PROVIDER_ID() {
      return dart.global.firebase.auth.GoogleAuthProvider.PROVIDER_ID;
    },
    set PROVIDER_ID(_) {}
  }, true);
  auth$.OAuthProvider = class OAuthProvider extends auth$.AuthProvider$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.OAuthProvider, "firebase.auth.OAuthProvider"))) {
    static new(providerId) {
      return new auth$.OAuthProvider.fromJsObject(new dart.global.firebase.auth.OAuthProvider(providerId));
    }
    addScope(scope) {
      return new auth$.OAuthProvider.fromJsObject(this.jsObject.addScope(scope));
    }
    setCustomParameters(customOAuthParameters) {
      return new auth$.OAuthProvider.fromJsObject(this.jsObject.setCustomParameters(utils.jsify(customOAuthParameters)));
    }
    credential(idToken = null, accessToken = null) {
      return this.jsObject.credential(idToken, accessToken);
    }
  };
  (auth$.OAuthProvider.fromJsObject = function(jsObject) {
    auth$.OAuthProvider.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.OAuthProvider.prototype;
  dart.addTypeTests(auth$.OAuthProvider);
  dart.addTypeCaches(auth$.OAuthProvider);
  dart.setMethodSignature(auth$.OAuthProvider, () => ({
    __proto__: dart.getMethods(auth$.OAuthProvider.__proto__),
    addScope: dart.fnType(dart.legacy(auth$.OAuthProvider), [dart.legacy(core.String)]),
    setCustomParameters: dart.fnType(dart.legacy(auth$.OAuthProvider), [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))]),
    credential: dart.fnType(dart.legacy(dart.anonymousJSType("OAuthCredential")), [], [dart.legacy(core.String), dart.legacy(core.String)])
  }));
  dart.setLibraryUri(auth$.OAuthProvider, L3);
  auth$.TwitterAuthProvider = class TwitterAuthProvider extends auth$.AuthProvider$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.TwitterAuthProvider, "firebase.auth.TwitterAuthProvider"))) {
    static new() {
      return new auth$.TwitterAuthProvider.fromJsObject(new dart.global.firebase.auth.TwitterAuthProvider());
    }
    setCustomParameters(customOAuthParameters) {
      return new auth$.TwitterAuthProvider.fromJsObject(this.jsObject.setCustomParameters(utils.jsify(customOAuthParameters)));
    }
    static credential(token, secret) {
      return dart.global.firebase.auth.TwitterAuthProvider.credential(token, secret);
    }
  };
  (auth$.TwitterAuthProvider.fromJsObject = function(jsObject) {
    auth$.TwitterAuthProvider.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.TwitterAuthProvider.prototype;
  dart.addTypeTests(auth$.TwitterAuthProvider);
  dart.addTypeCaches(auth$.TwitterAuthProvider);
  dart.setMethodSignature(auth$.TwitterAuthProvider, () => ({
    __proto__: dart.getMethods(auth$.TwitterAuthProvider.__proto__),
    setCustomParameters: dart.fnType(dart.legacy(auth$.TwitterAuthProvider), [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))])
  }));
  dart.setLibraryUri(auth$.TwitterAuthProvider, L3);
  dart.defineLazy(auth$.TwitterAuthProvider, {
    /*auth$.TwitterAuthProvider.PROVIDER_ID*/get PROVIDER_ID() {
      return dart.global.firebase.auth.TwitterAuthProvider.PROVIDER_ID;
    },
    set PROVIDER_ID(_) {}
  }, true);
  auth$.PhoneAuthProvider = class PhoneAuthProvider extends auth$.AuthProvider$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.PhoneAuthProvider, "firebase.auth.PhoneAuthProvider"))) {
    static get PROVIDER_ID() {
      return dart.global.firebase.auth.PhoneAuthProvider.PROVIDER_ID;
    }
    static new(auth = null) {
      return new auth$.PhoneAuthProvider.fromJsObject(auth != null ? new dart.global.firebase.auth.PhoneAuthProvider(auth.jsObject) : new dart.global.firebase.auth.PhoneAuthProvider());
    }
    verifyPhoneNumber(phoneNumber, applicationVerifier) {
      return utils.handleThenable(StringL(), this.jsObject.verifyPhoneNumber(phoneNumber, applicationVerifier.jsObject));
    }
    static credential(verificationId, verificationCode) {
      return dart.legacy(dart.anonymousJSType("OAuthCredential")).as(dart.global.firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode));
    }
  };
  (auth$.PhoneAuthProvider.fromJsObject = function(jsObject) {
    auth$.PhoneAuthProvider.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.PhoneAuthProvider.prototype;
  dart.addTypeTests(auth$.PhoneAuthProvider);
  dart.addTypeCaches(auth$.PhoneAuthProvider);
  dart.setMethodSignature(auth$.PhoneAuthProvider, () => ({
    __proto__: dart.getMethods(auth$.PhoneAuthProvider.__proto__),
    verifyPhoneNumber: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), [dart.legacy(core.String), dart.legacy(auth$.ApplicationVerifier$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.ApplicationVerifier, "firebase.auth.ApplicationVerifier"))))])
  }));
  dart.setLibraryUri(auth$.PhoneAuthProvider, L3);
  const _is_ApplicationVerifier_default = Symbol('_is_ApplicationVerifier_default');
  auth$.ApplicationVerifier$ = dart.generic(T => {
    class ApplicationVerifier extends js$.JsObjectWrapper$(dart.legacy(T)) {
      get type() {
        return this.jsObject.type;
      }
      verify() {
        return utils.handleThenable(StringL(), this.jsObject.verify());
      }
    }
    (ApplicationVerifier.fromJsObject = function(jsObject) {
      ApplicationVerifier.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = ApplicationVerifier.prototype;
    dart.addTypeTests(ApplicationVerifier);
    ApplicationVerifier.prototype[_is_ApplicationVerifier_default] = true;
    dart.addTypeCaches(ApplicationVerifier);
    dart.setMethodSignature(ApplicationVerifier, () => ({
      __proto__: dart.getMethods(ApplicationVerifier.__proto__),
      verify: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), [])
    }));
    dart.setGetterSignature(ApplicationVerifier, () => ({
      __proto__: dart.getGetters(ApplicationVerifier.__proto__),
      type: dart.legacy(core.String)
    }));
    dart.setLibraryUri(ApplicationVerifier, L3);
    return ApplicationVerifier;
  });
  auth$.ApplicationVerifier = auth$.ApplicationVerifier$();
  dart.addTypeTests(auth$.ApplicationVerifier, _is_ApplicationVerifier_default);
  auth$.RecaptchaVerifier = class RecaptchaVerifier extends auth$.ApplicationVerifier$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.RecaptchaVerifier, "firebase.auth.RecaptchaVerifier"))) {
    static new(container, parameters = null, app = null) {
      return parameters != null ? app != null ? new auth$.RecaptchaVerifier.fromJsObject(new dart.global.firebase.auth.RecaptchaVerifier(container, utils.jsify(parameters), app.jsObject)) : new auth$.RecaptchaVerifier.fromJsObject(new dart.global.firebase.auth.RecaptchaVerifier(container, utils.jsify(parameters))) : new auth$.RecaptchaVerifier.fromJsObject(new dart.global.firebase.auth.RecaptchaVerifier(container));
    }
    clear() {
      return this.jsObject.clear();
    }
    render() {
      return utils.handleThenable(numL(), this.jsObject.render());
    }
  };
  (auth$.RecaptchaVerifier.fromJsObject = function(jsObject) {
    auth$.RecaptchaVerifier.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.RecaptchaVerifier.prototype;
  dart.addTypeTests(auth$.RecaptchaVerifier);
  dart.addTypeCaches(auth$.RecaptchaVerifier);
  dart.setMethodSignature(auth$.RecaptchaVerifier, () => ({
    __proto__: dart.getMethods(auth$.RecaptchaVerifier.__proto__),
    clear: dart.fnType(dart.void, []),
    render: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.num))), [])
  }));
  dart.setLibraryUri(auth$.RecaptchaVerifier, L3);
  auth$.ConfirmationResult = class ConfirmationResult extends js$.JsObjectWrapper$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.ConfirmationResult, "firebase.auth.ConfirmationResult"))) {
    get verificationId() {
      return this.jsObject.verificationId;
    }
    confirm(verificationCode) {
      return utils.handleThenable(dart.legacy(dart.anonymousJSType("UserCredentialJsImpl")), this.jsObject.confirm(verificationCode)).then(UserCredentialL(), dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplLToUserCredentialL()));
    }
  };
  (auth$.ConfirmationResult.fromJsObject = function(jsObject) {
    auth$.ConfirmationResult.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.ConfirmationResult.prototype;
  dart.addTypeTests(auth$.ConfirmationResult);
  dart.addTypeCaches(auth$.ConfirmationResult);
  dart.setMethodSignature(auth$.ConfirmationResult, () => ({
    __proto__: dart.getMethods(auth$.ConfirmationResult.__proto__),
    confirm: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth$.UserCredential))), [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(auth$.ConfirmationResult, () => ({
    __proto__: dart.getGetters(auth$.ConfirmationResult.__proto__),
    verificationId: dart.legacy(core.String)
  }));
  dart.setLibraryUri(auth$.ConfirmationResult, L3);
  auth$.UserCredential = class UserCredential extends js$.JsObjectWrapper$(dart.legacy(dart.anonymousJSType("UserCredentialJsImpl"))) {
    get user() {
      return auth$.User.getInstance(this.jsObject.user);
    }
    get credential() {
      return this.jsObject.credential;
    }
    get operationType() {
      return this.jsObject.operationType;
    }
    get additionalUserInfo() {
      return new auth$.AdditionalUserInfo.fromJsObject(this.jsObject.additionalUserInfo);
    }
  };
  (auth$.UserCredential.fromJsObject = function(jsObject) {
    auth$.UserCredential.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.UserCredential.prototype;
  dart.addTypeTests(auth$.UserCredential);
  dart.addTypeCaches(auth$.UserCredential);
  dart.setGetterSignature(auth$.UserCredential, () => ({
    __proto__: dart.getGetters(auth$.UserCredential.__proto__),
    user: dart.legacy(auth$.User),
    credential: dart.legacy(dart.anonymousJSType("OAuthCredential")),
    operationType: dart.legacy(core.String),
    additionalUserInfo: dart.legacy(auth$.AdditionalUserInfo)
  }));
  dart.setLibraryUri(auth$.UserCredential, L3);
  auth$.AdditionalUserInfo = class AdditionalUserInfo extends js$.JsObjectWrapper$(dart.legacy(dart.anonymousJSType("AdditionalUserInfoJsImpl"))) {
    get providerId() {
      return this.jsObject.providerId;
    }
    get profile() {
      return MapLOfStringL$dynamic().as(utils.dartify(this.jsObject.profile));
    }
    get username() {
      return this.jsObject.username;
    }
    get isNewUser() {
      return this.jsObject.isNewUser;
    }
  };
  (auth$.AdditionalUserInfo.fromJsObject = function(jsObject) {
    auth$.AdditionalUserInfo.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.AdditionalUserInfo.prototype;
  dart.addTypeTests(auth$.AdditionalUserInfo);
  dart.addTypeCaches(auth$.AdditionalUserInfo);
  dart.setGetterSignature(auth$.AdditionalUserInfo, () => ({
    __proto__: dart.getGetters(auth$.AdditionalUserInfo.__proto__),
    providerId: dart.legacy(core.String),
    profile: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)),
    username: dart.legacy(core.String),
    isNewUser: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(auth$.AdditionalUserInfo, L3);
  app.App = class App extends js$.JsObjectWrapper$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.app.App, "firebase.app.App"))) {
    get name() {
      return this.jsObject.name;
    }
    get options() {
      return this.jsObject.options;
    }
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = app.App._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new app.App._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    auth() {
      return auth$.Auth.getInstance(this.jsObject.auth());
    }
    database() {
      return database.Database.getInstance(this.jsObject.database());
    }
    delete() {
      return utils.handleThenable(dart.dynamic, this.jsObject.delete());
    }
    storage(url = null) {
      let jsObjectStorage = url != null ? this.jsObject.storage(url) : this.jsObject.storage();
      return storage.Storage.getInstance(jsObjectStorage);
    }
    firestore() {
      return firestore.Firestore.getInstance(this.jsObject.firestore());
    }
    functions(region = null) {
      if (region == null) {
        return functions.Functions.getInstance(this.jsObject.functions());
      }
      return functions.Functions.getInstance(this.jsObject.functions(region));
    }
  };
  (app.App._fromJsObject = function(jsObject) {
    app.App.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = app.App.prototype;
  dart.addTypeTests(app.App);
  dart.addTypeCaches(app.App);
  dart.setMethodSignature(app.App, () => ({
    __proto__: dart.getMethods(app.App.__proto__),
    auth: dart.fnType(dart.legacy(auth$.Auth), []),
    database: dart.fnType(dart.legacy(database.Database), []),
    delete: dart.fnType(dart.legacy(async.Future), []),
    storage: dart.fnType(dart.legacy(storage.Storage), [], [dart.legacy(core.String)]),
    firestore: dart.fnType(dart.legacy(firestore.Firestore), []),
    functions: dart.fnType(dart.legacy(functions.Functions), [], [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(app.App, () => ({
    __proto__: dart.getGetters(app.App.__proto__),
    name: dart.legacy(core.String),
    options: dart.legacy(dart.anonymousJSType("FirebaseOptions"))
  }));
  dart.setLibraryUri(app.App, L5);
  dart.defineLazy(app.App, {
    /*app.App._expando*/get _expando() {
      return new (ExpandoOfAppL()).new();
    }
  }, true);
  var C12;
  var C13;
  firestore.Firestore = class Firestore extends js$.JsObjectWrapper$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Firestore, "firebase.firestore.Firestore"))) {
    get app() {
      return app.App.getInstance(this.jsObject.app);
    }
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = firestore.Firestore._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new firestore.Firestore._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    batch() {
      return firestore.WriteBatch.getInstance(this.jsObject.batch());
    }
    collection(collectionPath) {
      return firestore.CollectionReference.getInstance(this.jsObject.collection(collectionPath));
    }
    collectionGroup(collectionId) {
      return new (QueryOfQueryJsImplL$()).fromJsObject(this.jsObject.collectionGroup(collectionId));
    }
    doc(documentPath) {
      return firestore.DocumentReference.getInstance(this.jsObject.doc(documentPath));
    }
    enablePersistence() {
      return utils.handleThenable(core.Null, this.jsObject.enablePersistence());
    }
    runTransaction(updateFunction) {
      let updateFunctionWrap = js.allowInterop(dynamicToLPromiseJsImplL(), dart.fn(transaction => utils.handleFutureWithMapper(ObjectL(), dart.dynamic, FutureLOfObjectL().as(updateFunction(firestore.Transaction.getInstance(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Transaction, "firebase.firestore.Transaction")).as(transaction)))), C12 || CT.C12), dynamicToPromiseJsImplL()));
      return utils.handleThenable(dart.void, this.jsObject.runTransaction(dart.assertInterop(updateFunctionWrap))).then(dart.dynamic, C13 || CT.C13);
    }
    settings(settings) {
      return this.jsObject.settings(settings);
    }
    enableNetwork() {
      return utils.handleThenable(dart.dynamic, this.jsObject.enableNetwork());
    }
    disableNetwork() {
      return utils.handleThenable(dart.dynamic, this.jsObject.disableNetwork());
    }
  };
  (firestore.Firestore._fromJsObject = function(jsObject) {
    firestore.Firestore.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = firestore.Firestore.prototype;
  dart.addTypeTests(firestore.Firestore);
  dart.addTypeCaches(firestore.Firestore);
  dart.setMethodSignature(firestore.Firestore, () => ({
    __proto__: dart.getMethods(firestore.Firestore.__proto__),
    batch: dart.fnType(dart.legacy(firestore.WriteBatch), []),
    collection: dart.fnType(dart.legacy(firestore.CollectionReference$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference")))), [dart.legacy(core.String)]),
    collectionGroup: dart.fnType(dart.legacy(firestore.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")))), [dart.legacy(core.String)]),
    doc: dart.fnType(dart.legacy(firestore.DocumentReference), [dart.legacy(core.String)]),
    enablePersistence: dart.fnType(dart.legacy(async.Future$(core.Null)), []),
    runTransaction: dart.fnType(dart.legacy(async.Future), [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(firestore.Transaction)]))]),
    settings: dart.fnType(dart.void, [dart.legacy(dart.anonymousJSType("Settings"))]),
    enableNetwork: dart.fnType(dart.legacy(async.Future), []),
    disableNetwork: dart.fnType(dart.legacy(async.Future), [])
  }));
  dart.setGetterSignature(firestore.Firestore, () => ({
    __proto__: dart.getGetters(firestore.Firestore.__proto__),
    app: dart.legacy(app.App)
  }));
  dart.setLibraryUri(firestore.Firestore, L6);
  dart.defineLazy(firestore.Firestore, {
    /*firestore.Firestore._expando*/get _expando() {
      return new (ExpandoOfFirestoreL()).new();
    }
  }, true);
  var _wrapUpdateFunctionCall = dart.privateName(firestore, "_wrapUpdateFunctionCall");
  firestore._Updatable = class _Updatable extends core.Object {
    [_wrapUpdateFunctionCall](T, jsObject, data, fieldsAndValues, documentRef = null) {
      if (data == null && fieldsAndValues == null) {
        dart.throw(new core.ArgumentError.new("Please provide either data or fieldsAndValues parameter."));
      }
      let args = data != null ? [utils.jsify(data)] : fieldsAndValues[$map](dart.dynamic, dart.fn(f => dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.FieldPath, "firebase.firestore.FieldPath")).is(f) ? f : utils.jsify(f), dynamicTodynamic()))[$toList]();
      if (documentRef != null) {
        args[$insert](0, documentRef.jsObject);
      }
      return dart.legacy(T).as(utils.callMethod(jsObject, "update", args));
    }
  };
  (firestore._Updatable.new = function() {
    ;
  }).prototype = firestore._Updatable.prototype;
  dart.addTypeTests(firestore._Updatable);
  dart.addTypeCaches(firestore._Updatable);
  dart.setMethodSignature(firestore._Updatable, () => ({
    __proto__: dart.getMethods(firestore._Updatable.__proto__),
    [_wrapUpdateFunctionCall]: dart.gFnType(T => [dart.legacy(T), [dart.dynamic, dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), dart.legacy(core.List)], [dart.legacy(firestore.DocumentReference)]])
  }));
  dart.setLibraryUri(firestore._Updatable, L6);
  const JsObjectWrapper__Updatable$36 = class JsObjectWrapper__Updatable extends js$.JsObjectWrapper$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.WriteBatch, "firebase.firestore.WriteBatch"))) {};
  (JsObjectWrapper__Updatable$36.fromJsObject = function(jsObject) {
    JsObjectWrapper__Updatable$36.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = JsObjectWrapper__Updatable$36.prototype;
  dart.applyMixin(JsObjectWrapper__Updatable$36, firestore._Updatable);
  firestore.WriteBatch = class WriteBatch extends JsObjectWrapper__Updatable$36 {
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = firestore.WriteBatch._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new firestore.WriteBatch._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    commit() {
      return utils.handleThenable(core.Null, this.jsObject.commit());
    }
    delete(documentRef) {
      return firestore.WriteBatch.getInstance(this.jsObject.delete(documentRef.jsObject));
    }
    set(documentRef, data, options = null) {
      let jsObjectSet = options != null ? this.jsObject.set(documentRef.jsObject, utils.jsify(data), options) : this.jsObject.set(documentRef.jsObject, utils.jsify(data));
      return firestore.WriteBatch.getInstance(jsObjectSet);
    }
    update(documentRef, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let fieldsAndValues = opts && 'fieldsAndValues' in opts ? opts.fieldsAndValues : null;
      return firestore.WriteBatch.getInstance(this[_wrapUpdateFunctionCall](dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.WriteBatch, "firebase.firestore.WriteBatch")), this.jsObject, data, fieldsAndValues, documentRef));
    }
  };
  (firestore.WriteBatch._fromJsObject = function(jsObject) {
    firestore.WriteBatch.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = firestore.WriteBatch.prototype;
  dart.addTypeTests(firestore.WriteBatch);
  dart.addTypeCaches(firestore.WriteBatch);
  dart.setMethodSignature(firestore.WriteBatch, () => ({
    __proto__: dart.getMethods(firestore.WriteBatch.__proto__),
    commit: dart.fnType(dart.legacy(async.Future$(core.Null)), []),
    delete: dart.fnType(dart.legacy(firestore.WriteBatch), [dart.legacy(firestore.DocumentReference)]),
    set: dart.fnType(dart.legacy(firestore.WriteBatch), [dart.legacy(firestore.DocumentReference), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))], [dart.legacy(dart.anonymousJSType("SetOptions"))]),
    update: dart.fnType(dart.legacy(firestore.WriteBatch), [dart.legacy(firestore.DocumentReference)], {data: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), fieldsAndValues: dart.legacy(core.List)}, {})
  }));
  dart.setLibraryUri(firestore.WriteBatch, L6);
  dart.defineLazy(firestore.WriteBatch, {
    /*firestore.WriteBatch._expando*/get _expando() {
      return new (ExpandoOfWriteBatchL()).new();
    }
  }, true);
  var _onSnapshotController = dart.privateName(firestore, "_onSnapshotController");
  var _onMetadataController = dart.privateName(firestore, "_onMetadataController");
  var C14;
  var _createStream$ = dart.privateName(firestore, "_createStream");
  const JsObjectWrapper__Updatable$36$ = class JsObjectWrapper__Updatable extends js$.JsObjectWrapper$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentReference, "firebase.firestore.DocumentReference"))) {};
  (JsObjectWrapper__Updatable$36$.fromJsObject = function(jsObject) {
    JsObjectWrapper__Updatable$36$.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = JsObjectWrapper__Updatable$36$.prototype;
  dart.applyMixin(JsObjectWrapper__Updatable$36$, firestore._Updatable);
  firestore.DocumentReference = class DocumentReference extends JsObjectWrapper__Updatable$36$ {
    get firestore() {
      return firestore.Firestore.getInstance(this.jsObject.firestore);
    }
    get id() {
      return this.jsObject.id;
    }
    get parent() {
      return firestore.CollectionReference.getInstance(this.jsObject.parent);
    }
    get path() {
      return this.jsObject.path;
    }
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = firestore.DocumentReference._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new firestore.DocumentReference._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    collection(collectionPath) {
      return firestore.CollectionReference.getInstance(this.jsObject.collection(collectionPath));
    }
    delete() {
      return utils.handleThenable(core.Null, this.jsObject.delete());
    }
    get() {
      return utils.handleThenable(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot")), this.jsObject.get()).then(DocumentSnapshotL(), C14 || CT.C14);
    }
    get onSnapshot() {
      return this[_createStream$](this[_onSnapshotController]);
    }
    get onMetadataChangesSnapshot() {
      return this[_createStream$](this[_onMetadataController], {includeMetadataChanges: true});
    }
    [_createStream$](controller, options = null) {
      if (controller == null) {
        let nextWrapper = js.allowInterop(DocumentSnapshotJsImplLToLNull(), dart.fn(snapshot => {
          controller.add(firestore.DocumentSnapshot.getInstance(snapshot));
        }, DocumentSnapshotJsImplLToNull()));
        let errorWrapper = js.allowInterop(dynamicToLvoid(), dart.fn(e => controller.addError(e), dynamicTovoid()));
        let onSnapshotUnsubscribe = null;
        const startListen = () => {
          onSnapshotUnsubscribe = options != null ? this.jsObject.onSnapshot(options, dart.assertInterop(nextWrapper), dart.assertInterop(errorWrapper)) : this.jsObject.onSnapshot(dart.assertInterop(nextWrapper), dart.assertInterop(errorWrapper));
        };
        dart.fn(startListen, VoidTovoid());
        function stopListen() {
          onSnapshotUnsubscribe();
          onSnapshotUnsubscribe = null;
        }
        dart.fn(stopListen, VoidTovoid());
        controller = StreamControllerOfDocumentSnapshotL().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return controller.stream;
    }
    set(data, options = null) {
      let jsObjectSet = options != null ? this.jsObject.set(utils.jsify(data), options) : this.jsObject.set(utils.jsify(data));
      return utils.handleThenable(core.Null, jsObjectSet);
    }
    update(opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let fieldsAndValues = opts && 'fieldsAndValues' in opts ? opts.fieldsAndValues : null;
      return utils.handleThenable(core.Null, this[_wrapUpdateFunctionCall](dart.legacy(dart.lazyJSType(() => dart.global.Promise, "Promise")), this.jsObject, data, fieldsAndValues));
    }
  };
  (firestore.DocumentReference._fromJsObject = function(jsObject) {
    this[_onSnapshotController] = null;
    this[_onMetadataController] = null;
    firestore.DocumentReference.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = firestore.DocumentReference.prototype;
  dart.addTypeTests(firestore.DocumentReference);
  dart.addTypeCaches(firestore.DocumentReference);
  dart.setMethodSignature(firestore.DocumentReference, () => ({
    __proto__: dart.getMethods(firestore.DocumentReference.__proto__),
    collection: dart.fnType(dart.legacy(firestore.CollectionReference$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference")))), [dart.legacy(core.String)]),
    delete: dart.fnType(dart.legacy(async.Future$(core.Null)), []),
    get: dart.fnType(dart.legacy(async.Future$(dart.legacy(firestore.DocumentSnapshot))), []),
    [_createStream$]: dart.fnType(dart.legacy(async.Stream$(dart.legacy(firestore.DocumentSnapshot))), [dart.legacy(async.StreamController$(dart.legacy(firestore.DocumentSnapshot)))], [dart.legacy(dart.anonymousJSType("DocumentListenOptions"))]),
    set: dart.fnType(dart.legacy(async.Future$(core.Null)), [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))], [dart.legacy(dart.anonymousJSType("SetOptions"))]),
    update: dart.fnType(dart.legacy(async.Future$(core.Null)), [], {data: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), fieldsAndValues: dart.legacy(core.List)}, {})
  }));
  dart.setGetterSignature(firestore.DocumentReference, () => ({
    __proto__: dart.getGetters(firestore.DocumentReference.__proto__),
    firestore: dart.legacy(firestore.Firestore),
    id: dart.legacy(core.String),
    parent: dart.legacy(firestore.CollectionReference$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference")))),
    path: dart.legacy(core.String),
    onSnapshot: dart.legacy(async.Stream$(dart.legacy(firestore.DocumentSnapshot))),
    onMetadataChangesSnapshot: dart.legacy(async.Stream$(dart.legacy(firestore.DocumentSnapshot)))
  }));
  dart.setLibraryUri(firestore.DocumentReference, L6);
  dart.setFieldSignature(firestore.DocumentReference, () => ({
    __proto__: dart.getFields(firestore.DocumentReference.__proto__),
    [_onSnapshotController]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(firestore.DocumentSnapshot)))),
    [_onMetadataController]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(firestore.DocumentSnapshot))))
  }));
  dart.defineLazy(firestore.DocumentReference, {
    /*firestore.DocumentReference._expando*/get _expando() {
      return new (ExpandoOfDocumentReferenceL()).new();
    }
  }, true);
  var _onSnapshotMetadataController = dart.privateName(firestore, "_onSnapshotMetadataController");
  var _wrapPaginatingFunctionCall = dart.privateName(firestore, "_wrapPaginatingFunctionCall");
  var C15;
  const _is_Query_default$ = Symbol('_is_Query_default');
  firestore.Query$ = dart.generic(T => {
    class Query extends js$.JsObjectWrapper$(dart.legacy(T)) {
      get firestore() {
        return firestore.Firestore.getInstance(this.jsObject.firestore);
      }
      endAt(opts) {
        let snapshot = opts && 'snapshot' in opts ? opts.snapshot : null;
        let fieldValues = opts && 'fieldValues' in opts ? opts.fieldValues : null;
        return new (QueryOfQueryJsImplL$()).fromJsObject(this[_wrapPaginatingFunctionCall](dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), "endAt", snapshot, fieldValues));
      }
      endBefore(opts) {
        let snapshot = opts && 'snapshot' in opts ? opts.snapshot : null;
        let fieldValues = opts && 'fieldValues' in opts ? opts.fieldValues : null;
        return new (QueryOfQueryJsImplL$()).fromJsObject(this[_wrapPaginatingFunctionCall](dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), "endBefore", snapshot, fieldValues));
      }
      get() {
        return utils.handleThenable(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.QuerySnapshot, "firebase.firestore.QuerySnapshot")), this.jsObject.get()).then(QuerySnapshotL(), C15 || CT.C15);
      }
      limit(limit) {
        return new (QueryOfQueryJsImplL$()).fromJsObject(this.jsObject.limit(limit));
      }
      get onSnapshot() {
        let t0;
        return (t0 = this[_onSnapshotController], t0 == null ? this[_onSnapshotController] = this[_createStream$](false) : t0).stream;
      }
      get onSnapshotMetadata() {
        let t0;
        return (t0 = this[_onSnapshotMetadataController], t0 == null ? this[_onSnapshotMetadataController] = this[_createStream$](true) : t0).stream;
      }
      [_createStream$](includeMetadataChanges) {
        let controller = null;
        let nextWrapper = js.allowInterop(QuerySnapshotJsImplLToLNull(), dart.fn(snapshot => {
          controller.add(new firestore.QuerySnapshot._fromJsObject(snapshot));
        }, QuerySnapshotJsImplLToNull()));
        let errorWrapper = js.allowInterop(dynamicToLvoid(), dart.fn(e => controller.addError(e), dynamicTovoid()));
        let onSnapshotUnsubscribe = null;
        let options = {includeMetadataChanges: includeMetadataChanges};
        const startListen = () => {
          onSnapshotUnsubscribe = this.jsObject.onSnapshot(options, dart.assertInterop(nextWrapper), dart.assertInterop(errorWrapper));
        };
        dart.fn(startListen, VoidTovoid());
        function stopListen() {
          onSnapshotUnsubscribe();
          onSnapshotUnsubscribe = null;
        }
        dart.fn(stopListen, VoidTovoid());
        return controller = StreamControllerOfQuerySnapshotL().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      orderBy(fieldPath, directionStr = null) {
        let jsObjectOrderBy = directionStr != null ? this.jsObject.orderBy(fieldPath, directionStr) : this.jsObject.orderBy(fieldPath);
        return new (QueryOfQueryJsImplL$()).fromJsObject(jsObjectOrderBy);
      }
      startAfter(opts) {
        let snapshot = opts && 'snapshot' in opts ? opts.snapshot : null;
        let fieldValues = opts && 'fieldValues' in opts ? opts.fieldValues : null;
        return new (QueryOfQueryJsImplL$()).fromJsObject(this[_wrapPaginatingFunctionCall](dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), "startAfter", snapshot, fieldValues));
      }
      startAt(opts) {
        let snapshot = opts && 'snapshot' in opts ? opts.snapshot : null;
        let fieldValues = opts && 'fieldValues' in opts ? opts.fieldValues : null;
        return new (QueryOfQueryJsImplL$()).fromJsObject(this[_wrapPaginatingFunctionCall](dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), "startAt", snapshot, fieldValues));
      }
      where(fieldPath, opStr, value) {
        return new (QueryOfQueryJsImplL$()).fromJsObject(this.jsObject.where(fieldPath, opStr, utils.jsify(value)));
      }
      [_wrapPaginatingFunctionCall](S, method, snapshot, fieldValues) {
        if (snapshot == null && fieldValues == null) {
          dart.throw(new core.ArgumentError.new("Please provide either snapshot or fieldValues parameter."));
        }
        let args = snapshot != null ? JSArrayOfDocumentSnapshotJsImplL().of([snapshot.jsObject]) : fieldValues[$map](dart.dynamic, C12 || CT.C12)[$toList]();
        return dart.legacy(S).as(utils.callMethod(this.jsObject, method, args));
      }
    }
    (Query.fromJsObject = function(jsObject) {
      this[_onSnapshotController] = null;
      this[_onSnapshotMetadataController] = null;
      Query.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = Query.prototype;
    dart.addTypeTests(Query);
    Query.prototype[_is_Query_default$] = true;
    dart.addTypeCaches(Query);
    dart.setMethodSignature(Query, () => ({
      __proto__: dart.getMethods(Query.__proto__),
      endAt: dart.fnType(dart.legacy(firestore.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")))), [], {fieldValues: dart.legacy(core.List), snapshot: dart.legacy(firestore.DocumentSnapshot)}, {}),
      endBefore: dart.fnType(dart.legacy(firestore.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")))), [], {fieldValues: dart.legacy(core.List), snapshot: dart.legacy(firestore.DocumentSnapshot)}, {}),
      get: dart.fnType(dart.legacy(async.Future$(dart.legacy(firestore.QuerySnapshot))), []),
      limit: dart.fnType(dart.legacy(firestore.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")))), [dart.legacy(core.num)]),
      [_createStream$]: dart.fnType(dart.legacy(async.StreamController$(dart.legacy(firestore.QuerySnapshot))), [dart.legacy(core.bool)]),
      orderBy: dart.fnType(dart.legacy(firestore.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")))), [dart.dynamic], [dart.legacy(core.String)]),
      startAfter: dart.fnType(dart.legacy(firestore.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")))), [], {fieldValues: dart.legacy(core.List), snapshot: dart.legacy(firestore.DocumentSnapshot)}, {}),
      startAt: dart.fnType(dart.legacy(firestore.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")))), [], {fieldValues: dart.legacy(core.List), snapshot: dart.legacy(firestore.DocumentSnapshot)}, {}),
      where: dart.fnType(dart.legacy(firestore.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")))), [dart.dynamic, dart.legacy(core.String), dart.dynamic]),
      [_wrapPaginatingFunctionCall]: dart.gFnType(S => [dart.legacy(S), [dart.legacy(core.String), dart.legacy(firestore.DocumentSnapshot), dart.legacy(core.List)]])
    }));
    dart.setGetterSignature(Query, () => ({
      __proto__: dart.getGetters(Query.__proto__),
      firestore: dart.legacy(firestore.Firestore),
      onSnapshot: dart.legacy(async.Stream$(dart.legacy(firestore.QuerySnapshot))),
      onSnapshotMetadata: dart.legacy(async.Stream$(dart.legacy(firestore.QuerySnapshot)))
    }));
    dart.setLibraryUri(Query, L6);
    dart.setFieldSignature(Query, () => ({
      __proto__: dart.getFields(Query.__proto__),
      [_onSnapshotController]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(firestore.QuerySnapshot)))),
      [_onSnapshotMetadataController]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(firestore.QuerySnapshot))))
    }));
    return Query;
  });
  firestore.Query = firestore.Query$();
  dart.addTypeTests(firestore.Query, _is_Query_default$);
  var C16;
  const _is_CollectionReference_default = Symbol('_is_CollectionReference_default');
  firestore.CollectionReference$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class CollectionReference extends firestore.Query$(dart.legacy(T)) {
      get id() {
        return this.jsObject.id;
      }
      get parent() {
        return firestore.DocumentReference.getInstance(this.jsObject.parent);
      }
      get path() {
        return this.jsObject.path;
      }
      static getInstance(jsObject) {
        let t3, t2, t1, t0;
        if (jsObject == null) {
          return null;
        }
        t0 = firestore.CollectionReference._expando;
        t1 = jsObject;
        t2 = t0._get(t1);
        return t2 == null ? (t3 = new (CollectionReferenceOfCollectionReferenceJsImplL())._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
      }
      static new() {
        return new (firestore.CollectionReference$(dart.legacy(T)))._fromJsObject(new dart.global.firebase.firestore.CollectionReference());
      }
      add(data) {
        return utils.handleThenable(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentReference, "firebase.firestore.DocumentReference")), this.jsObject.add(utils.jsify(data))).then(DocumentReferenceL(), C16 || CT.C16);
      }
      doc(documentPath = null) {
        let jsObjectDoc = documentPath != null ? this.jsObject.doc(documentPath) : this.jsObject.doc();
        return firestore.DocumentReference.getInstance(jsObjectDoc);
      }
      isEqual(other) {
        return this.jsObject.isEqual(other.jsObject);
      }
    }
    (CollectionReference._fromJsObject = function(jsObject) {
      CollectionReference.__proto__.fromJsObject.call(this, TL().as(jsObject));
      ;
    }).prototype = CollectionReference.prototype;
    dart.addTypeTests(CollectionReference);
    CollectionReference.prototype[_is_CollectionReference_default] = true;
    dart.addTypeCaches(CollectionReference);
    dart.setMethodSignature(CollectionReference, () => ({
      __proto__: dart.getMethods(CollectionReference.__proto__),
      add: dart.fnType(dart.legacy(async.Future$(dart.legacy(firestore.DocumentReference))), [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))]),
      doc: dart.fnType(dart.legacy(firestore.DocumentReference), [], [dart.legacy(core.String)]),
      isEqual: dart.fnType(dart.legacy(core.bool), [dart.legacy(firestore.CollectionReference$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference"))))])
    }));
    dart.setGetterSignature(CollectionReference, () => ({
      __proto__: dart.getGetters(CollectionReference.__proto__),
      id: dart.legacy(core.String),
      parent: dart.legacy(firestore.DocumentReference),
      path: dart.legacy(core.String)
    }));
    dart.setLibraryUri(CollectionReference, L6);
    return CollectionReference;
  });
  firestore.CollectionReference = firestore.CollectionReference$();
  dart.defineLazy(firestore.CollectionReference, {
    /*firestore.CollectionReference._expando*/get _expando() {
      return new (ExpandoOfCollectionReferenceLOfCollectionReferenceJsImplL()).new();
    }
  }, true);
  dart.addTypeTests(firestore.CollectionReference, _is_CollectionReference_default);
  firestore.DocumentChange = class DocumentChange extends js$.JsObjectWrapper$(dart.legacy(dart.anonymousJSType("DocumentChangeJsImpl"))) {
    get type() {
      return this.jsObject.type;
    }
    get doc() {
      return firestore.DocumentSnapshot.getInstance(this.jsObject.doc);
    }
    get oldIndex() {
      return this.jsObject.oldIndex;
    }
    get newIndex() {
      return this.jsObject.newIndex;
    }
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = firestore.DocumentChange._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new firestore.DocumentChange._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
  };
  (firestore.DocumentChange._fromJsObject = function(jsObject) {
    firestore.DocumentChange.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = firestore.DocumentChange.prototype;
  dart.addTypeTests(firestore.DocumentChange);
  dart.addTypeCaches(firestore.DocumentChange);
  dart.setGetterSignature(firestore.DocumentChange, () => ({
    __proto__: dart.getGetters(firestore.DocumentChange.__proto__),
    type: dart.legacy(core.String),
    doc: dart.legacy(firestore.DocumentSnapshot),
    oldIndex: dart.legacy(core.num),
    newIndex: dart.legacy(core.num)
  }));
  dart.setLibraryUri(firestore.DocumentChange, L6);
  dart.defineLazy(firestore.DocumentChange, {
    /*firestore.DocumentChange._expando*/get _expando() {
      return new (ExpandoOfDocumentChangeL()).new();
    }
  }, true);
  firestore.DocumentSnapshot = class DocumentSnapshot extends js$.JsObjectWrapper$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot"))) {
    get exists() {
      return this.jsObject.exists;
    }
    get id() {
      return this.jsObject.id;
    }
    get metadata() {
      return this.jsObject.metadata;
    }
    get ref() {
      return firestore.DocumentReference.getInstance(this.jsObject.ref);
    }
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = firestore.DocumentSnapshot._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new firestore.DocumentSnapshot._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    data() {
      return MapLOfStringL$dynamic().as(utils.dartify(this.jsObject.data()));
    }
    get(fieldPath) {
      return utils.dartify(this.jsObject.get(fieldPath));
    }
    isEqual(other) {
      return this.jsObject.isEqual(other.jsObject);
    }
  };
  (firestore.DocumentSnapshot._fromJsObject = function(jsObject) {
    firestore.DocumentSnapshot.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = firestore.DocumentSnapshot.prototype;
  dart.addTypeTests(firestore.DocumentSnapshot);
  dart.addTypeCaches(firestore.DocumentSnapshot);
  dart.setMethodSignature(firestore.DocumentSnapshot, () => ({
    __proto__: dart.getMethods(firestore.DocumentSnapshot.__proto__),
    data: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), []),
    get: dart.fnType(dart.dynamic, [dart.dynamic]),
    isEqual: dart.fnType(dart.legacy(core.bool), [dart.legacy(firestore.DocumentSnapshot)])
  }));
  dart.setGetterSignature(firestore.DocumentSnapshot, () => ({
    __proto__: dart.getGetters(firestore.DocumentSnapshot.__proto__),
    exists: dart.legacy(core.bool),
    id: dart.legacy(core.String),
    metadata: dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.SnapshotMetadata, "firebase.firestore.SnapshotMetadata")),
    ref: dart.legacy(firestore.DocumentReference)
  }));
  dart.setLibraryUri(firestore.DocumentSnapshot, L6);
  dart.defineLazy(firestore.DocumentSnapshot, {
    /*firestore.DocumentSnapshot._expando*/get _expando() {
      return new (ExpandoOfDocumentSnapshotL()).new();
    }
  }, true);
  firestore.QuerySnapshot = class QuerySnapshot extends js$.JsObjectWrapper$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.QuerySnapshot, "firebase.firestore.QuerySnapshot"))) {
    docChanges() {
      return this.jsObject.docChanges()[$map](DocumentChangeL(), dart.fn(e => firestore.DocumentChange.getInstance(dart.legacy(dart.anonymousJSType("DocumentChangeJsImpl")).as(e)), dynamicToDocumentChangeL()))[$toList]();
    }
    get docs() {
      return this.jsObject.docs[$map](DocumentSnapshotL(), dart.fn(e => firestore.DocumentSnapshot.getInstance(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot")).as(e)), dynamicToDocumentSnapshotL()))[$toList]();
    }
    get empty() {
      return this.jsObject.empty;
    }
    get metadata() {
      return this.jsObject.metadata;
    }
    get query() {
      return new (QueryOfQueryJsImplL$()).fromJsObject(this.jsObject.query);
    }
    get size() {
      return this.jsObject.size;
    }
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = firestore.QuerySnapshot._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new firestore.QuerySnapshot._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    forEach(callback) {
      let callbackWrap = js.allowInterop(dynamicToLdynamic(), dart.fn(s => callback(firestore.DocumentSnapshot.getInstance(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot")).as(s))), dynamicTodynamic()));
      return this.jsObject.forEach(dart.assertInterop(callbackWrap));
    }
    isEqual(other) {
      return this.jsObject.isEqual(other.jsObject);
    }
  };
  (firestore.QuerySnapshot._fromJsObject = function(jsObject) {
    firestore.QuerySnapshot.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = firestore.QuerySnapshot.prototype;
  dart.addTypeTests(firestore.QuerySnapshot);
  dart.addTypeCaches(firestore.QuerySnapshot);
  dart.setMethodSignature(firestore.QuerySnapshot, () => ({
    __proto__: dart.getMethods(firestore.QuerySnapshot.__proto__),
    docChanges: dart.fnType(dart.legacy(core.List$(dart.legacy(firestore.DocumentChange))), []),
    forEach: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(firestore.DocumentSnapshot)]))]),
    isEqual: dart.fnType(dart.legacy(core.bool), [dart.legacy(firestore.QuerySnapshot)])
  }));
  dart.setGetterSignature(firestore.QuerySnapshot, () => ({
    __proto__: dart.getGetters(firestore.QuerySnapshot.__proto__),
    docs: dart.legacy(core.List$(dart.legacy(firestore.DocumentSnapshot))),
    empty: dart.legacy(core.bool),
    metadata: dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.SnapshotMetadata, "firebase.firestore.SnapshotMetadata")),
    query: dart.legacy(firestore.Query$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")))),
    size: dart.legacy(core.num)
  }));
  dart.setLibraryUri(firestore.QuerySnapshot, L6);
  dart.defineLazy(firestore.QuerySnapshot, {
    /*firestore.QuerySnapshot._expando*/get _expando() {
      return new (ExpandoOfQuerySnapshotL()).new();
    }
  }, true);
  const JsObjectWrapper__Updatable$36$0 = class JsObjectWrapper__Updatable extends js$.JsObjectWrapper$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Transaction, "firebase.firestore.Transaction"))) {};
  (JsObjectWrapper__Updatable$36$0.fromJsObject = function(jsObject) {
    JsObjectWrapper__Updatable$36$0.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = JsObjectWrapper__Updatable$36$0.prototype;
  dart.applyMixin(JsObjectWrapper__Updatable$36$0, firestore._Updatable);
  firestore.Transaction = class Transaction extends JsObjectWrapper__Updatable$36$0 {
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = firestore.Transaction._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new firestore.Transaction._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    delete(documentRef) {
      return firestore.Transaction.getInstance(this.jsObject.delete(documentRef.jsObject));
    }
    get(documentRef) {
      return utils.handleThenable(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot")), this.jsObject.get(documentRef.jsObject)).then(DocumentSnapshotL(), C14 || CT.C14);
    }
    set(documentRef, data, options = null) {
      let jsObjectSet = options != null ? this.jsObject.set(documentRef.jsObject, utils.jsify(data), options) : this.jsObject.set(documentRef.jsObject, utils.jsify(data));
      return firestore.Transaction.getInstance(jsObjectSet);
    }
    update(documentRef, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let fieldsAndValues = opts && 'fieldsAndValues' in opts ? opts.fieldsAndValues : null;
      return firestore.Transaction.getInstance(this[_wrapUpdateFunctionCall](dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Transaction, "firebase.firestore.Transaction")), this.jsObject, data, fieldsAndValues, documentRef));
    }
  };
  (firestore.Transaction._fromJsObject = function(jsObject) {
    firestore.Transaction.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = firestore.Transaction.prototype;
  dart.addTypeTests(firestore.Transaction);
  dart.addTypeCaches(firestore.Transaction);
  dart.setMethodSignature(firestore.Transaction, () => ({
    __proto__: dart.getMethods(firestore.Transaction.__proto__),
    delete: dart.fnType(dart.legacy(firestore.Transaction), [dart.legacy(firestore.DocumentReference)]),
    get: dart.fnType(dart.legacy(async.Future$(dart.legacy(firestore.DocumentSnapshot))), [dart.legacy(firestore.DocumentReference)]),
    set: dart.fnType(dart.legacy(firestore.Transaction), [dart.legacy(firestore.DocumentReference), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))], [dart.legacy(dart.anonymousJSType("SetOptions"))]),
    update: dart.fnType(dart.legacy(firestore.Transaction), [dart.legacy(firestore.DocumentReference)], {data: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), fieldsAndValues: dart.legacy(core.List)}, {})
  }));
  dart.setLibraryUri(firestore.Transaction, L6);
  dart.defineLazy(firestore.Transaction, {
    /*firestore.Transaction._expando*/get _expando() {
      return new (ExpandoOfTransactionL()).new();
    }
  }, true);
  var _jsify = dart.privateName(firestore, "_jsify");
  firestore._FieldValueDelete = class _FieldValueDelete extends core.Object {
    [_jsify]() {
      return dart.global.firebase.firestore.FieldValue.delete();
    }
    toString() {
      return "FieldValue.delete()";
    }
  };
  (firestore._FieldValueDelete.new = function() {
    ;
  }).prototype = firestore._FieldValueDelete.prototype;
  dart.addTypeTests(firestore._FieldValueDelete);
  dart.addTypeCaches(firestore._FieldValueDelete);
  firestore._FieldValueDelete[dart.implements] = () => [firestore.FieldValue];
  dart.setMethodSignature(firestore._FieldValueDelete, () => ({
    __proto__: dart.getMethods(firestore._FieldValueDelete.__proto__),
    [_jsify]: dart.fnType(dart.legacy(dart.anonymousJSType("FieldValue")), []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(firestore._FieldValueDelete, L6);
  dart.defineExtensionMethods(firestore._FieldValueDelete, ['toString']);
  firestore._FieldValueServerTimestamp = class _FieldValueServerTimestamp extends core.Object {
    [_jsify]() {
      return dart.global.firebase.firestore.FieldValue.serverTimestamp();
    }
    toString() {
      return "FieldValue.serverTimestamp()";
    }
  };
  (firestore._FieldValueServerTimestamp.new = function() {
    ;
  }).prototype = firestore._FieldValueServerTimestamp.prototype;
  dart.addTypeTests(firestore._FieldValueServerTimestamp);
  dart.addTypeCaches(firestore._FieldValueServerTimestamp);
  firestore._FieldValueServerTimestamp[dart.implements] = () => [firestore.FieldValue];
  dart.setMethodSignature(firestore._FieldValueServerTimestamp, () => ({
    __proto__: dart.getMethods(firestore._FieldValueServerTimestamp.__proto__),
    [_jsify]: dart.fnType(dart.legacy(dart.anonymousJSType("FieldValue")), []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(firestore._FieldValueServerTimestamp, L6);
  dart.defineExtensionMethods(firestore._FieldValueServerTimestamp, ['toString']);
  firestore._FieldValueArray = class _FieldValueArray extends core.Object {};
  (firestore._FieldValueArray.new = function(elements) {
    this.elements = elements;
    ;
  }).prototype = firestore._FieldValueArray.prototype;
  dart.addTypeTests(firestore._FieldValueArray);
  dart.addTypeCaches(firestore._FieldValueArray);
  firestore._FieldValueArray[dart.implements] = () => [firestore.FieldValue];
  dart.setLibraryUri(firestore._FieldValueArray, L6);
  dart.setFieldSignature(firestore._FieldValueArray, () => ({
    __proto__: dart.getFields(firestore._FieldValueArray.__proto__),
    elements: dart.finalFieldType(dart.legacy(core.List))
  }));
  firestore._FieldValueArrayUnion = class _FieldValueArrayUnion extends firestore._FieldValueArray {
    [_jsify]() {
      return dart.legacy(dart.anonymousJSType("FieldValue")).as(utils.callMethod(dart.global.firebase.firestore.FieldValue, "arrayUnion", ListL().as(utils.jsifyList(this.elements))));
    }
    toString() {
      return "FieldValue.arrayUnion(" + dart.str(this.elements) + ")";
    }
  };
  (firestore._FieldValueArrayUnion.new = function(elements) {
    firestore._FieldValueArrayUnion.__proto__.new.call(this, elements);
    ;
  }).prototype = firestore._FieldValueArrayUnion.prototype;
  dart.addTypeTests(firestore._FieldValueArrayUnion);
  dart.addTypeCaches(firestore._FieldValueArrayUnion);
  dart.setMethodSignature(firestore._FieldValueArrayUnion, () => ({
    __proto__: dart.getMethods(firestore._FieldValueArrayUnion.__proto__),
    [_jsify]: dart.fnType(dart.legacy(dart.anonymousJSType("FieldValue")), []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(firestore._FieldValueArrayUnion, L6);
  dart.defineExtensionMethods(firestore._FieldValueArrayUnion, ['toString']);
  firestore._FieldValueArrayRemove = class _FieldValueArrayRemove extends firestore._FieldValueArray {
    [_jsify]() {
      return dart.legacy(dart.anonymousJSType("FieldValue")).as(utils.callMethod(dart.global.firebase.firestore.FieldValue, "arrayRemove", ListL().as(utils.jsifyList(this.elements))));
    }
    toString() {
      return "FieldValue.arrayRemove(" + dart.str(this.elements) + ")";
    }
  };
  (firestore._FieldValueArrayRemove.new = function(elements) {
    firestore._FieldValueArrayRemove.__proto__.new.call(this, elements);
    ;
  }).prototype = firestore._FieldValueArrayRemove.prototype;
  dart.addTypeTests(firestore._FieldValueArrayRemove);
  dart.addTypeCaches(firestore._FieldValueArrayRemove);
  dart.setMethodSignature(firestore._FieldValueArrayRemove, () => ({
    __proto__: dart.getMethods(firestore._FieldValueArrayRemove.__proto__),
    [_jsify]: dart.fnType(dart.legacy(dart.anonymousJSType("FieldValue")), []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(firestore._FieldValueArrayRemove, L6);
  dart.defineExtensionMethods(firestore._FieldValueArrayRemove, ['toString']);
  firestore._FieldValueIncrement = class _FieldValueIncrement extends core.Object {
    [_jsify]() {
      return dart.global.firebase.firestore.FieldValue.increment(this.n);
    }
    toString() {
      return "FieldValue.increment(" + dart.str(this.n) + ")";
    }
  };
  (firestore._FieldValueIncrement.new = function(n) {
    this.n = n;
    ;
  }).prototype = firestore._FieldValueIncrement.prototype;
  dart.addTypeTests(firestore._FieldValueIncrement);
  dart.addTypeCaches(firestore._FieldValueIncrement);
  firestore._FieldValueIncrement[dart.implements] = () => [firestore.FieldValue];
  dart.setMethodSignature(firestore._FieldValueIncrement, () => ({
    __proto__: dart.getMethods(firestore._FieldValueIncrement.__proto__),
    [_jsify]: dart.fnType(dart.legacy(dart.anonymousJSType("FieldValue")), []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(firestore._FieldValueIncrement, L6);
  dart.setFieldSignature(firestore._FieldValueIncrement, () => ({
    __proto__: dart.getFields(firestore._FieldValueIncrement.__proto__),
    n: dart.finalFieldType(dart.legacy(core.num))
  }));
  dart.defineExtensionMethods(firestore._FieldValueIncrement, ['toString']);
  firestore.FieldValue = class FieldValue extends core.Object {
    static serverTimestamp() {
      return firestore.FieldValue._serverTimestamp;
    }
    static delete() {
      return firestore.FieldValue._delete;
    }
    static arrayUnion(elements) {
      return new firestore._FieldValueArrayUnion.new(elements);
    }
    static arrayRemove(elements) {
      return new firestore._FieldValueArrayRemove.new(elements);
    }
    static increment(n) {
      return new firestore._FieldValueIncrement.new(n);
    }
  };
  (firestore.FieldValue.__ = function() {
    ;
  }).prototype = firestore.FieldValue.prototype;
  dart.addTypeTests(firestore.FieldValue);
  dart.addTypeCaches(firestore.FieldValue);
  dart.setLibraryUri(firestore.FieldValue, L6);
  dart.defineLazy(firestore.FieldValue, {
    /*firestore.FieldValue._serverTimestamp*/get _serverTimestamp() {
      return new firestore._FieldValueServerTimestamp.new();
    },
    /*firestore.FieldValue._delete*/get _delete() {
      return new firestore._FieldValueDelete.new();
    }
  }, true);
  firestore.jsifyFieldValue = function jsifyFieldValue(fieldValue) {
    return fieldValue[_jsify]();
  };
  var _source$ = dart.privateName(utils, "_source");
  utils._FirebaseErrorWrapper = class _FirebaseErrorWrapper extends core.Error {
    get code() {
      return StringL().as(js_util.getProperty(this[_source$], "code"));
    }
    get message() {
      return StringL().as(js_util.getProperty(this[_source$], "message"));
    }
    get name() {
      return StringL().as(js_util.getProperty(this[_source$], "name"));
    }
    get serverResponse() {
      return js_util.getProperty(this[_source$], "serverResponse");
    }
    get stack() {
      return StringL().as(js_util.getProperty(this[_source$], "stack"));
    }
    toString() {
      return "FirebaseError: " + dart.str(this.message) + " (" + dart.str(this.code) + ")";
    }
  };
  (utils._FirebaseErrorWrapper.new = function(_source) {
    this[_source$] = _source;
    utils._FirebaseErrorWrapper.__proto__.new.call(this);
    ;
  }).prototype = utils._FirebaseErrorWrapper.prototype;
  dart.addTypeTests(utils._FirebaseErrorWrapper);
  dart.addTypeCaches(utils._FirebaseErrorWrapper);
  utils._FirebaseErrorWrapper[dart.implements] = () => [dart.anonymousJSType("FirebaseError")];
  dart.setMethodSignature(utils._FirebaseErrorWrapper, () => ({
    __proto__: dart.getMethods(utils._FirebaseErrorWrapper.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(utils._FirebaseErrorWrapper, () => ({
    __proto__: dart.getGetters(utils._FirebaseErrorWrapper.__proto__),
    code: dart.legacy(core.String),
    message: dart.legacy(core.String),
    name: dart.legacy(core.String),
    serverResponse: dart.legacy(core.Object),
    stack: dart.legacy(core.String)
  }));
  dart.setLibraryUri(utils._FirebaseErrorWrapper, L7);
  dart.setFieldSignature(utils._FirebaseErrorWrapper, () => ({
    __proto__: dart.getFields(utils._FirebaseErrorWrapper.__proto__),
    [_source$]: dart.finalFieldType(dart.legacy(dart.anonymousJSType("FirebaseError")))
  }));
  dart.defineExtensionMethods(utils._FirebaseErrorWrapper, ['toString']);
  utils.dartify = function dartify(jsObject) {
    if (dart.test(utils._isBasicType(jsObject))) {
      return jsObject;
    }
    if (IterableL().is(jsObject)) {
      return jsObject[$map](dart.dynamic, C13 || CT.C13)[$toList]();
    }
    let jsDate = js_interop.dartifyDate(jsObject);
    if (jsDate != null) {
      return jsDate;
    }
    if (dart.test(js_util.hasProperty(jsObject, "firestore")) && dart.test(js_util.hasProperty(jsObject, "id")) && dart.test(js_util.hasProperty(jsObject, "parent"))) {
      return firestore.DocumentReference.getInstance(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentReference, "firebase.firestore.DocumentReference")).as(jsObject));
    }
    if (dart.test(js_util.hasProperty(jsObject, "latitude")) && dart.test(js_util.hasProperty(jsObject, "longitude")) && dart.global.Object.keys(jsObject)[$length] === 2) {
      return dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.GeoPoint, "firebase.firestore.GeoPoint")).as(jsObject);
    }
    let proto = js_util.getProperty(jsObject, "__proto__");
    if (dart.test(js_util.hasProperty(proto, "toDate")) && dart.test(js_util.hasProperty(proto, "toMillis"))) {
      return new core.DateTime.fromMillisecondsSinceEpoch(dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.Timestamp, "firebase.firestore.Timestamp")).as(jsObject).toMillis());
    }
    if (dart.test(js_util.hasProperty(proto, "isEqual")) && dart.test(js_util.hasProperty(proto, "toBase64"))) {
      return dart.legacy(dart.anonymousJSType("Blob")).as(jsObject);
    }
    return utils.dartifyMap(jsObject);
  };
  utils.dartifyMap = function dartifyMap(jsObject) {
    let keys = dart.global.Object.keys(jsObject);
    let map = new (IdentityMapOfStringL$dynamic()).new();
    for (let key of keys) {
      map[$_set](key, utils.dartify(js_util.getProperty(jsObject, key)));
    }
    return map;
  };
  utils.jsifyList = function jsifyList(list) {
    return dart.global.Array.from(list[$map](dart.dynamic, C12 || CT.C12)[$toList]());
  };
  utils.jsify = function jsify(dartObject) {
    if (dart.test(utils._isBasicType(dartObject))) {
      return dartObject;
    }
    if (DateTimeL().is(dartObject)) {
      return dart.global.firebase.firestore.Timestamp.fromMillis(dartObject.millisecondsSinceEpoch);
    }
    if (IterableL().is(dartObject)) {
      return utils.jsifyList(dartObject);
    }
    if (MapL().is(dartObject)) {
      let jsMap = js_util.newObject();
      dartObject[$forEach](dart.fn((key, value) => {
        js_util.setProperty(jsMap, key, utils.jsify(value));
      }, dynamicAnddynamicToNull()));
      return jsMap;
    }
    if (DocumentReferenceL().is(dartObject)) {
      return dartObject.jsObject;
    }
    if (FieldValueL().is(dartObject)) {
      return firestore.jsifyFieldValue(dartObject);
    }
    if (dart.legacy(dart.anonymousJSType("Blob")).is(dartObject)) {
      return dartObject;
    }
    if (dart.legacy(dart.lazyJSType(() => dart.global.firebase.firestore.GeoPoint, "firebase.firestore.GeoPoint")).is(dartObject)) {
      return dartObject;
    }
    if (FunctionL().is(dartObject)) {
      return js.allowInterop(FunctionL(), dartObject);
    }
    dart.throw(new core.ArgumentError.value(dartObject, "dartObject", "Could not convert"));
  };
  utils.callMethod = function callMethod(jsObject, method, args) {
    return js_util.callMethod(jsObject, method, args);
  };
  utils._isBasicType = function _isBasicType(value) {
    if (value == null || numL().is(value) || boolL().is(value) || StringL().is(value)) {
      return true;
    }
    return false;
  };
  utils.handleThenable = function handleThenable(T, thenable) {
    return async.async(dart.legacy(T), function* handleThenable() {
      let value = null;
      try {
        value = (yield js_util.promiseToFuture(dart.legacy(T), thenable));
      } catch (e$) {
        let e = dart.getThrown(e$);
        if (dart.test(js_util.hasProperty(e, "code"))) {
          dart.throw(new utils._FirebaseErrorWrapper.new(dart.legacy(dart.anonymousJSType("FirebaseError")).as(e)));
        }
        dart.rethrow(e$);
      }
      return value;
    });
  };
  utils.handleFutureWithMapper = function handleFutureWithMapper(T, S, future, mapper) {
    return new dart.global.Promise(js.allowInterop(FunctionL(), dart.fn((resolve, reject) => {
      future.then(core.Null, dart.fn(value => {
        let mappedValue = mapper(value);
        resolve(mappedValue);
      }, dart.fnType(core.Null, [dart.legacy(T)]))).catchError(reject);
    }, dart.fnType(core.Null, [dart.legacy(dart.fnType(dart.void, [dart.legacy(S)])), ObjectLToLvoid()]))));
  };
  utils.resolveError = function resolveError(c) {
    return js.allowInterop(ObjectLToLvoid(), dart.bind(c, 'completeError'));
  };
  dart.trackLibraries("packages/firebase/src/storage.dart", {
    "package:firebase/src/storage.dart": storage,
    "package:firebase/src/functions.dart": functions,
    "package:firebase/src/database.dart": database,
    "package:firebase/src/auth.dart": auth$,
    "package:firebase/src/app.dart": app,
    "package:firebase/src/firestore.dart": firestore,
    "package:firebase/src/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["storage.dart","functions.dart","database.dart","auth.dart","app.dart","firestore.dart","js.dart","utils.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/firebase/src/storage.dart.lib.js"}');
  // Exports:
  return {
    src__storage: storage,
    src__functions: functions,
    src__database: database,
    src__auth: auth$,
    src__app: app,
    src__firestore: firestore,
    src__utils: utils
  };
}));

//# sourceMappingURL=storage.dart.lib.js.map
