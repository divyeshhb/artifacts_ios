define(['dart_sdk', 'packages/google_sign_in_platform_interface/src/types.dart'], (function load__packages__google_sign_in_web__src__utils_dart(dart_sdk, packages__google_sign_in_platform_interface__src__types$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const types = packages__google_sign_in_platform_interface__src__types$46dart.src__types;
  var utils = Object.create(dart.library);
  var $onLoad = dartx.onLoad;
  var $add = dartx.add;
  var $forEach = dartx.forEach;
  var $children = dartx.children;
  var $addAll = dartx.addAll;
  dart._checkModuleNullSafetyMode(false);
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var FutureLOfvoid = () => (FutureLOfvoid = dart.constFn(dart.legacy(FutureOfvoid())))();
  var JSArrayOfFutureLOfvoid = () => (JSArrayOfFutureLOfvoid = dart.constFn(_interceptors.JSArray$(FutureLOfvoid())))();
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var JSArrayOfHtmlElementL = () => (JSArrayOfHtmlElementL = dart.constFn(_interceptors.JSArray$(HtmlElementL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var StringLToNull = () => (StringLToNull = dart.constFn(dart.fnType(core.Null, [StringL()])))();
  const CT = Object.create(null);
  utils.injectJSLibraries = function injectJSLibraries(libraries, opts) {
    let t0;
    let target = opts && 'target' in opts ? opts.target : null;
    let loading = JSArrayOfFutureLOfvoid().of([]);
    let tags = JSArrayOfHtmlElementL().of([]);
    libraries[$forEach](dart.fn(library => {
      let t0;
      let script = (t0 = html.ScriptElement.new(), (() => {
        t0.async = true;
        t0.defer = true;
        t0.src = library;
        return t0;
      })());
      loading[$add](script[$onLoad].first);
      tags[$add](script);
    }, StringLToNull()));
    (t0 = target, t0 == null ? html.querySelector("head") : t0)[$children][$addAll](tags);
    return async.Future.wait(dart.void, loading);
  };
  utils.gapiUserToPluginUserData = function gapiUserToPluginUserData(currentUser) {
    let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6;
    let isSignedIn = (t0$ = (t0 = currentUser, t0 == null ? null : t0.isSignedIn()), t0$ == null ? false : t0$);
    let profile = (t0$0 = currentUser, t0$0 == null ? null : t0$0.getBasicProfile());
    if (!dart.test(isSignedIn) || (t0$1 = profile, t0$1 == null ? null : t0$1.getId()) == null) {
      return null;
    }
    return new types.GoogleSignInUserData.new({displayName: (t0$2 = profile, t0$2 == null ? null : t0$2.getName()), email: (t0$3 = profile, t0$3 == null ? null : t0$3.getEmail()), id: (t0$4 = profile, t0$4 == null ? null : t0$4.getId()), photoUrl: (t0$5 = profile, t0$5 == null ? null : t0$5.getImageUrl()), idToken: (t0$6 = currentUser.getAuthResponse(), t0$6 == null ? null : t0$6.id_token)});
  };
  dart.trackLibraries("packages/google_sign_in_web/src/utils.dart", {
    "package:google_sign_in_web/src/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;uDAa4C;;QACtB;AACK,kBAAwB;AACpB,eAAyB;AAUpD,IARF,AAAU,SAAD,WAAS,QAAQ;;AACC,mDAAc;AACnC,mBAAQ;AACR,mBAAQ;AACR,iBAAM,OAAO;;;AAEe,MAAhC,AAAQ,OAAD,OAAK,AAAO,AAAO,MAAR;AACF,MAAhB,AAAK,IAAD,OAAK,MAAM;;AAE2C,IAArB,AAAS,CAAxC,KAAP,MAAM,QAAN,OAAU,mBAAmB,kCAAyB,IAAI;AAC3D,UAAc,8BAAK,OAAO;EAC5B;qEAK+D;;AAClD,sBAAuC,YAA1B,WAAW,eAAX,OAAa,yBAAb,OAA6B;AAC5B,0BAAU,WAAW,iBAAX,OAAa;AAChD,mBAAK,UAAU,KAAqB,QAAjB,OAAO,iBAAP,OAAS,iBAAW;AACrC,YAAO;;AAET,UAAO,0DACQ,OAAO,iBAAP,OAAS,gCACf,OAAO,iBAAP,OAAS,8BACZ,OAAO,iBAAP,OAAS,iCACH,OAAO,iBAAP,OAAS,sCACV,AAAY,WAAD,mCAAC,OAAmB;EAE5C","file":"../../../../../../../../../../../packages/google_sign_in_web/src/utils.dart.lib.js"}');
  // Exports:
  return {
    src__utils: utils
  };
}));

//# sourceMappingURL=utils.dart.lib.js.map
