module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+GKQ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pr_color": "#1000ba",
	"small_phone": "280px",
	"phone": "320px",
	"large_phone": "380px",
	"tablet": "768px",
	"large_tablet": "1000px",
	"desktop": "1024px",
	"large_desktop": "1300px",
	"hSmall": "600px",
	"hMedium": "1000px",
	"hLarge": "1300px",
	"drk_color": "#000",
	"se_blue": "#81a6bd",
	"se_blue_light": "#8eabbd",
	"gray": "#bababa",
	"gray_text": "#818181",
	"headingLg": "nav_headingLg__1w6pq",
	"headingMd": "nav_headingMd__12ens",
	"headingMdFd": "nav_headingMdFd__JOqfF",
	"headingSlFd": "nav_headingSlFd__2qgi1",
	"textMd": "nav_textMd__2S9Jp",
	"textLg": "nav_textLg__YYJIh",
	"textLgBl": "nav_textLgBl__2TwRg",
	"heading_home_1": "nav_heading_home_1__wQUKf",
	"text_home_1": "nav_text_home_1__17uQd",
	"sectionMargin": "nav_sectionMargin__15IA_",
	"navblock": "nav_navblock__3p5fz",
	"navElements": "nav_navElements__3jenX",
	"navElement": "nav_navElement__39cbG",
	"shadow": "nav_shadow__2nkDZ"
};


/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "/tML":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pr_color": "#1000ba",
	"container": "layout_container__2jEl2",
	"header": "layout_header__19LZQ",
	"main": "layout_main__3LbB1",
	"backToHome": "layout_backToHome__3rQzo"
};


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6Fm8":
/***/ (function(module, exports) {



/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "HSwI":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pr_color": "#1000ba",
	"small_phone": "280px",
	"phone": "320px",
	"large_phone": "380px",
	"tablet": "768px",
	"large_tablet": "1000px",
	"desktop": "1024px",
	"large_desktop": "1300px",
	"hSmall": "600px",
	"hMedium": "1000px",
	"hLarge": "1300px",
	"drk_color": "#000",
	"se_blue": "#81a6bd",
	"se_blue_light": "#8eabbd",
	"gray": "#bababa",
	"gray_text": "#818181",
	"headingLg": "footer_headingLg__1tP8x",
	"headingMd": "footer_headingMd__3J0dt",
	"headingMdFd": "footer_headingMdFd__m76p_",
	"headingSlFd": "footer_headingSlFd__1IeYl",
	"textMd": "footer_textMd__Kmb6a",
	"textLg": "footer_textLg__28gOe",
	"textLgBl": "footer_textLgBl__31r5U",
	"heading_home_1": "footer_heading_home_1__ZaY3e",
	"text_home_1": "footer_text_home_1__jdLuR",
	"sectionMargin": "footer_sectionMargin__1CaH2",
	"prBg": "footer_prBg__8_g_p",
	"darkBg": "footer_darkBg__1LL5L",
	"container": "footer_container__1yh7Z",
	"innerContainer": "footer_innerContainer__3PGX7",
	"content": "footer_content__1IgYI",
	"blockheading": "footer_blockheading__33acS",
	"block1": "footer_block1__1bLnw",
	"half": "footer_half__26HDd",
	"block2": "footer_block2__WKS4X",
	"block3": "footer_block3__BAQOK",
	"bottom": "footer_bottom__24uW_",
	"wrap": "footer_wrap__1hBbd",
	"logo": "footer_logo__qFMKW",
	"privacy": "footer_privacy__2WM8A"
};


/***/ }),

/***/ "I/1N":
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "KwCx":
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "bq8K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useWindowSize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useWindowSize() {
  const {
    0: windowSize,
    1: setWindowSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: undefined,
    height: undefined
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6Fm8");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zWuv");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function App({
  Component,
  pageProps
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const legal = router.pathname.includes("Imprint") || router.pathname.includes("Privacy");
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_layouts_layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"], {
    dark: legal,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Component, _objectSpread({}, pageProps))
  });
}

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains,
  enableBlurryPlaceholder: configEnableBlurryPlaceholder
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","enableBlurryPlaceholder":false} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(element, placeholder) {
  if (placeholder === 'blur' && element) {
    if (element.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      element.style.backgroundImage = 'none';
    } else {
      element.onload = () => {
        element.style.backgroundImage = 'none';
      };
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (!configEnableBlurryPlaceholder) {
    placeholder = 'empty';
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  const MIN_IMG_SIZE_FOR_PLACEHOLDER = 5000;
  const tooSmallForBlurryPlaceholder = widthInt && heightInt && widthInt * heightInt < MIN_IMG_SIZE_FOR_PLACEHOLDER;
  const shouldShowBlurryPlaceholder = placeholder === 'blur' && !tooSmallForBlurryPlaceholder;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, shouldShowBlurryPlaceholder ? {
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "eBAG":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pr_color": "#1000ba",
	"text": "button_text__2W8Sj",
	"shadow": "button_shadow__yFCtr"
};


/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h/F9":
/***/ (function(module, exports) {

module.exports = require("react-superellipse");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "ilCV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_superellipse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h/F9");
/* harmony import */ var react_superellipse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_superellipse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("eBAG");
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vnQH");
/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4__);







function Button({
  dark,
  children,
  width,
  height,
  fontsize,
  margin
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    style: {
      margin: margin
    },
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: _button_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.shadow,
      style: {
        backgroundColor: dark ? _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.drk_color : _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.pr_color,
        height: height == undefined ? "40px" : height + "px",
        width: width == undefined ? "150px" : width + "px"
      }
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_superellipse__WEBPACK_IMPORTED_MODULE_2___default.a, {
      r1: 0.001,
      r2: 0.8,
      style: {
        height: height == undefined ? "40px" : height + "px",
        width: width == undefined ? "150px" : width + "px",
        backgroundColor: dark ? _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.drk_color : _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.pr_color,
        boxShadow: "0px 0px 10px 10px black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        className: _button_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.text,
        style: {
          fontSize: fontsize !== null && fontsize !== void 0 ? fontsize : "20px"
        },
        children: children
      })
    })]
  });
}

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "ocwR":
/***/ (function(module, exports) {

module.exports = require("resize-observer-polyfill");

/***/ }),

