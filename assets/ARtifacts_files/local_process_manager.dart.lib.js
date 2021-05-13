define(['dart_sdk', 'packages/process/src/interface/common.dart', 'packages/process/src/interface/process_manager.dart'], (function load__packages__process__src__interface__local_process_manager_dart(dart_sdk, packages__process__src__interface__common$46dart, packages__process__src__interface__process_manager$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const io = dart_sdk.io;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common = packages__process__src__interface__common$46dart.src__interface__common;
  const process_manager = packages__process__src__interface__process_manager$46dart.src__interface__process_manager;
  var local_process_manager = Object.create(dart.library);
  var $first = dartx.first;
  var $toString = dartx.toString;
  var $skip = dartx.skip;
  var $map = dartx.map;
  var $toList = dartx.toList;
  dart._checkModuleNullSafetyMode(false);
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var dynamicToStringL = () => (dynamicToStringL = dart.constFn(dart.fnType(StringL(), [dart.dynamic])))();
  const CT = Object.create(null);
  var L0 = "package:process/src/interface/local_process_manager.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: io.ProcessStartMode.prototype,
        [ProcessStartMode__mode]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: io.SystemEncoding.prototype
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: io.ProcessSignal.prototype,
        [ProcessSignal__name]: "SIGTERM",
        [ProcessSignal__signalNumber]: 15
      });
    }
  }, false);
  var ProcessStartMode__mode = dart.privateName(io, "ProcessStartMode._mode");
  var C0;
  var C1;
  var ProcessSignal__name = dart.privateName(io, "ProcessSignal._name");
  var ProcessSignal__signalNumber = dart.privateName(io, "ProcessSignal._signalNumber");
  var C2;
  local_process_manager.LocalProcessManager = class LocalProcessManager extends core.Object {
    start(command, opts) {
      ListLOfObjectL().as(command);
      let workingDirectory = opts && 'workingDirectory' in opts ? opts.workingDirectory : null;
      let environment = opts && 'environment' in opts ? opts.environment : null;
      let includeParentEnvironment = opts && 'includeParentEnvironment' in opts ? opts.includeParentEnvironment : true;
      let runInShell = opts && 'runInShell' in opts ? opts.runInShell : false;
      let mode = opts && 'mode' in opts ? opts.mode : C0 || CT.C0;
      return io.Process.start(common.sanitizeExecutablePath(local_process_manager._getExecutable(command, workingDirectory, runInShell)), local_process_manager._getArguments(command), {workingDirectory: workingDirectory, environment: environment, includeParentEnvironment: includeParentEnvironment, runInShell: runInShell, mode: mode});
    }
    run(command, opts) {
      ListLOfObjectL().as(command);
      let workingDirectory = opts && 'workingDirectory' in opts ? opts.workingDirectory : null;
      let environment = opts && 'environment' in opts ? opts.environment : null;
      let includeParentEnvironment = opts && 'includeParentEnvironment' in opts ? opts.includeParentEnvironment : true;
      let runInShell = opts && 'runInShell' in opts ? opts.runInShell : false;
      let stdoutEncoding = opts && 'stdoutEncoding' in opts ? opts.stdoutEncoding : C1 || CT.C1;
      let stderrEncoding = opts && 'stderrEncoding' in opts ? opts.stderrEncoding : C1 || CT.C1;
      return io.Process.run(common.sanitizeExecutablePath(local_process_manager._getExecutable(command, workingDirectory, runInShell)), local_process_manager._getArguments(command), {workingDirectory: workingDirectory, environment: environment, includeParentEnvironment: includeParentEnvironment, runInShell: runInShell, stdoutEncoding: stdoutEncoding, stderrEncoding: stderrEncoding});
    }
    runSync(command, opts) {
      ListLOfObjectL().as(command);
      let workingDirectory = opts && 'workingDirectory' in opts ? opts.workingDirectory : null;
      let environment = opts && 'environment' in opts ? opts.environment : null;
      let includeParentEnvironment = opts && 'includeParentEnvironment' in opts ? opts.includeParentEnvironment : true;
      let runInShell = opts && 'runInShell' in opts ? opts.runInShell : false;
      let stdoutEncoding = opts && 'stdoutEncoding' in opts ? opts.stdoutEncoding : C1 || CT.C1;
      let stderrEncoding = opts && 'stderrEncoding' in opts ? opts.stderrEncoding : C1 || CT.C1;
      return io.Process.runSync(common.sanitizeExecutablePath(local_process_manager._getExecutable(command, workingDirectory, runInShell)), local_process_manager._getArguments(command), {workingDirectory: workingDirectory, environment: environment, includeParentEnvironment: includeParentEnvironment, runInShell: runInShell, stdoutEncoding: stdoutEncoding, stderrEncoding: stderrEncoding});
    }
    canRun(executable, opts) {
      let workingDirectory = opts && 'workingDirectory' in opts ? opts.workingDirectory : null;
      return common.getExecutablePath(StringL().as(executable), workingDirectory) != null;
    }
    killPid(pid, signal = C2 || CT.C2) {
      return io.Process.killPid(pid, signal);
    }
  };
  (local_process_manager.LocalProcessManager.new = function() {
    ;
  }).prototype = local_process_manager.LocalProcessManager.prototype;
  dart.addTypeTests(local_process_manager.LocalProcessManager);
  dart.addTypeCaches(local_process_manager.LocalProcessManager);
  local_process_manager.LocalProcessManager[dart.implements] = () => [process_manager.ProcessManager];
  dart.setMethodSignature(local_process_manager.LocalProcessManager, () => ({
    __proto__: dart.getMethods(local_process_manager.LocalProcessManager.__proto__),
    start: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.Process))), [dart.legacy(core.Object)], {environment: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))), includeParentEnvironment: dart.legacy(core.bool), mode: dart.legacy(io.ProcessStartMode), runInShell: dart.legacy(core.bool), workingDirectory: dart.legacy(core.String)}, {}),
    run: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.ProcessResult))), [dart.legacy(core.Object)], {environment: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))), includeParentEnvironment: dart.legacy(core.bool), runInShell: dart.legacy(core.bool), stderrEncoding: dart.legacy(convert.Encoding), stdoutEncoding: dart.legacy(convert.Encoding), workingDirectory: dart.legacy(core.String)}, {}),
    runSync: dart.fnType(dart.legacy(io.ProcessResult), [dart.legacy(core.Object)], {environment: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))), includeParentEnvironment: dart.legacy(core.bool), runInShell: dart.legacy(core.bool), stderrEncoding: dart.legacy(convert.Encoding), stdoutEncoding: dart.legacy(convert.Encoding), workingDirectory: dart.legacy(core.String)}, {}),
    canRun: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)], {workingDirectory: dart.legacy(core.String)}, {}),
    killPid: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.int)], [dart.legacy(io.ProcessSignal)])
  }));
  dart.setLibraryUri(local_process_manager.LocalProcessManager, L0);
  local_process_manager._getExecutable = function _getExecutable(command, workingDirectory, runInShell) {
    let commandName = dart.toString(command[$first]);
    if (dart.test(runInShell)) {
      return commandName;
    }
    let exe = common.getExecutablePath(commandName, workingDirectory);
    if (exe == null) {
      dart.throw(new core.ArgumentError.new("Cannot find executable for " + dart.str(commandName) + "."));
    }
    return exe;
  };
  local_process_manager._getArguments = function _getArguments(command) {
    return command[$skip](1)[$map](StringL(), dart.fn(element => dart.toString(element), dynamicToStringL()))[$toList]();
  };
  dart.trackLibraries("packages/process/src/interface/local_process_manager.dart", {
    "package:process/src/interface/local_process_manager.dart": local_process_manager
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["local_process_manager.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0BAkC2B;UAChB;UACa;UACf;UACA;UACY;AAEjB,YAAe,kBACb,8BAAuB,qCACrB,OAAO,EACP,gBAAgB,EAChB,UAAU,IAEZ,oCAAc,OAAO,sBACH,gBAAgB,eACrB,WAAW,4BACE,wBAAwB,cACtC,UAAU,QAChB,IAAI;IAEd;;0BAIyB;UAChB;UACa;UACf;UACA;UACI;UACA;AAET,YAAe,gBACb,8BAAuB,qCACrB,OAAO,EACP,gBAAgB,EAChB,UAAU,IAEZ,oCAAc,OAAO,sBACH,gBAAgB,eACrB,WAAW,4BACE,wBAAwB,cACtC,UAAU,kBACN,cAAc,kBACd,cAAc;IAElC;;0BAIyB;UAChB;UACa;UACf;UACA;UACI;UACA;AAET,YAAe,oBACb,8BAAuB,qCACrB,OAAO,EACP,gBAAgB,EAChB,UAAU,IAEZ,oCAAc,OAAO,sBACH,gBAAgB,eACrB,WAAW,4BACE,wBAAwB,cACtC,UAAU,kBACN,cAAc,kBACd,cAAc;IAElC;WAG6B;UAAoB;AAC7C,YAAA,AAAgD,uCAA9B,UAAU,GAAE,gBAAgB,KAAK;IAAI;YAG1C,KAAoB;AACnC,YAAe,oBAAQ,GAAG,EAAE,MAAM;IACpC;;;;EArF2B;;;;;;;;;;;;;iEAyFX,SAAgB,kBAAuB;AAChD,sBAA4B,cAAd,AAAQ,OAAD;AAC5B,kBAAI,UAAU;AACZ,YAAO,YAAW;;AAEb,cAAM,yBAAkB,WAAW,EAAE,gBAAgB;AAC5D,QAAI,AAAI,GAAD,IAAI;AAC0D,MAAnE,WAAU,2BAAc,AAA0C,yCAAb,WAAW;;AAElE,UAAO,IAAG;EACZ;+DAEyC;AAGrC,UAAA,AACK,AACA,AACA,QAHE,QACG,oBACO,QAAS,WAAoB,cAAR,OAAO;EAChC","file":"../../../../../../../../../../../../packages/process/src/interface/local_process_manager.dart.lib.js"}');
  // Exports:
  return {
    src__interface__local_process_manager: local_process_manager
  };
}));

//# sourceMappingURL=local_process_manager.dart.lib.js.map
