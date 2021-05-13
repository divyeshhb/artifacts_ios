define(['dart_sdk', 'packages/firebase_auth_platform_interface/src/providers/twitter_auth.dart', 'packages/firebase_auth_web/utils.dart', 'packages/firebase/src/storage.dart'], (function load__packages__firebase_auth_web__firebase_auth_web_recaptcha_verifier_factory_dart(dart_sdk, packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart, packages__firebase_auth_web__utils$46dart, packages__firebase__src__storage$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform_interface_recaptcha_verifier_factory = packages__firebase_auth_platform_interface__src__providers__twitter_auth$46dart.src__platform_interface__platform_interface_recaptcha_verifier_factory;
  const utils = packages__firebase_auth_web__utils$46dart.utils;
  const auth = packages__firebase__src__storage$46dart.src__auth;
  var firebase_auth_web_recaptcha_verifier_factory = Object.create(dart.library);
  var $_set = dartx._set;
  var $isEmpty = dartx.isEmpty;
  var $document = dartx.document;
  var $remove = dartx.remove;
  var $children = dartx.children;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(false);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ObjectLToNull = () => (ObjectLToNull = dart.constFn(dart.fnType(core.Null, [ObjectL()])))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  const CT = Object.create(null);
  var L1 = "package:firebase_auth_web/firebase_auth_web_recaptcha_verifier_factory.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth_web-0.3.1+2/lib/firebase_auth_web_recaptcha_verifier_factory.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: platform_interface_recaptcha_verifier_factory.RecaptchaVerifierSize.prototype,
        [_name]: "RecaptchaVerifierSize.normal",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: platform_interface_recaptcha_verifier_factory.RecaptchaVerifierTheme.prototype,
        [_name]: "RecaptchaVerifierTheme.light",
        index: 0
      });
    }
  }, false);
  var _delegate = dart.privateName(firebase_auth_web_recaptcha_verifier_factory, "_delegate");
  var _name = dart.privateName(platform_interface_recaptcha_verifier_factory, "_name");
  var C0;
  var C1;
  firebase_auth_web_recaptcha_verifier_factory.RecaptchaVerifierFactoryWeb = class RecaptchaVerifierFactoryWeb extends platform_interface_recaptcha_verifier_factory.RecaptchaVerifierFactoryPlatform {
    static get instance() {
      return new firebase_auth_web_recaptcha_verifier_factory.RecaptchaVerifierFactoryWeb.__();
    }
    delegateFor(opts) {
      let container = opts && 'container' in opts ? opts.container : null;
      let size = opts && 'size' in opts ? opts.size : C0 || CT.C0;
      let theme = opts && 'theme' in opts ? opts.theme : C1 || CT.C1;
      let onSuccess = opts && 'onSuccess' in opts ? opts.onSuccess : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onExpired = opts && 'onExpired' in opts ? opts.onExpired : null;
      return new firebase_auth_web_recaptcha_verifier_factory.RecaptchaVerifierFactoryWeb.new({container: container, size: size, theme: theme, onSuccess: onSuccess, onError: onError, onExpired: onExpired});
    }
    get delegate() {
      return this[_delegate];
    }
    get type() {
      return this[_delegate].type;
    }
    clear() {
      return this[_delegate].clear();
    }
    verify() {
      try {
        return this[_delegate].verify();
      } catch (e$) {
        let e = dart.getThrown(e$);
        dart.throw(utils.throwFirebaseAuthException(e));
      }
    }
    render() {
      return async.async(intL(), (function* render() {
        try {
          return dart.asNullableInt(yield this[_delegate].render());
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(utils.throwFirebaseAuthException(e));
        }
      }).bind(this));
    }
  };
  (firebase_auth_web_recaptcha_verifier_factory.RecaptchaVerifierFactoryWeb.__ = function() {
    this[_delegate] = null;
    firebase_auth_web_recaptcha_verifier_factory.RecaptchaVerifierFactoryWeb.__proto__.new.call(this);
    ;
  }).prototype = firebase_auth_web_recaptcha_verifier_factory.RecaptchaVerifierFactoryWeb.prototype;
  (firebase_auth_web_recaptcha_verifier_factory.RecaptchaVerifierFactoryWeb.new = function(opts) {
    let t0;
    let container = opts && 'container' in opts ? opts.container : null;
    let size = opts && 'size' in opts ? opts.size : C0 || CT.C0;
    let theme = opts && 'theme' in opts ? opts.theme : C1 || CT.C1;
    let onSuccess = opts && 'onSuccess' in opts ? opts.onSuccess : null;
    let onError = opts && 'onError' in opts ? opts.onError : null;
    let onExpired = opts && 'onExpired' in opts ? opts.onExpired : null;
    this[_delegate] = null;
    firebase_auth_web_recaptcha_verifier_factory.RecaptchaVerifierFactoryWeb.__proto__.new.call(this);
    let element = null;
    let parameters = new (IdentityMapOfStringL$dynamic()).new();
    if (onSuccess != null) {
      parameters[$_set]("callback", dart.fn(resp => {
        onSuccess();
      }, dynamicToNull()));
    }
    if (onExpired != null) {
      parameters[$_set]("expired-callback", dart.fn(() => {
        onExpired();
      }, VoidToNull()));
    }
    if (onError != null) {
      parameters[$_set]("error-callback", dart.fn(error => {
        onError(utils.throwFirebaseAuthException(error));
      }, ObjectLToNull()));
    }
    if (container == null || container[$isEmpty]) {
      parameters[$_set]("size", "invisible");
      let el = html.window[$document].getElementById("__ff-recaptcha-container");
      if (el != null) {
        el[$remove]();
      }
      html.window[$document].documentElement[$children][$add]((t0 = html.DivElement.new(), (() => {
        t0.id = "__ff-recaptcha-container";
        return t0;
      })()));
      element = "__ff-recaptcha-container";
    } else {
      parameters[$_set]("size", utils.convertRecaptchaVerifierSize(size));
      parameters[$_set]("theme", utils.convertRecaptchaVerifierTheme(theme));
      let el = html.window[$document].getElementById(container);
      if (!(el != null)) dart.assertFailed("An exception was thrown whilst creating a RecaptchaVerifier instance. No DOM element with an ID of " + dart.str(container) + " could be found.", L0, 80, 14, "el != null");
      element = container;
    }
    this[_delegate] = auth.RecaptchaVerifier.new(element, parameters);
  }).prototype = firebase_auth_web_recaptcha_verifier_factory.RecaptchaVerifierFactoryWeb.prototype;
  dart.addTypeTests(firebase_auth_web_recaptcha_verifier_factory.RecaptchaVerifierFactoryWeb);
  dart.addTypeCaches(firebase_auth_web_recaptcha_verifier_factory.RecaptchaVerifierFactoryWeb);
  dart.setGetterSignature(firebase_auth_web_recaptcha_verifier_factory.RecaptchaVerifierFactoryWeb, () => ({
    __proto__: dart.getGetters(firebase_auth_web_recaptcha_verifier_factory.RecaptchaVerifierFactoryWeb.__proto__),
    delegate: dart.legacy(auth.ApplicationVerifier$(dart.legacy(dart.lazyJSType(() => dart.global.firebase.auth.ApplicationVerifier, "firebase.auth.ApplicationVerifier"))))
  }));
  dart.setLibraryUri(firebase_auth_web_recaptcha_verifier_factory.RecaptchaVerifierFactoryWeb, L1);
  dart.setFieldSignature(firebase_auth_web_recaptcha_verifier_factory.RecaptchaVerifierFactoryWeb, () => ({
    __proto__: dart.getFields(firebase_auth_web_recaptcha_verifier_factory.RecaptchaVerifierFactoryWeb.__proto__),
    [_delegate]: dart.fieldType(dart.legacy(auth.RecaptchaVerifier))
  }));
  dart.defineLazy(firebase_auth_web_recaptcha_verifier_factory, {
    /*firebase_auth_web_recaptcha_verifier_factory._kInvisibleElementId*/get _kInvisibleElementId() {
      return "__ff-recaptcha-container";
    }
  }, true);
  dart.trackLibraries("packages/firebase_auth_web/firebase_auth_web_recaptcha_verifier_factory.dart", {
    "package:firebase_auth_web/firebase_auth_web_recaptcha_verifier_factory.dart": firebase_auth_web_recaptcha_verifier_factory
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["firebase_auth_web_recaptcha_verifier_factory.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2BM,YAA4B;IAAG;;UAgEvB;UACc;UACC;UACI;UACF;UACE;AAC7B,YAAO,8FACQ,SAAS,QACd,IAAI,SACH,KAAK,aACD,SAAS,WACX,OAAO,aACL,SAAS;IAC1B;;AAIE,YAAO;IACT;;AAGmB,YAAA,AAAU;IAAI;;AAI/B,YAAO,AAAU;IACnB;;AAIE;AACE,cAAO,AAAU;;YACV;AAC4B,QAAnC,WAAM,iCAA2B,CAAC;;IAEtC;;AAGkB;AAChB;AACE,gBAAkC,oBAA1B,MAAM,AAAU;;cACjB;AAC4B,UAAnC,WAAM,iCAA2B,CAAC;;MAEtC;;;;IArH2B;AAWO;;EAAO;;;QAIhC;QACe;QACC;QACI;QACF;QACE;IApBF;AAqBtB;AACI;AACc,qBAAa;AAElC,QAAI,SAAS,IAAI;AAGd,MAFD,AAAU,UAAA,QAAC,YAAc,QAAC;AACb,QAAX,AAAS,SAAA;;;AAIb,QAAI,SAAS,IAAI;AAGd,MAFD,AAAU,UAAA,QAAC,oBAAsB;AACpB,QAAX,AAAS,SAAA;;;AAIb,QAAI,OAAO,IAAI;AAGZ,MAFD,AAAU,UAAA,QAAC,kBAAoB,QAAQ;AACK,QAA1C,AAAO,OAAA,CAAC,iCAA2B,KAAK;;;AAI5C,QAAI,AAAU,SAAD,IAAI,QAAQ,AAAU,SAAD;AACA,MAAhC,AAAU,UAAA,QAAC,QAAU;AACb,eAAK,AAAO,AAAS;AAG7B,UAAI,EAAE,IAAI;AACG,QAAX,AAAG,EAAD;;AAI6C,MADjD,AAAO,AAAS,AAAgB,AAC3B,qFAAI;AAAc;;;AAEO,MAA9B;;AAEuD,MAAvD,AAAU,UAAA,QAAC,QAAU,mCAA6B,IAAI;AACI,MAA1D,AAAU,UAAA,QAAC,SAAW,oCAA8B,KAAK;AAEjD,eAAK,AAAO,AAAS,sCAAe,SAAS;AACrD,YAAO,AAAG,EAAD,IAAI,yBACT,AAA+H,iHAA1B,SAAS;AAG/F,MAAnB,UAAU,SAAS;;AAGsC,IAA3D,kBAAqB,2BAAkB,OAAO,EAAE,UAAU;EAC5D;;;;;;;;;;;;;MA5EW,iEAAoB","file":"../../../../../../../../../../packages/firebase_auth_web/firebase_auth_web_recaptcha_verifier_factory.dart.lib.js"}');
  // Exports:
  return {
    firebase_auth_web_recaptcha_verifier_factory: firebase_auth_web_recaptcha_verifier_factory
  };
}));

//# sourceMappingURL=firebase_auth_web_recaptcha_verifier_factory.dart.lib.js.map
