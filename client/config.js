System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system",
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "app-build": [
      "github:twbs/bootstrap@3.3.5/css/bootstrap.css!github:systemjs/plugin-text@0.0.2",
      "nav-bar.html!github:systemjs/plugin-text@0.0.2",
      "locations.html!github:systemjs/plugin-text@0.0.2",
      "location.html!github:systemjs/plugin-text@0.0.2",
      "home.html!github:systemjs/plugin-text@0.0.2",
      "app.html!github:systemjs/plugin-text@0.0.2",
      "main",
      "github:twbs/bootstrap@3.3.5",
      "github:twbs/bootstrap@3.3.5/js/bootstrap",
      "github:components/jquery@2.1.4",
      "github:components/jquery@2.1.4/jquery",
      "locations",
      "github:aurelia/framework@0.17.0",
      "github:aurelia/fetch-client@0.3.0",
      "github:github/fetch@0.9.0",
      "github:aurelia/framework@0.17.0/aurelia-framework",
      "github:aurelia/fetch-client@0.3.0/aurelia-fetch-client",
      "github:github/fetch@0.9.0/fetch",
      "npm:core-js@0.9.18",
      "github:aurelia/logging@0.8.0",
      "github:aurelia/templating@0.16.0",
      "github:aurelia/path@0.10.0",
      "github:aurelia/dependency-injection@0.11.2",
      "github:aurelia/loader@0.10.0",
      "github:aurelia/pal@0.2.0",
      "github:aurelia/binding@0.10.2",
      "github:aurelia/metadata@0.9.0",
      "github:aurelia/task-queue@0.8.0",
      "npm:core-js@0.9.18/index",
      "github:aurelia/logging@0.8.0/aurelia-logging",
      "github:aurelia/templating@0.16.0/aurelia-templating",
      "github:aurelia/path@0.10.0/aurelia-path",
      "github:aurelia/dependency-injection@0.11.2/aurelia-dependency-injection",
      "github:aurelia/loader@0.10.0/aurelia-loader",
      "github:aurelia/pal@0.2.0/aurelia-pal",
      "github:aurelia/binding@0.10.2/aurelia-binding",
      "github:aurelia/metadata@0.9.0/aurelia-metadata",
      "github:aurelia/task-queue@0.8.0/aurelia-task-queue",
      "npm:core-js@0.9.18/shim",
      "npm:core-js@0.9.18/modules/core.dict",
      "npm:core-js@0.9.18/modules/core.iter-helpers",
      "npm:core-js@0.9.18/modules/core.$for",
      "npm:core-js@0.9.18/modules/core.delay",
      "npm:core-js@0.9.18/modules/core.function.part",
      "npm:core-js@0.9.18/modules/core.object",
      "npm:core-js@0.9.18/modules/core.array.turn",
      "npm:core-js@0.9.18/modules/core.number.iterator",
      "npm:core-js@0.9.18/modules/core.number.math",
      "npm:core-js@0.9.18/modules/core.string.escape-html",
      "npm:core-js@0.9.18/modules/core.date",
      "npm:core-js@0.9.18/modules/core.global",
      "npm:core-js@0.9.18/modules/core.log",
      "npm:core-js@0.9.18/modules/$",
      "npm:core-js@0.9.18/modules/es5",
      "npm:core-js@0.9.18/modules/es6.symbol",
      "npm:core-js@0.9.18/modules/es6.object.assign",
      "npm:core-js@0.9.18/modules/es6.object.is",
      "npm:core-js@0.9.18/modules/es6.object.set-prototype-of",
      "npm:core-js@0.9.18/modules/es6.object.to-string",
      "npm:core-js@0.9.18/modules/es6.object.statics-accept-primitives",
      "npm:core-js@0.9.18/modules/es6.function.name",
      "npm:core-js@0.9.18/modules/es6.function.has-instance",
      "npm:core-js@0.9.18/modules/es6.number.constructor",
      "npm:core-js@0.9.18/modules/es6.number.statics",
      "npm:core-js@0.9.18/modules/es6.math",
      "npm:core-js@0.9.18/modules/es6.string.from-code-point",
      "npm:core-js@0.9.18/modules/es6.string.raw",
      "npm:core-js@0.9.18/modules/es6.string.iterator",
      "npm:core-js@0.9.18/modules/es6.string.code-point-at",
      "npm:core-js@0.9.18/modules/es6.string.ends-with",
      "npm:core-js@0.9.18/modules/es6.string.includes",
      "npm:core-js@0.9.18/modules/es6.string.repeat",
      "npm:core-js@0.9.18/modules/es6.string.starts-with",
      "npm:core-js@0.9.18/modules/es6.array.from",
      "npm:core-js@0.9.18/modules/es6.array.of",
      "npm:core-js@0.9.18/modules/es6.array.iterator",
      "npm:core-js@0.9.18/modules/es6.array.species",
      "npm:core-js@0.9.18/modules/es6.array.copy-within",
      "npm:core-js@0.9.18/modules/es6.array.fill",
      "npm:core-js@0.9.18/modules/es6.array.find",
      "npm:core-js@0.9.18/modules/es6.array.find-index",
      "npm:core-js@0.9.18/modules/es6.regexp",
      "npm:core-js@0.9.18/modules/es6.promise",
      "npm:core-js@0.9.18/modules/es6.map",
      "npm:core-js@0.9.18/modules/es6.set",
      "npm:core-js@0.9.18/modules/es6.weak-map",
      "npm:core-js@0.9.18/modules/es6.weak-set",
      "npm:core-js@0.9.18/modules/es6.reflect",
      "npm:core-js@0.9.18/modules/es7.array.includes",
      "npm:core-js@0.9.18/modules/es7.string.at",
      "npm:core-js@0.9.18/modules/es7.string.lpad",
      "npm:core-js@0.9.18/modules/es7.string.rpad",
      "npm:core-js@0.9.18/modules/es7.regexp.escape",
      "npm:core-js@0.9.18/modules/es7.object.get-own-property-descriptors",
      "npm:core-js@0.9.18/modules/es7.object.to-array",
      "npm:core-js@0.9.18/modules/es7.map.to-json",
      "npm:core-js@0.9.18/modules/es7.set.to-json",
      "npm:core-js@0.9.18/modules/js.array.statics",
      "npm:core-js@0.9.18/modules/web.timers",
      "npm:core-js@0.9.18/modules/web.immediate",
      "npm:core-js@0.9.18/modules/web.dom.iterable",
      "npm:core-js@0.9.18/modules/$.ctx",
      "npm:core-js@0.9.18/modules/$.def",
      "npm:core-js@0.9.18/modules/$.assign",
      "npm:core-js@0.9.18/modules/$.keyof",
      "npm:core-js@0.9.18/modules/$.uid",
      "npm:core-js@0.9.18/modules/$.assert",
      "npm:core-js@0.9.18/modules/$.iter",
      "npm:core-js@0.9.18/modules/$.for-of",
      "npm:core-js@0.9.18/modules/$.iter-call",
      "npm:core-js@0.9.18/modules/$.mix",
      "npm:core-js@0.9.18/modules/$.partial",
      "npm:core-js@0.9.18/modules/$.own-keys",
      "npm:core-js@0.9.18/modules/$.cof",
      "npm:core-js@0.9.18/modules/$.unscope",
      "npm:core-js@0.9.18/modules/$.iter-define",
      "npm:core-js@0.9.18/modules/$.invoke",
      "npm:core-js@0.9.18/modules/$.replacer",
      "npm:core-js@0.9.18/modules/$.fw",
      "npm:core-js@0.9.18/modules/$.dom-create",
      "npm:core-js@0.9.18/modules/$.array-methods",
      "npm:core-js@0.9.18/modules/$.array-includes",
      "npm:core-js@0.9.18/modules/$.throws",
      "npm:core-js@0.9.18/modules/$.shared",
      "npm:core-js@0.9.18/modules/$.redef",
      "npm:core-js@0.9.18/modules/$.enum-keys",
      "npm:core-js@0.9.18/modules/$.get-names",
      "npm:core-js@0.9.18/modules/$.wks",
      "npm:core-js@0.9.18/modules/$.same",
      "npm:core-js@0.9.18/modules/$.set-proto",
      "npm:core-js@0.9.18/modules/$.string-at",
      "npm:core-js@0.9.18/modules/$.string-repeat",
      "npm:core-js@0.9.18/modules/$.iter-detect",
      "npm:core-js@0.9.18/modules/$.species",
      "npm:core-js@0.9.18/modules/$.task",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:core-js@0.9.18/modules/$.collection-strong",
      "npm:core-js@0.9.18/modules/$.collection",
      "npm:core-js@0.9.18/modules/$.collection-weak",
      "npm:core-js@0.9.18/modules/$.string-pad",
      "npm:core-js@0.9.18/modules/$.collection-to-json",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser",
      "location",
      "home",
      "app"
    ],
    "aurelia": [
      "github:aurelia/logging-console@0.8.0",
      "github:aurelia/logging-console@0.8.0/aurelia-logging-console",
      "github:aurelia/pal@0.2.0",
      "github:aurelia/logging@0.8.0",
      "github:aurelia/pal@0.2.0/aurelia-pal",
      "github:aurelia/logging@0.8.0/aurelia-logging",
      "github:aurelia/history-browser@0.9.0",
      "github:aurelia/history-browser@0.9.0/aurelia-history-browser",
      "npm:core-js@0.9.18",
      "github:aurelia/history@0.8.0",
      "npm:core-js@0.9.18/index",
      "github:aurelia/history@0.8.0/aurelia-history",
      "npm:core-js@0.9.18/shim",
      "npm:core-js@0.9.18/modules/core.dict",
      "npm:core-js@0.9.18/modules/core.iter-helpers",
      "npm:core-js@0.9.18/modules/core.$for",
      "npm:core-js@0.9.18/modules/core.delay",
      "npm:core-js@0.9.18/modules/core.function.part",
      "npm:core-js@0.9.18/modules/core.object",
      "npm:core-js@0.9.18/modules/core.array.turn",
      "npm:core-js@0.9.18/modules/core.number.iterator",
      "npm:core-js@0.9.18/modules/core.number.math",
      "npm:core-js@0.9.18/modules/core.string.escape-html",
      "npm:core-js@0.9.18/modules/core.date",
      "npm:core-js@0.9.18/modules/core.global",
      "npm:core-js@0.9.18/modules/core.log",
      "npm:core-js@0.9.18/modules/$",
      "npm:core-js@0.9.18/modules/es5",
      "npm:core-js@0.9.18/modules/es6.symbol",
      "npm:core-js@0.9.18/modules/es6.object.assign",
      "npm:core-js@0.9.18/modules/es6.object.is",
      "npm:core-js@0.9.18/modules/es6.object.set-prototype-of",
      "npm:core-js@0.9.18/modules/es6.object.to-string",
      "npm:core-js@0.9.18/modules/es6.object.statics-accept-primitives",
      "npm:core-js@0.9.18/modules/es6.function.name",
      "npm:core-js@0.9.18/modules/es6.function.has-instance",
      "npm:core-js@0.9.18/modules/es6.number.constructor",
      "npm:core-js@0.9.18/modules/es6.number.statics",
      "npm:core-js@0.9.18/modules/es6.math",
      "npm:core-js@0.9.18/modules/es6.string.from-code-point",
      "npm:core-js@0.9.18/modules/es6.string.raw",
      "npm:core-js@0.9.18/modules/es6.string.iterator",
      "npm:core-js@0.9.18/modules/es6.string.code-point-at",
      "npm:core-js@0.9.18/modules/es6.string.ends-with",
      "npm:core-js@0.9.18/modules/es6.string.includes",
      "npm:core-js@0.9.18/modules/es6.string.repeat",
      "npm:core-js@0.9.18/modules/es6.string.starts-with",
      "npm:core-js@0.9.18/modules/es6.array.from",
      "npm:core-js@0.9.18/modules/es6.array.of",
      "npm:core-js@0.9.18/modules/es6.array.iterator",
      "npm:core-js@0.9.18/modules/es6.array.species",
      "npm:core-js@0.9.18/modules/es6.array.copy-within",
      "npm:core-js@0.9.18/modules/es6.array.fill",
      "npm:core-js@0.9.18/modules/es6.array.find",
      "npm:core-js@0.9.18/modules/es6.array.find-index",
      "npm:core-js@0.9.18/modules/es6.regexp",
      "npm:core-js@0.9.18/modules/es6.promise",
      "npm:core-js@0.9.18/modules/es6.map",
      "npm:core-js@0.9.18/modules/es6.set",
      "npm:core-js@0.9.18/modules/es6.weak-map",
      "npm:core-js@0.9.18/modules/es6.weak-set",
      "npm:core-js@0.9.18/modules/es6.reflect",
      "npm:core-js@0.9.18/modules/es7.array.includes",
      "npm:core-js@0.9.18/modules/es7.string.at",
      "npm:core-js@0.9.18/modules/es7.string.lpad",
      "npm:core-js@0.9.18/modules/es7.string.rpad",
      "npm:core-js@0.9.18/modules/es7.regexp.escape",
      "npm:core-js@0.9.18/modules/es7.object.get-own-property-descriptors",
      "npm:core-js@0.9.18/modules/es7.object.to-array",
      "npm:core-js@0.9.18/modules/es7.map.to-json",
      "npm:core-js@0.9.18/modules/es7.set.to-json",
      "npm:core-js@0.9.18/modules/js.array.statics",
      "npm:core-js@0.9.18/modules/web.timers",
      "npm:core-js@0.9.18/modules/web.immediate",
      "npm:core-js@0.9.18/modules/web.dom.iterable",
      "npm:core-js@0.9.18/modules/$.ctx",
      "npm:core-js@0.9.18/modules/$.def",
      "npm:core-js@0.9.18/modules/$.assign",
      "npm:core-js@0.9.18/modules/$.keyof",
      "npm:core-js@0.9.18/modules/$.uid",
      "npm:core-js@0.9.18/modules/$.assert",
      "npm:core-js@0.9.18/modules/$.iter",
      "npm:core-js@0.9.18/modules/$.for-of",
      "npm:core-js@0.9.18/modules/$.iter-call",
      "npm:core-js@0.9.18/modules/$.mix",
      "npm:core-js@0.9.18/modules/$.partial",
      "npm:core-js@0.9.18/modules/$.own-keys",
      "npm:core-js@0.9.18/modules/$.cof",
      "npm:core-js@0.9.18/modules/$.unscope",
      "npm:core-js@0.9.18/modules/$.iter-define",
      "npm:core-js@0.9.18/modules/$.invoke",
      "npm:core-js@0.9.18/modules/$.replacer",
      "npm:core-js@0.9.18/modules/$.fw",
      "npm:core-js@0.9.18/modules/$.dom-create",
      "npm:core-js@0.9.18/modules/$.array-methods",
      "npm:core-js@0.9.18/modules/$.array-includes",
      "npm:core-js@0.9.18/modules/$.throws",
      "npm:core-js@0.9.18/modules/$.shared",
      "npm:core-js@0.9.18/modules/$.redef",
      "npm:core-js@0.9.18/modules/$.enum-keys",
      "npm:core-js@0.9.18/modules/$.get-names",
      "npm:core-js@0.9.18/modules/$.wks",
      "npm:core-js@0.9.18/modules/$.same",
      "npm:core-js@0.9.18/modules/$.set-proto",
      "npm:core-js@0.9.18/modules/$.string-at",
      "npm:core-js@0.9.18/modules/$.string-repeat",
      "npm:core-js@0.9.18/modules/$.iter-detect",
      "npm:core-js@0.9.18/modules/$.species",
      "npm:core-js@0.9.18/modules/$.task",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:core-js@0.9.18/modules/$.collection-strong",
      "npm:core-js@0.9.18/modules/$.collection",
      "npm:core-js@0.9.18/modules/$.collection-weak",
      "npm:core-js@0.9.18/modules/$.string-pad",
      "npm:core-js@0.9.18/modules/$.collection-to-json",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser",
      "github:aurelia/loader-default@0.11.2",
      "github:aurelia/loader-default@0.11.2/aurelia-loader-default",
      "github:aurelia/loader@0.10.0",
      "github:aurelia/metadata@0.9.0",
      "github:aurelia/loader@0.10.0/aurelia-loader",
      "github:aurelia/metadata@0.9.0/aurelia-metadata",
      "github:aurelia/path@0.10.0",
      "github:aurelia/path@0.10.0/aurelia-path",
      "github:aurelia/templating-router@0.17.0",
      "github:aurelia/templating-router@0.17.0/aurelia-templating-router",
      "github:aurelia/router@0.13.0",
      "github:aurelia/router@0.13.0/aurelia-router",
      "github:aurelia/dependency-injection@0.11.2",
      "github:aurelia/route-recognizer@0.8.0",
      "github:aurelia/event-aggregator@0.9.0",
      "github:aurelia/dependency-injection@0.11.2/aurelia-dependency-injection",
      "github:aurelia/route-recognizer@0.8.0/aurelia-route-recognizer",
      "github:aurelia/event-aggregator@0.9.0/aurelia-event-aggregator",
      "github:aurelia/templating-router@0.17.0/route-loader",
      "github:aurelia/templating@0.16.0",
      "github:aurelia/templating@0.16.0/aurelia-templating",
      "github:aurelia/binding@0.10.2",
      "github:aurelia/task-queue@0.8.0",
      "github:aurelia/binding@0.10.2/aurelia-binding",
      "github:aurelia/task-queue@0.8.0/aurelia-task-queue",
      "github:aurelia/templating-router@0.17.0/router-view",
      "github:aurelia/templating-router@0.17.0/route-href",
      "github:aurelia/templating-resources@0.16.1",
      "github:aurelia/templating-resources@0.16.1/aurelia-templating-resources",
      "github:aurelia/templating-resources@0.16.1/compose",
      "github:aurelia/templating-resources@0.16.1/if",
      "github:aurelia/templating-resources@0.16.1/with",
      "github:aurelia/templating-resources@0.16.1/repeat",
      "github:aurelia/templating-resources@0.16.1/global-behavior",
      "github:aurelia/templating-resources@0.16.1/replaceable",
      "github:aurelia/templating-resources@0.16.1/show",
      "github:aurelia/templating-resources@0.16.1/sanitize-html",
      "github:aurelia/templating-resources@0.16.1/view-spy",
      "github:aurelia/templating-resources@0.16.1/compile-spy",
      "github:aurelia/templating-resources@0.16.1/focus",
      "github:aurelia/templating-resources@0.16.1/dynamic-element",
      "github:aurelia/templating-resources@0.16.1/css-resource",
      "github:aurelia/templating-resources@0.16.1/html-sanitizer",
      "github:aurelia/templating-binding@0.16.1",
      "github:aurelia/templating-binding@0.16.1/aurelia-templating-binding",
      "github:aurelia/animator-css@0.17.0",
      "github:aurelia/animator-css@0.17.0/aurelia-animator-css",
      "github:aurelia/fetch-client@0.3.0",
      "github:aurelia/fetch-client@0.3.0/aurelia-fetch-client",
      "github:aurelia/bootstrapper@0.18.0",
      "github:aurelia/bootstrapper@0.18.0/aurelia-bootstrapper",
      "github:aurelia/pal-browser@0.2.0",
      "github:aurelia/pal-browser@0.2.0/aurelia-pal-browser"
    ]
  },

  map: {
    "aurelia-animator-css": "github:aurelia/animator-css@0.17.0",
    "aurelia-binding": "github:aurelia/binding@0.10.2",
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.18.0",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.11.2",
    "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.9.0",
    "aurelia-fetch-client": "github:aurelia/fetch-client@0.3.0",
    "aurelia-framework": "github:aurelia/framework@0.17.0",
    "aurelia-history": "github:aurelia/history@0.8.0",
    "aurelia-history-browser": "github:aurelia/history-browser@0.9.0",
    "aurelia-loader": "github:aurelia/loader@0.10.0",
    "aurelia-loader-default": "github:aurelia/loader-default@0.11.2",
    "aurelia-logging": "github:aurelia/logging@0.8.0",
    "aurelia-metadata": "github:aurelia/metadata@0.9.0",
    "aurelia-pal": "github:aurelia/pal@0.2.0",
    "aurelia-pal-browser": "github:aurelia/pal-browser@0.2.0",
    "aurelia-path": "github:aurelia/path@0.10.0",
    "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.8.0",
    "aurelia-router": "github:aurelia/router@0.13.0",
    "aurelia-task-queue": "github:aurelia/task-queue@0.8.0",
    "aurelia-templating": "github:aurelia/templating@0.16.0",
    "aurelia-templating-binding": "github:aurelia/templating-binding@0.16.1",
    "aurelia-templating-resources": "github:aurelia/templating-resources@0.16.1",
    "aurelia-templating-router": "github:aurelia/templating-router@0.17.0",
    "babel": "npm:babel-core@5.8.29",
    "babel-runtime": "npm:babel-runtime@5.8.29",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "core-js": "npm:core-js@0.9.18",
    "errorhandler": "npm:errorhandler@1.4.2",
    "fetch": "github:github/fetch@0.9.0",
    "font-awesome": "npm:font-awesome@4.4.0",
    "serve-favicon": "npm:serve-favicon@2.3.0",
    "socket.io": "npm:socket.io@1.3.7",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:aurelia/animator-css@0.17.0": {
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-templating": "github:aurelia/templating@0.16.0"
    },
    "github:aurelia/binding@0.10.2": {
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.8.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/bootstrapper@0.18.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.9.0",
      "aurelia-framework": "github:aurelia/framework@0.17.0",
      "aurelia-history": "github:aurelia/history@0.8.0",
      "aurelia-history-browser": "github:aurelia/history-browser@0.9.0",
      "aurelia-loader-default": "github:aurelia/loader-default@0.11.2",
      "aurelia-logging-console": "github:aurelia/logging-console@0.8.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-pal-browser": "github:aurelia/pal-browser@0.2.0",
      "aurelia-router": "github:aurelia/router@0.13.0",
      "aurelia-templating": "github:aurelia/templating@0.16.0",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.16.1",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.16.1",
      "aurelia-templating-router": "github:aurelia/templating-router@0.17.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/dependency-injection@0.11.2": {
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/event-aggregator@0.9.0": {
      "aurelia-logging": "github:aurelia/logging@0.8.0"
    },
    "github:aurelia/fetch-client@0.3.0": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/framework@0.17.0": {
      "aurelia-binding": "github:aurelia/binding@0.10.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.11.2",
      "aurelia-loader": "github:aurelia/loader@0.10.0",
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-path": "github:aurelia/path@0.10.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.8.0",
      "aurelia-templating": "github:aurelia/templating@0.16.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/history-browser@0.9.0": {
      "aurelia-history": "github:aurelia/history@0.8.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/loader-default@0.11.2": {
      "aurelia-loader": "github:aurelia/loader@0.10.0",
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0"
    },
    "github:aurelia/loader@0.10.0": {
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-path": "github:aurelia/path@0.10.0"
    },
    "github:aurelia/logging-console@0.8.0": {
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0"
    },
    "github:aurelia/metadata@0.9.0": {
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/pal-browser@0.2.0": {
      "aurelia-pal": "github:aurelia/pal@0.2.0"
    },
    "github:aurelia/route-recognizer@0.8.0": {
      "aurelia-path": "github:aurelia/path@0.10.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/router@0.13.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.11.2",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.9.0",
      "aurelia-history": "github:aurelia/history@0.8.0",
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-path": "github:aurelia/path@0.10.0",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.8.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/task-queue@0.8.0": {
      "aurelia-pal": "github:aurelia/pal@0.2.0"
    },
    "github:aurelia/templating-binding@0.16.1": {
      "aurelia-binding": "github:aurelia/binding@0.10.2",
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-templating": "github:aurelia/templating@0.16.0"
    },
    "github:aurelia/templating-resources@0.16.1": {
      "aurelia-binding": "github:aurelia/binding@0.10.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.11.2",
      "aurelia-loader": "github:aurelia/loader@0.10.0",
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-path": "github:aurelia/path@0.10.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.8.0",
      "aurelia-templating": "github:aurelia/templating@0.16.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-router@0.17.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.11.2",
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-path": "github:aurelia/path@0.10.0",
      "aurelia-router": "github:aurelia/router@0.13.0",
      "aurelia-templating": "github:aurelia/templating@0.16.0"
    },
    "github:aurelia/templating@0.16.0": {
      "aurelia-binding": "github:aurelia/binding@0.10.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.11.2",
      "aurelia-loader": "github:aurelia/loader@0.10.0",
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-path": "github:aurelia/path@0.10.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.8.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.1"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.10.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.1"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:accepts@1.2.13": {
      "mime-types": "npm:mime-types@2.1.7",
      "negotiator": "npm:negotiator@0.5.3"
    },
    "npm:asn1.js@2.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.29": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:base64id@0.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:benchmark@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:better-assert@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "callsite": "npm:callsite@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bindings@1.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.8": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.5.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:bufferutil@1.0.1": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@1.6.2"
    },
    "npm:bufferutil@1.2.1": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@2.1.0"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.10.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@3.0.8",
      "create-ecdh": "npm:create-ecdh@2.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@3.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:debug@0.7.4": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:debug@1.0.2": {
      "ms": "npm:ms@0.6.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:debug@1.0.3": {
      "ms": "npm:ms@0.6.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:debug@2.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.6.2",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:debug@2.1.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@3.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@2.0.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@3.1.0": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:engine.io-client@1.5.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.1.2",
      "component-inherit": "npm:component-inherit@0.0.3",
      "debug": "npm:debug@2.1.3",
      "engine.io-parser": "npm:engine.io-parser@1.2.1",
      "has-cors": "npm:has-cors@1.0.3",
      "indexof": "npm:indexof@0.0.1",
      "parsejson": "npm:parsejson@0.0.1",
      "parseqs": "npm:parseqs@0.0.2",
      "parseuri": "npm:parseuri@0.0.4",
      "ws": "npm:ws@0.7.1"
    },
    "npm:engine.io-parser@1.2.1": {
      "after": "npm:after@0.8.1",
      "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
      "base64-arraybuffer": "npm:base64-arraybuffer@0.1.2",
      "blob": "npm:blob@0.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "has-binary": "npm:has-binary@0.1.5",
      "utf8": "npm:utf8@2.0.0"
    },
    "npm:engine.io-parser@1.2.2": {
      "after": "npm:after@0.8.1",
      "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
      "base64-arraybuffer": "npm:base64-arraybuffer@0.1.2",
      "blob": "npm:blob@0.0.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "has-binary": "npm:has-binary@0.1.6",
      "utf8": "npm:utf8@2.1.0"
    },
    "npm:engine.io@1.5.4": {
      "base64id": "npm:base64id@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "debug": "npm:debug@1.0.3",
      "engine.io-parser": "npm:engine.io-parser@1.2.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "ws": "npm:ws@0.8.0"
    },
    "npm:errorhandler@1.4.2": {
      "accepts": "npm:accepts@1.2.13",
      "escape-html": "npm:escape-html@1.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:etag@1.7.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:font-awesome@4.4.0": {
      "css": "github:systemjs/plugin-css@0.1.19"
    },
    "npm:has-binary-data@0.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:has-binary@0.1.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:has-binary@0.1.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:has-cors@1.0.3": {
      "global": "github:component/global@2.0.1"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-db@1.19.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:mime-types@2.1.7": {
      "mime-db": "npm:mime-db@1.19.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:nan@1.6.2": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:nan@2.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:options@0.0.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@3.0.2": {
      "asn1.js": "npm:asn1.js@2.2.1",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parsejson@0.0.1": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseqs@0.0.2": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseuri@0.0.2": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseuri@0.0.4": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseurl@1.3.0": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.2",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:serve-favicon@2.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "etag": "npm:etag@1.7.0",
      "fresh": "npm:fresh@0.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "parseurl": "npm:parseurl@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:socket.io-adapter@0.3.1": {
      "debug": "npm:debug@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "object-keys": "npm:object-keys@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "socket.io-parser": "npm:socket.io-parser@2.2.2"
    },
    "npm:socket.io-client@1.3.7": {
      "backo2": "npm:backo2@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-bind": "npm:component-bind@1.0.0",
      "component-emitter": "npm:component-emitter@1.1.2",
      "debug": "npm:debug@0.7.4",
      "engine.io-client": "npm:engine.io-client@1.5.4",
      "has-binary": "npm:has-binary@0.1.6",
      "indexof": "npm:indexof@0.0.1",
      "object-component": "npm:object-component@0.0.3",
      "parseuri": "npm:parseuri@0.0.2",
      "socket.io-parser": "npm:socket.io-parser@2.2.4",
      "to-array": "npm:to-array@0.1.3"
    },
    "npm:socket.io-parser@2.2.2": {
      "benchmark": "npm:benchmark@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.1.2",
      "debug": "npm:debug@0.7.4",
      "isarray": "npm:isarray@0.0.1",
      "json3": "npm:json3@3.2.6"
    },
    "npm:socket.io-parser@2.2.4": {
      "benchmark": "npm:benchmark@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.1.2",
      "debug": "npm:debug@0.7.4",
      "isarray": "npm:isarray@0.0.1",
      "json3": "npm:json3@3.2.6"
    },
    "npm:socket.io@1.3.7": {
      "debug": "npm:debug@2.1.0",
      "engine.io": "npm:engine.io@1.5.4",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "has-binary-data": "npm:has-binary-data@0.1.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "socket.io-adapter": "npm:socket.io-adapter@0.3.1",
      "socket.io-client": "npm:socket.io-client@1.3.7",
      "socket.io-parser": "npm:socket.io-parser@2.2.4",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:timers-browserify@1.4.1": {
      "process": "npm:process@0.11.2"
    },
    "npm:ultron@1.0.2": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:utf-8-validate@1.0.1": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@1.6.2"
    },
    "npm:utf-8-validate@1.2.1": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@2.1.0"
    },
    "npm:utf8@2.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:utf8@2.1.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:ws@0.7.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bufferutil": "npm:bufferutil@1.0.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "options": "npm:options@0.0.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "ultron": "npm:ultron@1.0.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "utf-8-validate": "npm:utf-8-validate@1.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:ws@0.8.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bufferutil": "npm:bufferutil@1.2.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "options": "npm:options@0.0.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "ultron": "npm:ultron@1.0.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "utf-8-validate": "npm:utf-8-validate@1.2.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    }
  }
});
