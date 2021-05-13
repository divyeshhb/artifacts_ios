define(['dart_sdk'], (function load__packages__flutter__src__painting__geometry_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var geometry = Object.create(dart.library);
  var $clamp = dartx.clamp;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/geometry.dart";
  geometry.positionDependentBox = function positionDependentBox(opts) {
    let size = opts && 'size' in opts ? opts.size : null;
    if (size == null) dart.nullFailed(L0, 41, 17, "size");
    let childSize = opts && 'childSize' in opts ? opts.childSize : null;
    if (childSize == null) dart.nullFailed(L0, 42, 17, "childSize");
    let target = opts && 'target' in opts ? opts.target : null;
    if (target == null) dart.nullFailed(L0, 43, 19, "target");
    let preferBelow = opts && 'preferBelow' in opts ? opts.preferBelow : null;
    if (preferBelow == null) dart.nullFailed(L0, 44, 17, "preferBelow");
    let verticalOffset = opts && 'verticalOffset' in opts ? opts.verticalOffset : 0;
    if (verticalOffset == null) dart.nullFailed(L0, 45, 10, "verticalOffset");
    let margin = opts && 'margin' in opts ? opts.margin : 10;
    if (margin == null) dart.nullFailed(L0, 46, 10, "margin");
    if (!(size != null)) dart.assertFailed(null, L0, 48, 10, "size != null");
    if (!(childSize != null)) dart.assertFailed(null, L0, 49, 10, "childSize != null");
    if (!(target != null)) dart.assertFailed(null, L0, 50, 10, "target != null");
    if (!(verticalOffset != null)) dart.assertFailed(null, L0, 51, 10, "verticalOffset != null");
    if (!(preferBelow != null)) dart.assertFailed(null, L0, 52, 10, "preferBelow != null");
    if (!(margin != null)) dart.assertFailed(null, L0, 53, 10, "margin != null");
    let fitsBelow = dart.notNull(target.dy) + dart.notNull(verticalOffset) + dart.notNull(childSize.height) <= dart.notNull(size.height) - dart.notNull(margin);
    let fitsAbove = dart.notNull(target.dy) - dart.notNull(verticalOffset) - dart.notNull(childSize.height) >= dart.notNull(margin);
    let tooltipBelow = dart.test(preferBelow) ? fitsBelow || !fitsAbove : !(fitsAbove || !fitsBelow);
    let y = null;
    if (tooltipBelow)
      y = math.min(core.double, dart.notNull(target.dy) + dart.notNull(verticalOffset), dart.notNull(size.height) - dart.notNull(margin));
    else
      y = math.max(core.double, dart.notNull(target.dy) - dart.notNull(verticalOffset) - dart.notNull(childSize.height), margin);
    let x = null;
    if (dart.notNull(size.width) - dart.notNull(margin) * 2.0 < dart.notNull(childSize.width)) {
      x = (dart.notNull(size.width) - dart.notNull(childSize.width)) / 2.0;
    } else {
      let normalizedTargetX = target.dx[$clamp](margin, dart.notNull(size.width) - dart.notNull(margin));
      let edge = dart.notNull(margin) + dart.notNull(childSize.width) / 2.0;
      if (normalizedTargetX < edge) {
        x = margin;
      } else if (normalizedTargetX > dart.notNull(size.width) - edge) {
        x = dart.notNull(size.width) - dart.notNull(margin) - dart.notNull(childSize.width);
      } else {
        x = normalizedTargetX - dart.notNull(childSize.width) / 2.0;
      }
    }
    return new ui.Offset.new(x, y);
  };
  dart.trackLibraries("packages/flutter/src/painting/geometry.dart", {
    "package:flutter/src/painting/geometry.dart": geometry
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["geometry.dart"],"names":[],"mappings":";;;;;;;;;;;;;QAwCgB;;QACA;;QACE;;QACF;;QACP;;QACA;;AAEP,UAAO,AAAK,IAAD,IAAI;AACf,UAAO,AAAU,SAAD,IAAI;AACpB,UAAO,AAAO,MAAD,IAAI;AACjB,UAAO,AAAe,cAAD,IAAI;AACzB,UAAO,AAAY,WAAD,IAAI;AACtB,UAAO,AAAO,MAAD,IAAI;AAEN,oBAAsB,AAAiB,AAAmB,aAA9C,AAAO,MAAD,oBAAM,cAAc,iBAAG,AAAU,SAAD,YAAuB,aAAZ,AAAK,IAAD,wBAAU,MAAM;AACjF,oBAAsB,AAAiB,AAAmB,aAA9C,AAAO,MAAD,oBAAM,cAAc,iBAAG,AAAU,SAAD,yBAAW,MAAM;AACnE,iCAAe,WAAW,IAAG,AAAU,SAAD,KAAK,SAAS,GAAG,EAAE,SAAS,KAAK,SAAS;AACpF;AACP,QAAI,YAAY;AACgD,MAA9D,IAAI,sBAAmB,aAAV,AAAO,MAAD,oBAAM,cAAc,GAAc,aAAZ,AAAK,IAAD,wBAAU,MAAM;;AAEM,MAAnE,IAAI,sBAAmB,AAAiB,aAA3B,AAAO,MAAD,oBAAM,cAAc,iBAAG,AAAU,SAAD,UAAS,MAAM;AAE7D;AACP,QAAe,AAAe,aAA1B,AAAK,IAAD,UAAgB,aAAP,MAAM,IAAG,mBAAM,AAAU,SAAD;AACC,MAAxC,IAAmC,CAAnB,aAAX,AAAK,IAAD,uBAAS,AAAU,SAAD,WAAU;;AAExB,8BAAoB,AAAO,AAAG,MAAJ,YAAU,MAAM,EAAa,aAAX,AAAK,IAAD,uBAAS,MAAM;AAC/D,iBAAc,aAAP,MAAM,IAAmB,aAAhB,AAAU,SAAD,UAAS;AAC/C,UAAI,AAAkB,iBAAD,GAAG,IAAI;AAChB,QAAV,IAAI,MAAM;YACL,KAAI,AAAkB,iBAAD,GAAc,aAAX,AAAK,IAAD,UAAS,IAAI;AACL,QAAzC,IAAe,AAAS,aAApB,AAAK,IAAD,uBAAS,MAAM,iBAAG,AAAU,SAAD;;AAEU,QAA7C,IAAI,AAAkB,iBAAD,GAAmB,aAAhB,AAAU,SAAD,UAAS;;;AAG9C,UAAO,mBAAO,CAAC,EAAE,CAAC;EACpB","file":"../../../../../../../../../../packages/flutter/src/painting/geometry.dart.lib.js"}');
  // Exports:
  return {
    src__painting__geometry: geometry
  };
}));

//# sourceMappingURL=geometry.dart.lib.js.map
