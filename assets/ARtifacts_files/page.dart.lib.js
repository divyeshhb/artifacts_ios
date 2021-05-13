define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/cupertino/route.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/animation/listener_helpers.dart'], (function load__packages__flutter__src__material__page_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__cupertino__route$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__animation__listener_helpers$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const pages = packages__flutter__src__widgets__widget_span$46dart.src__widgets__pages;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const navigator = packages__flutter__src__widgets__widget_span$46dart.src__widgets__navigator;
  const route = packages__flutter__src__cupertino__route$46dart.src__cupertino__route;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  var page = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/material/page.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/page.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scopesRoute",
        [_Location_column]: 7,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "explicitChildNodes",
        [_Location_column]: 7,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], _LocationL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 117,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/page.dart"
      });
    }
  }, false);
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C3;
  var C4;
  var C5;
  var C2;
  var C1;
  const _is_MaterialRouteTransitionMixin_default = Symbol('_is_MaterialRouteTransitionMixin_default');
  page.MaterialRouteTransitionMixin$ = dart.generic(T => {
    class MaterialRouteTransitionMixin extends pages.PageRoute$(T) {}
    MaterialRouteTransitionMixin[dart.mixinOn] = PageRoute => class MaterialRouteTransitionMixin extends PageRoute {
      get transitionDuration() {
        return C0 || CT.C0;
      }
      get barrierColor() {
        return null;
      }
      get barrierLabel() {
        return null;
      }
      canTransitionTo(nextRoute) {
        if (nextRoute == null) dart.nullFailed(L0, 95, 49, "nextRoute");
        return page.MaterialRouteTransitionMixin.is(nextRoute) && !dart.test(nextRoute.fullscreenDialog) || route.CupertinoRouteTransitionMixin.is(nextRoute) && !dart.test(nextRoute.fullscreenDialog);
      }
      buildPage(context, animation, secondaryAnimation) {
        if (context == null) dart.nullFailed(L0, 103, 18, "context");
        if (animation == null) dart.nullFailed(L0, 104, 23, "animation");
        if (secondaryAnimation == null) dart.nullFailed(L0, 105, 23, "secondaryAnimation");
        let result = this.buildContent(context);
        if (!dart.test(dart.fn(() => {
          if (result == null) {
            dart.throw(assertions.FlutterError.new("The builder for route \"" + dart.str(this.settings.name) + "\" returned null.\n" + "Route builders must never return null."));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 108, 12, "() {\n      if (result == null) {\n        throw FlutterError(\n          'The builder for route \"${settings.name}\" returned null.\\n'\n          'Route builders must never return null.'\n        );\n      }\n      return true;\n    }()");
        return new basic.Semantics.new({scopesRoute: true, explicitChildNodes: true, child: result, $creationLocationd_0dea112b090073317d4: C1 || CT.C1});
      }
      buildTransitions(context, animation, secondaryAnimation, child) {
        if (context == null) dart.nullFailed(L0, 125, 40, "context");
        if (animation == null) dart.nullFailed(L0, 125, 67, "animation");
        if (secondaryAnimation == null) dart.nullFailed(L0, 125, 96, "secondaryAnimation");
        if (child == null) dart.nullFailed(L0, 125, 123, "child");
        let theme = theme$.Theme.of(context).pageTransitionsTheme;
        return theme.buildTransitions(T, this, context, animation, secondaryAnimation, child);
      }
    };
    dart.addTypeTests(MaterialRouteTransitionMixin);
    MaterialRouteTransitionMixin.prototype[_is_MaterialRouteTransitionMixin_default] = true;
    dart.addTypeCaches(MaterialRouteTransitionMixin);
    MaterialRouteTransitionMixin[dart.implements] = () => [pages.PageRoute$(T)];
    dart.setMethodSignature(MaterialRouteTransitionMixin, () => ({
      __proto__: dart.getMethods(MaterialRouteTransitionMixin.__proto__),
      buildPage: dart.fnType(framework.Widget, [framework.BuildContext, animation.Animation$(core.double), animation.Animation$(core.double)])
    }));
    dart.setGetterSignature(MaterialRouteTransitionMixin, () => ({
      __proto__: dart.getGetters(MaterialRouteTransitionMixin.__proto__),
      transitionDuration: core.Duration,
      barrierColor: dart.nullable(ui.Color),
      barrierLabel: dart.nullable(core.String)
    }));
    dart.setLibraryUri(MaterialRouteTransitionMixin, L1);
    return MaterialRouteTransitionMixin;
  });
  page.MaterialRouteTransitionMixin = page.MaterialRouteTransitionMixin$();
  dart.addTypeTests(page.MaterialRouteTransitionMixin, _is_MaterialRouteTransitionMixin_default);
  const _is_MaterialPageRoute_default = Symbol('_is_MaterialPageRoute_default');
  var builder$ = dart.privateName(page, "MaterialPageRoute.builder");
  var maintainState$ = dart.privateName(page, "MaterialPageRoute.maintainState");
  page.MaterialPageRoute$ = dart.generic(T => {
    const PageRoute_MaterialRouteTransitionMixin$36 = class PageRoute_MaterialRouteTransitionMixin extends pages.PageRoute$(T) {};
    (PageRoute_MaterialRouteTransitionMixin$36.new = function(opts) {
      PageRoute_MaterialRouteTransitionMixin$36.__proto__.new.call(this, opts);
    }).prototype = PageRoute_MaterialRouteTransitionMixin$36.prototype;
    dart.applyMixin(PageRoute_MaterialRouteTransitionMixin$36, page.MaterialRouteTransitionMixin$(T));
    class MaterialPageRoute extends PageRoute_MaterialRouteTransitionMixin$36 {
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      get maintainState() {
        return this[maintainState$];
      }
      set maintainState(value) {
        super.maintainState = value;
      }
      buildContent(context) {
        let t0;
        if (context == null) dart.nullFailed(L0, 54, 36, "context");
        t0 = context;
        return this.builder(t0);
      }
      get debugLabel() {
        return dart.str(super.debugLabel) + "(" + dart.str(this.settings.name) + ")";
      }
    }
    (MaterialPageRoute.new = function(opts) {
      let builder = opts && 'builder' in opts ? opts.builder : null;
      if (builder == null) dart.nullFailed(L0, 39, 19, "builder");
      let settings = opts && 'settings' in opts ? opts.settings : null;
      let maintainState = opts && 'maintainState' in opts ? opts.maintainState : true;
      if (maintainState == null) dart.nullFailed(L0, 41, 10, "maintainState");
      let fullscreenDialog = opts && 'fullscreenDialog' in opts ? opts.fullscreenDialog : false;
      if (fullscreenDialog == null) dart.nullFailed(L0, 42, 10, "fullscreenDialog");
      this[builder$] = builder;
      this[maintainState$] = maintainState;
      if (!(builder != null)) dart.assertFailed(null, L0, 43, 15, "builder != null");
      if (!(maintainState != null)) dart.assertFailed(null, L0, 44, 15, "maintainState != null");
      if (!(fullscreenDialog != null)) dart.assertFailed(null, L0, 45, 15, "fullscreenDialog != null");
      MaterialPageRoute.__proto__.new.call(this, {settings: settings, fullscreenDialog: fullscreenDialog});
      if (!dart.test(this.opaque)) dart.assertFailed(null, L0, 47, 12, "opaque");
    }).prototype = MaterialPageRoute.prototype;
    dart.addTypeTests(MaterialPageRoute);
    MaterialPageRoute.prototype[_is_MaterialPageRoute_default] = true;
    dart.addTypeCaches(MaterialPageRoute);
    dart.setMethodSignature(MaterialPageRoute, () => ({
      __proto__: dart.getMethods(MaterialPageRoute.__proto__),
      buildContent: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(MaterialPageRoute, L1);
    dart.setFieldSignature(MaterialPageRoute, () => ({
      __proto__: dart.getFields(MaterialPageRoute.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext])),
      maintainState: dart.finalFieldType(core.bool)
    }));
    return MaterialPageRoute;
  });
  page.MaterialPageRoute = page.MaterialPageRoute$();
  dart.addTypeTests(page.MaterialPageRoute, _is_MaterialPageRoute_default);
  const _is_MaterialPage_default = Symbol('_is_MaterialPage_default');
  var child$ = dart.privateName(page, "MaterialPage.child");
  var maintainState$0 = dart.privateName(page, "MaterialPage.maintainState");
  var fullscreenDialog$ = dart.privateName(page, "MaterialPage.fullscreenDialog");
  page.MaterialPage$ = dart.generic(T => {
    var _PageBasedMaterialPageRouteOfT = () => (_PageBasedMaterialPageRouteOfT = dart.constFn(page._PageBasedMaterialPageRoute$(T)))();
    class MaterialPage extends navigator.Page$(T) {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get maintainState() {
        return this[maintainState$0];
      }
      set maintainState(value) {
        super.maintainState = value;
      }
      get fullscreenDialog() {
        return this[fullscreenDialog$];
      }
      set fullscreenDialog(value) {
        super.fullscreenDialog = value;
      }
      createRoute(context) {
        if (context == null) dart.nullFailed(L0, 175, 37, "context");
        return new (_PageBasedMaterialPageRouteOfT()).new({page: this});
      }
    }
    (MaterialPage.new = function(opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      if (child == null) dart.nullFailed(L0, 154, 19, "child");
      let maintainState = opts && 'maintainState' in opts ? opts.maintainState : true;
      if (maintainState == null) dart.nullFailed(L0, 155, 10, "maintainState");
      let fullscreenDialog = opts && 'fullscreenDialog' in opts ? opts.fullscreenDialog : false;
      if (fullscreenDialog == null) dart.nullFailed(L0, 156, 10, "fullscreenDialog");
      let key = opts && 'key' in opts ? opts.key : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let $arguments = opts && 'arguments' in opts ? opts.arguments : null;
      this[child$] = child;
      this[maintainState$0] = maintainState;
      this[fullscreenDialog$] = fullscreenDialog;
      if (!(child != null)) dart.assertFailed(null, L0, 160, 15, "child != null");
      if (!(maintainState != null)) dart.assertFailed(null, L0, 161, 15, "maintainState != null");
      if (!(fullscreenDialog != null)) dart.assertFailed(null, L0, 162, 15, "fullscreenDialog != null");
      MaterialPage.__proto__.new.call(this, {key: key, name: name, arguments: $arguments});
      ;
    }).prototype = MaterialPage.prototype;
    dart.addTypeTests(MaterialPage);
    MaterialPage.prototype[_is_MaterialPage_default] = true;
    dart.addTypeCaches(MaterialPage);
    dart.setMethodSignature(MaterialPage, () => ({
      __proto__: dart.getMethods(MaterialPage.__proto__),
      createRoute: dart.fnType(navigator.Route$(T), [framework.BuildContext])
    }));
    dart.setLibraryUri(MaterialPage, L1);
    dart.setFieldSignature(MaterialPage, () => ({
      __proto__: dart.getFields(MaterialPage.__proto__),
      child: dart.finalFieldType(framework.Widget),
      maintainState: dart.finalFieldType(core.bool),
      fullscreenDialog: dart.finalFieldType(core.bool)
    }));
    return MaterialPage;
  });
  page.MaterialPage = page.MaterialPage$();
  dart.addTypeTests(page.MaterialPage, _is_MaterialPage_default);
  var _page = dart.privateName(page, "_page");
  const _is__PageBasedMaterialPageRoute_default = Symbol('_is__PageBasedMaterialPageRoute_default');
  page._PageBasedMaterialPageRoute$ = dart.generic(T => {
    var MaterialPageOfT = () => (MaterialPageOfT = dart.constFn(page.MaterialPage$(T)))();
    const PageRoute_MaterialRouteTransitionMixin$36 = class PageRoute_MaterialRouteTransitionMixin extends pages.PageRoute$(T) {};
    (PageRoute_MaterialRouteTransitionMixin$36.new = function(opts) {
      PageRoute_MaterialRouteTransitionMixin$36.__proto__.new.call(this, opts);
    }).prototype = PageRoute_MaterialRouteTransitionMixin$36.prototype;
    dart.applyMixin(PageRoute_MaterialRouteTransitionMixin$36, page.MaterialRouteTransitionMixin$(T));
    class _PageBasedMaterialPageRoute extends PageRoute_MaterialRouteTransitionMixin$36 {
      get [_page]() {
        return MaterialPageOfT().as(this.settings);
      }
      buildContent(context) {
        if (context == null) dart.nullFailed(L0, 195, 36, "context");
        return this[_page].child;
      }
      get maintainState() {
        return this[_page].maintainState;
      }
      get fullscreenDialog() {
        return this[_page].fullscreenDialog;
      }
      get debugLabel() {
        return dart.str(super.debugLabel) + "(" + dart.str(this[_page].name) + ")";
      }
    }
    (_PageBasedMaterialPageRoute.new = function(opts) {
      let page = opts && 'page' in opts ? opts.page : null;
      if (page == null) dart.nullFailed(L0, 186, 30, "page");
      if (!(page != null)) dart.assertFailed(null, L0, 187, 15, "page != null");
      _PageBasedMaterialPageRoute.__proto__.new.call(this, {settings: page});
      if (!dart.test(this.opaque)) dart.assertFailed(null, L0, 189, 12, "opaque");
    }).prototype = _PageBasedMaterialPageRoute.prototype;
    dart.addTypeTests(_PageBasedMaterialPageRoute);
    _PageBasedMaterialPageRoute.prototype[_is__PageBasedMaterialPageRoute_default] = true;
    dart.addTypeCaches(_PageBasedMaterialPageRoute);
    dart.setMethodSignature(_PageBasedMaterialPageRoute, () => ({
      __proto__: dart.getMethods(_PageBasedMaterialPageRoute.__proto__),
      buildContent: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setGetterSignature(_PageBasedMaterialPageRoute, () => ({
      __proto__: dart.getGetters(_PageBasedMaterialPageRoute.__proto__),
      [_page]: page.MaterialPage$(T),
      maintainState: core.bool,
      fullscreenDialog: core.bool
    }));
    dart.setLibraryUri(_PageBasedMaterialPageRoute, L1);
    return _PageBasedMaterialPageRoute;
  });
  page._PageBasedMaterialPageRoute = page._PageBasedMaterialPageRoute$();
  dart.addTypeTests(page._PageBasedMaterialPageRoute, _is__PageBasedMaterialPageRoute_default);
  dart.trackLibraries("packages/flutter/src/material/page.dart", {
    "package:flutter/src/material/page.dart": page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqFqC;MAAiC;;AAGzC;MAAI;;AAGH;MAAI;;YAGc;AAE5C,cAAkB,AAChB,sCADM,SAAS,gBAAqC,AAAU,SAAD,sBAC/C,uCAAV,SAAS,gBAAsC,AAAU,SAAD;MAChE;gBAIe,SACK,WACA;YAFL;YACK;YACA;AAEL,qBAAS,kBAAa,OAAO;AAC1C,uBAAO,AAQN;AAPC,cAAI,AAAO,MAAD,IAAI;AAIX,YAHD,WAAM,4BAAY,AAChB,sCAA0B,AAAS,sBAAK,wBACxC;;AAGJ,gBAAO;;AAET,cAAO,uCACQ,0BACO,aACb,MAAM;MAEjB;uBAGqC,SAA2B,WAA6B,oBAA2B;YAAnF;YAA2B;YAA6B;YAA2B;AAC3F,oBAAc,AAAY,gBAAT,OAAO;AACnD,cAAO,AAAM,MAAD,qBAAqB,MAAM,OAAO,EAAE,SAAS,EAAE,kBAAkB,EAAE,KAAK;MACtF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA7EoB;;;;;;MAMT;;;;;;mBAHsB;;;AAAY,aAAQ,OAAO;cAAf,AAAO;MAAS;;AAMpC,cAAuC,UAA9B,oBAAW,eAAG,AAAS,sBAAK;MAAE;;;UArBhD;;UACC;UACV;;UACA;;MAHS;MAET;YAEK,AAAQ,OAAD,IAAI;YACX,AAAc,aAAD,IAAI;YACjB,AAAiB,gBAAD,IAAI;AAC3B,4DAAgB,QAAQ,oBAAoB,gBAAgB;AAC/D,qBAAO;IACT;;;;;;;;;;;;;;;;;;;;;;;;;MAsHa;;;;;;MAGF;;;;;;MAGA;;;;;;;YAGuB;AAChC,cAAO,mDAAqC;MAC9C;;;UAvBgB;;UACT;;UACA;;UACK;UACF;UACA;MALM;MACT;MACA;YAIK,AAAM,KAAD,IAAI;YACT,AAAc,aAAD,IAAI;YACjB,AAAiB,gBAAD,IAAI;AAC3B,kDAAW,GAAG,QAAQ,IAAI,aAAa;;IAAU;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6BzB,cAAS,sBAAT;MAA2B;;YAGvB;AAC/B,cAAO,AAAM;MACf;;AAG0B,cAAA,AAAM;MAAa;;AAGhB,cAAA,AAAM;MAAgB;;AAG1B,cAAoC,UAA3B,oBAAW,eAAG,AAAM,oBAAK;MAAE;;;UApBlC;;YACf,AAAK,IAAD,IAAI;AACf,sEAAgB,IAAI;AACvB,qBAAO;IACT","file":"../../../../../../../../../../packages/flutter/src/material/page.dart.lib.js"}');
  // Exports:
  return {
    src__material__page: page
  };
}));

//# sourceMappingURL=page.dart.lib.js.map