/***/ "om4O":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pr_color": "#1000ba",
	"small_phone": "280px",
	"phone": "320px",
	"large_phone": "380px",
	"tablet": "768px",
	"large_tablet": "1000px",
	"desktop": "1024px",
	"large_desktop": "1300px",
	"hSmall": "600px",
	"hMedium": "1000px",
	"hLarge": "1300px",
	"drk_color": "#000",
	"se_blue": "#81a6bd",
	"se_blue_light": "#8eabbd",
	"gray": "#bababa",
	"gray_text": "#818181",
	"headingLg": "navbar_headingLg__2eW2f",
	"headingMd": "navbar_headingMd__2Xxl5",
	"headingMdFd": "navbar_headingMdFd__3JZb7",
	"headingSlFd": "navbar_headingSlFd__XOe0I",
	"textMd": "navbar_textMd__1X5QP",
	"textLg": "navbar_textLg__243SI",
	"textLgBl": "navbar_textLgBl__2DGV7",
	"heading_home_1": "navbar_heading_home_1__oFgG8",
	"text_home_1": "navbar_text_home_1__2tS9w",
	"sectionMargin": "navbar_sectionMargin__2y_wu",
	"container": "navbar_container__3hYKI",
	"logo": "navbar_logo__3XehP",
	"navigator": "navbar_navigator__3GTOR",
	"wrapper": "navbar_wrapper__9sqlj",
	"pagenavigators": "navbar_pagenavigators__NeSxP",
	"contact": "navbar_contact__1tfyo",
	"container_small": "navbar_container_small__1V5Tq",
	"logo_small": "navbar_logo_small__mD5c9",
	"menuicon": "navbar_menuicon__2vXcp"
};


/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vnQH":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pr_color": "#1000ba",
	"small_phone": "280px",
	"phone": "320px",
	"large_phone": "380px",
	"tablet": "768px",
	"large_tablet": "1000px",
	"desktop": "1024px",
	"large_desktop": "1300px",
	"hSmall": "600px",
	"hMedium": "1000px",
	"hLarge": "1300px",
	"drk_color": "#000",
	"se_blue": "#81a6bd",
	"se_blue_light": "#8eabbd",
	"gray": "#bababa",
	"gray_text": "#818181",
	"headingLg": "utils_headingLg__3uZpz",
	"headingMd": "utils_headingMd___QbOh",
	"headingMdFd": "utils_headingMdFd__2hYUB",
	"headingSlFd": "utils_headingSlFd__keE6V",
	"textMd": "utils_textMd__ZBXMB",
	"textLg": "utils_textLg__3GsPH",
	"textLgBl": "utils_textLgBl__GWgct",
	"heading_home_1": "utils_heading_home_1__1-6HU",
	"text_home_1": "utils_text_home_1__2OivL",
	"sectionMargin": "utils_sectionMargin__2JhfV"
};


/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zWuv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ NavbarHeightContext; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ NavActiveContext; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ Layout; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/layouts/layout.module.scss
var layout_module = __webpack_require__("/tML");
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);

// EXTERNAL MODULE: ./hooks/useWindowSize.ts
var useWindowSize = __webpack_require__("bq8K");

// EXTERNAL MODULE: external "react-spring"
var external_react_spring_ = __webpack_require__("KwCx");

// EXTERNAL MODULE: ./components/modules/nav.module.scss
var nav_module = __webpack_require__("+GKQ");
var nav_module_default = /*#__PURE__*/__webpack_require__.n(nav_module);

// EXTERNAL MODULE: ./styles/utils.module.scss
var utils_module = __webpack_require__("vnQH");
var utils_module_default = /*#__PURE__*/__webpack_require__.n(utils_module);

// EXTERNAL MODULE: external "react-superellipse"
var external_react_superellipse_ = __webpack_require__("h/F9");
var external_react_superellipse_default = /*#__PURE__*/__webpack_require__.n(external_react_superellipse_);

// EXTERNAL MODULE: ./components/elements/button.tsx
var elements_button = __webpack_require__("ilCV");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__("I/1N");

// CONCATENATED MODULE: ./components/modules/nav.tsx














const Nav = ({
  dark
}) => {
  const router = Object(router_["useRouter"])();
  const size = Object(useWindowSize["a" /* default */])();
  const {
    NavActive: NavActive,
    setNavActive: setNavActive
  } = Object(external_react_["useContext"])(NavActiveContext);
  const navSpring = Object(external_react_spring_["useSpring"])({
    opacity: NavActive ? 1 : 0,
    marginTop: NavActive ? "0px" : "-500px"
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_spring_["animated"].div, {
    className: nav_module_default.a.navblock,
    style: navSpring,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_superellipse_default.a, {
      r1: 0.00006,
      r2: 0.132,
      style: {
        position: "absolute",
        filter: "blur(0px)",
        width: "90%",
        height: "90%",
        backgroundColor: "white",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: nav_module_default.a.navElements,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              onClick: () => setNavActive(false),
              className: nav_module_default.a.navElement,
              style: {
                textDecoration: router.pathname == "/" ? "underline" : "none"
              },
              children: "Home"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/Events",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              onClick: () => setNavActive(false),
              className: nav_module_default.a.navElement,
              style: {
                textDecoration: router.pathname == "/Events" ? "underline" : "none"
              },
              children: "Events"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/About",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              onClick: () => setNavActive(false),
              className: nav_module_default.a.navElement,
              style: {
                textDecoration: router.pathname == "/About" ? "underline" : "none"
              },
              children: "About"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_scroll_["Link"], {
          onClick: () => {
            setNavActive(false);
          },
          to: "footer",
          spy: true,
          smooth: true,
          offset: 0,
          duration: 500,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: nav_module_default.a.navElement,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_button["a" /* default */], {
              margin: 5,
              dark: dark,
              fontsize: size.width < parseInt(utils_module_default.a.large_phone, 10) ? "20px" : "35px",
              width: size.width < parseInt(utils_module_default.a.large_phone, 10) ? 150 : 280,
              height: size.width < parseInt(utils_module_default.a.large_phone, 10) ? 50 : 80,
              children: "Contact"
            })
          })
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: nav_module_default.a.shadow
    })]
  });
};

/* harmony default export */ var nav = (Nav);
// EXTERNAL MODULE: ./components/modules/navbar.module.scss
var navbar_module = __webpack_require__("om4O");
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);

