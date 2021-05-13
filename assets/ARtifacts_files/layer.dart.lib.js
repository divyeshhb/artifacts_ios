define(['dart_sdk', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/foundation/node.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/painting/matrix_utils.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/gestures/hit_test.dart', 'packages/flutter/src/services/system_chrome.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/foundation/print.dart', 'packages/flutter/src/semantics/semantics.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/semantics/semantics_event.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/services/system_channels.dart', 'packages/flutter/src/painting/debug.dart', 'packages/flutter/src/scheduler/binding.dart', 'packages/flutter/src/semantics/binding.dart', 'packages/flutter/src/gestures/binding.dart', 'packages/flutter/src/foundation/binding.dart', 'packages/flutter/src/painting/binding.dart', 'packages/flutter/src/painting/clip.dart', 'packages/flutter/src/painting/edge_insets.dart'], (function load__packages__flutter__src__rendering__layer_dart(dart_sdk, packages__flutter__src__foundation__object$46dart, packages__flutter__src__foundation__node$46dart, packages__flutter__src__foundation__debug$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__painting__matrix_utils$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__gestures__hit_test$46dart, packages__flutter__src__services__system_chrome$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__foundation__print$46dart, packages__flutter__src__semantics__semantics$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__semantics__semantics_event$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__services__system_channels$46dart, packages__flutter__src__painting__debug$46dart, packages__flutter__src__scheduler__binding$46dart, packages__flutter__src__semantics__binding$46dart, packages__flutter__src__gestures__binding$46dart, packages__flutter__src__foundation__binding$46dart, packages__flutter__src__painting__binding$46dart, packages__flutter__src__painting__clip$46dart, packages__flutter__src__painting__edge_insets$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const developer = dart_sdk.developer;
  const _internal = dart_sdk._internal;
  const io = dart_sdk.io;
  const collection = dart_sdk.collection;
  const typed_data = dart_sdk.typed_data;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const node = packages__flutter__src__foundation__node$46dart.src__foundation__node;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const debug = packages__flutter__src__foundation__debug$46dart.src__foundation__debug;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const matrix_utils = packages__flutter__src__painting__matrix_utils$46dart.src__painting__matrix_utils;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const hit_test = packages__flutter__src__gestures__hit_test$46dart.src__gestures__hit_test;
  const system_chrome = packages__flutter__src__services__system_chrome$46dart.src__services__system_chrome;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  const semantics = packages__flutter__src__semantics__semantics$46dart.src__semantics__semantics;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const semantics_event = packages__flutter__src__semantics__semantics_event$46dart.src__semantics__semantics_event;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const system_channels = packages__flutter__src__services__system_channels$46dart.src__services__system_channels;
  const platform_channel = packages__flutter__src__services__system_channels$46dart.src__services__platform_channel;
  const message_codecs = packages__flutter__src__services__system_channels$46dart.src__services__message_codecs;
  const binding = packages__flutter__src__services__system_channels$46dart.src__services__binding;
  const debug$ = packages__flutter__src__painting__debug$46dart.src__painting__debug;
  const binding$ = packages__flutter__src__scheduler__binding$46dart.src__scheduler__binding;
  const binding$0 = packages__flutter__src__semantics__binding$46dart.src__semantics__binding;
  const binding$1 = packages__flutter__src__gestures__binding$46dart.src__gestures__binding;
  const binding$2 = packages__flutter__src__foundation__binding$46dart.src__foundation__binding;
  const binding$3 = packages__flutter__src__painting__binding$46dart.src__painting__binding;
  const clip = packages__flutter__src__painting__clip$46dart.src__painting__clip;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  var layer$ = Object.create(dart.library);
  var view = Object.create(dart.library);
  var mouse_cursor = Object.create(dart.library);
  var mouse_tracking = Object.create(dart.library);
  var binding$4 = Object.create(dart.library);
  var object$ = Object.create(dart.library);
  var debug$0 = Object.create(dart.library);
  var box = Object.create(dart.library);
  var $add = dartx.add;
  var $runtimeType = dartx.runtimeType;
  var $isEmpty = dartx.isEmpty;
  var $first = dartx.first;
  var $map = dartx.map;
  var $whereType = dartx.whereType;
  var $toList = dartx.toList;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $any = dartx.any;
  var $addAll = dartx.addAll;
  var $isNotEmpty = dartx.isNotEmpty;
  var $_equals = dartx._equals;
  var $ceil = dartx.ceil;
  var $isFinite = dartx.isFinite;
  var $every = dartx.every;
  var $modulo = dartx['%'];
  var $split = dartx.split;
  var $matchAsPrefix = dartx.matchAsPrefix;
  var $trim = dartx.trim;
  var $single = dartx.single;
  var $clear = dartx.clear;
  var $putIfAbsent = dartx.putIfAbsent;
  var $remove = dartx.remove;
  var $keys = dartx.keys;
  var $_set = dartx._set;
  var $containsKey = dartx.containsKey;
  var $values = dartx.values;
  var $hashCode = dartx.hashCode;
  var $forEach = dartx.forEach;
  var $where = dartx.where;
  var $reversed = dartx.reversed;
  var $sort = dartx.sort;
  var $last = dartx.last;
  var $skip = dartx.skip;
  var $clamp = dartx.clamp;
  var $truncate = dartx.truncate;
  var $toDouble = dartx.toDouble;
  var $isNaN = dartx.isNaN;
  var $removeLast = dartx.removeLast;
  var $join = dartx.join;
  var $isInfinite = dartx.isInfinite;
  var $toStringAsFixed = dartx.toStringAsFixed;
  dart._checkModuleNullSafetyMode(false);
  var ContainerLayerN = () => (ContainerLayerN = dart.constFn(dart.nullable(layer$.ContainerLayer)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var DiagnosticsPropertyOfObject = () => (DiagnosticsPropertyOfObject = dart.constFn(diagnostics.DiagnosticsProperty$(core.Object)))();
  var DiagnosticsPropertyOfString = () => (DiagnosticsPropertyOfString = dart.constFn(diagnostics.DiagnosticsProperty$(core.String)))();
  var DiagnosticsPropertyOfRect = () => (DiagnosticsPropertyOfRect = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Rect)))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var ListOfDiagnosticsNode = () => (ListOfDiagnosticsNode = dart.constFn(core.List$(diagnostics.DiagnosticsNode)))();
  var VoidToListOfDiagnosticsNode = () => (VoidToListOfDiagnosticsNode = dart.constFn(dart.fnType(ListOfDiagnosticsNode(), [])))();
  var JSArrayOfPictureLayer = () => (JSArrayOfPictureLayer = dart.constFn(_interceptors.JSArray$(layer$.PictureLayer)))();
  var PathMetricTobool = () => (PathMetricTobool = dart.constFn(dart.fnType(core.bool, [ui.PathMetric])))();
  var JSArrayOfLayer = () => (JSArrayOfLayer = dart.constFn(_interceptors.JSArray$(layer$.Layer)))();
  var OffsetEngineLayerN = () => (OffsetEngineLayerN = dart.constFn(dart.nullable(ui.OffsetEngineLayer)))();
  var DiagnosticsPropertyOfOffset = () => (DiagnosticsPropertyOfOffset = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Offset)))();
  var ClipRectEngineLayerN = () => (ClipRectEngineLayerN = dart.constFn(dart.nullable(ui.ClipRectEngineLayer)))();
  var DiagnosticsPropertyOfClip = () => (DiagnosticsPropertyOfClip = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Clip)))();
  var ClipRRectEngineLayerN = () => (ClipRRectEngineLayerN = dart.constFn(dart.nullable(ui.ClipRRectEngineLayer)))();
  var DiagnosticsPropertyOfRRect = () => (DiagnosticsPropertyOfRRect = dart.constFn(diagnostics.DiagnosticsProperty$(ui.RRect)))();
  var ClipPathEngineLayerN = () => (ClipPathEngineLayerN = dart.constFn(dart.nullable(ui.ClipPathEngineLayer)))();
  var ColorFilterEngineLayerN = () => (ColorFilterEngineLayerN = dart.constFn(dart.nullable(ui.ColorFilterEngineLayer)))();
  var DiagnosticsPropertyOfColorFilter = () => (DiagnosticsPropertyOfColorFilter = dart.constFn(diagnostics.DiagnosticsProperty$(ui.ColorFilter)))();
  var ImageFilterEngineLayerN = () => (ImageFilterEngineLayerN = dart.constFn(dart.nullable(ui.ImageFilterEngineLayer)))();
  var DiagnosticsPropertyOfImageFilter = () => (DiagnosticsPropertyOfImageFilter = dart.constFn(diagnostics.DiagnosticsProperty$(ui.ImageFilter)))();
  var doubleTobool = () => (doubleTobool = dart.constFn(dart.fnType(core.bool, [core.double])))();
  var TransformEngineLayerN = () => (TransformEngineLayerN = dart.constFn(dart.nullable(ui.TransformEngineLayer)))();
  var OpacityEngineLayerN = () => (OpacityEngineLayerN = dart.constFn(dart.nullable(ui.OpacityEngineLayer)))();
  var ShaderMaskEngineLayerN = () => (ShaderMaskEngineLayerN = dart.constFn(dart.nullable(ui.ShaderMaskEngineLayer)))();
  var DiagnosticsPropertyOfShader = () => (DiagnosticsPropertyOfShader = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Shader)))();
  var DiagnosticsPropertyOfBlendMode = () => (DiagnosticsPropertyOfBlendMode = dart.constFn(diagnostics.DiagnosticsProperty$(ui.BlendMode)))();
  var BackdropFilterEngineLayerN = () => (BackdropFilterEngineLayerN = dart.constFn(dart.nullable(ui.BackdropFilterEngineLayer)))();
  var PhysicalShapeEngineLayerN = () => (PhysicalShapeEngineLayerN = dart.constFn(dart.nullable(ui.PhysicalShapeEngineLayer)))();
  var DiagnosticsPropertyOfLayerLink = () => (DiagnosticsPropertyOfLayerLink = dart.constFn(diagnostics.DiagnosticsProperty$(layer$.LayerLink)))();
  var JSArrayOfContainerLayer = () => (JSArrayOfContainerLayer = dart.constFn(_interceptors.JSArray$(layer$.ContainerLayer)))();
  var DiagnosticsPropertyOfSize = () => (DiagnosticsPropertyOfSize = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Size)))();
  var DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))();
  var DiagnosticsPropertyOfViewConfiguration = () => (DiagnosticsPropertyOfViewConfiguration = dart.constFn(diagnostics.DiagnosticsProperty$(view.ViewConfiguration)))();
  var RenderObjectTovoid = () => (RenderObjectTovoid = dart.constFn(dart.fnType(dart.void, [object$.RenderObject])))();
  var SyncIterableOfDiagnosticsNode = () => (SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(diagnostics.DiagnosticsNode)))();
  var IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics.DiagnosticsNode)))();
  var VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  var boolTodynamic = () => (boolTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.bool])))();
  var PipelineOwnerN = () => (PipelineOwnerN = dart.constFn(dart.nullable(object$.PipelineOwner)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var JSArrayOfRenderObject = () => (JSArrayOfRenderObject = dart.constFn(_interceptors.JSArray$(object$.RenderObject)))();
  var RenderObjectN = () => (RenderObjectN = dart.constFn(dart.nullable(object$.RenderObject)))();
  var JSArrayOfSemanticsNode = () => (JSArrayOfSemanticsNode = dart.constFn(_interceptors.JSArray$(semantics.SemanticsNode)))();
  var JSArrayOf_InterestingSemanticsFragment = () => (JSArrayOf_InterestingSemanticsFragment = dart.constFn(_interceptors.JSArray$(object$._InterestingSemanticsFragment)))();
  var LinkedHashSetOf_InterestingSemanticsFragment = () => (LinkedHashSetOf_InterestingSemanticsFragment = dart.constFn(collection.LinkedHashSet$(object$._InterestingSemanticsFragment)))();
  var ListOfSemanticsNode = () => (ListOfSemanticsNode = dart.constFn(core.List$(semantics.SemanticsNode)))();
  var ObjectN = () => (ObjectN = dart.constFn(dart.nullable(core.Object)))();
  var DiagnosticsPropertyOfObjectN = () => (DiagnosticsPropertyOfObjectN = dart.constFn(diagnostics.DiagnosticsProperty$(ObjectN())))();
  var DiagnosticsPropertyOfParentData = () => (DiagnosticsPropertyOfParentData = dart.constFn(diagnostics.DiagnosticsProperty$(object$.ParentData)))();
  var DiagnosticsPropertyOfConstraints = () => (DiagnosticsPropertyOfConstraints = dart.constFn(diagnostics.DiagnosticsProperty$(object$.Constraints)))();
  var DiagnosticsPropertyOfContainerLayer = () => (DiagnosticsPropertyOfContainerLayer = dart.constFn(diagnostics.DiagnosticsProperty$(layer$.ContainerLayer)))();
  var DiagnosticsPropertyOfSemanticsNode = () => (DiagnosticsPropertyOfSemanticsNode = dart.constFn(diagnostics.DiagnosticsProperty$(semantics.SemanticsNode)))();
  var LinkedMapOf_IntrinsicDimensionsCacheEntry$double = () => (LinkedMapOf_IntrinsicDimensionsCacheEntry$double = dart.constFn(_js_helper.LinkedMap$(box._IntrinsicDimensionsCacheEntry, core.double)))();
  var VoidTodouble = () => (VoidTodouble = dart.constFn(dart.fnType(core.double, [])))();
  var LinkedMapOfBoxConstraints$Size = () => (LinkedMapOfBoxConstraints$Size = dart.constFn(_js_helper.LinkedMap$(box.BoxConstraints, ui.Size)))();
  var VoidToSize = () => (VoidToSize = dart.constFn(dart.fnType(ui.Size, [])))();
  var doubleN = () => (doubleN = dart.constFn(dart.nullable(core.double)))();
  var LinkedMapOfTextBaseline$doubleN = () => (LinkedMapOfTextBaseline$doubleN = dart.constFn(_js_helper.LinkedMap$(ui.TextBaseline, doubleN())))();
  var VoidTodoubleN = () => (VoidTodoubleN = dart.constFn(dart.fnType(doubleN(), [])))();
  var DiagnosticsPropertyOfRenderBox = () => (DiagnosticsPropertyOfRenderBox = dart.constFn(diagnostics.DiagnosticsProperty$(box.RenderBox)))();
  var DiagnosticsPropertyOfBoxConstraints = () => (DiagnosticsPropertyOfBoxConstraints = dart.constFn(diagnostics.DiagnosticsProperty$(box.BoxConstraints)))();
  var doubleTodouble = () => (doubleTodouble = dart.constFn(dart.fnType(core.double, [core.double])))();
  var FnAndStringAnddoubleTodouble = () => (FnAndStringAnddoubleTodouble = dart.constFn(dart.fnType(core.double, [doubleTodouble(), core.String, core.double])))();
  var FnAndFnAndString__Tovoid = () => (FnAndFnAndString__Tovoid = dart.constFn(dart.fnType(dart.void, [doubleTodouble(), doubleTodouble(), core.String, core.double])))();
  var SizeTodynamic = () => (SizeTodynamic = dart.constFn(dart.fnType(dart.dynamic, [ui.Size])))();
  var IdentityMapOfint$MouseCursorSession = () => (IdentityMapOfint$MouseCursorSession = dart.constFn(_js_helper.IdentityMap$(core.int, mouse_cursor.MouseCursorSession)))();
  var MouseTrackerAnnotationToMouseCursor = () => (MouseTrackerAnnotationToMouseCursor = dart.constFn(dart.fnType(mouse_cursor.MouseCursor, [mouse_tracking.MouseTrackerAnnotation])))();
  var IdentityMapOfint$_MouseState = () => (IdentityMapOfint$_MouseState = dart.constFn(_js_helper.IdentityMap$(core.int, mouse_tracking._MouseState)))();
  var LinkedMapOfMouseTrackerAnnotation$Matrix4 = () => (LinkedMapOfMouseTrackerAnnotation$Matrix4 = dart.constFn(_js_helper.LinkedMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4)))();
  var LinkedHashMapOfMouseTrackerAnnotation$Matrix4 = () => (LinkedHashMapOfMouseTrackerAnnotation$Matrix4 = dart.constFn(collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4)))();
  var IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  var FunctionN = () => (FunctionN = dart.constFn(dart.nullable(core.Function)))();
  var FlagsSummaryOfFunctionN = () => (FlagsSummaryOfFunctionN = dart.constFn(diagnostics.FlagsSummary$(FunctionN())))();
  var IdentityMapOfString$FunctionN = () => (IdentityMapOfString$FunctionN = dart.constFn(_js_helper.IdentityMap$(core.String, FunctionN())))();
  var DiagnosticsPropertyOfMouseCursor = () => (DiagnosticsPropertyOfMouseCursor = dart.constFn(diagnostics.DiagnosticsProperty$(mouse_cursor.MouseCursor)))();
  var DiagnosticsPropertyOfPointerEvent = () => (DiagnosticsPropertyOfPointerEvent = dart.constFn(diagnostics.DiagnosticsProperty$(events.PointerEvent)))();
  var MapOfMouseTrackerAnnotation$Matrix4 = () => (MapOfMouseTrackerAnnotation$Matrix4 = dart.constFn(core.Map$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4)))();
  var DiagnosticsPropertyOfMapOfMouseTrackerAnnotation$Matrix4 = () => (DiagnosticsPropertyOfMapOfMouseTrackerAnnotation$Matrix4 = dart.constFn(diagnostics.DiagnosticsProperty$(MapOfMouseTrackerAnnotation$Matrix4())))();
  var MouseTrackerAnnotationAndMatrix4Tovoid = () => (MouseTrackerAnnotationAndMatrix4Tovoid = dart.constFn(dart.fnType(dart.void, [mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4])))();
  var MouseTrackerAnnotationTobool = () => (MouseTrackerAnnotationTobool = dart.constFn(dart.fnType(core.bool, [mouse_tracking.MouseTrackerAnnotation])))();
  var FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  var VoidToFutureOfbool = () => (VoidToFutureOfbool = dart.constFn(dart.fnType(FutureOfbool(), [])))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var boolToFutureOfvoid = () => (boolToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [core.bool])))();
  var VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  var VoidToHitTestResult = () => (VoidToHitTestResult = dart.constFn(dart.fnType(hit_test.HitTestResult, [])))();
  var DurationTovoid = () => (DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))();
  var VoidToFn = () => (VoidToFn = dart.constFn(dart.fnType(RenderObjectTovoid(), [])))();
  var FnTodynamic = () => (FnTodynamic = dart.constFn(dart.fnType(dart.dynamic, [RenderObjectTovoid()])))();
  var OffsetLayerN = () => (OffsetLayerN = dart.constFn(dart.nullable(layer$.OffsetLayer)))();
  var LinkedHashSetOfRenderObject = () => (LinkedHashSetOfRenderObject = dart.constFn(collection.LinkedHashSet$(object$.RenderObject)))();
  var RenderObjectAndRenderObjectToint = () => (RenderObjectAndRenderObjectToint = dart.constFn(dart.fnType(core.int, [object$.RenderObject, object$.RenderObject])))();
  var LinkedHashSetOfSemanticsTag = () => (LinkedHashSetOfSemanticsTag = dart.constFn(collection.LinkedHashSet$(semantics.SemanticsTag)))();
  var DiagnosticsNodeTovoid = () => (DiagnosticsNodeTovoid = dart.constFn(dart.fnType(dart.void, [diagnostics.DiagnosticsNode])))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var doubleAnddoubleAndStringToString = () => (doubleAnddoubleAndStringToString = dart.constFn(dart.fnType(core.String, [core.double, core.double, core.String])))();
  var _IntrinsicDimensionL = () => (_IntrinsicDimensionL = dart.constFn(dart.legacy(box._IntrinsicDimension)))();
  var OffsetN = () => (OffsetN = dart.constFn(dart.nullable(ui.Offset)))();
  var BoxHitTestResultAndOffsetNTobool = () => (BoxHitTestResultAndOffsetNTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, OffsetN()])))();
  const CT = Object.create(null);
  var L5 = "package:flutter/src/rendering/object.dart";
  var L10 = "package:flutter/src/rendering/mouse_tracking.dart";
  var L4 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/object.dart";
  var L9 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/mouse_tracking.dart";
  var L7 = "package:flutter/src/rendering/box.dart";
  var L3 = "package:flutter/src/rendering/view.dart";
  var L14 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/debug.dart";
  var L12 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/binding.dart";
  var L2 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/view.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/layer.dart";
  var L13 = "package:flutter/src/rendering/binding.dart";
  var L11 = "package:flutter/src/rendering/mouse_cursor.dart";
  var L8 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/mouse_cursor.dart";
  var L6 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/box.dart";
  var L1 = "package:flutter/src/rendering/layer.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.FilterQuality.prototype,
        [_name]: "FilterQuality.low",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4289331200.0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name]: "Clip.hardEdge",
        index: 1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name]: "Clip.antiAlias",
        index: 2
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name]: "Clip.none",
        index: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.android",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.fuchsia",
        index: 1
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.iOS",
        index: 2
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.linux",
        index: 3
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.macOS",
        index: 4
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.windows",
        index: 5
      });
    },
    get C13() {
      return C13 = dart.fn(object$.RenderObject._cleanChildRelayoutBoundary, RenderObjectTovoid());
    },
    get C14() {
      return C14 = dart.const({
        __proto__: diagnostics.DiagnosticLevel.prototype,
        [_name$0]: "DiagnosticLevel.info",
        index: 3
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: diagnostics.DiagnosticLevel.prototype,
        [_name$0]: "DiagnosticLevel.debug",
        index: 2
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.25,
        [Cubic_b]: 0.1,
        [Cubic_a]: 0.25
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: diagnostics.DiagnosticsTreeStyle.prototype,
        [_name$0]: "DiagnosticsTreeStyle.shallow",
        index: 10
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278255615.0
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294955008.0
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278255360.0
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: mouse_cursor._DeferringMouseCursor.prototype
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: mouse_cursor._NoopMouseCursor.prototype
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "none"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "basic"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "click"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "forbidden"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "wait"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "progress"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "contextMenu"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "help"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "text"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "verticalText"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "cell"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "precise"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "move"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "grab"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "grabbing"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "noDrop"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "alias"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "copy"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "disappearing"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "allScroll"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeLeftRight"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeUpDown"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeUpLeftDownRight"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeUpRightDownLeft"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeUp"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeDown"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeLeft"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeRight"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeUpLeft"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeUpRight"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeDownLeft"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeDownRight"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeColumn"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeRow"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "zoomIn"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "zoomOut"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C62 || CT.C62
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C61 || CT.C61,
        [MethodChannel_name]: "flutter/service_worker"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294940672.0
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2415956223.0
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278227199.0
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2425393296.0
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: colors.HSVColor.prototype,
        [HSVColor_value]: 1,
        [HSVColor_saturation]: 1,
        [HSVColor_hue]: 60,
        [HSVColor_alpha]: 0.4
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: box._IntrinsicDimension.prototype,
        [_name$1]: "_IntrinsicDimension.minWidth",
        index: 0
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: box._IntrinsicDimension.prototype,
        [_name$1]: "_IntrinsicDimension.maxWidth",
        index: 1
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: box._IntrinsicDimension.prototype,
        [_name$1]: "_IntrinsicDimension.minHeight",
        index: 2
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: box._IntrinsicDimension.prototype,
        [_name$1]: "_IntrinsicDimension.maxHeight",
        index: 3
      });
    },
    get C72() {
      return C72 = dart.constList([C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71], _IntrinsicDimensionL());
    }
  }, false);
  const _is_AnnotationEntry_default = Symbol('_is_AnnotationEntry_default');
  var annotation$ = dart.privateName(layer$, "AnnotationEntry.annotation");
  var localPosition$ = dart.privateName(layer$, "AnnotationEntry.localPosition");
  layer$.AnnotationEntry$ = dart.generic(T => {
    class AnnotationEntry extends core.Object {
      get annotation() {
        return this[annotation$];
      }
      set annotation(value) {
        super.annotation = value;
      }
      get localPosition() {
        return this[localPosition$];
      }
      set localPosition(value) {
        super.localPosition = value;
      }
      toString() {
        return dart.str(object.objectRuntimeType(this, "AnnotationEntry")) + "(annotation: " + dart.str(this.annotation) + ", localPosition: " + dart.str(this.localPosition) + ")";
      }
    }
    (AnnotationEntry.new = function(opts) {
      let annotation = opts && 'annotation' in opts ? opts.annotation : null;
      let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
      if (localPosition == null) dart.nullFailed(L0, 25, 19, "localPosition");
      this[annotation$] = annotation;
      this[localPosition$] = localPosition;
      if (!(localPosition != null)) dart.assertFailed(null, L0, 26, 15, "localPosition != null");
      ;
    }).prototype = AnnotationEntry.prototype;
    dart.addTypeTests(AnnotationEntry);
    AnnotationEntry.prototype[_is_AnnotationEntry_default] = true;
    dart.addTypeCaches(AnnotationEntry);
    dart.setLibraryUri(AnnotationEntry, L1);
    dart.setFieldSignature(AnnotationEntry, () => ({
      __proto__: dart.getFields(AnnotationEntry.__proto__),
      annotation: dart.finalFieldType(T),
      localPosition: dart.finalFieldType(ui.Offset)
    }));
    dart.defineExtensionMethods(AnnotationEntry, ['toString']);
    return AnnotationEntry;
  });
  layer$.AnnotationEntry = layer$.AnnotationEntry$();
  dart.addTypeTests(layer$.AnnotationEntry, _is_AnnotationEntry_default);
  var _entries = dart.privateName(layer$, "_entries");
  const _is_AnnotationResult_default = Symbol('_is_AnnotationResult_default');
  layer$.AnnotationResult$ = dart.generic(T => {
    var AnnotationEntryOfT = () => (AnnotationEntryOfT = dart.constFn(layer$.AnnotationEntry$(T)))();
    var JSArrayOfAnnotationEntryOfT = () => (JSArrayOfAnnotationEntryOfT = dart.constFn(_interceptors.JSArray$(AnnotationEntryOfT())))();
    var SyncIterableOfT = () => (SyncIterableOfT = dart.constFn(_js_helper.SyncIterable$(T)))();
    class AnnotationResult extends core.Object {
      add(entry) {
        AnnotationEntryOfT().as(entry);
        if (entry == null) dart.nullFailed(L0, 56, 31, "entry");
        return this[_entries][$add](entry);
      }
      get entries() {
        return this[_entries];
      }
      get annotations() {
        return new (SyncIterableOfT()).new((function* annotations() {
          for (let entry of this[_entries])
            yield entry.annotation;
        }).bind(this));
      }
    }
    (AnnotationResult.new = function() {
      this[_entries] = JSArrayOfAnnotationEntryOfT().of([]);
      ;
    }).prototype = AnnotationResult.prototype;
    dart.addTypeTests(AnnotationResult);
    AnnotationResult.prototype[_is_AnnotationResult_default] = true;
    dart.addTypeCaches(AnnotationResult);
    dart.setMethodSignature(AnnotationResult, () => ({
      __proto__: dart.getMethods(AnnotationResult.__proto__),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(AnnotationResult, () => ({
      __proto__: dart.getGetters(AnnotationResult.__proto__),
      entries: core.Iterable$(layer$.AnnotationEntry$(T)),
      annotations: core.Iterable$(T)
    }));
    dart.setLibraryUri(AnnotationResult, L1);
    dart.setFieldSignature(AnnotationResult, () => ({
      __proto__: dart.getFields(AnnotationResult.__proto__),
      [_entries]: dart.finalFieldType(core.List$(layer$.AnnotationEntry$(T)))
    }));
    return AnnotationResult;
  });
  layer$.AnnotationResult = layer$.AnnotationResult$();
  dart.addTypeTests(layer$.AnnotationResult, _is_AnnotationResult_default);
  var _needsAddToScene = dart.privateName(layer$, "_needsAddToScene");
  var _engineLayer = dart.privateName(layer$, "_engineLayer");
  var _nextSibling = dart.privateName(layer$, "_nextSibling");
  var _previousSibling = dart.privateName(layer$, "_previousSibling");
  var _removeChild = dart.privateName(layer$, "_removeChild");
  var _addToSceneWithRetainedRendering = dart.privateName(layer$, "_addToSceneWithRetainedRendering");
  var debugCreator = dart.privateName(layer$, "Layer.debugCreator");
  const AbstractNode_DiagnosticableTreeMixin$36 = class AbstractNode_DiagnosticableTreeMixin extends node.AbstractNode {};
  (AbstractNode_DiagnosticableTreeMixin$36.new = function() {
    AbstractNode_DiagnosticableTreeMixin$36.__proto__.new.call(this);
  }).prototype = AbstractNode_DiagnosticableTreeMixin$36.prototype;
  dart.applyMixin(AbstractNode_DiagnosticableTreeMixin$36, diagnostics.DiagnosticableTreeMixin);
  layer$.Layer = class Layer extends AbstractNode_DiagnosticableTreeMixin$36 {
    get debugCreator() {
      return this[debugCreator];
    }
    set debugCreator(value) {
      this[debugCreator] = value;
    }
    get parent() {
      return ContainerLayerN().as(super.parent);
    }
    markNeedsAddToScene() {
      if (!!dart.test(this.alwaysNeedsAddToScene)) dart.assertFailed(dart.str(this[$runtimeType]) + " with alwaysNeedsAddToScene set called markNeedsAddToScene.\n" + "The layer's alwaysNeedsAddToScene is set to true, and therefore it should not call markNeedsAddToScene.", L0, 133, 7, "!alwaysNeedsAddToScene");
      if (dart.test(this[_needsAddToScene])) {
        return;
      }
      this[_needsAddToScene] = true;
    }
    debugMarkClean() {
      if (!dart.test(dart.fn(() => {
        this[_needsAddToScene] = false;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 152, 12, "() {\n      _needsAddToScene = false;\n      return true;\n    }()");
    }
    get alwaysNeedsAddToScene() {
      return false;
    }
    get debugSubtreeNeedsAddToScene() {
      let result = null;
      if (!dart.test(dart.fn(() => {
        result = this[_needsAddToScene];
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 169, 12, "() {\n      result = _needsAddToScene;\n      return true;\n    }()");
      return result;
    }
    get engineLayer() {
      return this[_engineLayer];
    }
    set engineLayer(value) {
      this[_engineLayer] = value;
      if (!dart.test(this.alwaysNeedsAddToScene)) {
        if (this.parent != null && !dart.test(dart.nullCheck(this.parent).alwaysNeedsAddToScene)) {
          dart.nullCheck(this.parent).markNeedsAddToScene();
        }
      }
    }
    updateSubtreeNeedsAddToScene() {
      this[_needsAddToScene] = dart.test(this[_needsAddToScene]) || dart.test(this.alwaysNeedsAddToScene);
    }
    get nextSibling() {
      return this[_nextSibling];
    }
    get previousSibling() {
      return this[_previousSibling];
    }
    dropChild(child) {
      node.AbstractNode.as(child);
      if (child == null) dart.nullFailed(L0, 252, 31, "child");
      if (!dart.test(this.alwaysNeedsAddToScene)) {
        this.markNeedsAddToScene();
      }
      super.dropChild(child);
    }
    adoptChild(child) {
      node.AbstractNode.as(child);
      if (child == null) dart.nullFailed(L0, 260, 32, "child");
      if (!dart.test(this.alwaysNeedsAddToScene)) {
        this.markNeedsAddToScene();
      }
      super.adoptChild(child);
    }
    remove() {
      let t0;
      t0 = this.parent;
      t0 == null ? null : t0[_removeChild](this);
    }
    findAnnotations(S, result, localPosition, opts) {
      if (result == null) dart.nullFailed(L0, 327, 25, "result");
      if (localPosition == null) dart.nullFailed(L0, 328, 12, "localPosition");
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (onlyFirst == null) dart.nullFailed(L0, 329, 19, "onlyFirst");
      return false;
    }
    find(S, localPosition) {
      if (localPosition == null) dart.nullFailed(L0, 354, 36, "localPosition");
      let result = new (layer$.AnnotationResult$(S)).new();
      this.findAnnotations(S, result, localPosition, {onlyFirst: true});
      return dart.test(result.entries[$isEmpty]) ? null : result.entries[$first].annotation;
    }
    findAll(S, localPosition) {
      if (localPosition == null) dart.nullFailed(L0, 388, 48, "localPosition");
      let result = this.findAllAnnotations(S, localPosition);
      return result.entries[$map](S, dart.fn(entry => {
        if (entry == null) dart.nullFailed(L0, 390, 51, "entry");
        return entry.annotation;
      }, dart.fnType(S, [layer$.AnnotationEntry$(S)])));
    }
    findAllAnnotations(S, localPosition) {
      if (localPosition == null) dart.nullFailed(L0, 413, 67, "localPosition");
      let result = new (layer$.AnnotationResult$(S)).new();
      this.findAnnotations(S, result, localPosition, {onlyFirst: false});
      return result;
    }
    [_addToSceneWithRetainedRendering](builder) {
      if (builder == null) dart.nullFailed(L0, 426, 57, "builder");
      if (!dart.test(this[_needsAddToScene]) && this[_engineLayer] != null) {
        builder.addRetained(dart.nullCheck(this[_engineLayer]));
        return;
      }
      this.addToScene(builder);
      this[_needsAddToScene] = false;
    }
    toStringShort() {
      return dart.str(super.toStringShort()) + (this.owner == null ? " DETACHED" : "");
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 457, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfObject()).new("owner", this.owner, {level: this.parent != null ? diagnostics.DiagnosticLevel.hidden : diagnostics.DiagnosticLevel.info, defaultValue: null}));
      properties.add(new diagnostics.DiagnosticsProperty.new("creator", this.debugCreator, {defaultValue: null, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (DiagnosticsPropertyOfString()).new("engine layer", diagnostics.describeIdentity(this[_engineLayer])));
    }
  };
  (layer$.Layer.new = function() {
    this[_needsAddToScene] = true;
    this[_engineLayer] = null;
    this[_nextSibling] = null;
    this[_previousSibling] = null;
    this[debugCreator] = null;
    layer$.Layer.__proto__.new.call(this);
    ;
  }).prototype = layer$.Layer.prototype;
  dart.addTypeTests(layer$.Layer);
  dart.addTypeCaches(layer$.Layer);
  dart.setMethodSignature(layer$.Layer, () => ({
    __proto__: dart.getMethods(layer$.Layer.__proto__),
    markNeedsAddToScene: dart.fnType(dart.void, []),
    debugMarkClean: dart.fnType(dart.void, []),
    updateSubtreeNeedsAddToScene: dart.fnType(dart.void, []),
    remove: dart.fnType(dart.void, []),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object]),
    find: dart.gFnType(S => [dart.nullable(S), [ui.Offset]], S => [core.Object]),
    findAll: dart.gFnType(S => [core.Iterable$(S), [ui.Offset]], S => [core.Object]),
    findAllAnnotations: dart.gFnType(S => [layer$.AnnotationResult$(S), [ui.Offset]], S => [core.Object]),
    [_addToSceneWithRetainedRendering]: dart.fnType(dart.void, [ui.SceneBuilder])
  }));
  dart.setGetterSignature(layer$.Layer, () => ({
    __proto__: dart.getGetters(layer$.Layer.__proto__),
    parent: dart.nullable(layer$.ContainerLayer),
    alwaysNeedsAddToScene: core.bool,
    debugSubtreeNeedsAddToScene: dart.nullable(core.bool),
    engineLayer: dart.nullable(ui.EngineLayer),
    nextSibling: dart.nullable(layer$.Layer),
    previousSibling: dart.nullable(layer$.Layer)
  }));
  dart.setSetterSignature(layer$.Layer, () => ({
    __proto__: dart.getSetters(layer$.Layer.__proto__),
    engineLayer: dart.nullable(ui.EngineLayer)
  }));
  dart.setLibraryUri(layer$.Layer, L1);
  dart.setFieldSignature(layer$.Layer, () => ({
    __proto__: dart.getFields(layer$.Layer.__proto__),
    [_needsAddToScene]: dart.fieldType(core.bool),
    [_engineLayer]: dart.fieldType(dart.nullable(ui.EngineLayer)),
    [_nextSibling]: dart.fieldType(dart.nullable(layer$.Layer)),
    [_previousSibling]: dart.fieldType(dart.nullable(layer$.Layer)),
    debugCreator: dart.fieldType(dart.dynamic)
  }));
  var _picture = dart.privateName(layer$, "_picture");
  var _isComplexHint = dart.privateName(layer$, "_isComplexHint");
  var _willChangeHint = dart.privateName(layer$, "_willChangeHint");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C0;
  var canvasBounds$ = dart.privateName(layer$, "PictureLayer.canvasBounds");
  layer$.PictureLayer = class PictureLayer extends layer$.Layer {
    get canvasBounds() {
      return this[canvasBounds$];
    }
    set canvasBounds(value) {
      super.canvasBounds = value;
    }
    get picture() {
      return this[_picture];
    }
    set picture(picture) {
      this.markNeedsAddToScene();
      this[_picture] = picture;
    }
    get isComplexHint() {
      return this[_isComplexHint];
    }
    set isComplexHint(value) {
      if (value == null) dart.nullFailed(L0, 503, 26, "value");
      if (!dart.equals(value, this[_isComplexHint])) {
        this[_isComplexHint] = value;
        this.markNeedsAddToScene();
      }
    }
    get willChangeHint() {
      return this[_willChangeHint];
    }
    set willChangeHint(value) {
      if (value == null) dart.nullFailed(L0, 521, 27, "value");
      if (!dart.equals(value, this[_willChangeHint])) {
        this[_willChangeHint] = value;
        this.markNeedsAddToScene();
      }
    }
    addToScene(builder, layerOffset = C0 || CT.C0) {
      if (builder == null) dart.nullFailed(L0, 529, 35, "builder");
      if (layerOffset == null) dart.nullFailed(L0, 529, 53, "layerOffset");
      if (!(this.picture != null)) dart.assertFailed(null, L0, 530, 12, "picture != null");
      builder.addPicture(layerOffset, dart.nullCheck(this.picture), {isComplexHint: this.isComplexHint, willChangeHint: this.willChangeHint});
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 535, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfRect()).new("paint bounds", this.canvasBounds));
      properties.add(new (DiagnosticsPropertyOfString()).new("picture", diagnostics.describeIdentity(this[_picture])));
      properties.add(new (DiagnosticsPropertyOfString()).new("raster cache hints", "isComplex = " + dart.str(this.isComplexHint) + ", willChange = " + dart.str(this.willChangeHint)));
    }
    findAnnotations(S, result, localPosition, opts) {
      if (result == null) dart.nullFailed(L0, 546, 62, "result");
      if (localPosition == null) dart.nullFailed(L0, 546, 77, "localPosition");
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (onlyFirst == null) dart.nullFailed(L0, 546, 108, "onlyFirst");
      return false;
    }
  };
  (layer$.PictureLayer.new = function(canvasBounds) {
    if (canvasBounds == null) dart.nullFailed(L0, 470, 21, "canvasBounds");
    this[_picture] = null;
    this[_isComplexHint] = false;
    this[_willChangeHint] = false;
    this[canvasBounds$] = canvasBounds;
    layer$.PictureLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.PictureLayer.prototype;
  dart.addTypeTests(layer$.PictureLayer);
  dart.addTypeCaches(layer$.PictureLayer);
  dart.setMethodSignature(layer$.PictureLayer, () => ({
    __proto__: dart.getMethods(layer$.PictureLayer.__proto__),
    addToScene: dart.fnType(dart.void, [ui.SceneBuilder], [ui.Offset]),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.PictureLayer, () => ({
    __proto__: dart.getGetters(layer$.PictureLayer.__proto__),
    picture: dart.nullable(ui.Picture),
    isComplexHint: core.bool,
    willChangeHint: core.bool
  }));
  dart.setSetterSignature(layer$.PictureLayer, () => ({
    __proto__: dart.getSetters(layer$.PictureLayer.__proto__),
    picture: dart.nullable(ui.Picture),
    isComplexHint: core.bool,
    willChangeHint: core.bool
  }));
  dart.setLibraryUri(layer$.PictureLayer, L1);
  dart.setFieldSignature(layer$.PictureLayer, () => ({
    __proto__: dart.getFields(layer$.PictureLayer.__proto__),
    canvasBounds: dart.finalFieldType(ui.Rect),
    [_picture]: dart.fieldType(dart.nullable(ui.Picture)),
    [_isComplexHint]: dart.fieldType(core.bool),
    [_willChangeHint]: dart.fieldType(core.bool)
  }));
  var _name = dart.privateName(ui, "_name");
  var C1;
  var rect$ = dart.privateName(layer$, "TextureLayer.rect");
  var textureId$ = dart.privateName(layer$, "TextureLayer.textureId");
  var freeze$ = dart.privateName(layer$, "TextureLayer.freeze");
  var filterQuality$ = dart.privateName(layer$, "TextureLayer.filterQuality");
  layer$.TextureLayer = class TextureLayer extends layer$.Layer {
    get rect() {
      return this[rect$];
    }
    set rect(value) {
      super.rect = value;
    }
    get textureId() {
      return this[textureId$];
    }
    set textureId(value) {
      super.textureId = value;
    }
    get freeze() {
      return this[freeze$];
    }
    set freeze(value) {
      super.freeze = value;
    }
    get filterQuality() {
      return this[filterQuality$];
    }
    set filterQuality(value) {
      super.filterQuality = value;
    }
    addToScene(builder, layerOffset = C0 || CT.C0) {
      if (builder == null) dart.nullFailed(L0, 608, 35, "builder");
      if (layerOffset == null) dart.nullFailed(L0, 608, 53, "layerOffset");
      let shiftedRect = dart.equals(layerOffset, ui.Offset.zero) ? this.rect : this.rect.shift(layerOffset);
      builder.addTexture(this.textureId, {offset: shiftedRect.topLeft, width: shiftedRect.width, height: shiftedRect.height, freeze: this.freeze, filterQuality: this.filterQuality});
    }
    findAnnotations(S, result, localPosition, opts) {
      if (result == null) dart.nullFailed(L0, 621, 62, "result");
      if (localPosition == null) dart.nullFailed(L0, 621, 77, "localPosition");
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (onlyFirst == null) dart.nullFailed(L0, 621, 108, "onlyFirst");
      return false;
    }
  };
  (layer$.TextureLayer.new = function(opts) {
    let rect = opts && 'rect' in opts ? opts.rect : null;
    if (rect == null) dart.nullFailed(L0, 582, 19, "rect");
    let textureId = opts && 'textureId' in opts ? opts.textureId : null;
    if (textureId == null) dart.nullFailed(L0, 583, 19, "textureId");
    let freeze = opts && 'freeze' in opts ? opts.freeze : false;
    if (freeze == null) dart.nullFailed(L0, 584, 10, "freeze");
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C1 || CT.C1;
    if (filterQuality == null) dart.nullFailed(L0, 585, 10, "filterQuality");
    this[rect$] = rect;
    this[textureId$] = textureId;
    this[freeze$] = freeze;
    this[filterQuality$] = filterQuality;
    if (!(rect != null)) dart.assertFailed(null, L0, 586, 15, "rect != null");
    if (!(textureId != null)) dart.assertFailed(null, L0, 587, 15, "textureId != null");
    layer$.TextureLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.TextureLayer.prototype;
  dart.addTypeTests(layer$.TextureLayer);
  dart.addTypeCaches(layer$.TextureLayer);
  dart.setMethodSignature(layer$.TextureLayer, () => ({
    __proto__: dart.getMethods(layer$.TextureLayer.__proto__),
    addToScene: dart.fnType(dart.void, [ui.SceneBuilder], [ui.Offset]),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setLibraryUri(layer$.TextureLayer, L1);
  dart.setFieldSignature(layer$.TextureLayer, () => ({
    __proto__: dart.getFields(layer$.TextureLayer.__proto__),
    rect: dart.finalFieldType(ui.Rect),
    textureId: dart.finalFieldType(core.int),
    freeze: dart.finalFieldType(core.bool),
    filterQuality: dart.finalFieldType(ui.FilterQuality)
  }));
  var rect$0 = dart.privateName(layer$, "PlatformViewLayer.rect");
  var viewId$ = dart.privateName(layer$, "PlatformViewLayer.viewId");
  layer$.PlatformViewLayer = class PlatformViewLayer extends layer$.Layer {
    get rect() {
      return this[rect$0];
    }
    set rect(value) {
      super.rect = value;
    }
    get viewId() {
      return this[viewId$];
    }
    set viewId(value) {
      super.viewId = value;
    }
    addToScene(builder, layerOffset = C0 || CT.C0) {
      if (builder == null) dart.nullFailed(L0, 647, 35, "builder");
      if (layerOffset == null) dart.nullFailed(L0, 647, 53, "layerOffset");
      let shiftedRect = dart.equals(layerOffset, ui.Offset.zero) ? this.rect : this.rect.shift(layerOffset);
      builder.addPlatformView(this.viewId, {offset: shiftedRect.topLeft, width: shiftedRect.width, height: shiftedRect.height});
    }
  };
  (layer$.PlatformViewLayer.new = function(opts) {
    let rect = opts && 'rect' in opts ? opts.rect : null;
    if (rect == null) dart.nullFailed(L0, 633, 19, "rect");
    let viewId = opts && 'viewId' in opts ? opts.viewId : null;
    if (viewId == null) dart.nullFailed(L0, 634, 19, "viewId");
    this[rect$0] = rect;
    this[viewId$] = viewId;
    if (!(rect != null)) dart.assertFailed(null, L0, 635, 15, "rect != null");
    if (!(viewId != null)) dart.assertFailed(null, L0, 636, 15, "viewId != null");
    layer$.PlatformViewLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.PlatformViewLayer.prototype;
  dart.addTypeTests(layer$.PlatformViewLayer);
  dart.addTypeCaches(layer$.PlatformViewLayer);
  dart.setMethodSignature(layer$.PlatformViewLayer, () => ({
    __proto__: dart.getMethods(layer$.PlatformViewLayer.__proto__),
    addToScene: dart.fnType(dart.void, [ui.SceneBuilder], [ui.Offset])
  }));
  dart.setLibraryUri(layer$.PlatformViewLayer, L1);
  dart.setFieldSignature(layer$.PlatformViewLayer, () => ({
    __proto__: dart.getFields(layer$.PlatformViewLayer.__proto__),
    rect: dart.finalFieldType(ui.Rect),
    viewId: dart.finalFieldType(core.int)
  }));
  var _overlayRect = dart.privateName(layer$, "_overlayRect");
  var optionsMask$ = dart.privateName(layer$, "PerformanceOverlayLayer.optionsMask");
  var rasterizerThreshold$ = dart.privateName(layer$, "PerformanceOverlayLayer.rasterizerThreshold");
  var checkerboardRasterCacheImages$ = dart.privateName(layer$, "PerformanceOverlayLayer.checkerboardRasterCacheImages");
  var checkerboardOffscreenLayers$ = dart.privateName(layer$, "PerformanceOverlayLayer.checkerboardOffscreenLayers");
  layer$.PerformanceOverlayLayer = class PerformanceOverlayLayer extends layer$.Layer {
    get optionsMask() {
      return this[optionsMask$];
    }
    set optionsMask(value) {
      super.optionsMask = value;
    }
    get rasterizerThreshold() {
      return this[rasterizerThreshold$];
    }
    set rasterizerThreshold(value) {
      super.rasterizerThreshold = value;
    }
    get checkerboardRasterCacheImages() {
      return this[checkerboardRasterCacheImages$];
    }
    set checkerboardRasterCacheImages(value) {
      super.checkerboardRasterCacheImages = value;
    }
    get checkerboardOffscreenLayers() {
      return this[checkerboardOffscreenLayers$];
    }
    set checkerboardOffscreenLayers(value) {
      super.checkerboardOffscreenLayers = value;
    }
    get overlayRect() {
      return this[_overlayRect];
    }
    set overlayRect(value) {
      if (value == null) dart.nullFailed(L0, 678, 24, "value");
      if (!dart.equals(value, this[_overlayRect])) {
        this[_overlayRect] = value;
        this.markNeedsAddToScene();
      }
    }
    addToScene(builder, layerOffset = C0 || CT.C0) {
      if (builder == null) dart.nullFailed(L0, 718, 35, "builder");
      if (layerOffset == null) dart.nullFailed(L0, 718, 53, "layerOffset");
      if (!(this.optionsMask != null)) dart.assertFailed(null, L0, 719, 12, "optionsMask != null");
      let shiftedOverlayRect = dart.equals(layerOffset, ui.Offset.zero) ? this.overlayRect : this.overlayRect.shift(layerOffset);
      builder.addPerformanceOverlay(this.optionsMask, shiftedOverlayRect);
      builder.setRasterizerTracingThreshold(this.rasterizerThreshold);
      builder.setCheckerboardRasterCacheImages(this.checkerboardRasterCacheImages);
      builder.setCheckerboardOffscreenLayers(this.checkerboardOffscreenLayers);
    }
    findAnnotations(S, result, localPosition, opts) {
      if (result == null) dart.nullFailed(L0, 728, 62, "result");
      if (localPosition == null) dart.nullFailed(L0, 728, 77, "localPosition");
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (onlyFirst == null) dart.nullFailed(L0, 728, 108, "onlyFirst");
      return false;
    }
  };
  (layer$.PerformanceOverlayLayer.new = function(opts) {
    let overlayRect = opts && 'overlayRect' in opts ? opts.overlayRect : null;
    if (overlayRect == null) dart.nullFailed(L0, 665, 19, "overlayRect");
    let optionsMask = opts && 'optionsMask' in opts ? opts.optionsMask : null;
    if (optionsMask == null) dart.nullFailed(L0, 666, 19, "optionsMask");
    let rasterizerThreshold = opts && 'rasterizerThreshold' in opts ? opts.rasterizerThreshold : null;
    if (rasterizerThreshold == null) dart.nullFailed(L0, 667, 19, "rasterizerThreshold");
    let checkerboardRasterCacheImages = opts && 'checkerboardRasterCacheImages' in opts ? opts.checkerboardRasterCacheImages : null;
    if (checkerboardRasterCacheImages == null) dart.nullFailed(L0, 668, 19, "checkerboardRasterCacheImages");
    let checkerboardOffscreenLayers = opts && 'checkerboardOffscreenLayers' in opts ? opts.checkerboardOffscreenLayers : null;
    if (checkerboardOffscreenLayers == null) dart.nullFailed(L0, 669, 19, "checkerboardOffscreenLayers");
    this[optionsMask$] = optionsMask;
    this[rasterizerThreshold$] = rasterizerThreshold;
    this[checkerboardRasterCacheImages$] = checkerboardRasterCacheImages;
    this[checkerboardOffscreenLayers$] = checkerboardOffscreenLayers;
    this[_overlayRect] = overlayRect;
    layer$.PerformanceOverlayLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.PerformanceOverlayLayer.prototype;
  dart.addTypeTests(layer$.PerformanceOverlayLayer);
  dart.addTypeCaches(layer$.PerformanceOverlayLayer);
  dart.setMethodSignature(layer$.PerformanceOverlayLayer, () => ({
    __proto__: dart.getMethods(layer$.PerformanceOverlayLayer.__proto__),
    addToScene: dart.fnType(dart.void, [ui.SceneBuilder], [ui.Offset]),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.PerformanceOverlayLayer, () => ({
    __proto__: dart.getGetters(layer$.PerformanceOverlayLayer.__proto__),
    overlayRect: ui.Rect
  }));
  dart.setSetterSignature(layer$.PerformanceOverlayLayer, () => ({
    __proto__: dart.getSetters(layer$.PerformanceOverlayLayer.__proto__),
    overlayRect: ui.Rect
  }));
  dart.setLibraryUri(layer$.PerformanceOverlayLayer, L1);
  dart.setFieldSignature(layer$.PerformanceOverlayLayer, () => ({
    __proto__: dart.getFields(layer$.PerformanceOverlayLayer.__proto__),
    [_overlayRect]: dart.fieldType(ui.Rect),
    optionsMask: dart.finalFieldType(core.int),
    rasterizerThreshold: dart.finalFieldType(core.int),
    checkerboardRasterCacheImages: dart.finalFieldType(core.bool),
    checkerboardOffscreenLayers: dart.finalFieldType(core.bool)
  }));
  var _firstChild = dart.privateName(layer$, "_firstChild");
  var _lastChild = dart.privateName(layer$, "_lastChild");
  var _debugCheckElevations = dart.privateName(layer$, "_debugCheckElevations");
  var _debugUltimatePreviousSiblingOf = dart.privateName(layer$, "_debugUltimatePreviousSiblingOf");
  var _debugUltimateNextSiblingOf = dart.privateName(layer$, "_debugUltimateNextSiblingOf");
  var Color_value = dart.privateName(ui, "Color.value");
  var C2;
  var _highlightConflictingLayer = dart.privateName(layer$, "_highlightConflictingLayer");
  var _processConflictingPhysicalLayers = dart.privateName(layer$, "_processConflictingPhysicalLayers");
  var _debugTransformedClipPath = dart.privateName(layer$, "_debugTransformedClipPath");
  layer$.ContainerLayer = class ContainerLayer extends layer$.Layer {
    get firstChild() {
      return this[_firstChild];
    }
    get lastChild() {
      return this[_lastChild];
    }
    get hasChildren() {
      return this[_firstChild] != null;
    }
    buildScene(builder) {
      if (builder == null) dart.nullFailed(L0, 756, 39, "builder");
      let temporaryLayers = null;
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug$0.debugCheckElevationsEnabled)) {
          temporaryLayers = this[_debugCheckElevations]();
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 758, 12, "() {\n      if (debugCheckElevationsEnabled) {\n        temporaryLayers = _debugCheckElevations();\n      }\n      return true;\n    }()");
      this.updateSubtreeNeedsAddToScene();
      this.addToScene(builder);
      this[_needsAddToScene] = false;
      let scene = builder.build();
      if (!dart.test(dart.fn(() => {
        if (temporaryLayers != null) {
          for (let temporaryLayer of dart.nullCheck(temporaryLayers)) {
            temporaryLayer.remove();
          }
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 771, 12, "() {\n      // We should remove any layers that got added to highlight the incorrect\n      // PhysicalModelLayers. If we don't, we'll end up adding duplicate layers\n      // or continuing to render stale outlines.\n      if (temporaryLayers != null) {\n        for (final PictureLayer temporaryLayer in temporaryLayers!) {\n          temporaryLayer.remove();\n        }\n      }\n      return true;\n    }()");
      return scene;
    }
    [_debugUltimatePreviousSiblingOf](child, opts) {
      if (child == null) dart.nullFailed(L0, 785, 46, "child");
      let equals = opts && 'equals' in opts ? opts.equals : null;
      if (!dart.equals(child.attached, this.attached)) dart.assertFailed(null, L0, 786, 12, "child.attached == attached");
      while (child.previousSibling != null) {
        if (!!dart.equals(child.previousSibling, child)) dart.assertFailed(null, L0, 788, 14, "child.previousSibling != child");
        child = dart.nullCheck(child.previousSibling);
        if (!dart.equals(child.attached, this.attached)) dart.assertFailed(null, L0, 790, 14, "child.attached == attached");
      }
      return dart.equals(child, equals);
    }
    [_debugUltimateNextSiblingOf](child, opts) {
      if (child == null) dart.nullFailed(L0, 795, 42, "child");
      let equals = opts && 'equals' in opts ? opts.equals : null;
      if (!dart.equals(child.attached, this.attached)) dart.assertFailed(null, L0, 796, 12, "child.attached == attached");
      while (child[_nextSibling] != null) {
        if (!!dart.equals(child[_nextSibling], child)) dart.assertFailed(null, L0, 798, 14, "child._nextSibling != child");
        child = dart.nullCheck(child[_nextSibling]);
        if (!dart.equals(child.attached, this.attached)) dart.assertFailed(null, L0, 800, 14, "child.attached == attached");
      }
      return dart.equals(child, equals);
    }
    [_highlightConflictingLayer](child) {
      let t0, t0$;
      if (child == null) dart.nullFailed(L0, 805, 62, "child");
      let recorder = ui.PictureRecorder.new();
      let canvas = ui.Canvas.new(recorder);
      canvas.drawPath(dart.nullCheck(child.clipPath), (t0 = ui.Paint.new(), (() => {
        t0.color = C2 || CT.C2;
        t0.style = ui.PaintingStyle.stroke;
        t0.strokeWidth = dart.nullCheck(child.elevation) + 10.0;
        return t0;
      })()));
      let pictureLayer = (t0$ = new layer$.PictureLayer.new(dart.nullCheck(child.clipPath).getBounds()), (() => {
        t0$.picture = recorder.endRecording();
        t0$.debugCreator = child;
        return t0$;
      })());
      child.append(pictureLayer);
      return pictureLayer;
    }
    [_processConflictingPhysicalLayers](predecessor, child) {
      if (predecessor == null) dart.nullFailed(L0, 824, 75, "predecessor");
      if (child == null) dart.nullFailed(L0, 824, 107, "child");
      assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: assertions.FlutterError.new("Painting order is out of order with respect to elevation.\n" + "See https://api.flutter.dev/flutter/rendering/debugCheckElevationsEnabled.html " + "for more details."), library: "rendering library", context: new assertions.ErrorDescription.new("during compositing"), informationCollector: dart.fn(() => JSArrayOfDiagnosticsNode().of([child.toDiagnosticsNode({name: "Attempted to composite layer", style: diagnostics.DiagnosticsTreeStyle.errorProperty}), predecessor.toDiagnosticsNode({name: "after layer", style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new assertions.ErrorDescription.new("which occupies the same area at a higher elevation.")]), VoidToListOfDiagnosticsNode())}));
      return JSArrayOfPictureLayer().of([this[_highlightConflictingLayer](predecessor), this[_highlightConflictingLayer](child)]);
    }
    [_debugCheckElevations]() {
      let t0;
      let physicalModelLayers = this.depthFirstIterateChildren()[$whereType](layer$.PhysicalModelLayer)[$toList]();
      let addedLayers = JSArrayOfPictureLayer().of([]);
      for (let i = 0; i < dart.notNull(physicalModelLayers[$length]); i = i + 1) {
        let physicalModelLayer = physicalModelLayers[$_get](i);
        if (!!dart.equals((t0 = physicalModelLayer.lastChild, t0 == null ? null : t0.debugCreator), physicalModelLayer)) dart.assertFailed("debugCheckElevations has either already visited this layer or failed " + "to remove the added picture from it.", L0, 858, 9, "physicalModelLayer.lastChild?.debugCreator != physicalModelLayer");
        let accumulatedElevation = dart.nullCheck(physicalModelLayer.elevation);
        let ancestor = physicalModelLayer.parent;
        while (ancestor != null) {
          if (layer$.PhysicalModelLayer.is(ancestor)) {
            accumulatedElevation = accumulatedElevation + dart.nullCheck(ancestor.elevation);
          }
          ancestor = ancestor.parent;
        }
        for (let j = 0; j <= i; j = j + 1) {
          let predecessor = physicalModelLayers[$_get](j);
          let predecessorAccumulatedElevation = dart.nullCheck(predecessor.elevation);
          ancestor = predecessor.parent;
          while (ancestor != null) {
            if (dart.equals(ancestor, predecessor)) {
              continue;
            }
            if (layer$.PhysicalModelLayer.is(ancestor)) {
              predecessorAccumulatedElevation = predecessorAccumulatedElevation + dart.nullCheck(ancestor.elevation);
            }
            ancestor = ancestor.parent;
          }
          if (predecessorAccumulatedElevation <= accumulatedElevation) {
            continue;
          }
          let intersection = ui.Path.combine(ui.PathOperation.intersect, predecessor[_debugTransformedClipPath], physicalModelLayer[_debugTransformedClipPath]);
          if (intersection != null && dart.test(intersection.computeMetrics()[$any](dart.fn(metric => {
            if (metric == null) dart.nullFailed(L0, 891, 86, "metric");
            return dart.notNull(metric.length) > 0;
          }, PathMetricTobool())))) {
            addedLayers[$addAll](this[_processConflictingPhysicalLayers](predecessor, physicalModelLayer));
          }
        }
      }
      return addedLayers;
    }
    updateSubtreeNeedsAddToScene() {
      super.updateSubtreeNeedsAddToScene();
      let child = this.firstChild;
      while (child != null) {
        child.updateSubtreeNeedsAddToScene();
        this[_needsAddToScene] = dart.test(this[_needsAddToScene]) || dart.test(child[_needsAddToScene]);
        child = child.nextSibling;
      }
    }
    findAnnotations(S, result, localPosition, opts) {
      if (result == null) dart.nullFailed(L0, 911, 62, "result");
      if (localPosition == null) dart.nullFailed(L0, 911, 77, "localPosition");
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (onlyFirst == null) dart.nullFailed(L0, 911, 108, "onlyFirst");
      for (let child = this.lastChild; child != null; child = child.previousSibling) {
        let isAbsorbed = child.findAnnotations(S, result, localPosition, {onlyFirst: onlyFirst});
        if (dart.test(isAbsorbed)) return true;
        if (dart.test(onlyFirst) && dart.test(result.entries[$isNotEmpty])) return isAbsorbed;
      }
      return false;
    }
    attach(owner) {
      core.Object.as(owner);
      if (owner == null) dart.nullFailed(L0, 923, 22, "owner");
      super.attach(owner);
      let child = this.firstChild;
      while (child != null) {
        child.attach(owner);
        child = child.nextSibling;
      }
    }
    detach() {
      super.detach();
      let child = this.firstChild;
      while (child != null) {
        child.detach();
        child = child.nextSibling;
      }
    }
    append(child) {
      if (child == null) dart.nullFailed(L0, 943, 21, "child");
      if (!!dart.equals(child, this)) dart.assertFailed(null, L0, 944, 12, "child != this");
      if (!!dart.equals(child, this.firstChild)) dart.assertFailed(null, L0, 945, 12, "child != firstChild");
      if (!!dart.equals(child, this.lastChild)) dart.assertFailed(null, L0, 946, 12, "child != lastChild");
      if (!(child.parent == null)) dart.assertFailed(null, L0, 947, 12, "child.parent == null");
      if (!!dart.test(child.attached)) dart.assertFailed(null, L0, 948, 12, "!child.attached");
      if (!(child.nextSibling == null)) dart.assertFailed(null, L0, 949, 12, "child.nextSibling == null");
      if (!(child.previousSibling == null)) dart.assertFailed(null, L0, 950, 12, "child.previousSibling == null");
      if (!dart.test(dart.fn(() => {
        let node = this;
        while (node.parent != null)
          node = dart.nullCheck(node.parent);
        if (!!node[$_equals](child)) dart.assertFailed(null, L0, 955, 14, "node != child");
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 951, 12, "() {\n      Layer node = this;\n      while (node.parent != null)\n        node = node.parent!;\n      assert(node != child); // indicates we are about to create a cycle\n      return true;\n    }()");
      this.adoptChild(child);
      child[_previousSibling] = this.lastChild;
      if (this.lastChild != null) dart.nullCheck(this.lastChild)[_nextSibling] = child;
      this[_lastChild] = child;
      this[_firstChild] == null ? this[_firstChild] = child : null;
      if (!dart.equals(child.attached, this.attached)) dart.assertFailed(null, L0, 964, 12, "child.attached == attached");
    }
    [_removeChild](child) {
      if (child == null) dart.nullFailed(L0, 968, 27, "child");
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, L0, 969, 12, "child.parent == this");
      if (!dart.equals(child.attached, this.attached)) dart.assertFailed(null, L0, 970, 12, "child.attached == attached");
      if (!dart.test(this[_debugUltimatePreviousSiblingOf](child, {equals: this.firstChild}))) dart.assertFailed(null, L0, 971, 12, "_debugUltimatePreviousSiblingOf(child, equals: firstChild)");
      if (!dart.test(this[_debugUltimateNextSiblingOf](child, {equals: this.lastChild}))) dart.assertFailed(null, L0, 972, 12, "_debugUltimateNextSiblingOf(child, equals: lastChild)");
      if (child[_previousSibling] == null) {
        if (!dart.equals(this[_firstChild], child)) dart.assertFailed(null, L0, 974, 14, "_firstChild == child");
        this[_firstChild] = child[_nextSibling];
      } else {
        dart.nullCheck(child[_previousSibling])[_nextSibling] = child.nextSibling;
      }
      if (child[_nextSibling] == null) {
        if (!dart.equals(this.lastChild, child)) dart.assertFailed(null, L0, 980, 14, "lastChild == child");
        this[_lastChild] = child.previousSibling;
      } else {
        dart.nullCheck(child.nextSibling)[_previousSibling] = child.previousSibling;
      }
      if (!(this.firstChild == null)[$_equals](this.lastChild == null)) dart.assertFailed(null, L0, 985, 12, "(firstChild == null) == (lastChild == null)");
      if (!(this.firstChild == null || dart.equals(dart.nullCheck(this.firstChild).attached, this.attached))) dart.assertFailed(null, L0, 986, 12, "firstChild == null || firstChild!.attached == attached");
      if (!(this.lastChild == null || dart.equals(dart.nullCheck(this.lastChild).attached, this.attached))) dart.assertFailed(null, L0, 987, 12, "lastChild == null || lastChild!.attached == attached");
      if (!(this.firstChild == null || dart.test(this[_debugUltimateNextSiblingOf](dart.nullCheck(this.firstChild), {equals: this.lastChild})))) dart.assertFailed(null, L0, 988, 12, "firstChild == null || _debugUltimateNextSiblingOf(firstChild!, equals: lastChild)");
      if (!(this.lastChild == null || dart.test(this[_debugUltimatePreviousSiblingOf](dart.nullCheck(this.lastChild), {equals: this.firstChild})))) dart.assertFailed(null, L0, 989, 12, "lastChild == null || _debugUltimatePreviousSiblingOf(lastChild!, equals: firstChild)");
      child[_previousSibling] = null;
      child[_nextSibling] = null;
      this.dropChild(child);
      if (!!dart.test(child.attached)) dart.assertFailed(null, L0, 993, 12, "!child.attached");
    }
    removeAllChildren() {
      let child = this.firstChild;
      while (child != null) {
        let next = child.nextSibling;
        child[_previousSibling] = null;
        child[_nextSibling] = null;
        if (!dart.equals(child.attached, this.attached)) dart.assertFailed(null, L0, 1003, 14, "child.attached == attached");
        this.dropChild(child);
        child = next;
      }
      this[_firstChild] = null;
      this[_lastChild] = null;
    }
    addToScene(builder, layerOffset = C0 || CT.C0) {
      if (builder == null) dart.nullFailed(L0, 1012, 35, "builder");
      if (layerOffset == null) dart.nullFailed(L0, 1012, 53, "layerOffset");
      this.addChildrenToScene(builder, layerOffset);
    }
    addChildrenToScene(builder, childOffset = C0 || CT.C0) {
      if (builder == null) dart.nullFailed(L0, 1023, 43, "builder");
      if (childOffset == null) dart.nullFailed(L0, 1023, 61, "childOffset");
      let child = this.firstChild;
      while (child != null) {
        if (dart.equals(childOffset, ui.Offset.zero)) {
          child[_addToSceneWithRetainedRendering](builder);
        } else {
          child.addToScene(builder, childOffset);
        }
        child = child.nextSibling;
      }
    }
    applyTransform(child, transform) {
      if (transform == null) dart.nullFailed(L0, 1068, 45, "transform");
      if (!(child != null)) dart.assertFailed(null, L0, 1069, 12, "child != null");
      if (!(transform != null)) dart.assertFailed(null, L0, 1070, 12, "transform != null");
    }
    depthFirstIterateChildren() {
      if (this.firstChild == null) return JSArrayOfLayer().of([]);
      let children = JSArrayOfLayer().of([]);
      let child = this.firstChild;
      while (child != null) {
        children[$add](child);
        if (layer$.ContainerLayer.is(child)) {
          children[$addAll](child.depthFirstIterateChildren());
        }
        child = child.nextSibling;
      }
      return children;
    }
    debugDescribeChildren() {
      let children = JSArrayOfDiagnosticsNode().of([]);
      if (this.firstChild == null) return children;
      let child = this.firstChild;
      let count = 1;
      while (true) {
        children[$add](dart.nullCheck(child).toDiagnosticsNode({name: "child " + dart.str(count)}));
        if (dart.equals(child, this.lastChild)) break;
        count = count + 1;
        child = child.nextSibling;
      }
      return children;
    }
  };
  (layer$.ContainerLayer.new = function() {
    this[_firstChild] = null;
    this[_lastChild] = null;
    layer$.ContainerLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ContainerLayer.prototype;
  dart.addTypeTests(layer$.ContainerLayer);
  dart.addTypeCaches(layer$.ContainerLayer);
  dart.setMethodSignature(layer$.ContainerLayer, () => ({
    __proto__: dart.getMethods(layer$.ContainerLayer.__proto__),
    buildScene: dart.fnType(ui.Scene, [ui.SceneBuilder]),
    [_debugUltimatePreviousSiblingOf]: dart.fnType(core.bool, [layer$.Layer], {equals: dart.nullable(layer$.Layer)}, {}),
    [_debugUltimateNextSiblingOf]: dart.fnType(core.bool, [layer$.Layer], {equals: dart.nullable(layer$.Layer)}, {}),
    [_highlightConflictingLayer]: dart.fnType(layer$.PictureLayer, [layer$.PhysicalModelLayer]),
    [_processConflictingPhysicalLayers]: dart.fnType(core.List$(layer$.PictureLayer), [layer$.PhysicalModelLayer, layer$.PhysicalModelLayer]),
    [_debugCheckElevations]: dart.fnType(core.List$(layer$.PictureLayer), []),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object]),
    append: dart.fnType(dart.void, [layer$.Layer]),
    [_removeChild]: dart.fnType(dart.void, [layer$.Layer]),
    removeAllChildren: dart.fnType(dart.void, []),
    addToScene: dart.fnType(dart.void, [ui.SceneBuilder], [ui.Offset]),
    addChildrenToScene: dart.fnType(dart.void, [ui.SceneBuilder], [ui.Offset]),
    applyTransform: dart.fnType(dart.void, [dart.nullable(layer$.Layer), vector_math_64.Matrix4]),
    depthFirstIterateChildren: dart.fnType(core.List$(layer$.Layer), [])
  }));
  dart.setGetterSignature(layer$.ContainerLayer, () => ({
    __proto__: dart.getGetters(layer$.ContainerLayer.__proto__),
    firstChild: dart.nullable(layer$.Layer),
    lastChild: dart.nullable(layer$.Layer),
    hasChildren: core.bool
  }));
  dart.setLibraryUri(layer$.ContainerLayer, L1);
  dart.setFieldSignature(layer$.ContainerLayer, () => ({
    __proto__: dart.getFields(layer$.ContainerLayer.__proto__),
    [_firstChild]: dart.fieldType(dart.nullable(layer$.Layer)),
    [_lastChild]: dart.fieldType(dart.nullable(layer$.Layer))
  }));
  var _offset = dart.privateName(layer$, "_offset");
  layer$.OffsetLayer = class OffsetLayer extends layer$.ContainerLayer {
    get offset() {
      return this[_offset];
    }
    set offset(value) {
      if (value == null) dart.nullFailed(L0, 1133, 21, "value");
      if (!dart.equals(value, this[_offset])) {
        this.markNeedsAddToScene();
      }
      this[_offset] = value;
    }
    findAnnotations(S, result, localPosition, opts) {
      if (result == null) dart.nullFailed(L0, 1141, 62, "result");
      if (localPosition == null) dart.nullFailed(L0, 1141, 77, "localPosition");
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (onlyFirst == null) dart.nullFailed(L0, 1141, 108, "onlyFirst");
      return super.findAnnotations(S, result, localPosition['-'](this.offset), {onlyFirst: onlyFirst});
    }
    applyTransform(child, transform) {
      if (transform == null) dart.nullFailed(L0, 1146, 45, "transform");
      if (!(child != null)) dart.assertFailed(null, L0, 1147, 12, "child != null");
      if (!(transform != null)) dart.assertFailed(null, L0, 1148, 12, "transform != null");
      transform.multiply(vector_math_64.Matrix4.translationValues(this.offset.dx, this.offset.dy, 0.0));
    }
    addToScene(builder, layerOffset = C0 || CT.C0) {
      if (builder == null) dart.nullFailed(L0, 1153, 35, "builder");
      if (layerOffset == null) dart.nullFailed(L0, 1153, 53, "layerOffset");
      this.engineLayer = builder.pushOffset(dart.notNull(layerOffset.dx) + dart.notNull(this.offset.dx), dart.notNull(layerOffset.dy) + dart.notNull(this.offset.dy), {oldLayer: OffsetEngineLayerN().as(this[_engineLayer])});
      this.addChildrenToScene(builder);
      builder.pop();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1169, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfOffset()).new("offset", this.offset));
    }
    toImage(bounds, opts) {
      if (bounds == null) dart.nullFailed(L0, 1190, 33, "bounds");
      let pixelRatio = opts && 'pixelRatio' in opts ? opts.pixelRatio : 1;
      if (pixelRatio == null) dart.nullFailed(L0, 1190, 50, "pixelRatio");
      return async.async(ui.Image, (function* toImage() {
        if (!(bounds != null)) dart.assertFailed(null, L0, 1191, 12, "bounds != null");
        if (!(pixelRatio != null)) dart.assertFailed(null, L0, 1192, 12, "pixelRatio != null");
        let builder = ui.SceneBuilder.new();
        let transform = vector_math_64.Matrix4.translationValues((-dart.notNull(bounds.left) - dart.notNull(this.offset.dx)) * dart.notNull(pixelRatio), (-dart.notNull(bounds.top) - dart.notNull(this.offset.dy)) * dart.notNull(pixelRatio), 0.0);
        transform.scale(pixelRatio, pixelRatio);
        builder.pushTransform(transform.storage);
        let scene = this.buildScene(builder);
        try {
          return yield scene.toImage((dart.notNull(pixelRatio) * dart.notNull(bounds.width))[$ceil](), (dart.notNull(pixelRatio) * dart.notNull(bounds.height))[$ceil]());
        } finally {
          scene.dispose();
        }
      }).bind(this));
    }
  };
  (layer$.OffsetLayer.new = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : C0 || CT.C0;
    if (offset == null) dart.nullFailed(L0, 1122, 24, "offset");
    this[_offset] = offset;
    layer$.OffsetLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.OffsetLayer.prototype;
  dart.addTypeTests(layer$.OffsetLayer);
  dart.addTypeCaches(layer$.OffsetLayer);
  dart.setMethodSignature(layer$.OffsetLayer, () => ({
    __proto__: dart.getMethods(layer$.OffsetLayer.__proto__),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object]),
    toImage: dart.fnType(async.Future$(ui.Image), [ui.Rect], {pixelRatio: core.double}, {})
  }));
  dart.setGetterSignature(layer$.OffsetLayer, () => ({
    __proto__: dart.getGetters(layer$.OffsetLayer.__proto__),
    offset: ui.Offset
  }));
  dart.setSetterSignature(layer$.OffsetLayer, () => ({
    __proto__: dart.getSetters(layer$.OffsetLayer.__proto__),
    offset: ui.Offset
  }));
  dart.setLibraryUri(layer$.OffsetLayer, L1);
  dart.setFieldSignature(layer$.OffsetLayer, () => ({
    __proto__: dart.getFields(layer$.OffsetLayer.__proto__),
    [_offset]: dart.fieldType(ui.Offset)
  }));
  var C3;
  var _clipRect = dart.privateName(layer$, "_clipRect");
  var _clipBehavior = dart.privateName(layer$, "_clipBehavior");
  layer$.ClipRectLayer = class ClipRectLayer extends layer$.ContainerLayer {
    get clipRect() {
      return this[_clipRect];
    }
    set clipRect(value) {
      if (!dart.equals(value, this[_clipRect])) {
        this[_clipRect] = value;
        this.markNeedsAddToScene();
      }
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (value == null) dart.nullFailed(L0, 1258, 25, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 1259, 12, "value != null");
      if (!!dart.equals(value, ui.Clip.none)) dart.assertFailed(null, L0, 1260, 12, "value != Clip.none");
      if (!dart.equals(value, this[_clipBehavior])) {
        this[_clipBehavior] = value;
        this.markNeedsAddToScene();
      }
    }
    findAnnotations(S, result, localPosition, opts) {
      if (result == null) dart.nullFailed(L0, 1268, 62, "result");
      if (localPosition == null) dart.nullFailed(L0, 1268, 77, "localPosition");
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (onlyFirst == null) dart.nullFailed(L0, 1268, 108, "onlyFirst");
      if (!dart.test(dart.nullCheck(this.clipRect).contains(localPosition))) return false;
      return super.findAnnotations(S, result, localPosition, {onlyFirst: onlyFirst});
    }
    addToScene(builder, layerOffset = C0 || CT.C0) {
      if (builder == null) dart.nullFailed(L0, 1275, 35, "builder");
      if (layerOffset == null) dart.nullFailed(L0, 1275, 53, "layerOffset");
      if (!(this.clipRect != null)) dart.assertFailed(null, L0, 1276, 12, "clipRect != null");
      if (!(this.clipBehavior != null)) dart.assertFailed(null, L0, 1277, 12, "clipBehavior != null");
      let enabled = true;
      if (!dart.test(dart.fn(() => {
        enabled = !dart.test(debug$0.debugDisableClipLayers);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 1279, 12, "() {\n      enabled = !debugDisableClipLayers;\n      return true;\n    }()");
      if (enabled) {
        let shiftedClipRect = dart.equals(layerOffset, ui.Offset.zero) ? dart.nullCheck(this.clipRect) : dart.nullCheck(this.clipRect).shift(layerOffset);
        this.engineLayer = builder.pushClipRect(shiftedClipRect, {clipBehavior: this.clipBehavior, oldLayer: ClipRectEngineLayerN().as(this[_engineLayer])});
      } else {
        this.engineLayer = null;
      }
      this.addChildrenToScene(builder, layerOffset);
      if (enabled) builder.pop();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1299, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfRect()).new("clipRect", this.clipRect));
      properties.add(new (DiagnosticsPropertyOfClip()).new("clipBehavior", this.clipBehavior));
    }
  };
  (layer$.ClipRectLayer.new = function(opts) {
    let clipRect = opts && 'clipRect' in opts ? opts.clipRect : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C3 || CT.C3;
    if (clipBehavior == null) dart.nullFailed(L0, 1230, 10, "clipBehavior");
    this[_clipRect] = clipRect;
    this[_clipBehavior] = clipBehavior;
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 1233, 15, "clipBehavior != null");
    if (!!dart.equals(clipBehavior, ui.Clip.none)) dart.assertFailed(null, L0, 1234, 15, "clipBehavior != Clip.none");
    layer$.ClipRectLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ClipRectLayer.prototype;
  dart.addTypeTests(layer$.ClipRectLayer);
  dart.addTypeCaches(layer$.ClipRectLayer);
  dart.setMethodSignature(layer$.ClipRectLayer, () => ({
    __proto__: dart.getMethods(layer$.ClipRectLayer.__proto__),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.ClipRectLayer, () => ({
    __proto__: dart.getGetters(layer$.ClipRectLayer.__proto__),
    clipRect: dart.nullable(ui.Rect),
    clipBehavior: ui.Clip
  }));
  dart.setSetterSignature(layer$.ClipRectLayer, () => ({
    __proto__: dart.getSetters(layer$.ClipRectLayer.__proto__),
    clipRect: dart.nullable(ui.Rect),
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(layer$.ClipRectLayer, L1);
  dart.setFieldSignature(layer$.ClipRectLayer, () => ({
    __proto__: dart.getFields(layer$.ClipRectLayer.__proto__),
    [_clipRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [_clipBehavior]: dart.fieldType(ui.Clip)
  }));
  var C4;
  var _clipRRect = dart.privateName(layer$, "_clipRRect");
  layer$.ClipRRectLayer = class ClipRRectLayer extends layer$.ContainerLayer {
    get clipRRect() {
      return this[_clipRRect];
    }
    set clipRRect(value) {
      if (!dart.equals(value, this[_clipRRect])) {
        this[_clipRRect] = value;
        this.markNeedsAddToScene();
      }
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (value == null) dart.nullFailed(L0, 1342, 25, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 1343, 12, "value != null");
      if (!!dart.equals(value, ui.Clip.none)) dart.assertFailed(null, L0, 1344, 12, "value != Clip.none");
      if (!dart.equals(value, this[_clipBehavior])) {
        this[_clipBehavior] = value;
        this.markNeedsAddToScene();
      }
    }
    findAnnotations(S, result, localPosition, opts) {
      if (result == null) dart.nullFailed(L0, 1352, 62, "result");
      if (localPosition == null) dart.nullFailed(L0, 1352, 77, "localPosition");
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (onlyFirst == null) dart.nullFailed(L0, 1352, 108, "onlyFirst");
      if (!dart.test(dart.nullCheck(this.clipRRect).contains(localPosition))) return false;
      return super.findAnnotations(S, result, localPosition, {onlyFirst: onlyFirst});
    }
    addToScene(builder, layerOffset = C0 || CT.C0) {
      if (builder == null) dart.nullFailed(L0, 1359, 35, "builder");
      if (layerOffset == null) dart.nullFailed(L0, 1359, 53, "layerOffset");
      if (!(this.clipRRect != null)) dart.assertFailed(null, L0, 1360, 12, "clipRRect != null");
      if (!(this.clipBehavior != null)) dart.assertFailed(null, L0, 1361, 12, "clipBehavior != null");
      let enabled = true;
      if (!dart.test(dart.fn(() => {
        enabled = !dart.test(debug$0.debugDisableClipLayers);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 1363, 12, "() {\n      enabled = !debugDisableClipLayers;\n      return true;\n    }()");
      if (enabled) {
        let shiftedClipRRect = dart.equals(layerOffset, ui.Offset.zero) ? dart.nullCheck(this.clipRRect) : dart.nullCheck(this.clipRRect).shift(layerOffset);
        this.engineLayer = builder.pushClipRRect(shiftedClipRRect, {clipBehavior: this.clipBehavior, oldLayer: ClipRRectEngineLayerN().as(this[_engineLayer])});
      } else {
        this.engineLayer = null;
      }
      this.addChildrenToScene(builder, layerOffset);
      if (enabled) builder.pop();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1383, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfRRect()).new("clipRRect", this.clipRRect));
      properties.add(new (DiagnosticsPropertyOfClip()).new("clipBehavior", this.clipBehavior));
    }
  };
  (layer$.ClipRRectLayer.new = function(opts) {
    let clipRRect = opts && 'clipRRect' in opts ? opts.clipRRect : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C4 || CT.C4;
    if (clipBehavior == null) dart.nullFailed(L0, 1318, 10, "clipBehavior");
    this[_clipRRect] = clipRRect;
    this[_clipBehavior] = clipBehavior;
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 1321, 15, "clipBehavior != null");
    if (!!dart.equals(clipBehavior, ui.Clip.none)) dart.assertFailed(null, L0, 1322, 15, "clipBehavior != Clip.none");
    layer$.ClipRRectLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ClipRRectLayer.prototype;
  dart.addTypeTests(layer$.ClipRRectLayer);
  dart.addTypeCaches(layer$.ClipRRectLayer);
  dart.setMethodSignature(layer$.ClipRRectLayer, () => ({
    __proto__: dart.getMethods(layer$.ClipRRectLayer.__proto__),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.ClipRRectLayer, () => ({
    __proto__: dart.getGetters(layer$.ClipRRectLayer.__proto__),
    clipRRect: dart.nullable(ui.RRect),
    clipBehavior: ui.Clip
  }));
  dart.setSetterSignature(layer$.ClipRRectLayer, () => ({
    __proto__: dart.getSetters(layer$.ClipRRectLayer.__proto__),
    clipRRect: dart.nullable(ui.RRect),
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(layer$.ClipRRectLayer, L1);
  dart.setFieldSignature(layer$.ClipRRectLayer, () => ({
    __proto__: dart.getFields(layer$.ClipRRectLayer.__proto__),
    [_clipRRect]: dart.fieldType(dart.nullable(ui.RRect)),
    [_clipBehavior]: dart.fieldType(ui.Clip)
  }));
  var _clipPath = dart.privateName(layer$, "_clipPath");
  layer$.ClipPathLayer = class ClipPathLayer extends layer$.ContainerLayer {
    get clipPath() {
      return this[_clipPath];
    }
    set clipPath(value) {
      if (!dart.equals(value, this[_clipPath])) {
        this[_clipPath] = value;
        this.markNeedsAddToScene();
      }
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (value == null) dart.nullFailed(L0, 1426, 25, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 1427, 12, "value != null");
      if (!!dart.equals(value, ui.Clip.none)) dart.assertFailed(null, L0, 1428, 12, "value != Clip.none");
      if (!dart.equals(value, this[_clipBehavior])) {
        this[_clipBehavior] = value;
        this.markNeedsAddToScene();
      }
    }
    findAnnotations(S, result, localPosition, opts) {
      if (result == null) dart.nullFailed(L0, 1436, 62, "result");
      if (localPosition == null) dart.nullFailed(L0, 1436, 77, "localPosition");
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (onlyFirst == null) dart.nullFailed(L0, 1436, 108, "onlyFirst");
      if (!dart.test(dart.nullCheck(this.clipPath).contains(localPosition))) return false;
      return super.findAnnotations(S, result, localPosition, {onlyFirst: onlyFirst});
    }
    addToScene(builder, layerOffset = C0 || CT.C0) {
      if (builder == null) dart.nullFailed(L0, 1443, 35, "builder");
      if (layerOffset == null) dart.nullFailed(L0, 1443, 53, "layerOffset");
      if (!(this.clipPath != null)) dart.assertFailed(null, L0, 1444, 12, "clipPath != null");
      if (!(this.clipBehavior != null)) dart.assertFailed(null, L0, 1445, 12, "clipBehavior != null");
      let enabled = true;
      if (!dart.test(dart.fn(() => {
        enabled = !dart.test(debug$0.debugDisableClipLayers);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 1447, 12, "() {\n      enabled = !debugDisableClipLayers;\n      return true;\n    }()");
      if (enabled) {
        let shiftedPath = dart.equals(layerOffset, ui.Offset.zero) ? dart.nullCheck(this.clipPath) : dart.nullCheck(this.clipPath).shift(layerOffset);
        this.engineLayer = builder.pushClipPath(shiftedPath, {clipBehavior: this.clipBehavior, oldLayer: ClipPathEngineLayerN().as(this[_engineLayer])});
      } else {
        this.engineLayer = null;
      }
      this.addChildrenToScene(builder, layerOffset);
      if (enabled) builder.pop();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1467, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfClip()).new("clipBehavior", this.clipBehavior));
    }
  };
  (layer$.ClipPathLayer.new = function(opts) {
    let clipPath = opts && 'clipPath' in opts ? opts.clipPath : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C4 || CT.C4;
    if (clipBehavior == null) dart.nullFailed(L0, 1402, 10, "clipBehavior");
    this[_clipPath] = clipPath;
    this[_clipBehavior] = clipBehavior;
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 1405, 15, "clipBehavior != null");
    if (!!dart.equals(clipBehavior, ui.Clip.none)) dart.assertFailed(null, L0, 1406, 15, "clipBehavior != Clip.none");
    layer$.ClipPathLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ClipPathLayer.prototype;
  dart.addTypeTests(layer$.ClipPathLayer);
  dart.addTypeCaches(layer$.ClipPathLayer);
  dart.setMethodSignature(layer$.ClipPathLayer, () => ({
    __proto__: dart.getMethods(layer$.ClipPathLayer.__proto__),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.ClipPathLayer, () => ({
    __proto__: dart.getGetters(layer$.ClipPathLayer.__proto__),
    clipPath: dart.nullable(ui.Path),
    clipBehavior: ui.Clip
  }));
  dart.setSetterSignature(layer$.ClipPathLayer, () => ({
    __proto__: dart.getSetters(layer$.ClipPathLayer.__proto__),
    clipPath: dart.nullable(ui.Path),
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(layer$.ClipPathLayer, L1);
  dart.setFieldSignature(layer$.ClipPathLayer, () => ({
    __proto__: dart.getFields(layer$.ClipPathLayer.__proto__),
    [_clipPath]: dart.fieldType(dart.nullable(ui.Path)),
    [_clipBehavior]: dart.fieldType(ui.Clip)
  }));
  var _colorFilter = dart.privateName(layer$, "_colorFilter");
  layer$.ColorFilterLayer = class ColorFilterLayer extends layer$.ContainerLayer {
    get colorFilter() {
      return this[_colorFilter];
    }
    set colorFilter(value) {
      if (!(value != null)) dart.assertFailed(null, L0, 1490, 12, "value != null");
      if (!dart.equals(value, this[_colorFilter])) {
        this[_colorFilter] = value;
        this.markNeedsAddToScene();
      }
    }
    addToScene(builder, layerOffset = C0 || CT.C0) {
      if (builder == null) dart.nullFailed(L0, 1498, 35, "builder");
      if (layerOffset == null) dart.nullFailed(L0, 1498, 53, "layerOffset");
      if (!(this.colorFilter != null)) dart.assertFailed(null, L0, 1499, 12, "colorFilter != null");
      this.engineLayer = builder.pushColorFilter(dart.nullCheck(this.colorFilter), {oldLayer: ColorFilterEngineLayerN().as(this[_engineLayer])});
      this.addChildrenToScene(builder, layerOffset);
      builder.pop();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1509, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfColorFilter()).new("colorFilter", this.colorFilter));
    }
  };
  (layer$.ColorFilterLayer.new = function(opts) {
    let colorFilter = opts && 'colorFilter' in opts ? opts.colorFilter : null;
    this[_colorFilter] = colorFilter;
    layer$.ColorFilterLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ColorFilterLayer.prototype;
  dart.addTypeTests(layer$.ColorFilterLayer);
  dart.addTypeCaches(layer$.ColorFilterLayer);
  dart.setGetterSignature(layer$.ColorFilterLayer, () => ({
    __proto__: dart.getGetters(layer$.ColorFilterLayer.__proto__),
    colorFilter: dart.nullable(ui.ColorFilter)
  }));
  dart.setSetterSignature(layer$.ColorFilterLayer, () => ({
    __proto__: dart.getSetters(layer$.ColorFilterLayer.__proto__),
    colorFilter: dart.nullable(ui.ColorFilter)
  }));
  dart.setLibraryUri(layer$.ColorFilterLayer, L1);
  dart.setFieldSignature(layer$.ColorFilterLayer, () => ({
    __proto__: dart.getFields(layer$.ColorFilterLayer.__proto__),
    [_colorFilter]: dart.fieldType(dart.nullable(ui.ColorFilter))
  }));
  var _imageFilter = dart.privateName(layer$, "_imageFilter");
  layer$.ImageFilterLayer = class ImageFilterLayer extends layer$.ContainerLayer {
    get imageFilter() {
      return this[_imageFilter];
    }
    set imageFilter(value) {
      if (!(value != null)) dart.assertFailed(null, L0, 1532, 12, "value != null");
      if (!dart.equals(value, this[_imageFilter])) {
        this[_imageFilter] = value;
        this.markNeedsAddToScene();
      }
    }
    addToScene(builder, layerOffset = C0 || CT.C0) {
      if (builder == null) dart.nullFailed(L0, 1540, 35, "builder");
      if (layerOffset == null) dart.nullFailed(L0, 1540, 53, "layerOffset");
      if (!(this.imageFilter != null)) dart.assertFailed(null, L0, 1541, 12, "imageFilter != null");
      this.engineLayer = builder.pushImageFilter(dart.nullCheck(this.imageFilter), {oldLayer: ImageFilterEngineLayerN().as(this[_engineLayer])});
      this.addChildrenToScene(builder, layerOffset);
      builder.pop();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1551, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfImageFilter()).new("imageFilter", this.imageFilter));
    }
  };
  (layer$.ImageFilterLayer.new = function(opts) {
    let imageFilter = opts && 'imageFilter' in opts ? opts.imageFilter : null;
    this[_imageFilter] = imageFilter;
    layer$.ImageFilterLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ImageFilterLayer.prototype;
  dart.addTypeTests(layer$.ImageFilterLayer);
  dart.addTypeCaches(layer$.ImageFilterLayer);
  dart.setGetterSignature(layer$.ImageFilterLayer, () => ({
    __proto__: dart.getGetters(layer$.ImageFilterLayer.__proto__),
    imageFilter: dart.nullable(ui.ImageFilter)
  }));
  dart.setSetterSignature(layer$.ImageFilterLayer, () => ({
    __proto__: dart.getSetters(layer$.ImageFilterLayer.__proto__),
    imageFilter: dart.nullable(ui.ImageFilter)
  }));
  dart.setLibraryUri(layer$.ImageFilterLayer, L1);
  dart.setFieldSignature(layer$.ImageFilterLayer, () => ({
    __proto__: dart.getFields(layer$.ImageFilterLayer.__proto__),
    [_imageFilter]: dart.fieldType(dart.nullable(ui.ImageFilter))
  }));
  var _lastEffectiveTransform = dart.privateName(layer$, "_lastEffectiveTransform");
  var _invertedTransform = dart.privateName(layer$, "_invertedTransform");
  var _inverseDirty = dart.privateName(layer$, "_inverseDirty");
  var _transform = dart.privateName(layer$, "_transform");
  var _transformOffset = dart.privateName(layer$, "_transformOffset");
  layer$.TransformLayer = class TransformLayer extends layer$.OffsetLayer {
    get transform() {
      return this[_transform];
    }
    set transform(value) {
      if (!(value != null)) dart.assertFailed(null, L0, 1583, 12, "value != null");
      if (!dart.test(dart.nullCheck(value).storage[$every](dart.fn(component => {
        if (component == null) dart.nullFailed(L0, 1584, 41, "component");
        return component[$isFinite];
      }, doubleTobool())))) dart.assertFailed(null, L0, 1584, 12, "value!.storage.every((double component) => component.isFinite)");
      if (dart.equals(value, this[_transform])) return;
      this[_transform] = value;
      this[_inverseDirty] = true;
      this.markNeedsAddToScene();
    }
    addToScene(builder, layerOffset = C0 || CT.C0) {
      let t0;
      if (builder == null) dart.nullFailed(L0, 1597, 35, "builder");
      if (layerOffset == null) dart.nullFailed(L0, 1597, 53, "layerOffset");
      if (!(this.transform != null)) dart.assertFailed(null, L0, 1598, 12, "transform != null");
      this[_lastEffectiveTransform] = this.transform;
      let totalOffset = this.offset['+'](layerOffset);
      if (!dart.equals(totalOffset, ui.Offset.zero)) {
        this[_lastEffectiveTransform] = (t0 = vector_math_64.Matrix4.translationValues(totalOffset.dx, totalOffset.dy, 0.0), (() => {
          t0.multiply(dart.nullCheck(this[_lastEffectiveTransform]));
          return t0;
        })());
      }
      this.engineLayer = builder.pushTransform(dart.nullCheck(this[_lastEffectiveTransform]).storage, {oldLayer: TransformEngineLayerN().as(this[_engineLayer])});
      this.addChildrenToScene(builder);
      builder.pop();
    }
    [_transformOffset](localPosition) {
      if (localPosition == null) dart.nullFailed(L0, 1613, 35, "localPosition");
      if (dart.test(this[_inverseDirty])) {
        this[_invertedTransform] = vector_math_64.Matrix4.tryInvert(events.PointerEvent.removePerspectiveTransform(dart.nullCheck(this.transform)));
        this[_inverseDirty] = false;
      }
      if (this[_invertedTransform] == null) return null;
      return matrix_utils.MatrixUtils.transformPoint(dart.nullCheck(this[_invertedTransform]), localPosition);
    }
    findAnnotations(S, result, localPosition, opts) {
      if (result == null) dart.nullFailed(L0, 1627, 62, "result");
      if (localPosition == null) dart.nullFailed(L0, 1627, 77, "localPosition");
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (onlyFirst == null) dart.nullFailed(L0, 1627, 108, "onlyFirst");
      let transformedOffset = this[_transformOffset](localPosition);
      if (transformedOffset == null) return false;
      return super.findAnnotations(S, result, transformedOffset, {onlyFirst: onlyFirst});
    }
    applyTransform(child, transform) {
      if (transform == null) dart.nullFailed(L0, 1635, 45, "transform");
      if (!(child != null)) dart.assertFailed(null, L0, 1636, 12, "child != null");
      if (!(transform != null)) dart.assertFailed(null, L0, 1637, 12, "transform != null");
      if (!(this[_lastEffectiveTransform] != null || this.transform != null)) dart.assertFailed(null, L0, 1638, 12, "_lastEffectiveTransform != null || this.transform != null");
      if (this[_lastEffectiveTransform] == null) {
        transform.multiply(dart.nullCheck(this.transform));
      } else {
        transform.multiply(dart.nullCheck(this[_lastEffectiveTransform]));
      }
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1647, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new matrix_utils.TransformProperty.new("transform", this.transform));
    }
  };
  (layer$.TransformLayer.new = function(opts) {
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let offset = opts && 'offset' in opts ? opts.offset : C0 || CT.C0;
    if (offset == null) dart.nullFailed(L0, 1567, 47, "offset");
    this[_lastEffectiveTransform] = null;
    this[_invertedTransform] = null;
    this[_inverseDirty] = true;
    this[_transform] = transform;
    layer$.TransformLayer.__proto__.new.call(this, {offset: offset});
    ;
  }).prototype = layer$.TransformLayer.prototype;
  dart.addTypeTests(layer$.TransformLayer);
  dart.addTypeCaches(layer$.TransformLayer);
  dart.setMethodSignature(layer$.TransformLayer, () => ({
    __proto__: dart.getMethods(layer$.TransformLayer.__proto__),
    [_transformOffset]: dart.fnType(dart.nullable(ui.Offset), [ui.Offset]),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.TransformLayer, () => ({
    __proto__: dart.getGetters(layer$.TransformLayer.__proto__),
    transform: dart.nullable(vector_math_64.Matrix4)
  }));
  dart.setSetterSignature(layer$.TransformLayer, () => ({
    __proto__: dart.getSetters(layer$.TransformLayer.__proto__),
    transform: dart.nullable(vector_math_64.Matrix4)
  }));
  dart.setLibraryUri(layer$.TransformLayer, L1);
  dart.setFieldSignature(layer$.TransformLayer, () => ({
    __proto__: dart.getFields(layer$.TransformLayer.__proto__),
    [_transform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_lastEffectiveTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_invertedTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_inverseDirty]: dart.fieldType(core.bool)
  }));
  var _alpha = dart.privateName(layer$, "_alpha");
  layer$.OpacityLayer = class OpacityLayer extends layer$.ContainerLayer {
    get alpha() {
      return this[_alpha];
    }
    set alpha(value) {
      if (!(value != null)) dart.assertFailed(null, L0, 1682, 12, "value != null");
      if (value != this[_alpha]) {
        this[_alpha] = value;
        this.markNeedsAddToScene();
      }
    }
    get offset() {
      return this[_offset];
    }
    set offset(value) {
      if (!dart.equals(value, this[_offset])) {
        this[_offset] = value;
        this.markNeedsAddToScene();
      }
    }
    applyTransform(child, transform) {
      if (transform == null) dart.nullFailed(L0, 1700, 45, "transform");
      if (!(child != null)) dart.assertFailed(null, L0, 1701, 12, "child != null");
      if (!(transform != null)) dart.assertFailed(null, L0, 1702, 12, "transform != null");
      transform.translate(dart.nullCheck(this.offset).dx, dart.nullCheck(this.offset).dy);
    }
    addToScene(builder, layerOffset = C0 || CT.C0) {
      if (builder == null) dart.nullFailed(L0, 1707, 35, "builder");
      if (layerOffset == null) dart.nullFailed(L0, 1707, 53, "layerOffset");
      if (!(this.alpha != null)) dart.assertFailed(null, L0, 1708, 12, "alpha != null");
      let enabled = this.firstChild != null;
      if (!dart.test(dart.fn(() => {
        enabled = enabled && !dart.test(debug$0.debugDisableOpacityLayers);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 1710, 12, "() {\n      enabled = enabled && !debugDisableOpacityLayers;\n      return true;\n    }()");
      if (enabled)
        this.engineLayer = builder.pushOpacity(dart.nullCheck(this.alpha), {offset: dart.nullCheck(this.offset)['+'](layerOffset), oldLayer: OpacityEngineLayerN().as(this[_engineLayer])});
      else
        this.engineLayer = null;
      this.addChildrenToScene(builder);
      if (enabled) builder.pop();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1729, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.IntProperty.new("alpha", this.alpha));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("offset", this.offset));
    }
  };
  (layer$.OpacityLayer.new = function(opts) {
    let alpha = opts && 'alpha' in opts ? opts.alpha : null;
    let offset = opts && 'offset' in opts ? opts.offset : C0 || CT.C0;
    if (offset == null) dart.nullFailed(L0, 1668, 12, "offset");
    this[_alpha] = alpha;
    this[_offset] = offset;
    layer$.OpacityLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.OpacityLayer.prototype;
  dart.addTypeTests(layer$.OpacityLayer);
  dart.addTypeCaches(layer$.OpacityLayer);
  dart.setGetterSignature(layer$.OpacityLayer, () => ({
    __proto__: dart.getGetters(layer$.OpacityLayer.__proto__),
    alpha: dart.nullable(core.int),
    offset: dart.nullable(ui.Offset)
  }));
  dart.setSetterSignature(layer$.OpacityLayer, () => ({
    __proto__: dart.getSetters(layer$.OpacityLayer.__proto__),
    alpha: dart.nullable(core.int),
    offset: dart.nullable(ui.Offset)
  }));
  dart.setLibraryUri(layer$.OpacityLayer, L1);
  dart.setFieldSignature(layer$.OpacityLayer, () => ({
    __proto__: dart.getFields(layer$.OpacityLayer.__proto__),
    [_alpha]: dart.fieldType(dart.nullable(core.int)),
    [_offset]: dart.fieldType(dart.nullable(ui.Offset))
  }));
  var _shader = dart.privateName(layer$, "_shader");
  var _maskRect = dart.privateName(layer$, "_maskRect");
  var _blendMode = dart.privateName(layer$, "_blendMode");
  layer$.ShaderMaskLayer = class ShaderMaskLayer extends layer$.ContainerLayer {
    get shader() {
      return this[_shader];
    }
    set shader(value) {
      if (!dart.equals(value, this[_shader])) {
        this[_shader] = value;
        this.markNeedsAddToScene();
      }
    }
    get maskRect() {
      return this[_maskRect];
    }
    set maskRect(value) {
      if (!dart.equals(value, this[_maskRect])) {
        this[_maskRect] = value;
        this.markNeedsAddToScene();
      }
    }
    get blendMode() {
      return this[_blendMode];
    }
    set blendMode(value) {
      if (!dart.equals(value, this[_blendMode])) {
        this[_blendMode] = value;
        this.markNeedsAddToScene();
      }
    }
    addToScene(builder, layerOffset = C0 || CT.C0) {
      if (builder == null) dart.nullFailed(L0, 1806, 35, "builder");
      if (layerOffset == null) dart.nullFailed(L0, 1806, 53, "layerOffset");
      if (!(this.shader != null)) dart.assertFailed(null, L0, 1807, 12, "shader != null");
      if (!(this.maskRect != null)) dart.assertFailed(null, L0, 1808, 12, "maskRect != null");
      if (!(this.blendMode != null)) dart.assertFailed(null, L0, 1809, 12, "blendMode != null");
      if (!(layerOffset != null)) dart.assertFailed(null, L0, 1810, 12, "layerOffset != null");
      let shiftedMaskRect = dart.equals(layerOffset, ui.Offset.zero) ? dart.nullCheck(this.maskRect) : dart.nullCheck(this.maskRect).shift(layerOffset);
      this.engineLayer = builder.pushShaderMask(dart.nullCheck(this.shader), shiftedMaskRect, dart.nullCheck(this.blendMode), {oldLayer: ShaderMaskEngineLayerN().as(this[_engineLayer])});
      this.addChildrenToScene(builder, layerOffset);
      builder.pop();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1823, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfShader()).new("shader", this.shader));
      properties.add(new (DiagnosticsPropertyOfRect()).new("maskRect", this.maskRect));
      properties.add(new (DiagnosticsPropertyOfBlendMode()).new("blendMode", this.blendMode));
    }
  };
  (layer$.ShaderMaskLayer.new = function(opts) {
    let shader = opts && 'shader' in opts ? opts.shader : null;
    let maskRect = opts && 'maskRect' in opts ? opts.maskRect : null;
    let blendMode = opts && 'blendMode' in opts ? opts.blendMode : null;
    this[_shader] = shader;
    this[_maskRect] = maskRect;
    this[_blendMode] = blendMode;
    layer$.ShaderMaskLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ShaderMaskLayer.prototype;
  dart.addTypeTests(layer$.ShaderMaskLayer);
  dart.addTypeCaches(layer$.ShaderMaskLayer);
  dart.setGetterSignature(layer$.ShaderMaskLayer, () => ({
    __proto__: dart.getGetters(layer$.ShaderMaskLayer.__proto__),
    shader: dart.nullable(ui.Shader),
    maskRect: dart.nullable(ui.Rect),
    blendMode: dart.nullable(ui.BlendMode)
  }));
  dart.setSetterSignature(layer$.ShaderMaskLayer, () => ({
    __proto__: dart.getSetters(layer$.ShaderMaskLayer.__proto__),
    shader: dart.nullable(ui.Shader),
    maskRect: dart.nullable(ui.Rect),
    blendMode: dart.nullable(ui.BlendMode)
  }));
  dart.setLibraryUri(layer$.ShaderMaskLayer, L1);
  dart.setFieldSignature(layer$.ShaderMaskLayer, () => ({
    __proto__: dart.getFields(layer$.ShaderMaskLayer.__proto__),
    [_shader]: dart.fieldType(dart.nullable(ui.Shader)),
    [_maskRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [_blendMode]: dart.fieldType(dart.nullable(ui.BlendMode))
  }));
  var _filter = dart.privateName(layer$, "_filter");
  layer$.BackdropFilterLayer = class BackdropFilterLayer extends layer$.ContainerLayer {
    get filter() {
      return this[_filter];
    }
    set filter(value) {
      if (!dart.equals(value, this[_filter])) {
        this[_filter] = value;
        this.markNeedsAddToScene();
      }
    }
    addToScene(builder, layerOffset = C0 || CT.C0) {
      if (builder == null) dart.nullFailed(L0, 1853, 35, "builder");
      if (layerOffset == null) dart.nullFailed(L0, 1853, 53, "layerOffset");
      if (!(this.filter != null)) dart.assertFailed(null, L0, 1854, 12, "filter != null");
      this.engineLayer = builder.pushBackdropFilter(dart.nullCheck(this.filter), {oldLayer: BackdropFilterEngineLayerN().as(this[_engineLayer])});
      this.addChildrenToScene(builder, layerOffset);
      builder.pop();
    }
  };
  (layer$.BackdropFilterLayer.new = function(opts) {
    let filter = opts && 'filter' in opts ? opts.filter : null;
    this[_filter] = filter;
    layer$.BackdropFilterLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.BackdropFilterLayer.prototype;
  dart.addTypeTests(layer$.BackdropFilterLayer);
  dart.addTypeCaches(layer$.BackdropFilterLayer);
  dart.setGetterSignature(layer$.BackdropFilterLayer, () => ({
    __proto__: dart.getGetters(layer$.BackdropFilterLayer.__proto__),
    filter: dart.nullable(ui.ImageFilter)
  }));
  dart.setSetterSignature(layer$.BackdropFilterLayer, () => ({
    __proto__: dart.getSetters(layer$.BackdropFilterLayer.__proto__),
    filter: dart.nullable(ui.ImageFilter)
  }));
  dart.setLibraryUri(layer$.BackdropFilterLayer, L1);
  dart.setFieldSignature(layer$.BackdropFilterLayer, () => ({
    __proto__: dart.getFields(layer$.BackdropFilterLayer.__proto__),
    [_filter]: dart.fieldType(dart.nullable(ui.ImageFilter))
  }));
  var C5;
  var _elevation = dart.privateName(layer$, "_elevation");
  var _color = dart.privateName(layer$, "_color");
  var _shadowColor = dart.privateName(layer$, "_shadowColor");
  layer$.PhysicalModelLayer = class PhysicalModelLayer extends layer$.ContainerLayer {
    get clipPath() {
      return this[_clipPath];
    }
    set clipPath(value) {
      if (!dart.equals(value, this[_clipPath])) {
        this[_clipPath] = value;
        this.markNeedsAddToScene();
      }
    }
    get [_debugTransformedClipPath]() {
      let ancestor = this.parent;
      let matrix = vector_math_64.Matrix4.identity();
      while (ancestor != null && ancestor.parent != null) {
        ancestor.applyTransform(this, matrix);
        ancestor = ancestor.parent;
      }
      return dart.nullCheck(this.clipPath).transform(matrix.storage);
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (value == null) dart.nullFailed(L0, 1917, 25, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 1918, 12, "value != null");
      if (!dart.equals(value, this[_clipBehavior])) {
        this[_clipBehavior] = value;
        this.markNeedsAddToScene();
      }
    }
    get elevation() {
      return this[_elevation];
    }
    set elevation(value) {
      if (value != this[_elevation]) {
        this[_elevation] = value;
        this.markNeedsAddToScene();
      }
    }
    get color() {
      return this[_color];
    }
    set color(value) {
      if (!dart.equals(value, this[_color])) {
        this[_color] = value;
        this.markNeedsAddToScene();
      }
    }
    get shadowColor() {
      return this[_shadowColor];
    }
    set shadowColor(value) {
      if (!dart.equals(value, this[_shadowColor])) {
        this[_shadowColor] = value;
        this.markNeedsAddToScene();
      }
    }
    findAnnotations(S, result, localPosition, opts) {
      if (result == null) dart.nullFailed(L0, 1968, 62, "result");
      if (localPosition == null) dart.nullFailed(L0, 1968, 77, "localPosition");
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (onlyFirst == null) dart.nullFailed(L0, 1968, 108, "onlyFirst");
      if (!dart.test(dart.nullCheck(this.clipPath).contains(localPosition))) return false;
      return super.findAnnotations(S, result, localPosition, {onlyFirst: onlyFirst});
    }
    addToScene(builder, layerOffset = C0 || CT.C0) {
      if (builder == null) dart.nullFailed(L0, 1975, 35, "builder");
      if (layerOffset == null) dart.nullFailed(L0, 1975, 53, "layerOffset");
      if (!(this.clipPath != null)) dart.assertFailed(null, L0, 1976, 12, "clipPath != null");
      if (!(this.clipBehavior != null)) dart.assertFailed(null, L0, 1977, 12, "clipBehavior != null");
      if (!(this.elevation != null)) dart.assertFailed(null, L0, 1978, 12, "elevation != null");
      if (!(this.color != null)) dart.assertFailed(null, L0, 1979, 12, "color != null");
      if (!(this.shadowColor != null)) dart.assertFailed(null, L0, 1980, 12, "shadowColor != null");
      let enabled = true;
      if (!dart.test(dart.fn(() => {
        enabled = !dart.test(debug$0.debugDisablePhysicalShapeLayers);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 1983, 12, "() {\n      enabled = !debugDisablePhysicalShapeLayers;\n      return true;\n    }()");
      if (enabled) {
        this.engineLayer = builder.pushPhysicalShape({path: dart.equals(layerOffset, ui.Offset.zero) ? dart.nullCheck(this.clipPath) : dart.nullCheck(this.clipPath).shift(layerOffset), elevation: dart.nullCheck(this.elevation), color: dart.nullCheck(this.color), shadowColor: this.shadowColor, clipBehavior: this.clipBehavior, oldLayer: PhysicalShapeEngineLayerN().as(this[_engineLayer])});
      } else {
        this.engineLayer = null;
      }
      this.addChildrenToScene(builder, layerOffset);
      if (enabled) builder.pop();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 2005, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("elevation", this.elevation));
      properties.add(new colors.ColorProperty.new("color", this.color));
    }
  };
  (layer$.PhysicalModelLayer.new = function(opts) {
    let clipPath = opts && 'clipPath' in opts ? opts.clipPath : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C5 || CT.C5;
    if (clipBehavior == null) dart.nullFailed(L0, 1881, 10, "clipBehavior");
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : null;
    this[_clipPath] = clipPath;
    this[_clipBehavior] = clipBehavior;
    this[_elevation] = elevation;
    this[_color] = color;
    this[_shadowColor] = shadowColor;
    layer$.PhysicalModelLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.PhysicalModelLayer.prototype;
  dart.addTypeTests(layer$.PhysicalModelLayer);
  dart.addTypeCaches(layer$.PhysicalModelLayer);
  dart.setMethodSignature(layer$.PhysicalModelLayer, () => ({
    __proto__: dart.getMethods(layer$.PhysicalModelLayer.__proto__),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.PhysicalModelLayer, () => ({
    __proto__: dart.getGetters(layer$.PhysicalModelLayer.__proto__),
    clipPath: dart.nullable(ui.Path),
    [_debugTransformedClipPath]: ui.Path,
    clipBehavior: ui.Clip,
    elevation: dart.nullable(core.double),
    color: dart.nullable(ui.Color),
    shadowColor: dart.nullable(ui.Color)
  }));
  dart.setSetterSignature(layer$.PhysicalModelLayer, () => ({
    __proto__: dart.getSetters(layer$.PhysicalModelLayer.__proto__),
    clipPath: dart.nullable(ui.Path),
    clipBehavior: ui.Clip,
    elevation: dart.nullable(core.double),
    color: dart.nullable(ui.Color),
    shadowColor: dart.nullable(ui.Color)
  }));
  dart.setLibraryUri(layer$.PhysicalModelLayer, L1);
  dart.setFieldSignature(layer$.PhysicalModelLayer, () => ({
    __proto__: dart.getFields(layer$.PhysicalModelLayer.__proto__),
    [_clipPath]: dart.fieldType(dart.nullable(ui.Path)),
    [_clipBehavior]: dart.fieldType(ui.Clip),
    [_elevation]: dart.fieldType(dart.nullable(core.double)),
    [_color]: dart.fieldType(dart.nullable(ui.Color)),
    [_shadowColor]: dart.fieldType(dart.nullable(ui.Color))
  }));
  var _leader = dart.privateName(layer$, "_leader");
  var leaderSize = dart.privateName(layer$, "LayerLink.leaderSize");
  layer$.LayerLink = class LayerLink extends core.Object {
    get leaderSize() {
      return this[leaderSize];
    }
    set leaderSize(value) {
      this[leaderSize] = value;
    }
    get leader() {
      return this[_leader];
    }
    toString() {
      return dart.str(diagnostics.describeIdentity(this)) + "(" + (this[_leader] != null ? "<linked>" : "<dangling>") + ")";
    }
  };
  (layer$.LayerLink.new = function() {
    this[_leader] = null;
    this[leaderSize] = null;
    ;
  }).prototype = layer$.LayerLink.prototype;
  dart.addTypeTests(layer$.LayerLink);
  dart.addTypeCaches(layer$.LayerLink);
  dart.setGetterSignature(layer$.LayerLink, () => ({
    __proto__: dart.getGetters(layer$.LayerLink.__proto__),
    leader: dart.nullable(layer$.LeaderLayer)
  }));
  dart.setLibraryUri(layer$.LayerLink, L1);
  dart.setFieldSignature(layer$.LayerLink, () => ({
    __proto__: dart.getFields(layer$.LayerLink.__proto__),
    [_leader]: dart.fieldType(dart.nullable(layer$.LeaderLayer)),
    leaderSize: dart.fieldType(dart.nullable(ui.Size))
  }));
  dart.defineExtensionMethods(layer$.LayerLink, ['toString']);
  var _lastOffset = dart.privateName(layer$, "_lastOffset");
  var _link = dart.privateName(layer$, "_link");
  var offset$ = dart.privateName(layer$, "LeaderLayer.offset");
  layer$.LeaderLayer = class LeaderLayer extends layer$.ContainerLayer {
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      this[offset$] = value;
    }
    get link() {
      return this[_link];
    }
    set link(value) {
      if (value == null) dart.nullFailed(L0, 2062, 22, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 2063, 12, "value != null");
      this[_link] = value;
    }
    get alwaysNeedsAddToScene() {
      return true;
    }
    attach(owner) {
      core.Object.as(owner);
      if (owner == null) dart.nullFailed(L0, 2082, 22, "owner");
      super.attach(owner);
      if (!(this.link.leader == null)) dart.assertFailed(null, L0, 2084, 12, "link.leader == null");
      this[_lastOffset] = null;
      this.link[_leader] = this;
    }
    detach() {
      if (!dart.equals(this.link.leader, this)) dart.assertFailed(null, L0, 2091, 12, "link.leader == this");
      this.link[_leader] = null;
      this[_lastOffset] = null;
      super.detach();
    }
    findAnnotations(S, result, localPosition, opts) {
      if (result == null) dart.nullFailed(L0, 2105, 62, "result");
      if (localPosition == null) dart.nullFailed(L0, 2105, 77, "localPosition");
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (onlyFirst == null) dart.nullFailed(L0, 2105, 108, "onlyFirst");
      return super.findAnnotations(S, result, localPosition['-'](this.offset), {onlyFirst: onlyFirst});
    }
    addToScene(builder, layerOffset = C0 || CT.C0) {
      if (builder == null) dart.nullFailed(L0, 2110, 35, "builder");
      if (layerOffset == null) dart.nullFailed(L0, 2110, 53, "layerOffset");
      if (!(this.offset != null)) dart.assertFailed(null, L0, 2111, 12, "offset != null");
      this[_lastOffset] = this.offset['+'](layerOffset);
      if (!dart.equals(this[_lastOffset], ui.Offset.zero)) this.engineLayer = builder.pushTransform(vector_math_64.Matrix4.translationValues(dart.nullCheck(this[_lastOffset]).dx, dart.nullCheck(this[_lastOffset]).dy, 0.0).storage, {oldLayer: TransformEngineLayerN().as(this[_engineLayer])});
      this.addChildrenToScene(builder);
      if (!dart.equals(this[_lastOffset], ui.Offset.zero)) builder.pop();
    }
    applyTransform(child, transform) {
      if (transform == null) dart.nullFailed(L0, 2131, 45, "transform");
      if (!(this[_lastOffset] != null)) dart.assertFailed(null, L0, 2132, 12, "_lastOffset != null");
      if (!dart.equals(this[_lastOffset], ui.Offset.zero)) transform.translate(dart.nullCheck(this[_lastOffset]).dx, dart.nullCheck(this[_lastOffset]).dy);
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 2138, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfOffset()).new("offset", this.offset));
      properties.add(new (DiagnosticsPropertyOfLayerLink()).new("link", this.link));
    }
  };
  (layer$.LeaderLayer.new = function(opts) {
    let link = opts && 'link' in opts ? opts.link : null;
    if (link == null) dart.nullFailed(L0, 2055, 36, "link");
    let offset = opts && 'offset' in opts ? opts.offset : C0 || CT.C0;
    if (offset == null) dart.nullFailed(L0, 2055, 47, "offset");
    this[_lastOffset] = null;
    this[offset$] = offset;
    if (!(link != null)) dart.assertFailed(null, L0, 2055, 80, "link != null");
    this[_link] = link;
    layer$.LeaderLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.LeaderLayer.prototype;
  dart.addTypeTests(layer$.LeaderLayer);
  dart.addTypeCaches(layer$.LeaderLayer);
  dart.setMethodSignature(layer$.LeaderLayer, () => ({
    __proto__: dart.getMethods(layer$.LeaderLayer.__proto__),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.LeaderLayer, () => ({
    __proto__: dart.getGetters(layer$.LeaderLayer.__proto__),
    link: layer$.LayerLink
  }));
  dart.setSetterSignature(layer$.LeaderLayer, () => ({
    __proto__: dart.getSetters(layer$.LeaderLayer.__proto__),
    link: layer$.LayerLink
  }));
  dart.setLibraryUri(layer$.LeaderLayer, L1);
  dart.setFieldSignature(layer$.LeaderLayer, () => ({
    __proto__: dart.getFields(layer$.LeaderLayer.__proto__),
    [_link]: dart.fieldType(layer$.LayerLink),
    offset: dart.fieldType(ui.Offset),
    [_lastOffset]: dart.fieldType(dart.nullable(ui.Offset))
  }));
  var _lastTransform = dart.privateName(layer$, "_lastTransform");
  var _establishTransform = dart.privateName(layer$, "_establishTransform");
  var showWhenUnlinked$ = dart.privateName(layer$, "FollowerLayer.showWhenUnlinked");
  var unlinkedOffset$ = dart.privateName(layer$, "FollowerLayer.unlinkedOffset");
  var linkedOffset$ = dart.privateName(layer$, "FollowerLayer.linkedOffset");
  layer$.FollowerLayer = class FollowerLayer extends layer$.ContainerLayer {
    get showWhenUnlinked() {
      return this[showWhenUnlinked$];
    }
    set showWhenUnlinked(value) {
      this[showWhenUnlinked$] = value;
    }
    get unlinkedOffset() {
      return this[unlinkedOffset$];
    }
    set unlinkedOffset(value) {
      this[unlinkedOffset$] = value;
    }
    get linkedOffset() {
      return this[linkedOffset$];
    }
    set linkedOffset(value) {
      this[linkedOffset$] = value;
    }
    get link() {
      return this[_link];
    }
    set link(value) {
      if (value == null) dart.nullFailed(L0, 2175, 22, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 2176, 12, "value != null");
      this[_link] = value;
    }
    [_transformOffset](localPosition) {
      if (localPosition == null) dart.nullFailed(L0, 2228, 35, "localPosition");
      if (dart.test(this[_inverseDirty])) {
        this[_invertedTransform] = vector_math_64.Matrix4.tryInvert(dart.nullCheck(this.getLastTransform()));
        this[_inverseDirty] = false;
      }
      if (this[_invertedTransform] == null) return null;
      let vector = vector_math_64.Vector4.new(localPosition.dx, localPosition.dy, 0.0, 1.0);
      let result = dart.nullCheck(this[_invertedTransform]).transform(vector);
      return new ui.Offset.new(dart.notNull(result._get(0)) - dart.notNull(dart.nullCheck(this.linkedOffset).dx), dart.notNull(result._get(1)) - dart.notNull(dart.nullCheck(this.linkedOffset).dy));
    }
    findAnnotations(S, result, localPosition, opts) {
      if (result == null) dart.nullFailed(L0, 2241, 62, "result");
      if (localPosition == null) dart.nullFailed(L0, 2241, 77, "localPosition");
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (onlyFirst == null) dart.nullFailed(L0, 2241, 108, "onlyFirst");
      if (this.link.leader == null) {
        if (dart.nullCheck(this.showWhenUnlinked)) {
          return super.findAnnotations(S, result, localPosition['-'](dart.nullCheck(this.unlinkedOffset)), {onlyFirst: onlyFirst});
        }
        return false;
      }
      let transformedOffset = this[_transformOffset](localPosition);
      if (transformedOffset == null) {
        return false;
      }
      return super.findAnnotations(S, result, transformedOffset, {onlyFirst: onlyFirst});
    }
    getLastTransform() {
      if (this[_lastTransform] == null) return null;
      let result = vector_math_64.Matrix4.translationValues(-dart.notNull(dart.nullCheck(this[_lastOffset]).dx), -dart.notNull(dart.nullCheck(this[_lastOffset]).dy), 0.0);
      result.multiply(dart.nullCheck(this[_lastTransform]));
      return result;
    }
    static _collectTransformForLayerChain(layers) {
      let t0;
      if (layers == null) dart.nullFailed(L0, 2275, 71, "layers");
      let result = vector_math_64.Matrix4.identity();
      for (let index = dart.notNull(layers[$length]) - 1; index > 0; index = index - 1) {
        t0 = layers[$_get](index);
        t0 == null ? null : t0.applyTransform(layers[$_get](index - 1), result);
      }
      return result;
    }
    static _pathsToCommonAncestor(a, b, ancestorsA, ancestorsB) {
      if (ancestorsA == null) dart.nullFailed(L0, 2293, 27, "ancestorsA");
      if (ancestorsB == null) dart.nullFailed(L0, 2293, 61, "ancestorsB");
      if (a == null || b == null) return null;
      if (a == b) return a;
      if (dart.notNull(a.depth) < dart.notNull(b.depth)) {
        ancestorsB[$add](b.parent);
        return layer$.FollowerLayer._pathsToCommonAncestor(a, b.parent, ancestorsA, ancestorsB);
      } else if (dart.notNull(a.depth) > dart.notNull(b.depth)) {
        ancestorsA[$add](a.parent);
        return layer$.FollowerLayer._pathsToCommonAncestor(a.parent, b, ancestorsA, ancestorsB);
      }
      ancestorsA[$add](a.parent);
      ancestorsB[$add](b.parent);
      return layer$.FollowerLayer._pathsToCommonAncestor(a.parent, b.parent, ancestorsA, ancestorsB);
    }
    [_establishTransform]() {
      if (!(this.link != null)) dart.assertFailed(null, L0, 2317, 12, "link != null");
      this[_lastTransform] = null;
      let leader = this.link.leader;
      if (leader == null) return;
      if (!dart.equals(leader.owner, this.owner)) dart.assertFailed("Linked LeaderLayer anchor is not in the same layer tree as the FollowerLayer.", L0, 2325, 7, "leader.owner == owner");
      if (!(leader[_lastOffset] != null)) dart.assertFailed("LeaderLayer anchor must come before FollowerLayer in paint order, but the reverse was true.", L0, 2329, 7, "leader._lastOffset != null");
      let forwardLayers = JSArrayOfContainerLayer().of([leader]);
      let inverseLayers = JSArrayOfContainerLayer().of([this]);
      let ancestor = layer$.FollowerLayer._pathsToCommonAncestor(leader, this, forwardLayers, inverseLayers);
      if (!(ancestor != null)) dart.assertFailed(null, L0, 2343, 12, "ancestor != null");
      let forwardTransform = layer$.FollowerLayer._collectTransformForLayerChain(forwardLayers);
      leader.applyTransform(null, forwardTransform);
      forwardTransform.translate(dart.nullCheck(this.linkedOffset).dx, dart.nullCheck(this.linkedOffset).dy);
      let inverseTransform = layer$.FollowerLayer._collectTransformForLayerChain(inverseLayers);
      if (inverseTransform.invert() === 0.0) {
        return;
      }
      inverseTransform.multiply(forwardTransform);
      this[_lastTransform] = inverseTransform;
      this[_inverseDirty] = true;
    }
    get alwaysNeedsAddToScene() {
      return true;
    }
    addToScene(builder, layerOffset = C0 || CT.C0) {
      if (builder == null) dart.nullFailed(L0, 2378, 35, "builder");
      if (layerOffset == null) dart.nullFailed(L0, 2378, 53, "layerOffset");
      if (!(this.link != null)) dart.assertFailed(null, L0, 2379, 12, "link != null");
      if (!(this.showWhenUnlinked != null)) dart.assertFailed(null, L0, 2380, 12, "showWhenUnlinked != null");
      if (this.link.leader == null && !dart.nullCheck(this.showWhenUnlinked)) {
        this[_lastTransform] = null;
        this[_lastOffset] = null;
        this[_inverseDirty] = true;
        this.engineLayer = null;
        return;
      }
      this[_establishTransform]();
      if (this[_lastTransform] != null) {
        this.engineLayer = builder.pushTransform(dart.nullCheck(this[_lastTransform]).storage, {oldLayer: TransformEngineLayerN().as(this[_engineLayer])});
        this.addChildrenToScene(builder);
        builder.pop();
        this[_lastOffset] = dart.nullCheck(this.unlinkedOffset)['+'](layerOffset);
      } else {
        this[_lastOffset] = null;
        let matrix = vector_math_64.Matrix4.translationValues(dart.nullCheck(this.unlinkedOffset).dx, dart.nullCheck(this.unlinkedOffset).dy, 0.0);
        this.engineLayer = builder.pushTransform(matrix.storage, {oldLayer: TransformEngineLayerN().as(this[_engineLayer])});
        this.addChildrenToScene(builder);
        builder.pop();
      }
      this[_inverseDirty] = true;
    }
    applyTransform(child, transform) {
      if (transform == null) dart.nullFailed(L0, 2411, 45, "transform");
      if (!(child != null)) dart.assertFailed(null, L0, 2412, 12, "child != null");
      if (!(transform != null)) dart.assertFailed(null, L0, 2413, 12, "transform != null");
      if (this[_lastTransform] != null) {
        transform.multiply(dart.nullCheck(this[_lastTransform]));
      } else {
        transform.multiply(vector_math_64.Matrix4.translationValues(dart.nullCheck(this.unlinkedOffset).dx, dart.nullCheck(this.unlinkedOffset).dy, 0.0));
      }
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 2422, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfLayerLink()).new("link", this.link));
      properties.add(new matrix_utils.TransformProperty.new("transform", this.getLastTransform(), {defaultValue: null}));
    }
  };
  (layer$.FollowerLayer.new = function(opts) {
    let link = opts && 'link' in opts ? opts.link : null;
    if (link == null) dart.nullFailed(L0, 2163, 24, "link");
    let showWhenUnlinked = opts && 'showWhenUnlinked' in opts ? opts.showWhenUnlinked : true;
    let unlinkedOffset = opts && 'unlinkedOffset' in opts ? opts.unlinkedOffset : C0 || CT.C0;
    let linkedOffset = opts && 'linkedOffset' in opts ? opts.linkedOffset : C0 || CT.C0;
    this[_lastOffset] = null;
    this[_lastTransform] = null;
    this[_invertedTransform] = null;
    this[_inverseDirty] = true;
    this[showWhenUnlinked$] = showWhenUnlinked;
    this[unlinkedOffset$] = unlinkedOffset;
    this[linkedOffset$] = linkedOffset;
    if (!(link != null)) dart.assertFailed(null, L0, 2167, 15, "link != null");
    this[_link] = link;
    layer$.FollowerLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.FollowerLayer.prototype;
  dart.addTypeTests(layer$.FollowerLayer);
  dart.addTypeCaches(layer$.FollowerLayer);
  dart.setMethodSignature(layer$.FollowerLayer, () => ({
    __proto__: dart.getMethods(layer$.FollowerLayer.__proto__),
    [_transformOffset]: dart.fnType(dart.nullable(ui.Offset), [ui.Offset]),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object]),
    getLastTransform: dart.fnType(dart.nullable(vector_math_64.Matrix4), []),
    [_establishTransform]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(layer$.FollowerLayer, () => ({
    __proto__: dart.getGetters(layer$.FollowerLayer.__proto__),
    link: layer$.LayerLink
  }));
  dart.setSetterSignature(layer$.FollowerLayer, () => ({
    __proto__: dart.getSetters(layer$.FollowerLayer.__proto__),
    link: layer$.LayerLink
  }));
  dart.setLibraryUri(layer$.FollowerLayer, L1);
  dart.setFieldSignature(layer$.FollowerLayer, () => ({
    __proto__: dart.getFields(layer$.FollowerLayer.__proto__),
    [_link]: dart.fieldType(layer$.LayerLink),
    showWhenUnlinked: dart.fieldType(dart.nullable(core.bool)),
    unlinkedOffset: dart.fieldType(dart.nullable(ui.Offset)),
    linkedOffset: dart.fieldType(dart.nullable(ui.Offset)),
    [_lastOffset]: dart.fieldType(dart.nullable(ui.Offset)),
    [_lastTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_invertedTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_inverseDirty]: dart.fieldType(core.bool)
  }));
  const _is_AnnotatedRegionLayer_default = Symbol('_is_AnnotatedRegionLayer_default');
  var value$ = dart.privateName(layer$, "AnnotatedRegionLayer.value");
  var size$ = dart.privateName(layer$, "AnnotatedRegionLayer.size");
  var offset$0 = dart.privateName(layer$, "AnnotatedRegionLayer.offset");
  var opaque$ = dart.privateName(layer$, "AnnotatedRegionLayer.opaque");
  layer$.AnnotatedRegionLayer$ = dart.generic(T => {
    var DiagnosticsPropertyOfT = () => (DiagnosticsPropertyOfT = dart.constFn(diagnostics.DiagnosticsProperty$(T)))();
    class AnnotatedRegionLayer extends layer$.ContainerLayer {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get size() {
        return this[size$];
      }
      set size(value) {
        super.size = value;
      }
      get offset() {
        return this[offset$0];
      }
      set offset(value) {
        super.offset = value;
      }
      get opaque() {
        return this[opaque$];
      }
      set opaque(value) {
        super.opaque = value;
      }
      findAnnotations(S, result, localPosition, opts) {
        if (result == null) dart.nullFailed(L0, 2531, 62, "result");
        if (localPosition == null) dart.nullFailed(L0, 2531, 77, "localPosition");
        let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
        if (onlyFirst == null) dart.nullFailed(L0, 2531, 108, "onlyFirst");
        let isAbsorbed = super.findAnnotations(S, result, localPosition, {onlyFirst: onlyFirst});
        if (dart.test(result.entries[$isNotEmpty]) && dart.test(onlyFirst)) return isAbsorbed;
        if (this.size != null && !dart.test(this.offset['&'](dart.nullCheck(this.size)).contains(localPosition))) {
          return isAbsorbed;
        }
        if (dart.wrapType(T)._equals(dart.wrapType(S))) {
          isAbsorbed = dart.test(isAbsorbed) || dart.test(this.opaque);
          let untypedValue = this.value;
          let typedValue = S.as(untypedValue);
          result.add(new (layer$.AnnotationEntry$(S)).new({annotation: typedValue, localPosition: localPosition['-'](this.offset)}));
        }
        return isAbsorbed;
      }
      debugFillProperties(properties) {
        if (properties == null) dart.nullFailed(L0, 2551, 56, "properties");
        super.debugFillProperties(properties);
        properties.add(new (DiagnosticsPropertyOfT()).new("value", this.value));
        properties.add(new (DiagnosticsPropertyOfSize()).new("size", this.size, {defaultValue: null}));
        properties.add(new (DiagnosticsPropertyOfOffset()).new("offset", this.offset, {defaultValue: null}));
        properties.add(new (DiagnosticsPropertyOfbool()).new("opaque", this.opaque, {defaultValue: false}));
      }
    }
    (AnnotatedRegionLayer.new = function(value, opts) {
      let t0;
      if (value == null) dart.nullFailed(L0, 2455, 10, "value");
      let size = opts && 'size' in opts ? opts.size : null;
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let opaque = opts && 'opaque' in opts ? opts.opaque : false;
      if (opaque == null) dart.nullFailed(L0, 2458, 10, "opaque");
      this[value$] = value;
      this[size$] = size;
      this[opaque$] = opaque;
      if (!(value != null)) dart.assertFailed(null, L0, 2459, 15, "value != null");
      if (!(opaque != null)) dart.assertFailed(null, L0, 2460, 15, "opaque != null");
      this[offset$0] = (t0 = offset, t0 == null ? ui.Offset.zero : t0);
      AnnotatedRegionLayer.__proto__.new.call(this);
      ;
    }).prototype = AnnotatedRegionLayer.prototype;
    dart.addTypeTests(AnnotatedRegionLayer);
    AnnotatedRegionLayer.prototype[_is_AnnotatedRegionLayer_default] = true;
    dart.addTypeCaches(AnnotatedRegionLayer);
    dart.setMethodSignature(AnnotatedRegionLayer, () => ({
      __proto__: dart.getMethods(AnnotatedRegionLayer.__proto__),
      findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
    }));
    dart.setLibraryUri(AnnotatedRegionLayer, L1);
    dart.setFieldSignature(AnnotatedRegionLayer, () => ({
      __proto__: dart.getFields(AnnotatedRegionLayer.__proto__),
      value: dart.finalFieldType(T),
      size: dart.finalFieldType(dart.nullable(ui.Size)),
      offset: dart.finalFieldType(ui.Offset),
      opaque: dart.finalFieldType(core.bool)
    }));
    return AnnotatedRegionLayer;
  });
  layer$.AnnotatedRegionLayer = layer$.AnnotatedRegionLayer$();
  dart.addTypeTests(layer$.AnnotatedRegionLayer, _is_AnnotatedRegionLayer_default);
  var C6;
  var size$0 = dart.privateName(view, "ViewConfiguration.size");
  var devicePixelRatio$ = dart.privateName(view, "ViewConfiguration.devicePixelRatio");
  view.ViewConfiguration = class ViewConfiguration extends core.Object {
    get size() {
      return this[size$0];
    }
    set size(value) {
      super.size = value;
    }
    get devicePixelRatio() {
      return this[devicePixelRatio$];
    }
    set devicePixelRatio(value) {
      super.devicePixelRatio = value;
    }
    toMatrix() {
      return vector_math_64.Matrix4.diagonal3Values(this.devicePixelRatio, this.devicePixelRatio, 1.0);
    }
    toString() {
      return dart.str(this.size) + " at " + dart.str(debug.debugFormatDouble(this.devicePixelRatio)) + "x";
    }
  };
  (view.ViewConfiguration.new = function(opts) {
    let size = opts && 'size' in opts ? opts.size : C6 || CT.C6;
    if (size == null) dart.nullFailed(L2, 27, 10, "size");
    let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : 1;
    if (devicePixelRatio == null) dart.nullFailed(L2, 28, 10, "devicePixelRatio");
    this[size$0] = size;
    this[devicePixelRatio$] = devicePixelRatio;
    ;
  }).prototype = view.ViewConfiguration.prototype;
  dart.addTypeTests(view.ViewConfiguration);
  dart.addTypeCaches(view.ViewConfiguration);
  dart.setMethodSignature(view.ViewConfiguration, () => ({
    __proto__: dart.getMethods(view.ViewConfiguration.__proto__),
    toMatrix: dart.fnType(vector_math_64.Matrix4, [])
  }));
  dart.setLibraryUri(view.ViewConfiguration, L3);
  dart.setFieldSignature(view.ViewConfiguration, () => ({
    __proto__: dart.getFields(view.ViewConfiguration.__proto__),
    size: dart.finalFieldType(ui.Size),
    devicePixelRatio: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(view.ViewConfiguration, ['toString']);
  var _size = dart.privateName(view, "_size");
  var _rootTransform = dart.privateName(view, "_rootTransform");
  var _configuration = dart.privateName(view, "_configuration");
  var _window = dart.privateName(view, "_window");
  var _updateMatricesAndCreateNewRootLayer = dart.privateName(view, "_updateMatricesAndCreateNewRootLayer");
  var _updateSystemChrome = dart.privateName(view, "_updateSystemChrome");
  var _name$ = dart.privateName(platform, "_name");
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  var C12;
  var _debugDoingThisResize = dart.privateName(object$, "_debugDoingThisResize");
  var _debugDoingThisLayout = dart.privateName(object$, "_debugDoingThisLayout");
  var _debugCanParentUseSize = dart.privateName(object$, "_debugCanParentUseSize");
  var _debugMutationsLocked = dart.privateName(object$, "_debugMutationsLocked");
  var _needsLayout = dart.privateName(object$, "_needsLayout");
  var _relayoutBoundary = dart.privateName(object$, "_relayoutBoundary");
  var _doingThisLayoutWithCallback = dart.privateName(object$, "_doingThisLayoutWithCallback");
  var _constraints = dart.privateName(object$, "_constraints");
  var _debugDoingThisPaint = dart.privateName(object$, "_debugDoingThisPaint");
  var _layer = dart.privateName(object$, "_layer");
  var _needsCompositingBitsUpdate = dart.privateName(object$, "_needsCompositingBitsUpdate");
  var __RenderObject__needsCompositing = dart.privateName(object$, "_#RenderObject#_needsCompositing");
  var __RenderObject__needsCompositing_isSet = dart.privateName(object$, "_#RenderObject#_needsCompositing#isSet");
  var _needsPaint = dart.privateName(object$, "_needsPaint");
  var _cachedSemanticsConfiguration = dart.privateName(object$, "_cachedSemanticsConfiguration");
  var _needsSemanticsUpdate = dart.privateName(object$, "_needsSemanticsUpdate");
  var _semantics = dart.privateName(object$, "_semantics");
  var _needsCompositing = dart.privateName(object$, "_needsCompositing");
  var _debugCanPerformMutations = dart.privateName(object$, "_debugCanPerformMutations");
  var _cleanRelayoutBoundary = dart.privateName(object$, "_cleanRelayoutBoundary");
  var _debugReportException = dart.privateName(object$, "_debugReportException");
  var _debugAllowMutationsToDirtySubtrees = dart.privateName(object$, "_debugAllowMutationsToDirtySubtrees");
  var _semanticsConfiguration = dart.privateName(object$, "_semanticsConfiguration");
  var _debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout = dart.privateName(object$, "_debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout");
  var _nodesNeedingLayout = dart.privateName(object$, "_nodesNeedingLayout");
  var C13;
  var _debugDoingLayout = dart.privateName(object$, "_debugDoingLayout");
  var _layoutWithoutResize = dart.privateName(object$, "_layoutWithoutResize");
  var _enableMutationsToDirtySubtrees = dart.privateName(object$, "_enableMutationsToDirtySubtrees");
  var _nodesNeedingCompositingBitsUpdate = dart.privateName(object$, "_nodesNeedingCompositingBitsUpdate");
  var _updateCompositingBits = dart.privateName(object$, "_updateCompositingBits");
  var _nodesNeedingPaint = dart.privateName(object$, "_nodesNeedingPaint");
  var _skippedPaintingOnLayer = dart.privateName(object$, "_skippedPaintingOnLayer");
  var _debugDoingPaint = dart.privateName(object$, "_debugDoingPaint");
  var _paintWithContext = dart.privateName(object$, "_paintWithContext");
  var _debugDoingSemantics = dart.privateName(object$, "_debugDoingSemantics");
  var _semanticsOwner = dart.privateName(object$, "_semanticsOwner");
  var _nodesNeedingSemantics = dart.privateName(object$, "_nodesNeedingSemantics");
  var _getSemanticsForParent = dart.privateName(object$, "_getSemanticsForParent");
  var _updateSemantics = dart.privateName(object$, "_updateSemantics");
  var _name$0 = dart.privateName(diagnostics, "_name");
  var C14;
  var C15;
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C16;
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  var C17;
  var C18;
  var parentData = dart.privateName(object$, "RenderObject.parentData");
  var debugCreator$ = dart.privateName(object$, "RenderObject.debugCreator");
  const AbstractNode_DiagnosticableTreeMixin$36$ = class AbstractNode_DiagnosticableTreeMixin extends node.AbstractNode {};
  (AbstractNode_DiagnosticableTreeMixin$36$.new = function() {
    AbstractNode_DiagnosticableTreeMixin$36$.__proto__.new.call(this);
  }).prototype = AbstractNode_DiagnosticableTreeMixin$36$.prototype;
  dart.applyMixin(AbstractNode_DiagnosticableTreeMixin$36$, diagnostics.DiagnosticableTreeMixin);
  object$.RenderObject = class RenderObject extends AbstractNode_DiagnosticableTreeMixin$36$ {
    get parentData() {
      return this[parentData];
    }
    set parentData(value) {
      this[parentData] = value;
    }
    get debugCreator() {
      return this[debugCreator$];
    }
    set debugCreator(value) {
      this[debugCreator$] = value;
    }
    reassemble() {
      this.markNeedsLayout();
      this.markNeedsCompositingBitsUpdate();
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
      this.visitChildren(dart.fn(child => {
        if (child == null) dart.nullFailed(L4, 1233, 33, "child");
        child.reassemble();
      }, RenderObjectTovoid()));
    }
    setupParentData(child) {
      object$.RenderObject.as(child);
      if (child == null) dart.nullFailed(L4, 1261, 47, "child");
      if (!dart.test(this[_debugCanPerformMutations])) dart.assertFailed(null, L4, 1262, 12, "_debugCanPerformMutations");
      if (!object$.ParentData.is(child.parentData)) child.parentData = new object$.ParentData.new();
    }
    adoptChild(child) {
      object$.RenderObject.as(child);
      if (child == null) dart.nullFailed(L4, 1272, 32, "child");
      if (!dart.test(this[_debugCanPerformMutations])) dart.assertFailed(null, L4, 1273, 12, "_debugCanPerformMutations");
      if (!(child != null)) dart.assertFailed(null, L4, 1274, 12, "child != null");
      this.setupParentData(child);
      this.markNeedsLayout();
      this.markNeedsCompositingBitsUpdate();
      this.markNeedsSemanticsUpdate();
      super.adoptChild(child);
    }
    dropChild(child) {
      object$.RenderObject.as(child);
      if (child == null) dart.nullFailed(L4, 1287, 31, "child");
      if (!dart.test(this[_debugCanPerformMutations])) dart.assertFailed(null, L4, 1288, 12, "_debugCanPerformMutations");
      if (!(child != null)) dart.assertFailed(null, L4, 1289, 12, "child != null");
      if (!(child.parentData != null)) dart.assertFailed(null, L4, 1290, 12, "child.parentData != null");
      child[_cleanRelayoutBoundary]();
      dart.nullCheck(child.parentData).detach();
      child.parentData = null;
      super.dropChild(child);
      this.markNeedsLayout();
      this.markNeedsCompositingBitsUpdate();
      this.markNeedsSemanticsUpdate();
    }
    visitChildren(visitor) {
      if (visitor == null) dart.nullFailed(L4, 1303, 42, "visitor");
    }
    [_debugReportException](method, exception, stack) {
      if (method == null) dart.nullFailed(L4, 1310, 37, "method");
      if (exception == null) dart.nullFailed(L4, 1310, 52, "exception");
      if (stack == null) dart.nullFailed(L4, 1310, 74, "stack");
      assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "rendering library", context: new assertions.ErrorDescription.new("during " + dart.str(method) + "()"), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
          if (this.debugCreator != null) yield new object$.DiagnosticsDebugCreator.new(dart.nullCheck(this.debugCreator));
          yield this.describeForError("The following RenderObject was being processed when the exception was fired");
          yield this.describeForError("RenderObject", {style: diagnostics.DiagnosticsTreeStyle.truncateChildren});
        }).bind(this)), VoidToIterableOfDiagnosticsNode())}));
    }
    get debugDoingThisResize() {
      return this[_debugDoingThisResize];
    }
    get debugDoingThisLayout() {
      return this[_debugDoingThisLayout];
    }
    static get debugActiveLayout() {
      return object$.RenderObject._debugActiveLayout;
    }
    get debugCanParentUseSize() {
      return dart.nullCheck(this[_debugCanParentUseSize]);
    }
    get [_debugCanPerformMutations]() {
      let result = null;
      let result$35isSet = false;
      function result$35get() {
        return result$35isSet ? result : dart.throw(new _internal.LateError.localNI("result"));
      }
      dart.fn(result$35get, VoidTobool());
      function result$35set(t3) {
        if (t3 == null) dart.nullFailed(L4, 1366, 15, "null");
        result$35isSet = true;
        return result = t3;
      }
      dart.fn(result$35set, boolTodynamic());
      if (!dart.test(dart.fn(() => {
        let node = this;
        while (true) {
          if (dart.test(node[_doingThisLayoutWithCallback])) {
            result$35set(true);
            break;
          }
          if (this.owner != null && dart.test(dart.nullCheck(this.owner)[_debugAllowMutationsToDirtySubtrees]) && dart.test(node[_needsLayout])) {
            result$35set(true);
            break;
          }
          if (dart.test(node[_debugMutationsLocked])) {
            result$35set(false);
            break;
          }
          if (!object$.RenderObject.is(node.parent)) {
            result$35set(true);
            break;
          }
          node = object$.RenderObject.as(dart.nullCheck(node.parent));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 1367, 12, "() {\n      RenderObject node = this;\n      while (true) {\n        if (node._doingThisLayoutWithCallback) {\n          result = true;\n          break;\n        }\n        if (owner != null && owner!._debugAllowMutationsToDirtySubtrees && node._needsLayout) {\n          result = true;\n          break;\n        }\n        if (node._debugMutationsLocked) {\n          result = false;\n          break;\n        }\n        if (node.parent is! RenderObject) {\n          result = true;\n          break;\n        }\n        node = node.parent! as RenderObject;\n      }\n      return true;\n    }()");
      return result$35get();
    }
    get owner() {
      return PipelineOwnerN().as(super.owner);
    }
    attach(owner) {
      object$.PipelineOwner.as(owner);
      if (owner == null) dart.nullFailed(L4, 1397, 29, "owner");
      super.attach(owner);
      if (dart.test(this[_needsLayout]) && this[_relayoutBoundary] != null) {
        this[_needsLayout] = false;
        this.markNeedsLayout();
      }
      if (dart.test(this[_needsCompositingBitsUpdate])) {
        this[_needsCompositingBitsUpdate] = false;
        this.markNeedsCompositingBitsUpdate();
      }
      if (dart.test(this[_needsPaint]) && this[_layer] != null) {
        this[_needsPaint] = false;
        this.markNeedsPaint();
      }
      if (dart.test(this[_needsSemanticsUpdate]) && dart.test(this[_semanticsConfiguration].isSemanticBoundary)) {
        this[_needsSemanticsUpdate] = false;
        this.markNeedsSemanticsUpdate();
      }
    }
    get debugNeedsLayout() {
      let result = null;
      let result$35isSet = false;
      function result$35get() {
        return result$35isSet ? result : dart.throw(new _internal.LateError.localNI("result"));
      }
      dart.fn(result$35get, VoidTobool());
      function result$35set(t8) {
        if (t8 == null) dart.nullFailed(L4, 1434, 15, "null");
        result$35isSet = true;
        return result = t8;
      }
      dart.fn(result$35set, boolTodynamic());
      if (!dart.test(dart.fn(() => {
        result$35set(this[_needsLayout]);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 1435, 12, "() {\n      result = _needsLayout;\n      return true;\n    }()");
      return result$35get();
    }
    get constraints() {
      if (this[_constraints] == null) dart.throw(new core.StateError.new("A RenderObject does not have any constraints before it has been laid out."));
      return dart.nullCheck(this[_constraints]);
    }
    [_debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout]() {
      if (this[_relayoutBoundary] == null) return true;
      let node = this;
      while (!node[$_equals](this[_relayoutBoundary])) {
        if (!dart.equals(node[_relayoutBoundary], this[_relayoutBoundary])) dart.assertFailed(null, L4, 1481, 14, "node._relayoutBoundary == _relayoutBoundary");
        if (!(node.parent != null)) dart.assertFailed(null, L4, 1482, 14, "node.parent != null");
        node = object$.RenderObject.as(dart.nullCheck(node.parent));
        if (!dart.test(node[_needsLayout]) && !dart.test(node[_debugDoingThisLayout])) return false;
      }
      if (!dart.equals(node[_relayoutBoundary], node)) dart.assertFailed(null, L4, 1487, 12, "node._relayoutBoundary == node");
      return true;
    }
    markNeedsLayout() {
      if (!dart.test(this[_debugCanPerformMutations])) dart.assertFailed(null, L4, 1530, 12, "_debugCanPerformMutations");
      if (dart.test(this[_needsLayout])) {
        if (!dart.test(this[_debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout]())) dart.assertFailed(null, L4, 1532, 14, "_debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout()");
        return;
      }
      if (!(this[_relayoutBoundary] != null)) dart.assertFailed(null, L4, 1535, 12, "_relayoutBoundary != null");
      if (!dart.equals(this[_relayoutBoundary], this)) {
        this.markParentNeedsLayout();
      } else {
        this[_needsLayout] = true;
        if (this.owner != null) {
          if (!dart.test(dart.fn(() => {
            if (dart.test(debug$0.debugPrintMarkNeedsLayoutStacks)) assertions.debugPrintStack({label: "markNeedsLayout() called for " + dart.str(this)});
            return true;
          }, VoidTobool())())) dart.assertFailed(null, L4, 1541, 16, "() {\n          if (debugPrintMarkNeedsLayoutStacks)\n            debugPrintStack(label: 'markNeedsLayout() called for $this');\n          return true;\n        }()");
          dart.nullCheck(this.owner)[_nodesNeedingLayout][$add](this);
          dart.nullCheck(this.owner).requestVisualUpdate();
        }
      }
    }
    markParentNeedsLayout() {
      this[_needsLayout] = true;
      if (!(this.parent != null)) dart.assertFailed(null, L4, 1564, 12, "this.parent != null");
      let parent = object$.RenderObject.as(dart.nullCheck(this.parent));
      if (!dart.test(this[_doingThisLayoutWithCallback])) {
        parent.markNeedsLayout();
      } else {
        if (!dart.test(parent[_debugDoingThisLayout])) dart.assertFailed(null, L4, 1569, 14, "parent._debugDoingThisLayout");
      }
      if (!parent[$_equals](this.parent)) dart.assertFailed(null, L4, 1571, 12, "parent == this.parent");
    }
    markNeedsLayoutForSizedByParentChange() {
      this.markNeedsLayout();
      this.markParentNeedsLayout();
    }
    [_cleanRelayoutBoundary]() {
      if (!dart.equals(this[_relayoutBoundary], this)) {
        this[_relayoutBoundary] = null;
        this[_needsLayout] = true;
        this.visitChildren(C13 || CT.C13);
      }
    }
    static _cleanChildRelayoutBoundary(child) {
      if (child == null) dart.nullFailed(L4, 1595, 56, "child");
      child[_cleanRelayoutBoundary]();
    }
    scheduleInitialLayout() {
      if (!dart.test(this.attached)) dart.assertFailed(null, L4, 1606, 12, "attached");
      if (!!object$.RenderObject.is(this.parent)) dart.assertFailed(null, L4, 1607, 12, "parent is! RenderObject");
      if (!!dart.test(dart.nullCheck(this.owner)[_debugDoingLayout])) dart.assertFailed(null, L4, 1608, 12, "!owner!._debugDoingLayout");
      if (!(this[_relayoutBoundary] == null)) dart.assertFailed(null, L4, 1609, 12, "_relayoutBoundary == null");
      this[_relayoutBoundary] = this;
      if (!dart.test(dart.fn(() => {
        this[_debugCanParentUseSize] = false;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 1611, 12, "() {\n      _debugCanParentUseSize = false;\n      return true;\n    }()");
      dart.nullCheck(this.owner)[_nodesNeedingLayout][$add](this);
    }
    [_layoutWithoutResize]() {
      if (!dart.equals(this[_relayoutBoundary], this)) dart.assertFailed(null, L4, 1619, 12, "_relayoutBoundary == this");
      let debugPreviousActiveLayout = null;
      if (!!dart.test(this[_debugMutationsLocked])) dart.assertFailed(null, L4, 1621, 12, "!_debugMutationsLocked");
      if (!!dart.test(this[_doingThisLayoutWithCallback])) dart.assertFailed(null, L4, 1622, 12, "!_doingThisLayoutWithCallback");
      if (!(this[_debugCanParentUseSize] != null)) dart.assertFailed(null, L4, 1623, 12, "_debugCanParentUseSize != null");
      if (!dart.test(dart.fn(() => {
        this[_debugMutationsLocked] = true;
        this[_debugDoingThisLayout] = true;
        debugPreviousActiveLayout = object$.RenderObject._debugActiveLayout;
        object$.RenderObject._debugActiveLayout = this;
        if (dart.test(debug$0.debugPrintLayouts)) print.debugPrint("Laying out (without resize) " + dart.str(this));
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 1624, 12, "() {\n      _debugMutationsLocked = true;\n      _debugDoingThisLayout = true;\n      debugPreviousActiveLayout = _debugActiveLayout;\n      _debugActiveLayout = this;\n      if (debugPrintLayouts)\n        debugPrint('Laying out (without resize) $this');\n      return true;\n    }()");
      try {
        this.performLayout();
        this.markNeedsSemanticsUpdate();
      } catch (e$) {
        let e = dart.getThrown(e$);
        let stack = dart.stackTrace(e$);
        if (core.Object.is(e)) {
          this[_debugReportException]("performLayout", e, stack);
        } else
          throw e$;
      }
      if (!dart.test(dart.fn(() => {
        object$.RenderObject._debugActiveLayout = debugPreviousActiveLayout;
        this[_debugDoingThisLayout] = false;
        this[_debugMutationsLocked] = false;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 1639, 12, "() {\n      _debugActiveLayout = debugPreviousActiveLayout;\n      _debugDoingThisLayout = false;\n      _debugMutationsLocked = false;\n      return true;\n    }()");
      this[_needsLayout] = false;
      this.markNeedsPaint();
    }
    layout(constraints, opts) {
      if (constraints == null) dart.nullFailed(L4, 1672, 27, "constraints");
      let parentUsesSize = opts && 'parentUsesSize' in opts ? opts.parentUsesSize : false;
      if (parentUsesSize == null) dart.nullFailed(L4, 1672, 47, "parentUsesSize");
      if (!false && dart.test(debug$0.debugProfileLayoutsEnabled)) developer.Timeline.startSync(dart.str(this[$runtimeType]), {arguments: debug.timelineArgumentsIndicatingLandmarkEvent});
      if (!(constraints != null)) dart.assertFailed(null, L4, 1676, 12, "constraints != null");
      if (!dart.test(constraints.debugAssertIsValid({isAppliedConstraint: true, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
          let stack = dart.toString(core.StackTrace.current)[$split]("\n");
          let targetFrame = null;
          let layoutFramePattern = core.RegExp.new("^#[0-9]+ +RenderObject.layout \\(");
          for (let i = 0; i < dart.notNull(stack[$length]); i = i + 1) {
            if (layoutFramePattern[$matchAsPrefix](stack[$_get](i)) != null) {
              targetFrame = i + 1;
              break;
            }
          }
          if (targetFrame != null && dart.notNull(targetFrame) < dart.notNull(stack[$length])) {
            let targetFramePattern = core.RegExp.new("^#[0-9]+ +(.+)$");
            let targetFrameMatch = targetFramePattern[$matchAsPrefix](stack[$_get](targetFrame));
            let problemFunction = targetFrameMatch != null && dart.notNull(targetFrameMatch.groupCount) > 0 ? targetFrameMatch.group(1) : stack[$_get](targetFrame)[$trim]();
            yield new assertions.ErrorDescription.new("These invalid constraints were provided to " + dart.str(this[$runtimeType]) + "'s layout() " + "function by the following function, which probably computed the " + "invalid constraints in question:\n" + "  " + dart.str(problemFunction));
          }
        }).bind(this)), VoidToIterableOfDiagnosticsNode())}))) dart.assertFailed(null, L4, 1677, 12, "constraints.debugAssertIsValid(\n      isAppliedConstraint: true,\n      informationCollector: () sync* {\n        final List<String> stack = StackTrace.current.toString().split('\\n');\n        int? targetFrame;\n        final Pattern layoutFramePattern = RegExp(r'^#[0-9]+ +RenderObject.layout \\(');\n        for (int i = 0; i < stack.length; i += 1) {\n          if (layoutFramePattern.matchAsPrefix(stack[i]) != null) {\n            targetFrame = i + 1;\n            break;\n          }\n        }\n        if (targetFrame != null && targetFrame < stack.length) {\n          final Pattern targetFramePattern = RegExp(r'^#[0-9]+ +(.+)$');\n          final Match? targetFrameMatch = targetFramePattern.matchAsPrefix(stack[targetFrame]);\n          final String? problemFunction = (targetFrameMatch != null && targetFrameMatch.groupCount > 0) ? targetFrameMatch.group(1) : stack[targetFrame].trim();\n          // TODO(jacobr): this case is similar to displaying a single stack frame.\n          yield ErrorDescription(\n            \"These invalid constraints were provided to $runtimeType's layout() \"\n            'function by the following function, which probably computed the '\n            'invalid constraints in question:\\n'\n            '  $problemFunction'\n          );\n        }\n      },\n    )");
      if (!!dart.test(this[_debugDoingThisResize])) dart.assertFailed(null, L4, 1703, 12, "!_debugDoingThisResize");
      if (!!dart.test(this[_debugDoingThisLayout])) dart.assertFailed(null, L4, 1704, 12, "!_debugDoingThisLayout");
      let relayoutBoundary = null;
      if (!dart.test(parentUsesSize) || dart.test(this.sizedByParent) || dart.test(constraints.isTight) || !object$.RenderObject.is(this.parent)) {
        relayoutBoundary = this;
      } else {
        relayoutBoundary = object$.RenderObject.as(dart.nullCheck(this.parent))[_relayoutBoundary];
      }
      if (!dart.test(dart.fn(() => {
        this[_debugCanParentUseSize] = parentUsesSize;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 1711, 12, "() {\n      _debugCanParentUseSize = parentUsesSize;\n      return true;\n    }()");
      if (!dart.test(this[_needsLayout]) && dart.equals(constraints, this[_constraints]) && dart.equals(relayoutBoundary, this[_relayoutBoundary])) {
        if (!dart.test(dart.fn(() => {
          this[_debugDoingThisResize] = this.sizedByParent;
          this[_debugDoingThisLayout] = !dart.test(this.sizedByParent);
          let debugPreviousActiveLayout = object$.RenderObject._debugActiveLayout;
          object$.RenderObject._debugActiveLayout = this;
          this.debugResetSize();
          object$.RenderObject._debugActiveLayout = debugPreviousActiveLayout;
          this[_debugDoingThisLayout] = false;
          this[_debugDoingThisResize] = false;
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L4, 1716, 14, "() {\n        // in case parentUsesSize changed since the last invocation, set size\n        // to itself, so it has the right internal debug values.\n        _debugDoingThisResize = sizedByParent;\n        _debugDoingThisLayout = !sizedByParent;\n        final RenderObject? debugPreviousActiveLayout = _debugActiveLayout;\n        _debugActiveLayout = this;\n        debugResetSize();\n        _debugActiveLayout = debugPreviousActiveLayout;\n        _debugDoingThisLayout = false;\n        _debugDoingThisResize = false;\n        return true;\n      }()");
        if (!false && dart.test(debug$0.debugProfileLayoutsEnabled)) developer.Timeline.finishSync();
        return;
      }
      this[_constraints] = constraints;
      if (this[_relayoutBoundary] != null && !dart.equals(relayoutBoundary, this[_relayoutBoundary])) {
        this.visitChildren(C13 || CT.C13);
      }
      this[_relayoutBoundary] = relayoutBoundary;
      if (!!dart.test(this[_debugMutationsLocked])) dart.assertFailed(null, L4, 1742, 12, "!_debugMutationsLocked");
      if (!!dart.test(this[_doingThisLayoutWithCallback])) dart.assertFailed(null, L4, 1743, 12, "!_doingThisLayoutWithCallback");
      if (!dart.test(dart.fn(() => {
        this[_debugMutationsLocked] = true;
        if (dart.test(debug$0.debugPrintLayouts)) print.debugPrint("Laying out (" + (dart.test(this.sizedByParent) ? "with separate resize" : "with resize allowed") + ") " + dart.str(this));
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 1744, 12, "() {\n      _debugMutationsLocked = true;\n      if (debugPrintLayouts)\n        debugPrint('Laying out (${sizedByParent ? \"with separate resize\" : \"with resize allowed\"}) $this');\n      return true;\n    }()");
      if (dart.test(this.sizedByParent)) {
        if (!dart.test(dart.fn(() => {
          this[_debugDoingThisResize] = true;
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L4, 1751, 14, "() {\n        _debugDoingThisResize = true;\n        return true;\n      }()");
        try {
          this.performResize();
          if (!dart.test(dart.fn(() => {
            this.debugAssertDoesMeetConstraints();
            return true;
          }, VoidTobool())())) dart.assertFailed(null, L4, 1757, 16, "() {\n          debugAssertDoesMeetConstraints();\n          return true;\n        }()");
        } catch (e$) {
          let e = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          if (core.Object.is(e)) {
            this[_debugReportException]("performResize", e, stack);
          } else
            throw e$;
        }
        if (!dart.test(dart.fn(() => {
          this[_debugDoingThisResize] = false;
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L4, 1764, 14, "() {\n        _debugDoingThisResize = false;\n        return true;\n      }()");
      }
      let debugPreviousActiveLayout = null;
      if (!dart.test(dart.fn(() => {
        this[_debugDoingThisLayout] = true;
        debugPreviousActiveLayout = object$.RenderObject._debugActiveLayout;
        object$.RenderObject._debugActiveLayout = this;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 1770, 12, "() {\n      _debugDoingThisLayout = true;\n      debugPreviousActiveLayout = _debugActiveLayout;\n      _debugActiveLayout = this;\n      return true;\n    }()");
      try {
        this.performLayout();
        this.markNeedsSemanticsUpdate();
        if (!dart.test(dart.fn(() => {
          this.debugAssertDoesMeetConstraints();
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L4, 1779, 14, "() {\n        debugAssertDoesMeetConstraints();\n        return true;\n      }()");
      } catch (e$0) {
        let e = dart.getThrown(e$0);
        let stack = dart.stackTrace(e$0);
        if (core.Object.is(e)) {
          this[_debugReportException]("performLayout", e, stack);
        } else
          throw e$0;
      }
      if (!dart.test(dart.fn(() => {
        object$.RenderObject._debugActiveLayout = debugPreviousActiveLayout;
        this[_debugDoingThisLayout] = false;
        this[_debugMutationsLocked] = false;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 1786, 12, "() {\n      _debugActiveLayout = debugPreviousActiveLayout;\n      _debugDoingThisLayout = false;\n      _debugMutationsLocked = false;\n      return true;\n    }()");
      this[_needsLayout] = false;
      this.markNeedsPaint();
      if (!false && dart.test(debug$0.debugProfileLayoutsEnabled)) developer.Timeline.finishSync();
    }
    debugResetSize() {
    }
    get sizedByParent() {
      return false;
    }
    invokeLayoutCallback(T, callback) {
      if (callback == null) dart.nullFailed(L4, 1881, 70, "callback");
      if (!dart.test(this[_debugMutationsLocked])) dart.assertFailed(null, L4, 1882, 12, "_debugMutationsLocked");
      if (!dart.test(this[_debugDoingThisLayout])) dart.assertFailed(null, L4, 1883, 12, "_debugDoingThisLayout");
      if (!!dart.test(this[_doingThisLayoutWithCallback])) dart.assertFailed(null, L4, 1884, 12, "!_doingThisLayoutWithCallback");
      this[_doingThisLayoutWithCallback] = true;
      try {
        dart.nullCheck(this.owner)[_enableMutationsToDirtySubtrees](dart.fn(() => {
          callback(T.as(this.constraints));
        }, VoidTovoid()));
      } finally {
        this[_doingThisLayoutWithCallback] = false;
      }
    }
    rotate(opts) {
      let oldAngle = opts && 'oldAngle' in opts ? opts.oldAngle : null;
      let newAngle = opts && 'newAngle' in opts ? opts.newAngle : null;
      let time = opts && 'time' in opts ? opts.time : null;
    }
    get debugDoingThisPaint() {
      return this[_debugDoingThisPaint];
    }
    static get debugActivePaint() {
      return object$.RenderObject._debugActivePaint;
    }
    get isRepaintBoundary() {
      return false;
    }
    debugRegisterRepaintBoundaryPaint(opts) {
      let includedParent = opts && 'includedParent' in opts ? opts.includedParent : true;
      if (includedParent == null) dart.nullFailed(L4, 1950, 49, "includedParent");
      let includedChild = opts && 'includedChild' in opts ? opts.includedChild : false;
      if (includedChild == null) dart.nullFailed(L4, 1950, 77, "includedChild");
    }
    get alwaysNeedsCompositing() {
      return false;
    }
    get layer() {
      if (!(!dart.test(this.isRepaintBoundary) || this[_layer] == null || layer$.OffsetLayer.is(this[_layer]))) dart.assertFailed(null, L4, 1982, 12, "!isRepaintBoundary || (_layer == null || _layer is OffsetLayer)");
      return this[_layer];
    }
    set layer(newLayer) {
      if (!!dart.test(this.isRepaintBoundary)) dart.assertFailed("Attempted to set a layer to a repaint boundary render object.\n" + "The framework creates and assigns an OffsetLayer to a repaint " + "boundary automatically.", L4, 1989, 7, "!isRepaintBoundary");
      this[_layer] = newLayer;
    }
    get debugLayer() {
      let result = null;
      if (!dart.test(dart.fn(() => {
        result = this[_layer];
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 2007, 12, "() {\n      result = _layer;\n      return true;\n    }()");
      return result;
    }
    markNeedsCompositingBitsUpdate() {
      if (dart.test(this[_needsCompositingBitsUpdate])) return;
      this[_needsCompositingBitsUpdate] = true;
      if (object$.RenderObject.is(this.parent)) {
        let parent = object$.RenderObject.as(dart.nullCheck(this.parent));
        if (dart.test(parent[_needsCompositingBitsUpdate])) return;
        if (!dart.test(this.isRepaintBoundary) && !dart.test(parent.isRepaintBoundary)) {
          parent.markNeedsCompositingBitsUpdate();
          return;
        }
      }
      if (!dart.test(dart.fn(() => {
        let parent = this.parent;
        if (object$.RenderObject.is(parent)) return parent[_needsCompositing];
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 2044, 12, "() {\n      final AbstractNode? parent = this.parent;\n      if (parent is RenderObject)\n        return parent._needsCompositing;\n      return true;\n    }()");
      if (this.owner != null) dart.nullCheck(this.owner)[_nodesNeedingCompositingBitsUpdate][$add](this);
    }
    get [_needsCompositing]() {
      let t13;
      return dart.test(this[__RenderObject__needsCompositing_isSet]) ? (t13 = this[__RenderObject__needsCompositing], t13) : dart.throw(new _internal.LateError.fieldNI("_needsCompositing"));
    }
    set [_needsCompositing](t13) {
      if (t13 == null) dart.nullFailed(L4, 2055, 13, "null");
      this[__RenderObject__needsCompositing_isSet] = true;
      this[__RenderObject__needsCompositing] = t13;
    }
    get needsCompositing() {
      if (!!dart.test(this[_needsCompositingBitsUpdate])) dart.assertFailed(null, L4, 2064, 12, "!_needsCompositingBitsUpdate");
      return this[_needsCompositing];
    }
    [_updateCompositingBits]() {
      if (!dart.test(this[_needsCompositingBitsUpdate])) return;
      let oldNeedsCompositing = this[_needsCompositing];
      this[_needsCompositing] = false;
      this.visitChildren(dart.fn(child => {
        if (child == null) dart.nullFailed(L4, 2073, 33, "child");
        child[_updateCompositingBits]();
        if (dart.test(child.needsCompositing)) this[_needsCompositing] = true;
      }, RenderObjectTovoid()));
      if (dart.test(this.isRepaintBoundary) || dart.test(this.alwaysNeedsCompositing)) this[_needsCompositing] = true;
      if (!dart.equals(oldNeedsCompositing, this[_needsCompositing])) this.markNeedsPaint();
      this[_needsCompositingBitsUpdate] = false;
    }
    get debugNeedsPaint() {
      let result = null;
      let result$35isSet = false;
      function result$35get() {
        return result$35isSet ? result : dart.throw(new _internal.LateError.localNI("result"));
      }
      dart.fn(result$35get, VoidTobool());
      function result$35set(t17) {
        if (t17 == null) dart.nullFailed(L4, 2100, 15, "null");
        result$35isSet = true;
        return result = t17;
      }
      dart.fn(result$35set, boolTodynamic());
      if (!dart.test(dart.fn(() => {
        result$35set(this[_needsPaint]);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 2101, 12, "() {\n      result = _needsPaint;\n      return true;\n    }()");
      return result$35get();
    }
    markNeedsPaint() {
      if (!(this.owner == null || !dart.test(dart.nullCheck(this.owner).debugDoingPaint))) dart.assertFailed(null, L4, 2130, 12, "owner == null || !owner!.debugDoingPaint");
      if (dart.test(this[_needsPaint])) return;
      this[_needsPaint] = true;
      if (dart.test(this.isRepaintBoundary)) {
        if (!dart.test(dart.fn(() => {
          if (dart.test(debug$0.debugPrintMarkNeedsPaintStacks)) assertions.debugPrintStack({label: "markNeedsPaint() called for " + dart.str(this)});
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L4, 2135, 14, "() {\n        if (debugPrintMarkNeedsPaintStacks)\n          debugPrintStack(label: 'markNeedsPaint() called for $this');\n        return true;\n      }()");
        if (!layer$.OffsetLayer.is(this[_layer])) dart.assertFailed(null, L4, 2142, 14, "_layer is OffsetLayer");
        if (this.owner != null) {
          dart.nullCheck(this.owner)[_nodesNeedingPaint][$add](this);
          dart.nullCheck(this.owner).requestVisualUpdate();
        }
      } else if (object$.RenderObject.is(this.parent)) {
        let parent = object$.RenderObject.as(dart.nullCheck(this.parent));
        parent.markNeedsPaint();
        if (!parent[$_equals](this.parent)) dart.assertFailed(null, L4, 2150, 14, "parent == this.parent");
      } else {
        if (!dart.test(dart.fn(() => {
          if (dart.test(debug$0.debugPrintMarkNeedsPaintStacks)) assertions.debugPrintStack({label: "markNeedsPaint() called for " + dart.str(this) + " (root of render tree)"});
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L4, 2152, 14, "() {\n        if (debugPrintMarkNeedsPaintStacks)\n          debugPrintStack(label: 'markNeedsPaint() called for $this (root of render tree)');\n        return true;\n      }()");
        if (this.owner != null) dart.nullCheck(this.owner).requestVisualUpdate();
      }
    }
    [_skippedPaintingOnLayer]() {
      if (!dart.test(this.attached)) dart.assertFailed(null, L4, 2172, 12, "attached");
      if (!dart.test(this.isRepaintBoundary)) dart.assertFailed(null, L4, 2173, 12, "isRepaintBoundary");
      if (!dart.test(this[_needsPaint])) dart.assertFailed(null, L4, 2174, 12, "_needsPaint");
      if (!(this[_layer] != null)) dart.assertFailed(null, L4, 2175, 12, "_layer != null");
      if (!!dart.test(dart.nullCheck(this[_layer]).attached)) dart.assertFailed(null, L4, 2176, 12, "!_layer!.attached");
      let node = this.parent;
      while (object$.RenderObject.is(node)) {
        if (dart.test(node.isRepaintBoundary)) {
          if (node[_layer] == null) break;
          if (dart.test(dart.nullCheck(node[_layer]).attached)) break;
          node[_needsPaint] = true;
        }
        node = node.parent;
      }
    }
    scheduleInitialPaint(rootLayer) {
      if (rootLayer == null) dart.nullFailed(L4, 2196, 44, "rootLayer");
      if (!dart.test(rootLayer.attached)) dart.assertFailed(null, L4, 2197, 12, "rootLayer.attached");
      if (!dart.test(this.attached)) dart.assertFailed(null, L4, 2198, 12, "attached");
      if (!!object$.RenderObject.is(this.parent)) dart.assertFailed(null, L4, 2199, 12, "parent is! RenderObject");
      if (!!dart.test(dart.nullCheck(this.owner)[_debugDoingPaint])) dart.assertFailed(null, L4, 2200, 12, "!owner!._debugDoingPaint");
      if (!dart.test(this.isRepaintBoundary)) dart.assertFailed(null, L4, 2201, 12, "isRepaintBoundary");
      if (!(this[_layer] == null)) dart.assertFailed(null, L4, 2202, 12, "_layer == null");
      this[_layer] = rootLayer;
      if (!dart.test(this[_needsPaint])) dart.assertFailed(null, L4, 2204, 12, "_needsPaint");
      dart.nullCheck(this.owner)[_nodesNeedingPaint][$add](this);
    }
    replaceRootLayer(rootLayer) {
      if (rootLayer == null) dart.nullFailed(L4, 2213, 37, "rootLayer");
      if (!dart.test(rootLayer.attached)) dart.assertFailed(null, L4, 2214, 12, "rootLayer.attached");
      if (!dart.test(this.attached)) dart.assertFailed(null, L4, 2215, 12, "attached");
      if (!!object$.RenderObject.is(this.parent)) dart.assertFailed(null, L4, 2216, 12, "parent is! RenderObject");
      if (!!dart.test(dart.nullCheck(this.owner)[_debugDoingPaint])) dart.assertFailed(null, L4, 2217, 12, "!owner!._debugDoingPaint");
      if (!dart.test(this.isRepaintBoundary)) dart.assertFailed(null, L4, 2218, 12, "isRepaintBoundary");
      if (!(this[_layer] != null)) dart.assertFailed(null, L4, 2219, 12, "_layer != null");
      dart.nullCheck(this[_layer]).detach();
      this[_layer] = rootLayer;
      this.markNeedsPaint();
    }
    [_paintWithContext](context, offset) {
      if (context == null) dart.nullFailed(L4, 2225, 42, "context");
      if (offset == null) dart.nullFailed(L4, 2225, 58, "offset");
      if (!dart.test(dart.fn(() => {
        if (dart.test(this[_debugDoingThisPaint])) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Tried to paint a RenderObject reentrantly."), this.describeForError("The following RenderObject was already being painted when it was " + "painted again"), new assertions.ErrorDescription.new("Since this typically indicates an infinite recursion, it is " + "disallowed.")])));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 2226, 12, "() {\n      if (_debugDoingThisPaint) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('Tried to paint a RenderObject reentrantly.'),\n          describeForError(\n            'The following RenderObject was already being painted when it was '\n            'painted again'\n          ),\n          ErrorDescription(\n            'Since this typically indicates an infinite recursion, it is '\n            'disallowed.'\n          ),\n        ]);\n      }\n      return true;\n    }()");
      if (dart.test(this[_needsLayout])) return;
      if (!dart.test(dart.fn(() => {
        if (dart.test(this[_needsCompositingBitsUpdate])) {
          if (object$.RenderObject.is(this.parent)) {
            let parent = object$.RenderObject.as(dart.nullCheck(this.parent));
            let visitedByParent = false;
            parent.visitChildren(dart.fn(child => {
              if (child == null) dart.nullFailed(L4, 2256, 46, "child");
              if (dart.equals(child, this)) {
                visitedByParent = true;
              }
            }, RenderObjectTovoid()));
            if (!visitedByParent) {
              dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A RenderObject was not visited by the parent's visitChildren " + "during paint."), parent.describeForError("The parent was"), this.describeForError("The child that was not visited was"), new assertions.ErrorDescription.new("A RenderObject with children must implement visitChildren and " + "call the visitor exactly once for each child; it also should not " + "paint children that were removed with dropChild."), new assertions.ErrorHint.new("This usually indicates an error in the Flutter framework itself.")])));
            }
          }
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Tried to paint a RenderObject before its compositing bits were " + "updated."), this.describeForError("The following RenderObject was marked as having dirty compositing " + "bits at the time that it was painted"), new assertions.ErrorDescription.new("A RenderObject that still has dirty compositing bits cannot be " + "painted because this indicates that the tree has not yet been " + "properly configured for creating the layer tree."), new assertions.ErrorHint.new("This usually indicates an error in the Flutter framework itself.")])));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 2251, 12, "() {\n      if (_needsCompositingBitsUpdate) {\n        if (parent is RenderObject) {\n          final RenderObject parent = this.parent! as RenderObject;\n          bool visitedByParent = false;\n          parent.visitChildren((RenderObject child) {\n            if (child == this) {\n              visitedByParent = true;\n            }\n          });\n          if (!visitedByParent) {\n            throw FlutterError.fromParts(<DiagnosticsNode>[\n              ErrorSummary(\n                \"A RenderObject was not visited by the parent's visitChildren \"\n                'during paint.',\n              ),\n              parent.describeForError(\n                'The parent was',\n              ),\n              describeForError(\n                'The child that was not visited was'\n              ),\n              ErrorDescription(\n                'A RenderObject with children must implement visitChildren and '\n                'call the visitor exactly once for each child; it also should not '\n                'paint children that were removed with dropChild.'\n              ),\n              ErrorHint(\n                'This usually indicates an error in the Flutter framework itself.'\n              ),\n            ]);\n          }\n        }\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary(\n            'Tried to paint a RenderObject before its compositing bits were '\n            'updated.'\n          ),\n          describeForError(\n            'The following RenderObject was marked as having dirty compositing '\n            'bits at the time that it was painted',\n          ),\n          ErrorDescription(\n            'A RenderObject that still has dirty compositing bits cannot be '\n            'painted because this indicates that the tree has not yet been '\n            'properly configured for creating the layer tree.'\n          ),\n          ErrorHint(\n            'This usually indicates an error in the Flutter framework itself.'\n          ),\n        ]);\n      }\n      return true;\n    }()");
      let debugLastActivePaint = null;
      if (!dart.test(dart.fn(() => {
        this[_debugDoingThisPaint] = true;
        debugLastActivePaint = object$.RenderObject._debugActivePaint;
        object$.RenderObject._debugActivePaint = this;
        if (!(!dart.test(this.isRepaintBoundary) || this[_layer] != null)) dart.assertFailed(null, L4, 2310, 14, "!isRepaintBoundary || _layer != null");
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 2306, 12, "() {\n      _debugDoingThisPaint = true;\n      debugLastActivePaint = _debugActivePaint;\n      _debugActivePaint = this;\n      assert(!isRepaintBoundary || _layer != null);\n      return true;\n    }()");
      this[_needsPaint] = false;
      try {
        this.paint(context, offset);
        if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, L4, 2316, 14, "!_needsLayout");
        if (!!dart.test(this[_needsPaint])) dart.assertFailed(null, L4, 2317, 14, "!_needsPaint");
      } catch (e$) {
        let e = dart.getThrown(e$);
        let stack = dart.stackTrace(e$);
        if (core.Object.is(e)) {
          this[_debugReportException]("paint", e, stack);
        } else
          throw e$;
      }
      if (!dart.test(dart.fn(() => {
        this.debugPaint(context, offset);
        object$.RenderObject._debugActivePaint = debugLastActivePaint;
        this[_debugDoingThisPaint] = false;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 2321, 12, "() {\n      debugPaint(context, offset);\n      _debugActivePaint = debugLastActivePaint;\n      _debugDoingThisPaint = false;\n      return true;\n    }()");
    }
    debugPaint(context, offset) {
      if (context == null) dart.nullFailed(L4, 2337, 35, "context");
      if (offset == null) dart.nullFailed(L4, 2337, 51, "offset");
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L4, 2356, 30, "context");
      if (offset == null) dart.nullFailed(L4, 2356, 46, "offset");
    }
    applyPaintTransform(child, transform) {
      object$.RenderObject.as(child);
      if (child == null) dart.nullFailed(L4, 2363, 51, "child");
      if (transform == null) dart.nullFailed(L4, 2363, 66, "transform");
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, L4, 2364, 12, "child.parent == this");
    }
    getTransformTo(ancestor) {
      let ancestorSpecified = ancestor != null;
      if (!dart.test(this.attached)) dart.assertFailed(null, L4, 2381, 12, "attached");
      if (ancestor == null) {
        let rootNode = dart.nullCheck(this.owner).rootNode;
        if (object$.RenderObject.is(rootNode)) ancestor = rootNode;
      }
      let renderers = JSArrayOfRenderObject().of([]);
      for (let renderer = this; !renderer[$_equals](ancestor); renderer = object$.RenderObject.as(dart.nullCheck(renderer.parent))) {
        if (!(renderer !== null)) dart.assertFailed(null, L4, 2389, 14, "renderer != null");
        renderers[$add](renderer);
      }
      if (ancestorSpecified) renderers[$add](dart.nullCheck(ancestor));
      let transform = vector_math_64.Matrix4.identity();
      for (let index = dart.notNull(renderers[$length]) - 1; index > 0; index = index - 1) {
        renderers[$_get](index).applyPaintTransform(renderers[$_get](index - 1), transform);
      }
      return transform;
    }
    describeApproximatePaintClip(child) {
      object$.RenderObject.as(child);
      if (child == null) dart.nullFailed(L4, 2410, 61, "child");
      return null;
    }
    describeSemanticsClip(child) {
      RenderObjectN().as(child);
      return null;
    }
    scheduleInitialSemantics() {
      if (!dart.test(this.attached)) dart.assertFailed(null, L4, 2449, 12, "attached");
      if (!!object$.RenderObject.is(this.parent)) dart.assertFailed(null, L4, 2450, 12, "parent is! RenderObject");
      if (!!dart.test(dart.nullCheck(this.owner)[_debugDoingSemantics])) dart.assertFailed(null, L4, 2451, 12, "!owner!._debugDoingSemantics");
      if (!(this[_semantics] == null)) dart.assertFailed(null, L4, 2452, 12, "_semantics == null");
      if (!dart.test(this[_needsSemanticsUpdate])) dart.assertFailed(null, L4, 2453, 12, "_needsSemanticsUpdate");
      if (!(dart.nullCheck(this.owner)[_semanticsOwner] != null)) dart.assertFailed(null, L4, 2454, 12, "owner!._semanticsOwner != null");
      dart.nullCheck(this.owner)[_nodesNeedingSemantics].add(this);
      dart.nullCheck(this.owner).requestVisualUpdate();
    }
    describeSemanticsConfiguration(config) {
      if (config == null) dart.nullFailed(L4, 2494, 62, "config");
    }
    sendSemanticsEvent(semanticsEvent) {
      if (semanticsEvent == null) dart.nullFailed(L4, 2506, 42, "semanticsEvent");
      if (dart.nullCheck(this.owner).semanticsOwner == null) return;
      if (this[_semantics] != null && !dart.test(dart.nullCheck(this[_semantics]).isMergedIntoParent)) {
        dart.nullCheck(this[_semantics]).sendEvent(semanticsEvent);
      } else if (this.parent != null) {
        let renderParent = object$.RenderObject.as(dart.nullCheck(this.parent));
        renderParent.sendSemanticsEvent(semanticsEvent);
      }
    }
    get [_semanticsConfiguration]() {
      if (this[_cachedSemanticsConfiguration] == null) {
        this[_cachedSemanticsConfiguration] = new semantics.SemanticsConfiguration.new();
        this.describeSemanticsConfiguration(dart.nullCheck(this[_cachedSemanticsConfiguration]));
      }
      return dart.nullCheck(this[_cachedSemanticsConfiguration]);
    }
    get debugSemantics() {
      if (!false) {
        return this[_semantics];
      }
      return null;
    }
    clearSemantics() {
      this[_needsSemanticsUpdate] = true;
      this[_semantics] = null;
      this.visitChildren(dart.fn(child => {
        if (child == null) dart.nullFailed(L4, 2560, 33, "child");
        child.clearSemantics();
      }, RenderObjectTovoid()));
    }
    markNeedsSemanticsUpdate() {
      let t20;
      if (!(!dart.test(this.attached) || !dart.test(dart.nullCheck(this.owner)[_debugDoingSemantics]))) dart.assertFailed(null, L4, 2571, 12, "!attached || !owner!._debugDoingSemantics");
      if (!dart.test(this.attached) || dart.nullCheck(this.owner)[_semanticsOwner] == null) {
        this[_cachedSemanticsConfiguration] = null;
        return;
      }
      let wasSemanticsBoundary = this[_semantics] != null && dart.equals((t20 = this[_cachedSemanticsConfiguration], t20 == null ? null : t20.isSemanticBoundary), true);
      this[_cachedSemanticsConfiguration] = null;
      let isEffectiveSemanticsBoundary = dart.test(this[_semanticsConfiguration].isSemanticBoundary) && wasSemanticsBoundary;
      let node = this;
      while (!dart.test(isEffectiveSemanticsBoundary) && object$.RenderObject.is(node.parent)) {
        if (!node[$_equals](this) && dart.test(node[_needsSemanticsUpdate])) break;
        node[_needsSemanticsUpdate] = true;
        node = object$.RenderObject.as(dart.nullCheck(node.parent));
        isEffectiveSemanticsBoundary = node[_semanticsConfiguration].isSemanticBoundary;
        if (dart.test(isEffectiveSemanticsBoundary) && node[_semantics] == null) {
          return;
        }
      }
      if (!node[$_equals](this) && this[_semantics] != null && dart.test(this[_needsSemanticsUpdate])) {
        dart.nullCheck(this.owner)[_nodesNeedingSemantics].remove(this);
      }
      if (!dart.test(node[_needsSemanticsUpdate])) {
        node[_needsSemanticsUpdate] = true;
        if (this.owner != null) {
          if (!(dart.test(node[_semanticsConfiguration].isSemanticBoundary) || !object$.RenderObject.is(node.parent))) dart.assertFailed(null, L4, 2614, 16, "node._semanticsConfiguration.isSemanticBoundary || node.parent is! RenderObject");
          dart.nullCheck(this.owner)[_nodesNeedingSemantics].add(node);
          dart.nullCheck(this.owner).requestVisualUpdate();
        }
      }
    }
    [_updateSemantics]() {
      let t21, t20, t20$, t20$0, t20$1, t20$2, t20$3;
      if (!(dart.test(this[_semanticsConfiguration].isSemanticBoundary) || !object$.RenderObject.is(this.parent))) dart.assertFailed(null, L4, 2623, 12, "_semanticsConfiguration.isSemanticBoundary || parent is! RenderObject");
      if (dart.test(this[_needsLayout])) {
        return;
      }
      let fragment = this[_getSemanticsForParent]({mergeIntoParent: (t20$ = (t20 = this[_semantics], t20 == null ? null : (t21 = t20.parent, t21 == null ? null : t21.isPartOfNodeMerging)), t20$ == null ? false : t20$)});
      if (!object$._InterestingSemanticsFragment.is(fragment)) dart.assertFailed(null, L4, 2632, 12, "fragment is _InterestingSemanticsFragment");
      let interestingFragment = object$._InterestingSemanticsFragment.as(fragment);
      let result = JSArrayOfSemanticsNode().of([]);
      interestingFragment.compileChildren({parentSemanticsClipRect: (t20$0 = this[_semantics], t20$0 == null ? null : t20$0.parentSemanticsClipRect), parentPaintClipRect: (t20$1 = this[_semantics], t20$1 == null ? null : t20$1.parentPaintClipRect), elevationAdjustment: (t20$3 = (t20$2 = this[_semantics], t20$2 == null ? null : t20$2.elevationAdjustment), t20$3 == null ? 0.0 : t20$3), result: result});
      let node = result[$single];
      if (!(interestingFragment.config == null && dart.equals(node, this[_semantics]))) dart.assertFailed(null, L4, 2643, 12, "interestingFragment.config == null && node == _semantics");
    }
    [_getSemanticsForParent](opts) {
      let mergeIntoParent = opts && 'mergeIntoParent' in opts ? opts.mergeIntoParent : null;
      if (mergeIntoParent == null) dart.nullFailed(L4, 2648, 19, "mergeIntoParent");
      if (!(mergeIntoParent != null)) dart.assertFailed(null, L4, 2650, 12, "mergeIntoParent != null");
      if (!!dart.test(this[_needsLayout])) dart.assertFailed("Updated layout information required for " + dart.str(this) + " to calculate semantics.", L4, 2651, 12, "!_needsLayout");
      let config = this[_semanticsConfiguration];
      let dropSemanticsOfPreviousSiblings = config.isBlockingSemanticsOfPreviouslyPaintedNodes;
      let producesForkingFragment = !dart.test(config.hasBeenAnnotated) && !dart.test(config.isSemanticBoundary);
      let fragments = JSArrayOf_InterestingSemanticsFragment().of([]);
      let toBeMarkedExplicit = LinkedHashSetOf_InterestingSemanticsFragment().new();
      let childrenMergeIntoParent = dart.test(mergeIntoParent) || dart.test(config.isMergingSemanticsOfDescendants);
      let abortWalk = false;
      this.visitChildrenForSemantics(dart.fn(renderChild => {
        if (renderChild == null) dart.nullFailed(L4, 2668, 45, "renderChild");
        if (abortWalk || dart.test(this[_needsLayout])) {
          abortWalk = true;
          return;
        }
        let parentFragment = renderChild[_getSemanticsForParent]({mergeIntoParent: childrenMergeIntoParent});
        if (dart.test(parentFragment.abortsWalk)) {
          abortWalk = true;
          return;
        }
        if (dart.test(parentFragment.dropsSemanticsOfPreviousSiblings)) {
          fragments[$clear]();
          toBeMarkedExplicit.clear();
          if (!dart.test(config.isSemanticBoundary)) dropSemanticsOfPreviousSiblings = true;
        }
        for (let fragment of parentFragment.interestingFragments) {
          fragments[$add](fragment);
          fragment.addAncestor(this);
          fragment.addTags(config.tagsForChildren);
          if (dart.test(config.explicitChildNodes) || !object$.RenderObject.is(this.parent)) {
            fragment.markAsExplicit();
            continue;
          }
          if (!dart.test(fragment.hasConfigForParent) || producesForkingFragment) continue;
          if (!dart.test(config.isCompatibleWith(fragment.config))) toBeMarkedExplicit.add(fragment);
          let siblingLength = dart.notNull(fragments[$length]) - 1;
          for (let i = 0; i < siblingLength; i = i + 1) {
            let siblingFragment = fragments[$_get](i);
            if (!dart.test(dart.nullCheck(fragment.config).isCompatibleWith(siblingFragment.config))) {
              toBeMarkedExplicit.add(fragment);
              toBeMarkedExplicit.add(siblingFragment);
            }
          }
        }
      }, RenderObjectTovoid()));
      if (abortWalk) {
        return new object$._AbortingSemanticsFragment.new({owner: this});
      }
      for (let fragment of toBeMarkedExplicit)
        fragment.markAsExplicit();
      this[_needsSemanticsUpdate] = false;
      let result = null;
      if (!object$.RenderObject.is(this.parent)) {
        if (!!dart.test(config.hasBeenAnnotated)) dart.assertFailed(null, L4, 2721, 14, "!config.hasBeenAnnotated");
        if (!!dart.test(mergeIntoParent)) dart.assertFailed(null, L4, 2722, 14, "!mergeIntoParent");
        result = new object$._RootSemanticsFragment.new({owner: this, dropsSemanticsOfPreviousSiblings: dropSemanticsOfPreviousSiblings});
      } else if (producesForkingFragment) {
        result = new object$._ContainerSemanticsFragment.new({dropsSemanticsOfPreviousSiblings: dropSemanticsOfPreviousSiblings});
      } else {
        result = new object$._SwitchableSemanticsFragment.new({config: config, mergeIntoParent: mergeIntoParent, owner: this, dropsSemanticsOfPreviousSiblings: dropSemanticsOfPreviousSiblings});
        if (dart.test(config.isSemanticBoundary)) {
          let fragment = object$._SwitchableSemanticsFragment.as(result);
          fragment.markAsExplicit();
        }
      }
      result.addAll(fragments);
      return result;
    }
    visitChildrenForSemantics(visitor) {
      if (visitor == null) dart.nullFailed(L4, 2757, 54, "visitor");
      this.visitChildren(visitor);
    }
    assembleSemanticsNode(node, config, children) {
      if (node == null) dart.nullFailed(L4, 2776, 19, "node");
      if (config == null) dart.nullFailed(L4, 2777, 28, "config");
      if (children == null) dart.nullFailed(L4, 2778, 29, "children");
      if (!dart.equals(node, this[_semantics])) dart.assertFailed(null, L4, 2780, 12, "node == _semantics");
      node.updateWith({config: config, childrenInInversePaintOrder: ListOfSemanticsNode().as(children)});
    }
    handleEvent(event, entry) {
      if (event == null) dart.nullFailed(L4, 2789, 33, "event");
      hit_test.HitTestEntry.as(entry);
      if (entry == null) dart.nullFailed(L4, 2789, 63, "entry");
    }
    toStringShort() {
      let header = diagnostics.describeIdentity(this);
      if (this[_relayoutBoundary] != null && !dart.equals(this[_relayoutBoundary], this)) {
        let count = 1;
        let target = RenderObjectN().as(this.parent);
        while (target != null && !dart.equals(target, this[_relayoutBoundary])) {
          target = RenderObjectN().as(target.parent);
          count = count + 1;
        }
        header = dart.notNull(header) + (" relayoutBoundary=up" + dart.str(count));
      }
      if (dart.test(this[_needsLayout])) header = dart.notNull(header) + " NEEDS-LAYOUT";
      if (dart.test(this[_needsPaint])) header = dart.notNull(header) + " NEEDS-PAINT";
      if (dart.test(this[_needsCompositingBitsUpdate])) header = dart.notNull(header) + " NEEDS-COMPOSITING-BITS-UPDATE";
      if (!dart.test(this.attached)) header = dart.notNull(header) + " DETACHED";
      return header;
    }
    toString(opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C14 || CT.C14;
      if (minLevel == null) dart.nullFailed(L4, 2837, 37, "minLevel");
      return this.toStringShort();
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      if (prefixLineOne == null) dart.nullFailed(L4, 2844, 12, "prefixLineOne");
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : "";
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C15 || CT.C15;
      if (minLevel == null) dart.nullFailed(L4, 2846, 21, "minLevel");
      let debugPreviousActiveLayout = null;
      if (!dart.test(dart.fn(() => {
        debugPreviousActiveLayout = object$.RenderObject._debugActiveLayout;
        object$.RenderObject._debugActiveLayout = null;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 2849, 12, "() {\n      debugPreviousActiveLayout = _debugActiveLayout;\n      _debugActiveLayout = null;\n      return true;\n    }()");
      let result = super.toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
      if (!dart.test(dart.fn(() => {
        object$.RenderObject._debugActiveLayout = debugPreviousActiveLayout;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 2859, 12, "() {\n      _debugActiveLayout = debugPreviousActiveLayout;\n      return true;\n    }()");
      return result;
    }
    toStringShallow(opts) {
      let joiner = opts && 'joiner' in opts ? opts.joiner : ", ";
      if (joiner == null) dart.nullFailed(L4, 2873, 12, "joiner");
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C15 || CT.C15;
      if (minLevel == null) dart.nullFailed(L4, 2874, 21, "minLevel");
      let debugPreviousActiveLayout = null;
      if (!dart.test(dart.fn(() => {
        debugPreviousActiveLayout = object$.RenderObject._debugActiveLayout;
        object$.RenderObject._debugActiveLayout = null;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 2877, 12, "() {\n      debugPreviousActiveLayout = _debugActiveLayout;\n      _debugActiveLayout = null;\n      return true;\n    }()");
      let result = super.toStringShallow({joiner: joiner, minLevel: minLevel});
      if (!dart.test(dart.fn(() => {
        object$.RenderObject._debugActiveLayout = debugPreviousActiveLayout;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 2883, 12, "() {\n      _debugActiveLayout = debugPreviousActiveLayout;\n      return true;\n    }()");
      return result;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L4, 2892, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.FlagProperty.new("needsCompositing", {value: this[_needsCompositing], ifTrue: "needs compositing"}));
      properties.add(new (DiagnosticsPropertyOfObjectN()).new("creator", this.debugCreator, {defaultValue: null, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (DiagnosticsPropertyOfParentData()).new("parentData", this.parentData, {tooltip: dart.equals(this[_debugCanParentUseSize], true) ? "can use size" : null, missingIfNull: true}));
      properties.add(new (DiagnosticsPropertyOfConstraints()).new("constraints", this[_constraints], {missingIfNull: true}));
      properties.add(new (DiagnosticsPropertyOfContainerLayer()).new("layer", this[_layer], {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfSemanticsNode()).new("semantics node", this[_semantics], {defaultValue: null}));
      properties.add(new diagnostics.FlagProperty.new("isBlockingSemanticsOfPreviouslyPaintedNodes", {value: this[_semanticsConfiguration].isBlockingSemanticsOfPreviouslyPaintedNodes, ifTrue: "blocks semantics of earlier render objects below the common boundary"}));
      properties.add(new diagnostics.FlagProperty.new("isSemanticBoundary", {value: this[_semanticsConfiguration].isSemanticBoundary, ifTrue: "semantic boundary"}));
    }
    debugDescribeChildren() {
      return JSArrayOfDiagnosticsNode().of([]);
    }
    showOnScreen(opts) {
      let t20;
      let descendant = opts && 'descendant' in opts ? opts.descendant : null;
      let rect = opts && 'rect' in opts ? opts.rect : null;
      let duration = opts && 'duration' in opts ? opts.duration : C16 || CT.C16;
      if (duration == null) dart.nullFailed(L4, 2935, 14, "duration");
      let curve = opts && 'curve' in opts ? opts.curve : C17 || CT.C17;
      if (curve == null) dart.nullFailed(L4, 2936, 11, "curve");
      if (object$.RenderObject.is(this.parent)) {
        let renderParent = object$.RenderObject.as(dart.nullCheck(this.parent));
        renderParent.showOnScreen({descendant: (t20 = descendant, t20 == null ? this : t20), rect: rect, duration: duration, curve: curve});
      }
    }
    describeForError(name, opts) {
      if (name == null) dart.nullFailed(L4, 2958, 43, "name");
      let style = opts && 'style' in opts ? opts.style : C18 || CT.C18;
      if (style == null) dart.nullFailed(L4, 2958, 72, "style");
      return this.toDiagnosticsNode({name: name, style: style});
    }
  };
  (object$.RenderObject.new = function() {
    this[parentData] = null;
    this[debugCreator$] = null;
    this[_debugDoingThisResize] = false;
    this[_debugDoingThisLayout] = false;
    this[_debugCanParentUseSize] = null;
    this[_debugMutationsLocked] = false;
    this[_needsLayout] = true;
    this[_relayoutBoundary] = null;
    this[_doingThisLayoutWithCallback] = false;
    this[_constraints] = null;
    this[_debugDoingThisPaint] = false;
    this[_layer] = null;
    this[_needsCompositingBitsUpdate] = false;
    this[__RenderObject__needsCompositing] = null;
    this[__RenderObject__needsCompositing_isSet] = false;
    this[_needsPaint] = true;
    this[_cachedSemanticsConfiguration] = null;
    this[_needsSemanticsUpdate] = true;
    this[_semantics] = null;
    object$.RenderObject.__proto__.new.call(this);
    this[_needsCompositing] = dart.test(this.isRepaintBoundary) || dart.test(this.alwaysNeedsCompositing);
  }).prototype = object$.RenderObject.prototype;
  dart.addTypeTests(object$.RenderObject);
  dart.addTypeCaches(object$.RenderObject);
  object$.RenderObject[dart.implements] = () => [hit_test.HitTestTarget];
  dart.setMethodSignature(object$.RenderObject, () => ({
    __proto__: dart.getMethods(object$.RenderObject.__proto__),
    reassemble: dart.fnType(dart.void, []),
    setupParentData: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    visitChildren: dart.fnType(dart.void, [dart.fnType(dart.void, [object$.RenderObject])]),
    [_debugReportException]: dart.fnType(dart.void, [core.String, core.Object, core.StackTrace]),
    [_debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout]: dart.fnType(core.bool, []),
    markNeedsLayout: dart.fnType(dart.void, []),
    markParentNeedsLayout: dart.fnType(dart.void, []),
    markNeedsLayoutForSizedByParentChange: dart.fnType(dart.void, []),
    [_cleanRelayoutBoundary]: dart.fnType(dart.void, []),
    scheduleInitialLayout: dart.fnType(dart.void, []),
    [_layoutWithoutResize]: dart.fnType(dart.void, []),
    layout: dart.fnType(dart.void, [object$.Constraints], {parentUsesSize: core.bool}, {}),
    debugResetSize: dart.fnType(dart.void, []),
    invokeLayoutCallback: dart.gFnType(T => [dart.void, [dart.fnType(dart.void, [T])]], T => [object$.Constraints]),
    rotate: dart.fnType(dart.void, [], {newAngle: dart.nullable(core.int), oldAngle: dart.nullable(core.int), time: dart.nullable(core.Duration)}, {}),
    debugRegisterRepaintBoundaryPaint: dart.fnType(dart.void, [], {includedChild: core.bool, includedParent: core.bool}, {}),
    markNeedsCompositingBitsUpdate: dart.fnType(dart.void, []),
    [_updateCompositingBits]: dart.fnType(dart.void, []),
    markNeedsPaint: dart.fnType(dart.void, []),
    [_skippedPaintingOnLayer]: dart.fnType(dart.void, []),
    scheduleInitialPaint: dart.fnType(dart.void, [layer$.ContainerLayer]),
    replaceRootLayer: dart.fnType(dart.void, [layer$.OffsetLayer]),
    [_paintWithContext]: dart.fnType(dart.void, [object$.PaintingContext, ui.Offset]),
    debugPaint: dart.fnType(dart.void, [object$.PaintingContext, ui.Offset]),
    paint: dart.fnType(dart.void, [object$.PaintingContext, ui.Offset]),
    applyPaintTransform: dart.fnType(dart.void, [dart.nullable(core.Object), vector_math_64.Matrix4]),
    getTransformTo: dart.fnType(vector_math_64.Matrix4, [dart.nullable(object$.RenderObject)]),
    describeApproximatePaintClip: dart.fnType(dart.nullable(ui.Rect), [dart.nullable(core.Object)]),
    describeSemanticsClip: dart.fnType(dart.nullable(ui.Rect), [dart.nullable(core.Object)]),
    scheduleInitialSemantics: dart.fnType(dart.void, []),
    describeSemanticsConfiguration: dart.fnType(dart.void, [semantics.SemanticsConfiguration]),
    sendSemanticsEvent: dart.fnType(dart.void, [semantics_event.SemanticsEvent]),
    clearSemantics: dart.fnType(dart.void, []),
    markNeedsSemanticsUpdate: dart.fnType(dart.void, []),
    [_updateSemantics]: dart.fnType(dart.void, []),
    [_getSemanticsForParent]: dart.fnType(object$._SemanticsFragment, [], {}, {mergeIntoParent: core.bool}),
    visitChildrenForSemantics: dart.fnType(dart.void, [dart.fnType(dart.void, [object$.RenderObject])]),
    assembleSemanticsNode: dart.fnType(dart.void, [semantics.SemanticsNode, semantics.SemanticsConfiguration, core.Iterable$(semantics.SemanticsNode)]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent, dart.nullable(core.Object)]),
    showOnScreen: dart.fnType(dart.void, [], {curve: curves.Curve, descendant: dart.nullable(object$.RenderObject), duration: core.Duration, rect: dart.nullable(ui.Rect)}, {}),
    describeForError: dart.fnType(diagnostics.DiagnosticsNode, [core.String], {style: diagnostics.DiagnosticsTreeStyle}, {})
  }));
  dart.setGetterSignature(object$.RenderObject, () => ({
    __proto__: dart.getGetters(object$.RenderObject.__proto__),
    debugDoingThisResize: core.bool,
    debugDoingThisLayout: core.bool,
    debugCanParentUseSize: core.bool,
    [_debugCanPerformMutations]: core.bool,
    owner: dart.nullable(object$.PipelineOwner),
    debugNeedsLayout: core.bool,
    constraints: object$.Constraints,
    sizedByParent: core.bool,
    debugDoingThisPaint: core.bool,
    isRepaintBoundary: core.bool,
    alwaysNeedsCompositing: core.bool,
    layer: dart.nullable(layer$.ContainerLayer),
    debugLayer: dart.nullable(layer$.ContainerLayer),
    [_needsCompositing]: core.bool,
    needsCompositing: core.bool,
    debugNeedsPaint: core.bool,
    [_semanticsConfiguration]: semantics.SemanticsConfiguration,
    debugSemantics: dart.nullable(semantics.SemanticsNode)
  }));
  dart.setSetterSignature(object$.RenderObject, () => ({
    __proto__: dart.getSetters(object$.RenderObject.__proto__),
    layer: dart.nullable(layer$.ContainerLayer),
    [_needsCompositing]: core.bool
  }));
  dart.setLibraryUri(object$.RenderObject, L5);
  dart.setFieldSignature(object$.RenderObject, () => ({
    __proto__: dart.getFields(object$.RenderObject.__proto__),
    parentData: dart.fieldType(dart.nullable(object$.ParentData)),
    debugCreator: dart.fieldType(dart.nullable(core.Object)),
    [_debugDoingThisResize]: dart.fieldType(core.bool),
    [_debugDoingThisLayout]: dart.fieldType(core.bool),
    [_debugCanParentUseSize]: dart.fieldType(dart.nullable(core.bool)),
    [_debugMutationsLocked]: dart.fieldType(core.bool),
    [_needsLayout]: dart.fieldType(core.bool),
    [_relayoutBoundary]: dart.fieldType(dart.nullable(object$.RenderObject)),
    [_doingThisLayoutWithCallback]: dart.fieldType(core.bool),
    [_constraints]: dart.fieldType(dart.nullable(object$.Constraints)),
    [_debugDoingThisPaint]: dart.fieldType(core.bool),
    [_layer]: dart.fieldType(dart.nullable(layer$.ContainerLayer)),
    [_needsCompositingBitsUpdate]: dart.fieldType(core.bool),
    [__RenderObject__needsCompositing]: dart.fieldType(dart.nullable(core.bool)),
    [__RenderObject__needsCompositing_isSet]: dart.fieldType(core.bool),
    [_needsPaint]: dart.fieldType(core.bool),
    [_cachedSemanticsConfiguration]: dart.fieldType(dart.nullable(semantics.SemanticsConfiguration)),
    [_needsSemanticsUpdate]: dart.fieldType(core.bool),
    [_semantics]: dart.fieldType(dart.nullable(semantics.SemanticsNode))
  }));
  dart.defineExtensionMethods(object$.RenderObject, ['toString']);
  dart.defineLazy(object$.RenderObject, {
    /*object$.RenderObject._debugActiveLayout*/get _debugActiveLayout() {
      return null;
    },
    set _debugActiveLayout(_) {},
    /*object$.RenderObject.debugCheckingIntrinsics*/get debugCheckingIntrinsics() {
      return false;
    },
    set debugCheckingIntrinsics(_) {},
    /*object$.RenderObject._debugActivePaint*/get _debugActivePaint() {
      return null;
    },
    set _debugActivePaint(_) {}
  }, false);
  var _child = dart.privateName(object$, "_child");
  const _is_RenderObjectWithChildMixin_default = Symbol('_is_RenderObjectWithChildMixin_default');
  object$.RenderObjectWithChildMixin$ = dart.generic(ChildType => {
    var ChildTypeN = () => (ChildTypeN = dart.constFn(dart.nullable(ChildType)))();
    class RenderObjectWithChildMixin extends object$.RenderObject {}
    RenderObjectWithChildMixin[dart.mixinOn] = RenderObject => class RenderObjectWithChildMixin extends RenderObject {
      debugValidateChild(child) {
        if (child == null) dart.nullFailed(L4, 2978, 40, "child");
        if (!dart.test(dart.fn(() => {
          if (!ChildType.is(child)) {
            dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A " + dart.str(this[$runtimeType]) + " expected a child of type " + dart.str(dart.wrapType(ChildType)) + " but received a " + "child of type " + dart.str(dart.runtimeType(child)) + "."), new assertions.ErrorDescription.new("RenderObjects expect specific types of children because they " + "coordinate with their children during layout and paint. For " + "example, a RenderSliver cannot be the child of a RenderBox because " + "a RenderSliver does not understand the RenderBox layout protocol."), new assertions.ErrorSpacer.new(), new (DiagnosticsPropertyOfObjectN()).new("The " + dart.str(this[$runtimeType]) + " that expected a " + dart.str(dart.wrapType(ChildType)) + " child was created by", this.debugCreator, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new assertions.ErrorSpacer.new(), new (DiagnosticsPropertyOfObjectN()).new("The " + dart.str(dart.runtimeType(child)) + " that did not match the expected child type " + "was created by", child.debugCreator, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L4, 2979, 12, "() {\n      if (child is! ChildType) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary(\n            'A $runtimeType expected a child of type $ChildType but received a '\n            'child of type ${child.runtimeType}.'\n          ),\n          ErrorDescription(\n            'RenderObjects expect specific types of children because they '\n            'coordinate with their children during layout and paint. For '\n            'example, a RenderSliver cannot be the child of a RenderBox because '\n            'a RenderSliver does not understand the RenderBox layout protocol.',\n          ),\n          ErrorSpacer(),\n          DiagnosticsProperty<Object?>(\n            'The $runtimeType that expected a $ChildType child was created by',\n            debugCreator,\n            style: DiagnosticsTreeStyle.errorProperty,\n          ),\n          ErrorSpacer(),\n          DiagnosticsProperty<Object?>(\n            'The ${child.runtimeType} that did not match the expected child type '\n            'was created by',\n            child.debugCreator,\n            style: DiagnosticsTreeStyle.errorProperty,\n          ),\n        ]);\n      }\n      return true;\n    }()");
        return true;
      }
      get child() {
        return this[_child];
      }
      set child(value) {
        ChildTypeN().as(value);
        if (this[_child] != null) this.dropChild(dart.nullCheck(this[_child]));
        this[_child] = value;
        if (this[_child] != null) this.adoptChild(dart.nullCheck(this[_child]));
      }
      attach(owner) {
        object$.PipelineOwner.as(owner);
        if (owner == null) dart.nullFailed(L4, 3024, 29, "owner");
        super.attach(owner);
        if (this[_child] != null) dart.nullCheck(this[_child]).attach(owner);
      }
      detach() {
        super.detach();
        if (this[_child] != null) dart.nullCheck(this[_child]).detach();
      }
      redepthChildren() {
        if (this[_child] != null) this.redepthChild(dart.nullCheck(this[_child]));
      }
      visitChildren(visitor) {
        if (visitor == null) dart.nullFailed(L4, 3044, 42, "visitor");
        if (this[_child] != null) visitor(dart.nullCheck(this[_child]));
      }
      debugDescribeChildren() {
        return this.child != null ? JSArrayOfDiagnosticsNode().of([dart.nullCheck(this.child).toDiagnosticsNode({name: "child"})]) : JSArrayOfDiagnosticsNode().of([]);
      }
    };
    (RenderObjectWithChildMixin[dart.mixinNew] = function() {
      this[_child] = null;
    }).prototype = RenderObjectWithChildMixin.prototype;
    dart.addTypeTests(RenderObjectWithChildMixin);
    RenderObjectWithChildMixin.prototype[_is_RenderObjectWithChildMixin_default] = true;
    dart.addTypeCaches(RenderObjectWithChildMixin);
    RenderObjectWithChildMixin[dart.implements] = () => [object$.RenderObject];
    dart.setMethodSignature(RenderObjectWithChildMixin, () => ({
      __proto__: dart.getMethods(RenderObjectWithChildMixin.__proto__),
      debugValidateChild: dart.fnType(core.bool, [object$.RenderObject])
    }));
    dart.setGetterSignature(RenderObjectWithChildMixin, () => ({
      __proto__: dart.getGetters(RenderObjectWithChildMixin.__proto__),
      child: dart.nullable(ChildType)
    }));
    dart.setSetterSignature(RenderObjectWithChildMixin, () => ({
      __proto__: dart.getSetters(RenderObjectWithChildMixin.__proto__),
      child: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(RenderObjectWithChildMixin, L5);
    dart.setFieldSignature(RenderObjectWithChildMixin, () => ({
      __proto__: dart.getFields(RenderObjectWithChildMixin.__proto__),
      [_child]: dart.fieldType(dart.nullable(ChildType))
    }));
    return RenderObjectWithChildMixin;
  });
  object$.RenderObjectWithChildMixin = object$.RenderObjectWithChildMixin$();
  dart.addTypeTests(object$.RenderObjectWithChildMixin, _is_RenderObjectWithChildMixin_default);
  var _cachedIntrinsicDimensions = dart.privateName(box, "_cachedIntrinsicDimensions");
  var _cachedDryLayoutSizes = dart.privateName(box, "_cachedDryLayoutSizes");
  var _computingThisDryLayout = dart.privateName(box, "_computingThisDryLayout");
  var _size$ = dart.privateName(box, "_size");
  var _cachedBaselines = dart.privateName(box, "_cachedBaselines");
  var _debugActivePointers = dart.privateName(box, "_debugActivePointers");
  var _computeIntrinsicDimension = dart.privateName(box, "_computeIntrinsicDimension");
  var _computeDryLayout = dart.privateName(box, "_computeDryLayout");
  var _owner$ = dart.privateName(box, "_owner");
  var _canBeUsedByParent$ = dart.privateName(box, "_canBeUsedByParent");
  var C19;
  var C20;
  var C21;
  box.RenderBox = class RenderBox extends object$.RenderObject {
    setupParentData(child) {
      object$.RenderObject.as(child);
      if (child == null) dart.nullFailed(L6, 1352, 47, "child");
      if (!box.BoxParentData.is(child.parentData)) child.parentData = new box.BoxParentData.new();
    }
    [_computeIntrinsicDimension](dimension, argument, computer) {
      if (dimension == null) dart.nullFailed(L6, 1359, 57, "dimension");
      if (argument == null) dart.nullFailed(L6, 1359, 75, "argument");
      if (computer == null) dart.nullFailed(L6, 1359, 92, "computer");
      if (!(dart.test(object$.RenderObject.debugCheckingIntrinsics) || !dart.test(this.debugDoingThisResize))) dart.assertFailed(null, L6, 1360, 12, "RenderObject.debugCheckingIntrinsics || !debugDoingThisResize");
      let shouldCache = true;
      if (!dart.test(dart.fn(() => {
        if (dart.test(object$.RenderObject.debugCheckingIntrinsics)) shouldCache = false;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 1362, 12, "() {\n      // we don't want the checked-mode intrinsic tests to affect\n      // who gets marked dirty, etc.\n      if (RenderObject.debugCheckingIntrinsics)\n        shouldCache = false;\n      return true;\n    }()");
      if (shouldCache) {
        this[_cachedIntrinsicDimensions] == null ? this[_cachedIntrinsicDimensions] = new (LinkedMapOf_IntrinsicDimensionsCacheEntry$double()).new() : null;
        return dart.nullCheck(this[_cachedIntrinsicDimensions])[$putIfAbsent](new box._IntrinsicDimensionsCacheEntry.new(dimension, argument), dart.fn(() => computer(argument), VoidTodouble()));
      }
      return computer(argument);
    }
    getMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L6, 1395, 38, "height");
      if (!dart.test(dart.fn(() => {
        if (height == null) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The height argument to getMinIntrinsicWidth was null."), new assertions.ErrorDescription.new("The argument to getMinIntrinsicWidth must not be negative or null."), new assertions.ErrorHint.new("If you do not have a specific height in mind, then pass double.infinity instead.")])));
        }
        if (dart.notNull(height) < 0.0) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The height argument to getMinIntrinsicWidth was negative."), new assertions.ErrorDescription.new("The argument to getMinIntrinsicWidth must not be negative or null."), new assertions.ErrorHint.new("If you perform computations on another height before passing it to " + "getMinIntrinsicWidth, consider using math.max() or double.clamp() " + "to force the value into the valid range.")])));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 1396, 12, "() {\n      // `height` has a non-nullable return type, but might be null when\n      // running with weak checking, so we need to null check it anyway (and\n      // ignore the warning that the null-handling logic is dead code).\n      if (height == null) { // ignore: dead_code\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The height argument to getMinIntrinsicWidth was null.'),\n          ErrorDescription('The argument to getMinIntrinsicWidth must not be negative or null.'),\n          ErrorHint('If you do not have a specific height in mind, then pass double.infinity instead.'),\n        ]);\n      }\n      if (height < 0.0) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The height argument to getMinIntrinsicWidth was negative.'),\n          ErrorDescription('The argument to getMinIntrinsicWidth must not be negative or null.'),\n          ErrorHint(\n            'If you perform computations on another height before passing it to '\n            'getMinIntrinsicWidth, consider using math.max() or double.clamp() '\n            'to force the value into the valid range.'\n          ),\n        ]);\n      }\n      return true;\n    }()");
      return this[_computeIntrinsicDimension](box._IntrinsicDimension.minWidth, height, dart.bind(this, 'computeMinIntrinsicWidth'));
    }
    computeMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L6, 1521, 42, "height");
      return 0.0;
    }
    getMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L6, 1543, 38, "height");
      if (!dart.test(dart.fn(() => {
        if (height == null) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The height argument to getMaxIntrinsicWidth was null."), new assertions.ErrorDescription.new("The argument to getMaxIntrinsicWidth must not be negative or null."), new assertions.ErrorHint.new("If you do not have a specific height in mind, then pass double.infinity instead.")])));
        }
        if (dart.notNull(height) < 0.0) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The height argument to getMaxIntrinsicWidth was negative."), new assertions.ErrorDescription.new("The argument to getMaxIntrinsicWidth must not be negative or null."), new assertions.ErrorHint.new("If you perform computations on another height before passing it to " + "getMaxIntrinsicWidth, consider using math.max() or double.clamp() " + "to force the value into the valid range.")])));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 1544, 12, "() {\n      // `height` has a non-nullable return type, but might be null when\n      // running with weak checking, so we need to null check it anyway (and\n      // ignore the warning that the null-handling logic is dead code).\n      if (height == null) { // ignore: dead_code\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The height argument to getMaxIntrinsicWidth was null.'),\n          ErrorDescription('The argument to getMaxIntrinsicWidth must not be negative or null.'),\n          ErrorHint('If you do not have a specific height in mind, then pass double.infinity instead.'),\n        ]);\n      }\n      if (height < 0.0) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The height argument to getMaxIntrinsicWidth was negative.'),\n          ErrorDescription('The argument to getMaxIntrinsicWidth must not be negative or null.'),\n          ErrorHint(\n            'If you perform computations on another height before passing it to '\n            'getMaxIntrinsicWidth, consider using math.max() or double.clamp() '\n            'to force the value into the valid range.'\n          ),\n        ]);\n      }\n      return true;\n    }()");
      return this[_computeIntrinsicDimension](box._IntrinsicDimension.maxWidth, height, dart.bind(this, 'computeMaxIntrinsicWidth'));
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L6, 1604, 42, "height");
      return 0.0;
    }
    getMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L6, 1625, 39, "width");
      if (!dart.test(dart.fn(() => {
        if (width == null) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The width argument to getMinIntrinsicHeight was null."), new assertions.ErrorDescription.new("The argument to getMinIntrinsicHeight must not be negative or null."), new assertions.ErrorHint.new("If you do not have a specific width in mind, then pass double.infinity instead.")])));
        }
        if (dart.notNull(width) < 0.0) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The width argument to getMinIntrinsicHeight was negative."), new assertions.ErrorDescription.new("The argument to getMinIntrinsicHeight must not be negative or null."), new assertions.ErrorHint.new("If you perform computations on another width before passing it to " + "getMinIntrinsicHeight, consider using math.max() or double.clamp() " + "to force the value into the valid range.")])));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 1626, 12, "() {\n      // `width` has a non-nullable return type, but might be null when\n      // running with weak checking, so we need to null check it anyway (and\n      // ignore the warning that the null-handling logic is dead code).\n      if (width == null) { // ignore: dead_code\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The width argument to getMinIntrinsicHeight was null.'),\n          ErrorDescription('The argument to getMinIntrinsicHeight must not be negative or null.'),\n          ErrorHint('If you do not have a specific width in mind, then pass double.infinity instead.'),\n        ]);\n      }\n      if (width < 0.0) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The width argument to getMinIntrinsicHeight was negative.'),\n          ErrorDescription('The argument to getMinIntrinsicHeight must not be negative or null.'),\n          ErrorHint(\n            'If you perform computations on another width before passing it to '\n            'getMinIntrinsicHeight, consider using math.max() or double.clamp() '\n            'to force the value into the valid range.'\n          ),\n        ]);\n      }\n      return true;\n    }()");
      return this[_computeIntrinsicDimension](box._IntrinsicDimension.minHeight, width, dart.bind(this, 'computeMinIntrinsicHeight'));
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L6, 1684, 43, "width");
      return 0.0;
    }
    getMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L6, 1706, 39, "width");
      if (!dart.test(dart.fn(() => {
        if (width == null) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The width argument to getMaxIntrinsicHeight was null."), new assertions.ErrorDescription.new("The argument to getMaxIntrinsicHeight must not be negative or null."), new assertions.ErrorHint.new("If you do not have a specific width in mind, then pass double.infinity instead.")])));
        }
        if (dart.notNull(width) < 0.0) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The width argument to getMaxIntrinsicHeight was negative."), new assertions.ErrorDescription.new("The argument to getMaxIntrinsicHeight must not be negative or null."), new assertions.ErrorHint.new("If you perform computations on another width before passing it to " + "getMaxIntrinsicHeight, consider using math.max() or double.clamp() " + "to force the value into the valid range.")])));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 1707, 12, "() {\n      // `width` has a non-nullable return type, but might be null when\n      // running with weak checking, so we need to null check it anyway (and\n      // ignore the warning that the null-handling logic is dead code).\n      if (width == null) { // ignore: dead_code\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The width argument to getMaxIntrinsicHeight was null.'),\n          ErrorDescription('The argument to getMaxIntrinsicHeight must not be negative or null.'),\n          ErrorHint('If you do not have a specific width in mind, then pass double.infinity instead.'),\n        ]);\n      }\n      if (width < 0.0) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The width argument to getMaxIntrinsicHeight was negative.'),\n          ErrorDescription('The argument to getMaxIntrinsicHeight must not be negative or null.'),\n          ErrorHint(\n            'If you perform computations on another width before passing it to '\n            'getMaxIntrinsicHeight, consider using math.max() or double.clamp() '\n            'to force the value into the valid range.'\n          ),\n        ]);\n      }\n      return true;\n    }()");
      return this[_computeIntrinsicDimension](box._IntrinsicDimension.maxHeight, width, dart.bind(this, 'computeMaxIntrinsicHeight'));
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L6, 1767, 43, "width");
      return 0.0;
    }
    getDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L6, 1793, 36, "constraints");
      let shouldCache = true;
      if (!dart.test(dart.fn(() => {
        if (dart.test(object$.RenderObject.debugCheckingIntrinsics)) shouldCache = false;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 1795, 12, "() {\n      // we don't want the checked-mode intrinsic tests to affect\n      // who gets marked dirty, etc.\n      if (RenderObject.debugCheckingIntrinsics)\n        shouldCache = false;\n      return true;\n    }()");
      if (shouldCache) {
        this[_cachedDryLayoutSizes] == null ? this[_cachedDryLayoutSizes] = new (LinkedMapOfBoxConstraints$Size()).new() : null;
        return dart.nullCheck(this[_cachedDryLayoutSizes])[$putIfAbsent](constraints, dart.fn(() => this[_computeDryLayout](constraints), VoidToSize()));
      }
      return this[_computeDryLayout](constraints);
    }
    [_computeDryLayout](constraints) {
      if (constraints == null) dart.nullFailed(L6, 1809, 41, "constraints");
      if (!dart.test(dart.fn(() => {
        if (!!dart.test(this[_computingThisDryLayout])) dart.assertFailed(null, L6, 1811, 14, "!_computingThisDryLayout");
        this[_computingThisDryLayout] = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 1810, 12, "() {\n      assert(!_computingThisDryLayout);\n      _computingThisDryLayout = true;\n      return true;\n    }()");
      let result = this.computeDryLayout(constraints);
      if (!dart.test(dart.fn(() => {
        if (!dart.test(this[_computingThisDryLayout])) dart.assertFailed(null, L6, 1817, 14, "_computingThisDryLayout");
        this[_computingThisDryLayout] = false;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 1816, 12, "() {\n      assert(_computingThisDryLayout);\n      _computingThisDryLayout = false;\n      return true;\n    }()");
      return result;
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L6, 1857, 40, "constraints");
      if (!dart.test(this.debugCannotComputeDryLayout({error: new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The " + dart.str(object.objectRuntimeType(this, "RenderBox")) + " class does not implement \"computeDryLayout\"."), new assertions.ErrorHint.new("If you are not writing your own RenderBox subclass, then this is not\n" + "your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md")]))}))) dart.assertFailed(null, L6, 1858, 12, "debugCannotComputeDryLayout(\n      error: FlutterError.fromParts(<DiagnosticsNode>[\n        ErrorSummary('The ${objectRuntimeType(this, 'RenderBox')} class does not implement \"computeDryLayout\".'),\n        ErrorHint(\n          'If you are not writing your own RenderBox subclass, then this is not\\n'\n          'your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md'\n        ),\n      ]),\n    )");
      return C6 || CT.C6;
    }
    debugCannotComputeDryLayout(opts) {
      let reason = opts && 'reason' in opts ? opts.reason : null;
      let error = opts && 'error' in opts ? opts.error : null;
      if (!!(reason == null)[$_equals](error == null)) dart.assertFailed(null, L6, 1887, 12, "(reason == null) != (error == null)");
      if (!dart.test(dart.fn(() => {
        if (!dart.test(object$.RenderObject.debugCheckingIntrinsics)) {
          if (reason != null) {
            if (!(error == null)) dart.assertFailed(null, L6, 1891, 18, "error ==null");
            dart.throw(new assertions.FlutterError.fromParts((() => {
              let t20 = JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The " + dart.str(object.objectRuntimeType(this, "RenderBox")) + " class does not support dry layout.")]);
              if (reason[$isNotEmpty]) t20.push(new assertions.ErrorDescription.new(reason));
              return t20;
            })()));
          }
          if (!(error != null)) dart.assertFailed(null, L6, 1897, 16, "error != null");
          dart.throw(dart.nullCheck(error));
        }
        box.RenderBox._dryLayoutCalculationValid = false;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 1888, 12, "() {\n      if (!RenderObject.debugCheckingIntrinsics) {\n        if (reason != null) {\n          assert(error ==null);\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('The ${objectRuntimeType(this, 'RenderBox')} class does not support dry layout.'),\n            if (reason.isNotEmpty) ErrorDescription(reason),\n          ]);\n        }\n        assert(error != null);\n        throw error!;\n      }\n      _dryLayoutCalculationValid = false;\n      return true;\n    }()");
      return true;
    }
    get hasSize() {
      return this[_size$] != null;
    }
    get size() {
      if (!dart.test(this.hasSize)) dart.assertFailed("RenderBox was not laid out: " + dart.str(this.toString()), L6, 1920, 12, "hasSize");
      if (!dart.test(dart.fn(() => {
        let _size = this[_size$];
        if (box._DebugSize.is(_size)) {
          if (!dart.equals(_size[_owner$], this)) dart.assertFailed(null, L6, 1924, 16, "_size._owner == this");
          if (object$.RenderObject.debugActiveLayout != null) {
            if (!(dart.test(this.debugDoingThisResize) || dart.test(this.debugDoingThisLayout) || dart.test(this[_computingThisDryLayout]) || dart.equals(object$.RenderObject.debugActiveLayout, this.parent) && dart.test(_size[_canBeUsedByParent$]))) dart.assertFailed("RenderBox.size accessed beyond the scope of resize, layout, or " + "permitted parent access. RenderBox can always access its own size, " + "otherwise, the only object that is allowed to read RenderBox.size " + "is its parent, if they have said they will. It you hit this assert " + "trying to access a child's size, pass \"parentUsesSize: true\" to " + "that child's layout().", L6, 1927, 13, "debugDoingThisResize || debugDoingThisLayout || _computingThisDryLayout ||\n              (RenderObject.debugActiveLayout == parent && _size._canBeUsedByParent)");
          }
          if (!dart.equals(_size, this[_size$])) dart.assertFailed(null, L6, 1937, 16, "_size == this._size");
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 1921, 12, "() {\n      final Size? _size = this._size;\n      if (_size is _DebugSize) {\n        assert(_size._owner == this);\n        if (RenderObject.debugActiveLayout != null) {\n          assert(\n            debugDoingThisResize || debugDoingThisLayout || _computingThisDryLayout ||\n              (RenderObject.debugActiveLayout == parent && _size._canBeUsedByParent),\n            'RenderBox.size accessed beyond the scope of resize, layout, or '\n            'permitted parent access. RenderBox can always access its own size, '\n            'otherwise, the only object that is allowed to read RenderBox.size '\n            'is its parent, if they have said they will. It you hit this assert '\n            'trying to access a child\\'s size, pass \"parentUsesSize: true\" to '\n            'that child\\'s layout().'\n          );\n        }\n        assert(_size == this._size);\n      }\n      return true;\n    }()");
      return dart.nullCheck(this[_size$]);
    }
    set size(value) {
      if (value == null) dart.nullFailed(L6, 1948, 17, "value");
      if (!!(dart.test(this.debugDoingThisResize) && dart.test(this.debugDoingThisLayout))) dart.assertFailed(null, L6, 1949, 12, "!(debugDoingThisResize && debugDoingThisLayout)");
      if (!(dart.test(this.sizedByParent) || !dart.test(this.debugDoingThisResize))) dart.assertFailed(null, L6, 1950, 12, "sizedByParent || !debugDoingThisResize");
      if (!dart.test(dart.fn(() => {
        if (dart.test(this.sizedByParent) && dart.test(this.debugDoingThisResize) || !dart.test(this.sizedByParent) && dart.test(this.debugDoingThisLayout)) return true;
        if (!!dart.test(this.debugDoingThisResize)) dart.assertFailed(null, L6, 1955, 14, "!debugDoingThisResize");
        let information = JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("RenderBox size setter called incorrectly.")]);
        if (dart.test(this.debugDoingThisLayout)) {
          if (!dart.test(this.sizedByParent)) dart.assertFailed(null, L6, 1960, 16, "sizedByParent");
          information[$add](new assertions.ErrorDescription.new("It appears that the size setter was called from performLayout()."));
        } else {
          information[$add](new assertions.ErrorDescription.new("The size setter was called from outside layout (neither performResize() nor performLayout() were being run for this object)."));
          if (this.owner != null && dart.test(dart.nullCheck(this.owner).debugDoingLayout)) information[$add](new assertions.ErrorDescription.new("Only the object itself can set its size. It is a contract violation for other objects to set it."));
        }
        if (dart.test(this.sizedByParent))
          information[$add](new assertions.ErrorDescription.new("Because this RenderBox has sizedByParent set to true, it must set its size in performResize()."));
        else
          information[$add](new assertions.ErrorDescription.new("Because this RenderBox has sizedByParent set to false, it must set its size in performLayout()."));
        dart.throw(new assertions.FlutterError.fromParts(information));
      }, VoidTobool())())) dart.assertFailed(null, L6, 1951, 12, "() {\n      if ((sizedByParent && debugDoingThisResize) ||\n          (!sizedByParent && debugDoingThisLayout))\n        return true;\n      assert(!debugDoingThisResize);\n      final List<DiagnosticsNode> information = <DiagnosticsNode>[\n        ErrorSummary('RenderBox size setter called incorrectly.'),\n      ];\n      if (debugDoingThisLayout) {\n        assert(sizedByParent);\n        information.add(ErrorDescription('It appears that the size setter was called from performLayout().'));\n      } else {\n        information.add(ErrorDescription(\n          'The size setter was called from outside layout (neither performResize() nor performLayout() were being run for this object).'\n        ));\n        if (owner != null && owner!.debugDoingLayout)\n          information.add(ErrorDescription('Only the object itself can set its size. It is a contract violation for other objects to set it.'));\n      }\n      if (sizedByParent)\n        information.add(ErrorDescription('Because this RenderBox has sizedByParent set to true, it must set its size in performResize().'));\n      else\n        information.add(ErrorDescription('Because this RenderBox has sizedByParent set to false, it must set its size in performLayout().'));\n      throw FlutterError.fromParts(information);\n    }()");
      if (!dart.test(dart.fn(() => {
        value = this.debugAdoptSize(value);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 1975, 12, "() {\n      value = debugAdoptSize(value);\n      return true;\n    }()");
      this[_size$] = value;
      if (!dart.test(dart.fn(() => {
        this.debugAssertDoesMeetConstraints();
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 1980, 12, "() {\n      debugAssertDoesMeetConstraints();\n      return true;\n    }()");
    }
    debugAdoptSize(value) {
      if (value == null) dart.nullFailed(L6, 1999, 28, "value");
      let result = value;
      if (!dart.test(dart.fn(() => {
        if (box._DebugSize.is(value)) {
          if (!dart.equals(value[_owner$], this)) {
            if (!dart.equals(value[_owner$].parent, this)) {
              dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The size property was assigned a size inappropriately."), this.describeForError("The following render object"), value[_owner$].describeForError("...was assigned a size obtained from"), new assertions.ErrorDescription.new("However, this second render object is not, or is no longer, a " + "child of the first, and it is therefore a violation of the " + "RenderBox layout protocol to use that size in the layout of the " + "first render object."), new assertions.ErrorHint.new("If the size was obtained at a time where it was valid to read " + "the size (because the second render object above was a child " + "of the first at the time), then it should be adopted using " + "debugAdoptSize at that time."), new assertions.ErrorHint.new("If the size comes from a grandchild or a render object from an " + "entirely different part of the render tree, then there is no " + "way to be notified when the size changes and therefore attempts " + "to read that size are almost certainly a source of bugs. A different " + "approach should be used.")])));
            }
            if (!dart.test(value[_canBeUsedByParent$])) {
              dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A child's size was used without setting parentUsesSize."), this.describeForError("The following render object"), value[_owner$].describeForError("...was assigned a size obtained from its child"), new assertions.ErrorDescription.new("However, when the child was laid out, the parentUsesSize argument " + "was not set or set to false. Subsequently this transpired to be " + "inaccurate: the size was nonetheless used by the parent.\n" + "It is important to tell the framework if the size will be used or not " + "as several important performance optimizations can be made if the " + "size will not be used by the parent.")])));
            }
          }
        }
        result = new box._DebugSize.new(value, this, this.debugCanParentUseSize);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 2001, 12, "() {\n      if (value is _DebugSize) {\n        if (value._owner != this) {\n          if (value._owner.parent != this) {\n            throw FlutterError.fromParts(<DiagnosticsNode>[\n              ErrorSummary('The size property was assigned a size inappropriately.'),\n              describeForError('The following render object'),\n              value._owner.describeForError('...was assigned a size obtained from'),\n              ErrorDescription(\n                'However, this second render object is not, or is no longer, a '\n                'child of the first, and it is therefore a violation of the '\n                'RenderBox layout protocol to use that size in the layout of the '\n                'first render object.'\n              ),\n              ErrorHint(\n                'If the size was obtained at a time where it was valid to read '\n                'the size (because the second render object above was a child '\n                'of the first at the time), then it should be adopted using '\n                'debugAdoptSize at that time.'\n              ),\n              ErrorHint(\n                'If the size comes from a grandchild or a render object from an '\n                'entirely different part of the render tree, then there is no '\n                'way to be notified when the size changes and therefore attempts '\n                'to read that size are almost certainly a source of bugs. A different '\n                'approach should be used.'\n              ),\n            ]);\n          }\n          if (!value._canBeUsedByParent) {\n            throw FlutterError.fromParts(<DiagnosticsNode>[\n              ErrorSummary(\"A child's size was used without setting parentUsesSize.\"),\n              describeForError('The following render object'),\n              value._owner.describeForError('...was assigned a size obtained from its child'),\n              ErrorDescription(\n                'However, when the child was laid out, the parentUsesSize argument '\n                'was not set or set to false. Subsequently this transpired to be '\n                'inaccurate: the size was nonetheless used by the parent.\\n'\n                'It is important to tell the framework if the size will be used or not '\n                'as several important performance optimizations can be made if the '\n                'size will not be used by the parent.'\n              ),\n            ]);\n          }\n        }\n      }\n      result = _DebugSize(value, this, debugCanParentUseSize);\n      return true;\n    }()");
      return result;
    }
    get semanticBounds() {
      return ui.Offset.zero['&'](this.size);
    }
    debugResetSize() {
      this.size = this.size;
    }
    static _debugSetDoingBaseline(value) {
      if (value == null) dart.nullFailed(L6, 2064, 43, "value");
      box.RenderBox._debugDoingBaseline = value;
      return true;
    }
    getDistanceToBaseline(baseline, opts) {
      if (baseline == null) dart.nullFailed(L6, 2085, 46, "baseline");
      let onlyReal = opts && 'onlyReal' in opts ? opts.onlyReal : false;
      if (onlyReal == null) dart.nullFailed(L6, 2085, 63, "onlyReal");
      if (!!dart.test(box.RenderBox._debugDoingBaseline)) dart.assertFailed("Please see the documentation for computeDistanceToActualBaseline for the required calling conventions of this method.", L6, 2086, 12, "!_debugDoingBaseline");
      if (!!dart.test(this.debugNeedsLayout)) dart.assertFailed(null, L6, 2087, 12, "!debugNeedsLayout");
      if (!dart.test(dart.fn(() => {
        let parent = RenderObjectN().as(this.parent);
        if (dart.test(dart.nullCheck(this.owner).debugDoingLayout)) return dart.equals(object$.RenderObject.debugActiveLayout, parent) && dart.test(dart.nullCheck(parent).debugDoingThisLayout);
        if (dart.test(dart.nullCheck(this.owner).debugDoingPaint)) return dart.equals(object$.RenderObject.debugActivePaint, parent) && dart.test(dart.nullCheck(parent).debugDoingThisPaint) || dart.equals(object$.RenderObject.debugActivePaint, this) && dart.test(this.debugDoingThisPaint);
        if (!dart.equals(parent, this.parent)) dart.assertFailed(null, L6, 2095, 14, "parent == this.parent");
        return false;
      }, VoidTobool())())) dart.assertFailed(null, L6, 2088, 12, "() {\n      final RenderObject? parent = this.parent as RenderObject?;\n      if (owner!.debugDoingLayout)\n        return (RenderObject.debugActiveLayout == parent) && parent!.debugDoingThisLayout;\n      if (owner!.debugDoingPaint)\n        return ((RenderObject.debugActivePaint == parent) && parent!.debugDoingThisPaint) ||\n               ((RenderObject.debugActivePaint == this) && debugDoingThisPaint);\n      assert(parent == this.parent);\n      return false;\n    }()");
      if (!dart.test(box.RenderBox._debugSetDoingBaseline(true))) dart.assertFailed(null, L6, 2098, 12, "_debugSetDoingBaseline(true)");
      let result = this.getDistanceToActualBaseline(baseline);
      if (!dart.test(box.RenderBox._debugSetDoingBaseline(false))) dart.assertFailed(null, L6, 2100, 12, "_debugSetDoingBaseline(false)");
      if (result == null && !dart.test(onlyReal)) return this.size.height;
      return result;
    }
    getDistanceToActualBaseline(baseline) {
      if (baseline == null) dart.nullFailed(L6, 2113, 52, "baseline");
      if (!dart.test(box.RenderBox._debugDoingBaseline)) dart.assertFailed("Please see the documentation for computeDistanceToActualBaseline for the required calling conventions of this method.", L6, 2114, 12, "_debugDoingBaseline");
      this[_cachedBaselines] == null ? this[_cachedBaselines] = new (LinkedMapOfTextBaseline$doubleN()).new() : null;
      dart.nullCheck(this[_cachedBaselines])[$putIfAbsent](baseline, dart.fn(() => this.computeDistanceToActualBaseline(baseline), VoidTodoubleN()));
      return dart.nullCheck(this[_cachedBaselines])[$_get](baseline);
    }
    computeDistanceToActualBaseline(baseline) {
      if (baseline == null) dart.nullFailed(L6, 2145, 56, "baseline");
      if (!dart.test(box.RenderBox._debugDoingBaseline)) dart.assertFailed("Please see the documentation for computeDistanceToActualBaseline for the required calling conventions of this method.", L6, 2146, 12, "_debugDoingBaseline");
      return null;
    }
    get constraints() {
      return box.BoxConstraints.as(super.constraints);
    }
    debugAssertDoesMeetConstraints() {
      if (!(this.constraints != null)) dart.assertFailed(null, L6, 2156, 12, "constraints != null");
      if (!dart.test(dart.fn(() => {
        if (!dart.test(this.hasSize)) {
          let contract = null;
          if (dart.test(this.sizedByParent))
            contract = new assertions.ErrorDescription.new("Because this RenderBox has sizedByParent set to true, it must set its size in performResize().");
          else
            contract = new assertions.ErrorDescription.new("Because this RenderBox has sizedByParent set to false, it must set its size in performLayout().");
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("RenderBox did not set its size during layout."), contract, new assertions.ErrorDescription.new("It appears that this did not happen; layout completed, but the size property is still null."), new (DiagnosticsPropertyOfRenderBox()).new("The RenderBox in question is", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
        }
        if (!dart.test(dart.nullCheck(this[_size$]).isFinite)) {
          let information = JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[$runtimeType]) + " object was given an infinite size during layout."), new assertions.ErrorDescription.new("This probably means that it is a render object that tries to be " + "as big as possible, but it was put inside another render object " + "that allows its children to pick their own size.")]);
          if (!dart.test(this.constraints.hasBoundedWidth)) {
            let node = this;
            while (!dart.test(node.constraints.hasBoundedWidth) && box.RenderBox.is(node.parent))
              node = box.RenderBox.as(dart.nullCheck(node.parent));
            information[$add](node.describeForError("The nearest ancestor providing an unbounded width constraint is"));
          }
          if (!dart.test(this.constraints.hasBoundedHeight)) {
            let node = this;
            while (!dart.test(node.constraints.hasBoundedHeight) && box.RenderBox.is(node.parent))
              node = box.RenderBox.as(dart.nullCheck(node.parent));
            information[$add](node.describeForError("The nearest ancestor providing an unbounded height constraint is"));
          }
          dart.throw(new assertions.FlutterError.fromParts((() => {
            let t21 = ListOfDiagnosticsNode().of(information);
            t21[$add](new (DiagnosticsPropertyOfBoxConstraints()).new("The constraints that applied to the " + dart.str(this[$runtimeType]) + " were", this.constraints, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}));
            t21[$add](new (DiagnosticsPropertyOfSize()).new("The exact size it was given was", this[_size$], {style: diagnostics.DiagnosticsTreeStyle.errorProperty}));
            t21[$add](new assertions.ErrorHint.new("See https://flutter.dev/docs/development/ui/layout/box-constraints for more information."));
            return t21;
          })()));
        }
        if (!dart.test(this.constraints.isSatisfiedBy(dart.nullCheck(this[_size$])))) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[$runtimeType]) + " does not meet its constraints."), new (DiagnosticsPropertyOfBoxConstraints()).new("Constraints", this.constraints, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new (DiagnosticsPropertyOfSize()).new("Size", this[_size$], {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new assertions.ErrorHint.new("If you are not writing your own RenderBox subclass, then this is not " + "your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md")])));
        }
        if (dart.test(debug$0.debugCheckIntrinsicSizes)) {
          if (!!dart.test(object$.RenderObject.debugCheckingIntrinsics)) dart.assertFailed(null, L6, 2216, 16, "!RenderObject.debugCheckingIntrinsics");
          object$.RenderObject.debugCheckingIntrinsics = true;
          let failures = JSArrayOfDiagnosticsNode().of([]);
          function testIntrinsic($function, name, constraint) {
            if ($function == null) dart.nullFailed(L6, 2220, 37, "function");
            if (name == null) dart.nullFailed(L6, 2220, 69, "name");
            if (constraint == null) dart.nullFailed(L6, 2220, 82, "constraint");
            let result = $function(constraint);
            if (dart.notNull(result) < 0) {
              failures[$add](new assertions.ErrorDescription.new(" * " + dart.str(name) + "(" + dart.str(constraint) + ") returned a negative value: " + dart.str(result)));
            }
            if (!result[$isFinite]) {
              failures[$add](new assertions.ErrorDescription.new(" * " + dart.str(name) + "(" + dart.str(constraint) + ") returned a non-finite value: " + dart.str(result)));
            }
            return result;
          }
          dart.fn(testIntrinsic, FnAndStringAnddoubleTodouble());
          function testIntrinsicsForValues(getMin, getMax, name, constraint) {
            if (getMin == null) dart.nullFailed(L6, 2231, 45, "getMin");
            if (getMax == null) dart.nullFailed(L6, 2231, 75, "getMax");
            if (name == null) dart.nullFailed(L6, 2231, 105, "name");
            if (constraint == null) dart.nullFailed(L6, 2231, 118, "constraint");
            let min = testIntrinsic(getMin, "getMinIntrinsic" + dart.str(name), constraint);
            let max = testIntrinsic(getMax, "getMaxIntrinsic" + dart.str(name), constraint);
            if (dart.notNull(min) > dart.notNull(max)) {
              failures[$add](new assertions.ErrorDescription.new(" * getMinIntrinsic" + dart.str(name) + "(" + dart.str(constraint) + ") returned a larger value (" + dart.str(min) + ") than getMaxIntrinsic" + dart.str(name) + "(" + dart.str(constraint) + ") (" + dart.str(max) + ")"));
            }
          }
          dart.fn(testIntrinsicsForValues, FnAndFnAndString__Tovoid());
          testIntrinsicsForValues(dart.bind(this, 'getMinIntrinsicWidth'), dart.bind(this, 'getMaxIntrinsicWidth'), "Width", 1 / 0);
          testIntrinsicsForValues(dart.bind(this, 'getMinIntrinsicHeight'), dart.bind(this, 'getMaxIntrinsicHeight'), "Height", 1 / 0);
          if (dart.test(this.constraints.hasBoundedWidth)) testIntrinsicsForValues(dart.bind(this, 'getMinIntrinsicWidth'), dart.bind(this, 'getMaxIntrinsicWidth'), "Width", this.constraints.maxHeight);
          if (dart.test(this.constraints.hasBoundedHeight)) testIntrinsicsForValues(dart.bind(this, 'getMinIntrinsicHeight'), dart.bind(this, 'getMaxIntrinsicHeight'), "Height", this.constraints.maxWidth);
          object$.RenderObject.debugCheckingIntrinsics = false;
          if (dart.test(failures[$isNotEmpty])) {
            dart.throw(new assertions.FlutterError.fromParts((() => {
              let t22 = JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The intrinsic dimension methods of the " + dart.str(this[$runtimeType]) + " class returned values that violate the intrinsic protocol contract."), new assertions.ErrorDescription.new("The following " + (dart.notNull(failures[$length]) > 1 ? "failures" : "failure") + " was detected:")]);
              t22[$addAll](failures);
              t22.push(new assertions.ErrorHint.new("If you are not writing your own RenderBox subclass, then this is not\n" + "your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md"));
              return t22;
            })()));
          }
          box.RenderBox._dryLayoutCalculationValid = true;
          object$.RenderObject.debugCheckingIntrinsics = true;
          let dryLayoutSize = null;
          let dryLayoutSize$35isSet = false;
          function dryLayoutSize$35get() {
            return dryLayoutSize$35isSet ? dryLayoutSize : dart.throw(new _internal.LateError.localNI("dryLayoutSize"));
          }
          dart.fn(dryLayoutSize$35get, VoidToSize());
          function dryLayoutSize$35set(t26) {
            if (t26 == null) dart.nullFailed(L6, 2265, 19, "null");
            dryLayoutSize$35isSet = true;
            return dryLayoutSize = t26;
          }
          dart.fn(dryLayoutSize$35set, SizeTodynamic());
          try {
            dryLayoutSize$35set(this.getDryLayout(this.constraints));
          } finally {
            object$.RenderObject.debugCheckingIntrinsics = false;
          }
          if (dart.test(box.RenderBox._dryLayoutCalculationValid) && !dart.equals(dryLayoutSize$35get(), this.size)) {
            dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The size given to the " + dart.str(object.objectRuntimeType(this, "RenderBox")) + " class differs from the size computed by computeDryLayout."), new assertions.ErrorDescription.new("The size computed in " + (dart.test(this.sizedByParent) ? "performResize" : "performLayout") + " " + "is " + dart.str(this.size) + ", which is different from " + dart.str(dryLayoutSize$35get()) + ", which was computed by computeDryLayout."), new assertions.ErrorDescription.new("The constraints used were " + dart.str(this.constraints) + "."), new assertions.ErrorHint.new("If you are not writing your own RenderBox subclass, then this is not\n" + "your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md")])));
          }
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 2157, 12, "() {\n      if (!hasSize) {\n        final DiagnosticsNode contract;\n        if (sizedByParent)\n          contract = ErrorDescription('Because this RenderBox has sizedByParent set to true, it must set its size in performResize().');\n        else\n          contract = ErrorDescription('Because this RenderBox has sizedByParent set to false, it must set its size in performLayout().');\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('RenderBox did not set its size during layout.'),\n          contract,\n          ErrorDescription('It appears that this did not happen; layout completed, but the size property is still null.'),\n          DiagnosticsProperty<RenderBox>('The RenderBox in question is', this, style: DiagnosticsTreeStyle.errorProperty),\n        ]);\n      }\n      // verify that the size is not infinite\n      if (!_size!.isFinite) {\n        final List<DiagnosticsNode> information = <DiagnosticsNode>[\n          ErrorSummary('$runtimeType object was given an infinite size during layout.'),\n          ErrorDescription(\n            'This probably means that it is a render object that tries to be '\n            'as big as possible, but it was put inside another render object '\n            'that allows its children to pick their own size.'\n          ),\n        ];\n        if (!constraints.hasBoundedWidth) {\n          RenderBox node = this;\n          while (!node.constraints.hasBoundedWidth && node.parent is RenderBox)\n            node = node.parent! as RenderBox;\n\n          information.add(node.describeForError('The nearest ancestor providing an unbounded width constraint is'));\n        }\n        if (!constraints.hasBoundedHeight) {\n          RenderBox node = this;\n          while (!node.constraints.hasBoundedHeight && node.parent is RenderBox)\n            node = node.parent! as RenderBox;\n\n          information.add(node.describeForError('The nearest ancestor providing an unbounded height constraint is'));\n        }\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ...information,\n          DiagnosticsProperty<BoxConstraints>('The constraints that applied to the $runtimeType were', constraints, style: DiagnosticsTreeStyle.errorProperty),\n          DiagnosticsProperty<Size>('The exact size it was given was', _size, style: DiagnosticsTreeStyle.errorProperty),\n          ErrorHint('See https://flutter.dev/docs/development/ui/layout/box-constraints for more information.'),\n        ]);\n     }\n      // verify that the size is within the constraints\n      if (!constraints.isSatisfiedBy(_size!)) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('$runtimeType does not meet its constraints.'),\n          DiagnosticsProperty<BoxConstraints>('Constraints', constraints, style: DiagnosticsTreeStyle.errorProperty),\n          DiagnosticsProperty<Size>('Size', _size, style: DiagnosticsTreeStyle.errorProperty),\n          ErrorHint(\n            'If you are not writing your own RenderBox subclass, then this is not '\n            'your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md'\n          ),\n        ]);\n      }\n      if (debugCheckIntrinsicSizes) {\n        // verify that the intrinsics are sane\n        assert(!RenderObject.debugCheckingIntrinsics);\n        RenderObject.debugCheckingIntrinsics = true;\n        final List<DiagnosticsNode> failures = <DiagnosticsNode>[];\n\n        double testIntrinsic(double function(double extent), String name, double constraint) {\n          final double result = function(constraint);\n          if (result < 0) {\n            failures.add(ErrorDescription(' * $name($constraint) returned a negative value: $result'));\n          }\n          if (!result.isFinite) {\n            failures.add(ErrorDescription(' * $name($constraint) returned a non-finite value: $result'));\n          }\n          return result;\n        }\n\n        void testIntrinsicsForValues(double getMin(double extent), double getMax(double extent), String name, double constraint) {\n          final double min = testIntrinsic(getMin, 'getMinIntrinsic$name', constraint);\n          final double max = testIntrinsic(getMax, 'getMaxIntrinsic$name', constraint);\n          if (min > max) {\n            failures.add(ErrorDescription(' * getMinIntrinsic$name($constraint) returned a larger value ($min) than getMaxIntrinsic$name($constraint) ($max)'));\n          }\n        }\n\n        testIntrinsicsForValues(getMinIntrinsicWidth, getMaxIntrinsicWidth, 'Width', double.infinity);\n        testIntrinsicsForValues(getMinIntrinsicHeight, getMaxIntrinsicHeight, 'Height', double.infinity);\n        if (constraints.hasBoundedWidth)\n          testIntrinsicsForValues(getMinIntrinsicWidth, getMaxIntrinsicWidth, 'Width', constraints.maxHeight);\n        if (constraints.hasBoundedHeight)\n          testIntrinsicsForValues(getMinIntrinsicHeight, getMaxIntrinsicHeight, 'Height', constraints.maxWidth);\n\n        // TODO(ianh): Test that values are internally consistent in more ways than the above.\n\n        RenderObject.debugCheckingIntrinsics = false;\n        if (failures.isNotEmpty) {\n          // TODO(jacobr): consider nesting the failures object so it is collapsible.\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('The intrinsic dimension methods of the $runtimeType class returned values that violate the intrinsic protocol contract.'),\n            ErrorDescription('The following ${failures.length > 1 ? \"failures\" : \"failure\"} was detected:'), // should this be tagged as an error or not?\n            ...failures,\n            ErrorHint(\n              'If you are not writing your own RenderBox subclass, then this is not\\n'\n              'your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md'\n            ),\n          ]);\n        }\n\n        // Checking that getDryLayout computes the same size.\n        _dryLayoutCalculationValid = true;\n        RenderObject.debugCheckingIntrinsics = true;\n        late Size dryLayoutSize;\n        try {\n          dryLayoutSize = getDryLayout(constraints);\n        } finally {\n          RenderObject.debugCheckingIntrinsics = false;\n        }\n        if (_dryLayoutCalculationValid && dryLayoutSize != size) {\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('The size given to the ${objectRuntimeType(this, 'RenderBox')} class differs from the size computed by computeDryLayout.'),\n            ErrorDescription(\n              'The size computed in ${sizedByParent ? 'performResize' : 'performLayout'} '\n              'is $size, which is different from $dryLayoutSize, which was computed by computeDryLayout.'\n            ),\n            ErrorDescription(\n              'The constraints used were $constraints.',\n            ),\n            ErrorHint(\n              'If you are not writing your own RenderBox subclass, then this is not\\n'\n              'your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md'\n            ),\n          ]);\n        }\n      }\n      return true;\n    }()");
    }
    markNeedsLayout() {
      let t28, t28$, t28$0;
      if (this[_cachedBaselines] != null && dart.test(dart.nullCheck(this[_cachedBaselines])[$isNotEmpty]) || this[_cachedIntrinsicDimensions] != null && dart.test(dart.nullCheck(this[_cachedIntrinsicDimensions])[$isNotEmpty]) || this[_cachedDryLayoutSizes] != null && dart.test(dart.nullCheck(this[_cachedDryLayoutSizes])[$isNotEmpty])) {
        t28 = this[_cachedBaselines];
        t28 == null ? null : t28[$clear]();
        t28$ = this[_cachedIntrinsicDimensions];
        t28$ == null ? null : t28$[$clear]();
        t28$0 = this[_cachedDryLayoutSizes];
        t28$0 == null ? null : t28$0[$clear]();
        if (object$.RenderObject.is(this.parent)) {
          this.markParentNeedsLayout();
          return;
        }
      }
      super.markNeedsLayout();
    }
    performResize() {
      this.size = this.computeDryLayout(this.constraints);
      if (!dart.test(this.size.isFinite)) dart.assertFailed(null, L6, 2322, 12, "size.isFinite");
    }
    performLayout() {
      if (!dart.test(dart.fn(() => {
        if (!dart.test(this.sizedByParent)) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[$runtimeType]) + " did not implement performLayout()."), new assertions.ErrorHint.new("RenderBox subclasses need to either override performLayout() to " + "set a size and lay out any children, or, set sizedByParent to true " + "so that performResize() sizes the render object.")])));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 2327, 12, "() {\n      if (!sizedByParent) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('$runtimeType did not implement performLayout().'),\n          ErrorHint(\n            'RenderBox subclasses need to either override performLayout() to '\n            'set a size and lay out any children, or, set sizedByParent to true '\n            'so that performResize() sizes the render object.'\n          ),\n        ]);\n      }\n      return true;\n    }()");
    }
    hitTest(result, opts) {
      if (result == null) dart.nullFailed(L6, 2366, 33, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L6, 2366, 59, "position");
      if (!dart.test(dart.fn(() => {
        if (!dart.test(this.hasSize)) {
          if (dart.test(this.debugNeedsLayout)) {
            dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Cannot hit test a render box that has never been laid out."), this.describeForError("The hitTest() method was called on this RenderBox"), new assertions.ErrorDescription.new("Unfortunately, this object's geometry is not known at this time, " + "probably because it has never been laid out. " + "This means it cannot be accurately hit-tested."), new assertions.ErrorHint.new("If you are trying " + "to perform a hit test during the layout phase itself, make sure " + "you only hit test nodes that have completed layout (e.g. the node's " + "children, after their layout() method has been called).")])));
          }
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Cannot hit test a render box with no size."), this.describeForError("The hitTest() method was called on this RenderBox"), new assertions.ErrorDescription.new("Although this node is not marked as needing layout, " + "its size is not set."), new assertions.ErrorHint.new("A RenderBox object must have an " + "explicit size before it can be hit-tested. Make sure " + "that the RenderBox in question sets its size during layout.")])));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 2367, 12, "() {\n      if (!hasSize) {\n        if (debugNeedsLayout) {\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('Cannot hit test a render box that has never been laid out.'),\n            describeForError('The hitTest() method was called on this RenderBox'),\n            ErrorDescription(\n              \"Unfortunately, this object's geometry is not known at this time, \"\n              'probably because it has never been laid out. '\n              'This means it cannot be accurately hit-tested.'\n            ),\n            ErrorHint(\n              'If you are trying '\n              'to perform a hit test during the layout phase itself, make sure '\n              \"you only hit test nodes that have completed layout (e.g. the node's \"\n              'children, after their layout() method has been called).'\n            ),\n          ]);\n        }\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('Cannot hit test a render box with no size.'),\n          describeForError('The hitTest() method was called on this RenderBox'),\n          ErrorDescription(\n            'Although this node is not marked as needing layout, '\n            'its size is not set.'\n          ),\n          ErrorHint(\n            'A RenderBox object must have an '\n            'explicit size before it can be hit-tested. Make sure '\n            'that the RenderBox in question sets its size during layout.'\n          ),\n        ]);\n      }\n      return true;\n    }()");
      if (dart.test(dart.nullCheck(this[_size$]).contains(position))) {
        if (dart.test(this.hitTestChildren(result, {position: position})) || dart.test(this.hitTestSelf(position))) {
          result.add(new box.BoxHitTestEntry.new(this, position));
          return true;
        }
      }
      return false;
    }
    hitTestSelf(position) {
      if (position == null) dart.nullFailed(L6, 2425, 27, "position");
      return false;
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L6, 2451, 41, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L6, 2451, 67, "position");
      return false;
    }
    applyPaintTransform(child, transform) {
      object$.RenderObject.as(child);
      if (child == null) dart.nullFailed(L6, 2464, 41, "child");
      if (transform == null) dart.nullFailed(L6, 2464, 56, "transform");
      if (!(child != null)) dart.assertFailed(null, L6, 2465, 12, "child != null");
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, L6, 2466, 12, "child.parent == this");
      if (!dart.test(dart.fn(() => {
        if (!box.BoxParentData.is(child.parentData)) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[$runtimeType]) + " does not implement applyPaintTransform."), this.describeForError("The following " + dart.str(this[$runtimeType]) + " object"), child.describeForError("...did not use a BoxParentData class for the parentData field of the following child"), new assertions.ErrorDescription.new("The " + dart.str(this[$runtimeType]) + " class inherits from RenderBox."), new assertions.ErrorHint.new("The default applyPaintTransform implementation provided by RenderBox assumes that the " + "children all use BoxParentData objects for their parentData field. " + "Since " + dart.str(this[$runtimeType]) + " does not in fact use that ParentData class for its children, it must " + "provide an implementation of applyPaintTransform that supports the specific ParentData " + "subclass used by its children (which apparently is " + dart.str(dart.runtimeType(child.parentData)) + ").")])));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 2467, 12, "() {\n      if (child.parentData is! BoxParentData) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('$runtimeType does not implement applyPaintTransform.'),\n          describeForError('The following $runtimeType object'),\n          child.describeForError('...did not use a BoxParentData class for the parentData field of the following child'),\n          ErrorDescription('The $runtimeType class inherits from RenderBox.'),\n          ErrorHint(\n            'The default applyPaintTransform implementation provided by RenderBox assumes that the '\n            'children all use BoxParentData objects for their parentData field. '\n            'Since $runtimeType does not in fact use that ParentData class for its children, it must '\n            'provide an implementation of applyPaintTransform that supports the specific ParentData '\n            'subclass used by its children (which apparently is ${child.parentData.runtimeType}).'\n          ),\n        ]);\n      }\n      return true;\n    }()");
      let childParentData = box.BoxParentData.as(dart.nullCheck(child.parentData));
      let offset = childParentData.offset;
      transform.translate(offset.dx, offset.dy);
    }
    globalToLocal(point, opts) {
      if (point == null) dart.nullFailed(L6, 2504, 31, "point");
      let ancestor = opts && 'ancestor' in opts ? opts.ancestor : null;
      let transform = this.getTransformTo(ancestor);
      let det = transform.invert();
      if (det === 0.0) return ui.Offset.zero;
      let n = vector_math_64.Vector3.new(0.0, 0.0, 1.0);
      let i = transform.perspectiveTransform(vector_math_64.Vector3.new(0.0, 0.0, 0.0));
      let d = transform.perspectiveTransform(vector_math_64.Vector3.new(0.0, 0.0, 1.0))['-'](i);
      let s = transform.perspectiveTransform(vector_math_64.Vector3.new(point.dx, point.dy, 0.0));
      let p = s['-'](d['*'](dart.notNull(n.dot(s)) / dart.notNull(n.dot(d))));
      return new ui.Offset.new(p.x, p.y);
    }
    localToGlobal(point, opts) {
      if (point == null) dart.nullFailed(L6, 2539, 31, "point");
      let ancestor = opts && 'ancestor' in opts ? opts.ancestor : null;
      return matrix_utils.MatrixUtils.transformPoint(this.getTransformTo(ancestor), point);
    }
    get paintBounds() {
      return ui.Offset.zero['&'](this.size);
    }
    handleEvent(event, entry) {
      if (event == null) dart.nullFailed(L6, 2576, 33, "event");
      box.BoxHitTestEntry.as(entry);
      if (entry == null) dart.nullFailed(L6, 2576, 56, "entry");
      super.handleEvent(event, entry);
    }
    debugHandleEvent(event, entry) {
      if (event == null) dart.nullFailed(L6, 2597, 38, "event");
      if (entry == null) dart.nullFailed(L6, 2597, 58, "entry");
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug$0.debugPaintPointersEnabled)) {
          if (events.PointerDownEvent.is(event)) {
            this[_debugActivePointers] = dart.notNull(this[_debugActivePointers]) + 1;
          } else if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) {
            this[_debugActivePointers] = dart.notNull(this[_debugActivePointers]) - 1;
          }
          this.markNeedsPaint();
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 2598, 12, "() {\n      if (debugPaintPointersEnabled) {\n        if (event is PointerDownEvent) {\n          _debugActivePointers += 1;\n        } else if (event is PointerUpEvent || event is PointerCancelEvent) {\n          _debugActivePointers -= 1;\n        }\n        markNeedsPaint();\n      }\n      return true;\n    }()");
      return true;
    }
    debugPaint(context, offset) {
      if (context == null) dart.nullFailed(L6, 2613, 35, "context");
      if (offset == null) dart.nullFailed(L6, 2613, 51, "offset");
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug$0.debugPaintSizeEnabled)) this.debugPaintSize(context, offset);
        if (dart.test(debug$0.debugPaintBaselinesEnabled)) this.debugPaintBaselines(context, offset);
        if (dart.test(debug$0.debugPaintPointersEnabled)) this.debugPaintPointers(context, offset);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 2614, 12, "() {\n      if (debugPaintSizeEnabled)\n        debugPaintSize(context, offset);\n      if (debugPaintBaselinesEnabled)\n        debugPaintBaselines(context, offset);\n      if (debugPaintPointersEnabled)\n        debugPaintPointers(context, offset);\n      return true;\n    }()");
    }
    debugPaintSize(context, offset) {
      if (context == null) dart.nullFailed(L6, 2629, 39, "context");
      if (offset == null) dart.nullFailed(L6, 2629, 55, "offset");
      if (!dart.test(dart.fn(() => {
        let t28;
        let paint = (t28 = ui.Paint.new(), (() => {
          t28.style = ui.PaintingStyle.stroke;
          t28.strokeWidth = 1.0;
          t28.color = C19 || CT.C19;
          return t28;
        })());
        context.canvas.drawRect(offset['&'](this.size).deflate(0.5), paint);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 2630, 12, "() {\n      final Paint paint = Paint()\n       ..style = PaintingStyle.stroke\n       ..strokeWidth = 1.0\n       ..color = const Color(0xFF00FFFF);\n      context.canvas.drawRect((offset & size).deflate(0.5), paint);\n      return true;\n    }()");
    }
    debugPaintBaselines(context, offset) {
      if (context == null) dart.nullFailed(L6, 2644, 44, "context");
      if (offset == null) dart.nullFailed(L6, 2644, 60, "offset");
      if (!dart.test(dart.fn(() => {
        let t28;
        let paint = (t28 = ui.Paint.new(), (() => {
          t28.style = ui.PaintingStyle.stroke;
          t28.strokeWidth = 0.25;
          return t28;
        })());
        let path = null;
        let baselineI = this.getDistanceToBaseline(ui.TextBaseline.ideographic, {onlyReal: true});
        if (baselineI != null) {
          paint.color = C20 || CT.C20;
          path = ui.Path.new();
          path.moveTo(offset.dx, dart.notNull(offset.dy) + dart.notNull(baselineI));
          path.lineTo(dart.notNull(offset.dx) + dart.notNull(this.size.width), dart.notNull(offset.dy) + dart.notNull(baselineI));
          context.canvas.drawPath(path, paint);
        }
        let baselineA = this.getDistanceToBaseline(ui.TextBaseline.alphabetic, {onlyReal: true});
        if (baselineA != null) {
          paint.color = C21 || CT.C21;
          path = ui.Path.new();
          path.moveTo(offset.dx, dart.notNull(offset.dy) + dart.notNull(baselineA));
          path.lineTo(dart.notNull(offset.dx) + dart.notNull(this.size.width), dart.notNull(offset.dy) + dart.notNull(baselineA));
          context.canvas.drawPath(path, paint);
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 2645, 12, "() {\n      final Paint paint = Paint()\n       ..style = PaintingStyle.stroke\n       ..strokeWidth = 0.25;\n      Path path;\n      // ideographic baseline\n      final double? baselineI = getDistanceToBaseline(TextBaseline.ideographic, onlyReal: true);\n      if (baselineI != null) {\n        paint.color = const Color(0xFFFFD000);\n        path = Path();\n        path.moveTo(offset.dx, offset.dy + baselineI);\n        path.lineTo(offset.dx + size.width, offset.dy + baselineI);\n        context.canvas.drawPath(path, paint);\n      }\n      // alphabetic baseline\n      final double? baselineA = getDistanceToBaseline(TextBaseline.alphabetic, onlyReal: true);\n      if (baselineA != null) {\n        paint.color = const Color(0xFF00FF00);\n        path = Path();\n        path.moveTo(offset.dx, offset.dy + baselineA);\n        path.lineTo(offset.dx + size.width, offset.dy + baselineA);\n        context.canvas.drawPath(path, paint);\n      }\n      return true;\n    }()");
    }
    debugPaintPointers(context, offset) {
      if (context == null) dart.nullFailed(L6, 2680, 43, "context");
      if (offset == null) dart.nullFailed(L6, 2680, 59, "offset");
      if (!dart.test(dart.fn(() => {
        let t28;
        if (dart.notNull(this[_debugActivePointers]) > 0) {
          let paint = (t28 = ui.Paint.new(), (() => {
            t28.color = new ui.Color.new((48059 | (67108864 * dart.notNull(this.depth) & 4278190080) >>> 0) >>> 0);
            return t28;
          })());
          context.canvas.drawRect(offset['&'](this.size), paint);
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 2681, 12, "() {\n      if (_debugActivePointers > 0) {\n        final Paint paint = Paint()\n         ..color = Color(0x00BBBB | ((0x04000000 * depth) & 0xFF000000));\n        context.canvas.drawRect(offset & size, paint);\n      }\n      return true;\n    }()");
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L6, 2692, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfSize()).new("size", this[_size$], {missingIfNull: true}));
    }
  };
  (box.RenderBox.new = function() {
    this[_cachedIntrinsicDimensions] = null;
    this[_cachedDryLayoutSizes] = null;
    this[_computingThisDryLayout] = false;
    this[_size$] = null;
    this[_cachedBaselines] = null;
    this[_debugActivePointers] = 0;
    box.RenderBox.__proto__.new.call(this);
    ;
  }).prototype = box.RenderBox.prototype;
  dart.addTypeTests(box.RenderBox);
  dart.addTypeCaches(box.RenderBox);
  dart.setMethodSignature(box.RenderBox, () => ({
    __proto__: dart.getMethods(box.RenderBox.__proto__),
    [_computeIntrinsicDimension]: dart.fnType(core.double, [box._IntrinsicDimension, core.double, dart.fnType(core.double, [core.double])]),
    getMinIntrinsicWidth: dart.fnType(core.double, [core.double]),
    computeMinIntrinsicWidth: dart.fnType(core.double, [core.double]),
    getMaxIntrinsicWidth: dart.fnType(core.double, [core.double]),
    computeMaxIntrinsicWidth: dart.fnType(core.double, [core.double]),
    getMinIntrinsicHeight: dart.fnType(core.double, [core.double]),
    computeMinIntrinsicHeight: dart.fnType(core.double, [core.double]),
    getMaxIntrinsicHeight: dart.fnType(core.double, [core.double]),
    computeMaxIntrinsicHeight: dart.fnType(core.double, [core.double]),
    getDryLayout: dart.fnType(ui.Size, [box.BoxConstraints]),
    [_computeDryLayout]: dart.fnType(ui.Size, [box.BoxConstraints]),
    computeDryLayout: dart.fnType(ui.Size, [box.BoxConstraints]),
    debugCannotComputeDryLayout: dart.fnType(core.bool, [], {error: dart.nullable(assertions.FlutterError), reason: dart.nullable(core.String)}, {}),
    debugAdoptSize: dart.fnType(ui.Size, [ui.Size]),
    getDistanceToBaseline: dart.fnType(dart.nullable(core.double), [ui.TextBaseline], {onlyReal: core.bool}, {}),
    getDistanceToActualBaseline: dart.fnType(dart.nullable(core.double), [ui.TextBaseline]),
    computeDistanceToActualBaseline: dart.fnType(dart.nullable(core.double), [ui.TextBaseline]),
    debugAssertDoesMeetConstraints: dart.fnType(dart.void, []),
    performResize: dart.fnType(dart.void, []),
    performLayout: dart.fnType(dart.void, []),
    hitTest: dart.fnType(core.bool, [box.BoxHitTestResult], {}, {position: ui.Offset}),
    hitTestSelf: dart.fnType(core.bool, [ui.Offset]),
    hitTestChildren: dart.fnType(core.bool, [box.BoxHitTestResult], {}, {position: ui.Offset}),
    globalToLocal: dart.fnType(ui.Offset, [ui.Offset], {ancestor: dart.nullable(object$.RenderObject)}, {}),
    localToGlobal: dart.fnType(ui.Offset, [ui.Offset], {ancestor: dart.nullable(object$.RenderObject)}, {}),
    debugHandleEvent: dart.fnType(core.bool, [events.PointerEvent, hit_test.HitTestEntry]),
    debugPaintSize: dart.fnType(dart.void, [object$.PaintingContext, ui.Offset]),
    debugPaintBaselines: dart.fnType(dart.void, [object$.PaintingContext, ui.Offset]),
    debugPaintPointers: dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])
  }));
  dart.setGetterSignature(box.RenderBox, () => ({
    __proto__: dart.getGetters(box.RenderBox.__proto__),
    hasSize: core.bool,
    size: ui.Size,
    semanticBounds: ui.Rect,
    constraints: box.BoxConstraints,
    paintBounds: ui.Rect
  }));
  dart.setSetterSignature(box.RenderBox, () => ({
    __proto__: dart.getSetters(box.RenderBox.__proto__),
    size: ui.Size
  }));
  dart.setLibraryUri(box.RenderBox, L7);
  dart.setFieldSignature(box.RenderBox, () => ({
    __proto__: dart.getFields(box.RenderBox.__proto__),
    [_cachedIntrinsicDimensions]: dart.fieldType(dart.nullable(core.Map$(box._IntrinsicDimensionsCacheEntry, core.double))),
    [_cachedDryLayoutSizes]: dart.fieldType(dart.nullable(core.Map$(box.BoxConstraints, ui.Size))),
    [_computingThisDryLayout]: dart.fieldType(core.bool),
    [_size$]: dart.fieldType(dart.nullable(ui.Size)),
    [_cachedBaselines]: dart.fieldType(dart.nullable(core.Map$(ui.TextBaseline, dart.nullable(core.double)))),
    [_debugActivePointers]: dart.fieldType(core.int)
  }));
  dart.defineLazy(box.RenderBox, {
    /*box.RenderBox._dryLayoutCalculationValid*/get _dryLayoutCalculationValid() {
      return true;
    },
    set _dryLayoutCalculationValid(_) {},
    /*box.RenderBox._debugDoingBaseline*/get _debugDoingBaseline() {
      return false;
    },
    set _debugDoingBaseline(_) {}
  }, false);
  var automaticSystemUiAdjustment = dart.privateName(view, "RenderView.automaticSystemUiAdjustment");
  const RenderObject_RenderObjectWithChildMixin$36 = class RenderObject_RenderObjectWithChildMixin extends object$.RenderObject {};
  (RenderObject_RenderObjectWithChildMixin$36.new = function() {
    object$.RenderObjectWithChildMixin$(box.RenderBox)[dart.mixinNew].call(this);
    RenderObject_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderObject_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderObject_RenderObjectWithChildMixin$36, object$.RenderObjectWithChildMixin$(box.RenderBox));
  view.RenderView = class RenderView extends RenderObject_RenderObjectWithChildMixin$36 {
    get automaticSystemUiAdjustment() {
      return this[automaticSystemUiAdjustment];
    }
    set automaticSystemUiAdjustment(value) {
      this[automaticSystemUiAdjustment] = value;
    }
    get size() {
      return this[_size];
    }
    get configuration() {
      return this[_configuration];
    }
    set configuration(value) {
      if (value == null) dart.nullFailed(L2, 78, 39, "value");
      if (!(value != null)) dart.assertFailed(null, L2, 79, 12, "value != null");
      if (dart.equals(this.configuration, value)) return;
      this[_configuration] = value;
      this.replaceRootLayer(this[_updateMatricesAndCreateNewRootLayer]());
      if (!(this[_rootTransform] != null)) dart.assertFailed(null, L2, 84, 12, "_rootTransform != null");
      this.markNeedsLayout();
    }
    scheduleInitialFrame() {
      this.prepareInitialFrame();
      dart.nullCheck(this.owner).requestVisualUpdate();
    }
    prepareInitialFrame() {
      if (!(this.owner != null)) dart.assertFailed(null, L2, 133, 12, "owner != null");
      if (!(this[_rootTransform] == null)) dart.assertFailed(null, L2, 134, 12, "_rootTransform == null");
      this.scheduleInitialLayout();
      this.scheduleInitialPaint(this[_updateMatricesAndCreateNewRootLayer]());
      if (!(this[_rootTransform] != null)) dart.assertFailed(null, L2, 137, 12, "_rootTransform != null");
    }
    [_updateMatricesAndCreateNewRootLayer]() {
      this[_rootTransform] = this.configuration.toMatrix();
      let rootLayer = new layer$.TransformLayer.new({transform: this[_rootTransform]});
      rootLayer.attach(this);
      if (!(this[_rootTransform] != null)) dart.assertFailed(null, L2, 146, 12, "_rootTransform != null");
      return rootLayer;
    }
    debugAssertDoesMeetConstraints() {
      if (!false) dart.assertFailed(null, L2, 153, 50, "false");
    }
    performResize() {
      if (!false) dart.assertFailed(null, L2, 157, 12, "false");
    }
    performLayout() {
      if (!(this[_rootTransform] != null)) dart.assertFailed(null, L2, 162, 12, "_rootTransform != null");
      this[_size] = this.configuration.size;
      if (!dart.test(this[_size].isFinite)) dart.assertFailed(null, L2, 164, 12, "_size.isFinite");
      if (this.child != null) dart.nullCheck(this.child).layout(new box.BoxConstraints.tight(this[_size]));
    }
    rotate(opts) {
      let oldAngle = opts && 'oldAngle' in opts ? opts.oldAngle : null;
      let newAngle = opts && 'newAngle' in opts ? opts.newAngle : null;
      let time = opts && 'time' in opts ? opts.time : null;
      if (!false) dart.assertFailed(null, L2, 172, 12, "false");
    }
    hitTest(result, opts) {
      if (result == null) dart.nullFailed(L2, 185, 30, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L2, 185, 56, "position");
      if (this.child != null) dart.nullCheck(this.child).hitTest(new box.BoxHitTestResult.wrap(result), {position: position});
      result.add(new hit_test.HitTestEntry.new(this));
      return true;
    }
    hitTestMouseTrackers(position) {
      if (position == null) dart.nullFailed(L2, 198, 45, "position");
      if (!(position != null)) dart.assertFailed(null, L2, 199, 12, "position != null");
      let result = new box.BoxHitTestResult.new();
      this.hitTest(result, {position: position});
      return result;
    }
    get isRepaintBoundary() {
      return true;
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L2, 212, 30, "context");
      if (offset == null) dart.nullFailed(L2, 212, 46, "offset");
      if (this.child != null) context.paintChild(dart.nullCheck(this.child), offset);
    }
    applyPaintTransform(child, transform) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L2, 218, 38, "child");
      if (transform == null) dart.nullFailed(L2, 218, 53, "transform");
      if (!(this[_rootTransform] != null)) dart.assertFailed(null, L2, 219, 12, "_rootTransform != null");
      transform.multiply(dart.nullCheck(this[_rootTransform]));
      super.applyPaintTransform(child, transform);
    }
    compositeFrame() {
      developer.Timeline.startSync("Compositing", {arguments: debug.timelineArgumentsIndicatingLandmarkEvent});
      try {
        let builder = ui.SceneBuilder.new();
        let scene = dart.nullCheck(this.layer).buildScene(builder);
        if (dart.test(this.automaticSystemUiAdjustment)) this[_updateSystemChrome]();
        this[_window].render(scene);
        scene.dispose();
        if (!dart.test(dart.fn(() => {
          if (dart.test(debug$0.debugRepaintRainbowEnabled) || dart.test(debug$0.debugRepaintTextRainbowEnabled)) debug$0.debugCurrentRepaintColor = debug$0.debugCurrentRepaintColor.withHue((dart.notNull(debug$0.debugCurrentRepaintColor.hue) + 2.0)[$modulo](360.0));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L2, 236, 14, "() {\n        if (debugRepaintRainbowEnabled || debugRepaintTextRainbowEnabled)\n          debugCurrentRepaintColor = debugCurrentRepaintColor.withHue((debugCurrentRepaintColor.hue + 2.0) % 360.0);\n        return true;\n      }()");
      } finally {
        developer.Timeline.finishSync();
      }
    }
    [_updateSystemChrome]() {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let bounds = this.paintBounds;
      let top = new ui.Offset.new(bounds.center.dx, dart.notNull(this[_window].padding.top) / 2.0);
      let bottom = new ui.Offset.new(bounds.center.dx, dart.notNull(bounds.bottom) - 1.0 - dart.notNull(this[_window].padding.bottom) / 2.0);
      let upperOverlayStyle = dart.nullCheck(this.layer).find(system_chrome.SystemUiOverlayStyle, top);
      let lowerOverlayStyle = null;
      switch (platform.defaultTargetPlatform) {
        case C7 || CT.C7:
        {
          lowerOverlayStyle = dart.nullCheck(this.layer).find(system_chrome.SystemUiOverlayStyle, bottom);
          break;
        }
        case C8 || CT.C8:
        case C9 || CT.C9:
        case C10 || CT.C10:
        case C11 || CT.C11:
        case C12 || CT.C12:
        {
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      if (upperOverlayStyle != null || lowerOverlayStyle != null) {
        let overlayStyle = new system_chrome.SystemUiOverlayStyle.new({statusBarBrightness: (t0 = upperOverlayStyle, t0 == null ? null : t0.statusBarBrightness), statusBarIconBrightness: (t0$ = upperOverlayStyle, t0$ == null ? null : t0$.statusBarIconBrightness), statusBarColor: (t0$0 = upperOverlayStyle, t0$0 == null ? null : t0$0.statusBarColor), systemNavigationBarColor: (t0$1 = lowerOverlayStyle, t0$1 == null ? null : t0$1.systemNavigationBarColor), systemNavigationBarDividerColor: (t0$2 = lowerOverlayStyle, t0$2 == null ? null : t0$2.systemNavigationBarDividerColor), systemNavigationBarIconBrightness: (t0$3 = lowerOverlayStyle, t0$3 == null ? null : t0$3.systemNavigationBarIconBrightness)});
        system_chrome.SystemChrome.setSystemUIOverlayStyle(overlayStyle);
      }
    }
    get paintBounds() {
      return ui.Offset.zero['&'](this.size['*'](this.configuration.devicePixelRatio));
    }
    get semanticBounds() {
      if (!(this[_rootTransform] != null)) dart.assertFailed(null, L2, 321, 12, "_rootTransform != null");
      return matrix_utils.MatrixUtils.transformRect(dart.nullCheck(this[_rootTransform]), ui.Offset.zero['&'](this.size));
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L2, 326, 56, "properties");
      if (!dart.test(dart.fn(() => {
        properties.add(diagnostics.DiagnosticsNode.message("debug mode enabled - " + dart.str(true ? "Web" : io.Platform.operatingSystem)));
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L2, 330, 12, "() {\n      properties.add(DiagnosticsNode.message('debug mode enabled - ${kIsWeb ? 'Web' :  Platform.operatingSystem}'));\n      return true;\n    }()");
      properties.add(new (DiagnosticsPropertyOfSize()).new("window size", this[_window].physicalSize, {tooltip: "in physical pixels"}));
      properties.add(new diagnostics.DoubleProperty.new("device pixel ratio", this[_window].devicePixelRatio, {tooltip: "physical pixels per logical pixel"}));
      properties.add(new (DiagnosticsPropertyOfViewConfiguration()).new("configuration", this.configuration, {tooltip: "in logical pixels"}));
      if (dart.test(this[_window].platformDispatcher.semanticsEnabled)) properties.add(diagnostics.DiagnosticsNode.message("semantics enabled"));
    }
  };
  (view.RenderView.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let configuration = opts && 'configuration' in opts ? opts.configuration : null;
    if (configuration == null) dart.nullFailed(L2, 59, 32, "configuration");
    let window = opts && 'window' in opts ? opts.window : null;
    if (window == null) dart.nullFailed(L2, 60, 29, "window");
    this[_size] = ui.Size.zero;
    this[automaticSystemUiAdjustment] = true;
    this[_rootTransform] = null;
    if (!(configuration != null)) dart.assertFailed(null, L2, 61, 15, "configuration != null");
    this[_configuration] = configuration;
    this[_window] = window;
    view.RenderView.__proto__.new.call(this);
    this.child = child;
  }).prototype = view.RenderView.prototype;
  dart.addTypeTests(view.RenderView);
  dart.addTypeCaches(view.RenderView);
  dart.setMethodSignature(view.RenderView, () => ({
    __proto__: dart.getMethods(view.RenderView.__proto__),
    scheduleInitialFrame: dart.fnType(dart.void, []),
    prepareInitialFrame: dart.fnType(dart.void, []),
    [_updateMatricesAndCreateNewRootLayer]: dart.fnType(layer$.TransformLayer, []),
    debugAssertDoesMeetConstraints: dart.fnType(dart.void, []),
    performResize: dart.fnType(dart.void, []),
    performLayout: dart.fnType(dart.void, []),
    hitTest: dart.fnType(core.bool, [hit_test.HitTestResult], {}, {position: ui.Offset}),
    hitTestMouseTrackers: dart.fnType(hit_test.HitTestResult, [ui.Offset]),
    compositeFrame: dart.fnType(dart.void, []),
    [_updateSystemChrome]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(view.RenderView, () => ({
    __proto__: dart.getGetters(view.RenderView.__proto__),
    size: ui.Size,
    configuration: view.ViewConfiguration,
    paintBounds: ui.Rect,
    semanticBounds: ui.Rect
  }));
  dart.setSetterSignature(view.RenderView, () => ({
    __proto__: dart.getSetters(view.RenderView.__proto__),
    configuration: view.ViewConfiguration
  }));
  dart.setLibraryUri(view.RenderView, L3);
  dart.setFieldSignature(view.RenderView, () => ({
    __proto__: dart.getFields(view.RenderView.__proto__),
    [_size]: dart.fieldType(ui.Size),
    [_configuration]: dart.fieldType(view.ViewConfiguration),
    [_window]: dart.finalFieldType(ui.FlutterView),
    automaticSystemUiAdjustment: dart.fieldType(core.bool),
    [_rootTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4))
  }));
  var _lastSession = dart.privateName(mouse_cursor, "_lastSession");
  var _handleDeviceUpdateMouseCursor = dart.privateName(mouse_cursor, "_handleDeviceUpdateMouseCursor");
  var _findFirstCursor = dart.privateName(mouse_cursor, "_findFirstCursor");
  var _mouseStates = dart.privateName(mouse_tracking, "_mouseStates");
  var _debugDuringDeviceUpdate = dart.privateName(mouse_tracking, "_debugDuringDeviceUpdate");
  var _monitorMouseConnection = dart.privateName(mouse_tracking, "_monitorMouseConnection");
  var _deviceUpdatePhase = dart.privateName(mouse_tracking, "_deviceUpdatePhase");
  var _hitTestResultToAnnotations = dart.privateName(mouse_tracking, "_hitTestResultToAnnotations");
  var _findAnnotations = dart.privateName(mouse_tracking, "_findAnnotations");
  mouse_tracking.BaseMouseTracker = class BaseMouseTracker extends change_notifier.ChangeNotifier {
    get mouseIsConnected() {
      return this[_mouseStates][$isNotEmpty];
    }
    [_monitorMouseConnection](task) {
      if (task == null) dart.nullFailed(L9, 298, 45, "task");
      let mouseWasConnected = this.mouseIsConnected;
      task();
      if (!dart.equals(mouseWasConnected, this.mouseIsConnected)) this.notifyListeners();
    }
    [_deviceUpdatePhase](task) {
      if (task == null) dart.nullFailed(L9, 310, 40, "task");
      if (!!dart.test(this[_debugDuringDeviceUpdate])) dart.assertFailed(null, L9, 311, 12, "!_debugDuringDeviceUpdate");
      if (!dart.test(dart.fn(() => {
        this[_debugDuringDeviceUpdate] = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L9, 312, 12, "() {\n      _debugDuringDeviceUpdate = true;\n      return true;\n    }()");
      task();
      if (!dart.test(dart.fn(() => {
        this[_debugDuringDeviceUpdate] = false;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L9, 317, 12, "() {\n      _debugDuringDeviceUpdate = false;\n      return true;\n    }()");
    }
    static _shouldMarkStateDirty(state, event) {
      if (event == null) dart.nullFailed(L9, 324, 70, "event");
      if (state == null) return true;
      if (!(event != null)) dart.assertFailed(null, L9, 327, 12, "event != null");
      let lastEvent = state.latestEvent;
      if (!(event.device == lastEvent.device)) dart.assertFailed(null, L9, 329, 12, "event.device == lastEvent.device");
      if (!events.PointerAddedEvent.is(event)[$_equals](events.PointerRemovedEvent.is(lastEvent))) dart.assertFailed(null, L9, 332, 12, "(event is PointerAddedEvent) == (lastEvent is PointerRemovedEvent)");
      if (events.PointerSignalEvent.is(event)) return false;
      return events.PointerAddedEvent.is(lastEvent) || events.PointerRemovedEvent.is(event) || !dart.equals(lastEvent.position, event.position);
    }
    [_hitTestResultToAnnotations](result) {
      if (result == null) dart.nullFailed(L9, 342, 92, "result");
      if (!(result != null)) dart.assertFailed(null, L9, 343, 12, "result != null");
      let annotations = LinkedHashMapOfMouseTrackerAnnotation$Matrix4().as(new (LinkedMapOfMouseTrackerAnnotation$Matrix4()).new());
      for (let entry of result.path) {
        if (mouse_tracking.MouseTrackerAnnotation.is(entry.target)) {
          annotations[$_set](mouse_tracking.MouseTrackerAnnotation.as(entry.target), dart.nullCheck(entry.transform));
        }
      }
      return annotations;
    }
    [_findAnnotations](state, hitTest) {
      if (state == null) dart.nullFailed(L9, 359, 79, "state");
      if (hitTest == null) dart.nullFailed(L9, 359, 116, "hitTest");
      if (!(state != null)) dart.assertFailed(null, L9, 360, 12, "state != null");
      if (!(hitTest != null)) dart.assertFailed(null, L9, 361, 12, "hitTest != null");
      let globalPosition = state.latestEvent.position;
      let device = state.device;
      if (!dart.test(this[_mouseStates][$containsKey](device))) return LinkedHashMapOfMouseTrackerAnnotation$Matrix4().as(new (LinkedMapOfMouseTrackerAnnotation$Matrix4()).new());
      return this[_hitTestResultToAnnotations](hitTest(globalPosition));
    }
    handleDeviceUpdate(details) {
      if (details == null) dart.nullFailed(L9, 391, 53, "details");
      if (!dart.test(this[_debugDuringDeviceUpdate])) dart.assertFailed(null, L9, 392, 12, "_debugDuringDeviceUpdate");
    }
    updateWithEvent(event, getResult) {
      if (event == null) dart.nullFailed(L9, 404, 37, "event");
      if (getResult == null) dart.nullFailed(L9, 404, 71, "getResult");
      if (!(event != null)) dart.assertFailed(null, L9, 405, 12, "event != null");
      let result = events.PointerRemovedEvent.is(event) ? new hit_test.HitTestResult.new() : getResult();
      if (!(result != null)) dart.assertFailed(null, L9, 407, 12, "result != null");
      if (!dart.equals(event.kind, ui.PointerDeviceKind.mouse)) return;
      if (events.PointerSignalEvent.is(event)) return;
      let device = event.device;
      let existingState = this[_mouseStates][$_get](device);
      if (!dart.test(mouse_tracking.BaseMouseTracker._shouldMarkStateDirty(existingState, event))) return;
      this[_monitorMouseConnection](dart.fn(() => {
        this[_deviceUpdatePhase](dart.fn(() => {
          let t28;
          if (existingState == null) {
            if (!!events.PointerRemovedEvent.is(event)) dart.assertFailed(null, L9, 423, 18, "event is! PointerRemovedEvent");
            this[_mouseStates][$_set](device, new mouse_tracking._MouseState.new({initialEvent: event}));
          } else {
            if (!!events.PointerAddedEvent.is(event)) dart.assertFailed(null, L9, 426, 18, "event is! PointerAddedEvent");
            if (events.PointerRemovedEvent.is(event)) this[_mouseStates][$remove](event.device);
          }
          let targetState = (t28 = this[_mouseStates][$_get](device), t28 == null ? dart.nullCheck(existingState) : t28);
          let lastEvent = targetState.replaceLatestEvent(event);
          let nextAnnotations = events.PointerRemovedEvent.is(event) ? LinkedHashMapOfMouseTrackerAnnotation$Matrix4().as(new (LinkedMapOfMouseTrackerAnnotation$Matrix4()).new()) : this[_hitTestResultToAnnotations](result);
          let lastAnnotations = targetState.replaceAnnotations(nextAnnotations);
          this.handleDeviceUpdate(new mouse_tracking.MouseTrackerUpdateDetails.byPointerEvent({lastAnnotations: lastAnnotations, nextAnnotations: nextAnnotations, previousEvent: lastEvent, triggeringEvent: event}));
        }, VoidTovoid()));
      }, VoidTovoid()));
    }
    updateAllDevices(hitTest) {
      if (hitTest == null) dart.nullFailed(L9, 459, 55, "hitTest");
      this[_deviceUpdatePhase](dart.fn(() => {
        for (let dirtyState of this[_mouseStates][$values]) {
          let lastEvent = dirtyState.latestEvent;
          let nextAnnotations = this[_findAnnotations](dirtyState, hitTest);
          let lastAnnotations = dirtyState.replaceAnnotations(nextAnnotations);
          this.handleDeviceUpdate(new mouse_tracking.MouseTrackerUpdateDetails.byNewFrame({lastAnnotations: lastAnnotations, nextAnnotations: nextAnnotations, previousEvent: lastEvent}));
        }
      }, VoidTovoid()));
    }
  };
  (mouse_tracking.BaseMouseTracker.new = function() {
    this[_mouseStates] = new (IdentityMapOfint$_MouseState()).new();
    this[_debugDuringDeviceUpdate] = false;
    mouse_tracking.BaseMouseTracker.__proto__.new.call(this);
    ;
  }).prototype = mouse_tracking.BaseMouseTracker.prototype;
  dart.addTypeTests(mouse_tracking.BaseMouseTracker);
  dart.addTypeCaches(mouse_tracking.BaseMouseTracker);
  dart.setMethodSignature(mouse_tracking.BaseMouseTracker, () => ({
    __proto__: dart.getMethods(mouse_tracking.BaseMouseTracker.__proto__),
    [_monitorMouseConnection]: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    [_deviceUpdatePhase]: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    [_hitTestResultToAnnotations]: dart.fnType(collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4), [hit_test.HitTestResult]),
    [_findAnnotations]: dart.fnType(collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4), [mouse_tracking._MouseState, dart.fnType(hit_test.HitTestResult, [ui.Offset])]),
    handleDeviceUpdate: dart.fnType(dart.void, [mouse_tracking.MouseTrackerUpdateDetails]),
    updateWithEvent: dart.fnType(dart.void, [events.PointerEvent, dart.fnType(hit_test.HitTestResult, [])]),
    updateAllDevices: dart.fnType(dart.void, [dart.fnType(hit_test.HitTestResult, [ui.Offset])])
  }));
  dart.setGetterSignature(mouse_tracking.BaseMouseTracker, () => ({
    __proto__: dart.getGetters(mouse_tracking.BaseMouseTracker.__proto__),
    mouseIsConnected: core.bool
  }));
  dart.setLibraryUri(mouse_tracking.BaseMouseTracker, L10);
  dart.setFieldSignature(mouse_tracking.BaseMouseTracker, () => ({
    __proto__: dart.getFields(mouse_tracking.BaseMouseTracker.__proto__),
    [_mouseStates]: dart.finalFieldType(core.Map$(core.int, mouse_tracking._MouseState)),
    [_debugDuringDeviceUpdate]: dart.fieldType(core.bool)
  }));
  mouse_cursor.MouseTrackerCursorMixin = class MouseTrackerCursorMixin extends mouse_tracking.BaseMouseTracker {};
  mouse_cursor.MouseTrackerCursorMixin[dart.mixinOn] = BaseMouseTracker => class MouseTrackerCursorMixin extends BaseMouseTracker {
    debugDeviceActiveCursor(device) {
      if (device == null) dart.nullFailed(L8, 26, 44, "device");
      let result = null;
      if (!dart.test(dart.fn(() => {
        let t28;
        result = (t28 = this[_lastSession][$_get](device), t28 == null ? null : t28.cursor);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L8, 28, 12, "() {\n      result = _lastSession[device]?.cursor;\n      return true;\n    }()");
      return result;
    }
    handleDeviceUpdate(details) {
      if (details == null) dart.nullFailed(L8, 37, 53, "details");
      super.handleDeviceUpdate(details);
      this[_handleDeviceUpdateMouseCursor](details);
    }
    [_findFirstCursor](annotations) {
      let t28;
      if (annotations == null) dart.nullFailed(L8, 50, 65, "annotations");
      t28 = mouse_cursor._DeferringMouseCursor.firstNonDeferred(annotations[$map](mouse_cursor.MouseCursor, dart.fn(annotation => {
        if (annotation == null) dart.nullFailed(L8, 52, 47, "annotation");
        return annotation.cursor;
      }, MouseTrackerAnnotationToMouseCursor())));
      return t28 == null ? mouse_cursor.SystemMouseCursors.basic : t28;
    }
    [_handleDeviceUpdateMouseCursor](details) {
      let t28, t28$;
      if (details == null) dart.nullFailed(L8, 57, 65, "details");
      let device = details.device;
      if (events.PointerRemovedEvent.is(details.triggeringEvent)) {
        this[_lastSession][$remove](device);
        return;
      }
      let lastSession = this[_lastSession][$_get](device);
      let nextCursor = this[_findFirstCursor](details.nextAnnotations[$keys]);
      if (dart.equals((t28 = lastSession, t28 == null ? null : t28.cursor), nextCursor)) return;
      let nextSession = nextCursor.createSession(device);
      this[_lastSession][$_set](device, nextSession);
      t28$ = lastSession;
      t28$ == null ? null : t28$.dispose();
      nextSession.activate();
    }
  };
  (mouse_cursor.MouseTrackerCursorMixin[dart.mixinNew] = function() {
    this[_lastSession] = new (IdentityMapOfint$MouseCursorSession()).new();
  }).prototype = mouse_cursor.MouseTrackerCursorMixin.prototype;
  dart.addTypeTests(mouse_cursor.MouseTrackerCursorMixin);
  dart.addTypeCaches(mouse_cursor.MouseTrackerCursorMixin);
  mouse_cursor.MouseTrackerCursorMixin[dart.implements] = () => [mouse_tracking.BaseMouseTracker];
  dart.setMethodSignature(mouse_cursor.MouseTrackerCursorMixin, () => ({
    __proto__: dart.getMethods(mouse_cursor.MouseTrackerCursorMixin.__proto__),
    debugDeviceActiveCursor: dart.fnType(dart.nullable(mouse_cursor.MouseCursor), [core.int]),
    [_findFirstCursor]: dart.fnType(mouse_cursor.MouseCursor, [core.Iterable$(mouse_tracking.MouseTrackerAnnotation)]),
    [_handleDeviceUpdateMouseCursor]: dart.fnType(dart.void, [mouse_tracking.MouseTrackerUpdateDetails])
  }));
  dart.setLibraryUri(mouse_cursor.MouseTrackerCursorMixin, L11);
  dart.setFieldSignature(mouse_cursor.MouseTrackerCursorMixin, () => ({
    __proto__: dart.getFields(mouse_cursor.MouseTrackerCursorMixin.__proto__),
    [_lastSession]: dart.finalFieldType(core.Map$(core.int, mouse_cursor.MouseCursorSession))
  }));
  var cursor$ = dart.privateName(mouse_cursor, "MouseCursorSession.cursor");
  var device$ = dart.privateName(mouse_cursor, "MouseCursorSession.device");
  mouse_cursor.MouseCursorSession = class MouseCursorSession extends core.Object {
    get cursor() {
      return this[cursor$];
    }
    set cursor(value) {
      super.cursor = value;
    }
    get device() {
      return this[device$];
    }
    set device(value) {
      super.device = value;
    }
  };
  (mouse_cursor.MouseCursorSession.new = function(cursor, device) {
    if (cursor == null) dart.nullFailed(L8, 101, 27, "cursor");
    if (device == null) dart.nullFailed(L8, 101, 40, "device");
    this[cursor$] = cursor;
    this[device$] = device;
    if (!(cursor != null)) dart.assertFailed(null, L8, 102, 14, "cursor != null");
    if (!(device != null)) dart.assertFailed(null, L8, 103, 14, "device != null");
    ;
  }).prototype = mouse_cursor.MouseCursorSession.prototype;
  dart.addTypeTests(mouse_cursor.MouseCursorSession);
  dart.addTypeCaches(mouse_cursor.MouseCursorSession);
  dart.setLibraryUri(mouse_cursor.MouseCursorSession, L11);
  dart.setFieldSignature(mouse_cursor.MouseCursorSession, () => ({
    __proto__: dart.getFields(mouse_cursor.MouseCursorSession.__proto__),
    cursor: dart.finalFieldType(mouse_cursor.MouseCursor),
    device: dart.finalFieldType(core.int)
  }));
  var C22;
  var C23;
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  mouse_cursor.MouseCursor = class MouseCursor extends Object_Diagnosticable$36 {
    toString(opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C14 || CT.C14;
      if (minLevel == null) dart.nullFailed(L8, 226, 36, "minLevel");
      let debugDescription = this.debugDescription;
      if (dart.notNull(minLevel.index) >= dart.notNull(diagnostics.DiagnosticLevel.info.index) && debugDescription != null) return debugDescription;
      return super.toString({minLevel: minLevel});
    }
  };
  (mouse_cursor.MouseCursor.new = function() {
    ;
  }).prototype = mouse_cursor.MouseCursor.prototype;
  dart.addTypeTests(mouse_cursor.MouseCursor);
  dart.addTypeCaches(mouse_cursor.MouseCursor);
  dart.setLibraryUri(mouse_cursor.MouseCursor, L11);
  dart.defineExtensionMethods(mouse_cursor.MouseCursor, ['toString']);
  dart.defineLazy(mouse_cursor.MouseCursor, {
    /*mouse_cursor.MouseCursor.defer*/get defer() {
      return C22 || CT.C22;
    },
    /*mouse_cursor.MouseCursor.uncontrolled*/get uncontrolled() {
      return C23 || CT.C23;
    }
  }, false);
  mouse_cursor._DeferringMouseCursor = class _DeferringMouseCursor extends mouse_cursor.MouseCursor {
    createSession(device) {
      if (device == null) dart.nullFailed(L8, 263, 40, "device");
      if (!false) dart.assertFailed("_DeferringMouseCursor can not create a session", L8, 264, 12, "false");
      dart.throw(new core.UnimplementedError.new());
    }
    get debugDescription() {
      return "defer";
    }
    static firstNonDeferred(cursors) {
      if (cursors == null) dart.nullFailed(L8, 272, 62, "cursors");
      for (let cursor of cursors) {
        if (!(cursor != null)) dart.assertFailed(null, L8, 274, 14, "cursor != null");
        if (!dart.equals(cursor, mouse_cursor.MouseCursor.defer)) return cursor;
      }
      return null;
    }
  };
  (mouse_cursor._DeferringMouseCursor.__ = function() {
    mouse_cursor._DeferringMouseCursor.__proto__.new.call(this);
    ;
  }).prototype = mouse_cursor._DeferringMouseCursor.prototype;
  dart.addTypeTests(mouse_cursor._DeferringMouseCursor);
  dart.addTypeCaches(mouse_cursor._DeferringMouseCursor);
  dart.setMethodSignature(mouse_cursor._DeferringMouseCursor, () => ({
    __proto__: dart.getMethods(mouse_cursor._DeferringMouseCursor.__proto__),
    createSession: dart.fnType(mouse_cursor.MouseCursorSession, [core.int])
  }));
  dart.setGetterSignature(mouse_cursor._DeferringMouseCursor, () => ({
    __proto__: dart.getGetters(mouse_cursor._DeferringMouseCursor.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(mouse_cursor._DeferringMouseCursor, L11);
  mouse_cursor._NoopMouseCursorSession = class _NoopMouseCursorSession extends mouse_cursor.MouseCursorSession {
    activate() {
      return async.async(dart.void, function* activate() {
      });
    }
    dispose() {
    }
  };
  (mouse_cursor._NoopMouseCursorSession.new = function(cursor, device) {
    if (cursor == null) dart.nullFailed(L8, 283, 44, "cursor");
    if (device == null) dart.nullFailed(L8, 283, 56, "device");
    mouse_cursor._NoopMouseCursorSession.__proto__.new.call(this, cursor, device);
    ;
  }).prototype = mouse_cursor._NoopMouseCursorSession.prototype;
  dart.addTypeTests(mouse_cursor._NoopMouseCursorSession);
  dart.addTypeCaches(mouse_cursor._NoopMouseCursorSession);
  dart.setMethodSignature(mouse_cursor._NoopMouseCursorSession, () => ({
    __proto__: dart.getMethods(mouse_cursor._NoopMouseCursorSession.__proto__),
    activate: dart.fnType(async.Future$(dart.void), []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(mouse_cursor._NoopMouseCursorSession, L11);
  mouse_cursor._NoopMouseCursor = class _NoopMouseCursor extends mouse_cursor.MouseCursor {
    createSession(device) {
      if (device == null) dart.nullFailed(L8, 309, 45, "device");
      return new mouse_cursor._NoopMouseCursorSession.new(this, device);
    }
    get debugDescription() {
      return "uncontrolled";
    }
  };
  (mouse_cursor._NoopMouseCursor.__ = function() {
    mouse_cursor._NoopMouseCursor.__proto__.new.call(this);
    ;
  }).prototype = mouse_cursor._NoopMouseCursor.prototype;
  dart.addTypeTests(mouse_cursor._NoopMouseCursor);
  dart.addTypeCaches(mouse_cursor._NoopMouseCursor);
  dart.setMethodSignature(mouse_cursor._NoopMouseCursor, () => ({
    __proto__: dart.getMethods(mouse_cursor._NoopMouseCursor.__proto__),
    createSession: dart.fnType(mouse_cursor._NoopMouseCursorSession, [core.int])
  }));
  dart.setGetterSignature(mouse_cursor._NoopMouseCursor, () => ({
    __proto__: dart.getGetters(mouse_cursor._NoopMouseCursor.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(mouse_cursor._NoopMouseCursor, L11);
  mouse_cursor._SystemMouseCursorSession = class _SystemMouseCursorSession extends mouse_cursor.MouseCursorSession {
    get cursor() {
      return mouse_cursor.SystemMouseCursor.as(super.cursor);
    }
    activate() {
      return system_channels.SystemChannels.mouseCursor.invokeMethod(dart.void, "activateSystemCursor", new (IdentityMapOfString$dynamic()).from(["device", this.device, "kind", this.cursor.kind]));
    }
    dispose() {
    }
  };
  (mouse_cursor._SystemMouseCursorSession.new = function(cursor, device) {
    if (cursor == null) dart.nullFailed(L8, 316, 47, "cursor");
    if (device == null) dart.nullFailed(L8, 316, 59, "device");
    mouse_cursor._SystemMouseCursorSession.__proto__.new.call(this, cursor, device);
    ;
  }).prototype = mouse_cursor._SystemMouseCursorSession.prototype;
  dart.addTypeTests(mouse_cursor._SystemMouseCursorSession);
  dart.addTypeCaches(mouse_cursor._SystemMouseCursorSession);
  dart.setMethodSignature(mouse_cursor._SystemMouseCursorSession, () => ({
    __proto__: dart.getMethods(mouse_cursor._SystemMouseCursorSession.__proto__),
    activate: dart.fnType(async.Future$(dart.void), []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(mouse_cursor._SystemMouseCursorSession, () => ({
    __proto__: dart.getGetters(mouse_cursor._SystemMouseCursorSession.__proto__),
    cursor: mouse_cursor.SystemMouseCursor
  }));
  dart.setLibraryUri(mouse_cursor._SystemMouseCursorSession, L11);
  var kind$ = dart.privateName(mouse_cursor, "SystemMouseCursor.kind");
  mouse_cursor.SystemMouseCursor = class SystemMouseCursor extends mouse_cursor.MouseCursor {
    get kind() {
      return this[kind$];
    }
    set kind(value) {
      super.kind = value;
    }
    get debugDescription() {
      return dart.str(object.objectRuntimeType(this, "SystemMouseCursor")) + "(" + dart.str(this.kind) + ")";
    }
    createSession(device) {
      if (device == null) dart.nullFailed(L8, 382, 47, "device");
      return new mouse_cursor._SystemMouseCursorSession.new(this, device);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return mouse_cursor.SystemMouseCursor.is(other) && other.kind == this.kind;
    }
    get hashCode() {
      return dart.hashCode(this.kind);
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L8, 396, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfString()).new("kind", this.kind, {level: diagnostics.DiagnosticLevel.debug}));
    }
  };
  (mouse_cursor.SystemMouseCursor.__ = function(opts) {
    let kind = opts && 'kind' in opts ? opts.kind : null;
    if (kind == null) dart.nullFailed(L8, 369, 19, "kind");
    this[kind$] = kind;
    if (!(kind != null)) dart.assertFailed(null, L8, 370, 15, "kind != null");
    mouse_cursor.SystemMouseCursor.__proto__.new.call(this);
    ;
  }).prototype = mouse_cursor.SystemMouseCursor.prototype;
  dart.addTypeTests(mouse_cursor.SystemMouseCursor);
  dart.addTypeCaches(mouse_cursor.SystemMouseCursor);
  dart.setMethodSignature(mouse_cursor.SystemMouseCursor, () => ({
    __proto__: dart.getMethods(mouse_cursor.SystemMouseCursor.__proto__),
    createSession: dart.fnType(mouse_cursor._SystemMouseCursorSession, [core.int])
  }));
  dart.setGetterSignature(mouse_cursor.SystemMouseCursor, () => ({
    __proto__: dart.getGetters(mouse_cursor.SystemMouseCursor.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(mouse_cursor.SystemMouseCursor, L11);
  dart.setFieldSignature(mouse_cursor.SystemMouseCursor, () => ({
    __proto__: dart.getFields(mouse_cursor.SystemMouseCursor.__proto__),
    kind: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(mouse_cursor.SystemMouseCursor, ['_equals']);
  dart.defineExtensionAccessors(mouse_cursor.SystemMouseCursor, ['hashCode']);
  var C24;
  var C25;
  var C26;
  var C27;
  var C28;
  var C29;
  var C30;
  var C31;
  var C32;
  var C33;
  var C34;
  var C35;
  var C36;
  var C37;
  var C38;
  var C39;
  var C40;
  var C41;
  var C42;
  var C43;
  var C44;
  var C45;
  var C46;
  var C47;
  var C48;
  var C49;
  var C50;
  var C51;
  var C52;
  var C53;
  var C54;
  var C55;
  var C56;
  var C57;
  var C58;
  var C59;
  mouse_cursor.SystemMouseCursors = class SystemMouseCursors extends core.Object {
    static __() {
      return dart.throw(new core.Error.new());
    }
  };
  (mouse_cursor.SystemMouseCursors[dart.mixinNew] = function() {
  }).prototype = mouse_cursor.SystemMouseCursors.prototype;
  dart.addTypeTests(mouse_cursor.SystemMouseCursors);
  dart.addTypeCaches(mouse_cursor.SystemMouseCursors);
  dart.setLibraryUri(mouse_cursor.SystemMouseCursors, L11);
  dart.defineLazy(mouse_cursor.SystemMouseCursors, {
    /*mouse_cursor.SystemMouseCursors.none*/get none() {
      return C24 || CT.C24;
    },
    /*mouse_cursor.SystemMouseCursors.basic*/get basic() {
      return C25 || CT.C25;
    },
    /*mouse_cursor.SystemMouseCursors.click*/get click() {
      return C26 || CT.C26;
    },
    /*mouse_cursor.SystemMouseCursors.forbidden*/get forbidden() {
      return C27 || CT.C27;
    },
    /*mouse_cursor.SystemMouseCursors.wait*/get wait() {
      return C28 || CT.C28;
    },
    /*mouse_cursor.SystemMouseCursors.progress*/get progress() {
      return C29 || CT.C29;
    },
    /*mouse_cursor.SystemMouseCursors.contextMenu*/get contextMenu() {
      return C30 || CT.C30;
    },
    /*mouse_cursor.SystemMouseCursors.help*/get help() {
      return C31 || CT.C31;
    },
    /*mouse_cursor.SystemMouseCursors.text*/get text() {
      return C32 || CT.C32;
    },
    /*mouse_cursor.SystemMouseCursors.verticalText*/get verticalText() {
      return C33 || CT.C33;
    },
    /*mouse_cursor.SystemMouseCursors.cell*/get cell() {
      return C34 || CT.C34;
    },
    /*mouse_cursor.SystemMouseCursors.precise*/get precise() {
      return C35 || CT.C35;
    },
    /*mouse_cursor.SystemMouseCursors.move*/get move() {
      return C36 || CT.C36;
    },
    /*mouse_cursor.SystemMouseCursors.grab*/get grab() {
      return C37 || CT.C37;
    },
    /*mouse_cursor.SystemMouseCursors.grabbing*/get grabbing() {
      return C38 || CT.C38;
    },
    /*mouse_cursor.SystemMouseCursors.noDrop*/get noDrop() {
      return C39 || CT.C39;
    },
    /*mouse_cursor.SystemMouseCursors.alias*/get alias() {
      return C40 || CT.C40;
    },
    /*mouse_cursor.SystemMouseCursors.copy*/get copy() {
      return C41 || CT.C41;
    },
    /*mouse_cursor.SystemMouseCursors.disappearing*/get disappearing() {
      return C42 || CT.C42;
    },
    /*mouse_cursor.SystemMouseCursors.allScroll*/get allScroll() {
      return C43 || CT.C43;
    },
    /*mouse_cursor.SystemMouseCursors.resizeLeftRight*/get resizeLeftRight() {
      return C44 || CT.C44;
    },
    /*mouse_cursor.SystemMouseCursors.resizeUpDown*/get resizeUpDown() {
      return C45 || CT.C45;
    },
    /*mouse_cursor.SystemMouseCursors.resizeUpLeftDownRight*/get resizeUpLeftDownRight() {
      return C46 || CT.C46;
    },
    /*mouse_cursor.SystemMouseCursors.resizeUpRightDownLeft*/get resizeUpRightDownLeft() {
      return C47 || CT.C47;
    },
    /*mouse_cursor.SystemMouseCursors.resizeUp*/get resizeUp() {
      return C48 || CT.C48;
    },
    /*mouse_cursor.SystemMouseCursors.resizeDown*/get resizeDown() {
      return C49 || CT.C49;
    },
    /*mouse_cursor.SystemMouseCursors.resizeLeft*/get resizeLeft() {
      return C50 || CT.C50;
    },
    /*mouse_cursor.SystemMouseCursors.resizeRight*/get resizeRight() {
      return C51 || CT.C51;
    },
    /*mouse_cursor.SystemMouseCursors.resizeUpLeft*/get resizeUpLeft() {
      return C52 || CT.C52;
    },
    /*mouse_cursor.SystemMouseCursors.resizeUpRight*/get resizeUpRight() {
      return C53 || CT.C53;
    },
    /*mouse_cursor.SystemMouseCursors.resizeDownLeft*/get resizeDownLeft() {
      return C54 || CT.C54;
    },
    /*mouse_cursor.SystemMouseCursors.resizeDownRight*/get resizeDownRight() {
      return C55 || CT.C55;
    },
    /*mouse_cursor.SystemMouseCursors.resizeColumn*/get resizeColumn() {
      return C56 || CT.C56;
    },
    /*mouse_cursor.SystemMouseCursors.resizeRow*/get resizeRow() {
      return C57 || CT.C57;
    },
    /*mouse_cursor.SystemMouseCursors.zoomIn*/get zoomIn() {
      return C58 || CT.C58;
    },
    /*mouse_cursor.SystemMouseCursors.zoomOut*/get zoomOut() {
      return C59 || CT.C59;
    }
  }, false);
  var onEnter$ = dart.privateName(mouse_tracking, "MouseTrackerAnnotation.onEnter");
  var onExit$ = dart.privateName(mouse_tracking, "MouseTrackerAnnotation.onExit");
  var cursor$0 = dart.privateName(mouse_tracking, "MouseTrackerAnnotation.cursor");
  var validForMouseTracker$ = dart.privateName(mouse_tracking, "MouseTrackerAnnotation.validForMouseTracker");
  const Object_Diagnosticable$36$ = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36$.new = function() {
  }).prototype = Object_Diagnosticable$36$.prototype;
  dart.applyMixin(Object_Diagnosticable$36$, diagnostics.Diagnosticable);
  mouse_tracking.MouseTrackerAnnotation = class MouseTrackerAnnotation extends Object_Diagnosticable$36$ {
    get onEnter() {
      return this[onEnter$];
    }
    set onEnter(value) {
      super.onEnter = value;
    }
    get onExit() {
      return this[onExit$];
    }
    set onExit(value) {
      super.onExit = value;
    }
    get cursor() {
      return this[cursor$0];
    }
    set cursor(value) {
      super.cursor = value;
    }
    get validForMouseTracker() {
      return this[validForMouseTracker$];
    }
    set validForMouseTracker(value) {
      super.validForMouseTracker = value;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L9, 114, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (FlagsSummaryOfFunctionN()).new("callbacks", new (IdentityMapOfString$FunctionN()).from(["enter", this.onEnter, "exit", this.onExit]), {ifEmpty: "<none>"}));
      properties.add(new (DiagnosticsPropertyOfMouseCursor()).new("cursor", this.cursor, {defaultValue: mouse_cursor.MouseCursor.defer}));
    }
  };
  (mouse_tracking.MouseTrackerAnnotation.new = function(opts) {
    let onEnter = opts && 'onEnter' in opts ? opts.onEnter : null;
    let onExit = opts && 'onExit' in opts ? opts.onExit : null;
    let cursor = opts && 'cursor' in opts ? opts.cursor : C22 || CT.C22;
    if (cursor == null) dart.nullFailed(L9, 57, 10, "cursor");
    let validForMouseTracker = opts && 'validForMouseTracker' in opts ? opts.validForMouseTracker : true;
    if (validForMouseTracker == null) dart.nullFailed(L9, 58, 10, "validForMouseTracker");
    this[onEnter$] = onEnter;
    this[onExit$] = onExit;
    this[cursor$0] = cursor;
    this[validForMouseTracker$] = validForMouseTracker;
    if (!(cursor != null)) dart.assertFailed(null, L9, 59, 15, "cursor != null");
    ;
  }).prototype = mouse_tracking.MouseTrackerAnnotation.prototype;
  dart.addTypeTests(mouse_tracking.MouseTrackerAnnotation);
  dart.addTypeCaches(mouse_tracking.MouseTrackerAnnotation);
  dart.setLibraryUri(mouse_tracking.MouseTrackerAnnotation, L10);
  dart.setFieldSignature(mouse_tracking.MouseTrackerAnnotation, () => ({
    __proto__: dart.getFields(mouse_tracking.MouseTrackerAnnotation.__proto__),
    onEnter: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [events.PointerEnterEvent]))),
    onExit: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [events.PointerExitEvent]))),
    cursor: dart.finalFieldType(mouse_cursor.MouseCursor),
    validForMouseTracker: dart.finalFieldType(core.bool)
  }));
  var _annotations = dart.privateName(mouse_tracking, "_annotations");
  var _latestEvent = dart.privateName(mouse_tracking, "_latestEvent");
  mouse_tracking._MouseState = class _MouseState extends core.Object {
    get annotations() {
      return this[_annotations];
    }
    replaceAnnotations(value) {
      if (value == null) dart.nullFailed(L9, 147, 116, "value");
      if (!(value != null)) dart.assertFailed(null, L9, 148, 12, "value != null");
      let previous = this[_annotations];
      this[_annotations] = value;
      return previous;
    }
    get latestEvent() {
      return this[_latestEvent];
    }
    replaceLatestEvent(value) {
      if (value == null) dart.nullFailed(L9, 158, 48, "value");
      if (!(value != null)) dart.assertFailed(null, L9, 159, 12, "value != null");
      if (!(value.device == this[_latestEvent].device)) dart.assertFailed(null, L9, 160, 12, "value.device == _latestEvent.device");
      let previous = this[_latestEvent];
      this[_latestEvent] = value;
      return previous;
    }
    get device() {
      return this.latestEvent.device;
    }
    toString() {
      let describeLatestEvent = "latestEvent: " + dart.str(diagnostics.describeIdentity(this.latestEvent));
      let describeAnnotations = "annotations: [list of " + dart.str(this.annotations[$length]) + "]";
      return dart.str(diagnostics.describeIdentity(this)) + "(" + describeLatestEvent + ", " + describeAnnotations + ")";
    }
  };
  (mouse_tracking._MouseState.new = function(opts) {
    let initialEvent = opts && 'initialEvent' in opts ? opts.initialEvent : null;
    if (initialEvent == null) dart.nullFailed(L9, 137, 27, "initialEvent");
    this[_annotations] = new (LinkedMapOfMouseTrackerAnnotation$Matrix4()).new();
    if (!(initialEvent != null)) dart.assertFailed(null, L9, 138, 15, "initialEvent != null");
    this[_latestEvent] = initialEvent;
    ;
  }).prototype = mouse_tracking._MouseState.prototype;
  dart.addTypeTests(mouse_tracking._MouseState);
  dart.addTypeCaches(mouse_tracking._MouseState);
  dart.setMethodSignature(mouse_tracking._MouseState, () => ({
    __proto__: dart.getMethods(mouse_tracking._MouseState.__proto__),
    replaceAnnotations: dart.fnType(collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4), [collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4)]),
    replaceLatestEvent: dart.fnType(events.PointerEvent, [events.PointerEvent])
  }));
  dart.setGetterSignature(mouse_tracking._MouseState, () => ({
    __proto__: dart.getGetters(mouse_tracking._MouseState.__proto__),
    annotations: collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4),
    latestEvent: events.PointerEvent,
    device: core.int
  }));
  dart.setLibraryUri(mouse_tracking._MouseState, L10);
  dart.setFieldSignature(mouse_tracking._MouseState, () => ({
    __proto__: dart.getFields(mouse_tracking._MouseState.__proto__),
    [_annotations]: dart.fieldType(collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4)),
    [_latestEvent]: dart.fieldType(events.PointerEvent)
  }));
  dart.defineExtensionMethods(mouse_tracking._MouseState, ['toString']);
  var lastAnnotations$ = dart.privateName(mouse_tracking, "MouseTrackerUpdateDetails.lastAnnotations");
  var nextAnnotations$ = dart.privateName(mouse_tracking, "MouseTrackerUpdateDetails.nextAnnotations");
  var previousEvent$ = dart.privateName(mouse_tracking, "MouseTrackerUpdateDetails.previousEvent");
  var triggeringEvent$ = dart.privateName(mouse_tracking, "MouseTrackerUpdateDetails.triggeringEvent");
  const Object_Diagnosticable$36$0 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36$0.new = function() {
  }).prototype = Object_Diagnosticable$36$0.prototype;
  dart.applyMixin(Object_Diagnosticable$36$0, diagnostics.Diagnosticable);
  mouse_tracking.MouseTrackerUpdateDetails = class MouseTrackerUpdateDetails extends Object_Diagnosticable$36$0 {
    get lastAnnotations() {
      return this[lastAnnotations$];
    }
    set lastAnnotations(value) {
      super.lastAnnotations = value;
    }
    get nextAnnotations() {
      return this[nextAnnotations$];
    }
    set nextAnnotations(value) {
      super.nextAnnotations = value;
    }
    get previousEvent() {
      return this[previousEvent$];
    }
    set previousEvent(value) {
      super.previousEvent = value;
    }
    get triggeringEvent() {
      return this[triggeringEvent$];
    }
    set triggeringEvent(value) {
      super.triggeringEvent = value;
    }
    get device() {
      let t28;
      let result = dart.nullCheck((t28 = this.previousEvent, t28 == null ? this.triggeringEvent : t28)).device;
      if (!(result != null)) dart.assertFailed(null, L9, 237, 12, "result != null");
      return result;
    }
    get latestEvent() {
      let t28;
      let result = (t28 = this.triggeringEvent, t28 == null ? dart.nullCheck(this.previousEvent) : t28);
      if (!(result != null)) dart.assertFailed(null, L9, 246, 12, "result != null");
      return result;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L9, 251, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.IntProperty.new("device", this.device));
      properties.add(new (DiagnosticsPropertyOfPointerEvent()).new("previousEvent", this.previousEvent));
      properties.add(new (DiagnosticsPropertyOfPointerEvent()).new("triggeringEvent", this.triggeringEvent));
      properties.add(new (DiagnosticsPropertyOfMapOfMouseTrackerAnnotation$Matrix4()).new("lastAnnotations", this.lastAnnotations));
      properties.add(new (DiagnosticsPropertyOfMapOfMouseTrackerAnnotation$Matrix4()).new("nextAnnotations", this.nextAnnotations));
    }
  };
  (mouse_tracking.MouseTrackerUpdateDetails.byNewFrame = function(opts) {
    let lastAnnotations = opts && 'lastAnnotations' in opts ? opts.lastAnnotations : null;
    if (lastAnnotations == null) dart.nullFailed(L9, 188, 19, "lastAnnotations");
    let nextAnnotations = opts && 'nextAnnotations' in opts ? opts.nextAnnotations : null;
    if (nextAnnotations == null) dart.nullFailed(L9, 189, 19, "nextAnnotations");
    let previousEvent = opts && 'previousEvent' in opts ? opts.previousEvent : null;
    if (previousEvent == null) dart.nullFailed(L9, 190, 32, "previousEvent");
    this[lastAnnotations$] = lastAnnotations;
    this[nextAnnotations$] = nextAnnotations;
    this[previousEvent$] = previousEvent;
    if (!(previousEvent != null)) dart.assertFailed(null, L9, 191, 15, "previousEvent != null");
    if (!(lastAnnotations != null)) dart.assertFailed(null, L9, 192, 15, "lastAnnotations != null");
    if (!(nextAnnotations != null)) dart.assertFailed(null, L9, 193, 15, "nextAnnotations != null");
    this[triggeringEvent$] = null;
    ;
  }).prototype = mouse_tracking.MouseTrackerUpdateDetails.prototype;
  (mouse_tracking.MouseTrackerUpdateDetails.byPointerEvent = function(opts) {
    let lastAnnotations = opts && 'lastAnnotations' in opts ? opts.lastAnnotations : null;
    if (lastAnnotations == null) dart.nullFailed(L9, 201, 19, "lastAnnotations");
    let nextAnnotations = opts && 'nextAnnotations' in opts ? opts.nextAnnotations : null;
    if (nextAnnotations == null) dart.nullFailed(L9, 202, 19, "nextAnnotations");
    let previousEvent = opts && 'previousEvent' in opts ? opts.previousEvent : null;
    let triggeringEvent = opts && 'triggeringEvent' in opts ? opts.triggeringEvent : null;
    if (triggeringEvent == null) dart.nullFailed(L9, 204, 32, "triggeringEvent");
    this[lastAnnotations$] = lastAnnotations;
    this[nextAnnotations$] = nextAnnotations;
    this[previousEvent$] = previousEvent;
    this[triggeringEvent$] = triggeringEvent;
    if (!(triggeringEvent != null)) dart.assertFailed(null, L9, 205, 15, "triggeringEvent != null");
    if (!(lastAnnotations != null)) dart.assertFailed(null, L9, 206, 15, "lastAnnotations != null");
    if (!(nextAnnotations != null)) dart.assertFailed(null, L9, 207, 15, "nextAnnotations != null");
    ;
  }).prototype = mouse_tracking.MouseTrackerUpdateDetails.prototype;
  dart.addTypeTests(mouse_tracking.MouseTrackerUpdateDetails);
  dart.addTypeCaches(mouse_tracking.MouseTrackerUpdateDetails);
  dart.setGetterSignature(mouse_tracking.MouseTrackerUpdateDetails, () => ({
    __proto__: dart.getGetters(mouse_tracking.MouseTrackerUpdateDetails.__proto__),
    device: core.int,
    latestEvent: events.PointerEvent
  }));
  dart.setLibraryUri(mouse_tracking.MouseTrackerUpdateDetails, L10);
  dart.setFieldSignature(mouse_tracking.MouseTrackerUpdateDetails, () => ({
    __proto__: dart.getFields(mouse_tracking.MouseTrackerUpdateDetails.__proto__),
    lastAnnotations: dart.finalFieldType(collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4)),
    nextAnnotations: dart.finalFieldType(collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4)),
    previousEvent: dart.finalFieldType(dart.nullable(events.PointerEvent)),
    triggeringEvent: dart.finalFieldType(dart.nullable(events.PointerEvent))
  }));
  mouse_tracking._MouseTrackerEventMixin = class _MouseTrackerEventMixin extends mouse_tracking.BaseMouseTracker {
    static _handleDeviceUpdateMouseEvents(details) {
      if (details == null) dart.nullFailed(L9, 483, 72, "details");
      let latestEvent = details.latestEvent;
      let lastAnnotations = details.lastAnnotations;
      let nextAnnotations = details.nextAnnotations;
      let baseExitEvent = events.PointerExitEvent.fromMouseEvent(latestEvent);
      lastAnnotations[$forEach](dart.fn((annotation, transform) => {
        if (annotation == null) dart.nullFailed(L9, 498, 53, "annotation");
        if (transform == null) dart.nullFailed(L9, 498, 73, "transform");
        if (!dart.test(nextAnnotations[$containsKey](annotation))) if (dart.test(annotation.validForMouseTracker) && annotation.onExit != null) dart.nullCheck(annotation.onExit)(baseExitEvent.transformed(lastAnnotations[$_get](annotation)));
      }, MouseTrackerAnnotationAndMatrix4Tovoid()));
      let enteringAnnotations = nextAnnotations[$keys][$where](dart.fn(annotation => {
        if (annotation == null) dart.nullFailed(L9, 507, 31, "annotation");
        return !dart.test(lastAnnotations[$containsKey](annotation));
      }, MouseTrackerAnnotationTobool()))[$toList]();
      let baseEnterEvent = events.PointerEnterEvent.fromMouseEvent(latestEvent);
      for (let annotation of enteringAnnotations[$reversed]) {
        if (dart.test(annotation.validForMouseTracker) && annotation.onEnter != null) dart.nullCheck(annotation.onEnter)(baseEnterEvent.transformed(nextAnnotations[$_get](annotation)));
      }
    }
  };
  mouse_tracking._MouseTrackerEventMixin[dart.mixinOn] = BaseMouseTracker => class _MouseTrackerEventMixin extends BaseMouseTracker {
    handleDeviceUpdate(details) {
      if (details == null) dart.nullFailed(L9, 518, 53, "details");
      super.handleDeviceUpdate(details);
      mouse_tracking._MouseTrackerEventMixin._handleDeviceUpdateMouseEvents(details);
    }
  };
  dart.addTypeTests(mouse_tracking._MouseTrackerEventMixin);
  dart.addTypeCaches(mouse_tracking._MouseTrackerEventMixin);
  mouse_tracking._MouseTrackerEventMixin[dart.implements] = () => [mouse_tracking.BaseMouseTracker];
  dart.setLibraryUri(mouse_tracking._MouseTrackerEventMixin, L10);
  const BaseMouseTracker_MouseTrackerCursorMixin$36 = class BaseMouseTracker_MouseTrackerCursorMixin extends mouse_tracking.BaseMouseTracker {};
  (BaseMouseTracker_MouseTrackerCursorMixin$36.new = function() {
    mouse_cursor.MouseTrackerCursorMixin[dart.mixinNew].call(this);
    BaseMouseTracker_MouseTrackerCursorMixin$36.__proto__.new.call(this);
  }).prototype = BaseMouseTracker_MouseTrackerCursorMixin$36.prototype;
  dart.applyMixin(BaseMouseTracker_MouseTrackerCursorMixin$36, mouse_cursor.MouseTrackerCursorMixin);
  const BaseMouseTracker__MouseTrackerEventMixin$36 = class BaseMouseTracker__MouseTrackerEventMixin extends BaseMouseTracker_MouseTrackerCursorMixin$36 {};
  (BaseMouseTracker__MouseTrackerEventMixin$36.new = function() {
    BaseMouseTracker__MouseTrackerEventMixin$36.__proto__.new.call(this);
  }).prototype = BaseMouseTracker__MouseTrackerEventMixin$36.prototype;
  dart.applyMixin(BaseMouseTracker__MouseTrackerEventMixin$36, mouse_tracking._MouseTrackerEventMixin);
  mouse_tracking.MouseTracker = class MouseTracker extends BaseMouseTracker__MouseTrackerEventMixin$36 {};
  (mouse_tracking.MouseTracker.new = function() {
    mouse_tracking.MouseTracker.__proto__.new.call(this);
    ;
  }).prototype = mouse_tracking.MouseTracker.prototype;
  dart.addTypeTests(mouse_tracking.MouseTracker);
  dart.addTypeCaches(mouse_tracking.MouseTracker);
  dart.setLibraryUri(mouse_tracking.MouseTracker, L10);
  var _debugIsRenderViewInitialized = dart.privateName(binding$4, "_debugIsRenderViewInitialized");
  var _mouseTracker = dart.privateName(binding$4, "_mouseTracker");
  var __RendererBinding__pipelineOwner = dart.privateName(binding$4, "_#RendererBinding#_pipelineOwner");
  var __RendererBinding__pipelineOwner_isSet = dart.privateName(binding$4, "_#RendererBinding#_pipelineOwner#isSet");
  var _semanticsHandle = dart.privateName(binding$4, "_semanticsHandle");
  var _debugMouseTrackerUpdateScheduled = dart.privateName(binding$4, "_debugMouseTrackerUpdateScheduled");
  var _firstFrameDeferredCount = dart.privateName(binding$4, "_firstFrameDeferredCount");
  var _firstFrameSent = dart.privateName(binding$4, "_firstFrameSent");
  var _pipelineOwner = dart.privateName(binding$4, "_pipelineOwner");
  var _handleSemanticsOwnerCreated = dart.privateName(binding$4, "_handleSemanticsOwnerCreated");
  var _handleSemanticsOwnerDisposed = dart.privateName(binding$4, "_handleSemanticsOwnerDisposed");
  var _handleSemanticsEnabledChanged = dart.privateName(binding$4, "_handleSemanticsEnabledChanged");
  var _handleSemanticsAction = dart.privateName(binding$4, "_handleSemanticsAction");
  var _handlePersistentFrameCallback = dart.privateName(binding$4, "_handlePersistentFrameCallback");
  var _handleWebFirstFrame = dart.privateName(binding$4, "_handleWebFirstFrame");
  var _forceRepaint = dart.privateName(binding$4, "_forceRepaint");
  var MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  var C62;
  var StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  var C61;
  var MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  var MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  var C60;
  var _scheduleMouseTrackerUpdate = dart.privateName(binding$4, "_scheduleMouseTrackerUpdate");
  const performReassemble = Symbol("performReassemble");
  binding$4.RendererBinding = class RendererBinding extends core.Object {
    static get instance() {
      return binding$4.RendererBinding._instance;
    }
  };
  binding$4.RendererBinding[dart.mixinOn] = _RendererBinding$36BindingBase$36ServicesBinding$36SchedulerBinding$36GestureBinding$36SemanticsBinding$36HitTestable => class RendererBinding extends _RendererBinding$36BindingBase$36ServicesBinding$36SchedulerBinding$36GestureBinding$36SemanticsBinding$36HitTestable {
    initInstances() {
      let t28;
      super.initInstances();
      binding$4.RendererBinding._instance = this;
      this[_pipelineOwner] = new object$.PipelineOwner.new({onNeedVisualUpdate: dart.bind(this, 'ensureVisualUpdate'), onSemanticsOwnerCreated: dart.bind(this, _handleSemanticsOwnerCreated), onSemanticsOwnerDisposed: dart.bind(this, _handleSemanticsOwnerDisposed)});
      t28 = this.window;
      (() => {
        t28.onMetricsChanged = dart.bind(this, 'handleMetricsChanged');
        t28.onTextScaleFactorChanged = dart.bind(this, 'handleTextScaleFactorChanged');
        t28.onPlatformBrightnessChanged = dart.bind(this, 'handlePlatformBrightnessChanged');
        t28.onSemanticsEnabledChanged = dart.bind(this, _handleSemanticsEnabledChanged);
        t28.onSemanticsAction = dart.bind(this, _handleSemanticsAction);
        return t28;
      })();
      this.initRenderView();
      this[_handleSemanticsEnabledChanged]();
      if (!(this.renderView != null)) dart.assertFailed(null, L12, 44, 12, "renderView != null");
      this.addPersistentFrameCallback(dart.bind(this, _handlePersistentFrameCallback));
      this.initMouseTracker();
      if (true) {
        this.addPostFrameCallback(dart.bind(this, _handleWebFirstFrame));
      }
    }
    initServiceExtensions() {
      super.initServiceExtensions();
      if (!dart.test(dart.fn(() => {
        this.registerBoolServiceExtension({name: "invertOversizedImages", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$.debugInvertOversizedImages;
          }), VoidToFutureOfbool()), setter: dart.fn(value => {
            if (value == null) dart.nullFailed(L12, 65, 23, "value");
            return async.async(dart.void, (function*() {
              if (!dart.equals(debug$.debugInvertOversizedImages, value)) {
                debug$.debugInvertOversizedImages = value;
                return this[_forceRepaint]();
              }
              return FutureOfvoid().value();
            }).bind(this));
          }, boolToFutureOfvoid())});
        this.registerBoolServiceExtension({name: "debugPaint", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$0.debugPaintSizeEnabled;
          }), VoidToFutureOfbool()), setter: dart.fn(value => {
            if (value == null) dart.nullFailed(L12, 76, 23, "value");
            if (dart.equals(debug$0.debugPaintSizeEnabled, value)) return FutureOfvoid().value();
            debug$0.debugPaintSizeEnabled = value;
            return this[_forceRepaint]();
          }, boolToFutureOfvoid())});
        this.registerBoolServiceExtension({name: "debugPaintBaselinesEnabled", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$0.debugPaintBaselinesEnabled;
          }), VoidToFutureOfbool()), setter: dart.fn(value => {
            if (value == null) dart.nullFailed(L12, 86, 23, "value");
            if (dart.equals(debug$0.debugPaintBaselinesEnabled, value)) return FutureOfvoid().value();
            debug$0.debugPaintBaselinesEnabled = value;
            return this[_forceRepaint]();
          }, boolToFutureOfvoid())});
        this.registerBoolServiceExtension({name: "repaintRainbow", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$0.debugRepaintRainbowEnabled;
          }), VoidToFutureOfbool()), setter: dart.fn(value => {
            if (value == null) dart.nullFailed(L12, 96, 23, "value");
            let repaint = dart.test(debug$0.debugRepaintRainbowEnabled) && !dart.test(value);
            debug$0.debugRepaintRainbowEnabled = value;
            if (repaint) return this[_forceRepaint]();
            return FutureOfvoid().value();
          }, boolToFutureOfvoid())});
        this.registerBoolServiceExtension({name: "debugCheckElevationsEnabled", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$0.debugCheckElevationsEnabled;
          }), VoidToFutureOfbool()), setter: dart.fn(value => {
            if (value == null) dart.nullFailed(L12, 107, 23, "value");
            if (dart.equals(debug$0.debugCheckElevationsEnabled, value)) {
              return FutureOfvoid().value();
            }
            debug$0.debugCheckElevationsEnabled = value;
            return this[_forceRepaint]();
          }, boolToFutureOfvoid())});
        this.registerSignalServiceExtension({name: "debugDumpLayerTree", callback: dart.fn(() => {
            binding$4.debugDumpLayerTree();
            return print.debugPrintDone;
          }, VoidToFutureOfvoid())});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L12, 60, 12, "() {\n      // these service extensions only work in debug mode\n      registerBoolServiceExtension(\n        name: 'invertOversizedImages',\n        getter: () async => debugInvertOversizedImages,\n        setter: (bool value) async {\n          if (debugInvertOversizedImages != value) {\n            debugInvertOversizedImages = value;\n            return _forceRepaint();\n          }\n          return Future<void>.value();\n        },\n      );\n      registerBoolServiceExtension(\n        name: 'debugPaint',\n        getter: () async => debugPaintSizeEnabled,\n        setter: (bool value) {\n          if (debugPaintSizeEnabled == value)\n            return Future<void>.value();\n          debugPaintSizeEnabled = value;\n          return _forceRepaint();\n        },\n      );\n      registerBoolServiceExtension(\n        name: 'debugPaintBaselinesEnabled',\n        getter: () async => debugPaintBaselinesEnabled,\n        setter: (bool value) {\n          if (debugPaintBaselinesEnabled == value)\n            return Future<void>.value();\n          debugPaintBaselinesEnabled = value;\n          return _forceRepaint();\n        },\n      );\n      registerBoolServiceExtension(\n        name: 'repaintRainbow',\n        getter: () async => debugRepaintRainbowEnabled,\n        setter: (bool value) {\n          final bool repaint = debugRepaintRainbowEnabled && !value;\n          debugRepaintRainbowEnabled = value;\n          if (repaint)\n            return _forceRepaint();\n          return Future<void>.value();\n        },\n      );\n      registerBoolServiceExtension(\n        name: 'debugCheckElevationsEnabled',\n        getter: () async => debugCheckElevationsEnabled,\n        setter: (bool value) {\n          if (debugCheckElevationsEnabled == value) {\n            return Future<void>.value();\n          }\n          debugCheckElevationsEnabled = value;\n          return _forceRepaint();\n        },\n      );\n      registerSignalServiceExtension(\n        name: 'debugDumpLayerTree',\n        callback: () {\n          debugDumpLayerTree();\n          return debugPrintDone;\n        },\n      );\n      return true;\n    }()");
      if (!false) {
        this.registerSignalServiceExtension({name: "debugDumpRenderTree", callback: dart.fn(() => {
            binding$4.debugDumpRenderTree();
            return print.debugPrintDone;
          }, VoidToFutureOfvoid())});
        this.registerSignalServiceExtension({name: "debugDumpSemanticsTreeInTraversalOrder", callback: dart.fn(() => {
            binding$4.debugDumpSemanticsTree(semantics.DebugSemanticsDumpOrder.traversalOrder);
            return print.debugPrintDone;
          }, VoidToFutureOfvoid())});
        this.registerSignalServiceExtension({name: "debugDumpSemanticsTreeInInverseHitTestOrder", callback: dart.fn(() => {
            binding$4.debugDumpSemanticsTree(semantics.DebugSemanticsDumpOrder.inverseHitTest);
            return print.debugPrintDone;
          }, VoidToFutureOfvoid())});
      }
    }
    initRenderView() {
      if (!!dart.test(this[_debugIsRenderViewInitialized])) dart.assertFailed(null, L12, 159, 12, "!_debugIsRenderViewInitialized");
      if (!dart.test(dart.fn(() => {
        this[_debugIsRenderViewInitialized] = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L12, 160, 12, "() {\n      _debugIsRenderViewInitialized = true;\n      return true;\n    }()");
      this.renderView = new view.RenderView.new({configuration: this.createViewConfiguration(), window: this.window});
      this.renderView.prepareInitialFrame();
    }
    get mouseTracker() {
      return dart.nullCheck(this[_mouseTracker]);
    }
    get pipelineOwner() {
      return this[_pipelineOwner];
    }
    get [_pipelineOwner]() {
      let t28;
      return dart.test(this[__RendererBinding__pipelineOwner_isSet]) ? (t28 = this[__RendererBinding__pipelineOwner], t28) : dart.throw(new _internal.LateError.fieldNI("_pipelineOwner"));
    }
    set [_pipelineOwner](t28) {
      if (t28 == null) dart.nullFailed(L12, 177, 22, "null");
      this[__RendererBinding__pipelineOwner_isSet] = true;
      this[__RendererBinding__pipelineOwner] = t28;
    }
    get renderView() {
      return view.RenderView.as(dart.nullCheck(this[_pipelineOwner].rootNode));
    }
    set renderView(value) {
      if (value == null) dart.nullFailed(L12, 183, 29, "value");
      if (!(value != null)) dart.assertFailed(null, L12, 184, 12, "value != null");
      this[_pipelineOwner].rootNode = value;
    }
    handleMetricsChanged() {
      if (!(this.renderView != null)) dart.assertFailed(null, L12, 193, 12, "renderView != null");
      this.renderView.configuration = this.createViewConfiguration();
      this.scheduleForcedFrame();
    }
    handleTextScaleFactorChanged() {
    }
    handlePlatformBrightnessChanged() {
    }
    createViewConfiguration() {
      let devicePixelRatio = this.window.devicePixelRatio;
      return new view.ViewConfiguration.new({size: this.window.physicalSize['/'](devicePixelRatio), devicePixelRatio: devicePixelRatio});
    }
    initMouseTracker(tracker = null) {
      let t29, t29$;
      t29 = this[_mouseTracker];
      t29 == null ? null : t29.dispose();
      this[_mouseTracker] = (t29$ = tracker, t29$ == null ? new mouse_tracking.MouseTracker.new() : t29$);
    }
    dispatchEvent(event, hitTestResult) {
      if (event == null) dart.nullFailed(L12, 271, 35, "event");
      if (hitTestResult != null || events.PointerAddedEvent.is(event) || events.PointerRemovedEvent.is(event)) {
        if (!(event.position != null)) dart.assertFailed(null, L12, 275, 14, "event.position != null");
        dart.nullCheck(this[_mouseTracker]).updateWithEvent(event, dart.fn(() => {
          let t29;
          t29 = hitTestResult;
          return t29 == null ? this.renderView.hitTestMouseTrackers(event.position) : t29;
        }, VoidToHitTestResult()));
      }
      super.dispatchEvent(event, hitTestResult);
    }
    [_handleSemanticsEnabledChanged]() {
      this.setSemanticsEnabled(this.window.semanticsEnabled);
    }
    setSemanticsEnabled(enabled) {
      let t29;
      if (enabled == null) dart.nullFailed(L12, 288, 33, "enabled");
      if (dart.test(enabled)) {
        this[_semanticsHandle] == null ? this[_semanticsHandle] = this[_pipelineOwner].ensureSemantics() : null;
      } else {
        t29 = this[_semanticsHandle];
        t29 == null ? null : t29.dispose();
        this[_semanticsHandle] = null;
      }
    }
    [_handleWebFirstFrame](_) {
      if (_ == null) dart.nullFailed(L12, 297, 38, "_");
      if (!true) dart.assertFailed(null, L12, 298, 12, "kIsWeb");
      let methodChannel = C60 || CT.C60;
      methodChannel.invokeMethod(dart.void, "first-frame");
    }
    [_handleSemanticsAction](id, action, args) {
      let t29;
      if (id == null) dart.nullFailed(L12, 303, 35, "id");
      if (action == null) dart.nullFailed(L12, 303, 55, "action");
      t29 = this[_pipelineOwner].semanticsOwner;
      t29 == null ? null : t29.performAction(id, action, args != null ? (C62 || CT.C62).decodeMessage(args) : null);
    }
    [_handleSemanticsOwnerCreated]() {
      this.renderView.scheduleInitialSemantics();
    }
    [_handleSemanticsOwnerDisposed]() {
      this.renderView.clearSemantics();
    }
    [_handlePersistentFrameCallback](timeStamp) {
      if (timeStamp == null) dart.nullFailed(L12, 319, 48, "timeStamp");
      this.drawFrame();
      this[_scheduleMouseTrackerUpdate]();
    }
    [_scheduleMouseTrackerUpdate]() {
      if (!!dart.test(this[_debugMouseTrackerUpdateScheduled])) dart.assertFailed(null, L12, 326, 12, "!_debugMouseTrackerUpdateScheduled");
      if (!dart.test(dart.fn(() => {
        this[_debugMouseTrackerUpdateScheduled] = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L12, 327, 12, "() {\n      _debugMouseTrackerUpdateScheduled = true;\n      return true;\n    }()");
      dart.nullCheck(binding$.SchedulerBinding.instance).addPostFrameCallback(dart.fn(duration => {
        if (duration == null) dart.nullFailed(L12, 331, 63, "duration");
        if (!dart.test(this[_debugMouseTrackerUpdateScheduled])) dart.assertFailed(null, L12, 332, 14, "_debugMouseTrackerUpdateScheduled");
        if (!dart.test(dart.fn(() => {
          this[_debugMouseTrackerUpdateScheduled] = false;
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L12, 333, 14, "() {\n        _debugMouseTrackerUpdateScheduled = false;\n        return true;\n      }()");
        dart.nullCheck(this[_mouseTracker]).updateAllDevices(dart.bind(this.renderView, 'hitTestMouseTrackers'));
      }, DurationTovoid()));
    }
    get sendFramesToEngine() {
      return dart.test(this[_firstFrameSent]) || this[_firstFrameDeferredCount] === 0;
    }
    deferFirstFrame() {
      if (!(dart.notNull(this[_firstFrameDeferredCount]) >= 0)) dart.assertFailed(null, L12, 366, 12, "_firstFrameDeferredCount >= 0");
      this[_firstFrameDeferredCount] = dart.notNull(this[_firstFrameDeferredCount]) + 1;
    }
    allowFirstFrame() {
      if (!(dart.notNull(this[_firstFrameDeferredCount]) > 0)) dart.assertFailed(null, L12, 379, 12, "_firstFrameDeferredCount > 0");
      this[_firstFrameDeferredCount] = dart.notNull(this[_firstFrameDeferredCount]) - 1;
      if (!dart.test(this[_firstFrameSent])) this.scheduleWarmUpFrame();
    }
    resetFirstFrameSent() {
      this[_firstFrameSent] = false;
    }
    drawFrame() {
      if (!(this.renderView != null)) dart.assertFailed(null, L12, 453, 12, "renderView != null");
      this.pipelineOwner.flushLayout();
      this.pipelineOwner.flushCompositingBits();
      this.pipelineOwner.flushPaint();
      if (dart.test(this.sendFramesToEngine)) {
        this.renderView.compositeFrame();
        this.pipelineOwner.flushSemantics();
        this[_firstFrameSent] = true;
      }
    }
    performReassemble() {
      return async.async(dart.void, (function* performReassemble$() {
        yield this[performReassemble]();
        developer.Timeline.startSync("Dirty Render Tree", {arguments: debug.timelineArgumentsIndicatingLandmarkEvent});
        try {
          this.renderView.reassemble();
        } finally {
          developer.Timeline.finishSync();
        }
        this.scheduleWarmUpFrame();
        yield this.endOfFrame;
      }).bind(this));
    }
    hitTest(result, position) {
      if (result == null) dart.nullFailed(L12, 478, 30, "result");
      if (position == null) dart.nullFailed(L12, 478, 45, "position");
      if (!(this.renderView != null)) dart.assertFailed(null, L12, 479, 12, "renderView != null");
      if (!(result != null)) dart.assertFailed(null, L12, 480, 12, "result != null");
      if (!(position != null)) dart.assertFailed(null, L12, 481, 12, "position != null");
      this.renderView.hitTest(result, {position: position});
      super.hitTest(result, position);
    }
    [_forceRepaint]() {
      let t34;
      let visitor = null;
      let visitor$35isSet = false;
      function visitor$35get() {
        return visitor$35isSet ? visitor : dart.throw(new _internal.LateError.localNI("visitor"));
      }
      dart.fn(visitor$35get, VoidToFn());
      function visitor$35set(t32) {
        if (t32 == null) dart.nullFailed(L12, 487, 30, "null");
        visitor$35isSet = true;
        return visitor = t32;
      }
      dart.fn(visitor$35set, FnTodynamic());
      visitor$35set(dart.fn(child => {
        if (child == null) dart.nullFailed(L12, 488, 29, "child");
        child.markNeedsPaint();
        child.visitChildren(visitor$35get());
      }, RenderObjectTovoid()));
      t34 = binding$4.RendererBinding.instance;
      t34 == null ? null : t34.renderView.visitChildren(visitor$35get());
      return this.endOfFrame;
    }
    [performReassemble]() {
      return super.performReassemble();
    }
  };
  (binding$4.RendererBinding[dart.mixinNew] = function() {
    this[_debugIsRenderViewInitialized] = false;
    this[_mouseTracker] = null;
    this[__RendererBinding__pipelineOwner] = null;
    this[__RendererBinding__pipelineOwner_isSet] = false;
    this[_semanticsHandle] = null;
    this[_debugMouseTrackerUpdateScheduled] = false;
    this[_firstFrameDeferredCount] = 0;
    this[_firstFrameSent] = false;
  }).prototype = binding$4.RendererBinding.prototype;
  dart.addTypeTests(binding$4.RendererBinding);
  dart.addTypeCaches(binding$4.RendererBinding);
  binding$4.RendererBinding[dart.implements] = () => [hit_test.HitTestable, binding$0.SemanticsBinding, binding$1.GestureBinding, binding$.SchedulerBinding, binding.ServicesBinding, binding$2.BindingBase];
  dart.setMethodSignature(binding$4.RendererBinding, () => ({
    __proto__: dart.getMethods(binding$4.RendererBinding.__proto__),
    initInstances: dart.fnType(dart.void, []),
    initServiceExtensions: dart.fnType(dart.void, []),
    initRenderView: dart.fnType(dart.void, []),
    handleMetricsChanged: dart.fnType(dart.void, []),
    handleTextScaleFactorChanged: dart.fnType(dart.void, []),
    handlePlatformBrightnessChanged: dart.fnType(dart.void, []),
    createViewConfiguration: dart.fnType(view.ViewConfiguration, []),
    initMouseTracker: dart.fnType(dart.void, [], [dart.nullable(mouse_tracking.MouseTracker)]),
    dispatchEvent: dart.fnType(dart.void, [events.PointerEvent, dart.nullable(hit_test.HitTestResult)]),
    [_handleSemanticsEnabledChanged]: dart.fnType(dart.void, []),
    setSemanticsEnabled: dart.fnType(dart.void, [core.bool]),
    [_handleWebFirstFrame]: dart.fnType(dart.void, [core.Duration]),
    [_handleSemanticsAction]: dart.fnType(dart.void, [core.int, ui.SemanticsAction, dart.nullable(typed_data.ByteData)]),
    [_handleSemanticsOwnerCreated]: dart.fnType(dart.void, []),
    [_handleSemanticsOwnerDisposed]: dart.fnType(dart.void, []),
    [_handlePersistentFrameCallback]: dart.fnType(dart.void, [core.Duration]),
    [_scheduleMouseTrackerUpdate]: dart.fnType(dart.void, []),
    deferFirstFrame: dart.fnType(dart.void, []),
    allowFirstFrame: dart.fnType(dart.void, []),
    resetFirstFrameSent: dart.fnType(dart.void, []),
    drawFrame: dart.fnType(dart.void, []),
    performReassemble: dart.fnType(async.Future$(dart.void), []),
    hitTest: dart.fnType(dart.void, [hit_test.HitTestResult, ui.Offset]),
    [_forceRepaint]: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setGetterSignature(binding$4.RendererBinding, () => ({
    __proto__: dart.getGetters(binding$4.RendererBinding.__proto__),
    mouseTracker: mouse_tracking.MouseTracker,
    pipelineOwner: object$.PipelineOwner,
    [_pipelineOwner]: object$.PipelineOwner,
    renderView: view.RenderView,
    sendFramesToEngine: core.bool
  }));
  dart.setSetterSignature(binding$4.RendererBinding, () => ({
    __proto__: dart.getSetters(binding$4.RendererBinding.__proto__),
    [_pipelineOwner]: object$.PipelineOwner,
    renderView: view.RenderView
  }));
  dart.setLibraryUri(binding$4.RendererBinding, L13);
  dart.setFieldSignature(binding$4.RendererBinding, () => ({
    __proto__: dart.getFields(binding$4.RendererBinding.__proto__),
    [_debugIsRenderViewInitialized]: dart.fieldType(core.bool),
    [_mouseTracker]: dart.fieldType(dart.nullable(mouse_tracking.MouseTracker)),
    [__RendererBinding__pipelineOwner]: dart.fieldType(dart.nullable(object$.PipelineOwner)),
    [__RendererBinding__pipelineOwner_isSet]: dart.fieldType(core.bool),
    [_semanticsHandle]: dart.fieldType(dart.nullable(object$.SemanticsHandle)),
    [_debugMouseTrackerUpdateScheduled]: dart.fieldType(core.bool),
    [_firstFrameDeferredCount]: dart.fieldType(core.int),
    [_firstFrameSent]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(binding$4.RendererBinding, {
    /*binding$4.RendererBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  }, false);
  const BindingBase_GestureBinding$36 = class BindingBase_GestureBinding extends binding$2.BindingBase {};
  (BindingBase_GestureBinding$36.new = function() {
    binding$1.GestureBinding[dart.mixinNew].call(this);
    BindingBase_GestureBinding$36.__proto__.new.call(this);
  }).prototype = BindingBase_GestureBinding$36.prototype;
  dart.applyMixin(BindingBase_GestureBinding$36, binding$1.GestureBinding);
  const BindingBase_SchedulerBinding$36 = class BindingBase_SchedulerBinding extends BindingBase_GestureBinding$36 {};
  (BindingBase_SchedulerBinding$36.new = function() {
    binding$.SchedulerBinding[dart.mixinNew].call(this);
    BindingBase_SchedulerBinding$36.__proto__.new.call(this);
  }).prototype = BindingBase_SchedulerBinding$36.prototype;
  dart.applyMixin(BindingBase_SchedulerBinding$36, binding$.SchedulerBinding);
  const BindingBase_ServicesBinding$36 = class BindingBase_ServicesBinding extends BindingBase_SchedulerBinding$36 {};
  (BindingBase_ServicesBinding$36.new = function() {
    binding.ServicesBinding[dart.mixinNew].call(this);
    BindingBase_ServicesBinding$36.__proto__.new.call(this);
  }).prototype = BindingBase_ServicesBinding$36.prototype;
  dart.applyMixin(BindingBase_ServicesBinding$36, binding.ServicesBinding);
  const BindingBase_SemanticsBinding$36 = class BindingBase_SemanticsBinding extends BindingBase_ServicesBinding$36 {};
  (BindingBase_SemanticsBinding$36.new = function() {
    binding$0.SemanticsBinding[dart.mixinNew].call(this);
    BindingBase_SemanticsBinding$36.__proto__.new.call(this);
  }).prototype = BindingBase_SemanticsBinding$36.prototype;
  dart.applyMixin(BindingBase_SemanticsBinding$36, binding$0.SemanticsBinding);
  const BindingBase_PaintingBinding$36 = class BindingBase_PaintingBinding extends BindingBase_SemanticsBinding$36 {};
  (BindingBase_PaintingBinding$36.new = function() {
    binding$3.PaintingBinding[dart.mixinNew].call(this);
    BindingBase_PaintingBinding$36.__proto__.new.call(this);
  }).prototype = BindingBase_PaintingBinding$36.prototype;
  dart.applyMixin(BindingBase_PaintingBinding$36, binding$3.PaintingBinding);
  const BindingBase_RendererBinding$36 = class BindingBase_RendererBinding extends BindingBase_PaintingBinding$36 {};
  (BindingBase_RendererBinding$36.new = function() {
    binding$4.RendererBinding[dart.mixinNew].call(this);
    BindingBase_RendererBinding$36.__proto__.new.call(this);
  }).prototype = BindingBase_RendererBinding$36.prototype;
  dart.applyMixin(BindingBase_RendererBinding$36, binding$4.RendererBinding);
  binding$4.RenderingFlutterBinding = class RenderingFlutterBinding extends BindingBase_RendererBinding$36 {};
  (binding$4.RenderingFlutterBinding.new = function(opts) {
    let root = opts && 'root' in opts ? opts.root : null;
    binding$4.RenderingFlutterBinding.__proto__.new.call(this);
    if (!(this.renderView != null)) dart.assertFailed(null, L12, 530, 12, "renderView != null");
    this.renderView.child = root;
  }).prototype = binding$4.RenderingFlutterBinding.prototype;
  dart.addTypeTests(binding$4.RenderingFlutterBinding);
  dart.addTypeCaches(binding$4.RenderingFlutterBinding);
  dart.setLibraryUri(binding$4.RenderingFlutterBinding, L13);
  binding$4.debugDumpRenderTree = function debugDumpRenderTree() {
    let t34, t34$;
    print.debugPrint((t34$ = (t34 = binding$4.RendererBinding.instance, t34 == null ? null : t34.renderView.toStringDeep()), t34$ == null ? "Render tree unavailable." : t34$));
  };
  binding$4.debugDumpLayerTree = function debugDumpLayerTree() {
    let t35, t34, t34$;
    print.debugPrint((t34$ = (t34 = binding$4.RendererBinding.instance, t34 == null ? null : (t35 = t34.renderView.debugLayer, t35 == null ? null : t35.toStringDeep())), t34$ == null ? "Layer tree unavailable." : t34$));
  };
  binding$4.debugDumpSemanticsTree = function debugDumpSemanticsTree(childOrder) {
    let t35, t34, t34$;
    if (childOrder == null) dart.nullFailed(L12, 513, 53, "childOrder");
    print.debugPrint((t34$ = (t34 = binding$4.RendererBinding.instance, t34 == null ? null : (t35 = t34.renderView.debugSemantics, t35 == null ? null : t35.toStringDeep({childOrder: childOrder}))), t34$ == null ? "Semantics not collected." : t34$));
  };
  object$.ParentData = class ParentData extends core.Object {
    detach() {
    }
    toString() {
      return "<none>";
    }
  };
  (object$.ParentData.new = function() {
    ;
  }).prototype = object$.ParentData.prototype;
  dart.addTypeTests(object$.ParentData);
  dart.addTypeCaches(object$.ParentData);
  dart.setMethodSignature(object$.ParentData, () => ({
    __proto__: dart.getMethods(object$.ParentData.__proto__),
    detach: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(object$.ParentData, L5);
  dart.defineExtensionMethods(object$.ParentData, ['toString']);
  var _currentLayer = dart.privateName(object$, "_currentLayer");
  var _recorder = dart.privateName(object$, "_recorder");
  var _canvas = dart.privateName(object$, "_canvas");
  var _containerLayer$ = dart.privateName(object$, "_containerLayer");
  var _compositeChild = dart.privateName(object$, "_compositeChild");
  var _isRecording = dart.privateName(object$, "_isRecording");
  var _startRecording = dart.privateName(object$, "_startRecording");
  var C63;
  var estimatedBounds$ = dart.privateName(object$, "PaintingContext.estimatedBounds");
  object$.PaintingContext = class PaintingContext extends clip.ClipContext {
    get estimatedBounds() {
      return this[estimatedBounds$];
    }
    set estimatedBounds(value) {
      super.estimatedBounds = value;
    }
    static repaintCompositedChild(child, opts) {
      if (child == null) dart.nullFailed(L4, 98, 51, "child");
      let debugAlsoPaintedParent = opts && 'debugAlsoPaintedParent' in opts ? opts.debugAlsoPaintedParent : false;
      if (debugAlsoPaintedParent == null) dart.nullFailed(L4, 98, 65, "debugAlsoPaintedParent");
      if (!dart.test(child[_needsPaint])) dart.assertFailed(null, L4, 99, 12, "child._needsPaint");
      object$.PaintingContext._repaintCompositedChild(child, {debugAlsoPaintedParent: debugAlsoPaintedParent});
    }
    static _repaintCompositedChild(child, opts) {
      if (child == null) dart.nullFailed(L4, 107, 18, "child");
      let debugAlsoPaintedParent = opts && 'debugAlsoPaintedParent' in opts ? opts.debugAlsoPaintedParent : false;
      if (debugAlsoPaintedParent == null) dart.nullFailed(L4, 108, 10, "debugAlsoPaintedParent");
      let childContext = opts && 'childContext' in opts ? opts.childContext : null;
      if (!dart.test(child.isRepaintBoundary)) dart.assertFailed(null, L4, 111, 12, "child.isRepaintBoundary");
      if (!dart.test(dart.fn(() => {
        child.debugRegisterRepaintBoundaryPaint({includedParent: debugAlsoPaintedParent, includedChild: true});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 112, 12, "() {\n      // register the call for RepaintBoundary metrics\n      child.debugRegisterRepaintBoundaryPaint(\n        includedParent: debugAlsoPaintedParent,\n        includedChild: true,\n      );\n      return true;\n    }()");
      let childLayer = OffsetLayerN().as(child[_layer]);
      if (childLayer == null) {
        if (!dart.test(debugAlsoPaintedParent)) dart.assertFailed(null, L4, 122, 14, "debugAlsoPaintedParent");
        child[_layer] = childLayer = new layer$.OffsetLayer.new();
      } else {
        if (!layer$.OffsetLayer.is(childLayer)) dart.assertFailed(null, L4, 129, 14, "childLayer is OffsetLayer");
        if (!(dart.test(debugAlsoPaintedParent) || dart.test(childLayer.attached))) dart.assertFailed(null, L4, 130, 14, "debugAlsoPaintedParent || childLayer.attached");
        childLayer.removeAllChildren();
      }
      if (!(childLayer == child[_layer])) dart.assertFailed(null, L4, 133, 12, "identical(childLayer, child._layer)");
      if (!layer$.OffsetLayer.is(child[_layer])) dart.assertFailed(null, L4, 134, 12, "child._layer is OffsetLayer");
      if (!dart.test(dart.fn(() => {
        let t34;
        dart.nullCheck(child[_layer]).debugCreator = (t34 = child.debugCreator, t34 == null ? dart.runtimeType(child) : t34);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 135, 12, "() {\n      child._layer!.debugCreator = child.debugCreator ?? child.runtimeType;\n      return true;\n    }()");
      childContext == null ? childContext = new object$.PaintingContext.new(dart.nullCheck(child[_layer]), child.paintBounds) : null;
      child[_paintWithContext](childContext, ui.Offset.zero);
      if (!(childLayer == child[_layer])) dart.assertFailed(null, L4, 144, 12, "identical(childLayer, child._layer)");
      childContext.stopRecordingIfNeeded();
    }
    static debugInstrumentRepaintCompositedChild(child, opts) {
      if (child == null) dart.nullFailed(L4, 157, 18, "child");
      let debugAlsoPaintedParent = opts && 'debugAlsoPaintedParent' in opts ? opts.debugAlsoPaintedParent : false;
      if (debugAlsoPaintedParent == null) dart.nullFailed(L4, 158, 10, "debugAlsoPaintedParent");
      let customContext = opts && 'customContext' in opts ? opts.customContext : null;
      if (customContext == null) dart.nullFailed(L4, 159, 30, "customContext");
      if (!dart.test(dart.fn(() => {
        object$.PaintingContext._repaintCompositedChild(child, {debugAlsoPaintedParent: debugAlsoPaintedParent, childContext: customContext});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 161, 12, "() {\n      _repaintCompositedChild(\n        child,\n        debugAlsoPaintedParent: debugAlsoPaintedParent,\n        childContext: customContext,\n      );\n      return true;\n    }()");
    }
    paintChild(child, offset) {
      if (child == null) dart.nullFailed(L4, 176, 32, "child");
      if (offset == null) dart.nullFailed(L4, 176, 46, "offset");
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug$0.debugProfilePaintsEnabled)) developer.Timeline.startSync(dart.str(dart.runtimeType(child)), {arguments: debug.timelineArgumentsIndicatingLandmarkEvent});
        if (debug$0.debugOnProfilePaint != null) dart.nullCheck(debug$0.debugOnProfilePaint)(child);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 177, 12, "() {\n      if (debugProfilePaintsEnabled)\n        Timeline.startSync('${child.runtimeType}', arguments: timelineArgumentsIndicatingLandmarkEvent);\n      if (debugOnProfilePaint != null)\n        debugOnProfilePaint!(child);\n      return true;\n    }()");
      if (dart.test(child.isRepaintBoundary)) {
        this.stopRecordingIfNeeded();
        this[_compositeChild](child, offset);
      } else {
        child[_paintWithContext](this, offset);
      }
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug$0.debugProfilePaintsEnabled)) developer.Timeline.finishSync();
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 192, 12, "() {\n      if (debugProfilePaintsEnabled)\n        Timeline.finishSync();\n      return true;\n    }()");
    }
    [_compositeChild](child, offset) {
      if (child == null) dart.nullFailed(L4, 199, 37, "child");
      if (offset == null) dart.nullFailed(L4, 199, 51, "offset");
      if (!!dart.test(this[_isRecording])) dart.assertFailed(null, L4, 200, 12, "!_isRecording");
      if (!dart.test(child.isRepaintBoundary)) dart.assertFailed(null, L4, 201, 12, "child.isRepaintBoundary");
      if (!(this[_canvas] == null || dart.nullCheck(this[_canvas]).getSaveCount() === 1)) dart.assertFailed(null, L4, 202, 12, "_canvas == null || _canvas!.getSaveCount() == 1");
      if (dart.test(child[_needsPaint])) {
        object$.PaintingContext.repaintCompositedChild(child, {debugAlsoPaintedParent: true});
      } else {
        if (!dart.test(dart.fn(() => {
          let t34;
          child.debugRegisterRepaintBoundaryPaint({includedParent: true, includedChild: false});
          dart.nullCheck(child[_layer]).debugCreator = (t34 = child.debugCreator, t34 == null ? child : t34);
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L4, 208, 14, "() {\n        // register the call for RepaintBoundary metrics\n        child.debugRegisterRepaintBoundaryPaint(\n          includedParent: true,\n          includedChild: false,\n        );\n        child._layer!.debugCreator = child.debugCreator ?? child;\n        return true;\n      }()");
      }
      if (!layer$.OffsetLayer.is(child[_layer])) dart.assertFailed(null, L4, 218, 12, "child._layer is OffsetLayer");
      let childOffsetLayer = layer$.OffsetLayer.as(dart.nullCheck(child[_layer]));
      childOffsetLayer.offset = offset;
      this.appendLayer(dart.nullCheck(child[_layer]));
    }
    appendLayer(layer) {
      if (layer == null) dart.nullFailed(L4, 234, 26, "layer");
      if (!!dart.test(this[_isRecording])) dart.assertFailed(null, L4, 235, 12, "!_isRecording");
      layer.remove();
      this[_containerLayer$].append(layer);
    }
    get [_isRecording]() {
      let hasCanvas = this[_canvas] != null;
      if (!dart.test(dart.fn(() => {
        if (hasCanvas) {
          if (!(this[_currentLayer] != null)) dart.assertFailed(null, L4, 244, 16, "_currentLayer != null");
          if (!(this[_recorder] != null)) dart.assertFailed(null, L4, 245, 16, "_recorder != null");
          if (!(this[_canvas] != null)) dart.assertFailed(null, L4, 246, 16, "_canvas != null");
        } else {
          if (!(this[_currentLayer] == null)) dart.assertFailed(null, L4, 248, 16, "_currentLayer == null");
          if (!(this[_recorder] == null)) dart.assertFailed(null, L4, 249, 16, "_recorder == null");
          if (!(this[_canvas] == null)) dart.assertFailed(null, L4, 250, 16, "_canvas == null");
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 242, 12, "() {\n      if (hasCanvas) {\n        assert(_currentLayer != null);\n        assert(_recorder != null);\n        assert(_canvas != null);\n      } else {\n        assert(_currentLayer == null);\n        assert(_recorder == null);\n        assert(_canvas == null);\n      }\n      return true;\n    }()");
      return hasCanvas;
    }
    get canvas() {
      if (this[_canvas] == null) this[_startRecording]();
      return dart.nullCheck(this[_canvas]);
    }
    [_startRecording]() {
      if (!!dart.test(this[_isRecording])) dart.assertFailed(null, L4, 275, 12, "!_isRecording");
      this[_currentLayer] = new layer$.PictureLayer.new(this.estimatedBounds);
      this[_recorder] = ui.PictureRecorder.new();
      this[_canvas] = ui.Canvas.new(dart.nullCheck(this[_recorder]));
      this[_containerLayer$].append(dart.nullCheck(this[_currentLayer]));
    }
    stopRecordingIfNeeded() {
      if (!dart.test(this[_isRecording])) return;
      if (!dart.test(dart.fn(() => {
        let t34, t34$;
        if (dart.test(debug$0.debugRepaintRainbowEnabled)) {
          let paint = (t34 = ui.Paint.new(), (() => {
            t34.style = ui.PaintingStyle.stroke;
            t34.strokeWidth = 6.0;
            t34.color = debug$0.debugCurrentRepaintColor.toColor();
            return t34;
          })());
          this.canvas.drawRect(this.estimatedBounds.deflate(3.0), paint);
        }
        if (dart.test(debug$0.debugPaintLayerBordersEnabled)) {
          let paint = (t34$ = ui.Paint.new(), (() => {
            t34$.style = ui.PaintingStyle.stroke;
            t34$.strokeWidth = 1.0;
            t34$.color = C63 || CT.C63;
            return t34$;
          })());
          this.canvas.drawRect(this.estimatedBounds, paint);
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 297, 12, "() {\n      if (debugRepaintRainbowEnabled) {\n        final Paint paint = Paint()\n          ..style = PaintingStyle.stroke\n          ..strokeWidth = 6.0\n          ..color = debugCurrentRepaintColor.toColor();\n        canvas.drawRect(estimatedBounds.deflate(3.0), paint);\n      }\n      if (debugPaintLayerBordersEnabled) {\n        final Paint paint = Paint()\n          ..style = PaintingStyle.stroke\n          ..strokeWidth = 1.0\n          ..color = const Color(0xFFFF9800);\n        canvas.drawRect(estimatedBounds, paint);\n      }\n      return true;\n    }()");
      dart.nullCheck(this[_currentLayer]).picture = dart.nullCheck(this[_recorder]).endRecording();
      this[_currentLayer] = null;
      this[_recorder] = null;
      this[_canvas] = null;
    }
    setIsComplexHint() {
      let t34;
      t34 = this[_currentLayer];
      t34 == null ? null : t34.isComplexHint = true;
    }
    setWillChangeHint() {
      let t34;
      t34 = this[_currentLayer];
      t34 == null ? null : t34.willChangeHint = true;
    }
    addLayer(layer) {
      if (layer == null) dart.nullFailed(L4, 354, 23, "layer");
      this.stopRecordingIfNeeded();
      this.appendLayer(layer);
    }
    pushLayer(childLayer, painter, offset, opts) {
      let t34;
      if (childLayer == null) dart.nullFailed(L4, 386, 33, "childLayer");
      if (painter == null) dart.nullFailed(L4, 386, 69, "painter");
      if (offset == null) dart.nullFailed(L4, 386, 85, "offset");
      let childPaintBounds = opts && 'childPaintBounds' in opts ? opts.childPaintBounds : null;
      if (!(painter != null)) dart.assertFailed(null, L4, 387, 12, "painter != null");
      if (dart.test(childLayer.hasChildren)) {
        childLayer.removeAllChildren();
      }
      this.stopRecordingIfNeeded();
      this.appendLayer(childLayer);
      let childContext = this.createChildContext(childLayer, (t34 = childPaintBounds, t34 == null ? this.estimatedBounds : t34));
      painter(childContext, offset);
      childContext.stopRecordingIfNeeded();
    }
    createChildContext(childLayer, bounds) {
      if (childLayer == null) dart.nullFailed(L4, 404, 53, "childLayer");
      if (bounds == null) dart.nullFailed(L4, 404, 70, "bounds");
      return new object$.PaintingContext.new(childLayer, bounds);
    }
    pushClipRect(needsCompositing, offset, clipRect, painter, opts) {
      let t34, t34$;
      if (needsCompositing == null) dart.nullFailed(L4, 445, 36, "needsCompositing");
      if (offset == null) dart.nullFailed(L4, 445, 61, "offset");
      if (clipRect == null) dart.nullFailed(L4, 445, 74, "clipRect");
      if (painter == null) dart.nullFailed(L4, 445, 108, "painter");
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C3 || CT.C3;
      if (clipBehavior == null) dart.nullFailed(L4, 445, 124, "clipBehavior");
      let oldLayer = opts && 'oldLayer' in opts ? opts.oldLayer : null;
      let offsetClipRect = clipRect.shift(offset);
      if (dart.test(needsCompositing)) {
        let layer = (t34 = oldLayer, t34 == null ? new layer$.ClipRectLayer.new() : t34);
        t34$ = layer;
        (() => {
          t34$.clipRect = offsetClipRect;
          t34$.clipBehavior = clipBehavior;
          return t34$;
        })();
        this.pushLayer(layer, painter, offset, {childPaintBounds: offsetClipRect});
        return layer;
      } else {
        this.clipRectAndPaint(offsetClipRect, clipBehavior, offsetClipRect, dart.fn(() => painter(this, offset), VoidTovoid()));
        return null;
      }
    }
    pushClipRRect(needsCompositing, offset, bounds, clipRRect, painter, opts) {
      let t34, t34$;
      if (needsCompositing == null) dart.nullFailed(L4, 479, 38, "needsCompositing");
      if (offset == null) dart.nullFailed(L4, 479, 63, "offset");
      if (bounds == null) dart.nullFailed(L4, 479, 76, "bounds");
      if (clipRRect == null) dart.nullFailed(L4, 479, 90, "clipRRect");
      if (painter == null) dart.nullFailed(L4, 479, 125, "painter");
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C4 || CT.C4;
      if (clipBehavior == null) dart.nullFailed(L4, 479, 141, "clipBehavior");
      let oldLayer = opts && 'oldLayer' in opts ? opts.oldLayer : null;
      if (!(clipBehavior != null)) dart.assertFailed(null, L4, 480, 12, "clipBehavior != null");
      let offsetBounds = bounds.shift(offset);
      let offsetClipRRect = clipRRect.shift(offset);
      if (dart.test(needsCompositing)) {
        let layer = (t34 = oldLayer, t34 == null ? new layer$.ClipRRectLayer.new() : t34);
        t34$ = layer;
        (() => {
          t34$.clipRRect = offsetClipRRect;
          t34$.clipBehavior = clipBehavior;
          return t34$;
        })();
        this.pushLayer(layer, painter, offset, {childPaintBounds: offsetBounds});
        return layer;
      } else {
        this.clipRRectAndPaint(offsetClipRRect, clipBehavior, offsetBounds, dart.fn(() => painter(this, offset), VoidTovoid()));
        return null;
      }
    }
    pushClipPath(needsCompositing, offset, bounds, clipPath, painter, opts) {
      let t34, t34$;
      if (needsCompositing == null) dart.nullFailed(L4, 515, 36, "needsCompositing");
      if (offset == null) dart.nullFailed(L4, 515, 61, "offset");
      if (bounds == null) dart.nullFailed(L4, 515, 74, "bounds");
      if (clipPath == null) dart.nullFailed(L4, 515, 87, "clipPath");
      if (painter == null) dart.nullFailed(L4, 515, 121, "painter");
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C4 || CT.C4;
      if (clipBehavior == null) dart.nullFailed(L4, 515, 137, "clipBehavior");
      let oldLayer = opts && 'oldLayer' in opts ? opts.oldLayer : null;
      if (!(clipBehavior != null)) dart.assertFailed(null, L4, 516, 12, "clipBehavior != null");
      let offsetBounds = bounds.shift(offset);
      let offsetClipPath = clipPath.shift(offset);
      if (dart.test(needsCompositing)) {
        let layer = (t34 = oldLayer, t34 == null ? new layer$.ClipPathLayer.new() : t34);
        t34$ = layer;
        (() => {
          t34$.clipPath = offsetClipPath;
          t34$.clipBehavior = clipBehavior;
          return t34$;
        })();
        this.pushLayer(layer, painter, offset, {childPaintBounds: offsetBounds});
        return layer;
      } else {
        this.clipPathAndPaint(offsetClipPath, clipBehavior, offsetBounds, dart.fn(() => painter(this, offset), VoidTovoid()));
        return null;
      }
    }
    pushColorFilter(offset, colorFilter, painter, opts) {
      let t34;
      if (offset == null) dart.nullFailed(L4, 548, 43, "offset");
      if (colorFilter == null) dart.nullFailed(L4, 548, 63, "colorFilter");
      if (painter == null) dart.nullFailed(L4, 548, 100, "painter");
      let oldLayer = opts && 'oldLayer' in opts ? opts.oldLayer : null;
      if (!(colorFilter != null)) dart.assertFailed(null, L4, 549, 12, "colorFilter != null");
      let layer = (t34 = oldLayer, t34 == null ? new layer$.ColorFilterLayer.new() : t34);
      layer.colorFilter = colorFilter;
      this.pushLayer(layer, painter, offset);
      return layer;
    }
    pushTransform(needsCompositing, offset, transform, painter, opts) {
      let t34, t34$, t34$0;
      if (needsCompositing == null) dart.nullFailed(L4, 571, 38, "needsCompositing");
      if (offset == null) dart.nullFailed(L4, 571, 63, "offset");
      if (transform == null) dart.nullFailed(L4, 571, 79, "transform");
      if (painter == null) dart.nullFailed(L4, 571, 114, "painter");
      let oldLayer = opts && 'oldLayer' in opts ? opts.oldLayer : null;
      let effectiveTransform = (t34 = vector_math_64.Matrix4.translationValues(offset.dx, offset.dy, 0.0), (() => {
        t34.multiply(transform);
        t34.translate(-dart.notNull(offset.dx), -dart.notNull(offset.dy));
        return t34;
      })());
      if (dart.test(needsCompositing)) {
        let layer = (t34$ = oldLayer, t34$ == null ? new layer$.TransformLayer.new() : t34$);
        layer.transform = effectiveTransform;
        this.pushLayer(layer, painter, offset, {childPaintBounds: matrix_utils.MatrixUtils.inverseTransformRect(effectiveTransform, this.estimatedBounds)});
        return layer;
      } else {
        t34$0 = this.canvas;
        (() => {
          t34$0.save();
          t34$0.transform(effectiveTransform.storage);
          return t34$0;
        })();
        painter(this, offset);
        this.canvas.restore();
        return null;
      }
    }
    pushOpacity(offset, alpha, painter, opts) {
      let t34, t34$;
      if (offset == null) dart.nullFailed(L4, 612, 35, "offset");
      if (alpha == null) dart.nullFailed(L4, 612, 47, "alpha");
      if (painter == null) dart.nullFailed(L4, 612, 78, "painter");
      let oldLayer = opts && 'oldLayer' in opts ? opts.oldLayer : null;
      let layer = (t34 = oldLayer, t34 == null ? new layer$.OpacityLayer.new() : t34);
      t34$ = layer;
      (() => {
        t34$.alpha = alpha;
        t34$.offset = offset;
        return t34$;
      })();
      this.pushLayer(layer, painter, ui.Offset.zero);
      return layer;
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "PaintingContext")) + "#" + dart.str(this[$hashCode]) + "(layer: " + dart.str(this[_containerLayer$]) + ", canvas bounds: " + dart.str(this.estimatedBounds) + ")";
    }
  };
  (object$.PaintingContext.new = function(_containerLayer, estimatedBounds) {
    if (_containerLayer == null) dart.nullFailed(L4, 73, 24, "_containerLayer");
    if (estimatedBounds == null) dart.nullFailed(L4, 73, 46, "estimatedBounds");
    this[_currentLayer] = null;
    this[_recorder] = null;
    this[_canvas] = null;
    this[_containerLayer$] = _containerLayer;
    this[estimatedBounds$] = estimatedBounds;
    if (!(_containerLayer != null)) dart.assertFailed(null, L4, 74, 14, "_containerLayer != null");
    if (!(estimatedBounds != null)) dart.assertFailed(null, L4, 75, 14, "estimatedBounds != null");
    ;
  }).prototype = object$.PaintingContext.prototype;
  dart.addTypeTests(object$.PaintingContext);
  dart.addTypeCaches(object$.PaintingContext);
  dart.setMethodSignature(object$.PaintingContext, () => ({
    __proto__: dart.getMethods(object$.PaintingContext.__proto__),
    paintChild: dart.fnType(dart.void, [object$.RenderObject, ui.Offset]),
    [_compositeChild]: dart.fnType(dart.void, [object$.RenderObject, ui.Offset]),
    appendLayer: dart.fnType(dart.void, [layer$.Layer]),
    [_startRecording]: dart.fnType(dart.void, []),
    stopRecordingIfNeeded: dart.fnType(dart.void, []),
    setIsComplexHint: dart.fnType(dart.void, []),
    setWillChangeHint: dart.fnType(dart.void, []),
    addLayer: dart.fnType(dart.void, [layer$.Layer]),
    pushLayer: dart.fnType(dart.void, [layer$.ContainerLayer, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset]), ui.Offset], {childPaintBounds: dart.nullable(ui.Rect)}, {}),
    createChildContext: dart.fnType(object$.PaintingContext, [layer$.ContainerLayer, ui.Rect]),
    pushClipRect: dart.fnType(dart.nullable(layer$.ClipRectLayer), [core.bool, ui.Offset, ui.Rect, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])], {clipBehavior: ui.Clip, oldLayer: dart.nullable(layer$.ClipRectLayer)}, {}),
    pushClipRRect: dart.fnType(dart.nullable(layer$.ClipRRectLayer), [core.bool, ui.Offset, ui.Rect, ui.RRect, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])], {clipBehavior: ui.Clip, oldLayer: dart.nullable(layer$.ClipRRectLayer)}, {}),
    pushClipPath: dart.fnType(dart.nullable(layer$.ClipPathLayer), [core.bool, ui.Offset, ui.Rect, ui.Path, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])], {clipBehavior: ui.Clip, oldLayer: dart.nullable(layer$.ClipPathLayer)}, {}),
    pushColorFilter: dart.fnType(layer$.ColorFilterLayer, [ui.Offset, ui.ColorFilter, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])], {oldLayer: dart.nullable(layer$.ColorFilterLayer)}, {}),
    pushTransform: dart.fnType(dart.nullable(layer$.TransformLayer), [core.bool, ui.Offset, vector_math_64.Matrix4, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])], {oldLayer: dart.nullable(layer$.TransformLayer)}, {}),
    pushOpacity: dart.fnType(layer$.OpacityLayer, [ui.Offset, core.int, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])], {oldLayer: dart.nullable(layer$.OpacityLayer)}, {})
  }));
  dart.setGetterSignature(object$.PaintingContext, () => ({
    __proto__: dart.getGetters(object$.PaintingContext.__proto__),
    [_isRecording]: core.bool,
    canvas: ui.Canvas
  }));
  dart.setLibraryUri(object$.PaintingContext, L5);
  dart.setFieldSignature(object$.PaintingContext, () => ({
    __proto__: dart.getFields(object$.PaintingContext.__proto__),
    [_containerLayer$]: dart.finalFieldType(layer$.ContainerLayer),
    estimatedBounds: dart.finalFieldType(ui.Rect),
    [_currentLayer]: dart.fieldType(dart.nullable(layer$.PictureLayer)),
    [_recorder]: dart.fieldType(dart.nullable(ui.PictureRecorder)),
    [_canvas]: dart.fieldType(dart.nullable(ui.Canvas))
  }));
  dart.defineExtensionMethods(object$.PaintingContext, ['toString']);
  object$.Constraints = class Constraints extends core.Object {
    debugAssertIsValid(opts) {
      let isAppliedConstraint = opts && 'isAppliedConstraint' in opts ? opts.isAppliedConstraint : false;
      if (isAppliedConstraint == null) dart.nullFailed(L4, 705, 10, "isAppliedConstraint");
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      if (!dart.test(this.isNormalized)) dart.assertFailed(null, L4, 708, 12, "isNormalized");
      return this.isNormalized;
    }
  };
  (object$.Constraints.new = function() {
    ;
  }).prototype = object$.Constraints.prototype;
  dart.addTypeTests(object$.Constraints);
  dart.addTypeCaches(object$.Constraints);
  dart.setMethodSignature(object$.Constraints, () => ({
    __proto__: dart.getMethods(object$.Constraints.__proto__),
    debugAssertIsValid: dart.fnType(core.bool, [], {informationCollector: dart.nullable(dart.fnType(core.Iterable$(diagnostics.DiagnosticsNode), [])), isAppliedConstraint: core.bool}, {})
  }));
  dart.setLibraryUri(object$.Constraints, L5);
  var _owner = dart.privateName(object$, "_owner");
  var _didDisposeSemanticsHandle = dart.privateName(object$, "_didDisposeSemanticsHandle");
  var listener$ = dart.privateName(object$, "SemanticsHandle.listener");
  object$.SemanticsHandle = class SemanticsHandle extends core.Object {
    get listener() {
      return this[listener$];
    }
    set listener(value) {
      super.listener = value;
    }
    dispose() {
      if (this.listener != null) dart.nullCheck(this[_owner].semanticsOwner).removeListener(dart.nullCheck(this.listener));
      this[_owner][_didDisposeSemanticsHandle]();
    }
  };
  (object$.SemanticsHandle.__ = function(owner, listener) {
    if (owner == null) dart.nullFailed(L4, 742, 35, "owner");
    this[listener$] = listener;
    if (!(owner != null)) dart.assertFailed(null, L4, 743, 16, "owner != null");
    this[_owner] = owner;
    if (this.listener != null) dart.nullCheck(this[_owner].semanticsOwner).addListener(dart.nullCheck(this.listener));
  }).prototype = object$.SemanticsHandle.prototype;
  dart.addTypeTests(object$.SemanticsHandle);
  dart.addTypeCaches(object$.SemanticsHandle);
  dart.setMethodSignature(object$.SemanticsHandle, () => ({
    __proto__: dart.getMethods(object$.SemanticsHandle.__proto__),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(object$.SemanticsHandle, L5);
  dart.setFieldSignature(object$.SemanticsHandle, () => ({
    __proto__: dart.getFields(object$.SemanticsHandle.__proto__),
    [_owner]: dart.finalFieldType(object$.PipelineOwner),
    listener: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [])))
  }));
  var _rootNode = dart.privateName(object$, "_rootNode");
  var _outstandingSemanticsHandles = dart.privateName(object$, "_outstandingSemanticsHandles");
  var onNeedVisualUpdate$ = dart.privateName(object$, "PipelineOwner.onNeedVisualUpdate");
  var onSemanticsOwnerCreated$ = dart.privateName(object$, "PipelineOwner.onSemanticsOwnerCreated");
  var onSemanticsOwnerDisposed$ = dart.privateName(object$, "PipelineOwner.onSemanticsOwnerDisposed");
  object$.PipelineOwner = class PipelineOwner extends core.Object {
    get onNeedVisualUpdate() {
      return this[onNeedVisualUpdate$];
    }
    set onNeedVisualUpdate(value) {
      super.onNeedVisualUpdate = value;
    }
    get onSemanticsOwnerCreated() {
      return this[onSemanticsOwnerCreated$];
    }
    set onSemanticsOwnerCreated(value) {
      super.onSemanticsOwnerCreated = value;
    }
    get onSemanticsOwnerDisposed() {
      return this[onSemanticsOwnerDisposed$];
    }
    set onSemanticsOwnerDisposed(value) {
      super.onSemanticsOwnerDisposed = value;
    }
    requestVisualUpdate() {
      if (this.onNeedVisualUpdate != null) dart.nullCheck(this.onNeedVisualUpdate)();
    }
    get rootNode() {
      return this[_rootNode];
    }
    set rootNode(value) {
      let t34, t34$;
      if (dart.equals(this[_rootNode], value)) return;
      t34 = this[_rootNode];
      t34 == null ? null : t34.detach();
      this[_rootNode] = value;
      t34$ = this[_rootNode];
      t34$ == null ? null : t34$.attach(this);
    }
    get debugDoingLayout() {
      return this[_debugDoingLayout];
    }
    flushLayout() {
      let t34;
      if (!false) {
        developer.Timeline.startSync("Layout", {arguments: debug.timelineArgumentsIndicatingLandmarkEvent});
      }
      if (!dart.test(dart.fn(() => {
        this[_debugDoingLayout] = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 873, 12, "() {\n      _debugDoingLayout = true;\n      return true;\n    }()");
      try {
        while (dart.test(this[_nodesNeedingLayout][$isNotEmpty])) {
          let dirtyNodes = this[_nodesNeedingLayout];
          this[_nodesNeedingLayout] = JSArrayOfRenderObject().of([]);
          for (let node of (t34 = dirtyNodes, (() => {
            t34[$sort](dart.fn((a, b) => {
              if (a == null) dart.nullFailed(L4, 882, 72, "a");
              if (b == null) dart.nullFailed(L4, 882, 88, "b");
              return dart.notNull(a.depth) - dart.notNull(b.depth);
            }, RenderObjectAndRenderObjectToint()));
            return t34;
          })())) {
            if (dart.test(node[_needsLayout]) && dart.equals(node.owner, this)) node[_layoutWithoutResize]();
          }
        }
      } finally {
        if (!dart.test(dart.fn(() => {
          this[_debugDoingLayout] = false;
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L4, 888, 14, "() {\n        _debugDoingLayout = false;\n        return true;\n      }()");
        if (!false) {
          developer.Timeline.finishSync();
        }
      }
    }
    [_enableMutationsToDirtySubtrees](callback) {
      if (callback == null) dart.nullFailed(L4, 906, 53, "callback");
      if (!dart.test(this[_debugDoingLayout])) dart.assertFailed(null, L4, 907, 12, "_debugDoingLayout");
      let oldState = null;
      if (!dart.test(dart.fn(() => {
        oldState = this[_debugAllowMutationsToDirtySubtrees];
        this[_debugAllowMutationsToDirtySubtrees] = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 909, 12, "() {\n      oldState = _debugAllowMutationsToDirtySubtrees;\n      _debugAllowMutationsToDirtySubtrees = true;\n      return true;\n    }()");
      try {
        callback();
      } finally {
        if (!dart.test(dart.fn(() => {
          this[_debugAllowMutationsToDirtySubtrees] = dart.nullCheck(oldState);
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L4, 917, 14, "() {\n        _debugAllowMutationsToDirtySubtrees = oldState!;\n        return true;\n      }()");
      }
    }
    flushCompositingBits() {
      if (!false) {
        developer.Timeline.startSync("Compositing bits");
      }
      this[_nodesNeedingCompositingBitsUpdate][$sort](dart.fn((a, b) => {
        if (a == null) dart.nullFailed(L4, 933, 59, "a");
        if (b == null) dart.nullFailed(L4, 933, 75, "b");
        return dart.notNull(a.depth) - dart.notNull(b.depth);
      }, RenderObjectAndRenderObjectToint()));
      for (let node of this[_nodesNeedingCompositingBitsUpdate]) {
        if (dart.test(node[_needsCompositingBitsUpdate]) && dart.equals(node.owner, this)) node[_updateCompositingBits]();
      }
      this[_nodesNeedingCompositingBitsUpdate][$clear]();
      if (!false) {
        developer.Timeline.finishSync();
      }
    }
    get debugDoingPaint() {
      return this[_debugDoingPaint];
    }
    flushPaint() {
      let t34;
      if (!false) {
        developer.Timeline.startSync("Paint", {arguments: debug.timelineArgumentsIndicatingLandmarkEvent});
      }
      if (!dart.test(dart.fn(() => {
        this[_debugDoingPaint] = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 966, 12, "() {\n      _debugDoingPaint = true;\n      return true;\n    }()");
      try {
        let dirtyNodes = this[_nodesNeedingPaint];
        this[_nodesNeedingPaint] = JSArrayOfRenderObject().of([]);
        for (let node of (t34 = dirtyNodes, (() => {
          t34[$sort](dart.fn((a, b) => {
            if (a == null) dart.nullFailed(L4, 974, 70, "a");
            if (b == null) dart.nullFailed(L4, 974, 86, "b");
            return dart.notNull(b.depth) - dart.notNull(a.depth);
          }, RenderObjectAndRenderObjectToint()));
          return t34;
        })())) {
          if (!(node[_layer] != null)) dart.assertFailed(null, L4, 975, 16, "node._layer != null");
          if (dart.test(node[_needsPaint]) && dart.equals(node.owner, this)) {
            if (dart.test(dart.nullCheck(node[_layer]).attached)) {
              object$.PaintingContext.repaintCompositedChild(node);
            } else {
              node[_skippedPaintingOnLayer]();
            }
          }
        }
        if (!dart.test(this[_nodesNeedingPaint][$isEmpty])) dart.assertFailed(null, L4, 984, 14, "_nodesNeedingPaint.isEmpty");
      } finally {
        if (!dart.test(dart.fn(() => {
          this[_debugDoingPaint] = false;
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L4, 986, 14, "() {\n        _debugDoingPaint = false;\n        return true;\n      }()");
        if (!false) {
          developer.Timeline.finishSync();
        }
      }
    }
    get semanticsOwner() {
      return this[_semanticsOwner];
    }
    get debugOutstandingSemanticsHandles() {
      return this[_outstandingSemanticsHandles];
    }
    ensureSemantics(opts) {
      let listener = opts && 'listener' in opts ? opts.listener : null;
      this[_outstandingSemanticsHandles] = dart.notNull(this[_outstandingSemanticsHandles]) + 1;
      if (this[_outstandingSemanticsHandles] === 1) {
        if (!(this[_semanticsOwner] == null)) dart.assertFailed(null, L4, 1031, 14, "_semanticsOwner == null");
        this[_semanticsOwner] = new semantics.SemanticsOwner.new();
        if (this.onSemanticsOwnerCreated != null) dart.nullCheck(this.onSemanticsOwnerCreated)();
      }
      return new object$.SemanticsHandle.__(this, listener);
    }
    [_didDisposeSemanticsHandle]() {
      if (!(this[_semanticsOwner] != null)) dart.assertFailed(null, L4, 1040, 12, "_semanticsOwner != null");
      this[_outstandingSemanticsHandles] = dart.notNull(this[_outstandingSemanticsHandles]) - 1;
      if (this[_outstandingSemanticsHandles] === 0) {
        dart.nullCheck(this[_semanticsOwner]).dispose();
        this[_semanticsOwner] = null;
        if (this.onSemanticsOwnerDisposed != null) dart.nullCheck(this.onSemanticsOwnerDisposed)();
      }
    }
    flushSemantics() {
      let t34;
      if (this[_semanticsOwner] == null) return;
      if (!false) {
        developer.Timeline.startSync("Semantics");
      }
      if (!(this[_semanticsOwner] != null)) dart.assertFailed(null, L4, 1070, 12, "_semanticsOwner != null");
      if (!dart.test(dart.fn(() => {
        this[_debugDoingSemantics] = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L4, 1071, 12, "() {\n      _debugDoingSemantics = true;\n      return true;\n    }()");
      try {
        let nodesToProcess = (t34 = this[_nodesNeedingSemantics][$toList](), (() => {
          t34[$sort](dart.fn((a, b) => {
            if (a == null) dart.nullFailed(L4, 1077, 30, "a");
            if (b == null) dart.nullFailed(L4, 1077, 46, "b");
            return dart.notNull(a.depth) - dart.notNull(b.depth);
          }, RenderObjectAndRenderObjectToint()));
          return t34;
        })());
        this[_nodesNeedingSemantics].clear();
        for (let node of nodesToProcess) {
          if (dart.test(node[_needsSemanticsUpdate]) && dart.equals(node.owner, this)) node[_updateSemantics]();
        }
        dart.nullCheck(this[_semanticsOwner]).sendSemanticsUpdate();
      } finally {
        if (!dart.test(this[_nodesNeedingSemantics][$isEmpty])) dart.assertFailed(null, L4, 1085, 14, "_nodesNeedingSemantics.isEmpty");
        if (!dart.test(dart.fn(() => {
          this[_debugDoingSemantics] = false;
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L4, 1086, 14, "() {\n        _debugDoingSemantics = false;\n        return true;\n      }()");
        if (!false) {
          developer.Timeline.finishSync();
        }
      }
    }
  };
  (object$.PipelineOwner.new = function(opts) {
    let onNeedVisualUpdate = opts && 'onNeedVisualUpdate' in opts ? opts.onNeedVisualUpdate : null;
    let onSemanticsOwnerCreated = opts && 'onSemanticsOwnerCreated' in opts ? opts.onSemanticsOwnerCreated : null;
    let onSemanticsOwnerDisposed = opts && 'onSemanticsOwnerDisposed' in opts ? opts.onSemanticsOwnerDisposed : null;
    this[_rootNode] = null;
    this[_nodesNeedingLayout] = JSArrayOfRenderObject().of([]);
    this[_debugDoingLayout] = false;
    this[_debugAllowMutationsToDirtySubtrees] = false;
    this[_nodesNeedingCompositingBitsUpdate] = JSArrayOfRenderObject().of([]);
    this[_nodesNeedingPaint] = JSArrayOfRenderObject().of([]);
    this[_debugDoingPaint] = false;
    this[_semanticsOwner] = null;
    this[_outstandingSemanticsHandles] = 0;
    this[_debugDoingSemantics] = false;
    this[_nodesNeedingSemantics] = LinkedHashSetOfRenderObject().new();
    this[onNeedVisualUpdate$] = onNeedVisualUpdate;
    this[onSemanticsOwnerCreated$] = onSemanticsOwnerCreated;
    this[onSemanticsOwnerDisposed$] = onSemanticsOwnerDisposed;
    ;
  }).prototype = object$.PipelineOwner.prototype;
  dart.addTypeTests(object$.PipelineOwner);
  dart.addTypeCaches(object$.PipelineOwner);
  dart.setMethodSignature(object$.PipelineOwner, () => ({
    __proto__: dart.getMethods(object$.PipelineOwner.__proto__),
    requestVisualUpdate: dart.fnType(dart.void, []),
    flushLayout: dart.fnType(dart.void, []),
    [_enableMutationsToDirtySubtrees]: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    flushCompositingBits: dart.fnType(dart.void, []),
    flushPaint: dart.fnType(dart.void, []),
    ensureSemantics: dart.fnType(object$.SemanticsHandle, [], {listener: dart.nullable(dart.fnType(dart.void, []))}, {}),
    [_didDisposeSemanticsHandle]: dart.fnType(dart.void, []),
    flushSemantics: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(object$.PipelineOwner, () => ({
    __proto__: dart.getGetters(object$.PipelineOwner.__proto__),
    rootNode: dart.nullable(node.AbstractNode),
    debugDoingLayout: core.bool,
    debugDoingPaint: core.bool,
    semanticsOwner: dart.nullable(semantics.SemanticsOwner),
    debugOutstandingSemanticsHandles: core.int
  }));
  dart.setSetterSignature(object$.PipelineOwner, () => ({
    __proto__: dart.getSetters(object$.PipelineOwner.__proto__),
    rootNode: dart.nullable(node.AbstractNode)
  }));
  dart.setLibraryUri(object$.PipelineOwner, L5);
  dart.setFieldSignature(object$.PipelineOwner, () => ({
    __proto__: dart.getFields(object$.PipelineOwner.__proto__),
    onNeedVisualUpdate: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onSemanticsOwnerCreated: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onSemanticsOwnerDisposed: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_rootNode]: dart.fieldType(dart.nullable(node.AbstractNode)),
    [_nodesNeedingLayout]: dart.fieldType(core.List$(object$.RenderObject)),
    [_debugDoingLayout]: dart.fieldType(core.bool),
    [_debugAllowMutationsToDirtySubtrees]: dart.fieldType(core.bool),
    [_nodesNeedingCompositingBitsUpdate]: dart.finalFieldType(core.List$(object$.RenderObject)),
    [_nodesNeedingPaint]: dart.fieldType(core.List$(object$.RenderObject)),
    [_debugDoingPaint]: dart.fieldType(core.bool),
    [_semanticsOwner]: dart.fieldType(dart.nullable(semantics.SemanticsOwner)),
    [_outstandingSemanticsHandles]: dart.fieldType(core.int),
    [_debugDoingSemantics]: dart.fieldType(core.bool),
    [_nodesNeedingSemantics]: dart.finalFieldType(core.Set$(object$.RenderObject))
  }));
  const _is_ContainerParentDataMixin_default = Symbol('_is_ContainerParentDataMixin_default');
  var previousSibling = dart.privateName(object$, "ContainerParentDataMixin.previousSibling");
  var nextSibling = dart.privateName(object$, "ContainerParentDataMixin.nextSibling");
  object$.ContainerParentDataMixin$ = dart.generic(ChildType => {
    var ChildTypeN = () => (ChildTypeN = dart.constFn(dart.nullable(ChildType)))();
    class ContainerParentDataMixin extends object$.ParentData {}
    ContainerParentDataMixin[dart.mixinOn] = ParentData => class ContainerParentDataMixin extends ParentData {
      get previousSibling() {
        return this[previousSibling];
      }
      set previousSibling(value) {
        this[previousSibling] = ChildTypeN().as(value);
      }
      get nextSibling() {
        return this[nextSibling];
      }
      set nextSibling(value) {
        this[nextSibling] = ChildTypeN().as(value);
      }
      detach() {
        if (!(this.previousSibling == null)) dart.assertFailed("Pointers to siblings must be nulled before detaching ParentData.", L4, 3070, 12, "previousSibling == null");
        if (!(this.nextSibling == null)) dart.assertFailed("Pointers to siblings must be nulled before detaching ParentData.", L4, 3071, 12, "nextSibling == null");
        super.detach();
      }
    };
    (ContainerParentDataMixin[dart.mixinNew] = function() {
      this[previousSibling] = null;
      this[nextSibling] = null;
    }).prototype = ContainerParentDataMixin.prototype;
    dart.addTypeTests(ContainerParentDataMixin);
    ContainerParentDataMixin.prototype[_is_ContainerParentDataMixin_default] = true;
    dart.addTypeCaches(ContainerParentDataMixin);
    ContainerParentDataMixin[dart.implements] = () => [object$.ParentData];
    dart.setLibraryUri(ContainerParentDataMixin, L5);
    dart.setFieldSignature(ContainerParentDataMixin, () => ({
      __proto__: dart.getFields(ContainerParentDataMixin.__proto__),
      previousSibling: dart.fieldType(dart.nullable(ChildType)),
      nextSibling: dart.fieldType(dart.nullable(ChildType))
    }));
    return ContainerParentDataMixin;
  });
  object$.ContainerParentDataMixin = object$.ContainerParentDataMixin$();
  dart.addTypeTests(object$.ContainerParentDataMixin, _is_ContainerParentDataMixin_default);
  var _childCount = dart.privateName(object$, "_childCount");
  var _firstChild$ = dart.privateName(object$, "_firstChild");
  var _lastChild$ = dart.privateName(object$, "_lastChild");
  var _debugUltimatePreviousSiblingOf$ = dart.privateName(object$, "_debugUltimatePreviousSiblingOf");
  var _debugUltimateNextSiblingOf$ = dart.privateName(object$, "_debugUltimateNextSiblingOf");
  var _insertIntoChildList = dart.privateName(object$, "_insertIntoChildList");
  var _removeFromChildList = dart.privateName(object$, "_removeFromChildList");
  const _is_ContainerRenderObjectMixin_default = Symbol('_is_ContainerRenderObjectMixin_default');
  object$.ContainerRenderObjectMixin$ = dart.generic((ChildType, ParentDataType) => {
    var ChildTypeN = () => (ChildTypeN = dart.constFn(dart.nullable(ChildType)))();
    var ListOfChildType = () => (ListOfChildType = dart.constFn(core.List$(ChildType)))();
    var ListNOfChildType = () => (ListNOfChildType = dart.constFn(dart.nullable(ListOfChildType())))();
    class ContainerRenderObjectMixin extends object$.RenderObject {}
    ContainerRenderObjectMixin[dart.mixinOn] = RenderObject => class ContainerRenderObjectMixin extends RenderObject {
      [_debugUltimatePreviousSiblingOf$](child, opts) {
        if (child == null) dart.nullFailed(L4, 3095, 50, "child");
        let equals = opts && 'equals' in opts ? opts.equals : null;
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        while (childParentData.previousSibling != null) {
          if (!!dart.equals(childParentData.previousSibling, child)) dart.assertFailed(null, L4, 3098, 14, "childParentData.previousSibling != child");
          child = dart.nullCheck(childParentData.previousSibling);
          childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        }
        return dart.equals(child, equals);
      }
      [_debugUltimateNextSiblingOf$](child, opts) {
        if (child == null) dart.nullFailed(L4, 3104, 46, "child");
        let equals = opts && 'equals' in opts ? opts.equals : null;
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        while (childParentData.nextSibling != null) {
          if (!!dart.equals(childParentData.nextSibling, child)) dart.assertFailed(null, L4, 3107, 14, "childParentData.nextSibling != child");
          child = dart.nullCheck(childParentData.nextSibling);
          childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        }
        return dart.equals(child, equals);
      }
      get childCount() {
        return this[_childCount];
      }
      debugValidateChild(child) {
        if (child == null) dart.nullFailed(L4, 3124, 40, "child");
        if (!dart.test(dart.fn(() => {
          if (!ChildType.is(child)) {
            dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A " + dart.str(this[$runtimeType]) + " expected a child of type " + dart.str(dart.wrapType(ChildType)) + " but received a " + "child of type " + dart.str(dart.runtimeType(child)) + "."), new assertions.ErrorDescription.new("RenderObjects expect specific types of children because they " + "coordinate with their children during layout and paint. For " + "example, a RenderSliver cannot be the child of a RenderBox because " + "a RenderSliver does not understand the RenderBox layout protocol."), new assertions.ErrorSpacer.new(), new (DiagnosticsPropertyOfObjectN()).new("The " + dart.str(this[$runtimeType]) + " that expected a " + dart.str(dart.wrapType(ChildType)) + " child was created by", this.debugCreator, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new assertions.ErrorSpacer.new(), new (DiagnosticsPropertyOfObjectN()).new("The " + dart.str(dart.runtimeType(child)) + " that did not match the expected child type " + "was created by", child.debugCreator, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L4, 3125, 12, "() {\n      if (child is! ChildType) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary(\n            'A $runtimeType expected a child of type $ChildType but received a '\n            'child of type ${child.runtimeType}.'\n          ),\n          ErrorDescription(\n            'RenderObjects expect specific types of children because they '\n            'coordinate with their children during layout and paint. For '\n            'example, a RenderSliver cannot be the child of a RenderBox because '\n            'a RenderSliver does not understand the RenderBox layout protocol.'\n          ),\n          ErrorSpacer(),\n          DiagnosticsProperty<Object?>(\n            'The $runtimeType that expected a $ChildType child was created by',\n            debugCreator,\n            style: DiagnosticsTreeStyle.errorProperty,\n          ),\n          ErrorSpacer(),\n          DiagnosticsProperty<Object?>(\n            'The ${child.runtimeType} that did not match the expected child type '\n            'was created by',\n            child.debugCreator,\n            style: DiagnosticsTreeStyle.errorProperty,\n          ),\n        ]);\n      }\n      return true;\n    }()");
        return true;
      }
      [_insertIntoChildList](child, opts) {
        if (child == null) dart.nullFailed(L4, 3160, 39, "child");
        let after = opts && 'after' in opts ? opts.after : null;
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        if (!(childParentData.nextSibling == null)) dart.assertFailed(null, L4, 3162, 12, "childParentData.nextSibling == null");
        if (!(childParentData.previousSibling == null)) dart.assertFailed(null, L4, 3163, 12, "childParentData.previousSibling == null");
        this[_childCount] = dart.notNull(this[_childCount]) + 1;
        if (!(dart.notNull(this[_childCount]) > 0)) dart.assertFailed(null, L4, 3165, 12, "_childCount > 0");
        if (after == null) {
          childParentData.nextSibling = this[_firstChild$];
          if (this[_firstChild$] != null) {
            let _firstChildParentData = ParentDataType.as(dart.nullCheck(dart.nullCheck(this[_firstChild$]).parentData));
            _firstChildParentData.previousSibling = child;
          }
          this[_firstChild$] = child;
          this[_lastChild$] == null ? this[_lastChild$] = child : null;
        } else {
          if (!(this[_firstChild$] != null)) dart.assertFailed(null, L4, 3176, 14, "_firstChild != null");
          if (!(this[_lastChild$] != null)) dart.assertFailed(null, L4, 3177, 14, "_lastChild != null");
          if (!dart.test(this[_debugUltimatePreviousSiblingOf$](after, {equals: this[_firstChild$]}))) dart.assertFailed(null, L4, 3178, 14, "_debugUltimatePreviousSiblingOf(after, equals: _firstChild)");
          if (!dart.test(this[_debugUltimateNextSiblingOf$](after, {equals: this[_lastChild$]}))) dart.assertFailed(null, L4, 3179, 14, "_debugUltimateNextSiblingOf(after, equals: _lastChild)");
          let afterParentData = ParentDataType.as(dart.nullCheck(after.parentData));
          if (afterParentData.nextSibling == null) {
            if (!dart.equals(after, this[_lastChild$])) dart.assertFailed(null, L4, 3183, 16, "after == _lastChild");
            childParentData.previousSibling = after;
            afterParentData.nextSibling = child;
            this[_lastChild$] = child;
          } else {
            childParentData.nextSibling = afterParentData.nextSibling;
            childParentData.previousSibling = after;
            let childPreviousSiblingParentData = ParentDataType.as(dart.nullCheck(dart.nullCheck(childParentData.previousSibling).parentData));
            let childNextSiblingParentData = ParentDataType.as(dart.nullCheck(dart.nullCheck(childParentData.nextSibling).parentData));
            childPreviousSiblingParentData.nextSibling = child;
            childNextSiblingParentData.previousSibling = child;
            if (!dart.equals(afterParentData.nextSibling, child)) dart.assertFailed(null, L4, 3197, 16, "afterParentData.nextSibling == child");
          }
        }
      }
      insert(child, opts) {
        ChildType.as(child);
        if (child == null) dart.nullFailed(L4, 3205, 25, "child");
        let after = opts && 'after' in opts ? opts.after : null;
        ChildTypeN().as(after);
        if (!!dart.equals(child, this)) dart.assertFailed("A RenderObject cannot be inserted into itself.", L4, 3206, 12, "child != this");
        if (!!dart.equals(after, this)) dart.assertFailed("A RenderObject cannot simultaneously be both the parent and the sibling of another RenderObject.", L4, 3207, 12, "after != this");
        if (!!dart.equals(child, after)) dart.assertFailed("A RenderObject cannot be inserted after itself.", L4, 3208, 12, "child != after");
        if (!!dart.equals(child, this[_firstChild$])) dart.assertFailed(null, L4, 3209, 12, "child != _firstChild");
        if (!!dart.equals(child, this[_lastChild$])) dart.assertFailed(null, L4, 3210, 12, "child != _lastChild");
        this.adoptChild(child);
        this[_insertIntoChildList](child, {after: after});
      }
      add(child) {
        ChildType.as(child);
        if (child == null) dart.nullFailed(L4, 3216, 22, "child");
        this.insert(child, {after: this[_lastChild$]});
      }
      addAll(children) {
        let t34;
        ListNOfChildType().as(children);
        t34 = children;
        t34 == null ? null : t34[$forEach](dart.bind(this, 'add'));
      }
      [_removeFromChildList](child) {
        if (child == null) dart.nullFailed(L4, 3225, 39, "child");
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        if (!dart.test(this[_debugUltimatePreviousSiblingOf$](child, {equals: this[_firstChild$]}))) dart.assertFailed(null, L4, 3227, 12, "_debugUltimatePreviousSiblingOf(child, equals: _firstChild)");
        if (!dart.test(this[_debugUltimateNextSiblingOf$](child, {equals: this[_lastChild$]}))) dart.assertFailed(null, L4, 3228, 12, "_debugUltimateNextSiblingOf(child, equals: _lastChild)");
        if (!(dart.notNull(this[_childCount]) >= 0)) dart.assertFailed(null, L4, 3229, 12, "_childCount >= 0");
        if (childParentData.previousSibling == null) {
          if (!dart.equals(this[_firstChild$], child)) dart.assertFailed(null, L4, 3231, 14, "_firstChild == child");
          this[_firstChild$] = childParentData.nextSibling;
        } else {
          let childPreviousSiblingParentData = ParentDataType.as(dart.nullCheck(dart.nullCheck(childParentData.previousSibling).parentData));
          childPreviousSiblingParentData.nextSibling = childParentData.nextSibling;
        }
        if (childParentData.nextSibling == null) {
          if (!dart.equals(this[_lastChild$], child)) dart.assertFailed(null, L4, 3238, 14, "_lastChild == child");
          this[_lastChild$] = childParentData.previousSibling;
        } else {
          let childNextSiblingParentData = ParentDataType.as(dart.nullCheck(dart.nullCheck(childParentData.nextSibling).parentData));
          childNextSiblingParentData.previousSibling = childParentData.previousSibling;
        }
        childParentData.previousSibling = null;
        childParentData.nextSibling = null;
        this[_childCount] = dart.notNull(this[_childCount]) - 1;
      }
      remove(child) {
        ChildType.as(child);
        if (child == null) dart.nullFailed(L4, 3252, 25, "child");
        this[_removeFromChildList](child);
        this.dropChild(child);
      }
      removeAll() {
        let child = this[_firstChild$];
        while (child != null) {
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          let next = childParentData.nextSibling;
          childParentData.previousSibling = null;
          childParentData.nextSibling = null;
          this.dropChild(child);
          child = next;
        }
        this[_firstChild$] = null;
        this[_lastChild$] = null;
        this[_childCount] = 0;
      }
      move(child, opts) {
        ChildType.as(child);
        if (child == null) dart.nullFailed(L4, 3280, 23, "child");
        let after = opts && 'after' in opts ? opts.after : null;
        ChildTypeN().as(after);
        if (!!dart.equals(child, this)) dart.assertFailed(null, L4, 3281, 12, "child != this");
        if (!!dart.equals(after, this)) dart.assertFailed(null, L4, 3282, 12, "after != this");
        if (!!dart.equals(child, after)) dart.assertFailed(null, L4, 3283, 12, "child != after");
        if (!dart.equals(child.parent, this)) dart.assertFailed(null, L4, 3284, 12, "child.parent == this");
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        if (dart.equals(childParentData.previousSibling, after)) return;
        this[_removeFromChildList](child);
        this[_insertIntoChildList](child, {after: after});
        this.markNeedsLayout();
      }
      attach(owner) {
        object$.PipelineOwner.as(owner);
        if (owner == null) dart.nullFailed(L4, 3294, 29, "owner");
        super.attach(owner);
        let child = this[_firstChild$];
        while (child != null) {
          child.attach(owner);
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
      }
      detach() {
        super.detach();
        let child = this[_firstChild$];
        while (child != null) {
          child.detach();
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
      }
      redepthChildren() {
        let child = this[_firstChild$];
        while (child != null) {
          this.redepthChild(child);
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
      }
      visitChildren(visitor) {
        if (visitor == null) dart.nullFailed(L4, 3326, 42, "visitor");
        let child = this[_firstChild$];
        while (child != null) {
          visitor(child);
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
      }
      get firstChild() {
        return this[_firstChild$];
      }
      get lastChild() {
        return this[_lastChild$];
      }
      childBefore(child) {
        ChildType.as(child);
        if (child == null) dart.nullFailed(L4, 3342, 36, "child");
        if (!(child != null)) dart.assertFailed(null, L4, 3343, 12, "child != null");
        if (!dart.equals(child.parent, this)) dart.assertFailed(null, L4, 3344, 12, "child.parent == this");
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        return childParentData.previousSibling;
      }
      childAfter(child) {
        ChildType.as(child);
        if (child == null) dart.nullFailed(L4, 3350, 35, "child");
        if (!(child != null)) dart.assertFailed(null, L4, 3351, 12, "child != null");
        if (!dart.equals(child.parent, this)) dart.assertFailed(null, L4, 3352, 12, "child.parent == this");
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        return childParentData.nextSibling;
      }
      debugDescribeChildren() {
        let children = JSArrayOfDiagnosticsNode().of([]);
        if (this.firstChild != null) {
          let child = dart.nullCheck(this.firstChild);
          let count = 1;
          while (true) {
            children[$add](child.toDiagnosticsNode({name: "child " + dart.str(count)}));
            if (child[$_equals](this.lastChild)) break;
            count = count + 1;
            let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
            child = dart.nullCheck(childParentData.nextSibling);
          }
        }
        return children;
      }
    };
    (ContainerRenderObjectMixin[dart.mixinNew] = function() {
      this[_childCount] = 0;
      this[_firstChild$] = null;
      this[_lastChild$] = null;
    }).prototype = ContainerRenderObjectMixin.prototype;
    dart.addTypeTests(ContainerRenderObjectMixin);
    ContainerRenderObjectMixin.prototype[_is_ContainerRenderObjectMixin_default] = true;
    dart.addTypeCaches(ContainerRenderObjectMixin);
    ContainerRenderObjectMixin[dart.implements] = () => [object$.RenderObject];
    dart.setMethodSignature(ContainerRenderObjectMixin, () => ({
      __proto__: dart.getMethods(ContainerRenderObjectMixin.__proto__),
      [_debugUltimatePreviousSiblingOf$]: dart.fnType(core.bool, [ChildType], {equals: dart.nullable(ChildType)}, {}),
      [_debugUltimateNextSiblingOf$]: dart.fnType(core.bool, [ChildType], {equals: dart.nullable(ChildType)}, {}),
      debugValidateChild: dart.fnType(core.bool, [object$.RenderObject]),
      [_insertIntoChildList]: dart.fnType(dart.void, [ChildType], {after: dart.nullable(ChildType)}, {}),
      insert: dart.fnType(dart.void, [dart.nullable(core.Object)], {after: dart.nullable(core.Object)}, {}),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      [_removeFromChildList]: dart.fnType(dart.void, [ChildType]),
      remove: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      removeAll: dart.fnType(dart.void, []),
      move: dart.fnType(dart.void, [dart.nullable(core.Object)], {after: dart.nullable(core.Object)}, {}),
      childBefore: dart.fnType(dart.nullable(ChildType), [dart.nullable(core.Object)]),
      childAfter: dart.fnType(dart.nullable(ChildType), [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(ContainerRenderObjectMixin, () => ({
      __proto__: dart.getGetters(ContainerRenderObjectMixin.__proto__),
      childCount: core.int,
      firstChild: dart.nullable(ChildType),
      lastChild: dart.nullable(ChildType)
    }));
    dart.setLibraryUri(ContainerRenderObjectMixin, L5);
    dart.setFieldSignature(ContainerRenderObjectMixin, () => ({
      __proto__: dart.getFields(ContainerRenderObjectMixin.__proto__),
      [_childCount]: dart.fieldType(core.int),
      [_firstChild$]: dart.fieldType(dart.nullable(ChildType)),
      [_lastChild$]: dart.fieldType(dart.nullable(ChildType))
    }));
    return ContainerRenderObjectMixin;
  });
  object$.ContainerRenderObjectMixin = object$.ContainerRenderObjectMixin$();
  dart.addTypeTests(object$.ContainerRenderObjectMixin, _is_ContainerRenderObjectMixin_default);
  object$.RelayoutWhenSystemFontsChangeMixin = class RelayoutWhenSystemFontsChangeMixin extends object$.RenderObject {};
  object$.RelayoutWhenSystemFontsChangeMixin[dart.mixinOn] = RenderObject => class RelayoutWhenSystemFontsChangeMixin extends RenderObject {
    systemFontsDidChange() {
      this.markNeedsLayout();
    }
    attach(owner) {
      object$.PipelineOwner.as(owner);
      if (owner == null) dart.nullFailed(L4, 3398, 39, "owner");
      super.attach(owner);
      dart.nullCheck(binding$3.PaintingBinding.instance).systemFonts.addListener(dart.bind(this, 'systemFontsDidChange'));
    }
    detach() {
      dart.nullCheck(binding$3.PaintingBinding.instance).systemFonts.removeListener(dart.bind(this, 'systemFontsDidChange'));
      super.detach();
    }
  };
  dart.addTypeTests(object$.RelayoutWhenSystemFontsChangeMixin);
  dart.addTypeCaches(object$.RelayoutWhenSystemFontsChangeMixin);
  object$.RelayoutWhenSystemFontsChangeMixin[dart.implements] = () => [object$.RenderObject];
  dart.setMethodSignature(object$.RelayoutWhenSystemFontsChangeMixin, () => ({
    __proto__: dart.getMethods(object$.RelayoutWhenSystemFontsChangeMixin.__proto__),
    systemFontsDidChange: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(object$.RelayoutWhenSystemFontsChangeMixin, L5);
  object$._SemanticsFragment = class _SemanticsFragment extends core.Object {
    get abortsWalk() {
      return false;
    }
  };
  (object$._SemanticsFragment.new = function(opts) {
    let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
    if (dropsSemanticsOfPreviousSiblings == null) dart.nullFailed(L4, 3419, 38, "dropsSemanticsOfPreviousSiblings");
    this.dropsSemanticsOfPreviousSiblings = dropsSemanticsOfPreviousSiblings;
    if (!(dropsSemanticsOfPreviousSiblings != null)) dart.assertFailed(null, L4, 3420, 15, "dropsSemanticsOfPreviousSiblings != null");
    ;
  }).prototype = object$._SemanticsFragment.prototype;
  dart.addTypeTests(object$._SemanticsFragment);
  dart.addTypeCaches(object$._SemanticsFragment);
  dart.setGetterSignature(object$._SemanticsFragment, () => ({
    __proto__: dart.getGetters(object$._SemanticsFragment.__proto__),
    abortsWalk: core.bool
  }));
  dart.setLibraryUri(object$._SemanticsFragment, L5);
  dart.setFieldSignature(object$._SemanticsFragment, () => ({
    __proto__: dart.getFields(object$._SemanticsFragment.__proto__),
    dropsSemanticsOfPreviousSiblings: dart.finalFieldType(core.bool)
  }));
  var interestingFragments = dart.privateName(object$, "_ContainerSemanticsFragment.interestingFragments");
  object$._ContainerSemanticsFragment = class _ContainerSemanticsFragment extends object$._SemanticsFragment {
    get interestingFragments() {
      return this[interestingFragments];
    }
    set interestingFragments(value) {
      super.interestingFragments = value;
    }
    addAll(fragments) {
      if (fragments == null) dart.nullFailed(L4, 3461, 55, "fragments");
      this.interestingFragments[$addAll](fragments);
    }
  };
  (object$._ContainerSemanticsFragment.new = function(opts) {
    let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
    if (dropsSemanticsOfPreviousSiblings == null) dart.nullFailed(L4, 3457, 47, "dropsSemanticsOfPreviousSiblings");
    this[interestingFragments] = JSArrayOf_InterestingSemanticsFragment().of([]);
    object$._ContainerSemanticsFragment.__proto__.new.call(this, {dropsSemanticsOfPreviousSiblings: dropsSemanticsOfPreviousSiblings});
    ;
  }).prototype = object$._ContainerSemanticsFragment.prototype;
  dart.addTypeTests(object$._ContainerSemanticsFragment);
  dart.addTypeCaches(object$._ContainerSemanticsFragment);
  dart.setMethodSignature(object$._ContainerSemanticsFragment, () => ({
    __proto__: dart.getMethods(object$._ContainerSemanticsFragment.__proto__),
    addAll: dart.fnType(dart.void, [core.Iterable$(object$._InterestingSemanticsFragment)])
  }));
  dart.setLibraryUri(object$._ContainerSemanticsFragment, L5);
  dart.setFieldSignature(object$._ContainerSemanticsFragment, () => ({
    __proto__: dart.getFields(object$._ContainerSemanticsFragment.__proto__),
    interestingFragments: dart.finalFieldType(core.List$(object$._InterestingSemanticsFragment))
  }));
  var _tagsForChildren = dart.privateName(object$, "_tagsForChildren");
  var _ancestorChain = dart.privateName(object$, "_ancestorChain");
  object$._InterestingSemanticsFragment = class _InterestingSemanticsFragment extends object$._SemanticsFragment {
    get owner() {
      return this[_ancestorChain][$first];
    }
    get hasConfigForParent() {
      return this.config != null;
    }
    get interestingFragments() {
      return JSArrayOf_InterestingSemanticsFragment().of([this]);
    }
    addTags(tags) {
      if (tags == null || dart.test(tags[$isEmpty])) return;
      this[_tagsForChildren] == null ? this[_tagsForChildren] = LinkedHashSetOfSemanticsTag().new() : null;
      dart.nullCheck(this[_tagsForChildren]).addAll(tags);
    }
    addAncestor(ancestor) {
      if (ancestor == null) dart.nullFailed(L4, 3553, 33, "ancestor");
      this[_ancestorChain][$add](ancestor);
    }
  };
  (object$._InterestingSemanticsFragment.new = function(opts) {
    let owner = opts && 'owner' in opts ? opts.owner : null;
    if (owner == null) dart.nullFailed(L4, 3477, 27, "owner");
    let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
    if (dropsSemanticsOfPreviousSiblings == null) dart.nullFailed(L4, 3478, 19, "dropsSemanticsOfPreviousSiblings");
    this[_tagsForChildren] = null;
    if (!(owner != null)) dart.assertFailed(null, L4, 3479, 15, "owner != null");
    this[_ancestorChain] = JSArrayOfRenderObject().of([owner]);
    object$._InterestingSemanticsFragment.__proto__.new.call(this, {dropsSemanticsOfPreviousSiblings: dropsSemanticsOfPreviousSiblings});
    ;
  }).prototype = object$._InterestingSemanticsFragment.prototype;
  dart.addTypeTests(object$._InterestingSemanticsFragment);
  dart.addTypeCaches(object$._InterestingSemanticsFragment);
  dart.setMethodSignature(object$._InterestingSemanticsFragment, () => ({
    __proto__: dart.getMethods(object$._InterestingSemanticsFragment.__proto__),
    addTags: dart.fnType(dart.void, [dart.nullable(core.Iterable$(semantics.SemanticsTag))]),
    addAncestor: dart.fnType(dart.void, [object$.RenderObject])
  }));
  dart.setGetterSignature(object$._InterestingSemanticsFragment, () => ({
    __proto__: dart.getGetters(object$._InterestingSemanticsFragment.__proto__),
    owner: object$.RenderObject,
    hasConfigForParent: core.bool,
    interestingFragments: core.List$(object$._InterestingSemanticsFragment)
  }));
  dart.setLibraryUri(object$._InterestingSemanticsFragment, L5);
  dart.setFieldSignature(object$._InterestingSemanticsFragment, () => ({
    __proto__: dart.getFields(object$._InterestingSemanticsFragment.__proto__),
    [_ancestorChain]: dart.finalFieldType(core.List$(object$.RenderObject)),
    [_tagsForChildren]: dart.fieldType(dart.nullable(core.Set$(semantics.SemanticsTag)))
  }));
  var _children = dart.privateName(object$, "_children");
  object$._RootSemanticsFragment = class _RootSemanticsFragment extends object$._InterestingSemanticsFragment {
    compileChildren(opts) {
      let t34;
      let parentSemanticsClipRect = opts && 'parentSemanticsClipRect' in opts ? opts.parentSemanticsClipRect : null;
      let parentPaintClipRect = opts && 'parentPaintClipRect' in opts ? opts.parentPaintClipRect : null;
      let elevationAdjustment = opts && 'elevationAdjustment' in opts ? opts.elevationAdjustment : null;
      if (elevationAdjustment == null) dart.nullFailed(L4, 3570, 100, "elevationAdjustment");
      let result = opts && 'result' in opts ? opts.result : null;
      if (result == null) dart.nullFailed(L4, 3570, 150, "result");
      if (!(this[_tagsForChildren] == null || dart.test(dart.nullCheck(this[_tagsForChildren])[$isEmpty]))) dart.assertFailed(null, L4, 3571, 12, "_tagsForChildren == null || _tagsForChildren!.isEmpty");
      if (!(parentSemanticsClipRect == null)) dart.assertFailed(null, L4, 3572, 12, "parentSemanticsClipRect == null");
      if (!(parentPaintClipRect == null)) dart.assertFailed(null, L4, 3573, 12, "parentPaintClipRect == null");
      if (!(this[_ancestorChain][$length] === 1)) dart.assertFailed(null, L4, 3574, 12, "_ancestorChain.length == 1");
      if (!(elevationAdjustment === 0.0)) dart.assertFailed(null, L4, 3575, 12, "elevationAdjustment == 0.0");
      t34 = this.owner;
      t34[_semantics] == null ? t34[_semantics] = new semantics.SemanticsNode.root({showOnScreen: dart.bind(this.owner, 'showOnScreen'), owner: dart.nullCheck(dart.nullCheck(this.owner.owner).semanticsOwner)}) : null;
      let node = dart.nullCheck(this.owner[_semantics]);
      if (!dart.test(matrix_utils.MatrixUtils.matrixEquals(node.transform, vector_math_64.Matrix4.identity()))) dart.assertFailed(null, L4, 3582, 12, "MatrixUtils.matrixEquals(node.transform, Matrix4.identity())");
      if (!(node.parentSemanticsClipRect == null)) dart.assertFailed(null, L4, 3583, 12, "node.parentSemanticsClipRect == null");
      if (!(node.parentPaintClipRect == null)) dart.assertFailed(null, L4, 3584, 12, "node.parentPaintClipRect == null");
      node.rect = this.owner.semanticBounds;
      let children = JSArrayOfSemanticsNode().of([]);
      for (let fragment of this[_children]) {
        if (!(fragment.config == null)) dart.assertFailed(null, L4, 3590, 14, "fragment.config == null");
        fragment.compileChildren({parentSemanticsClipRect: parentSemanticsClipRect, parentPaintClipRect: parentPaintClipRect, elevationAdjustment: 0.0, result: children});
      }
      node.updateWith({config: null, childrenInInversePaintOrder: children});
      if (!(!dart.test(node.isInvisible) || dart.test(children[$isEmpty]))) dart.assertFailed(null, L4, 3605, 12, "!node.isInvisible || children.isEmpty");
      result[$add](node);
    }
    get config() {
      return null;
    }
    markAsExplicit() {
    }
    addAll(fragments) {
      if (fragments == null) dart.nullFailed(L4, 3620, 55, "fragments");
      this[_children][$addAll](fragments);
    }
  };
  (object$._RootSemanticsFragment.new = function(opts) {
    let owner = opts && 'owner' in opts ? opts.owner : null;
    if (owner == null) dart.nullFailed(L4, 3565, 27, "owner");
    let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
    if (dropsSemanticsOfPreviousSiblings == null) dart.nullFailed(L4, 3566, 19, "dropsSemanticsOfPreviousSiblings");
    this[_children] = JSArrayOf_InterestingSemanticsFragment().of([]);
    object$._RootSemanticsFragment.__proto__.new.call(this, {owner: owner, dropsSemanticsOfPreviousSiblings: dropsSemanticsOfPreviousSiblings});
    ;
  }).prototype = object$._RootSemanticsFragment.prototype;
  dart.addTypeTests(object$._RootSemanticsFragment);
  dart.addTypeCaches(object$._RootSemanticsFragment);
  dart.setMethodSignature(object$._RootSemanticsFragment, () => ({
    __proto__: dart.getMethods(object$._RootSemanticsFragment.__proto__),
    compileChildren: dart.fnType(dart.void, [], {parentPaintClipRect: dart.nullable(ui.Rect), parentSemanticsClipRect: dart.nullable(ui.Rect)}, {elevationAdjustment: core.double, result: core.List$(semantics.SemanticsNode)}),
    markAsExplicit: dart.fnType(dart.void, []),
    addAll: dart.fnType(dart.void, [core.Iterable$(object$._InterestingSemanticsFragment)])
  }));
  dart.setGetterSignature(object$._RootSemanticsFragment, () => ({
    __proto__: dart.getGetters(object$._RootSemanticsFragment.__proto__),
    config: dart.nullable(semantics.SemanticsConfiguration)
  }));
  dart.setLibraryUri(object$._RootSemanticsFragment, L5);
  dart.setFieldSignature(object$._RootSemanticsFragment, () => ({
    __proto__: dart.getFields(object$._RootSemanticsFragment.__proto__),
    [_children]: dart.finalFieldType(core.List$(object$._InterestingSemanticsFragment))
  }));
  var _isConfigWritable = dart.privateName(object$, "_isConfigWritable");
  var _isExplicit = dart.privateName(object$, "_isExplicit");
  var _mergeIntoParent = dart.privateName(object$, "_mergeIntoParent");
  var _config = dart.privateName(object$, "_config");
  var _needsGeometryUpdate = dart.privateName(object$, "_needsGeometryUpdate");
  var _ensureConfigIsWritable = dart.privateName(object$, "_ensureConfigIsWritable");
  object$._SwitchableSemanticsFragment = class _SwitchableSemanticsFragment extends object$._InterestingSemanticsFragment {
    compileChildren(opts) {
      let t34, t34$, t34$0, t34$1, t34$2;
      let parentSemanticsClipRect = opts && 'parentSemanticsClipRect' in opts ? opts.parentSemanticsClipRect : null;
      let parentPaintClipRect = opts && 'parentPaintClipRect' in opts ? opts.parentPaintClipRect : null;
      let elevationAdjustment = opts && 'elevationAdjustment' in opts ? opts.elevationAdjustment : null;
      if (elevationAdjustment == null) dart.nullFailed(L4, 3661, 100, "elevationAdjustment");
      let result = opts && 'result' in opts ? opts.result : null;
      if (result == null) dart.nullFailed(L4, 3661, 150, "result");
      if (!dart.test(this[_isExplicit])) {
        this.owner[_semantics] = null;
        for (let fragment of this[_children]) {
          if (!dart.equals(this[_ancestorChain][$first], fragment[_ancestorChain][$last])) dart.assertFailed(null, L4, 3665, 16, "_ancestorChain.first == fragment._ancestorChain.last");
          fragment[_ancestorChain][$addAll](this[_ancestorChain][$skip](1));
          fragment.compileChildren({parentSemanticsClipRect: parentSemanticsClipRect, parentPaintClipRect: parentPaintClipRect, elevationAdjustment: dart.notNull(elevationAdjustment) + dart.notNull(this[_config].elevation), result: result});
        }
        return;
      }
      let geometry = dart.test(this[_needsGeometryUpdate]) ? new object$._SemanticsGeometry.new({parentSemanticsClipRect: parentSemanticsClipRect, parentPaintClipRect: parentPaintClipRect, ancestors: this[_ancestorChain]}) : null;
      if (!dart.test(this[_mergeIntoParent]) && dart.equals((t34 = geometry, t34 == null ? null : t34.dropFromTree), true)) return;
      t34$ = this.owner;
      t34$[_semantics] == null ? t34$[_semantics] = new semantics.SemanticsNode.new({showOnScreen: dart.bind(this.owner, 'showOnScreen')}) : null;
      let node = (t34$0 = dart.nullCheck(this.owner[_semantics]), (() => {
        t34$0.isMergedIntoParent = this[_mergeIntoParent];
        t34$0.tags = this[_tagsForChildren];
        return t34$0;
      })());
      node.elevationAdjustment = elevationAdjustment;
      if (elevationAdjustment !== 0.0) {
        this[_ensureConfigIsWritable]();
        t34$1 = this[_config];
        t34$1.elevation = dart.notNull(t34$1.elevation) + dart.notNull(elevationAdjustment);
      }
      if (geometry != null) {
        if (!dart.test(this[_needsGeometryUpdate])) dart.assertFailed(null, L4, 3699, 14, "_needsGeometryUpdate");
        t34$2 = node;
        (() => {
          t34$2.rect = geometry.rect;
          t34$2.transform = geometry.transform;
          t34$2.parentSemanticsClipRect = geometry.semanticsClipRect;
          t34$2.parentPaintClipRect = geometry.paintClipRect;
          return t34$2;
        })();
        if (!dart.test(this[_mergeIntoParent]) && dart.test(geometry.markAsHidden)) {
          this[_ensureConfigIsWritable]();
          this[_config].isHidden = true;
        }
      }
      let children = JSArrayOfSemanticsNode().of([]);
      for (let fragment of this[_children]) {
        fragment.compileChildren({parentSemanticsClipRect: node.parentSemanticsClipRect, parentPaintClipRect: node.parentPaintClipRect, elevationAdjustment: 0.0, result: children});
      }
      if (dart.test(this[_config].isSemanticBoundary)) {
        this.owner.assembleSemanticsNode(node, this[_config], children);
      } else {
        node.updateWith({config: this[_config], childrenInInversePaintOrder: children});
      }
      result[$add](node);
    }
    get config() {
      return dart.test(this[_isExplicit]) ? null : this[_config];
    }
    addAll(fragments) {
      if (fragments == null) dart.nullFailed(L4, 3734, 55, "fragments");
      for (let fragment of fragments) {
        this[_children][$add](fragment);
        if (fragment.config == null) continue;
        this[_ensureConfigIsWritable]();
        this[_config].absorb(dart.nullCheck(fragment.config));
      }
    }
    [_ensureConfigIsWritable]() {
      if (!dart.test(this[_isConfigWritable])) {
        this[_config] = this[_config].copy();
        this[_isConfigWritable] = true;
      }
    }
    markAsExplicit() {
      this[_isExplicit] = true;
    }
    get [_needsGeometryUpdate]() {
      return dart.notNull(this[_ancestorChain][$length]) > 1;
    }
  };
  (object$._SwitchableSemanticsFragment.new = function(opts) {
    let mergeIntoParent = opts && 'mergeIntoParent' in opts ? opts.mergeIntoParent : null;
    if (mergeIntoParent == null) dart.nullFailed(L4, 3645, 19, "mergeIntoParent");
    let config = opts && 'config' in opts ? opts.config : null;
    if (config == null) dart.nullFailed(L4, 3646, 37, "config");
    let owner = opts && 'owner' in opts ? opts.owner : null;
    if (owner == null) dart.nullFailed(L4, 3647, 27, "owner");
    let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
    if (dropsSemanticsOfPreviousSiblings == null) dart.nullFailed(L4, 3648, 19, "dropsSemanticsOfPreviousSiblings");
    this[_isConfigWritable] = false;
    this[_children] = JSArrayOf_InterestingSemanticsFragment().of([]);
    this[_isExplicit] = false;
    this[_mergeIntoParent] = mergeIntoParent;
    this[_config] = config;
    if (!(mergeIntoParent != null)) dart.assertFailed(null, L4, 3651, 15, "mergeIntoParent != null");
    if (!(config != null)) dart.assertFailed(null, L4, 3652, 15, "config != null");
    object$._SwitchableSemanticsFragment.__proto__.new.call(this, {owner: owner, dropsSemanticsOfPreviousSiblings: dropsSemanticsOfPreviousSiblings});
    ;
  }).prototype = object$._SwitchableSemanticsFragment.prototype;
  dart.addTypeTests(object$._SwitchableSemanticsFragment);
  dart.addTypeCaches(object$._SwitchableSemanticsFragment);
  dart.setMethodSignature(object$._SwitchableSemanticsFragment, () => ({
    __proto__: dart.getMethods(object$._SwitchableSemanticsFragment.__proto__),
    compileChildren: dart.fnType(dart.void, [], {parentPaintClipRect: dart.nullable(ui.Rect), parentSemanticsClipRect: dart.nullable(ui.Rect)}, {elevationAdjustment: core.double, result: core.List$(semantics.SemanticsNode)}),
    addAll: dart.fnType(dart.void, [core.Iterable$(object$._InterestingSemanticsFragment)]),
    [_ensureConfigIsWritable]: dart.fnType(dart.void, []),
    markAsExplicit: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(object$._SwitchableSemanticsFragment, () => ({
    __proto__: dart.getGetters(object$._SwitchableSemanticsFragment.__proto__),
    config: dart.nullable(semantics.SemanticsConfiguration),
    [_needsGeometryUpdate]: core.bool
  }));
  dart.setLibraryUri(object$._SwitchableSemanticsFragment, L5);
  dart.setFieldSignature(object$._SwitchableSemanticsFragment, () => ({
    __proto__: dart.getFields(object$._SwitchableSemanticsFragment.__proto__),
    [_mergeIntoParent]: dart.finalFieldType(core.bool),
    [_config]: dart.fieldType(semantics.SemanticsConfiguration),
    [_isConfigWritable]: dart.fieldType(core.bool),
    [_children]: dart.finalFieldType(core.List$(object$._InterestingSemanticsFragment)),
    [_isExplicit]: dart.fieldType(core.bool)
  }));
  object$._AbortingSemanticsFragment = class _AbortingSemanticsFragment extends object$._InterestingSemanticsFragment {
    get abortsWalk() {
      return true;
    }
    get config() {
      return null;
    }
    addAll(fragments) {
      if (fragments == null) dart.nullFailed(L4, 3779, 55, "fragments");
      if (!false) dart.assertFailed(null, L4, 3780, 12, "false");
    }
    compileChildren(opts) {
      let parentSemanticsClipRect = opts && 'parentSemanticsClipRect' in opts ? opts.parentSemanticsClipRect : null;
      let parentPaintClipRect = opts && 'parentPaintClipRect' in opts ? opts.parentPaintClipRect : null;
      let elevationAdjustment = opts && 'elevationAdjustment' in opts ? opts.elevationAdjustment : null;
      if (elevationAdjustment == null) dart.nullFailed(L4, 3784, 100, "elevationAdjustment");
      let result = opts && 'result' in opts ? opts.result : null;
      if (result == null) dart.nullFailed(L4, 3784, 150, "result");
      result[$add](dart.nullCheck(this.owner[_semantics]));
    }
    markAsExplicit() {
    }
  };
  (object$._AbortingSemanticsFragment.new = function(opts) {
    let owner = opts && 'owner' in opts ? opts.owner : null;
    if (owner == null) dart.nullFailed(L4, 3770, 53, "owner");
    object$._AbortingSemanticsFragment.__proto__.new.call(this, {owner: owner, dropsSemanticsOfPreviousSiblings: false});
    ;
  }).prototype = object$._AbortingSemanticsFragment.prototype;
  dart.addTypeTests(object$._AbortingSemanticsFragment);
  dart.addTypeCaches(object$._AbortingSemanticsFragment);
  dart.setMethodSignature(object$._AbortingSemanticsFragment, () => ({
    __proto__: dart.getMethods(object$._AbortingSemanticsFragment.__proto__),
    addAll: dart.fnType(dart.void, [core.Iterable$(object$._InterestingSemanticsFragment)]),
    compileChildren: dart.fnType(dart.void, [], {parentPaintClipRect: dart.nullable(ui.Rect), parentSemanticsClipRect: dart.nullable(ui.Rect)}, {elevationAdjustment: core.double, result: core.List$(semantics.SemanticsNode)}),
    markAsExplicit: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(object$._AbortingSemanticsFragment, () => ({
    __proto__: dart.getGetters(object$._AbortingSemanticsFragment.__proto__),
    config: dart.nullable(semantics.SemanticsConfiguration)
  }));
  dart.setLibraryUri(object$._AbortingSemanticsFragment, L5);
  var _paintClipRect = dart.privateName(object$, "_paintClipRect");
  var _semanticsClipRect = dart.privateName(object$, "_semanticsClipRect");
  var ___SemanticsGeometry__transform = dart.privateName(object$, "_#_SemanticsGeometry#_transform");
  var ___SemanticsGeometry__transform_isSet = dart.privateName(object$, "_#_SemanticsGeometry#_transform#isSet");
  var ___SemanticsGeometry__rect = dart.privateName(object$, "_#_SemanticsGeometry#_rect");
  var ___SemanticsGeometry__rect_isSet = dart.privateName(object$, "_#_SemanticsGeometry#_rect#isSet");
  var _markAsHidden = dart.privateName(object$, "_markAsHidden");
  var _computeValues = dart.privateName(object$, "_computeValues");
  var _transform$ = dart.privateName(object$, "_transform");
  var _rect = dart.privateName(object$, "_rect");
  object$._SemanticsGeometry = class _SemanticsGeometry extends core.Object {
    get [_transform$]() {
      let t34;
      return dart.test(this[___SemanticsGeometry__transform_isSet]) ? (t34 = this[___SemanticsGeometry__transform], t34) : dart.throw(new _internal.LateError.fieldNI("_transform"));
    }
    set [_transform$](t34) {
      if (t34 == null) dart.nullFailed(L4, 3816, 16, "null");
      this[___SemanticsGeometry__transform_isSet] = true;
      this[___SemanticsGeometry__transform] = t34;
    }
    get [_rect]() {
      let t35;
      return dart.test(this[___SemanticsGeometry__rect_isSet]) ? (t35 = this[___SemanticsGeometry__rect], t35) : dart.throw(new _internal.LateError.fieldNI("_rect"));
    }
    set [_rect](t35) {
      if (t35 == null) dart.nullFailed(L4, 3817, 13, "null");
      this[___SemanticsGeometry__rect_isSet] = true;
      this[___SemanticsGeometry__rect] = t35;
    }
    get transform() {
      return this[_transform$];
    }
    get semanticsClipRect() {
      return this[_semanticsClipRect];
    }
    get paintClipRect() {
      return this[_paintClipRect];
    }
    get rect() {
      return this[_rect];
    }
    [_computeValues](parentSemanticsClipRect, parentPaintClipRect, ancestors) {
      if (ancestors == null) dart.nullFailed(L4, 3837, 100, "ancestors");
      if (!(dart.notNull(ancestors[$length]) > 1)) dart.assertFailed(null, L4, 3838, 12, "ancestors.length > 1");
      this[_transform$] = vector_math_64.Matrix4.identity();
      this[_semanticsClipRect] = parentSemanticsClipRect;
      this[_paintClipRect] = parentPaintClipRect;
      for (let index = dart.notNull(ancestors[$length]) - 1; index > 0; index = index - 1) {
        let parent = ancestors[$_get](index);
        let child = ancestors[$_get](index - 1);
        let parentSemanticsClipRect = parent.describeSemanticsClip(child);
        if (parentSemanticsClipRect != null) {
          this[_semanticsClipRect] = parentSemanticsClipRect;
          this[_paintClipRect] = object$._SemanticsGeometry._intersectRects(this[_paintClipRect], parent.describeApproximatePaintClip(child));
        } else {
          this[_semanticsClipRect] = object$._SemanticsGeometry._intersectRects(this[_semanticsClipRect], parent.describeApproximatePaintClip(child));
        }
        object$._SemanticsGeometry._temporaryTransformHolder.setIdentity();
        object$._SemanticsGeometry._applyIntermediatePaintTransforms(parent, child, this[_transform$], object$._SemanticsGeometry._temporaryTransformHolder);
        this[_semanticsClipRect] = object$._SemanticsGeometry._transformRect(this[_semanticsClipRect], object$._SemanticsGeometry._temporaryTransformHolder);
        this[_paintClipRect] = object$._SemanticsGeometry._transformRect(this[_paintClipRect], object$._SemanticsGeometry._temporaryTransformHolder);
      }
      let owner = ancestors[$first];
      this[_rect] = this[_semanticsClipRect] == null ? owner.semanticBounds : dart.nullCheck(this[_semanticsClipRect]).intersect(owner.semanticBounds);
      if (this[_paintClipRect] != null) {
        let paintRect = dart.nullCheck(this[_paintClipRect]).intersect(this[_rect]);
        this[_markAsHidden] = dart.test(paintRect.isEmpty) && !dart.test(this[_rect].isEmpty);
        if (!dart.test(this[_markAsHidden])) this[_rect] = paintRect;
      }
    }
    static _transformRect(rect, transform) {
      if (transform == null) dart.nullFailed(L4, 3879, 51, "transform");
      if (!(transform != null)) dart.assertFailed(null, L4, 3880, 12, "transform != null");
      if (rect == null) return null;
      if (dart.test(rect.isEmpty) || dart.test(transform.isZero())) return ui.Rect.zero;
      return matrix_utils.MatrixUtils.inverseTransformRect(transform, rect);
    }
    static _applyIntermediatePaintTransforms(ancestor, child, transform, clipRectTransform) {
      if (ancestor == null) dart.nullFailed(L4, 3894, 18, "ancestor");
      if (child == null) dart.nullFailed(L4, 3895, 18, "child");
      if (transform == null) dart.nullFailed(L4, 3896, 13, "transform");
      if (clipRectTransform == null) dart.nullFailed(L4, 3897, 13, "clipRectTransform");
      if (!(ancestor != null)) dart.assertFailed(null, L4, 3899, 12, "ancestor != null");
      if (!(child != null)) dart.assertFailed(null, L4, 3900, 12, "child != null");
      if (!(transform != null)) dart.assertFailed(null, L4, 3901, 12, "transform != null");
      if (!(clipRectTransform != null)) dart.assertFailed(null, L4, 3902, 12, "clipRectTransform != null");
      if (!dart.test(clipRectTransform.isIdentity())) dart.assertFailed(null, L4, 3903, 12, "clipRectTransform.isIdentity()");
      let intermediateParent = object$.RenderObject.as(dart.nullCheck(child.parent));
      if (!(intermediateParent !== null)) dart.assertFailed(null, L4, 3905, 12, "intermediateParent != null");
      while (!intermediateParent[$_equals](ancestor)) {
        intermediateParent.applyPaintTransform(child, transform);
        intermediateParent = object$.RenderObject.as(dart.nullCheck(intermediateParent.parent));
        child = object$.RenderObject.as(dart.nullCheck(child.parent));
        if (!(intermediateParent !== null)) dart.assertFailed(null, L4, 3910, 14, "intermediateParent != null");
      }
      ancestor.applyPaintTransform(child, transform);
      ancestor.applyPaintTransform(child, clipRectTransform);
    }
    static _intersectRects(a, b) {
      if (a == null) return b;
      if (b == null) return a;
      return a.intersect(b);
    }
    get dropFromTree() {
      return this[_rect].isEmpty;
    }
    get markAsHidden() {
      return this[_markAsHidden];
    }
  };
  (object$._SemanticsGeometry.new = function(opts) {
    let parentSemanticsClipRect = opts && 'parentSemanticsClipRect' in opts ? opts.parentSemanticsClipRect : null;
    let parentPaintClipRect = opts && 'parentPaintClipRect' in opts ? opts.parentPaintClipRect : null;
    let ancestors = opts && 'ancestors' in opts ? opts.ancestors : null;
    if (ancestors == null) dart.nullFailed(L4, 3809, 33, "ancestors");
    this[_paintClipRect] = null;
    this[_semanticsClipRect] = null;
    this[___SemanticsGeometry__transform] = null;
    this[___SemanticsGeometry__transform_isSet] = false;
    this[___SemanticsGeometry__rect] = null;
    this[___SemanticsGeometry__rect_isSet] = false;
    this[_markAsHidden] = false;
    this[_computeValues](parentSemanticsClipRect, parentPaintClipRect, ancestors);
  }).prototype = object$._SemanticsGeometry.prototype;
  dart.addTypeTests(object$._SemanticsGeometry);
  dart.addTypeCaches(object$._SemanticsGeometry);
  dart.setMethodSignature(object$._SemanticsGeometry, () => ({
    __proto__: dart.getMethods(object$._SemanticsGeometry.__proto__),
    [_computeValues]: dart.fnType(dart.void, [dart.nullable(ui.Rect), dart.nullable(ui.Rect), core.List$(object$.RenderObject)])
  }));
  dart.setGetterSignature(object$._SemanticsGeometry, () => ({
    __proto__: dart.getGetters(object$._SemanticsGeometry.__proto__),
    [_transform$]: vector_math_64.Matrix4,
    [_rect]: ui.Rect,
    transform: vector_math_64.Matrix4,
    semanticsClipRect: dart.nullable(ui.Rect),
    paintClipRect: dart.nullable(ui.Rect),
    rect: ui.Rect,
    dropFromTree: core.bool,
    markAsHidden: core.bool
  }));
  dart.setSetterSignature(object$._SemanticsGeometry, () => ({
    __proto__: dart.getSetters(object$._SemanticsGeometry.__proto__),
    [_transform$]: vector_math_64.Matrix4,
    [_rect]: ui.Rect
  }));
  dart.setLibraryUri(object$._SemanticsGeometry, L5);
  dart.setFieldSignature(object$._SemanticsGeometry, () => ({
    __proto__: dart.getFields(object$._SemanticsGeometry.__proto__),
    [_paintClipRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [_semanticsClipRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [___SemanticsGeometry__transform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [___SemanticsGeometry__transform_isSet]: dart.fieldType(core.bool),
    [___SemanticsGeometry__rect]: dart.fieldType(dart.nullable(ui.Rect)),
    [___SemanticsGeometry__rect_isSet]: dart.fieldType(core.bool),
    [_markAsHidden]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(object$._SemanticsGeometry, {
    /*object$._SemanticsGeometry._temporaryTransformHolder*/get _temporaryTransformHolder() {
      return new vector_math_64.Matrix4.zero();
    }
  }, false);
  object$.DiagnosticsDebugCreator = class DiagnosticsDebugCreator extends diagnostics.DiagnosticsProperty$(core.Object) {};
  (object$.DiagnosticsDebugCreator.new = function(value) {
    if (value == null) dart.nullFailed(L4, 3953, 34, "value");
    if (!(value != null)) dart.assertFailed(null, L4, 3954, 14, "value != null");
    object$.DiagnosticsDebugCreator.__proto__.new.call(this, "debugCreator", value, {level: diagnostics.DiagnosticLevel.hidden});
    ;
  }).prototype = object$.DiagnosticsDebugCreator.prototype;
  dart.addTypeTests(object$.DiagnosticsDebugCreator);
  dart.addTypeCaches(object$.DiagnosticsDebugCreator);
  dart.setLibraryUri(object$.DiagnosticsDebugCreator, L5);
  var C64;
  var C65;
  var C66;
  debug$0._debugDrawDoubleRect = function _debugDrawDoubleRect(canvas, outerRect, innerRect, color) {
    let t36, t36$;
    if (canvas == null) dart.nullFailed(L14, 235, 34, "canvas");
    if (outerRect == null) dart.nullFailed(L14, 235, 47, "outerRect");
    if (innerRect == null) dart.nullFailed(L14, 235, 63, "innerRect");
    if (color == null) dart.nullFailed(L14, 235, 80, "color");
    let path = (t36 = ui.Path.new(), (() => {
      t36.fillType = ui.PathFillType.evenOdd;
      t36.addRect(outerRect);
      t36.addRect(innerRect);
      return t36;
    })());
    let paint = (t36$ = ui.Paint.new(), (() => {
      t36$.color = color;
      return t36$;
    })());
    canvas.drawPath(path, paint);
  };
  debug$0.debugPaintPadding = function debugPaintPadding(canvas, outerRect, innerRect, opts) {
    if (canvas == null) dart.nullFailed(L14, 249, 31, "canvas");
    if (outerRect == null) dart.nullFailed(L14, 249, 44, "outerRect");
    let outlineWidth = opts && 'outlineWidth' in opts ? opts.outlineWidth : 2;
    if (outlineWidth == null) dart.nullFailed(L14, 249, 81, "outlineWidth");
    if (!dart.test(dart.fn(() => {
      let t36;
      if (innerRect != null && !dart.test(innerRect.isEmpty)) {
        debug$0._debugDrawDoubleRect(canvas, outerRect, innerRect, C64 || CT.C64);
        debug$0._debugDrawDoubleRect(canvas, innerRect.inflate(outlineWidth).intersect(outerRect), innerRect, C65 || CT.C65);
      } else {
        let paint = (t36 = ui.Paint.new(), (() => {
          t36.color = C66 || CT.C66;
          return t36;
        })());
        canvas.drawRect(outerRect, paint);
      }
      return true;
    }, VoidTobool())())) dart.assertFailed(null, L14, 250, 10, "() {\n    if (innerRect != null && !innerRect.isEmpty) {\n      _debugDrawDoubleRect(canvas, outerRect, innerRect, const Color(0x900090FF));\n      _debugDrawDoubleRect(canvas, innerRect.inflate(outlineWidth).intersect(outerRect), innerRect, const Color(0xFF0090FF));\n    } else {\n      final Paint paint = Paint()\n        ..color = const Color(0x90909090);\n      canvas.drawRect(outerRect, paint);\n    }\n    return true;\n  }()");
  };
  debug$0.debugAssertAllRenderVarsUnset = function debugAssertAllRenderVarsUnset(reason, opts) {
    if (reason == null) dart.nullFailed(L14, 274, 43, "reason");
    let debugCheckIntrinsicSizesOverride = opts && 'debugCheckIntrinsicSizesOverride' in opts ? opts.debugCheckIntrinsicSizesOverride : false;
    if (debugCheckIntrinsicSizesOverride == null) dart.nullFailed(L14, 274, 58, "debugCheckIntrinsicSizesOverride");
    if (!dart.test(dart.fn(() => {
      if (dart.test(debug$0.debugPaintSizeEnabled) || dart.test(debug$0.debugPaintBaselinesEnabled) || dart.test(debug$0.debugPaintLayerBordersEnabled) || dart.test(debug$0.debugPaintPointersEnabled) || dart.test(debug$0.debugRepaintRainbowEnabled) || dart.test(debug$0.debugRepaintTextRainbowEnabled) || !dart.equals(debug$0.debugCurrentRepaintColor, debug$0._kDebugDefaultRepaintColor) || dart.test(debug$0.debugPrintMarkNeedsLayoutStacks) || dart.test(debug$0.debugPrintMarkNeedsPaintStacks) || dart.test(debug$0.debugPrintLayouts) || !dart.equals(debug$0.debugCheckIntrinsicSizes, debugCheckIntrinsicSizesOverride) || dart.test(debug$0.debugProfilePaintsEnabled) || debug$0.debugOnProfilePaint != null) {
        dart.throw(assertions.FlutterError.new(reason));
      }
      return true;
    }, VoidTobool())())) dart.assertFailed(null, L14, 275, 10, "() {\n    if (debugPaintSizeEnabled ||\n        debugPaintBaselinesEnabled ||\n        debugPaintLayerBordersEnabled ||\n        debugPaintPointersEnabled ||\n        debugRepaintRainbowEnabled ||\n        debugRepaintTextRainbowEnabled ||\n        debugCurrentRepaintColor != _kDebugDefaultRepaintColor ||\n        debugPrintMarkNeedsLayoutStacks ||\n        debugPrintMarkNeedsPaintStacks ||\n        debugPrintLayouts ||\n        debugCheckIntrinsicSizes != debugCheckIntrinsicSizesOverride ||\n        debugProfilePaintsEnabled ||\n        debugOnProfilePaint != null) {\n      throw FlutterError(reason);\n    }\n    return true;\n  }()");
    return true;
  };
  var HSVColor_value = dart.privateName(colors, "HSVColor.value");
  var HSVColor_saturation = dart.privateName(colors, "HSVColor.saturation");
  var HSVColor_hue = dart.privateName(colors, "HSVColor.hue");
  var HSVColor_alpha = dart.privateName(colors, "HSVColor.alpha");
  var C67;
  dart.defineLazy(debug$0, {
    /*debug$0._kDebugDefaultRepaintColor*/get _kDebugDefaultRepaintColor() {
      return C67 || CT.C67;
    },
    /*debug$0.debugPaintSizeEnabled*/get debugPaintSizeEnabled() {
      return false;
    },
    set debugPaintSizeEnabled(_) {},
    /*debug$0.debugPaintBaselinesEnabled*/get debugPaintBaselinesEnabled() {
      return false;
    },
    set debugPaintBaselinesEnabled(_) {},
    /*debug$0.debugPaintLayerBordersEnabled*/get debugPaintLayerBordersEnabled() {
      return false;
    },
    set debugPaintLayerBordersEnabled(_) {},
    /*debug$0.debugPaintPointersEnabled*/get debugPaintPointersEnabled() {
      return false;
    },
    set debugPaintPointersEnabled(_) {},
    /*debug$0.debugRepaintRainbowEnabled*/get debugRepaintRainbowEnabled() {
      return false;
    },
    set debugRepaintRainbowEnabled(_) {},
    /*debug$0.debugRepaintTextRainbowEnabled*/get debugRepaintTextRainbowEnabled() {
      return false;
    },
    set debugRepaintTextRainbowEnabled(_) {},
    /*debug$0.debugCheckElevationsEnabled*/get debugCheckElevationsEnabled() {
      return false;
    },
    set debugCheckElevationsEnabled(_) {},
    /*debug$0.debugCurrentRepaintColor*/get debugCurrentRepaintColor() {
      return debug$0._kDebugDefaultRepaintColor;
    },
    set debugCurrentRepaintColor(_) {},
    /*debug$0.debugPrintMarkNeedsLayoutStacks*/get debugPrintMarkNeedsLayoutStacks() {
      return false;
    },
    set debugPrintMarkNeedsLayoutStacks(_) {},
    /*debug$0.debugPrintMarkNeedsPaintStacks*/get debugPrintMarkNeedsPaintStacks() {
      return false;
    },
    set debugPrintMarkNeedsPaintStacks(_) {},
    /*debug$0.debugPrintLayouts*/get debugPrintLayouts() {
      return false;
    },
    set debugPrintLayouts(_) {},
    /*debug$0.debugCheckIntrinsicSizes*/get debugCheckIntrinsicSizes() {
      return false;
    },
    set debugCheckIntrinsicSizes(_) {},
    /*debug$0.debugProfileLayoutsEnabled*/get debugProfileLayoutsEnabled() {
      return false;
    },
    set debugProfileLayoutsEnabled(_) {},
    /*debug$0.debugProfilePaintsEnabled*/get debugProfilePaintsEnabled() {
      return false;
    },
    set debugProfilePaintsEnabled(_) {},
    /*debug$0.debugOnProfilePaint*/get debugOnProfilePaint() {
      return null;
    },
    set debugOnProfilePaint(_) {},
    /*debug$0.debugDisableClipLayers*/get debugDisableClipLayers() {
      return false;
    },
    set debugDisableClipLayers(_) {},
    /*debug$0.debugDisablePhysicalShapeLayers*/get debugDisablePhysicalShapeLayers() {
      return false;
    },
    set debugDisablePhysicalShapeLayers(_) {},
    /*debug$0.debugDisableOpacityLayers*/get debugDisableOpacityLayers() {
      return false;
    },
    set debugDisableOpacityLayers(_) {}
  }, false);
  box._DebugSize = class _DebugSize extends ui.Size {};
  (box._DebugSize.new = function(source, _owner, _canBeUsedByParent) {
    if (source == null) dart.nullFailed(L6, 18, 19, "source");
    if (_owner == null) dart.nullFailed(L6, 18, 32, "_owner");
    if (_canBeUsedByParent == null) dart.nullFailed(L6, 18, 45, "_canBeUsedByParent");
    this[_owner$] = _owner;
    this[_canBeUsedByParent$] = _canBeUsedByParent;
    box._DebugSize.__proto__.copy.call(this, source);
    ;
  }).prototype = box._DebugSize.prototype;
  dart.addTypeTests(box._DebugSize);
  dart.addTypeCaches(box._DebugSize);
  dart.setLibraryUri(box._DebugSize, L7);
  dart.setFieldSignature(box._DebugSize, () => ({
    __proto__: dart.getFields(box._DebugSize.__proto__),
    [_owner$]: dart.finalFieldType(box.RenderBox),
    [_canBeUsedByParent$]: dart.finalFieldType(core.bool)
  }));
  var _debugPropagateDebugSize = dart.privateName(box, "_debugPropagateDebugSize");
  var minWidth$ = dart.privateName(box, "BoxConstraints.minWidth");
  var maxWidth$ = dart.privateName(box, "BoxConstraints.maxWidth");
  var minHeight$ = dart.privateName(box, "BoxConstraints.minHeight");
  var maxHeight$ = dart.privateName(box, "BoxConstraints.maxHeight");
  box.BoxConstraints = class BoxConstraints extends object$.Constraints {
    get minWidth() {
      return this[minWidth$];
    }
    set minWidth(value) {
      super.minWidth = value;
    }
    get maxWidth() {
      return this[maxWidth$];
    }
    set maxWidth(value) {
      super.maxWidth = value;
    }
    get minHeight() {
      return this[minHeight$];
    }
    set minHeight(value) {
      super.minHeight = value;
    }
    get maxHeight() {
      return this[maxHeight$];
    }
    set maxHeight(value) {
      super.maxHeight = value;
    }
    copyWith(opts) {
      let t36, t36$, t36$0, t36$1;
      let minWidth = opts && 'minWidth' in opts ? opts.minWidth : null;
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : null;
      let minHeight = opts && 'minHeight' in opts ? opts.minHeight : null;
      let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : null;
      return new box.BoxConstraints.new({minWidth: (t36 = minWidth, t36 == null ? this.minWidth : t36), maxWidth: (t36$ = maxWidth, t36$ == null ? this.maxWidth : t36$), minHeight: (t36$0 = minHeight, t36$0 == null ? this.minHeight : t36$0), maxHeight: (t36$1 = maxHeight, t36$1 == null ? this.maxHeight : t36$1)});
    }
    deflate(edges) {
      if (edges == null) dart.nullFailed(L6, 186, 37, "edges");
      if (!(edges != null)) dart.assertFailed(null, L6, 187, 12, "edges != null");
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, L6, 188, 12, "debugAssertIsValid()");
      let horizontal = edges.horizontal;
      let vertical = edges.vertical;
      let deflatedMinWidth = math.max(core.double, 0.0, dart.notNull(this.minWidth) - dart.notNull(horizontal));
      let deflatedMinHeight = math.max(core.double, 0.0, dart.notNull(this.minHeight) - dart.notNull(vertical));
      return new box.BoxConstraints.new({minWidth: deflatedMinWidth, maxWidth: math.max(core.double, deflatedMinWidth, dart.notNull(this.maxWidth) - dart.notNull(horizontal)), minHeight: deflatedMinHeight, maxHeight: math.max(core.double, deflatedMinHeight, dart.notNull(this.maxHeight) - dart.notNull(vertical))});
    }
    loosen() {
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, L6, 203, 12, "debugAssertIsValid()");
      return new box.BoxConstraints.new({minWidth: 0.0, maxWidth: this.maxWidth, minHeight: 0.0, maxHeight: this.maxHeight});
    }
    enforce(constraints) {
      if (constraints == null) dart.nullFailed(L6, 214, 41, "constraints");
      return new box.BoxConstraints.new({minWidth: this.minWidth[$clamp](constraints.minWidth, constraints.maxWidth), maxWidth: this.maxWidth[$clamp](constraints.minWidth, constraints.maxWidth), minHeight: this.minHeight[$clamp](constraints.minHeight, constraints.maxHeight), maxHeight: this.maxHeight[$clamp](constraints.minHeight, constraints.maxHeight)});
    }
    tighten(opts) {
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      return new box.BoxConstraints.new({minWidth: width == null ? this.minWidth : width[$clamp](this.minWidth, this.maxWidth), maxWidth: width == null ? this.maxWidth : width[$clamp](this.minWidth, this.maxWidth), minHeight: height == null ? this.minHeight : height[$clamp](this.minHeight, this.maxHeight), maxHeight: height == null ? this.maxHeight : height[$clamp](this.minHeight, this.maxHeight)});
    }
    get flipped() {
      return new box.BoxConstraints.new({minWidth: this.minHeight, maxWidth: this.maxHeight, minHeight: this.minWidth, maxHeight: this.maxWidth});
    }
    widthConstraints() {
      return new box.BoxConstraints.new({minWidth: this.minWidth, maxWidth: this.maxWidth});
    }
    heightConstraints() {
      return new box.BoxConstraints.new({minHeight: this.minHeight, maxHeight: this.maxHeight});
    }
    constrainWidth(width = 1 / 0) {
      if (width == null) dart.nullFailed(L6, 255, 34, "width");
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, L6, 256, 12, "debugAssertIsValid()");
      return width[$clamp](this.minWidth, this.maxWidth);
    }
    constrainHeight(height = 1 / 0) {
      if (height == null) dart.nullFailed(L6, 262, 35, "height");
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, L6, 263, 12, "debugAssertIsValid()");
      return height[$clamp](this.minHeight, this.maxHeight);
    }
    [_debugPropagateDebugSize](size, result) {
      if (size == null) dart.nullFailed(L6, 267, 38, "size");
      if (result == null) dart.nullFailed(L6, 267, 49, "result");
      if (!dart.test(dart.fn(() => {
        if (box._DebugSize.is(size)) result = new box._DebugSize.new(result, size[_owner$], size[_canBeUsedByParent$]);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 268, 12, "() {\n      if (size is _DebugSize)\n        result = _DebugSize(result, size._owner, size._canBeUsedByParent);\n      return true;\n    }()");
      return result;
    }
    constrain(size) {
      if (size == null) dart.nullFailed(L6, 283, 23, "size");
      let result = new ui.Size.new(this.constrainWidth(size.width), this.constrainHeight(size.height));
      if (!dart.test(dart.fn(() => {
        result = this[_debugPropagateDebugSize](size, result);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 285, 12, "() {\n      result = _debugPropagateDebugSize(size, result);\n      return true;\n    }()");
      return result;
    }
    constrainDimensions(width, height) {
      if (width == null) dart.nullFailed(L6, 297, 35, "width");
      if (height == null) dart.nullFailed(L6, 297, 49, "height");
      return new ui.Size.new(this.constrainWidth(width), this.constrainHeight(height));
    }
    constrainSizeAndAttemptToPreserveAspectRatio(size) {
      if (size == null) dart.nullFailed(L6, 308, 58, "size");
      if (dart.test(this.isTight)) {
        let result = this.smallest;
        if (!dart.test(dart.fn(() => {
          result = this[_debugPropagateDebugSize](size, result);
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L6, 311, 14, "() {\n        result = _debugPropagateDebugSize(size, result);\n        return true;\n      }()");
        return result;
      }
      let width = size.width;
      let height = size.height;
      if (!(dart.notNull(width) > 0.0)) dart.assertFailed(null, L6, 320, 12, "width > 0.0");
      if (!(dart.notNull(height) > 0.0)) dart.assertFailed(null, L6, 321, 12, "height > 0.0");
      let aspectRatio = dart.notNull(width) / dart.notNull(height);
      if (dart.notNull(width) > dart.notNull(this.maxWidth)) {
        width = this.maxWidth;
        height = dart.notNull(width) / aspectRatio;
      }
      if (dart.notNull(height) > dart.notNull(this.maxHeight)) {
        height = this.maxHeight;
        width = dart.notNull(height) * aspectRatio;
      }
      if (dart.notNull(width) < dart.notNull(this.minWidth)) {
        width = this.minWidth;
        height = dart.notNull(width) / aspectRatio;
      }
      if (dart.notNull(height) < dart.notNull(this.minHeight)) {
        height = this.minHeight;
        width = dart.notNull(height) * aspectRatio;
      }
      let result = new ui.Size.new(this.constrainWidth(width), this.constrainHeight(height));
      if (!dart.test(dart.fn(() => {
        result = this[_debugPropagateDebugSize](size, result);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 345, 12, "() {\n      result = _debugPropagateDebugSize(size, result);\n      return true;\n    }()");
      return result;
    }
    get biggest() {
      return new ui.Size.new(this.constrainWidth(), this.constrainHeight());
    }
    get smallest() {
      return new ui.Size.new(this.constrainWidth(0.0), this.constrainHeight(0.0));
    }
    get hasTightWidth() {
      return dart.notNull(this.minWidth) >= dart.notNull(this.maxWidth);
    }
    get hasTightHeight() {
      return dart.notNull(this.minHeight) >= dart.notNull(this.maxHeight);
    }
    get isTight() {
      return dart.test(this.hasTightWidth) && dart.test(this.hasTightHeight);
    }
    get hasBoundedWidth() {
      return dart.notNull(this.maxWidth) < 1 / 0;
    }
    get hasBoundedHeight() {
      return dart.notNull(this.maxHeight) < 1 / 0;
    }
    get hasInfiniteWidth() {
      return dart.notNull(this.minWidth) >= 1 / 0;
    }
    get hasInfiniteHeight() {
      return dart.notNull(this.minHeight) >= 1 / 0;
    }
    isSatisfiedBy(size) {
      if (size == null) dart.nullFailed(L6, 417, 27, "size");
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, L6, 418, 12, "debugAssertIsValid()");
      return dart.notNull(this.minWidth) <= dart.notNull(size.width) && dart.notNull(size.width) <= dart.notNull(this.maxWidth) && dart.notNull(this.minHeight) <= dart.notNull(size.height) && dart.notNull(size.height) <= dart.notNull(this.maxHeight);
    }
    ['*'](factor) {
      if (factor == null) dart.nullFailed(L6, 424, 35, "factor");
      return new box.BoxConstraints.new({minWidth: dart.notNull(this.minWidth) * dart.notNull(factor), maxWidth: dart.notNull(this.maxWidth) * dart.notNull(factor), minHeight: dart.notNull(this.minHeight) * dart.notNull(factor), maxHeight: dart.notNull(this.maxHeight) * dart.notNull(factor)});
    }
    ['/'](factor) {
      if (factor == null) dart.nullFailed(L6, 434, 35, "factor");
      return new box.BoxConstraints.new({minWidth: dart.notNull(this.minWidth) / dart.notNull(factor), maxWidth: dart.notNull(this.maxWidth) / dart.notNull(factor), minHeight: dart.notNull(this.minHeight) / dart.notNull(factor), maxHeight: dart.notNull(this.maxHeight) / dart.notNull(factor)});
    }
    ['~/'](factor) {
      if (factor == null) dart.nullFailed(L6, 444, 36, "factor");
      return new box.BoxConstraints.new({minWidth: (dart.notNull(this.minWidth) / dart.notNull(factor))[$truncate]()[$toDouble](), maxWidth: (dart.notNull(this.maxWidth) / dart.notNull(factor))[$truncate]()[$toDouble](), minHeight: (dart.notNull(this.minHeight) / dart.notNull(factor))[$truncate]()[$toDouble](), maxHeight: (dart.notNull(this.maxHeight) / dart.notNull(factor))[$truncate]()[$toDouble]()});
    }
    ['%'](value) {
      if (value == null) dart.nullFailed(L6, 454, 35, "value");
      return new box.BoxConstraints.new({minWidth: this.minWidth[$modulo](value), maxWidth: this.maxWidth[$modulo](value), minHeight: this.minHeight[$modulo](value), maxHeight: this.maxHeight[$modulo](value)});
    }
    static lerp(a, b, t) {
      if (t == null) dart.nullFailed(L6, 469, 76, "t");
      if (!(t != null)) dart.assertFailed(null, L6, 470, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b)['*'](t);
      if (b == null) return a['*'](1.0 - dart.notNull(t));
      if (!dart.test(a.debugAssertIsValid())) dart.assertFailed(null, L6, 477, 12, "a.debugAssertIsValid()");
      if (!dart.test(b.debugAssertIsValid())) dart.assertFailed(null, L6, 478, 12, "b.debugAssertIsValid()");
      if (!(a.minWidth[$isFinite] && b.minWidth[$isFinite] || a.minWidth === 1 / 0 && b.minWidth === 1 / 0)) dart.assertFailed("Cannot interpolate between finite constraints and unbounded constraints.", L6, 479, 12, "(a.minWidth.isFinite && b.minWidth.isFinite) || (a.minWidth == double.infinity && b.minWidth == double.infinity)");
      if (!(a.maxWidth[$isFinite] && b.maxWidth[$isFinite] || a.maxWidth === 1 / 0 && b.maxWidth === 1 / 0)) dart.assertFailed("Cannot interpolate between finite constraints and unbounded constraints.", L6, 480, 12, "(a.maxWidth.isFinite && b.maxWidth.isFinite) || (a.maxWidth == double.infinity && b.maxWidth == double.infinity)");
      if (!(a.minHeight[$isFinite] && b.minHeight[$isFinite] || a.minHeight === 1 / 0 && b.minHeight === 1 / 0)) dart.assertFailed("Cannot interpolate between finite constraints and unbounded constraints.", L6, 481, 12, "(a.minHeight.isFinite && b.minHeight.isFinite) || (a.minHeight == double.infinity && b.minHeight == double.infinity)");
      if (!(a.maxHeight[$isFinite] && b.maxHeight[$isFinite] || a.maxHeight === 1 / 0 && b.maxHeight === 1 / 0)) dart.assertFailed("Cannot interpolate between finite constraints and unbounded constraints.", L6, 482, 12, "(a.maxHeight.isFinite && b.maxHeight.isFinite) || (a.maxHeight == double.infinity && b.maxHeight == double.infinity)");
      return new box.BoxConstraints.new({minWidth: a.minWidth[$isFinite] ? dart.nullCheck(ui.lerpDouble(a.minWidth, b.minWidth, t)) : 1 / 0, maxWidth: a.maxWidth[$isFinite] ? dart.nullCheck(ui.lerpDouble(a.maxWidth, b.maxWidth, t)) : 1 / 0, minHeight: a.minHeight[$isFinite] ? dart.nullCheck(ui.lerpDouble(a.minHeight, b.minHeight, t)) : 1 / 0, maxHeight: a.maxHeight[$isFinite] ? dart.nullCheck(ui.lerpDouble(a.maxHeight, b.maxHeight, t)) : 1 / 0});
    }
    get isNormalized() {
      return dart.notNull(this.minWidth) >= 0.0 && dart.notNull(this.minWidth) <= dart.notNull(this.maxWidth) && dart.notNull(this.minHeight) >= 0.0 && dart.notNull(this.minHeight) <= dart.notNull(this.maxHeight);
    }
    debugAssertIsValid(opts) {
      let isAppliedConstraint = opts && 'isAppliedConstraint' in opts ? opts.isAppliedConstraint : false;
      if (isAppliedConstraint == null) dart.nullFailed(L6, 512, 10, "isAppliedConstraint");
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      if (!dart.test(dart.fn(() => {
        const throwError = message => {
          if (message == null) dart.nullFailed(L6, 516, 39, "message");
          dart.throw(new assertions.FlutterError.fromParts((() => {
            let t36 = JSArrayOfDiagnosticsNode().of([message]);
            if (informationCollector != null) t36[$addAll](informationCollector());
            t36.push(new (DiagnosticsPropertyOfBoxConstraints()).new("The offending constraints were", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}));
            return t36;
          })()));
        };
        dart.fn(throwError, DiagnosticsNodeTovoid());
        if (this.minWidth[$isNaN] || this.maxWidth[$isNaN] || this.minHeight[$isNaN] || this.maxHeight[$isNaN]) {
          let affectedFieldsList = (() => {
            let t37 = JSArrayOfString().of([]);
            if (this.minWidth[$isNaN]) t37.push("minWidth");
            if (this.maxWidth[$isNaN]) t37.push("maxWidth");
            if (this.minHeight[$isNaN]) t37.push("minHeight");
            if (this.maxHeight[$isNaN]) t37.push("maxHeight");
            return t37;
          })();
          if (!dart.test(affectedFieldsList[$isNotEmpty])) dart.assertFailed(null, L6, 530, 16, "affectedFieldsList.isNotEmpty");
          if (dart.notNull(affectedFieldsList[$length]) > 1) affectedFieldsList[$add]("and " + dart.str(affectedFieldsList[$removeLast]()));
          let whichFields = "";
          if (dart.notNull(affectedFieldsList[$length]) > 2) {
            whichFields = affectedFieldsList[$join](", ");
          } else if (affectedFieldsList[$length] === 2) {
            whichFields = affectedFieldsList[$join](" ");
          } else {
            whichFields = affectedFieldsList[$single];
          }
          throwError(new assertions.ErrorSummary.new("BoxConstraints has " + (affectedFieldsList[$length] === 1 ? "a NaN value" : "NaN values") + " in " + dart.str(whichFields) + "."));
        }
        if (dart.notNull(this.minWidth) < 0.0 && dart.notNull(this.minHeight) < 0.0) throwError(new assertions.ErrorSummary.new("BoxConstraints has both a negative minimum width and a negative minimum height."));
        if (dart.notNull(this.minWidth) < 0.0) throwError(new assertions.ErrorSummary.new("BoxConstraints has a negative minimum width."));
        if (dart.notNull(this.minHeight) < 0.0) throwError(new assertions.ErrorSummary.new("BoxConstraints has a negative minimum height."));
        if (dart.notNull(this.maxWidth) < dart.notNull(this.minWidth) && dart.notNull(this.maxHeight) < dart.notNull(this.minHeight)) throwError(new assertions.ErrorSummary.new("BoxConstraints has both width and height constraints non-normalized."));
        if (dart.notNull(this.maxWidth) < dart.notNull(this.minWidth)) throwError(new assertions.ErrorSummary.new("BoxConstraints has non-normalized width constraints."));
        if (dart.notNull(this.maxHeight) < dart.notNull(this.minHeight)) throwError(new assertions.ErrorSummary.new("BoxConstraints has non-normalized height constraints."));
        if (dart.test(isAppliedConstraint)) {
          if (this.minWidth[$isInfinite] && this.minHeight[$isInfinite]) throwError(new assertions.ErrorSummary.new("BoxConstraints forces an infinite width and infinite height."));
          if (this.minWidth[$isInfinite]) throwError(new assertions.ErrorSummary.new("BoxConstraints forces an infinite width."));
          if (this.minHeight[$isInfinite]) throwError(new assertions.ErrorSummary.new("BoxConstraints forces an infinite height."));
        }
        if (!dart.test(this.isNormalized)) dart.assertFailed(null, L6, 563, 14, "isNormalized");
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L6, 515, 12, "() {\n      void throwError(DiagnosticsNode message) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          message,\n          if (informationCollector != null) ...informationCollector(),\n          DiagnosticsProperty<BoxConstraints>('The offending constraints were', this, style: DiagnosticsTreeStyle.errorProperty),\n        ]);\n      }\n      if (minWidth.isNaN || maxWidth.isNaN || minHeight.isNaN || maxHeight.isNaN) {\n        final List<String> affectedFieldsList = <String>[\n          if (minWidth.isNaN) 'minWidth',\n          if (maxWidth.isNaN) 'maxWidth',\n          if (minHeight.isNaN) 'minHeight',\n          if (maxHeight.isNaN) 'maxHeight',\n        ];\n        assert(affectedFieldsList.isNotEmpty);\n        if (affectedFieldsList.length > 1)\n          affectedFieldsList.add('and ${affectedFieldsList.removeLast()}');\n        String whichFields = '';\n        if (affectedFieldsList.length > 2) {\n          whichFields = affectedFieldsList.join(', ');\n        } else if (affectedFieldsList.length == 2) {\n          whichFields = affectedFieldsList.join(' ');\n        } else {\n          whichFields = affectedFieldsList.single;\n        }\n        throwError(ErrorSummary('BoxConstraints has ${affectedFieldsList.length == 1 ? 'a NaN value' : 'NaN values' } in $whichFields.'));\n      }\n      if (minWidth < 0.0 && minHeight < 0.0)\n        throwError(ErrorSummary('BoxConstraints has both a negative minimum width and a negative minimum height.'));\n      if (minWidth < 0.0)\n        throwError(ErrorSummary('BoxConstraints has a negative minimum width.'));\n      if (minHeight < 0.0)\n        throwError(ErrorSummary('BoxConstraints has a negative minimum height.'));\n      if (maxWidth < minWidth && maxHeight < minHeight)\n        throwError(ErrorSummary('BoxConstraints has both width and height constraints non-normalized.'));\n      if (maxWidth < minWidth)\n        throwError(ErrorSummary('BoxConstraints has non-normalized width constraints.'));\n      if (maxHeight < minHeight)\n        throwError(ErrorSummary('BoxConstraints has non-normalized height constraints.'));\n      if (isAppliedConstraint) {\n        if (minWidth.isInfinite && minHeight.isInfinite)\n          throwError(ErrorSummary('BoxConstraints forces an infinite width and infinite height.'));\n        if (minWidth.isInfinite)\n          throwError(ErrorSummary('BoxConstraints forces an infinite width.'));\n        if (minHeight.isInfinite)\n          throwError(ErrorSummary('BoxConstraints forces an infinite height.'));\n      }\n      assert(isNormalized);\n      return true;\n    }()");
      return this.isNormalized;
    }
    normalize() {
      if (dart.test(this.isNormalized)) return this;
      let minWidth = dart.notNull(this.minWidth) >= 0.0 ? this.minWidth : 0.0;
      let minHeight = dart.notNull(this.minHeight) >= 0.0 ? this.minHeight : 0.0;
      return new box.BoxConstraints.new({minWidth: minWidth, maxWidth: dart.notNull(minWidth) > dart.notNull(this.maxWidth) ? minWidth : this.maxWidth, minHeight: minHeight, maxHeight: dart.notNull(minHeight) > dart.notNull(this.maxHeight) ? minHeight : this.maxHeight});
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, L6, 588, 12, "debugAssertIsValid()");
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      if (!(box.BoxConstraints.is(other) && dart.test(other.debugAssertIsValid()))) dart.assertFailed(null, L6, 593, 12, "other is BoxConstraints && other.debugAssertIsValid()");
      return box.BoxConstraints.is(other) && other.minWidth == this.minWidth && other.maxWidth == this.maxWidth && other.minHeight == this.minHeight && other.maxHeight == this.maxHeight;
    }
    get hashCode() {
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, L6, 603, 12, "debugAssertIsValid()");
      return ui.hashValues(this.minWidth, this.maxWidth, this.minHeight, this.maxHeight);
    }
    toString() {
      let annotation = dart.test(this.isNormalized) ? "" : "; NOT NORMALIZED";
      if (this.minWidth === 1 / 0 && this.minHeight === 1 / 0) return "BoxConstraints(biggest" + annotation + ")";
      if (this.minWidth === 0 && this.maxWidth === 1 / 0 && this.minHeight === 0 && this.maxHeight === 1 / 0) return "BoxConstraints(unconstrained" + annotation + ")";
      function describe(min, max, dim) {
        if (min == null) dart.nullFailed(L6, 615, 28, "min");
        if (max == null) dart.nullFailed(L6, 615, 40, "max");
        if (dim == null) dart.nullFailed(L6, 615, 52, "dim");
        if (min == max) return dart.str(dim) + "=" + min[$toStringAsFixed](1);
        return min[$toStringAsFixed](1) + "<=" + dart.str(dim) + "<=" + max[$toStringAsFixed](1);
      }
      dart.fn(describe, doubleAnddoubleAndStringToString());
      let width = describe(this.minWidth, this.maxWidth, "w");
      let height = describe(this.minHeight, this.maxHeight, "h");
      return "BoxConstraints(" + dart.str(width) + ", " + dart.str(height) + annotation + ")";
    }
  };
  (box.BoxConstraints.new = function(opts) {
    let minWidth = opts && 'minWidth' in opts ? opts.minWidth : 0;
    if (minWidth == null) dart.nullFailed(L6, 89, 10, "minWidth");
    let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : 1 / 0;
    if (maxWidth == null) dart.nullFailed(L6, 90, 10, "maxWidth");
    let minHeight = opts && 'minHeight' in opts ? opts.minHeight : 0;
    if (minHeight == null) dart.nullFailed(L6, 91, 10, "minHeight");
    let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : 1 / 0;
    if (maxHeight == null) dart.nullFailed(L6, 92, 10, "maxHeight");
    this[minWidth$] = minWidth;
    this[maxWidth$] = maxWidth;
    this[minHeight$] = minHeight;
    this[maxHeight$] = maxHeight;
    if (!(minWidth != null)) dart.assertFailed(null, L6, 93, 15, "minWidth != null");
    if (!(maxWidth != null)) dart.assertFailed(null, L6, 94, 15, "maxWidth != null");
    if (!(minHeight != null)) dart.assertFailed(null, L6, 95, 15, "minHeight != null");
    if (!(maxHeight != null)) dart.assertFailed(null, L6, 96, 15, "maxHeight != null");
    box.BoxConstraints.__proto__.new.call(this);
    ;
  }).prototype = box.BoxConstraints.prototype;
  (box.BoxConstraints.tight = function(size) {
    if (size == null) dart.nullFailed(L6, 99, 29, "size");
    this[minWidth$] = size.width;
    this[maxWidth$] = size.width;
    this[minHeight$] = size.height;
    this[maxHeight$] = size.height;
    box.BoxConstraints.__proto__.new.call(this);
    ;
  }).prototype = box.BoxConstraints.prototype;
  (box.BoxConstraints.tightFor = function(opts) {
    let t36, t36$, t36$0, t36$1;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    this[minWidth$] = (t36 = width, t36 == null ? 0.0 : t36);
    this[maxWidth$] = (t36$ = width, t36$ == null ? 1 / 0 : t36$);
    this[minHeight$] = (t36$0 = height, t36$0 == null ? 0.0 : t36$0);
    this[maxHeight$] = (t36$1 = height, t36$1 == null ? 1 / 0 : t36$1);
    box.BoxConstraints.__proto__.new.call(this);
    ;
  }).prototype = box.BoxConstraints.prototype;
  (box.BoxConstraints.tightForFinite = function(opts) {
    let width = opts && 'width' in opts ? opts.width : 1 / 0;
    if (width == null) dart.nullFailed(L6, 128, 12, "width");
    let height = opts && 'height' in opts ? opts.height : 1 / 0;
    if (height == null) dart.nullFailed(L6, 129, 12, "height");
    this[minWidth$] = width !== 1 / 0 ? width : 0.0;
    this[maxWidth$] = width !== 1 / 0 ? width : 1 / 0;
    this[minHeight$] = height !== 1 / 0 ? height : 0.0;
    this[maxHeight$] = height !== 1 / 0 ? height : 1 / 0;
    box.BoxConstraints.__proto__.new.call(this);
    ;
  }).prototype = box.BoxConstraints.prototype;
  (box.BoxConstraints.loose = function(size) {
    if (size == null) dart.nullFailed(L6, 136, 29, "size");
    this[minWidth$] = 0.0;
    this[maxWidth$] = size.width;
    this[minHeight$] = 0.0;
    this[maxHeight$] = size.height;
    box.BoxConstraints.__proto__.new.call(this);
    ;
  }).prototype = box.BoxConstraints.prototype;
  (box.BoxConstraints.expand = function(opts) {
    let t36, t36$, t36$0, t36$1;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    this[minWidth$] = (t36 = width, t36 == null ? 1 / 0 : t36);
    this[maxWidth$] = (t36$ = width, t36$ == null ? 1 / 0 : t36$);
    this[minHeight$] = (t36$0 = height, t36$0 == null ? 1 / 0 : t36$0);
    this[maxHeight$] = (t36$1 = height, t36$1 == null ? 1 / 0 : t36$1);
    box.BoxConstraints.__proto__.new.call(this);
    ;
  }).prototype = box.BoxConstraints.prototype;
  dart.addTypeTests(box.BoxConstraints);
  dart.addTypeCaches(box.BoxConstraints);
  dart.setMethodSignature(box.BoxConstraints, () => ({
    __proto__: dart.getMethods(box.BoxConstraints.__proto__),
    copyWith: dart.fnType(box.BoxConstraints, [], {maxHeight: dart.nullable(core.double), maxWidth: dart.nullable(core.double), minHeight: dart.nullable(core.double), minWidth: dart.nullable(core.double)}, {}),
    deflate: dart.fnType(box.BoxConstraints, [edge_insets.EdgeInsets]),
    loosen: dart.fnType(box.BoxConstraints, []),
    enforce: dart.fnType(box.BoxConstraints, [box.BoxConstraints]),
    tighten: dart.fnType(box.BoxConstraints, [], {height: dart.nullable(core.double), width: dart.nullable(core.double)}, {}),
    widthConstraints: dart.fnType(box.BoxConstraints, []),
    heightConstraints: dart.fnType(box.BoxConstraints, []),
    constrainWidth: dart.fnType(core.double, [], [core.double]),
    constrainHeight: dart.fnType(core.double, [], [core.double]),
    [_debugPropagateDebugSize]: dart.fnType(ui.Size, [ui.Size, ui.Size]),
    constrain: dart.fnType(ui.Size, [ui.Size]),
    constrainDimensions: dart.fnType(ui.Size, [core.double, core.double]),
    constrainSizeAndAttemptToPreserveAspectRatio: dart.fnType(ui.Size, [ui.Size]),
    isSatisfiedBy: dart.fnType(core.bool, [ui.Size]),
    '*': dart.fnType(box.BoxConstraints, [core.double]),
    '/': dart.fnType(box.BoxConstraints, [core.double]),
    '~/': dart.fnType(box.BoxConstraints, [core.double]),
    '%': dart.fnType(box.BoxConstraints, [core.double]),
    normalize: dart.fnType(box.BoxConstraints, [])
  }));
  dart.setGetterSignature(box.BoxConstraints, () => ({
    __proto__: dart.getGetters(box.BoxConstraints.__proto__),
    flipped: box.BoxConstraints,
    biggest: ui.Size,
    smallest: ui.Size,
    hasTightWidth: core.bool,
    hasTightHeight: core.bool,
    isTight: core.bool,
    hasBoundedWidth: core.bool,
    hasBoundedHeight: core.bool,
    hasInfiniteWidth: core.bool,
    hasInfiniteHeight: core.bool,
    isNormalized: core.bool
  }));
  dart.setLibraryUri(box.BoxConstraints, L7);
  dart.setFieldSignature(box.BoxConstraints, () => ({
    __proto__: dart.getFields(box.BoxConstraints.__proto__),
    minWidth: dart.finalFieldType(core.double),
    maxWidth: dart.finalFieldType(core.double),
    minHeight: dart.finalFieldType(core.double),
    maxHeight: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(box.BoxConstraints, ['_equals', 'toString']);
  dart.defineExtensionAccessors(box.BoxConstraints, ['hashCode']);
  box.BoxHitTestResult = class BoxHitTestResult extends hit_test.HitTestResult {
    addWithPaintTransform(opts) {
      let transform = opts && 'transform' in opts ? opts.transform : null;
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L6, 739, 21, "position");
      let hitTest = opts && 'hitTest' in opts ? opts.hitTest : null;
      if (hitTest == null) dart.nullFailed(L6, 740, 25, "hitTest");
      if (!(position != null)) dart.assertFailed(null, L6, 742, 12, "position != null");
      if (!(hitTest != null)) dart.assertFailed(null, L6, 743, 12, "hitTest != null");
      if (transform != null) {
        transform = vector_math_64.Matrix4.tryInvert(events.PointerEvent.removePerspectiveTransform(transform));
        if (transform == null) {
          return false;
        }
      }
      return this.addWithRawTransform({transform: transform, position: position, hitTest: hitTest});
    }
    addWithPaintOffset(opts) {
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L6, 778, 21, "position");
      let hitTest = opts && 'hitTest' in opts ? opts.hitTest : null;
      if (hitTest == null) dart.nullFailed(L6, 779, 25, "hitTest");
      if (!(position != null)) dart.assertFailed(null, L6, 781, 12, "position != null");
      if (!(hitTest != null)) dart.assertFailed(null, L6, 782, 12, "hitTest != null");
      let transformedPosition = offset == null ? position : position['-'](offset);
      if (offset != null) {
        this.pushOffset(offset._negate());
      }
      let isHit = hitTest(this, transformedPosition);
      if (offset != null) {
        this.popTransform();
      }
      return isHit;
    }
    addWithRawTransform(opts) {
      let transform = opts && 'transform' in opts ? opts.transform : null;
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L6, 815, 21, "position");
      let hitTest = opts && 'hitTest' in opts ? opts.hitTest : null;
      if (hitTest == null) dart.nullFailed(L6, 816, 25, "hitTest");
      if (!(position != null)) dart.assertFailed(null, L6, 818, 12, "position != null");
      if (!(hitTest != null)) dart.assertFailed(null, L6, 819, 12, "hitTest != null");
      if (!(position != null)) dart.assertFailed(null, L6, 820, 12, "position != null");
      let transformedPosition = transform == null ? position : matrix_utils.MatrixUtils.transformPoint(transform, position);
      if (transform != null) {
        this.pushTransform(transform);
      }
      let isHit = hitTest(this, transformedPosition);
      if (transform != null) {
        this.popTransform();
      }
      return isHit;
    }
    addWithOutOfBandPosition(opts) {
      let paintOffset = opts && 'paintOffset' in opts ? opts.paintOffset : null;
      let paintTransform = opts && 'paintTransform' in opts ? opts.paintTransform : null;
      let rawTransform = opts && 'rawTransform' in opts ? opts.rawTransform : null;
      let hitTest = opts && 'hitTest' in opts ? opts.hitTest : null;
      if (hitTest == null) dart.nullFailed(L6, 865, 46, "hitTest");
      if (!(hitTest != null)) dart.assertFailed(null, L6, 867, 12, "hitTest != null");
      if (!(paintOffset == null && paintTransform == null && rawTransform != null || paintOffset == null && paintTransform != null && rawTransform == null || paintOffset != null && paintTransform == null && rawTransform == null)) dart.assertFailed("Exactly one transform or offset argument must be provided.", L6, 868, 12, "(paintOffset == null && paintTransform == null && rawTransform != null) ||\n           (paintOffset == null && paintTransform != null && rawTransform == null) ||\n           (paintOffset != null && paintTransform == null && rawTransform == null)");
      if (paintOffset != null) {
        this.pushOffset(paintOffset._negate());
      } else if (rawTransform != null) {
        this.pushTransform(rawTransform);
      } else {
        if (!(paintTransform != null)) dart.assertFailed(null, L6, 877, 14, "paintTransform != null");
        paintTransform = vector_math_64.Matrix4.tryInvert(events.PointerEvent.removePerspectiveTransform(dart.nullCheck(paintTransform)));
        if (!(paintTransform != null)) dart.assertFailed("paintTransform must be invertible.", L6, 879, 14, "paintTransform != null");
        this.pushTransform(dart.nullCheck(paintTransform));
      }
      let isHit = hitTest(this);
      this.popTransform();
      return isHit;
    }
  };
  (box.BoxHitTestResult.new = function() {
    box.BoxHitTestResult.__proto__.new.call(this);
    ;
  }).prototype = box.BoxHitTestResult.prototype;
  (box.BoxHitTestResult.wrap = function(result) {
    if (result == null) dart.nullFailed(L6, 674, 39, "result");
    box.BoxHitTestResult.__proto__.wrap.call(this, result);
    ;
  }).prototype = box.BoxHitTestResult.prototype;
  dart.addTypeTests(box.BoxHitTestResult);
  dart.addTypeCaches(box.BoxHitTestResult);
  dart.setMethodSignature(box.BoxHitTestResult, () => ({
    __proto__: dart.getMethods(box.BoxHitTestResult.__proto__),
    addWithPaintTransform: dart.fnType(core.bool, [], {}, {hitTest: dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset]), position: ui.Offset, transform: dart.nullable(vector_math_64.Matrix4)}),
    addWithPaintOffset: dart.fnType(core.bool, [], {}, {hitTest: dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset]), offset: dart.nullable(ui.Offset), position: ui.Offset}),
    addWithRawTransform: dart.fnType(core.bool, [], {}, {hitTest: dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset]), position: ui.Offset, transform: dart.nullable(vector_math_64.Matrix4)}),
    addWithOutOfBandPosition: dart.fnType(core.bool, [], {paintOffset: dart.nullable(ui.Offset), paintTransform: dart.nullable(vector_math_64.Matrix4), rawTransform: dart.nullable(vector_math_64.Matrix4)}, {hitTest: dart.fnType(core.bool, [box.BoxHitTestResult])})
  }));
  dart.setLibraryUri(box.BoxHitTestResult, L7);
  var localPosition$0 = dart.privateName(box, "BoxHitTestEntry.localPosition");
  box.BoxHitTestEntry = class BoxHitTestEntry extends hit_test.HitTestEntry {
    get localPosition() {
      return this[localPosition$0];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    get target() {
      return box.RenderBox.as(super.target);
    }
    toString() {
      return dart.str(diagnostics.describeIdentity(this.target)) + "@" + dart.str(this.localPosition);
    }
  };
  (box.BoxHitTestEntry.new = function(target, localPosition) {
    if (target == null) dart.nullFailed(L6, 893, 29, "target");
    if (localPosition == null) dart.nullFailed(L6, 893, 42, "localPosition");
    this[localPosition$0] = localPosition;
    if (!(localPosition != null)) dart.assertFailed(null, L6, 894, 14, "localPosition != null");
    box.BoxHitTestEntry.__proto__.new.call(this, target);
    ;
  }).prototype = box.BoxHitTestEntry.prototype;
  dart.addTypeTests(box.BoxHitTestEntry);
  dart.addTypeCaches(box.BoxHitTestEntry);
  dart.setGetterSignature(box.BoxHitTestEntry, () => ({
    __proto__: dart.getGetters(box.BoxHitTestEntry.__proto__),
    target: box.RenderBox
  }));
  dart.setLibraryUri(box.BoxHitTestEntry, L7);
  dart.setFieldSignature(box.BoxHitTestEntry, () => ({
    __proto__: dart.getFields(box.BoxHitTestEntry.__proto__),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(box.BoxHitTestEntry, ['toString']);
  var offset = dart.privateName(box, "BoxParentData.offset");
  box.BoxParentData = class BoxParentData extends object$.ParentData {
    get offset() {
      return this[offset];
    }
    set offset(value) {
      this[offset] = value;
    }
    toString() {
      return "offset=" + dart.str(this.offset);
    }
  };
  (box.BoxParentData.new = function() {
    this[offset] = ui.Offset.zero;
    ;
  }).prototype = box.BoxParentData.prototype;
  dart.addTypeTests(box.BoxParentData);
  dart.addTypeCaches(box.BoxParentData);
  dart.setLibraryUri(box.BoxParentData, L7);
  dart.setFieldSignature(box.BoxParentData, () => ({
    __proto__: dart.getFields(box.BoxParentData.__proto__),
    offset: dart.fieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(box.BoxParentData, ['toString']);
  const _is_ContainerBoxParentData_default = Symbol('_is_ContainerBoxParentData_default');
  box.ContainerBoxParentData$ = dart.generic(ChildType => {
    const BoxParentData_ContainerParentDataMixin$36 = class BoxParentData_ContainerParentDataMixin extends box.BoxParentData {};
    (BoxParentData_ContainerParentDataMixin$36.new = function() {
      object$.ContainerParentDataMixin$(ChildType)[dart.mixinNew].call(this);
      BoxParentData_ContainerParentDataMixin$36.__proto__.new.call(this);
    }).prototype = BoxParentData_ContainerParentDataMixin$36.prototype;
    dart.applyMixin(BoxParentData_ContainerParentDataMixin$36, object$.ContainerParentDataMixin$(ChildType));
    class ContainerBoxParentData extends BoxParentData_ContainerParentDataMixin$36 {}
    (ContainerBoxParentData.new = function() {
      ContainerBoxParentData.__proto__.new.call(this);
      ;
    }).prototype = ContainerBoxParentData.prototype;
    dart.addTypeTests(ContainerBoxParentData);
    ContainerBoxParentData.prototype[_is_ContainerBoxParentData_default] = true;
    dart.addTypeCaches(ContainerBoxParentData);
    dart.setLibraryUri(ContainerBoxParentData, L7);
    return ContainerBoxParentData;
  });
  box.ContainerBoxParentData = box.ContainerBoxParentData$();
  dart.addTypeTests(box.ContainerBoxParentData, _is_ContainerBoxParentData_default);
  var _name$1 = dart.privateName(box, "_name");
  var C68;
  var C69;
  var C70;
  var C71;
  var C72;
  box._IntrinsicDimension = class _IntrinsicDimension extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (box._IntrinsicDimension.new = function(index, _name) {
    if (index == null) dart.nullFailed(L6, 923, 6, "index");
    if (_name == null) dart.nullFailed(L6, 923, 6, "_name");
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = box._IntrinsicDimension.prototype;
  dart.addTypeTests(box._IntrinsicDimension);
  dart.addTypeCaches(box._IntrinsicDimension);
  dart.setLibraryUri(box._IntrinsicDimension, L7);
  dart.setFieldSignature(box._IntrinsicDimension, () => ({
    __proto__: dart.getFields(box._IntrinsicDimension.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(box._IntrinsicDimension, ['toString']);
  box._IntrinsicDimension.minWidth = C68 || CT.C68;
  box._IntrinsicDimension.maxWidth = C69 || CT.C69;
  box._IntrinsicDimension.minHeight = C70 || CT.C70;
  box._IntrinsicDimension.maxHeight = C71 || CT.C71;
  box._IntrinsicDimension.values = C72 || CT.C72;
  var dimension$ = dart.privateName(box, "_IntrinsicDimensionsCacheEntry.dimension");
  var argument$ = dart.privateName(box, "_IntrinsicDimensionsCacheEntry.argument");
  box._IntrinsicDimensionsCacheEntry = class _IntrinsicDimensionsCacheEntry extends core.Object {
    get dimension() {
      return this[dimension$];
    }
    set dimension(value) {
      super.dimension = value;
    }
    get argument() {
      return this[argument$];
    }
    set argument(value) {
      super.argument = value;
    }
    _equals(other) {
      if (other == null) return false;
      return box._IntrinsicDimensionsCacheEntry.is(other) && dart.equals(other.dimension, this.dimension) && other.argument == this.argument;
    }
    get hashCode() {
      return ui.hashValues(this.dimension, this.argument);
    }
  };
  (box._IntrinsicDimensionsCacheEntry.new = function(dimension, argument) {
    if (dimension == null) dart.nullFailed(L6, 927, 45, "dimension");
    if (argument == null) dart.nullFailed(L6, 927, 61, "argument");
    this[dimension$] = dimension;
    this[argument$] = argument;
    ;
  }).prototype = box._IntrinsicDimensionsCacheEntry.prototype;
  dart.addTypeTests(box._IntrinsicDimensionsCacheEntry);
  dart.addTypeCaches(box._IntrinsicDimensionsCacheEntry);
  dart.setLibraryUri(box._IntrinsicDimensionsCacheEntry, L7);
  dart.setFieldSignature(box._IntrinsicDimensionsCacheEntry, () => ({
    __proto__: dart.getFields(box._IntrinsicDimensionsCacheEntry.__proto__),
    dimension: dart.finalFieldType(box._IntrinsicDimension),
    argument: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(box._IntrinsicDimensionsCacheEntry, ['_equals']);
  dart.defineExtensionAccessors(box._IntrinsicDimensionsCacheEntry, ['hashCode']);
  const _is_RenderBoxContainerDefaultsMixin_default = Symbol('_is_RenderBoxContainerDefaultsMixin_default');
  box.RenderBoxContainerDefaultsMixin$ = dart.generic((ChildType, ParentDataType) => {
    var JSArrayOfChildType = () => (JSArrayOfChildType = dart.constFn(_interceptors.JSArray$(ChildType)))();
    var ParentDataTypeN = () => (ParentDataTypeN = dart.constFn(dart.nullable(ParentDataType)))();
    class RenderBoxContainerDefaultsMixin extends core.Object {}
    RenderBoxContainerDefaultsMixin[dart.mixinOn] = Object => class RenderBoxContainerDefaultsMixin extends Object {
      defaultComputeDistanceToFirstActualBaseline(baseline) {
        if (baseline == null) dart.nullFailed(L6, 2709, 68, "baseline");
        if (!!dart.test(this.debugNeedsLayout)) dart.assertFailed(null, L6, 2710, 12, "!debugNeedsLayout");
        let child = this.firstChild;
        while (child != null) {
          let childParentData = ParentDataTypeN().as(child.parentData);
          let result = child.getDistanceToActualBaseline(baseline);
          if (result != null) return dart.notNull(result) + dart.notNull(dart.nullCheck(childParentData).offset.dy);
          child = dart.nullCheck(childParentData).nextSibling;
        }
        return null;
      }
      defaultComputeDistanceToHighestActualBaseline(baseline) {
        if (baseline == null) dart.nullFailed(L6, 2726, 70, "baseline");
        if (!!dart.test(this.debugNeedsLayout)) dart.assertFailed(null, L6, 2727, 12, "!debugNeedsLayout");
        let result = null;
        let child = this.firstChild;
        while (child != null) {
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          let candidate = child.getDistanceToActualBaseline(baseline);
          if (candidate != null) {
            candidate = dart.notNull(candidate) + dart.notNull(childParentData.offset.dy);
            if (result != null)
              result = math.min(core.double, result, candidate);
            else
              result = candidate;
          }
          child = childParentData.nextSibling;
        }
        return result;
      }
      defaultHitTestChildren(result, opts) {
        if (result == null) dart.nullFailed(L6, 2754, 48, "result");
        let position = opts && 'position' in opts ? opts.position : null;
        if (position == null) dart.nullFailed(L6, 2754, 74, "position");
        let child = this.lastChild;
        while (child != null) {
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          let isHit = result.addWithPaintOffset({offset: childParentData.offset, position: position, hitTest: dart.fn((result, transformed) => {
              if (result == null) dart.nullFailed(L6, 2762, 36, "result");
              if (!dart.equals(transformed, position['-'](childParentData.offset))) dart.assertFailed(null, L6, 2763, 18, "transformed == position - childParentData.offset");
              return dart.nullCheck(child).hitTest(result, {position: dart.nullCheck(transformed)});
            }, BoxHitTestResultAndOffsetNTobool())});
          if (dart.test(isHit)) return true;
          child = childParentData.previousSibling;
        }
        return false;
      }
      defaultPaint(context, offset) {
        if (context == null) dart.nullFailed(L6, 2780, 37, "context");
        if (offset == null) dart.nullFailed(L6, 2780, 53, "offset");
        let child = this.firstChild;
        while (child != null) {
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          context.paintChild(child, childParentData.offset['+'](offset));
          child = childParentData.nextSibling;
        }
      }
      getChildrenAsList() {
        let result = JSArrayOfChildType().of([]);
        let child = this.firstChild;
        while (child != null) {
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          result[$add](ChildType.as(child));
          child = childParentData.nextSibling;
        }
        return result;
      }
    };
    (RenderBoxContainerDefaultsMixin[dart.mixinNew] = function() {
    }).prototype = RenderBoxContainerDefaultsMixin.prototype;
    dart.addTypeTests(RenderBoxContainerDefaultsMixin);
    RenderBoxContainerDefaultsMixin.prototype[_is_RenderBoxContainerDefaultsMixin_default] = true;
    dart.addTypeCaches(RenderBoxContainerDefaultsMixin);
    RenderBoxContainerDefaultsMixin[dart.implements] = () => [object$.ContainerRenderObjectMixin$(ChildType, ParentDataType), core.Object];
    dart.setMethodSignature(RenderBoxContainerDefaultsMixin, () => ({
      __proto__: dart.getMethods(RenderBoxContainerDefaultsMixin.__proto__),
      defaultComputeDistanceToFirstActualBaseline: dart.fnType(dart.nullable(core.double), [ui.TextBaseline]),
      defaultComputeDistanceToHighestActualBaseline: dart.fnType(dart.nullable(core.double), [ui.TextBaseline]),
      defaultHitTestChildren: dart.fnType(core.bool, [box.BoxHitTestResult], {}, {position: ui.Offset}),
      defaultPaint: dart.fnType(dart.void, [object$.PaintingContext, ui.Offset]),
      getChildrenAsList: dart.fnType(core.List$(ChildType), [])
    }));
    dart.setLibraryUri(RenderBoxContainerDefaultsMixin, L7);
    return RenderBoxContainerDefaultsMixin;
  });
  box.RenderBoxContainerDefaultsMixin = box.RenderBoxContainerDefaultsMixin$();
  dart.addTypeTests(box.RenderBoxContainerDefaultsMixin, _is_RenderBoxContainerDefaultsMixin_default);
  dart.trackLibraries("packages/flutter/src/rendering/layer.dart", {
    "package:flutter/src/rendering/layer.dart": layer$,
    "package:flutter/src/rendering/view.dart": view,
    "package:flutter/src/rendering/mouse_cursor.dart": mouse_cursor,
    "package:flutter/src/rendering/mouse_tracking.dart": mouse_tracking,
    "package:flutter/src/rendering/binding.dart": binding$4,
    "package:flutter/src/rendering/object.dart": object$,
    "package:flutter/src/rendering/debug.dart": debug$0,
    "package:flutter/src/rendering/box.dart": box
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["layer.dart","view.dart","object.dart","box.dart","mouse_tracking.dart","mouse_cursor.dart","binding.dart","debug.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/layer.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__layer: layer$,
    src__rendering__view: view,
    src__rendering__mouse_cursor: mouse_cursor,
    src__rendering__mouse_tracking: mouse_tracking,
    src__rendering__binding: binding$4,
    src__rendering__object: object$,
    src__rendering__debug: debug$0,
    src__rendering__box: box
  };
}));

//# sourceMappingURL=layer.dart.lib.js.map
