define(['dart_sdk', 'packages/firebase/src/storage.dart', 'packages/firebase/src/js.dart'], (function load__packages__firebase__src__messaging_dart(dart_sdk, packages__firebase__src__storage$46dart, packages__firebase__src__js$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const js = dart_sdk.js;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils = packages__firebase__src__storage$46dart.src__utils;
  const js$ = packages__firebase__src__js$46dart.src__js;
  var messaging = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ObjectLTodynamic = () => (ObjectLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [ObjectL()])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var PayloadL = () => (PayloadL = dart.constFn(dart.legacy(messaging.Payload)))();
  var StreamControllerOfPayloadL = () => (StreamControllerOfPayloadL = dart.constFn(async.StreamController$(PayloadL())))();
  var dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var dynamicToLNull = () => (dynamicToLNull = dart.constFn(dart.legacy(dynamicToNull())))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var StreamControllerOfNull = () => (StreamControllerOfNull = dart.constFn(async.StreamController$(core.Null)))();
  var StreamOfNull = () => (StreamOfNull = dart.constFn(async.Stream$(core.Null)))();
  var StreamLOfNull = () => (StreamLOfNull = dart.constFn(dart.legacy(StreamOfNull())))();
  var MessagingL = () => (MessagingL = dart.constFn(dart.legacy(messaging.Messaging)))();
  var ExpandoOfMessagingL = () => (ExpandoOfMessagingL = dart.constFn(core.Expando$(MessagingL())))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(StringL(), dart.dynamic)))();
  var MapLOfStringL$dynamic = () => (MapLOfStringL$dynamic = dart.constFn(dart.legacy(MapOfStringL$dynamic())))();
  const CT = Object.create(null);
  var L0 = "package:firebase/src/messaging.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(utils.dartify, ObjectLTodynamic());
    }
  }, false);
  var _onMessageController = dart.privateName(messaging, "_onMessageController");
  var _onTokenRefresh = dart.privateName(messaging, "_onTokenRefresh");
  var _onBackgroundMessage = dart.privateName(messaging, "_onBackgroundMessage");
  var C0;
  var _createOnMessageStream = dart.privateName(messaging, "_createOnMessageStream");
  var _createBackgroundMessagedStream = dart.privateName(messaging, "_createBackgroundMessagedStream");
  var _createNullStream = dart.privateName(messaging, "_createNullStream");
  messaging.Messaging = class Messaging extends js$.JsObjectWrapper$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.messaging.Messaging, "firebase.messaging.Messaging"))) {
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = messaging.Messaging._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new messaging.Messaging._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    static isSupported() {
      return dart.global.firebase.messaging.isSupported();
    }
    usePublicVapidKey(key) {
      this.jsObject.usePublicVapidKey(key);
    }
    useServiceWorker(registration) {
      this.jsObject.useServiceWorker(registration);
    }
    deleteToken(token) {
      this.jsObject.deleteToken(token);
    }
    requestPermission() {
      return async.async(dart.dynamic, (function* requestPermission() {
        yield utils.handleThenable(dart.void, this.jsObject.requestPermission()).then(dart.dynamic, C0 || CT.C0);
      }).bind(this));
    }
    getToken() {
      return utils.handleThenable(StringL(), this.jsObject.getToken());
    }
    get onMessage() {
      return this[_createOnMessageStream](this[_onMessageController]);
    }
    get onBackgroundMessage() {
      return this[_createBackgroundMessagedStream](this[_onBackgroundMessage]);
    }
    get onTokenRefresh() {
      return this[_createNullStream](this[_onTokenRefresh]);
    }
    [_createOnMessageStream](controller) {
      if (controller == null) {
        controller = StreamControllerOfPayloadL().broadcast({sync: true});
        let nextWrapper = js.allowInterop(dynamicToLNull(), dart.fn(payload => {
          controller.add(new messaging.Payload._fromJsObject(dart.legacy(dart.anonymousJSType("PayloadJsImpl")).as(payload)));
        }, dynamicToNull()));
        let errorWrapper = js.allowInterop(dynamicToLNull(), dart.fn(e => {
          controller.addError(e);
        }, dynamicToNull()));
        this.jsObject.onMessage(dart.assertInterop(nextWrapper), dart.assertInterop(errorWrapper));
      }
      return controller.stream;
    }
    [_createBackgroundMessagedStream](controller) {
      if (controller == null) {
        controller = StreamControllerOfPayloadL().broadcast({sync: true});
        let nextWrapper = js.allowInterop(dynamicToLNull(), dart.fn(payload => {
          controller.add(new messaging.Payload._fromJsObject(dart.legacy(dart.anonymousJSType("PayloadJsImpl")).as(payload)));
        }, dynamicToNull()));
        this.jsObject.setBackgroundMessageHandler(dart.assertInterop(nextWrapper));
      }
      return controller.stream;
    }
    [_createNullStream](controller) {
      if (controller == null) {
        let nextWrapper = js.allowInterop(dynamicToLNull(), dart.fn(_ => null, dynamicToNull()));
        let errorWrapper = js.allowInterop(dynamicToLNull(), dart.fn(e => {
          controller.addError(e);
        }, dynamicToNull()));
        let onSnapshotUnsubscribe = null;
        const startListen = () => {
          onSnapshotUnsubscribe = this.jsObject.onTokenRefresh(dart.assertInterop(nextWrapper), dart.assertInterop(errorWrapper));
        };
        dart.fn(startListen, VoidTovoid());
        function stopListen() {
          onSnapshotUnsubscribe();
          onSnapshotUnsubscribe = null;
        }
        dart.fn(stopListen, VoidTovoid());
        controller = StreamControllerOfNull().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return StreamLOfNull().as(controller.stream);
    }
  };
  (messaging.Messaging._fromJsObject = function(jsObject) {
    this[_onMessageController] = null;
    this[_onTokenRefresh] = null;
    this[_onBackgroundMessage] = null;
    messaging.Messaging.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = messaging.Messaging.prototype;
  dart.addTypeTests(messaging.Messaging);
  dart.addTypeCaches(messaging.Messaging);
  dart.setMethodSignature(messaging.Messaging, () => ({
    __proto__: dart.getMethods(messaging.Messaging.__proto__),
    usePublicVapidKey: dart.fnType(dart.void, [dart.legacy(core.String)]),
    useServiceWorker: dart.fnType(dart.void, [dart.dynamic]),
    deleteToken: dart.fnType(dart.void, [dart.legacy(core.String)]),
    requestPermission: dart.fnType(dart.legacy(async.Future), []),
    getToken: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), []),
    [_createOnMessageStream]: dart.fnType(dart.legacy(async.Stream$(dart.legacy(messaging.Payload))), [dart.legacy(async.StreamController$(dart.legacy(messaging.Payload)))]),
    [_createBackgroundMessagedStream]: dart.fnType(dart.legacy(async.Stream$(dart.legacy(messaging.Payload))), [dart.legacy(async.StreamController$(dart.legacy(messaging.Payload)))]),
    [_createNullStream]: dart.fnType(dart.legacy(async.Stream$(core.Null)), [dart.legacy(async.StreamController)])
  }));
  dart.setGetterSignature(messaging.Messaging, () => ({
    __proto__: dart.getGetters(messaging.Messaging.__proto__),
    onMessage: dart.legacy(async.Stream$(dart.legacy(messaging.Payload))),
    onBackgroundMessage: dart.legacy(async.Stream$(dart.legacy(messaging.Payload))),
    onTokenRefresh: dart.legacy(async.Stream$(core.Null))
  }));
  dart.setLibraryUri(messaging.Messaging, L0);
  dart.setFieldSignature(messaging.Messaging, () => ({
    __proto__: dart.getFields(messaging.Messaging.__proto__),
    [_onMessageController]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(messaging.Payload)))),
    [_onTokenRefresh]: dart.fieldType(dart.legacy(async.StreamController$(core.Null))),
    [_onBackgroundMessage]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(messaging.Payload))))
  }));
  dart.defineLazy(messaging.Messaging, {
    /*messaging.Messaging._expando*/get _expando() {
      return new (ExpandoOfMessagingL()).new();
    }
  }, true);
  messaging.Notification = class Notification extends js$.JsObjectWrapper$(dart.legacy(dart.anonymousJSType("NotificationJsImpl"))) {
    get title() {
      return this.jsObject.title;
    }
    get body() {
      return this.jsObject.body;
    }
    get clickAction() {
      return this.jsObject.click_action;
    }
    get icon() {
      return this.jsObject.icon;
    }
  };
  (messaging.Notification._fromJsObject = function(jsObject) {
    messaging.Notification.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = messaging.Notification.prototype;
  dart.addTypeTests(messaging.Notification);
  dart.addTypeCaches(messaging.Notification);
  dart.setGetterSignature(messaging.Notification, () => ({
    __proto__: dart.getGetters(messaging.Notification.__proto__),
    title: dart.legacy(core.String),
    body: dart.legacy(core.String),
    clickAction: dart.legacy(core.String),
    icon: dart.legacy(core.String)
  }));
  dart.setLibraryUri(messaging.Notification, L0);
  messaging.Payload = class Payload extends js$.JsObjectWrapper$(dart.legacy(dart.anonymousJSType("PayloadJsImpl"))) {
    get notification() {
      return new messaging.Notification._fromJsObject(this.jsObject.notification);
    }
    get collapseKey() {
      return this.jsObject.collapse_key;
    }
    get from() {
      return this.jsObject.from;
    }
    get data() {
      return MapLOfStringL$dynamic().as(utils.dartify(this.jsObject.data));
    }
  };
  (messaging.Payload._fromJsObject = function(jsObject) {
    messaging.Payload.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = messaging.Payload.prototype;
  dart.addTypeTests(messaging.Payload);
  dart.addTypeCaches(messaging.Payload);
  dart.setGetterSignature(messaging.Payload, () => ({
    __proto__: dart.getGetters(messaging.Payload.__proto__),
    notification: dart.legacy(messaging.Notification),
    collapseKey: dart.legacy(core.String),
    from: dart.legacy(core.String),
    data: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))
  }));
  dart.setLibraryUri(messaging.Payload, L0);
  dart.trackLibraries("packages/firebase/src/messaging.dart", {
    "package:firebase/src/messaging.dart": messaging
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["messaging.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;uBAWiE;;AAC7D,UAAI,AAAS,QAAD,IAAI;AACd,cAAO;;AAET,WAAO;WAAS,QAAQ;WAAT;mBAAW,aAAc,sCAAc,QAAQ,GAA/C;IACjB;;AAE6B;IAA+B;sBAO9B;AACG,MAA/B,AAAS,gCAAkB,GAAG;IAChC;qBAIsB;AACmB,MAAvC,AAAS,+BAAiB,YAAY;IACxC;gBAIwB;AACK,MAA3B,AAAS,0BAAY,KAAK;IAC5B;;AAIwB;AAC0C,QAAhE,MAAM,AAA6C,gCAA9B,AAAS;MAChC;;;AAI6B,6CAAe,AAAS;IAAW;;AAQ/B,0CAAuB;IAAqB;;AAKzE,mDAAgC;IAAqB;;AAItB,qCAAkB;IAAgB;6BAEJ;AAC/D,UAAI,AAAW,UAAD,IAAI;AACmC,QAAnD,aAA8B,8CAAgB;AACxC,0BAAc,kCAAa,QAAC;AACc,UAA9C,AAAW,UAAD,KAAa,0FAAc,OAAO;;AAExC,2BAAe,kCAAa,QAAC;AACX,UAAtB,AAAW,UAAD,UAAU,CAAC;;AAEsB,QAA7C,AAAS,2CAAU,WAAW,sBAAE,YAAY;;AAE9C,YAAO,AAAW,WAAD;IACnB;sCAG8B;AAC5B,UAAI,AAAW,UAAD,IAAI;AACmC,QAAnD,aAA8B,8CAAgB;AACxC,0BAAc,kCAAa,QAAC;AACc,UAA9C,AAAW,UAAD,KAAa,0FAAc,OAAO;;AAEG,QAAjD,AAAS,6DAA4B,WAAW;;AAElD,YAAO,AAAW,WAAD;IACnB;wBAEgD;AAC9C,UAAI,AAAW,UAAD,IAAI;AACV,0BAAc,kCAAa,QAAC,KAAM;AAClC,2BAAe,kCAAa,QAAC;AACX,UAAtB,AAAW,UAAD,UAAU,CAAC;;AAEV;AAEb,cAAK;AAEmD,UADtD,wBACI,AAAS,gDAAe,WAAW,sBAAE,YAAY;;;AAGvD,iBAAK;AACoB,UAAvB,AAAqB,qBAAA;AACO,UAA5B,wBAAwB;;;AAIkC,QAD5D,aAAa,8CACC,WAAW,YAAY,UAAU,QAAQ;;AAEzD,gCAAO,AAAW,UAAD;IACnB;;gDAhG0D;IA+BhC;IACH;IACG;AAhCd,0DAAa,QAAQ;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAZrB,4BAAQ;YAAG;;;;;AAmHJ,YAAA,AAAS;IAAK;;AACf,YAAA,AAAS;IAAI;;AACN,YAAA,AAAS;IAAY;;AAC5B,YAAA,AAAS;IAAI;;mDANgC;AACpD,6DAAa,QAAQ;;EAAC;;;;;;;;;;;;;AAa9B,YAAa,0CAAc,AAAS;IAAa;;AAC3B,YAAA,AAAS;IAAY;;AAC5B,YAAA,AAAS;IAAI;;AACC,sDAAQ,AAAS;IAAK;;8CAPD;AAC1C,wDAAa,QAAQ;;EAAC","file":"../../../../../../../../../../../packages/firebase/src/messaging.dart.lib.js"}');
  // Exports:
  return {
    src__messaging: messaging
  };
}));

//# sourceMappingURL=messaging.dart.lib.js.map