// CONCATENATED MODULE: ./assets/Logo/Octagon-logo-poppins-1000BA.png
/* harmony default export */ var Octagon_logo_poppins_1000BA = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAEvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjUwMCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjUwMCIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICB0aWZmOkltYWdlV2lkdGg9IjUwMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTAwIgogICB0aWZmOlJlc29sdXRpb25Vbml0PSIyIgogICB0aWZmOlhSZXNvbHV0aW9uPSI3Mi4wIgogICB0aWZmOllSZXNvbHV0aW9uPSI3Mi4wIgogICBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIgogICBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDIx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");
// CONCATENATED MODULE: ./assets/Logo/Octagon-logo-poppins-000000.png
/* harmony default export */ var Octagon_logo_poppins_000000 = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAEvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjUwMCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjUwMCIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICB0aWZmOkltYWdlV2lkdGg9IjUwMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTAwIgogICB0aWZmOlJlc29sdXRpb25Vbml0PSIyIgogICB0aWZmOlhSZXNvbHV0aW9uPSI3Mi4wIgogICB0aWZmOllSZXNvbHV0aW9uPSI3Mi4wIgogICBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIgogICBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA3LTI2VDA5OjE4OjAyKzAyOjAwIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA3LTI2VDA5OjE4OjAyKzAyOjAwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0icHJvZHVjZWQiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFmZmluaXR5IERlc2lnbmVyIChGZWIgIDIgMjAyMSkiCiAgICAgIHN0RXZ0OndoZW49IjIwMjEtMDctMjZUMDk6MTg6MDIrMDI6MDAiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0iciI/PjcH7aoAAAGDaUNDUHNSR0IgSUVDNjE5NjYtMi4xAAAokXWRzStEURiHH+Nj5KNRLCSLSVihGWpio4yEkjRG+drM3PlSc8ft3ivJVtkqSmx8LfgL2CprpYiU7JQ1sWG63jt3aibNnNN536ffOe/bOb8DrnBaUY0qH6gZUw+NB73zC4te9xtu2qihj/qIYmgjMzNTlB3fj1TY+b7X7lX+XMlRH4sbClTUCg8rmm4KTwhPrZuazXvCLUoqEhO+EO7R5YLCD7Yedfjd5qTDvzbr4dAouJqEvckijhaxktJVYXk5nWp6Tcnfx35JQzwzNyu5Q1Y7BiHGCeJlkjFGCeBnSGKAXvrFIb94V7rel6ufZlVqFYkaG+iskCSFSY+oa9I9Ljkhelxmmg3b//++GomBfqd7QxCqXy3rswvcu5DdsayfE8vKnkLlC1xnCvWrxzD4JfpOQes8As8WXN4UtOg+XG1D67MW0SM5qVKWK5GAj3NoXIDmO6hbcjzL73P2BOFN+apbODiEbjnvWf4DSRNn2E2RgBkAAAAJcEhZcwAACxMAAAsTAQCanBgAABx6SURBVHic7d17vPXXfCfwz0nyPLmphEhIgoeE0Lq0Ji6NyxhDpdSMcSmlqvoyRGvU3YhSLaoMakhLS8toCHkpWlNVZeouiNs0NW7NRS4kcUnimjyR58wf65xXzrPtc/Zlrd/+7X32+/16rVfynLN/v7XW7+y9v7/fuiYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA826l7wLMoQOTHD7jPL+Z5OoZ5wnANiKgJzdI8vAkx6+l2yTZd8ZluCrJWUk+n+TTSU5d+xkAMIYHJbkkyeqcpS8mOaHDegPAtnBYktPSf+DeKu1Jckpm31oAAAvhyCRfSf8Be9x0YDeXAQAW16IFcwEdAAYsYjBfTXJAFxcDABbRogbz1ST7d3A9AGDhLHIwF9ABIIsfzFeT7BxSr5XoWwdgSWyHYL6aZMeQuh2c5ANJDqq6QgAw57ZLMN8soO9a+52gDsC2tZ2C+WqS/YbU8fgNvxfUAdh2tlswX83wleJOHHiNoA7AtrEdg/lmAf1RQ14nqAMssX36LkAjRyb5UJLjei5HF1aH/OwGQ3527yTvjqAOsJS2Q0DfzsE8GT+gJ4I6wNJa9IC+3YP5ZjYL6ImgDsCC2a595oNpmL8Z4zh96gDMvWUJ5psF9A+PeaygDsDcWqZgvllA/+IExwvqAMydZQvmeza5DpdMeB5BHYC5sWzBfDXJtza5Fl+f4lyCOgC9OyzLF8xXU/rKh/nHKc/3/gxfSpYyc+D7Fempsy8ywOI5Lf0H1z7SQza5HvevOOfJoy72kjo8dX+rZ82+yACL5UHpP7D2kf4xZd/zYVaSvHPK816V5LZbX/KlJKADdOgGmXwA2HZI70py4IhrszPJW6c8/5nR9D5IQAfo0H9L/8F11unPM36w3SfJK6fM555j5rEsBHRgoc370q/H912AGdqT5ClJfjvJTyY45qlJnjDBMeuW6doCbHsC+ny4MsmvJHlVytPepP4iyX2T/GCCY5bl2gIshXkO6Acm+bm+CzEjT0sZBFfjgyldFOMS0AG2kXkO6Eck2bfvQszAu1P6zVv46ySnj/naoxvlCcAcmOeAviyekuma2YdZbXw+ABaEgN6vM5Oc2/icFyf5SONzAjDnzEXu1990eN55npZ2SJIbr6XVJJcl+e7af69Ick1/Rds2Dkpy8yQ3TbmmFyb5ZpKr+yxUx1aSXD/JMSnTEC9Oqfe3s/lGR9vRgSmfrZukdFtekHIdJhk0u10ckPJe+N5a2tatlwJ6vz7b0Xk/09F5J3VokocnuWPKl8t6+pktjrkypfxnrKWPJ7m0YZluneTJQ34+aiGfUR6cEkBH+XSSN1bmNejQJI9JGeh4zFq60ZDXraYs1HReyuJFb07yjRHnfnLKNZvGBUlePOWx4zgupd63yrX1vu6Q112d5KIkX0rylpS6/2iL8+6X5JSKcr03ZWxM1w5K8l+S3D3lc7UexA/b5PWXpwT2C9bSmUnennLD17U7JHl8xfEvS3LOFr9fSfILSX4tyc+njBE6KuUGb93ulO+SS1O+W96bMph4q/cCjexK/4u8dJ3u3Oxq7e22Y+T9/Y7y3ifJvVKCxY/HKMeodE3Kl+P90qaL6N4NylST3tygDuuOTfLqlCevaa/te1NuunZskscHKur6uYZ1XbeS8v763xXl+l6S1yc5YZM8dlacezXJi9pV96esJLlrktelBOLa9+OPUt6T90m3g5AfXFnOzf5WxyT5gyRfnvK8V6a8l+7UrqoMsyuz/7KddepqWt7Nxsi7dUA/MsnvJTl7jLynTWcneWLqvni2Q0C/W8pT5p6G5Toz5Ul30LwE9P2SPDrJFxrWeTXJXya5zkBe8xjQj0rynCRfrSzbVun8tbIf00H5Wwf0nUmem7I3Rav6n57kFo3rzZpd6e6NOy/pZkPqfVTKcq5/lc37we+a8oTx6rXrNOiIMfJuGdAfmNL/Pavr9slMv8HMIgf0lSTP67BsP0xyUvbeFGgeAvohKS0JXdX735LcZUN+8xbQH5E2T+PjpitTbpw32xxqGi0D+l2SnNVR3a9O8tiG9WbNrszuDdxXOm5IvTd+cf0kyW0Gfn9sSl/Q+muGjWi/cUbn3SKg70zyijHy6iLtTmlqm7QZflED+v5JTp1RGU/Pta0gfQf0myX51xnU+SdJHreW57wE9OukjLfo67367pQNslpoFdAflbYtU5ulF6TtDc3S25X+3sizSr8wpN6DfUGDA0keNfD784ec47gx8q4N6LtSnpT7voZvyeb9v8MsYkA/PMnHZlzOl67l3WdAPyGz3W3xJyl9yfMQ0I9Pt83r46ZvpHxmarUI6L+S8jeaVd3fmAUL6uah9+ugIT8bnFoy2F88+O9hU1GGnbelE5N8Pns3U/blkSnT9A7ouyAduUXKjdPdZpzvs1L6rPvykJQRyEfMMM99U0Z933KGeQ7zlJRR2H2XIyljY96fMluhz+B295TP+SxXD31Myt9iYQjo/Tp4yM9aBPRh523luCTvSHK9DvOY1H9O8rfZfksF75ey530Xg5TG8foMHyjXtWNTljHev4e8D03ydz3ku+7XU8bQTNLq1LWVJCcneWaPZXhp+rlpf2nKtNuFIKD3a5wn9MG1Agb/Pcsn9ANS+le7vGGY1okpo4C3k2em3y+TnSnjMWZpnyRvSPetTFs5tqd8b5dyEzWv/jhlymAf+mod2JHynbfV2hlzQ0Dv16I1ub8sw/v958UfZPZN0125bUp9ls0Tk/z7vgvRg0OSvDP1Cxx1aZ8kb8vybex0TOoWxZkZAb1fwwLvDwf+PSqgD75+s/PWelAm2561D/skOS3ly3GR7ZcyIGdn3wWZsWOTvKTvQvRgJcn/ymLMgT4iZZzBsr03n5z56gYZSkDv16I0ue9KaQZdBDdNecpbZH03tfdhHpra+/KslCVcF8UJSV7edyFm7CZJHtp3IUYR0Ps1rC+6xRN66z7uk1MGC7XW1YYZT8t89vOPY/8kz+67ED24Z5azqf3wJC/suxBTeFK6W+lyWldk+PdhK/PeQmlzlp4NCzqDu2GNekIftntWy2B2YMqGBy1ckuQ9ST61lr6Y0jx+TMoUuKdn+Op5kzospc/rlUN+d1bKnNhBh6Ru05RTU5ZjHeWCEb+/X4ZvMFLjipQ54Z9f++8VKWMh/t1a2tU4v2k8ooNznp9r6/yFlKf/43Ntvbu4SZ3UY9KuKXc1ZRGe9Tp/LmXe9vEb0m3TboDZ49PvtK4vJ3lTymf6X1I2nllJ+Q65fcogw8en3cDOu6Qs9rOMu9ZV25X+F1XoOr16SL1/f+A1g4tUPGfg98P6HF8yRt7jLizziEZ1PSPDdwDbaEeS30nZNKQ2v4sy2TS2wyvze9YEeW3l9MpybEzfSfKrGf0FfquUG6zW7+9xF5bZmbJ9bst8B1dYHLSSMt3x0g7qPe7CMvukLDvbIs+vJ7nHGHmekOTcRnlelvEH8dUuLLMx7UnyJ2PmfWhK0G+V933GrG8vNLn3a9hc7sG9wEc1uQ/bO7zlHPHfanCOt6RMd7l4xOuuTvKaJL+Z8uGpcVQWbwel6yT5T43O9b6UJ5S3Z/S1/ErKwh0vSD/7ht83bd6ze5L8UZJfTGn92cpqytKmt0vyDw3ynsZ/TJspcm9L2TL0o2O89oyU1pm3Nsj30CQPa3CeSXwn5bo9LWU3x1EuT/k+efCYrx/l7g3O0RkBvV/jBPRRTe5dBvSbpv6O9O1JfiNlw4dxvTnli7lWq+A4Kw9Mm2lLT09puh+11/lGVyd5fsoX1rcblGESLZrbL0t5Qn1uyjr/47okyQNSRjHP2kkNzvHMlNUSL5/gmCtSFrB5aoP8W9RhEs9M8qEpjntXyjz6WnM9LVZA79ewPrx5ekJ/dOr7216Q6Z62X5HJvqSGeUDl8bPWIrCdktIcOW0LxxkpAaK2hWRcB6XcyNRYTdnj4BMVx7865brNyo1SP7L9Xbl2c6RJrSZ5Veqf1E9IaeWYhTNTms+n9fIk51WWYdYLLU3EoLh+ddXk3mqwz7DBY5N4d8ognWlcnvK09cjKMlwv5elt3u1IaXqu8aUkz2hQlvenBIoW5xrlnqkfxHlK2jSbPzulRer2Dc41ysNS9/17VZInpO7GazVlzMoDUrcS2q9nNjMznpS6LqEfp7RevaPiHNevOLZzAnq/xnlC77PJ/WaVx9c2cf3ZWloGN0z9aOcXZ7Lm5q28LGWaTtfrZ9+k8vjduXZnuFpXp3T1nN7ofFupXUTmtJQBfbUuT/KXqWt+n8WCOGelDNys9a6UAZjTBubrp7RazqoFayKa3Ps1z4PiDq48z5dSdgljPEdWHv+tlMFRrVya6fdun0Rtvd+eycYKjPKOjJ5a2MJNK48/tUkpitpFo2rrMo6vNjrPapKvVRy/X8rg1bkkoPfrwPz0jlK1AX2ftGlyr12v+ewGZVgmR1Ue/y8pc45bOrPx+YaprXftnuuDrungnMPUBsEvNylF8dXUNWXPIqDXBOHW55qH9QuGEtD7t2vg34NNOaOa3Adff3Ta/F1rB3+c36AMy6Q2sH2lSSn21jJobGZZ610TBH+U0VNAJ7E7ZR77tG6Y7rtmWj2htzjX3MbNuS3YEhkciT04MOqW2Xuk+WB/1eDr79+iUBHQZ602sHURhLoIloOWsd4Hp6xmOK1z0r4P998qj+969Pe5Dc91TsNzzZV5HhT3jZSRnINN0tvNH6cE6ctTRtgOLoZyt5SFWT6SMkVkMICfmOSzKSOTD07y2DHzHdUkLqDP1jwGtktT3pddNjHW9KHvTv00pGG6fkKvHQjYRXfW15L8UsXxN039TcFWrprTc82VeQ7oV6f0Cy7aal+T2pnkt0e85hHZeo7y+trUk/jsiN/XBpiLKo9fNjesPL6LL/nVlObJO3dw7qS0PNXU+9wMHxRaq2Xz7jC1Ab3l0+q62qfW2jrRwLw3uX+m7wJsY6MCeu0GBHM7EnROXVF5/OFNSvHTunw6X03yvYrjj0i7jUY26nrQ07j7KGym9eY9SX2dbVgyB+Y9oM9ilO2yGnVta5+wZzHydTv5ZuXxt25Sir3tTJu1xrdSU+/rJblBq4Js0MW13Kh2WlwXf5NbVh6vi20OzHtAf1tmMzBn2fx9Rrd+XFiZhya4ydTOpb5Vk1Ls7dhMtmPdNOax3l0H9ItTN8Wwi4B+XOXxNaPkaWTeA/qPU/YL7mMHqO3q8pQNFUaNkq0N6J7QJ1Mb2LoIQl0HtmQ5631N6lrAjk7baWIrqXtCvzJlYSN6Nu8BPSmrjb2i70JsI7+b8b5EBfTZmscm91kE9GWtd02z+0qSm7cqSMrAxJoxL+dnTpdCXTaLENCT5PeTfLDvQmwDr8v4y3lemrpmwdvHwLhJ1D6p/mzKntitrCR5SMPzbaa23g9N/Rr4G904yV0anm8ztX3OrdabSMr+4jU0t8+JeZ62ttGVKQuw/H2Se/VclkX1+pTpcePeSV+T8mU77ZP2oUkel+SVUx6flDnKtf2Fn0tZWWve1T6pJsmzUna+auHeSY5vdK6t1Ab0XSk7l72lQVmS5Glpe4OwmdqBcb+X5I0pG43UWEnZgayGAXFM5aAk/5wSlKTx0+syXWvMOyvzvTB1CwO9rzL/70+Q/2GVebXYPvJfK8uwJyUQ1zooyf+tLMtqxlsTfVeDfC5Im9Hut08Zt1NbnheNkdeDGuRTc7O87iENyvFbY+Tz4Mo8Tqit6AYPrSzLroZlWXqC+mRp2mCeJA9skP+4K9cNuluDvN8+QX47KvM6Zcp6bvTcyjKsJrkkdRvrrKQ8+bV47427ycnHG+T13tSNyD8kZbW0FvUeJ6DvSBntXpPP7tRtXXpMyiDZmjJclvKdPIqAzqYE9fFSTTBPypfOJZVluDDJbSbM92dSptXV1v/RE+b7/Yq8PjRhXsPcoiL/jemiTPekfljK9qGt3n/jBvQnNcrvw5luuuTxKcu9tqr3OAE9KfvX1+Z1VqYbxHfnlNUFa/Mft5VAQGdLgvrWqTaYr3tFg7JckeR+Y+Z3cJKPNsjzmkzeDPv1yjxPnDC/Yc6sLMN62pPkf6QsDjOO+6b0Z7d8D44b0G+U8vdqkedlKX3q49g3yckpy0y3rPe4Af2YRvn9MMlvjpnnfkmelzLgtUXe495MCOiMJKgPT62CeZLcrlGZrkkZtLXZEqX7JXlkkv/XKL/Tp6jr5yvzvCrJq5L8h5TBfIekLNO5MR08ogxPb1T/9fS5lCfgu2bvptF9UhYT+bUkb2ic58a8x/WBxnmfntJCc5vs3RR/QMr+ECelzY3jsDRuQE+Sf2qY72kpN5WDN7IrSW6W0l/+sYb5/fME9RTQGYugvndqGczXtWj+3pjOSfLWlIFkL0tp5j2vcR63m6Kef924DMPS+0eU4cYd5n1NysC7j6Wue2HcNElAf2yH5fhhkk8k+ULaP40PS5ME9Nrgslk6L+Vz9b4k3+4oj1+doJ4COmMT1EvqIpgn3X7ZdpHeOWU9/+sMyjYqoCfJP8ygHLNIkwT066VMweq7zC3SJAF9Z9rfzM4inZ3xu3MSAX0mFmVhmVF+lDJP/YN9F6RHr0/yhHSzTO4bkryng/N2YTXJC6c89qMtC1LhiSlPlcvksiRP6bsQPdid5OEpLQeL4sqUoLi774Kwt+0S0JPlDupdBvOkBMnHZDH2OH9RSl/4NL6a+iVvWzg3yX/vuxA9ODWLc+PY0qeyWDczJ2X6zxgd2k4BPVnOoN51MF/37ZRBa/O8Uc7Hkryg4vjVzM++Aa9NmYa1TFZTgkXt3vCL6LVpt9pdl16TMtaEObTdAnqyXEF9VsF83UeS/OGM8prUZSk3HDXrzyflms7DzlF7UsYu/LjvgszYRSnLr/Zptac8T0ryxR7yHtcZSZ7adyHY3HYM6MlyBPVZB/N1f5QyxWieXJbkl1O/PnZS+q5f3OA8LZyd5Bk95v+JlFXcZu2NKfs29KWv7o4fpgweu7yn/LfyjZRR7frN6c12Hf3e1Wj2ce2f5E+HlKuPdHGmm6K2lZWUXem6KO84o9wHPS7tFgIZN52TsmZAzfzwSUa5D9o/3f0NtkqvXcu75hyTjHIf5uYpT8Ozrvtm6T0pW6zWMMqdJrZbUO87mG/0sCTfS3/X4uwkt+yobvun9GG3LvM0AT1Jfimlb3kW1/WKJD+3lm9fAT0pN1bPn1GdV9fquiNlOlbNeWoDetbK8aKUFrhZfqY2pitTFiVaaVAfAZ1mtktQn6dgvu4WqV9hbdK0J8mr0/1+6wenDAJqWfZpA3pSVj07r3F5BtOXs/e2qX0G9HWPSlmFr8t6vzHXvp/mIaCvu1fKuIJZfr5WUxYgatnyJaDT1KIH9XkM5usOSPI/U8YudH0dvpyyE9ss3S9lz+cW5a8J6Elp+nxvo7IMpj/LT++cNQ8BPUnukTKtsHWdL89Pr/0+TwE9KUu5npbZrHL3gyR/kuTAxnUQ0GluUYP6PAfzja6b5PFJPpn21+DDKYNydsysNnvbkfJF8KFNyjduqg3o634+yZvS5kv+S0nuv0k+8xLQk/IZeGDKbIvaOl+T5O8y/Mt53gL6uiNS5qu32Kt+MP2flLXvu2r1EtDpxEEpb97WH4iu0l9kMYL5oNumzOn+Vqar956UL65Xpf2gt1o3T5kid0rK7miXpIz+HaderQL6uqOTvCST72v93ZTuhDtn6z7SeQroG90pydsy+WDBr6bsIXDUFuee14C+biXJHVI+GzXrtH8tyXMzmwAloM9Ai8EOi2hHys5fz09/T3yjXJ7kd3PtSN9FtSNlj+rN0p4k30kJMN9N8s2UJ/xPpgy4WxQrKc2U18vW76krU0bmt7Z/ynacxw6km6Rc3ws3pHNTWqquHOO8N0rpUpnG7pTpTl06JNfWdWP9D095L12QUucLUnbyW2892soNU/c3OjnlJmsWtvp83Thl7MHGa3DBhn+v983PwsHZfKfFcVyc8d6vsyjLhalf74IO3C7JZ1N3t9ZFeneSIzusN7C5u6bu8/sbsy8ylD2ol9lZSX4xZZDV8RvS0TMux9kpNxafWUtnZrGfymGRHVt5/CLseQAA297zU/eEfuvZFxkWc7AVQJc8obOQlr3JHejfASkzBqZ1aspUthZWUkb+T+sHSb7fqCwAsHBqFu45I+1m7JxYUY7VlJH0ALC03pm6QHrPBmXYmeRTleV4eYNyAMDCek7qAun5uXZDmWmspCx9Wzvl9I4VZQCAhXef1AfTy1LWfJ/ULZL8U4P8v5blXawLAJKUAbotNsC5JsnfJrlvRs/i2T/J81JWIKvNdzXJC2suANRyNwnMi5OTvLjh+c5J2dr3gpSbhe+mTEn72bV0y5R+81ZuE4PiACCHp93T8qxTlxvRwFj27bsAAGt+lLKpyPF9F2RCe5I8JGXTDgAgZfe089L/E/ckqevtUgFgId0jZXBb34F6nPT5tO2Hh6lpcgfmzfkpI9CnmYI2S7uT3C9l33UAYIh9k7wm/T+Bb5We3lntAWAbWUmZ29134B5Mu5OcFNN+AWAiT8389Kl/M8ldu60uAGxfd0jy6fQbzD+e5MiuKwoA292+SX4nyRWZbSDfk+RPYzQ7ADR1eJJnJPlSug3kP0nypiS3mk21AGA5raT0Z/9VSt92q0D+ySTPTnLz2VUF6hmlCWwHK0mOSnKntXTHJEcnOTRl9bnrbHjtVUkuSlmq9cIN/39RkjOSfGNmpYaGBHRgGexIct2U77zvpDyJAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz9f8BCmTSQTzYr/8AAAAASUVORK5CYII=");
// CONCATENATED MODULE: ./assets/Logo/Octagon-logo-1000BA.png
/* harmony default export */ var Octagon_logo_1000BA = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAEvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjUwMCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjUwMCIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICB0aWZmOkltYWdlV2lkdGg9IjUwMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTAwIgogICB0aWZmOlJlc29sdXRpb25Vbml0PSIyIgogICB0aWZmOlhSZXNvbHV0aW9uPSI3Mi4wIgogICB0aWZmOllSZXNvbHV0aW9uPSI3Mi4wIgogICBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIgogICBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDIx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");
// CONCATENATED MODULE: ./assets/Logo/Octagon-logo-black.png
/* harmony default export */ var Octagon_logo_black = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAEvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjUwMCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjUwMCIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICB0aWZmOkltYWdlV2lkdGg9IjUwMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTAwIgogICB0aWZmOlJlc29sdXRpb25Vbml0PSIyIgogICB0aWZmOlhSZXNvbHV0aW9uPSI3Mi4wIgogICB0aWZmOllSZXNvbHV0aW9uPSI3Mi4wIgogICBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIgogICBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDIx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");
// CONCATENATED MODULE: ./assets/Icons/Menu.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Menu_SvgMenu = function SvgMenu(props) {
  return /*#__PURE__*/external_react_default.a.createElement("svg", _extends({
    viewBox: "0 0 500 500",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2
  }, props), _path || (_path = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M-.002 236.876A26.878 26.878 0 0126.873 210h446.252A26.877 26.877 0 01500 236.876v26.25A26.878 26.878 0 01473.125 290H26.873A26.875 26.875 0 01-.002 263.126v-26.25zM157.02 59.413a26.876 26.876 0 0126.874-26.875h289.23A26.874 26.874 0 01500 59.413v26.25a26.876 26.876 0 01-26.876 26.874h-289.23a26.874 26.874 0 01-26.875-26.875v-26.25zM88.865 414.339a26.875 26.875 0 0126.875-26.875h357.385A26.876 26.876 0 01500 414.339v26.25a26.876 26.876 0 01-26.875 26.874H115.741a26.875 26.875 0 01-26.876-26.874v-26.25z",
    fill: "#0000d4"
  })));
};

