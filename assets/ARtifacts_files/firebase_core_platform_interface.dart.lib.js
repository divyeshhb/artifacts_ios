define(['dart_sdk', 'packages/quiver/src/core/hash.dart', 'packages/plugin_platform_interface/plugin_platform_interface.dart', 'packages/flutter/src/services/system_channels.dart', 'packages/flutter/src/foundation/_platform_web.dart'], (function load__packages__firebase_core_platform_interface__firebase_core_platform_interface_dart(dart_sdk, packages__quiver__src__core__hash$46dart, packages__plugin_platform_interface__plugin_platform_interface$46dart, packages__flutter__src__services__system_channels$46dart, packages__flutter__src__foundation___platform_web$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hash = packages__quiver__src__core__hash$46dart.src__core__hash;
  const plugin_platform_interface = packages__plugin_platform_interface__plugin_platform_interface$46dart.plugin_platform_interface;
  const platform_channel = packages__flutter__src__services__system_channels$46dart.src__services__platform_channel;
  const message_codecs = packages__flutter__src__services__system_channels$46dart.src__services__message_codecs;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  var firebase_core_platform_interface = Object.create(dart.library);
  var $toString = dartx.toString;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  var $_get = dartx._get;
  var $entries = dartx.entries;
  var $remove = dartx.remove;
  var $forEach = dartx.forEach;
  var $_set = dartx._set;
  var $values = dartx.values;
  var $toList = dartx.toList;
  var $containsKey = dartx.containsKey;
  dart._checkModuleNullSafetyMode(false);
  var FirebaseExceptionL = () => (FirebaseExceptionL = dart.constFn(dart.legacy(firebase_core_platform_interface.FirebaseException)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var FirebaseOptionsL = () => (FirebaseOptionsL = dart.constFn(dart.legacy(firebase_core_platform_interface.FirebaseOptions)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var FirebaseAppPlatformL = () => (FirebaseAppPlatformL = dart.constFn(dart.legacy(firebase_core_platform_interface.FirebaseAppPlatform)))();
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var MethodChannelFirebaseAppL = () => (MethodChannelFirebaseAppL = dart.constFn(dart.legacy(firebase_core_platform_interface.MethodChannelFirebaseApp)))();
  var IdentityMapOfStringL$MethodChannelFirebaseAppL = () => (IdentityMapOfStringL$MethodChannelFirebaseAppL = dart.constFn(_js_helper.IdentityMap$(StringL(), MethodChannelFirebaseAppL())))();
  const CT = Object.create(null);
  var L2 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_core_platform_interface-2.0.0/lib/src/method_channel/method_channel_firebase_app.dart";
  var L3 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_core_platform_interface-2.0.0/lib/src/method_channel/method_channel_firebase.dart";
  var L0 = "package:firebase_core_platform_interface/firebase_core_platform_interface.dart";
  var L1 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_core_platform_interface-2.0.0/lib/src/firebase_options.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C2 || CT.C2
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C1 || CT.C1,
        [MethodChannel_name]: "plugins.flutter.io/firebase_core"
      });
    }
  }, false);
  var plugin$ = dart.privateName(firebase_core_platform_interface, "FirebaseException.plugin");
  var message$ = dart.privateName(firebase_core_platform_interface, "FirebaseException.message");
  var code$ = dart.privateName(firebase_core_platform_interface, "FirebaseException.code");
  firebase_core_platform_interface.FirebaseException = class FirebaseException extends core.Object {
    get plugin() {
      return this[plugin$];
    }
    set plugin(value) {
      super.plugin = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get code() {
      return this[code$];
    }
    set code(value) {
      super.code = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!FirebaseExceptionL().is(other)) return false;
      return dart.toString(other) == this.toString();
    }
    get hashCode() {
      return dart.hashCode(this.toString());
    }
    toString() {
      return "[" + dart.str(this.plugin) + "/" + dart.str(this.code) + "] " + dart.str(this.message);
    }
  };
  (firebase_core_platform_interface.FirebaseException.new = function(opts) {
    let plugin = opts && 'plugin' in opts ? opts.plugin : null;
    let message = opts && 'message' in opts ? opts.message : null;
    let code = opts && 'code' in opts ? opts.code : "unknown";
    this[plugin$] = plugin;
    this[message$] = message;
    this[code$] = code;
    ;
  }).prototype = firebase_core_platform_interface.FirebaseException.prototype;
  dart.addTypeTests(firebase_core_platform_interface.FirebaseException);
  dart.addTypeCaches(firebase_core_platform_interface.FirebaseException);
  firebase_core_platform_interface.FirebaseException[dart.implements] = () => [core.Exception];
  dart.setMethodSignature(firebase_core_platform_interface.FirebaseException, () => ({
    __proto__: dart.getMethods(firebase_core_platform_interface.FirebaseException.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(firebase_core_platform_interface.FirebaseException, () => ({
    __proto__: dart.getGetters(firebase_core_platform_interface.FirebaseException.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(firebase_core_platform_interface.FirebaseException, L0);
  dart.setFieldSignature(firebase_core_platform_interface.FirebaseException, () => ({
    __proto__: dart.getFields(firebase_core_platform_interface.FirebaseException.__proto__),
    plugin: dart.finalFieldType(dart.legacy(core.String)),
    message: dart.finalFieldType(dart.legacy(core.String)),
    code: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(firebase_core_platform_interface.FirebaseException, ['_equals', 'toString']);
  dart.defineExtensionAccessors(firebase_core_platform_interface.FirebaseException, ['hashCode']);
  var apiKey$ = dart.privateName(firebase_core_platform_interface, "FirebaseOptions.apiKey");
  var appId$ = dart.privateName(firebase_core_platform_interface, "FirebaseOptions.appId");
  var messagingSenderId$ = dart.privateName(firebase_core_platform_interface, "FirebaseOptions.messagingSenderId");
  var projectId$ = dart.privateName(firebase_core_platform_interface, "FirebaseOptions.projectId");
  var authDomain$ = dart.privateName(firebase_core_platform_interface, "FirebaseOptions.authDomain");
  var databaseURL$ = dart.privateName(firebase_core_platform_interface, "FirebaseOptions.databaseURL");
  var storageBucket$ = dart.privateName(firebase_core_platform_interface, "FirebaseOptions.storageBucket");
  var measurementId$ = dart.privateName(firebase_core_platform_interface, "FirebaseOptions.measurementId");
  var trackingId$ = dart.privateName(firebase_core_platform_interface, "FirebaseOptions.trackingId");
  var deepLinkURLScheme$ = dart.privateName(firebase_core_platform_interface, "FirebaseOptions.deepLinkURLScheme");
  var androidClientId$ = dart.privateName(firebase_core_platform_interface, "FirebaseOptions.androidClientId");
  var iosClientId$ = dart.privateName(firebase_core_platform_interface, "FirebaseOptions.iosClientId");
  var iosBundleId$ = dart.privateName(firebase_core_platform_interface, "FirebaseOptions.iosBundleId");
  var appGroupId$ = dart.privateName(firebase_core_platform_interface, "FirebaseOptions.appGroupId");
  var googleAppID$ = dart.privateName(firebase_core_platform_interface, "FirebaseOptions.googleAppID");
  var projectID$ = dart.privateName(firebase_core_platform_interface, "FirebaseOptions.projectID");
  var bundleID$ = dart.privateName(firebase_core_platform_interface, "FirebaseOptions.bundleID");
  var clientID$ = dart.privateName(firebase_core_platform_interface, "FirebaseOptions.clientID");
  var trackingID$ = dart.privateName(firebase_core_platform_interface, "FirebaseOptions.trackingID");
  var gcmSenderID$ = dart.privateName(firebase_core_platform_interface, "FirebaseOptions.gcmSenderID");
  firebase_core_platform_interface.FirebaseOptions = class FirebaseOptions extends core.Object {
    get apiKey() {
      return this[apiKey$];
    }
    set apiKey(value) {
      super.apiKey = value;
    }
    get appId() {
      return this[appId$];
    }
    set appId(value) {
      super.appId = value;
    }
    get messagingSenderId() {
      return this[messagingSenderId$];
    }
    set messagingSenderId(value) {
      super.messagingSenderId = value;
    }
    get projectId() {
      return this[projectId$];
    }
    set projectId(value) {
      super.projectId = value;
    }
    get authDomain() {
      return this[authDomain$];
    }
    set authDomain(value) {
      super.authDomain = value;
    }
    get databaseURL() {
      return this[databaseURL$];
    }
    set databaseURL(value) {
      super.databaseURL = value;
    }
    get storageBucket() {
      return this[storageBucket$];
    }
    set storageBucket(value) {
      super.storageBucket = value;
    }
    get measurementId() {
      return this[measurementId$];
    }
    set measurementId(value) {
      super.measurementId = value;
    }
    get trackingId() {
      return this[trackingId$];
    }
    set trackingId(value) {
      super.trackingId = value;
    }
    get deepLinkURLScheme() {
      return this[deepLinkURLScheme$];
    }
    set deepLinkURLScheme(value) {
      super.deepLinkURLScheme = value;
    }
    get androidClientId() {
      return this[androidClientId$];
    }
    set androidClientId(value) {
      super.androidClientId = value;
    }
    get iosClientId() {
      return this[iosClientId$];
    }
    set iosClientId(value) {
      super.iosClientId = value;
    }
    get iosBundleId() {
      return this[iosBundleId$];
    }
    set iosBundleId(value) {
      super.iosBundleId = value;
    }
    get appGroupId() {
      return this[appGroupId$];
    }
    set appGroupId(value) {
      super.appGroupId = value;
    }
    get googleAppID() {
      return this[googleAppID$];
    }
    set googleAppID(value) {
      super.googleAppID = value;
    }
    get projectID() {
      return this[projectID$];
    }
    set projectID(value) {
      super.projectID = value;
    }
    get bundleID() {
      return this[bundleID$];
    }
    set bundleID(value) {
      super.bundleID = value;
    }
    get clientID() {
      return this[clientID$];
    }
    set clientID(value) {
      super.clientID = value;
    }
    get trackingID() {
      return this[trackingID$];
    }
    set trackingID(value) {
      super.trackingID = value;
    }
    get gcmSenderID() {
      return this[gcmSenderID$];
    }
    set gcmSenderID(value) {
      super.gcmSenderID = value;
    }
    get asMap() {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4;
      return new (IdentityMapOfStringL$StringL()).from(["apiKey", (t0 = this.apiKey, t0 == null ? this.googleAppID : t0), "appId", this.appId, "messagingSenderId", (t0$ = this.messagingSenderId, t0$ == null ? this.gcmSenderID : t0$), "projectId", (t0$0 = this.projectId, t0$0 == null ? this.projectID : t0$0), "authDomain", this.authDomain, "databaseURL", this.databaseURL, "storageBucket", this.storageBucket, "measurementId", this.measurementId, "trackingId", (t0$1 = this.trackingId, t0$1 == null ? this.trackingID : t0$1), "deepLinkURLScheme", this.deepLinkURLScheme, "androidClientId", (t0$2 = this.androidClientId, t0$2 == null ? this.clientID : t0$2), "iosClientId", (t0$3 = this.iosClientId, t0$3 == null ? this.clientID : t0$3), "iosBundleId", (t0$4 = this.iosBundleId, t0$4 == null ? this.bundleID : t0$4), "appGroupId", this.appGroupId]);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!FirebaseOptionsL().is(other)) return false;
      return dart.toString(dart.dload(other, 'asMap')) == dart.toString(this.asMap);
    }
    get hashCode() {
      return hash.hashObjects(this.asMap[$entries]);
    }
    toString() {
      return dart.toString(this.asMap);
    }
  };
  (firebase_core_platform_interface.FirebaseOptions.new = function(opts) {
    let apiKey = opts && 'apiKey' in opts ? opts.apiKey : null;
    let appId = opts && 'appId' in opts ? opts.appId : null;
    let messagingSenderId = opts && 'messagingSenderId' in opts ? opts.messagingSenderId : null;
    let projectId = opts && 'projectId' in opts ? opts.projectId : null;
    let authDomain = opts && 'authDomain' in opts ? opts.authDomain : null;
    let databaseURL = opts && 'databaseURL' in opts ? opts.databaseURL : null;
    let storageBucket = opts && 'storageBucket' in opts ? opts.storageBucket : null;
    let measurementId = opts && 'measurementId' in opts ? opts.measurementId : null;
    let trackingId = opts && 'trackingId' in opts ? opts.trackingId : null;
    let deepLinkURLScheme = opts && 'deepLinkURLScheme' in opts ? opts.deepLinkURLScheme : null;
    let androidClientId = opts && 'androidClientId' in opts ? opts.androidClientId : null;
    let iosClientId = opts && 'iosClientId' in opts ? opts.iosClientId : null;
    let iosBundleId = opts && 'iosBundleId' in opts ? opts.iosBundleId : null;
    let appGroupId = opts && 'appGroupId' in opts ? opts.appGroupId : null;
    let googleAppID = opts && 'googleAppID' in opts ? opts.googleAppID : null;
    let projectID = opts && 'projectID' in opts ? opts.projectID : null;
    let bundleID = opts && 'bundleID' in opts ? opts.bundleID : null;
    let clientID = opts && 'clientID' in opts ? opts.clientID : null;
    let trackingID = opts && 'trackingID' in opts ? opts.trackingID : null;
    let gcmSenderID = opts && 'gcmSenderID' in opts ? opts.gcmSenderID : null;
    this[apiKey$] = apiKey;
    this[appId$] = appId;
    this[messagingSenderId$] = messagingSenderId;
    this[projectId$] = projectId;
    this[authDomain$] = authDomain;
    this[databaseURL$] = databaseURL;
    this[storageBucket$] = storageBucket;
    this[measurementId$] = measurementId;
    this[trackingId$] = trackingId;
    this[deepLinkURLScheme$] = deepLinkURLScheme;
    this[androidClientId$] = androidClientId;
    this[iosClientId$] = iosClientId;
    this[iosBundleId$] = iosBundleId;
    this[appGroupId$] = appGroupId;
    this[googleAppID$] = googleAppID;
    this[projectID$] = projectID;
    this[bundleID$] = bundleID;
    this[clientID$] = clientID;
    this[trackingID$] = trackingID;
    this[gcmSenderID$] = gcmSenderID;
    if (!(apiKey != null)) dart.assertFailed("'apiKey' cannot be null", L1, 59, 16, "apiKey != null");
    if (!(appId != null || googleAppID != null)) dart.assertFailed("'appId' and 'googleAppID' cannot be null.", L1, 60, 16, "appId != null || googleAppID != null");
    if (!(messagingSenderId != null || gcmSenderID != null)) dart.assertFailed("'messagingSenderId' and 'gcmSenderID' cannot be null.", L1, 62, 16, "messagingSenderId != null || gcmSenderID != null");
    if (!(projectId != null || projectID != null)) dart.assertFailed("'projectId' and 'projectID' cannot be null.", L1, 64, 16, "projectId != null || projectID != null");
    ;
  }).prototype = firebase_core_platform_interface.FirebaseOptions.prototype;
  (firebase_core_platform_interface.FirebaseOptions.fromMap = function(map) {
    let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7;
    if (!(map[$_get]("apiKey") != null)) dart.assertFailed("'apiKey' cannot be null.", L1, 73, 16, "map['apiKey'] != null");
    if (!(map[$_get]("appId") != null || dart.dtest(map[$_get]("googleAppID")))) dart.assertFailed("'appId' and 'googleAppID' cannot be null.", L1, 74, 16, "map['appId'] != null || map['googleAppID']");
    if (!(map[$_get]("messagingSenderId") != null || dart.dtest(map[$_get]("gcmSenderID")))) dart.assertFailed("'messagingSenderId' and 'gcmSenderID' cannot be null.", L1, 76, 16, "map['messagingSenderId'] != null || map['gcmSenderID']");
    if (!(map[$_get]("projectId") != null || dart.dtest(map[$_get]("projectID")))) dart.assertFailed("'projectId' and 'projectID' cannot be null.", L1, 78, 16, "map['projectId'] != null || map['projectID']");
    this[apiKey$] = StringL().as(map[$_get]("apiKey"));
    this[appId$] = StringL().as((t0 = map[$_get]("appId"), t0 == null ? map[$_get]("googleAppID") : t0));
    this[messagingSenderId$] = StringL().as((t0$ = map[$_get]("messagingSenderId"), t0$ == null ? map[$_get]("gcmSenderID") : t0$));
    this[projectId$] = StringL().as((t0$0 = map[$_get]("projectId"), t0$0 == null ? map[$_get]("projectID") : t0$0));
    this[authDomain$] = StringL().as(map[$_get]("authDomain"));
    this[databaseURL$] = StringL().as(map[$_get]("databaseURL"));
    this[storageBucket$] = StringL().as(map[$_get]("storageBucket"));
    this[measurementId$] = StringL().as(map[$_get]("measurementId"));
    this[trackingId$] = StringL().as(map[$_get]("trackingId"));
    this[deepLinkURLScheme$] = StringL().as(map[$_get]("deepLinkURLScheme"));
    this[androidClientId$] = StringL().as(map[$_get]("androidClientId"));
    this[iosClientId$] = StringL().as(map[$_get]("iosClientId"));
    this[iosBundleId$] = StringL().as(map[$_get]("iosBundleId"));
    this[appGroupId$] = StringL().as(map[$_get]("appGroupId"));
    this[trackingID$] = StringL().as((t0$1 = map[$_get]("trackingID"), t0$1 == null ? map[$_get]("trackingId") : t0$1));
    this[googleAppID$] = StringL().as((t0$2 = map[$_get]("googleAppID"), t0$2 == null ? map[$_get]("appId") : t0$2));
    this[projectID$] = StringL().as((t0$3 = map[$_get]("projectID"), t0$3 == null ? map[$_get]("projectId") : t0$3));
    this[bundleID$] = StringL().as((t0$4 = map[$_get]("bundleID"), t0$4 == null ? map[$_get]("iosBundleId") : t0$4));
    this[clientID$] = StringL().as((t0$6 = (t0$5 = map[$_get]("clientID"), t0$5 == null ? map[$_get]("androidClientId") : t0$5), t0$6 == null ? map[$_get]("iosClientId") : t0$6));
    this[gcmSenderID$] = StringL().as((t0$7 = map[$_get]("gcmSenderID"), t0$7 == null ? map[$_get]("messagingSenderId") : t0$7));
    ;
  }).prototype = firebase_core_platform_interface.FirebaseOptions.prototype;
  dart.addTypeTests(firebase_core_platform_interface.FirebaseOptions);
  dart.addTypeCaches(firebase_core_platform_interface.FirebaseOptions);
  dart.setMethodSignature(firebase_core_platform_interface.FirebaseOptions, () => ({
    __proto__: dart.getMethods(firebase_core_platform_interface.FirebaseOptions.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(firebase_core_platform_interface.FirebaseOptions, () => ({
    __proto__: dart.getGetters(firebase_core_platform_interface.FirebaseOptions.__proto__),
    asMap: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(firebase_core_platform_interface.FirebaseOptions, L0);
  dart.setFieldSignature(firebase_core_platform_interface.FirebaseOptions, () => ({
    __proto__: dart.getFields(firebase_core_platform_interface.FirebaseOptions.__proto__),
    apiKey: dart.finalFieldType(dart.legacy(core.String)),
    appId: dart.finalFieldType(dart.legacy(core.String)),
    messagingSenderId: dart.finalFieldType(dart.legacy(core.String)),
    projectId: dart.finalFieldType(dart.legacy(core.String)),
    authDomain: dart.finalFieldType(dart.legacy(core.String)),
    databaseURL: dart.finalFieldType(dart.legacy(core.String)),
    storageBucket: dart.finalFieldType(dart.legacy(core.String)),
    measurementId: dart.finalFieldType(dart.legacy(core.String)),
    trackingId: dart.finalFieldType(dart.legacy(core.String)),
    deepLinkURLScheme: dart.finalFieldType(dart.legacy(core.String)),
    androidClientId: dart.finalFieldType(dart.legacy(core.String)),
    iosClientId: dart.finalFieldType(dart.legacy(core.String)),
    iosBundleId: dart.finalFieldType(dart.legacy(core.String)),
    appGroupId: dart.finalFieldType(dart.legacy(core.String)),
    googleAppID: dart.finalFieldType(dart.legacy(core.String)),
    projectID: dart.finalFieldType(dart.legacy(core.String)),
    bundleID: dart.finalFieldType(dart.legacy(core.String)),
    clientID: dart.finalFieldType(dart.legacy(core.String)),
    trackingID: dart.finalFieldType(dart.legacy(core.String)),
    gcmSenderID: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(firebase_core_platform_interface.FirebaseOptions, ['_equals', 'toString']);
  dart.defineExtensionAccessors(firebase_core_platform_interface.FirebaseOptions, ['hashCode']);
  var _isDeleted = dart.privateName(firebase_core_platform_interface, "_isDeleted");
  var _isAutomaticDataCollectionEnabled = dart.privateName(firebase_core_platform_interface, "_isAutomaticDataCollectionEnabled");
  var _isDefault = dart.privateName(firebase_core_platform_interface, "_isDefault");
  var name$ = dart.privateName(firebase_core_platform_interface, "FirebaseAppPlatform.name");
  var options$ = dart.privateName(firebase_core_platform_interface, "FirebaseAppPlatform.options");
  firebase_core_platform_interface.FirebaseAppPlatform = class FirebaseAppPlatform extends plugin_platform_interface.PlatformInterface {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get options() {
      return this[options$];
    }
    set options(value) {
      super.options = value;
    }
    static verifyExtends(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, firebase_core_platform_interface.FirebaseAppPlatform._token);
    }
    get [_isDefault]() {
      return this.name === "[DEFAULT]";
    }
    get isAutomaticDataCollectionEnabled() {
      dart.throw(new core.UnimplementedError.new("isAutomaticDataCollectionEnabled has not been implemented."));
    }
    delete() {
      return async.async(dart.void, function* $delete() {
        dart.throw(new core.UnimplementedError.new("delete() has not been implemented."));
      });
    }
    setAutomaticDataCollectionEnabled(enabled) {
      return async.async(dart.void, function* setAutomaticDataCollectionEnabled() {
        dart.throw(new core.UnimplementedError.new("setAutomaticDataCollectionEnabled() has not been implemented."));
      });
    }
    setAutomaticResourceManagementEnabled(enabled) {
      return async.async(dart.void, function* setAutomaticResourceManagementEnabled() {
        dart.throw(new core.UnimplementedError.new("setAutomaticResourceManagementEnabled() has not been implemented."));
      });
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!FirebaseAppPlatformL().is(other)) return false;
      return dart.equals(dart.dload(other, 'name'), this.name) && dart.equals(dart.dload(other, 'options'), this.options);
    }
    get hashCode() {
      return hash.hash2(this.name, this.options);
    }
    toString() {
      return dart.str(dart.wrapType(FirebaseAppPlatformL())) + "(" + dart.str(this.name) + ")";
    }
  };
  (firebase_core_platform_interface.FirebaseAppPlatform.new = function(name, options) {
    this[name$] = name;
    this[options$] = options;
    firebase_core_platform_interface.FirebaseAppPlatform.__proto__.new.call(this, {token: firebase_core_platform_interface.FirebaseAppPlatform._token});
    ;
  }).prototype = firebase_core_platform_interface.FirebaseAppPlatform.prototype;
  dart.addTypeTests(firebase_core_platform_interface.FirebaseAppPlatform);
  dart.addTypeCaches(firebase_core_platform_interface.FirebaseAppPlatform);
  dart.setMethodSignature(firebase_core_platform_interface.FirebaseAppPlatform, () => ({
    __proto__: dart.getMethods(firebase_core_platform_interface.FirebaseAppPlatform.__proto__),
    delete: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    setAutomaticDataCollectionEnabled: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.bool)]),
    setAutomaticResourceManagementEnabled: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.bool)]),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(firebase_core_platform_interface.FirebaseAppPlatform, () => ({
    __proto__: dart.getGetters(firebase_core_platform_interface.FirebaseAppPlatform.__proto__),
    [_isDefault]: dart.legacy(core.bool),
    isAutomaticDataCollectionEnabled: dart.legacy(core.bool),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(firebase_core_platform_interface.FirebaseAppPlatform, L0);
  dart.setFieldSignature(firebase_core_platform_interface.FirebaseAppPlatform, () => ({
    __proto__: dart.getFields(firebase_core_platform_interface.FirebaseAppPlatform.__proto__),
    name: dart.finalFieldType(dart.legacy(core.String)),
    options: dart.finalFieldType(dart.legacy(firebase_core_platform_interface.FirebaseOptions))
  }));
  dart.defineExtensionMethods(firebase_core_platform_interface.FirebaseAppPlatform, ['_equals', 'toString']);
  dart.defineExtensionAccessors(firebase_core_platform_interface.FirebaseAppPlatform, ['hashCode']);
  dart.defineLazy(firebase_core_platform_interface.FirebaseAppPlatform, {
    /*firebase_core_platform_interface.FirebaseAppPlatform._token*/get _token() {
      return new core.Object.new();
    }
  }, true);
  firebase_core_platform_interface.MethodChannelFirebaseApp = class MethodChannelFirebaseApp extends firebase_core_platform_interface.FirebaseAppPlatform {
    get isAutomaticDataCollectionEnabled() {
      return this[_isAutomaticDataCollectionEnabled];
    }
    delete() {
      return async.async(dart.void, (function* $delete() {
        if (dart.test(this[_isDefault])) {
          dart.throw(firebase_core_platform_interface.noDefaultAppDelete());
        }
        if (dart.test(this[_isDeleted])) {
          return;
        }
        yield firebase_core_platform_interface.MethodChannelFirebase.channel.invokeMethod(dart.void, "FirebaseApp#delete", new (IdentityMapOfStringL$dynamic()).from(["appName", this.name, "options", this.options.asMap]));
        firebase_core_platform_interface.MethodChannelFirebase.appInstances[$remove](this.name);
        firebase_core_platform_interface.FirebasePluginPlatform._constantsForPluginApps[$remove](this.name);
        this[_isDeleted] = true;
      }).bind(this));
    }
    setAutomaticDataCollectionEnabled(enabled) {
      return async.async(dart.void, (function* setAutomaticDataCollectionEnabled() {
        if (!(enabled != null)) dart.assertFailed(null, L2, 63, 12, "enabled != null");
        yield firebase_core_platform_interface.MethodChannelFirebase.channel.invokeMethod(dart.void, "FirebaseApp#setAutomaticDataCollectionEnabled", new (IdentityMapOfStringL$dynamic()).from(["appName", this.name, "enabled", enabled]));
        this[_isAutomaticDataCollectionEnabled] = enabled;
      }).bind(this));
    }
    setAutomaticResourceManagementEnabled(enabled) {
      return async.async(dart.void, (function* setAutomaticResourceManagementEnabled() {
        if (!(enabled != null)) dart.assertFailed(null, L2, 75, 12, "enabled != null");
        yield firebase_core_platform_interface.MethodChannelFirebase.channel.invokeMethod(dart.void, "FirebaseApp#setAutomaticResourceManagementEnabled", new (IdentityMapOfStringL$dynamic()).from(["appName", this.name, "enabled", enabled]));
      }).bind(this));
    }
  };
  (firebase_core_platform_interface.MethodChannelFirebaseApp.new = function(name, options, opts) {
    let t0;
    let isAutomaticDataCollectionEnabled = opts && 'isAutomaticDataCollectionEnabled' in opts ? opts.isAutomaticDataCollectionEnabled : null;
    this[_isDeleted] = false;
    this[_isAutomaticDataCollectionEnabled] = null;
    firebase_core_platform_interface.MethodChannelFirebaseApp.__proto__.new.call(this, name, options);
    this[_isAutomaticDataCollectionEnabled] = boolL().as((t0 = isAutomaticDataCollectionEnabled, t0 == null ? false : t0));
  }).prototype = firebase_core_platform_interface.MethodChannelFirebaseApp.prototype;
  dart.addTypeTests(firebase_core_platform_interface.MethodChannelFirebaseApp);
  dart.addTypeCaches(firebase_core_platform_interface.MethodChannelFirebaseApp);
  dart.setLibraryUri(firebase_core_platform_interface.MethodChannelFirebaseApp, L0);
  dart.setFieldSignature(firebase_core_platform_interface.MethodChannelFirebaseApp, () => ({
    __proto__: dart.getFields(firebase_core_platform_interface.MethodChannelFirebaseApp.__proto__),
    [_isDeleted]: dart.fieldType(dart.legacy(core.bool)),
    [_isAutomaticDataCollectionEnabled]: dart.fieldType(dart.legacy(core.bool))
  }));
  var _initializeFirebaseAppFromMap = dart.privateName(firebase_core_platform_interface, "_initializeFirebaseAppFromMap");
  var _initializeCore = dart.privateName(firebase_core_platform_interface, "_initializeCore");
  firebase_core_platform_interface.FirebasePlatform = class FirebasePlatform extends plugin_platform_interface.PlatformInterface {
    static get instance() {
      return firebase_core_platform_interface.FirebasePlatform._instance;
    }
    static set instance(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, firebase_core_platform_interface.FirebasePlatform._token);
      firebase_core_platform_interface.FirebasePlatform._instance = instance;
    }
    get apps() {
      dart.throw(new core.UnimplementedError.new("apps has not been implemented."));
    }
    initializeApp(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let options = opts && 'options' in opts ? opts.options : null;
      dart.throw(new core.UnimplementedError.new("initializeApp() has not been implemented."));
    }
    app(name = "[DEFAULT]") {
      dart.throw(new core.UnimplementedError.new("app() has not been implemented."));
    }
  };
  (firebase_core_platform_interface.FirebasePlatform.new = function() {
    firebase_core_platform_interface.FirebasePlatform.__proto__.new.call(this, {token: firebase_core_platform_interface.FirebasePlatform._token});
    ;
  }).prototype = firebase_core_platform_interface.FirebasePlatform.prototype;
  dart.addTypeTests(firebase_core_platform_interface.FirebasePlatform);
  dart.addTypeCaches(firebase_core_platform_interface.FirebasePlatform);
  dart.setMethodSignature(firebase_core_platform_interface.FirebasePlatform, () => ({
    __proto__: dart.getMethods(firebase_core_platform_interface.FirebasePlatform.__proto__),
    initializeApp: dart.fnType(dart.legacy(async.Future$(dart.legacy(firebase_core_platform_interface.FirebaseAppPlatform))), [], {name: dart.legacy(core.String), options: dart.legacy(firebase_core_platform_interface.FirebaseOptions)}, {}),
    app: dart.fnType(dart.legacy(firebase_core_platform_interface.FirebaseAppPlatform), [], [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(firebase_core_platform_interface.FirebasePlatform, () => ({
    __proto__: dart.getGetters(firebase_core_platform_interface.FirebasePlatform.__proto__),
    apps: dart.legacy(core.List$(dart.legacy(firebase_core_platform_interface.FirebaseAppPlatform)))
  }));
  dart.setLibraryUri(firebase_core_platform_interface.FirebasePlatform, L0);
  dart.defineLazy(firebase_core_platform_interface.FirebasePlatform, {
    /*firebase_core_platform_interface.FirebasePlatform._token*/get _token() {
      return new core.Object.new();
    },
    /*firebase_core_platform_interface.FirebasePlatform._instance*/get _instance() {
      return new firebase_core_platform_interface.MethodChannelFirebase.new();
    },
    set _instance(_) {}
  }, true);
  var MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  var C2;
  var StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  var C1;
  var MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  var MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  var C0;
  firebase_core_platform_interface.MethodChannelFirebase = class MethodChannelFirebase extends firebase_core_platform_interface.FirebasePlatform {
    [_initializeCore]() {
      return async.async(dart.void, (function* _initializeCore() {
        let apps = (yield firebase_core_platform_interface.MethodChannelFirebase.channel.invokeListMethod(MapL(), "Firebase#initializeCore"));
        apps[$forEach](dart.bind(this, _initializeFirebaseAppFromMap));
        firebase_core_platform_interface.MethodChannelFirebase.isCoreInitialized = true;
      }).bind(this));
    }
    [_initializeFirebaseAppFromMap](map) {
      let methodChannelFirebaseApp = new firebase_core_platform_interface.MethodChannelFirebaseApp.new(StringL().as(map[$_get]("name")), new firebase_core_platform_interface.FirebaseOptions.fromMap(MapL().as(map[$_get]("options"))), {isAutomaticDataCollectionEnabled: map[$_get]("isAutomaticDataCollectionEnabled")});
      firebase_core_platform_interface.MethodChannelFirebase.appInstances[$_set](methodChannelFirebaseApp.name, methodChannelFirebaseApp);
      firebase_core_platform_interface.FirebasePluginPlatform._constantsForPluginApps[$_set](methodChannelFirebaseApp.name, map[$_get]("pluginConstants"));
    }
    get apps() {
      return firebase_core_platform_interface.MethodChannelFirebase.appInstances[$values][$toList]({growable: false});
    }
    initializeApp(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let options = opts && 'options' in opts ? opts.options : null;
      return async.async(FirebaseAppPlatformL(), (function* initializeApp() {
        if (name === "[DEFAULT]") {
          dart.throw(firebase_core_platform_interface.noDefaultAppInitialization());
        }
        if (!dart.test(firebase_core_platform_interface.MethodChannelFirebase.isCoreInitialized)) {
          yield this[_initializeCore]();
        }
        if (name == null) {
          let defaultApp = firebase_core_platform_interface.MethodChannelFirebase.appInstances[$_get]("[DEFAULT]");
          if (defaultApp == null) {
            dart.throw(firebase_core_platform_interface.coreNotInitialized());
          }
          return firebase_core_platform_interface.MethodChannelFirebase.appInstances[$_get]("[DEFAULT]");
        }
        if (!(options != null)) dart.assertFailed("FirebaseOptions cannot be null when creating a secondary Firebase app.", L3, 92, 12, "options != null");
        if (dart.test(firebase_core_platform_interface.MethodChannelFirebase.appInstances[$containsKey](name))) {
          dart.throw(firebase_core_platform_interface.duplicateApp(name));
        }
        this[_initializeFirebaseAppFromMap](yield firebase_core_platform_interface.MethodChannelFirebase.channel.invokeMapMethod(dart.dynamic, dart.dynamic, "Firebase#initializeApp", new (IdentityMapOfStringL$dynamic()).from(["appName", name, "options", options.asMap])));
        return firebase_core_platform_interface.MethodChannelFirebase.appInstances[$_get](name);
      }).bind(this));
    }
    app(name = "[DEFAULT]") {
      if (dart.test(firebase_core_platform_interface.MethodChannelFirebase.appInstances[$containsKey](name))) {
        return firebase_core_platform_interface.MethodChannelFirebase.appInstances[$_get](name);
      }
      dart.throw(firebase_core_platform_interface.noAppExists(name));
    }
  };
  (firebase_core_platform_interface.MethodChannelFirebase.new = function() {
    firebase_core_platform_interface.MethodChannelFirebase.__proto__.new.call(this);
    ;
  }).prototype = firebase_core_platform_interface.MethodChannelFirebase.prototype;
  dart.addTypeTests(firebase_core_platform_interface.MethodChannelFirebase);
  dart.addTypeCaches(firebase_core_platform_interface.MethodChannelFirebase);
  dart.setMethodSignature(firebase_core_platform_interface.MethodChannelFirebase, () => ({
    __proto__: dart.getMethods(firebase_core_platform_interface.MethodChannelFirebase.__proto__),
    [_initializeCore]: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    [_initializeFirebaseAppFromMap]: dart.fnType(dart.void, [dart.legacy(core.Map)])
  }));
  dart.setLibraryUri(firebase_core_platform_interface.MethodChannelFirebase, L0);
  dart.defineLazy(firebase_core_platform_interface.MethodChannelFirebase, {
    /*firebase_core_platform_interface.MethodChannelFirebase.appInstances*/get appInstances() {
      return new (IdentityMapOfStringL$MethodChannelFirebaseAppL()).new();
    },
    set appInstances(_) {},
    /*firebase_core_platform_interface.MethodChannelFirebase.isCoreInitialized*/get isCoreInitialized() {
      return false;
    },
    set isCoreInitialized(_) {},
    /*firebase_core_platform_interface.MethodChannelFirebase.channel*/get channel() {
      return C0 || CT.C0;
    }
  }, true);
  var _appName$ = dart.privateName(firebase_core_platform_interface, "_appName");
  var _methodChannelName$ = dart.privateName(firebase_core_platform_interface, "_methodChannelName");
  firebase_core_platform_interface.FirebasePluginPlatform = class FirebasePluginPlatform extends plugin_platform_interface.PlatformInterface {
    static verifyExtends(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, firebase_core_platform_interface.FirebasePluginPlatform._token);
    }
    get pluginConstants() {
      if (firebase_core_platform_interface.FirebasePluginPlatform._constantsForPluginApps[$_get](this[_appName$]) != null && dart.dsend(firebase_core_platform_interface.FirebasePluginPlatform._constantsForPluginApps[$_get](this[_appName$]), '_get', [this[_methodChannelName$]]) != null) {
        return MapL().as(dart.dsend(firebase_core_platform_interface.FirebasePluginPlatform._constantsForPluginApps[$_get](this[_appName$]), '_get', [this[_methodChannelName$]]));
      }
      return new _js_helper.LinkedMap.new();
    }
  };
  (firebase_core_platform_interface.FirebasePluginPlatform.new = function(_appName, _methodChannelName) {
    this[_appName$] = _appName;
    this[_methodChannelName$] = _methodChannelName;
    firebase_core_platform_interface.FirebasePluginPlatform.__proto__.new.call(this, {token: firebase_core_platform_interface.FirebasePluginPlatform._token});
    ;
  }).prototype = firebase_core_platform_interface.FirebasePluginPlatform.prototype;
  dart.addTypeTests(firebase_core_platform_interface.FirebasePluginPlatform);
  dart.addTypeCaches(firebase_core_platform_interface.FirebasePluginPlatform);
  dart.setGetterSignature(firebase_core_platform_interface.FirebasePluginPlatform, () => ({
    __proto__: dart.getGetters(firebase_core_platform_interface.FirebasePluginPlatform.__proto__),
    pluginConstants: dart.legacy(core.Map)
  }));
  dart.setLibraryUri(firebase_core_platform_interface.FirebasePluginPlatform, L0);
  dart.setFieldSignature(firebase_core_platform_interface.FirebasePluginPlatform, () => ({
    __proto__: dart.getFields(firebase_core_platform_interface.FirebasePluginPlatform.__proto__),
    [_appName$]: dart.finalFieldType(dart.legacy(core.String)),
    [_methodChannelName$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(firebase_core_platform_interface.FirebasePluginPlatform, {
    /*firebase_core_platform_interface.FirebasePluginPlatform._constantsForPluginApps*/get _constantsForPluginApps() {
      return new _js_helper.LinkedMap.new();
    },
    set _constantsForPluginApps(_) {},
    /*firebase_core_platform_interface.FirebasePluginPlatform._token*/get _token() {
      return new core.Object.new();
    }
  }, true);
  firebase_core_platform_interface.noAppExists = function noAppExists(appName) {
    return new firebase_core_platform_interface.FirebaseException.new({plugin: "core", code: "no-app", message: "No Firebase App '" + dart.str(appName) + "' has been created - call Firebase.initializeApp()"});
  };
  firebase_core_platform_interface.duplicateApp = function duplicateApp(appName) {
    return new firebase_core_platform_interface.FirebaseException.new({plugin: "core", code: "duplicate-app", message: "A Firebase App named \"" + dart.str(appName) + "\" already exists"});
  };
  firebase_core_platform_interface.noDefaultAppInitialization = function noDefaultAppInitialization() {
    return new firebase_core_platform_interface.FirebaseException.new({plugin: "core", message: "The " + "[DEFAULT]" + " app cannot be initialized here. To initialize the default app, follow the installation instructions for the specific platform you are developing with."});
  };
  firebase_core_platform_interface.coreNotInitialized = function coreNotInitialized() {
    let message = null;
    if (true) {
      message = "Firebase has not been correctly initialized. Have you added the Firebase import scripts to your index.html file? \n    \n    View the Web Installation documentation for more information: https://firebaseextended.github.io/flutterfire/docs/installation/web\n    ";
    } else if (dart.equals(platform.defaultTargetPlatform, platform.TargetPlatform.android)) {
      message = "Firebase has not been correctly initialized. Have you added the \"google-services.json\" file to the project? \n    \n    View the Android Installation documentation for more information: https://firebaseextended.github.io/flutterfire/docs/installation/android\n    ";
    } else if (dart.equals(platform.defaultTargetPlatform, platform.TargetPlatform.iOS)) {
      message = "Firebase has not been correctly initialized. Have you added the \"GoogleService-Info.plist\" file to the project? \n    \n    View the iOS Installation documentation for more information: https://firebaseextended.github.io/flutterfire/docs/installation/ios\n    ";
    } else {
      message = "Firebase has not been initialized. Please check the documentation for your platform.";
    }
    return new firebase_core_platform_interface.FirebaseException.new({plugin: "core", code: "not-initialized", message: message});
  };
  firebase_core_platform_interface.noDefaultAppDelete = function noDefaultAppDelete() {
    return new firebase_core_platform_interface.FirebaseException.new({plugin: "core", message: "The default Firebase app instance cannot be deleted."});
  };
  dart.defineLazy(firebase_core_platform_interface, {
    /*firebase_core_platform_interface.defaultFirebaseAppName*/get defaultFirebaseAppName() {
      return "[DEFAULT]";
    }
  }, true);
  dart.trackLibraries("packages/firebase_core_platform_interface/firebase_core_platform_interface.dart", {
    "package:firebase_core_platform_interface/firebase_core_platform_interface.dart": firebase_core_platform_interface
  }, {
    "package:firebase_core_platform_interface/firebase_core_platform_interface.dart": ["src/firebase_core_exceptions.dart", "src/firebase_exception.dart", "src/firebase_options.dart", "src/method_channel/method_channel_firebase_app.dart", "src/method_channel/method_channel_firebase.dart", "src/platform_interface/platform_interface_firebase_app.dart", "src/platform_interface/platform_interface_firebase.dart", "src/platform_interface/platform_interface_firebase_plugin.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/firebase_exception.dart","src/firebase_options.dart","src/platform_interface/platform_interface_firebase_app.dart","src/method_channel/method_channel_firebase_app.dart","src/platform_interface/platform_interface_firebase.dart","src/method_channel/method_channel_firebase.dart","src/platform_interface/platform_interface_firebase_plugin.dart","src/firebase_core_exceptions.dart","firebase_core_platform_interface.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/firebase_core_platform_interface/firebase_core_platform_interface.dart.lib.js"}');
  // Exports:
  return {
    firebase_core_platform_interface: firebase_core_platform_interface
  };
}));

//# sourceMappingURL=firebase_core_platform_interface.dart.lib.js.map
