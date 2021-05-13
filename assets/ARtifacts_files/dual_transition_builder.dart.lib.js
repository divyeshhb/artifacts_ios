define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/animation/listener_helpers.dart'], (function load__packages__flutter__src__widgets__dual_transition_builder_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__animation__listener_helpers$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const animations = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animations;
  var dual_transition_builder = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L1 = "package:flutter/src/widgets/dual_transition_builder.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/dual_transition_builder.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_name]: "AnimationStatus.dismissed",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_name]: "AnimationStatus.completed",
        index: 3
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_name]: "AnimationStatus.forward",
        index: 1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_name]: "AnimationStatus.reverse",
        index: 2
      });
    }
  }, false);
  var animation$ = dart.privateName(dual_transition_builder, "DualTransitionBuilder.animation");
  var forwardBuilder$ = dart.privateName(dual_transition_builder, "DualTransitionBuilder.forwardBuilder");
  var reverseBuilder$ = dart.privateName(dual_transition_builder, "DualTransitionBuilder.reverseBuilder");
  var child$ = dart.privateName(dual_transition_builder, "DualTransitionBuilder.child");
  dual_transition_builder.DualTransitionBuilder = class DualTransitionBuilder extends framework.StatefulWidget {
    get animation() {
      return this[animation$];
    }
    set animation(value) {
      super.animation = value;
    }
    get forwardBuilder() {
      return this[forwardBuilder$];
    }
    set forwardBuilder(value) {
      super.forwardBuilder = value;
    }
    get reverseBuilder() {
      return this[reverseBuilder$];
    }
    set reverseBuilder(value) {
      super.reverseBuilder = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    createState() {
      return new dual_transition_builder._DualTransitionBuilderState.new();
    }
  };
  (dual_transition_builder.DualTransitionBuilder.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let animation = opts && 'animation' in opts ? opts.animation : null;
    if (animation == null) dart.nullFailed(L0, 40, 19, "animation");
    let forwardBuilder = opts && 'forwardBuilder' in opts ? opts.forwardBuilder : null;
    if (forwardBuilder == null) dart.nullFailed(L0, 41, 19, "forwardBuilder");
    let reverseBuilder = opts && 'reverseBuilder' in opts ? opts.reverseBuilder : null;
    if (reverseBuilder == null) dart.nullFailed(L0, 42, 19, "reverseBuilder");
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[animation$] = animation;
    this[forwardBuilder$] = forwardBuilder;
    this[reverseBuilder$] = reverseBuilder;
    this[child$] = child;
    if (!(animation != null)) dart.assertFailed(null, L0, 44, 15, "animation != null");
    if (!(forwardBuilder != null)) dart.assertFailed(null, L0, 45, 15, "forwardBuilder != null");
    if (!(reverseBuilder != null)) dart.assertFailed(null, L0, 46, 15, "reverseBuilder != null");
    dual_transition_builder.DualTransitionBuilder.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dual_transition_builder.DualTransitionBuilder.prototype;
  dart.addTypeTests(dual_transition_builder.DualTransitionBuilder);
  dart.addTypeCaches(dual_transition_builder.DualTransitionBuilder);
  dart.setMethodSignature(dual_transition_builder.DualTransitionBuilder, () => ({
    __proto__: dart.getMethods(dual_transition_builder.DualTransitionBuilder.__proto__),
    createState: dart.fnType(framework.State$(dual_transition_builder.DualTransitionBuilder), [])
  }));
  dart.setLibraryUri(dual_transition_builder.DualTransitionBuilder, L1);
  dart.setFieldSignature(dual_transition_builder.DualTransitionBuilder, () => ({
    __proto__: dart.getFields(dual_transition_builder.DualTransitionBuilder.__proto__),
    animation: dart.finalFieldType(animation.Animation$(core.double)),
    forwardBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, animation.Animation$(core.double), dart.nullable(framework.Widget)])),
    reverseBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, animation.Animation$(core.double), dart.nullable(framework.Widget)])),
    child: dart.finalFieldType(dart.nullable(framework.Widget))
  }));
  var ___DualTransitionBuilderState__effectiveAnimationStatus = dart.privateName(dual_transition_builder, "_#_DualTransitionBuilderState#_effectiveAnimationStatus");
  var ___DualTransitionBuilderState__effectiveAnimationStatus_isSet = dart.privateName(dual_transition_builder, "_#_DualTransitionBuilderState#_effectiveAnimationStatus#isSet");
  var _forwardAnimation = dart.privateName(dual_transition_builder, "_forwardAnimation");
  var _reverseAnimation = dart.privateName(dual_transition_builder, "_reverseAnimation");
  var _effectiveAnimationStatus = dart.privateName(dual_transition_builder, "_effectiveAnimationStatus");
  var _animationListener = dart.privateName(dual_transition_builder, "_animationListener");
  var _updateAnimations = dart.privateName(dual_transition_builder, "_updateAnimations");
  var _calculateEffectiveAnimationStatus = dart.privateName(dual_transition_builder, "_calculateEffectiveAnimationStatus");
  var _name = dart.privateName(animation, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  dual_transition_builder._DualTransitionBuilderState = class _DualTransitionBuilderState extends framework.State$(dual_transition_builder.DualTransitionBuilder) {
    get [_effectiveAnimationStatus]() {
      let t0;
      return dart.test(this[___DualTransitionBuilderState__effectiveAnimationStatus_isSet]) ? (t0 = this[___DualTransitionBuilderState__effectiveAnimationStatus], t0) : dart.throw(new _internal.LateError.fieldNI("_effectiveAnimationStatus"));
    }
    set [_effectiveAnimationStatus](t0) {
      if (t0 == null) dart.nullFailed(L0, 97, 24, "null");
      this[___DualTransitionBuilderState__effectiveAnimationStatus_isSet] = true;
      this[___DualTransitionBuilderState__effectiveAnimationStatus] = t0;
    }
    initState() {
      super.initState();
      this[_effectiveAnimationStatus] = this.widget.animation.status;
      this.widget.animation.addStatusListener(dart.bind(this, _animationListener));
      this[_updateAnimations]();
    }
    [_animationListener](animationStatus) {
      if (animationStatus == null) dart.nullFailed(L0, 109, 43, "animationStatus");
      let oldEffective = this[_effectiveAnimationStatus];
      this[_effectiveAnimationStatus] = this[_calculateEffectiveAnimationStatus]({lastEffective: this[_effectiveAnimationStatus], current: animationStatus});
      if (!dart.equals(oldEffective, this[_effectiveAnimationStatus])) {
        this[_updateAnimations]();
      }
    }
    didUpdateWidget(oldWidget) {
      dual_transition_builder.DualTransitionBuilder.as(oldWidget);
      if (oldWidget == null) dart.nullFailed(L0, 121, 46, "oldWidget");
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(oldWidget.animation, this.widget.animation)) {
        oldWidget.animation.removeStatusListener(dart.bind(this, _animationListener));
        this.widget.animation.addStatusListener(dart.bind(this, _animationListener));
        this[_animationListener](this.widget.animation.status);
      }
    }
    [_calculateEffectiveAnimationStatus](opts) {
      let lastEffective = opts && 'lastEffective' in opts ? opts.lastEffective : null;
      if (lastEffective == null) dart.nullFailed(L0, 135, 30, "lastEffective");
      let current = opts && 'current' in opts ? opts.current : null;
      if (current == null) dart.nullFailed(L0, 136, 30, "current");
      if (!(current != null)) dart.assertFailed(null, L0, 138, 12, "current != null");
      if (!(lastEffective != null)) dart.assertFailed(null, L0, 139, 12, "lastEffective != null");
      switch (current) {
        case C0 || CT.C0:
        case C1 || CT.C1:
        {
          return current;
        }
        case C2 || CT.C2:
        {
          switch (lastEffective) {
            case C0 || CT.C0:
            case C1 || CT.C1:
            case C2 || CT.C2:
            {
              return current;
            }
            case C3 || CT.C3:
            {
              return lastEffective;
            }
            default:
            {
              dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
            }
          }
        }
        case C3 || CT.C3:
        {
          switch (lastEffective) {
            case C0 || CT.C0:
            case C1 || CT.C1:
            case C3 || CT.C3:
            {
              return current;
            }
            case C2 || CT.C2:
            {
              return lastEffective;
            }
            default:
            {
              dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
            }
          }
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    [_updateAnimations]() {
      switch (this[_effectiveAnimationStatus]) {
        case C0 || CT.C0:
        case C2 || CT.C2:
        {
          this[_forwardAnimation].parent = this.widget.animation;
          this[_reverseAnimation].parent = animations.kAlwaysDismissedAnimation;
          break;
        }
        case C3 || CT.C3:
        case C1 || CT.C1:
        {
          this[_forwardAnimation].parent = animations.kAlwaysCompleteAnimation;
          this[_reverseAnimation].parent = new animations.ReverseAnimation.new(this.widget.animation);
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    dispose() {
      this.widget.animation.removeStatusListener(dart.bind(this, _animationListener));
      super.dispose();
    }
    build(context) {
      let t4, t3, t2, t1, t4$, t3$, t2$, t1$;
      if (context == null) dart.nullFailed(L0, 187, 29, "context");
      t1$ = this.widget;
      t2$ = context;
      t3$ = this[_forwardAnimation];
      t4$ = (t1 = this.widget, t2 = context, t3 = this[_reverseAnimation], t4 = this.widget.child, t1.reverseBuilder(t2, t3, t4));
      return t1$.forwardBuilder(t2$, t3$, t4$);
    }
  };
  (dual_transition_builder._DualTransitionBuilderState.new = function() {
    this[___DualTransitionBuilderState__effectiveAnimationStatus] = null;
    this[___DualTransitionBuilderState__effectiveAnimationStatus_isSet] = false;
    this[_forwardAnimation] = new animations.ProxyAnimation.new();
    this[_reverseAnimation] = new animations.ProxyAnimation.new();
    dual_transition_builder._DualTransitionBuilderState.__proto__.new.call(this);
    ;
  }).prototype = dual_transition_builder._DualTransitionBuilderState.prototype;
  dart.addTypeTests(dual_transition_builder._DualTransitionBuilderState);
  dart.addTypeCaches(dual_transition_builder._DualTransitionBuilderState);
  dart.setMethodSignature(dual_transition_builder._DualTransitionBuilderState, () => ({
    __proto__: dart.getMethods(dual_transition_builder._DualTransitionBuilderState.__proto__),
    [_animationListener]: dart.fnType(dart.void, [animation.AnimationStatus]),
    [_calculateEffectiveAnimationStatus]: dart.fnType(animation.AnimationStatus, [], {}, {current: animation.AnimationStatus, lastEffective: animation.AnimationStatus}),
    [_updateAnimations]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(dual_transition_builder._DualTransitionBuilderState, () => ({
    __proto__: dart.getGetters(dual_transition_builder._DualTransitionBuilderState.__proto__),
    [_effectiveAnimationStatus]: animation.AnimationStatus
  }));
  dart.setSetterSignature(dual_transition_builder._DualTransitionBuilderState, () => ({
    __proto__: dart.getSetters(dual_transition_builder._DualTransitionBuilderState.__proto__),
    [_effectiveAnimationStatus]: animation.AnimationStatus
  }));
  dart.setLibraryUri(dual_transition_builder._DualTransitionBuilderState, L1);
  dart.setFieldSignature(dual_transition_builder._DualTransitionBuilderState, () => ({
    __proto__: dart.getFields(dual_transition_builder._DualTransitionBuilderState.__proto__),
    [___DualTransitionBuilderState__effectiveAnimationStatus]: dart.fieldType(dart.nullable(animation.AnimationStatus)),
    [___DualTransitionBuilderState__effectiveAnimationStatus_isSet]: dart.fieldType(core.bool),
    [_forwardAnimation]: dart.finalFieldType(animations.ProxyAnimation),
    [_reverseAnimation]: dart.finalFieldType(animations.ProxyAnimation)
  }));
  dart.trackLibraries("packages/flutter/src/widgets/dual_transition_builder.dart", {
    "package:flutter/src/widgets/dual_transition_builder.dart": dual_transition_builder
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dual_transition_builder.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqD0B;;;;;;IAeQ;;;;;;IAeA;;;;;;IAMlB;;;;;;;AAGgC;IAA6B;;;QAtDpE;QACS;;QACA;;QACA;;QACT;;IAHS;IACA;IACA;IACT;UACK,AAAU,SAAD,IAAI;UACb,AAAe,cAAD,IAAI;UAClB,AAAe,cAAD,IAAI;AACzB,iFAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkDC;IAAyB;;;AAAzB;;IAAyB;;AAM3B,MAAX;AAC6C,MAAnD,kCAA4B,AAAO,AAAU;AACS,MAAtD,AAAO,AAAU,kDAAkB;AAChB,MAAnB;IACF;;UAEwC;AAChB,yBAAe;AAIpC,MAHD,kCAA4B,yDACX,0CACN,eAAe;AAE1B,uBAAI,YAAY,EAAI;AACC,QAAnB;;IAEJ;;uDAG2C;;AACT,MAA1B,sBAAgB,SAAS;AAC/B,uBAAI,AAAU,SAAD,YAAc,AAAO;AAC4B,QAA5D,AAAU,AAAU,SAAX,0CAAgC;AACa,QAAtD,AAAO,AAAU,kDAAkB;AACQ,QAA3C,yBAAmB,AAAO,AAAU;;IAExC;;UAO2B;;UACA;;AAEzB,YAAO,AAAQ,OAAD,IAAI;AAClB,YAAO,AAAc,aAAD,IAAI;AACxB,cAAQ,OAAO;;;;AAGX,gBAAO,QAAO;;;;AAEd,kBAAQ,aAAa;;;;;AAIjB,oBAAO,QAAO;;;;AAEd,oBAAO,cAAa;;;;AANxB;;;;;;AASA,kBAAQ,aAAa;;;;;AAIjB,oBAAO,QAAO;;;;AAEd,oBAAO,cAAa;;;;AANxB;;;;;;AAdJ;;;IAuBF;;AAGE,cAAQ;;;;AAGuC,UAA3C,AAAkB,iCAAS,AAAO;AACkB,UAApD,AAAkB,iCAAS;AAC3B;;;;;AAGmD,UAAnD,AAAkB,iCAAS;AACkC,UAA7D,AAAkB,iCAAS,oCAAiB,AAAO;AACnD;;;;AAVJ;;;IAYF;;AAI2D,MAAzD,AAAO,AAAU,qDAAqB;AACvB,MAAT;IACR;UAG0B;;;AACxB,YAAO;YACL,OAAO;YACP;kBACA,kBACE,OAAO,OACP,8BACA,AAAO,mBAHY;YAHK;IAS9B;;;oEApGqB;;IACA,0BAAoB;IACpB,0BAAoB;;;EAmG3C","file":"../../../../../../../../../../packages/flutter/src/widgets/dual_transition_builder.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__dual_transition_builder: dual_transition_builder
  };
}));

//# sourceMappingURL=dual_transition_builder.dart.lib.js.map