/* harmony default export */ var Menu = (Menu_SvgMenu);
// CONCATENATED MODULE: ./assets/Icons/Menu-dark.svg
var Menu_dark_path;

function Menu_dark_extends() { Menu_dark_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Menu_dark_extends.apply(this, arguments); }



var Menu_dark_SvgMenuDark = function SvgMenuDark(props) {
  return /*#__PURE__*/external_react_default.a.createElement("svg", Menu_dark_extends({
    viewBox: "0 0 500 500",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2
  }, props), Menu_dark_path || (Menu_dark_path = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M-.002 236.876A26.878 26.878 0 0126.873 210h446.252A26.877 26.877 0 01500 236.876v26.25A26.878 26.878 0 01473.125 290H26.873A26.875 26.875 0 01-.002 263.126v-26.25zM157.02 59.413a26.876 26.876 0 0126.874-26.875h289.23A26.874 26.874 0 01500 59.413v26.25a26.876 26.876 0 01-26.876 26.874h-289.23a26.874 26.874 0 01-26.875-26.875v-26.25zM88.865 414.339a26.875 26.875 0 0126.875-26.875h357.385A26.876 26.876 0 01500 414.339v26.25a26.876 26.876 0 01-26.875 26.874H115.741a26.875 26.875 0 01-26.876-26.874v-26.25z"
  })));
};

