define(['dart_sdk', 'packages/flutter/src/foundation/serialization.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/foundation/synchronous_future.dart', 'packages/flutter/src/scheduler/binding.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/foundation/licenses.dart', 'packages/flutter/src/scheduler/priority.dart', 'packages/flutter/src/foundation/_isolates_web.dart', 'packages/flutter/src/foundation/binding.dart', 'packages/flutter/src/foundation/consolidate_response.dart'], (function load__packages__flutter__src__services__system_channels_dart(dart_sdk, packages__flutter__src__foundation__serialization$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__foundation__synchronous_future$46dart, packages__flutter__src__scheduler__binding$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__foundation__licenses$46dart, packages__flutter__src__scheduler__priority$46dart, packages__flutter__src__foundation___isolates_web$46dart, packages__flutter__src__foundation__binding$46dart, packages__flutter__src__foundation__consolidate_response$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _http = dart_sdk._http;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const serialization = packages__flutter__src__foundation__serialization$46dart.src__foundation__serialization;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const synchronous_future = packages__flutter__src__foundation__synchronous_future$46dart.src__foundation__synchronous_future;
  const binding = packages__flutter__src__scheduler__binding$46dart.src__scheduler__binding;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const licenses$ = packages__flutter__src__foundation__licenses$46dart.src__foundation__licenses;
  const priority = packages__flutter__src__scheduler__priority$46dart.src__scheduler__priority;
  const isolates = packages__flutter__src__foundation___isolates_web$46dart.src__foundation__isolates;
  const binding$ = packages__flutter__src__foundation__binding$46dart.src__foundation__binding;
  const consolidate_response = packages__flutter__src__foundation__consolidate_response$46dart.src__foundation__consolidate_response;
  var system_channels = Object.create(dart.library);
  var message_codecs = Object.create(dart.library);
  var platform_channel = Object.create(dart.library);
  var message_codec = Object.create(dart.library);
  var restoration = Object.create(dart.library);
  var binding$0 = Object.create(dart.library);
  var binary_messenger = Object.create(dart.library);
  var asset_bundle = Object.create(dart.library);
  var $buffer = dartx.buffer;
  var $offsetInBytes = dartx.offsetInBytes;
  var $lengthInBytes = dartx.lengthInBytes;
  var $asUint8List = dartx.asUint8List;
  var $asByteData = dartx.asByteData;
  var $_get = dartx._get;
  var $length = dartx.length;
  var $forEach = dartx.forEach;
  var $_set = dartx._set;
  var $cast = dartx.cast;
  var $toString = dartx.toString;
  var $runtimeType = dartx.runtimeType;
  var $putIfAbsent = dartx.putIfAbsent;
  var $containsKey = dartx.containsKey;
  var $remove = dartx.remove;
  var $isEmpty = dartx.isEmpty;
  var $entries = dartx.entries;
  var $isNotEmpty = dartx.isNotEmpty;
  var $map = dartx.map;
  var $addAll = dartx.addAll;
  var $removeLast = dartx.removeLast;
  var $add = dartx.add;
  var $values = dartx.values;
  var $expand = dartx.expand;
  var $followedBy = dartx.followedBy;
  var $toList = dartx.toList;
  var $clear = dartx.clear;
  var $times = dartx['*'];
  var $split = dartx.split;
  var $indexOf = dartx.indexOf;
  var $substring = dartx.substring;
  dart._checkModuleNullSafetyMode(false);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var BasicMessageChannelOfStringL = () => (BasicMessageChannelOfStringL = dart.constFn(platform_channel.BasicMessageChannel$(StringL())))();
  var ByteDataN = () => (ByteDataN = dart.constFn(dart.nullable(typed_data.ByteData)))();
  var StringN = () => (StringN = dart.constFn(dart.nullable(core.String)))();
  var IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  var dynamicAnddynamicTovoid = () => (dynamicAnddynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, dart.dynamic])))();
  var FutureOfByteDataN = () => (FutureOfByteDataN = dart.constFn(async.Future$(ByteDataN())))();
  var ByteDataNToFutureOfByteDataN = () => (ByteDataNToFutureOfByteDataN = dart.constFn(dart.fnType(FutureOfByteDataN(), [ByteDataN()])))();
  var ListN = () => (ListN = dart.constFn(dart.nullable(core.List)))();
  var MapN = () => (MapN = dart.constFn(dart.nullable(core.Map)))();
  var VoidToStreamController = () => (VoidToStreamController = dart.constFn(dart.fnType(async.StreamController, [])))();
  var StreamControllerTodynamic = () => (StreamControllerTodynamic = dart.constFn(dart.fnType(dart.dynamic, [async.StreamController])))();
  var FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  var ByteDataNToFutureOfNull = () => (ByteDataNToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [ByteDataN()])))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  var ExpandoOfObject = () => (ExpandoOfObject = dart.constFn(core.Expando$(core.Object)))();
  var LinkedHashSetOfRestorationBucket = () => (LinkedHashSetOfRestorationBucket = dart.constFn(collection.LinkedHashSet$(restoration.RestorationBucket)))();
  var RestorationBucketN = () => (RestorationBucketN = dart.constFn(dart.nullable(restoration.RestorationBucket)))();
  var SynchronousFutureOfRestorationBucketN = () => (SynchronousFutureOfRestorationBucketN = dart.constFn(synchronous_future.SynchronousFuture$(RestorationBucketN())))();
  var CompleterOfRestorationBucketN = () => (CompleterOfRestorationBucketN = dart.constFn(async.Completer$(RestorationBucketN())))();
  var Uint8ListN = () => (Uint8ListN = dart.constFn(dart.nullable(typed_data.Uint8List)))();
  var DurationTovoid = () => (DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var IdentityMapOfString$RestorationBucket = () => (IdentityMapOfString$RestorationBucket = dart.constFn(_js_helper.IdentityMap$(core.String, restoration.RestorationBucket)))();
  var ListOfRestorationBucket = () => (ListOfRestorationBucket = dart.constFn(core.List$(restoration.RestorationBucket)))();
  var IdentityMapOfString$ListOfRestorationBucket = () => (IdentityMapOfString$ListOfRestorationBucket = dart.constFn(_js_helper.IdentityMap$(core.String, ListOfRestorationBucket())))();
  var VoidToMap = () => (VoidToMap = dart.constFn(dart.fnType(core.Map, [])))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var RestorationBucketToErrorDescription = () => (RestorationBucketToErrorDescription = dart.constFn(dart.fnType(assertions.ErrorDescription, [restoration.RestorationBucket])))();
  var JSArrayOfRestorationBucket = () => (JSArrayOfRestorationBucket = dart.constFn(_interceptors.JSArray$(restoration.RestorationBucket)))();
  var VoidToListOfRestorationBucket = () => (VoidToListOfRestorationBucket = dart.constFn(dart.fnType(ListOfRestorationBucket(), [])))();
  var ListOfRestorationBucketToListOfRestorationBucket = () => (ListOfRestorationBucketToListOfRestorationBucket = dart.constFn(dart.fnType(ListOfRestorationBucket(), [ListOfRestorationBucket()])))();
  var dynamicToFutureOfvoid = () => (dynamicToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [dart.dynamic])))();
  var MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  var CompleterOfString = () => (CompleterOfString = dart.constFn(async.Completer$(core.String)))();
  var VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  var ListOfLicenseEntry = () => (ListOfLicenseEntry = dart.constFn(core.List$(licenses$.LicenseEntry)))();
  var CompleterOfListOfLicenseEntry = () => (CompleterOfListOfLicenseEntry = dart.constFn(async.Completer$(ListOfLicenseEntry())))();
  var StringToListOfLicenseEntry = () => (StringToListOfLicenseEntry = dart.constFn(dart.fnType(ListOfLicenseEntry(), [core.String])))();
  var StreamOfLicenseEntry = () => (StreamOfLicenseEntry = dart.constFn(async.Stream$(licenses$.LicenseEntry)))();
  var _AsyncStarImplOfLicenseEntry = () => (_AsyncStarImplOfLicenseEntry = dart.constFn(async._AsyncStarImpl$(licenses$.LicenseEntry)))();
  var JSArrayOfLicenseEntry = () => (JSArrayOfLicenseEntry = dart.constFn(_interceptors.JSArray$(licenses$.LicenseEntry)))();
  var FutureOfString = () => (FutureOfString = dart.constFn(async.Future$(core.String)))();
  var VoidToFutureOfString = () => (VoidToFutureOfString = dart.constFn(dart.fnType(FutureOfString(), [])))();
  var StringToFutureOfvoid = () => (StringToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [core.String])))();
  var CompleterOfByteDataN = () => (CompleterOfByteDataN = dart.constFn(async.Completer$(ByteDataN())))();
  var ByteDataNTovoid = () => (ByteDataNTovoid = dart.constFn(dart.fnType(dart.void, [ByteDataN()])))();
  var ByteDataNAndFnToFutureOfvoid = () => (ByteDataNAndFnToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [ByteDataN(), ByteDataNTovoid()])))();
  var FutureNOfByteDataN = () => (FutureNOfByteDataN = dart.constFn(dart.nullable(FutureOfByteDataN())))();
  var ByteDataNToFutureNOfByteDataN = () => (ByteDataNToFutureNOfByteDataN = dart.constFn(dart.fnType(FutureNOfByteDataN(), [ByteDataN()])))();
  var IdentityMapOfString$ByteDataNToFutureNOfByteDataN = () => (IdentityMapOfString$ByteDataNToFutureNOfByteDataN = dart.constFn(_js_helper.IdentityMap$(core.String, ByteDataNToFutureNOfByteDataN())))();
  var ByteDataToString = () => (ByteDataToString = dart.constFn(dart.fnType(core.String, [typed_data.ByteData])))();
  var IdentityMapOfString$FutureOfString = () => (IdentityMapOfString$FutureOfString = dart.constFn(_js_helper.IdentityMap$(core.String, FutureOfString())))();
  var IdentityMapOfString$Future = () => (IdentityMapOfString$Future = dart.constFn(_js_helper.IdentityMap$(core.String, async.Future)))();
  const CT = Object.create(null);
  var L3 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/platform_channel.dart";
  var L2 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/message_codecs.dart";
  var L5 = "package:flutter/src/services/message_codec.dart";
  var L12 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/binary_messenger.dart";
  var L10 = "package:flutter/src/services/binding.dart";
  var L1 = "package:flutter/src/services/message_codecs.dart";
  var L13 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/asset_bundle.dart";
  var L11 = "package:flutter/src/services/binary_messenger.dart";
  var L8 = "package:flutter/src/services/restoration.dart";
  var L7 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/restoration.dart";
  var L9 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/binding.dart";
  var L14 = "package:flutter/src/services/asset_bundle.dart";
  var L4 = "package:flutter/src/services/platform_channel.dart";
  var L6 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/message_codec.dart";
  var L0 = "package:flutter/src/services/system_channels.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: message_codecs.JSONMethodCodec.prototype
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C1 || CT.C1,
        [MethodChannel_name]: "flutter/navigation"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C1 || CT.C1,
        [MethodChannel_name]: "flutter/platform"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C1 || CT.C1,
        [MethodChannel_name]: "flutter/textinput"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: message_codecs.JSONMessageCodec.prototype
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: platform_channel.BasicMessageChannel.prototype,
        [BasicMessageChannel__binaryMessenger]: null,
        [BasicMessageChannel_codec]: C5 || CT.C5,
        [BasicMessageChannel_name]: "flutter/keyevent"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: message_codecs.StringCodec.prototype
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: BasicMessageChannelOfStringL().prototype,
        [BasicMessageChannel__binaryMessenger]: null,
        [BasicMessageChannel_codec]: C7 || CT.C7,
        [BasicMessageChannel_name]: "flutter/lifecycle"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: platform_channel.BasicMessageChannel.prototype,
        [BasicMessageChannel__binaryMessenger]: null,
        [BasicMessageChannel_codec]: C5 || CT.C5,
        [BasicMessageChannel_name]: "flutter/system"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: platform_channel.BasicMessageChannel.prototype,
        [BasicMessageChannel__binaryMessenger]: null,
        [BasicMessageChannel_codec]: C10 || CT.C10,
        [BasicMessageChannel_name]: "flutter/accessibility"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C10 || CT.C10
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C12 || CT.C12,
        [MethodChannel_name]: "flutter/platform_views"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C1 || CT.C1,
        [MethodChannel_name]: "flutter/skia"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C12 || CT.C12,
        [MethodChannel_name]: "flutter/mousecursor"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C12 || CT.C12,
        [MethodChannel_name]: "flutter/restoration"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: core.FormatException.prototype,
        [FormatException_offset]: null,
        [FormatException_source]: null,
        [FormatException_message]: "Message corrupted"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: core.FormatException.prototype,
        [FormatException_offset]: null,
        [FormatException_source]: null,
        [FormatException_message]: "Invalid method call"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: core.FormatException.prototype,
        [FormatException_offset]: null,
        [FormatException_source]: null,
        [FormatException_message]: "Expected envelope, got nothing"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: core.FormatException.prototype,
        [FormatException_offset]: null,
        [FormatException_source]: null,
        [FormatException_message]: "Invalid envelope"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: binding$0._DefaultBinaryMessenger.prototype
      });
    },
    get C21() {
      return C21 = dart.fn(binding$0.ServicesBinding._parseLicenses, StringToListOfLicenseEntry());
    },
    get C22() {
      return C22 = dart.constList([], StringL());
    },
    get C23() {
      return C23 = dart.fn(asset_bundle.AssetBundle._utf8decode, ByteDataToString());
    }
  }, false);
  var MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  var C1;
  var MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  var MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  var C0;
  var C2;
  var C3;
  var BasicMessageChannel__binaryMessenger = dart.privateName(platform_channel, "BasicMessageChannel._binaryMessenger");
  var C5;
  var BasicMessageChannel_codec = dart.privateName(platform_channel, "BasicMessageChannel.codec");
  var BasicMessageChannel_name = dart.privateName(platform_channel, "BasicMessageChannel.name");
  var C4;
  var C7;
  var C6;
  var C8;
  var C10;
  var C9;
  var StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  var C12;
  var C11;
  var C13;
  var C14;
  var C15;
  system_channels.SystemChannels = class SystemChannels extends core.Object {};
  (system_channels.SystemChannels.__ = function() {
    ;
  }).prototype = system_channels.SystemChannels.prototype;
  dart.addTypeTests(system_channels.SystemChannels);
  dart.addTypeCaches(system_channels.SystemChannels);
  dart.setLibraryUri(system_channels.SystemChannels, L0);
  dart.defineLazy(system_channels.SystemChannels, {
    /*system_channels.SystemChannels.navigation*/get navigation() {
      return C0 || CT.C0;
    },
    /*system_channels.SystemChannels.platform*/get platform() {
      return C2 || CT.C2;
    },
    /*system_channels.SystemChannels.textInput*/get textInput() {
      return C3 || CT.C3;
    },
    /*system_channels.SystemChannels.keyEvent*/get keyEvent() {
      return C4 || CT.C4;
    },
    /*system_channels.SystemChannels.lifecycle*/get lifecycle() {
      return C6 || CT.C6;
    },
    /*system_channels.SystemChannels.system*/get system() {
      return C8 || CT.C8;
    },
    /*system_channels.SystemChannels.accessibility*/get accessibility() {
      return C9 || CT.C9;
    },
    /*system_channels.SystemChannels.platform_views*/get platform_views() {
      return C11 || CT.C11;
    },
    /*system_channels.SystemChannels.skia*/get skia() {
      return C13 || CT.C13;
    },
    /*system_channels.SystemChannels.mouseCursor*/get mouseCursor() {
      return C14 || CT.C14;
    },
    /*system_channels.SystemChannels.restoration*/get restoration() {
      return C15 || CT.C15;
    }
  }, false);
  message_codecs.BinaryCodec = class BinaryCodec extends core.Object {
    decodeMessage(message) {
      return message;
    }
    encodeMessage(message) {
      ByteDataN().as(message);
      return message;
    }
  };
  (message_codecs.BinaryCodec.new = function() {
    ;
  }).prototype = message_codecs.BinaryCodec.prototype;
  dart.addTypeTests(message_codecs.BinaryCodec);
  dart.addTypeCaches(message_codecs.BinaryCodec);
  message_codecs.BinaryCodec[dart.implements] = () => [message_codec.MessageCodec$(dart.nullable(typed_data.ByteData))];
  dart.setMethodSignature(message_codecs.BinaryCodec, () => ({
    __proto__: dart.getMethods(message_codecs.BinaryCodec.__proto__),
    decodeMessage: dart.fnType(dart.nullable(typed_data.ByteData), [dart.nullable(typed_data.ByteData)]),
    encodeMessage: dart.fnType(dart.nullable(typed_data.ByteData), [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(message_codecs.BinaryCodec, L1);
  message_codecs.StringCodec = class StringCodec extends core.Object {
    decodeMessage(message) {
      if (message == null) return null;
      return convert.utf8.decoder.convert(message[$buffer][$asUint8List](message[$offsetInBytes], message[$lengthInBytes]));
    }
    encodeMessage(message) {
      StringN().as(message);
      if (message == null) return null;
      let encoded = convert.utf8.encoder.convert(message);
      return encoded[$buffer][$asByteData]();
    }
  };
  (message_codecs.StringCodec.new = function() {
    ;
  }).prototype = message_codecs.StringCodec.prototype;
  dart.addTypeTests(message_codecs.StringCodec);
  dart.addTypeCaches(message_codecs.StringCodec);
  message_codecs.StringCodec[dart.implements] = () => [message_codec.MessageCodec$(dart.nullable(core.String))];
  dart.setMethodSignature(message_codecs.StringCodec, () => ({
    __proto__: dart.getMethods(message_codecs.StringCodec.__proto__),
    decodeMessage: dart.fnType(dart.nullable(core.String), [dart.nullable(typed_data.ByteData)]),
    encodeMessage: dart.fnType(dart.nullable(typed_data.ByteData), [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(message_codecs.StringCodec, L1);
  message_codecs.JSONMessageCodec = class JSONMessageCodec extends core.Object {
    encodeMessage(message) {
      if (message == null) return null;
      return (C7 || CT.C7).encodeMessage(convert.json.encode(message));
    }
    decodeMessage(message) {
      if (message == null) return message;
      return convert.json.decode(dart.nullCheck((C7 || CT.C7).decodeMessage(message)));
    }
  };
  (message_codecs.JSONMessageCodec.new = function() {
    ;
  }).prototype = message_codecs.JSONMessageCodec.prototype;
  dart.addTypeTests(message_codecs.JSONMessageCodec);
  dart.addTypeCaches(message_codecs.JSONMessageCodec);
  message_codecs.JSONMessageCodec[dart.implements] = () => [message_codec.MessageCodec];
  dart.setMethodSignature(message_codecs.JSONMessageCodec, () => ({
    __proto__: dart.getMethods(message_codecs.JSONMessageCodec.__proto__),
    encodeMessage: dart.fnType(dart.nullable(typed_data.ByteData), [dart.nullable(core.Object)]),
    decodeMessage: dart.fnType(dart.dynamic, [dart.nullable(typed_data.ByteData)])
  }));
  dart.setLibraryUri(message_codecs.JSONMessageCodec, L1);
  message_codecs.JSONMethodCodec = class JSONMethodCodec extends core.Object {
    encodeMethodCall(call) {
      if (call == null) dart.nullFailed(L2, 121, 40, "call");
      return dart.nullCheck((C5 || CT.C5).encodeMessage(new (IdentityMapOfString$dynamic()).from(["method", call.method, "args", call.arguments])));
    }
    decodeMethodCall(methodCall) {
      let decoded = (C5 || CT.C5).decodeMessage(methodCall);
      if (!core.Map.is(decoded)) dart.throw(new core.FormatException.new("Expected method call Map, got " + dart.str(decoded)));
      let method = decoded[$_get]("method");
      let $arguments = decoded[$_get]("args");
      if (typeof method == 'string') return new message_codec.MethodCall.new(method, $arguments);
      dart.throw(new core.FormatException.new("Invalid method call: " + dart.str(decoded)));
    }
    decodeEnvelope(envelope) {
      if (envelope == null) dart.nullFailed(L2, 141, 35, "envelope");
      let decoded = (C5 || CT.C5).decodeMessage(envelope);
      if (!core.List.is(decoded)) dart.throw(new core.FormatException.new("Expected envelope List, got " + dart.str(decoded)));
      if (decoded[$length] === 1) return decoded[$_get](0);
      if (decoded[$length] === 3 && typeof decoded[$_get](0) == 'string' && (decoded[$_get](1) == null || typeof decoded[$_get](1) == 'string')) dart.throw(new message_codec.PlatformException.new({code: core.String.as(decoded[$_get](0)), message: core.String.as(decoded[$_get](1)), details: decoded[$_get](2)}));
      if (decoded[$length] === 4 && typeof decoded[$_get](0) == 'string' && (decoded[$_get](1) == null || typeof decoded[$_get](1) == 'string') && (decoded[$_get](3) == null || typeof decoded[$_get](3) == 'string')) dart.throw(new message_codec.PlatformException.new({code: core.String.as(decoded[$_get](0)), message: core.String.as(decoded[$_get](1)), details: decoded[$_get](2), stacktrace: core.String.as(decoded[$_get](3))}));
      dart.throw(new core.FormatException.new("Invalid envelope: " + dart.str(decoded)));
    }
    encodeSuccessEnvelope(result) {
      return dart.nullCheck((C5 || CT.C5).encodeMessage([result]));
    }
    encodeErrorEnvelope(opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      if (code == null) dart.nullFailed(L2, 174, 50, "code");
      let message = opts && 'message' in opts ? opts.message : null;
      let details = opts && 'details' in opts ? opts.details : null;
      if (!(code != null)) dart.assertFailed(null, L2, 175, 12, "code != null");
      return dart.nullCheck((C5 || CT.C5).encodeMessage([code, message, details]));
    }
  };
  (message_codecs.JSONMethodCodec.new = function() {
    ;
  }).prototype = message_codecs.JSONMethodCodec.prototype;
  dart.addTypeTests(message_codecs.JSONMethodCodec);
  dart.addTypeCaches(message_codecs.JSONMethodCodec);
  message_codecs.JSONMethodCodec[dart.implements] = () => [message_codec.MethodCodec];
  dart.setMethodSignature(message_codecs.JSONMethodCodec, () => ({
    __proto__: dart.getMethods(message_codecs.JSONMethodCodec.__proto__),
    encodeMethodCall: dart.fnType(typed_data.ByteData, [message_codec.MethodCall]),
    decodeMethodCall: dart.fnType(message_codec.MethodCall, [dart.nullable(typed_data.ByteData)]),
    decodeEnvelope: dart.fnType(dart.dynamic, [typed_data.ByteData]),
    encodeSuccessEnvelope: dart.fnType(typed_data.ByteData, [dart.dynamic]),
    encodeErrorEnvelope: dart.fnType(typed_data.ByteData, [], {details: dart.dynamic, message: dart.nullable(core.String)}, {code: core.String})
  }));
  dart.setLibraryUri(message_codecs.JSONMethodCodec, L1);
  var FormatException_offset = dart.privateName(core, "FormatException.offset");
  var FormatException_source = dart.privateName(core, "FormatException.source");
  var FormatException_message = dart.privateName(core, "FormatException.message");
  var C16;
  message_codecs.StandardMessageCodec = class StandardMessageCodec extends core.Object {
    encodeMessage(message) {
      if (message == null) return null;
      let buffer = new serialization.WriteBuffer.new();
      this.writeValue(buffer, message);
      return buffer.done();
    }
    decodeMessage(message) {
      if (message == null) return null;
      let buffer = new serialization.ReadBuffer.new(message);
      let result = this.readValue(buffer);
      if (dart.test(buffer.hasRemaining)) dart.throw(C16 || CT.C16);
      return result;
    }
    writeValue(buffer, value) {
      if (buffer == null) dart.nullFailed(L2, 348, 31, "buffer");
      if (value == null) {
        buffer.putUint8(0);
      } else if (typeof value == 'boolean') {
        buffer.putUint8(dart.test(value) ? 1 : 2);
      } else if (typeof value == 'number') {
        buffer.putUint8(6);
        buffer.putFloat64(value);
      } else if (core.int.is(value)) {
        if (-2147483647 - 1 <= dart.notNull(value) && dart.notNull(value) <= 2147483647) {
          buffer.putUint8(3);
          buffer.putInt32(value);
        } else {
          buffer.putUint8(4);
          buffer.putInt64(value);
        }
      } else if (typeof value == 'string') {
        buffer.putUint8(7);
        let bytes = convert.utf8.encoder.convert(value);
        this.writeSize(buffer, bytes[$length]);
        buffer.putUint8List(bytes);
      } else if (typed_data.Uint8List.is(value)) {
        buffer.putUint8(8);
        this.writeSize(buffer, value[$length]);
        buffer.putUint8List(value);
      } else if (typed_data.Int32List.is(value)) {
        buffer.putUint8(9);
        this.writeSize(buffer, value[$length]);
        buffer.putInt32List(value);
      } else if (typed_data.Int64List.is(value)) {
        buffer.putUint8(10);
        this.writeSize(buffer, value[$length]);
        buffer.putInt64List(value);
      } else if (typed_data.Float64List.is(value)) {
        buffer.putUint8(11);
        this.writeSize(buffer, value[$length]);
        buffer.putFloat64List(value);
      } else if (core.List.is(value)) {
        buffer.putUint8(12);
        this.writeSize(buffer, value[$length]);
        for (let item of value) {
          this.writeValue(buffer, item);
        }
      } else if (core.Map.is(value)) {
        buffer.putUint8(13);
        this.writeSize(buffer, value[$length]);
        value[$forEach](dart.fn((key, value) => {
          this.writeValue(buffer, key);
          this.writeValue(buffer, value);
        }, dynamicAnddynamicTovoid()));
      } else {
        dart.throw(new core.ArgumentError.value(value));
      }
    }
    readValue(buffer) {
      if (buffer == null) dart.nullFailed(L2, 412, 32, "buffer");
      if (!dart.test(buffer.hasRemaining)) dart.throw(C16 || CT.C16);
      let type = buffer.getUint8();
      return this.readValueOfType(type, buffer);
    }
    readValueOfType(type, buffer) {
      if (type == null) dart.nullFailed(L2, 424, 31, "type");
      if (buffer == null) dart.nullFailed(L2, 424, 48, "buffer");
      switch (type) {
        case 0:
        {
          return null;
        }
        case 1:
        {
          return true;
        }
        case 2:
        {
          return false;
        }
        case 3:
        {
          return buffer.getInt32();
        }
        case 4:
        {
          return buffer.getInt64();
        }
        case 6:
        {
          return buffer.getFloat64();
        }
        case 5:
        case 7:
        {
          let length = this.readSize(buffer);
          return convert.utf8.decoder.convert(buffer.getUint8List(length));
        }
        case 8:
        {
          let length = this.readSize(buffer);
          return buffer.getUint8List(length);
        }
        case 9:
        {
          let length = this.readSize(buffer);
          return buffer.getInt32List(length);
        }
        case 10:
        {
          let length = this.readSize(buffer);
          return buffer.getInt64List(length);
        }
        case 11:
        {
          let length = this.readSize(buffer);
          return buffer.getFloat64List(length);
        }
        case 12:
        {
          let length = this.readSize(buffer);
          let result = core.List.filled(length, null, {growable: false});
          for (let i = 0; i < dart.notNull(length); i = i + 1)
            result[$_set](i, this.readValue(buffer));
          return result;
        }
        case 13:
        {
          let length = this.readSize(buffer);
          let result = new _js_helper.LinkedMap.new();
          for (let i = 0; i < dart.notNull(length); i = i + 1)
            result[$_set](this.readValue(buffer), this.readValue(buffer));
          return result;
        }
        default:
        {
          dart.throw(C16 || CT.C16);
        }
      }
    }
    writeSize(buffer, value) {
      if (buffer == null) dart.nullFailed(L2, 475, 30, "buffer");
      if (value == null) dart.nullFailed(L2, 475, 42, "value");
      if (!(0 <= dart.notNull(value) && dart.notNull(value) <= 4294967295)) dart.assertFailed(null, L2, 476, 12, "0 <= value && value <= 0xffffffff");
      if (dart.notNull(value) < 254) {
        buffer.putUint8(value);
      } else if (dart.notNull(value) <= 65535) {
        buffer.putUint8(254);
        buffer.putUint16(value);
      } else {
        buffer.putUint8(255);
        buffer.putUint32(value);
      }
    }
    readSize(buffer) {
      if (buffer == null) dart.nullFailed(L2, 492, 27, "buffer");
      let value = buffer.getUint8();
      switch (value) {
        case 254:
        {
          return buffer.getUint16();
        }
        case 255:
        {
          return buffer.getUint32();
        }
        default:
        {
          return value;
        }
      }
    }
  };
  (message_codecs.StandardMessageCodec.new = function() {
    ;
  }).prototype = message_codecs.StandardMessageCodec.prototype;
  dart.addTypeTests(message_codecs.StandardMessageCodec);
  dart.addTypeCaches(message_codecs.StandardMessageCodec);
  message_codecs.StandardMessageCodec[dart.implements] = () => [message_codec.MessageCodec];
  dart.setMethodSignature(message_codecs.StandardMessageCodec, () => ({
    __proto__: dart.getMethods(message_codecs.StandardMessageCodec.__proto__),
    encodeMessage: dart.fnType(dart.nullable(typed_data.ByteData), [dart.nullable(core.Object)]),
    decodeMessage: dart.fnType(dart.dynamic, [dart.nullable(typed_data.ByteData)]),
    writeValue: dart.fnType(dart.void, [serialization.WriteBuffer, dart.dynamic]),
    readValue: dart.fnType(dart.dynamic, [serialization.ReadBuffer]),
    readValueOfType: dart.fnType(dart.dynamic, [core.int, serialization.ReadBuffer]),
    writeSize: dart.fnType(dart.void, [serialization.WriteBuffer, core.int]),
    readSize: dart.fnType(core.int, [serialization.ReadBuffer])
  }));
  dart.setLibraryUri(message_codecs.StandardMessageCodec, L1);
  dart.defineLazy(message_codecs.StandardMessageCodec, {
    /*message_codecs.StandardMessageCodec._valueNull*/get _valueNull() {
      return 0;
    },
    /*message_codecs.StandardMessageCodec._valueTrue*/get _valueTrue() {
      return 1;
    },
    /*message_codecs.StandardMessageCodec._valueFalse*/get _valueFalse() {
      return 2;
    },
    /*message_codecs.StandardMessageCodec._valueInt32*/get _valueInt32() {
      return 3;
    },
    /*message_codecs.StandardMessageCodec._valueInt64*/get _valueInt64() {
      return 4;
    },
    /*message_codecs.StandardMessageCodec._valueLargeInt*/get _valueLargeInt() {
      return 5;
    },
    /*message_codecs.StandardMessageCodec._valueFloat64*/get _valueFloat64() {
      return 6;
    },
    /*message_codecs.StandardMessageCodec._valueString*/get _valueString() {
      return 7;
    },
    /*message_codecs.StandardMessageCodec._valueUint8List*/get _valueUint8List() {
      return 8;
    },
    /*message_codecs.StandardMessageCodec._valueInt32List*/get _valueInt32List() {
      return 9;
    },
    /*message_codecs.StandardMessageCodec._valueInt64List*/get _valueInt64List() {
      return 10;
    },
    /*message_codecs.StandardMessageCodec._valueFloat64List*/get _valueFloat64List() {
      return 11;
    },
    /*message_codecs.StandardMessageCodec._valueList*/get _valueList() {
      return 12;
    },
    /*message_codecs.StandardMessageCodec._valueMap*/get _valueMap() {
      return 13;
    }
  }, false);
  var C17;
  var C18;
  var C19;
  message_codecs.StandardMethodCodec = class StandardMethodCodec extends core.Object {
    get messageCodec() {
      return this[messageCodec$];
    }
    set messageCodec(value) {
      super.messageCodec = value;
    }
    encodeMethodCall(call) {
      if (call == null) dart.nullFailed(L2, 533, 40, "call");
      let buffer = new serialization.WriteBuffer.new();
      this.messageCodec.writeValue(buffer, call.method);
      this.messageCodec.writeValue(buffer, call.arguments);
      return buffer.done();
    }
    decodeMethodCall(methodCall) {
      let buffer = new serialization.ReadBuffer.new(dart.nullCheck(methodCall));
      let method = this.messageCodec.readValue(buffer);
      let $arguments = this.messageCodec.readValue(buffer);
      if (typeof method == 'string' && !dart.test(buffer.hasRemaining))
        return new message_codec.MethodCall.new(method, $arguments);
      else
        dart.throw(C17 || CT.C17);
    }
    encodeSuccessEnvelope(result) {
      let buffer = new serialization.WriteBuffer.new();
      buffer.putUint8(0);
      this.messageCodec.writeValue(buffer, result);
      return buffer.done();
    }
    encodeErrorEnvelope(opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      if (code == null) dart.nullFailed(L2, 560, 50, "code");
      let message = opts && 'message' in opts ? opts.message : null;
      let details = opts && 'details' in opts ? opts.details : null;
      let buffer = new serialization.WriteBuffer.new();
      buffer.putUint8(1);
      this.messageCodec.writeValue(buffer, code);
      this.messageCodec.writeValue(buffer, message);
      this.messageCodec.writeValue(buffer, details);
      return buffer.done();
    }
    decodeEnvelope(envelope) {
      if (envelope == null) dart.nullFailed(L2, 570, 35, "envelope");
      if (envelope[$lengthInBytes] === 0) dart.throw(C18 || CT.C18);
      let buffer = new serialization.ReadBuffer.new(envelope);
      if (buffer.getUint8() === 0) return this.messageCodec.readValue(buffer);
      let errorCode = this.messageCodec.readValue(buffer);
      let errorMessage = this.messageCodec.readValue(buffer);
      let errorDetails = this.messageCodec.readValue(buffer);
      let errorStacktrace = dart.test(buffer.hasRemaining) ? core.String.as(this.messageCodec.readValue(buffer)) : null;
      if (typeof errorCode == 'string' && (errorMessage == null || typeof errorMessage == 'string') && !dart.test(buffer.hasRemaining))
        dart.throw(new message_codec.PlatformException.new({code: errorCode, message: StringN().as(errorMessage), details: errorDetails, stacktrace: errorStacktrace}));
      else
        dart.throw(C19 || CT.C19);
    }
  };
  (message_codecs.StandardMethodCodec.new = function(messageCodec = C10 || CT.C10) {
    if (messageCodec == null) dart.nullFailed(L2, 527, 35, "messageCodec");
    this[messageCodec$] = messageCodec;
    ;
  }).prototype = message_codecs.StandardMethodCodec.prototype;
  dart.addTypeTests(message_codecs.StandardMethodCodec);
  dart.addTypeCaches(message_codecs.StandardMethodCodec);
  const messageCodec$ = StandardMethodCodec_messageCodec;
  message_codecs.StandardMethodCodec[dart.implements] = () => [message_codec.MethodCodec];
  dart.setMethodSignature(message_codecs.StandardMethodCodec, () => ({
    __proto__: dart.getMethods(message_codecs.StandardMethodCodec.__proto__),
    encodeMethodCall: dart.fnType(typed_data.ByteData, [message_codec.MethodCall]),
    decodeMethodCall: dart.fnType(message_codec.MethodCall, [dart.nullable(typed_data.ByteData)]),
    encodeSuccessEnvelope: dart.fnType(typed_data.ByteData, [dart.dynamic]),
    encodeErrorEnvelope: dart.fnType(typed_data.ByteData, [], {details: dart.dynamic, message: dart.nullable(core.String)}, {code: core.String}),
    decodeEnvelope: dart.fnType(dart.dynamic, [typed_data.ByteData])
  }));
  dart.setLibraryUri(message_codecs.StandardMethodCodec, L1);
  dart.setFieldSignature(message_codecs.StandardMethodCodec, () => ({
    __proto__: dart.getFields(message_codecs.StandardMethodCodec.__proto__),
    messageCodec: dart.finalFieldType(message_codecs.StandardMessageCodec)
  }));
  var _binaryMessenger = dart.privateName(platform_channel, "_binaryMessenger");
  const _is_BasicMessageChannel_default = Symbol('_is_BasicMessageChannel_default');
  platform_channel.BasicMessageChannel$ = dart.generic(T => {
    var FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    var TToFutureOfT = () => (TToFutureOfT = dart.constFn(dart.fnType(FutureOfT(), [T])))();
    var TToNFutureOfT = () => (TToNFutureOfT = dart.constFn(dart.nullable(TToFutureOfT())))();
    class BasicMessageChannel extends core.Object {
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get codec() {
        return this[codec$];
      }
      set codec(value) {
        super.codec = value;
      }
      get [_binaryMessenger]() {
        return this[_binaryMessenger$];
      }
      set [_binaryMessenger](value) {
        super[_binaryMessenger] = value;
      }
      get binaryMessenger() {
        let t0;
        t0 = this[_binaryMessenger];
        return t0 == null ? binary_messenger.defaultBinaryMessenger : t0;
      }
      send(message) {
        T.as(message);
        return async.async(T, (function* send() {
          return this.codec.decodeMessage(yield this.binaryMessenger.send(this.name, this.codec.encodeMessage(message)));
        }).bind(this));
      }
      setMessageHandler(handler) {
        TToNFutureOfT().as(handler);
        if (handler == null) {
          this.binaryMessenger.setMessageHandler(this.name, null);
        } else {
          this.binaryMessenger.setMessageHandler(this.name, dart.fn(message => async.async(ByteDataN(), (function*() {
            return this.codec.encodeMessage(yield handler(this.codec.decodeMessage(message)));
          }).bind(this)), ByteDataNToFutureOfByteDataN()));
        }
      }
      setMockMessageHandler(handler) {
        TToNFutureOfT().as(handler);
        if (handler == null) {
          this.binaryMessenger.setMockMessageHandler(this.name, null);
        } else {
          this.binaryMessenger.setMockMessageHandler(this.name, dart.fn(message => async.async(ByteDataN(), (function*() {
            return this.codec.encodeMessage(yield handler(this.codec.decodeMessage(message)));
          }).bind(this)), ByteDataNToFutureOfByteDataN()));
        }
      }
    }
    (BasicMessageChannel.new = function(name, codec, opts) {
      if (name == null) dart.nullFailed(L3, 37, 34, "name");
      if (codec == null) dart.nullFailed(L3, 37, 45, "codec");
      let binaryMessenger = opts && 'binaryMessenger' in opts ? opts.binaryMessenger : null;
      this[name$] = name;
      this[codec$] = codec;
      if (!(name != null)) dart.assertFailed(null, L3, 38, 16, "name != null");
      if (!(codec != null)) dart.assertFailed(null, L3, 39, 16, "codec != null");
      this[_binaryMessenger$] = binaryMessenger;
      ;
    }).prototype = BasicMessageChannel.prototype;
    dart.addTypeTests(BasicMessageChannel);
    BasicMessageChannel.prototype[_is_BasicMessageChannel_default] = true;
    dart.addTypeCaches(BasicMessageChannel);
    const name$ = BasicMessageChannel_name;
    const codec$ = BasicMessageChannel_codec;
    const _binaryMessenger$ = BasicMessageChannel__binaryMessenger;
    dart.setMethodSignature(BasicMessageChannel, () => ({
      __proto__: dart.getMethods(BasicMessageChannel.__proto__),
      send: dart.fnType(async.Future$(T), [dart.nullable(core.Object)]),
      setMessageHandler: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      setMockMessageHandler: dart.fnType(dart.void, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(BasicMessageChannel, () => ({
      __proto__: dart.getGetters(BasicMessageChannel.__proto__),
      binaryMessenger: binary_messenger.BinaryMessenger
    }));
    dart.setLibraryUri(BasicMessageChannel, L4);
    dart.setFieldSignature(BasicMessageChannel, () => ({
      __proto__: dart.getFields(BasicMessageChannel.__proto__),
      name: dart.finalFieldType(core.String),
      codec: dart.finalFieldType(message_codec.MessageCodec$(T)),
      [_binaryMessenger]: dart.finalFieldType(dart.nullable(binary_messenger.BinaryMessenger))
    }));
    return BasicMessageChannel;
  });
  platform_channel.BasicMessageChannel = platform_channel.BasicMessageChannel$();
  dart.addTypeTests(platform_channel.BasicMessageChannel, _is_BasicMessageChannel_default);
  var _invokeMethod = dart.privateName(platform_channel, "_invokeMethod");
  var _handleAsMethodCall = dart.privateName(platform_channel, "_handleAsMethodCall");
  platform_channel.MethodChannel = class MethodChannel extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get codec() {
      return this[codec$];
    }
    set codec(value) {
      super.codec = value;
    }
    get [_binaryMessenger]() {
      return this[_binaryMessenger$];
    }
    set [_binaryMessenger](value) {
      super[_binaryMessenger] = value;
    }
    get binaryMessenger() {
      let t0;
      t0 = this[_binaryMessenger];
      return t0 == null ? binary_messenger.defaultBinaryMessenger : t0;
    }
    [_invokeMethod](T, method, opts) {
      if (method == null) dart.nullFailed(L3, 147, 38, "method");
      let missingOk = opts && 'missingOk' in opts ? opts.missingOk : null;
      if (missingOk == null) dart.nullFailed(L3, 147, 62, "missingOk");
      let $arguments = opts && 'arguments' in opts ? opts.arguments : null;
      return async.async(dart.nullable(T), (function* _invokeMethod() {
        if (!(method != null)) dart.assertFailed(null, L3, 148, 12, "method != null");
        let result = (yield this.binaryMessenger.send(this.name, this.codec.encodeMethodCall(new message_codec.MethodCall.new(method, $arguments))));
        if (result == null) {
          if (dart.test(missingOk)) {
            return null;
          }
          dart.throw(new message_codec.MissingPluginException.new("No implementation found for method " + dart.str(method) + " on channel " + dart.str(this.name)));
        }
        return dart.nullable(T).as(this.codec.decodeEnvelope(result));
      }).bind(this));
    }
    invokeMethod(T, method, $arguments = null) {
      if (method == null) dart.nullFailed(L3, 331, 37, "method");
      return this[_invokeMethod](T, method, {missingOk: false, arguments: $arguments});
    }
    invokeListMethod(T, method, $arguments = null) {
      if (method == null) dart.nullFailed(L3, 344, 47, "method");
      return async.async(dart.nullable(core.List$(T)), (function* invokeListMethod() {
        let t0;
        let result = (yield this.invokeMethod(ListN(), method, $arguments));
        t0 = result;
        return t0 == null ? null : t0[$cast](T);
      }).bind(this));
    }
    invokeMapMethod(K, V, method, $arguments = null) {
      if (method == null) dart.nullFailed(L3, 358, 51, "method");
      return async.async(dart.nullable(core.Map$(K, V)), (function* invokeMapMethod() {
        let t0;
        let result = (yield this.invokeMethod(MapN(), method, $arguments));
        t0 = result;
        return t0 == null ? null : t0[$cast](K, V);
      }).bind(this));
    }
    setMethodCallHandler(handler) {
      platform_channel._methodChannelHandlers._set(this, handler);
      this.binaryMessenger.setMessageHandler(this.name, handler == null ? null : dart.fn(message => this[_handleAsMethodCall](message, handler), ByteDataNToFutureOfByteDataN()));
    }
    checkMethodCallHandler(handler) {
      return dart.equals(platform_channel._methodChannelHandlers._get(this), handler);
    }
    setMockMethodCallHandler(handler) {
      platform_channel._methodChannelMockHandlers._set(this, handler);
      this.binaryMessenger.setMockMessageHandler(this.name, handler == null ? null : dart.fn(message => this[_handleAsMethodCall](message, handler), ByteDataNToFutureOfByteDataN()));
    }
    checkMockMethodCallHandler(handler) {
      return dart.equals(platform_channel._methodChannelMockHandlers._get(this), handler);
    }
    [_handleAsMethodCall](message, handler) {
      if (handler == null) dart.nullFailed(L3, 433, 77, "handler");
      return async.async(ByteDataN(), (function* _handleAsMethodCall() {
        let call = this.codec.decodeMethodCall(message);
        try {
          return this.codec.encodeSuccessEnvelope(yield handler(call));
        } catch (e$) {
          let ex = dart.getThrown(e$);
          if (message_codec.PlatformException.is(ex)) {
            let e = ex;
            return this.codec.encodeErrorEnvelope({code: e.code, message: e.message, details: e.details});
          } else if (message_codec.MissingPluginException.is(ex)) {
            return null;
          } else if (core.Object.is(ex)) {
            let e = ex;
            return this.codec.encodeErrorEnvelope({code: "error", message: dart.toString(e), details: null});
          } else
            throw e$;
        }
      }).bind(this));
    }
  };
  (platform_channel.MethodChannel.new = function(name, codec = C12 || CT.C12, binaryMessenger = null) {
    if (name == null) dart.nullFailed(L3, 129, 28, "name");
    if (codec == null) dart.nullFailed(L3, 129, 40, "codec");
    this[name$] = name;
    this[codec$] = codec;
    if (!(name != null)) dart.assertFailed(null, L3, 130, 16, "name != null");
    if (!(codec != null)) dart.assertFailed(null, L3, 131, 16, "codec != null");
    this[_binaryMessenger$] = binaryMessenger;
    ;
  }).prototype = platform_channel.MethodChannel.prototype;
  dart.addTypeTests(platform_channel.MethodChannel);
  dart.addTypeCaches(platform_channel.MethodChannel);
  const name$ = MethodChannel_name;
  const codec$ = MethodChannel_codec;
  const _binaryMessenger$ = MethodChannel__binaryMessenger;
  dart.setMethodSignature(platform_channel.MethodChannel, () => ({
    __proto__: dart.getMethods(platform_channel.MethodChannel.__proto__),
    [_invokeMethod]: dart.gFnType(T => [async.Future$(dart.nullable(T)), [core.String], {arguments: dart.dynamic}, {missingOk: core.bool}], T => [dart.nullable(core.Object)]),
    invokeMethod: dart.gFnType(T => [async.Future$(dart.nullable(T)), [core.String], [dart.dynamic]], T => [dart.nullable(core.Object)]),
    invokeListMethod: dart.gFnType(T => [async.Future$(dart.nullable(core.List$(T))), [core.String], [dart.dynamic]], T => [dart.nullable(core.Object)]),
    invokeMapMethod: dart.gFnType((K, V) => [async.Future$(dart.nullable(core.Map$(K, V))), [core.String], [dart.dynamic]], (K, V) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
    setMethodCallHandler: dart.fnType(dart.void, [dart.nullable(dart.fnType(async.Future, [message_codec.MethodCall]))]),
    checkMethodCallHandler: dart.fnType(core.bool, [dart.nullable(dart.fnType(async.Future, [message_codec.MethodCall]))]),
    setMockMethodCallHandler: dart.fnType(dart.void, [dart.nullable(dart.fnType(dart.nullable(async.Future), [message_codec.MethodCall]))]),
    checkMockMethodCallHandler: dart.fnType(core.bool, [dart.nullable(dart.fnType(async.Future, [message_codec.MethodCall]))]),
    [_handleAsMethodCall]: dart.fnType(async.Future$(dart.nullable(typed_data.ByteData)), [dart.nullable(typed_data.ByteData), dart.fnType(dart.nullable(async.Future), [message_codec.MethodCall])])
  }));
  dart.setGetterSignature(platform_channel.MethodChannel, () => ({
    __proto__: dart.getGetters(platform_channel.MethodChannel.__proto__),
    binaryMessenger: binary_messenger.BinaryMessenger
  }));
  dart.setLibraryUri(platform_channel.MethodChannel, L4);
  dart.setFieldSignature(platform_channel.MethodChannel, () => ({
    __proto__: dart.getFields(platform_channel.MethodChannel.__proto__),
    name: dart.finalFieldType(core.String),
    codec: dart.finalFieldType(message_codec.MethodCodec),
    [_binaryMessenger]: dart.finalFieldType(dart.nullable(binary_messenger.BinaryMessenger))
  }));
  const _invokeMethod$ = Symbol("_invokeMethod");
  platform_channel.OptionalMethodChannel = class OptionalMethodChannel extends platform_channel.MethodChannel {
    invokeMethod(T, method, $arguments = null) {
      if (method == null) dart.nullFailed(L3, 461, 37, "method");
      return async.async(dart.nullable(T), (function* invokeMethod() {
        return this[_invokeMethod$](T, method, {missingOk: true, arguments: $arguments});
      }).bind(this));
    }
    invokeListMethod(T, method, $arguments = null) {
      if (method == null) dart.nullFailed(L3, 466, 47, "method");
      return async.async(dart.nullable(core.List$(T)), (function* invokeListMethod() {
        let t2;
        let result = (yield this.invokeMethod(core.List, method, $arguments));
        t2 = result;
        return t2 == null ? null : t2[$cast](T);
      }).bind(this));
    }
    invokeMapMethod(K, V, method, $arguments = null) {
      if (method == null) dart.nullFailed(L3, 472, 51, "method");
      return async.async(dart.nullable(core.Map$(K, V)), (function* invokeMapMethod() {
        let t2;
        let result = (yield this.invokeMethod(core.Map, method, $arguments));
        t2 = result;
        return t2 == null ? null : t2[$cast](K, V);
      }).bind(this));
    }
    [_invokeMethod$](T, method, opts) {
      return super[_invokeMethod](T, method, opts);
    }
  };
  (platform_channel.OptionalMethodChannel.new = function(name, codec = C12 || CT.C12) {
    if (name == null) dart.nullFailed(L3, 457, 38, "name");
    if (codec == null) dart.nullFailed(L3, 457, 57, "codec");
    platform_channel.OptionalMethodChannel.__proto__.new.call(this, name, codec);
    ;
  }).prototype = platform_channel.OptionalMethodChannel.prototype;
  dart.addTypeTests(platform_channel.OptionalMethodChannel);
  dart.addTypeCaches(platform_channel.OptionalMethodChannel);
  dart.setMethodSignature(platform_channel.OptionalMethodChannel, () => ({
    __proto__: dart.getMethods(platform_channel.OptionalMethodChannel.__proto__),
    invokeMethod: dart.gFnType(T => [async.Future$(dart.nullable(T)), [core.String], [dart.dynamic]], T => [dart.nullable(core.Object)]),
    invokeListMethod: dart.gFnType(T => [async.Future$(dart.nullable(core.List$(T))), [core.String], [dart.dynamic]], T => [dart.nullable(core.Object)]),
    invokeMapMethod: dart.gFnType((K, V) => [async.Future$(dart.nullable(core.Map$(K, V))), [core.String], [dart.dynamic]], (K, V) => [dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(platform_channel.OptionalMethodChannel, L4);
  var name$0 = dart.privateName(platform_channel, "EventChannel.name");
  var codec$0 = dart.privateName(platform_channel, "EventChannel.codec");
  var _binaryMessenger$0 = dart.privateName(platform_channel, "EventChannel._binaryMessenger");
  platform_channel.EventChannel = class EventChannel extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get codec() {
      return this[codec$0];
    }
    set codec(value) {
      super.codec = value;
    }
    get [_binaryMessenger]() {
      return this[_binaryMessenger$0];
    }
    set [_binaryMessenger](value) {
      super[_binaryMessenger] = value;
    }
    get binaryMessenger() {
      let t2;
      t2 = this[_binaryMessenger];
      return t2 == null ? binary_messenger.defaultBinaryMessenger : t2;
    }
    receiveBroadcastStream($arguments = null) {
      let methodChannel = new platform_channel.MethodChannel.new(this.name, this.codec);
      let controller = null;
      let controller$35isSet = false;
      function controller$35get() {
        return controller$35isSet ? controller : dart.throw(new _internal.LateError.localNI("controller"));
      }
      dart.fn(controller$35get, VoidToStreamController());
      function controller$35set(t5) {
        if (t5 == null) dart.nullFailed(L3, 531, 36, "null");
        controller$35isSet = true;
        return controller = t5;
      }
      dart.fn(controller$35set, StreamControllerTodynamic());
      controller$35set(async.StreamController.broadcast({onListen: dart.fn(() => async.async(dart.void, (function*() {
          this.binaryMessenger.setMessageHandler(this.name, dart.fn(reply => async.async(core.Null, (function*() {
            if (reply == null) {
              controller$35get().close();
            } else {
              try {
                controller$35get().add(this.codec.decodeEnvelope(reply));
              } catch (e$) {
                let e = dart.getThrown(e$);
                if (message_codec.PlatformException.is(e)) {
                  controller$35get().addError(e);
                } else
                  throw e$;
              }
            }
            return null;
          }).bind(this)), ByteDataNToFutureOfNull()));
          try {
            yield methodChannel.invokeMethod(dart.void, "listen", $arguments);
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            if (core.Object.is(exception)) {
              assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("while activating platform stream on channel " + dart.str(this.name))}));
            } else
              throw e;
          }
        }).bind(this)), VoidToFutureOfvoid()), onCancel: dart.fn(() => async.async(dart.void, (function*() {
          this.binaryMessenger.setMessageHandler(this.name, null);
          try {
            yield methodChannel.invokeMethod(dart.void, "cancel", $arguments);
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            if (core.Object.is(exception)) {
              assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("while de-activating platform stream on channel " + dart.str(this.name))}));
            } else
              throw e;
          }
        }).bind(this)), VoidToFutureOfvoid())}));
      return controller$35get().stream;
    }
  };
  (platform_channel.EventChannel.new = function(name, codec = C12 || CT.C12, binaryMessenger = null) {
    if (name == null) dart.nullFailed(L3, 501, 27, "name");
    if (codec == null) dart.nullFailed(L3, 501, 39, "codec");
    this[name$0] = name;
    this[codec$0] = codec;
    if (!(name != null)) dart.assertFailed(null, L3, 502, 16, "name != null");
    if (!(codec != null)) dart.assertFailed(null, L3, 503, 16, "codec != null");
    this[_binaryMessenger$0] = binaryMessenger;
    ;
  }).prototype = platform_channel.EventChannel.prototype;
  dart.addTypeTests(platform_channel.EventChannel);
  dart.addTypeCaches(platform_channel.EventChannel);
  dart.setMethodSignature(platform_channel.EventChannel, () => ({
    __proto__: dart.getMethods(platform_channel.EventChannel.__proto__),
    receiveBroadcastStream: dart.fnType(async.Stream, [], [dart.dynamic])
  }));
  dart.setGetterSignature(platform_channel.EventChannel, () => ({
    __proto__: dart.getGetters(platform_channel.EventChannel.__proto__),
    binaryMessenger: binary_messenger.BinaryMessenger
  }));
  dart.setLibraryUri(platform_channel.EventChannel, L4);
  dart.setFieldSignature(platform_channel.EventChannel, () => ({
    __proto__: dart.getFields(platform_channel.EventChannel.__proto__),
    name: dart.finalFieldType(core.String),
    codec: dart.finalFieldType(message_codec.MethodCodec),
    [_binaryMessenger]: dart.finalFieldType(dart.nullable(binary_messenger.BinaryMessenger))
  }));
  dart.defineLazy(platform_channel, {
    /*platform_channel._methodChannelHandlers*/get _methodChannelHandlers() {
      return new (ExpandoOfObject()).new();
    },
    set _methodChannelHandlers(_) {},
    /*platform_channel._methodChannelMockHandlers*/get _methodChannelMockHandlers() {
      return new (ExpandoOfObject()).new();
    },
    set _methodChannelMockHandlers(_) {}
  }, false);
  const _is_MessageCodec_default = Symbol('_is_MessageCodec_default');
  message_codec.MessageCodec$ = dart.generic(T => {
    class MessageCodec extends core.Object {}
    (MessageCodec.new = function() {
      ;
    }).prototype = MessageCodec.prototype;
    dart.addTypeTests(MessageCodec);
    MessageCodec.prototype[_is_MessageCodec_default] = true;
    dart.addTypeCaches(MessageCodec);
    dart.setLibraryUri(MessageCodec, L5);
    return MessageCodec;
  });
  message_codec.MessageCodec = message_codec.MessageCodec$();
  dart.addTypeTests(message_codec.MessageCodec, _is_MessageCodec_default);
  var method$ = dart.privateName(message_codec, "MethodCall.method");
  var arguments$ = dart.privateName(message_codec, "MethodCall.arguments");
  message_codec.MethodCall = class MethodCall extends core.Object {
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    get arguments() {
      return this[arguments$];
    }
    set arguments(value) {
      super.arguments = value;
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "MethodCall")) + "(" + dart.str(this.method) + ", " + dart.str(this.arguments) + ")";
    }
  };
  (message_codec.MethodCall.new = function(method, $arguments = null) {
    if (method == null) dart.nullFailed(L6, 40, 25, "method");
    this[method$] = method;
    this[arguments$] = $arguments;
    if (!(method != null)) dart.assertFailed(null, L6, 41, 14, "method != null");
    ;
  }).prototype = message_codec.MethodCall.prototype;
  dart.addTypeTests(message_codec.MethodCall);
  dart.addTypeCaches(message_codec.MethodCall);
  dart.setLibraryUri(message_codec.MethodCall, L5);
  dart.setFieldSignature(message_codec.MethodCall, () => ({
    __proto__: dart.getFields(message_codec.MethodCall.__proto__),
    method: dart.finalFieldType(core.String),
    arguments: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(message_codec.MethodCall, ['toString']);
  message_codec.MethodCodec = class MethodCodec extends core.Object {};
  (message_codec.MethodCodec.new = function() {
    ;
  }).prototype = message_codec.MethodCodec.prototype;
  dart.addTypeTests(message_codec.MethodCodec);
  dart.addTypeCaches(message_codec.MethodCodec);
  dart.setLibraryUri(message_codec.MethodCodec, L5);
  var code$ = dart.privateName(message_codec, "PlatformException.code");
  var message$ = dart.privateName(message_codec, "PlatformException.message");
  var details$ = dart.privateName(message_codec, "PlatformException.details");
  var stacktrace$ = dart.privateName(message_codec, "PlatformException.stacktrace");
  message_codec.PlatformException = class PlatformException extends core.Object {
    get code() {
      return this[code$];
    }
    set code(value) {
      super.code = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get details() {
      return this[details$];
    }
    set details(value) {
      super.details = value;
    }
    get stacktrace() {
      return this[stacktrace$];
    }
    set stacktrace(value) {
      super.stacktrace = value;
    }
    toString() {
      return "PlatformException(" + dart.str(this.code) + ", " + dart.str(this.message) + ", " + dart.str(this.details) + ", " + dart.str(this.stacktrace) + ")";
    }
  };
  (message_codec.PlatformException.new = function(opts) {
    let code = opts && 'code' in opts ? opts.code : null;
    if (code == null) dart.nullFailed(L6, 107, 19, "code");
    let message = opts && 'message' in opts ? opts.message : null;
    let details = opts && 'details' in opts ? opts.details : null;
    let stacktrace = opts && 'stacktrace' in opts ? opts.stacktrace : null;
    this[code$] = code;
    this[message$] = message;
    this[details$] = details;
    this[stacktrace$] = stacktrace;
    if (!(code != null)) dart.assertFailed(null, L6, 111, 15, "code != null");
    ;
  }).prototype = message_codec.PlatformException.prototype;
  dart.addTypeTests(message_codec.PlatformException);
  dart.addTypeCaches(message_codec.PlatformException);
  message_codec.PlatformException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(message_codec.PlatformException, L5);
  dart.setFieldSignature(message_codec.PlatformException, () => ({
    __proto__: dart.getFields(message_codec.PlatformException.__proto__),
    code: dart.finalFieldType(core.String),
    message: dart.finalFieldType(dart.nullable(core.String)),
    details: dart.finalFieldType(dart.dynamic),
    stacktrace: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionMethods(message_codec.PlatformException, ['toString']);
  var message$0 = dart.privateName(message_codec, "MissingPluginException.message");
  message_codec.MissingPluginException = class MissingPluginException extends core.Object {
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return "MissingPluginException(" + dart.str(this.message) + ")";
    }
  };
  (message_codec.MissingPluginException.new = function(message = null) {
    this[message$0] = message;
    ;
  }).prototype = message_codec.MissingPluginException.prototype;
  dart.addTypeTests(message_codec.MissingPluginException);
  dart.addTypeCaches(message_codec.MissingPluginException);
  message_codec.MissingPluginException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(message_codec.MissingPluginException, L5);
  dart.setFieldSignature(message_codec.MissingPluginException, () => ({
    __proto__: dart.getFields(message_codec.MissingPluginException.__proto__),
    message: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionMethods(message_codec.MissingPluginException, ['toString']);
  var _rootBucket = dart.privateName(restoration, "_rootBucket");
  var _pendingRootBucket = dart.privateName(restoration, "_pendingRootBucket");
  var _rootBucketIsValid = dart.privateName(restoration, "_rootBucketIsValid");
  var _isReplacing = dart.privateName(restoration, "_isReplacing");
  var _debugDoingUpdate = dart.privateName(restoration, "_debugDoingUpdate");
  var _serializationScheduled = dart.privateName(restoration, "_serializationScheduled");
  var _bucketsNeedingSerialization = dart.privateName(restoration, "_bucketsNeedingSerialization");
  var _methodHandler = dart.privateName(restoration, "_methodHandler");
  var _getRootBucketFromEngine = dart.privateName(restoration, "_getRootBucketFromEngine");
  var _parseAndHandleRestorationUpdateFromEngine = dart.privateName(restoration, "_parseAndHandleRestorationUpdateFromEngine");
  var _decodeRestorationData = dart.privateName(restoration, "_decodeRestorationData");
  var _encodeRestorationData = dart.privateName(restoration, "_encodeRestorationData");
  var _manager = dart.privateName(restoration, "_manager");
  var _doSerialization = dart.privateName(restoration, "_doSerialization");
  var _rawData = dart.privateName(restoration, "_rawData");
  restoration.RestorationManager = class RestorationManager extends change_notifier.ChangeNotifier {
    initChannels() {
      if (!!dart.test(system_channels.SystemChannels.restoration.checkMethodCallHandler(dart.bind(this, _methodHandler)))) dart.assertFailed(null, L7, 115, 12, "!SystemChannels.restoration.checkMethodCallHandler(_methodHandler)");
      system_channels.SystemChannels.restoration.setMethodCallHandler(dart.bind(this, _methodHandler));
    }
    get rootBucket() {
      if (dart.test(this[_rootBucketIsValid])) {
        return new (SynchronousFutureOfRestorationBucketN()).new(this[_rootBucket]);
      }
      if (this[_pendingRootBucket] == null) {
        this[_pendingRootBucket] = CompleterOfRestorationBucketN().new();
        this[_getRootBucketFromEngine]();
      }
      return dart.nullCheck(this[_pendingRootBucket]).future;
    }
    get isReplacing() {
      return this[_isReplacing];
    }
    [_getRootBucketFromEngine]() {
      return async.async(dart.void, (function* _getRootBucketFromEngine() {
        let config = (yield system_channels.SystemChannels.restoration.invokeMethod(core.Map, "get"));
        if (this[_pendingRootBucket] == null) {
          return;
        }
        if (!(this[_rootBucket] == null)) dart.assertFailed(null, L7, 182, 12, "_rootBucket == null");
        this[_parseAndHandleRestorationUpdateFromEngine](config);
      }).bind(this));
    }
    [_parseAndHandleRestorationUpdateFromEngine](update) {
      this.handleRestorationUpdateFromEngine({enabled: update != null && dart.test(core.bool.as(update[$_get]("enabled"))), data: update == null ? null : Uint8ListN().as(update[$_get]("data"))});
    }
    handleRestorationUpdateFromEngine(opts) {
      let t10, t10$;
      let enabled = opts && 'enabled' in opts ? opts.enabled : null;
      if (enabled == null) dart.nullFailed(L7, 208, 57, "enabled");
      let data = opts && 'data' in opts ? opts.data : null;
      if (!(enabled != null)) dart.assertFailed(null, L7, 209, 12, "enabled != null");
      if (!(dart.test(enabled) || data == null)) dart.assertFailed(null, L7, 210, 12, "enabled || data == null");
      this[_isReplacing] = dart.test(this[_rootBucketIsValid]) && dart.test(enabled);
      if (dart.test(this[_isReplacing])) {
        dart.nullCheck(binding.SchedulerBinding.instance).addPostFrameCallback(dart.fn(_ => {
          if (_ == null) dart.nullFailed(L7, 214, 65, "_");
          this[_isReplacing] = false;
        }, DurationTovoid()));
      }
      let oldRoot = this[_rootBucket];
      this[_rootBucket] = dart.test(enabled) ? new restoration.RestorationBucket.root({manager: this, rawData: this[_decodeRestorationData](data)}) : null;
      this[_rootBucketIsValid] = true;
      if (!(this[_pendingRootBucket] == null || !dart.test(dart.nullCheck(this[_pendingRootBucket]).isCompleted))) dart.assertFailed(null, L7, 224, 12, "_pendingRootBucket == null || !_pendingRootBucket!.isCompleted");
      t10 = this[_pendingRootBucket];
      t10 == null ? null : t10.complete(this[_rootBucket]);
      this[_pendingRootBucket] = null;
      if (!dart.equals(this[_rootBucket], oldRoot)) {
        this.notifyListeners();
        t10$ = oldRoot;
        t10$ == null ? null : t10$.dispose();
      }
    }
    sendToEngine(encodedData) {
      if (encodedData == null) dart.nullFailed(L7, 246, 39, "encodedData");
      if (!(encodedData != null)) dart.assertFailed(null, L7, 247, 12, "encodedData != null");
      return system_channels.SystemChannels.restoration.invokeMethod(dart.void, "put", encodedData);
    }
    [_methodHandler](call) {
      if (call == null) dart.nullFailed(L7, 254, 45, "call");
      return async.async(dart.dynamic, (function* _methodHandler() {
        switch (call.method) {
          case "push":
          {
            this[_parseAndHandleRestorationUpdateFromEngine](core.Map.as(call.arguments));
            break;
          }
          default:
          {
            dart.throw(new core.UnimplementedError.new(dart.str(call.method) + " was invoked but isn't implemented by " + dart.str(this[$runtimeType])));
          }
        }
      }).bind(this));
    }
    [_decodeRestorationData](data) {
      if (data == null) {
        return null;
      }
      let encoded = data[$buffer][$asByteData](data[$offsetInBytes], data[$lengthInBytes]);
      return core.Map.as((C10 || CT.C10).decodeMessage(encoded));
    }
    [_encodeRestorationData](data) {
      if (data == null) dart.nullFailed(L7, 272, 58, "data");
      let encoded = dart.nullCheck((C10 || CT.C10).encodeMessage(data));
      return encoded[$buffer][$asUint8List](encoded[$offsetInBytes], encoded[$lengthInBytes]);
    }
    scheduleSerializationFor(bucket) {
      if (bucket == null) dart.nullFailed(L7, 293, 51, "bucket");
      if (!(bucket != null)) dart.assertFailed(null, L7, 294, 12, "bucket != null");
      if (!dart.equals(bucket[_manager], this)) dart.assertFailed(null, L7, 295, 12, "bucket._manager == this");
      if (!!dart.test(this[_debugDoingUpdate])) dart.assertFailed(null, L7, 296, 12, "!_debugDoingUpdate");
      this[_bucketsNeedingSerialization].add(bucket);
      if (!dart.test(this[_serializationScheduled])) {
        this[_serializationScheduled] = true;
        dart.nullCheck(binding.SchedulerBinding.instance).addPostFrameCallback(dart.fn(_ => {
          if (_ == null) dart.nullFailed(L7, 300, 65, "_");
          return this[_doSerialization]();
        }, DurationTovoid()));
      }
    }
    unscheduleSerializationFor(bucket) {
      if (bucket == null) dart.nullFailed(L7, 315, 53, "bucket");
      if (!(bucket != null)) dart.assertFailed(null, L7, 316, 12, "bucket != null");
      if (!dart.equals(bucket[_manager], this)) dart.assertFailed(null, L7, 317, 12, "bucket._manager == this");
      if (!!dart.test(this[_debugDoingUpdate])) dart.assertFailed(null, L7, 318, 12, "!_debugDoingUpdate");
      this[_bucketsNeedingSerialization].remove(bucket);
    }
    [_doSerialization]() {
      if (!dart.test(this[_serializationScheduled])) {
        return;
      }
      if (!dart.test(dart.fn(() => {
        this[_debugDoingUpdate] = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L7, 326, 12, "() {\n      _debugDoingUpdate = true;\n      return true;\n    }()");
      this[_serializationScheduled] = false;
      for (let bucket of this[_bucketsNeedingSerialization]) {
        bucket.finalize();
      }
      this[_bucketsNeedingSerialization].clear();
      this.sendToEngine(this[_encodeRestorationData](dart.nullCheck(this[_rootBucket])[_rawData]));
      if (!dart.test(dart.fn(() => {
        this[_debugDoingUpdate] = false;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L7, 338, 12, "() {\n      _debugDoingUpdate = false;\n      return true;\n    }()");
    }
    flushData() {
      if (!!dart.test(this[_debugDoingUpdate])) dart.assertFailed(null, L7, 362, 12, "!_debugDoingUpdate");
      if (dart.test(dart.nullCheck(binding.SchedulerBinding.instance).hasScheduledFrame)) {
        return;
      }
      this[_doSerialization]();
      if (!!dart.test(this[_serializationScheduled])) dart.assertFailed(null, L7, 367, 12, "!_serializationScheduled");
    }
  };
  (restoration.RestorationManager.new = function() {
    this[_rootBucket] = null;
    this[_pendingRootBucket] = null;
    this[_rootBucketIsValid] = false;
    this[_isReplacing] = false;
    this[_debugDoingUpdate] = false;
    this[_serializationScheduled] = false;
    this[_bucketsNeedingSerialization] = LinkedHashSetOfRestorationBucket().new();
    restoration.RestorationManager.__proto__.new.call(this);
    this.initChannels();
  }).prototype = restoration.RestorationManager.prototype;
  dart.addTypeTests(restoration.RestorationManager);
  dart.addTypeCaches(restoration.RestorationManager);
  dart.setMethodSignature(restoration.RestorationManager, () => ({
    __proto__: dart.getMethods(restoration.RestorationManager.__proto__),
    initChannels: dart.fnType(dart.void, []),
    [_getRootBucketFromEngine]: dart.fnType(async.Future$(dart.void), []),
    [_parseAndHandleRestorationUpdateFromEngine]: dart.fnType(dart.void, [dart.nullable(core.Map)]),
    handleRestorationUpdateFromEngine: dart.fnType(dart.void, [], {}, {data: dart.nullable(typed_data.Uint8List), enabled: core.bool}),
    sendToEngine: dart.fnType(async.Future$(dart.void), [typed_data.Uint8List]),
    [_methodHandler]: dart.fnType(async.Future, [message_codec.MethodCall]),
    [_decodeRestorationData]: dart.fnType(dart.nullable(core.Map), [dart.nullable(typed_data.Uint8List)]),
    [_encodeRestorationData]: dart.fnType(typed_data.Uint8List, [core.Map]),
    scheduleSerializationFor: dart.fnType(dart.void, [restoration.RestorationBucket]),
    unscheduleSerializationFor: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_doSerialization]: dart.fnType(dart.void, []),
    flushData: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(restoration.RestorationManager, () => ({
    __proto__: dart.getGetters(restoration.RestorationManager.__proto__),
    rootBucket: async.Future$(dart.nullable(restoration.RestorationBucket)),
    isReplacing: core.bool
  }));
  dart.setLibraryUri(restoration.RestorationManager, L8);
  dart.setFieldSignature(restoration.RestorationManager, () => ({
    __proto__: dart.getFields(restoration.RestorationManager.__proto__),
    [_rootBucket]: dart.fieldType(dart.nullable(restoration.RestorationBucket)),
    [_pendingRootBucket]: dart.fieldType(dart.nullable(async.Completer$(dart.nullable(restoration.RestorationBucket)))),
    [_rootBucketIsValid]: dart.fieldType(core.bool),
    [_isReplacing]: dart.fieldType(core.bool),
    [_debugDoingUpdate]: dart.fieldType(core.bool),
    [_serializationScheduled]: dart.fieldType(core.bool),
    [_bucketsNeedingSerialization]: dart.finalFieldType(core.Set$(restoration.RestorationBucket))
  }));
  var _debugOwner = dart.privateName(restoration, "_debugOwner");
  var _claimedChildren = dart.privateName(restoration, "_claimedChildren");
  var _childrenToAdd = dart.privateName(restoration, "_childrenToAdd");
  var _needsSerialization = dart.privateName(restoration, "_needsSerialization");
  var _debugDisposed = dart.privateName(restoration, "_debugDisposed");
  var _parent = dart.privateName(restoration, "_parent");
  var _restorationId = dart.privateName(restoration, "_restorationId");
  var _rawChildren = dart.privateName(restoration, "_rawChildren");
  var _debugAssertNotDisposed = dart.privateName(restoration, "_debugAssertNotDisposed");
  var _rawValues = dart.privateName(restoration, "_rawValues");
  var _markNeedsSerialization = dart.privateName(restoration, "_markNeedsSerialization");
  var _removeChildData = dart.privateName(restoration, "_removeChildData");
  var _addChildData = dart.privateName(restoration, "_addChildData");
  var _recursivelyUpdateManager = dart.privateName(restoration, "_recursivelyUpdateManager");
  var _updateManager = dart.privateName(restoration, "_updateManager");
  var _visitChildren = dart.privateName(restoration, "_visitChildren");
  var _dropChild = dart.privateName(restoration, "_dropChild");
  var _debugAssertIntegrity = dart.privateName(restoration, "_debugAssertIntegrity");
  var _finalizeAddChildData = dart.privateName(restoration, "_finalizeAddChildData");
  restoration.RestorationBucket = class RestorationBucket extends core.Object {
    get debugOwner() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L7, 535, 12, "_debugAssertNotDisposed()");
      return this[_debugOwner];
    }
    get isReplacing() {
      let t10, t10$;
      t10$ = (t10 = this[_manager], t10 == null ? null : t10.isReplacing);
      return t10$ == null ? false : t10$;
    }
    get restorationId() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L7, 559, 12, "_debugAssertNotDisposed()");
      return this[_restorationId];
    }
    get [_rawChildren]() {
      return core.Map.as(this[_rawData][$putIfAbsent]("c", dart.fn(() => new _js_helper.LinkedMap.new(), VoidToMap())));
    }
    get [_rawValues]() {
      return core.Map.as(this[_rawData][$putIfAbsent]("v", dart.fn(() => new _js_helper.LinkedMap.new(), VoidToMap())));
    }
    read(P, restorationId) {
      if (restorationId == null) dart.nullFailed(L7, 583, 21, "restorationId");
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L7, 584, 12, "_debugAssertNotDisposed()");
      if (!(restorationId != null)) dart.assertFailed(null, L7, 585, 12, "restorationId != null");
      return dart.nullable(P).as(this[_rawValues][$_get](restorationId));
    }
    write(P, restorationId, value) {
      if (restorationId == null) dart.nullFailed(L7, 605, 24, "restorationId");
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L7, 606, 12, "_debugAssertNotDisposed()");
      if (!(restorationId != null)) dart.assertFailed(null, L7, 607, 12, "restorationId != null");
      if (!dart.test(restoration.debugIsSerializableForRestoration(value))) dart.assertFailed(null, L7, 608, 12, "debugIsSerializableForRestoration(value)");
      if (!dart.equals(this[_rawValues][$_get](restorationId), value) || !dart.test(this[_rawValues][$containsKey](restorationId))) {
        this[_rawValues][$_set](restorationId, value);
        this[_markNeedsSerialization]();
      }
    }
    remove(P, restorationId) {
      if (restorationId == null) dart.nullFailed(L7, 627, 23, "restorationId");
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L7, 628, 12, "_debugAssertNotDisposed()");
      if (!(restorationId != null)) dart.assertFailed(null, L7, 629, 12, "restorationId != null");
      let needsUpdate = this[_rawValues][$containsKey](restorationId);
      let result = dart.nullable(P).as(this[_rawValues][$remove](restorationId));
      if (dart.test(this[_rawValues][$isEmpty])) {
        this[_rawData][$remove]("v");
      }
      if (dart.test(needsUpdate)) {
        this[_markNeedsSerialization]();
      }
      return result;
    }
    contains(restorationId) {
      if (restorationId == null) dart.nullFailed(L7, 649, 24, "restorationId");
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L7, 650, 12, "_debugAssertNotDisposed()");
      if (!(restorationId != null)) dart.assertFailed(null, L7, 651, 12, "restorationId != null");
      return this[_rawValues][$containsKey](restorationId);
    }
    claimChild(restorationId, opts) {
      if (restorationId == null) dart.nullFailed(L7, 685, 39, "restorationId");
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L7, 686, 12, "_debugAssertNotDisposed()");
      if (!(restorationId != null)) dart.assertFailed(null, L7, 687, 12, "restorationId != null");
      if (dart.test(this[_claimedChildren][$containsKey](restorationId)) || !dart.test(this[_rawChildren][$containsKey](restorationId))) {
        let child = new restoration.RestorationBucket.empty({debugOwner: debugOwner, restorationId: restorationId});
        this.adoptChild(child);
        return child;
      }
      if (!(this[_rawChildren][$_get](restorationId) != null)) dart.assertFailed(null, L7, 713, 12, "_rawChildren[restorationId] != null");
      let child = new restoration.RestorationBucket.child({restorationId: restorationId, parent: this, debugOwner: debugOwner});
      this[_claimedChildren][$_set](restorationId, child);
      return child;
    }
    adoptChild(child) {
      let t10;
      if (child == null) dart.nullFailed(L7, 735, 37, "child");
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L7, 736, 12, "_debugAssertNotDisposed()");
      if (!(child != null)) dart.assertFailed(null, L7, 737, 12, "child != null");
      if (!dart.equals(child[_parent], this)) {
        t10 = child[_parent];
        t10 == null ? null : t10[_removeChildData](child);
        child[_parent] = this;
        this[_addChildData](child);
        if (!dart.equals(child[_manager], this[_manager])) {
          this[_recursivelyUpdateManager](child);
        }
      }
      if (!dart.equals(child[_parent], this)) dart.assertFailed(null, L7, 746, 12, "child._parent == this");
      if (!dart.equals(child[_manager], this[_manager])) dart.assertFailed(null, L7, 747, 12, "child._manager == _manager");
    }
    [_dropChild](child) {
      if (child == null) dart.nullFailed(L7, 750, 37, "child");
      if (!(child != null)) dart.assertFailed(null, L7, 751, 12, "child != null");
      if (!dart.equals(child[_parent], this)) dart.assertFailed(null, L7, 752, 12, "child._parent == this");
      this[_removeChildData](child);
      child[_parent] = null;
      if (child[_manager] != null) {
        child[_updateManager](null);
        child[_visitChildren](dart.bind(this, _recursivelyUpdateManager));
      }
    }
    [_markNeedsSerialization]() {
      let t10;
      if (!dart.test(this[_needsSerialization])) {
        this[_needsSerialization] = true;
        t10 = this[_manager];
        t10 == null ? null : t10.scheduleSerializationFor(this);
      }
    }
    finalize() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L7, 775, 12, "_debugAssertNotDisposed()");
      if (!dart.test(this[_needsSerialization])) dart.assertFailed(null, L7, 776, 12, "_needsSerialization");
      this[_needsSerialization] = false;
      if (!dart.test(this[_debugAssertIntegrity]())) dart.assertFailed(null, L7, 778, 12, "_debugAssertIntegrity()");
    }
    [_recursivelyUpdateManager](bucket) {
      if (bucket == null) dart.nullFailed(L7, 781, 52, "bucket");
      bucket[_updateManager](this[_manager]);
      bucket[_visitChildren](dart.bind(this, _recursivelyUpdateManager));
    }
    [_updateManager](newManager) {
      let t10;
      if (dart.equals(this[_manager], newManager)) {
        return;
      }
      if (dart.test(this[_needsSerialization])) {
        t10 = this[_manager];
        t10 == null ? null : t10.unscheduleSerializationFor(this);
      }
      this[_manager] = newManager;
      if (dart.test(this[_needsSerialization]) && this[_manager] != null) {
        this[_needsSerialization] = false;
        this[_markNeedsSerialization]();
      }
    }
    [_debugAssertIntegrity]() {
      if (!dart.test(dart.fn(() => {
        if (dart.test(this[_childrenToAdd][$isEmpty])) {
          return true;
        }
        let error = JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Multiple owners claimed child RestorationBuckets with the same IDs."), new assertions.ErrorDescription.new("The following IDs were claimed multiple times from the parent " + dart.str(this) + ":")]);
        for (let child of this[_childrenToAdd][$entries]) {
          let id = child.key;
          let buckets = child.value;
          if (!dart.test(buckets[$isNotEmpty])) dart.assertFailed(null, L7, 812, 16, "buckets.isNotEmpty");
          if (!dart.test(this[_claimedChildren][$containsKey](id))) dart.assertFailed(null, L7, 813, 16, "_claimedChildren.containsKey(id)");
          error[$addAll]((() => {
            let t10 = JSArrayOfDiagnosticsNode().of([new assertions.ErrorDescription.new(" * \"" + dart.str(id) + "\" was claimed by:")]);
            t10[$addAll](buckets[$map](diagnostics.DiagnosticsNode, dart.fn(bucket => {
              if (bucket == null) dart.nullFailed(L7, 816, 45, "bucket");
              return new assertions.ErrorDescription.new("   * " + dart.str(bucket.debugOwner));
            }, RestorationBucketToErrorDescription())));
            t10.push(new assertions.ErrorDescription.new("   * " + dart.str(dart.nullCheck(this[_claimedChildren][$_get](id)).debugOwner) + " (current owner)"));
            return t10;
          })());
        }
        dart.throw(new assertions.FlutterError.fromParts(error));
      }, VoidTobool())())) dart.assertFailed(null, L7, 801, 12, "() {\n      if (_childrenToAdd.isEmpty) {\n        return true;\n      }\n      final List<DiagnosticsNode> error = <DiagnosticsNode>[\n        ErrorSummary('Multiple owners claimed child RestorationBuckets with the same IDs.'),\n        ErrorDescription('The following IDs were claimed multiple times from the parent $this:')\n      ];\n      for (final MapEntry<String, List<RestorationBucket>> child in _childrenToAdd.entries) {\n        final String id = child.key;\n        final List<RestorationBucket> buckets = child.value;\n        assert(buckets.isNotEmpty);\n        assert(_claimedChildren.containsKey(id));\n        error.addAll(<DiagnosticsNode>[\n          ErrorDescription(' * \"$id\" was claimed by:'),\n          ...buckets.map((RestorationBucket bucket) => ErrorDescription('   * ${bucket.debugOwner}')),\n          ErrorDescription('   * ${_claimedChildren[id]!.debugOwner} (current owner)'),\n        ]);\n      }\n      throw FlutterError.fromParts(error);\n    }()");
      return true;
    }
    [_removeChildData](child) {
      let t11, t11$;
      if (child == null) dart.nullFailed(L7, 825, 43, "child");
      if (!(child != null)) dart.assertFailed(null, L7, 826, 12, "child != null");
      if (!dart.equals(child[_parent], this)) dart.assertFailed(null, L7, 827, 12, "child._parent == this");
      if (dart.equals(this[_claimedChildren][$remove](child.restorationId), child)) {
        this[_rawChildren][$remove](child.restorationId);
        let pendingChildren = this[_childrenToAdd][$_get](child.restorationId);
        if (pendingChildren != null) {
          let toAdd = pendingChildren[$removeLast]();
          this[_finalizeAddChildData](toAdd);
          if (dart.test(pendingChildren[$isEmpty])) {
            this[_childrenToAdd][$remove](child.restorationId);
          }
        }
        if (dart.test(this[_rawChildren][$isEmpty])) {
          this[_rawData][$remove]("c");
        }
        this[_markNeedsSerialization]();
        return;
      }
      t11 = this[_childrenToAdd][$_get](child.restorationId);
      t11 == null ? null : t11[$remove](child);
      if (dart.equals((t11$ = this[_childrenToAdd][$_get](child.restorationId), t11$ == null ? null : t11$[$isEmpty]), true)) {
        this[_childrenToAdd][$remove](child.restorationId);
      }
    }
    [_addChildData](child) {
      if (child == null) dart.nullFailed(L7, 850, 40, "child");
      if (!(child != null)) dart.assertFailed(null, L7, 851, 12, "child != null");
      if (!dart.equals(child[_parent], this)) dart.assertFailed(null, L7, 852, 12, "child._parent == this");
      if (dart.test(this[_claimedChildren][$containsKey](child.restorationId))) {
        this[_childrenToAdd][$putIfAbsent](child.restorationId, dart.fn(() => JSArrayOfRestorationBucket().of([]), VoidToListOfRestorationBucket()))[$add](child);
        this[_markNeedsSerialization]();
        return;
      }
      this[_finalizeAddChildData](child);
      this[_markNeedsSerialization]();
    }
    [_finalizeAddChildData](child) {
      if (child == null) dart.nullFailed(L7, 865, 48, "child");
      if (!(this[_claimedChildren][$_get](child.restorationId) == null)) dart.assertFailed(null, L7, 866, 12, "_claimedChildren[child.restorationId] == null");
      if (!(this[_rawChildren][$_get](child.restorationId) == null)) dart.assertFailed(null, L7, 867, 12, "_rawChildren[child.restorationId] == null");
      this[_claimedChildren][$_set](child.restorationId, child);
      this[_rawChildren][$_set](child.restorationId, child[_rawData]);
    }
    [_visitChildren](visitor, opts) {
      if (visitor == null) dart.nullFailed(L7, 872, 38, "visitor");
      let concurrentModification = opts && 'concurrentModification' in opts ? opts.concurrentModification : false;
      if (concurrentModification == null) dart.nullFailed(L7, 872, 53, "concurrentModification");
      let children = this[_claimedChildren][$values][$followedBy](this[_childrenToAdd][$values][$expand](restoration.RestorationBucket, dart.fn(buckets => {
        if (buckets == null) dart.nullFailed(L7, 874, 75, "buckets");
        return buckets;
      }, ListOfRestorationBucketToListOfRestorationBucket())));
      if (dart.test(concurrentModification)) {
        children = children[$toList]({growable: false});
      }
      children[$forEach](visitor);
    }
    rename(newRestorationId) {
      let t11, t11$;
      if (newRestorationId == null) dart.nullFailed(L7, 892, 22, "newRestorationId");
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L7, 893, 12, "_debugAssertNotDisposed()");
      if (!(newRestorationId != null)) dart.assertFailed(null, L7, 894, 12, "newRestorationId != null");
      if (newRestorationId == this.restorationId) {
        return;
      }
      t11 = this[_parent];
      t11 == null ? null : t11[_removeChildData](this);
      this[_restorationId] = newRestorationId;
      t11$ = this[_parent];
      t11$ == null ? null : t11$[_addChildData](this);
    }
    dispose() {
      let t11;
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L7, 916, 12, "_debugAssertNotDisposed()");
      this[_visitChildren](dart.bind(this, _dropChild), {concurrentModification: true});
      this[_claimedChildren][$clear]();
      this[_childrenToAdd][$clear]();
      t11 = this[_parent];
      t11 == null ? null : t11[_removeChildData](this);
      this[_parent] = null;
      this[_updateManager](null);
      this[_debugDisposed] = true;
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "RestorationBucket")) + "(restorationId: " + dart.str(this.restorationId) + ", owner: " + dart.str(this.debugOwner) + ")";
    }
    [_debugAssertNotDisposed]() {
      if (!dart.test(dart.fn(() => {
        if (dart.test(this[_debugDisposed])) {
          dart.throw(assertions.FlutterError.new("A " + dart.str(this[$runtimeType]) + " was used after being disposed.\n" + "Once you have called dispose() on a " + dart.str(this[$runtimeType]) + ", it can no longer be used."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L7, 931, 12, "() {\n      if (_debugDisposed) {\n        throw FlutterError(\n            'A $runtimeType was used after being disposed.\\n'\n            'Once you have called dispose() on a $runtimeType, it can no longer be used.'\n        );\n      }\n      return true;\n    }()");
      return true;
    }
  };
  (restoration.RestorationBucket.empty = function(opts) {
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    if (restorationId == null) dart.nullFailed(L7, 450, 21, "restorationId");
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[_debugOwner] = null;
    this[_claimedChildren] = new (IdentityMapOfString$RestorationBucket()).new();
    this[_childrenToAdd] = new (IdentityMapOfString$ListOfRestorationBucket()).new();
    this[_needsSerialization] = false;
    this[_debugDisposed] = false;
    this[_parent] = null;
    this[_manager] = null;
    if (!(restorationId != null)) dart.assertFailed(null, L7, 452, 15, "restorationId != null");
    this[_restorationId] = restorationId;
    this[_rawData] = new (IdentityMapOfString$dynamic()).new();
    if (!dart.test(dart.fn(() => {
      this[_debugOwner] = debugOwner;
      return true;
    }, VoidTobool())())) dart.assertFailed(null, L7, 455, 12, "() {\n      _debugOwner = debugOwner;\n      return true;\n    }()");
  }).prototype = restoration.RestorationBucket.prototype;
  (restoration.RestorationBucket.root = function(opts) {
    let t10;
    let manager = opts && 'manager' in opts ? opts.manager : null;
    if (manager == null) dart.nullFailed(L7, 485, 33, "manager");
    let rawData = opts && 'rawData' in opts ? opts.rawData : null;
    this[_debugOwner] = null;
    this[_claimedChildren] = new (IdentityMapOfString$RestorationBucket()).new();
    this[_childrenToAdd] = new (IdentityMapOfString$ListOfRestorationBucket()).new();
    this[_needsSerialization] = false;
    this[_debugDisposed] = false;
    this[_parent] = null;
    if (!(manager != null)) dart.assertFailed(null, L7, 487, 15, "manager != null");
    this[_manager] = manager;
    this[_rawData] = (t10 = rawData, t10 == null ? new _js_helper.LinkedMap.new() : t10);
    this[_restorationId] = "root";
    if (!dart.test(dart.fn(() => {
      this[_debugOwner] = manager;
      return true;
    }, VoidTobool())())) dart.assertFailed(null, L7, 491, 12, "() {\n      _debugOwner = manager;\n      return true;\n    }()");
  }).prototype = restoration.RestorationBucket.prototype;
  (restoration.RestorationBucket.child = function(opts) {
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    if (restorationId == null) dart.nullFailed(L7, 508, 21, "restorationId");
    let parent = opts && 'parent' in opts ? opts.parent : null;
    if (parent == null) dart.nullFailed(L7, 509, 32, "parent");
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[_debugOwner] = null;
    this[_claimedChildren] = new (IdentityMapOfString$RestorationBucket()).new();
    this[_childrenToAdd] = new (IdentityMapOfString$ListOfRestorationBucket()).new();
    this[_needsSerialization] = false;
    this[_debugDisposed] = false;
    if (!(restorationId != null)) dart.assertFailed(null, L7, 511, 15, "restorationId != null");
    if (!(parent != null)) dart.assertFailed(null, L7, 512, 15, "parent != null");
    if (!(parent[_rawChildren][$_get](restorationId) != null)) dart.assertFailed(null, L7, 513, 15, "parent._rawChildren[restorationId] != null");
    this[_manager] = parent[_manager];
    this[_parent] = parent;
    this[_rawData] = core.Map.as(parent[_rawChildren][$_get](restorationId));
    this[_restorationId] = restorationId;
    if (!dart.test(dart.fn(() => {
      this[_debugOwner] = debugOwner;
      return true;
    }, VoidTobool())())) dart.assertFailed(null, L7, 518, 12, "() {\n      _debugOwner = debugOwner;\n      return true;\n    }()");
  }).prototype = restoration.RestorationBucket.prototype;
  dart.addTypeTests(restoration.RestorationBucket);
  dart.addTypeCaches(restoration.RestorationBucket);
  dart.setMethodSignature(restoration.RestorationBucket, () => ({
    __proto__: dart.getMethods(restoration.RestorationBucket.__proto__),
    read: dart.gFnType(P => [dart.nullable(P), [core.String]], P => [dart.nullable(core.Object)]),
    write: dart.gFnType(P => [dart.void, [core.String, P]], P => [dart.nullable(core.Object)]),
    remove: dart.gFnType(P => [dart.nullable(P), [core.String]], P => [dart.nullable(core.Object)]),
    contains: dart.fnType(core.bool, [core.String]),
    claimChild: dart.fnType(restoration.RestorationBucket, [core.String], {}, {debugOwner: dart.nullable(core.Object)}),
    adoptChild: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_dropChild]: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_markNeedsSerialization]: dart.fnType(dart.void, []),
    finalize: dart.fnType(dart.void, []),
    [_recursivelyUpdateManager]: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_updateManager]: dart.fnType(dart.void, [dart.nullable(restoration.RestorationManager)]),
    [_debugAssertIntegrity]: dart.fnType(core.bool, []),
    [_removeChildData]: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_addChildData]: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_finalizeAddChildData]: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_visitChildren]: dart.fnType(dart.void, [dart.fnType(dart.void, [restoration.RestorationBucket])], {concurrentModification: core.bool}, {}),
    rename: dart.fnType(dart.void, [core.String]),
    dispose: dart.fnType(dart.void, []),
    [_debugAssertNotDisposed]: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(restoration.RestorationBucket, () => ({
    __proto__: dart.getGetters(restoration.RestorationBucket.__proto__),
    debugOwner: dart.nullable(core.Object),
    isReplacing: core.bool,
    restorationId: core.String,
    [_rawChildren]: core.Map,
    [_rawValues]: core.Map
  }));
  dart.setLibraryUri(restoration.RestorationBucket, L8);
  dart.setFieldSignature(restoration.RestorationBucket, () => ({
    __proto__: dart.getFields(restoration.RestorationBucket.__proto__),
    [_rawData]: dart.finalFieldType(core.Map),
    [_debugOwner]: dart.fieldType(dart.nullable(core.Object)),
    [_manager]: dart.fieldType(dart.nullable(restoration.RestorationManager)),
    [_parent]: dart.fieldType(dart.nullable(restoration.RestorationBucket)),
    [_restorationId]: dart.fieldType(core.String),
    [_claimedChildren]: dart.finalFieldType(core.Map$(core.String, restoration.RestorationBucket)),
    [_childrenToAdd]: dart.finalFieldType(core.Map$(core.String, core.List$(restoration.RestorationBucket))),
    [_needsSerialization]: dart.fieldType(core.bool),
    [_debugDisposed]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(restoration.RestorationBucket, ['toString']);
  dart.defineLazy(restoration.RestorationBucket, {
    /*restoration.RestorationBucket._childrenMapKey*/get _childrenMapKey() {
      return "c";
    },
    /*restoration.RestorationBucket._valuesMapKey*/get _valuesMapKey() {
      return "v";
    }
  }, false);
  restoration.debugIsSerializableForRestoration = function debugIsSerializableForRestoration(object) {
    let result = false;
    if (!dart.test(dart.fn(() => {
      try {
        (C10 || CT.C10).encodeMessage(object);
        result = true;
      } catch (e) {
        let _ = dart.getThrown(e);
        if (core.Object.is(_)) {
          result = false;
        } else
          throw e;
      }
      return true;
    }, VoidTobool())())) dart.assertFailed(null, L7, 952, 10, "() {\n    try {\n      const StandardMessageCodec().encodeMessage(object);\n      result = true;\n    } catch (_) {\n      result = false;\n    }\n    return true;\n  }()");
    return result;
  };
  var __ServicesBinding__defaultBinaryMessenger = dart.privateName(binding$0, "_#ServicesBinding#_defaultBinaryMessenger");
  var __ServicesBinding__defaultBinaryMessenger_isSet = dart.privateName(binding$0, "_#ServicesBinding#_defaultBinaryMessenger#isSet");
  var __ServicesBinding__restorationManager = dart.privateName(binding$0, "_#ServicesBinding#_restorationManager");
  var __ServicesBinding__restorationManager_isSet = dart.privateName(binding$0, "_#ServicesBinding#_restorationManager#isSet");
  var _defaultBinaryMessenger = dart.privateName(binding$0, "_defaultBinaryMessenger");
  var _restorationManager = dart.privateName(binding$0, "_restorationManager");
  var _handleLifecycleMessage = dart.privateName(binding$0, "_handleLifecycleMessage");
  var C20;
  var _addLicenses = dart.privateName(binding$0, "_addLicenses");
  var C21;
  var C22;
  binding$0.ServicesBinding = class ServicesBinding extends core.Object {
    static get instance() {
      return binding$0.ServicesBinding._instance;
    }
    static _parseLicenses(rawLicenses) {
      if (rawLicenses == null) dart.nullFailed(L9, 119, 51, "rawLicenses");
      let _licenseSeparator = "\n" + "-"[$times](80) + "\n";
      let result = JSArrayOfLicenseEntry().of([]);
      let licenses = rawLicenses[$split](_licenseSeparator);
      for (let license of licenses) {
        let split = license[$indexOf]("\n\n");
        if (split >= 0) {
          result[$add](new licenses$.LicenseEntryWithLineBreaks.new(license[$substring](0, split)[$split]("\n"), license[$substring](split + 2)));
        } else {
          result[$add](new licenses$.LicenseEntryWithLineBreaks.new(C22 || CT.C22, license));
        }
      }
      return result;
    }
    static _parseAppLifecycleMessage(message) {
      if (message == null) dart.nullFailed(L9, 196, 62, "message");
      switch (message) {
        case "AppLifecycleState.paused":
        {
          return ui.AppLifecycleState.paused;
        }
        case "AppLifecycleState.resumed":
        {
          return ui.AppLifecycleState.resumed;
        }
        case "AppLifecycleState.inactive":
        {
          return ui.AppLifecycleState.inactive;
        }
        case "AppLifecycleState.detached":
        {
          return ui.AppLifecycleState.detached;
        }
      }
      return null;
    }
  };
  binding$0.ServicesBinding[dart.mixinOn] = _ServicesBinding$36BindingBase$36SchedulerBinding => class ServicesBinding extends _ServicesBinding$36BindingBase$36SchedulerBinding {
    initInstances() {
      super.initInstances();
      binding$0.ServicesBinding._instance = this;
      this[_defaultBinaryMessenger] = this.createBinaryMessenger();
      this[_restorationManager] = this.createRestorationManager();
      this.window.onPlatformMessage = dart.bind(this.defaultBinaryMessenger, 'handlePlatformMessage');
      this.initLicenses();
      system_channels.SystemChannels.system.setMessageHandler(dart.fn(message => this.handleSystemMessage(core.Object.as(message)), dynamicToFutureOfvoid()));
      system_channels.SystemChannels.lifecycle.setMessageHandler(dart.bind(this, _handleLifecycleMessage));
      this.readInitialLifecycleStateFromNativeWindow();
    }
    get defaultBinaryMessenger() {
      return this[_defaultBinaryMessenger];
    }
    get [_defaultBinaryMessenger]() {
      let t12;
      return dart.test(this[__ServicesBinding__defaultBinaryMessenger_isSet]) ? (t12 = this[__ServicesBinding__defaultBinaryMessenger], t12) : dart.throw(new _internal.LateError.fieldNI("_defaultBinaryMessenger"));
    }
    set [_defaultBinaryMessenger](t12) {
      if (t12 == null) dart.nullFailed(L9, 48, 24, "null");
      this[__ServicesBinding__defaultBinaryMessenger_isSet] = true;
      this[__ServicesBinding__defaultBinaryMessenger] = t12;
    }
    createBinaryMessenger() {
      return C20 || CT.C20;
    }
    handleMemoryPressure() {
    }
    handleSystemMessage(systemMessage) {
      if (systemMessage == null) dart.nullFailed(L9, 73, 43, "systemMessage");
      return async.async(dart.void, (function* handleSystemMessage() {
        let message = MapOfString$dynamic().as(systemMessage);
        let type = core.String.as(message[$_get]("type"));
        switch (type) {
          case "memoryPressure":
          {
            this.handleMemoryPressure();
            break;
          }
        }
        return;
      }).bind(this));
    }
    initLicenses() {
      licenses$.LicenseRegistry.addLicense(dart.bind(this, _addLicenses));
    }
    [_addLicenses]() {
      return new (_AsyncStarImplOfLicenseEntry()).new((function* _addLicenses(stream) {
        let rawLicenses = CompleterOfString().new();
        this.scheduleTask(FutureOfNull(), dart.fn(() => async.async(core.Null, function*() {
          rawLicenses.complete(yield asset_bundle.rootBundle.loadString("NOTICES", {cache: false}));
        }), VoidToFutureOfNull()), priority.Priority.animation);
        yield rawLicenses.future;
        let parsedLicenses = CompleterOfListOfLicenseEntry().new();
        this.scheduleTask(FutureOfNull(), dart.fn(() => async.async(core.Null, function*() {
          parsedLicenses.complete(isolates.compute(core.String, ListOfLicenseEntry(), C21 || CT.C21, yield rawLicenses.future, {debugLabel: "parseLicenses"}));
        }), VoidToFutureOfNull()), priority.Priority.animation);
        yield parsedLicenses.future;
        if (stream.addStream(StreamOfLicenseEntry().fromIterable(yield parsedLicenses.future))) return;
        yield;
      }).bind(this)).stream;
    }
    initServiceExtensions() {
      super.initServiceExtensions();
      if (!dart.test(dart.fn(() => {
        this.registerStringServiceExtension({name: "evict", getter: dart.fn(() => async.async(core.String, function*() {
            return "";
          }), VoidToFutureOfString()), setter: dart.fn(value => {
            if (value == null) dart.nullFailed(L9, 149, 25, "value");
            return async.async(dart.void, (function*() {
              this.evict(value);
            }).bind(this));
          }, StringToFutureOfvoid())});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L9, 141, 12, "() {\n      registerStringServiceExtension(\n        // ext.flutter.evict value=foo.png will cause foo.png to be evicted from\n        // the rootBundle cache and cause the entire image cache to be cleared.\n        // This is used by hot reload mode to clear out the cache of resources\n        // that have changed.\n        name: 'evict',\n        getter: () async => '',\n        setter: (String value) async {\n          evict(value);\n        },\n      );\n      return true;\n    }()");
    }
    evict(asset) {
      if (asset == null) dart.nullFailed(L9, 163, 21, "asset");
      asset_bundle.rootBundle.evict(asset);
    }
    readInitialLifecycleStateFromNativeWindow() {
      if (this.lifecycleState != null) {
        return;
      }
      let state = binding$0.ServicesBinding._parseAppLifecycleMessage(this.window.initialLifecycleState);
      if (state != null) {
        this.handleAppLifecycleStateChanged(state);
      }
    }
    [_handleLifecycleMessage](message) {
      return async.async(StringN(), (function* _handleLifecycleMessage() {
        this.handleAppLifecycleStateChanged(dart.nullCheck(binding$0.ServicesBinding._parseAppLifecycleMessage(dart.nullCheck(message))));
        return null;
      }).bind(this));
    }
    get restorationManager() {
      return this[_restorationManager];
    }
    get [_restorationManager]() {
      let t13;
      return dart.test(this[__ServicesBinding__restorationManager_isSet]) ? (t13 = this[__ServicesBinding__restorationManager], t13) : dart.throw(new _internal.LateError.fieldNI("_restorationManager"));
    }
    set [_restorationManager](t13) {
      if (t13 == null) dart.nullFailed(L9, 220, 27, "null");
      this[__ServicesBinding__restorationManager_isSet] = true;
      this[__ServicesBinding__restorationManager] = t13;
    }
    createRestorationManager() {
      return new restoration.RestorationManager.new();
    }
  };
  (binding$0.ServicesBinding[dart.mixinNew] = function() {
    this[__ServicesBinding__defaultBinaryMessenger] = null;
    this[__ServicesBinding__defaultBinaryMessenger_isSet] = false;
    this[__ServicesBinding__restorationManager] = null;
    this[__ServicesBinding__restorationManager_isSet] = false;
  }).prototype = binding$0.ServicesBinding.prototype;
  dart.addTypeTests(binding$0.ServicesBinding);
  dart.addTypeCaches(binding$0.ServicesBinding);
  binding$0.ServicesBinding[dart.implements] = () => [binding.SchedulerBinding, binding$.BindingBase];
  dart.setMethodSignature(binding$0.ServicesBinding, () => ({
    __proto__: dart.getMethods(binding$0.ServicesBinding.__proto__),
    initInstances: dart.fnType(dart.void, []),
    createBinaryMessenger: dart.fnType(binary_messenger.BinaryMessenger, []),
    handleMemoryPressure: dart.fnType(dart.void, []),
    handleSystemMessage: dart.fnType(async.Future$(dart.void), [core.Object]),
    initLicenses: dart.fnType(dart.void, []),
    [_addLicenses]: dart.fnType(async.Stream$(licenses$.LicenseEntry), []),
    initServiceExtensions: dart.fnType(dart.void, []),
    evict: dart.fnType(dart.void, [core.String]),
    readInitialLifecycleStateFromNativeWindow: dart.fnType(dart.void, []),
    [_handleLifecycleMessage]: dart.fnType(async.Future$(dart.nullable(core.String)), [dart.nullable(core.String)]),
    createRestorationManager: dart.fnType(restoration.RestorationManager, [])
  }));
  dart.setGetterSignature(binding$0.ServicesBinding, () => ({
    __proto__: dart.getGetters(binding$0.ServicesBinding.__proto__),
    defaultBinaryMessenger: binary_messenger.BinaryMessenger,
    [_defaultBinaryMessenger]: binary_messenger.BinaryMessenger,
    restorationManager: restoration.RestorationManager,
    [_restorationManager]: restoration.RestorationManager
  }));
  dart.setSetterSignature(binding$0.ServicesBinding, () => ({
    __proto__: dart.getSetters(binding$0.ServicesBinding.__proto__),
    [_defaultBinaryMessenger]: binary_messenger.BinaryMessenger,
    [_restorationManager]: restoration.RestorationManager
  }));
  dart.setLibraryUri(binding$0.ServicesBinding, L10);
  dart.setFieldSignature(binding$0.ServicesBinding, () => ({
    __proto__: dart.getFields(binding$0.ServicesBinding.__proto__),
    [__ServicesBinding__defaultBinaryMessenger]: dart.fieldType(dart.nullable(binary_messenger.BinaryMessenger)),
    [__ServicesBinding__defaultBinaryMessenger_isSet]: dart.fieldType(core.bool),
    [__ServicesBinding__restorationManager]: dart.fieldType(dart.nullable(restoration.RestorationManager)),
    [__ServicesBinding__restorationManager_isSet]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(binding$0.ServicesBinding, {
    /*binding$0.ServicesBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  }, false);
  var _sendPlatformMessage = dart.privateName(binding$0, "_sendPlatformMessage");
  binary_messenger.BinaryMessenger = class BinaryMessenger extends core.Object {};
  (binary_messenger.BinaryMessenger.new = function() {
    ;
  }).prototype = binary_messenger.BinaryMessenger.prototype;
  dart.addTypeTests(binary_messenger.BinaryMessenger);
  dart.addTypeCaches(binary_messenger.BinaryMessenger);
  dart.setLibraryUri(binary_messenger.BinaryMessenger, L11);
  binding$0._DefaultBinaryMessenger = class _DefaultBinaryMessenger extends binary_messenger.BinaryMessenger {
    [_sendPlatformMessage](channel, message) {
      if (channel == null) dart.nullFailed(L9, 250, 49, "channel");
      let completer = CompleterOfByteDataN().new();
      ui.PlatformDispatcher.instance.sendPlatformMessage(channel, message, dart.fn(reply => {
        try {
          completer.complete(reply);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("during a platform message response callback")}));
          } else
            throw e;
        }
      }, ByteDataNTovoid()));
      return completer.future;
    }
    handlePlatformMessage(channel, data, callback) {
      if (channel == null) dart.nullFailed(L9, 276, 12, "channel");
      return async.async(dart.void, function* handlePlatformMessage() {
        let response = null;
        try {
          let handler = binding$0._DefaultBinaryMessenger._handlers[$_get](channel);
          if (handler != null) {
            response = (yield handler(data));
          } else {
            ui.channelBuffers.push(channel, data, dart.nullCheck(callback));
            callback = null;
          }
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("during a platform message callback")}));
          } else
            throw e;
        } finally {
          if (callback != null) {
            callback(response);
          }
        }
      });
    }
    send(channel, message) {
      if (channel == null) dart.nullFailed(L9, 304, 34, "channel");
      let handler = binding$0._DefaultBinaryMessenger._mockHandlers[$_get](channel);
      if (handler != null) return handler(message);
      return this[_sendPlatformMessage](channel, message);
    }
    setMessageHandler(channel, handler) {
      if (channel == null) dart.nullFailed(L9, 312, 33, "channel");
      if (handler == null) {
        binding$0._DefaultBinaryMessenger._handlers[$remove](channel);
      } else {
        binding$0._DefaultBinaryMessenger._handlers[$_set](channel, handler);
        ui.channelBuffers.drain(channel, dart.fn((data, callback) => {
          if (callback == null) dart.nullFailed(L9, 317, 92, "callback");
          return async.async(dart.void, (function*() {
            yield this.handlePlatformMessage(channel, data, callback);
          }).bind(this));
        }, ByteDataNAndFnToFutureOfvoid()));
      }
    }
    checkMessageHandler(channel, handler) {
      if (channel == null) dart.nullFailed(L9, 324, 35, "channel");
      return dart.equals(binding$0._DefaultBinaryMessenger._handlers[$_get](channel), handler);
    }
    setMockMessageHandler(channel, handler) {
      if (channel == null) dart.nullFailed(L9, 327, 37, "channel");
      if (handler == null)
        binding$0._DefaultBinaryMessenger._mockHandlers[$remove](channel);
      else
        binding$0._DefaultBinaryMessenger._mockHandlers[$_set](channel, handler);
    }
    checkMockMessageHandler(channel, handler) {
      if (channel == null) dart.nullFailed(L9, 335, 39, "channel");
      return dart.equals(binding$0._DefaultBinaryMessenger._mockHandlers[$_get](channel), handler);
    }
  };
  (binding$0._DefaultBinaryMessenger.__ = function() {
    binding$0._DefaultBinaryMessenger.__proto__.new.call(this);
    ;
  }).prototype = binding$0._DefaultBinaryMessenger.prototype;
  dart.addTypeTests(binding$0._DefaultBinaryMessenger);
  dart.addTypeCaches(binding$0._DefaultBinaryMessenger);
  dart.setMethodSignature(binding$0._DefaultBinaryMessenger, () => ({
    __proto__: dart.getMethods(binding$0._DefaultBinaryMessenger.__proto__),
    [_sendPlatformMessage]: dart.fnType(async.Future$(dart.nullable(typed_data.ByteData)), [core.String, dart.nullable(typed_data.ByteData)]),
    handlePlatformMessage: dart.fnType(async.Future$(dart.void), [core.String, dart.nullable(typed_data.ByteData), dart.nullable(dart.fnType(dart.void, [dart.nullable(typed_data.ByteData)]))]),
    send: dart.fnType(dart.nullable(async.Future$(dart.nullable(typed_data.ByteData))), [core.String, dart.nullable(typed_data.ByteData)]),
    setMessageHandler: dart.fnType(dart.void, [core.String, dart.nullable(dart.fnType(dart.nullable(async.Future$(dart.nullable(typed_data.ByteData))), [dart.nullable(typed_data.ByteData)]))]),
    checkMessageHandler: dart.fnType(core.bool, [core.String, dart.nullable(dart.fnType(dart.nullable(async.Future$(dart.nullable(typed_data.ByteData))), [dart.nullable(typed_data.ByteData)]))]),
    setMockMessageHandler: dart.fnType(dart.void, [core.String, dart.nullable(dart.fnType(dart.nullable(async.Future$(dart.nullable(typed_data.ByteData))), [dart.nullable(typed_data.ByteData)]))]),
    checkMockMessageHandler: dart.fnType(core.bool, [core.String, dart.nullable(dart.fnType(dart.nullable(async.Future$(dart.nullable(typed_data.ByteData))), [dart.nullable(typed_data.ByteData)]))])
  }));
  dart.setLibraryUri(binding$0._DefaultBinaryMessenger, L10);
  dart.defineLazy(binding$0._DefaultBinaryMessenger, {
    /*binding$0._DefaultBinaryMessenger._handlers*/get _handlers() {
      return new (IdentityMapOfString$ByteDataNToFutureNOfByteDataN()).new();
    },
    /*binding$0._DefaultBinaryMessenger._mockHandlers*/get _mockHandlers() {
      return new (IdentityMapOfString$ByteDataNToFutureNOfByteDataN()).new();
    }
  }, false);
  dart.copyProperties(binary_messenger, {
    get defaultBinaryMessenger() {
      if (!dart.test(dart.fn(() => {
        if (binding$0.ServicesBinding.instance == null) {
          dart.throw(assertions.FlutterError.new("ServicesBinding.defaultBinaryMessenger was accessed before the " + "binding was initialized.\n" + "If you're running an application and need to access the binary " + "messenger before `runApp()` has been called (for example, during " + "plugin initialization), then you need to explicitly call the " + "`WidgetsFlutterBinding.ensureInitialized()` first.\n" + "If you're running a test, you can call the " + "`TestWidgetsFlutterBinding.ensureInitialized()` as the first line in " + "your test's `main()` method to initialize the binding."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L12, 95, 10, "() {\n    if (ServicesBinding.instance == null) {\n      throw FlutterError(\n        'ServicesBinding.defaultBinaryMessenger was accessed before the '\n        'binding was initialized.\\n'\n        \"If you're running an application and need to access the binary \"\n        'messenger before `runApp()` has been called (for example, during '\n        'plugin initialization), then you need to explicitly call the '\n        '`WidgetsFlutterBinding.ensureInitialized()` first.\\n'\n        \"If you're running a test, you can call the \"\n        '`TestWidgetsFlutterBinding.ensureInitialized()` as the first line in '\n        \"your test's `main()` method to initialize the binding.\"\n      );\n    }\n    return true;\n  }()");
      return dart.nullCheck(binding$0.ServicesBinding.instance).defaultBinaryMessenger;
    }
  });
  var C23;
  asset_bundle.AssetBundle = class AssetBundle extends core.Object {
    loadString(key, opts) {
      if (key == null) dart.nullFailed(L13, 67, 36, "key");
      let cache = opts && 'cache' in opts ? opts.cache : true;
      if (cache == null) dart.nullFailed(L13, 67, 48, "cache");
      return async.async(core.String, (function* loadString() {
        let data = (yield this.load(key));
        if (data == null) dart.throw(assertions.FlutterError.new("Unable to load asset: " + dart.str(key)));
        if (dart.notNull(data[$lengthInBytes]) < 50 * 1024) {
          return convert.utf8.decode(data[$buffer][$asUint8List]());
        }
        return isolates.compute(typed_data.ByteData, core.String, C23 || CT.C23, data, {debugLabel: "UTF8 decode for \"" + dart.str(key) + "\""});
      }).bind(this));
    }
    static _utf8decode(data) {
      if (data == null) dart.nullFailed(L13, 84, 38, "data");
      return convert.utf8.decode(data[$buffer][$asUint8List]());
    }
    evict(key) {
      if (key == null) dart.nullFailed(L13, 98, 21, "key");
    }
    toString() {
      return dart.str(diagnostics.describeIdentity(this)) + "()";
    }
  };
  (asset_bundle.AssetBundle.new = function() {
    ;
  }).prototype = asset_bundle.AssetBundle.prototype;
  dart.addTypeTests(asset_bundle.AssetBundle);
  dart.addTypeCaches(asset_bundle.AssetBundle);
  dart.setMethodSignature(asset_bundle.AssetBundle, () => ({
    __proto__: dart.getMethods(asset_bundle.AssetBundle.__proto__),
    loadString: dart.fnType(async.Future$(core.String), [core.String], {cache: core.bool}, {}),
    evict: dart.fnType(dart.void, [core.String])
  }));
  dart.setLibraryUri(asset_bundle.AssetBundle, L14);
  dart.defineExtensionMethods(asset_bundle.AssetBundle, ['toString']);
  var _baseUrl = dart.privateName(asset_bundle, "_baseUrl");
  var _httpClient = dart.privateName(asset_bundle, "_httpClient");
  var _urlFromKey = dart.privateName(asset_bundle, "_urlFromKey");
  asset_bundle.NetworkAssetBundle = class NetworkAssetBundle extends asset_bundle.AssetBundle {
    [_urlFromKey](key) {
      if (key == null) dart.nullFailed(L13, 118, 26, "key");
      return this[_baseUrl].resolve(key);
    }
    load(key) {
      if (key == null) dart.nullFailed(L13, 121, 32, "key");
      return async.async(typed_data.ByteData, (function* load() {
        let request = (yield this[_httpClient].getUrl(this[_urlFromKey](key)));
        let response = (yield request.close());
        if (response.statusCode !== 200) dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Unable to load asset: " + dart.str(key)), new diagnostics.IntProperty.new("HTTP status code", response.statusCode)])));
        let bytes = (yield consolidate_response.consolidateHttpClientResponseBytes(response));
        return bytes[$buffer][$asByteData]();
      }).bind(this));
    }
    loadStructuredData(T, key, parser) {
      if (key == null) dart.nullFailed(L13, 139, 42, "key");
      if (parser == null) dart.nullFailed(L13, 139, 57, "parser");
      return async.async(T, (function* loadStructuredData() {
        if (!(key != null)) dart.assertFailed(null, L13, 140, 12, "key != null");
        if (!(parser != null)) dart.assertFailed(null, L13, 141, 12, "parser != null");
        return parser(yield this.loadString(key));
      }).bind(this));
    }
    toString() {
      return dart.str(diagnostics.describeIdentity(this)) + "(" + dart.str(this[_baseUrl]) + ")";
    }
  };
  (asset_bundle.NetworkAssetBundle.new = function(baseUrl) {
    if (baseUrl == null) dart.nullFailed(L13, 111, 26, "baseUrl");
    this[_baseUrl] = baseUrl;
    this[_httpClient] = _http.HttpClient.new();
    ;
  }).prototype = asset_bundle.NetworkAssetBundle.prototype;
  dart.addTypeTests(asset_bundle.NetworkAssetBundle);
  dart.addTypeCaches(asset_bundle.NetworkAssetBundle);
  dart.setMethodSignature(asset_bundle.NetworkAssetBundle, () => ({
    __proto__: dart.getMethods(asset_bundle.NetworkAssetBundle.__proto__),
    [_urlFromKey]: dart.fnType(core.Uri, [core.String]),
    load: dart.fnType(async.Future$(typed_data.ByteData), [core.String]),
    loadStructuredData: dart.gFnType(T => [async.Future$(T), [core.String, dart.fnType(async.Future$(T), [core.String])]], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(asset_bundle.NetworkAssetBundle, L14);
  dart.setFieldSignature(asset_bundle.NetworkAssetBundle, () => ({
    __proto__: dart.getFields(asset_bundle.NetworkAssetBundle.__proto__),
    [_baseUrl]: dart.finalFieldType(core.Uri),
    [_httpClient]: dart.finalFieldType(_http.HttpClient)
  }));
  dart.defineExtensionMethods(asset_bundle.NetworkAssetBundle, ['toString']);
  var _stringCache = dart.privateName(asset_bundle, "_stringCache");
  var _structuredDataCache = dart.privateName(asset_bundle, "_structuredDataCache");
  asset_bundle.CachingAssetBundle = class CachingAssetBundle extends asset_bundle.AssetBundle {
    loadString(key, opts) {
      if (key == null) dart.nullFailed(L13, 166, 36, "key");
      let cache = opts && 'cache' in opts ? opts.cache : true;
      if (cache == null) dart.nullFailed(L13, 166, 48, "cache");
      if (dart.test(cache)) return this[_stringCache][$putIfAbsent](key, dart.fn(() => super.loadString(key), VoidToFutureOfString()));
      return super.loadString(key);
    }
    loadStructuredData(T, key, parser) {
      if (key == null) dart.nullFailed(L13, 183, 42, "key");
      if (parser == null) dart.nullFailed(L13, 183, 57, "parser");
      if (!(key != null)) dart.assertFailed(null, L13, 184, 12, "key != null");
      if (!(parser != null)) dart.assertFailed(null, L13, 185, 12, "parser != null");
      if (dart.test(this[_structuredDataCache][$containsKey](key))) return async.Future$(T).as(dart.nullCheck(this[_structuredDataCache][$_get](key)));
      let completer = null;
      let result = null;
      this.loadString(key, {cache: false}).then(T, parser).then(dart.void, dart.fn(value => {
        result = new (synchronous_future.SynchronousFuture$(T)).new(value);
        this[_structuredDataCache][$_set](key, dart.nullCheck(result));
        if (completer != null) {
          completer.complete(value);
        }
      }, dart.fnType(core.Null, [T])));
      if (result != null) {
        return dart.nullCheck(result);
      }
      completer = async.Completer$(T).new();
      this[_structuredDataCache][$_set](key, completer.future);
      return completer.future;
    }
    evict(key) {
      if (key == null) dart.nullFailed(L13, 213, 21, "key");
      this[_stringCache][$remove](key);
      this[_structuredDataCache][$remove](key);
    }
  };
  (asset_bundle.CachingAssetBundle.new = function() {
    this[_stringCache] = new (IdentityMapOfString$FutureOfString()).new();
    this[_structuredDataCache] = new (IdentityMapOfString$Future()).new();
    ;
  }).prototype = asset_bundle.CachingAssetBundle.prototype;
  dart.addTypeTests(asset_bundle.CachingAssetBundle);
  dart.addTypeCaches(asset_bundle.CachingAssetBundle);
  dart.setMethodSignature(asset_bundle.CachingAssetBundle, () => ({
    __proto__: dart.getMethods(asset_bundle.CachingAssetBundle.__proto__),
    loadStructuredData: dart.gFnType(T => [async.Future$(T), [core.String, dart.fnType(async.Future$(T), [core.String])]], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(asset_bundle.CachingAssetBundle, L14);
  dart.setFieldSignature(asset_bundle.CachingAssetBundle, () => ({
    __proto__: dart.getFields(asset_bundle.CachingAssetBundle.__proto__),
    [_stringCache]: dart.finalFieldType(core.Map$(core.String, async.Future$(core.String))),
    [_structuredDataCache]: dart.finalFieldType(core.Map$(core.String, async.Future))
  }));
  asset_bundle.PlatformAssetBundle = class PlatformAssetBundle extends asset_bundle.CachingAssetBundle {
    load(key) {
      if (key == null) dart.nullFailed(L13, 222, 32, "key");
      return async.async(typed_data.ByteData, function* load() {
        let encoded = convert.utf8.encoder.convert(core._Uri.new({path: core.Uri.encodeFull(key)}).path);
        let asset = (yield binary_messenger.defaultBinaryMessenger.send("flutter/assets", encoded[$buffer][$asByteData]()));
        if (asset == null) dart.throw(assertions.FlutterError.new("Unable to load asset: " + dart.str(key)));
        return asset;
      });
    }
  };
  (asset_bundle.PlatformAssetBundle.new = function() {
    asset_bundle.PlatformAssetBundle.__proto__.new.call(this);
    ;
  }).prototype = asset_bundle.PlatformAssetBundle.prototype;
  dart.addTypeTests(asset_bundle.PlatformAssetBundle);
  dart.addTypeCaches(asset_bundle.PlatformAssetBundle);
  dart.setMethodSignature(asset_bundle.PlatformAssetBundle, () => ({
    __proto__: dart.getMethods(asset_bundle.PlatformAssetBundle.__proto__),
    load: dart.fnType(async.Future$(typed_data.ByteData), [core.String])
  }));
  dart.setLibraryUri(asset_bundle.PlatformAssetBundle, L14);
  asset_bundle._initRootBundle = function _initRootBundle() {
    return new asset_bundle.PlatformAssetBundle.new();
  };
  dart.defineLazy(asset_bundle, {
    /*asset_bundle.rootBundle*/get rootBundle() {
      return asset_bundle._initRootBundle();
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/services/system_channels.dart", {
    "package:flutter/src/services/system_channels.dart": system_channels,
    "package:flutter/src/services/message_codecs.dart": message_codecs,
    "package:flutter/src/services/platform_channel.dart": platform_channel,
    "package:flutter/src/services/message_codec.dart": message_codec,
    "package:flutter/src/services/restoration.dart": restoration,
    "package:flutter/src/services/binding.dart": binding$0,
    "package:flutter/src/services/binary_messenger.dart": binary_messenger,
    "package:flutter/src/services/asset_bundle.dart": asset_bundle
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["system_channels.dart","message_codecs.dart","platform_channel.dart","message_codec.dart","restoration.dart","binding.dart","binary_messenger.dart","asset_bundle.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAeoB;;;;;MAmCS,yCAAU;;;MAyDV,uCAAQ;;;MA0ER,wCAAS;;;MAyBM,uCAAQ;;;MAeR,wCAAS;;;MAgBT,qCAAM;;;MAYN,4CAAa;;;MAU5B,6CAAc;;;MAYd,mCAAI;;;MAcJ,0CAAW;;;MA+BX,0CAAW;;;;;kBClSJ;AAAY,oBAAO;;;qBAGnB;AAAY,oBAAO;;;;;EANlC;;;;;;;;;;;kBAkBa;AAC9B,UAAI,AAAQ,OAAD,IAAI,MACb,MAAO;AACT,YAAO,AAAK,AAAQ,8BAAQ,AAAQ,AAAO,OAAR,wBAAoB,AAAQ,OAAD,kBAAgB,AAAQ,OAAD;IACvF;;mBAGgC;AAC9B,UAAI,AAAQ,OAAD,IAAI,MACb,MAAO;AACO,oBAAU,AAAK,AAAQ,6BAAQ,OAAO;AACtD,YAAO,AAAQ,AAAO,QAAR;IAChB;;;;EAfmB;;;;;;;;;;;kBA6Ca;AAC9B,UAAI,AAAQ,OAAD,IAAI,MACb,MAAO;AACT,YAA2B,6BAAc,AAAK,oBAAO,OAAO;IAC9D;kBAGgC;AAC9B,UAAI,AAAQ,OAAD,IAAI,MACb,MAAO,QAAO;AAChB,YAAO,AAAK,qBAAiD,eAAtB,4BAAc,OAAO;IAC9D;;;;EAdwB;;;;;;;;;;;;UAwCa;AACnC,YAGE,gBAH8B,4BAA+B,0CAC7D,UAAU,AAAK,IAAD,SACd,QAAQ,AAAK,IAAD;IAEhB;qBAGsC;AACtB,oBAAmC,4BAAc,UAAU;AACzE,WAAY,YAAR,OAAO,GACT,AAA+D,WAAzD,6BAAgB,AAAwC,4CAAR,OAAO;AACjD,mBAAS,AAAO,OAAA,QAAC;AACjB,uBAAY,AAAO,OAAA,QAAC;AAClC,UAAW,OAAP,MAAM,cACR,MAAO,kCAAW,MAAM,EAAE;AAC0B,MAAtD,WAAM,6BAAgB,AAA+B,mCAAR,OAAO;IACtD;;UAGgC;AAChB,oBAAmC,4BAAc,QAAQ;AACvE,WAAY,aAAR,OAAO,GACT,AAA6D,WAAvD,6BAAgB,AAAsC,0CAAR,OAAO;AAC7D,UAAI,AAAQ,AAAO,OAAR,cAAW,GACpB,MAAO,AAAO,QAAA,QAAC;AACjB,UAAI,AAAQ,AAAO,OAAR,cAAW,KACJ,OAAX,AAAO,OAAA,QAAC,mBACP,AAAO,AAAI,OAAJ,QAAC,MAAM,QAAmB,OAAX,AAAO,OAAA,QAAC,iBACpC,AAIC,WAJK,+CACa,eAAX,AAAO,OAAA,QAAC,cACM,eAAX,AAAO,OAAA,QAAC,cACR,AAAO,OAAA,QAAC;AAErB,UAAI,AAAQ,AAAO,OAAR,cAAW,KACJ,OAAX,AAAO,OAAA,QAAC,mBACP,AAAO,AAAI,OAAJ,QAAC,MAAM,QAAmB,OAAX,AAAO,OAAA,QAAC,oBAC9B,AAAO,AAAI,OAAJ,QAAC,MAAM,QAAmB,OAAX,AAAO,OAAA,QAAC,iBACpC,AAKC,WALK,+CACa,eAAX,AAAO,OAAA,QAAC,cACM,eAAX,AAAO,OAAA,QAAC,cACR,AAAO,OAAA,QAAC,gBACM,eAAX,AAAO,OAAA,QAAC;AAE2B,MAAnD,WAAM,6BAAgB,AAA4B,gCAAR,OAAO;IACnD;0BAGuC;AACrC,YAAgE,gBAAhC,4BAAuB,CAAC,MAAM;IAChE;;UAG+C;;UAAc;UAAiB;AAC5E,YAAO,AAAK,IAAD,IAAI;AACf,YAAgF,gBAAhD,4BAAuB,CAAC,IAAI,EAAE,OAAO,EAAE,OAAO;IAChF;;;;EA3DuB;;;;;;;;;;;;;;;;;;kBA+KS;AAC9B,UAAI,AAAQ,OAAD,IAAI,MACb,MAAO;AACS,mBAAS;AACA,MAA3B,gBAAW,MAAM,EAAE,OAAO;AAC1B,YAAO,AAAO,OAAD;IACf;kBAGgC;AAC9B,UAAI,AAAQ,OAAD,IAAI,MACb,MAAO;AACQ,mBAAS,iCAAW,OAAO;AAC9B,mBAAS,eAAU,MAAM;AACvC,oBAAI,AAAO,MAAD,gBACR,AAAgD;AAClD,YAAO,OAAM;IACf;eAsC4B,QAAgB;UAAhB;AAC1B,UAAI,AAAM,KAAD,IAAI;AACgB,QAA3B,AAAO,MAAD;YACD,KAAU,OAAN,KAAK;AACmC,QAAjD,AAAO,MAAD,oBAAU,KAAK;YAChB,KAAU,OAAN,KAAK;AAMgB,QAA9B,AAAO,MAAD;AACkB,QAAxB,AAAO,MAAD,YAAY,KAAK;YAClB,KAAU,YAAN,KAAK;AACd,YAAI,AAAY,AAAI,CAAf,aAAa,kBAAK,KAAK,KAAU,aAAN,KAAK,KAAI;AACX,UAA5B,AAAO,MAAD;AACgB,UAAtB,AAAO,MAAD,UAAU,KAAK;;AAEO,UAA5B,AAAO,MAAD;AACgB,UAAtB,AAAO,MAAD,UAAU,KAAK;;YAElB,KAAU,OAAN,KAAK;AACe,QAA7B,AAAO,MAAD;AACU,oBAAQ,AAAK,AAAQ,6BAAQ,KAAK;AACnB,QAA/B,eAAU,MAAM,EAAE,AAAM,KAAD;AACG,QAA1B,AAAO,MAAD,cAAc,KAAK;YACpB,KAAU,wBAAN,KAAK;AACkB,QAAhC,AAAO,MAAD;AACyB,QAA/B,eAAU,MAAM,EAAE,AAAM,KAAD;AACG,QAA1B,AAAO,MAAD,cAAc,KAAK;YACpB,KAAU,wBAAN,KAAK;AACkB,QAAhC,AAAO,MAAD;AACyB,QAA/B,eAAU,MAAM,EAAE,AAAM,KAAD;AACG,QAA1B,AAAO,MAAD,cAAc,KAAK;YACpB,KAAU,wBAAN,KAAK;AACkB,QAAhC,AAAO,MAAD;AACyB,QAA/B,eAAU,MAAM,EAAE,AAAM,KAAD;AACG,QAA1B,AAAO,MAAD,cAAc,KAAK;YACpB,KAAU,0BAAN,KAAK;AACoB,QAAlC,AAAO,MAAD;AACyB,QAA/B,eAAU,MAAM,EAAE,AAAM,KAAD;AACK,QAA5B,AAAO,MAAD,gBAAgB,KAAK;YACtB,KAAU,aAAN,KAAK;AACa,QAA3B,AAAO,MAAD;AACyB,QAA/B,eAAU,MAAM,EAAE,AAAM,KAAD;AACvB,iBAAmB,OAAQ,MAAK;AACN,UAAxB,gBAAW,MAAM,EAAE,IAAI;;YAEpB,KAAU,YAAN,KAAK;AACY,QAA1B,AAAO,MAAD;AACyB,QAA/B,eAAU,MAAM,EAAE,AAAM,KAAD;AAIrB,QAHF,AAAM,KAAD,WAAS,SAAS,KAAa;AACX,UAAvB,gBAAW,MAAM,EAAE,GAAG;AACG,UAAzB,gBAAW,MAAM,EAAE,KAAK;;;AAGM,QAAhC,WAAoB,6BAAM,KAAK;;IAEnC;;UAM6B;AAC3B,qBAAK,AAAO,MAAD,gBACT,AAAgD;AACxC,iBAAO,AAAO,MAAD;AACvB,YAAO,sBAAgB,IAAI,EAAE,MAAM;IACrC;oBAO4B,MAAiB;UAAjB;UAAiB;AAC3C,cAAQ,IAAI;;;AAER,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO,AAAO,OAAD;;;;AAEb,gBAAO,AAAO,OAAD;;;;AAEb,gBAAO,AAAO,OAAD;;;;;AAGH,uBAAS,cAAS,MAAM;AAClC,gBAAO,AAAK,AAAQ,8BAAQ,AAAO,MAAD,cAAc,MAAM;;;;AAE5C,uBAAS,cAAS,MAAM;AAClC,gBAAO,AAAO,OAAD,cAAc,MAAM;;;;AAEvB,uBAAS,cAAS,MAAM;AAClC,gBAAO,AAAO,OAAD,cAAc,MAAM;;;;AAEvB,uBAAS,cAAS,MAAM;AAClC,gBAAO,AAAO,OAAD,cAAc,MAAM;;;;AAEvB,uBAAS,cAAS,MAAM;AAClC,gBAAO,AAAO,OAAD,gBAAgB,MAAM;;;;AAEzB,uBAAS,cAAS,MAAM;AACd,uBAAS,iBAAqB,MAAM,EAAE,iBAAgB;AAC1E,mBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,MAAM,GAAE,IAAA,AAAC,CAAA;AACE,YAA7B,AAAM,MAAA,QAAC,CAAC,EAAI,eAAU,MAAM;AAC9B,gBAAO,OAAM;;;;AAEH,uBAAS,cAAS,MAAM;AACN,uBAA2B;AACvD,mBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,MAAM,GAAE,IAAA,AAAC,CAAA;AACkB,YAA7C,AAAM,MAAA,QAAC,eAAU,MAAM,GAAK,eAAU,MAAM;AAC9C,gBAAO,OAAM;;;;AAC0C,UAAhD;;;IAEb;cAO2B,QAAY;UAAZ;UAAY;AACrC,YAAO,AAAE,AAAS,kBAAN,KAAK,KAAU,aAAN,KAAK,KAAI;AAC9B,UAAU,aAAN,KAAK,IAAG;AACY,QAAtB,AAAO,MAAD,UAAU,KAAK;YAChB,KAAU,aAAN,KAAK,KAAI;AACE,QAApB,AAAO,MAAD,UAAU;AACO,QAAvB,AAAO,MAAD,WAAW,KAAK;;AAEF,QAApB,AAAO,MAAD,UAAU;AACO,QAAvB,AAAO,MAAD,WAAW,KAAK;;IAE1B;;UAMwB;AACZ,kBAAQ,AAAO,MAAD;AACxB,cAAQ,KAAK;;;AAET,gBAAO,AAAO,OAAD;;;;AAEb,gBAAO,AAAO,OAAD;;;;AAEb,gBAAO,MAAK;;;IAElB;;;;EA7Q4B;;;;;;;;;;;;;;;;MA4CX,8CAAU;;;MACV,8CAAU;;;MACV,+CAAW;;;MACX,+CAAW;;;MACX,+CAAW;;;MACX,kDAAc;;;MACd,iDAAa;;;MACb,gDAAY;;;MACZ,mDAAe;;;MACf,mDAAe;;;MACf,mDAAe;;;MACf,qDAAiB;;;MACjB,8CAAU;;;MACV,6CAAS;;;;;;;;IAgPC;;;;;;;UAGU;AACjB,mBAAS;AACiB,MAA5C,AAAa,6BAAW,MAAM,EAAE,AAAK,IAAD;AACW,MAA/C,AAAa,6BAAW,MAAM,EAAE,AAAK,IAAD;AACpC,YAAO,AAAO,OAAD;IACf;qBAGsC;AACnB,mBAAS,iCAAqB,eAAV,UAAU;AACjC,mBAAS,AAAa,4BAAU,MAAM;AACtC,uBAAY,AAAa,4BAAU,MAAM;AACvD,UAAW,OAAP,MAAM,2BAAe,AAAO,MAAD;AAC7B,cAAO,kCAAW,MAAM,EAAE;;AAEwB,QAAlD;IACJ;0BAGuC;AACnB,mBAAS;AACT,MAAlB,AAAO,MAAD,UAAU;AACuB,MAAvC,AAAa,6BAAW,MAAM,EAAE,MAAM;AACtC,YAAO,AAAO,OAAD;IACf;;UAG+C;;UAAc;UAAiB;AAC1D,mBAAS;AACT,MAAlB,AAAO,MAAD,UAAU;AACqB,MAArC,AAAa,6BAAW,MAAM,EAAE,IAAI;AACI,MAAxC,AAAa,6BAAW,MAAM,EAAE,OAAO;AACC,MAAxC,AAAa,6BAAW,MAAM,EAAE,OAAO;AACvC,YAAO,AAAO,OAAD;IACf;;UAGgC;AAE9B,UAAI,AAAS,AAAc,QAAf,qBAAkB,GAC5B,AAA6D;AAC9C,mBAAS,iCAAW,QAAQ;AAC7C,UAAI,AAAO,AAAW,MAAZ,gBAAe,GACvB,MAAO,AAAa,6BAAU,MAAM;AACxB,sBAAY,AAAa,4BAAU,MAAM;AACzC,yBAAe,AAAa,4BAAU,MAAM;AAC5C,yBAAe,AAAa,4BAAU,MAAM;AAC5C,sCAAmB,AAAO,MAAD,iBAAgD,eAA/B,AAAa,4BAAU,MAAM,KAAc;AACnG,UAAc,OAAV,SAAS,iBAAe,AAAa,YAAD,IAAI,QAAqB,OAAb,YAAY,4BAAgB,AAAO,MAAD;AAC0C,QAA9H,WAAM,+CAAwB,SAAS,WAAwB,aAAb,YAAY,YAAsB,YAAY,cAAc,eAAe;;AAE9E,QAA/C;IACJ;;;QA1DgC;;;EAA6C;;;;;;;;;;;;;;;;;;;;;;;;;MCpehE;;;;;;MAGS;;;;;;MAIC;;;;;;;;AADgB;4BAAoB;MAAsB;;aAOhE;AAAH;AACZ,gBAAO,AAAM,0BAAc,MAAM,AAAgB,0BAAK,WAAM,AAAM,yBAAc,OAAO;QACzF;;;2BAWsD;AACpD,YAAI,AAAQ,OAAD,IAAI;AACgC,UAA7C,AAAgB,uCAAkB,WAAM;;AAItC,UAFF,AAAgB,uCAAkB,WAAM,QAAW;AACjD,kBAAO,AAAM,0BAAc,MAAM,AAAO,OAAA,CAAC,AAAM,yBAAc,OAAO;UACrE;;MAEL;;2BAa0D;AACxD,YAAI,AAAQ,OAAD,IAAI;AACoC,UAAjD,AAAgB,2CAAsB,WAAM;;AAI1C,UAFF,AAAgB,2CAAsB,WAAM,QAAW;AACrD,kBAAO,AAAM,0BAAc,MAAM,AAAO,OAAA,CAAC,AAAM,yBAAc,OAAO;UACrE;;MAEL;;wCA7D+B,MAAW;UAAX;UAAW;UAA0B;MAArC;MAAW;YAC7B,AAAK,IAAD,IAAI;YACR,AAAM,KAAD,IAAI;MACC,0BAAE,eAAe;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA+F3B;;;;;;IAGK;;;;;;IAMK;;;;;;;;AADgB;0BAAoB;IAAsB;;UAI9C;UAAwB;;UAAmB;AAAnD;AACzB,cAAO,AAAO,MAAD,IAAI;AACD,sBAAS,MAAM,AAAgB,0BAC7C,WACA,AAAM,4BAAiB,iCAAW,MAAM,EAAE;AAE5C,YAAI,AAAO,MAAD,IAAI;AACZ,wBAAI,SAAS;AACX,kBAAO;;AAEkF,UAA3F,WAAM,6CAAuB,AAA6D,iDAAxB,MAAM,8BAAa;;AAEvF,cAAoC,qBAA7B,AAAM,0BAAe,MAAM;MACpC;;oBA2KkC,QAAkB;UAAlB;AAChC,YAAO,wBAAiB,MAAM,cAAa,kBAAkB;IAC/D;wBAW4C,QAAkB;UAAlB;AAAR;;AACb,sBAAS,MAAM,2BAA6B,MAAM,EAAE;AACzE,aAAO,MAAM;4BAAN,OAAQ;MACjB;;0BAWgD,QAAkB;UAAlB;AAAR;;AACT,sBAAS,MAAM,0BAAqC,MAAM,EAAE;AACzF,aAAO,MAAM;4BAAN,OAAQ;MACjB;;yBAgBqE;AAC7B,MAAtC,AAAsB,6CAAC,MAAQ,OAAO;AAMrC,MALD,AAAgB,uCACd,WACA,AAAQ,OAAD,IAAI,OACP,OACA,QAAW,WAAY,0BAAoB,OAAO,EAAE,OAAO;IAEnE;2BAUuE;AAAY,YAA6B,aAA7B,AAAsB,6CAAC,OAAS,OAAO;;6BAoBhD;AAC9B,MAA1C,AAA0B,iDAAC,MAAQ,OAAO;AAIzC,MAHD,AAAgB,2CACd,WACA,AAAQ,OAAD,IAAI,OAAO,OAAO,QAAW,WAAY,0BAAoB,OAAO,EAAE,OAAO;IAExF;+BAU2E;AAAY,YAAiC,aAAjC,AAA0B,iDAAC,OAAS,OAAO;;0BAElF;UAA0B;AAArC;AAClB,mBAAO,AAAM,4BAAiB,OAAO;AACtD;AACE,gBAAO,AAAM,kCAAsB,MAAM,AAAO,OAAA,CAAC,IAAI;;;AACrD;gBAA4B;AAC5B,kBAAO,AAAM,uCACL,AAAE,CAAD,gBACE,AAAE,CAAD,mBACD,AAAE,CAAD;gBAEZ;AACA,kBAAO;gBACP;gBAAO;AACP,kBAAO,AAAM,uCAA0B,kBAAoB,cAAF,CAAC,YAAsB;;;;MAEpF;;;iDA/TyB,MAAY,uBAAsD;QAAlE;QAAY;IAAZ;IAAY;UACxB,AAAK,IAAD,IAAI;UACR,AAAM,KAAD,IAAI;IACC,0BAAE,eAAe;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBAyUN,QAAkB;UAAlB;AAAR;AACxB,cAAa,yBAAiB,MAAM,cAAa,iBAAiB;MACpE;;wBAG4C,QAAkB;UAAlB;AAAR;;AACb,sBAAS,MAAM,6BAA4B,MAAM,EAAE;AACxE,aAAO,MAAM;4BAAN,OAAQ;MACjB;;0BAGgD,QAAkB;UAAlB;AAAR;;AACT,sBAAS,MAAM,4BAAoC,MAAM,EAAE;AACxF,aAAO,MAAM;4BAAN,OAAQ;MACjB;;;;;;yDAlBmC,MAAmB;QAAnB;QAAmB;AAClD,oEAAM,IAAI,EAAE,KAAK;;EAAC;;;;;;;;;;;;;;IAiDT;;;;;;IAGK;;;;;;IAIK;;;;;;;;AADgB;0BAAoB;IAAsB;2BAgBhC;AAC3B,0BAAgB,uCAAc,WAAM;AACzB;;;;;;;;;;;;AAoC7B,MAnCF,iBAAa,4CAA8C;AAYvD,UAXF,AAAgB,uCAAkB,WAAM,QAAW;AACjD,gBAAI,AAAM,KAAD,IAAI;AACO,cAAlB,AAAW;;AAEX;AAC6C,gBAA3C,AAAW,uBAAI,AAAM,0BAAe,KAAK;;oBACb;AAA5B;AACsB,kBAAtB,AAAW,4BAAS,CAAC;;;;;AAGzB,kBAAO;UACR;AACD;AAC6D,YAA3D,MAAM,AAAc,aAAD,yBAAoB,UAAU;;gBAC1C;gBAAW;AAAlB;AAME,cALW,oCAAY,mDACZ,SAAS,SACb,KAAK,WACH,6BACA,oCAAiB,AAAmD,0DAAL;;;;QAG7E,iDAAY;AACkC,UAA7C,AAAgB,uCAAkB,WAAM;AACxC;AAC6D,YAA3D,MAAM,AAAc,aAAD,yBAAoB,UAAU;;gBAC1C;gBAAW;AAAlB;AAME,cALW,oCAAY,mDACZ,SAAS,SACb,KAAK,WACH,6BACA,oCAAiB,AAAsD,6DAAL;;;;QAGhF;AACD,YAAO,AAAW;IACpB;;gDApEwB,MAAY,uBAAsD;QAAlE;QAAY;IAAZ;IAAY;UACvB,AAAK,IAAD,IAAI;UACR,AAAM,KAAD,IAAI;IACC,2BAAE,eAAe;;;;;;;;;;;;;;;;;;;;;MAnZ1B,uCAAsB;YAAG;;;MACzB,2CAA0B;YAAG;;;;;;;;;ICrE7C;;;;;;;;;;;;IAWe;;;;;;IAKC;;;;;;;AAGO,YAA+D,UAA5D,yBAAkB,MAAM,iBAAc,eAAE,eAAM,gBAAG,kBAAS;IAAE;;2CAZ9D,QAAc;QAAd;;IAAc;UACzB,AAAO,MAAD,IAAI;;EAAK;;;;;;;;;;;;;EA6C5B;;;;;;;;;IA4Be;;;;;;IAGC;;;;;;IAGA;;;;;;IAUA;;;;;;;AAGO,YAAA,AAA2D,iCAAvC,aAAI,gBAAG,gBAAO,gBAAG,gBAAO,gBAAG,mBAAU;IAAE;;;QA1BhE;;QACT;QACA;QACA;IAHS;IACT;IACA;IACA;UACK,AAAK,IAAD,IAAI;;EAAK;;;;;;;;;;;;;;;IAyCX;;;;;;;AAGO,YAAA,AAAkC,sCAAT,gBAAO;IAAE;;;IAN1B;;EAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;AClCpC,WAAO,WAAgB,AAAY,4EAAuB;AACK,MAAhD,AAAY,0EAAqB;IAClD;;AAiCE,oBAAI;AACF,cAAO,mDAAsC;;AAE/C,UAAI,AAAmB,4BAAG;AAC4B,QAApD,2BAAqB;AACK,QAA1B;;AAEF,YAAyB,AAAE,gBAApB;IACT;;AAawB;IAAY;;AAGC;AACN,sBAAS,MAAqB,AAAY,kEAAoC;AAC3G,YAAI,AAAmB,4BAAG;AAIxB;;AAEF,cAAO,AAAY,qBAAG;AAC4B,QAAlD,iDAA2C,MAAM;MACnD;;iDAEuE;AAIpE,MAHD,iDACW,AAAe,MAAT,IAAI,kBAA0B,aAAlB,AAAM,MAAA,QAAC,oBAC5B,AAAO,MAAD,IAAI,OAAO,OAAsB,gBAAf,AAAM,MAAA,QAAC;IAEzC;;;UAiBsD;;UAA6B;AACjF,YAAO,AAAQ,OAAD,IAAI;AAClB,YAAe,UAAR,OAAO,KAAI,AAAK,IAAD,IAAI;AAEkB,MAA5C,qBAAkC,UAAnB,uCAAsB,OAAO;AAC5C,oBAAI;AAGA,QAFuB,AAAE,eAAV,wDAA+B;cAAU;AACpC,UAApB,qBAAe;;;AAIM,oBAAU;AAGzB,MAFV,8BAAc,OAAO,IACG,iDAAc,eAAe,6BAAuB,IAAI,MAC1E;AACmB,MAAzB,2BAAqB;AACrB,YAAO,AAAmB,AAAQ,4BAAL,mBAA2B,AAAE,eAApB;AACG,YAAzC;2BAAoB,aAAS;AACJ,MAAzB,2BAAqB;AAErB,uBAAI,mBAAe,OAAO;AACP,QAAjB;AACkB,eAAlB,OAAO;uBAAP,OAAS;;IAEb;;UAcoC;AAClC,YAAO,AAAY,WAAD,IAAI;AACtB,YAAsB,AAAY,oEAChC,OACA,WAAW;IAEf;;UAE0C;AAAZ;AAC5B,gBAAQ,AAAK,IAAD;;;AAE2E,YAAnF,iDAA0D,YAAf,AAAK,IAAD;AAC/C;;;;AAE4F,YAA5F,WAAM,gCAAqF,SAA/D,AAAK,IAAD,WAAQ,oDAAuC;;;MAErF;;6BAEyD;AACvD,UAAI,AAAK,IAAD,IAAI;AACV,cAAO;;AAEM,oBAAU,AAAK,AAAO,IAAR,uBAAmB,AAAK,IAAD,kBAAgB,AAAK,IAAD;AACxE,YAA2D,aAAvB,8BAAc,OAAO;IAC3D;;UAEuD;AACtC,oBAA0D,eAAnB,8BAAc,IAAI;AACxE,YAAO,AAAQ,AAAO,QAAR,wBAAoB,AAAQ,OAAD,kBAAgB,AAAQ,OAAD;IAClE;;UAkBgD;AAC9C,YAAO,AAAO,MAAD,IAAI;AACjB,WAAuB,YAAhB,AAAO,MAAD,YAAa;AAC1B,WAAO,WAAC;AACgC,MAAxC,AAA6B,uCAAI,MAAM;AACvC,qBAAK;AAC2B,QAA9B,gCAA0B;AACyD,QAA1D,AAAE,eAAV,wDAA+B;cAAU;AAAM;;;IAEpE;;UAakD;AAChD,YAAO,AAAO,MAAD,IAAI;AACjB,WAAuB,YAAhB,AAAO,MAAD,YAAa;AAC1B,WAAO,WAAC;AACmC,MAA3C,AAA6B,0CAAO,MAAM;IAC5C;;AAGE,qBAAK;AACH;;AAEF,qBAAO,AAGN;AAFyB,QAAxB,0BAAoB;AACpB,cAAO;;AAEsB,MAA/B,gCAA0B;AAE1B,eAA6B,SAAU;AACpB,QAAjB,AAAO,MAAD;;AAE4B,MAApC,AAA6B;AAC8B,MAA3D,kBAAa,6BAAkC,AAAE,eAAb;AAEpC,qBAAO,AAGN;AAF0B,QAAzB,0BAAoB;AACpB,cAAO;;IAEX;;AAoBE,WAAO,WAAC;AACR,oBAA6B,AAAE,eAAV;AACnB;;AAEgB,MAAlB;AACA,WAAO,WAAC;IACV;;;IAjNmB;IACY;IAC1B,2BAAqB;IAWrB,qBAAe;IAyGf,0BAAoB;IACpB,gCAA0B;IAEF,qCAAkD;AAlL/E;AACgB,IAAd;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+aE,qBAAO;AACP,YAAO;IACT;;;AAcwB,yDAAU;qBAAV,OAAyB;IAAK;;AAQpD,qBAAO;AACP,YAAO;IACT;;AAI0C,YAAkE,aAAlE,AAAS,kCAA6B,cAAwB;IAA4B;;AAE5F,YAAgE,aAAhE,AAAS,kCAA2B,cAAwB;IAA4B;;UAgB9G;AAChB,qBAAO;AACP,YAAO,AAAc,aAAD,IAAI;AACxB,YAAiC,qBAA1B,AAAU,wBAAC,aAAa;IACjC;aAkBqB,eAAiB;UAAjB;AACnB,qBAAO;AACP,YAAO,AAAc,aAAD,IAAI;AACxB,qBAAO,8CAAkC,KAAK;AAC9C,uBAAI,AAAU,wBAAC,aAAa,GAAK,KAAK,gBAAK,AAAW,+BAAY,aAAa;AAC5C,QAAjC,AAAU,wBAAC,aAAa,EAAI,KAAK;AACR,QAAzB;;IAEJ;;UAcoB;AAClB,qBAAO;AACP,YAAO,AAAc,aAAD,IAAI;AACb,wBAAc,AAAW,+BAAY,aAAa;AACpD,mBAA0C,oBAAjC,AAAW,0BAAO,aAAa;AACjD,oBAAI,AAAW;AACiB,QAA9B,AAAS;;AAEX,oBAAI,WAAW;AACY,QAAzB;;AAEF,YAAO,OAAM;IACf;;UAUqB;AACnB,qBAAO;AACP,YAAO,AAAc,aAAD,IAAI;AACxB,YAAO,AAAW,gCAAY,aAAa;IAC7C;;UAgCoC;UAAiC;AACnE,qBAAO;AACP,YAAO,AAAc,aAAD,IAAI;AAgBxB,oBAAI,AAAiB,qCAAY,aAAa,iBAAM,AAAa,iCAAY,aAAa;AAChE,oBAA0B,qDACpC,UAAU,iBACP,aAAa;AAEb,QAAjB,gBAAW,KAAK;AAChB,cAAO,MAAK;;AAId,YAAO,AAAY,AAAgB,0BAAf,aAAa,KAAK;AACd,kBAA0B,wDACjC,aAAa,UACpB,kBACI,UAAU;AAEe,MAAvC,AAAgB,8BAAC,aAAa,EAAI,KAAK;AACvC,YAAO,MAAK;IACd;eAckC;;;AAChC,qBAAO;AACP,YAAO,AAAM,KAAD,IAAI;AAChB,uBAAI,AAAM,KAAD,WAAY;AACmB,cAAtC,AAAM,KAAD;sBAAC,OAAS,sBAAiB,KAAK;AACjB,QAApB,AAAM,KAAD,YAAW;AACI,QAApB,oBAAc,KAAK;AACnB,yBAAI,AAAM,KAAD,YAAa;AACY,UAAhC,gCAA0B,KAAK;;;AAGnC,WAAqB,YAAd,AAAM,KAAD,WAAY;AACxB,WAAsB,YAAf,AAAM,KAAD,YAAa;IAC3B;;UAEkC;AAChC,YAAO,AAAM,KAAD,IAAI;AAChB,WAAqB,YAAd,AAAM,KAAD,WAAY;AACD,MAAvB,uBAAiB,KAAK;AACF,MAApB,AAAM,KAAD,YAAW;AAChB,UAAI,AAAM,KAAD,cAAa;AACM,QAA1B,AAAM,KAAD,iBAAgB;AAC0B,QAA/C,AAAM,KAAD,2BAAgB;;IAEzB;;;AAIE,qBAAK;AACuB,QAA1B,4BAAsB;AACkB,cAAxC;6BAAU,6BAAyB;;IAEvC;;AAQE,qBAAO;AACP,qBAAO;AACoB,MAA3B,4BAAsB;AACtB,qBAAO;IACT;;UAEiD;AAChB,MAA/B,AAAO,MAAD,iBAAgB;AAC0B,MAAhD,AAAO,MAAD,2BAAgB;IACxB;qBAEwC;;AACtC,UAAa,YAAT,gBAAY,UAAU;AACxB;;AAEF,oBAAI;AACwC,cAA1C;6BAAU,+BAA2B;;AAElB,MAArB,iBAAW,UAAU;AACrB,oBAAI,8BAAuB,kBAAY;AACV,QAA3B,4BAAsB;AACG,QAAzB;;IAEJ;;AAGE,qBAAO,AAoBN;AAnBC,sBAAI,AAAe;AACjB,gBAAO;;AAEmB,oBAAyB,+BACnD,gCAAa,wEACb,oCAAiB,AAAsE,4EAAN,QAAI;AAEvF,iBAAqD,QAAS,AAAe;AAC9D,mBAAK,AAAM,KAAD;AACO,wBAAU,AAAM,KAAD;AAC7C,yBAAO,AAAQ,OAAD;AACd,yBAAO,AAAiB,qCAAY,EAAE;AAKpC,UAJF,AAAM,KAAD,UAAyB;qDAC5B,oCAAiB,AAA0B,mBAApB,EAAE;AACd,yBAAR,OAAO,oCAAK;kBAAmB;AAAW,yDAAiB,AAA2B,mBAAnB,AAAO,MAAD;;AAC5E,yDAAiB,AAA0D,mBAA9B,AAAE,eAAtB,AAAgB,8BAAC,EAAE,iBAAc;;;;AAG3B,QAAnC,WAAmB,sCAAU,KAAK;;AAEpC,YAAO;IACT;uBAEwC;;;AACtC,YAAO,AAAM,KAAD,IAAI;AAChB,WAAqB,YAAd,AAAM,KAAD,WAAY;AACxB,UAAiD,YAA7C,AAAiB,gCAAO,AAAM,KAAD,iBAAmB,KAAK;AACf,QAAxC,AAAa,4BAAO,AAAM,KAAD;AACM,8BAAkB,AAAc,4BAAC,AAAM,KAAD;AACrE,YAAI,eAAe,IAAI;AACG,sBAAQ,AAAgB,eAAD;AACnB,UAA5B,4BAAsB,KAAK;AAC3B,wBAAI,AAAgB,eAAD;AACyB,YAA1C,AAAe,8BAAO,AAAM,KAAD;;;AAG/B,sBAAI,AAAa;AACiB,UAAhC,AAAS;;AAEc,QAAzB;AACA;;AAEgD,YAAlD,AAAc,4BAAC,AAAM,KAAD;oBAAN,OAAuB,aAAO,KAAK;AACjD,UAAiD,oBAA7C,AAAc,4BAAC,AAAM,KAAD,gCAAN,OAAuB,iBAAW;AACR,QAA1C,AAAe,8BAAO,AAAM,KAAD;;IAE/B;;UAEqC;AACnC,YAAO,AAAM,KAAD,IAAI;AAChB,WAAqB,YAAd,AAAM,KAAD,WAAY;AACxB,oBAAI,AAAiB,qCAAY,AAAM,KAAD;AAImD,QAAvF,AAAe,AAA8D,mCAAlD,AAAM,KAAD,gBAAgB,cAAyB,6EAAQ,KAAK;AAC7D,QAAzB;AACA;;AAE0B,MAA5B,4BAAsB,KAAK;AACF,MAAzB;IACF;;UAE6C;AAC3C,YAAO,AAAgB,AAAsB,8BAArB,AAAM,KAAD,mBAAmB;AAChD,YAAO,AAAY,AAAsB,0BAArB,AAAM,KAAD,mBAAmB;AACC,MAA7C,AAAgB,8BAAC,AAAM,KAAD,gBAAkB,KAAK;AACK,MAAlD,AAAY,0BAAC,AAAM,KAAD,gBAAkB,AAAM,KAAD;IAC3C;;UAEmC;UAAe;;AACpB,qBAAW,AAAiB,AACnD,6CAAW,AAAe,AAAO,sEAAO;YAAyB;AAAY,sBAAO;;AACzF,oBAAI,sBAAsB;AACmB,QAA3C,WAAW,AAAS,QAAD,qBAAkB;;AAEd,MAAzB,AAAS,QAAD,WAAS,OAAO;IAC1B;WAamB;;;AACjB,qBAAO;AACP,YAAO,AAAiB,gBAAD,IAAI;AAC3B,UAAI,AAAiB,gBAAD,IAAI;AACtB;;AAE6B,YAA/B;2BAAS,sBAAiB;AACO,MAAjC,uBAAiB,gBAAgB;AACL,aAA5B;4BAAS,oBAAc;IACzB;;;AAeE,qBAAO;AACiD,MAAxD,+BAAe,4CAAoC;AAC3B,MAAxB,AAAiB;AACK,MAAtB,AAAe;AACgB,YAA/B;2BAAS,sBAAiB;AACZ,MAAd,gBAAU;AACU,MAApB,qBAAe;AACM,MAArB,uBAAiB;IACnB;;AAGqB,YAAoG,UAAjG,yBAAkB,MAAM,wBAAqB,8BAAiB,sBAAa,uBAAU,mBAAU;IAAE;;AAIvH,qBAAO,AAQN;AAPC,sBAAI;AAID,UAHD,WAAM,4BAAY,AACd,gBAAI,sBAAW,sCACf,kDAAsC,sBAAW;;AAGvD,cAAO;;AAET,YAAO;IACT;;;QA3ekB;;QACC;IAuFX;IAyH6B,yBAA8C;IAGxC,uBAAkD;IAmGxF,4BAAsB;IAwKtB,uBAAiB;;;UA7dV,AAAc,aAAD,IAAI;IACT,uBAAE,aAAa;IACrB,iBAAmB;AAC/B,mBAAO,AAGN;AAFyB,MAAxB,oBAAc,UAAU;AACxB,YAAO;;EAEX;;;QA0B8B;;QACI;IAoD1B;IAyH6B,yBAA8C;IAGxC,uBAAkD;IAmGxF,4BAAsB;IAwKtB,uBAAiB;;UA1bV,AAAQ,OAAD,IAAI;IACT,iBAAE,OAAO;IACT,kBAAU,MAAR,OAAO,SAAP,OAA6B;IACzB,uBAAE;AACpB,mBAAO,AAGN;AAFsB,MAArB,oBAAc,OAAO;AACrB,YAAO;;EAEX;;QAakB;;QACW;;QACV;IA4BX;IAyH6B,yBAA8C;IAGxC,uBAAkD;IAmGxF,4BAAsB;IAwKtB,uBAAiB;UAlaV,AAAc,aAAD,IAAI;UACjB,AAAO,MAAD,IAAI;UACV,AAAO,AAAY,AAAgB,MAA7B,sBAAc,aAAa,KAAK;IACpC,iBAAE,AAAO,MAAD;IACT,gBAAE,MAAM;IACP,iBAAqC,YAAnC,AAAO,AAAY,MAAb,sBAAc,aAAa;IAC7B,uBAAE,aAAa;AACjC,mBAAO,AAGN;AAFyB,MAAxB,oBAAc,UAAU;AACxB,YAAO;;EAEX;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAEoB,6CAAe;;;MACf,2CAAa;;;;6FAwaY;AACxC,iBAAS;AAEd,mBAAO,AAQN;AAPC;AACoD,QAArB,8BAAc,MAAM;AACpC,QAAb,SAAS;;YACF;AAAP;AACc,UAAd,SAAS;;;;AAEX,YAAO;;AAGT,UAAO,OAAM;EACf;;;;;;;;;;;;;;AC55B0C;IAAS;;UAgFD;AACjC,8BAAoB,AAAK,AAAa,OAAV,AAAI,YAAE,MAAM;AAC5B,mBAAuB;AAC7B,qBAAW,AAAY,WAAD,SAAO,iBAAiB;AACjE,eAAkB,UAAW,SAAQ;AACzB,oBAAQ,AAAQ,OAAD,WAAS;AAClC,YAAI,AAAM,KAAD,IAAI;AAIT,UAHF,AAAO,MAAD,OAAK,6CACT,AAAQ,AAAoB,OAArB,aAAW,GAAG,KAAK,UAAQ,OAClC,AAAQ,OAAD,aAAW,AAAM,KAAD,GAAG;;AAGqC,UAAjE,AAAO,MAAD,OAAK,4DAA6C,OAAO;;;AAGnE,YAAO,OAAM;IACf;;UA6D2D;AACzD,cAAQ,OAAO;;;AAEX,gBAAyB;;;;AAEzB,gBAAyB;;;;AAEzB,gBAAyB;;;;AAEzB,gBAAyB;;;AAE7B,YAAO;IACT;;;;AArLuB,MAAf;AACU,MAAhB,sCAAY;AACqC,MAAjD,gCAA0B;AACsB,MAAhD,4BAAsB;AACiD,MAAvE,AAAO,gCAA2C,UAAvB;AACb,MAAd;AACoG,MAArF,AAAO,wDAAkB,QAAS,WAAY,yBAA4B,eAAR,OAAO;AACrB,MAApD,AAAU,qEAAkB;AACA,MAA3C;IACF;;AAW8C;IAAuB;;;AAChD;IAAuB;;;AAAvB;;IAAuB;;AAM1C;IACF;;IAU8B;;UAQU;AAAR;AACH,sBAAwB,yBAAd,aAAa;AACrC,mBAAuB,eAAhB,AAAO,OAAA,QAAC;AAC5B,gBAAQ,IAAI;;;AAEc,YAAtB;AACA;;;AAEJ;MACF;;;AAS0C,MAAxB,+CAAW;IAC7B;;AAEiC;AAWP,0BAAc;AAGhB,QAFtB,kCAAa;AAC+D,UAA1E,AAAY,WAAD,UAAU,MAAM,AAAW,mCAAW,mBAAkB;QACpE,2BAAW;AACY,QAAxB,MAAM,AAAY,WAAD;AACmB,6BAAiB;AAG/B,QAFtB,kCAAa;AACwH,UAAnI,AAAe,cAAD,UAAU,AAAO,mEAA6C,MAAM,AAAY,WAAD,sBAAqB;QACnH,2BAAW;AACe,QAA3B,MAAM,AAAe,cAAD;AACpB,6BAAO,oCAAkC,MAAM,AAAe,cAAD;QAA7D;MACF;;;AAuB+B,MAAvB;AAEN,qBAAO,AAaN;AAFE,QAVD,2CAKQ,iBACE;AAAY;UAAE,qCACd;gBAAQ;AAAR;AACM,cAAZ,WAAM,KAAK;YACZ;;AAEH,cAAO;;IAEX;;UAQkB;AACO,MAAvB,AAAW,8BAAM,KAAK;IACxB;;AAiBE,UAAI,uBAAkB;AACpB;;AAEuB,kBAAQ,oDAA0B,AAAO;AAClE,UAAI,KAAK,IAAI;AAC0B,QAArC,oCAA+B,KAAK;;IAExC;8BAEgD;AAAT;AAC+B,QAApE,oCAAkE,eAAnC,oDAAiC,eAAP,OAAO;AAChE,cAAO;MACT;;;AAyB6C;IAAmB;;;AACxC;IAAmB;;;AAAnB;;IAAmB;;AAQzC,YAAO;IACT;;;sDArLqB;;kDA4KG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MApLA,mCAAS;;;;;;;;;ECpBV;;;;;2BDsOuB,SAAmB;UAAnB;AACjB,sBAAY;AAmBrC,MAXoB,AAAS,mDAAoB,OAAO,EAAE,OAAO,EAAE,QAAW;AAC9E;AAC2B,UAAzB,AAAU,SAAD,UAAU,KAAK;;cACjB;cAAW;AAAlB;AAME,YALW,oCAAY,mDACZ,SAAS,SACb,KAAK,WACH,6BACA,oCAAiB;;;;;AAIhC,YAAO,AAAU,UAAD;IAClB;0BAIS,SACG,MAC0B;UAF7B;AADyB;AAKtB;AACV;AACwB,wBAAU,AAAS,mDAAC,OAAO;AACjD,cAAI,OAAO,IAAI;AACiB,YAA9B,YAAW,MAAM,AAAO,OAAA,CAAC,IAAI;;AAEmB,YAA7C,AAAe,uBAAK,OAAO,EAAE,IAAI,EAAU,eAAR,QAAQ;AAC/B,YAAf,WAAW;;;cAEN;cAAW;AAAlB;AAME,YALW,oCAAY,mDACZ,SAAS,SACb,KAAK,WACH,6BACA,oCAAiB;;;;AAG5B,cAAI,QAAQ,IAAI;AACI,YAAlB,AAAQ,QAAA,CAAC,QAAQ;;;MAGvB;;SAG+B,SAAmB;UAAnB;AACP,oBAAU,AAAa,uDAAC,OAAO;AACrD,UAAI,OAAO,IAAI,MACb,MAAO,AAAO,QAAA,CAAC,OAAO;AACxB,YAAO,4BAAqB,OAAO,EAAE,OAAO;IAC9C;sBAG8B,SAAyB;UAAzB;AAC5B,UAAI,AAAQ,OAAD,IAAI;AACY,QAAzB,AAAU,qDAAO,OAAO;;AAEI,QAA5B,AAAS,mDAAC,OAAO,EAAI,OAAO;AAG1B,QAFC,AAAe,wBAAM,OAAO,EAAE,SAAW;cAAyC;AAApD;AACqB,YAApD,MAAM,2BAAsB,OAAO,EAAE,IAAI,EAAE,QAAQ;UACpD;;;IAEL;wBAGgC,SAAyB;UAAzB;AAAqC,YAAmB,aAAnB,AAAS,mDAAC,OAAO,GAAK,OAAO;;0BAGhE,SAAyB;UAAzB;AAChC,UAAI,AAAQ,OAAD,IAAI;AACgB,QAA7B,AAAc,yDAAO,OAAO;;AAEI,QAAhC,AAAa,uDAAC,OAAO,EAAI,OAAO;IACpC;4BAGoC,SAAyB;UAAzB;AAAqC,YAAuB,aAAvB,AAAa,uDAAC,OAAO,GAAK,OAAO;;;;AAjGpG;;EAA2B;;;;;;;;;;;;;;;MAIQ,2CAAS;YACtB;;MAIa,+CAAa;YAC1B;;;;;ACzJ5B,qBAAO,AAeN;AAdC,YAAoB,AAAS,sCAAG;AAW7B,UAVD,WAAM,4BAAY,AAChB,oEACA,+BACA,oEACA,sEACA,kEACA,yDACA,gDACA,0EACA;;AAGJ,cAAO;;AAET,YAA+B,AAAE,gBAAV;IACzB;;;;;UC7CmC;UAAY;;AAApB;AACR,oBAAO,MAAM,UAAK,GAAG;AAIpC,YAAI,AAAK,IAAD,IAAI,MACV,AAAgD,WAA1C,4BAAa,AAA4B,oCAAJ,GAAG;AAGhD,YAAuB,aAAnB,AAAK,IAAD,oBAAiB,AAAG,KAAE;AAC5B,gBAAO,AAAK,qBAAO,AAAK,AAAO,IAAR;;AAIzB,cAAO,AAAO,mEAAc,IAAI,eAAc,AAAwB,gCAAL,GAAG;MACtE;;;UAEmC;AACjC,YAAO,AAAK,qBAAO,AAAK,AAAO,IAAR;IACzB;;UAYkB;IAAO;;AAGJ,YAA6B,UAA1B,6BAAiB,SAAM;IAAG;;;;EACpD;;;;;;;;;;;;;;;UAgByB;AAAQ,YAAA,AAAS,wBAAQ,GAAG;IAAC;;UAGvB;AAAR;AACK,uBAAU,MAAM,AAAY,yBAAO,kBAAY,GAAG;AACjD,wBAAW,MAAM,AAAQ,OAAD;AACjD,YAAI,AAAS,QAAD,qBACV,AAGE,WAHiB,sCAA2B,+BAC5C,gCAAa,AAA4B,oCAAJ,GAAG,IACxC,gCAAY,oBAAoB,AAAS,QAAD;AAE5B,qBAAQ,MAAM,wDAAmC,QAAQ;AACzE,cAAO,AAAM,AAAO,MAAR;MACd;;0BAQuC,KAAe;UAAf;UAAe;AAAvB;AAC7B,cAAO,AAAI,GAAD,IAAI;AACd,cAAO,AAAO,MAAD,IAAI;AACjB,cAAO,AAAM,OAAA,CAAC,MAAM,gBAAW,GAAG;MACpC;;;AAMqB,YAAsC,UAAnC,6BAAiB,SAAM,eAAE,kBAAQ;IAAE;;;QAtCpC;IACV,iBAAE,OAAO;IACN,oBAAE;;EAAY;;;;;;;;;;;;;;;;;;;;UAqDG;UAAY;;AAC3C,oBAAI,KAAK,GACP,MAAO,AAAa,kCAAY,GAAG,EAAE,cAAY,iBAAW,GAAG;AACjE,YAAa,kBAAW,GAAG;IAC7B;0BAauC,KAAe;UAAf;UAAe;AACpD,YAAO,AAAI,GAAD,IAAI;AACd,YAAO,AAAO,MAAD,IAAI;AACjB,oBAAI,AAAqB,yCAAY,GAAG,IACtC,MAAkC,qBAAF,eAAzB,AAAoB,kCAAC,GAAG;AACnB;AACH;AAUT,MATF,AAA8B,AAAgB,gBAAnC,GAAG,UAAS,gBAAe,MAAM,kBAAa,QAAG;AACtB,QAApC,SAAS,mDAAqB,KAAK;AACA,QAAnC,AAAoB,kCAAC,GAAG,EAAU,eAAN,MAAM;AAClC,YAAI,SAAS,IAAI;AAIU,UAAzB,AAAU,SAAD,UAAU,KAAK;;;AAG5B,UAAI,MAAM,IAAI;AAGZ,cAAa,gBAAN,MAAM;;AAIW,MAA1B,YAAY;AACgC,MAA5C,AAAoB,kCAAC,GAAG,EAAI,AAAU,SAAD;AACrC,YAAO,AAAU,UAAD;IAClB;;UAGkB;AACQ,MAAxB,AAAa,4BAAO,GAAG;AACS,MAAhC,AAAqB,oCAAO,GAAG;IACjC;;;IAtDkC,qBAAuC;IACtC,6BAAgD;;EAsDrF;;;;;;;;;;;;;;;UAK+B;AAAR;AACH,sBAAU,AAAK,AAAQ,6BAAQ,AAA+B,qBAAjB,oBAAW,GAAG;AAC3D,qBACZ,MAAM,AAAuB,6CAAK,kBAAkB,AAAQ,AAAO,OAAR;AAC/D,YAAI,AAAM,KAAD,IAAI,MACX,AAAgD,WAA1C,4BAAa,AAA4B,oCAAJ,GAAG;AAChD,cAAO,MAAK;MACd;;;;;;EACF;;;;;;;;;AAGE,UAAO;EACT;;MA+BkB,uBAAU;YAAG","file":"../../../../../../../../../../packages/flutter/src/services/system_channels.dart.lib.js"}');
  // Exports:
  return {
    src__services__system_channels: system_channels,
    src__services__message_codecs: message_codecs,
    src__services__platform_channel: platform_channel,
    src__services__message_codec: message_codec,
    src__services__restoration: restoration,
    src__services__binding: binding$0,
    src__services__binary_messenger: binary_messenger,
    src__services__asset_bundle: asset_bundle
  };
}));

//# sourceMappingURL=system_channels.dart.lib.js.map
