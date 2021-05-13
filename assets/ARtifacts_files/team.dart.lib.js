define(['dart_sdk', 'packages/flutter/src/gestures/arena.dart', 'packages/flutter/src/gestures/binding.dart'], (function load__packages__flutter__src__gestures__team_dart(dart_sdk, packages__flutter__src__gestures__arena$46dart, packages__flutter__src__gestures__binding$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const arena = packages__flutter__src__gestures__arena$46dart.src__gestures__arena;
  const binding = packages__flutter__src__gestures__binding$46dart.src__gestures__binding;
  var team = Object.create(dart.library);
  var $noSuchMethod = dartx.noSuchMethod;
  var $isNotEmpty = dartx.isNotEmpty;
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $add = dartx.add;
  var $isEmpty = dartx.isEmpty;
  var $putIfAbsent = dartx.putIfAbsent;
  dart._checkModuleNullSafetyMode(false);
  var JSArrayOfGestureArenaMember = () => (JSArrayOfGestureArenaMember = dart.constFn(_interceptors.JSArray$(arena.GestureArenaMember)))();
  var IdentityMapOfint$_CombiningGestureArenaMember = () => (IdentityMapOfint$_CombiningGestureArenaMember = dart.constFn(_js_helper.IdentityMap$(core.int, team._CombiningGestureArenaMember)))();
  var VoidTo_CombiningGestureArenaMember = () => (VoidTo_CombiningGestureArenaMember = dart.constFn(dart.fnType(team._CombiningGestureArenaMember, [])))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/gestures/team.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/gestures/team.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const(new _js_helper.PrivateSymbol.new('_member', _member));
    },
    get C1() {
      return C1 = dart.const(new _js_helper.PrivateSymbol.new('_arena', _arena));
    },
    get C2() {
      return C2 = dart.const(new _js_helper.PrivateSymbol.new('_pointer', _pointer$));
    }
  }, false);
  var _combiner$ = dart.privateName(team, "_combiner");
  var _member = dart.privateName(team, "_member");
  var _resolve = dart.privateName(team, "_resolve");
  var C0;
  var _member$ = dart.privateName(arena, "_member");
  var _arena = dart.privateName(team, "_arena");
  var C1;
  var _arena$ = dart.privateName(arena, "_arena");
  var _pointer$ = dart.privateName(team, "_pointer");
  var C2;
  var _pointer = dart.privateName(arena, "_pointer");
  var _member$0 = dart.privateName(team, "_CombiningGestureArenaEntry._member");
  team._CombiningGestureArenaEntry = class _CombiningGestureArenaEntry extends core.Object {
    get [_member]() {
      return this[_member$0];
    }
    set [_member](value) {
      super[_member] = value;
    }
    resolve(disposition) {
      if (disposition == null) dart.nullFailed(L0, 16, 35, "disposition");
      this[_combiner$][_resolve](this[_member], disposition);
    }
    get [_member$]() {
      return arena.GestureArenaMember.as(this[$noSuchMethod](new core._Invocation.getter(C0 || CT.C0)));
    }
    get [_arena$]() {
      return arena.GestureArenaManager.as(this[$noSuchMethod](new core._Invocation.getter(C1 || CT.C1)));
    }
    get [_pointer]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C2 || CT.C2)));
    }
  };
  (team._CombiningGestureArenaEntry.new = function(_combiner, _member) {
    if (_combiner == null) dart.nullFailed(L0, 10, 36, "_combiner");
    if (_member == null) dart.nullFailed(L0, 10, 52, "_member");
    this[_combiner$] = _combiner;
    this[_member$0] = _member;
    ;
  }).prototype = team._CombiningGestureArenaEntry.prototype;
  dart.addTypeTests(team._CombiningGestureArenaEntry);
  dart.addTypeCaches(team._CombiningGestureArenaEntry);
  team._CombiningGestureArenaEntry[dart.implements] = () => [arena.GestureArenaEntry];
  dart.setMethodSignature(team._CombiningGestureArenaEntry, () => ({
    __proto__: dart.getMethods(team._CombiningGestureArenaEntry.__proto__),
    resolve: dart.fnType(dart.void, [arena.GestureDisposition])
  }));
  dart.setGetterSignature(team._CombiningGestureArenaEntry, () => ({
    __proto__: dart.getGetters(team._CombiningGestureArenaEntry.__proto__),
    [_member$]: arena.GestureArenaMember,
    [_arena$]: arena.GestureArenaManager,
    [_pointer]: core.int
  }));
  dart.setLibraryUri(team._CombiningGestureArenaEntry, L1);
  dart.setFieldSignature(team._CombiningGestureArenaEntry, () => ({
    __proto__: dart.getFields(team._CombiningGestureArenaEntry.__proto__),
    [_combiner$]: dart.finalFieldType(team._CombiningGestureArenaMember),
    [_member]: dart.finalFieldType(arena.GestureArenaMember)
  }));
  var _members = dart.privateName(team, "_members");
  var _resolved = dart.privateName(team, "_resolved");
  var _winner = dart.privateName(team, "_winner");
  var _entry = dart.privateName(team, "_entry");
  var _owner$ = dart.privateName(team, "_owner");
  var _close = dart.privateName(team, "_close");
  var _combiners = dart.privateName(team, "_combiners");
  var _add = dart.privateName(team, "_add");
  team._CombiningGestureArenaMember = class _CombiningGestureArenaMember extends arena.GestureArenaMember {
    acceptGesture(pointer) {
      let t0;
      if (pointer == null) dart.nullFailed(L0, 33, 26, "pointer");
      if (!(this[_pointer$] == pointer)) dart.assertFailed(null, L0, 34, 12, "_pointer == pointer");
      if (!(this[_winner] != null || dart.test(this[_members][$isNotEmpty]))) dart.assertFailed(null, L0, 35, 12, "_winner != null || _members.isNotEmpty");
      this[_close]();
      this[_winner] == null ? this[_winner] = (t0 = this[_owner$].captain, t0 == null ? this[_members][$_get](0) : t0) : null;
      for (let member of this[_members]) {
        if (!dart.equals(member, this[_winner])) member.rejectGesture(pointer);
      }
      dart.nullCheck(this[_winner]).acceptGesture(pointer);
    }
    rejectGesture(pointer) {
      if (pointer == null) dart.nullFailed(L0, 46, 26, "pointer");
      if (!(this[_pointer$] == pointer)) dart.assertFailed(null, L0, 47, 12, "_pointer == pointer");
      this[_close]();
      for (let member of this[_members])
        member.rejectGesture(pointer);
    }
    [_close]() {
      if (!!dart.test(this[_resolved])) dart.assertFailed(null, L0, 54, 12, "!_resolved");
      this[_resolved] = true;
      let combiner = this[_owner$][_combiners][$remove](this[_pointer$]);
      if (!dart.equals(combiner, this)) dart.assertFailed(null, L0, 57, 12, "combiner == this");
    }
    [_add](pointer, member) {
      if (pointer == null) dart.nullFailed(L0, 60, 30, "pointer");
      if (member == null) dart.nullFailed(L0, 60, 58, "member");
      if (!!dart.test(this[_resolved])) dart.assertFailed(null, L0, 61, 12, "!_resolved");
      if (!(this[_pointer$] == pointer)) dart.assertFailed(null, L0, 62, 12, "_pointer == pointer");
      this[_members][$add](member);
      this[_entry] == null ? this[_entry] = dart.nullCheck(binding.GestureBinding.instance).gestureArena.add(pointer, this) : null;
      return new team._CombiningGestureArenaEntry.new(this, member);
    }
    [_resolve](member, disposition) {
      let t0;
      if (member == null) dart.nullFailed(L0, 68, 36, "member");
      if (disposition == null) dart.nullFailed(L0, 68, 63, "disposition");
      if (dart.test(this[_resolved])) return;
      if (dart.equals(disposition, arena.GestureDisposition.rejected)) {
        this[_members][$remove](member);
        member.rejectGesture(this[_pointer$]);
        if (dart.test(this[_members][$isEmpty])) dart.nullCheck(this[_entry]).resolve(disposition);
      } else {
        if (!dart.equals(disposition, arena.GestureDisposition.accepted)) dart.assertFailed(null, L0, 77, 14, "disposition == GestureDisposition.accepted");
        this[_winner] == null ? this[_winner] = (t0 = this[_owner$].captain, t0 == null ? member : t0) : null;
        dart.nullCheck(this[_entry]).resolve(disposition);
      }
    }
  };
  (team._CombiningGestureArenaMember.new = function(_owner, _pointer) {
    if (_owner == null) dart.nullFailed(L0, 22, 37, "_owner");
    if (_pointer == null) dart.nullFailed(L0, 22, 50, "_pointer");
    this[_members] = JSArrayOfGestureArenaMember().of([]);
    this[_resolved] = false;
    this[_winner] = null;
    this[_entry] = null;
    this[_owner$] = _owner;
    this[_pointer$] = _pointer;
    ;
  }).prototype = team._CombiningGestureArenaMember.prototype;
  dart.addTypeTests(team._CombiningGestureArenaMember);
  dart.addTypeCaches(team._CombiningGestureArenaMember);
  dart.setMethodSignature(team._CombiningGestureArenaMember, () => ({
    __proto__: dart.getMethods(team._CombiningGestureArenaMember.__proto__),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_close]: dart.fnType(dart.void, []),
    [_add]: dart.fnType(arena.GestureArenaEntry, [core.int, arena.GestureArenaMember]),
    [_resolve]: dart.fnType(dart.void, [arena.GestureArenaMember, arena.GestureDisposition])
  }));
  dart.setLibraryUri(team._CombiningGestureArenaMember, L1);
  dart.setFieldSignature(team._CombiningGestureArenaMember, () => ({
    __proto__: dart.getFields(team._CombiningGestureArenaMember.__proto__),
    [_owner$]: dart.finalFieldType(team.GestureArenaTeam),
    [_members]: dart.finalFieldType(core.List$(arena.GestureArenaMember)),
    [_pointer$]: dart.finalFieldType(core.int),
    [_resolved]: dart.fieldType(core.bool),
    [_winner]: dart.fieldType(dart.nullable(arena.GestureArenaMember)),
    [_entry]: dart.fieldType(dart.nullable(arena.GestureArenaEntry))
  }));
  var captain = dart.privateName(team, "GestureArenaTeam.captain");
  team.GestureArenaTeam = class GestureArenaTeam extends core.Object {
    get captain() {
      return this[captain];
    }
    set captain(value) {
      this[captain] = value;
    }
    add(pointer, member) {
      if (pointer == null) dart.nullFailed(L0, 142, 29, "pointer");
      if (member == null) dart.nullFailed(L0, 142, 57, "member");
      let combiner = this[_combiners][$putIfAbsent](pointer, dart.fn(() => new team._CombiningGestureArenaMember.new(this, pointer), VoidTo_CombiningGestureArenaMember()));
      return combiner[_add](pointer, member);
    }
  };
  (team.GestureArenaTeam.new = function() {
    this[_combiners] = new (IdentityMapOfint$_CombiningGestureArenaMember()).new();
    this[captain] = null;
    ;
  }).prototype = team.GestureArenaTeam.prototype;
  dart.addTypeTests(team.GestureArenaTeam);
  dart.addTypeCaches(team.GestureArenaTeam);
  dart.setMethodSignature(team.GestureArenaTeam, () => ({
    __proto__: dart.getMethods(team.GestureArenaTeam.__proto__),
    add: dart.fnType(arena.GestureArenaEntry, [core.int, arena.GestureArenaMember])
  }));
  dart.setLibraryUri(team.GestureArenaTeam, L1);
  dart.setFieldSignature(team.GestureArenaTeam, () => ({
    __proto__: dart.getFields(team.GestureArenaTeam.__proto__),
    [_combiners]: dart.finalFieldType(core.Map$(core.int, team._CombiningGestureArenaMember)),
    captain: dart.fieldType(dart.nullable(arena.GestureArenaMember))
  }));
  dart.trackLibraries("packages/flutter/src/gestures/team.dart", {
    "package:flutter/src/gestures/team.dart": team
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["team.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAY2B;;;;;;;UAGO;AACU,MAAxC,AAAU,2BAAS,eAAS,WAAW;IACzC;;;;;;;;;;;mDARiC,WAAgB;QAAhB;QAAgB;IAAhB;IAAgB;;EAAQ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;kBAuBlC;;;AACrB,YAAO,AAAS,mBAAG,OAAO;AAC1B,YAAO,AAAgB,iBAAL,kBAAQ,AAAS;AAC3B,MAAR;AACyC,MAAzC,AAAQ,iBAAA,OAAR,iBAA2B,KAAf,AAAO,6BAAA,OAAW,AAAQ,sBAAC,WAA/B;AACR,eAA8B,SAAU;AACtC,yBAAI,MAAM,EAAI,gBACZ,AAAO,AAAsB,MAAvB,eAAe,OAAO;;AAED,MAAxB,AAAE,eAAT,6BAAuB,OAAO;IAChC;;UAGuB;AACrB,YAAO,AAAS,mBAAG,OAAO;AAClB,MAAR;AACA,eAA8B,SAAU;AACT,QAA7B,AAAO,MAAD,eAAe,OAAO;IAChC;;AAGE,WAAO,WAAC;AACQ,MAAhB,kBAAY;AACwB,qBAAW,AAAO,AAAW,mCAAO;AACxE,WAAgB,YAAT,QAAQ,EAAI;IACrB;WAE2B,SAA4B;UAA5B;UAA4B;AACrD,WAAO,WAAC;AACR,YAAO,AAAS,mBAAG,OAAO;AACN,MAApB,AAAS,qBAAI,MAAM;AACgD,MAAnE,AAAO,gBAAA,OAAP,eAAkC,AAAE,AAAa,eAAvB,kDAA2B,OAAO,EAAE,QAAvD;AACP,YAAO,0CAA4B,MAAM,MAAM;IACjD;eAEiC,QAA2B;;UAA3B;UAA2B;AAC1D,oBAAI,kBACF;AACF,UAAgB,YAAZ,WAAW,EAAuB;AACb,QAAvB,AAAS,wBAAO,MAAM;AACQ,QAA9B,AAAO,MAAD,eAAe;AACrB,sBAAI,AAAS,2BACL,AAAE,AAAoB,eAA5B,sBAAgB,WAAW;;AAE7B,aAAmB,YAAZ,WAAW,EAAuB;AACL,QAApC,AAAQ,iBAAA,OAAR,iBAA2B,KAAf,AAAO,6BAAA,OAAW,MAAM,SAA5B;AACoB,QAAtB,AAAE,eAAR,sBAAgB,WAAW;;IAE/B;;oDA3DkC,QAAa;QAAb;QAAa;IAGhB,iBAA+B;IAGzD,kBAAY;IACG;IACD;IARe;IAAa;;EAAS;;;;;;;;;;;;;;;;;;;;;;;IA+GpC;;;;;;QASM,SAA4B;UAA5B;UAA4B;AACjB,qBAAW,AAAW,+BACrD,OAAO,EAAE,cAAM,0CAA6B,MAAM,OAAO;AAC7D,YAAO,AAAS,SAAD,OAAM,OAAO,EAAE,MAAM;IACtC;;;IApB6C,mBAAgD;IAOzE;;EActB","file":"../../../../../../../../../../packages/flutter/src/gestures/team.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__team: team
  };
}));

//# sourceMappingURL=team.dart.lib.js.map