/* harmony default export */ var Menu_dark = (Menu_dark_SvgMenuDark);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "resize-observer-polyfill"
var external_resize_observer_polyfill_ = __webpack_require__("ocwR");
var external_resize_observer_polyfill_default = /*#__PURE__*/__webpack_require__.n(external_resize_observer_polyfill_);

// CONCATENATED MODULE: ./hooks/useObserver.ts




const useObserver = ({
  callback,
  element
}) => {
  const current = element && element.current;
  const observer = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(() => {
    if (observer && observer.current && current) {
      observer.current.unobserve(current);
    }

    const resizeObserverOrPolyfill = external_resize_observer_polyfill_default.a;
    observer.current = new resizeObserverOrPolyfill(callback);
    observe();
    return () => {
      if (observer && observer.current && element && element.current) {
        observer.current.unobserve(element.current);
      }
    };
  }, [current]);

  const observe = () => {
    if (element && element.current && observer.current) {
      observer.current.observe(element.current);
    }
  };
};

useObserver.propTypes = {
  element: external_prop_types_default.a.object,
  callback: external_prop_types_default.a.func
};
/* harmony default export */ var hooks_useObserver = (useObserver);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// CONCATENATED MODULE: ./components/modules/navbar.tsx






















const Navbar = ({
  dark
}) => {
  const router = Object(router_["useRouter"])();
  const {
    0: isLoaded,
    1: setLoaded
  } = Object(external_react_["useState"])(false);
  const size = Object(useWindowSize["a" /* default */])();
  const navRef = Object(external_react_["useRef"])(null);
  const FullNavbar = size.width > parseInt(utils_module_default.a.tablet) - 100;
  const {
    NavbarHeight,
    setNavbarHeight
  } = Object(external_react_["useContext"])(NavbarHeightContext);
  const {
    NavActive: NavActive,
    setNavActive: setNavActive
  } = Object(external_react_["useContext"])(NavActiveContext);
  const styles = Object(external_react_spring_["useSpring"])({
    opacity: isLoaded ? 1 : 0
  });

  const heightCallback = () => {
    try {
      setNavbarHeight(navRef.current.clientHeight);
    } catch (e) {}
  };

  hooks_useObserver({
    callback: heightCallback,
    element: navRef
  });
  Object(external_react_["useEffect"])(() => {
    setLoaded(true);
  }, []);
  const contactSpring = Object(external_react_spring_["useSpring"])({
    opacity: isLoaded ? 1 : 0,
    marginTop: isLoaded ? 0 : -100
  });
  const logoSpring = Object(external_react_spring_["useSpring"])({
    opacity: isLoaded ? 1 : 0,
    marginTop: isLoaded ? 0 : -100
  });
  const navigatorSpring = Object(external_react_spring_["useSpring"])({
    opacity: isLoaded ? 1 : 0,
    marginTop: isLoaded ? 0 : -100
  });
  const [, setY] = Object(external_react_spring_["useSpring"])(() => ({
    y: 0
  }));

  const scrollAction = props => {
    return window.scroll(500, props.y);
  };

  const switchNavButtonActive = () => {
    setNavActive(!FullNavbar);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_spring_["animated"].div, {
      style: styles,
      className: "navbar",
      ref: navRef,
      children: FullNavbar ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("header", {
        className: navbar_module_default.a.container,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_spring_["animated"].div, {
            style: logoSpring,
            className: navbar_module_default.a.logo,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                children: dark ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                  height: 180,
                  width: 180,
                  src: Octagon_logo_poppins_000000,
                  alt: "Octagon Logo"
                }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                  height: 180,
                  width: 180,
                  src: Octagon_logo_poppins_1000BA,
                  alt: "Octagon Logo"
                })
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_spring_["animated"].div, {
            style: navigatorSpring,
            className: navbar_module_default.a.navigator,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: navbar_module_default.a.wrapper,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                      className: navbar_module_default.a.pagenavigators,
                      style: {
                        textDecoration: router.pathname == "/" ? "underline" : "none"
                      },
                      children: "Home"
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/Events",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                      className: navbar_module_default.a.pagenavigators,
                      style: {
                        textDecoration: router.pathname == "/Events" ? "underline" : "none"
                      },
                      children: "Events"
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/About",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                      className: navbar_module_default.a.pagenavigators,
                      style: {
                        textDecoration: router.pathname == "/About" ? "underline" : "none"
                      },
                      children: "About"
                    })
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_scroll_["Link"], {
                className: navbar_module_default.a.contact,
                to: "footer",
                spy: true,
                smooth: true,
                offset: 0,
                duration: 500,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_button["a" /* default */], {
                  dark: dark,
                  fontsize: "20px",
                  width: 120,
                  height: 40,
                  children: "Contact"
                })
              })]
            })
          })]
        })
      }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
        className: navbar_module_default.a.container_small,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: navbar_module_default.a.logo_small,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: dark ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                height: 180,
                width: 180,
                src: Octagon_logo_black,
                alt: "Octagon Logo Black"
              }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                height: 180,
                width: 180,
                src: Octagon_logo_1000BA,
                alt: "Octagon Logo"
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: navbar_module_default.a.menuicon,
          onClick: () => switchNavButtonActive(),
          children: !dark ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Menu, {}) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(Menu_dark, {})
        })]
      })
    })
  });
};

