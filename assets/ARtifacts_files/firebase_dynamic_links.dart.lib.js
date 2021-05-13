define(['dart_sdk', 'packages/flutter/src/services/system_channels.dart'], (function load__packages__firebase_dynamic_links__firebase_dynamic_links_dart(dart_sdk, packages__flutter__src__services__system_channels$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const message_codec = packages__flutter__src__services__system_channels$46dart.src__services__message_codec;
  const platform_channel = packages__flutter__src__services__system_channels$46dart.src__services__platform_channel;
  const message_codecs = packages__flutter__src__services__system_channels$46dart.src__services__message_codecs;
  var firebase_dynamic_links = Object.create(dart.library);
  var $_get = dartx._get;
  var $cast = dartx.cast;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var ShortDynamicLinkL = () => (ShortDynamicLinkL = dart.constFn(dart.legacy(firebase_dynamic_links.ShortDynamicLink)))();
  var UriL = () => (UriL = dart.constFn(dart.legacy(core.Uri)))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var ShortDynamicLinkPathLengthL = () => (ShortDynamicLinkPathLengthL = dart.constFn(dart.legacy(firebase_dynamic_links.ShortDynamicLinkPathLength)))();
  var PendingDynamicLinkDataL = () => (PendingDynamicLinkDataL = dart.constFn(dart.legacy(firebase_dynamic_links.PendingDynamicLinkData)))();
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/.pub-cache/hosted/pub.dartlang.org/firebase_dynamic_links-0.6.1/lib/src/dynamic_link_parameters.dart";
  var L1 = "package:firebase_dynamic_links/firebase_dynamic_links.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: firebase_dynamic_links.ShortDynamicLinkPathLength.prototype,
        [_name$]: "ShortDynamicLinkPathLength.unguessable",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: firebase_dynamic_links.ShortDynamicLinkPathLength.prototype,
        [_name$]: "ShortDynamicLinkPathLength.short",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], ShortDynamicLinkPathLengthL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C5 || CT.C5
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C4 || CT.C4,
        [MethodChannel_name]: "plugins.flutter.io/firebase_dynamic_links"
      });
    }
  }, false);
  var _data = dart.privateName(firebase_dynamic_links, "_data");
  var androidParameters$ = dart.privateName(firebase_dynamic_links, "DynamicLinkParameters.androidParameters");
  var uriPrefix$ = dart.privateName(firebase_dynamic_links, "DynamicLinkParameters.uriPrefix");
  var dynamicLinkParametersOptions$ = dart.privateName(firebase_dynamic_links, "DynamicLinkParameters.dynamicLinkParametersOptions");
  var googleAnalyticsParameters$ = dart.privateName(firebase_dynamic_links, "DynamicLinkParameters.googleAnalyticsParameters");
  var iosParameters$ = dart.privateName(firebase_dynamic_links, "DynamicLinkParameters.iosParameters");
  var itunesConnectAnalyticsParameters$ = dart.privateName(firebase_dynamic_links, "DynamicLinkParameters.itunesConnectAnalyticsParameters");
  var link$ = dart.privateName(firebase_dynamic_links, "DynamicLinkParameters.link");
  var navigationInfoParameters$ = dart.privateName(firebase_dynamic_links, "DynamicLinkParameters.navigationInfoParameters");
  var socialMetaTagParameters$ = dart.privateName(firebase_dynamic_links, "DynamicLinkParameters.socialMetaTagParameters");
  firebase_dynamic_links.DynamicLinkParameters = class DynamicLinkParameters extends core.Object {
    get androidParameters() {
      return this[androidParameters$];
    }
    set androidParameters(value) {
      super.androidParameters = value;
    }
    get uriPrefix() {
      return this[uriPrefix$];
    }
    set uriPrefix(value) {
      super.uriPrefix = value;
    }
    get dynamicLinkParametersOptions() {
      return this[dynamicLinkParametersOptions$];
    }
    set dynamicLinkParametersOptions(value) {
      super.dynamicLinkParametersOptions = value;
    }
    get googleAnalyticsParameters() {
      return this[googleAnalyticsParameters$];
    }
    set googleAnalyticsParameters(value) {
      super.googleAnalyticsParameters = value;
    }
    get iosParameters() {
      return this[iosParameters$];
    }
    set iosParameters(value) {
      super.iosParameters = value;
    }
    get itunesConnectAnalyticsParameters() {
      return this[itunesConnectAnalyticsParameters$];
    }
    set itunesConnectAnalyticsParameters(value) {
      super.itunesConnectAnalyticsParameters = value;
    }
    get link() {
      return this[link$];
    }
    set link(value) {
      super.link = value;
    }
    get navigationInfoParameters() {
      return this[navigationInfoParameters$];
    }
    set navigationInfoParameters(value) {
      super.navigationInfoParameters = value;
    }
    get socialMetaTagParameters() {
      return this[socialMetaTagParameters$];
    }
    set socialMetaTagParameters(value) {
      super.socialMetaTagParameters = value;
    }
    static shortenUrl(url, options = null) {
      return async.async(ShortDynamicLinkL(), function* shortenUrl() {
        let t0;
        let reply = (yield firebase_dynamic_links.FirebaseDynamicLinks.channel.invokeMapMethod(StringL(), dart.dynamic, "DynamicLinkParameters#shortenUrl", new (IdentityMapOfStringL$dynamic()).from(["url", dart.toString(url), "dynamicLinkParametersOptions", (t0 = options, t0 == null ? null : t0[_data])])));
        return firebase_dynamic_links.DynamicLinkParameters._parseShortLink(reply);
      });
    }
    get [_data]() {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4;
      return new (IdentityMapOfStringL$dynamic()).from(["androidParameters", (t0 = this.androidParameters, t0 == null ? null : t0[_data]), "uriPrefix", this.uriPrefix, "dynamicLinkParametersOptions", (t0$ = this.dynamicLinkParametersOptions, t0$ == null ? null : t0$[_data]), "googleAnalyticsParameters", (t0$0 = this.googleAnalyticsParameters, t0$0 == null ? null : t0$0[_data]), "iosParameters", (t0$1 = this.iosParameters, t0$1 == null ? null : t0$1[_data]), "itunesConnectAnalyticsParameters", (t0$2 = this.itunesConnectAnalyticsParameters, t0$2 == null ? null : t0$2[_data]), "link", dart.toString(this.link), "navigationInfoParameters", (t0$3 = this.navigationInfoParameters, t0$3 == null ? null : t0$3[_data]), "socialMetaTagParameters", (t0$4 = this.socialMetaTagParameters, t0$4 == null ? null : t0$4[_data])]);
    }
    buildUrl() {
      return async.async(UriL(), (function* buildUrl() {
        let url = (yield firebase_dynamic_links.FirebaseDynamicLinks.channel.invokeMethod(StringL(), "DynamicLinkParameters#buildUrl", this[_data]));
        return core.Uri.parse(url);
      }).bind(this));
    }
    buildShortLink() {
      return async.async(ShortDynamicLinkL(), (function* buildShortLink() {
        let reply = (yield firebase_dynamic_links.FirebaseDynamicLinks.channel.invokeMapMethod(StringL(), dart.dynamic, "DynamicLinkParameters#buildShortLink", this[_data]));
        return firebase_dynamic_links.DynamicLinkParameters._parseShortLink(reply);
      }).bind(this));
    }
    static _parseShortLink(reply) {
      let t0;
      let warnings = ListL().as(reply[$_get]("warnings"));
      return new firebase_dynamic_links.ShortDynamicLink.__(core.Uri.parse(core.String.as(reply[$_get]("url"))), (t0 = warnings, t0 == null ? null : t0[$cast](StringL())));
    }
  };
  (firebase_dynamic_links.DynamicLinkParameters.new = function(opts) {
    let androidParameters = opts && 'androidParameters' in opts ? opts.androidParameters : null;
    let uriPrefix = opts && 'uriPrefix' in opts ? opts.uriPrefix : null;
    let dynamicLinkParametersOptions = opts && 'dynamicLinkParametersOptions' in opts ? opts.dynamicLinkParametersOptions : null;
    let googleAnalyticsParameters = opts && 'googleAnalyticsParameters' in opts ? opts.googleAnalyticsParameters : null;
    let iosParameters = opts && 'iosParameters' in opts ? opts.iosParameters : null;
    let itunesConnectAnalyticsParameters = opts && 'itunesConnectAnalyticsParameters' in opts ? opts.itunesConnectAnalyticsParameters : null;
    let link = opts && 'link' in opts ? opts.link : null;
    let navigationInfoParameters = opts && 'navigationInfoParameters' in opts ? opts.navigationInfoParameters : null;
    let socialMetaTagParameters = opts && 'socialMetaTagParameters' in opts ? opts.socialMetaTagParameters : null;
    this[androidParameters$] = androidParameters;
    this[uriPrefix$] = uriPrefix;
    this[dynamicLinkParametersOptions$] = dynamicLinkParametersOptions;
    this[googleAnalyticsParameters$] = googleAnalyticsParameters;
    this[iosParameters$] = iosParameters;
    this[itunesConnectAnalyticsParameters$] = itunesConnectAnalyticsParameters;
    this[link$] = link;
    this[navigationInfoParameters$] = navigationInfoParameters;
    this[socialMetaTagParameters$] = socialMetaTagParameters;
    if (!(uriPrefix != null)) dart.assertFailed(null, L0, 23, 16, "uriPrefix != null");
    if (!(link != null)) dart.assertFailed(null, L0, 24, 16, "link != null");
    ;
  }).prototype = firebase_dynamic_links.DynamicLinkParameters.prototype;
  dart.addTypeTests(firebase_dynamic_links.DynamicLinkParameters);
  dart.addTypeCaches(firebase_dynamic_links.DynamicLinkParameters);
  dart.setMethodSignature(firebase_dynamic_links.DynamicLinkParameters, () => ({
    __proto__: dart.getMethods(firebase_dynamic_links.DynamicLinkParameters.__proto__),
    buildUrl: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Uri))), []),
    buildShortLink: dart.fnType(dart.legacy(async.Future$(dart.legacy(firebase_dynamic_links.ShortDynamicLink))), [])
  }));
  dart.setGetterSignature(firebase_dynamic_links.DynamicLinkParameters, () => ({
    __proto__: dart.getGetters(firebase_dynamic_links.DynamicLinkParameters.__proto__),
    [_data]: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))
  }));
  dart.setLibraryUri(firebase_dynamic_links.DynamicLinkParameters, L1);
  dart.setFieldSignature(firebase_dynamic_links.DynamicLinkParameters, () => ({
    __proto__: dart.getFields(firebase_dynamic_links.DynamicLinkParameters.__proto__),
    androidParameters: dart.finalFieldType(dart.legacy(firebase_dynamic_links.AndroidParameters)),
    uriPrefix: dart.finalFieldType(dart.legacy(core.String)),
    dynamicLinkParametersOptions: dart.finalFieldType(dart.legacy(firebase_dynamic_links.DynamicLinkParametersOptions)),
    googleAnalyticsParameters: dart.finalFieldType(dart.legacy(firebase_dynamic_links.GoogleAnalyticsParameters)),
    iosParameters: dart.finalFieldType(dart.legacy(firebase_dynamic_links.IosParameters)),
    itunesConnectAnalyticsParameters: dart.finalFieldType(dart.legacy(firebase_dynamic_links.ItunesConnectAnalyticsParameters)),
    link: dart.finalFieldType(dart.legacy(core.Uri)),
    navigationInfoParameters: dart.finalFieldType(dart.legacy(firebase_dynamic_links.NavigationInfoParameters)),
    socialMetaTagParameters: dart.finalFieldType(dart.legacy(firebase_dynamic_links.SocialMetaTagParameters))
  }));
  var shortUrl$ = dart.privateName(firebase_dynamic_links, "ShortDynamicLink.shortUrl");
  var warnings$ = dart.privateName(firebase_dynamic_links, "ShortDynamicLink.warnings");
  firebase_dynamic_links.ShortDynamicLink = class ShortDynamicLink extends core.Object {
    get shortUrl() {
      return this[shortUrl$];
    }
    set shortUrl(value) {
      super.shortUrl = value;
    }
    get warnings() {
      return this[warnings$];
    }
    set warnings(value) {
      super.warnings = value;
    }
  };
  (firebase_dynamic_links.ShortDynamicLink.__ = function(shortUrl, warnings) {
    this[shortUrl$] = shortUrl;
    this[warnings$] = warnings;
    ;
  }).prototype = firebase_dynamic_links.ShortDynamicLink.prototype;
  dart.addTypeTests(firebase_dynamic_links.ShortDynamicLink);
  dart.addTypeCaches(firebase_dynamic_links.ShortDynamicLink);
  dart.setLibraryUri(firebase_dynamic_links.ShortDynamicLink, L1);
  dart.setFieldSignature(firebase_dynamic_links.ShortDynamicLink, () => ({
    __proto__: dart.getFields(firebase_dynamic_links.ShortDynamicLink.__proto__),
    shortUrl: dart.finalFieldType(dart.legacy(core.Uri)),
    warnings: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String))))
  }));
  var fallbackUrl$ = dart.privateName(firebase_dynamic_links, "AndroidParameters.fallbackUrl");
  var minimumVersion$ = dart.privateName(firebase_dynamic_links, "AndroidParameters.minimumVersion");
  var packageName$ = dart.privateName(firebase_dynamic_links, "AndroidParameters.packageName");
  firebase_dynamic_links.AndroidParameters = class AndroidParameters extends core.Object {
    get fallbackUrl() {
      return this[fallbackUrl$];
    }
    set fallbackUrl(value) {
      super.fallbackUrl = value;
    }
    get minimumVersion() {
      return this[minimumVersion$];
    }
    set minimumVersion(value) {
      super.minimumVersion = value;
    }
    get packageName() {
      return this[packageName$];
    }
    set packageName(value) {
      super.packageName = value;
    }
    get [_data]() {
      let t0;
      return new (IdentityMapOfStringL$dynamic()).from(["fallbackUrl", (t0 = this.fallbackUrl, t0 == null ? null : dart.toString(t0)), "minimumVersion", this.minimumVersion, "packageName", this.packageName]);
    }
  };
  (firebase_dynamic_links.AndroidParameters.new = function(opts) {
    let fallbackUrl = opts && 'fallbackUrl' in opts ? opts.fallbackUrl : null;
    let minimumVersion = opts && 'minimumVersion' in opts ? opts.minimumVersion : null;
    let packageName = opts && 'packageName' in opts ? opts.packageName : null;
    this[fallbackUrl$] = fallbackUrl;
    this[minimumVersion$] = minimumVersion;
    this[packageName$] = packageName;
    if (!(packageName != null)) dart.assertFailed(null, L0, 127, 16, "packageName != null");
    ;
  }).prototype = firebase_dynamic_links.AndroidParameters.prototype;
  dart.addTypeTests(firebase_dynamic_links.AndroidParameters);
  dart.addTypeCaches(firebase_dynamic_links.AndroidParameters);
  dart.setGetterSignature(firebase_dynamic_links.AndroidParameters, () => ({
    __proto__: dart.getGetters(firebase_dynamic_links.AndroidParameters.__proto__),
    [_data]: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))
  }));
  dart.setLibraryUri(firebase_dynamic_links.AndroidParameters, L1);
  dart.setFieldSignature(firebase_dynamic_links.AndroidParameters, () => ({
    __proto__: dart.getFields(firebase_dynamic_links.AndroidParameters.__proto__),
    fallbackUrl: dart.finalFieldType(dart.legacy(core.Uri)),
    minimumVersion: dart.finalFieldType(dart.legacy(core.int)),
    packageName: dart.finalFieldType(dart.legacy(core.String))
  }));
  var _name$ = dart.privateName(firebase_dynamic_links, "_name");
  var C0;
  var C1;
  var C2;
  firebase_dynamic_links.ShortDynamicLinkPathLength = class ShortDynamicLinkPathLength extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (firebase_dynamic_links.ShortDynamicLinkPathLength.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = firebase_dynamic_links.ShortDynamicLinkPathLength.prototype;
  dart.addTypeTests(firebase_dynamic_links.ShortDynamicLinkPathLength);
  dart.addTypeCaches(firebase_dynamic_links.ShortDynamicLinkPathLength);
  dart.setMethodSignature(firebase_dynamic_links.ShortDynamicLinkPathLength, () => ({
    __proto__: dart.getMethods(firebase_dynamic_links.ShortDynamicLinkPathLength.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(firebase_dynamic_links.ShortDynamicLinkPathLength, L1);
  dart.setFieldSignature(firebase_dynamic_links.ShortDynamicLinkPathLength, () => ({
    __proto__: dart.getFields(firebase_dynamic_links.ShortDynamicLinkPathLength.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(firebase_dynamic_links.ShortDynamicLinkPathLength, ['toString']);
  firebase_dynamic_links.ShortDynamicLinkPathLength.unguessable = C0 || CT.C0;
  firebase_dynamic_links.ShortDynamicLinkPathLength.short = C1 || CT.C1;
  firebase_dynamic_links.ShortDynamicLinkPathLength.values = C2 || CT.C2;
  var shortDynamicLinkPathLength$ = dart.privateName(firebase_dynamic_links, "DynamicLinkParametersOptions.shortDynamicLinkPathLength");
  firebase_dynamic_links.DynamicLinkParametersOptions = class DynamicLinkParametersOptions extends core.Object {
    get shortDynamicLinkPathLength() {
      return this[shortDynamicLinkPathLength$];
    }
    set shortDynamicLinkPathLength(value) {
      super.shortDynamicLinkPathLength = value;
    }
    get [_data]() {
      let t0;
      return new (IdentityMapOfStringL$dynamic()).from(["shortDynamicLinkPathLength", (t0 = this.shortDynamicLinkPathLength, t0 == null ? null : t0.index)]);
    }
  };
  (firebase_dynamic_links.DynamicLinkParametersOptions.new = function(opts) {
    let shortDynamicLinkPathLength = opts && 'shortDynamicLinkPathLength' in opts ? opts.shortDynamicLinkPathLength : null;
    this[shortDynamicLinkPathLength$] = shortDynamicLinkPathLength;
    ;
  }).prototype = firebase_dynamic_links.DynamicLinkParametersOptions.prototype;
  dart.addTypeTests(firebase_dynamic_links.DynamicLinkParametersOptions);
  dart.addTypeCaches(firebase_dynamic_links.DynamicLinkParametersOptions);
  dart.setGetterSignature(firebase_dynamic_links.DynamicLinkParametersOptions, () => ({
    __proto__: dart.getGetters(firebase_dynamic_links.DynamicLinkParametersOptions.__proto__),
    [_data]: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))
  }));
  dart.setLibraryUri(firebase_dynamic_links.DynamicLinkParametersOptions, L1);
  dart.setFieldSignature(firebase_dynamic_links.DynamicLinkParametersOptions, () => ({
    __proto__: dart.getFields(firebase_dynamic_links.DynamicLinkParametersOptions.__proto__),
    shortDynamicLinkPathLength: dart.finalFieldType(dart.legacy(firebase_dynamic_links.ShortDynamicLinkPathLength))
  }));
  var campaign$ = dart.privateName(firebase_dynamic_links, "GoogleAnalyticsParameters.campaign");
  var content$ = dart.privateName(firebase_dynamic_links, "GoogleAnalyticsParameters.content");
  var medium$ = dart.privateName(firebase_dynamic_links, "GoogleAnalyticsParameters.medium");
  var source$ = dart.privateName(firebase_dynamic_links, "GoogleAnalyticsParameters.source");
  var term$ = dart.privateName(firebase_dynamic_links, "GoogleAnalyticsParameters.term");
  firebase_dynamic_links.GoogleAnalyticsParameters = class GoogleAnalyticsParameters extends core.Object {
    get campaign() {
      return this[campaign$];
    }
    set campaign(value) {
      super.campaign = value;
    }
    get content() {
      return this[content$];
    }
    set content(value) {
      super.content = value;
    }
    get medium() {
      return this[medium$];
    }
    set medium(value) {
      super.medium = value;
    }
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
    get term() {
      return this[term$];
    }
    set term(value) {
      super.term = value;
    }
    get [_data]() {
      return new (IdentityMapOfStringL$dynamic()).from(["campaign", this.campaign, "content", this.content, "medium", this.medium, "source", this.source, "term", this.term]);
    }
  };
  (firebase_dynamic_links.GoogleAnalyticsParameters.new = function(opts) {
    let campaign = opts && 'campaign' in opts ? opts.campaign : null;
    let content = opts && 'content' in opts ? opts.content : null;
    let medium = opts && 'medium' in opts ? opts.medium : null;
    let source = opts && 'source' in opts ? opts.source : null;
    let term = opts && 'term' in opts ? opts.term : null;
    this[campaign$] = campaign;
    this[content$] = content;
    this[medium$] = medium;
    this[source$] = source;
    this[term$] = term;
    if (!(campaign != null)) dart.assertFailed(null, L0, 175, 16, "campaign != null");
    if (!(medium != null)) dart.assertFailed(null, L0, 176, 16, "medium != null");
    if (!(source != null)) dart.assertFailed(null, L0, 177, 16, "source != null");
    ;
  }).prototype = firebase_dynamic_links.GoogleAnalyticsParameters.prototype;
  (firebase_dynamic_links.GoogleAnalyticsParameters.empty = function() {
    this[campaign$] = null;
    this[content$] = null;
    this[medium$] = null;
    this[source$] = null;
    this[term$] = null;
    ;
  }).prototype = firebase_dynamic_links.GoogleAnalyticsParameters.prototype;
  dart.addTypeTests(firebase_dynamic_links.GoogleAnalyticsParameters);
  dart.addTypeCaches(firebase_dynamic_links.GoogleAnalyticsParameters);
  dart.setGetterSignature(firebase_dynamic_links.GoogleAnalyticsParameters, () => ({
    __proto__: dart.getGetters(firebase_dynamic_links.GoogleAnalyticsParameters.__proto__),
    [_data]: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))
  }));
  dart.setLibraryUri(firebase_dynamic_links.GoogleAnalyticsParameters, L1);
  dart.setFieldSignature(firebase_dynamic_links.GoogleAnalyticsParameters, () => ({
    __proto__: dart.getFields(firebase_dynamic_links.GoogleAnalyticsParameters.__proto__),
    campaign: dart.finalFieldType(dart.legacy(core.String)),
    content: dart.finalFieldType(dart.legacy(core.String)),
    medium: dart.finalFieldType(dart.legacy(core.String)),
    source: dart.finalFieldType(dart.legacy(core.String)),
    term: dart.finalFieldType(dart.legacy(core.String))
  }));
  var appStoreId$ = dart.privateName(firebase_dynamic_links, "IosParameters.appStoreId");
  var bundleId$ = dart.privateName(firebase_dynamic_links, "IosParameters.bundleId");
  var customScheme$ = dart.privateName(firebase_dynamic_links, "IosParameters.customScheme");
  var fallbackUrl$0 = dart.privateName(firebase_dynamic_links, "IosParameters.fallbackUrl");
  var ipadBundleId$ = dart.privateName(firebase_dynamic_links, "IosParameters.ipadBundleId");
  var ipadFallbackUrl$ = dart.privateName(firebase_dynamic_links, "IosParameters.ipadFallbackUrl");
  var minimumVersion$0 = dart.privateName(firebase_dynamic_links, "IosParameters.minimumVersion");
  firebase_dynamic_links.IosParameters = class IosParameters extends core.Object {
    get appStoreId() {
      return this[appStoreId$];
    }
    set appStoreId(value) {
      super.appStoreId = value;
    }
    get bundleId() {
      return this[bundleId$];
    }
    set bundleId(value) {
      super.bundleId = value;
    }
    get customScheme() {
      return this[customScheme$];
    }
    set customScheme(value) {
      super.customScheme = value;
    }
    get fallbackUrl() {
      return this[fallbackUrl$0];
    }
    set fallbackUrl(value) {
      super.fallbackUrl = value;
    }
    get ipadBundleId() {
      return this[ipadBundleId$];
    }
    set ipadBundleId(value) {
      super.ipadBundleId = value;
    }
    get ipadFallbackUrl() {
      return this[ipadFallbackUrl$];
    }
    set ipadFallbackUrl(value) {
      super.ipadFallbackUrl = value;
    }
    get minimumVersion() {
      return this[minimumVersion$0];
    }
    set minimumVersion(value) {
      super.minimumVersion = value;
    }
    get [_data]() {
      let t0, t0$;
      return new (IdentityMapOfStringL$dynamic()).from(["appStoreId", this.appStoreId, "bundleId", this.bundleId, "customScheme", this.customScheme, "fallbackUrl", (t0 = this.fallbackUrl, t0 == null ? null : dart.toString(t0)), "ipadBundleId", this.ipadBundleId, "ipadFallbackUrl", (t0$ = this.ipadFallbackUrl, t0$ == null ? null : dart.toString(t0$)), "minimumVersion", this.minimumVersion]);
    }
  };
  (firebase_dynamic_links.IosParameters.new = function(opts) {
    let appStoreId = opts && 'appStoreId' in opts ? opts.appStoreId : null;
    let bundleId = opts && 'bundleId' in opts ? opts.bundleId : null;
    let customScheme = opts && 'customScheme' in opts ? opts.customScheme : null;
    let fallbackUrl = opts && 'fallbackUrl' in opts ? opts.fallbackUrl : null;
    let ipadBundleId = opts && 'ipadBundleId' in opts ? opts.ipadBundleId : null;
    let ipadFallbackUrl = opts && 'ipadFallbackUrl' in opts ? opts.ipadFallbackUrl : null;
    let minimumVersion = opts && 'minimumVersion' in opts ? opts.minimumVersion : null;
    this[appStoreId$] = appStoreId;
    this[bundleId$] = bundleId;
    this[customScheme$] = customScheme;
    this[fallbackUrl$0] = fallbackUrl;
    this[ipadBundleId$] = ipadBundleId;
    this[ipadFallbackUrl$] = ipadFallbackUrl;
    this[minimumVersion$0] = minimumVersion;
    if (!(bundleId != null)) dart.assertFailed(null, L0, 220, 15, "bundleId != null");
    ;
  }).prototype = firebase_dynamic_links.IosParameters.prototype;
  dart.addTypeTests(firebase_dynamic_links.IosParameters);
  dart.addTypeCaches(firebase_dynamic_links.IosParameters);
  dart.setGetterSignature(firebase_dynamic_links.IosParameters, () => ({
    __proto__: dart.getGetters(firebase_dynamic_links.IosParameters.__proto__),
    [_data]: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))
  }));
  dart.setLibraryUri(firebase_dynamic_links.IosParameters, L1);
  dart.setFieldSignature(firebase_dynamic_links.IosParameters, () => ({
    __proto__: dart.getFields(firebase_dynamic_links.IosParameters.__proto__),
    appStoreId: dart.finalFieldType(dart.legacy(core.String)),
    bundleId: dart.finalFieldType(dart.legacy(core.String)),
    customScheme: dart.finalFieldType(dart.legacy(core.String)),
    fallbackUrl: dart.finalFieldType(dart.legacy(core.Uri)),
    ipadBundleId: dart.finalFieldType(dart.legacy(core.String)),
    ipadFallbackUrl: dart.finalFieldType(dart.legacy(core.Uri)),
    minimumVersion: dart.finalFieldType(dart.legacy(core.String))
  }));
  var affiliateToken$ = dart.privateName(firebase_dynamic_links, "ItunesConnectAnalyticsParameters.affiliateToken");
  var campaignToken$ = dart.privateName(firebase_dynamic_links, "ItunesConnectAnalyticsParameters.campaignToken");
  var providerToken$ = dart.privateName(firebase_dynamic_links, "ItunesConnectAnalyticsParameters.providerToken");
  firebase_dynamic_links.ItunesConnectAnalyticsParameters = class ItunesConnectAnalyticsParameters extends core.Object {
    get affiliateToken() {
      return this[affiliateToken$];
    }
    set affiliateToken(value) {
      super.affiliateToken = value;
    }
    get campaignToken() {
      return this[campaignToken$];
    }
    set campaignToken(value) {
      super.campaignToken = value;
    }
    get providerToken() {
      return this[providerToken$];
    }
    set providerToken(value) {
      super.providerToken = value;
    }
    get [_data]() {
      return new (IdentityMapOfStringL$dynamic()).from(["affiliateToken", this.affiliateToken, "campaignToken", this.campaignToken, "providerToken", this.providerToken]);
    }
  };
  (firebase_dynamic_links.ItunesConnectAnalyticsParameters.new = function(opts) {
    let affiliateToken = opts && 'affiliateToken' in opts ? opts.affiliateToken : null;
    let campaignToken = opts && 'campaignToken' in opts ? opts.campaignToken : null;
    let providerToken = opts && 'providerToken' in opts ? opts.providerToken : null;
    this[affiliateToken$] = affiliateToken;
    this[campaignToken$] = campaignToken;
    this[providerToken$] = providerToken;
    ;
  }).prototype = firebase_dynamic_links.ItunesConnectAnalyticsParameters.prototype;
  dart.addTypeTests(firebase_dynamic_links.ItunesConnectAnalyticsParameters);
  dart.addTypeCaches(firebase_dynamic_links.ItunesConnectAnalyticsParameters);
  dart.setGetterSignature(firebase_dynamic_links.ItunesConnectAnalyticsParameters, () => ({
    __proto__: dart.getGetters(firebase_dynamic_links.ItunesConnectAnalyticsParameters.__proto__),
    [_data]: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))
  }));
  dart.setLibraryUri(firebase_dynamic_links.ItunesConnectAnalyticsParameters, L1);
  dart.setFieldSignature(firebase_dynamic_links.ItunesConnectAnalyticsParameters, () => ({
    __proto__: dart.getFields(firebase_dynamic_links.ItunesConnectAnalyticsParameters.__proto__),
    affiliateToken: dart.finalFieldType(dart.legacy(core.String)),
    campaignToken: dart.finalFieldType(dart.legacy(core.String)),
    providerToken: dart.finalFieldType(dart.legacy(core.String))
  }));
  var forcedRedirectEnabled$ = dart.privateName(firebase_dynamic_links, "NavigationInfoParameters.forcedRedirectEnabled");
  firebase_dynamic_links.NavigationInfoParameters = class NavigationInfoParameters extends core.Object {
    get forcedRedirectEnabled() {
      return this[forcedRedirectEnabled$];
    }
    set forcedRedirectEnabled(value) {
      super.forcedRedirectEnabled = value;
    }
    get [_data]() {
      return new (IdentityMapOfStringL$dynamic()).from(["forcedRedirectEnabled", this.forcedRedirectEnabled]);
    }
  };
  (firebase_dynamic_links.NavigationInfoParameters.new = function(opts) {
    let forcedRedirectEnabled = opts && 'forcedRedirectEnabled' in opts ? opts.forcedRedirectEnabled : null;
    this[forcedRedirectEnabled$] = forcedRedirectEnabled;
    ;
  }).prototype = firebase_dynamic_links.NavigationInfoParameters.prototype;
  dart.addTypeTests(firebase_dynamic_links.NavigationInfoParameters);
  dart.addTypeCaches(firebase_dynamic_links.NavigationInfoParameters);
  dart.setGetterSignature(firebase_dynamic_links.NavigationInfoParameters, () => ({
    __proto__: dart.getGetters(firebase_dynamic_links.NavigationInfoParameters.__proto__),
    [_data]: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))
  }));
  dart.setLibraryUri(firebase_dynamic_links.NavigationInfoParameters, L1);
  dart.setFieldSignature(firebase_dynamic_links.NavigationInfoParameters, () => ({
    __proto__: dart.getFields(firebase_dynamic_links.NavigationInfoParameters.__proto__),
    forcedRedirectEnabled: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var description$ = dart.privateName(firebase_dynamic_links, "SocialMetaTagParameters.description");
  var imageUrl$ = dart.privateName(firebase_dynamic_links, "SocialMetaTagParameters.imageUrl");
  var title$ = dart.privateName(firebase_dynamic_links, "SocialMetaTagParameters.title");
  firebase_dynamic_links.SocialMetaTagParameters = class SocialMetaTagParameters extends core.Object {
    get description() {
      return this[description$];
    }
    set description(value) {
      super.description = value;
    }
    get imageUrl() {
      return this[imageUrl$];
    }
    set imageUrl(value) {
      super.imageUrl = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get [_data]() {
      let t0;
      return new (IdentityMapOfStringL$dynamic()).from(["description", this.description, "imageUrl", (t0 = this.imageUrl, t0 == null ? null : dart.toString(t0)), "title", this.title]);
    }
  };
  (firebase_dynamic_links.SocialMetaTagParameters.new = function(opts) {
    let description = opts && 'description' in opts ? opts.description : null;
    let imageUrl = opts && 'imageUrl' in opts ? opts.imageUrl : null;
    let title = opts && 'title' in opts ? opts.title : null;
    this[description$] = description;
    this[imageUrl$] = imageUrl;
    this[title$] = title;
    ;
  }).prototype = firebase_dynamic_links.SocialMetaTagParameters.prototype;
  dart.addTypeTests(firebase_dynamic_links.SocialMetaTagParameters);
  dart.addTypeCaches(firebase_dynamic_links.SocialMetaTagParameters);
  dart.setGetterSignature(firebase_dynamic_links.SocialMetaTagParameters, () => ({
    __proto__: dart.getGetters(firebase_dynamic_links.SocialMetaTagParameters.__proto__),
    [_data]: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))
  }));
  dart.setLibraryUri(firebase_dynamic_links.SocialMetaTagParameters, L1);
  dart.setFieldSignature(firebase_dynamic_links.SocialMetaTagParameters, () => ({
    __proto__: dart.getFields(firebase_dynamic_links.SocialMetaTagParameters.__proto__),
    description: dart.finalFieldType(dart.legacy(core.String)),
    imageUrl: dart.finalFieldType(dart.legacy(core.Uri)),
    title: dart.finalFieldType(dart.legacy(core.String))
  }));
  var _onLinkSuccess = dart.privateName(firebase_dynamic_links, "_onLinkSuccess");
  var _onLinkError = dart.privateName(firebase_dynamic_links, "_onLinkError");
  var _handleMethod = dart.privateName(firebase_dynamic_links, "_handleMethod");
  var MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  var C5;
  var StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  var C4;
  var MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  var MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  var C3;
  firebase_dynamic_links.FirebaseDynamicLinks = class FirebaseDynamicLinks extends core.Object {
    getInitialLink() {
      return async.async(PendingDynamicLinkDataL(), (function* getInitialLink() {
        let linkData = (yield firebase_dynamic_links.FirebaseDynamicLinks.channel.invokeMapMethod(StringL(), dart.dynamic, "FirebaseDynamicLinks#getInitialLink"));
        return this.getPendingDynamicLinkDataFromMap(linkData);
      }).bind(this));
    }
    getDynamicLink(url) {
      return async.async(PendingDynamicLinkDataL(), (function* getDynamicLink() {
        let linkData = (yield firebase_dynamic_links.FirebaseDynamicLinks.channel.invokeMapMethod(StringL(), dart.dynamic, "FirebaseDynamicLinks#getDynamicLink", new (IdentityMapOfStringL$dynamic()).from(["url", dart.toString(url)])));
        return this.getPendingDynamicLinkDataFromMap(linkData);
      }).bind(this));
    }
    getPendingDynamicLinkDataFromMap(linkData) {
      if (linkData == null) return null;
      let link = linkData[$_get]("link");
      if (link == null) return null;
      let androidData = null;
      if (linkData[$_get]("android") != null) {
        let data = MapL().as(linkData[$_get]("android"));
        androidData = new firebase_dynamic_links.PendingDynamicLinkDataAndroid.__(intL().as(data[$_get]("clickTimestamp")), intL().as(data[$_get]("minimumVersion")));
      }
      let iosData = null;
      if (linkData[$_get]("ios") != null) {
        let data = MapL().as(linkData[$_get]("ios"));
        iosData = new firebase_dynamic_links.PendingDynamicLinkDataIOS.__(StringL().as(data[$_get]("minimumVersion")));
      }
      return new firebase_dynamic_links.PendingDynamicLinkData.__(core.Uri.parse(core.String.as(link)), androidData, iosData);
    }
    onLink(opts) {
      let onSuccess = opts && 'onSuccess' in opts ? opts.onSuccess : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      this[_onLinkSuccess] = onSuccess;
      this[_onLinkError] = onError;
      firebase_dynamic_links.FirebaseDynamicLinks.channel.setMethodCallHandler(dart.bind(this, _handleMethod));
    }
    [_handleMethod](call) {
      return async.async(dart.dynamic, (function* _handleMethod() {
        let t0, t0$;
        switch (call.method) {
          case "onLinkSuccess":
          {
            let linkData = null;
            if (call.arguments != null) {
              let data = MapL().as(dart.dgsend(call.arguments, [dart.dynamic, dart.dynamic], 'cast', []));
              linkData = this.getPendingDynamicLinkDataFromMap(data);
            }
            t0 = linkData;
            return this[_onLinkSuccess](t0);
          }
          case "onLinkError":
          {
            let data = MapL().as(dart.dgsend(call.arguments, [dart.dynamic, dart.dynamic], 'cast', []));
            let e = new firebase_dynamic_links.OnLinkErrorException.__(StringL().as(data[$_get]("code")), StringL().as(data[$_get]("message")), data[$_get]("details"));
            t0$ = e;
            return this[_onLinkError](t0$);
          }
        }
      }).bind(this));
    }
  };
  (firebase_dynamic_links.FirebaseDynamicLinks.__ = function() {
    this[_onLinkSuccess] = null;
    this[_onLinkError] = null;
    ;
  }).prototype = firebase_dynamic_links.FirebaseDynamicLinks.prototype;
  dart.addTypeTests(firebase_dynamic_links.FirebaseDynamicLinks);
  dart.addTypeCaches(firebase_dynamic_links.FirebaseDynamicLinks);
  dart.setMethodSignature(firebase_dynamic_links.FirebaseDynamicLinks, () => ({
    __proto__: dart.getMethods(firebase_dynamic_links.FirebaseDynamicLinks.__proto__),
    getInitialLink: dart.fnType(dart.legacy(async.Future$(dart.legacy(firebase_dynamic_links.PendingDynamicLinkData))), []),
    getDynamicLink: dart.fnType(dart.legacy(async.Future$(dart.legacy(firebase_dynamic_links.PendingDynamicLinkData))), [dart.legacy(core.Uri)]),
    getPendingDynamicLinkDataFromMap: dart.fnType(dart.legacy(firebase_dynamic_links.PendingDynamicLinkData), [dart.legacy(core.Map)]),
    onLink: dart.fnType(dart.void, [], {onError: dart.legacy(dart.fnType(dart.legacy(async.Future), [dart.legacy(firebase_dynamic_links.OnLinkErrorException)])), onSuccess: dart.legacy(dart.fnType(dart.legacy(async.Future), [dart.legacy(firebase_dynamic_links.PendingDynamicLinkData)]))}, {}),
    [_handleMethod]: dart.fnType(dart.legacy(async.Future), [dart.legacy(message_codec.MethodCall)])
  }));
  dart.setLibraryUri(firebase_dynamic_links.FirebaseDynamicLinks, L1);
  dart.setFieldSignature(firebase_dynamic_links.FirebaseDynamicLinks, () => ({
    __proto__: dart.getFields(firebase_dynamic_links.FirebaseDynamicLinks.__proto__),
    [_onLinkSuccess]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(async.Future), [dart.legacy(firebase_dynamic_links.PendingDynamicLinkData)]))),
    [_onLinkError]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(async.Future), [dart.legacy(firebase_dynamic_links.OnLinkErrorException)])))
  }));
  dart.defineLazy(firebase_dynamic_links.FirebaseDynamicLinks, {
    /*firebase_dynamic_links.FirebaseDynamicLinks.channel*/get channel() {
      return C3 || CT.C3;
    },
    /*firebase_dynamic_links.FirebaseDynamicLinks.instance*/get instance() {
      return new firebase_dynamic_links.FirebaseDynamicLinks.__();
    }
  }, true);
  var android$ = dart.privateName(firebase_dynamic_links, "PendingDynamicLinkData.android");
  var ios$ = dart.privateName(firebase_dynamic_links, "PendingDynamicLinkData.ios");
  var link$0 = dart.privateName(firebase_dynamic_links, "PendingDynamicLinkData.link");
  firebase_dynamic_links.PendingDynamicLinkData = class PendingDynamicLinkData extends core.Object {
    get android() {
      return this[android$];
    }
    set android(value) {
      super.android = value;
    }
    get ios() {
      return this[ios$];
    }
    set ios(value) {
      super.ios = value;
    }
    get link() {
      return this[link$0];
    }
    set link(value) {
      super.link = value;
    }
  };
  (firebase_dynamic_links.PendingDynamicLinkData.__ = function(link, android, ios) {
    this[link$0] = link;
    this[android$] = android;
    this[ios$] = ios;
    ;
  }).prototype = firebase_dynamic_links.PendingDynamicLinkData.prototype;
  dart.addTypeTests(firebase_dynamic_links.PendingDynamicLinkData);
  dart.addTypeCaches(firebase_dynamic_links.PendingDynamicLinkData);
  dart.setLibraryUri(firebase_dynamic_links.PendingDynamicLinkData, L1);
  dart.setFieldSignature(firebase_dynamic_links.PendingDynamicLinkData, () => ({
    __proto__: dart.getFields(firebase_dynamic_links.PendingDynamicLinkData.__proto__),
    android: dart.finalFieldType(dart.legacy(firebase_dynamic_links.PendingDynamicLinkDataAndroid)),
    ios: dart.finalFieldType(dart.legacy(firebase_dynamic_links.PendingDynamicLinkDataIOS)),
    link: dart.finalFieldType(dart.legacy(core.Uri))
  }));
  var clickTimestamp$ = dart.privateName(firebase_dynamic_links, "PendingDynamicLinkDataAndroid.clickTimestamp");
  var minimumVersion$1 = dart.privateName(firebase_dynamic_links, "PendingDynamicLinkDataAndroid.minimumVersion");
  firebase_dynamic_links.PendingDynamicLinkDataAndroid = class PendingDynamicLinkDataAndroid extends core.Object {
    get clickTimestamp() {
      return this[clickTimestamp$];
    }
    set clickTimestamp(value) {
      super.clickTimestamp = value;
    }
    get minimumVersion() {
      return this[minimumVersion$1];
    }
    set minimumVersion(value) {
      super.minimumVersion = value;
    }
  };
  (firebase_dynamic_links.PendingDynamicLinkDataAndroid.__ = function(clickTimestamp, minimumVersion) {
    this[clickTimestamp$] = clickTimestamp;
    this[minimumVersion$1] = minimumVersion;
    ;
  }).prototype = firebase_dynamic_links.PendingDynamicLinkDataAndroid.prototype;
  dart.addTypeTests(firebase_dynamic_links.PendingDynamicLinkDataAndroid);
  dart.addTypeCaches(firebase_dynamic_links.PendingDynamicLinkDataAndroid);
  dart.setLibraryUri(firebase_dynamic_links.PendingDynamicLinkDataAndroid, L1);
  dart.setFieldSignature(firebase_dynamic_links.PendingDynamicLinkDataAndroid, () => ({
    __proto__: dart.getFields(firebase_dynamic_links.PendingDynamicLinkDataAndroid.__proto__),
    clickTimestamp: dart.finalFieldType(dart.legacy(core.int)),
    minimumVersion: dart.finalFieldType(dart.legacy(core.int))
  }));
  var minimumVersion$2 = dart.privateName(firebase_dynamic_links, "PendingDynamicLinkDataIOS.minimumVersion");
  firebase_dynamic_links.PendingDynamicLinkDataIOS = class PendingDynamicLinkDataIOS extends core.Object {
    get minimumVersion() {
      return this[minimumVersion$2];
    }
    set minimumVersion(value) {
      super.minimumVersion = value;
    }
  };
  (firebase_dynamic_links.PendingDynamicLinkDataIOS.__ = function(minimumVersion) {
    this[minimumVersion$2] = minimumVersion;
    ;
  }).prototype = firebase_dynamic_links.PendingDynamicLinkDataIOS.prototype;
  dart.addTypeTests(firebase_dynamic_links.PendingDynamicLinkDataIOS);
  dart.addTypeCaches(firebase_dynamic_links.PendingDynamicLinkDataIOS);
  dart.setLibraryUri(firebase_dynamic_links.PendingDynamicLinkDataIOS, L1);
  dart.setFieldSignature(firebase_dynamic_links.PendingDynamicLinkDataIOS, () => ({
    __proto__: dart.getFields(firebase_dynamic_links.PendingDynamicLinkDataIOS.__proto__),
    minimumVersion: dart.finalFieldType(dart.legacy(core.String))
  }));
  firebase_dynamic_links.OnLinkErrorException = class OnLinkErrorException extends message_codec.PlatformException {};
  (firebase_dynamic_links.OnLinkErrorException.__ = function(code, message, details) {
    firebase_dynamic_links.OnLinkErrorException.__proto__.new.call(this, {code: code, message: message, details: details});
    ;
  }).prototype = firebase_dynamic_links.OnLinkErrorException.prototype;
  dart.addTypeTests(firebase_dynamic_links.OnLinkErrorException);
  dart.addTypeCaches(firebase_dynamic_links.OnLinkErrorException);
  dart.setLibraryUri(firebase_dynamic_links.OnLinkErrorException, L1);
  dart.trackLibraries("packages/firebase_dynamic_links/firebase_dynamic_links.dart", {
    "package:firebase_dynamic_links/firebase_dynamic_links.dart": firebase_dynamic_links
  }, {
    "package:firebase_dynamic_links/firebase_dynamic_links.dart": ["src/dynamic_link_parameters.dart", "src/firebase_dynamic_links.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/dynamic_link_parameters.dart","src/firebase_dynamic_links.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/firebase_dynamic_links/firebase_dynamic_links.dart.lib.js"}');
  // Exports:
  return {
    firebase_dynamic_links: firebase_dynamic_links
  };
}));

//# sourceMappingURL=firebase_dynamic_links.dart.lib.js.map
