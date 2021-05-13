define(['dart_sdk', 'packages/cloud_firestore_web/src/write_batch_web.dart', 'packages/firebase_auth_web/firebase_auth_web.dart', 'packages/firebase_core_web/firebase_core_web.dart', 'packages/google_sign_in_web/google_sign_in_web.dart', 'packages/shared_preferences_web/shared_preferences_web.dart'], (function load__packages__artif__generated_plugin_registrant_dart(dart_sdk, packages__cloud_firestore_web__src__write_batch_web$46dart, packages__firebase_auth_web__firebase_auth_web$46dart, packages__firebase_core_web__firebase_core_web$46dart, packages__google_sign_in_web__google_sign_in_web$46dart, packages__shared_preferences_web__shared_preferences_web$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const cloud_firestore_web = packages__cloud_firestore_web__src__write_batch_web$46dart.cloud_firestore_web;
  const firebase_auth_web = packages__firebase_auth_web__firebase_auth_web$46dart.firebase_auth_web;
  const firebase_core_web = packages__firebase_core_web__firebase_core_web$46dart.firebase_core_web;
  const google_sign_in_web = packages__google_sign_in_web__google_sign_in_web$46dart.google_sign_in_web;
  const shared_preferences_web = packages__shared_preferences_web__shared_preferences_web$46dart.shared_preferences_web;
  var generated_plugin_registrant = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  generated_plugin_registrant.registerPlugins = function registerPlugins(registrar) {
    cloud_firestore_web.FirebaseFirestoreWeb.registerWith(registrar);
    firebase_auth_web.FirebaseAuthWeb.registerWith(registrar);
    firebase_core_web.FirebaseCoreWeb.registerWith(registrar);
    google_sign_in_web.GoogleSignInPlugin.registerWith(registrar);
    shared_preferences_web.SharedPreferencesPlugin.registerWith(registrar);
    registrar.registerMessageHandler();
  };
  dart.trackLibraries("packages/artif/generated_plugin_registrant.dart", {
    "package:artif/generated_plugin_registrant.dart": generated_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["generated_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;;;;;;yEAa+B;AACe,IAAvB,sDAAa,SAAS;AACJ,IAAvB,+CAAa,SAAS;AACC,IAAvB,+CAAa,SAAS;AACI,IAAvB,mDAAa,SAAS;AACM,IAAvB,4DAAa,SAAS;AACZ,IAAlC,AAAU,SAAD;EACX","file":"../../../../../../packages/artif/generated_plugin_registrant.dart.lib.js"}');
  // Exports:
  return {
    generated_plugin_registrant: generated_plugin_registrant
  };
}));

//# sourceMappingURL=generated_plugin_registrant.dart.lib.js.map