/* harmony default export */ var navbar = (Navbar);
// EXTERNAL MODULE: ./components/modules/footer.module.scss
var footer_module = __webpack_require__("HSwI");
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);

// CONCATENATED MODULE: ./assets/Logo/Octagon-logo-grayed.svg
var Octagon_logo_grayed_path;

function Octagon_logo_grayed_extends() { Octagon_logo_grayed_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Octagon_logo_grayed_extends.apply(this, arguments); }



var Octagon_logo_grayed_SvgOctagonLogoGrayed = function SvgOctagonLogoGrayed(props) {
  return /*#__PURE__*/external_react_default.a.createElement("svg", Octagon_logo_grayed_extends({
    viewBox: "0 0 500 500",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2
  }, props), Octagon_logo_grayed_path || (Octagon_logo_grayed_path = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M398.226 57.668l75.78 75.778a57.382 57.382 0 0116.806 40.574V325.98a57.379 57.379 0 01-16.806 40.574L366.553 474.005a57.37 57.37 0 01-40.573 16.806H174.02a57.378 57.378 0 01-40.575-16.806L25.994 366.553A57.379 57.379 0 019.188 325.98V174.02a57.382 57.382 0 0116.806-40.574c27.14-27.14 80.313-80.31 107.451-107.452A57.386 57.386 0 01174.02 9.19h151.96A57.378 57.378 0 01365.535 25l-.268 99.804s2.282 15.999-19.035 30.45c-21.315 14.452-31.157 31.812-29.517 60.15 1.64 28.341 2.432 83.12 5.29 102.234.847 5.67 1.6 12.491 11.858 12.456 10.26-.038 12.395-4.275 12.907-9.616 1.717-17.92-2.602-97.915-2.602-97.915s.656-8.749 10.886-8.749c10.23 0 12.406 8.989 12.406 8.989l1.287 99.352s.265 8.43 10.358 8.43c10.091 0 10.357-8.43 10.357-8.43l1.289-99.352s2.176-8.989 12.406-8.989 10.883 8.749 10.883 8.749-4.317 79.994-2.6 97.915c.51 5.34 2.645 9.578 12.905 9.616 10.261.035 11.014-6.786 11.861-12.456 2.858-19.115 3.648-73.893 5.287-102.233 1.64-28.34-8.2-45.7-29.517-60.151-21.314-14.451-19.035-30.45-19.035-30.45l5.285-67.136z",
    fill: "none",
    stroke: "#c6c6c6",
    strokeWidth: 14.990114
  })));
};

