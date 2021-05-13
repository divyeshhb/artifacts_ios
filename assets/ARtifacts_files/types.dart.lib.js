define(['dart_sdk', 'packages/quiver/src/core/hash.dart'], (function load__packages__google_sign_in_platform_interface__src__types_dart(dart_sdk, packages__quiver__src__core__hash$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hash = packages__quiver__src__core__hash$46dart.src__core__hash;
  var types = Object.create(dart.library);
  var $toString = dartx.toString;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(false);
  var SignInOptionL = () => (SignInOptionL = dart.constFn(dart.legacy(types.SignInOption)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var GoogleSignInUserDataL = () => (GoogleSignInUserDataL = dart.constFn(dart.legacy(types.GoogleSignInUserData)))();
  var GoogleSignInTokenDataL = () => (GoogleSignInTokenDataL = dart.constFn(dart.legacy(types.GoogleSignInTokenData)))();
  const CT = Object.create(null);
  var L0 = "package:google_sign_in_platform_interface/src/types.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: types.SignInOption.prototype,
        [_name$]: "SignInOption.standard",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: types.SignInOption.prototype,
        [_name$]: "SignInOption.games",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], SignInOptionL());
    }
  }, false);
  var _name$ = dart.privateName(types, "_name");
  var C0;
  var C1;
  var C2;
  types.SignInOption = class SignInOption extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (types.SignInOption.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = types.SignInOption.prototype;
  dart.addTypeTests(types.SignInOption);
  dart.addTypeCaches(types.SignInOption);
  dart.setMethodSignature(types.SignInOption, () => ({
    __proto__: dart.getMethods(types.SignInOption.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(types.SignInOption, L0);
  dart.setFieldSignature(types.SignInOption, () => ({
    __proto__: dart.getFields(types.SignInOption.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(types.SignInOption, ['toString']);
  types.SignInOption.standard = C0 || CT.C0;
  types.SignInOption.games = C1 || CT.C1;
  types.SignInOption.values = C2 || CT.C2;
  var displayName$ = dart.privateName(types, "GoogleSignInUserData.displayName");
  var email$ = dart.privateName(types, "GoogleSignInUserData.email");
  var id$ = dart.privateName(types, "GoogleSignInUserData.id");
  var photoUrl$ = dart.privateName(types, "GoogleSignInUserData.photoUrl");
  var idToken$ = dart.privateName(types, "GoogleSignInUserData.idToken");
  types.GoogleSignInUserData = class GoogleSignInUserData extends core.Object {
    get displayName() {
      return this[displayName$];
    }
    set displayName(value) {
      this[displayName$] = value;
    }
    get email() {
      return this[email$];
    }
    set email(value) {
      this[email$] = value;
    }
    get id() {
      return this[id$];
    }
    set id(value) {
      this[id$] = value;
    }
    get photoUrl() {
      return this[photoUrl$];
    }
    set photoUrl(value) {
      this[photoUrl$] = value;
    }
    get idToken() {
      return this[idToken$];
    }
    set idToken(value) {
      this[idToken$] = value;
    }
    get hashCode() {
      return hash.hashObjects(JSArrayOfStringL().of([this.displayName, this.email, this.id, this.photoUrl, this.idToken]));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!GoogleSignInUserDataL().is(other)) return false;
      let otherUserData = GoogleSignInUserDataL().as(other);
      return otherUserData.displayName == this.displayName && otherUserData.email == this.email && otherUserData.id == this.id && otherUserData.photoUrl == this.photoUrl && otherUserData.idToken == this.idToken;
    }
  };
  (types.GoogleSignInUserData.new = function(opts) {
    let displayName = opts && 'displayName' in opts ? opts.displayName : null;
    let email = opts && 'email' in opts ? opts.email : null;
    let id = opts && 'id' in opts ? opts.id : null;
    let photoUrl = opts && 'photoUrl' in opts ? opts.photoUrl : null;
    let idToken = opts && 'idToken' in opts ? opts.idToken : null;
    this[displayName$] = displayName;
    this[email$] = email;
    this[id$] = id;
    this[photoUrl$] = photoUrl;
    this[idToken$] = idToken;
    ;
  }).prototype = types.GoogleSignInUserData.prototype;
  dart.addTypeTests(types.GoogleSignInUserData);
  dart.addTypeCaches(types.GoogleSignInUserData);
  dart.setMethodSignature(types.GoogleSignInUserData, () => ({
    __proto__: dart.getMethods(types.GoogleSignInUserData.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic])
  }));
  dart.setGetterSignature(types.GoogleSignInUserData, () => ({
    __proto__: dart.getGetters(types.GoogleSignInUserData.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(types.GoogleSignInUserData, L0);
  dart.setFieldSignature(types.GoogleSignInUserData, () => ({
    __proto__: dart.getFields(types.GoogleSignInUserData.__proto__),
    displayName: dart.fieldType(dart.legacy(core.String)),
    email: dart.fieldType(dart.legacy(core.String)),
    id: dart.fieldType(dart.legacy(core.String)),
    photoUrl: dart.fieldType(dart.legacy(core.String)),
    idToken: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(types.GoogleSignInUserData, ['_equals']);
  dart.defineExtensionAccessors(types.GoogleSignInUserData, ['hashCode']);
  var idToken$0 = dart.privateName(types, "GoogleSignInTokenData.idToken");
  var accessToken$ = dart.privateName(types, "GoogleSignInTokenData.accessToken");
  var serverAuthCode$ = dart.privateName(types, "GoogleSignInTokenData.serverAuthCode");
  types.GoogleSignInTokenData = class GoogleSignInTokenData extends core.Object {
    get idToken() {
      return this[idToken$0];
    }
    set idToken(value) {
      this[idToken$0] = value;
    }
    get accessToken() {
      return this[accessToken$];
    }
    set accessToken(value) {
      this[accessToken$] = value;
    }
    get serverAuthCode() {
      return this[serverAuthCode$];
    }
    set serverAuthCode(value) {
      this[serverAuthCode$] = value;
    }
    get hashCode() {
      return hash.hash3(this.idToken, this.accessToken, this.serverAuthCode);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!GoogleSignInTokenDataL().is(other)) return false;
      let otherTokenData = GoogleSignInTokenDataL().as(other);
      return otherTokenData.idToken == this.idToken && otherTokenData.accessToken == this.accessToken && otherTokenData.serverAuthCode == this.serverAuthCode;
    }
  };
  (types.GoogleSignInTokenData.new = function(opts) {
    let idToken = opts && 'idToken' in opts ? opts.idToken : null;
    let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
    let serverAuthCode = opts && 'serverAuthCode' in opts ? opts.serverAuthCode : null;
    this[idToken$0] = idToken;
    this[accessToken$] = accessToken;
    this[serverAuthCode$] = serverAuthCode;
    ;
  }).prototype = types.GoogleSignInTokenData.prototype;
  dart.addTypeTests(types.GoogleSignInTokenData);
  dart.addTypeCaches(types.GoogleSignInTokenData);
  dart.setMethodSignature(types.GoogleSignInTokenData, () => ({
    __proto__: dart.getMethods(types.GoogleSignInTokenData.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic])
  }));
  dart.setGetterSignature(types.GoogleSignInTokenData, () => ({
    __proto__: dart.getGetters(types.GoogleSignInTokenData.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(types.GoogleSignInTokenData, L0);
  dart.setFieldSignature(types.GoogleSignInTokenData, () => ({
    __proto__: dart.getFields(types.GoogleSignInTokenData.__proto__),
    idToken: dart.fieldType(dart.legacy(core.String)),
    accessToken: dart.fieldType(dart.legacy(core.String)),
    serverAuthCode: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(types.GoogleSignInTokenData, ['_equals']);
  dart.defineExtensionAccessors(types.GoogleSignInTokenData, ['hashCode']);
  dart.trackLibraries("packages/google_sign_in_platform_interface/src/types.dart", {
    "package:google_sign_in_platform_interface/src/types.dart": types
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["types.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsBA;;4CAbK;;;;EAaL;;;;;;;;;;;;;;;;;;;;;;;;IAYS;;;;;;IAUA;;;;;;IASA;;;;;;IAKA;;;;;;IAIA;;;;;;;AAIH,8BAAoB,uBAAC,kBAAa,YAAO,SAAI,eAAU;IAAS;;UAG3C;AACvB,UAAI,AAAU,SAAM,KAAK,EAAG,MAAO;AACnC,WAAU,2BAAN,KAAK,GAA2B,MAAO;AAChB,qDAAgB,KAAK;AAChD,YAAO,AAAc,AAAY,AAGM,cAHnB,gBAAgB,oBAChC,AAAc,AAAM,aAAP,UAAU,cACvB,AAAc,AAAG,aAAJ,OAAO,WACpB,AAAc,AAAS,aAAV,aAAa,iBAC1B,AAAc,AAAQ,aAAT,YAAY;IAC/B;;;QAjDU;QAAkB;QAAY;QAAS;QAAe;IAAtD;IAAkB;IAAY;IAAS;IAAe;;EAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA8DlE;;;;;;IAGA;;;;;;IAGA;;;;;;;AAGa,wBAAM,cAAS,kBAAa;IAAe;;UAGtC;AACvB,UAAI,AAAU,SAAM,KAAK,EAAG,MAAO;AACnC,WAAU,4BAAN,KAAK,GAA4B,MAAO;AAChB,uDAAiB,KAAK;AAClD,YAAO,AAAe,AAAQ,AACgB,eADzB,YAAY,gBAC7B,AAAe,AAAY,cAAb,gBAAgB,oBAC9B,AAAe,AAAe,cAAhB,mBAAmB;IACvC;;;QAzBO;QACA;QACA;IAFA;IACA;IACA;;EACL","file":"../../../../../../../../../../../packages/google_sign_in_platform_interface/src/types.dart.lib.js"}');
  // Exports:
  return {
    src__types: types
  };
}));

//# sourceMappingURL=types.dart.lib.js.map
