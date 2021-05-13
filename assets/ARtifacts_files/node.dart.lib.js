define(['dart_sdk'], (function load__packages__flutter__src__foundation__node_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var node = Object.create(dart.library);
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(false);
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/foundation/node.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/foundation/node.dart";
  var _depth = dart.privateName(node, "_depth");
  var _owner = dart.privateName(node, "_owner");
  var _parent = dart.privateName(node, "_parent");
  node.AbstractNode = class AbstractNode extends core.Object {
    get depth() {
      return this[_depth];
    }
    redepthChild(child) {
      if (child == null) dart.nullFailed(L0, 55, 34, "child");
      if (!dart.equals(child.owner, this.owner)) dart.assertFailed(null, L0, 56, 12, "child.owner == owner");
      if (dart.notNull(child[_depth]) <= dart.notNull(this[_depth])) {
        child[_depth] = dart.notNull(this[_depth]) + 1;
        child.redepthChildren();
      }
    }
    redepthChildren() {
    }
    get owner() {
      return this[_owner];
    }
    get attached() {
      return this[_owner] != null;
    }
    attach(owner) {
      core.Object.as(owner);
      if (owner == null) dart.nullFailed(L0, 91, 32, "owner");
      if (!(owner != null)) dart.assertFailed(null, L0, 92, 12, "owner != null");
      if (!(this[_owner] == null)) dart.assertFailed(null, L0, 93, 12, "_owner == null");
      this[_owner] = owner;
    }
    detach() {
      if (!(this[_owner] != null)) dart.assertFailed(null, L0, 106, 12, "_owner != null");
      this[_owner] = null;
      if (!(this.parent == null || dart.equals(this.attached, dart.nullCheck(this.parent).attached))) dart.assertFailed(null, L0, 108, 12, "parent == null || attached == parent!.attached");
    }
    get parent() {
      return this[_parent];
    }
    adoptChild(child) {
      node.AbstractNode.as(child);
      if (child == null) dart.nullFailed(L0, 120, 42, "child");
      if (!(child != null)) dart.assertFailed(null, L0, 121, 12, "child != null");
      if (!(child[_parent] == null)) dart.assertFailed(null, L0, 122, 12, "child._parent == null");
      if (!dart.test(dart.fn(() => {
        let node = this;
        while (node.parent != null)
          node = dart.nullCheck(node.parent);
        if (!!node[$_equals](child)) dart.assertFailed(null, L0, 127, 14, "node != child");
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 123, 12, "() {\n      AbstractNode node = this;\n      while (node.parent != null)\n        node = node.parent!;\n      assert(node != child); // indicates we are about to create a cycle\n      return true;\n    }()");
      child[_parent] = this;
      if (dart.test(this.attached)) child.attach(dart.nullCheck(this[_owner]));
      this.redepthChild(child);
    }
    dropChild(child) {
      node.AbstractNode.as(child);
      if (child == null) dart.nullFailed(L0, 141, 41, "child");
      if (!(child != null)) dart.assertFailed(null, L0, 142, 12, "child != null");
      if (!dart.equals(child[_parent], this)) dart.assertFailed(null, L0, 143, 12, "child._parent == this");
      if (!dart.equals(child.attached, this.attached)) dart.assertFailed(null, L0, 144, 12, "child.attached == attached");
      child[_parent] = null;
      if (dart.test(this.attached)) child.detach();
    }
  };
  (node.AbstractNode.new = function() {
    this[_depth] = 0;
    this[_owner] = null;
    this[_parent] = null;
    ;
  }).prototype = node.AbstractNode.prototype;
  dart.addTypeTests(node.AbstractNode);
  dart.addTypeCaches(node.AbstractNode);
  dart.setMethodSignature(node.AbstractNode, () => ({
    __proto__: dart.getMethods(node.AbstractNode.__proto__),
    redepthChild: dart.fnType(dart.void, [node.AbstractNode]),
    redepthChildren: dart.fnType(dart.void, []),
    attach: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    detach: dart.fnType(dart.void, []),
    adoptChild: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    dropChild: dart.fnType(dart.void, [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(node.AbstractNode, () => ({
    __proto__: dart.getGetters(node.AbstractNode.__proto__),
    depth: core.int,
    owner: dart.nullable(core.Object),
    attached: core.bool,
    parent: dart.nullable(node.AbstractNode)
  }));
  dart.setLibraryUri(node.AbstractNode, L1);
  dart.setFieldSignature(node.AbstractNode, () => ({
    __proto__: dart.getFields(node.AbstractNode.__proto__),
    [_depth]: dart.fieldType(core.int),
    [_owner]: dart.fieldType(dart.nullable(core.Object)),
    [_parent]: dart.fieldType(dart.nullable(node.AbstractNode))
  }));
  dart.trackLibraries("packages/flutter/src/foundation/node.dart", {
    "package:flutter/src/foundation/node.dart": node
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["node.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;AA8CmB;IAAM;;UAQQ;AAC7B,WAAmB,YAAZ,AAAM,KAAD,QAAU;AACtB,UAAiB,aAAb,AAAM,KAAD,0BAAW;AACO,QAAzB,AAAM,KAAD,WAAiB,aAAP,gBAAS;AACD,QAAvB,AAAM,KAAD;;IAET;;IAMyB;;AAKJ;IAAM;;AAQN,YAAA,AAAO,iBAAG;IAAI;;qBAWN;;AAC3B,YAAO,AAAM,KAAD,IAAI;AAChB,YAAO,AAAO,gBAAG;AACH,MAAd,eAAS,KAAK;IAChB;;AAWE,YAAO,AAAO,gBAAG;AACJ,MAAb,eAAS;AACT,YAAO,AAAO,AAAQ,eAAL,QAAiB,YAAT,eAAkB,AAAE,eAAR;IACvC;;AAG4B;IAAO;;2BAQI;;AACrC,YAAO,AAAM,KAAD,IAAI;AAChB,YAAO,AAAM,AAAQ,KAAT,aAAY;AACxB,qBAAO,AAMN;AALc,mBAAO;AACpB,eAAO,AAAK,IAAD,WAAW;AACD,UAAnB,OAAkB,eAAX,AAAK,IAAD;AACb,aAAY,CAAL,IAAI,WAAI,KAAK;AACpB,cAAO;;AAEW,MAApB,AAAM,KAAD,YAAW;AAChB,oBAAI,gBACF,AAAM,AAAe,KAAhB,QAAc,eAAN;AACI,MAAnB,kBAAa,KAAK;IACpB;;2BAOsC;;AACpC,YAAO,AAAM,KAAD,IAAI;AAChB,WAAqB,YAAd,AAAM,KAAD,WAAY;AACxB,WAAsB,YAAf,AAAM,KAAD,WAAa;AACL,MAApB,AAAM,KAAD,YAAW;AAChB,oBAAI,gBACF,AAAM,AAAQ,KAAT;IACT;;;IApGI,eAAS;IAyBL;IAwCM;;EAoChB","file":"../../../../../../../../../../packages/flutter/src/foundation/node.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__node: node
  };
}));

//# sourceMappingURL=node.dart.lib.js.map
