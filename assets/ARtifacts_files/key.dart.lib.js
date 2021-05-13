define(['dart_sdk'], (function load__packages__flutter__src__foundation__key_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var key = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "package:flutter/src/foundation/key.dart";
  key.Key = class Key extends core.Object {};
  (key.Key.empty = function() {
    ;
  }).prototype = key.Key.prototype;
  dart.addTypeTests(key.Key);
  dart.addTypeCaches(key.Key);
  dart.setLibraryUri(key.Key, L0);
  key.LocalKey = class LocalKey extends key.Key {};
  (key.LocalKey.new = function() {
    key.LocalKey.__proto__.empty.call(this);
    ;
  }).prototype = key.LocalKey.prototype;
  dart.addTypeTests(key.LocalKey);
  dart.addTypeCaches(key.LocalKey);
  dart.setLibraryUri(key.LocalKey, L0);
  const _is_ValueKey_default = Symbol('_is_ValueKey_default');
  var value$ = dart.privateName(key, "ValueKey.value");
  key.ValueKey$ = dart.generic(T => {
    var ValueKeyOfT = () => (ValueKeyOfT = dart.constFn(key.ValueKey$(T)))();
    var _TypeLiteralOfValueKeyOfT = () => (_TypeLiteralOfValueKeyOfT = dart.constFn(key._TypeLiteral$(ValueKeyOfT())))();
    class ValueKey extends key.LocalKey {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      _equals(other) {
        if (other == null) return false;
        if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
        return ValueKeyOfT().is(other) && dart.equals(other.value, this.value);
      }
      get hashCode() {
        return ui.hashValues(this[$runtimeType], this.value);
      }
      toString() {
        let valueString = dart.wrapType(T)._equals(dart.wrapType(core.String)) ? "<'" + dart.str(this.value) + "'>" : "<" + dart.str(this.value) + ">";
        if (dart.equals(this[$runtimeType], new (_TypeLiteralOfValueKeyOfT()).new().type)) return "[" + valueString + "]";
        return "[" + dart.str(dart.wrapType(T)) + " " + valueString + "]";
      }
    }
    (ValueKey.new = function(value) {
      this[value$] = value;
      ValueKey.__proto__.new.call(this);
      ;
    }).prototype = ValueKey.prototype;
    dart.addTypeTests(ValueKey);
    ValueKey.prototype[_is_ValueKey_default] = true;
    dart.addTypeCaches(ValueKey);
    dart.setLibraryUri(ValueKey, L0);
    dart.setFieldSignature(ValueKey, () => ({
      __proto__: dart.getFields(ValueKey.__proto__),
      value: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(ValueKey, ['_equals', 'toString']);
    dart.defineExtensionAccessors(ValueKey, ['hashCode']);
    return ValueKey;
  });
  key.ValueKey = key.ValueKey$();
  dart.addTypeTests(key.ValueKey, _is_ValueKey_default);
  const _is__TypeLiteral_default = Symbol('_is__TypeLiteral_default');
  key._TypeLiteral$ = dart.generic(T => {
    class _TypeLiteral extends core.Object {
      get type() {
        return dart.wrapType(T);
      }
    }
    (_TypeLiteral.new = function() {
      ;
    }).prototype = _TypeLiteral.prototype;
    dart.addTypeTests(_TypeLiteral);
    _TypeLiteral.prototype[_is__TypeLiteral_default] = true;
    dart.addTypeCaches(_TypeLiteral);
    dart.setGetterSignature(_TypeLiteral, () => ({
      __proto__: dart.getGetters(_TypeLiteral.__proto__),
      type: core.Type
    }));
    dart.setLibraryUri(_TypeLiteral, L0);
    return _TypeLiteral;
  });
  key._TypeLiteral = key._TypeLiteral$();
  dart.addTypeTests(key._TypeLiteral, _is__TypeLiteral_default);
  dart.trackLibraries("packages/flutter/src/foundation/key.dart", {
    "package:flutter/src/foundation/key.dart": key
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["key.dart"],"names":[],"mappings":";;;;;;;;;;;;;;EAkCmB;;;;;;AAaQ;;EAAO;;;;;;;;;;MAsBxB;;;;;;;YAGgB;AACtB,yBAAU,iBAAN,KAAK,GAAgB,qBACvB,MAAO;AACT,cAAa,AACT,kBADG,KAAK,KACO,YAAZ,AAAM,KAAD,QAAU;MACxB;;AAGoB,6BAAW,oBAAa;MAAM;;AAInC,0BAAc,AAAE,yBAAG,8BAAS,AAAa,gBAAT,cAAK,OAAM,AAAU,eAAP,cAAK;AAGhE,YAAgB,YAAZ,oBAAe,AAA4B,+CAC7C,MAAO,AAAgB,OAAb,WAAW;AACvB,cAAO,AAAmB,gBAAhB,oBAAC,MAAE,WAAW;MAC1B;;;MAxBoB;AAAd;;IAAoB;;;;;;;;;;;;;;;;;;;AA4BT;MAAC;;;;IACpB","file":"../../../../../../../../../../packages/flutter/src/foundation/key.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__key: key
  };
}));

//# sourceMappingURL=key.dart.lib.js.map