/* harmony default export */ var Octagon_logo_grayed = (Octagon_logo_grayed_SvgOctagonLogoGrayed);
// CONCATENATED MODULE: ./components/modules/footer.tsx








const footer = ({
  dark
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("footer", {
    className: `${dark ? footer_module_default.a.darkBg : footer_module_default.a.prBg} ${footer_module_default.a.container}`,
    id: "footer",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: footer_module_default.a.innerContainer,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_superellipse_default.a, {
        r1: 0.00006,
        r2: 0.132,
        style: {
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          position: "relative",
          margin: 0
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: footer_module_default.a.content,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: footer_module_default.a.blockheading,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Contact"]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: footer_module_default.a.block1,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: footer_module_default.a.half,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: "E: office@octagon.at"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: "T: +43 123 456789"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: footer_module_default.a.half,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: "Loremstreet 1"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: "1010 Vienna, Austria"
              })]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: footer_module_default.a.blockheading,
            children: "Opening Times"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: footer_module_default.a.block2,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: footer_module_default.a.half,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: "SUN - THU :\xA0"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: "4 pm - 10.30 pm "
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: footer_module_default.a.half,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: "FRI - SAT :\xA0"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: " 4 pm - 11.00 pm"
              })]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: footer_module_default.a.blockheading,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: "Follow us on "
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: "Social Media"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: footer_module_default.a.block3,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: footer_module_default.a.half,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: "Instagram"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: "Dribbble"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: footer_module_default.a.half,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: "Facebook"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: "Twitter"
              })]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: footer_module_default.a.bottom,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: footer_module_default.a.wrap,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: footer_module_default.a.logo,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Octagon_logo_grayed, {})
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                children: ["\xA9 2021 ungarmichael", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Made with ", "<3", " in Austria"]
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                className: footer_module_default.a.privacy,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                    href: "/Imprint",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      children: "Imprint"
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                    href: "/Privacy",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      children: "Privacy & Cookie policy"
                    })
                  })
                })]
              })
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ var modules_footer = (footer);
// CONCATENATED MODULE: ./components/layouts/layout.tsx












