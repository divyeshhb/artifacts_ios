define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/painting/strut_style.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/animation/listener_helpers.dart'], (function load__packages__artif__widgets__time_formatter_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__painting__strut_style$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__animation__listener_helpers$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const transitions = packages__flutter__src__widgets__widget_span$46dart.src__widgets__transitions;
  const text = packages__flutter__src__widgets__widget_span$46dart.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const ticker_provider = packages__flutter__src__widgets__widget_span$46dart.src__widgets__ticker_provider;
  const text_style = packages__flutter__src__painting__strut_style$46dart.src__painting__text_style;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  var time_formatter = Object.create(dart.library);
  var $toDouble = dartx.toDouble;
  var $truncate = dartx.truncate;
  var $modulo = dartx['%'];
  var $toString = dartx.toString;
  var $padLeft = dartx.padLeft;
  dart._checkModuleNullSafetyMode(false);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var AnimationStatusL = () => (AnimationStatusL = dart.constFn(dart.legacy(animation.AnimationStatus)))();
  var AnimationStatusLToNull = () => (AnimationStatusLToNull = dart.constFn(dart.fnType(core.Null, [AnimationStatusL()])))();
  var CountDownTimerL = () => (CountDownTimerL = dart.constFn(dart.legacy(time_formatter.CountDownTimer)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var TextL = () => (TextL = dart.constFn(dart.legacy(text.Text)))();
  var BuildContextL = () => (BuildContextL = dart.constFn(dart.legacy(framework.BuildContext)))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(framework.Widget)))();
  var BuildContextLAndWidgetLToTextL = () => (BuildContextLAndWidgetLToTextL = dart.constFn(dart.fnType(TextL(), [BuildContextL(), WidgetL()])))();
  const CT = Object.create(null);
  var L0 = "package:artif/widgets/time_formatter.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], _LocationL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 114,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/time_formatter.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 13,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 13,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], _LocationL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 111,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/time_formatter.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], _LocationL());
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 110,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/artifacts-web/lib/widgets/time_formatter.dart"
      });
    }
  }, false);
  var secondsRemaining$ = dart.privateName(time_formatter, "CountDownTimer.secondsRemaining");
  var whenTimeExpires$ = dart.privateName(time_formatter, "CountDownTimer.whenTimeExpires");
  var countDownFormatter$ = dart.privateName(time_formatter, "CountDownTimer.countDownFormatter");
  var countDownTimerStyle$ = dart.privateName(time_formatter, "CountDownTimer.countDownTimerStyle");
  time_formatter.CountDownTimer = class CountDownTimer extends framework.StatefulWidget {
    get secondsRemaining() {
      return this[secondsRemaining$];
    }
    set secondsRemaining(value) {
      super.secondsRemaining = value;
    }
    get whenTimeExpires() {
      return this[whenTimeExpires$];
    }
    set whenTimeExpires(value) {
      super.whenTimeExpires = value;
    }
    get countDownFormatter() {
      return this[countDownFormatter$];
    }
    set countDownFormatter(value) {
      super.countDownFormatter = value;
    }
    get countDownTimerStyle() {
      return this[countDownTimerStyle$];
    }
    set countDownTimerStyle(value) {
      super.countDownTimerStyle = value;
    }
    createState() {
      return new time_formatter._CountDownTimerState.new();
    }
  };
  (time_formatter.CountDownTimer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let secondsRemaining = opts && 'secondsRemaining' in opts ? opts.secondsRemaining : null;
    let countDownTimerStyle = opts && 'countDownTimerStyle' in opts ? opts.countDownTimerStyle : null;
    let whenTimeExpires = opts && 'whenTimeExpires' in opts ? opts.whenTimeExpires : null;
    let countDownFormatter = opts && 'countDownFormatter' in opts ? opts.countDownFormatter : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[countDownTimerStyle$] = countDownTimerStyle;
    this[whenTimeExpires$] = whenTimeExpires;
    this[countDownFormatter$] = countDownFormatter;
    this[secondsRemaining$] = secondsRemaining;
    time_formatter.CountDownTimer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = time_formatter.CountDownTimer.prototype;
  dart.addTypeTests(time_formatter.CountDownTimer);
  dart.addTypeCaches(time_formatter.CountDownTimer);
  dart.setMethodSignature(time_formatter.CountDownTimer, () => ({
    __proto__: dart.getMethods(time_formatter.CountDownTimer.__proto__),
    createState: dart.fnType(dart.legacy(framework.State$(dart.legacy(framework.StatefulWidget))), [])
  }));
  dart.setLibraryUri(time_formatter.CountDownTimer, L0);
  dart.setFieldSignature(time_formatter.CountDownTimer, () => ({
    __proto__: dart.getFields(time_formatter.CountDownTimer.__proto__),
    secondsRemaining: dart.finalFieldType(dart.legacy(core.int)),
    whenTimeExpires: dart.finalFieldType(dart.legacy(core.Function)),
    countDownFormatter: dart.finalFieldType(dart.legacy(core.Function)),
    countDownTimerStyle: dart.finalFieldType(dart.legacy(text_style.TextStyle))
  }));
  var _controller = dart.privateName(time_formatter, "_controller");
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C2;
  var C3;
  var C1;
  var C0;
  var C6;
  var C7;
  var C5;
  var C4;
  var C10;
  var C9;
  var C8;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(dart.legacy(time_formatter.CountDownTimer)) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(dart.legacy(time_formatter.CountDownTimer))[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(dart.legacy(time_formatter.CountDownTimer)));
  time_formatter._CountDownTimerState = class _CountDownTimerState extends State_TickerProviderStateMixin$36 {
    get timerDisplayString() {
      let t1, t0;
      let duration = this[_controller].duration['*'](this[_controller].value);
      return StringL().as(this.widget.countDownFormatter != null ? (t0 = this.widget, t1 = duration.inSeconds, dart.dsend(t0, 'countDownFormatter', [t1])) : this.formatHHMMSS(duration.inSeconds));
    }
    initState() {
      super.initState();
      this.duration = new core.Duration.new({seconds: this.widget.secondsRemaining});
      this[_controller] = new animation_controller.AnimationController.new({vsync: this, duration: this.duration});
      this[_controller].reverse({from: this.widget.secondsRemaining[$toDouble]()});
      this[_controller].addStatusListener(dart.fn(status => {
        if (dart.equals(status, animation.AnimationStatus.completed) || dart.equals(status, animation.AnimationStatus.dismissed)) {
          dart.dsend(this.widget, 'whenTimeExpires', []);
        }
      }, AnimationStatusLToNull()));
    }
    didUpdateWidget(oldWidget) {
      CountDownTimerL().as(oldWidget);
      if (this.widget.secondsRemaining != oldWidget.secondsRemaining) {
        this.setState(dart.fn(() => {
          this.duration = new core.Duration.new({seconds: this.widget.secondsRemaining});
          this[_controller].dispose();
          this[_controller] = new animation_controller.AnimationController.new({vsync: this, duration: this.duration});
          this[_controller].reverse({from: this.widget.secondsRemaining[$toDouble]()});
          this[_controller].addStatusListener(dart.fn(status => {
            if (dart.equals(status, animation.AnimationStatus.completed)) {
              dart.dsend(this.widget, 'whenTimeExpires', []);
            } else if (dart.equals(status, animation.AnimationStatus.dismissed)) {
              core.print("Animation Complete");
            }
          }, AnimationStatusLToNull()));
        }, VoidToNull()));
      }
    }
    formatHHMMSS(seconds) {
      let days = (dart.notNull(seconds) / 86400)[$truncate]();
      seconds = seconds[$modulo](86400)[$truncate]();
      let hours = (dart.notNull(seconds) / 3600)[$truncate]();
      seconds = seconds[$modulo](3600)[$truncate]();
      let minutes = (dart.notNull(seconds) / 60)[$truncate]();
      let daysStr = days[$toString]()[$padLeft](2, "0");
      let hoursStr = hours[$toString]()[$padLeft](2, "0");
      let minutesStr = minutes[$toString]()[$padLeft](2, "0");
      let secondsStr = seconds[$modulo](60)[$toString]()[$padLeft](2, "0");
      if (days === 0) {
        return hoursStr + "h " + minutesStr + "m " + secondsStr + "s";
      }
      if (hours === 0) {
        return minutesStr + "m " + secondsStr + "s";
      }
      return daysStr + "d " + hoursStr + "h " + minutesStr + "m " + secondsStr + "s";
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new transitions.AnimatedBuilder.new({animation: this[_controller], builder: dart.fn((_, child) => new text.Text.new(this.timerDisplayString, {style: this.widget.countDownTimerStyle, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextLAndWidgetLToTextL()), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8});
    }
  };
  (time_formatter._CountDownTimerState.new = function() {
    this[_controller] = null;
    this.duration = null;
    time_formatter._CountDownTimerState.__proto__.new.call(this);
    ;
  }).prototype = time_formatter._CountDownTimerState.prototype;
  dart.addTypeTests(time_formatter._CountDownTimerState);
  dart.addTypeCaches(time_formatter._CountDownTimerState);
  dart.setMethodSignature(time_formatter._CountDownTimerState, () => ({
    __proto__: dart.getMethods(time_formatter._CountDownTimerState.__proto__),
    didUpdateWidget: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    formatHHMMSS: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)]),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setGetterSignature(time_formatter._CountDownTimerState, () => ({
    __proto__: dart.getGetters(time_formatter._CountDownTimerState.__proto__),
    timerDisplayString: dart.legacy(core.String)
  }));
  dart.setLibraryUri(time_formatter._CountDownTimerState, L0);
  dart.setFieldSignature(time_formatter._CountDownTimerState, () => ({
    __proto__: dart.getFields(time_formatter._CountDownTimerState.__proto__),
    [_controller]: dart.fieldType(dart.legacy(animation_controller.AnimationController)),
    duration: dart.fieldType(dart.legacy(core.Duration))
  }));
  dart.trackLibraries("packages/artif/widgets/time_formatter.dart", {
    "package:artif/widgets/time_formatter.dart": time_formatter
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["time_formatter.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAYY;;;;;;IACK;;;;;;IACA;;;;;;IACC;;;;;;;AAEO,YAAI;IAAsB;;;QAb3C;QACA;QACC;QACA;QACA;;IAFA;IACA;IACA;IACgB,0BAAE,gBAAgB;AACnC,iEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgBV,qBAAW,AAAY,AAAS,gCAAE,AAAY;AACvD,0BAAO,AAAO,AAAmB,kCAAG,aAC9B,kBAA0B,AAAS,QAAD,YAAT,8CACzB,kBAAa,AAAS,QAAD;IAG7B;;AAImB,MAAX;AACmD,MAAzD,gBAAe,gCAAkB,AAAO;AAIvC,MAHD,oBAAkB,yDACT,gBACG;AAEiD,MAA7D,AAAY,iCAAc,AAAO,AAAiB;AAMhD,MALF,AAAY,oCAAkB,QAAC;AAC7B,YAAW,YAAP,MAAM,EAAoB,wCACnB,YAAP,MAAM,EAAoB;AACJ,UAAF,WAAtB;;;IAGN;;2BAGoC;AAClC,UAAI,AAAO,gCAAoB,AAAU,SAAD;AAgBpC,QAfF,cAAS;AACkD,UAAzD,gBAAe,gCAAkB,AAAO;AACnB,UAArB,AAAY;AAIX,UAHD,oBAAkB,yDACT,gBACG;AAEiD,UAA7D,AAAY,iCAAc,AAAO,AAAiB;AAOhD,UANF,AAAY,oCAAkB,QAAC;AAC7B,gBAAW,YAAP,MAAM,EAAoB;AACJ,cAAF,WAAtB;kBACK,KAAW,YAAP,MAAM,EAAoB;AACR,cAA3B,WAAM;;;;;IAKhB;iBAEwB;AAMlB,iBAAyB,CAAT,aAAR,OAAO,IAAG;AACgB,MAAtC,UAAW,AAAQ,AAAS,OAAV,UAAG;AACjB,kBAAyB,CAAR,aAAR,OAAO,IAAG;AACc,MAArC,UAAW,AAAQ,AAAQ,OAAT,UAAG;AACjB,oBAAyB,CAAN,aAAR,OAAO,IAAG;AAElB,oBAAW,AAAM,AAAW,IAAb,wBAAqB,GAAG;AACvC,qBAAY,AAAO,AAAW,KAAb,wBAAqB,GAAG;AACzC,uBAAc,AAAS,AAAW,OAAb,wBAAqB,GAAG;AAC7C,uBAAc,AAAQ,AAAM,AAAW,OAAlB,UAAG,2BAAuB,GAAG;AAEzD,UAAI,AAAK,IAAD,KAAI;AACV,cAAU,AAAyC,SAAjC,GAAC,OAAI,UAAU,GAAC,OAAI,UAAU,GAAC;;AAGnD,UAAI,AAAM,KAAD,KAAI;AACX,cAAU,AAA4B,WAAlB,GAAC,OAAI,UAAU,GAAC;;AAGtC,YAAU,AAAqD,QAA9C,GAAC,OAAI,QAAQ,GAAC,OAAI,UAAU,GAAC,OAAI,UAAU,GAAC;IAC/D;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAW,8BACA,gDACQ,4BACF,SAAC,GAAU,UACX,kBACL,iCACO,AAAO;IAG5B;;;IAhGoB;IACX;;;EAgGX","file":"../../../../../../../packages/artif/widgets/time_formatter.dart.lib.js"}');
  // Exports:
  return {
    widgets__time_formatter: time_formatter
  };
}));

//# sourceMappingURL=time_formatter.dart.lib.js.map
