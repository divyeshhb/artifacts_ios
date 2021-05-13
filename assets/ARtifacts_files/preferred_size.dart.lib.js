define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart'], (function load__packages__flutter__src__widgets__preferred_size_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  var preferred_size = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "package:flutter/src/widgets/preferred_size.dart";
  var L1 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/preferred_size.dart";
  preferred_size.PreferredSizeWidget = class PreferredSizeWidget extends core.Object {};
  (preferred_size.PreferredSizeWidget.new = function() {
    ;
  }).prototype = preferred_size.PreferredSizeWidget.prototype;
  dart.addTypeTests(preferred_size.PreferredSizeWidget);
  dart.addTypeCaches(preferred_size.PreferredSizeWidget);
  preferred_size.PreferredSizeWidget[dart.implements] = () => [framework.Widget];
  dart.setLibraryUri(preferred_size.PreferredSizeWidget, L0);
  var child$ = dart.privateName(preferred_size, "PreferredSize.child");
  var preferredSize$ = dart.privateName(preferred_size, "PreferredSize.preferredSize");
  preferred_size.PreferredSize = class PreferredSize extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get preferredSize() {
      return this[preferredSize$];
    }
    set preferredSize(value) {
      super.preferredSize = value;
    }
    build(context) {
      if (context == null) dart.nullFailed(L1, 60, 29, "context");
      return this.child;
    }
  };
  (preferred_size.PreferredSize.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L1, 47, 19, "child");
    let preferredSize = opts && 'preferredSize' in opts ? opts.preferredSize : null;
    if (preferredSize == null) dart.nullFailed(L1, 48, 19, "preferredSize");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[preferredSize$] = preferredSize;
    preferred_size.PreferredSize.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = preferred_size.PreferredSize.prototype;
  dart.addTypeTests(preferred_size.PreferredSize);
  dart.addTypeCaches(preferred_size.PreferredSize);
  preferred_size.PreferredSize[dart.implements] = () => [preferred_size.PreferredSizeWidget];
  dart.setMethodSignature(preferred_size.PreferredSize, () => ({
    __proto__: dart.getMethods(preferred_size.PreferredSize.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(preferred_size.PreferredSize, L0);
  dart.setFieldSignature(preferred_size.PreferredSize, () => ({
    __proto__: dart.getFields(preferred_size.PreferredSize.__proto__),
    child: dart.finalFieldType(framework.Widget),
    preferredSize: dart.finalFieldType(ui.Size)
  }));
  dart.trackLibraries("packages/flutter/src/widgets/preferred_size.dart", {
    "package:flutter/src/widgets/preferred_size.dart": preferred_size
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["preferred_size.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;EA4BA;;;;;;;;IAyBe;;;;;;IAGF;;;;;;;UAGe;AAAY;IAAK;;;QAdpC;QACS;;QACA;;;IADA;IACA;AACX,gEAAW,GAAG;;EAAC","file":"../../../../../../../../../../packages/flutter/src/widgets/preferred_size.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__preferred_size: preferred_size
  };
}));

//# sourceMappingURL=preferred_size.dart.lib.js.map
