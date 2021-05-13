define(['dart_sdk'], (function load__packages__flutter__src__foundation__consolidate_response_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _native_typed_data = dart_sdk._native_typed_data;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const async = dart_sdk.async;
  const io = dart_sdk.io;
  const _http = dart_sdk._http;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var consolidate_response = Object.create(dart.library);
  var $add = dartx.add;
  var $length = dartx.length;
  var $setRange = dartx.setRange;
  dart._checkModuleNullSafetyMode(false);
  var ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  var JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  var CompleterOfUint8List = () => (CompleterOfUint8List = dart.constFn(async.Completer$(typed_data.Uint8List)))();
  var StreamSubscriptionOfListOfint = () => (StreamSubscriptionOfListOfint = dart.constFn(async.StreamSubscription$(ListOfint())))();
  var VoidToStreamSubscriptionOfListOfint = () => (VoidToStreamSubscriptionOfListOfint = dart.constFn(dart.fnType(StreamSubscriptionOfListOfint(), [])))();
  var StreamSubscriptionOfListOfintTodynamic = () => (StreamSubscriptionOfListOfintTodynamic = dart.constFn(dart.fnType(dart.dynamic, [StreamSubscriptionOfListOfint()])))();
  var ListOfintTovoid = () => (ListOfintTovoid = dart.constFn(dart.fnType(dart.void, [ListOfint()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/foundation/consolidate_response.dart";
  var L1 = "package:flutter/src/foundation/consolidate_response.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: _http.HttpClientResponseCompressionState.prototype,
        [_name]: "HttpClientResponseCompressionState.compressed",
        index: 2
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: _http.HttpClientResponseCompressionState.prototype,
        [_name]: "HttpClientResponseCompressionState.decompressed",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: _http.HttpClientResponseCompressionState.prototype,
        [_name]: "HttpClientResponseCompressionState.notCompressed",
        index: 0
      });
    }
  }, false);
  var _chunks = dart.privateName(consolidate_response, "_chunks");
  var _contentLength = dart.privateName(consolidate_response, "_contentLength");
  var _bytes = dart.privateName(consolidate_response, "_bytes");
  consolidate_response._OutputBuffer = class _OutputBuffer extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint().as(chunk);
      if (chunk == null) dart.nullFailed(L0, 104, 22, "chunk");
      if (!(this[_bytes] == null)) dart.assertFailed(null, L0, 105, 12, "_bytes == null");
      dart.nullCheck(this[_chunks])[$add](chunk);
      this[_contentLength] = dart.notNull(this[_contentLength]) + dart.notNull(chunk[$length]);
    }
    close() {
      if (this[_bytes] != null) {
        return;
      }
      this[_bytes] = _native_typed_data.NativeUint8List.new(this[_contentLength]);
      let offset = 0;
      for (let chunk of dart.nullCheck(this[_chunks])) {
        dart.nullCheck(this[_bytes])[$setRange](offset, offset + dart.notNull(chunk[$length]), chunk);
        offset = offset + dart.notNull(chunk[$length]);
      }
      this[_chunks] = null;
    }
    get bytes() {
      if (!(this[_bytes] != null)) dart.assertFailed(null, L0, 126, 12, "_bytes != null");
      return dart.nullCheck(this[_bytes]);
    }
  };
  (consolidate_response._OutputBuffer.new = function() {
    this[_chunks] = JSArrayOfListOfint().of([]);
    this[_contentLength] = 0;
    this[_bytes] = null;
    consolidate_response._OutputBuffer.__proto__.new.call(this);
    ;
  }).prototype = consolidate_response._OutputBuffer.prototype;
  dart.addTypeTests(consolidate_response._OutputBuffer);
  dart.addTypeCaches(consolidate_response._OutputBuffer);
  dart.setMethodSignature(consolidate_response._OutputBuffer, () => ({
    __proto__: dart.getMethods(consolidate_response._OutputBuffer.__proto__),
    add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(consolidate_response._OutputBuffer, () => ({
    __proto__: dart.getGetters(consolidate_response._OutputBuffer.__proto__),
    bytes: typed_data.Uint8List
  }));
  dart.setLibraryUri(consolidate_response._OutputBuffer, L1);
  dart.setFieldSignature(consolidate_response._OutputBuffer, () => ({
    __proto__: dart.getFields(consolidate_response._OutputBuffer.__proto__),
    [_chunks]: dart.fieldType(dart.nullable(core.List$(core.List$(core.int)))),
    [_contentLength]: dart.fieldType(core.int),
    [_bytes]: dart.fieldType(dart.nullable(typed_data.Uint8List))
  }));
  var _name = dart.privateName(_http, "_name");
  var C0;
  var C1;
  var C2;
  consolidate_response.consolidateHttpClientResponseBytes = function consolidateHttpClientResponseBytes(response, opts) {
    if (response == null) dart.nullFailed(L0, 47, 22, "response");
    let autoUncompress = opts && 'autoUncompress' in opts ? opts.autoUncompress : true;
    if (autoUncompress == null) dart.nullFailed(L0, 48, 8, "autoUncompress");
    let onBytesReceived = opts && 'onBytesReceived' in opts ? opts.onBytesReceived : null;
    if (!(autoUncompress != null)) dart.assertFailed(null, L0, 51, 10, "autoUncompress != null");
    let completer = CompleterOfUint8List().sync();
    let output = new consolidate_response._OutputBuffer.new();
    let sink = output;
    let expectedContentLength = response.contentLength;
    if (expectedContentLength === -1) expectedContentLength = null;
    switch (response.compressionState) {
      case C0 || CT.C0:
      {
        if (dart.test(autoUncompress)) {
          sink = io.gzip.decoder.startChunkedConversion(output);
        }
        break;
      }
      case C1 || CT.C1:
      {
        expectedContentLength = null;
        break;
      }
      case C2 || CT.C2:
      {
        break;
      }
      default:
      {
        dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
      }
    }
    let bytesReceived = 0;
    let subscription = null;
    let subscription$35isSet = false;
    function subscription$35get() {
      return subscription$35isSet ? subscription : dart.throw(new _internal.LateError.localNI("subscription"));
    }
    dart.fn(subscription$35get, VoidToStreamSubscriptionOfListOfint());
    function subscription$35set(t3) {
      if (t3 == null) dart.nullFailed(L0, 77, 44, "null");
      if (subscription$35isSet)
        dart.throw(new _internal.LateError.localAI("subscription"));
      else {
        subscription$35isSet = true;
        return subscription = t3;
      }
    }
    dart.fn(subscription$35set, StreamSubscriptionOfListOfintTodynamic());
    subscription$35set(response.listen(dart.fn(chunk => {
      if (chunk == null) dart.nullFailed(L0, 78, 45, "chunk");
      sink.add(chunk);
      if (onBytesReceived != null) {
        bytesReceived = bytesReceived + dart.notNull(chunk[$length]);
        try {
          onBytesReceived(bytesReceived, expectedContentLength);
        } catch (e) {
          let error = dart.getThrown(e);
          let stackTrace = dart.stackTrace(e);
          if (core.Object.is(error)) {
            completer.completeError(error, stackTrace);
            subscription$35get().cancel();
            return;
          } else
            throw e;
        }
      }
    }, ListOfintTovoid()), {onDone: dart.fn(() => {
        sink.close();
        completer.complete(output.bytes);
      }, VoidTovoid()), onError: dart.bind(completer, 'completeError'), cancelOnError: true}));
    return completer.future;
  };
  dart.trackLibraries("packages/flutter/src/foundation/consolidate_response.dart", {
    "package:flutter/src/foundation/consolidate_response.dart": consolidate_response
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["consolidate_response.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;qBAuGqB;;AACjB,YAAO,AAAO,gBAAG;AACE,MAAZ,AAAE,eAAT,qBAAa,KAAK;AACY,MAA9B,uBAAe,aAAf,qCAAkB,AAAM,KAAD;IACzB;;AAIE,UAAI,gBAAU;AAEZ;;AAEgC,MAAlC,eAAS,uCAAU;AACf,mBAAS;AACb,eAAqB,QAAgB,gBAAP;AAC0B,QAAhD,AAAE,eAAR,yBAAiB,MAAM,EAAE,AAAO,MAAD,gBAAG,AAAM,KAAD,YAAS,KAAK;AAC/B,QAAtB,SAAA,AAAO,MAAD,gBAAI,AAAM,KAAD;;AAEH,MAAd,gBAAU;IACZ;;AAGE,YAAO,AAAO,gBAAG;AACjB,YAAa,gBAAN;IACT;;;IA7BiB,gBAAqB;IAClC,uBAAiB;IACV;;;EA4Bb;;;;;;;;;;;;;;;;;;;;;;;;QAlFqB;QACd;;QACkB;AAEvB,UAAO,AAAe,cAAD,IAAI;AACE,oBAAY;AAEnB,iBAAS;AACV,eAAO,MAAM;AAC3B,gCAAwB,AAAS,QAAD;AACrC,QAAI,AAAsB,qBAAD,KAAI,CAAC,GAC5B,AAA4B,wBAAJ;AAC1B,YAAQ,AAAS,QAAD;;;AAEZ,sBAAI,cAAc;AAEkC,UAAlD,OAAO,AAAK,AAAQ,uCAAuB,MAAM;;AAEnD;;;;AAI4B,QAA5B,wBAAwB;AACxB;;;;AAGA;;;;AAdJ;;;AAiBI,wBAAgB;AACqB;;;;;;;;;;;;;;;;AAgBgB,IAfzD,mBAAe,AAAS,QAAD,QAAQ;UAAW;AACzB,MAAf,AAAK,IAAD,KAAK,KAAK;AACd,UAAI,eAAe,IAAI;AACQ,QAA7B,gBAAA,AAAc,aAAD,gBAAI,AAAM,KAAD;AACtB;AACuD,UAArD,AAAe,eAAA,CAAC,aAAa,EAAE,qBAAqB;;cAC7C;cAAO;AAAd;AAC0C,YAA1C,AAAU,SAAD,eAAe,KAAK,EAAE,UAAU;AACpB,YAArB,AAAa;AACb;;;;;oCAGK;AACG,QAAZ,AAAK,IAAD;AAC4B,QAAhC,AAAU,SAAD,UAAU,AAAO,MAAD;iCACL,UAAV,SAAS,mCAA+B;AAEpD,UAAO,AAAU,UAAD;EAClB","file":"../../../../../../../../../../packages/flutter/src/foundation/consolidate_response.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__consolidate_response: consolidate_response
  };
}));

//# sourceMappingURL=consolidate_response.dart.lib.js.map
