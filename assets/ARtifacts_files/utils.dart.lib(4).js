define(['dart_sdk', 'packages/source_span/src/span_exception.dart'], (function load__packages__http_parser__src__utils_dart(dart_sdk, packages__source_span__src__span_exception$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const span_exception = packages__source_span__src__span_exception$46dart.src__span_exception;
  var utils = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var FormatExceptionL = () => (FormatExceptionL = dart.constFn(dart.legacy(core.FormatException)))();
  var SourceSpanFormatExceptionL = () => (SourceSpanFormatExceptionL = dart.constFn(dart.legacy(span_exception.SourceSpanFormatException)))();
  const CT = Object.create(null);
  utils.wrapFormatException = function wrapFormatException(T, name, value, body) {
    try {
      return body();
    } catch (e) {
      let ex = dart.getThrown(e);
      if (SourceSpanFormatExceptionL().is(ex)) {
        let error = ex;
        dart.throw(new span_exception.SourceSpanFormatException.new("Invalid " + dart.str(name) + ": " + dart.str(error.message), error.span, error.source));
      } else if (FormatExceptionL().is(ex)) {
        let error = ex;
        dart.throw(new core.FormatException.new("Invalid " + dart.str(name) + " \"" + dart.str(value) + "\": " + dart.str(error.message), error.source, error.offset));
      } else
        throw e;
    }
  };
  dart.trackLibraries("packages/http_parser/src/utils.dart", {
    "package:http_parser/src/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;8DAUgC,MAAa,OAAoB;AAC/D;AACE,YAAO,AAAI,KAAA;;;AACX;YAAoC;AAE4B,QADhE,WAAM,iDACF,AAAiC,sBAAvB,IAAI,oBAAI,AAAM,KAAD,WAAY,AAAM,KAAD,OAAO,AAAM,KAAD;YACxD;YAA0B;AAEiD,QAD3E,WAAM,6BACF,AAA0C,sBAAhC,IAAI,qBAAG,KAAK,sBAAK,AAAM,KAAD,WAAY,AAAM,KAAD,SAAS,AAAM,KAAD;;;;EAEvE","file":"../../../../../../../../../../../packages/http_parser/src/utils.dart.lib.js"}');
  // Exports:
  return {
    src__utils: utils
  };
}));

//# sourceMappingURL=utils.dart.lib.js.map