const NavbarHeightContext = /*#__PURE__*/external_react_default.a.createContext({
  NavbarHeight: 0,
  setNavbarHeight: x => {}
});
const NavActiveContext = /*#__PURE__*/external_react_default.a.createContext({
  NavActive: false,
  setNavActive: x => {}
});
function Layout({
  children,
  dark
}) {
  const {
    0: NavbarHeight,
    1: setNavbarHeight
  } = Object(external_react_["useState"])(0);
  const {
    0: NavActive,
    1: setNavActive
  } = Object(external_react_["useState"])(false);
  const size = Object(useWindowSize["a" /* default */])();
  const blurSpring = Object(external_react_spring_["useSpring"])({
    filter: NavActive ? "blur(5px)" : "blur(0px)"
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavActiveContext.Provider, {
    value: {
      NavActive: NavActive,
      setNavActive: setNavActive
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(nav, {
        dark: dark
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_spring_["animated"].div, {
        style: blurSpring,
        onClick: () => {
          if (NavActive == true) {
            setNavActive(false);
          }
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: layout_module_default.a.container,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
            children: [/*#__PURE__*/jsx_runtime_["jsx"]("link", {
              rel: "icon",
              href: "/Octagon-logo-1000BA.ico"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
              name: "description",
              content: "5-Star Restaurant in Vienna that supports all Crypto-currencies."
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
              name: "og:title",
              content: "Home-Octagon"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(NavbarHeightContext.Provider, {
            value: {
              NavbarHeight,
              setNavbarHeight
            },
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(navbar, {
              dark: dark
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
              className: layout_module_default.a.main,
              style: {
                minHeight: size.height - NavbarHeight
              },
              children: children
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(modules_footer, {
          dark: dark
        })]
      })]
    })
  });
}

function dynamic(arg0) {
  throw new Error("Function not implemented.");
}

/***/ })

/******/ });