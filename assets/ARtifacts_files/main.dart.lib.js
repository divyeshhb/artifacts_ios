define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart', 'packages/artif/utils/authentication.dart', 'packages/flutter/src/material/app.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/material/typography.dart', 'packages/flutter/src/painting/strut_style.dart', 'packages/flutter/src/widgets/icon_theme_data.dart', 'packages/artif/widgets/google_sign_in_button.dart'], (function load__packages__artif__main_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart, packages__artif__utils__authentication$46dart, packages__flutter__src__material__app$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__material__typography$46dart, packages__flutter__src__painting__strut_style$46dart, packages__flutter__src__widgets__icon_theme_data$46dart, packages__artif__widgets__google_sign_in_button$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const binding = packages__flutter__src__widgets__widget_span$46dart.src__widgets__binding;
  const authentication = packages__artif__utils__authentication$46dart.utils__authentication;
  const app = packages__flutter__src__material__app$46dart.src__material__app;
  const theme_data = packages__flutter__src__material__icon_button$46dart.src__material__theme_data;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const text_theme = packages__flutter__src__material__typography$46dart.src__material__text_theme;
  const text_style = packages__flutter__src__painting__strut_style$46dart.src__painting__text_style;
  const icon_theme_data = packages__flutter__src__widgets__icon_theme_data$46dart.src__widgets__icon_theme_data;
  const home_page = packages__artif__widgets__google_sign_in_button$46dart.screens__home_page;
  var main = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  const CT = Object.create(null);
  var L0 = "package:artif/main.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], _LocationL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 54,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/main.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "theme",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "debugShowCheckedModeBanner",
        [_Location_column]: 7,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], _LocationL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 30,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/main.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 10,
        [_Location_line]: 7,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/main.dart"
      });
    }
  }, false);
  main.MyApp = class MyApp extends framework.StatefulWidget {
    createState() {
      return new main._MyAppState.new();
    }
  };
  (main.MyApp.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    createState: dart.fnType(dart.legacy(main._MyAppState), [])
  }));
  dart.setLibraryUri(main.MyApp, L0);
  var C1;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C0;
  var C4;
  var C5;
  var C6;
  var C7;
  var C3;
  var C2;
  main._MyAppState = class _MyAppState extends framework.State$(dart.legacy(main.MyApp)) {
    getUserInfo() {
      return async.async(dart.dynamic, (function* getUserInfo() {
        yield authentication.getUser();
        this.setState(dart.fn(() => {
        }, VoidToNull()));
        core.print(authentication.uid);
      }).bind(this));
    }
    initState() {
      this.getUserInfo();
      super.initState();
    }
    build(context) {
      return new app.MaterialApp.new({title: "ARtifacts", theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.blueGrey, backgroundColor: colors.Colors.white, cardColor: colors.Colors.blueGrey._get(50), primaryTextTheme: new text_theme.TextTheme.new({button: new text_style.TextStyle.new({color: colors.Colors.blueGrey, decorationColor: colors.Colors.blueGrey._get(300)}), subtitle2: new text_style.TextStyle.new({color: colors.Colors.blueGrey._get(900)}), subtitle1: new text_style.TextStyle.new({color: colors.Colors.black}), headline1: new text_style.TextStyle.new({color: colors.Colors.blueGrey._get(800)})}), bottomAppBarColor: colors.Colors.blueGrey._get(900), iconTheme: new icon_theme_data.IconThemeData.new({color: colors.Colors.blueGrey})}), debugShowCheckedModeBanner: false, home: new home_page.HomePage.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C2 || CT.C2});
    }
  };
  (main._MyAppState.new = function() {
    main._MyAppState.__proto__.new.call(this);
    ;
  }).prototype = main._MyAppState.prototype;
  dart.addTypeTests(main._MyAppState);
  dart.addTypeCaches(main._MyAppState);
  dart.setMethodSignature(main._MyAppState, () => ({
    __proto__: dart.getMethods(main._MyAppState.__proto__),
    getUserInfo: dart.fnType(dart.legacy(async.Future), []),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(main._MyAppState, L0);
  var C8;
  main.main = function main$() {
    binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: C8 || CT.C8}));
  };
  dart.trackLibraries("packages/artif/main.dart", {
    "package:artif/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAW+B;IAAa;;;;;;EAC5C;;;;;;;;;;;;;;;;;;;;;;;AAGoB;AACD,QAAf,MAAM;AACS,QAAf,cAAS;;AACC,QAAV,WAAM;MACR;;;AAIe,MAAb;AACiB,MAAX;IACR;UAG0B;AACxB,YAAO,iCACE,oBACA,yCACiB,yCACE,gCACN,AAAQ,4BAAC,uBACT,sCACR,qCACQ,yCACU,AAAQ,4BAAC,mBAExB,qCACK,AAAQ,4BAAC,mBAEd,qCACK,kCAEL,qCAAwB,AAAQ,4BAAC,6BAEpB,AAAQ,4BAAC,iBACxB,8CAA4B,wDAGb,aACtB;IAEV;;;;;EACF;;;;;;;;;;;AAlDiB,IAAf,eAAO;EACT","file":"../../../../../../packages/artif/main.dart.lib.js"}');
  // Exports:
  return {
    main: main
  };
}));

//# sourceMappingURL=main.dart.lib.js.map
