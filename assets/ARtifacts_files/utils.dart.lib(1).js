define(['dart_sdk', 'packages/google_sign_in_platform_interface/src/types.dart', 'packages/flutter/src/services/system_channels.dart'], (function load__packages__google_sign_in_platform_interface__src__utils_dart(dart_sdk, packages__google_sign_in_platform_interface__src__types$46dart, packages__flutter__src__services__system_channels$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const types = packages__google_sign_in_platform_interface__src__types$46dart.src__types;
  const platform_channel = packages__flutter__src__services__system_channels$46dart.src__services__platform_channel;
  const message_codecs = packages__flutter__src__services__system_channels$46dart.src__services__message_codecs;
  var utils = Object.create(dart.library);
  var method_channel_google_sign_in = Object.create(dart.library);
  var google_sign_in_platform_interface = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var GoogleSignInUserDataL = () => (GoogleSignInUserDataL = dart.constFn(dart.legacy(types.GoogleSignInUserData)))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(StringL(), dart.dynamic)))();
  var MapLOfStringL$dynamic = () => (MapLOfStringL$dynamic = dart.constFn(dart.legacy(MapOfStringL$dynamic())))();
  var MapLOfStringL$dynamicToGoogleSignInUserDataL = () => (MapLOfStringL$dynamicToGoogleSignInUserDataL = dart.constFn(dart.fnType(GoogleSignInUserDataL(), [MapLOfStringL$dynamic()])))();
  var GoogleSignInTokenDataL = () => (GoogleSignInTokenDataL = dart.constFn(dart.legacy(types.GoogleSignInTokenData)))();
  var MapLOfStringL$dynamicToGoogleSignInTokenDataL = () => (MapLOfStringL$dynamicToGoogleSignInTokenDataL = dart.constFn(dart.fnType(GoogleSignInTokenDataL(), [MapLOfStringL$dynamic()])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(StringL())))();
  var ListLOfStringL = () => (ListLOfStringL = dart.constFn(dart.legacy(ListOfStringL())))();
  var IdentityMapOfStringL$ListLOfStringL = () => (IdentityMapOfStringL$ListLOfStringL = dart.constFn(_js_helper.IdentityMap$(StringL(), ListLOfStringL())))();
  var NoSuchMethodErrorL = () => (NoSuchMethodErrorL = dart.constFn(dart.legacy(core.NoSuchMethodError)))();
  const CT = Object.create(null);
  var L1 = "package:google_sign_in_platform_interface/src/method_channel_google_sign_in.dart";
  var L0 = "package:google_sign_in_platform_interface/google_sign_in_platform_interface.dart";
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
        [MethodChannel_name]: "plugins.flutter.io/google_sign_in"
      });
    },
    get C3() {
      return C3 = dart.constList([], StringL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: types.SignInOption.prototype,
        [_name]: "SignInOption.standard",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.fn(utils.getUserDataFromMap, MapLOfStringL$dynamicToGoogleSignInUserDataL());
    },
    get C6() {
      return C6 = dart.fn(utils.getTokenDataFromMap, MapLOfStringL$dynamicToGoogleSignInTokenDataL());
    }
  }, false);
  utils.getUserDataFromMap = function getUserDataFromMap(data) {
    if (data == null) {
      return null;
    }
    return new types.GoogleSignInUserData.new({displayName: StringL().as(data[$_get]("displayName")), email: StringL().as(data[$_get]("email")), id: StringL().as(data[$_get]("id")), photoUrl: StringL().as(data[$_get]("photoUrl")), idToken: StringL().as(data[$_get]("idToken"))});
  };
  utils.getTokenDataFromMap = function getTokenDataFromMap(data) {
    if (data == null) {
      return null;
    }
    return new types.GoogleSignInTokenData.new({idToken: StringL().as(data[$_get]("idToken")), accessToken: StringL().as(data[$_get]("accessToken")), serverAuthCode: StringL().as(data[$_get]("serverAuthCode"))});
  };
  var MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  var C2;
  var StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  var C1;
  var MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  var MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  var C0;
  var C3;
  var _name = dart.privateName(types, "_name");
  var C4;
  var C5;
  var C6;
  var _verifyProvidesDefaultImplementations = dart.privateName(google_sign_in_platform_interface, "_verifyProvidesDefaultImplementations");
  google_sign_in_platform_interface.GoogleSignInPlatform = class GoogleSignInPlatform extends core.Object {
    get isMock() {
      return false;
    }
    static get instance() {
      return google_sign_in_platform_interface.GoogleSignInPlatform._instance;
    }
    static set instance(instance) {
      if (!dart.test(instance.isMock)) {
        try {
          instance[_verifyProvidesDefaultImplementations]();
        } catch (e) {
          let _ = dart.getThrown(e);
          if (NoSuchMethodErrorL().is(_)) {
            dart.throw(new core.AssertionError.new("Platform interfaces must not be implemented with `implements`"));
          } else
            throw e;
        }
      }
      google_sign_in_platform_interface.GoogleSignInPlatform._instance = instance;
    }
    [_verifyProvidesDefaultImplementations]() {
    }
    init(opts) {
      let hostedDomain = opts && 'hostedDomain' in opts ? opts.hostedDomain : null;
      let scopes = opts && 'scopes' in opts ? opts.scopes : null;
      let signInOption = opts && 'signInOption' in opts ? opts.signInOption : null;
      let clientId = opts && 'clientId' in opts ? opts.clientId : null;
      return async.async(dart.void, function* init() {
        dart.throw(new core.UnimplementedError.new("init() has not been implemented."));
      });
    }
    signInSilently() {
      return async.async(GoogleSignInUserDataL(), function* signInSilently() {
        dart.throw(new core.UnimplementedError.new("signInSilently() has not been implemented."));
      });
    }
    signIn() {
      return async.async(GoogleSignInUserDataL(), function* signIn() {
        dart.throw(new core.UnimplementedError.new("signIn() has not been implemented."));
      });
    }
    getTokens(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let shouldRecoverAuth = opts && 'shouldRecoverAuth' in opts ? opts.shouldRecoverAuth : null;
      return async.async(GoogleSignInTokenDataL(), function* getTokens() {
        dart.throw(new core.UnimplementedError.new("getTokens() has not been implemented."));
      });
    }
    signOut() {
      return async.async(dart.void, function* signOut() {
        dart.throw(new core.UnimplementedError.new("signOut() has not been implemented."));
      });
    }
    disconnect() {
      return async.async(dart.void, function* disconnect() {
        dart.throw(new core.UnimplementedError.new("disconnect() has not been implemented."));
      });
    }
    isSignedIn() {
      return async.async(boolL(), function* isSignedIn() {
        dart.throw(new core.UnimplementedError.new("isSignedIn() has not been implemented."));
      });
    }
    clearAuthCache(opts) {
      let token = opts && 'token' in opts ? opts.token : null;
      return async.async(dart.void, function* clearAuthCache() {
        dart.throw(new core.UnimplementedError.new("clearAuthCache() has not been implemented."));
      });
    }
    requestScopes(scopes) {
      return async.async(boolL(), function* requestScopes() {
        dart.throw(new core.UnimplementedError.new("requestScopes() has not been implmented."));
      });
    }
  };
  (google_sign_in_platform_interface.GoogleSignInPlatform.new = function() {
    ;
  }).prototype = google_sign_in_platform_interface.GoogleSignInPlatform.prototype;
  dart.addTypeTests(google_sign_in_platform_interface.GoogleSignInPlatform);
  dart.addTypeCaches(google_sign_in_platform_interface.GoogleSignInPlatform);
  dart.setMethodSignature(google_sign_in_platform_interface.GoogleSignInPlatform, () => ({
    __proto__: dart.getMethods(google_sign_in_platform_interface.GoogleSignInPlatform.__proto__),
    [_verifyProvidesDefaultImplementations]: dart.fnType(dart.void, []),
    init: dart.fnType(dart.legacy(async.Future$(dart.void)), [], {clientId: dart.legacy(core.String), hostedDomain: dart.legacy(core.String), scopes: dart.legacy(core.List$(dart.legacy(core.String))), signInOption: dart.legacy(types.SignInOption)}, {}),
    signInSilently: dart.fnType(dart.legacy(async.Future$(dart.legacy(types.GoogleSignInUserData))), []),
    signIn: dart.fnType(dart.legacy(async.Future$(dart.legacy(types.GoogleSignInUserData))), []),
    getTokens: dart.fnType(dart.legacy(async.Future$(dart.legacy(types.GoogleSignInTokenData))), [], {email: dart.legacy(core.String), shouldRecoverAuth: dart.legacy(core.bool)}, {}),
    signOut: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    disconnect: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    isSignedIn: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), []),
    clearAuthCache: dart.fnType(dart.legacy(async.Future$(dart.void)), [], {token: dart.legacy(core.String)}, {}),
    requestScopes: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.List$(dart.legacy(core.String)))])
  }));
  dart.setGetterSignature(google_sign_in_platform_interface.GoogleSignInPlatform, () => ({
    __proto__: dart.getGetters(google_sign_in_platform_interface.GoogleSignInPlatform.__proto__),
    isMock: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(google_sign_in_platform_interface.GoogleSignInPlatform, L0);
  dart.defineLazy(google_sign_in_platform_interface.GoogleSignInPlatform, {
    /*google_sign_in_platform_interface.GoogleSignInPlatform._instance*/get _instance() {
      return new method_channel_google_sign_in.MethodChannelGoogleSignIn.new();
    },
    set _instance(_) {}
  }, true);
  var channel = dart.privateName(method_channel_google_sign_in, "MethodChannelGoogleSignIn.channel");
  method_channel_google_sign_in.MethodChannelGoogleSignIn = class MethodChannelGoogleSignIn extends google_sign_in_platform_interface.GoogleSignInPlatform {
    get channel() {
      return this[channel];
    }
    set channel(value) {
      this[channel] = value;
    }
    init(opts) {
      let hostedDomain = opts && 'hostedDomain' in opts ? opts.hostedDomain : null;
      let scopes = opts && 'scopes' in opts ? opts.scopes : C3 || CT.C3;
      let signInOption = opts && 'signInOption' in opts ? opts.signInOption : C4 || CT.C4;
      let clientId = opts && 'clientId' in opts ? opts.clientId : null;
      return this.channel.invokeMethod(dart.void, "init", new (IdentityMapOfStringL$dynamic()).from(["signInOption", dart.toString(signInOption), "scopes", scopes, "hostedDomain", hostedDomain]));
    }
    signInSilently() {
      return this.channel.invokeMapMethod(StringL(), dart.dynamic, "signInSilently").then(GoogleSignInUserDataL(), C5 || CT.C5);
    }
    signIn() {
      return this.channel.invokeMapMethod(StringL(), dart.dynamic, "signIn").then(GoogleSignInUserDataL(), C5 || CT.C5);
    }
    getTokens(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let shouldRecoverAuth = opts && 'shouldRecoverAuth' in opts ? opts.shouldRecoverAuth : true;
      return this.channel.invokeMapMethod(StringL(), dart.dynamic, "getTokens", new (IdentityMapOfStringL$dynamic()).from(["email", email, "shouldRecoverAuth", shouldRecoverAuth])).then(GoogleSignInTokenDataL(), C6 || CT.C6);
    }
    signOut() {
      return this.channel.invokeMapMethod(StringL(), dart.dynamic, "signOut");
    }
    disconnect() {
      return this.channel.invokeMapMethod(StringL(), dart.dynamic, "disconnect");
    }
    isSignedIn() {
      return this.channel.invokeMethod(boolL(), "isSignedIn");
    }
    clearAuthCache(opts) {
      let token = opts && 'token' in opts ? opts.token : null;
      return this.channel.invokeMethod(dart.void, "clearAuthCache", new (IdentityMapOfStringL$StringL()).from(["token", token]));
    }
    requestScopes(scopes) {
      return this.channel.invokeMethod(boolL(), "requestScopes", new (IdentityMapOfStringL$ListLOfStringL()).from(["scopes", scopes]));
    }
  };
  (method_channel_google_sign_in.MethodChannelGoogleSignIn.new = function() {
    this[channel] = C0 || CT.C0;
    ;
  }).prototype = method_channel_google_sign_in.MethodChannelGoogleSignIn.prototype;
  dart.addTypeTests(method_channel_google_sign_in.MethodChannelGoogleSignIn);
  dart.addTypeCaches(method_channel_google_sign_in.MethodChannelGoogleSignIn);
  dart.setLibraryUri(method_channel_google_sign_in.MethodChannelGoogleSignIn, L1);
  dart.setFieldSignature(method_channel_google_sign_in.MethodChannelGoogleSignIn, () => ({
    __proto__: dart.getFields(method_channel_google_sign_in.MethodChannelGoogleSignIn.__proto__),
    channel: dart.fieldType(dart.legacy(platform_channel.MethodChannel))
  }));
  dart.trackLibraries("packages/google_sign_in_platform_interface/src/utils.dart", {
    "package:google_sign_in_platform_interface/src/utils.dart": utils,
    "package:google_sign_in_platform_interface/src/method_channel_google_sign_in.dart": method_channel_google_sign_in,
    "package:google_sign_in_platform_interface/google_sign_in_platform_interface.dart": google_sign_in_platform_interface
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart","../google_sign_in_platform_interface.dart","method_channel_google_sign_in.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;yDAO6D;AAC3D,QAAI,AAAK,IAAD,IAAI;AACV,YAAO;;AAET,UAAO,+DACU,AAAI,IAAA,QAAC,qCACX,AAAI,IAAA,QAAC,4BACR,AAAI,IAAA,QAAC,+BACC,AAAI,IAAA,QAAC,oCACN,AAAI,IAAA,QAAC;EACpB;2DAG+D;AAC7D,QAAI,AAAK,IAAD,IAAI;AACV,YAAO;;AAET,UAAO,4DACI,AAAI,IAAA,QAAC,uCACD,AAAI,IAAA,QAAC,8CACF,AAAI,IAAA,QAAC;EAEzB;;;;;;;;;;;;;;;;ACFqB;IAAK;;AASoB;IAAS;wBAMZ;AACvC,qBAAK,AAAS,QAAD;AACX;AACkD,UAAhD,AAAS,QAAD;;cACoB;AAA5B;AAEoE,YADpE,WAAM,4BACF;;;;;AAGY,MAApB,mEAAY,QAAQ;IACtB;;IAS8C;;UAoBxB;UACL;UACA;UACN;AAJM;AAK6C,QAA5D,WAAM,gCAAmB;MAC3B;;;AAG2C;AAC6B,QAAtE,WAAM,gCAAmB;MAC3B;;;AAGmC;AAC6B,QAA9D,WAAM,gCAAmB;MAC3B;;;UAIsB;UAAY;AADK;AAE4B,QAAjE,WAAM,gCAAmB;MAC3B;;;AAGoB;AAC6C,QAA/D,WAAM,gCAAmB;MAC3B;;;AAGuB;AAC6C,QAAlE,WAAM,gCAAmB;MAC3B;;;AAGuB;AAC6C,QAAlE,WAAM,gCAAmB;MAC3B;;;UAG8C;AAAnB;AAC6C,QAAtE,WAAM,gCAAmB;MAC3B;;kBAMwC;AAAd;AAC4C,QAApE,WAAM,gCAAmB;MAC3B;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;MA7F8B,gEAAS;YAAG;;;;;;ICpB1B;;;;;;;UAKQ;UACL;UACA;UACN;AACT,YAAO,AAAQ,sCAAmB,QAAyB,2CACzD,gBAA6B,cAAb,YAAY,GAC5B,UAAU,MAAM,EAChB,gBAAgB,YAAY;IAEhC;;AAIE,YAAO,AACF,AACA,uDADiC;IAExC;;AAIE,YAAO,AACF,AACA,uDADiC;IAExC;;UAIY;UAAY;AACtB,YAAO,AACF,AAGF,uDAHmC,aAA8B,2CAClE,SAAS,KAAK,EACd,qBAAqB,iBAAiB;IAE1C;;AAIE,YAAO,AAAQ,uDAAiC;IAClD;;AAIE,YAAO,AAAQ,uDAAiC;IAClD;;AAIE,YAAO,AAAQ,oCAAmB;IACpC;;UAGoC;AAClC,YAAO,AAAQ,sCACb,kBACgB,2CAAC,SAAS,KAAK;IAEnC;kBAGwC;AACtC,YAAO,AAAQ,oCACb,iBACsB,kDAAC,UAAU,MAAM;IAE3C;;;IArEc;;EAsEhB","file":"../../../../../../../../../../../packages/google_sign_in_platform_interface/src/utils.dart.lib.js"}');
  // Exports:
  return {
    src__utils: utils,
    src__method_channel_google_sign_in: method_channel_google_sign_in,
    google_sign_in_platform_interface: google_sign_in_platform_interface
  };
}));

//# sourceMappingURL=utils.dart.lib.js.map
