define(['dart_sdk', 'packages/flutter/src/rendering/proxy_box.dart', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/rendering/layer.dart'], (function load__packages__flutter__src__widgets__annotated_region_dart(dart_sdk, packages__flutter__src__rendering__proxy_box$46dart, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__rendering__layer$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  var annotated_region = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/annotated_region.dart";
  var L1 = "package:flutter/src/widgets/annotated_region.dart";
  const _is_AnnotatedRegion_default = Symbol('_is_AnnotatedRegion_default');
  var value$ = dart.privateName(annotated_region, "AnnotatedRegion.value");
  var sized$ = dart.privateName(annotated_region, "AnnotatedRegion.sized");
  annotated_region.AnnotatedRegion$ = dart.generic(T => {
    var RenderAnnotatedRegionOfT = () => (RenderAnnotatedRegionOfT = dart.constFn(proxy_box.RenderAnnotatedRegion$(T)))();
    class AnnotatedRegion extends framework.SingleChildRenderObjectWidget {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get sized() {
        return this[sized$];
      }
      set sized(value) {
        super.sized = value;
      }
      createRenderObject(context) {
        if (context == null) dart.nullFailed(L0, 46, 48, "context");
        return new (RenderAnnotatedRegionOfT()).new({value: this.value, sized: this.sized});
      }
      updateRenderObject(context, renderObject) {
        let t0;
        if (context == null) dart.nullFailed(L0, 51, 40, "context");
        RenderAnnotatedRegionOfT().as(renderObject);
        if (renderObject == null) dart.nullFailed(L0, 51, 74, "renderObject");
        t0 = renderObject;
        (() => {
          t0.value = this.value;
          t0.sized = this.sized;
          return t0;
        })();
      }
    }
    (AnnotatedRegion.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      if (child == null) dart.nullFailed(L0, 25, 21, "child");
      let value = opts && 'value' in opts ? opts.value : null;
      if (value == null) dart.nullFailed(L0, 26, 19, "value");
      let sized = opts && 'sized' in opts ? opts.sized : true;
      if (sized == null) dart.nullFailed(L0, 27, 10, "sized");
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[value$] = value;
      this[sized$] = sized;
      if (!(value != null)) dart.assertFailed(null, L0, 28, 15, "value != null");
      if (!(child != null)) dart.assertFailed(null, L0, 29, 15, "child != null");
      AnnotatedRegion.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = AnnotatedRegion.prototype;
    dart.addTypeTests(AnnotatedRegion);
    AnnotatedRegion.prototype[_is_AnnotatedRegion_default] = true;
    dart.addTypeCaches(AnnotatedRegion);
    dart.setMethodSignature(AnnotatedRegion, () => ({
      __proto__: dart.getMethods(AnnotatedRegion.__proto__),
      createRenderObject: dart.fnType(object.RenderObject, [framework.BuildContext])
    }));
    dart.setLibraryUri(AnnotatedRegion, L1);
    dart.setFieldSignature(AnnotatedRegion, () => ({
      __proto__: dart.getFields(AnnotatedRegion.__proto__),
      value: dart.finalFieldType(T),
      sized: dart.finalFieldType(core.bool)
    }));
    return AnnotatedRegion;
  });
  annotated_region.AnnotatedRegion = annotated_region.AnnotatedRegion$();
  dart.addTypeTests(annotated_region.AnnotatedRegion, _is_AnnotatedRegion_default);
  dart.trackLibraries("packages/flutter/src/widgets/annotated_region.dart", {
    "package:flutter/src/widgets/annotated_region.dart": annotated_region
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["annotated_region.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;MAgCU;;;;;;MAUG;;;;;;;YAGkC;AAC3C,cAAO,8CAAgC,mBAAc;MACvD;yBAGqC,SAAkC;;YAAlC;sCAAkC;;AAGpD,aAFjB,YAAY;QAAZ;AACI,qBAAQ;AACR,qBAAQ;;;MACd;;;UA/BO;UACW;;UACF;;UACT;;;MADS;MACT;YACK,AAAM,KAAD,IAAI;YACT,AAAM,KAAD,IAAI;AAChB,qDAAW,GAAG,SAAS,KAAK;;IAAC","file":"../../../../../../../../../../packages/flutter/src/widgets/annotated_region.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__annotated_region: annotated_region
  };
}));

//# sourceMappingURL=annotated_region.dart.lib.js.map
