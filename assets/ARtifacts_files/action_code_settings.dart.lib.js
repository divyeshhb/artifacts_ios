define(['dart_sdk'], (function load__packages__firebase_auth_platform_interface__src__action_code_settings_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var action_code_settings = Object.create(dart.library);
  var $_get = dartx._get;
  var $toString = dartx.toString;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(false);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var ActionCodeSettingsL = () => (ActionCodeSettingsL = dart.constFn(dart.legacy(action_code_settings.ActionCodeSettings)))();
  const CT = Object.create(null);
  var L1 = "package:firebase_auth_platform_interface/src/action_code_settings.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_auth_platform_interface-2.1.2/lib/src/action_code_settings.dart";
  var android$ = dart.privateName(action_code_settings, "ActionCodeSettings.android");
  var androidPackageName$ = dart.privateName(action_code_settings, "ActionCodeSettings.androidPackageName");
  var androidMinimumVersion$ = dart.privateName(action_code_settings, "ActionCodeSettings.androidMinimumVersion");
  var androidInstallApp$ = dart.privateName(action_code_settings, "ActionCodeSettings.androidInstallApp");
  var iOSBundleId$ = dart.privateName(action_code_settings, "ActionCodeSettings.iOSBundleId");
  var dynamicLinkDomain$ = dart.privateName(action_code_settings, "ActionCodeSettings.dynamicLinkDomain");
  var handleCodeInApp$ = dart.privateName(action_code_settings, "ActionCodeSettings.handleCodeInApp");
  var iOS$ = dart.privateName(action_code_settings, "ActionCodeSettings.iOS");
  var url$ = dart.privateName(action_code_settings, "ActionCodeSettings.url");
  action_code_settings.ActionCodeSettings = class ActionCodeSettings extends core.Object {
    get android() {
      return this[android$];
    }
    set android(value) {
      this[android$] = value;
    }
    get androidPackageName() {
      return this[androidPackageName$];
    }
    set androidPackageName(value) {
      super.androidPackageName = value;
    }
    get androidMinimumVersion() {
      return this[androidMinimumVersion$];
    }
    set androidMinimumVersion(value) {
      super.androidMinimumVersion = value;
    }
    get androidInstallApp() {
      return this[androidInstallApp$];
    }
    set androidInstallApp(value) {
      super.androidInstallApp = value;
    }
    get iOSBundleId() {
      return this[iOSBundleId$];
    }
    set iOSBundleId(value) {
      super.iOSBundleId = value;
    }
    get dynamicLinkDomain() {
      return this[dynamicLinkDomain$];
    }
    set dynamicLinkDomain(value) {
      super.dynamicLinkDomain = value;
    }
    get handleCodeInApp() {
      return this[handleCodeInApp$];
    }
    set handleCodeInApp(value) {
      super.handleCodeInApp = value;
    }
    get iOS() {
      return this[iOS$];
    }
    set iOS(value) {
      this[iOS$] = value;
    }
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    asMap() {
      let t0, t1, t0$, t0$0;
      this.android == null ? this.android = new (IdentityMapOfStringL$dynamic()).new() : null;
      this.iOS == null ? this.iOS = new (IdentityMapOfStringL$dynamic()).new() : null;
      let androidMap = null;
      let iOSMap = null;
      if (this.androidPackageName != null || this.android[$_get]("packageName") != null) {
        androidMap = new (IdentityMapOfStringL$dynamic()).new();
        androidMap[$_set]("packageName", (t0 = this.androidPackageName, t0 == null ? dart.toString(this.android[$_get]("packageName")) : t0));
        androidMap[$_set]("minimumVersion", (t0$ = this.androidMinimumVersion, t0$ == null ? (t1 = this.android[$_get]("minimumVersion"), t1 == null ? null : dart.toString(t1)) : t0$));
        androidMap[$_set]("installApp", this.androidInstallApp);
        if (androidMap[$_get]("installApp") == null && boolL().is(this.android[$_get]("installApp"))) {
          androidMap[$_set]("installApp", this.android[$_get]("installApp"));
        }
      }
      if (this.iOSBundleId != null || this.iOS[$_get]("bundleId") != null) {
        iOSMap = new (IdentityMapOfStringL$dynamic()).new();
        iOSMap[$_set]("bundleId", (t0$0 = this.iOSBundleId, t0$0 == null ? dart.toString(this.iOS[$_get]("bundleId")) : t0$0));
      }
      return new (IdentityMapOfStringL$dynamic()).from(["url", this.url, "dynamicLinkDomain", this.dynamicLinkDomain, "handleCodeInApp", this.handleCodeInApp, "android", androidMap, "iOS", iOSMap]);
    }
    toString() {
      return dart.str(dart.wrapType(ActionCodeSettingsL())) + "(" + dart.str(dart.bind(this, 'asMap')) + ")";
    }
  };
  (action_code_settings.ActionCodeSettings.new = function(opts) {
    let android = opts && 'android' in opts ? opts.android : null;
    let androidPackageName = opts && 'androidPackageName' in opts ? opts.androidPackageName : null;
    let androidMinimumVersion = opts && 'androidMinimumVersion' in opts ? opts.androidMinimumVersion : null;
    let androidInstallApp = opts && 'androidInstallApp' in opts ? opts.androidInstallApp : null;
    let dynamicLinkDomain = opts && 'dynamicLinkDomain' in opts ? opts.dynamicLinkDomain : null;
    let handleCodeInApp = opts && 'handleCodeInApp' in opts ? opts.handleCodeInApp : null;
    let iOS = opts && 'iOS' in opts ? opts.iOS : null;
    let iOSBundleId = opts && 'iOSBundleId' in opts ? opts.iOSBundleId : null;
    let url = opts && 'url' in opts ? opts.url : null;
    this[android$] = android;
    this[androidPackageName$] = androidPackageName;
    this[androidMinimumVersion$] = androidMinimumVersion;
    this[androidInstallApp$] = androidInstallApp;
    this[dynamicLinkDomain$] = dynamicLinkDomain;
    this[handleCodeInApp$] = handleCodeInApp;
    this[iOS$] = iOS;
    this[iOSBundleId$] = iOSBundleId;
    this[url$] = url;
    if (!(url != null)) dart.assertFailed(null, L0, 27, 15, "url != null");
    ;
  }).prototype = action_code_settings.ActionCodeSettings.prototype;
  dart.addTypeTests(action_code_settings.ActionCodeSettings);
  dart.addTypeCaches(action_code_settings.ActionCodeSettings);
  dart.setMethodSignature(action_code_settings.ActionCodeSettings, () => ({
    __proto__: dart.getMethods(action_code_settings.ActionCodeSettings.__proto__),
    asMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(action_code_settings.ActionCodeSettings, L1);
  dart.setFieldSignature(action_code_settings.ActionCodeSettings, () => ({
    __proto__: dart.getFields(action_code_settings.ActionCodeSettings.__proto__),
    android: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))),
    androidPackageName: dart.finalFieldType(dart.legacy(core.String)),
    androidMinimumVersion: dart.finalFieldType(dart.legacy(core.String)),
    androidInstallApp: dart.finalFieldType(dart.legacy(core.bool)),
    iOSBundleId: dart.finalFieldType(dart.legacy(core.String)),
    dynamicLinkDomain: dart.finalFieldType(dart.legacy(core.String)),
    handleCodeInApp: dart.finalFieldType(dart.legacy(core.bool)),
    iOS: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))),
    url: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(action_code_settings.ActionCodeSettings, ['toString']);
  dart.trackLibraries("packages/firebase_auth_platform_interface/src/action_code_settings.dart", {
    "package:firebase_auth_platform_interface/src/action_code_settings.dart": action_code_settings
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["action_code_settings.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;IA+BuB;;;;;;IAGR;;;;;;IAOA;;;;;;IAIF;;;;;;IAGE;;;;;;IAGA;;;;;;IAKF;;;;;;IAIU;;;;;;IAGR;;;;;;;;AAKG,MAAd,AAAQ,gBAAA,OAAR,eAAY,6CAAJ;AAEE,MAAV,AAAI,YAAA,OAAJ,WAAQ,6CAAJ;AAEiB;AACA;AAGrB,UAAI,2BAAsB,QAAQ,AAAO,oBAAC,kBAAkB;AAC3C,QAAf,aAAa;AAG8C,QAF3D,AAAU,UAAA,QAAC,gBAEY,oCAAnB,OAA6C,cAAvB,AAAO,oBAAC;AAGgC,QAFlE,AAAU,UAAA,QAAC,mBAEe,yCAAtB,aAAyB,AAAO,oBAAC,gCAAD,OAAoB;AACZ,QAA5C,AAAU,UAAA,QAAC,cAAgB;AAG3B,YAAI,AAAU,AAAe,UAAf,QAAC,iBAAiB,QAA8B,WAAtB,AAAO,oBAAC;AAEE,UAAhD,AAAU,UAAA,QAAC,cAAgB,AAAO,oBAAC;;;AAKvC,UAAI,oBAAe,QAAQ,AAAG,gBAAC,eAAe;AACjC,QAAX,SAAS;AAEqD,QAA9D,AAAM,MAAA,QAAC,aAA0B,iCAAZ,OAA+B,cAAhB,AAAG,gBAAC;;AAG1C,YAAwB,4CACtB,OAAO,UACP,qBAAqB,wBACrB,mBAAmB,sBACnB,WAAW,UAAU,EACrB,OAAO,MAAM;IAEjB;;AAIE,YAAoC,UAA3B,wCAAkB,yBAAE,kBAAK;IACpC;;;QAlGW;QACJ;QACA;QACA;QACA;QACA;QAGI;QACJ;QAEI;IAXA;IACJ;IACA;IACA;IACA;IACA;IAGI;IACJ;IAEI;UACC,AAAI,GAAD,IAAI;;EAAK","file":"../../../../../../../../../../../packages/firebase_auth_platform_interface/src/action_code_settings.dart.lib.js"}');
  // Exports:
  return {
    src__action_code_settings: action_code_settings
  };
}));

//# sourceMappingURL=action_code_settings.dart.lib.js.map
