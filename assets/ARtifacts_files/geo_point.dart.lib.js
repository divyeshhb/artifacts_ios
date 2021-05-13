define(['dart_sdk'], (function load__packages__cloud_firestore_platform_interface__src__geo_point_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var geo_point = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $hashCode = dartx.hashCode;
  dart._checkModuleNullSafetyMode(false);
  var GeoPointL = () => (GeoPointL = dart.constFn(dart.legacy(geo_point.GeoPoint)))();
  const CT = Object.create(null);
  var L1 = "package:cloud_firestore_platform_interface/src/geo_point.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/cloud_firestore_platform_interface-2.1.3/lib/src/geo_point.dart";
  var latitude$ = dart.privateName(geo_point, "GeoPoint.latitude");
  var longitude$ = dart.privateName(geo_point, "GeoPoint.longitude");
  geo_point.GeoPoint = class GeoPoint extends core.Object {
    get latitude() {
      return this[latitude$];
    }
    set latitude(value) {
      super.latitude = value;
    }
    get longitude() {
      return this[longitude$];
    }
    set longitude(value) {
      super.longitude = value;
    }
    _equals(o) {
      if (o == null) return false;
      return GeoPointL().is(o) && o.latitude == this.latitude && o.longitude == this.longitude;
    }
    get hashCode() {
      return ui.hashValues(this.latitude, this.longitude);
    }
  };
  (geo_point.GeoPoint.new = function(latitude, longitude) {
    this[latitude$] = latitude;
    this[longitude$] = longitude;
    if (!(dart.notNull(latitude) >= -90 && dart.notNull(latitude) <= 90)) dart.assertFailed(null, L0, 10, 16, "latitude >= -90 && latitude <= 90");
    if (!(dart.notNull(longitude) >= -180 && dart.notNull(longitude) <= 180)) dart.assertFailed(null, L0, 11, 16, "longitude >= -180 && longitude <= 180");
    ;
  }).prototype = geo_point.GeoPoint.prototype;
  dart.addTypeTests(geo_point.GeoPoint);
  dart.addTypeCaches(geo_point.GeoPoint);
  dart.setMethodSignature(geo_point.GeoPoint, () => ({
    __proto__: dart.getMethods(geo_point.GeoPoint.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic])
  }));
  dart.setGetterSignature(geo_point.GeoPoint, () => ({
    __proto__: dart.getGetters(geo_point.GeoPoint.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(geo_point.GeoPoint, L1);
  dart.setFieldSignature(geo_point.GeoPoint, () => ({
    __proto__: dart.getFields(geo_point.GeoPoint.__proto__),
    latitude: dart.finalFieldType(dart.legacy(core.double)),
    longitude: dart.finalFieldType(dart.legacy(core.double))
  }));
  dart.defineExtensionMethods(geo_point.GeoPoint, ['_equals']);
  dart.defineExtensionAccessors(geo_point.GeoPoint, ['hashCode']);
  dart.trackLibraries("packages/cloud_firestore_platform_interface/src/geo_point.dart", {
    "package:cloud_firestore_platform_interface/src/geo_point.dart": geo_point
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["geo_point.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IAYe;;;;;;IACA;;;;;;;UAGY;AACrB,YAAE,AAAsC,gBAAxC,CAAC,KAAgB,AAAE,AAAS,CAAV,aAAa,iBAAY,AAAE,AAAU,CAAX,cAAc;IAAS;;AAGnD,2BAAW,eAAU;IAAU;;qCAZ/B,UAAe;IAAf;IAAe;UACb,AAAO,aAAhB,QAAQ,KAAI,CAAC,MAAe,aAAT,QAAQ,KAAI;UACrB,AAAQ,aAAlB,SAAS,KAAI,CAAC,OAAiB,aAAV,SAAS,KAAI;;EAAI","file":"../../../../../../../../../../../packages/cloud_firestore_platform_interface/src/geo_point.dart.lib.js"}');
  // Exports:
  return {
    src__geo_point: geo_point
  };
}));

//# sourceMappingURL=geo_point.dart.lib.js.map
