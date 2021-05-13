define(['dart_sdk'], (function load__packages__cloud_firestore_platform_interface__src__settings_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var settings = Object.create(dart.library);
  var $toString = dartx.toString;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(false);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var SettingsL = () => (SettingsL = dart.constFn(dart.legacy(settings.Settings)))();
  const CT = Object.create(null);
  var L0 = "package:cloud_firestore_platform_interface/src/settings.dart";
  var persistenceEnabled$ = dart.privateName(settings, "Settings.persistenceEnabled");
  var host$ = dart.privateName(settings, "Settings.host");
  var sslEnabled$ = dart.privateName(settings, "Settings.sslEnabled");
  var cacheSizeBytes$ = dart.privateName(settings, "Settings.cacheSizeBytes");
  settings.Settings = class Settings extends core.Object {
    get persistenceEnabled() {
      return this[persistenceEnabled$];
    }
    set persistenceEnabled(value) {
      super.persistenceEnabled = value;
    }
    get host() {
      return this[host$];
    }
    set host(value) {
      super.host = value;
    }
    get sslEnabled() {
      return this[sslEnabled$];
    }
    set sslEnabled(value) {
      super.sslEnabled = value;
    }
    get cacheSizeBytes() {
      return this[cacheSizeBytes$];
    }
    set cacheSizeBytes(value) {
      super.cacheSizeBytes = value;
    }
    get asMap() {
      return new (IdentityMapOfStringL$dynamic()).from(["persistenceEnabled", this.persistenceEnabled, "host", this.host, "sslEnabled", this.sslEnabled, "cacheSizeBytes", this.cacheSizeBytes]);
    }
    _equals(o) {
      if (o == null) return false;
      return SettingsL().is(o) && dart.toString(o.asMap) == dart.toString(this.asMap);
    }
    get hashCode() {
      return dart.hashCode(this.asMap);
    }
    toString() {
      return "Settings(" + dart.str(dart.toString(this.asMap)) + ")";
    }
  };
  (settings.Settings.new = function(opts) {
    let persistenceEnabled = opts && 'persistenceEnabled' in opts ? opts.persistenceEnabled : null;
    let host = opts && 'host' in opts ? opts.host : null;
    let sslEnabled = opts && 'sslEnabled' in opts ? opts.sslEnabled : null;
    let cacheSizeBytes = opts && 'cacheSizeBytes' in opts ? opts.cacheSizeBytes : null;
    this[persistenceEnabled$] = persistenceEnabled;
    this[host$] = host;
    this[sslEnabled$] = sslEnabled;
    this[cacheSizeBytes$] = cacheSizeBytes;
    ;
  }).prototype = settings.Settings.prototype;
  dart.addTypeTests(settings.Settings);
  dart.addTypeCaches(settings.Settings);
  dart.setMethodSignature(settings.Settings, () => ({
    __proto__: dart.getMethods(settings.Settings.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(settings.Settings, () => ({
    __proto__: dart.getGetters(settings.Settings.__proto__),
    asMap: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(settings.Settings, L0);
  dart.setFieldSignature(settings.Settings, () => ({
    __proto__: dart.getFields(settings.Settings.__proto__),
    persistenceEnabled: dart.finalFieldType(dart.legacy(core.bool)),
    host: dart.finalFieldType(dart.legacy(core.String)),
    sslEnabled: dart.finalFieldType(dart.legacy(core.bool)),
    cacheSizeBytes: dart.finalFieldType(dart.legacy(core.int))
  }));
  dart.defineExtensionMethods(settings.Settings, ['_equals', 'toString']);
  dart.defineExtensionAccessors(settings.Settings, ['hashCode']);
  dart.defineLazy(settings.Settings, {
    /*settings.Settings.CACHE_SIZE_UNLIMITED*/get CACHE_SIZE_UNLIMITED() {
      return -1;
    }
  }, true);
  dart.trackLibraries("packages/cloud_firestore_platform_interface/src/settings.dart", {
    "package:cloud_firestore_platform_interface/src/settings.dart": settings
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["settings.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;IAsBa;;;;;;IAGE;;;;;;IAGF;;;;;;IAWD;;;;;;;AAIR,YAAO,4CACL,sBAAsB,yBACtB,QAAQ,WACR,cAAc,iBACd,kBAAkB;IAEtB;;UAGyB;AACrB,YAAE,AAAY,gBAAd,CAAC,KAAwB,AAAW,cAAnB,AAAE,CAAD,WAA2B,cAAN;IAAgB;;AAGvC,YAAM,eAAN;IAAc;;AAGb,YAAA,AAA+B,wBAAb,cAAN,eAAiB;IAAE;;;QAjD1C;QACD;QACA;QACA;IAHC;IACD;IACA;IACA;;EAAgB;;;;;;;;;;;;;;;;;;;;;;;;;;;MAKR,sCAAoB","file":"../../../../../../../../../../../packages/cloud_firestore_platform_interface/src/settings.dart.lib.js"}');
  // Exports:
  return {
    src__settings: settings
  };
}));

//# sourceMappingURL=settings.dart.lib.js.map
