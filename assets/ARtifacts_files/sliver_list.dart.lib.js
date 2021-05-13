define(['dart_sdk', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/rendering/sliver_multi_box_adaptor.dart'], (function load__packages__flutter__src__rendering__sliver_list_dart(dart_sdk, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__rendering__sliver_multi_box_adaptor$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const sliver = packages__flutter__src__rendering__sliver$46dart.src__rendering__sliver;
  const sliver_multi_box_adaptor = packages__flutter__src__rendering__sliver_multi_box_adaptor$46dart.src__rendering__sliver_multi_box_adaptor;
  var sliver_list = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/sliver_list.dart";
  var L1 = "package:flutter/src/rendering/sliver_list.dart";
  sliver_list.RenderSliverList = class RenderSliverList extends sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor {
    performLayout() {
      let constraints = this.constraints;
      this.childManager.didStartLayout();
      this.childManager.setDidUnderflow(false);
      let scrollOffset = dart.notNull(constraints.scrollOffset) + dart.notNull(constraints.cacheOrigin);
      if (!(scrollOffset >= 0.0)) dart.assertFailed(null, L0, 52, 12, "scrollOffset >= 0.0");
      let remainingExtent = constraints.remainingCacheExtent;
      if (!(dart.notNull(remainingExtent) >= 0.0)) dart.assertFailed(null, L0, 54, 12, "remainingExtent >= 0.0");
      let targetEndScrollOffset = scrollOffset + dart.notNull(remainingExtent);
      let childConstraints = constraints.asBoxConstraints();
      let leadingGarbage = 0;
      let trailingGarbage = 0;
      let reachedEnd = false;
      if (this.firstChild == null) {
        if (!dart.test(this.addInitialChild())) {
          this.geometry = sliver.SliverGeometry.zero;
          this.childManager.didFinishLayout();
          return;
        }
      }
      let leadingChildWithLayout = null;
      let trailingChildWithLayout = null;
      let earliestUsefulChild = this.firstChild;
      if (this.childScrollOffset(dart.nullCheck(this.firstChild)) == null) {
        let leadingChildrenWithoutLayoutOffset = 0;
        while (earliestUsefulChild != null && this.childScrollOffset(earliestUsefulChild) == null) {
          earliestUsefulChild = this.childAfter(earliestUsefulChild);
          leadingChildrenWithoutLayoutOffset = leadingChildrenWithoutLayoutOffset + 1;
        }
        this.collectGarbage(leadingChildrenWithoutLayoutOffset, 0);
        if (this.firstChild == null) {
          if (!dart.test(this.addInitialChild())) {
            this.geometry = sliver.SliverGeometry.zero;
            this.childManager.didFinishLayout();
            return;
          }
        }
      }
      earliestUsefulChild = this.firstChild;
      for (let earliestScrollOffset = dart.nullCheck(this.childScrollOffset(dart.nullCheck(earliestUsefulChild))); earliestScrollOffset > scrollOffset; earliestScrollOffset = dart.nullCheck(this.childScrollOffset(earliestUsefulChild))) {
        earliestUsefulChild = this.insertAndLayoutLeadingChild(childConstraints, {parentUsesSize: true});
        if (earliestUsefulChild == null) {
          let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(dart.nullCheck(this.firstChild).parentData));
          childParentData.layoutOffset = 0.0;
          if (scrollOffset === 0.0) {
            dart.nullCheck(this.firstChild).layout(childConstraints, {parentUsesSize: true});
            earliestUsefulChild = this.firstChild;
            leadingChildWithLayout = earliestUsefulChild;
            trailingChildWithLayout == null ? trailingChildWithLayout = earliestUsefulChild : null;
            break;
          } else {
            this.geometry = new sliver.SliverGeometry.new({scrollOffsetCorrection: -scrollOffset});
            return;
          }
        }
        let firstChildScrollOffset = earliestScrollOffset - dart.notNull(this.paintExtentOf(dart.nullCheck(this.firstChild)));
        if (firstChildScrollOffset < -1e-10) {
          this.geometry = new sliver.SliverGeometry.new({scrollOffsetCorrection: -firstChildScrollOffset});
          let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(dart.nullCheck(this.firstChild).parentData));
          childParentData.layoutOffset = 0.0;
          return;
        }
        let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(earliestUsefulChild.parentData));
        childParentData.layoutOffset = firstChildScrollOffset;
        if (!dart.equals(earliestUsefulChild, this.firstChild)) dart.assertFailed(null, L0, 168, 14, "earliestUsefulChild == firstChild");
        leadingChildWithLayout = earliestUsefulChild;
        trailingChildWithLayout == null ? trailingChildWithLayout = earliestUsefulChild : null;
      }
      if (!(dart.nullCheck(this.childScrollOffset(dart.nullCheck(this.firstChild))) > -1e-10)) dart.assertFailed(null, L0, 173, 12, "childScrollOffset(firstChild!)! > -precisionErrorTolerance");
      if (scrollOffset < 1e-10) {
        while (dart.notNull(this.indexOf(dart.nullCheck(this.firstChild))) > 0) {
          let earliestScrollOffset = dart.nullCheck(this.childScrollOffset(dart.nullCheck(this.firstChild)));
          earliestUsefulChild = this.insertAndLayoutLeadingChild(childConstraints, {parentUsesSize: true});
          if (!(earliestUsefulChild != null)) dart.assertFailed(null, L0, 186, 16, "earliestUsefulChild != null");
          let firstChildScrollOffset = earliestScrollOffset - dart.notNull(this.paintExtentOf(dart.nullCheck(this.firstChild)));
          let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(dart.nullCheck(this.firstChild).parentData));
          childParentData.layoutOffset = 0.0;
          if (firstChildScrollOffset < -1e-10) {
            this.geometry = new sliver.SliverGeometry.new({scrollOffsetCorrection: -firstChildScrollOffset});
            return;
          }
        }
      }
      if (!dart.equals(earliestUsefulChild, this.firstChild)) dart.assertFailed(null, L0, 208, 12, "earliestUsefulChild == firstChild");
      if (!(dart.nullCheck(this.childScrollOffset(dart.nullCheck(earliestUsefulChild))) <= scrollOffset)) dart.assertFailed(null, L0, 209, 12, "childScrollOffset(earliestUsefulChild!)! <= scrollOffset");
      if (leadingChildWithLayout == null) {
        dart.nullCheck(earliestUsefulChild).layout(childConstraints, {parentUsesSize: true});
        leadingChildWithLayout = earliestUsefulChild;
        trailingChildWithLayout = earliestUsefulChild;
      }
      let inLayoutRange = true;
      let child = earliestUsefulChild;
      let index = this.indexOf(dart.nullCheck(child));
      let endScrollOffset = dart.nullCheck(this.childScrollOffset(child)) + dart.notNull(this.paintExtentOf(child));
      const advance = () => {
        if (!(child != null)) dart.assertFailed(null, L0, 229, 14, "child != null");
        if (dart.equals(child, trailingChildWithLayout)) inLayoutRange = false;
        child = this.childAfter(dart.nullCheck(child));
        if (child == null) inLayoutRange = false;
        index = dart.notNull(index) + 1;
        if (!inLayoutRange) {
          if (child == null || this.indexOf(dart.nullCheck(child)) != index) {
            child = this.insertAndLayoutChild(childConstraints, {after: trailingChildWithLayout, parentUsesSize: true});
            if (child == null) {
              return false;
            }
          } else {
            dart.nullCheck(child).layout(childConstraints, {parentUsesSize: true});
          }
          trailingChildWithLayout = child;
        }
        if (!(child != null)) dart.assertFailed(null, L0, 253, 14, "child != null");
        let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(dart.nullCheck(child).parentData));
        childParentData.layoutOffset = endScrollOffset;
        if (!(childParentData.index == index)) dart.assertFailed(null, L0, 256, 14, "childParentData.index == index");
        endScrollOffset = dart.nullCheck(this.childScrollOffset(dart.nullCheck(child))) + dart.notNull(this.paintExtentOf(dart.nullCheck(child)));
        return true;
      };
      dart.fn(advance, VoidTobool());
      while (endScrollOffset < scrollOffset) {
        leadingGarbage = leadingGarbage + 1;
        if (!dart.test(advance())) {
          if (!(leadingGarbage === this.childCount)) dart.assertFailed(null, L0, 265, 16, "leadingGarbage == childCount");
          if (!(child == null)) dart.assertFailed(null, L0, 266, 16, "child == null");
          this.collectGarbage(leadingGarbage - 1, 0);
          if (!dart.equals(this.firstChild, this.lastChild)) dart.assertFailed(null, L0, 269, 16, "firstChild == lastChild");
          let extent = dart.nullCheck(this.childScrollOffset(dart.nullCheck(this.lastChild))) + dart.notNull(this.paintExtentOf(dart.nullCheck(this.lastChild)));
          this.geometry = new sliver.SliverGeometry.new({scrollExtent: extent, paintExtent: 0.0, maxPaintExtent: extent});
          return;
        }
      }
      while (endScrollOffset < targetEndScrollOffset) {
        if (!dart.test(advance())) {
          reachedEnd = true;
          break;
        }
      }
      if (child != null) {
        child = this.childAfter(dart.nullCheck(child));
        while (child != null) {
          trailingGarbage = trailingGarbage + 1;
          child = this.childAfter(dart.nullCheck(child));
        }
      }
      this.collectGarbage(leadingGarbage, trailingGarbage);
      if (!dart.test(this.debugAssertChildListIsNonEmptyAndContiguous())) dart.assertFailed(null, L0, 302, 12, "debugAssertChildListIsNonEmptyAndContiguous()");
      let estimatedMaxScrollOffset = null;
      if (reachedEnd) {
        estimatedMaxScrollOffset = endScrollOffset;
      } else {
        estimatedMaxScrollOffset = this.childManager.estimateMaxScrollOffset(constraints, {firstIndex: this.indexOf(dart.nullCheck(this.firstChild)), lastIndex: this.indexOf(dart.nullCheck(this.lastChild)), leadingScrollOffset: this.childScrollOffset(dart.nullCheck(this.firstChild)), trailingScrollOffset: endScrollOffset});
        if (!(dart.notNull(estimatedMaxScrollOffset) >= endScrollOffset - dart.nullCheck(this.childScrollOffset(dart.nullCheck(this.firstChild))))) dart.assertFailed(null, L0, 314, 14, "estimatedMaxScrollOffset >= endScrollOffset - childScrollOffset(firstChild!)!");
      }
      let paintExtent = this.calculatePaintOffset(constraints, {from: dart.nullCheck(this.childScrollOffset(dart.nullCheck(this.firstChild))), to: endScrollOffset});
      let cacheExtent = this.calculateCacheOffset(constraints, {from: dart.nullCheck(this.childScrollOffset(dart.nullCheck(this.firstChild))), to: endScrollOffset});
      let targetEndScrollOffsetForPaint = dart.notNull(constraints.scrollOffset) + dart.notNull(constraints.remainingPaintExtent);
      this.geometry = new sliver.SliverGeometry.new({scrollExtent: estimatedMaxScrollOffset, paintExtent: paintExtent, cacheExtent: cacheExtent, maxPaintExtent: estimatedMaxScrollOffset, hasVisualOverflow: endScrollOffset > targetEndScrollOffsetForPaint || dart.notNull(constraints.scrollOffset) > 0.0});
      if (estimatedMaxScrollOffset === endScrollOffset) this.childManager.setDidUnderflow(true);
      this.childManager.didFinishLayout();
    }
  };
  (sliver_list.RenderSliverList.new = function(opts) {
    let childManager = opts && 'childManager' in opts ? opts.childManager : null;
    if (childManager == null) dart.nullFailed(L0, 42, 42, "childManager");
    sliver_list.RenderSliverList.__proto__.new.call(this, {childManager: childManager});
    ;
  }).prototype = sliver_list.RenderSliverList.prototype;
  dart.addTypeTests(sliver_list.RenderSliverList);
  dart.addTypeCaches(sliver_list.RenderSliverList);
  dart.setMethodSignature(sliver_list.RenderSliverList, () => ({
    __proto__: dart.getMethods(sliver_list.RenderSliverList.__proto__),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(sliver_list.RenderSliverList, L1);
  dart.trackLibraries("packages/flutter/src/rendering/sliver_list.dart", {
    "package:flutter/src/rendering/sliver_list.dart": sliver_list
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sliver_list.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/sliver_list.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__sliver_list: sliver_list
  };
}));

//# sourceMappingURL=sliver_list.dart.lib.js.map
